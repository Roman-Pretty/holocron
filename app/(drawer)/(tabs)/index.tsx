import CharacterCard from "@/components/character/character-card/CharacterCard";
import Title from "@/components/character/Title";
import WeaponCard from "@/components/character/weapon-card/WeaponCard";
import ImageWrapper from "@/components/ImageWrapper";
import { CharacterContext } from "@/contexts/CharacterContext";
import React, { useContext } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Page = () => {
  const { character } = useContext(CharacterContext);

  return (
    <ImageWrapper>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={true} style={{marginBottom: 8}}>
        <Title title="Overview" />
        <CharacterCard />
        <Title title="Skills" />
      </KeyboardAwareScrollView>
    </ImageWrapper>
  );
};

export default Page;
