import { View, Text } from "react-native";
import React from "react";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";

const Title = ({ title }: { title: string }) => {
  const size = 16;
  return (
    <View
      className="w-2/3 self-center z-20"
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
              borderTopColor: Colors.global.neutral800,
            }}
          />
          <TriangleCorner
            style={{
              transform: [{ rotate: "90deg" }],
              borderTopWidth: size,
              borderRightWidth: size,
              borderTopColor: Colors.global.neutral800,
            }}
          />
        </View>
        <View className="bg-neutral-800 flex-1 flex-row items-center justify-center">
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
              borderTopColor: Colors.global.neutral800,
            }}
          />
          <TriangleCorner
            style={{
              borderTopWidth: size,
              borderRightWidth: size,
              borderTopColor: Colors.global.neutral800,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Title;
