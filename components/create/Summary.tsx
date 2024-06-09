import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  Species,
  Career,
  Specialization,
  Characteristic,
  Skill,
} from "@/constants/Types";
import { Colors } from "@/constants/Colors";
import TriangleCorner from "../shapes/TriangleCorner";
import SpeciesCharacteristic from "@/components/create/species/SpeciesCharacteristic";

interface SummaryProps {
  name: string;
  homeworld: string;
  description: string;
  species: Species | null;
  career: Career | null;
  specialization: Specialization | null;
  characteristics: Characteristic[];
  skills: Skill[];
  portrait: ImageSourcePropType;
}

const Summary = ({
  name,
  homeworld,
  description,
  species,
  career,
  specialization,
  characteristics,
  skills,
  portrait,
}: SummaryProps) => {
  const screenWidth = Dimensions.get("window").width;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text className="text-heading3 font-[Elektra] text-2xl mt-[2vh]">
        Identity Card
      </Text>
      <View
        className="w-full border-t-2 border-x-2 border-heading3 p-2"
        style={{
          shadowColor: Colors.global.heading3,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <View className="flex-row h-[28vw]">
          <View className="w-[28vw]  overflow-hidden border-2 border-heading3 p-2">
            <Image
              source={portrait}
              resizeMode="cover"
              style={{ width: "100%", height: "200%", paddingTop: 200 }}
            />
          </View>
          <View className="flex-1 ml-2">
            <View className="h-full">
              <View className="mb-2 border-2 border-heading3 px-1 flex-1 justify-evenly">
                <Text className="text-heading3 font-[aurebesh] text-xl">
                  {name === "" ? "Imperial Citizen" : name}
                </Text>
                <Text className="text-heading3 font-semibold text-md mb-1">
                  {name === "" ? "Imperial Citizen" : name}
                </Text>
              </View>
              <View className="px-1 border-2 border-heading3 flex-1 justify-evenly">
                <View className="flex-row items-center justify-start w-full overflow-hidden">
                  <Ionicons
                    name="footsteps"
                    size={16}
                    color={Colors.global.heading3}
                  />
                  <Text className="text-heading3 font-semibold text-md pl-1">
                    {species?.species}
                  </Text>
                </View>
                <View className="flex-row items-center justify-start w-full overflow-hidden">
                  <Ionicons
                    name="planet"
                    size={16}
                    color={Colors.global.heading3}
                  />
                  <Text className="text-heading3 font-[Elektra] text-md pl-1">
                    {homeworld === "" ? "Unknown" : homeworld}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row">
        <View
          className="border-l-2 border-heading3 px-2 pb-2 flex-1"
          style={{
            shadowColor: Colors.global.heading3,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}
        >
          <View className="flex-row h-[14vw]">
            <View className="w-[14vw]  overflow-hidden border-2 border-heading3 p-2">
              <Image
                source={career?.image}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <View className="flex-1 ml-2 border-2 justify-evenly border-heading3 p-1">
              <View className="flex-row items-center justify-start w-full overflow-hidden">
                <Ionicons
                  name="hammer"
                  size={16}
                  color={Colors.global.heading3}
                />
                <Text className="text-heading3 font-semibold text-md pl-1">
                  {specialization?.name}
                </Text>
              </View>
              <View className="flex-row items-center justify-start w-full overflow-hidden">
                <Ionicons
                  name="wallet"
                  size={16}
                  color={Colors.global.heading3}
                />
                <Text className="text-heading3 font-[Elektra] text-md pl-1">
                  500<Text className="font-[aurebesh]">$</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-row flex-1">
          <View className="absolute top-0 left-0 border-heading3">
            <Text className="text-heading3 font-[aurebesh] text-md">abd</Text>
            <Text className="text-heading3 font-[aurebesh] text-md">jk</Text>
            <Text className="text-heading3 font-[aurebesh] text-md">g</Text>
          </View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "180deg" }],
              borderTopWidth: screenWidth * 0.14 + 8,
              borderRightWidth: screenWidth * 0.14 + 8,
              borderTopColor: "#4b5563",
              marginRight: -1,
              marginTop: -1,
            }}
          />
          <View className="absolute">
            <TriangleCorner
              style={{
                transform: [{ rotate: "180deg" }],
                borderTopWidth: screenWidth * 0.14 + 8,
                borderRightWidth: screenWidth * 0.14 + 8,
                borderTopColor: "#9ca3af",
                marginRight: 4,
                marginTop: 2,
              }}
            />
          </View>
          <View className="bg-gray-400 h-full flex-1 border-gray-600 border-r-2 border-t-2" />
        </View>
      </View>

      <View
        className="bg-gray-400 w-full h-[16vw] border-x-2 border-b-2 border-gray-600 flex-row"
        style={{ marginTop: -1 }}
      >
        <View className="border-t-2 border-gray-600 flex-1 p-3 justify-center">
          <Text className="font-[Elektra] text-md text-gray-500">
            Imperial ID
          </Text>
          <Text className="font-[Elektra] text-md text-gray-500">
            2909-0238-2102-9092
          </Text>
        </View>
        <View className="flex-1" />
      </View>

      <Text className="text-heading3 font-[Elektra] text-2xl mt-[2vh]">
        Character Stats
      </Text>

      <View className="w-full mb-[2vh]">
        <View className="flex-row justify-end">
          <View className="bg-heading3 w-[100%]">
            <Text className="pl-[52px] pt-[8px] text-lg text-white font-[Elektra] capitalize">
              Characteristics
            </Text>
          </View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "-90deg" }],
              borderTopWidth: "40px",
              borderRightWidth: "40px",
              borderTopColor: Colors.global.heading3,
            }}
          />
        </View>
        <View className="bg-heading3 p-3">
          <View className="flex-row">
            <View className="w-full flex flex-row justify-between items-center flex-wrap border-t-2 border-statblockbackground py-[1.5vh]">
              <SpeciesCharacteristic
                title="Brawn"
                level={characteristics[0].level}
              />
              <SpeciesCharacteristic
                title="Agility"
                level={characteristics[1].level}
              />
              <SpeciesCharacteristic
                title="Intellect"
                level={characteristics[2].level}
              />
              <SpeciesCharacteristic
                title="Cunning"
                level={characteristics[3].level}
              />
              <SpeciesCharacteristic
                title="Willpower"
                level={characteristics[4].level}
              />
              <SpeciesCharacteristic
                title="Presence"
                level={characteristics[5].level}
              />
            </View>
          </View>
        </View>
      </View>

