import { View, Text } from "react-native";
import React from "react";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import { CharacterContext } from "@/contexts/CharacterContext";
import { useContext } from "react";

const WeaponCard = () => {
  const { character } = useContext(CharacterContext);

  return (
    <View className="mx-2 mt-4">
      <View className="flex-row">
        <View className="bg-heading3 flex-1 flex-row items- pt-2 pl-2">
          <Text className="text-white text-left text-md font-[Elektra] text-md">
            Weapons
          </Text>
        </View>
        <TriangleCorner
          style={{
            transform: [{ rotate: "-90deg" }],
            borderTopWidth: 22,
            borderRightWidth: 22,
            borderTopColor: Colors.global.heading3,
          }}
        />
      </View>
      <View className="bg-heading3 p-2" />
    </View>
  );
};

export default WeaponCard;
