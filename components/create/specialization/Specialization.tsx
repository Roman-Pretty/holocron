import React from "react";
import { FlatList } from "react-native";
import SpecializationItem from "./SpecializationItem";
import { Career, Specialization } from "@/constants/Types";

interface SpecializationProps {
  selectedCareer: Career | null;
  selectedSpecialization: Specialization | null;
  setSelectedSpecialization: (specialization: Specialization) => void;
}

const SpecializationComponent = ({
  selectedCareer,
  selectedSpecialization,
  setSelectedSpecialization,
}: SpecializationProps) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={selectedCareer ? selectedCareer.specializations : null}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <SpecializationItem
          specialization={item}
          selectedSpecialization={selectedSpecialization}
          setSelectedSpecialization={setSelectedSpecialization}
        />
      )}
      windowSize={3}
    />
  );
};

export default SpecializationComponent;
