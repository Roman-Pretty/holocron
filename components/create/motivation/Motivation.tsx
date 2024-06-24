import React, { useState } from "react";
import { ScrollView, Text } from "react-native";
import DutyPicker from "./DutyPicker";
import GroupSizeSlider from "./GroupSizeSlider";
import MoralityPicker from "./MoralityPicker";
import ObligationPicker from "./ObligationPicker";
import {
  Duties,
  Obligations,
  Duty,
  Morality,
  MoralityStrengths,
  MoralityWeaknesses,
  Obligation,
} from "@/constants/Motivations";
import { Ionicons } from "@expo/vector-icons";

interface MotivationProps {
  obligation: boolean;
  duty: boolean;
  morality: boolean;
  setObligation: (value: boolean) => void;
  setDuty: (value: boolean) => void;
  setMorality: (value: boolean) => void;
  groupSize: number;
  setGroupSize: (value: number) => void;
  obligationCost: number;
  setObligationCost: (value: number) => void;
  dutyCost: number;
  setDutyCost: (value: number) => void;
  selectedObligations: Obligation[];
  setSelectedObligations: React.Dispatch<React.SetStateAction<Obligation[]>>;
  selectedDuty: Duty | null;
  setSelectedDuty: (value: Duty | null) => void;
  additionalObligation: boolean[];
  setAdditionalObligation: (value: boolean[]) => void;
  additionalDuty: boolean[];
  setAdditionalDuty: (value: boolean[]) => void;
  selectedStrength: Morality | null;
  setSelectedStrength: (value: Morality | null) => void;
  selectedWeakness: Morality | null;
  setSelectedWeakness: (value: Morality | null) => void;
  moralityCost: number;
  setMoralityCost: (value: number) => void;
  moralityBonus: number;
  setMoralityBonus: (value: number) => void;
}

const Motivation = ({
  obligation,
  duty,
  morality,
  setObligation,
  setDuty,
  setMorality,
  groupSize,
  setGroupSize,
  obligationCost,
  setObligationCost,
  dutyCost,
  setDutyCost,
  selectedObligations,
  setSelectedObligations,
  selectedDuty,
  setSelectedDuty,
  additionalObligation,
  setAdditionalObligation,
  additionalDuty,
  setAdditionalDuty,
  selectedStrength,
  setSelectedStrength,
  selectedWeakness,
  setSelectedWeakness,
  moralityCost,
  setMoralityCost,
  moralityBonus,
  setMoralityBonus,
}: MotivationProps) => {
  function updateGroupSize(index: number) {
    async function changeGroupSize(index: number) {
      await setGroupSize(index);
    }
    changeGroupSize(index);
    if (index <= 2) {
      setObligationCost(20);
      setDutyCost(20);
    } else if (index === 3) {
      setObligationCost(15);
      setDutyCost(15);
    } else if (index === 4 || index === 5) {
      setObligationCost(10);
      setDutyCost(10);
    } else if (index >= 6) {
      setObligationCost(5);
      setDutyCost(5);
    }
  }

  const calculateObligationCost = () => {
    let total = obligationCost;
    if (additionalObligation[0]) total += 5;
    if (additionalObligation[1]) total += 10;
    if (additionalObligation[2]) total += 5;
    if (additionalObligation[3]) total += 10;
    return total;
  };

  const calculateDutyCost = () => {
    let total = dutyCost;
    if (additionalDuty[0]) total -= 5;
    if (additionalDuty[1]) total -= 10;
    if (additionalDuty[2]) total -= 5;
    if (additionalDuty[3]) total -= 10;
    return total;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <Text className={`text-box text-lg text-center font-[Elektra]`}>
        You must select at least an Obligation, Duty, or Morality to continue.
      </Text> */}
      <GroupSizeSlider groupSize={groupSize} setGroupSize={updateGroupSize} />
      <ObligationPicker
        obligations={Obligations}
        selectedObligations={selectedObligations}
        setSelectedObligations={setSelectedObligations}
        obligation={obligation}
        setObligation={setObligation}
        additionalObligation={additionalObligation}
        setAdditionalObligation={setAdditionalObligation}
        calculateObligationCost={calculateObligationCost}
        obligationCost={obligationCost}
      />
      <DutyPicker
        duties={Duties}
        selectedDuty={selectedDuty}
        setSelectedDuty={setSelectedDuty}
        duty={duty}
        setDuty={setDuty}
        additionalDuty={additionalDuty}
        setAdditionalDuty={setAdditionalDuty}
        calculateDutyCost={calculateDutyCost}
        dutyCost={dutyCost}
      />
      <MoralityPicker
        morality={morality}
        setMorality={setMorality}
        strengths={MoralityStrengths}
        setSelectedStrength={setSelectedStrength}
        weaknesses={MoralityWeaknesses}
        setSelectedWeakness={setSelectedWeakness}
        moralityCost={moralityCost}
        setMoralityCost={setMoralityCost}
        obligation={obligation}
        duty={duty}
        moralityBonus={moralityBonus}
        setMoralityBonus={setMoralityBonus}
        selectedStrength={selectedStrength}
        selectedWeakness={selectedWeakness}
      />
    </ScrollView>
  );
};

export default Motivation;
