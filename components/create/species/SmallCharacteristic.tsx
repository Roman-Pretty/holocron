import TriangleCorner from "@/components/shapes/TriangleCorner";
import React from "react";
import { Text, View, Dimensions } from "react-native";

const SpeciesCharacteristic = ({
  title,
  level,
}: {
  title: string;
  level: number;
}) => {
  const screenWidth = Dimensions.get("window").width;
  const size = screenWidth * 0.03;

  return (
    <View className="items-center">
      <View className="flex-row justify-center" style={{marginBottom: -1*(screenWidth*0.001)}}>
        <TriangleCorner
          style={{
            transform: [{ rotate: "180deg" }],
            borderTopWidth: size,
            borderRightWidth: size,
            borderTopColor: "#fff",
            marginRight: -1*(screenWidth*0.001)
          }}
        />
        <View className="bg-white w-[6vw]"></View>
        <TriangleCorner
          style={{
            transform: [{ rotate: "-90deg" }],
            borderTopWidth: size,
            borderRightWidth: size,
            borderTopColor: "#fff",
            marginLeft: -1*(screenWidth*0.001)
          }}
        />
      </View>
      <View className="bg-white w-[11.6vw] h-[6vw] items-center justify-center">
        <Text className="text-center text-black w-full font-[Elektra] text-xl">
          {level}
        </Text>
      </View>
      <View className="flex-row justify-center" style={{marginTop: -1*(screenWidth*0.001)}}>
        <TriangleCorner
          style={{
            transform: [{ rotate: "90deg" }],
            borderTopWidth: size,
            borderRightWidth: size,
            borderTopColor: "#fff",
            marginRight: -1*(screenWidth*0.001)
          }}
        />
        <View className="bg-white w-[6vw]"></View>
        <TriangleCorner
          style={{
            transform: [{ rotate: "0deg" }],
            borderTopWidth: size,
            borderRightWidth: size,
            borderTopColor: "#fff",
            marginLeft: -1*(screenWidth*0.001)
          }}
        />
      </View>
      <Text className="text-center text-slate-100 font-[Elektra] text-[10px] pt-[0.6vh]">
        {title}
      </Text>
    </View>
  );
};

export default SpeciesCharacteristic;
