export interface Item {
  name: string;
  price?: number;
}

export interface Weapon extends Item {
  damage: number;
}