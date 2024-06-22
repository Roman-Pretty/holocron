import * as td from "./TalentData";

export const BEAST_RIDER = {
  talents: [
    { talent: td.forager },
    { talent: td.toughened },
    { talent: td.outdoorsman },
    { talent: td.beastWrangler },

    { talent: td.outdoorsman },
    { talent: td.expertTracker },
    { talent: td.toughened },
    { talent: td.expertHandler },

    { talent: td.expertTracker },
    { talent: td.beastWrangler },
    { talent: td.letsRide },
    { talent: td.grit },

    { talent: td.spurImproved },
    { talent: td.spur },
    { talent: td.naturalOutdoorsman },
    { talent: td.expertHandler },

    { talent: td.spurSupreme },
    { talent: td.dedication },
    { talent: td.grit },
    { talent: td.soothingTone },
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
    { talent: td.fullThrottle },
    { talent: td.allTerrainDriver },
    { talent: td.fineTuning },
    { talent: td.gearhead },
    { talent: td.grit },
    { talent: td.skilledJockey },
    { talent: td.rapidReaction },
    { talent: td.grit },
    { talent: td.fullThrottleImproved },
    { talent: td.trickyTarget },
    { talent: td.fineTuning },
    { talent: td.toughened },
    { talent: td.defensiveDriving },
    { talent: td.skilledJockey },
    { talent: td.naturalDriver },
    { talent: td.gearhead },
    { talent: td.fullThrottleSuperior },
    { talent: td.fullStop },
    { talent: td.masterDriver },
    { talent: td.dedication },
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
    { talent: td.durable },
    { talent: td.grit },
    { talent: td.overwhelmDefenses },
    { talent: td.debilitatingShot },

    { talent: td.toughened },
    { talent: td.brace },
    { talent: td.spareClip },
    { talent: td.trueAim },

    { talent: td.durable },
    { talent: td.enduring },
    { talent: td.juryRigged },
    { talent: td.overwhelmDefenses },

    { talent: td.toughened },
    { talent: td.enduring },
    { talent: td.brace },
    { talent: td.exhaustPort },

    { talent: td.heroicFortitude },
    { talent: td.juryRigged },
    { talent: td.dedication },
    { talent: td.trueAim },
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
    { talent: td.grit },
    { talent: td.lethalBlows },
    { talent: td.stalker },
    { talent: td.dodge },

    { talent: td.preciseAim },
    { talent: td.jumpUp },
    { talent: td.quickStrike },
    { talent: td.quickDraw },

    { talent: td.targettedBlow },
    { talent: td.stalker },
    { talent: td.lethalBlows },
    { talent: td.anatomyLessons },

    { talent: td.stalker },
    { talent: td.sniperShot },
    { talent: td.dodge },
    { talent: td.lethalBlows },

    { talent: td.preciseAim },
    { talent: td.deadlyAccuracy },
    { talent: td.dedication },
    { talent: td.masterOfShadows },
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