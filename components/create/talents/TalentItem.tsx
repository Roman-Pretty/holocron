import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import { Specialization, Talent } from "@/constants/Types";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import TalentText from "./TalentText";

interface TalentItemProps {
  talent: {
    talent: Talent;
    cost: number;
    purchased?: boolean;
    position: { column: number; row: number };
  };
  specialization: Specialization | null;
  setSpecialization: (specialization: Specialization) => void;
}

const TalentItem = ({
  talent,
  specialization,
  setSpecialization,
}: TalentItemProps) => {
  const [active, setActive] = React.useState(false);
  const [isStartPurchased, setIsStartPurchased] = React.useState(false);

  function getActivePointingTalents() {
    if (!specialization) return false;

    // Get all talents that point to the current talent
    const pointingTalents = specialization.talents.path
      .filter(
        (path) =>
          path.end.column === talent.position.column &&
          path.end.row === talent.position.row
      )
      .map((path) =>
        specialization.talents.talents.find(
          (t) =>
            t.position.column === path.start.column &&
            t.position.row === path.start.row
        )
      );

    // If no talents point to this talent, return true
    if (pointingTalents.length === 0) {
      return true;
    }

    // Check if any of the pointing talents are active (purchased)
    return pointingTalents.some((t) => t?.purchased);
  }

  useEffect(() => {
    if (specialization && !isStartPurchased) {
      setSpecialization({
        ...specialization,
        talents: {
          ...specialization?.talents,
          talents: specialization?.talents?.talents?.map((t) =>
            t.position === talent.position ? { ...t, purchased: false } : t
          ),
        },
      });
      setActive(false);
    }
  }, [isStartPurchased]);

  useEffect(() => {
    setIsStartPurchased(getActivePointingTalents());
  }, [specialization]);

  useEffect(() => {
    if (talent.purchased) {
      setActive(true);
    }
    setIsStartPurchased(getActivePointingTalents());
  }, [talent.purchased]);

  function updateTalent() {
    if (!specialization) return;
    setSpecialization({
      ...specialization,
      talents: {
        ...specialization?.talents,
        talents: specialization?.talents?.talents?.map((t) =>
          t.position === talent.position ? { ...t, purchased: !t.purchased } : t
        ),
      },
    });
    setActive(!active);
    setIsStartPurchased(getActivePointingTalents());
  }

  return (
    <TouchableOpacity
      onPress={() => updateTalent()}
      disabled={!isStartPurchased}
    >
      <View
        className={`w-[60vw] ${!isStartPurchased ? "opacity-50" : ""}`}
      >
        <View className="flex-row" >
          <View
            className={`flex-row ${talent.talent.active ? " bg-heading3 " : " bg-box "
              } p-2 items-center flex-1`}
            style={{ marginRight: -1 }}
          >
            <Ionicons
              name={active ? "checkbox-sharp" : "square-sharp"}
              size={24}
              color="white"
            />
            <View className="flex-row flex-1 justify-between items-center">
              <Text className="text-sm font-[Elektra] text-white pl-1 pt-0.5 uppercase">
                {talent.talent.name}
              </Text>
              <Text className="text-sm font-[Elektra] pt-0.5 text-white">
                {talent.cost}
                <Ionicons name="locate" size={8} color="white" />
              </Text>
            </View>
          </View>
          {talent.talent.name.length < 18 ? (
            <TriangleCorner
              style={{
                transform: [{ rotate: "-90deg" }],
                borderTopWidth: 38,
                borderRightWidth: 38,
                borderTopColor: talent.talent.active ? Colors.global.heading3 : Colors.global.box,
              }}
            />) : <View className={`w-[38px] 2 ${talent.talent.active ? "bg-heading3" : "bg-box"
              }`}></View>}
        </View>
        <View
          className={`p-2 bg-white border-2 ${active ? "border-heading3" : "border-box"
            }`}
        >
          <TalentText text={talent.talent.desc} />
        </View>
      </View>
      {specialization?.talents.path.some(
          (path) =>
            path.end.column === talent.position.column + 1 &&
            path.end.row === talent.position.row &&
            path.start.column === talent.position.column &&
            path.start.row === talent.position.row
        ) && (
            <View className="h-4 bg-gray-400 absolute w-[20vw] -right-[20vw] top-[50%]" />
          )}
          {/* TODO: Replace This! */}
        {specialization?.talents.path.some(
          (path) =>
            path.end.column === talent.position.column &&
            path.end.row === talent.position.row &&
            path.start.column === talent.position.column &&
            path.start.row === talent.position.row - 1
        ) && (
            <View className="h-[2vh] bg-gray-400 w-4 -top-[2vh] right-[50%] absolute"/>
          )}
           {specialization?.talents.path.some(
          (path) =>
            path.end.column === talent.position.column &&
            path.end.row === talent.position.row &&
            path.start.column === talent.position.column &&
            path.start.row === talent.position.row + 1
        ) && (
            <View className="h-[2vh] bg-gray-400 w-4 -bottom-[2vh] right-[50%] absolute"/>
          )}
    </TouchableOpacity>
  );
};

export default TalentItem;
