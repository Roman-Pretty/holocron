import { Characteristic, Species } from "@/constants/Types";
import React from "react";
import { FlatList } from "react-native";
import CharacteristicItem from "./CharacteristicItem";

interface CharacteristicsProps {
  characteristics: Characteristic[];
  setCharacteristics: React.Dispatch<React.SetStateAction<Characteristic[]>>;
  species: Species | null;
}

const CharacteristicsElement = ({
  characteristics,
  setCharacteristics,
  species,
}: CharacteristicsProps) => {

  return (
    <FlatList
      data={characteristics}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <CharacteristicItem
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
