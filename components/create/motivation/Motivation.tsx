import React, { useState } from "react";
import { Switch, Text, View, ScrollView, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Slider from "@react-native-community/slider";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import ObligationPicker from "./ObligationPicker";
import DutyPicker from "./DutyPicker";
import GroupSizeSlider from "./GroupSizeSlider";

interface Obligation {
  label: string;
  value: string;
  desc: string;
}

interface Duty {
  label: string;
  value: string;
  desc: string;
}

const Obligations: Obligation[] = [
  {
    label: "Addiction",
    value: "addiction",
    desc: "You have a substance addiction that you must feed, or suffer the consequences.",
  },
  {
    label: "Betrayal",
    value: "betrayal",
    desc: "Either you have betrayed someone, and they are looking for you, or you are the target of a deep and personal betrayal.",
  },
  {
    label: "Blackmail",
    value: "blackmail",
    desc: "Someone has something on you, and they are using it to get you to do their bidding.",
  },
  {
    label: "Bounty",
    value: "bounty",
    desc: "You have a bounty on your head, and you are always looking over your shoulder.",
  },
  {
    label: "Criminal",
    value: "criminal",
    desc: "You are a criminal with a criminal record, and you are always on the run from the law.",
  },
  {
    label: "Debt",
    value: "debt",
    desc: "You owe someone a lot of money, and they are always looking for you to pay up.",
  },
  {
    label: "Dutybound",
    value: "dutybound",
    desc: "You have a duty to someone or something, and you must fulfill that duty no matter what.",
  },
  {
    label: "Family",
    value: "family",
    desc: "You have deep ties with your family, and you must always put them first.",
  },
  {
    label: "Favor",
    value: "favor",
    desc: "You owe someone a big favor, and they are looking for a way to call it in.",
  },
  {
    label: "Oath",
    value: "oath",
    desc: "You have sworn an oath to someone or something, and you must always keep that oath.",
  },
  {
    label: "Obsession",
    value: "obsession",
    desc: "You are obsessed with something, and you will do anything to get it.",
  },
  {
    label: "Responsibility",
    value: "responsibility",
    desc: "You have a great responsibility to someone or something, and you must always put that responsibility first.",
  },
];
const Duties: Duty[] = [
  {
    label: "Combat Victory",
    value: "combatvictory",
    desc: "You have proven yourself in combat, and wish to continue to do so.",
  },
  {
    label: "Counter-Intelligence",
    value: "counterintelligence",
    desc: "You hunt down enemy agents and threats, and spread misinformation to opposing factions.",
  },
  {
    label: "Intelligence",
    value: "intelligence",
    desc: "You gather information and intelligence for your faction.",
  },
  {
    label: "Internal Security",
    value: "internalsecurity",
    desc: "You protect your faction from internal threats and spies.",
  },
  {
    label: "Personnel",
    value: "personnel",
    desc: "You manage existing members of your faction, ensuring they are well-trained and equipped.",
  },
  {
    label: "Political Support",
    value: "politicalsupport",
    desc: "You ensure that your faction has the political support it needs to operate effectively.",
  },
  {
    label: "Recruiting",
    value: "recruiting",
    desc: "You recruit new members for your faction, ensuring that they are loyal and capable.",
  },
  {
    label: "Resource Acquisition",
    value: "resourceacquisition",
    desc: "You acquire resources for your faction, ensuring that they have the supplies they need to operate effectively.",
  },
  {
    label: "Space Superiority",
    value: "spacesuperiority",
    desc: "Your focus is ship-to-ship combat, where you believe the war is ultimately decided.",
  },
  {
    label: "Tech Procurement",
    value: "techprocurement",
    desc: "You acquire new technology for your faction, ensuring that they have the best equipment available.",
  },
  {
    label: "Support",
    value: "support",
    desc: "You are devoted to helping fellow PCs fulfill their Duties.",
  },
];

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
    </ScrollView>
  );
};

export default Motivation;
