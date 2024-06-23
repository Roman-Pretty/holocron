import { Career } from "@/types/Types";
import * as Tree from "./TalentTreeData";
export default [
  {
    name: "Ace",
    desc: "Starfighter pilots and other skilled operators of vehicles and starships.",
    longDesc:
      "Aces are the best pilots in the galaxy, known for their skill and daring.",
    skills: [
      "Astrogation",
      "Cool",
      "Gunnery",
      "Mechanics",
      "Piloting (Planetary)",
      "Piloting (Space)",
      "Ranged (Light)",
    ],
    image: require("@/assets/images/careers/ace.png"),
    specializations: [
      {
        name: "Beast Rider",
        desc: "Specialists in riding and caring for animals.",
        skills: ["Athletics", "Xenology", "Pereception", "Survival"],
        talents: Tree.BEAST_RIDER,
      },
      {
        name: "Driver",
        desc: "Specialists in operating ground vehicles.",
        skills: ["Cool", "Gunnery", "Mechanics", "Piloting (Planetary)"],
        talents: Tree.DRIVER,
      },
      {
        name: "Gunner",
        desc: "Specialists in operating weapons on vehicles and starships.",
        skills: ["Discipline", "Gunnery", "Ranged (Heavy)", "Resilience"],
        talents: Tree.GUNNER,
      },
      {
        name: "Hotshot",
        desc: "Naturally gifted, overly aggressive, and great at improvising.",
        skills: ["Cool", "Coordination", "Piloting (Planetary)", "Piloting (Space)"],
        talents: Tree.HOTSHOT,
      },
      {
        name: "Pilot",
        desc: "Specialists in operating starships. A pilot's ship is an extension of themselves.",
        skills: ["Astrogation", "Gunnery", "Piloting (Planetary)", "Piloting (Space)"],
        talents: Tree.PILOT,
      },
      {
        name: "Rigger",
        desc: "Specialists in modifying and repairing vehicles and starships.",
        skills: ["Gunnery", "Mechanics", "Resilience", "Underworld"],
        talents: Tree.RIGGER,
      }
    ],
    forceSensitive: false,
  },
  {
    name: "Bounty Hunter",
    desc: "Expert trackers, brutal combatants, and effective investigators for hire.",
    longDesc:
      "Bounty Hunters are feared and reviled, yet in great demand across the galaxy. They prefer stealth and traps but will do whatever it takes to capture their quarry.",
    skills: [
      "Athletics",
      "Brawl",
      "Perception",
      "Piloting (Planetary)",
      "Piloting (Space)",
      "Ranged (Heavy)",
      "Streetwise",
      "Vigilance",
    ],
    image: require("@/assets/images/careers/bounty-hunter.png"),
    specializations: [
      {
        name: "Assassin",
        desc: "Specializes in terminating targets quietly and efficiently.",
        skills: ["Melee", "Ranged (Heavy)", "Skulduggery", "Stealth"],
        talents: Tree.ASSASSIN,
      },
    ],
    forceSensitive: false,
  },
  {
    name: "Clone Soldier",
    desc: "Elite warriors of the Grand Army of the Republic, trained for diverse battlefield roles.",
    longDesc:
      "Clone Soldiers form the backbone of the Republic's military, known for their consistent training and adaptability. Despite shared genetics, they become unique individuals with distinct experiences.",
    skills: [
      "Athletics",
      "Brawl",
      "Cool",
      "Discipline",
      "Medicine",
      "Ranged (Heavy)",
      "Ranged (Light)",
      "Vigilance",
    ],
    image: require("@/assets/images/careers/clone-trooper.png"),
    specializations: [
      {
        name: "Clone Officer",
        desc: "Leaders responsible for tactics and the welfare of their fellow soldiers.",
        skills: [
          "Cool",
          "Leadership",
          "Outer Rim",
          "Warfare",
        ],
      },
      {
        name: "Clone Pilot",
        desc: "Specialists in piloting vehicles and starfighters for the Republic Navy.",
        skills: [
          "Gunnery",
          "Mechanics",
          "Piloting (Planetary)",
          "Piloting (Space)",
        ],
      },
      {
        name: "Clone Trooper",
        desc: "Frontline infantry trained for diverse combat scenarios.",
        skills: ["Gunnery", "Perception", "Ranged (Heavy)", "Resilience"],
      },
    ],
    forceSensitive: false,
  },
  {
    name: "Colonist",
    desc: "Versatile individuals from the Core Worlds, skilled in diplomacy and problem-solving.",
    longDesc:
      "Colonists bring knowledge and social skills honed in the Core Worlds to the diverse challenges of the Outer Rim. Whether seeking opportunities or exploiting their talents for personal gain, they navigate the fringe with charisma and intellect.",
    skills: [
      "Charm",
      "Deception",
      "Core Worlds",
      "Education",
      "Lore",
      "Leadership",
      "Negotiation",
      "Streetwise",
    ],
    image: require("@/assets/images/careers/colonist.png"),
    specializations: [
      {
        name: "Doctor",
        desc: "Skilled healers in high demand, offering medical expertise and resilience.",
        skills: ["Cool", "Education", "Medicine", "Resilience"],
      },
      {
        name: "Entrepreneur",
        desc: "Visionaries driving innovation and enterprise with negotiation and discipline.",
        skills: ["Discipline", "Education", "Underworld", "Negotiation"],
      },
      {
        name: "Marshal",
        desc: "Law enforcers adept at coercion and vigilant in pursuit of justice.",
        skills: ["Coercion", "Underworld", "Ranged (Light)", "Vigilance"],
      },
      {
        name: "Performer",
        desc: "Entertainers captivating audiences with charm, deception, and physical prowess.",
        skills: ["Charm", "Coordination", "Deception", "Melee"],
      },
      {
        name: "Politico",
        desc: "Masters of persuasion and leadership, shaping destinies with words and influence.",
        skills: ["Charm", "Coercion", "Deception", "Core Worlds"],
      },
      {
        name: "Scholar",
        desc: "Seekers of knowledge, wielding expertise in exploration and perception.",
        skills: ["Outer Rim", "Underworld", "Xenology", "Perception"],
      },
    ],
    forceSensitive: false,
  },
] as Career[];
