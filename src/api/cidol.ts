import { Cidol, XIdolCard } from "~/types"
import { filterItems } from "~/api/apiUtils"
import { getExamEffects, getSingleXProduceCard } from "~/api/pcard"
import { Produce, ProduceGroup } from "~/types/proto/pmaster"

export function getXIdolCard([
  IdolCards,
  IdolCardSkins,
  IdolCardLevelLimits,
  IdolCardLevelLimitProduceSkills,
  IdolCardLevelLimitStatusUps,
  IdolCardPotentials,
  IdolCardPotentialProduceSkills,
  ProduceCards,
  ProduceItems,
  ProduceSkills,
  ProduceEffects,
  ProduceStepAuditionDifficultys,
  ProduceExamBattleNpcGroups,
  ProduceExamBattleConfigs,
  ProduceExamBattleScoreConfig,
  ProduceExamGimmickEffectGroup,
  ProduceExamEffect,
  ProduceGroup,
  Produce,
]: Cidol
): XIdolCard[] {
  const examEffects = getExamEffects(ProduceExamEffect)
  const produceIdMap = Produce.reduce((acc, cur) => {
    const group = ProduceGroup.find(x => x.produceIds.includes(cur.id))
    if (!group) return acc
    acc[cur.id] = {
      produce: cur,
      group: group,
    }
    return acc
  }, {} as { [id: string]: { produce: Produce, group: ProduceGroup } })

  const xIdolCards: XIdolCard[] = IdolCards.map(idolCard => {
    const produceCards =
      filterItems(ProduceCards, "id", idolCard.produceCardId, { sortRules: ["upgradeCount", true] })
        .map(x => getSingleXProduceCard(x, examEffects))
    const produceItems = filterItems(ProduceItems, "id", [idolCard.beforeProduceItemId, idolCard.afterProduceItemId], { sortRules: ["evaluation", true] })
    const idolCardSkins = filterItems(IdolCardSkins, "idolCardId", idolCard.id, { sortRules: ["order", false] })

    const levelLimitStatusUps = filterItems(IdolCardLevelLimitStatusUps, "id", idolCard.idolCardLevelLimitStatusUpId, { sortRules: ["rank", true] })
    const levelLimitProduceSkills = filterItems(IdolCardLevelLimitProduceSkills, "id", idolCard.idolCardLevelLimitProduceSkillId, { sortRules: ["rank", true] })

    const levelLimits = filterItems(
      IdolCardLevelLimits, "id", idolCard.idolCardLevelLimitId, { sortRules: ["rank", true] }
    ).map(levelLimit => {
      const statusUp = levelLimitStatusUps.find(statUp => statUp.rank === levelLimit.rank)!
      const limitProduceSkill = levelLimitProduceSkills.find(limitPSkill =>
        limitPSkill.rank === levelLimit.rank &&
        limitPSkill.id === idolCard.idolCardLevelLimitProduceSkillId
      )
      const produceSkill = limitProduceSkill
        ? ProduceSkills.find(skills => skills.id === limitProduceSkill.produceSkillId)
        : undefined
      let produceSkillWithEffects
      if (produceSkill) {
        const effectIds = [
          produceSkill.produceEffectId1,
          produceSkill.produceEffectId2,
          produceSkill.produceEffectId3,
        ].filter(id => id !== "")
        produceSkillWithEffects = {
          ...produceSkill,
          produceEffects: filterItems(ProduceEffects, "id", effectIds)
        }
      }
      return {
        ...levelLimit,
        ...statusUp,
        limitProduceSkill,
        produceSkill: produceSkillWithEffects,
      }
    })

    const potentials = filterItems(
      IdolCardPotentials, "id", idolCard.idolCardPotentialId, { sortRules: ["rank", true] }
    ).map(potential => {
      const potentialProduceSkill = IdolCardPotentialProduceSkills.find(pSkill =>
        pSkill.rank === potential.rank &&
        pSkill.id === idolCard.idolCardPotentialProduceSkillId
      )
      const produceSkill = potentialProduceSkill
        ? ProduceSkills.find(skills => skills.id === potentialProduceSkill.produceSkillId)
        : undefined
      let produceSkillWithEffects
      if (produceSkill) {
        const effectIds = [
          produceSkill.produceEffectId1,
          produceSkill.produceEffectId2,
          produceSkill.produceEffectId3,
        ].filter(id => id !== "")
        produceSkillWithEffects = {
          ...produceSkill,
          produceEffects: filterItems(ProduceEffects, "id", effectIds)
        }
      }
      return {
        ...potential,
        potentialProduceSkill,
        produceSkill: produceSkillWithEffects,
      }
    })

    const auditionDifficulties = filterItems(
      ProduceStepAuditionDifficultys, "id", idolCard.produceStepAuditionDifficultyId
    )

    const auditionScenarios = auditionDifficulties.reduce((accDifficulty, curDifficulty) => {
      const groupType = produceIdMap[curDifficulty.produceId].group.type
      const scenario = accDifficulty[groupType] || {}

      const npcs = filterItems(ProduceExamBattleNpcGroups, "id", curDifficulty.produceExamBattleNpcGroupId, { sortRules: ["number", true] })
      const examBattleConfig = ProduceExamBattleConfigs.find(config => config.id === curDifficulty.produceExamBattleConfigId)!
      const examBattleScoreConfigs = filterItems(ProduceExamBattleScoreConfig, "id", examBattleConfig.produceExamBattleScoreConfigId, { sortRules: ["parameter", true] })
      const examGimmicks = curDifficulty.produceExamGimmickEffectGroupId
        ? filterItems(ProduceExamGimmickEffectGroup, "id", curDifficulty.produceExamGimmickEffectGroupId, { sortRules: ["startTurn", true] })
        : undefined
      const xDifficulty = {
        ...curDifficulty,
        npcs,
        examBattleConfig,
        examBattleScoreConfigs,
        examGimmicks,
      }
      if (!scenario[curDifficulty.stepType]) {
        scenario[curDifficulty.stepType] = []
      }
      scenario[curDifficulty.stepType].unshift(xDifficulty)
      accDifficulty[groupType] = scenario
      return accDifficulty
    }, {} as XIdolCard['auditionScenarios'])


    const auditionDifficulty = filterItems(
      ProduceStepAuditionDifficultys, "id", idolCard.produceStepAuditionDifficultyId
    ).map(difficulty => {
      const npcs = filterItems(ProduceExamBattleNpcGroups, "id", difficulty.produceExamBattleNpcGroupId, { sortRules: ["number", true] })
      const examBattleConfig = ProduceExamBattleConfigs.find(config => config.id === difficulty.produceExamBattleConfigId)!
      const examBattleScoreConfigs = filterItems(ProduceExamBattleScoreConfig, "id", examBattleConfig.produceExamBattleScoreConfigId, { sortRules: ["parameter", true] })
      const examGimmicks = difficulty.produceExamGimmickEffectGroupId
        ? filterItems(ProduceExamGimmickEffectGroup, "id", difficulty.produceExamGimmickEffectGroupId, { sortRules: ["startTurn", true] })
        : undefined
      return {
        ...difficulty,
        npcs,
        examBattleConfig,
        examBattleScoreConfigs,
        examGimmicks,
      }
    })

    return {
      ...idolCard,
      produceCards,
      produceItems,
      idolCardSkins,
      levelLimits,
      potentials,
      auditionDifficulty,
      auditionScenarios,
    }
  })
  return xIdolCards
}
