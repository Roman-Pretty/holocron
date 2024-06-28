import { Career, Characteristic, Skill, Specialization } from "@/types/Types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface SkillItemProps {
  index: number;
  skill: Skill;
  characteristics: {
    brawn: number;
    agility: number;
    intellect: number;
    cunning: number;
    willpower: number;
    presence: number;
  };
  career?: Career | null;
  specializations?: Specialization[] | null;
}

const DicePool = ({
  skill,
  characteristics,
}: {
  skill: Skill;
  characteristics: {
    brawn: number;
    agility: number;
    intellect: number;
    cunning: number;
    willpower: number;
    presence: number;
  };
}) => {
  let level = skill.level;
  let characteristicLevel = 0;
  switch (skill.characteristic.name) {
    case "brawn":
      characteristicLevel = characteristics.brawn;
      break;
    case "agility":
      characteristicLevel = characteristics.agility;
      break;
    case "intellect":
      characteristicLevel = characteristics.intellect;
      break;
    case "cunning":
      characteristicLevel = characteristics.cunning;
      break;
    case "willpower":
      characteristicLevel = characteristics.willpower;
      break;
    case "presence":
      characteristicLevel = characteristics.presence;
      break;
  }
  let diePool = [1, 1];
  if (level === 0) {
    diePool = [0, characteristicLevel];
  } else if (characteristicLevel === level) {
    diePool = [level, 0];
  } else if (characteristicLevel > level) {
    diePool[0] = level;
    diePool[1] = characteristicLevel - level;
  } else {
    diePool[0] = characteristicLevel;
    diePool[1] = level - characteristicLevel;
  }
  return (
    <>
      <Text className="font-[swrpg] text-yellow-300 text-xs" style={{verticalAlign: 'bottom'}}>
        {Array.from({ length: diePool[0] }).map((_, i) => "c")}
      </Text>
      <Text className="font-[swrpg] text-green-600 text-xs" style={{verticalAlign: 'bottom'}}>
        {Array.from({ length: diePool[1] }).map((_, i) => "d")}
      </Text>
    </>
  );
};

const SkillItem = ({
  skill,
  career,
  specializations,
  index,
  characteristics,
}: SkillItemProps) => {
  const [level, setLevel] = React.useState(skill.level);

  return (
    <View className={`${index % 2 === 1 ? " " : "bg-black/20"} px-2 flex-row`}>
      <View className="flex flex-row justify-between w-full items-center">
        <Text className="text-white text-sm font-semibold capitalize] w-5/12" style={{verticalAlign: 'middle'}}>
          {skill.name === "Piloting (Planetary)" ? "Piloting (Planet)" : skill.name}{" "}
          <Text className="font-light capitalize">
            ({skill.characteristic.name.substring(0, 3)})
          </Text>
        </Text>
        <Text className="text-white text-xl text-center w-3/12" style={{verticalAlign: 'bottom'}}>
          <DicePool skill={skill} characteristics={characteristics} />
        </Text>
        <Text className="text-white text-base text-center font-semibold w-2/12" style={{verticalAlign: 'middle'}}>
          {level === 0 ? "-" : level}
        </Text>
        <View className="w-2/12 items-center justify-center">
          {skill.career && (
            <Ionicons name="checkmark" color="white" size={18} />
          )}
        </View>
      </View>
    </View>
  );
};

export default SkillItem;
