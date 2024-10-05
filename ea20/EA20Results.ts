import { EA20Office } from "./EA20Office.js";
import { EA20Question } from "./EA20Question.js";
import { EA20Stations } from "./EA20Stations.js";
import { EA20Voters } from "./EA20Voters.js";
import { EA20Votes } from "./EA20Votes.js";

export type EA20Results = {
  ele: string;
  t: "1" | "2";
  f: "s" | "o";
  sup: "s" | "n";
  tpabr: "br" | "uf" | "mu" | "zona";
  cdabr: string;
  dg: string;
  hg: string;
  dv: "s" | "n";
  dt: string;
  ht: string;
  tf: "s" | "n";
  and: "n" | "p" | "f";
  md?: "e" | "s" | "n";
  esae?: "s" | "n";
  mnae?: string[];
  carg?: EA20Office[];
  perg?: EA20Question[];
  s: EA20Stations;
  e: EA20Voters;
  v: EA20Votes;
};
