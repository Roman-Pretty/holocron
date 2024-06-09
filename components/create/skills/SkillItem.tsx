import { View, Text } from 'react-native'
import React from 'react'
import Button from '@/components/form/Button';
import { Ionicons } from '@expo/vector-icons';

interface SkillItemProps {
    skill: Skill;
    career: Career | null;
    specialization: Specialization | null;
    checkedCareerSkills: { [key: string]: boolean };
    checkedSpecializationSkills: { [key: string]: boolean };
    index: number;
    skills: Skill[];
    setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
    species: Species | null;
    selectedBonusSkill: string | null;
}

const SkillItem = ({ selectedBonusSkill, species, index, skill, career, specialization, checkedCareerSkills, checkedSpecializationSkills, skills, setSkills }: SkillItemProps) => {

    const [level, setLevel] = React.useState(skill.level);

    function increaseLevel() {
        setLevel(level + 1);
        skill.level += 1;
        setSkills(prev => [...prev]);
    }

    function decreaseLevel() {
        setLevel(level - 1);
        skill.level -= 1;
        setSkills(prev => [...prev]);
    }

    return (
        <View className={`${index % 2 === 1 ? 'bg-box ' : 'bg-slate-800'} px-[2vw] py-2 flex-row`}>
            <View className='flex flex-row w-[60%] justify-start items-center'>
                <Text className='text-white text-sm font-[Elektra] capitalize w-[68%]'>{skill.name} ({skill.characteristic.name.substring(0, 3)})</Text>
                <Text className='text-white text-xl font-[Elektra] pl-[1vw] pr-[2vw] pt-1'>{level}</Text>
                {(skill.career) && <Ionicons name='checkmark' color="white" size={18} />}
            </View>
            <View className='flex flex-row w-[40%] justify-between items-center'>
                <Button title='-' cName='mr-[1vw] border-slate-400 bg-slate-500' onPress={decreaseLevel}
                disabledClassName='border-2 border-slate-600 bg-slate-600'
                    disabled={(checkedCareerSkills[skill.name] || checkedSpecializationSkills[skill.name] || (species && species.bonusSkills && species.bonusSkills.includes(skill.name)) || (selectedBonusSkill === skill.name)) && skill.level <= (checkedCareerSkills[skill.name] ? 1 : 0) + (checkedSpecializationSkills[skill.name] ? 1 : 0) + (species && species.bonusSkills && species.bonusSkills.includes(skill.name) ? 1 : 0) + ((selectedBonusSkill === skill.name) ? 1 : 0) ? true : skill.level <= 0 ? true : false}
                />
                <Button title='+' cName='ml-[1vw] border-slate-400 bg-slate-500' onPress={increaseLevel}
                disabledClassName='border-2 border-slate-600 bg-slate-600'
                    disabled={skill.level >= 2} />
            </View>
        </View>
    )
}

export default SkillItem