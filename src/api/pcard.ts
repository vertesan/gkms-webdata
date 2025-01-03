import { PCard, XCustProduceCard, XProduceCard } from "~/types";
import { ProduceCard, ProduceCardCustomize, ProduceCardCustomizeRarityEvaluation, ProduceCardGrowEffect, ProduceDescriptionProduceCardGrowEffect, ProduceExamEffect } from "~/types/proto/pmaster";
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

export function getCardGrowEffects(
  ProduceDescriptionProduceCardGrowEffects: ProduceDescriptionProduceCardGrowEffect[]
) {
  const cardGrowEffects = ProduceDescriptionProduceCardGrowEffects.reduce((acc, cur) => {
    acc[cur.type] = cur
    return acc
  }, {} as { [id: number]: ProduceDescriptionProduceCardGrowEffect })
  return cardGrowEffects
}

export function getCustomizeRarityEvaluations(
  ProduceCardCustomizeRarityEvaluations: ProduceCardCustomizeRarityEvaluation[]
) {
  const custEvaluations = ProduceCardCustomizeRarityEvaluations.reduce((acc, cur) => {
    acc[cur.rarity] = cur.evaluation
    return acc
  }, {} as { [id: number]: number })
  return custEvaluations
}

export function getSingleXProduceCard(
  produceCard: ProduceCard,
  examEffects: {
    [x: string]: ProduceExamEffect,
  },
): XProduceCard {
  // remove deprecated items for size saving
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

export function getSingleXCustProduceCard(
  produceCard: ProduceCard,
  examEffects: {
    [x: string]: ProduceExamEffect,
  },
  cardGrowEffects: {
    [id: number]: ProduceDescriptionProduceCardGrowEffect,
  },
  customizeRarityEvaluations: {
    [id: number]: number,
  },
  cardCustomizesDB: ProduceCardCustomize[],
  cardGrowEffectsDB: ProduceCardGrowEffect[],
): XCustProduceCard {
  return {
    ...getSingleXProduceCard(produceCard, examEffects),
    customizeEvaluation: customizeRarityEvaluations[produceCard.rarity],
    customizeEffects: produceCard.produceCardCustomizeIds.map(customizeId => {
      const produceCardCustomizes = filterItems(cardCustomizesDB, "id", customizeId)
      const customizeEffects = produceCardCustomizes.map(produceCardCustomize => {
        const rawGrowEffects = filterItems(cardGrowEffectsDB, "id", produceCardCustomize.produceCardGrowEffectIds)
        const growEffects = rawGrowEffects.map(growEffect => {
          const examEffect = growEffect.playProduceExamEffectId ? examEffects[growEffect.playProduceExamEffectId] : undefined
          const growEffectDescription = cardGrowEffects[growEffect.effectType]
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
}

export function getXCustProduceCards([
  ProduceCard,
  ProduceExamEffect,
  ProduceCardCustomize,
  ProduceCardCustomizeRarityEvaluations,
  ProduceCardGrowEffect,
  ProduceDescriptionProduceCardGrowEffects,
]: PCard): XCustProduceCard[] {

  const examEffects = getExamEffects(ProduceExamEffect)
  const produceDescriptionProduceCardGrowEffects = getCardGrowEffects(ProduceDescriptionProduceCardGrowEffects)
  const produceCardCustomizeRarityEvaluations = getCustomizeRarityEvaluations(ProduceCardCustomizeRarityEvaluations)

  const xCustProduceCards = ProduceCard
    .filter(x => x.upgradeCount < 2)
    .map(card => {
      return getSingleXCustProduceCard(
        card,
        examEffects,
        produceDescriptionProduceCardGrowEffects,
        produceCardCustomizeRarityEvaluations,
        ProduceCardCustomize,
        ProduceCardGrowEffect,
      )
    })

  return xCustProduceCards
}
