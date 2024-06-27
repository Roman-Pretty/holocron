import {
  Career,
  Characteristic,
  Skill,
  Specialization,
  Species,
} from "@/types/Types";
import React from "react";
import { Dimensions, ImageSourcePropType, ScrollView, Text } from "react-native";
import CharacterStats from "./CharacterStats";
import DerivedAttributes from "./DerivedAttibutes";
import IdentityCard from "./IdentityCard";
import ImprovedSkills from "./ImprovedSkills";
import PurchasedTalents from "./PurchasedTalents";
import { InitialPlayerStateInterface } from "@/constants/InitialPlayerState";

interface SummaryProps {
  state: InitialPlayerStateInterface
}

const Summary = ({
  state: {
    name,
    homeworld,
    species,
    portrait,
    career,
    specialization,
    characteristics,
    skills,
  },
}: SummaryProps) => {
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text className="text-heading3 font-[Elektra] text-2xl mt-[2vh]">Identity Card</Text>
      <IdentityCard
        screenWidth={screenWidth}
        name={name}
        homeworld={homeworld}
        species={species}
        portrait={portrait}
        career={career}
        specialization={specialization}
      />
      <CharacterStats characteristics={characteristics} />
      {skills?.filter(skill => skill.level > 0).length > 0 && <ImprovedSkills skills={skills} />}
      <DerivedAttributes characteristics={characteristics} species={species} />
      {specialization && specialization?.talents?.talents.filter(talent => talent.purchased).length > 0 && (
        <PurchasedTalents specialization={specialization} />
      )}
    </ScrollView>
  );
};

export default Summary;
