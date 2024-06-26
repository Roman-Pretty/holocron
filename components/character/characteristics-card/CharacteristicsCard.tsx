import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import { CharacterContext } from "@/contexts/CharacterContext";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import Characteristic from "../../Characteristic";

const CombatSkills = () => {
  const { character } = useContext(CharacterContext);

  return (
    <View
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
      }}
    >
      <View className=" mt-1 -z-10 flex-row">
        <TriangleCorner
          style={{
            transform: [{ rotate: "180deg" }],
            borderTopWidth: 20,
            borderRightWidth: 20,
            borderTopColor: Colors.global.neutral800,
          }}
        />
        <View
          className="bg-neutral-800 flex-1
      "
        />
        <TriangleCorner
          style={{
            transform: [{ rotate: "-90deg" }],
            borderTopWidth: 20,
            borderRightWidth: 20,
            borderTopColor: Colors.global.neutral800,
          }}
        />
      </View>

      <View className="bg-neutral-800  pb-3 flex-row justify-evenly">
        <Characteristic
          borderWidth={1.6}
          title="Brawn"
          value={character?.data.characteristics.brawn ?? 0}
          scale={12}
        />
        <Characteristic
          borderWidth={1.6}
          title="Agility"
          value={character?.data.characteristics.agility ?? 0}
          scale={12}
        />
        <Characteristic
          borderWidth={1.6}
          title="Intellect"
          value={character?.data.characteristics.intellect ?? 0}
          scale={12}
        />
        <Characteristic
          borderWidth={1.6}
          title="Cunning"
          value={character?.data.characteristics.cunning ?? 0}
          scale={12}
        />
        <Characteristic
          borderWidth={1.6}
          title="Willpower"
          value={character?.data.characteristics.willpower ?? 0}
          scale={12}
        />
        <Characteristic
          borderWidth={1.6}
          title="Presence"
          value={character?.data.characteristics.presence ?? 0}
          scale={12}
        />
      </View>
      <View className=" flex-row -mt-[1]">
        <TriangleCorner
          style={{
            transform: [{ rotate: "90deg" }],
            borderTopWidth: 20,
            borderRightWidth: 20,
            borderTopColor: Colors.global.neutral800,
          }}
        />
        <View className="bg-neutral-800 flex-1 flex-row items-center justify-start pl-2" />
        <TriangleCorner
          style={{
            transform: [{ rotate: "0deg" }],
            borderTopWidth: 20,
            borderRightWidth: 20,
            borderTopColor: Colors.global.neutral800,
          }}
        />
      </View>
    </View>
  );
};

export default CombatSkills;
