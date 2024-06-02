import React from "react";
import { View } from "react-native";

export default function TriangleCorner({style, ...props}: {style: any}) {
            return <View style={[{
                              width: 0,
                              height: 0,
                              backgroundColor: "transparent",
                              borderStyle: "solid",
                              borderRightWidth: 100,
                              borderTopWidth: 100,
                              borderRightColor: "transparent",
                              borderTopColor: "red",
                        }, style]} />;
};
