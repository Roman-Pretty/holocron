import { Colors } from "@/constants/Colors";
import { Skill } from "@/types/Types";
import React from "react";
import { Text, View } from "react-native";
import TriangleCorner from "@/components/shapes/TriangleCorner";

interface ImprovedSkillsProps {
  skills: Skill[];
}

const ImprovedSkills = ({ skills }: ImprovedSkillsProps) => {
  return (
    <View className="w-full mb-[2vh]">
      <View className="flex-row justify-end">
        <View className="bg-box w-[100%]">
          <Text className="pl-[52px] pt-[8px] text-lg text-white font-[Elektra] capitalize">
            Improved Skills
          </Text>
        </View>
        <TriangleCorner
          style={{
            transform: [{ rotate: "-90deg" }],
            borderTopWidth: "40px",
            borderRightWidth: "40px",
            borderTopColor: Colors.global.box,
          }}
        />
      </View>
      <View className="bg-box p-3">
        <View className="flex-row">
          <View className="w-full flex border-t-2 border-statblockbackground py-[1.5vh]">
            {skills.filter(skill => skill.level > 0).map((skill, index) => (
              <View key={index} className="flex-1 flex-row justify-between items-center">
                <Text className="text-white font-semibold text-md">{skill.name}</Text>
                <Text className="text-white font-semibold text-md">{skill.level}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ImprovedSkills;
