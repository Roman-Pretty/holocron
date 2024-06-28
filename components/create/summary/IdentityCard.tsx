import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { ImageSourcePropType } from "react-native";
import { Career, Species, Specialization } from "@/types/Types";

interface IdentityCardProps {
  name: string;
  homeworld: string;
  species: Species | null;
  portrait: ImageSourcePropType;
  screenWidth: number;
  career: Career | null;
  specialization: Specialization | null;
}

const IdentityCard = ({
  name,
  homeworld,
  species,
  portrait,
  screenWidth,
  specialization,
  career,
}: IdentityCardProps) => {
  return (
    <>
      <View
        className="w-full border-t-2 border-x-2 border-heading3 p-2 bg-sky-300/20"
      >
        <View className="flex-row h-[28vw]">
          <View className="w-[28vw]  overflow-hidden border-2 border-heading3">
            <Image
              source={portrait}
              resizeMode="cover"
              style={{ width: "100%", height: "200%", paddingTop: 200 }}
            />
          </View>
          <View className="flex-1 ml-2">
            <View className="h-full">
              <View className="mb-2 border-2 border-heading3 px-1 flex-1 justify-evenly">
                <Text className="text-heading3 font-[aurebesh] text-xl">
                  {name === "" ? "Imperial Citizen" : name}
                </Text>
                <Text className="text-heading3 font-semibold text-md mb-1">
                  {name === "" ? "Imperial Citizen" : name}
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
                    {species?.species}
                  </Text>
                </View>
                <View className="flex-row items-center justify-start w-full overflow-hidden">
                  <Ionicons
                    name="planet"
                    size={16}
                    color={Colors.global.heading3}
                  />
                  <Text className="text-heading3 font-[Elektra] text-md pl-1">
                    {homeworld === "" ? "Unknown" : homeworld}
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
        >
          <View className="flex-row h-[14vw]">
            <View className="w-[14vw]  overflow-hidden border-2 border-heading3 p-2">
              <Image
                source={career?.image}
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
                  {specialization?.name}
                </Text>
              </View>
              <View className="flex-row items-center justify-start w-full overflow-hidden">
                <Ionicons
                  name="wallet"
                  size={16}
                  color={Colors.global.heading3}
                />
                <Text className="text-heading3 font-[Elektra] text-md pl-1">
                  500<Text className="font-[aurebesh]">$</Text>
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
          <View className="bg-gray-400 h-full flex-1 border-gray-600 border-r-2 border-t-2" />
        </View>
      </View>

      <View
        className="bg-gray-400 w-full h-[16vw] border-x-2 border-b-2 border-gray-600 flex-row mb-[2vh]"
        style={{ marginTop: -1 }}
      >
        <View className="border-t-2 border-gray-600 flex-1 p-3 justify-center">
          <Text className="font-[Elektra] text-md text-gray-500">
            Imperial ID
          </Text>
          <Text className="font-[Elektra] text-md text-gray-500">
            2909-0238-2102-9092
          </Text>
        </View>
        <View className="flex-1" />
      </View>
    </>
  );
};

export default IdentityCard;
