import Button from "@/components/form/Button";
import { Characteristic, Skill, Species } from "@/types/Types";
import React from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";

interface CharacteristicItemProps {
  characteristic: Characteristic;
  setCharacteristics: React.Dispatch<React.SetStateAction<Characteristic[]>>;
  species: Species | null;
  index: number;
  skills: Skill[];
}

const CharacteristicItem = ({
  characteristic,
  species,
  index,
  skills,
  setCharacteristics,
}: CharacteristicItemProps) => {
  const [level, setLevel] = React.useState(characteristic.level);

  function increaseLevel() {
    setLevel(level + 1);
    characteristic.level += 1;
    setCharacteristics((prev) => [...prev]);
  }

  function decreaseLevel() {
    setLevel(level - 1);
    characteristic.level -= 1;
    setCharacteristics((prev) => [...prev]);
  }

  return (
    <Animated.View
      className={`w-full bg-heading3 mb-2 rounded-lg items-center`}
    >
      <View className="px-6 py-4 w-full items-center">
        <View
          className={`w-[24vw] h-[24vw] p-[1vw] overflow-hidden rounded-full border-2 border-white/10`}
        >
          <View
            className={`overflow-hidden rounded-full bg-white/20 items-center justify-center w-full h-full`}
          >
            <Text className="font-[Elektra] text-white text-5xl pt-1.5">
              {characteristic.level}
            </Text>
          </View>
        </View>
        <Text className="text-lg text-white font-[Elektra] mt-2 capitalize">
          {characteristic.name}
        </Text>
        <Text className="text-sm text-center text-white/80 mt-2">
          {characteristic.desc}
        </Text>

        {/* Buttons */}
        <View className="flex-row mt-4">
          <Button
            title="Decrease"
            disabled={
              species && characteristic.level <= species.characteristics[index]
                ? true
                : false
            }
            cName="mr-1 bg-transparent border-2 border-white rounded-sm"
            disabledClassName="border-white/20"
            textClassName={
              (
                species &&
                characteristic.level <= species.characteristics[index]
                  ? true
                  : false
              )
                ? "text-white/20"
                : "text-white"
            }
            onPress={decreaseLevel}
          />
          <Button
            title="Increase"
            disabled={characteristic.level >= 6}
            cName="ml-1 bg-transparent border-2 border-white rounded-sm"
            disabledClassName="border-white/20"
            textClassName={
              characteristic.level >= 6 ? "text-white/20" : "text-white"
            }
            onPress={increaseLevel}
          />
        </View>
      </View>
      <View className="px-6 pb-4 w-full items-start bg-black/20 rounded-b-lg">
        <Text className="text-xs text-white font-bold mt-2">SKILLS</Text>
        <Text className="text-xs text-white/80 mt-1">
          <Text key={index} className="capitalize">
            {skills
              .filter(
                (skill) => skill.characteristic.name === characteristic.name
              )
              .map((skill) => skill.name)
              .join(", ")}
          </Text>
        </Text>
      </View>
    </Animated.View>
  );
};

export default CharacteristicItem;