{skills && skills?.filter((skill) => skill.level > 0).length > 0 && (
      <View className="w-full mb-[2vh]">
        <View className="flex-row justify-end">
        <View className="bg-box w-[100%]">
            <Text className="pl-[52px] pt-[8px] text-lg text-white font-[Elektra] capitalize">
              Improved Skills
            </Text>
          </View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "-90deg" }],
              borderTopWidth: "40px",
              borderRightWidth: "40px",
              borderTopColor: Colors.global.box,
            }}
          />
        </View>
        <View className="bg-box p-3">
          <View className="flex-row">
            <View className="w-full flex border-t-2 border-statblockbackground py-[1.5vh]">
              {skills
                .filter((skill) => skill.level > 0)
                .map((skill, index) => (
                  <View
                    key={index}
                    className="flex-1 flex-row justify-between items-center"
                  >
                    <Text className="text-white font-semibold text-md">
                      {skill.name}
                    </Text>
                    <Text className="text-white font-semibold text-md">
                      {skill.level}
                    </Text>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </View>
)}

      <View className="w-full mb-[2vh]">
        <View className="flex-row justify-end">
        <View className="bg-heading3 w-[100%]">
            <Text className="pl-[52px] pt-[8px] text-lg text-white font-[Elektra] capitalize">
              Derived Attributes
            </Text>
          </View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "-90deg" }],
              borderTopWidth: "40px",
              borderRightWidth: "40px",
              borderTopColor: Colors.global.heading3,
            }}
          />
        </View>
        <View className="bg-heading3 p-3">
          <View className="flex-row">
            <View className="w-full flex flex-row justify-evenly items-center flex-wrap border-t-2 border-statblockbackground py-[1.5vh]">
              <SpeciesCharacteristic
                title="Wound Threshold"
                level={
                  characteristics[0].level +
                  (species ? species?.woundThreshold : 0)
                }
              />
              <SpeciesCharacteristic
                title="Strain Threshold"
                level={
                  characteristics[4].level +
                  (species ? species?.strainThreshold : 0)
                }
              />
              <SpeciesCharacteristic title="Soak Level" level={0} />
              <SpeciesCharacteristic
                title="Encum. Level"
                level={characteristics[0].level}
              />
            </View>
          </View>
        </View>
      </View>

      {specialization && specialization?.talents?.talents.filter((talent) => talent.purchased)
        .length > 0 && (
        <View className="w-full my-[2vh]">
          <View className="flex-row justify-end">
          <View className="bg-box w-[100%]">
            <Text className="pl-[52px] pt-[8px] text-lg text-white font-[Elektra] capitalize">
              Purchased Talents
            </Text>
          </View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "-90deg" }],
              borderTopWidth: "40px",
              borderRightWidth: "40px",
              borderTopColor: Colors.global.box,
            }}
          />
          </View>
          <View className="bg-box p-3">
            <View className="flex-row">
              <View className="w-full flex border-t-2 border-statblockbackground py-[1.5vh]">
                {specialization?.talents?.talents
                  .filter((talent) => talent.purchased)
                  .map((talent, index) => (
                    <View
                      key={index}
                      className="flex-1 flex-row justify-between items-center"
                    >
                      <Text className="text-white font-semibold text-md">
                        {talent.talent.name}
                      </Text>
                      <Text className="text-white font-semibold text-md">
                        {talent.talent.active ? "Active" : "Passive"}
                      </Text>
                    </View>
                  ))}
              </View>
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default Summary;
