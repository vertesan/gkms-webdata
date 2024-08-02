import { Cidol, Csprt, Master, PCard, UsedDB, isNonNull } from "~/types"
import { MappedUsedDBTuple, UnionArrayToTuple } from "~/types/utils"

export async function getPCard(env: Env): Promise<PCard | null> {
  return await getAllJson([
    "ProduceCard",
    "ProduceExamEffect",
  ], env)
}

export async function getMaster(env: Env): Promise<Master | null> {
  return await getAllJson([
    "Version",
    "Character",
    "ProduceDescription",
    "ProduceEffectIcon",
    "Produce",
    "ExamInitialDeck",
    "ProduceDescriptionProduceEffectType",
    "ProduceDescriptionProduceExamEffectType",
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
  ], env)
}

export async function getCsprt(env: Env): Promise<Csprt | null> {
  return await getAllJson([
    "SupportCard",
    "ProduceCard",
    "ProduceItem",
    "ProduceEventSupportCard",
    "ProduceStepEventDetail",
    "ProduceEffect",
    "SupportCardProduceSkillLevelDance",
    "SupportCardProduceSkillLevelVocal",
    "SupportCardProduceSkillLevelVisual",
    "SupportCardProduceSkillLevelAssist",
    "ProduceSkill",
    "ProduceTrigger",
    "ProduceExamEffect",
  ], env)
}

export async function getCidol(env: Env): Promise<Cidol | null> {
  return await getAllJson([
    "IdolCard",
    "IdolCardSkin",
    "IdolCardLevelLimit",
    "IdolCardLevelLimitProduceSkill",
    "IdolCardLevelLimitStatusUp",
    "IdolCardPotential",
    "IdolCardPotentialProduceSkill",
    "ProduceCard",
    "ProduceItem",
    "ProduceSkill",
    "ProduceEffect",
    "ProduceStepAuditionDifficulty",
    "ProduceExamBattleNpcGroup",
    "ProduceExamBattleConfig",
    "ProduceExamBattleScoreConfig",
    "ProduceExamGimmickEffectGroup",
    "ProduceExamEffect",
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
