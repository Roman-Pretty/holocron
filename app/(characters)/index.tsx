import { Image, SafeAreaView, ScrollView } from 'react-native'
import { Colors } from '@/constants/Colors'
import { Text, View, ImageBackground } from 'react-native'
import Button from '@/components/form/Button'
import { router } from 'expo-router'
import { loadCharacters, deleteAllCharacters } from '@/storage/CharacterStorage'
import { Character } from '@/constants/Types'
import { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import CareerData from '@/constants/CareerData'

const createcharacter = () => {

  function seededRandom(seed : number) {
    // Constants for the LCG algorithm
    const m = 2**31 - 1; // modulus
    const a = 1103515245; // multiplier
    const c = 100320; // increment
  
    // Seed must be within the range [0, m-1]
    let state = seed % m;
  
    // Generate the random number
    state = (a * state + c) % m;
  
    // Convert to a 6-digit number
    let randomNum = state % 1000000;
  
    // Ensure it has 6 digits (pad with leading zeros if necessary)
    return String(randomNum).padStart(6, '0');
  }

  const [characters, setCharacters] = useState<Character[]>();

  async function getChars() {
    return await loadCharacters();
  }

  useEffect(() => {
    // deleteAllCharacters();
    getChars().then((chars) => {
      setCharacters(chars);
    });
  }, []);

  if (!characters || characters.length <= 0) {
    return (
      <SafeAreaView style={{ backgroundColor: 'Colors.global.slate900', flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text className='text-xl text-white font-[Elektra] text-center pb-[2vh] pt-[36vh]'>
            You do not have any characters yet.
          </Text>
          <Button title='Create Character' className='px-4 ' onPress={() => router.push('create' as never)} />
        </View>
      </SafeAreaView>
    )
  }

  return (
    <ImageBackground source={require('@/assets/images/page/background.jpg')} style={{ flex: 1 }}>
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
      {characters.map((char) => (
        <View key={char.key} className='mx-[2vw] mt-[2vw] rounded-xl bg-statblockbackground items-center py-[2vh] relative'
        style={{shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        
        elevation: 10,}}>
          <View className={`w-[16vw] h-[16vw] overflow-hidden rounded-full  border-2 border-statblockornate absolute top-2 right-2 rotate-12`}>
            <Image
              source={char.data.career.image}
              resizeMode='contain'
              style={{ width: '100%', height: '100%' }}
            />
          </View>
          <View className="absolute top-4 left-4">
            <Text className='text-gray-800 font-[Elektra] text-md'>Imperial ID</Text>
            <Text className='text-gray-800 font-[Elektra] text-xs'>{seededRandom(char.key)}</Text>
          </View>
          <View className='w-[24vw] h-[24vw] overflow-hidden border-2 border-statblockornate bg-statblockornate rounded-xl'>
            <Image
              source={char.data.image}
              resizeMode='cover'
              style={{ width: '100%', height: '200%', paddingTop: 200 }}
            />
          </View>
          <View className='border-b-2 border-statblockornate w-full items-center pb-[1vh]'>
            <Text className='text-statblocktextbackground font-[Elektra] text-xl pt-[2vh]'>{char.data.name}</Text>
          </View>
          <View className='w-full flex flex-row justify-evenly pt-[2vh]'>
            <View className='flex flex-row items-center justify-center w-[20vw] overflow-hidden'>
              <Ionicons name='footsteps' size={16} color={Colors.global.statblocktextbackground} />
              <Text className='text-statblocktextbackground font-[Elektra] text-xs pl-[1vw]'>{char.data.species.species}</Text>
            </View>
            <View className='flex flex-row items-center justify-center w-[40vw] overflow-hidden'>
              <Ionicons name='planet' size={16} color={Colors.global.statblocktextbackground} />
              <Text className='text-statblocktextbackground font-[Elektra] text-xs pl-[1vw]'>{char.data.homeworld}</Text>
            </View>
            <View className='flex flex-row items-center justify-center w-[20vw] overflow-hidden'>
              <Ionicons name='shield-half-outline' size={16} color={Colors.global.statblocktextbackground} />
              <Text className='text-statblocktextbackground font-[Elektra] text-xs pl-[1vw]'>{char.data.specializations[0]}</Text>
            </View>
          </View>
        </View>
      ))
      }
      </ScrollView>
    </SafeAreaView >
    </ImageBackground>
  )
}

export default createcharacter