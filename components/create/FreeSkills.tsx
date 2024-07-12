import { Colors } from "@/constants/Colors";
import { InitialPlayerStateInterface } from "@/constants/InitialPlayerState";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

interface FreeSkillsProps {
  state: InitialPlayerStateInterface;
  setState: (key: string, value: any) => void;
}

const FreeSkills = ({
  setState,
  state: {
    species,
    career,
    specialization,
    checkedCareerSkills,
    checkedSpecializationSkills,
    skills,
  },
}: FreeSkillsProps) => {
  const maxCareerSkills =
    species && species.species === "Droid"
      ? 6
      : career && career.forceSensitive
      ? 3
      : 4;
  const maxSpecializationSkills =
    species && species.species === "Droid" ? 3 : 2;

  const careerSkillCount =
    Object.values(checkedCareerSkills).filter(Boolean).length;
  const specializationSkillCount = Object.values(
    checkedSpecializationSkills
  ).filter(Boolean).length;

  const handleCareerCheckboxChange = (s: string) => {
    if (careerSkillCount >= maxCareerSkills && !checkedCareerSkills[s]) {
      return;
    }
    // First, update the checkedCareerSkills
    function calculateNewCareerSkills() {
      const updatedCheckedCareerSkills = {
        ...checkedCareerSkills,
        [s]: !checkedCareerSkills[s],
      };

      return updatedCheckedCareerSkills;
    }
    setState("checkedCareerSkills", calculateNewCareerSkills());

    // Next, update the skills based on the new checkedCareerSkills state
    function updateSkills() {
      return skills.map((skill) => {
        if (skill.name === s) {
          return {
            ...skill,
            level: checkedCareerSkills[s] ? skill.level - 1 : skill.level + 1,
          };
        }
        return skill;
      });
    }
    setState("skills", updateSkills());
  };

  const handleSpecializationCheckboxChange = (s: string) => {
    if (
      specializationSkillCount >= maxSpecializationSkills &&
      !checkedSpecializationSkills[s]
    ) {
      return;
    }
    // First, update the checkedSpecializationSkills
    function calculateNewSpecializationSkills() {
      const updatedCheckedSpecializationSkills = {
        ...checkedSpecializationSkills,
        [s]: !checkedSpecializationSkills[s],
      };

      return updatedCheckedSpecializationSkills;
    }
    setState("checkedSpecializationSkills", calculateNewSpecializationSkills());

    // Next, update the skills based on the new checkedSpecializationSkills state
    function updateSkills() {
      return skills.map((skill) => {
        if (skill.name === s) {
          return {
            ...skill,
            level: checkedSpecializationSkills[s]
              ? skill.level - 1
              : skill.level + 1,
          };
        }
        return skill;
      });
    }
    setState("skills", updateSkills());
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 8 }}
    >
      <View className="p-6 mb-2 bg-box rounded-lg flex-row items-center justify-between">
        <Ionicons name="information-circle" size={24} color="#fff" />
        <Text className="text-white font-bold text-xs pl-4">
          Selected skills may gain one free level at the start of the game.
        </Text>
      </View>
      <View className="bg-heading3 p-6 rounded-lg mb-2">
        <View className="flex flex-row justify-between items-center mb-2">
          <Text className="text-white font-bold">Career Skills</Text>
          <Text
            className={`${
              careerSkillCount >= maxCareerSkills
                ? "text-statblockbackground"
                : "text-white"
            } font-bold`}
          >
            {careerSkillCount}/{maxCareerSkills}
          </Text>
        </View>

        {career &&
          career.skills.map((skill, index) => {
            if (
              skills.find((s) => s.name === skill)?.level === 2 &&
              !checkedCareerSkills[skill]
            ) {
              return (
                <View key={index} className="flex flex-row items-center">
                  <Ionicons
                    name="ban"
                    color={Colors.global.statblockbackground}
                    size={22}
                  />
                  <Text className="text-white pl-2 font-semibold">{skill}</Text>
                  <Text className="text-white pl-2 font-semibold">
                    (Already Max Level)
                  </Text>
                </View>
              );
            }
            return (
              <Pressable
                onPress={() => handleCareerCheckboxChange(skill)}
                key={index}
                className="flex flex-row items-center py-[0.4vh]"
              >
                <Ionicons
                  name={
                    checkedCareerSkills[skill] ? "checkbox" : "square-outline"
                  }
                  color={
                    checkedCareerSkills[skill]
                      ? Colors.global.statblockbackground
                      : "#fff"
                  }
                  size={22}
                />
                <Text className="text-white font-semibold pl-2">{skill}</Text>
              </Pressable>
            );
          })}
      </View>

      <View className="bg-neutral-800 p-6 rounded-lg mb-2">
        <View className="flex flex-row justify-between items-center mb-2">
          <Text className="text-white font-bold">Specialization Skills</Text>
          <Text
            className={`${
              specializationSkillCount >= maxSpecializationSkills
                ? "text-statblockbackground"
                : "text-white"
            } font-bold`}
          >
            {specializationSkillCount}/{maxSpecializationSkills}
          </Text>
        </View>

        {specialization &&
          specialization.skills.map((skill, index) => {
            if (
              skills.find((s) => s.name === skill)?.level === 2 &&
              !checkedSpecializationSkills[skill]
            ) {
              return (
                <View key={index} className="flex flex-row items-center">
                  <Ionicons
                    name="ban"
                    color={Colors.global.statblockbackground}
                    size={22}
                  />
                  <Text className="text-white pl-2 font-semibold">{skill}</Text>
                  <Text className="text-white pl-2 font-semibold">
                    (Already Max Level)
                  </Text>
                </View>
              );
            }
            return (
              <Pressable
                onPress={() => handleSpecializationCheckboxChange(skill)}
                key={index}
                className="flex flex-row items-center py-[0.4vh]"
              >
                <Ionicons
                  name={
                    checkedSpecializationSkills[skill]
                      ? "checkbox"
                      : "square-outline"
                  }
                  color={
                    checkedSpecializationSkills[skill]
                      ? Colors.global.statblockbackground
                      : "#fff"
                  }
                  size={22}
                />
                <Text className="text-white font-semibold pl-2">{skill}</Text>
              </Pressable>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default FreeSkills;
