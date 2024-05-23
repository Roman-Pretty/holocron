export default [
    {
        species: 'Aleena',
        image: require('@/assets/images/species/aleena_0.png'),
        desc: 'Aleena are a species of small, rodent-like humanoids with large ears and a long tail.',
        characteristics: [1, 3, 2, 2, 2, 2],
        woundThreshold: 8,
        strainThreshold: 10,
        startingXP: 95,
        specialAbilities: [{ name: 'Small Stature', desc: 'Aleena are Silhouette 0.' }],
        speciesBonus: 'Aleena begin the game with one rank in Coordination and Durable 1.'
    },
    {
        species: 'Anx',
        image: require('@/assets/images/species/anx_0.png'),
        desc: 'Anx are peaceful, tall reptilians, reaching heights of 4 meters. Their thin, hairless head has an upwards crest.',
        characteristics: [3, 1, 2, 2, 2, 2],
        woundThreshold: 13,
        strainThreshold: 10,
        startingXP: 85,
        specialAbilities: [{ name: 'Mood Indicator', desc: "If an Anx's head-crest is not covered, the character upgrades the difficulty of Deception checks once." }],
        speciesBonus: 'Anx begin the game with the talents Kill With Kindness 1 and Lethal Blows 1.'
    },
    {
        species: 'Aqualish',
        image: require('@/assets/images/species/aqualish_0.png'),
        desc: 'Aqualish are a species of amphibious humanoids with a reputation for being aggressive and violent.',
        characteristics: [3, 2, 1, 2, 2, 2],
        woundThreshold: 11,
        strainThreshold: 8,
        startingXP: 90,
        specialAbilities: [{ name: 'Underwater Breathing', desc: 'Aqualish can breathe underwater and on land.' }, {name: 'Environmental Conditions', desc: 'Aqualish may remove a setback die imposed due to environmental conditions.'}],
        speciesBonus: 'Aqualish start with 1 point in both Brawl and Resilience.'
    },
    {
        species: 'Arcona',
        image: require('@/assets/images/species/arcona_0.png'),
        desc: 'Arcona are a species of reptilian humanoids with scaly skin and a flat, triangular head.',
        characteristics: [1, 2, 2, 2, 3, 2],
        woundThreshold: 10,
        strainThreshold: 10,
        startingXP: 100,
        specialAbilities: [{ name: 'Environment', desc: 'Arcona may remove any setback die imposed due to arid or hot environmental conditions.' }, { name: 'Mood Readers.', desc: 'Arcona add one advantage to any Charm or Negotiation checks they make.' }],
        speciesBonus: 'Arcona begin the game with one rank in Vigilance.'
    },
    {
        species: 'Arkanian',
        image: require('@/assets/images/species/arkanian_0.png'),
        desc: 'Arkanians are an arrogant and selfish species of near-humans who focus primarily on science.',
        characteristics: [2, 2, 3, 2, 2, 1],
        woundThreshold: 10,
        strainThreshold: 10,
        startingXP: 100,
        specialAbilities: [{ name: 'Dark Vision', desc: 'Arkanians may remove up to two setback die due to dark conditions.' }],
        speciesBonus: 'Arkanians start with 1 skill in Medicine'
    },
    {
        species: 'Balosar',
        image: require('@/assets/images/species/balosar_0.png'),
        desc: 'Balosar are a species of near-Humans with pale skin and a heightened sense of hearing.',
        characteristics: [2, 2, 2, 3, 1, 2],
        woundThreshold: 10,
        strainThreshold: 10,
        startingXP: 100,
        specialAbilities: [{ name: 'Antennapalps', desc: 'Balosar add two advantage automatically to all Vigilance checks' }],
        speciesBonus: 'Balosar start with 1 rank in Streetwise'
    },
    {
        species: 'Bardottan',
        image: require('@/assets/images/species/bardottan_0.png'),
        desc: 'Bardottans are a species with elongated heads and a unique vocal structure.',
        characteristics: [2, 2, 2, 1, 3, 2],
        woundThreshold: 9,
        strainThreshold: 10,
        startingXP: 105,
        specialAbilities: [{name: 'None', desc: 'Bardottans have no special abilities.'}],
        speciesBonus: 'Bardottans start with one rank in Lore.'
    },
    {
        species: 'Besalisk',
        image: require('@/assets/images/species/besalisk_0.png'),
        desc: 'Besalisks are a species of four-armed humanoids from the cold ocean planet of Ojom.',
        characteristics: [3, 1, 2, 1, 2, 2],
        woundThreshold: 12,
        strainThreshold: 7,
        startingXP: 85,
        specialAbilities: [{ name: 'Additional Limbs', desc: 'Besalisks have four arms and gain an additional free maneuver per turn. They still may not perform more than two maneuvers per turn, however.' }],
        speciesBonus: 'Besalisks start with one rank in Resilience.'
    },
    {
        species: 'Bith',
        image: require('@/assets/images/species/bith_0.png'),
        desc: 'Bith are a species of near-Humans with large heads and sensitive hearing.',
        characteristics: [1, 2, 2, 2, 2, 3],
        woundThreshold: 10,
        strainThreshold: 10,
        startingXP: 100,
        specialAbilities: [{ name: 'Sensitive Hearing', desc: 'Bith add one advantage to all hearing-based Perception checks they make.' }, { name: 'Sensitive Hearing', desc: 'Bith suffer doubled strain from loud noises.' }],
        speciesBonus: 'Bith start with one rank in Perception.'
    },
    {
        species: 'Bothan',
        image: require('@/assets/images/species/bothan_0.png'),
        desc: 'Bothans are a species of near-Humans with fur-covered bodies and elongated faces.',
        characteristics: [1,2,2,3,2,2],
        woundThreshold: 10,
        strainThreshold: 11,
        startingXP: 100,
        specialAbilities: [{ name: 'None', desc: 'Bothans have no special abilities' }],
        speciesBonus: 'Bothans start with one rank in Streetwise, and Convincing Demeanor 1.'
    },
    {
        species: 'Caamasi',
        image: require('@/assets/images/species/caamasi_0.png'),
        desc: 'Caamasi are a species of near-Humans with fur-covered bodies and elongated faces.',
        characteristics: [2, 2, 2, 1, 3, 2],
        woundThreshold: 10,
        strainThreshold: 11,
        startingXP: 100,
        specialAbilities: [{ name: 'Memnii', desc: 'Once per game session, a Caamasi may form a new memnis that encompasses one scene or encounter. At any time, a Caamasi may perfectly recall any memnis that he has formed or witnessed, or share it with another Caamasi or Force-sensitive.' }],
        speciesBonus: 'Caamasi may start with one rank in Charm or Discipline.',
        hasOptions: true,
        options: {
            type: 'skill',
            options: ['Charm', 'Discipline']
        }
    },
    {
        species: 'Cerean',
        image: require('@/assets/images/species/cerean_0.png'),
        desc: 'Cereans are a species of near-Humans with tall, conical heads and two brains.',
        characteristics: [2, 1, 3, 2, 2, 2],
        woundThreshold: 10,
        strainThreshold: 13,
        startingXP: 90,
        specialAbilities: [{ name: 'None', desc: 'Cereans have no special abilities.' }],
        speciesBonus: 'Cereans start with one rank in Vigilance, and may treat all Knowledge Skills as Career Skills.'
    },
    {
        species: 'Chadra-Fan',
        image: require('@/assets/images/species/chadra-fan_0.png'),
        desc: 'Chadra-Fan are a species of small, furry humanoids with large ears and a long tail.',
        characteristics: [1, 3, 3, 2, 1, 2],
        woundThreshold: 9,
        strainThreshold: 11,
        startingXP: 90,
        specialAbilities: [{ name: 'Acute Senses', desc: 'Chadra-Fan may remove up to two setback die for any perception check they make.' }, { name: 'Reduced Silouette', desc: 'Chadra-Fan are Silhouette 0.' }],
        speciesBonus: 'Chadra-Fan start with one rank in Mechanics.'
    },
    {
        species: 'Chagrian',
        image: require('@/assets/images/species/chagrian_0.png'),
        desc: 'Chagrians are a species of near-Humans with blue skin and a pair of head-tails.',
        characteristics: [2, 1, 2, 2, 3, 2],
        woundThreshold: 11,
        strainThreshold: 10,
        startingXP: 90,
        specialAbilities: [{ name: 'Amphibious', desc: 'Chagrians can breathe underwater without penalty and never suffer movement penalties for traveling through water.' }],
        speciesBonus: 'Chagrians start with Knowledge Specialization 1 and one rank in Resilience.'
    },
    {
        species: 'Chevin',
        image: require('@/assets/images/species/chevin_0.png'),
        desc: 'Chevin are a species of large, slug-like humanoids with a reputation for being shrewd businessmen.',
        characteristics: [3, 1, 2, 3, 2, 1],
        woundThreshold: 11,
        strainThreshold: 11,
        startingXP: 80,
        specialAbilities: [{ name: 'Advanced Olfaction', desc: 'Chevin add 1 boost die to Perception checks involving the sense of smell.' }],
        speciesBonus: 'Chevin start with Durable 1 and one rank in Negotiation.'
    },
    {
        species: 'Chiss',
        image: require('@/assets/images/species/chiss_0.png'),
        desc: 'Chiss are a species of near-Humans with blue skin and glowing red eyes.',
        characteristics: [2, 2, 3, 2, 2, 1],
        woundThreshold: 10,
        strainThreshold: 10,
        startingXP: 100,
        specialAbilities: [{ name: 'Infravision', desc: 'Chiss have adapted to be able to see in both the infrared and normal visual spectra. This enables Chiss characters to remove up to 1 setback die added to checks by lighting conditions.' }],
        speciesBonus: 'Chiss start with one rank in Cool.'
    },
    {
        species: 'Clawdite',
        image: require('@/assets/images/species/clawdite_0.png'),
        desc: 'Clawdites are a species of near-Humans with the ability to shapeshift.',
        characteristics: [2, 2, 2, 3, 1, 2],
        woundThreshold: 9,
        strainThreshold: 9,
        startingXP: 95,
        specialAbilities: [{ name: 'Changeling', desc: 'As an action, may suffer 3 strain and make an Average (◆◆) Resilience check to change appearance to match a previously-observed silhouette 1 character. Observer must make an opposed Perception vs. Deception check to detect that something is amiss.' }],
        speciesBonus: 'Clawdites start with Indistinguishable 1 and one rank in Resilience.'
    },
    {
        species: 'Clone',
        image: require('@/assets/images/species/clone_0.png'),
        desc: 'Clones are a species of genetically engineered soldiers created by the Kaminoans.',
        characteristics: [2, 2, 2, 2, 2, 2],
        woundThreshold: 11,
        strainThreshold: 11,
        startingXP: 100,
        specialAbilities: [{ name: 'None', desc: 'Clones have no special abilities.' }],
        speciesBonus: 'Clones start with Physical Training 1 and one rank in both Warfare and Resilience.'
    },
    {
        species: 'Corellian Human',
        image: require('@/assets/images/species/corellian_0.png'),
        desc: 'Corellians are a species of Humans from the Corellian Sector of the galaxy.',
        characteristics: [2, 2, 2, 2, 2, 2],
        woundThreshold: 10,
        strainThreshold: 10,
        startingXP: 110,
        specialAbilities: [{ name: 'None', desc: 'Corellians have no special abilities.' }],
        speciesBonus: "Corellian Humans may start with one rank in Piloting (Space) or Piloting (Planetary)."
    },
    {
        species: 'Cosian',
        image: require('@/assets/images/species/cosian_0.png'),
        desc: 'Soft-spoken and genial, the reptilian Cosians are seen as harmless or even befuddled by most who encounter them.',
        characteristics: [1, 2, 3, 2, 2, 2],
        woundThreshold: 10,
        strainThreshold: 11,
        startingXP: 95,
        specialAbilities: [{ name: 'Strong Backed', desc: 'Cosians gain +5 to their encumbrance threshold.' }],
        speciesBonus: 'Cosians start with one rank in Lore.'
    },
    {
        species: 'Dathomirian',
        image: require('@/assets/images/species/dathomirian_0.png'),
        desc: 'Dathomirians are a species of near-Humans with red skin (males) or pale skin (females) and a natural affinity for the Force.',
        characteristics: [2, 2, 2, 2, 2, 2],
        woundThreshold: 10,
        strainThreshold: 11,
        startingXP: 100,
        specialAbilities: [{ name: 'None', desc: 'Dathomirians have no special abilities.' }],
        speciesBonus: 'Dathominians start with Outdoorsman 1 and one rank in both Coercion and Survival.'
    },
    {
        species: 'Devaronian',
        image: require('@/assets/images/species/devaronian_0.png'),
        desc: 'Devaronians are a species of horned humanoids with red skin and a reputation for being violent and aggressive.',
        characteristics: [2, 2, 2, 3, 2, 1],
        woundThreshold: 11,
        strainThreshold: 10,
        startingXP: 95,
        specialAbilities: [{ name: 'Resillient Metabolism', desc: 'Devaronians add 1 automatic success to all Resilience checks.' }],
        speciesBonus: 'Devaronians may start with one rank in Deception or Survival.'
    }
    
];