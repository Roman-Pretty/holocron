import { View, Text, FlatList } from 'react-native';
import React from 'react';
import SkillItem from './SkillItem';
import { Ionicons } from '@expo/vector-icons';

interface SkillsProps {
    skills: Skill[];
    setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
    career: Career | null;
    specialization: Specialization | null;
    checkedCareerSkills: { [key: string]: boolean };
    checkedSpecializationSkills: { [key: string]: boolean };
    xp: number;
    setXp: React.Dispatch<React.SetStateAction<number>>;
}

const Skills = ({ skills, setSkills, career, specialization, checkedCareerSkills, checkedSpecializationSkills, xp, setXp }: SkillsProps) => {
    // Function to add title elements to the skills array
    const skillsWithTitles = (skills) => {
        const updatedSkills = [...skills];
        // Inserting title elements at desired positions
        updatedSkills.splice(0, 0, { type: 'title', text: 'Combat Skills' });
        updatedSkills.splice(7, 0, { type: 'title', text: 'Knowledge Skills' });
        updatedSkills.splice(15, 0, { type: 'title', text: 'General Skills' });
        return updatedSkills;
    };

    return (
        <>
            <Text className='text-white text-center font-[Elektra] text-xl pb-[4vh]'>
                Career and Specialization skills are marked with a <View className="pt-2" ><Ionicons name='checkmark-circle-outline' color="white" size={20} /></View>
            </Text>
            <FlatList
                data={skillsWithTitles(skills)}
                keyExtractor={(item, index) => item.type === 'title' ? item.text : index.toString()}
                renderItem={({ item, index }) => {
                    if (item.type === 'title') {
                        return (
                            <Text className={`text-slate-400 text-xl py-[2vh] font-[Elektra] ${index != 0 && 'pt-[4vh]'}`}>
                                {item.text}
                            </Text>
                        );
                    }
                    return (
                        <SkillItem
                            skill={item}
                            career={career}
                            specialization={specialization}
                            checkedCareerSkills={checkedCareerSkills}
                            checkedSpecializationSkills={checkedSpecializationSkills}
                            xp={xp}
                            setXp={setXp}
                            index={index}
                        />
                    );
                }}
            />
        </>
    );
};

export default Skills;
