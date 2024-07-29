import { Master, XMaster } from "~/types";
import { EventType, ProducePlanType } from "~/types/proto/penum";
import {
  ProduceCard
} from "~/types/proto/pmaster";
import { filterItems } from "./apiUtils";

export function getXMaster([
  Version,
  Characters,
  ProduceDescriptions,
  ProduceEffectIcons,
  Produces,
  ExamInitialDecks,
  ProduceDescriptionProduceEffectTypes,
  ProduceDescriptionProduceExamEffectTypes,
  CharacterTrueEndBonus,
  HomeEnterResponse,
  NoticeListAllResponse,
  PvpRateGetResponse,
  PvpRateConfig,
  PvpRateCommonProduceCard,
  ExamSetting,
  ProduceExamBattleScoreConfig,
  ProduceCard,
  ProduceItem,
  ProduceExamGimmickEffectGroup,
  StoryEvent,
  CharacterDetail,
  Achievement,
  AchievementProgress,
]: Master): XMaster {

  const characters = Characters.reduce<XMaster['characters']>((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})

  const produceDescriptions = ProduceDescriptions.reduce<XMaster['produceDescriptions']>((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})

  const produceEffectIcons = ProduceEffectIcons.reduce<XMaster['produceEffectIcons']>((acc, cur) => {
    acc[cur.type] = cur
    return acc
  }, {} as XMaster['produceEffectIcons'])

  const produces = Produces.reduce<XMaster['produces']>((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})

  const examInitialDecks = ExamInitialDecks.reduce<XMaster['examInitialDecks']>((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})

  const produceDescriptionEffectTypes = ProduceDescriptionProduceEffectTypes.reduce<XMaster['produceDescriptionEffectTypes']>((acc, cur) => {
    acc[cur.type] = cur
    return acc
  }, {} as XMaster['produceDescriptionEffectTypes'])

  const produceDescriptionExamEffectType = ProduceDescriptionProduceExamEffectTypes.reduce<XMaster['produceDescriptionExamEffectType']>((acc, cur) => {
    acc[cur.type] = cur
    return acc
  }, {} as XMaster['produceDescriptionExamEffectType'])

  const characterTrueEndBonus = CharacterTrueEndBonus.reduce<XMaster['characterTrueEndBonus']>((acc, cur) => {
    acc[cur.id] = cur
    return acc
  }, {})

  const noticeList = {
    infoList: NoticeListAllResponse.infoList,
    bugList: NoticeListAllResponse.bugList,
    prList: NoticeListAllResponse.prList,
  }

  const events = HomeEnterResponse.events
    .filter(x => x.eventType !== EventType.MissionDailyRelease)
    .map(event => {
      let storyEvent
      if ([
        EventType.StoryCampaign,
        EventType.StoryEvent,
        EventType.StoryEventMainStory,
        EventType.StoryEventBoxGasha,
        EventType.StoryEventGuildMission,
      ].includes(event.eventType)) {
        storyEvent = StoryEvent.find(x => x.id === event.eventId)
      }
      return {
        ...event,
        storyEvent,
      }
    })

  let pvp
  const pvpRateConfigRaw = PvpRateConfig.find(x => x.id === PvpRateGetResponse.pvpRateConfigId)
  if (pvpRateConfigRaw) {
    const examSetting = ExamSetting.find(x => x.id === pvpRateConfigRaw.examSettingId)
    const produceExamBattleScoreConfigs = filterItems(ProduceExamBattleScoreConfig, "id", pvpRateConfigRaw.produceExamBattleScoreConfigId, { sortRules: ["parameter", true] })
    const pvpRateCommonProduceCards = filterItems(PvpRateCommonProduceCard, "id", pvpRateConfigRaw.pvpRateCommonProduceCardId)
    const commonProduceCards: Partial<{ [x in ProducePlanType]: ProduceCard[] }> = {}
    pvpRateCommonProduceCards.forEach(pvpCommonCard => {
      const cards = pvpCommonCard.produceCards.map(card => {
        return ProduceCard.find(pCard => pCard.id === card.id && pCard.upgradeCount === card.upgradeCount)!
      })
      commonProduceCards[pvpCommonCard.planType] = cards
    })
    const stages = pvpRateConfigRaw.stages.map(stage => {
      const produceItem = ProduceItem.find(x => x.id === stage.produceItemId)
      const examGimmicks = stage.produceExamGimmickEffectGroupId
        ? filterItems(ProduceExamGimmickEffectGroup, "id", stage.produceExamGimmickEffectGroupId, { sortRules: ["startTurn", true] })
        : undefined
      return {
        ...stage,
        produceItem,
        examGimmicks,
      }
    })
    if (examSetting) {
      pvp = {
        startTime: PvpRateGetResponse.startTime,
        endTime: PvpRateGetResponse.endTime,
        pvpRateConfigId: PvpRateGetResponse.pvpRateConfigId,
        pvpRateConfig: {
          ...pvpRateConfigRaw,
          examSetting,
          produceExamBattleScoreConfigs,
          commonProduceCards,
          stages,
        }
      }
    }
  }

  const characterDetails = CharacterDetail.reduce<XMaster['characterDetails']>((acc, cur) => {
    acc[cur.characterId] = filterItems(CharacterDetail, "characterId", cur.characterId, { sortRules: ["order", true] })
    return acc
  }, {})

  const achievements = Achievement.reduce<XMaster['achievements']>((acc, cur) => {
    acc[cur.id] = {
      ...cur,
      progress: filterItems(AchievementProgress, "achievementId", cur.id, { sortRules: ["index", true] }),
    }
    return acc
  }, {})

  return {
    version: Version.version,
    characters,
    produceDescriptions,
    produceEffectIcons,
    produces,
    examInitialDecks,
    produceDescriptionEffectTypes,
    produceDescriptionExamEffectType,
    characterTrueEndBonus,
    noticeList,
    events,
    pvp,
    characterDetails,
    achievements,
  }
}
