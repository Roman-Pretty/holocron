import { CharacterContext } from "@/contexts/CharacterContext";
import { Specialization } from "@/types/Types";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import TalentTree from "./TalentTree";

const Talents = ({
  clonedSpecializations,
  setClonedSpecializations,
}: {
  clonedSpecializations: Specialization[];
  setClonedSpecializations: (specializations: Specialization[]) => void;
}) => {
  return (
    <FlatList
      data={clonedSpecializations}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TalentTree
          tree={item}
          clonedSpecializations={clonedSpecializations}
          setClonedSpecializations={setClonedSpecializations}
        />
      )}
    />
  );
};

export default Talents;
