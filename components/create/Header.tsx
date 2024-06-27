import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import { InitialPlayerStateInterface } from "@/constants/InitialPlayerState";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";

interface HeaderProps {
  currentIndex: number;
  PAGES: number;
  state: InitialPlayerStateInterface
}

const Header = ({
  currentIndex,
  PAGES,
  state: { experience, species, credits }
}: HeaderProps) => {
  const getPageTitle = () => {
    switch (currentIndex) {
      case 0:
        return "Description";
      case 1:
        return "Species";
      case 2:
        return "Motivation";
      case 3:
        return "Career";
      case 4:
        return "Specialization";
      case 5:
        return "Free Skills";
      case 6:
        return "Characteristics";
      case 7:
        return "Skills";
      case 8:
        return "Talents";
      case 9:
        return "Summary";
      default:
        return "";
    }
  };

  return (
    <View className="relative my-4">
      <View className="flex flex-row justify-center pb-4">
        <View className="flex-row justify-center">
          <TriangleCorner
            style={{
              transform: [{ rotate: "90deg" }],
              borderTopWidth: 34,
              borderRightWidth: 34,
              borderTopColor: Colors.global.heading1,
            }}
          />
          <View className="bg-heading1 px-2">
            <Text className="text-2xl text-white font-[Elektra] text-center pt-0.5">
              {getPageTitle()}
            </Text>
          </View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "0deg" }],
              borderTopWidth: 34,
              borderRightWidth: 34,
              borderTopColor: Colors.global.heading1,
            }}
          />
        </View>
        <View className="w-[20vw] pt-2.5 h-full absolute right-0 top-0 mr-2">
          {experience !== null && species != null && (
            <View className="flex-row justify-end items-center">
              <Ionicons size={16} name="locate" color={Colors.global.heading1} />
              <Text className="text-heading1 text-right font-[Elektra] pt-0.5">
                {experience}
              </Text>
            </View>
          )}
        </View>
        <View className="w-[20vw] pt-2.5 h-full absolute left-0 top-0 ml-2">
          {experience !== null && species != null && (
            <Text className="text-heading1 text-left">
              <Text className="font-[aurebesh]">$</Text>
              <Text className="font-[Elektra]"> {credits}</Text>
            </Text>
          )}
        </View>
      </View>
      <Progress.Bar
        progress={(currentIndex + 1) / (PAGES + 1)}
        animated
        color={Colors.global.heading1}
        width={null}
      />
    </View>
  );
};

export default Header;
