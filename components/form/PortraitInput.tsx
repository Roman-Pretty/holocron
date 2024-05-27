import { View, Text, Image, TouchableOpacity, Modal, FlatList } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import PortraitItem from './PortraitItem';
import { ImageSourcePropType } from 'react-native';
import { SetStateAction } from 'react';

const IMAGES = [
    require('@/assets/images/species/aleena_0.png'),
    require('@/assets/images/species/anx_0.png'),
    require('@/assets/images/species/aqualish_0.png'),
    require('@/assets/images/species/aqualish_1.png'),
    require('@/assets/images/species/aqualish_2.png'),
    require('@/assets/images/species/arcona_0.png'),
    require('@/assets/images/species/arkanian_0.png'),
    require('@/assets/images/species/arkanian_1.png'),
    require('@/assets/images/species/balosar_0.png'),
    require('@/assets/images/species/bardottan_0.png'),
    require('@/assets/images/species/bardottan_1.png'),
    require('@/assets/images/species/besalisk_0.png'),
    require('@/assets/images/species/bith_0.png'),
    require('@/assets/images/species/bith_1.png'),
    require('@/assets/images/species/bothan_0.png'),
    require('@/assets/images/species/caamasi_0.png'),
    require('@/assets/images/species/cerean_0.png'),
    require('@/assets/images/species/chadra-fan_0.png'),
    require('@/assets/images/species/chadra-fan_1.png'),
    require('@/assets/images/species/chagrian_0.png'),
    require('@/assets/images/species/chagrian_1.png'),
    require('@/assets/images/species/chevin_0.png'),
    require('@/assets/images/species/chevin_1.png'),
    require('@/assets/images/species/chiss_0.png'),
    require('@/assets/images/species/chiss_1.png'),
    require('@/assets/images/species/clawdite_0.png'),
    require('@/assets/images/species/clawdite_1.png'),
    require('@/assets/images/species/clone_0.png'),
    require('@/assets/images/species/clone_1.png'),
    require('@/assets/images/species/clone_2.png'),
    require('@/assets/images/species/clone_3.png'),
    require('@/assets/images/species/corellian_0.png'),
    require('@/assets/images/species/corellian_1.png'),
    require('@/assets/images/species/cosian_0.png'),
    require('@/assets/images/species/cosian_1.png'),
    require('@/assets/images/species/dathomirian_0.png'),
    require('@/assets/images/species/dathomirian_1.png'),
    require('@/assets/images/species/devaronian_0.png'),
    require('@/assets/images/species/devaronian_1.png'),
    require('@/assets/images/species/custom_0.png'),
    require('@/assets/images/species/custom_1.png')
];


interface PortraitInputProps {
    portrait: ImageSourcePropType | undefined;
    setPortrait: React.Dispatch<SetStateAction<ImageSourcePropType>>;
}

const PortraitInput = ({ portrait, setPortrait }: PortraitInputProps) => {

    const [modalVisible, setModalVisible] = React.useState(false)

    function selectPortrait(image: ImageSourcePropType) {
        setPortrait(image);
        setModalVisible(!modalVisible);
    }

    return (
        <>
            <Text className='text-slate-400 font-[Elektra]'>
                Portrait
            </Text>
            <View className='border-2 border-slate-700  mb-[1.5vh] mt-[1vh] rounded-lg '>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                    <View className='h-[20vh] overflow-hidden'>
                        <Image
                            source={portrait}
                            resizeMode='contain'
                            style={{ width: '100%', height: '200%', paddingTop: 200 }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View className='flex-1 justify-center items-center' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <View className='bg-slate-900 w-[90vw] px-[2vw] h-[80vh] rounded-3xl border-2 border-slate-700 items-center'>
                        <View className='w-full flex flex-row justify-between p-4'>
                            <Text className='text-white text-xl font-[Elektra]'>Select Portrait</Text>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} className='p-4'>
                                <Ionicons name='close' size={24} color='white' />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={IMAGES}                            
                            disableVirtualization={false}
                            initialNumToRender={3}
                            maxToRenderPerBatch={3}
                            renderItem={({ item }) => <PortraitItem key={item.toString()} image={item} handleSelect={selectPortrait} />}
                            keyExtractor={item => item.toString()}
                            numColumns={3}
                            horizontal={false}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />

                    </View>
                </View>
            </Modal>
        </>
    )
}

export default PortraitInput