import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Asset } from "expo-asset";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { CharacterProvider } from "@/contexts/CharacterContext";

import { useColorScheme } from "@/hooks/useColorScheme";

import { NativeWindStyleSheet } from "nativewind";
import { GestureHandlerRootView } from "react-native-gesture-handler";

NativeWindStyleSheet.setOutput({
  default: "native",
});

SplashScreen.preventAutoHideAsync();

export const BACKGROUND = require("@/assets/images/page/background.jpg");

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Elektra: require("../assets/fonts/Elektra.otf"),
    ITC: require("../assets/fonts/ITC.otf"),
    swrpg: require("../assets/fonts/swrpg.otf"),
    teuton: require("../assets/fonts/Teuton Mager Bold Italic.otf"),
    aurebesh: require("../assets/fonts/Aurebesh.otf"),
  });

  // Preload images
  useEffect(() => {
    const loadResources = async () => {
      try {
        await Asset.loadAsync([BACKGROUND]);
        if (loaded) {
          SplashScreen.hideAsync();
        }
      } catch (e) {
        console.warn(e);
      }
    };

    loadResources();
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
    <CharacterProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(characters)" options={{ headerShown: false }} />
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </ThemeProvider>
    </CharacterProvider>
    </GestureHandlerRootView>
  );
}
