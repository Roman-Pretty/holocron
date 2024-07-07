import CareerData from "@/constants/CareerData";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CareerDropdown from "./CareerDropdown";
import { Specialization } from "@/types/Types";

const Specializations = ({
  newSpecializations,
  setNewSpecializations,
}: {
  newSpecializations: Specialization[];
  setNewSpecializations: (specializations: Specialization[]) => void;
}) => {
  return (
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
  );
};

export default Specializations;
