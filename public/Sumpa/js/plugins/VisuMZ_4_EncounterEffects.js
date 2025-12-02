//=============================================================================
// VisuStella MZ - Encounter Effects
// VisuMZ_4_EncounterEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_EncounterEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.EncounterEffects = VisuMZ.EncounterEffects || {};
VisuMZ.EncounterEffects.version = 1.11;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.11] [EncounterEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Encounter_Effects_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Both random encounters and on-screen encounters are pretty limited in what
 * they're able to do in RPG Maker MZ. This plugin expands their functionality
 * with some unique effects added through this plugin.
 * 
 * Both types of encounters can benefit from having more control over the
 * occurrence of Preemptive and Surprise Attacks. These can be enforced through
 * Plugin Commands and set up in a queue.
 * 
 * On-screen encounters can utilize alert functions that will cause events to
 * chase the player (or flee from them) once the player steps within their
 * visible detection range.
 * 
 * On-screen encounters can also utilize new functions added for use with the
 * Conditional Branch to determine which direction the player has approached
 * the on-screen encounter event from.
 * 
 * Random encounters can utilize repel and lure effects to nullify any random
 * encounters for a certain amount of steps or to increase their rate of
 * occurrence.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Take control of battle advantage. Enforce preemptive attacks, surprise
 *   attacks, neither, or chance it.
 * * Battle advantages can be set up in a queue for more interesting gameplay.
 * * Events can be given alert functionality to chase the player if the player
 *   steps within their vision range.
 * * Use Terrain Tags and Regions to set up tiles that will block detection
 *   range through line of sight usage.
 * * Events can trigger themselves upon touching followers instead of just
 *   players.
 * * Events can lock themselves in the direction they're facing when interacted
 *   with to make it easier to apply side attack and back attack effects.
 * * Random encounters can be bypassed through repel effects.
 * * Increase the rate of random encounters with lure effects.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Optional Plugin List ------
 *
 * * Pixi JS Filters*
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 * 
 * *Note* You can download the Pixi JS Filters plugin library from the below
 * URL or from the Encounter Effects product page. Install as a Tier 0 plugin.
 * 
 * *Note2* Pixi JS Filters perform differently on different machines/devices.
 * Please understand that this is outside of VisuStella's control.
 * 
 * URL: https://filters.pixijs.download/v3.1.0/pixi-filters.js
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
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
 * Battle Advantage
 * 
 * Upon starting a battle with forced advantages, any calculations made by
 * other means will be overwritten in favor of the declared forced advantage.
 *
 * ---
 * 
 * Battle Transitions
 * 
 * This plugin allows you to change the default battle transition to something
 * else provided by this plugin. Some of those effects require Pixi JS Filters,
 * so install that if needed. You can find the install for that in this help
 * file's "Requirements" section.
 * 
 * ---
 * 
 * Game_Player.encounterProgressValue
 * 
 * This function has been overwritten to allow for more flexibility over the
 * multipliers and effects applied through various effects and to allow for
 * the repel and lure effects to work as best as they can.
 * 
 * ---
 * 
 * Game_Event.updateSelfMovement
 * 
 * This function's original code will be ignored when the event is set to chase
 * or flee from the player after being alerted. After the alert and return
 * periods are over, self movement will resume as normal.
 * 
 * ---
 * 
 * Scene_Map.startEncounterEffect
 * Scene_Map.updateEncounterEffect
 * 
 * These functions will be drastically changed for the purpose of allowing the
 * new battle transitions added in version 1.11 of this plugin.
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
 * === Battle Advantage-Related Tags ===
 * 
 * ---
 *
 * <Preemptive>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   the preemptive advantage (in favor of the player party).
 *
 * ---
 *
 * <Surprise>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   the surprise advantage (in favor of the enemy party).
 *
 * ---
 *
 * <No Advantage>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   no advantage at all.
 *
 * ---
 *
 * <Chance>
 *
 * - Used for: Troop Name Tag
 * - Any troop with this tag in its name will have the battle start off with
 *   a chance for preemptive, surprise, or no advantages (calculated normally).
 *
 * ---
 * 
 * === Event Encounter-Related Notetags ===
 * 
 * ---
 *
 * <Follower Trigger>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - This event can trigger by touching a follower instead of only the player.
 *
 * ---
 *
 * <Encounter Direction Lock>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Normally when an event triggers without Direction Fix, it will face the
 *   player character. This tag prevents the event from facing the player, but
 *   still allows the event to freely turn directions.
 * - This is best used in conjunction with the Conditional Branch scripts.
 *
 * ---
 * 
 * === Alert-Related Notetags ===
 * 
 * ---
 *
 * <Alert>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This will use the default settings unless changed by other tags.
 *
 * ---
 *
 * <Alert Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Changes the event's alert detection range to 'x' tiles.
 * - Replace 'x' with a number value representing the number of tiles to use
 *   for its detection range.
 *
 * ---
 *
 * <Alert Dash>
 * <Alert Walk>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - If alerted, the event will dash/walk instead of whatever is set as a
 *   default setting within the Plugin Parameters.
 *
 * ---
 *
 * <Alert Time: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This determines the amount of time in frames for the event to chase the
 *   player continuously while the player is outside of the detection range.
 * - Replace 'x' with a number value representing the number of frames for the
 *   event to keep chasing the player with.
 * - If the player steps back into the alert detection range, the timer will be
 *   reset.
 *
 * ---
 * 
 * <Alert FoV Angle: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the Field of View angle to 'x' for the event.
 * - Replace 'x' with a number value representing the degrees of for the field
 *   of view angle used by the event to detect players.
 * - The angle will always be centered to the event's line of sight.
 * 
 * ---
 * 
 * <Alert Show FoV>
 * <Alert Hide FoV>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Shows/hides the field of view for the event.
 * - If an event's field of view is hidden, it can still chase players when
 *   entering the event's range.
 * 
 * ---
 *
 * <Alert Response: chase>
 * <Alert Response: rush>
 * <Alert Response: flee>
 * <Alert Response: random>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This determines how an alerted event will react.
 * - Chase: Use path finding to find a route to the player
 * - Rush: Rush directly at the player
 * - Flee: Run away from the player
 * - Random: Move in random directions
 *
 * ---
 *
 * <Response Balloon: name>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Determines the balloon displayed when initially alerted and responding.
 * - Replace 'name' with any of the following:
 *   - None
 *   - Exclamation
 *   - Question
 *   - Music Note
 *   - Heart
 *   - Angle
 *   - Sweat
 *   - Frustration
 *   - Silence
 *   - Light Bulb
 *   - Zzz
 *   - User-defined 1
 *   - User-defined 2
 *   - User-defined 3
 *   - User-defined 4
 *   - User-defined 5
 *
 * ---
 *
 * <Alert React Delay: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - When initially alerted, there is a small window of waiting before starting
 *   the chase.
 * - Replace 'x' with a number representing the number of frames for the
 *   initial reaction delay.
 *
 * ---
 *
 * <Alert Common Event: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Runs a Common Event when initially alerted.
 * - Replace 'x' with a number representing the ID of the Common Event to run.
 * - Use 0 to run no Common Events.
 *
 * ---
 *
 * <Alert Sound Name: name>
 * <Alert Sound Volume: x>
 * <Alert Sound Pitch: y>
 * <Alert Sound Pan: z>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Play this sound effect when the event is initially alerted.
 * - Replace 'name' with the filename of the sound effect found in /audio/se/
 *   to play. Do NOT include the file extension.
 * - Replace 'x' with a number representing the volume of the sound effect.
 * - Replace 'y' with a number representing the pitch of the sound effect.
 * - Replace 'z' with a number representing the pan of the sound effect.
 *
 * ---
 *
 * <Return Position>
 * <Stay Position>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Decide if the event will return back to its initial position after an
 *   alert chase is over.
 * - Or if it will stay where it currently is.
 *
 * ---
 *
 * <Return Time: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - This is the amount of time spent (in frames) after an alert chase is over
 *   but returning back to the event's original position.
 * - Replace 'x' with a number representing the number of frames for the
 *   duration between idling and returning.
 *
 * ---
 *
 * <Idle Balloon: name>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Determines the balloon displayed when beginning the idle phase after an
 *   alert chase is over but before returning back to the original position.
 * - Replace 'name' with any of the following:
 *   - None
 *   - Exclamation
 *   - Question
 *   - Music Note
 *   - Heart
 *   - Angle
 *   - Sweat
 *   - Frustration
 *   - Silence
 *   - Light Bulb
 *   - Zzz
 *   - User-defined 1
 *   - User-defined 2
 *   - User-defined 3
 *   - User-defined 4
 *   - User-defined 5
 *
 * ---
 *
 * <Returning Balloon: name>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Enables alert detection towards the player on the event.
 * - Determines the balloon displayed when the event starts returning back to
 *   the event's original position.
 * - Replace 'name' with any of the following:
 *   - None
 *   - Exclamation
 *   - Question
 *   - Music Note
 *   - Heart
 *   - Angle
 *   - Sweat
 *   - Frustration
 *   - Silence
 *   - Light Bulb
 *   - Zzz
 *   - User-defined 1
 *   - User-defined 2
 *   - User-defined 3
 *   - User-defined 4
 *   - User-defined 5
 *
 * ---
 * 
 * === Alert Vision Blocking-Related Notetags ===
 * 
 * ---
 *
 * <Block Vision Tag: x>
 * <Block Vision Tags: x, x, x>
 *
 * - Used for: Tileset and Map Notetags
 * - When using a specific tileset or on a specific map, tiles marked with the
 *   terrain tag 'x' will obscure the line of sight from the event to the
 *   player character.
 * - Replace 'x' with a number value representing the terrain tag used.
 * - This does NOT change the Field of View Alert Detection Range graphic.
 *
 * ---
 *
 * <Block Vision Region: x>
 * <Block Vision Regions: x, x, x>
 *
 * - Used for: Tileset and Map Notetags
 * - When using a specific tileset or on a specific map, tiles marked with the
 *   region ID 'x' will obscure the line of sight from the event to the
 *   player character.
 * - Replace 'x' with a number value representing the region ID used.
 * - This does NOT change the Field of View Alert Detection Range graphic.
 *
 * ---
 *
 * ============================================================================
 * Conditional Branch Usage
 * ============================================================================
 * 
 * For those wanting to use Conditional Branch event commands with this plugin
 * the following functions into the "Script" input fields of the respective
 * event commands.
 * 
 * === Conditional Branch Script Functions ===
 * 
 * These are newly added JavaScript functions that return a true/false value.
 * The functions are best used with the Conditional Branch script input field.
 * 
 * ---
 * 
 * this.checkEventFacingPlayerFront()
 * 
 * - Returns true if the event is facing the player's front.
 * 
 * ---
 * 
 * this.checkEventFacingPlayerBack()
 * 
 * - Returns true if the event is facing the player's back.
 * - Best used with a Surprise attack.
 * 
 * ---
 * 
 * this.checkEventFacingPlayerSide()
 * 
 * - Returns true if the event is facing the player's side.
 * 
 * ---
 * 
 * this.checkPlayerFacingEventFront()
 * 
 * - Returns true if the player is facing the event's front.
 * 
 * ---
 * 
 * this.checkPlayerFacingEventBack()
 * 
 * - Returns true if the player is facing the event's back.
 * - Best used with a Preemptive attack.
 * 
 * ---
 * 
 * this.checkPlayerFacingEventSide()
 * 
 * - Returns true if the player is facing the event's side.
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
 * === Advantage Plugin Commands ===
 * 
 * ---
 *
 * Advantage: Add to Queue
 * - Add (at the end) to the existing advantage queue the following encounter
 *  advantages for the upcoming battles.
 *
 *   Queue:
 *   - Add to the queue the following advantage options for the
 *     upcoming battles.
 *     - Preemptive (Player gains turn advantage)
 *     - Surprise (Enemies gain turn advantage)
 *     - No Advantage (Neither party has advantage)
 *     - Chance (Random encounter advantage chance)
 *
 * ---
 *
 * Advantage: Set Queue
 * - Declare the exact advantage queue for the upcoming battles.
 *
 *   Queue:
 *   - Add to the queue the following advantage options for the
 *     upcoming battles.
 *     - Preemptive (Player gains turn advantage)
 *     - Surprise (Enemies gain turn advantage)
 *     - No Advantage (Neither party has advantage)
 *     - Chance (Random encounter advantage chance)
 *
 * ---
 *
 * Advantage: Reset Queue
 * - Resets the advantage queue for battles.
 *
 * ---
 * 
 * === Alert Plugin Commands ===
 * 
 * ---
 *
 * Alert: Stealth Mode
 * - Changes the stealth mode setting for the player.
 *
 *   Stealth Mode:
 *   - If Stealth Mode is on, bypass unnoticed alerts.
 *   - Already alerted events will stay alert.
 *
 * ---
 * 
 * === Battle Transition Plugin Commands ===
 * 
 * ---
 * 
 * Battle Transition: Change Type
 * - Changes the battle transition type.
 * 
 *   Transition Type:
 *   - Pick a battle transition type to change to.
 *     - Random - Picks a random effect from list
 *     - Aberration - Chromatic Aberration (Requires PIXI JS Filters)
 *     - Block - Blocks Out Screen
 *     - Blur - Blur Bright Spread Out
 *     - Glitch - Glitchy Screen (Requires PIXI JS Filters)
 *     - Hue - Hue Shift Zoom
 *     - Pixel - Pixelates Screen (Requires PIXI JS Filters)
 *     - Spiral - Screen Spirals Out (Requires PIXI JS Filters)
 *     - Static - Static Noise Fade (Requires PIXI JS Filters)
 *     - Twirl - Twirls Screen (Requires PIXI JS Filters)
 *     - Warp - Warp Speed Spread (Requires PIXI JS Filters)
 *     - Zoom - RPG Maker MZ Default Transition
 *   - Some of these require PIXI JS Filters. If it is not installed, then no
 *     special transition will be played if that transition is selected.
 * 
 * ---
 * 
 * Battle Transition: Duration
 * - Changes the battle transition duration.
 * 
 *   Duration:
 *   - What is the duration of every battle transition in frames?
 *   - 60 frames = 1 second.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Advantage Settings
 * ============================================================================
 *
 * Advantage common event settings related to enemy encounters.
 *
 * ---
 *
 * Settings
 * 
 *   Preemptive Event:
 *   - Run this Common Event upon a preemptive advantage.
 *   - Use 0 to run no Common Events.
 * 
 *   Surprise Event:
 *   - Run this Common Event upon a surprise advantage.
 *   - Use 0 to run no Common Events.
 * 
 *   No Advantage Event:
 *   - Run this Common Event when no advantage is given.
 *   - Use 0 to run no Common Events.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Alert Settings
 * ============================================================================
 *
 * These are settings for alerting events. Used mainly for events chasing the
 * player.
 * 
 * How alert detection works is when the player steps with an event (who has
 * an alert notetag or comment tag), the event will enter alert mode. At the
 * very start, a response balloon will play along with an initialy delay. If
 * there is a common event set, the common event will play immediately.
 * 
 * After the initial delay is over, the event will begin its chasing phase.
 * Although it's called the chasing phase, it can react differently by using
 * path finding to find a way to the player, rushing directly in a straight
 * line at the player, running away from the player, or moving about randomly.
 * 
 * If the player stays out of the event's alert detection range for a specific
 * amount of time, the event will enter its idle phase. An idle balloon will
 * play and the event will wait a short duration.
 * 
 * After this short duration is over, the event will return back to its
 * original position (if desired). Upon starting its return to its original
 * position, it will play the returning balloon.
 * 
 * During the idle and return phases, if the player steps in range of the
 * event's alert range, it will begin the chase all over again.
 *
 * ---
 *
 * Alert
 * 
 *   Detection Range:
 *   - Default tile range for event to detect the player in.
 * 
 *   Alert Dash:
 *   - Alerted events use dashing speed.
 * 
 *   Alert Time:
 *   - Number of frames the alerted event will attempt to chase the player.
 *
 * ---
 *
 * Field of View
 * 
 *   Angle Range:
 *   - The angle range used to determine the event's field of view.
 * 
 *   Show Range:
 *   - Show the field of view of events?
 * 
 *   Color 1:
 *   Color 2:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Response
 * 
 *   Response Type:
 *   - What kind of default response behavior do you want?
 *     - Chase: Use path finding to find a route to the player
 *     - Rush: Rush directly at the player
 *     - Flee: Run away from the player
 *     - Random: Move in random directions
 * 
 *   Response Balloon:
 *   - What kind of balloon should the event play when detecting the player?
 * 
 *   Common Event:
 *   - Run this Common Event when the player is detected.
 *   - Use 0 for no Common Event.
 * 
 *   Reaction Delay:
 *   - Number of frames for the event to stand still before beginning
 *     the chase.
 *
 * ---
 *
 * Sound
 * 
 *   Filename:
 *   - Filename of the sound effect played when alerted.
 * 
 *   Volume:
 *   - Volume of the sound effect played.
 * 
 *   Pitch:
 *   - Pitch of the sound effect played.
 * 
 *   Pan:
 *   - Pan of the sound effect played.
 *
 * ---
 *
 * Return
 * 
 *   Return Home:
 *   - After finishing a chase, return back to the home position?
 * 
 *   Idle Wait:
 *   - Number of frames to wait before returning home.
 * 
 *   Idle Balloon:
 *   - Play this balloon when an event is about to return.
 * 
 *   Returning Balloon:
 *   - Play this balloon when an event begins returning.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle Transition Settings
 * ============================================================================
 *
 * As of this plugin's version 1.11 update, you can now change the battle
 * transitions used before entering battle.
 *
 * ---
 * 
 * Settings
 * 
 *   Default Battle Transition:
 *   - Select the default battle transition.
 *   - This can be changed via Plugin Command.
 *     - Random - Picks a random effect from list
 *     - Aberration - Chromatic Aberration (Requires PIXI JS Filters)
 *     - Block - Blocks Out Screen
 *     - Blur - Blur Bright Spread Out
 *     - Glitch - Glitchy Screen (Requires PIXI JS Filters)
 *     - Hue - Hue Shift Zoom
 *     - Pixel - Pixelates Screen (Requires PIXI JS Filters)
 *     - Spiral - Screen Spirals Out (Requires PIXI JS Filters)
 *     - Static - Static Noise Fade (Requires PIXI JS Filters)
 *     - Twirl - Twirls Screen (Requires PIXI JS Filters)
 *     - Warp - Warp Speed Spread (Requires PIXI JS Filters)
 *     - Zoom - RPG Maker MZ Default Transition
 *   - Some of these require PIXI JS Filters. If it is not installed, then no
 *     special transition will be played if that transition is selected.
 * 
 *     Duration:
 *     - What is the duration of every battle transition in frames?
 *     - 60 frames = 1 second.
 * 
 *     Random List:
 *     - Pick battle transition types used for "random".
 *     - PIXI JS Filter types will be removed if not available.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Encounter Multipliers
 * ============================================================================
 *
 * Encounter multiplier settings regarding enemy encounters.
 *
 * ---
 *
 * Bush Multiplier
 * 
 *   Parameter:
 *   - Multiplier for how fast encounters occur by when the player is walking
 *     through bushes.
 * 
 *   Boat Multiplier:
 *   - Multiplier for how fast encounters occur by when the player is
 *     traveling via boat.
 * 
 *   Ship Multiplier:
 *   - Multiplier for how fast encounters occur by when the player is
 *     traveling via ship.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Repel/Lure Settings
 * ============================================================================
 *
 * Repel/Lure settings regarding enemy encounters.
 *
 * ---
 *
 * Settings
 * 
 *   Repel Variable:
 *   - Select a variable where if the value is above 0, it will
 *     repel encounters.
 *   - Each step reduces variable value by 1.
 * 
 *   Wear Off Common Event:
 *   - Run this Common Event when Repel reaches 0.
 *   - Use 0 to run no Common Events.
 *
 * ---
 *
 * Settings
 * 
 *   Lure Variable:
 *   - Select a variable where if the value is above 0, it will
 *     lure encounters.
 *   - Each step reduces variable value by 1.
 * 
 *   Wear Off Common Event:
 *   - Run this Common Event when Lure reaches 0.
 *   - Use 0 to run no Common Events.
 * 
 *   Lure Multiplier:
 *   - Multiplier for how fast encounters occur by when the lure
 *     effect is active.
 * 
 *   Lure Increase:
 *   - Flat increase for how fast encounters occur by when the lure
 *     effect is active.
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
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.11: September 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added new section in Major Features section for new Battle Transitions.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Parameters > Default Battle Transition
 * **** Select the default battle transition (10 new ones, 1 MZ original).
 * *** Parameters > Default Battle Transition > Duration
 * **** What is the duration of every battle transition in frames?
 * *** Parameters > Default Battle Transition > Random List
 * **** Pick battle transition types used for "random".
 * ** New Plugin Commands added by Irina:
 * *** Battle Transition: Change Type
 * **** Changes the battle transition type.
 * *** Battle Transition: Duration
 * **** Changes the battle transition duration.
 * 
 * Version 1.10: January 20, 2023
 * * Feature Update!
 * ** When events with <Alert> and <Follower Trigger> are chasing the player,
 *    events will no longer factor in the position of followers while determing
 *    a path and go around them. Instead, they will charge at the player as if
 *    the followers aren't there. Update made by Arisu.
 * 
 * Version 1.09: September 15, 2022
 * * Compatibility Update!
 * ** This plugin now works better with the Events and Movement Core's stop
 *    event movement plugin parameters and commands. Update made by Arisu.
 * 
 * Version 1.08: February 17, 2022
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.07: January 6, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.06: August 20, 2021
 * * Compatibility Update!
 * ** Better compatibility with Event and Movement Core's spawn functions.
 *    Update made by Arisu.
 * 
 * Version 1.05: January 15, 2021
 * * Documentation Update!
 * ** Help file updated for features that were left out by accident.
 * *** Notetag/Comment Tag: <Alert FoV Angle: x>
 * *** Notetag/Comment Tag: <Alert Hide FoV>
 * *** Notetag/Comment Tag: <Alert Show FoV>
 * 
 * Version 1.04: December 11, 2020
 * * Bug Fixes!
 * ** Without the Events and Movement Core, events returning home after a
 *    failed alert chase will no longer crash the game.
 *    Fix by Yanfly and Shiro.
 * 
 * Version 1.03: December 4, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: November 29, 2020
 * * Feature Update!
 * ** Initialization of the encounter effects no only occur if the event's
 *    current page settings have been altered. Change made by Arisu and Shaz.
 * 
 * Version 1.01: November 22, 2020
 * * Bug Fixes!
 * ** Certain notetags will no longer cause crashes. Fix made by Yanfly.
 * ** Erased events will have their alert sprite removed, too. Fix made by
 *    Yanfly.
 *
 * Version 1.00: December 11, 2020
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
 * @command AdvantageAddQueue
 * @text Advantage: Add to Queue
 * @desc Add (at the end) to the existing advantage queue the following
 * encounter advantages for the upcoming battles.
 *
 * @arg Queue:arraystr
 * @text Queue
 * @type select[]
 * @option Preemptive (Player gains turn advantage)
 * @value preemptive
 * @option Surprise (Enemies gain turn advantage)
 * @value surprise
 * @option No Advantage (Neither party has advantage)
 * @value no advantage
 * @option Chance (Random encounter advantage chance)
 * @value chance
 * @desc Add to the queue the following advantage options for
 * the upcoming battles.
 * @default ["preemptive"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AdvantageSetQueue
 * @text Advantage: Set Queue
 * @desc Declare the exact advantage queue for the upcoming battles.
 *
 * @arg Queue:arraystr
 * @text Queue
 * @type select[]
 * @option Preemptive (Player gains turn advantage)
 * @value preemptive
 * @option Surprise (Enemies gain turn advantage)
 * @value surprise
 * @option No Advantage (Neither party has advantage)
 * @value no advantage
 * @option Chance (Random encounter advantage chance)
 * @value chance
 * @desc Change the queue to the following advantage options for
 * the upcoming battles.
 * @default ["preemptive"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AdvantageResetQueue
 * @text Advantage: Reset Queue
 * @desc Resets the advantage queue for battles.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Alert
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AlertStealthMode
 * @text Alert: Stealth Mode
 * @desc Changes the stealth mode setting for the player.
 *
 * @arg StealthMode:eval
 * @text Stealth Mode
 * @type boolean
 * @on Stealth On
 * @off No Steath
 * @desc If Stealth Mode is on, bypass unnoticed alerts.
 * Already alerted events will stay alert.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_BattleTransition
 * @text -
 * @desc -
 *
 * @ ---------------------------------------------------------------------------
 *
 * @command BattleTransitionChangeType
 * @text Battle Transition: Change Type
 * @desc Changes the battle transition type.
 *
 * @arg Type:str
 * @text Transition Type
 * @type select
 * @option Random - Picks a random effect from list
 * @value random
 * @option Aberration - Chromatic Aberration (Requires PIXI JS Filters)
 * @value aberration
 * @option Block - Blocks Out Screen
 * @value block
 * @option Blur - Blur Bright Spread Out
 * @value blur
 * @option Glitch - Glitchy Screen (Requires PIXI JS Filters)
 * @value glitch
 * @option Hue - Hue Shift Zoom
 * @value hue
 * @option Pixel - Pixelates Screen (Requires PIXI JS Filters)
 * @value pixel
 * @option Spiral - Screen Spirals Out (Requires PIXI JS Filters)
 * @value spiral
 * @option Static - Static Noise Fade (Requires PIXI JS Filters)
 * @value static
 * @option Twirl - Twirls Screen (Requires PIXI JS Filters)
 * @value twirl
 * @option Warp - Warp Speed Spread (Requires PIXI JS Filters)
 * @value warp
 * @option Zoom - RPG Maker MZ Default Transition
 * @value zoom
 * @desc Pick a battle transition type to change to.
 * @default random
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleTransitionDuration
 * @text Battle Transition: Duration
 * @desc Changes the battle transition duration.
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc What is the duration of every battle transition in frames?
 * 60 frames = 1 second.
 * @default 60
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
 * @param EncounterEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Advantage:struct
 * @text Advantage Settings
 * @type struct<Advantage>
 * @desc Advantage common event settings related to enemy encounters.
 * @default {"Preemptive:num":"0","Surprise:num":"0","Normal:num":"0"}
 *
 * @param Alert:struct
 * @text Alert Settings
 * @type struct<Alert>
 * @desc Settings alerting events. Used mainly for events chasing the player.
 * @default {"Alert":"","AlertRange:num":"4","AlertDash:eval":"true","AlertLock:num":"600","FoV":"","FovAngle:num":"120","ShowFoV:eval":"true","FovColor1:str":"rgba(255, 0, 0, 0)","FovColor2:str":"rgba(255, 0, 0, 0.5)","Response":"","ResponseType:str":"chase","ResponseBalloon:str":"Exclamation","CommonEvent:num":"0","ReactDelay:num":"80","Sound":"","SoundName:str":"Attack1","SoundVolume:num":"90","SoundPitch:num":"120","SoundPan:num":"0","Return":"","ReturnHome:eval":"true","ReturnWait:num":"180","ReturnStartBalloon:str":"Silence","ReturnEndBalloon:str":"Frustration"}
 * 
 * @param BattleTransition:str
 * @text Default Battle Transition
 * @type select
 * @option Random - Picks a random effect from list
 * @value random
 * @option Aberration - Chromatic Aberration (Requires PIXI JS Filters)
 * @value aberration
 * @option Block - Blocks Out Screen
 * @value block
 * @option Blur - Blur Bright Spread Out
 * @value blur
 * @option Glitch - Glitchy Screen (Requires PIXI JS Filters)
 * @value glitch
 * @option Hue - Hue Shift Zoom
 * @value hue
 * @option Pixel - Pixelates Screen (Requires PIXI JS Filters)
 * @value pixel
 * @option Spiral - Screen Spirals Out (Requires PIXI JS Filters)
 * @value spiral
 * @option Static - Static Noise Fade (Requires PIXI JS Filters)
 * @value static
 * @option Twirl - Twirls Screen (Requires PIXI JS Filters)
 * @value twirl
 * @option Warp - Warp Speed Spread (Requires PIXI JS Filters)
 * @value warp
 * @option Zoom - RPG Maker MZ Default Transition
 * @value zoom
 * @desc Select the default battle transition.
 * This can be changed via Plugin Command.
 * @default random
 *
 * @param BattleTransitionDuration:num
 * @text Duration
 * @parent BattleTransition:str
 * @type number
 * @min 1
 * @desc What is the duration of every battle transition in frames?
 * 60 frames = 1 second.
 * @default 60
 * 
 * @param TransitionRandomList:arraystr
 * @text Random List
 * @parent BattleTransition:str
 * @type select[]
 * @option Aberration - Chromatic Aberration (Requires PIXI JS Filters)
 * @value aberration
 * @option Block - Blocks Out Screen
 * @value block
 * @option Blur Bright - Blur Bright Spread Out
 * @value blur
 * @option Glitch - Glitchy Screen (Requires PIXI JS Filters)
 * @value glitch
 * @option Hue - Hue Shift Zoom
 * @value hue
 * @option Pixel - Pixelates Screen (Requires PIXI JS Filters)
 * @value pixel
 * @option Spiral - Screen spirals out (Requires PIXI JS Filters)
 * @value spiral
 * @option Static - Static Noise Fade (Requires PIXI JS Filters)
 * @value static
 * @option Twirl - Twirls Screen (Requires PIXI JS Filters)
 * @value twirl
 * @option Warp - Warp Speed Spread (Requires PIXI JS Filters)
 * @value warp
 * @option Zoom - RPG Maker MZ Default Transition
 * @value zoom
 * @desc Pick battle transition types used for "random".
 * PIXI JS Filter types will be removed if not available.
 * @default ["aberration","block","blur","glitch","hue","pixel","spiral","static","twirl","warp","zoom"]
 *
 * @param EncounterMultiplier:struct
 * @text Encounter Multipliers
 * @type struct<EncounterMultiplier>
 * @desc Encounter multiplier settings regarding enemy encounters.
 * @default {"BushMultiplier:num":"2.00","BoatMultiplier:num":"1.00","ShipMultiplier:num":"0.50"}
 *
 * @param RepelLure:struct
 * @text Repel/Lure Settings
 * @type struct<RepelLure>
 * @desc Repel/Lure settings regarding enemy encounters.
 * @default {"RepelVariable:num":"31","RepelEvent:num":"6","LureVariable:num":"32","LureEvent:num":"8","LureRate:num":"4.0","LureFlat:num":"1"}
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
 * Advantage Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Advantage:
 *
 * @param Preemptive:num
 * @text Preemptive Event
 * @parent Advantage
 * @type common_event
 * @desc Run this Common Event upon a preemptive advantage.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param Surprise:num
 * @text Surprise Event
 * @parent Advantage
 * @type common_event
 * @desc Run this Common Event upon a surprise advantage.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param Normal:num
 * @text No Advantage Event
 * @parent Advantage
 * @type common_event
 * @desc Run this Common Event when no advantage is given.
 * Use 0 to run no Common Events.
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Alert Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Alert:
 *
 * @param Alert
 * 
 * @param AlertRange:num
 * @text Detection Range
 * @parent Alert
 * @type number
 * @min 1
 * @desc Default tile range for event to detect the player in.
 * @default 4
 *
 * @param AlertDash:eval
 * @text Alert Dash
 * @parent Alert
 * @type boolean
 * @on Dash
 * @off Walk
 * @desc Alerted events use dashing speed.
 * @default true
 * 
 * @param AlertLock:num
 * @text Alert Time
 * @parent Alert
 * @type number
 * @min 1
 * @desc Number of frames the alerted event will attempt to chase the player.
 * @default 600
 *
 * @param FoV
 * @text Field of View
 * 
 * @param FovAngle:num
 * @text Angle Range
 * @parent FoV
 * @type number
 * @min 1
 * @max 360
 * @desc The angle range used to determine the event's field of view.
 * @default 120
 *
 * @param ShowFoV:eval
 * @text Show Range
 * @parent FoV
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the field of view of events?
 * @default true
 *
 * @param FovColor1:str
 * @text Color 1
 * @parent FoV
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(255, 0, 0, 0)
 *
 * @param FovColor2:str
 * @text Color 2
 * @parent FoV
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(255, 0, 0, 0.5)
 *
 * @param Response
 *
 * @param ResponseType:str
 * @text Response Type
 * @parent Response
 * @type select
 * @option Chase: Use path finding to find a route to the player
 * @value chase
 * @option Rush: Rush directly at the player
 * @value rush
 * @option Flee: Run away from the player
 * @value flee
 * @option Random: Move in random directions
 * @value random
 * @desc What kind of default response behavior do you want?
 * @default chase
 *
 * @param ResponseBalloon:str
 * @text Response Balloon
 * @parent Response
 * @type select
 * @option Exclamation
 * @option Question
 * @option Music Note
 * @option Heart
 * @option Angle
 * @option Sweat
 * @option Frustration
 * @option Silence
 * @option Light Bulb
 * @option Zzz
 * @option User-defined 1
 * @option User-defined 2
 * @option User-defined 3
 * @option User-defined 4
 * @option User-defined 5
 * @desc What kind of balloon should the event play when detecting the player?
 * @default Exclamation
 *
 * @param CommonEvent:num
 * @text Common Event
 * @parent Response
 * @type common_event
 * @desc Run this Common Event when the player is detected.
 * Use 0 for no Common Event.
 * @default 0
 * 
 * @param ReactDelay:num
 * @text Reaction Delay
 * @parent Response
 * @type number
 * @min 1
 * @desc Number of frames for the event to stand still before beginning the chase.
 * @default 80
 *
 * @param Sound
 *
 * @param SoundName:str
 * @text Filename
 * @type file
 * @parent Sound
 * @dir audio/se/
 * @desc Filename of the sound effect played when alerted.
 * @default Attack1
 *
 * @param SoundVolume:num
 * @text Volume
 * @type number
 * @parent Sound
 * @max 100
 * @desc Volume of the sound effect played.
 * @default 90
 *
 * @param SoundPitch:num
 * @text Pitch
 * @type number
 * @parent Sound
 * @desc Pitch of the sound effect played.
 * @default 120
 *
 * @param SoundPan:num
 * @text Pan
 * @parent Sound
 * @desc Pan of the sound effect played.
 * @default 0
 *
 * @param Return
 *
 * @param ReturnHome:eval
 * @text Return Home
 * @parent Return
 * @type boolean
 * @on Return
 * @off Stay
 * @desc After finishing a chase, return back to the home position?
 * @default true
 * 
 * @param ReturnWait:num
 * @text Idle Wait
 * @parent Return
 * @type number
 * @min 1
 * @desc Number of frames to wait before returning home.
 * @default 180
 *
 * @param ReturnStartBalloon:str
 * @text Idle Balloon
 * @parent Return
 * @type select
 * @option Exclamation
 * @option Question
 * @option Music Note
 * @option Heart
 * @option Angle
 * @option Sweat
 * @option Frustration
 * @option Silence
 * @option Light Bulb
 * @option Zzz
 * @option User-defined 1
 * @option User-defined 2
 * @option User-defined 3
 * @option User-defined 4
 * @option User-defined 5
 * @desc Play this balloon when an event is about to return.
 * @default Silence
 *
 * @param ReturnEndBalloon:str
 * @text Returning Balloon
 * @parent Return
 * @type select
 * @option Exclamation
 * @option Question
 * @option Music Note
 * @option Heart
 * @option Angle
 * @option Sweat
 * @option Frustration
 * @option Silence
 * @option Light Bulb
 * @option Zzz
 * @option User-defined 1
 * @option User-defined 2
 * @option User-defined 3
 * @option User-defined 4
 * @option User-defined 5
 * @desc Play this balloon when an event begins returning.
 * @default Frustration
 *
 */
/* ----------------------------------------------------------------------------
 * Encounter Multipliers Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EncounterMultiplier:
 *
 * @param BushMultiplier:num
 * @text Bush Multiplier
 * @desc Multiplier for how fast encounters occur by when the
 * player is walking through bushes.
 * @default 2.00
 *
 * @param BoatMultiplier:num
 * @text Boat Multiplier
 * @desc Multiplier for how fast encounters occur by when the
 * player is traveling via boat.
 * @default 1.00
 *
 * @param ShipMultiplier:num
 * @text Ship Multiplier
 * @desc Multiplier for how fast encounters occur by when the
 * player is traveling via ship.
 * @default 0.50
 *
 */
/* ----------------------------------------------------------------------------
 * Repel/Lure Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~RepelLure:
 *
 * @param RepelVariable:num
 * @text Repel Variable
 * @parent Repel/Lure
 * @type variable
 * @desc Select a variable where if the value is above 0, it will
 * repel encounters. Each step reduces variable value by 1.
 * @default 0
 *
 * @param RepelEvent:num
 * @text Wear Off Common Event
 * @parent RepelVariable:num
 * @type common_event
 * @desc Run this Common Event when Repel reaches 0.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param LureVariable:num
 * @text Lure Variable
 * @parent Repel/Lure
 * @type variable
 * @desc Select a variable where if the value is above 0, it will
 * lure encounters. Each step reduces variable value by 1.
 * @default 0
 *
 * @param LureEvent:num
 * @text Wear Off Common Event
 * @parent LureVariable:num
 * @type common_event
 * @desc Run this Common Event when Lure reaches 0.
 * Use 0 to run no Common Events.
 * @default 0
 *
 * @param LureRate:num
 * @text Lure Multiplier
 * @parent LureVariable:num
 * @desc Multiplier for how fast encounters occur by when the
 * lure effect is active.
 * @default 4.0
 *
 * @param LureFlat:num
 * @text Lure Increase
 * @parent LureVariable:num
 * @desc Flat increase for how fast encounters occur by when the
 * lure effect is active.
 * @default 1
 *
 */
//=============================================================================

const _0x2a5d29=_0x1060;(function(_0x1259e4,_0x3d00e3){const _0x470e2f=_0x1060,_0x411930=_0x1259e4();while(!![]){try{const _0x4effea=parseInt(_0x470e2f(0x1cf))/0x1+-parseInt(_0x470e2f(0x271))/0x2*(-parseInt(_0x470e2f(0x1b8))/0x3)+parseInt(_0x470e2f(0x290))/0x4+-parseInt(_0x470e2f(0x319))/0x5+parseInt(_0x470e2f(0x2d2))/0x6+-parseInt(_0x470e2f(0x199))/0x7+-parseInt(_0x470e2f(0x20c))/0x8*(-parseInt(_0x470e2f(0x265))/0x9);if(_0x4effea===_0x3d00e3)break;else _0x411930['push'](_0x411930['shift']());}catch(_0x31bd51){_0x411930['push'](_0x411930['shift']());}}}(_0x383f,0x4014a));var label='EncounterEffects',tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x527d18){const _0x28b145=_0x1060;return _0x527d18['status']&&_0x527d18[_0x28b145(0x331)][_0x28b145(0x268)]('['+label+']');})[0x0];function _0x1060(_0x7682f9,_0x509eb3){const _0x383fba=_0x383f();return _0x1060=function(_0x106067,_0x71c839){_0x106067=_0x106067-0x195;let _0x59a271=_0x383fba[_0x106067];return _0x59a271;},_0x1060(_0x7682f9,_0x509eb3);}VisuMZ[label][_0x2a5d29(0x261)]=VisuMZ[label][_0x2a5d29(0x261)]||{},VisuMZ[_0x2a5d29(0x22d)]=function(_0x51b720,_0x1e3ed8){const _0x3fb165=_0x2a5d29;for(const _0xc717b8 in _0x1e3ed8){if(_0xc717b8[_0x3fb165(0x1f9)](/(.*):(.*)/i)){const _0xe0c6cb=String(RegExp['$1']),_0x351647=String(RegExp['$2'])[_0x3fb165(0x29b)]()[_0x3fb165(0x1c6)]();let _0x3ca0a0,_0x2ebe03,_0xf4c11a;switch(_0x351647){case _0x3fb165(0x22b):_0x3ca0a0=_0x1e3ed8[_0xc717b8]!==''?Number(_0x1e3ed8[_0xc717b8]):0x0;break;case _0x3fb165(0x297):_0x2ebe03=_0x1e3ed8[_0xc717b8]!==''?JSON[_0x3fb165(0x1d6)](_0x1e3ed8[_0xc717b8]):[],_0x3ca0a0=_0x2ebe03[_0x3fb165(0x27e)](_0x5b950a=>Number(_0x5b950a));break;case _0x3fb165(0x30c):_0x3ca0a0=_0x1e3ed8[_0xc717b8]!==''?eval(_0x1e3ed8[_0xc717b8]):null;break;case'ARRAYEVAL':_0x2ebe03=_0x1e3ed8[_0xc717b8]!==''?JSON['parse'](_0x1e3ed8[_0xc717b8]):[],_0x3ca0a0=_0x2ebe03[_0x3fb165(0x27e)](_0x8b1c95=>eval(_0x8b1c95));break;case _0x3fb165(0x1f3):_0x3ca0a0=_0x1e3ed8[_0xc717b8]!==''?JSON['parse'](_0x1e3ed8[_0xc717b8]):'';break;case'ARRAYJSON':_0x2ebe03=_0x1e3ed8[_0xc717b8]!==''?JSON[_0x3fb165(0x1d6)](_0x1e3ed8[_0xc717b8]):[],_0x3ca0a0=_0x2ebe03[_0x3fb165(0x27e)](_0x57b8cf=>JSON[_0x3fb165(0x1d6)](_0x57b8cf));break;case _0x3fb165(0x1b1):_0x3ca0a0=_0x1e3ed8[_0xc717b8]!==''?new Function(JSON[_0x3fb165(0x1d6)](_0x1e3ed8[_0xc717b8])):new Function(_0x3fb165(0x301));break;case _0x3fb165(0x239):_0x2ebe03=_0x1e3ed8[_0xc717b8]!==''?JSON[_0x3fb165(0x1d6)](_0x1e3ed8[_0xc717b8]):[],_0x3ca0a0=_0x2ebe03[_0x3fb165(0x27e)](_0x2fee76=>new Function(JSON[_0x3fb165(0x1d6)](_0x2fee76)));break;case _0x3fb165(0x31d):_0x3ca0a0=_0x1e3ed8[_0xc717b8]!==''?String(_0x1e3ed8[_0xc717b8]):'';break;case _0x3fb165(0x34a):_0x2ebe03=_0x1e3ed8[_0xc717b8]!==''?JSON[_0x3fb165(0x1d6)](_0x1e3ed8[_0xc717b8]):[],_0x3ca0a0=_0x2ebe03[_0x3fb165(0x27e)](_0x30a114=>String(_0x30a114));break;case'STRUCT':_0xf4c11a=_0x1e3ed8[_0xc717b8]!==''?JSON[_0x3fb165(0x1d6)](_0x1e3ed8[_0xc717b8]):{},_0x3ca0a0=VisuMZ[_0x3fb165(0x22d)]({},_0xf4c11a);break;case _0x3fb165(0x241):_0x2ebe03=_0x1e3ed8[_0xc717b8]!==''?JSON['parse'](_0x1e3ed8[_0xc717b8]):[],_0x3ca0a0=_0x2ebe03['map'](_0x1fd59d=>VisuMZ[_0x3fb165(0x22d)]({},JSON[_0x3fb165(0x1d6)](_0x1fd59d)));break;default:continue;}_0x51b720[_0xe0c6cb]=_0x3ca0a0;}}return _0x51b720;},(_0x242bcc=>{const _0x7bd081=_0x2a5d29,_0xc50941=_0x242bcc[_0x7bd081(0x2b2)];for(const _0x551855 of dependencies){if(!Imported[_0x551855]){alert(_0x7bd081(0x24a)['format'](_0xc50941,_0x551855)),SceneManager[_0x7bd081(0x1c5)]();break;}}const _0x16bdd4=_0x242bcc[_0x7bd081(0x331)];if(_0x16bdd4[_0x7bd081(0x1f9)](/\[Version[ ](.*?)\]/i)){const _0x1cd8fc=Number(RegExp['$1']);_0x1cd8fc!==VisuMZ[label][_0x7bd081(0x32e)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0xc50941,_0x1cd8fc)),SceneManager[_0x7bd081(0x1c5)]());}if(_0x16bdd4[_0x7bd081(0x1f9)](/\[Tier[ ](\d+)\]/i)){const _0x2b4fb5=Number(RegExp['$1']);_0x2b4fb5<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0xc50941,_0x2b4fb5,tier)),SceneManager[_0x7bd081(0x1c5)]()):tier=Math[_0x7bd081(0x1df)](_0x2b4fb5,tier);}VisuMZ[_0x7bd081(0x22d)](VisuMZ[label][_0x7bd081(0x261)],_0x242bcc[_0x7bd081(0x230)]);})(pluginData),PluginManager[_0x2a5d29(0x218)](pluginData[_0x2a5d29(0x2b2)],_0x2a5d29(0x2e6),_0x4c3428=>{const _0x14b075=_0x2a5d29;VisuMZ[_0x14b075(0x22d)](_0x4c3428,_0x4c3428);const _0x30fc76=_0x4c3428[_0x14b075(0x263)];$gameSystem[_0x14b075(0x243)](_0x30fc76);}),PluginManager[_0x2a5d29(0x218)](pluginData[_0x2a5d29(0x2b2)],_0x2a5d29(0x296),_0xafd207=>{const _0x3716d9=_0x2a5d29;VisuMZ[_0x3716d9(0x22d)](_0xafd207,_0xafd207);const _0x39ce6d=_0xafd207[_0x3716d9(0x263)];$gameSystem[_0x3716d9(0x2b1)](_0x39ce6d);}),PluginManager[_0x2a5d29(0x218)](pluginData[_0x2a5d29(0x2b2)],_0x2a5d29(0x343),_0x44b19d=>{VisuMZ['ConvertParams'](_0x44b19d,_0x44b19d),$gameSystem['setForcedAdvantage']([]);}),PluginManager[_0x2a5d29(0x218)](pluginData[_0x2a5d29(0x2b2)],_0x2a5d29(0x2f1),_0x498265=>{const _0x50bda9=_0x2a5d29;VisuMZ[_0x50bda9(0x22d)](_0x498265,_0x498265);const _0x1c1703=_0x498265['StealthMode'];$gamePlayer[_0x50bda9(0x1cc)](_0x1c1703);}),PluginManager[_0x2a5d29(0x218)](pluginData[_0x2a5d29(0x2b2)],_0x2a5d29(0x1e2),_0x59ce85=>{const _0x580fa9=_0x2a5d29;VisuMZ[_0x580fa9(0x22d)](_0x59ce85,_0x59ce85);const _0x12a2f7=_0x59ce85[_0x580fa9(0x267)];$gameSystem[_0x580fa9(0x2c1)](_0x12a2f7[_0x580fa9(0x323)]()['trim']());}),PluginManager['registerCommand'](pluginData['name'],_0x2a5d29(0x1e0),_0x4fb692=>{VisuMZ['ConvertParams'](_0x4fb692,_0x4fb692);const _0x466e2f=Number(_0x4fb692['Duration'])||0x0;$gameSystem['setBattleTransitionDuration'](_0x466e2f);}),VisuMZ[_0x2a5d29(0x232)]['RegExp']={'Preemptive':/<(?:PREEMPTIVE|PRE-EMPTIVE|PRE EMPTIVE)>/i,'Surprise':/<(?:SURPRISE|SURPRISED)>/i,'NoAdvantage':/<NO ADVANTAGE>/i,'Chance':/<CHANCE>/i,'FollowerTrigger':/<(?:FOLLOWER TRIGGER|FOLLOWERTRIGGER)>/i,'TouchDirectionLock':/<(?:ENCOUNTER LOCK|ENCOUNTER DIRECTION LOCK)>/i,'AlertDefault':/<ALERT>/i,'AlertRange':/<ALERT RANGE:[ ](\d+)>/i,'AlertDash':/<ALERT DASH>/i,'AlertWalk':/<ALERT WALK>/i,'AlertLock':/<ALERT TIME:[ ](\d+)>/i,'AlertFovAngle':/<ALERT FOV ANGLE:[ ](\d+)>/i,'AlertShowFov':/<ALERT SHOW FOV>/i,'AlertHideFov':/<ALERT HIDE FOV>/i,'AlertResponse':/<ALERT RESPONSE:[ ](.*)>/i,'AlertBalloon':/<(?:ALERT|RESPONSE) BALLOON:[ ](.*)>/i,'AlertReactDelay':/<ALERT REACT DELAY:[ ](\d+)>/i,'AlertCommonEvent':/<ALERT COMMON EVENT:[ ](\d+)>/i,'AlertSoundName':/<ALERT SOUND NAME:[ ](.*)>/i,'AlertSoundVolume':/<ALERT SOUND VOLUME:[ ](\d+)>/i,'AlertSoundPitch':/<ALERT SOUND PITCH:[ ](\d+)>/i,'AlertSoundPan':/<ALERT SOUND PAN:[ ](.*)>/i,'ReturnPosition':/<RETURN POSITION>/i,'StayPosition':/<STAY POSITION>/i,'ReturnStartBalloon':/<IDLE BALLOON:[ ](.*)>/i,'ReturnEndBalloon':/<RETURNING BALLOON:[ ](.*)>/i,'ReturnWait':/<RETURN TIME:[ ](\d+)>/i,'BlockVisionTag':/<(?:BLOCK|BLOCKED) VISION (?:TAG|TAGS):[ ](.*)>/i,'BlockVisionRegion':/<(?:BLOCK|BLOCKED) VISION (?:REGION|REGIONS):[ ](.*)>/i},VisuMZ[_0x2a5d29(0x232)]['Scene_Boot_onDatabaseLoaded']=Scene_Boot[_0x2a5d29(0x1bb)][_0x2a5d29(0x2fe)],Scene_Boot[_0x2a5d29(0x1bb)][_0x2a5d29(0x2fe)]=function(){const _0x24e628=_0x2a5d29;VisuMZ['EncounterEffects'][_0x24e628(0x2cc)][_0x24e628(0x22e)](this),VisuMZ[_0x24e628(0x232)][_0x24e628(0x19a)]();},VisuMZ['EncounterEffects'][_0x2a5d29(0x19a)]=function(){const _0x38b838=_0x2a5d29,_0x66d34c=VisuMZ['EncounterEffects']['Settings']['TransitionRandomList'],_0x23ec48=PIXI[_0x38b838(0x2b6)][_0x38b838(0x204)];if(!_0x23ec48){const _0x20f40b=[_0x38b838(0x30b),_0x38b838(0x196),_0x38b838(0x1fb),_0x38b838(0x282),_0x38b838(0x299),_0x38b838(0x20b),_0x38b838(0x33c)];for(const _0x360bc4 of _0x20f40b)_0x66d34c[_0x38b838(0x227)](_0x360bc4);}},VisuMZ[_0x2a5d29(0x232)]['BattleManager_startBattle']=BattleManager[_0x2a5d29(0x1ac)],BattleManager[_0x2a5d29(0x1ac)]=function(){const _0x5b9fc1=_0x2a5d29;this[_0x5b9fc1(0x209)](),VisuMZ['EncounterEffects'][_0x5b9fc1(0x1ee)][_0x5b9fc1(0x22e)](this),this[_0x5b9fc1(0x291)]();},BattleManager[_0x2a5d29(0x209)]=function(){const _0x480bc4=_0x2a5d29,_0x4997af=$gameSystem[_0x480bc4(0x2cd)]();if(!_0x4997af)return;switch(_0x4997af['toLowerCase']()[_0x480bc4(0x1c6)]()){case _0x480bc4(0x2d5):this[_0x480bc4(0x2de)]=!![],this[_0x480bc4(0x1d4)]=![];break;case _0x480bc4(0x1f1):this[_0x480bc4(0x2de)]=![],this[_0x480bc4(0x1d4)]=!![];break;case _0x480bc4(0x225):this[_0x480bc4(0x2de)]=![],this['_surprise']=![];break;case _0x480bc4(0x222):VisuMZ[_0x480bc4(0x203)][_0x480bc4(0x1ff)][_0x480bc4(0x22e)](this);break;}},BattleManager[_0x2a5d29(0x291)]=function(){const _0x5e5b46=_0x2a5d29,_0xb85f0b=VisuMZ[_0x5e5b46(0x232)][_0x5e5b46(0x261)][_0x5e5b46(0x1e7)];if(!_0xb85f0b)return;let _0x56b3f8=0x0;if(this[_0x5e5b46(0x2de)])_0x56b3f8=_0xb85f0b[_0x5e5b46(0x2e8)]||0x0;else this['_surprise']?_0x56b3f8=_0xb85f0b[_0x5e5b46(0x274)]||0x0:_0x56b3f8=_0xb85f0b[_0x5e5b46(0x237)]||0x0;_0x56b3f8>0x0&&$gameTemp['reserveCommonEvent'](_0x56b3f8);},VisuMZ[_0x2a5d29(0x232)][_0x2a5d29(0x27a)]=Game_System[_0x2a5d29(0x1bb)][_0x2a5d29(0x1a9)],Game_System[_0x2a5d29(0x1bb)][_0x2a5d29(0x1a9)]=function(){const _0x4c39cb=_0x2a5d29;VisuMZ[_0x4c39cb(0x232)]['Game_System_initialize'][_0x4c39cb(0x22e)](this),this[_0x4c39cb(0x2a9)](),this['initEncEffBattleTransition']();},Game_System[_0x2a5d29(0x1bb)][_0x2a5d29(0x2a9)]=function(){const _0x13e1be=_0x2a5d29;this[_0x13e1be(0x26f)]=[];},Game_System[_0x2a5d29(0x1bb)][_0x2a5d29(0x2f5)]=function(){const _0x1e6e4a=_0x2a5d29;return this['_forcedAdvantage']===undefined&&this[_0x1e6e4a(0x2a9)](),this['_forcedAdvantage'];},Game_System[_0x2a5d29(0x1bb)][_0x2a5d29(0x2cd)]=function(){const _0x5afb80=_0x2a5d29;if($gameTroop&&$gameTroop['troop']()){const _0x170f2c=VisuMZ['EncounterEffects'][_0x5afb80(0x310)],_0x59d4dc=$gameTroop[_0x5afb80(0x2b7)]()['name'];if(_0x59d4dc[_0x5afb80(0x1f9)](_0x170f2c[_0x5afb80(0x2e8)]))return _0x5afb80(0x2d5);else{if(_0x59d4dc[_0x5afb80(0x1f9)](_0x170f2c[_0x5afb80(0x274)]))return _0x5afb80(0x1f1);else{if(_0x59d4dc['match'](_0x170f2c[_0x5afb80(0x22c)]))return _0x5afb80(0x225);else{if(_0x59d4dc[_0x5afb80(0x1f9)](_0x170f2c[_0x5afb80(0x2d6)]))return _0x5afb80(0x222);}}}}return this['getForcedAdvantage']()[_0x5afb80(0x352)]();},Game_System[_0x2a5d29(0x1bb)][_0x2a5d29(0x2b1)]=function(_0x2ab3cd){const _0x2a2abb=_0x2a5d29;this[_0x2a2abb(0x26f)]===undefined&&this[_0x2a2abb(0x2a9)](),this[_0x2a2abb(0x26f)]=_0x2ab3cd;},Game_System['prototype'][_0x2a5d29(0x243)]=function(_0x4ab8d9){const _0x56484c=_0x2a5d29;this['_forcedAdvantage']===undefined&&this[_0x56484c(0x2a9)](),this[_0x56484c(0x26f)]=this[_0x56484c(0x26f)][_0x56484c(0x281)](_0x4ab8d9);},Game_System['prototype'][_0x2a5d29(0x1aa)]=function(){const _0x206863=_0x2a5d29,_0x548235=VisuMZ[_0x206863(0x232)][_0x206863(0x261)];this[_0x206863(0x23e)]=_0x548235[_0x206863(0x1f2)],this[_0x206863(0x2f7)]=_0x548235[_0x206863(0x1e0)];},Game_System[_0x2a5d29(0x1bb)]['getBattleTransitionType']=function(){const _0x5c38c0=_0x2a5d29;if(this[_0x5c38c0(0x23e)]===undefined)this[_0x5c38c0(0x1aa)]();if(this[_0x5c38c0(0x23e)]===_0x5c38c0(0x28b)){const _0x4b1a8c=VisuMZ[_0x5c38c0(0x232)][_0x5c38c0(0x261)]['TransitionRandomList'];return _0x4b1a8c[Math[_0x5c38c0(0x1cb)](_0x4b1a8c['length'])];}else return this['_battleTransitionType'];},Game_System[_0x2a5d29(0x1bb)]['setBattleTransitionType']=function(_0x46c44b){const _0x2f4d9e=_0x2a5d29;if(this['_battleTransitionType']===undefined)this[_0x2f4d9e(0x1aa)]();this[_0x2f4d9e(0x23e)]=_0x46c44b;},Game_System[_0x2a5d29(0x1bb)][_0x2a5d29(0x327)]=function(){const _0x33509c=_0x2a5d29;if(this[_0x33509c(0x2f7)]===undefined)this[_0x33509c(0x1aa)]();return this[_0x33509c(0x2f7)];},Game_System[_0x2a5d29(0x1bb)][_0x2a5d29(0x1c9)]=function(_0x20068d){const _0x4481ea=_0x2a5d29;if(this[_0x4481ea(0x2f7)]===undefined)this[_0x4481ea(0x1aa)]();this['_battleTransitionDuration']=Number(_0x20068d);},VisuMZ[_0x2a5d29(0x232)][_0x2a5d29(0x1b0)]=Game_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x2fa)],Game_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x2fa)]=function(_0x119fc7){const _0x216bc3=_0x2a5d29;VisuMZ[_0x216bc3(0x232)]['Game_Map_setup']['call'](this,_0x119fc7),this[_0x216bc3(0x33d)](),this['setupEncounterEffectsData']();},Game_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x33d)]=function(){const _0x45c67b=_0x2a5d29;this['_alertBlockVisionTags']=[],this[_0x45c67b(0x338)]=[];},Game_Map[_0x2a5d29(0x1bb)]['setupEncounterEffectsData']=function(){const _0x589d89=_0x2a5d29,_0x2b18cd=this[_0x589d89(0x286)]();if(!_0x2b18cd)return;const _0x2f1fa8=VisuMZ['EncounterEffects'][_0x589d89(0x310)],_0x3ac2c2=_0x2b18cd['note'],_0x2f3ebe=$dataMap?$dataMap[_0x589d89(0x32a)]:'';if(_0x3ac2c2[_0x589d89(0x1f9)](_0x2f1fa8[_0x589d89(0x1e4)])){const _0x21df2e=String(RegExp['$1'])['split'](',')['map'](_0x3f9c8c=>Number(_0x3f9c8c));this['_alertBlockVisionTags']=this['_alertBlockVisionTags'][_0x589d89(0x281)](_0x21df2e);}if(_0x3ac2c2[_0x589d89(0x1f9)](_0x2f1fa8[_0x589d89(0x2e1)])){const _0x44c3ea=String(RegExp['$1'])['split'](',')[_0x589d89(0x27e)](_0x3bef71=>Number(_0x3bef71));this[_0x589d89(0x338)]=this[_0x589d89(0x338)][_0x589d89(0x281)](_0x44c3ea);}if(_0x2f3ebe[_0x589d89(0x1f9)](_0x2f1fa8[_0x589d89(0x1e4)])){const _0x4f9399=String(RegExp['$1'])[_0x589d89(0x2ee)](',')['map'](_0x456a7a=>Number(_0x456a7a));this[_0x589d89(0x1dd)]=this[_0x589d89(0x1dd)][_0x589d89(0x281)](_0x4f9399);}if(_0x2f3ebe['match'](_0x2f1fa8['BlockVisionRegion'])){const _0x1a4b09=String(RegExp['$1'])[_0x589d89(0x2ee)](',')['map'](_0x4d0e43=>Number(_0x4d0e43));this['_alertBlockVisionRegions']=this[_0x589d89(0x338)]['concat'](_0x1a4b09);}},Game_Map[_0x2a5d29(0x1bb)]['isAlertVisionBlocked']=function(_0x5609c9,_0x514503){const _0x353983=_0x2a5d29;if(this[_0x353983(0x1dd)]===undefined)return![];if(this[_0x353983(0x338)]===undefined)return![];const _0x245fa4=this[_0x353983(0x1f8)](_0x5609c9,_0x514503);if(this[_0x353983(0x1dd)][_0x353983(0x268)](_0x245fa4))return!![];const _0x3d9f34=this[_0x353983(0x2f6)](_0x5609c9,_0x514503);if(this['_alertBlockVisionRegions'][_0x353983(0x268)](_0x3d9f34))return!![];return![];},Game_CharacterBase[_0x2a5d29(0x1bb)][_0x2a5d29(0x210)]=function(_0x332ed0){const _0xa1dfaf=_0x2a5d29;return;console[_0xa1dfaf(0x2ae)]('\x20This\x20X:\x20'+this['x']+',\x20\x20This\x20Y:\x20'+this['y']),console[_0xa1dfaf(0x2ae)](_0xa1dfaf(0x31e)+_0x332ed0['x']+_0xa1dfaf(0x31a)+_0x332ed0['y']);},Game_CharacterBase[_0x2a5d29(0x1bb)]['isFacingTowards']=function(_0xcbb9a3){const _0x5e8fd7=_0x2a5d29;switch(this[_0x5e8fd7(0x22f)]()){case 0x1:return[0x8,0x9,0x6][_0x5e8fd7(0x348)](_0xcbb9a3[_0x5e8fd7(0x22f)]());case 0x2:return[0x7,0x8,0x9][_0x5e8fd7(0x348)](_0xcbb9a3['direction']());case 0x3:return[0x4,0x7,0x8][_0x5e8fd7(0x348)](_0xcbb9a3[_0x5e8fd7(0x22f)]());case 0x4:return[0x9,0x6,0x3]['contains'](_0xcbb9a3['direction']());case 0x6:return[0x7,0x4,0x1][_0x5e8fd7(0x348)](_0xcbb9a3[_0x5e8fd7(0x22f)]());case 0x7:return[0x2,0x3,0x6][_0x5e8fd7(0x348)](_0xcbb9a3[_0x5e8fd7(0x22f)]());case 0x8:return[0x1,0x2,0x3][_0x5e8fd7(0x348)](_0xcbb9a3['direction']());case 0x9:return[0x4,0x1,0x2][_0x5e8fd7(0x348)](_0xcbb9a3[_0x5e8fd7(0x22f)]());}return![];},Game_CharacterBase[_0x2a5d29(0x1bb)][_0x2a5d29(0x32f)]=function(_0x3eaa41){const _0x33e5b6=_0x2a5d29;switch(this[_0x33e5b6(0x22f)]()){case 0x1:return[0x4,0x1,0x2]['contains'](_0x3eaa41['direction']());case 0x2:return[0x1,0x2,0x3][_0x33e5b6(0x348)](_0x3eaa41[_0x33e5b6(0x22f)]());case 0x3:return[0x2,0x3,0x6]['contains'](_0x3eaa41['direction']());case 0x4:return[0x7,0x4,0x1][_0x33e5b6(0x348)](_0x3eaa41[_0x33e5b6(0x22f)]());case 0x6:return[0x9,0x6,0x3]['contains'](_0x3eaa41[_0x33e5b6(0x22f)]());case 0x7:return[0x4,0x7,0x8][_0x33e5b6(0x348)](_0x3eaa41[_0x33e5b6(0x22f)]());case 0x8:return[0x7,0x8,0x9][_0x33e5b6(0x348)](_0x3eaa41[_0x33e5b6(0x22f)]());case 0x9:return[0x8,0x9,0x6][_0x33e5b6(0x348)](_0x3eaa41[_0x33e5b6(0x22f)]());}return![];},Game_CharacterBase['prototype'][_0x2a5d29(0x1f7)]=function(_0x1b0098){const _0x4b4f92=_0x2a5d29;switch(this[_0x4b4f92(0x22f)]()){case 0x1:return[0x4,0x7,0x8,0x2,0x3,0x6][_0x4b4f92(0x348)](_0x1b0098[_0x4b4f92(0x22f)]());case 0x2:return[0x7,0x4,0x1,0x9,0x6,0x3][_0x4b4f92(0x348)](_0x1b0098[_0x4b4f92(0x22f)]());case 0x3:return[0x4,0x1,0x2,0x8,0x9,0x6]['contains'](_0x1b0098['direction']());case 0x4:return[0x7,0x8,0x9,0x1,0x2,0x3][_0x4b4f92(0x348)](_0x1b0098[_0x4b4f92(0x22f)]());case 0x6:return[0x7,0x8,0x9,0x1,0x2,0x3][_0x4b4f92(0x348)](_0x1b0098[_0x4b4f92(0x22f)]());case 0x7:return[0x4,0x1,0x2,0x8,0x9,0x6][_0x4b4f92(0x348)](_0x1b0098[_0x4b4f92(0x22f)]());case 0x8:return[0x7,0x4,0x1,0x9,0x6,0x3][_0x4b4f92(0x348)](_0x1b0098[_0x4b4f92(0x22f)]());case 0x9:return[0x4,0x7,0x8,0x2,0x3,0x6][_0x4b4f92(0x348)](_0x1b0098[_0x4b4f92(0x22f)]());}return![];},Game_CharacterBase[_0x2a5d29(0x1bb)][_0x2a5d29(0x2df)]=function(_0x1a5d74){const _0x1f2941=_0x2a5d29;this[_0x1f2941(0x210)](_0x1a5d74);switch(this[_0x1f2941(0x22f)]()){case 0x1:return _0x1a5d74['y']>this['y'];case 0x2:return _0x1a5d74['y']>this['y'];case 0x3:return _0x1a5d74['y']>this['y'];case 0x4:return _0x1a5d74['x']<this['x'];case 0x6:return _0x1a5d74['x']>this['x'];case 0x7:return _0x1a5d74['y']<this['y'];case 0x8:return _0x1a5d74['y']<this['y'];case 0x9:return _0x1a5d74['y']<this['y'];}return![];},Game_CharacterBase[_0x2a5d29(0x1bb)][_0x2a5d29(0x2d0)]=function(_0x489e8f){const _0x4b6dbd=_0x2a5d29;this[_0x4b6dbd(0x210)](_0x489e8f);switch(this['direction']()){case 0x1:return _0x489e8f['y']<this['y'];case 0x2:return _0x489e8f['y']<this['y'];case 0x3:return _0x489e8f['y']<this['y'];case 0x4:return _0x489e8f['x']>this['x'];case 0x6:return _0x489e8f['x']<this['x'];case 0x7:return _0x489e8f['y']>this['y'];case 0x8:return _0x489e8f['y']>this['y'];case 0x9:return _0x489e8f['y']>this['y'];}return![];},Game_CharacterBase[_0x2a5d29(0x1bb)][_0x2a5d29(0x255)]=function(_0x4e7ba6){const _0x576758=_0x2a5d29;this[_0x576758(0x210)](_0x4e7ba6);switch(this[_0x576758(0x22f)]()){case 0x1:return this['x']<_0x4e7ba6['x']&&this['y']>_0x4e7ba6['y']||this['x']>_0x4e7ba6['x']&&this['y']<_0x4e7ba6['y'];case 0x2:return this['x']!==_0x4e7ba6['x'];case 0x3:return this['x']>_0x4e7ba6['x']&&this['y']>_0x4e7ba6['y']||this['x']<_0x4e7ba6['x']&&this['y']<_0x4e7ba6['y'];case 0x4:return this['y']!==_0x4e7ba6['y'];break;case 0x6:return this['y']!==_0x4e7ba6['y'];break;case 0x7:return this['x']>_0x4e7ba6['x']&&this['y']>_0x4e7ba6['y']||this['x']<_0x4e7ba6['x']&&this['y']<_0x4e7ba6['y'];case 0x8:return this['x']!==_0x4e7ba6['x'];case 0x9:return this['x']<_0x4e7ba6['x']&&this['y']>_0x4e7ba6['y']||this['x']>_0x4e7ba6['x']&&this['y']<_0x4e7ba6['y'];}return![];},VisuMZ[_0x2a5d29(0x232)][_0x2a5d29(0x273)]=Game_Player[_0x2a5d29(0x1bb)][_0x2a5d29(0x1a0)],Game_Player[_0x2a5d29(0x1bb)][_0x2a5d29(0x1a0)]=function(){const _0x167f96=_0x2a5d29;VisuMZ[_0x167f96(0x232)][_0x167f96(0x273)][_0x167f96(0x22e)](this),this[_0x167f96(0x312)]();},Game_Player['prototype'][_0x2a5d29(0x312)]=function(){this['_alertStealthMode']=![];},Game_Player[_0x2a5d29(0x1bb)][_0x2a5d29(0x254)]=function(){const _0x5aa075=_0x2a5d29;return this[_0x5aa075(0x2c5)]===undefined&&this['initEncounterEffects'](),this[_0x5aa075(0x2c5)];},Game_Player[_0x2a5d29(0x1bb)][_0x2a5d29(0x1cc)]=function(_0x2ef43e){const _0x2dae46=_0x2a5d29;this[_0x2dae46(0x2c5)]===undefined&&this['initEncounterEffects'](),this['_alertStealthMode']=_0x2ef43e;},Game_Player['prototype'][_0x2a5d29(0x1e1)]=function(){const _0x1c99fd=_0x2a5d29;if(this[_0x1c99fd(0x1d2)]())return this[_0x1c99fd(0x350)](),0x0;const _0x5d05ac=VisuMZ['EncounterEffects'][_0x1c99fd(0x261)][_0x1c99fd(0x29c)];if(!_0x5d05ac)return 0x1;let _0x36da93=0x1;return $gameMap[_0x1c99fd(0x2e9)](this['x'],this['y'])&&(_0x36da93*=_0x5d05ac['BushMultiplier']),$gameParty['hasEncounterHalf']()&&(_0x36da93*=0.5),this[_0x1c99fd(0x2a5)]()&&(_0x36da93*=_0x5d05ac[_0x1c99fd(0x307)]),this[_0x1c99fd(0x2b0)]()&&(_0x36da93*=_0x5d05ac[_0x1c99fd(0x212)]),this['isLureEncounters']()&&(_0x36da93=this[_0x1c99fd(0x277)](_0x36da93)),_0x36da93;},Game_Player[_0x2a5d29(0x1bb)][_0x2a5d29(0x1d2)]=function(){const _0x126953=_0x2a5d29,_0x2be4b2=VisuMZ[_0x126953(0x232)][_0x126953(0x261)][_0x126953(0x272)];if(!_0x2be4b2)return![];if(_0x2be4b2['RepelVariable']<=0x0)return![];const _0xf3d438=$gameVariables[_0x126953(0x2dd)](_0x2be4b2['RepelVariable'])||0x0;return _0xf3d438>0x0;},Game_Player[_0x2a5d29(0x1bb)][_0x2a5d29(0x350)]=function(){const _0xfa0f2b=_0x2a5d29,_0x4fa994=VisuMZ[_0xfa0f2b(0x232)][_0xfa0f2b(0x261)][_0xfa0f2b(0x272)];if(!_0x4fa994)return;if(_0x4fa994[_0xfa0f2b(0x2d3)]<=0x0)return;let _0x3b6793=$gameVariables['value'](_0x4fa994['RepelVariable'])||0x0;const _0x3b9e4f=_0x3b6793>0x0;_0x3b9e4f&&(_0x3b6793--,$gameVariables[_0xfa0f2b(0x207)](_0x4fa994[_0xfa0f2b(0x2d3)],_0x3b6793),_0x3b6793<=0x0&&_0x4fa994[_0xfa0f2b(0x213)]>0x0&&$gameTemp[_0xfa0f2b(0x2f2)](_0x4fa994[_0xfa0f2b(0x213)]));},Game_Player[_0x2a5d29(0x1bb)][_0x2a5d29(0x30f)]=function(){const _0x2aee7d=_0x2a5d29,_0x141c0f=VisuMZ[_0x2aee7d(0x232)][_0x2aee7d(0x261)][_0x2aee7d(0x272)];if(!_0x141c0f)return![];if(_0x141c0f[_0x2aee7d(0x2a3)]<=0x0)return![];const _0x59e679=$gameVariables[_0x2aee7d(0x2dd)](_0x141c0f[_0x2aee7d(0x2a3)])||0x0;return _0x59e679>0x0;},Game_Player[_0x2a5d29(0x1bb)][_0x2a5d29(0x277)]=function(_0x5935d1){const _0x2e0fe8=_0x2a5d29,_0x5beb35=VisuMZ[_0x2e0fe8(0x232)][_0x2e0fe8(0x261)][_0x2e0fe8(0x272)];if(!_0x5beb35)return _0x5935d1;if(_0x5beb35['LureVariable']<=0x0)return _0x5935d1;let _0x4e56b6=$gameVariables['value'](_0x5beb35[_0x2e0fe8(0x2a3)])||0x0;const _0x198cb8=_0x4e56b6>0x0;return _0x198cb8&&(_0x4e56b6--,$gameVariables[_0x2e0fe8(0x207)](_0x5beb35['LureVariable'],_0x4e56b6),_0x4e56b6<=0x0&&_0x5beb35[_0x2e0fe8(0x19b)]>0x0&&$gameTemp[_0x2e0fe8(0x2f2)](_0x5beb35[_0x2e0fe8(0x19b)])),_0x5935d1*=_0x5beb35[_0x2e0fe8(0x335)],_0x5935d1+=_0x5beb35[_0x2e0fe8(0x280)],_0x5935d1;},VisuMZ['EncounterEffects'][_0x2a5d29(0x19e)]=Game_Follower[_0x2a5d29(0x1bb)][_0x2a5d29(0x2a7)],Game_Follower[_0x2a5d29(0x1bb)][_0x2a5d29(0x2a7)]=function(){const _0x26c715=_0x2a5d29;if($gameTemp[_0x26c715(0x262)])return![];return VisuMZ[_0x26c715(0x232)][_0x26c715(0x19e)]['call'](this);},VisuMZ['EncounterEffects'][_0x2a5d29(0x351)]=Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x2ad)],Game_Event['prototype'][_0x2a5d29(0x2ad)]=function(){const _0x439bcc=_0x2a5d29;VisuMZ[_0x439bcc(0x232)]['Game_Event_clearPageSettings'][_0x439bcc(0x22e)](this),this['initEncounterEffectsEffects']();},VisuMZ['EncounterEffects'][_0x2a5d29(0x32d)]=Game_Event['prototype'][_0x2a5d29(0x21b)],Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x21b)]=function(){const _0x33dc8f=_0x2a5d29;VisuMZ[_0x33dc8f(0x232)][_0x33dc8f(0x32d)][_0x33dc8f(0x22e)](this),this[_0x33dc8f(0x1c1)]();},Game_Event[_0x2a5d29(0x1bb)]['setupEncounterEffectsEffects']=function(){const _0x4987b6=_0x2a5d29;this[_0x4987b6(0x1ae)](),this['setupEncounterEffectsNotetags'](),this[_0x4987b6(0x2a6)]();},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x32c)]=function(_0x1eb4fd){const _0x56996a=_0x2a5d29;if(!this[_0x56996a(0x309)]())return;const _0x5b8f3b=this[_0x56996a(0x309)]()[_0x56996a(0x32a)];if(_0x5b8f3b==='')return;this['checkEncounterEffectsStringTags'](_0x5b8f3b);},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x2a6)]=function(_0x410a63){const _0x51c59a=_0x2a5d29;if(!this['event']())return;if(!this['page']())return;const _0x44b9b2=this[_0x51c59a(0x1d5)]();let _0x59f8d4='';for(const _0x58e421 of _0x44b9b2){if([0x6c,0x198][_0x51c59a(0x268)](_0x58e421[_0x51c59a(0x1f4)])){if(_0x59f8d4!=='')_0x59f8d4+='\x0a';_0x59f8d4+=_0x58e421[_0x51c59a(0x230)][0x0];}}this['checkEncounterEffectsStringTags'](_0x59f8d4);},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x1ae)]=function(){const _0x13d496=_0x2a5d29;this['_EncounterEffectsFollowerTrigger']=![],this[_0x13d496(0x2ff)]=![],this[_0x13d496(0x231)]();},Game_Event[_0x2a5d29(0x1bb)]['checkEncounterEffectsStringTags']=function(_0x56d125){const _0x5f2dc6=_0x2a5d29,_0x52e48b=VisuMZ[_0x5f2dc6(0x232)][_0x5f2dc6(0x310)];_0x56d125[_0x5f2dc6(0x1f9)](_0x52e48b['FollowerTrigger'])&&(this[_0x5f2dc6(0x25f)]=!![],this[_0x5f2dc6(0x276)]=0x2),_0x56d125[_0x5f2dc6(0x1f9)](_0x52e48b[_0x5f2dc6(0x246)])&&(this[_0x5f2dc6(0x2ff)]=!![]),this['checkEncounterEffectsStringTagsChase'](_0x56d125);},VisuMZ['EncounterEffects'][_0x2a5d29(0x1d0)]=Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x253)],Game_Event['prototype'][_0x2a5d29(0x253)]=function(_0x517bf4,_0x4637ef){const _0x3ddab5=_0x2a5d29;VisuMZ[_0x3ddab5(0x232)][_0x3ddab5(0x1d0)]['call'](this,_0x517bf4,_0x4637ef),this[_0x3ddab5(0x260)](_0x517bf4,_0x4637ef);},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x260)]=function(_0x15633f,_0x3493fd){const _0x52d25f=_0x2a5d29;if(!this[_0x52d25f(0x25f)])return;if($gameMap[_0x52d25f(0x247)]())return;if(this[_0x52d25f(0x276)]!==0x2)return;if(this[_0x52d25f(0x30a)]())return;if(!this[_0x52d25f(0x2ca)]())return;const _0x4d31ed=$gamePlayer[_0x52d25f(0x252)]()[_0x52d25f(0x1fc)]();for(const _0x1a8cab of _0x4d31ed){if(!_0x1a8cab)continue;if(_0x1a8cab['pos'](_0x15633f,_0x3493fd)){this['start']();break;}}},VisuMZ[_0x2a5d29(0x232)][_0x2a5d29(0x22a)]=Game_Event[_0x2a5d29(0x1bb)]['lock'],Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x293)]=function(){const _0x44683c=_0x2a5d29;this['_processEncounterDirectionLock']=!!this[_0x44683c(0x2ff)],VisuMZ['EncounterEffects'][_0x44683c(0x22a)][_0x44683c(0x22e)](this),this[_0x44683c(0x19c)]=undefined;},VisuMZ['EncounterEffects']['Game_Character_turnTowardPlayer']=Game_Character[_0x2a5d29(0x1bb)][_0x2a5d29(0x1d7)],Game_Character[_0x2a5d29(0x1bb)]['turnTowardPlayer']=function(){const _0xe5ea64=_0x2a5d29;if(this[_0xe5ea64(0x19c)])return;VisuMZ['EncounterEffects'][_0xe5ea64(0x34e)]['call'](this);},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x231)]=function(){const _0x3fa69f=_0x2a5d29,_0x4af047=VisuMZ[_0x3fa69f(0x232)][_0x3fa69f(0x261)][_0x3fa69f(0x23c)];this[_0x3fa69f(0x219)]={'enabled':![],'alerted':![],'alertRange':_0x4af047[_0x3fa69f(0x2e0)],'alertDash':_0x4af047[_0x3fa69f(0x2fd)],'alertLock':_0x4af047[_0x3fa69f(0x234)],'chaseTime':_0x4af047[_0x3fa69f(0x234)],'fovAngle':_0x4af047[_0x3fa69f(0x316)],'showFov':_0x4af047[_0x3fa69f(0x1e6)],'response':_0x4af047['ResponseType'],'alertBalloon':VisuMZ[_0x3fa69f(0x232)][_0x3fa69f(0x1ed)](_0x4af047['ResponseBalloon']),'commonEvent':_0x4af047[_0x3fa69f(0x2ef)],'reactDelay':_0x4af047[_0x3fa69f(0x1c7)],'reactTime':_0x4af047['ReactDelay'],'alertSoundName':_0x4af047[_0x3fa69f(0x321)],'alertSoundVolume':_0x4af047['SoundVolume'],'alertSoundPitch':_0x4af047[_0x3fa69f(0x1e5)],'alertSoundPan':_0x4af047['SoundPan'],'returnStartBalloon':VisuMZ['EncounterEffects'][_0x3fa69f(0x1ed)](_0x4af047['ReturnStartBalloon']),'returnEndBalloon':VisuMZ[_0x3fa69f(0x232)][_0x3fa69f(0x1ed)](_0x4af047[_0x3fa69f(0x26a)]),'returnAfter':_0x4af047[_0x3fa69f(0x1c4)],'returnWaiting':![],'returnTime':_0x4af047['ReturnWait'],'returnWait':_0x4af047[_0x3fa69f(0x1ab)],'returning':![],'returnX':this['x'],'returnY':this['y'],'returnDir':this[_0x3fa69f(0x22f)]()};},VisuMZ[_0x2a5d29(0x232)][_0x2a5d29(0x1ed)]=function(_0x16397d){const _0x2da956=_0x2a5d29;let _0x4b81ff=0x0;switch(_0x16397d[_0x2da956(0x29b)]()[_0x2da956(0x1c6)]()){case'!':case _0x2da956(0x25c):_0x4b81ff=0x1;break;case'?':case _0x2da956(0x1d1):_0x4b81ff=0x2;break;case _0x2da956(0x2c6):case _0x2da956(0x342):case _0x2da956(0x27d):case _0x2da956(0x275):case _0x2da956(0x346):_0x4b81ff=0x3;break;case _0x2da956(0x1eb):case _0x2da956(0x19d):_0x4b81ff=0x4;break;case _0x2da956(0x202):_0x4b81ff=0x5;break;case'SWEAT':_0x4b81ff=0x6;break;case _0x2da956(0x1a6):case _0x2da956(0x1a2):case _0x2da956(0x34b):_0x4b81ff=0x7;break;case _0x2da956(0x21f):case _0x2da956(0x205):_0x4b81ff=0x8;break;case _0x2da956(0x24b):case'BULB':case'LIGHT\x20BULB':case _0x2da956(0x34f):case _0x2da956(0x1fa):_0x4b81ff=0x9;break;case'Z':case'ZZ':case _0x2da956(0x2b8):case _0x2da956(0x33e):_0x4b81ff=0xa;break;case _0x2da956(0x285):_0x4b81ff=0xb;break;case _0x2da956(0x1ce):_0x4b81ff=0xc;break;case'USER-DEFINED\x203':_0x4b81ff=0xd;break;case _0x2da956(0x279):_0x4b81ff=0xe;break;case _0x2da956(0x1e3):_0x4b81ff=0xf;break;}return _0x4b81ff;},Game_Event['prototype']['checkEncounterEffectsStringTagsChase']=function(_0x136863){const _0x5e027e=_0x2a5d29,_0x154015=VisuMZ[_0x5e027e(0x232)]['RegExp'],_0x295bd5=this[_0x5e027e(0x219)];_0x136863[_0x5e027e(0x1f9)](_0x154015['AlertDefault'])&&(_0x295bd5[_0x5e027e(0x20a)]=!![]);_0x136863[_0x5e027e(0x1f9)](_0x154015[_0x5e027e(0x2e0)])&&(_0x295bd5[_0x5e027e(0x20a)]=!![],_0x295bd5[_0x5e027e(0x24d)]=Number(RegExp['$1'])||0x1);_0x136863['match'](_0x154015[_0x5e027e(0x2fd)])&&(_0x295bd5[_0x5e027e(0x20a)]=!![],_0x295bd5[_0x5e027e(0x30e)]=![]);_0x136863[_0x5e027e(0x1f9)](_0x154015[_0x5e027e(0x201)])&&(_0x295bd5[_0x5e027e(0x20a)]=!![],_0x295bd5[_0x5e027e(0x30e)]=![]);_0x136863[_0x5e027e(0x1f9)](_0x154015[_0x5e027e(0x234)])&&(_0x295bd5[_0x5e027e(0x20a)]=!![],_0x295bd5[_0x5e027e(0x2e2)]=Number(RegExp['$1'])||0x1,_0x295bd5[_0x5e027e(0x2bd)]=Number(RegExp['$1'])||0x1);_0x136863['match'](_0x154015[_0x5e027e(0x26d)])&&(_0x295bd5['enabled']=!![],_0x295bd5['fovAngle']=Number(RegExp['$1'])||0x1);_0x136863[_0x5e027e(0x1f9)](_0x154015[_0x5e027e(0x249)])&&(_0x295bd5['enabled']=!![],_0x295bd5[_0x5e027e(0x1f6)]=!![]);_0x136863[_0x5e027e(0x1f9)](_0x154015[_0x5e027e(0x1c0)])&&(_0x295bd5[_0x5e027e(0x20a)]=!![],_0x295bd5[_0x5e027e(0x1f6)]=![]);_0x136863[_0x5e027e(0x1f9)](_0x154015[_0x5e027e(0x2ea)])&&(_0x295bd5[_0x5e027e(0x20a)]=!![],_0x295bd5[_0x5e027e(0x21d)]=String(RegExp['$1'])[_0x5e027e(0x323)]()[_0x5e027e(0x1c6)]());if(_0x136863['match'](_0x154015[_0x5e027e(0x244)])){_0x295bd5['enabled']=!![];const _0x558303=VisuMZ[_0x5e027e(0x232)][_0x5e027e(0x1ed)](String(RegExp['$1']));_0x295bd5[_0x5e027e(0x34d)]=_0x558303;}_0x136863[_0x5e027e(0x1f9)](_0x154015[_0x5e027e(0x270)])&&(_0x295bd5['enabled']=!![],_0x295bd5['reactDelay']=Number(RegExp['$1'])||0x1,_0x295bd5[_0x5e027e(0x1c8)]=Number(RegExp['$1'])||0x1);_0x136863[_0x5e027e(0x1f9)](_0x154015['AlertCommonEvent'])&&(_0x295bd5['enabled']=!![],_0x295bd5['commonEvent']=Number(RegExp['$1'])||0x0);_0x136863[_0x5e027e(0x1f9)](_0x154015[_0x5e027e(0x238)])&&(_0x295bd5[_0x5e027e(0x20a)]=!![],_0x295bd5[_0x5e027e(0x334)]=String(RegExp['$1']));_0x136863['match'](_0x154015['AlertSoundVolume'])&&(_0x295bd5['enabled']=!![],_0x295bd5[_0x5e027e(0x23d)]=Number(RegExp['$1'])||0x1);_0x136863['match'](_0x154015[_0x5e027e(0x1b4)])&&(_0x295bd5[_0x5e027e(0x20a)]=!![],_0x295bd5[_0x5e027e(0x242)]=Number(RegExp['$1'])||0x1);_0x136863[_0x5e027e(0x1f9)](_0x154015[_0x5e027e(0x240)])&&(_0x295bd5[_0x5e027e(0x20a)]=!![],_0x295bd5[_0x5e027e(0x29f)]=Number(RegExp['$1'])||0x1);_0x136863[_0x5e027e(0x1f9)](_0x154015[_0x5e027e(0x278)])&&(_0x295bd5[_0x5e027e(0x20a)]=!![],_0x295bd5['returnAfter']=!![]);_0x136863[_0x5e027e(0x1f9)](_0x154015[_0x5e027e(0x29d)])&&(_0x295bd5[_0x5e027e(0x20a)]=!![],_0x295bd5[_0x5e027e(0x2bb)]=![]);if(_0x136863['match'](_0x154015[_0x5e027e(0x217)])){_0x295bd5[_0x5e027e(0x20a)]=!![];const _0x3a7991=VisuMZ[_0x5e027e(0x232)][_0x5e027e(0x1ed)](String(RegExp['$1']));_0x295bd5[_0x5e027e(0x2cb)]=_0x3a7991;}if(_0x136863[_0x5e027e(0x1f9)](_0x154015[_0x5e027e(0x26a)])){_0x295bd5[_0x5e027e(0x20a)]=!![];const _0x213083=VisuMZ[_0x5e027e(0x232)][_0x5e027e(0x1ed)](String(RegExp['$1']));_0x295bd5[_0x5e027e(0x2c3)]=_0x213083;}_0x136863[_0x5e027e(0x1f9)](_0x154015['ReturnWait'])&&(_0x295bd5['enabled']=!![],_0x295bd5['returnTime']=Number(RegExp['$1'])||0x1,_0x295bd5[_0x5e027e(0x1ec)]=Number(RegExp['$1'])||0x1);},Game_Event['prototype'][_0x2a5d29(0x1bd)]=function(){const _0x48e388=_0x2a5d29;return this[_0x48e388(0x219)]===undefined&&this['refresh'](),this[_0x48e388(0x219)];},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x233)]=function(){const _0x3e29a0=_0x2a5d29;if(this[_0x3e29a0(0x344)])return![];return this[_0x3e29a0(0x1bd)]()[_0x3e29a0(0x20a)];},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x23f)]=function(){const _0x22844d=_0x2a5d29;if(Imported[_0x22844d(0x220)]){if(this[_0x22844d(0x2e7)]())return![];}return this[_0x22844d(0x1bd)]()[_0x22844d(0x2ac)]||this['chaseData']()[_0x22844d(0x308)];},Game_Event['prototype'][_0x2a5d29(0x1fe)]=function(){const _0x2a5a8a=_0x2a5d29;if(Imported[_0x2a5a8a(0x220)]){if(this[_0x2a5a8a(0x2e7)]())return![];}return this[_0x2a5a8a(0x1bd)]()[_0x2a5a8a(0x236)];},VisuMZ[_0x2a5d29(0x232)][_0x2a5d29(0x23a)]=Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x31b)],Game_Event['prototype']['updateSelfMovement']=function(){const _0x59c7a4=_0x2a5d29;if(this[_0x59c7a4(0x1fe)]())this[_0x59c7a4(0x2be)]();else this['isChaseReturning']()?this[_0x59c7a4(0x349)]():VisuMZ[_0x59c7a4(0x232)]['Game_Event_updateSelfMovement'][_0x59c7a4(0x22e)](this);},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x2be)]=function(){const _0xc4d062=_0x2a5d29,_0x429a95=this[_0xc4d062(0x1bd)]();if(_0x429a95['reactTime']>0x0){_0x429a95[_0xc4d062(0x1c8)]-=0x1;return;}switch(_0x429a95[_0xc4d062(0x21d)]){case _0xc4d062(0x2a4):this[_0xc4d062(0x266)]();break;case _0xc4d062(0x25a):this[_0xc4d062(0x295)]();break;case _0xc4d062(0x33a):this['moveAwayFromPlayer']();break;case _0xc4d062(0x28b):this['moveTypeRandom']();break;default:VisuMZ['EncounterEffects'][_0xc4d062(0x23a)][_0xc4d062(0x22e)](this);break;}},Game_Event[_0x2a5d29(0x1bb)]['updateSelfMovementSmartChase']=function(){const _0x4b0d5a=_0x2a5d29;if(!this['needsSmartChaseUpdate']())return;this['_eventAlertChaseCache']=this[_0x4b0d5a(0x336)]||{},this[_0x4b0d5a(0x336)][_0x4b0d5a(0x2bf)]=$gamePlayer['x'],this[_0x4b0d5a(0x336)][_0x4b0d5a(0x2af)]=$gamePlayer['y'],this['_eventAlertChaseCache'][_0x4b0d5a(0x27c)]=this['x'],this[_0x4b0d5a(0x336)][_0x4b0d5a(0x1a4)]=this['y'];const _0x54ec03=Imported[_0x4b0d5a(0x220)]&&$gameMap[_0x4b0d5a(0x1af)]();let _0x515dc1=$gamePlayer['x'],_0x10e75b=$gamePlayer['y'],_0x477226=0x0;if(_0x54ec03){if(this[_0x4b0d5a(0x25f)])$gameTemp[_0x4b0d5a(0x262)]=!![];_0x477226=this['findDiagonalDirectionTo'](_0x515dc1,_0x10e75b);if(this[_0x4b0d5a(0x25f)])$gameTemp[_0x4b0d5a(0x262)]=undefined;this['executeMoveDir8'](_0x477226);}else{if(this[_0x4b0d5a(0x25f)])$gameTemp[_0x4b0d5a(0x262)]=!![];_0x477226=this[_0x4b0d5a(0x259)](_0x515dc1,_0x10e75b);if(this[_0x4b0d5a(0x25f)])$gameTemp[_0x4b0d5a(0x262)]=undefined;this[_0x4b0d5a(0x258)](_0x477226);}},Game_Event[_0x2a5d29(0x1bb)]['needsSmartChaseUpdate']=function(){const _0x19b3bb=_0x2a5d29;if(this[_0x19b3bb(0x2ec)]())return![];this[_0x19b3bb(0x336)]=this[_0x19b3bb(0x336)]||{};if(this[_0x19b3bb(0x336)]['playerX']!==$gamePlayer['x'])return!![];if(this['_eventAlertChaseCache'][_0x19b3bb(0x2af)]!==$gamePlayer['y'])return!![];if(this[_0x19b3bb(0x336)][_0x19b3bb(0x27c)]!==this['x'])return!![];if(this[_0x19b3bb(0x336)]['eventY']!==this['y'])return!![];return![];},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x349)]=function(){const _0x302b45=_0x2a5d29,_0x575f21=this[_0x302b45(0x1bd)]();if(!_0x575f21[_0x302b45(0x308)])return;let _0x49f564=_0x575f21[_0x302b45(0x26b)],_0x4fe216=_0x575f21[_0x302b45(0x341)];this['x']===_0x49f564&&this['y']===_0x4fe216&&(_0x575f21[_0x302b45(0x308)]=![],this[_0x302b45(0x2c0)]=0x0,this[_0x302b45(0x28e)](_0x575f21[_0x302b45(0x21c)]));const _0x152db8=Imported[_0x302b45(0x220)]&&$gameMap[_0x302b45(0x1af)]();let _0x1f31cc=0x0;_0x152db8?(_0x1f31cc=this[_0x302b45(0x2c4)](_0x49f564,_0x4fe216),this[_0x302b45(0x325)](_0x1f31cc)):(_0x1f31cc=this['findDirectionTo'](_0x49f564,_0x4fe216),this['moveStraight'](_0x1f31cc));},VisuMZ[_0x2a5d29(0x232)]['Game_Event_update']=Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x1bc)],Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x1bc)]=function(){const _0x2587a9=_0x2a5d29;VisuMZ[_0x2587a9(0x232)]['Game_Event_update'][_0x2587a9(0x22e)](this),this['updateAlert']();},Game_Event[_0x2a5d29(0x1bb)]['updateAlert']=function(){const _0x5fc602=_0x2a5d29;if(!this[_0x5fc602(0x233)]())return;if(Imported[_0x5fc602(0x220)]){if(this[_0x5fc602(0x2e7)]())return![];}this['isChaseAlerted']()?this['updateAlertChase']():(this[_0x5fc602(0x320)](),this[_0x5fc602(0x1be)]());},Game_Event[_0x2a5d29(0x1bb)]['updateAlertChase']=function(){const _0x429289=_0x2a5d29,_0x36872b=this[_0x429289(0x1bd)](),_0xacbf1=this[_0x429289(0x208)]();if(_0xacbf1>_0x36872b[_0x429289(0x24d)]){_0x36872b['chaseTime']--;if(_0x36872b['chaseTime']>0x0)return;_0x36872b[_0x429289(0x236)]=![],_0x36872b['returnAfter']?(_0x36872b[_0x429289(0x2ac)]=!![],_0x36872b['returnTime']=_0x36872b[_0x429289(0x1ec)],$gameTemp[_0x429289(0x1a5)](this,_0x36872b[_0x429289(0x2cb)])):$gameTemp[_0x429289(0x1a5)](this,_0x36872b[_0x429289(0x2c3)]);}else _0x36872b[_0x429289(0x2bd)]=_0x36872b['alertLock'];},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x320)]=function(){const _0x256f3e=_0x2a5d29,_0x1c594=this[_0x256f3e(0x1bd)]();if(!_0x1c594[_0x256f3e(0x2ac)])return;_0x1c594['returnTime']-=0x1,_0x1c594['returnTime']<=0x0&&(_0x1c594[_0x256f3e(0x2ac)]=![],_0x1c594[_0x256f3e(0x308)]=!![],$gameTemp['requestBalloon'](this,_0x1c594[_0x256f3e(0x2c3)]));},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x1be)]=function(){const _0x370145=_0x2a5d29;if($gamePlayer[_0x370145(0x254)]())return;const _0x4620d8=this['chaseData'](),_0x330c04=Math['round'](this[_0x370145(0x208)]());if(_0x330c04>_0x4620d8[_0x370145(0x24d)])return;const _0x52bc59=this['getAlertAngleToPlayer']();if(_0x52bc59>_0x4620d8[_0x370145(0x339)])return;if(!this[_0x370145(0x1ca)]())return;_0x4620d8['alerted']=!![],_0x4620d8[_0x370145(0x2bd)]=_0x4620d8[_0x370145(0x2e2)],_0x4620d8['returnWaiting']=![],_0x4620d8['returning']=![],$gameTemp[_0x370145(0x1a5)](this,_0x4620d8[_0x370145(0x34d)]),_0x4620d8[_0x370145(0x1c8)]=_0x4620d8[_0x370145(0x29a)];_0x4620d8[_0x370145(0x1ba)]>0x0&&$gameTemp[_0x370145(0x2f2)](_0x4620d8[_0x370145(0x1ba)]);if(_0x4620d8[_0x370145(0x334)]!==''){const _0x30b7c5={'name':_0x4620d8['alertSoundName'],'volume':_0x4620d8['alertSoundVolume'],'pitch':_0x4620d8[_0x370145(0x242)],'pan':_0x4620d8['alertSoundPan']};AudioManager[_0x370145(0x25d)](_0x30b7c5);}},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x1ad)]=function(){const _0x50db3a=_0x2a5d29,_0x157fce=[$gamePlayer];if($gamePlayer[_0x50db3a(0x252)]()[_0x50db3a(0x1b5)])for(let _0xbfcee=0x0;_0xbfcee<$gamePlayer[_0x50db3a(0x252)]()[_0x50db3a(0x1dc)][_0x50db3a(0x292)];_0xbfcee++){const _0x54f501=$gamePlayer['followers']()[_0x50db3a(0x2ce)](_0xbfcee);if(!_0x54f501)continue;if(!_0x54f501[_0x50db3a(0x340)]())continue;_0x157fce[_0x50db3a(0x2a8)](_0x54f501);}return _0x157fce;},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x208)]=function(){const _0xb278cf=_0x2a5d29,_0x2c985e=[];_0x2c985e[_0xb278cf(0x2a8)](this['getAlertDistanceToPlayer']());for(let _0x3fca6e=0x0;_0x3fca6e<$gamePlayer[_0xb278cf(0x252)]()['_data'][_0xb278cf(0x292)];_0x3fca6e++){_0x2c985e[_0xb278cf(0x2a8)](this[_0xb278cf(0x2ed)](_0x3fca6e));}return Math['min'](..._0x2c985e);},Game_Event[_0x2a5d29(0x1bb)]['getAlertDistanceToPlayer']=function(){const _0x17717d=_0x2a5d29;return this[_0x17717d(0x2d4)]($gamePlayer);},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x2ed)]=function(_0x40cd68){const _0x4e2103=_0x2a5d29;if(!$gamePlayer[_0x4e2103(0x252)]()[_0x4e2103(0x1b5)])return 0x3e7;const _0x852dc8=$gamePlayer[_0x4e2103(0x252)]()[_0x4e2103(0x2ce)](_0x40cd68);if(!_0x852dc8[_0x4e2103(0x340)]())return 0x3e7;return this[_0x4e2103(0x2d4)](_0x852dc8);},Game_Event['prototype']['getAlertDistanceToTarget']=function(_0x3e24c0){const _0xfa3c2b=_0x2a5d29,_0x1e2fdb=this['x'],_0x5a30b8=this['y'],_0x59509b=_0x3e24c0['x'],_0xfab414=_0x3e24c0['y'],_0x2a8a21=Math[_0xfa3c2b(0x2a0)](_0x59509b-_0x1e2fdb,0x2),_0x245565=Math[_0xfa3c2b(0x2a0)](_0xfab414-_0x5a30b8,0x2);return Math[_0xfa3c2b(0x2f8)](_0x2a8a21+_0x245565);},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x20e)]=function(_0x3ca934){return this['getAlertAngleToTarget']($gamePlayer,_0x3ca934);},Game_Event[_0x2a5d29(0x1bb)][_0x2a5d29(0x289)]=function(_0x228121,_0x13ffa1){const _0x53278c=_0x2a5d29;if(!$gamePlayer[_0x53278c(0x252)]()['_visible'])return 0x3e7;const _0x37434c=$gamePlayer[_0x53278c(0x252)]()[_0x53278c(0x2ce)](_0x228121);if(!_0x37434c['actor']())return 0x3e7;return this[_0x53278c(0x288)](_0x37434c,_0x13ffa1);},Game_Event['prototype'][_0x2a5d29(0x288)]=function(_0x33fec6,_0x5cfa77){const _0x4fab5c=_0x2a5d29,_0x1ecf4f=this['x'],_0x55f5bc=this['y'],_0x465327=_0x33fec6['x'],_0x588218=_0x33fec6['y'];let _0x115e87=Math['atan2'](_0x588218-_0x55f5bc,_0x465327-_0x1ecf4f)*0xb4/Math['PI'];if(!_0x5cfa77){const _0x520174=[0x0,0xe1,0x10e,0x13b,0xb4,0x0,0x0,0x87,0x5a,0x2d][this[_0x4fab5c(0x22f)]()];_0x115e87+=_0x520174,_0x115e87+=this[_0x4fab5c(0x1bd)]()[_0x4fab5c(0x339)]/0x2;}while(_0x115e87<0x0)_0x115e87+=0x168;while(_0x115e87>=0x168)_0x115e87-=0x168;return _0x115e87;},Game_Event['prototype'][_0x2a5d29(0x1ca)]=function(){const _0x4d9b39=_0x2a5d29;let _0x1f9363=![];const _0x451759=this['getAlertDistanceToClosest']();_0x1f9363&&(console[_0x4d9b39(0x2ae)](_0x4d9b39(0x1b9),$gamePlayer['x'],$gamePlayer['y']),console[_0x4d9b39(0x2ae)]('Event:\x20',this['x'],this['y']));const _0x1f3f89=this[_0x4d9b39(0x1ad)]();for(const _0x124d04 of _0x1f3f89){if(!_0x124d04)continue;let _0x2d3b8c=_0x451759,_0x3260bc=this[_0x4d9b39(0x288)](_0x124d04,!![]),_0x5662dc=_0x3260bc*Math['PI']/0xb4;while(_0x2d3b8c>=0x0){const _0x50db76=Math[_0x4d9b39(0x324)](this['x']+_0x2d3b8c*Math[_0x4d9b39(0x28f)](_0x5662dc)),_0x4b008e=Math['round'](this['y']+_0x2d3b8c*Math[_0x4d9b39(0x1db)](_0x5662dc));_0x2d3b8c-=0x1;_0x1f9363&&console['log']('Data:\x20',_0x3260bc,_0x2d3b8c,_0x50db76,_0x4b008e);if($gameMap[_0x4d9b39(0x2bc)](_0x50db76,_0x4b008e))return![];}}return!![];},VisuMZ[_0x2a5d29(0x232)][_0x2a5d29(0x200)]=Game_CharacterBase[_0x2a5d29(0x1bb)][_0x2a5d29(0x20d)],Game_CharacterBase[_0x2a5d29(0x1bb)][_0x2a5d29(0x20d)]=function(){const _0x4ce861=_0x2a5d29;if(this['constructor']===Game_Event&&this['isChaseAlerted']()&&this[_0x4ce861(0x1bd)]()[_0x4ce861(0x30e)])return this['isMovementSucceeded']();return VisuMZ[_0x4ce861(0x232)][_0x4ce861(0x200)][_0x4ce861(0x22e)](this);},VisuMZ['EncounterEffects'][_0x2a5d29(0x30d)]=Game_CharacterBase['prototype'][_0x2a5d29(0x2d8)],Game_CharacterBase[_0x2a5d29(0x1bb)][_0x2a5d29(0x2d8)]=function(_0x517c2a,_0x58d680){const _0x2a23c6=_0x2a5d29;if(this[_0x2a23c6(0x214)]===Game_Event){if(this[_0x2a23c6(0x23f)]()||this['isChaseAlerted']())return;}VisuMZ[_0x2a23c6(0x232)][_0x2a23c6(0x30d)][_0x2a23c6(0x22e)](this,_0x517c2a,_0x58d680);},Game_Interpreter[_0x2a5d29(0x1bb)]['checkEventFacingPlayerFront']=function(){const _0x2afa24=_0x2a5d29,_0x47b85d=$gameMap[_0x2afa24(0x309)](this[_0x2afa24(0x223)]());if(!_0x47b85d)return![];const _0x491939=$gamePlayer;return _0x47b85d[_0x2afa24(0x2e5)](_0x491939)&&_0x491939[_0x2afa24(0x2df)](_0x47b85d);},Game_Interpreter['prototype'][_0x2a5d29(0x304)]=function(){const _0x2423e4=_0x2a5d29,_0x4e9310=$gameMap[_0x2423e4(0x309)](this['eventId']());if(!_0x4e9310)return![];const _0x2c19d7=$gamePlayer;return _0x4e9310['isFacingAway'](_0x2c19d7)&&_0x2c19d7['isPositionBackOf'](_0x4e9310);},Game_Interpreter[_0x2a5d29(0x1bb)][_0x2a5d29(0x28d)]=function(){const _0x18320e=_0x2a5d29,_0x4f7636=$gameMap['event'](this[_0x18320e(0x223)]());if(!_0x4f7636)return![];const _0x2a5623=$gamePlayer;return _0x4f7636[_0x18320e(0x1f7)](_0x2a5623)&&_0x2a5623['isPositionSideOf'](_0x4f7636);},Game_Interpreter[_0x2a5d29(0x1bb)]['checkPlayerFacingEventFront']=function(){const _0x463dce=_0x2a5d29,_0x5b73f4=$gameMap[_0x463dce(0x309)](this[_0x463dce(0x223)]());if(!_0x5b73f4)return![];const _0x1c02e3=$gamePlayer;return _0x1c02e3['isFacingTowards'](_0x5b73f4)&&_0x5b73f4[_0x463dce(0x2df)](_0x1c02e3);},Game_Interpreter[_0x2a5d29(0x1bb)][_0x2a5d29(0x2b4)]=function(){const _0x1c2652=_0x2a5d29,_0x46f7c5=$gameMap[_0x1c2652(0x309)](this['eventId']());if(!_0x46f7c5)return![];const _0x2f48ec=$gamePlayer;return _0x2f48ec[_0x1c2652(0x32f)](_0x46f7c5)&&_0x46f7c5[_0x1c2652(0x2d0)](_0x2f48ec);},Game_Interpreter['prototype'][_0x2a5d29(0x322)]=function(){const _0x3d296b=_0x2a5d29,_0x4f5092=$gameMap[_0x3d296b(0x309)](this[_0x3d296b(0x223)]());if(!_0x4f5092)return![];const _0xcb0395=$gamePlayer;return _0xcb0395[_0x3d296b(0x1f7)](_0x4f5092)&&_0x4f5092['isPositionSideOf'](_0xcb0395);},VisuMZ[_0x2a5d29(0x232)][_0x2a5d29(0x1e9)]=Scene_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x221)],Scene_Map[_0x2a5d29(0x1bb)]['startEncounterEffect']=function(){const _0x2a176a=_0x2a5d29;this[_0x2a176a(0x23e)]=$gameSystem[_0x2a176a(0x2eb)](),this['_spriteset'][_0x2a176a(0x257)]();{const _0x3e432f=$gamePlayer[_0x2a176a(0x224)](),_0x35546b=$gamePlayer[_0x2a176a(0x1ea)]()-0x18,_0x3e8f77=$gameScreen[_0x2a176a(0x2c8)],_0x5cc832=$gameScreen[_0x2a176a(0x197)];$gameScreen['setZoom'](_0x3e432f,_0x35546b,0x1,0x0),this[_0x2a176a(0x1d8)](),$gameScreen[_0x2a176a(0x2c8)]=_0x3e8f77,$gameScreen[_0x2a176a(0x197)]=_0x5cc832;}$gameTemp[_0x2a176a(0x284)]=!![],VisuMZ['EncounterEffects'][_0x2a176a(0x1e9)][_0x2a176a(0x22e)](this),$gameTemp[_0x2a176a(0x284)]=undefined,this['_battleTransitionType']===_0x2a176a(0x248)&&this[_0x2a176a(0x1f5)][_0x2a176a(0x329)]();},VisuMZ['EncounterEffects'][_0x2a5d29(0x1b6)]=Spriteset_Map['prototype'][_0x2a5d29(0x329)],Spriteset_Map['prototype']['hideCharacters']=function(){const _0x2f209a=_0x2a5d29;if($gameTemp['_bypassHideCharacters'])return;VisuMZ[_0x2f209a(0x232)][_0x2f209a(0x1b6)][_0x2f209a(0x22e)](this);},Scene_Map[_0x2a5d29(0x1bb)]['encounterEffectSpeed']=function(){const _0x41df94=_0x2a5d29;return Math['max'](0x6,$gameSystem[_0x41df94(0x327)]());},Scene_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x306)]=function(){const _0x3e7357=_0x2a5d29;Imported[_0x3e7357(0x250)]&&($gameTemp[_0x3e7357(0x294)]=Scene_Map[_0x3e7357(0x27f)]),this['doesBattleTransitionZoom']()?this['updateEncounterEffectOriginal']():this['updateEncounterEffectFilter'](),Imported['VisuMZ_4_MapCameraZoom']&&($gameTemp['_mapZoomEnterBattle']=undefined);},Scene_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x216)]=function(){const _0x523ed9=_0x2a5d29;return[_0x523ed9(0x2f4),_0x523ed9(0x248)][_0x523ed9(0x268)](this[_0x523ed9(0x23e)]);},Scene_Map[_0x2a5d29(0x1bb)]['updateEncounterEffectOriginal']=function(){const _0x42e1a6=_0x2a5d29;if(this[_0x42e1a6(0x1c3)]>0x0){this['_encounterEffectDuration']--,this['_spriteset']['updateBattleTransitionFilter']();const _0x595497=this[_0x42e1a6(0x2e4)](),_0x2b8398=_0x595497-this[_0x42e1a6(0x1c3)],_0x144c35=_0x2b8398/_0x595497,_0x932d31=((_0x144c35-0x1)*0x14*_0x144c35+0x5)*_0x144c35+0x1,_0x515904=$gamePlayer['screenX'](),_0x543140=$gamePlayer[_0x42e1a6(0x1ea)]()-0x18;_0x2b8398===0x2&&(this[_0x42e1a6(0x23e)]===_0x42e1a6(0x248)&&this['startFlashForEncounter'](_0x595497/0x2)),$gameScreen[_0x42e1a6(0x27b)](_0x515904,_0x543140,_0x932d31),_0x2b8398===Math[_0x42e1a6(0x2d7)](_0x595497/0x6)&&(this[_0x42e1a6(0x23e)]===_0x42e1a6(0x248)&&this[_0x42e1a6(0x2f0)](_0x595497/0x2)),_0x2b8398===Math[_0x42e1a6(0x1df)](0x1,_0x595497-this[_0x42e1a6(0x2ba)]()-0x6)&&(BattleManager['playBattleBgm'](),this[_0x42e1a6(0x2dc)](this['fadeSpeed']()));}},Scene_Map['prototype']['updateEncounterEffectFilter']=function(){const _0x318c3d=_0x2a5d29;if(this['_encounterEffectDuration']>0x0){this[_0x318c3d(0x1c3)]--,this[_0x318c3d(0x1f5)][_0x318c3d(0x1a1)]();const _0x3a9bca=this[_0x318c3d(0x2e4)](),_0x578b53=_0x3a9bca-this[_0x318c3d(0x1c3)];_0x578b53===Math[_0x318c3d(0x1df)](0x1,_0x3a9bca-this[_0x318c3d(0x2ba)]()-0x6)&&(BattleManager['playBattleBgm'](),this['startFadeOut'](this['fadeSpeed']()));}},VisuMZ[_0x2a5d29(0x232)][_0x2a5d29(0x1a7)]=Scene_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x1d8)],Scene_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x1d8)]=function(){const _0x4dff0b=_0x2a5d29;this[_0x4dff0b(0x2c9)](),this[_0x4dff0b(0x1f5)][_0x4dff0b(0x1ef)](!![]),VisuMZ['EncounterEffects'][_0x4dff0b(0x1a7)][_0x4dff0b(0x22e)](this),this['_spriteset'][_0x4dff0b(0x1ef)](![]);},Spriteset_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x1ef)]=function(_0x209d0a){const _0x4ad884=_0x2a5d29;for(const _0x15fe46 of this[_0x4ad884(0x21a)]){!_0x15fe46['isTile']()&&!_0x15fe46[_0x4ad884(0x24e)]()&&(_0x209d0a?(_0x15fe46[_0x4ad884(0x20f)]=_0x15fe46[_0x4ad884(0x2db)],_0x15fe46['visible']=![],_0x15fe46[_0x4ad884(0x206)]&&(_0x15fe46[_0x4ad884(0x206)][_0x4ad884(0x20f)]=_0x15fe46[_0x4ad884(0x206)][_0x4ad884(0x2db)],_0x15fe46[_0x4ad884(0x206)][_0x4ad884(0x2db)]=![])):(_0x15fe46[_0x4ad884(0x2db)]=_0x15fe46[_0x4ad884(0x20f)]||![],_0x15fe46[_0x4ad884(0x206)]&&(_0x15fe46['_shadowSprite'][_0x4ad884(0x2db)]=_0x15fe46[_0x4ad884(0x206)]['originalVisibility'])));}},Scene_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x2c9)]=function(){const _0x464642=_0x2a5d29;if(!this[_0x464642(0x1f5)])return;if(!this[_0x464642(0x1f5)][_0x464642(0x347)])return;for(const _0x35f852 of this['_spriteset'][_0x464642(0x347)]){_0x35f852&&_0x35f852[_0x464642(0x2fb)]();}},VisuMZ['EncounterEffects'][_0x2a5d29(0x315)]=Sprite_Character[_0x2a5d29(0x1bb)][_0x2a5d29(0x1bc)],Sprite_Character[_0x2a5d29(0x1bb)][_0x2a5d29(0x1bc)]=function(){const _0x599232=_0x2a5d29;VisuMZ[_0x599232(0x232)][_0x599232(0x315)][_0x599232(0x22e)](this),this[_0x599232(0x26c)]();},Sprite_Character['prototype'][_0x2a5d29(0x26c)]=function(){const _0x36d2af=_0x2a5d29;this[_0x36d2af(0x1de)]();},Sprite_Character[_0x2a5d29(0x1bb)]['createAlertFovSprite']=function(){const _0x478cf2=_0x2a5d29;if(this['_alertFovSprite'])return;if(!this[_0x478cf2(0x28c)])return;this['_alertFovSprite']=new Sprite_AlertFovSprite(this),this['_alertFovSprite']['z']=0x6,this[_0x478cf2(0x28c)][_0x478cf2(0x33f)](this[_0x478cf2(0x33b)]),SceneManager[_0x478cf2(0x330)][_0x478cf2(0x1f5)][_0x478cf2(0x2a1)]&&(this['_lightContainerAlertFovSprite']=new Sprite_AlertFovSprite(this),this['_lightContainerAlertFovSprite']['z']=0x6,SceneManager[_0x478cf2(0x330)][_0x478cf2(0x1f5)][_0x478cf2(0x2a1)][_0x478cf2(0x33f)](this[_0x478cf2(0x211)]));};function Sprite_AlertFovSprite(){this['initialize'](...arguments);}function _0x383f(){const _0x2aa39a=['lock','_mapZoomEnterBattle','moveTowardPlayer','AdvantageSetQueue','ARRAYNUM','CRTFilter','static','reactDelay','toUpperCase','EncounterMultiplier','StayPosition','quality','alertSoundPan','pow','_lightContainer','_direction','LureVariable','chase','isInBoat','setupEncounterEffectsCommentTags','isVisible','push','initEncounterEffects_ForcedAdvantage','_baseTexture','colorTone','returnWaiting','clearPageSettings','log','playerY','isInShip','setForcedAdvantage','name','RadialBlurFilter','checkPlayerFacingEventBack','updateBattleTransitionFilter_Block','filters','troop','ZZZ','PixelateFilter','fadeSpeed','returnAfter','isAlertVisionBlocked','chaseTime','updateSelfMovementAlerted','playerX','_moveRouteIndex','setBattleTransitionType','AdjustmentFilter','returnEndBalloon','findDiagonalDirectionTo','_alertStealthMode','MUSIC','addColorStop','_zoomX','hideEventLabels','isNormalPriority','returnStartBalloon','Scene_Boot_onDatabaseLoaded','shiftForcedAdvantage','follower','_battleTransitionFilter2','isPositionBackOf','red','2150238spIcbF','RepelVariable','getAlertDistanceToTarget','preemptive','Chance','floor','setBalloonPose','updateBitmap','ceil','visible','startFadeOut','value','_preemptive','isPositionFrontOf','AlertRange','BlockVisionRegion','alertLock','slices','encounterEffectSpeed','isFacingTowards','AdvantageAddQueue','isPreventSelfMovement','Preemptive','isBush','AlertResponse','getBattleTransitionType','isMoving','getAlertDistanceToFollower','split','CommonEvent','startFlashForEncounter','AlertStealthMode','reserveCommonEvent','updateBattleTransitionFilter_Static','hue','getForcedAdvantage','regionId','_battleTransitionDuration','sqrt','makeDeepCopy','setup','hide','updateBattleTransitionFilter_Glitch','AlertDash','onDatabaseLoaded','_EncounterEffectsTouchDirectionLock','FovColor1','return\x200','createBattleTransitionFilter_','targetAngle','checkEventFacingPlayerBack','strength','updateEncounterEffect','BoatMultiplier','returning','event','isJumping','aberration','EVAL','Game_CharacterBase_setBalloonPose','alertDash','isLureEncounters','RegExp','createBattleTransitionFilter_Glitch','initEncounterEffects','restore','TwistFilter','Sprite_Character_update','FovAngle','ZoomBlurFilter','targetX','1688960nvBDWh',',\x20Event\x20Y:\x20','updateSelfMovement','size','STR','Event\x20X:\x20','lineTo','updateAlertReturnWait','SoundName','checkPlayerFacingEventSide','toLowerCase','round','executeMoveDir8','context','getBattleTransitionDuration','center','hideCharacters','note','green','setupEncounterEffectsNotetags','Game_Event_setupPageSettings','version','isFacingAway','_scene','description','needsBitmapRedraw','bitmap','alertSoundName','LureRate','_eventAlertChaseCache','updateBattleTransitionFilter_Aberration','_alertBlockVisionRegions','fovAngle','flee','_alertFovSprite','warp','initEncounterEffectsData','SLEEP','addChild','actor','returnY','NOTE','AdvantageResetQueue','_erased','BlurFilter','MUSICNOTE','_labelWindows','contains','updateSelfMovementReturnFromChase','ARRAYSTR','FRUSTRATION','updateBattleTransitionFilter_Blur','alertBalloon','Game_Character_turnTowardPlayer','LIGHT-BULB','processRepelEncounters','Game_Event_clearPageSettings','shift','kernelSize','glitch','_zoomY','updateBattleTransitionFilter_Warp','3096233dDJGDS','TrimBattleTransitionRandom','LureEvent','_processEncounterDirectionLock','LOVE','Game_Follower_isVisible','noise','initMembers','updateBattleTransitionFilter','ANNOYED','fill','eventY','requestBalloon','COBWEB','Scene_Map_snapForBattleBackground','_characterErased','initialize','initEncEffBattleTransition','ReturnWait','startBattle','getAlertTargets','initEncounterEffectsEffects','isSupportDiagonalMovement','Game_Map_setup','FUNC','createBattleTransitionFilter_Blur','lineWidth','AlertSoundPitch','_visible','Spriteset_Map_hideCharacters','updateBattleTransitionFilter_Spiral','33rQJyOt','Player:\x20','commonEvent','prototype','update','chaseData','updateAlertIdle','destroy','AlertHideFov','setupEncounterEffectsEffects','updateBattleTransitionFilter_Twirl','_encounterEffectDuration','ReturnHome','exit','trim','ReactDelay','reactTime','setBattleTransitionDuration','isAlertLineOfVisionClear','randomInt','setAlertStealthMode','updateAngle','USER-DEFINED\x202','143955BPWUdI','Game_Event_checkEventTriggerTouch','QUESTION','isRepelEncounters','_character','_surprise','list','parse','turnTowardPlayer','snapForBattleBackground','beginPath','charAt','sin','_data','_alertBlockVisionTags','createAlertFovSprite','max','BattleTransitionDuration','encounterProgressValue','BattleTransitionChangeType','USER-DEFINED\x205','BlockVisionTag','SoundPitch','ShowFoV','Advantage','updateBattleTransitionFilter_Hue','Scene_Map_startEncounterEffect','screenY','HEART','returnWait','ConvertBallonTextToID','BattleManager_startBattle','hideCharactersForBattleback','width','surprise','BattleTransition','JSON','code','_spriteset','showFov','isFacingSideways','terrainTag','match','LIGHTBULB','pixel','visibleFollowers','blur','isChaseAlerted','BattleManager_onEncounter','Game_CharacterBase_isDashing','AlertWalk','ANGER','BattleCore','GlitchFilter','...','_shadowSprite','setValue','getAlertDistanceToClosest','checkForcedAdvantage','enabled','twirl','75016EqSxOI','isDashing','getAlertAngleToPlayer','originalVisibility','debugShowDirections','_lightContainerAlertFovSprite','ShipMultiplier','RepelEvent','constructor','offset','doesBattleTransitionZoom','ReturnStartBalloon','registerCommand','_EncounterEffects_EventChaseData','_characterSprites','setupPageSettings','returnDir','response','create','SILENCE','VisuMZ_1_EventsMoveCore','startEncounterEffect','chance','eventId','screenX','no\x20advantage','_battleTransitionFilter','remove','vignettingAlpha','anchor','Game_Event_lock','NUM','NoAdvantage','ConvertParams','call','direction','parameters','initEventChaseData','EncounterEffects','isChaseEnabled','AlertLock','updateBattleTransitionFilter_','alerted','Normal','AlertSoundName','ARRAYFUNC','Game_Event_updateSelfMovement','tileHeight','Alert','alertSoundVolume','_battleTransitionType','isChaseReturning','AlertSoundPan','ARRAYSTRUCT','alertSoundPitch','addForcedAdvantage','AlertBalloon','_source','TouchDirectionLock','isEventRunning','zoom','AlertShowFov','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','LIGHT','blue','alertRange','isObjectCharacter','radius','VisuMZ_4_MapCameraZoom','createBattleTransitionFilter_Block','followers','checkEventTriggerTouch','getAlertStealthMode','isPositionSideOf','updatePosition','createBattleTransitionFilter','moveStraight','findDirectionTo','rush','createBattleTransitionFilter_Warp','EXCLAMATION','playSe','RGBSplitFilter','_EncounterEffectsFollowerTrigger','checkEventFollowerTriggerTouch','Settings','_calcChasePathing','Queue','brightness','198oEuvsy','updateSelfMovementSmartChase','Type','includes','arc','ReturnEndBalloon','returnX','updateEncounterEffects','AlertFovAngle','uniforms','_forcedAdvantage','AlertReactDelay','9782SjfGWE','RepelLure','Game_Player_initMembers','Surprise','MUSIC-NOTE','_trigger','processLureEncounters','ReturnPosition','USER-DEFINED\x204','Game_System_initialize','setZoom','eventX','MUSIC\x20NOTE','map','MAP_ZOOM_ENTER_BATTLE_ADAPT','LureFlat','concat','spiral','createRadialGradient','_bypassHideCharacters','USER-DEFINED\x201','tileset','seed','getAlertAngleToTarget','getAlertAngleToFollower','angle','random','parent','checkEventFacingPlayerSide','setDirection','cos','1120648pZbOqB','runAdvantageCommonEvents','length'];_0x383f=function(){return _0x2aa39a;};return _0x383f();}Sprite_AlertFovSprite[_0x2a5d29(0x1bb)]=Object[_0x2a5d29(0x21e)](Sprite[_0x2a5d29(0x1bb)]),Sprite_AlertFovSprite[_0x2a5d29(0x1bb)][_0x2a5d29(0x214)]=Sprite_AlertFovSprite,Sprite_AlertFovSprite[_0x2a5d29(0x1bb)][_0x2a5d29(0x1a9)]=function(_0x20b1e2){const _0x2ff0cb=_0x2a5d29;this[_0x2ff0cb(0x245)]=_0x20b1e2,this[_0x2ff0cb(0x1d3)]=_0x20b1e2[_0x2ff0cb(0x1d3)],Sprite[_0x2ff0cb(0x1bb)][_0x2ff0cb(0x1a9)]['call'](this),this['initMembers'](),this['update']();},Sprite_AlertFovSprite[_0x2a5d29(0x1bb)][_0x2a5d29(0x1a0)]=function(){const _0x51e46f=_0x2a5d29;this[_0x51e46f(0x229)]['x']=0.5,this['anchor']['y']=0.5,this[_0x51e46f(0x1a8)]=![];if(!this['_character'])return;if(this[_0x51e46f(0x1d3)]['constructor']!==Game_Event)return;this['_data']={};},Sprite_AlertFovSprite[_0x2a5d29(0x1bb)][_0x2a5d29(0x1bc)]=function(){const _0x3ca106=_0x2a5d29;Sprite['prototype'][_0x3ca106(0x1bc)][_0x3ca106(0x22e)](this);if(!this[_0x3ca106(0x1d3)])return;if(this[_0x3ca106(0x1d3)]['constructor']!==Game_Event)return;this['updateBitmap']();if(!this[_0x3ca106(0x1dc)][_0x3ca106(0x20a)])return;this[_0x3ca106(0x256)](),this[_0x3ca106(0x1cd)]();},Sprite_AlertFovSprite[_0x2a5d29(0x1bb)][_0x2a5d29(0x2d9)]=function(){const _0x1da126=_0x2a5d29;if(!this[_0x1da126(0x332)]())return;this[_0x1da126(0x1dc)]=JsonEx[_0x1da126(0x2f9)](this[_0x1da126(0x1d3)]['chaseData']());if(this[_0x1da126(0x1dc)]['enabled']&&!this['_character'][_0x1da126(0x344)])this['createFovBitmap']();else{this[_0x1da126(0x1a8)]=this[_0x1da126(0x1d3)][_0x1da126(0x344)];if(this[_0x1da126(0x333)])this[_0x1da126(0x333)][_0x1da126(0x1bf)]();this['bitmap']=new Bitmap(0x1,0x1);}},Sprite_AlertFovSprite[_0x2a5d29(0x1bb)][_0x2a5d29(0x332)]=function(){const _0x288544=_0x2a5d29,_0x4635e7=this[_0x288544(0x1d3)][_0x288544(0x1bd)](),_0xbc55f5=this[_0x288544(0x1dc)];if(_0x4635e7[_0x288544(0x20a)]!==_0xbc55f5[_0x288544(0x20a)])return!![];if(_0x4635e7[_0x288544(0x24d)]!==_0xbc55f5[_0x288544(0x24d)])return!![];if(_0x4635e7[_0x288544(0x339)]!==_0xbc55f5[_0x288544(0x339)])return!![];if(this[_0x288544(0x1a8)]!==this[_0x288544(0x1d3)][_0x288544(0x344)])return!![];return![];},Sprite_AlertFovSprite[_0x2a5d29(0x1bb)]['createFovBitmap']=function(){const _0x517558=_0x2a5d29,_0x105d6e=this[_0x517558(0x1dc)];if(!_0x105d6e['showFov'])return;const _0xe5522=VisuMZ[_0x517558(0x232)][_0x517558(0x261)][_0x517558(0x23c)],_0x3b7709=_0x105d6e[_0x517558(0x339)],_0x5b02fe=Math[_0x517558(0x2da)]((_0x105d6e[_0x517558(0x24d)]+0.4)*$gameMap['tileWidth']()),_0x38bbe5=_0xe5522[_0x517558(0x300)],_0x55f435=_0xe5522['FovColor2'];this[_0x517558(0x333)]=new Bitmap(_0x5b02fe*0x2,_0x5b02fe*0x2),this[_0x517558(0x333)]['drawAlertCircle'](_0x5b02fe,_0x3b7709,_0x38bbe5,_0x55f435),this['blendMode']=0x1;},Bitmap['prototype']['drawAlertCircle']=function(_0x55be17,_0x450bfa,_0x175071,_0x2ffd5f){const _0x109b0e=_0x2a5d29,_0x16f582=this[_0x109b0e(0x326)],_0x3f6d52=_0x450bfa*(Math['PI']/0xb4),_0x5cb57a=_0x55be17*0x2,_0x12a8c8=_0x16f582[_0x109b0e(0x283)](_0x55be17,_0x55be17,0x18,_0x55be17,_0x55be17,_0x55be17);_0x12a8c8[_0x109b0e(0x2c7)](0x0,_0x175071),_0x12a8c8['addColorStop'](0.85,_0x2ffd5f),_0x12a8c8[_0x109b0e(0x2c7)](0x1,_0x175071),_0x16f582['save'](),_0x16f582['fillStyle']=_0x12a8c8,_0x16f582[_0x109b0e(0x1d9)](),_0x16f582['moveTo'](_0x55be17,_0x55be17),_0x16f582[_0x109b0e(0x31f)](_0x5cb57a,_0x55be17),_0x16f582[_0x109b0e(0x269)](_0x55be17,_0x55be17,_0x55be17,0x0,_0x3f6d52),_0x16f582[_0x109b0e(0x31f)](_0x55be17,_0x55be17),_0x16f582[_0x109b0e(0x1a3)](),_0x16f582[_0x109b0e(0x313)](),this[_0x109b0e(0x2aa)][_0x109b0e(0x1bc)]();},Sprite_AlertFovSprite[_0x2a5d29(0x1bb)][_0x2a5d29(0x256)]=function(){const _0x41cc01=_0x2a5d29;this['x']=this['_source']['x'],this['y']=this[_0x41cc01(0x245)]['y']-this[_0x41cc01(0x245)]['height']/0x2;},Sprite_AlertFovSprite[_0x2a5d29(0x1bb)][_0x2a5d29(0x1cd)]=function(){const _0xedfb59=_0x2a5d29,_0x2cb3a1=this[_0xedfb59(0x1dc)];let _0x340d08=_0x2cb3a1[_0xedfb59(0x339)]/-0x2;_0x340d08+=[0x0,0x87,0x5a,0x2d,0xb4,0x0,0x0,0xe1,0x10e,0x13b][this[_0xedfb59(0x1d3)][_0xedfb59(0x2a2)]],this['angle']=_0x340d08;},Spriteset_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x257)]=function(){const _0x368135=_0x2a5d29;let _0x24dd6d=SceneManager[_0x368135(0x330)][_0x368135(0x23e)];_0x24dd6d=_0x24dd6d[_0x368135(0x1da)](0x0)[_0x368135(0x29b)]()+_0x24dd6d['slice'](0x1);const _0xd78b6e=_0x368135(0x302)+_0x24dd6d;if(this[_0xd78b6e])return this[_0xd78b6e]();},Spriteset_Map[_0x2a5d29(0x1bb)]['updateBattleTransitionFilter']=function(){const _0x27642b=_0x2a5d29;if(!this[_0x27642b(0x226)])return;let _0x2a8107=SceneManager[_0x27642b(0x330)]['_battleTransitionType'];_0x2a8107=_0x2a8107['charAt'](0x0)['toUpperCase']()+_0x2a8107['slice'](0x1);const _0x3b769f=_0x27642b(0x235)+_0x2a8107;if(this[_0x3b769f])return this[_0x3b769f]();},Spriteset_Map['prototype']['createBattleTransitionFilter_Aberration']=function(){const _0x5a7148=_0x2a5d29;if(!PIXI[_0x5a7148(0x2b6)]['RGBSplitFilter'])return;const _0x3a0215=new PIXI[(_0x5a7148(0x2b6))][(_0x5a7148(0x25e))](),_0x4007ad=['red','green',_0x5a7148(0x24c)];for(const _0x18633f of _0x4007ad){_0x3a0215[_0x18633f]=[0x0,0x0],_0x3a0215[_0x18633f][_0x5a7148(0x318)]=(Math[_0x5a7148(0x1cb)](0x40)+0x1)*(Math[_0x5a7148(0x28b)]()>0.5?-0x1:0x1),_0x3a0215[_0x18633f]['targetY']=(Math[_0x5a7148(0x1cb)](0x40)+0x1)*(Math[_0x5a7148(0x28b)]()>0.5?-0x1:0x1);}const _0x2c9f5f=new ColorFilter();this[_0x5a7148(0x226)]=_0x3a0215,this[_0x5a7148(0x2cf)]=_0x2c9f5f,this[_0x5a7148(0x2b6)]=this[_0x5a7148(0x2b6)]||[],this[_0x5a7148(0x2b6)][_0x5a7148(0x2a8)](_0x3a0215,_0x2c9f5f),this['_battleTransitionDuration']=SceneManager[_0x5a7148(0x330)][_0x5a7148(0x2e4)]();},Spriteset_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x337)]=function(){const _0x4fa045=_0x2a5d29;if(this[_0x4fa045(0x2f7)]>0x0&&this[_0x4fa045(0x226)]){const _0x5e215d=this[_0x4fa045(0x226)],_0x26a6c3=this[_0x4fa045(0x2cf)],_0x1629cb=this['_battleTransitionDuration'],_0x3f0d08=[_0x4fa045(0x2d1),'green',_0x4fa045(0x24c)];for(const _0x5f4da3 of _0x3f0d08){_0x5e215d[_0x5f4da3][0x0]=(_0x5e215d[_0x5f4da3][0x0]*(_0x1629cb-0x1)+_0x5e215d[_0x5f4da3]['targetX'])/_0x1629cb,_0x5e215d[_0x5f4da3][0x1]=(_0x5e215d[_0x5f4da3][0x1]*(_0x1629cb-0x1)+_0x5e215d[_0x5f4da3]['targetY'])/_0x1629cb;}for(let _0x156c1c=0x0;_0x156c1c<0x3;_0x156c1c++){_0x26a6c3[_0x4fa045(0x26e)][_0x4fa045(0x2ab)][_0x156c1c]=(_0x26a6c3['uniforms']['colorTone'][_0x156c1c]*(_0x1629cb-0x1)-0x80)/_0x1629cb;}this[_0x4fa045(0x2f7)]--;}},Spriteset_Map['prototype'][_0x2a5d29(0x251)]=function(){const _0x1339c5=_0x2a5d29;if(!PIXI['filters']['BlurFilter'])return;const _0x198af1=new PIXI[(_0x1339c5(0x2b6))][(_0x1339c5(0x345))]();_0x198af1[_0x1339c5(0x1fd)]=0x0,_0x198af1[_0x1339c5(0x29e)]=0x1,_0x198af1[_0x1339c5(0x195)]=0x5;const _0x21954b=new ColorFilter();this[_0x1339c5(0x226)]=_0x198af1,this['_battleTransitionFilter2']=_0x21954b,this[_0x1339c5(0x2b6)]=this[_0x1339c5(0x2b6)]||[],this['filters'][_0x1339c5(0x2a8)](_0x198af1,_0x21954b),this[_0x1339c5(0x2f7)]=SceneManager[_0x1339c5(0x330)]['encounterEffectSpeed']();},Spriteset_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x2b5)]=function(){const _0x4ea22a=_0x2a5d29;if(this[_0x4ea22a(0x2f7)]>0x0&&this['_battleTransitionFilter']){const _0x520000=this[_0x4ea22a(0x226)],_0x252acf=this[_0x4ea22a(0x2cf)],_0x483bc0=this[_0x4ea22a(0x2f7)];_0x520000[_0x4ea22a(0x1fd)]=(_0x520000[_0x4ea22a(0x1fd)]*(_0x483bc0-0x1)+0x64)/_0x483bc0;for(let _0xf08da7=0x0;_0xf08da7<0x3;_0xf08da7++){_0x252acf[_0x4ea22a(0x26e)][_0x4ea22a(0x2ab)][_0xf08da7]=(_0x252acf[_0x4ea22a(0x26e)][_0x4ea22a(0x2ab)][_0xf08da7]*(_0x483bc0-0x1)+0x80)/_0x483bc0;}this['_battleTransitionDuration']--;}},Spriteset_Map['prototype'][_0x2a5d29(0x1b2)]=function(){const _0x493a60=_0x2a5d29;if(!PIXI[_0x493a60(0x2b6)][_0x493a60(0x345)])return;const _0x5897dc=new PIXI['filters'][(_0x493a60(0x345))]();_0x5897dc[_0x493a60(0x1fd)]=0x0,_0x5897dc['kernelSize']=0x5;const _0x37a028=new ColorFilter();this[_0x493a60(0x226)]=_0x5897dc,this[_0x493a60(0x2cf)]=_0x37a028,this[_0x493a60(0x2b6)]=this[_0x493a60(0x2b6)]||[],this[_0x493a60(0x2b6)][_0x493a60(0x2a8)](_0x5897dc,_0x37a028),this[_0x493a60(0x2f7)]=SceneManager[_0x493a60(0x330)][_0x493a60(0x2e4)]();},Spriteset_Map['prototype'][_0x2a5d29(0x34c)]=function(){const _0x1c0e9c=_0x2a5d29;if(this[_0x1c0e9c(0x2f7)]>0x0&&this[_0x1c0e9c(0x226)]){const _0x230390=this['_battleTransitionFilter'],_0x2e3364=this[_0x1c0e9c(0x2cf)],_0x2ed0a7=this[_0x1c0e9c(0x2f7)];_0x230390[_0x1c0e9c(0x1fd)]=(_0x230390[_0x1c0e9c(0x1fd)]*(_0x2ed0a7-0x1)+0x1e)/_0x2ed0a7;for(let _0x5e08f2=0x0;_0x5e08f2<0x4;_0x5e08f2++){_0x2e3364['uniforms'][_0x1c0e9c(0x2ab)][_0x5e08f2]=(_0x2e3364[_0x1c0e9c(0x26e)][_0x1c0e9c(0x2ab)][_0x5e08f2]*(_0x2ed0a7-0x1)+0xff)/_0x2ed0a7;}this[_0x1c0e9c(0x2f7)]--;}},Spriteset_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x311)]=function(){const _0x34a20a=_0x2a5d29;if(!PIXI['filters'][_0x34a20a(0x204)])return;const _0xf64000=new PIXI['filters'][(_0x34a20a(0x204))]();_0xf64000[_0x34a20a(0x287)]=Math[_0x34a20a(0x28b)](),_0xf64000[_0x34a20a(0x2e3)]=0xa;const _0x2c1a87=new ColorFilter();this['_battleTransitionFilter']=_0xf64000,this[_0x34a20a(0x2cf)]=_0x2c1a87,this[_0x34a20a(0x2b6)]=this[_0x34a20a(0x2b6)]||[],this[_0x34a20a(0x2b6)][_0x34a20a(0x2a8)](_0xf64000,_0x2c1a87),this[_0x34a20a(0x2f7)]=SceneManager['_scene'][_0x34a20a(0x2e4)]();},Spriteset_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x2fc)]=function(){const _0x507242=_0x2a5d29;if(this['_battleTransitionDuration']>0x0&&this[_0x507242(0x226)]){const _0x299103=this[_0x507242(0x226)],_0x5f27c8=this[_0x507242(0x2cf)],_0x174532=this[_0x507242(0x2f7)];_0x299103[_0x507242(0x2e3)]=Math[_0x507242(0x1cb)](0xa)+0x1,_0x299103['red']['x']=Math[_0x507242(0x1cb)](0x14)*(Math[_0x507242(0x28b)]()>0.5?-0x1:0x1),_0x299103[_0x507242(0x2d1)]['y']=Math[_0x507242(0x1cb)](0x14)*(Math[_0x507242(0x28b)]()>0.5?-0x1:0x1),_0x299103[_0x507242(0x32b)]['x']=Math['randomInt'](0x14)*(Math[_0x507242(0x28b)]()>0.5?-0x1:0x1),_0x299103[_0x507242(0x32b)]['y']=Math[_0x507242(0x1cb)](0x14)*(Math['random']()>0.5?-0x1:0x1),_0x299103[_0x507242(0x24c)]['x']=Math['randomInt'](0x14)*(Math[_0x507242(0x28b)]()>0.5?-0x1:0x1),_0x299103[_0x507242(0x24c)]['y']=Math['randomInt'](0x14)*(Math[_0x507242(0x28b)]()>0.5?-0x1:0x1);for(let _0x10950e=0x0;_0x10950e<0x4;_0x10950e++){_0x5f27c8[_0x507242(0x26e)]['colorTone'][_0x10950e]=Math['randomInt'](0x20);}this[_0x507242(0x2f7)]--;}},Spriteset_Map[_0x2a5d29(0x1bb)]['createBattleTransitionFilter_Hue']=function(){const _0x3536e2=_0x2a5d29,_0x20e199=new ColorFilter();this[_0x3536e2(0x226)]=_0x20e199,this[_0x3536e2(0x2b6)]=this[_0x3536e2(0x2b6)]||[],this[_0x3536e2(0x2b6)][_0x3536e2(0x2a8)](_0x20e199),this[_0x3536e2(0x2f7)]=SceneManager[_0x3536e2(0x330)][_0x3536e2(0x2e4)]();},Spriteset_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x1e8)]=function(){const _0x50e49a=_0x2a5d29;if(this[_0x50e49a(0x2f7)]>0x0&&this['_battleTransitionFilter']){const _0x2b341d=this['_battleTransitionFilter'],_0x530880=this[_0x50e49a(0x2f7)];_0x2b341d['uniforms']['hue']=(_0x2b341d[_0x50e49a(0x26e)][_0x50e49a(0x2f4)]*(_0x530880-0x1)+0x168)/_0x530880;for(let _0x404b2b=0x0;_0x404b2b<0x3;_0x404b2b++){_0x2b341d[_0x50e49a(0x26e)][_0x50e49a(0x2ab)][_0x404b2b]=(_0x2b341d[_0x50e49a(0x26e)][_0x50e49a(0x2ab)][_0x404b2b]*(_0x530880-0x1)+0xff)/_0x530880;}this['_battleTransitionDuration']--;}},Spriteset_Map[_0x2a5d29(0x1bb)]['createBattleTransitionFilter_Pixel']=function(){const _0x45f76e=_0x2a5d29;if(!PIXI[_0x45f76e(0x2b6)][_0x45f76e(0x2b9)])return;const _0x3c9370=new PIXI['filters'][(_0x45f76e(0x2b9))]();_0x3c9370[_0x45f76e(0x31c)]['x']=0x1,_0x3c9370[_0x45f76e(0x31c)]['y']=0x1,this[_0x45f76e(0x226)]=_0x3c9370,this[_0x45f76e(0x2b6)]=this['filters']||[],this[_0x45f76e(0x2b6)][_0x45f76e(0x2a8)](_0x3c9370),this[_0x45f76e(0x2f7)]=SceneManager[_0x45f76e(0x330)][_0x45f76e(0x2e4)]();},Spriteset_Map[_0x2a5d29(0x1bb)]['updateBattleTransitionFilter_Pixel']=function(){const _0x415dda=_0x2a5d29;if(this[_0x415dda(0x2f7)]>0x0&&this['_battleTransitionFilter']){const _0x226949=this[_0x415dda(0x226)],_0x116723=this['_battleTransitionDuration'];_0x226949['size']['x']=(_0x226949[_0x415dda(0x31c)]['x']*(_0x116723-0x1)+0x32)/_0x116723,_0x226949[_0x415dda(0x31c)]['y']=(_0x226949[_0x415dda(0x31c)]['y']*(_0x116723-0x1)+0x32)/_0x116723,this[_0x415dda(0x2f7)]--;}},Spriteset_Map['prototype']['createBattleTransitionFilter_Spiral']=function(){const _0x7e1689=_0x2a5d29;if(!PIXI[_0x7e1689(0x2b6)]['RadialBlurFilter'])return;const _0x3fa387=new PIXI[(_0x7e1689(0x2b6))][(_0x7e1689(0x2b3))]();_0x3fa387[_0x7e1689(0x28a)]=0x0,_0x3fa387[_0x7e1689(0x303)]=Math['random']()<0.5?-0x168:0x168,_0x3fa387[_0x7e1689(0x24f)]=0x500,_0x3fa387['center']['x']=$gamePlayer['screenX'](),_0x3fa387[_0x7e1689(0x328)]['y']=$gamePlayer[_0x7e1689(0x1ea)]()-$gameMap[_0x7e1689(0x23b)]()/0x2,_0x3fa387[_0x7e1689(0x195)]=0x5,this['_battleTransitionFilter']=_0x3fa387,this[_0x7e1689(0x2b6)]=this[_0x7e1689(0x2b6)]||[],this[_0x7e1689(0x2b6)][_0x7e1689(0x2a8)](_0x3fa387),this[_0x7e1689(0x2f7)]=SceneManager['_scene'][_0x7e1689(0x2e4)]();},Spriteset_Map['prototype'][_0x2a5d29(0x1b7)]=function(){const _0x493f9c=_0x2a5d29;if(this['_battleTransitionDuration']>0x0&&this[_0x493f9c(0x226)]){const _0x57bafd=this[_0x493f9c(0x226)],_0x4dd57a=this[_0x493f9c(0x2f7)];_0x57bafd[_0x493f9c(0x28a)]=(_0x57bafd[_0x493f9c(0x28a)]*(_0x4dd57a-0x1)+_0x57bafd['targetAngle'])/_0x4dd57a,_0x57bafd['kernelSize']=(_0x57bafd['kernelSize']*(_0x4dd57a-0x1)+0xc)/_0x4dd57a,this['_battleTransitionDuration']--;}},Spriteset_Map[_0x2a5d29(0x1bb)]['createBattleTransitionFilter_Static']=function(){const _0x31ddfb=_0x2a5d29;if(!PIXI['filters'][_0x31ddfb(0x298)])return;const _0x56db75=new PIXI[(_0x31ddfb(0x2b6))][(_0x31ddfb(0x298))]();_0x56db75[_0x31ddfb(0x19f)]=0x0,_0x56db75[_0x31ddfb(0x1b3)]=0x0,_0x56db75[_0x31ddfb(0x287)]=Math[_0x31ddfb(0x28b)](),_0x56db75[_0x31ddfb(0x228)]=0x0,this[_0x31ddfb(0x226)]=_0x56db75,this[_0x31ddfb(0x2b6)]=this[_0x31ddfb(0x2b6)]||[],this[_0x31ddfb(0x2b6)][_0x31ddfb(0x2a8)](_0x56db75),this[_0x31ddfb(0x2f7)]=SceneManager[_0x31ddfb(0x330)][_0x31ddfb(0x2e4)]();},Spriteset_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x2f3)]=function(){const _0x5c9aa5=_0x2a5d29;if(this['_battleTransitionDuration']>0x0&&this[_0x5c9aa5(0x226)]){const _0x42a478=this[_0x5c9aa5(0x226)],_0x448c3c=this[_0x5c9aa5(0x2f7)];_0x42a478[_0x5c9aa5(0x19f)]=(_0x42a478['noise']*(_0x448c3c-0x1)+0x3)/_0x448c3c,_0x42a478['lineWidth']=(_0x42a478[_0x5c9aa5(0x1b3)]*(_0x448c3c-0x1)+0x14)/_0x448c3c,_0x42a478[_0x5c9aa5(0x228)]=(_0x42a478[_0x5c9aa5(0x228)]*(_0x448c3c-0x1)+0x1)/_0x448c3c,_0x42a478['seed']=Math['random'](),this['_battleTransitionDuration']--;}},Spriteset_Map['prototype']['createBattleTransitionFilter_Twirl']=function(){const _0x266896=_0x2a5d29;if(!PIXI['filters'][_0x266896(0x314)])return;const _0x378ad1=new PIXI[(_0x266896(0x2b6))]['TwistFilter']();_0x378ad1[_0x266896(0x28a)]=0x0,_0x378ad1[_0x266896(0x303)]=Math['random']()<0.5?-0xa:0xa,_0x378ad1['radius']=0x0,_0x378ad1['offset']={},_0x378ad1[_0x266896(0x215)]['x']=$gamePlayer[_0x266896(0x224)](),_0x378ad1[_0x266896(0x215)]['y']=$gamePlayer[_0x266896(0x1ea)]()-$gameMap['tileHeight']()/0x2;const _0x42e5e3=new ColorFilter();this[_0x266896(0x226)]=_0x378ad1,this[_0x266896(0x2cf)]=_0x42e5e3,this[_0x266896(0x2b6)]=this[_0x266896(0x2b6)]||[],this[_0x266896(0x2b6)][_0x266896(0x2a8)](_0x378ad1,_0x42e5e3),this['_battleTransitionDuration']=SceneManager[_0x266896(0x330)][_0x266896(0x2e4)]();},Spriteset_Map['prototype'][_0x2a5d29(0x1c2)]=function(){const _0x4ebc83=_0x2a5d29;if(this['_battleTransitionDuration']>0x0&&this[_0x4ebc83(0x226)]){const _0x7980d=this[_0x4ebc83(0x226)],_0x228444=this['_battleTransitionFilter2'],_0x5d0f94=this['_battleTransitionDuration'];_0x7980d[_0x4ebc83(0x28a)]=(_0x7980d['angle']*(_0x5d0f94-0x1)+_0x7980d[_0x4ebc83(0x303)])/_0x5d0f94,_0x7980d[_0x4ebc83(0x24f)]=(_0x7980d[_0x4ebc83(0x24f)]*(_0x5d0f94-0x1)+Graphics[_0x4ebc83(0x1f0)])/_0x5d0f94;for(let _0x28d403=0x0;_0x28d403<0x4;_0x28d403++){_0x228444[_0x4ebc83(0x26e)]['colorTone'][_0x28d403]=(_0x228444[_0x4ebc83(0x26e)][_0x4ebc83(0x2ab)][_0x28d403]*(_0x5d0f94-0x1)+0x80)/_0x5d0f94;}this[_0x4ebc83(0x2f7)]--;}},Spriteset_Map['prototype'][_0x2a5d29(0x25b)]=function(){const _0x542936=_0x2a5d29;if(!PIXI['filters'][_0x542936(0x317)])return;const _0x2696a6=new PIXI[(_0x542936(0x2b6))][(_0x542936(0x317))]();_0x2696a6[_0x542936(0x305)]=0x0,_0x2696a6['innerRadius']=0x0,_0x2696a6[_0x542936(0x328)]['x']=$gamePlayer['screenX'](),_0x2696a6['center']['y']=$gamePlayer['screenY']()-$gameMap[_0x542936(0x23b)]()/0x2;const _0x219d88=new PIXI[(_0x542936(0x2b6))][(_0x542936(0x2c2))]();this[_0x542936(0x226)]=_0x2696a6,this[_0x542936(0x2cf)]=_0x219d88,this[_0x542936(0x2b6)]=this[_0x542936(0x2b6)]||[],this[_0x542936(0x2b6)][_0x542936(0x2a8)](_0x2696a6,_0x219d88),this[_0x542936(0x2f7)]=SceneManager['_scene'][_0x542936(0x2e4)]();},Spriteset_Map[_0x2a5d29(0x1bb)][_0x2a5d29(0x198)]=function(){const _0x2ca8a6=_0x2a5d29;if(this[_0x2ca8a6(0x2f7)]>0x0&&this[_0x2ca8a6(0x226)]){const _0x1ee278=this[_0x2ca8a6(0x226)],_0x50647a=this['_battleTransitionFilter2'],_0x18fc77=this[_0x2ca8a6(0x2f7)];_0x1ee278[_0x2ca8a6(0x305)]=(_0x1ee278[_0x2ca8a6(0x305)]*(_0x18fc77-0x1)+0x1)/_0x18fc77,_0x50647a['brightness']=(_0x50647a[_0x2ca8a6(0x264)]*(_0x18fc77-0x1)+0x2)/_0x18fc77,_0x50647a['blue']=(_0x50647a['blue']*(_0x18fc77-0x1)+0x2)/_0x18fc77,this[_0x2ca8a6(0x2f7)]--;}};