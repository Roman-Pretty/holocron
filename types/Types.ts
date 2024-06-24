import { ImageSourcePropType } from "react-native";

export interface Character {
  key: number;
  data: {
    name: string;
    homeworld: string;
    description: string;
    image: ImageSourcePropType;
    species: Species;
    career: Career;
    specializations: Specialization[];
    experience: {
      total: number;
      available: number;
    }
    credits: number;
    inventory: string[];
    characteristics: {
      brawn: number;
      agility: number;
      intellect: number;
      cunning: number;
      willpower: number;
      presence: number;
    };
    skills: Skill[];
    wound: {
      current: number;
      threshold: number;
    };
    strain: {
      current: number;
      threshold: number;
    };
    defense: {
      melee: number;
      ranged: number;
      soak: number;
    };
    encumbrance: {
      current: number;
      threshold: number;
    };
    obligation?: {
      type: string;
      value: number;
    }[];
    duty?: {
      type: string;
      value: number;
    };
    morality?: {
      strength: string;
      weakness: string;
      value: number;
    };
    criticalInjuries: CriticalInjury[]
    statusEffects: StatusEffect[];
  };
}

export interface StatusEffect {
  name: string;
  level: number;
  desc: string;
}

export interface CriticalInjury {
  name: string;
  severity: number;
  desc: string;
  image: ImageSourcePropType;
}

export interface Species {
  species: string;
  image: any;
  desc: string;
  characteristics: number[];
  woundThreshold: number;
  strainThreshold: number;
  startingXP: number;
  specialAbilities: { name: string; desc: string }[];
  speciesBonus: string;

  bonusSkills?: string[];
  hasOptions?: boolean;
  options?: { type: string; options: string[] };
}

export interface Career {
  name: string;
  image: any;
  desc: string;
  longDesc: string;
  skills: string[];
  specializations: Specialization[];
  forceSensitive: boolean;
}

export interface Specialization {
  name: string;
  desc: string;
  skills: string[];
  talents: TalentTree;
}

export interface Characteristic {
  name: string;
  level: number;
  desc: string;
}

export interface Skill {
  name: string;
  level: number;
  characteristic: Characteristic;
  career: boolean;
}

export interface Talent {
  name: string;
  desc: string;
  active?: boolean;
  ranked?: boolean;
  force?: boolean;
}

export interface TalentTree {
  talents: {
    talent: Talent;
    purchased?: boolean;
    cost?: number
  }[];
  hPath: number[][],
  vPath: number[][],
}
