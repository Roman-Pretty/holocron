import React from "react";
import { View } from "react-native";

export default function Triangle(...props: any) {
    return <View style={[{
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 50,
        borderRightWidth: 50,
        borderBottomWidth: 100,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "red",
    }, props.style]} />;
};