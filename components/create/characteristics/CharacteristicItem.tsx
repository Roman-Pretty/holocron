import Button from "@/components/form/Button";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import { Characteristic, Species } from "@/constants/Types";
import React from "react";
import { Text, View } from "react-native";

interface CharacteristicItemProps {
  characteristic: Characteristic;
  setCharacteristics: React.Dispatch<React.SetStateAction<Characteristic[]>>;
  species: Species | null;
  index: number;
}

const CharacteristicItem = ({
  characteristic,
  species,
  index,
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
    <View className="w-full mb-[2vh]">
      <View className="flex-row justify-end">
        <View className="bg-heading3  w-[100%]">
          <Text className="pl-[52px] pt-[8px] text-lg text-white font-[Elektra] capitalize">
            {characteristic.name}
          </Text>
        </View>
        <TriangleCorner
          style={{
            transform: [{ rotate: "-90deg" }],
            borderTopWidth: "40px",
            borderRightWidth: "40px",
            borderTopColor: Colors.global.heading3,
          }}
        />
      </View>
      <View className="bg-heading3 p-3">
        <View className="flex flex-row-reverse justify-between">
          <View>
            <View className="flex-row justify-center">
              <TriangleCorner
                style={{
                  transform: [{ rotate: "180deg" }],
                  borderTopWidth: "18px",
                  borderRightWidth: "18px",
                  borderTopColor: "#fff",
                }}
              />
              <View className="bg-white w-[30px]"></View>
              <TriangleCorner
                style={{
                  transform: [{ rotate: "-90deg" }],
                  borderTopWidth: "18px",
                  borderRightWidth: "18px",
                  borderTopColor: "#fff",
                }}
              />
            </View>
            <View className="bg-white h-[30px] items-center justify-center">
              <Text className="text-center text-black w-full font-[Elektra] text-4xl">
                {level}
              </Text>
            </View>
            <View className="flex-row justify-center">
              <TriangleCorner
                style={{
                  transform: [{ rotate: "90deg" }],
                  borderTopWidth: "18px",
                  borderRightWidth: "18px",
                  borderTopColor: "#fff",
                }}
              />
              <View className="bg-white w-[30px]"></View>
              <TriangleCorner
                style={{
                  transform: [{ rotate: "0deg" }],
                  borderTopWidth: "18px",
                  borderRightWidth: "18px",
                  borderTopColor: "#fff",
                }}
              />
            </View>
          </View>
          <View className="">
            <Text className="text-white text-sm font-[Elektra] max-w-[60vw]">
              {characteristic.desc}
            </Text>
          </View>
        </View>
        <View className="flex-row pt-[2vh]">
          <Button
            title="Decrease"
            disabled={
              species && characteristic.level <= species.characteristics[index]
                ? true
                : false
            }
            cName="mr-[1vw] bg-statblockbackground"
            disabledClassName="bg-boxheading"
            onPress={decreaseLevel}
          />
          <Button
            title="Increase"
            disabled={characteristic.level >= 6}
            cName="ml-[1vw] bg-statblockbackground"
            disabledClassName="bg-boxheading"
            onPress={increaseLevel}
          />
        </View>
      </View>
    </View>
  );
};

export default CharacteristicItem;
