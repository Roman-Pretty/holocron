export default [
    {
        name: 'Ace',
        desc: 'Starfighter pilots and other skilled operators of vehicles and starships.',
        longDesc: 'Aces are the best pilots in the galaxy, known for their skill and daring.',
        skills: ['Astrogation', 'Cool', 'Gunnery', 'Mechanics', 'Piloting (Planetary)', 'Piloting (Space)', 'Ranged (Light)'],
        image: require('@/assets/images/careers/ace.png'),
        specializations: [
            {
                name: 'Beast Rider',
                desc: 'Specialists in riding and caring for animals.',
                skills: ['Athletics', 'Xenology', 'Pereception', 'Survival'],
            },
            {
                name: 'Driver',
                desc: 'Specialists in operating ground vehicles.',
                skills: ['Cool', 'Gunnery', 'Mechanics', 'Piloting (Planetary)'],
            },
            {
                name: 'Gunner',
                desc: 'Specialists in operating weapons on vehicles and starships.',
                skills: ['Discipline', 'Gunnery', 'Ranged (Heavy)', 'Resilience'],
            },
        ],
        forceSensitive: false,
    },
    {
        name: "Bounty Hunter",
        desc: "Expert trackers, brutal combatants, and effective investigators for hire.",
        longDesc: "Bounty Hunters are feared and reviled, yet in great demand across the galaxy. They prefer stealth and traps but will do whatever it takes to capture their quarry.",
        skills: [
            "Athletics",
            "Brawl",
            "Perception",
            "Piloting (Planetary)",
            "Piloting (Space)",
            "Ranged (Heavy)",
            "Streetwise",
            "Vigilance"
        ],
        image: require('@/assets/images/careers/bounty-hunter.png'),
        specializations: [
            {
                name: "Assassin",
                desc: "Specializes in terminating targets quietly and efficiently.",
                skills: [
                    "Melee",
                    "Ranged (Heavy)",
                    "Skulduggery",
                    "Stealth"
                ]
            }
        ],
        forceSensitive: false
    },
    {
        name: "Clone Soldier",
        desc: "Elite warriors of the Grand Army of the Republic, trained for diverse battlefield roles.",
        longDesc: "Clone Soldiers form the backbone of the Republic's military, known for their consistent training and adaptability. Despite shared genetics, they become unique individuals with distinct experiences.",
        skills: [
            "Athletics",
            "Brawl",
            "Cool",
            "Discipline",
            "Medicine",
            "Ranged (Heavy)",
            "Ranged (Light)",
            "Vigilance"
        ],
        image: require('@/assets/images/careers/clone-trooper.png'),
        specializations: [
            {
                name: "Clone Officer",
                desc: "Leaders responsible for tactics and the welfare of their fellow soldiers.",
                skills: [
                    "Cool",
                    "Leadership",
                    "Knowledge (Outer Rim)",
                    "Knowledge (Warfare)"
                ]
            },
            {
                name: "Clone Pilot",
                desc: "Specialists in piloting vehicles and starfighters for the Republic Navy.",
                skills: [
                    "Gunnery",
                    "Mechanics",
                    "Piloting (Planetary)",
                    "Piloting (Space)"
                ]
            },
            {
                name: "Clone Trooper",
                desc: "Frontline infantry trained for diverse combat scenarios.",
                skills: [
                    "Gunnery",
                    "Perception",
                    "Ranged (Heavy)",
                    "Resilience"
                ]
            }
        ],
        forceSensitive: false
    }
    
    
];