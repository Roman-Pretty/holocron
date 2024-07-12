import ImageWrapper from "@/components/ImageWrapper";
import InventorySlot from "@/components/inventory/InventorySlot";
import { CharacterContext } from "@/contexts/CharacterContext";
import { FontAwesome6 } from "@expo/vector-icons";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Page = () => {
  const { character, setCharacter } = useContext(CharacterContext);

  return (
    <ImageWrapper>
      <ScrollView style={{ flex: 1 }}>
        <View className="bg-box m-2 rounded-lg p-2 ">
          <View className="mb-2 flex-row justify-between items-center">
            <Text className="text-xs font-white font-bold text-white ">
              Player Inventory
            </Text>
            <View className="flex-row items-center">
              <FontAwesome6 name="weight-hanging" size={12} color={"#fff"} />
              <Text className="text-xs font-white font-bold text-white pl-1">
                {character?.data.encumbrance.current}/
                {character?.data.encumbrance.threshold}
              </Text>
            </View>
          </View>
          <View className="flex-row justify-evenly flex-wrap">
            {character?.data.inventory.map((item, index) => (
              <InventorySlot key={index} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageWrapper>
  );
};

export default Page;
