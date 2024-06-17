import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CustomText = ({ text, purchasable }: { text: string, purchasable: boolean }) => {
  const parts = text.split(
    /(\[setback\]|\[boost\]|\[advantage\]|\[difficulty\]|\[threat\]|\[failure\]|\[success\]|\[triumph\]|\[despair\])/g
  );

  const getReplacement = (tag: string) => {
    switch (tag) {
      case "[setback]":
        return <Text className="font-[swrpg]">b</Text>;
      case "[boost]":
        return <Text className="font-[swrpg] text-blue-300">b</Text>;
      case "[advantage]":
        return <Text className="font-[swrpg] ">a</Text>;
      case "[difficulty]":
        return <Text className="font-[swrpg] ">d</Text>;
      case "[threat]":
        return <Text className="font-[swrpg]">t</Text>;
      case "[failure]":
        return <Text className="font-[swrpg] ">f</Text>;
      case "[success]":
        return <Text className="font-[swrpg] ">s</Text>;
      case "[triumph]":
        return <Text className="font-[swrpg] ">x</Text>;
      case "[despair]":
        return <Text className="font-[swrpg] ">y</Text>;
      default:
        return null;
    }
  };

  return (
    <Text className="text-[10px]" style={{color: purchasable ? '#000' : '#9ca3af'}}>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {getReplacement(part) || part}
        </React.Fragment>
      ))}
    </Text>
  );
};

export default CustomText;
