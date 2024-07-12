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
  const [loading, setLoading] = useState(true);
  const viewableItems = useSharedValue<ViewToken[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" color="#000" />
      </View>
    );
  }

  //TODO: filter out force careers that are not available to Droids
  return (
    <Animated.FlatList
      data={CareerData}
      keyExtractor={(item, index) => index.toString()}
      onViewableItemsChanged={({ viewableItems: vItems }) => {
        viewableItems.value = vItems;
      }}
      contentContainerStyle={{ paddingTop: 8 }}
      renderItem={({ item }) => (
        <CareerItem
          key={item.name}
          viewableItems={viewableItems}
          career={item}
          selectedCareer={selectedCareer}
          setSelectedCareer={setSelectedCareer}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CareerElement;
