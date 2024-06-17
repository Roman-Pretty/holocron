import { View, Text, FlatList } from "react-native";
import React from "react";
import { CharacterContext } from "@/contexts/CharacterContext";
import { useContext } from "react";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import SkillItem from "./SkillItem";

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
      <View className="mx-[6] -mt-24 flex-row">
        <TriangleCorner
          style={{
            transform: [{ rotate: "180deg" }],
            borderTopWidth: 38,
            borderRightWidth: 38,
            borderTopColor: Colors.global.neutral800,
          }}
        />
        <View className="bg-neutral-800 flex-1 flex-row items-center justify-center pt-2">
          <Text className="text-white text-center font-[Elektra] text-base">
            Social Skills
          </Text>
        </View>
        <TriangleCorner
          style={{
            transform: [{ rotate: "-90deg" }],
            borderTopWidth: 38,
            borderRightWidth: 38,
            borderTopColor: Colors.global.neutral800,
          }}
        />
      </View>
      <View className="bg-neutral-800 mx-[6] pb-20 pt-2">
        <View className="w-full p-2 flex-row">
          <Text className="text-white text-base font-[Elektra] text-start capitalize] w-5/12">
            Skill
          </Text>
          <Text className="text-white text-base font-[Elektra] text-center capitalize] w-3/12">
            Dice
          </Text>
          <Text className="text-white text-base font-[Elektra] text-center capitalize] w-2/12">
            Level
          </Text>
          <Text className="text-white text-base font-[Elektra] text-center capitalize] w-2/12">
            Career
          </Text>
        </View>
        {character?.data.skills.slice(6, 11).map((skill, index) => (
          <SkillItem
            key={index}
            index={index}
            skill={skill}
            career={character?.data.career}
            specializations={character?.data.specializations}
            characteristics={character?.data.characteristics}
          />
        ))}
      </View>
      <View className="mx-[6] flex-row">
        <TriangleCorner
          style={{
            transform: [{ rotate: "90deg" }],
            borderTopWidth: 38,
            borderRightWidth: 38,
            borderTopColor: Colors.global.neutral800,
          }}
        />
        <View className="bg-neutral-800 flex-1 flex-row items-center justify-start pl-2" />
        <TriangleCorner
          style={{
            transform: [{ rotate: "0deg" }],
            borderTopWidth: 38,
            borderRightWidth: 38,
            borderTopColor: Colors.global.neutral800,
          }}
        />
      </View>
    </View>
  );
};

export default CombatSkills;
