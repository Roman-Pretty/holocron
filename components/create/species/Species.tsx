import React, { useEffect, useState } from "react";
import { ActivityIndicator, View, ViewToken, FlatList } from "react-native";
import SpeciesItem from "./SpeciesItem";
import SpeciesFilter from "./SpeciesFilter";
import { InitialPlayerStateInterface } from "@/constants/InitialPlayerState";
import SpeciesData from "@/constants/SpeciesData";
import { Species } from "@/types/Types";
import { useSharedValue } from "react-native-reanimated";

interface SpeciesProps {
  state: InitialPlayerStateInterface;
  setState: (key: string, value: any) => void;
}

interface FilterItem {
  type: "filter";
  tags: string[];
  selectedTags: string[];
  onSelectTag: (tag: string) => void;
}

interface SpeciesListItem {
  type: "species";
  species: Species;
}

const SpeciesElement: React.FC<SpeciesProps> = ({
  state: { species, selectedSpeciesOption },
  setState,
}) => {
  const [loading, setLoading] = useState(true);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const viewableItems = useSharedValue<ViewToken[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" color="#000" />
      </View>
    );
  }

  // Define characteristic labels (tags)
  // Define characteristic labels (tags)
  const tags: string[] = [
    "Neutral",
    "Brawn",
    "Agility",
    "Intellect",
    "Cunning",
    "Willpower",
    "Presence",
  ];

  // Filter species based on selected tags and characteristic level
  const filteredSpecies: Species[] =
    selectedTags.length > 0
      ? SpeciesData.filter((species) => {
          const hasHighCharacteristic = selectedTags.some(
            (tag) =>
              tag !== "Neutral" &&
              species.characteristics[tags.indexOf(tag) - 1] >= 3
          );

          const isNeutralSelected = selectedTags.includes("Neutral");
          const hasNoHighCharacteristics = !species.characteristics.some(
            (char) => char > 2
          );

          if (isNeutralSelected) {
            return hasNoHighCharacteristics || hasHighCharacteristic;
          } else {
            return hasHighCharacteristic;
          }
        })
      : SpeciesData;

  // Create the list data array with SpeciesFilter as the first item
  const listData: (FilterItem | SpeciesListItem)[] = [
    {
      type: "filter",
      tags,
      selectedTags,
      onSelectTag: (tag: string) => {
        if (selectedTags.includes(tag)) {
          setSelectedTags(selectedTags.filter((t) => t !== tag)); // Deselect tag
        } else {
          setSelectedTags([...selectedTags, tag]); // Select tag
        }
      },
    },
    ...filteredSpecies.map((species) => ({
      type: "species" as const,
      species,
    })),
  ];

  return (
    <FlatList
      data={listData}
      keyExtractor={(item, index) => index.toString()}
      onViewableItemsChanged={({ viewableItems: vItems }) => {
        viewableItems.value = vItems;
      }}
      renderItem={({ item, index }) => {
        if (item.type === "filter") {
          // Render SpeciesFilter
          const filterItem = item as FilterItem; // Type assertion
          return (
            <SpeciesFilter
              tags={filterItem.tags}
              selectedTags={filterItem.selectedTags}
              onSelectTag={filterItem.onSelectTag}
            />
          );
        } else {
          // Render SpeciesItem
          const speciesItem = item as SpeciesListItem; // Type assertion
          return (
            <SpeciesItem
              key={speciesItem.species.species} // Ensure a unique key
              index={index}
              viewableItems={viewableItems}
              setSelectedSpeciesOption={(selectedSpeciesOption) =>
                setState("selectedSpeciesOption", selectedSpeciesOption)
              }
              species={speciesItem.species}
              selectedSpecies={species}
              setSelectedSpecies={(species: Species) =>
                setState("species", species)
              }
            />
          );
        }
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default SpeciesElement;
