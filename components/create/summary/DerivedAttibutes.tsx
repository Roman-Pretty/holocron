import { Characteristic, Species } from "@/types/Types";
import CharacteristicElement from "@/components/Characteristic";

import React from "react";
import { Text, View } from "react-native";

interface DerivedAttributesProps {
  characteristics: Characteristic[];
  species: Species | null;
}

const DerivedAttributes = ({
  characteristics,
  species,
}: DerivedAttributesProps) => {
  const soak =
    species?.species === "Droid"
      ? characteristics[0].level + 1
      : characteristics[0].level;

  const woundThreshold =
    characteristics[0].level + (species ? species?.woundThreshold : 0);
  const strainThreshold =
    characteristics[4].level + (species ? species?.strainThreshold : 0);
  const encumbrance = characteristics[0].level + 5;

  return (
    <View className="w-full mb-2 bg-heading3 p-6 pb-8 rounded-lg">
      <Text className="font-[Elektra] text-white text-xl w-full text-center mb-6">
        Derived Attributes
      </Text>
      <View className="flex-row">
        <View className="w-full flex flex-row justify-between items-start flex-wrap mb-4">
          <CharacteristicElement
            title="Soak"
            value={soak}
            scale={12}
            borderWidth={1.6}
          />
          <CharacteristicElement
            title="Wound Threshold"
            value={woundThreshold}
            scale={12}
            borderWidth={1.6}
          />
          <CharacteristicElement
            title="Strain Threshold"
            value={strainThreshold}
            scale={12}
            borderWidth={1.6}
          />
          <CharacteristicElement
            title="Encum. Threshold"
            value={encumbrance}
            scale={12}
            borderWidth={1.6}
          />
        </View>
      </View>
    </View>
  );
};

export default DerivedAttributes;
