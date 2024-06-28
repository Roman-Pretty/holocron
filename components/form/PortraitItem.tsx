import React from 'react';
import { Image, View, Pressable, ImageSourcePropType } from 'react-native';

interface PortraitItemProps {
    image: any;
    handleSelect: (image: ImageSourcePropType) => void;
    handleLongPress?: (image: ImageSourcePropType) => void;
}

const PortraitItem = ({ image, handleSelect, handleLongPress }: PortraitItemProps) => {
    return (
        <Pressable
            onPress={() => handleSelect(image)}
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.5 : 1,
                },
            ]}
            onLongPress={() => handleLongPress && handleLongPress(image)}
        >
            <View className='rounded-lg bg-white shadow-black shadow-sm  m-1'>
                <View className='w-[24vw] h-[24vw] overflow-hidden rounded-lg'>
                    <Image
                        source={image}
                        resizeMode='cover'
                        style={{ width: '100%', height: '200%', paddingTop: 200 }}
                    />
                </View>
            </View>
        </Pressable>
    );
}

export default PortraitItem;
