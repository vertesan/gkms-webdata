import { getCidol, getCsprt, getMaster, getPCard } from "~/kv"
import { getXMaster } from "~/api/master"
import { getXSupportCard } from "~/api/csprt"
import { getXIdolCard } from "./api/cidol"
import { getXProduceCard } from "./api/pcard"

export enum ApiTypes {
  master = "master",
  csprt = "csprt",
  cidol = "cidol",
  pcard = "pcard",
}
export const path2ApiType: { [key: string]: ApiTypes | undefined } = {
  "/api/master": ApiTypes.master,
  "/api/csprt": ApiTypes.csprt,
  "/api/cidol": ApiTypes.cidol,
  "/api/pcard": ApiTypes.pcard,
}

export async function constructResponse(apiType: ApiTypes, env: Env): Promise<Response> {
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
  }
  switch (apiType) {
    case ApiTypes.master:
      const master = await getMaster(env)
      if (master) {
        const xMaster = getXMaster(master)
        return new Response(JSON.stringify(xMaster), {
          headers: {
            ...headers,
            "Cache-Control": "public, max-age=150, s-maxage=600"
          }
        })
      }
      break
    case ApiTypes.csprt:
      const csprt = await getCsprt(env)
      if (csprt) {
        const xSupportCards = getXSupportCard(csprt)
        return new Response(JSON.stringify(xSupportCards), {
          headers: {
            ...headers,
            "Cache-Control": "public, max-age=150, s-maxage=600"
          }
        })
      }
      break
    case ApiTypes.cidol:
      const cidol = await getCidol(env)
      if (cidol) {
        const xIdolCards = getXIdolCard(cidol)
        return new Response(JSON.stringify(xIdolCards), {
          headers: {
            ...headers,
            "Cache-Control": "public, max-age=150, s-maxage=600"
          }
        })
      }
      break
    case ApiTypes.pcard:
      const pcard = await getPCard(env)
      if (pcard) {
        const xPCards = getXProduceCard(pcard)
        return new Response(JSON.stringify(xPCards), {
          headers: {
            ...headers,
            "Cache-Control": "public, max-age=150, s-maxage=600"
          }
        })
      }
      break
  }
  return new Response(null, { status: 500, statusText: "Internal Error" })
}
