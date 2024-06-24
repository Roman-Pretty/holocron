import React from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface GroupSizeSliderProps {
  groupSize: number;
  setGroupSize: (value: number) => void;
}

const GroupSizeSlider: React.FC<GroupSizeSliderProps> = ({
  groupSize,
  setGroupSize,
}) => {
  return (
    <View className={`mb-2 items-center bg-neutral-800 p-6 py-4 rounded-xl`}>
      <Text className="text-xl text-white">
        <Text className="font-bold">
          {groupSize}
          {groupSize >= 6 && "+"}
        </Text>{" "}
        Players
      </Text>
      <Slider
        style={{ width: "100%" }}
        minimumValue={2}
        maximumValue={6}
        step={1}
        value={groupSize}
        onValueChange={(index) => setGroupSize(index)}
        minimumTrackTintColor={Colors.global.bulletpoint}
        maximumTrackTintColor={Colors.global.boxheading}
        thumbTintColor={"#fff"}
      />
      <Text className="text-xs font-bold text-white mt-2">
        You must select at least one Obligation, Duty, or Morality.
      </Text>
      {/* 
      <Text className={`text-white text-md text-center mb-4`}>
        <Ionicons style={{ marginTop: 18 }} name="checkmark" size={16} /> It is
        recommended to choose <Text className="font-bold">either</Text> an
        Obligation or Duty, though you may play with both.
      </Text> */}
    </View>
  );
};

export default GroupSizeSlider;
