import React, { useEffect, useState, useContext, useRef, useMemo, useCallback } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import PagerView from "react-native-pager-view";
import ImageWrapper from "@/components/ImageWrapper";
import Skills from "@/components/edit/Skills";
import Specializations from "@/components/edit/Specializations";
import Talents from "@/components/edit/talents/Talents";
import Description from "@/components/edit/Description";
import { Ionicons } from "@expo/vector-icons";
import { ScalingDot } from "react-native-animated-pagination-dots";
import { Colors } from "@/constants/Colors";
import { CharacterContext } from "@/contexts/CharacterContext";
import { saveCharacter } from "@/storage/CharacterStorage";
import { Skill, Specialization } from "@/types/Types";
import { useNavigation } from "expo-router";
import PortraitSelect from "@/components/form/PortraitSelect";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

let INTRO_DATA = [
  {
    key: "1",
    title: "Description",
  },
  {
    key: "2",
    title: "Skills",
  },
  {
    key: "3",
    title: "Specializations",
  },
  {
    key: "4",
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
  const [exp, setExp] = useState<number>(0);
  const [clonedSpecializations, setClonedSpecializations] = useState<
    Specialization[]
  >(JSON.parse(JSON.stringify(character?.data.specializations ?? [])));

  const [newName, setNewName] = useState<string>(character?.data.name ?? "");
  const [newHomeworld, setNewHomeworld] = useState<string>(
    character?.data.homeworld ?? ""
  );
  const [newDescription, setNewDescription] = useState<string>(
    character?.data.description ?? ""
  );
  const [newPortrait, setNewPortrait] = useState<ImageSourcePropType>(
    character?.data.image ?? require("@/assets/images/species/aqualish_0.png")
  );

  useEffect(() => {
    setExp(calculateExperience());
  }, [
    newSkills,
    newSpecializations,
    allSpecializations,
    clonedSpecializations,
  ]);

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
  
    // Calculate experience cost for skills
    newSkills.forEach((newSkill: Skill) => {
      const existingSkill = character?.data.skills.find(
        (s) => s.name === newSkill.name
      );
  
      if (
        existingSkill &&
        newSkill.level > existingSkill.level
      ) {
        for (let i = existingSkill.level + 1; i <= newSkill.level; i++) {
          total -= newSkill.career ? i * 5 : i * 5 + 5;
        }
      } else if (!existingSkill) {
        for (let i = 1; i <= newSkill.level; i++) {
          total -= newSkill.career ? i * 5 : i * 5 + 5;
        }
      }
    });
  
    // Calculate experience cost for specializations
    for (let i = 0; i < newSpecializations.length; i++) {
      total -= (i + 2) * ((character?.data.specializations.length ?? 1) * 10);
    }
  
    // Calculate experience cost for talents
    clonedSpecializations.forEach((spec, index) => {
      spec.talents.talents.forEach((talent, i) => {
        if (
          talent.purchased &&
          (character?.data.specializations[index]?.talents?.talents[i]?.purchased === false ||
            character?.data.specializations[index]?.talents?.talents[i]?.purchased === undefined)
        ) {
          total -= talent.cost ?? Math.ceil((i + 1) / 4) * 5;
        }
      });
    });
  
    return total;
  };

  // Portrait Bottom Sheet
  const portraitSheetRef = useRef<BottomSheet>(null);
  portraitSheetRef.current?.close();

  const portraitSnapPoints = useMemo(() => ["60%"], []);

  // callbacks
  const handlePortraitSheetChange = useCallback((index: number) => {}, []);
  const handlePortraitSnapPress = useCallback((index: number) => {
    portraitSheetRef.current?.snapToIndex(index);
  }, []);
  const handlePortraitClosePress = useCallback(() => {
    portraitSheetRef.current?.close();
  }, []);
  
  const save = async () => {
    if (character) {
      const updatedExperience = calculateExperience();

      // Create a new character object with updated skills and experience
      const updatedCharacter = {
        ...character,
        data: {
          ...character.data,
          skills: [...newSkills], // Create a new array for skills
          name: newName,
          homeworld: newHomeworld,
          description: newDescription,
          image: newPortrait,
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

  return (
    <ImageWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-row justify-center">
          <View className="flex-1 bg-box flex-row items-center justify-between py-2 pb-4 px-6">
            <View className="flex-row justify-center items-center">
              <Ionicons size={16} name="locate" color="#fff" />
              <Text className="font-bold font-xs text-white pl-1">
                {exp}{" "}
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
                <Description 
                newName={newName}
                setNewName={setNewName}
                newHomeworld={newHomeworld}
                setNewHomeworld={setNewHomeworld}
                newDescription={newDescription}
                setNewDescription={setNewDescription}
                newPortrait={newPortrait}
                setNewPortrait={setNewPortrait}
                handleSnapPress={handlePortraitSnapPress}
                
                />
              )}
              {key === "2" && (
                <Skills setNewSkills={setNewSkills} newSkills={newSkills} />
              )}
              {key === "3" && (
                <Specializations
                  newSpecializations={newSpecializations}
                  setNewSpecializations={setNewSpecializations}
                />
              )}
              {key === "4" && (
                <Talents
                  clonedSpecializations={clonedSpecializations}
                  setClonedSpecializations={setClonedSpecializations}
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
        <PortraitSelect
            handleSnapPress={handlePortraitSnapPress}
            handleClosePress={handlePortraitClosePress}
            handleSelect={(portrait) => setNewPortrait(portrait)}
            handleSheetChange={handlePortraitSheetChange}
            sheetRef={portraitSheetRef}
            snapPoints={portraitSnapPoints}
          />
      </SafeAreaView>
    </ImageWrapper>
  );
}
