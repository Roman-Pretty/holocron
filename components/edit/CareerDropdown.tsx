import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { Career } from "@/types/Types";
import { Ionicons } from "@expo/vector-icons";
import { CharacterContext } from "@/contexts/CharacterContext";

const CareerDropdown = ({ career }: { career: Career }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const { character, setCharacter } = React.useContext(CharacterContext);

  return (
    <View className="bg-neutral-800 rounded-lg mb-2 w-full">
      <Pressable
        style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 16,
              width: '100%',
            },
          ]}
        hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
        onPress={toggleExpand}
      >
        <Text className="text-xl text-white font-[Elektra]">
          {career.name}{" "}
          {character?.data.career.name === career.name && "(Career)"}
        </Text>
        <Ionicons
          size={24}
          name={expanded ? "chevron-down" : "chevron-forward"}
          color="#fff"
        />
      </Pressable>
      {expanded && (
        <View className="px-4 pb-4">
          {career.specializations.map((spec) => (
            <Pressable
            style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                  width: '100%',
                },
              ]}
              key={spec.name}
            >
              <View className="w-2/3">
                <Text className="text-white font-bold">{spec.name}</Text>
                <Text className="text-xs text-white font-regular opacity-70">{spec.desc}</Text>
              </View>
              <Ionicons size={24} name="square-outline" color="#fff" />
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default CareerDropdown;
