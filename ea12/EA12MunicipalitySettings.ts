import { EA12Level } from "./EA12Level.js";

export type EA12MunicipalitySettings = {
  dg: string;
  hg: string;
  f: "s" | "o";
  abr: EA12Level[];
};
