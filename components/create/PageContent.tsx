import Description from "@/components/create/Description";
import FreeSkills from "@/components/create/FreeSkills";
import CareerComponent from "@/components/create/career/Career";
import CharacteristicsComponent from "@/components/create/characteristics/Characteristics";
import SkillsComponent from "@/components/create/skills/Skills";
import SpecializationComponent from "@/components/create/specialization/Specialization";
import SpeciesComponent from "@/components/create/species/Species";
import SummaryComponent from "@/components/create/summary/Summary";
import { InitialPlayerStateInterface } from "@/constants/InitialPlayerState";
import React from "react";
import Motivation from "./motivation/Motivation";
import TalentsComponent from "./talents/Talents";
import InitialPlayerState from "@/constants/InitialPlayerState";

interface PageContentProps {
  currentIndex: number;
  handleSnapPress: (index: number) => void;
  state: InitialPlayerStateInterface;
  setState: (key: string, value: any) => void;
}

const PageContent = ({
  currentIndex,
  handleSnapPress,
  state,
  setState,
}: PageContentProps) => {
  switch (currentIndex) {
    case 0:
      return (
        <Description
          handleSnapPress={handleSnapPress}
          state={state}
          setState={setState}
        />
      );
    case 1:
      return <SpeciesComponent state={state} setState={setState} />;
    case 2:
      return <Motivation state={state} setState={setState} />;
    case 3:
      return (
        <CareerComponent
          selectedCareer={state.career}
          setSelectedCareer={(career) => {
            setState("skills", InitialPlayerState.skills)
            setState("checkedCareerSkills", []);
            setState("career", career)}}
        />
      );
    case 4:
      return (
        <SpecializationComponent
          selectedCareer={state.career}
          selectedSpecialization={state.specialization}
          setSelectedSpecialization={(specialization) => {
            setState("skills", InitialPlayerState.skills);
            setState("checkedSpecializationSkills", []);
            setState("specialization", specialization);
            
          }}
        />
      );
    case 5:
      return <FreeSkills state={state} setState={setState} />;
    case 6:
      return <CharacteristicsComponent state={state} setState={setState} />;
    case 7:
      return <SkillsComponent state={state} setState={setState} />;
    case 8:
      return (
        <TalentsComponent
          setSpecialization={(specialization) =>
            setState("specialization", specialization)
          }
          specialization={state.specialization}
        />
      );
    case 9:
      return <SummaryComponent state={state} />;
    default:
      return null;
  }
};

export default PageContent;
