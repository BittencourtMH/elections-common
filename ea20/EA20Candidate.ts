import { EA20ReplacedCandidate } from "./EA20ReplacedCandidate.js";
import { EA20Substitute } from "./EA20Substitute.js";

export type EA20Candidate = {
  n: string;
  sqcand: string;
  nm: string;
  nmu: string;
  dt: string;
  dvt: string;
  seq: string;
  e: "s" | "n";
  st: string;
  vap: string;
  pvap: string;
  pvapn: string;
  vs?: EA20Substitute[];
  subs?: EA20ReplacedCandidate[];
};
