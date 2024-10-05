import { EA11Municipality } from "./EA11Municipality.js";
import { EA11OfficeOrQuestion } from "./EA11OfficeOrQuestion.js";

export type EA11Level = {
  cd: string;
  mu?: EA11Municipality[];
  cp: EA11OfficeOrQuestion[];
};
