import { Feather, FontAwesome } from "@expo/vector-icons";
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          headerTitle: "Character Sheet",
          headerTitleStyle: {
            fontFamily: "Elektra",
            color: "#cbd5e1",
            borderBottomWidth: 0,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: "#1e293b" },
          headerTintColor: "#cbd5e1",
          headerTitleAlign: "center",
          drawerIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
          drawerLabelStyle: { fontFamily: "Elektra" },
        }}
        drawerContent={(props) => <DrawerComponent {...props} />}
      />
    </GestureHandlerRootView>
  );
}

const DrawerComponent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      style={{ backgroundColor: "#1e293b", }}
    >
      <Text className="text-center font-[Elektra] text-slate-300 text-xl pt-4 pb-6">
        Options
      </Text>
      <DrawerItem
        label={"Change Character"}
        icon={({ color, size }) => (
          <Feather name="users" size={size} color={"#cbd5e1"} />
        )}
        labelStyle={{
          color: "#cbd5e1",
          fontFamily: "Elektra",
        }}
        onPress={() => {
          router.replace("(characters)" as never);
        }}
      />
      {/* <DrawerItem label={'Edit Character'}
                icon={({ color, size }) => (
                    <Feather name="edit" size={size} color={'#cbd5e1'} />
                )}
                labelStyle={{ color: '#cbd5e1', fontFamily: 'Elektra' }}
                onPress={() => {
                    router.push('create-character');
                }}
            /> */}
    </DrawerContentScrollView>
  );
};
