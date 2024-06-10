import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import React from "react";
import { Switch, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Colors } from "@/constants/Colors";

interface Morality {
  label: string;
  value: string;
}

interface MoralityProps {
  morality: boolean;
  setMorality: (value: boolean) => void;
  strengths: Morality[];
  setSelectedStrength: (strength: Morality | null) => void;
  weaknesses: Morality[];
  setSelectedWeakness: (strength: Morality | null) => void;
  setMoralityCost: (value: number) => void;
  moralityCost: number;
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
}: MoralityProps) => {
  return (
    <View className={`mb-[2vh] p-2 bg-[#4f3035]`}>
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
            <Text className="text-white font-[Elektra] text-lg">
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
                darkTheme
                Icon={() => (
                  <Ionicons name="chevron-down" size={24} color="#6b7280" />
                )}
              />
            </View>
          </View>
          <View className="pt-[1vh]">
            <Text className="text-white font-[Elektra] text-lg">
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
                darkTheme
                Icon={() => (
                  <Ionicons name="chevron-down" size={24} color="#6b7280" />
                )}
              />
            </View>
          </View>
          <View className="pt-[2vh]">
            <Text className="text-white font-[Elektra] text-lg">Morality: {moralityCost}</Text>
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
        </>
      )}
    </View>
  );
};

export default MoralityPicker;
