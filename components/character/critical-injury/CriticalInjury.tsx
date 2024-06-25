import {
  View,
  Text,
  Pressable,
  Image,
  Modal,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { CriticalInjury } from "@/types/Types";
import * as Haptics from "expo-haptics";
import { CharacterContext } from "@/contexts/CharacterContext";
import { useContext } from "react";
import { saveCharacter } from "@/storage/CharacterStorage";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/components/form/Button";
import { Colors } from "@/constants/Colors";

const CriticalInjuryElement = ({ crit }: { crit: CriticalInjury }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { character, setCharacter } = useContext(CharacterContext);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  async function removeCriticalInjury() {
    // Remove a single instance of the critical injury from the character
    if (!character || !character.data.criticalInjuries) return;

    const updatedCharacter = { ...character };
    const critInjuries = [...updatedCharacter.data.criticalInjuries];

    const index = critInjuries.findIndex((c) => c.name === crit.name);
    if (index > -1) {
      critInjuries.splice(index, 1); // Remove the first occurrence
    }

    updatedCharacter.data.criticalInjuries = critInjuries;

    try {
      await saveCharacter(updatedCharacter);
      setCharacter(updatedCharacter);
      console.log("Critical injury removed successfully!");
    } catch (error) {
      console.log("Error removing critical injury:", error);
    }
  }
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Pressable
        // className="flex-row items-center justify-between w-full bg-black/20 px-0.5 py-1 mb-2"
        onPress={openModal}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 4,
            paddingVertical: 4,
            marginBottom: 8,
            backgroundColor: "rgba(0,0,0,0.3)",
          },
        ]}
      >
        <View className="w-6 h-6">
          <Image
            source={crit.image}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View className="flex-row justify-end">
          {crit.severity < 5 &&
            Array(crit.severity)
              .fill(null)
              .map((_, index) => (
                <Text
                  key={index}
                  className="text-white font-[swrpg] text-[10px]"
                >
                  d
                </Text>
              ))}
          {crit.severity >= 5 && (
            <Ionicons name="skull" size={12} color="white" />
          )}
        </View>
      </Pressable>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View className="flex-1 justify-center items-center bg-black/50 px-2">
          <View className=" bg-neutral-800 p-6 rounded-lg shadow-lg items-center">
            <View className="absolute top-6 left-6">
              <View className="bg-yellow-400 py-1 w-12 items-center justify-center mb-2 rounded-md">
                <Text className="font-[swrpg] pb-0.5 text-neutral-800 text-center">
                  {crit.severity < 5 &&
                    Array(crit.severity)
                      .fill(null)
                      .map((_, index) => "d")}
                  {crit.severity >= 5 && (
                    <Ionicons
                      name="skull"
                      size={18}
                      color={Colors.global.neutral800}
                    />
                  )}
                </Text>
              </View>
            </View>
            <View
              className={`w-[30vw] h-[30vw] p-[1vw] overflow-hidden rounded-full border-2 border-white/10 mb-2`}
            >
              <View
                className={`overflow-hidden rounded-full items-center justify-center w-full h-full`}
              >
                {loading && (
                  <ActivityIndicator
                    size="small"
                    color={Colors.global.heading3}
                  />
                )}
                <Image
                  source={crit.image}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%" }}
                  onLoad={() => setLoading(false)}
                />
              </View>
            </View>
            <Text className="text-xl text-center text-white font-[Elektra] mb-2">
              {crit.name}
            </Text>
            <Text className="text-sm text-center text-white/80 mb-4">
              {crit.desc}
            </Text>

            <View className="flex-row mb-10">
              <Button
                cName="p-2 mx-1 flex-1 bg-box/80"
                onPress={() => {
                  setModalVisible(false);
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                }}
                title="Cancel"
              />
              <Button
                cName="p-2 mx-1 flex-1 bg-heading3"
                onPress={() => {
                  setModalVisible(false);
                  Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Success
                  );
                  removeCriticalInjury();
                }}
                title="Remove"
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CriticalInjuryElement;
