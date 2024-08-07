import { View, Text } from "react-native";
import React from "react";
import Button from "@/components/form/Button";
import { Ionicons } from "@expo/vector-icons";
import { Career, Skill, Specialization, Species } from "@/types/Types";
import { InitialPlayerStateInterface } from "@/constants/InitialPlayerState";

interface SkillItemProps {
  state: InitialPlayerStateInterface;
  setState: (key: string, value: any) => void;
  skill: Skill;
  index: number;
}

const SkillItem = ({
  state: { skills, checkedCareerSkills, checkedSpecializationSkills, species, selectedSpeciesOption },
  setState,
  index,
  skill,
}: SkillItemProps) => {
  const [level, setLevel] = React.useState(skill.level);

  function increaseLevel() {
    setLevel(level + 1);
    skill.level += 1;
    setState("skills", [...skills]);
  }

  function decreaseLevel() {
    setLevel(level - 1);
    skill.level -= 1;
    setState("skills", [...skills]);
  }

  function downDisabled() {
    return (checkedCareerSkills[skill.name] ||
      checkedSpecializationSkills[skill.name] ||
      (species &&
        species.bonusSkills &&
        species.bonusSkills.includes(skill.name)) ||
        selectedSpeciesOption === skill.name) &&
      skill.level <=
        (checkedCareerSkills[skill.name] ? 1 : 0) +
          (checkedSpecializationSkills[skill.name] ? 1 : 0) +
          (species &&
          species.bonusSkills &&
          species.bonusSkills.includes(skill.name)
            ? 1
            : 0) +
          (selectedSpeciesOption === skill.name ? 1 : 0)
      ? true
      : skill.level <= 0
      ? true
      : false;
  }

  return (
    <View
      className={`${
        index % 2 === 0 && "bg-black/20"
      } py-2 px-6 flex-row items-center`}
    >
      <Text className="text-white text-xs font-[Elektra] capitalize w-6/12">
        {skill.name} ({skill.characteristic.name.substring(0, 3)})
      </Text>
      <Text className="text-white text-xs font-[Elektra] w-1/12">{level}</Text>
      <View className="w-1/12">
        {skill.career && <Ionicons name="checkmark" color="white" size={18} />}
      </View>
      <View className="flex flex-row justify-between items-center w-4/12">
        <Button
          title="-"
          cName="mr-1 border-white border-2 bg-transparent rounded-sm w-10 h-10 items-center justify-center"
          textClassName={downDisabled() ? "text-white/20" : "text-white"}
          disabledClassName="border-white/20"
          onPress={decreaseLevel}
          disabled={downDisabled()}
        />
        <Button
          title="+"
          cName="ml-1 border-white border-2 bg-transparent rounded-sm w-10 h-10 items-center justify-center"
          onPress={increaseLevel}
          textClassName={skill.level >= 2 ? "text-white/20" : "text-white"}
          disabledClassName="border-white/20"
          disabled={skill.level >= 2}
        />
      </View>
    </View>
  );
};

export default SkillItem;
