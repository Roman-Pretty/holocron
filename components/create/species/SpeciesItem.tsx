import React from 'react';
import { Image, Text, View } from 'react-native';
import SpeciesCharacteristic from './SpeciesCharacteristic';
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/form/Button';

interface SpeciesItemProps {
    species: Species;
    selectedSpecies: Species | null;
    setSelectedSpecies: (species: Species) => void;
}

const SpeciesItem = ({ species, selectedSpecies, setSelectedSpecies }: SpeciesItemProps) => {
    return (
        <View className='py-[4vh] px-[2vw] border-b-2 border-slate-700'>
            <View className='flex flex-row items-center justify-start'>
                <View className={`w-[28vw] h-[28vw] overflow-hidden rounded-full bg-slate-900 border-2 ${selectedSpecies === species ? 'border-white' : 'border-slate-800'}`}>
                    <Image
                        source={species.image}
                        resizeMode='cover'
                        style={{ width: '100%', height: '200%', paddingTop: 200 }}
                    />
                </View>
                <View>
                    <Text className='text-lg text-white font-[Elektra] pl-[4vw]'>{species.species}</Text>
                    <Text className='text-sm text-white pl-[4vw] max-w-[56vw]'>{species.desc}</Text>
                </View>
            </View>
            <View className='w-full flex flex-row justify-between items-center border-slate-800 border-2 rounded-2xl pb-[1.5vh] mt-[1.5vh]'>
                <SpeciesCharacteristic title='Brawn' level={species.characteristics[0]} />
                <SpeciesCharacteristic title='Agility' level={species.characteristics[1]} />
                <SpeciesCharacteristic title='Intellect' level={species.characteristics[2]} />
                <SpeciesCharacteristic title='Cunning' level={species.characteristics[3]} />
                <SpeciesCharacteristic title='Willpower' level={species.characteristics[4]} />
                <SpeciesCharacteristic title='Presence' level={species.characteristics[5]} />
            </View>
            <View className='mt-[2vh] flex-row items-start'>
                <Ionicons size={16} name='information-circle-outline' color="white" />
                <Text className='text-white text-sm pl-2'>{species.speciesBonus}</Text>
            </View>
            <View className='mt-[2vh] flex-row items-start'>
                <Ionicons size={16} name='shield-half-outline' color="white" />
                <View>

                {species.specialAbilities.map((ability, index) => (
                    <Text key={index} className='text-white text-sm pl-2'>
                        <Text className='font-bold'>{ability.name}</Text>: {ability.desc}
                    </Text>
                ))}
                </View>
            </View>
            {selectedSpecies && selectedSpecies.species === species.species ?   
            <Button title={`Selected ${species.species}`} disabled className='mt-[3vh] border-slate-600 border-2' /> :
            <Button title={`Select ${species.species}`} onPress={() => setSelectedSpecies(species)} className='mt-[3vh]' />}
        </View>
    )
}

export default SpeciesItem