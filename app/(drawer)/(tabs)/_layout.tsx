import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons/";

import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "CHARACTER",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person" color={color} />
          ),
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.global.heading3,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: Colors.global.boxheading,
          tabBarLabelStyle: { fontFamily: "Elektra" },
        }}
      />
      <Tabs.Screen
        name="talents"
        options={{
          title: "TALENTS",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="sparkles" color={color} />
          ),
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.global.heading3,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: Colors.global.boxheading,

          tabBarLabelStyle: { fontFamily: "Elektra" },
        }}
      />
      <Tabs.Screen
        name="inventory"
        options={{
          title: "INVENTORY",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="book" color={color} />
          ),
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.global.heading3,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: Colors.global.boxheading,

          tabBarLabelStyle: { fontFamily: "Elektra" },
        }}
      />
      <Tabs.Screen
        name="motivation"
        options={{
          title: "MOTIVATION",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="dice" color={color} />
          ),
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.global.heading3,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: Colors.global.boxheading,

          tabBarLabelStyle: { fontFamily: "Elektra" },
        }}
      />
    </Tabs>
  );
}
