import { BACKGROUND } from "@/app/_layout";

import { View, Text, ImageBackground } from "react-native";
import React, { ReactNode } from "react";

const ImageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ImageBackground source={BACKGROUND} style={{ flex: 1 }}>
      {children}
    </ImageBackground>
  );
};

export default ImageWrapper;
