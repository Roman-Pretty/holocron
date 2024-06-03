import Description from "@/components/create/Description";
import FreeSkills from "@/components/create/FreeSkills";
import SummaryComponent from "@/components/create/Summary";
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
} from "@/constants/Types";
import React from "react";
import { ImageSourcePropType } from "react-native";
import TalentsComponent from "./talents/Talents";

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
}: PageContentProps) => {
  switch (currentIndex) {
    case 0:
      return (
        <Description
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
        <CareerComponent
          selectedCareer={career}
          setSelectedCareer={setCareer}
        />
      );
    case 3:
      return (
        <SpecializationComponent
          selectedCareer={career}
          selectedSpecialization={specialization}
          setSelectedSpecialization={setSpecialization}
        />
      );
    case 4:
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
    case 5:
      return (
        <CharacteristicsComponent
          characteristics={characteristics}
          setCharacteristics={setCharacteristics}
          species={species}
        />
      );
    case 6:
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
    case 7:
      return (
        <TalentsComponent
          setSpecialization={setSpecialization}
          specialization={specialization}
        />
      );
    case 8:
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
