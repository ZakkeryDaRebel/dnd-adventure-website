import { diceConstructor } from "../../../dice";
import {
  attackDamageConstructor,
  Coin,
  costConstructor,
  Damage,
  weaponConstructor,
  WeaponMastery,
  WeaponProperties,
  type Weapon,
} from "../../../dnd-rules";

//
// Helper variables
//

const gp: keyof typeof Coin = Coin.GP;

const pierce: keyof typeof Damage = Damage.Piercing;

const range: keyof typeof WeaponProperties = WeaponProperties.Range;
const load: keyof typeof WeaponProperties = WeaponProperties.Loading;
const amm: keyof typeof WeaponProperties = WeaponProperties.Ammunition;
const ammType: string = " (Bullet)";

//
// Const weapon objects
//

export const MUSKET: Weapon = weaponConstructor(
  "Musket",
  costConstructor(500, gp),
  10,
  [attackDamageConstructor(diceConstructor("1d12"), pierce)],
  {
    [amm]: ammType,
    [range]: " (Range 40/120)",
    [load]: "",
    [WeaponProperties.TwoHanded]: "",
  },
  0,
  0,
  WeaponMastery.Slow,
);

export const PISTOL: Weapon = weaponConstructor(
  "Pistol",
  costConstructor(250, gp),
  3,
  [attackDamageConstructor(diceConstructor("1d10"), pierce)],
  {
    [amm]: ammType,
    [range]: " (Range 30/90)",
    [load]: "",
  },
  0,
  0,
  WeaponMastery.Vex,
);

export const ALL_GUNS: Weapon[] = [MUSKET, PISTOL];
