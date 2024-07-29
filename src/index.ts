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

import { constructResponse, path2ApiType } from "~/routes";

const allowedOrigins = [
	"http://localhost:5173",
	"http://localhost:4173",
	"https://gkms.idolism.org",
]

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
function verifyRequest(request: Request, key: string): boolean {
	const auth = request.headers.get("Authorization")
	if (auth === null) {
		return false
	}
	if (auth !== key) {
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
		if (!verifyRequest(request, env.BASIC_KEY)) {
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
		response.headers.append("Access-Control-Allow-Origin", "*")
		ctx.waitUntil(cache.put(cacheKey, response.clone()))
		return response
	},
};
