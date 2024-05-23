import Button from '@/components/form/Button';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface SpeciesItemProps {
    specialization: Specialization;
    selectedSpecialization: Specialization | null;
    setSelectedSpecialization: (specialization: Specialization) => void;
}

const SpecializationItem = ({ specialization, selectedSpecialization, setSelectedSpecialization }: SpeciesItemProps) => {
    return (
        <View className='py-[4vh] px-[2vw] border-b-2 border-slate-700'>
            <View className='flex flex-row items-center justify-start'>
                <View>
                    <Text className='text-lg text-white font-[Elektra]'>{specialization.name}</Text>
                    <Text className='text-sm text-white'>{specialization.desc}</Text>
                </View>
            </View>
            <View className='mt-[2vh] flex-row items-start'>
                <Ionicons size={16} name='checkmark-circle-outline' color="white" />
                <Text className='text-white text-sm pl-2'><Text className='font-bold'>Skills:</Text> {specialization.skills.join(', ')}</Text>
            </View>
            {selectedSpecialization && selectedSpecialization.name === specialization.name ?
                <Button title={`Selected ${specialization.name}`} disabled className='mt-[3vh] border-slate-600 border-2' /> :
                <Button title={`Select ${specialization.name}`} onPress={() => setSelectedSpecialization(specialization)} className='mt-[3vh]' />}
        </View>
    )
}

export default SpecializationItem