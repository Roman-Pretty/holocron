import CareerData from "@/constants/CareerData";
import { CharacterContext } from "@/contexts/CharacterContext";
import { Specialization } from "@/types/Types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CareerDropdown from "./CareerDropdown";

const Specializations = ({
  newSpecializations,
  setNewSpecializations,
}: {
  newSpecializations: Specialization[];
  setNewSpecializations: (specializations: Specialization[]) => void;
}) => {
  const { character } = React.useContext(CharacterContext);
  function calculateCost(career: boolean) {
    return (
      10 *
        (newSpecializations.length +
          (character?.data?.specializations.length ?? 0) +
          1) +
      (career ? 0 : 10)
    );
  }

  return (
    <>
      <View className="mx-2 mb-2">
        <View className="w-full p-6 bg-box rounded-lg flex-row items-center justify-between">
          <Ionicons name="information-circle" size={24} color="#fff" />
          <View className="w-5/6">
            <View className="flex-row items-center justify-between">
              <Text className="text-white font-bold text-xs">
                Career Specializations:
              </Text>
              <View className="flex-row items-center">
                <Text className="text-white font-bold text-xs pr-1">
                  {calculateCost(true)}
                </Text>
                <Ionicons name="locate" size={16} color="#fff" />
              </View>
            </View>

            <View className="flex-row items-center justify-between mt-1">
              <Text className="text-white font-bold text-xs">
                Non-Career Specializations:
              </Text>
              <View className="flex-row items-center">
                <Text className="text-white font-bold text-xs pr-1">
                  {calculateCost(false)}
                </Text>
                <Ionicons name="locate" size={16} color="#fff" />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="mx-2 flex-1 overflow-hidden rounded-lg">
        <FlatList
          contentContainerStyle={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          data={CareerData}
          keyExtractor={(item) => item.name.toString()}
          renderItem={({ item }) => (
            <CareerDropdown
              newSpecializations={newSpecializations}
              setNewSpecializations={setNewSpecializations}
              career={item}
            />
          )}
        />
      </View>
    </>
  );
};

export default Specializations;
