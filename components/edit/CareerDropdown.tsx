import { Colors } from "@/constants/Colors";
import { CharacterContext } from "@/contexts/CharacterContext";
import { Career, Specialization } from "@/types/Types";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

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
        <Text className="text-xs uppercase text-white font-bold">
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
                  <Ionicons
                    size={24}
                    name="checkbox"
                    color={Colors.global.boxheading}
                  />
                </>
              ) : isSpecializationSelected(spec) ? (
                <>
                  <Ionicons size={24} name="checkbox" color="#fff" />
                </>
              ) : (
                <>
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
