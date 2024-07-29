import {
  Csprt,
  XSupportCard
} from "~/types";
import {
  ProduceEffect,
  ProduceSkill,
  ProduceTrigger,
  SupportCardProduceSkillLevelAssist
} from "~/types/proto/pmaster";
import { filterItems } from "~/api/apiUtils";

export function getXSupportCard([
  SupportCards,
  ProduceCards,
  ProduceItems,
  ProduceEventSupportCards,
  ProduceStepEventDetails,
  ProduceEffects,
  SupportCardProduceSkillLevelDances,
  SupportCardProduceSkillLevelVocals,
  SupportCardProduceSkillLevelVisuals,
  SupportCardProduceSkillLevelAssists,
  ProduceSkills,
  ProduceTriggers,
]: Csprt
): XSupportCard[] {
  const supportCardProduceSkillLevels = [
    ...SupportCardProduceSkillLevelAssists,
    ...SupportCardProduceSkillLevelDances,
    ...SupportCardProduceSkillLevelVisuals,
    ...SupportCardProduceSkillLevelVocals,
  ]
  const xSupportCards: XSupportCard[] = SupportCards.map(supportCard => {
    const produceCards = filterItems(ProduceCards, "originSupportCardId", supportCard.id, { sortRules: ["upgradeCount", true] })
    const produceItems = filterItems(ProduceItems, "originSupportCardId", supportCard.id, { sortRules: ["evaluation", true] })
    const produceEvents: XSupportCard["produceEvents"] = filterItems(
      ProduceEventSupportCards, "supportCardId", supportCard.id, { sortRules: ["number", true] }
    ).map(event => {
      const eventDetail = ProduceStepEventDetails.find(detail => event.produceStepEventDetailId === detail.id)!
      const produceEffects = filterItems(ProduceEffects, "id", eventDetail.produceEffectIds)
      return {
        ...event,
        ...eventDetail,
        produceEffects: produceEffects,
      }
    })
    const produceSkills = initProduceSkills(
      filterItems(supportCardProduceSkillLevels, "supportCardId", supportCard.id),
      ProduceSkills,
      ProduceEffects,
      ProduceTriggers,
    )

    return {
      ...supportCard,
      produceCards: produceCards,
      produceItems: produceItems,
      produceEvents: produceEvents,
      produceSkills: produceSkills,
    }
  })
  return xSupportCards
}

function initProduceSkills(
  supportCardProduceSkillLevels: SupportCardProduceSkillLevelAssist[],
  produceSkills: ProduceSkill[],
  ProduceEffects: ProduceEffect[],
  ProduceTriggers: ProduceTrigger[],
): XSupportCard["produceSkills"] {
  const orders = [
    ...new Set(supportCardProduceSkillLevels.map(level => level.order))
  ].sort((a, b) => a - b)

  const skills = orders.map(order =>
    supportCardProduceSkillLevels
      .filter(level => level.order === order)
      .map(level => {
        const produceSkill = produceSkills.find(skill => skill.id === level.produceSkillId && skill.level === level.produceSkillLevel)!
        const produceEffects = [
          produceSkill.produceEffectId1,
          produceSkill.produceEffectId2,
          produceSkill.produceEffectId3,
        ].reduce((acc, cur) => {
          if (cur !== "") acc.push(cur)
          return acc
        }, new Array<string>()).map(effId => {
          return ProduceEffects.find(effect => effect.id === effId)!
        })
        return {
          ...level,
          produceSkill: {
            produceEffects: produceEffects,
            ...produceSkill,
          },
          producePhaseType: ProduceTriggers.find(trigger => trigger.id === produceSkill.produceTriggerId1)?.phaseType ?? 0
        }
      })
      .sort((a, b) => a.supportCardLevel - b.supportCardLevel)
  )
  return skills
}