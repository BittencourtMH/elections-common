import { EA11Level } from "./EA11Level.js";

export type EA11Election = {
  cd: string;
  cdt2: string;
  nm: string;
  t: "1" | "2";
  tp: string;
  abr: EA11Level[];
};
