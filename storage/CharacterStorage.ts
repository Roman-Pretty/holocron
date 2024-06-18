import AsyncStorage from '@react-native-async-storage/async-storage';
import { Character } from '@/types/Types';

/**
 * Loads all Characters from local storage.
 *
 * @async
 * @returns {Promise<Character[]>}
 */
export const loadCharacters = async (): Promise<Character[]> => {
    try {
        const charactersJSON = await AsyncStorage.getItem('characters');
        if (charactersJSON !== null) {
            const characters = JSON.parse(charactersJSON);
            return characters;
        } else {
            console.log('Characters data not found.');
            return [];
        }
    } catch (error) {
        console.log('Error loading characters:', error);
        return [];
    }
};

/**
 * Loads a Character from local storage.
 *
 * @async
 * @param {number} characterKey
 * @returns {Promise<Character | null>}
 */
export const loadCharacter = async (characterKey : number) => {
    try {
        const characters = await loadCharacters();
        const character = characters.find((char: Character) => char.key === characterKey);
        if (character) {
            return character.data;
        } else {
            console.log('Character not found.');
            return null;
        }
    } catch (error) {
        console.log('Error loading character:', error);
        return null;
    }
};

/**
 * Saves a Character to local storage.
 *
 * @async
 * @param {Character} character
 * @returns {Promise<void>}
 */
export const saveCharacter = async (character: Character) => {
    try {
        const characters = await loadCharacters();
        const characterIndex = characters.findIndex((char: Character) => char.key === character.key);
        if (characterIndex !== -1) {
            characters[characterIndex] = character;
        } else {
            characters.push(character);
        }
        await AsyncStorage.setItem('characters', JSON.stringify(characters));
    } catch (error) {
        console.log('Error saving character:', error);
    }
};

/**
 * Deletes all Characters Stored in local storage.
 *
 * @async
 * @returns {Promise<void>}
 */
export const deleteAllCharacters = async () => {
    try {
      await AsyncStorage.removeItem('characters');
      console.log('All characters deleted successfully.');
    } catch (error) {
      console.log('Error deleting characters:', error);
    }
  };

/**
 * Deletes a Character from local storage.
 *  
 * @async
 * @param {number} characterKey
 * @returns {Promise<void>}
 */
export const deleteCharacter = async (characterKey: number) => {
    try {
        const characters = await loadCharacters();
        const newCharacters = characters.filter((char: Character) => char.key !== characterKey);
        await AsyncStorage.setItem('characters', JSON.stringify(newCharacters));
    } catch (error) {
        console.log('Error deleting character:', error);
    }
}  