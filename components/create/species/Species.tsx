import SpeciesData from "@/constants/SpeciesData";
import { Species } from "@/types/Types";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, ViewToken } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import SpeciesItem from "./SpeciesItem";

interface SpeciesProps {
  selectedSpecies: Species | null;
  setSelectedSpecies: (species: Species) => void;
  setSelectedBonusSkill: (skill: string) => void;
}

export default function SpeciesElement({
  selectedSpecies,
  setSelectedSpecies,
  setSelectedBonusSkill,
}: SpeciesProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  const viewableItems = useSharedValue<ViewToken[]>([]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" color="#000" />
      </View>
    );
  }

  return (
    <Animated.FlatList
      data={SpeciesData}
      keyExtractor={(item, index) => index.toString()}
      onViewableItemsChanged={({ viewableItems: vItems }) => {
        viewableItems.value = vItems;
      }}
      renderItem={({ item }) => (
        <SpeciesItem
          key={item.species}
          viewableItems={viewableItems}
          setSelectedBonusSkill={setSelectedBonusSkill}
          species={item}
          selectedSpecies={selectedSpecies}
          setSelectedSpecies={setSelectedSpecies}
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};
