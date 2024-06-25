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
    <View className="w-full mb-2 bg-box p-6 pb-8 rounded-lg">
      <Text className="font-[Elektra] text-white text-xl w-full text-center mb-6">
        Improved Skills
      </Text>
      <View className="flex-row">
        <View className="w-full">
          {skills
            .filter((skill) => skill.level > 0)
            .map((skill, index) => (
              <View
                key={index}
                className="flex-1 flex-row justify-between items-center"
              >
                <Text className="text-white font-semibold text-md">
                  {skill.name}
                </Text>
                <Text className="text-white font-semibold text-md">
                  {skill.level}
                </Text>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

export default ImprovedSkills;
