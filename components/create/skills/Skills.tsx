import { View, Text, FlatList } from "react-native";
import React from "react";
import SkillItem from "./SkillItem";
import { Ionicons } from "@expo/vector-icons";
import { Career, Skill, Specialization, Species } from "@/types/Types";
import { Colors } from "@/constants/Colors";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { ScrollView } from "react-native-gesture-handler";
import { InitialPlayerStateInterface } from "@/constants/InitialPlayerState";

interface SkillsProps {
  state: InitialPlayerStateInterface;
  setState: (key: string, value: any) => void;
}

const Skills = ({
  state,
  setState
}: SkillsProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-6 mb-2 bg-box rounded-lg flex-row items-center justify-between">
        <Ionicons name="information-circle" size={24} color="#fff" />
        <Text className="text-white font-bold text-xs px-4">
          Career and Specialization skills are marked with a tick.
        </Text>
      </View>
      <View className="rounded-lg bg-heading3 py-6 mb-2">
        <Text className="text-xs font-bold text-white ml-6 mb-6">COMBAT SKILLS</Text>
        {state.skills.slice(0, 6).map((skill, index) => (
            <SkillItem
                key={index}
                index={index}
                state={state}
                setState={setState}
                skill={skill}
            />
        ))}
      </View>

      <View className="rounded-lg bg-neutral-800 py-6 mb-2">
        <Text className="text-xs font-bold text-white ml-6 mb-6">SOCIAL SKILLS</Text>
        {state.skills.slice(6, 11).map((skill, index) => (
            <SkillItem
            key={index}
            index={index}
            state={state}
            setState={setState}
            skill={skill}
        />
        ))}
      </View>

      <View className="rounded-lg bg-orange-800 py-6 mb-2">
        <Text className="text-xs font-bold text-white ml-6 mb-6">KNOWLEDGE SKILLS</Text>
        {state.skills.slice(11, 18).map((skill, index) => (
            <SkillItem
            key={index}
            index={index}
            state={state}
            setState={setState}
            skill={skill}
        />
        ))}
      </View>

      <View className="rounded-lg bg-box py-6 mb-2">
        <Text className="text-xs font-bold text-white ml-6 mb-6">GENERAL SKILLS</Text>
        {state.skills.slice(18).map((skill, index) => (
            <SkillItem
            key={index}
            index={index}
            state={state}
            setState={setState}
            skill={skill}
        />
        ))}
      </View>

    </ScrollView>
  );
};

export default Skills;
