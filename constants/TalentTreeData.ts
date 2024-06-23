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

export const HOTSHOT = {
  talents: [
    { talent: td.shortcut },
    { talent: td.highGTraining },
    { talent: td.skilledJockey },
    { talent: td.grit },

    { talent: td.secondChances },
    { talent: td.grit },
    { talent: td.shortcut },
    { talent: td.highGTraining },

    { talent: td.deadToRights },
    { talent: td.highGTraining },
    { talent: td.grit },
    { talent: td.intensePresence },

    { talent: td.secondChances },
    { talent: td.corellianSendoff },
    { talent: td.koiogranTurn },
    { talent: td.grit },

    { talent: td.deadToRightsImproved },
    { talent: td.corellianSendoffImproved },
    { talent: td.dedication },
    { talent: td.showboat },
  ],
  vPath: [
    [0, 0, 0],
    [1, 0, 1],
    [1, 1, 1],
    [0, 1, 0],
    [0, 0, 1],
  ],
  hPath: [
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
  ],
};

export const PILOT = {
  talents: [
    { talent: td.fullThrottle },
    { talent: td.skilledJockey },
    { talent: td.galaxyMapper },
    { talent: td.letsRide },

    { talent: td.skilledJockey },
    { talent: td.deadToRights },
    { talent: td.galaxyMapper },
    { talent: td.rapidRecovery },

    { talent: td.fullThrottleImproved },
    { talent: td.deadToRightsImproved },
    { talent: td.grit },
    { talent: td.naturalPilot },

    { talent: td.grit },
    { talent: td.fullThrottleSuperior },
    { talent: td.trickyTarget },
    { talent: td.defensiveDriving },

    { talent: td.masterPilot },
    { talent: td.dedication },
    { talent: td.toughened },
    { talent: td.brilliantEvasion },
  ],
  vPath: [
    [0, 0, 0],
    [1, 0, 1],
    [0, 0, 1],
    [1, 0, 0],
    [1, 1, 1],
  ],
  hPath: [
    [1, 1, 1, 1],
    [1, 1, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ],
};

export const RIGGER = {
  talents: [
    { talent: td.blackMarketContacts },
    { talent: td.toughened },
    { talent: td.gearhead },
    { talent: td.largerProject },

    { talent: td.grit },
    { talent: td.fancyPaintJob },
    { talent: td.signatureVehicle },
    { talent: td.largerProject },
    
    { talent: td.blackMarketContacts },
    { talent: td.overstockedAmmo },
    { talent: td.tunedManeuveringThrusters },
    { talent: td.bolsteredArmor },
    
    { talent: td.toughened },
    { talent: td.customizedCoolingUnit },
    { talent: td.gearhead },
    { talent: td.fortifiedVacuumSeal },
    
    { talent: td.dedication },
    { talent: td.tunedManeuveringThrusters },
    { talent: td.notToday },
    { talent: td.reinforcedFrame },
  ],
  vPath: [
    [0, 0, 0],
    [0, 1, 0],
    [0, 1, 1],
    [0, 1, 0],
    [0, 0, 0],
  ],
  hPath: [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
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
