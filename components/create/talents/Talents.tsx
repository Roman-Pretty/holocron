import { Specialization, Talent } from "@/constants/Types";
import React from "react";
import { ScrollView, View, Text } from "react-native";
import TalentItem from "./TalentItem";

interface TalentsComponentProps {
  specialization: Specialization | null;
  setSpecialization: (specialization: Specialization) => void;
}

const TalentsComponent = ({ specialization, setSpecialization }: TalentsComponentProps) => {

  const chunkArray = (array: { talent: Talent, purchased?: boolean, cost?: number }[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const talentChunks = chunkArray(specialization?.talents?.talents || [], 4);

  return (
    <ScrollView horizontal>
      {talentChunks.map((chunk, i) => {
        return (
          <View key={i} className={`justify-between ${i !== talentChunks.length - 1 && 'mr-[20vw]'}`}>
            {chunk.map((talent, index) => {
              return (
                <TalentItem
                  talent={talent}
                  cost={5 * (i + 1)}
                  setSpecialization={setSpecialization}
                  specialization={specialization}
                />
              );
            })}
            {chunk.map((talent, index) => {
              return (
                <>
                  {specialization && specialization?.talents?.hPath[index + (4 * i)] === 1 &&
                    <View className={`h-[20px] w-[30vw] absolute -right-[20vw] ${index === 0 ? 'top-[10%]' : index === 1 ? 'top-[36%]' : index === 2 ? 'top-[64%]' : 'top-[90%]'
                      } bg-gray-400`}
                      style={{ zIndex: -1 }}
                    />
                  }
                  {specialization && specialization?.talents?.vPath[index + (4 * i)] === 1 &&
                    <View className={`w-[20px] h-[15vh] absolute right-[50%] ${index === 0 ? 'top-[20%]' : index === 1 ? 'top-[45%]' : 'top-[65%]'
                      } bg-gray-400`}
                      style={{ zIndex: -1 }}
                    />
                  }
                </>
              );
            })}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default TalentsComponent;
