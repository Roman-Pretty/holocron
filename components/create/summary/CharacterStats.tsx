import CharacteristicElement from "@/components/Characteristic";
import { Characteristic } from "@/types/Types";
import React from "react";
import { Text, View } from "react-native";

interface CharacterStatsProps {
  characteristics: Characteristic[];
}

const CharacterStats = ({ characteristics }: CharacterStatsProps) => {
  return (
    <View className="w-full mb-2 bg-heading3 p-6 rounded-lg">
      <Text className="font-[Elektra] text-white text-xl w-full text-center mb-6">
        Characteristics
      </Text>
      <View className="flex-row">
        <View className="w-full flex flex-row justify-between items-start flex-wrap mb-4">
          <CharacteristicElement
            title="Brawn"
            value={characteristics[0].level}
            scale={10}
            borderWidth={1}
          />
          <CharacteristicElement
            title="Agility"
            value={characteristics[1].level}
            scale={10}
            borderWidth={1}
          />
          <CharacteristicElement
            title="Intellect"
            value={characteristics[2].level}
            scale={10}
            borderWidth={1}
          />
          <CharacteristicElement
            title="Cunning"
            value={characteristics[3].level}
            scale={10}
            borderWidth={1}
          />
          <CharacteristicElement
            title="Willpower"
            value={characteristics[4].level}
            scale={10}
            borderWidth={1}
          />
          <CharacteristicElement
            title="Presence"
            value={characteristics[5].level}
            scale={10}
            borderWidth={1}
          />
        </View>
      </View>
    </View>
  );
};

export default CharacterStats;
