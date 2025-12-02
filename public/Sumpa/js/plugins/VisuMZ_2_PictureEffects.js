//=============================================================================
// VisuStella MZ - Picture Effects
// VisuMZ_2_PictureEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_PictureEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.PictureEffects = VisuMZ.PictureEffects || {};
VisuMZ.PictureEffects.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.01] [PictureEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Picture_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Picture Effects is a comprehensive toolkit for enhancing RPG Maker MZ's
 * picture by allowing various effects and transitions within your game. With
 * over 70 different types of effects, users can adjust and animate pictures in
 * various ways, ranging from banner-style transitions, hue shifts, many tonal
 * changes, blur effects, transformations, and more.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Over 70 different Plugin Commands that will adjust and move pictures to
 *   perform various Picture Effects.
 * * A plethora of picture transitions are available that are useful for banner
 *   like images to enter/exit from view.
 * * Quick Plugin Commands that allow sorting a bunch of pictures on the screen
 *   into single file lines, by rows, or by columns.
 * * Some effects have the ability to transform images into other graphics.
 * * A batch of tone shifting effects that may be tedious to do otherwise.
 * * Hue shifts can be applied to pictures to give more color variety.
 * * Blur Filters can now be applied to pictures to add blurry effects.
 * * Hovering and Sidestep effects allow pictures to move continuously up/down
 *   and/or left/right without constant event commands.
 * * Breathing effects can make pictures look like they're breathing in and out
 *   in an alive fashion.
 * * Swaying effects allow the pictures to rock its angles back and forth.
 * * A depth of field effect where the player's mouse position can shift the
 *   perspective of a picture by having it go a certain direction.
 * * Z Layer is now added to pictures. Game devs can now easily move pictures
 *   in front or behind other pictures by simply changing their Z values.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_0_CoreEngine
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 2 ------
 *
 * This plugin is a Tier 2 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Instructions - Quick Start
 * ============================================================================
 *
 * Here are some quick instructions on getting started.
 *
 * ---
 * 
 * Step 1: "Show Picture" Event Command
 * 
 * 1. Create a new event and use the "Show Picture" event command.
 * 2. Pick the image you want and the position you want the image to be
 *    displayed at. We recommend using "Center" for the position origin.
 * 3. This will be where the image either starts or ends. The relative position
 *    will vary depending on the Picture Effect and its parameters used.
 * 4. Remember the Picture's ID number. This will be used later.
 * 
 * ---
 * 
 * Step 2: "Picture Effect" Plugin Command
 * 
 * 1. Immediately after the "Show Picture" event command, under event commands,
 *    select "Plugin Command" and select the "VisuMZ_2_PictureEffects" plugin
 *    from the list.
 * 2. Select the desired "Picture Effect" you wish to apply.
 * 3. Under the "Picture ID(s)" parameter, insert the ID of the picture from
 *    Step 1.
 * 4. Adjust the other parameters as needed.
 * 
 * ---
 * 
 * Step 3: Play Test
 * 
 * 1. Save the event and save the game project.
 * 2. Click Play Test and launch the event to make sure the effect is working
 *    properly. Some effects are jointed (namely the ones with "In/Out" in
 *    their Plugin Command names). You may need to put them back to back.
 * 
 * ---
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Event Commands
 * 
 * Keep in mind that when Picture Effects are used, using event commands that
 * move, show, or erase the picture will very likely have an impact on how the
 * Picture Effects are carried out. It is best for you to wait until they're
 * done to make sure the Picture Effects are working as intended.
 * 
 * We are not responsible for how Picture Effects turn out if you interrupt
 * them with event commands, script calls, or other Plugin Commands.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 *
 * === Effects - A - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Angry
 * - Picture(s) gets angry and turns red while shaking.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Arrange By Column
 * - Picture(s) gets arranged by columns across the screen.
 * - Works best with multiple pictures.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Max Column Size:
 *   - What is the max column size before creating a new one?
 *   - You may use JavaScript.
 * 
 *   Anchor:
 *   Anchor X:
 *   - X anchor for pictures to adjust to.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *   Anchor Y:
 *   - Y anchor for pictures to adjust to.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Arrange By Row
 * - Picture(s) gets arranged by rows across the screen.
 * - Works best with multiple pictures.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Max Row Size:
 *   - What is the max row size before creating a new one?
 *   - You may use JavaScript.
 * 
 *   Anchor:
 *   Anchor X:
 *   - X anchor for pictures to adjust to.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *   Anchor Y:
 *   - Y anchor for pictures to adjust to.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Arrange Horizontally
 * - Picture(s) gets spread horizontally on the screen.
 * - Works best with multiple pictures.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target Y:
 *   - What Y coordinate do you want pictures arranged at?
 *   - You may use JavaScript.
 * 
 *   Anchor:
 *   Anchor X:
 *   - X anchor for pictures to adjust to.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *   Anchor Y:
 *   - Y anchor for pictures to adjust to.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Arrange Vertically
 * - Picture(s) gets spread vertically on the screen.
 * - Works best with multiple pictures.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target X:
 *   - What X coordinate do you want pictures arranged at?
 *   - You may use JavaScript.
 * 
 *   Anchor:
 *   Anchor X:
 *   - X anchor for pictures to adjust to.
 *   - 0.0 - left; 0.5 - center; 1.0 - right
 * 
 *   Anchor Y:
 *   - Y anchor for pictures to adjust to.
 *   - 0.0 - top; 0.5 - middle; 1.0 - bottom
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - B - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Banner In/Out
 * - Picture(s) slides in from the side to the center, and then slides out to
 *   the side.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   From Direction:
 *   - Select which direction the effect starts from.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Berserk
 * - Picture(s) breathes heavily and turns into a reddish tone.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Blur
 * - Picture(s) gets blurry (or not).
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Blur Strength:
 *   - Change blur strength for the picture(s).
 *   - For best results, use numbers between 0 and 10.
 * 
 *   Blur Duration:
 *   - The amount of time it takes for the change to occur.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Breathing
 * - Picture(s) breathes in and out continuously.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Scale Range X:
 *   Scale Range Y:
 *   - What is the horizontal/vertical breathing scale range?
 * 
 *   Speed Rate X:
 *   Speed Rate Y:
 *   - How fast or slow should the effect be?
 *   - Smaller numbers are slower. Larger numbers are faster.
 * 
 *   Random Seed:
 *   - What is the random seed used for this effect?
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. 0 for instant change.
 * 
 * ---
 * 
 * === Effects - C - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Capsule Burst
 * - Picture(s) wobbles back and forth and transforms into a new image.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Scale Change:
 *   - How does the scale change over time?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Spazz Distance:
 *   - Potential spazz distance for this effect.
 * 
 *   Wobble Angle:
 *   - How many degrees does this wobble?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Card Flip
 * - Picture(s) flips like a card and shows its back.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Back Image:
 *   - Filename used for the card back image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Mirror Back?:
 *   - Mirror the back image?
 *   - If no back image is used, effect is always mirrored.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Charm
 * - Picture(s) subject becomes charmed and enamored.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Scale Change:
 *   - How does the scale change over time?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Chilly
 * - Picture(s) spazzes and wobbles and turns light blue-ish.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Spazz Distance:
 *   - Potential distance for this effect.
 * 
 *   Wobble Angle:
 *   - Potential angle for this effect.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Confused
 * - Picture(s) acts as if it's confused and moves in random directions.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Degrees:
 *   - How many degrees does this sway back and forth?
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - D - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Damage
 * - Picture(s) gets damaged and turns red while violently shaking.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Depth of Field
 * - Picture(s) is given an image depth of field and will change based off the
 *   mouse cursor position continuously.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 *   - Use negative numbers to go opposite directions.
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 *   - Use negative numbers to go opposite directions.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 *   - 0 for instant change.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Dizzy
 * - Picture(s) acts as if it's dizzy and moves in a circle.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Degrees:
 *   - How many degrees does this sway back and forth?
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Drop In/Out
 * - Picture(s) drops downward in, and sinks further downward out.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Distance:
 *   - What is this effect's drop distance?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - E - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Electrocuted
 * - Picture(s) gets electrocuted and flashes two different colors while
 *   spazzing.
 * - WARNING! Flashing lights!
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Color Tone 1:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Color Tone 2:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Spazz Distance:
 *   - Potential distance for this effect.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Expand In/Out
 * - Picture(s) expands as it enters and further as it exits.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - F - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Fade Change
 * - Picture(s) fades in and out while transforming in the middle.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Fade In/Out
 * - Picture(s) fade in from nothing and fade out to nothing.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Fade Layer Switch
 * - Picture(s) fade in and out while switching layers in between.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target Z:
 *   - What Z Layer do you wish to assign this picture(s)?
 *   - You may use JavaScript.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Fear
 * - Picture(s) goes pale and slowly regains color.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Flash Change
 * - Picture(s) flashes a few times before changing into a different graphic.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Flash Times:
 *   - How many times to flash the tone without changing?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Flying Card
 * - Picture(s) flies out from current position to front of the screen and ends
 *   up in the center.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   To Direction:
 *   - Select which side of the screen the effect flies towards.
 * 
 *   Angle:
 *   - What is the angle at which the picture(s) stops at the front?
 * 
 *   Front Scale:
 *   - What is the scale of the picture(s) at the front?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Spin Times:
 *   - How many times does the picture(s) spin?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Focus In/Out
 * - Picture(s) focuses into view and clarity and out of.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - G - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Ghost In/Out
 * - Picture(s) changes into or out of an etheral form.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Blur Strength:
 *   - Change blur strength for the picture(s).
 *   - For best results, use numbers between 0 and 10.
 * 
 *   Flash Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Ghost Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Glow
 * - Picture(s) glows for a duration.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Blur Strength:
 *   - Change blur strength for the picture(s).
 *   - For best results, use numbers between 0 and 10.
 * 
 *   Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - H - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Heal
 * - Picture(s) glows and blurs a bit for a healing effect.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Blur Strength:
 *   - Change blur strength for the picture(s).
 *   - For best results, use numbers between 0 and 10.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Hoppity
 * - Picture(s) jumps up in place and back down.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Height:
 *   - How high do you want the picture(s) to hop.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Hover
 * - Picture(s) gains hover effect, floating up and down visually continuously.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 * 
 *   Speed Rate:
 *   - How fast or slow should the effect be?
 *   - Smaller numbers are slower. Larger numbers are faster.
 * 
 *   Random Seed:
 *   - What is the random seed used for this effect?
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 *   - 0 for instant change.
 * 
 * ---
 * 
 * EFFECT: Hue Shift By
 * - Picture(s) shifts by a relative hue value.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Hue Shift:
 *   - Insert a hue value here. (0 - 360)
 *   - You may use JavaScript.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Hue Shift To
 * - Picture(s) shifts to a specific hue value.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target Hue:
 *   - Insert a hue value here. (0 - 360)
 *   - You may use JavaScript.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - I - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Illusion
 * - Picture(s) appears on random parts of the screen before landing in place.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Duration:
 *   - How long each extension's effect?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - J - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Jiggle
 * - Picture(s) jiggles from top to bottom, side to side.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Jump By X/Y
 * - Picture(s) jumps by relative X/Y values.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Height:
 *   - How high do you want the picture(s) to hop.0
 * 
 *   Distance X:
 *   - How far should picture(s) jump horizontally?
 *   - You may use JavaScript. Negative: left. Positive: right.
 * 
 *   Distance Y:
 *   - How far should picture(s) jump vertically?
 *   - You may use JavaScript. Negative: up. Positive: down.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Jump To X/Y
 * - Picture(s) jumps to X/Y coordinate.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Height:
 *   - How high do you want the picture(s) to hop.0
 * 
 *   Target X:
 *   - What is the target X destination?
 *   - You may use JavaScript.
 * 
 *   Target Y:
 *   - What is the target Y destination?
 *   - You may use JavaScript.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - L - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Levitate In/Out
 * - Picture(s) floats upward in, and floats upward out.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Distance:
 *   - What is this effect's levitation distance?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - M - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Mana Restore
 * - Picture(s) glows, hue shifts, and blurs a bit for a restoration effect.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Blur Strength:
 *   - Change blur strength for the picture(s).
 *   - For best results, use numbers between 0 and 10.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Merge & Change
 * - Picture(s) merge together to transform into a new graphic.
 * - Works best with multiple pictures.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 *   - First image is transformed. Others have 0 opacity.
 * 
 *   Blur Strength:
 *   - Change blur strength for the picture(s).
 *   - For best results, use numbers between 0 and 10.
 * 
 *   Target X:
 *   - What is the target X destination?
 *   - You may use JavaScript.
 * 
 *   Target Y:
 *   - What is the target Y destination?
 *   - You may use JavaScript.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - O - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Open & Close
 * - Picture(s) opens and closes like an in-game window.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - P - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Petrify
 * - Picture(s) struggles as it becomes petrified..
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Petrify Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Scale Maximum:
 *   - How does the scale change over time?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Scale Minimum:
 *   - How does the scale change over time?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Phase In/Out
 * - Picture(s) phases into view and out of view.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Piece In/Out
 * - Picture(s) flies in and out from a random screen border area.
 * - Works best with multiple pictures.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Border Scale:
 *   - What is the scale of the picture(s) at the border?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Poison
 * - Picture(s) subject receives poison and becomes sickly.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Distance:
 *   - How far should the max horizontal distance be?
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Power Up Change
 * - Picture(s) switches between two images before changing completely.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 * 
 *   Effect Times:
 *   - How many times to switch images?
 * 
 *   Duration:
 *   - How long is each switch's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Psychedelic
 * - Picture(s) shifts hue all the way around.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Pulse
 * - Picture(s) pulses towards its new scale.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target Scale:
 *   - What is the target scale of the picture(s)?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - Q - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Quick Press
 * - Picture(s) is quickly pressed and rebounds back into place.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Distance X:
 *   - What is this effect's X distance?
 * 
 *   Distance 16:
 *   - What is this effect's Y distance?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - R - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Random In/Out
 * - Picture(s) fades in and out in random positions.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Distance:
 *   - What is this effect's max randomized distance?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Roll In/Out
 * - Picture(s) rolls in from the side and out to the other.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Distance:
 *   - What is this effect's roll distance?
 * 
 *   From Direction:
 *   - Select which direction the effect starts from.
 * 
 *   Spin Times:
 *   - How many times does the picture(s) spin while rolling?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Rotate
 * - Picture(s) rotates clockwise or counter clockwise.
 * - Apply opposite if the picture(s) is mirrored.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   From Direction:
 *   - Select which direction the effect rotates.
 *   - Apply opposite if the picture(s) is mirrored.
 * 
 *   Spin Times:
 *   - How many times does the picture(s) spin while rolling?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - S - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Shakey
 * - Picture(s) shakes back and forth from side to side.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Distance:
 *   - What is this effect's shake distance?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Shrink In/Out
 * - Picture(s) shrinks in and shrinks further inward.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Sidestep
 * - Picture(s) gains sidestep effect, moving left and right visually
 *   continuously.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 * 
 *   Speed Rate:
 *   - How fast or slow should the effect be?
 *   - Smaller numbers are slower. Larger numbers are faster.
 * 
 *   Random Seed:
 *   - What is the random seed used for this effect?
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 *   - 0 for instant change.
 * 
 * ---
 * 
 * EFFECT: Spazz
 * - Picture(s) spazzes up, down, left, right at random.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Distance:
 *   - What is this effect's spazz distance?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Spin Change
 * - Picture(s) spins and changes into a different graphic.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 * 
 *   Scale Change:
 *   - How does the scale change over time?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Spin Times:
 *   - How many times does the picture(s) spin before transforming?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 20
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Spin In/Out
 * - Picture(s) spins into view and out of view.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Spin Times:
 *   - How many times does the picture(s) spin while rolling?
 * 
 *   Vanish Scale:
 *   - What is the scale of the picture(s) when null?
 *   - 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Squish In/Out
 * - Picture(s) squishes as it enters and further as it exits.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Stretch In/Out
 * - Picture(s) stretches as it enters and further as it exits.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Submerge In/Out
 * - Picture(s) enters and exits the bottom of the screen.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Swaying
 * - Picture(s) angles back and forth from side to side continuously.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Angle Range:
 *   - How many degrees should the picture sway?
 * 
 *   Speed Rate:
 *   - How fast or slow should the effect be?
 *   - Smaller numbers are slower. Larger numbers are faster.
 * 
 *   Random Seed:
 *   - What is the random seed used for this effect?
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 *   - 0 for instant change.
 * 
 * ---
 * 
 * === Effects - T - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Teleport In/Out
 * - Picture(s) teleports into view and out of view.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Television In/Out
 * - Picture(s) snaps in and out like a television screen.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Tint Shift By
 * - Picture(s) changes tone and its own Z Layer relatively.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Adjust Z:
 *   - Adjust the Z value of target picture(s) by this.
 *   - You may use JavaScript. + Move Front. - Move Back.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Tint Shift To
 * - Picture(s) changes tone and its Z Layer to a specific value.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target Z:
 *   - What Z Layer do you wish to assign this picture(s)?
 *   - You may use JavaScript.
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * EFFECT: Transform
 * - Picture(s) transforms into another image with no other effects.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Transform Image:
 *   - Filename used for the transform image.
 * 
 * ---
 * 
 * === Effects - U - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: UFO In/Out
 * - Picture(s) enters and exits the top of the screen.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Color Tone:
 *   - What tone do you want for the effect?
 *   - Format: [Red, Green, Blue, Gray]
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second. Minimum: 10.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - V - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Vibrate
 * - Picture(s) vibrates a certain distance from start to end.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Distance X:
 *   - How far should the max horizontal distance be?
 * 
 *   Distance Y:
 *   - How far should the max vertical distance be?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - W - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Wobble
 * - Picture(s) wobbles its angle from side to side.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect Times:
 *   - How many times to extend this effect?
 * 
 *   Degrees:
 *   - How many degrees does this wobble?
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 * 
 * === Effects - Z - Plugin Commands ===
 * 
 * ---
 * 
 * EFFECT: Z Layer Change By
 * - Picture(s) changes its Z layer to a relative value.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Adjust Z:
 *   - Adjust the Z value of target picture(s) by this.
 *   - You may use JavaScript. + Move Front. - Move Back.
 * 
 * ---
 * 
 * EFFECT: Z Layer Set To
 * - Picture(s) changes its Z layer to a specific value.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Target Z:
 *   - What Z Layer do you wish to assign this picture(s)?
 *   - You may use JavaScript.
 * 
 * ---
 * 
 * EFFECT: Zoom In/Out
 * - Picture(s) zooms into view and out of.
 * 
 *   Picture ID(s):
 *   - Select which picture ID(s) to play this effect with.
 * 
 *   Effect In/Out?:
 *   - What effect type is this?
 * 
 *   Duration:
 *   - How long is this effect's duration?
 *   - 60 frames = 1 second.
 * 
 *   Wait for Completion?:
 *   - Wait until effect is complete before moving onto next event command?
 * 
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Arisu
 * * Olivia
 * * Irina
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.01: February 20, 2025
 * * Compatibility Update!
 * ** Updated for RPG Maker MZ Core Scripts 1.9.0!
 * *** Removed picture limit of 100 from Picture-related Plugin Commands.
 * 
 * Version 1.00 Official Release Date: February 21, 2024
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Angry
 * @text EFFECT: Angry
 * @desc Picture(s) gets angry and turns red while shaking.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [128, -64, -64, 0]
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 36
 *
 * @arg DistanceY:num
 * @text Distance Y
 * @type number
 * @desc How far should the max vertical distance be?
 * @default 24
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Arrange_Col
 * @text EFFECT: Arrange By Column
 * @desc Picture(s) gets arranged by columns across the screen.
 * Works best with multiple pictures.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Size:eval
 * @text Max Column Size
 * @desc What is the max column size before creating a new one?
 * You may use JavaScript.
 * @default 3
 * 
 * @arg Anchor
 * @text Anchor
 *
 * @arg AnchorX:eval
 * @text Anchor X
 * @parent Anchor
 * @desc X anchor for pictures to adjust to.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 *
 * @arg AnchorY:eval
 * @text Anchor Y
 * @parent Anchor
 * @desc Y anchor for pictures to adjust to.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Arrange_Row
 * @text EFFECT: Arrange By Row
 * @desc Picture(s) gets arranged by rows across the screen.
 * Works best with multiple pictures.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Size:eval
 * @text Max Row Size
 * @desc What is the max row size before creating a new one?
 * You may use JavaScript.
 * @default 5
 * 
 * @arg Anchor
 * @text Anchor
 *
 * @arg AnchorX:eval
 * @text Anchor X
 * @parent Anchor
 * @desc X anchor for pictures to adjust to.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 *
 * @arg AnchorY:eval
 * @text Anchor Y
 * @parent Anchor
 * @desc Y anchor for pictures to adjust to.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Arrange_Horz
 * @text EFFECT: Arrange Horizontally
 * @desc Picture(s) gets spread horizontally on the screen.
 * Works best with multiple pictures.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg TargetY:eval
 * @text Target Y
 * @desc What Y coordinate do you want pictures arranged at?
 * You may use JavaScript.
 * @default Graphics.height / 2
 * 
 * @arg Anchor
 * @text Anchor
 *
 * @arg AnchorX:eval
 * @text Anchor X
 * @parent Anchor
 * @desc X anchor for pictures to adjust to.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 *
 * @arg AnchorY:eval
 * @text Anchor Y
 * @parent Anchor
 * @desc Y anchor for pictures to adjust to.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Arrange_Vert
 * @text EFFECT: Arrange Vertically
 * @desc Picture(s) gets spread vertically on the screen.
 * Works best with multiple pictures.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg TargetX:eval
 * @text Target X
 * @desc What X coordinate do you want pictures arranged at?
 * You may use JavaScript.
 * @default Graphics.width / 2
 * 
 * @arg Anchor
 * @text Anchor
 *
 * @arg AnchorX:eval
 * @text Anchor X
 * @parent Anchor
 * @desc X anchor for pictures to adjust to.
 * 0.0 - left; 0.5 - center; 1.0 - right
 * @default 0.5
 *
 * @arg AnchorY:eval
 * @text Anchor Y
 * @parent Anchor
 * @desc Y anchor for pictures to adjust to.
 * 0.0 - top; 0.5 - middle; 1.0 - bottom
 * @default 0.5
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_B
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Banner_InOut
 * @text EFFECT: Banner In/Out
 * @desc Picture(s) slides in from the side to the center,
 * and then slides out to the side.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Direction:str
 * @text From Direction
 * @type select
 * @option From Left
 * @option From Right
 * @desc Select which direction the effect starts from.
 * @default From Left
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Berserk
 * @text EFFECT: Berserk
 * @desc Picture(s) breathes heavily and turns into a reddish tone.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [128, -64, -64, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Blur
 * @text EFFECT: Blur
 * @desc Picture(s) gets blurry (or not).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the picture(s).
 * For best results, use numbers between 0 and 10.
 * @default 5.0
 *
 * @arg Duration:num
 * @text Blur Duration
 * @type number
 * @desc The amount of time it takes for the change to occur.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Breathing
 * @text EFFECT: Breathing
 * @desc Picture(s) breathes in and out continuously.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg RangeX:num
 * @text Scale Range X
 * @desc What is the horizontal breathing scale range?
 * @default 1
 *
 * @arg RangeY:num
 * @text Scale Range Y
 * @desc What is the vertical breathing scale range?
 * @default 2
 *
 * @arg RateX:num
 * @text Speed Rate X
 * @desc How fast or slow should the effect be?
 * Smaller numbers are slower. Larger numbers are faster.
 * @default 0.02
 *
 * @arg RateY:num
 * @text Speed Rate Y
 * @desc How fast or slow should the effect be?
 * Smaller numbers are slower. Larger numbers are faster.
 * @default 0.02
 *
 * @arg Rng:eval
 * @text Random Seed
 * @desc What is the random seed used for this effect?
 * You may use JavaScript code.
 * @default Math.randomInt(5000)
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. 0 for instant change.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_C
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Capsule_Burst
 * @text EFFECT: Capsule Burst
 * @desc Picture(s) wobbles back and forth and transforms into a new image.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * @default 
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [240, 240, 240, 0]
 *
 * @arg Scale:num
 * @text Scale Change
 * @desc How does the scale change over time?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 0.8
 *
 * @arg Spazz:num
 * @text Spazz Distance
 * @type number
 * @desc Potential spazz distance for this effect.
 * @default 8
 *
 * @arg Wobble:num
 * @text Wobble Angle
 * @type number
 * @desc How many degrees does this wobble?
 * @default 30
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 20
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20.
 * @default 180
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Card_Flip
 * @text EFFECT: Card Flip
 * @desc Picture(s) flips like a card and shows its back.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg BackFilename:str
 * @text Back Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the card back image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @arg BackMirror:eval
 * @text Mirror Back?
 * @parent BackFilename:str
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the back image?
 * If no back image is used, effect is always mirrored.
 * @default false
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Charm
 * @text EFFECT: Charm
 * @desc Picture(s) subject becomes charmed and enamored.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Scale:num
 * @text Scale Change
 * @desc How does the scale change over time?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 1.2
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [153, 68, 128, 68]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 20
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Chilly
 * @text EFFECT: Chilly
 * @desc Picture(s) spazzes and wobbles and turns light blue-ish.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 10
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [-100, 128, 128, 0]
 *
 * @arg Spazz:num
 * @text Spazz Distance
 * @type number
 * @desc Potential distance for this effect.
 * @default 10
 *
 * @arg Wobble:num
 * @text Wobble Angle
 * @type number
 * @desc Potential angle for this effect.
 * @default 10
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Confused
 * @text EFFECT: Confused
 * @desc Picture(s) acts as if it's confused and moves in random directions.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 2
 *
 * @arg Degrees:num
 * @text Degrees
 * @type number
 * @min 1
 * @max 360
 * @desc How many degrees does this sway back and forth?
 * @default 10
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 36
 *
 * @arg DistanceY:num
 * @text Distance Y
 * @type number
 * @desc How far should the max vertical distance be?
 * @default 24
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_D
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Damage
 * @text EFFECT: Damage
 * @desc Picture(s) gets damaged and turns red while violently shaking.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [128, -64, -64, 0]
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 48
 *
 * @arg DistanceY:num
 * @text Distance Y
 * @type number
 * @desc How far should the max vertical distance be?
 * @default 12
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Depth
 * @text EFFECT: Depth of Field
 * @desc Picture(s) is given an image depth of field and will change
 * based off the mouse cursor position continuously.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg DistanceX:eval
 * @text Distance X
 * @desc How far should the max horizontal distance be?
 * Use negative numbers to go opposite directions.
 * @default +48
 *
 * @arg DistanceY:eval
 * @text Distance Y
 * @desc How far should the max vertical distance be?
 * Use negative numbers to go opposite directions.
 * @default +12
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. 0 for instant change.
 * @default 0
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dizzy
 * @text EFFECT: Dizzy
 * @desc Picture(s) acts as if it's dizzy and moves in a circle.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 2
 *
 * @arg Degrees:num
 * @text Degrees
 * @type number
 * @min 1
 * @max 360
 * @desc How many degrees does this sway back and forth?
 * @default 10
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 36
 *
 * @arg DistanceY:num
 * @text Distance Y
 * @type number
 * @desc How far should the max vertical distance be?
 * @default 24
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Drop_InOut
 * @text EFFECT: Drop In/Out
 * @desc Picture(s) drops downward in, and sinks further downward out.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @min 1
 * @desc What is this effect's drop distance?
 * @default 192
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 40
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_E
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Electrocuted
 * @text EFFECT: Electrocuted
 * @desc Picture(s) gets electrocuted and flashes two different colors
 * while spazzing. WARNING! Flashing lights!
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Tone1:eval
 * @text Color Tone 1
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [196, 128, 0, 255]
 *
 * @arg Tone2:eval
 * @text Color Tone 2
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 255]
 *
 * @arg Spazz:num
 * @text Spazz Distance
 * @type number
 * @desc Potential distance for this effect.
 * @default 10
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Expand_InOut
 * @text EFFECT: Expand In/Out
 * @desc Picture(s) expands as it enters and further as it exits.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_F
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fade_Change
 * @text EFFECT: Fade Change
 * @desc Picture(s) fades in and out while transforming in the middle.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * @default 
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fade_InOut
 * @text EFFECT: Fade In/Out
 * @desc Picture(s) fade in from nothing and fade out to nothing.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fade_Layer_Switch
 * @text EFFECT: Fade Layer Switch
 * @desc Picture(s) fade in and out while switching layers in between.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Z:eval
 * @text Target Z
 * @desc What Z Layer do you wish to assign this picture(s)?
 * You may use JavaScript.
 * @default 0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fear
 * @text EFFECT: Fear
 * @desc Picture(s) goes pale and slowly regains color.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 68, 192]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Flash_Change
 * @text EFFECT: Flash Change
 * @desc Picture(s) flashes a few times before changing into a different graphic.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * @default 
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [192, 192, 192, 0]
 *
 * @arg Times:num
 * @text Flash Times
 * @parent Tone:eval
 * @type number
 * @min 1
 * @max 10
 * @desc How many times to flash the tone without changing?
 * @default 3
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 20
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FlyingCard
 * @text EFFECT: Flying Card
 * @desc Picture(s) flies out from current position to front of the screen and ends up in the center.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Direction:str
 * @text To Direction
 * @type select
 * @option To Left
 * @option To Right
 * @desc Select which side of the screen the effect flies towards.
 * @default To Right
 *
 * @arg Angle:num
 * @text Angle
 * @type number
 * @max 360
 * @desc What is the angle at which the picture(s) stops at the front?
 * @default 30
 *
 * @arg Scale:eval
 * @text Front Scale
 * @desc What is the scale of the picture(s) at the front?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 2.0
 *
 * @arg Spins:num
 * @text Spin Times
 * @type number
 * @desc How many times does the picture(s) spin?
 * @default 5
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Focus_InOut
 * @text EFFECT: Focus In/Out
 * @desc Picture(s) focuses into view and clarity and out of.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_G
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ghost_InOut
 * @text EFFECT: Ghost In/Out
 * @desc Picture(s) changes into or out of an etheral form.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the picture(s).
 * For best results, use numbers between 0 and 10.
 * @default 5.0
 *
 * @arg FlashTone:eval
 * @text Flash Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [255, 255, 255, 0]
 *
 * @arg GhostTone:eval
 * @text Ghost Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [-68, -68, 0, 68]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 40
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Glow
 * @text EFFECT: Glow
 * @desc Picture(s) glows for a duration.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the picture(s).
 * For best results, use numbers between 0 and 10.
 * @default 5.0
 *
 * @arg Tone:eval
 * @text Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [136, 136, 136, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_H
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Heal
 * @text EFFECT: Heal
 * @desc Picture(s) glows and blurs a bit for a healing effect.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the picture(s).
 * For best results, use numbers between 0 and 10.
 * @default 5.0
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [68, 192, 160, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hoppity
 * @text EFFECT: Hoppity
 * @desc Picture(s) jumps up in place and back down.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Height:num
 * @text Height
 * @type number
 * @desc How high do you want the picture(s) to hop.
 * @default 40
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 40
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hover
 * @text EFFECT: Hover
 * @desc Picture(s) gains hover effect, floating up and down visually continuously.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg DistanceY:num
 * @text Distance Y
 * @type number
 * @desc How far should the max vertical distance be?
 * @default 100
 *
 * @arg Rate:num
 * @text Speed Rate
 * @desc How fast or slow should the effect be?
 * Smaller numbers are slower. Larger numbers are faster.
 * @default 0.05
 *
 * @arg Rng:eval
 * @text Random Seed
 * @desc What is the random seed used for this effect?
 * You may use JavaScript code.
 * @default Math.randomInt(5000)
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. 0 for instant change.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hue_Shift_By
 * @text EFFECT: Hue Shift By
 * @desc Picture(s) shifts by a relative hue value.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Hue:eval
 * @text Hue Shift
 * @desc Insert a hue value here. (0 - 360)
 * You may use JavaScript.
 * @default +0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hue_Shift_To
 * @text EFFECT: Hue Shift To
 * @desc Picture(s) shifts to a specific hue value.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Hue:eval
 * @text Target Hue
 * @desc Insert a hue value here. (0 - 360)
 * You may use JavaScript.
 * @default 0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_I
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Illusion
 * @text EFFECT: Illusion
 * @desc Picture(s) appears on random parts of the screen before landing in place.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 5
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long each extension's effect?
 * 60 frames = 1 second. Minimum: 10.
 * @default 30
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_J
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Jiggle
 * @text EFFECT: Jiggle
 * @desc Picture(s) jiggles from top to bottom, side to side.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 5
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command JumpBy
 * @text EFFECT: Jump By X/Y
 * @desc Picture(s) jumps by relative X/Y values.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Height:num
 * @text Height
 * @type number
 * @desc How high do you want the picture(s) to hop.
 * @default 100
 *
 * @arg DistanceX:eval
 * @text Distance X
 * @desc How far should picture(s) jump horizontally?
 * You may use JavaScript. Negative: left. Positive: right.
 * @default +200
 *
 * @arg DistanceY:eval
 * @text Distance Y
 * @desc How far should picture(s) jump vertically?
 * You may use JavaScript. Negative: up. Positive: down.
 * @default +60
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command JumpTo
 * @text EFFECT: Jump To X/Y
 * @desc Picture(s) jumps to X/Y coordinate.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Height:num
 * @text Height
 * @type number
 * @desc How high do you want the picture(s) to hop.
 * @default 100
 *
 * @arg TargetX:eval
 * @text Target X
 * @desc What is the target X destination?
 * You may use JavaScript.
 * @default Graphics.width / 2
 *
 * @arg TargetY:eval
 * @text Target Y
 * @desc What is the target Y destination?
 * You may use JavaScript.
 * @default Graphics.height / 2
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_L
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Levitate_InOut
 * @text EFFECT: Levitate In/Out
 * @desc Picture(s) floats upward in, and floats upward out.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @min 1
 * @desc What is this effect's levitation distance?
 * @default 96
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_M
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Mana_Restore
 * @text EFFECT: Mana Restore
 * @desc Picture(s) glows, hue shifts, and blurs a bit for a restoration effect.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the picture(s).
 * For best results, use numbers between 0 and 10.
 * @default 5.0
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [68, 96, 192, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Merge_Change
 * @text EFFECT: Merge & Change
 * @desc Picture(s) merge together to transform into a new graphic.
 * Works best with multiple pictures.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * First image is transformed. Others have 0 opacity.
 * @default 
 *
 * @arg Blur:num
 * @text Blur Strength
 * @desc Change blur strength for the picture(s).
 * For best results, use numbers between 0 and 10.
 * @default 5.0
 *
 * @arg TargetX:eval
 * @text Target X
 * @desc What is the target X destination?
 * You may use JavaScript.
 * @default Graphics.width / 2
 *
 * @arg TargetY:eval
 * @text Target Y
 * @desc What is the target Y destination?
 * You may use JavaScript.
 * @default Graphics.height / 2
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [240, 240, 240, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_O
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Open_InOut
 * @text EFFECT: Open & Close
 * @desc Picture(s) opens and closes like an in-game window.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option Open
 * @option Close
 * @desc What effect type is this?
 * @default Open
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 10
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_P
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Petrify
 * @text EFFECT: Petrify
 * @desc Picture(s) struggles as it becomes petrified..
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg FlashTone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [192, 192, 192, 0]
 *
 * @arg PetrifyTone:eval
 * @text Petrify Tone
 * @parent FlashTone:eval
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 255]
 *
 * @arg ScaleMax:num
 * @text Scale Maximum
 * @desc How does the scale change over time?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 1.1
 *
 * @arg ScaleMin:num
 * @text Scale Minimum
 * @parent ScaleMax:num
 * @desc How does the scale change over time?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 0.9
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 20
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Phase_InOut
 * @text EFFECT: Phase In/Out
 * @desc Picture(s) phases into view and out of view.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Piece_InOut
 * @text EFFECT: Piece In/Out
 * @desc Picture(s) flies in and out from a random screen border area.
 * Works best with multiple pictures.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Scale:eval
 * @text Border Scale
 * @desc What is the scale of the picture(s) at the border?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 2.0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Poison
 * @text EFFECT: Poison
 * @desc Picture(s) subject receives poison and becomes sickly.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 24
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 128, -68, 68]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 20
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PowerUp_Change
 * @text EFFECT: Power Up Change
 * @desc Picture(s) switches between two images before changing completely.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * @default 
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @max 10
 * @desc How many times to switch images?
 * @default 3
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is each switch's duration?
 * 60 frames = 1 second.
 * @default 4
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Psychedelic
 * @text EFFECT: Psychedelic
 * @desc Picture(s) shifts hue all the way around.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Pulse
 * @text EFFECT: Pulse
 * @desc Picture(s) pulses towards its new scale.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Scale:eval
 * @text Target Scale
 * @desc What is the target scale of the picture(s)?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 1.0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Q
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QuickPress
 * @text EFFECT: Quick Press
 * @desc Picture(s) is quickly pressed and rebounds back into place.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @min 0
 * @desc What is this effect's X distance?
 * @default 8
 *
 * @arg DistanceY:num
 * @text Distance 16
 * @type number
 * @min 0
 * @desc What is this effect's Y distance?
 * @default 16
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 4
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_R
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Random_InOut
 * @text EFFECT: Random In/Out
 * @desc Picture(s) fades in and out in random positions.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @min 1
 * @desc What is this effect's max randomized distance?
 * @default 200
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Roll_InOut
 * @text EFFECT: Roll In/Out
 * @desc Picture(s) rolls in from the side and out to the other.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @min 1
 * @desc What is this effect's roll distance?
 * @default 500
 *
 * @arg Direction:str
 * @text From Direction
 * @type select
 * @option From Left
 * @option From Right
 * @desc Select which direction the effect starts from.
 * @default From Left
 *
 * @arg Spins:num
 * @text Spin Times
 * @type number
 * @desc How many times does the picture(s) spin while rolling?
 * @default 1
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Rotate
 * @text EFFECT: Rotate
 * @desc Picture(s) rotates clockwise or counter clockwise.
 * Apply opposite if the picture(s) is mirrored.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Direction:str
 * @text From Direction
 * @type select
 * @option Clockwise
 * @option Counter Clockwise
 * @desc Select which direction the effect rotates.
 * Apply opposite if the picture(s) is mirrored.
 * @default Clockwise
 *
 * @arg Spins:num
 * @text Spin Times
 * @type number
 * @desc How many times does the picture(s) spin while rolling?
 * @default 1
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_S
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Shakey
 * @text EFFECT: Shakey
 * @desc Picture(s) shakes back and forth from side to side.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 10
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @min 1
 * @desc What is this effect's shake distance?
 * @default 8
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Shrink_InOut
 * @text EFFECT: Shrink In/Out
 * @desc Picture(s) shrinks in and shrinks further inward.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Spazz
 * @text EFFECT: Spazz
 * @desc Picture(s) spazzes up, down, left, right at random.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 10
 *
 * @arg Distance:num
 * @text Distance
 * @type number
 * @min 1
 * @desc What is this effect's spazz distance?
 * @default 10
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Sidestep
 * @text EFFECT: Sidestep
 * @desc Picture(s) gains sidestep effect, moving left and right visually continuously.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 100
 *
 * @arg Rate:num
 * @text Speed Rate
 * @desc How fast or slow should the effect be?
 * Smaller numbers are slower. Larger numbers are faster.
 * @default 0.05
 *
 * @arg Rng:eval
 * @text Random Seed
 * @desc What is the random seed used for this effect?
 * You may use JavaScript code.
 * @default Math.randomInt(5000)
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. 0 for instant change.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Spin_Change
 * @text EFFECT: Spin Change
 * @desc Picture(s) spins and changes into a different graphic.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * @default 
 *
 * @arg Scale:num
 * @text Scale Change
 * @desc How does the scale change over time?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 0.5
 *
 * @arg Spins:num
 * @text Spin Times
 * @type number
 * @min 1
 * @desc How many times does the picture(s) spin before transforming?
 * @default 3
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 20
 * @default 120
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Spin_InOut
 * @text EFFECT: Spin In/Out
 * @desc Picture(s) spins into view and out of view.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Spins:num
 * @text Spin Times
 * @type number
 * @desc How many times does the picture(s) spin while rolling?
 * @default 2
 *
 * @arg Scale:eval
 * @text Vanish Scale
 * @desc What is the scale of the picture(s) when null?
 * 0.0 = 0%; 0.5 = 50%; 1.0 = 100%; 2.0 = 200%
 * @default 0.5
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Squish_InOut
 * @text EFFECT: Squish In/Out
 * @desc Picture(s) squishes as it enters and further as it exits.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 30
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Stretch_InOut
 * @text EFFECT: Stretch In/Out
 * @desc Picture(s) stretches as it enters and further as it exits.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 30
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Submerge_InOut
 * @text EFFECT: Submerge In/Out
 * @desc Picture(s) enters and exits the bottom of the screen.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 128, 160, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 40
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Swaying
 * @text EFFECT: Swaying
 * @desc Picture(s) sways back and forth from angle to angle continuously.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Range:num
 * @text Angle Range
 * @type number
 * @desc How many degrees should the picture sway?
 * @default 15
 *
 * @arg Rate:num
 * @text Speed Rate
 * @desc How fast or slow should the effect be?
 * Smaller numbers are slower. Larger numbers are faster.
 * @default 0.05
 *
 * @arg Rng:eval
 * @text Random Seed
 * @desc What is the random seed used for this effect?
 * You may use JavaScript code.
 * @default Math.randomInt(5000)
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. 0 for instant change.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_T
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Teleport_InOut
 * @text EFFECT: Teleport In/Out
 * @desc Picture(s) teleports into view and out of view.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [240, 240, 240, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Television_InOut
 * @text EFFECT: Television In/Out
 * @desc Picture(s) snaps in and out like a television screen.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Tint_Shift_By
 * @text EFFECT: Tint Shift By
 * @desc Picture(s) changes tone and its own Z Layer relatively.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Z:eval
 * @text Adjust Z
 * @desc Adjust the Z value of target picture(s) by this.
 * You may use JavaScript. + Move Front. - Move Back.
 * @default +0
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Tint_Shift_To
 * @text EFFECT: Tint Shift To
 * @desc Picture(s) changes tone and its Z Layer to a specific value.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Z:eval
 * @text Target Z
 * @desc What Z Layer do you wish to assign this picture(s)?
 * You may use JavaScript.
 * @default 0
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 20
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Transform
 * @text EFFECT: Transform
 * @desc Picture(s) transforms into another image with no other effects.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Filename:str
 * @text Transform Image
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the transform image.
 * @default 
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_U
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command UFO_InOut
 * @text EFFECT: UFO In/Out
 * @desc Picture(s) enters and exits the top of the screen.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Tone:eval
 * @text Color Tone
 * @desc What tone do you want for the effect?
 * Format: [Red, Green, Blue, Gray]
 * @default [68, 68, 128, 0]
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 10
 * @desc How long is this effect's duration?
 * 60 frames = 1 second. Minimum: 10.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_V
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Vibrate
 * @text EFFECT: Vibrate
 * @desc Picture(s) vibrates a certain distance from start to end.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 30
 *
 * @arg DistanceX:num
 * @text Distance X
 * @type number
 * @desc How far should the max horizontal distance be?
 * @default 24
 *
 * @arg DistanceY:num
 * @text Distance Y
 * @type number
 * @desc How far should the max vertical distance be?
 * @default 12
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_W
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wobble
 * @text EFFECT: Wobble
 * @desc Picture(s) wobbles its angle from side to side.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Times:num
 * @text Effect Times
 * @type number
 * @min 1
 * @desc How many times to extend this effect?
 * @default 10
 *
 * @arg Degrees:num
 * @text Degrees
 * @type number
 * @min 1
 * @max 360
 * @desc How many degrees does this wobble?
 * @default 10
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Z
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Z_Layer_Change_By
 * @text EFFECT: Z Layer Change By
 * @desc Picture(s) changes its Z layer to a relative value.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Z:eval
 * @text Adjust Z
 * @desc Adjust the Z value of target picture(s) by this.
 * You may use JavaScript. + Move Front. - Move Back.
 * @default +1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Z_Layer_Set_To
 * @text EFFECT: Z Layer Set To
 * @desc Picture(s) changes its Z layer to a specific value.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg Z:eval
 * @text Target Z
 * @desc What Z Layer do you wish to assign this picture(s)?
 * You may use JavaScript.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Zoom_InOut
 * @text EFFECT: Zoom In/Out
 * @desc Picture(s) zooms into view and out of.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @desc Select which picture ID(s) to play this effect with.
 * @default ["1"]
 *
 * @arg EffectIn:str
 * @text Effect In/Out?
 * @type select
 * @option In
 * @option Out
 * @desc What effect type is this?
 * @default In
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How long is this effect's duration?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion?
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until effect is complete before moving onto next event command?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 */
//=============================================================================

function _0x35e4(_0x1cf09a,_0x371321){const _0xff4b6b=_0xff4b();return _0x35e4=function(_0x35e4c7,_0x2b7956){_0x35e4c7=_0x35e4c7-0x160;let _0x47d346=_0xff4b6b[_0x35e4c7];return _0x47d346;},_0x35e4(_0x1cf09a,_0x371321);}const _0x332605=_0x35e4;(function(_0x752f8,_0x7e35d5){const _0x4a2184=_0x35e4,_0x154644=_0x752f8();while(!![]){try{const _0x4d81c9=-parseInt(_0x4a2184(0x1a2))/0x1+-parseInt(_0x4a2184(0x18b))/0x2*(parseInt(_0x4a2184(0x2d7))/0x3)+parseInt(_0x4a2184(0x19e))/0x4*(-parseInt(_0x4a2184(0x2e1))/0x5)+parseInt(_0x4a2184(0x212))/0x6*(-parseInt(_0x4a2184(0x282))/0x7)+parseInt(_0x4a2184(0x2a9))/0x8+-parseInt(_0x4a2184(0x1a7))/0x9*(parseInt(_0x4a2184(0x1f7))/0xa)+parseInt(_0x4a2184(0x23a))/0xb;if(_0x4d81c9===_0x7e35d5)break;else _0x154644['push'](_0x154644['shift']());}catch(_0x2dd6ed){_0x154644['push'](_0x154644['shift']());}}}(_0xff4b,0x21778));var label=_0x332605(0x237),tier=tier||0x0,dependencies=[_0x332605(0x16e)],pluginData=$plugins[_0x332605(0x1a6)](function(_0x239ff0){const _0x2b7a5a=_0x332605;return _0x239ff0[_0x2b7a5a(0x2b9)]&&_0x239ff0[_0x2b7a5a(0x2a4)][_0x2b7a5a(0x28f)]('['+label+']');})[0x0];VisuMZ[label][_0x332605(0x199)]=VisuMZ[label]['Settings']||{},VisuMZ[_0x332605(0x2cc)]=function(_0x2ab2e0,_0x458c41){const _0x81e865=_0x332605;for(const _0x17d676 in _0x458c41){if(_0x17d676[_0x81e865(0x1b2)](/(.*):(.*)/i)){const _0x5419c9=String(RegExp['$1']),_0xc900b7=String(RegExp['$2'])[_0x81e865(0x2f7)]()['trim']();let _0x5b39d1,_0x48057b,_0x423f78;switch(_0xc900b7){case _0x81e865(0x18f):_0x5b39d1=_0x458c41[_0x17d676]!==''?Number(_0x458c41[_0x17d676]):0x0;break;case'ARRAYNUM':_0x48057b=_0x458c41[_0x17d676]!==''?JSON[_0x81e865(0x213)](_0x458c41[_0x17d676]):[],_0x5b39d1=_0x48057b[_0x81e865(0x235)](_0x153518=>Number(_0x153518));break;case _0x81e865(0x2f4):_0x5b39d1=_0x458c41[_0x17d676]!==''?eval(_0x458c41[_0x17d676]):null;break;case _0x81e865(0x209):_0x48057b=_0x458c41[_0x17d676]!==''?JSON[_0x81e865(0x213)](_0x458c41[_0x17d676]):[],_0x5b39d1=_0x48057b[_0x81e865(0x235)](_0x2479ca=>eval(_0x2479ca));break;case _0x81e865(0x2d8):_0x5b39d1=_0x458c41[_0x17d676]!==''?JSON[_0x81e865(0x213)](_0x458c41[_0x17d676]):'';break;case _0x81e865(0x1c8):_0x48057b=_0x458c41[_0x17d676]!==''?JSON[_0x81e865(0x213)](_0x458c41[_0x17d676]):[],_0x5b39d1=_0x48057b[_0x81e865(0x235)](_0x58b05c=>JSON['parse'](_0x58b05c));break;case'FUNC':_0x5b39d1=_0x458c41[_0x17d676]!==''?new Function(JSON['parse'](_0x458c41[_0x17d676])):new Function(_0x81e865(0x21a));break;case _0x81e865(0x1cb):_0x48057b=_0x458c41[_0x17d676]!==''?JSON[_0x81e865(0x213)](_0x458c41[_0x17d676]):[],_0x5b39d1=_0x48057b[_0x81e865(0x235)](_0x5d8e0b=>new Function(JSON['parse'](_0x5d8e0b)));break;case _0x81e865(0x2ff):_0x5b39d1=_0x458c41[_0x17d676]!==''?String(_0x458c41[_0x17d676]):'';break;case'ARRAYSTR':_0x48057b=_0x458c41[_0x17d676]!==''?JSON[_0x81e865(0x213)](_0x458c41[_0x17d676]):[],_0x5b39d1=_0x48057b['map'](_0x4d893e=>String(_0x4d893e));break;case _0x81e865(0x171):_0x423f78=_0x458c41[_0x17d676]!==''?JSON['parse'](_0x458c41[_0x17d676]):{},_0x5b39d1=VisuMZ[_0x81e865(0x2cc)]({},_0x423f78);break;case _0x81e865(0x16b):_0x48057b=_0x458c41[_0x17d676]!==''?JSON[_0x81e865(0x213)](_0x458c41[_0x17d676]):[],_0x5b39d1=_0x48057b['map'](_0x302249=>VisuMZ[_0x81e865(0x2cc)]({},JSON[_0x81e865(0x213)](_0x302249)));break;default:continue;}_0x2ab2e0[_0x5419c9]=_0x5b39d1;}}return _0x2ab2e0;},(_0x245df4=>{const _0x4fab2f=_0x332605,_0x110c81=_0x245df4['name'];for(const _0x642020 of dependencies){if(!Imported[_0x642020]){alert(_0x4fab2f(0x2d2)[_0x4fab2f(0x1b7)](_0x110c81,_0x642020)),SceneManager[_0x4fab2f(0x215)]();break;}}const _0x1bff14=_0x245df4[_0x4fab2f(0x2a4)];if(_0x1bff14[_0x4fab2f(0x1b2)](/\[Version[ ](.*?)\]/i)){const _0x7e3aab=Number(RegExp['$1']);_0x7e3aab!==VisuMZ[label][_0x4fab2f(0x248)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x4fab2f(0x1b7)](_0x110c81,_0x7e3aab)),SceneManager[_0x4fab2f(0x215)]());}if(_0x1bff14[_0x4fab2f(0x1b2)](/\[Tier[ ](\d+)\]/i)){const _0x1bab56=Number(RegExp['$1']);_0x1bab56<tier?(alert(_0x4fab2f(0x1a8)[_0x4fab2f(0x1b7)](_0x110c81,_0x1bab56,tier)),SceneManager[_0x4fab2f(0x215)]()):tier=Math[_0x4fab2f(0x225)](_0x1bab56,tier);}VisuMZ[_0x4fab2f(0x2cc)](VisuMZ[label][_0x4fab2f(0x199)],_0x245df4['parameters']);})(pluginData);if(VisuMZ[_0x332605(0x161)][_0x332605(0x248)]<1.77){let text='';text+=_0x332605(0x1b8),text+=_0x332605(0x229),alert(text),SceneManager[_0x332605(0x215)]();}function _0xff4b(){const _0x46939e=['Arrange_Vert','depthX','setupEffect_Rotate','OutSine','Z_Layer_Set_To','hue','_anchor','setupEffect_ExpandInOut','picture','unmovedMouseY','description','getLastPluginCommandInterpreter','setupEffect_Shakey','Counter\x20Clockwise','Shrink_InOut','229368XRuipl','_blurFilterData','updatePictureEffectsHue','setupEffect_QuickPress','setEasingType','Merge_Change','targetRateY','initPictureEffectsBreathing','Vibrate','setHue','Spins','Teleport_InOut','setupEffect_Chilly','setupEffect_Spazz','_targetY','updateSidestep','status','toneDuration','Rate','anglePlus','Capsule_Burst','setupEffect_Hoppity','setupEffect_FadeInOut','setupEffect_Heal','Sidestep','addLoadListener','InQuint','plusHover','targetRateX','round','setupEffect_JumpByXy','distanceX','setupEffect_FadeLayerSwitch','Glow','Illusion','ConvertParams','setupEffect_Template','pictureEffectsScaleX','_queueChanges','Berserk','_toneTarget','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','setupEffect_ZoomInOut','pictureEffectsScaleY','DistanceY','updatePictureLayerZ','3RYsWwn','JSON','addToQueue','getPictureEffectsHue','setupEffect_PsycheScale','_blendMode','InCubic','distanceY','Chilly','setupEffect_Capsule_Burst','2230MYrjkh','UFO_InOut','pictureEffectsSway','Open_InOut','setupEffect_JumpToXy','children','scaleX','Petrify','targetRangeX','sort','plusSidestep','setupEffect_PhaseInOut','_pictureEffectsSway','changeZ','depthY','JumpTo','Height','Distance','Breathing','EVAL','SortByLayerZ','updatePictureEffectsBlur','toUpperCase','setupEffect_TeleportInOut','floor','updatePictureSettings','updatePictureEffectsSway','setupEffect_RandomInOut','Template_Normal','updateToneQueueData','STR','Fade_Change','easingType','CoreEngine','OutQuint','setupEffect_SpinInOut','ScaleMin','_wholeDuration','Scale','target','updatePictureEffectFilters','_pictureEffectsColorFilter','targetScaleY','ARRAYSTRUCT','RangeY','OutCubic','VisuMZ_0_CoreEngine','getTotalQueueDuration','Spazz','STRUCT','Card_Flip','Open','Game_Picture_show','setupEffect_FadeChange','cos','_toneDuration','setupEffect_GhostInOut','_easingType','setupEffect_Berserk','changeAlterXy','updatePictureEffects','setupEffect_TelevisionInOut','Flash_Change','InOutCubic','blurDuration','setupEffect_TemplateInOut','moveY','min','_targetAnchor','setupEffect_SpinChange','setupEffect_Arrange_Row','Charm','clearQueue','targetHue','height','247004ayOMub','update','setupEffect_LevitateInOut','_targetScaleY','NUM','BlurFilter','Rng','setupEffect_Damage','remove','_pictureContainer','getPictureEffectsHueFilter','blur','setupEffect_Vibrate','setupEffect_Transform','Settings','Drop_InOut','targetAnchor','_pictureEffectsLayerZ','currentHue','1264WHvbqF','Tint_Shift_To','_pictureEffectsDepth','updateOther','227134XHzzcC','Dizzy','angleDuration','Blur','filter','29151lKxhyp','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','setupEffect_SquishInOut','PetrifyTone','shift','InBack','initPictureEffectsLayerZ','indexOf','name','updatePictureEffectsXyAlter','setupEffect_RollInOut','match','_pictureId','rangeY','random','_hueFilterData','format','VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20','setupEffect_Petrify','setupEffect_StretchInOut','updateQueue','Hoppity','setupEffect_TintShiftTo','Shakey','updateAlterXy','reduce','wait','TargetX','Mana_Restore','OutBack','rangeX','Rotate','Tone2','ARRAYJSON','_name','loadPicture','ARRAYFUNC','Tone','_opacity','setupEffect_Electrocuted','setZ','initPictureEffectsDepth','wholeDuration','targetRate','setupEffect_ManaRestore','updateZLayerQueueData','randomInt','RangeX','initPictureEffects','QuickPress','Focus_InOut','Stretch_InOut','blendMode','targetScaleX','width','_scaleY','Game_Picture_initialize','setupEffect_FlyingCard','initPictureEffectsXyAlter','_targetOpacity','call','Game_Picture_y','EffectIn','setupEffect_FlashChange','setupEffect_Poison','Degrees','Spriteset_Base_updatePictureSettings','Confused','Direction','_pictureEffectsBlurFilter','_duration','setupEffect_Angry','_tone','updateBlurQueueData','setupEffect_Illusion','Sprite_Picture_updateOther','PowerUp_Change','duration','setupEffect_Charm','targetTone','500gHgLYW','Arrange_Horz','targetAngle','changeHover','Hue_Shift_To','initPictureEffectsFilterData','Duration','changeBreathing','range','updateRotateQueueData','Levitate_InOut','abs','rateX','initialize','Jiggle','Times','setupEffect_Arrange_Vert','scaleY','ARRAYEVAL','targetBlur','moveX','targetDistanceX','setupEffect_Arrange_Col','targetRng','DistanceX','_initiatedPictureEffectsBlendMode','setupEffect_Dizzy','334200AbJXPw','parse','InOutSine','exit','Damage','AnchorX','setupEffect_DropInOut','Fade_InOut','return\x200','opacity','targetDistanceY','Arrange_Col','setupEffect_ShrinkInOut','targetRange','updatePictureEffectsBreathing','targetMoveY','_targetScaleX','Wait','Game_Picture_angle','max','hueDuration','frameCount','InOutBack','in\x20order\x20for\x20VisuMZ_2_PictureEffects\x20to\x20work.','setupEffect_Fear','current','length','Banner_InOut','enabled','AnchorY','updatePictureEffectsDepthChanges','From\x20Right','filename','targetDistance','targetRangeY','map','setupEffect_TintShiftBy','PictureEffects','Pulse','angleEasingType','8993941vMMzGn','setAsQueue','getPictureEffectsBlurFilter','Electrocuted','setupEffect_HueShiftTo','Piece_InOut','updateHueQueueData','updateHover','registerCommand','push','setupEffect_UfoInOut','setupEffect_PieceInOut','Ghost_InOut','Size','version','doesQueueExist','setupEffect_MergeChange','updatePictureEffectsBlurFilter','rate','Hue_Shift_By','setupEffect_Confused','Sprite_Picture_initialize','TargetY','bind','Game_Picture_scaleY','Fear','Game_Picture_update','anchor','Linear','getPictureEffectsBlur','Angry','setupEffect_Glow','getQueue','Wobble','initRotationCoreEngine','updatePictureEffectsHueFilter','Squish_InOut','Expand_InOut','setupEffect_OpenInOut','unmovedMouseX','_anglePlus','ScaleMax','changeDepth','rateY','Game_Picture_scaleX','setupEffect_SubmergeInOut','changeSidestep','Swaying','show','targetOpacity','Hover','updatePictureEffectsDepthRates','pow','setupEffect_Arrange_Horz','targetMoveX','ceil','rng','Game_Picture_x','Filename','tone','Psychedelic','setupEffect_PowerUpChange','_pictureEffectsSidestep','Roll_InOut','Depth','PictureIDs','_scaleX','distance','Hue','setupEffect_BannerInOut','updatePictureEffectsLayerZ','FlyingCard','7dnUuvV','Template_InOut','filters','Spin_Change','updatePictureEffectsDepth','initPictureEffectsSway','changeSwaying','Zoom_InOut','_pictureEffectsHover','updateMoveQueueData','clamp','angle','currentAngle','includes','Fade_Layer_Switch','_pictureEffectsBreathing','prototype','makeDeepCopy','currentBlur','setupEffect_Wobble','Phase_InOut','OutBounce','setupEffect_FocusInOut','clone'];_0xff4b=function(){return _0x46939e;};return _0xff4b();}VisuMZ['PictureEffects'][_0x332605(0x1df)]=Game_Picture['prototype'][_0x332605(0x204)],Game_Picture[_0x332605(0x292)][_0x332605(0x204)]=function(){const _0x50d9f5=_0x332605;VisuMZ['PictureEffects'][_0x50d9f5(0x1df)][_0x50d9f5(0x1e3)](this),this[_0x50d9f5(0x1d7)]();},VisuMZ[_0x332605(0x237)][_0x332605(0x174)]=Game_Picture[_0x332605(0x292)][_0x332605(0x26a)],Game_Picture[_0x332605(0x292)][_0x332605(0x26a)]=function(_0x5ef89c,_0x35eee6,_0x24b41c,_0x449f8b,_0x3048ec,_0x38d7ea,_0x2a606c,_0x5cfe54){const _0x45726e=_0x332605;VisuMZ[_0x45726e(0x237)][_0x45726e(0x174)][_0x45726e(0x1e3)](this,_0x5ef89c,_0x35eee6,_0x24b41c,_0x449f8b,_0x3048ec,_0x38d7ea,_0x2a606c,_0x5cfe54),this[_0x45726e(0x1d7)]();},Game_Picture[_0x332605(0x292)][_0x332605(0x1d7)]=function(){const _0x5865d4=_0x332605;this[_0x5865d4(0x188)](),this[_0x5865d4(0x1fc)](),this[_0x5865d4(0x1e1)](),this['initPictureEffectsDepth'](),this['initPictureEffectsBreathing'](),this[_0x5865d4(0x287)](),this[_0x5865d4(0x1ad)]();},VisuMZ[_0x332605(0x237)][_0x332605(0x273)]=Game_Picture['prototype']['x'],Game_Picture['prototype']['x']=function(){const _0x61d93f=_0x332605;let _0x28eea4=VisuMZ[_0x61d93f(0x237)][_0x61d93f(0x273)][_0x61d93f(0x1e3)](this);return _0x28eea4+=this[_0x61d93f(0x2eb)](),_0x28eea4+=this['depthX'](),_0x28eea4;},VisuMZ['PictureEffects'][_0x332605(0x1e4)]=Game_Picture[_0x332605(0x292)]['y'],Game_Picture[_0x332605(0x292)]['y']=function(){const _0x7f6b5f=_0x332605;let _0x2bfa6a=VisuMZ['PictureEffects'][_0x7f6b5f(0x1e4)][_0x7f6b5f(0x1e3)](this);return _0x2bfa6a+=this[_0x7f6b5f(0x2c4)](),_0x2bfa6a+=this[_0x7f6b5f(0x2ef)](),_0x2bfa6a;},VisuMZ[_0x332605(0x237)][_0x332605(0x266)]=Game_Picture[_0x332605(0x292)][_0x332605(0x2e7)],Game_Picture['prototype'][_0x332605(0x2e7)]=function(){const _0x138dc7=_0x332605;let _0x9e2fdd=VisuMZ[_0x138dc7(0x237)]['Game_Picture_scaleX']['call'](this);return _0x9e2fdd+=this[_0x138dc7(0x2ce)](),_0x9e2fdd;},VisuMZ[_0x332605(0x237)][_0x332605(0x252)]=Game_Picture['prototype']['scaleY'],Game_Picture[_0x332605(0x292)][_0x332605(0x208)]=function(){const _0x21ccc5=_0x332605;let _0x2fdd8f=VisuMZ[_0x21ccc5(0x237)][_0x21ccc5(0x252)][_0x21ccc5(0x1e3)](this);return _0x2fdd8f+=this['pictureEffectsScaleY'](),_0x2fdd8f;},VisuMZ[_0x332605(0x237)][_0x332605(0x224)]=Game_Picture[_0x332605(0x292)]['angle'],Game_Picture[_0x332605(0x292)][_0x332605(0x28d)]=function(){const _0xa8fcca=_0x332605;let _0x1dee0e=VisuMZ[_0xa8fcca(0x237)]['Game_Picture_angle'][_0xa8fcca(0x1e3)](this);return _0x1dee0e+=this[_0xa8fcca(0x2e3)](),_0x1dee0e;},Game_Picture[_0x332605(0x292)][_0x332605(0x188)]=function(){const _0x4e2fde=_0x332605;this[_0x4e2fde(0x2cf)]=[];},Game_Picture['prototype']['getQueue']=function(){const _0x39104f=_0x332605;if(this[_0x39104f(0x2cf)]===undefined)this[_0x39104f(0x1d7)]();return this[_0x39104f(0x2cf)];},Game_Picture[_0x332605(0x292)][_0x332605(0x249)]=function(){const _0x4812ec=_0x332605;return this['getQueue']()[_0x4812ec(0x22c)]>0x0;},Game_Picture[_0x332605(0x292)][_0x332605(0x2d9)]=function(_0x2b312e){const _0x20f4a3=_0x332605;if(this[_0x20f4a3(0x2cf)]===undefined)this[_0x20f4a3(0x1d7)]();_0x2b312e[_0x20f4a3(0x1f4)]===undefined&&(_0x2b312e[_0x20f4a3(0x1f4)]=0x1),this['_queueChanges'][_0x20f4a3(0x243)](_0x2b312e);},Game_Picture[_0x332605(0x292)][_0x332605(0x23b)]=function(_0x2efcfb){const _0x1fb567=_0x332605;if(this[_0x1fb567(0x2cf)]===undefined)this[_0x1fb567(0x1d7)]();this[_0x1fb567(0x2cf)]=_0x2efcfb;},Game_Picture[_0x332605(0x292)][_0x332605(0x16f)]=function(){const _0x5a5192=_0x332605;return this[_0x5a5192(0x25a)]()[_0x5a5192(0x1c0)]((_0x1eaa5a,_0x3161c6)=>_0x1eaa5a+_0x3161c6[_0x5a5192(0x1f4)],0x0);},VisuMZ[_0x332605(0x237)][_0x332605(0x254)]=Game_Picture[_0x332605(0x292)][_0x332605(0x18c)],Game_Picture[_0x332605(0x292)][_0x332605(0x18c)]=function(){const _0x27306a=_0x332605;VisuMZ['PictureEffects'][_0x27306a(0x254)][_0x27306a(0x1e3)](this),this[_0x27306a(0x168)](),this[_0x27306a(0x1b0)](),this[_0x27306a(0x286)](),this[_0x27306a(0x220)](),this[_0x27306a(0x2fb)](),this['_duration']<=0x0&&this[_0x27306a(0x249)]()&&this[_0x27306a(0x1bb)]();},Game_Picture[_0x332605(0x292)]['updateQueue']=function(){const _0x12b6ed=_0x332605,_0x33d409=this[_0x12b6ed(0x2cf)][_0x12b6ed(0x1ab)]();this[_0x12b6ed(0x28b)](_0x33d409),this[_0x12b6ed(0x200)](_0x33d409),this[_0x12b6ed(0x2fe)](_0x33d409),this['updateBlurQueueData'](_0x33d409),this[_0x12b6ed(0x240)](_0x33d409),this[_0x12b6ed(0x1d4)](_0x33d409);},Game_Picture[_0x332605(0x292)][_0x332605(0x28b)]=function(_0x19ac39){const _0x4a23ca=_0x332605;if(!_0x19ac39)return;_0x19ac39[_0x4a23ca(0x232)]!==undefined&&(this['_name']=_0x19ac39[_0x4a23ca(0x232)]);_0x19ac39[_0x4a23ca(0x255)]!==undefined&&(this[_0x4a23ca(0x2a0)]=JsonEx[_0x4a23ca(0x293)](_0x19ac39[_0x4a23ca(0x255)]),this[_0x4a23ca(0x184)]=JsonEx['makeDeepCopy'](_0x19ac39[_0x4a23ca(0x255)]));_0x19ac39[_0x4a23ca(0x19b)]!==undefined&&(this[_0x4a23ca(0x184)]=JsonEx[_0x4a23ca(0x293)](_0x19ac39[_0x4a23ca(0x19b)]));_0x19ac39[_0x4a23ca(0x20b)]!==undefined&&(this['_x']=Math[_0x4a23ca(0x2c6)](_0x19ac39[_0x4a23ca(0x20b)]),this['_targetX']=Math[_0x4a23ca(0x2c6)](_0x19ac39[_0x4a23ca(0x20b)]));_0x19ac39[_0x4a23ca(0x182)]!==undefined&&(this['_y']=Math['round'](_0x19ac39[_0x4a23ca(0x182)]),this[_0x4a23ca(0x2b7)]=Math[_0x4a23ca(0x2c6)](_0x19ac39[_0x4a23ca(0x182)]));_0x19ac39[_0x4a23ca(0x270)]!==undefined&&(this['_targetX']=Math[_0x4a23ca(0x2c6)](_0x19ac39[_0x4a23ca(0x270)]));_0x19ac39[_0x4a23ca(0x221)]!==undefined&&(this[_0x4a23ca(0x2b7)]=Math['round'](_0x19ac39[_0x4a23ca(0x221)]));_0x19ac39[_0x4a23ca(0x2e7)]!==undefined&&(this[_0x4a23ca(0x27c)]=Math[_0x4a23ca(0x2c6)](_0x19ac39[_0x4a23ca(0x2e7)]),this[_0x4a23ca(0x222)]=Math['round'](_0x19ac39[_0x4a23ca(0x2e7)]));_0x19ac39[_0x4a23ca(0x208)]!==undefined&&(this['_scaleY']=Math[_0x4a23ca(0x2c6)](_0x19ac39[_0x4a23ca(0x208)]),this[_0x4a23ca(0x18e)]=Math['round'](_0x19ac39[_0x4a23ca(0x208)]));_0x19ac39['targetScaleX']!==undefined&&(this[_0x4a23ca(0x222)]=Math[_0x4a23ca(0x2c6)](_0x19ac39[_0x4a23ca(0x1dc)]));_0x19ac39[_0x4a23ca(0x16a)]!==undefined&&(this['_targetScaleY']=Math['round'](_0x19ac39[_0x4a23ca(0x16a)]));_0x19ac39[_0x4a23ca(0x21b)]!==undefined&&(this[_0x4a23ca(0x1cd)]=Math[_0x4a23ca(0x2c6)](_0x19ac39[_0x4a23ca(0x21b)]),this['_targetOpacity']=Math[_0x4a23ca(0x2c6)](_0x19ac39[_0x4a23ca(0x21b)]));_0x19ac39[_0x4a23ca(0x26b)]!==undefined&&(this[_0x4a23ca(0x1e2)]=Math[_0x4a23ca(0x2c6)](_0x19ac39[_0x4a23ca(0x26b)]));_0x19ac39[_0x4a23ca(0x1db)]!==undefined&&(this['_blendMode']=_0x19ac39[_0x4a23ca(0x1db)]);if(!_0x19ac39[_0x4a23ca(0x1f4)])_0x19ac39['duration']=0x0;this[_0x4a23ca(0x1ed)]=Math['round'](_0x19ac39[_0x4a23ca(0x1f4)]),this[_0x4a23ca(0x165)]=Math['round'](_0x19ac39[_0x4a23ca(0x1f4)]),_0x19ac39[_0x4a23ca(0x160)]!==undefined&&(this[_0x4a23ca(0x179)]=_0x19ac39['easingType'],this['_coreEasingType']=_0x19ac39['easingType']);},Game_Picture[_0x332605(0x292)]['updateRotateQueueData']=function(_0x302ae1){const _0x4fda60=_0x332605;if(this[_0x4fda60(0x262)]===undefined)this[_0x4fda60(0x25c)]();_0x302ae1['currentAngle']!==undefined&&(this[_0x4fda60(0x262)][_0x4fda60(0x22b)]=Math[_0x4fda60(0x2c6)](_0x302ae1[_0x4fda60(0x28e)]),this[_0x4fda60(0x262)][_0x4fda60(0x167)]=Math['round'](_0x302ae1['currentAngle']));_0x302ae1[_0x4fda60(0x1f9)]!==undefined&&(this[_0x4fda60(0x262)]['target']=Math[_0x4fda60(0x2c6)](_0x302ae1[_0x4fda60(0x1f9)]));if(!_0x302ae1[_0x4fda60(0x1f4)])_0x302ae1[_0x4fda60(0x1f4)]=0x0;this[_0x4fda60(0x262)][_0x4fda60(0x1f4)]=Math[_0x4fda60(0x2c6)](_0x302ae1[_0x4fda60(0x1f4)]),this[_0x4fda60(0x262)][_0x4fda60(0x1d1)]=Math[_0x4fda60(0x2c6)](_0x302ae1['duration']),_0x302ae1[_0x4fda60(0x1a4)]!==undefined&&(this['_anglePlus']['duration']=Math[_0x4fda60(0x2c6)](_0x302ae1[_0x4fda60(0x1a4)]),this['_anglePlus'][_0x4fda60(0x1d1)]=Math[_0x4fda60(0x2c6)](_0x302ae1[_0x4fda60(0x1a4)])),_0x302ae1[_0x4fda60(0x239)]!==undefined&&(this[_0x4fda60(0x262)][_0x4fda60(0x160)]=_0x302ae1[_0x4fda60(0x239)]);},Game_Picture[_0x332605(0x292)]['updateToneQueueData']=function(_0x5ef143){const _0x481d33=_0x332605;if(!_0x5ef143)return;_0x5ef143[_0x481d33(0x275)]!==undefined&&(this['_tone']=_0x5ef143[_0x481d33(0x275)][_0x481d33(0x299)](),this[_0x481d33(0x2d1)]=_0x5ef143[_0x481d33(0x275)]['clone']()),_0x5ef143['targetTone']!==undefined&&(this['_tone']=this[_0x481d33(0x1ef)]?this['_tone']:[0x0,0x0,0x0,0x0],this[_0x481d33(0x2d1)]=_0x5ef143[_0x481d33(0x1f6)][_0x481d33(0x299)]()),_0x5ef143['toneDuration']!==undefined&&(this[_0x481d33(0x177)]=Math['round'](_0x5ef143[_0x481d33(0x2ba)]));},Game_Picture[_0x332605(0x292)][_0x332605(0x1fc)]=function(){const _0x482b95=_0x332605;this['_blurFilterData']={'enabled':![],'blur':0x0,'targetBlur':0x0,'duration':0x0},this[_0x482b95(0x1b6)]={'enabled':![],'hue':0x0,'targetHue':0x0,'duration':0x0};},Game_Picture['prototype'][_0x332605(0x168)]=function(){const _0x16714f=_0x332605;this[_0x16714f(0x24b)](),this['updatePictureEffectsHueFilter']();},Game_Picture[_0x332605(0x292)][_0x332605(0x23c)]=function(){const _0x575849=_0x332605;if(this[_0x575849(0x2aa)]===undefined)this['initPictureEffectsFilterData']();return this['_blurFilterData'];},Game_Picture[_0x332605(0x292)][_0x332605(0x257)]=function(){const _0x3b6511=_0x332605;if(this['_blurFilterData']===undefined)this['initPictureEffectsFilterData']();return this[_0x3b6511(0x2aa)][_0x3b6511(0x196)];},Game_Picture[_0x332605(0x292)][_0x332605(0x24b)]=function(){const _0x1167a2=_0x332605,_0x118ba8=this['getPictureEffectsBlurFilter']();if(!_0x118ba8[_0x1167a2(0x22e)])return;if(_0x118ba8[_0x1167a2(0x1f4)]<=0x0)return;const _0x108b46=_0x118ba8[_0x1167a2(0x1f4)];_0x118ba8['blur']=(_0x118ba8[_0x1167a2(0x196)]*(_0x108b46-0x1)+_0x118ba8[_0x1167a2(0x20a)])/_0x108b46,_0x118ba8['duration']--,_0x118ba8[_0x1167a2(0x1f4)]<=0x0&&(_0x118ba8[_0x1167a2(0x196)]=_0x118ba8[_0x1167a2(0x20a)]);},Game_Picture[_0x332605(0x292)][_0x332605(0x1f0)]=function(_0x124118){const _0x3ffeb0=_0x332605,_0x450eb2=this[_0x3ffeb0(0x23c)]();_0x124118[_0x3ffeb0(0x294)]!==undefined&&(_0x450eb2['enabled']=!![],_0x450eb2[_0x3ffeb0(0x196)]=_0x124118[_0x3ffeb0(0x294)],_0x450eb2[_0x3ffeb0(0x20a)]=_0x124118[_0x3ffeb0(0x294)]),_0x124118[_0x3ffeb0(0x20a)]!==undefined&&(_0x450eb2['enabled']=!![],_0x450eb2[_0x3ffeb0(0x20a)]=_0x124118[_0x3ffeb0(0x20a)]),_0x124118['blurDuration']!==undefined&&(_0x450eb2[_0x3ffeb0(0x22e)]=!![],_0x450eb2[_0x3ffeb0(0x1f4)]=Math[_0x3ffeb0(0x2c6)](_0x124118[_0x3ffeb0(0x180)]));},Game_Picture[_0x332605(0x292)][_0x332605(0x195)]=function(){const _0x4dffdd=_0x332605;if(this[_0x4dffdd(0x1b6)]===undefined)this[_0x4dffdd(0x1fc)]();return this[_0x4dffdd(0x1b6)];},Game_Picture['prototype'][_0x332605(0x2da)]=function(){const _0x4708ac=_0x332605;return this['getPictureEffectsHueFilter']()[_0x4708ac(0x29f)];},Game_Picture[_0x332605(0x292)][_0x332605(0x25d)]=function(){const _0x179f08=_0x332605,_0x2b1915=this[_0x179f08(0x195)]();if(!_0x2b1915[_0x179f08(0x22e)])return;if(_0x2b1915[_0x179f08(0x1f4)]<=0x0)return;const _0x594f19=_0x2b1915['duration'];_0x2b1915[_0x179f08(0x29f)]=(_0x2b1915[_0x179f08(0x29f)]*(_0x594f19-0x1)+_0x2b1915[_0x179f08(0x189)])/_0x594f19,_0x2b1915[_0x179f08(0x1f4)]--,_0x2b1915[_0x179f08(0x1f4)]<=0x0&&(_0x2b1915[_0x179f08(0x29f)]=_0x2b1915[_0x179f08(0x189)]);},Game_Picture[_0x332605(0x292)][_0x332605(0x240)]=function(_0x150a34){const _0x28a55e=_0x332605,_0xd5d079=this['getPictureEffectsHueFilter']();_0x150a34['currentHue']!==undefined&&(_0xd5d079[_0x28a55e(0x22e)]=!![],_0xd5d079[_0x28a55e(0x29f)]=Math[_0x28a55e(0x2c6)](_0x150a34[_0x28a55e(0x19d)]),_0xd5d079[_0x28a55e(0x189)]=Math[_0x28a55e(0x2c6)](_0x150a34[_0x28a55e(0x19d)])),_0x150a34['targetHue']!==undefined&&(_0xd5d079['enabled']=!![],_0xd5d079[_0x28a55e(0x189)]=Math[_0x28a55e(0x2c6)](_0x150a34[_0x28a55e(0x189)])),_0x150a34[_0x28a55e(0x226)]!==undefined&&(_0xd5d079[_0x28a55e(0x22e)]=!![],_0xd5d079[_0x28a55e(0x1f4)]=Math[_0x28a55e(0x2c6)](_0x150a34[_0x28a55e(0x226)]));},Game_Picture['prototype']['initPictureEffectsXyAlter']=function(){const _0x464dc5=_0x332605;this['_pictureEffectsHover']={'y':0x0,'distance':0x0,'targetDistance':0x0,'rate':-0x2707,'targetRate':-0x2707,'rng':-0x2707,'targetRng':-0x2707,'duration':0x0},this[_0x464dc5(0x278)]={'x':0x0,'distance':0x0,'targetDistance':0x0,'rate':-0x2707,'targetRate':-0x2707,'rng':-0x2707,'targetRng':-0x2707,'duration':0x0};},Game_Picture['prototype']['updatePictureEffectsXyAlter']=function(){const _0x54585d=_0x332605;this[_0x54585d(0x241)](),this[_0x54585d(0x2b8)]();},Game_Picture[_0x332605(0x292)][_0x332605(0x17b)]=function(_0x4d027d,_0x3bc2e2,_0x6c1c13,_0x21492b,_0x28ce19){const _0x27e5f0=_0x332605;_0x4d027d[_0x27e5f0(0x233)]=_0x3bc2e2,_0x4d027d['targetRate']=_0x6c1c13,_0x4d027d[_0x27e5f0(0x20e)]=_0x21492b,_0x4d027d[_0x27e5f0(0x1f4)]=_0x28ce19,_0x4d027d[_0x27e5f0(0x24c)]===-0x2707&&(_0x4d027d['rate']=_0x4d027d[_0x27e5f0(0x1d2)]),_0x4d027d[_0x27e5f0(0x272)]===-0x2707&&(_0x4d027d[_0x27e5f0(0x272)]=_0x4d027d[_0x27e5f0(0x20e)]),_0x28ce19<=0x0&&(_0x4d027d['distance']=_0x3bc2e2,_0x4d027d[_0x27e5f0(0x24c)]=_0x6c1c13,_0x4d027d['rng']=_0x21492b);},Game_Picture[_0x332605(0x292)][_0x332605(0x1bf)]=function(_0x3ef274,_0x5c6d91){const _0x5e6a7c=_0x332605;if(_0x3ef274[_0x5e6a7c(0x1f4)]>0x0){const _0x4f4964=_0x3ef274[_0x5e6a7c(0x1f4)];_0x3ef274[_0x5e6a7c(0x27d)]=(_0x3ef274[_0x5e6a7c(0x27d)]*(_0x4f4964-0x1)+_0x3ef274[_0x5e6a7c(0x233)])/_0x4f4964,_0x3ef274[_0x5e6a7c(0x24c)]=(_0x3ef274[_0x5e6a7c(0x24c)]*(_0x4f4964-0x1)+_0x3ef274['targetRate'])/_0x4f4964,_0x3ef274['rng']=(_0x3ef274['rng']*(_0x4f4964-0x1)+_0x3ef274[_0x5e6a7c(0x20e)])/_0x4f4964,_0x3ef274[_0x5e6a7c(0x1f4)]--;}const _0x5dcea5=Graphics['frameCount']+_0x3ef274['rng'];_0x3ef274[_0x5c6d91]=Math[_0x5e6a7c(0x176)](_0x5dcea5*_0x3ef274[_0x5e6a7c(0x24c)])*_0x3ef274[_0x5e6a7c(0x27d)];},Game_Picture[_0x332605(0x292)][_0x332605(0x1fa)]=function(_0x2c50bf,_0x446cd0,_0x5e7a56,_0x17ae41){const _0x46f603=_0x332605;this[_0x46f603(0x28a)]===undefined&&this[_0x46f603(0x1e1)](),this['changeAlterXy'](this[_0x46f603(0x28a)],_0x2c50bf,_0x446cd0,_0x5e7a56,_0x17ae41);},Game_Picture[_0x332605(0x292)][_0x332605(0x241)]=function(){const _0x3c0062=_0x332605;this[_0x3c0062(0x28a)]===undefined&&this[_0x3c0062(0x1e1)]();const _0x31c485=this['_pictureEffectsHover'];this[_0x3c0062(0x1bf)](_0x31c485,'y');},Game_Picture['prototype']['plusHover']=function(){const _0x2b6ea3=_0x332605;return this[_0x2b6ea3(0x28a)]===undefined&&this[_0x2b6ea3(0x1e1)](),this[_0x2b6ea3(0x28a)]['y'];},Game_Picture[_0x332605(0x292)][_0x332605(0x268)]=function(_0x4d3c37,_0x13f780,_0x9660f9,_0x31366d){const _0x455c6f=_0x332605;this[_0x455c6f(0x278)]===undefined&&this[_0x455c6f(0x1e1)](),this[_0x455c6f(0x17b)](this[_0x455c6f(0x278)],_0x4d3c37,_0x13f780,_0x9660f9,_0x31366d);},Game_Picture[_0x332605(0x292)][_0x332605(0x2b8)]=function(){const _0x2f08f4=_0x332605;this[_0x2f08f4(0x278)]===undefined&&this[_0x2f08f4(0x1e1)]();const _0x57a816=this[_0x2f08f4(0x278)];this[_0x2f08f4(0x1bf)](_0x57a816,'x');},Game_Picture[_0x332605(0x292)][_0x332605(0x2eb)]=function(){const _0x5cf143=_0x332605;return this[_0x5cf143(0x278)]===undefined&&this[_0x5cf143(0x1e1)](),this[_0x5cf143(0x278)]['x'];},Game_Picture[_0x332605(0x292)]['initPictureEffectsDepth']=function(){const _0x2d8f1b=_0x332605;this[_0x2d8f1b(0x1a0)]={'distanceX':0x0,'targetDistanceX':0x0,'distanceY':0x0,'targetDistanceY':0x0,'rateX':0x0,'rateY':0x0,'duration':0x0,'unmovedMouseX':!![],'unmovedMouseY':!![]};},Game_Picture['prototype'][_0x332605(0x29b)]=function(){const _0x1787c7=_0x332605;this[_0x1787c7(0x1a0)]===undefined&&this[_0x1787c7(0x1d0)]();const _0x1a8538=this[_0x1787c7(0x1a0)];return _0x1a8538[_0x1787c7(0x2c8)]/0x2*_0x1a8538['rateX'];},Game_Picture[_0x332605(0x292)][_0x332605(0x2ef)]=function(){const _0x28be3f=_0x332605;this[_0x28be3f(0x1a0)]===undefined&&this['initPictureEffectsDepth']();const _0x48c2c1=this[_0x28be3f(0x1a0)];return _0x48c2c1['distanceY']/0x2*_0x48c2c1[_0x28be3f(0x265)];},Game_Picture[_0x332605(0x292)][_0x332605(0x264)]=function(_0x4592c4,_0x5f2273,_0x40d88a){const _0x313336=_0x332605;this['_pictureEffectsDepth']===undefined&&this[_0x313336(0x1d0)]();const _0x2f0ab8=this[_0x313336(0x1a0)];_0x2f0ab8[_0x313336(0x20c)]=_0x4592c4,_0x2f0ab8[_0x313336(0x21c)]=_0x5f2273,_0x2f0ab8[_0x313336(0x1f4)]=_0x40d88a,_0x40d88a<=0x0&&(_0x2f0ab8['distanceX']=_0x4592c4,_0x2f0ab8[_0x313336(0x2de)]=_0x5f2273);},Game_Picture[_0x332605(0x292)][_0x332605(0x286)]=function(){const _0xd47a2=_0x332605;this[_0xd47a2(0x230)](),this[_0xd47a2(0x26d)]();},Game_Picture[_0x332605(0x292)][_0x332605(0x230)]=function(){const _0x1ad893=_0x332605;this[_0x1ad893(0x1a0)]===undefined&&this[_0x1ad893(0x1d0)]();const _0x49bbb0=this[_0x1ad893(0x1a0)];if(_0x49bbb0[_0x1ad893(0x1f4)]<=0x0)return;const _0x6fede4=_0x49bbb0[_0x1ad893(0x1f4)];_0x49bbb0[_0x1ad893(0x2c8)]=(_0x49bbb0[_0x1ad893(0x2c8)]*(_0x6fede4-0x1)+_0x49bbb0[_0x1ad893(0x20c)])/_0x6fede4,_0x49bbb0['distanceY']=(_0x49bbb0['distanceY']*(_0x6fede4-0x1)+_0x49bbb0['targetDistanceY'])/_0x6fede4,_0x49bbb0[_0x1ad893(0x1f4)]--;},Game_Picture[_0x332605(0x292)][_0x332605(0x26d)]=function(){const _0x4e2623=_0x332605;this['_pictureEffectsDepth']===undefined&&this[_0x4e2623(0x1d0)]();const _0x1ee45e=this[_0x4e2623(0x1a0)];if(TouchInput['_x']>0x0)_0x1ee45e[_0x4e2623(0x261)]=![];if(TouchInput['_y']>0x0)_0x1ee45e[_0x4e2623(0x2a3)]=![];const _0x4cd656=_0x1ee45e[_0x4e2623(0x261)]?Graphics[_0x4e2623(0x1dd)]/0x2:0x0,_0x29e602=_0x1ee45e[_0x4e2623(0x2a3)]?Graphics[_0x4e2623(0x18a)]/0x2:0x0,_0x63b89a=TouchInput['_x']||_0x4cd656,_0x163a26=TouchInput['_y']||_0x29e602;_0x1ee45e[_0x4e2623(0x203)]=-(_0x63b89a/Graphics[_0x4e2623(0x1dd)]*0x2-0x1),_0x1ee45e[_0x4e2623(0x265)]=-(_0x163a26/Graphics[_0x4e2623(0x18a)]*0x2-0x1);},Game_Picture[_0x332605(0x292)][_0x332605(0x2b0)]=function(){this['_pictureEffectsBreathing']={'scaleX':0x0,'scaleY':0x0,'rangeX':0x0,'targetRangeX':0x0,'rangeY':0x0,'targetRangeY':0x0,'rateX':-0x2707,'targetRateX':-0x2707,'rateY':-0x2707,'targetRateY':-0x2707,'rng':-0x2707,'targetRng':-0x2707,'duration':0x0};},Game_Picture[_0x332605(0x292)]['pictureEffectsScaleX']=function(){const _0x192c8e=_0x332605;return this[_0x192c8e(0x291)]===undefined&&this[_0x192c8e(0x2b0)](),this[_0x192c8e(0x291)][_0x192c8e(0x2e7)];},Game_Picture[_0x332605(0x292)][_0x332605(0x2d4)]=function(){const _0x1e6969=_0x332605;return this[_0x1e6969(0x291)]===undefined&&this[_0x1e6969(0x2b0)](),this[_0x1e6969(0x291)]['scaleY'];},Game_Picture[_0x332605(0x292)]['changeBreathing']=function(_0x339ec6,_0x3aa083,_0x44f9b0,_0x35b16b,_0x159014,_0x1c9a90){const _0x140a26=_0x332605;this[_0x140a26(0x291)]===undefined&&this['initPictureEffectsBreathing']();const _0x192703=this[_0x140a26(0x291)];_0x192703[_0x140a26(0x2e9)]=_0x339ec6,_0x192703['targetRangeY']=_0x3aa083,_0x192703[_0x140a26(0x2c5)]=_0x44f9b0,_0x192703[_0x140a26(0x2af)]=_0x35b16b,_0x192703[_0x140a26(0x20e)]=_0x159014,_0x192703['duration']=_0x1c9a90,_0x192703[_0x140a26(0x203)]===-0x2707&&(_0x192703[_0x140a26(0x203)]=_0x192703['targetRateX']),_0x192703[_0x140a26(0x265)]===-0x2707&&(_0x192703[_0x140a26(0x265)]=_0x192703[_0x140a26(0x2af)]),_0x192703['rng']===-0x2707&&(_0x192703[_0x140a26(0x272)]=_0x192703[_0x140a26(0x20e)]),_0x1c9a90<=0x0&&(_0x192703['rangeX']=_0x339ec6,_0x192703[_0x140a26(0x1b4)]=_0x3aa083,_0x192703['rateX']=_0x44f9b0,_0x192703[_0x140a26(0x265)]=_0x35b16b,_0x192703[_0x140a26(0x272)]=_0x159014);},Game_Picture[_0x332605(0x292)][_0x332605(0x220)]=function(){const _0x59472e=_0x332605;this['_pictureEffectsBreathing']===undefined&&this[_0x59472e(0x2b0)]();const _0x860dc7=this[_0x59472e(0x291)];if(_0x860dc7[_0x59472e(0x1f4)]>0x0){const _0xecef58=_0x860dc7[_0x59472e(0x1f4)];_0x860dc7[_0x59472e(0x1c5)]=(_0x860dc7[_0x59472e(0x1c5)]*(_0xecef58-0x1)+_0x860dc7['targetRangeX'])/_0xecef58,_0x860dc7[_0x59472e(0x1b4)]=(_0x860dc7[_0x59472e(0x1b4)]*(_0xecef58-0x1)+_0x860dc7[_0x59472e(0x234)])/_0xecef58,_0x860dc7[_0x59472e(0x203)]=(_0x860dc7[_0x59472e(0x203)]*(_0xecef58-0x1)+_0x860dc7[_0x59472e(0x2c5)])/_0xecef58,_0x860dc7[_0x59472e(0x265)]=(_0x860dc7[_0x59472e(0x265)]*(_0xecef58-0x1)+_0x860dc7[_0x59472e(0x2af)])/_0xecef58,_0x860dc7[_0x59472e(0x272)]=(_0x860dc7[_0x59472e(0x272)]*(_0xecef58-0x1)+_0x860dc7[_0x59472e(0x20e)])/_0xecef58,_0x860dc7[_0x59472e(0x1f4)]--;}const _0x305a6e=Graphics[_0x59472e(0x227)]+_0x860dc7[_0x59472e(0x272)];_0x860dc7[_0x59472e(0x2e7)]=Math[_0x59472e(0x176)](_0x305a6e*_0x860dc7['rateX'])*_0x860dc7[_0x59472e(0x1c5)],_0x860dc7[_0x59472e(0x208)]=Math[_0x59472e(0x176)](_0x305a6e*_0x860dc7['rateY'])*-_0x860dc7['rangeY'];},Game_Picture[_0x332605(0x292)][_0x332605(0x287)]=function(){const _0x54a7d9=_0x332605;this[_0x54a7d9(0x2ed)]={'angle':0x0,'range':0x0,'targetRange':0x0,'rate':-0x2707,'targetRate':-0x2707,'rng':-0x2707,'targetRng':-0x2707,'duration':0x0};},Game_Picture[_0x332605(0x292)][_0x332605(0x2e3)]=function(){const _0x5b1cf3=_0x332605;return this[_0x5b1cf3(0x2ed)]===undefined&&this['initPictureEffectsSway'](),this[_0x5b1cf3(0x2ed)][_0x5b1cf3(0x28d)];},Game_Picture['prototype'][_0x332605(0x288)]=function(_0x407e08,_0x5aab0a,_0x4d55ab,_0x2baa08){const _0x18f7a9=_0x332605;this[_0x18f7a9(0x2ed)]===undefined&&this[_0x18f7a9(0x287)]();const _0x46d1e8=this['_pictureEffectsSway'];_0x46d1e8[_0x18f7a9(0x21f)]=_0x407e08,_0x46d1e8[_0x18f7a9(0x1d2)]=_0x5aab0a,_0x46d1e8[_0x18f7a9(0x20e)]=_0x4d55ab,_0x46d1e8[_0x18f7a9(0x1f4)]=_0x2baa08,_0x46d1e8[_0x18f7a9(0x24c)]===-0x2707&&(_0x46d1e8[_0x18f7a9(0x24c)]=_0x46d1e8[_0x18f7a9(0x1d2)]),_0x46d1e8['rng']===-0x2707&&(_0x46d1e8[_0x18f7a9(0x272)]=_0x46d1e8[_0x18f7a9(0x20e)]),_0x2baa08<=0x0&&(_0x46d1e8[_0x18f7a9(0x1ff)]=_0x407e08,_0x46d1e8[_0x18f7a9(0x24c)]=_0x5aab0a,_0x46d1e8[_0x18f7a9(0x272)]=_0x4d55ab);},Game_Picture[_0x332605(0x292)][_0x332605(0x2fb)]=function(){const _0x5265b7=_0x332605;this[_0x5265b7(0x2ed)]===undefined&&this[_0x5265b7(0x287)]();const _0x446b6e=this[_0x5265b7(0x2ed)];if(_0x446b6e[_0x5265b7(0x1f4)]>0x0){const _0x4085cb=_0x446b6e['duration'];_0x446b6e['range']=(_0x446b6e[_0x5265b7(0x1ff)]*(_0x4085cb-0x1)+_0x446b6e['targetRange'])/_0x4085cb,_0x446b6e[_0x5265b7(0x24c)]=(_0x446b6e[_0x5265b7(0x24c)]*(_0x4085cb-0x1)+_0x446b6e[_0x5265b7(0x1d2)])/_0x4085cb,_0x446b6e['rng']=(_0x446b6e[_0x5265b7(0x272)]*(_0x4085cb-0x1)+_0x446b6e[_0x5265b7(0x20e)])/_0x4085cb,_0x446b6e[_0x5265b7(0x1f4)]--;}const _0x320457=Graphics[_0x5265b7(0x227)]+_0x446b6e[_0x5265b7(0x272)];_0x446b6e[_0x5265b7(0x28d)]=Math[_0x5265b7(0x176)](_0x320457*_0x446b6e[_0x5265b7(0x24c)])*_0x446b6e[_0x5265b7(0x1ff)];},Game_Picture[_0x332605(0x292)][_0x332605(0x1ad)]=function(){const _0x15e032=_0x332605;this[_0x15e032(0x19c)]=0x0;},Game_Picture[_0x332605(0x292)]['z']=function(){const _0x1ea1a7=_0x332605;if(this[_0x1ea1a7(0x19c)]===undefined)this[_0x1ea1a7(0x1ad)]();return this[_0x1ea1a7(0x19c)];},Game_Picture['prototype'][_0x332605(0x1cf)]=function(_0x151625){const _0x224aaa=_0x332605;if(this[_0x224aaa(0x19c)]===undefined)this['initPictureEffectsLayerZ']();this['_pictureEffectsLayerZ']=Number(_0x151625);},Game_Picture[_0x332605(0x292)]['changeZ']=function(_0x36541d){const _0x3ee515=_0x332605;if(this['_pictureEffectsLayerZ']===undefined)this['initPictureEffectsLayerZ']();this[_0x3ee515(0x19c)]+=_0x36541d;},Game_Picture[_0x332605(0x292)][_0x332605(0x1d4)]=function(_0x308691){const _0x242323=_0x332605;_0x308691[_0x242323(0x1cf)]!==undefined&&(this[_0x242323(0x19c)]=_0x308691[_0x242323(0x1cf)]),_0x308691[_0x242323(0x2ee)]!==undefined&&(this['_pictureEffectsLayerZ']+=_0x308691['changeZ']);},VisuMZ[_0x332605(0x237)][_0x332605(0x24f)]=Sprite_Picture[_0x332605(0x292)][_0x332605(0x204)],Sprite_Picture[_0x332605(0x292)]['initialize']=function(_0x2f19cd){const _0x1e95ec=_0x332605;this['_z']=0x0,VisuMZ['PictureEffects'][_0x1e95ec(0x24f)][_0x1e95ec(0x1e3)](this,_0x2f19cd);},VisuMZ['PictureEffects'][_0x332605(0x1f2)]=Sprite_Picture[_0x332605(0x292)][_0x332605(0x1a1)],Sprite_Picture[_0x332605(0x292)][_0x332605(0x1a1)]=function(){const _0xb6d720=_0x332605;VisuMZ[_0xb6d720(0x237)][_0xb6d720(0x1f2)][_0xb6d720(0x1e3)](this),this['picture']()&&this[_0xb6d720(0x17c)]();},Sprite_Picture['prototype']['updatePictureEffects']=function(){const _0x446d68=_0x332605;this[_0x446d68(0x2f6)](),this['updatePictureEffectsHue'](),this['updatePictureEffectsBlendMode'](),this['updatePictureEffectsLayerZ']();},Sprite_Picture[_0x332605(0x292)][_0x332605(0x2f6)]=function(){const _0x16e08b=_0x332605,_0x4bcf86=this[_0x16e08b(0x2a2)](),_0x27585a=_0x4bcf86[_0x16e08b(0x23c)]();if(!_0x27585a[_0x16e08b(0x22e)]){this[_0x16e08b(0x1ec)]&&this[_0x16e08b(0x284)]['remove'](this[_0x16e08b(0x1ec)]);this[_0x16e08b(0x1ec)]=undefined;return;}!this[_0x16e08b(0x1ec)]&&(this[_0x16e08b(0x1ec)]=new PIXI['filters'][(_0x16e08b(0x190))](0x0),this[_0x16e08b(0x284)]=this[_0x16e08b(0x284)]||[],this[_0x16e08b(0x284)]['push'](this[_0x16e08b(0x1ec)]),this[_0x16e08b(0x169)]&&this['filters']['push'](this[_0x16e08b(0x169)]));const _0x2ed647=this[_0x16e08b(0x1ec)];_0x2ed647[_0x16e08b(0x196)]=_0x27585a[_0x16e08b(0x196)];},Sprite_Picture[_0x332605(0x292)][_0x332605(0x2ab)]=function(){const _0x21675d=_0x332605,_0x1e738e=this[_0x21675d(0x2a2)](),_0x369075=_0x1e738e[_0x21675d(0x2da)]();this[_0x21675d(0x2b2)](_0x369075);},Sprite_Picture[_0x332605(0x292)]['updatePictureEffectsBlendMode']=function(){const _0x5701e0=_0x332605,_0x5b90c1=this[_0x5701e0(0x2a2)]();if(_0x5b90c1[_0x5701e0(0x1db)]()===0x0&&!this[_0x5701e0(0x210)])return;if(!this[_0x5701e0(0x284)])return;if(this[_0x5701e0(0x284)]['length']<=0x0)return;this[_0x5701e0(0x210)]=!![];!this[_0x5701e0(0x169)]&&(this[_0x5701e0(0x169)]=new ColorFilter(),this[_0x5701e0(0x284)]=this[_0x5701e0(0x284)]||[],this[_0x5701e0(0x284)][_0x5701e0(0x243)](this[_0x5701e0(0x169)]));const _0x158988=this[_0x5701e0(0x169)];_0x158988[_0x5701e0(0x1db)]=_0x5b90c1[_0x5701e0(0x1db)]();},Sprite_Picture['prototype'][_0x332605(0x280)]=function(){const _0x1861b2=_0x332605;this['_z']=this[_0x1861b2(0x2a2)]()['z']();},VisuMZ[_0x332605(0x237)][_0x332605(0x1e9)]=Spriteset_Base[_0x332605(0x292)][_0x332605(0x2fa)],Spriteset_Base[_0x332605(0x292)][_0x332605(0x2fa)]=function(){const _0x14a974=_0x332605;VisuMZ[_0x14a974(0x237)][_0x14a974(0x1e9)]['call'](this),this[_0x14a974(0x2d6)]();},Spriteset_Base[_0x332605(0x292)]['updatePictureLayerZ']=function(){const _0xbcda1c=_0x332605;if(!this[_0xbcda1c(0x194)])return;VisuMZ[_0xbcda1c(0x237)]['SortByLayerZ'](this[_0xbcda1c(0x194)]);},VisuMZ['PictureEffects'][_0x332605(0x2f5)]=function(_0x2bca0b){const _0x200c0b=_0x332605,_0x5b6e12=_0x2bca0b[_0x200c0b(0x2e6)];_0x5b6e12[_0x200c0b(0x2ea)]((_0x393105,_0x445d7d)=>{const _0x3c4145=_0x200c0b;if(_0x393105['_z']!==_0x445d7d['_z'])return _0x393105['_z']-_0x445d7d['_z'];return _0x393105[_0x3c4145(0x1b3)]-_0x445d7d[_0x3c4145(0x1b3)];});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x2fd),_0x593535=>{const _0x1be0f7=_0x332605;VisuMZ[_0x1be0f7(0x2cc)](_0x593535,_0x593535);const _0x5934c9=_0x593535['PictureIDs'];if(_0x5934c9[_0x1be0f7(0x22c)]<=0x0)return;const _0x1d6a0d=Math[_0x1be0f7(0x225)](Number(_0x593535[_0x1be0f7(0x206)]),0x1),_0x455cd8=Math[_0x1be0f7(0x225)](Number(_0x593535[_0x1be0f7(0x2f2)]),0x1),_0x35307d=Math['max'](Number(_0x593535['Degrees']),0x1),_0x489640=_0x593535[_0x1be0f7(0x1cc)]||[0x0,0x0,0x0,0x0],_0x272f82=Math[_0x1be0f7(0x225)](Number(_0x593535[_0x1be0f7(0x1fd)]),0x1);let _0x5b8e95=0x0;for(const _0x3a6b99 of _0x5934c9){const _0x35f9a4=$gameScreen[_0x1be0f7(0x2a2)](_0x3a6b99);if(!_0x35f9a4)continue;_0x35f9a4[_0x1be0f7(0x2cd)](_0x1d6a0d,_0x35307d),_0x5b8e95=_0x35f9a4[_0x1be0f7(0x16f)]();}if(_0x593535[_0x1be0f7(0x223)]){const _0x1bc091=$gameTemp['getLastPluginCommandInterpreter']();if(_0x1bc091)_0x1bc091['wait'](_0x5b8e95+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x2cd)]=function(_0x8636a1,_0x18b2d8){const _0x59eb57=_0x332605;this[_0x59eb57(0x188)](),this['addToQueue']({'duration':0x0,'easingType':_0x59eb57(0x256)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x283),_0x534e54=>{const _0x3b2007=_0x332605;VisuMZ[_0x3b2007(0x2cc)](_0x534e54,_0x534e54);const _0x353ee0=_0x534e54[_0x3b2007(0x27b)];if(_0x353ee0[_0x3b2007(0x22c)]<=0x0)return;const _0x4a1882=_0x534e54['EffectIn']==='In',_0x517ef3=_0x534e54['Direction']===_0x3b2007(0x231),_0x1feb8a=Math[_0x3b2007(0x225)](Number(_0x534e54[_0x3b2007(0x1fd)]),0x1);let _0x48ebea=0x0;for(const _0x547195 of _0x353ee0){const _0x3ec50e=$gameScreen[_0x3b2007(0x2a2)](_0x547195);if(!_0x3ec50e)continue;_0x3ec50e[_0x3b2007(0x181)](_0x4a1882,_0x1feb8a),_0x48ebea=_0x3ec50e[_0x3b2007(0x16f)]();}if(_0x534e54[_0x3b2007(0x223)]){const _0x3fa928=$gameTemp[_0x3b2007(0x2a5)]();if(_0x3fa928)_0x3fa928[_0x3b2007(0x1c1)](_0x48ebea+0x1);}}),Game_Picture['prototype'][_0x332605(0x181)]=function(_0x32fd1a,_0x173864){const _0x3f9de7=_0x332605;this[_0x3f9de7(0x188)](),_0x32fd1a?this['addToQueue']({'duration':0x0,'easingType':'Linear'}):this['addToQueue']({'duration':0x0,'easingType':_0x3f9de7(0x256)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x258),_0x6de38a=>{const _0x434026=_0x332605;VisuMZ['ConvertParams'](_0x6de38a,_0x6de38a);const _0x5e3338=_0x6de38a['PictureIDs'];if(_0x5e3338[_0x434026(0x22c)]<=0x0)return;const _0x5fed4d=_0x6de38a[_0x434026(0x1cc)],_0x548fdc=Math[_0x434026(0x225)](Number(_0x6de38a[_0x434026(0x20f)]),0x1),_0x3255a6=Math['max'](Number(_0x6de38a[_0x434026(0x2d5)]),0x1),_0x2bd0fc=Math[_0x434026(0x225)](Number(_0x6de38a[_0x434026(0x1fd)]),0xa);let _0x4dbc5a=0x0;for(const _0x3484c4 of _0x5e3338){const _0x2762cf=$gameScreen[_0x434026(0x2a2)](_0x3484c4);if(!_0x2762cf)continue;_0x2762cf[_0x434026(0x1ee)](_0x5fed4d,_0x548fdc,_0x3255a6,_0x2bd0fc),_0x4dbc5a=_0x2762cf[_0x434026(0x16f)]();}if(_0x6de38a[_0x434026(0x223)]){const _0x85f6a1=$gameTemp[_0x434026(0x2a5)]();if(_0x85f6a1)_0x85f6a1[_0x434026(0x1c1)](_0x4dbc5a+0x1);}}),Game_Picture['prototype'][_0x332605(0x1ee)]=function(_0x130437,_0x2ce4a9,_0x3dc289,_0x1007f5){const _0x1fc666=_0x332605;_0x1007f5=_0x1007f5||0x3c,_0x1007f5=Math['max'](_0x1007f5,0xa),times=_0x1007f5,_0x2ce4a9=_0x2ce4a9??0x24,_0x3dc289=_0x3dc289??0x18,this['clearQueue'](),this[_0x1fc666(0x2d9)]({'targetTone':_0x130437[_0x1fc666(0x299)](),'toneDuration':_0x1007f5/0x4*0x6,'duration':0x0});const _0x36d577=times/0x2;while(times--){const _0x4bc9e8=0x1-Math['abs'](times-_0x36d577)/_0x36d577;this[_0x1fc666(0x2d9)]({'moveX':this['_x']+(Math[_0x1fc666(0x1b5)]()>0.5?-0x1:0x1)*Math[_0x1fc666(0x1d5)](Math['ceil'](_0x2ce4a9*_0x4bc9e8)),'moveY':this['_y']+(Math[_0x1fc666(0x1b5)]()>0.5?-0x1:0x1)*Math['randomInt'](Math[_0x1fc666(0x271)](_0x3dc289*_0x4bc9e8)),'duration':0x1,'easingType':'Linear'});}this[_0x1fc666(0x2d9)]({'targetTone':this[_0x1fc666(0x1ef)]?this[_0x1fc666(0x1ef)][_0x1fc666(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x1007f5/0xa*0x6,'moveX':this['_x'],'moveY':this['_y'],'duration':0x0});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x21d),_0x394b43=>{const _0x414c9b=_0x332605;VisuMZ['ConvertParams'](_0x394b43,_0x394b43);const _0x1b1ee5=_0x394b43['PictureIDs'];if(_0x1b1ee5[_0x414c9b(0x22c)]<=0x0)return;const _0x1094f7=Math[_0x414c9b(0x225)](Math[_0x414c9b(0x2c6)](Number(_0x394b43[_0x414c9b(0x247)]||0x1)),0x1),_0x217fc6={'x':Number(_0x394b43[_0x414c9b(0x217)]||0x0),'y':Number(_0x394b43[_0x414c9b(0x22f)]||0x0)},_0x583f72=_0x1b1ee5[_0x414c9b(0x22c)],_0xf6f7c6=Math['max'](Number(_0x394b43[_0x414c9b(0x1fd)]),0x1);let _0x54a9ae=0x0;for(const _0x43c96e of _0x1b1ee5){const _0x34326e=$gameScreen[_0x414c9b(0x2a2)](_0x43c96e);if(!_0x34326e)continue;const _0x56ca00=_0x1b1ee5[_0x414c9b(0x1ae)](_0x43c96e);_0x34326e['setupEffect_Arrange_Col'](_0x1094f7,_0x217fc6,_0x56ca00,_0x583f72,_0xf6f7c6),_0x54a9ae=_0x34326e[_0x414c9b(0x16f)]();}if(_0x394b43[_0x414c9b(0x223)]){const _0x30e110=$gameTemp[_0x414c9b(0x2a5)]();if(_0x30e110)_0x30e110[_0x414c9b(0x1c1)](_0x54a9ae+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x20d)]=function(_0x328cdd,_0x2d55bc,_0x3e616a,_0x350185,_0xbec150){const _0x2dcf99=_0x332605,_0x847da7=Math[_0x2dcf99(0x271)](_0x350185/_0x328cdd),_0x7b6129=Math['floor'](_0x3e616a/_0x328cdd),_0xcde14f=_0x3e616a%_0x328cdd,_0x225654=Graphics['width']*(_0x7b6129+0x1)/(_0x847da7+0x1);let _0x2b43ca=Graphics['height']*(_0xcde14f+0x1)/(_0x328cdd+0x1);if(_0x7b6129+0x1===_0x847da7){const _0x40467f=_0x350185-(_0x847da7-0x1)*_0x328cdd;_0x40467f!==0x0&&(_0x2b43ca=Graphics[_0x2dcf99(0x18a)]*(_0xcde14f+0x1)/(_0x40467f+0x1));}this['addToQueue']({'targetMoveX':_0x225654,'targetMoveY':_0x2b43ca,'targetAnchor':{'x':_0x2d55bc['x'],'y':_0x2d55bc['y']},'duration':_0xbec150,'easingType':'InOutSine'});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],'Arrange_Row',_0x376bca=>{const _0x4f95ab=_0x332605;VisuMZ[_0x4f95ab(0x2cc)](_0x376bca,_0x376bca);const _0x32fe17=_0x376bca['PictureIDs'];if(_0x32fe17[_0x4f95ab(0x22c)]<=0x0)return;const _0x2c677f=Math[_0x4f95ab(0x225)](Math['round'](Number(_0x376bca[_0x4f95ab(0x247)]||0x1)),0x1),_0x14047d={'x':Number(_0x376bca['AnchorX']||0x0),'y':Number(_0x376bca[_0x4f95ab(0x22f)]||0x0)},_0x3e1c17=_0x32fe17[_0x4f95ab(0x22c)],_0x334fb9=Math[_0x4f95ab(0x225)](Number(_0x376bca['Duration']),0x1);let _0xbf7ae3=0x0;for(const _0x514075 of _0x32fe17){const _0x547451=$gameScreen[_0x4f95ab(0x2a2)](_0x514075);if(!_0x547451)continue;const _0x39afe9=_0x32fe17[_0x4f95ab(0x1ae)](_0x514075);_0x547451[_0x4f95ab(0x186)](_0x2c677f,_0x14047d,_0x39afe9,_0x3e1c17,_0x334fb9),_0xbf7ae3=_0x547451[_0x4f95ab(0x16f)]();}if(_0x376bca[_0x4f95ab(0x223)]){const _0x459b64=$gameTemp['getLastPluginCommandInterpreter']();if(_0x459b64)_0x459b64[_0x4f95ab(0x1c1)](_0xbf7ae3+0x1);}}),Game_Picture['prototype'][_0x332605(0x186)]=function(_0xb7e8be,_0x38a0c5,_0x134b82,_0x4a34a6,_0x3ccd6a){const _0x46d3fd=_0x332605,_0x5225ff=Math[_0x46d3fd(0x271)](_0x4a34a6/_0xb7e8be),_0x495d7d=Math['floor'](_0x134b82/_0xb7e8be),_0x35436b=_0x134b82%_0xb7e8be,_0x434e98=Graphics['height']*(_0x495d7d+0x1)/(_0x5225ff+0x1);let _0x322cfb=Graphics[_0x46d3fd(0x1dd)]*(_0x35436b+0x1)/(_0xb7e8be+0x1);if(_0x495d7d+0x1===_0x5225ff){const _0x130cb8=_0x4a34a6-(_0x5225ff-0x1)*_0xb7e8be;_0x130cb8!==0x0&&(_0x322cfb=Graphics[_0x46d3fd(0x1dd)]*(_0x35436b+0x1)/(_0x130cb8+0x1));}this[_0x46d3fd(0x2d9)]({'targetMoveX':_0x322cfb,'targetMoveY':_0x434e98,'targetAnchor':{'x':_0x38a0c5['x'],'y':_0x38a0c5['y']},'duration':_0x3ccd6a,'easingType':'InOutSine'});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x1f8),_0x423170=>{const _0x586a76=_0x332605;VisuMZ[_0x586a76(0x2cc)](_0x423170,_0x423170);const _0x48ba98=_0x423170[_0x586a76(0x27b)];if(_0x48ba98[_0x586a76(0x22c)]<=0x0)return;const _0x3b8e35=Math['round'](Number(_0x423170[_0x586a76(0x250)]||0x0)),_0x37c146={'x':Number(_0x423170[_0x586a76(0x217)]||0x0),'y':Number(_0x423170[_0x586a76(0x22f)]||0x0)},_0x366c13=_0x48ba98['length'],_0x81fce0=Math[_0x586a76(0x225)](Number(_0x423170['Duration']),0x1);let _0x297ec1=0x0;for(const _0x570747 of _0x48ba98){const _0x4022a6=$gameScreen['picture'](_0x570747);if(!_0x4022a6)continue;const _0x2a6a2d=_0x48ba98[_0x586a76(0x1ae)](_0x570747);_0x4022a6[_0x586a76(0x26f)](_0x3b8e35,_0x37c146,_0x2a6a2d,_0x366c13,_0x81fce0),_0x297ec1=_0x4022a6['getTotalQueueDuration']();}if(_0x423170['Wait']){const _0xf3366a=$gameTemp['getLastPluginCommandInterpreter']();if(_0xf3366a)_0xf3366a[_0x586a76(0x1c1)](_0x297ec1+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_Arrange_Horz']=function(_0x2003e4,_0x4d33ac,_0x35add8,_0xebfdf3,_0x1adb53){const _0x5aa2eb=_0x332605,_0x579d42=Graphics['width']*(_0x35add8+0x1)/(_0xebfdf3+0x1);this[_0x5aa2eb(0x2d9)]({'targetMoveX':_0x579d42,'targetMoveY':_0x2003e4,'targetAnchor':{'x':_0x4d33ac['x'],'y':_0x4d33ac['y']},'duration':_0x1adb53,'easingType':_0x5aa2eb(0x214)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x29a),_0x4aa6eb=>{const _0xc4f663=_0x332605;VisuMZ[_0xc4f663(0x2cc)](_0x4aa6eb,_0x4aa6eb);const _0xefa370=_0x4aa6eb[_0xc4f663(0x27b)];if(_0xefa370[_0xc4f663(0x22c)]<=0x0)return;const _0x1d7570=Math[_0xc4f663(0x2c6)](Number(_0x4aa6eb[_0xc4f663(0x1c2)]||0x0)),_0x335688={'x':Number(_0x4aa6eb[_0xc4f663(0x217)]||0x0),'y':Number(_0x4aa6eb['AnchorY']||0x0)},_0x116a60=_0xefa370[_0xc4f663(0x22c)],_0xf2b5d=Math[_0xc4f663(0x225)](Number(_0x4aa6eb[_0xc4f663(0x1fd)]),0x1);let _0x1c118b=0x0;for(const _0xdf6eee of _0xefa370){const _0x5dba07=$gameScreen[_0xc4f663(0x2a2)](_0xdf6eee);if(!_0x5dba07)continue;const _0x496773=_0xefa370['indexOf'](_0xdf6eee);_0x5dba07[_0xc4f663(0x207)](_0x1d7570,_0x335688,_0x496773,_0x116a60,_0xf2b5d),_0x1c118b=_0x5dba07[_0xc4f663(0x16f)]();}if(_0x4aa6eb['Wait']){const _0x2061bf=$gameTemp['getLastPluginCommandInterpreter']();if(_0x2061bf)_0x2061bf['wait'](_0x1c118b+0x1);}}),Game_Picture['prototype'][_0x332605(0x207)]=function(_0x49f1a7,_0x55ff33,_0x3e55a8,_0x5e6de7,_0xc21fc1){const _0x328ed2=_0x332605,_0x478bf2=Graphics[_0x328ed2(0x18a)]*(_0x3e55a8+0x1)/(_0x5e6de7+0x1);this[_0x328ed2(0x2d9)]({'targetMoveX':_0x49f1a7,'targetMoveY':_0x478bf2,'targetAnchor':{'x':_0x55ff33['x'],'y':_0x55ff33['y']},'duration':_0xc21fc1,'easingType':_0x328ed2(0x214)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x22d),_0x31bcca=>{const _0x5b4038=_0x332605;VisuMZ['ConvertParams'](_0x31bcca,_0x31bcca);const _0x38cf41=_0x31bcca['PictureIDs'];if(_0x38cf41[_0x5b4038(0x22c)]<=0x0)return;const _0x1bc3cd=_0x31bcca['EffectIn']==='In',_0x529db6=_0x31bcca['Direction']==='From\x20Right';let _0x86375c=0x0;for(const _0x4daaf8 of _0x38cf41){const _0x4532b5=$gameScreen['picture'](_0x4daaf8);if(!_0x4532b5)continue;_0x4532b5[_0x5b4038(0x27f)](_0x1bc3cd,_0x529db6),_0x86375c=_0x4532b5[_0x5b4038(0x16f)]();}if(_0x31bcca['Wait']){const _0x48ee23=$gameTemp[_0x5b4038(0x2a5)]();if(_0x48ee23)_0x48ee23['wait'](_0x86375c+0x1);}}),Game_Picture['prototype']['setupEffect_BannerInOut']=function(_0x4a2ced,_0xe35ee0){const _0x446ac6=_0x332605;this[_0x446ac6(0x188)](),_0x4a2ced?(this['addToQueue']({'anchor':{'x':0.5,'y':0.5},'moveX':this['_x']+(_0xe35ee0?0x1:-0x1)*Graphics[_0x446ac6(0x1dd)],'scaleX':this[_0x446ac6(0x27c)]*1.2,'scaleY':this['_scaleX']*0.1,'opacity':0x0,'duration':0x0,'easingType':_0x446ac6(0x256)}),this['addToQueue']({'targetMoveX':this['_x'],'targetScaleX':this[_0x446ac6(0x27c)]*0.8,'targetScaleY':this['_scaleY']*1.2,'targetOpacity':0xc0,'duration':0x14}),this[_0x446ac6(0x2d9)]({'targetScaleX':this[_0x446ac6(0x27c)]*0x1,'targetScaleY':this[_0x446ac6(0x1de)]*0x1,'targetOpacity':0xff,'duration':0xa})):(this[_0x446ac6(0x2d9)]({'targetMoveX':this['_x'],'targetScaleX':this[_0x446ac6(0x27c)]*0.8,'targetScaleY':this['_scaleY']*1.2,'targetOpacity':0xc0,'duration':0xa,'easingType':_0x446ac6(0x256)}),this[_0x446ac6(0x2d9)]({'targetMoveX':this['_x']+(_0xe35ee0?-0x1:0x1)*Graphics['width'],'targetScaleX':this[_0x446ac6(0x27c)]*1.2,'targetScaleY':this[_0x446ac6(0x1de)]*0.1,'targetOpacity':0x0,'duration':0x14}));},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x2d0),_0x179cb6=>{const _0x35920e=_0x332605;VisuMZ[_0x35920e(0x2cc)](_0x179cb6,_0x179cb6);const _0x36ae3d=_0x179cb6[_0x35920e(0x27b)];if(_0x36ae3d[_0x35920e(0x22c)]<=0x0)return;const _0xd0d977=_0x179cb6[_0x35920e(0x1cc)]||[0x0,0x0,0x0,0x0],_0x34c12c=Math[_0x35920e(0x225)](Number(_0x179cb6['Duration']),0xa);let _0x36978b=0x0;for(const _0x4523ee of _0x36ae3d){const _0x32e669=$gameScreen[_0x35920e(0x2a2)](_0x4523ee);if(!_0x32e669)continue;_0x32e669[_0x35920e(0x17a)](_0xd0d977,_0x34c12c),_0x36978b=_0x32e669[_0x35920e(0x16f)]();}if(_0x179cb6[_0x35920e(0x223)]){const _0x1d3c82=$gameTemp['getLastPluginCommandInterpreter']();if(_0x1d3c82)_0x1d3c82[_0x35920e(0x1c1)](_0x36978b+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x17a)]=function(_0x43dea8,_0x57ef7e){const _0x2300c0=_0x332605;let _0x4d324c=_0x57ef7e-0x8;this[_0x2300c0(0x188)](),this[_0x2300c0(0x2d9)]({'targetTone':_0x43dea8[_0x2300c0(0x299)](),'toneDuration':_0x4d324c,'duration':0x0,'easingType':_0x2300c0(0x256)});while(_0x4d324c--){this[_0x2300c0(0x2d9)]({'moveX':this['_x']+Math[_0x2300c0(0x1d5)]((_0x4d324c%0x2===0x0?-0x1:0x1)*Math[_0x2300c0(0x183)](_0x57ef7e-_0x4d324c,0x10)),'moveY':this['_y']+Math[_0x2300c0(0x1d5)]((_0x4d324c%0x2===0x0?-0x1:0x1)*Math['min'](_0x57ef7e-_0x4d324c,0x8)),'duration':0x1,'easingType':_0x2300c0(0x256)});}this[_0x2300c0(0x2d9)]({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'duration':0x8,'easingType':'Linear'});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x1a5),_0x8eafa2=>{const _0x49ba68=_0x332605;VisuMZ[_0x49ba68(0x2cc)](_0x8eafa2,_0x8eafa2);const _0x3b7595=_0x8eafa2[_0x49ba68(0x27b)];if(_0x3b7595['length']<=0x0)return;const _0x342b5e=Number(_0x8eafa2[_0x49ba68(0x1a5)]),_0x539309=Math[_0x49ba68(0x225)](Number(_0x8eafa2['Duration']),0x1);let _0x244cf9=0x0;for(const _0x4d55a9 of _0x3b7595){const _0x57876c=$gameScreen[_0x49ba68(0x2a2)](_0x4d55a9);if(!_0x57876c)continue;_0x57876c['setupEffect_Blur'](_0x342b5e,_0x539309,_0x8eafa2[_0x49ba68(0x223)]),_0x244cf9=_0x57876c['getTotalQueueDuration']();}if(_0x8eafa2[_0x49ba68(0x223)]){const _0x4834f5=$gameTemp[_0x49ba68(0x2a5)]();if(_0x4834f5)_0x4834f5[_0x49ba68(0x1c1)](_0x244cf9+0x1);}}),Game_Picture['prototype']['setupEffect_Blur']=function(_0x4936c2,_0x1ce477,_0x493227){const _0x1e966e=_0x332605;this[_0x1e966e(0x188)](),this[_0x1e966e(0x2d9)]({'targetBlur':_0x4936c2,'blurDuration':_0x1ce477,'duration':_0x493227?_0x1ce477:0x0,'easingType':'Linear'});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x2f3),_0x40c0f8=>{const _0x9b6f96=_0x332605;VisuMZ[_0x9b6f96(0x2cc)](_0x40c0f8,_0x40c0f8);const _0x460657=_0x40c0f8[_0x9b6f96(0x27b)];if(_0x460657[_0x9b6f96(0x22c)]<=0x0)return;const _0x2d9aa4=Number(_0x40c0f8[_0x9b6f96(0x1d6)])||0x0,_0x2e0f1e=Number(_0x40c0f8[_0x9b6f96(0x16c)])||0x0,_0x1c729b=Number(_0x40c0f8['RateX'])||0x0,_0x4e52e1=Number(_0x40c0f8['RateY'])||0x0,_0x543e8b=Number(_0x40c0f8[_0x9b6f96(0x191)])||0x0,_0x5536d2=Math[_0x9b6f96(0x225)](Number(_0x40c0f8[_0x9b6f96(0x1fd)]),0x0);for(const _0x433934 of _0x460657){const _0x537472=$gameScreen[_0x9b6f96(0x2a2)](_0x433934);if(!_0x537472)continue;_0x537472[_0x9b6f96(0x1fe)](_0x2d9aa4,_0x2e0f1e,_0x1c729b,_0x4e52e1,_0x543e8b,_0x5536d2);}if(_0x40c0f8[_0x9b6f96(0x223)]&&_0x5536d2>0x0){const _0x32791e=$gameTemp[_0x9b6f96(0x2a5)]();if(_0x32791e)_0x32791e[_0x9b6f96(0x1c1)](_0x5536d2);}}),PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x2bd),_0x8fa2cb=>{const _0x531429=_0x332605;VisuMZ[_0x531429(0x2cc)](_0x8fa2cb,_0x8fa2cb);const _0x34c514=_0x8fa2cb['PictureIDs'];if(_0x34c514[_0x531429(0x22c)]<=0x0)return;const _0x4d8996=_0x8fa2cb[_0x531429(0x274)]||'';if(_0x4d8996==='')return;const _0x5eceef=Number(_0x8fa2cb[_0x531429(0x166)]),_0x440454=Number(_0x8fa2cb['Spazz']||0x0),_0x4274e9=_0x8fa2cb['Tone'],_0x44dc14=Math[_0x531429(0x225)](Number(_0x8fa2cb[_0x531429(0x25b)]),0x0),_0x3af231=Math[_0x531429(0x225)](Number(_0x8fa2cb['Duration']),0xa);let _0x36ab6f=0x0;for(const _0x50a69c of _0x34c514){const _0x36836d=$gameScreen[_0x531429(0x2a2)](_0x50a69c);if(!_0x36836d)continue;_0x36836d[_0x531429(0x2e0)](_0x4d8996,_0x5eceef,_0x440454,_0x4274e9,_0x44dc14,_0x3af231),_0x36ab6f=_0x36836d[_0x531429(0x16f)]();}if(_0x8fa2cb['Wait']){const _0x27b646=$gameTemp[_0x531429(0x2a5)]();if(_0x27b646)_0x27b646[_0x531429(0x1c1)](_0x36ab6f+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_Capsule_Burst']=function(_0x56d14a,_0x432ee5,_0x1279dd,_0x52cf1f,_0x1eb290,_0x37aafe){const _0x136866=_0x332605;ImageManager[_0x136866(0x1ca)](_0x56d14a),_0x37aafe=Math[_0x136866(0x225)](_0x37aafe||0x14,0x14);let _0x369a10=Math[_0x136866(0x2f9)](_0x37aafe/0x4);this[_0x136866(0x188)](),this['addToQueue']({'targetTone':_0x52cf1f[_0x136866(0x299)](),'toneDuration':_0x37aafe,'duration':0x0});const _0x1edccc=_0x369a10;while(_0x369a10--){const _0x35f61c=0x1-(0x1-_0x432ee5)*((_0x1edccc-_0x369a10)/_0x1edccc);this[_0x136866(0x2d9)]({'targetMoveX':this['_x']+(Math[_0x136866(0x1b5)]()>0.5?-0x1:0x1)*_0x1279dd,'targetMoveY':this['_y']+(Math[_0x136866(0x1b5)]()>0.5?-0x1:0x1)*_0x1279dd,'targetScaleX':this[_0x136866(0x27c)]*_0x35f61c,'targetScaleY':this['_scaleY']*_0x35f61c,'targetAngle':this[_0x136866(0x2bc)]()+(_0x369a10%0x2===0x0?-0x1:0x1)*_0x1eb290,'duration':0x4});}this[_0x136866(0x2d9)]({'filename':_0x56d14a,'moveX':this['_x'],'moveY':this['_y'],'scaleX':this[_0x136866(0x27c)],'scaleY':this[_0x136866(0x1de)],'currentAngle':this['anglePlus'](),'duration':0x0,'targetTone':[0x0,0x0,0x0,0x0],'toneDuration':_0x37aafe/0x3,'easingType':_0x136866(0x256)});},PluginManager['registerCommand'](pluginData[_0x332605(0x1af)],_0x332605(0x172),_0x4694df=>{const _0x29463f=_0x332605;VisuMZ['ConvertParams'](_0x4694df,_0x4694df);const _0x5bf910=_0x4694df[_0x29463f(0x27b)];if(_0x5bf910['length']<=0x0)return;const _0x18a5e0=_0x4694df['BackFilename']||'',_0x2e6e78=_0x4694df['BackMirror'],_0xa065e4=Math[_0x29463f(0x225)](_0x4694df[_0x29463f(0x1fd)]||0xa,0xa);let _0x40604f=0x0;for(const _0x2b2f84 of _0x5bf910){const _0x4916a4=$gameScreen[_0x29463f(0x2a2)](_0x2b2f84);if(!_0x4916a4)continue;_0x4916a4['setupEffect_Card_Flip'](_0x18a5e0,_0x2e6e78,_0xa065e4),_0x40604f=_0x4916a4[_0x29463f(0x16f)]();}if(_0x4694df['Wait']){const _0x543f1d=$gameTemp['getLastPluginCommandInterpreter']();if(_0x543f1d)_0x543f1d['wait'](_0x40604f+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_Card_Flip']=function(_0x4d4619,_0x1fa510,_0x31995f){const _0x2ecbb8=_0x332605;_0x4d4619=_0x4d4619||'',_0x31995f=Math[_0x2ecbb8(0x225)](_0x31995f||0xa,0xa);if(_0x4d4619!=='')ImageManager[_0x2ecbb8(0x1ca)](_0x4d4619);this[_0x2ecbb8(0x188)](),this[_0x2ecbb8(0x2d9)]({'targetScaleX':0x0,'duration':Math['floor'](_0x31995f/0x2),'easingType':_0x2ecbb8(0x256)}),_0x4d4619!==''?this[_0x2ecbb8(0x2d9)]({'filename':_0x4d4619,'targetScaleX':Math[_0x2ecbb8(0x202)](this[_0x2ecbb8(0x27c)])*(_0x1fa510?-0x1:0x1),'duration':Math[_0x2ecbb8(0x271)](_0x31995f/0x2),'easingType':'Linear'}):this[_0x2ecbb8(0x2d9)]({'targetScaleX':this['_scaleX']*-0x1,'duration':Math[_0x2ecbb8(0x271)](_0x31995f/0x2),'easingType':'Linear'});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x187),_0x41e324=>{const _0x329cf4=_0x332605;VisuMZ[_0x329cf4(0x2cc)](_0x41e324,_0x41e324);const _0x9949ae=_0x41e324[_0x329cf4(0x27b)];if(_0x9949ae[_0x329cf4(0x22c)]<=0x0)return;const _0x3e4da3=Math[_0x329cf4(0x225)](Number(_0x41e324[_0x329cf4(0x166)]),0x0),_0x494974=_0x41e324[_0x329cf4(0x1cc)]||[0x0,0x0,0x0,0x0],_0x49a073=Math[_0x329cf4(0x225)](Number(_0x41e324['Duration']),0x1);let _0xfc97cf=0x0;for(const _0x43cca3 of _0x9949ae){const _0x1f5980=$gameScreen[_0x329cf4(0x2a2)](_0x43cca3);if(!_0x1f5980)continue;_0x1f5980[_0x329cf4(0x1f5)](_0x3e4da3,_0x494974,_0x49a073),_0xfc97cf=_0x1f5980[_0x329cf4(0x16f)]();}if(_0x41e324['Wait']){const _0x46fd1a=$gameTemp[_0x329cf4(0x2a5)]();if(_0x46fd1a)_0x46fd1a['wait'](_0xfc97cf+0x1);}}),Game_Picture['prototype'][_0x332605(0x1f5)]=function(_0x1f522e,_0xadb3d5,_0xe0b670){const _0x416761=_0x332605,_0xfcfd82=Math[_0x416761(0x2f9)](_0xe0b670/0x5);this[_0x416761(0x188)](),this[_0x416761(0x2d9)]({'targetScaleX':this[_0x416761(0x27c)]*_0x1f522e,'targetScaleY':this[_0x416761(0x1de)]*_0x1f522e,'duration':_0xfcfd82*0x3,'targetTone':_0xadb3d5[_0x416761(0x299)](),'toneDuration':_0xfcfd82*0x1,'easingType':_0x416761(0x214)}),this[_0x416761(0x2d9)]({'targetScaleX':this[_0x416761(0x27c)],'targetScaleY':this['_scaleY'],'duration':_0xe0b670-_0xfcfd82*0x3,'targetTone':this[_0x416761(0x1ef)]?this[_0x416761(0x1ef)][_0x416761(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':_0xfcfd82,'easingType':_0x416761(0x214)});},PluginManager[_0x332605(0x242)](pluginData['name'],_0x332605(0x2df),_0x480223=>{const _0x5cf027=_0x332605;VisuMZ['ConvertParams'](_0x480223,_0x480223);const _0x4ff7e1=_0x480223[_0x5cf027(0x27b)];if(_0x4ff7e1['length']<=0x0)return;const _0x384420=Math[_0x5cf027(0x225)](_0x480223[_0x5cf027(0x206)],0x1),_0x4239fa=_0x480223[_0x5cf027(0x1cc)],_0x38d204=Math[_0x5cf027(0x225)](_0x480223[_0x5cf027(0x170)],0x0),_0x518e20=Math[_0x5cf027(0x225)](_0x480223[_0x5cf027(0x25b)],0x0);let _0x7724d9=0x0;for(const _0xf5e0cc of _0x4ff7e1){const _0x4ac6ec=$gameScreen[_0x5cf027(0x2a2)](_0xf5e0cc);if(!_0x4ac6ec)continue;_0x4ac6ec[_0x5cf027(0x2b5)](_0x384420,_0x4239fa,_0x38d204,_0x518e20),_0x7724d9=_0x4ac6ec[_0x5cf027(0x16f)]();}if(_0x480223[_0x5cf027(0x223)]){const _0x292581=$gameTemp['getLastPluginCommandInterpreter']();if(_0x292581)_0x292581['wait'](_0x7724d9+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x2b5)]=function(_0x55ad2f,_0x123213,_0x4b5781,_0x27d10a){const _0x4cf7eb=_0x332605;_0x55ad2f=_0x55ad2f||0xa,_0x4b5781=_0x4b5781??0xa,_0x27d10a=_0x27d10a??0xa,this[_0x4cf7eb(0x188)](),this[_0x4cf7eb(0x2d9)]({'targetTone':_0x123213['clone'](),'toneDuration':_0x55ad2f/0x3*0x6,'duration':0x0});let _0xef0723=_0x55ad2f;while(_0x55ad2f--){this[_0x4cf7eb(0x2d9)]({'targetMoveX':this['_x']+(Math[_0x4cf7eb(0x1b5)]()>0.5?-0x1:0x1)*(Math['randomInt'](_0x4b5781)+0x1),'targetMoveY':this['_y']+(Math['random']()>0.5?-0x1:0x1)*(Math[_0x4cf7eb(0x1d5)](_0x4b5781)+0x1),'targetAngle':this[_0x4cf7eb(0x2bc)]()+Math[_0x4cf7eb(0x1d5)](_0x27d10a),'duration':0x2,'easingType':_0x4cf7eb(0x256)}),this[_0x4cf7eb(0x2d9)]({'targetMoveX':this['_x']+(Math[_0x4cf7eb(0x1b5)]()>0.5?-0x1:0x1)*(Math[_0x4cf7eb(0x1d5)](_0x4b5781)+0x1),'targetMoveY':this['_y']+(Math['random']()>0.5?-0x1:0x1)*(Math[_0x4cf7eb(0x1d5)](_0x4b5781)+0x1),'targetAngle':this[_0x4cf7eb(0x2bc)]()-Math[_0x4cf7eb(0x1d5)](_0x27d10a),'duration':0x4,'easingType':_0x4cf7eb(0x256)});}this[_0x4cf7eb(0x2d9)]({'targetTone':this[_0x4cf7eb(0x1ef)]?this[_0x4cf7eb(0x1ef)][_0x4cf7eb(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':_0xef0723/0x3*0x6,'targetMoveX':this['_x'],'targetMoveY':this['_y'],'targetAngle':this[_0x4cf7eb(0x2bc)](),'duration':0x2,'easingType':'Linear'});},PluginManager[_0x332605(0x242)](pluginData['name'],_0x332605(0x1ea),_0x192316=>{const _0x1ebab4=_0x332605;VisuMZ['ConvertParams'](_0x192316,_0x192316);const _0x5c279e=_0x192316['PictureIDs'];if(_0x5c279e[_0x1ebab4(0x22c)]<=0x0)return;const _0x1346af=Math[_0x1ebab4(0x225)](Number(_0x192316[_0x1ebab4(0x206)]),0x1),_0x55bd0d=Math['max'](Number(_0x192316[_0x1ebab4(0x20f)]),0x1),_0x14c4de=Math['max'](Number(_0x192316[_0x1ebab4(0x2d5)]),0x1),_0x27796c=Math[_0x1ebab4(0x225)](Number(_0x192316[_0x1ebab4(0x1e8)]),0x1);let _0x38806e=0x0;for(const _0x4c9ed7 of _0x5c279e){const _0x4474d8=$gameScreen[_0x1ebab4(0x2a2)](_0x4c9ed7);if(!_0x4474d8)continue;_0x4474d8[_0x1ebab4(0x24e)](_0x1346af,_0x55bd0d,_0x14c4de,_0x27796c),_0x38806e=_0x4474d8[_0x1ebab4(0x16f)]();}if(_0x192316[_0x1ebab4(0x223)]){const _0x5077e0=$gameTemp[_0x1ebab4(0x2a5)]();if(_0x5077e0)_0x5077e0['wait'](_0x38806e+0x1);}}),Game_Picture['prototype'][_0x332605(0x24e)]=function(_0x41852e,_0x157811,_0x3cab81,_0x764313){const _0x11455f=_0x332605;this['clearQueue']();while(_0x41852e--){let _0x12bf8b=[0x1,0x2,0x3,0x4,0x6,0x7,0x8,0x9],_0x28b7f1=-0x1;while(_0x12bf8b['length']>0x0){_0x28b7f1*=-0x1;const _0x2af5e9=_0x12bf8b[Math[_0x11455f(0x1d5)](_0x12bf8b[_0x11455f(0x22c)])];_0x12bf8b[_0x11455f(0x193)](_0x2af5e9);switch(_0x2af5e9){case 0x1:this['addToQueue']({'targetMoveX':this['_x'],'targetMoveY':this['_y']+_0x3cab81,'targetAngle':this['anglePlus']()+_0x764313*_0x28b7f1,'duration':0xa,'easingType':_0x11455f(0x214)});break;case 0x2:this[_0x11455f(0x2d9)]({'targetMoveX':this['_x']-_0x157811*0.7071,'targetMoveY':this['_y']+_0x3cab81*0.7071,'targetAngle':this[_0x11455f(0x2bc)]()+_0x764313*_0x28b7f1,'duration':0xa,'easingType':_0x11455f(0x214)});break;case 0x3:this[_0x11455f(0x2d9)]({'targetMoveX':this['_x']-_0x157811,'targetMoveY':this['_y'],'targetAngle':this[_0x11455f(0x2bc)]()+_0x764313*_0x28b7f1,'duration':0xa,'easingType':_0x11455f(0x214)});break;case 0x4:this['addToQueue']({'targetMoveX':this['_x']-_0x157811*0.7071,'targetMoveY':this['_y']-_0x3cab81*0.7071,'targetAngle':this[_0x11455f(0x2bc)]()+_0x764313*_0x28b7f1,'duration':0xa,'easingType':_0x11455f(0x214)});break;case 0x6:this[_0x11455f(0x2d9)]({'targetMoveX':this['_x'],'targetMoveY':this['_y']-_0x3cab81,'targetAngle':this[_0x11455f(0x2bc)]()+_0x764313*_0x28b7f1,'duration':0xa,'easingType':_0x11455f(0x214)});break;case 0x7:this[_0x11455f(0x2d9)]({'targetMoveX':this['_x']+_0x157811*0.7071,'targetMoveY':this['_y']-_0x3cab81*0.7071,'targetAngle':this[_0x11455f(0x2bc)]()+_0x764313*_0x28b7f1,'duration':0xa,'easingType':'InOutSine'});break;case 0x8:this[_0x11455f(0x2d9)]({'targetMoveX':this['_x']+_0x157811,'targetMoveY':this['_y'],'targetAngle':this[_0x11455f(0x2bc)]()+_0x764313*_0x28b7f1,'duration':0xa,'easingType':'InOutSine'});break;case 0x9:this['addToQueue']({'targetMoveX':this['_x']+_0x157811*0.7071,'targetMoveY':this['_y']+_0x3cab81*0.7071,'targetAngle':this[_0x11455f(0x2bc)]()+_0x764313*_0x28b7f1,'duration':0xa,'easingType':'InOutSine'});break;}}}this[_0x11455f(0x2d9)]({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'targetAngle':this[_0x11455f(0x2bc)](),'duration':0x14,'easingType':_0x11455f(0x1c4)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x216),_0x40e811=>{const _0x12abe7=_0x332605;VisuMZ[_0x12abe7(0x2cc)](_0x40e811,_0x40e811);const _0x5738fe=_0x40e811['PictureIDs'];if(_0x5738fe['length']<=0x0)return;const _0x3b2e06=_0x40e811['Tone'],_0x8ca1b6=Math[_0x12abe7(0x225)](Number(_0x40e811['DistanceX']),0x1),_0x56fbcf=Math[_0x12abe7(0x225)](Number(_0x40e811[_0x12abe7(0x2d5)]),0x1),_0x2a8072=Math[_0x12abe7(0x225)](Number(_0x40e811[_0x12abe7(0x1fd)]),0xa);let _0x35541a=0x0;for(const _0x3615bc of _0x5738fe){const _0x1b9b8e=$gameScreen[_0x12abe7(0x2a2)](_0x3615bc);if(!_0x1b9b8e)continue;_0x1b9b8e[_0x12abe7(0x192)](_0x3b2e06,_0x8ca1b6,_0x56fbcf,_0x2a8072),_0x35541a=_0x1b9b8e[_0x12abe7(0x16f)]();}if(_0x40e811[_0x12abe7(0x223)]){const _0x80b1e5=$gameTemp[_0x12abe7(0x2a5)]();if(_0x80b1e5)_0x80b1e5[_0x12abe7(0x1c1)](_0x35541a+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x192)]=function(_0x57f8d7,_0x31e2ab,_0x39c9b7,_0x3a2735){const _0x5d04ae=_0x332605;_0x3a2735=_0x3a2735||0x3c,_0x3a2735=Math[_0x5d04ae(0x225)](_0x3a2735,0xa),times=_0x3a2735,_0x31e2ab=_0x31e2ab??0x30,_0x39c9b7=_0x39c9b7??0xc,this[_0x5d04ae(0x188)](),this[_0x5d04ae(0x2d9)]({'tone':[0x80,0x80,0x80,0x80],'targetTone':_0x57f8d7[_0x5d04ae(0x299)](),'toneDuration':_0x3a2735/0x3,'duration':0x0});while(times--){const _0x255f5b=times/_0x3a2735;this[_0x5d04ae(0x2d9)]({'moveX':this['_x']+(times%0x2===0x0?-0x1:0x1)*Math[_0x5d04ae(0x1d5)](Math['ceil'](_0x31e2ab*_0x255f5b)),'moveY':this['_y']+(times%0x2===0x0?-0x1:0x1)*Math[_0x5d04ae(0x1d5)](Math[_0x5d04ae(0x271)](_0x39c9b7*_0x255f5b)),'duration':0x1,'easingType':_0x5d04ae(0x256)});}this[_0x5d04ae(0x2d9)]({'targetTone':this[_0x5d04ae(0x1ef)]?this[_0x5d04ae(0x1ef)][_0x5d04ae(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x3a2735/0xa*0x6,'moveX':this['_x'],'moveY':this['_y'],'duration':0x0});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x27a),_0x254878=>{const _0x450b7c=_0x332605;VisuMZ['ConvertParams'](_0x254878,_0x254878);const _0x254eec=_0x254878[_0x450b7c(0x27b)];if(_0x254eec['length']<=0x0)return;const _0x3e057f=Number(_0x254878[_0x450b7c(0x20f)]),_0x392ca4=Number(_0x254878['DistanceY']),_0x132b93=Math[_0x450b7c(0x225)](Number(_0x254878[_0x450b7c(0x1fd)]),0x0);for(const _0x3df95c of _0x254eec){const _0x538eeb=$gameScreen[_0x450b7c(0x2a2)](_0x3df95c);if(!_0x538eeb)continue;_0x538eeb[_0x450b7c(0x264)](_0x3e057f,_0x392ca4,_0x132b93);}if(_0x254878['Wait']&&_0x132b93>0x0){const _0x1a29ca=$gameTemp['getLastPluginCommandInterpreter']();if(_0x1a29ca)_0x1a29ca[_0x450b7c(0x1c1)](_0x132b93);}}),PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x1a3),_0x31ca0b=>{const _0x288d82=_0x332605;VisuMZ['ConvertParams'](_0x31ca0b,_0x31ca0b);const _0x19b865=_0x31ca0b[_0x288d82(0x27b)];if(_0x19b865[_0x288d82(0x22c)]<=0x0)return;const _0x2fb0cc=Math[_0x288d82(0x225)](Number(_0x31ca0b[_0x288d82(0x206)]),0x1),_0x53c1ff=Math['max'](Number(_0x31ca0b['DistanceX']),0x1),_0x490617=Math[_0x288d82(0x225)](Number(_0x31ca0b['DistanceY']),0x1),_0x1e4542=Math[_0x288d82(0x225)](Number(_0x31ca0b[_0x288d82(0x1e8)]),0x1);let _0x103520=0x0;for(const _0x23b846 of _0x19b865){const _0x3c27aa=$gameScreen[_0x288d82(0x2a2)](_0x23b846);if(!_0x3c27aa)continue;_0x3c27aa[_0x288d82(0x211)](_0x2fb0cc,_0x53c1ff,_0x490617,_0x1e4542),_0x103520=_0x3c27aa[_0x288d82(0x16f)]();}if(_0x31ca0b[_0x288d82(0x223)]){const _0x2858a4=$gameTemp[_0x288d82(0x2a5)]();if(_0x2858a4)_0x2858a4[_0x288d82(0x1c1)](_0x103520+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x211)]=function(_0x2172bc,_0x340ec2,_0x52621d,_0x151684){const _0x4a1f2d=_0x332605;this[_0x4a1f2d(0x188)]();while(_0x2172bc--){this['addToQueue']({'targetMoveX':this['_x'],'targetMoveY':this['_y']+_0x52621d,'targetAngle':this[_0x4a1f2d(0x2bc)]()-_0x151684,'duration':0xa,'easingType':_0x4a1f2d(0x214)}),this['addToQueue']({'targetMoveX':this['_x']-_0x340ec2*0.7071,'targetMoveY':this['_y']+_0x52621d*0.7071,'targetAngle':this[_0x4a1f2d(0x2bc)]()+_0x151684,'duration':0xa,'easingType':_0x4a1f2d(0x214)}),this[_0x4a1f2d(0x2d9)]({'targetMoveX':this['_x']-_0x340ec2,'targetMoveY':this['_y'],'targetAngle':this[_0x4a1f2d(0x2bc)]()-_0x151684,'duration':0xa,'easingType':_0x4a1f2d(0x214)}),this[_0x4a1f2d(0x2d9)]({'targetMoveX':this['_x']-_0x340ec2*0.7071,'targetMoveY':this['_y']-_0x52621d*0.7071,'targetAngle':this[_0x4a1f2d(0x2bc)]()+_0x151684,'duration':0xa,'easingType':_0x4a1f2d(0x214)}),this[_0x4a1f2d(0x2d9)]({'targetMoveX':this['_x'],'targetMoveY':this['_y']-_0x52621d,'targetAngle':this['anglePlus']()-_0x151684,'duration':0xa,'easingType':'InOutSine'}),this[_0x4a1f2d(0x2d9)]({'targetMoveX':this['_x']+_0x340ec2*0.7071,'targetMoveY':this['_y']-_0x52621d*0.7071,'targetAngle':this[_0x4a1f2d(0x2bc)]()+_0x151684,'duration':0xa,'easingType':_0x4a1f2d(0x214)}),this[_0x4a1f2d(0x2d9)]({'targetMoveX':this['_x']+_0x340ec2,'targetMoveY':this['_y'],'targetAngle':this[_0x4a1f2d(0x2bc)]()-_0x151684,'duration':0xa,'easingType':'InOutSine'}),this[_0x4a1f2d(0x2d9)]({'targetMoveX':this['_x']+_0x340ec2*0.7071,'targetMoveY':this['_y']+_0x52621d*0.7071,'targetAngle':this[_0x4a1f2d(0x2bc)]()+_0x151684,'duration':0xa,'easingType':_0x4a1f2d(0x214)});}this[_0x4a1f2d(0x2d9)]({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'targetAngle':this[_0x4a1f2d(0x2bc)](),'duration':0x14,'easingType':'OutBack'});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x19a),_0x577c7d=>{const _0x44d69b=_0x332605;VisuMZ['ConvertParams'](_0x577c7d,_0x577c7d);const _0x5371aa=_0x577c7d[_0x44d69b(0x27b)];if(_0x5371aa[_0x44d69b(0x22c)]<=0x0)return;const _0x4db05e=_0x577c7d['EffectIn']==='In',_0x5448f2=Math[_0x44d69b(0x225)](Number(_0x577c7d[_0x44d69b(0x2f2)]),0x1),_0xd2d80a=Math['max'](Number(_0x577c7d[_0x44d69b(0x1fd)]),0x1);let _0x438d8b=0x0;for(const _0x6dc99 of _0x5371aa){const _0x1ed54f=$gameScreen[_0x44d69b(0x2a2)](_0x6dc99);if(!_0x1ed54f)continue;_0x1ed54f[_0x44d69b(0x218)](_0x4db05e,_0x5448f2,_0xd2d80a),_0x438d8b=_0x1ed54f[_0x44d69b(0x16f)]();}if(_0x577c7d[_0x44d69b(0x223)]){const _0x949b35=$gameTemp[_0x44d69b(0x2a5)]();if(_0x949b35)_0x949b35[_0x44d69b(0x1c1)](_0x438d8b+0x1);}}),Game_Picture['prototype'][_0x332605(0x218)]=function(_0x17a4cf,_0x3012c1,_0x48094c){const _0x4aa31c=_0x332605;_0x3012c1=_0x3012c1||0x60,_0x48094c=_0x48094c||0x3c,this['clearQueue'](),_0x17a4cf?(this[_0x4aa31c(0x2d9)]({'moveY':this['_y']-_0x3012c1,'scaleX':this['_scaleX']*0.9,'scaleY':this[_0x4aa31c(0x1de)]*1.2,'opacity':0x0,'duration':0x0,'easingType':_0x4aa31c(0x256)}),this['addToQueue']({'targetMoveY':this['_y'],'targetScaleX':this[_0x4aa31c(0x27c)],'targetScaleY':this['_scaleY'],'targetOpacity':this[_0x4aa31c(0x1cd)]||0xff,'duration':_0x48094c,'easingType':_0x4aa31c(0x1c4)})):this['addToQueue']({'targetMoveY':this['_y']+_0x3012c1,'targetOpacity':0x0,'duration':_0x48094c,'easingType':_0x4aa31c(0x2c3)});},PluginManager[_0x332605(0x242)](pluginData['name'],_0x332605(0x23d),_0x554373=>{const _0x49ee82=_0x332605;VisuMZ['ConvertParams'](_0x554373,_0x554373);const _0xd5ba71=_0x554373[_0x49ee82(0x27b)];if(_0xd5ba71[_0x49ee82(0x22c)]<=0x0)return;const _0x146654=_0x554373['Tone1'],_0x4b09e0=_0x554373[_0x49ee82(0x1c7)],_0x2f61d7=Math['max'](_0x554373[_0x49ee82(0x170)],0x0),_0x5d1c74=Math[_0x49ee82(0x225)](Number(_0x554373[_0x49ee82(0x1fd)]),0xa);let _0x21aab0=0x0;for(const _0x55d8b0 of _0xd5ba71){const _0x3a0649=$gameScreen['picture'](_0x55d8b0);if(!_0x3a0649)continue;_0x3a0649[_0x49ee82(0x1ce)](_0x146654,_0x4b09e0,_0x2f61d7,_0x5d1c74),_0x21aab0=_0x3a0649['getTotalQueueDuration']();}if(_0x554373[_0x49ee82(0x223)]){const _0x4c13b6=$gameTemp[_0x49ee82(0x2a5)]();if(_0x4c13b6)_0x4c13b6[_0x49ee82(0x1c1)](_0x21aab0+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_Electrocuted']=function(_0x19f7d0,_0x4cc931,_0x2bec35,_0x37c741){const _0x11283e=_0x332605;_0x37c741=_0x37c741||0x3c,_0x37c741=Math[_0x11283e(0x225)](_0x37c741,0xa),times=_0x37c741,_0x2bec35=_0x2bec35??0xa,this['clearQueue']();while(times--){this[_0x11283e(0x2d9)]({'moveX':this['_x']+(Math['random']()>0.5?-0x1:0x1)*(Math[_0x11283e(0x1d5)](_0x2bec35)+0x1),'moveY':this['_y']+(Math[_0x11283e(0x1b5)]()>0.5?-0x1:0x1)*(Math[_0x11283e(0x1d5)](_0x2bec35)+0x1),'tone':(times%0x6>=0x3?_0x19f7d0:_0x4cc931)['clone'](),'duration':0x1,'easingType':_0x11283e(0x256)});}this['addToQueue']({'targetTone':this[_0x11283e(0x1ef)]?this[_0x11283e(0x1ef)]['clone']():[0x0,0x0,0x0,0x0],'toneDuration':_0x37c741/0xa*0x6,'targetMoveX':this['_x'],'targetMoveY':this['_y'],'duration':0x0,'easingType':'Linear'});},PluginManager['registerCommand'](pluginData[_0x332605(0x1af)],_0x332605(0x25f),_0x190cdd=>{const _0x5afd10=_0x332605;VisuMZ['ConvertParams'](_0x190cdd,_0x190cdd);const _0x15c8df=_0x190cdd[_0x5afd10(0x27b)];if(_0x15c8df[_0x5afd10(0x22c)]<=0x0)return;const _0x4f9f3f=_0x190cdd[_0x5afd10(0x1e5)]==='In',_0x54bb9a=Math['max'](Number(_0x190cdd[_0x5afd10(0x1fd)]),0x1);let _0x5db997=0x0;for(const _0x213495 of _0x15c8df){const _0x356324=$gameScreen[_0x5afd10(0x2a2)](_0x213495);if(!_0x356324)continue;_0x356324[_0x5afd10(0x2a1)](_0x4f9f3f,_0x54bb9a),_0x5db997=_0x356324[_0x5afd10(0x16f)]();}if(_0x190cdd[_0x5afd10(0x223)]){const _0x45fcb6=$gameTemp['getLastPluginCommandInterpreter']();if(_0x45fcb6)_0x45fcb6['wait'](_0x5db997+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_ExpandInOut']=function(_0x18bfad,_0xc31514){const _0x1c91a4=_0x332605;_0xc31514=_0xc31514||0x14,this[_0x1c91a4(0x188)](),_0x18bfad?(this[_0x1c91a4(0x2d9)]({'scaleX':this['_scaleX']*0.05,'scaleY':this[_0x1c91a4(0x1de)]*0.05,'opacity':0x0,'duration':0x0,'easingType':_0x1c91a4(0x256)}),this[_0x1c91a4(0x2d9)]({'targetScaleX':this[_0x1c91a4(0x27c)],'targetScaleY':this[_0x1c91a4(0x1de)],'targetOpacity':this['_opacity']||0xff,'duration':_0xc31514,'easingType':_0x1c91a4(0x214)})):this[_0x1c91a4(0x2d9)]({'targetScaleX':this['_scaleX']*0x4,'targetScaleY':this[_0x1c91a4(0x1de)]*0x4,'targetOpacity':0x0,'duration':_0xc31514,'easingType':'InOutSine'});},PluginManager['registerCommand'](pluginData[_0x332605(0x1af)],_0x332605(0x300),_0x1e4971=>{const _0x5069c2=_0x332605;VisuMZ['ConvertParams'](_0x1e4971,_0x1e4971);const _0x233f6d=_0x1e4971[_0x5069c2(0x27b)];if(_0x233f6d[_0x5069c2(0x22c)]<=0x0)return;const _0x11458c=_0x1e4971[_0x5069c2(0x274)]||'';if(_0x11458c==='')return;const _0x936d5b=Math[_0x5069c2(0x225)](Number(_0x1e4971[_0x5069c2(0x1fd)]),0xa);let _0x4cd56f=0x0;for(const _0x465a9f of _0x233f6d){const _0x9e5787=$gameScreen[_0x5069c2(0x2a2)](_0x465a9f);if(!_0x9e5787)continue;_0x9e5787[_0x5069c2(0x175)](_0x11458c,_0x936d5b),_0x4cd56f=_0x9e5787[_0x5069c2(0x16f)]();}if(_0x1e4971[_0x5069c2(0x223)]){const _0x3e0b03=$gameTemp[_0x5069c2(0x2a5)]();if(_0x3e0b03)_0x3e0b03['wait'](_0x4cd56f+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x175)]=function(_0x52d907,_0x1d2aa1){const _0x35427c=_0x332605;ImageManager[_0x35427c(0x1ca)](_0x52d907),this[_0x35427c(0x188)](),this['addToQueue']({'targetOpacity':0x0,'duration':Math['ceil'](_0x1d2aa1/0x2),'easingType':_0x35427c(0x214)}),this['addToQueue']({'filename':_0x52d907,'targetOpacity':this[_0x35427c(0x1cd)]||0xff,'duration':Math['floor'](_0x1d2aa1/0x2),'easingType':_0x35427c(0x214)});},PluginManager[_0x332605(0x242)](pluginData['name'],_0x332605(0x219),_0x549f08=>{const _0x4f726d=_0x332605;VisuMZ[_0x4f726d(0x2cc)](_0x549f08,_0x549f08);const _0x1bb504=_0x549f08[_0x4f726d(0x27b)];if(_0x1bb504[_0x4f726d(0x22c)]<=0x0)return;const _0x350a50=_0x549f08[_0x4f726d(0x1e5)]==='In',_0xa4fe79=Math[_0x4f726d(0x225)](Number(_0x549f08[_0x4f726d(0x1fd)]),0x1);let _0x29ce13=0x0;for(const _0x5a2eeb of _0x1bb504){const _0x3d1164=$gameScreen[_0x4f726d(0x2a2)](_0x5a2eeb);if(!_0x3d1164)continue;_0x3d1164[_0x4f726d(0x2bf)](_0x350a50,_0xa4fe79),_0x29ce13=_0x3d1164[_0x4f726d(0x16f)]();}if(_0x549f08['Wait']){const _0x29e9ad=$gameTemp[_0x4f726d(0x2a5)]();if(_0x29e9ad)_0x29e9ad['wait'](_0x29ce13+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x2bf)]=function(_0x1f3aa3,_0x49d792){const _0x49a378=_0x332605;_0x49d792=_0x49d792||0x3c,this['clearQueue'](),_0x1f3aa3?(this['addToQueue']({'opacity':0x0,'duration':0x0}),this[_0x49a378(0x2d9)]({'targetOpacity':this[_0x49a378(0x1cd)]||0xff,'duration':_0x49d792,'easingType':_0x49a378(0x17f)})):this[_0x49a378(0x2d9)]({'targetOpacity':0x0,'duration':_0x49d792,'easingType':_0x49a378(0x17f)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x290),_0x334681=>{const _0x2a6c72=_0x332605;VisuMZ[_0x2a6c72(0x2cc)](_0x334681,_0x334681);const _0x42922f=_0x334681[_0x2a6c72(0x27b)];if(_0x42922f['length']<=0x0)return;const _0x2e0998=Number(_0x334681['Z'])||0x0,_0x5c5162=Math['max'](Number(_0x334681['Duration']),0x1);let _0x516896=0x0;for(const _0xfdadd of _0x42922f){const _0x5da1ac=$gameScreen['picture'](_0xfdadd);if(!_0x5da1ac)continue;_0x5da1ac[_0x2a6c72(0x2c9)](_0x2e0998,_0x5c5162),_0x516896=_0x5da1ac[_0x2a6c72(0x16f)]();}if(_0x334681[_0x2a6c72(0x223)]){const _0x2e8737=$gameTemp[_0x2a6c72(0x2a5)]();if(_0x2e8737)_0x2e8737[_0x2a6c72(0x1c1)](_0x516896+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x2c9)]=function(_0x527677,_0x3e5f93){const _0x1e91fc=_0x332605;this['clearQueue'](),this['addToQueue']({'targetOpacity':0x0,'duration':Math[_0x1e91fc(0x271)](_0x3e5f93/0x2),'easingType':_0x1e91fc(0x256)}),this[_0x1e91fc(0x2d9)]({'setZ':_0x527677,'targetOpacity':this[_0x1e91fc(0x1cd)],'duration':Math[_0x1e91fc(0x2f9)](_0x3e5f93/0x2),'easingType':_0x1e91fc(0x256)});},PluginManager[_0x332605(0x242)](pluginData['name'],_0x332605(0x253),_0x17ac4b=>{const _0xee47d0=_0x332605;VisuMZ[_0xee47d0(0x2cc)](_0x17ac4b,_0x17ac4b);const _0x1c9cd7=_0x17ac4b[_0xee47d0(0x27b)];if(_0x1c9cd7['length']<=0x0)return;const _0x4e5afd=_0x17ac4b['Tone']||[0x0,0x0,0x0,0x0],_0x370992=Math[_0xee47d0(0x225)](Number(_0x17ac4b[_0xee47d0(0x1fd)]),0x1);let _0x26bef7=0x0;for(const _0x465673 of _0x1c9cd7){const _0x2fb9e9=$gameScreen[_0xee47d0(0x2a2)](_0x465673);if(!_0x2fb9e9)continue;_0x2fb9e9[_0xee47d0(0x22a)](_0x4e5afd,_0x370992),_0x26bef7=_0x2fb9e9[_0xee47d0(0x16f)]();}if(_0x17ac4b['Wait']){const _0x3c7dbb=$gameTemp[_0xee47d0(0x2a5)]();if(_0x3c7dbb)_0x3c7dbb[_0xee47d0(0x1c1)](_0x26bef7+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_Fear']=function(_0x1ad2c3,_0x3a3cd7){const _0x76e045=_0x332605;this[_0x76e045(0x188)](),this[_0x76e045(0x2d9)]({'tone':_0x1ad2c3['clone'](),'duration':Math[_0x76e045(0x2f9)](_0x3a3cd7/0x2),'easingType':_0x76e045(0x256)}),this['addToQueue']({'targetTone':this[_0x76e045(0x1ef)]?this[_0x76e045(0x1ef)]['clone']():[0x0,0x0,0x0,0x0],'toneDuration':Math[_0x76e045(0x271)](_0x3a3cd7/0x2),'duration':Math['ceil'](_0x3a3cd7/0x2),'easingType':'Linear'});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x17e),_0x2a7c29=>{const _0x17e8f2=_0x332605;VisuMZ[_0x17e8f2(0x2cc)](_0x2a7c29,_0x2a7c29);const _0x582b4e=_0x2a7c29[_0x17e8f2(0x27b)];if(_0x582b4e['length']<=0x0)return;const _0x689fc4=_0x2a7c29['Filename']||'';if(_0x689fc4==='')return;const _0x52b7ca=_0x2a7c29[_0x17e8f2(0x1cc)]||[0x0,0x0,0x0,0x0],_0x289834=Number(_0x2a7c29['Times'])[_0x17e8f2(0x28c)](0x1,0xa),_0x50bf19=Math[_0x17e8f2(0x225)](Number(_0x2a7c29['Duration']),0x1);let _0x51b371=0x0;for(const _0x1faafa of _0x582b4e){const _0x2d4052=$gameScreen[_0x17e8f2(0x2a2)](_0x1faafa);if(!_0x2d4052)continue;_0x2d4052[_0x17e8f2(0x1e6)](_0x689fc4,_0x52b7ca,_0x289834,_0x50bf19),_0x51b371=_0x2d4052[_0x17e8f2(0x16f)]();}if(_0x2a7c29[_0x17e8f2(0x223)]){const _0x328b92=$gameTemp[_0x17e8f2(0x2a5)]();if(_0x328b92)_0x328b92['wait'](_0x51b371+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_FlashChange']=function(_0x26d929,_0x3442f0,_0x247456,_0x337bde){const _0x424e30=_0x332605;ImageManager['loadPicture'](_0x26d929),this[_0x424e30(0x188)]();const _0x3853ad=Math[_0x424e30(0x2f9)](_0x337bde/0x2/_0x247456);let _0x37735c=_0x247456;while(_0x37735c--){this[_0x424e30(0x2d9)]({'tone':_0x3442f0[_0x424e30(0x299)](),'targetTone':this[_0x424e30(0x1ef)]?this[_0x424e30(0x1ef)][_0x424e30(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x3853ad,'duration':_0x3853ad,'easingType':_0x424e30(0x256)});}this[_0x424e30(0x2d9)]({'filename':_0x26d929,'tone':_0x3442f0[_0x424e30(0x299)](),'targetTone':this[_0x424e30(0x1ef)]?this[_0x424e30(0x1ef)][_0x424e30(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x337bde-_0x3853ad*_0x247456,'duration':_0x337bde-_0x3853ad*_0x247456,'easingType':_0x424e30(0x256)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x281),_0x46b897=>{const _0x57320c=_0x332605;VisuMZ[_0x57320c(0x2cc)](_0x46b897,_0x46b897);const _0x55a4a8=_0x46b897[_0x57320c(0x27b)];if(_0x55a4a8[_0x57320c(0x22c)]<=0x0)return;const _0x4a96d0=_0x46b897[_0x57320c(0x1eb)]==='To\x20Left',_0x1116ce=Number(_0x46b897['Angle']),_0x3d8791=Number(_0x46b897[_0x57320c(0x166)]),_0x31497d=Number(_0x46b897[_0x57320c(0x2b3)]);let _0x948f0a=0x0;for(const _0x480801 of _0x55a4a8){const _0x3d411e=$gameScreen[_0x57320c(0x2a2)](_0x480801);if(!_0x3d411e)continue;_0x3d411e[_0x57320c(0x1e0)](_0x4a96d0,_0x1116ce,_0x3d8791,_0x31497d),_0x948f0a=_0x3d411e['getTotalQueueDuration']();}if(_0x46b897[_0x57320c(0x223)]){const _0x4e2775=$gameTemp[_0x57320c(0x2a5)]();if(_0x4e2775)_0x4e2775[_0x57320c(0x1c1)](_0x948f0a+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_FlyingCard']=function(_0x58c0cf,_0x40f0a1,_0x339186,_0x75b87f){const _0x3756c0=_0x332605;_0x40f0a1=_0x40f0a1??0x1e,_0x75b87f=_0x75b87f??0x5,_0x339186=_0x339186??0x2,this[_0x3756c0(0x188)](),this[_0x3756c0(0x2d9)]({'anchor':{'x':0.5,'y':0.5},'scaleX':this[_0x3756c0(0x27c)]*0.1,'scaleY':this[_0x3756c0(0x1de)]*0.1,'opacity':0x0,'blendMode':0x0,'duration':0x0,'easingType':'Linear'}),this['addToQueue']({'targetMoveX':Graphics[_0x3756c0(0x1dd)]*(_0x58c0cf?0.25:0.75),'targetMoveY':Graphics[_0x3756c0(0x18a)]*0.5,'targetScaleX':this[_0x3756c0(0x27c)]*_0x339186,'targetScaleY':this['_scaleY']*_0x339186,'targetOpacity':this[_0x3756c0(0x1cd)]*0x4,'targetAngle':_0x40f0a1+0x168*_0x75b87f,'duration':0x3c}),this['addToQueue']({'targetOpacity':this[_0x3756c0(0x1cd)]||0xff,'duration':0xa}),this[_0x3756c0(0x2d9)]({'targetMoveX':Graphics[_0x3756c0(0x1dd)]*0.5,'targetMoveY':(Graphics[_0x3756c0(0x18a)]-0xe6)/0x2,'targetScaleX':this[_0x3756c0(0x27c)],'targetScaleY':this['_scaleY'],'targetAngle':0x0,'duration':0x28}),this['addToQueue']({'targetMoveX':Graphics[_0x3756c0(0x1dd)]*0.5,'targetMoveY':(Graphics[_0x3756c0(0x18a)]-0x14a)/0x2,'targetScaleX':this[_0x3756c0(0x27c)]*1.2,'targetScaleY':this[_0x3756c0(0x27c)]*1.2,'duration':0xa}),this['addToQueue']({'duration':0x5}),this[_0x3756c0(0x2d9)]({'targetAngle':-0xa,'duration':0x4}),this[_0x3756c0(0x2d9)]({'targetAngle':0xa,'duration':0x8}),this['addToQueue']({'targetAngle':0x0,'duration':0x4}),this[_0x3756c0(0x2d9)]({'targetMoveX':Graphics[_0x3756c0(0x1dd)]*0.5,'targetMoveY':Graphics['height']/0x2,'targetScaleX':this[_0x3756c0(0x27c)]*0x2,'targetScaleY':this['_scaleY']*0.3,'duration':0xa}),this['addToQueue']({'duration':0x5}),this[_0x3756c0(0x2d9)]({'targetMoveY':(Graphics['height']-0xb4)/0x2,'targetScaleX':this[_0x3756c0(0x27c)]*0.8,'targetScaleY':this[_0x3756c0(0x1de)]*1.2,'duration':0x5}),this[_0x3756c0(0x2d9)]({'targetScaleX':this[_0x3756c0(0x27c)],'targetScaleY':this[_0x3756c0(0x1de)],'duration':0xa});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x1d9),_0x5d64e6=>{const _0x510ed8=_0x332605;VisuMZ[_0x510ed8(0x2cc)](_0x5d64e6,_0x5d64e6);const _0x4576b0=_0x5d64e6[_0x510ed8(0x27b)];if(_0x4576b0[_0x510ed8(0x22c)]<=0x0)return;const _0x47b8f4=_0x5d64e6[_0x510ed8(0x1e5)]==='In',_0x22a02f=Math[_0x510ed8(0x225)](Number(_0x5d64e6[_0x510ed8(0x1fd)]),0x1);let _0x5d0ba5=0x0;for(const _0x821de5 of _0x4576b0){const _0x5a3961=$gameScreen[_0x510ed8(0x2a2)](_0x821de5);if(!_0x5a3961)continue;_0x5a3961[_0x510ed8(0x298)](_0x47b8f4,_0x22a02f),_0x5d0ba5=_0x5a3961[_0x510ed8(0x16f)]();}if(_0x5d64e6['Wait']){const _0x3ff599=$gameTemp[_0x510ed8(0x2a5)]();if(_0x3ff599)_0x3ff599[_0x510ed8(0x1c1)](_0x5d0ba5+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x298)]=function(_0x9d969e,_0x3d3678){const _0x17149a=_0x332605;_0x3d3678=_0x3d3678||0x14,_0x3d3678=Math[_0x17149a(0x225)](_0x3d3678,0xa),this[_0x17149a(0x188)](),_0x9d969e?(this[_0x17149a(0x2d9)]({'opacity':0x0,'scaleX':this[_0x17149a(0x27c)]*0.5,'scaleY':this[_0x17149a(0x1de)]*0.5,'currentBlur':0xa,'duration':0x0}),this[_0x17149a(0x2d9)]({'targetOpacity':this[_0x17149a(0x1cd)]||0xff,'targetScaleX':this['_scaleX'],'targetScaleY':this[_0x17149a(0x1de)],'duration':_0x3d3678,'targetBlur':0x0,'blurDuration':_0x3d3678,'easingType':'InOutSine'})):this[_0x17149a(0x2d9)]({'targetOpacity':0x0,'targetScaleX':this[_0x17149a(0x27c)]*0.5,'targetScaleY':this[_0x17149a(0x1de)]*0.5,'duration':_0x3d3678,'targetBlur':0xa,'blurDuration':_0x3d3678,'easingType':_0x17149a(0x214)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x246),_0x5d8bcd=>{const _0x1a58dd=_0x332605;VisuMZ[_0x1a58dd(0x2cc)](_0x5d8bcd,_0x5d8bcd);const _0xf00644=_0x5d8bcd[_0x1a58dd(0x27b)];if(_0xf00644['length']<=0x0)return;const _0x5061cc=_0x5d8bcd[_0x1a58dd(0x1e5)]==='In',_0xd9e8b3=Number(_0x5d8bcd[_0x1a58dd(0x1a5)]),_0x7897c3=_0x5d8bcd['FlashTone']||[0xff,0xff,0xff,0x0],_0xbda8b0=_0x5d8bcd['GhostTone']||[-0x44,-0x44,0x0,0x44],_0x2c8296=Math[_0x1a58dd(0x225)](Number(_0x5d8bcd[_0x1a58dd(0x1fd)]),0x1);let _0x5d0576=0x0;for(const _0xf7cf42 of _0xf00644){const _0x283e8f=$gameScreen['picture'](_0xf7cf42);if(!_0x283e8f)continue;_0x283e8f[_0x1a58dd(0x178)](_0x5061cc,_0xd9e8b3,_0x7897c3,_0xbda8b0,_0x2c8296),_0x5d0576=_0x283e8f['getTotalQueueDuration']();}if(_0x5d8bcd[_0x1a58dd(0x223)]){const _0x11f989=$gameTemp[_0x1a58dd(0x2a5)]();if(_0x11f989)_0x11f989['wait'](_0x5d0576+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x178)]=function(_0xa01566,_0x1b3d51,_0x207bd7,_0x1d46f9,_0x35fc56){const _0x512e2a=_0x332605;_0x35fc56=_0x35fc56||0x3c,this[_0x512e2a(0x188)](),this['addToQueue']({'duration':_0x35fc56,'targetTone':_0x207bd7[_0x512e2a(0x299)](),'toneDuration':_0x35fc56}),_0xa01566?this[_0x512e2a(0x2d9)]({'duration':0x0,'targetTone':_0x1d46f9[_0x512e2a(0x299)](),'toneDuration':_0x35fc56/0xa,'currentBlur':_0x1b3d51,'blendMode':0x1}):this[_0x512e2a(0x2d9)]({'duration':0x0,'targetTone':[0x0,0x0,0x0,0x0],'toneDuration':_0x35fc56/0xa,'blendMode':0x0,'currentBlur':0x0});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x2ca),_0x41cb1b=>{const _0x1c3218=_0x332605;VisuMZ['ConvertParams'](_0x41cb1b,_0x41cb1b);const _0x1e87b9=_0x41cb1b[_0x1c3218(0x27b)];if(_0x1e87b9['length']<=0x0)return;const _0xb7c9a4=Math[_0x1c3218(0x225)](Number(_0x41cb1b[_0x1c3218(0x1a5)]),0x0),_0x3addb8=_0x41cb1b[_0x1c3218(0x1cc)]||[0x0,0x0,0x0,0x0],_0x2d15eb=Math[_0x1c3218(0x225)](Number(_0x41cb1b[_0x1c3218(0x1fd)]),0xa);let _0x32327d=0x0;for(const _0x3504c5 of _0x1e87b9){const _0x37ea38=$gameScreen[_0x1c3218(0x2a2)](_0x3504c5);if(!_0x37ea38)continue;_0x37ea38['setupEffect_Glow'](_0xb7c9a4,_0x3addb8,_0x2d15eb),_0x32327d=_0x37ea38[_0x1c3218(0x16f)]();}if(_0x41cb1b[_0x1c3218(0x223)]){const _0x5b2851=$gameTemp[_0x1c3218(0x2a5)]();if(_0x5b2851)_0x5b2851[_0x1c3218(0x1c1)](_0x32327d+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x259)]=function(_0x244377,_0x5a0e01,_0x2575b4){const _0x18a0a5=_0x332605,_0x481817=Math[_0x18a0a5(0x2f9)](_0x2575b4/0x3);this[_0x18a0a5(0x188)](),this['addToQueue']({'targetBlur':_0x244377,'blurDuration':_0x481817,'targetTone':_0x5a0e01[_0x18a0a5(0x299)](),'toneDuration':_0x481817,'duration':_0x481817}),this['addToQueue']({'duration':_0x481817}),this['addToQueue']({'targetTone':this['_tone']?this['_tone'][_0x18a0a5(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x2575b4-_0x481817*0x2,'targetBlur':this[_0x18a0a5(0x257)](),'blurDuration':_0x2575b4-_0x481817*0x2,'duration':_0x2575b4-_0x481817*0x2,'easingType':'Linear'});},PluginManager['registerCommand'](pluginData[_0x332605(0x1af)],'Heal',_0x420a8e=>{const _0x1faf6d=_0x332605;VisuMZ[_0x1faf6d(0x2cc)](_0x420a8e,_0x420a8e);const _0x52b5b4=_0x420a8e['PictureIDs'];if(_0x52b5b4[_0x1faf6d(0x22c)]<=0x0)return;const _0x401194=Number(_0x420a8e[_0x1faf6d(0x1a5)])||0x0,_0x20bc07=_0x420a8e[_0x1faf6d(0x1cc)]||[0x0,0x0,0x0,0x0],_0x1fa3ea=Math[_0x1faf6d(0x225)](Number(_0x420a8e[_0x1faf6d(0x1fd)]),0x1);let _0x49cf55=0x0;for(const _0x2b3d86 of _0x52b5b4){const _0x1fc4fb=$gameScreen[_0x1faf6d(0x2a2)](_0x2b3d86);if(!_0x1fc4fb)continue;_0x1fc4fb[_0x1faf6d(0x2c0)](_0x401194,_0x20bc07,_0x1fa3ea),_0x49cf55=_0x1fc4fb[_0x1faf6d(0x16f)]();}if(_0x420a8e[_0x1faf6d(0x223)]){const _0x194de2=$gameTemp[_0x1faf6d(0x2a5)]();if(_0x194de2)_0x194de2[_0x1faf6d(0x1c1)](_0x49cf55+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x2c0)]=function(_0x20b303,_0x49b5a9,_0x343175){const _0x260304=_0x332605;this[_0x260304(0x188)](),this[_0x260304(0x2d9)]({'targetBlur':_0x20b303,'blurDuration':_0x343175*0x2/0x5,'targetTone':_0x49b5a9[_0x260304(0x299)](),'toneDuration':_0x343175/0x4,'duration':Math[_0x260304(0x2f9)](_0x343175/0x2),'easingType':_0x260304(0x256)}),this[_0x260304(0x2d9)]({'targetBlur':this[_0x260304(0x257)](),'blurDuration':Math[_0x260304(0x271)](_0x343175/0x2),'targetTone':this[_0x260304(0x1ef)]?this['_tone'][_0x260304(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':Math[_0x260304(0x271)](_0x343175/0x2),'duration':Math[_0x260304(0x271)](_0x343175/0x2),'easingType':_0x260304(0x256)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x1bc),_0x599401=>{const _0x5c4b43=_0x332605;VisuMZ[_0x5c4b43(0x2cc)](_0x599401,_0x599401);const _0x1831ee=_0x599401[_0x5c4b43(0x27b)];if(_0x1831ee['length']<=0x0)return;const _0x31c69f=Math[_0x5c4b43(0x225)](Number(_0x599401[_0x5c4b43(0x2f1)]),0x1),_0x215b4e=Math[_0x5c4b43(0x225)](Number(_0x599401['Duration']),0xa);let _0x18508f=0x0;for(const _0x40b714 of _0x1831ee){const _0x590408=$gameScreen['picture'](_0x40b714);if(!_0x590408)continue;_0x590408[_0x5c4b43(0x2be)](_0x31c69f,_0x215b4e),_0x18508f=_0x590408[_0x5c4b43(0x16f)]();}if(_0x599401[_0x5c4b43(0x223)]){const _0x2bf930=$gameTemp[_0x5c4b43(0x2a5)]();if(_0x2bf930)_0x2bf930[_0x5c4b43(0x1c1)](_0x18508f+0x1);}}),Game_Picture['prototype'][_0x332605(0x2be)]=function(_0x4755fa,_0x33dd76){const _0x27455d=_0x332605;_0x4755fa=_0x4755fa||0x28,_0x33dd76=_0x33dd76??0x28,_0x33dd76=Math['max'](_0x33dd76,0xa),this['clearQueue'](),this['addToQueue']({'targetMoveY':this['_y']-_0x4755fa,'duration':(_0x33dd76-0x2)/0x2,'easingType':_0x27455d(0x16d)}),this[_0x27455d(0x2d9)]({'targetMoveY':this['_y']+Math['min'](_0x4755fa/0x2,0xa),'duration':(_0x33dd76-0x2)/0x2,'easingType':_0x27455d(0x2dd)}),this['addToQueue']({'targetMoveY':this['_y'],'duration':0x2,'easingType':'Linear'});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x26c),_0xe5b5a0=>{const _0xcbcb05=_0x332605;VisuMZ[_0xcbcb05(0x2cc)](_0xe5b5a0,_0xe5b5a0);const _0x940920=_0xe5b5a0[_0xcbcb05(0x27b)];if(_0x940920['length']<=0x0)return;const _0x41c40c=Number(_0xe5b5a0[_0xcbcb05(0x2d5)])||0x0,_0x20f1c0=Number(_0xe5b5a0[_0xcbcb05(0x2bb)])||0x0,_0x4c93b1=Number(_0xe5b5a0['Rng'])||0x0,_0x41fefa=Math[_0xcbcb05(0x225)](Number(_0xe5b5a0['Duration']),0x0);for(const _0x51fc96 of _0x940920){const _0x1ffb4e=$gameScreen[_0xcbcb05(0x2a2)](_0x51fc96);if(!_0x1ffb4e)continue;_0x1ffb4e[_0xcbcb05(0x1fa)](_0x41c40c,_0x20f1c0,_0x4c93b1,_0x41fefa);}if(_0xe5b5a0[_0xcbcb05(0x223)]&&_0x41fefa>0x0){const _0x372d94=$gameTemp[_0xcbcb05(0x2a5)]();if(_0x372d94)_0x372d94[_0xcbcb05(0x1c1)](_0x41fefa);}}),PluginManager['registerCommand'](pluginData[_0x332605(0x1af)],_0x332605(0x24d),_0x1131cd=>{const _0x4c06ef=_0x332605;VisuMZ[_0x4c06ef(0x2cc)](_0x1131cd,_0x1131cd);const _0x292f79=_0x1131cd[_0x4c06ef(0x27b)];if(_0x292f79[_0x4c06ef(0x22c)]<=0x0)return;const _0x21b131=Number(_0x1131cd[_0x4c06ef(0x27e)])||0x0,_0x5d76e7=Math[_0x4c06ef(0x225)](Number(_0x1131cd[_0x4c06ef(0x1fd)]),0x1);let _0x408ba2=0x0;for(const _0x20ab18 of _0x292f79){const _0x4814f6=$gameScreen[_0x4c06ef(0x2a2)](_0x20ab18);if(!_0x4814f6)continue;_0x4814f6['setupEffect_HueShiftBy'](_0x21b131,_0x5d76e7,_0x1131cd['Wait']),_0x408ba2=_0x4814f6[_0x4c06ef(0x16f)]();}if(_0x1131cd[_0x4c06ef(0x223)]){const _0x4a20c1=$gameTemp[_0x4c06ef(0x2a5)]();if(_0x4a20c1)_0x4a20c1[_0x4c06ef(0x1c1)](_0x408ba2+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_HueShiftBy']=function(_0x37dae2,_0x54e46b,_0x34e875){const _0xf78efa=_0x332605;this[_0xf78efa(0x188)](),this[_0xf78efa(0x2d9)]({'targetHue':this[_0xf78efa(0x2da)]()+_0x37dae2,'hueDuration':_0x54e46b,'duration':_0x34e875?_0x54e46b:0x0});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x1fb),_0x53d96d=>{const _0x3adc43=_0x332605;VisuMZ['ConvertParams'](_0x53d96d,_0x53d96d);const _0x3c1407=_0x53d96d[_0x3adc43(0x27b)];if(_0x3c1407['length']<=0x0)return;const _0x1d90bb=Number(_0x53d96d[_0x3adc43(0x27e)])||0x0,_0x6e5602=Math['max'](Number(_0x53d96d[_0x3adc43(0x1fd)]),0x1);let _0x18e106=0x0;for(const _0x346cbc of _0x3c1407){const _0x399c04=$gameScreen['picture'](_0x346cbc);if(!_0x399c04)continue;_0x399c04[_0x3adc43(0x23e)](_0x1d90bb,_0x6e5602,_0x53d96d[_0x3adc43(0x223)]),_0x18e106=_0x399c04['getTotalQueueDuration']();}if(_0x53d96d[_0x3adc43(0x223)]){const _0x2d6c7a=$gameTemp[_0x3adc43(0x2a5)]();if(_0x2d6c7a)_0x2d6c7a[_0x3adc43(0x1c1)](_0x18e106+0x1);}}),Game_Picture['prototype'][_0x332605(0x23e)]=function(_0x403c2e,_0x2d4c1d,_0x406eed){const _0x4f01a3=_0x332605;this[_0x4f01a3(0x188)](),this[_0x4f01a3(0x2d9)]({'targetHue':_0x403c2e,'hueDuration':_0x2d4c1d,'duration':_0x406eed?_0x2d4c1d:0x0});},PluginManager['registerCommand'](pluginData['name'],_0x332605(0x2cb),_0x44ec5e=>{const _0x1bd350=_0x332605;VisuMZ[_0x1bd350(0x2cc)](_0x44ec5e,_0x44ec5e);const _0x2c7036=_0x44ec5e[_0x1bd350(0x27b)];if(_0x2c7036['length']<=0x0)return;const _0x3e47c0=Math[_0x1bd350(0x225)](Number(_0x44ec5e[_0x1bd350(0x206)]),0x1),_0x345714=Math[_0x1bd350(0x225)](Number(_0x44ec5e[_0x1bd350(0x1fd)]),0xa);let _0x52546a=0x0;for(const _0x1d2e72 of _0x2c7036){const _0x53eae4=$gameScreen[_0x1bd350(0x2a2)](_0x1d2e72);if(!_0x53eae4)continue;_0x53eae4[_0x1bd350(0x1f1)](_0x3e47c0,_0x345714),_0x52546a=_0x53eae4[_0x1bd350(0x16f)]();}if(_0x44ec5e[_0x1bd350(0x223)]){const _0x563bc9=$gameTemp[_0x1bd350(0x2a5)]();if(_0x563bc9)_0x563bc9[_0x1bd350(0x1c1)](_0x52546a+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x1f1)]=function(_0xd3ca15,_0x1e87d8){const _0xe671e3=_0x332605;_0xd3ca15=_0xd3ca15||0x1,this[_0xe671e3(0x188)]();while(_0xd3ca15--){let _0x38c383=Math[_0xe671e3(0x1d5)](Graphics[_0xe671e3(0x1dd)]/0x2)+Graphics['width']/0x4,_0x5d2cbb=Math[_0xe671e3(0x1d5)](Graphics['height']/0x2)+Graphics[_0xe671e3(0x18a)]/0x4,_0x7ba8f=(Math[_0xe671e3(0x1b5)]()>0.5?-0x1:0x1)*Math[_0xe671e3(0x1d5)](Math['round'](Graphics['width']/0xa)),_0x389987=(Math[_0xe671e3(0x1b5)]()>0.5?-0x1:0x1)*Math[_0xe671e3(0x1d5)](Math[_0xe671e3(0x2c6)](Graphics[_0xe671e3(0x18a)]/0xa));const _0x2c01da=Math[_0xe671e3(0x1b5)]()*0.3+0.5;this['addToQueue']({'moveX':_0x38c383,'moveY':_0x5d2cbb,'scaleX':this['_scaleX']*_0x2c01da,'scaleY':this[_0xe671e3(0x1de)]*_0x2c01da,'opacity':0x0,'currentBlur':0xa,'duration':0x0}),this['addToQueue']({'targetMoveX':_0x38c383+_0x7ba8f/0x2,'targetMoveY':_0x5d2cbb+_0x389987/0x2,'targetOpacity':this['_opacity']||0xff,'targetBlur':0x3,'blurDuration':Math[_0xe671e3(0x271)](_0x1e87d8/0x2),'duration':Math[_0xe671e3(0x271)](_0x1e87d8/0x2)}),this[_0xe671e3(0x2d9)]({'targetMoveX':_0x38c383+_0x7ba8f,'targetMoveY':_0x5d2cbb+_0x389987,'targetOpacity':0x0,'targetBlur':0xa,'blurDuration':Math[_0xe671e3(0x2f9)](_0x1e87d8/0x2),'duration':Math['floor'](_0x1e87d8/0x2)});}this['addToQueue']({'moveX':this['_x'],'moveY':this['_y'],'scaleX':this[_0xe671e3(0x27c)],'scaleY':this[_0xe671e3(0x1de)],'opacity':0x0,'currentBlur':0xa,'duration':0x0}),this[_0xe671e3(0x2d9)]({'targetOpacity':this[_0xe671e3(0x1cd)]||0xff,'duration':_0x1e87d8,'targetBlur':0x0,'blurDuration':_0x1e87d8,'easingType':_0xe671e3(0x256)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x205),_0x5f09d4=>{const _0x181753=_0x332605;VisuMZ[_0x181753(0x2cc)](_0x5f09d4,_0x5f09d4);const _0x4bfb34=_0x5f09d4[_0x181753(0x27b)];if(_0x4bfb34[_0x181753(0x22c)]<=0x0)return;const _0x1f24b4=Math[_0x181753(0x225)](_0x5f09d4[_0x181753(0x206)],0x1);let _0x51c5a2=0x0;for(const _0x196c12 of _0x4bfb34){const _0x5e812e=$gameScreen[_0x181753(0x2a2)](_0x196c12);if(!_0x5e812e)continue;_0x5e812e['setupEffect_Jiggle'](_0x1f24b4),_0x51c5a2=_0x5e812e[_0x181753(0x16f)]();}if(_0x5f09d4[_0x181753(0x223)]){const _0x12c64b=$gameTemp[_0x181753(0x2a5)]();if(_0x12c64b)_0x12c64b[_0x181753(0x1c1)](_0x51c5a2+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_Jiggle']=function(_0x3e450d){const _0x2172d4=_0x332605;_0x3e450d=_0x3e450d||0x1,this[_0x2172d4(0x188)]();while(_0x3e450d--){this[_0x2172d4(0x2d9)]({'targetScaleX':this['_scaleX']*0.9,'targetScaleY':this['_scaleY']*1.1,'duration':0xf,'easingType':_0x2172d4(0x214)}),this[_0x2172d4(0x2d9)]({'targetScaleX':this['_scaleX']*1.1,'targetScaleY':this['_scaleY']*0.9,'duration':0xf,'easingType':'InOutSine'});}this[_0x2172d4(0x2d9)]({'targetScaleX':this[_0x2172d4(0x27c)],'targetScaleY':this[_0x2172d4(0x1de)],'duration':0xa,'easingType':'InOutSine'});},PluginManager['registerCommand'](pluginData[_0x332605(0x1af)],'JumpBy',_0x27caa2=>{const _0x3af84b=_0x332605;VisuMZ[_0x3af84b(0x2cc)](_0x27caa2,_0x27caa2);const _0x2199a0=_0x27caa2['PictureIDs'];if(_0x2199a0['length']<=0x0)return;const _0x4da887=Math['max'](Number(_0x27caa2[_0x3af84b(0x2f1)]),0x0),_0x3eceb1=Math['round'](Number(_0x27caa2[_0x3af84b(0x20f)])),_0x216db1=Math[_0x3af84b(0x2c6)](Number(_0x27caa2[_0x3af84b(0x2d5)])),_0x26ebe6=Math[_0x3af84b(0x225)](Number(_0x27caa2[_0x3af84b(0x1fd)]),0x1);let _0x45145b=0x0;for(const _0x3277a3 of _0x2199a0){const _0x169cb2=$gameScreen[_0x3af84b(0x2a2)](_0x3277a3);if(!_0x169cb2)continue;_0x169cb2[_0x3af84b(0x2c7)](_0x3eceb1,_0x216db1,_0x4da887,_0x26ebe6),_0x45145b=_0x169cb2[_0x3af84b(0x16f)]();}if(_0x27caa2['Wait']){const _0x2e797e=$gameTemp[_0x3af84b(0x2a5)]();if(_0x2e797e)_0x2e797e[_0x3af84b(0x1c1)](_0x45145b+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x2c7)]=function(_0x209d4a,_0xb9ea4b,_0x310bd4,_0x9ddec0){const _0x1f5e2b=_0x332605;this[_0x1f5e2b(0x188)]();let _0x414b61=this['_x'],_0x520b97=this['_y'];const _0x17fb88=_0x414b61+_0x209d4a,_0x2f1ab5=_0x520b97+_0xb9ea4b,_0x2b1502=_0x9ddec0;let _0x2c052b=_0x2b1502;this[_0x1f5e2b(0x2ad)](_0x1f5e2b(0x256));while(_0x2c052b--){_0x414b61=(_0x414b61*_0x2c052b+_0x17fb88)/(_0x2c052b+0x1),_0x520b97=(_0x520b97*_0x2c052b+_0x2f1ab5)/(_0x2c052b+0x1);const _0x492a2d=_0x2b1502-(_0x2c052b+0x1),_0x55890e=_0x2b1502/0x2,_0x26035d=_0x310bd4,_0x5b9ef9=-_0x26035d/Math[_0x1f5e2b(0x26e)](_0x55890e,0x2),_0x52600a=_0x5b9ef9*Math[_0x1f5e2b(0x26e)](_0x492a2d-_0x55890e,0x2)+_0x26035d;this[_0x1f5e2b(0x2d9)]({'moveX':_0x414b61,'moveY':_0x520b97-_0x52600a,'duration':0x1});}this[_0x1f5e2b(0x2d9)]({'moveX':_0x17fb88,'moveY':_0x2f1ab5,'duration':0x0});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x2f0),_0x3234c7=>{const _0x1f50e4=_0x332605;VisuMZ[_0x1f50e4(0x2cc)](_0x3234c7,_0x3234c7);const _0x44b827=_0x3234c7['PictureIDs'];if(_0x44b827[_0x1f50e4(0x22c)]<=0x0)return;const _0x589a96=Math[_0x1f50e4(0x225)](Number(_0x3234c7['Height']),0x0),_0x3d6308=Math['round'](Number(_0x3234c7['TargetX'])),_0x10fd6a=Math[_0x1f50e4(0x2c6)](Number(_0x3234c7[_0x1f50e4(0x250)])),_0x28e4dd=Math[_0x1f50e4(0x225)](Number(_0x3234c7[_0x1f50e4(0x1fd)]),0x1);let _0x5db07a=0x0;for(const _0x57cf2d of _0x44b827){const _0x1df2a0=$gameScreen[_0x1f50e4(0x2a2)](_0x57cf2d);if(!_0x1df2a0)continue;_0x1df2a0[_0x1f50e4(0x2e5)](_0x3d6308,_0x10fd6a,_0x589a96,_0x28e4dd),_0x5db07a=_0x1df2a0[_0x1f50e4(0x16f)]();}if(_0x3234c7[_0x1f50e4(0x223)]){const _0x332b73=$gameTemp[_0x1f50e4(0x2a5)]();if(_0x332b73)_0x332b73[_0x1f50e4(0x1c1)](_0x5db07a+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x2e5)]=function(_0x383042,_0x116047,_0x31fd7a,_0x5ac857){const _0x4b399f=_0x332605;this[_0x4b399f(0x188)]();let _0x347524=this['_x'],_0x4e62a5=this['_y'];const _0x486894=_0x5ac857;let _0x446a21=_0x486894;this[_0x4b399f(0x2ad)]('Linear');while(_0x446a21--){_0x347524=(_0x347524*_0x446a21+_0x383042)/(_0x446a21+0x1),_0x4e62a5=(_0x4e62a5*_0x446a21+_0x116047)/(_0x446a21+0x1);const _0x24f635=_0x486894-(_0x446a21+0x1),_0x1da5c6=_0x486894/0x2,_0x290865=_0x31fd7a,_0x50c9d7=-_0x290865/Math['pow'](_0x1da5c6,0x2),_0x3b7aad=_0x50c9d7*Math['pow'](_0x24f635-_0x1da5c6,0x2)+_0x290865;this[_0x4b399f(0x2d9)]({'moveX':_0x347524,'moveY':_0x4e62a5-_0x3b7aad,'duration':0x1});}this['addToQueue']({'moveX':_0x383042,'moveY':_0x116047,'duration':0x0});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x201),_0x54fc80=>{const _0x4283d7=_0x332605;VisuMZ[_0x4283d7(0x2cc)](_0x54fc80,_0x54fc80);const _0x304b4c=_0x54fc80[_0x4283d7(0x27b)];if(_0x304b4c[_0x4283d7(0x22c)]<=0x0)return;const _0x40ffd6=_0x54fc80[_0x4283d7(0x1e5)]==='In',_0x545fde=Math[_0x4283d7(0x225)](Number(_0x54fc80[_0x4283d7(0x2f2)]),0x1),_0x51138a=Math[_0x4283d7(0x225)](Number(_0x54fc80[_0x4283d7(0x1fd)]),0x1);let _0x4b7596=0x0;for(const _0x3518be of _0x304b4c){const _0x31527f=$gameScreen[_0x4283d7(0x2a2)](_0x3518be);if(!_0x31527f)continue;_0x31527f[_0x4283d7(0x18d)](_0x40ffd6,_0x545fde,_0x51138a),_0x4b7596=_0x31527f['getTotalQueueDuration']();}if(_0x54fc80[_0x4283d7(0x223)]){const _0xb960e2=$gameTemp[_0x4283d7(0x2a5)]();if(_0xb960e2)_0xb960e2[_0x4283d7(0x1c1)](_0x4b7596+0x1);}}),Game_Picture['prototype']['setupEffect_LevitateInOut']=function(_0x2f4aec,_0xc61ded,_0x15e8ad){const _0x124974=_0x332605;_0xc61ded=_0xc61ded||0x60,_0x15e8ad=_0x15e8ad||0x3c,this[_0x124974(0x188)](),_0x2f4aec?(this[_0x124974(0x2d9)]({'moveY':this['_y']+_0xc61ded,'scaleX':this['_scaleX']*1.2,'scaleY':this[_0x124974(0x1de)]*1.5,'opacity':0x0,'duration':0x0,'easingType':_0x124974(0x256)}),this[_0x124974(0x2d9)]({'targetMoveY':this['_y'],'targetScaleX':this[_0x124974(0x27c)],'targetScaleY':this['_scaleY'],'targetOpacity':this[_0x124974(0x1cd)]||0xff,'duration':_0x15e8ad,'easingType':'OutBack'})):this[_0x124974(0x2d9)]({'targetMoveY':this['_y']-_0xc61ded,'targetScaleX':this[_0x124974(0x27c)]*0.8,'targetScaleY':this['_scaleY']*0.5,'targetOpacity':0x0,'duration':_0x15e8ad,'easingType':_0x124974(0x1ac)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x1c3),_0x28cfe4=>{const _0x386115=_0x332605;VisuMZ[_0x386115(0x2cc)](_0x28cfe4,_0x28cfe4);const _0x27ebb3=_0x28cfe4[_0x386115(0x27b)];if(_0x27ebb3[_0x386115(0x22c)]<=0x0)return;const _0x157a24=Number(_0x28cfe4[_0x386115(0x1a5)])||0x0,_0x29bbc9=_0x28cfe4[_0x386115(0x1cc)]||[0x0,0x0,0x0,0x0],_0x580428=Math[_0x386115(0x225)](Number(_0x28cfe4['Duration']),0x1);let _0x16c130=0x0;for(const _0x554091 of _0x27ebb3){const _0x4f8f1e=$gameScreen['picture'](_0x554091);if(!_0x4f8f1e)continue;_0x4f8f1e[_0x386115(0x1d3)](_0x157a24,_0x29bbc9,_0x580428),_0x16c130=_0x4f8f1e[_0x386115(0x16f)]();}if(_0x28cfe4[_0x386115(0x223)]){const _0x35a77d=$gameTemp[_0x386115(0x2a5)]();if(_0x35a77d)_0x35a77d['wait'](_0x16c130+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x1d3)]=function(_0x2ecd5d,_0x151686,_0x1135f8){const _0x240d64=_0x332605;this[_0x240d64(0x188)](),this[_0x240d64(0x2d9)]({'targetBlur':_0x2ecd5d,'blurDuration':_0x1135f8*0x2/0x5,'targetTone':_0x151686[_0x240d64(0x299)](),'toneDuration':_0x1135f8/0x4,'duration':Math[_0x240d64(0x2f9)](_0x1135f8/0x2),'targetHue':this[_0x240d64(0x2da)]()+0x168,'hueDuration':_0x1135f8,'easingType':_0x240d64(0x256)}),this[_0x240d64(0x2d9)]({'targetBlur':this[_0x240d64(0x257)](),'blurDuration':Math['ceil'](_0x1135f8/0x2),'targetTone':this['_tone']?this[_0x240d64(0x1ef)][_0x240d64(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':Math[_0x240d64(0x271)](_0x1135f8/0x2),'duration':Math[_0x240d64(0x271)](_0x1135f8/0x2),'easingType':_0x240d64(0x256)}),this[_0x240d64(0x2d9)]({'currentHue':this['getPictureEffectsHue'](),'duration':0x0});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x2ae),_0x383bda=>{const _0x307f64=_0x332605;VisuMZ['ConvertParams'](_0x383bda,_0x383bda);const _0x43c11=_0x383bda[_0x307f64(0x27b)];if(_0x43c11[_0x307f64(0x22c)]<=0x0)return;const _0x28f59b=_0x383bda[_0x307f64(0x274)]||'';if(_0x28f59b==='')return;const _0x2a8b90=Number(_0x383bda['Blur'])||0x0,_0x435117=Math[_0x307f64(0x2c6)](Number(_0x383bda[_0x307f64(0x1c2)])),_0x50208e=Math[_0x307f64(0x2c6)](Number(_0x383bda[_0x307f64(0x250)])),_0x470301=_0x383bda[_0x307f64(0x1cc)]||[0x0,0x0,0x0,0x0],_0x58d3db=Math[_0x307f64(0x225)](Number(_0x383bda[_0x307f64(0x1fd)]),0x1);let _0xf50ccb=0x0;for(const _0x53fe46 of _0x43c11){const _0x374012=$gameScreen[_0x307f64(0x2a2)](_0x53fe46);if(!_0x374012)continue;_0x374012[_0x307f64(0x24a)](_0x28f59b,_0x2a8b90,_0x435117,_0x50208e,_0x470301,_0xf50ccb===0x0,_0x58d3db),_0xf50ccb=_0x374012[_0x307f64(0x16f)]();}if(_0x383bda[_0x307f64(0x223)]){const _0x1e94b0=$gameTemp[_0x307f64(0x2a5)]();if(_0x1e94b0)_0x1e94b0[_0x307f64(0x1c1)](_0xf50ccb+0x1);}}),Game_Picture['prototype']['setupEffect_MergeChange']=function(_0x41efcc,_0x3853e5,_0x257539,_0x3653f5,_0x7f964f,_0x25d09f,_0x4b85a6){const _0x14f14c=_0x332605;ImageManager['loadPicture'](_0x41efcc),this[_0x14f14c(0x188)](),this['addToQueue']({'targetMoveX':_0x257539,'targetMoveY':_0x3653f5,'duration':_0x4b85a6,'targetBlur':_0x3853e5,'blurDuration':_0x4b85a6,'targetTone':_0x7f964f[_0x14f14c(0x299)](),'toneDuration':_0x4b85a6,'easingType':_0x14f14c(0x228)}),this['addToQueue']({'filename':_0x41efcc,'opacity':_0x25d09f?this['_opacity']:0x0,'duration':0x0,'targetBlur':this[_0x14f14c(0x257)](),'blurDuration':_0x4b85a6/0x2,'targetTone':this['_tone']?this[_0x14f14c(0x1ef)][_0x14f14c(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x4b85a6/0x4,'easingType':_0x14f14c(0x256)});},PluginManager['registerCommand'](pluginData['name'],_0x332605(0x2e4),_0x34352d=>{const _0x17e02e=_0x332605;VisuMZ[_0x17e02e(0x2cc)](_0x34352d,_0x34352d);const _0x54049b=_0x34352d[_0x17e02e(0x27b)];if(_0x54049b['length']<=0x0)return;const _0xa372b8=_0x34352d[_0x17e02e(0x1e5)]===_0x17e02e(0x173),_0x4d5112=Math[_0x17e02e(0x225)](Number(_0x34352d[_0x17e02e(0x1fd)]),0x1);let _0x500608=0x0;for(const _0x572745 of _0x54049b){const _0x342b10=$gameScreen[_0x17e02e(0x2a2)](_0x572745);if(!_0x342b10)continue;_0x342b10['setupEffect_OpenInOut'](_0xa372b8,_0x4d5112),_0x500608=_0x342b10['getTotalQueueDuration']();}if(_0x34352d['Wait']){const _0x1545fa=$gameTemp['getLastPluginCommandInterpreter']();if(_0x1545fa)_0x1545fa['wait'](_0x500608+0x1);}}),Game_Picture['prototype'][_0x332605(0x260)]=function(_0x33cc23,_0x452d63){const _0x25f2ae=_0x332605;_0x452d63=_0x452d63||0x14,this['clearQueue'](),_0x33cc23?(this[_0x25f2ae(0x2d9)]({'scaleY':this[_0x25f2ae(0x1de)]*0.05,'opacity':this['_opacity']||0xff,'duration':0x0,'easingType':'Linear'}),this[_0x25f2ae(0x2d9)]({'targetScaleY':this['_scaleY'],'duration':_0x452d63,'easingType':_0x25f2ae(0x2c3)})):(this['addToQueue']({'targetScaleY':this['_scaleY']*0.05,'duration':_0x452d63-0x2,'easingType':_0x25f2ae(0x162)}),this['addToQueue']({'targetOpacity':0x0,'duration':0x2,'easingType':'Linear'}));},PluginManager['registerCommand'](pluginData[_0x332605(0x1af)],_0x332605(0x2e8),_0xd4d818=>{const _0x466e28=_0x332605;VisuMZ[_0x466e28(0x2cc)](_0xd4d818,_0xd4d818);const _0x172572=_0xd4d818[_0x466e28(0x27b)];if(_0x172572[_0x466e28(0x22c)]<=0x0)return;const _0x305a72=_0xd4d818['FlashTone']||[0x0,0x0,0x0,0x0],_0x12bfd1=_0xd4d818[_0x466e28(0x1aa)]||[0x0,0x0,0x0,0x0],_0x2c9441=Number(_0xd4d818[_0x466e28(0x263)]),_0x1d9b71=Number(_0xd4d818[_0x466e28(0x164)]),_0x461cfd=Math['max'](Number(_0xd4d818[_0x466e28(0x1fd)]),0x14);let _0x3e2eb7=0x0;for(const _0x71e24b of _0x172572){const _0x575d5f=$gameScreen[_0x466e28(0x2a2)](_0x71e24b);if(!_0x575d5f)continue;_0x575d5f[_0x466e28(0x1b9)](_0x305a72,_0x12bfd1,_0x2c9441,_0x1d9b71,_0x461cfd),_0x3e2eb7=_0x575d5f['getTotalQueueDuration']();}if(_0xd4d818[_0x466e28(0x223)]){const _0xbcd5bf=$gameTemp[_0x466e28(0x2a5)]();if(_0xbcd5bf)_0xbcd5bf[_0x466e28(0x1c1)](_0x3e2eb7+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x1b9)]=function(_0x54e4aa,_0x570a3e,_0x52e67c,_0x2f1d9d,_0x50ec47){const _0xfc0429=_0x332605,_0x129d8a=Math[_0xfc0429(0x2f9)](_0x50ec47/0x7);this['clearQueue'](),this[_0xfc0429(0x2d9)]({'targetScaleX':this[_0xfc0429(0x27c)]*_0x52e67c,'targetScaleY':this[_0xfc0429(0x1de)]*_0x2f1d9d,'duration':_0x129d8a,'easingType':'Linear'}),this[_0xfc0429(0x2d9)]({'targetScaleX':this[_0xfc0429(0x27c)]*_0x2f1d9d,'targetScaleY':this[_0xfc0429(0x1de)]*_0x52e67c,'duration':_0x129d8a,'easingType':'Linear'}),this[_0xfc0429(0x2d9)]({'targetTone':_0x54e4aa['clone'](),'toneDuration':_0x129d8a*0x4,'targetScaleX':this[_0xfc0429(0x27c)]*_0x52e67c,'targetScaleY':this['_scaleY']*_0x2f1d9d,'duration':_0x129d8a,'easingType':_0xfc0429(0x256)}),this[_0xfc0429(0x2d9)]({'targetScaleX':this[_0xfc0429(0x27c)]*_0x2f1d9d,'targetScaleY':this[_0xfc0429(0x1de)]*_0x52e67c,'duration':_0x129d8a,'easingType':_0xfc0429(0x256)}),this[_0xfc0429(0x2d9)]({'targetScaleX':this[_0xfc0429(0x27c)]*_0x52e67c,'targetScaleY':this[_0xfc0429(0x1de)]*_0x2f1d9d,'duration':_0x129d8a,'easingType':_0xfc0429(0x256)}),this[_0xfc0429(0x2d9)]({'targetScaleX':this[_0xfc0429(0x27c)]*_0x2f1d9d,'targetScaleY':this[_0xfc0429(0x1de)]*_0x52e67c,'duration':_0x129d8a,'easingType':_0xfc0429(0x256)}),this['addToQueue']({'targetTone':_0x570a3e,'toneDuration':_0x129d8a,'scaleX':this[_0xfc0429(0x27c)],'scaleY':this[_0xfc0429(0x1de)],'duration':_0x50ec47-_0x129d8a*0x6,'easingType':_0xfc0429(0x256)});},PluginManager['registerCommand'](pluginData['name'],_0x332605(0x296),_0x3791a0=>{const _0x266101=_0x332605;VisuMZ[_0x266101(0x2cc)](_0x3791a0,_0x3791a0);const _0x186ae1=_0x3791a0[_0x266101(0x27b)];if(_0x186ae1[_0x266101(0x22c)]<=0x0)return;const _0x3a792c=_0x3791a0[_0x266101(0x1e5)]==='In',_0x3b32fa=Math[_0x266101(0x225)](Number(_0x3791a0['Duration']),0x1);let _0x5056bd=0x0;for(const _0x337b08 of _0x186ae1){const _0x3c1d9e=$gameScreen[_0x266101(0x2a2)](_0x337b08);if(!_0x3c1d9e)continue;_0x3c1d9e[_0x266101(0x2ec)](_0x3a792c,_0x3b32fa),_0x5056bd=_0x3c1d9e['getTotalQueueDuration']();}if(_0x3791a0['Wait']){const _0x59d2eb=$gameTemp[_0x266101(0x2a5)]();if(_0x59d2eb)_0x59d2eb[_0x266101(0x1c1)](_0x5056bd+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x2ec)]=function(_0x21fb1f,_0x6f2e48){const _0x2d3606=_0x332605;_0x6f2e48=_0x6f2e48||0x14,_0x6f2e48=Math[_0x2d3606(0x225)](_0x6f2e48,0xa),this[_0x2d3606(0x188)](),_0x21fb1f?(this[_0x2d3606(0x2d9)]({'opacity':0x0,'scaleX':this[_0x2d3606(0x27c)]*0.8,'scaleY':this['_scaleY']*0.8,'currentBlur':0xa,'duration':0x0}),this[_0x2d3606(0x2d9)]({'targetOpacity':this['_opacity']||0xff,'targetScaleX':this[_0x2d3606(0x27c)],'targetScaleY':this[_0x2d3606(0x1de)],'targetBlur':0x0,'duration':_0x6f2e48,'blurDuration':_0x6f2e48,'easingType':_0x2d3606(0x1c4)})):this[_0x2d3606(0x2d9)]({'targetOpacity':0x0,'targetScaleX':this[_0x2d3606(0x27c)]*0.8,'targetScaleY':this[_0x2d3606(0x1de)]*0.8,'targetBlur':0xa,'duration':_0x6f2e48,'blurDuration':_0x6f2e48,'easingType':_0x2d3606(0x1ac)});},PluginManager['registerCommand'](pluginData[_0x332605(0x1af)],_0x332605(0x23f),_0x29b552=>{const _0x5d4a2a=_0x332605;VisuMZ[_0x5d4a2a(0x2cc)](_0x29b552,_0x29b552);const _0x18c972=_0x29b552[_0x5d4a2a(0x27b)];if(_0x18c972[_0x5d4a2a(0x22c)]<=0x0)return;const _0x4f7034=_0x29b552[_0x5d4a2a(0x1e5)]==='In',_0x3c80bb=Number(_0x29b552[_0x5d4a2a(0x166)]),_0x32f6b2=Math[_0x5d4a2a(0x225)](Number(_0x29b552[_0x5d4a2a(0x1fd)]),0x1);let _0x21b2e6=0x0;for(const _0x4bcd0a of _0x18c972){const _0x35b07d=$gameScreen['picture'](_0x4bcd0a);if(!_0x35b07d)continue;_0x35b07d[_0x5d4a2a(0x245)](_0x4f7034,_0x3c80bb,_0x32f6b2),_0x21b2e6=_0x35b07d[_0x5d4a2a(0x16f)]();}if(_0x29b552['Wait']){const _0x2cebf7=$gameTemp[_0x5d4a2a(0x2a5)]();if(_0x2cebf7)_0x2cebf7[_0x5d4a2a(0x1c1)](_0x21b2e6+0x1);}}),Game_Picture['prototype'][_0x332605(0x245)]=function(_0x3fecfa,_0x57c3c8,_0x5e0a7b){const _0x52573a=_0x332605;_0x57c3c8=_0x57c3c8??0x2,_0x5e0a7b=_0x5e0a7b??0x3c;let _0x3c2afe=0x0,_0x393b8b=0x0,_0x1c3bd7=(Math[_0x52573a(0x1b5)]()>0.5?-0x1:0x1)*Math[_0x52573a(0x1d5)](0x168)+0x168*0x2;const _0x3c2ec7=[0x2,0x4,0x6,0x8][Math[_0x52573a(0x1d5)](0x4)];switch(_0x3c2ec7){case 0x2:case 0x8:_0x3c2afe=Math[_0x52573a(0x1d5)](Graphics['width']);break;case 0x4:case 0x6:_0x393b8b=Math['randomInt'](Graphics[_0x52573a(0x18a)]);break;}switch(_0x3c2ec7){case 0x2:_0x393b8b=Graphics['height'];break;case 0x8:_0x393b8b=0x0;break;case 0x4:_0x3c2afe=0x0;break;case 0x6:_0x3c2afe=Graphics[_0x52573a(0x1dd)];break;}this[_0x52573a(0x188)](),_0x3fecfa?(this[_0x52573a(0x2d9)]({'moveX':_0x3c2afe,'moveY':_0x393b8b,'opacity':0x0,'currentAngle':_0x1c3bd7,'scaleX':this[_0x52573a(0x27c)]*_0x57c3c8,'scaleY':this[_0x52573a(0x1de)]*_0x57c3c8,'duration':0x0}),this[_0x52573a(0x2d9)]({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'targetAngle':this[_0x52573a(0x2bc)](),'targetOpacity':this[_0x52573a(0x1cd)]||0xff,'targetScaleX':this['_scaleX'],'targetScaleY':this['_scaleY'],'duration':_0x5e0a7b,'easingType':_0x52573a(0x1c4)})):this[_0x52573a(0x2d9)]({'targetMoveX':_0x3c2afe,'targetMoveY':_0x393b8b,'targetAngle':_0x1c3bd7,'targetOpacity':0x0,'targetScaleX':this[_0x52573a(0x27c)]*_0x57c3c8,'targetScaleY':this[_0x52573a(0x1de)]*_0x57c3c8,'duration':_0x5e0a7b,'easingType':_0x52573a(0x1ac)});},PluginManager[_0x332605(0x242)](pluginData['name'],'Poison',_0x561af5=>{const _0x28d375=_0x332605;VisuMZ[_0x28d375(0x2cc)](_0x561af5,_0x561af5);const _0x3624d7=_0x561af5['PictureIDs'];if(_0x3624d7[_0x28d375(0x22c)]<=0x0)return;const _0x19d342=Math[_0x28d375(0x225)](Number(_0x561af5[_0x28d375(0x2f2)]),0x0),_0x32d520=_0x561af5[_0x28d375(0x1cc)]||[0x0,0x0,0x0,0x0],_0x48342f=Math[_0x28d375(0x225)](Number(_0x561af5[_0x28d375(0x1fd)]),0x1);let _0x8929f6=0x0;for(const _0xc34edd of _0x3624d7){const _0x326c59=$gameScreen['picture'](_0xc34edd);if(!_0x326c59)continue;_0x326c59[_0x28d375(0x1e7)](_0x19d342,_0x32d520,_0x48342f),_0x8929f6=_0x326c59['getTotalQueueDuration']();}if(_0x561af5[_0x28d375(0x223)]){const _0x42ba74=$gameTemp[_0x28d375(0x2a5)]();if(_0x42ba74)_0x42ba74[_0x28d375(0x1c1)](_0x8929f6+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x1e7)]=function(_0x1655a6,_0x10a1aa,_0x11651d){const _0xc13a74=_0x332605,_0x8ea7a7=Math[_0xc13a74(0x2f9)](_0x11651d/0x5);this[_0xc13a74(0x188)](),this[_0xc13a74(0x2d9)]({'targetMoveX':this['_x']-_0x1655a6,'duration':_0x8ea7a7,'targetTone':_0x10a1aa[_0xc13a74(0x299)](),'toneDuration':_0x8ea7a7*0x3,'easingType':_0xc13a74(0x214)}),this[_0xc13a74(0x2d9)]({'targetMoveX':this['_x']+_0x1655a6,'duration':_0x8ea7a7,'easingType':_0xc13a74(0x214)}),this[_0xc13a74(0x2d9)]({'targetMoveX':this['_x']-_0x1655a6,'duration':_0x8ea7a7,'easingType':_0xc13a74(0x214)}),this[_0xc13a74(0x2d9)]({'targetMoveX':this['_x']+_0x1655a6,'duration':_0x8ea7a7,'easingType':'InOutSine'}),this[_0xc13a74(0x2d9)]({'targetMoveX':this['_x'],'duration':_0x11651d-_0x8ea7a7*0x4,'targetTone':this[_0xc13a74(0x1ef)]?this[_0xc13a74(0x1ef)]['clone']():[0x0,0x0,0x0,0x0],'toneDuration':_0x8ea7a7,'easingType':_0xc13a74(0x214)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x1f3),_0x3a5be5=>{const _0x1ae545=_0x332605;VisuMZ[_0x1ae545(0x2cc)](_0x3a5be5,_0x3a5be5);const _0x29f659=_0x3a5be5[_0x1ae545(0x27b)];if(_0x29f659[_0x1ae545(0x22c)]<=0x0)return;const _0x5793fd=_0x3a5be5['Filename']||'';if(_0x5793fd==='')return;const _0x2f0d0b=Math['max'](Number(_0x3a5be5[_0x1ae545(0x206)]),0x1),_0x311b57=Math['max'](Number(_0x3a5be5[_0x1ae545(0x1fd)]),0x1);let _0x8ace35=0x0;for(const _0x16c9e1 of _0x29f659){const _0x3c5c15=$gameScreen[_0x1ae545(0x2a2)](_0x16c9e1);if(!_0x3c5c15)continue;_0x3c5c15[_0x1ae545(0x277)](_0x5793fd,_0x2f0d0b,_0x311b57),_0x8ace35=_0x3c5c15[_0x1ae545(0x16f)]();}if(_0x3a5be5[_0x1ae545(0x223)]){const _0x55975b=$gameTemp['getLastPluginCommandInterpreter']();if(_0x55975b)_0x55975b['wait'](_0x8ace35+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x277)]=function(_0xce2515,_0x1f341e,_0x4f3550){const _0x3d3408=_0x332605;ImageManager['loadPicture'](_0xce2515);let _0x2ee802=_0x1f341e;this[_0x3d3408(0x188)]();while(_0x2ee802--){this[_0x3d3408(0x2d9)]({'filename':_0xce2515,'duration':_0x4f3550}),this[_0x3d3408(0x2d9)]({'filename':this[_0x3d3408(0x1c9)],'duration':_0x4f3550});}this[_0x3d3408(0x2d9)]({'filename':_0xce2515,'duration':0x0});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x276),_0x5d624e=>{const _0x197280=_0x332605;VisuMZ['ConvertParams'](_0x5d624e,_0x5d624e);const _0x17cd76=_0x5d624e['PictureIDs'];if(_0x17cd76[_0x197280(0x22c)]<=0x0)return;const _0x2598be=Math['max'](Number(_0x5d624e[_0x197280(0x1fd)]),0x1);let _0x44ce79=0x0;for(const _0x255dd0 of _0x17cd76){const _0x28a20c=$gameScreen['picture'](_0x255dd0);if(!_0x28a20c)continue;_0x28a20c[_0x197280(0x2db)](_0x2598be),_0x44ce79=_0x28a20c['getTotalQueueDuration']();}if(_0x5d624e['Wait']){const _0x33bb97=$gameTemp[_0x197280(0x2a5)]();if(_0x33bb97)_0x33bb97[_0x197280(0x1c1)](_0x44ce79+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x2db)]=function(_0x2415eb){const _0x2c0613=_0x332605;this[_0x2c0613(0x188)](),this[_0x2c0613(0x2d9)]({'duration':_0x2415eb,'targetHue':this[_0x2c0613(0x2da)]()+0x168,'hueDuration':_0x2415eb,'easingType':'Linear'}),this[_0x2c0613(0x2d9)]({'duration':0x0,'currentHue':this['getPictureEffectsHue'](),'easingType':'Linear'});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x238),_0x3d591f=>{const _0x203efe=_0x332605;VisuMZ['ConvertParams'](_0x3d591f,_0x3d591f);const _0x221a08=_0x3d591f[_0x203efe(0x27b)];if(_0x221a08[_0x203efe(0x22c)]<=0x0)return;const _0x2c2feb=Number(_0x3d591f[_0x203efe(0x166)])*0x64,_0x3c0e55=Math['max'](Number(_0x3d591f[_0x203efe(0x1fd)]),0x1);let _0x42bd85=0x0;for(const _0x2e9a94 of _0x221a08){const _0x5dda0e=$gameScreen[_0x203efe(0x2a2)](_0x2e9a94);if(!_0x5dda0e)continue;_0x5dda0e['setupEffect_PulseScale'](_0x2c2feb,_0x3c0e55),_0x42bd85=_0x5dda0e[_0x203efe(0x16f)]();}if(_0x3d591f[_0x203efe(0x223)]){const _0x157ab4=$gameTemp[_0x203efe(0x2a5)]();if(_0x157ab4)_0x157ab4[_0x203efe(0x1c1)](_0x42bd85+0x1);}}),Game_Picture['prototype']['setupEffect_PulseScale']=function(_0x25dee6,_0x32a8fb){const _0x1e9978=_0x332605;_0x32a8fb=_0x32a8fb||0x3c,this[_0x1e9978(0x188)](),this['addToQueue']({'targetScaleX':_0x25dee6,'targetScaleY':_0x25dee6,'duration':0x3c,'easingType':_0x1e9978(0x297)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x1d8),_0x18ea33=>{const _0x577a11=_0x332605;VisuMZ[_0x577a11(0x2cc)](_0x18ea33,_0x18ea33);const _0x54df05=_0x18ea33[_0x577a11(0x27b)];if(_0x54df05[_0x577a11(0x22c)]<=0x0)return;const _0x11e280=Number(_0x18ea33[_0x577a11(0x20f)]),_0x285197=Number(_0x18ea33[_0x577a11(0x2d5)]),_0x457070=Math['max'](Number(_0x18ea33[_0x577a11(0x1fd)]),0x1);let _0x3d3e8e=0x0;for(const _0x123c0a of _0x54df05){const _0x1c978e=$gameScreen[_0x577a11(0x2a2)](_0x123c0a);if(!_0x1c978e)continue;_0x1c978e[_0x577a11(0x2ac)](_0x11e280,_0x285197,_0x457070),_0x3d3e8e=_0x1c978e['getTotalQueueDuration']();}if(_0x18ea33['Wait']){const _0x381169=$gameTemp[_0x577a11(0x2a5)]();if(_0x381169)_0x381169[_0x577a11(0x1c1)](_0x3d3e8e+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_QuickPress']=function(_0x4f362f,_0x599ec5,_0x2016ea){const _0x4cb8c3=_0x332605;_0x4f362f=_0x4f362f??0x8,_0x599ec5=_0x599ec5??0x10,_0x2016ea=_0x2016ea||0x4,this[_0x4cb8c3(0x188)](),this['addToQueue']({'targetMoveX':this['_x']+_0x4f362f,'targetMoveY':this['_y']+_0x599ec5,'duration':_0x2016ea,'easingType':_0x4cb8c3(0x256)}),this[_0x4cb8c3(0x2d9)]({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'duration':_0x2016ea});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],'Random_InOut',_0x83603d=>{const _0x167095=_0x332605;VisuMZ[_0x167095(0x2cc)](_0x83603d,_0x83603d);const _0x6af5d=_0x83603d['PictureIDs'];if(_0x6af5d[_0x167095(0x22c)]<=0x0)return;const _0xb3f759=_0x83603d['EffectIn']==='In',_0x235562=Math['max'](Number(_0x83603d[_0x167095(0x2f2)]),0x1),_0x55f5ef=Math[_0x167095(0x225)](Number(_0x83603d[_0x167095(0x1fd)]),0x1);let _0x55d64e=0x0;for(const _0x311ae4 of _0x6af5d){const _0x57bea5=$gameScreen[_0x167095(0x2a2)](_0x311ae4);if(!_0x57bea5)continue;_0x57bea5[_0x167095(0x2fc)](_0xb3f759,_0x235562,_0x55f5ef),_0x55d64e=_0x57bea5[_0x167095(0x16f)]();}if(_0x83603d['Wait']){const _0x5c98f0=$gameTemp['getLastPluginCommandInterpreter']();if(_0x5c98f0)_0x5c98f0[_0x167095(0x1c1)](_0x55d64e+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_RandomInOut']=function(_0x2c9437,_0x58209c,_0x27a4a7){const _0x1ca3fd=_0x332605;_0x58209c=_0x58209c||0x1,_0x27a4a7=_0x27a4a7||0x3c,this[_0x1ca3fd(0x188)]();if(_0x2c9437){let _0x50ef36=_0x27a4a7;while(_0x50ef36--){const _0x355544=_0x50ef36/_0x27a4a7;this[_0x1ca3fd(0x2d9)]({'moveX':this['_x']+(Math['random']()>0.5?-0x1:0x1)*Math['randomInt'](Math[_0x1ca3fd(0x2c6)](_0x58209c)),'moveY':this['_y']+(Math['random']()>0.5?-0x1:0x1)*Math[_0x1ca3fd(0x1d5)](Math[_0x1ca3fd(0x2c6)](_0x58209c)),'opacity':this[_0x1ca3fd(0x1cd)]*(0x1-_0x355544),'duration':0x1});}this[_0x1ca3fd(0x2d9)]({'moveX':this['_x'],'moveY':this['_y'],'opacity':this[_0x1ca3fd(0x1cd)]||0xff,'duration':0x0});}else{let _0x5b91bd=_0x27a4a7;while(_0x5b91bd--){const _0x4fa8a6=0x1-_0x5b91bd/_0x27a4a7;this[_0x1ca3fd(0x2d9)]({'moveX':this['_x']+(Math[_0x1ca3fd(0x1b5)]()>0.5?-0x1:0x1)*Math[_0x1ca3fd(0x1d5)](Math[_0x1ca3fd(0x2c6)](_0x58209c)),'moveY':this['_y']+(Math[_0x1ca3fd(0x1b5)]()>0.5?-0x1:0x1)*Math['randomInt'](Math['round'](_0x58209c)),'opacity':this['_opacity']*(0x1-_0x4fa8a6),'duration':0x1});}this[_0x1ca3fd(0x2d9)]({'moveX':this['_x'],'moveY':this['_y'],'opacity':0x0,'duration':0x0});}},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x279),_0x5911c8=>{const _0x1518b2=_0x332605;VisuMZ[_0x1518b2(0x2cc)](_0x5911c8,_0x5911c8);const _0x3b9a81=_0x5911c8['PictureIDs'];if(_0x3b9a81[_0x1518b2(0x22c)]<=0x0)return;const _0x19d2f8=_0x5911c8[_0x1518b2(0x1e5)]==='In',_0x2f0eb4=Math[_0x1518b2(0x225)](Number(_0x5911c8[_0x1518b2(0x2f2)]),0x1),_0x374735=_0x5911c8[_0x1518b2(0x1eb)]===_0x1518b2(0x231),_0x2fcbec=Math['max'](Number(_0x5911c8[_0x1518b2(0x2b3)]),0x1),_0x53825b=Math[_0x1518b2(0x225)](Number(_0x5911c8[_0x1518b2(0x1fd)]),0x1);let _0x4c4ab7=0x0;for(const _0x2e0869 of _0x3b9a81){const _0x32d57a=$gameScreen[_0x1518b2(0x2a2)](_0x2e0869);if(!_0x32d57a)continue;_0x32d57a[_0x1518b2(0x1b1)](_0x19d2f8,_0x2f0eb4,_0x374735,_0x2fcbec,_0x53825b),_0x4c4ab7=_0x32d57a[_0x1518b2(0x16f)]();}if(_0x5911c8['Wait']){const _0x18cde0=$gameTemp[_0x1518b2(0x2a5)]();if(_0x18cde0)_0x18cde0[_0x1518b2(0x1c1)](_0x4c4ab7+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_RollInOut']=function(_0x5450e3,_0x394aa0,_0x2e2f2c,_0x37341c,_0x5653cc){const _0xcaa99e=_0x332605;_0x394aa0=_0x394aa0||0x1f4,_0x37341c=_0x37341c||0x1,_0x5653cc=_0x5653cc||0x3c,this['clearQueue'](),_0x5450e3?(this[_0xcaa99e(0x2d9)]({'anchor':{'x':0.5,'y':0.5},'currentAngle':-_0x37341c*0x168+this['anglePlus'](),'moveX':this['_x']+(_0x2e2f2c?_0x394aa0:-_0x394aa0),'opacity':0x0,'duration':0x0}),this[_0xcaa99e(0x2d9)]({'targetAngle':this[_0xcaa99e(0x2bc)](),'targetOpacity':this['_opacity']||0xff,'targetMoveX':this['_x'],'duration':_0x5653cc,'easingType':_0xcaa99e(0x256)})):this['addToQueue']({'targetAngle':_0x37341c*0x168+this[_0xcaa99e(0x2bc)](),'targetMoveX':this['_x']+(_0x2e2f2c?-_0x394aa0:_0x394aa0),'targetOpacity':0x0,'anchor':{'x':0.5,'y':0.5},'duration':_0x5653cc,'easingType':_0xcaa99e(0x256)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x1c6),_0x1aa198=>{const _0x5191c2=_0x332605;VisuMZ[_0x5191c2(0x2cc)](_0x1aa198,_0x1aa198);const _0x2e0198=_0x1aa198[_0x5191c2(0x27b)];if(_0x2e0198['length']<=0x0)return;const _0x380a30=_0x1aa198['Direction']===_0x5191c2(0x2a7),_0x19f71a=Math[_0x5191c2(0x225)](Number(_0x1aa198[_0x5191c2(0x2b3)]),0x1),_0x1e9964=Math[_0x5191c2(0x225)](Number(_0x1aa198['Duration']),0x1);let _0x496ad=0x0;for(const _0x270ac5 of _0x2e0198){const _0x40f5b1=$gameScreen['picture'](_0x270ac5);if(!_0x40f5b1)continue;_0x40f5b1[_0x5191c2(0x29c)](_0x380a30,_0x19f71a,_0x1e9964),_0x496ad=_0x40f5b1['getTotalQueueDuration']();}if(_0x1aa198[_0x5191c2(0x223)]){const _0x2907eb=$gameTemp['getLastPluginCommandInterpreter']();if(_0x2907eb)_0x2907eb[_0x5191c2(0x1c1)](_0x496ad+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x29c)]=function(_0x2d23b9,_0x50c409,_0x29b682){const _0x253140=_0x332605;_0x50c409=_0x50c409||0x1,_0x29b682=_0x29b682||0x0,this['clearQueue'](),this[_0x253140(0x2d9)]({'targetAngle':this[_0x253140(0x2bc)]()+(_0x2d23b9?-0x1:0x1)*(_0x50c409*0x168),'duration':_0x29b682,'easingType':'Linear'}),this[_0x253140(0x2d9)]({'currentAngle':this[_0x253140(0x2bc)](),'duration':0x0,'easingType':_0x253140(0x256)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x1be),_0x592e9b=>{const _0x5c8185=_0x332605;VisuMZ[_0x5c8185(0x2cc)](_0x592e9b,_0x592e9b);const _0x2bce3e=_0x592e9b['PictureIDs'];if(_0x2bce3e[_0x5c8185(0x22c)]<=0x0)return;const _0xa6572b=Math[_0x5c8185(0x225)](Number(_0x592e9b['Times']),0x1),_0xd3fac2=Math[_0x5c8185(0x225)](Number(_0x592e9b[_0x5c8185(0x2f2)]),0x1);let _0x58bd3a=0x0;for(const _0x47860d of _0x2bce3e){const _0x281b52=$gameScreen[_0x5c8185(0x2a2)](_0x47860d);if(!_0x281b52)continue;_0x281b52[_0x5c8185(0x2a6)](_0xa6572b,_0xd3fac2),_0x58bd3a=_0x281b52[_0x5c8185(0x16f)]();}if(_0x592e9b[_0x5c8185(0x223)]){const _0x45d48b=$gameTemp[_0x5c8185(0x2a5)]();if(_0x45d48b)_0x45d48b['wait'](_0x58bd3a+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x2a6)]=function(_0xf6a09a,_0x42743d){const _0x182058=_0x332605;_0xf6a09a=_0xf6a09a||0xa,_0x42743d=_0x42743d||0x8,this[_0x182058(0x188)]();while(_0xf6a09a--){this[_0x182058(0x2d9)]({'targetMoveX':this['_x']+_0x42743d,'duration':0x2,'easingType':_0x182058(0x256)}),this[_0x182058(0x2d9)]({'targetMoveX':this['_x']-_0x42743d,'duration':0x4,'easingType':_0x182058(0x256)});}this[_0x182058(0x2d9)]({'targetMoveX':this['_x'],'duration':0x2});},PluginManager[_0x332605(0x242)](pluginData['name'],_0x332605(0x2a8),_0x34b09a=>{const _0x472d14=_0x332605;VisuMZ[_0x472d14(0x2cc)](_0x34b09a,_0x34b09a);const _0x515c7d=_0x34b09a[_0x472d14(0x27b)];if(_0x515c7d[_0x472d14(0x22c)]<=0x0)return;const _0x29c95e=_0x34b09a['EffectIn']==='In',_0x1aa0bd=Math[_0x472d14(0x225)](Number(_0x34b09a[_0x472d14(0x1fd)]),0x1);let _0x5bc361=0x0;for(const _0x10af33 of _0x515c7d){const _0x1f78f4=$gameScreen['picture'](_0x10af33);if(!_0x1f78f4)continue;_0x1f78f4['setupEffect_ShrinkInOut'](_0x29c95e,_0x1aa0bd),_0x5bc361=_0x1f78f4['getTotalQueueDuration']();}if(_0x34b09a[_0x472d14(0x223)]){const _0x1754a8=$gameTemp[_0x472d14(0x2a5)]();if(_0x1754a8)_0x1754a8[_0x472d14(0x1c1)](_0x5bc361+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x21e)]=function(_0x5a8e85,_0x34be62){const _0x49eb15=_0x332605;_0x34be62=_0x34be62||0x14,this[_0x49eb15(0x188)](),_0x5a8e85?(this['addToQueue']({'scaleX':this[_0x49eb15(0x27c)]*0x4,'scaleY':this[_0x49eb15(0x1de)]*0x4,'opacity':0x0,'duration':0x0,'easingType':_0x49eb15(0x256)}),this['addToQueue']({'targetScaleX':this[_0x49eb15(0x27c)],'targetScaleY':this['_scaleY'],'targetOpacity':this[_0x49eb15(0x1cd)]||0xff,'duration':_0x34be62,'easingType':'InOutSine'})):this['addToQueue']({'targetScaleX':this[_0x49eb15(0x27c)]*0.05,'targetScaleY':this[_0x49eb15(0x1de)]*0.05,'targetOpacity':0x0,'duration':_0x34be62,'easingType':_0x49eb15(0x214)});},PluginManager[_0x332605(0x242)](pluginData['name'],_0x332605(0x170),_0x35fa17=>{const _0x4199f2=_0x332605;VisuMZ[_0x4199f2(0x2cc)](_0x35fa17,_0x35fa17);const _0x4f8064=_0x35fa17['PictureIDs'];if(_0x4f8064[_0x4199f2(0x22c)]<=0x0)return;const _0x2e099a=Math['max'](Number(_0x35fa17['Times']),0x1),_0x263dd3=Math[_0x4199f2(0x225)](Number(_0x35fa17[_0x4199f2(0x2f2)]),0x1);let _0x102385=0x0;for(const _0x4c4527 of _0x4f8064){const _0x417666=$gameScreen[_0x4199f2(0x2a2)](_0x4c4527);if(!_0x417666)continue;_0x417666['setupEffect_Spazz'](_0x2e099a,_0x263dd3),_0x102385=_0x417666[_0x4199f2(0x16f)]();}if(_0x35fa17[_0x4199f2(0x223)]){const _0x2a267c=$gameTemp[_0x4199f2(0x2a5)]();if(_0x2a267c)_0x2a267c[_0x4199f2(0x1c1)](_0x102385+0x1);}}),Game_Picture['prototype'][_0x332605(0x2b6)]=function(_0x2a43f6,_0x59dbe3){const _0x662118=_0x332605;_0x2a43f6=_0x2a43f6||0xa,_0x59dbe3=_0x59dbe3||0xa,this[_0x662118(0x188)]();while(_0x2a43f6--){this[_0x662118(0x2d9)]({'targetMoveX':this['_x']+(Math[_0x662118(0x1b5)]()>0.5?-0x1:0x1)*(Math['randomInt'](_0x59dbe3)+0x1),'targetMoveY':this['_y']+(Math['random']()>0.5?-0x1:0x1)*(Math[_0x662118(0x1d5)](_0x59dbe3)+0x1),'duration':0x2,'easingType':'Linear'});}this['addToQueue']({'targetMoveX':this['_x'],'targetMoveY':this['_y'],'duration':0x2,'easingType':_0x662118(0x256)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x2c1),_0x206686=>{const _0x1dbe62=_0x332605;VisuMZ[_0x1dbe62(0x2cc)](_0x206686,_0x206686);const _0x33f8cc=_0x206686[_0x1dbe62(0x27b)];if(_0x33f8cc[_0x1dbe62(0x22c)]<=0x0)return;const _0x371a51=Number(_0x206686[_0x1dbe62(0x20f)])||0x0,_0x41de14=Number(_0x206686['Rate'])||0x0,_0x6ecaf9=Number(_0x206686[_0x1dbe62(0x191)])||0x0,_0x4974c6=Math[_0x1dbe62(0x225)](Number(_0x206686['Duration']),0x0);for(const _0x1b2f6e of _0x33f8cc){const _0x448529=$gameScreen[_0x1dbe62(0x2a2)](_0x1b2f6e);if(!_0x448529)continue;_0x448529[_0x1dbe62(0x268)](_0x371a51,_0x41de14,_0x6ecaf9,_0x4974c6);}if(_0x206686[_0x1dbe62(0x223)]&&_0x4974c6>0x0){const _0x2640bf=$gameTemp['getLastPluginCommandInterpreter']();if(_0x2640bf)_0x2640bf[_0x1dbe62(0x1c1)](_0x4974c6);}}),PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x285),_0x2e3160=>{const _0x2ffdae=_0x332605;VisuMZ[_0x2ffdae(0x2cc)](_0x2e3160,_0x2e3160);const _0x2309c4=_0x2e3160['PictureIDs'];if(_0x2309c4[_0x2ffdae(0x22c)]<=0x0)return;const _0x4b7499=_0x2e3160[_0x2ffdae(0x274)]||'';if(_0x4b7499==='')return;const _0x505a8f=Number(_0x2e3160[_0x2ffdae(0x166)]),_0x54ee42=Math[_0x2ffdae(0x225)](Number(_0x2e3160['Spins']),0x1),_0x1c8d49=Math[_0x2ffdae(0x225)](Number(_0x2e3160[_0x2ffdae(0x1fd)]),0x1);let _0x18d6ce=0x0;for(const _0x5d3cd4 of _0x2309c4){const _0x139b00=$gameScreen[_0x2ffdae(0x2a2)](_0x5d3cd4);if(!_0x139b00)continue;_0x139b00['setupEffect_SpinChange'](_0x4b7499,_0x505a8f,_0x54ee42,_0x1c8d49),_0x18d6ce=_0x139b00['getTotalQueueDuration']();}if(_0x2e3160[_0x2ffdae(0x223)]){const _0x32cbb3=$gameTemp[_0x2ffdae(0x2a5)]();if(_0x32cbb3)_0x32cbb3[_0x2ffdae(0x1c1)](_0x18d6ce+0x1);}}),Game_Picture['prototype'][_0x332605(0x185)]=function(_0x2a9712,_0x86265a,_0x188a61,_0x46d6f0){const _0xc1989d=_0x332605;ImageManager[_0xc1989d(0x1ca)](_0x2a9712),this['clearQueue'](),this['addToQueue']({'targetAnchor':{'x':0.5,'y':0.5},'targetAngle':this[_0xc1989d(0x2bc)]()+_0x188a61*0x168,'targetScaleX':this[_0xc1989d(0x27c)]*_0x86265a,'targetScaleY':this[_0xc1989d(0x1de)]*_0x86265a,'duration':Math['ceil'](_0x46d6f0/0x2),'easingType':_0xc1989d(0x214)}),this[_0xc1989d(0x2d9)]({'filename':_0x2a9712,'targetAnchor':JsonEx[_0xc1989d(0x293)](this[_0xc1989d(0x2a0)]),'currentAngle':this[_0xc1989d(0x2bc)]()-_0x188a61*0x168,'targetAngle':this[_0xc1989d(0x2bc)](),'targetScaleX':this[_0xc1989d(0x27c)],'targetScaleY':this[_0xc1989d(0x1de)],'duration':Math['floor'](_0x46d6f0/0x2),'easingType':_0xc1989d(0x214)});},PluginManager[_0x332605(0x242)](pluginData['name'],'Spin_InOut',_0xfafcd2=>{const _0x3c7a26=_0x332605;VisuMZ[_0x3c7a26(0x2cc)](_0xfafcd2,_0xfafcd2);const _0x7eece7=_0xfafcd2[_0x3c7a26(0x27b)];if(_0x7eece7[_0x3c7a26(0x22c)]<=0x0)return;const _0x2317e1=_0xfafcd2[_0x3c7a26(0x1e5)]==='In',_0x2cfd28=Math[_0x3c7a26(0x225)](Number(_0xfafcd2[_0x3c7a26(0x2b3)]),0x1),_0x2ca61a=Number(_0xfafcd2[_0x3c7a26(0x166)]),_0x5b7161=Math[_0x3c7a26(0x225)](Number(_0xfafcd2[_0x3c7a26(0x1fd)]),0x1);let _0x4875fd=0x0;for(const _0x29dabb of _0x7eece7){const _0x16cd5c=$gameScreen['picture'](_0x29dabb);if(!_0x16cd5c)continue;_0x16cd5c[_0x3c7a26(0x163)](_0x2317e1,_0x2cfd28,_0x2ca61a,_0x5b7161),_0x4875fd=_0x16cd5c[_0x3c7a26(0x16f)]();}if(_0xfafcd2[_0x3c7a26(0x223)]){const _0x107876=$gameTemp[_0x3c7a26(0x2a5)]();if(_0x107876)_0x107876[_0x3c7a26(0x1c1)](_0x4875fd+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x163)]=function(_0x5add7b,_0x255d60,_0x2324fe,_0x15572f){const _0x1cdbf6=_0x332605;_0x255d60=_0x255d60||0x2,_0x2324fe=_0x2324fe||0.5,_0x15572f=_0x15572f||0x3c,this[_0x1cdbf6(0x188)](),_0x5add7b?(this[_0x1cdbf6(0x2d9)]({'anchor':{'x':0.5,'y':0.5},'currentAngle':-_0x255d60*0x168+this['anglePlus'](),'scaleX':this['_scaleX']*_0x2324fe,'scaleY':this[_0x1cdbf6(0x1de)]*_0x2324fe,'opacity':0x0,'duration':0x0}),this[_0x1cdbf6(0x2d9)]({'targetAngle':this['anglePlus'](),'targetOpacity':this[_0x1cdbf6(0x1cd)]||0xff,'targetScaleX':this[_0x1cdbf6(0x27c)],'targetScaleY':this['_scaleY'],'duration':_0x15572f,'easingType':_0x1cdbf6(0x29d)})):this[_0x1cdbf6(0x2d9)]({'anchor':{'x':0.5,'y':0.5},'targetAngle':_0x255d60*0x168+this[_0x1cdbf6(0x2bc)](),'targetOpacity':0x0,'targetScaleX':this['_scaleX']*_0x2324fe,'targetScaleY':this[_0x1cdbf6(0x1de)]*_0x2324fe,'duration':_0x15572f,'easingType':_0x1cdbf6(0x29d)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x25e),_0x4e07c1=>{const _0x168a4c=_0x332605;VisuMZ[_0x168a4c(0x2cc)](_0x4e07c1,_0x4e07c1);const _0x5cb7a7=_0x4e07c1['PictureIDs'];if(_0x5cb7a7[_0x168a4c(0x22c)]<=0x0)return;const _0xede376=_0x4e07c1[_0x168a4c(0x1e5)]==='In',_0x21e7c8=Math['max'](Number(_0x4e07c1['Duration']),0x1);let _0x21879b=0x0;for(const _0x5a1551 of _0x5cb7a7){const _0x442cdc=$gameScreen[_0x168a4c(0x2a2)](_0x5a1551);if(!_0x442cdc)continue;_0x442cdc['setupEffect_SquishInOut'](_0xede376,_0x21e7c8),_0x21879b=_0x442cdc[_0x168a4c(0x16f)]();}if(_0x4e07c1[_0x168a4c(0x223)]){const _0x3a56d6=$gameTemp[_0x168a4c(0x2a5)]();if(_0x3a56d6)_0x3a56d6['wait'](_0x21879b+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x1a9)]=function(_0x18b2f4,_0x59e486){const _0x59ff66=_0x332605;_0x59e486=_0x59e486||0x14,this[_0x59ff66(0x188)](),_0x18b2f4?(this[_0x59ff66(0x2d9)]({'scaleX':this[_0x59ff66(0x27c)]*0x4,'opacity':0x0,'duration':0x0,'easingType':_0x59ff66(0x256)}),this['addToQueue']({'targetScaleX':this[_0x59ff66(0x27c)],'targetOpacity':this[_0x59ff66(0x1cd)]||0xff,'duration':_0x59e486,'easingType':_0x59ff66(0x214)})):this[_0x59ff66(0x2d9)]({'targetScaleX':this[_0x59ff66(0x27c)]*0.05,'targetOpacity':0x0,'duration':_0x59e486,'easingType':_0x59ff66(0x214)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x1da),_0x25f879=>{const _0x29a7a3=_0x332605;VisuMZ[_0x29a7a3(0x2cc)](_0x25f879,_0x25f879);const _0xda5ae=_0x25f879[_0x29a7a3(0x27b)];if(_0xda5ae[_0x29a7a3(0x22c)]<=0x0)return;const _0x34055f=_0x25f879['EffectIn']==='In',_0x5816cb=Math['max'](Number(_0x25f879[_0x29a7a3(0x1fd)]),0x1);let _0x62d1d1=0x0;for(const _0x53a1c3 of _0xda5ae){const _0xd50116=$gameScreen['picture'](_0x53a1c3);if(!_0xd50116)continue;_0xd50116[_0x29a7a3(0x1ba)](_0x34055f,_0x5816cb),_0x62d1d1=_0xd50116[_0x29a7a3(0x16f)]();}if(_0x25f879['Wait']){const _0x2bad1e=$gameTemp[_0x29a7a3(0x2a5)]();if(_0x2bad1e)_0x2bad1e[_0x29a7a3(0x1c1)](_0x62d1d1+0x1);}}),Game_Picture['prototype'][_0x332605(0x1ba)]=function(_0x5a0f85,_0x4eb100){const _0x164ff9=_0x332605;_0x4eb100=_0x4eb100||0x14,this[_0x164ff9(0x188)](),_0x5a0f85?(this[_0x164ff9(0x2d9)]({'scaleX':this['_scaleX']*0.05,'opacity':0x0,'duration':0x0,'easingType':_0x164ff9(0x256)}),this[_0x164ff9(0x2d9)]({'targetScaleX':this['_scaleX'],'targetOpacity':this[_0x164ff9(0x1cd)]||0xff,'duration':_0x4eb100,'easingType':_0x164ff9(0x214)})):this['addToQueue']({'targetScaleX':this[_0x164ff9(0x27c)]*0x4,'targetOpacity':0x0,'duration':_0x4eb100,'easingType':'InOutSine'});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],'Submerge_InOut',_0x265ab2=>{const _0x34e2cf=_0x332605;VisuMZ[_0x34e2cf(0x2cc)](_0x265ab2,_0x265ab2);const _0x4be8de=_0x265ab2['PictureIDs'];if(_0x4be8de[_0x34e2cf(0x22c)]<=0x0)return;const _0x5a6d72=_0x265ab2['EffectIn']==='In',_0x3527b2=_0x265ab2[_0x34e2cf(0x1cc)]||[0x0,0x80,0xa0,0x0],_0xbf7964=Math['max'](Number(_0x265ab2[_0x34e2cf(0x1fd)]),0xa);let _0x451a32=0x0;for(const _0xdaa085 of _0x4be8de){const _0x169df0=$gameScreen['picture'](_0xdaa085);if(!_0x169df0)continue;_0x169df0[_0x34e2cf(0x267)](_0x5a6d72,_0x3527b2,_0xbf7964),_0x451a32=_0x169df0['getTotalQueueDuration']();}if(_0x265ab2[_0x34e2cf(0x223)]){const _0x4a272f=$gameTemp[_0x34e2cf(0x2a5)]();if(_0x4a272f)_0x4a272f[_0x34e2cf(0x1c1)](_0x451a32+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_SubmergeInOut']=function(_0x3b0101,_0x32cea8,_0x4f6b99){const _0x5a76df=_0x332605;_0x4f6b99=_0x4f6b99||0x3c,this[_0x5a76df(0x188)](),_0x3b0101?this[_0x5a76df(0x2d9)]({'moveY':Graphics[_0x5a76df(0x18a)],'targetMoveY':this['_y'],'opacity':0x0,'targetOpacity':this[_0x5a76df(0x1cd)]||0xff,'duration':_0x4f6b99,'tone':_0x32cea8[_0x5a76df(0x299)](),'targetTone':this['_tone']?this[_0x5a76df(0x1ef)][_0x5a76df(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x4f6b99,'easingType':_0x5a76df(0x1c4)}):this[_0x5a76df(0x2d9)]({'targetTone':_0x32cea8[_0x5a76df(0x299)](),'toneDuration':_0x4f6b99,'targetMoveY':Graphics['height'],'targetOpacity':0x0,'duration':_0x4f6b99,'blendMode':this['_blendMode'],'easingType':_0x5a76df(0x1ac)});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x269),_0x46befd=>{const _0x1e380c=_0x332605;VisuMZ[_0x1e380c(0x2cc)](_0x46befd,_0x46befd);const _0x1ec45e=_0x46befd['PictureIDs'];if(_0x1ec45e[_0x1e380c(0x22c)]<=0x0)return;const _0x35c8e9=Number(_0x46befd['Range'])||0x0,_0x14b0d0=Number(_0x46befd[_0x1e380c(0x2bb)])||0x0,_0x341138=Number(_0x46befd[_0x1e380c(0x191)])||0x0,_0x478fc0=Math[_0x1e380c(0x225)](Number(_0x46befd[_0x1e380c(0x1fd)]),0x0);for(const _0x3e22b2 of _0x1ec45e){const _0x553b37=$gameScreen[_0x1e380c(0x2a2)](_0x3e22b2);if(!_0x553b37)continue;_0x553b37[_0x1e380c(0x288)](_0x35c8e9,_0x14b0d0,_0x341138,_0x478fc0);}if(_0x46befd[_0x1e380c(0x223)]&&_0x478fc0>0x0){const _0x4660ba=$gameTemp[_0x1e380c(0x2a5)]();if(_0x4660ba)_0x4660ba[_0x1e380c(0x1c1)](_0x478fc0);}}),PluginManager['registerCommand'](pluginData['name'],_0x332605(0x2b4),_0x2655f2=>{const _0x3d7608=_0x332605;VisuMZ[_0x3d7608(0x2cc)](_0x2655f2,_0x2655f2);const _0x46d94a=_0x2655f2[_0x3d7608(0x27b)];if(_0x46d94a[_0x3d7608(0x22c)]<=0x0)return;const _0x3e592c=_0x2655f2[_0x3d7608(0x1e5)]==='In',_0x72a159=_0x2655f2[_0x3d7608(0x1cc)]||[0xf0,0xf0,0xf0,0x0],_0x115eef=Math['max'](Number(_0x2655f2[_0x3d7608(0x1fd)]),0x1);let _0x89d669=0x0;for(const _0x191599 of _0x46d94a){const _0x362f02=$gameScreen[_0x3d7608(0x2a2)](_0x191599);if(!_0x362f02)continue;_0x362f02[_0x3d7608(0x2f8)](_0x3e592c,_0x72a159,_0x115eef),_0x89d669=_0x362f02[_0x3d7608(0x16f)]();}if(_0x2655f2[_0x3d7608(0x223)]){const _0x3a6b0b=$gameTemp[_0x3d7608(0x2a5)]();if(_0x3a6b0b)_0x3a6b0b['wait'](_0x89d669+0x1);}}),Game_Picture['prototype'][_0x332605(0x2f8)]=function(_0x15a5bc,_0x392a26,_0xb31a1f){const _0x2000fd=_0x332605;_0xb31a1f=_0xb31a1f||0x3c,this[_0x2000fd(0x188)](),_0x15a5bc?(this[_0x2000fd(0x2d9)]({'opacity':0x0,'duration':0x0,'currentBlur':0xa}),this[_0x2000fd(0x2d9)]({'opacity':this[_0x2000fd(0x1cd)]||0xff,'duration':_0xb31a1f,'tone':_0x392a26[_0x2000fd(0x299)](),'targetBlur':0x0,'blurDuration':_0xb31a1f,'targetTone':this[_0x2000fd(0x1ef)]?this['_tone'][_0x2000fd(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':_0xb31a1f,'easingType':_0x2000fd(0x256)})):(this[_0x2000fd(0x2d9)]({'duration':_0xb31a1f,'targetTone':_0x392a26['clone'](),'toneDuration':_0xb31a1f,'targetBlur':0xa,'blurDuration':_0xb31a1f,'easingType':_0x2000fd(0x256)}),this[_0x2000fd(0x2d9)]({'duration':0x0,'opacity':0x0,'tone':this[_0x2000fd(0x1ef)]?this[_0x2000fd(0x1ef)][_0x2000fd(0x299)]():[0x0,0x0,0x0,0x0],'currentBlur':0x0}));},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],'Television_InOut',_0x3f828b=>{const _0x3b0162=_0x332605;VisuMZ[_0x3b0162(0x2cc)](_0x3f828b,_0x3f828b);const _0x34f184=_0x3f828b['PictureIDs'];if(_0x34f184[_0x3b0162(0x22c)]<=0x0)return;const _0x4c4cb2=_0x3f828b['EffectIn']==='In',_0xa644ae=Math['max'](Number(_0x3f828b[_0x3b0162(0x1fd)]),0x1);let _0x2b72dc=0x0;for(const _0x5eabf6 of _0x34f184){const _0x35faa2=$gameScreen[_0x3b0162(0x2a2)](_0x5eabf6);if(!_0x35faa2)continue;_0x35faa2['setupEffect_TelevisionInOut'](_0x4c4cb2,_0xa644ae),_0x2b72dc=_0x35faa2[_0x3b0162(0x16f)]();}if(_0x3f828b[_0x3b0162(0x223)]){const _0x2b2aae=$gameTemp[_0x3b0162(0x2a5)]();if(_0x2b2aae)_0x2b2aae[_0x3b0162(0x1c1)](_0x2b72dc+0x1);}}),Game_Picture['prototype'][_0x332605(0x17d)]=function(_0x1505b6,_0x461984){const _0x47ad6a=_0x332605;_0x461984=_0x461984||0x14,this[_0x47ad6a(0x188)](),_0x1505b6?(this[_0x47ad6a(0x2d9)]({'scaleX':this[_0x47ad6a(0x27c)]*0xa,'scaleY':this[_0x47ad6a(0x1de)]*0.05,'opacity':this[_0x47ad6a(0x1cd)]||0xff,'duration':0x0,'currentBlur':0xa,'easingType':'Linear'}),this[_0x47ad6a(0x2d9)]({'targetScaleX':this[_0x47ad6a(0x27c)],'targetScaleY':this[_0x47ad6a(0x1de)],'duration':_0x461984,'targetBlur':0x0,'blurDuration':_0x461984,'easingType':_0x47ad6a(0x2c3)})):(this['addToQueue']({'targetScaleX':this[_0x47ad6a(0x27c)]*0xa,'targetScaleY':this[_0x47ad6a(0x1de)]*0.05,'duration':_0x461984-0x2,'targetBlur':0xa,'blurDuration':_0x461984-0x2,'easingType':_0x47ad6a(0x162)}),this[_0x47ad6a(0x2d9)]({'targetOpacity':0x0,'duration':0x2,'targetBlur':0x0,'easingType':_0x47ad6a(0x256)}));},PluginManager[_0x332605(0x242)](pluginData['name'],'Tint_Shift_By',_0x11ade2=>{const _0x218a8c=_0x332605;VisuMZ[_0x218a8c(0x2cc)](_0x11ade2,_0x11ade2);const _0x198da5=_0x11ade2['PictureIDs'];if(_0x198da5[_0x218a8c(0x22c)]<=0x0)return;const _0x3324dc=Number(_0x11ade2['Z'])||0x0,_0x5aec24=_0x11ade2[_0x218a8c(0x1cc)]||[0x0,0x0,0x0,0x0],_0xc8536b=Math[_0x218a8c(0x225)](Number(_0x11ade2[_0x218a8c(0x1fd)]),0x1);let _0x21aa84=0x0;for(const _0x57c8aa of _0x198da5){const _0x55c0f9=$gameScreen[_0x218a8c(0x2a2)](_0x57c8aa);if(!_0x55c0f9)continue;_0x55c0f9[_0x218a8c(0x236)](_0x3324dc,_0x5aec24,_0xc8536b),_0x21aa84=_0x55c0f9[_0x218a8c(0x16f)]();}if(_0x11ade2[_0x218a8c(0x223)]){const _0x5b3cf6=$gameTemp[_0x218a8c(0x2a5)]();if(_0x5b3cf6)_0x5b3cf6[_0x218a8c(0x1c1)](_0x21aa84+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x236)]=function(_0xb22b90,_0x35f781,_0x5b728c){const _0xb3c733=_0x332605;this[_0xb3c733(0x188)](),this['addToQueue']({'changeZ':_0xb22b90,'duration':_0x5b728c,'targetTone':_0x35f781[_0xb3c733(0x299)](),'toneDuration':_0x5b728c});},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x19f),_0x4c266b=>{const _0x1abcea=_0x332605;VisuMZ[_0x1abcea(0x2cc)](_0x4c266b,_0x4c266b);const _0x134556=_0x4c266b['PictureIDs'];if(_0x134556[_0x1abcea(0x22c)]<=0x0)return;const _0x43127e=Number(_0x4c266b['Z'])||0x0,_0x1fb10d=_0x4c266b[_0x1abcea(0x1cc)]||[0x0,0x0,0x0,0x0],_0x386f13=Math[_0x1abcea(0x225)](Number(_0x4c266b[_0x1abcea(0x1fd)]),0x1);let _0x266ccd=0x0;for(const _0x16fe79 of _0x134556){const _0x434e59=$gameScreen['picture'](_0x16fe79);if(!_0x434e59)continue;_0x434e59[_0x1abcea(0x1bd)](_0x43127e,_0x1fb10d,_0x386f13),_0x266ccd=_0x434e59[_0x1abcea(0x16f)]();}if(_0x4c266b[_0x1abcea(0x223)]){const _0xabaa4c=$gameTemp[_0x1abcea(0x2a5)]();if(_0xabaa4c)_0xabaa4c[_0x1abcea(0x1c1)](_0x266ccd+0x1);}}),Game_Picture['prototype'][_0x332605(0x1bd)]=function(_0x587aca,_0x2628e3,_0x4e0804){const _0x3bcb21=_0x332605;this[_0x3bcb21(0x188)](),this['addToQueue']({'setZ':_0x587aca,'duration':_0x4e0804,'targetTone':_0x2628e3['clone'](),'toneDuration':_0x4e0804});},PluginManager[_0x332605(0x242)](pluginData['name'],'Transform',_0x41c1fa=>{const _0x41e871=_0x332605;VisuMZ[_0x41e871(0x2cc)](_0x41c1fa,_0x41c1fa);const _0x41710b=_0x41c1fa[_0x41e871(0x27b)];if(_0x41710b['length']<=0x0)return;const _0x245373=_0x41c1fa['Filename']||'';if(_0x245373==='')return;let _0x6d734a=0x0;for(const _0x5174a1 of _0x41710b){const _0x5a32e7=$gameScreen[_0x41e871(0x2a2)](_0x5174a1);if(!_0x5a32e7)continue;_0x5a32e7[_0x41e871(0x198)](_0x245373),_0x6d734a=_0x5a32e7[_0x41e871(0x16f)]();}if(_0x41c1fa['Wait']){const _0x3e8f8a=$gameTemp[_0x41e871(0x2a5)]();if(_0x3e8f8a)_0x3e8f8a['wait'](_0x6d734a+0x1);}}),Game_Picture[_0x332605(0x292)]['setupEffect_Transform']=function(_0x25af6a){const _0x27e29a=_0x332605;this[_0x27e29a(0x188)]();const _0x37e802=ImageManager[_0x27e29a(0x1ca)](_0x25af6a);_0x37e802[_0x27e29a(0x2c2)](this['addToQueue'][_0x27e29a(0x251)](this,{'filename':_0x25af6a,'duration':0x0,'easingType':'Linear'}));},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x2e2),_0x1c0b2a=>{const _0x4e66e9=_0x332605;VisuMZ[_0x4e66e9(0x2cc)](_0x1c0b2a,_0x1c0b2a);const _0x5e7a4f=_0x1c0b2a[_0x4e66e9(0x27b)];if(_0x5e7a4f[_0x4e66e9(0x22c)]<=0x0)return;const _0x26c77a=_0x1c0b2a[_0x4e66e9(0x1e5)]==='In',_0x4cfde6=_0x1c0b2a[_0x4e66e9(0x1cc)]||[0x44,0x44,0x80,0x0],_0x1eb722=Math[_0x4e66e9(0x225)](Number(_0x1c0b2a[_0x4e66e9(0x1fd)]),0xa);let _0x46c73c=0x0;for(const _0x5e74cd of _0x5e7a4f){const _0xa048fd=$gameScreen[_0x4e66e9(0x2a2)](_0x5e74cd);if(!_0xa048fd)continue;_0xa048fd[_0x4e66e9(0x244)](_0x26c77a,_0x4cfde6,_0x1eb722),_0x46c73c=_0xa048fd[_0x4e66e9(0x16f)]();}if(_0x1c0b2a[_0x4e66e9(0x223)]){const _0xf9a4ca=$gameTemp[_0x4e66e9(0x2a5)]();if(_0xf9a4ca)_0xf9a4ca[_0x4e66e9(0x1c1)](_0x46c73c+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x244)]=function(_0x589b6f,_0x579e3a,_0x3736f2){const _0x251128=_0x332605;_0x3736f2=_0x3736f2||0x3c,this[_0x251128(0x188)](),_0x589b6f?(this[_0x251128(0x2d9)]({'moveY':0x0,'targetMoveY':this['_y'],'opacity':0x0,'targetOpacity':this[_0x251128(0x1cd)]||0xff,'duration':_0x3736f2*0.9,'tone':_0x579e3a[_0x251128(0x299)](),'blendMode':0x1,'easingType':_0x251128(0x214)}),this[_0x251128(0x2d9)]({'tone':[0xff,0xff,0xff,0x0],'targetTone':this[_0x251128(0x1ef)]?this[_0x251128(0x1ef)][_0x251128(0x299)]():[0x0,0x0,0x0,0x0],'toneDuration':_0x3736f2*0.1,'blendMode':this[_0x251128(0x2dc)],'duration':_0x3736f2*0.1})):(this[_0x251128(0x2d9)]({'targetTone':[0xff,0xff,0xff,0x0],'toneDuration':_0x3736f2*0.1,'duration':_0x3736f2*0.1,'blendMode':this[_0x251128(0x2dc)]}),this[_0x251128(0x2d9)]({'targetMoveY':0x0,'targetOpacity':0x0,'duration':_0x3736f2*0.9,'targetTone':_0x579e3a['clone'](),'toneDuration':_0x3736f2*0.1,'blendMode':0x1,'easingType':_0x251128(0x214)}));},PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x2b1),_0x44e22a=>{const _0x45a38e=_0x332605;VisuMZ[_0x45a38e(0x2cc)](_0x44e22a,_0x44e22a);const _0x29973a=_0x44e22a[_0x45a38e(0x27b)];if(_0x29973a['length']<=0x0)return;const _0x5877a6=Math['max'](Number(_0x44e22a[_0x45a38e(0x206)]),0x1),_0x4632f8=Math[_0x45a38e(0x225)](Number(_0x44e22a[_0x45a38e(0x20f)]),0x1),_0xc8422=Math[_0x45a38e(0x225)](Number(_0x44e22a[_0x45a38e(0x2d5)]),0x1);let _0x53bf6a=0x0;for(const _0x2031e0 of _0x29973a){const _0x5b13d1=$gameScreen[_0x45a38e(0x2a2)](_0x2031e0);if(!_0x5b13d1)continue;_0x5b13d1['setupEffect_Vibrate'](_0x5877a6,_0x4632f8,_0xc8422),_0x53bf6a=_0x5b13d1['getTotalQueueDuration']();}if(_0x44e22a[_0x45a38e(0x223)]){const _0x442cc1=$gameTemp[_0x45a38e(0x2a5)]();if(_0x442cc1)_0x442cc1['wait'](_0x53bf6a+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x197)]=function(_0x489812,_0x3dcdbc,_0x558bf0){const _0x3167d9=_0x332605;_0x489812=_0x489812||0x1,_0x3dcdbc=_0x3dcdbc??0x18,_0x558bf0=_0x558bf0??0xc,this[_0x3167d9(0x188)]();const _0x35ea01=_0x489812/0x2;while(_0x489812--){const _0x1a116d=0x1-Math['abs'](_0x489812-_0x35ea01)/_0x35ea01;this[_0x3167d9(0x2d9)]({'moveX':this['_x']+(Math[_0x3167d9(0x1b5)]()>0.5?-0x1:0x1)*(_0x3dcdbc*_0x1a116d),'moveY':this['_y']+(Math['random']()>0.5?-0x1:0x1)*(_0x558bf0*_0x1a116d),'duration':0x1,'easingType':'Linear'});}this['addToQueue']({'moveX':this['_x'],'moveY':this['_y'],'duration':0x1});},PluginManager['registerCommand'](pluginData[_0x332605(0x1af)],_0x332605(0x25b),_0x1cba7d=>{const _0x24f05a=_0x332605;VisuMZ[_0x24f05a(0x2cc)](_0x1cba7d,_0x1cba7d);const _0x22ed54=_0x1cba7d['PictureIDs'];if(_0x22ed54['length']<=0x0)return;const _0x4adf3a=Math[_0x24f05a(0x225)](Number(_0x1cba7d[_0x24f05a(0x206)]),0x1),_0x21ded9=Math['max'](Number(_0x1cba7d[_0x24f05a(0x1e8)]),0x1);let _0x4380e9=0x0;for(const _0x1991df of _0x22ed54){const _0x1d867e=$gameScreen[_0x24f05a(0x2a2)](_0x1991df);if(!_0x1d867e)continue;_0x1d867e[_0x24f05a(0x295)](_0x4adf3a,_0x21ded9),_0x4380e9=_0x1d867e['getTotalQueueDuration']();}if(_0x1cba7d['Wait']){const _0x4be11d=$gameTemp[_0x24f05a(0x2a5)]();if(_0x4be11d)_0x4be11d['wait'](_0x4380e9+0x1);}}),Game_Picture['prototype'][_0x332605(0x295)]=function(_0x565c02,_0x2be866){const _0x30095b=_0x332605;_0x565c02=_0x565c02||0xa,_0x2be866=_0x2be866||0xa,this[_0x30095b(0x188)]();while(_0x565c02--){this[_0x30095b(0x2d9)]({'targetAngle':this[_0x30095b(0x2bc)]()+_0x2be866,'duration':0x2,'easingType':_0x30095b(0x256)}),this['addToQueue']({'targetAngle':this[_0x30095b(0x2bc)]()-_0x2be866,'duration':0x4,'easingType':_0x30095b(0x256)});}this[_0x30095b(0x2d9)]({'targetAngle':this['anglePlus'](),'duration':0x2});},PluginManager['registerCommand'](pluginData['name'],'Z_Layer_Change_By',_0x268958=>{const _0x5aeda0=_0x332605;VisuMZ[_0x5aeda0(0x2cc)](_0x268958,_0x268958);const _0x11c76f=_0x268958['PictureIDs'];if(_0x11c76f[_0x5aeda0(0x22c)]<=0x0)return;const _0x3e3dcf=Number(_0x268958['Z'])||0x0;for(const _0x2d78b2 of _0x11c76f){const _0x5c8b6c=$gameScreen['picture'](_0x2d78b2);if(!_0x5c8b6c)continue;_0x5c8b6c['setZ'](_0x3e3dcf);}}),PluginManager[_0x332605(0x242)](pluginData['name'],_0x332605(0x29e),_0x19cf3a=>{const _0x1980a8=_0x332605;VisuMZ[_0x1980a8(0x2cc)](_0x19cf3a,_0x19cf3a);const _0x7347e7=_0x19cf3a[_0x1980a8(0x27b)];if(_0x7347e7[_0x1980a8(0x22c)]<=0x0)return;const _0x31f084=Number(_0x19cf3a['Z'])||0x0;for(const _0x1e0435 of _0x7347e7){const _0x34ddee=$gameScreen[_0x1980a8(0x2a2)](_0x1e0435);if(!_0x34ddee)continue;_0x34ddee[_0x1980a8(0x1cf)](_0x31f084);}}),PluginManager[_0x332605(0x242)](pluginData[_0x332605(0x1af)],_0x332605(0x289),_0x502a55=>{const _0x2d834c=_0x332605;VisuMZ[_0x2d834c(0x2cc)](_0x502a55,_0x502a55);const _0x2af59f=_0x502a55[_0x2d834c(0x27b)];if(_0x2af59f[_0x2d834c(0x22c)]<=0x0)return;const _0x4c9972=_0x502a55[_0x2d834c(0x1e5)]==='In',_0x169716=Math[_0x2d834c(0x225)](Number(_0x502a55['Duration']),0x1);let _0x2e4594=0x0;for(const _0x3e618b of _0x2af59f){const _0x202c3f=$gameScreen[_0x2d834c(0x2a2)](_0x3e618b);if(!_0x202c3f)continue;_0x202c3f['setupEffect_ZoomInOut'](_0x4c9972,_0x169716),_0x2e4594=_0x202c3f[_0x2d834c(0x16f)]();}if(_0x502a55[_0x2d834c(0x223)]){const _0x3e653a=$gameTemp['getLastPluginCommandInterpreter']();if(_0x3e653a)_0x3e653a[_0x2d834c(0x1c1)](_0x2e4594+0x1);}}),Game_Picture[_0x332605(0x292)][_0x332605(0x2d3)]=function(_0x49227e,_0x37d336){const _0x26e88a=_0x332605;_0x37d336=_0x37d336||0x14,_0x37d336=Math[_0x26e88a(0x225)](_0x37d336,0xa),this['clearQueue'](),_0x49227e?(this['addToQueue']({'opacity':0x0,'scaleX':this[_0x26e88a(0x27c)]*1.5,'scaleY':this[_0x26e88a(0x1de)]*1.5,'currentBlur':0xa,'duration':0x0}),this[_0x26e88a(0x2d9)]({'targetOpacity':this[_0x26e88a(0x1cd)]||0xff,'targetScaleX':this[_0x26e88a(0x27c)],'targetScaleY':this[_0x26e88a(0x1de)],'duration':_0x37d336,'targetBlur':0x0,'blurDuration':_0x37d336,'easingType':_0x26e88a(0x214)})):this[_0x26e88a(0x2d9)]({'targetOpacity':0x0,'targetScaleX':this[_0x26e88a(0x27c)]*1.5,'targetScaleY':this[_0x26e88a(0x1de)]*1.5,'duration':_0x37d336,'targetBlur':0xa,'blurDuration':_0x37d336,'easingType':_0x26e88a(0x214)});};