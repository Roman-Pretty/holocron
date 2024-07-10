import React, { useEffect, useState, useContext, useRef } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import PagerView from "react-native-pager-view";
import ImageWrapper from "@/components/ImageWrapper";
import Skills from "@/components/edit/Skills";
import Specializations from "@/components/edit/Specializations";
import Talents from "@/components/edit/talents/Talents";
import { Ionicons } from "@expo/vector-icons";
import { ScalingDot } from "react-native-animated-pagination-dots";
import { Colors } from "@/constants/Colors";
import { CharacterContext } from "@/contexts/CharacterContext";
import { saveCharacter } from "@/storage/CharacterStorage";
import { Specialization } from "@/types/Types";
import { useNavigation } from "expo-router";

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
  const ref = useRef<PagerView>(null);
  const scrollOffsetAnimatedValue = useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = useRef(new Animated.Value(0)).current;
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
      Animated.event(
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
  const { character, setCharacter } = useContext(CharacterContext);

  const [newSkills, setNewSkills] = useState(
    JSON.parse(JSON.stringify(character?.data.skills ?? []))
  );
  const [newSpecializations, setNewSpecializations] = useState<
    Specialization[]
  >([]);
  const [allSpecializations, setAllSpecializations] = useState<
    Specialization[]
  >([]);

  useEffect(() => {
    if (character) {
      setAllSpecializations([
        ...character.data.specializations,
        ...newSpecializations,
      ]);
    }
  }, [newSpecializations, character]);

  const calculateExperience = () => {
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
    for (let i = 0; i < newSpecializations.length; i++) {
      total -= (i + 2) * ((character?.data.specializations.length ?? 1) * 10);
    }
    return total;
  };

  const save = async () => {
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
          specializations: [
            ...character.data.specializations,
            ...newSpecializations,
          ], // Append newSpecializations array to the end
        },
      };

      // Update the state with the new character object
      setCharacter(updatedCharacter);
      saveCharacter(updatedCharacter);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      Alert.alert("Save Changes", "Do you want to save changes?", [
        {
          text: "No",
          style: "destructive",
          onPress: () => navigation.dispatch(e.data.action),
        },
        {
          text: "Yes",
          onPress: () => {
            save();
            navigation.dispatch(e.data.action);
          },
        },
      ]);
    });

    return unsubscribe;
  }, [navigation, character, newSkills, newSpecializations]);

  return (
    <ImageWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-row justify-center">
          <View className="flex-1 bg-box flex-row items-center justify-between py-2 pb-4 px-6">
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
        </View>
        <AnimatedPagerView
          initialPage={0}
          ref={ref}
          style={{ flex: 1 }}
          onPageScroll={onPageScroll}
        >
          {INTRO_DATA.map(({ key, title }) => (
            <View key={key} className="flex-1 justify-center items-center">
              <View className="flex-row justify-center bg-box mb-2">
                <View className="bg-black/30 flex-1">
                  <Text className="text-lg text-white font-[Elektra] text-center pt-0.5">
                    {title}
                  </Text>
                </View>
              </View>
              {key === "1" && (
                <Skills setNewSkills={setNewSkills} newSkills={newSkills} />
              )}
              {key === "2" && (
                <Specializations
                  newSpecializations={newSpecializations}
                  setNewSpecializations={setNewSpecializations}
                />
              )}
              {key === "3" && (
                <Talents
                  newSpecializations={newSpecializations}
                  setNewSpecializations={setNewSpecializations}
                />
              )}
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
