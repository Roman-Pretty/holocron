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
        <View className={`${index % 2 === 1 ? 'bg-slate-800 ' : 'bg-slate-700'} px-[1vw] py-[2vh]`}>
            <View className='flex flex-row w-full justify-between'>
                <View className='w-[18vw] h-[18vw] bg-slate-900 border-2 border-slate-800 rounded-full flex items-center justify-center'>
                    <Text className='text-white text-4xl font-[Elektra]'>{level}</Text>
                </View>
                <View>
                    <View className='border-b-2 mb-[1vh] border-slate-500 flex-row justify-between'>
                        <Text className='text-white text-xl font-[Elektra] capitalize'>{skill.name}</Text>
                        {(career && career.skills.includes(skill.name) || specialization && specialization.skills.includes(skill.name)) && <Ionicons name='checkmark-circle-outline' color="white" size={20} />}
                    </View>
                    <View className='flex-row w-[64vw]'>
                        <Button title='Decrease' className='mr-[1vw]' onPress={decreaseLevel}
                            disabled={(checkedCareerSkills[skill.name] || checkedSpecializationSkills[skill.name]) && skill.level <= 1 ? true : skill.level <= 0 ? true : false}
                        />
                        <Button title='Increase' className='ml-[1vw]' onPress={increaseLevel}
                            disabled={skill.level >= 2} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SkillItem