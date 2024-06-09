import React from "react";
import { View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Specialization } from "@/constants/Types";

interface PurchasedTalentsProps {
  specialization: Specialization;
}

const PurchasedTalents = ({ specialization }: PurchasedTalentsProps) => {
  return (
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
            {specialization?.talents?.talents.filter(talent => talent.purchased).map((talent, index) => (
              <View key={index} className="flex-1 flex-row justify-between items-center">
                <Text className="text-white font-semibold text-md">{talent.talent.name}</Text>
                <Text className="text-white font-semibold text-md">
                  {talent.talent.active ? "Active" : "Passive"}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default PurchasedTalents;
