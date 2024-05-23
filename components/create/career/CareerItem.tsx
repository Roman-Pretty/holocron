import Button from '@/components/form/Button';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface SpeciesItemProps {
    career: Career;
    selectedCareer: Career | null;
    setSelectedCareer: (career: Career) => void;
}

const CareerItem = ({ career, selectedCareer, setSelectedCareer }: SpeciesItemProps) => {
    return (
        <View className='py-[4vh] px-[2vw] border-b-2 border-slate-700'>
            <View className='flex flex-row items-center justify-start'>
                <View className={`w-[28vw] h-[28vw] overflow-hidden rounded-full bg-slate-900 border-2 ${selectedCareer === career ? 'border-white' : 'border-slate-800'}`}>
                    <Image
                        source={career.image}
                        resizeMode='contain'
                        style={{ width: '100%', height: '100%' }}
                    />
                </View>
                <View>
                    <Text className='text-lg text-white font-[Elektra] pl-[4vw]'>{career.name}</Text>
                    <Text className='text-sm text-white pl-[4vw] max-w-[56vw]'>{career.desc}</Text>
                </View>
            </View>
            <View className='mt-[2vh]'>
                <Text className='text-white text-sm pl-2'>{career.longDesc}</Text>
            </View>
            <View className='mt-[2vh] flex-row items-start'>
                <Ionicons size={16} name='checkmark-circle-outline' color="white" />
                <Text className='text-white text-sm pl-2'><Text className='font-bold'>Skills:</Text> {career.skills.join(', ')}</Text>
            </View>
            <View className='mt-[2vh] flex-row items-start'>
                <Ionicons size={16} name='build-outline' color="white" />
                <Text className='text-white text-sm pl-2'><Text className='font-bold'>Specializations:</Text> {career.specializations.map(specialization => specialization.name).join(', ')}</Text>
            </View>
            {selectedCareer && selectedCareer.name === career.name ?   
            <Button title={`Selected ${career.name}`} disabled className='mt-[3vh] border-slate-600 border-2' /> :
            <Button title={`Select ${career.name}`} onPress={() => setSelectedCareer(career)} className='mt-[3vh]' />}
        </View>
    )
}

export default CareerItem