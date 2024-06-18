import SharpButton from "@/components/form/SharpButton";
import TriangleCorner from "@/components/shapes/TriangleCorner";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import { Modal, TouchableOpacity, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const EffectsCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(0);
  const size = 24;

  const handleCriticalHitPress = async () => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setModalVisible(true);
  };

  function takeCriticalHit(modifier: number) {

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
        <View className="flex-1 justify-center items-center mt-6 px-1 bg-black/30">
          <View className="bg-statblockbackground border-4 border-statblocktextbackground p-2 items-center shadow-md w-full">
            <Text className="text-xl text-center text-white font-[Elektra]">
              Critical Hit!
            </Text>
            <Text className="mb-4 text-center text-white font-semibold">
              Take a random critical hit, or select a critical hit modifier.
            </Text>
            <View className="bg-white w-full p-2 mb-4">
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
                Icon={() => (
                  <Ionicons name="chevron-down" size={24} color="#6b7280" />
                )}
              />
            </View>
            <Text className="mb-4 text-center text-white font-semibold">
              Modifiers from existing hits are already applied.
            </Text>
            <View className="flex-row justify-between w-full">
              <TouchableOpacity
                className="p-2 mx-1 flex-1 bg-statblockornate"
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
                  takeCriticalHit(selectedValue);
                  setSelectedValue(0);
                }}
              >
                <Text className="text-white font-bold text-center">
                  Take Hit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EffectsCard;
