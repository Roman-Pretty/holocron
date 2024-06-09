import SpeciesCharacteristic from "@/components/create/species/SmallCharacteristic";
import { Colors } from "@/constants/Colors";
import { Characteristic } from "@/constants/Types";
import React from "react";
import { Text, View } from "react-native";
import TriangleCorner from "@/components/shapes/TriangleCorner";

interface CharacterStatsProps {
  characteristics: Characteristic[];
}

const CharacterStats = ({ characteristics }: CharacterStatsProps) => {
  return (
    <View className="w-full mb-[2vh]">
      <View className="flex-row justify-end">
        <View className="bg-heading3 w-[100%]">
          <Text className="pl-[52px] pt-[8px] text-lg text-white font-[Elektra] capitalize">
            Characteristics
          </Text>
        </View>
        <TriangleCorner
          style={{
            transform: [{ rotate: "-90deg" }],
            borderTopWidth: "40px",
            borderRightWidth: "40px",
            borderTopColor: Colors.global.heading3,
          }}
        />
      </View>
      <View className="bg-heading3 p-3">
        <View className="flex-row">
          <View className="w-full flex flex-row justify-between items-center flex-wrap border-t-2 border-statblockbackground py-[1.5vh]">
            <SpeciesCharacteristic title="Brawn" level={characteristics[0].level} />
            <SpeciesCharacteristic title="Agility" level={characteristics[1].level} />
            <SpeciesCharacteristic title="Intellect" level={characteristics[2].level} />
            <SpeciesCharacteristic title="Cunning" level={characteristics[3].level} />
            <SpeciesCharacteristic title="Willpower" level={characteristics[4].level} />
            <SpeciesCharacteristic title="Presence" level={characteristics[5].level} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CharacterStats;
