import { PCard, XProduceCard } from "~/types";
import { UnArray } from "~/types/utils";

export function getXProduceCard([
  ProduceCard,
  ProduceExamEffect,
]: PCard): XProduceCard[] {

  const examEffects = ProduceExamEffect.reduce((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {} as { [x: string]: UnArray<typeof ProduceExamEffect> })

  const xProduceCards = ProduceCard
    .filter(x => x.upgradeCount < 2)
    .map(card => {
      return {
        ...card,
        playEffects: card.playEffects.map(playEffect => {
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
    })

  return xProduceCards
}
