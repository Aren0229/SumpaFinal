//=============================================================================
// VisuStella MZ - Ambience Sounds
// VisuMZ_4_AmbienceSounds.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_AmbienceSounds = true;

var VisuMZ = VisuMZ || {};
VisuMZ.AmbienceSounds = VisuMZ.AmbienceSounds || {};
VisuMZ.AmbienceSounds.version = 1.01;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.01] [AmbienceSounds]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Ambience_Sounds_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin allows you to play periodically timed sound effects from events
 * to create an ambience effect. The volume and the panning of the sound effect
 * will vary depending on the distance the player is from the event giving an
 * immersive feeling.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Setup events so that they can play sound effects at timed intervals to
 *   create an ambience effect.
 * * Events can have multiple sound effects to play. If they do, a random sound
 *   will be picked from their random pool to play at certain intervals.
 * * The volume and pitch of these ambience sound effects can have variance so
 *   that the sound effects don't become too repetitive.
 * * Intervals can have variance, too, so it doesn't become an exact timing.
 * * The distance between the player and the event will have an effect on the
 *   volume and pan of the ambience sound effects.
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
 * === Event-Related Notetags ===
 * 
 * ---
 *
 * <Ambience SFX: name>
 * <Ambience SFX: name, volume>
 * <Ambience SFX: name, volume, pitch>
 * <Ambience SFX: name, volume, pitch, pan>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adds the ambience sound effect to the event's ambience pool.
 *   - If there are multiple entries, add multiple sound effects.
 *   - A random sound effect will be picked each time it's ready to play.
 * - The variant you use will determine how customized you want the sound
 *   effect's properties. Otherwise, the information will come from the default
 *   Plugin Parameter settings.
 * - Replace 'name' with the filename of the sound effect found in /audio/se/
 *   to play. Do NOT include the file extension.
 * - Replace 'volume' with a number representing the volume of the sound.
 * - Replace 'pitch' with a number representing the pitch of the sound effect.
 * - Replace 'pan' with a number representing the pan of the sound effect.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Ambience Interval: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the interval at which the ambience sound effects play.
 * - If this notetag is not used, then the interval played will be determined
 *   by the default Plugin Parameter settings.
 * - Replace 'x' with a number representing the time in frames between ambience
 *   sound effects playing. 60 frames is equal to a second.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Ambience Distance: x>
 * <Ambience Proximity: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the maximum proximity distance in tiles away from the event the
 *   player can hear the ambience sound effects from.
 * - This will not form a diamond shape. This will form a circular radius.
 * - There are no difference between the notetags. The one you use is entirely
 *   up to your own personal preferences.
 * - If this notetag is not used, then the maximum proximity distance will be
 *   determined by the default Plugin Parameter settings.
 * - Replace 'x' with a number representing the maximum proximity distance in
 *   tiles to hear the event from.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Ambience Interval Variance: x%>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the interval variability. The value of the final interval
 *   amount will vary by this percentage value.
 * - If this plugin is not used, then the interval variance will be determined
 *   by the default Plugin Parameter settings.
 * - Replace 'x' with a percentage representing the variability amount.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Ambience Volume Variance: x%>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the volume variability. The value of the final volume amount
 *   will vary by this percentage value.
 * - If this plugin is not used, then the volume variance will be determined by
 *   the default Plugin Parameter settings.
 * - Replace 'x' with a percentage representing the variability amount.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Ambience Pitch Variance: x%>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the pitch variability. The value of the final pitch amount will
 *   vary by this percentage value.
 * - If this plugin is not used, then the pitch variance will be determined by
 *   the default Plugin Parameter settings.
 * - Replace 'x' with a percentage representing the variability amount.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * Here are the settings for setting up the Ambience Sound Effects. These
 * values will be used if they are not declared by the notetags and/or comment
 * tags found on the events.
 *
 * ---
 *
 * Defaults
 * 
 *   Interval:
 *   - Default interval of an ambience sound effect.
 *   - Interval is declared in frames.
 *   - 60 frames = 1 second.
 * 
 *   Proximity:
 *   - Default proximity of an ambience sound effect.
 *   - Proximity is the radial tile distance away from event.
 * 
 *   Volume:
 *   - Default volume of an ambience sound effect.
 *   - This is used if volume data isn't declared.
 * 
 *   Pitch:
 *   - Default pitch of an ambience sound effect.
 *   - This is used if pitch data isn't declared.
 * 
 *   Pan:
 *   - Default pan of an ambience sound effect.
 *   - This is used if pan data isn't declared.
 *
 * ---
 *
 * Variance
 * 
 *   Interval:
 *   - Default interval variability.
 *   - The value of the final interval amount will vary by this 
 *     percentage value.
 * 
 *   Volume:
 *   - Default volume variability.
 *   - The value of the final volume amount will vary by this percentage value.
 * 
 *   Pitch:
 *   - Default pitch variability.
 *   - The value of the final pitch amount will vary by this percentage value.
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
 * Version 1.01: January 20, 2023
 * * Bug Fixes!
 * ** Left/Right pan channels are reversed. They should now work properly.
 *    Fix made by Arisu.
 *
 * Version 1.00 Official Release Date: October 31, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param AmbienceSounds
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Defaults
 *
 * @param defaultInterval:num
 * @text Interval
 * @parent Defaults
 * @type number
 * @min 1
 * @desc Default interval of an ambience sound effect.
 * Interval is declared in frames. 60 frames = 1 second.
 * @default 60
 *
 * @param defaultDistance:num
 * @text Proximity
 * @parent Defaults
 * @type number
 * @min 1
 * @desc Default proximity of an ambience sound effect.
 * Proximity is the radial tile distance away from event.
 * @default 10
 *
 * @param defaultVolume:num
 * @text Volume
 * @parent Defaults
 * @type number
 * @max 100
 * @desc Default volume of an ambience sound effect.
 * This is used if volume data isn't declared.
 * @default 50
 *
 * @param defaultPitch:num
 * @text Pitch
 * @parent Defaults
 * @type number
 * @desc Default pitch of an ambience sound effect.
 * This is used if pitch data isn't declared.
 * @default 100
 *
 * @param defaultPan:num
 * @text Pan
 * @parent Defaults
 * @desc Default pan of an ambience sound effect.
 * This is used if pan data isn't declared.
 * @default 0
 * 
 * @param Variance
 *
 * @param varianceInterval:num
 * @text Interval
 * @parent Variance
 * @desc Default interval variability. The value of the final
 * interval amount will vary by this percentage value.
 * @default 0.20
 *
 * @param varianceVolume:num
 * @text Volume
 * @parent Variance
 * @desc Default volume variability. The value of the final
 * volume amount will vary by this percentage value.
 * @default 0.20
 *
 * @param variancePitch:num
 * @text Pitch
 * @parent Variance
 * @desc Default pitch variability. The value of the final
 * pitch amount will vary by this percentage value.
 * @default 0.20
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

