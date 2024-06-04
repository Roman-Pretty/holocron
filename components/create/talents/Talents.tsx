import { Specialization } from "@/constants/Types";
import React from "react";
import { ScrollView, View } from "react-native";
import TalentItem from "./TalentItem";

interface TalentsComponentProps {
  specialization: Specialization | null;
  setSpecialization: (specialization: Specialization) => void;
}

const TalentsComponent = ({ specialization, setSpecialization }: TalentsComponentProps) => {
  return (
    <ScrollView horizontal>
      {[...Array(6)].map((_, i) => {
        return (
          <View key={i} className={`justify-between ${i != 5 && 'mr-[20vw]'}`}>
            {specialization?.talents?.talents
              .filter((talent) => talent.position.column === i + 1)
              .map((talent, index) => {
                return (
                    <TalentItem
                      setSpecialization={setSpecialization}
                      talent={talent}
                      specialization={specialization}
                      key={index}
                    />
                );
              })}
          </View>

        );
      })}

    </ScrollView>
  );
};

export default TalentsComponent;
