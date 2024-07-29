// Generated code. DO NOT EDIT!

import * as penum from './penum';
import * as pcommon from './pcommon.d.ts';

export type PvpRateUnitSlotUnlock = {
  grade: penum.PvpRateGrade
  slotCountPerStage: number[]
}
export type MissionPassProgressList = {
  list: MissionPassProgress[]
}
export type MusicSingerList = {
  list: MusicSinger[]
}
export type TowerTotalClearRankRewardList = {
  list: TowerTotalClearRankReward[]
}
export type MissionPassProgress = {
  missionPassId: string
  threshold: number
  normalReward: pcommon.Reward
  premiumReward: pcommon.Reward
  feature: boolean
  repeat: boolean
  repeatPoint: number
}
export type CharacterColorList = {
  list: CharacterColor[]
}
export type ProduceExamEffectList = {
  list: ProduceExamEffect[]
}
export type ProduceExamBattleNpcMob = {
  id: string
  name: string
  assetId: string
}
export type GashaButton = {
  id: string
  name: string
  description: string
  type: penum.GashaButtonType
  rewardCount: number
  fixRewardCount: number
  resourceType: penum.ResourceType
  resourceId: string
  limitType: penum.GashaLimitType
  limitCount: number
  resourceQuantity: number
  maxDrawCount: number
  discountLimitType: penum.GashaLimitType
  discountLimitCount: number
  discountResourceQuantity: number
  viewConditionSetId: string
  unlockConditionSetId: string
  order: number
  appealType: penum.GashaButtonAppealType
  appealText: string
}
export type ProduceStepAuditionMotion = {
  characterId: string
  stepType: penum.ProduceStepType
  motionType: penum.ProduceStepAuditionMotionType
  number: number
  facialAssetId: string
  bodyAssetId: string
  voiceAssetId: string
  sceneLayoutId: string
  cameraId: string
}
export type PvpRateMotion = {
  characterId: string
  motionType: penum.PvpRateMotionType
  number: number
  facialAssetId: string
  bodyAssetId: string
  voiceAssetId: string
  sceneLayoutId: string
  cameraId: string
}
export type Localization = {
  id: string
  description: string
}
export type SupportCardLevelLimit = {
  id: string
  rank: penum.SupportCardLevelLimitRank
  levelLimit: number
}
export type SupportCardSimulationGroup = {
  id: string
  name: string
}
export type FeatureLockList = {
  list: FeatureLock[]
}
export type EventStoryCampaign = {
  id: string
  description: string
  storyGroupIds: string[]
  startTime: string
  endTime: string
}
export type ProduceWeekMotionList = {
  list: ProduceWeekMotion[]
}
export type VoiceRoster = {
  characterId: string
  assetId: string
  title: string
  type: penum.VoicePlayScreenType
  conditionSetId: string
  order: number
}
export type EventLabel = {
  eventType: penum.EventType
  name: string
  color: string
}
export type MeishiBaseColor = {
  id: string
  order: number
}
export type ProduceDescriptionProduceExamEffectTypeList = {
  list: ProduceDescriptionProduceExamEffectType[]
}
export type PvpRateConfigList = {
  list: PvpRateConfig[]
}
export type CharacterDearnessStoryGashaCampaign = {
  characterId: string
  storyGroupId: string
}
export type ProduceHighScore = {
  id: string
  name: string
  storyGroupId: string
  order: number
}
export type InvitationPointReward = {
  threshold: number
  reward: pcommon.Reward
}
export type ProduceNavigation = {
  id: string
  number: number
  description: string
}
export type EventLabelList = {
  list: EventLabel[]
}
export type ProduceAdvList = {
  list: ProduceAdv[]
}
export type MissionDailyReleaseGroup = {
  id: string
  name: string
  logoAssetId: string
  bannerAssetId: string
  gradientColor1: string
  gradientColor2: string
  gradientColor3: string
  missionPointId: string
  conditionSetId: string
  fromStartTimeUnlock: boolean
  startTime: string
  endTime: string
}
export type CharacterTrueEndBonus = {
  id: string
  produceType: penum.ProduceType
  produceVocal: number
  produceDance: number
  produceVisual: number
  produceVocalGrowthRatePermil: number
  produceDanceGrowthRatePermil: number
  produceVisualGrowthRatePermil: number
  produceStamina: number
}
export type ProduceTrigger = {
  id: string
  phaseType: penum.ProducePhaseType
}
export type CharacterDearnessStoryGashaCampaignList = {
  list: CharacterDearnessStoryGashaCampaign[]
}
export type IdolCardPieceList = {
  list: IdolCardPiece[]
}
export type ProduceResultMotion = {
  characterId: string
  liveType: penum.ProduceLiveType
  number: number
  motionAssetId: string
  facialAssetId: string
  voiceAssetId: string
}
export type ExamSetting = {
  id: string
  examStaminaConsumptionDownPermil: number
  examStaminaConsumptionAddPermil: number
  examBlockAddDownPermil: number
  examStaminaConsumptionAddDownPermil: number
  examStaminaReduceChange: number
  examStaminaConsumptionDownAddPermil: number
  examConcentrationLessonValueMultiplePermil: number
  fullPowerPlayableValueAdd: number
  examFullPowerLessonValueMultiplePermil: number
  holdLimit: number
  handLimit: number
  turnStartDistribute: number
  examGimmickParameterDebuffPermil: number
  examParameterBuffPermil: number
  examTurnEndRecoveryStamina: number
  produceExamPanicStaminaCandidates: number[]
  examParameterBuffMultiplePerTurnPermil: number
  preservationReleasePlayableValueAdd1: number
  preservationReleasePlayableValueAdd2: number
  preservationReleaseBlockAdd1: number
  preservationReleaseBlockAdd2: number
  preservationReleaseEnthusiastic1: number
  preservationReleaseEnthusiastic2: number
  examConcentrationLessonValueMultiplePermil1: number
  examConcentrationLessonValueMultiplePermil2: number
  examPreservationLessonValueMultiplePermil1: number
  examPreservationLessonValueMultiplePermil2: number
  examConcentrationStaminaMultiplePermil1: number
  examConcentrationStaminaMultiplePermil2: number
  examPreservationStaminaMultiplePermil1: number
  examPreservationStaminaMultiplePermil2: number
}
export type ProduceCardGrowEffect = {
  id: string
  effectTypes: penum.ProduceCardGrowEffectType[]
  costTypes: penum.ExamCostType[]
  values: number[]
}
export type MeishiIllustrationAssetList = {
  list: MeishiIllustrationAsset[]
}
export type Music = {
  id: string
  title: string
  displayTitle: string
  lyrics: string
  composer: string
  arranger: string
  jacketAssetId: string
  gameVersionAssetId: string
  shortVersionStartMilliseconds: number
  shortVersionEndMilliseconds: number
  viewConditionSetId: string
  unlockConditionSetId: string
  externalUrl: string
  viewStartTime: string
  order: number
}
export type MusicSinger = {
  musicId: string
  number: number
  characterId: string
  idolCardId: string
}
export type IdolCardSkinList = {
  list: IdolCardSkin[]
}
export type ProduceEffectList = {
  list: ProduceEffect[]
}
export type ProduceEventSupportCardList = {
  list: ProduceEventSupportCard[]
}
export type SupportCardBonusList = {
  list: SupportCardBonus[]
}
export type MissionPanelSheetGroup = {
  id: string
  name: string
  bannerAssetId: string
  conditionSetId: string
}
export type SupportCardProduceSkillLevelDance = {
  supportCardId: string
  produceSkillId: string
  produceSkillLevel: number
  supportCardLevel: number
  order: number
}
export type CharacterColor = {
  characterId: string
  mainColor: string
  gradientColor1: string
  gradientColor2: string
  textColor: string
  labelTextColor: string
}
export type ProduceEffectIcon = {
  type: penum.ProduceEffectType
  resourceType: penum.ProduceResourceType
  iconAssetId: string
  backgroundAssetId: string
}
export type CharacterDetailList = {
  list: CharacterDetail[]
}
export type ProduceCardList = {
  list: pcommon.ProduceCard[]
}
export type ProduceExamAutoTriggerEvaluationList = {
  list: ProduceExamAutoTriggerEvaluation[]
}
export type ProduceExamStatusEnchantList = {
  list: ProduceExamStatusEnchant[]
}
export type IdolCardSkin = {
  id: string
  idolCardId: string
  name: string
  assetId: string
  costumeHeadId: string
  costumeId: string
  musicId: string
  idolCardSsrAnimationStartMilliseconds: number
  homeVoiceGroupId: string
  detailVoiceGroupId: string
  beforeLevelLimitRankVoiceAssetId: string
  afterLevelLimitRankVoiceAssetId: string
  produceSelectVoiceAssetId: string
  produceSelectFacialAssetId: string
  produceSelectBodyAssetId: string
  produceScheduleVoiceGroupId: string
  hasProduceIdolAnimation: boolean
  hasGashaAnimation: boolean
  beforeListPositionX: number
  beforeListPositionY: number
  beforeListScale: number
  afterListPositionX: number
  afterListPositionY: number
  afterListScale: number
  beforeDetailPositionX: number
  beforeDetailPositionY: number
  beforeDetailScale: number
  afterDetailPositionX: number
  afterDetailPositionY: number
  afterDetailScale: number
  viewStartTime: string
  order: string
}
export type ProduceSkillList = {
  list: ProduceSkill[]
}
export type ShopItemList = {
  list: ShopItem[]
}
export type SupportCardSimulationGroupList = {
  list: SupportCardSimulationGroup[]
}
export type TutorialProduceStepList = {
  list: TutorialProduceStep[]
}
export type ProduceExamTriggerList = {
  list: ProduceExamTrigger[]
}
export type ProduceStepEventDetail = {
  id: string
  suggestionType: penum.ProduceEventSuggestionType
  produceStoryId: string
  produceEffectIds: string[]
  produceStepEventSuggestionIds: string[]
  supportCardId: string
  descriptions: pcommon.ProduceDescriptionElement[]
  eventType: penum.ProduceEventType
}
export type ShopProduct = {
  id: string
  appStoreProductId: string
  googlePlayStoreProductId: string
  jewel: number
  priceJpy: number
}
export type MeishiBaseColorList = {
  list: MeishiBaseColor[]
}
export type MeishiTextColorList = {
  list: MeishiTextColor[]
}
export type MusicList = {
  list: Music[]
}
export type SupportCardFlavorList = {
  list: SupportCardFlavor[]
}
export type SupportCard = {
  id: string
  characterIds: string[]
  name: string
  type: penum.SupportCardType
  planType: penum.ProducePlanType
  rarity: penum.SupportCardRarity
  assetId: string
  supportCardLevelId: string
  supportCardLevelLimitId: string
  produceStoryIds: string[]
  displayPositionX: number
  displayPositionY: number
  displayScale: number
  exchangeReward: pcommon.Reward
  isLimited: boolean
  produceCardUpgradePermil: number
  upgradeProduceCardSearchId: string
  produceCardUpgradeLessonParameterType: penum.ProduceParameterType
  upgradeProduceCardDescriptions: pcommon.ProduceDescriptionElement[]
  gashaSupportAnimationNumber: number
  viewStartTime: string
  order: string
}
export type IdolCardPotentialProduceSkill = {
  id: string
  produceSkillId: string
  produceSkillLevel: number
  rank: penum.IdolCardPotentialRank
  order: number
}
export type EffectGroup = {
  id: string
  name: string
  hiddenFilter: boolean
  order: number
}
export type IdolCardLevelLimitProduceSkillList = {
  list: IdolCardLevelLimitProduceSkill[]
}
export type ProduceCardStatusEnchantList = {
  list: ProduceCardStatusEnchant[]
}
export type TitleAssetList = {
  list: TitleAsset[]
}
export type TowerList = {
  list: Tower[]
}
export type MemoryTag = {
  id: string
  defaultName: string
  assetId: string
}
export type ProduceStory = {
  id: string
  type: penum.ProduceStoryType
  title: string
  advAssetId: string
  produceEventHintProduceConditionDescriptions: string[]
  order: number
}
export type TitleVoice = {
  voiceAssetId: string
  startTime: string
  endTime: string
}
export type ProduceItemEffect = {
  id: string
  effectType: penum.ProduceItemEffectType
  effectTurn: number
  effectCount: number
  produceEffectId: string
  produceExamStatusEnchantId: string
}
export type SupportCardFlavor = {
  supportCardId: string
  number: number
  characterIds: string[]
  text: string
  voiceAssetId: string
}
export type HomeBoardList = {
  list: HomeBoard[]
}
export type ProduceEventCharacterGrowthList = {
  list: ProduceEventCharacterGrowth[]
}
export type StoryEventList = {
  list: StoryEvent[]
}
export type ProduceGroup = {
  id: string
  name: string
  type: penum.ProduceType
  produceIds: string[]
  assetId: string
  viewConditionSetId: string
  unlockConditionSetId: string
  failedProduceMemoryAssetId: string
  description: string
  order: number
}
export type SupportCardProduceSkillLevelVisualList = {
  list: SupportCardProduceSkillLevelVisual[]
}
export type ProduceDrink = {
  id: string
  assetId: string
  name: string
  planType: penum.ProducePlanType
  produceDrinkEffectIds: string[]
  rarity: penum.ProduceDrinkRarity
  descriptions: pcommon.ProduceDescriptionElement[]
  unlockProducerLevel: number
  effectGroupIds: string[]
  order: string
}
export type ProduceItemSimulation = {
  produceItemSimulationGroupId: string
  produceItemId: string
}
export type ProduceScheduleMotion = {
  characterId: string
  locationType: penum.ProduceScheduleLocationType
  staminaMotionType: penum.ProduceScheduleStaminaMotionType
  motionType: penum.ProduceScheduleMotionType
  number: number
  facialAssetIds: string[]
  bodyAssetIds: string[]
  voiceAssetId: string
}
export type VoiceGroup = {
  id: string
  voiceAssetId: string
  title: string
  facialAssetId: string
  bodyAssetId: string
  order: number
}
export type IdolCardSkinSelectRewardList = {
  list: IdolCardSkinSelectReward[]
}
export type MissionPassPointList = {
  list: MissionPassPoint[]
}
export type PvpRateCommonProduceCardList = {
  list: PvpRateCommonProduceCard[]
}
export type MissionDailyRelease = {
  missionDailyReleaseGroupId: string
  number: number
  missionGroupId: string
}
export type ProduceCardTag = {
  id: string
  name: string
}
export type CharacterDetail = {
  characterId: string
  type: penum.CharacterDetailType
  content: string
  order: number
}
export type ProduceDescriptionProduceEffectType = {
  type: penum.ProduceEffectType
  name: string
  produceDescriptionId: string
}
export type WorkLevel = {
  type: penum.WorkType
  level: number
  unlockConditionSetId: string
}
export type LimitItem = {
  type: penum.ItemType
  limit: number
}
export type AppReviewList = {
  list: AppReview[]
}
export type ExamSettingList = {
  list: ExamSetting[]
}
export type MemoryAbilityList = {
  list: pcommon.MemoryAbility[]
}
export type AchievementProgress = {
  achievementId: string
  threshold: number
  assetId: string
  rewards: pcommon.Reward[]
  index: number
}
export type MusicHotList = {
  list: MusicHot[]
}
export type MemoryExchangeItem = {
  planType: penum.ProducePlanType
  itemId: string
}
export type Bgm = {
  page: string
  name: string
  bgmAssetId: string
  order: number
  viewStartTime: string
  viewEndTime: string
}
export type MissionPassPoint = {
  id: string
  name: string
  assetId: string
}
export type Character = {
  id: string
  lastName: string
  firstName: string
  alphabetLastName: string
  alphabetFirstName: string
  isPlayable: boolean
  personalityType: penum.CharacterPersonalityType
  characterTrueEndBonusId: string
  achievementIds: string[]
  masterAchievementId: string
  idolCardIds: string[]
  supportCardIds: string[]
  viewConditionSetId: string
  normalCostumeHeadId: string
  trainingCostumeHeadId: string
  liveCostumeHeadId: string
  normalCostumeId: string
  trainingCostumeId: string
  liveCostumeId: string
  eventCharacterProduceStoryIds: string[]
  eventCharacterGrowthProduceStoryIds: string[]
  eventActivityProduceStoryIds: string[]
  eventSchoolProduceStoryIds: string[]
  otherStoryIds: string[]
  potentialRank1VoiceAssetId: string
  potentialRank3VoiceAssetId: string
  potentialRank4VoiceAssetId: string
  standingListPositionX: number
  standingListPositionY: number
  rosterDetailPositionX: number
  rosterDetailPositionY: number
  storyPositionX: number
  storyPositionY: number
  produceHighScorePositionX: number
  produceHighScorePositionY: number
  order: number
}
export type ProduceExamAutoResourceEvaluation = {
  type: penum.ExamPlayType
  resourceType: penum.ProduceResourceType
  resourceId: string
  remainingTerm: number
  evaluationType: penum.ProduceExamAutoEvaluationType
  addition: number
  multiplication: number
}
export type MissionDailyReleaseGroupList = {
  list: MissionDailyReleaseGroup[]
}
export type MemoryGift = {
  id: string
  name: string
  description: string
  assetId: string
  grade: penum.ResultGrade
  idolCardId: string
  planType: penum.ProducePlanType
  produceCard: pcommon.ProduceCard
  produceCardPhaseType: penum.ProduceMemoryProduceCardPhaseType
  memoryAbilities: pcommon.MemoryAbility[]
  vocal: number
  dance: number
  visual: number
  stamina: number
  examBattleProduceCards: pcommon.ProduceCard[]
  examBattleProduceItemIds: string[]
}
export type ProduceCard = {
  id: string
  upgradeCount: number
  name: string
  assetId: string
  isCharacterAsset: boolean
  rarity: penum.ProduceCardRarity
  planType: penum.ProducePlanType
  category: penum.ProduceCardCategory
  stamina: number
  forceStamina: number
  costType: penum.ExamCostType
  costValue: number
  playProduceExamTriggerId: string
  playEffects: ProduceCard_PlayEffect[]
  playMovePositionType: penum.ProduceCardMovePositionType
  moveEffectTriggerType: penum.ProduceCardMoveEffectTriggerType
  moveProduceExamEffectIds: string[]
  isEndTurnLost: boolean
  isInitial: boolean
  isRestrict: boolean
  produceCardStatusEnchantId: string
  searchTag: string
  libraryHidden: boolean
  noDeckDuplication: boolean
  descriptions: pcommon.ProduceDescriptionElement[]
  unlockProducerLevel: number
  rentalUnlockProducerLevel: number
  evaluation: number
  originIdolCardId: string
  originSupportCardId: string
  isInitialDeckProduceCard: boolean
  effectGroupIds: string[]
  viewStartTime: string
  isLimited: boolean
  order: string
}
type ProduceCard_PlayEffect = {
  produceExamTriggerId: string
  produceExamEffectId: string
  hideIcon: boolean
}
export type IdolCard = {
  id: string
  characterId: string
  originalIdolCardSkinId: string
  assetId: string
  name: string
  rarity: penum.IdolCardRarity
  isLimited: boolean
  anotherCostumeHeadId: string
  anotherCostumeId: string
  idolCardPotentialId: string
  idolCardPotentialProduceSkillId: string
  idolCardLevelLimitId: string
  idolCardLevelLimitProduceSkillId: string
  planType: penum.ProducePlanType
  idolCardLevelLimitStatusUpId: string
  produceVocal: number
  produceDance: number
  produceVisual: number
  produceVocalGrowthRatePermil: number
  produceDanceGrowthRatePermil: number
  produceVisualGrowthRatePermil: number
  produceStamina: number
  produceStepAuditionDifficultyId: string
  examInitialDeckId: string
  produceCardId: string
  beforeProduceItemId: string
  afterProduceItemId: string
  examEffectType: penum.ProduceExamEffectType
  potentialRankVoiceAssetId: string
  produceSelectVoiceAssetId: string
  produceScheduleFrontVoiceGroupId: string
  produceScheduleBackVoiceGroupId: string
  useProduceCardVoiceAssetId: string
  viewStartTime: string
  order: string
  produceStoryIds: string[]
  achievementIds: string[]
}
export type MissionPass = {
  id: string
  name: string
  description: string
  assetId: string
  missionPassPointId: string
  premiumPassShopItemId: string
  viewConditionSetId: string
  unlockConditionSetId: string
  startTime: string
  endTime: string
  order: number
}
export type TowerLayer = {
  towerId: string
  number: number
  maxSubMemoryCount: number
  viewConditionSetId: string
  unlockConditionSetId: string
  bgmAssetId: string
  winTimelineAssetId: string
  loseTimelineAssetId: string
  examTimelineAssetId: string
}
export type ProduceExamBattleScoreConfig = {
  id: string
  parameter: number
  vocalPermil: number
  dancePermil: number
  visualPermil: number
}
export type HomeMotionList = {
  list: HomeMotion[]
}
export type VoiceRosterList = {
  list: VoiceRoster[]
}
export type Costume = {
  id: string
  characterId: string
  name: string
  motifId: string
  description: string
  costumeGroupId: string
  costumeHeadId: string
  voiceGroupId: string
  resourceOriginType: penum.ResourceOriginType
  targetId: string
  isTraining: boolean
  viewConditionSetId: string
  viewStartTime: string
  order: number
}
export type MissionPanelSheet = {
  missionPanelSheetGroupId: string
  number: number
  name: string
  missionGroupId: string
  iconAssetId: string
  backgroundAssetId: string
  rewardAssetId: string
  backgroundGradientColor1: string
  backgroundGradientColor2: string
  panelGradientColors1: string[]
  panelGradientColors2: string[]
}
export type ProduceCardSimulation = {
  produceCardSimulationGroupId: string
  produceCardId: string
  produceCardUpgradeCount: number
  count: number
}
export type Terms = {
  type: penum.TermsType
  name: string
  url: string
}
export type ProduceNavigationList = {
  list: ProduceNavigation[]
}
export type Media = {
  id: string
  name: string
  mediaType: penum.MediaType
  assetId: string
  thumbnailAssetId: string
  viewConditionSetId: string
  characterIds: string[]
  externalUrl: string
  fourPanelComicEpisode: number
  startTime: string
  endTime: string
  order: number
}
export type ProducerLevel = {
  level: number
  totalExp: number
  unlockTargets: ProducerLevel_UnlockTarget[]
  reward: pcommon.Reward
  bonusRewards: pcommon.Reward[]
}
type ProducerLevel_UnlockTarget = {
  type: penum.ProducerLevelUnlockType
  id: string
  quantity: number
}
export type LocalizationList = {
  list: Localization[]
}
export type ProduceDrinkList = {
  list: ProduceDrink[]
}
export type WorkTimeList = {
  list: WorkTime[]
}
export type CharacterPushMessage = {
  characterId: string
  type: penum.PushType
  number: number
  title: string
  message: string
}
export type LimitItemList = {
  list: LimitItem[]
}
export type ProduceExamAutoEvaluationList = {
  list: ProduceExamAutoEvaluation[]
}
export type VoiceGroupList = {
  list: VoiceGroup[]
}
export type WorkLevelList = {
  list: WorkLevel[]
}
export type MeishiTextColor = {
  id: string
  order: number
}
export type ProduceCardSimulationGroupList = {
  list: ProduceCardSimulationGroup[]
}
export type ProduceCardStatusEffectList = {
  list: ProduceCardStatusEffect[]
}
export type ProduceHighScoreList = {
  list: ProduceHighScore[]
}
export type ProduceExamBattleNpcGroup = {
  id: string
  number: number
  characterId: string
  produceExamBattleNpcMobId: string
  scoreMin: number
  scoreMax: number
  vocalPermil: number
  dancePermil: number
  visualPermil: number
  opScorePermil: number
  midScorePermil: number
  edScorePermil: number
}
export type SupportCardProduceSkillLevelVocal = {
  supportCardId: string
  produceSkillId: string
  produceSkillLevel: number
  supportCardLevel: number
  order: number
}
export type MemoryExchangeItemList = {
  list: MemoryExchangeItem[]
}
export type ProduceCardRandomPoolList = {
  list: ProduceCardRandomPool[]
}
export type IdolCardLevelLimitProduceSkill = {
  id: string
  produceSkillId: string
  produceSkillLevel: number
  rank: penum.IdolCardLevelLimitRank
  order: number
}
export type GuildReaction = {
  id: string
  assetId: string
  order: number
}
export type ProduceStepLessonLevel = {
  id: string
  progressLevel: number
  limitTurn: number
  successThreshold: number
  resultTargetValueLimit: number
}
export type ConsumptionSetList = {
  list: ConsumptionSet[]
}
export type ProduceEffectIconList = {
  list: ProduceEffectIcon[]
}
export type StoryList = {
  list: Story[]
}
export type SupportCardLevelLimitList = {
  list: SupportCardLevelLimit[]
}
export type TipsList = {
  list: Tips[]
}
export type MainTaskGroup = {
  id: string
  title: string
  mainTaskType: penum.MainTaskType
  viewConditionSetId: string
  order: number
}
export type Money = {
  level: number
  makeMinutes: number
  makeQuantity: number
  makeQuantityLimit: number
}
export type TutorialCharacterVoice = {
  characterId: string
  type: penum.TutorialCharacterVoiceType
  number: number
  assetId: string
}
export type TutorialProduce = {
  tutorialType: penum.TutorialType
  idolCardId: string
  produceCardIds: string[]
  examSettingId: string
  produceSettingId: string
  idolCardParameterGrowthLimit: number
  produceNavigationNormalId: string
  produceNavigationAuditionId: string
  musicId: string
  environmentAssetId: string
  timelineAssetId: string
  memoryGiftId: string
}
export type CharacterAdv = {
  characterId: string
  name: string
  regexp: string
  notIdol: boolean
}
export type HelpCategory = {
  id: string
  name: string
  assetIds: string[]
  texts: string[]
  hiddenHelpList: boolean
  order: number
}
export type CostumeList = {
  list: Costume[]
}
export type EventStoryCampaignList = {
  list: EventStoryCampaign[]
}
export type FeatureLock = {
  tutorialType: penum.TutorialType
  name: string
  description: string
  routeDescription: string
  unlockConditionSetId: string
  isForce: boolean
}
export type ProduceCardRandomPool = {
  id: string
  produceCardId: string
  upgradeCount: number
  ratio: number
}
export type SupportCardProduceSkillLevelVisual = {
  supportCardId: string
  produceSkillId: string
  produceSkillLevel: number
  supportCardLevel: number
  order: number
}
export type EffectGroupList = {
  list: EffectGroup[]
}
export type IdolCardList = {
  list: pcommon.IdolCard[]
}
export type ProduceScheduleMotionList = {
  list: ProduceScheduleMotion[]
}
export type VoiceList = {
  list: Voice[]
}
export type Tutorial = {
  tutorialType: penum.TutorialType
  idolCardId: string
  step: number
  subStep: number
  navigationType: penum.TutorialNavigationType
  navigationPositionType: penum.TutorialNavigationPositionType
  title: string
  texts: string[]
  assetIds: string[]
  advAssetId: string
  tutorialProduceCommandType: penum.TutorialProduceCommandType
}
export type CostumeGroupList = {
  list: CostumeGroup[]
}
export type ProduceExamAutoResourceEvaluationList = {
  list: ProduceExamAutoResourceEvaluation[]
}
export type AchievementList = {
  list: pcommon.Achievement[]
}
export type LoginBonusMotion = {
  id: string
  order: number
  number: number
  facialAssetIds: string[]
  motionAssetIds: string[]
  voiceAssetIds: string[]
}
export type CharacterPushMessageList = {
  list: CharacterPushMessage[]
}
export type ExamInitialDeckList = {
  list: ExamInitialDeck[]
}
export type ShopProductList = {
  list: ShopProduct[]
}
export type ProduceEventSupportCard = {
  supportCardId: string
  number: number
  supportCardLevel: number
  produceStepEventDetailId: string
}
export type ProduceSkill = {
  id: string
  level: number
  rarity: penum.SkillRarity
  tag: string
  planType: penum.ProducePlanType
  activationCount: number
  produceEffectId1: string
  produceTriggerId1: string
  activationRatePermil1: number
  produceEffectId2: string
  produceTriggerId2: string
  activationRatePermil2: number
  produceEffectId3: string
  produceTriggerId3: string
  activationRatePermil3: number
  descriptions: pcommon.ProduceDescriptionElement[]
}
export type Tips = {
  id: string
  type: penum.TipsType
  title: string
  description: string
  characterId: string
  mediaId: string
  viewAreaType: penum.ViewAreaType
  viewConditionSetId: string
  startTime: string
  endTime: string
}
export type Tower = {
  id: string
  characterId: string
  title: string
  viewConditionSetId: string
  unlockConditionSetId: string
  achievementId: string
  order: number
}
export type CostumeHeadList = {
  list: CostumeHead[]
}
export type MissionPointRewardSetList = {
  list: MissionPointRewardSet[]
}
export type TutorialCharacterVoiceList = {
  list: TutorialCharacterVoice[]
}
export type ProduceDescriptionProducePlanType = {
  type: penum.ProducePlanType
  name: string
  produceDescriptionId: string
  planDetailProduceDescriptionId: string
}
export type ProduceAdv = {
  produceType: penum.ProduceType
  type: penum.ProduceAdvType
  title: string
  assetId: string
}
export type ExamSimulation = {
  id: string
  stamina: number
  maxStamina: number
  clearBorder: number
  limitBorder: number
  limitTurn: number
  produceExamGimmickEffectGroupId: string
}
export type SupportCardSimulation = {
  supportCardSimulationGroupId: string
  supportCardId: string
}
export type InvitationMission = {
  producerLevel: number
  rewardQuantity: number
}
export type ProduceExamAutoEvaluation = {
  type: penum.ExamPlayType
  examEffectType: penum.ProduceExamEffectType
  remainingTerm: number
  evaluationType: penum.ProduceExamAutoEvaluationType
  evaluation: number
  examStatusEnchantCoefficientPermil: number
}
export type SupportCardBonus = {
  rarity: penum.SupportCardRarity
  level: number
  bonusPermyriad: number
}
export type ProduceDescriptionProducePlanTypeList = {
  list: ProduceDescriptionProducePlanType[]
}
export type CharacterDearnessLevel = {
  characterId: string
  dearnessLevel: number
  advAssetId: string
  storyId: string
  produceConditionDescription: string
  produceConditionAchievementId: string
  produceConditionAchievementThreshold: number
  produceSkills: CharacterDearnessLevel_ProduceSkill[]
  rewards: pcommon.Reward[]
}
type CharacterDearnessLevel_ProduceSkill = {
  id: string
  level: number
}
export type TutorialProduceList = {
  list: TutorialProduce[]
}
export type PvpRateUnitSlotUnlockList = {
  list: PvpRateUnitSlotUnlock[]
}
export type MissionGroup = {
  id: string
  name: string
  assetId: string
  missionPointId: string
  missionIds: string[]
  rewards: pcommon.Reward[]
  showHomeLimitedMission: boolean
  conditionSetId: string
  order: number
}
export type SeminarExamTransition = {
  examEffectType: penum.ProduceExamEffectType
  isLessonInt: number
  description: string
  seminarExamGroupId: string
  seminarExamId: string
  seminarExamGroupName: string
  seminarExamName: string
  produceIds: string[]
  rewards: pcommon.Reward[]
}
export type ProduceGroupList = {
  list: ProduceGroup[]
}
export type ProduceItemSimulationGroupList = {
  list: ProduceItemSimulationGroup[]
}
export type CostumeHead = {
  id: string
  characterId: string
  name: string
  hairAssetId: string
  faceAssetId: string
  description: string
  resourceOriginType: penum.ResourceOriginType
  targetId: string
  isTraining: boolean
  viewConditionSetId: string
  viewStartTime: string
  order: number
}
export type Achievement = {
  id: string
  category: penum.AchievementCategory
  name: string
  description: string
  missionType: penum.MissionType
  targetIds1: string[]
  targetIds2: string[]
  targetIds3: string[]
  targetValue: number
  viewConditionSetId: string
  unlockConditionSetId: string
  masterAchievementInitialRank: number
  isTrueEndAchievement: boolean
  isMasterAchievement: boolean
  characterId: string
  viewProduceResult: boolean
  order: number
}
export type ProduceCardSearch = {
  id: string
  descriptions: pcommon.ProduceDescriptionElement[]
  produceCardIds: string[]
  upgradeCounts: number[]
  planType: penum.ProducePlanType
  cardCategories: penum.ProduceCardCategory[]
  cardStatusType: penum.ProduceCardSearchStatusType
  orderType: penum.ProduceCardOrderType
  cardPositionType: penum.ProduceCardPositionType
  cardSearchTag: string
  produceCardRandomPoolId: string
  limitCount: number
  staminaMinMaxType: penum.ConditionMinMaxType
  staminaMin: number
  staminaMax: number
  examEffectType: penum.ProduceExamEffectType
  effectGroupIds: string[]
}
export type StoryEvent = {
  id: string
  title: string
  storyEventType: penum.StoryEventType
  titleAssetId: string
  bannerAssetId: string
  storyGroupId: string
  idolCardSkinBeforeAssetId: string
  idolCardSkinAfterAssetId: string
  order: number
}
export type ExamSimulationList = {
  list: ExamSimulation[]
}
export type IdolCardPotentialProduceSkillList = {
  list: IdolCardPotentialProduceSkill[]
}
export type LoginBonusMotionList = {
  list: LoginBonusMotion[]
}
export type MissionProgressList = {
  list: MissionProgress[]
}
export type ProduceLiveCommon = {
  characterId: string
  type: penum.ProduceLiveType
  musicId: string
  thumbnailAssetId: string
  environmentAssetId: string
  timelineAssetId: string
  motionAssetIds: string[]
  liveMusicAssetId: string
  beforeAdvAssetId: string
  afterAdvAssetId: string
}
export type ProduceStepLessonList = {
  list: ProduceStepLesson[]
}
export type TitleVoiceList = {
  list: TitleVoice[]
}
export type WorkList = {
  list: Work[]
}
export type ProduceCardGrowEffectList = {
  list: ProduceCardGrowEffect[]
}
export type ProduceDescriptionProduceExamEffectType = {
  type: penum.ProduceExamEffectType
  name: string
  swapName: string
  produceDescriptionId: string
  examProduceDescriptionId: string
  mainBuffMinThresholds: number[]
  noIcon: boolean
  noReference: boolean
}
export type AssetDownload = {
  id: string
  type: penum.AssetDownloadType
}
export type ExamMotionList = {
  list: ExamMotion[]
}
export type MemoryGiftList = {
  list: MemoryGift[]
}
export type ProduceExamBattleNpcMobList = {
  list: ProduceExamBattleNpcMob[]
}
export type ProduceStepLessonLevelList = {
  list: ProduceStepLessonLevel[]
}
export type IdolCardLevelLimit = {
  id: string
  rank: penum.IdolCardLevelLimitRank
  consumptionSetId: string
}
export type GashaButtonList = {
  list: pcommon.GashaButton[]
}
export type ProduceList = {
  list: Produce[]
}
export type ProduceScheduleBackgroundList = {
  list: ProduceScheduleBackground[]
}
export type ProduceExamGimmickEffectGroup = {
  id: string
  priority: number
  remainingTurnPermil: number
  startTurn: number
  remainingTurn: number
  fieldStatusType: penum.ProduceExamFieldStatusType
  fieldStatusValue: number
  fieldStatusCheckType: penum.ProduceExamTriggerCheckType
  produceExamEffectId: string
  descriptions: pcommon.ProduceDescriptionElement[]
  isPositive: boolean
  fieldStatusDescriptions: pcommon.ProduceDescriptionElement[]
  effectDescriptions: pcommon.ProduceDescriptionElement[]
}
export type TutorialProduceStep = {
  tutorialType: penum.TutorialType
  idolCardId: string
  stepNumber: number
  tutorialStep: number
  stepType: penum.ProduceStepType
  name: string
  produceStepRefresh: boolean
  produceStepLessonId: string
  progressLevel: number
  produceNavigationNumber: number
  rankThreshold: number
  parameterBaseLine: number
  baseScore: number
  forceEndScore: number
  produceExamBattleNpcGroupId: string
  produceExamBattleConfigId: string
  produceExamGimmickEffectGroupId: string
}
export type IdolCardSimulationList = {
  list: IdolCardSimulation[]
}
export type MissionDailyReleaseList = {
  list: MissionDailyRelease[]
}
export type ProduceLive = {
  musicId: string
  type: penum.ProduceLiveType
  thumbnailAssetId: string
  environmentAssetId: string
  timelineAssetId: string
  beforeAdvAssetId: string
  afterAdvAssetId: string
  liveMusicAssetId: string
  motionAssetIds: string[]
}
export type HomeMonitorList = {
  list: HomeMonitor[]
}
export type MainStoryChapterList = {
  list: MainStoryChapter[]
}
export type MissionPanelSheetList = {
  list: MissionPanelSheet[]
}
export type SupportCardProduceSkillLevelVocalList = {
  list: SupportCardProduceSkillLevelVocal[]
}
export type HelpInfoList = {
  list: HelpInfo[]
}
export type IdolCardLevelLimitStatusUp = {
  id: string
  rank: penum.IdolCardLevelLimitRank
  effectTypes: penum.IdolCardLevelLimitEffectType[]
  effectValue: number
  produceVocal: number
  produceDance: number
  produceVisual: number
  isIllustrationChange: boolean
}
export type MainStoryPart = {
  id: string
  title: string
  assetId: string
  order: number
}
export type ProduceDescriptionList = {
  list: ProduceDescription[]
}
export type StoryGroupList = {
  list: StoryGroup[]
}
export type TowerLayerExam = {
  towerId: string
  number: number
  examEffectType: penum.ProduceExamEffectType
  parameterBaseLine: number
  baseScore: number
  produceItemIds: string[]
  produceExamGimmickEffectGroupId: string
  produceExamBattleConfigId: string
  produceExamBattleNpcGroupId: string
}
export type WorkLevelReward = {
  type: penum.WorkType
  durationMinutes: number
  level: number
  dearnessLevel: number
  rewardQuantity: number
  moneyRewardQuantity: number
  fanRewardQuantity: number
}
export type ConditionSetList = {
  list: ConditionSet[]
}
export type ItemList = {
  list: Item[]
}
export type MemoryTagList = {
  list: MemoryTag[]
}
export type ProduceStepEventSuggestion = {
  id: string
  producePoint: number
  stamina: number
  produceCardId: string
  produceCardUpgradeCount: number
  produceEffectIds: string[]
  stepType: penum.ProduceStepType
  stepId: string
  successProbabilityPermyriad: number
  successProduceEffectIds: string[]
  successStepType: penum.ProduceStepType
  successStepId: string
  failProduceEffectIds: string[]
  failStepType: penum.ProduceStepType
  failStepId: string
  alwaysSuccessful: boolean
  produceEffectFireStep: number
  descriptions: pcommon.ProduceDescriptionElement[]
}
export type GuildDonationItem = {
  itemId: string
  order: number
}
export type HomeTimeList = {
  list: HomeTime[]
}
export type PvpRateMotionList = {
  list: PvpRateMotion[]
}
export type CostumeMotion = {
  characterId: string
  motionType: penum.CostumeMotionType
  number: number
  facialAssetIds: string[]
  bodyAssetIds: string[]
  voiceAssetId: string
}
export type IdolCardPiece = {
  idolCardId: string
  itemId: string
  releaseConsumptionQuantity: number
  exchangeReward: pcommon.Reward
}
export type ProduceCardStatusEffect = {
  id: string
  produceExamTriggerId: string
  produceExamEffectIds: string[]
}
export type MissionGroupList = {
  list: MissionGroup[]
}
export type ProduceResultMotionList = {
  list: ProduceResultMotion[]
}
export type CostumeGroup = {
  id: string
  costumeHeadId: string
}
export type CharacterTrueEndBonusList = {
  list: CharacterTrueEndBonus[]
}
export type GuildReactionList = {
  list: GuildReaction[]
}
export type MissionPassList = {
  list: MissionPass[]
}
export type MissionPointList = {
  list: MissionPoint[]
}
export type ProduceExamBattleConfigList = {
  list: ProduceExamBattleConfig[]
}
export type WorkSkipList = {
  list: WorkSkip[]
}
export type WorkTime = {
  type: penum.WorkType
  durationMinutes: number
  viewConditionSetId: string
  unlockConditionSetId: string
}
export type AppReview = {
  type: penum.AppReviewType
  conditionSetId: string
  gashaId: string
  mainTaskGroupId: string
  mainTaskNumber: number
  achievementId: string
  achievementProgressThreshold: number
  produceId: string
}
export type ProduceCardStatusEnchant = {
  id: string
  triggerType: penum.ProduceCardStatusEnchantTriggerType
  cost: number
  effectValue1: number
  effectValue2: number
  effectTurn: number
  triggerValue: number
  fieldStatusType: penum.ProduceExamFieldStatusType
  fieldStatusValue: number
  produceExamTriggerId: string
  produceCardGrowEffectId: string
  triggerCount: number
}
export type AssetDownloadList = {
  list: AssetDownload[]
}
export type MediaList = {
  list: Media[]
}
export type ProduceDrinkEffectList = {
  list: ProduceDrinkEffect[]
}
export type ProduceItemEffectList = {
  list: ProduceItemEffect[]
}
export type IdolCardSkinSelectReward = {
  id: string
  idolCardSkinId: string
  movieAssetId: string
  difficultyType: penum.IdolCardDifficultyType
}
export type ProduceStepAuditionDifficulty = {
  id: string
  produceId: string
  stepType: penum.ProduceStepType
  number: number
  rankThreshold: number
  parameterBaseLine: number
  baseScore: number
  forceEndScore: number
  produceExamBattleNpcGroupId: string
  produceExamBattleConfigId: string
  produceExamGimmickEffectGroupId: string
}
export type CoinGashaButton = {
  id: string
  name: string
  description: string
  resourceType: penum.ResourceType
  resourceId: string
  quantity: number
  maxDrawCount: number
}
export type TutorialList = {
  list: Tutorial[]
}
export type MainStoryChapter = {
  mainStoryPartId: string
  id: string
  title: string
  description: string
  storyAssetId: string
  mainStoryGroupId: string
  order: number
}
export type HelpContent = {
  helpCategoryId: string
  id: string
  name: string
  order: number
  detailUrl: string
}
export type ProduceExamTrigger = {
  id: string
  phaseTypes: penum.ProduceExamPhaseType[]
  phaseValues: number[]
  fieldStatusCheckTypes: penum.ProduceExamTriggerCheckType[]
  fieldStatusTypes: penum.ProduceExamFieldStatusType[]
  fieldStatusValues: number[]
  fieldStatusProduceCardSearchIds: string[]
  produceCardSearchId: string
  upperSearchCount: number
  lowerSearchCount: number
  cardMovePositionType: penum.ProduceCardMovePositionType
  effectTypes: penum.ProduceExamEffectType[]
  lessonType: penum.ProduceStepLessonType
  descriptions: pcommon.ProduceDescriptionElement[]
}
export type ConditionSet = {
  id: string
  number: number
  conditionOperatorType: penum.ConditionOperatorType
  conditionType: penum.ConditionType
  resourceId1: string
  resourceId2: string
  minMaxType: penum.ConditionMinMaxType
  min: string
  max: string
  beforeTime: string
  afterTime: string
  description: string
}
export type HomeTime = {
  startHour: number
  startMinute: number
  type: penum.HomeTimeType
}
export type MainTaskIcon = {
  missionType: penum.MissionType
  assetId: string
}
export type CharacterDearnessLevelList = {
  list: CharacterDearnessLevel[]
}
export type HelpCategoryList = {
  list: HelpCategory[]
}
export type ShopItem = {
  id: string
  shopId: string
  name: string
  labelTypes: penum.ShopItemLabelType[]
  assetId: string
  shopProductId: string
  totalJewelQuantity: number
  paidOnlyJewelQuantity: number
  rewards: pcommon.Reward[]
  viewConditionSetId: string
  unlockConditionSetId: string
  resetTimingType: penum.ResetTimingType
  resetHour: number
  resetMinute: number
  resetWeekday: penum.Weekday
  resetDay: number
  purchaseLimit: number
  startTime: string
  endTime: string
  order: number
}
export type ProduceItemSimulationList = {
  list: ProduceItemSimulation[]
}
export type ProduceLiveList = {
  list: ProduceLive[]
}
export type ProduceSettingList = {
  list: ProduceSetting[]
}
export type TowerLayerExamList = {
  list: TowerLayerExam[]
}
export type MissionList = {
  list: Mission[]
}
export type ProduceExamStatusEnchant = {
  id: string
  assetId: string
  descriptions: pcommon.ProduceDescriptionElement[]
  produceExamTriggerId: string
  produceExamEffectIds: string[]
}
export type ExamOutGameMotionList = {
  list: ExamOutGameMotion[]
}
export type InvitationMissionList = {
  list: InvitationMission[]
}
export type ProduceDescriptionProduceEffectTypeList = {
  list: ProduceDescriptionProduceEffectType[]
}
export type ProduceExamBattleScoreConfigList = {
  list: ProduceExamBattleScoreConfig[]
}
export type ProduceLiveCommonList = {
  list: ProduceLiveCommon[]
}
export type SupportCardList = {
  list: pcommon.SupportCard[]
}
export type ProduceDrinkEffect = {
  id: string
  produceEffectId: string
  produceExamEffectId: string
}
export type SupportCardProduceSkillLevelAssistList = {
  list: SupportCardProduceSkillLevelAssist[]
}
export type IdolCardPieceQuantity = {
  rarity: penum.IdolCardRarity
  quantity: number
}
export type ProduceCardSimulationGroup = {
  id: string
  name: string
}
export type ProduceSetting = {
  id: string
  initialProducePoint: number
  produceDrinkPossessLimit: number
  refreshStaminaRecoveryPermil: number
  examStartAlertStaminaThreshold: number
  continueCount: number
  produceAuditionTrendAssessmentPermil: number
}
export type IdolCardLevelLimitList = {
  list: IdolCardLevelLimit[]
}
export type MainTaskIconList = {
  list: MainTaskIcon[]
}
export type ProduceExamBattleConfig = {
  id: string
  turn: number
  vocal: number
  dance: number
  visual: number
  produceExamBattleScoreConfigId: string
  vocalExcellent: number
  danceExcellent: number
  visualExcellent: number
  vocalBad: number
  danceBad: number
  visualBad: number
}
export type MissionPointRewardSet = {
  missionPointId: string
  point: number
  isFeature: boolean
  rewards: pcommon.Reward[]
}
export type ResultGradePattern = {
  type: penum.ResultGradeType
  grade: penum.ResultGrade
  threshold: number
}
export type CostumeMotionList = {
  list: CostumeMotion[]
}
export type TowerLayerRankList = {
  list: TowerLayerRank[]
}
export type ExamOutGameMotion = {
  characterId: string
  type: penum.ExamMotionTargetType
  motionType: penum.ExamOutGameMotionType
  number: number
  facialAssetIds: string[]
  bodyAssetIds: string[]
  voiceAssetId: string
  sceneLayoutId: string
  cameraId: string
}
export type ProduceExamGimmickEffectGroupList = {
  list: ProduceExamGimmickEffectGroup[]
}
export type ProduceStepTransitionList = {
  list: ProduceStepTransition[]
}
export type ProduceTriggerList = {
  list: ProduceTrigger[]
}
export type MeishiIllustrationAsset = {
  id: string
  type: penum.MeishiIllustrationType
  isDefault: boolean
  leftTopPositionX: number
  leftTopPositionY: number
  rightBottomPositionX: number
  rightBottomPositionY: number
  order: number
}
export type ExamInitialDeck = {
  id: string
  produceCardIds: string[]
  produceCardUpgradeCounts: number[]
}
export type MemoryAbility = {
  id: string
  level: number
  skillId: string
  evaluation: number
  rarity: penum.SkillRarity
}
export type ProduceStartMotion = {
  characterId: string
  motionType: penum.ProduceStartMotionType
  number: number
  motionAssetId: string
  facialAssetId: string
  voiceAssetId: string
}
export type MissionPoint = {
  id: string
  name: string
  resetTimingType: penum.ResetTimingType
  assetId: string
}
export type MainStoryPartList = {
  list: MainStoryPart[]
}
export type MemoryExchangeItemQuantityList = {
  list: MemoryExchangeItemQuantity[]
}
export type ProduceCardSimulationList = {
  list: ProduceCardSimulation[]
}
export type TitleAsset = {
  id: string
  order: number
  number: number
  noLoop: boolean
  movieAssetId: string
  startTime: string
  endTime: string
  priority: number
}
export type ProduceStartMotionList = {
  list: ProduceStartMotion[]
}
export type TowerTotalClearRankReward = {
  rank: number
  reward: pcommon.Reward
  isFeature: boolean
}
export type BgmList = {
  list: Bgm[]
}
export type RuleList = {
  list: Rule[]
}
export type Shop = {
  id: string
  type: penum.ShopType
  name: string
  resetTimingType: penum.ResetTimingType
  resetHour: number
  resetMinute: number
  resetWeekday: penum.Weekday
  resetDay: number
  startTime: string
  endTime: string
  order: number
}
export type CoinGashaButtonList = {
  list: CoinGashaButton[]
}
export type MeishiBaseAssetList = {
  list: MeishiBaseAsset[]
}
export type IdolCardPotential = {
  id: string
  rank: penum.IdolCardPotentialRank
  effectTypes: penum.IdolCardPotentialEffectType[]
  effectValue: number
  produceVocalGrowthRatePermil: number
  produceDanceGrowthRatePermil: number
  produceVisualGrowthRatePermil: number
  anotherCostumeProvide: boolean
  consumptionPiece: number
}
export type ProduceExamAutoTriggerEvaluation = {
  type: penum.ExamPlayType
  examStatusEnchantProduceExamTriggerId: string
  coefficientPermil: number
}
export type TowerLayerRank = {
  towerId: string
  number: number
  rank: number
  examBattleRank: number
  produceExamTriggerIds: string[]
  produceExamTriggerCounts: number[]
}
export type MemoryExchangeItemQuantity = {
  grade: penum.ResultGrade
  quantity: number
}
export type AchievementProgressList = {
  list: AchievementProgress[]
}
export type CharacterTrueEndAchievementList = {
  list: CharacterTrueEndAchievement[]
}
export type IdolCardLevelLimitStatusUpList = {
  list: IdolCardLevelLimitStatusUp[]
}
export type HomeMonitor = {
  movieAssetId: string
  characterId: string
  conditionSetId: string
  priority: number
}
export type CharacterTrueEndAchievement = {
  characterId: string
  produceType: penum.ProduceType
  trueEndAchievement: CharacterTrueEndAchievement_Achievement
  targetAchievements: CharacterTrueEndAchievement_Achievement[]
}
type CharacterTrueEndAchievement_Achievement = {
  id: string
  threshold: number
}
export type ExamMotion = {
  characterId: string
  type: penum.ExamMotionTargetType
  motionType: penum.ExamMotionType
  number: number
  facialMotionId: string
  bodyMotionId: string
  voiceAssetId: string
  sceneLayoutId: string
  cameraId: string
}
export type ProduceEffect = {
  id: string
  produceEffectType: penum.ProduceEffectType
  effectValueMin: number
  effectValueMax: number
  produceResourceType: penum.ProduceResourceType
  produceRewards: ProduceEffect_ProduceReward[]
  produceCardSearchId: string
  produceExamStatusEnchantId: string
  produceStepEventDetailId: string
  pickRangeType: penum.ProducePickRangeType
  pickCountMin: number
  pickCountMax: number
}
type ProduceEffect_ProduceReward = {
  resourceType: penum.ProduceResourceType
  resourceId: string
  resourceLevel: number
}
export type Rule = {
  type: penum.RuleType
  platformType: penum.PlatformType
  number: number
  html: string
}
export type IdolCardPotentialList = {
  list: IdolCardPotential[]
}
export type ProduceStoryList = {
  list: ProduceStory[]
}
export type ProducerLevelList = {
  list: ProducerLevel[]
}
export type ProduceStepTransition = {
  characterId: string
  stepType: penum.ProduceStepType
  stepPhaseType: penum.ProduceStepPhaseType
  number: number
  costumeHeadId: string
  costumeId: string
  advAssetId: string
  voiceAssetId: string
}
export type StoryGroup = {
  id: string
  storyType: penum.StoryType
  headerAssetId: string
  storyThumbnailAssetId: string
  viewConditionSetId: string
  characterId: string
  storyIds: string[]
  order: number
}
export type Work = {
  type: penum.WorkType
  name: string
  unlockConditionSetId: string
  rewardResourceType: penum.ResourceType
  rewardResourceId: string
}
export type ConsumptionSet = {
  id: string
  number: number
  resourceType: penum.ResourceType
  resourceId: string
  quantity: number
}
export type CharacterList = {
  list: Character[]
}
export type SupportCardProduceSkillLevelDanceList = {
  list: SupportCardProduceSkillLevelDance[]
}
export type SupportCardSimulationList = {
  list: SupportCardSimulation[]
}
export type ProduceItem = {
  id: string
  assetId: string
  rarity: penum.ProduceItemRarity
  name: string
  planType: penum.ProducePlanType
  fireLimit: number
  produceTriggerId: string
  produceTriggerIds: string[]
  produceItemEffectIds: string[]
  skills: ProduceItem_Skill[]
  libraryHidden: boolean
  descriptions: pcommon.ProduceDescriptionElement[]
  evaluation: number
  isExamEffect: boolean
  originIdolCardId: string
  originSupportCardId: string
  isUpgraded: boolean
  effectGroupIds: string[]
  viewStartTime: string
  isLimited: boolean
  order: string
}
type ProduceItem_Skill = {
  produceTriggerId: string
  produceItemEffectId: string
}
export type MusicHot = {
  id: string
  musicId: string
  startTime: string
  endTime: string
}
export type WorkSkip = {
  skipCount: number
  consumeJewelQuantity: number
}
export type HelpContentList = {
  list: HelpContent[]
}
export type SupportCardLevelList = {
  list: SupportCardLevel[]
}
export type HelpInfo = {
  type: string
  helpCategoryIds: string[]
  openHelpCategoryId: string
  openHelpContentId: string
}
export type HomeMotion = {
  characterId: string
  locationType: penum.HomeLocationType
  motionType: penum.HomeMotionType
  number: number
  conditionSetId: string
  facialAssetIds: string[]
  bodyAssetIds: string[]
  voiceAssetId: string
  isPrioritized: boolean
}
export type CharacterAdvList = {
  list: CharacterAdv[]
}
export type ProduceCardTagList = {
  list: ProduceCardTag[]
}
export type ProduceExamBattleNpcGroupList = {
  list: ProduceExamBattleNpcGroup[]
}
export type SeminarExamTransitionList = {
  list: SeminarExamTransition[]
}
export type Story = {
  id: string
  type: penum.StoryType
  characterId: string
  title: string
  thumbnailAssetId: string
  advAssetId: string
  viewConditionSetId: string
  unlockConditionSetId: string
  reward: pcommon.Reward
  previousStoryId: string
  order: number
}
export type MainTask = {
  mainTaskGroupId: string
  number: number
  title: string
  description: string
  homeDescription: string
  missionType: penum.MissionType
  targetIds1: string[]
  targetIds2: string[]
  targetIds3: string[]
  targetValue: number
  missionId: string
  threshold: number
  viewConditionSetId: string
  unlockConditionSetId: string
  rewards: pcommon.Reward[]
  additionalRewards: pcommon.Reward[]
  unlockFeatureTutorialType: penum.TutorialType
}
export type GuildDonationItemList = {
  list: GuildDonationItem[]
}
export type ProduceStepAuditionMotionList = {
  list: ProduceStepAuditionMotion[]
}
export type DearnessStoryCampaign = {
  id: string
  characterId: string
  storyGroupId: string
  startTime: string
  endTime: string
}
export type Setting = {
  id: string
  giftDefaultLimitCount: number
  giftHistoryDefaultLimitCount: number
  meishiLimitCount: number
  meishiObjectLimitCount: number
  meishiFolderLimitCount: number
  newLabelTTL: number
  workSkipLimit: number
  workSkipConsumeMinutes: number
  profileBirthdayUpdateIntervalDays: number
  resetTimingHour: number
  resetTimingMinute: number
  resetTimingWeek: string
  resetTimingDay: number
  initialUserMeishiBaseAssetID: string
  rosterIgnoreReportDearnessLevels: number[]
  memoryLimitCount: number
  photoLimitCount: number
  actionPointRecoveryMinutes: number
  actionPointMaxValue: number
  moneyHomeDisplayPermil: number
  moneyReceivableMinimumMinutes: number
  workExcellentRewardQuantityCoefficientPermil: number
  fanCountLimit: string
  workFineCharacterMaxCountInDay: number
  workFineProbabilityPermil: number
  workFineFixDays: number
  friendBaseFollowLimitCount: number
  friendFollowerLimitCount: number
  friendCoinMaxDailyAccumulationCount: number
  friendCoinSupportCardRentalRewardQuantity: number
  friendCoinMemoryRentalRewardQuantity: number
  memoryPowerParameterCoefficientPermil: number
  memoryPowerStaminaCoefficientPermil: number
  memoryPowerProduceResourceEvaluationCoefficientPermil: number
  seminarExamSettingID: string
  movieLimitCount: number
  initialUserName: string
  towerExamSettingID: string
  coinGashaNoticeDrawCount: number
  jewelShopID: string
  missionPassPointExchangeJewel: number
  officialXURL: string
  iosFaqURL: string
  androidFaqURL: string
  initialAchievementID: string
  inviteUserActiveMaxCount: number
  invitationEnterCodeRewardJewelQuantity: number
  invitationEnterCodeRewardProvideConditionSetID: string
  iosInquiryURL: string
  androidInquiryURL: string
  invitationEnterCodeConditionSetID: string
  userDeleteInquiryURL: string
  invitationNoticeID: string
  banWarningMessage: string
  seminarInitialParameter: number
  memoryCreateAbilityRToSsrPermil: number
  memoryCreateAbilitySrToSsrPermil: number
  memoryCreateProduceCardSrToSsrPermil: number
  memoryCreateExamBattleProduceCardSrToSsrPermil: number
  musicHotDisplayCount: number
  homeDailyMissionGroupID: string
  homeWeeklyMissionGroupID: string
  memoryCreateParameterSmall: number
  memoryCreateParameterMiddle: number
  memoryCreateParameterLarge: number
  towerViewConditionSetID: string
  seminarViewConditionSetID: string
  storyEventTipsAssetIDs: string[]
  storyEventPointLimit: number
  seminarGuidanceViewConditionSetID: string
  officialWebSiteURL: string
  iPPortalWebSiteURL: string
  photoNameLengthLimit: number
  homeEventEndTimeDisplayHour: number
  idolCardPieceExchangeItemID: string
  towerAdvAssetID: string
  storyEventMainStoryTipsAssetIDs: string[]
  officialDiscordURL: string
  officialYouTubeURL: string
  produceDailyMemoryRentalLimit: number
  produceDailyFreeContinueCount: number
  produceContinueItemID: string
  produceStartShopWarningProducePointQuantity: number
  produceParameterOutGameDisplayLimit: number
  produceParameterInGameDisplayLimit: number
  producePointLimit: number
  produceMaxStaminaLimit: number
  produceCardLimitCount: number
  produceRankingDisplayCount: number
  produceAuditionScoreUpMiddle: number
  produceAuditionScoreUpLarge: number
  produceExamBattleScorePenaltyMinPermil: number
  produceExamBattleScorePenaltyMaxPermil: number
  produceSupportCardRecommendLevelCoefficientPermils: number[]
  produceSupportCardRecommendTypeNegativeCoefficientPermil: number
  producePictureBookLiveProduceGroupID: string
  produceRevealSpLessonStepCount: number
  produce3DTapSkipConditionSetID: string
  produceLessonParameterUpMiddle: number
  produceLessonParameterUpLarge: number
  produceExamProduceCardSuggestMinutes: number
  produceScheduleSelectPlaceStaminaThreshold: number
  gashaPickupStoryCampaignCharacterDearnessLevel: number
  gashaAnimationReversalSsrPermil: number
  gashaAnimationReversalPickUpProduceIdolSsrPermil: number
  tutorialSetNameAdvIndex: number
  tutorialIdolCardSkinSelectRewardID: string
  shopPurchasableLimitAmountThreshold1: number
  shopPurchasableLimitAmountThreshold2: number
  shopPurchaseAlertThreshold: number
  jewelMaxQuantityForPaid: number
  jewelMaxQuantityForFree: number
  shopPurchasableLimitAgeThreshold1: number
  shopPurchasableLimitAgeThreshold2: number
  guildMemberLimitCount: number
  guildJoinRequestLimitCount: number
  guildJoinRequestReceiveLimitCount: number
  guildRestrictJoinHour: number
  guildRestrictEstablishHour: number
  guildRestrictDonationRequestHour: number
  guildDonationRequestReceiveMaxQuantity: number
  guildDonationLimitCount: number
  guildNameLengthLimit: number
  guildDescriptionLengthLimit: number
  guildLeaderMessageLengthLimit: number
  profileNameLengthLimit: number
  profileCommentLengthLimit: number
  pvpRateMemoryRecommendParameterCoefficientPermil: number
  pvpRateMemoryRecommendStaminaCoefficientPermil: number
  pvpRateMemoryRecommendProduceCardCoefficientPermil: number
  pvpRateMemoryRecommendProduceItemCoefficientPermil: number
  pvpRateExamBattleAllSkipUnlockConditionSetID: string
  pvpRateRehearsalViewConditionSetID: string
  pvpRateRankingDisplayCount: number
  examBattleSubMemoryParameterPermil: number
  examBattleSubMemoryStaminaPermil: number
  examBattleConditionThresholdMultipleScore: number
  pushDailyMissionNotifyHour: number
  pushDailyMissionNotifyMinutes: number
  pushDailyMissionDoNotNotifyNoLoginDay: number
  pushNoLoginNotifyLatestIntervalHour: number
}
export type MissionPanelSheetGroupList = {
  list: MissionPanelSheetGroup[]
}
export type ProduceExamEffect = {
  id: string
  effectType: penum.ProduceExamEffectType
  descriptions: pcommon.ProduceDescriptionElement[]
  effectValue1: number
  effectValue2: number
  effectCount: number
  effectTurn: number
  targetProduceCardId: string
  targetUpgradeCount: number
  targetExamEffectType: penum.ProduceExamEffectType
  produceCardSearchId: string
  movePositionType: penum.ProduceCardMovePositionType
  pickRangeType: penum.ProducePickRangeType
  pickCountMin: number
  pickCountMax: number
  chainProduceExamEffectId: string
  produceExamStatusEnchantId: string
  produceCardStatusEnchantId: string
}
export type ProduceScheduleBackground = {
  locationType: penum.ProduceScheduleLocationType
  backgroundAssetId: string
  sceneLayoutId: string
}
export type ResultGradePatternList = {
  list: ResultGradePattern[]
}
export type HomeBoard = {
  prefabId: string
  conditionSetId: string
  priority: number
}
export type Produce = {
  id: string
  name: string
  baseStepLevel: number
  viewConditionSetId: string
  unlockConditionSetId: string
  examSettingId: string
  produceSettingId: string
  idolCardParameterGrowthLimit: number
  maxProduceEventCharacterGrowthNumber: number
  steps: number
  actionPointQuantity: number
  assetId: string
  produceNavigationNormalId: string
  produceNavigationAuditionId: string
  produceNavigationLoseId: string
  gradientColor1: string
  gradientColor2: string
  order: number
}
export type PvpRateConfig = {
  id: string
  description: string
  vocal: number
  dance: number
  visual: number
  examSettingId: string
  produceExamBattleScoreConfigId: string
  examBattleFirstRankBonusPermil: number
  pvpRateCommonProduceCardId: string
  winTimelineAssetId: string
  loseTimelineAssetId: string
  startTimelineInitialTimePermil: number
  topAssetId: string
  stages: PvpRateConfig_Stage[]
}
type PvpRateConfig_Stage = {
  stageType: penum.PvpRateStageType
  planType: penum.ProducePlanType
  turn: number
  produceItemId: string
  produceExamGimmickEffectGroupId: string
  bgmAssetId: string
  startTimelineAssetId: string
  examTimelineAssetId: string
}
export type ProduceEventCharacterGrowth = {
  characterId: string
  number: number
  title: string
  description: string
  vocal: number
  dance: number
  visual: number
  produceStepEventDetailId: string
}
export type ProduceStepLesson = {
  id: string
  name: string
  produceStepLessonLevelId: string
}
export type JewelConsumptionCount = {
  id: string
  minCount: number
  maxCount: number
  quantity: number
}
export type ProduceDescription = {
  id: string
  name: string
  swapName: string
  descriptions: pcommon.ProduceDescriptionElement[]
}
export type SupportCardLevel = {
  id: string
  level: number
  totalExp: number
}
export type Item = {
  id: string
  name: string
  description: string
  acquisitionRouteDescription: string
  assetId: string
  type: penum.ItemType
  rarity: penum.ItemRarity
  commonLimitTime: string
  personalLimitDay: number
  sellPrice: number
  effectValue: number
  viewWithoutPossession: boolean
  exchangeType: penum.ExchangeType
  exchangeId: string
  gashaId: string
  coinGashaId: string
  shopCoinGashaId: string
  storyEventId: string
  viewConditionSetId: string
  unlockConditionSetId: string
  startTime: string
  endTime: string
  order: number
}
export type TermsList = {
  list: Terms[]
}
export type TowerLayerList = {
  list: TowerLayer[]
}
export type ProduceStepAuditionDifficultyList = {
  list: ProduceStepAuditionDifficulty[]
}
export type GashaAnimation = {
  rarity: penum.GashaAnimationRarity
  keepRatio: number
  ratio1: number
  ratio2: number
  ratio3: number
  ratio4: number
  freezeRatio: number
}
export type InvitationPointRewardList = {
  list: InvitationPointReward[]
}
export type MainTaskGroupList = {
  list: MainTaskGroup[]
}
export type SettingList = {
  list: Setting[]
}
export type Mission = {
  id: string
  missionGroupId: string
  name: string
  category: penum.MissionCategory
  type: penum.MissionType
  targetIds1: string[]
  targetIds2: string[]
  targetIds3: string[]
  targetValue: number
  isLessThanTargetValue: boolean
  isEventMission: boolean
  missionDailyReleaseGroupId: string
  missionDailyReleaseDay: number
  viewConditionSetId: string
  unlockConditionSetId: string
  order: number
}
export type WorkMotion = {
  characterId: string
  motionType: penum.WorkMotionType
  number: number
  facialAssetIds: string[]
  bodyAssetIds: string[]
  voiceAssetId: string
}
export type ProduceItemSimulationGroup = {
  id: string
  name: string
}
export type PvpRateCommonProduceCard = {
  id: string
  planType: penum.ProducePlanType
  produceCards: pcommon.ProduceCard[]
}
export type DearnessStoryCampaignList = {
  list: DearnessStoryCampaign[]
}
export type ProduceItemList = {
  list: pcommon.ProduceItem[]
}
export type ProduceStepEventSuggestionList = {
  list: ProduceStepEventSuggestion[]
}
export type SupportCardProduceSkillLevelAssist = {
  supportCardId: string
  produceSkillId: string
  produceSkillLevel: number
  supportCardLevel: number
  order: number
}
export type ProduceWeekMotion = {
  characterId: string
  number: number
  costumeHeadId: string
  costumeId: string
  advAssetId: string
  voiceAssetId: string
}
export type MissionProgress = {
  missionId: string
  threshold: number
  missionPoint: number
  rewards: pcommon.Reward[]
}
export type GashaAnimationList = {
  list: GashaAnimation[]
}
export type MainTaskList = {
  list: MainTask[]
}
export type ProduceStepEventDetailList = {
  list: ProduceStepEventDetail[]
}
export type ShopList = {
  list: Shop[]
}
export type WorkLevelRewardList = {
  list: WorkLevelReward[]
}
export type MeishiBaseAsset = {
  id: string
  name: string
  isDefault: boolean
  order: number
}
export type Voice = {
  characterId: string
  page: string
  voiceAssetIds: string[]
}
export type IdolCardPieceQuantityList = {
  list: IdolCardPieceQuantity[]
}
export type JewelConsumptionCountList = {
  list: JewelConsumptionCount[]
}
export type MoneyList = {
  list: Money[]
}
export type ProduceCardSearchList = {
  list: ProduceCardSearch[]
}
export type WorkMotionList = {
  list: WorkMotion[]
}
export type IdolCardSimulation = {
  idolCardId: string
  number: number
  produceCardSimulationGroupId: string
  produceItemSimulationGroupId: string
  supportCardSimulationGroupId: string
  examSimulationId: string
}
