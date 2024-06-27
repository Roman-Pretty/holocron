import Button from "@/components/form/Button";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useCallback } from "react";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Text,
  View,
  ViewToken,
} from "react-native";
import { Colors } from "@/constants/Colors";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Career } from "@/types/Types";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface CareerItemProps {
  career: Career;
  selectedCareer: Career | null;
  setSelectedCareer: (career: Career) => void;
  viewableItems: Animated.SharedValue<ViewToken[]>;
}

const CareerItem: React.FC<CareerItemProps> = React.memo(
  ({ career, selectedCareer, setSelectedCareer, viewableItems }) => {
    const [loading, setLoading] = useState(true);

    const rStyle = useAnimatedStyle(() => {
      const isVisible = Boolean(
        viewableItems.value
          .filter((item) => item.isViewable)
          .find((viewableItem) => viewableItem.item.name === career.name)
      );

      return {
        opacity: withTiming(isVisible ? 1 : 0.9),
        transform: [
          {
            scale: withTiming(isVisible ? 1 : 0.9),
          },
        ],
      };
    }, [viewableItems.value]);

    const handleSelect = useCallback(() => {
      setSelectedCareer(career);
    }, [setSelectedCareer, career]);

    return (
      <Animated.View
        className={`w-full bg-heading3 mb-2 rounded-lg items-center`}
        style={rStyle}
      >
        <View className="px-6 py-4 w-full items-center">
          <View
            className={`w-[30vw] h-[30vw] p-[1vw] overflow-hidden rounded-full border-2 border-white/10`}
          >
            <View
              className={`overflow-hidden rounded-full bg-white items-center justify-center w-full h-full`}
            >
              <Image
                source={career.image}
                resizeMode="center"
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </View>
          <Text className="text-lg text-white font-[Elektra] mt-2">
            {career.name}
          </Text>
          <Text className="text-sm text-center text-white/80 mt-2">
            {career.desc}
          </Text>
          {career.name === selectedCareer?.name ? (
            <Button
              title={`Selected ${career.name}`}
              disabled
              cName="mt-4 bg-white border border-white w-full items-center justify-center px-0  rounded-sm"
              textClassName="text-center w-full uppercase"
            />
          ) : (
            <Button
              title={`Select ${career.name}`}
              onPress={handleSelect}
              cName="mt-4 bg-transparent border border-white w-full items-center justify-center px-0  rounded-sm"
              textClassName="text-center w-full uppercase"
            />
          )}
        </View>
        <View className="px-6 pb-4 w-full items-start bg-black/20 rounded-b-lg">
          <Text className="text-xs text-white font-bold mt-2">SKILLS</Text>
          <Text className="text-xs text-white/80 mt-1">
            {career.skills.join(", ")}
          </Text>
          <Text className="text-xs text-white font-bold mt-2">
            SPECIALIZATIONS
          </Text>
          <Text className="text-xs text-white/80 mt-1">
            {career.specializations
              .map((specialization) => specialization.name)
              .join(", ")}
          </Text>
        </View>
      </Animated.View>
    );
  }
);

export default CareerItem;
