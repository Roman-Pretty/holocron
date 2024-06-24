import ImageWrapper from "@/components/ImageWrapper";
import Header from "@/components/create/Header";
import PageContent from "@/components/create/PageContent";
import Button from "@/components/form/Button";
import CareerData from "@/constants/CareerData";
import { Obligation, Duty, Morality } from "@/constants/Motivations";
import * as Haptics from "expo-haptics";
import PortraitSelect from "@/components/form/PortraitSelect";
import MotivationSelect from "@/components/create/motivation/MotivationSelect";
import {
  AGILITY,
  BRAWN,
  CUNNING,
  INTELLECT,
  PRESENCE,
  WILLPOWER,
} from "@/constants/Characteristics";
import SpeciesData from "@/constants/SpeciesData";
import {
  Career,
  Character,
  Characteristic,
  Skill,
  Specialization,
  Species,
} from "@/types/Types";
import { loadCharacters, saveCharacter } from "@/storage/CharacterStorage";
import { router } from "expo-router";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ImageSourcePropType, KeyboardAvoidingView, View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";

const CreateCharacter = () => {
  const PAGES = 9;

  const [credits, setCredits] = useState(500);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [name, setName] = useState("");
  const [homeworld, setHomeworld] = useState("");
  const [description, setDescription] = useState("");
  const [species, setSpecies] = useState<null | Species>(null);
  const [experience, setExperience] = useState(0);
  const [career, setCareer] = useState<null | Career>(null);
  const [specialization, setSpecialization] = useState<null | Specialization>(
    null
  );
  const [checkedCareerSkills, setCheckedCareerSkills] = useState<{
    [key: string]: boolean;
  }>({});
  const [checkedSpecializationSkills, setCheckedSpecializationSkills] =
    useState<{ [key: string]: boolean }>({});
  const [portrait, setPortrait] = useState<ImageSourcePropType>(
    require("@/assets/images/species/aqualish_0.png")
  );
  const [selectedBonusSkill, setSelectedBonusSkill] = useState("");
  const [characteristics, setCharacteristics] = useState<Characteristic[]>([
    {
      name: "brawn",
      level: 0,
      desc: "Brute power, strength, and overall toughness.",
    },
    {
      name: "agility",
      level: 0,
      desc: "Manual dexterity, hand-eye coordination, and body control.",
    },
    {
      name: "intellect",
      level: 0,
      desc: "Intelligence, education and ability to reason and rationalize.",
    },
    {
      name: "cunning",
      level: 0,
      desc: "Crafty, devious, clever, and creative.",
    },
    {
      name: "willpower",
      level: 0,
      desc: "Discipline, self-control, mental fortitude, and faith.",
    },
    {
      name: "presence",
      level: 0,
      desc: "Moxie, charisma, confidence, and force of personality.",
    },
  ]);
  const [skills, setSkills] = React.useState<Skill[]>([
    { name: "Brawl", level: 0, characteristic: BRAWN, career: false },
    { name: "Gunnery", level: 0, characteristic: AGILITY, career: false },
    { name: "Lightsaber", level: 0, characteristic: BRAWN, career: false },
    { name: "Melee", level: 0, characteristic: BRAWN, career: false },
    {
      name: "Ranged (Heavy)",
      level: 0,
      characteristic: AGILITY,
      career: false,
    },
    {
      name: "Ranged (Light)",
      level: 0,
      characteristic: AGILITY,
      career: false,
    },

    { name: "Charm", level: 0, characteristic: PRESENCE, career: false },
    { name: "Coercion", level: 0, characteristic: WILLPOWER, career: false },
    { name: "Deception", level: 0, characteristic: CUNNING, career: false },
    { name: "Leadership", level: 0, characteristic: PRESENCE, career: false },
    { name: "Negotiation", level: 0, characteristic: PRESENCE, career: false },

    { name: "Core Worlds", level: 0, characteristic: INTELLECT, career: false },
    { name: "Education", level: 0, characteristic: INTELLECT, career: false },
    { name: "Lore", level: 0, characteristic: INTELLECT, career: false },
    { name: "Outer Rim", level: 0, characteristic: INTELLECT, career: false },
    { name: "Underworld", level: 0, characteristic: INTELLECT, career: false },
    { name: "Warfare", level: 0, characteristic: INTELLECT, career: false },
    { name: "Xenology", level: 0, characteristic: INTELLECT, career: false },

    { name: "Astrogation", level: 0, characteristic: INTELLECT, career: false },
    { name: "Athletics", level: 0, characteristic: BRAWN, career: false },
    { name: "Computers", level: 0, characteristic: INTELLECT, career: false },
    { name: "Cool", level: 0, characteristic: PRESENCE, career: false },
    { name: "Coordination", level: 0, characteristic: AGILITY, career: false },
    { name: "Discipline", level: 0, characteristic: WILLPOWER, career: false },
    { name: "Mechanics", level: 0, characteristic: INTELLECT, career: false },
    { name: "Medicine", level: 0, characteristic: INTELLECT, career: false },
    { name: "Perception", level: 0, characteristic: CUNNING, career: false },
    {
      name: "Piloting (Planetary)",
      level: 0,
      characteristic: AGILITY,
      career: false,
    },
    {
      name: "Piloting (Space)",
      level: 0,
      characteristic: AGILITY,
      career: false,
    },
    { name: "Resilience", level: 0, characteristic: BRAWN, career: false },
    { name: "Skulduggery", level: 0, characteristic: CUNNING, career: false },
    { name: "Stealth", level: 0, characteristic: AGILITY, career: false },
    { name: "Streetwise", level: 0, characteristic: CUNNING, career: false },
    { name: "Survival", level: 0, characteristic: CUNNING, career: false },
    { name: "Vigilance", level: 0, characteristic: WILLPOWER, career: false },
  ]);

  const [obligation, setObligation] = useState(false);
  const [duty, setDuty] = useState(false);
  const [morality, setMorality] = useState(false);
  const [groupSize, setGroupSize] = useState(4);

  const [selectedObligations, setSelectedObligations] =
    useState<Obligation[]>([]);
    const [selectedDuties, setSelectedDuties] =
    useState<Duty[]>([]);

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


  // Portrait Bottom Sheet
  const portraitSheetRef = useRef<BottomSheet>(null);
  portraitSheetRef.current?.close();

  const portraitSnapPoints = useMemo(() => ["60%"], []);

  // callbacks
  const handlePortraitSheetChange = useCallback((index: number) => {
    console.log("handleSheetChange", index);
  }, []);
  const handlePortraitSnapPress = useCallback((index: number) => {
    portraitSheetRef.current?.snapToIndex(index);
  }, []);
  const handlePortraitClosePress = useCallback(() => {
    portraitSheetRef.current?.close();
  }, []);

  useEffect(() => {
    function calculateCreds() {
      let credits = 500;
      if (obligation) {
        if (additionalObligation[2]) credits += 1000;
        if (additionalObligation[3]) credits += 2500;
      }
      if (duty) {
        if (additionalDuty[2]) credits += 1000;
        if (additionalDuty[3]) credits += 2500;
      }
      if (morality && !duty && !obligation) {
        if (moralityBonus === 1) credits += 2500;
        if (moralityBonus === 2) credits += 1000;
      }
      return credits;
    }
    setCredits(calculateCreds());
  }, [
    additionalObligation,
    additionalDuty,
    moralityBonus,
    morality,
    duty,
    obligation,
  ]);

  useEffect(() => {
    function calculateXP() {
      const startingXP = species ? species.startingXP : 0;
      let xp = startingXP;
      if (species) {
        for (const characteristic of characteristics) {
          switch (characteristic.name) {
            case "brawn":
              for (
                let i = species.characteristics[0] + 1;
                i <= characteristic.level;
                i++
              ) {
                xp -= i * 10;
              }
              break;
            case "agility":
              for (
                let i = species.characteristics[1] + 1;
                i <= characteristic.level;
                i++
              ) {
                xp -= i * 10;
              }
              break;
            case "intellect":
              for (
                let i = species.characteristics[2] + 1;
                i <= characteristic.level;
                i++
              ) {
                xp -= i * 10;
              }
              break;
            case "cunning":
              for (
                let i = species.characteristics[3] + 1;
                i <= characteristic.level;
                i++
              ) {
                xp -= i * 10;
              }
              break;
            case "willpower":
              for (
                let i = species.characteristics[4] + 1;
                i <= characteristic.level;
                i++
              ) {
                xp -= i * 10;
              }
              break;
            case "presence":
              for (
                let i = species.characteristics[5] + 1;
                i <= characteristic.level;
                i++
              ) {
                xp -= i * 10;
              }
              break;
          }
        }
        for (const skill of skills) {
          if (skill.level > 0) {
            let checked =
              (checkedCareerSkills[skill.name] ? 1 : 0) +
              (checkedSpecializationSkills[skill.name] ? 1 : 0) +
              (species.bonusSkills && species.bonusSkills.includes(skill.name)
                ? 1
                : 0);
            let bonusSkills = species.bonusSkills?.includes(skill.name) ? 1 : 0;
            let bonusSkillOption = selectedBonusSkill === skill.name ? 1 : 0;
            if (skill.career) {
              for (
                let i = checked + 1 + bonusSkills + bonusSkillOption;
                i <= skill.level;
                i++
              ) {
                xp -= i * 5;
              }
            } else {
              for (
                let i = checked + 1 + bonusSkills + bonusSkillOption;
                i <= skill.level;
                i++
              ) {
                xp -= i * 5 + 5;
              }
            }
          }
        }
      }
      if (specialization) {
        specialization.talents.talents.forEach((talent, i) => {
          if (talent.purchased) {
            xp -= talent.cost ? talent.cost : Math.ceil((i + 1) / 4) * 5;
          }
        });
      }
      if (obligation) {
        if (additionalObligation[0]) xp += 5;
        if (additionalObligation[1]) xp += 10;
      }
      if (duty) {
        if (additionalDuty[0]) xp += 5;
        if (additionalDuty[1]) xp += 10;
      }
      if (morality && !duty && !obligation) {
        if (moralityBonus === 0) xp += 10;
        if (moralityBonus === 2) xp += 5;
      }
      return xp;
    }
    setExperience(calculateXP());
  }, [
    skills,
    characteristics,
    checkedCareerSkills,
    checkedSpecializationSkills,
    selectedBonusSkill,
    additionalObligation,
    additionalDuty,
    moralityBonus,
    morality,
    duty,
    obligation,
  ]);

  useEffect(() => {
    for (const skill of skills) {
      if (career && career.skills.includes(skill.name)) {
        skill.career = true;
      } else if (specialization && specialization.skills.includes(skill.name)) {
        skill.career = true;
      } else if (
        species &&
        species.species === "Cerean" &&
        [
          "Core Worlds",
          "Education",
          "Lore",
          "Outer Rim",
          "Underworld",
          "Warfare",
          "Xenology",
        ].includes(skill.name)
      ) {
        skill.career = true;
      } else {
        skill.career = false;
      }
    }
    setSkills([...skills]);
  }, [career, specialization, species]);

  useEffect(() => {
    if (species) {
      for (const characteristic of characteristics) {
        switch (characteristic.name) {
          case "brawn":
            characteristic.level = species.characteristics[0];
            break;
          case "agility":
            characteristic.level = species.characteristics[1];
            break;
          case "intellect":
            characteristic.level = species.characteristics[2];
            break;
          case "cunning":
            characteristic.level = species.characteristics[3];
            break;
          case "willpower":
            characteristic.level = species.characteristics[4];
            break;
          case "presence":
            characteristic.level = species.characteristics[5];
            break;
        }
      }
      setCharacteristics([...characteristics]);
    }
  }, [species]);

  const onNextPressed = () => {
    if (currentIndex < PAGES) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onBackPressed = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onSavePressed = () => {
    async function save() {
      const newCharacter: Character = {
        key: (await loadCharacters()).length,
        data: {
          name,
          homeworld,
          description,
          species: species ? species : SpeciesData[0],
          experience: {
            total: species?.startingXP ?? 0,
            available: experience,
          },
          career: career ? career : CareerData[0],
          specializations: specialization ? [specialization] : [],
          skills,
          characteristics: {
            brawn: characteristics[0].level,
            agility: characteristics[1].level,
            intellect: characteristics[2].level,
            cunning: characteristics[3].level,
            willpower: characteristics[4].level,
            presence: characteristics[5].level,
          },
          image: portrait,
          credits: credits,
          inventory: [],
          encumbrance: { current: 0, threshold: characteristics[0].level + 5 },
          wound: {
            current: 0,
            threshold: species
              ? species.woundThreshold + characteristics[0].level
              : 0,
          },
          strain: {
            current: 0,
            threshold: species
              ? species.strainThreshold + characteristics[4].level
              : 0,
          },
          defense: {
            melee: 0,
            ranged: 0,
            soak:
              species?.species === "Droid"
                ? characteristics[0].level + 1
                : characteristics[0].level,
          },
          obligation: obligation
            ? selectedObligations.map((obligation) => {
                return { type: obligation.value, value: obligationCost };
              })
            : undefined,
          duty: duty
          ? selectedDuties.map((duty) => {
              return { type: duty.value, value: dutyCost };
            })
          : undefined,
          morality: morality
            ? {
                strength: selectedStrength ? selectedStrength.value : "",
                weakness: selectedWeakness ? selectedWeakness.value : "",
                value: moralityCost,
              }
            : undefined,
          criticalInjuries: [],
          statusEffects: [],
        },
      };
      saveCharacter(newCharacter);
    }
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    save();
    router.back();
  };

  return (
    <ImageWrapper>
      <KeyboardAvoidingView behavior="position">
        <View className="h-full justify-center px-2 py-1">
          <Header
            credits={credits}
            currentIndex={currentIndex}
            experience={experience}
            PAGES={PAGES}
            species={species}
          />
          <PageContent
            currentIndex={currentIndex}
            portrait={portrait}
            setPortrait={setPortrait}
            name={name}
            setName={setName}
            homeworld={homeworld}
            setHomeworld={setHomeworld}
            description={description}
            setDescription={setDescription}
            species={species}
            setSelectedSpecies={setSpecies}
            changeSelectedBonusSkill={setSelectedBonusSkill}
            career={career}
            setCareer={setCareer}
            specialization={specialization}
            setSpecialization={setSpecialization}
            skills={skills}
            setSkills={setSkills}
            checkedCareerSkills={checkedCareerSkills}
            setCheckedCareerSkills={setCheckedCareerSkills}
            checkedSpecializationSkills={checkedSpecializationSkills}
            setCheckedSpecializationSkills={setCheckedSpecializationSkills}
            characteristics={characteristics}
            setCharacteristics={setCharacteristics}
            selectedBonusSkill={selectedBonusSkill}
            obligation={obligation}
            setObligation={setObligation}
            duty={duty}
            setDuty={setDuty}
            morality={morality}
            setMorality={setMorality}
            groupSize={groupSize}
            setGroupSize={setGroupSize}
            selectedObligations={selectedObligations}
            setSelectedObligations={setSelectedObligations}
            selectedDuties={selectedDuties}
            setSelectedDuties={setSelectedDuties}
            obligationCost={obligationCost}
            dutyCost={dutyCost}
            moralityCost={moralityCost}
            setObligationCost={setObligationCost}
            setDutyCost={setDutyCost}
            setMoralityCost={setMoralityCost}
            additionalObligation={additionalObligation}
            setAdditionalObligation={setAdditionalObligation}
            additionalDuty={additionalDuty}
            setAdditionalDuty={setAdditionalDuty}
            selectedStrength={selectedStrength}
            setSelectedStrength={setSelectedStrength}
            selectedWeakness={selectedWeakness}
            setSelectedWeakness={setSelectedWeakness}
            moralityBonus={moralityBonus}
            setMoralityBonus={setMoralityBonus}
            handleSnapPress={handlePortraitSnapPress}
          />
          <View className="flex flex-row justify-between mt-[2vh] pb-[8vh]">
            <Button
              title="Back"
              onPress={onBackPressed}
              disabled={currentIndex === 0}
              cName="mr-2"
              disabledClassName="mr-2"
            />
            {currentIndex < PAGES ? (
              <Button
                title="Next"
                onPress={onNextPressed}
                disabled={
                  (currentIndex === 1 && species === null) ||
                  (currentIndex === 2 &&
                    ((!obligation && !duty && !morality) ||
                      (obligation && selectedObligations.length <= 0) ||
                      (duty && selectedDuties.length <= 0) ||
                      (morality && selectedStrength === null) ||
                      (morality && selectedWeakness === null))) ||
                  (currentIndex === 3 && career === null) ||
                  (currentIndex === 4 && specialization === null) ||
                  currentIndex === PAGES
                }
                cName="ml-2"
                disabledClassName="ml-2"
              />
            ) : (
              <Button
                title="Save"
                onPress={onSavePressed}
                cName="ml-2"
                disabledClassName="ml-2"
              />
            )}
          </View>
          <PortraitSelect
            handleSnapPress={handlePortraitSnapPress}
            handleClosePress={handlePortraitClosePress}
            handleSelect={setPortrait}
            handleSheetChange={handlePortraitSheetChange}
            sheetRef={portraitSheetRef}
            snapPoints={portraitSnapPoints}
          />
        </View>
      </KeyboardAvoidingView>
    </ImageWrapper>
  );
};

export default CreateCharacter;
