//=============================================================================
// VisuStella MZ - Icon Balloons
// VisuMZ_4_IconBalloons.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_IconBalloons = true;

var VisuMZ = VisuMZ || {};
VisuMZ.IconBalloons = VisuMZ.IconBalloons || {};
VisuMZ.IconBalloons.version = 1.00;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.00] [IconBalloons]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Icon_Balloons_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ provides us with 15 Balloon Animations to use to allow our
 * events to show emotions with. Sometimes, this just isn't enough. However,
 * this plugin allows you to use icons from your IconSet to extend the number
 * of balloon types you can use as well as animate them frame by frame.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Select any icon found in your game project's iconset to display as a
 *   balloon animation.
 * * Use your own custom balloon skin or use an automatically modified one with
 *   the default RTP set.
 * * Displayed icons can be individual icons or animated icons.
 * * Animated icons can be displayed through a range of icons or through
 *   specific sets of icons.
 * * Play these balloon animations on events, the player character, or the
 *   player's followers.
 * * Gain back access to RPG Maker MV's script calls that allowed custom Event
 *   Move Routes to use the "this._balloonId = x" script call once again.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
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
 * Automatically Modified Icon Balloon Spritesheet
 * 
 * If you choose to not use a custom balloon skin found in the /img/system/
 * folder, then the plugin will create its own balloon skin (without any
 * emotion markers) through usage of the currently existing balloon image
 * spritesheet. This best works with the RTP balloon spritesheet provided by
 * RPG Maker MZ.
 *
 * ---
 * 
 * Event Move Route Script Call
 * 
 * Previously in RPG Maker MV, using "this._balloonId = x" in the script call
 * of an event's custom Move Route would allow it to display balloons at
 * specific points in their move route. This was no longer the case in RPG
 * Maker MZ due to how the balloon activation calls were changed.
 * 
 * This plugin brings back this capability to allow for balloon animation
 * requests to work again the way it used to.
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
 * === Balloon Plugin Commands ===
 * 
 * ---
 *
 * Balloon: Event with Single Icon Balloon
 * - Plays a single icon balloon animation on target event.
 * - Can only be used on the map scene.
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 *
 *   Icon Index:
 *   - Insert the ID of the icon to show.
 *   - Tip: Right click > Insert Icon Index
 *
 *   Wait for Completion:
 *   - Wait for balloon animation completion before continuing?
 *
 * ---
 *
 * Balloon: Event with Icon Range Balloon
 * - Plays an icon range balloon animation on target event.
 * - Can only be used on the map scene.
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 *
 *   Starting Icon Index:
 *   - Insert the ID of the icon to show.
 *   - Tip: Right click > Insert Icon Index
 *
 *   Ending Icon Index:
 *   - Insert the ID of the icon to show.
 *   - Tip: Right click > Insert Icon Index
 *
 *   Wait for Completion:
 *   - Wait for balloon animation completion before continuing?
 *
 * ---
 *
 * Balloon: Event with Specific Icons Balloon
 * - Plays specific icons balloon animation on target event.
 * - Can only be used on the map scene.
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 *
 *   Icons:
 *   - Insert the ID(s) of the icon to show.
 *   - Tip: Right click > Insert Icon Index
 *
 *   Wait for Completion:
 *   - Wait for balloon animation completion before continuing?
 *
 * ---
 *
 * Balloon: Follower with Single Icon Balloon
 * - Plays a single icon balloon animation on target follower.
 * - Can only be used on the map scene.
 *
 *   Follower ID:
 *   - Select which follower ID to show a balloon on.
 *   - Follower ID's start at 1.
 *
 *   Icon Index:
 *   - Insert the ID of the icon to show.
 *   - Tip: Right click > Insert Icon Index
 *
 *   Wait for Completion:
 *   - Wait for balloon animation completion before continuing?
 *
 * ---
 *
 * Balloon: Follower with Icon Range Balloon
 * - Plays an icon range balloon animation on target follower.
 * - Can only be used on the map scene.
 *
 *   Follower ID:
 *   - Select which follower ID to show a balloon on.
 *   - Follower ID's start at 1.
 *
 *   Starting Icon Index:
 *   - Insert the ID of the icon to show.
 *   - Tip: Right click > Insert Icon Index
 *
 *   Ending Icon Index:
 *   - Insert the ID of the icon to show.
 *   - Tip: Right click > Insert Icon Index
 *
 *   Wait for Completion:
 *   - Wait for balloon animation completion before continuing?
 *
 * ---
 *
 * Balloon: Follower with Specific Icons Balloon
 * - Plays specific icons balloon animation on target follower.
 * - Can only be used on the map scene.
 *
 *   Follower ID:
 *   - Select which follower ID to show a balloon on.
 *   - Follower ID's start at 1.
 *
 *   Icons:
 *   - Insert the ID(s) of the icon to show.
 *   - Tip: Right click > Insert Icon Index
 *
 *   Wait for Completion:
 *   - Wait for balloon animation completion before continuing?
 *
 * ---
 *
 * Balloon: Player with Single Icon Balloon
 * - Plays a single icon balloon animation on the player.
 * - Can only be used on the map scene.
 *
 *   Icon Index:
 *   - Insert the ID of the icon to show.
 *   - Tip: Right click > Insert Icon Index
 *
 *   Wait for Completion:
 *   - Wait for balloon animation completion before continuing?
 *
 * ---
 *
 * Balloon: Player with Icon Range Balloon
 * - Plays an icon range balloon animation on the player.
 * - Can only be used on the map scene.
 *
 *   Starting Icon Index:
 *   - Insert the ID of the icon to show.
 *   - Tip: Right click > Insert Icon Index
 *
 *   Ending Icon Index:
 *   - Insert the ID of the icon to show.
 *   - Tip: Right click > Insert Icon Index
 *
 *   Wait for Completion:
 *   - Wait for balloon animation completion before continuing?
 *
 * ---
 *
 * Balloon: Player with Specific Icons Balloon
 * - Plays specific icons balloon animation on the player.
 * - Can only be used on the map scene.
 *
 *   Icons:
 *   - Insert the ID(s) of the icon to show.
 *   - Tip: Right click > Insert Icon Index
 *
 *   Wait for Completion:
 *   - Wait for balloon animation completion before continuing?
 *
 * ---
 *
 * ============================================================================
 * Script Calls
 * ============================================================================
 *
 * The following are Script Calls that can be used with this plugin. These are
 * made for JavaScript proficient users. We are not responsible if you use them
 * incorrectly or for unintended usage.
 *
 * ---
 * 
 * === Move Route-Related Script Calls ===
 * 
 * ---
 *
 * this._balloonId = x
 * 
 * - Use in Custom Move Route script calls.
 * - Allows the target to call forth a balloon animation using the specific
 *   emotion indexed by 'x'.
 * - Replace 'x' with a number representing the following emotion:
 *   -  1 : Exclamation
 *   -  2 : Question
 *   -  3 : Music Note
 *   -  4 : Heart
 *   -  5 : Anger
 *   -  6 : Sweat
 *   -  7 : Frustration
 *   -  8 : Silence
 *   -  9 : Light Bulb
 *   - 10 : Zzz
 *   - 11 : User-defined 1
 *   - 12 : User-defined 2
 *   - 13 : User-defined 3
 *   - 14 : User-defined 4
 *   - 15 : User-defined 5
 * 
 * - Examples:
 *   - this._balloonId = 2
 *   - this._balloonId = 4
 *   - this._balloonId = 6
 *   - 
 *
 * ---
 *
 * this._balloonId = [x, x, x]
 * 
 * - Use in Custom Move Route script calls.
 * - Allows the target to call forth a ballon animation using the specific
 *   icons 'x' in that sequence.
 * - Replace 'x' with the icon index of the icons you wish to display and in
 *   the sequence that they are displayed in.
 * 
 * - Examples:
 *   - this._balloonId = [87]
 *   - this._balloonId = [87, 88, 89]
 *   - this._balloonId = [162, 163, 164, 165, 160, 161]
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings used for this plugin.
 *
 * ---
 *
 * Custom Balloon Skin
 * 
 *   Filename:
 *   - Filename of the custom balloon skin used.
 *   - Found in /img/system/
 *
 * ---
 *
 * Icon Offset
 * 
 *   Offset X:
 *   - Offsets the icon's x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the icon's y position.
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * Shrink Start
 * 
 *   Shrink Single Icon?:
 *   - Starts icons small or at full size when they appear.
 *   - Used for single icon balloons.
 * 
 *   Shrink Multi-Icon?:
 *   - Starts icons small or at full size when they appear.
 *   - Used for icon balloons with multiple icons.
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
 * Version 1.00 Official Release Date: July 28, 2023
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
 * @command Balloon_Event_Single
 * @text Balloon: Event with Single Icon Balloon
 * @desc Plays a single icon balloon animation on target event.
 * Can only be used on the map scene.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 *
 * @arg IconIndex:num
 * @text Icon Index
 * @desc Insert the ID of the icon to show.
 * Tip: Right click > Insert Icon Index
 * @default 0
 *
 * @arg WaitComplete:eval
 * @text Wait for Completion
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for balloon animation completion before continuing?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Balloon_Event_Range
 * @text Balloon: Event with Icon Range Balloon
 * @desc Plays an icon range balloon animation on target event.
 * Can only be used on the map scene.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 *
 * @arg startIcon:num
 * @text Starting Icon Index
 * @desc Insert the ID of the icon to show.
 * Tip: Right click > Insert Icon Index
 * @default 0
 *
 * @arg endIcon:num
 * @text Ending Icon Index
 * @desc Insert the ID of the icon to show.
 * Tip: Right click > Insert Icon Index
 * @default 0
 *
 * @arg WaitComplete:eval
 * @text Wait for Completion
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for balloon animation completion before continuing?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Balloon_Event_Specific
 * @text Balloon: Event with Specific Icons Balloon
 * @desc Plays specific icons balloon animation on target event.
 * Can only be used on the map scene.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 *
 * @arg icons:arraynum
 * @text Icons
 * @type string[]
 * @desc Insert the ID(s) of the icon to show.
 * Tip: Right click > Insert Icon Index
 * @default []
 *
 * @arg WaitComplete:eval
 * @text Wait for Completion
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for balloon animation completion before continuing?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Follower
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Balloon_Follower_Single
 * @text Balloon: Follower with Single Icon Balloon
 * @desc Plays a single icon balloon animation on target follower.
 * Can only be used on the map scene.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to show a balloon on.
 * Follower ID's start at 1.
 * @default 1
 *
 * @arg IconIndex:num
 * @text Icon Index
 * @desc Insert the ID of the icon to show.
 * Tip: Right click > Insert Icon Index
 * @default 0
 *
 * @arg WaitComplete:eval
 * @text Wait for Completion
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for balloon animation completion before continuing?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Balloon_Follower_Range
 * @text Balloon: Follower with Icon Range Balloon
 * @desc Plays an icon range balloon animation on target follower.
 * Can only be used on the map scene.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to show a balloon on.
 * Follower ID's start at 1.
 * @default 1
 *
 * @arg startIcon:num
 * @text Starting Icon Index
 * @desc Insert the ID of the icon to show.
 * Tip: Right click > Insert Icon Index
 * @default 0
 *
 * @arg endIcon:num
 * @text Ending Icon Index
 * @desc Insert the ID of the icon to show.
 * Tip: Right click > Insert Icon Index
 * @default 0
 *
 * @arg WaitComplete:eval
 * @text Wait for Completion
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for balloon animation completion before continuing?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Balloon_Follower_Specific
 * @text Balloon: Follower with Specific Icons Balloon
 * @desc Plays specific icons balloon animation on target follower.
 * Can only be used on the map scene.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to show a balloon on.
 * Follower ID's start at 1.
 * @default 1
 *
 * @arg icons:arraynum
 * @text Icons
 * @type string[]
 * @desc Insert the ID(s) of the icon to show.
 * Tip: Right click > Insert Icon Index
 * @default []
 *
 * @arg WaitComplete:eval
 * @text Wait for Completion
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for balloon animation completion before continuing?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Player
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Balloon_Player_Single
 * @text Balloon: Player with Single Icon Balloon
 * @desc Plays a single icon balloon animation on the player.
 * Can only be used on the map scene.
 *
 * @arg IconIndex:num
 * @text Icon Index
 * @desc Insert the ID of the icon to show.
 * Tip: Right click > Insert Icon Index
 * @default 0
 *
 * @arg WaitComplete:eval
 * @text Wait for Completion
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for balloon animation completion before continuing?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Balloon_Player_Range
 * @text Balloon: Player with Icon Range Balloon
 * @desc Plays an icon range balloon animation on the player.
 * Can only be used on the map scene.
 *
 * @arg startIcon:num
 * @text Starting Icon Index
 * @desc Insert the ID of the icon to show.
 * Tip: Right click > Insert Icon Index
 * @default 0
 *
 * @arg endIcon:num
 * @text Ending Icon Index
 * @desc Insert the ID of the icon to show.
 * Tip: Right click > Insert Icon Index
 * @default 0
 *
 * @arg WaitComplete:eval
 * @text Wait for Completion
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for balloon animation completion before continuing?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Balloon_Player_Specific
 * @text Balloon: Player with Specific Icons Balloon
 * @desc Plays specific icons balloon animation on the player.
 * Can only be used on the map scene.
 *
 * @arg icons:arraynum
 * @text Icons
 * @type string[]
 * @desc Insert the ID(s) of the icon to show.
 * Tip: Right click > Insert Icon Index
 * @default []
 *
 * @arg WaitComplete:eval
 * @text Wait for Completion
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for balloon animation completion before continuing?
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
 * @param IconBalloons
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param CustomSkin
 * @text Custom Balloon Skin
 *
 * @param filename:str
 * @text Filename
 * @parent CustomSkin
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the custom balloon skin used.
 * Found in /img/system/
 * @default 
 * 
 * @param IconOffset
 * @text Icon Offset
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent IconOffset
 * @desc Offsets the icon's x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent IconOffset
 * @desc Offsets the icon's y position.
 * Negative: up. Positive: down.
 * @default -1
 * 
 * @param ShrinkStart
 * @text Shrink Start
 *
 * @param shrinkSingle:eval
 * @text Shrink Single Icon?
 * @parent ShrinkStart
 * @type boolean
 * @on Start Small
 * @off Start Full Size
 * @desc Starts icons small or at full size when they appear.
 * Used for single icon balloons.
 * @default true
 *
 * @param shrinkMulti:eval
 * @text Shrink Multi-Icon?
 * @parent ShrinkStart
 * @type boolean
 * @on Start Small
 * @off Start Full Size
 * @desc Starts icons small or at full size when they appear.
 * Used for icon balloons with multiple icons.
 * @default false
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
//=============================================================================

