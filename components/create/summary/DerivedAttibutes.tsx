import React from "react";
import { View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import SpeciesCharacteristic from "@/components/create/species/SpeciesCharacteristic";
import { Species, Characteristic } from "@/constants/Types";

interface DerivedAttributesProps {
  characteristics: Characteristic[];
  species: Species | null;
}

const DerivedAttributes = ({ characteristics, species }: DerivedAttributesProps) => {
  return (
    <View className="w-full mb-[2vh]">
      <View className="flex-row justify-end">
        <View className="bg-heading3 w-[100%]">
          <Text className="pl-[52px] pt-[8px] text-lg text-white font-[Elektra] capitalize">
            Derived Attributes
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
          <View className="w-full flex flex-row justify-evenly items-center flex-wrap border-t-2 border-statblockbackground py-[1.5vh]">
            <SpeciesCharacteristic
              title="Wound Threshold"
              level={characteristics[0].level + (species ? species?.woundThreshold : 0)}
            />
            <SpeciesCharacteristic
              title="Strain Threshold"
              level={characteristics[4].level + (species ? species?.strainThreshold : 0)}
            />
            <SpeciesCharacteristic
              title="Soak Level"
              level={species?.species === "Droid" ? characteristics[0].level + 1 : characteristics[0].level}
            />
            <SpeciesCharacteristic
              title="Encum. Level"
              level={characteristics[0].level + 5}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DerivedAttributes;
