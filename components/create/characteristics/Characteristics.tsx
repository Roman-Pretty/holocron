import { InitialPlayerStateInterface } from "@/constants/InitialPlayerState";
import React from "react";
import { FlatList } from "react-native";
import CharacteristicItem from "./CharacteristicItem";

interface CharacteristicsProps {
  state: InitialPlayerStateInterface;
  setState: (key: string, value: any) => void;
}

const CharacteristicsElement = ({
  state,
  setState
}: CharacteristicsProps) => {

  return (
    <FlatList
      data={state.characteristics}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <CharacteristicItem
          index={index}
          state={state}
          setState={setState}
        />
      )}
    />
  );
};

export default CharacteristicsElement;
