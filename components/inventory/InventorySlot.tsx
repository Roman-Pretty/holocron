import { Item } from "@/types/ItemTypes";
import React from "react";
import { Pressable } from "react-native";

const InventorySlot = ({item}: {item: Item}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { flex: 1, padding: 0.5, opacity: pressed ? 0.5 : 1 },
      ]}
      hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
      className="w-[10vw] h-[10vw] m-[0.5vw] border-2 border-white bg-white/10 rounded-sm"
    ></Pressable>
  );
};

export default InventorySlot;
