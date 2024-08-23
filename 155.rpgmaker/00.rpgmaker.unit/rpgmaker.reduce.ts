import * as clone from "clone-deep";
import * as Act from "./rpgmaker.action";
import { RpgmakerModel } from "./rpgmaker.model";
import * as Buzz from "./rpgmaker.buzzer";
import State from "../99.core/state";

export function reducer(model: RpgmakerModel = new RpgmakerModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_RPGMAKER:
 return Buzz.updateRpgmaker(clone(model), act.bale, state);

 case Act.INIT_RPGMAKER:
 return Buzz.initRpgmaker(clone(model), act.bale, state);

case Act.OPEN_RPGMAKER:
 return Buzz.openRpgmaker(clone(model), act.bale, state);
 
case Act.SERVE_RPGMAKER:
 return Buzz.serveRpgmaker(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
