import React from "react";
import { View, Text } from "react-native";
import { Colors } from "@/constants/Colors";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Specialization } from "@/types/Types";

interface PurchasedTalentsProps {
  specialization: Specialization;
}

const PurchasedTalents = ({ specialization }: PurchasedTalentsProps) => {
  return (
    <View className="w-full mb-2 bg-box p-6 pb-8 rounded-lg">
      <Text className="font-[Elektra] text-white text-xl w-full text-center mb-6">
        Purchased Talents
      </Text>
      <View className="flex-row">
        <View className="w-full">
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
  );
};

export default PurchasedTalents;
