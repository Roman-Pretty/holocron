import TalentData from "./TalentData"

export const BEAST_RIDER =
{
    talents: [
        { talent: TalentData.forager },
        { talent: TalentData.tough },
        { talent: TalentData.outdoorsman },
        { talent: TalentData.BEASTWRANG, },

        { talent: TalentData.outdoorsman },
        { talent: TalentData.expertTracker },
        { talent: TalentData.tough },
        { talent: TalentData.EXHANDLER, },

        { talent: TalentData.expertTracker, },
        { talent: TalentData.BEASTWRANG, },
        { talent: TalentData.letsRide, },
        { talent: TalentData.grit, },

        { talent: TalentData.SPURIMP, },
        { talent: TalentData.SPUR, },
        { talent: TalentData.naturalOutdoorsman, },
        { talent: TalentData.EXHANDLER, },

        { talent: TalentData.SPURSUP, },
        { talent: TalentData.dedication, },
        { talent: TalentData.grit, },
        { talent: TalentData.SOOTHTONE, }
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
        [1, 1, 1, 0]
    ],
}

export const DRIVER = {
    talents: [
        { talent: TalentData.fullThrottle, },
        { talent: TalentData.allTerrainDriver, },
        { talent: TalentData.fineTuning, },
        { talent: TalentData.gearhead, },
        { talent: TalentData.grit, },
        { talent: TalentData.skilledJockey, },
        { talent: TalentData.rapidReaction, },
        { talent: TalentData.grit, },
        { talent: TalentData.fullThrottleImproved, },
        { talent: TalentData.trickyTarget, },
        { talent: TalentData.fineTuning, },
        { talent: TalentData.tough, },
        { talent: TalentData.defensiveDriving, },
        { talent: TalentData.skilledJockey, },
        { talent: TalentData.naturalDriver, },
        { talent: TalentData.gearhead, },
        { talent: TalentData.fullThrottleSuperior, },
        { talent: TalentData.fullStop, },
        { talent: TalentData.masterDriver, },
        { talent: TalentData.dedication, },
    ],
    vPath: [
        [0, 0, 0,],
        [1, 1, 1,],
        [0, 0, 1,],
        [1, 1, 0,],
        [1, 1, 1,],
    ],
    hPath: [
        [1, 1, 1, 1],
        [0, 1, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
    ]
}

export const GUNNER = {
    talents: [
    ],
    vPath: []
}


export default {
    BEAST_RIDER,
    DRIVER
}