import Description from '@/components/create/Description'
import Career from '@/components/create/career/Career'
import Species from '@/components/create/species/Species'
import Specialization from '@/components/create/specialization/Specialization'
import FreeSkills from '@/components/create/FreeSkills'
import Characteristics from '@/components/create/characteristics/Characteristics'
import Skills from '@/components/create/skills/Skills'
import Button from '@/components/form/Button'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import * as Progress from 'react-native-progress'
import { BRAWN, AGILITY, INTELLECT, CUNNING, WILLPOWER, PRESENCE } from '@/constants/Characteristics'
import { ImageSourcePropType } from 'react-native'
import Summary from '@/components/create/Summary'

const create = () => {

    const PAGES = 7;

    const [currentIndex, setCurrentIndex] = React.useState(0)

    //TODO: Rework Experience!
    const [name, setName] = React.useState('');
    const [homeworld, setHomeworld] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [species, setSpecies] = React.useState<null | Species>(null);
    const [xp, setXP] = React.useState(0);
    const [career, setCareer] = React.useState<null | Career>(null);
    const [specialization, setSpecialization] = React.useState<null | Specialization>(null);
    const [checkedCareerSkills, setCheckedCareerSkills] = React.useState<{ [key: string]: boolean }>({});
    const [checkedSpecializationSkills, setCheckedSpecializationSkills] = React.useState<{ [key: string]: boolean }>({});
    const [characteristics, setCharacteristics] = React.useState<Characteristic[]>([]);
    const [portrait, setPortrait] = React.useState<ImageSourcePropType>(require('@/assets/images/species/aqualish_0.png'));

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
        for (const skill of skills) {
            if (career && career.skills.includes(skill.name)) {
                skill.career = true;
            }
            if (specialization && specialization.skills.includes(skill.name)) {
                skill.career = true;
            }
            if (species && species.species === 'Cerean' &&
                (skill.name === 'Core Worlds' || skill.name === 'Education' || skill.name === 'Lore' ||
                    skill.name === 'Outer Rim' || skill.name === 'Underworld' || skill.name === 'Warfare' ||
                    skill.name === 'Xenology')) {
                skill.career = true;
            }
        }

    }, [career, specialization, species])

    function assignCareer(c: Career) {
        setCareer(c);
        setSpecialization(null);
        setCheckedCareerSkills({});
        setCheckedSpecializationSkills({});
    }

    function assignSpecialization(s: Specialization) {
        setSpecialization(s);
        setCheckedSpecializationSkills({});
    }

    function assignSpecies(s: Species) {
        setSpecies(s);
        setXP(s.startingXP);
        setCharacteristics([
            { name: 'brawn', level: s.characteristics[0], desc: "Brute power, strength, and overall toughness." },
            { name: 'agility', level: s.characteristics[1], desc: "Manual dexterity, hand-eye coordination, and body control." },
            { name: 'intellect', level: s.characteristics[2], desc: 'Intelligence, education and ability to reason and rationalize.' },
            { name: 'cunning', level: s.characteristics[3], desc: 'Crafty, devious, clever, and creative.' },
            { name: 'willpower', level: s.characteristics[4], desc: 'Discipline, self-control, mental fortitude, and faith.' },
            { name: 'presence', level: s.characteristics[5], desc: 'Moxie, charisma, confidence, and force of personality.' }
        ]);
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
                        {species && <Text className='text-slate-400 text-right font-[Elektra]'>XP: {xp}</Text>}
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
                {currentIndex === 1 && <Species selectedSpecies={species} setSelectedSpecies={assignSpecies} />}
                {currentIndex === 2 && <Career selectedCareer={career} setSelectedCareer={assignCareer} />}
                {currentIndex === 3 && <Specialization selectedCareer={career} selectedSpecialization={specialization} setSelectedSpecialization={assignSpecialization} />}
                {currentIndex === 4 && <FreeSkills xp={xp} setXP={setXP} skills={skills} species={species} selectedCareer={career} selectedSpecialization={specialization} checkedCareerSkills={checkedCareerSkills}
                    setCheckedCareerSkills={setCheckedCareerSkills} checkedSpecializationSkills={checkedSpecializationSkills} setCheckedSpecializationSkills={setCheckedSpecializationSkills} />}
                {currentIndex === 5 && <Characteristics characteristics={characteristics} setCharacteristics={setCharacteristics} xp={xp} setXp={setXP} species={species} />}
                {currentIndex === 6 && <Skills skills={skills} setSkills={setSkills} xp={xp} setXp={setXP} career={career} specialization={specialization}
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