import Button from '@/components/form/Button';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import SpeciesCharacteristic from './SpeciesCharacteristic';

interface SpeciesItemProps {
    species: Species;
    selectedSpecies: Species | null;
    setSelectedSpecies: (species: Species) => void;
}

const SpeciesItem = ({ species, selectedSpecies, setSelectedSpecies }: SpeciesItemProps) => {

    const [modalVisible, setModalVisible] = React.useState(false);

    function handleSelect() {
        setSelectedSpecies(species)
        if (species.hasOptions) {
            setModalVisible(true);
        }
    }

    return (
        <>
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
                <View className='mt-[2vh] flex-row items-start justify-between'>
                    <View className='flex-row items-center'>
                        <Ionicons size={16} name='heart-outline' color="white" />
                        <Text className='text-white text-sm pl-1'><Text className=' font-bold'>WT:</Text> {species.woundThreshold} + Brawn</Text>
                    </View>
                    <View className='flex-row items-center'>
                        <Ionicons size={16} name='flash-outline' color="white" />
                        <Text className='text-white text-sm pl-1'><Text className=' font-bold'>ST:</Text> {species.strainThreshold} + Willpower</Text>
                    </View>
                    <View className='flex-row items-center'>
                        <Ionicons size={16} name='star-outline' color="white" />
                        <Text className='text-white text-sm pl-1'><Text className=' font-bold'>XP:</Text> {species.startingXP}</Text>
                    </View>
                </View>
                <View className='mt-[2vh] flex-row items-start'>
                    <Ionicons size={16} name='information-circle-outline' color="white" />
                    <Text className='text-white text-sm pl-2'>{species.speciesBonus}</Text>
                </View>
                <View className='mt-[2vh] flex-row items-start'>
                    <Ionicons size={16} name='footsteps-outline' color="white" />
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
                    <Button title={`Select ${species.species}`} onPress={() => handleSelect()} className='mt-[3vh]' />}
            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View className='flex-1 justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View className='bg-slate-900 w-[90vw] px-[2vw] pb-[2vh] rounded-3xl border-2 border-slate-700 items-center'>
                        <View className='w-full flex flex-row justify-between p-4'>
                            <Text className='text-white text-xl font-[Elektra]'>Select Option</Text>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} className='p-4'>
                                <Ionicons name='close' size={24} color='white' />
                            </TouchableOpacity>
                        </View>
                        <Text className='text-white pb-[4vh]'>{species.speciesBonus}</Text>
                        <View className='w-full flex flex-row justify-evenly'>
                            {species.options?.type === "skill"
                                && species.options?.options.map((option, index) => (
                                    <Button className='mx-[0.5vw]' key={index} title={option} onPress={() => {setModalVisible(!modalVisible)}} />
                                ))}
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default SpeciesItem