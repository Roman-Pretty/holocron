import Characteristic from "@/components/Characteristic";
import Button from "@/components/form/Button";
import { Species } from "@/types/Types";
import { Ionicons } from "@expo/vector-icons";
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
  ViewToken,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import SpeciesText from "./SpeciesText";

type SpeciesItemProps = {
  species: Species;
  selectedSpecies: Species | null;
  setSelectedSpecies: (species: Species) => void;
  setSelectedBonusSkill: (skill: string) => void;
  viewableItems: Animated.SharedValue<ViewToken[]>;
  index: number;
};

const SpeciesItem: React.FC<SpeciesItemProps> = React.memo(
  ({
    setSelectedBonusSkill,
    species,
    selectedSpecies,
    setSelectedSpecies,
    viewableItems,
    index,
  }) => {
    const [loading, setLoading] = useState(true);

    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter((item) => item.isViewable)
          .find((viewableItem) => viewableItem.index === index)
      );
      return {
        opacity: withTiming(isVisible ? 1 : 0.9), // 0.9
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.9), // 0.9
          },
        ],
      };
    }, [viewableItems.value]);

    const handleSelect = useCallback(() => {
      setSelectedSpecies(species);
    }, [setSelectedSpecies, species]);

    const renderCharacteristics = useCallback(() => {
      const characteristics = [
        { value: species.characteristics[0], label: "BR", color: "bg-red-500" },
        {
          value: species.characteristics[1],
          label: "AGI",
          color: "bg-lime-500",
        },
        {
          value: species.characteristics[2],
          label: "INT",
          color: "bg-sky-400",
        },
        {
          value: species.characteristics[3],
          label: "CUN",
          color: "bg-orange-300",
        },
        {
          value: species.characteristics[4],
          label: "WIL",
          color: "bg-pink-400",
        },
        {
          value: species.characteristics[5],
          label: "PRE",
          color: "bg-yellow-400",
        },
      ];

      return characteristics.map((char, index) =>
        char.value >= 3 ? (
          <View
            key={index}
            className={`${char.color} py-1 w-12 items-center justify-center mb-2 rounded-md`}
          >
            <Text className="font-[Elektra] pt-0.5 text-card">
              {char.label}
            </Text>
          </View>
        ) : null
      );
    }, [species.characteristics]);

    return (
      <Animated.View
        className={`w-full bg-box mb-2 rounded-lg items-center`}
        style={rStyle}
      >
        <View className="px-6 py-4 w-full items-center">
          <View className="absolute top-6 left-6">
            {renderCharacteristics()}
          </View>
          <View
            className={`w-[30vw] h-[30vw] p-[1vw] overflow-hidden rounded-full border-2 border-white/10`}
          >
            <View className={`overflow-hidden rounded-full`}>
              <ImageBackground
                source={require("@/assets/images/species_backgrounds/ship.jpeg")}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
                blurRadius={3}
              >
                {loading && (
                  <View className="w-full h-full flex items-center justify-center">
                    <ActivityIndicator size="small" color={"#fff"} />
                  </View>
                )}
                <Image
                  source={species.image}
                  resizeMode="cover"
                  style={{ width: "100%", height: "200%", paddingTop: 200 }}
                  onLoad={() => setLoading(false)}
                />
              </ImageBackground>
            </View>
          </View>
          <Text className="text-lg text-white font-[Elektra] mt-2">
            {species.species}
          </Text>
          <View className="flex-row items-center justify-center">
            <View className="w-1/6 items-center justify-center flex-row mt-1">
              <Ionicons size={16} name="heart" color="white" />
              <Text className="text-sm text-white/80 pl-1">
                {species.woundThreshold}
              </Text>
            </View>
            <View className="w-1/6 items-center justify-center flex-row mt-1">
              <Ionicons size={16} name="happy" color="white" />
              <Text className="text-sm text-white/80 pl-1">
                {species.strainThreshold}
              </Text>
            </View>
            <View className="w-1/6 items-center justify-center flex-row mt-1">
              <Ionicons size={16} name="locate" color="white" />
              <Text className="text-sm text-white/80 pl-1">
                {species.startingXP}
              </Text>
            </View>
          </View>
          <Text className="text-sm text-center text-white/80 mt-2">
            {species.desc}
          </Text>
          <View className="w-full justify-evenly flex-row py-2">
            {species.characteristics.map((value, index) => (
              <Characteristic
                key={index}
                title={
                  [
                    "Brawn",
                    "Agility",
                    "Intellect",
                    "Cunning",
                    "Willpow.",
                    "Presence",
                  ][index]
                }
                value={value}
                scale={10}
                borderWidth={1}
              />
            ))}
          </View>
          {species.species === selectedSpecies?.species ? (
            <Button
              title={`Selected ${species.species}`}
              disabled
              cName="mt-4 bg-white border border-white w-full items-center justify-center px-0 rounded-sm"
              textClassName="text-center w-full uppercase"
            />
          ) : (
            <Button
              title={`Select ${species.species}`}
              onPress={handleSelect}
              cName="mt-4 bg-transparent border border-white w-full items-center justify-center px-0 rounded-sm"
              textClassName="text-center w-full uppercase"
            />
          )}
        </View>
        <View className="px-6 pb-4 w-full items-start bg-slate-900/20 rounded-b-lg">
          <Text className="text-xs text-white font-bold mt-2">BONUS</Text>
          <SpeciesText text={species.speciesBonus} />
          {species.specialAbilities[0] &&
            species.specialAbilities[0].name !== "None" && (
              <>
                <Text className="text-xs text-white font-bold mt-2">
                  ABILITIES
                </Text>
                <View className="items-start">
                  {species.specialAbilities.map((ability, index) => (
                    <Text key={index} className="text-xs text-white/80 mt-1">
                      <Text className="font-bold">{ability.name}</Text>:{" "}
                      <SpeciesText text={ability.desc} />
                    </Text>
                  ))}
                </View>
              </>
            )}
        </View>
      </Animated.View>
    );
  }
);

export default SpeciesItem;