function _0x1557(){const _0x308db0=['waitTime','STRUCT','_iconData','loadSystem','OsVOy','ConvertParams','setLastPluginCommandInterpreter','Balloon_Follower_Range','WaitComplete','wait','IconIndex','kIlVi','width','follower','startIcon','setWaitMode','_speed','SETTINGS','iconHeight','Scene_Boot_loadSystemImages','EventID','_scene','max','map','parameters','_waitFrames','fJPvF','_spriteset','Game_Interpreter_PluginCommand','Spriteset_Map_createBalloon','NTOhd','findTargetSprite','FUNC','event','registerCommand','updateBalloonID','JSON','setFrame','218244KkAahQ','_customModified','BJTqN','cachedIconBalloonsImage','WrzfZ','_target','Balloon_Event_Single','Balloon','RvSkl','4416aEZcSo','Balloon_Event_Specific','prototype','anchor','setup','isInstanceOfSceneMap','3039311QJzYqj','length','_duration','requestBalloon','endIcon','toUpperCase','Game_CharacterBase_update','balloonId','description','filter','createIconSprite','NUM','OqaMJ','24FrGjtx','_count','qLrzo','klAko','format','ARRAYSTRUCT','createBalloon','ARRAYJSON','shrink','exit','Balloon_Follower_Specific','eventId','WEjxP','ARRAYEVAL','Balloon_Player_Single','speed','11695aWPhPq','call','match','66228CDzqub','status','oBQgh','multi','update','_characterId','bitmap','trim','ARRAYSTR','IconSet','_effectsContainer','target','command357','_lastPluginCommandInterpreter','HWWcF','balloon','7880KkRPfe','_currentIndex','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','updateCount','initialize','constructor','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','followers','Balloon_Event_Range','includes','fillRect','_iconIndex','FollowerID','ICON_BALLOON_FILENAME','_balloonSprites','Balloon_Follower_Single','_cached_IconBalloons_Image','QqtAa','updateScale','Balloon_Player_Range','shrinkMulti','IconBalloons','loadBitmap','scale','YAJNM','_balloonId','15849WSZGRg','push','1720mHJfQJ','floor','name','min','blt','ewgpX','OffsetY','Ckauu','updateFrame','getLastPluginCommandInterpreter','parse','Settings','QQHIY','OffsetX','createIconBalloon','12187yladRo','Balloon_Player_Specific','WJpAW','10008000buXoXJ','STR','initMembers','setIconIndex','create','EVAL','addChild','clone','version','icons'];_0x1557=function(){return _0x308db0;};return _0x1557();}const _0x4047ff=_0x57bd;(function(_0x176e7b,_0x500404){const _0x25489e=_0x57bd,_0x55b58d=_0x176e7b();while(!![]){try{const _0x226e01=parseInt(_0x25489e(0xb4))/0x1+-parseInt(_0x25489e(0xa1))/0x2*(-parseInt(_0x25489e(0x122))/0x3)+parseInt(_0x25489e(0xe0))/0x4*(-parseInt(_0x25489e(0xb1))/0x5)+parseInt(_0x25489e(0x12b))/0x6*(parseInt(_0x25489e(0xef))/0x7)+parseInt(_0x25489e(0xf2))/0x8+-parseInt(_0x25489e(0xde))/0x9*(parseInt(_0x25489e(0xc4))/0xa)+-parseInt(_0x25489e(0x94))/0xb;if(_0x226e01===_0x500404)break;else _0x55b58d['push'](_0x55b58d['shift']());}catch(_0x663a5){_0x55b58d['push'](_0x55b58d['shift']());}}}(_0x1557,0xc3c31));var label=_0x4047ff(0xd9),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x4047ff(0x9d)](function(_0x1647ce){const _0x9f2a4a=_0x4047ff;return _0x1647ce['status']&&_0x1647ce[_0x9f2a4a(0x9c)][_0x9f2a4a(0xcd)]('['+label+']');})[0x0];function _0x57bd(_0x3ddb5f,_0x16d375){const _0x1557cc=_0x1557();return _0x57bd=function(_0x57bd90,_0x271be9){_0x57bd90=_0x57bd90-0x94;let _0x1f4100=_0x1557cc[_0x57bd90];return _0x1f4100;},_0x57bd(_0x3ddb5f,_0x16d375);}VisuMZ[label][_0x4047ff(0xeb)]=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0x789c5,_0x15f2d7){const _0x596f2d=_0x4047ff;for(const _0x5236b8 in _0x15f2d7){if(_0x5236b8['match'](/(.*):(.*)/i)){const _0x1bbc43=String(RegExp['$1']),_0x51f8a5=String(RegExp['$2'])[_0x596f2d(0x99)]()[_0x596f2d(0xbb)]();let _0x5e8505,_0x25ce75,_0x28e54d;switch(_0x51f8a5){case _0x596f2d(0x9f):_0x5e8505=_0x15f2d7[_0x5236b8]!==''?Number(_0x15f2d7[_0x5236b8]):0x0;break;case'ARRAYNUM':_0x25ce75=_0x15f2d7[_0x5236b8]!==''?JSON[_0x596f2d(0xea)](_0x15f2d7[_0x5236b8]):[],_0x5e8505=_0x25ce75[_0x596f2d(0x113)](_0x195630=>Number(_0x195630));break;case _0x596f2d(0xf7):_0x5e8505=_0x15f2d7[_0x5236b8]!==''?eval(_0x15f2d7[_0x5236b8]):null;break;case _0x596f2d(0xae):_0x25ce75=_0x15f2d7[_0x5236b8]!==''?JSON['parse'](_0x15f2d7[_0x5236b8]):[],_0x5e8505=_0x25ce75[_0x596f2d(0x113)](_0x42e724=>eval(_0x42e724));break;case _0x596f2d(0x120):_0x5e8505=_0x15f2d7[_0x5236b8]!==''?JSON[_0x596f2d(0xea)](_0x15f2d7[_0x5236b8]):'';break;case _0x596f2d(0xa8):_0x25ce75=_0x15f2d7[_0x5236b8]!==''?JSON[_0x596f2d(0xea)](_0x15f2d7[_0x5236b8]):[],_0x5e8505=_0x25ce75[_0x596f2d(0x113)](_0x5d2ede=>JSON['parse'](_0x5d2ede));break;case _0x596f2d(0x11c):_0x5e8505=_0x15f2d7[_0x5236b8]!==''?new Function(JSON[_0x596f2d(0xea)](_0x15f2d7[_0x5236b8])):new Function('return\x200');break;case'ARRAYFUNC':_0x25ce75=_0x15f2d7[_0x5236b8]!==''?JSON[_0x596f2d(0xea)](_0x15f2d7[_0x5236b8]):[],_0x5e8505=_0x25ce75[_0x596f2d(0x113)](_0x38a35d=>new Function(JSON[_0x596f2d(0xea)](_0x38a35d)));break;case _0x596f2d(0xf3):_0x5e8505=_0x15f2d7[_0x5236b8]!==''?String(_0x15f2d7[_0x5236b8]):'';break;case _0x596f2d(0xbc):_0x25ce75=_0x15f2d7[_0x5236b8]!==''?JSON[_0x596f2d(0xea)](_0x15f2d7[_0x5236b8]):[],_0x5e8505=_0x25ce75[_0x596f2d(0x113)](_0xc9563f=>String(_0xc9563f));break;case _0x596f2d(0xfd):_0x28e54d=_0x15f2d7[_0x5236b8]!==''?JSON['parse'](_0x15f2d7[_0x5236b8]):{},_0x5e8505=VisuMZ['ConvertParams']({},_0x28e54d);break;case _0x596f2d(0xa6):_0x25ce75=_0x15f2d7[_0x5236b8]!==''?JSON[_0x596f2d(0xea)](_0x15f2d7[_0x5236b8]):[],_0x5e8505=_0x25ce75[_0x596f2d(0x113)](_0x420b7b=>VisuMZ[_0x596f2d(0x101)]({},JSON[_0x596f2d(0xea)](_0x420b7b)));break;default:continue;}_0x789c5[_0x1bbc43]=_0x5e8505;}}return _0x789c5;},(_0x106521=>{const _0x329230=_0x4047ff,_0x175192=_0x106521['name'];for(const _0x3e216a of dependencies){if('fJPvF'!==_0x329230(0x116)){if(!_0x464b66[_0x329230(0x130)]())return;_0x2c15f6['ConvertParams'](_0x5443da,_0xcf6473);const _0x34951a=_0x29b487[_0x329230(0xe9)](),_0x56fe00=_0x15e0f0['EventID']||_0x34951a[_0x329230(0xac)](),_0x4f7d83=_0x47c34c[_0x329230(0xe3)](_0x4bc84c(_0x2bdd55[_0x329230(0x10a)]||0x0),_0x5c76aa(_0x16288f['endIcon']||0x0)),_0x34ec0e=_0x1880f2[_0x329230(0x112)](_0x5e1877(_0x57b0d1['startIcon']||0x0),_0x33f1b6(_0x39ec94['endIcon']||0x0)),_0x12f9b4=[];for(let _0x5f07a9=_0x4f7d83;_0x5f07a9<=_0x34ec0e;_0x5f07a9++){_0x12f9b4[_0x329230(0xdf)](_0x5f07a9);}_0x4e331a['requestBalloon'](_0x1e951c[_0x329230(0x11d)](_0x56fe00),_0x12f9b4);if(_0x17245d[_0x329230(0x104)]){const _0x251612=_0x1c7421[_0x329230(0xe9)]();_0x251612&&(_0x251612[_0x329230(0xb9)]=_0x56fe00,_0x251612[_0x329230(0x10b)](_0x329230(0xc3)));}}else{if(!Imported[_0x3e216a]){if(_0x329230(0xa3)!=='qLrzo')this[_0x329230(0xba)]=_0x2e1574[_0x329230(0xff)](_0x329230(0xbd)),this[_0x329230(0x121)](0x0,0x0,0x0,0x0);else{alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x329230(0xa5)](_0x175192,_0x3e216a)),SceneManager[_0x329230(0xaa)]();break;}}}}const _0x25e8f1=_0x106521[_0x329230(0x9c)];if(_0x25e8f1[_0x329230(0xb3)](/\[Version[ ](.*?)\]/i)){const _0x19612f=Number(RegExp['$1']);_0x19612f!==VisuMZ[label][_0x329230(0xfa)]&&(alert(_0x329230(0xca)[_0x329230(0xa5)](_0x175192,_0x19612f)),SceneManager[_0x329230(0xaa)]());}if(_0x25e8f1['match'](/\[Tier[ ](\d+)\]/i)){const _0x2f9721=Number(RegExp['$1']);_0x2f9721<tier?(alert(_0x329230(0xc6)[_0x329230(0xa5)](_0x175192,_0x2f9721,tier)),SceneManager['exit']()):_0x329230(0xf1)===_0x329230(0xf1)?tier=Math[_0x329230(0x112)](_0x2f9721,tier):_0x127431[_0x329230(0xdf)](_0x5392d8);}VisuMZ[_0x329230(0x101)](VisuMZ[label]['Settings'],_0x106521[_0x329230(0x114)]);})(pluginData),PluginManager[_0x4047ff(0x11e)](pluginData[_0x4047ff(0xe2)],_0x4047ff(0xaf),_0x47284e=>{const _0xf4f73=_0x4047ff;if(!SceneManager[_0xf4f73(0x130)]())return;VisuMZ[_0xf4f73(0x101)](_0x47284e,_0x47284e);const _0x4019c0=Number(_0x47284e[_0xf4f73(0x106)]||0x0);$gameTemp[_0xf4f73(0x97)]($gamePlayer,[_0x4019c0]);if(_0x47284e['WaitComplete']){const _0xc3f2c9=$gameTemp[_0xf4f73(0xe9)]();_0xc3f2c9&&('xndcw'==='xndcw'?(_0xc3f2c9[_0xf4f73(0xb9)]=-0x1,_0xc3f2c9[_0xf4f73(0x10b)](_0xf4f73(0xc3))):this['scale']['y']=0x0);}}),PluginManager[_0x4047ff(0x11e)](pluginData[_0x4047ff(0xe2)],_0x4047ff(0xd7),_0x2363fa=>{const _0x1d2dcb=_0x4047ff;if(!SceneManager[_0x1d2dcb(0x130)]())return;VisuMZ[_0x1d2dcb(0x101)](_0x2363fa,_0x2363fa);const _0x10443f=Math[_0x1d2dcb(0xe3)](Number(_0x2363fa[_0x1d2dcb(0x10a)]||0x0),Number(_0x2363fa[_0x1d2dcb(0x98)]||0x0)),_0x13ec43=Math[_0x1d2dcb(0x112)](Number(_0x2363fa[_0x1d2dcb(0x10a)]||0x0),Number(_0x2363fa[_0x1d2dcb(0x98)]||0x0)),_0x14c9b1=[];for(let _0x2ced19=_0x10443f;_0x2ced19<=_0x13ec43;_0x2ced19++){if(_0x1d2dcb(0xad)==='WEjxP')_0x14c9b1['push'](_0x2ced19);else{const _0x70c54e=_0x2b608e[_0x1d2dcb(0xe9)]();_0x70c54e&&(_0x70c54e[_0x1d2dcb(0xb9)]=-0x1,_0x70c54e[_0x1d2dcb(0x10b)](_0x1d2dcb(0xc3)));}}$gameTemp['requestBalloon']($gamePlayer,_0x14c9b1);if(_0x2363fa[_0x1d2dcb(0x104)]){const _0x177280=$gameTemp[_0x1d2dcb(0xe9)]();_0x177280&&(_0x177280[_0x1d2dcb(0xb9)]=-0x1,_0x177280[_0x1d2dcb(0x10b)](_0x1d2dcb(0xc3)));}}),PluginManager[_0x4047ff(0x11e)](pluginData[_0x4047ff(0xe2)],_0x4047ff(0xf0),_0x1bc60a=>{const _0x185236=_0x4047ff;if(!SceneManager[_0x185236(0x130)]())return;VisuMZ[_0x185236(0x101)](_0x1bc60a,_0x1bc60a);const _0x385faf=_0x1bc60a['icons'];$gameTemp[_0x185236(0x97)]($gamePlayer,_0x385faf);if(_0x1bc60a['WaitComplete']){const _0x1c4d2d=$gameTemp[_0x185236(0xe9)]();_0x1c4d2d&&(_0x1c4d2d[_0x185236(0xb9)]=-0x1,_0x1c4d2d[_0x185236(0x10b)]('balloon'));}}),PluginManager[_0x4047ff(0x11e)](pluginData['name'],_0x4047ff(0x128),_0x1b1c3a=>{const _0x2a9f90=_0x4047ff;if(!SceneManager[_0x2a9f90(0x130)]())return;VisuMZ[_0x2a9f90(0x101)](_0x1b1c3a,_0x1b1c3a);const _0x30db07=$gameTemp[_0x2a9f90(0xe9)](),_0x30e6bc=_0x1b1c3a['EventID']||_0x30db07[_0x2a9f90(0xac)](),_0x671424=Number(_0x1b1c3a[_0x2a9f90(0x106)]||0x0);$gameTemp['requestBalloon']($gameMap[_0x2a9f90(0x11d)](_0x30e6bc),[_0x671424]);if(_0x1b1c3a[_0x2a9f90(0x104)]){if(_0x2a9f90(0x107)===_0x2a9f90(0xa0)){if(!_0x5d5ca1[_0x2a9f90(0x130)]())return;_0xcad60d[_0x2a9f90(0x101)](_0x1892c0,_0x974861);const _0x41dcf2=_0x3e69b7[_0x2a9f90(0xe3)](_0x42cfaf(_0x326c44[_0x2a9f90(0x10a)]||0x0),_0x3bc180(_0x392a83['endIcon']||0x0)),_0x2733f9=_0x3caa4d[_0x2a9f90(0x112)](_0x46ff98(_0x2f1657[_0x2a9f90(0x10a)]||0x0),_0x41a648(_0x427e7b['endIcon']||0x0)),_0x44fb9d=[];for(let _0xac135=_0x41dcf2;_0xac135<=_0x2733f9;_0xac135++){_0x44fb9d['push'](_0xac135);}_0x57b204[_0x2a9f90(0x97)](_0x352f57,_0x44fb9d);if(_0x5d5040[_0x2a9f90(0x104)]){const _0x57ffc9=_0xbfbdbd['getLastPluginCommandInterpreter']();_0x57ffc9&&(_0x57ffc9[_0x2a9f90(0xb9)]=-0x1,_0x57ffc9['setWaitMode'](_0x2a9f90(0xc3)));}}else{const _0x55e65f=$gameTemp['getLastPluginCommandInterpreter']();_0x55e65f&&(_0x55e65f[_0x2a9f90(0xb9)]=_0x30e6bc,_0x55e65f[_0x2a9f90(0x10b)]('balloon'));}}}),PluginManager[_0x4047ff(0x11e)](pluginData['name'],_0x4047ff(0xcc),_0xab092b=>{const _0x57e6e0=_0x4047ff;if(!SceneManager[_0x57e6e0(0x130)]())return;VisuMZ[_0x57e6e0(0x101)](_0xab092b,_0xab092b);const _0x4094f8=$gameTemp[_0x57e6e0(0xe9)](),_0x39cf19=_0xab092b[_0x57e6e0(0x110)]||_0x4094f8['eventId'](),_0x342fa9=Math[_0x57e6e0(0xe3)](Number(_0xab092b['startIcon']||0x0),Number(_0xab092b[_0x57e6e0(0x98)]||0x0)),_0x4c19c0=Math[_0x57e6e0(0x112)](Number(_0xab092b[_0x57e6e0(0x10a)]||0x0),Number(_0xab092b[_0x57e6e0(0x98)]||0x0)),_0x2dfbc3=[];for(let _0x1a49e4=_0x342fa9;_0x1a49e4<=_0x4c19c0;_0x1a49e4++){if(_0x57e6e0(0xb6)!==_0x57e6e0(0x126))_0x2dfbc3[_0x57e6e0(0xdf)](_0x1a49e4);else{if(!_0x57dca7['isInstanceOfSceneMap']())return;_0x70b11e[_0x57e6e0(0x101)](_0x5deac6,_0x32e7db);const _0x48b4a4=(_0x1ef37a[_0x57e6e0(0xd0)]||0x0)-0x1,_0x572d8f=_0x30c83b[_0x57e6e0(0xcb)]()['follower'](_0x48b4a4),_0x8959af=_0xc87eae(_0x578f0f[_0x57e6e0(0x106)]||0x0);_0x3542df[_0x57e6e0(0x97)](_0x572d8f,[_0x8959af]);if(_0x3f5e1d[_0x57e6e0(0x104)]){const _0x22731b=_0x333577[_0x57e6e0(0xe9)]();if(_0x22731b){const _0x59f42d=_0x4bd597['_scene'][_0x57e6e0(0x117)];_0x59f42d['update']();const _0x2b6581=_0x59f42d[_0x57e6e0(0xd2)][_0x59f42d[_0x57e6e0(0xd2)][_0x57e6e0(0x95)]-0x1],_0x1e83ee=_0x2b6581['_duration'];_0x22731b[_0x57e6e0(0x105)](_0x1e83ee);}}}}$gameTemp[_0x57e6e0(0x97)]($gameMap[_0x57e6e0(0x11d)](_0x39cf19),_0x2dfbc3);if(_0xab092b[_0x57e6e0(0x104)]){const _0x51fcab=$gameTemp[_0x57e6e0(0xe9)]();_0x51fcab&&(_0x57e6e0(0x12a)===_0x57e6e0(0xc2)?(this[_0x57e6e0(0xa2)]-=0x1,this[_0x57e6e0(0xa2)]<=0x0&&(this[_0x57e6e0(0xa2)]=this[_0x57e6e0(0x115)],this[_0x57e6e0(0xc5)]+=0x1,this[_0x57e6e0(0xc5)]=_0x12f302['min'](this[_0x57e6e0(0xc5)],this[_0x57e6e0(0xfe)][_0x57e6e0(0x95)]-0x1),this['_iconIndex']=this[_0x57e6e0(0xfe)][this[_0x57e6e0(0xc5)]])):(_0x51fcab[_0x57e6e0(0xb9)]=_0x39cf19,_0x51fcab[_0x57e6e0(0x10b)]('balloon')));}}),PluginManager[_0x4047ff(0x11e)](pluginData[_0x4047ff(0xe2)],_0x4047ff(0x12c),_0x96bafb=>{const _0x434791=_0x4047ff;if(!SceneManager[_0x434791(0x130)]())return;VisuMZ['ConvertParams'](_0x96bafb,_0x96bafb);const _0x46ca0b=$gameTemp['getLastPluginCommandInterpreter'](),_0x3b4baa=_0x96bafb[_0x434791(0x110)]||_0x46ca0b['eventId'](),_0xc4bffc=_0x96bafb['icons'];$gameTemp[_0x434791(0x97)]($gameMap[_0x434791(0x11d)](_0x3b4baa),_0xc4bffc);if(_0x96bafb[_0x434791(0x104)]){const _0x2126f4=$gameTemp[_0x434791(0xe9)]();_0x2126f4&&(_0x2126f4[_0x434791(0xb9)]=_0x3b4baa,_0x2126f4[_0x434791(0x10b)](_0x434791(0xc3)));}}),PluginManager['registerCommand'](pluginData['name'],_0x4047ff(0xd3),_0x408e88=>{const _0x347044=_0x4047ff;if(!SceneManager[_0x347044(0x130)]())return;VisuMZ['ConvertParams'](_0x408e88,_0x408e88);const _0x15ac2f=(_0x408e88[_0x347044(0xd0)]||0x0)-0x1,_0x529fd6=$gamePlayer[_0x347044(0xcb)]()['follower'](_0x15ac2f),_0x2c92e2=Number(_0x408e88[_0x347044(0x106)]||0x0);$gameTemp[_0x347044(0x97)](_0x529fd6,[_0x2c92e2]);if(_0x408e88[_0x347044(0x104)]){if('QqtAa'!==_0x347044(0xd5)){const _0x27285b=_0x45c389*0x30+0x9;_0x45e185[_0x347044(0xce)](_0x27285b,_0x3a9b8e,_0xc4b25d,_0x32aa59,_0x3c3ccf);}else{const _0x229fc0=$gameTemp[_0x347044(0xe9)]();if(_0x229fc0){if('qpsmY'!==_0x347044(0xec)){const _0x2f7f8c=SceneManager[_0x347044(0x111)][_0x347044(0x117)];_0x2f7f8c[_0x347044(0xb8)]();const _0x5d74c7=_0x2f7f8c[_0x347044(0xd2)][_0x2f7f8c[_0x347044(0xd2)]['length']-0x1],_0x46037a=_0x5d74c7['_duration'];_0x229fc0[_0x347044(0x105)](_0x46037a);}else _0x37c745[_0x347044(0x97)](this,this[_0x347044(0xdd)]),this[_0x347044(0xdd)]=0x0;}}}}),PluginManager[_0x4047ff(0x11e)](pluginData['name'],_0x4047ff(0x103),_0x5947a4=>{const _0x61658b=_0x4047ff;if(!SceneManager[_0x61658b(0x130)]())return;VisuMZ[_0x61658b(0x101)](_0x5947a4,_0x5947a4);const _0x18ca02=(_0x5947a4[_0x61658b(0xd0)]||0x0)-0x1,_0x47ea3c=$gamePlayer[_0x61658b(0xcb)]()[_0x61658b(0x109)](_0x18ca02),_0x2ed932=Math['min'](Number(_0x5947a4[_0x61658b(0x10a)]||0x0),Number(_0x5947a4[_0x61658b(0x98)]||0x0)),_0x51aff2=Math[_0x61658b(0x112)](Number(_0x5947a4[_0x61658b(0x10a)]||0x0),Number(_0x5947a4[_0x61658b(0x98)]||0x0)),_0x5377a5=[];for(let _0x1d2abf=_0x2ed932;_0x1d2abf<=_0x51aff2;_0x1d2abf++){_0x5377a5[_0x61658b(0xdf)](_0x1d2abf);}$gameTemp[_0x61658b(0x97)](_0x47ea3c,_0x5377a5);if(_0x5947a4[_0x61658b(0x104)]){const _0x15f352=$gameTemp['getLastPluginCommandInterpreter']();if(_0x15f352){const _0x236357=SceneManager[_0x61658b(0x111)]['_spriteset'];_0x236357[_0x61658b(0xb8)]();const _0x2056bf=_0x236357[_0x61658b(0xd2)][_0x236357[_0x61658b(0xd2)][_0x61658b(0x95)]-0x1],_0x166fd2=_0x2056bf[_0x61658b(0x96)];_0x15f352[_0x61658b(0x105)](_0x166fd2);}}}),PluginManager['registerCommand'](pluginData[_0x4047ff(0xe2)],_0x4047ff(0xab),_0x9d3bd2=>{const _0x5c6d36=_0x4047ff;if(!SceneManager[_0x5c6d36(0x130)]())return;VisuMZ['ConvertParams'](_0x9d3bd2,_0x9d3bd2);const _0x1e32ce=(_0x9d3bd2[_0x5c6d36(0xd0)]||0x0)-0x1,_0xd1b68d=$gamePlayer['followers']()[_0x5c6d36(0x109)](_0x1e32ce),_0x100ebe=_0x9d3bd2[_0x5c6d36(0xfb)];$gameTemp[_0x5c6d36(0x97)](_0xd1b68d,_0x100ebe);if(_0x9d3bd2[_0x5c6d36(0x104)]){const _0x59257e=$gameTemp[_0x5c6d36(0xe9)]();if(_0x59257e){if(_0x5c6d36(0x100)===_0x5c6d36(0x124))return _0x27d1b1[_0x5c6d36(0x102)](this),_0x379507[_0x5c6d36(0xd9)]['Game_Interpreter_PluginCommand'][_0x5c6d36(0xb2)](this,_0x2cf679);else{const _0x50d0a6=SceneManager[_0x5c6d36(0x111)][_0x5c6d36(0x117)];_0x50d0a6['update']();const _0x426e7e=_0x50d0a6[_0x5c6d36(0xd2)][_0x50d0a6[_0x5c6d36(0xd2)][_0x5c6d36(0x95)]-0x1],_0x27a503=_0x426e7e['_duration'];_0x59257e[_0x5c6d36(0x105)](_0x27a503);}}}}),ImageManager['ICON_BALLOON_FILENAME']=VisuMZ[_0x4047ff(0xd9)][_0x4047ff(0xeb)]['filename']??'',ImageManager['cachedIconBalloonsImage']=function(){const _0x17d1ea=_0x4047ff;if(ImageManager[_0x17d1ea(0xd1)]!=='')return this[_0x17d1ea(0xff)](ImageManager[_0x17d1ea(0xd1)]);if(this[_0x17d1ea(0xd4)])return this['_cached_IconBalloons_Image'];const _0x327dc0=this[_0x17d1ea(0xff)](_0x17d1ea(0x129)),_0x19b3b4=new Bitmap(_0x327dc0['width'],0x30);_0x19b3b4[_0x17d1ea(0xe4)](_0x327dc0,0x0,0x7*0x30,_0x327dc0[_0x17d1ea(0x108)],0x30,0x0,0x0,_0x327dc0[_0x17d1ea(0x108)],0x30);const _0x54875a='#ffffff',_0x434102=0x13,_0x58af8b=0x1e,_0x4fb197=0x8;for(let _0x321d4b=0x1;_0x321d4b<0x8;_0x321d4b++){if(_0x17d1ea(0xdc)==='YAJNM'){const _0x30719b=_0x321d4b*0x30+0x9;_0x19b3b4[_0x17d1ea(0xce)](_0x30719b,_0x434102,_0x58af8b,_0x4fb197,_0x54875a);}else _0x4b7195[_0x17d1ea(0x12d)]['initialize']['call'](this);}return _0x19b3b4[_0x17d1ea(0x123)]=![],this[_0x17d1ea(0xd4)]=_0x19b3b4,this[_0x17d1ea(0xd4)];},SceneManager['isInstanceOfSceneMap']=function(){const _0x1f8286=_0x4047ff;return this[_0x1f8286(0x111)]&&this[_0x1f8286(0x111)]instanceof Scene_Map;},Game_Temp['prototype'][_0x4047ff(0x102)]=function(_0x4dd4fc){this['_lastPluginCommandInterpreter']=_0x4dd4fc;},Game_Temp[_0x4047ff(0x12d)][_0x4047ff(0xe9)]=function(){const _0x16e3ff=_0x4047ff;return this[_0x16e3ff(0xc1)];},VisuMZ[_0x4047ff(0xd9)][_0x4047ff(0x118)]=Game_Interpreter[_0x4047ff(0x12d)]['command357'],Game_Interpreter[_0x4047ff(0x12d)][_0x4047ff(0xc0)]=function(_0x19a62c){const _0x40ba49=_0x4047ff;return $gameTemp[_0x40ba49(0x102)](this),VisuMZ[_0x40ba49(0xd9)][_0x40ba49(0x118)]['call'](this,_0x19a62c);},VisuMZ[_0x4047ff(0xd9)][_0x4047ff(0x9a)]=Game_CharacterBase[_0x4047ff(0x12d)]['update'],Game_CharacterBase['prototype'][_0x4047ff(0xb8)]=function(){const _0x1a4812=_0x4047ff;VisuMZ[_0x1a4812(0xd9)][_0x1a4812(0x9a)][_0x1a4812(0xb2)](this),this[_0x1a4812(0x11f)]();},Game_CharacterBase[_0x4047ff(0x12d)][_0x4047ff(0x11f)]=function(){const _0x3d5667=_0x4047ff;this[_0x3d5667(0xdd)]!==0x0&&($gameTemp[_0x3d5667(0x97)](this,this[_0x3d5667(0xdd)]),this[_0x3d5667(0xdd)]=0x0);},VisuMZ[_0x4047ff(0xd9)][_0x4047ff(0x10f)]=Scene_Boot[_0x4047ff(0x12d)]['loadSystemImages'],Scene_Boot[_0x4047ff(0x12d)]['loadSystemImages']=function(){const _0x12ae4a=_0x4047ff;VisuMZ[_0x12ae4a(0xd9)][_0x12ae4a(0x10f)][_0x12ae4a(0xb2)](this),ImageManager[_0x12ae4a(0xff)](_0x12ae4a(0x129));},VisuMZ[_0x4047ff(0xd9)][_0x4047ff(0x119)]=Spriteset_Map['prototype'][_0x4047ff(0xa7)],Spriteset_Map['prototype'][_0x4047ff(0xa7)]=function(_0x31afad){const _0xf2533f=_0x4047ff;if(Array['isArray'](_0x31afad[_0xf2533f(0x9b)])){if(_0xf2533f(0xa4)!==_0xf2533f(0xe7))this[_0xf2533f(0xee)](_0x31afad);else return _0x4d9bec[_0xf2533f(0xb5)]&&_0x1996b4['description']['includes']('['+_0x2775a9+']');}else VisuMZ[_0xf2533f(0xd9)][_0xf2533f(0x119)][_0xf2533f(0xb2)](this,_0x31afad);},Spriteset_Map[_0x4047ff(0x12d)][_0x4047ff(0xee)]=function(_0x10ce54){const _0x3c7bee=_0x4047ff,_0x23e23b=this[_0x3c7bee(0x11b)](_0x10ce54[_0x3c7bee(0xbf)]);if(_0x23e23b){const _0x36b91b=new Sprite_IconBalloon();_0x36b91b['targetObject']=_0x10ce54[_0x3c7bee(0xbf)],_0x36b91b['setup'](_0x23e23b,_0x10ce54['balloonId']),this[_0x3c7bee(0xbe)][_0x3c7bee(0xf8)](_0x36b91b),this[_0x3c7bee(0xd2)][_0x3c7bee(0xdf)](_0x36b91b);}};function Sprite_IconBalloon(){this['initialize'](...arguments);}Sprite_IconBalloon[_0x4047ff(0x12d)]=Object['create'](Sprite_Balloon[_0x4047ff(0x12d)]),Sprite_IconBalloon[_0x4047ff(0x12d)][_0x4047ff(0xc9)]=Sprite_IconBalloon,Sprite_IconBalloon['prototype'][_0x4047ff(0xc8)]=function(){const _0x3f66b7=_0x4047ff;Sprite_Balloon[_0x3f66b7(0x12d)][_0x3f66b7(0xc8)][_0x3f66b7(0xb2)](this);},Sprite_IconBalloon['prototype'][_0x4047ff(0xda)]=function(){const _0xb07be4=_0x4047ff;this[_0xb07be4(0xba)]=ImageManager[_0xb07be4(0x125)](),this[_0xb07be4(0x121)](0x0,0x0,0x0,0x0);},Sprite_IconBalloon[_0x4047ff(0x12d)][_0x4047ff(0x12f)]=function(_0x52ff0c,_0x265b64){const _0x13a1df=_0x4047ff;this[_0x13a1df(0x127)]=_0x52ff0c,this[_0x13a1df(0x96)]=0x8*this[_0x13a1df(0xb0)]()+this[_0x13a1df(0xfc)](),this[_0x13a1df(0x9e)](_0x265b64);},Sprite_IconBalloon['prototype']['createIconSprite']=function(_0x53d914){this['_iconSprite']=new Sprite_IconBalloonDisplay(_0x53d914,this),this['addChild'](this['_iconSprite']);},Sprite_IconBalloon['prototype'][_0x4047ff(0xe8)]=function(){const _0x26e055=0x30,_0x30ceec=0x30,_0x351b2e=this['frameIndex']()*_0x26e055,_0x5adc89=0x0;this['setFrame'](_0x351b2e,_0x5adc89,_0x26e055,_0x30ceec);};function Sprite_IconBalloonDisplay(){const _0x456dad=_0x4047ff;this[_0x456dad(0xc8)](...arguments);}Sprite_IconBalloonDisplay[_0x4047ff(0x12d)]=Object[_0x4047ff(0xf6)](Sprite[_0x4047ff(0x12d)]),Sprite_IconBalloonDisplay[_0x4047ff(0x12d)][_0x4047ff(0xc9)]=Sprite_IconBalloonDisplay,Sprite_IconBalloonDisplay[_0x4047ff(0x10d)]={'offset':{'x':VisuMZ['IconBalloons'][_0x4047ff(0xeb)][_0x4047ff(0xed)]??0x0,'y':VisuMZ['IconBalloons'][_0x4047ff(0xeb)][_0x4047ff(0xe6)]??-0x1},'shrink':{'single':VisuMZ[_0x4047ff(0xd9)][_0x4047ff(0xeb)]['shrinkSingle']??!![],'multi':VisuMZ['IconBalloons'][_0x4047ff(0xeb)][_0x4047ff(0xd8)]??![]}},Sprite_IconBalloonDisplay[_0x4047ff(0x12d)][_0x4047ff(0xc8)]=function(_0x21b106,_0x24721f){const _0x596508=_0x4047ff;this[_0x596508(0x10c)]=_0x24721f[_0x596508(0xb0)](),this[_0x596508(0x96)]=_0x24721f[_0x596508(0x96)],this[_0x596508(0xa2)]=0x0,this['_growth']=0x1/(this[_0x596508(0x96)]/this[_0x596508(0x10c)])||0x1,this[_0x596508(0xf5)](_0x21b106),Sprite[_0x596508(0x12d)][_0x596508(0xc8)][_0x596508(0xb2)](this),this[_0x596508(0xf4)](),this[_0x596508(0xda)]();},Sprite_IconBalloonDisplay[_0x4047ff(0x12d)]['setIconIndex']=function(_0xd3f76e){const _0x86b7e2=_0x4047ff;this[_0x86b7e2(0xfe)]=_0xd3f76e[_0x86b7e2(0xf9)](),this[_0x86b7e2(0xcf)]=_0xd3f76e[0x0],this[_0x86b7e2(0xc5)]=0x0,this[_0x86b7e2(0x115)]=this['_duration']*0x2/0x3,this['_waitFrames']/=_0xd3f76e[_0x86b7e2(0x95)],this[_0x86b7e2(0xa2)]=this[_0x86b7e2(0x115)];},Sprite_IconBalloonDisplay['prototype'][_0x4047ff(0xf4)]=function(){const _0x4f882f=_0x4047ff;this[_0x4f882f(0x12e)]['x']=0.5,this[_0x4f882f(0x12e)]['y']=0.5;const _0x12b585=Sprite_IconBalloonDisplay[_0x4f882f(0x10d)];this['x']=0x0+_0x12b585['offset']['x'],this['y']=-0x18+_0x12b585['offset']['y'];if(_0x12b585['shrink']['single']&&this[_0x4f882f(0xfe)][_0x4f882f(0x95)]<=0x1)this['scale']['y']=0x0;else _0x12b585[_0x4f882f(0xa9)][_0x4f882f(0xb7)]&&this[_0x4f882f(0xfe)][_0x4f882f(0x95)]>0x1?this[_0x4f882f(0xdb)]['y']=0x0:_0x4f882f(0x11a)===_0x4f882f(0x11a)?this[_0x4f882f(0xdb)]['y']=0x1:this[_0x4f882f(0xee)](_0xde4000);},Sprite_IconBalloonDisplay[_0x4047ff(0x12d)][_0x4047ff(0xda)]=function(){const _0x37354b=_0x4047ff;this[_0x37354b(0xba)]=ImageManager['loadSystem'](_0x37354b(0xbd)),this[_0x37354b(0x121)](0x0,0x0,0x0,0x0);},Sprite_IconBalloonDisplay[_0x4047ff(0x12d)][_0x4047ff(0xb8)]=function(){const _0x284810=_0x4047ff;Sprite[_0x284810(0x12d)][_0x284810(0xb8)][_0x284810(0xb2)](this),this[_0x284810(0xd6)](),this[_0x284810(0xe8)](),this[_0x284810(0xc7)]();},Sprite_IconBalloonDisplay['prototype'][_0x4047ff(0xd6)]=function(){const _0x4462a7=_0x4047ff;this['scale']['y']=Math['min'](0x1,this[_0x4462a7(0xdb)]['y']+this['_growth']);},Sprite_IconBalloonDisplay[_0x4047ff(0x12d)][_0x4047ff(0xe8)]=function(){const _0xab7315=_0x4047ff,_0x1993a7=ImageManager['iconWidth'],_0x4689ef=ImageManager[_0xab7315(0x10e)],_0x151bab=this['_iconIndex']%0x10*_0x1993a7,_0x527e60=Math[_0xab7315(0xe1)](this[_0xab7315(0xcf)]/0x10)*_0x4689ef;this[_0xab7315(0x121)](_0x151bab,_0x527e60,_0x1993a7,_0x4689ef);},Sprite_IconBalloonDisplay[_0x4047ff(0x12d)][_0x4047ff(0xc7)]=function(){const _0x4fd6ed=_0x4047ff;this['_count']-=0x1,this['_count']<=0x0&&(_0x4fd6ed(0xe5)==='ewgpX'?(this[_0x4fd6ed(0xa2)]=this['_waitFrames'],this['_currentIndex']+=0x1,this[_0x4fd6ed(0xc5)]=Math['min'](this[_0x4fd6ed(0xc5)],this[_0x4fd6ed(0xfe)][_0x4fd6ed(0x95)]-0x1),this[_0x4fd6ed(0xcf)]=this[_0x4fd6ed(0xfe)][this[_0x4fd6ed(0xc5)]]):(_0x2a08fb['IconBalloons'][_0x4fd6ed(0x10f)][_0x4fd6ed(0xb2)](this),_0x253f0b[_0x4fd6ed(0xff)](_0x4fd6ed(0x129))));};