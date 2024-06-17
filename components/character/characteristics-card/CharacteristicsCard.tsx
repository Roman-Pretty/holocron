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
      <View className="mx-2 mt-[1vh] -z-10 flex-row">
        <TriangleCorner
          style={{
            transform: [{ rotate: "180deg" }],
            borderTopWidth: 20,
            borderRightWidth: 20,
            borderTopColor: Colors.global.box,
          }}
        />
        <View
          className="bg-box flex-1
      "
        />
        <TriangleCorner
          style={{
            transform: [{ rotate: "-90deg" }],
            borderTopWidth: 20,
            borderRightWidth: 20,
            borderTopColor: Colors.global.box,
          }}
        />
      </View>

      <View className="bg-box mx-2 pb-3 flex-row justify-evenly">
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
      <View className="mx-2 flex-row -mt-[1]">
        <TriangleCorner
          style={{
            transform: [{ rotate: "90deg" }],
            borderTopWidth: 20,
            borderRightWidth: 20,
            borderTopColor: Colors.global.box,
          }}
        />
        <View className="bg-box flex-1 flex-row items-center justify-start pl-2" />
        <TriangleCorner
          style={{
            transform: [{ rotate: "0deg" }],
            borderTopWidth: 20,
            borderRightWidth: 20,
            borderTopColor: Colors.global.box,
          }}
        />
      </View>
    </View>
  );
};

export default CombatSkills;
