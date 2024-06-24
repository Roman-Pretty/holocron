import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { Button, View } from "react-native";
import PortraitItem from "./PortraitItem";

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
  // hooks

  // variables
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
        <BottomSheetFlatList
          data={IMAGES}
          renderItem={({ item }) => (
              <PortraitItem
              key={item.toString()}
              image={item}
              handleSelect={() => {handleSelect(item); handleClosePress();}}
              />
            )}
            keyExtractor={(item) => item.toString()}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            />
      </BottomSheet>
  );
};

export default App;
