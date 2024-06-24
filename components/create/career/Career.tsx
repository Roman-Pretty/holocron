import CareerData from "@/constants/CareerData";
import { Career } from "@/types/Types";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ViewToken, View } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import CareerItem from "./CareerItem";

interface CareerProps {
  selectedCareer: Career | null;
  setSelectedCareer: (career: Career) => void;
}

const CareerElement = ({ selectedCareer, setSelectedCareer }: CareerProps) => {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  //TODO: filter out force careers that are not available to Droids
  return (
    <Animated.FlatList
      data={CareerData}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      onViewableItemsChanged={({ viewableItems: vItems }) => {
        viewableItems.value = vItems;
      }}
      renderItem={({ item }) => (
        <CareerItem
          key={item.name}
          viewableItems={viewableItems}
          career={item}
          selectedCareer={selectedCareer}
          setSelectedCareer={setSelectedCareer}
        />
      )}
    />
  );
};

export default CareerElement;
