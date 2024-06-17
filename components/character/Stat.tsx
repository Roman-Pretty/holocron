import { View, Text, TextInput } from "react-native";
import React from "react";
import TriangleCorner from "../shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";

interface StatProps {
  scale: number;
  borderWidth: number;
  value: number;
  setValue: (value: number) => void;
  max: number;
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
  setValue,
  max = 0,
  title = "Wound",
  cName,
}: StatProps) => {
  const handleTextChange = (inputText: string) => {
    // Validate input to allow only numeric values
    const numericRegex = /^[0-9]*$/;
    if (numericRegex.test(inputText)) {
      setValue(Number(inputText));
    }
  };

  return (
    <View className={cName} style={{zIndex: -10}}>
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

        <View className=" bg-white" style={{ height: scale * 1.5,  paddingBottom: scale / 2}}/>
        <TextInput
          value={value >0 ? value.toString() : undefined}
          onChangeText={handleTextChange}
          keyboardType="numeric"
          placeholder="0"
          placeholderTextColor="#9ca3af"
          allowFontScaling={false}
          selectTextOnFocus={true}
          maxLength={2}
          className={`absolute font-[Elektra] text-gray-500 w-full text-center ${value >= max ? 'text-red-500' : 'text-gray-500'}
          `}
          style={{ left: 0, top: scale/2, fontSize: scale * 2 }}
        >
        </TextInput>
        <View className="bg-heading3" style={{ height: scale / 2 }} />
        <View className="flex-row relative">
          <TriangleCorner
            style={{
              transform: [{ rotate: "90deg" }],
              borderTopWidth: scale,
              borderRightWidth: scale,
              borderTopColor: Colors.global.heading3,
            }}
          />
          <View className={` bg-heading3`} style={{ width: scale * 2 }} />
          <TriangleCorner
            style={{
              borderTopWidth: scale,
              borderRightWidth: scale,
              borderTopColor: Colors.global.heading3,
            }}
          />
          <Text
            className="absolute font-[Elektra] text-white text-center w-full"
            style={{ left: 0, top: -scale / 6, fontSize: scale * 1 }}
          >
            {max}
          </Text>
        </View>
        <Text
          className="w-full text-center text-white uppercase font-[Elektra]"
          style={{ fontSize: scale * 0.6, paddingTop: scale / 2 }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default Stat;
