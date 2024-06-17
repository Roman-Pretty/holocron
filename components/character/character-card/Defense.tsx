import { View, Text } from "react-native";
import React from "react";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";

interface DefenseProps {
  scale: number;
  borderWidth: number;
  ranged: number;
  melee: number;
  soak: number;
  cName?: string;
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
  ranged = 0,
  melee = 0,
  soak = 0,
  cName,
}: DefenseProps) => {
  return (
    <View className="flex-row">
      <View
        style={{
          marginVertical: scale * 1.2,
          borderLeftWidth: borderWidth * 2,
          borderTopWidth: borderWidth * 2,
          borderBottomWidth: borderWidth * 2,
        }}
        className="py-1 px-2 bg-white rounded-l-lg relative"
      >
        <Text className="font-[Elektra] pt-1">{ranged}</Text>
        <View
          className="absolute"
          style={{ width: scale * 2, bottom: -scale * 0.8 }}
        >
          <Text
            className="font-[Elektra] text-white"
            style={{ fontSize: scale * 0.5, paddingLeft: scale * 0.2 }}
          >
            RGD
          </Text>
        </View>
      </View>
      <View>
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
          <View className="bg-white relative" style={{ height: scale * 1.5 }}>
            <Text
              className="absolute font-[Elektra] text-black w-full text-center"
              style={{ left: 0, top: -scale / 2, fontSize: scale * 2 }}
            >
              {soak}
            </Text>
          </View>
          <View className="bg-heading1" style={{ height: scale / 2 }} />
          <View className="flex-row relative">
            <TriangleCorner
              style={{
                transform: [{ rotate: "90deg" }],
                borderTopWidth: scale,
                borderRightWidth: scale,
                borderTopColor: Colors.global.heading1,
              }}
            />
            <View className={` bg-heading1`} style={{ width: scale * 2 }} />
            <TriangleCorner
              style={{
                borderTopWidth: scale,
                borderRightWidth: scale,
                borderTopColor: Colors.global.heading1,
              }}
            />
            <Text
              className="absolute font-[Elektra] text-white text-center w-full"
              style={{ left: 0, top: -scale / 14, fontSize: scale * 0.7 }}
            >
              SOAK
            </Text>
          </View>
          <Text
            className="w-full text-center text-white uppercase font-[Elektra]"
            style={{ fontSize: scale * 0.6, paddingTop: scale / 2 }}
          >
            DEFENSE
          </Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: scale * 1.2,
          borderRightWidth: borderWidth * 2,
          borderTopWidth: borderWidth * 2,
          borderBottomWidth: borderWidth * 2,
        }}
        className="py-1 px-2 bg-white rounded-r-lg relative"
      >
        <Text className="font-[Elektra] pt-1">{melee}</Text>
        <View
          className="absolute"
          style={{ width: scale * 2, bottom: -scale * 0.8 }}
        >
          <Text
            className="font-[Elektra] text-white"
            style={{ fontSize: scale * 0.5, paddingLeft: scale * 0.1 }}
          >
            MEL
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Stat;
