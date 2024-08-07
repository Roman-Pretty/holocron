import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import { Specialization, Talent } from "@/types/Types";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import TalentText from "@/components/create/talents/TalentText";

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
  const [purchasable, setPurchasable] = useState(false);
  const [purchased, setPurchased] = useState(false);
  const [loading, setLoading] = useState(false);

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

  function togglePurchased() {
    if (specialization) {
      setSpecialization({
        ...specialization,
        talents: {
          ...specialization.talents,
          talents: specialization.talents.talents.map((t, index) =>
            index === row + col * 4 ? { ...t, purchased: !t.purchased } : t
          ),
        },
      });
    }
    setPurchased(!purchased);
  }

  function isNodePointedTo(
    row: number,
    col: number,
    visited: Set<string> = new Set()
  ): boolean {
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
      specialization.talents.talents[row + (col - 1) * 4].purchased
    ) {
      if (isNodePointedTo(row, col - 1, visited)) {
        return true;
      }
    }

    if (
      row > 0 &&
      specialization.talents.vPath[col][row - 1] === 1 &&
      specialization.talents.talents[row + col * 4 - 1].purchased
    ) {
      if (isNodePointedTo(row - 1, col, visited)) {
        return true;
      }
    }

    if (
      row < 3 &&
      specialization.talents.vPath[col][row] === 1 &&
      specialization.talents.talents[row + col * 4 + 1].purchased
    ) {
      if (isNodePointedTo(row + 1, col, visited)) {
        return true;
      }
    }

    visited.delete(key); // Backtracking
    return false;
  }

  return (
    <Pressable
      onPressIn={() => setLoading(true)}
      onPressOut={() => setLoading(false)}
      onPress={() => {
        togglePurchased();
        setLoading(false);
      }}
      disabled={!purchasable}
    >
      <View className={"w-[60vw] mb-2"} style={{ opacity: 100 }}>
        <View className="flex-row">
          <View
            className={`flex-row ${
              !purchasable
                ? "bg-neutral-700"
                : talent.talent.active
                ? " bg-heading3 "
                : " bg-box "
            } p-2 items-center flex-1`}
            style={{ marginRight: -1 }}
          >
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Ionicons
                name={purchased ? "checkbox-sharp" : "square-sharp"}
                size={20}
                color="white"
              />
            )}
            <View className="flex-row flex-1 justify-between items-center z-20">
              <Text className="text-xs font-[Elektra] text-white pl-1.5 pt-0.5 uppercase z-20">
                {talent.talent.name}
              </Text>
              <Text className="text-xs font-[Elektra] pt-0.5 text-white">
                {cost}
                <Ionicons name="locate" size={8} color="white" />
              </Text>
            </View>
          </View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "-90deg" }],
              borderTopWidth: talent.talent.name.length < 18 ? 44 : 50,
              borderRightWidth: talent.talent.name.length < 18 ? 44 : 50,
              borderTopColor: !purchasable
                ? "#404040"
                : talent.talent.active
                ? Colors.global.heading3
                : Colors.global.box,
              zIndex: -10,
            }}
          />
        </View>
        <View
          className={` p-2 bg-white border-2 ${
            !purchasable
              ? "border-neutral-700"
              : talent.talent.active
              ? "border-heading3"
              : "border-box"
          } min-h-[8vh] `}
        >
          <TalentText text={talent.talent.desc} purchasable={purchasable} />
        </View>
      </View>
    </Pressable>
  );
};

export default TalentItem;
