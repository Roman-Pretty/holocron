import LabelledTextInput from "@/components/form/LabelledTextInput";
import React, { SetStateAction } from "react";
import {
    ImageSourcePropType,
    ScrollView
} from "react-native";
import PortraitInput from "../form/PortraitInput";

interface DescriptionProps {
  name: string;
  setName: (name: string) => void;
  homeworld: string;
  setHomeworld: (homeworld: string) => void;
  description: string;
  setDescription: (description: string) => void;
  portrait: ImageSourcePropType | undefined;
  setPortrait: React.Dispatch<SetStateAction<ImageSourcePropType>>;
  handleSnapPress: (index: number) => void;
}

const Description = ({
  name,
  setName,
  homeworld,
  setHomeworld,
  description,
  setDescription,
  portrait,
  setPortrait,
  handleSnapPress,
}: DescriptionProps) => {
  return (
      <ScrollView>
        <PortraitInput portrait={portrait} setPortrait={setPortrait} handleSnapPress={handleSnapPress} />
        <LabelledTextInput
          title="Name"
          setText={setName}
          text={name}
          maxChar={25}
          iconName="person"
        />
        <LabelledTextInput
          title="Homeworld"
          setText={setHomeworld}
          text={homeworld}
          maxChar={25}
          iconName="planet"
        />
        <LabelledTextInput
          title="Description"
          multiLine
          setText={setDescription}
          text={description}
          maxChar={250}
          iconName="information"
        />
      </ScrollView>
  );
};

export default Description;