const _0x43164c=_0x4027;(function(_0x1a6398,_0x4915a0){const _0x21c034=_0x4027,_0x38caea=_0x1a6398();while(!![]){try{const _0x4ef5ca=parseInt(_0x21c034(0x115))/0x1+-parseInt(_0x21c034(0x138))/0x2*(-parseInt(_0x21c034(0x10b))/0x3)+parseInt(_0x21c034(0x160))/0x4*(-parseInt(_0x21c034(0x14e))/0x5)+-parseInt(_0x21c034(0x153))/0x6*(parseInt(_0x21c034(0x124))/0x7)+-parseInt(_0x21c034(0x137))/0x8*(-parseInt(_0x21c034(0xff))/0x9)+-parseInt(_0x21c034(0x13d))/0xa+parseInt(_0x21c034(0x119))/0xb*(-parseInt(_0x21c034(0x14a))/0xc);if(_0x4ef5ca===_0x4915a0)break;else _0x38caea['push'](_0x38caea['shift']());}catch(_0xc66fe9){_0x38caea['push'](_0x38caea['shift']());}}}(_0x47b1,0x38cae));var label=_0x43164c(0x121),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x43164c(0x14c)](function(_0x2781f8){const _0x49621a=_0x43164c;return _0x2781f8[_0x49621a(0x155)]&&_0x2781f8['description'][_0x49621a(0x159)]('['+label+']');})[0x0];function _0x4027(_0x3ac5ec,_0x3e60e0){const _0x47b113=_0x47b1();return _0x4027=function(_0x4027f6,_0x453085){_0x4027f6=_0x4027f6-0xf9;let _0x16480a=_0x47b113[_0x4027f6];return _0x16480a;},_0x4027(_0x3ac5ec,_0x3e60e0);}VisuMZ[label][_0x43164c(0x11c)]=VisuMZ[label][_0x43164c(0x11c)]||{},VisuMZ[_0x43164c(0x127)]=function(_0x474fbb,_0x2dede3){const _0x1bd166=_0x43164c;for(const _0x7ce0f4 in _0x2dede3){if(_0x7ce0f4[_0x1bd166(0x11a)](/(.*):(.*)/i)){const _0x5744a7=String(RegExp['$1']),_0x39991b=String(RegExp['$2'])['toUpperCase']()[_0x1bd166(0x125)]();let _0x1a69bb,_0x45c119,_0x4f6ec9;switch(_0x39991b){case'NUM':_0x1a69bb=_0x2dede3[_0x7ce0f4]!==''?Number(_0x2dede3[_0x7ce0f4]):0x0;break;case _0x1bd166(0x144):_0x45c119=_0x2dede3[_0x7ce0f4]!==''?JSON[_0x1bd166(0x122)](_0x2dede3[_0x7ce0f4]):[],_0x1a69bb=_0x45c119[_0x1bd166(0x157)](_0xbaadb4=>Number(_0xbaadb4));break;case _0x1bd166(0xfe):_0x1a69bb=_0x2dede3[_0x7ce0f4]!==''?eval(_0x2dede3[_0x7ce0f4]):null;break;case _0x1bd166(0x134):_0x45c119=_0x2dede3[_0x7ce0f4]!==''?JSON[_0x1bd166(0x122)](_0x2dede3[_0x7ce0f4]):[],_0x1a69bb=_0x45c119[_0x1bd166(0x157)](_0x938c71=>eval(_0x938c71));break;case _0x1bd166(0x150):_0x1a69bb=_0x2dede3[_0x7ce0f4]!==''?JSON['parse'](_0x2dede3[_0x7ce0f4]):'';break;case'ARRAYJSON':_0x45c119=_0x2dede3[_0x7ce0f4]!==''?JSON[_0x1bd166(0x122)](_0x2dede3[_0x7ce0f4]):[],_0x1a69bb=_0x45c119[_0x1bd166(0x157)](_0x3f961e=>JSON[_0x1bd166(0x122)](_0x3f961e));break;case _0x1bd166(0x106):_0x1a69bb=_0x2dede3[_0x7ce0f4]!==''?new Function(JSON[_0x1bd166(0x122)](_0x2dede3[_0x7ce0f4])):new Function('return\x200');break;case _0x1bd166(0x10e):_0x45c119=_0x2dede3[_0x7ce0f4]!==''?JSON['parse'](_0x2dede3[_0x7ce0f4]):[],_0x1a69bb=_0x45c119[_0x1bd166(0x157)](_0x4cc207=>new Function(JSON[_0x1bd166(0x122)](_0x4cc207)));break;case _0x1bd166(0x139):_0x1a69bb=_0x2dede3[_0x7ce0f4]!==''?String(_0x2dede3[_0x7ce0f4]):'';break;case _0x1bd166(0x112):_0x45c119=_0x2dede3[_0x7ce0f4]!==''?JSON['parse'](_0x2dede3[_0x7ce0f4]):[],_0x1a69bb=_0x45c119[_0x1bd166(0x157)](_0x58512e=>String(_0x58512e));break;case'STRUCT':_0x4f6ec9=_0x2dede3[_0x7ce0f4]!==''?JSON[_0x1bd166(0x122)](_0x2dede3[_0x7ce0f4]):{},_0x1a69bb=VisuMZ[_0x1bd166(0x127)]({},_0x4f6ec9);break;case _0x1bd166(0x154):_0x45c119=_0x2dede3[_0x7ce0f4]!==''?JSON['parse'](_0x2dede3[_0x7ce0f4]):[],_0x1a69bb=_0x45c119[_0x1bd166(0x157)](_0x247e78=>VisuMZ[_0x1bd166(0x127)]({},JSON[_0x1bd166(0x122)](_0x247e78)));break;default:continue;}_0x474fbb[_0x5744a7]=_0x1a69bb;}}return _0x474fbb;},(_0x45db93=>{const _0x1e6c63=_0x43164c,_0x3099f2=_0x45db93[_0x1e6c63(0x149)];for(const _0x3ac388 of dependencies){if(!Imported[_0x3ac388]){alert(_0x1e6c63(0x12e)['format'](_0x3099f2,_0x3ac388)),SceneManager[_0x1e6c63(0x12d)]();break;}}const _0x264b1f=_0x45db93[_0x1e6c63(0x10d)];if(_0x264b1f[_0x1e6c63(0x11a)](/\[Version[ ](.*?)\]/i)){const _0x1dde77=Number(RegExp['$1']);if(_0x1dde77!==VisuMZ[label][_0x1e6c63(0x161)]){if(_0x1e6c63(0x108)!=='sLZPS')alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x1e6c63(0xf9)](_0x3099f2,_0x1dde77)),SceneManager[_0x1e6c63(0x12d)]();else{if([0x6c,0x198]['includes'](_0x592266['code'])){if(_0x479cc7!=='')_0x3514db+='\x0a';_0x1ee916+=_0x1ec250[_0x1e6c63(0x15e)][0x0];}}}}if(_0x264b1f['match'](/\[Tier[ ](\d+)\]/i)){const _0x39d8bf=Number(RegExp['$1']);_0x39d8bf<tier?_0x1e6c63(0x101)!=='KHVFC'?this['_ambienceSfx'][_0x1e6c63(0x13a)]['interval']=_0x56bac6[_0x1e6c63(0x118)](_0x39adb7(_0x44c2c1['$1'])*0.01,0x0):(alert(_0x1e6c63(0x107)[_0x1e6c63(0xf9)](_0x3099f2,_0x39d8bf,tier)),SceneManager[_0x1e6c63(0x12d)]()):tier=Math[_0x1e6c63(0x118)](_0x39d8bf,tier);}VisuMZ[_0x1e6c63(0x127)](VisuMZ[label]['Settings'],_0x45db93['parameters']);})(pluginData),VisuMZ[_0x43164c(0x121)][_0x43164c(0x128)]={'sfx':/<(?:AMBIENT|AMBIENCE) (?:SOUND|SFX|SE):[ ](.*?)>/gi,'interval':/<(?:AMBIENT|AMBIENCE) (?:INTERVAL|LOOP|REPEAT):[ ](\d+)>/i,'distance':/<(?:AMBIENT|AMBIENCE) (?:PROXIMITY|DISTANCE):[ ](\d+)>/i,'volumeVariance':/<(?:AMBIENT|AMBIENCE) (?:VOLUME|VOL) (?:VARIANCE|VAR):[ ](\d+)([%％])>/i,'pitchVariance':/<(?:AMBIENT|AMBIENCE) PITCH (?:VARIANCE|VAR):[ ](\d+)([%％])>/i,'intervalVariance':/<(?:AMBIENT|AMBIENCE) (?:INTERVAL|LOOP|REPEAT) (?:VARIANCE|VAR):[ ](\d+)([%％])>/i},Game_Event['AMBIENCE_SFX']={'interval':VisuMZ[_0x43164c(0x121)]['Settings'][_0x43164c(0x15b)],'distance':VisuMZ[_0x43164c(0x121)][_0x43164c(0x11c)][_0x43164c(0x15a)],'default':{'volume':VisuMZ[_0x43164c(0x121)][_0x43164c(0x11c)]['defaultVolume'],'pitch':VisuMZ[_0x43164c(0x121)][_0x43164c(0x11c)]['defaultPitch'],'pan':VisuMZ[_0x43164c(0x121)]['Settings'][_0x43164c(0x13b)]},'variance':{'interval':VisuMZ[_0x43164c(0x121)][_0x43164c(0x11c)][_0x43164c(0x102)],'volume':VisuMZ['AmbienceSounds']['Settings'][_0x43164c(0x12c)],'pitch':VisuMZ[_0x43164c(0x121)][_0x43164c(0x11c)][_0x43164c(0x143)]}},VisuMZ['AmbienceSounds']['Game_Event_clearPageSettings']=Game_Event[_0x43164c(0x147)]['clearPageSettings'],Game_Event[_0x43164c(0x147)][_0x43164c(0x129)]=function(){const _0x3229c6=_0x43164c;VisuMZ[_0x3229c6(0x121)][_0x3229c6(0xfd)]['call'](this),this[_0x3229c6(0x111)]();},VisuMZ[_0x43164c(0x121)][_0x43164c(0xfc)]=Game_Event[_0x43164c(0x147)]['setupPageSettings'],Game_Event['prototype'][_0x43164c(0x152)]=function(){const _0x30e348=_0x43164c;VisuMZ[_0x30e348(0x121)][_0x30e348(0xfc)]['call'](this),this[_0x30e348(0x131)]();},Game_Event[_0x43164c(0x147)][_0x43164c(0x131)]=function(){const _0x281367=_0x43164c;if(!this[_0x281367(0x15d)]())return;this[_0x281367(0x111)](),this[_0x281367(0x12f)](),this['setupAmbienceSoundsCommentTags'](),this[_0x281367(0x110)]();},Game_Event[_0x43164c(0x147)][_0x43164c(0x12f)]=function(){const _0xf7552f=_0x43164c,_0x498084=this[_0xf7552f(0x15d)]()[_0xf7552f(0x11e)];if(_0x498084==='')return;this['checkAmbienceSoundsStringTags'](_0x498084);},Game_Event['prototype'][_0x43164c(0xfa)]=function(){const _0x1e1f88=_0x43164c;if(!this[_0x1e1f88(0x145)]())return;const _0x55a5db=this[_0x1e1f88(0xfb)]();let _0x406e2f='';for(const _0x4ca608 of _0x55a5db){if([0x6c,0x198][_0x1e1f88(0x159)](_0x4ca608[_0x1e1f88(0x14f)])){if(_0x406e2f!=='')_0x406e2f+='\x0a';_0x406e2f+=_0x4ca608['parameters'][0x0];}}this[_0x1e1f88(0x148)](_0x406e2f);},Game_Event['prototype'][_0x43164c(0x111)]=function(){const _0x15aa0c=_0x43164c;this[_0x15aa0c(0x135)]=JSON['parse'](JSON[_0x15aa0c(0x13c)](Game_Event[_0x15aa0c(0x156)])),this[_0x15aa0c(0x135)][_0x15aa0c(0x117)]=![],this[_0x15aa0c(0x135)][_0x15aa0c(0x162)]=[],this['_ambienceSfxCount']=0x0;},Game_Event[_0x43164c(0x147)][_0x43164c(0x148)]=function(_0x2f2f65){const _0x287279=_0x43164c,_0xb919dd=VisuMZ[_0x287279(0x121)][_0x287279(0x128)],_0x191ea4=_0x2f2f65[_0x287279(0x11a)](_0xb919dd[_0x287279(0x12b)]);if(_0x191ea4)for(const _0x4182b8 of _0x191ea4){_0x4182b8[_0x287279(0x11a)](_0xb919dd[_0x287279(0x12b)]);const _0x1a70c3=RegExp['$1'][_0x287279(0x113)](','),_0x17aa1d={'name':(_0x1a70c3[0x0]??'')['trim'](),'volume':Number(_0x1a70c3[0x1]??Game_Event[_0x287279(0x156)]['default'][_0x287279(0x123)]),'pitch':Number(_0x1a70c3[0x2]??Game_Event[_0x287279(0x156)][_0x287279(0x141)][_0x287279(0x116)]),'pan':Number(_0x1a70c3[0x3]??Game_Event['AMBIENCE_SFX'][_0x287279(0x141)][_0x287279(0x10f)])};this[_0x287279(0x135)][_0x287279(0x162)][_0x287279(0x140)](_0x17aa1d),this[_0x287279(0x135)]['enabled']=!![];}_0x2f2f65['match'](_0xb919dd[_0x287279(0x142)])&&(_0x287279(0x136)==='SVcrF'?this['_ambienceSfx']['interval']=Math[_0x287279(0x118)](Number(RegExp['$1']),0x1):this[_0x287279(0x135)]['enabled']&&(this[_0x287279(0x132)]=_0x417159[_0x287279(0x15c)](this['_ambienceSfx'][_0x287279(0x142)])+0x1));if(_0x2f2f65[_0x287279(0x11a)](_0xb919dd[_0x287279(0x11d)])){if(_0x287279(0x146)===_0x287279(0x158)){if(!this['event']())return;this[_0x287279(0x111)](),this[_0x287279(0x12f)](),this[_0x287279(0xfa)](),this[_0x287279(0x110)]();}else this[_0x287279(0x135)][_0x287279(0x11d)]=Math[_0x287279(0x118)](Number(RegExp['$1']),0x1);}if(_0x2f2f65['match'](_0xb919dd[_0x287279(0x151)])){if(_0x287279(0x10a)===_0x287279(0x10a))this[_0x287279(0x135)][_0x287279(0x13a)][_0x287279(0x123)]=Math[_0x287279(0x118)](Number(RegExp['$1'])*0.01,0x0);else{const _0x29a979=_0xfc0f09(_0x29c091['$1']);_0x29a979!==_0x3cf817[_0x177cee]['version']&&(_0x1b8181('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x287279(0xf9)](_0x21349d,_0x29a979)),_0x50bc26[_0x287279(0x12d)]());}}_0x2f2f65['match'](_0xb919dd[_0x287279(0x14d)])&&(this['_ambienceSfx'][_0x287279(0x13a)][_0x287279(0x116)]=Math[_0x287279(0x118)](Number(RegExp['$1'])*0.01,0x0)),_0x2f2f65[_0x287279(0x11a)](_0xb919dd[_0x287279(0x11b)])&&(this[_0x287279(0x135)][_0x287279(0x13a)][_0x287279(0x142)]=Math[_0x287279(0x118)](Number(RegExp['$1'])*0.01,0x0));},Game_Event[_0x43164c(0x147)][_0x43164c(0x110)]=function(){const _0x32644d=_0x43164c;if(this['_ambienceSfx'][_0x32644d(0x117)]){if(_0x32644d(0x103)===_0x32644d(0x130)){const _0x236b43=this[_0x32644d(0x15d)]()[_0x32644d(0x11e)];if(_0x236b43==='')return;this[_0x32644d(0x148)](_0x236b43);}else this[_0x32644d(0x132)]=Math[_0x32644d(0x15c)](this[_0x32644d(0x135)][_0x32644d(0x142)])+0x1;}},Game_Event[_0x43164c(0x147)]['ambienceSfx']=function(){const _0x98f5d5=_0x43164c;if(this[_0x98f5d5(0x135)]===undefined)this[_0x98f5d5(0x131)]();return this['_ambienceSfx']||{};},VisuMZ[_0x43164c(0x121)][_0x43164c(0x114)]=Game_Event[_0x43164c(0x147)][_0x43164c(0x109)],Game_Event[_0x43164c(0x147)][_0x43164c(0x109)]=function(){const _0x54c210=_0x43164c;VisuMZ[_0x54c210(0x121)][_0x54c210(0x114)][_0x54c210(0x163)](this),this['updateAmbienceSfx']();},Game_Event[_0x43164c(0x147)]['updateAmbienceSfx']=function(){const _0x2e0348=_0x43164c;if(!this[_0x2e0348(0x13e)]()['enabled'])return;if(this[_0x2e0348(0x132)]-->0x0)return;const _0x553ed3=this[_0x2e0348(0x104)]();if(_0x553ed3>this['ambienceSfx']()[_0x2e0348(0x11d)])return;const _0x11068b=this[_0x2e0348(0x13e)]()[_0x2e0348(0x11d)]||0x1,_0x2f8fae=this[_0x2e0348(0x126)]();this[_0x2e0348(0x11f)](_0x2f8fae),this[_0x2e0348(0x10c)](_0x2f8fae,_0x553ed3,_0x11068b),AudioManager[_0x2e0348(0x105)](_0x2f8fae,_0x553ed3),this[_0x2e0348(0x15f)]();},Game_Event[_0x43164c(0x147)][_0x43164c(0x104)]=function(){const _0x3586d4=_0x43164c,_0x567f13=this['x']-$gamePlayer['x'],_0x5a09f8=this['y']-$gamePlayer['y'];return Math[_0x3586d4(0x133)](_0x567f13*_0x567f13+_0x5a09f8*_0x5a09f8);},Game_Event['prototype'][_0x43164c(0x126)]=function(){const _0x1a8ecd=_0x43164c,_0x24f36d=this[_0x1a8ecd(0x13e)]()[_0x1a8ecd(0x162)];return JSON[_0x1a8ecd(0x122)](JSON['stringify'](_0x24f36d[Math['randomInt'](_0x24f36d['length'])]));},Game_Event[_0x43164c(0x147)]['applyAmbienceVariance']=function(_0x4acc2c){const _0x34987a=_0x43164c,_0x50eeba=this[_0x34987a(0x13e)]()['variance'];_0x4acc2c[_0x34987a(0x123)]=VisuMZ[_0x34987a(0x121)][_0x34987a(0x100)](_0x4acc2c['volume'],_0x50eeba[_0x34987a(0x123)]),_0x4acc2c['pitch']=VisuMZ[_0x34987a(0x121)][_0x34987a(0x100)](_0x4acc2c['pitch'],_0x50eeba[_0x34987a(0x116)]);},Game_Event['prototype']['applyAmbienceDistance']=function(_0x1569b7,_0x557177,_0x3c15f7){const _0x327b82=_0x43164c,_0x23ea47=((_0x3c15f7-_0x557177)/_0x3c15f7)['clamp'](0x0,0x1);_0x1569b7[_0x327b82(0x123)]=Math[_0x327b82(0x14b)](_0x23ea47*_0x1569b7[_0x327b82(0x123)]);const _0x3b49c0=this[_0x327b82(0x120)]($gamePlayer['x']);_0x3b49c0!==0x0&&(_0x1569b7[_0x327b82(0x10f)]+=_0x3b49c0/_0x3c15f7*0x64),_0x1569b7[_0x327b82(0x123)]=_0x1569b7[_0x327b82(0x123)]['clamp'](0x0,0x64),_0x1569b7[_0x327b82(0x10f)]=_0x1569b7[_0x327b82(0x10f)][_0x327b82(0x13f)](-0x64,0x64);},Game_Event[_0x43164c(0x147)]['resetAmbienceTimer']=function(){const _0x45bffc=_0x43164c,_0x18ced4=this[_0x45bffc(0x13e)]()[_0x45bffc(0x142)],_0x20ef18=this[_0x45bffc(0x13e)]()[_0x45bffc(0x13a)][_0x45bffc(0x142)];this[_0x45bffc(0x132)]=VisuMZ[_0x45bffc(0x121)][_0x45bffc(0x100)](_0x18ced4,_0x20ef18);},VisuMZ[_0x43164c(0x121)]['applyVariance']=function(_0x50c88c,_0x45e65a){const _0x258806=_0x43164c,_0x250230=Math[_0x258806(0x12a)](Math['max'](Math[_0x258806(0x164)](_0x50c88c)*_0x45e65a,0x0)),_0x3cc42d=Math[_0x258806(0x15c)](_0x250230+0x1)+Math['randomInt'](_0x250230+0x1)-_0x250230;return _0x50c88c>=0x0?_0x50c88c+_0x3cc42d:_0x50c88c-_0x3cc42d;};function _0x47b1(){const _0x52e494=['2232810AAEyUP','applyVariance','KHVFC','varianceInterval','ittuA','getAmbienceDistance','playSe','FUNC','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','NBhDP','update','uIZrx','82515lyhbya','applyAmbienceDistance','description','ARRAYFUNC','pan','finalizeAmbienceSoundsSettings','initAmbienceSoundsEffects','ARRAYSTR','split','Game_Event_update','455261umbWCQ','pitch','enabled','max','44tgUdWg','match','intervalVariance','Settings','distance','note','applyAmbienceVariance','deltaXFrom','AmbienceSounds','parse','volume','6559wRpejH','trim','getAmbienceSoundEffect','ConvertParams','RegExp','clearPageSettings','floor','sfx','varianceVolume','exit','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','setupAmbienceSoundsNotetags','hyICA','setupAmbienceSoundsEffects','_ambienceSfxCount','sqrt','ARRAYEVAL','_ambienceSfx','SVcrF','8DtMKzN','14ajPnCy','STR','variance','defaultPan','stringify','689980dUWMtg','ambienceSfx','clamp','push','default','interval','variancePitch','ARRAYNUM','page','tciHh','prototype','checkAmbienceSoundsStringTags','name','611652XBdanc','round','filter','pitchVariance','171205wUmtAC','code','JSON','volumeVariance','setupPageSettings','1842eRYFqw','ARRAYSTRUCT','status','AMBIENCE_SFX','map','scLVn','includes','defaultDistance','defaultInterval','randomInt','event','parameters','resetAmbienceTimer','12RSAnHe','version','sounds','call','abs','format','setupAmbienceSoundsCommentTags','list','Game_Event_setupPageSettings','Game_Event_clearPageSettings','EVAL'];_0x47b1=function(){return _0x52e494;};return _0x47b1();}