import ImageWrapper from "@/components/ImageWrapper";
import { CharacterContext } from "@/contexts/CharacterContext";
import React, { useContext } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import Stat from "@/components/character/Stat";

const Page = () => {
  const { character } = useContext(CharacterContext);

  return (
    <ImageWrapper>
      <ScrollView>
        <View className="mx-2 mt-2 flex-row">
          <View className="bg-box flex-1 flex-row items-center justify-center pl-[44] pt-4">
            <Text className="text-white text-center text-md font-[Elektra] text-xl">
              {character?.data.name}
            </Text>
          </View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "-90deg" }],
              borderTopWidth: 44,
              borderRightWidth: 44,
              borderTopColor: Colors.global.box,
            }}
          />
        </View>
        <View className="mx-2 bg-box relative">
          <View className=" h-[1px] bg-white mx-[30vw]" />
          <View className="w-full h-[46vh]">
            <Image
              source={require("@/assets/images/page/gradient.png")}
              style={{
                width: "100%",
                height: 400,
                opacity: 0.6,
              }}
              className="absolute -top-[2vh]"
            />
            <Image
              source={character?.data.image}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View className="flex-row justify-between items-center px-4 pb-8 -mt-[4vh]">
            <Stat
              scale={18}
              borderWidth={1.6}
              value={0}
              max={14}
              title="Wounds"
              cName=""
            />
            <Stat
              scale={18}
              borderWidth={1.6}
              value={0}
              max={12}
              title="Strain"
              cName=""
            />
          </View>
        </View>
      </ScrollView>
    </ImageWrapper>
  );
};

export default Page;
