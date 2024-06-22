import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { CriticalInjury } from "@/types/Types";
import * as Haptics from "expo-haptics";
import { CharacterContext } from "@/contexts/CharacterContext";
import { useContext } from "react";
import { saveCharacter } from "@/storage/CharacterStorage";

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
    
    const index = critInjuries.findIndex(c => c.name === crit.name);
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
  


  return (
    <>
      <TouchableOpacity
        className="flex-row items-center justify-between w-full bg-black/20 px-0.5 py-1 mb-2"
        onPress={openModal}
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
        </View>
      </TouchableOpacity>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View className="w-3/4 bg-neutral-800 p-5 rounded-lg shadow-lg items-center">
            <View className="flex-row items-center justify-start w-full  border-white border-b-2 mb-3 pb-3">
              <View className="w-[22vw] h-[22vw] mb-2">
                <Image
                  source={crit.image}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View className="pl-4 h-full items-start">
                <Text className="text-xl text-white font-[Elektra] ">
                  {crit.name}
                </Text>
                <View className="w-full flex-row">
                {crit.severity < 5 &&
                  Array(crit.severity)
                  .fill(null)
                  .map((_, index) => (
                    <Text
                    key={index}
                    className="text-white font-[swrpg] text-xl"
                    >
                        d
                      </Text>
                    ))}
                    </View>
              </View>
            </View>
            <Text className="mb-4 text-white">{crit.desc}</Text>
            <View className="flex-row">
            <TouchableOpacity
                className="p-2 mx-1 flex-1 bg-box/80"
                onPress={() => {
                  setModalVisible(false);
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                }}
              >
                <Text className="text-white font-bold text-center">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-2 bg-heading3 flex-1 mx-1"
                onPress={() => {
                  setModalVisible(false);
                  Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Success
                  );
                  removeCriticalInjury();
                  

                }}
              >
                <Text className="text-white font-bold text-center">
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CriticalInjuryElement;
