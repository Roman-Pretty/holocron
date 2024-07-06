import { Feather } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import React from "react";
import { Alert, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Edit Character",
          headerTitleStyle: {
            fontFamily: "Elektra",
          },
          headerStyle: {
            backgroundColor: Colors.global.box,
          },
          headerLeft: () => (
            <TouchableOpacity
            onPress={() => 
              router.back()
            }
            >
              <Feather name="chevron-left" size={32} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
