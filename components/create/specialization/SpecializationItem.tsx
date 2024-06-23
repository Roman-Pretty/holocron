import Button from '@/components/form/Button';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import TriangleCorner from '@/components/shapes/TriangleCorner';
import { Specialization } from '@/types/Types';

interface SpeciesItemProps {
    specialization: Specialization;
    selectedSpecialization: Specialization | null;
    setSelectedSpecialization: (specialization: Specialization) => void;
}

const SpecializationItem = ({ specialization, selectedSpecialization, setSelectedSpecialization }: SpeciesItemProps) => {
    return (
        <View className='w-full mb-2'>
            <View className='flex-row justify-end'>
                <View className='bg-heading2  w-[100%]'>
                    <Text className='pl-[52px] pt-[8px] text-lg text-white font-[Elektra]'>{specialization.name}</Text>
                </View>
                <TriangleCorner style={{
                    transform: [{ rotate: "-90deg" }],
                    borderTopWidth: '40px', borderRightWidth: '40px', borderTopColor: Colors.global.heading2,
                }} />
            </View>
            <View className='bg-heading2 p-3'>
                <View className='flex flex-row items-center justify-start max-w-[80vw]'>
                    <View>
                        <Text className='text-sm text-white'>{specialization.desc}</Text>
                    </View>
                </View>
                <View className='mt-[2vh] flex-row items-start max-w-[80vw]'>
                    <Ionicons size={16} name='checkmark-circle-outline' color="white" />
                    <Text className='text-white text-sm pl-2 max-w-[84vw]'><Text className='font-bold '>Skills:</Text> {specialization.skills.join(', ')}</Text>
                </View>
                {selectedSpecialization && selectedSpecialization.name === specialization.name ?
                    <Button title={`Selected ${specialization.name}`} disabled cName='mt-[3vh] bg-white' /> :
                    <Button title={`Select ${specialization.name}`} onPress={() => setSelectedSpecialization(specialization)} cName='mt-[3vh] bg-statblockbackground' />}
            </View>
        </View>
    )
}

export default SpecializationItem