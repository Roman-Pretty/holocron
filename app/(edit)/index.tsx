import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import ImageWrapper from "@/components/ImageWrapper";
import { SafeAreaView } from "react-native";
import { Colors } from "@/constants/Colors";

const index = () => {
    return (
        <ImageWrapper>
          <SafeAreaView
            style={{ backgroundColor: "Colors.global.slate900", flex: 1 }}
          >
            <View
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            >
              <ActivityIndicator size="small" color={Colors.global.box} />
            </View>
          </SafeAreaView>
        </ImageWrapper>
      )
};

export default index;
