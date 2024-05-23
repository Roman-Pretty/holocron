import { View, Text, Image } from 'react-native'
import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

interface SummaryProps {
  name: string;
  homeworld: string;
  description: string;
  species: Species | null;
  career: Career | null;
  specialization: Specialization | null;
  characteristics: Characteristic[];
  skills: Skill[];
  portrait: ImageSourcePropType;
}

const Summary = ({ name, homeworld, description, species, career, specialization, characteristics, skills, portrait }: SummaryProps) => {
  return (
    <>
      <View className='w-full rounded-xl bg-slate-700 items-center py-[2vh] relative'>
        <View className={`w-[16vw] h-[16vw] overflow-hidden rounded-full  border-2 border-slate-800 absolute top-2 right-2 rotate-12`}>
          <Image
            source={career?.image}
            resizeMode='contain'
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View className={`absolute top-4 left-4`}>
          <Text className='text-gray-800 font-[Elektra] text-md'>Imperial ID</Text>
          <Text className='text-gray-800 font-[Elektra] text-xs'>100320</Text>
        </View>
        <View className='w-[24vw] h-[24vw] overflow-hidden border-2 border-slate-800 bg-slate-800 rounded-full'>
          <Image
            source={portrait}
            resizeMode='cover'
            style={{ width: '100%', height: '200%', paddingTop: 200 }}
          />
        </View>
        <View className='border-b-2 border-slate-800 w-full items-center pb-[1vh]'>
          <Text className='text-white font-[Elektra] text-xl pt-[2vh]'>{name}</Text>
        </View>
        <View className='w-full flex flex-row justify-evenly pt-[2vh]'>
          <View className='flex flex-row items-center justify-center w-[20vw] overflow-hidden'>
            <Ionicons name='footsteps' size={16} color='white' />
            <Text className='text-white font-[Elektra] text-xs pl-[1vw]'>{species?.species}</Text>
          </View>
          <View className='flex flex-row items-center justify-center w-[40vw] overflow-hidden'>
            <Ionicons name='planet' size={16} color='white' />
            <Text className='text-white font-[Elektra] text-xs pl-[1vw]'>{homeworld}</Text>
          </View>
          <View className='flex flex-row items-center justify-center w-[20vw] overflow-hidden'>
            <Ionicons name='shield-half-outline' size={16} color='white' />
            <Text className='text-white font-[Elektra] text-xs pl-[1vw]'>{specialization?.name}</Text>
          </View>
        </View>
      </View>
      <Text className='text-slate-400 font-[Elektra] text-lg pt-[4vh] pb-[1vh]'>Characteristics</Text>
      <View className='w-full flex flex-row flex-wrap items-center justify-evenly'>
        {characteristics.map((characteristic, index) => (
          <View key={index} className='items-center'>
            <View className='w-[14vw] h-[14vw] rounded-full bg-slate-700 border-slate-600 flex justify-center items-center border-2'>
              <Text className='font-[Elektra] text-3xl text-white'>{characteristic.level}</Text>
            </View>
            <Text className='text-white font-[Elektra] text-[10px] uppercase pt-[1vh]'>{characteristic.name}</Text>
          </View>
        ))}
      </View>
      <Text className='text-slate-400 font-[Elektra] text-lg pt-[4vh]'>Description</Text>
      <Text className='text-white font-regular text-md'>{description}</Text>


    </>
  )
}

export default Summary