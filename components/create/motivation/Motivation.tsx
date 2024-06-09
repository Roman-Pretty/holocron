import React, { useState } from 'react';
import { Switch, Text, View, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Slider from '@react-native-community/slider';
import { Colors } from '@/constants/Colors';

const Obligations = [
    {
        label: "A Score to Settle",
        value: "aScoreToSettle"
    },
    {
        label: "Addiction",
        value: "addiction"
    }
];

const Motivation = () => {

    const [obligation, setObligation] = useState(true);
    const [duty, setDuty] = useState(false);
    const [morality, setMorality] = useState(false);
    const [groupSize, setGroupSize] = useState(2);

    return (
        <ScrollView>

            <View>

                <Text className={`text-xl font-[Elektra] text-heading1`}>
                    Group Size
                </Text>
                <Slider
                    style={{ height: 40 }}
                    minimumValue={0}
                    maximumValue={4}
                    step={1}
                    value={groupSize}
                    onValueChange={(value) => setGroupSize(value)}
                    StepMarker={(index) => <Text className={(index.stepMarked) ? "text-heading1" : "text-heading2"}>|</Text>}
                    minimumTrackTintColor={Colors.global.heading1}
                    maximumTrackTintColor={Colors.global.boxheading}
                    thumbTintColor={Colors.global.heading1}
                />
                <View className='justify-between flex flex-row pl-[4vw] pr-[2vw]'>
                    <Text>2</Text>
                    <Text>3</Text>
                    <Text>4</Text>
                    <Text>5</Text>
                    <Text>6+</Text>
                </View>
                <Text className='text-box pt-[1vh] pb-[3vh]'>
                    Your group size determines how much obligation/duty you start with. You start with 20 of either if the group has 2 players,
                    15 for 3 players, 10 for 4-5 players, and 5 for 6+ players.
                </Text>
            </View>

            <View className='pb-[3vh]'>
                <View className='flex-row justify-between'>
                    <Text className={`text-xl font-[Elektra] 
                ${obligation ? "text-heading3" : "text-gray-500"}
                `}>Obligation</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: "#612a16" }}
                        thumbColor={'#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setObligation(!obligation)}
                        value={obligation}
                    />
                </View>
                <Text className={`py-[1vh]
                ${obligation ? "text-box" : "text-gray-500"}
                `}>
                    Rolled for each session, your obligation represents a debt or setback your character must overcome.
                </Text>
                <RNPickerSelect
                    onValueChange={(value: any) => console.log(value)}
                    items={Obligations}
                    disabled={!obligation}
                    darkTheme
                />


            </View>
            <View className='flex-row justify-between'>
                <Text className={`text-xl font-[Elektra] 
                ${duty ? "text-heading3" : "text-gray-500"}
                `}>Duty</Text>
                <Switch
                    trackColor={{ false: '#767577', true: "#b42429" }}
                    thumbColor={'#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setDuty(!duty)}
                    value={duty}
                />
            </View>
            <Text className={`py-[1vh]
                ${duty ? "text-box" : "text-gray-500"}
                `}>
                Your personal mission to your current faction. Opportunities to pursue and increase your Duty will likely come
                into play during the campaign.
            </Text>
            <View className='flex-row justify-between'>
                <Text className={`text-xl font-[Elektra] 
                ${morality ? "text-heading3" : "text-gray-500"}
                `}>Morality</Text>
                <Switch
                    trackColor={{ false: '#767577', true: "#090e08" }}
                    thumbColor={'#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setMorality(!morality)}
                    value={morality}
                />
            </View>
            <Text className={`py-[1vh]
                ${morality ? "text-box" : "text-gray-500"}
                `}>
                Your character’s actions can change their morality over time, and sufficient
                change in either direction will confer certain benefits on them.
            </Text>
        </ScrollView>
    )
}

export default Motivation