import {
  HomeEnterResponse,
  NoticeInfo,
  NoticeListAllResponse,
  PvpRateGetResponse
} from "~/types/proto/papi"
import {
  Event,
} from "~/types/proto/pcommon"
import {
  ProduceEffectType,
  ProduceExamEffectType,
  ProducePhaseType,
  ProducePlanType
} from "~/types/proto/penum"
import {
  Achievement,
  AchievementProgress,
  Character,
  CharacterDetail,
  CharacterTrueEndBonus,
  EventLabel,
  ExamInitialDeck,
  ExamSetting,
  IdolCard,
  IdolCardLevelLimit,
  IdolCardLevelLimitProduceSkill,
  IdolCardLevelLimitStatusUp,
  IdolCardPotential,
  IdolCardPotentialProduceSkill,
  IdolCardSkin,
  MemoryAbility,
  Produce,
  ProduceCard,
  ProduceDescription,
  ProduceDescriptionProduceEffectType,
  ProduceDescriptionProduceExamEffectType,
  ProduceEffect,
  ProduceEffectIcon,
  ProduceEventSupportCard,
  ProduceExamBattleConfig,
  ProduceExamBattleNpcGroup,
  ProduceExamBattleScoreConfig,
  ProduceExamEffect,
  ProduceExamGimmickEffectGroup,
  ProduceItem,
  ProduceSkill,
  ProduceStepAuditionDifficulty,
  ProduceStepEventDetail,
  ProduceTrigger,
  PvpRateCommonProduceCard,
  PvpRateConfig,
  PvpRateConfig_Stage,
  ResultGradePattern,
  StoryEvent,
  SupportCard,
  SupportCardProduceSkillLevelAssist,
  SupportCardProduceSkillLevelDance,
  SupportCardProduceSkillLevelVisual,
  SupportCardProduceSkillLevelVocal,
} from "~/types/proto/pmaster"
import { UnArray } from "~/types/utils"

export type UsedDB = {
  // response
  HomeEnter: HomeEnterResponse
  NoticeListAll: NoticeListAllResponse
  PvpRateGet: PvpRateGetResponse
  // master
  Version: { version: string }
  Character: Character[]
  ProduceDescription: ProduceDescription[]
  ProduceEffectIcon: ProduceEffectIcon[]
  Produce: Produce[]
  ExamInitialDeck: ExamInitialDeck[]
  ProduceDescriptionProduceEffectType: ProduceDescriptionProduceEffectType[]
  ProduceDescriptionProduceExamEffectType: ProduceDescriptionProduceExamEffectType[]
  PvpRateCommonProduceCard: PvpRateCommonProduceCard[]
  CharacterTrueEndBonus: CharacterTrueEndBonus[]
  PvpRateConfig: PvpRateConfig[],
  ExamSetting: ExamSetting[],
  StoryEvent: StoryEvent[],
  CharacterDetail: CharacterDetail[],
  Achievement: Achievement[],
  AchievementProgress: AchievementProgress[],
  EventLabel: EventLabel[],
  ResultGradePattern: ResultGradePattern[],
  // csprt, cidol
  SupportCard: SupportCard[]
  ProduceCard: ProduceCard[]
  ProduceItem: ProduceItem[]
  ProduceEventSupportCard: ProduceEventSupportCard[]
  ProduceStepEventDetail: ProduceStepEventDetail[]
  ProduceEffect: ProduceEffect[]
  SupportCardProduceSkillLevelDance: SupportCardProduceSkillLevelDance[]
  SupportCardProduceSkillLevelVocal: SupportCardProduceSkillLevelVocal[]
  SupportCardProduceSkillLevelVisual: SupportCardProduceSkillLevelVisual[]
  SupportCardProduceSkillLevelAssist: SupportCardProduceSkillLevelAssist[]
  ProduceSkill: ProduceSkill[]
  ProduceTrigger: ProduceTrigger[]
  IdolCard: IdolCard[]
  IdolCardSkin: IdolCardSkin[]
  IdolCardPotential: IdolCardPotential[]
  IdolCardPotentialProduceSkill: IdolCardPotentialProduceSkill[]
  IdolCardLevelLimit: IdolCardLevelLimit[]
  IdolCardLevelLimitProduceSkill: IdolCardLevelLimitProduceSkill[]
  IdolCardLevelLimitStatusUp: IdolCardLevelLimitStatusUp[]
  ProduceStepAuditionDifficulty: ProduceStepAuditionDifficulty[]
  ProduceExamBattleNpcGroup: ProduceExamBattleNpcGroup[]
  ProduceExamBattleConfig: ProduceExamBattleConfig[]
  ProduceExamBattleScoreConfig: ProduceExamBattleScoreConfig[]
  ProduceExamGimmickEffectGroup: ProduceExamGimmickEffectGroup[]
  // produce card
  ProduceExamEffect: ProduceExamEffect[]
  // memory
  MemoryAbility: MemoryAbility
}

export type Master = [
  { version: string },
  Character[],
  ProduceDescription[],
  ProduceEffectIcon[],
  Produce[],
  ExamInitialDeck[],
  ProduceDescriptionProduceEffectType[],
  ProduceDescriptionProduceExamEffectType[],
  CharacterTrueEndBonus[],
  HomeEnterResponse,
  NoticeListAllResponse,
  PvpRateGetResponse,
  PvpRateConfig[],
  PvpRateCommonProduceCard[],
  ExamSetting[],
  ProduceExamBattleScoreConfig[],
  ProduceCard[],
  ProduceItem[],
  ProduceExamGimmickEffectGroup[],
  StoryEvent[],
  CharacterDetail[],
  Achievement[],
  AchievementProgress[],
  EventLabel[],
  ProduceExamEffect[],
  ResultGradePattern[],
]

