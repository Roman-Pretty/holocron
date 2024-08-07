import { CharacterContext } from "@/contexts/CharacterContext";
import { Skill } from "@/types/Types";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import SkillItem from "./SkillItem";

const Skills = ({
  newSkills,
  setNewSkills,
}: {
  newSkills: Skill[];
  setNewSkills: (skills: Skill[]) => void;
}) => {
  const { character, setCharacter } = React.useContext(CharacterContext);

  return (
    <View className="flex-1 rounded-lg mx-2 overflow-hidden">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="rounded-lg bg-heading3 py-6 mb-2">
          <Text className="text-xs font-bold text-white ml-6 mb-6">
            COMBAT SKILLS
          </Text>
          {newSkills.slice(0, 6).map((skill: Skill, index: number) => (
            <SkillItem
              key={index}
              index={index}
              newSkills={newSkills}
              setNewSkills={setNewSkills}
              skill={skill}
            />
          ))}
        </View>

        <View className="rounded-lg bg-neutral-800 py-6 mb-2">
          <Text className="text-xs font-bold text-white ml-6 mb-6">
            SOCIAL SKILLS
          </Text>
          {newSkills.slice(6, 11).map((skill: Skill, index: number) => (
            <SkillItem
              key={index}
              index={index + 6}
              newSkills={newSkills}
              setNewSkills={setNewSkills}
              skill={skill}
            />
          ))}
        </View>

        <View className="rounded-lg bg-orange-800 py-6 mb-2">
          <Text className="text-xs font-bold text-white ml-6 mb-6">
            KNOWLEDGE SKILLS
          </Text>
          {newSkills.slice(11, 18).map((skill: Skill, index: number) => (
            <SkillItem
              key={index}
              index={index + 11}
              newSkills={newSkills}
              setNewSkills={setNewSkills}
              skill={skill}
            />
          ))}
        </View>

        <View className="rounded-lg bg-box py-6 mb-2">
          <Text className="text-xs font-bold text-white ml-6 mb-6">
            GENERAL SKILLS
          </Text>
          {newSkills.slice(18).map((skill: Skill, index: number) => (
            <SkillItem
              key={index}
              index={index + 18}
              newSkills={newSkills}
              setNewSkills={setNewSkills}
              skill={skill}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Skills;
