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
  ExamInitialDeck,
  ExamSetting,
  IdolCard,
  IdolCardLevelLimit,
  IdolCardLevelLimitProduceSkill,
  IdolCardLevelLimitStatusUp,
  IdolCardPotential,
  IdolCardPotentialProduceSkill,
  IdolCardSkin,
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
  ProduceExamGimmickEffectGroup,
  ProduceItem,
  ProduceSkill,
  ProduceStepAuditionDifficulty,
  ProduceStepEventDetail,
  ProduceTrigger,
  PvpRateCommonProduceCard,
  PvpRateConfig,
  PvpRateConfig_Stage,
  StoryEvent,
  SupportCard,
  SupportCardProduceSkillLevelAssist,
  SupportCardProduceSkillLevelDance,
  SupportCardProduceSkillLevelVisual,
  SupportCardProduceSkillLevelVocal,
} from "~/types/proto/pmaster"

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
  pvp?: Pick<PvpRateGetResponse, 'startTime' | 'endTime' | 'pvpRateConfigId'> &
  {
    pvpRateConfig: Omit<PvpRateConfig, 'stages'> &
    { examSetting: ExamSetting } &
    { produceExamBattleScoreConfigs: ProduceExamBattleScoreConfig[] } &
    { commonProduceCards: Partial<{ [x in ProducePlanType]: ProduceCard[] }> } &
    {
      stages: (
        PvpRateConfig_Stage &
        { produceItem?: ProduceItem } &
        { examGimmicks?: ProduceExamGimmickEffectGroup[] }
      )[]
    }
  },
  characterDetails: { [id: string]: CharacterDetail[] },
  achievements: { [id: string]: Achievement & { progress: AchievementProgress[] } }
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
]

export type XSupportCard = SupportCard & {
  produceCards: ProduceCard[],
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
]

export type XIdolCard = IdolCard & {
  produceCards: ProduceCard[],
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

export function isNonNull<T extends unknown[]>(args: T): args is { [P in keyof T]: NonNullable<T[P]> } {
  return args.every(arg => arg !== null)
}
