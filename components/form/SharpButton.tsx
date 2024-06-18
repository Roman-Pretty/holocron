import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";

const SharpButton = ({ title, onPress }: { title: string, onPress: () => void }) => {
  const size = 16;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className="w-[40vw] self-center z-20"
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.32,
          shadowRadius: 5.46,

          elevation: 9,
        }}
      >
        <View className="flex-row">
          <View>
            <TriangleCorner
              style={{
                transform: [{ rotate: "180deg" }],
                borderTopWidth: size,
                borderRightWidth: size,
                borderTopColor: Colors.global.heading3,
              }}
            />
            <TriangleCorner
              style={{
                transform: [{ rotate: "90deg" }],
                borderTopWidth: size,
                borderRightWidth: size,
                borderTopColor: Colors.global.heading3,
              }}
            />
          </View>
          <View className="bg-heading3 flex-1 flex-row items-center justify-center">
            <Text className="text-white text-left text-lg font-[Elektra] text-md">
              {title}
            </Text>
          </View>
          <View>
            <TriangleCorner
              style={{
                transform: [{ rotate: "-90deg" }],
                borderTopWidth: size,
                borderRightWidth: size,
                borderTopColor: Colors.global.heading3,
              }}
            />
            <TriangleCorner
              style={{
                borderTopWidth: size,
                borderRightWidth: size,
                borderTopColor: Colors.global.heading3,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SharpButton;
