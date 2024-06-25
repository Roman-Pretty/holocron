import Button from "@/components/form/Button";
import { Specialization } from "@/types/Types";
import React from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";

interface SpeciesItemProps {
  specialization: Specialization;
  selectedSpecialization: Specialization | null;
  setSelectedSpecialization: (specialization: Specialization) => void;
}

const SpecializationItem = ({
  specialization,
  selectedSpecialization,
  setSelectedSpecialization,
}: SpeciesItemProps) => {
  return (
    <Animated.View
      className={`w-full bg-neutral-800 mb-2 rounded-lg items-center`}
    >
      <View className="px-6 py-4 w-full items-center">
        <Text className="text-lg text-white font-[Elektra] mt-2">
          {specialization.name}
        </Text>
        <Text className="text-sm text-center text-white/80 mt-2">
          {specialization.desc}
        </Text>
        {specialization.name === selectedSpecialization?.name ? (
          <Button
            title={`Selected ${specialization.name}`}
            disabled
            cName="mt-4 bg-white border border-white w-full items-center justify-center px-0  rounded-sm"
            textClassName="text-center w-full"
          />
        ) : (
          <Button
            title={`Select ${specialization.name}`}
            onPress={() => {
              setSelectedSpecialization(specialization);
            }}
            cName="mt-4 bg-transparent border border-white w-full items-center justify-center px-0  rounded-sm"
            textClassName="text-center w-full"
          />
        )}
      </View>
      <View className="px-6 pb-4 w-full items-start bg-black/20 rounded-b-lg">
        <Text className="text-xs text-white font-bold mt-2">SKILLS</Text>
        <Text className="text-xs text-white/80 mt-1">
          {specialization.skills.map((s) => s).join(", ")}
        </Text>
      </View>
    </Animated.View>
  );
};

export default SpecializationItem;
