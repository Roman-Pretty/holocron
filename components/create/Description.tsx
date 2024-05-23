import LabelledTextInput from '@/components/form/LabelledTextInput';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PortraitInput from '../form/PortraitInput';
import { ImageSourcePropType } from 'react-native';
import { SetStateAction } from 'react';

interface DescriptionProps {
    name: string;
    setName: (name: string) => void;
    homeworld: string;
    setHomeworld: (homeworld: string) => void;
    description: string;
    setDescription: (description: string) => void;
    portrait: ImageSourcePropType | undefined;
    setPortrait: React.Dispatch<SetStateAction<ImageSourcePropType>>;
}

const Description = ({ name, setName, homeworld, setHomeworld, description, setDescription, portrait, setPortrait }: DescriptionProps) => {
    return (
        <KeyboardAwareScrollView extraHeight={120}>
            <PortraitInput portrait={portrait} setPortrait={setPortrait} />
            <LabelledTextInput
                title='Name'
                setText={setName}
                text={name}
                maxChar={25}
                iconName='person' />
                <LabelledTextInput
                title='Homeworld'
                setText={setHomeworld}
                text={homeworld}
                maxChar={25}
                iconName='planet' />
                {/* <LabelledTextInput
                title='Campaign'
                setText={setCampaign}
                text={campaign}
                maxChar={25}
                iconName='book' /> */}
                <LabelledTextInput
                title='Description'
                multiLine
                setText={setDescription}
                text={description}
                maxChar={250}
                iconName='information' />
        </KeyboardAwareScrollView>
    )
}

export default Description