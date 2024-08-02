import { PCard, XProduceCard } from "~/types";
import { ProduceCard, ProduceExamEffect } from "~/types/proto/pmaster";
import { UnArray } from "~/types/utils";

export function getExamEffects(
  produceExamEffects: ProduceExamEffect[]
) {
  const examEffects = produceExamEffects.reduce((acc, cur) => {
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
]: PCard): XProduceCard[] {

  const examEffects = getExamEffects(ProduceExamEffect)

  const xProduceCards = ProduceCard
    .filter(x => x.upgradeCount < 2)
    .map(card => {
      return getSingleXProduceCard(card, examEffects)
    })

  return xProduceCards
}
