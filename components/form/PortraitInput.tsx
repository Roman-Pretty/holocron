import { Colors } from "@/constants/Colors";
import React, { SetStateAction } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";
import TriangleCorner from "../shapes/TriangleCorner";

interface PortraitInputProps {
  portrait: ImageSourcePropType | undefined;
  setPortrait:(image: ImageSourcePropType) => void;
  handleSnapPress: (index: number) => void;
}

const PortraitInput = ({
  portrait,
  setPortrait,
  handleSnapPress,
}: PortraitInputProps) => {
  return (
    <>
      <View className="flex-row justify-start">
        <View className="bg-heading3 w-[40%] pl-2 pt-2">
          <Text className="text-white font-[Elektra]">Portrait</Text>
        </View>
        <TriangleCorner
          style={{
            transform: [{ rotate: "-90deg" }],
            borderTopWidth: 28,
            borderRightWidth: 28,
            borderTopColor: Colors.global.heading3,
          }}
        />
      </View>
      <View className="mb-[1.5vh] border-2 border-heading3 bg-white">
        <Pressable
          onPress={() => handleSnapPress(0)}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
            },
          ]}
        >
          <View className="h-[20vh] overflow-hidden">
            <Image
              source={portrait}
              resizeMode="contain"
              style={{ width: "100%", height: "200%", paddingTop: 200 }}
            />
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default PortraitInput;
