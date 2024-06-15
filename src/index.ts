/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const allowedOrigins = [
	"http://localhost:8787",
]

enum ApiTypes {
	csprt = "csprt",
	cidol = "cidol",
}
const path2ApiType: { [key: string]: ApiTypes | undefined } = {
	"/api/csprt": ApiTypes.csprt,
	"/api/cidol": ApiTypes.cidol,
}

function isNonNull<T extends unknown[]>(args: T): args is { [P in keyof T]: NonNullable<T[P]> } {
	return args.every(arg => arg !== null)
}

async function handleOptions(request: Request) {
	const origin = request.headers.get("Origin")
	if (
		origin === null ||
		request.headers.get("Access-Control-Request-Method") === null ||
		request.headers.get("Access-Control-Request-Headers") === null
	) {
		// Handle standard OPTIONS requests
		return new Response(null, {
			headers: {
				Allow: "GET, OPTIONS",
			},
		});
	}
	// determine if the origin is allowed
	if (!allowedOrigins.includes(origin)) {
		return new Response(null, { status: 418, statusText: "I'm a teapot" })
	}

	const corsHeaders = {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET",
		"Access-Control-Max-Age": "86400",
	}
	// Handle CORS preflight requests.
	return new Response(null, {
		headers: {
			...corsHeaders,
			"Access-Control-Allow-Headers": request.headers.get(
				"Access-Control-Request-Headers"
			) ?? "authorization,content-type",
		},
	});
}

// Verify the request is from a trusted source
function verifyRequest(request: Request): boolean {
	const auth = request.headers.get("X-Sekaiiti")
	if (auth === null) {
		return false
	}
	if (auth !== "Kawaii") {
		return false
	}
	return true
}

function getCorsHeaders(request: Request) {
	const origin = request.headers.get("Origin")
	const corsHeaders = origin ? {
		"Access-Control-Allow-Origin": origin,
		"Vary": "Origin",
	} : undefined
	return corsHeaders
}

async function constructResponse(apiType: ApiTypes, env: Env): Promise<Response> {
	const headers = {
		"Content-Type": "application/json;charset=UTF-8"
	}
	switch (apiType) {
		case ApiTypes.csprt:
			const results = await Promise.all([
				env.GKMS_KV.get("ProduceItem", { type: "json" }),
				env.GKMS_KV.get("ProduceSkill", { type: "json" }),
				env.GKMS_KV.get("SupportCard", { type: "json" }),
				env.GKMS_KV.get("SupportCardProduceSkillLevelAssist", { type: "json" }),
				env.GKMS_KV.get("SupportCardProduceSkillLevelDance", { type: "json" }),
				env.GKMS_KV.get("SupportCardProduceSkillLevelVisual", { type: "json" }),
				env.GKMS_KV.get("SupportCardProduceSkillLevelVocal", { type: "json" }),
			])
			if (isNonNull(results)) {
				const data = {
					ProduceItem: results[0],
					ProduceSkill: results[1],
					SupportCard: results[2],
					SupportCardProduceSkillLevelAssist: results[3],
					SupportCardProduceSkillLevelDance: results[4],
					SupportCardProduceSkillLevelVisual: results[5],
					SupportCardProduceSkillLevelVocal: results[6],
				}
				return new Response(JSON.stringify(data), { headers: headers })
			}
			break
		case ApiTypes.cidol:
			break
	}
	return new Response(null, { status: 404, statusText: "Not found" })
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		// handle OPTIONS requests first (CORS preflight in most cases)
		if (request.method === "OPTIONS") {
			return handleOptions(request)
		} else if (
			// ban non GET requests
			request.method !== "GET"
		) {
			return new Response(null, {
				status: 405,
				statusText: "Method Not Allowed",
			})
		}

		const corsHeaders = getCorsHeaders(request)

		// verify request
		if (!verifyRequest(request)) {
			return new Response(null, {
				status: 401,
				statusText: "Request not authorized",
				headers: corsHeaders,
			})
		}

		const url = new URL(request.url)
		const path = url.pathname
		const apiType = path2ApiType[path]

		if (apiType === undefined) {
			return new Response(null, {
				status: 404,
				statusText: "Not Found",
				headers: corsHeaders,
			})
		}

		// get cache from cache storage
		const cacheKey = new Request(url.toString(), request)
		const cache = caches.default
		let response = await cache.match(cacheKey)
		if (response) {
			console.log(`Cache hit for: ${request.url}.`)
			return response
		}

		response = await constructResponse(apiType, env)
		response.headers.append("Cache-Control", "s-maxage=3600")
		ctx.waitUntil(cache.put(cacheKey, response.clone()))
		return response
	},
};
