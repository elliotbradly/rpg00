//=============================================================================
// RPG Maker MZ - Alligator Earth
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Enhance Role-Playing Game.
 * @author Brad Henderson
 *
 * @help Alligator-Earth.js
 *
 * This plugin provides a command to call a common event when a picture is
 * clicked.
 *
 * Use it in the following procedure.
 *   1. Execute "Show Picture" to display your button image.
 *   2. Call the plugin command "Set Button Picture".
 *
 * @command set
 * @text Set Button Picture
 * @desc Makes the specified picture clickable.
 *
 * @arg pictureId
 * @type number
 * @min 1
 * @max 100
 * @default 1
 * @text Picture Number
 * @desc Control number of the picture.
 *
 * @arg commonEventId
 * @type common_event
 * @default 1
 * @text Common Event
 * @desc Common event to call when the picture is clicked.
 */

//i mean you keep pushing me 

(() => {
  $DEBUG = true;

  window.TIMECODE = 'now'

  const pluginName = "Alligator-Earth";

  PluginManager.registerCommand(pluginName, "set", (args) => { });




  Scene_Boot.prototype.startNormalGame = async function () {

    if (Utils.isNwjs()) {
      nw.Window.get().showDevTools();
    }

    DataManager.setupNewGame();

    //if (DataManager.isAnySavefileExists()) {
    //    SceneManager.goto(Scene_Title);
    //} else {
    SceneManager.goto(Scene_Map);
    //}

    Window_TitleCommand.initCommandPosition();

    $gameSystem.disableMenu()

    setTimeout(async () => {

      var initRpgmaker = window.RPGMAKER.ActRmk.INIT_RPGMAKER;
      var initShade = window.SHADE.ActShd.INIT_SHADE;
      var initStage = window.RPGMAKER.ActRps.INIT_RPGSTAGE;
      var debugStage = window.RPGMAKER.ActRps.DEBUG_RPGSTAGE;
      var sceneStage = window.RPGMAKER.ActRps.SCENE_RPGSTAGE;
      var moveParty = window.RPGMAKER.ActRpp.MOVE_RPGPARTY;

      var dat = {
        gameTemp: $gameTemp,
        gameSystem: $gameSystem,
        gameScreen: $gameScreen,
        gameTimer: $gameTimer,
        gameMessage: $gameMessage,
        gameSwitches: $gameSwitches,
        gameVariables: $gameVariables,
        gameSelfSwitches: $gameSelfSwitches,
        gameActors: $gameActors,
        gameParty: $gameParty,
        gameTroop: $gameTroop,
        gameMap: $gameMap,
        gamePlayer: $gamePlayer,

        partyPlugin: Party,

        sceneManager: SceneManager,
        shade: window.SHADE,
        graphics: Graphics,

        dataActors: $dataActors,
        dataMapInfos: $dataMapInfos,
        dataMap: $dataMap
      }

      var bit;

      let currentLocation = window.location.host
  
      bit = await window.SHADE.hunt(initShade, { val: 0 });
      bit = await window.RPGMAKER.hunt(initRpgmaker, { val: 0 });
      bit = await window.RPGMAKER.hunt(initStage, { dat });

      //window.BLENDER.hunt(debugStage, { src: 'Scene Boot' });

      //var Scene_Map_create = Scene_Map.prototype.create;
      //Scene_Map.prototype.create = async function () {

      //  Scene_Map_create.call(this);

      //  setTimeout(() => {
      //    window.BLENDER.hunt(sceneStage, { val: 5 });
      // }, 1111)

      //window.BLENDER.hunt(sceneStage, { val: 1, dat });
      //}

      //var Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
      // Scene_Map.prototype.onMapLoaded = function () {
      //   Scene_Map_onMapLoaded.call(this);
      //   window.BLENDER.hunt(sceneStage, { val: 2 });
      // };

      //var Scene_Map_onTransfer = Scene_Map.prototype.onMapLoaded;
      //Scene_Map.prototype.onTransfer = function () {
      //  Scene_Map_onTransfer.call(this)
      //  window.BLENDER.hunt(sceneStage, { val: 3 });
      //};

      var Scene_Map_start = Scene_Map.prototype.start;
      Scene_Map.prototype.start = function () {

        var newMapId = $gamePlayer.newMapId();
        var datMapId = $dataMap.id
        var oldMapId = $gameMap.mapId()

        var dat = { datMapId, newMapId, oldMapId }

        Scene_Map_start.call(this)

        setTimeout(() => {
          window.RPGMAKER.hunt(sceneStage, { val: 4, dat });
        }, 111)

      };

      var Game_Player_executeMove = Game_Player.prototype.executeMove;
      Game_Player.prototype.executeMove = function (direction) {

        window.RPGMAKER.hunt( moveParty, { val: direction });


        Game_Player_executeMove.call(this, direction);

      }


    }, 1011);

  };



  //};

})();
