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
    xp: number;
    setXp: React.Dispatch<React.SetStateAction<number>>;
}

const SkillItem = ({ index, skill, career, specialization, xp, checkedCareerSkills, checkedSpecializationSkills, setXp }: SkillItemProps) => {

    const [level, setLevel] = React.useState(skill.level);

    function increaseLevel() {
        setLevel(level + 1);
        skill.level += 1;
        if (career && career.skills.includes(skill.name)) {
            setXp(xp - (skill.level * 5));
            return
        }
        setXp((xp - 5) - (skill.level * 5));
    }

    function decreaseLevel() {
        if (career && career.skills.includes(skill.name)) {
            setXp(xp + (skill.level * 5));
        } else {
            setXp((xp + 5) + (skill.level * 5));
        }
        setLevel(level - 1);
        skill.level -= 1;
    }

    return (
        <View className={`${index % 2 === 1 ? 'bg-slate-800 ' : 'bg-slate-700'} px-[2vw] py-[2vh] flex-row`}>
            <View className='flex flex-row w-[60%] justify-start items-center'>
                <Text className='text-white text-sm font-[Elektra] capitalize w-[68%]'>{skill.name} ({skill.characteristic.name.substring(0, 3)})</Text>
                <Text className='text-white text-xl font-[Elektra] pl-[1vw] pr-[2vw] pt-1'>{level}</Text>
                {(career && career.skills.includes(skill.name) || specialization && specialization.skills.includes(skill.name)) && <Ionicons name='checkmark-circle-outline' color="white" size={18} />}
            </View>
            <View className='flex flex-row w-[40%] justify-between items-center'>
                <Button title='-' className='mr-[1vw] border-slate-400 bg-slate-500' onPress={decreaseLevel}
                disabledClassName='border-2 border-slate-600'
                    disabled={(checkedCareerSkills[skill.name] || checkedSpecializationSkills[skill.name]) && skill.level <= 1 ? true : skill.level <= 0 ? true : false}
                />
                <Button title='+' className='ml-[1vw] border-slate-400 bg-slate-500' onPress={increaseLevel}
                disabledClassName='border-2 border-slate-600'
                    disabled={skill.level >= 2} />
            </View>
        </View>
    )
}

export default SkillItem