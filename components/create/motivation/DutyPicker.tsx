import React, { useState } from "react";
import { View, Text, Switch, Pressable } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Duty } from "@/constants/Motivations";

interface DutyPickerProps {
  duties: Duty[];
  selectedDuty: Duty | null;
  setSelectedDuty: (duty: Duty | null) => void;
  duty: boolean;
  setDuty: (value: boolean) => void;
  additionalDuty: boolean[];
  setAdditionalDuty: (values: boolean[]) => void;
  calculateDutyCost: () => number;
  dutyCost: number;
}

const DutyPicker: React.FC<DutyPickerProps> = ({
  duties,
  selectedDuty,
  setSelectedDuty,
  duty,
  setDuty,
  additionalDuty,
  setAdditionalDuty,
  calculateDutyCost,
  dutyCost,
}) => {
  return (
    <View className={`mb-[2vh] p-2 bg-[#ad252b]`}>
      <View className="flex-row justify-between">
        <Text
          className={`text-xl font-[Elektra] ${
            duty ? "text-white" : "text-gray-300"
          }`}
        >
          Duty
        </Text>
        <Switch
          trackColor={{ false: "#f0efee", true: "#f0efee" }}
          thumbColor={"#ad252b"}
          ios_backgroundColor="#f0efee"
          onValueChange={() => {
            setSelectedDuty(null);
            setAdditionalDuty([false, false, false, false]);
            setDuty(!duty);
          }}
          value={duty}
        />
      </View>
      {duty && (
        <>
          <Text className={`py-[1vh] text-white`}>
            Ranked out of 100, your duty represents your reputation or loyalty
            to a specific organization.
          </Text>
          <View className="w-full bg-white p-2 self-center">
            <RNPickerSelect
              onValueChange={(value) =>
                setSelectedDuty(
                  duties.find((item) => item.value === value) || null
                )
              }
              items={duties}
              disabled={!duty}
              darkTheme
              value={selectedDuty?.value}
              Icon={() => (
                <Ionicons name="chevron-down" size={24} color="#6b7280" />
              )}
            />
          </View>

          <Text className={`pt-[1vh] pb-[4vh] text-gray-200`}>
            {selectedDuty
              ? selectedDuty.desc
              : "Select a duty to acquire it and read its description."}
          </Text>

          <View className="border-t-2 border-statblockbackground">
            <Text className={`font-[Elektra] text-lg pt-[2vh] text-white `}>
              Benefits
            </Text>
          </View>
          <Text className={`py-[1vh] text-white`}>
            You may take on more duty for additional benefits, but you may not
            allow your duty to go below 0.
          </Text>
          <View className="pt-[2vh]">
            <View className="flex-row justify-between bg-statblockbackground p-2">
              <Text
                className={`font-[Elektra] text-white text-lg text-left w-[33%]`}
              >
                Benefit
              </Text>
              <Text
                className={`font-[Elektra] text-white text-lg text-center w-[33%]`}
              >
                Cost
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
                setAdditionalDuty([
                  !additionalDuty[0],
                  additionalDuty[1],
                  additionalDuty[2],
                  additionalDuty[3],
                ]);
              }}
            >
              <Text className={` text-black text-left w-[33%]`}>
                +5 Experience
              </Text>
              <Text className={` text-black text-center w-[33%]`}>-5 Duty</Text>
              <View className="flex-row justify-end w-[33%]">
                <Checkbox
                  color={"#000"}
                  onValueChange={() => {
                    setAdditionalDuty([
                      !additionalDuty[0],
                      additionalDuty[1],
                      additionalDuty[2],
                      additionalDuty[3],
                    ]);
                  }}
                  value={additionalDuty[0]}
                />
              </View>
            </Pressable>

            <Pressable
              className="flex-row justify-between py-[1vh] px-2 bg-gray-200"
              onPress={() => {
                setAdditionalDuty([
                  additionalDuty[0],
                  !additionalDuty[1],
                  additionalDuty[2],
                  additionalDuty[3],
                ]);
              }}
            >
              <Text className={` text-black text-left w-[33%]`}>
                +10 Experience
              </Text>
              <Text className={` text-black text-center w-[33%]`}>
                -10 Duty
              </Text>
              <View className="flex-row justify-end w-[33%]">
                <Checkbox
                  color={"#000"}
                  onValueChange={() => {
                    setAdditionalDuty([
                      additionalDuty[0],
                      !additionalDuty[1],
                      additionalDuty[2],
                      additionalDuty[3],
                    ]);
                  }}
                  value={additionalDuty[1]}
                />
              </View>
            </Pressable>

            <Pressable
              className="flex-row justify-between py-[1vh] px-2 bg-white"
              onPress={() => {
                setAdditionalDuty([
                  additionalDuty[0],
                  additionalDuty[1],
                  !additionalDuty[2],
                  additionalDuty[3],
                ]);
              }}
            >
              <Text className={` text-black text-left w-[33%]`}>
                +1000 Credits
              </Text>
              <Text className={` text-black text-center w-[33%]`}>-5 Duty</Text>
              <View className="flex-row justify-end w-[33%]">
                <Checkbox
                  color={"#000"}
                  onValueChange={() => {
                    setAdditionalDuty([
                      additionalDuty[0],
                      additionalDuty[1],
                      !additionalDuty[2],
                      additionalDuty[3],
                    ]);
                  }}
                  value={additionalDuty[2]}
                />
              </View>
            </Pressable>

            <Pressable
              className="flex-row justify-between py-[1vh] px-2 bg-gray-200"
              onPress={() => {
                setAdditionalDuty([
                  additionalDuty[0],
                  additionalDuty[1],
                  additionalDuty[2],
                  !additionalDuty[3],
                ]);
              }}
            >
              <Text className={` text-black text-left w-[33%]`}>
                +2500 Credits
              </Text>
              <Text className={` text-black text-center w-[33%]`}>
                -10 Duty
              </Text>
              <View className="flex-row justify-end w-[33%]">
                <Checkbox
                  color={"#000"}
                  onValueChange={() => {
                    setAdditionalDuty([
                      additionalDuty[0],
                      additionalDuty[1],
                      additionalDuty[2],
                      !additionalDuty[3],
                    ]);
                  }}
                  value={additionalDuty[3]}
                />
              </View>
            </Pressable>
            <View className="self-end">
              <Text className="text-white font-[Elektra] py-[2vh]">
                Total Duty: {calculateDutyCost()}/100
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default DutyPicker;
