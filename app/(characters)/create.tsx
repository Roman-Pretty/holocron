import Description from '@/components/create/Description'
import Species from '@/components/create/species/Species'
import Button from '@/components/form/Button'
import React from 'react'
import { Text, View } from 'react-native'
import * as Progress from 'react-native-progress'

const create = () => {

    const [currentIndex, setCurrentIndex] = React.useState(0)

    const [name, setName] = React.useState('');
    const [homeworld, setHomeworld] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [species, setSpecies] = React.useState(null);

    return (
        <View className='flex-1 bg-slate-900 p-6'>
            <View className=''>
                <Text className='text-2xl text-white font-[Elektra] text-center pb-[2vh]'>
                    {currentIndex === 0 ? 'Description' : 
                    currentIndex === 1 ? 'Species' :
                     currentIndex === 2 ? 'Career' : 
                     currentIndex === 3 ? 'Specialization' 
                     : currentIndex === 4 ? 'Characteristics' 
                     : currentIndex === 5 ? 'Skills' : 
                     'Summary'}
                </Text>
                <Progress.Bar progress={((currentIndex+1) / (6+1))} animated color='white' width={null} />
            </View>
            <View className='h-[64vh] my-[2vh]'>
                {currentIndex === 0 && <Description
                    name={name} setName={setName}
                    homeworld={homeworld} setHomeworld={setHomeworld}
                    description={description} setDescription={setDescription}
                />}
                {currentIndex === 1 && <Species selectedSpecies={species} setSelectedSpecies={setSpecies}/>}
            </View>
            <View className='flex-row w-full justify-evenly'>
               
                <Button title='Back' className='mr-1' onPress={() => {setCurrentIndex(currentIndex-1)}} disabled={currentIndex === 0}
                 />
                <Button title='Next' className='ml-1' onPress={() => {setCurrentIndex(currentIndex+1)}} disabled={currentIndex === 1 && species === null}
                 />
            </View>
        </View>
    )
}

export default create