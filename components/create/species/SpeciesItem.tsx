import Characteristic from "@/components/Characteristic";
import Button from "@/components/form/Button";
import { Colors } from "@/constants/Colors";
import { Species } from "@/types/Types";
import { Ionicons } from "@expo/vector-icons";
import SpeciesText from "./SpeciesText";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View
} from "react-native";

type SpeciesItemProps = {
  species: Species;
  selectedSpecies: Species | null;
  setSelectedSpecies: (species: Species) => void;
  setSelectedBonusSkill: (skill: string) => void;
};

const SpeciesItem: React.FC<SpeciesItemProps> = React.memo(
  ({ setSelectedBonusSkill, species, selectedSpecies, setSelectedSpecies }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    function handleSelect() {
      setSelectedSpecies(species);
    }

    return (
      <View className={`w-full bg-box mb-2 rounded-lg items-center`}>
        <View className="px-6 py-4 w-full items-center">
        <View className="absolute top-6 left-6">
          {species.characteristics[0] >= 3 && (
            <View className="bg-red-500 py-1 w-12 items-center justify-center mb-2 rounded-md">
                <Text className="font-[Elektra] pt-0.5 text-card">BR</Text>
              </View>
            )}
            {species.characteristics[1] >= 3 && (
            <View className="bg-lime-500 py-1 w-12 items-center justify-center mb-2 rounded-md">
                <Text className="font-[Elektra] pt-0.5 text-card">AGI</Text>
              </View>
            )}
            {species.characteristics[2] >= 3 && (
            <View className="bg-sky-400 py-1 w-12 items-center justify-center mb-2 rounded-md">
                <Text className="font-[Elektra] pt-0.5 text-card">INT</Text>
              </View>
            )}
            {species.characteristics[3] >= 3 && (
            <View className="bg-orange-300 py-1 w-12 items-center justify-center mb-2 rounded-md">
                <Text className="font-[Elektra] pt-0.5 text-card">CUN</Text>
              </View>
            )}
            {species.characteristics[4] >= 3 && (
            <View className="bg-pink-400 py-1 w-12 items-center justify-center mb-2 rounded-md">
                <Text className="font-[Elektra] pt-0.5 text-card">WIL</Text>
              </View>
            )}
            {species.characteristics[5] >= 3 && (
            <View className="bg-yellow-400 py-1 w-12 items-center justify-center mb-2 rounded-md">
                <Text className="font-[Elektra] pt-0.5 text-card">PRE</Text>
              </View>
            )}
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
                <Characteristic title="Brawn" value={species.characteristics[0]} scale={10} borderWidth={1} />
                <Characteristic title="Agility" value={species.characteristics[1]} scale={10} borderWidth={1} />
                <Characteristic title="Intellect" value={species.characteristics[2]} scale={10} borderWidth={1} />
                <Characteristic title="Cunning" value={species.characteristics[3]} scale={10} borderWidth={1} />
                <Characteristic title="Willpower" value={species.characteristics[4]} scale={10} borderWidth={1} />
                <Characteristic title="Presence" value={species.characteristics[5]} scale={10} borderWidth={1} />
          </View>
          {species.species === selectedSpecies?.species ? (
            <Button
              title={`Selected ${species.species}`}
              disabled
              cName="mt-4 bg-white border border-white w-full items-center justify-center px-0"
              textClassName="text-center w-full"
            />
          ) : (
            <Button
              title={`Select ${species.species}`}
              onPress={handleSelect}
              cName="mt-4 bg-transparent border border-white w-full items-center justify-center px-0"
              textClassName="text-center w-full"
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
                      {/* {ability.desc} */}
                      <SpeciesText text={ability.desc} />
                    </Text>
                  ))}
                </View>
              </>
            )}
        </View>
      </View>
    );
  }
);

export default SpeciesItem;
