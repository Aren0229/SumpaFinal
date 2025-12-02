//=============================================================================
// VisuStella MZ - Proximity Messages
// VisuMZ_4_ProximityMessages.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_ProximityMessages = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ProximityMessages = VisuMZ.ProximityMessages || {};
VisuMZ.ProximityMessages.version = 1.00;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.00] [ProximityMessages]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Proximity_Messages_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows events to display text windows saying whatever they want
 * once the player character is nearby. Once within proximity range, the window
 * appears for the player to be able to read. This can be used to simulate
 * seeing sign-boards from afar, eavesdropping on NPC's, or simply emulating an
 * NPC shouting something in general for the public to hear. Doing so will
 * allow the player to continue moving and not interrupt their exploration.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Display small text windows on top of events that only appear while the
 *   player character is moving nearby.
 * * Text windows can use text codes and the like.
 * * Change the text displayed in their windows via Plugin Commands.
 * * Add speech tail types to help indicate the speaker.
 * * Show or hide all Proximity Message on a global scale via Plugin Command.
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
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Proximity Message-Related Tags ===
 * 
 * ---
 *
 * <Proximity Message>
 *  text
 *  text
 *  text
 *  text
 * </Proximity Message>
 *
 * - Used for: Event Page Comment Tags
 * - Displays 'text' in the event's Proximity Message text window.
 * - Replace 'text' with the text you would like displayed.
 *   - Text codes allowed.
 *
 * ---
 *
 * <Proximity Message Range Type: Circle>
 * <Proximity Message Range Type: Radius>
 * <Proximity Message Range Type: Square>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the proximity range type for the event's Proximity Message.
 *   - Circle - Be within circular range of event with event at center.
 *   - Radius - Have to be x tiles within range of event.
 *   - Square - Within a square range with event at the center.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If none of these tags are used, use the settings found in the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Proximity Message Max Range: x>
 * <Proximity Message Min Range: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the maximum and minimum range for the Proximity Message to dislay.
 *   - For max range variant, replace 'x' with a number representing the
 *     maximum range. If the player is outside of this range, hide the
 *     Proximity Message.
 *   - For min range variant, replace 'x' with a number representing the
 *     minimum range. If the player is within this range, hide the
 *     Proximity Message.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If none of these tags are used, use the settings found in the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Proximity Message Offsets: +x, +y>
 * <Proximity Message Offsets: -x, -y>
 * <Proximity Message Offsets: +x, -y>
 * <Proximity Message Offsets: -x, +y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Offsets the Proximity Message text window for this event by 'x' and 'y'.
 * - Replace 'x' and 'y' with numbers representing how much to offset the
 *   window position by.
 *   - For 'x', lower numbers move left and higher numbers move right.
 *   - For 'y', lower numbers move up and higher numbers move down.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If none of these tags are used, use the settings found in the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Proximity Message Scale: x%>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the size scaling of the Proximity Message window to 'x' percent.
 * - Replace 'x' with a number representing the scaling percent.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If none of these tags are used, use the settings found in the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Proximity Message Tail Type: Bottom Left>
 * <Proximity Message Tail Type: Bottom Right>
 * <Proximity Message Tail Type: None>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the speech tail type used for the Proximity Message text window.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If none of these tags are used, use the settings found in the
 *   Plugin Parameters.
 *
 * ---
 *
 * <Proximity Message Tail X: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Moves the position of the speech tail to 'x'.
 * - Replace 'x' with a number representing the x position of the Proximity
 *   Message text window.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If not used, the speech tail will be centered.
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
 * === Event Plugin Commands ===
 * 
 * ---
 *
 * Event: Clear Proximity Message
 * - Clears target event's Proximity Message.
 * - Must be used on the map scene.
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 *
 * ---
 *
 * Event: Set Proximity Message Text
 * - Sets target event's Proximity Message text.
 * - Must be used on the map scene.
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 *
 *   Text:
 *   - The text displayed by the event.
 *   - Text codes allowed.
 *
 * ---
 * 
 * === Global Plugin Commands ===
 * 
 * ---
 *
 * Global: Show/Hide All Proximity Messages
 * - Turns on/off all Proximity Messages.
 * - When turned off, all Proximity Messages become hidden.
 *
 *   Show/Hide?:
 *   - Shows/hides all Proximity Messages.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Default Settings
 * ============================================================================
 *
 * What are the default settings made for events?
 *
 * ---
 *
 * General
 * 
 *   Proximity Type:
 *   - What do you want to be the default proximity type?
 *     - Circle - Be within circular range of event with event at center.
 *     - Radius - Have to be x tiles within range of event.
 *     - Square - Within a square range with event at the center.
 * 
 *   Speech Tail Type:
 *   - What do you want to use as the default tail type?
 *
 * ---
 *
 * Range
 * 
 *   Maximum:
 *   - What is the default maximum range for showing a
 *     Proximity Message window?
 * 
 *   Minimum:
 *   - What is the default minimum range for showing a
 *     Proximity Message window?
 *
 * ---
 *
 * Window Offset
 * 
 *   Offset X:
 *   - Offsets the Proximity Message Window x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the Proximity Message Window y position.
 *   - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Scaling
 * 
 *   Window Scale:
 *   - What is the default scale of the Proximity Message window?
 *   - 0.00 - 0%; 0.50 - 50%; 1.00 - 100%; 1.50 - 150%;
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Adjust the settings for the Proximity Message Windows.
 *
 * ---
 *
 * General
 * 
 *   Update Frequency:
 *   - Update all Proximity Message windows every x frames.
 * 
 * ---
 * 
 * Hide During
 * 
 *   Game Message Open:
 *   - Hide all Proximity Messages when game message is open?
 * 
 *   Map Event Running:
 *   - Hide all Proximity Messages when a map event is running?
 * 
 * ---
 * 
 * Tail Directions > Bottom Left
 * 
 * Tail Directions > Bottom Right
 * 
 *   Filename:
 *   - Filename of the Speech Tail graphic.
 * 
 *   Anchor X:
 *   - Anchor value X. Use a number between 0 and 1.
 *   - 0.0 - Left; 0.5 - Center; 1.0 - Right
 * 
 *   Anchor Y:
 *   - Anchor value Y. Use a number between 0 and 1.
 *   - 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * 
 *   Offset X:
 *   - Offset the Speech Tail's X position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the Speech Tail's Y position.
 *   - Negative: left. Positive: right.
 * 
 * ---
 * 
 * Window Offset
 * 
 *   Offset X:
 *   - Offsets the Proximity Message Window x position.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offsets the Proximity Message Window y position.
 *   - Negative: up. Positive: down.
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
 * Version 1.00 Official Release Date: July 26, 2023
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
 * @command EventClearProximityMessage
 * @text Event: Clear Proximity Message
 * @desc Clears target event's Proximity Message.
 * Must be used on the map scene.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command EventSetProximityMessageText
 * @text Event: Set Proximity Message Text
 * @desc Sets target event's Proximity Message text.
 * Must be used on the map scene.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 *
 * @arg Text:json
 * @text Text
 * @type note
 * @desc The text displayed by the event.
 * Text codes allowed.
 * @default "Line1\nLine2\nLine3"
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Global
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ShowProximityMessages
 * @text Global: Show/Hide All Proximity Messages
 * @desc Turns on/off all Proximity Messages.
 * When turned off, all Proximity Messages become hidden.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides all Proximity Messages.
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
 * @param ProximityMessages
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Default:struct
 * @text Default Settings
 * @type struct<Default>
 * @desc What are the default settings made for events?
 * @default {"General":"","proximityType:str":"circle","tailType:str":"bottomLeft","Range":"","maxRange:num":"5","minRange:num":"0","Offset":"","OffsetX:num":"+0","OffsetY:num":"+0","scale:num":"0.60"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Adjust the settings for the Proximity Message Windows.
 * @default {"General":"","updateFrequency:num":"10","Hide":"","gameMessageBusy:eval":"true","gameMapEventRunning:eval":"false","TailDir":"","BottomLeft":"","bottomLeftFilename:str":"","bottomLeftAnchorX:num":"0.5","bottomLeftAnchorY:num":"0.0","bottomLeftOffsetX:num":"+0","bottomLeftOffsetY:num":"+0","BottomRight":"","bottomRightFilename:str":"","bottomRightAnchorX:num":"0.5","bottomRightAnchorY:num":"0.0","bottomRightOffsetX:num":"+0","bottomRightOffsetY:num":"+0","Offset":"","OffsetX:num":"+0","OffsetY:num":"-4"}
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
 * Default Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Default:
 *
 * @param General
 *
 * @param proximityType:str
 * @text Proximity Type
 * @parent General
 * @type select
 * @option Circle - Be within circular range of event with event at center.
 * @value circle
 * @option Radius - Have to be x tiles within range of event.
 * @value radius
 * @option Square - Within a square range with event at the center.
 * @value square
 * @desc What do you want to be the default proximity type?
 * @default circle
 * 
 * @param tailType:str
 * @text Speech Tail Type
 * @parent General
 * @type select
 * @option Bottom Left - Goes down and left
 * @value bottomLeft
 * @option Bottom Right - Goes down and right
 * @value bottomRight
 * @option None - Don't display
 * @value none
 * @desc What do you want to use as the default tail type?
 * @default bottomLeft
 * 
 * @param Range
 *
 * @param maxRange:num
 * @text Maximum
 * @parent Range
 * @type number
 * @desc What is the default maximum range for showing a Proximity Message window?
 * @default 5
 *
 * @param minRange:num
 * @text Minimum
 * @parent Range
 * @type number
 * @desc What is the default minimum range for showing a Proximity Message window?
 * @default 0
 * 
 * @param Offset
 * @text Window Offset
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Offset
 * @desc Offsets the Proximity Message Window x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc Offsets the Proximity Message Window y position.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param scale:num
 * @text Window Scale
 * @desc What is the default scale of the Proximity Message window?
 * 0.00 - 0%; 0.50 - 50%; 1.00 - 100%; 1.50 - 150%;
 * @default 0.60
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param General
 *
 * @param updateFrequency:num
 * @text Update Frequency
 * @parent General
 * @desc Update all Proximity Message windows every x frames.
 * @default 10
 *
 * @param Hide
 * @text Hide During
 *
 * @param gameMessageBusy:eval
 * @text Game Message Open
 * @parent Hide
 * @type boolean
 * @on Hide
 * @off Don't Hide
 * @desc Hide all Proximity Messages when game message is open?
 * @default true
 *
 * @param gameMapEventRunning:eval
 * @text Map Event Running
 * @parent Hide
 * @type boolean
 * @on Hide
 * @off Don't Hide
 * @desc Hide all Proximity Messages when a map event is running?
 * @default false
 * 
 * @param TailDir
 * @text Tail Directions
 *
 * @param BottomLeft
 * @text Bottom Left
 * @parent TailDir
 *
 * @param bottomLeftFilename:str
 * @text Filename
 * @parent BottomLeft
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Speech Tail graphic going towards
 * the bottom left.
 * @default 
 *
 * @param bottomLeftAnchorX:num
 * @text Anchor X
 * @parent BottomLeft
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param bottomLeftAnchorY:num
 * @text Anchor Y
 * @parent BottomLeft
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 0.0
 *
 * @param bottomLeftOffsetX:num
 * @text Offset X
 * @parent BottomLeft
 * @desc Offset the Speech Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param bottomLeftOffsetY:num
 * @text Offset Y
 * @parent BottomLeft
 * @desc Offset the Speech Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param BottomRight
 * @text Bottom Right
 * @parent TailDir
 *
 * @param bottomRightFilename:str
 * @text Filename
 * @parent BottomRight
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Filename of the Speech Tail graphic going towards
 * the bottom right.
 * @default 
 *
 * @param bottomRightAnchorX:num
 * @text Anchor X
 * @parent BottomRight
 * @desc Anchor value X. Use a number between 0 and 1.
 * 0.0 - Left; 0.5 - Center; 1.0 - Right
 * @default 0.5
 *
 * @param bottomRightAnchorY:num
 * @text Anchor Y
 * @parent BottomRight
 * @desc Anchor value Y. Use a number between 0 and 1.
 * 0.0 - Top; 0.5 - Middle; 1.0 - Bottom
 * @default 0.0
 *
 * @param bottomRightOffsetX:num
 * @text Offset X
 * @parent BottomRight
 * @desc Offset the Speech Tail's X position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param bottomRightOffsetY:num
 * @text Offset Y
 * @parent BottomRight
 * @desc Offset the Speech Tail's Y position.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param Offset
 * @text Window Offset
 *
 * @param OffsetX:num
 * @text Offset X
 * @parent Offset
 * @desc Offsets the Proximity Message Window x position.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @parent Offset
 * @desc Offsets the Proximity Message Window y position.
 * Negative: up. Positive: down.
 * @default -4
 *
 */
//=============================================================================

function _0x5d7b(_0x481a50,_0x56beb8){const _0x2f34cf=_0x2f34();return _0x5d7b=function(_0x5d7bec,_0x243e8c){_0x5d7bec=_0x5d7bec-0x1cb;let _0x2a9fe0=_0x2f34cf[_0x5d7bec];return _0x2a9fe0;},_0x5d7b(_0x481a50,_0x56beb8);}function _0x2f34(){const _0x10887c=['fpBqO','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','Drnpz','bottomRightFilename','TailRight','status','_proximityMessageWindows','ARRAYFUNC','prototype','bind','_updateFilterArea','events','SCaEW','frameCount','findTargetSprite','isBusy','GjWEe','call','baseTextRect','getProximityMessageScale','maxRange','tailType','ConvertParams','QaYxX','bitmap','bottomRightOffsetY','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_proximityMessage','updateProximityMessagesContainer','toUpperCase','pDTOq','constructor','updateTailSpriteBitmap','getProximityMessageType','format','MmIhl','OffsetX','auto','Scene_Map_update','clearPageSettings','hasProximityMessage','remove','Game_System_initialize','anchorY','TailNone','vpcPO','Window','apply','openness','trim','_tailSprite','inProximityMessageRange','updateRest','setProximityMessagesVisible','mZSAl','clear','bottomRightOffsetX','Scene_Map_createSpriteset','gwAmM','hideDuring','distance','Text','EventID','screenY','deltaX','initialize','textSizeEx','meetsProximityConditions','updateMessage','parse','Message','createNewProximityMessageWindow','offsetX','FdkUL','innerWidth','RangeTypeRadius','setupProximityMessagesCommentTags','requestProximityMessageUpdate','filename','initProximityMessages','860672YbadFY','getProximityMessageWindow','map','isEventRunning','STR','createProximityMessagesContainer','origin','nazwb','Show','refresh','RegExp','anchor','sqrt','NUM','uxhbo','EVAL','setLastPluginCommandInterpreter','gameMapEventRunning','WlqKV','jxkYH','match','_erased','EventSetProximityMessageText','radius','square','TailLeft','tailTypes','_text','Game_Map_update','close','initMembers','wNEUp','RfNzH','event-%1','width','exit','jskbG','compareProximityMessagesChildOrder','forceUpdate','setupProximityMessagesNotetags','default','none','changeProximityMessageText','event','drawTextEx','updateMain','TKNxa','Default','worldTransform','filter','createContents','getProximityMessageText','eventId','DLPgP','_proximityMessageLayer','ProximityMessages','proximityMessagesVisible','_nextScene','return\x200','ilEpY','updateProximityMessages','iyrdP','innerHeight','visible','children','_proximityMessageVisible','36450LxIjem','_scene','fdhvK','RangeTypeSquare','3pYpzIg','bottomLeft','getLastPluginCommandInterpreter','fVLkw','FYQLg','updateScale','MinRange','registerCommand','Offset','1230896euebuK','bottomRightAnchorX','Scale','1361915mjITiO','isSceneMap','_sourceEvent','6454456TemvTt','setupPageSettings','updateOpenness','setupProximityMessagesEffects','ShowProximityMessages','ARRAYEVAL','createSpriteset','command357','contents','round','SETTINGS','updateFrequency','91kVZJXs','includes','csLIf','RangeTypeCircle','code','tailOffsetX','TailOffsetX','addChild','max','rDGbZ','Game_Event_setupPageSettings','filterArea','updateTailSprite','UwvEE','ViLLr','gameMessageBusy','aUdlf','initProximityMessagesEffects','deltaY','abs','_lastPluginCommandInterpreter','cuKHR','sort','getProximityMessageMaxRange','parameters','iLPBe','update','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','minRange','NoYFV','screenX','scale','PLnos','updatePosition','circle','14096835oqyYSl','list','description','_requestProximityMessageUpdate','name','Game_Interpreter_PluginCommand','getProximityMessageData','SfIrY','zoomScale','OffsetY','itemPadding','_spriteset','resizeWindow','checkProximityMessagesStringTags','height','bottomLeftFilename','proximityType','RLghZ','Settings','anchorX','_lastTailType','nUDQR','open','ULdyr','PROXIMITY_MESSAGES','page','offsetY','isInstanceOfSceneMap','39630YPyhwb','Game_Event_clearPageSettings'];_0x2f34=function(){return _0x10887c;};return _0x2f34();}const _0x32201d=_0x5d7b;(function(_0x4cd8d9,_0x3aa571){const _0x4228ff=_0x5d7b,_0x38c8a2=_0x4cd8d9();while(!![]){try{const _0x51b0e4=parseInt(_0x4228ff(0x272))/0x1+-parseInt(_0x4228ff(0x26f))/0x2+parseInt(_0x4228ff(0x266))/0x3*(-parseInt(_0x4228ff(0x275))/0x4)+-parseInt(_0x4228ff(0x262))/0x5+parseInt(_0x4228ff(0x1ce))/0x6*(parseInt(_0x4228ff(0x281))/0x7)+parseInt(_0x4228ff(0x220))/0x8+parseInt(_0x4228ff(0x2a4))/0x9;if(_0x51b0e4===_0x3aa571)break;else _0x38c8a2['push'](_0x38c8a2['shift']());}catch(_0x7318a){_0x38c8a2['push'](_0x38c8a2['shift']());}}}(_0x2f34,0xd824f));var label=_0x32201d(0x257),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x32201d(0x251)](function(_0x13925b){const _0x79109c=_0x32201d;return _0x13925b['status']&&_0x13925b[_0x79109c(0x2a6)][_0x79109c(0x282)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x32201d(0x2b6)]||{},VisuMZ[_0x32201d(0x1e6)]=function(_0xcd0f75,_0x47355a){const _0x4f7ced=_0x32201d;for(const _0x295ef2 in _0x47355a){if(_0x4f7ced(0x206)===_0x4f7ced(0x2b5))this['meetsProximityConditions']()?this[_0x4f7ced(0x2ba)]():this[_0x4f7ced(0x23d)]();else{if(_0x295ef2[_0x4f7ced(0x234)](/(.*):(.*)/i)){if(_0x4f7ced(0x1f3)===_0x4f7ced(0x25b))_0x32b836[_0x4f7ced(0x257)][_0x4f7ced(0x1cf)][_0x4f7ced(0x1e1)](this),this[_0x4f7ced(0x292)]();else{const _0x1ce51b=String(RegExp['$1']),_0x220894=String(RegExp['$2'])[_0x4f7ced(0x1ed)]()[_0x4f7ced(0x201)]();let _0x46b911,_0xedad12,_0x371b05;switch(_0x220894){case _0x4f7ced(0x22d):_0x46b911=_0x47355a[_0x295ef2]!==''?Number(_0x47355a[_0x295ef2]):0x0;break;case'ARRAYNUM':_0xedad12=_0x47355a[_0x295ef2]!==''?JSON[_0x4f7ced(0x215)](_0x47355a[_0x295ef2]):[],_0x46b911=_0xedad12['map'](_0x28bb8e=>Number(_0x28bb8e));break;case _0x4f7ced(0x22f):_0x46b911=_0x47355a[_0x295ef2]!==''?eval(_0x47355a[_0x295ef2]):null;break;case _0x4f7ced(0x27a):_0xedad12=_0x47355a[_0x295ef2]!==''?JSON[_0x4f7ced(0x215)](_0x47355a[_0x295ef2]):[],_0x46b911=_0xedad12[_0x4f7ced(0x222)](_0x196208=>eval(_0x196208));break;case'JSON':_0x46b911=_0x47355a[_0x295ef2]!==''?JSON[_0x4f7ced(0x215)](_0x47355a[_0x295ef2]):'';break;case'ARRAYJSON':_0xedad12=_0x47355a[_0x295ef2]!==''?JSON[_0x4f7ced(0x215)](_0x47355a[_0x295ef2]):[],_0x46b911=_0xedad12[_0x4f7ced(0x222)](_0x1b8e0e=>JSON['parse'](_0x1b8e0e));break;case'FUNC':_0x46b911=_0x47355a[_0x295ef2]!==''?new Function(JSON[_0x4f7ced(0x215)](_0x47355a[_0x295ef2])):new Function(_0x4f7ced(0x25a));break;case _0x4f7ced(0x1d7):_0xedad12=_0x47355a[_0x295ef2]!==''?JSON[_0x4f7ced(0x215)](_0x47355a[_0x295ef2]):[],_0x46b911=_0xedad12[_0x4f7ced(0x222)](_0x5f096f=>new Function(JSON['parse'](_0x5f096f)));break;case _0x4f7ced(0x224):_0x46b911=_0x47355a[_0x295ef2]!==''?String(_0x47355a[_0x295ef2]):'';break;case'ARRAYSTR':_0xedad12=_0x47355a[_0x295ef2]!==''?JSON[_0x4f7ced(0x215)](_0x47355a[_0x295ef2]):[],_0x46b911=_0xedad12[_0x4f7ced(0x222)](_0x9b427c=>String(_0x9b427c));break;case'STRUCT':_0x371b05=_0x47355a[_0x295ef2]!==''?JSON[_0x4f7ced(0x215)](_0x47355a[_0x295ef2]):{},_0x46b911=VisuMZ['ConvertParams']({},_0x371b05);break;case'ARRAYSTRUCT':_0xedad12=_0x47355a[_0x295ef2]!==''?JSON[_0x4f7ced(0x215)](_0x47355a[_0x295ef2]):[],_0x46b911=_0xedad12['map'](_0x560d27=>VisuMZ[_0x4f7ced(0x1e6)]({},JSON[_0x4f7ced(0x215)](_0x560d27)));break;default:continue;}_0xcd0f75[_0x1ce51b]=_0x46b911;}}}}return _0xcd0f75;},(_0x5391ff=>{const _0x52cb42=_0x32201d,_0xe39c7d=_0x5391ff[_0x52cb42(0x2a8)];for(const _0x26542f of dependencies){if(!Imported[_0x26542f]){alert(_0x52cb42(0x1ea)[_0x52cb42(0x1f2)](_0xe39c7d,_0x26542f)),SceneManager[_0x52cb42(0x243)]();break;}}const _0xb316ac=_0x5391ff['description'];if(_0xb316ac[_0x52cb42(0x234)](/\[Version[ ](.*?)\]/i)){if(_0x52cb42(0x2bb)==='bUOZA'){if(!this[_0x52cb42(0x274)])return![];if(!this['_sourceEvent'][_0x52cb42(0x1f8)]())return![];if(_0x5ca0ff[_0x52cb42(0x259)])return![];if(!_0x2bab12[_0x52cb42(0x258)]())return![];const _0x35aeb8=_0x51770a[_0x52cb42(0x27f)];if(_0x35aeb8[_0x52cb42(0x20b)][_0x52cb42(0x290)]){if(_0x26a9bb&&_0x39d212[_0x52cb42(0x1df)]())return![];}if(_0x35aeb8[_0x52cb42(0x20b)][_0x52cb42(0x231)]){if(_0x2c55b5&&_0x5e99d7[_0x52cb42(0x223)]())return![];}return this[_0x52cb42(0x274)]['inProximityMessageRange']();}else{const _0x3e73d7=Number(RegExp['$1']);_0x3e73d7!==VisuMZ[label]['version']&&(alert(_0x52cb42(0x1d1)[_0x52cb42(0x1f2)](_0xe39c7d,_0x3e73d7)),SceneManager[_0x52cb42(0x243)]());}}if(_0xb316ac['match'](/\[Tier[ ](\d+)\]/i)){const _0x2a306d=Number(RegExp['$1']);if(_0x2a306d<tier){if(_0x52cb42(0x1e7)!==_0x52cb42(0x2b9))alert(_0x52cb42(0x29c)[_0x52cb42(0x1f2)](_0xe39c7d,_0x2a306d,tier)),SceneManager['exit']();else{const _0x5f4bdf=_0x4b75cd['findTargetSprite'](this['_sourceEvent']);if(_0x5f4bdf)_0x4feb36-=_0x5f4bdf[_0x52cb42(0x2b2)];}}else{if(_0x52cb42(0x1ee)==='ZDQEu'){if(this[_0x52cb42(0x261)]===_0x494575)this[_0x52cb42(0x21f)]();return this[_0x52cb42(0x261)];}else tier=Math['max'](_0x2a306d,tier);}}VisuMZ[_0x52cb42(0x1e6)](VisuMZ[label][_0x52cb42(0x2b6)],_0x5391ff[_0x52cb42(0x299)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x32201d(0x2a8)],'EventClearProximityMessage',_0x55a640=>{const _0x1ceb4b=_0x32201d;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ['ConvertParams'](_0x55a640,_0x55a640);const _0x4c8fc7=$gameTemp[_0x1ceb4b(0x268)](),_0x2cae3c=_0x55a640[_0x1ceb4b(0x20e)]||_0x4c8fc7[_0x1ceb4b(0x254)](),_0x1fec60=$gameMap[_0x1ceb4b(0x24b)](_0x2cae3c);if(!_0x1fec60)return;_0x1fec60['changeProximityMessageText']('');}),PluginManager[_0x32201d(0x26d)](pluginData[_0x32201d(0x2a8)],_0x32201d(0x236),_0x2c2fa2=>{const _0x6a86aa=_0x32201d;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ['ConvertParams'](_0x2c2fa2,_0x2c2fa2);const _0x1f988a=$gameTemp['getLastPluginCommandInterpreter'](),_0x265c01=_0x2c2fa2[_0x6a86aa(0x20e)]||_0x1f988a[_0x6a86aa(0x254)](),_0x36b0e4=$gameMap[_0x6a86aa(0x24b)](_0x265c01);if(!_0x36b0e4)return;const _0x3498f3=_0x2c2fa2[_0x6a86aa(0x20d)];_0x36b0e4[_0x6a86aa(0x24a)](_0x3498f3);}),PluginManager[_0x32201d(0x26d)](pluginData[_0x32201d(0x2a8)],_0x32201d(0x279),_0x28e1f2=>{const _0x348e52=_0x32201d;VisuMZ[_0x348e52(0x1e6)](_0x28e1f2,_0x28e1f2),$gameSystem[_0x348e52(0x205)](_0x28e1f2[_0x348e52(0x228)]);}),VisuMZ[_0x32201d(0x257)]['RegExp']={'Message':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)>\s*([\s\S]*?)\s*<\/(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)>/i,'RangeTypeCircle':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:RANGE TYPE|RANGETYPE):[ ]CIRCLE>/i,'RangeTypeRadius':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:RANGE TYPE|RANGETYPE):[ ]RADIUS>/i,'RangeTypeSquare':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:RANGE TYPE|RANGETYPE):[ ]SQUARE>/i,'MaxRange':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:MAX|MAX |MAXIMUM|MAXIMUM |)(?:DIST|DISTANCE|RANGE):[ ](\d+)>/i,'MinRange':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:MIN|MIN |MINIMUM|MINIMUM )(?:DIST|DISTANCE|RANGE):[ ](\d+)>/i,'Offset':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:OFFSET|OFFSETS):[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i,'OffsetX':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:OFFSETX|OFFSET X):[ ]([\+\-]\d+)>/i,'OffsetY':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:OFFSETY|OFFSET Y):[ ]([\+\-]\d+)>/i,'Scale':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:SCALE|SCALING|RATE):[ ](\d+)([%％])>/i,'TailLeft':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:TAIL|TAIL TYPE|TAILTYPE):[ ](?:BOTTOM |BOTTOM|)LEFT>/i,'TailRight':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:TAIL|TAIL TYPE|TAILTYPE):[ ](?:BOTTOM |BOTTOM|)RIGHT>/i,'TailNone':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:TAIL|TAIL TYPE|TAILTYPE):[ ]NONE>/i,'TailOffsetX':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:TAIL X|TAILX):[ ](\d+)>/i,'TailOffsetAuto':/<(?:PROX|PROXIMITY)[ ]*(?:MSG|MESSAGE)[ ]*(?:TAIL X|TAILX):[ ]AUTO>/i},SceneManager[_0x32201d(0x273)]=function(){const _0x4d7d2e=_0x32201d;return this['_scene']&&this[_0x4d7d2e(0x263)][_0x4d7d2e(0x1ef)]===Scene_Map;},SceneManager['isInstanceOfSceneMap']=function(){const _0xf48d0b=_0x32201d;return this['_scene']&&this[_0xf48d0b(0x263)]instanceof Scene_Map;},Game_Temp[_0x32201d(0x1d8)][_0x32201d(0x230)]=function(_0x4b6de7){const _0x3ff807=_0x32201d;this[_0x3ff807(0x295)]=_0x4b6de7;},Game_Temp[_0x32201d(0x1d8)][_0x32201d(0x268)]=function(){const _0x44dfb9=_0x32201d;return this[_0x44dfb9(0x295)];},VisuMZ[_0x32201d(0x257)][_0x32201d(0x2a9)]=Game_Interpreter['prototype'][_0x32201d(0x27c)],Game_Interpreter[_0x32201d(0x1d8)][_0x32201d(0x27c)]=function(_0x3debfb){const _0xa6db12=_0x32201d;return $gameTemp[_0xa6db12(0x230)](this),VisuMZ[_0xa6db12(0x257)][_0xa6db12(0x2a9)][_0xa6db12(0x1e1)](this,_0x3debfb);},VisuMZ[_0x32201d(0x257)]['Game_System_initialize']=Game_System['prototype'][_0x32201d(0x211)],Game_System['prototype']['initialize']=function(){const _0x26de7f=_0x32201d;VisuMZ['ProximityMessages'][_0x26de7f(0x1fa)]['call'](this),this[_0x26de7f(0x21f)]();},Game_System['prototype'][_0x32201d(0x21f)]=function(){const _0x568db0=_0x32201d;this[_0x568db0(0x261)]=!![];},Game_System[_0x32201d(0x1d8)][_0x32201d(0x258)]=function(){const _0xedfbdf=_0x32201d;if(this[_0xedfbdf(0x261)]===undefined)this[_0xedfbdf(0x21f)]();return this['_proximityMessageVisible'];},Game_System[_0x32201d(0x1d8)][_0x32201d(0x205)]=function(_0x3422c9){const _0xc259bb=_0x32201d;if(this[_0xc259bb(0x261)]===undefined)this[_0xc259bb(0x21f)]();this[_0xc259bb(0x261)]=_0x3422c9;},VisuMZ['ProximityMessages'][_0x32201d(0x23c)]=Game_Map[_0x32201d(0x1d8)][_0x32201d(0x29b)],Game_Map['prototype'][_0x32201d(0x29b)]=function(_0x226dc6){const _0x2c31ac=_0x32201d;VisuMZ[_0x2c31ac(0x257)][_0x2c31ac(0x23c)][_0x2c31ac(0x1e1)](this,_0x226dc6),this[_0x2c31ac(0x25c)]();},Game_Map[_0x32201d(0x1d8)]['updateProximityMessages']=function(){const _0x371879=_0x32201d;if(!this[_0x371879(0x2a7)])return;this[_0x371879(0x2a7)]=![],SceneManager[_0x371879(0x263)][_0x371879(0x25c)]();},Game_Map[_0x32201d(0x1d8)][_0x32201d(0x21d)]=function(){const _0x146caf=_0x32201d;this[_0x146caf(0x2a7)]=!![];},Game_Event[_0x32201d(0x2bc)]={'default':{'proximityType':VisuMZ['ProximityMessages'][_0x32201d(0x2b6)]['Default'][_0x32201d(0x2b4)]??_0x32201d(0x2a3),'maxRange':VisuMZ['ProximityMessages'][_0x32201d(0x2b6)][_0x32201d(0x24f)]['maxRange']??0x5,'minRange':VisuMZ[_0x32201d(0x257)]['Settings'][_0x32201d(0x24f)][_0x32201d(0x29d)]??0x0,'offsetX':VisuMZ['ProximityMessages'][_0x32201d(0x2b6)][_0x32201d(0x24f)][_0x32201d(0x1f4)]??0x0,'offsetY':VisuMZ[_0x32201d(0x257)][_0x32201d(0x2b6)][_0x32201d(0x24f)][_0x32201d(0x2ad)]??0x0,'scale':VisuMZ[_0x32201d(0x257)][_0x32201d(0x2b6)]['Default'][_0x32201d(0x2a0)]??0.6,'tailType':VisuMZ[_0x32201d(0x257)]['Settings'][_0x32201d(0x24f)]['tailType']??_0x32201d(0x267),'tailOffsetX':_0x32201d(0x1f5)}},VisuMZ['ProximityMessages'][_0x32201d(0x1cf)]=Game_Event[_0x32201d(0x1d8)][_0x32201d(0x1f7)],Game_Event[_0x32201d(0x1d8)][_0x32201d(0x1f7)]=function(){const _0x36b5aa=_0x32201d;VisuMZ[_0x36b5aa(0x257)][_0x36b5aa(0x1cf)]['call'](this),this[_0x36b5aa(0x292)]();},VisuMZ[_0x32201d(0x257)][_0x32201d(0x28b)]=Game_Event['prototype']['setupPageSettings'],Game_Event[_0x32201d(0x1d8)][_0x32201d(0x276)]=function(){const _0x43d3ad=_0x32201d;VisuMZ[_0x43d3ad(0x257)][_0x43d3ad(0x28b)][_0x43d3ad(0x1e1)](this),this['setupProximityMessagesEffects']();},Game_Event[_0x32201d(0x1d8)][_0x32201d(0x278)]=function(){const _0xcc7b0a=_0x32201d;if(!this[_0xcc7b0a(0x24b)]())return;this[_0xcc7b0a(0x292)](),this[_0xcc7b0a(0x247)](),this[_0xcc7b0a(0x21c)]();if(this[_0xcc7b0a(0x1f8)]()){if(_0xcc7b0a(0x1d0)!==_0xcc7b0a(0x22e))this[_0xcc7b0a(0x21d)]();else{_0x53156e[_0xcc7b0a(0x1d8)][_0xcc7b0a(0x29b)][_0xcc7b0a(0x1e1)](this);const _0xdca59e=_0x129bf7[_0xcc7b0a(0x289)](_0x23d921[_0xcc7b0a(0x27f)][_0xcc7b0a(0x280)],0x1);_0x25675b[_0xcc7b0a(0x1dd)]%_0xdca59e===0x0&&this[_0xcc7b0a(0x24d)](),this[_0xcc7b0a(0x204)]();}}},Game_Event[_0x32201d(0x1d8)][_0x32201d(0x247)]=function(){const _0x3dfc2b=_0x32201d,_0x73c37a=this[_0x3dfc2b(0x24b)]()['note'];if(_0x73c37a==='')return;this[_0x3dfc2b(0x2b1)](_0x73c37a);},Game_Event[_0x32201d(0x1d8)][_0x32201d(0x21c)]=function(){const _0x55cd1e=_0x32201d;if(!this[_0x55cd1e(0x1cb)]())return;const _0x2751e8=this[_0x55cd1e(0x2a5)]();let _0x31df0c='';for(const _0x104855 of _0x2751e8){if('fVLkw'===_0x55cd1e(0x269)){if([0x6c,0x198][_0x55cd1e(0x282)](_0x104855[_0x55cd1e(0x285)])){if(_0x55cd1e(0x28e)==='UwvEE'){if(_0x31df0c!=='')_0x31df0c+='\x0a';_0x31df0c+=_0x104855['parameters'][0x0];}else{this[_0x55cd1e(0x27d)][_0x55cd1e(0x207)]();if(this[_0x55cd1e(0x23b)]==='')return;this['resizeWindow']();const _0x542bae=this[_0x55cd1e(0x1e2)]();this[_0x55cd1e(0x24c)](this['_text'],_0x542bae['x'],_0x542bae['y'],_0x542bae['width']);}}}else this[_0x55cd1e(0x23b)]=this['_sourceEvent']['getProximityMessageText']()[_0x55cd1e(0x201)](),this[_0x55cd1e(0x229)]();}this[_0x55cd1e(0x2b1)](_0x31df0c);},Game_Event[_0x32201d(0x1d8)][_0x32201d(0x292)]=function(){const _0x4b971a=_0x32201d,_0x178544=Game_Event['PROXIMITY_MESSAGES'][_0x4b971a(0x248)];this[_0x4b971a(0x1eb)]={'message':'','proximityType':_0x178544['proximityType'],'maxRange':_0x178544[_0x4b971a(0x1e4)],'minRange':_0x178544[_0x4b971a(0x29d)],'offsetX':_0x178544[_0x4b971a(0x218)],'offsetY':_0x178544['offsetY'],'scale':_0x178544[_0x4b971a(0x2a0)],'tailType':_0x178544[_0x4b971a(0x1e5)],'tailOffsetX':_0x178544[_0x4b971a(0x286)]};},Game_Event[_0x32201d(0x1d8)][_0x32201d(0x2b1)]=function(_0x331c03){const _0xc621f4=_0x32201d,_0x46dada=VisuMZ[_0xc621f4(0x257)][_0xc621f4(0x22a)];_0x331c03[_0xc621f4(0x234)](_0x46dada[_0xc621f4(0x216)])&&(this[_0xc621f4(0x1eb)]['message']=String(RegExp['$1'])['trim']());if(_0x331c03[_0xc621f4(0x234)](_0x46dada[_0xc621f4(0x284)]))_0xc621f4(0x2ab)!=='SfIrY'?this[_0xc621f4(0x202)]['x']=_0x3b331f(_0x70248b['tailOffsetX'])+_0x2d00b2[_0xc621f4(0x218)]:this[_0xc621f4(0x1eb)][_0xc621f4(0x2b4)]='circle';else{if(_0x331c03['match'](_0x46dada[_0xc621f4(0x21b)]))this[_0xc621f4(0x1eb)][_0xc621f4(0x2b4)]=_0xc621f4(0x237);else _0x331c03[_0xc621f4(0x234)](_0x46dada[_0xc621f4(0x265)])&&(this[_0xc621f4(0x1eb)]['proximityType']=_0xc621f4(0x238));}_0x331c03[_0xc621f4(0x234)](_0x46dada['MaxRange'])&&(this['_proximityMessage']['maxRange']=Number(RegExp['$1']));_0x331c03[_0xc621f4(0x234)](_0x46dada[_0xc621f4(0x26c)])&&(this[_0xc621f4(0x1eb)]['minRange']=Number(RegExp['$1']));_0x331c03['match'](_0x46dada[_0xc621f4(0x26e)])&&(_0xc621f4(0x26a)!==_0xc621f4(0x255)?(this[_0xc621f4(0x1eb)][_0xc621f4(0x218)]=Number(RegExp['$1']),this['_proximityMessage'][_0xc621f4(0x1cc)]=Number(RegExp['$2'])):(_0x1541e5(_0xc621f4(0x29c)[_0xc621f4(0x1f2)](_0x2420c3,_0x10a012,_0xee08f2)),_0x548bfd[_0xc621f4(0x243)]()));_0x331c03[_0xc621f4(0x234)](_0x46dada['OffsetX'])&&(this['_proximityMessage']['offsetX']=Number(RegExp['$1']));if(_0x331c03[_0xc621f4(0x234)](_0x46dada[_0xc621f4(0x2ad)])){if(_0xc621f4(0x23f)===_0xc621f4(0x23f))this[_0xc621f4(0x1eb)][_0xc621f4(0x1cc)]=Number(RegExp['$1']);else return _0x1b6015[_0xc621f4(0x1d5)]&&_0x3c46b4['description']['includes']('['+_0x14c977+']');}_0x331c03['match'](_0x46dada[_0xc621f4(0x271)])&&(this[_0xc621f4(0x1eb)][_0xc621f4(0x2a0)]=Number(RegExp['$1'])*0.01);if(_0x331c03[_0xc621f4(0x234)](_0x46dada[_0xc621f4(0x239)]))this[_0xc621f4(0x1eb)][_0xc621f4(0x1e5)]=_0xc621f4(0x267);else{if(_0x331c03['match'](_0x46dada[_0xc621f4(0x1d4)])){if(_0xc621f4(0x219)!==_0xc621f4(0x1dc))this[_0xc621f4(0x1eb)][_0xc621f4(0x1e5)]='bottomRight';else{if(!_0x5e0962[_0xc621f4(0x1cd)]())return;_0x379d4c[_0xc621f4(0x1e6)](_0x12f854,_0xa777f6);const _0x502e6d=_0x4387b9[_0xc621f4(0x268)](),_0x379610=_0x353bfc['EventID']||_0x502e6d[_0xc621f4(0x254)](),_0x41fe9b=_0xd9aa12[_0xc621f4(0x24b)](_0x379610);if(!_0x41fe9b)return;_0x41fe9b['changeProximityMessageText']('');}}else _0x331c03['match'](_0x46dada[_0xc621f4(0x1fc)])&&(this[_0xc621f4(0x1eb)][_0xc621f4(0x1e5)]=_0xc621f4(0x249));}if(_0x331c03['match'](_0x46dada[_0xc621f4(0x287)]))this[_0xc621f4(0x1eb)][_0xc621f4(0x286)]=Number(RegExp['$1']);else _0x331c03[_0xc621f4(0x234)](_0x46dada['TailOffsetAuto'])&&(this['_proximityMessage']['tailOffsetX']=_0xc621f4(0x1f5));if(this['_proximityMessage'][_0xc621f4(0x29d)]>this[_0xc621f4(0x1eb)][_0xc621f4(0x1e4)]){if(_0xc621f4(0x227)!==_0xc621f4(0x232)){const _0x1c8ae9=this[_0xc621f4(0x1eb)][_0xc621f4(0x29d)],_0x63bd84=this[_0xc621f4(0x1eb)][_0xc621f4(0x1e4)];this['_proximityMessage']['maxRange']=_0x1c8ae9,this[_0xc621f4(0x1eb)][_0xc621f4(0x29d)]=_0x63bd84;}else{const _0x1e3b7c=_0x37d0f5(_0x518b4b['$1']);_0x1e3b7c<_0x39f348?(_0x2a2057('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0xc621f4(0x1f2)](_0x2b876c,_0x1e3b7c,_0x55b259)),_0x45ae56['exit']()):_0x214e62=_0x270568['max'](_0x1e3b7c,_0x23ff49);}}},Game_Event['prototype'][_0x32201d(0x2aa)]=function(){const _0x4a5a7f=_0x32201d;if(this['_proximityMessage']===undefined)this['setupProximityMessagesEffects']();return this[_0x4a5a7f(0x1eb)];},Game_Event[_0x32201d(0x1d8)]['getProximityMessageText']=function(){const _0x4af8fd=_0x32201d;if(this[_0x4af8fd(0x235)])return'';return this[_0x4af8fd(0x2aa)]()['message'];},Game_Event[_0x32201d(0x1d8)][_0x32201d(0x24a)]=function(_0x15ddda){const _0x20cc0d=_0x32201d;this[_0x20cc0d(0x2aa)]()['message']=_0x15ddda;if(SceneManager[_0x20cc0d(0x1cd)]()){if('RfNzH'!==_0x20cc0d(0x240))this['_tailSprite']=new _0x5e342d(),this['_tailSprite'][_0x20cc0d(0x25f)]=![],this[_0x20cc0d(0x288)](this[_0x20cc0d(0x202)]);else{const _0x30f49e=SceneManager[_0x20cc0d(0x263)][_0x20cc0d(0x221)](this);if(_0x30f49e)_0x30f49e['forceUpdate']();}}},Game_Event[_0x32201d(0x1d8)][_0x32201d(0x298)]=function(){const _0x4828e1=_0x32201d;return this[_0x4828e1(0x2aa)]()[_0x4828e1(0x1e4)];},Game_Event['prototype']['getProximityMessageMinRange']=function(){const _0x53934e=_0x32201d;return this[_0x53934e(0x2aa)]()[_0x53934e(0x29d)];},Game_Event[_0x32201d(0x1d8)]['getProximityMessageScale']=function(){const _0xb87f49=_0x32201d;if(this[_0xb87f49(0x235)])return 0x1;return this[_0xb87f49(0x2aa)]()[_0xb87f49(0x2a0)];},Game_Event[_0x32201d(0x1d8)][_0x32201d(0x1f8)]=function(){const _0x42e0c3=_0x32201d;if(this[_0x42e0c3(0x235)])return![];return this['getProximityMessageText']()!=='';},Game_Event[_0x32201d(0x1d8)]['requestProximityMessageUpdate']=function(){const _0x39be66=_0x32201d;$gameMap[_0x39be66(0x21d)]();},Game_Event[_0x32201d(0x1d8)][_0x32201d(0x1f1)]=function(){return this['getProximityMessageData']()['proximityType'];},Game_Event[_0x32201d(0x1d8)][_0x32201d(0x203)]=function(){const _0x25a4ed=_0x32201d;if(this[_0x25a4ed(0x235)])return![];const _0x2c3210=this[_0x25a4ed(0x298)](),_0xcad446=this['getProximityMessageMinRange'](),_0x2d5631=this['proximityMessageDistanceFromPlayer']();return _0x2c3210>=_0x2d5631&&_0xcad446<_0x2d5631;},Game_Event[_0x32201d(0x1d8)]['proximityMessageDistanceFromPlayer']=function(){const _0x251e16=_0x32201d,_0x433aeb=this['getProximityMessageType']();if(_0x433aeb==='square'){if(_0x251e16(0x2a1)!=='XZBkH'){const _0x4b1ed6=Math[_0x251e16(0x294)]($gameMap[_0x251e16(0x210)](this['x'],$gamePlayer['x'])),_0x5409f1=Math[_0x251e16(0x294)]($gameMap[_0x251e16(0x293)](this['y'],$gamePlayer['y']));return Math[_0x251e16(0x289)](_0x4b1ed6,_0x5409f1);}else{const _0x2cbe93=_0x255343[_0x251e16(0x263)][_0x251e16(0x221)](this);if(_0x2cbe93)_0x2cbe93[_0x251e16(0x246)]();}}else{if(_0x433aeb===_0x251e16(0x2a3)){if(_0x251e16(0x24e)===_0x251e16(0x24e)){const _0x4561b3=[this['x'],this['y']],_0x1b8992=[$gamePlayer['x'],$gamePlayer['y']];return Math[_0x251e16(0x22c)]((_0x1b8992[0x0]-_0x4561b3[0x0])**0x2+(_0x1b8992[0x1]-_0x4561b3[0x1])**0x2);}else this[_0x251e16(0x202)][_0x251e16(0x1e8)]=_0x478d32;}else return $gameMap[_0x251e16(0x20c)](this['x'],this['y'],$gamePlayer['x'],$gamePlayer['y']);}},VisuMZ[_0x32201d(0x257)][_0x32201d(0x209)]=Scene_Map[_0x32201d(0x1d8)][_0x32201d(0x27b)],Scene_Map[_0x32201d(0x1d8)][_0x32201d(0x27b)]=function(){const _0x2883db=_0x32201d;VisuMZ['ProximityMessages'][_0x2883db(0x209)][_0x2883db(0x1e1)](this),this[_0x2883db(0x225)](),this['updateProximityMessages']();},Scene_Map[_0x32201d(0x1d8)][_0x32201d(0x225)]=function(){const _0x1ca975=_0x32201d;this[_0x1ca975(0x256)]=new Sprite(),this[_0x1ca975(0x288)](this[_0x1ca975(0x256)]),this[_0x1ca975(0x1d6)]={};},VisuMZ['ProximityMessages'][_0x32201d(0x1f6)]=Scene_Map[_0x32201d(0x1d8)][_0x32201d(0x29b)],Scene_Map[_0x32201d(0x1d8)]['update']=function(){const _0x7cf74=_0x32201d;VisuMZ[_0x7cf74(0x257)][_0x7cf74(0x1f6)][_0x7cf74(0x1e1)](this),this[_0x7cf74(0x1ec)]();},Scene_Map[_0x32201d(0x1d8)][_0x32201d(0x1ec)]=function(){const _0x29061c=_0x32201d;if(!this['_proximityMessageLayer'])return;if(this[_0x29061c(0x256)]['children']['length']<=0x0)return;const _0x23c06f=$gameScreen[_0x29061c(0x2ac)]();this['_proximityMessageLayer'][_0x29061c(0x2a0)]['x']=_0x23c06f,this['_proximityMessageLayer']['scale']['y']=_0x23c06f,this[_0x29061c(0x256)][_0x29061c(0x260)][_0x29061c(0x297)](this[_0x29061c(0x245)][_0x29061c(0x1d9)](this));},Scene_Map[_0x32201d(0x1d8)][_0x32201d(0x245)]=function(_0x3b295f,_0x1764bf){const _0x596118=_0x32201d,_0x3d2a0e=_0x3b295f[_0x596118(0x274)],_0x4d66e4=_0x1764bf['_sourceEvent'];if(_0x3d2a0e[_0x596118(0x20f)]()!==_0x4d66e4['screenY']()){if(_0x596118(0x244)!==_0x596118(0x244))this['_proximityMessage'][_0x596118(0x2b4)]=_0x596118(0x2a3);else return _0x3d2a0e['screenY']()-_0x4d66e4[_0x596118(0x20f)]();}else{if(_0x3d2a0e[_0x596118(0x29f)]()!==_0x4d66e4['screenX']())return _0x3d2a0e[_0x596118(0x29f)]()-_0x4d66e4[_0x596118(0x29f)]();}return _0x4d66e4[_0x596118(0x254)]()-_0x3d2a0e[_0x596118(0x254)]();},Scene_Map[_0x32201d(0x1d8)][_0x32201d(0x25c)]=function(){const _0x160692=_0x32201d,_0x37e7d1=$gameMap[_0x160692(0x1db)]()[_0x160692(0x1f9)](undefined)[_0x160692(0x1f9)](null);for(const _0x25e666 of _0x37e7d1){if('pVQdG'===_0x160692(0x1e0))return this[_0x160692(0x263)]&&this['_scene']instanceof _0x14d54a;else{if(!_0x25e666)continue;if(!_0x25e666[_0x160692(0x1f8)]())continue;const _0x2e4012=_0x160692(0x241)['format'](_0x25e666['eventId']());if(this[_0x160692(0x1d6)][_0x2e4012]===undefined){if(_0x160692(0x296)===_0x160692(0x29a))return this[_0x160692(0x2aa)]()[_0x160692(0x2b4)];else this[_0x160692(0x217)](_0x25e666,_0x2e4012);}}}},Scene_Map[_0x32201d(0x1d8)]['createNewProximityMessageWindow']=function(_0x4d9db1,_0x5048ae){const _0x78681a=_0x32201d,_0x4c90d0=new Window_ProximityMessage(_0x4d9db1);this[_0x78681a(0x256)][_0x78681a(0x288)](_0x4c90d0),this['_proximityMessageWindows'][_0x5048ae]=_0x4c90d0;},Scene_Map[_0x32201d(0x1d8)][_0x32201d(0x221)]=function(_0x1e2816){const _0x403232=_0x32201d;if(!_0x1e2816)return null;const _0x35f9e6=_0x403232(0x241)[_0x403232(0x1f2)](_0x1e2816['eventId']());return this[_0x403232(0x1d6)][_0x35f9e6]===undefined&&(_0x403232(0x29e)===_0x403232(0x29e)?this[_0x403232(0x217)](_0x1e2816,_0x35f9e6):this[_0x403232(0x2ba)]()),this[_0x403232(0x1d6)][_0x35f9e6]||null;};function Window_ProximityMessage(){const _0x2624e2=_0x32201d;this[_0x2624e2(0x211)](...arguments);}Window_ProximityMessage[_0x32201d(0x1d8)]=Object['create'](Window_Base['prototype']),Window_ProximityMessage[_0x32201d(0x1d8)][_0x32201d(0x1ef)]=Window_ProximityMessage,Window_ProximityMessage[_0x32201d(0x27f)]={'updateFrequency':VisuMZ['ProximityMessages'][_0x32201d(0x2b6)]['Window'][_0x32201d(0x280)]??0xa,'tailTypes':{'bottomLeft':{'filename':VisuMZ[_0x32201d(0x257)][_0x32201d(0x2b6)][_0x32201d(0x1fe)][_0x32201d(0x2b3)]??'','anchorX':VisuMZ[_0x32201d(0x257)][_0x32201d(0x2b6)][_0x32201d(0x1fe)]['bottomLeftAnchorX']??0.5,'anchorY':VisuMZ['ProximityMessages']['Settings'][_0x32201d(0x1fe)]['bottomLeftAnchorY']??0x0,'offsetX':VisuMZ[_0x32201d(0x257)]['Settings'][_0x32201d(0x1fe)]['bottomLeftOffsetX']??0x0,'offsetY':VisuMZ['ProximityMessages']['Settings'][_0x32201d(0x1fe)]['bottomLeftOffsetY']??0x0},'bottomRight':{'filename':VisuMZ['ProximityMessages']['Settings'][_0x32201d(0x1fe)][_0x32201d(0x1d3)]??'','anchorX':VisuMZ['ProximityMessages'][_0x32201d(0x2b6)][_0x32201d(0x1fe)][_0x32201d(0x270)]??0.5,'anchorY':VisuMZ[_0x32201d(0x257)]['Settings']['Window']['bottomRightAnchorY']??0x0,'offsetX':VisuMZ[_0x32201d(0x257)][_0x32201d(0x2b6)]['Window'][_0x32201d(0x208)]??0x0,'offsetY':VisuMZ[_0x32201d(0x257)][_0x32201d(0x2b6)]['Window'][_0x32201d(0x1e9)]??0x0}},'offsetX':VisuMZ[_0x32201d(0x257)][_0x32201d(0x2b6)][_0x32201d(0x1fe)][_0x32201d(0x1f4)]??0x0,'offsetY':VisuMZ[_0x32201d(0x257)][_0x32201d(0x2b6)][_0x32201d(0x1fe)][_0x32201d(0x2ad)]??-0x4,'hideDuring':{'gameMessageBusy':VisuMZ[_0x32201d(0x257)][_0x32201d(0x2b6)][_0x32201d(0x1fe)][_0x32201d(0x290)]??!![],'gameMapEventRunning':VisuMZ['ProximityMessages']['Settings'][_0x32201d(0x1fe)][_0x32201d(0x231)]??![]}},Window_ProximityMessage[_0x32201d(0x1d8)][_0x32201d(0x211)]=function(_0x2fdaa4){const _0x4172ac=_0x32201d;this[_0x4172ac(0x274)]=_0x2fdaa4;const _0x3a43f0=new Rectangle(0x0,0x0,Graphics[_0x4172ac(0x242)],Graphics[_0x4172ac(0x2b2)]);Window_Base[_0x4172ac(0x1d8)][_0x4172ac(0x211)][_0x4172ac(0x1e1)](this,_0x3a43f0),this['createTailSprite'](),this[_0x4172ac(0x23e)](),this[_0x4172ac(0x246)]();},Window_ProximityMessage['prototype'][_0x32201d(0x23e)]=function(){this['openness']=0x0;},Window_ProximityMessage['prototype']['createTailSprite']=function(){const _0x34f46c=_0x32201d;this[_0x34f46c(0x202)]=new Sprite(),this['_tailSprite'][_0x34f46c(0x25f)]=![],this[_0x34f46c(0x288)](this[_0x34f46c(0x202)]);},Window_ProximityMessage[_0x32201d(0x1d8)]['update']=function(){const _0x4e16f=_0x32201d;Window_Base[_0x4e16f(0x1d8)][_0x4e16f(0x29b)][_0x4e16f(0x1e1)](this);const _0x3ead2c=Math[_0x4e16f(0x289)](Window_ProximityMessage[_0x4e16f(0x27f)][_0x4e16f(0x280)],0x1);Graphics[_0x4e16f(0x1dd)]%_0x3ead2c===0x0&&this[_0x4e16f(0x24d)](),this[_0x4e16f(0x204)]();},Window_ProximityMessage[_0x32201d(0x1d8)][_0x32201d(0x24d)]=function(){const _0x2646fa=_0x32201d;this[_0x2646fa(0x214)](),this[_0x2646fa(0x277)](),this[_0x2646fa(0x1f0)]();},Window_ProximityMessage[_0x32201d(0x1d8)]['updateRest']=function(){const _0x53cae6=_0x32201d;this[_0x53cae6(0x26b)](),this[_0x53cae6(0x2a2)](),this[_0x53cae6(0x28d)]();},Window_ProximityMessage[_0x32201d(0x1d8)][_0x32201d(0x246)]=function(){const _0x482f67=_0x32201d;this[_0x482f67(0x24d)](),this[_0x482f67(0x204)]();},Window_ProximityMessage[_0x32201d(0x1d8)]['updateMessage']=function(){const _0x2b2d81=_0x32201d;this[_0x2b2d81(0x23b)]!==this[_0x2b2d81(0x274)][_0x2b2d81(0x253)]()&&(this['_text']=this[_0x2b2d81(0x274)][_0x2b2d81(0x253)]()['trim'](),this[_0x2b2d81(0x229)]());},Window_ProximityMessage['prototype'][_0x32201d(0x229)]=function(){const _0xf7e72a=_0x32201d;this['contents'][_0xf7e72a(0x207)]();if(this[_0xf7e72a(0x23b)]==='')return;this[_0xf7e72a(0x2b0)]();const _0x3e2b7f=this[_0xf7e72a(0x1e2)]();this[_0xf7e72a(0x24c)](this[_0xf7e72a(0x23b)],_0x3e2b7f['x'],_0x3e2b7f['y'],_0x3e2b7f['width']);},Window_ProximityMessage[_0x32201d(0x1d8)][_0x32201d(0x2b0)]=function(){const _0x43a1a6=_0x32201d,_0x2b1a64=this[_0x43a1a6(0x212)](this[_0x43a1a6(0x23b)]);this[_0x43a1a6(0x242)]=_0x2b1a64['width']+(this[_0x43a1a6(0x2ae)]()+this['padding'])*0x2,this[_0x43a1a6(0x2b2)]=_0x2b1a64[_0x43a1a6(0x2b2)]+this['padding']*0x2,this[_0x43a1a6(0x252)](),this['resetFontSettings']();},Window_ProximityMessage[_0x32201d(0x1d8)][_0x32201d(0x277)]=function(){const _0x48b53e=_0x32201d;if(this['meetsProximityConditions']()){if('BYqoH'!==_0x48b53e(0x28a))this[_0x48b53e(0x2ba)]();else{const _0x18b9fa=[this['x'],this['y']],_0x5a9a73=[_0x1d40c4['x'],_0x2b93e5['y']];return _0x1b40f7[_0x48b53e(0x22c)]((_0x5a9a73[0x0]-_0x18b9fa[0x0])**0x2+(_0x5a9a73[0x1]-_0x18b9fa[0x1])**0x2);}}else _0x48b53e(0x291)!==_0x48b53e(0x20a)?this[_0x48b53e(0x23d)]():this[_0x48b53e(0x202)]['x']=_0x4bf3fc['round'](this['width']/0x2)+_0x2d091a[_0x48b53e(0x218)];},Window_ProximityMessage['prototype'][_0x32201d(0x213)]=function(){const _0x351c76=_0x32201d;if(!this[_0x351c76(0x274)])return![];if(!this[_0x351c76(0x274)]['hasProximityMessage']())return![];if(SceneManager[_0x351c76(0x259)])return![];if(!$gameSystem['proximityMessagesVisible']())return![];const _0x4ee5b9=Window_ProximityMessage[_0x351c76(0x27f)];if(_0x4ee5b9[_0x351c76(0x20b)][_0x351c76(0x290)]){if($gameMessage&&$gameMessage[_0x351c76(0x1df)]())return![];}if(_0x4ee5b9[_0x351c76(0x20b)][_0x351c76(0x231)]){if('csLIf'!==_0x351c76(0x283))this[_0x351c76(0x1eb)]['maxRange']=_0x7ffab8(_0x23df13['$1']);else{if($gameMap&&$gameMap[_0x351c76(0x223)]())return![];}}return this['_sourceEvent'][_0x351c76(0x203)]();},Window_ProximityMessage[_0x32201d(0x1d8)][_0x32201d(0x26b)]=function(){const _0x24e4a4=_0x32201d,_0x35f8a1=this[_0x24e4a4(0x274)][_0x24e4a4(0x1e3)]();this[_0x24e4a4(0x2a0)]['x']=_0x35f8a1/$gameScreen['zoomScale'](),this[_0x24e4a4(0x2a0)]['y']=_0x35f8a1/$gameScreen[_0x24e4a4(0x2ac)]();},Window_ProximityMessage['prototype'][_0x32201d(0x2a2)]=function(){const _0x264f9c=_0x32201d,_0x17a65f=this[_0x264f9c(0x2a0)]['x'],_0x4f9d5a=this[_0x264f9c(0x242)]*_0x17a65f,_0x106ab3=this[_0x264f9c(0x2b2)]*_0x17a65f,_0x1d7745=Window_ProximityMessage[_0x264f9c(0x27f)],_0x54990d=this['_sourceEvent'][_0x264f9c(0x2aa)]();let _0x24a893=this['_sourceEvent']['screenX']()+_0x1d7745['offsetX']+(_0x54990d[_0x264f9c(0x218)]||0x0),_0x359ad8=this[_0x264f9c(0x274)][_0x264f9c(0x20f)]()+_0x1d7745[_0x264f9c(0x1cc)]+(_0x54990d[_0x264f9c(0x1cc)]||0x0);const _0x31e9c6=SceneManager[_0x264f9c(0x263)][_0x264f9c(0x2af)];if(_0x31e9c6){if(_0x264f9c(0x25d)===_0x264f9c(0x25d)){const _0x5e65f2=_0x31e9c6[_0x264f9c(0x1de)](this[_0x264f9c(0x274)]);if(_0x5e65f2)_0x359ad8-=_0x5e65f2[_0x264f9c(0x2b2)];}else{if(!this[_0x264f9c(0x2a7)])return;this['_requestProximityMessageUpdate']=![],_0x2e26ae[_0x264f9c(0x263)][_0x264f9c(0x25c)]();}}this['x']=_0x24a893-Math[_0x264f9c(0x27e)](_0x4f9d5a/0x2),this['y']=_0x359ad8-Math[_0x264f9c(0x27e)](_0x106ab3);},Window_ProximityMessage[_0x32201d(0x1d8)][_0x32201d(0x1f0)]=function(){const _0x4d2a86=_0x32201d,_0x5e2a74=this[_0x4d2a86(0x274)][_0x4d2a86(0x2aa)]();if(this[_0x4d2a86(0x2b8)]===_0x5e2a74['tailType'])return;this[_0x4d2a86(0x2b8)]=_0x5e2a74['tailType'];if(this[_0x4d2a86(0x2b8)]===_0x4d2a86(0x249))return;const _0x157d01=Window_ProximityMessage['SETTINGS'][_0x4d2a86(0x23a)][this[_0x4d2a86(0x2b8)]];if(!_0x157d01)return;const _0x4bfb3a=_0x157d01[_0x4d2a86(0x21e)]||'';_0x4bfb3a!==''?this['_tailSprite']['bitmap']=ImageManager['loadSystem'](_0x4bfb3a):_0x4d2a86(0x1d2)==='Drnpz'?this['_tailSprite'][_0x4d2a86(0x1e8)]=undefined:_0x4bfa2a=_0x3e7434[_0x4d2a86(0x289)](_0x3a00fc,_0x1909d7);},Window_ProximityMessage[_0x32201d(0x1d8)][_0x32201d(0x28d)]=function(){const _0x473c73=_0x32201d;if(!this[_0x473c73(0x202)])return;if(!this[_0x473c73(0x202)][_0x473c73(0x1e8)])return;this[_0x473c73(0x202)][_0x473c73(0x25f)]=this[_0x473c73(0x200)]===0xff;const _0x423c6b=Window_ProximityMessage[_0x473c73(0x27f)][_0x473c73(0x23a)][this[_0x473c73(0x2b8)]];this[_0x473c73(0x202)][_0x473c73(0x22b)]['x']=_0x423c6b[_0x473c73(0x2b7)],this['_tailSprite'][_0x473c73(0x22b)]['y']=_0x423c6b[_0x473c73(0x1fb)];const _0x36a1a2=this[_0x473c73(0x274)]['getProximityMessageData']();_0x36a1a2['tailOffsetX']===_0x473c73(0x1f5)?_0x473c73(0x264)!==_0x473c73(0x1fd)?this[_0x473c73(0x202)]['x']=Math[_0x473c73(0x27e)](this['width']/0x2)+_0x423c6b['offsetX']:this[_0x473c73(0x1eb)]['tailOffsetX']=_0x443701(_0xfcb1ea['$1']):_0x473c73(0x28f)!==_0x473c73(0x233)?this[_0x473c73(0x202)]['x']=Number(_0x36a1a2['tailOffsetX'])+_0x423c6b[_0x473c73(0x218)]:this['_proximityMessage'][_0x473c73(0x2b4)]='square',this['_tailSprite']['y']=this[_0x473c73(0x2b2)]+_0x423c6b[_0x473c73(0x1cc)];},Window_ProximityMessage['prototype'][_0x32201d(0x1da)]=function(){const _0x1caf61=_0x32201d,_0xa508e1=this['_clientArea'][_0x1caf61(0x250)][_0x1caf61(0x1ff)](new Point(0x0,0x0)),_0x300b41=this['_clientArea'][_0x1caf61(0x28c)];_0x300b41['x']=_0xa508e1['x']+this[_0x1caf61(0x226)]['x'],_0x300b41['y']=_0xa508e1['y']+this[_0x1caf61(0x226)]['y'],_0x300b41['width']=this[_0x1caf61(0x21a)],_0x300b41[_0x1caf61(0x2b2)]=this[_0x1caf61(0x25e)];};