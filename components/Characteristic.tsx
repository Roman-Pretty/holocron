import { View, Text, TextInput, Platform } from "react-native";
import React from "react";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";

interface StatProps {
  scale: number;
  borderWidth: number;
  value: number;
  title: string;
}

interface BorderProps {
  scale: number;
  borderWidth: number;
}

const Border = ({ scale, borderWidth }: BorderProps) => {
  const size = scale + borderWidth;
  return (
    <View style={{ width: size * 4 }}>
      <View className="flex-row">
        <TriangleCorner
          style={{
            transform: [{ rotate: "180deg" }],
            borderTopWidth: size,
            borderRightWidth: size,
            borderTopColor: "#000",
          }}
        />
        <View className={` bg-black`} style={{ width: size * 2 }} />
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
        <View className={` bg-black`} style={{ width: size * 2 }} />
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
  title = "Wound",
}: StatProps) => {
  return (
    <View style={{ zIndex: -10 }}>
      <Border scale={scale} borderWidth={borderWidth} />
      <View
        style={{
          width: scale * 4,
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
          <View className={` bg-white`} style={{ width: scale * 2 }} />
          <TriangleCorner
            style={{
              transform: [{ rotate: "-90deg" }],
              borderTopWidth: scale,
              borderRightWidth: scale,
              borderTopColor: "#fff",
            }}
          />
        </View>

        <View
          className=" bg-white"
          style={{ height: scale * 2, paddingBottom: scale / 2 }}
        />
        <Text
          className="absolute font-[Elektra] text-slate-800 w-full text-center z-10"
          style={{ left: 0, top: Platform.OS === 'ios' ? scale * 0.8 : scale * 0.5, fontSize: scale * 2.8}}
        >
          {value}
        </Text>
        <View className="flex-row relative">
          <TriangleCorner
            style={{
              transform: [{ rotate: "90deg" }],
              borderTopWidth: scale,
              borderRightWidth: scale,
              borderTopColor: "#fff",
            }}
          />
          <View className={` bg-white`} style={{ width: scale * 2 }} />
          <TriangleCorner
            style={{
              borderTopWidth: scale,
              borderRightWidth: scale,
              borderTopColor: "#fff",
            }}
          />
        </View>
        <Text
          className="w-full text-center text-white uppercase font-[Elektra]"
          style={{ fontSize: scale * 0.65, paddingTop: scale / 2 }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Stat;
