import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SpeciesData from '@/constants/SpeciesData'
import SpeciesItem from './SpeciesItem'

interface SpeciesProps {
    selectedSpecies: Species | null;
    setSelectedSpecies: (species: Species) => void;
}

const Species = ({selectedSpecies, setSelectedSpecies}: SpeciesProps) => {
    return (
        <FlatList
            data={SpeciesData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <SpeciesItem  species={item} selectedSpecies={selectedSpecies} setSelectedSpecies={setSelectedSpecies} />
            )}
            windowSize={3}
        />
    )
}

export default Species