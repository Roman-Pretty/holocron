import React from "react";
import { View, Text } from "react-native";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import * as Progress from "react-native-progress";
import { Species } from "@/constants/Types";

interface HeaderProps {
  currentIndex: number;
  experience: number | null;
  PAGES: number;
  species: Species | null;
}

const Header = ({ currentIndex, experience, PAGES, species }: HeaderProps) => {
  const getPageTitle = () => {
    switch (currentIndex) {
      case 0:
        return "Description";
      case 1:
        return "Species";
      case 2:
        return "Career";
      case 3:
        return "Specialization";
      case 4:
        return "Free Skills";
      case 5:
        return "Characteristics";
      case 6:
        return "Skills";
      case 7:
        return "Summary";
      default:
        return "";
    }
  };

  return (
    <View className="relative my-[2vh]">
      <View className="flex flex-row justify-center pb-[2vh]">
        <View className="flex-row justify-center">
          <TriangleCorner
            style={{
              transform: [{ rotate: "90deg" }],
              borderTopWidth: "32px",
              borderRightWidth: "32px",
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
              borderTopWidth: "32px",
              borderRightWidth: "32px",
              borderTopColor: Colors.global.heading1,
            }}
          />
        </View>
        <View className="w-[20vw] pt-2.5 h-full absolute right-0 top-0 mr-2">
          {experience !== null && species != null && (
            <Text className="text-heading1 text-right font-[Elektra]">
              XP: {experience}
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
