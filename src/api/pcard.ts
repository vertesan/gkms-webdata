import { PCard, XCustProduceCard, XProduceCard } from "~/types";
import { ProduceCard, ProduceDescriptionProduceCardGrowEffect, ProduceExamEffect } from "~/types/proto/pmaster";
import { UnArray } from "~/types/utils";
import { filterItems } from "./apiUtils";

export function getExamEffects(
  produceExamEffects: ProduceExamEffect[]
) {
  const examEffects = produceExamEffects.reduce((acc, cur) => {
    cur.descriptions = []
    acc[cur.id] = cur
    return acc
  }, {} as { [x: string]: UnArray<ProduceExamEffect> })
  return examEffects
}

export function getSingleXProduceCard(
  produceCard: ProduceCard,
  examEffects: {
    [x: string]: ProduceExamEffect;
  },
): XProduceCard {
  produceCard.descriptions = []
  return {
    ...produceCard,
    playEffects: produceCard.playEffects.map(playEffect => {
      const effect = examEffects[playEffect.produceExamEffectId]
      return {
        ...playEffect,
        produceExamEffect: {
          id: effect.id,
          effectType: effect.effectType,
          effectValue1: effect.effectValue1,
          effectValue2: effect.effectValue2,
          effectCount: effect.effectCount,
          effectTurn: effect.effectTurn,
        }
      }
    })
  }
}

export function getXProduceCard([
  ProduceCard,
  ProduceExamEffect,
  ProduceCardCustomize,
  ProduceCardCustomizeRarityEvaluations,
  ProduceCardGrowEffect,
  ProduceDescriptionProduceCardGrowEffects,
]: PCard): XCustProduceCard[] {

  const examEffects = getExamEffects(ProduceExamEffect)
  const produceDescriptionProduceCardGrowEffects = ProduceDescriptionProduceCardGrowEffects.reduce((acc, cur) => {
    acc[cur.type] = cur
    return acc
  }, {} as { [id: number]: ProduceDescriptionProduceCardGrowEffect })
  const produceCardCustomizeRarityEvaluations = ProduceCardCustomizeRarityEvaluations.reduce((acc, cur) => {
    acc[cur.rarity] = cur.evaluation
    return acc
  }, {} as { [id: number]: number })

  const xCustProduceCards = ProduceCard
    .filter(x => x.upgradeCount < 2)
    .map(card => {
      return {
        ...getSingleXProduceCard(card, examEffects),
        customizeEvaluation: produceCardCustomizeRarityEvaluations[card.rarity],
        customizeEffects: card.produceCardCustomizeIds.map(customizeId => {
          const produceCardCustomizes = filterItems(ProduceCardCustomize, "id", customizeId)
          const customizeEffects = produceCardCustomizes.map(produceCardCustomize => {
            const rawGrowEffects = filterItems(ProduceCardGrowEffect, "id", produceCardCustomize.produceCardGrowEffectIds)
            const growEffects = rawGrowEffects.map(growEffect => {
              const examEffect = growEffect.playProduceExamEffectId ? examEffects[growEffect.playProduceExamEffectId] : undefined
              const growEffectDescription = produceDescriptionProduceCardGrowEffects[growEffect.effectType]
              return {
                ...growEffect,
                examEffect,
                growEffectDescription,
              }
            })
            return {
              ...produceCardCustomize,
              growEffects,
            }
          })
          return customizeEffects
        })
      }
    })

  return xCustProduceCards
}
