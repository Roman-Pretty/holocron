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
    cost?: number;
    purchased?: boolean;
  };
  specialization: Specialization | null;
  setSpecialization: (specialization: Specialization) => void;
  cost: number;
  row: number;
  col: number;
}

const TalentItem = ({
  talent,
  specialization,
  setSpecialization,
  cost,
  row,
  col,
}: TalentItemProps) => {
  const [purchasable, setPurchasable] = React.useState(false);
  const [purchased, setPurchased] = React.useState(false);

  function togglePurchased() {
    talent.purchased = !purchased;
    if (specialization) {
      setSpecialization({ ...specialization });
    }
    setPurchased(!purchased);
  }

  function isNodePointedTo(row: number, col: number, visited: Set<string> = new Set()): boolean {
    if (!specialization) {
      return false;
    }

    if (col === 0) {
      return true;
    }

    const key = `${row},${col}`;
    if (visited.has(key)) {
      // Circular dependency detected
      return false;
    }

    visited.add(key);

    if (
      specialization.talents.hPath[row][Math.max(col - 1, 0)] === 1 &&
      specialization.talents.talents[row + ((col - 1) * 4)].purchased
    ) {
      if (isNodePointedTo(row, col - 1, visited)) {
        return true;
      }
    }

    if (
      row > 0 &&
      specialization.talents.vPath[col][row - 1] === 1 &&
      specialization.talents.talents[(row + (col * 4)) - 1].purchased
    ) {
      if (isNodePointedTo(row - 1, col, visited)) {
        return true;
      }
    }

    if (
      row < 3 &&
      specialization.talents.vPath[col][row] === 1 &&
      specialization.talents.talents[(row + (col * 4)) + 1].purchased
    ) {
      if (isNodePointedTo(row + 1, col, visited)) {
        return true;
      }
    }

    visited.delete(key); // Backtracking
    return false;
  }


  useEffect(() => {
    if (specialization) {
      if (isNodePointedTo(row, col)) {
        setPurchasable(true);
      } else {
        setPurchasable(false);
        if (purchased) {
          togglePurchased();
        }
      }
    }
  }, [specialization, purchased]);

  useEffect(() => {
    if (talent.purchased) {
      setPurchased(true);
    }
  }, []);

  return (
    <TouchableOpacity
      onPress={() => togglePurchased()}
      disabled={!purchasable}
    >
      <View
        className={"w-[60vw]"}
        style={{ opacity: 100 }}
      >
        <View className="flex-row">
          <View
            className={`flex-row ${!purchasable ? "bg-gray-400" : talent.talent.active ? " bg-heading3 " : " bg-box "
              } p-2 items-center flex-1`}
            style={{ marginRight: -1 }}
          >
            <Ionicons
              name={purchased ? "checkbox-sharp" : "square-sharp"}
              size={24}
              color="white"
            />
            <View className="flex-row flex-1 justify-between items-center">
              <Text className="text-sm font-[Elektra] text-white pl-1 pt-0.5 uppercase">
                {talent.talent.name}
              </Text>
              <Text className="text-sm font-[Elektra] pt-0.5 text-white">
                {cost}
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
                borderTopColor: !purchasable ? "#9ca3af" : talent.talent.active ? Colors.global.heading3 : Colors.global.box,
              }}
            />) : <View className={`w-[38px] 2 ${!purchasable ? "bg-gray-400" : talent.talent.active ? "bg-heading3" : "bg-box"}`} />}
        </View>
        <View
          className={` p-2 bg-white border-2 ${!purchasable ? "border-gray-400" : talent.talent.active ? "border-heading3" : "border-box"
            } min-h-[8vh] `}
        >
          <TalentText text={talent.talent.desc} purchasable={purchasable} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TalentItem;
