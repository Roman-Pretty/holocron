import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import Checkbox from "expo-checkbox";
import React from "react";
import { Switch, Text, Pressable, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Morality } from "@/constants/Motivations";

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
  return (
    <View className={`mb-2 rounded-xl p-4 bg-[#4f3035]`}>
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
          <Text className={`py-[1vh] text-white`}>
            Morality represents the moral and Force-based alignment of a
            Force-sensitive character.
          </Text>
          <View className="pt-[1vh]">
            <Text className="text-white font-[Elektra] text-md py-2">
              Emotional Strength
            </Text>
            <View className="w-full bg-white p-2 self-center">
              <RNPickerSelect
                onValueChange={(value) =>
                  setSelectedStrength(
                    strengths.find((item) => item.value === value) || null
                  )
                }
                items={strengths}
                disabled={!morality}
                value={selectedStrength?.value}
                darkTheme
                Icon={() => (
                  <Ionicons name="chevron-down" size={24} color="#6b7280" />
                )}
              />
            </View>
          </View>
          <View className="pt-[1vh]">
            <Text className="text-white font-[Elektra] text-md py-2">
              Emotional Weakness
            </Text>
            <View className="w-full bg-white p-2 self-center">
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
                Icon={() => (
                  <Ionicons name="chevron-down" size={24} color="#6b7280" />
                )}
              />
            </View>
          </View>
          <View className="pt-[2vh]">
            <Text className="text-white font-[Elektra] text-md">
              Starting Morality: {moralityCost}
            </Text>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={29}
              maximumValue={71}
              step={21}
              value={moralityCost}
              onValueChange={(index) => setMoralityCost(index)}
              minimumTrackTintColor={"#1aa3e8"}
              maximumTrackTintColor="#ed0000"
              thumbTintColor={"#fff"}
            />
          </View>
          {!obligation && !duty && (
            <View className="pt-[2vh]">
              <Text className="text-white">
                Bonuses (only available if no Obligation or Duty is selected).
              </Text>
              <View className="flex-row justify-between bg-statblockbackground p-2 mt-[2vh]">
                <Text
                  className={`font-[Elektra] text-white text-lg text-left w-[33%]`}
                >
                  Experience
                </Text>
                <Text
                  className={`font-[Elektra] text-white text-lg text-center w-[33%]`}
                >
                  Credits
                </Text>
                <Text
                  className={`font-[Elektra] text-white text-lg text-right w-[33%]`}
                >
                  Selected
                </Text>
              </View>

              <Pressable
                className="flex-row justify-between py-[1vh] px-2 bg-white"
                onPress={() => {
                  setMoralityBonus(0);
                }}
              >
                <Text className={` text-black text-left w-[33%]`}>
                  +10 Experience
                </Text>
                <Text className={` text-black text-center w-[33%]`}>-</Text>
                <View className="flex-row justify-end w-[33%]">
                  <Ionicons
                    name={
                      moralityBonus === 0
                        ? "radio-button-on-outline"
                        : "radio-button-off-outline"
                    }
                    size={24}
                    color="#000"
                  />
                </View>
              </Pressable>

              <Pressable
                className="flex-row justify-between py-[1vh] px-2 bg-gray-200"
                onPress={() => {
                  setMoralityBonus(1);
                }}
              >
                <Text className={` text-black text-center w-[33%] `}>-</Text>
                <Text className={` text-black text-center w-[33%]`}>
                  +2500 Credits
                </Text>
                <View className="flex-row justify-end w-[33%]">
                  <Ionicons
                    name={
                      moralityBonus === 1
                        ? "radio-button-on-outline"
                        : "radio-button-off-outline"
                    }
                    size={24}
                    color="#000"
                  />
                </View>
              </Pressable>

              <Pressable
                className="flex-row justify-between py-[1vh] px-2 bg-white"
                onPress={() => {
                  setMoralityBonus(2);
                }}
              >
                <Text className={` text-black text-left w-[33%]`}>
                  +5 Experience
                </Text>
                <Text className={` text-black text-center w-[33%]`}>
                  +1000 Credits
                </Text>
                <View className="flex-row justify-end w-[33%]">
                  <Ionicons
                    name={
                      moralityBonus === 2
                        ? "radio-button-on-outline"
                        : "radio-button-off-outline"
                    }
                    size={24}
                    color="#000"
                  />
                </View>
              </Pressable>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default MoralityPicker;
