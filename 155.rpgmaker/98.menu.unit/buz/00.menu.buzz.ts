import * as ActMnu from "../menu.action";

import * as ActRmk from "../../00.rpgmaker.unit/rpgmaker.action";
//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";


import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action"; 111

import * as ActGrd from "../../act/grid.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

var bit, lst, dex, idx, dat, src;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  bit = await ste.bus(ActTrm.CLEAR_TERMINAL, {})

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 1, ySpan: 12 })
  bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 10, ySpan: 12 })
  bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } })

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "RPGMAKER PIVOT V0" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  updateMenu(cpy, bal, ste);

  return cpy;
};

var updateBlender = async (ste) => {

  var bitUp = await ste.hunt(ActRmk.UPDATE_RPGMAKER, {})
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'updating blender....' })
  bit = await ste.hunt(ActMnu.PRINT_MENU, bitUp)

}

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  lst = [ ActRmk.SERVE_RPGMAKER, ActRmk.UPDATE_RPGMAKER,  ActRmk.OPEN_RPGMAKER, ActMnu.RPGACTOR_MENU]
  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 4, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActRmk.SERVE_RPGMAKER:
      bit = await ste.hunt(ActRmk.SERVE_RPGMAKER, {})
      bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'open rpg actor menu....' })
      break;

    case ActMnu.RPGACTOR_MENU:
      bit = await ste.hunt(ActMnu.RPGACTOR_MENU, {})
      bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'open rpg actor menu....' })
      break;


    case ActRmk.OPEN_RPGMAKER:
      bit = await ste.hunt(ActRmk.OPEN_RPGMAKER, {})
      bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'open rpg actor menu....' })
      break;

    case ActRmk.UPDATE_RPGMAKER:
      await updateBlender(ste)
      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }

  setTimeout(() => { updateMenu(cpy, bal, ste) }, 11)

  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await ste.bus(ActTrm.CLOSE_TERMINAL, {})

  return cpy;
};

export const createMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger
  return cpy;
};

export const printMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  dat = bal;
  if (dat == null) return bal.slv({ mnuBit: { idx: "print-menu", dat } });

  var itm = JSON.stringify(dat);

  itm = itm.replace('["', '\n')
  itm = itm.replace(']}', '\n')

  lst = itm.split(",");
  lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: a }));
  ste.bus(ActCns.UPDATE_CONSOLE, { idx: "cns00", src: "------------" });

  bal.slv({ mnuBit: { idx: "print-menu", dat: itm } });
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";


import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";

