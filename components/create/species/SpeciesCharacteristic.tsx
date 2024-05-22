import { View, Text } from 'react-native'
import React from 'react'

const SpeciesCharacteristic = ({ title, level }: { title: string, level: number }) => {
    return (
        <View className='items-center w-[14vw] pt-[1vh]'>
            <View className='bg-slate-800 rounded-full w-[10vw] h-[10vw] items-center justify-center border-2 border-slate-700'>
                <Text className='text-center text-slate-100 w-full font-[Elektra] text-xl pt-[2.6]'>{level}</Text>
            </View>
            <Text className='text-center text-slate-100 font-[Elektra] text-[10px] pt-[0.6vh]'>{title}</Text>
        </View>
    )
}

export default SpeciesCharacteristic