import CharacterCard from "@/components/CharacterCard";
import ImageWrapper from "@/components/ImageWrapper";
import Button from "@/components/form/Button";
import { Colors } from "@/constants/Colors";
import { loadCharacters } from "@/storage/CharacterStorage";
import { Character } from "@/types/Types";
import { router, useFocusEffect } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  View
} from "react-native";

const createcharacter = () => {
  const screenWidth = Dimensions.get("window").width;
  function seededRandom(seed: number) {
    const m = 2 ** 31 - 1; // modulus
    const a = 1103515245; // multiplier
    const c = 100320; // increment

    let state = seed % m;

    state = (a * state + c) % m;

    let randomNum = state % 10000;

    return String(randomNum).padStart(4, "0");
  }

  const [characters, setCharacters] = useState<Character[]>();
  const [loading, setLoading] = useState<boolean>(true);

  async function getChars() {
    return await loadCharacters();
  }

  useFocusEffect(() => {
    // deleteAllCharacters();
    getChars().then((chars) => {
      setCharacters(chars);
      setLoading(false);
    });
  });

  if (loading) {
    return (
      <ImageWrapper>
        <SafeAreaView
          style={{ backgroundColor: "Colors.global.slate900", flex: 1 }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="small" color={Colors.global.box} />
          </View>
        </SafeAreaView>
      </ImageWrapper>
    )
  }

  if (!characters || characters.length <= 0) {
    return (
      <ImageWrapper>
        <SafeAreaView
          style={{ backgroundColor: "Colors.global.slate900", flex: 1 }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text className="text-lg text-heading3 text-center font-[Elektra] pt-[36vh] pb-4">
              You do not have any characters yet.
            </Text>
            <Button
              title="Create Character"
              cName="px-8"
              onPress={() => router.push("create" as never)}
            />
          </View>
        </SafeAreaView>
      </ImageWrapper>
    );
  }

  return (
    <ImageWrapper>
        <ScrollView>
          {characters.map((char, index) => (
            <CharacterCard
              key={index}
              screenWidth={screenWidth}
              char={char}
              index={index}
              seededRandom={seededRandom}
            />
          ))}
        </ScrollView>
    </ImageWrapper>
  );
};

export default createcharacter;
