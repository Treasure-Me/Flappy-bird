gdjs.Flappy_45bird_45styleCode = {};
gdjs.Flappy_45bird_45styleCode.localVariables = [];
gdjs.Flappy_45bird_45styleCode.idToCallbackMap = new Map();
gdjs.Flappy_45bird_45styleCode.GDBirdObjects1= [];
gdjs.Flappy_45bird_45styleCode.GDBirdObjects2= [];
gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1= [];
gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects2= [];
gdjs.Flappy_45bird_45styleCode.GDScoreObjects1= [];
gdjs.Flappy_45bird_45styleCode.GDScoreObjects2= [];
gdjs.Flappy_45bird_45styleCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.Flappy_45bird_45styleCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.Flappy_45bird_45styleCode.GDSky_9595BackgroundObjects1= [];
gdjs.Flappy_45bird_45styleCode.GDSky_9595BackgroundObjects2= [];
gdjs.Flappy_45bird_45styleCode.GDGreen_9595substance_9595floorObjects1= [];
gdjs.Flappy_45bird_45styleCode.GDGreen_9595substance_9595floorObjects2= [];
gdjs.Flappy_45bird_45styleCode.GDHomeButtonObjects1= [];
gdjs.Flappy_45bird_45styleCode.GDHomeButtonObjects2= [];
gdjs.Flappy_45bird_45styleCode.GDGameOverObjects1= [];
gdjs.Flappy_45bird_45styleCode.GDGameOverObjects2= [];


gdjs.Flappy_45bird_45styleCode.mapOfGDgdjs_9546Flappy_959545bird_959545styleCode_9546GDBirdObjects1Objects = Hashtable.newFrom({"Bird": gdjs.Flappy_45bird_45styleCode.GDBirdObjects1});
gdjs.Flappy_45bird_45styleCode.mapOfGDgdjs_9546Flappy_959545bird_959545styleCode_9546GDTileset_95959595Piece_9595959513Objects1Objects = Hashtable.newFrom({"Tileset_Piece_13": gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1});
gdjs.Flappy_45bird_45styleCode.userFunc0x988a48 = function GDJSInlineCode(runtimeScene) {
"use strict";
const finalScore = runtimeScene.getGame().getVariables().get("PlayerScore").getAsNumber();
console.log("Crash Score:", finalScore);

window.parent.postMessage({ 
    type: "save_score", 
    score: finalScore 
}, "*");
};
gdjs.Flappy_45bird_45styleCode.eventsList0 = function(runtimeScene) {

{


gdjs.Flappy_45bird_45styleCode.userFunc0x988a48(runtimeScene);

}


};gdjs.Flappy_45bird_45styleCode.mapOfGDgdjs_9546Flappy_959545bird_959545styleCode_9546GDTileset_95959595Piece_9595959513Objects1Objects = Hashtable.newFrom({"Tileset_Piece_13": gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1});
gdjs.Flappy_45bird_45styleCode.mapOfGDgdjs_9546Flappy_959545bird_959545styleCode_9546GDTileset_95959595Piece_9595959513Objects1Objects = Hashtable.newFrom({"Tileset_Piece_13": gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1});
gdjs.Flappy_45bird_45styleCode.userFunc0x9a6e80 = function GDJSInlineCode(runtimeScene) {
"use strict";
const finalScore = runtimeScene.getVariables().get("PlayerScore").getAsNumber();
console.log(finalScore);
};
gdjs.Flappy_45bird_45styleCode.eventsList1 = function(runtimeScene) {

{


gdjs.Flappy_45bird_45styleCode.userFunc0x9a6e80(runtimeScene);

}


};gdjs.Flappy_45bird_45styleCode.mapOfGDgdjs_9546Flappy_959545bird_959545styleCode_9546GDBlackSquareDecoratedButtonObjects1Objects = Hashtable.newFrom({"BlackSquareDecoratedButton": gdjs.Flappy_45bird_45styleCode.GDBlackSquareDecoratedButtonObjects1});
gdjs.Flappy_45bird_45styleCode.mapOfGDgdjs_9546Flappy_959545bird_959545styleCode_9546GDHomeButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs.Flappy_45bird_45styleCode.GDHomeButtonObjects1});
gdjs.Flappy_45bird_45styleCode.userFunc0x8b6ad8 = function GDJSInlineCode(runtimeScene) {
"use strict";
window.top.location.href = "https://flappy-bird-egg-studios-30289.bubbleapps.io/version-test/api/1.1/mobile/preview?debug_mode=true&preview_view=Home";
};
gdjs.Flappy_45bird_45styleCode.eventsList2 = function(runtimeScene) {

{


gdjs.Flappy_45bird_45styleCode.userFunc0x8b6ad8(runtimeScene);

}


};gdjs.Flappy_45bird_45styleCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn_pipe");
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "syth.mp3", 1, true, 50, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOverLayer");
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Flappy_45bird_45styleCode.GDBirdObjects1);
{for(var i = 0, len = gdjs.Flappy_45bird_45styleCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Flappy_45bird_45styleCode.GDBirdObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.Flappy_45bird_45styleCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Flappy_45bird_45styleCode.GDBirdObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Flappy_45bird_45styleCode.GDBirdObjects1);
{for(var i = 0, len = gdjs.Flappy_45bird_45styleCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Flappy_45bird_45styleCode.GDBirdObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "8814e6711087d1fb88239a10c6bd8c4104f41c09d6c264bb55e68d20693b1d38_Jump_Land_03.wav", false, 100, gdjs.randomWithStep(0.8, 0.2, 0.2));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "spawn_pipe") >= runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "PipeGeneration", gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0) + gdjs.randomInRange(-(7) * 32, 7 * 32), 0);
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "spawn_pipe");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Flappy_45bird_45styleCode.GDBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tileset_Piece_13"), gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Flappy_45bird_45styleCode.mapOfGDgdjs_9546Flappy_959545bird_959545styleCode_9546GDBirdObjects1Objects, gdjs.Flappy_45bird_45styleCode.mapOfGDgdjs_9546Flappy_959545bird_959545styleCode_9546GDTileset_95959595Piece_9595959513Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10695764);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Flappy_45bird_45styleCode.GDBirdObjects1 */
{for(var i = 0, len = gdjs.Flappy_45bird_45styleCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.Flappy_45bird_45styleCode.GDBirdObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "GameOverLayer");
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}

