import Model from "./99.core/interface/model.interface";

import RpgmakerUnit from "./00.rpgmaker.unit/rpgmaker.unit";
import RpgstageUnit from "./01.rpgstage.unit/rpgstage.unit";
import RpgactorUnit from "./02.rpgactor.unit/rpgactor.unit";
import RpgmapUnit from "./03.rpgmap.unit/rpgmap.unit";
import RpgpartyUnit from "./04.rpgparty.unit/rpgparty.unit";
import HudUnit from "./10.hud.unit/hud.unit";
import ActivityUnit from "./80.activity.unit/activity.unit";
import ClientsocketUnit from "./96.clientsocket.unit/clientsocket.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Rpgmaker from "./00.rpgmaker.unit/fce/rpgmaker.interface";
import { RpgmakerModel } from "./00.rpgmaker.unit/rpgmaker.model";
import Rpgstage from "./01.rpgstage.unit/fce/rpgstage.interface";
import { RpgstageModel } from "./01.rpgstage.unit/rpgstage.model";
import Rpgactor from "./02.rpgactor.unit/fce/rpgactor.interface";
import { RpgactorModel } from "./02.rpgactor.unit/rpgactor.model";
import Rpgmap from "./03.rpgmap.unit/fce/rpgmap.interface";
import { RpgmapModel } from "./03.rpgmap.unit/rpgmap.model";
import Rpgparty from "./04.rpgparty.unit/fce/rpgparty.interface";
import { RpgpartyModel } from "./04.rpgparty.unit/rpgparty.model";
import Hud from "./10.hud.unit/fce/hud.interface";
import { HudModel } from "./10.hud.unit/hud.model";
import Activity from "./80.activity.unit/fce/activity.interface";
import { ActivityModel } from "./80.activity.unit/activity.model";
import Clientsocket from "./96.clientsocket.unit/fce/clientsocket.interface";
import { ClientsocketModel } from "./96.clientsocket.unit/clientsocket.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [RpgmakerUnit,RpgstageUnit,RpgactorUnit,RpgmapUnit,RpgpartyUnit,HudUnit,ActivityUnit,ClientsocketUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromRpgmaker from "./00.rpgmaker.unit/rpgmaker.reduce";
import * as reduceFromRpgstage from "./01.rpgstage.unit/rpgstage.reduce";
import * as reduceFromRpgactor from "./02.rpgactor.unit/rpgactor.reduce";
import * as reduceFromRpgmap from "./03.rpgmap.unit/rpgmap.reduce";
import * as reduceFromRpgparty from "./04.rpgparty.unit/rpgparty.reduce";
import * as reduceFromHud from "./10.hud.unit/hud.reduce";
import * as reduceFromActivity from "./80.activity.unit/activity.reduce";
import * as reduceFromClientsocket from "./96.clientsocket.unit/clientsocket.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 rpgmaker : reduceFromRpgmaker.reducer, 
rpgstage : reduceFromRpgstage.reducer, 
rpgactor : reduceFromRpgactor.reducer, 
rpgmap : reduceFromRpgmap.reducer, 
rpgparty : reduceFromRpgparty.reducer, 
hud : reduceFromHud.reducer, 
activity : reduceFromActivity.reducer, 
clientsocket : reduceFromClientsocket.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 rpgmaker : Rpgmaker = new RpgmakerModel();
rpgstage : Rpgstage = new RpgstageModel();
rpgactor : Rpgactor = new RpgactorModel();
rpgmap : Rpgmap = new RpgmapModel();
rpgparty : Rpgparty = new RpgpartyModel();
hud : Hud = new HudModel();
activity : Activity = new ActivityModel();
clientsocket : Clientsocket = new ClientsocketModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
