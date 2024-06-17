import CareerData from "@/constants/CareerData";
import { Career } from "@/types/Types";
import React from "react";
import { FlatList } from "react-native";
import CareerItem from "./CareerItem";

interface CareerProps {
  selectedCareer: Career | null;
  setSelectedCareer: (career: Career) => void;
}

const CareerElement = ({ selectedCareer, setSelectedCareer }: CareerProps) => {
  //TODO: filter out force careers that are not available to Droids
  return (
    <FlatList
      data={CareerData}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <CareerItem
          career={item}
          selectedCareer={selectedCareer}
          setSelectedCareer={setSelectedCareer}
        />
      )}
      windowSize={3}
    />
  );
};

export default CareerElement;
