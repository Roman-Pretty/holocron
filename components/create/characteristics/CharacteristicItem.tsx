import { View, Text } from 'react-native'
import React from 'react'
import Button from '@/components/form/Button';

interface CharacteristicItemProps {
    characteristic: Characteristic;
    setCharacteristics: React.Dispatch<React.SetStateAction<Characteristic[]>>;
    species: Species | null;
    index: number;
}

const CharacteristicItem = ({ characteristic, species, index, setCharacteristics }: CharacteristicItemProps) => {

    const [level, setLevel] = React.useState(characteristic.level);

    function increaseLevel() {
        setLevel(level + 1);
        characteristic.level += 1;
        setCharacteristics(prev => [...prev]);
    }

    function decreaseLevel() {
        setLevel(level - 1);
        characteristic.level -= 1;
        setCharacteristics(prev => [...prev]);
    }

    return (
        <View className='py-[4vh] px-[2vw] border-b-2 border-slate-700'>
            <View className='flex flex-row'>
                <View className='w-[18vw] h-[18vw] bg-slate-900 border-2 border-slate-800 rounded-full flex items-center justify-center'>
                    <Text className='text-white text-4xl font-[Elektra]'>{level}</Text>
                </View>
                <View className='pl-[4vw]'>
                    <Text className='text-white text-xl font-[Elektra] capitalize'>{characteristic.name}</Text>
                    <Text className='text-white text-sm font-[Elektra] max-w-[60vw]'>{characteristic.desc}</Text>
                </View>
            </View>
            <View className='flex-row pt-[2vh]'>
                <Button title='Decrease' disabled={species && characteristic.level <= species.characteristics[index] ? true : false} className='mr-[1vw]' onPress={decreaseLevel} />
                <Button title='Increase' disabled={characteristic.level >= 6} className='ml-[1vw]' onPress={increaseLevel} />
            </View>
        </View>
    )
}

export default CharacteristicItem