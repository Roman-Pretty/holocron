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

const Motivation = () => {
  const [obligation, setObligation] = useState(false);
  const [duty, setDuty] = useState(false);
  const [morality, setMorality] = useState(false);
  const [groupSize, setGroupSize] = useState(4);

  const [selectedObligation, setSelectedObligation] =
    useState<Obligation | null>(null);
  const [selectedDuty, setSelectedDuty] = useState<Duty | null>(null);

  const [obligationCost, setObligationCost] = useState(10);
  const [dutyCost, setDutyCost] = useState(10);
  const [moralityCost, setMoralityCost] = useState(50);

  const [additionalObligation, setAdditionalObligation] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [additionalDuty, setAdditionalDuty] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [moralityBonus, setMoralityBonus] = useState(0);

  const [selectedStrength, setSelectedStrength] = useState<Morality | null>(
    null
  );
  const [selectedWeakness, setSelectedWeakness] = useState<Morality | null>(
    null
  );

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
    <ScrollView>
      <Text className={`text-box text-lg text-center font-[Elektra]`}>
        You must select at least an Obligation, Duty, or Morality to continue.
      </Text>
      <GroupSizeSlider groupSize={groupSize} setGroupSize={updateGroupSize} />
      <ObligationPicker
        obligations={Obligations}
        selectedObligation={selectedObligation}
        setSelectedObligation={setSelectedObligation}
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
      />
    </ScrollView>
  );
};

export default Motivation;
