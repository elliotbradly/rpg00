import { Singleton } from "typescript-ioc";
import State from "../99.core/state";

@Singleton
export default class ActivityUnit {

 constructor(state: State) {
 }
}
