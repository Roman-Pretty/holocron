import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';

interface PortraitItemProps {
    image: any;
    handleSelect: (image: string) => void;
}

const PortraitItem = ({ image, handleSelect } : PortraitItemProps) => {

    return (
        <TouchableOpacity
        onPress={() => handleSelect(image)}
        >
            <View className='rounded-3xl bg-slate-800 border-2 border-slate-700 m-1'>
                <View className='w-[24vw] h-[24vw] overflow-hidden rounded-3xl'>
                    <Image
                        source={image}
                        resizeMode='cover'
                        style={{ width: '100%', height: '200%', paddingTop: 200 }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PortraitItem