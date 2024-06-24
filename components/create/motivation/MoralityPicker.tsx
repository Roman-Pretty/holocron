import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { Switch, Text, Pressable, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Morality } from "@/constants/Motivations";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

interface MoralityProps {
  morality: boolean;
  obligation: boolean;
  duty: boolean;
  setMorality: (value: boolean) => void;
  strengths: Morality[];
  selectedStrength: Morality | null;
  setSelectedStrength: (strength: Morality | null) => void;
  selectedWeakness: Morality | null;
  weaknesses: Morality[];
  setSelectedWeakness: (strength: Morality | null) => void;
  setMoralityCost: (value: number) => void;
  moralityCost: number;
  moralityBonus: number;
  setMoralityBonus: (value: number) => void;
}

const MoralityPicker = ({
  morality,
  setMorality,
  strengths,
  setSelectedStrength,
  weaknesses,
  setSelectedWeakness,
  setMoralityCost,
  moralityCost,
  obligation,
  duty,
  moralityBonus,
  setMoralityBonus,
  selectedStrength,
  selectedWeakness,
}: MoralityProps) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleSegmentChange = (event: {
    nativeEvent: { selectedSegmentIndex: number };
  }) => {
    const index = event.nativeEvent.selectedSegmentIndex;
    setSelectedIndex(index);

    switch (index) {
      case 0:
        setMoralityCost(71);
        break;
      case 1:
        setMoralityCost(50);
        break;
      case 2:
        setMoralityCost(29);
        break;
      default:
        setMoralityCost(71);
    }
  };

  return (
    <View className={`mb-2 rounded-xl  bg-[#4f3035]`}>
      <View className={`p-4`}>
        <View className="flex-row justify-between">
          <Text
            className={`text-xl font-[Elektra] ${
              morality ? "text-white" : "text-gray-300"
            }`}
          >
            Morality
          </Text>
          <Switch
            trackColor={{ false: "#f0efee", true: "#f0efee" }}
            thumbColor={"#4f3035"}
            ios_backgroundColor="#f0efee"
            onValueChange={() => {
              setMorality(!morality);
              setSelectedStrength(null);
              setSelectedWeakness(null);
              setMoralityBonus(0);
            }}
            value={morality}
          />
        </View>
        {morality && (
          <>
            <Text className={`my-4 text-white`}>
              Morality represents the moral and Force-based alignment of a
              Force-sensitive character.
            </Text>
            <Text className={`text-white font-bold text-xs`}>
              Select an Emotional Strength
            </Text>
            <View className="w-full flex-row my-2">
              <View className="bg-white py-2 px-4 rounded-md flex-1 justify-center">
                <RNPickerSelect
                  onValueChange={(value) =>
                    setSelectedStrength(
                      strengths.find((item) => item.value === value) || null
                    )
                  }
                  items={strengths}
                  disabled={!morality}
                  value={selectedStrength?.value}
                />
              </View>
            </View>
            <Text className={`text-white font-bold text-xs pt-2`}>
              Select an Emotional Weakness
            </Text>
            <View className="w-full flex-row my-2">
              <View className="bg-white py-2 px-4 rounded-md flex-1 justify-center">
                <RNPickerSelect
                  onValueChange={(value) =>
                    setSelectedWeakness(
                      weaknesses.find((item) => item.value === value) || null
                    )
                  }
                  items={weaknesses}
                  disabled={!morality}
                  value={selectedWeakness?.value}
                  darkTheme
                />
              </View>
            </View>
            {!obligation && !duty && (
              // <View className="pt-[2vh]">
              //   <Text className="text-white">
              //     Bonuses (only available if no Obligation or Duty is selected).
              //   </Text>
              //   <View className="flex-row justify-between bg-statblockbackground p-2 mt-[2vh]">
              //     <Text
              //       className={`font-[Elektra] text-white text-lg text-left w-[33%]`}
              //     >
              //       Experience
              //     </Text>
              //     <Text
              //       className={`font-[Elektra] text-white text-lg text-center w-[33%]`}
              //     >
              //       Credits
              //     </Text>
              //     <Text
              //       className={`font-[Elektra] text-white text-lg text-right w-[33%]`}
              //     >
              //       Selected
              //     </Text>
              //   </View>

              //   <Pressable
              //     className="flex-row justify-between py-[1vh] px-2 bg-white"
              //     onPress={() => {
              //       setMoralityBonus(0);
              //     }}
              //   >
              //     <Text className={` text-black text-left w-[33%]`}>
              //       +10 Experience
              //     </Text>
              //     <Text className={` text-black text-center w-[33%]`}>-</Text>
              //     <View className="flex-row justify-end w-[33%]">
              //       <Ionicons
              //         name={
              //           moralityBonus === 0
              //             ? "radio-button-on-outline"
              //             : "radio-button-off-outline"
              //         }
              //         size={24}
              //         color="#000"
              //       />
              //     </View>
              //   </Pressable>

              //   <Pressable
              //     className="flex-row justify-between py-[1vh] px-2 bg-gray-200"
              //     onPress={() => {
              //       setMoralityBonus(1);
              //     }}
              //   >
              //     <Text className={` text-black text-center w-[33%] `}>-</Text>
              //     <Text className={` text-black text-center w-[33%]`}>
              //       +2500 Credits
              //     </Text>
              //     <View className="flex-row justify-end w-[33%]">
              //       <Ionicons
              //         name={
              //           moralityBonus === 1
              //             ? "radio-button-on-outline"
              //             : "radio-button-off-outline"
              //         }
              //         size={24}
              //         color="#000"
              //       />
              //     </View>
              //   </Pressable>

              //   <Pressable
              //     className="flex-row justify-between py-[1vh] px-2 bg-white"
              //     onPress={() => {
              //       setMoralityBonus(2);
              //     }}
              //   >
              //     <Text className={` text-black text-left w-[33%]`}>
              //       +5 Experience
              //     </Text>
              //     <Text className={` text-black text-center w-[33%]`}>
              //       +1000 Credits
              //     </Text>
              //     <View className="flex-row justify-end w-[33%]">
              //       <Ionicons
              //         name={
              //           moralityBonus === 2
              //             ? "radio-button-on-outline"
              //             : "radio-button-off-outline"
              //         }
              //         size={24}
              //         color="#000"
              //       />
              //     </View>
              //   </Pressable>
              // </View>
              <></>
            )}
          </>
        )}
      </View>
      {morality && (
        <View className={`p-4 rounded-b-xl bg-black/20`}>
          <View className="w-full justify-between items-center flex-row mb-4">
            <Text className={`text-white font-bold text-xs`}>MODIFIERS</Text>
            <View className="flex-row items-center">
              <Ionicons
                name={
                  moralityCost === 50
                    ? "contrast-outline"
                    : moralityCost > 50
                    ? "ellipse"
                    : "ellipse-outline"
                }
                size={16}
                color="white"
              />
              <Text className={`text-white font-bold text-xs pl-1 w-6`}>
                {moralityCost}
              </Text>
            </View>
          </View>
          <View className="">
            <Text className="text-white font-bold text-xs pb-2">
              Starting Affinity
            </Text>
            <SegmentedControl
              values={["Light", "Neutral", "Dark"]}
              selectedIndex={selectedIndex}
              onChange={handleSegmentChange}
            />
          </View>
          {obligation || duty && (<Text className="text-white/80 font-bold text-xs pt-4">Bonuses are unavailable with Obligation or Duty.</Text>)}
          {!obligation && !duty && (
            <View className="pt-2">
              <Text className="text-white font-bold text-xs pt-2">Bonuses</Text>
              <Pressable
                className="flex-row items-center w-full py-1"
                onPress={() => {
                  setMoralityBonus(0);
                }}
              >
                <Ionicons
                  name={
                    moralityBonus === 0
                      ? "radio-button-on-outline"
                      : "radio-button-off-outline"
                  }
                  size={22}
                  color="white"
                  style={{ paddingRight: 8 }}
                />
                <Ionicons name="locate" size={12} color="white" />
                <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">
                  10
                </Text>
              </Pressable>
              <Pressable
                className="flex-row items-center w-full py-1"
                onPress={() => {
                  setMoralityBonus(1);
                }}
              >
                <Ionicons
                  name={
                    moralityBonus === 1
                      ? "radio-button-on-outline"
                      : "radio-button-off-outline"
                  }
                  size={22}
                  color="white"
                  style={{ paddingRight: 8 }}
                />
                <Text className="font-[aurebesh] text-white">$</Text>
                <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">
                  25,000
                </Text>
              </Pressable>
              <Pressable
                className="flex-row items-center w-full py-1"
                onPress={() => {
                  setMoralityBonus(2);
                }}
              >
                <Ionicons
                  name={
                    moralityBonus === 2
                      ? "radio-button-on-outline"
                      : "radio-button-off-outline"
                  }
                  size={22}
                  color="white"
                  style={{ paddingRight: 8 }}
                />
                <Ionicons name="locate" size={12} color="white" />
                <Text className="pl-0.5 pr-1 text-white font-[Elektra] pt-0.5">
                  5 and
                </Text>
                <Text className="font-[aurebesh] text-white">$</Text>
                <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">
                  10,000
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default MoralityPicker;
