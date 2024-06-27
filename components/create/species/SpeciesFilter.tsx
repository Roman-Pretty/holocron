// SpeciesFilter.tsx

import Button from "@/components/form/Button";
import React from "react";
import { View } from "react-native";
import Animated from "react-native-reanimated";

interface SpeciesFilterProps {
  tags: string[];
  selectedTags: string[];
  onSelectTag: (tag: string) => void;
}

const SpeciesFilter: React.FC<SpeciesFilterProps> = ({
  tags,
  selectedTags,
  onSelectTag,
}) => {
  const isSelected = (tag: string) => selectedTags.includes(tag);

  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="pb-4"
    >
      {tags.map((tag, index) => (
        <View key={index}>
          {isSelected(tag) && (
            <Button
              cName={`rounded-full mr-2 border-2 font-bold  ${
                tag === "Neutral"
                  ? "bg-neutral-800 border-neutral-800"
                  : tag === "Brawn"
                  ? "bg-red-500 border-red-500"
                  : tag === "Intellect"
                  ? "bg-sky-400 border-sky-400"
                  : tag === "Cunning"
                  ? "bg-orange-300 border-orange-300"
                  : tag === "Willpower"
                  ? "bg-pink-400 border-pink-400"
                  : "bg-yellow-400 border-yellow-400"
              }`}
              onPress={() => onSelectTag(tag)}
              textClassName="px-4 text-white font-bold font-serif capitalize"
              title={tag}
            />
          )}
        </View>
      ))}
      {tags.map((tag, index) => (
        <View key={index} className="">
          {!isSelected(tag) && (
            <Button
              cName="border-2 border-box rounded-full mr-2 bg-transparent"
              onPress={() => onSelectTag(tag)}
              textClassName=" px-4 text-box font-bold capitalize"
              title={tag}
            />
          )}
        </View>
      ))}
    </Animated.ScrollView>
  );
};

export default SpeciesFilter;
