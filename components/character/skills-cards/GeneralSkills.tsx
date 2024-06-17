import { View, Text, FlatList } from "react-native";
import React from "react";
import { CharacterContext } from "@/contexts/CharacterContext";
import { useContext } from "react";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import SkillItem from "./SkillItem";

const GeneralSkills = () => {
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
      <View className="mx-2 mt-[1.5vh] flex-row">
      <TriangleCorner
          style={{
            transform: [{ rotate: "180deg" }],
            borderTopWidth: 38,
            borderRightWidth: 38,
            borderTopColor: Colors.global.box,
          }}
        />
        <View className="bg-box flex-1 flex-row items-center justify-center pt-2">
          <Text className="text-white text-center font-[Elektra] text-base">
            General Skills
          </Text>
        </View>
        <TriangleCorner
          style={{
            transform: [{ rotate: "-90deg" }],
            borderTopWidth: 38,
            borderRightWidth: 38,
            borderTopColor: Colors.global.box,
          }}
        />
      </View>
      <View className="bg-box mx-2">
        <View className="w-full p-2 flex-row">
          <Text className="text-white text-base font-[Elektra] text-start capitalize] w-5/12">
            Skill
          </Text>
          <Text className="text-white text-base font-[Elektra] text-center capitalize] w-2/12">
            Career
          </Text>
          <Text className="text-white text-base font-[Elektra] text-center capitalize] w-2/12">
            Level
          </Text>
          <Text className="text-white text-base font-[Elektra] text-center capitalize] w-3/12">
            Dice
          </Text>
        </View>
        {character?.data.skills.slice(18, 35).map((skill, index) => (
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
      <View className="mx-2 flex-row">
      <TriangleCorner
          style={{
            transform: [{ rotate: "90deg" }],
            borderTopWidth: 38,
            borderRightWidth: 38,
            borderTopColor: Colors.global.box,
          }}
        />
        <View className="bg-box flex-1 flex-row items-center justify-start pl-2"/>
        <TriangleCorner
          style={{
            transform: [{ rotate: "0deg" }],
            borderTopWidth: 38,
            borderRightWidth: 38,
            borderTopColor: Colors.global.box,
          }}
        />
       
        </View>
    </View>
  );
};

export default GeneralSkills;
