import { Action } from "../99.core/interface/action.interface";
import MenuBit from "./fce/menu.bit";

export const INIT_MENU = "[Menu action] Init Menu";
export class InitMenu implements Action {
  readonly type = INIT_MENU;
  constructor(public bale: MenuBit) { }
}

export const UPDATE_MENU = "[Menu action] Update Menu";
export class UpdateMenu implements Action {
  readonly type = UPDATE_MENU;
  constructor(public bale: MenuBit) { }
}


export const TEST_MENU = "[Menu action] Test Menu";
export class TestMenu implements Action {
  readonly type = TEST_MENU;
  constructor(public bale: MenuBit) { }
}

export const CLOSE_MENU = "[Menu action] Close Menu";
export class CloseMenu implements Action {
  readonly type = CLOSE_MENU;
  constructor(public bale: MenuBit) { }
}

export const SHADE_MENU = "[Shade action] Shade Menu";
 export class ShadeMenu implements Action {
 readonly type = SHADE_MENU;
 constructor(public bale: MenuBit) {}
 }
 
export const VISAGE_MENU = "[Visage action] Visage Menu";
 export class VisageMenu implements Action {
 readonly type = VISAGE_MENU;
 constructor(public bale: MenuBit) {}
 }

 export const RPGACTOR_MENU = "[Visage action] RPG Actor Menu";
 export class RPGactorMenu implements Action {
 readonly type = RPGACTOR_MENU;
 constructor(public bale: MenuBit) {}
 }

 export const PRINT_MENU = "[Visage action] Print Menu";
 export class PrintMenu implements Action {
 readonly type = PRINT_MENU;
 constructor(public bale: MenuBit) {}
 }
 

 
export type Actions = InitMenu | UpdateMenu | TestMenu | CloseMenu
| ShadeMenu
| VisageMenu
| RPGactorMenu
| PrintMenu
