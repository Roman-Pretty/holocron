import TriangleCorner from '@/components/shapes/TriangleCorner'
import React from 'react'
import { Text, View } from 'react-native'

const SpeciesCharacteristic = ({ title, level }: { title: string, level: number }) => {
    return (
        <View className='items-center w-[48px] pt-[1vh]'>
            <View className='flex-row justify-center'>

                <TriangleCorner style={{
                    transform: [{ rotate: "180deg" }],
                    borderTopWidth: '12px', borderRightWidth: '12px', borderTopColor: '#fff',
                }} />
                <View className='bg-white w-[24px]'>

                </View>
                <TriangleCorner style={{
                    transform: [{ rotate: "-90deg" }],
                    borderTopWidth: '12px', borderRightWidth: '12px', borderTopColor: '#fff',
                }} />


            </View>
            <View className='bg-white  w-full h-[24px] items-center justify-center'>
                <Text className='text-center text-black w-full font-[Elektra] text-2xl'>{level}</Text>
            </View>
            <View className='flex-row justify-center'>

                <TriangleCorner style={{
                    transform: [{ rotate: "90deg" }],
                    borderTopWidth: '12px', borderRightWidth: '12px', borderTopColor: '#fff',
                }} />
                <View className='bg-white w-[24px]'>

                </View>
                <TriangleCorner style={{
                    transform: [{ rotate: "0deg" }],
                    borderTopWidth: '12px', borderRightWidth: '12px', borderTopColor: '#fff',
                }} />



            </View>
            <Text className='text-center text-slate-100 font-[Elektra] text-[10px] pt-[0.6vh]'>{title}</Text>
        </View>
    )
}

export default SpeciesCharacteristic