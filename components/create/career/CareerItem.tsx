import Button from '@/components/form/Button';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import { Colors } from '@/constants/Colors';
import TriangleCorner from '@/components/shapes/TriangleCorner';
import { Career } from '@/types/Types';

interface SpeciesItemProps {
    career: Career;
    selectedCareer: Career | null;
    setSelectedCareer: (career: Career) => void;
}

const CareerItem = ({ career, selectedCareer, setSelectedCareer }: SpeciesItemProps) => {
    const [loading, setLoading] = useState(true);

    return (
        <View className='w-full my-[2vh]'>
            <View className='flex-row items-start'>
                <View className='bg-heading3 h-[24px] w-[70%]' />
                <TriangleCorner style={{
                    transform: [{ rotate: "-90deg" }],
                    borderTopWidth: '24px', borderRightWidth: '24px', borderTopColor: Colors.global.heading3,
                }} />
            </View>
            <View className='bg-heading3 p-3'>
                <View className='flex flex-row items-center justify-start'>
                    <View className={`w-[28vw] h-[28vw] overflow-hidden rounded-full bg-white border-2 ${selectedCareer === career ? 'border-statblockbackground' : 'border-white'}`}>
                        {loading && (
                            <View className='w-full h-full items-center justify-center'>
                            <ActivityIndicator size="small" color={Colors.global.heading3} />
                            </View>
                        )}
                        <Image
                            source={career.image}
                            resizeMode='contain'
                            style={{ width: '100%', height: '100%' }}
                            onLoad={() => setLoading(false)}
                        />
                    </View>
                    <View>
                        <Text className='text-lg text-white font-[Elektra] pl-[4vw]'>{career.name}</Text>
                        <Text className='text-sm text-white pl-[4vw] max-w-[56vw]'>{career.desc}</Text>
                    </View>
                </View>
                <View className='mt-[2vh] pb-[2vh] border-b-2 border-statblockbackground'>
                    <Text className='text-white text-sm pl-2'>{career.longDesc}</Text>
                </View>
                <View className='mt-[2vh] flex-row items-start max-w-[80vw]'>
                    <Ionicons size={16} name='checkmark-circle-outline' color="white" />
                    <Text className='text-white text-sm pl-2'><Text className='font-bold'>Skills:</Text> {career.skills.join(', ')}</Text>
                </View>
                <View className='mt-[2vh] flex-row items-start max-w-[80vw]'>
                    <Ionicons size={16} name='build-outline' color="white" />
                    <Text className='text-white text-sm pl-2'><Text className='font-bold'>Specializations:</Text> {career.specializations.map(specialization => specialization.name).join(', ')}</Text>
                </View>
                {selectedCareer && selectedCareer.name === career.name ?
                    <Button title={`Selected ${career.name}`} disabled cName='mt-[3vh] border-white bg-white border-2' /> :
                    <Button title={`Select ${career.name}`} onPress={() => setSelectedCareer(career)} cName='mt-[3vh] bg-statblockbackground' />}
            </View>
        </View>
    )
}

export default CareerItem;
