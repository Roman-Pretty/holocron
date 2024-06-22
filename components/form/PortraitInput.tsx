import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { SetStateAction } from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  Text,
  View,
} from "react-native";
import TriangleCorner from "../shapes/TriangleCorner";
import PortraitItem from "./PortraitItem";

interface PortraitInputProps {
  portrait: ImageSourcePropType | undefined;
  setPortrait: React.Dispatch<SetStateAction<ImageSourcePropType>>;
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
            borderTopWidth: "24px",
            borderRightWidth: "24px",
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
