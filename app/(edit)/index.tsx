import React, { useEffect, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import PagerView, {
  PagerViewOnPageScrollEventData,
} from "react-native-pager-view";

import ImageWrapper from "@/components/ImageWrapper";
import Skills from "@/components/edit/Skills";
import Specializations from "@/components/edit/Specializations";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import { CharacterContext } from "@/contexts/CharacterContext";
import { Ionicons } from "@expo/vector-icons";
import { ScalingDot } from "react-native-animated-pagination-dots";
import { router, useNavigation } from "expo-router";
import { saveCharacter } from "@/storage/CharacterStorage";

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

let INTRO_DATA = [
  {
    key: "1",
    title: "Skills",
  },
  {
    key: "2",
    title: "Specializations",
  },
  {
    key: "3",
    title: "Talents",
  },
];

export default function PaginationDotsExample() {
  const width = Dimensions.get("window").width;
  const ref = React.useRef<PagerView>(null);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [0, INTRO_DATA.length];
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, INTRO_DATA.length * width],
  });

  const onPageScroll = React.useMemo(
    () =>
      Animated.event<PagerViewOnPageScrollEventData>(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        }
      ),
    []
  );

  const navigation = useNavigation();

  // Effect
  useEffect(() => {
    async function save() {
      if (character) {
        const updatedExperience = calculateExperience();

        // Create a new character object with updated skills and experience
        const updatedCharacter = {
          ...character,
          data: {
            ...character.data,
            skills: [...newSkills], // Create a new array for skills
            experience: {
              ...character.data.experience,
              available: updatedExperience,
            },
          },
        };

        // Update the state with the new character object
        setCharacter(updatedCharacter);
        await saveCharacter(character);
      }
    }

    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      Alert.alert("Save Changes", "Do you want to save changes?", [
        {
          text: "No",
          style: "destructive",
          onPress: () => {},
        },
        {
          text: "Yes",
          onPress: () => {
            console.log("Changes saved");
            save();
          },
        },
      ]);
      navigation.dispatch(e.data.action);
    });
  }, []);

  const { character, setCharacter } = React.useContext(CharacterContext);
  const [newSkills, setNewSkills] = useState(
    JSON.parse(JSON.stringify(character?.data.skills ?? []))
  );

  function calculateExperience() {
    let total = character?.data.experience.available ?? 0;
    for (const skill of newSkills) {
      if (
        skill.level >
        (character?.data.skills.find((s) => s.name === skill.name)?.level ?? 0)
      ) {
        if (skill.career) {
          for (let i = 1; i <= skill.level; i++) {
            total -= i * 5;
          }
        } else {
          for (let i = 1; i <= skill.level; i++) {
            total -= i * 5 + 5;
          }
        }
      }
    }
    return total;
  }

  return (
    <ImageWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-row justify-center mx-2 mt-2 mb-1">
          <TriangleCorner
            style={{
              transform: [{ rotate: "180deg" }],
              borderTopWidth: 34,
              borderRightWidth: 34,
              borderTopColor: Colors.global.box,
            }}
          />
          <View className=" flex-1 bg-box flex-row items-center justify-evenly py-2">
            <View className="flex-row justify-center items-center">
              <Ionicons size={16} name="locate" color="#fff" />
              <Text className="font-bold font-xs text-white pl-1">
                {calculateExperience()}{" "}
                <Text className="opacity-60">
                  / {character?.data.experience.total}
                </Text>
              </Text>
            </View>
            <View className="flex-row justify-center items-center">
              <Ionicons size={16} name="heart" color="#fff" />
              <Text className="font-bold font-xs text-white pl-1">
                {character?.data.wound.current}{" "}
                <Text className="opacity-60">
                  / {character?.data.wound.threshold}
                </Text>
              </Text>
            </View>
            <View className="flex-row justify-center items-center">
              <Ionicons size={16} name="happy" color="#fff" />
              <Text className="font-bold font-xs text-white pl-1">
                {character?.data.strain.current}{" "}
                <Text className="opacity-60">
                  / {character?.data.strain.threshold}
                </Text>
              </Text>
            </View>
          </View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "-90deg" }],
              borderTopWidth: 34,
              borderRightWidth: 34,
              borderTopColor: Colors.global.box,
            }}
          />
        </View>
        <AnimatedPagerView
          initialPage={0}
          ref={ref}
          style={{ flex: 1 }}
          onPageScroll={onPageScroll}
        >
          {INTRO_DATA.map(({ key, title }) => (
            <View key={key} className="flex-1 justify-center items-center">
              <View className="flex-row justify-center mx-2">
                <TriangleCorner
                  style={{
                    transform: [{ rotate: "90deg" }],
                    borderTopWidth: 34,
                    borderRightWidth: 34,
                    borderTopColor: Colors.global.box,
                  }}
                />
                <View className="bg-box flex-1 mb-2">
                  <Text className="text-2xl text-white font-[Elektra] text-center pt-0.5">
                    {title}
                  </Text>
                </View>
                <TriangleCorner
                  style={{
                    transform: [{ rotate: "0deg" }],
                    borderTopWidth: 34,
                    borderRightWidth: 34,
                    borderTopColor: Colors.global.box,
                  }}
                />
              </View>
              {key === "1" && (
                <Skills setNewSkills={setNewSkills} newSkills={newSkills} />
              )}
              {key === "2" && <Specializations />}
            </View>
          ))}
        </AnimatedPagerView>
        <View className="h-10">
          <ScalingDot
            data={INTRO_DATA}
            //@ts-ignore
            scrollX={scrollX}
            containerStyle={{
              bottom: 16,
            }}
            activeDotColor={Colors.global.box}
            inActiveDotColor={Colors.global.box}
          />
        </View>
      </SafeAreaView>
    </ImageWrapper>
  );
}
