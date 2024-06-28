import { Obligation } from "@/constants/Motivations";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React, { useEffect, useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Animated, { FadeIn, SlideInDown, SlideInUp } from "react-native-reanimated";

interface ObligationPickerProps {
  obligations: Obligation[];
  selectedObligations: Obligation[];
  setSelectedObligations: React.Dispatch<React.SetStateAction<Obligation[]>>;
  obligation: boolean;
  setObligation: (value: boolean) => void;
  additionalObligation: boolean[];
  setAdditionalObligation: (values: boolean[]) => void;
  calculateObligationCost: () => number;
  obligationCost: number;
}

const ObligationPicker: React.FC<ObligationPickerProps> = ({
  obligations,
  selectedObligations = [],
  setSelectedObligations,
  obligation,
  setObligation,
  additionalObligation,
  setAdditionalObligation,
  calculateObligationCost,
  obligationCost,
}) => {
  const [dropdowns, setDropdowns] = useState<number[]>([0]);

  useEffect(() => {
    // Ensure there's always one extra dropdown for new selection
    if (dropdowns.length !== selectedObligations.length + 1) {
      setDropdowns([...Array(selectedObligations.length + 1).keys()]);
    }
  }, [selectedObligations]);

  const addDropdown = () => {
    setDropdowns([...dropdowns, dropdowns.length]);
  };

  const removeDropdown = (index: number) => {
    const updatedSelectedObligations = selectedObligations.filter(
      (_, i) => i !== index
    );
    setSelectedObligations(updatedSelectedObligations);
  };

  const handleValueChange = (index: number, value: string) => {
    const selectedItem = obligations.find((item) => item.value === value);
    if (selectedItem) {
      const updatedSelectedObligations = [...selectedObligations];
      updatedSelectedObligations[index] = selectedItem;
      setSelectedObligations(updatedSelectedObligations);
      if (index === dropdowns.length - 1) {
        addDropdown();
      }
    }
  };

  return (
    <View className={`rounded-xl mb-2 bg-[#663d30]`}>
      <View className={`p-4`}>
        <View className="flex-row justify-between">
          <Text
            className={`text-xl font-[Elektra] pt-0.5 ${
              obligation ? "text-white" : "text-gray-300"
            }`}
            style={{verticalAlign: 'middle'}}
          >
            Obligation
          </Text>
          <Switch
            trackColor={{ false: "#f0efee", true: "#f0efee" }}
            thumbColor={"#663d30"}
            ios_backgroundColor="#f0efee"
            onValueChange={() => {
              setSelectedObligations([]);
              setAdditionalObligation([false, false, false, false]);
              setObligation(!obligation);
            }}
            value={obligation}
          />
        </View>
        {obligation && (
          <>
            <Text className={`my-4 text-white`}>
              Rolled for each session, your obligation represents a debt or
              setback your character must overcome.
            </Text>
            <Text className={`text-white font-bold text-xs`}>
              Select one or more obligations.
            </Text>
            {dropdowns.map((dropdown, index) => (
              <View key={index} className="w-full flex-row my-2">
                <View className="bg-white py-2 px-4 rounded-md flex-1 justify-center">
                  <RNPickerSelect
                    onValueChange={(value) => handleValueChange(index, value)}
                    items={obligations}
                    disabled={!obligations || obligations.length === 0}
                    value={
                      index < selectedObligations.length
                        ? selectedObligations[index]?.value
                        : null
                    }
                  />
                </View>
                <Pressable
                  className={`p-2 pl-4 ${
                    index === dropdowns.length - 1 ? "opacity-50" : ""
                  }`}
                  onPress={() =>
                    index !== dropdowns.length - 1 && removeDropdown(index)
                  }
                  disabled={index === dropdowns.length - 1}
                >
                  <Ionicons
                    name="trash"
                    size={24}
                    color={index === dropdowns.length - 1 ? "#888" : "#fff"}
                  />
                </Pressable>
              </View>
            ))}
          </>
        )}
      </View>
      {obligation && (
        <View className={`p-4 rounded-b-xl bg-black/20`}>
          <View className="w-full justify-between items-center flex-row mb-4">
            <Text className={`text-white font-bold text-xs`}>MODIFIERS</Text>
            <View className="flex-row items-center">
              <Ionicons name="dice" size={16} color="white" />
              <Text className={`text-white font-bold text-xs pl-1`}>
              {calculateObligationCost()}/{obligationCost * 2}
              </Text>
            </View>
          </View>
          <Pressable
            className="flex-row items-center w-full py-1"
            onPress={() => {
              setAdditionalObligation([
                !additionalObligation[0],
                additionalObligation[1],
                additionalObligation[2],
                additionalObligation[3],
              ]);
            }}
          >
            <Ionicons
              name={additionalObligation[0] ? "checkbox" : "square-outline"}
              size={22}
              color="white"
              style={{ paddingRight: 8 }}
            />
            <Ionicons name="locate" size={12} color="white" />
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">5</Text>
            <Text className="px-1 text-white font-[Elektra] pt-0.5">
              for an additional
            </Text>
            <Ionicons name="dice" size={12} color="white" />
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">5.</Text>
          </Pressable>
          <Pressable
            className="flex-row items-center w-full py-1"
            onPress={() => {
              setAdditionalObligation([
                additionalObligation[0],
                !additionalObligation[1],
                additionalObligation[2],
                additionalObligation[3],
              ]);
            }}
          >
            <Ionicons
              name={additionalObligation[1] ? "checkbox" : "square-outline"}
              size={22}
              color="white"
              style={{ paddingRight: 8 }}
            />
            <Ionicons name="locate" size={12} color="white" />
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">10</Text>
            <Text className="px-1 text-white font-[Elektra] pt-0.5">
              for an additional
            </Text>
            <Ionicons name="dice" size={12} color="white" />
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">10.</Text>
          </Pressable>
          <Pressable
            className="flex-row items-center w-full py-1"
            onPress={() => {
              setAdditionalObligation([
                additionalObligation[0],
                additionalObligation[1],
                !additionalObligation[2],
                additionalObligation[3],
              ]);
            }}
          >
            <Ionicons
              name={additionalObligation[2] ? "checkbox" : "square-outline"}
              size={22}
              color="white"
              style={{ paddingRight: 8 }}
            />
            <Text className="font-[aurebesh] text-white">$</Text>
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">
              10,000
            </Text>
            <Text className="px-1 text-white font-[Elektra] pt-0.5">
              for an additional
            </Text>
            <Ionicons name="dice" size={12} color="white" />
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">5.</Text>
          </Pressable>
          <Pressable
            className="flex-row items-center w-full py-1"
            onPress={() => {
              setAdditionalObligation([
                additionalObligation[0],
                additionalObligation[1],
                additionalObligation[2],
                !additionalObligation[3],
              ]);
            }}
          >
            <Ionicons
              name={additionalObligation[3] ? "checkbox" : "square-outline"}
              size={22}
              color="white"
              style={{ paddingRight: 8 }}
            />
            <Text className="font-[aurebesh] text-white">$</Text>
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">
              25,000
            </Text>
            <Text className="px-1 text-white font-[Elektra] pt-0.5">
              for an additional
            </Text>
            <Ionicons name="dice" size={12} color="white" />
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">10.</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ObligationPicker;
