import React from 'react';
import { FlatList } from 'react-native';
import SpecializationItem from './SpecializationItem';

interface SpecializationProps {
    selectedCareer: Career | null;
    selectedSpecialization: Specialization | null;
    setSelectedSpecialization: (specialization: Specialization) => void;
}

const Specialization = ({selectedCareer, selectedSpecialization, setSelectedSpecialization}: SpecializationProps) => {
    return (
        <FlatList
            data={selectedCareer ? selectedCareer.specializations : null}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <SpecializationItem specialization={item} selectedSpecialization={selectedSpecialization} setSelectedSpecialization={setSelectedSpecialization} />
            )}
            windowSize={3}
        />
    )
}

export default Specialization