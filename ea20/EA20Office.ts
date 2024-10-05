import { EA20Federation } from "./EA20Federation.js";
import { EA20PartyGroup } from "./EA20PartyGroup.js";

export type EA20Office = {
  cd: string;
  nmn: string;
  nmm: string;
  nmf: string;
  nv: string;
  fed: EA20Federation[];
  agr: EA20PartyGroup[];
};
