import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { Obligation } from '@/constants/Motivations';
  
interface ObligationPickerProps {
  obligations: Obligation[];
  selectedObligation: Obligation | null;
  setSelectedObligation: (obligation: Obligation | null) => void;
  obligation: boolean;
  setObligation: (value: boolean) => void;
  additionalObligation: boolean[];
  setAdditionalObligation: (values: boolean[]) => void;
  calculateObligationCost: () => number;
  obligationCost: number;
}

const ObligationPicker: React.FC<ObligationPickerProps> = ({
  obligations,
  selectedObligation,
  setSelectedObligation,
  obligation,
  setObligation,
  additionalObligation,
  setAdditionalObligation,
  calculateObligationCost,
  obligationCost,
}) => {
  return (
    <View className={`mb-[2vh] p-2 bg-[#663d30]`}>
      <View className="flex-row justify-between">
        <Text className={`text-xl font-[Elektra] ${obligation ? "text-white" : "text-gray-300"}`}>
          Obligation
        </Text>
        <Switch
          trackColor={{ false: "#f0efee", true: "#f0efee" }}
          thumbColor={"#663d30"}
          ios_backgroundColor="#f0efee"
          onValueChange={() => {
            setSelectedObligation(null);
            setAdditionalObligation([false, false, false, false]);
            setObligation(!obligation);
          }}
          value={obligation}
        />
      </View>
      {obligation && (
        <>
          <Text className={`py-[1vh] text-white`}>
            Rolled for each session, your obligation represents a debt or
            setback your character must overcome.
          </Text>
          <View className="w-full bg-white p-2 self-center">
            <RNPickerSelect
              onValueChange={(value) =>
                setSelectedObligation(
                  obligations.find((item) => item.value === value) || null
                )
              }
              items={obligations}
              disabled={!obligation}
              value={selectedObligation?.value}
              darkTheme
              Icon={() => <Ionicons name="chevron-down" size={24} color="#6b7280" />}
            />
          </View>

          <Text className={`pt-[1vh] pb-[4vh] text-gray-200`}>
            {selectedObligation
              ? selectedObligation.desc
              : "Select an obligation to acquire it and read its description."}
          </Text>

          <View className="border-t-2 border-statblockbackground">
            <Text className={`font-[Elektra] text-lg pt-[2vh] text-white `}>Benefits</Text>
          </View>
          <Text className={`py-[1vh] text-white`}>
            You may take on more obligation for additional benefits, but you
            may only take up to double your initial obligation.
          </Text>
          <View className="pt-[2vh]">
            <View className="flex-row justify-between bg-statblockbackground p-2">
              <Text className={`font-[Elektra] text-white text-lg text-left w-[33%]`}>Benefit</Text>
              <Text className={`font-[Elektra] text-white text-lg text-center w-[33%]`}>Cost</Text>
              <Text className={`font-[Elektra] text-white text-lg text-right w-[33%]`}>Selected</Text>
            </View>

            <TouchableOpacity
              className="flex-row justify-between py-[1vh] px-2 bg-white"
              onPress={() => {
                setAdditionalObligation([
                  !additionalObligation[0],
                  additionalObligation[1],
                  additionalObligation[2],
                  additionalObligation[3],
                ]);
              }}
            >
              <Text className={` text-black text-left w-[33%]`}>+5 Experience</Text>
              <Text className={` text-black text-center w-[33%]`}>+5 Obligation</Text>
              <View className="flex-row justify-end w-[33%]">
                <Checkbox
                  color={"#000"}
                  onValueChange={() => {
                    setAdditionalObligation([
                      !additionalObligation[0],
                      additionalObligation[1],
                      additionalObligation[2],
                      additionalObligation[3],
                    ]);
                  }}
                  value={additionalObligation[0]}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row justify-between py-[1vh] px-2 bg-gray-200"
              onPress={() => {
                setAdditionalObligation([
                  additionalObligation[0],
                  !additionalObligation[1],
                  additionalObligation[2],
                  additionalObligation[3],
                ]);
              }}
            >
              <Text className={` text-black text-left w-[33%]`}>+10 Experience</Text>
              <Text className={` text-black text-center w-[33%]`}>+10 Obligation</Text>
              <View className="flex-row justify-end w-[33%]">
                <Checkbox
                  color={"#000"}
                  onValueChange={() => {
                    setAdditionalObligation([
                      additionalObligation[0],
                      !additionalObligation[1],
                      additionalObligation[2],
                      additionalObligation[3],
                    ]);
                  }}
                  value={additionalObligation[1]}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row justify-between py-[1vh] px-2 bg-white"
              onPress={() => {
                setAdditionalObligation([
                  additionalObligation[0],
                  additionalObligation[1],
                  !additionalObligation[2],
                  additionalObligation[3],
                ]);
              }}
            >
              <Text className={` text-black text-left w-[33%]`}>+1000 Credits</Text>
              <Text className={` text-black text-center w-[33%]`}>+5 Obligation</Text>
              <View className="flex-row justify-end w-[33%]">
                <Checkbox
                  color={"#000"}
                  onValueChange={() => {
                    setAdditionalObligation([
                      additionalObligation[0],
                      additionalObligation[1],
                      !additionalObligation[2],
                      additionalObligation[3],
                    ]);
                  }}
                  value={additionalObligation[2]}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              className="flex-row justify-between py-[1vh] px-2 bg-gray-200"
              onPress={() => {
                setAdditionalObligation([
                  additionalObligation[0],
                  additionalObligation[1],
                  additionalObligation[2],
                  !additionalObligation[3],
                ]);
              }}
            >
              <Text className={` text-black text-left w-[33%]`}>+2500 Credits</Text>
              <Text className={` text-black text-center w-[33%]`}>+10 Obligation</Text>
              <View className="flex-row justify-end w-[33%]">
                <Checkbox
                  color={"#000"}
                  onValueChange={() => {
                    setAdditionalObligation([
                      additionalObligation[0],
                      additionalObligation[1],
                      additionalObligation[2],
                      !additionalObligation[3],
                    ]);
                  }}
                  value={additionalObligation[3]}
                />
              </View>
            </TouchableOpacity>
            <View className="self-end">
              <Text className="text-white font-[Elektra] py-[2vh]">
                Total Obligation: {calculateObligationCost()}/{obligationCost * 2}
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default ObligationPicker;
