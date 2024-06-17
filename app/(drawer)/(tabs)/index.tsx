import ImageWrapper from "@/components/ImageWrapper";
import { CharacterContext } from "@/contexts/CharacterContext";
import React, { useContext } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import Stat from "@/components/character/Stat";
import Defense from "@/components/character/Defense";
import DataDisplay from "@/components/character/DataDisplay";

const Page = () => {
  const { character } = useContext(CharacterContext);

  return (
    <ImageWrapper>
      <ScrollView>
        <View
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
          <View className="mx-2 mt-2 flex-row">
            <TriangleCorner
              style={{
                transform: [{ rotate: "180deg" }],
                borderTopWidth: 44,
                borderRightWidth: 44,
                borderTopColor: Colors.global.box,
              }}
            />
            <View className="bg-box flex-1 flex-row items-center justify-center pt-4">
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
            <Text className="text-white text-center text-xs font-[Elektra] p-2 pt-1">
              {character?.data.species.species}{" "}
              {character?.data.specializations[0].name}
            </Text>
            <View className="flex-row justify-between px-4">
              <View
                className="border-white w-1/5 pb-1"
                style={{ borderBottomWidth: 1 }}
              >
                <Text className="font-[Elektra] text-white text-center">
                  Criticals:
                </Text>
              </View>
              <View
                className="border-white w-1/5 pb-1"
                style={{ borderBottomWidth: 1 }}
              >
                <Text className="font-[Elektra] text-white text-center">
                  Statuses:
                </Text>
              </View>
            </View>
            <View className="w-full h-[40vh] mt-[2vh]">
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
            {/* <View className="flex-row justify-between px-2 -mt-[10vh] mb-[2vh]">
            <DataDisplay
            scale={10}
            borderWidth={1.6}
            value={character?.data.credits ?? 0}
            title="CREDITS"
            />
            <DataDisplay
            scale={10}
            borderWidth={1.6}
            value={
              character?.data.experience.available ??
              0 + " / " + character?.data.experience.total ??
              0
            }
            title="EXPERIENCE"
            />
          </View> */}
            <View className="flex-row justify-between items-center px-4 -mb-[4vh]">
              <Stat
                scale={18}
                borderWidth={1.6}
                value={character?.data.strain.current ?? 0}
                max={character?.data.strain.threshold ?? 0}
                title="Strain"
                cName="mb-[6vh]"
              />
              <Defense
                scale={18}
                borderWidth={1.6}
                melee={character?.data.defense.melee ?? 0}
                ranged={character?.data.defense.ranged ?? 0}
                soak={character?.data.defense.soak ?? 0}
              />
              <Stat
                scale={18}
                borderWidth={1.6}
                value={character?.data.wound.current ?? 0}
                max={character?.data.wound.threshold ?? 0}
                title="Wounds"
                cName="mb-[6vh]"
              />
            </View>
          </View>

          <View className="mx-2 flex-row -z-10">
            <TriangleCorner
              style={{
                transform: [{ rotate: "90deg" }],
                borderTopWidth: 44,
                borderRightWidth: 44,
                borderTopColor: Colors.global.box,
              }}
            />
            <View className="bg-box flex-1" />
            <TriangleCorner
              style={{
                transform: [{ rotate: "0deg" }],
                borderTopWidth: 44,
                borderRightWidth: 44,
                borderTopColor: Colors.global.box,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </ImageWrapper>
  );
};

export default Page;
