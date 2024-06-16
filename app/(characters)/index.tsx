import CharacterCard from "@/components/CharacterCard";
import ImageWrapper from "@/components/ImageWrapper";
import Button from "@/components/form/Button";
import { Character } from "@/constants/Types";
import { loadCharacters, deleteAllCharacters } from "@/storage/CharacterStorage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
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

  async function getChars() {
    return await loadCharacters();
  }

  useEffect(() => {
    // deleteAllCharacters();
    getChars().then((chars) => {
      setCharacters(chars);
    });
  }, []);

  if (!characters || characters.length <= 0) {
    return (
      <ImageWrapper>
        <SafeAreaView
          style={{ backgroundColor: "Colors.global.slate900", flex: 1 }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text className="text-xl text-heading3 font-[Elektra] text-center pb-[2vh] pt-[36vh]">
              You do not have any characters yet.
            </Text>
            <Button
              title="Create Character"
              className="px-4 "
              onPress={() => router.push("create" as never)}
            />
          </View>
        </SafeAreaView>
      </ImageWrapper>
    );
  }

  return (
    <ImageWrapper>
      <SafeAreaView
        style={{ backgroundColor: "Colors.global.slate900", flex: 1 }}
      >
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
      </SafeAreaView>
    </ImageWrapper>
  );
};

export default createcharacter;
