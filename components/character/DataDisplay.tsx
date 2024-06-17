import { View, Text } from "react-native";
import React from "react";
import TriangleCorner from "../shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";

interface StatProps {
  scale: number;
  borderWidth: number;
  value: string | number;
  title: string;
  cName?: string;
}

interface BorderProps {
  scale: number;
  borderWidth: number;
}

const Border = ({ scale, borderWidth }: BorderProps) => {
  const size = scale + borderWidth;
  return (
    <View style={{ width: (scale * 8) + borderWidth*4 }}>
      <View className="flex-row">
        <TriangleCorner
          style={{
            transform: [{ rotate: "180deg" }],
            borderTopWidth: size,
            borderRightWidth: size,
            borderTopColor: "#000",
          }}
        />
        <View className={` bg-black`} style={{ width: (scale * 6) + borderWidth*2 }} />
        <TriangleCorner
          style={{
            transform: [{ rotate: "-90deg" }],
            borderTopWidth: size,
            borderRightWidth: size,
            borderTopColor: "#000",
          }}
        />
      </View>
      <View className="bg-black" style={{ height: size * 2 }} />
      <View className="flex-row">
        <TriangleCorner
          style={{
            transform: [{ rotate: "90deg" }],
            borderTopWidth: size,
            borderRightWidth: size,
            borderTopColor: "#000",
          }}
        />
        <View className={` bg-black`} style={{ width: (scale * 6) + borderWidth*2 }} />
        <TriangleCorner
          style={{
            borderTopWidth: size,
            borderRightWidth: size,
            borderTopColor: "#000",
          }}
        />
      </View>
    </View>
  );
};

const Stat = ({
  scale,
  borderWidth,
  value = 0,
  title = "Credits",
  cName,
}: StatProps) => {
  return (
    <View className={cName}>
      <Border scale={scale} borderWidth={borderWidth} />
      <View
        style={{
          width: scale * 8,
          top: borderWidth * 2,
          left: borderWidth * 2,
        }}
        className="absolute"
      >
        <View className="flex-row">
          <TriangleCorner
            style={{
              transform: [{ rotate: "180deg" }],
              borderTopWidth: scale,
              borderRightWidth: scale,
              borderTopColor: "#fff",
            }}
          />
          <View className={` bg-white`} style={{ width: scale * 6 }} />
          <TriangleCorner
            style={{
              transform: [{ rotate: "-90deg" }],
              borderTopWidth: scale,
              borderRightWidth: scale,
              borderTopColor: "#fff",
            }}
          />
        </View>
        <View className="bg-white relative" style={{ height: scale * 1.5 }}>
          <Text
            className="absolute font-[Elektra] text-gray-500 w-full text-center"
            style={{ left: 0, top: -scale / 2, fontSize: scale * 2 }}
          >
            {value}
          </Text>
        </View>
        <View className="bg-box" style={{ height: scale / 2 }} />
        <View className="flex-row relative">
          <TriangleCorner
            style={{
              transform: [{ rotate: "90deg" }],
              borderTopWidth: scale,
              borderRightWidth: scale,
              borderTopColor: Colors.global.box,
            }}
          />
          <View className={` bg-box`} style={{ width: scale * 6 }} />
          <TriangleCorner
            style={{
              borderTopWidth: scale,
              borderRightWidth: scale,
              borderTopColor: Colors.global.box,
            }}
          />
          <Text
            className="absolute font-[Elektra] text-white text-center w-full"
            style={{ left: 0, top: -scale / 6, fontSize: scale * 1 }}
          >
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Stat;
