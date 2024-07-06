import React, { useEffect } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PagerView, {
  PagerViewOnPageScrollEventData,
} from "react-native-pager-view";

import ImageWrapper from "@/components/ImageWrapper";
import { ScalingDot } from "react-native-animated-pagination-dots";
import { Colors } from "@/constants/Colors";
import { router, useNavigation } from "expo-router";
import Skills from "@/components/edit/Skills";
import Header from "@/components/create/Header";
import TriangleCorner from "@/components/shapes/TriangleCorner";

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const INTRO_DATA = [
  {
    key: "1",
    title: "Skills",
  },
  {
    key: "2",
    title: "Introduction screen 🎉",
  },
  {
    key: "3",
    title: "And can be anything 🎈",
  },
  {
    key: "4",
    title: "And can be anything 🎈",
  },
];

export default function PaginationDotsExample() {
  const width = Dimensions.get("window").width;
  const ref = React.useRef<PagerView>(null);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [0, INTRO_DATA.length];
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, INTRO_DATA.length * width],
  });

  const onPageScroll = React.useMemo(
    () =>
      Animated.event<PagerViewOnPageScrollEventData>(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        }
      ),
    []
  );

//   const navigation = useNavigation();

//   // Effect
//   useEffect(() => {
//     navigation.addListener("beforeRemove", (e) => {
//       e.preventDefault();
//       console.log("onback");
//       Alert.alert("Save Changes", "Do you want to save changes?", [
//         {
//           text: "No",
//           style: "destructive",
//           onPress: () => {
//             console.log("Changes not saved");
//             // Add your logic for discarding changes here
//             router.back();
//           },
//         },
//         {
//           text: "Yes",
//           onPress: () => {
//             console.log("Changes saved");
//             // Add your logic for saving changes here
//             router.back();
//           },
//         },
//       ]);
//       navigation.dispatch(e.data.action);
//     });
//   }, []);

  return (
    <ImageWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <AnimatedPagerView
          initialPage={0}
          ref={ref}
          style={{ flex: 1 }}
          onPageScroll={onPageScroll}
        >
          {INTRO_DATA.map(({ key, title }) => (
            <View
              key={key}
              className="flex-1 justify-center items-center mt-4" 
            >
                <View className="flex-row justify-center">
          <TriangleCorner
            style={{
              transform: [{ rotate: "90deg" }],
              borderTopWidth: 34,
              borderRightWidth: 34,
              borderTopColor: Colors.global.box,
            }}
          />
          <View className="bg-box w-[80vw] mb-4">
            <Text className="text-2xl text-white font-[Elektra] text-center pt-0.5">
              {title}
            </Text>
          </View>
          <TriangleCorner
            style={{
              transform: [{ rotate: "0deg" }],
              borderTopWidth: 34,
              borderRightWidth: 34,
              borderTopColor: Colors.global.box,
            }}
          />
        </View>
                {key === "1" && (<Skills />)}
            </View>
          ))}
        </AnimatedPagerView>
        <View className="h-10">
          <ScalingDot
            data={INTRO_DATA}
            //@ts-ignore
            scrollX={scrollX}
            containerStyle={{
              bottom: 16,
            }}
            activeDotColor={Colors.global.box}
            inActiveDotColor={Colors.global.box}
          />
        </View>
      </SafeAreaView>
    </ImageWrapper>
  );
}
