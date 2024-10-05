import { EA20Candidate } from "./EA20Candidate.js";

export type EA20Party = {
  n: string;
  sg: string;
  nm: string;
  nfed: string;
  tvtn: string;
  tvtl?: string;
  tvan: string;
  tval?: string;
  cand?: EA20Candidate[];
};
