import { EA11ElectionDay } from "./EA11ElectionDay.js";
import { EA11FileType } from "./EA11FileType.js";

export type EA11ElectionSettings = {
  dg: string;
  hg: string;
  f: "s" | "o";
  c: string;
  arq: EA11FileType[];
  pl: EA11ElectionDay[];
};
