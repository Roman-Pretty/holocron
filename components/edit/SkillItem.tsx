import Button from "@/components/form/Button";
import { CharacterContext } from "@/contexts/CharacterContext";
import { Skill } from "@/types/Types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface SkillItemProps {
  setNewSkills: (skills: Skill[]) => void;
  newSkills: Skill[];
  skill: Skill;
  index: number;
}

const SkillItem = ({
  setNewSkills,
  newSkills,
  index,
  skill,
}: SkillItemProps) => {
  const { character, setCharacter } = React.useContext(CharacterContext);
  const [level, setLevel] = React.useState(skill.level);

  function increaseLevel() {
    setLevel(level + 1);
    newSkills[index].level += 1;
    setNewSkills([...newSkills]);
  }

  function decreaseLevel() {
    setLevel(level - 1);
    newSkills[index].level -= 1;
    setNewSkills([...newSkills]);
  }

  function downDisabled() {
    return (
      skill.level <=
      (character?.data.skills.find((s) => s.name === skill.name)?.level ?? 0)
    ); // add null check and default value of 0
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
          textClassName={skill.level >= 6 ? "text-white/20" : "text-white"}
          disabledClassName="border-white/20"
          disabled={skill.level >= 6}
        />
      </View>
    </View>
  );
};

export default SkillItem;
