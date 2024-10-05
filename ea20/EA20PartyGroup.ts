import { EA20Party } from "./EA20Party.js";

export type EA20PartyGroup = {
  n: string;
  nm: string;
  tp: "c" | "i" | "f";
  tvtn?: string;
  tvtl?: string;
  tvan?: string;
  tval?: string;
  vag?: string;
  com?: string;
  par: EA20Party[];
};
