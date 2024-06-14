import ImageWrapper from "@/components/ImageWrapper";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { CharacterContext } from "@/contexts/CharacterContext";
import { useContext } from "react";

const Page = () => {
  const { character } = useContext(CharacterContext);

  return (
    <ImageWrapper>
      <Text>page</Text>
      <Text>
        character: {character?.data.name} id: {character?.key}
      </Text>
    </ImageWrapper>
  );
};

export default Page;
