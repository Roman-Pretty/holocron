import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useEffect, useState } from "react";
import PortraitItem from "./PortraitItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import { Alert, Button, Pressable, Text, View } from "react-native";
import * as Haptics from "expo-haptics";
import { FlatList } from "react-native-gesture-handler";

interface AppProps {
  handleSnapPress: (index: number) => void;
  handleClosePress: () => void;
  handleSelect: (image: any) => void;
  handleSheetChange: (index: number) => void;
  sheetRef: React.RefObject<BottomSheet>;
  snapPoints: string[];
}

const App = ({
  handleSnapPress,
  handleClosePress,
  handleSelect,
  handleSheetChange,
  sheetRef,
  snapPoints,
}: AppProps) => {
  // State for uploaded images
  const [imageUris, setImageUris] = useState<string[]>([]);

  useEffect(() => {
    // Load the saved image URIs from AsyncStorage on component mount
    const loadImageUris = async () => {
      try {
        const uris = await AsyncStorage.getItem("savedImageUris");
        if (uris) {
          setImageUris(JSON.parse(uris));
        }
      } catch (error) {
        console.error("Error loading image URIs from AsyncStorage:", error);
      }
    };

    loadImageUris();
  }, []);

  const pickImage = async () => {
    // Request permission to access the media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    // Launch the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false, // Disable editing to prevent cropping into a square
      quality: 1,
    });

    if (!result.canceled) {
      const { uri } = result.assets[0];

      // Resize the image to 756x1260 pixels
      const resizedImage = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 756, height: 1260 } }],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );

      const newImageUris = [resizedImage.uri, ...imageUris]; // Append at the start
      setImageUris(newImageUris);

      // Save the image URIs array to AsyncStorage
      try {
        await AsyncStorage.setItem("savedImageUris", JSON.stringify(newImageUris));
      } catch (error) {
        console.error("Error saving image URIs to AsyncStorage:", error);
      }
    }
  };

  const deleteImage = async (item: any) => {
    if (item.uri) { // Uploaded image
      const newImageUris = imageUris.filter((imageUri) => imageUri !== item.uri);
      setImageUris(newImageUris);

      // Save the updated image URIs array to AsyncStorage
      try {
        await AsyncStorage.setItem("savedImageUris", JSON.stringify(newImageUris));
      } catch (error) {
        console.error("Error saving image URIs to AsyncStorage:", error);
      }
    } else {
      console.log("Cannot delete static image");
      alert("Cannot delete static image.");
    }
  };

  // Initial images
  const IMAGES = [
    require("@/assets/images/species/aleena_0.png"),
    require("@/assets/images/species/anx_0.png"),
    require("@/assets/images/species/anx_1.png"),
    require("@/assets/images/species/aqualish_0.png"),
    require("@/assets/images/species/aqualish_1.png"),
    require("@/assets/images/species/aqualish_2.png"),
    require("@/assets/images/species/arcona_0.png"),
    require("@/assets/images/species/arcona_1.png"),
    require("@/assets/images/species/arkanian_0.png"),
    require("@/assets/images/species/arkanian_1.png"),
    require("@/assets/images/species/balosar_0.png"),
    require("@/assets/images/species/bardottan_0.png"),
    require("@/assets/images/species/bardottan_1.png"),
    require("@/assets/images/species/besalisk_0.png"),
    require("@/assets/images/species/bith_0.png"),
    require("@/assets/images/species/bith_1.png"),
    require("@/assets/images/species/bothan_0.png"),
    require("@/assets/images/species/bothan_1.png"),
    require("@/assets/images/species/caamasi_0.png"),
    require("@/assets/images/species/cerean_0.png"),
    require("@/assets/images/species/chadra-fan_0.png"),
    require("@/assets/images/species/chadra-fan_1.png"),
    require("@/assets/images/species/chagrian_0.png"),
    require("@/assets/images/species/chagrian_1.png"),
    require("@/assets/images/species/chevin_0.png"),
    require("@/assets/images/species/chevin_1.png"),
    require("@/assets/images/species/chiss_0.png"),
    require("@/assets/images/species/chiss_1.png"),
    require("@/assets/images/species/clawdite_0.png"),
    require("@/assets/images/species/clawdite_1.png"),
    require("@/assets/images/species/clone_0.png"),
    require("@/assets/images/species/clone_1.png"),
    require("@/assets/images/species/clone_2.png"),
    require("@/assets/images/species/clone_3.png"),
    require("@/assets/images/species/corellian_0.png"),
    require("@/assets/images/species/corellian_1.png"),
    require("@/assets/images/species/cosian_0.png"),
    require("@/assets/images/species/cosian_1.png"),
    require("@/assets/images/species/dathomirian_0.png"),
    require("@/assets/images/species/dathomirian_1.png"),
    require("@/assets/images/species/devaronian_0.png"),
    require("@/assets/images/species/devaronian_1.png"),
    require("@/assets/images/species/dowutin_0.png"),
    require("@/assets/images/species/drabatan_0.png"),
    require("@/assets/images/species/drall_0.png"),
    require("@/assets/images/species/dressellian_0.png"),
    require("@/assets/images/species/droid_0.png"),
    require("@/assets/images/species/droid_1.png"),
    require("@/assets/images/species/droid_3.png"),
    require("@/assets/images/species/droid_4.png"),
    require("@/assets/images/species/droid_5.png"),
    require("@/assets/images/species/droid_6.png"),
    require("@/assets/images/species/droid_2.png"),
    require("@/assets/images/species/droid_7.png"),
    require("@/assets/images/species/droid_8.png"),
    require("@/assets/images/species/droid_9.png"),
    require("@/assets/images/species/droid_10.png"),
    require("@/assets/images/species/droid_11.png"),
    require("@/assets/images/species/droid_12.png"),
    require("@/assets/images/species/droid_13.png"),
    require("@/assets/images/species/droid_14.png"),
    require("@/assets/images/species/droid_15.png"),
    require("@/assets/images/species/droid_16.png"),
    require("@/assets/images/species/droid_17.png"),
    require("@/assets/images/species/droid_18.png"),
    require("@/assets/images/species/droid_19.png"),
    require("@/assets/images/species/droid_20.png"),
    require("@/assets/images/species/droid_21.png"),
    require("@/assets/images/species/droid_22.png"),
    require("@/assets/images/species/droid_23.png"),
    require("@/assets/images/species/droid_24.png"),
    require("@/assets/images/species/droid_25.png"),
    require("@/assets/images/species/droid_26.png"),
    require("@/assets/images/species/droid_27.png"),
    require("@/assets/images/species/droid_28.png"),
    require("@/assets/images/species/droid_29.png"),
    require("@/assets/images/species/droid_30.png"),
    require("@/assets/images/species/dug_0.png"),
    require("@/assets/images/species/duros_0.png"),
    require("@/assets/images/species/duros_1.png"),
  ];

  // Combine initial images and uploaded images
  const combinedImages = [...imageUris.map(uri => ({ uri })), ...IMAGES];

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
      enablePanDownToClose={true}
      style={{ alignItems: "center" }}
      index={-1}
      backgroundStyle={{ backgroundColor: "#e7e8ea" }}
    >
      <BottomSheetView style={{ width: "100%" }}>
        <View className="bg-black/10 p-2 rounded-lg mb-2">
          <Button title="Add Image" 
          onPress={(image) => {
            Alert.alert(
              "Upload Image",
              `It is recommended to upload a 756x1260 image.`,
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "Confirm",
                  style: "default",
                  onPress: () => {
                    pickImage();
                  },
                },
              ]
            );
          }}
           />
        </View>
          <Text className="text-xs font-bold text-neutral-700 text-center mb-2">Press and hold to delete an image.</Text>
      </BottomSheetView>

      <BottomSheetFlatList
        data={combinedImages}
        contentContainerStyle={{ alignItems: "center", paddingBottom: 40 }}
        renderItem={({ item }) => (
          <PortraitItem
            key={item.uri ? item.uri : item.toString()}
            image={item}
            handleSelect={() => {
              handleSelect(item);
              handleClosePress();
            }}
            handleLongPress={() => {
              deleteImage(item);
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            }}
          />
        )}
        keyExtractor={(item) => item.uri ? item.uri : item.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
};

export default App;
