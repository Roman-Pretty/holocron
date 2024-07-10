import { Feather } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Select Character",
          headerTitleStyle: {
            fontFamily: "Elektra",
            color: "white",
          },
          headerStyle: {
            backgroundColor: Colors.global.heading1,
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push("create" as never)}>
              <Feather name="plus" size={32} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="create"
        options={{
          headerShown: true,
          title: "Create Character",
          headerTitleStyle: {
            fontFamily: "Elektra",
            color: "white",
          },
          headerStyle: {
            backgroundColor: Colors.global.heading2,
          },
          headerBackButtonMenuEnabled: true,
          headerBackTitleVisible: false,
          headerTintColor: "white",
        }}
      />
    </Stack>
  );
}
