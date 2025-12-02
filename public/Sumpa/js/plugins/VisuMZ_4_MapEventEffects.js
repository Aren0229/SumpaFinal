//=============================================================================
// VisuStella MZ - Map Event Effects
// VisuMZ_4_MapEventEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_MapEventEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MapEventEffects = VisuMZ.MapEventEffects || {};
VisuMZ.MapEventEffects.version = 1.03;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.03] [MapEventEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Map_Event_Effects_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Sometimes for an event cutscene, you want to do more than the available
 * special effects provided by RPG Maker MZ. This plugin adds more functions
 * including hue changes, floating, sidestepping, shaking, scaling, breathing,
 * tinting, and flashing. Use these effects to spice up your map events.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Apply hue effects to your map events. Events can start with specific hues,
 *   within hue ranges.
 * * Hues can shift constantly to give them a chromatic effect.
 * * Map events can float above the ground up and down at different speeds and
 *   at different rates.
 * * Map events can sidestep back and forth to give a left to right movement.
 *   This can be adjusted at different speeds and different rates.
 * * Shake effects can be used to make events appear shivering in place, either
 *   horizontally, vertically, or both.
 * * Events can change their size scaling to appear larger or smaller. This can
 *   be useful when creating giant races or miniature fairies.
 * * Breathing effects can be used to make events appear more bouncy than usual
 *   which is great for certain sprite types like slimes.
 * * Tints can be used to apply an overlay color on top of the existing color
 *   set the sprite has. This can be used for statues or petrification.
 * * Flashing can be made to occur immediately or in cycles. Flashing colors on
 *   an event can indicate various things from self-destruct sequences to
 *   possible evolution.
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
 * Effects List
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Breathing
 * 
 * Events with breathing effects will oscillate horizontally and/or vertically
 * in size. This can be applied to horizontal or vertical exclusively when
 * needed in that form.
 * 
 * Though this effect can look overdramatic for regular human sprites,
 * the effect works quite well for certain monster types including slimes,
 * worms, tentacles, etc.
 * 
 * ---
 * 
 * Flash Color
 * 
 * A designated color will flash on the target event. The flash will occur only
 * once and will fade to transparent over a period of time. However, when used
 * with a cycle, a new flash will be generated every cycle amount and the whole
 * color flashing will cycle through again.
 * 
 * This can be used for things like flashing computers, damaged targets,
 * certain monsters getting ready to evolve, you name it.
 * 
 * ---
 * 
 * Floating
 * 
 * Allows the character sprite to float above the ground. The character can
 * hover up and down while at it. If the character moves past a certain height,
 * the character will be deemed "Above Characters" visually to prevent clipping
 * although its movement priority system will still be the same.
 * 
 * The effect can be used for flying creatures like birds, bats, butterflies,
 * fairies, etc. This is best paired with the Sidestep effect to add in some
 * horizontal motion, too.
 * 
 * ---
 *
 * Hue
 * 
 * Adjusts the character sprite's hue property. When used, all of the sprite's
 * color will shift relative to the setting used. Used with a hue change per
 * frame effect and it will create a chromatic rainbow-like effect.
 * 
 * Hue changes to be used to apply slightly different appearances to many
 * events that use the same graphic. They can be off-color from one another and
 * have a bit of distinction.
 *
 * ---
 * 
 * Repeat Animations
 * 
 * Requires VisuMZ_0_CoreEngine! Allows for animations to be played repeatedly
 * on an event. Determine the cycle time for the repeated animation as well as
 * other properties like mirroring it or muting it.
 * 
 * ---
 * 
 * Scale
 * 
 * Changes the size of the character's sprite by a scaling factor. The sprite
 * will appear larger than normal. The horizontal and vertical scaling can be
 * adjusted independently of one another.
 * 
 * This effect can be used to depict different races of various sizes while
 * using repeated graphics. The race of Giants can use a larger scale and the
 * dwarves and halflings can use a smaller scale.
 * 
 * ---
 *
 * Shake
 * 
 * When given shake power, the sprite will move frantically horizontally,
 * and/or vertically. The settings can be made to apply horizontal movement
 * independent of vertical movement, too.
 * 
 * This effect can be used to make a character shiver, freak out, or even
 * cringe at the situation going on.
 *
 * ---
 *
 * Sidestep
 * 
 * Allows the character sprite to move left and/or right instead of being
 * aligned to the tile it's on. The character can constantly shift left and
 * right, too.
 * 
 * This effect can be used to apply to certain objects that aren't normally
 * stationary such as water-based plants. This effect is also useful for
 * hovering objects and entites such as birds, bats, butterflies, etc.
 *
 * ---
 * 
 * Tint Color
 * 
 * Applies a shade of color on top of the sprite's current color scheme. The
 * tint effect can be adjusted to fade towards the next color or the like.
 * 
 * This can be used to make statues by setting a gray-ish tint, making things
 * appear burnt with a reddish tint, covered in soot with a dark-ish tint, and
 * mossy with a dark green-ish tint.
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
 * === Breathing-Related Notetags ===
 * 
 * ---
 * 
 * <Breathing Rate: x%>
 *
 * <Breathing Rate X: x%>
 * <Breathing Rate Y: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the breathing rate of the sprite to the percentile amount.
 * - For <Breathing Rate: x%> variant: replace 'x' with a number representing
 *   the general breathing percentage to be used.
 * - For <Breathing Rate X: x%> variant: replace 'x' with a number representing
 *   the horizontal breathing percentage to be used.
 * - For <Breathing Rate Y: y%> variant: replace 'y' with a number representing
 *   the vertical breathing percentage to be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Breathing Speed: x>
 *
 * <Breathing Speed X: x>
 * <Breathing Speed Y: y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the breathing speed of the sprite.
 * - For <Breathing Speed: x%> variant: replace 'x' with a number representing
 *   the general breathing speed rate to be used.
 *   - For best results, use numbers between 0 and 1.
 * - For <Breathing Speed X: x%> variant: replace 'x' with a number
 *   representing the horizontal breathing speed rate to be used.
 *   - For best results, use numbers between 0 and 1.
 * - For <Breathing Speed Y: y%> variant: replace 'y' with a number
 *   representing the vertical breathing speed rate to be used.
 *   - For best results, use numbers between 0 and 1.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Breathing Random Offset>
 * 
 * <Breathing Random Offset X>
 * <Breathing Random Offset Y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event's breathing rate effect different from other events by
 *   having different starting points.
 *   - This effect does NOT work with <Breathing Static Offset: x> variants.
 * - For <Breathing Random Offset> variant, this will affect both breathing
 *   rates for horizontal and vertical directions.
 * - For <Breathing Random Offset X> variant, this will affect only breathing
 *   rates for the horizontal direction.
 * - For <Breathing Random Offset Y> variant, this will affect only breathing
 *   rates for the vertical direction.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Breathing Static Offset: x>
 * 
 * <Breathing Static Offset X: x>
 * <Breathing Static Offset Y: y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event's breathing rate starting count begin at 'x' and will
 *   share similar starting float height offsets with other events that use the
 *   same offset number.
 *   - This effect does NOT work with <Breathing Random Offset> variants.
 * - For <Breathing Static Offset: x> variant, replace 'x' with a number that
 *   adjusts the starting point for both horizontal and vertical breathing.
 * - For <Breathing Static Offset X: x> variant, replace 'x' with a number that
 *   adjusts the starting point for only horizontal breathing.
 * - For <Breathing Static Offset Y: y> variant, replace 'y' with a number that
 *   adjusts the starting point for only vertical breathing.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Flash-Related Notetags ===
 * 
 * ---
 *
 * <Flash Color: r, g, b, a>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Gives the event an effect that will periodically flash a custom color.
 * - Replace 'r' with a number representing the red color value (0 to 255).
 * - Replace 'g' with a number representing the green color value (0 to 255).
 * - Replace 'b' with a number representing the blue color value (0 to 255).
 * - Replace 'a' with a number representing the alpha value (0 to 255).
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * <Flash Duration: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the duration of the flash effect to 'x' frames.
 * - Replace 'x' with a number representing how long the flash lasts in frames.
 *   - 60 frames per second.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If this notetag is not used, use the default flash duration found within
 *   the Plugin Parameters.
 * 
 * ---
 * 
 * <Flash Cycle: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the cycle time of the flash effect to 'x' frames.
 * - Replace 'x' with a number representing how long the flash cycle begins
 *   anew again.
 *   - 60 frames per second.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 * - If this notetag is not used, use the default flash cycle found within
 *   the Plugin Parameters.
 * 
 * ---
 * 
 * === Floating-Related Notetags ===
 * 
 * ---
 *
 * <Float Height: x>
 * 
 * <Float Height: x to y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the event's float height to 'x' or hover between 'x' and 'y'.
 * - With the <Float Height: x> variant: replace 'x' with a number representing
 *   the pixels off the ground.
 * - With the <Float Height: x to y> variant, replace 'x' and 'y' with numbers
 *   representing what pixel heights to shift between.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Float Speed: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the event's float speed to 'x' for the hovering float effect.
 * - Replace 'x' with a number representing the speed at which the event floats
 *   between heights with.
 *   - For best results, use a number between 0 and 1.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Float Random Offset>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event's floating height effect different from other events by
 *   having different starting points.
 *   - This effect does NOT work with <Float Static Offset: x>.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Float Static Offset: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event's floating height starting count begin at 'x' and will
 *   share similar starting float height offsets with other events that use the
 *   same offset number.
 *   - This effect does NOT work with <Float Random Offset>.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Hue-Related Notetags ===
 * 
 * ---
 *
 * <Hue: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the event's hue color to 'x'.
 * - Replace 'x' with a number representing the hue shift.
 *   - For best results, use a number between 0 and 360.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Random Hue>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the event's hue color to a random amount between 0 and 360.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Random Hue: x to y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the event's hue color to a random amount between 'x' and 'y'.
 * - Replace 'x' and 'y' with numbers representing the hue shifts.
 *   - For best results, use numbers between 0 and 360.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Hue Per Frame: +x>
 * <Hue Per Frame: -x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - The event will constantly shift hue values by 'x' each frame.
 * - Replace 'x' with a number representing the hue shift.
 *   - For best results, use a number between 0 and 360.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Repeat Animation-Related Notetags ===
 * 
 * ---
 *
 * <Repeat Animation: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Plays animation 'x' on event over and over.
 * - Replace 'x' with a number representing the ID of the animation to be
 *   played on this event repeatedly.
 *   - Keep in mind that if an event changes pages to one that does not have an
 *     animation or if the event is erased, the animation will still have to
 *     finish up playing.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Repeat Animation Cycle: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the animation cycle used for repeated animations. Animations
 *   will be repeated every 'x' frames.
 * - Replace 'x' with a number representing the frame count between each
 *   animation playthrough. 60 frames = 1 second.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Repeat Animation Mirror: On>
 * <Repeat Animation Mirror: Off>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines if the repeating animation is mirrored or not.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Repeat Animation Mute: On>
 * <Repeat Animation Mute: Off>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines if the repeating animation is muted or not.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Scale-Related Notetags ===
 * 
 * ---
 * 
 * <Scale: x%>
 * 
 * <Scale X: x%>
 * <Scale Y: y%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the scale of the sprite to the designated size.
 * - For <Scale: x%> variant: replace 'x' with a number representing the
 *   scaling overall percentage to be used.
 * - For <Scale X: x%> variant, replace 'x' with a number representing the x
 *   factor for the horizontal scaling percentage to be used.
 * - For <Scale Y: y%> variant, replace 'y' with a number representing the y
 *   factor for the vertical scaling percentage to be used.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Shake-Related Notetags ===
 * 
 * ---
 *
 * <Shake Power: x>
 * 
 * <Shake Power X: x>
 * <Shake Power Y: y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the event's shaking to 'x' and/or 'y' power.
 * - For <Shake Power: x> variant: replace 'x' with a number representing the
 *   shake power used for both horizontal and vertical shaking.
 * - For <Shake Power X: x> variant: replace 'x' with a number representing the
 *   shake power used for only horizontal shaking.
 * - For <Shake Power Y: y> variant: replace 'y' with a number representing the
 *   shake power used for only vertical shaking.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Sidestepping-Related Notetags ===
 * 
 * ---
 *
 * <Sidestep: x>
 * 
 * <Sidestep: x to y>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the event's sidestep distance to 'x' or hover between 'x' and 'y'.
 * - With the <Sidestep: x> variant: replace 'x' with a number representing
 *   the pixels to the side.
 *   - Negative numbers go left. Positive numbers go right.
 * - With the <Sidestep: x to y> variant, replace 'x' and 'y' with numbers
 *   representing what pixel heights to shift between.
 *   - Negative numbers go left. Positive numbers go right.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sidestep Speed: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Sets the event's shifting speed to 'x' for the sidestepping effect.
 * - Replace 'x' with a number representing the speed at which the event will
 *   sidestep between.
 *   - For best results, use a number between 0 and 1.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sidestep Random Offset>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event's sidestepping effect different from other events by
 *   having different starting points.
 *   - This effect does NOT work with <Sidestep Static Offset: x>.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 *
 * <Sidestep Static Offset: x>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Makes the event's sidestepping distance starting count begin at 'x' and
 *   will share similar starting sidestep static offsets with other events that
 *   use the same offset number.
 *   - This effect does NOT work with <Sidestep Random Offset>.
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
 *
 * ---
 * 
 * === Tint-Related Notetags ===
 * 
 * ---
 *
 * <Tint Color: r, g, b, k>
 *
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Tints the event with a custom tone.
 * - Replace 'r' with a number representing the red tone value (-255 to 255).
 * - Replace 'g' with a number representing the green tone value (-255 to 255).
 * - Replace 'b' with a number representing the blue tone value (-255 to 255).
 * - Replace 'k' with a number representing the grey tone value (0 to 255).
 * - If this is placed in a notetag, the effect will be present across
 *   all event pages used.
 * - If this is placed inside a page's comment, the effect will only occur
 *   if that event page is currently active.
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
 * === Breathing-Related Plugin Commands ===
 * 
 * ---
 *
 * Breathing: Change for Event
 * - Changes target event's character's breathing.
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 *
 *   Breathing Rate X:
 *   - What is the breathing rate X in pixels?
 *   - For best results, use a number between 0 and 1.
 *
 *   Breathing Rate Y:
 *   - What is the breathing rate Y in pixels?
 *   - For best results, use a number between 0 and 1.
 *
 *   Breathing Speed X:
 *   - What is the speed X used for breathing?
 *   - For best results, use a number between 0 and 1.
 *
 *   Breathing Speed Y:
 *   - What is the speed Y used for breathing?
 *   - For best results, use a number between 0 and 1.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * Breathing: Change for Follower
 * - Changes target follower's character's breathing.
 *
 *   Follower ID:
 *   - Select which follower ID to change for.
 *   - Follower ID's start at 1.
 *
 *   Breathing Rate X:
 *   - What is the breathing rate X in pixels?
 *   - For best results, use a number between 0 and 1.
 *
 *   Breathing Rate Y:
 *   - What is the breathing rate Y in pixels?
 *   - For best results, use a number between 0 and 1.
 *
 *   Breathing Speed X:
 *   - What is the speed X used for breathing?
 *   - For best results, use a number between 0 and 1.
 *
 *   Breathing Speed Y:
 *   - What is the speed Y used for breathing?
 *   - For best results, use a number between 0 and 1.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * Breathing: Change for Player
 * - Changes player character's breathing.
 *
 *   Breathing Rate X:
 *   - What is the breathing rate X in pixels?
 *   - For best results, use a number between 0 and 1.
 *
 *   Breathing Rate Y:
 *   - What is the breathing rate Y in pixels?
 *   - For best results, use a number between 0 and 1.
 *
 *   Breathing Speed X:
 *   - What is the speed X used for breathing?
 *   - For best results, use a number between 0 and 1.
 *
 *   Breathing Speed Y:
 *   - What is the speed Y used for breathing?
 *   - For best results, use a number between 0 and 1.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 * 
 * === Flash-Related Plugin Commands ===
 * 
 * ---
 *
 * Flash: Change for Event
 * - Changes target event's character's flash color.
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 * 
 *   Flash Color:
 * 
 *     Red:
 *     Green:
 *     Blue:
 *     Alpha:
 *     - What is the flash value?
 *     - Use a number between 0 and 5.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * Flash: Change for Follower
 * - Changes target follower's character's flash color.
 *
 *   Follower ID:
 *   - Select which follower ID to change for.
 *   - Follower ID's start at 1.
 * 
 *   Flash Color:
 * 
 *     Red:
 *     Green:
 *     Blue:
 *     Alpha:
 *     - What is the flash value?
 *     - Use a number between 0 and 5.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * Flash: Change for Player
 * - Changes player character's flash color.
 * 
 *   Flash Color:
 * 
 *     Red:
 *     Green:
 *     Blue:
 *     Alpha:
 *     - What is the flash value?
 *     - Use a number between 0 and 5.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 * 
 * === Float-Related Plugin Commands ===
 * 
 * ---
 *
 * Float: Change for Event
 * - Changes target event's character's float height.
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 * 
 *   Minimum Float Height:
 *   - What is the minimum float height in pixels?
 * 
 *   Maximum Float Height:
 *   - What is the maximum float height in pixels?
 * 
 *   Float Speed:
 *   - What is the speed used for floating?
 *   - For best results, use a number between 0 and 1.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * Float: Change for Follower
 * - Changes target follower's character's float height.
 *
 *   Follower ID:
 *   - Select which follower ID to change for.
 *   - Follower ID's start at 1.
 * 
 *   Minimum Float Height:
 *   - What is the minimum float height in pixels?
 * 
 *   Maximum Float Height:
 *   - What is the maximum float height in pixels?
 * 
 *   Float Speed:
 *   - What is the speed used for floating?
 *   - For best results, use a number between 0 and 1.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * Float: Change for Player
 * - Changes player character's float height.
 * 
 *   Minimum Float Height:
 *   - What is the minimum float height in pixels?
 * 
 *   Maximum Float Height:
 *   - What is the maximum float height in pixels?
 * 
 *   Float Speed:
 *   - What is the speed used for floating?
 *   - For best results, use a number between 0 and 1.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 * 
 * === Hue-Related Plugin Commands ===
 * 
 * ---
 *
 * Hue: Change for Event
 * - Changes target event's character's hue.
 * 
 *   Hue:
 *   - Changes the sprite to use this hue.
 *   - Use a number between 0 and 360.
 *
 * ---
 *
 * Hue: Change for Follower
 * - Changes target follower's character's hue.
 * 
 *   Hue:
 *   - Changes the sprite to use this hue.
 *   - Use a number between 0 and 360.
 *
 * ---
 *
 * Hue: Change for Player
 * - Changes player character's hue.
 * 
 *   Hue:
 *   - Changes the sprite to use this hue.
 *   - Use a number between 0 and 360.
 *
 * ---
 * 
 * === Repeat Animation-Related Plugin Commands ===
 * 
 * ---
 * 
 * Repeat Animation: Change for Event
 * - Changes target event's character's Repeat Animation.
 * - Requires VisuMZ_0_CoreEngine!
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 * 
 *   Animation ID:
 *   - Repeat which animation?
 *   - Use 0 for no animation.
 * 
 *   Repeat Cycle:
 *   - How many frames to wait between each animation?
 *   - 60 frames = 1 second.
 * 
 *   Mirror Animation:
 *   - Mirror the repeat animation?
 * 
 *   Mute Animation:
 *   - Mute the repeat animation?
 * 
 * ---
 * 
 * Repeat Animation: Change for Follower
 * - Changes target follower's character's Repeat Animation.
 * - Requires VisuMZ_0_CoreEngine!
 *
 *   Follower ID:
 *   - Select which follower ID to change for.
 *   - Follower ID's start at 1.
 * 
 *   Animation ID:
 *   - Repeat which animation?
 *   - Use 0 for no animation.
 * 
 *   Repeat Cycle:
 *   - How many frames to wait between each animation?
 *   - 60 frames = 1 second.
 * 
 *   Mirror Animation:
 *   - Mirror the repeat animation?
 * 
 *   Mute Animation:
 *   - Mute the repeat animation?
 * 
 * ---
 * 
 * Repeat Animation: Change for Player
 * - Changes target player's character's Repeat Animation.
 * - Requires VisuMZ_0_CoreEngine!
 * 
 *   Animation ID:
 *   - Repeat which animation?
 *   - Use 0 for no animation.
 * 
 *   Repeat Cycle:
 *   - How many frames to wait between each animation?
 *   - 60 frames = 1 second.
 * 
 *   Mirror Animation:
 *   - Mirror the repeat animation?
 * 
 *   Mute Animation:
 *   - Mute the repeat animation?
 * 
 * ---
 * 
 * === Scale-Related Plugin Commands ===
 * 
 * ---
 *
 * Scale: Change for Event
 * - Changes target event's character's scale factor.
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 * 
 *   Scale X:
 *   Scale Y:
 *   - What is the target scale X/Y?
 *   - 0.00 - 0%, 0.50 - 50%, 1.00 - 100%, 1.50 - 150%
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * Scale: Change for Follower
 * - Changes target follower's character's scale factor.
 *
 *   Follower ID:
 *   - Select which follower ID to change for.
 *   - Follower ID's start at 1.
 * 
 *   Scale X:
 *   Scale Y:
 *   - What is the target scale X/Y?
 *   - 0.00 - 0%, 0.50 - 50%, 1.00 - 100%, 1.50 - 150%
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * Scale: Change for Player
 * - Changes player character's scale factor.
 * 
 *   Scale X:
 *   Scale Y:
 *   - What is the target scale X/Y?
 *   - 0.00 - 0%, 0.50 - 50%, 1.00 - 100%, 1.50 - 150%
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 * 
 * === Shake-Related Plugin Commands ===
 * 
 * ---
 *
 * Shake: Change for Event
 * - Changes target event's character's shaking.
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 * 
 *   Shake Power X:
 *   Shake Power Y:
 *   - Input the horizontal/vertical shaking power.
 *
 * ---
 *
 * Shake: Change for Follower
 * - Changes target follower's character's shaking.
 *
 *   Follower ID:
 *   - Select which follower ID to change for.
 *   - Follower ID's start at 1.
 * 
 *   Shake Power X:
 *   Shake Power Y:
 *   - Input the horizontal/vertical shaking power.
 *
 * ---
 *
 * Shake: Change for Player
 * - Changes player character's shaking.
 * 
 *   Shake Power X:
 *   Shake Power Y:
 *   - Input the horizontal/vertical shaking power.
 *
 * ---
 * 
 * === Sidestep-Related Plugin Commands ===
 * 
 * ---
 *
 * Sidestep: Change for Event
 * - Changes target event's character's sidestep distance.
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 * 
 *   Minimum Sidestep:
 *   - What is the minimum Sidestep distance in pixels?
 *   - Negative: Left; Positive: Right.
 * 
 *   Maximum Sidestep:
 *   - What is the maximum Sidestep distance in pixels?
 *   - Negative: Left; Positive: Right.
 * 
 *   Sidestep Speed:
 *   - What is the speed used for Sidesteping?
 *   - For best results, use a number between 0 and 1.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * Sidestep: Change for Follower
 * - Changes target follower's character's sidestep distance.
 *
 *   Follower ID:
 *   - Select which follower ID to change for.
 *   - Follower ID's start at 1.
 * 
 *   Minimum Sidestep:
 *   - What is the minimum Sidestep distance in pixels?
 *   - Negative: Left; Positive: Right.
 * 
 *   Maximum Sidestep:
 *   - What is the maximum Sidestep distance in pixels?
 *   - Negative: Left; Positive: Right.
 * 
 *   Sidestep Speed:
 *   - What is the speed used for Sidesteping?
 *   - For best results, use a number between 0 and 1.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * Sidestep: Change for Player
 * - Changes player character's sidestep distance.
 * 
 *   Minimum Sidestep:
 *   - What is the minimum Sidestep distance in pixels?
 *   - Negative: Left; Positive: Right.
 * 
 *   Maximum Sidestep:
 *   - What is the maximum Sidestep distance in pixels?
 *   - Negative: Left; Positive: Right.
 * 
 *   Sidestep Speed:
 *   - What is the speed used for Sidesteping?
 *   - For best results, use a number between 0 and 1.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 * 
 * === Tint-Related Plugin Commands ===
 * 
 * ---
 *
 * Tint: Change for Event
 * - Changes target event's character's tint color.
 *
 *   Event ID:
 *   - Insert the ID of the target event.
 *   - Use 0 for the current event.
 * 
 *   Color:
 * 
 *     Red:
 *     Green:
 *     Blue:
 *     Gray:
 *     - What is the tint color value?
 *     - For red, green, blue, use a number between -255 and 255.
 *     - For gray, use a number between 0 and 255.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * Tint: Change for Follower
 * - Changes target follower's character's tint color.
 *
 *   Follower ID:
 *   - Select which follower ID to change for.
 *   - Follower ID's start at 1.
 * 
 *   Color:
 * 
 *     Red:
 *     Green:
 *     Blue:
 *     Gray:
 *     - What is the tint color value?
 *     - For red, green, blue, use a number between -255 and 255.
 *     - For gray, use a number between 0 and 255.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * Tint: Change for Player
 * - Changes player character's tint color.
 * 
 *   Color:
 * 
 *     Red:
 *     Green:
 *     Blue:
 *     Gray:
 *     - What is the tint color value?
 *     - For red, green, blue, use a number between -255 and 255.
 *     - For gray, use a number between 0 and 255.
 *
 *   Duration:
 *   - The duration in frames for which this change takes place.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings used for this plugin. These are mostly
 * settings used to define the default values made for the plugin and there is
 * one visual effect that is applied globally.
 *
 * ---
 *
 * Defaults
 * 
 *   Breathing Speed X:
 *   Breathing Speed Y:
 *   - What is the default horizontal/vertical breating speed?
 *   - For best results, use a number between 0 and 1.
 * 
 *   Flash Duration:
 *   - What is the default frame duration for flashes?
 *   - 60 frames = 1 second.
 * 
 *   Flash Cycle:
 *   - What is the default frame cycle time for flashes?
 *   - 60 frames = 1 second.
 * 
 *   Float Speed:
 *   - What is the default floating speed?
 *   - For best results, use a number between 0 and 1.
 * 
 *   Repeat Animation Cycle:
 *   - How many frames to wait between each animation?
 *   - 60 frames = 1 second.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *     Mirror Animation:
 *     - Mirror the repeat animation?
 *     - Requires VisuMZ_0_CoreEngine.
 * 
 *     Mute Animation:
 *     - Mute the repeat animation?
 *     - Requires VisuMZ_0_CoreEngine.
 * 
 *   Sidestep Speed:
 *   - What is the default sidestep speed?
 *   - For best results, use a number between 0 and 1.
 *
 * ---
 *
 * Settings
 * 
 *   Float Change Z:
 *   - Past what height does the event change Z layers?
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
 * Version 1.03: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a bug where loading a save from a state before the installation of
 *    this plugin would result in invisible players and followers. Fix made
 *    by Arisu.
 * 
 * Version 1.02: April 18, 2024
 * * Compatibility Update!
 * ** Fixed a bug where the incorrect plugin order with Unique Tile Effects
 *    would block the pitfall effect. Fix made by Arisu.
 * 
 * Version 1.01: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug with the <Sidestep: x to y> notetag not working properly.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Added new section in "Effects List" for Repeat Animations.
 * *** Requires VisuMZ_0_CoreEngine! Allows for animations to be played
 *     repeatedly on an event. Determine the cycle time for the repeated
 *     animation as well as other properties like mirroring it or muting it.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags added by Irina and sponsored by Archeia:
 * *** <Repeat Animation: x>
 * *** <Repeat Animation Cycle: x>
 * *** <Repeat Animation Mirror: on/off>
 * *** <Repeat Animation Mute: on/off>
 * **** Refer to help file for more information.
 * ** New Plugin Commands added by Irina and sponsored by Archeia:
 * *** Repeat Animation: Change for Event
 * *** Repeat Animation: Change for Follower
 * *** Repeat Animation: Change for Player
 * ** New Plugin Parameters added by Irina and sponsored by Archeia:
 * *** Default > Repeat Animation Cycle
 * *** Default > Mirror Animation
 * *** Default > Mute Animation
 * 
 * Version 1.00 Official Release Date: July 24, 2023
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
 * @command Breathing_ChangeFor_Event
 * @text Breathing: Change for Event
 * @desc Changes target event's character's breathing.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 *
 * @arg BreathingRateX:eval
 * @text Breathing Rate X
 * @desc What is the breathing rate X in pixels?
 * For best results, use a number between 0 and 1.
 * @default 0.00
 *
 * @arg BreathingRateY:eval
 * @text Breathing Rate Y
 * @desc What is the breathing rate Y in pixels?
 * For best results, use a number between 0 and 1.
 * @default 0.00
 *
 * @arg BreathingSpeedX:eval
 * @text Breathing Speed X
 * @desc What is the speed X used for breathing?
 * For best results, use a number between 0 and 1.
 * @default 0.08
 *
 * @arg BreathingSpeedY:eval
 * @text Breathing Speed Y
 * @desc What is the speed Y used for breathing?
 * For best results, use a number between 0 and 1.
 * @default 0.08
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Breathing_ChangeFor_Follower
 * @text Breathing: Change for Follower
 * @desc Changes target follower's character's breathing.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to change for.
 * Follower ID's start at 1.
 * @default 1
 *
 * @arg BreathingRateX:eval
 * @text Breathing Rate X
 * @desc What is the breathing rate X in pixels?
 * For best results, use a number between 0 and 1.
 * @default 0.00
 *
 * @arg BreathingRateY:eval
 * @text Breathing Rate Y
 * @desc What is the breathing rate Y in pixels?
 * For best results, use a number between 0 and 1.
 * @default 0.00
 *
 * @arg BreathingSpeedX:eval
 * @text Breathing Speed X
 * @desc What is the speed X used for breathing?
 * For best results, use a number between 0 and 1.
 * @default 0.08
 *
 * @arg BreathingSpeedY:eval
 * @text Breathing Speed Y
 * @desc What is the speed Y used for breathing?
 * For best results, use a number between 0 and 1.
 * @default 0.08
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Breathing_ChangeFor_Player
 * @text Breathing: Change for Player
 * @desc Changes player character's breathing.
 *
 * @arg BreathingRateX:eval
 * @text Breathing Rate X
 * @desc What is the breathing rate X in pixels?
 * For best results, use a number between 0 and 1.
 * @default 0.00
 *
 * @arg BreathingRateY:eval
 * @text Breathing Rate Y
 * @desc What is the breathing rate Y in pixels?
 * For best results, use a number between 0 and 1.
 * @default 0.00
 *
 * @arg BreathingSpeedX:eval
 * @text Breathing Speed X
 * @desc What is the speed X used for breathing?
 * For best results, use a number between 0 and 1.
 * @default 0.08
 *
 * @arg BreathingSpeedY:eval
 * @text Breathing Speed Y
 * @desc What is the speed Y used for breathing?
 * For best results, use a number between 0 and 1.
 * @default 0.08
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Flash
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Flash_ChangeFor_Event
 * @text Flash: Change for Event
 * @desc Changes target event's character's flash color.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 * 
 * @arg Color
 * @text Flash Color
 *
 * @arg ColorRed:eval
 * @text Red
 * @parent Color
 * @desc What is the red flash value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg ColorGreen:eval
 * @text Green
 * @parent Color
 * @desc What is the green flash value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg ColorBlue:eval
 * @text Blue
 * @parent Color
 * @desc What is the blue flash value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg ColorAlpha:eval
 * @text Alpha
 * @parent Color
 * @desc What is the gray flash value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @arg Cycle:eval
 * @text Cycle
 * @desc The cycle in frames for which this resets and starts over.
 * Use 0 to not cycle.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Flash_ChangeFor_Follower
 * @text Flash: Change for Follower
 * @desc Changes target follower's character's flash color.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to change for.
 * Follower ID's start at 1.
 * @default 1
 * 
 * @arg Color
 * @text Flash Color
 *
 * @arg ColorRed:eval
 * @text Red
 * @parent Color
 * @desc What is the red flash value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg ColorGreen:eval
 * @text Green
 * @parent Color
 * @desc What is the green flash value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg ColorBlue:eval
 * @text Blue
 * @parent Color
 * @desc What is the blue flash value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg ColorAlpha:eval
 * @text Alpha
 * @parent Color
 * @desc What is the gray flash value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @arg Cycle:eval
 * @text Cycle
 * @desc The cycle in frames for which this resets and starts over.
 * Use 0 to not cycle.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Flash_ChangeFor_Player
 * @text Flash: Change for Player
 * @desc Changes player character's flash color.
 * 
 * @arg Color
 * @text Flash Color
 *
 * @arg ColorRed:eval
 * @text Red
 * @parent Color
 * @desc What is the red flash value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg ColorGreen:eval
 * @text Green
 * @parent Color
 * @desc What is the green flash value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg ColorBlue:eval
 * @text Blue
 * @parent Color
 * @desc What is the blue flash value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg ColorAlpha:eval
 * @text Alpha
 * @parent Color
 * @desc What is the gray flash value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @arg Cycle:eval
 * @text Cycle
 * @desc The cycle in frames for which this resets and starts over.
 * Use 0 to not cycle.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Float
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Float_ChangeFor_Event
 * @text Float: Change for Event
 * @desc Changes target event's character's float height.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 *
 * @arg FloatMin:eval
 * @text Minimum Float Height
 * @desc What is the minimum float height in pixels?
 * @default 0
 *
 * @arg FloatMax:eval
 * @text Maximum Float Height
 * @desc What is the maximum float height in pixels?
 * @default 0
 *
 * @arg FloatSpeed:eval
 * @text Float Speed
 * @desc What is the speed used for floating?
 * For best results, use a number between 0 and 1.
 * @default 0.04
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Float_ChangeFor_Follower
 * @text Float: Change for Follower
 * @desc Changes target follower's character's float height.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to change for.
 * Follower ID's start at 1.
 * @default 1
 *
 * @arg FloatMin:eval
 * @text Minimum Float Height
 * @desc What is the minimum float height in pixels?
 * @default 0
 *
 * @arg FloatMax:eval
 * @text Maximum Float Height
 * @desc What is the maximum float height in pixels?
 * @default 0
 *
 * @arg FloatSpeed:eval
 * @text Float Speed
 * @desc What is the speed used for floating?
 * For best results, use a number between 0 and 1.
 * @default 0.04
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Float_ChangeFor_Player
 * @text Float: Change for Player
 * @desc Changes player character's float height.
 *
 * @arg FloatMin:eval
 * @text Minimum Float Height
 * @desc What is the minimum float height in pixels?
 * @default 0
 *
 * @arg FloatMax:eval
 * @text Maximum Float Height
 * @desc What is the maximum float height in pixels?
 * @default 0
 *
 * @arg FloatSpeed:eval
 * @text Float Speed
 * @desc What is the speed used for floating?
 * For best results, use a number between 0 and 1.
 * @default 0.04
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Hue
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hue_ChangeFor_Event
 * @text Hue: Change for Event
 * @desc Changes target event's character's hue.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 *
 * @arg Hue:eval
 * @text Hue
 * @desc Changes the sprite to use this hue.
 * Use a number between 0 and 360.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hue_ChangeFor_Follower
 * @text Hue: Change for Follower
 * @desc Changes target follower's character's hue.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to change for.
 * Follower ID's start at 1.
 * @default 1
 *
 * @arg Hue:eval
 * @text Hue
 * @desc Changes the sprite to use this hue.
 * Use a number between 0 and 360.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Hue_ChangeFor_Player
 * @text Hue: Change for Player
 * @desc Changes player character's hue.
 *
 * @arg Hue:eval
 * @text Hue
 * @desc Changes the sprite to use this hue.
 * Use a number between 0 and 360.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_RepeatAni
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RepeatAni_ChangeFor_Event
 * @text Repeat Animation: Change for Event
 * @desc Changes target event's character's Repeat Animation.
 * Requires VisuMZ_0_CoreEngine!
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @type animation
 * @desc Repeat which animation?
 * Use 0 for no animation.
 * @default 0
 *
 * @arg RepeatCycle:eval
 * @text Repeat Cycle
 * @desc How many frames to wait between each animation?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Mirror:eval
 * @text Mirror Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the repeat animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the repeat animation?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RepeatAni_ChangeFor_Follower
 * @text Repeat Animation: Change for Follower
 * @desc Changes target follower's character's Repeat Animation.
 * Requires VisuMZ_0_CoreEngine!
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to change for.
 * Follower ID's start at 1.
 * @default 1
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @type animation
 * @desc Repeat which animation?
 * Use 0 for no animation.
 * @default 0
 *
 * @arg RepeatCycle:eval
 * @text Repeat Cycle
 * @desc How many frames to wait between each animation?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Mirror:eval
 * @text Mirror Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the repeat animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the repeat animation?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RepeatAni_ChangeFor_Player
 * @text Repeat Animation: Change for Player
 * @desc Changes player character's Repeat Animation.
 * Requires VisuMZ_0_CoreEngine!
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @type animation
 * @desc Repeat which animation?
 * Use 0 for no animation.
 * @default 0
 *
 * @arg RepeatCycle:eval
 * @text Repeat Cycle
 * @desc How many frames to wait between each animation?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg Mirror:eval
 * @text Mirror Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the repeat animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the repeat animation?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Scale
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Scale_ChangeFor_Event
 * @text Scale: Change for Event
 * @desc Changes target event's character's scale factor.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @desc What is the target scale X?
 * 0.00 - 0%, 0.50 - 50%, 1.00 - 100%, 1.50 - 150%
 * @default 1.00
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @desc What is the target scale Y?
 * 0.00 - 0%, 0.50 - 50%, 1.00 - 100%, 1.50 - 150%
 * @default 1.00
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Scale_ChangeFor_Follower
 * @text Scale: Change for Follower
 * @desc Changes target follower's character's scale factor.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to change for.
 * Follower ID's start at 1.
 * @default 1
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @desc What is the target scale X?
 * @default 0
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @desc What is the target scale Y?
 * @default 0
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Scale_ChangeFor_Player
 * @text Scale: Change for Player
 * @desc Changes player character's scale factor.
 *
 * @arg ScaleX:eval
 * @text Scale X
 * @desc What is the target scale X?
 * @default 0
 *
 * @arg ScaleY:eval
 * @text Scale Y
 * @desc What is the target scale Y?
 * @default 0
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shake
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Shake_ChangeFor_Event
 * @text Shake: Change for Event
 * @desc Changes target event's character's shaking.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 *
 * @arg ShakeX:eval
 * @text Shake Power X
 * @desc Input the horizontal shaking power.
 * @default 0
 *
 * @arg ShakeY:eval
 * @text Shake Power Y
 * @desc Input the vertical shaking power.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Shake_ChangeFor_Follower
 * @text Shake: Change for Follower
 * @desc Changes target follower's character's shaking.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to change for.
 * Follower ID's start at 1.
 * @default 1
 *
 * @arg ShakeX:eval
 * @text Shake Power X
 * @desc Input the horizontal shaking power.
 * @default 0
 *
 * @arg ShakeY:eval
 * @text Shake Power Y
 * @desc Input the vertical shaking power.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Shake_ChangeFor_Player
 * @text Shake: Change for Player
 * @desc Changes player character's hue.
 *
 * @arg ShakeX:eval
 * @text Shake Power X
 * @desc Input the horizontal shaking power.
 * @default 0
 *
 * @arg ShakeY:eval
 * @text Shake Power Y
 * @desc Input the vertical shaking power.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Sidestep
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Sidestep_ChangeFor_Event
 * @text Sidestep: Change for Event
 * @desc Changes target event's character's Sidestep distance.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 *
 * @arg SidestepMin:eval
 * @text Minimum Sidestep
 * @desc What is the minimum Sidestep distance in pixels?
 * Negative: Left; Positive: Right.
 * @default +0
 *
 * @arg SidestepMax:eval
 * @text Maximum Sidestep
 * @desc What is the maximum Sidestep distance in pixels?
 * Negative: Left; Positive: Right.
 * @default +0
 *
 * @arg SidestepSpeed:eval
 * @text Sidestep Speed
 * @desc What is the speed used for Sidesteping?
 * For best results, use a number between 0 and 1.
 * @default 0.04
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Sidestep_ChangeFor_Follower
 * @text Sidestep: Change for Follower
 * @desc Changes target follower's character's Sidestep distance.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to change for.
 * Follower ID's start at 1.
 * @default 1
 *
 * @arg SidestepMin:eval
 * @text Minimum Sidestep
 * @desc What is the minimum Sidestep distance in pixels?
 * Negative: Left; Positive: Right.
 * @default +0
 *
 * @arg SidestepMax:eval
 * @text Maximum Sidestep
 * @desc What is the maximum Sidestep distance in pixels?
 * Negative: Left; Positive: Right.
 * @default +0
 *
 * @arg SidestepSpeed:eval
 * @text Sidestep Speed
 * @desc What is the speed used for Sidesteping?
 * For best results, use a number between 0 and 1.
 * @default 0.04
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Sidestep_ChangeFor_Player
 * @text Sidestep: Change for Player
 * @desc Changes player character's Sidestep distance.
 *
 * @arg SidestepMin:eval
 * @text Minimum Sidestep
 * @desc What is the minimum Sidestep distance in pixels?
 * Negative: Left; Positive: Right.
 * @default +0
 *
 * @arg SidestepMax:eval
 * @text Maximum Sidestep
 * @desc What is the maximum Sidestep distance in pixels?
 * Negative: Left; Positive: Right.
 * @default +0
 *
 * @arg SidestepSpeed:eval
 * @text Sidestep Speed
 * @desc What is the speed used for Sidesteping?
 * For best results, use a number between 0 and 1.
 * @default 0.04
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Tint
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Tint_ChangeFor_Event
 * @text Tint: Change for Event
 * @desc Changes target event's character's tint color.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the target event.
 * Use 0 for the current event.
 * @default 0
 * 
 * @arg Color
 * @text Tint Color
 *
 * @arg ColorRed:eval
 * @text Red
 * @parent Color
 * @desc What is the red tint value?
 * Use a number between -255 and 255.
 * @default 0
 *
 * @arg ColorGreen:eval
 * @text Green
 * @parent Color
 * @desc What is the green tint value?
 * Use a number between -255 and 255.
 * @default 0
 *
 * @arg ColorBlue:eval
 * @text Blue
 * @parent Color
 * @desc What is the blue tint value?
 * Use a number between -255 and 255.
 * @default 0
 *
 * @arg ColorGray:eval
 * @text Gray
 * @parent Color
 * @desc What is the gray tint value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Tint_ChangeFor_Follower
 * @text Tint: Change for Follower
 * @desc Changes target follower's character's tint color.
 *
 * @arg FollowerID:eval
 * @text Follower ID
 * @desc Select which follower ID to change for.
 * Follower ID's start at 1.
 * @default 1
 * 
 * @arg Color
 * @text Tint Color
 *
 * @arg ColorRed:eval
 * @text Red
 * @parent Color
 * @desc What is the red tint value?
 * Use a number between -255 and 255.
 * @default 0
 *
 * @arg ColorGreen:eval
 * @text Green
 * @parent Color
 * @desc What is the green tint value?
 * Use a number between -255 and 255.
 * @default 0
 *
 * @arg ColorBlue:eval
 * @text Blue
 * @parent Color
 * @desc What is the blue tint value?
 * Use a number between -255 and 255.
 * @default 0
 *
 * @arg ColorGray:eval
 * @text Gray
 * @parent Color
 * @desc What is the gray tint value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Tint_ChangeFor_Player
 * @text Tint: Change for Player
 * @desc Changes player character's tint color.
 * 
 * @arg Color
 * @text Tint Color
 *
 * @arg ColorRed:eval
 * @text Red
 * @parent Color
 * @desc What is the red tint value?
 * Use a number between -255 and 255.
 * @default 0
 *
 * @arg ColorGreen:eval
 * @text Green
 * @parent Color
 * @desc What is the green tint value?
 * Use a number between -255 and 255.
 * @default 0
 *
 * @arg ColorBlue:eval
 * @text Blue
 * @parent Color
 * @desc What is the blue tint value?
 * Use a number between -255 and 255.
 * @default 0
 *
 * @arg ColorGray:eval
 * @text Gray
 * @parent Color
 * @desc What is the gray tint value?
 * Use a number between 0 and 255.
 * @default 0
 *
 * @arg Duration:eval
 * @text Duration
 * @desc The duration in frames for which this change takes place.
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
 * @param MapEventEffects
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
 * @param breathingSpeedX:num
 * @text Breathing Speed X
 * @parent Defaults
 * @desc What is the default horizontal breating speed?
 * For best results, use a number between 0 and 1.
 * @default 0.08
 * 
 * @param breathingSpeedY:num
 * @text Breathing Speed Y
 * @parent Defaults
 * @desc What is the default vertical breating speed?
 * For best results, use a number between 0 and 1.
 * @default 0.08
 * 
 * @param flashDuration:num
 * @text Flash Duration
 * @parent Defaults
 * @desc What is the default frame duration for flashes?
 * 60 frames = 1 second.
 * @default 20
 * 
 * @param flashCycle:num
 * @text Flash Cycle
 * @parent Defaults
 * @desc What is the default frame cycle time for flashes?
 * 60 frames = 1 second.
 * @default 60
 * 
 * @param floatSpeed:num
 * @text Float Speed
 * @parent Defaults
 * @desc What is the default floating speed?
 * For best results, use a number between 0 and 1.
 * @default 0.04
 * 
 * @param repeatAniCycle:num
 * @text Repeat Animation Cycle
 * @parent Defaults
 * @desc How many frames to wait between each animation?
 * Requires VisuMZ_0_CoreEngine. 60 frames = 1 second.
 * @default 60
 *
 * @param repeatAniMirror:eval
 * @text Mirror Animation
 * @parent repeatAniCycle:num
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the repeat animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param repeatAniMute:eval
 * @text Mute Animation
 * @parent repeatAniCycle:num
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the repeat animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default true
 * 
 * @param sidestepSpeed:num
 * @text Sidestep Speed
 * @parent Defaults
 * @desc What is the default sidestep speed?
 * For best results, use a number between 0 and 1.
 * @default 0.04
 * 
 * @param Settings
 * 
 * @param floatHeightChangeZ:num
 * @text Float Change Z
 * @parent Settings
 * @desc Past what height does the event change Z layers?
 * @default 42
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

const _0x91b26b=_0x5e41;function _0x195a(){const _0x10438c=['ColorRed','Flash_ChangeFor_Follower','UuCdx','setHue','list','Game_Interpreter_PluginCommand','_scaleBaseDuration','BreathRateY','ConvertParams','lYyXZ','Sprite_Character_update','startMapEventTintChange','ARRAYNUM','updateMapEventFlash','_floatHeight','updateMapEventFloatHeight','mute','LtHVg','RepeatAniMirrorOff','MapEventEffects','setupMapEventEffectsEffects','Flash_ChangeFor_Player','671496VlRtyo','_floatSpeed','ScaleY','FloatStaticOffset','Float','_sidestep','updateMapEventEffects','SidestepRandomOffset','IXTsc','Mirror','Breathing_ChangeFor_Follower','PrSgS','BreathRandomX','_floatChangeDuration','update','_breathingRateX','updateMapEventFloatChange','_shakePowerY','cycle','5nJLNEG','ColorGreen','_floatChangeSpeedTarget','FiOkt','FlashDuration','default','nNSWa','ShakePower','command357','oOIph','SidestepBetween','_breathingChangeDuration','followers','_hueUpdatePerFrame','_lastPluginCommandInterpreter','round','_flashCycle','_data','_floatHeightMin','FloatSpeed','constructor','setupPageSettings','Shake_ChangeFor_Event','Sprite_Character_updateOther','startMapEventFloatChange','FErLz','in\x20order\x20for\x20VisuMZ_4_MapEventEffects\x20to\x20work.','refreshBushDepth','VtpcN','processMapEventRepeatAnimation','Flash_ChangeFor_Event','PhsSU','BreathSpeedY','_sidestepChangeDuration','_breathingX','match','Float_ChangeFor_Event','FloatTo','QyrAY','_tintTarget','updateMapEventSidestep','Hue_ChangeFor_Follower','_floatChangeMinTarget','Game_CharacterBase_update','Settings','scale','Sidestep_ChangeFor_Follower','EventsMoveCore','_floatHeightMax','eventId','vlFbL','randomInt','_repeatAnimation','ARRAYFUNC','EVAL','min','VisuMZ_1_EventsMoveCore','1276354gMtVBj','updateScaleBaseChanges','BreathStaticY','_sidestepRng','setColorTone','mVXLB','_sidestepChangeSpeedTarget','prototype','_erased','_scaleX','_character','Mute','RepeatAniCycle','startMapEventSidestepChange','screenX','Game_CharacterBase_refreshBushDepth','breathingSpeedY','258408MBinQh','startMapEventFlashChange','KKAMM','tCPSy','HueRandomBetween','BreathingRateX','repeatAniMirror','setBlendColor','BreathingSpeedX','jumpHeight','FloatRandomOffset','FlashCycle','Cycle','ColorBlue','Tint_ChangeFor_Player','updateMapEventFlashChange','_breathingSpeedY','BSnsA','_scaleBaseX','uabUt','clearPageSettings','BreathRandomBoth','_breathingY','Sidestep_ChangeFor_Event','3CMRuKf','Shake_ChangeFor_Player','Hue_ChangeFor_Player','ARRAYJSON','ShakeX','_scaleBaseY','NUM','mirror','setupMapEventEffectsCommentTags','parameters','_flashWholeDuration','ShakePowerY','_breathingRngX','_breathingChangeSpeedX','frameCount','applyBreathingCalculations','updateMapEventHue','setupMapEventEffectsNotetags','_breathingChangeTargetX','ScaleBaseX','breathingSpeedX','onAfterLoad','status','BreathRateBoth','screenZ','_breathingChangeSpeedY','ARRAYSTRUCT','exit','flashDuration','PirSs','_flashDuration','startMapEventBreathingChange','updateMapEventTintChange','JNYDR','sidestepX','_hue','STRUCT','_sidestepMax','GtzHm','ScaleBaseBoth','FloatMax','2186356DgajVc','Game_Event_clearPageSettings','startMapEventScaleChange','random','shakePowerX','floatSpeed','HsXCC','clone','dCizg','trim','_scaleBaseTargetX','cos','_sidestepChangeMinTarget','RepeatAniMirrorOn','NZfKc','Game_CharacterBase_jumpHeight','abs','_tintDuration','updateScaleBase','1887459FCecQh','FollowerID','RepeatAni_ChangeFor_Player','applyScaleBaseValues','slice','RepeatAniMuteOff','BreathRateX','_sidestepMin','mapEventEffectsPreventBushDepth','DqVCo','updateOther','code','QDrxJ','RepeatAniMuteOn','checkMapEventEffectsStringTags','shakePowerY','MAP_EVENT_EFFECTS','Float_ChangeFor_Player','_sidestepSpeed','_shakePowerX','_scaleBaseTargetY','flashCycle','ifAlx','_bushDepth','SidestepStatic','isInstanceOfSceneMap','_lastShakeX','ColorGray','filter','BreathSpeedBoth','_breathingRateY','AnimationID','lEUtR','AKHTD','RepeatAni_ChangeFor_Event','version','follower','exYbs','Shake_ChangeFor_Follower','_breathingChangeTargetY','parse','SidestepSpeed','_floatChangeMaxTarget','_scaleY','_scene','split','_sidestepChangeMaxTarget','call','Sidestep_ChangeFor_Player','format','initMapEventEffectsEffects','oSzcC','ARRAYEVAL','floatHeightChangeZ','max','RepeatCycle','RegExp','includes','_breathingSpeedX','Game_CharacterBase_initMembers','_lastShakeGraphicsCountX','updateMapEventSidestepDistance','Duration','BreathStaticX','updateMapEventRepeatAnimation','repeatAniCycle','EventID','initMembers','FloatMin','kOfom','LkNbN','BreathingRateY','KUFOc','rkqMH','updateMapEventFlashCycle','Game_Event_setupPageSettings','_breathingRngY','_flashStart','event','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','updateMapEventSidestepChange','EjuPw','SidestepMax','repeatAniMute','description','Game_CharacterBase_screenX','_flashCurrent','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','ColorAlpha','VisuMZ_0_CoreEngine','setLastPluginCommandInterpreter','724131iaBgSf','zQJnm','map','FpCui','checkNeedInitMapEventEffectsEffects','Hue','ARRAYSTR','26912750MBiNvr','bwExW','toUpperCase','AngBY','getLastPluginCommandInterpreter','registerCommand','_lastHue','NOdoe','_floatRng','Scale_ChangeFor_Follower','HueRandom','return\x200','_tintCurrent','RepeatAni_ChangeFor_Follower','name','24lcqAAJ','changeMapEventRepeatAnimation','BreathRandomY','updateMapEventTint','Game_System_onAfterLoad','sidestepSpeed','updateMapEventFlashColor','BreathingSpeedY','clamp','applyBreathingScaleValues','JSON','updateBreathingChanges','updateMapEventFloat','updateMapEventHueChange','SidestepMin','ScaleX'];_0x195a=function(){return _0x10438c;};return _0x195a();}(function(_0x2e7cdb,_0x30b1ec){const _0x58be68=_0x5e41,_0x100d70=_0x2e7cdb();while(!![]){try{const _0x5143c9=-parseInt(_0x58be68(0x25d))/0x1+-parseInt(_0x58be68(0x24c))/0x2+-parseInt(_0x58be68(0x12d))/0x3*(parseInt(_0x58be68(0x156))/0x4)+parseInt(_0x58be68(0x213))/0x5*(-parseInt(_0x58be68(0x200))/0x6)+parseInt(_0x58be68(0x169))/0x7*(-parseInt(_0x58be68(0x1da))/0x8)+parseInt(_0x58be68(0x1c4))/0x9+parseInt(_0x58be68(0x1cb))/0xa;if(_0x5143c9===_0x30b1ec)break;else _0x100d70['push'](_0x100d70['shift']());}catch(_0x3456ed){_0x100d70['push'](_0x100d70['shift']());}}}(_0x195a,0x638b5));var label=_0x91b26b(0x1fd),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x91b26b(0x185)](function(_0x589b31){const _0x4a48be=_0x91b26b;return _0x589b31[_0x4a48be(0x143)]&&_0x589b31[_0x4a48be(0x1bd)][_0x4a48be(0x1a2)]('['+label+']');})[0x0];VisuMZ[label][_0x91b26b(0x23f)]=VisuMZ[label][_0x91b26b(0x23f)]||{},VisuMZ[_0x91b26b(0x1f2)]=function(_0x5a0d31,_0x449d65){const _0x2a565c=_0x91b26b;for(const _0x38b6a9 in _0x449d65){if(_0x38b6a9[_0x2a565c(0x236)](/(.*):(.*)/i)){const _0x4bdc72=String(RegExp['$1']),_0x29e43d=String(RegExp['$2'])[_0x2a565c(0x1cd)]()[_0x2a565c(0x15f)]();let _0x1660a2,_0xe37f94,_0x5a6951;switch(_0x29e43d){case _0x2a565c(0x133):_0x1660a2=_0x449d65[_0x38b6a9]!==''?Number(_0x449d65[_0x38b6a9]):0x0;break;case _0x2a565c(0x1f6):_0xe37f94=_0x449d65[_0x38b6a9]!==''?JSON['parse'](_0x449d65[_0x38b6a9]):[],_0x1660a2=_0xe37f94[_0x2a565c(0x1c6)](_0x349df8=>Number(_0x349df8));break;case _0x2a565c(0x249):_0x1660a2=_0x449d65[_0x38b6a9]!==''?eval(_0x449d65[_0x38b6a9]):null;break;case _0x2a565c(0x19d):_0xe37f94=_0x449d65[_0x38b6a9]!==''?JSON[_0x2a565c(0x191)](_0x449d65[_0x38b6a9]):[],_0x1660a2=_0xe37f94[_0x2a565c(0x1c6)](_0x2d0f46=>eval(_0x2d0f46));break;case _0x2a565c(0x1e4):_0x1660a2=_0x449d65[_0x38b6a9]!==''?JSON['parse'](_0x449d65[_0x38b6a9]):'';break;case _0x2a565c(0x130):_0xe37f94=_0x449d65[_0x38b6a9]!==''?JSON['parse'](_0x449d65[_0x38b6a9]):[],_0x1660a2=_0xe37f94[_0x2a565c(0x1c6)](_0xf48a14=>JSON[_0x2a565c(0x191)](_0xf48a14));break;case'FUNC':_0x1660a2=_0x449d65[_0x38b6a9]!==''?new Function(JSON[_0x2a565c(0x191)](_0x449d65[_0x38b6a9])):new Function(_0x2a565c(0x1d6));break;case _0x2a565c(0x248):_0xe37f94=_0x449d65[_0x38b6a9]!==''?JSON[_0x2a565c(0x191)](_0x449d65[_0x38b6a9]):[],_0x1660a2=_0xe37f94[_0x2a565c(0x1c6)](_0x422931=>new Function(JSON[_0x2a565c(0x191)](_0x422931)));break;case'STR':_0x1660a2=_0x449d65[_0x38b6a9]!==''?String(_0x449d65[_0x38b6a9]):'';break;case _0x2a565c(0x1ca):_0xe37f94=_0x449d65[_0x38b6a9]!==''?JSON[_0x2a565c(0x191)](_0x449d65[_0x38b6a9]):[],_0x1660a2=_0xe37f94[_0x2a565c(0x1c6)](_0x12fc5d=>String(_0x12fc5d));break;case _0x2a565c(0x151):_0x5a6951=_0x449d65[_0x38b6a9]!==''?JSON['parse'](_0x449d65[_0x38b6a9]):{},_0x1660a2=VisuMZ[_0x2a565c(0x1f2)]({},_0x5a6951);break;case _0x2a565c(0x147):_0xe37f94=_0x449d65[_0x38b6a9]!==''?JSON['parse'](_0x449d65[_0x38b6a9]):[],_0x1660a2=_0xe37f94[_0x2a565c(0x1c6)](_0x149942=>VisuMZ[_0x2a565c(0x1f2)]({},JSON[_0x2a565c(0x191)](_0x149942)));break;default:continue;}_0x5a0d31[_0x4bdc72]=_0x1660a2;}}return _0x5a0d31;},(_0x329fa2=>{const _0x52f12d=_0x91b26b,_0x204044=_0x329fa2[_0x52f12d(0x1d9)];for(const _0x4e35b9 of dependencies){if(_0x52f12d(0x239)==='QyrAY'){if(!Imported[_0x4e35b9]){if(_0x52f12d(0x232)!==_0x52f12d(0x245)){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x52f12d(0x19a)](_0x204044,_0x4e35b9)),SceneManager[_0x52f12d(0x148)]();break;}else{if(!_0x4e9f30[_0x52f12d(0x182)]())return;_0x139e55[_0x52f12d(0x1f2)](_0x51ea30,_0x2535d4);const _0x79cc99=(_0x345b48['FollowerID']||0x0)-0x1,_0x7c2656=_0x6d1aff['followers']()['follower'](_0x79cc99);if(!_0x7c2656)return;const _0x418ee4=[(_0x305447[_0x52f12d(0x1ea)]||0x0)[_0x52f12d(0x1e2)](0x0,0xff),(_0x230c63[_0x52f12d(0x214)]||0x0)[_0x52f12d(0x1e2)](0x0,0xff),(_0x41f75c['ColorBlue']||0x0)[_0x52f12d(0x1e2)](0x0,0xff),(_0xaae52f[_0x52f12d(0x1c1)]||0x0)[_0x52f12d(0x1e2)](0x0,0xff)],_0x207643=_0x4eafd8[_0x52f12d(0x1a7)]??0x0,_0x3f631f=_0x4ce54c[_0x52f12d(0x269)]??0x0;_0x7c2656[_0x52f12d(0x25e)](_0x418ee4,_0x207643,_0x3f631f);}}}else{if(!this[_0x52f12d(0x21e)])return;this[_0x52f12d(0x13f)]=this['_breathingChangeTargetX']??this[_0x52f12d(0x20f)],this['_breathingChangeTargetY']=this[_0x52f12d(0x190)]??this[_0x52f12d(0x187)],this[_0x52f12d(0x13a)]=this[_0x52f12d(0x13a)]??this['_breathingSpeedX'],this[_0x52f12d(0x146)]=this[_0x52f12d(0x146)]??this[_0x52f12d(0x26d)];const _0x1ce6fa=this[_0x52f12d(0x21e)];this[_0x52f12d(0x20f)]=(this['_breathingRateX']*(_0x1ce6fa-0x1)+this[_0x52f12d(0x13f)])/_0x1ce6fa,this[_0x52f12d(0x187)]=(this[_0x52f12d(0x187)]*(_0x1ce6fa-0x1)+this['_breathingChangeTargetY'])/_0x1ce6fa,this[_0x52f12d(0x1a3)]=(this[_0x52f12d(0x1a3)]*(_0x1ce6fa-0x1)+this[_0x52f12d(0x13a)])/_0x1ce6fa,this[_0x52f12d(0x26d)]=(this[_0x52f12d(0x26d)]*(_0x1ce6fa-0x1)+this[_0x52f12d(0x146)])/_0x1ce6fa,this['_breathingChangeDuration']--,this[_0x52f12d(0x1f0)]<=0x0&&(this[_0x52f12d(0x20f)]=this[_0x52f12d(0x13f)],this[_0x52f12d(0x187)]=this[_0x52f12d(0x190)],this[_0x52f12d(0x1a3)]=this[_0x52f12d(0x13a)],this[_0x52f12d(0x26d)]=this[_0x52f12d(0x146)]);}}const _0x15cfa7=_0x329fa2[_0x52f12d(0x1bd)];if(_0x15cfa7[_0x52f12d(0x236)](/\[Version[ ](.*?)\]/i)){const _0x3eba60=Number(RegExp['$1']);_0x3eba60!==VisuMZ[label][_0x52f12d(0x18c)]&&(alert(_0x52f12d(0x1b8)[_0x52f12d(0x19a)](_0x204044,_0x3eba60)),SceneManager[_0x52f12d(0x148)]());}if(_0x15cfa7[_0x52f12d(0x236)](/\[Tier[ ](\d+)\]/i)){if(_0x52f12d(0x14e)!==_0x52f12d(0x1c7)){const _0x582e6f=Number(RegExp['$1']);_0x582e6f<tier?'LkNbN'!==_0x52f12d(0x1af)?(this[_0x52f12d(0x225)]=this[_0x52f12d(0x23d)],this[_0x52f12d(0x243)]=this[_0x52f12d(0x193)],this['_floatSpeed']=this[_0x52f12d(0x215)]):(alert(_0x52f12d(0x1c0)[_0x52f12d(0x19a)](_0x204044,_0x582e6f,tier)),SceneManager[_0x52f12d(0x148)]()):tier=Math[_0x52f12d(0x19f)](_0x582e6f,tier);}else this[_0x52f12d(0x223)]=_0x3dd2f4[_0x52f12d(0x19f)](_0x571f34(_0x17a9a4['$1']),0x1);}VisuMZ[_0x52f12d(0x1f2)](VisuMZ[label]['Settings'],_0x329fa2['parameters']);})(pluginData);if(VisuMZ[_0x91b26b(0x242)]&&VisuMZ[_0x91b26b(0x242)]['version']<1.49){let text='';text+='VisuMZ_1_EventsMoveCore\x20needs\x20to\x20be\x20updated\x20',text+=_0x91b26b(0x22d),alert(text),SceneManager[_0x91b26b(0x148)]();}function _0x5e41(_0x2085b1,_0x2a3692){const _0x195ae8=_0x195a();return _0x5e41=function(_0x5e417e,_0x3b0fe2){_0x5e417e=_0x5e417e-0x12a;let _0x3eb270=_0x195ae8[_0x5e417e];return _0x3eb270;},_0x5e41(_0x2085b1,_0x2a3692);}PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],'Breathing_ChangeFor_Event',_0x4bfd5f=>{const _0x412dcc=_0x91b26b;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ[_0x412dcc(0x1f2)](_0x4bfd5f,_0x4bfd5f);const _0x515fe3=$gameTemp[_0x412dcc(0x1cf)](),_0x409ac5=_0x4bfd5f[_0x412dcc(0x1ab)]||_0x515fe3['eventId'](),_0x4b04ed=$gameMap[_0x412dcc(0x1b7)](_0x409ac5);if(!_0x4b04ed)return;const _0x39f33b=_0x4bfd5f[_0x412dcc(0x262)]||0x0,_0x34640d=_0x4bfd5f[_0x412dcc(0x1b0)]||0x0,_0x3efae4=_0x4bfd5f[_0x412dcc(0x265)]??(_0x4b04ed[_0x412dcc(0x1a3)]||0.01),_0x49fca3=_0x4bfd5f[_0x412dcc(0x1e1)]??(_0x4b04ed[_0x412dcc(0x26d)]||0.01),_0x278b7f=_0x4bfd5f['Duration']??0x0;_0x4b04ed[_0x412dcc(0x14c)](_0x39f33b,_0x34640d,_0x3efae4,_0x49fca3,_0x278b7f);}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x20a),_0x217bc1=>{const _0x10e13c=_0x91b26b;if(!SceneManager[_0x10e13c(0x182)]())return;VisuMZ[_0x10e13c(0x1f2)](_0x217bc1,_0x217bc1);const _0x41fabc=(_0x217bc1[_0x10e13c(0x16a)]||0x0)-0x1,_0x419339=$gamePlayer[_0x10e13c(0x21f)]()[_0x10e13c(0x18d)](_0x41fabc);if(!_0x419339)return;const _0x39332a=_0x217bc1[_0x10e13c(0x262)]||0x0,_0x5171bd=_0x217bc1[_0x10e13c(0x1b0)]||0x0,_0x243754=_0x217bc1[_0x10e13c(0x265)]??(_0x419339[_0x10e13c(0x1a3)]||0.01),_0x30339e=_0x217bc1[_0x10e13c(0x1e1)]??(_0x419339[_0x10e13c(0x26d)]||0.01),_0x17654f=_0x217bc1['Duration']??0x0;_0x419339['startMapEventBreathingChange'](_0x39332a,_0x5171bd,_0x243754,_0x30339e,_0x17654f);}),PluginManager['registerCommand'](pluginData['name'],'Breathing_ChangeFor_Player',_0x149106=>{const _0x40cbe1=_0x91b26b;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ[_0x40cbe1(0x1f2)](_0x149106,_0x149106);const _0x10155e=$gamePlayer,_0x306ae9=_0x149106[_0x40cbe1(0x262)]||0x0,_0xef3c43=_0x149106['BreathingRateY']||0x0,_0x516025=_0x149106['BreathingSpeedX']??(_0x10155e[_0x40cbe1(0x1a3)]||0.01),_0x5f162d=_0x149106[_0x40cbe1(0x1e1)]??(_0x10155e['_breathingSpeedY']||0.01),_0x5ddf21=_0x149106[_0x40cbe1(0x1a7)]??0x0;_0x10155e[_0x40cbe1(0x14c)](_0x306ae9,_0xef3c43,_0x516025,_0x5f162d,_0x5ddf21);}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x231),_0x1799cf=>{const _0x49a21c=_0x91b26b;if(!SceneManager[_0x49a21c(0x182)]())return;VisuMZ[_0x49a21c(0x1f2)](_0x1799cf,_0x1799cf);const _0x4c2a58=$gameTemp[_0x49a21c(0x1cf)](),_0x143a80=_0x1799cf[_0x49a21c(0x1ab)]||_0x4c2a58[_0x49a21c(0x244)](),_0x5ecd4e=$gameMap['event'](_0x143a80);if(!_0x5ecd4e)return;const _0x34afdb=[(_0x1799cf[_0x49a21c(0x1ea)]||0x0)[_0x49a21c(0x1e2)](0x0,0xff),(_0x1799cf[_0x49a21c(0x214)]||0x0)[_0x49a21c(0x1e2)](0x0,0xff),(_0x1799cf['ColorBlue']||0x0)[_0x49a21c(0x1e2)](0x0,0xff),(_0x1799cf['ColorAlpha']||0x0)[_0x49a21c(0x1e2)](0x0,0xff)],_0x7a57e=_0x1799cf['Duration']??0x0,_0x484127=_0x1799cf[_0x49a21c(0x269)]??0x0;_0x5ecd4e[_0x49a21c(0x25e)](_0x34afdb,_0x7a57e,_0x484127);}),PluginManager['registerCommand'](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x1eb),_0x384f1c=>{const _0x9c1a44=_0x91b26b;if(!SceneManager[_0x9c1a44(0x182)]())return;VisuMZ[_0x9c1a44(0x1f2)](_0x384f1c,_0x384f1c);const _0x42ed83=(_0x384f1c[_0x9c1a44(0x16a)]||0x0)-0x1,_0x2510f2=$gamePlayer[_0x9c1a44(0x21f)]()[_0x9c1a44(0x18d)](_0x42ed83);if(!_0x2510f2)return;const _0x28a64c=[(_0x384f1c[_0x9c1a44(0x1ea)]||0x0)[_0x9c1a44(0x1e2)](0x0,0xff),(_0x384f1c[_0x9c1a44(0x214)]||0x0)[_0x9c1a44(0x1e2)](0x0,0xff),(_0x384f1c['ColorBlue']||0x0)[_0x9c1a44(0x1e2)](0x0,0xff),(_0x384f1c[_0x9c1a44(0x1c1)]||0x0)['clamp'](0x0,0xff)],_0x25fbc8=_0x384f1c[_0x9c1a44(0x1a7)]??0x0,_0x1b7659=_0x384f1c[_0x9c1a44(0x269)]??0x0;_0x2510f2[_0x9c1a44(0x25e)](_0x28a64c,_0x25fbc8,_0x1b7659);}),PluginManager[_0x91b26b(0x1d0)](pluginData['name'],_0x91b26b(0x1ff),_0x3bbe1e=>{const _0x5d3e74=_0x91b26b;if(!SceneManager[_0x5d3e74(0x182)]())return;VisuMZ['ConvertParams'](_0x3bbe1e,_0x3bbe1e);const _0x356d7f=$gamePlayer,_0x2c761b=[(_0x3bbe1e[_0x5d3e74(0x1ea)]||0x0)[_0x5d3e74(0x1e2)](0x0,0xff),(_0x3bbe1e[_0x5d3e74(0x214)]||0x0)[_0x5d3e74(0x1e2)](0x0,0xff),(_0x3bbe1e[_0x5d3e74(0x26a)]||0x0)['clamp'](0x0,0xff),(_0x3bbe1e[_0x5d3e74(0x1c1)]||0x0)[_0x5d3e74(0x1e2)](0x0,0xff)],_0x4f1005=_0x3bbe1e[_0x5d3e74(0x1a7)]??0x0,_0x32521f=_0x3bbe1e['Cycle']??0x0;_0x356d7f[_0x5d3e74(0x25e)](_0x2c761b,_0x4f1005,_0x32521f);}),PluginManager[_0x91b26b(0x1d0)](pluginData['name'],_0x91b26b(0x237),_0x3456e4=>{const _0x2b84bd=_0x91b26b;if(!SceneManager[_0x2b84bd(0x182)]())return;VisuMZ[_0x2b84bd(0x1f2)](_0x3456e4,_0x3456e4);const _0x3f8e91=$gameTemp['getLastPluginCommandInterpreter'](),_0x91a633=_0x3456e4['EventID']||_0x3f8e91[_0x2b84bd(0x244)](),_0x174223=$gameMap[_0x2b84bd(0x1b7)](_0x91a633);if(!_0x174223)return;const _0x490be3=Math['min'](_0x3456e4['FloatMin']||0x0,_0x3456e4[_0x2b84bd(0x155)]||0x0),_0x5688d9=Math[_0x2b84bd(0x19f)](_0x3456e4[_0x2b84bd(0x1ad)]||0x0,_0x3456e4['FloatMax']||0x0),_0x393ea3=_0x3456e4[_0x2b84bd(0x226)]??(_0x174223['_floatSpeed']||0.01),_0x408aa4=_0x3456e4['Duration']??0x0;_0x174223[_0x2b84bd(0x22b)](_0x490be3,_0x5688d9,_0x393ea3,_0x408aa4);}),PluginManager['registerCommand'](pluginData['name'],'Float_ChangeFor_Follower',_0x52c496=>{const _0x4b1fed=_0x91b26b;if(!SceneManager[_0x4b1fed(0x182)]())return;VisuMZ[_0x4b1fed(0x1f2)](_0x52c496,_0x52c496);const _0x35718c=(_0x52c496['FollowerID']||0x0)-0x1,_0x223f52=$gamePlayer[_0x4b1fed(0x21f)]()[_0x4b1fed(0x18d)](_0x35718c);if(!_0x223f52)return;const _0x3a1ab5=Math[_0x4b1fed(0x24a)](_0x52c496[_0x4b1fed(0x1ad)]||0x0,_0x52c496[_0x4b1fed(0x155)]||0x0),_0x4a608d=Math[_0x4b1fed(0x19f)](_0x52c496[_0x4b1fed(0x1ad)]||0x0,_0x52c496['FloatMax']||0x0),_0x3ca1d3=_0x52c496[_0x4b1fed(0x226)]??(_0x223f52[_0x4b1fed(0x201)]||0.01),_0x491eb8=_0x52c496[_0x4b1fed(0x1a7)]??0x0;_0x223f52[_0x4b1fed(0x22b)](_0x3a1ab5,_0x4a608d,_0x3ca1d3,_0x491eb8);}),PluginManager[_0x91b26b(0x1d0)](pluginData['name'],_0x91b26b(0x17a),_0x7a1e94=>{const _0x273ec5=_0x91b26b;if(!SceneManager[_0x273ec5(0x182)]())return;VisuMZ['ConvertParams'](_0x7a1e94,_0x7a1e94);const _0x8a3a96=$gamePlayer,_0x5c143c=Math['min'](_0x7a1e94[_0x273ec5(0x1ad)]||0x0,_0x7a1e94[_0x273ec5(0x155)]||0x0),_0x38a13e=Math[_0x273ec5(0x19f)](_0x7a1e94[_0x273ec5(0x1ad)]||0x0,_0x7a1e94[_0x273ec5(0x155)]||0x0),_0x382951=_0x7a1e94[_0x273ec5(0x226)]??(_0x8a3a96[_0x273ec5(0x201)]||0.01),_0x3e8689=_0x7a1e94[_0x273ec5(0x1a7)]??0x0;_0x8a3a96[_0x273ec5(0x22b)](_0x5c143c,_0x38a13e,_0x382951,_0x3e8689);}),PluginManager[_0x91b26b(0x1d0)](pluginData['name'],'Hue_ChangeFor_Event',_0x5ebf8d=>{const _0xa66791=_0x91b26b;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ[_0xa66791(0x1f2)](_0x5ebf8d,_0x5ebf8d);const _0x1ba2d1=$gameTemp[_0xa66791(0x1cf)](),_0x57e4fb=_0x5ebf8d['EventID']||_0x1ba2d1['eventId'](),_0x1a297c=$gameMap[_0xa66791(0x1b7)](_0x57e4fb);if(!_0x1a297c)return;_0x1a297c[_0xa66791(0x150)]=_0x5ebf8d[_0xa66791(0x1c9)]||0x0;}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x23c),_0x5bfa10=>{const _0x4bb242=_0x91b26b;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ[_0x4bb242(0x1f2)](_0x5bfa10,_0x5bfa10);const _0x352a8b=(_0x5bfa10[_0x4bb242(0x16a)]||0x0)-0x1,_0x2c85ef=$gamePlayer[_0x4bb242(0x21f)]()[_0x4bb242(0x18d)](_0x352a8b);if(!_0x2c85ef)return;_0x2c85ef[_0x4bb242(0x150)]=_0x5bfa10[_0x4bb242(0x1c9)]||0x0;}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x12f),_0x4c57fb=>{const _0x277942=_0x91b26b;if(!SceneManager[_0x277942(0x182)]())return;VisuMZ[_0x277942(0x1f2)](_0x4c57fb,_0x4c57fb);const _0x1eab42=$gamePlayer;_0x1eab42[_0x277942(0x150)]=_0x4c57fb[_0x277942(0x1c9)]||0x0;}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x18b),_0x5ababb=>{const _0x1d1e94=_0x91b26b;if(!SceneManager[_0x1d1e94(0x182)]())return;VisuMZ['ConvertParams'](_0x5ababb,_0x5ababb);const _0x1767a3=$gameTemp[_0x1d1e94(0x1cf)](),_0x205a64=_0x5ababb[_0x1d1e94(0x1ab)]||_0x1767a3[_0x1d1e94(0x244)](),_0x538cfe=$gameMap['event'](_0x205a64);if(!_0x538cfe)return;const _0x3c6932=Number(_0x5ababb[_0x1d1e94(0x188)])||0x0,_0x401c5e=Number(_0x5ababb[_0x1d1e94(0x1a0)])||0x0,_0x315666=_0x5ababb[_0x1d1e94(0x209)],_0x39782e=_0x5ababb[_0x1d1e94(0x257)];_0x538cfe[_0x1d1e94(0x1db)](_0x3c6932,_0x401c5e,_0x315666,_0x39782e);}),PluginManager['registerCommand'](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x1d8),_0x51d147=>{const _0x58527b=_0x91b26b;if(!SceneManager[_0x58527b(0x182)]())return;VisuMZ[_0x58527b(0x1f2)](_0x51d147,_0x51d147);const _0x36c402=(_0x51d147[_0x58527b(0x16a)]||0x0)-0x1,_0x2ccb9d=$gamePlayer[_0x58527b(0x21f)]()['follower'](_0x36c402);if(!_0x2ccb9d)return;const _0x598322=Number(_0x51d147[_0x58527b(0x188)])||0x0,_0x374f06=Number(_0x51d147[_0x58527b(0x1a0)])||0x0,_0xfe52b9=_0x51d147[_0x58527b(0x209)],_0x3f651c=_0x51d147[_0x58527b(0x257)];_0x2ccb9d[_0x58527b(0x1db)](_0x598322,_0x374f06,_0xfe52b9,_0x3f651c);}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x16b),_0x7c71b6=>{const _0xbd548a=_0x91b26b;if(!SceneManager[_0xbd548a(0x182)]())return;VisuMZ[_0xbd548a(0x1f2)](_0x7c71b6,_0x7c71b6);const _0x49e2a1=$gamePlayer,_0x34640b=Number(_0x7c71b6[_0xbd548a(0x188)])||0x0,_0x460df9=Number(_0x7c71b6[_0xbd548a(0x1a0)])||0x0,_0x58afd9=_0x7c71b6['Mirror'],_0x596ded=_0x7c71b6[_0xbd548a(0x257)];_0x49e2a1[_0xbd548a(0x1db)](_0x34640b,_0x460df9,_0x58afd9,_0x596ded);}),PluginManager[_0x91b26b(0x1d0)](pluginData['name'],'Scale_ChangeFor_Event',_0x5852f7=>{const _0x4c26bc=_0x91b26b;if(!SceneManager[_0x4c26bc(0x182)]())return;VisuMZ[_0x4c26bc(0x1f2)](_0x5852f7,_0x5852f7);const _0x892e8b=$gameTemp[_0x4c26bc(0x1cf)](),_0x4b915d=_0x5852f7[_0x4c26bc(0x1ab)]||_0x892e8b['eventId'](),_0x2ec269=$gameMap['event'](_0x4b915d);if(!_0x2ec269)return;const _0x3a6b0c=_0x5852f7[_0x4c26bc(0x1e9)]||0x0,_0x186c2e=_0x5852f7['ScaleY']||0x0,_0x360b55=_0x5852f7[_0x4c26bc(0x1a7)]??0x0;_0x2ec269['startMapEventScaleChange'](_0x3a6b0c,_0x186c2e,_0x360b55);}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x1d4),_0x5e0482=>{const _0x5c5681=_0x91b26b;if(!SceneManager[_0x5c5681(0x182)]())return;VisuMZ[_0x5c5681(0x1f2)](_0x5e0482,_0x5e0482);const _0x15570d=(_0x5e0482[_0x5c5681(0x16a)]||0x0)-0x1,_0xc0181c=$gamePlayer[_0x5c5681(0x21f)]()[_0x5c5681(0x18d)](_0x15570d);if(!_0xc0181c)return;const _0x2a04cb=_0x5e0482['ScaleX']||0x0,_0x35064f=_0x5e0482[_0x5c5681(0x202)]||0x0,_0x35c334=_0x5e0482['Duration']??0x0;_0xc0181c['startMapEventScaleChange'](_0x2a04cb,_0x35064f,_0x35c334);}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],'Scale_ChangeFor_Player',_0x71d6e1=>{const _0x76f936=_0x91b26b;if(!SceneManager[_0x76f936(0x182)]())return;VisuMZ[_0x76f936(0x1f2)](_0x71d6e1,_0x71d6e1);const _0x1766bc=$gamePlayer,_0x3b9e10=_0x71d6e1[_0x76f936(0x1e9)]||0x0,_0x1c5c0b=_0x71d6e1['ScaleY']||0x0,_0x5c6982=_0x71d6e1['Duration']??0x0;_0x1766bc[_0x76f936(0x158)](_0x3b9e10,_0x1c5c0b,_0x5c6982);}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x229),_0xd45c57=>{const _0x5aa2e8=_0x91b26b;if(!SceneManager[_0x5aa2e8(0x182)]())return;VisuMZ['ConvertParams'](_0xd45c57,_0xd45c57);const _0x2cb9f6=$gameTemp['getLastPluginCommandInterpreter'](),_0x3dd385=_0xd45c57[_0x5aa2e8(0x1ab)]||_0x2cb9f6[_0x5aa2e8(0x244)](),_0x39b78b=$gameMap[_0x5aa2e8(0x1b7)](_0x3dd385);if(!_0x39b78b)return;_0x39b78b[_0x5aa2e8(0x17c)]=Math[_0x5aa2e8(0x166)](_0xd45c57[_0x5aa2e8(0x131)]||0x0),_0x39b78b[_0x5aa2e8(0x211)]=Math[_0x5aa2e8(0x166)](_0xd45c57[_0x5aa2e8(0x131)]||0x0);}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x18f),_0x2746dc=>{const _0x12cf2a=_0x91b26b;if(!SceneManager[_0x12cf2a(0x182)]())return;VisuMZ[_0x12cf2a(0x1f2)](_0x2746dc,_0x2746dc);const _0xa90b1c=(_0x2746dc[_0x12cf2a(0x16a)]||0x0)-0x1,_0x3bbf95=$gamePlayer[_0x12cf2a(0x21f)]()[_0x12cf2a(0x18d)](_0xa90b1c);if(!_0x3bbf95)return;_0x3bbf95[_0x12cf2a(0x17c)]=Math[_0x12cf2a(0x166)](_0x2746dc['ShakeX']||0x0),_0x3bbf95[_0x12cf2a(0x211)]=Math['abs'](_0x2746dc[_0x12cf2a(0x131)]||0x0);}),PluginManager[_0x91b26b(0x1d0)](pluginData['name'],_0x91b26b(0x12e),_0x2b8f5b=>{const _0x433124=_0x91b26b;if(!SceneManager[_0x433124(0x182)]())return;VisuMZ[_0x433124(0x1f2)](_0x2b8f5b,_0x2b8f5b);const _0x31bb22=$gamePlayer;_0x31bb22[_0x433124(0x17c)]=Math[_0x433124(0x166)](_0x2b8f5b['ShakeX']||0x0),_0x31bb22['_shakePowerY']=Math[_0x433124(0x166)](_0x2b8f5b[_0x433124(0x131)]||0x0);}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x12c),_0xa64cad=>{const _0x63ff91=_0x91b26b;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ[_0x63ff91(0x1f2)](_0xa64cad,_0xa64cad);const _0xf4e680=$gameTemp[_0x63ff91(0x1cf)](),_0xe2777=_0xa64cad['EventID']||_0xf4e680[_0x63ff91(0x244)](),_0xbc8ac0=$gameMap['event'](_0xe2777);if(!_0xbc8ac0)return;const _0x2617e7=Math['min'](_0xa64cad['SidestepMin']||0x0,_0xa64cad[_0x63ff91(0x1bb)]||0x0),_0x8ee7a0=Math[_0x63ff91(0x19f)](_0xa64cad['SidestepMin']||0x0,_0xa64cad[_0x63ff91(0x1bb)]||0x0),_0xdd8373=_0xa64cad[_0x63ff91(0x192)]??(_0xbc8ac0[_0x63ff91(0x17b)]||0.01),_0x49b680=_0xa64cad['Duration']??0x0;_0xbc8ac0[_0x63ff91(0x259)](_0x2617e7,_0x8ee7a0,_0xdd8373,_0x49b680);}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x241),_0x179e3a=>{const _0x426a12=_0x91b26b;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ[_0x426a12(0x1f2)](_0x179e3a,_0x179e3a);const _0x4ffe29=(_0x179e3a['FollowerID']||0x0)-0x1,_0x32db18=$gamePlayer[_0x426a12(0x21f)]()[_0x426a12(0x18d)](_0x4ffe29);if(!_0x32db18)return;const _0x188c89=Math[_0x426a12(0x24a)](_0x179e3a[_0x426a12(0x1e8)]||0x0,_0x179e3a['SidestepMax']||0x0),_0x403325=Math[_0x426a12(0x19f)](_0x179e3a[_0x426a12(0x1e8)]||0x0,_0x179e3a['SidestepMax']||0x0),_0x586772=_0x179e3a[_0x426a12(0x192)]??(_0x32db18[_0x426a12(0x17b)]||0.01),_0x2d6ebf=_0x179e3a[_0x426a12(0x1a7)]??0x0;_0x32db18[_0x426a12(0x259)](_0x188c89,_0x403325,_0x586772,_0x2d6ebf);}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x199),_0x2f4c1c=>{const _0x1c72dc=_0x91b26b;if(!SceneManager[_0x1c72dc(0x182)]())return;VisuMZ['ConvertParams'](_0x2f4c1c,_0x2f4c1c);const _0x5f213a=$gamePlayer,_0x30ab73=Math[_0x1c72dc(0x24a)](_0x2f4c1c[_0x1c72dc(0x1e8)]||0x0,_0x2f4c1c[_0x1c72dc(0x1bb)]||0x0),_0xdc6d6d=Math['max'](_0x2f4c1c[_0x1c72dc(0x1e8)]||0x0,_0x2f4c1c[_0x1c72dc(0x1bb)]||0x0),_0x4fa819=_0x2f4c1c[_0x1c72dc(0x192)]??(_0x5f213a[_0x1c72dc(0x17b)]||0.01),_0x4f5890=_0x2f4c1c[_0x1c72dc(0x1a7)]??0x0;_0x5f213a[_0x1c72dc(0x259)](_0x30ab73,_0xdc6d6d,_0x4fa819,_0x4f5890);}),PluginManager[_0x91b26b(0x1d0)](pluginData['name'],'Tint_ChangeFor_Event',_0x55b2aa=>{const _0x53d937=_0x91b26b;if(!SceneManager[_0x53d937(0x182)]())return;VisuMZ[_0x53d937(0x1f2)](_0x55b2aa,_0x55b2aa);const _0x496e74=$gameTemp[_0x53d937(0x1cf)](),_0x188ca5=_0x55b2aa[_0x53d937(0x1ab)]||_0x496e74[_0x53d937(0x244)](),_0x31825f=$gameMap['event'](_0x188ca5);if(!_0x31825f)return;const _0x83f395=[(_0x55b2aa[_0x53d937(0x1ea)]||0x0)[_0x53d937(0x1e2)](-0xff,0xff),(_0x55b2aa[_0x53d937(0x214)]||0x0)[_0x53d937(0x1e2)](-0xff,0xff),(_0x55b2aa[_0x53d937(0x26a)]||0x0)[_0x53d937(0x1e2)](-0xff,0xff),(_0x55b2aa[_0x53d937(0x184)]||0x0)[_0x53d937(0x1e2)](0x0,0xff)],_0x560b63=_0x55b2aa[_0x53d937(0x1a7)]??0x0;_0x31825f[_0x53d937(0x1f5)](_0x83f395,_0x560b63);}),PluginManager[_0x91b26b(0x1d0)](pluginData['name'],'Tint_ChangeFor_Follower',_0xac46c=>{const _0x538ebb=_0x91b26b;if(!SceneManager['isInstanceOfSceneMap']())return;VisuMZ[_0x538ebb(0x1f2)](_0xac46c,_0xac46c);const _0x17169d=(_0xac46c[_0x538ebb(0x16a)]||0x0)-0x1,_0x1ac4ae=$gamePlayer[_0x538ebb(0x21f)]()[_0x538ebb(0x18d)](_0x17169d);if(!_0x1ac4ae)return;const _0x3d1ea5=[(_0xac46c['ColorRed']||0x0)[_0x538ebb(0x1e2)](-0xff,0xff),(_0xac46c[_0x538ebb(0x214)]||0x0)[_0x538ebb(0x1e2)](-0xff,0xff),(_0xac46c[_0x538ebb(0x26a)]||0x0)[_0x538ebb(0x1e2)](-0xff,0xff),(_0xac46c[_0x538ebb(0x184)]||0x0)[_0x538ebb(0x1e2)](0x0,0xff)],_0x480459=_0xac46c[_0x538ebb(0x1a7)]??0x0;_0x1ac4ae[_0x538ebb(0x1f5)](_0x3d1ea5,_0x480459);}),PluginManager[_0x91b26b(0x1d0)](pluginData[_0x91b26b(0x1d9)],_0x91b26b(0x26b),_0x2b8ec6=>{const _0x5778e9=_0x91b26b;if(!SceneManager[_0x5778e9(0x182)]())return;VisuMZ['ConvertParams'](_0x2b8ec6,_0x2b8ec6);const _0x164009=$gamePlayer,_0xd8840a=[(_0x2b8ec6['ColorRed']||0x0)['clamp'](-0xff,0xff),(_0x2b8ec6[_0x5778e9(0x214)]||0x0)[_0x5778e9(0x1e2)](-0xff,0xff),(_0x2b8ec6[_0x5778e9(0x26a)]||0x0)[_0x5778e9(0x1e2)](-0xff,0xff),(_0x2b8ec6['ColorGray']||0x0)[_0x5778e9(0x1e2)](0x0,0xff)],_0x9397e9=_0x2b8ec6[_0x5778e9(0x1a7)]??0x0;_0x164009['startMapEventTintChange'](_0xd8840a,_0x9397e9);}),VisuMZ[_0x91b26b(0x1fd)]['RegExp']={'Float':/<FLOAT HEIGHT:[ ](\d+)>/i,'FloatTo':/<FLOAT HEIGHT:[ ](.*?) TO (.*?)>/i,'FloatSpeed':/<FLOAT SPEED:[ ](.*?)>/i,'FloatRandomOffset':/<FLOAT RANDOM OFFSET>/i,'FloatStaticOffset':/<FLOAT STATIC OFFSET:[ ](\d+)>/i,'Sidestep':/<SIDESTEP:[ ]([\+\-]\d+)>/i,'SidestepBetween':/<SIDESTEP:[ ](.*?) TO (.*?)>/i,'SidestepSpeed':/<SIDESTEP SPEED:[ ](.*?)>/i,'SidestepRandomOffset':/<SIDESTEP RANDOM OFFSET>/i,'SidestepStatic':/<SIDESTEP STATIC OFFSET:[ ](\d+)>/i,'Hue':/<HUE:[ ](\d+)>/i,'HueRandom':/<RANDOM HUE>/i,'HueRandomBetween':/<RANDOM HUE:[ ](\d+) TO (\d+)>/i,'HueUpdatePerFrame':/<HUE PER FRAME:[ ]([\+\-]\d+)>/i,'ShakePowerX':/<SHAKE X POWER:[ ](\d+)>/i,'ShakePowerY':/<SHAKE Y POWER:[ ](\d+)>/i,'ShakePower':/<SHAKE POWER:[ ](\d+)>/i,'ScaleBaseX':/<SCALE X:[ ](\d+)([%％])>/i,'ScaleBaseY':/<SCALE Y:[ ](\d+)([%％])>/i,'ScaleBaseBoth':/<SCALE:[ ](\d+)([%％])>/i,'BreathRateX':/<(?:BREATHING) RATE X:[ ](\d+)([%％])>/i,'BreathRateY':/<(?:BREATHING) RATE Y:[ ](\d+)([%％])>/i,'BreathRateBoth':/<(?:BREATHING) RATE:[ ](\d+)([%％])>/i,'BreathSpeedX':/<(?:BREATHING) SPEED X:[ ](.*?)>/i,'BreathSpeedY':/<(?:BREATHING) SPEED Y:[ ](.*?)>/i,'BreathSpeedBoth':/<(?:BREATHING) SPEED:[ ](.*?)>/i,'BreathRandomX':/<(?:BREATHING) RANDOM OFFSET X>/i,'BreathRandomY':/<(?:BREATHING) RANDOM OFFSET Y>/i,'BreathRandomBoth':/<(?:BREATHING) RANDOM OFFSET>/i,'BreathStaticX':/<(?:BREATHING) STATIC OFFSET X:[ ](\d+)>/i,'BreathStaticY':/<(?:BREATHING) STATIC OFFSET Y:[ ](\d+)>/i,'BreathStaticBoth':/<(?:BREATHING) STATIC OFFSET:[ ](\d+)>/i,'TintColor':/<TINT COLOR:[ ](.*?)>/i,'FlashColor':/<FLASH COLOR:[ ](.*?)>/i,'FlashDuration':/<FLASH DURATION:[ ](\d+)>/i,'FlashCycle':/<FLASH CYCLE:[ ](\d+)>/i,'RepeatAni':/<REPEAT ANIMATION:[ ](\d+)>/i,'RepeatAniCycle':/<REPEAT ANIMATION CYCLE:[ ](\d+)>/i,'RepeatAniMirrorOn':/<REPEAT ANIMATION MIRROR:[ ]ON>/i,'RepeatAniMirrorOff':/<REPEAT ANIMATION MIRROR:[ ]OFF>/i,'RepeatAniMuteOn':/<REPEAT ANIMATION MUTE:[ ]ON>/i,'RepeatAniMuteOff':/<REPEAT ANIMATION MUTE:[ ]OFF>/i},SceneManager['isSceneMap']=function(){const _0x3a718e=_0x91b26b;return this['_scene']&&this['_scene'][_0x3a718e(0x227)]===Scene_Map;},SceneManager[_0x91b26b(0x182)]=function(){const _0x34812e=_0x91b26b;return this['_scene']&&this[_0x34812e(0x195)]instanceof Scene_Map;},Game_Temp[_0x91b26b(0x253)][_0x91b26b(0x1c3)]=function(_0x2ec8c7){const _0x3f2293=_0x91b26b;this[_0x3f2293(0x221)]=_0x2ec8c7;},Game_Temp[_0x91b26b(0x253)][_0x91b26b(0x1cf)]=function(){const _0x17daa6=_0x91b26b;return this[_0x17daa6(0x221)];},VisuMZ['MapEventEffects'][_0x91b26b(0x1ef)]=Game_Interpreter[_0x91b26b(0x253)]['command357'],Game_Interpreter[_0x91b26b(0x253)][_0x91b26b(0x21b)]=function(_0x2dd877){const _0x1daf81=_0x91b26b;return $gameTemp[_0x1daf81(0x1c3)](this),VisuMZ[_0x1daf81(0x1fd)]['Game_Interpreter_PluginCommand'][_0x1daf81(0x198)](this,_0x2dd877);},VisuMZ[_0x91b26b(0x1fd)][_0x91b26b(0x1de)]=Game_System[_0x91b26b(0x253)][_0x91b26b(0x142)],Game_System[_0x91b26b(0x253)][_0x91b26b(0x142)]=function(){const _0x16228f=_0x91b26b;VisuMZ[_0x16228f(0x1fd)][_0x16228f(0x1de)]['call'](this),$gamePlayer[_0x16228f(0x1c8)]();for(const _0x4a1364 of $gamePlayer['followers']()[_0x16228f(0x224)]){_0x4a1364['checkNeedInitMapEventEffectsEffects']();}},VisuMZ['MapEventEffects'][_0x91b26b(0x1a4)]=Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x1ac)],Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x1ac)]=function(){const _0x2bb6a2=_0x91b26b;VisuMZ['MapEventEffects'][_0x2bb6a2(0x1a4)][_0x2bb6a2(0x198)](this),this['initMapEventEffectsEffects']();},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x1c8)]=function(){const _0x16da04=_0x91b26b,_0xcfb81=[_0x16da04(0x1f8),_0x16da04(0x225),_0x16da04(0x243),_0x16da04(0x201),_0x16da04(0x205),_0x16da04(0x170),_0x16da04(0x152),_0x16da04(0x17b),_0x16da04(0x150),_0x16da04(0x220),_0x16da04(0x17c),_0x16da04(0x211),'_scaleBaseX',_0x16da04(0x132),_0x16da04(0x160),_0x16da04(0x17d),_0x16da04(0x235),_0x16da04(0x12b),'_breathingRateX',_0x16da04(0x187),_0x16da04(0x1d7),_0x16da04(0x23a),_0x16da04(0x1bf),_0x16da04(0x1b6),_0x16da04(0x137),_0x16da04(0x247)];for(const _0x1ef6f5 of _0xcfb81){if(_0x16da04(0x26e)!==_0x16da04(0x26e))this['_sidestepChangeDuration']=_0x49a722,this['_sidestepChangeMinTarget']=_0x2834be,this[_0x16da04(0x197)]=_0x5e5a0c,this[_0x16da04(0x252)]=_0x4fb564,_0x8a8918<=0x0&&(this[_0x16da04(0x170)]=this[_0x16da04(0x162)],this['_sidestepMax']=this[_0x16da04(0x197)],this['_sidestepSpeed']=this[_0x16da04(0x252)]);else{if(this[_0x1ef6f5]===undefined)return this[_0x16da04(0x19b)]();}}},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x19b)]=function(){const _0xf1fbcc=_0x91b26b;this[_0xf1fbcc(0x1f8)]=0x0,this[_0xf1fbcc(0x225)]=0x0,this[_0xf1fbcc(0x243)]=0x0,this[_0xf1fbcc(0x201)]=Game_Event[_0xf1fbcc(0x179)]['default'][_0xf1fbcc(0x15b)],this['_floatRng']=Math[_0xf1fbcc(0x246)](0xf4240),this['_floatChangeDuration']=0x0,this[_0xf1fbcc(0x23d)]=0x0,this[_0xf1fbcc(0x193)]=0x0,this[_0xf1fbcc(0x215)]=this[_0xf1fbcc(0x201)],this[_0xf1fbcc(0x205)]=0x0,this[_0xf1fbcc(0x170)]=0x0,this[_0xf1fbcc(0x152)]=0x0,this[_0xf1fbcc(0x17b)]=Game_Event[_0xf1fbcc(0x179)]['default'][_0xf1fbcc(0x1df)],this[_0xf1fbcc(0x24f)]=Math[_0xf1fbcc(0x246)](0xf4240),this['_sidestepChangeDuration']=0x0,this[_0xf1fbcc(0x162)]=0x0,this['_sidestepChangeMaxTarget']=0x0,this[_0xf1fbcc(0x252)]=this[_0xf1fbcc(0x17b)],this[_0xf1fbcc(0x150)]=this[_0xf1fbcc(0x150)]||0x0,this[_0xf1fbcc(0x220)]=this[_0xf1fbcc(0x220)]||0x0,this['_shakePowerX']=0x0,this['_shakePowerY']=0x0,this['_scaleBaseX']=0x1,this[_0xf1fbcc(0x132)]=0x1,this[_0xf1fbcc(0x160)]=0x1,this['_scaleBaseTargetY']=0x1,this['_scaleBaseDuration']=0x0,this[_0xf1fbcc(0x235)]=0x0,this['_breathingY']=0x0,this['_breathingRateX']=0x0,this['_breathingRateY']=0x0,this['_breathingSpeedX']=Game_Event['MAP_EVENT_EFFECTS']['default'][_0xf1fbcc(0x141)],this[_0xf1fbcc(0x26d)]=Game_Event[_0xf1fbcc(0x179)]['default'][_0xf1fbcc(0x25c)],this[_0xf1fbcc(0x139)]=Math[_0xf1fbcc(0x246)](0xf4240),this['_breathingRngY']=Math[_0xf1fbcc(0x246)](0xf4240),this[_0xf1fbcc(0x21e)]=0x0,this[_0xf1fbcc(0x13f)]=0x0,this[_0xf1fbcc(0x190)]=0x0,this[_0xf1fbcc(0x13a)]=this[_0xf1fbcc(0x1a3)],this[_0xf1fbcc(0x146)]=this['_breathingSpeedY'],this[_0xf1fbcc(0x1d7)]=[0x0,0x0,0x0,0x0],this[_0xf1fbcc(0x23a)]=[0x0,0x0,0x0,0x0],this[_0xf1fbcc(0x167)]=0x0,this[_0xf1fbcc(0x1bf)]=[0x0,0x0,0x0,0x0],this[_0xf1fbcc(0x1b6)]=[0x0,0x0,0x0,0x0],this['_flashWholeDuration']=Math[_0xf1fbcc(0x19f)](Game_Event[_0xf1fbcc(0x179)][_0xf1fbcc(0x218)][_0xf1fbcc(0x149)],0x1),this[_0xf1fbcc(0x14b)]=this[_0xf1fbcc(0x137)],this[_0xf1fbcc(0x223)]=0x0,this[_0xf1fbcc(0x247)]={'id':0x0,'cycle':Game_Event[_0xf1fbcc(0x179)]['default'][_0xf1fbcc(0x1aa)],'mirror':Game_Event[_0xf1fbcc(0x179)][_0xf1fbcc(0x218)][_0xf1fbcc(0x263)],'mute':Game_Event[_0xf1fbcc(0x179)][_0xf1fbcc(0x218)][_0xf1fbcc(0x1bc)]};},VisuMZ[_0x91b26b(0x1fd)]['Game_CharacterBase_screenX']=Game_CharacterBase[_0x91b26b(0x253)]['screenX'],Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x25a)]=function(){const _0x1d71aa=_0x91b26b;let _0x2c1218=VisuMZ[_0x1d71aa(0x1fd)][_0x1d71aa(0x1be)][_0x1d71aa(0x198)](this);if(this[_0x1d71aa(0x205)])_0x2c1218+=this[_0x1d71aa(0x14f)]();if(this[_0x1d71aa(0x17c)])_0x2c1218+=this[_0x1d71aa(0x15a)]();return _0x2c1218;},VisuMZ[_0x91b26b(0x1fd)][_0x91b26b(0x165)]=Game_CharacterBase['prototype'][_0x91b26b(0x266)],Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x266)]=function(){const _0x55052f=_0x91b26b;let _0x33a41f=VisuMZ[_0x55052f(0x1fd)][_0x55052f(0x165)][_0x55052f(0x198)](this);if(this[_0x55052f(0x1f8)])_0x33a41f+=this['_floatHeight'];if(this[_0x55052f(0x211)])_0x33a41f+=this[_0x55052f(0x178)]();return _0x33a41f;},VisuMZ['MapEventEffects'][_0x91b26b(0x23e)]=Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x20e)],Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x20e)]=function(){const _0x74f77c=_0x91b26b;!Imported[_0x74f77c(0x24b)]&&(_0x74f77c(0x270)!==_0x74f77c(0x270)?(this['_breathingSpeedX']=_0x1e9107(_0xfdb813['$1']),this['_breathingChangeSpeedX']=this[_0x74f77c(0x1a3)]):this[_0x74f77c(0x168)]()),VisuMZ[_0x74f77c(0x1fd)][_0x74f77c(0x23e)]['call'](this),this[_0x74f77c(0x206)]();},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x206)]=function(){const _0x338c7b=_0x91b26b;this[_0x338c7b(0x1e6)](),this['updateMapEventSidestep'](),this[_0x338c7b(0x1e7)](),this[_0x338c7b(0x14d)](),this['updateMapEventFlashColor'](),this[_0x338c7b(0x1a9)]();},VisuMZ[_0x91b26b(0x1fd)][_0x91b26b(0x25b)]=Game_CharacterBase['prototype'][_0x91b26b(0x22e)],Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x22e)]=function(){const _0x5247f5=_0x91b26b;this[_0x5247f5(0x171)]()?this[_0x5247f5(0x180)]=0x0:VisuMZ[_0x5247f5(0x1fd)][_0x5247f5(0x25b)]['call'](this);},Game_CharacterBase['prototype'][_0x91b26b(0x171)]=function(){const _0x4fe262=_0x91b26b;if(this[_0x4fe262(0x1f8)])return!![];return![];},VisuMZ[_0x91b26b(0x1fd)]['Game_CharacterBase_screenZ']=Game_CharacterBase['prototype'][_0x91b26b(0x145)],Game_CharacterBase['prototype']['screenZ']=function(){const _0x2f3e0f=_0x91b26b;let _0x1b17d9=VisuMZ[_0x2f3e0f(0x1fd)]['Game_CharacterBase_screenZ'][_0x2f3e0f(0x198)](this);return this[_0x2f3e0f(0x1f8)]&&('BMiPS'===_0x2f3e0f(0x22c)?(this['_breathingRateX']=_0x5afc85(_0x252225['$1'])*0.01,this[_0x2f3e0f(0x13f)]=this['_breathingRateX']):this['_floatHeight']>=Game_Event[_0x2f3e0f(0x179)][_0x2f3e0f(0x19e)]&&(_0x2f3e0f(0x15e)!==_0x2f3e0f(0x1f3)?_0x1b17d9=Math['max'](_0x1b17d9,0x5):_0x2c7e57[_0x157160]=(_0x1597a3[_0x28c844]*(_0x36f8c8-0x1)+_0x422189[_0x4ab50])/_0x107352)),_0x1b17d9;},Game_CharacterBase['prototype'][_0x91b26b(0x22b)]=function(_0x24344e,_0x382d7a,_0x5e7a2b,_0x2b1710){const _0x29b3c9=_0x91b26b;this['_floatChangeDuration']=_0x2b1710,this['_floatChangeMinTarget']=_0x24344e,this['_floatChangeMaxTarget']=_0x382d7a,this[_0x29b3c9(0x215)]=_0x5e7a2b,_0x2b1710<=0x0&&(_0x29b3c9(0x172)==='Kfxwr'?this[_0x29b3c9(0x24f)]=_0x3072b3(_0x494628['$1']):(this[_0x29b3c9(0x225)]=this['_floatChangeMinTarget'],this[_0x29b3c9(0x243)]=this[_0x29b3c9(0x193)],this[_0x29b3c9(0x201)]=this['_floatChangeSpeedTarget']));},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x1e6)]=function(){this['updateMapEventFloatChange'](),this['updateMapEventFloatHeight']();},Game_CharacterBase[_0x91b26b(0x253)]['updateMapEventFloatChange']=function(){const _0xdb7774=_0x91b26b;if(!this['_floatChangeDuration'])return;this[_0xdb7774(0x225)]=this['_floatHeightMin']||0x0,this[_0xdb7774(0x243)]=this[_0xdb7774(0x243)]||0x0,this[_0xdb7774(0x201)]=this[_0xdb7774(0x201)]||Game_Event[_0xdb7774(0x179)][_0xdb7774(0x218)][_0xdb7774(0x15b)],this[_0xdb7774(0x23d)]=this[_0xdb7774(0x23d)]||0x0,this['_floatChangeMaxTarget']=this[_0xdb7774(0x193)]||0x0,this[_0xdb7774(0x215)]=this['_floatChangeSpeedTarget']||0x0;const _0x36491e=this['_floatChangeDuration'];this[_0xdb7774(0x225)]=(this[_0xdb7774(0x225)]*(_0x36491e-0x1)+this[_0xdb7774(0x23d)])/_0x36491e,this['_floatHeightMax']=(this[_0xdb7774(0x243)]*(_0x36491e-0x1)+this[_0xdb7774(0x193)])/_0x36491e,this[_0xdb7774(0x201)]=(this[_0xdb7774(0x201)]*(_0x36491e-0x1)+this[_0xdb7774(0x215)])/_0x36491e,this[_0xdb7774(0x20d)]--,this[_0xdb7774(0x20d)]<=0x0&&(this['_floatHeightMin']=this['_floatChangeMinTarget'],this['_floatHeightMax']=this[_0xdb7774(0x193)],this[_0xdb7774(0x201)]=this['_floatChangeSpeedTarget']);},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x1f9)]=function(){const _0xa48493=_0x91b26b;this[_0xa48493(0x1f8)]=this[_0xa48493(0x1f8)]||0x0,this[_0xa48493(0x225)]=this[_0xa48493(0x225)]||0x0,this[_0xa48493(0x243)]=this['_floatHeightMax']||0x0,this['_floatSpeed']=this[_0xa48493(0x201)]||Game_Event[_0xa48493(0x179)][_0xa48493(0x218)][_0xa48493(0x15b)],this[_0xa48493(0x1d3)]=this[_0xa48493(0x1d3)]||Math[_0xa48493(0x246)](0xf4240);if(this[_0xa48493(0x225)]===this['_floatHeightMax']){if(_0xa48493(0x1c5)===_0xa48493(0x22f))return this['_lastShakeGraphicsCountX']=_0x35c260[_0xa48493(0x13b)],this[_0xa48493(0x183)]=(_0x359563['randomInt'](this[_0xa48493(0x17c)])+0x1)*(_0x76e96d['random']()<0.5?-0x1:0x1),this[_0xa48493(0x183)];else{this[_0xa48493(0x1f8)]=this[_0xa48493(0x225)];return;}}const _0x16f9b3=(this['_floatHeightMax']-this['_floatHeightMin'])/0x2,_0xc169a7=Graphics[_0xa48493(0x13b)]+this[_0xa48493(0x1d3)];this[_0xa48493(0x1f8)]=this['_floatHeightMin']+Math[_0xa48493(0x161)](_0xc169a7*this[_0xa48493(0x201)])*_0x16f9b3+_0x16f9b3;},Game_CharacterBase[_0x91b26b(0x253)]['sidestepX']=function(){const _0x309e52=_0x91b26b;if(!this[_0x309e52(0x205)])return 0x0;return Math[_0x309e52(0x222)](this['_sidestep']);},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x259)]=function(_0x2db3e3,_0x4ca50b,_0x37beea,_0x4e506c){const _0x35fff7=_0x91b26b;this[_0x35fff7(0x234)]=_0x4e506c,this['_sidestepChangeMinTarget']=_0x2db3e3,this[_0x35fff7(0x197)]=_0x4ca50b,this[_0x35fff7(0x252)]=_0x37beea,_0x4e506c<=0x0&&(this[_0x35fff7(0x170)]=this[_0x35fff7(0x162)],this[_0x35fff7(0x152)]=this[_0x35fff7(0x197)],this[_0x35fff7(0x17b)]=this[_0x35fff7(0x252)]);},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x23b)]=function(){const _0x43b17a=_0x91b26b;this[_0x43b17a(0x1b9)](),this[_0x43b17a(0x1a6)]();},Game_CharacterBase['prototype']['updateMapEventSidestepChange']=function(){const _0xba6f4e=_0x91b26b;if(!this[_0xba6f4e(0x234)])return;this[_0xba6f4e(0x170)]=this['_sidestepMin']||0x0,this[_0xba6f4e(0x152)]=this[_0xba6f4e(0x152)]||0x0,this[_0xba6f4e(0x17b)]=this[_0xba6f4e(0x17b)]||Game_Event[_0xba6f4e(0x179)][_0xba6f4e(0x218)]['floatSpeed'],this['_sidestepChangeMinTarget']=this[_0xba6f4e(0x162)]||0x0,this['_sidestepChangeMaxTarget']=this[_0xba6f4e(0x197)]||0x0,this[_0xba6f4e(0x252)]=this[_0xba6f4e(0x252)]||0x0;const _0x1c79fa=this[_0xba6f4e(0x234)];this[_0xba6f4e(0x170)]=(this[_0xba6f4e(0x170)]*(_0x1c79fa-0x1)+this[_0xba6f4e(0x162)])/_0x1c79fa,this[_0xba6f4e(0x152)]=(this[_0xba6f4e(0x152)]*(_0x1c79fa-0x1)+this[_0xba6f4e(0x197)])/_0x1c79fa,this[_0xba6f4e(0x17b)]=(this[_0xba6f4e(0x17b)]*(_0x1c79fa-0x1)+this[_0xba6f4e(0x252)])/_0x1c79fa,this[_0xba6f4e(0x234)]--,this[_0xba6f4e(0x234)]<=0x0&&(this[_0xba6f4e(0x170)]=this[_0xba6f4e(0x162)],this[_0xba6f4e(0x152)]=this[_0xba6f4e(0x197)],this['_sidestepSpeed']=this[_0xba6f4e(0x252)]);},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x1a6)]=function(){const _0x483d03=_0x91b26b;this[_0x483d03(0x205)]=this['_sidestep']||0x0,this[_0x483d03(0x170)]=this[_0x483d03(0x170)]||0x0,this['_sidestepMax']=this['_sidestepMax']||0x0,this[_0x483d03(0x17b)]=this[_0x483d03(0x17b)]||Game_Event[_0x483d03(0x179)][_0x483d03(0x218)]['sidestepSpeed'],this['_sidestepRng']=this[_0x483d03(0x24f)]||Math[_0x483d03(0x246)](0xf4240);if(this[_0x483d03(0x170)]===this[_0x483d03(0x152)]){this[_0x483d03(0x205)]=this[_0x483d03(0x170)];return;}const _0x408219=(this[_0x483d03(0x152)]-this['_sidestepMin'])/0x2,_0x15eeaa=Graphics[_0x483d03(0x13b)]+this[_0x483d03(0x24f)];this[_0x483d03(0x205)]=this[_0x483d03(0x170)]+Math[_0x483d03(0x161)](_0x15eeaa*this['_sidestepSpeed'])*_0x408219+_0x408219;},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x1e7)]=function(){const _0x314adf=_0x91b26b;this['_hue']=this[_0x314adf(0x150)]||0x0,this[_0x314adf(0x220)]=this[_0x314adf(0x220)]||0x0;if(this[_0x314adf(0x220)]!==0x0){if(_0x314adf(0x1ba)!==_0x314adf(0x1ba)){if(!this[_0x314adf(0x167)])return;const _0x2def0a=this['_tintDuration'],_0x478e4e=this[_0x314adf(0x1d7)],_0x1b9791=this['_tintTarget'];for(let _0x4766e9=0x0;_0x4766e9<=0x3;_0x4766e9++){_0x478e4e[_0x4766e9]=(_0x478e4e[_0x4766e9]*(_0x2def0a-0x1)+_0x1b9791[_0x4766e9])/_0x2def0a;}this[_0x314adf(0x167)]--;if(this[_0x314adf(0x167)]<=0x0)for(let _0x5c90ec=0x0;_0x5c90ec<=0x3;_0x5c90ec++){_0x478e4e[_0x5c90ec]=_0x1b9791[_0x5c90ec];}}else this[_0x314adf(0x150)]+=this['_hueUpdatePerFrame'];}},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x15a)]=function(){const _0x3cc741=_0x91b26b;if(!this[_0x3cc741(0x17c)])return 0x0;if(this[_0x3cc741(0x1a5)]===Graphics[_0x3cc741(0x13b)]){if(_0x3cc741(0x17f)!=='rhiJH')return this[_0x3cc741(0x183)]||0x0;else this['_shakePowerY']=_0x27ab8d(_0x1019c3['$1']);}else{if(_0x3cc741(0x1b1)!==_0x3cc741(0x1b1)){if(!_0x363de2['VisuMZ_0_CoreEngine'])return;if(!this['_repeatAnimation'])return;if(!this[_0x3cc741(0x247)]['id'])return;if(_0x25a092[_0x3cc741(0x13b)]%this[_0x3cc741(0x247)][_0x3cc741(0x212)]!==0x0)return;this[_0x3cc741(0x230)]();}else return this['_lastShakeGraphicsCountX']=Graphics['frameCount'],this[_0x3cc741(0x183)]=(Math['randomInt'](this[_0x3cc741(0x17c)])+0x1)*(Math[_0x3cc741(0x159)]()<0.5?-0x1:0x1),this['_lastShakeX'];}},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x178)]=function(){const _0x3823d7=_0x91b26b;if(!this[_0x3823d7(0x211)])return 0x0;return Math[_0x3823d7(0x246)](this[_0x3823d7(0x211)]);},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x168)]=function(){const _0x1f0198=_0x91b26b;this['initScaleBaseValues'](),this[_0x1f0198(0x24d)](),this[_0x1f0198(0x1e5)](),this['applyScaleBaseValues'](),this['applyBreathingScaleValues']();},Game_CharacterBase[_0x91b26b(0x253)]['initScaleBaseValues']=function(){const _0x4a712d=_0x91b26b;this['_scaleBaseX']=this['_scaleBaseX']??0x1,this[_0x4a712d(0x132)]=this[_0x4a712d(0x132)]??0x1;},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x158)]=function(_0x467d24,_0x537f0a,_0x22b818){const _0x36d8a7=_0x91b26b;this[_0x36d8a7(0x1f0)]=_0x22b818,this[_0x36d8a7(0x160)]=_0x467d24,this[_0x36d8a7(0x17d)]=_0x537f0a,_0x22b818<=0x0&&(this['_scaleBaseX']=this[_0x36d8a7(0x160)],this['_scaleBaseY']=this[_0x36d8a7(0x17d)]);},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x14c)]=function(_0x556c6c,_0x30a2a5,_0x18993f,_0x51505f,_0x36f9a2){const _0xfb83a1=_0x91b26b;this[_0xfb83a1(0x21e)]=_0x36f9a2,this[_0xfb83a1(0x13f)]=_0x556c6c,this[_0xfb83a1(0x190)]=_0x30a2a5,this[_0xfb83a1(0x13a)]=_0x18993f,this[_0xfb83a1(0x146)]=_0x51505f;if(_0x36f9a2<=0x0){if(_0xfb83a1(0x1ce)!=='AngBY'){if(!_0x5d599d[_0xfb83a1(0x182)]())return;_0xf3c498[_0xfb83a1(0x1f2)](_0x4d7e58,_0x574034);const _0x3b9a93=_0x576bae['getLastPluginCommandInterpreter'](),_0x25cf30=_0x165cce[_0xfb83a1(0x1ab)]||_0x3b9a93[_0xfb83a1(0x244)](),_0x458d14=_0x56c749[_0xfb83a1(0x1b7)](_0x25cf30);if(!_0x458d14)return;const _0x4b8fae=_0x41b667[_0xfb83a1(0x262)]||0x0,_0x595bb2=_0x4a96ca[_0xfb83a1(0x1b0)]||0x0,_0x38bcf3=_0x424a34[_0xfb83a1(0x265)]??(_0x458d14[_0xfb83a1(0x1a3)]||0.01),_0x11c839=_0x3fa951[_0xfb83a1(0x1e1)]??(_0x458d14['_breathingSpeedY']||0.01),_0xdd109c=_0x2f4b41[_0xfb83a1(0x1a7)]??0x0;_0x458d14[_0xfb83a1(0x14c)](_0x4b8fae,_0x595bb2,_0x38bcf3,_0x11c839,_0xdd109c);}else this['_breathingRateX']=this[_0xfb83a1(0x13f)],this[_0xfb83a1(0x187)]=this[_0xfb83a1(0x190)],this[_0xfb83a1(0x1a3)]=this['_breathingChangeSpeedX'],this[_0xfb83a1(0x26d)]=this[_0xfb83a1(0x146)];}},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x24d)]=function(){const _0x36deeb=_0x91b26b;if(!this[_0x36deeb(0x1f0)])return;this['_scaleBaseTargetX']=this[_0x36deeb(0x160)]??this[_0x36deeb(0x26f)],this[_0x36deeb(0x17d)]=this[_0x36deeb(0x17d)]??this[_0x36deeb(0x132)];const _0x1a5ba8=this[_0x36deeb(0x1f0)];this[_0x36deeb(0x26f)]=(this['_scaleBaseX']*(_0x1a5ba8-0x1)+this['_scaleBaseTargetX'])/_0x1a5ba8,this['_scaleBaseY']=(this[_0x36deeb(0x132)]*(_0x1a5ba8-0x1)+this[_0x36deeb(0x17d)])/_0x1a5ba8,this['_scaleBaseDuration']--,this[_0x36deeb(0x1f0)]<=0x0&&(this[_0x36deeb(0x26f)]=this[_0x36deeb(0x160)],this[_0x36deeb(0x132)]=this['_scaleBaseTargetY']);},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x1e5)]=function(){const _0x4ca026=_0x91b26b;if(!this[_0x4ca026(0x21e)])return;this[_0x4ca026(0x13f)]=this[_0x4ca026(0x13f)]??this[_0x4ca026(0x20f)],this[_0x4ca026(0x190)]=this[_0x4ca026(0x190)]??this['_breathingRateY'],this[_0x4ca026(0x13a)]=this[_0x4ca026(0x13a)]??this[_0x4ca026(0x1a3)],this[_0x4ca026(0x146)]=this[_0x4ca026(0x146)]??this[_0x4ca026(0x26d)];const _0xa4784d=this[_0x4ca026(0x21e)];this[_0x4ca026(0x20f)]=(this[_0x4ca026(0x20f)]*(_0xa4784d-0x1)+this[_0x4ca026(0x13f)])/_0xa4784d,this['_breathingRateY']=(this['_breathingRateY']*(_0xa4784d-0x1)+this[_0x4ca026(0x190)])/_0xa4784d,this['_breathingSpeedX']=(this['_breathingSpeedX']*(_0xa4784d-0x1)+this[_0x4ca026(0x13a)])/_0xa4784d,this['_breathingSpeedY']=(this[_0x4ca026(0x26d)]*(_0xa4784d-0x1)+this[_0x4ca026(0x146)])/_0xa4784d,this[_0x4ca026(0x21e)]--,this[_0x4ca026(0x1f0)]<=0x0&&('NZfKc'===_0x4ca026(0x164)?(this[_0x4ca026(0x20f)]=this[_0x4ca026(0x13f)],this[_0x4ca026(0x187)]=this[_0x4ca026(0x190)],this['_breathingSpeedX']=this[_0x4ca026(0x13a)],this[_0x4ca026(0x26d)]=this[_0x4ca026(0x146)]):(this['_scaleBaseX']=this[_0x4ca026(0x160)],this[_0x4ca026(0x132)]=this[_0x4ca026(0x17d)]));},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x16c)]=function(){const _0x55ea6a=_0x91b26b;this['_scaleX']=this['_scaleBaseX'],this[_0x55ea6a(0x194)]=this[_0x55ea6a(0x132)];},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x1e3)]=function(){const _0x5d0043=_0x91b26b;this['_scaleX']+=VisuMZ[_0x5d0043(0x1fd)][_0x5d0043(0x13c)](this[_0x5d0043(0x20f)],this['_breathingSpeedX'],this['_breathingRngX']),this['_scaleY']+=VisuMZ['MapEventEffects'][_0x5d0043(0x13c)](this[_0x5d0043(0x187)],this[_0x5d0043(0x26d)],this['_breathingRngY']);},VisuMZ[_0x91b26b(0x1fd)]['applyBreathingCalculations']=function(_0x2bac6b,_0x1e11fa,_0x56434d){const _0x4b9e3=_0x91b26b;if(_0x2bac6b===0x0)return 0x0;const _0x5f58c0=Graphics[_0x4b9e3(0x13b)]+_0x56434d;return Math[_0x4b9e3(0x161)](_0x5f58c0*_0x1e11fa)*_0x2bac6b;},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x1f5)]=function(_0x4f2d76,_0x4d6b2d){const _0x1cf879=_0x91b26b;this[_0x1cf879(0x167)]=_0x4d6b2d,this[_0x1cf879(0x23a)]=_0x4f2d76[_0x1cf879(0x16d)](0x0),_0x4d6b2d<=0x0&&(this[_0x1cf879(0x1d7)]=this[_0x1cf879(0x23a)][_0x1cf879(0x15d)]());},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x14d)]=function(){const _0x5632ae=_0x91b26b;if(!this[_0x5632ae(0x167)])return;const _0x3f18e7=this[_0x5632ae(0x167)],_0x3e56bb=this[_0x5632ae(0x1d7)],_0x507f7b=this[_0x5632ae(0x23a)];for(let _0xe0c425=0x0;_0xe0c425<=0x3;_0xe0c425++){_0x5632ae(0x1d2)!==_0x5632ae(0x1d2)?(this[_0x5632ae(0x1e6)](),this['updateMapEventSidestep'](),this[_0x5632ae(0x1e7)](),this[_0x5632ae(0x14d)](),this[_0x5632ae(0x1e0)](),this[_0x5632ae(0x1a9)]()):_0x3e56bb[_0xe0c425]=(_0x3e56bb[_0xe0c425]*(_0x3f18e7-0x1)+_0x507f7b[_0xe0c425])/_0x3f18e7;}this[_0x5632ae(0x167)]--;if(this[_0x5632ae(0x167)]<=0x0)for(let _0x55ff28=0x0;_0x55ff28<=0x3;_0x55ff28++){_0x3e56bb[_0x55ff28]=_0x507f7b[_0x55ff28];}},Game_CharacterBase[_0x91b26b(0x253)]['startMapEventFlashChange']=function(_0x3f8a49,_0x1bad6e,_0x45225e){const _0x2793c1=_0x91b26b;this[_0x2793c1(0x223)]=_0x45225e,_0x45225e===0x0?(this[_0x2793c1(0x14b)]=_0x1bad6e,this[_0x2793c1(0x1bf)]=_0x3f8a49[_0x2793c1(0x16d)](0x0)):(this['_flashWholeDuration']=_0x1bad6e,this['_flashStart']=_0x3f8a49['slice'](0x0));},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x1e0)]=function(){const _0x2e63a8=_0x91b26b;this[_0x2e63a8(0x1b3)](),this[_0x2e63a8(0x26c)]();},Game_CharacterBase['prototype'][_0x91b26b(0x1b3)]=function(){const _0x14e271=_0x91b26b;if(!this['_flashCycle'])return;this[_0x14e271(0x223)]=this[_0x14e271(0x223)]??Math[_0x14e271(0x19f)](Game_Event[_0x14e271(0x179)][_0x14e271(0x218)][_0x14e271(0x17e)],0x1);if(Graphics[_0x14e271(0x13b)]%this[_0x14e271(0x223)]!==0x0)return;this[_0x14e271(0x1bf)]=this[_0x14e271(0x1b6)][_0x14e271(0x16d)](0x0),this[_0x14e271(0x14b)]=this[_0x14e271(0x137)];},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x26c)]=function(){const _0x39f9bd=_0x91b26b;if(!this[_0x39f9bd(0x14b)])return;const _0x139dfb=this[_0x39f9bd(0x14b)],_0x477a7c=this[_0x39f9bd(0x1bf)];_0x477a7c[0x3]=(_0x477a7c[0x3]*(_0x139dfb-0x1)+0x0)/_0x139dfb,this['_flashDuration']--,this['_flashDuration']<=0x0&&(this[_0x39f9bd(0x1bf)]=[0x0,0x0,0x0,0x0]);},Game_CharacterBase['prototype'][_0x91b26b(0x1db)]=function(_0x2431c6,_0x4705e7,_0x39dfbd,_0xcd98dd){const _0x502a45=_0x91b26b;this[_0x502a45(0x247)]={'id':_0x2431c6,'cycle':_0x4705e7??Game_Event[_0x502a45(0x179)][_0x502a45(0x218)][_0x502a45(0x1aa)],'mirror':_0x39dfbd??Game_Event[_0x502a45(0x179)][_0x502a45(0x218)][_0x502a45(0x263)],'mute':_0xcd98dd??Game_Event['MAP_EVENT_EFFECTS']['default'][_0x502a45(0x1bc)]};},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x1a9)]=function(){const _0x332e80=_0x91b26b;if(!Imported[_0x332e80(0x1c2)])return;if(!this['_repeatAnimation'])return;if(!this['_repeatAnimation']['id'])return;if(Graphics['frameCount']%this['_repeatAnimation']['cycle']!==0x0)return;this['processMapEventRepeatAnimation']();},Game_CharacterBase[_0x91b26b(0x253)][_0x91b26b(0x230)]=function(){const _0x295849=_0x91b26b,_0x526ef4=this['_repeatAnimation'];$gameTemp['requestFauxAnimation']([this],_0x526ef4['id'],_0x526ef4[_0x295849(0x134)],_0x526ef4[_0x295849(0x1fa)]);},Game_Event[_0x91b26b(0x179)]={'default':{'floatSpeed':VisuMZ[_0x91b26b(0x1fd)][_0x91b26b(0x23f)][_0x91b26b(0x15b)]??0.04,'sidestepSpeed':VisuMZ['MapEventEffects']['Settings'][_0x91b26b(0x1df)]??0.04,'breathingSpeedX':VisuMZ['MapEventEffects'][_0x91b26b(0x23f)]['breathingSpeedX']??0.08,'breathingSpeedY':VisuMZ[_0x91b26b(0x1fd)][_0x91b26b(0x23f)][_0x91b26b(0x25c)]??0.08,'flashDuration':VisuMZ[_0x91b26b(0x1fd)]['Settings'][_0x91b26b(0x149)]??0x14,'flashCycle':VisuMZ[_0x91b26b(0x1fd)][_0x91b26b(0x23f)][_0x91b26b(0x17e)]??0x3c,'repeatAniCycle':VisuMZ[_0x91b26b(0x1fd)][_0x91b26b(0x23f)][_0x91b26b(0x1aa)]??0x3c,'repeatAniMirror':VisuMZ['MapEventEffects'][_0x91b26b(0x23f)][_0x91b26b(0x263)]??![],'repeatAniMute':VisuMZ[_0x91b26b(0x1fd)]['Settings'][_0x91b26b(0x1bc)]??!![]},'floatHeightChangeZ':VisuMZ[_0x91b26b(0x1fd)]['Settings'][_0x91b26b(0x19e)]??0x2a},VisuMZ['MapEventEffects'][_0x91b26b(0x157)]=Game_Event[_0x91b26b(0x253)][_0x91b26b(0x271)],Game_Event[_0x91b26b(0x253)][_0x91b26b(0x271)]=function(){const _0x111eed=_0x91b26b;VisuMZ[_0x111eed(0x1fd)][_0x111eed(0x157)][_0x111eed(0x198)](this),this[_0x111eed(0x19b)]();},VisuMZ[_0x91b26b(0x1fd)][_0x91b26b(0x1b4)]=Game_Event['prototype'][_0x91b26b(0x228)],Game_Event[_0x91b26b(0x253)][_0x91b26b(0x228)]=function(){const _0xf31b6a=_0x91b26b;VisuMZ['MapEventEffects']['Game_Event_setupPageSettings'][_0xf31b6a(0x198)](this),this['setupMapEventEffectsEffects']();},Game_Event['prototype'][_0x91b26b(0x1fe)]=function(){const _0x2e5906=_0x91b26b;if(!this[_0x2e5906(0x1b7)]())return;this[_0x2e5906(0x19b)](),this[_0x2e5906(0x13e)](),this[_0x2e5906(0x135)]();},Game_Event['prototype'][_0x91b26b(0x13e)]=function(){const _0x32a7f3=_0x91b26b,_0x58d458=this[_0x32a7f3(0x1b7)]()['note'];if(_0x58d458==='')return;this['checkMapEventEffectsStringTags'](_0x58d458);},Game_Event[_0x91b26b(0x253)][_0x91b26b(0x135)]=function(){const _0x54011d=_0x91b26b;if(!this['page']())return;const _0x257be6=this[_0x54011d(0x1ee)]();let _0x4c240c='';for(const _0x1c905c of _0x257be6){if(_0x54011d(0x21c)!==_0x54011d(0x1fb)){if([0x6c,0x198][_0x54011d(0x1a2)](_0x1c905c[_0x54011d(0x174)])){if(_0x4c240c!=='')_0x4c240c+='\x0a';_0x4c240c+=_0x1c905c[_0x54011d(0x136)][0x0];}}else this[_0x54011d(0x168)]();}this[_0x54011d(0x177)](_0x4c240c);},Game_Event[_0x91b26b(0x253)][_0x91b26b(0x177)]=function(_0x51c510){const _0xbdaeaf=_0x91b26b,_0x4c8112=VisuMZ[_0xbdaeaf(0x1fd)][_0xbdaeaf(0x1a1)];if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x204)]))this[_0xbdaeaf(0x1f8)]=Number(RegExp['$1']),this[_0xbdaeaf(0x225)]=this['_floatHeight'],this[_0xbdaeaf(0x243)]=this[_0xbdaeaf(0x1f8)],this[_0xbdaeaf(0x23d)]=this[_0xbdaeaf(0x225)],this['_floatChangeMaxTarget']=this['_floatHeightMax'];else{if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x238)])){const _0x845513=Number(RegExp['$1']),_0x21e979=Number(RegExp['$2']);this[_0xbdaeaf(0x1f8)]=Math[_0xbdaeaf(0x24a)](_0x845513,_0x21e979),this[_0xbdaeaf(0x225)]=Math[_0xbdaeaf(0x24a)](_0x845513,_0x21e979),this['_floatHeightMax']=Math[_0xbdaeaf(0x19f)](_0x845513,_0x21e979),this[_0xbdaeaf(0x23d)]=this[_0xbdaeaf(0x225)],this[_0xbdaeaf(0x193)]=this[_0xbdaeaf(0x243)];}}_0x51c510['match'](_0x4c8112[_0xbdaeaf(0x226)])&&(this[_0xbdaeaf(0x201)]=Number(RegExp['$1']),this[_0xbdaeaf(0x215)]=this[_0xbdaeaf(0x201)]);if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x267)]))this[_0xbdaeaf(0x1d3)]=Math[_0xbdaeaf(0x246)](0xf4240);else _0x51c510['match'](_0x4c8112[_0xbdaeaf(0x203)])&&(this[_0xbdaeaf(0x1d3)]=Number(RegExp['$1']));if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112['Sidestep']))this[_0xbdaeaf(0x205)]=Number(RegExp['$1']),this[_0xbdaeaf(0x170)]=this[_0xbdaeaf(0x205)],this[_0xbdaeaf(0x152)]=this[_0xbdaeaf(0x205)],this[_0xbdaeaf(0x162)]=this[_0xbdaeaf(0x170)],this[_0xbdaeaf(0x197)]=this[_0xbdaeaf(0x152)];else{if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x21d)])){if(_0xbdaeaf(0x1ec)===_0xbdaeaf(0x260))this[_0xbdaeaf(0x168)]();else{const _0x857d15=Number(RegExp['$1']),_0x225661=Number(RegExp['$2']);this[_0xbdaeaf(0x205)]=Math[_0xbdaeaf(0x24a)](_0x857d15,_0x225661),this[_0xbdaeaf(0x170)]=Math[_0xbdaeaf(0x24a)](_0x857d15,_0x225661),this[_0xbdaeaf(0x152)]=Math[_0xbdaeaf(0x19f)](_0x857d15,_0x225661),this['_sidestepChangeMinTarget']=this[_0xbdaeaf(0x170)],this['_sidestepChangeMaxTarget']=this[_0xbdaeaf(0x152)];}}}_0x51c510['match'](_0x4c8112[_0xbdaeaf(0x192)])&&(this[_0xbdaeaf(0x17b)]=Number(RegExp['$1']),this['_sidestepChangeSpeedTarget']=this[_0xbdaeaf(0x17b)]);if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x207)]))this[_0xbdaeaf(0x24f)]=Math[_0xbdaeaf(0x246)](0xf4240);else _0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x181)])&&(this['_sidestepRng']=Number(RegExp['$1']));if(_0x51c510['match'](_0x4c8112[_0xbdaeaf(0x1c9)]))_0xbdaeaf(0x219)===_0xbdaeaf(0x14a)?this[_0xbdaeaf(0x24f)]=_0x2cd805['randomInt'](0xf4240):this[_0xbdaeaf(0x150)]=Number(RegExp['$1']);else{if(_0x51c510['match'](_0x4c8112[_0xbdaeaf(0x1d5)]))this['_hue']=Math[_0xbdaeaf(0x246)](0x168);else{if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x261)])){if('lEUtR'!==_0xbdaeaf(0x189))this[_0xbdaeaf(0x225)]=this[_0xbdaeaf(0x23d)],this[_0xbdaeaf(0x243)]=this[_0xbdaeaf(0x193)],this[_0xbdaeaf(0x201)]=this[_0xbdaeaf(0x215)];else{const _0xe9b85b=Number(RegExp['$1']),_0x2ca9f8=Number(RegExp['$2']),_0x84e0ad=Math[_0xbdaeaf(0x24a)](_0xe9b85b,_0x2ca9f8),_0x44266d=Math[_0xbdaeaf(0x19f)](_0xe9b85b,_0x2ca9f8),_0x34f91a=_0x44266d-_0x84e0ad;this[_0xbdaeaf(0x150)]=_0x84e0ad+Math[_0xbdaeaf(0x246)](_0x34f91a+0x1);}}}}_0x51c510[_0xbdaeaf(0x236)](_0x4c8112['HueUpdatePerFrame'])&&(this[_0xbdaeaf(0x220)]=Number(RegExp['$1']));_0x51c510['match'](_0x4c8112['ShakePowerX'])&&(_0xbdaeaf(0x20b)!=='PrSgS'?_0x13a075[_0xbdaeaf(0x1c8)]():this[_0xbdaeaf(0x17c)]=Number(RegExp['$1']));_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x138)])&&(this[_0xbdaeaf(0x211)]=Number(RegExp['$1']));_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x21a)])&&(this[_0xbdaeaf(0x17c)]=Number(RegExp['$1']),this[_0xbdaeaf(0x211)]=this['_shakePowerX']);_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x140)])&&(this['_scaleBaseX']=Number(RegExp['$1'])*0.01,this['_scaleBaseTargetX']=this[_0xbdaeaf(0x26f)]);_0x51c510[_0xbdaeaf(0x236)](_0x4c8112['ScaleBaseY'])&&(this[_0xbdaeaf(0x132)]=Number(RegExp['$1'])*0.01,this[_0xbdaeaf(0x17d)]=this['_scaleBaseY']);if(_0x51c510['match'](_0x4c8112[_0xbdaeaf(0x154)])){const _0x48f618=Number(RegExp['$1'])*0.01;this['_scaleBaseX']=_0x48f618,this[_0xbdaeaf(0x132)]=_0x48f618,this[_0xbdaeaf(0x160)]=this[_0xbdaeaf(0x26f)],this['_scaleBaseTargetY']=this[_0xbdaeaf(0x132)];}_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x16f)])&&('WyMAH'!==_0xbdaeaf(0x216)?(this[_0xbdaeaf(0x20f)]=Number(RegExp['$1'])*0.01,this[_0xbdaeaf(0x13f)]=this[_0xbdaeaf(0x20f)]):this['_repeatAnimation'][_0xbdaeaf(0x1fa)]=!![]);if(_0x51c510['match'](_0x4c8112[_0xbdaeaf(0x1f1)])){if(_0xbdaeaf(0x25f)==='KKAMM')this[_0xbdaeaf(0x187)]=Number(RegExp['$1'])*0.01,this[_0xbdaeaf(0x190)]=this[_0xbdaeaf(0x187)];else{const _0x889929=_0x590c07(_0x5d17ce['$1']);this[_0xbdaeaf(0x1a3)]=_0x889929,this[_0xbdaeaf(0x26d)]=_0x889929,this[_0xbdaeaf(0x13a)]=this[_0xbdaeaf(0x1a3)],this['_breathingChangeSpeedY']=this[_0xbdaeaf(0x26d)];}}if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x144)])){if(_0xbdaeaf(0x18a)===_0xbdaeaf(0x15c))this[_0xbdaeaf(0x137)]=_0x46d867[_0xbdaeaf(0x19f)](_0xdffa64(_0x556c70['$1']),0x1),this['_flashCycle']=_0x55525f[_0xbdaeaf(0x19f)](_0x1997b9[_0xbdaeaf(0x179)][_0xbdaeaf(0x218)][_0xbdaeaf(0x17e)],0x1);else{const _0x5c151a=Number(RegExp['$1'])*0.01;this['_breathingRateX']=_0x5c151a,this[_0xbdaeaf(0x187)]=_0x5c151a,this[_0xbdaeaf(0x13f)]=this['_breathingRateX'],this['_breathingChangeTargetY']=this[_0xbdaeaf(0x187)];}}_0x51c510[_0xbdaeaf(0x236)](_0x4c8112['BreathSpeedX'])&&(_0xbdaeaf(0x19c)===_0xbdaeaf(0x251)?(_0x1e47b8(_0xbdaeaf(0x1b8)[_0xbdaeaf(0x19a)](_0x4834d5,_0x3ea42e)),_0x595460[_0xbdaeaf(0x148)]()):(this[_0xbdaeaf(0x1a3)]=Number(RegExp['$1']),this[_0xbdaeaf(0x13a)]=this['_breathingSpeedX']));_0x51c510['match'](_0x4c8112[_0xbdaeaf(0x233)])&&(this[_0xbdaeaf(0x26d)]=Number(RegExp['$1']),this[_0xbdaeaf(0x146)]=this['_breathingSpeedY']);if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x186)])){const _0x2c8a48=Number(RegExp['$1']);this[_0xbdaeaf(0x1a3)]=_0x2c8a48,this[_0xbdaeaf(0x26d)]=_0x2c8a48,this['_breathingChangeSpeedX']=this[_0xbdaeaf(0x1a3)],this[_0xbdaeaf(0x146)]=this[_0xbdaeaf(0x26d)];}if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x20c)]))'kOfom'!==_0xbdaeaf(0x1ae)?(!_0xe186a0[_0xbdaeaf(0x24b)]&&this[_0xbdaeaf(0x168)](),_0x3787f6[_0xbdaeaf(0x1fd)][_0xbdaeaf(0x23e)][_0xbdaeaf(0x198)](this),this[_0xbdaeaf(0x206)]()):this[_0xbdaeaf(0x139)]=Math[_0xbdaeaf(0x246)](0xf4240);else _0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x1a8)])&&(this['_breathingRngX']=Number(RegExp['$1']));if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x1dc)]))this[_0xbdaeaf(0x1b5)]=Math['randomInt'](0xf4240);else _0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x24e)])&&(this[_0xbdaeaf(0x1b5)]=Number(RegExp['$1']));if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x12a)]))this[_0xbdaeaf(0x139)]=Math[_0xbdaeaf(0x246)](0xf4240),this['_breathingRngY']=Math[_0xbdaeaf(0x246)](0xf4240);else{if(_0x51c510['match'](_0x4c8112['BreathStaticBoth'])){const _0x5e1fe3=Number(RegExp['$1']);this[_0xbdaeaf(0x139)]=_0x5e1fe3,this['_breathingRngY']=_0x5e1fe3;}}if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112['TintColor'])){if(_0xbdaeaf(0x153)!==_0xbdaeaf(0x1b2)){const _0x22b56c=RegExp['$1'][_0xbdaeaf(0x196)](',')[_0xbdaeaf(0x1c6)](_0x26f0e4=>Number(_0x26f0e4));_0x22b56c[0x0]=(_0x22b56c[0x0]||0x0)[_0xbdaeaf(0x1e2)](-0xff,0xff),_0x22b56c[0x1]=(_0x22b56c[0x1]||0x0)[_0xbdaeaf(0x1e2)](-0xff,0xff),_0x22b56c[0x2]=(_0x22b56c[0x2]||0x0)[_0xbdaeaf(0x1e2)](-0xff,0xff),_0x22b56c[0x3]=(_0x22b56c[0x3]||0x0)[_0xbdaeaf(0x1e2)](0x0,0xff),this[_0xbdaeaf(0x1d7)]=_0x22b56c[_0xbdaeaf(0x16d)](0x0),this[_0xbdaeaf(0x23a)]=_0x22b56c['slice'](0x0);}else{if(!_0x2ec48f[_0xbdaeaf(0x182)]())return;_0x47fe8d['ConvertParams'](_0x2c3b74,_0x2fa9e6);const _0x49ecb2=_0x380d0b['getLastPluginCommandInterpreter'](),_0x3d4040=_0x5324dd['EventID']||_0x49ecb2['eventId'](),_0x3b7b99=_0x1b4b5b[_0xbdaeaf(0x1b7)](_0x3d4040);if(!_0x3b7b99)return;const _0x2ec50e=_0x3f00ee[_0xbdaeaf(0x24a)](_0x3e4b97[_0xbdaeaf(0x1e8)]||0x0,_0x130e62[_0xbdaeaf(0x1bb)]||0x0),_0x30ef16=_0x52fd5d[_0xbdaeaf(0x19f)](_0x1d0703['SidestepMin']||0x0,_0x556abe[_0xbdaeaf(0x1bb)]||0x0),_0x4835d5=_0x550b51[_0xbdaeaf(0x192)]??(_0x3b7b99[_0xbdaeaf(0x17b)]||0.01),_0x2b2a70=_0xcbf4e3[_0xbdaeaf(0x1a7)]??0x0;_0x3b7b99[_0xbdaeaf(0x259)](_0x2ec50e,_0x30ef16,_0x4835d5,_0x2b2a70);}}if(_0x51c510[_0xbdaeaf(0x236)](_0x4c8112['FlashColor'])){const _0x205188=RegExp['$1']['split'](',')[_0xbdaeaf(0x1c6)](_0x22802c=>Number(_0x22802c));_0x205188[0x0]=(_0x205188[0x0]||0x0)[_0xbdaeaf(0x1e2)](0x0,0xff),_0x205188[0x1]=(_0x205188[0x1]||0x0)[_0xbdaeaf(0x1e2)](0x0,0xff),_0x205188[0x2]=(_0x205188[0x2]||0x0)[_0xbdaeaf(0x1e2)](0x0,0xff),_0x205188[0x3]=(_0x205188[0x3]||0x0)[_0xbdaeaf(0x1e2)](0x0,0xff),this[_0xbdaeaf(0x1bf)]=_0x205188[_0xbdaeaf(0x16d)](0x0),this[_0xbdaeaf(0x1b6)]=_0x205188['slice'](0x0),this['_flashCycle']=Math[_0xbdaeaf(0x19f)](Game_Event[_0xbdaeaf(0x179)]['default'][_0xbdaeaf(0x17e)],0x1);}_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x217)])&&(this['_flashWholeDuration']=Math[_0xbdaeaf(0x19f)](Number(RegExp['$1']),0x1),this[_0xbdaeaf(0x223)]=Math[_0xbdaeaf(0x19f)](Game_Event['MAP_EVENT_EFFECTS'][_0xbdaeaf(0x218)][_0xbdaeaf(0x17e)],0x1));_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x268)])&&(this[_0xbdaeaf(0x223)]=Math['max'](Number(RegExp['$1']),0x1));if(Imported[_0xbdaeaf(0x1c2)]){if(_0xbdaeaf(0x1cc)!==_0xbdaeaf(0x1cc)){if(!this['_character'][_0xbdaeaf(0x1bf)])return;this['setBlendColor'](this['_character'][_0xbdaeaf(0x1bf)]);}else{_0x51c510[_0xbdaeaf(0x236)](_0x4c8112['RepeatAni'])&&(this['_repeatAnimation']['id']=Number(RegExp['$1'])||0x0);_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x258)])&&('DmgLb'===_0xbdaeaf(0x175)?_0x264bfc[_0x1c6236]=_0x424566[_0x46f975]:this[_0xbdaeaf(0x247)]['cycle']=Number(RegExp['$1'])||0x1);if(_0x51c510['match'](_0x4c8112[_0xbdaeaf(0x163)])){if(_0xbdaeaf(0x208)===_0xbdaeaf(0x208))this[_0xbdaeaf(0x247)][_0xbdaeaf(0x134)]=!![];else{if(!_0x406be5[_0xbdaeaf(0x182)]())return;_0x2d7a28[_0xbdaeaf(0x1f2)](_0x3aafa1,_0x7d11d);const _0x348059=_0x2dd911,_0x2147f6=_0x55797a[_0xbdaeaf(0x24a)](_0x5db6fa[_0xbdaeaf(0x1e8)]||0x0,_0x546eef[_0xbdaeaf(0x1bb)]||0x0),_0x46af82=_0x338103[_0xbdaeaf(0x19f)](_0xac5380[_0xbdaeaf(0x1e8)]||0x0,_0xd07d4d[_0xbdaeaf(0x1bb)]||0x0),_0x3d613b=_0x42dd88[_0xbdaeaf(0x192)]??(_0x348059[_0xbdaeaf(0x17b)]||0.01),_0x1fa97a=_0x2e49ae[_0xbdaeaf(0x1a7)]??0x0;_0x348059[_0xbdaeaf(0x259)](_0x2147f6,_0x46af82,_0x3d613b,_0x1fa97a);}}_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x1fc)])&&(this[_0xbdaeaf(0x247)][_0xbdaeaf(0x134)]=![]),_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x176)])&&(this[_0xbdaeaf(0x247)][_0xbdaeaf(0x1fa)]=!![]),_0x51c510[_0xbdaeaf(0x236)](_0x4c8112[_0xbdaeaf(0x16e)])&&(_0xbdaeaf(0x18e)==='exYbs'?this[_0xbdaeaf(0x247)]['mute']=![]:(this[_0xbdaeaf(0x210)](),this['updateMapEventFloatHeight']()));}}},VisuMZ[_0x91b26b(0x1fd)][_0x91b26b(0x1f4)]=Sprite_Character[_0x91b26b(0x253)][_0x91b26b(0x20e)],Sprite_Character[_0x91b26b(0x253)][_0x91b26b(0x20e)]=function(){const _0x10e731=_0x91b26b;!Imported[_0x10e731(0x24b)]&&this[_0x10e731(0x168)](),VisuMZ[_0x10e731(0x1fd)][_0x10e731(0x1f4)][_0x10e731(0x198)](this);},Sprite_Character[_0x91b26b(0x253)]['updateScaleBase']=function(){const _0x2eb9ad=_0x91b26b;if(Imported['VisuMZ_4_UniqueTileEffects']){if(this['_pitfallDuration']>0x0)return;}this[_0x2eb9ad(0x240)]['x']=this['_character'][_0x2eb9ad(0x255)]??0x1,this[_0x2eb9ad(0x240)]['y']=this[_0x2eb9ad(0x256)][_0x2eb9ad(0x194)]??0x1;},VisuMZ['MapEventEffects'][_0x91b26b(0x22a)]=Sprite_Character[_0x91b26b(0x253)][_0x91b26b(0x173)],Sprite_Character['prototype'][_0x91b26b(0x173)]=function(){const _0x37ae57=_0x91b26b;VisuMZ[_0x37ae57(0x1fd)][_0x37ae57(0x22a)][_0x37ae57(0x198)](this),this[_0x37ae57(0x256)]&&!this[_0x37ae57(0x256)][_0x37ae57(0x254)]&&this['updateMapEventEffects']();},Sprite_Character[_0x91b26b(0x253)]['updateMapEventEffects']=function(){const _0xcb1992=_0x91b26b;this[_0xcb1992(0x13d)](),this['updateMapEventTint'](),this[_0xcb1992(0x1f7)]();},Sprite_Character['prototype']['updateMapEventHue']=function(){const _0x2f2367=_0x91b26b;if(this[_0x2f2367(0x1d1)]===this['_character'][_0x2f2367(0x150)])return;this[_0x2f2367(0x1d1)]=this[_0x2f2367(0x256)]['_hue'],this[_0x2f2367(0x1ed)](this[_0x2f2367(0x1d1)]);},Sprite_Character[_0x91b26b(0x253)][_0x91b26b(0x1dd)]=function(){const _0x253312=_0x91b26b;if(!this[_0x253312(0x256)]['_tintCurrent'])return;this[_0x253312(0x250)](this[_0x253312(0x256)][_0x253312(0x1d7)]);},Sprite_Character['prototype'][_0x91b26b(0x1f7)]=function(){const _0x2bb0ed=_0x91b26b;if(!this[_0x2bb0ed(0x256)][_0x2bb0ed(0x1bf)])return;this[_0x2bb0ed(0x264)](this['_character'][_0x2bb0ed(0x1bf)]);};