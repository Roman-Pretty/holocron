import Button from "@/components/form/Button";
import { InitialPlayerStateInterface } from "@/constants/InitialPlayerState";
import React from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";

interface CharacteristicItemProps {
  state: InitialPlayerStateInterface;
  setState: (key: string, value: any) => void;
  index: number;
}

const CharacteristicItem = ({
  state: {characteristics, skills, species},
  setState,
  index
}: CharacteristicItemProps) => {
  const [level, setLevel] = React.useState(characteristics[index].level);

  function increaseLevel() {
    setLevel(level + 1);
    characteristics[index].level += 1;
    setState("characteristics", [...characteristics]);
  }

  function decreaseLevel() {
    setLevel(level - 1);
    characteristics[index].level -= 1;
    setState("characteristics", [...characteristics]);
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
              {characteristics[index].level}
            </Text>
          </View>
        </View>
        <Text className="text-lg text-white font-[Elektra] mt-2 capitalize">
          {characteristics[index].name}
        </Text>
        <Text className="text-sm text-center text-white/80 mt-2">
          {characteristics[index].desc}
        </Text>

        {/* Buttons */}
        <View className="flex-row mt-4">
          <Button
            title="Decrease"
            disabled={
              species && characteristics[index].level <= species.characteristics[index]
                ? true
                : false
            }
            cName="mr-1 bg-transparent border-2 border-white rounded-sm"
            disabledClassName="border-white/20"
            textClassName={
              (
                species &&
                characteristics[index].level <= species.characteristics[index]
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
            disabled={characteristics[index].level >= 6}
            cName="ml-1 bg-transparent border-2 border-white rounded-sm"
            disabledClassName="border-white/20"
            textClassName={
              characteristics[index].level >= 6 ? "text-white/20" : "text-white"
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
                (skill) => skill.characteristic.name === characteristics[index].name
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