export type XMaster = {
  version: string,
  characters: { [id: string]: Character },
  produceDescriptions: { [id: string]: ProduceDescription },
  produceEffectIcons: { [type in ProduceEffectType]: ProduceEffectIcon },
  produces: { [id: string]: Produce },
  examInitialDecks: { [id: string]: ExamInitialDeck },
  produceDescriptionEffectTypes: { [type in ProduceEffectType]: ProduceDescriptionProduceEffectType },
  produceDescriptionExamEffectType: { [type in ProduceExamEffectType]: ProduceDescriptionProduceExamEffectType },
  characterTrueEndBonus: { [id: string]: CharacterTrueEndBonus },
  noticeList: {
    infoList: NoticeInfo[]
    bugList: NoticeInfo[]
    prList: NoticeInfo[]
  },
  events: (
    Event &
    { storyEvent?: StoryEvent }
  )[],
  eventLabels: EventLabel[],
  pvp?: Pick<PvpRateGetResponse, 'startTime' | 'endTime' | 'pvpRateConfigId'> &
  {
    pvpRateConfig: Omit<PvpRateConfig, 'stages'> &
    { examSetting: ExamSetting } &
    { produceExamBattleScoreConfigs: ProduceExamBattleScoreConfig[] } &
    { commonProduceCards: Partial<{ [x in ProducePlanType]: XProduceCard[] }> } &
    {
      stages: (
        PvpRateConfig_Stage &
        { produceItems?: ProduceItem[] } &
        { examGimmicks?: ProduceExamGimmickEffectGroup[] }
      )[]
    }
  },
  characterDetails: { [id: string]: CharacterDetail[] },
  achievements: { [id: string]: Achievement & { progress: AchievementProgress[] } },
  resultGradePatterns: XResultGradePattern[],
}

export type Csprt = [
  SupportCard[],
  ProduceCard[],
  ProduceItem[],
  ProduceEventSupportCard[],
  ProduceStepEventDetail[],
  ProduceEffect[],
  SupportCardProduceSkillLevelDance[],
  SupportCardProduceSkillLevelVocal[],
  SupportCardProduceSkillLevelVisual[],
  SupportCardProduceSkillLevelAssist[],
  ProduceSkill[],
  ProduceTrigger[],
  ProduceExamEffect[],
]

export type XSupportCard = SupportCard & {
  produceCards: XProduceCard[],
  produceItems: ProduceItem[],
  produceEvents: (
    ProduceEventSupportCard &
    Omit<ProduceStepEventDetail, "supportCardId"> &
    { produceEffects: ProduceEffect[] }
  )[],
  produceSkills: (
    SupportCardProduceSkillLevelAssist & {
      produceSkill: ProduceSkill & { produceEffects: ProduceEffect[] },
      producePhaseType: ProducePhaseType,
    })[][]
}

export type Cidol = [
  IdolCard[],
  IdolCardSkin[],
  IdolCardLevelLimit[],
  IdolCardLevelLimitProduceSkill[],
  IdolCardLevelLimitStatusUp[],
  IdolCardPotential[],
  IdolCardPotentialProduceSkill[],
  ProduceCard[],
  ProduceItem[],
  ProduceSkill[],
  ProduceEffect[],
  ProduceStepAuditionDifficulty[],
  ProduceExamBattleNpcGroup[],
  ProduceExamBattleConfig[],
  ProduceExamBattleScoreConfig[],
  ProduceExamGimmickEffectGroup[],
  ProduceExamEffect[],
]

export type XIdolCard = IdolCard & {
  produceCards: XProduceCard[],
  produceItems: ProduceItem[],
  idolCardSkins: IdolCardSkin[],
  levelLimits: (
    IdolCardLevelLimit &
    Omit<IdolCardLevelLimitStatusUp, 'id' | 'rank'> &
    { limitProduceSkill?: IdolCardLevelLimitProduceSkill } &
    { produceSkill?: ProduceSkill & { produceEffects: ProduceEffect[] } }
  )[]
  potentials: (
    IdolCardPotential &
    { potentialProduceSkill?: IdolCardPotentialProduceSkill } &
    { produceSkill?: ProduceSkill & { produceEffects: ProduceEffect[] } }
  )[]
  auditionDifficulty: (
    ProduceStepAuditionDifficulty &
    { npcs: ProduceExamBattleNpcGroup[] } &
    { examBattleConfig: ProduceExamBattleConfig } &
    { examBattleScoreConfigs: ProduceExamBattleScoreConfig[] } &
    { examGimmicks?: ProduceExamGimmickEffectGroup[] }
  )[]
}

export type PCard = [
  ProduceCard[],
  ProduceExamEffect[],
]

export type XProduceCard = Omit<ProduceCard, 'playEffects'> & {
  playEffects: (UnArray<ProduceCard['playEffects']> & {
    produceExamEffect: Pick<ProduceExamEffect, 'id' | 'effectType' | 'effectValue1' | 'effectValue2' | 'effectCount' | 'effectTurn'>
  })[]
}

export type MemoryInspector = [
  ProduceCard[],
  ProduceExamEffect[],
  ProduceItem[],
  MemoryAbility[],
  ProduceSkill[],
  ProduceEffect[],
]

export type XMemoryInspector = {
  produceCards: { [k: string]: XProduceCard },
  produceItems: { [k: string]: ProduceItem },
  memoryAbilities: {
    [k: string]: MemoryAbility & {
      skill: ProduceSkill & { produceEffects: ProduceEffect[] }
    }
  }
}

export type XResultGradePattern = ResultGradePattern & {
  description: string,
}

export function isNonNull<T extends unknown[]>(args: T): args is { [P in keyof T]: NonNullable<T[P]> } {
  return args.every(arg => arg !== null)
}
