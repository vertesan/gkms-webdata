import { Master, UsedDB, isNonNull } from "~/types"
import { MappedUsedDBTuple, UnionArrayToTuple } from "~/types/utils"
import zlib from 'node:zlib';
import { promisify } from 'node:util';

const gunzip = promisify(zlib.gunzip);

export async function getGXJsonString(env: Env, key: string): Promise<string | null> {
  const buf = await env.GKMS_KV.get(key, { type: "arrayBuffer" })
  if (!buf) {
    console.error(`${key} is null in KV`)
    return null
  }
  const data = await gunzip(buf)
  return data.toString()
}

export async function getMaster(env: Env): Promise<Master | null> {
  return await getAllJson([
    "Version",
    "Character",
    "ProduceEffectIcon",
    "Produce",
    "ExamInitialDeck",
    "ProduceDescriptionProduceEffect",
    "ProduceDescriptionExamEffect",
    "CharacterTrueEndBonus",
    "HomeEnter",
    "NoticeListAll",
    "PvpRateGet",
    "PvpRateConfig",
    "PvpRateCommonProduceCard",
    "ExamSetting",
    "ProduceExamBattleScoreConfig",
    "ProduceCard",
    "ProduceItem",
    "ProduceExamGimmickEffectGroup",
    "StoryEvent",
    "CharacterDetail",
    "Achievement",
    "AchievementProgress",
    "EventLabel",
    "ProduceExamEffect",
    "ResultGradePattern",
    "GuildReaction",
    "ProduceDescriptionLabel",
    "ProduceGroup",
  ], env)
}

async function getAllJson<T extends (keyof UsedDB)[]>(keys: UnionArrayToTuple<T>, env: Env): Promise<MappedUsedDBTuple<T> | null> {
  const results = await Promise.all(keys.map(key => {
    return getJson(key, env)
  }))
  if (!isNonNull(results)) {
    return null
  }
  return results as MappedUsedDBTuple<T>
}

async function getJson<T extends keyof UsedDB>(key: T, env: Env): Promise<UsedDB[T] | null> {
  const val = await env.GKMS_KV.get(key, { type: "json" })
  if (val) {
    return val as UsedDB[T]
  }
  console.error(`${key} is null in KV`)
  return null
}
