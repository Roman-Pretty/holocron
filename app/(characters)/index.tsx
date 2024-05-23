import { SafeAreaView } from 'react-native'
import { Colors } from '@/constants/Colors'
import { Text, View } from 'react-native'
import Button from '@/components/form/Button'
import { router } from 'expo-router'

const createcharacter = () => {


  return (
    <SafeAreaView style={{ backgroundColor: Colors.global.slate900, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className='text-xl text-white font-[Elektra] text-center pb-[2vh] pt-[36vh]'>
        You do not have any characters yet.
      </Text>
      <Button title='Create Character' className='px-4 ' onPress={() => router.push('create' as never)} />
    </SafeAreaView>
  )
}

export default createcharacter