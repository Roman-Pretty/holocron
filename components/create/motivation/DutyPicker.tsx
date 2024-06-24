import { Colors } from "@/constants/Colors";
import { Duty } from "@/constants/Motivations";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React, { useEffect, useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

interface DutyPickerProps {
  duties: Duty[];
  selectedDuties: Duty[];
  setSelectedDuties: React.Dispatch<React.SetStateAction<Duty[]>>;
  duty: boolean;
  setDuty: (value: boolean) => void;
  additionalDuty: boolean[];
  setAdditionalDuty: (values: boolean[]) => void;
  calculateDutyCost: () => number;
  dutyCost: number;
}

const DutyPicker: React.FC<DutyPickerProps> = ({
  duties,
  selectedDuties = [],
  setSelectedDuties,
  duty,
  setDuty,
  additionalDuty,
  setAdditionalDuty,
  calculateDutyCost,
  dutyCost,
}) => {
  const [dropdowns, setDropdowns] = useState<number[]>([0]);

  useEffect(() => {
    // Ensure there's always one extra dropdown for new selection
    if (dropdowns.length !== selectedDuties.length + 1) {
      setDropdowns([...Array(selectedDuties.length + 1).keys()]);
    }
  }, [selectedDuties]);

  const addDropdown = () => {
    setDropdowns([...dropdowns, dropdowns.length]);
  };

  const removeDropdown = (index: number) => {
    const updatedSelectedDuties = selectedDuties.filter(
      (_, i) => i !== index
    );
    setSelectedDuties(updatedSelectedDuties);
  };

  const handleValueChange = (index: number, value: string) => {
    const selectedItem = duties.find((item) => item.value === value);
    if (selectedItem) {
      const updatedSelectedDuties = [...selectedDuties];
      updatedSelectedDuties[index] = selectedItem;
      setSelectedDuties(updatedSelectedDuties);
      if (index === dropdowns.length - 1) {
        addDropdown();
      }
    }
  };

  return (
    <View className={`rounded-xl mb-2 `} style={{backgroundColor: Colors.global.aor}}>
      <View className={`p-4`}>
        <View className="flex-row justify-between">
          <Text
            className={`text-xl font-[Elektra] pt-0.5 ${
              duty ? "text-white" : "text-gray-300"
            }`}
          >
            Duty
          </Text>
          <Switch
            trackColor={{ false: "#f0efee", true: "#f0efee" }}
            thumbColor={"#663d30"}
            ios_backgroundColor="#f0efee"
            onValueChange={() => {
              setSelectedDuties([]);
              setAdditionalDuty([false, false, false, false]);
              setDuty(!duty);
            }}
            value={duty}
          />
        </View>
        {duty && (
          <>
            <Text className={`my-4 text-white`}>
            Ranked out of 100, your duty represents your reputation or loyalty
            to a specific organization.
            </Text>
            <Text className={`text-white font-bold text-xs`}>
              Select one or more duties.
            </Text>
            {dropdowns.map((dropdown, index) => (
              <View key={index} className="w-full flex-row my-2">
                <View className="bg-white py-2 px-4 rounded-md flex-1 justify-center">
                  <RNPickerSelect
                    onValueChange={(value) => handleValueChange(index, value)}
                    items={duties}
                    disabled={!duties || duties.length === 0}
                    value={
                      index < selectedDuties.length
                        ? selectedDuties[index]?.value
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
      {duty && (
        <View className={`p-4 rounded-b-xl bg-black/20`}>
          <View className="w-full justify-between items-center flex-row mb-4">
            <Text className={`text-white font-bold text-xs`}>MODIFIERS</Text>
            <View className="flex-row items-center">
              <Ionicons name="dice" size={16} color="white" />
              <Text className={`text-white font-bold text-xs pl-1`}>
              {calculateDutyCost()}/100
              </Text>
            </View>
          </View>
          <Pressable
            className="flex-row items-center w-full py-1"
            onPress={() => {
              setAdditionalDuty([
                !additionalDuty[0],
                additionalDuty[1],
                additionalDuty[2],
                additionalDuty[3],
              ]);
            }}
          >
            <Ionicons
              name={additionalDuty[0] ? "checkbox" : "square-outline"}
              size={22}
              color="white"
              style={{ paddingRight: 8 }}
            />
            <Ionicons name="locate" size={12} color="white" />
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">5</Text>
            <Text className="px-1 text-white font-[Elektra] pt-0.5">
              for a reduction of
            </Text>
            <Ionicons name="dice" size={12} color="white" />
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">5.</Text>
          </Pressable>
          <Pressable
            className="flex-row items-center w-full py-1"
            onPress={() => {
              setAdditionalDuty([
                additionalDuty[0],
                !additionalDuty[1],
                additionalDuty[2],
                additionalDuty[3],
              ]);
            }}
          >
            <Ionicons
              name={additionalDuty[1] ? "checkbox" : "square-outline"}
              size={22}
              color="white"
              style={{ paddingRight: 8 }}
            />
            <Ionicons name="locate" size={12} color="white" />
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">10</Text>
            <Text className="px-1 text-white font-[Elektra] pt-0.5">
              for a reduction of
            </Text>
            <Ionicons name="dice" size={12} color="white" />
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">10.</Text>
          </Pressable>
          <Pressable
            className="flex-row items-center w-full py-1"
            onPress={() => {
              setAdditionalDuty([
                additionalDuty[0],
                additionalDuty[1],
                !additionalDuty[2],
                additionalDuty[3],
              ]);
            }}
          >
            <Ionicons
              name={additionalDuty[2] ? "checkbox" : "square-outline"}
              size={22}
              color="white"
              style={{ paddingRight: 8 }}
            />
            <Text className="font-[aurebesh] text-white">$</Text>
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">
              10,000
            </Text>
            <Text className="px-1 text-white font-[Elektra] pt-0.5">
              for a reduction of
            </Text>
            <Ionicons name="dice" size={12} color="white" />
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">5.</Text>
          </Pressable>
          <Pressable
            className="flex-row items-center w-full py-1"
            onPress={() => {
              setAdditionalDuty([
                additionalDuty[0],
                additionalDuty[1],
                additionalDuty[2],
                !additionalDuty[3],
              ]);
            }}
          >
            <Ionicons
              name={additionalDuty[3] ? "checkbox" : "square-outline"}
              size={22}
              color="white"
              style={{ paddingRight: 8 }}
            />
            <Text className="font-[aurebesh] text-white">$</Text>
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">
              25,000
            </Text>
            <Text className="px-1 text-white font-[Elektra] pt-0.5">
              for a reduction of
            </Text>
            <Ionicons name="dice" size={12} color="white" />
            <Text className="pl-0.5 text-white font-[Elektra] pt-0.5">10.</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default DutyPicker;
