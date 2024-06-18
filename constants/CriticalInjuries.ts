import { CriticalInjury } from "@/types/Types";

export const CriticalInjuries: CriticalInjury[] = [
  { name: "Minor Nick", severity: 1, desc: "The target suffers 1 strain." },
  {
    name: "Slowed Down",
    severity: 1,
    desc: "The target can only act during the last allied Initiative slot on their next turn.",
  },
  {
    name: "Sudden Jolt",
    severity: 1,
    desc: "The target drops whatever is in hand.",
  },
  {
    name: "Distracted",
    severity: 1,
    desc: "The target cannot perform a free Maneuver during their next turn.",
  },
  {
    name: "Off-Balance",
    severity: 1,
    desc: "Add one black die to their next skill check.",
  },
  {
    name: "Discouraging Wound",
    severity: 1,
    desc: "Flip one Light side Destiny point to a Dark side Destiny Point.",
  },
  {
    name: "Stunned",
    severity: 1,
    desc: "The target is Staggered until the end of their next turn.",
  },
  {
    name: "Stinger",
    severity: 1,
    desc: "Increase difficulty of next check by one.",
  },
  {
    name: "Bowled Over",
    severity: 2,
    desc: "The target is knocked prone and suffers 1 strain.",
  },
  {
    name: "Head Ringer",
    severity: 2,
    desc: "The target increases the difficulty of all Intellect and Cunning checks by one until the end of the encounter.",
  },
  {
    name: "Fearsome Wound",
    severity: 2,
    desc: "The target increases the difficulty of all Presence and Willpower checks by one until the end of the encounter.",
  },
  {
    name: "Agonizing Wound",
    severity: 2,
    desc: "The target increases the difficulty of all Brawn and Agility checks by one until the end of the encounter.",
  },
  {
    name: "Slightly Dazed",
    severity: 2,
    desc: "The target is disoriented until the end of the encounter.",
  },
  {
    name: "Scattered Senses",
    severity: 2,
    desc: "The target removes all Blue dice from skill checks until the end of the encounter.",
  },
  {
    name: "Hamstrung",
    severity: 2,
    desc: "The target loses their free maneuver until the end of the encounter.",
  },
  {
    name: "Overpowered",
    severity: 2,
    desc: "The target leaves themselves open, and the attacker may immediately attempt another free attack against them using the exact same pool as the original attack.",
  },
  {
    name: "Winded",
    severity: 2,
    desc: "Until the end of the encounter, the target cannot voluntarily suffer strain to activate any abilities or gain additional maneuvers.",
  },
  {
    name: "Compromised",
    severity: 2,
    desc: "Increase difficulty of all skill checks by one until the end of the encounter.",
  },
  {
    name: "At the Brink",
    severity: 3,
    desc: "The target suffers 2 strain each time they perform an action.",
  },
  {
    name: "Crippled",
    severity: 3,
    desc: "One of the target's limbs (selected by the GM) is crippled until healed or replaced. Increase difficulty of all checks that require use of that limb by one.",
  },
  {
    name: "Maimed",
    severity: 3,
    desc: "One of the target's limbs (selected by the GM) is permanently lost. Unless the target has a cybernetic or prosthetic replacement, the target cannot perform actions that would require the use of that limb. All other actions gain 1 Black die.",
  },
  {
    name: "Horrific Injury",
    severity: 3,
    desc: "Roll 1d10 to determine one of the target's characteristics: 1-3 for Brawn, 4-6 for Agility, 7 for Intellect, 8 for Cunning, 9 for Willpower, 10 for Presence. Until this Critical Injury is healed, treat that characteristic as one point lower.",
  },
  {
    name: "Temporarily Lame",
    severity: 3,
    desc: "Until this Critical Injury is healed, the target cannot perform more than one maneuver in a turn.",
  },
  {
    name: "Blinded",
    severity: 3,
    desc: "The target can no longer see. Upgrade the difficulty of all checks twice. Upgrade the difficulty of Perception and Vigilance checks three times.",
  },
  {
    name: "Knocked Senseless",
    severity: 3,
    desc: "The target is staggered for the remainder of the encounter.",
  },
  {
    name: "Gruesome Injury",
    severity: 4,
    desc: "Roll 1d10 to determine one of the target's characteristics: 1-3 for Brawn, 4-6 for Agility, 7 for Intellect, 8 for Cunning, 9 for Willpower, 10 for Presence. Until this Critical Injury is healed, treat that characteristic as two points lower.",
  },
  {
    name: "Bleeding Out",
    severity: 4,
    desc: "Every round, the target suffers 1 wound and 1 strain at the beginning of their turn. For every five wounds they suffer beyond their wound threshold, they suffer one additional Critical Injury.",
  },
  {
    name: "The End is Nigh",
    severity: 4,
    desc: "The target will die after the last Initiative slot during the next round.",
  },
  { name: "Dead", severity: 5, desc: "Complete, obliterated death." },
];
