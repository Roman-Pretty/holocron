import Description from "@/components/create/Description";
import FreeSkills from "@/components/create/FreeSkills";
import SummaryComponent from "@/components/create/summary/Summary";
import CareerComponent from "@/components/create/career/Career";
import CharacteristicsComponent from "@/components/create/characteristics/Characteristics";
import SkillsComponent from "@/components/create/skills/Skills";
import SpecializationComponent from "@/components/create/specialization/Specialization";
import SpeciesComponent from "@/components/create/species/Species";
import {
  Career,
  Characteristic,
  Skill,
  Specialization,
  Species,
} from "@/types/Types";
import React from "react";
import { ImageSourcePropType } from "react-native";
import TalentsComponent from "./talents/Talents";
import Motivation from "./motivation/Motivation";
import { Morality, Obligation, Duty } from "@/constants/Motivations";

interface PageContentProps {
  currentIndex: number;
  portrait: ImageSourcePropType;
  setPortrait: React.Dispatch<React.SetStateAction<ImageSourcePropType>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  homeworld: string;
  setHomeworld: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  species: Species | null;
  setSelectedSpecies: React.Dispatch<React.SetStateAction<Species | null>>;
  career: Career | null;
  setCareer: React.Dispatch<React.SetStateAction<Career | null>>;
  specialization: Specialization | null;
  setSpecialization: React.Dispatch<
    React.SetStateAction<Specialization | null>
  >;
  skills: Skill[];
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
  checkedCareerSkills: { [key: string]: boolean };
  setCheckedCareerSkills: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
  checkedSpecializationSkills: { [key: string]: boolean };
  setCheckedSpecializationSkills: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
  characteristics: Characteristic[];
  setCharacteristics: React.Dispatch<React.SetStateAction<Characteristic[]>>;
  selectedBonusSkill: string | null;
  changeSelectedBonusSkill: (skill: string) => void;
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
  selectedDuties: Duty[];
  setSelectedDuties: React.Dispatch<React.SetStateAction<Duty[]>>;
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
  handleSnapPress: (index: number) => void;
}

const PageContent = ({
  currentIndex,
  portrait,
  setPortrait,
  name,
  setName,
  homeworld,
  setHomeworld,
  description,
  setDescription,
  species,
  setSelectedSpecies,
  changeSelectedBonusSkill,
  career,
  setCareer,
  specialization,
  setSpecialization,
  skills,
  setSkills,
  checkedCareerSkills,
  setCheckedCareerSkills,
  checkedSpecializationSkills,
  setCheckedSpecializationSkills,
  characteristics,
  setCharacteristics,
  selectedBonusSkill,
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
  selectedDuties,
  setSelectedDuties,
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
  handleSnapPress,
}: PageContentProps) => {
  switch (currentIndex) {
    case 0:
      return (
        <Description
          handleSnapPress={handleSnapPress}
          portrait={portrait}
          setPortrait={setPortrait}
          name={name}
          setName={setName}
          homeworld={homeworld}
          setHomeworld={setHomeworld}
          description={description}
          setDescription={setDescription}
        />
      );
    case 1:
      return (
        <SpeciesComponent
          selectedSpecies={species}
          setSelectedSpecies={setSelectedSpecies}
          setSelectedBonusSkill={changeSelectedBonusSkill}
        />
      );
    case 2:
      return (
        <Motivation
          obligation={obligation}
          duty={duty}
          morality={morality}
          setObligation={setObligation}
          setDuty={setDuty}
          setMorality={setMorality}
          groupSize={groupSize}
          setGroupSize={setGroupSize}
          obligationCost={obligationCost}
          setObligationCost={setObligationCost}
          dutyCost={dutyCost}
          setDutyCost={setDutyCost}
          selectedObligations={selectedObligations}
          setSelectedObligations={setSelectedObligations}
          selectedDuties={selectedDuties}
          setSelectedDuties={setSelectedDuties}
          additionalObligation={additionalObligation}
          setAdditionalObligation={setAdditionalObligation}
          additionalDuty={additionalDuty}
          setAdditionalDuty={setAdditionalDuty}
          selectedStrength={selectedStrength}
          setSelectedStrength={setSelectedStrength}
          selectedWeakness={selectedWeakness}
          setSelectedWeakness={setSelectedWeakness}
          moralityCost={moralityCost}
          setMoralityCost={setMoralityCost}
          moralityBonus={moralityBonus}
          setMoralityBonus={setMoralityBonus}
        />
      );
    case 3:
      return (
        <CareerComponent
          selectedCareer={career}
          setSelectedCareer={setCareer}
        />
      );
    case 4:
      return (
        <SpecializationComponent
          selectedCareer={career}
          selectedSpecialization={specialization}
          setSelectedSpecialization={setSpecialization}
        />
      );
    case 5:
      return (
        <FreeSkills
          skills={skills}
          species={species}
          selectedCareer={career}
          selectedSpecialization={specialization}
          checkedCareerSkills={checkedCareerSkills}
          setCheckedCareerSkills={setCheckedCareerSkills}
          checkedSpecializationSkills={checkedSpecializationSkills}
          setCheckedSpecializationSkills={setCheckedSpecializationSkills}
        />
      );
    case 6:
      return (
        <CharacteristicsComponent
          characteristics={characteristics}
          setCharacteristics={setCharacteristics}
          species={species}
        />
      );
    case 7:
      return (
        <SkillsComponent
          selectedBonusSkill={selectedBonusSkill}
          species={species}
          skills={skills}
          setSkills={setSkills}
          career={career}
          specialization={specialization}
          checkedCareerSkills={checkedCareerSkills}
          checkedSpecializationSkills={checkedSpecializationSkills}
        />
      );
    case 8:
      return (
        <TalentsComponent
          setSpecialization={setSpecialization}
          specialization={specialization}
        />
      );
    case 9:
      return (
        <SummaryComponent
          name={name}
          homeworld={homeworld}
          description={description}
          species={species}
          career={career}
          specialization={specialization}
          characteristics={characteristics}
          skills={skills}
          portrait={portrait}
        />
      );
    default:
      return null;
  }
};

export default PageContent;
