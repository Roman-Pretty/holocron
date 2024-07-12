import LabelledTextInput from "@/components/form/LabelledTextInput";
import React, { SetStateAction } from "react";
import { ImageSourcePropType, ScrollView } from "react-native";
import PortraitInput from "../form/PortraitInput";
import { InitialPlayerStateInterface } from "@/constants/InitialPlayerState";

interface DescriptionProps {
  state: InitialPlayerStateInterface;
  setState: (key: string, value: any) => void;
  handleSnapPress: (index: number) => void;
}

const Description = ({
  state: { portrait, name, homeworld, description },
  setState,
  handleSnapPress,
}: DescriptionProps) => {
  return (
    <ScrollView contentContainerStyle={{ paddingTop: 8 }}>
      <PortraitInput
        portrait={portrait}
        setPortrait={(portrait: SetStateAction<ImageSourcePropType>) =>
          setState("portrait", portrait)
        }
        handleSnapPress={handleSnapPress}
      />
      <LabelledTextInput
        title="Name"
        setText={(text: SetStateAction<string>) => setState("name", text)}
        text={name}
        maxChar={25}
        iconName="person"
      />
      <LabelledTextInput
        title="Homeworld"
        setText={(text: SetStateAction<string>) => setState("homeworld", text)}
        text={homeworld}
        maxChar={25}
        iconName="planet"
      />
      <LabelledTextInput
        title="Description"
        multiLine
        setText={(text: SetStateAction<string>) =>
          setState("description", text)
        }
        text={description}
        maxChar={250}
        iconName="information"
      />
    </ScrollView>
  );
};

export default Description;
