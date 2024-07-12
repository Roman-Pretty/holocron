import TalentItem from "@/components/edit/talents/TalentItem";
import { Specialization, Talent } from "@/types/Types";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const TalentTree = ({
  tree,
  clonedSpecializations,
  setClonedSpecializations,
}: {
  tree: Specialization;
  clonedSpecializations: Specialization[];
  setClonedSpecializations: (specializations: Specialization[]) => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  function setCurrentSpecialization(specialization: Specialization) {
    const index = clonedSpecializations.findIndex(
      (s) => s.name === specialization.name
    );
    const newSpecializations = [...clonedSpecializations];
    newSpecializations[index] = specialization;
    setClonedSpecializations(newSpecializations);
  }

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const chunkArray = (
    array: { talent: Talent; purchased?: boolean; cost?: number }[],
    size: number
  ) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const talentChunks = chunkArray(tree?.talents?.talents || [], 4);

  return (
    <View className="px-2">
      <View className="bg-neutral-800 rounded-lg mb-2 w-full">
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 16,
              width: "100%",
            },
          ]}
          hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
          onPress={toggleExpand}
        >
          <Text className="text-xs uppercase text-white font-bold">
            {tree.name}
          </Text>
          <Ionicons
            size={24}
            name={expanded ? "chevron-down" : "chevron-forward"}
            color="#fff"
          />
        </Pressable>
        {expanded && (
          <View className="px-4 pb-4">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {talentChunks.map((chunk, i) => (
                <View
                  key={i}
                  className={`justify-between ${
                    i !== talentChunks.length - 1 && "mr-[20vw]"
                  }`}
                >
                  {chunk.map((talent, index) => (
                    <TalentItem
                      talent={talent}
                      cost={talent.cost ? talent.cost : 5 * (i + 1)}
                      setSpecialization={setCurrentSpecialization}
                      specialization={tree}
                      key={index}
                      row={index}
                      col={i}
                    />
                  ))}
                  {chunk.map((talent, index) => (
                    <React.Fragment key={index}>
                      {tree && tree?.talents?.hPath[index][i] === 1 && (
                        <View
                          className={`h-[20px] w-[30vw] absolute -right-[20vw] ${
                            index === 0
                              ? "top-[10%]"
                              : index === 1
                              ? "top-[36%]"
                              : index === 2
                              ? "top-[64%]"
                              : "top-[90%]"
                          } bg-neutral-700`}
                          style={{ zIndex: -1 }}
                        />
                      )}
                      {tree && tree?.talents?.vPath[i][index] === 1 && (
                        <View
                          className={`w-[20px] h-[15vh] absolute right-[50%] ${
                            index === 0
                              ? "top-[10%]"
                              : index === 1
                              ? "top-[45%]"
                              : "top-[65%]"
                          } bg-neutral-700`}
                          style={{ zIndex: -1 }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};

export default TalentTree;
