import { Character } from '@/constants/Types';
import { ReactNode, createContext, useState } from 'react';

// CharacterProvider.js

import { Dispatch, SetStateAction } from 'react';

export const CharacterContext = createContext<{
  character: Character | null;
  setCharacter: Dispatch<SetStateAction<Character | null>>;
}>({
  character: null,
  setCharacter: () => {},
});

export const CharacterProvider = ({ children }: {children: ReactNode}) => {
  const [character, setCharacter] = useState(null);
  const [id, setId] = useState(null);

  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};

