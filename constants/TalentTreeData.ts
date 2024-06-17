import TalentData from "./TalentData";

export const BEAST_RIDER = {
  talents: [
    { talent: TalentData.forager },
    { talent: TalentData.toughened },
    { talent: TalentData.outdoorsman },
    { talent: TalentData.BEASTWRANG },

    { talent: TalentData.outdoorsman },
    { talent: TalentData.expertTracker },
    { talent: TalentData.toughened },
    { talent: TalentData.EXHANDLER },

    { talent: TalentData.expertTracker },
    { talent: TalentData.BEASTWRANG },
    { talent: TalentData.letsRide },
    { talent: TalentData.grit },

    { talent: TalentData.SPURIMP },
    { talent: TalentData.SPUR },
    { talent: TalentData.naturalOutdoorsman },
    { talent: TalentData.EXHANDLER },

    { talent: TalentData.SPURSUP },
    { talent: TalentData.dedication },
    { talent: TalentData.grit },
    { talent: TalentData.SOOTHTONE },
  ],
  vPath: [
    [0, 0, 0],
    [1, 1, 0],
    [1, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ],
  hPath: [
    [1, 1, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 1, 1],
    [1, 1, 1, 0],
  ],
};

export const DRIVER = {
  talents: [
    { talent: TalentData.fullThrottle },
    { talent: TalentData.allTerrainDriver },
    { talent: TalentData.fineTuning },
    { talent: TalentData.gearhead },
    { talent: TalentData.grit },
    { talent: TalentData.skilledJockey },
    { talent: TalentData.rapidReaction },
    { talent: TalentData.grit },
    { talent: TalentData.fullThrottleImproved },
    { talent: TalentData.trickyTarget },
    { talent: TalentData.fineTuning },
    { talent: TalentData.toughened },
    { talent: TalentData.defensiveDriving },
    { talent: TalentData.skilledJockey },
    { talent: TalentData.naturalDriver },
    { talent: TalentData.gearhead },
    { talent: TalentData.fullThrottleSuperior },
    { talent: TalentData.fullStop },
    { talent: TalentData.masterDriver },
    { talent: TalentData.dedication },
  ],
  vPath: [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 0],
    [1, 1, 1],
  ],
  hPath: [
    [1, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 1],
  ],
};

export const GUNNER = {
  talents: [
    { talent: TalentData.durable },
    { talent: TalentData.grit },
    { talent: TalentData.overwhelmDefenses },
    { talent: TalentData.debilitatingShot },

    { talent: TalentData.toughened },
    { talent: TalentData.brace },
    { talent: TalentData.spareClip },
    { talent: TalentData.trueAim },

    { talent: TalentData.durable },
    { talent: TalentData.enduring },
    { talent: TalentData.juryRigged },
    { talent: TalentData.overwhelmDefenses },

    { talent: TalentData.toughened },
    { talent: TalentData.enduring },
    { talent: TalentData.brace },
    { talent: TalentData.exhaustPort },

    { talent: TalentData.heroicFortitude },
    { talent: TalentData.juryRigged },
    { talent: TalentData.dedication },
    { talent: TalentData.trueAim },
  ],
  vPath: [
    [0, 0, 0],
    [1, 1, 0],
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 1],
  ],
  hPath: [
    [1, 0, 1, 1],
    [0, 1, 0, 1],
    [1, 1, 1, 0],
    [1, 1, 1, 1],
  ],
};

export const ASSASSIN = {
  talents: [
    { talent: TalentData.grit },
    { talent: TalentData.lethalBlows },
    { talent: TalentData.stalker },
    { talent: TalentData.dodge },

    { talent: TalentData.preciseAim },
    { talent: TalentData.jumpUp },
    { talent: TalentData.quickStrike },
    { talent: TalentData.quickDraw },

    { talent: TalentData.targettedBlow },
    { talent: TalentData.stalker },
    { talent: TalentData.lethalBlows },
    { talent: TalentData.anatomyLessons },

    { talent: TalentData.stalker },
    { talent: TalentData.sniperShot },
    { talent: TalentData.dodge },
    { talent: TalentData.lethalBlows },

    { talent: TalentData.preciseAim },
    { talent: TalentData.deadlyAccuracy },
    { talent: TalentData.dedication },
    { talent: TalentData.masterOfShadows },
  ],
  vPath: [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 0],
  ],
  hPath: [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
};

export default {
  BEAST_RIDER,
  DRIVER,
  GUNNER,

  ASSASSIN,
};
