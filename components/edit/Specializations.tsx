import CareerData from "@/constants/CareerData";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CareerDropdown from "./CareerDropdown";

const Specializations = () => {
  return (
    <View className="mx-2 flex-1">
      <FlatList
      contentContainerStyle={{ width: "100%" }}
        data={CareerData}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) => <CareerDropdown career={item} />}
      />
    </View>
  );
};

export default Specializations;
