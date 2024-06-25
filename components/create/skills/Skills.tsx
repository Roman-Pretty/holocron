import { View, Text, FlatList } from "react-native";
import React from "react";
import SkillItem from "./SkillItem";
import { Ionicons } from "@expo/vector-icons";
import { Career, Skill, Specialization, Species } from "@/types/Types";
import { Colors } from "@/constants/Colors";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { ScrollView } from "react-native-gesture-handler";

interface SkillsProps {
  skills: Skill[];
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
  career: Career | null;
  specialization: Specialization | null;
  checkedCareerSkills: { [key: string]: boolean };
  checkedSpecializationSkills: { [key: string]: boolean };
  species: Species | null;
  selectedBonusSkill: string | null;
}

const Skills = ({
  selectedBonusSkill,
  species,
  skills,
  setSkills,
  career,
  specialization,
  checkedCareerSkills,
  checkedSpecializationSkills,
}: SkillsProps) => {
  return (
    <ScrollView>
        <View className="p-6 mb-2 bg-box rounded-lg flex-row items-center justify-between">
        <Ionicons name="information-circle" size={24} color="#fff" />
        <Text className="text-white font-bold text-xs px-4">
          Career and Specialization skills are marked with a tick.
        </Text>
      </View>
      <View className="rounded-lg bg-heading3 py-6 mb-2">
        <Text className="text-xs font-bold text-white ml-6 mb-6">COMBAT SKILLS</Text>
        {skills.slice(0, 6).map((skill, index) => (
            <SkillItem
                skill={skill}
                skills={skills}
                setSkills={setSkills}
                career={career}
                specialization={specialization}
                checkedCareerSkills={checkedCareerSkills}
                checkedSpecializationSkills={checkedSpecializationSkills}
                index={index}
                species={species}
                selectedBonusSkill={selectedBonusSkill}
                key={index}
            />
        ))}
      </View>

      <View className="rounded-lg bg-neutral-800 py-6 mb-2">
        <Text className="text-xs font-bold text-white ml-6 mb-6">SOCIAL SKILLS</Text>
        {skills.slice(6, 11).map((skill, index) => (
            <SkillItem
                skill={skill}
                skills={skills}
                setSkills={setSkills}
                career={career}
                specialization={specialization}
                checkedCareerSkills={checkedCareerSkills}
                checkedSpecializationSkills={checkedSpecializationSkills}
                index={index}
                species={species}
                selectedBonusSkill={selectedBonusSkill}
                key={index}
            />
        ))}
      </View>

      <View className="rounded-lg bg-orange-800 py-6 mb-2">
        <Text className="text-xs font-bold text-white ml-6 mb-6">KNOWLEDGE SKILLS</Text>
        {skills.slice(11, 17).map((skill, index) => (
            <SkillItem
                skill={skill}
                skills={skills}
                setSkills={setSkills}
                career={career}
                specialization={specialization}
                checkedCareerSkills={checkedCareerSkills}
                checkedSpecializationSkills={checkedSpecializationSkills}
                index={index}
                species={species}
                selectedBonusSkill={selectedBonusSkill}
                key={index}
            />
        ))}
      </View>

      <View className="rounded-lg bg-box py-6 mb-2">
        <Text className="text-xs font-bold text-white ml-6 mb-6">GENERAL SKILLS</Text>
        {skills.slice(17).map((skill, index) => (
            <SkillItem
                skill={skill}
                skills={skills}
                setSkills={setSkills}
                career={career}
                specialization={specialization}
                checkedCareerSkills={checkedCareerSkills}
                checkedSpecializationSkills={checkedSpecializationSkills}
                index={index}
                species={species}
                selectedBonusSkill={selectedBonusSkill}
                key={index}
            />
        ))}
      </View>

      {/* <FlatList
                data={skills}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <SkillItem
                            skill={item}
                            skills={skills}
                            setSkills={setSkills}
                            career={career}
                            specialization={specialization}
                            checkedCareerSkills={checkedCareerSkills}
                            checkedSpecializationSkills={checkedSpecializationSkills}
                            index={index}
                            species={species}
                            selectedBonusSkill={selectedBonusSkill}
                        />
                    );
                }}
            /> */}
    </ScrollView>
  );
};

export default Skills;
