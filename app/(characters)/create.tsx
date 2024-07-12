import ImageWrapper from "@/components/ImageWrapper";
import Header from "@/components/create/Header";
import PageContent from "@/components/create/PageContent";
import Button from "@/components/form/Button";
import PortraitSelect from "@/components/form/PortraitSelect";
import CareerData from "@/constants/CareerData";
import InitialPlayerState from "@/constants/InitialPlayerState";
import SpeciesData from "@/constants/SpeciesData";
import { loadCharacters, saveCharacter } from "@/storage/CharacterStorage";
import { Character } from "@/types/Types";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import * as Haptics from "expo-haptics";
import { router } from "expo-router";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { KeyboardAvoidingView, View } from "react-native";
import * as Items from "@/constants/Items";

const CreateCharacter = () => {
  const PAGES = 9;
  const [currentIndex, setCurrentIndex] = useState(0);

  const [state, setState] = useState(InitialPlayerState);

  const handleStateChange = (key: string, value: any) => {
    setState((prevState) => ({ ...prevState, [key]: value }));
  };

  // Portrait Bottom Sheet
  const portraitSheetRef = useRef<BottomSheet>(null);
  portraitSheetRef.current?.close();

  const portraitSnapPoints = useMemo(() => ["60%"], []);

  // callbacks
  const handlePortraitSheetChange = useCallback((index: number) => {}, []);
  const handlePortraitSnapPress = useCallback((index: number) => {
    portraitSheetRef.current?.snapToIndex(index);
  }, []);
  const handlePortraitClosePress = useCallback(() => {
    portraitSheetRef.current?.close();
  }, []);

  // Calculate Credits
  useEffect(() => {
    function calculateCreds() {
      let credits = 500;
      if (state.obligation) {
        if (state.additionalObligation[2]) credits += 1000;
        if (state.additionalObligation[3]) credits += 2500;
      }
      if (state.duty) {
        if (state.additionalDuty[2]) credits += 1000;
        if (state.additionalDuty[3]) credits += 2500;
      }
      if (state.morality && !state.duty && !state.obligation) {
        if (state.moralityBonus === 1) credits += 2500;
        if (state.moralityBonus === 2) credits += 1000;
      }
      return credits;
    }
    handleStateChange("credits", calculateCreds());
  }, [
    state.additionalObligation,
    state.additionalDuty,
    state.moralityBonus,
    state.morality,
    state.duty,
    state.obligation,
  ]);

  // Calculate XP
  useEffect(() => {
    function calculateXP() {
      const startingXP = state.species ? state.species.startingXP : 0;
      let xp = startingXP;
      if (state.species) {
        if (
          state.species.species === "Dressellian" &&
          state.selectedSpeciesOption === "Non-Primitive [5 Experience]"
        )
          xp -= 5;
        if (
          state.species.species === "Gand" &&
          state.selectedSpeciesOption === "Has Lungs [+10 Experience]"
        )
          xp += 10;
        for (const characteristic of state.characteristics) {
          switch (characteristic.name) {
            case "brawn":
              for (
                let i = state.species.characteristics[0] + 1;
                i <= characteristic.level;
                i++
              ) {
                xp -= i * 10;
              }
              break;
            case "agility":
              for (
                let i = state.species.characteristics[1] + 1;
                i <= characteristic.level;
                i++
              ) {
                xp -= i * 10;
              }
              break;
            case "intellect":
              for (
                let i = state.species.characteristics[2] + 1;
                i <= characteristic.level;
                i++
              ) {
                xp -= i * 10;
              }
              break;
            case "cunning":
              for (
                let i = state.species.characteristics[3] + 1;
                i <= characteristic.level;
                i++
              ) {
                xp -= i * 10;
              }
              break;
            case "willpower":
              for (
                let i = state.species.characteristics[4] + 1;
                i <= characteristic.level;
                i++
              ) {
                xp -= i * 10;
              }
              break;
            case "presence":
              for (
                let i = state.species.characteristics[5] + 1;
                i <= characteristic.level;
                i++
              ) {
                xp -= i * 10;
              }
              break;
          }
        }
        for (const skill of state.skills) {
          if (skill.level > 0) {
            let checked =
              (state.checkedCareerSkills[skill.name] ? 1 : 0) +
              (state.checkedSpecializationSkills[skill.name] ? 1 : 0) +
              (state.species.bonusSkills &&
              state.species.bonusSkills.includes(skill.name)
                ? 1
                : 0);
            let bonusSkills = state.species.bonusSkills?.includes(skill.name)
              ? 1
              : 0;
            let bonusSkillOption =
              state.selectedSpeciesOption === skill.name ? 1 : 0;
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
      if (state.specialization) {
        state.specialization.talents.talents.forEach((talent, i) => {
          if (talent.purchased) {
            xp -= talent.cost ? talent.cost : Math.ceil((i + 1) / 4) * 5;
          }
        });
      }
      if (state.obligation) {
        if (state.additionalObligation[0]) xp += 5;
        if (state.additionalObligation[1]) xp += 10;
      }
      if (state.duty) {
        if (state.additionalDuty[0]) xp += 5;
        if (state.additionalDuty[1]) xp += 10;
      }
      if (state.morality && !state.duty && !state.obligation) {
        if (state.moralityBonus === 0) xp += 10;
        if (state.moralityBonus === 2) xp += 5;
      }
      return xp;
    }
    handleStateChange("experience", calculateXP());
  }, [
    state.skills,
    state.characteristics,
    state.checkedCareerSkills,
    state.checkedSpecializationSkills,
    state.selectedSpeciesOption,
    state.additionalObligation,
    state.additionalDuty,
    state.moralityBonus,
    state.morality,
    state.duty,
    state.obligation,
  ]);

  // Calculate Career Skills
  useEffect(() => {
    for (const skill of state.skills) {
      if (state.career && state.career.skills.includes(skill.name)) {
        skill.career = true;
      } else if (
        state.specialization &&
        state.specialization.skills.includes(skill.name)
      ) {
        skill.career = true;
      } else if (
        state.species &&
        state.species.species === "Cerean" &&
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
    handleStateChange("skills", [...state.skills]);
  }, [state.career, state.specialization, state.species]);

  // Calculate Species Characteristics
  useEffect(() => {
    if (state.species) {
      for (const characteristic of state.characteristics) {
        switch (characteristic.name) {
          case "brawn":
            characteristic.level = state.species.characteristics[0];
            break;
          case "agility":
            characteristic.level = state.species.characteristics[1];
            break;
          case "intellect":
            characteristic.level = state.species.characteristics[2];
            break;
          case "cunning":
            characteristic.level = state.species.characteristics[3];
            break;
          case "willpower":
            characteristic.level = state.species.characteristics[4];
            break;
          case "presence":
            characteristic.level = state.species.characteristics[5];
            break;
        }
      }
      handleStateChange("characteristics", [...state.characteristics]);
    }
  }, [state.species]);

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

  const calculateTotalXp = () => {
    let xp = state.species ? state.species.startingXP : 0;
    if (state.obligation) {
      if (state.additionalObligation[0]) xp += 5;
      if (state.additionalObligation[1]) xp += 10;
    }
    if (state.duty) {
      if (state.additionalDuty[0]) xp += 5;
      if (state.additionalDuty[1]) xp += 10;
    }
    if (state.morality && !state.duty && !state.obligation) {
      if (state.moralityBonus === 0) xp += 10;
      if (state.moralityBonus === 2) xp += 5;
    }
    return xp;
  };

  const onSavePressed = () => {
    async function save() {
      const newCharacter: Character = {
        key: (await loadCharacters()).length,
        data: {
          name: state.name,
          homeworld: state.homeworld,
          description: state.description,
          species: state.species ? state.species : SpeciesData[0],
          experience: {
            total: calculateTotalXp(),
            available: state.experience,
          },
          career: state.career ? state.career : CareerData[0],
          specializations: state.specialization ? [state.specialization] : [],
          skills: state.skills,
          characteristics: {
            brawn: state.characteristics[0].level,
            agility: state.characteristics[1].level,
            intellect: state.characteristics[2].level,
            cunning: state.characteristics[3].level,
            willpower: state.characteristics[4].level,
            presence: state.characteristics[5].level,
          },
          image: state.portrait,
          credits: state.credits,
          inventory: [
            Items.None,
            Items.None,
            Items.None,
            Items.None,
            Items.None,
            Items.None,
            Items.None,
            Items.None,
            Items.None,
            Items.None,
            Items.None,
            Items.None,
            Items.None,
            Items.None,
            Items.None,
            Items.None,
          ],
          encumbrance: {
            current: 0,
            threshold:
              state.characteristics[0].level +
              5 +
              (state.species?.species === "Cosian" ? 5 : 0),
          },
          wound: {
            current: 0,
            threshold: state.species
              ? state.species.woundThreshold + state.characteristics[0].level
              : 0,
          },
          strain: {
            current: 0,
            threshold: state.species
              ? state.species.strainThreshold + state.characteristics[4].level
              : 0,
          },
          defense: {
            melee: 0,
            ranged: 0,
            soak:
              state.species?.species === "Droid"
                ? state.characteristics[0].level + 1
                : state.characteristics[0].level,
          },
          obligation: state.obligation
            ? state.selectedObligations.map((obligation) => {
                return { type: obligation.value, value: state.obligationCost };
              })
            : undefined,
          duty: state.duty
            ? state.selectedDuties.map((duty) => {
                return { type: duty.value, value: state.dutyCost };
              })
            : undefined,
          morality: state.morality
            ? {
                strength: state.selectedStrength
                  ? state.selectedStrength.value
                  : "",
                weakness: state.selectedWeakness
                  ? state.selectedWeakness.value
                  : "",
                value: state.moralityCost,
              }
            : undefined,
          criticalInjuries: [],
          statusEffects: [],
          talents: (state.specialization?.talents?.talents ?? [])
            .filter((talent) => talent.purchased)
            .map((talent) => talent.talent)
            .concat(state.species?.bonusTalents ?? []),
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
        <Header state={state} currentIndex={currentIndex} PAGES={PAGES} />
        <View className="justify-center h-[93%]">
          <View className="px-2 flex-1">
            <PageContent
              currentIndex={currentIndex}
              state={state}
              setState={handleStateChange}
              handleSnapPress={handlePortraitSnapPress}
            />
          </View>
          <View className="flex flex-row justify-between mt-2 px-4 pt-4 pb-[8vh] -mb-[2vh] bg-heading2 rounded-t-lg">
            <Button
              title="Back"
              onPress={onBackPressed}
              disabled={currentIndex === 0}
              cName="mr-2 bg-transparent border border-white"
              textClassName={currentIndex === 0 ? "text-gray-400" : ""}
              disabledClassName="mr-2 bg-transparent border border-gray-400"
            />
            {currentIndex < PAGES ? (
              <Button
                title="Next"
                onPress={onNextPressed}
                disabled={
                  (currentIndex === 1 && state.species === null) ||
                  (currentIndex === 2 &&
                    ((!state.obligation && !state.duty && !state.morality) ||
                      (state.obligation &&
                        state.selectedObligations.length <= 0) ||
                      (state.duty && state.selectedDuties.length <= 0) ||
                      (state.morality && state.selectedStrength === null) ||
                      (state.morality && state.selectedWeakness === null))) ||
                  (currentIndex === 3 && state.career === null) ||
                  (currentIndex === 4 && state.specialization === null) ||
                  currentIndex === PAGES
                }
                cName="ml-2 bg-transparent border border-white"
                textClassName={
                  (currentIndex === 1 && state.species === null) ||
                  (currentIndex === 2 &&
                    ((!state.obligation && !state.duty && !state.morality) ||
                      (state.obligation &&
                        state.selectedObligations.length <= 0) ||
                      (state.duty && state.selectedDuties.length <= 0) ||
                      (state.morality && state.selectedStrength === null) ||
                      (state.morality && state.selectedWeakness === null))) ||
                  (currentIndex === 3 && state.career === null) ||
                  (currentIndex === 4 && state.specialization === null) ||
                  currentIndex === PAGES
                    ? "text-gray-400"
                    : ""
                }
                disabledClassName="ml-2 bg-transparent border border-gray-400"
              />
            ) : (
              <Button
                title="Save"
                onPress={onSavePressed}
                cName="ml-2 bg-transparent border border-white"
                textClassName={currentIndex === 0 ? "text-gray-400" : ""}
                disabledClassName="ml-2 bg-transparent border border-gray-400"
              />
            )}
          </View>
          <PortraitSelect
            handleSnapPress={handlePortraitSnapPress}
            handleClosePress={handlePortraitClosePress}
            handleSelect={(portrait) => handleStateChange("portrait", portrait)}
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
