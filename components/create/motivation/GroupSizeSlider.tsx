import React from 'react';
import { View, Text } from 'react-native';
import Slider from "@react-native-community/slider";
import { Colors } from '@/constants/Colors';

interface GroupSizeSliderProps {
  groupSize: number;
  setGroupSize: (value: number) => void;
}

const GroupSizeSlider: React.FC<GroupSizeSliderProps> = ({ groupSize, setGroupSize }) => {
  return (
    <View className={`my-[2vh]`}>
      <Text className={`text-heading1 text-xl font-[Elektra]`}>Group Size: {groupSize}{groupSize>=6 && "+"}</Text>
      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={2}
        maximumValue={6}
        step={1}
        value={groupSize}
        onValueChange={(index) => setGroupSize(index)}
        minimumTrackTintColor={Colors.global.heading1}
        maximumTrackTintColor={Colors.global.boxheading}
        thumbTintColor={Colors.global.heading1}
      />
    </View>
  );
};

export default GroupSizeSlider;
