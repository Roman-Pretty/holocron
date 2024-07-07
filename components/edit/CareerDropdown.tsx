import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import { Career, Specialization } from "@/types/Types";
import { Ionicons } from "@expo/vector-icons";
import { CharacterContext } from "@/contexts/CharacterContext";
import { Colors } from "@/constants/Colors";

const CareerDropdown = ({
  newSpecializations,
  setNewSpecializations,
  career,
}: {
  newSpecializations: Specialization[];
  setNewSpecializations: (specializations: Specialization[]) => void;
  career: Career;
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  function addSpecialization(spec: Specialization) {
    setNewSpecializations([...newSpecializations, spec]);
  }

  function removeSpecialization(spec: Specialization) {
    setNewSpecializations(
      newSpecializations.filter((s) => s.name !== spec.name)
    );
  }

  function toggleSpecialization(spec: Specialization) {
    if (newSpecializations.some((s) => s.name === spec.name)) {
      removeSpecialization(spec);
    } else {
      addSpecialization(spec);
    }
  }

  function isSpecializationSelected(spec: Specialization) {
    return newSpecializations.some((s) => s.name === spec.name);
  }

  function calculateCost(spec: Specialization) {
    if (
      character &&
      character.data.specializations.some((s) => s.name === spec.name)
    )
      return (character.data.specializations.indexOf(spec) + 1) * 10;
    if (isSpecializationSelected(spec))
      return (
        (newSpecializations.indexOf(spec) +
          (character?.data?.specializations.length ?? 0) +
          1) *
        10
      );
    return (
      10 *
      (newSpecializations.length +
        (character?.data?.specializations.length ?? 0) +
        1)
    );
  }

  const { character, setCharacter } = React.useContext(CharacterContext);

  return (
    <View className="bg-neutral-800 rounded-lg mb-2 w-full">
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            width: "100%",
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
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 8,
                  width: "100%",
                },
              ]}
              key={spec.name}
              disabled={character?.data.specializations?.some(
                (s: Specialization) => s.name === spec.name
              )}
              onPress={() => toggleSpecialization(spec)}
            >
              <View className="w-2/3">
                <Text className="text-white font-bold">{spec.name}</Text>
                <Text className="text-xs text-white font-regular opacity-70">
                  {spec.desc}
                </Text>
              </View>

              {character?.data.specializations?.some(
                (s: Specialization) => s.name === spec.name
              ) ? (
                <>
                  <View className="flex-row items-center opacity-50">
                    <Ionicons
                      size={16}
                      name="locate"
                      color={Colors.global.boxheading}
                    />
                    <Text className="text-boxheading font-bold text-right pl-1">
                      {calculateCost(spec)}
                    </Text>
                  </View>
                  <Ionicons
                    size={24}
                    name="checkbox"
                    color={Colors.global.boxheading}
                  />
                </>
              ) : isSpecializationSelected(spec) ? (
                <>
                  <View className="flex-row items-center opacity-50">
                    <Ionicons
                      size={16}
                      name="locate"
                      color={Colors.global.boxheading}
                    />
                    <Text className="text-boxheading font-bold text-right pl-1">
                      {calculateCost(spec)}
                    </Text>
                  </View>
                  <Ionicons size={24} name="checkbox" color="#fff" />
                </>
              ) : (
                <>
                  <View className="flex-row items-center">
                    <Ionicons size={16} name="locate" color="#fff" />
                    <Text className="text-white font-bold text-right pl-1">
                      {calculateCost(spec)}
                    </Text>
                  </View>
                  <Ionicons size={24} name="square-outline" color="#fff" />
                </>
              )}
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default CareerDropdown;
