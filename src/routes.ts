import { getGXJsonString, getMaster } from "~/kv"
import { getXMaster } from "~/api/master"

export enum ApiTypes {
  master = "master",
  csprt = "csprt",
  cidol = "cidol",
  pcard = "pcard",
  memory = "memory",
}
export const path2ApiType: { [key: string]: ApiTypes | undefined } = {
  "/api/master": ApiTypes.master,
  "/api/csprt": ApiTypes.csprt,
  "/api/cidol": ApiTypes.cidol,
  "/api/pcard": ApiTypes.pcard,
  "/api/memory": ApiTypes.memory,
}

export async function constructResponse(apiType: ApiTypes, env: Env): Promise<Response> {
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
  }
  switch (apiType) {
    case ApiTypes.master:
      const master = await getGXJsonString(env, "GXMaster")
      if (master) {
        return new Response(master, {
          headers: {
            ...headers,
            "Cache-Control": "public, max-age=150, s-maxage=600"
          }
        })
      }
      break
    case ApiTypes.csprt:
      const csprt = await getGXJsonString(env, "GXSupportCard")
      if (csprt) {
        return new Response(csprt, {
          headers: {
            ...headers,
            "Cache-Control": "public, max-age=150, s-maxage=600"
          }
        })
      }
      break
    case ApiTypes.cidol:
      const cidol = await getGXJsonString(env, "GXIdolCard")
      if (cidol) {
        return new Response(cidol, {
          headers: {
            ...headers,
            "Cache-Control": "public, max-age=150, s-maxage=600"
          }
        })
      }
      break
    case ApiTypes.pcard:
      const pcard = await getGXJsonString(env, "GXProduceCard")
      if (pcard) {
        return new Response(pcard, {
          headers: {
            ...headers,
            "Cache-Control": "public, max-age=150, s-maxage=600"
          }
        })
      }
      break
    case ApiTypes.memory:
      const memoryInspector = await getGXJsonString(env, "GXMemory")
      if (memoryInspector) {
        return new Response(memoryInspector, {
          headers: {
            ...headers,
            "Cache-Control": "public, max-age=600, s-maxage=3600"
          }
        })
      }
      break
  }
  return new Response(null, { status: 500, statusText: "Internal Error" })
}
