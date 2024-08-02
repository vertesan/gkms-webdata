import { Cidol, XIdolCard } from "~/types"
import { filterItems } from "~/api/apiUtils"
import { getExamEffects, getSingleXProduceCard } from "~/api/pcard"

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
]: Cidol
): XIdolCard[] {
  const examEffects = getExamEffects(ProduceExamEffect)

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
    }
  })
  return xIdolCards
}
