import { ImageSourcePropType } from "react-native";
import { Duty, Morality, Obligation } from "./Motivations";
import { Career, Characteristic, Skill, Specialization, Species } from "@/types/Types";
import {
  AGILITY,
  BRAWN,
  CUNNING,
  INTELLECT,
  PRESENCE,
  WILLPOWER,
} from "./Characteristics";

interface InitialPlayerStateInterface {
  credits: number;
  name: string;
  homeworld: string;
  description: string;
  species: Species | null;
  experience: number;
  career: Career | null;
  specialization: Specialization | null;
  checkedCareerSkills: { [key: string]: boolean };
  checkedSpecializationSkills: { [key: string]: boolean };
  portrait: ImageSourcePropType;
  characteristics: Characteristic[];
  skills: Skill[];
  obligation: boolean;
  duty: boolean;
  morality: boolean;
  groupSize: number;
  selectedObligations: Obligation[];
  selectedDuties: Duty[];
  obligationCost: number;
  dutyCost: number;
  moralityCost: number;
  additionalObligation: boolean[];
  additionalDuty: boolean[];
  moralityBonus: number;
  selectedStrength: Morality | null;
  selectedWeakness: Morality | null;
  selectedSpeciesOption: string | null;
}

const InitialPlayerState: InitialPlayerStateInterface = {
  credits: 500,
  name: "",
  homeworld: "",
  description: "",
  species: null,
  experience: 0,
  career: null,
  specialization: null,
  checkedCareerSkills: {},
  checkedSpecializationSkills: {},
  portrait: require("@/assets/images/species/aqualish_0.png") as ImageSourcePropType,
  characteristics: [
    { name: "brawn", level: 0, desc: "Brute power, strength, and overall toughness." },
    { name: "agility", level: 0, desc: "Manual dexterity, hand-eye coordination, and body control." },
    { name: "intellect", level: 0, desc: "Intelligence, education and ability to reason and rationalize." },
    { name: "cunning", level: 0, desc: "Crafty, devious, clever, and creative." },
    { name: "willpower", level: 0, desc: "Discipline, self-control, mental fortitude, and faith." },
    { name: "presence", level: 0, desc: "Moxie, charisma, confidence, and force of personality." }
  ],
  skills: [
    { name: "Brawl", level: 0, characteristic: BRAWN, career: false },
    { name: "Gunnery", level: 0, characteristic: AGILITY, career: false },
    { name: "Lightsaber", level: 0, characteristic: BRAWN, career: false },
    { name: "Melee", level: 0, characteristic: BRAWN, career: false },
    { name: "Ranged (Heavy)", level: 0, characteristic: AGILITY, career: false },
    { name: "Ranged (Light)", level: 0, characteristic: AGILITY, career: false },
    { name: "Charm", level: 0, characteristic: PRESENCE, career: false },
    { name: "Coercion", level: 0, characteristic: WILLPOWER, career: false },
    { name: "Deception", level: 0, characteristic: CUNNING, career: false },
    { name: "Leadership", level: 0, characteristic: PRESENCE, career: false },
    { name: "Negotiation", level: 0, characteristic: PRESENCE, career: false },
    { name: "Core Worlds", level: 0, characteristic: INTELLECT, career: false },
    { name: "Education", level: 0, characteristic: INTELLECT, career: false },
    { name: "Lore", level: 0, characteristic: INTELLECT, career: false },
    { name: "Outer Rim", level: 0, characteristic: INTELLECT, career: false },
    { name: "Underworld", level: 0, characteristic: INTELLECT, career: false },
    { name: "Warfare", level: 0, characteristic: INTELLECT, career: false },
    { name: "Xenology", level: 0, characteristic: INTELLECT, career: false },
    { name: "Astrogation", level: 0, characteristic: INTELLECT, career: false },
    { name: "Athletics", level: 0, characteristic: BRAWN, career: false },
    { name: "Computers", level: 0, characteristic: INTELLECT, career: false },
    { name: "Cool", level: 0, characteristic: PRESENCE, career: false },
    { name: "Coordination", level: 0, characteristic: AGILITY, career: false },
    { name: "Discipline", level: 0, characteristic: WILLPOWER, career: false },
    { name: "Mechanics", level: 0, characteristic: INTELLECT, career: false },
    { name: "Medicine", level: 0, characteristic: INTELLECT, career: false },
    { name: "Perception", level: 0, characteristic: CUNNING, career: false },
    { name: "Piloting (Planetary)", level: 0, characteristic: AGILITY, career: false },
    { name: "Piloting (Space)", level: 0, characteristic: AGILITY, career: false },
    { name: "Resilience", level: 0, characteristic: BRAWN, career: false },
    { name: "Skulduggery", level: 0, characteristic: CUNNING, career: false },
    { name: "Stealth", level: 0, characteristic: AGILITY, career: false },
    { name: "Streetwise", level: 0, characteristic: CUNNING, career: false },
    { name: "Survival", level: 0, characteristic: CUNNING, career: false },
    { name: "Vigilance", level: 0, characteristic: WILLPOWER, career: false }
  ],
  obligation: false,
  duty: false,
  morality: false,
  groupSize: 4,
  selectedObligations: [],
  selectedDuties: [],
  obligationCost: 10,
  dutyCost: 10,
  moralityCost: 50,
  additionalObligation: [false, false, false, false],
  additionalDuty: [false, false, false, false],
  moralityBonus: 0,
  selectedStrength: null,
  selectedWeakness: null,
  selectedSpeciesOption: null,
};

export default InitialPlayerState;
export type { InitialPlayerStateInterface };
