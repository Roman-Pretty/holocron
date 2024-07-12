import Button from "@/components/form/Button";
import { Colors } from "@/constants/Colors";
import { CharacterContext } from "@/contexts/CharacterContext";
import { deleteCharacter } from "@/storage/CharacterStorage";
import { Ionicons } from "@expo/vector-icons";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import React, { useContext, useState } from "react";
import { Alert, Modal, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          headerTitle: "Character Sheet",
          headerTitleStyle: {
            fontFamily: "Elektra",
            color: "#fff",
            borderBottomWidth: 0,
          },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: Colors.global.heading3 },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          drawerIcon: ({ color }) => (
            <Ionicons size={28} name="menu" color={color} />
          ),
          drawerLabelStyle: { fontFamily: "Elektra" },
        }}
        drawerContent={(props) => <DrawerComponent {...props} />}
      />
    </GestureHandlerRootView>
  );
}

const DrawerComponent = (props: DrawerContentComponentProps) => {
  const { character } = useContext(CharacterContext);
  const [upgradeVisible, setUpgradeVisible] = useState(false);

  function toggleUpgradeVisible() {
    setUpgradeVisible(!upgradeVisible);
  }

  return (
    <DrawerContentScrollView
      style={{ backgroundColor: Colors.global.heading3 }}
      contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}
    >
      <View>
        <Text className="text-center font-[Elektra] text-white text-xl pt-4 pb-6">
          Options
        </Text>
        <DrawerItem
          label={"Change Character"}
          icon={({ color, size }) => (
            <Ionicons name="people" size={size} color={"#fff"} />
          )}
          labelStyle={{
            color: "#fff",
            fontFamily: "Elektra",
          }}
          onPress={() => {
            router.navigate("(characters)");
          }}
        />
        <DrawerItem
          label={"Edit Character"}
          icon={({ color, size }) => (
            <Ionicons name="create" size={size} color={"#fff"} />
          )}
          labelStyle={{
            color: "#fff",
            fontFamily: "Elektra",
          }}
          onPress={() => {
            router.push("(edit)");
          }}
        />
        <DrawerItem
          label={"Item Store"}
          icon={({ color, size }) => (
            <Ionicons name="storefront" size={size} color={"#fff"} />
          )}
          labelStyle={{
            color: "#fff",
            fontFamily: "Elektra",
          }}
          onPress={() => {}}
        />
        <DrawerItem
          label={"Award Experience"}
          icon={({ color, size }) => (
            <Ionicons name="arrow-up-circle" size={size} color={"#fff"} />
          )}
          labelStyle={{
            color: "#fff",
            fontFamily: "Elektra",
          }}
          onPress={toggleUpgradeVisible}
        />
      </View>
      <SafeAreaView>
        <DrawerItem
          label={"Delete Character"}
          icon={({ color, size }) => (
            <Ionicons name="trash" size={size} color={"#fff"} />
          )}
          labelStyle={{ color: "#fff", fontFamily: "Elektra" }}
          onPress={() => {
            if (character) {
              Alert.alert(
                "Delete Character",
                `Are you sure you want to delete ${character?.data.name}? This action cannot be undone.`,
                [
                  {
                    text: "Cancel",
                    style: "cancel",
                  },
                  {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => {
                      deleteCharacter(character?.key);
                      router.push("(characters)" as never);
                    },
                  },
                ]
              );
            }
          }}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={upgradeVisible}
          onRequestClose={toggleUpgradeVisible}
        >
          <View className="flex-1 justify-center items-center">
            <View className="bg-neutral-800 p-6 rounded-lg">
              <Text className="text-white font-bold text-xs">
                {character?.data.name} currently has{" "}
                {character?.data.experience.available}/
                {character?.data.experience.total} total experience.
              </Text>
              <View className="flex-row justify-between mt-2">
              <Button title="Cancel"
              cName="bg-transparent border-white border-2 mr-1"
              onPress={toggleUpgradeVisible}
              />
              <Button title="Award"
              cName="bg-transparent border-white border-2 ml-1"
              onPress={toggleUpgradeVisible}
              />
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};
