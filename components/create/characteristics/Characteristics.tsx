import { View, Text, FlatList } from 'react-native';
import React from 'react';
import CharacteristicItem from './CharacteristicItem';

interface CharacteristicsProps {
    characteristics: Characteristic[];
    setCharacteristics: React.Dispatch<React.SetStateAction<Characteristic[]>>;
    species: Species | null;
}

const Characteristics = ({ characteristics, setCharacteristics, species}: CharacteristicsProps) => {


    return (
        <FlatList
            data={characteristics}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <CharacteristicItem index={index} setCharacteristics={setCharacteristics} characteristic={item} species={species} />
            )}
        />
    );
};


export default Characteristics