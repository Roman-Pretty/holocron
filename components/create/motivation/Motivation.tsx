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
import { InitialPlayerStateInterface } from "@/constants/InitialPlayerState";

interface MotivationProps {
  state: InitialPlayerStateInterface;
  setState: (key: string, value: any) => void;
}

const Motivation = ({
  setState,
  state: {
    groupSize,
    obligation,
    duty,
    morality,
    selectedObligations,
    selectedDuties,
    additionalObligation,
    additionalDuty,
    obligationCost,
    dutyCost,
    moralityCost,
    moralityBonus,
    selectedStrength,
    selectedWeakness,
  },
}: MotivationProps) => {
  function updateGroupSize(index: number) {
    async function changeGroupSize(index: number) {
      await setState("groupSize", index);
    }
    changeGroupSize(index);
    if (index <= 2) {
      setState("obligationCost", 20);
      setState("dutyCost", 20);
    } else if (index === 3) {
      setState("obligationCost", 15);
      setState("dutyCost", 15);
    } else if (index === 4 || index === 5) {
      setState("obligationCost", 10);
      setState("dutyCost", 10);
    } else if (index >= 6) {
      setState("obligationCost", 5);
      setState("dutyCost", 5);
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
      <GroupSizeSlider groupSize={groupSize} setGroupSize={updateGroupSize} />
      <ObligationPicker
        obligations={Obligations}
        selectedObligations={selectedObligations}
        setSelectedObligations={(obligations) => setState("selectedObligations", obligations)}
        obligation={obligation}
        setObligation={(obligation) => setState("obligation", obligation)}
        additionalObligation={additionalObligation}
        setAdditionalObligation={(additionalObligation) => setState("additionalObligation", additionalObligation)}
        calculateObligationCost={calculateObligationCost}
        obligationCost={obligationCost}
      />
      <DutyPicker
        duties={Duties}
        selectedDuties={selectedDuties}
        setSelectedDuties={(duties) => setState("selectedDuties", duties)}
        duty={duty}
        setDuty={(duty) => setState("duty", duty)}
        additionalDuty={additionalDuty}
        setAdditionalDuty={(additionalDuty) => setState("additionalDuty", additionalDuty)}
        calculateDutyCost={calculateDutyCost}
        dutyCost={dutyCost}
      />
      <MoralityPicker
        morality={morality}
        setMorality={(morality) => setState("morality", morality)}
        strengths={MoralityStrengths}
        setSelectedStrength={(selectedStrength) => setState("selectedStrength", selectedStrength)}
        weaknesses={MoralityWeaknesses}
        setSelectedWeakness={(selectedWeakness) => setState("selectedWeakness", selectedWeakness)}
        moralityCost={moralityCost}
        setMoralityCost={(moralityCost) => setState("moralityCost", moralityCost)}
        obligation={obligation}
        duty={duty}
        moralityBonus={moralityBonus}
        setMoralityBonus={(moralityBonus) => setState("moralityBonus", moralityBonus)}
        selectedStrength={selectedStrength}
        selectedWeakness={selectedWeakness}
      />
    </ScrollView>
  );
};

export default Motivation;
