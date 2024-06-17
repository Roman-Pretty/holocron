import CharacterCard from "@/components/character/character-card/CharacterCard";
import Title from "@/components/character/Title";
import WeaponCard from "@/components/character/weapon-card/WeaponCard";
import ImageWrapper from "@/components/ImageWrapper";
import { CharacterContext } from "@/contexts/CharacterContext";
import React, { useContext } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View } from "react-native";
import CombatSkills from "@/components/character/skills-cards/CombatSkills";
import SocialSkills from "@/components/character/skills-cards/SocialSkills";
import KnowledgeSkills from "@/components/character/skills-cards/KnowledgeSkills";
import GeneralSkills from "@/components/character/skills-cards/GeneralSkills";

const Spacer = () => <View className="h-[1.5vh]" />;

const Page = () => {
  const { character } = useContext(CharacterContext);

  return (
    <ImageWrapper>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={true}
        style={{ marginBottom: 8 }}
      >
        <Spacer />
        <Title title="Overview" />
        <CharacterCard />
        <Spacer />
        <Spacer />
        <Title title="Characteristics" />
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
