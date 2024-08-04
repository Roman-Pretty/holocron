import { View, Text, ImageSourcePropType, ScrollView } from "react-native";
import React from "react";
import LabelledTextInput from "../form/LabelledTextInput";
import PortraitInput from "../form/PortraitInput";

interface DescriptionProps {
  newName: string;
  setNewName: (name: string) => void;
  newDescription: string;
  setNewDescription: (description: string) => void;
  newHomeworld: string;
  setNewHomeworld: (homeworld: string) => void;
  newPortrait: ImageSourcePropType;
  setNewPortrait: (portrait: ImageSourcePropType) => void;
  handleSnapPress: (index: number) => void;
}

const Description = ({
  newName,
  setNewName,
  newDescription,
  setNewDescription,
  newHomeworld,
  setNewHomeworld,
  newPortrait,
  setNewPortrait,
  handleSnapPress,
}: DescriptionProps) => {
  return (
    <ScrollView contentContainerStyle={{padding: 8}}>
        <PortraitInput
        portrait={newPortrait}
        setPortrait={setNewPortrait}
        handleSnapPress={handleSnapPress}
        />
      <LabelledTextInput
        iconName="person"
        title="Name"
        text={newName}
        setText={setNewName}
        maxChar={25}
      />
      <LabelledTextInput
        iconName="planet"
        title="Homeworld"
        text={newHomeworld}
        setText={setNewHomeworld}
        maxChar={25}
      />
      <LabelledTextInput
        iconName="information-circle"
        title="Description"
        text={newDescription}
        setText={setNewDescription}
        multiLine
        maxChar={250}
      />
    </ScrollView>
  );
};

export default Description;
