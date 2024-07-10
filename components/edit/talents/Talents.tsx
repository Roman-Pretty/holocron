import { View, Text } from "react-native";
import React from "react";
import { Specialization } from "@/types/Types";
import { CharacterContext } from "@/contexts/CharacterContext";
import { FlatList } from "react-native-gesture-handler";
import TalentTree from "./TalentTree";

const Talents = ({
  newSpecializations,
  setNewSpecializations,
}: {
  newSpecializations: Specialization[];
  setNewSpecializations: (specializations: Specialization[]) => void;
}) => {
  const { character, setCharacter } = React.useContext(CharacterContext);
  
  return (
      <FlatList
        data={character?.data.specializations || []}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <TalentTree tree={item} />}
      />
  );
};

export default Talents;
