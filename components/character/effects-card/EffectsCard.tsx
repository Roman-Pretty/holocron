import SharpButton from "@/components/form/SharpButton";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { CharacterContext } from "@/contexts/CharacterContext";
import { useContext } from "react";
import { saveCharacter } from "@/storage/CharacterStorage";
import { CriticalInjuries } from "@/constants/CriticalInjuries";
import Button from "@/components/form/Button";

const EffectsCard = () => {
  const { character, setCharacter } = useContext(CharacterContext);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  const [criticalHits, setCriticalHits] = useState(
    character?.data.criticalInjuries
  );
  const size = 24;

  const handleCriticalHitPress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setModalVisible(true);
  };

  async function takeCriticalHit(modifier: number) {
    if (!character || !character.data.criticalInjuries) return;
    const updatedCharacter = { ...character };
    let randomNumber = Math.floor(Math.random() * 20);
    randomNumber += 1;
    const injuries = Number(character.data.criticalInjuries.length * 2);
    const total = randomNumber + Number(modifier / 5) + injuries;

    updatedCharacter.data.criticalInjuries.push(
      CriticalInjuries[Math.min(total - 1, CriticalInjuries.length - 1)]
    );

    try {
      await saveCharacter(updatedCharacter);
      setCharacter(updatedCharacter);
      setCriticalHits(updatedCharacter.data.criticalInjuries);
      console.log("Critical injury added successfully!");
    } catch (error) {
      console.log("Error adding critical injury:", error);
    }
  }

  return (
    <View className="w-full self-center z-20 mt-1 shadow-lg">
      <View className="flex-row">
        <View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "180deg" }],
              borderTopWidth: size,
              borderRightWidth: size,
              borderTopColor: Colors.global.neutral800,
            }}
          />
          <TriangleCorner
            style={{
              transform: [{ rotate: "90deg" }],
              borderTopWidth: size,
              borderRightWidth: size,
              borderTopColor: Colors.global.neutral800,
            }}
          />
        </View>
        <View className="bg-neutral-800 flex-1 flex-row items-center justify-between">
          <SharpButton title="Critical Hit" onPress={handleCriticalHitPress} />
          <SharpButton
            title="Status Effect"
            onPress={() =>
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            }
          />
        </View>
        <View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "-90deg" }],
              borderTopWidth: size,
              borderRightWidth: size,
              borderTopColor: Colors.global.neutral800,
            }}
          />
          <TriangleCorner
            style={{
              borderTopWidth: size,
              borderRightWidth: size,
              borderTopColor: Colors.global.neutral800,
            }}
          />
        </View>
      </View>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center p-2 bg-black/50">
          <View className="bg-neutral-800 p-6 items-center shadow-md w-full rounded-lg">
            <Text className="text-xl text-center text-white font-[Elektra] mb-2">
              Critical Hit!
            </Text>
            <Text className="mb-4 text-center text-white font-bold text-xs">
              Take a random critical hit, or select a critical hit modifier.
            </Text>
            <View className="bg-white w-full p-2 mb-4 rounded-md">
              <RNPickerSelect
                onValueChange={(value) => {
                  setSelectedValue(value);
                }}
                items={[
                  { label: "+10", value: 10 },
                  { label: "+20", value: 20 },
                  { label: "+30", value: 30 },
                  { label: "+40", value: 40 },
                  { label: "+50", value: 50 },
                  { label: "+60", value: 60 },
                  { label: "+70", value: 70 },
                  { label: "+80", value: 80 },
                  { label: "+90", value: 90 },
                  { label: "+100", value: 100 },
                  { label: "+110", value: 110 },
                  { label: "+120", value: 120 },
                  { label: "+130", value: 130 },
                  { label: "+140", value: 140 },
                  { label: "+150", value: 150 },
                ]}
                placeholder={{ label: "+0", value: 0 }}
                disabled={!modalVisible}
                darkTheme
              />
            </View>
            <Text className="mb-6 text-center text-white font-bold text-xs">
              Modifiers from existing hits are already applied.
            </Text>
            <View className="flex-row justify-between w-full mb-10">
              <Button
                title="Cancel"
                cName="p-2 mr-1 flex-1 bg-box/80"
                onPress={() => {
                  setModalVisible(false);
                  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                }}
              />
              <Button
                title="Take Hit"
                cName="p-2 ml-1 flex-1 bg-heading3"
                onPress={() => {
                  setModalVisible(false);
                  Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Success
                  );
                  takeCriticalHit(selectedValue);
                  setSelectedValue(0);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EffectsCard;
