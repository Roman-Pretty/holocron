import Description from '@/components/create/Description'
import Career from '@/components/create/career/Career'
import Species from '@/components/create/species/Species'
import Specialization from '@/components/create/specialization/Specialization'
import FreeSkills from '@/components/create/FreeSkills'
import Characteristics from '@/components/create/characteristics/Characteristics'
import Skills from '@/components/create/skills/Skills'
import Button from '@/components/form/Button'
import React from 'react'
import { Text, View } from 'react-native'
import * as Progress from 'react-native-progress'
import { BRAWN, AGILITY, INTELLECT, CUNNING, WILLPOWER, PRESENCE } from '@/constants/Characteristics'
import { ImageSourcePropType } from 'react-native'
import Summary from '@/components/create/Summary'

const create = () => {

    const PAGES = 7;

    const [currentIndex, setCurrentIndex] = React.useState(0)

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
    const [skills, setSkills] = React.useState<Skill[]>([]);
    const [portrait, setPortrait] = React.useState<ImageSourcePropType>(require('@/assets/images/species/aqualish_0.png'));

    function assignCareer(c: Career) {
        setCareer(c);
        setSpecialization(null);
        setCheckedCareerSkills({});
        setCheckedSpecializationSkills({});
    }

    function assignSpecialization(s: Specialization) {
        setSpecialization(s);
        setCheckedSpecializationSkills({});
        setSkills([
            {name: 'Brawl', level: 0, characteristic: BRAWN, career: (career && career.skills.includes('Brawl')) || (s.skills.includes('Brawl'))},
            {name: 'Gunnery', level: 0, characteristic: AGILITY, career: (career && career.skills.includes('Gunnery')) || (s.skills.includes('Gunnery'))},
            {name: 'Lightsaber', level: 0, characteristic: BRAWN, career: (career && career.skills.includes('Lightsaber')) || (s.skills.includes('Lightsaber'))},
            {name: 'Melee', level: 0, characteristic: BRAWN, career: (career && career.skills.includes('Melee')) || (s.skills.includes('Melee'))},
            {name: 'Ranged (Heavy)', level: 0, characteristic: AGILITY, career: (career && career.skills.includes('Ranged (Heavy)')) || (s.skills.includes('Ranged (Heavy)'))},
            {name: 'Ranged (Light)', level: 0, characteristic: AGILITY, career: (career && career.skills.includes('Ranged (Light)')) || (s.skills.includes('Ranged (Light)'))},

            {name: 'Core Worlds', level: 0, characteristic: INTELLECT, career: (career && career.skills.includes('Core Worlds')) || (s.skills.includes('Core Worlds'))},
            {name: 'Education', level: 0, characteristic: INTELLECT, career: (career && career.skills.includes('Education')) || (s.skills.includes('Education'))},
            {name: 'Lore', level: 0, characteristic: INTELLECT, career: (career && career.skills.includes('Lore')) || (s.skills.includes('Lore'))},
            {name: 'Outer Rim', level: 0, characteristic: INTELLECT, career: (career && career.skills.includes('Outer Rim')) || (s.skills.includes('Outer Rim'))},
            {name: 'Underworld', level: 0, characteristic: INTELLECT, career: (career && career.skills.includes('Underworld')) || (s.skills.includes('Underworld'))},
            {name: 'Warfare', level: 0, characteristic: INTELLECT, career: (career && career.skills.includes('Warfare')) || (s.skills.includes('Warfare'))},
            {name: 'Xenology', level: 0, characteristic: INTELLECT, career: (career && career.skills.includes('Xenology')) || (s.skills.includes('Xenology'))},

            {name: 'Astrogation', level: 0, characteristic: INTELLECT, career: (career && career.skills.includes('Astrogation')) || (s.skills.includes('Astrogation'))},
            {name: 'Athletics', level: 0, characteristic: BRAWN, career: (career && career.skills.includes('Athletics')) || (s.skills.includes('Athletics'))},
            {name: 'Charm', level: 0, characteristic: PRESENCE, career: (career && career.skills.includes('Charm')) || (s.skills.includes('Charm'))},
            {name: 'Coercion', level: 0, characteristic: WILLPOWER, career: (career && career.skills.includes('Coercion')) || (s.skills.includes('Coercion'))},
            {name: 'Computers', level: 0, characteristic: INTELLECT, career: (career && career.skills.includes('Computers')) || (s.skills.includes('Computers'))},
            {name: 'Cool', level: 0, characteristic: PRESENCE, career: (career && career.skills.includes('Cool')) || (s.skills.includes('Cool'))},
            {name: 'Coordination', level: 0, characteristic: AGILITY, career: (career && career.skills.includes('Coordination')) || (s.skills.includes('Coordination'))},
            {name: 'Deception', level: 0, characteristic: CUNNING, career: (career && career.skills.includes('Deception')) || (s.skills.includes('Deception'))},
            {name: 'Discipline', level: 0, characteristic: WILLPOWER, career: (career && career.skills.includes('Discipline')) || (s.skills.includes('Discipline'))},
            {name: 'Leadership', level: 0, characteristic: PRESENCE, career: (career && career.skills.includes('Leadership')) || (s.skills.includes('Leadership'))},
            {name: 'Mechanics', level: 0, characteristic: INTELLECT, career: (career && career.skills.includes('Mechanics')) || (s.skills.includes('Mechanics'))},
            {name: 'Medicine', level: 0, characteristic: INTELLECT, career: (career && career.skills.includes('Medicine')) || (s.skills.includes('Medicine'))},
            {name: 'Negotiation', level: 0, characteristic: PRESENCE, career: (career && career.skills.includes('Negotiation')) || (s.skills.includes('Negotiation'))},
            {name: 'Perception', level: 0, characteristic: CUNNING, career: (career && career.skills.includes('Perception')) || (s.skills.includes('Perception'))},
            {name: 'Piloting (Planetary)', level: 0, characteristic: AGILITY, career: (career && career.skills.includes('Piloting (Planetary)')) || (s.skills.includes('Piloting (Planetary)'))},
            {name: 'Piloting (Space)', level: 0, characteristic: AGILITY, career: (career && career.skills.includes('Piloting (Space)')) || (s.skills.includes('Piloting (Space)'))},
            {name: 'Resilience', level: 0, characteristic: BRAWN, career: (career && career.skills.includes('Resilience')) || (s.skills.includes('Resilience'))},
            {name: 'Skulduggery', level: 0, characteristic: CUNNING, career: (career && career.skills.includes('Skulduggery')) || (s.skills.includes('Skulduggery'))},
            {name: 'Stealth', level: 0, characteristic: AGILITY, career: (career && career.skills.includes('Stealth')) || (s.skills.includes('Stealth'))},
            {name: 'Streetwise', level: 0, characteristic: CUNNING, career: (career && career.skills.includes('Streetwise')) || (s.skills.includes('Streetwise'))},
            {name: 'Survival', level: 0, characteristic: CUNNING, career: (career && career.skills.includes('Survival')) || (s.skills.includes('Survival'))},
            {name: 'Vigilance', level: 0, characteristic: WILLPOWER, career: (career && career.skills.includes('Vigilance')) || (s.skills.includes('Vigilance'))}
        ])
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
        //todo: set skills and characteristics
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