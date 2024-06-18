import ImageWrapper from "@/components/ImageWrapper";
import Title from "@/components/character/Title";
import CharacterCard from "@/components/character/character-card/CharacterCard";
import CharacteristicsCard from "@/components/character/characteristics-card/CharacteristicsCard";
import EffectsCard from "@/components/character/effects-card/EffectsCard";
import CombatSkills from "@/components/character/skills-cards/CombatSkills";
import GeneralSkills from "@/components/character/skills-cards/GeneralSkills";
import KnowledgeSkills from "@/components/character/skills-cards/KnowledgeSkills";
import SocialSkills from "@/components/character/skills-cards/SocialSkills";
import { CharacterContext } from "@/contexts/CharacterContext";
import React, { useContext } from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Spacer = () => <View className="h-[1.5vh]" />;

const Page = () => {
  const { character } = useContext(CharacterContext);

  return (
    <ImageWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 8 }}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      >
        <Spacer />
        <Title title="Overview" />
        <CharacterCard />
        <Spacer />
        <Spacer />
        <Title title="Effects" />
        <EffectsCard />
        <Spacer />
        <Spacer />

        <Title title="Characteristics" />
        <CharacteristicsCard />
        <Spacer />
        <Spacer />
        <Title title="Skills" />
        <CombatSkills />
        <SocialSkills />
        <KnowledgeSkills />
        <GeneralSkills />
      </KeyboardAwareScrollView>
    </ImageWrapper>
  );
};

export default Page;
