import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import { Character } from "@/types/Types";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, {useContext} from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { CharacterContext } from "@/contexts/CharacterContext";


interface CharacterCardProps {
  screenWidth: number;
  char: Character;
  index: number;
  seededRandom: (seed: number) => string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  screenWidth,
  char,
  index,
  seededRandom,
}) => {

  const {character, setCharacter} = useContext(CharacterContext);

  function handleSelect() {
    router.push("(tabs)" as never);
    setCharacter(char);
  }

  return (
    <View className="p-2">
      <View
        className="w-full border-t-2 border-x-2 border-heading3 p-2 bg-sky-300/20"
        style={{
          shadowColor: Colors.global.heading3,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <View className="flex-row h-[28vw]">
          <View className="w-[28vw]  overflow-hidden border-2 border-heading3">
            <Image
              source={char.data.image}
              resizeMode="cover"
              style={{ width: "100%", height: "200%", paddingTop: 200 }}
            />
          </View>
          <View className="flex-1 ml-2">
            <View className="h-full">
              <View className="mb-2 border-2 border-heading3 px-1 flex-1 justify-evenly">
                <Text className="text-heading3 font-[aurebesh] text-xl">
                  {char.data.name === "" ? "Imperial Citizen" : char.data.name}
                </Text>
                <Text className="text-heading3 font-semibold text-md mb-1">
                  {char.data.name === "" ? "Imperial Citizen" : char.data.name}
                </Text>
              </View>
              <View className="px-1 border-2 border-heading3 flex-1 justify-evenly">
                <View className="flex-row items-center justify-start w-full overflow-hidden">
                  <Ionicons
                    name="footsteps"
                    size={16}
                    color={Colors.global.heading3}
                  />
                  <Text className="text-heading3 font-semibold text-md pl-1">
                    {char.data.species?.species}
                  </Text>
                </View>
                <View className="flex-row items-center justify-start w-full overflow-hidden">
                  <Ionicons
                    name="planet"
                    size={16}
                    color={Colors.global.heading3}
                  />
                  <Text className="text-heading3 font-[Elektra] text-md pl-1">
                    {char.data.homeworld === ""
                      ? "Unknown"
                      : char.data.homeworld}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row bg-sky-300/20">
        <View
          className="border-l-2 border-heading3 px-2 pb-2 flex-1"
          style={{
            shadowColor: Colors.global.heading3,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <View className="flex-row h-[14vw]">
            <View className="w-[14vw]  overflow-hidden border-2 border-heading3 p-2">
              <Image
                source={char.data.career?.image}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View className="flex-1 ml-2 border-2 justify-evenly border-heading3 p-1">
              <View className="flex-row items-center justify-start w-full overflow-hidden">
                <Ionicons
                  name="hammer"
                  size={16}
                  color={Colors.global.heading3}
                />
                <Text className="text-heading3 font-semibold text-md pl-1">
                  {char.data.specializations[0].name}
                </Text>
              </View>
              <View className="flex-row items-center justify-start w-full overflow-hidden">
                <Ionicons
                  name="wallet"
                  size={16}
                  color={Colors.global.heading3}
                />
                <Text className="text-heading3 font-[Elektra] text-md pl-1">
                  {char.data.credits}<Text className="font-[aurebesh]">$</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-row flex-1">
          <View className="absolute top-0 left-0 border-heading3">
            <Text className="text-heading3 font-[aurebesh] text-md">abd</Text>
            <Text className="text-heading3 font-[aurebesh] text-md">jk</Text>
            <Text className="text-heading3 font-[aurebesh] text-md">g</Text>
          </View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "180deg" }],
              borderTopWidth: screenWidth * 0.14 + 8,
              borderRightWidth: screenWidth * 0.14 + 8,
              borderTopColor: "#4b5563",
              marginRight: -1,
              marginTop: -1,
            }}
          />
          <View className="absolute">
            <TriangleCorner
              style={{
                transform: [{ rotate: "180deg" }],
                borderTopWidth: screenWidth * 0.14 + 8,
                borderRightWidth: screenWidth * 0.14 + 8,
                borderTopColor: "#9ca3af",
                marginRight: 4,
                marginTop: 2,
              }}
            />
          </View>
          <View className="bg-gray-400 h-full flex-1 border-gray-600 border-r-2 border-t-2">
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: screenWidth * -0.1,
              }}
              onPress={() => handleSelect()}
            >
              <View className="border-2 border-white rounded-full p-6 bg-heading2">
                <Ionicons name="play" size={32} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        className="bg-gray-400 w-full h-[16vw] border-x-2 border-b-2 border-gray-600 flex-row"
        style={{ marginTop: -1, zIndex: -10 }}
      >
        <View className="border-t-2 border-gray-600 flex-1 p-3 justify-center">
          <Text className="font-[Elektra] text-md text-gray-500">
            Imperial ID
          </Text>
          <Text className="font-[Elektra] text-md text-gray-500">
            {seededRandom(2909 + index)}-{seededRandom(238 + index)}-
            {seededRandom(2102 + index)}-{seededRandom(9092 + index)}
          </Text>
        </View>
        <View className="flex-1" />
      </View>
    </View>
  );
};

export default CharacterCard;
