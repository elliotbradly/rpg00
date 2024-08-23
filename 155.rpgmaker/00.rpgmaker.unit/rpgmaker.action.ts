import { Action } from "../99.core/interface/action.interface";
import  RpgmakerBit  from "./fce/rpgmaker.bit";

// Rpgmaker actions

export const INIT_RPGMAKER = "[Rpgmaker action] Init Rpgmaker";
export class InitRpgmaker implements Action {
 readonly type = INIT_RPGMAKER;
 constructor(public bale: RpgmakerBit) {}
}

export const UPDATE_RPGMAKER = "[Rpgmaker action] Update Rpgmaker";
export class UpdateRpgmaker implements Action {
 readonly type = UPDATE_RPGMAKER;
 constructor(public bale: RpgmakerBit) {}
}

export const OPEN_RPGMAKER = "[Open action] Open Rpgmaker";
 export class OpenRpgmaker implements Action {
 readonly type = OPEN_RPGMAKER;
 constructor(public bale: RpgmakerBit) {}
 }
 
export const SERVE_RPGMAKER = "[Serve action] Serve Rpgmaker";
 export class ServeRpgmaker implements Action {
 readonly type = SERVE_RPGMAKER;
 constructor(public bale: RpgmakerBit) {}
 }
 
export type Actions = | InitRpgmaker | UpdateRpgmaker 
| OpenRpgmaker
| ServeRpgmaker