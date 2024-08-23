
import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActRmk from "../../00.rpgmaker.unit/rpgmaker.action";

import * as ActCns from "../../act/console.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActGit from "../../act/github.action";
import * as ActDsk from "../../act/disk.action";
import * as ActPvt from "../../act/pivot.action";
import * as ActEng from "../../act/engine.action";

var bit, val, idx, dex, lst, dat, src;

export const initRpgmaker = async (cpy: RpgmakerModel, bal: RpgmakerBit, ste: State) => {

    //var MQTT = window.BLENDER.MQTT;
    //console.log("mqtt" + MQTT);

    //const local = "ws://swamp-fly-448d63614f75.herokuapp.com/";
    //const localBit = { idx: "local", src: "ws://swamp-fly-448d63614f75.herokuapp.com/" };

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActRmk], dat: bal.dat, src: bal.src });

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null) bal.slv({ intBit: { idx: "init-blender", val: 0, bit } });


    return cpy;
};

export const updateRpgmaker = (cpy: RpgmakerModel, bal: RpgmakerBit, ste: State) => {

    const { exec } = require("child_process");

    exec("tsc -b 155.rpgmaker", async (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
        }

        lst = [];

        bit = await ste.bus(ActPvt.BUNDLE_PIVOT, { src: "155.rpgmaker" });
        lst.push(bit)

        bit = await ste.bus(ActDsk.READ_DISK, { src: "./work/155.rpgmaker.js" });
        var blend = bit.dskBit.dat;

        bit = await ste.bus(ActDsk.WRITE_DISK, { src: "./public/jsx/155.rpgmaker.js", dat: blend });
        lst.push(bit)

        src = "../rpgmaker/app/js/plugins/155.rpgmaker.js"
        bit = await ste.bus(ActDsk.WRITE_DISK, { src, dat: blend });
        lst.push(bit)

        src = "../service/fictiq.com/js/plugins/155.rpgmaker.js"
        bit = await ste.bus(ActDsk.WRITE_DISK, { src, dat: blend });
        lst.push(bit)

        bit = await ste.bus(ActDsk.READ_DISK, { src: "./0.AlligatorEarth.js" });
        var alligator = bit.dskBit.dat;

        src = "../rpgmaker/app/js/plugins/AlligatorEarth.js"
        bit = await ste.bus(ActDsk.WRITE_DISK, { src, dat: alligator });
        lst.push(bit)

        src = "../service/fictiq.com/js/plugins/AlligatorEarth.js"
        bit = await ste.bus(ActDsk.WRITE_DISK, { src, dat: alligator });
        lst.push(bit)

        setTimeout(() => {
            if (bal.slv != null) bal.slv({ rmkBit: { idx: "update-rpgmaker", lst } });
        }, 3);
    });

    return cpy;


};

export const openRpgmaker = (cpy: RpgmakerModel, bal: RpgmakerBit, ste: State) => {

    const { exec } = require('child_process');

    process.chdir("../rpgmaker");

    exec('RPGMZ.exe', async (err, stdout, stderr) => {

        //bit = await ste.hunt(ActMrk.DEV_MARKET, { val: 1 })
        bal.slv({ rmkBit: { idx: "open-rpgmaker", dat: stdout } });

    });

    return cpy;
};

export const serveRpgmaker = (cpy: RpgmakerModel, bal: RpgmakerBit, ste: State) => {


    const express = require("express"),
        app = express(),
        path = require("path"),
        PORT = 8022;

    // register the location of the static assets
    app.use(express.static('../rpgmaker/app/'));

    app.get("/", (req, res) => {
        // send the HTML file in the API response
        res.sendFile(path.join(__dirname + "/index.html"));
    });

    // Start the API server!
    app.listen(PORT, async () => bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "PORT " + PORT }))


    return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });


import { RpgmakerModel } from "../rpgmaker.model";
import RpgmakerBit from "../fce/rpgmaker.bit";
import State from "../../99.core/state";