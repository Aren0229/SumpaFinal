//=============================================================================
// VisuStella MZ - QTE & Trigger System
// VisuMZ_2_QTE_TriggerSys.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_QTE_TriggerSys = true;

var VisuMZ = VisuMZ || {};
VisuMZ.QTE_TriggerSys = VisuMZ.QTE_TriggerSys || {};
VisuMZ.QTE_TriggerSys.version = 1.02;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.02] [QTE_TriggerSys]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/QTE_and_Trigger_System_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Sometimes, we need a way to trigger Switch or Variable changes. This can be
 * in an organic fashion or through Quick Time Events (QTE's). QTE's allow for
 * immediate changes to Switches or Variables through player inputs. Or if you
 * have ever wanted a Common Event to run when a specific Switch or Variable
 * changes its current value to something else, you can use this plugin's
 * trigger system for Switches, Variables, Items, Weapons, and Armors to call
 * and trigger Common Events whenever their values change. These don't have to
 * be recurring as they can also function as one-time "promises", too.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Quick Time Events (QTE) can be played to adjust values of variables and/or
 *   switches based off different types of QTE's like Button Mashing, Direction
 *   Struggle, Timed Hits, and more.
 * * 10+ different QTE Plugin Commands for you to pick and choose from to give
 *   players more engaging gameplay.
 * * Trigger Common Events by simply changing certain Switches to ON/OFF
 *   positions or Variables to different values.
 * * Items, weapons, and armors can also register Common Events to trigger when
 *   the party gains or loses a copy of that item, weapon, or armor.
 * * If these triggers occur on a scene that isn't battle or the map, then the
 *   Common Events are queued up for until the player moves to the battle or
 *   map scenes to trigger them.
 * * If the triggering Common Event only has script calls, then the effect will
 *   run right then and there.
 * * Create Promises, one-time Common Event triggers upon a switch, variable,
 *   item, weapon, or armor having its value changed.
 * * Getting a Game Over can also result in a trigger that will bypass the Game
 *   Over scene, too.
 * * Game Over Common Events will prevent the game from ending completely and
 *   return back to map scene.
 * * The Common Event that is run upon a Game Over can be altered and changed.
 * * Have different Common Events depending on the map or troop encountered.
 * * The Game Over Common Event can be persistent or function as a one time
 *   deal depending on how you, as the game dev, choose to follow up with it.
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
 * * VisuMZ_1_EventsMoveCore
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * === Quick Time Events ===
 * 
 * Also known as QTE's, these events function as player involved input trigger
 * systems which affect Variable or Switch values depending on the QTE type
 * (such as Variables for Button Mashing). Because these are player-input
 * reliant triggers, it's usually best for the event to be halted while the QTE
 * plays out (although you can disable this). Naturally, as such, the event
 * will not continue until the QTE is finished playing in the event commands.
 * 
 * QTE's are activated through Plugin Commands and can have the messages and
 * such displayed with each QTE displayed differently each time. Adjust this in
 * the Plugin Parameters for each QTE to fit the situation.
 * 
 * Only one QTE type can be played at a single time. Two or more QTE's cannot
 * be played at the same time. This is to prevent clutter and cause input
 * clashes.
 * 
 * If a QTE Plugin Command has a Switch and/or Variable assigned (or multiple),
 * those Switches and Variables will be reset to OFF and 0 respectively. Based
 * on the QTE type, data can be recorded to both the Switches and Variables.
 * Some Switches can indicate the successful player input of a QTE while other
 * Variables can indicate how much time was remaining upon finishing the QTE or
 * the score for the QTE.
 * 
 * Furthermore, for play testing purposes, during a QTE input sequence, you can
 * just hold down the "debug" button (usually Control) to automatically input
 * the needed input sequences. This ONLY works during Play Testing!
 * 
 * ---
 *
 * === Switch and Variable Triggers ===
 * 
 * Switches and Variables can have their names included with the name tags:
 * <Toggle Trigger Common Event: x> or <Change Trigger Common Event: x> to
 * automatically activate a Common Event at the next available moment. The
 * activated Common Event will only run once per trigger as opposed to
 * continuously like an Autorun or Parallel Common Event.
 * 
 * These apply to Self Switches (only the custom ones added through the <Self>
 * name tag VisuMZ_1_ItemsEquipsCore) and Self Variables (likewise), too. The
 * same also applies to Map Switches and Variables (with <Map>) and any Global
 * Switches and Variables (with <Global>).
 * 
 * However, Self Switches/Variables that have triggered any Common Events will
 * not utilize any "This Event" event command functions. They will behave as if
 * they are triggered on a non-event environment.
 * 
 * Possible uses for this mechanic can be things like making a picture change
 * into something else whenever a Variable's number value is altered, or have a
 * picture become visible or invisible depending on a Switch's ON/OFF value.
 * 
 * Be wary of creating infinite loops by "turning off" Switches or "resetting"
 * any Variables. That will cause them to trigger, too. If you have to turn off
 * or reset switches/variables, consider using Promise Plugin Commands instead
 * of the auto-repeat tags.
 *
 * ---
 *
 * === JS Switch and Variable Triggers ===
 * 
 * Triggers that function off of JS Switches and Variables will behave slightly
 * different. As these have dynamic values that may be constantly changing, in
 * order to prevent lag and endless loops, there is a delay system put in place
 * to ensure the triggers occur properly.
 * 
 * This delay is set up in the Plugin Parameters. A delay of 60 means that
 * every 60 frames in-game, a check will be performed to see if a trigger
 * should occur or not.
 *
 * ---
 *
 * === Repeat Triggers ===
 * 
 * A triggered Common Event can only be repeated once per availability. This
 * means that if you have toggled a Switch ON/OFF three times in a single frame
 * then the triggered Common Event will only process one time. The same applies
 * to variables, items, weapons, and armors.
 * 
 * This also means that if the Common Event is triggered multiple times outside
 * of the battle and map scenes, then it will only run once when available to
 * run the Common Event.
 *
 * ---
 * 
 * === Triggers for JavaScript Only Common Events ===
 * 
 * If a triggered Common Event only has JavaScript in it through the "Script"
 * event command, then instead of waiting until reaching the battle or map
 * scene, the triggered Common Event will run the JS code immediately. Comments
 * will be ignored and allowed as a part of JavaScript Only Common Events.
 * 
 * If multiple "Script" event commands are found in the triggered Common Event,
 * they will run independent of each other and as local functions. This means
 * that the any custom JS variables declared in one of the Script call events
 * may not necessarily transfer over to the others if not originally meant to.
 * 
 * ---
 * 
 * === Promise Triggers ===
 * 
 * Anything that is assigned through a name tag or notetag will result in an
 * auto-repeat trigger and will always trigger without fail. However, if you
 * want something to trigger only once (or until you assign it again), use a
 * Promise Trigger.
 * 
 * These are assigned through Plugin Commands and they will only trigger once.
 * After that, the condition that caused them to trigger will not trigger again
 * until another Promise is made to them.
 * 
 * ---
 *
 * === Game Over Scene ===
 * 
 * The Game Over scene is skipped over if there's a designated Game Over Common
 * Event determined. If there isn't any Game Over Common Events, then the Game
 * Over scene will occur normally.
 * 
 * If there are multiple Game Over Common Events, determined through the
 * default Plugin Parameters, Map Notetags, or Troop Name Tags, then a priority
 * system is used:
 * 
 *   1. Battle Processing "Can Lose"
 *   2. Troop Name Tag Game Over Common Event
 *   3. Map Notetag Game Over Common Event
 *   4. Plugin Parameters/Command Game Over Common Event
 * 
 * If a "Battle Processing" event command has a "Can Lose" option, then there
 * will be no Game Over Common Event to be run and instead, whatever is found
 * in the "Can Lose" segment will run instead. The event will not be
 * interrupted and continue forward. Ignore the rest.
 * 
 * Otherwise, if there is a Game Over Common Event determined by the enemy
 * troop's name with the Name Tag <Game Over Common Event: x>, then priority
 * will go to that Common Event. Any event running will end prematurely in
 * favor of this Game Over Common Event. Ignore the rest.
 * 
 * If there is a Game Over Common Event determined by the current map's notes
 * with the notetag <Game Over Common Event: x>, then priority will go to that
 * Common Event. Any event running will end prematurely in favor of this Game
 * Over Common Event. Ignore the rest.
 * 
 * And finally, if there are any Game Over Common Events determined through
 * Plugin Commands or Plugin Parameters, then follow through with those. Keep
 * in mind that if it is based off a Plugin Parameter, and if the parameter
 * "Clear Common Event After?" is enabled, it will be only a one time deal.
 * 
 * If there are no Game Over Common Events designated, then finally, the player
 * will reach the Game Over scene.
 *
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * Those using VisuStella MZ's Battle Core can launch QTE Plugin Commands from
 * this plugin during the middle of Action Sequences as long as there is not
 * a conflicting effect during it.
 * 
 * Conflict effects include Active Chain Skills, Input Combo Skills, or 
 * Evolution Matrix Skills. QTE events will not run at all while these skill
 * mechanics are active.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Trigger-Related Notetags ===
 * 
 * ---
 *
 * <Toggle Trigger Common Event: x>
 * <Toggle Trigger Common Events: x, x, x>
 *
 * - Used for: Switch Names
 * - Whenever this Switch is turned ON or OFF, trigger the Common Event(s) 'x'.
 *   - This is a constantly recurring effect.
 * - Replace 'x' with a number representing the ID of the Common Event(s) you
 *   wish to trigger.
 *   - Insert multiple 'x' values to trigger multiple at a time.
 * - A triggered Common Event can only be repeated once per availability. Refer
 *   to the "Major Changes" section for more information.
 *
 * ---
 *
 * <Change Trigger Common Event: x>
 * <Change Trigger Common Events: x, x, x>
 *
 * - Used for: Variable Names
 * - Whenever this Variable changes its value, trigger the Common Event(s) 'x'.
 *   - This is a constantly recurring effect.
 * - Replace 'x' with a number representing the ID of the Common Event(s) you
 *   wish to trigger.
 *   - Insert multiple 'x' values to trigger multiple at a time.
 * - A triggered Common Event can only be repeated once per availability. Refer
 *   to the "Major Changes" section for more information.
 *
 * ---
 * 
 * <Change Trigger Common Event: x>
 * <Change Trigger Common Events: x, x, x>
 * 
 * - Used for: Item, Weapon, and Armor Notetags
 * - Whenever this item, weapon, or armor gains or loses an item (any amount),
 *   then trigger the Common Event(s) 'x'.
 *   - This is a constantly recurring effect.
 * - Replace 'x' with a number representing the ID of the Common Event(s) you
 *   wish to trigger.
 *   - Insert multiple 'x' values to trigger multiple at a time.
 * - A triggered Common Event can only be repeated once per availability. Refer
 *   to the "Major Changes" section for more information.
 * 
 * ---
 *
 * <Trigger on Switch: x>
 * <Trigger on Switches: x, x, x>
 *
 * - Used for: Common Event Names
 * - Whenever Switch(es) 'x' changes ON/OFF, trigger this Common Event.
 *   - This is a constantly recurring effect.
 * - Replace 'x' with a number representing the ID of the Switch(es) you wish
 *   to trigger upon them changing ON/OFF.
 *   - Insert multiple 'x' values to register multiple Switch IDs at once.
 * - A triggered Common Event can only be repeated once per availability. Refer
 *   to the "Major Changes" section for more information.
 *
 * ---
 *
 * <Trigger on Variable: x>
 * <Trigger on Variables: x, x, x>
 *
 * - Used for: Common Event Names
 * - Whenever Variable(s) 'x' changes its value, trigger this Common Event.
 *   - This is a constantly recurring effect.
 * - Replace 'x' with a number representing the ID of the variable(s) you wish
 *   to trigger upon them changing values.
 *   - Insert multiple 'x' values to register multiple Switch IDs at once.
 * - A triggered Common Event can only be repeated once per availability. Refer
 *   to the "Major Changes" section for more information.
 *
 * ---
 * 
 * === Game Over-Related Notetags ===
 * 
 * ---
 *
 * <Game Over Common Event: x>
 *
 * - Used for: Map Notetags
 * - If the player gets a game over through a battle on this map, then Common
 *   Event 'x' will run in place of a regular Game Over.
 * - Replace 'x' with a number representing the ID of the Common Event you wish
 *   to run as a Game Over Common Event.
 *
 * ---
 *
 * <Game Over Common Event: x>
 *
 * - Used for: Troop Name Tags
 * - If the player gets a game over through a battle fighting this troop, then
 *   Common Event 'x' will run in place of a regular Game Over.
 * - Replace 'x' with a number representing the ID of the Common Event you wish
 *   to run as a Game Over Common Event.
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
 * === Game Over Plugin Commands ===
 * 
 * ---
 *
 * Game Over: Setup Common Event
 * - Sets up a Common Event that will run upon receiving the next Game Over.
 *
 *   Common Event ID:
 *   - Setup the Common Event to run when the next Game Over occurs.
 *
 * ---
 *
 * Game Over: Clear Common Event
 * - Clears any Common Events designated to run for the next Game Over.
 *
 * ---
 * 
 * === Promise Plugin Commands ===
 * 
 * ---
 * 
 * Promise: Switch State Trigger
 * - Creates a one-time trigger for specified Switch to run the specified
 *   Common Events when Switch state changes.
 * 
 *   Switch ID:
 *   - What is the ID of the Switch to promise a trigger to?
 * 
 *   Common Event ID(s):
 *   - Select which Common Event(s) to run upon trigger.
 * 
 * ---
 * 
 * Promise: Variable Value Trigger
 * - Creates a one-time trigger for specified Variable to run the specified
 *   Common Events when Variable value changes.
 * 
 *   Variable ID:
 *   - What is the ID of the Variable to promise a trigger to?
 * 
 *   Common Event ID(s):
 *   - Select which Common Event(s) to run upon trigger.
 * 
 * ---
 * 
 * Promise: Item Quantity Trigger
 * - Creates a one-time trigger for specified Item to run the specified Common
 *   Events when Item quantity changes.
 * 
 *   Item ID:
 *   - What is the ID of the Item to promise a trigger to?
 * 
 *   Common Event ID(s):
 *   - Select which Common Event(s) to run upon trigger.
 * 
 * ---
 * 
 * Promise: Weapon Quantity Trigger
 * - Creates a one-time trigger for specified Weapon to run the specified
 *   Common Events when Weapon quantity changes.
 * 
 *   Weapon ID:
 *   - What is the ID of the Weapon to promise a trigger to?
 * 
 *   Common Event ID(s):
 *   - Select which Common Event(s) to run upon trigger.
 * 
 * ---
 * 
 * Promise: Armor Quantity Trigger
 * - Creates a one-time trigger for specified Armor to run the specified Common
 *   Events when armor quantity changes.
 * 
 *   Armor ID:
 *   - What is the ID of the Armor to promise a trigger to?
 * 
 *   Common Event ID(s):
 *   - Select which Common Event(s) to run upon trigger.
 * 
 * ---
 * 
 * === QTE Plugin Commands ===
 * 
 * ---
 * 
 * QTE: Clear Current QTE
 * - Clears the currently existing QTE.
 * 
 * ---
 * 
 * QTE: Button Mash (OK)
 * - Starts a Button Mash QTE session.
 * - Only one QTE can occur at a time.
 * 
 *   Trigger Variable ID:
 *   - Select which Variable ID to keep track of how many times the OK button
 *     has been pressed.
 *   - Use 0 to not track.
 * 
 *   Trigger Common Event:
 *   - Select a Common Event to play each time OK is pressed.
 *   - Use 0 to not play a Common Event.
 * 
 *   Trigger Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Button Sequence (Normal)
 * - Starts a Button Sequence QTE session.
 * - Only one QTE can occur at a time.
 * - No touch support.
 * 
 *   Input Sequence:
 *   - What button sequence is needed to be pressed?
 * 
 *   Shuffle Sequence?:
 *   - Randomize the button sequence order?
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the sequence buttons have
 *     been inputted.
 * 
 *   Remaining Variable ID:
 *   - Select which Variable ID to record how much time is remaining when the
 *     QTE session finishes.
 * 
 *   Correct Common Event:
 *   - Select a Common Event to play each time a correct button input is
 *     pressed.
 *   - Use 0 to not play a Common Event.
 * 
 *   Button Press Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Button Sequence (Random)
 * - Starts a randomized Button Sequence QTE session.
 * - Only one QTE can occur at a time.
 * - No touch support.
 * 
 *   Allowed Buttons:
 *   - What buttons can appear in the randomized sequence?
 * 
 *   Sequence Length?:
 *   - How many buttons will be made for the sequence?
 *   - You may use code.
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the sequence buttons have
 *     been inputted.
 * 
 *   Remaining Variable ID:
 *   - Select which Variable ID to record how much time is remaining when the
 *     QTE session finishes.
 * 
 *   Correct Common Event:
 *   - Select a Common Event to play each time a correct button input is
 *     pressed.
 *   - Use 0 to not play a Common Event.
 * 
 *   Button Press Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Direction Struggle (✥)
 * - Starts a Direction Struggle QTE session.
 * - Only one QTE can occur at a time.
 * - No touch support.
 * 
 *   Struggle Requirement:
 *   - How many times must the player struggle in different directions to
 *     succeed this QTE?
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the struggle goal has been
 *     met.
 *   - Use 0 to not use.
 * 
 *   Remaining Variable ID:
 *   - Select which Variable ID to record how much time is remaining when the
 *     QTE session finishes.
 * 
 *   Struggle Common Event:
 *   - Select a Common Event to play each struggle.
 *   - Use 0 to not play a Common Event.
 * 
 *   Button Press Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Fill Gauge (OK)
 * - Starts a Fill Gauge QTE session.
 * - Only one QTE can occur at a time.
 * 
 *   Fill Requirement:
 *   - How many times must the player press OK to fill the gauge for this QTE
 *     Session??
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the fill goal has been met.
 *   - Use 0 to not use.
 * 
 *   Remaining Variable ID:
 *   - Select which Variable ID to record how much time is remaining when the
 *     QTE session finishes.
 * 
 *   Fill Common Event:
 *   - Select a Common Event to play each fill.
 *   - Use 0 to not play a Common Event.
 * 
 *   Button Press Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Hold & Release (OK)
 * - Starts a Hold & Release QTE session.
 * - Only one QTE can occur at a time.
 * 
 *   Max Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 * 
 *   Not Overload Switch ID:
 *   - Select which Switch ID to turn ON if the OK button was released before
 *     overloading.
 *   - Use 0 to not track.
 * 
 *   Held Timed Variable ID:
 *   - Select which Variable ID to keep track of how long the the OK button has
 *     been held.
 *   - Use 0 to not track.
 * 
 *   Hold Common Event:
 *   - Select a Common Event to play when the button is held.
 *   - Use 0 to not play a Common Event.
 * 
 *   Release Sound:
 *   - Adjust the sound effect played when released.
 * 
 *   Release Common Event:
 *   - Select a Common Event to play when the button is released.
 *   - Use 0 to not play a Common Event.
 * 
 *   Overload Sound:
 *   - Adjust the sound effect played when overloaded.
 * 
 *   Overload Common Event:
 *   - Select a Common Event to play when the QTE is overloaded.
 *   - Use 0 to not play a Common Event.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Marcher (Page Up/Page Down)
 * - Starts a Marcher QTE session.
 * - Only one QTE can occur at a time.
 * - No touch support.
 * 
 *   Marcher Requirement:
 *   - How many times must the player march between different buttons to
 *     succeed this QTE?
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the marcher goal has been
 *     met.
 *   - Use 0 to not use.
 * 
 *   Remaining Variable ID:
 *   - Select which Variable ID to record how much time is remaining when the
 *     QTE session finishes.
 * 
 *   Page Up Common Event:
 *   - Select a Common Event to play when pressing Page Up.
 *   - Use 0 to not play a Common Event.
 * 
 *   Page Down Common Event:
 *   - Select a Common Event to play when pressing Page Down.
 *   - Use 0 to not play a Common Event.
 * 
 *   Button Press Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Swapper (OK/Cancel)
 * - Starts a Switcher QTE session.
 * - Only one QTE can occur at a time.
 * - No touch support.
 * 
 *   Swap Requirement:
 *   - How many times must the player swap between different buttons to succeed
 *     this QTE?
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the swapper goal has been
 *     met.
 *   - Use 0 to not use.
 * 
 *   Remaining Variable ID:
 *   - Select which Variable ID to record how much time is remaining when the
 *     QTE session finishes.
 * 
 *   OK Common Event:
 *   - Select a Common Event to play when pressing OK.
 *   - Use 0 to not play a Common Event.
 * 
 *   Cancel Common Event:
 *   - Select a Common Event to play when pressing Cancel.
 *   - Use 0 to not play a Common Event.
 * 
 *   Button Press Sound:
 *   - Adjust the sound effect played when a button is pressed.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Timed Hit (OK)
 * - Starts a Timed Hit QTE session.
 * - Only one QTE can occur at a time.
 * 
 *   Timed Hit Picture:
 *   - The picture used for the Timed Hit indicator.
 *   - Leave empty to not display.
 * 
 *   Coordinate X:
 *   - X coordinate used for the Timed Hit picture.
 *   - You may use JavaScript code.
 * 
 *   Coordinate Y:
 *   - Y coordinate used for the Timed Hit picture.
 *   - You may use JavaScript code.
 * 
 *   Press in X Frames:
 *   - Press the OK button by these frames (60 frames = 1 sec) with some
 *     leeway.
 *   - You may use code. 
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if the player lands the Timed Hit.
 * 
 *   Timing Variable ID:
 *   - Select which Variable ID to record how close the player is to the
 *     Timed Hit timing.
 * 
 *   Success Common Event:
 *   - Select a Common Event to play if the player lands.
 *   - Use 0 to not play a Common Event.
 * 
 *   Success Sound:
 *   - Adjust the sound effect played when landing on a hit zone.
 * 
 *   Miss Common Event:
 *   - Select a Common Event to play if the player misses.
 *   - Use 0 to not play a Common Event.
 * 
 *   Miss Sound:
 *   - Adjust the sound effect played when NOT landing a hit zone.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Timed Sequence (Buttons)
 * - Starts a Timed Sequence QTE session.
 * - Only one QTE can occur at a time.
 * - No touch support.
 * 
 *   Sequence:
 *   - Set up Button Sequence where the player to press at certain timings.
 * 
 *     Button:
 *     - What button is needed to be pressed?
 * 
 *       Press in X Frames:
 *       - Press the button by these frames (60 frames = 1 sec) with some
 *         leeway.
 *       - You may use code. 
 * 
 *     Mechanic Settings:
 * 
 *       Success Switch ID:
 *       - Select which Switch ID to turn ON if the button is successfully hit.
 *      - Use 0 to not change a switch.
 * 
 *       Hit Common Event:
 *       - Select a Common Event to play when this button is hit.
 *       - Use 0 to not play a Common Event.
 * 
 *       Button Press Sound:
 *       - Adjust the sound effect played when a button is pressed.
 * 
 *   Landing Icon:
 *   - The icon used for the landing icon.
 * 
 *   Direction:
 *   - Which way do you want the buttons to move towards?
 * 
 *   Hit Times Variable ID:
 *   - Select which Variable ID to record how correct button inputs the player
 *     has landed.
 * 
 *   Miss Common Event:
 *   - Select a Common Event to play if the player misses.
 *   - Use 0 to not play a Common Event.
 * 
 *   Miss Sound:
 *   - Adjust the sound effect played when the player misses.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 * 
 * QTE: Timing Bar (OK)
 * - Starts a Timing Bar QTE session.
 * - Only one QTE can occur at a time.
 * 
 *   Hit Zones:
 *   - Set up Hit Zones where the player will gain points for landing on.
 * 
 *     Hit Area:
 * 
 *       Start:
 *       - This is the starting location of the hit area.
 *       - Use numbers between 0 and 100.
 *       - You may use code.
 * 
 *       End:
 *       - This is the ending location of the hit area.
 *       - Use numbers between 0 and 100.
 *       - You may use code.
 * 
 *       Label:
 *       - Text displayed for this hit area (centered).
 *       - Text codes are supported.
 *       - Leave empty to not use.
 * 
 *     Mechanic Settings:
 * 
 *       Variable Points:
 *       - If the cursor lands in this zone, then assign this many points to
 *       - the results variable. You may use code.
 * 
 *       Hit Common Event:
 *       - Select a Common Event to play when this zone is hit.
 *       - Use 0 to not play a Common Event.
 * 
 *     Color Settings:
 * 
 *       Area Color 1:
 *       Area Color 2:
 *       - Use #rrggbb for custom colors or regular numbers for text colors
 *         from the Window Skin.
 * 
 *   Cursor Icon:
 *   - The icon used for the player icon.
 * 
 *   Cursor Speed:
 *   - The speed at which the cursor moves.
 * 
 *   Success Switch ID:
 *   - Select which Switch ID to turn ON if all of the player lands the cursor
 *     on a Hit Zone.
 * 
 *   Points Variable ID:
 *   - Select which Variable ID to record how many points is earned from the
 *     Hit Zone the player landed on.
 * 
 *   Hit Sound:
 *   - Adjust the sound effect played when landing on a hit zone.
 * 
 *   Miss Sound:
 *   - Adjust the sound effect played when NOT landing a hit zone.
 * 
 *   Miss Common Event:
 *   - Select a Common Event to play when NOT landing a hit zone.
 *   - Use 0 to not play a Common Event.
 * 
 *   Input Start Delay:
 *   - How many frames (60 frames = 1 sec) delay before inputs are accepted to
 *     not take the player by surprise?
 * 
 *   QTE Duration:
 *   - The duration in frames (60 frames = 1 sec).
 *   - You may use code.
 *   - Over 1000000 for infinite time.
 * 
 *   Wait for QTE?:
 *   - Wait until QTE Session is done?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * There aren't too many Plugin Parameters for this plugin.
 *
 * ---
 *
 * General Settings
 * 
 *   JS Watch Update Delay:
 *   - Used for <JS> Switches and Variables.
 *   - How many frames delay to wait for triggers?
 *   - 60 frames = 1 second.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Game Over Settings
 * ============================================================================
 *
 * These settings let you adjust Game Over-related trigger aspects.
 *
 * ---
 * 
 * Game Over Settings
 * 
 *   Default Common Event:
 *   - Do you want there to be a Default Common Event?
 *   - It can be changed later with a Plugin Command.
 *   - 0 to not use.
 * 
 *   Heal on Common Event?:
 *   - Do you want to heal 1 HP for all dead members after running the
 *     Game Over Common Event?
 * 
 *   Clear After?:
 *   - Do you wish to clear the Game Over Common Event after it launches
 *     or not?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: QTE Settings
 * ============================================================================
 *
 * These settings let you adjust QTE-related trigger aspects.
 *
 * ---
 * 
 * Settings
 * 
 *   Early Finish Duration:
 *   - How many frames should the game wait if the player finishes a QTE early?
 * 
 *   Show QTE Timer?:
 *   - Do you wish to show a QTE Timer over each QTE window?
 * 
 *     Timer Gauge Style:
 *     - Select the gauge style to use for QTE Timer.
 *     - Requires VisuMZ_3_VisualGaugeStyles!
 * 
 *     Gauge Color 1:
 *     Gauge Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     JS: X, Y, W, H:
 *     - Code used to determine the position and dimensions for this window
 *       containing the gauge.
 * 
 *   Show QTE Progress?:
 *   - Show a progress gauge for certain types of QTE's?
 * 
 *     Progress Gauge Style:
 *     - Select the gauge style to use for QTE Timer.
 *     - Requires VisuMZ_3_VisualGaugeStyles!
 * 
 *     Gauge Color 1:
 *     Gauge Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     JS: X, Y, W, H:
 *     - Code used to determine the position and dimensions for this window
 *       containing the gauge.
 * 
 *   Input Buffer Leeway:
 *   - How many input buffer frames of leeway should be granted to
 *     Button Sequence QTE?
 * 
 *   Timed Hit Leeway:
 *   - How many frames of leeway should be granted to Timed Hit QTE?
 * 
 *     Overlay Opacity:
 *     - Timed Hit overlay sprite opacity.
 * 
 *     Max Scaling:
 *     - What's the max scaling for Timed Hit QTE indicators?
 * 
 *   Timed Sequence Leeway:
 *   - How many frames of leeway should be granted to Timed Sequence QTE?
 * 
 *     Sequence Position:
 *     - What is the position for the Timed Sequence Landing Icon?
 *     - Use a number between 0 and 100.
 * 
 *   QTE Timing Bar Width:
 *   - This is the width of the Timing Bar in pixels.
 * 
 *     Cursor Offset X:
 *     - Offsets the cursor x position.
 *     - Negative: left. Positive: right.
 * 
 *     Cursor Offset Y:
 *     - Offsets the cursor y position.
 *     - Negative: up. Positive: down.
 * 
 *     Label Font Size:
 *     - What is the font size used to display timing bar labels?
 * 
 *     Label Offset X:
 *     - Offsets the label x position.
 *     - Negative: left. Positive: right.
 * 
 *     Label Offset Y:
 *     - Offsets the label y position.
 *     - Negative: up. Positive: down.
 * 
 *     Timing Bar Color 1:
 *     Timing Bar Color 2:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed and QTE text window for
 * this plugin.
 *
 * ---
 * 
 * General Settings
 * 
 *   Text Alignment:
 *   - What is the text alignment?
 *   - Requires VisuMZ_1_MessageCore!
 *   - Otherwise, defaults to left alignment.
 * 
 * --
 * 
 * Message Settings:
 * 
 *   Button Mash Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Button Sequence Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 * 
 *   Direction Struggle:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Fill Gauge Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Hold & Release Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Marcher Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Swapper Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Timed Hit Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 *   Timed Sequence Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 * 
 *   Timing Bar Text:
 *   - Alter the text that appears for the QTE Window.
 *   - Text codes are supported.
 *   - Leave empty for no window.
 * 
 * ---
 * 
 * Message Window:
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the position and dimensions for this window.
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
 * * Irina
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.02: March 20, 2025
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > QTE Settings > Input Buffer Leeway
 * **** How many input buffer frames of leeway should be granted to
 *      Button Sequence QTE?
 * 
 * Version 1.01: February 15, 2024
 * * Bug Fixes!
 * ** Fixed a bug where any input can be used for Timed Sequence QTE. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Comman added by Arisu:
 * *** QTE: Clear Current QTE
 * **** Clears the currently existing QTE.
 * * Feature Updated!
 * ** Plugin Command: QTE: Hold & Release (OK)
 * *** Added Hold Common Event
 * *** Added Release Common Event
 * *** Added Overload Common Event
 * **** These common events will play upon different aspects of the QTE.
 * 
 * Version 1.00 Official Release Date: January 22, 2024
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
 * @command GameOverCommonEventSetup
 * @text Game Over: Setup Common Event
 * @desc Sets up a Common Event that will run upon receiving the next Game Over.
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc Setup the Common Event to run when the next Game Over occurs.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GameOverCommonEventClear
 * @text Game Over: Clear Common Event
 * @desc Clears any Common Events designated to run for the next Game Over.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Promise
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PromiseSwitch
 * @text Promise: Switch State Trigger
 * @desc Creates a one-time trigger for specified Switch to run the
 * specified Common Events when Switch state changes.
 *
 * @arg dataID:num
 * @text Switch ID
 * @type switch
 * @desc What is the ID of the Switch to promise a trigger to?
 * @default 0
 *
 * @arg CommonEventIDs:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Select which Common Event(s) to run upon trigger.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PromiseVariable
 * @text Promise: Variable Value Trigger
 * @desc Creates a one-time trigger for specified Variable to run the
 * specified Common Events when Variable value changes.
 *
 * @arg dataID:num
 * @text Variable ID
 * @type variable
 * @desc What is the ID of the Variable to promise a trigger to?
 * @default 0
 *
 * @arg CommonEventIDs:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Select which Common Event(s) to run upon trigger.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PromiseItem
 * @text Promise: Item Quantity Trigger
 * @desc Creates a one-time trigger for specified Item to run the
 * specified Common Events when Item quantity changes.
 *
 * @arg dataID:num
 * @text Item ID
 * @type item
 * @desc What is the ID of the Item to promise a trigger to?
 * @default 0
 *
 * @arg CommonEventIDs:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Select which Common Event(s) to run upon trigger.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PromiseWeapon
 * @text Promise: Weapon Quantity Trigger
 * @desc Creates a one-time trigger for specified Weapon to run the
 * specified Common Events when Weapon quantity changes.
 *
 * @arg dataID:num
 * @text Weapon ID
 * @type weapon
 * @desc What is the ID of the Weapon to promise a trigger to?
 * @default 0
 *
 * @arg CommonEventIDs:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Select which Common Event(s) to run upon trigger.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PromiseArmor
 * @text Promise: Armor Quantity Trigger
 * @desc Creates a one-time trigger for specified Armor to run the
 * specified Common Events when armor quantity changes.
 *
 * @arg dataID:num
 * @text Armor ID
 * @type armor
 * @desc What is the ID of the Armor to promise a trigger to?
 * @default 0
 *
 * @arg CommonEventIDs:arraynum
 * @text Common Event ID(s)
 * @type common_event[]
 * @desc Select which Common Event(s) to run upon trigger.
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Q
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_Clear
 * @text QTE: Clear Current QTE
 * @desc Clears the currently existing QTE.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_ButtonMash
 * @text QTE: Button Mash (OK)
 * @desc Starts a Button Mash QTE session.
 * Only one QTE can occur at a time.
 * 
 * @arg VariableID:num
 * @text Trigger Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to keep track of how many times
 * the OK button has been pressed. Use 0 to not track.
 * @default 1
 *
 * @arg CommonEventID:num
 * @text Trigger Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play each time OK is pressed.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Trigger Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_ButtonSequenceNormal
 * @text QTE: Button Sequence (Normal)
 * @desc Starts a Button Sequence QTE session.
 * Only one QTE can occur at a time. No touch support.
 *
 * @arg InputSequence:arraystr
 * @text Input Sequence
 * @type select[]
 * @option 
 * @option down
 * @option left
 * @option right
 * @option up
 * @option 
 * @option ok
 * @option cancel
 * @option pageup
 * @option pagedown
 * @option shift
 * @option 
 * @desc What button sequence is needed to be pressed?
 * @default ["down","left","right","up","ok","cancel"]
 *
 * @arg Shuffle:eval
 * @text Shuffle Sequence?
 * @parent InputSequence:arraystr
 * @type boolean
 * @on Shuffle
 * @off Don't Shuffle
 * @desc Randomize the button sequence order?
 * @default false
 * 
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the
 * sequence buttons have been inputted.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Remaining Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how much time is
 * remaining when the QTE session finishes.
 * @default 0
 *
 * @arg CommonEventID:num
 * @text Correct Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play each time a correct button
 * input is pressed. Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Button Press Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_ButtonSequenceRandom
 * @text QTE: Button Sequence (Random)
 * @desc Starts a randomized Button Sequence QTE session.
 * Only one QTE can occur at a time. No touch support.
 *
 * @arg Buttons:arraystr
 * @text Allowed Buttons
 * @type select[]
 * @option 
 * @option down
 * @option left
 * @option right
 * @option up
 * @option 
 * @option ok
 * @option cancel
 * @option pageup
 * @option pagedown
 * @option shift
 * @option 
 * @desc What buttons can appear in the randomized sequence?
 * @default ["down","left","right","up","ok","cancel"]
 *
 * @arg SequenceLength:eval
 * @text Sequence Length?
 * @parent Buttons:arraystr
 * @desc How many buttons will be made for the sequence?
 * You may use code.
 * @default 6
 * 
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the
 * sequence buttons have been inputted.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Remaining Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how much time is
 * remaining when the QTE session finishes.
 * @default 0
 *
 * @arg CommonEventID:num
 * @text Correct Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play each time a correct button
 * input is pressed. Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Button Press Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_DirectionStruggle
 * @text QTE: Direction Struggle (✥)
 * @desc Starts a Direction Struggle QTE session.
 * Only one QTE can occur at a time. No touch support.
 *
 * @arg StruggleRequirement:eval
 * @text Struggle Requirement
 * @desc How many times must the player struggle in different
 * directions to succeed this QTE?
 * @default 20
 *
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the struggle
 * goal has been met. Use 0 to not use.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Remaining Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how much time is
 * remaining when the QTE session finishes.
 * @default 0
 *
 * @arg CommonEventID:num
 * @text Struggle Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play each struggle.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Button Press Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Evasion1","volume:num":"90","pitch:num":"120","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_FillGauge
 * @text QTE: Fill Gauge (OK)
 * @desc Starts a Fill Gauge QTE session.
 * Only one QTE can occur at a time.
 *
 * @arg FillRequirement:eval
 * @text Fill Requirement
 * @desc How many times must the player press OK to fill the
 * gauge for this QTE Session??
 * @default 20
 *
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the fill
 * goal has been met. Use 0 to not use.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Remaining Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how much time is
 * remaining when the QTE session finishes.
 * @default 0
 *
 * @arg CommonEventID:num
 * @text Fill Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play each fill.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Button Press Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_HoldRelease
 * @text QTE: Hold & Release (OK)
 * @desc Starts a Hold & Release QTE session.
 * Only one QTE can occur at a time.
 *
 * @arg MaxDuration:eval
 * @text Max Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code.
 * @default 180
 *
 * @arg SwitchID:num
 * @text Not Overload Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if the OK button was
 * released before overloading. Use 0 to not track.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Held Timed Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to keep track of how long the
 * the OK button has been held. Use 0 to not track.
 * @default 1
 *
 * @arg HoldCommonEventID:num
 * @text Hold Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when the button is held.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg ReleaseSound:struct
 * @text Release Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when released.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg ReleaseCommonEventID:num
 * @text Release Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when the button is released.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg OverloadSound:struct
 * @text Overload Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when overloaded.
 * @default {"name:str":"Buzzer1","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @arg OverloadCommonEventID:num
 * @text Overload Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when the QTE is overloaded.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 180
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_Marcher
 * @text QTE: Marcher (Page Up/Page Down)
 * @desc Starts a Marcher QTE session.
 * Only one QTE can occur at a time. No touch support.
 *
 * @arg ToggleRequirement:eval
 * @text Marcher Requirement
 * @desc How many times must the player march between different
 * buttons to succeed this QTE?
 * @default 20
 *
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the marcher
 * goal has been met. Use 0 to not use.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Remaining Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how much time is
 * remaining when the QTE session finishes.
 * @default 0
 *
 * @arg CommonEventID_PageUp:num
 * @text Page Up Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when pressing Page Up.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg CommonEventID_PageDown:num
 * @text Page Down Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when pressing Page Down.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Button Press Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_Swapper
 * @text QTE: Swapper (OK/Cancel)
 * @desc Starts a Switcher QTE session.
 * Only one QTE can occur at a time. No touch support.
 *
 * @arg ToggleRequirement:eval
 * @text Swap Requirement
 * @desc How many times must the player swap between different
 * buttons to succeed this QTE? No touch support.
 * @default 20
 *
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the swapper
 * goal has been met. Use 0 to not use.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Remaining Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how much time is
 * remaining when the QTE session finishes.
 * @default 0
 *
 * @arg CommonEventID_Ok:num
 * @text OK Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when pressing OK.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg CommonEventID_Cancel:num
 * @text Cancel Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when pressing Cancel.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg Sound:struct
 * @text Button Press Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_TimedHit
 * @text QTE: Timed Hit (OK)
 * @desc Starts a Timed Hit QTE session.
 * Only one QTE can occur at a time.
 * 
 * @arg TimedHitPicture:str
 * @text Timed Hit Picture
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc The picture used for the Timed Hit indicator.
 * Leave empty to not display.
 * @default >>>ATTENTION<<<
 *
 * @arg pointX:eval
 * @text Coordinate X
 * @parent TimedHitPicture:num
 * @desc X coordinate used for the Timed Hit picture.
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg pointY:eval
 * @text Coordinate Y
 * @parent TimedHitPicture:num
 * @desc Y coordinate used for the Timed Hit picture.
 * You may use JavaScript code.
 * @default Graphics.height / 2
 * 
 * @arg Duration:eval
 * @text Press in X Frames
 * @desc Press the OK button by these frames (60 frames = 1 sec)
 * with some leeway. You may use code. 
 * @default 120
 * 
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if the player lands
 * the Timed Hit.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Timing Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how close the player is
 * to the Timed Hit timing.
 * @default 0
 *
 * @arg HitCommonEventID:num
 * @text Success Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play if the player lands.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg HitSound:struct
 * @text Success Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when landing on a hit zone.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg MissCommonEventID:num
 * @text Miss Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play if the player misses.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg MissSound:struct
 * @text Miss Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when NOT landing a hit zone.
 * @default {"name:str":"Buzzer1","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 0
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_TimedSequence
 * @text QTE: Timed Sequence (Buttons)
 * @desc Starts a Timed Sequence QTE session.
 * Only one QTE can occur at a time. No touch support.
 *
 * @arg Sequence:arraystruct
 * @text Sequence
 * @type struct<Timing>[]
 * @desc Set up Button Sequence where the player to press at certain timings.
 * @default ["{\"Button:str\":\"left\",\"Timing:eval\":\"120\",\"Mechanics\":\"\",\"SwitchID:num\":\"0\",\"CommonEventID:num\":\"0\",\"Sound:struct\":\"{\\\"name:str\\\":\\\"Skill2\\\",\\\"volume:num\\\":\\\"90\\\",\\\"pitch:num\\\":\\\"150\\\",\\\"pan:num\\\":\\\"0\\\"}\"}","{\"Button:str\":\"right\",\"Timing:eval\":\"180\",\"Mechanics\":\"\",\"SwitchID:num\":\"0\",\"CommonEventID:num\":\"0\",\"Sound:struct\":\"{\\\"name:str\\\":\\\"Skill2\\\",\\\"volume:num\\\":\\\"90\\\",\\\"pitch:num\\\":\\\"150\\\",\\\"pan:num\\\":\\\"0\\\"}\"}","{\"Button:str\":\"up\",\"Timing:eval\":\"240\",\"Mechanics\":\"\",\"SwitchID:num\":\"0\",\"CommonEventID:num\":\"0\",\"Sound:struct\":\"{\\\"name:str\\\":\\\"Skill2\\\",\\\"volume:num\\\":\\\"90\\\",\\\"pitch:num\\\":\\\"150\\\",\\\"pan:num\\\":\\\"0\\\"}\"}","{\"Button:str\":\"down\",\"Timing:eval\":\"300\",\"Mechanics\":\"\",\"SwitchID:num\":\"0\",\"CommonEventID:num\":\"0\",\"Sound:struct\":\"{\\\"name:str\\\":\\\"Skill2\\\",\\\"volume:num\\\":\\\"90\\\",\\\"pitch:num\\\":\\\"150\\\",\\\"pan:num\\\":\\\"0\\\"}\"}","{\"Button:str\":\"ok\",\"Timing:eval\":\"420\",\"Mechanics\":\"\",\"SwitchID:num\":\"0\",\"CommonEventID:num\":\"0\",\"Sound:struct\":\"{\\\"name:str\\\":\\\"Skill2\\\",\\\"volume:num\\\":\\\"90\\\",\\\"pitch:num\\\":\\\"150\\\",\\\"pan:num\\\":\\\"0\\\"}\"}","{\"Button:str\":\"cancel\",\"Timing:eval\":\"480\",\"Mechanics\":\"\",\"SwitchID:num\":\"0\",\"CommonEventID:num\":\"0\",\"Sound:struct\":\"{\\\"name:str\\\":\\\"Skill2\\\",\\\"volume:num\\\":\\\"90\\\",\\\"pitch:num\\\":\\\"150\\\",\\\"pan:num\\\":\\\"0\\\"}\"}"]
 * 
 * @arg LandingIcon:num
 * @text Landing Icon
 * @desc The icon used for the landing icon.
 * @default 16
 *
 * @arg Direction:str
 * @text Direction
 * @type select
 * @option left
 * @option right
 * @desc Which way do you want the buttons to move towards?
 * @default left
 * 
 * @arg VariableID:num
 * @text Hit Times Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how correct button
 * inputs the player has landed.
 * @default 1
 *
 * @arg MissCommonEventID:num
 * @text Miss Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play if the player misses.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg MissSound:struct
 * @text Miss Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when the player misses.
 * @default {"name:str":"Buzzer1","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 60
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command QTE_TimingBar
 * @text QTE: Timing Bar (OK)
 * @desc Starts a Timing Bar QTE session.
 * Only one QTE can occur at a time.
 *
 * @arg Zones:arraystruct
 * @text Hit Zones
 * @type struct<HitZone>[]
 * @desc Set up Hit Zones where the player will gain points for landing on.
 * @default ["{\"HitArea\":\"\",\"Start:eval\":\"40\",\"End:eval\":\"60\",\"Label:str\":\"+5\",\"Mechanics\":\"\",\"Points:eval\":\"5\",\"CommonEventID:num\":\"0\",\"Color\":\"\",\"AreaColor1:str\":\"29\",\"AreaColor2:str\":\"28\"}","{\"HitArea\":\"\",\"Start:eval\":\"15\",\"End:eval\":\"20\",\"Label:str\":\"+10\",\"Mechanics\":\"\",\"Points:eval\":\"10\",\"CommonEventID:num\":\"0\",\"Color\":\"\",\"AreaColor1:str\":\"29\",\"AreaColor2:str\":\"28\"}","{\"HitArea\":\"\",\"Start:eval\":\"80\",\"End:eval\":\"85\",\"Label:str\":\"+10\",\"Mechanics\":\"\",\"Points:eval\":\"10\",\"CommonEventID:num\":\"0\",\"Color\":\"\",\"AreaColor1:str\":\"29\",\"AreaColor2:str\":\"28\"}"]
 * 
 * @arg CursorIcon:num
 * @text Cursor Icon
 * @desc The icon used for the player icon.
 * @default 84
 * 
 * @arg CursorSpeed:num
 * @text Cursor Speed
 * @type number
 * @min 1
 * @desc The speed at which the cursor moves.
 * @default 4
 * 
 * @arg SwitchID:num
 * @text Success Switch ID
 * @type switch
 * @desc Select which Switch ID to turn ON if all of the player lands
 * the cursor on a Hit Zone.
 * @default 1
 * 
 * @arg VariableID:num
 * @text Points Variable ID
 * @type variable
 * @parent Main
 * @desc Select which Variable ID to record how many points is earned
 * from the Hit Zone the player landed on.
 * @default 1
 *
 * @arg HitSound:struct
 * @text Hit Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when landing on a hit zone.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 * @arg MissSound:struct
 * @text Miss Sound
 * @type struct<Sound>
 * @desc Adjust the sound effect played when NOT landing a hit zone.
 * @default {"name:str":"Buzzer1","volume:num":"90","pitch:num":"100","pan:num":"0"}
 *
 * @arg MissCommonEventID:num
 * @text Miss Common Event
 * @type common_event
 * @parent Main
 * @desc Select a Common Event to play when NOT landing a hit zone.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @arg InputStartDelay:eval
 * @text Input Start Delay
 * @parent Main
 * @desc How many frames (60 frames = 1 sec) delay before inputs
 * are accepted to not take the player by surprise?
 * @default 0
 *
 * @arg Duration:eval
 * @text QTE Duration
 * @parent Main
 * @desc The duration in frames (60 frames = 1 sec).
 * You may use code. Over 1000000 for infinite time.
 * @default 300
 *
 * @arg WaitForQTE:eval
 * @text Wait for QTE?
 * @parent Main
 * @type boolean
 * @on Wait Until Done
 * @off Don't Wait
 * @desc Wait until QTE Session is done?
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
 * @param QTE_TriggerSys
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param WatchDelay:num
 * @text JS Watch Update Delay
 * @parent Triggers
 * @type number
 * @min 1
 * @desc Used for <JS> Switches and Variables.
 * How many frames delay to wait for triggers?
 * @default 60
 *
 * @param GameOver:struct
 * @text Game Over Settings
 * @type struct<GameOver>
 * @desc These settings let you adjust Game Over-related trigger aspects.
 * @default {"DefaultGameOverEvent:num":"0","HealOnEvent:eval":"true","ClearOnEvent:eval":"false"}
 *
 * @param QTE:struct
 * @text QTE Settings
 * @type struct<QTE>
 * @desc These settings let you adjust QTE-related trigger aspects.
 * @default {"EarlyFinishDuration:num":"40","ShowQteTimer:eval":"true","qteTimerGaugeStyleType:str":"Dipper","QteTimerColor1:str":"26","QteTimerColor2:str":"27","QteTimerWindowRectJS:func":"\"// Declare Dimensions\\nlet width = Math.ceil(Graphics.width / 2);\\nlet height = Scene_Base.prototype.calcWindowHeight(1);\\nlet x = Math.floor((Graphics.width - width) / 2);\\nlet y = Graphics.height - Math.floor(height * 0.6);\\ny -= Scene_Base.prototype.calcWindowHeight(4, true);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, width, height);\"","ShowQteProgress:eval":"true","qteProgressGaugeStyleType:str":"Arrow","QteProgressColor1:str":"17","QteProgressColor2:str":"24","QteProgressWindowRectJS:func":"\"// Declare Dimensions\\nlet width = Math.ceil(Graphics.width / 3);\\nlet height = Scene_Base.prototype.calcWindowHeight(1);\\nlet x = Math.floor((Graphics.width - width) / 2);\\nlet y = Graphics.height - Scene_Base.prototype.calcWindowHeight(3, false);\\ny -= Scene_Base.prototype.calcWindowHeight(4, true);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, width, height);\"","TimedHitSuccessFrames:num":"12","TimedHitOpacity:num":"128","TimedHitMaxSize:num":"4.0","TimedSeqSuccessFrames:num":"8","TimedSequenceLandPosition:num":"30","QteTimingBarWidth:num":"600","TimingBarCursorOffsetX:num":"+0","TimingBarCursorOffsetY:num":"+6","TimingBarFontSize:num":"20","TimingBarLabelOffsetX:num":"+0","TimingBarLabelOffsetY:num":"+4","TimingBarColor1:str":"6","TimingBarColor2:str":"14"}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed and QTE text window for this plugin.
 * @default {"MsgTextAlign:str":"center","Message":"","ButtonMashTextMsg:json":"\"Press \\\\C[27]<OK Button>\\\\C[0] or \\\\C[27]Screen Tap\\\\C[0]\\nas many times as you can!\"","ButtonSeqTextMsg:json":"\"Press the above \\\\C[27]Button Sequence\\\\c[0] before time runs out!\"","DirectionStruggleTextMsg:json":"\"Cycle through \\\\C[27]<Left Button>\\\\c[0] \\\\C[27]<Right Button>\\\\c[0] \\\\C[27]<Up Button>\\\\c[0] \\\\C[27]<Down Button>\\\\c[0] buttons\\nrepeatedly to fill the above gauge!\"","FillGaugeTextMsg:json":"\"Press \\\\C[27]<OK Button>\\\\C[0] or \\\\C[27]Screen Tap\\\\C[0]\\nrepeatedly to fill the above gauge!\"","HoldReleaseTextMsg:json":"\"Hold \\\\C[27]<OK Button>\\\\C[0] or \\\\C[27]Press Screen\\\\C[0] until the\\nabove gauge is nearly full, then \\\\C[27]release\\\\c[0]!\"","MarcherTextMsg:json":"\"Alternate between \\\\C[27]<Page Up Button>\\\\c[0] and \\\\C[27]<Page Down Button>\\\\c[0] buttons\\nrepeatedly to fill the above gauge!\"","SwapperTextMsg:json":"\"Alternate between \\\\C[27]<OK Button>\\\\c[0] and \\\\C[27]<Cancel Button>\\\\c[0] buttons\\nrepeatedly to fill the above gauge!\"","TimedHitTextMsg:json":"\"Press \\\\C[27]<OK Button>\\\\C[0] or \\\\C[27]Screen Tap\\\\C[0]\\nat the right time!\"","TimedSeqTextMsg:json":"\"Press the \\\\C[27]Button Sequence\\\\C[0] at the right time!\"","TimingBarTextMsg:json":"\"Press \\\\C[27]<OK Button>\\\\C[0] or \\\\C[27]Screen Tap\\\\C[0] to stop the cursor!\"","MessageWindow":"","MsgWindowBgType:num":"1","MsgWindowRectJS:func":"\"// Declare Lines\\nlet lines = 2;\\n\\n// Declare Dimensions\\nlet width = Graphics.width;\\nlet height = Scene_Base.prototype.calcWindowHeight(lines);\\nlet x = 0;\\nlet y = Graphics.height - height;\\ny -= Scene_Base.prototype.calcWindowHeight(4, true);\\n\\n// Return Rectangle\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Game Over Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameOver:
 * 
 * @param DefaultGameOverEvent:num
 * @text Default Common Event
 * @parent GameOver
 * @type common_event
 * @desc Do you want there to be a Default Common Event?
 * It can be changed later. 0 to not use.
 * @default 0
 *
 * @param HealOnEvent:eval
 * @text Heal on Common Event?
 * @parent GameOver
 * @type boolean
 * @on Heal
 * @off Don't Heal
 * @desc Do you want to heal 1 HP for all dead members after
 * running the Game Over Common Event?
 * @default true
 *
 * @param ClearOnEvent:eval
 * @text Clear After?
 * @parent GameOver
 * @type boolean
 * @on Clear
 * @off Don't Clear
 * @desc Do you wish to clear the Game Over Common Event after
 * it launches or not?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * QTE Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~QTE:
 *
 * @param EarlyFinishDuration:num
 * @text Early Finish Duration
 * @type number
 * @min 1
 * @desc How many frames should the game wait if the player finishes a QTE early?
 * @default 40
 *
 * @param ShowQteTimer:eval
 * @text Show QTE Timer?
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Do you wish to show a QTE Timer over each QTE window?
 * @default true
 * 
 * @param qteTimerGaugeStyleType:str
 * @text Timer Gauge Style
 * @parent ShowQteTimer:eval
 * @type select
 * @option -
 * @option Normal
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for QTE Timer.
 * Requires VisuMZ_3_VisualGaugeStyles!
 * @default Dipper
 *
 * @param QteTimerColor1:str
 * @text Gauge Color 1
 * @parent ShowQteTimer:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param QteTimerColor2:str
 * @text Gauge Color 2
 * @parent ShowQteTimer:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param QteTimerWindowRectJS:func
 * @text JS: X, Y, W, H
 * @parent ShowQteTimer:eval
 * @type note
 * @desc Code used to determine the position and dimensions for this window containing the gauge.
 * @default "// Declare Dimensions\nlet width = Math.ceil(Graphics.width / 2);\nlet height = Scene_Base.prototype.calcWindowHeight(1);\nlet x = Math.floor((Graphics.width - width) / 2);\nlet y = Graphics.height - Math.floor(height * 0.6);\ny -= Scene_Base.prototype.calcWindowHeight(4, true);\n\n// Return Rectangle\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ShowQteProgress:eval
 * @text Show QTE Progress?
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show a progress gauge for certain types of QTE's?
 * @default true
 * 
 * @param qteProgressGaugeStyleType:str
 * @text Progress Gauge Style
 * @parent ShowQteProgress:eval
 * @type select
 * @option -
 * @option Normal
 * @option -
 * @option Arrow
 * @option Dipper
 * @option Flag
 * @option Growth
 * @option Lean
 * @option Quad
 * @option Stagger
 * @option Trapezoid
 * @option -
 * @option HalfStep
 * @option ThirdStep
 * @option FourthStep
 * @option FifthStep
 * @option SixthStep
 * @option EighthStep
 * @option TenthStep
 * @option -
 * @option HalfSection
 * @option ThirdSection
 * @option FourthSection
 * @option FifthSection
 * @option SixthSection
 * @option EighthSection
 * @option TenthSection
 * @option -
 * @option SegmentBy10
 * @option SegmentBy20
 * @option SegmentBy25
 * @option SegmentBy50
 * @option SegmentBy100
 * @option SegmentBy200
 * @option SegmentBy250
 * @option SegmentBy500
 * @option SegmentBy1000
 * @option -
 * @desc Select the gauge style to use for QTE Timer.
 * Requires VisuMZ_3_VisualGaugeStyles!
 * @default Growth
 *
 * @param QteProgressColor1:str
 * @text Gauge Color 1
 * @parent ShowQteProgress:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param QteProgressColor2:str
 * @text Gauge Color 2
 * @parent ShowQteProgress:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param QteProgressWindowRectJS:func
 * @text JS: X, Y, W, H
 * @parent ShowQteProgress:eval
 * @type note
 * @desc Code used to determine the position and dimensions for this window containing the gauge.
 * @default "// Declare Dimensions\nlet width = Math.ceil(Graphics.width / 3);\nlet height = Scene_Base.prototype.calcWindowHeight(1);\nlet x = Math.floor((Graphics.width - width) / 2);\nlet y = Graphics.height - Scene_Base.prototype.calcWindowHeight(3, false);\ny -= Scene_Base.prototype.calcWindowHeight(4, true);\n\n// Return Rectangle\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonSeqInputBuffer:num
 * @text Input Buffer Leeway
 * @type number
 * @desc How many input buffer frames of leeway should be granted to Button Sequence QTE?
 * @default 15
 *
 * @param TimedHitSuccessFrames:num
 * @text Timed Hit Leeway
 * @type number
 * @min 1
 * @desc How many frames of leeway should be granted to Timed Hit QTE?
 * @default 12
 *
 * @param TimedHitOpacity:num
 * @text Overlay Opacity
 * @parent TimedHitSuccessFrames:num
 * @type number
 * @min 0
 * @max 255
 * @desc Timed Hit overlay sprite opacity.
 * @default 128
 *
 * @param TimedHitMaxSize:num
 * @text Max Scaling
 * @parent TimedHitSuccessFrames:num
 * @desc What's the max scaling for Timed Hit QTE indicators?
 * @default 4.0
 *
 * @param TimedSeqSuccessFrames:num
 * @text Timed Sequence Leeway
 * @type number
 * @min 1
 * @desc How many frames of leeway should be granted to Timed Sequence QTE?
 * @default 8
 *
 * @param TimedSequenceLandPosition:num
 * @text Sequence Position
 * @parent TimedSeqSuccessFrames:num
 * @type number
 * @min 0
 * @max 100
 * @desc What is the position for the Timed Sequence Landing Icon?
 * Use a number between 0 and 100.
 * @default 30
 *
 * @param QteTimingBarWidth:num
 * @text QTE Timing Bar Width
 * @type number
 * @min 1
 * @desc This is the width of the Timing Bar in pixels.
 * @default 600
 *
 * @param TimingBarCursorOffsetX:num
 * @text Cursor Offset X
 * @parent QteTimingBarWidth:num
 * @desc Offsets the cursor x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param TimingBarCursorOffsetY:num
 * @text Cursor Offset Y
 * @parent QteTimingBarWidth:num
 * @desc Offsets the cursor y position.
 * Negative: up. Positive: down.
 * @default +6
 *
 * @param TimingBarFontSize:num
 * @text Label Font Size
 * @parent QteTimingBarWidth:num
 * @number
 * @min 1
 * @desc What is the font size used to display timing bar labels?
 * @default 20
 *
 * @param TimingBarLabelOffsetX:num
 * @text Label Offset X
 * @parent QteTimingBarWidth:num
 * @desc Offsets the label x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param TimingBarLabelOffsetY:num
 * @text Label Offset Y
 * @parent QteTimingBarWidth:num
 * @desc Offsets the label y position.
 * Negative: up. Positive: down.
 * @default +4
 *
 * @param TimingBarColor1:str
 * @text Timing Bar Color 1
 * @parent QteTimingBarWidth:num
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param TimingBarColor2:str
 * @text Timing Bar Color 2
 * @parent QteTimingBarWidth:num
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 *
 * @param MsgTextAlign:str
 * @text Text Alignment
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc What is the text alignment? Requires VisuMZ_1_MessageCore!
 * Otherwise, defaults to left alignment.
 * @default center
 * 
 * @param Message
 * @text Message Settings
 * 
 * @param ButtonMashTextMsg:json
 * @text Button Mash Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Press \\C[27]<OK Button>\\C[0] or \\C[27]Screen Tap\\C[0]\nas many times as you can!"
 * 
 * @param ButtonSeqTextMsg:json
 * @text Button Sequence Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported.
 * @default "Press the above \\C[27]Button Sequence\\c[0] before time runs out!"
 * 
 * @param DirectionStruggleTextMsg:json
 * @text Direction Struggle
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Cycle through \\C[27]<Left Button>\\c[0] \\C[27]<Right Button>\\c[0] \\C[27]<Up Button>\\c[0] \\C[27]<Down Button>\\c[0] buttons\nrepeatedly to fill the above gauge!"
 * 
 * @param FillGaugeTextMsg:json
 * @text Fill Gauge Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Press \\C[27]<OK Button>\\C[0] or \\C[27]Screen Tap\\C[0]\nrepeatedly to fill the above gauge!"
 * 
 * @param HoldReleaseTextMsg:json
 * @text Hold & Release Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Hold \\C[27]<OK Button>\\C[0] or \\C[27]Press Screen\\C[0] until the\nabove gauge is nearly full, then \\C[27]release\\c[0]!"
 * 
 * @param MarcherTextMsg:json
 * @text Marcher Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Alternate between \\C[27]<Page Up Button>\\c[0] and \\C[27]<Page Down Button>\\c[0] buttons\nrepeatedly to fill the above gauge!"
 * 
 * @param SwapperTextMsg:json
 * @text Swapper Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Alternate between \\C[27]<OK Button>\\c[0] and \\C[27]<Cancel Button>\\c[0] buttons\nrepeatedly to fill the above gauge!"
 * 
 * @param TimedHitTextMsg:json
 * @text Timed Hit Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported. Leave empty for no window.
 * @default "Press \\C[27]<OK Button>\\C[0] or \\C[27]Screen Tap\\C[0]\nat the right time!"
 * 
 * @param TimedSeqTextMsg:json
 * @text Timed Sequence Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported.
 * @default "Press the \\C[27]Button Sequence\\C[0] at the right time!"
 * 
 * @param TimingBarTextMsg:json
 * @text Timing Bar Text
 * @parent Message
 * @type note
 * @desc Alter the text that appears for the QTE Window.
 * Text codes are supported.
 * @default "Press \\C[27]<OK Button>\\C[0] or \\C[27]Screen Tap\\C[0] to stop the cursor!"
 * 
 * @param MessageWindow
 * @text Message Window
 *
 * @param MsgWindowBgType:num
 * @text Background Type
 * @parent MessageWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 1
 *
 * @param MsgWindowRectJS:func
 * @text JS: X, Y, W, H
 * @parent MessageWindow
 * @type note
 * @desc Code used to determine the position and dimensions for this window.
 * @default "// Declare Lines\nlet lines = 2;\n\n// Declare Dimensions\nlet width = Graphics.width;\nlet height = Scene_Base.prototype.calcWindowHeight(lines);\nlet x = 0;\nlet y = Graphics.height - height;\ny -= Scene_Base.prototype.calcWindowHeight(4, true);\n\n// Return Rectangle\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Sound Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sound:
 *
 * @param name:str
 * @text Filename
 * @type file
 * @dir audio/se/
 * @require 1
 * @desc Filename of the sound effect played.
 * @default Skill2
 *
 * @param volume:num
 * @text Volume
 * @type number
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param pitch:num
 * @text Pitch
 * @type number
 * @desc Pitch of the sound effect played.
 * @default 100
 *
 * @param pan:num
 * @text Pan
 * @desc Pan of the sound effect played.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Hit Zones Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~HitZone:
 *
 * @param HitArea
 * @text Hit Area
 *
 * @param Start:eval
 * @text Start
 * @parent HitArea
 * @desc This is the starting location of the hit area.
 * Use numbers between 0 and 100. You may use code.
 * @default 40
 *
 * @param End:eval
 * @text End
 * @parent HitArea
 * @desc This is the ending location of the hit area.
 * Use numbers between 0 and 100. You may use code.
 * @default 60
 *
 * @param Label:str
 * @text Label
 * @parent HitArea
 * @desc Text displayed for this hit area (centered).
 * Text codes are supported. Leave empty to not use.
 * @default +5
 *
 * @param Mechanics
 * @text Mechanic Settings
 *
 * @param Points:eval
 * @text Variable Points
 * @parent Mechanics
 * @desc If the cursor lands in this zone, then assign this
 * many points to the results variable. You may use code.
 * @default 5
 *
 * @param CommonEventID:num
 * @text Hit Common Event
 * @parent Mechanics
 * @type common_event
 * @desc Select a Common Event to play when this zone is hit.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @param Color
 * @text Color Settings
 *
 * @param AreaColor1:str
 * @text Area Color 1
 * @parent Color
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param AreaColor2:str
 * @text Area Color 2
 * @parent Color
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 */
/* ----------------------------------------------------------------------------
 * Timing Sequence Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Timing:
 *
 * @param Button:str
 * @text Button
 * @type select
 * @option 
 * @option down
 * @option left
 * @option right
 * @option up
 * @option 
 * @option ok
 * @option cancel
 * @option pageup
 * @option pagedown
 * @option shift
 * @option 
 * @desc What button is needed to be pressed?
 * @default ok
 * 
 * @param Timing:eval
 * @text Press in X Frames
 * @parent Button:str
 * @desc Press the button by these frames (60 frames = 1 sec)
 * with some leeway. You may use code. 
 * @default 60
 *
 * @param Mechanics
 * @text Mechanic Settings
 * 
 * @param SwitchID:num
 * @text Success Switch ID
 * @parent Mechanics
 * @type switch
 * @desc Select which Switch ID to turn ON if the button is
 * successfully hit. Use 0 to not change a switch.
 * @default 0
 *
 * @param CommonEventID:num
 * @text Hit Common Event
 * @parent Mechanics
 * @type common_event
 * @desc Select a Common Event to play when this button is hit.
 * Use 0 to not play a Common Event.
 * @default 0
 *
 * @param Sound:struct
 * @text Button Press Sound
 * @parent Mechanics
 * @type struct<Sound>
 * @desc Adjust the sound effect played when a button is pressed.
 * @default {"name:str":"Skill2","volume:num":"90","pitch:num":"150","pan:num":"0"}
 *
 */
//=============================================================================

const _0x53e3c7=_0x5a8d;(function(_0x251909,_0x1ee0d1){const _0x4f0f39=_0x5a8d,_0x467496=_0x251909();while(!![]){try{const _0x5bc636=-parseInt(_0x4f0f39(0x12b))/0x1*(-parseInt(_0x4f0f39(0x123))/0x2)+-parseInt(_0x4f0f39(0x8b))/0x3+-parseInt(_0x4f0f39(0x203))/0x4+-parseInt(_0x4f0f39(0x89))/0x5+-parseInt(_0x4f0f39(0x1d7))/0x6*(parseInt(_0x4f0f39(0xf2))/0x7)+parseInt(_0x4f0f39(0x109))/0x8*(-parseInt(_0x4f0f39(0x124))/0x9)+parseInt(_0x4f0f39(0x25a))/0xa;if(_0x5bc636===_0x1ee0d1)break;else _0x467496['push'](_0x467496['shift']());}catch(_0xe148f6){_0x467496['push'](_0x467496['shift']());}}}(_0x438a,0xc64ed));var label=_0x53e3c7(0x1e4),tier=tier||0x0,dependencies=[_0x53e3c7(0xe1),'VisuMZ_1_EventsMoveCore'],pluginData=$plugins['filter'](function(_0x3feb9e){const _0x1e21b2=_0x53e3c7;return _0x3feb9e[_0x1e21b2(0x1a8)]&&_0x3feb9e[_0x1e21b2(0x136)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x53e3c7(0x249)]=VisuMZ[label][_0x53e3c7(0x249)]||{},VisuMZ['ConvertParams']=function(_0x2c9962,_0x396af8){const _0x1ed62d=_0x53e3c7;for(const _0x3c282c in _0x396af8){if(_0x3c282c['match'](/(.*):(.*)/i)){const _0x40b262=String(RegExp['$1']),_0x1c83ac=String(RegExp['$2'])['toUpperCase']()[_0x1ed62d(0x1bb)]();let _0x353926,_0x5d67cb,_0x5eaeb3;switch(_0x1c83ac){case _0x1ed62d(0xba):_0x353926=_0x396af8[_0x3c282c]!==''?Number(_0x396af8[_0x3c282c]):0x0;break;case _0x1ed62d(0xaf):_0x5d67cb=_0x396af8[_0x3c282c]!==''?JSON['parse'](_0x396af8[_0x3c282c]):[],_0x353926=_0x5d67cb[_0x1ed62d(0x1fa)](_0x5e2bdb=>Number(_0x5e2bdb));break;case _0x1ed62d(0x18a):_0x353926=_0x396af8[_0x3c282c]!==''?eval(_0x396af8[_0x3c282c]):null;break;case _0x1ed62d(0x239):_0x5d67cb=_0x396af8[_0x3c282c]!==''?JSON[_0x1ed62d(0x221)](_0x396af8[_0x3c282c]):[],_0x353926=_0x5d67cb[_0x1ed62d(0x1fa)](_0x28260d=>eval(_0x28260d));break;case'JSON':_0x353926=_0x396af8[_0x3c282c]!==''?JSON[_0x1ed62d(0x221)](_0x396af8[_0x3c282c]):'';break;case _0x1ed62d(0x250):_0x5d67cb=_0x396af8[_0x3c282c]!==''?JSON[_0x1ed62d(0x221)](_0x396af8[_0x3c282c]):[],_0x353926=_0x5d67cb[_0x1ed62d(0x1fa)](_0x4356ef=>JSON[_0x1ed62d(0x221)](_0x4356ef));break;case _0x1ed62d(0x232):_0x353926=_0x396af8[_0x3c282c]!==''?new Function(JSON['parse'](_0x396af8[_0x3c282c])):new Function(_0x1ed62d(0x1e3));break;case _0x1ed62d(0xce):_0x5d67cb=_0x396af8[_0x3c282c]!==''?JSON[_0x1ed62d(0x221)](_0x396af8[_0x3c282c]):[],_0x353926=_0x5d67cb[_0x1ed62d(0x1fa)](_0x16de07=>new Function(JSON[_0x1ed62d(0x221)](_0x16de07)));break;case _0x1ed62d(0x101):_0x353926=_0x396af8[_0x3c282c]!==''?String(_0x396af8[_0x3c282c]):'';break;case _0x1ed62d(0x173):_0x5d67cb=_0x396af8[_0x3c282c]!==''?JSON[_0x1ed62d(0x221)](_0x396af8[_0x3c282c]):[],_0x353926=_0x5d67cb[_0x1ed62d(0x1fa)](_0x5351f4=>String(_0x5351f4));break;case _0x1ed62d(0xb0):_0x5eaeb3=_0x396af8[_0x3c282c]!==''?JSON['parse'](_0x396af8[_0x3c282c]):{},_0x353926=VisuMZ[_0x1ed62d(0x224)]({},_0x5eaeb3);break;case _0x1ed62d(0x214):_0x5d67cb=_0x396af8[_0x3c282c]!==''?JSON[_0x1ed62d(0x221)](_0x396af8[_0x3c282c]):[],_0x353926=_0x5d67cb['map'](_0x135921=>VisuMZ['ConvertParams']({},JSON[_0x1ed62d(0x221)](_0x135921)));break;default:continue;}_0x2c9962[_0x40b262]=_0x353926;}}return _0x2c9962;},(_0x4b7fa8=>{const _0x44708b=_0x53e3c7,_0x9935fe=_0x4b7fa8[_0x44708b(0x1ec)];for(const _0x2555ce of dependencies){if(!Imported[_0x2555ce]){alert(_0x44708b(0xee)[_0x44708b(0x200)](_0x9935fe,_0x2555ce)),SceneManager[_0x44708b(0x85)]();break;}}const _0x4ba697=_0x4b7fa8[_0x44708b(0x136)];if(_0x4ba697[_0x44708b(0x238)](/\[Version[ ](.*?)\]/i)){const _0x591a12=Number(RegExp['$1']);_0x591a12!==VisuMZ[label][_0x44708b(0x16b)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x44708b(0x200)](_0x9935fe,_0x591a12)),SceneManager['exit']());}if(_0x4ba697[_0x44708b(0x238)](/\[Tier[ ](\d+)\]/i)){const _0x19b41e=Number(RegExp['$1']);_0x19b41e<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x44708b(0x200)](_0x9935fe,_0x19b41e,tier)),SceneManager[_0x44708b(0x85)]()):tier=Math['max'](_0x19b41e,tier);}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x4b7fa8['parameters']);})(pluginData);if(VisuMZ[_0x53e3c7(0x1e5)]['version']<1.79){let text='';text+='VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20',text+=_0x53e3c7(0xfb),alert(text),SceneManager[_0x53e3c7(0x85)]();}if(VisuMZ[_0x53e3c7(0x1c7)][_0x53e3c7(0x16b)]<1.5){let text='';text+='VisuMZ_1_EventsMoveCore\x20needs\x20to\x20be\x20updated\x20',text+=_0x53e3c7(0xfb),alert(text),SceneManager['exit']();}PluginManager[_0x53e3c7(0x7b)](pluginData[_0x53e3c7(0x1ec)],_0x53e3c7(0x149),_0x5af2a0=>{const _0x59b1c4=_0x53e3c7;VisuMZ['ConvertParams'](_0x5af2a0,_0x5af2a0);const _0x1221a8=_0x5af2a0[_0x59b1c4(0x126)]||0x0;$gameSystem[_0x59b1c4(0xac)](_0x1221a8);}),PluginManager[_0x53e3c7(0x7b)](pluginData[_0x53e3c7(0x1ec)],_0x53e3c7(0x170),_0x28306f=>{const _0x3d7220=_0x53e3c7;VisuMZ['ConvertParams'](_0x28306f,_0x28306f),$gameSystem[_0x3d7220(0xac)](0x0);}),PluginManager['registerCommand'](pluginData[_0x53e3c7(0x1ec)],'PromiseSwitch',_0x540fcd=>{const _0x512706=_0x53e3c7;VisuMZ[_0x512706(0x224)](_0x540fcd,_0x540fcd);const _0x35d1b1=_0x540fcd[_0x512706(0x18b)]||0x0;if(_0x35d1b1<=0x0)return;const _0x5edbbf=_0x540fcd[_0x512706(0x213)]||[],_0x1d2e34=_0x512706(0x1ff);$gameSystem['addQTE_TriggerSysPromiseToSet'](_0x1d2e34,_0x35d1b1,_0x5edbbf);}),PluginManager[_0x53e3c7(0x7b)](pluginData['name'],_0x53e3c7(0xcf),_0xf97407=>{const _0x187fd1=_0x53e3c7;VisuMZ[_0x187fd1(0x224)](_0xf97407,_0xf97407);const _0x3373ea=_0xf97407[_0x187fd1(0x18b)]||0x0;if(_0x3373ea<=0x0)return;const _0x15f29d=_0xf97407['CommonEventIDs']||[],_0xacd1b0=_0x187fd1(0xcd);$gameSystem[_0x187fd1(0x19d)](_0xacd1b0,_0x3373ea,_0x15f29d);}),PluginManager[_0x53e3c7(0x7b)](pluginData['name'],_0x53e3c7(0x1d4),_0x575926=>{const _0x4118bc=_0x53e3c7;VisuMZ[_0x4118bc(0x224)](_0x575926,_0x575926);const _0x1b6dd6=_0x575926[_0x4118bc(0x18b)]||0x0;if(_0x1b6dd6<=0x0)return;const _0x9ad0a5=_0x575926[_0x4118bc(0x213)]||[],_0x1e3c6c=_0x4118bc(0x1d0);$gameSystem[_0x4118bc(0x19d)](_0x1e3c6c,_0x1b6dd6,_0x9ad0a5);}),PluginManager[_0x53e3c7(0x7b)](pluginData['name'],'PromiseWeapon',_0x2b9f83=>{const _0x18b759=_0x53e3c7;VisuMZ[_0x18b759(0x224)](_0x2b9f83,_0x2b9f83);const _0x3a25b1=_0x2b9f83[_0x18b759(0x18b)]||0x0;if(_0x3a25b1<=0x0)return;const _0x250fe9=_0x2b9f83[_0x18b759(0x213)]||[],_0x12f763='weapons';$gameSystem[_0x18b759(0x19d)](_0x12f763,_0x3a25b1,_0x250fe9);}),PluginManager[_0x53e3c7(0x7b)](pluginData['name'],_0x53e3c7(0xea),_0x554669=>{const _0x278480=_0x53e3c7;VisuMZ[_0x278480(0x224)](_0x554669,_0x554669);const _0x349b7d=_0x554669[_0x278480(0x18b)]||0x0;if(_0x349b7d<=0x0)return;const _0x534e8a=_0x554669['CommonEventIDs']||[],_0x2276a8=_0x278480(0x1d2);$gameSystem[_0x278480(0x19d)](_0x2276a8,_0x349b7d,_0x534e8a);}),PluginManager[_0x53e3c7(0x7b)](pluginData['name'],_0x53e3c7(0x135),_0x2af7d=>{const _0x282e11=_0x53e3c7;SceneManager[_0x282e11(0x11c)][_0x282e11(0x190)](),SceneManager[_0x282e11(0x144)]();}),PluginManager['registerCommand'](pluginData['name'],_0x53e3c7(0x236),_0x2b6d30=>{const _0x35e737=_0x53e3c7;if(SceneManager[_0x35e737(0x1cd)]())return;VisuMZ[_0x35e737(0x224)](_0x2b6d30,_0x2b6d30);const _0x1c4764={'type':_0x35e737(0xfa),'varID':_0x2b6d30['VariableID']||0x0,'commonEventID':_0x2b6d30[_0x35e737(0x126)]||0x0,'sound':_0x2b6d30['Sound']||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x2b6d30['InputStartDelay']||0x0,'duration':(_0x2b6d30[_0x35e737(0xc0)]||0x1)[_0x35e737(0x22b)](0x1,0xf423f)},_0x594bfd=_0x2b6d30[_0x35e737(0x16f)];SceneManager['setupQTE'](_0x1c4764);if(_0x594bfd){const _0x3626e3=$gameTemp[_0x35e737(0x138)]();if(_0x3626e3)_0x3626e3['setWaitMode'](_0x35e737(0xc7));}}),PluginManager[_0x53e3c7(0x7b)](pluginData[_0x53e3c7(0x1ec)],_0x53e3c7(0x18d),_0x76ceb1=>{const _0x216870=_0x53e3c7;if(SceneManager['checkPlayingQTE']())return;VisuMZ['ConvertParams'](_0x76ceb1,_0x76ceb1);const _0x24d8ae={'type':_0x216870(0x189),'sequence':(_0x76ceb1[_0x216870(0x11d)]||[])[_0x216870(0xb7)](),'shuffle':_0x76ceb1[_0x216870(0x25c)]||![],'progress':0x0,'switchID':_0x76ceb1[_0x216870(0x165)]||0x0,'varID':_0x76ceb1[_0x216870(0x1d5)]||0x0,'commonEventID':_0x76ceb1[_0x216870(0x126)]||0x0,'sound':_0x76ceb1[_0x216870(0x246)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x76ceb1[_0x216870(0x147)]||0x0,'duration':_0x76ceb1[_0x216870(0xc0)]||0x1},_0x36b5aa=_0x76ceb1[_0x216870(0x16f)];_0x24d8ae[_0x216870(0x110)]&&(_0x24d8ae[_0x216870(0x143)]=VisuMZ[_0x216870(0x1e4)][_0x216870(0x192)](_0x24d8ae[_0x216870(0x143)]));SceneManager[_0x216870(0x1e1)](_0x24d8ae);if(_0x36b5aa){const _0x55afaf=$gameTemp['getLastPluginCommandInterpreter']();if(_0x55afaf)_0x55afaf['setWaitMode'](_0x216870(0xc7));}}),PluginManager[_0x53e3c7(0x7b)](pluginData[_0x53e3c7(0x1ec)],'QTE_ButtonSequenceRandom',_0x5c9d12=>{const _0x3cbfc2=_0x53e3c7;if(SceneManager[_0x3cbfc2(0x1cd)]())return;VisuMZ[_0x3cbfc2(0x224)](_0x5c9d12,_0x5c9d12);const _0x5d2e7f={'type':_0x3cbfc2(0x189),'buttons':(_0x5c9d12[_0x3cbfc2(0x1f1)]||[])[_0x3cbfc2(0xbf)]('')['clone'](),'sequence':[],'length':_0x5c9d12[_0x3cbfc2(0xd8)]||0x1,'progress':0x0,'switchID':_0x5c9d12[_0x3cbfc2(0x165)]||0x0,'varID':_0x5c9d12[_0x3cbfc2(0x1d5)]||0x0,'commonEventID':_0x5c9d12[_0x3cbfc2(0x126)]||0x0,'sound':_0x5c9d12[_0x3cbfc2(0x246)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x5c9d12[_0x3cbfc2(0x147)]||0x0,'duration':_0x5c9d12[_0x3cbfc2(0xc0)]||0x1},_0x5a23a4=_0x5c9d12[_0x3cbfc2(0x16f)];let _0x46914d=_0x5d2e7f[_0x3cbfc2(0x153)];while(_0x46914d--){const _0x4ceeaa=_0x5d2e7f['buttons'][Math[_0x3cbfc2(0xb2)](_0x5d2e7f['buttons'][_0x3cbfc2(0x153)])];_0x5d2e7f[_0x3cbfc2(0x143)][_0x3cbfc2(0x107)](_0x4ceeaa||'ok');}SceneManager[_0x3cbfc2(0x1e1)](_0x5d2e7f);if(_0x5a23a4){const _0x519544=$gameTemp[_0x3cbfc2(0x138)]();if(_0x519544)_0x519544[_0x3cbfc2(0xaa)](_0x3cbfc2(0xc7));}}),PluginManager[_0x53e3c7(0x7b)](pluginData['name'],_0x53e3c7(0x243),_0x37f545=>{const _0x469c34=_0x53e3c7;if(SceneManager[_0x469c34(0x1cd)]())return;VisuMZ[_0x469c34(0x224)](_0x37f545,_0x37f545);const _0x38d454={'type':'directionStruggle','goal':_0x37f545[_0x469c34(0x160)]||0x1,'progress':0x0,'switchID':_0x37f545[_0x469c34(0x165)]||0x0,'varID':_0x37f545[_0x469c34(0x1d5)]||0x0,'commonEventID':_0x37f545[_0x469c34(0x126)]||0x0,'sound':_0x37f545[_0x469c34(0x246)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x37f545[_0x469c34(0x147)]||0x0,'duration':_0x37f545[_0x469c34(0xc0)]||0x1},_0x45dbaf=_0x37f545[_0x469c34(0x16f)];SceneManager['setupQTE'](_0x38d454);if(_0x45dbaf){const _0x5e9ad3=$gameTemp[_0x469c34(0x138)]();if(_0x5e9ad3)_0x5e9ad3[_0x469c34(0xaa)](_0x469c34(0xc7));}}),PluginManager[_0x53e3c7(0x7b)](pluginData[_0x53e3c7(0x1ec)],'QTE_FillGauge',_0x4aad47=>{const _0x3fce5f=_0x53e3c7;if(SceneManager['checkPlayingQTE']())return;VisuMZ[_0x3fce5f(0x224)](_0x4aad47,_0x4aad47);const _0x30b3f9={'type':'fillGauge','goal':_0x4aad47[_0x3fce5f(0x9b)]||0x1,'progress':0x0,'switchID':_0x4aad47[_0x3fce5f(0x165)]||0x0,'varID':_0x4aad47[_0x3fce5f(0x1d5)]||0x0,'commonEventID':_0x4aad47[_0x3fce5f(0x126)]||0x0,'sound':_0x4aad47[_0x3fce5f(0x246)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x4aad47[_0x3fce5f(0x147)]||0x0,'duration':_0x4aad47[_0x3fce5f(0xc0)]||0x1},_0x62a48b=_0x4aad47[_0x3fce5f(0x16f)];SceneManager[_0x3fce5f(0x1e1)](_0x30b3f9);if(_0x62a48b){const _0x216f31=$gameTemp[_0x3fce5f(0x138)]();if(_0x216f31)_0x216f31['setWaitMode'](_0x3fce5f(0xc7));}}),PluginManager[_0x53e3c7(0x7b)](pluginData[_0x53e3c7(0x1ec)],_0x53e3c7(0xe7),_0x367276=>{const _0x77947=_0x53e3c7;if(SceneManager[_0x77947(0x1cd)]())return;VisuMZ[_0x77947(0x224)](_0x367276,_0x367276);const _0x470860={'type':_0x77947(0xbd),'goal':(_0x367276['MaxDuration']||0x1)[_0x77947(0x22b)](0x1,0xf423f),'progress':0x0,'switchID':_0x367276[_0x77947(0x165)]||0x0,'varID':_0x367276['VariableID']||0x0,'releaseSound':_0x367276[_0x77947(0x1c4)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'overloadSound':_0x367276['OverloadSound']||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x367276[_0x77947(0x147)]||0x0,'duration':0x1f40,'HoldCommonEventID':_0x367276[_0x77947(0xf0)]||0x0,'ReleaseCommonEventID':_0x367276['ReleaseCommonEventID']||0x0,'OverloadCommonEventID':_0x367276[_0x77947(0x1cb)]||0x0},_0x1a4911=_0x367276[_0x77947(0x16f)];SceneManager[_0x77947(0x1e1)](_0x470860);if(_0x1a4911){const _0xe30232=$gameTemp[_0x77947(0x138)]();if(_0xe30232)_0xe30232[_0x77947(0xaa)](_0x77947(0xc7));}}),PluginManager[_0x53e3c7(0x7b)](pluginData['name'],_0x53e3c7(0x1f8),_0x99e524=>{const _0x1bc563=_0x53e3c7;if(SceneManager[_0x1bc563(0x1cd)]())return;VisuMZ['ConvertParams'](_0x99e524,_0x99e524);const _0x52db9f={'type':_0x1bc563(0x1b0),'goal':_0x99e524[_0x1bc563(0xff)]||0x1,'progress':0x0,'switchID':_0x99e524['SwitchID']||0x0,'varID':_0x99e524[_0x1bc563(0x1d5)]||0x0,'pageUpCommonEventID':_0x99e524[_0x1bc563(0xb3)]||0x0,'pageDownCommonEventID':_0x99e524[_0x1bc563(0xb9)]||0x0,'sound':_0x99e524[_0x1bc563(0x246)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x99e524[_0x1bc563(0x147)]||0x0,'duration':_0x99e524[_0x1bc563(0xc0)]||0x1},_0xe25f7f=_0x99e524[_0x1bc563(0x16f)];SceneManager[_0x1bc563(0x1e1)](_0x52db9f);if(_0xe25f7f){const _0x520b58=$gameTemp[_0x1bc563(0x138)]();if(_0x520b58)_0x520b58[_0x1bc563(0xaa)](_0x1bc563(0xc7));}}),PluginManager[_0x53e3c7(0x7b)](pluginData[_0x53e3c7(0x1ec)],_0x53e3c7(0x92),_0x5767b0=>{const _0x16ddb1=_0x53e3c7;if(SceneManager[_0x16ddb1(0x1cd)]())return;VisuMZ[_0x16ddb1(0x224)](_0x5767b0,_0x5767b0);const _0x393faa={'type':_0x16ddb1(0xb1),'goal':_0x5767b0[_0x16ddb1(0xff)]||0x1,'progress':0x0,'switchID':_0x5767b0[_0x16ddb1(0x165)]||0x0,'varID':_0x5767b0[_0x16ddb1(0x1d5)]||0x0,'okCommonEventID':_0x5767b0['CommonEventID_Ok']||0x0,'cancelCommonEventID':_0x5767b0[_0x16ddb1(0x201)]||0x0,'sound':_0x5767b0['Sound']||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x5767b0['InputStartDelay']||0x0,'duration':_0x5767b0[_0x16ddb1(0xc0)]||0x1},_0x5b6ddc=_0x5767b0[_0x16ddb1(0x16f)];SceneManager[_0x16ddb1(0x1e1)](_0x393faa);if(_0x5b6ddc){const _0x3f1ae4=$gameTemp[_0x16ddb1(0x138)]();if(_0x3f1ae4)_0x3f1ae4[_0x16ddb1(0xaa)](_0x16ddb1(0xc7));}}),PluginManager[_0x53e3c7(0x7b)](pluginData[_0x53e3c7(0x1ec)],_0x53e3c7(0xcb),_0x4e0e97=>{const _0x51bfd0=_0x53e3c7;if(SceneManager[_0x51bfd0(0x1cd)]())return;VisuMZ[_0x51bfd0(0x224)](_0x4e0e97,_0x4e0e97);const _0x1cd5cb={'type':_0x51bfd0(0x240),'picture':_0x4e0e97[_0x51bfd0(0x7a)]||'','pointX':_0x4e0e97[_0x51bfd0(0x10f)]||0x0,'pointY':_0x4e0e97[_0x51bfd0(0x15b)]||0x0,'switchID':_0x4e0e97['SwitchID']||0x0,'varID':_0x4e0e97[_0x51bfd0(0x1d5)]||0x0,'hitCommonEventID':_0x4e0e97[_0x51bfd0(0x99)]||0x0,'hitSound':_0x4e0e97[_0x51bfd0(0xb6)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'missCommonEventID':_0x4e0e97['MissCommonEventID']||0x0,'missSound':_0x4e0e97[_0x51bfd0(0x176)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x4e0e97[_0x51bfd0(0x147)]||0x0,'duration':_0x4e0e97['Duration']||0x1},_0x2261be=_0x4e0e97[_0x51bfd0(0x16f)];_0x1cd5cb[_0x51bfd0(0x1d1)][_0x51bfd0(0x14e)]()[_0x51bfd0(0x1bb)]()==='>>>ATTENTION<<<'&&(_0x1cd5cb[_0x51bfd0(0x1d1)]='');SceneManager[_0x51bfd0(0x1e1)](_0x1cd5cb);if(_0x2261be){const _0x2cfd76=$gameTemp['getLastPluginCommandInterpreter']();if(_0x2cfd76)_0x2cfd76[_0x51bfd0(0xaa)](_0x51bfd0(0xc7));}}),PluginManager[_0x53e3c7(0x7b)](pluginData[_0x53e3c7(0x1ec)],'QTE_TimedSequence',_0x233c2d=>{const _0x368c43=_0x53e3c7;if(SceneManager[_0x368c43(0x1cd)]())return;VisuMZ['ConvertParams'](_0x233c2d,_0x233c2d);const _0x48e418={'type':_0x368c43(0x1ae),'sequence':_0x233c2d[_0x368c43(0x179)]||[],'progress':0x0,'icon':_0x233c2d[_0x368c43(0x17b)]||0x0,'direction':_0x233c2d[_0x368c43(0x256)]||_0x368c43(0xde),'varID':_0x233c2d[_0x368c43(0x1d5)]||0x0,'missCommonEventID':_0x233c2d['MissCommonEventID']||0x0,'missSound':_0x233c2d[_0x368c43(0x176)]||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'inputStartDelay':_0x233c2d['InputStartDelay']||0x0,'duration':_0x233c2d[_0x368c43(0xc0)]||0x1},_0x2dae9d=_0x233c2d[_0x368c43(0x16f)];_0x48e418[_0x368c43(0x143)]=_0x48e418[_0x368c43(0x143)][_0x368c43(0xc2)](_0x27956a=>_0x27956a['Button']!==''),_0x48e418['sequence']=_0x48e418[_0x368c43(0x143)]['sort']((_0x389086,_0xc5ed5f)=>{const _0x12449c=_0x368c43;if(_0x389086[_0x12449c(0x12e)]!==_0xc5ed5f[_0x12449c(0x12e)])return _0x389086[_0x12449c(0x12e)]-_0xc5ed5f[_0x12449c(0x12e)];return 0x0;}),_0x48e418[_0x368c43(0x78)]=_0x48e418[_0x368c43(0x143)][_0x368c43(0xb7)](),_0x48e418[_0x368c43(0x23a)]=_0x48e418['sequence'][_0x48e418[_0x368c43(0x143)][_0x368c43(0x153)]-0x1][_0x368c43(0x12e)],_0x48e418['duration']+=VisuMZ[_0x368c43(0x1e4)][_0x368c43(0x249)][_0x368c43(0xc7)][_0x368c43(0x20b)],SceneManager[_0x368c43(0x1e1)](_0x48e418);if(_0x2dae9d){const _0x4ca239=$gameTemp['getLastPluginCommandInterpreter']();if(_0x4ca239)_0x4ca239[_0x368c43(0xaa)](_0x368c43(0xc7));}}),PluginManager[_0x53e3c7(0x7b)](pluginData[_0x53e3c7(0x1ec)],'QTE_TimingBar',_0x36d7c7=>{const _0x4a3492=_0x53e3c7;if(SceneManager['checkPlayingQTE']())return;VisuMZ[_0x4a3492(0x224)](_0x36d7c7,_0x36d7c7);const _0x362e3e={'type':_0x4a3492(0xd0),'zones':_0x36d7c7[_0x4a3492(0x1a3)]||[],'cursorIcon':_0x36d7c7[_0x4a3492(0x128)]||0x0,'cursorSpeed':_0x36d7c7[_0x4a3492(0x22a)]||0x1,'switchID':_0x36d7c7[_0x4a3492(0x165)]||0x0,'varID':_0x36d7c7[_0x4a3492(0x1d5)]||0x0,'hitSound':_0x36d7c7['HitSound']||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'missSound':_0x36d7c7['MissSound']||{'name':'','volume':0x0,'pitch':0x64,'pan':0x0},'missCommonEventID':_0x36d7c7[_0x4a3492(0x1fc)]||0x0,'inputStartDelay':_0x36d7c7[_0x4a3492(0x147)]||0x0,'duration':_0x36d7c7[_0x4a3492(0xc0)]||0x1},_0xd221b8=_0x36d7c7['WaitForQTE'];SceneManager[_0x4a3492(0x1e1)](_0x362e3e);if(_0xd221b8){const _0x1ff0de=$gameTemp[_0x4a3492(0x138)]();if(_0x1ff0de)_0x1ff0de[_0x4a3492(0xaa)]('QTE');}}),VisuMZ['QTE_TriggerSys'][_0x53e3c7(0x185)]={'OnChange':/<(?:|TOGGLE |CHANGE )TRIGGER COMMON EVENT(?:|S):[ ](.*?)>/gi,'OnSwitch':/<TRIGGER ON SW(?:|ITCH)(?:|ES):[ ](.*?)>/gi,'OnVariable':/<TRIGGER ON VAR(?:|IABLE)(?:|S):[ ](.*?)>/gi,'gameOverCommonEvent':/<GAME OVER COMMON EVENT:[ ](\d+)>/i},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x76)]=Scene_Boot['prototype'][_0x53e3c7(0x1de)],Scene_Boot[_0x53e3c7(0xdf)][_0x53e3c7(0x1de)]=function(){const _0x5532e=_0x53e3c7;VisuMZ[_0x5532e(0x1e4)][_0x5532e(0x76)]['call'](this),VisuMZ[_0x5532e(0x1e4)][_0x5532e(0x155)](),VisuMZ[_0x5532e(0x1e4)][_0x5532e(0x8e)]();},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x8e)]=function(){const _0x5c38bf=_0x53e3c7;if(Imported[_0x5c38bf(0x1df)]&&VisuMZ[_0x5c38bf(0x18e)]['version']<1.15){let _0x59e107='';_0x59e107+=_0x5c38bf(0x169),_0x59e107+='in\x20order\x20for\x20VisuMZ_2_QTE_TriggerSys\x20to\x20work.',alert(_0x59e107),SceneManager[_0x5c38bf(0x85)]();}},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x1eb)]={},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x17d)]={},0x3,VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x145)]=[],VisuMZ[_0x53e3c7(0x1e4)]['_jsCommonEvents']=[],VisuMZ['QTE_TriggerSys'][_0x53e3c7(0x1b7)]={},VisuMZ[_0x53e3c7(0x1e4)]['_watchedJsSwitches']={},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x1c0)]={},VisuMZ['QTE_TriggerSys'][_0x53e3c7(0x155)]=function(){const _0x3dc745=_0x53e3c7;this[_0x3dc745(0xe6)](),this[_0x3dc745(0x174)](),this[_0x3dc745(0x25e)]();},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0xe6)]=function(){const _0x1d3ab6=_0x53e3c7,_0x38fc7b=$dataSystem['switches'],_0x52604f=_0x38fc7b[_0x1d3ab6(0x153)],_0xc9bd6f=VisuMZ[_0x1d3ab6(0x1e4)][_0x1d3ab6(0x185)];for(let _0x303557=0x1;_0x303557<_0x52604f;_0x303557++){const _0x427e79=_0x38fc7b[_0x303557]||'';if(_0x427e79[_0x1d3ab6(0x238)](_0xc9bd6f['OnChange'])){const _0x414d74=String(RegExp['$1'])['split'](',')['map'](_0xffaebc=>Number(_0xffaebc));this['_triggerSwitches'][_0x303557]=this[_0x1d3ab6(0x1eb)][_0x303557]||[];for(const _0x3ff9e6 of _0x414d74){this['_triggerSwitches'][_0x303557][_0x1d3ab6(0x107)](_0x3ff9e6);}DataManager[_0x1d3ab6(0x1b5)](_0x303557)&&(VisuMZ['QTE_TriggerSys'][_0x1d3ab6(0x82)][_0x303557]=![]),$dataSystem[_0x1d3ab6(0x1ff)][_0x303557]=_0x427e79[_0x1d3ab6(0xec)](_0xc9bd6f['OnChange'],'');}}},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x174)]=function(){const _0x29001a=_0x53e3c7,_0x355194=$dataSystem[_0x29001a(0xcd)],_0x5c03f0=_0x355194[_0x29001a(0x153)],_0x5ba76a=VisuMZ[_0x29001a(0x1e4)][_0x29001a(0x185)];for(let _0x51d61b=0x1;_0x51d61b<_0x5c03f0;_0x51d61b++){const _0x5622cf=_0x355194[_0x51d61b]||'';if(_0x5622cf[_0x29001a(0x238)](_0x5ba76a['OnChange'])){const _0x56ef3b=String(RegExp['$1'])[_0x29001a(0x22d)](',')[_0x29001a(0x1fa)](_0x175e7c=>Number(_0x175e7c));this['_triggerVariables'][_0x51d61b]=this[_0x29001a(0x17d)][_0x51d61b]||[];for(const _0x4008cf of _0x56ef3b){this[_0x29001a(0x17d)][_0x51d61b]['push'](_0x4008cf);}DataManager[_0x29001a(0x196)](_0x51d61b)&&(VisuMZ[_0x29001a(0x1e4)][_0x29001a(0x1c0)][_0x51d61b]=0x0),$dataSystem[_0x29001a(0xcd)][_0x51d61b]=_0x5622cf[_0x29001a(0xec)](_0x5ba76a['OnChange'],'');}}},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x25e)]=function(){const _0x21b74c=_0x53e3c7;for(const _0x42f956 of $dataCommonEvents){if(!_0x42f956)continue;this['parseCommonEventNotetags'](_0x42f956),delete _0x42f956[_0x21b74c(0x96)];}},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x228)]=function(_0x2fece5){const _0x66a262=_0x53e3c7,_0x2f9c33=VisuMZ[_0x66a262(0x1e4)][_0x66a262(0x185)];let _0x805a1a=_0x2fece5[_0x66a262(0x1ec)]||'';const _0x1a4f12=_0x2fece5['id']||0x0;if(_0x805a1a['match'](_0x2f9c33[_0x66a262(0x14b)])){const _0x5b2253=String(RegExp['$1'])[_0x66a262(0x22d)](',')[_0x66a262(0x1fa)](_0x4f69b4=>Number(_0x4f69b4));for(const _0x253c99 of _0x5b2253){this[_0x66a262(0x1eb)][_0x253c99]=this[_0x66a262(0x1eb)][_0x253c99]||[];if(this[_0x66a262(0x1eb)][_0x253c99][_0x66a262(0x260)](_0x1a4f12))continue;this[_0x66a262(0x1eb)][_0x253c99][_0x66a262(0x107)](_0x1a4f12),DataManager[_0x66a262(0x1b5)](_0x253c99)&&(VisuMZ[_0x66a262(0x1e4)][_0x66a262(0x82)][_0x253c99]=![]);}_0x805a1a=_0x805a1a[_0x66a262(0xec)](_0x2f9c33[_0x66a262(0x14b)],'');}if(_0x805a1a[_0x66a262(0x238)](_0x2f9c33[_0x66a262(0xc6)])){const _0x311380=String(RegExp['$1'])[_0x66a262(0x22d)](',')[_0x66a262(0x1fa)](_0x2a893a=>Number(_0x2a893a));for(const _0xd33fd6 of _0x311380){this[_0x66a262(0x17d)][_0xd33fd6]=this[_0x66a262(0x17d)][_0xd33fd6]||[];if(this[_0x66a262(0x17d)][_0xd33fd6][_0x66a262(0x260)](_0x1a4f12))continue;this['_triggerVariables'][_0xd33fd6][_0x66a262(0x107)](_0x1a4f12),DataManager['isTriggerWatchedVariable'](_0xd33fd6)&&(VisuMZ[_0x66a262(0x1e4)][_0x66a262(0x1c0)][_0xd33fd6]=0x0);}_0x805a1a=_0x805a1a[_0x66a262(0xec)](_0x2f9c33['OnVariable'],'');}_0x2fece5['name']=_0x805a1a['trim']();},VisuMZ[_0x53e3c7(0x1e4)]['defineCommonEventType']=function(_0x3829f9){const _0x380568=_0x53e3c7;if(!_0x3829f9)return;if(this[_0x380568(0x145)]['includes'](_0x3829f9['id']))return;if(this['_jsCommonEvents'][_0x380568(0x260)](_0x3829f9['id']))return;const _0x4dc32b=_0x3829f9[_0x380568(0x1e6)];let _0x848cef=![];for(const _0x29e961 of _0x4dc32b){if([0x0,0x6c,0x198][_0x380568(0x260)](_0x29e961[_0x380568(0x255)]))continue;if([0x163,0x28f][_0x380568(0x260)](_0x29e961[_0x380568(0x255)])){_0x848cef=!![];continue;}_0x848cef=![];break;}_0x848cef?(this[_0x380568(0xe4)][_0x380568(0x107)](_0x3829f9['id']),this[_0x380568(0xef)](_0x3829f9)):this[_0x380568(0x145)]['push'](_0x3829f9['id']);},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0xef)]=function(_0x315915){const _0x58bf5e=_0x53e3c7;this[_0x58bf5e(0x1b7)]=this[_0x58bf5e(0x1b7)]||{},this[_0x58bf5e(0x1b7)][_0x315915['id']]=this['_jsFuncs'][_0x315915['id']]||[];let _0xe3b115='';const _0xb20cdb=_0x315915[_0x58bf5e(0x1e6)];for(const _0x5ade00 of _0xb20cdb){if(_0x5ade00['code']===0x163){if(_0xe3b115!==''){const _0x420c60=new Function(_0xe3b115);this[_0x58bf5e(0x1b7)][_0x315915['id']]['push'](_0x420c60),_0xe3b115='';}_0xe3b115+=_0x5ade00[_0x58bf5e(0x1f3)][0x0]+'\x0a';}else{if(_0x5ade00[_0x58bf5e(0x255)]===0x28f)_0xe3b115+=_0x5ade00['parameters'][0x0]+'\x0a';else{if(_0x5ade00[_0x58bf5e(0x255)]===0x0&&_0xe3b115!==''){const _0x5c420d=new Function(_0xe3b115);this[_0x58bf5e(0x1b7)][_0x315915['id']][_0x58bf5e(0x107)](_0x5c420d),_0xe3b115='';}}}}},VisuMZ['QTE_TriggerSys'][_0x53e3c7(0x17f)]=function(_0x426d0e){const _0x9c7a7e=_0x53e3c7;this[_0x9c7a7e(0x146)]($dataCommonEvents[_0x426d0e]);if(this['_normalCommonEvents'][_0x9c7a7e(0x260)](_0x426d0e))$gameSystem['reserveOnceParallel'](_0x426d0e);else this[_0x9c7a7e(0xe4)][_0x9c7a7e(0x260)](_0x426d0e)&&this[_0x9c7a7e(0x1be)](_0x426d0e);},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x1be)]=function(_0x13445e){const _0x40ec17=_0x53e3c7;this[_0x40ec17(0x1b7)]=this[_0x40ec17(0x1b7)]||{},this['_jsFuncs'][_0x13445e]=this['_jsFuncs'][_0x13445e]||[];const _0x2723b4=this[_0x40ec17(0x1b7)][_0x13445e];for(const _0x25d415 of _0x2723b4){try{_0x25d415();}catch(_0x4eed5a){console['log'](_0x4eed5a);}}},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x1ca)]=function(_0x320467){const _0x3fb6ed=_0x53e3c7;if(!this[_0x3fb6ed(0x1eb)][_0x320467])return;const _0x5e9f1a=this[_0x3fb6ed(0x1eb)][_0x320467];for(const _0x5e4807 of _0x5e9f1a){this['processCommonEvent'](_0x5e4807);}},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x140)]=function(_0x20b631){const _0x13742=_0x53e3c7;if(!this['_triggerVariables'][_0x20b631])return;const _0xbca9=this[_0x13742(0x17d)][_0x20b631];for(const _0x50e352 of _0xbca9){this[_0x13742(0x17f)](_0x50e352);}},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0xae)]=function(_0x12aa34){const _0x5b470f=DataManager['getOnChangeCommonEventTriggers'](_0x12aa34);for(const _0x210de6 of _0x5b470f){this['processCommonEvent'](_0x210de6);}},DataManager[_0x53e3c7(0x1b5)]=function(_0x216cb0){const _0x5007e3=_0x53e3c7;return DataManager[_0x5007e3(0xb4)](_0x216cb0);},DataManager[_0x53e3c7(0x196)]=function(_0x53309d){const _0x1e8aa1=_0x53e3c7;return DataManager[_0x1e8aa1(0x9e)](_0x53309d);},DataManager[_0x53e3c7(0x1ab)]=function(_0x481b3b){const _0x3cd8ce=_0x53e3c7;if(!_0x481b3b)return![];return this[_0x3cd8ce(0x187)](_0x481b3b)['length']>0x0;},DataManager['getOnChangeCommonEventTriggers']=function(_0x3634bb){const _0x43d7cc=_0x53e3c7;if(!_0x3634bb)return[];this['_cache_onChangeCommonEventTrigger']=this[_0x43d7cc(0x1a1)]||{};const _0x1e58f0=VisuMZ[_0x43d7cc(0x1e4)][_0x43d7cc(0x8a)](_0x3634bb,'onChangeTrigger');if(this['_cache_onChangeCommonEventTrigger'][_0x1e58f0]!==undefined)return this['_cache_onChangeCommonEventTrigger'][_0x1e58f0];this[_0x43d7cc(0x1a1)][_0x1e58f0]=[];const _0x3edb58=VisuMZ[_0x43d7cc(0x1e4)][_0x43d7cc(0x185)],_0x327261=_0x3634bb[_0x43d7cc(0x152)]||'';if(_0x327261['match'](_0x3edb58[_0x43d7cc(0x21a)])){const _0x2aee3e=String(RegExp['$1'])[_0x43d7cc(0x22d)](',')[_0x43d7cc(0x1fa)](_0xe0677d=>Number(_0xe0677d));for(const _0x4bd1e9 of _0x2aee3e){this[_0x43d7cc(0x1a1)][_0x1e58f0][_0x43d7cc(0x107)](_0x4bd1e9);}}return this[_0x43d7cc(0x1a1)][_0x1e58f0];},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x8a)]=function(_0x102e77,_0x2a8abd){const _0x58f062=_0x53e3c7;if(VisuMZ[_0x58f062(0x8a)])return VisuMZ[_0x58f062(0x8a)](_0x102e77,_0x2a8abd);let _0x42d443='';if($dataActors['includes'](_0x102e77))_0x42d443=_0x58f062(0x199)['format'](_0x102e77['id'],_0x2a8abd);if($dataClasses[_0x58f062(0x260)](_0x102e77))_0x42d443='Class-%1-%2'[_0x58f062(0x200)](_0x102e77['id'],_0x2a8abd);if($dataSkills['includes'](_0x102e77))_0x42d443='Skill-%1-%2'[_0x58f062(0x200)](_0x102e77['id'],_0x2a8abd);if($dataItems[_0x58f062(0x260)](_0x102e77))_0x42d443=_0x58f062(0xd9)[_0x58f062(0x200)](_0x102e77['id'],_0x2a8abd);if($dataWeapons[_0x58f062(0x260)](_0x102e77))_0x42d443='Weapon-%1-%2'[_0x58f062(0x200)](_0x102e77['id'],_0x2a8abd);if($dataArmors[_0x58f062(0x260)](_0x102e77))_0x42d443=_0x58f062(0x23b)[_0x58f062(0x200)](_0x102e77['id'],_0x2a8abd);if($dataEnemies[_0x58f062(0x260)](_0x102e77))_0x42d443='Enemy-%1-%2'[_0x58f062(0x200)](_0x102e77['id'],_0x2a8abd);if($dataStates['includes'](_0x102e77))_0x42d443='State-%1-%2'['format'](_0x102e77['id'],_0x2a8abd);return _0x42d443;},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x180)]=SceneManager[_0x53e3c7(0x1e2)],SceneManager['updateFrameCount']=function(){const _0x22cc9f=_0x53e3c7;VisuMZ['QTE_TriggerSys'][_0x22cc9f(0x180)][_0x22cc9f(0x88)](this);const _0x373a64=VisuMZ[_0x22cc9f(0x1e4)][_0x22cc9f(0x249)][_0x22cc9f(0xb5)]||0x3c;if(Graphics['frameCount']%_0x373a64===0x0){VisuMZ[_0x22cc9f(0x1e4)][_0x22cc9f(0x181)]();if($gameSystem)$gameSystem['checkWatchedTriggers']();}},VisuMZ[_0x53e3c7(0x1e4)]['checkWatchedTriggers']=function(){const _0x1e9372=_0x53e3c7;{for(const _0x1ab891 in this[_0x1e9372(0x82)]){const _0x577570=Number(_0x1ab891);$gameSwitches[_0x1e9372(0x24f)](_0x577570)!==this[_0x1e9372(0x82)][_0x1ab891]&&(this[_0x1e9372(0x82)][_0x1ab891]=$gameSwitches[_0x1e9372(0x24f)](_0x577570),VisuMZ[_0x1e9372(0x1e4)][_0x1e9372(0x1ca)](_0x577570));}}{for(const _0x5e5ecc in this[_0x1e9372(0x1c0)]){const _0xa889f6=Number(_0x5e5ecc);$gameVariables[_0x1e9372(0x24f)](_0xa889f6)!==this[_0x1e9372(0x1c0)][_0x5e5ecc]&&(this[_0x1e9372(0x1c0)][_0x5e5ecc]=$gameVariables[_0x1e9372(0x24f)](_0xa889f6),VisuMZ[_0x1e9372(0x1e4)][_0x1e9372(0x140)](_0xa889f6));}}},VisuMZ['QTE_TriggerSys'][_0x53e3c7(0x7e)]=SceneManager[_0x53e3c7(0x1db)],SceneManager[_0x53e3c7(0x1db)]=function(){const _0x41e3c8=_0x53e3c7;VisuMZ['QTE_TriggerSys'][_0x41e3c8(0x7e)][_0x41e3c8(0x88)](this),this['clear_QTE_Settings']();},SceneManager[_0x53e3c7(0x144)]=function(){const _0x3d629d=_0x53e3c7;this[_0x3d629d(0x18c)]='',this[_0x3d629d(0xbb)]=0x0,this[_0x3d629d(0x131)]=0x0,this[_0x3d629d(0x1ac)]=0x0,this[_0x3d629d(0xed)]=0x0,this[_0x3d629d(0x120)]=0x0,this[_0x3d629d(0xa7)]={},this[_0x3d629d(0x231)]=0x0,this[_0x3d629d(0xc1)]=0x3c;},SceneManager[_0x53e3c7(0x20f)]=function(){const _0x39b63e=_0x53e3c7;return this[_0x39b63e(0x18c)]!=='';},SceneManager['checkPlayingQTE']=function(){const _0x483836=_0x53e3c7;if(this['isPlayingQTE']()){if($gameTemp[_0x483836(0x1fd)]()){const _0x41f47=_0x483836(0xc4);console[_0x483836(0x10c)](_0x41f47);}return!![];}if(SceneManager['isRollingDice']){if(SceneManager['isRollingDice']()){if($gameTemp['isPlaytest']()){const _0xdf9450='Cannot\x20start\x20QTE\x20during\x20a\x20dice\x20roll.';console[_0x483836(0x10c)](_0xdf9450);}return!![];}}if(this[_0x483836(0xad)]()){const _0x510a2b=this[_0x483836(0x11c)][_0x483836(0xa0)];if(Imported[_0x483836(0x11f)]){if(this['_scene'][_0x483836(0x1c2)]()){const _0x302191=_0x483836(0x1dd);return console[_0x483836(0x10c)](_0x302191),!![];}}if(Imported[_0x483836(0x116)]){if(_0x510a2b[_0x483836(0x103)]){const _0x3df442=_0x483836(0xe8);return console[_0x483836(0x10c)](_0x3df442),!![];}}if(Imported[_0x483836(0x81)]){if(_0x510a2b[_0x483836(0x178)]){const _0x7b8778=_0x483836(0x1aa);return console[_0x483836(0x10c)](_0x7b8778),!![];}}}return![];},SceneManager[_0x53e3c7(0x21e)]=function(){const _0x58159c=_0x53e3c7;return this[_0x58159c(0x18c)];},SceneManager['setupQTE']=function(_0x49c5d7){const _0x56e976=_0x53e3c7;this[_0x56e976(0x18c)]=_0x49c5d7[_0x56e976(0x148)]||'';if(this[_0x56e976(0x18c)]==='')return;Input['clear'](),TouchInput[_0x56e976(0x1cf)](),this['_qteInputDelay']=_0x49c5d7[_0x56e976(0x86)]||0x0,this['_qteDuration']=_0x49c5d7[_0x56e976(0x23a)],this['_qteWholeDuration']=_0x49c5d7[_0x56e976(0x23a)],this['_qteSettings']=JSON[_0x56e976(0x221)](JSON[_0x56e976(0x17c)](_0x49c5d7)),_0x49c5d7[_0x56e976(0x148)]===_0x56e976(0x240)&&_0x49c5d7[_0x56e976(0x1d1)]&&this[_0x56e976(0x11c)]['createTimedHitSpriteQTE'](),this[_0x56e976(0x11c)]&&this[_0x56e976(0x11c)]['setupMessageForQTE'](this[_0x56e976(0x18c)]),_0x49c5d7[_0x56e976(0x1ef)]&&_0x49c5d7['switchID']>0x0&&$gameSwitches[_0x56e976(0xe5)](_0x49c5d7[_0x56e976(0x1ef)],![]),_0x49c5d7[_0x56e976(0x10b)]&&_0x49c5d7[_0x56e976(0x10b)]>0x0&&$gameVariables[_0x56e976(0xe5)](_0x49c5d7[_0x56e976(0x10b)],0x0);},SceneManager[_0x53e3c7(0x1c8)]=function(){const _0x32035f=_0x53e3c7;if(this['_qteInputDelay']>0x0){this[_0x32035f(0xbb)]--;return;}if(this[_0x32035f(0x231)]>0x0){this[_0x32035f(0x231)]--;this[_0x32035f(0x231)]<=0x0&&this['clear_QTE_Settings']();return;}this[_0x32035f(0x131)]<0xf4240&&this[_0x32035f(0x131)]--,this['_qteDuration']<=0x0&&(this[_0x32035f(0x21e)]()==='timedHit'?this[_0x32035f(0xa2)]():this[_0x32035f(0x144)]());},SceneManager[_0x53e3c7(0xa2)]=function(){const _0x591c70=_0x53e3c7,_0x3a8565=VisuMZ[_0x591c70(0x1e4)][_0x591c70(0x249)]['QTE'];this['_qteEarlyFinishDuration']=_0x3a8565[_0x591c70(0xca)]??0x28;},SceneManager[_0x53e3c7(0x23c)]=function(){const _0x2d4e00=_0x53e3c7;return this[_0x2d4e00(0x231)]>0x0;},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x1a5)]=SceneManager[_0x53e3c7(0x19a)],SceneManager['updateInputData']=function(){const _0x33a943=_0x53e3c7;VisuMZ[_0x33a943(0x1e4)][_0x33a943(0x1a5)][_0x33a943(0x88)](this),this['isPlayingQTE']()&&this[_0x33a943(0x11c)][_0x33a943(0xc8)]()&&this['updateQTEInputs'](),this['_afterQteSessionDelay']>0x0&&this[_0x33a943(0xc1)]--;},SceneManager[_0x53e3c7(0x151)]=function(){const _0x36b840=_0x53e3c7;if(this[_0x36b840(0x231)]>0x0)return;const _0x44d077=this['getTypeQTE']();switch(_0x44d077){case'buttonMash':if(this[_0x36b840(0xbb)]>0x0)return;this['updateButtonMashQTE']();break;case'buttonSequence':this['updateButtonSequenceQTE']();break;case _0x36b840(0xb8):if(this[_0x36b840(0xbb)]>0x0)return;this['updateDirectionStruggleQTE']();break;case _0x36b840(0x130):if(this['_qteInputDelay']>0x0)return;this[_0x36b840(0x7f)]();break;case _0x36b840(0xbd):if(this[_0x36b840(0xbb)]>0x0){(VisuMZ['QTE_TriggerSys'][_0x36b840(0x1da)]()||Input['isTriggered']('ok')||TouchInput['isTriggered']())&&(this[_0x36b840(0xbb)]=0x0);return;}this[_0x36b840(0x166)]();break;case _0x36b840(0x1b0):if(this[_0x36b840(0xbb)]>0x0)return;this[_0x36b840(0x251)]();break;case _0x36b840(0xb1):if(this[_0x36b840(0xbb)]>0x0)return;this['updateSwapperQTE']();break;case'timedHit':if(this[_0x36b840(0xbb)]>0x0)return;this[_0x36b840(0x91)]();break;case _0x36b840(0x1ae):if(this[_0x36b840(0xbb)]>0x0)return;this[_0x36b840(0x1cc)]();break;case _0x36b840(0xd0):if(this[_0x36b840(0xbb)]>0x0)return;this['updateTimingBarQTE']();break;}},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x1da)]=function(_0x31c05b){const _0x7c4286=_0x53e3c7;if(_0x31c05b){if(Input['isPressed'](_0x7c4286(0x80))&&Input[_0x7c4286(0x157)](_0x7c4286(0xbe)))return!![];return $gameTemp['isPlaytest']()&&Input[_0x7c4286(0x157)](_0x7c4286(0xbe));}else{if(Input[_0x7c4286(0x157)](_0x7c4286(0x80))&&Input[_0x7c4286(0x1a2)](_0x7c4286(0xbe)))return!![];return $gameTemp['isPlaytest']()&&Input[_0x7c4286(0x1a2)](_0x7c4286(0xbe));}},Input[_0x53e3c7(0x1d3)]=function(){const _0x18a8fc=_0x53e3c7;return this[_0x18a8fc(0x263)]!==null&&this['_pressedTime']===0x0;},SceneManager[_0x53e3c7(0x234)]=function(){const _0x309f1c=_0x53e3c7;if(VisuMZ[_0x309f1c(0x1e4)][_0x309f1c(0x1da)]()||Input['isTriggered']('ok')||TouchInput[_0x309f1c(0x22f)]()){const _0x295c04=this['_qteSettings'],_0x39a987=_0x295c04['varID']||0x0;if(_0x39a987>0x0){const _0xebdb5a=$gameVariables[_0x309f1c(0x24f)](_0x39a987);$gameVariables[_0x309f1c(0xe5)](_0x39a987,_0xebdb5a+0x1);}const _0x57bb92=_0x295c04['commonEventID']||0x0;if(_0x57bb92>0x0){const _0x4ba27b=$gameTemp[_0x309f1c(0x138)]();$onceParallel(_0x57bb92,_0x4ba27b?_0x4ba27b[_0x309f1c(0xf5)]:0x0);}const _0xd48810=_0x295c04[_0x309f1c(0x1f2)];_0xd48810&&_0xd48810[_0x309f1c(0x1ec)]&&AudioManager[_0x309f1c(0x142)](_0xd48810);}},SceneManager['updateButtonSequenceQTE']=function(){const _0x10b38a=_0x53e3c7,_0x4ada60=this[_0x10b38a(0xa7)],_0x37d722=this['_qteSettings']['sequence'],_0x16a454=this[_0x10b38a(0xa7)][_0x10b38a(0x1b6)]||0x0,_0x21085e=_0x37d722[_0x16a454];if(this['_qteInputBuffer']>0x0)this[_0x10b38a(0xed)]--;if(VisuMZ[_0x10b38a(0x1e4)][_0x10b38a(0x1da)]()||Input[_0x10b38a(0x22f)](_0x21085e)){if(Input['isTriggered'](_0x21085e))Input[_0x10b38a(0x1cf)]();this[_0x10b38a(0xed)]=VisuMZ['QTE_TriggerSys']['Settings'][_0x10b38a(0xc7)][_0x10b38a(0x9c)]??0xf,this[_0x10b38a(0xbb)]=0x0;const _0x32b23d=_0x4ada60[_0x10b38a(0x15e)]||0x0;if(_0x32b23d>0x0){const _0x2c31db=$gameTemp[_0x10b38a(0x138)]();$onceParallel(_0x32b23d,_0x2c31db?_0x2c31db[_0x10b38a(0xf5)]:0x0);}const _0x116642=_0x4ada60['sound'];_0x116642&&_0x116642[_0x10b38a(0x1ec)]&&AudioManager['playSe'](_0x116642);_0x4ada60['progress']++;if(_0x4ada60[_0x10b38a(0x1b6)]>=_0x37d722[_0x10b38a(0x153)]){Input['clear'](),TouchInput[_0x10b38a(0x1cf)]();const _0x5440d1=_0x4ada60[_0x10b38a(0x1ef)]||0x0;_0x5440d1>0x0&&$gameSwitches[_0x10b38a(0xe5)](_0x5440d1,!![]);const _0x2ac7bd=_0x4ada60[_0x10b38a(0x10b)]||0x0;_0x2ac7bd>0x0&&$gameVariables[_0x10b38a(0xe5)](_0x2ac7bd,this[_0x10b38a(0x131)]),this[_0x10b38a(0xa2)]();}}else _0x16a454>0x0&&this[_0x10b38a(0xed)]<=0x0&&Input[_0x10b38a(0x1d3)]()&&(SoundManager[_0x10b38a(0x204)](),_0x4ada60['progress']=0x0);},SceneManager[_0x53e3c7(0x205)]=function(){const _0x5da4cf=_0x53e3c7;if(VisuMZ['QTE_TriggerSys'][_0x5da4cf(0x1da)]()||Input[_0x5da4cf(0x21b)]>0x0){if(Input[_0x5da4cf(0x21b)]>0x0){if(this['_qteLastInput']===Input['dir4'])return;this[_0x5da4cf(0x120)]=Input[_0x5da4cf(0x21b)];}const _0x544727=this[_0x5da4cf(0xa7)],_0x308426=_0x544727[_0x5da4cf(0x15e)]||0x0;if(_0x308426>0x0){const _0xf63995=$gameTemp[_0x5da4cf(0x138)]();$onceParallel(_0x308426,_0xf63995?_0xf63995['_eventId']:0x0);}const _0x2b4962=_0x544727[_0x5da4cf(0x1f2)];_0x2b4962&&_0x2b4962[_0x5da4cf(0x1ec)]&&AudioManager[_0x5da4cf(0x142)](_0x2b4962);_0x544727[_0x5da4cf(0x1b6)]++;if(_0x544727['progress']>=_0x544727[_0x5da4cf(0xd2)]){Input[_0x5da4cf(0x1cf)](),TouchInput[_0x5da4cf(0x1cf)]();const _0x3104e7=_0x544727[_0x5da4cf(0x1ef)]||0x0;_0x3104e7>0x0&&$gameSwitches[_0x5da4cf(0xe5)](_0x3104e7,!![]);const _0x282113=_0x544727[_0x5da4cf(0x10b)]||0x0;_0x282113>0x0&&$gameVariables[_0x5da4cf(0xe5)](_0x282113,this[_0x5da4cf(0x131)]),this['finishEarlyQTE']();}}},SceneManager[_0x53e3c7(0x7f)]=function(){const _0xd7a5e8=_0x53e3c7;if(VisuMZ[_0xd7a5e8(0x1e4)]['PlaytestInput']()||Input['isTriggered']('ok')||TouchInput[_0xd7a5e8(0x22f)]()){const _0x108633=this[_0xd7a5e8(0xa7)],_0x3a0c0e=_0x108633[_0xd7a5e8(0x15e)]||0x0;if(_0x3a0c0e>0x0){const _0x39843e=$gameTemp[_0xd7a5e8(0x138)]();$onceParallel(_0x3a0c0e,_0x39843e?_0x39843e[_0xd7a5e8(0xf5)]:0x0);}const _0x4b921d=_0x108633[_0xd7a5e8(0x1f2)];_0x4b921d&&_0x4b921d['name']&&AudioManager[_0xd7a5e8(0x142)](_0x4b921d);_0x108633[_0xd7a5e8(0x1b6)]++;if(_0x108633[_0xd7a5e8(0x1b6)]>=_0x108633[_0xd7a5e8(0xd2)]){Input[_0xd7a5e8(0x1cf)](),TouchInput[_0xd7a5e8(0x1cf)]();const _0x181640=_0x108633[_0xd7a5e8(0x1ef)]||0x0;_0x181640>0x0&&$gameSwitches[_0xd7a5e8(0xe5)](_0x181640,!![]);const _0x54dd46=_0x108633[_0xd7a5e8(0x10b)]||0x0;_0x54dd46>0x0&&$gameVariables['setValue'](_0x54dd46,this['_qteDuration']),this[_0xd7a5e8(0xa2)]();}}},SceneManager[_0x53e3c7(0x166)]=function(){const _0x1da4ed=_0x53e3c7,_0x50f94e=this[_0x1da4ed(0xa7)];this[_0x1da4ed(0x131)]=0x1f40;if(VisuMZ[_0x1da4ed(0x1e4)][_0x1da4ed(0x1da)](!![])||Input['isPressed']('ok')||TouchInput[_0x1da4ed(0x157)]()){if(this['_qteSettings']['HoldCommonEventID']&&!this[_0x1da4ed(0xa7)]['HoldCommonEventRun']){this[_0x1da4ed(0xa7)][_0x1da4ed(0x1f9)]=!![];const _0x18a8de=this[_0x1da4ed(0xa7)][_0x1da4ed(0xf0)],_0x4a2ad3=$gameTemp[_0x1da4ed(0x138)]();$onceParallel(_0x18a8de,_0x4a2ad3?_0x4a2ad3[_0x1da4ed(0xf5)]:0x0);}VisuMZ['QTE_TriggerSys'][_0x1da4ed(0x1da)](!![])?_0x50f94e['progress']+=Math['floor'](_0x50f94e[_0x1da4ed(0xd2)]/0x14):_0x50f94e[_0x1da4ed(0x1b6)]++;if(_0x50f94e[_0x1da4ed(0x1b6)]>=_0x50f94e[_0x1da4ed(0xd2)]){if(VisuMZ['QTE_TriggerSys'][_0x1da4ed(0x1da)](!![]))Input[_0x1da4ed(0x1cf)](),TouchInput[_0x1da4ed(0x1cf)]();else{Input[_0x1da4ed(0x1cf)](),TouchInput[_0x1da4ed(0x1cf)]();const _0xf3e203=_0x50f94e['overloadSound'];_0xf3e203&&_0xf3e203[_0x1da4ed(0x1ec)]&&AudioManager['playSe'](_0xf3e203);const _0x5df9a5=_0x50f94e[_0x1da4ed(0x1ef)]||0x0;_0x5df9a5>0x0&&$gameSwitches[_0x1da4ed(0xe5)](_0x5df9a5,![]);const _0x588bd6=_0x50f94e[_0x1da4ed(0x10b)]||0x0;_0x588bd6>0x0&&$gameVariables[_0x1da4ed(0xe5)](_0x588bd6,0x0);if(this[_0x1da4ed(0xa7)][_0x1da4ed(0x1cb)]){const _0x3909a3=this[_0x1da4ed(0xa7)][_0x1da4ed(0x1cb)],_0x564b96=$gameTemp[_0x1da4ed(0x138)]();$onceParallel(_0x3909a3,_0x564b96?_0x564b96[_0x1da4ed(0xf5)]:0x0);}this['finishEarlyQTE']();}}}else{if(!VisuMZ['QTE_TriggerSys'][_0x1da4ed(0x1da)](!![])&&!Input[_0x1da4ed(0x157)]('ok')&&!TouchInput['isPressed']()){Input[_0x1da4ed(0x1cf)](),TouchInput[_0x1da4ed(0x1cf)]();const _0x3bc47f=_0x50f94e[_0x1da4ed(0x1b6)]>0x0?_0x50f94e[_0x1da4ed(0x95)]:_0x50f94e['overloadSound'];_0x3bc47f&&_0x3bc47f[_0x1da4ed(0x1ec)]&&AudioManager['playSe'](_0x3bc47f);const _0x53cf93=_0x50f94e[_0x1da4ed(0x1ef)]||0x0;_0x53cf93>0x0&&$gameSwitches['setValue'](_0x53cf93,_0x50f94e[_0x1da4ed(0x1b6)]>0x0);const _0x9d1ba1=_0x50f94e[_0x1da4ed(0x10b)]||0x0;_0x9d1ba1>0x0&&(_0x50f94e['progress']=Math['min'](_0x50f94e['progress'],_0x50f94e[_0x1da4ed(0xd2)]),$gameVariables[_0x1da4ed(0xe5)](_0x9d1ba1,_0x50f94e[_0x1da4ed(0x1b6)]));if(_0x50f94e[_0x1da4ed(0x1b6)]>0x0){if(this[_0x1da4ed(0xa7)]['ReleaseCommonEventID']){const _0x3eae6a=this[_0x1da4ed(0xa7)][_0x1da4ed(0x98)],_0x3552b2=$gameTemp[_0x1da4ed(0x138)]();$onceParallel(_0x3eae6a,_0x3552b2?_0x3552b2[_0x1da4ed(0xf5)]:0x0);}}else{if(this[_0x1da4ed(0xa7)][_0x1da4ed(0x1cb)]){const _0x408baf=this['_qteSettings']['OverloadCommonEventID'],_0x269c21=$gameTemp[_0x1da4ed(0x138)]();$onceParallel(_0x408baf,_0x269c21?_0x269c21['_eventId']:0x0);}}this[_0x1da4ed(0xa2)]();}}},SceneManager[_0x53e3c7(0x251)]=function(){const _0x19852b=_0x53e3c7;if(VisuMZ['QTE_TriggerSys'][_0x19852b(0x1da)]()||Input['isTriggered'](_0x19852b(0x119))||Input[_0x19852b(0x22f)](_0x19852b(0x1e0))){const _0x4f135f=this[_0x19852b(0xa7)];if(Input[_0x19852b(0x22f)](_0x19852b(0x119))){if(this[_0x19852b(0x120)]===_0x19852b(0x119))return;this[_0x19852b(0x120)]=_0x19852b(0x119);}if(Input[_0x19852b(0x22f)](_0x19852b(0x1e0))){if(this['_qteLastInput']===_0x19852b(0x1e0))return;this[_0x19852b(0x120)]='pagedown';}VisuMZ[_0x19852b(0x1e4)][_0x19852b(0x1da)]()&&(this[_0x19852b(0x120)]=this[_0x19852b(0x120)]===_0x19852b(0x119)?_0x19852b(0x1e0):_0x19852b(0x119));const _0x1a0a76=this[_0x19852b(0x120)]===_0x19852b(0x119)?_0x4f135f['pageUpCommonEventID']||0x0:_0x4f135f[_0x19852b(0x1ce)]||0x0;if(_0x1a0a76>0x0){const _0x6c9b15=$gameTemp[_0x19852b(0x138)]();$onceParallel(_0x1a0a76,_0x6c9b15?_0x6c9b15[_0x19852b(0xf5)]:0x0);}const _0x25109b=_0x4f135f[_0x19852b(0x1f2)];_0x25109b&&_0x25109b['name']&&AudioManager['playSe'](_0x25109b);_0x4f135f[_0x19852b(0x1b6)]++;if(_0x4f135f[_0x19852b(0x1b6)]>=_0x4f135f['goal']){Input[_0x19852b(0x1cf)](),TouchInput[_0x19852b(0x1cf)]();const _0x14edf5=_0x4f135f[_0x19852b(0x1ef)]||0x0;_0x14edf5>0x0&&$gameSwitches[_0x19852b(0xe5)](_0x14edf5,!![]);const _0x43b0d9=_0x4f135f['varID']||0x0;_0x43b0d9>0x0&&$gameVariables[_0x19852b(0xe5)](_0x43b0d9,this[_0x19852b(0x131)]),this[_0x19852b(0xa2)]();}}},SceneManager[_0x53e3c7(0x159)]=function(){const _0x28585d=_0x53e3c7;if(VisuMZ[_0x28585d(0x1e4)][_0x28585d(0x1da)]()||Input[_0x28585d(0x22f)]('ok')||Input['isTriggered'](_0x28585d(0x182))){const _0x5bb375=this[_0x28585d(0xa7)];if(Input[_0x28585d(0x22f)]('ok')){if(this[_0x28585d(0x120)]==='ok')return;this[_0x28585d(0x120)]='ok';}if(Input[_0x28585d(0x22f)](_0x28585d(0x182))){if(this[_0x28585d(0x120)]===_0x28585d(0x182))return;this['_qteLastInput']='cancel';}VisuMZ[_0x28585d(0x1e4)][_0x28585d(0x1da)]()&&(this[_0x28585d(0x120)]=this[_0x28585d(0x120)]==='ok'?_0x28585d(0x182):'ok');const _0x33ded8=this[_0x28585d(0x120)]==='ok'?_0x5bb375[_0x28585d(0x172)]||0x0:_0x5bb375[_0x28585d(0x1e8)]||0x0;if(_0x33ded8>0x0){const _0x301ef0=$gameTemp['getLastPluginCommandInterpreter']();$onceParallel(_0x33ded8,_0x301ef0?_0x301ef0['_eventId']:0x0);}const _0x25fcea=_0x5bb375[_0x28585d(0x1f2)];_0x25fcea&&_0x25fcea[_0x28585d(0x1ec)]&&AudioManager['playSe'](_0x25fcea);_0x5bb375[_0x28585d(0x1b6)]++;if(_0x5bb375['progress']>=_0x5bb375[_0x28585d(0xd2)]){Input[_0x28585d(0x1cf)](),TouchInput[_0x28585d(0x1cf)]();const _0x159ed4=_0x5bb375[_0x28585d(0x1ef)]||0x0;_0x159ed4>0x0&&$gameSwitches[_0x28585d(0xe5)](_0x159ed4,!![]);const _0x95d9b9=_0x5bb375[_0x28585d(0x10b)]||0x0;_0x95d9b9>0x0&&$gameVariables['setValue'](_0x95d9b9,this[_0x28585d(0x131)]),this[_0x28585d(0xa2)]();}}},SceneManager[_0x53e3c7(0x91)]=function(){const _0x47264b=_0x53e3c7;if(VisuMZ[_0x47264b(0x1e4)][_0x47264b(0x1da)](!![])||Input['isTriggered']('ok')||TouchInput[_0x47264b(0x22f)]()){const _0x2d46d3=this[_0x47264b(0xa7)],_0x514a95=VisuMZ[_0x47264b(0x1e4)]['Settings']['QTE'],_0x1512ee=this[_0x47264b(0x131)];if(VisuMZ[_0x47264b(0x1e4)]['PlaytestInput'](!![])&&_0x1512ee>0x1)return;Input[_0x47264b(0x1cf)](),TouchInput[_0x47264b(0x1cf)]();const _0x4725b5=_0x514a95[_0x47264b(0x20b)]??0x10,_0x2edf83=_0x4725b5+0x1>=_0x1512ee,_0x113937=_0x2d46d3['switchID']||0x0;_0x113937>0x0&&$gameSwitches[_0x47264b(0xe5)](_0x113937,_0x2edf83);const _0x4eb583=_0x2d46d3[_0x47264b(0x10b)]||0x0;_0x4eb583>0x0&&$gameVariables[_0x47264b(0xe5)](_0x4eb583,_0x1512ee-0x1);if(_0x2edf83){const _0x563679=_0x2d46d3['hitSound'];_0x563679&&_0x563679['name']&&AudioManager[_0x47264b(0x142)](_0x563679);const _0x22e1c6=_0x2d46d3[_0x47264b(0xeb)]||0x0;if(_0x22e1c6>0x0){const _0xd950d8=$gameTemp[_0x47264b(0x138)]();$onceParallel(_0x22e1c6,_0xd950d8?_0xd950d8[_0x47264b(0xf5)]:0x0);}}else{const _0x1019ae=_0x2d46d3[_0x47264b(0x167)];_0x1019ae&&_0x1019ae['name']&&AudioManager[_0x47264b(0x142)](_0x1019ae);const _0x2d20b3=_0x2d46d3[_0x47264b(0x113)]||0x0;if(_0x2d20b3>0x0){const _0x173785=$gameTemp[_0x47264b(0x138)]();$onceParallel(_0x2d20b3,_0x173785?_0x173785[_0x47264b(0xf5)]:0x0);}}this[_0x47264b(0xa2)]();}},SceneManager[_0x53e3c7(0x1cc)]=function(){const _0x5caa88=_0x53e3c7;if(VisuMZ[_0x5caa88(0x1e4)]['PlaytestInput'](!![])||Input[_0x5caa88(0x1d3)]()){const _0x385563=this[_0x5caa88(0xa7)],_0x1b0a32=VisuMZ[_0x5caa88(0x1e4)]['Settings']['QTE'],_0x411592=this[_0x5caa88(0x1ac)]-this['_qteDuration'],_0x52abdf=_0x385563[_0x5caa88(0x78)][0x0];if(!_0x52abdf)return;const _0x42854b=_0x52abdf['Timing'],_0x314fbb=Math[_0x5caa88(0x24d)](_0x42854b-_0x411592),_0x394ee2=_0x1b0a32[_0x5caa88(0x16c)]??0x8;if(_0x314fbb>_0x394ee2*0x2)return;let _0x418bfc=Input[_0x5caa88(0x263)];if(_0x418bfc===_0x5caa88(0x219))_0x418bfc=_0x5caa88(0x182);if(VisuMZ['QTE_TriggerSys'][_0x5caa88(0x1da)](!![])){if(_0x314fbb!==0x1)return;}else Input[_0x5caa88(0x1cf)](),TouchInput[_0x5caa88(0x1cf)]();const _0x79dfd7=_0x314fbb<=_0x394ee2&&_0x418bfc===_0x52abdf[_0x5caa88(0x242)];if(_0x79dfd7){const _0x1f5ff4=_0x52abdf['Sound'];_0x1f5ff4&&_0x1f5ff4[_0x5caa88(0x1ec)]&&AudioManager[_0x5caa88(0x142)](_0x1f5ff4);const _0xea807c=_0x52abdf[_0x5caa88(0x165)]||0x0;_0xea807c>0x0&&$gameSwitches[_0x5caa88(0xe5)](_0xea807c,!![]);const _0x28b92e=_0x385563[_0x5caa88(0x10b)]||0x0;if(_0x28b92e>0x0){const _0x24ad60=$gameVariables[_0x5caa88(0x24f)](_0x28b92e);$gameVariables[_0x5caa88(0xe5)](_0x28b92e,_0x24ad60+0x1);}const _0xbbb41c=_0x52abdf[_0x5caa88(0x126)]||0x0;if(_0xbbb41c>0x0){const _0x3562b6=$gameTemp[_0x5caa88(0x138)]();$onceParallel(_0xbbb41c,_0x3562b6?_0x3562b6[_0x5caa88(0xf5)]:0x0);}}else{const _0x28b97d=_0x385563[_0x5caa88(0x167)];_0x28b97d&&_0x28b97d[_0x5caa88(0x1ec)]&&AudioManager[_0x5caa88(0x142)](_0x28b97d);const _0x5a19a9=_0x385563['missCommonEventID']||0x0;if(_0x5a19a9>0x0){const _0x772abb=$gameTemp[_0x5caa88(0x138)]();$onceParallel(_0x5a19a9,_0x772abb?_0x772abb[_0x5caa88(0xf5)]:0x0);}}_0x385563['remainingSequence']['remove'](_0x52abdf),_0x385563[_0x5caa88(0x78)][_0x5caa88(0x153)]<=0x0&&(Input[_0x5caa88(0x1cf)](),TouchInput[_0x5caa88(0x1cf)](),this['finishEarlyQTE']());}},SceneManager[_0x53e3c7(0x1b9)]=function(){const _0x4c52d1=_0x53e3c7,_0x19459d=this[_0x4c52d1(0xa7)];if(VisuMZ[_0x4c52d1(0x1e4)]['PlaytestInput']()||Input['isTriggered']('ok')||TouchInput[_0x4c52d1(0x22f)]()){const _0x14a9a2=this[_0x4c52d1(0x11c)][_0x4c52d1(0x207)];_0x14a9a2[_0x4c52d1(0x19c)]();const _0x240ecc=_0x14a9a2[_0x4c52d1(0x22e)](),_0x231f4b=_0x19459d['zones'],_0x3d3053=VisuMZ['QTE_TriggerSys'][_0x4c52d1(0x1da)]()?_0x231f4b[_0x4c52d1(0xb7)]():_0x231f4b[_0x4c52d1(0xc2)](_0x51742f=>_0x240ecc>=_0x51742f['Start']&&_0x240ecc<=_0x51742f[_0x4c52d1(0x259)]);Input['clear'](),TouchInput['clear']();if(_0x3d3053[_0x4c52d1(0x153)]>0x0){const _0x3c837a=_0x3d3053[_0x4c52d1(0x1a6)]((_0x203527,_0x225715)=>_0x225715[_0x4c52d1(0x237)]>_0x203527['Points']?_0x225715:_0x203527),_0x18c886=_0x19459d['hitSound'];_0x18c886&&_0x18c886[_0x4c52d1(0x1ec)]&&AudioManager['playSe'](_0x18c886);const _0x35189f=_0x19459d['switchID']||0x0;_0x35189f>0x0&&$gameSwitches['setValue'](_0x35189f,!![]);const _0x18be3d=_0x19459d['varID']||0x0;_0x18be3d>0x0&&$gameVariables[_0x4c52d1(0xe5)](_0x18be3d,_0x3c837a['Points']);const _0x41a837=_0x3c837a[_0x4c52d1(0x126)]||0x0;if(_0x41a837>0x0){const _0x26004b=$gameTemp['getLastPluginCommandInterpreter']();$onceParallel(_0x41a837,_0x26004b?_0x26004b['_eventId']:0x0);}}else{const _0x4c9b64=_0x19459d[_0x4c52d1(0x167)];_0x4c9b64&&_0x4c9b64[_0x4c52d1(0x1ec)]&&AudioManager['playSe'](_0x4c9b64);const _0x687d87=_0x19459d[_0x4c52d1(0x1ef)]||0x0;_0x687d87>0x0&&$gameSwitches[_0x4c52d1(0xe5)](_0x687d87,![]);const _0x2cc063=_0x19459d['varID']||0x0;_0x2cc063>0x0&&$gameVariables[_0x4c52d1(0xe5)](_0x2cc063,0x0);const _0x2e68d5=_0x19459d['missCommonEventID']||0x0;if(_0x2e68d5>0x0){const _0x391aeb=$gameTemp[_0x4c52d1(0x138)]();$onceParallel(_0x2e68d5,_0x391aeb?_0x391aeb[_0x4c52d1(0xf5)]:0x0);}}this[_0x4c52d1(0xa2)]();}},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x83)]=Game_System[_0x53e3c7(0xdf)]['initialize'],Game_System[_0x53e3c7(0xdf)][_0x53e3c7(0x1db)]=function(){const _0x1bcc31=_0x53e3c7;VisuMZ[_0x1bcc31(0x1e4)][_0x1bcc31(0x83)][_0x1bcc31(0x88)](this),this[_0x1bcc31(0x177)](),this[_0x1bcc31(0x23e)]();},Game_System[_0x53e3c7(0xdf)][_0x53e3c7(0x177)]=function(){const _0x5e3db7=_0x53e3c7;this[_0x5e3db7(0x9f)](),this[_0x5e3db7(0x13d)]();},Game_System['prototype'][_0x53e3c7(0x9f)]=function(){const _0x4c94b0=_0x53e3c7;this[_0x4c94b0(0x163)]=[];},Game_System[_0x53e3c7(0xdf)][_0x53e3c7(0x21c)]=function(_0x93f4cc){const _0x124513=_0x53e3c7;this['_onceParallelQueue']===undefined&&this[_0x124513(0x9f)]();if(this[_0x124513(0x163)][_0x124513(0x260)](_0x93f4cc))return;this[_0x124513(0x163)]['push'](_0x93f4cc);},Game_System['prototype']['isOnceParallelReserved']=function(){const _0x396ee5=_0x53e3c7;return this['_onceParallelQueue']===undefined&&this[_0x396ee5(0x9f)](),this[_0x396ee5(0x163)][_0x396ee5(0x153)]>0x0;},Game_System[_0x53e3c7(0xdf)][_0x53e3c7(0x17a)]=function(){const _0x42895c=_0x53e3c7;this[_0x42895c(0x163)]===undefined&&this[_0x42895c(0x9f)]();while(this[_0x42895c(0x163)]['length']){const _0x17d55f=this[_0x42895c(0x163)][_0x42895c(0x80)]();$onceParallel(_0x17d55f);}},Game_System['prototype'][_0x53e3c7(0x13d)]=function(){const _0x53762b=_0x53e3c7;this[_0x53762b(0x94)]={'switches':{},'variables':{},'items':{},'weapons':{},'armors':{}},this[_0x53762b(0x10e)]={'switches':{},'variables':{}};},Game_System[_0x53e3c7(0xdf)][_0x53e3c7(0x14f)]=function(){const _0x14eef3=_0x53e3c7;if(this[_0x14eef3(0x94)]===undefined)this[_0x14eef3(0x13d)]();return this['_triggerPromises'];},Game_System[_0x53e3c7(0xdf)][_0x53e3c7(0xe0)]=function(){const _0x334bd3=_0x53e3c7;if(this[_0x334bd3(0x10e)]===undefined)this['init_QTE_TriggerSysPromise']();return this[_0x334bd3(0x10e)];},Game_System['prototype'][_0x53e3c7(0x19d)]=function(_0x17f4dd,_0x50f0c6,_0x498516){const _0x221192=_0x53e3c7,_0x4cf1b6=this[_0x221192(0x14f)]()[_0x17f4dd];if(!_0x4cf1b6)return;_0x4cf1b6[_0x50f0c6]=_0x4cf1b6[_0x50f0c6]||[];for(const _0x59c5f9 of _0x498516){if(_0x4cf1b6[_0x50f0c6][_0x221192(0x260)](_0x59c5f9))continue;_0x4cf1b6[_0x50f0c6][_0x221192(0x107)](_0x59c5f9);}_0x17f4dd===_0x221192(0x1ff)&&DataManager[_0x221192(0x1b5)](_0x50f0c6)&&(this[_0x221192(0x10e)][_0x221192(0x1ff)][_0x50f0c6]=$gameSwitches['value'](_0x50f0c6)),_0x17f4dd===_0x221192(0xcd)&&DataManager[_0x221192(0x196)](_0x50f0c6)&&(this[_0x221192(0x10e)][_0x221192(0xcd)][_0x50f0c6]=$gameVariables[_0x221192(0x24f)](_0x50f0c6));},Game_System[_0x53e3c7(0xdf)]['checkWatchedTriggers']=function(){const _0x25ed96=_0x53e3c7,_0x1fade7=this['getWatchedTriggerPromises']();{const _0x552dfa=[];for(const _0x55883f in _0x1fade7[_0x25ed96(0x1ff)]){const _0x30c674=Number(_0x55883f);$gameSwitches[_0x25ed96(0x24f)](_0x30c674)!==_0x1fade7['switches'][_0x55883f]&&(_0x1fade7['switches'][_0x55883f]=$gameSwitches[_0x25ed96(0x24f)](_0x30c674),this['fulfillOnTriggerPromises'](_0x25ed96(0x1ff),_0x30c674),_0x552dfa[_0x25ed96(0x107)](_0x30c674));}while(_0x552dfa['length']>0x0){const _0x1bd2d3=_0x552dfa[_0x25ed96(0x80)]();$gameSystem['clearWatchedTrigger'](_0x25ed96(0x1ff),_0x1bd2d3);}}{const _0x45b850=[];for(const _0x56945e in _0x1fade7['variables']){const _0x4a83f5=Number(_0x56945e);0x4d,$gameVariables[_0x25ed96(0x24f)](_0x4a83f5)!==_0x1fade7['variables'][_0x56945e]&&(_0x1fade7['variables'][_0x56945e]=$gameVariables[_0x25ed96(0x24f)](_0x4a83f5),this['fulfillOnTriggerPromises'](_0x25ed96(0xcd),_0x4a83f5),_0x45b850[_0x25ed96(0x107)](_0x4a83f5));}while(_0x45b850['length']>0x0){const _0x36579e=_0x45b850[_0x25ed96(0x80)]();$gameSystem[_0x25ed96(0x217)]('variables',_0x36579e);}}},Game_System['prototype'][_0x53e3c7(0xa9)]=function(_0x47f713,_0x116206){const _0x3e6764=this['getQTE_TriggerSysPromises']()[_0x47f713];if(!_0x3e6764)return![];return _0x3e6764[_0x116206]=_0x3e6764[_0x116206]||[],_0x3e6764[_0x116206]['length']>0x0;},Game_System[_0x53e3c7(0xdf)]['hasOnTriggerPromiseItem']=function(_0x55b073){const _0x58fa20=_0x53e3c7;if(DataManager[_0x58fa20(0x13a)](_0x55b073))return this['hasOnTriggerPromise']('items',_0x55b073['id']);else{if(DataManager['isWeapon'](_0x55b073))return this['hasOnTriggerPromise'](_0x58fa20(0x1f6),_0x55b073['id']);else{if(DataManager[_0x58fa20(0xa1)](_0x55b073))return this[_0x58fa20(0xa9)](_0x58fa20(0x1d2),_0x55b073['id']);}}return![];},Game_System[_0x53e3c7(0xdf)][_0x53e3c7(0x21d)]=function(_0x48d497,_0x5d1e14){const _0x2bb7d3=_0x53e3c7,_0x1330b1=this[_0x2bb7d3(0x14f)]()[_0x48d497];if(!_0x1330b1)return![];const _0x48dd34=_0x1330b1[_0x5d1e14]||[];for(const _0xbb55fc of _0x48dd34){VisuMZ['QTE_TriggerSys'][_0x2bb7d3(0x17f)](_0xbb55fc);}delete _0x1330b1[_0x5d1e14];},Game_System[_0x53e3c7(0xdf)]['fulfillOnTriggerPromisesItem']=function(_0xc1586a){const _0x5a4bc4=_0x53e3c7;if(DataManager['isItem'](_0xc1586a))this[_0x5a4bc4(0x21d)](_0x5a4bc4(0x1d0),_0xc1586a['id']);else{if(DataManager[_0x5a4bc4(0x209)](_0xc1586a))this['fulfillOnTriggerPromises'](_0x5a4bc4(0x1f6),_0xc1586a['id']);else DataManager[_0x5a4bc4(0xa1)](_0xc1586a)&&this['fulfillOnTriggerPromises']('armors',_0xc1586a['id']);}},Game_System['prototype'][_0x53e3c7(0x217)]=function(_0x361202,_0xbcf13e){const _0x3868ee=this['getWatchedTriggerPromises']()[_0x361202];if(!_0x3868ee)return;delete _0x3868ee[_0xbcf13e];},Game_System[_0x53e3c7(0xdf)][_0x53e3c7(0x23e)]=function(){const _0x40cace=_0x53e3c7;this[_0x40cace(0x186)]=VisuMZ[_0x40cace(0x1e4)][_0x40cace(0x249)][_0x40cace(0xc3)]['DefaultGameOverEvent']||0x0;},Game_System['prototype'][_0x53e3c7(0x13b)]=function(){const _0xcb7ff2=_0x53e3c7;if(this['_gameOverCommonEventID']===undefined)this[_0xcb7ff2(0x23e)]();return this[_0xcb7ff2(0x186)];},Game_System[_0x53e3c7(0xdf)][_0x53e3c7(0xac)]=function(_0x2a9948){const _0x357417=_0x53e3c7;if(this[_0x357417(0x186)]===undefined)this[_0x357417(0x23e)]();this['_gameOverCommonEventID']=_0x2a9948;},VisuMZ['QTE_TriggerSys']['Game_Switches_setValue']=Game_Switches[_0x53e3c7(0xdf)][_0x53e3c7(0xe5)],Game_Switches['prototype'][_0x53e3c7(0xe5)]=function(_0x36dafe,_0x46ea06){const _0x2c0ce8=_0x53e3c7,_0x1d66bb=this[_0x2c0ce8(0x24f)](_0x36dafe);VisuMZ[_0x2c0ce8(0x1e4)][_0x2c0ce8(0x1b3)][_0x2c0ce8(0x88)](this,_0x36dafe,_0x46ea06),_0x1d66bb!==this[_0x2c0ce8(0x24f)](_0x36dafe)&&(VisuMZ[_0x2c0ce8(0x1e4)]['processSwitchTrigger'](_0x36dafe),$gameSystem['hasOnTriggerPromise']('switches',_0x36dafe)&&$gameSystem[_0x2c0ce8(0x21d)](_0x2c0ce8(0x1ff),_0x36dafe));},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0xab)]=Game_Variables['prototype'][_0x53e3c7(0xe5)],Game_Variables[_0x53e3c7(0xdf)][_0x53e3c7(0xe5)]=function(_0x256b28,_0x389a13){const _0x5d184b=_0x53e3c7,_0x47f6c1=this['value'](_0x256b28);VisuMZ[_0x5d184b(0x1e4)]['Game_Variables_setValue'][_0x5d184b(0x88)](this,_0x256b28,_0x389a13),_0x47f6c1!==this[_0x5d184b(0x24f)](_0x256b28)&&(VisuMZ[_0x5d184b(0x1e4)][_0x5d184b(0x140)](_0x256b28),$gameSystem['hasOnTriggerPromise'](_0x5d184b(0xcd),_0x256b28)&&$gameSystem['fulfillOnTriggerPromises']('variables',_0x256b28));},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x16e)]=Game_Party[_0x53e3c7(0xdf)][_0x53e3c7(0x23f)],Game_Party[_0x53e3c7(0xdf)][_0x53e3c7(0x23f)]=function(_0x123ee0,_0x5351bf,_0x41d70c){const _0x6db0d6=_0x53e3c7,_0x48d25e=_0x123ee0?this[_0x6db0d6(0x139)](_0x123ee0):0x0;VisuMZ['QTE_TriggerSys'][_0x6db0d6(0x16e)][_0x6db0d6(0x88)](this,_0x123ee0,_0x5351bf,_0x41d70c),_0x123ee0&&_0x48d25e!==this[_0x6db0d6(0x139)](_0x123ee0)&&(DataManager[_0x6db0d6(0x1ab)](_0x123ee0)&&VisuMZ[_0x6db0d6(0x1e4)][_0x6db0d6(0xae)](_0x123ee0),$gameSystem[_0x6db0d6(0xdb)](_0x123ee0)&&$gameSystem['fulfillOnTriggerPromisesItem'](_0x123ee0));},VisuMZ['QTE_TriggerSys'][_0x53e3c7(0x188)]=Game_Map[_0x53e3c7(0xdf)][_0x53e3c7(0x24c)],Game_Map['prototype'][_0x53e3c7(0x24c)]=function(_0x2c3281){const _0x2d9033=_0x53e3c7;VisuMZ['QTE_TriggerSys'][_0x2d9033(0x188)][_0x2d9033(0x88)](this,_0x2c3281),this[_0x2d9033(0x245)]();},Game_Map[_0x53e3c7(0xdf)][_0x53e3c7(0x245)]=function(){const _0x56942f=_0x53e3c7;this[_0x56942f(0x161)]=0x0;const _0x332ce8=VisuMZ['QTE_TriggerSys'][_0x56942f(0x185)],_0x53466f=$dataMap?$dataMap[_0x56942f(0x152)]||'':'';_0x53466f[_0x56942f(0x238)](_0x332ce8['gameOverCommonEvent'])&&(this[_0x56942f(0x161)]=Number(RegExp['$1']));},Game_Map[_0x53e3c7(0xdf)][_0x53e3c7(0x13b)]=function(){const _0xdb6d97=_0x53e3c7;if(this['_mapGameOverCommonEventID']===undefined)this[_0xdb6d97(0x245)]();return this['_mapGameOverCommonEventID'];},Game_Player['prototype'][_0x53e3c7(0x13b)]=function(){const _0x239489=_0x53e3c7;if(BattleManager[_0x239489(0x97)]())return 0x0;if($gameTroop&&$gameTroop[_0x239489(0x13b)]())return $gameTroop[_0x239489(0x13b)]();if($gameMap&&$gameMap[_0x239489(0x13b)]())return $gameMap[_0x239489(0x13b)]();if($gameSystem&&$gameSystem[_0x239489(0x13b)]())return $gameSystem[_0x239489(0x13b)]();return 0x0;},Game_Party[_0x53e3c7(0xdf)]['gameOverCommonEventHeal']=function(){const _0x2bb8a6=_0x53e3c7;if(!VisuMZ[_0x2bb8a6(0x1e4)][_0x2bb8a6(0x249)][_0x2bb8a6(0xc3)][_0x2bb8a6(0x162)])return;for(const _0x5a14b0 of this['deadMembers']()){_0x5a14b0['setHp'](0x1);}},Game_Troop[_0x53e3c7(0xdf)][_0x53e3c7(0x13b)]=function(){const _0x506374=_0x53e3c7,_0x3ac4b3=VisuMZ[_0x506374(0x1e4)][_0x506374(0x185)],_0x23943b=this[_0x506374(0x230)]()?this['troop']()['name']||'':'';if(_0x23943b[_0x506374(0x238)](_0x3ac4b3[_0x506374(0x1bd)]))return Number(RegExp['$1']);return 0x0;},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x7d)]=Game_Interpreter[_0x53e3c7(0xdf)][_0x53e3c7(0x87)],Game_Interpreter[_0x53e3c7(0xdf)]['setupReservedCommonEvent']=function(){const _0x1eaa40=_0x53e3c7;return $gameSystem['isOnceParallelReserved']()&&$gameSystem['processAllOnceParallels'](),VisuMZ[_0x1eaa40(0x1e4)][_0x1eaa40(0x7d)][_0x1eaa40(0x88)](this);},VisuMZ[_0x53e3c7(0x1e4)]['Game_Interpreter_updateWaitMode']=Game_Interpreter[_0x53e3c7(0xdf)][_0x53e3c7(0x141)],Game_Interpreter[_0x53e3c7(0xdf)][_0x53e3c7(0x141)]=function(){const _0x37dde2=_0x53e3c7;if(this[_0x37dde2(0x1e7)][_0x37dde2(0x238)](/QTE/i)){if(SceneManager[_0x37dde2(0x20f)]())return!![];else this['_waitMode']='';}return VisuMZ[_0x37dde2(0x1e4)]['Game_Interpreter_updateWaitMode'][_0x37dde2(0x88)](this);},Scene_Base['prototype'][_0x53e3c7(0x247)]=function(_0xe38643){const _0x59b9dd=_0x53e3c7,_0x437ceb=VisuMZ[_0x59b9dd(0x1e4)]['Settings'][_0x59b9dd(0x134)],_0x4c45e0={};_0x4c45e0['align']=_0x437ceb[_0x59b9dd(0x1fb)]||_0x59b9dd(0x1b2),_0x4c45e0[_0x59b9dd(0x17e)]=_0x437ceb[_0x59b9dd(0x127)],_0x4c45e0[_0x59b9dd(0x1b1)]=_0x437ceb['MsgWindowBgType']||0x0;switch(_0xe38643){case _0x59b9dd(0xfa):_0x4c45e0['text']=_0x437ceb[_0x59b9dd(0x195)]||'';break;case _0x59b9dd(0x189):_0x4c45e0[_0x59b9dd(0x1e9)]=_0x437ceb[_0x59b9dd(0xf1)]||'';break;case _0x59b9dd(0xb8):_0x4c45e0[_0x59b9dd(0x1e9)]=_0x437ceb[_0x59b9dd(0x1d8)]||'';break;case _0x59b9dd(0x130):_0x4c45e0[_0x59b9dd(0x1e9)]=_0x437ceb['FillGaugeTextMsg']||'';break;case _0x59b9dd(0xbd):_0x4c45e0['text']=_0x437ceb[_0x59b9dd(0x125)]||'';break;case _0x59b9dd(0x1b0):_0x4c45e0['text']=_0x437ceb['MarcherTextMsg']||'';break;case _0x59b9dd(0xb1):_0x4c45e0[_0x59b9dd(0x1e9)]=_0x437ceb[_0x59b9dd(0x25b)]||'';break;case'timedHit':_0x4c45e0[_0x59b9dd(0x1e9)]=_0x437ceb['TimedHitTextMsg']||'';break;case _0x59b9dd(0x1ae):_0x4c45e0[_0x59b9dd(0x1e9)]=_0x437ceb[_0x59b9dd(0x16d)]||'';break;case _0x59b9dd(0xd0):_0x4c45e0[_0x59b9dd(0x1e9)]=_0x437ceb[_0x59b9dd(0xf7)]||'';break;default:return;}this[_0x59b9dd(0x212)](_0xe38643,_0x4c45e0),this[_0x59b9dd(0x1a9)](_0xe38643),this['createGaugeProgressWindowForQTE'](_0xe38643),this[_0x59b9dd(0x13f)]();},Scene_Base[_0x53e3c7(0xdf)][_0x53e3c7(0x212)]=function(_0x1e0024,_0x4e1ee3){const _0x4fe80e=_0x53e3c7;this[_0x4fe80e(0xa7)]=_0x4e1ee3;const _0x39a602=_0x4e1ee3[_0x4fe80e(0x17e)][_0x4fe80e(0x88)](this);let _0x4d1f73=null;switch(_0x1e0024){case'buttonMash':case _0x4fe80e(0xb8):case'fillGauge':case _0x4fe80e(0xbd):case _0x4fe80e(0x1b0):case'swapper':case _0x4fe80e(0x240):if(_0x4e1ee3[_0x4fe80e(0x1e9)]==='')return;_0x4d1f73=new Window_Help(_0x39a602);break;case _0x4fe80e(0x189):_0x4d1f73=new Window_QTE_ButtonSequence(_0x39a602);break;case _0x4fe80e(0x1ae):_0x4d1f73=new Window_QTE_TimedSequence(_0x39a602);break;case _0x4fe80e(0xd0):_0x4d1f73=new Window_QTE_TimingBar(_0x39a602);break;default:return;}_0x4d1f73[_0x4fe80e(0x115)](_0x4e1ee3[_0x4fe80e(0x1b1)]),this['addChild'](_0x4d1f73),this['_qteWindow']=_0x4d1f73;},Scene_Base['prototype'][_0x53e3c7(0x13f)]=function(){const _0x444830=_0x53e3c7,_0x60cc3c=this['_qteSettings'];let _0x2c212e=_0x60cc3c[_0x444830(0x1e9)];_0x2c212e=_0x2c212e[_0x444830(0xec)](/<UP BUTTON>/gi,TextManager[_0x444830(0x1c5)]('up')),_0x2c212e=_0x2c212e[_0x444830(0xec)](/<DOWN BUTTON>/gi,TextManager['getInputButtonString'](_0x444830(0xe2))),_0x2c212e=_0x2c212e[_0x444830(0xec)](/<LEFT BUTTON>/gi,TextManager[_0x444830(0x1c5)](_0x444830(0xde))),_0x2c212e=_0x2c212e[_0x444830(0xec)](/<RIGHT BUTTON>/gi,TextManager[_0x444830(0x1c5)](_0x444830(0x215))),_0x2c212e=_0x2c212e['replace'](/<OK BUTTON>/gi,TextManager['getInputButtonString']('ok')),_0x2c212e=_0x2c212e[_0x444830(0xec)](/<CANCEL BUTTON>/gi,TextManager[_0x444830(0x1c5)](_0x444830(0x182))),_0x2c212e=_0x2c212e['replace'](/<SHIFT BUTTON>/gi,TextManager[_0x444830(0x1c5)](_0x444830(0x80))),_0x2c212e=_0x2c212e[_0x444830(0xec)](/<MENU BUTTON>/gi,TextManager[_0x444830(0x1c5)](_0x444830(0xa8))),_0x2c212e=_0x2c212e['replace'](/<PAGE UP BUTTON>/gi,TextManager[_0x444830(0x1c5)](_0x444830(0x119))),_0x2c212e=_0x2c212e[_0x444830(0xec)](/<PAGE DOWN BUTTON>/gi,TextManager[_0x444830(0x1c5)](_0x444830(0x1e0))),this[_0x444830(0x223)]=Input[_0x444830(0x1a4)]();Imported['VisuMZ_1_MessageCore']&&(_0x2c212e=_0x444830(0x154)[_0x444830(0x200)](_0x60cc3c[_0x444830(0x252)],_0x2c212e));const _0x456f17=this['_qteWindow'];if(_0x456f17)_0x456f17[_0x444830(0x8f)](_0x2c212e);},Scene_Base[_0x53e3c7(0xdf)][_0x53e3c7(0x1a9)]=function(_0x4451d9){const _0x3c42ba=_0x53e3c7,_0x1cbb76=VisuMZ[_0x3c42ba(0x1e4)][_0x3c42ba(0x249)][_0x3c42ba(0xc7)];if(!_0x1cbb76[_0x3c42ba(0x24a)])return;if([_0x3c42ba(0xbd),'timedHit',_0x3c42ba(0x1ae)][_0x3c42ba(0x260)](_0x4451d9))return;if(SceneManager[_0x3c42ba(0x1ac)]>=0xf4240)return;const _0x42fddf=_0x1cbb76[_0x3c42ba(0x184)]['call'](this),_0x351348=new Window_QTE_Timer(_0x42fddf);this[_0x3c42ba(0x15c)](_0x351348),this['_qteTimerWindow']=_0x351348;},Scene_Base['prototype'][_0x53e3c7(0x227)]=function(_0x4419da){const _0x20b0bd=_0x53e3c7,_0x432a99=VisuMZ['QTE_TriggerSys'][_0x20b0bd(0x249)][_0x20b0bd(0xc7)];if(!_0x432a99['ShowQteProgress']&&!['holdRelease'][_0x20b0bd(0x260)](_0x4419da))return;if(!SceneManager['_qteSettings'][_0x20b0bd(0xd2)])return;const _0x10894d=_0x432a99[_0x20b0bd(0x164)][_0x20b0bd(0x88)](this),_0x27ecb2=new Window_QTE_Progress(_0x10894d);this[_0x20b0bd(0x15c)](_0x27ecb2),this['_qteProgressWindow']=_0x27ecb2;},Scene_Base[_0x53e3c7(0xdf)]['createTimedHitSpriteQTE']=function(){const _0x2d4dd0=_0x53e3c7,_0x50a819=new Sprite_QTE_TimedHit();this[_0x2d4dd0(0x15c)](_0x50a819),this['_qteTimedHitSprite']=_0x50a819;},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0xd6)]=Scene_Base[_0x53e3c7(0xdf)]['update'],Scene_Base['prototype']['update']=function(){const _0xd6b238=_0x53e3c7;this['updateQteWindow'](),VisuMZ['QTE_TriggerSys']['Scene_Base_update']['call'](this),this[_0xd6b238(0x225)](),this[_0xd6b238(0x8d)]();},Scene_Base[_0x53e3c7(0xdf)][_0x53e3c7(0x15d)]=function(){const _0x260959=_0x53e3c7;if(!this[_0x260959(0x207)])return;this[_0x260959(0x223)]!==Input[_0x260959(0x1a4)]()&&this[_0x260959(0x13f)](),!SceneManager[_0x260959(0x20f)]()&&this[_0x260959(0x190)]();},Scene_Base[_0x53e3c7(0xdf)][_0x53e3c7(0x190)]=function(){const _0x27f0d0=_0x53e3c7;if(!this[_0x27f0d0(0x207)])return;this[_0x27f0d0(0x18f)](this[_0x27f0d0(0x207)]),this[_0x27f0d0(0x207)]=undefined;},Scene_Base[_0x53e3c7(0xdf)][_0x53e3c7(0x225)]=function(){const _0x10a469=_0x53e3c7;if(!SceneManager[_0x10a469(0x20f)]())return;SceneManager['updateQTEDuration']();},Scene_Base['prototype'][_0x53e3c7(0x8d)]=function(){const _0x318832=_0x53e3c7;if(SceneManager[_0x318832(0x20f)]())return;this[_0x318832(0x183)]&&(this[_0x318832(0x18f)](this[_0x318832(0x183)]),this['_qteTimerWindow']=undefined),this[_0x318832(0x1f5)]&&(this['removeChild'](this['_qteProgressWindow']),this[_0x318832(0x1f5)]=undefined),this[_0x318832(0x1f7)]&&(this[_0x318832(0x1f7)]['startFinishing'](),this[_0x318832(0x1f7)]=undefined);},VisuMZ['QTE_TriggerSys'][_0x53e3c7(0x25d)]=Scene_Map[_0x53e3c7(0xdf)][_0x53e3c7(0x22c)],Scene_Map[_0x53e3c7(0xdf)][_0x53e3c7(0x22c)]=function(){const _0x4321b1=_0x53e3c7;VisuMZ[_0x4321b1(0x1e4)][_0x4321b1(0x25d)]['call'](this);if($gameTroop)$gameTroop[_0x4321b1(0x1cf)]();},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0x20d)]=Scene_Map['prototype'][_0x53e3c7(0x100)],Scene_Map['prototype'][_0x53e3c7(0x100)]=function(){const _0x307da9=_0x53e3c7;return VisuMZ[_0x307da9(0x1e4)][_0x307da9(0x20d)][_0x307da9(0x88)](this)||SceneManager[_0x307da9(0x1fe)](Scene_Gameover);},VisuMZ['QTE_TriggerSys'][_0x53e3c7(0x7c)]=Scene_Gameover[_0x53e3c7(0xdf)][_0x53e3c7(0x137)],Scene_Gameover[_0x53e3c7(0xdf)]['create']=function(){const _0xe2bfd4=_0x53e3c7;if(this[_0xe2bfd4(0x111)]())return;VisuMZ[_0xe2bfd4(0x1e4)][_0xe2bfd4(0x7c)][_0xe2bfd4(0x88)](this);},VisuMZ[_0x53e3c7(0x1e4)][_0x53e3c7(0xa3)]=Scene_Gameover[_0x53e3c7(0xdf)]['start'],Scene_Gameover[_0x53e3c7(0xdf)]['start']=function(){const _0x101423=_0x53e3c7;this['hasGameOverEvent']()?this[_0x101423(0x20e)]():VisuMZ[_0x101423(0x1e4)][_0x101423(0xa3)]['call'](this);},Scene_Gameover[_0x53e3c7(0xdf)]['hasGameOverEvent']=function(){return $gamePlayer&&$gamePlayer['getGameOverCommonEventID']()>0x0;},Scene_Gameover[_0x53e3c7(0xdf)][_0x53e3c7(0x20e)]=function(){const _0x3912e0=_0x53e3c7;Scene_Base['prototype'][_0x3912e0(0x22c)][_0x3912e0(0x88)](this);$gameParty&&$gameParty[_0x3912e0(0x1f0)]();$gameMap&&$gameMap['_interpreter'][_0x3912e0(0x1cf)]();SceneManager['goto'](Scene_Map);const _0xf4abe=$gamePlayer['getGameOverCommonEventID']();$gameTemp[_0x3912e0(0xd3)](_0xf4abe),$gameTroop&&$gameTroop[_0x3912e0(0x1cf)](),VisuMZ['QTE_TriggerSys'][_0x3912e0(0x249)][_0x3912e0(0xc3)][_0x3912e0(0x1a0)]&&$gameSystem[_0x3912e0(0xac)](0x0);};function Sprite_QTE_TimedHit(){this['initialize'](...arguments);}Sprite_QTE_TimedHit[_0x53e3c7(0xdf)]=Object[_0x53e3c7(0x137)](Sprite[_0x53e3c7(0xdf)]),Sprite_QTE_TimedHit[_0x53e3c7(0xdf)][_0x53e3c7(0x106)]=Sprite_QTE_TimedHit,Sprite_QTE_TimedHit[_0x53e3c7(0xdf)][_0x53e3c7(0x1db)]=function(){const _0x43bfed=_0x53e3c7;Sprite['prototype'][_0x43bfed(0x1db)][_0x43bfed(0x88)](this),this['initMembers'](),this['createBitmap'](),this[_0x43bfed(0xf9)]();},Sprite_QTE_TimedHit['prototype'][_0x53e3c7(0xc5)]=function(){const _0x34d5f1=_0x53e3c7;this[_0x34d5f1(0x1c1)]['x']=0.5,this[_0x34d5f1(0x1c1)]['y']=0.5;const _0x548fdf=SceneManager[_0x34d5f1(0xa7)];this['x']=_0x548fdf['pointX'],this['y']=_0x548fdf[_0x34d5f1(0x15b)],this[_0x34d5f1(0x1ad)]=_0x548fdf[_0x34d5f1(0x23a)]||0x1,this[_0x34d5f1(0xcc)]=_0x548fdf[_0x34d5f1(0x19f)]||0x1;},Sprite_QTE_TimedHit[_0x53e3c7(0xdf)]['createBitmap']=function(){const _0x3fe1ee=_0x53e3c7,_0x2d1190=SceneManager['_qteSettings'];this[_0x3fe1ee(0x248)]=ImageManager[_0x3fe1ee(0xfc)](_0x2d1190[_0x3fe1ee(0x1d1)]);},Sprite_QTE_TimedHit[_0x53e3c7(0xdf)]['createOverlaySprite']=function(){const _0x314d49=_0x53e3c7,_0x143ca1=VisuMZ[_0x314d49(0x1e4)][_0x314d49(0x249)]['QTE'],_0x20a1e6=new Sprite(),_0x461a94=SceneManager[_0x314d49(0xa7)][_0x314d49(0x1d1)];_0x20a1e6['bitmap']=ImageManager[_0x314d49(0xfc)](_0x461a94),_0x20a1e6[_0x314d49(0xa6)]=_0x143ca1[_0x314d49(0x158)]??0x80,_0x20a1e6[_0x314d49(0x1c1)]['x']=0.5,_0x20a1e6['anchor']['y']=0.5,_0x20a1e6[_0x314d49(0x12d)]['x']=_0x143ca1['TimedHitMaxSize']??0x4,_0x20a1e6[_0x314d49(0x12d)]['y']=_0x143ca1[_0x314d49(0x226)]??0x4,this[_0x314d49(0x15c)](_0x20a1e6),this['_overlaySprite']=_0x20a1e6;},Sprite_QTE_TimedHit[_0x53e3c7(0xdf)][_0x53e3c7(0x1b4)]=function(){const _0x5ea8ed=_0x53e3c7;Sprite[_0x5ea8ed(0xdf)]['update']['call'](this);if(this[_0x5ea8ed(0xd4)]())this[_0x5ea8ed(0x210)](),this[_0x5ea8ed(0x10a)]();else(SceneManager[_0x5ea8ed(0x23c)]()||this[_0x5ea8ed(0x11a)])&&this[_0x5ea8ed(0x13c)]();},Sprite_QTE_TimedHit[_0x53e3c7(0xdf)]['canUpdate']=function(){const _0x4382cb=_0x53e3c7;if(!this[_0x4382cb(0x175)])return![];if(SceneManager['_qteInputDelay']>0x0)return![];if(this[_0x4382cb(0xfe)])return![];return!![];},Sprite_QTE_TimedHit['prototype'][_0x53e3c7(0x210)]=function(){const _0x57eaa2=_0x53e3c7;if(this['_duration']<=0x0)return;const _0x30e030=this[_0x57eaa2(0x10d)],_0x183a8c=this['_duration'];_0x30e030[_0x57eaa2(0x12d)]['x']=(_0x30e030[_0x57eaa2(0x12d)]['x']*(_0x183a8c-0x1)+0x1)/_0x183a8c,_0x30e030[_0x57eaa2(0x12d)]['y']=(_0x30e030[_0x57eaa2(0x12d)]['y']*(_0x183a8c-0x1)+0x1)/_0x183a8c,this[_0x57eaa2(0x1ad)]--,this[_0x57eaa2(0x1ad)]<=0x0&&(_0x30e030[_0x57eaa2(0xa6)]=0x0,_0x30e030['scale']['x']=0x1,_0x30e030[_0x57eaa2(0x12d)]['y']=0x1);},Sprite_QTE_TimedHit[_0x53e3c7(0xdf)][_0x53e3c7(0x10a)]=function(){const _0x485d57=_0x53e3c7;if(!SceneManager[_0x485d57(0x23c)]())return;this[_0x485d57(0xfe)]=!![];},Sprite_QTE_TimedHit[_0x53e3c7(0xdf)][_0x53e3c7(0x13c)]=function(){const _0x4c0804=_0x53e3c7,_0x43bc4d=VisuMZ[_0x4c0804(0x1e4)]['Settings']['QTE'],_0x116b54=Math[_0x4c0804(0x16a)](_0x43bc4d['EarlyFinishDuration']/0x2),_0x552aee=Math[_0x4c0804(0x16a)](0xff/_0x116b54);this[_0x4c0804(0xa6)]-=_0x552aee,this[_0x4c0804(0xa6)]<=0x0&&this[_0x4c0804(0x175)]&&this[_0x4c0804(0x175)][_0x4c0804(0x18f)](this);},Sprite_QTE_TimedHit[_0x53e3c7(0xdf)][_0x53e3c7(0x1d6)]=function(){const _0x3a4f21=_0x53e3c7;this['_stopOverlay']=!![],this[_0x3a4f21(0x11a)]=!![];};function _0x438a(){const _0xc91915=['version','TimedSeqSuccessFrames','TimedSeqTextMsg','Game_Party_gainItem','WaitForQTE','GameOverCommonEventClear','cursorSpeed','okCommonEventID','ARRAYSTR','registerVariables','parent','MissSound','init_QTE_TriggerSys','_evoMatrixSkillMode','Sequence','processAllOnceParallels','LandingIcon','stringify','_triggerVariables','rectJS','processCommonEvent','SceneManager_updateFrameCount','checkWatchedTriggers','cancel','_qteTimerWindow','QteTimerWindowRectJS','RegExp','_gameOverCommonEventID','getOnChangeCommonEventTriggers','Game_Map_setup','buttonSequence','EVAL','dataID','_qteType','QTE_ButtonSequenceNormal','ExtMessageFunc','removeChild','removeQteWindow','TimingBarCursorOffsetX','ShuffleArray','lineHeight','textSizeEx','ButtonMashTextMsg','isTriggerWatchedVariable','gaugeBackColor','_lastDuration','Actor-%1-%2','updateInputData','floor','stopCursor','addQTE_TriggerSysPromiseToSet','mainFontSize','wholeDuration','ClearOnEvent','_cache_onChangeCommonEventTrigger','isRepeated','Zones','getLastUsedGamepadType','SceneManager_updateInputData','reduce','VisualGaugeStyles','status','createGaugeTimerWindowForQTE','Cannot\x20run\x20QTE\x20during\x20Evolution\x20Matrix\x20Skills.','hasOnChangeCommonEventTrigger','_qteWholeDuration','_duration','timedSequence','direction','marcher','bgType','center','Game_Switches_setValue','update','isTriggerWatchedSwitch','progress','_jsFuncs','height','updateTimingBarQTE','unshift','trim','pop','gameOverCommonEvent','processJavaScriptFuncs','drawHitZones','_watchedJsVariables','anchor','isActiveChainSkillsUiVisible','normalColor','ReleaseSound','getInputButtonString','_leeway','EventsMoveCore','updateQTEDuration','createLandingIconSprite','processSwitchTrigger','OverloadCommonEventID','updateTimedSequenceQTE','checkPlayingQTE','pageDownCommonEventID','clear','items','picture','armors','isAnyTriggered','PromiseItem','VariableID','startFinishing','90894EXLJHA','DirectionStruggleTextMsg','destroy','PlaytestInput','initialize','contents','Cannot\x20run\x20QTE\x20during\x20Active\x20Chain\x20Skills.','onDatabaseLoaded','VisuMZ_2_ExtMessageFunc','pagedown','setupQTE','updateFrameCount','return\x200','QTE_TriggerSys','CoreEngine','list','_waitMode','cancelCommonEventID','text','VisuMZ_3_VisualGaugeStyles','_triggerSwitches','name','_iconIndex','padding','switchID','gameOverCommonEventHeal','Buttons','sound','parameters','setFrame','_qteProgressWindow','weapons','_qteTimedHitSprite','QTE_Marcher','HoldCommonEventRun','map','MsgTextAlign','MissCommonEventID','isPlaytest','isPreviousScene','switches','format','CommonEventID_Cancel','updateFrame','1890904CvKNMY','playBuzzer','updateDirectionStruggleQTE','QteTimingBarWidth','_qteWindow','loadSystem','isWeapon','drawBaseGauge','TimedHitSuccessFrames','random','Scene_Map_needsFadeIn','processGameOverEvent','isPlayingQTE','updateOverlayScale','_sequenceSprites','createMessageWindowForQTE','CommonEventIDs','ARRAYSTRUCT','right','min','clearWatchedTrigger','refreshBitmap','escape','OnChange','dir4','reserveOnceParallel','fulfillOnTriggerPromises','getTypeQTE','AreaColor1','AreaColor2','parse','changePaintOpacity','_lastQteInputType','ConvertParams','updateQteDuration','TimedHitMaxSize','createGaugeProgressWindowForQTE','parseCommonEventNotetags','needsRefresh','CursorSpeed','clamp','start','split','getCursorPosition','isTriggered','troop','_qteEarlyFinishDuration','FUNC','TimingBarLabelOffsetY','updateButtonMashQTE','QteTimerColor2','QTE_ButtonMash','Points','match','ARRAYEVAL','duration','Armor-%1-%2','isEarlyFinishQTE','zones','initGameOverEventSettings','gainItem','timedHit','drawVisualStyleGauge','Button','QTE_DirectionStruggle','_landingPositionX','setupGameOverCommonEvent','Sound','setupMessageForQTE','bitmap','Settings','ShowQteTimer','QteProgressColor2','setup','abs','_baseX','value','ARRAYJSON','updateMarcherQTE','align','iconWidth','_labelMode','code','Direction','normal','GetGaugeHeight','End','40111970nBnerf','SwapperTextMsg','Shuffle','Scene_Map_start','registerCommonEvents','innerWidth','includes','getColor','refresh','_latestButton','width','_qteCursorSprite','Scene_Boot_onDatabaseLoaded','QteTimerColor1','remainingSequence','qteTimerGaugeStyleType','TimedHitPicture','registerCommand','Scene_Gameover_create','Game_Interpreter_setupReservedCommonEvent','SceneManager_initialize','updateFillGaugeQTE','shift','VisuMZ_3_EvoMatrixSkills','_watchedJsSwitches','Game_System_initialize','fontFace','exit','inputStartDelay','setupReservedCommonEvent','call','2324380sVkYxe','createKeyJS','3668787LVlHIK','qteProgressGaugeStyleType','updateQteGaugeWindows','CheckCompatibility','setText','createTimingBarSprite','updateTimedHitQTE','QTE_Swapper','Start','_triggerPromises','releaseSound','triggerProcessed','isBattleTest','ReleaseCommonEventID','HitCommonEventID','TimedSequenceLandPosition','FillRequirement','ButtonSeqInputBuffer','windowPadding','isAdvancedVariable','init_QTE_TriggerSysReservations','_logWindow','isArmor','finishEarlyQTE','Scene_Gameover_start','drawGauge','TimingBarLabelOffsetX','opacity','_qteSettings','menu','hasOnTriggerPromise','setWaitMode','Game_Variables_setValue','setGameOverCommonEventID','isSceneBattle','processItemTrigger','ARRAYNUM','STRUCT','swapper','randomInt','CommonEventID_PageUp','isAdvancedSwitch','WatchDelay','HitSound','clone','directionStruggle','CommonEventID_PageDown','NUM','_qteInputDelay','gaugeColor2','holdRelease','control','remove','Duration','_afterQteSessionDelay','filter','GameOver','Only\x20one\x20QTE\x20can\x20be\x20running\x20at\x20a\x20time.','initMembers','OnVariable','QTE','isActive','_landingSprite','EarlyFinishDuration','QTE_TimedHit','_wholeDuration','variables','ARRAYFUNC','PromiseVariable','timingBar','_stopCursor','goal','reserveCommonEvent','canUpdate','TimingBarColor2','Scene_Base_update','gaugeMaxValue','SequenceLength','Item-%1-%2','_data','hasOnTriggerPromiseItem','gaugeStyle','gaugeColor1','left','prototype','getWatchedTriggerPromises','VisuMZ_0_CoreEngine','down','IconSet','_jsCommonEvents','setValue','registerSwitches','QTE_HoldRelease','Cannot\x20run\x20QTE\x20during\x20Input\x20Combo\x20Skills.','_landingPositionY','PromiseArmor','hitCommonEventID','replace','_qteInputBuffer','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','createJsFunctionsForCommonEvent','HoldCommonEventID','ButtonSeqTextMsg','301uAaCLK','gradientFillRect','fillRect','_eventId','createDummyWindow','TimingBarTextMsg','find','createOverlaySprite','buttonMash','in\x20order\x20for\x20VisuMZ_2_QTE_TriggerSys\x20to\x20work.','loadPicture','buttonProgress','_stopOverlay','ToggleRequirement','needsFadeIn','STR','_position','_inputComboSkillMode','TimingBarFontSize','TimingBarColor1','constructor','push','cacheData','16GcHAxb','checkEarlyFinishQTE','varID','log','_overlaySprite','_watchedPromises','pointX','shuffle','hasGameOverEvent','icon','missCommonEventID','updatePosition','setBackgroundType','VisuMZ_3_InputComboSkills','_lastWholeDuration','_maxValueSegment','pageup','_finishing','reverse','_scene','InputSequence','round','VisuMZ_3_ActiveChainSkills','_qteLastInput','refreshDrawSpecialData','_dummyWindow','95646UjrDTQ','3463083SWdXqC','HoldReleaseTextMsg','CommonEventID','MsgWindowRectJS','CursorIcon','_lastProgress','systemColor','8SJeNgG','gaugeCurrentValue','scale','Timing','_speed','fillGauge','_qteDuration','iconHeight','join','Vocab','QTE_Clear','description','create','getLastPluginCommandInterpreter','numItems','isItem','getGameOverCommonEventID','updateEarlyFinish','init_QTE_TriggerSysPromise','createBitmap','updateQteWindowText','processVariableTrigger','updateWaitMode','playSe','sequence','clear_QTE_Settings','_normalCommonEvents','defineCommonEventType','InputStartDelay','type','GameOverCommonEventSetup','_baseY','OnSwitch','destroyContents','max','toUpperCase','getQTE_TriggerSysPromises','resetFontSettings','updateQTEInputs','note','length','<%1>%2','registerData','drawTextEx','isPressed','TimedHitOpacity','updateSwapperQTE','_direction','pointY','addChild','updateQteWindow','commonEventID','fontSize','StruggleRequirement','_mapGameOverCommonEventID','HealOnEvent','_onceParallelQueue','QteProgressWindowRectJS','SwitchID','updateHoldReleaseQTE','missSound','_lastGoal','VisuMZ_2_ExtMessageFunc\x20needs\x20to\x20be\x20updated\x20','ceil'];_0x438a=function(){return _0xc91915;};return _0x438a();}function Sprite_QTE_TimedSequence(){const _0x5985fd=_0x53e3c7;this[_0x5985fd(0x1db)](...arguments);}Sprite_QTE_TimedSequence[_0x53e3c7(0xdf)]=Object[_0x53e3c7(0x137)](Sprite['prototype']),Sprite_QTE_TimedSequence['prototype'][_0x53e3c7(0x106)]=Sprite_QTE_TimedSequence,Sprite_QTE_TimedSequence[_0x53e3c7(0xdf)]['initialize']=function(_0x36f1f1){const _0x137b38=_0x53e3c7;Sprite[_0x137b38(0xdf)]['initialize']['call'](this),this[_0x137b38(0xda)]=_0x36f1f1,this['initMembers'](),this[_0x137b38(0xf6)](),this[_0x137b38(0x218)]();},Sprite_QTE_TimedSequence['prototype'][_0x53e3c7(0xc5)]=function(){const _0x3bb3f5=_0x53e3c7;this[_0x3bb3f5(0x1c1)]['x']=0.5,this['anchor']['y']=0.5,this[_0x3bb3f5(0x102)]=this['_data'][_0x3bb3f5(0x12e)]||0x1,this[_0x3bb3f5(0x15a)]=SceneManager[_0x3bb3f5(0xa7)][_0x3bb3f5(0x1af)]||'left',this['x']=this[_0x3bb3f5(0xda)][_0x3bb3f5(0x24e)]+(this[_0x3bb3f5(0x15a)]===_0x3bb3f5(0xde)?this[_0x3bb3f5(0x102)]:-this[_0x3bb3f5(0x102)]),this['y']=this[_0x3bb3f5(0xda)][_0x3bb3f5(0x14a)],this['_lastQteInputType']=Input['getLastUsedGamepadType'](),this[_0x3bb3f5(0x1c6)]=$gameParty['inBattle']()?0x0:-0x2;},Sprite_QTE_TimedSequence[_0x53e3c7(0xdf)]['createDummyWindow']=function(){const _0x20ba4c=_0x53e3c7,_0xa58568=new Rectangle(0x0,0x0,0x12c,Window_Base[_0x20ba4c(0xdf)][_0x20ba4c(0x193)]());_0xa58568[_0x20ba4c(0x74)]+=$gameSystem['windowPadding']()*0x2,_0xa58568[_0x20ba4c(0x1b8)]+=$gameSystem[_0x20ba4c(0x9d)]()*0x2,this[_0x20ba4c(0x122)]=new Window_Base(_0xa58568);},Sprite_QTE_TimedSequence[_0x53e3c7(0xdf)]['refreshBitmap']=function(){const _0x34fe6f=_0x53e3c7;this[_0x34fe6f(0x223)]=Input[_0x34fe6f(0x1a4)]();const _0x1bb42c=this[_0x34fe6f(0xda)][_0x34fe6f(0x242)]||'ok',_0x3dec89=TextManager[_0x34fe6f(0x1c5)](_0x1bb42c),_0x104043=this[_0x34fe6f(0x122)][_0x34fe6f(0x194)](_0x3dec89)[_0x34fe6f(0x74)],_0xe601fc=Math[_0x34fe6f(0x19b)]((this[_0x34fe6f(0x122)][_0x34fe6f(0x25f)]-_0x104043)/0x2);this[_0x34fe6f(0x122)][_0x34fe6f(0x1dc)]['clear'](),this[_0x34fe6f(0x122)]['drawTextEx'](_0x3dec89,_0xe601fc,0x0),this[_0x34fe6f(0x248)]=this[_0x34fe6f(0x122)][_0x34fe6f(0x1dc)];},Sprite_QTE_TimedSequence[_0x53e3c7(0xdf)][_0x53e3c7(0x229)]=function(){const _0x243b96=_0x53e3c7;return this['_lastQteInputType']!==Input[_0x243b96(0x1a4)]();},Sprite_QTE_TimedSequence[_0x53e3c7(0xdf)][_0x53e3c7(0x1b4)]=function(){const _0x2b54ee=_0x53e3c7;Sprite[_0x2b54ee(0xdf)][_0x2b54ee(0x1b4)][_0x2b54ee(0x88)](this);if(this[_0x2b54ee(0x229)]())this['refreshBitmap']();if(this[_0x2b54ee(0xd4)]())this[_0x2b54ee(0x114)]();else(SceneManager[_0x2b54ee(0x23c)]()||this[_0x2b54ee(0x11a)])&&this[_0x2b54ee(0x13c)]();},Sprite_QTE_TimedSequence['prototype'][_0x53e3c7(0xd4)]=function(){const _0x4d8d89=_0x53e3c7;if(!this[_0x4d8d89(0x175)])return![];if(SceneManager[_0x4d8d89(0xbb)]>0x0)return![];if(this[_0x4d8d89(0xfe)])return![];return!![];},Sprite_QTE_TimedSequence[_0x53e3c7(0xdf)]['updatePosition']=function(){const _0x1871e4=_0x53e3c7,_0x4f4274=this['_leeway'];if(this[_0x1871e4(0x102)]<=_0x4f4274)return;const _0x43e613=Math[_0x1871e4(0x14d)](0x0,this[_0x1871e4(0x102)]);this['x']=this[_0x1871e4(0xda)]['_baseX']+(this[_0x1871e4(0x15a)]===_0x1871e4(0xde)?_0x43e613:-_0x43e613),this[_0x1871e4(0x102)]--,this['_position']<=this[_0x1871e4(0x1c6)]&&this[_0x1871e4(0x1d6)]();},Sprite_QTE_TimedSequence['prototype'][_0x53e3c7(0x13c)]=function(){const _0xb86647=_0x53e3c7,_0x19c33d=VisuMZ[_0xb86647(0x1e4)][_0xb86647(0x249)][_0xb86647(0xc7)],_0x370e12=Math[_0xb86647(0x16a)](_0x19c33d[_0xb86647(0xca)]/0x2),_0x472809=Math[_0xb86647(0x16a)](0xff/_0x370e12);this[_0xb86647(0xa6)]-=_0x472809,this[_0xb86647(0xa6)]<=0x0&&this[_0xb86647(0x175)]&&this[_0xb86647(0x175)][_0xb86647(0x18f)](this);},Sprite_QTE_TimedSequence[_0x53e3c7(0xdf)][_0x53e3c7(0x1d6)]=function(){const _0x2abd9b=_0x53e3c7;this[_0x2abd9b(0xfe)]=!![],this[_0x2abd9b(0x11a)]=!![];const _0x22bf59=SceneManager[_0x2abd9b(0xa7)],_0x4a2bf3=_0x22bf59[_0x2abd9b(0x78)],_0x46da17=_0x4a2bf3[_0x2abd9b(0xf8)](_0x4d861b=>_0x4d861b[_0x2abd9b(0x12e)]===this[_0x2abd9b(0xda)]['Timing']&&_0x4d861b[_0x2abd9b(0x242)]===this['_data'][_0x2abd9b(0x242)]);if(_0x46da17){_0x4a2bf3[_0x2abd9b(0xbf)](_0x46da17);const _0x346abb=_0x22bf59['missSound'];_0x346abb&&_0x346abb[_0x2abd9b(0x1ec)]&&AudioManager[_0x2abd9b(0x142)](_0x346abb);const _0x10093b=_0x22bf59[_0x2abd9b(0x113)]||0x0;if(_0x10093b>0x0){const _0x136267=$gameTemp['getLastPluginCommandInterpreter']();$onceParallel(_0x10093b,_0x136267?_0x136267['_eventId']:0x0);}}};function Sprite_QTE_TimingBarCursor(){const _0x48c4fa=_0x53e3c7;this[_0x48c4fa(0x1db)](...arguments);}Sprite_QTE_TimingBarCursor[_0x53e3c7(0xdf)]=Object[_0x53e3c7(0x137)](Sprite[_0x53e3c7(0xdf)]),Sprite_QTE_TimingBarCursor[_0x53e3c7(0xdf)][_0x53e3c7(0x106)]=Sprite_QTE_TimingBarCursor,Sprite_QTE_TimingBarCursor[_0x53e3c7(0xdf)]['initialize']=function(){const _0x1a04a1=_0x53e3c7;Sprite[_0x1a04a1(0xdf)]['initialize'][_0x1a04a1(0x88)](this),this[_0x1a04a1(0xc5)](),this['createBitmap'](),this['opacity']=0x0;},Sprite_QTE_TimingBarCursor[_0x53e3c7(0xdf)][_0x53e3c7(0xc5)]=function(){const _0x5cf97c=_0x53e3c7;this[_0x5cf97c(0x1c1)]['x']=0.5,this[_0x5cf97c(0x1c1)]['y']=0x1,this[_0x5cf97c(0x12f)]=SceneManager['_qteSettings'][_0x5cf97c(0x171)]||0x1,this[_0x5cf97c(0x102)]=0x0,this[_0x5cf97c(0x15a)]=0x1;},Sprite_QTE_TimingBarCursor[_0x53e3c7(0xdf)][_0x53e3c7(0x13e)]=function(){const _0x277d04=_0x53e3c7;this[_0x277d04(0x248)]=ImageManager[_0x277d04(0x208)](_0x277d04(0xe3)),this[_0x277d04(0x1ed)]=SceneManager[_0x277d04(0xa7)]['cursorIcon']||0x0,this[_0x277d04(0x202)]();},Sprite_QTE_TimingBarCursor[_0x53e3c7(0xdf)][_0x53e3c7(0x202)]=function(){const _0x4d5948=_0x53e3c7,_0x27a040=ImageManager[_0x4d5948(0x253)],_0x40ef66=ImageManager[_0x4d5948(0x132)],_0x1745ef=this['_iconIndex']%0x10*_0x27a040,_0x1eed8d=Math[_0x4d5948(0x19b)](this['_iconIndex']/0x10)*_0x40ef66;this['setFrame'](_0x1745ef,_0x1eed8d,_0x27a040,_0x40ef66);},Sprite_QTE_TimingBarCursor['prototype'][_0x53e3c7(0x1b4)]=function(){const _0x41ddab=_0x53e3c7;Sprite[_0x41ddab(0xdf)]['update']['call'](this);if(!this[_0x41ddab(0xd4)]())return;this[_0x41ddab(0xa6)]=0xff,this['movePosition'](),this[_0x41ddab(0x114)]();},Sprite_QTE_TimingBarCursor['prototype']['canUpdate']=function(){const _0x46f612=_0x53e3c7;if(!this['parent'])return![];if(SceneManager[_0x46f612(0xbb)]>0x0)return![];if(this[_0x46f612(0xd1)])return![];return!![];},Sprite_QTE_TimingBarCursor[_0x53e3c7(0xdf)]['movePosition']=function(){const _0x378861=_0x53e3c7,_0x5e65b2=VisuMZ[_0x378861(0x1e4)][_0x378861(0x249)]['QTE'],_0x508a7c=_0x5e65b2[_0x378861(0x206)]||0x64;this[_0x378861(0x102)]+=this['_speed']*this[_0x378861(0x15a)];if(this['_position']<0x0)this['_position']=0x0,this['_direction']=0x1;else this[_0x378861(0x102)]>_0x508a7c&&(this['_position']=_0x508a7c,this[_0x378861(0x15a)]=-0x1);},Sprite_QTE_TimingBarCursor[_0x53e3c7(0xdf)][_0x53e3c7(0x114)]=function(){const _0xd2cad4=_0x53e3c7,_0x218eb3=VisuMZ[_0xd2cad4(0x1e4)]['Settings']['QTE'],_0x2e043f=_0x218eb3[_0xd2cad4(0x206)]||0x64,_0x501ba1=0xc,_0x50a96f=Math[_0xd2cad4(0x19b)]((this['parent'][_0xd2cad4(0x25f)]-_0x2e043f)/0x2)+this[_0xd2cad4(0x175)][_0xd2cad4(0x1ee)],_0x5c98d0=this[_0xd2cad4(0x175)][_0xd2cad4(0x193)]()-_0x501ba1-0x2+this[_0xd2cad4(0x175)]['padding'],_0x3e98a7=_0x218eb3[_0xd2cad4(0x191)]||0x0,_0x1a3d59=_0x218eb3['TimingBarCursorOffsetY']||0x0;this['x']=_0x50a96f+this['_position']+_0x3e98a7,this['y']=_0x5c98d0+_0x1a3d59;},Sprite_QTE_TimingBarCursor[_0x53e3c7(0xdf)][_0x53e3c7(0x19c)]=function(){const _0x2718d1=_0x53e3c7;this[_0x2718d1(0xd1)]=!![];},Sprite_QTE_TimingBarCursor[_0x53e3c7(0xdf)][_0x53e3c7(0x22e)]=function(){const _0x2bf564=_0x53e3c7,_0x4152a5=VisuMZ[_0x2bf564(0x1e4)]['Settings'][_0x2bf564(0xc7)],_0x16b91b=_0x4152a5['QteTimingBarWidth']||0x64,_0x52c016=Math[_0x2bf564(0x11e)](this[_0x2bf564(0x102)]/_0x16b91b*0x64);return _0x52c016;};function Window_QTE_GaugeBase(){const _0x3a447c=_0x53e3c7;this[_0x3a447c(0x1db)](...arguments);}Window_QTE_GaugeBase[_0x53e3c7(0xdf)]=Object[_0x53e3c7(0x137)](Window_Base[_0x53e3c7(0xdf)]),Window_QTE_GaugeBase[_0x53e3c7(0xdf)][_0x53e3c7(0x106)]=Window_QTE_GaugeBase,Window_QTE_GaugeBase[_0x53e3c7(0xdf)][_0x53e3c7(0x1db)]=function(_0x222eda){const _0x387cf7=_0x53e3c7;this[_0x387cf7(0x108)](),Window_Base[_0x387cf7(0xdf)][_0x387cf7(0x1db)][_0x387cf7(0x88)](this,_0x222eda),this[_0x387cf7(0x115)](0x2),this[_0x387cf7(0x262)]();},Window_QTE_GaugeBase[_0x53e3c7(0xdf)]['cacheData']=function(){},Window_QTE_GaugeBase[_0x53e3c7(0xdf)]['update']=function(){const _0x1e8885=_0x53e3c7;Window_Base[_0x1e8885(0xdf)][_0x1e8885(0x1b4)]['call'](this),this['needsRefresh']()&&(this[_0x1e8885(0x108)](),this[_0x1e8885(0x262)]()),this[_0x1e8885(0x13c)]();},Window_QTE_GaugeBase['prototype'][_0x53e3c7(0x229)]=function(){return![];},Window_QTE_GaugeBase[_0x53e3c7(0xdf)][_0x53e3c7(0xdd)]=function(){const _0x45b27e=_0x53e3c7;return ColorManager[_0x45b27e(0x1c3)]();},Window_QTE_GaugeBase[_0x53e3c7(0xdf)][_0x53e3c7(0xbc)]=function(){const _0x442a61=_0x53e3c7;return ColorManager[_0x442a61(0x12a)]();},Window_QTE_GaugeBase[_0x53e3c7(0xdf)]['gaugeStyle']=function(){const _0x3657dd=_0x53e3c7;return _0x3657dd(0x257);},Window_QTE_GaugeBase['prototype'][_0x53e3c7(0x12c)]=function(){return 0x0;},Window_QTE_GaugeBase[_0x53e3c7(0xdf)][_0x53e3c7(0xd7)]=function(){return 0x1;},Window_QTE_GaugeBase[_0x53e3c7(0xdf)][_0x53e3c7(0x262)]=function(){const _0x146b5e=_0x53e3c7;this[_0x146b5e(0x1dc)][_0x146b5e(0x1cf)]();const _0x5b67d7=this[_0x146b5e(0xdd)](),_0x10b540=this[_0x146b5e(0xbc)](),_0x455f9d=this['gaugeStyle'](),_0x2c3568=this[_0x146b5e(0x25f)],_0x2e0893=0x0,_0x4a2782=0x0,_0x462d23=this[_0x146b5e(0x12c)](),_0x48f8b3=this['gaugeMaxValue'](),_0x4c9f2a=(_0x462d23/_0x48f8b3)[_0x146b5e(0x22b)](0x0,0x1);if(Imported[_0x146b5e(0x1ea)]){const _0x3ff55d=(VisuMZ[_0x146b5e(0x1a7)][_0x146b5e(0x258)](_0x455f9d)??0xc)['clamp'](0x1,0x20),_0xa7a213=_0x4a2782+this['lineHeight']()-_0x3ff55d-0x2,_0x1a065b=ColorManager[_0x146b5e(0x197)]();VisuMZ['VisualGaugeStyles'][_0x146b5e(0x118)]=this[_0x146b5e(0xd7)](),this['contents'][_0x146b5e(0x241)](_0x455f9d,_0x2e0893,_0xa7a213,_0x2c3568,_0x3ff55d,_0x4c9f2a,_0x1a065b,_0x5b67d7,_0x10b540);}else this[_0x146b5e(0xa4)](_0x2e0893,_0x4a2782,_0x2c3568,_0x4c9f2a,_0x5b67d7,_0x10b540);},Window_QTE_GaugeBase[_0x53e3c7(0xdf)][_0x53e3c7(0x13c)]=function(){const _0x170d05=_0x53e3c7;if(!SceneManager[_0x170d05(0x23c)]())return;const _0x558bd2=VisuMZ['QTE_TriggerSys']['Settings'][_0x170d05(0xc7)],_0xb067c3=Math[_0x170d05(0x16a)](_0x558bd2[_0x170d05(0xca)]/0x2);if(SceneManager[_0x170d05(0x231)]>_0xb067c3)return;const _0x138514=Math[_0x170d05(0x16a)](0xff/_0xb067c3);this['contentsOpacity']-=_0x138514;};function Window_QTE_Timer(){const _0x51a422=_0x53e3c7;this[_0x51a422(0x1db)](...arguments);}Window_QTE_Timer[_0x53e3c7(0xdf)]=Object[_0x53e3c7(0x137)](Window_QTE_GaugeBase[_0x53e3c7(0xdf)]),Window_QTE_Timer[_0x53e3c7(0xdf)]['constructor']=Window_QTE_Timer,Window_QTE_Timer[_0x53e3c7(0xdf)][_0x53e3c7(0x1db)]=function(_0x2381d0){const _0x44366f=_0x53e3c7;Window_QTE_GaugeBase[_0x44366f(0xdf)][_0x44366f(0x1db)][_0x44366f(0x88)](this,_0x2381d0);},Window_QTE_Timer[_0x53e3c7(0xdf)]['cacheData']=function(){const _0x2a03bd=_0x53e3c7;this[_0x2a03bd(0x198)]=SceneManager[_0x2a03bd(0x131)],this['_lastWholeDuration']=SceneManager[_0x2a03bd(0x1ac)];},Window_QTE_Timer[_0x53e3c7(0xdf)][_0x53e3c7(0x229)]=function(){const _0x280168=_0x53e3c7;if(this['_lastDuration']!==SceneManager[_0x280168(0x131)])return!![];if(this[_0x280168(0x117)]!==SceneManager['_qteWholeDuration'])return!![];return![];},Window_QTE_Timer['prototype'][_0x53e3c7(0xdd)]=function(){const _0x27ae8f=_0x53e3c7,_0x17c9ce=VisuMZ[_0x27ae8f(0x1e4)]['Settings']['QTE'];return ColorManager[_0x27ae8f(0x261)](_0x17c9ce[_0x27ae8f(0x77)]);},Window_QTE_Timer[_0x53e3c7(0xdf)]['gaugeColor2']=function(){const _0x3a9004=_0x53e3c7,_0x211b9d=VisuMZ[_0x3a9004(0x1e4)][_0x3a9004(0x249)][_0x3a9004(0xc7)];return ColorManager['getColor'](_0x211b9d[_0x3a9004(0x235)]);},Window_QTE_Timer['prototype'][_0x53e3c7(0xdc)]=function(){const _0x2d1134=_0x53e3c7,_0x16c2ed=VisuMZ[_0x2d1134(0x1e4)]['Settings']['QTE'];return _0x16c2ed[_0x2d1134(0x79)];},Window_QTE_Timer[_0x53e3c7(0xdf)]['gaugeCurrentValue']=function(){const _0x4286ce=_0x53e3c7;return this[_0x4286ce(0x198)]||0x0;},Window_QTE_Timer[_0x53e3c7(0xdf)]['gaugeMaxValue']=function(){const _0x5de048=_0x53e3c7;return this[_0x5de048(0x117)]||0x0;};function Window_QTE_Progress(){const _0x13c63e=_0x53e3c7;this[_0x13c63e(0x1db)](...arguments);}Window_QTE_Progress[_0x53e3c7(0xdf)]=Object['create'](Window_QTE_GaugeBase[_0x53e3c7(0xdf)]),Window_QTE_Progress['prototype']['constructor']=Window_QTE_Progress,Window_QTE_Progress[_0x53e3c7(0xdf)][_0x53e3c7(0x1db)]=function(_0x177710){const _0x1788fa=_0x53e3c7;Window_QTE_GaugeBase[_0x1788fa(0xdf)]['initialize'][_0x1788fa(0x88)](this,_0x177710);},Window_QTE_Progress['prototype'][_0x53e3c7(0x108)]=function(){const _0x38e18a=_0x53e3c7;this[_0x38e18a(0x129)]=SceneManager['_qteSettings']['progress'],this['_lastGoal']=SceneManager[_0x38e18a(0xa7)][_0x38e18a(0xd2)];},Window_QTE_Progress[_0x53e3c7(0xdf)][_0x53e3c7(0x229)]=function(){const _0x54e454=_0x53e3c7;if(this[_0x54e454(0x129)]!==SceneManager[_0x54e454(0xa7)][_0x54e454(0x1b6)])return!![];if(this['_lastGoal']!==SceneManager[_0x54e454(0xa7)]['goal'])return!![];return![];},Window_QTE_Progress['prototype']['gaugeColor1']=function(){const _0x116e99=_0x53e3c7,_0x2cfbcc=VisuMZ[_0x116e99(0x1e4)]['Settings']['QTE'];return ColorManager[_0x116e99(0x261)](_0x2cfbcc['QteProgressColor1']);},Window_QTE_Progress[_0x53e3c7(0xdf)][_0x53e3c7(0xbc)]=function(){const _0x1d6fb0=_0x53e3c7,_0xb7c6c1=VisuMZ['QTE_TriggerSys']['Settings'][_0x1d6fb0(0xc7)];return ColorManager['getColor'](_0xb7c6c1[_0x1d6fb0(0x24b)]);},Window_QTE_Progress[_0x53e3c7(0xdf)]['gaugeStyle']=function(){const _0x506044=_0x53e3c7,_0x4d1730=VisuMZ[_0x506044(0x1e4)][_0x506044(0x249)][_0x506044(0xc7)];return _0x4d1730[_0x506044(0x8c)];},Window_QTE_Progress[_0x53e3c7(0xdf)]['gaugeCurrentValue']=function(){const _0x3d2eaf=_0x53e3c7;return this[_0x3d2eaf(0x129)]||0x0;},Window_QTE_Progress['prototype'][_0x53e3c7(0xd7)]=function(){const _0x106bb0=_0x53e3c7;return this[_0x106bb0(0x168)]||0x0;};function Window_QTE_HelpBase(){const _0x2604b1=_0x53e3c7;this[_0x2604b1(0x1db)](...arguments);}Window_QTE_HelpBase['prototype']=Object[_0x53e3c7(0x137)](Window_Help[_0x53e3c7(0xdf)]),Window_QTE_HelpBase[_0x53e3c7(0xdf)]['constructor']=Window_QTE_HelpBase,Window_QTE_HelpBase[_0x53e3c7(0xdf)]['initialize']=function(_0xdc0473){const _0x7c6d62=_0x53e3c7;this[_0x7c6d62(0x108)](),Window_Help[_0x7c6d62(0xdf)][_0x7c6d62(0x1db)][_0x7c6d62(0x88)](this,_0xdc0473);},Window_QTE_HelpBase[_0x53e3c7(0xdf)]['cacheData']=function(){const _0x241a21=_0x53e3c7;this['_lastProgress']=this['buttonProgress'](),this['_lastQteInputType']=Input[_0x241a21(0x1a4)]();},Window_QTE_HelpBase[_0x53e3c7(0xdf)][_0x53e3c7(0x1b4)]=function(){const _0x4160cf=_0x53e3c7;Window_Help[_0x4160cf(0xdf)][_0x4160cf(0x1b4)][_0x4160cf(0x88)](this),this[_0x4160cf(0x229)]()&&(this['cacheData'](),this[_0x4160cf(0x262)]());},Window_QTE_HelpBase[_0x53e3c7(0xdf)][_0x53e3c7(0x229)]=function(){const _0x4f3dbd=_0x53e3c7;return this[_0x4f3dbd(0x223)]!==Input['getLastUsedGamepadType']();},Window_QTE_HelpBase[_0x53e3c7(0xdf)][_0x53e3c7(0x262)]=function(){const _0x3e7ba9=_0x53e3c7;this['contents'][_0x3e7ba9(0x1cf)](),this[_0x3e7ba9(0x121)](),this[_0x3e7ba9(0x150)](),this[_0x3e7ba9(0x222)](!![]);const _0x5e7e39=this['baseTextRect']();this['drawTextEx'](this['_text'],_0x5e7e39['x'],_0x5e7e39['y']+this[_0x3e7ba9(0x193)](),_0x5e7e39[_0x3e7ba9(0x74)]);},Window_QTE_HelpBase[_0x53e3c7(0xdf)][_0x53e3c7(0xfd)]=function(){const _0x147407=_0x53e3c7;return SceneManager[_0x147407(0xa7)][_0x147407(0x1b6)]||0x0;},Window_QTE_HelpBase[_0x53e3c7(0xdf)][_0x53e3c7(0x121)]=function(){};function Window_QTE_ButtonSequence(){this['initialize'](...arguments);}Window_QTE_ButtonSequence['prototype']=Object['create'](Window_QTE_HelpBase[_0x53e3c7(0xdf)]),Window_QTE_ButtonSequence[_0x53e3c7(0xdf)][_0x53e3c7(0x106)]=Window_QTE_ButtonSequence,Window_QTE_ButtonSequence[_0x53e3c7(0xdf)][_0x53e3c7(0x1db)]=function(_0x2ce853){const _0x5841fd=_0x53e3c7;Window_QTE_HelpBase['prototype'][_0x5841fd(0x1db)][_0x5841fd(0x88)](this,_0x2ce853);},Window_QTE_ButtonSequence[_0x53e3c7(0xdf)][_0x53e3c7(0x108)]=function(){const _0x1417c1=_0x53e3c7;Window_QTE_HelpBase['prototype'][_0x1417c1(0x108)][_0x1417c1(0x88)](this),this[_0x1417c1(0x129)]=this[_0x1417c1(0xfd)]();},Window_QTE_ButtonSequence[_0x53e3c7(0xdf)][_0x53e3c7(0x229)]=function(){const _0x2e4df8=_0x53e3c7;if(this['_lastProgress']!==this[_0x2e4df8(0xfd)]())return!![];return Window_QTE_HelpBase[_0x2e4df8(0xdf)]['needsRefresh']['call'](this);},Window_QTE_ButtonSequence['prototype'][_0x53e3c7(0x121)]=function(){const _0xedec81=_0x53e3c7,_0x3bdb82=SceneManager[_0xedec81(0xa7)][_0xedec81(0x143)][_0xedec81(0xb7)](),_0x334372=_0x3bdb82['remove']('')[_0xedec81(0x1fa)](_0x3039f0=>TextManager['getInputButtonString'](_0x3039f0)),_0x4e3274=_0x334372[_0xedec81(0x133)]('\x20'),_0x58f358=this['textSizeEx'](_0x4e3274)[_0xedec81(0x74)],_0x3e76af=SceneManager['_qteSettings'][_0xedec81(0x1b6)];let _0xc5d49b=Math[_0xedec81(0x19b)]((this['innerWidth']-_0x58f358)/0x2);this[_0xedec81(0x150)]();const _0x45c7dd=_0x334372[_0xedec81(0x153)];for(let _0x46db31=0x0;_0x46db31<_0x45c7dd;_0x46db31++){const _0x57294d=_0x334372[_0x46db31];this[_0xedec81(0x222)](_0x46db31>=_0x3e76af),this[_0xedec81(0x156)](_0x57294d,_0xc5d49b,0x0),_0xc5d49b+=this['textSizeEx'](_0x57294d+'\x20')['width'];}};function Window_QTE_TimedSequence(){const _0x39b937=_0x53e3c7;this[_0x39b937(0x1db)](...arguments);}Window_QTE_TimedSequence[_0x53e3c7(0xdf)]=Object[_0x53e3c7(0x137)](Window_QTE_HelpBase[_0x53e3c7(0xdf)]),Window_QTE_TimedSequence[_0x53e3c7(0xdf)]['constructor']=Window_QTE_TimedSequence,Window_QTE_TimedSequence[_0x53e3c7(0xdf)][_0x53e3c7(0x1db)]=function(_0x572e70){const _0x4dc61e=_0x53e3c7;Window_QTE_HelpBase[_0x4dc61e(0xdf)][_0x4dc61e(0x1db)][_0x4dc61e(0x88)](this,_0x572e70),this[_0x4dc61e(0x1c9)](),this['createSequenceSprites']();},Window_QTE_TimedSequence[_0x53e3c7(0xdf)][_0x53e3c7(0x1c9)]=function(){const _0x5dd23c=_0x53e3c7,_0x44b23f=VisuMZ[_0x5dd23c(0x1e4)][_0x5dd23c(0x249)][_0x5dd23c(0xc7)],_0x44591b=_0x44b23f[_0x5dd23c(0x9a)]||0x0,_0x3379cc=SceneManager[_0x5dd23c(0xa7)],_0x42b1cc=_0x3379cc[_0x5dd23c(0x112)]||0x0,_0x255a88=_0x3379cc[_0x5dd23c(0x1af)]||_0x5dd23c(0xde),_0xd26ce=new Sprite();_0xd26ce[_0x5dd23c(0x248)]=ImageManager['loadSystem']('IconSet'),_0xd26ce['anchor']['x']=0.5,_0xd26ce['anchor']['y']=0.5;{const _0x4e494b=ImageManager[_0x5dd23c(0x253)],_0x20809b=ImageManager[_0x5dd23c(0x132)],_0x20dade=_0x42b1cc%0x10*_0x4e494b,_0x12eeb4=Math['floor'](_0x42b1cc/0x10)*_0x20809b;_0xd26ce[_0x5dd23c(0x1f4)](_0x20dade,_0x12eeb4,_0x4e494b,_0x20809b);}const _0x1917a6=(_0x255a88===_0x5dd23c(0xde)?_0x44591b:0x64-_0x44591b)*0.01;this['_landingPositionX']=this['padding']+Math['round'](this[_0x5dd23c(0x25f)]*_0x1917a6),this[_0x5dd23c(0xe9)]=this[_0x5dd23c(0x1ee)]+Math[_0x5dd23c(0x11e)](this[_0x5dd23c(0x193)]()/0x2),_0xd26ce['x']=this['_landingPositionX'],_0xd26ce['y']=this[_0x5dd23c(0xe9)],this[_0x5dd23c(0x15c)](_0xd26ce),this[_0x5dd23c(0xc9)]=_0xd26ce;},Window_QTE_TimedSequence[_0x53e3c7(0xdf)]['createSequenceSprites']=function(){const _0x4a5c5a=_0x53e3c7,_0x3a1f04=SceneManager[_0x4a5c5a(0xa7)],_0x160378=_0x3a1f04[_0x4a5c5a(0x143)]['clone']()[_0x4a5c5a(0x11b)]();this[_0x4a5c5a(0x211)]=[];for(const _0x4d44fc of _0x160378){_0x4d44fc[_0x4a5c5a(0x24e)]=this[_0x4a5c5a(0x244)],_0x4d44fc['_baseY']=this[_0x4a5c5a(0xe9)];const _0x1d7748=new Sprite_QTE_TimedSequence(_0x4d44fc);this[_0x4a5c5a(0x15c)](_0x1d7748),this[_0x4a5c5a(0x211)][_0x4a5c5a(0x1ba)](_0x1d7748);}},Window_QTE_TimedSequence[_0x53e3c7(0xdf)][_0x53e3c7(0x14c)]=function(){const _0x50604f=_0x53e3c7;Window_QTE_HelpBase[_0x50604f(0xdf)][_0x50604f(0x14c)][_0x50604f(0x88)](this);if(!this[_0x50604f(0x211)])return;while(this[_0x50604f(0x211)][_0x50604f(0x153)]>0x0){const _0xbc6755=this['_sequenceSprites'][_0x50604f(0x1bc)]();if(!_0xbc6755)continue;if(!_0xbc6755[_0x50604f(0x248)])continue;_0xbc6755[_0x50604f(0x248)][_0x50604f(0x1d9)]();}};function Window_QTE_TimingBar(){this['initialize'](...arguments);}function _0x5a8d(_0x52a294,_0x5ebd97){const _0x438aca=_0x438a();return _0x5a8d=function(_0x5a8dc6,_0x179bdf){_0x5a8dc6=_0x5a8dc6-0x74;let _0x138dc0=_0x438aca[_0x5a8dc6];return _0x138dc0;},_0x5a8d(_0x52a294,_0x5ebd97);}Window_QTE_TimingBar['prototype']=Object[_0x53e3c7(0x137)](Window_QTE_HelpBase['prototype']),Window_QTE_TimingBar['prototype'][_0x53e3c7(0x106)]=Window_QTE_TimingBar,Window_QTE_TimingBar['prototype'][_0x53e3c7(0x1db)]=function(_0x14d945){const _0x380d8b=_0x53e3c7;Window_QTE_HelpBase[_0x380d8b(0xdf)][_0x380d8b(0x1db)]['call'](this,_0x14d945),this[_0x380d8b(0x90)]();},Window_QTE_TimingBar['prototype'][_0x53e3c7(0x90)]=function(){const _0x2bc14b=_0x53e3c7;this[_0x2bc14b(0x75)]=new Sprite_QTE_TimingBarCursor(),this[_0x2bc14b(0x15c)](this['_qteCursorSprite']);},Window_QTE_TimingBar['prototype'][_0x53e3c7(0x121)]=function(){const _0x50bc33=_0x53e3c7;this[_0x50bc33(0x20a)](),this[_0x50bc33(0x1bf)]();},Window_QTE_TimingBar[_0x53e3c7(0xdf)][_0x53e3c7(0x20a)]=function(){const _0x587334=_0x53e3c7,_0x143efc=VisuMZ[_0x587334(0x1e4)][_0x587334(0x249)][_0x587334(0xc7)],_0x45366f=_0x143efc['QteTimingBarWidth']||0x64,_0x1a31eb=0xc,_0x28160b=Math[_0x587334(0x19b)]((this[_0x587334(0x25f)]-_0x45366f)/0x2),_0x4c8f9f=this[_0x587334(0x193)]()-_0x1a31eb-0x2,_0x3ce4b4=ColorManager['getColor'](_0x143efc[_0x587334(0x105)]),_0x4367c4=ColorManager[_0x587334(0x261)](_0x143efc[_0x587334(0xd5)]);this[_0x587334(0x1dc)][_0x587334(0xf4)](_0x28160b-0x1,_0x4c8f9f-0x1,_0x45366f+0x2,_0x1a31eb+0x2,ColorManager[_0x587334(0x197)]()),this[_0x587334(0x1dc)][_0x587334(0xf3)](_0x28160b,_0x4c8f9f,_0x45366f,_0x1a31eb,_0x3ce4b4,_0x4367c4,!![]);},Window_QTE_TimingBar['prototype']['drawHitZones']=function(){const _0x1dede5=_0x53e3c7,_0x39ff3d=VisuMZ['QTE_TriggerSys'][_0x1dede5(0x249)][_0x1dede5(0xc7)],_0x12c6a4=_0x39ff3d[_0x1dede5(0x206)]||0x64,_0x4eb0dc=0xc,_0x18c353=Math[_0x1dede5(0x19b)]((this[_0x1dede5(0x25f)]-_0x12c6a4)/0x2),_0x57bb90=this[_0x1dede5(0x193)]()-_0x4eb0dc-0x2,_0x49b144=SceneManager[_0x1dede5(0xa7)],_0x31c3c8=_0x49b144[_0x1dede5(0x23d)];for(const _0x1ad590 of _0x31c3c8){const _0x44199e=Math[_0x1dede5(0x216)](_0x1ad590[_0x1dede5(0x93)],_0x1ad590['End'])[_0x1dede5(0x22b)](0x0,0x64),_0x4214d2=Math[_0x1dede5(0x14d)](_0x1ad590['Start'],_0x1ad590[_0x1dede5(0x259)])[_0x1dede5(0x22b)](0x0,0x64),_0x1af50c=Math['ceil'](_0x44199e*0.01*_0x12c6a4),_0x23eb21=Math[_0x1dede5(0x19b)](_0x4214d2*0.01*_0x12c6a4),_0x21187e=_0x1af50c+_0x18c353,_0xe34b06=_0x23eb21-_0x1af50c,_0x48ee08=ColorManager['getColor'](_0x1ad590[_0x1dede5(0x21f)]),_0x513824=ColorManager['getColor'](_0x1ad590[_0x1dede5(0x220)]);this['contents'][_0x1dede5(0xf3)](_0x21187e,_0x57bb90,_0xe34b06,_0x4eb0dc,_0x48ee08,_0x513824,!![]);const _0x59a509=_0x1ad590['Label']||'';if(_0x59a509[_0x1dede5(0x153)]>0x0){this[_0x1dede5(0x254)]=!![];const _0x2b9549=this['textSizeEx'](_0x59a509)['width'],_0x188ba4=_0x21187e+Math[_0x1dede5(0x11e)](_0xe34b06/0x2),_0x48ea22=_0x188ba4-Math['ceil'](_0x2b9549/0x2)+(_0x39ff3d[_0x1dede5(0xa5)]||0x0),_0x311a1e=_0x39ff3d[_0x1dede5(0x233)]||0x0;this['drawTextEx'](_0x59a509,_0x48ea22,_0x311a1e),this['_labelMode']=![];}}},Window_QTE_TimingBar[_0x53e3c7(0xdf)][_0x53e3c7(0x150)]=function(){const _0x3db2bd=_0x53e3c7;Window_QTE_HelpBase[_0x3db2bd(0xdf)][_0x3db2bd(0x150)]['call'](this),this[_0x3db2bd(0x254)]&&(this[_0x3db2bd(0x1dc)][_0x3db2bd(0x84)]=$gameSystem['numberFontFace'](),this[_0x3db2bd(0x1dc)][_0x3db2bd(0x15f)]=VisuMZ['QTE_TriggerSys'][_0x3db2bd(0x249)][_0x3db2bd(0xc7)][_0x3db2bd(0x104)]||$gameSystem[_0x3db2bd(0x19e)]());},Window_QTE_TimingBar[_0x53e3c7(0xdf)]['stopCursor']=function(){this['_qteCursorSprite']['stopCursor']();},Window_QTE_TimingBar[_0x53e3c7(0xdf)]['getCursorPosition']=function(){const _0x47dfeb=_0x53e3c7;return this[_0x47dfeb(0x75)][_0x47dfeb(0x22e)]();},VisuMZ['QTE_TriggerSys'][_0x53e3c7(0x192)]=function(_0x552879){const _0x285155=_0x53e3c7;var _0x4121b8,_0x5614fb,_0x13dc15;for(_0x13dc15=_0x552879['length']-0x1;_0x13dc15>0x0;_0x13dc15--){_0x4121b8=Math['floor'](Math[_0x285155(0x20c)]()*(_0x13dc15+0x1)),_0x5614fb=_0x552879[_0x13dc15],_0x552879[_0x13dc15]=_0x552879[_0x4121b8],_0x552879[_0x4121b8]=_0x5614fb;}return _0x552879;};