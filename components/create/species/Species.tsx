import SpeciesData from "@/constants/SpeciesData";
import { Species } from "@/types/Types";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import SpeciesItem from "./SpeciesItem";

interface SpeciesProps {
  selectedSpecies: Species | null;
  setSelectedSpecies: (species: Species) => void;
  setSelectedBonusSkill: (skill: string) => void;
}

const SpeciesElement = ({
  selectedSpecies,
  setSelectedSpecies,
  setSelectedBonusSkill,
}: SpeciesProps) => {
  const [loading, setLoading] = useState(false);

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

  return (
    <FlatList
      data={SpeciesData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <SpeciesItem
          setSelectedBonusSkill={setSelectedBonusSkill}
          species={item}
          selectedSpecies={selectedSpecies}
          setSelectedSpecies={setSelectedSpecies}
        />
      )}
      // windowSize={3}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SpeciesElement;