{ //Subevents
gdjs.Flappy_45bird_45styleCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bird"), gdjs.Flappy_45bird_45styleCode.GDBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tileset_Piece_13"), gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1.length;i<l;++i) {
    if ( gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1[i].getAABBLeft() < (( gdjs.Flappy_45bird_45styleCode.GDBirdObjects1.length === 0 ) ? 0 :gdjs.Flappy_45bird_45styleCode.GDBirdObjects1[0].getCenterXInScene()) ) {
        isConditionTrue_0 = true;
        gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1[k] = gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1[i];
        ++k;
    }
}
gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Flappy_45bird_45styleCode.GDScoreObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.Flappy_45bird_45styleCode.mapOfGDgdjs_9546Flappy_959545bird_959545styleCode_9546GDTileset_95959595Piece_9595959513Objects1Objects) / 2);
}
{for(var i = 0, len = gdjs.Flappy_45bird_45styleCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Flappy_45bird_45styleCode.GDScoreObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(gdjs.evtTools.object.getPickedInstancesCount(gdjs.Flappy_45bird_45styleCode.mapOfGDgdjs_9546Flappy_959545bird_959545styleCode_9546GDTileset_95959595Piece_9595959513Objects1Objects) / 2));
}
}

{ //Subevents
gdjs.Flappy_45bird_45styleCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs.Flappy_45bird_45styleCode.GDBlackSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Flappy_45bird_45styleCode.mapOfGDgdjs_9546Flappy_959545bird_959545styleCode_9546GDBlackSquareDecoratedButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "GameOverLayer");
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Flappy-bird-style", false);
}
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.Flappy_45bird_45styleCode.GDHomeButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Flappy_45bird_45styleCode.mapOfGDgdjs_9546Flappy_959545bird_959545styleCode_9546GDHomeButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "GameOverLayer");
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Flappy_45bird_45styleCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.mod(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), 10) == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10157780);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() - 0.2);
}
}

}


};

gdjs.Flappy_45bird_45styleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Flappy_45bird_45styleCode.GDBirdObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDBirdObjects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDScoreObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDScoreObjects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDSky_9595BackgroundObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDSky_9595BackgroundObjects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDGreen_9595substance_9595floorObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDGreen_9595substance_9595floorObjects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDHomeButtonObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDHomeButtonObjects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDGameOverObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDGameOverObjects2.length = 0;

gdjs.Flappy_45bird_45styleCode.eventsList3(runtimeScene);
gdjs.Flappy_45bird_45styleCode.GDBirdObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDBirdObjects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDTileset_9595Piece_959513Objects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDScoreObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDScoreObjects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDSky_9595BackgroundObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDSky_9595BackgroundObjects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDGreen_9595substance_9595floorObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDGreen_9595substance_9595floorObjects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDHomeButtonObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDHomeButtonObjects2.length = 0;
gdjs.Flappy_45bird_45styleCode.GDGameOverObjects1.length = 0;
gdjs.Flappy_45bird_45styleCode.GDGameOverObjects2.length = 0;


return;

}

gdjs['Flappy_45bird_45styleCode'] = gdjs.Flappy_45bird_45styleCode;
