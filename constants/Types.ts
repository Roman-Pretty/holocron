interface Character {
    key: number;
    data: {
        name: string;
        homeworld: string;
        description: string;
        imageId: number;
        species: string;
        career: string;
        specializations: string[];
        exp: number;
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
        skills: {
            generalSkills: string[];
            combatSkills: string[];
            knowledgeSkills: string[];
            socialSkills: string[];
        };
        overview: {
            duty: string;
            morality: string;
            obligation: string;
            credits: number;
        };
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
    };
};

interface Species {
        species: string;
        image: any;
        desc: string;
        characteristics: number[];
        woundThreshold: number;
        strainThreshold: number;
        startingXP: number;
        specialAbilities: { name: string; desc: string; }[];
        speciesBonus: string;
}

interface Career {
    name: string;
    image: any;
    desc: string;
    longDesc: string;
    skills: string[];
    specializations: Specialization[];
    forceSensitive: boolean;
}

interface Specialization {
    name: string;
    desc: string;
    skills: string[];
}

interface Characteristic {
    name: string;
    level: number;
    desc: string;
}

interface Skill {
    name: string;
    level: number;
    characteristic: Characteristic;
    career: boolean;
}