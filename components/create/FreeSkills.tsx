import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Career, Skill, Species, Specialization } from '@/constants/Types';
import { Colors } from '@/constants/Colors';
import TriangleCorner from '@/components/shapes/TriangleCorner';

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
            <Text className='text-box text-center font-[Elektra] text-xl pb-[4vh]'>
                Selected skills may gain one free level at the start of the game.
            </Text>

            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>

                <View className='w-full mb-[2vh]'>
                    <View className='bg-box p-4'>
                        <View className='flex flex-row justify-between items-center pb-[1vh] mb-[1vh] border-b-2 border-statblockbackground'>
                            <Text className='text-white font-[Elektra] text-xl'>
                                Career Skills
                            </Text>
                            <Text className={`${careerSkillCount >= maxCareerSkills ? 'text-statblockbackground' : 'text-white'} font-[Elektra] text-xl`}>
                                {careerSkillCount}/{maxCareerSkills}
                            </Text>
                        </View>

                        {selectedCareer && selectedCareer.skills.map((skill, index) => {

                            if (skills.find(s => s.name === skill)?.level === 2 && !checkedCareerSkills[skill]) {
                                return (
                                    <View key={index} className='flex flex-row items-center'>
                                        <Ionicons name='ban' color={Colors.global.statblockbackground} size={22} />
                                        <Text className='text-white text-lg pl-2 font-[Elektra]'>{skill}</Text>
                                        <Text className='text-white text-lg pl-2 font-[Elektra]'>(Already Max Level)</Text>
                                    </View>
                                )
                            }
                            return (
                                <Pressable
                                    onPress={() => handleCareerCheckboxChange(skill)}
                                    key={index} className='flex flex-row items-center py-[0.4vh]'>
                                    <Checkbox
                                        color={Colors.global.statblockbackground}
                                        onValueChange={() => handleCareerCheckboxChange(skill)}
                                        value={checkedCareerSkills[skill] || false}
                                    />
                                    <Text className='text-white text-lg pl-2 font-[Elektra]'>{skill}</Text>
                                </Pressable>)
                        })}
                    </View>
                    <View className='flex-row justify-end'>
                        <View className='bg-box w-[100%]'>
                        </View>
                        <TriangleCorner style={{
                            transform: [{ rotate: "0deg" }],
                            borderTopWidth: '28px', borderRightWidth: '28px', borderTopColor: Colors.global.box,
                        }} />
                    </View>
                </View>

                <View className='w-full mb-[2vh]'>
                    <View className='bg-box p-4'>
                        <View className='flex flex-row justify-between items-center pb-[1vh] mb-[1vh] border-b-2 border-statblockbackground'>
                            <Text className='text-slate-200 font-[Elektra] text-xl'>
                                Specialization Skills
                            </Text>
                            <Text className={`${specializationSkillCount >= maxSpecializationSkills ? 'text-statblockbackground' : 'text-white'} font-[Elektra] text-xl`}>
                                {specializationSkillCount}/{maxSpecializationSkills}
                            </Text>
                        </View>

                        {selectedSpecialization && selectedSpecialization.skills.map((skill, index) => {

                            if (skills.find(s => s.name === skill)?.level === 2 && !checkedSpecializationSkills[skill]) {
                                return (
                                    <View key={index} className='flex flex-row items-center'>
                                        <Ionicons name='ban' color={Colors.global.statblockbackground} size={22} />
                                        <Text className='text-white text-lg pl-2 font-[Elektra]'>{skill}</Text>
                                        <Text className='text-white text-lg pl-2 font-[Elektra]'>(Already Max Level)</Text>
                                    </View>
                                )
                            }
                            return (
                                <Pressable
                                    onPress={() => handleSpecializationCheckboxChange(skill)}
                                    key={index} className='flex flex-row items-center py-[0.4vh]'>
                                    <Checkbox
                                        color={Colors.global.statblockbackground}
                                        onValueChange={() => handleSpecializationCheckboxChange(skill)}
                                        value={checkedSpecializationSkills[skill] || false}
                                    />
                                    <Text className='text-white text-lg pl-2 font-[Elektra]'>{skill}</Text>
                                </Pressable>
                            )
                        })}
                    </View>
                    <View className='flex-row justify-end'>
                        <View className='bg-box w-[100%]'>
                        </View>
                        <TriangleCorner style={{
                            transform: [{ rotate: "0deg" }],
                            borderTopWidth: '28px', borderRightWidth: '28px', borderTopColor: Colors.global.box,
                        }} />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </>
    );
};

export default FreeSkills;
