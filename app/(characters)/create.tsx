import Description from '@/components/create/Description'
import FreeSkills from '@/components/create/FreeSkills'
import Summary from '@/components/create/Summary'
import Career from '@/components/create/career/Career'
import Characteristics from '@/components/create/characteristics/Characteristics'
import Skills from '@/components/create/skills/Skills'
import Specialization from '@/components/create/specialization/Specialization'
import Species from '@/components/create/species/Species'
import Button from '@/components/form/Button'
import { AGILITY, BRAWN, CUNNING, INTELLECT, PRESENCE, WILLPOWER } from '@/constants/Characteristics'
import React, { useEffect } from 'react'
import { ImageSourcePropType, Text, View } from 'react-native'
import * as Progress from 'react-native-progress'

const create = () => {

    const PAGES = 7;

    const [currentIndex, setCurrentIndex] = React.useState(0)

    const [name, setName] = React.useState('');
    const [homeworld, setHomeworld] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [species, setSpecies] = React.useState<null | Species>(null);
    const [experience, setExperience] = React.useState(0);
    const [career, setCareer] = React.useState<null | Career>(null);
    const [specialization, setSpecialization] = React.useState<null | Specialization>(null);
    const [checkedCareerSkills, setCheckedCareerSkills] = React.useState<{ [key: string]: boolean }>({});
    const [checkedSpecializationSkills, setCheckedSpecializationSkills] = React.useState<{ [key: string]: boolean }>({});
    const [portrait, setPortrait] = React.useState<ImageSourcePropType>(require('@/assets/images/species/aqualish_0.png'));

    const [characteristics, setCharacteristics] = React.useState<Characteristic[]>([
        { name: 'brawn', level: 0, desc: "Brute power, strength, and overall toughness." },
        { name: 'agility', level: 0, desc: "Manual dexterity, hand-eye coordination, and body control." },
        { name: 'intellect', level: 0, desc: 'Intelligence, education and ability to reason and rationalize.' },
        { name: 'cunning', level: 0, desc: 'Crafty, devious, clever, and creative.' },
        { name: 'willpower', level: 0, desc: 'Discipline, self-control, mental fortitude, and faith.' },
        { name: 'presence', level: 0, desc: 'Moxie, charisma, confidence, and force of personality.' }
    ]);
    const [skills, setSkills] = React.useState<Skill[]>(
        [
            { name: 'Brawl', level: 0, characteristic: BRAWN, career: false },
            { name: 'Gunnery', level: 0, characteristic: AGILITY, career: false },
            { name: 'Lightsaber', level: 0, characteristic: BRAWN, career: false },
            { name: 'Melee', level: 0, characteristic: BRAWN, career: false },
            { name: 'Ranged (Heavy)', level: 0, characteristic: AGILITY, career: false },
            { name: 'Ranged (Light)', level: 0, characteristic: AGILITY, career: false },

            { name: 'Core Worlds', level: 0, characteristic: INTELLECT, career: false },
            { name: 'Education', level: 0, characteristic: INTELLECT, career: false },
            { name: 'Lore', level: 0, characteristic: INTELLECT, career: false },
            { name: 'Outer Rim', level: 0, characteristic: INTELLECT, career: false },
            { name: 'Underworld', level: 0, characteristic: INTELLECT, career: false },
            { name: 'Warfare', level: 0, characteristic: INTELLECT, career: false },
            { name: 'Xenology', level: 0, characteristic: INTELLECT, career: false },

            { name: 'Astrogation', level: 0, characteristic: INTELLECT, career: false },
            { name: 'Athletics', level: 0, characteristic: BRAWN, career: false },
            { name: 'Charm', level: 0, characteristic: PRESENCE, career: false },
            { name: 'Coercion', level: 0, characteristic: WILLPOWER, career: false },
            { name: 'Computers', level: 0, characteristic: INTELLECT, career: false },
            { name: 'Cool', level: 0, characteristic: PRESENCE, career: false },
            { name: 'Coordination', level: 0, characteristic: AGILITY, career: false },
            { name: 'Deception', level: 0, characteristic: CUNNING, career: false },
            { name: 'Discipline', level: 0, characteristic: WILLPOWER, career: false },
            { name: 'Leadership', level: 0, characteristic: PRESENCE, career: false },
            { name: 'Mechanics', level: 0, characteristic: INTELLECT, career: false },
            { name: 'Medicine', level: 0, characteristic: INTELLECT, career: false },
            { name: 'Negotiation', level: 0, characteristic: PRESENCE, career: false },
            { name: 'Perception', level: 0, characteristic: CUNNING, career: false },
            { name: 'Piloting (Planetary)', level: 0, characteristic: AGILITY, career: false },
            { name: 'Piloting (Space)', level: 0, characteristic: AGILITY, career: false },
            { name: 'Resilience', level: 0, characteristic: BRAWN, career: false },
            { name: 'Skulduggery', level: 0, characteristic: CUNNING, career: false },
            { name: 'Stealth', level: 0, characteristic: AGILITY, career: false },
            { name: 'Streetwise', level: 0, characteristic: CUNNING, career: false },
            { name: 'Survival', level: 0, characteristic: CUNNING, career: false },
            { name: 'Vigilance', level: 0, characteristic: WILLPOWER, career: false }
        ]
    )

    useEffect(() => {
        function calculateXP() {
            const startingXP = species ? species.startingXP : 0;
            let xp = startingXP;
            if (species) {
                for (const characteristic of characteristics) {
                    switch (characteristic.name) {
                        case 'brawn':
                            for (let i = species.characteristics[0] + 1; i <= characteristic.level; i++) {
                                xp -= i * 10;
                            }
                            break;
                        case 'agility':
                            for (let i = species.characteristics[1] + 1; i <= characteristic.level; i++) {
                                xp -= i * 10;
                            }
                            break;
                        case 'intellect':
                            for (let i = species.characteristics[2] + 1; i <= characteristic.level; i++) {
                                xp -= i * 10;
                            }
                            break;
                        case 'cunning':
                            for (let i = species.characteristics[3] + 1; i <= characteristic.level; i++) {
                                xp -= i * 10;
                            }
                            break;
                        case 'willpower':
                            for (let i = species.characteristics[4] + 1; i <= characteristic.level; i++) {
                                xp -= i * 10;
                            }
                            break;
                        case 'presence':
                            for (let i = species.characteristics[5] + 1; i <= characteristic.level; i++) {
                                xp -= i * 10;
                            }
                            break;
                    }
                }
                for (const skill of skills) {
                    if (skill.level > 0) {
                        let checked = (checkedCareerSkills[skill.name] ? 1 : 0) + (checkedSpecializationSkills[skill.name] ? 1 : 0) + (species.bonusSkills && species.bonusSkills.includes(skill.name) ? 1 : 0);
                        if (skill.career) {
                            for (let i = checked + 1; i <= skill.level; i++) {
                                xp -= i * 5;
                            }
                        } else {
                            for (let i = checked + 1; i <= skill.level; i++) {
                                xp -= ((i * 5) + 5);
                            }
                        }
                    }
                }


            }
            return xp;
        }
        setExperience(calculateXP());
    }, [skills, characteristics, checkedCareerSkills, checkedSpecializationSkills])

    useEffect(() => {
        for (const skill of skills) {
            if (career && career.skills.includes(skill.name)) {
                skill.career = true;
            } else
                if (specialization && specialization.skills.includes(skill.name)) {
                    skill.career = true;
                } else
                    if (species && species.species === 'Cerean' &&
                        (skill.name === 'Core Worlds' || skill.name === 'Education' || skill.name === 'Lore' ||
                            skill.name === 'Outer Rim' || skill.name === 'Underworld' || skill.name === 'Warfare' ||
                            skill.name === 'Xenology')) {
                        skill.career = true;
                    } else {
                        skill.career = false;
                    }
        }
        setSkills([...skills]);

    }, [career, specialization, species])

    useEffect(() => {
        if (species) {
            for (const characteristic of characteristics) {
                switch (characteristic.name) {
                    case 'brawn':
                        characteristic.level = species.characteristics[0];
                        break;
                    case 'agility':
                        characteristic.level = species.characteristics[1];
                        break;
                    case 'intellect':
                        characteristic.level = species.characteristics[2];
                        break;
                    case 'cunning':
                        characteristic.level = species.characteristics[3];
                        break;
                    case 'willpower':
                        characteristic.level = species.characteristics[4];
                        break;
                    case 'presence':
                        characteristic.level = species.characteristics[5];
                        break;
                }
            }
        }
    }, [species])

    useEffect(() => {
        for (const skill of skills) {
            if (checkedCareerSkills[skill.name] === true) {
                skill.level -= 1;
            }
            if (checkedSpecializationSkills[skill.name] === true) {
                skill.level -= 1;
            }
        }
        setSpecialization(null);
        setCheckedCareerSkills({});
        setCheckedSpecializationSkills({});
    }, [career])

    useEffect(() => {
        for (const skill of skills) {
            if (checkedSpecializationSkills[skill.name] === true) {
                skill.level -= 1;
            }
        }
        setCheckedSpecializationSkills({});
    }, [specialization])

    function changeSpecies(s: Species) {
        skills.forEach(skill => {
            if (species && species.bonusSkills && species.bonusSkills.includes(skill.name)) {
                skill.level -= 1;
            }
            if (s && s.bonusSkills && s.bonusSkills.includes(skill.name)) {
                skill.level += 1;
            }
        })
        setSpecies(s);
    }


    return (
        <View className='flex-1 bg-slate-900 p-6'>
            <View className=''>
                <View className='flex flex-row justify-between'>
                    <View className='w-[20vw]' />
                    <Text className='text-2xl text-white font-[Elektra] text-center pb-[2vh]'>
                        {currentIndex === 0 ? 'Description' :
                            currentIndex === 1 ? 'Species' :
                                currentIndex === 2 ? 'Career' :
                                    currentIndex === 3 ? 'Specialization' :
                                        currentIndex === 4 ? 'Free Skills' :
                                            currentIndex === 5 ? 'Characteristics' :
                                                currentIndex === 6 ? 'Skills' :
                                                    'Summary'}
                    </Text>
                    <View className='w-[20vw] pt-2.5 h-full'>
                        {species && <Text className='text-slate-400 text-right font-[Elektra]'>XP: {experience}</Text>}
                    </View>
                </View>
                <Progress.Bar progress={((currentIndex + 1) / (PAGES + 1))} animated color='white' width={null} />
            </View>
            <View className='h-[64vh] my-[2vh]'>
                {currentIndex === 0 && <Description
                    portrait={portrait} setPortrait={setPortrait}
                    name={name} setName={setName}
                    homeworld={homeworld} setHomeworld={setHomeworld}
                    description={description} setDescription={setDescription}
                />}
                {currentIndex === 1 && <Species selectedSpecies={species} setSelectedSpecies={changeSpecies} />}
                {currentIndex === 2 && <Career selectedCareer={career} setSelectedCareer={setCareer} />}
                {currentIndex === 3 && <Specialization selectedCareer={career} selectedSpecialization={specialization} setSelectedSpecialization={setSpecialization} />}
                {currentIndex === 4 && <FreeSkills skills={skills} species={species} selectedCareer={career} selectedSpecialization={specialization} checkedCareerSkills={checkedCareerSkills}
                    setCheckedCareerSkills={setCheckedCareerSkills} checkedSpecializationSkills={checkedSpecializationSkills} setCheckedSpecializationSkills={setCheckedSpecializationSkills} />}
                {currentIndex === 5 && <Characteristics characteristics={characteristics} setCharacteristics={setCharacteristics} species={species} />}
                {currentIndex === 6 && <Skills species={species} skills={skills} setSkills={setSkills} career={career} specialization={specialization}
                    checkedCareerSkills={checkedCareerSkills} checkedSpecializationSkills={checkedSpecializationSkills} />}
                {currentIndex === 7 && <Summary name={name} homeworld={homeworld} description={description} species={species} career={career} specialization={specialization} characteristics={characteristics} skills={skills} portrait={portrait} />}
            </View>
            <View className='flex-row w-full justify-evenly'>

                <Button title='Back' className='mr-1' onPress={() => { setCurrentIndex(currentIndex - 1) }} disabled={currentIndex === 0}
                />
                {currentIndex === PAGES ? <Button title='Confirm' className='ml-1' onPress={() => console.log('create')} /> :
                    <Button title='Next' className='ml-1' onPress={() => { setCurrentIndex(currentIndex + 1) }}
                        disabled={
                            (currentIndex === 1 && species === null) ||
                            (currentIndex === 2 && career === null) ||
                            (currentIndex === 3 && specialization === null) ||
                            currentIndex === PAGES}
                    />}
            </View>
        </View>
    )
}

export default create