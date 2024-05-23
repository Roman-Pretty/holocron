import { View, Text, FlatList } from 'react-native';
import React from 'react';
import CharacteristicItem from './CharacteristicItem';

interface CharacteristicsProps {
    characteristics: Characteristic[];
    setCharacteristics: React.Dispatch<React.SetStateAction<Characteristic[]>>;
    species: Species | null;
    xp: number;
    setXp: React.Dispatch<React.SetStateAction<number>>;
}

const Characteristics = ({ characteristics, setCharacteristics, species, xp, setXp }: CharacteristicsProps) => {


    return (
        <FlatList
            data={characteristics}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <CharacteristicItem index={index} characteristic={item} species={species} xp={xp} setXp={setXp} />
            )}
        />
    );
};


export default Characteristics