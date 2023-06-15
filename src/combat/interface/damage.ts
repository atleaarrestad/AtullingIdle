export const DamageType = {
  Melee: "Melee",
  Magic: "Magic",
} as const;
export type DamageType = (typeof DamageType)[keyof typeof DamageType];
