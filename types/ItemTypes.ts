import { ImageSourcePropType } from "react-native";

export interface Item {
  name: string;
  image?: ImageSourcePropType;
  weight?: number;
  price?: number;
}

export interface Weapon extends Item {
  damage: number;
}
