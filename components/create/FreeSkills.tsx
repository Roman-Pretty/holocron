import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React from "react";
import { Pressable, Text, View, ScrollView } from "react-native";
import { Career, Skill, Species, Specialization } from "@/types/Types";
import { Colors } from "@/constants/Colors";
import TriangleCorner from "@/components/shapes/TriangleCorner";

interface FreeSkillsProps {
  species: Species | null;
  selectedCareer: Career | null;
  selectedSpecialization: Specialization | null;
  checkedCareerSkills: { [key: string]: boolean };
  setCheckedCareerSkills: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
  checkedSpecializationSkills: { [key: string]: boolean };
  setCheckedSpecializationSkills: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
  skills: Skill[];
}

const FreeSkills = ({
  species,
  selectedCareer,
  selectedSpecialization,
  checkedCareerSkills,
  setCheckedCareerSkills,
  checkedSpecializationSkills,
  setCheckedSpecializationSkills,
  skills,
}: FreeSkillsProps) => {
  const maxCareerSkills =
    species && species.species === "Droid"
      ? 6
      : selectedCareer && selectedCareer.forceSensitive
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
    setCheckedCareerSkills((prevState) => {
      if (prevState[s]) {
        const skill = skills.find((skill) => skill.name === s);
        if (skill) {
          skill.level -= 1;
        }
        return {
          ...prevState,
          [s]: false,
        };
      } else if (careerSkillCount < maxCareerSkills) {
        const skill = skills.find((skill) => skill.name === s);
        if (skill) {
          skill.level += 1;
        }
        return {
          ...prevState,
          [s]: true,
        };
      }
      return prevState;
    });
  };

  const handleSpecializationCheckboxChange = (s: string) => {
    setCheckedSpecializationSkills((prevState) => {
      if (prevState[s]) {
        const skill = skills.find((skill) => skill.name === s);
        if (skill) {
          skill.level -= 1;
        }
        return {
          ...prevState,
          [s]: false,
        };
      } else if (specializationSkillCount < maxSpecializationSkills) {
        const skill = skills.find((skill) => skill.name === s);
        if (skill) {
          skill.level += 1;
        }
        return {
          ...prevState,
          [s]: true,
        };
      }
      return prevState;
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="p-6 mb-2 bg-box rounded-lg flex-row items-center justify-between">
        <Ionicons name="information-circle" size={24} color="#fff" />
        <Text className="text-white font-bold text-xs pl-4">
          Selected skills may gain one free level at the start of the game.
        </Text>
      </View>
        <View className="bg-heading3 p-6 rounded-lg mb-2">
          <View className="flex flex-row justify-between items-center mb-2">
            <Text className="text-white font-bold">
              Career Skills
            </Text>
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

          {selectedCareer &&
            selectedCareer.skills.map((skill, index) => {
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
                    <Text className="text-white pl-2 font-semibold">
                      {skill}
                    </Text>
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
                  <Ionicons name={checkedCareerSkills[skill] ? "checkbox" : "square-outline"} 
                  color={checkedCareerSkills[skill] ? Colors.global.statblockbackground : "#fff"} size={22} />
                  <Text className="text-white font-semibold pl-2">
                    {skill}
                  </Text>
                </Pressable>
              );
            })}
      </View>



      <View className="bg-neutral-800 p-6 rounded-lg mb-2">
          <View className="flex flex-row justify-between items-center mb-2">
            <Text className="text-white font-bold">
              Specialization Skills
            </Text>
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

          {selectedSpecialization &&
            selectedSpecialization.skills.map((skill, index) => {
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
                    <Text className="text-white pl-2 font-semibold">
                      {skill}
                    </Text>
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
                  <Ionicons name={checkedSpecializationSkills[skill] ? "checkbox" : "square-outline"} 
                  color={checkedSpecializationSkills[skill] ? Colors.global.statblockbackground : "#fff"} size={22} />
                  <Text className="text-white font-semibold pl-2">
                    {skill}
                  </Text>
                </Pressable>
              );
            })}
      </View>
    </ScrollView>
  );
};

export default FreeSkills;
