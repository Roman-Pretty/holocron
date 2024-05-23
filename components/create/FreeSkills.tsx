import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

interface FreeSkillsProps {
    species: Species | null;
    selectedCareer: Career | null;
    selectedSpecialization: Specialization | null;
    checkedCareerSkills: { [key: string]: boolean };
    setCheckedCareerSkills: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
    checkedSpecializationSkills: { [key: string]: boolean };
    setCheckedSpecializationSkills: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
    skills: Skill[];
}

const FreeSkills = ({
    species,
    selectedCareer,
    selectedSpecialization,
    checkedCareerSkills,
    setCheckedCareerSkills,
    checkedSpecializationSkills,
    setCheckedSpecializationSkills,
    skills,
}: FreeSkillsProps) => {

    const maxCareerSkills = species && species.species === 'Droid' ? 6 : selectedCareer && selectedCareer.forceSensitive ? 3 : 4;
    const maxSpecializationSkills = species && species.species === 'Droid' ? 3 : 2;

    const careerSkillCount = Object.values(checkedCareerSkills).filter(Boolean).length;
    const specializationSkillCount = Object.values(checkedSpecializationSkills).filter(Boolean).length;

    const handleCareerCheckboxChange = (s: string) => {
        setCheckedCareerSkills(prevState => {
            if (prevState[s]) {
                const skill = skills.find(skill => skill.name === s);
                if (skill) {
                    skill.level -= 1;
                
                }
                return {
                    ...prevState,
                    [s]: false
                };
            } else if (careerSkillCount < maxCareerSkills) {
                const skill = skills.find(skill => skill.name === s);
                if (skill) {
                    skill.level += 1;
                   
                }
                return {
                    ...prevState,
                    [s]: true
                };
            }
            return prevState;
        });
    };

    const handleSpecializationCheckboxChange = (s: string) => {
        setCheckedSpecializationSkills(prevState => {
            if (prevState[s]) {
                const skill = skills.find(skill => skill.name === s);
                if (skill) {
                    skill.level -= 1;
                  
                }
                return {
                    ...prevState,
                    [s]: false
                };
            } else if (specializationSkillCount < maxSpecializationSkills) {
                const skill = skills.find(skill => skill.name === s);
                if (skill) {
                    skill.level += 1;
                }
                return {
                    ...prevState,
                    [s]: true
                };
            }
            return prevState;
        });
    };

    return (
        <>
            <Text className='text-white text-center font-[Elektra] text-xl pb-[4vh]'>
                Selected skills may gain one free level at the start of the game.
            </Text>

            <KeyboardAwareScrollView>
                <View className='flex flex-row justify-between items-center'>
                    <Text className='text-slate-200 font-[Elektra] text-xl'>
                        Career Skills
                    </Text>
                    <Text className={`${careerSkillCount >= maxCareerSkills ? 'text-slate-500' : 'text-slate-200'} font-[Elektra] text-xl`}>
                        {careerSkillCount}/{maxCareerSkills}
                    </Text>
                </View>

                {selectedCareer && selectedCareer.skills.map((skill, index) => {

                    if (skills.find(s => s.name === skill)?.level === 2 && !checkedCareerSkills[skill]) {
                        return (
                            <View key={index} className='flex flex-row items-center'>
                                <Ionicons name='ban' color='#94a3b8' size={22} />
                                <Text className='text-slate-400 text-lg pl-2 font-[Elektra]'>{skill}</Text>
                                <Text className='text-slate-400 text-lg pl-2 font-[Elektra]'>(Already Max Level)</Text>
                            </View>
                        )
                    }
                    return (
                        <Pressable
                            onPress={() => handleCareerCheckboxChange(skill)}
                            key={index} className='flex flex-row items-center py-[0.4vh]'>
                            <Checkbox
                                color={'#94a3b8'}
                                onValueChange={() => handleCareerCheckboxChange(skill)}
                                value={checkedCareerSkills[skill] || false}
                            />
                            <Text className='text-slate-400 text-lg pl-2 font-[Elektra]'>{skill}</Text>
                        </Pressable>)
                })}

                <View className='flex flex-row justify-between items-center pt-[2vh]'>
                    <Text className='text-slate-200 font-[Elektra] text-xl'>
                        Specialization Skills
                    </Text>
                    <Text className={`${specializationSkillCount >= maxSpecializationSkills ? 'text-slate-500' : 'text-slate-200'} font-[Elektra] text-xl`}>
                        {specializationSkillCount}/{maxSpecializationSkills}
                    </Text>
                </View>

                {selectedSpecialization && selectedSpecialization.skills.map((skill, index) => (
                    <Pressable
                        onPress={() => handleSpecializationCheckboxChange(skill)}
                        key={index} className='flex flex-row items-center py-[0.4vh]'>
                        <Checkbox
                            color='#94a3b8'
                            onValueChange={() => handleSpecializationCheckboxChange(skill)}
                            value={checkedSpecializationSkills[skill] || false}
                        />
                        <Text className='text-slate-400 text-lg pl-2 font-[Elektra]'>{skill}</Text>
                    </Pressable>
                ))}
            </KeyboardAwareScrollView>
        </>
    );
};

export default FreeSkills;
