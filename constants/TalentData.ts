import { act } from "react-test-renderer";

export const FORAGER = {
    name: "Forager",
    desc: "Remove up to [setback][setback] from skill checks to find food, water, or shelter. Survival checks to forage take half the time.",
  };
  export const TOUGHENED = {
    name: "Toughened",
    desc: "Gain +2 Wound Threshold.",
    ranked: true,
  };
  export const OUTDOORSMAN = {
    name: "Outdoorsman",
    desc: "Remove [setback] per rank of Outdoorsman from checks to move through terrain or manage environmental effects. Decrease overland travel times by half.",
    ranked: true,
  };
  export const BEAST_WRANGLER = {
    name: "Beast Wrangler",
    desc: "Add [boost] per rank of Beast Wrangler to checks to tame or wrangle creatures.",
    ranked: true,
  };
  export const EXPERT_TRACKER = {
    name: "Expert Tracker",
    desc: "Remove [setback] per rank of Expert Tracker from checks to find or follow tracks. Decrease time to track a target by half.",
    ranked: true,
  };
  export const EXPERT_HANDLER = {
    name: "Expert Handler",
    desc: "Remove [setback] per rank of Expert Handler from Survival Checks made to ride beasts.",
    ranked: true,
  };
  export const LETS_RIDE = { 
    name: "Let's Ride",
    desc: "Once per round, may mount or dismount a vehicle or beast, or enter a cockpit or weapon station on a vehicle, as an incidental.",
    ranked: false,
    active: true,
  };
  export const GRIT = {
    name: "Grit",
    desc: "Gain +1 Strain Threshold.",
    ranked: true,
  };
  export const SPUR = {
    name: "Spur",
    desc: "You may make a Hard ([difficulty][difficulty][difficulty]) Survival check to perform a Spur action, increasing a beast's top speed by 1. The beast suffers 2 strain every round it stays spurred.",
    active: true,
  }
  export const SPUR_IMPROVED = {
    name: "Spur (Improved)",
    desc: "Suffer 1 strain to attempt Spur as a maneuver and decrease its difficulty to Average ([difficulty][difficulty]).",
    active: true,
  }
  export const SPUR_SUPREME = {
    name: "Spur (Supreme)",
    desc: "When activating and maintaining Spur, the beast only suffers 1 strain instead of 2.",
    active: true,
  }
  export const NATURAL_OUTDOORSMAN = {
    name: "Natural Outdoorsman",
    desc: "Once per session, may reroll any 1 Resillience or Survival check.",
    active: true,
  }
  export const DEDICATION = {
    name: "Dedication",
    desc: "Gain +1 to a single characteristic. This cannot bring a characteristic above 6.",
    ranked: true,
  }
  export const SOOTHING_TONE = {
    name: "Soothing Tone",
    desc: "You may make an Average ([difficulty][difficulty]) Knowledge (Xenology) check to allow a beast to recover strain equal to [success].",
    active: true,
  }
  
  export default {
    FORAGER,
    TOUGHENED,
    OUTDOORSMAN,
    BEAST_WRANGLER,
    EXPERT_TRACKER,
    EXPERT_HANDLER,
    LETS_RIDE,
    GRIT,
    SPUR,
    SPUR_IMPROVED,
    SPUR_SUPREME,
    NATURAL_OUTDOORSMAN,
    DEDICATION,
    SOOTHING_TONE,
  };
  