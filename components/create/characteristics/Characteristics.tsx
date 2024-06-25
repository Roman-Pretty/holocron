import { Characteristic, Skill, Species } from "@/types/Types";
import React from "react";
import { FlatList } from "react-native";
import CharacteristicItem from "./CharacteristicItem";

interface CharacteristicsProps {
  characteristics: Characteristic[];
  setCharacteristics: React.Dispatch<React.SetStateAction<Characteristic[]>>;
  species: Species | null;
  skills: Skill[];
}

const CharacteristicsElement = ({
  characteristics,
  setCharacteristics,
  species,
  skills,
}: CharacteristicsProps) => {

  return (
    <FlatList
      data={characteristics}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <CharacteristicItem
          skills={skills}
          index={index}
          setCharacteristics={setCharacteristics}
          characteristic={item}
          species={species}
        />
      )}
    />
  );
};

export default CharacteristicsElement;
