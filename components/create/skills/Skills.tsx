import { View, Text, FlatList } from 'react-native';
import React from 'react';
import SkillItem from './SkillItem';
import { Ionicons } from '@expo/vector-icons';
import { Career, Skill, Specialization, Species } from '@/constants/Types';
import { Colors } from '@/constants/Colors';
import TriangleCorner from '@/components/shapes/TriangleCorner';

interface SkillsProps {
    skills: Skill[];
    setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
    career: Career | null;
    specialization: Specialization | null;
    checkedCareerSkills: { [key: string]: boolean };
    checkedSpecializationSkills: { [key: string]: boolean };
    species: Species | null;
    selectedBonusSkill: string | null;
}

const Skills = ({ selectedBonusSkill, species, skills, setSkills, career, specialization, checkedCareerSkills, checkedSpecializationSkills }: SkillsProps) => {
    // Function to add title elements to the skills array
    const skillsWithTitles = (skills: any) => {
        const updatedSkills = [...skills];
        // Inserting title elements at desired positions
        updatedSkills.splice(0, 0, { type: 'title', text: 'Combat Skills' });
        updatedSkills.splice(6, 0, { type: 'footer' });
        updatedSkills.splice(7, 0, { type: 'title', text: 'Knowledge Skills' });
        updatedSkills.splice(16, 0, { type: 'footer' });
        updatedSkills.splice(17, 0, { type: 'title', text: 'General Skills' });
        updatedSkills.splice(40, 0, { type: 'footer' });
        return updatedSkills;
    };

    return (
        <>
            <Text className='text-box text-center font-[Elektra] text-xl pb-[4vh]'>
                Career and Specialization skills are marked with a <View className="pt-2" ><Ionicons name='checkmark' color={Colors.global.box} size={20} /></View>
            </Text>

            <FlatList
                data={skillsWithTitles(skills)}
                keyExtractor={(item, index) => item.type === 'title' ? item.text : index.toString()}
                renderItem={({ item, index }) => {
                    if (item.type === 'title') {
                        return (
                            <Text className={`bg-box text-white text-xl py-[2vh] pl-[2vh] font-[Elektra] ${index != 0 && 'mt-[4vh]'}`}>
                                {item.text}
                            </Text>
                        );
                    }
                    if (item.type === 'footer') {
                        return (
                            <View className='flex-row justify-end'>
                                <View className='bg-box w-[100%]'>
                                </View>
                                <TriangleCorner style={{
                                    transform: [{ rotate: "0deg" }],
                                    borderTopWidth: '48px', borderRightWidth: '48px', borderTopColor: Colors.global.box,
                                }} />
                            </View>
                        );
                    }
                    return (
                        <SkillItem
                            skill={item}
                            skills={skills}
                            setSkills={setSkills}
                            career={career}
                            specialization={specialization}
                            checkedCareerSkills={checkedCareerSkills}
                            checkedSpecializationSkills={checkedSpecializationSkills}
                            index={index}
                            species={species}
                            selectedBonusSkill={selectedBonusSkill}
                        />
                    );
                }}
            />
        </>

    );
};

export default Skills;
