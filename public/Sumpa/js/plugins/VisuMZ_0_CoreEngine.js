//=============================================================================
// VisuStella MZ - Core Engine
// VisuMZ_0_CoreEngine.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_0_CoreEngine = true;

var VisuMZ = VisuMZ || {};
VisuMZ.CoreEngine = VisuMZ.CoreEngine || {};
VisuMZ.CoreEngine.version = 1.84;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 0] [Version 1.84] [CoreEngine]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Core_Engine_VisuStella_MZ
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Core Engine plugin is designed to fix any bugs that may have slipped
 * past RPG Maker MZ's source code and to give game devs more control over
 * RPG Maker MZ's various features, ranging from mechanics to aesthetics to
 * quality of life improvements.
 *
 * Features include all (but not limited to) the following:
 *
 * * Bug fixes for the problems existing in the RPG Maker MZ base code.
 * * Failsafes added for Script Call related event commands.
 * * Lots of Quality of Life Settings that can be activated through the
 *   Plugin Parameters.
 * * Control over the various Text Colors used throughout the game.
 * * Change up the maximum amount of gold carried, give it an icon attached to
 *   the label, and include text for overlap specifics.
 * * Preload images as the game boots up.
 * * Add specific background images for menus found throughout the game.
 * * A button assist window will appear at the top or bottom of the screen,
 *   detailing which buttons do what when inside a menu. This feature can be
 *   turned off.
 * * Choose which in-game battler parameters to display inside menus (ie ATK,
 *   DEF, AGI, etc.) and determine their maximum values, along with plenty of
 *   notetags to give more control over parameter, x-parameter, s-parameter
 *   bonuses through equipment, states, and other trait objects.
 * * Control over how the UI objects appear (such as the menu button, cancel
 *   button, left/right actor switch buttons).
 * * Reposition actors and enemies if the battle resolution is larger.
 * * Allow class names and nicknames to support text codes when displayed.
 * * Determine how windows behave in the game, if they will mask other windows,
 *   their line height properties, and more.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 0 ------
 *
 * This plugin is a Tier 0 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ Plugin library.
 *
 * ============================================================================
 * Important Changes: Bug Fixes
 * ============================================================================
 *
 * This plugin also serves to fix various bugs found in RPG Maker MZ that have
 * been unaddressed or not yet taken care of. The following is a list of bugs
 * that have been fixed by this plugin:
 *
 * ---
 *
 * Attack Skill Trait
 *
 * Enemies are unaffected by the Attack Skill Trait. This means if they have
 * an Attack action, they will always use Attack over and over even if their
 * Attack Skill Trait has been changed. This plugin will change it up so that
 * the Attack skill will comply with whatever their Attack Skill Trait's skill
 * is set to.
 *
 * ---
 *
 * Auto Battle Actor Skill Usage
 *
 * If an actor with Auto Battle has access to a skill but not have any access
 * to that skill's type, that actor will still be able to use the skill during
 * Auto Battle despite the fact that the actor cannot use that skill during
 * manual input.
 *
 * ---
 * 
 * Auto Battle Attack Seal Bypass
 * 
 * By default, if the attack skill is sealed via a trait and an actor has
 * auto-battle, the action can still be used via auto-battle. This is now fixed
 * and actors should not be able to attack via auto-battle if their attack
 * ability is sealed.
 * 
 * ---
 * 
 * Auto Battle Lock Up
 * 
 * If an auto battle Actor fights against an enemy whose DEF/MDF is too high,
 * they will not use any actions at all. This can cause potential game freezing
 * and softlocks. This plugin will change that and have them default to a
 * regular Attack.
 * 
 * ---
 * 
 * Auto Save After New Game
 * 
 * Normally, when starting a new game through the "New Game" option, there is
 * no auto save trigger. However, if you start a new game or load a saved game,
 * then go to the Game End screen, return back to the title screen, then start
 * a New Game, the auto save trigger occurs when it shouldn't. The Core Engine
 * will now patch this and prevent the trigger from taking place.
 * 
 * ---
 * 
 * Battle Forced End Action Crash
 * 
 * Depending on various circumstances, currently active battlers can be cleared
 * from the battle system at will due to a number of reasons. However, if it
 * just so happens that the targets are cleared, too, with actions remaining,
 * then a crash will follow up. This plugin will prevent that change. Fix made
 * by Olivia.
 * 
 * ---
 * 
 * Debug Console Refresh Bug
 * 
 * When pressing F5 to refresh while the debug console (DevTools) is open,
 * some graphics will fail to load properly. This started occurring since the
 * RPG Maker MZ 1.5.0 update and the code for loading the images has now been
 * reverted to the 1.4.4 version where it was last stable.
 * 
 * ---
 * 
 * Gamepad Repeat Input
 * 
 * Cleared inputs on gamepads do not have a downtime and will trigger the
 * following input frame. The causes problems with certain RPG Maker MZ menus
 * where the inputs have to be cleared as the next immediate frame will have
 * them inputted again. This plugin changes it so that whenever inputs are
 * cleared, there is a downtime equal to the keyboard clear frames before the
 * gamepad input is registered once more.
 * 
 * ---
 * 
 * Invisible Battle Sprites
 * 
 * If you removed a party member during battle and added that exact party
 * member back into the same slot, their sprite would appear invisible. The
 * VisuStella Core Engine will fix this problem and prevent it from happening.
 * 
 * ---
 * 
 * Instant Text Discrepancy for Window_Message
 * 
 * Window_Message displays text differently when it draws letters one by one
 * versus when the text is displayed instantly. This isn't noticeable with the
 * default font, but it's very visible when using something like Arial. The
 * error is due to Bitmap.measureTextWidth yielding a rounded value per letter
 * versus per word. The Core Engine will provide a bug fix that will single out
 * the cause and make it so that only Window_Message will not utilize any round
 * number values when determining the width of each letter, whether or not it
 * is shown instantly. This change will only affect Window_Message and not any
 * other window in order to prevent unintended side effects.
 * 
 * This can be disabled through the Plugin Parameters:
 * 
 * Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * 
 * ---
 *
 * Move Picture, Origin Differences
 *
 * If a Show Picture event command is made with an Origin setting of
 * "Upper Left" and a Move Picture event command is made afterwards with an
 * Origin setting of "Center", RPG Maker MZ would originally have it instantly
 * jump into the new origin setting without making a clean transition between
 * them. This plugin will create that clean transition between origins.
 *
 * ---
 * 
 * Overly-Protective Substitute
 * 
 * When an ally with critical health is being targeted by a friendly non-
 * Certain Hit skill (such as a heal or buff) and another ally has the
 * substitute state, the other ally would "protect" the originally targeted
 * ally and take the heal or buff.
 * 
 * The new changed behavior is that now, substitute will not trigger for any
 * actions whose scope targets allies.
 * 
 * ---
 * 
 * Skill List Active After Party Member Change
 * 
 * If the skill list is active (ie. the player can move the cursor around) and
 * the party member currently being viewed is changed via the button commands,
 * then previously, RPG Maker MZ would still have that window be active despite
 * having the cursor hidden temporarily. Upon pressing direction buttons, the
 * cursor reveals itself and both the skill type window and skill list window
 * are both active, making way for lots of potential problems to happen.
 * 
 * ---
 * 
 * Sprite Removal and Destroy Crash
 * 
 * A texture check will now occur for sprites that are being removed and
 * destroyed in order to prevent crashes. In the off chance that someone
 * creates a sprite through a script call and removes it through such, the
 * likelihood of this occurance becomes higher. This makes the "destroy"
 * property take into account a texture check in order to see if the sprite
 * removal is taking extra steps and will reduce those extra steps.
 * 
 * ---
 * 
 * Status Window Name Vertical Cutoffs
 * 
 * In the battle status windows, whenever actor names are displayed, the bitmap
 * used to display their name text do not extend vertically all the way,
 * causing letters like lowercase "Q" and "G" to be cut off, making them hard
 * to distinguish from one another. The Core Engine will remedy this by
 * extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * ---
 * 
 * Termination Clear Effects
 * 
 * In RPG Maker MZ, requesting an animation while transitioning between
 * scenes, such as going from the map scene to the battle scene, can cause
 * crashes. This is because the animation queue does not take off immediately
 * and will likely register incorrect targets for the scene. This plugin will
 * forcefully clear any registered animations and balloon effects when
 * terminating a scene in order to prevent crashes.
 * 
 * ---
 * 
 * Timer Sprite
 * 
 * By default, RPG Maker MZ adds Sprite_Timer into its spriteset, either for
 * maps or for battles. There is one major problem with this: when spritesets
 * are affected by filters, zooms, and/or blurs, this hinders how readable the
 * timer sprite is, making the information perceived by the player to be much
 * harder than it needs to be. The Core Engine adds the sprite to the parent
 * scene instead of the spriteset to ensure it's unobscured by anything else.
 * 
 * ---
 * 
 * Unusable Battle Items
 * 
 * If any party member is able to use an item in battle, then all party members
 * are able to use said item, even if that party member is supposed to be
 * unable to use that item. This is now changed so that battle items are
 * checked on an individual basis and not on a party-wide basis.
 * 
 * ---
 * 
 * Water Tile Bug
 * 
 * It seems like there's a new bug that occurs if you create a tileset from
 * scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 * does is it causes many tiles to become water tiles without intending to.
 * You can find this out by turning off all the plugins in your project,
 * putting a Ship or Boat on what are normally ground tiles, and then seeing
 * the Ship or Boat traverse through it.
 * 
 * There are two ways to fix this. We cannot fix it through code in this plugin
 * as it's a problem that involves the tileset json data there are ways to work
 * around it so that you can get the proper water-flags to go where they need
 * to be at.
 * 
 * 1. Copy a working un-bugged tileset onto the currently bugged one and
 *    reapply the tile features like passability, terrain tags, etc. This will
 *    make sure the water-passability tiles get copied over correctly.
 * 
 * 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *    un-bugged tileset (usually a pre-existing tileset when a new project is
 *    made), click the "Copy Page" button, go to the bugged tileset and press
 *    "Paste Page". You'll have to reapply any different properties like
 *    passabilities and terrain tags, but the water tile flags should now be
 *    working properly.
 * 
 * The plugin will not fix the problem itself since flag data is delicate and
 * should not be tampered with midgame as the changes made by the plugin might
 * not match the desired settings.
 * 
 * This plugin, however, will also send out an alert message when coming across
 * such a tile. Pay attention to it and do one of the following two steps above
 * to fix the problem.
 * 
 * ---
 * 
 * Window Arrows Sprite Tearing
 * 
 * If a window object in RPG Maker MZ were to have an odd number for width size
 * then the arrow elements found for the window would be positioned on a half
 * pixel, giving it a blurry look and also have sprite tearing issues. This is
 * now fixed by rounding the number to the nearest whole number.
 * 
 * ---
 * 
 * Window Client Area Scaling Bug
 * 
 * If the window has a scale value different from 1.0, the client area (the
 * interactable parts) will not scale properly and appear clipped out. This
 * is now fixed by adjusting the client area to the window's scale values and
 * rounding upward to the nearest whole number.
 * 
 * ---
 * 
 * Window Skin Bleeding
 * 
 * This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 * been set from 96 to 95. This results in the window skin bleeding past the
 * window's intended borders. The Core Engine now reverts this change to
 * prevent the bleeding effect from happening.
 * 
 * ---
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Scroll-Linked Pictures
 *
 * - If a Parallax has a ! at the start of its filename, it is bound to the map
 * scrolling. The same thing now happens with pictures. If a Picture has a ! at
 * the start of its filename, it is bound to the map's scrolling as well.
 *
 * ---
 *
 * Movement Route Scripts
 *
 * - If code in a Movement Route Script command fails, instead of crashing the
 * game, it will now act as if nothing happened except to display the cause of
 * the error inside the console.
 *
 * ---
 * 
 * Script Call Failsafes
 * 
 * - If code found in Conditional Branches, Control Variables, and/or Script
 * Calls fail to activate, instead of crashing the game, it will now act as if
 * nothing happened except to display the cause of the error inside the
 * console.
 * 
 * ---
 * 
 * Digit Grouping
 * 
 * - There exists an option to change how numbers are displayed and converted
 * in your game. This option can be enabled or disabled by going into the
 * Plugin Manager > VisuMZ_0_OptionsCore > Quality of Life Settings >
 * Digit Grouping and toggling on/off whichever ones you want.
 * 
 * - Digit Grouping will follow the rules of whatever country/locale the Plugin
 * Parameters are set to. If it's to default 'en-US', then 1234567.123456 will
 * become 1,234,567.123456. Set it to 'es-ES' and it becomes 1.234.567,123456
 * instead.
 * 
 * - This uses JavaScript's Number.toLocaleString() function and will therefore
 * follow whatever rules it has. This means if there are trailing zeroes at the
 * end of a decimal, it will cut them off. Numbers like 123.45000 will become
 * 123.45 instead. Excess numbers past 6 decimal places will be rounded. A
 * number like 0.123456789 will become 0.123457 instead.
 * 
 * - Numbers in between [ and ], < and > will be excluded from digit grouping
 * in order for text codes to be preserved accurately. \I[1234] will remain as
 * \I[1234].
 * 
 * - If you would like to enter in a number without digit grouping, surround it
 * with {{ and }}. Typing in {{1234567890}} will yield 1234567890.
 * 
 * ---
 * 
 * Show Scrolling Text, additional functionality
 * 
 * The event command "Show Scrolling Text" now has additional functionality as
 * long as the VisuStella MZ Core Engine is installed. If the game dev inserts
 * "// Script Call" (without the quotes) inside the scrolling text, then the
 * entirity of the Show Scrolling Text event command will be ran as a giant
 * script call event command.
 * 
 * The reason why this functionality is added is because the "Script..." event
 * command contains only 12 lines maximum. This means for any script call
 * larger than 12 lines of code cannot be done by normal means as each script
 * call is ran as a separate instance.
 * 
 * By repurposing the "Show Scrolling Text" event command to be able to
 * function as an extended "Script..." event command, such a thing is now
 * possible with less hassle and more lines to code with.
 * 
 * This effect does not occur if the Show Scrolling Text event command does not
 * have "// Script Call" in its contents.
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
 * === Actors-Related Notetags ===
 *
 * Parameter limits can be adjusted in the Plugin Parameters, but this won't
 * lift the ability to change the values of an actor's initial or max level
 * past the editor's limits. Instead, this must be done through the usage of
 * notetags to accomplish the feat.
 *
 * ---
 *
 * <Max Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's max level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * <Initial Level: x>
 *
 * - Used for: Actor Notetags
 * - Replace 'x' with an integer to determine the actor's initial level.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the actor's database value.
 *
 * ---
 *
 * === Classes-Related Notetags ===
 *
 * As actor levels can now surpass 99 due to the notetag system, there may be
 * some skills you wish certain classes can learn upon reaching higher levels
 * past 99, too.
 *
 * ---
 * 
 * <Learn At Level: x>
 *
 * - Used for: Class Skill Learn Notetags
 * - Replace 'x' with an integer to determine the level this class will learn
 *   the associated skill at.
 * - This allows you to go over the database limit of 99.
 * - If this notetag isn't used, default to the class's database value.
 *
 * ---
 *
 * === Enemies-Related Notetags ===
 *
 * Enemies are now given levels. The levels don't do anything except to serve
 * as a container for a number value. This way, levels can be used in damage
 * formulas (ie. a.atk - b.level) without causing any errors. To give enemies
 * levels, use the notetags below. These notetags also allow you to adjust the
 * base parameters, EXP, and Gold past the database limitations.
 *
 * ---
 *
 * <Level: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's level.
 * - If no level is declared, the level will default to 1.
 *
 * ---
 *
 * <param: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to alter.
 *   - This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * - Replace 'x' with an integer to set an enemy's 'param' base value.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 *
 * <EXP: x>
 * <Gold: x>
 *
 * - Used for: Enemy Notetags
 * - Replace 'x' with an integer to determine the enemy's EXP or Gold values.
 * - This will overwrite the enemy's database value and can exceed the original
 *   value limitation in the database.
 * - If these notetags aren't used, default to the enemy's database value.
 *
 * ---
 * 
 * === Animations-Related Notetags ===
 * 
 * Animations in RPG Maker MZ are done by Effekseer and the animation system
 * has been revamped. However, the animations are only centered on the targets
 * now, and cannot be attached to the head or foot. Insert these tags into
 * the names of the animations in the database to adjust their positions.
 * 
 * ---
 * 
 * <Head>
 * <Foot>
 * 
 * - Used for: Animation Name Tags
 * - Will set the animation to anchor on top of the sprite (if <Head> is used)
 *   or at the bottom of the sprite (if <Foot> is used).
 * 
 * ---
 * 
 * <Anchor X: x>
 * <Anchor Y: y>
 * 
 * <Anchor: x, y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation at a specific point within the sprite based on
 *   the 'x' and 'y' values.
 * - Replace 'x' and 'y' with numeric values representing their positions based
 *   on a rate where 0.0 is the furthest left/up (x, y respectively) to 1.0 for
 *   the furthest right/down (x, y respectively).
 * 
 * Examples:
 * 
 * <Anchor X: 0.4>
 * <Anchor Y: 0.8>
 * 
 * <Anchor: 0.2, 0.9>
 * 
 * ---
 * 
 * <Offset X: +x>
 * <Offset X: -x>
 * <Offset Y: +y>
 * <Offset Y: -y>
 * 
 * <Offset: +x, +y>
 * <Offset: -x, -y>
 * 
 * - Used for: Animation Name Tags
 * - Will anchor the animation to be offset by an exact number of pixels.
 * - This does the same the editor does, except it lets you input values
 *   greater than 999 and lower than -999.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the animation's x and y coordinates by.
 * 
 * Examples:
 * 
 * <Offset X: +20>
 * <Offset Y: -50>
 * 
 * <Offset: +10, -30>
 * 
 * ---
 * 
 * <Mirror Offset X>
 * <No Mirror Offset X>
 * 
 * - Used for: Animation Name Tags
 * - If an animation is mirrored, you can choose to have the animation's Offset
 *   X value be mirrored, too (or not at all).
 * - If no name tag is discovered, this will use the setting found in the
 *   Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset X setting.
 * 
 * ---
 * 
 * <Rate: x>
 * 
 * - Used for: MV Animation Name Tags
 * - Allows you to adjust the update for this MV Animation.
 *   - Does NOT work with Effekseer animations.
 * - The lower the number, the faster.
 * - Replace 'x' with a number representing the animation update rate.
 *   - Default rate: 4.
 *   - Minimum rate: 1.
 *   - Maximum rate: 10.
 * 
 * ---
 *
 * === Quality of Life-Related Notetags ===
 *
 * By default, RPG Maker MZ does not offer an encounter step minimum after a
 * random encounter has finished. This means that one step immediately after
 * finishing a battle, the player can immediately enter another battle. The
 * Quality of Life improvement: Minimum Encounter Steps allows you to set a
 * buffer range between battles for the player to have some breathing room.
 *
 * ---
 *
 * <Minimum Encounter Steps: x>
 *
 * - Used for: Map Notetags
 * - Replace 'x' with the minimum number of steps before the player enters a
 *   random encounter on that map.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => Encounter Rate Min.
 *
 * ---
 *
 * Tile shadows are automatically added to certain tiles in the map editor.
 * These tile shadows may or may not fit some types of maps. You can turn them
 * on/off with the Quality of Life Plugin Parameters or you can override the
 * settings with the following notetags:
 *
 * ---
 *
 * <Show Tile Shadows>
 * <Hide Tile Shadows>
 *
 * - Used for: Map Notetags
 * - Use the respective notetag for the function you wish to achieve.
 * - If this notetag is not used, then the minimum encounter steps for the map
 *   will default to Quality of Life Settings => No Tile Shadows.
 *
 * ---
 * 
 * <Scroll Lock X>
 * <Scroll Lock Y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - This will use the display nudge setting found in the Plugin Parameters.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 * 
 * <Scroll Lock X: x>
 * <Scroll Lock Y: y>
 * 
 * - Used for: Map Notetags
 * - Will prevent the map from being able to scroll left/right(x) or up/down(y)
 *   if these notetags are present and will nudge the map camera slightly.
 * - Useful for when maps are just slightly smaller than normal and the tiny
 *   scrolling is distracting.
 * - Replace 'x' and 'y' with numbers between 0 and 1 to represent how much is
 *   being judged.
 *   - For example, for a 1280x720 resolution, a 27 tile wide map will benefit
 *     from a nudge of 0.15625. Play with these numbers to determine the best
 *     value for your maps.
 * - This setting will be disabled if the map is zoomed in.
 * 
 * ---
 *
 * === Basic, X, and S Parameters-Related Notetags ===
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * behaviors and give boosts to trait objects in a more controlled manner.
 *
 * ---
 *
 * <param Plus: +x>
 * <param Plus: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Rate: x%>
 * <param Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'param' value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Flat: +x>
 * <param Flat: -x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'param' plus value when calculating totals.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer on how much to adjust the parameter by.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <param Max: x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Sets max caps for the 'param' to be 'x'. If there are multiple max caps
 *   available to the unit, then the highest will be selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'x' with an integer to determine what the max cap should be.
 * - This does NOT set the max cap to be lower than the default cap.
 *
 * ---
 *
 * <xparam Plus: +x%>
 * <xparam Plus: -x%>
 *
 * <xparam Plus: +x.x>
 * <xparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Rate: x%>
 * <xparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'xparam' value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <xparam Flat: +x%>
 * <xparam Flat: -x%>
 *
 * <xparam Flat: +x.x>
 * <xparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'xparam' plus value when calculating totals.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <sparam Plus: +x%>
 * <sparam Plus: -x%>
 *
 * <sparam Plus: +x.x>
 * <sparam Plus: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Rate: x%>
 * <sparam Rate: x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes 'param' rate to 'x' to alter the total 'sparam' value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <sparam Flat: +x%>
 * <sparam Flat: -x%>
 *
 * <sparam Flat: +x.x>
 * <sparam Flat: -x.x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Adds or subtracts 'x' to 'sparam' plus value when calculating totals.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'x' with a percentage (ie. 150%) or a rate (ie. 1.5).
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 * 
 * ---
 * 
 * === Tileset-Related Notetags ===
 * 
 * ---
 * 
 * <Taller By x: id>
 * 
 * - Used for: Tileset Notetags
 * - Changes any page B, C, D, E tile marked by terrain tag 'id' to be taller
 *   by 'x' tiles.
 *   - Replace 'x' with a number representing the tiles to be taller by.
 *   - Replace 'id' with a number representing the Terrain Tag you will use to
 *     mark this tile with in the Database editor.
 * - When placing these tiles on the map, all you have to do is just place the
 *   bottom tile.
 *   - ie.: For a tree that's one tile taller, just place the tile at the
 *     bottom where you see the trunk).
 *   - Then, in-game, the tree will appear taller by one tile as marked.
 * - Depending on the priority settings, the tile will appear on different
 *   layers.
 *   - O will place the tile on the below player layer.
 *   - X will place the tile on the same level as the player.
 *   - ★ will place the tile on the above player layer.
 *   - O/X layer tiles have a special property where tall sprites standing in
 *     front of it will no longer clip the top of the sprite, while sprites
 *     standing behind it will be covered by it.
 *   - The X layer sprite will only have a hitbox of 1x1 at the base.
 * - This does not work with events using tiles as graphics. Instead, if you
 *   want to do similar, use the Event & Movement Core's <Tile Expand> notetags
 *   for better control.
 * 
 * ---
 *
 * === JavaScript Notetags: Basic, X, and S Parameters ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Basic, X, and S Parameters.
 *
 * ---
 *
 * <JS param Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' plus value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' rate value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'param' flat value.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   Basic Parameter => Formula.
 *
 * ---
 *
 * <JS param Max: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to determine what the max cap for 'param' should be. If there
 *   are multiple max caps available to the unit, then the highest is selected.
 * - Replace 'param' with 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI',
 *   or 'LUK' to determine which parameter to modify.
 * - Replace 'code' with JavaScript code to determine the max cap for the
 *   desired parameter.
 *
 * ---
 *
 * <JS xparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' plus value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the X parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' rate value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the X parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS xparam Flat: code>
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'xparam' flat value.
 * - Replace 'xparam' with 'HIT', 'EVA', 'CRI', 'CEV', 'MEV', 'MRF', 'CNT',
 *   'HRG', 'MRG', 'TRG' to determine which X parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the X parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   X Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Plus: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' plus value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   plus amount for the S parameter's total calculation.
 * - This is used to calculate the 'plus' portion in the Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Rate: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' rate value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   param rate amount for the S parameter's total calculation.
 * - This is used to calculate the 'paramRate' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 *
 * <JS sparam Flat: code>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Runs 'code' to change the 'sparam' flat value.
 * - Replace 'sparam' with 'TGR', 'GRD', 'REC', 'PHA', 'MCR', 'TCR', 'PDR',
 *   'MDR', 'FDR', 'EXR' to determine which S parameter to modify.
 * - Replace 'code' with JavaScript code to determine how much to change the
 *   flat bonus amount for the S parameter's total calculation.
 * - This is used to calculate the 'flatBonus' portion in Parameter Settings =>
 *   S Parameter => Formula.
 *
 * ---
 * 
 * === Battle Setting-Related Notetags ===
 * 
 * These tags will change the settings for battle regardless of how the battle
 * system is set up normally. Insert these tags in either the noteboxes of maps
 * or the names of troops for them to take effect. If both are present for a
 * specific battle, then priority goes to the setting found in the troop name.
 * 
 * ---
 * 
 * <FV>
 * <Front View>
 * <Battle View: FV>
 * <Battle View: Front View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to front view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/enemies/
 *   folder as they will used instead of the "sv_enemies" graphics.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <SV>
 * <Side View>
 * <Battle View: SV>
 * <Battle View: Side View>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the perspective of battle to side view for this specific map or
 *   battle.
 * - Make sure you have the enemy image files available in the img/sv_enemies/
 *   folder as they will used instead of the "enemies" graphics.
 * - Make sure your actors have "sv_actor" graphics attached to them.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <DTB>
 * <Battle System: DTB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the default battle system (DTB).
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <TPB Active>
 * <ATB Active>
 * <Battle System: TPB Active>
 * <Battle System: ATB Active>
 * 
 * <TPB Wait>
 * <ATB Wait>
 * <Battle System: TPB Wait>
 * <Battle System: ATB Wait>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the time progress battle system (TPB) or
 *   active turn battle system (ATB) if you have VisuMZ_2_BattleSystemATB
 *   installed for the game project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <BTB>
 * <Battle System: BTB>
 * 
 * <CTB>
 * <Battle System: CTB>
 * 
 * <ETB>
 * <Battle System: ETB>
 * 
 * <FTB>
 * <Battle System: FTB>
 * 
 * <OTB>
 * <Battle System: OTB>
 * 
 * <PTB>
 * <Battle System: PTB>
 * 
 * <STB>
 * <Battle System: STB>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Changes the battle system to the respective battle system as long as you
 *   have those plugins installed in the current project.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * 
 * ---
 * 
 * <Grid>
 * <Battle Grid>
 * 
 * <No Grid>
 * <No Battle Grid>
 * 
 * - Used for: Map Notetags, Troop Name Tags, and Troop Comment Tags
 * - Requires VisuMZ_2_BattleGridSystem!
 * - Changes the battle system to utilize the Battle Grid System or not.
 * - If using Troop Comment Tags, then as long as the tag appears in a comment
 *   found on any of the Troop's pages (even if they don't run), the tag will
 *   be considered in effect.
 * - If none of these notetags or comment tags are found, refer to the default
 *   settings found in the Plugin Parameters.
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
 * === Animation Commands ===
 * 
 * ---
 * 
 * Animation: Play at Coordinate
 * - Plays an animation on the screen at a specific x, y coordinate even if
 *   there is no sprite attached.
 * 
 *   Animation ID:
 *   - Plays this animation.
 * 
 *   Coordinates:
 * 
 *     X:
 *     Y:
 *     - X/Y coordinate used for the animation.
 *       You may use JavaScript code.
 * 
 *   Mirror Animation?:
 *   - Mirror the animation?
 * 
 *   Mute Animation?:
 *   - Mute the animation?
 * 
 * ---
 * 
 * === Audio Plugin Commands ===
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Volume
 * - Changes the current BGM volume without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Volume:
 *   - Change the current BGM's volume to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 0 to 100.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pitch
 * - Changes the current BGM pitch without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pitch:
 *   - Change the current BGM's pitch to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from 50 to 150.
 * 
 * ---
 * 
 * Audio: Change Current BGM Pan
 * - Changes the current BGM pan without changing any of the current BGM's
 *   other properties and without restarting the BGM.
 * 
 *   Pan:
 *   - Change the current BGM's pan to what amount?
 *   - You may use JavaScript code.
 *   - Use numbers from -100 to 100.
 * 
 * ---
 * 
 * === Debug Plugin Commands ===
 * 
 * ---
 * 
 * Debug: Current Controller ID
 * - PLAY TEST ONLY.
 * - Shows current controller ID in debug console.
 * - If you press a key on the keyboard, this data will be erased.
 * - Also copies to computer clipboard if possible.
 * 
 * ---
 * 
 * === Export Plugin Commands ===
 * 
 * ---
 * 
 * Export: All Maps Text
 * - PLAY TEST ONLY. Exports all of the text from all maps,
 *   their events, event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: All Troops Text
 * - PLAY TEST ONLY. Exports all of the text from all troops,
 *   their event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 * 
 * ---
 * 
 * Export: Current Map Text
 * - PLAY TEST ONLY. Exports all of the text on the current map,
 *   its events, the event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * Export: Current Troop Text
 * - PLAY TEST ONLY. Exports all of the text on the current troop,
 *   the troop's event pages, and any associated Common Events.
 * 
 *   - Exports 'Show Text' event commands.
 *   - Exports 'Show Choices' event commands.
 *   - Exports 'Show Scrolling Text' event commands.
 *   - Exports 'Comments' event commands.
 *   - Only the raw text will be exported.
 *   - Only usable during Play Test.
 *   - If not in battle, this Plugin Command will not work.
 * 
 * ---
 * 
 * === Game Plugin Commands ===
 * 
 * ---
 *
 * Game: Open URL
 * - Opens a website URL from the game.
 *
 *   URL:
 *   - Where do you want to take the player?
 *
 * ---
 * 
 * === Gold Plugin Commands ===
 * 
 * ---
 *
 * Gold: Gain/Lose
 * - Allows you to give/take more gold than the event editor limit.
 *
 *   Value:
 *   - How much gold should the player gain/lose?
 *   - Use negative values to remove gold.
 *
 * ---
 * 
 * === Map Plugin Commands ===
 * 
 * ---
 * 
 * Map: Once Parallel
 * - Plays a Common Event parallel to the event once without repeating itself
 *   when done.
 * - Map only!
 * 
 *   Common Event ID:
 *   - The ID of the parallel Common Event to play.
 *   - Does NOT repeat itself when finished.
 *   - When exiting map scene or changing maps, all Once Parallels are cleared.
 *   - Once Parallels are not retained upon reentering the scene or map.
 *   - Once Parallels are not stored in memory and cannot be saved.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Coordinates Mode
 * - Play Test Mode only! Gets the coordinates of a specific picture as you
 *   move it across the screen.
 * 
 *   Picture ID: 
 *   - The ID of the pictures to track the coordinates of.
 * 
 * ---
 *
 * Picture: Easing Type
 * - Changes the easing type to a number of options.
 *
 *   Picture ID:
 *   - Which picture do you wish to apply this easing to?
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *
 *   Instructions:
 *   - Insert this Plugin Command after a "Move Picture" event command.
 *   - Turn off "Wait for Completion" in the "Move Picture" event.
 *   - You may have to add in your own "Wait" event command after.
 *
 * ---
 * 
 * Picture: Erase All
 * - Erases all pictures on the screen because it's extremely tedious to do it
 *   one by one.
 * 
 * ---
 * 
 * Picture: Erase Range
 * - Erases all pictures within a range of numbers because it's extremely
 *   tedious to do it one by one.
 * 
 *   Starting ID:
 *   - The starting ID of the pictures to erase.
 * 
 *   Ending ID:
 *   - The ending ID of the pictures to erase.
 * 
 * ---
 * 
 * Picture: Rotate by Angle
 * - Rotates target picture by a amount angle over a set duration instead of
 *   continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Adjust Angle:
 *   - What is the angle you wish to rotate the picture by?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Rotate to Angle
 * - Rotates target picture to a certain angle over a set duration
 *   instead of continuously.
 * 
 *   Picture ID Number:
 *   - What is the ID of the picture you wish to rotate?
 *   - Use a number between 1 and 100.
 *   - You may use JavaScript code.
 * 
 *   Target Angle:
 *   - What is the target angle you wish to rotate the picture?
 *   - Use degrees (360 degrees per full rotation).
 *   - You may use JavaScript code.
 * 
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 * 
 *   Duration:
 *   - Duration of rotation effect in frames.
 *   - 60 frames = 1 second.
 *   - You may use JavaScript code.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * Picture: Show Icon
 * - Shows an icon instead of a picture image.
 * - The picture icon can be controlled like any other picture.
 * 
 *   General:
 *
 *     Picture ID Number:
 *     - What is the ID of the picture you wish to show at?
 *     - Use a number between 1 and 100.
 *     - You may use JavaScript code.
 *
 *     Icon Index:
 *     - Select the icon index to use for this picture.
 *     - You may use JavaScript code.
 *
 *     Smooth Icon?:
 *     - This will make the icon smoothed out or pixelated.
 * 
 *   Picture Settings:
 * 
 *     Position:
 *
 *       Origin:
 *       - What is the origin of this picture icon?
 *         - Upper Left
 *         - Center
 *
 *       Position X:
 *       - X coordinate of the picture.
 *       - You may use JavaScript code.
 *
 *       Position Y:
 *       - Y coordinate of the picture.
 *       - You may use JavaScript code.
 * 
 *     Scale:
 *
 *       Width %:
 *       - Horizontal scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 *
 *       Height %:
 *       - Vertical scale of the picture.
 *       - You may use JavaScript code.
 *       - 100 is 100%
 * 
 *     Blend:
 *
 *       Opacity:
 *       - Insert a number to determine opacity level.
 *       - Use a number between 0 and 255.
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the picture?
 * 
 * ---
 * 
 * === Screen Shake Plugin Commands ===
 * 
 * ---
 * 
 * Screen Shake: Custom:
 * - Creates a custom screen shake effect and also sets the following uses of
 *   screen shake to this style.
 * 
 *   Shake Style:
 *   - Select shake style type.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   Power:
 *   - Power level for screen shake.
 * 
 *   Speed:
 *   - Speed level for screen shake.
 * 
 *   Duration:
 *   - Duration of screenshake.
 *   - You can use code as well.
 * 
 *   Wait for Completion:
 *   - Wait until completion before moving onto the next event?
 * 
 * ---
 * 
 * === Switch Plugin Commands ===
 * 
 * ---
 * 
 * Switches: Randomize ID(s)
 * - Select specific Switch ID's to randomize ON/OFF.
 * 
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 * 
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 * 
 * ---
 *
 * Switches: Randomize Range
 * - Select specific Switch ID Range to randomize ON/OFF.
 * - The ratio determines the ON/OFF distribution.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 *   Chance for ON:
 *   - Chance out of 100 that determines the switches to be ON.
 *
 * ---
 *
 * Switches: Toggle ID(s)
 * - Select specific Switch ID's to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Switch ID(s):
 *   - Select which Switch ID(s) to toggle.
 *
 * ---
 *
 * Switches: Toggle Range
 * - Select specific Switch ID Range to toggle ON/OFF.
 * - ON becomes OFF. OFF becomes ON.
 *
 *   Starting ID:
 *   - The starting ID of the Switch to toggle.
 *
 *   Ending ID:
 *   - The ending ID of the Switch to toggle.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Battle System Change
 * - Switch to a different battle system in-game.
 * - Some battle systems REQUIRE their specific plugins!
 *
 *   Change To:
 *   - Choose which battle system to switch to.
 *     - Database Default (Use game database setting)
 *     - -
 *     - DTB: Default Turn Battle
 *     - TPB Active: Time Progress Battle (Active)
 *     - TPB Wait: Time Progress Battle (Wait)
 *     - -
 *     - BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *     - CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *     - OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *     - STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 *
 * ---
 * 
 * System: Load Images
 * - Allows you to (pre) load up images ahead of time.
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory?
 * 
 * ---
 *
 * System: Main Font Size
 * - Set the game's main font size.
 *
 *   Change To:
 *   - Change the font size to this number.
 *
 * ---
 *
 * System: Side View Battle
 * - Switch between Front View or Side View for battle.
 *
 *   Change To:
 *   - Choose which view type to switch to.
 *
 * ---
 *
 * System: Window Padding
 * - Change the game's window padding amount.
 *
 *   Change To:
 *   - Change the game's standard window padding to this value.
 *
 * ---
 * 
 * === Text Popup Command ===
 * 
 * ---
 * 
 * Text Popup: Show Text
 * - Adds text to a text popup window to briefly appear.
 * - Multiple text popups will be queued.
 * - Does not halt the game and works parallel to game activity.
 * 
 *   Text:
 *   - Write the text that you want to appear here.
 *   - You may use text codes.
 * 
 * ---
 * 
 * === Variable Plugin Commands ===
 * 
 * ---
 * 
 * Variable: JS Eval
 * - Pick a variable ID and value to alter through JS.
 * - Allows one line of code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 * 
 * Variable: JS Block
 * - Pick a variable ID and value to alter through JS.
 * - Allows JS block code for variable ID and operand.
 * - Functions like RM2k3's Variable Pointers.
 * 
 *   Variable ID:
 *   - This is the target variable to alter.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 *   Operation Type:
 *   - What operation do you wish to use for this Plugin Command?
 * 
 *   Operand Modifier:
 *   - Value to be used in calculating the target variable.
 *   - You may use JavaScript.
 *   - ie: $gameVariables.value(1)
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Quality of Life Settings
 * ============================================================================
 *
 * A variety of (optional) settings and changes are added with the Core Engine
 * to improve the quality of life for both the game devs and players alike.
 *
 * ---
 *
 * Play Test
 * 
 *   New Game on Boot:
 *   - Automatically start a new game on Play Test?
 *   - Only enabled during Play Test.
 *
 *   No Play Test Mode:
 *   - Force the game to be out of Play Test mode when play testing.
 * 
 *   Open Console on Boot:
 *   - Open the Debug Console upon booting up your game?
 *   - Only enabled during Play Test.
 *
 *   F6: Toggle Sound:
 *   - F6 Key Function: Turn on all sound to 100% or to 0%, toggling between
 *     the two.
 *   - Only enabled during Play Test.
 *
 *   F7: Toggle Fast Mode:
 *   - F7 Key Function: Toggle fast mode.
 *   - Only enabled during Play Test.
 * 
 *   CTRL + n: Quick Load:
 *   - CTRL + a number from 1 to 9 will yield a quick load of that safe file.
 *   - Does not count auto saves.
 *
 *   New Game > Common Event:
 *   - Runs a common event each time a new game is started.
 *   - Only enabled during Play Test.
 *
 * ---
 * 
 * Battle Test
 * 
 *   Add Item Type:
 *   Add Weapon Type:
 *   Add Armor Type:
 *   - Add copies of each database item, weapon, and/or armor?
 *   - Effective only during battle test.
 * 
 *   Added Quantity:
 *   - Determines how many items are added during a battle test instead of
 *     the maximum amount.
 * 
 *   Shift+R: Recover All:
 *   - For Play Test only!
 *   - During battle, pressing SHIFT + R will refill the whole party's HP
 *     and MP and status.
 * 
 *   Shift+T: Full TP
 *   - For Play Test only! 
 *   - During battle, pressing SHIFT + T will refill the whole party's TP.
 * 
 * ---
 *
 * Digit Grouping
 *
 *   Standard Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for standard text
 *     inside windows?
 *
 *   Ex Text:
 *   - Make numbers like 1234567 appear like 1,234,567 for ex text,
 *     written through drawTextEx (like messages)?
 *
 *   Damage Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for in-battle
 *     damage sprites?
 *
 *   Gauge Sprites:
 *   - Make numbers like 1234567 appear like 1,234,567 for visible gauge
 *     sprites such as HP, MP, and TP gauges?
 * 
 *   Country/Locale
 *   - Base the digit grouping on which country/locale?
 *   - This will follow all of the digit grouping rules found here:
 *     https://www.w3schools.com/JSREF/jsref_tolocalestring_number.asp
 *
 * ---
 *
 * Player Benefit
 *
 *   Encounter Rate Min:
 *   - Minimum number of steps the player can take without any
 *     random encounters.
 *
 *   Escape Always:
 *   - If the player wants to escape a battle, let them escape the battle
 *     with 100% chance.
 *
 *   Accuracy Formula:
 *   - Accuracy formula calculation change to
 *     Skill Hit% * (User HIT - Target EVA) for better results.
 *
 *   Accuracy Boost:
 *   - Boost HIT and EVA rates in favor of the player.
 *
 *   Level Up -> Full HP:
 *   Level Up -> Full MP:
 *   - Recovers full HP or MP when an actor levels up.
 *
 * ---
 * 
 * Picture-Related
 * 
 *   Anti-Zoom Pictures:
 *   - If on, prevents pictures from being affected by zoom.
 * 
 *   Picture Containers > Detach in Battle:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the battle scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 *   Picture Containers > Detach in Map:
 *   - If detached, picture container will be separated from the spriteset
 *     while on the map scene.
 *   - This will prevent any visual effects that alter the entire spriteset
 *     from affecting the detached picture container.
 * 
 * ---
 *
 * Misc
 * 
 *   Animation: Mirror Offset X:
 *   - When animations are mirrored, mirror their Offset X values, too.
 *   - The animation name tags <Mirror Offset X> and <No Mirror Offset X> will
 *     override this effect for that specific animation.
 *
 *   Font Shadows:
 *   - If on, text uses shadows instead of outlines.
 *
 *   Font Smoothing:
 *   - If on, smoothes fonts shown in-game.
 * 
 *   Font Width Fix:
 *   - Fixes the font width issue with instant display non-monospaced fonts
 *     in the Message Window.
 *
 *   Key Item Protection:
 *   - If on, prevents Key Items from being able to be sold and from being
 *     able to be consumed.
 * 
 *   Map Name Text Code:
 *   - If on, map names will use text codes.
 *   - If off, only the raw map name will be used.
 *
 *   Modern Controls:
 *   - If on, allows usage of the Home/End buttons.
 *   - Home would scroll to the first item on a list.
 *   - End would scroll to the last item on a list.
 *   - Shift + Up would page up.
 *   - Shift + Down would page down.
 *
 *   MV Animation Rate:
 *   - Adjusts the rate at which MV animations play.
 *   - Default: 4.
 *   - Lower for faster.
 *   - Higher for slower.
 * 
 *   NewGame > CommonEvent:
 *   - Runs a common event each time a new game during any session is started.
 *   - Applies to all types of sessions, play test or not.
 *
 *   No Tile Shadows:
 *   - Removes tile shadows from being displayed in-game.
 *
 *   Pixel Image Rendering:
 *   - If on, pixelates the image rendering (for pixel games).
 *
 *   Require Focus?
 *   - Requires the game to be focused? If the game isn't focused, it will
 *     pause if it's not the active window.
 * 
 *   Shortcut Scripts:
 *   - Enables shortcut-based script variables and functions that can be used
 *     for script calls.
 *   - Shortcut list enabled for this is as follows:
 * 
 *     $commonEvent(id)
 *     - Queues a common event.
 *     - This does not interrupt the current event to run the desired common
 *       event. Any queued common events will run after the current event list
 *       has finished.
 *     - Replace 'id' with the ID of the common event you wish to queue.
 *     - Common events only run in the map scene and battle scene.
 * 
 *     $onceParallel(id)
 *     - Runs a common event in the background as a once parallel event.
 *     - Once parallel events will run in the background like a parallel
 *       process, except that it does not repeat after finishing.
 *     - Replace 'id' with the ID of the common event you wish to run.
 *     - Only works in the map scene and battle scene. Battle scene usage will
 *       require VisuMZ_1_BattleCore.
 * 
 *     $scene
 *     - Returns current scene.
 * 
 *     $spriteset
 *     - Returns current scene's spriteset if there is one.
 * 
 *     $subject
 *     - Returns last recorded identity of the battle's subject/user.
 * 
 *     $targets
 *     - Returns last recorded targets marked in battle.
 * 
 *     $target
 *     - Returns last recorded target marked in battle.
 *     - Works better with VisuMZ_1_BattleCore.
 * 
 *     $event
 *     - Returns currently initiated map event.
 *
 *   Smart Event Collision:
 *   - Makes events only able to collide with one another if they're
 *    'Same as characters' priority.
 * 
 *   Subfolder Name Purge:
 *   - Purge subfolder name from Plugin Parameters when reading data to let
 *     Plugin Commands work properly.
 *   - This is for plugins (such as the VisuMZ library) that utilize dynamic
 *     name registrations for Plugin Commands. Turn this on if you plan on
 *     using subfolders with VisuMZ plugins.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle System
 * ============================================================================
 * 
 * Choose which battle system to use for your game.
 * 
 * Some battle systems REQUIRE their specific plugins! This means if you do not
 * have the required battle system plugin installed, it will not change over.
 * The Core Engine plugin does not contain data for all of the battle systems
 * inside its code.
 * 
 * ---
 * 
 *   Database Default (Use game database setting)
 * 
 *   -
 * 
 *   DTB: Default Turn Battle
 *   TPB Active: Time Progress Battle (Active)
 *   TPB Wait: Time Progress Battle (Wait)
 * 
 *   -
 * 
 *   BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 *   CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 *   ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 *   FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 *   OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 *   PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 *   STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * 
 *   -
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Color Settings
 * ============================================================================
 *
 * These settings allow you, the game dev, to have more control over which
 * colors appear for what conditions found in the game. You can use regular
 * numbers to use the colors predetermined by the game's Window Skin or you
 * can use the #rrggbb format for a hex color code.
 * 
 * If the game's Window Skin is changed mid-game, the colors used will still be
 * based off the default Window Skin's colors. This is due to storing them in a
 * cache and preventing extra processing and reduces lag.
 *
 * You can find out what hex codes belong to which color from this website:
 * https://htmlcolorcodes.com/
 *
 * ---
 *
 * Basic Colors
 * - These are colors that almost never change and are used globally throughout
 *   the in-game engine.
 *
 *   Normal:
 *   System:
 *   Crisis:
 *   Death:
 *   Gauge Back:
 *   HP Gauge:
 *   MP Gauge:
 *   MP Cost:
 *   Power Up:
 *   Power Down:
 *   CT Gauge:
 *   TP Gauge:
 *   Pending Color:
 *   EXP Gauge:
 *   MaxLv Gauge:
 *   - Use #rrggbb for custom colors or regular numbers
 *   for text colors from the Window Skin.
 *
 * ---
 *
 * Alpha Colors:
 * - These are colors that have a bit of transparency to them and are specified
 *   by the 'rgba(red, green, blue, alpha)' format.
 * - Replace 'red' with a number between 0-255 (integer).
 * - Replace 'green' with a number between 0-255 (integer).
 * - Replace 'blue' with a number between 0-255 (integer).
 * - Replace 'alpha' with a number between 0 and 1 (decimal).
 * 
 *   Window Font Outline:
 *   Gauge Number Outline:
 *   Dim Color:
 *   Item Back Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Conditional Colors:
 * - These require a bit of JavaScript knowledge. These determine what colors
 *   to use under which situations and uses such as different values of HP, MP,
 *   TP, for comparing equipment, and determine damage popup colors.
 * 
 *   JS: Actor HP Color:
 *   JS: Actor MP Color:
 *   JS: Actor TP Color:
 *   - Code used for determining what HP, MP, or TP color to use for actors.
 *
 *   JS: Parameter Change:
 *   - Code used for determining whatcolor to use for parameter changes.
 *
 *   JS: Damage Colors:
 *   - Code used for determining what color to use for damage types.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Gold Settings
 * ============================================================================
 *
 * Gold is the main currency in RPG Maker MZ. The settings provided here will
 * determine how Gold appears in the game and certain behaviors Gold has.
 *
 * ---
 *
 * Gold Settings
 *
 *   Gold Max:
 *   - Maximum amount of Gold the party can hold.
 *   - Default 99999999
 *
 *   Gold Font Size:
 *   - Font size used for displaying Gold inside Gold Windows.
 *   - Default: 26
 *
 *   Gold Icon:
 *   - Icon used to represent Gold.
 *   - Use 0 for no icon.
 *
 *   Gold Overlap:
 *   - Text used too much Gold to fit in the window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Image Loading
 * ============================================================================
 *
 * Not all images are loaded at once in-game. RPG Maker MZ uses asynchronous
 * loading which means images are loaded when needed. This may cause delays in
 * when you want certain images to appear. However, if an image is loaded
 * beforehand, they can be used immediately provided they aren't removed from
 * the image cache.
 *
 * ---
 *
 * Image Loading
 *
 *   img/animations/:
 *   img/battlebacks1/:
 *   img/battlebacks2/:
 *   img/enemies/:
 *   img/faces/:
 *   img/parallaxes/:
 *   img/pictures/:
 *   img/sv_actors/:
 *   img/sv_enemies/:
 *   img/system/:
 *   img/tilesets/:
 *   img/titles1/:
 *   img/titles2/:
 *   - Which files do you wish to load from this directory upon starting
 *     up the game?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Keyboard Input Settings
 * ============================================================================
 *
 * Settings for the game that utilize keyboard input. These are primarily for
 * the name input scene (Scene_Name) and the number input event command. These
 * settings have only been tested on English keyboards and may or may not be
 * compatible with other languages, so please disable these features if they do
 * not fit in with your game.
 * 
 * If a controller is connected upon entering the name change scene, it will
 * use the default manual-entry mode instead of the keyboard-entry mode. If a
 * controller button is pressed during the keyboard-entry mode, it will
 * automatically switch to the manual-entry mode.
 * 
 * This plugin does not provide support for controllers that are undetected by
 * RPG Maker MZ's default controller support.
 *
 * ---
 * 
 * Controls
 * 
 *   WASD Movement:
 *   - Enables or disables WASD movement for your game project.
 *   - Moves the W page down button to E.
 * 
 *   R Button: Dash Toggle:
 *   - Enables or disables R button as an Always Dash option toggle.
 * 
 * ---
 *
 * Name Input
 * 
 *   Enable?:
 *   - Enables keyboard input for name entry.
 *   - Only tested with English keyboards.
 * 
 *   Default Mode:
 *   - Select default mode when entering the scene.
 *     - Default - Uses Arrow Keys to select letters.
 *     - Keyboard - Uses Keyboard to type in letters.
 * 
 *   QWERTY Layout:
 *   - Uses the QWERTY layout for manual entry.
 * 
 *   Keyboard Message:
 *   - The message displayed when allowing keyboard entry.
 *   - You may use text codes here.
 * 
 *   Banned Words:
 *   - Players cannot use these words for names.
 *   - These include words inside the names.
 *   - If a banned word is used, a buzzer sound will play.
 *
 * ---
 *
 * Number Input
 * 
 *   Enable?:
 *   - Enables keyboard input for number entry.
 *   - Only tested with English keyboards.
 *
 * ---
 * 
 * Button Assist
 * 
 *   Finish Entry:
 *   - Text used to describe finish entry.
 * 
 *   Page Change:
 *   - Text used to describe character page changing.
 * 
 *   Switch to Keyboard:
 *   - Text used to describe the keyboard switch.
 * 
 *   Switch To Manual:
 *   - Text used to describe the manual entry switch.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Background Settings
 * ============================================================================
 *
 * These settings in the Plugin Parameters allow you to adjust the background
 * images used for each of the scenes. The images will be taken from the game
 * project folders img/titles1/ and img/titles2/ to load into the game.
 *
 * These settings are only available to scenes found within the Main Menu, the
 * Shop scene, and the Actor Naming scene.
 *
 * ---
 *
 * Menu Background Settings:
 * 
 *   Blur Strength:
 *   - Strength used for menu background snapshots.
 *   - Default: 8. Higher is stronger. Lower is weaker.
 *
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Individual background settings for the scene.
 *
 *   Scene_Unlisted
 *   - Individual background settings for any scenes that aren't listed above.
 *
 * ---
 *
 * Background Settings
 *
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 *
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 *
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Button Assist Window
 * ============================================================================
 *
 * In most modern RPG's, there exist small windows on the screen which tell the
 * player what the control schemes are for that scene. This plugin gives you
 * the option to add that window to the menu scenes in the form of a Button
 * Assist Window.
 *
 * ---
 *
 * General
 * 
 *   Enable:
 *   - Enable the Menu Button Assist Window.
 * 
 *   Location:
 *   - Determine the location of the Button Assist Window.
 *   - Requires Plugin Parameters => UI => Side Buttons ON.
 *
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Split "Escape":
 *   - Used ONLY for those making their own custom keyboard key input maps.
 *   - "Split" option makes separate instances of "Cancel" and "Menu" keys.
 *   - "Don't" option will consolidate both into "Escape" keys.
 *
 * ---
 *
 * Text
 * 
 *   Text Format:
 *   - Format on how the buttons are displayed.
 *   - Text codes allowed. %1 - Key, %2 - Text
 * 
 *   Multi-Key Format:
 *   - Format for actions with multiple keys.
 *   - Text codes allowed. %1 - Key 1, %2 - Key 2
 * 
 *   OK Text:
 *   Cancel Text:
 *   Switch Actor Text:
 *   - Default text used to display these various actions.
 *
 * ---
 *
 * Keys
 * 
 *   Key: Unlisted Format:
 *   - If a key is not listed below, use this format.
 *   - Text codes allowed. %1 - Key
 * 
 *   Key: Up:
 *   Key: Down:
 *   Key: Left:
 *   Key: Right:
 *   Key: Shift:
 *   Key: Tab:
 *   Key: A through Z:
 *   - How this key is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Controller Button Assist Settings
 * ============================================================================
 *
 * These are sub-settings for the Button Assist Window Plugin Parameters. Where
 * the Button Assist Window Plugin Parameters are focused on keyboard entries,
 * these sections are focused on gamepad controllers.
 * 
 * Add multiple gamepads to the list to give them different button assist text.
 * If a gamepad is being used but not listed here, the button assist text will
 * default to the keyboard version.
 * 
 * For those looking for more information regarding controllers, visit this
 * site: https://gamepad-tester.com/
 *
 * ---
 *
 * ID Information
 * 
 *   Controller ID Name:
 *   - Exact string used for this controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - Example: Xbox 360 Controller (XInput STANDARD GAMEPAD)
 * 
 *   Similarity Match:
 *   - Partial string used to check for controller ID.
 *   - Plugin Command "Debug: Current Controller ID" for ID help.
 *   - This check occurs secondary to the exact name.
 *   - Example: Xbox
 *
 * ---
 *
 * Directions
 * 
 *   Up:
 *   Left:
 *   Right:
 *   Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *
 * ---
 *
 * Actions
 * 
 *   OK:
 *   Cancel:
 *   Menu:
 *   Shift:
 *   Page Up:
 *   Page Down:
 *   - How this button is shown in-game.
 *   - Text codes allowed.
 *   - *NOTE*: Controllers use a different mapping scheme from keyboards.
 *     - The "cancel" button is separate from the "menu" button though, for the
 *       majority of the button assist window help text, we'll be referring to
 *       the cancel button usually.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Menu Layout Settings
 * ============================================================================
 *
 * These settings allow you to rearrange the positions of the scenes accessible
 * from the Main Menu, the Shop scene, and the Actor Naming scene. This will
 * require you to have some JavaScript knowledge to make the windows work the
 * way you would like.
 *
 * ---
 *
 * Menu Layout Settings
 *
 *   Scene_Title:
 *   Scene_Menu:
 *   Scene_Item:
 *   Scene_Skill:
 *   Scene_Equip:
 *   Scene_Status:
 *   Scene_Options:
 *   Scene_Save:
 *   Scene_Load:
 *   Scene_GameEnd:
 *   Scene_Shop:
 *   Scene_Name:
 *   - Various options on adjusting the selected scene.
 *
 * ---
 *
 * Scene Window Settings
 *
 *   Background Type:
 *   - Selects the background type for the selected window.
 *   - Window
 *   - Dim
 *   - Transparent
 *
 *   JS: X, Y, W, H
 *   - Code used to determine the dimensions for the selected window.
 *
 * ---
 *
 * Scene_Title Settings
 * - The following are settings unique to Scene_Title.
 *
 * Title Screen
 *
 *   Document Title Format:
 *   - Format to display text in document title.
 *   - %1 - Main Title, %2 - Subtitle, %3 - Version
 *
 *   Subtitle:
 *   - Subtitle to be displayed under the title name.
 *   
 *   Version:
 *   - Version to be display in the title screen corner.
 *   
 *   JS: Draw Title:
 *   - Code used to draw the game title.
 *   
 *   JS: Draw Subtitle:
 *   - Code used to draw the game subtitle.
 *   
 *   JS: Draw Version:
 *   - Code used to draw the game version.
 *   
 *   Button Fade Speed:
 *   - Speed at which the buttons fade in at (1-255).
 *
 * ---
 *
 * Scene_GameEnd Settings
 * - The following are settings unique to Scene_GameEnd.
 *   
 *   Command Window List:
 *   - Window commands used by the title screen.
 *   - Add new commands here.
 *
 * ---
 *
 * Command Window List
 * - This is found under Scene_Title and Scene_GameEnd settings.
 *
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 * 
 * ---
 *
 * Title Picture Buttons:
 * - This is found under Scene_Title settings.
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 *
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 *
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 *
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 *
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Parameter Settings
 * ============================================================================
 *
 * A battler's parameters, or stats as some devs know them as, are the values
 * that determine how a battler performs. These settings allow you to alter
 * their behaviors and give boosts to trait objects in a controlled manner.
 *
 * ---
 *
 * Parameter Settings
 *
 *   Displayed Parameters
 *   - A list of the parameters that will be displayed in-game.
 *   - Shown in the Equip Menu.
 *   - Shown in the Status Menu.
 *
 *   Extended Parameters
 *   - The list shown in extended scenes (for other VisuStella plugins).
 *
 * ---
 *
 * === Basic Parameters ===
 *
 * MHP - MaxHP
 * - This is the maximum health points value. The amount of health points (HP)
 * a battler has determines whether or not the battler is in a living state or
 * a dead state. If the HP value is above 0, then the battler is living. If it
 * is 0 or below, the battler is in a dead state unless the battler has a way
 * to counteract death (usually through immortality). When the battler takes
 * damage, it is usually dealt to the HP value and reduces it. If the battler
 * is healed, then the HP value is increased. The MaxHP value determines what's
 * the maximum amount the HP value can be held at, meaning the battler cannot
 * be healed past that point.
 *
 * MMP - MaxMP
 * - This is the maximum magic points value. Magic points (MP) are typically
 * used for the cost of skills and spells in battle. If the battler has enough
 * MP to fit the cost of the said skill, the battler is able to use the said
 * skill provided that all of the skill's other conditions are met. If not, the
 * battler is then unable to use the skill. Upon using a skill that costs MP,
 * the battler's MP is reduced. However, the battler's MP can be recovered and
 * results in a gain of MP. The MaxMP value determines what is the maximum
 * amount the MP value can be held at, meaning the battler cannot recover MP
 * past the MaxMP value.
 *
 * ATK - Attack
 * - This is the attack value of the battler. By default, this stat is used for
 * the purpose of damage calculations only, and is typically used to represent
 * the battler's physical attack power. Given normal damage formulas, higher
 * values mean higher damage output for physical attacks.
 *
 * DEF - Defense
 * - This is the defense value of the battler. By default, this stat is used
 * for the purpose of damage calculations only, and is typically used to
 * represent the battler's physical defense. Given normal damage formulas,
 * higher values mean less damage received from physical attacks.
 *
 * MAT - Magic Attack
 * - This is the magic attack value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical attack power. Given normal damage formulas,
 * higher values mean higher damage output for magical attacks.
 *
 * MDF - Magic Defense
 * - This is the magic defense value of the battler. By default, this stat is
 * used for the purpose of damage calculations only, and is typically used to
 * represent the battler's magical defense. Given normal damage formulas,
 * higher values mean less damage received from magical attacks.
 *
 * AGI - Agility
 * - This is the agility value of the battler. By default, this stat is used to
 * determine battler's position in the battle turn's order. Given a normal turn
 * calculation formula, the higher the value, the faster the battler is, and
 * the more likely the battler will have its turn earlier in a turn.
 *
 * LUK - Luck
 * - This is the luck value of the battler. By default, this stat is used to
 * affect the success rate of states, buffs, and debuffs applied by the battler
 * and received by the battler. If the user has a higher LUK value, the state,
 * buff, or debuff is more likely to succeed. If the target has a higher LUK
 * value, then the state, buff, or debuff is less likely to succeed.
 *
 * ---
 *
 * Basic Parameters
 * 
 *   Show Actor Level?:
 *   - Show the actor level when displaying actors?
 *   - Affects for most windows in-game.
 *
 *   HP Crisis Rate:
 *   - HP Ratio at which a battler can be considered in crisis mode.
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 8 basic parameters:
 *   - MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 *
 * Parameter Caps:
 *
 *   MaxHP Cap:
 *   MaxMP Cap:
 *   ATK Cap:
 *   DEF Cap:
 *   MAT Cap:
 *   MDF Cap:
 *   AGI Cap:
 *   LUK Cap:
 *   - Formula used to determine the selected parameter's cap.
 *   - These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 *
 * ---
 *
 * === X Parameters ===
 *
 * HIT - Hit Rate%
 * - This determines the physical hit success rate of the any physical action.
 * All physical attacks make a check through the HIT rate to see if the attack
 * will connect. If the HIT value passes the randomizer check, the attack will
 * connect. If the HIT value fails to pass the randomizer check, the attack
 * will be considered a MISS.
 *
 * EVA - Evasion Rate%
 * - This determines the physical evasion rate against any incoming physical
 * actions. If the HIT value passes, the action is then passed to the EVA check
 * through a randomizer check. If the randomizer check passes, the physical
 * attack is evaded and will fail to connect. If the randomizer check passes,
 * the attempt to evade the action will fail and the action connects.
 *
 * CRI - Critical Hit Rate%
 * - Any actions that enable Critical Hits will make a randomizer check with
 * this number. If the randomizer check passes, extra damage will be carried
 * out by the initiated action. If the randomizer check fails, no extra damage
 * will be added upon the action.
 *
 * CEV - Critical Evasion Rate%
 * - This value is put against the Critical Hit Rate% in a multiplicative rate.
 * If the Critical Hit Rate is 90% and the Critical Evasion Rate is
 * 20%, then the randomizer check will make a check against 72% as the values
 * are calculated by the source code as CRI * (1 - CEV), therefore, with values
 * as 0.90 * (1 - 0.20) === 0.72.
 *
 * MEV - Magic Evasion Rate%
 * - Where EVA is the evasion rate against physical actions, MEV is the evasion
 * rate against magical actions. As there is not magical version of HIT, the
 * MEV value will always be bit against when a magical action is initiated. If
 * the randomizer check passes for MEV, the magical action will not connect. If
 * the randomizer check fails for MEV, the magical action will connect.
 *
 * MRF - Magic Reflect Rate%
 * - If a magical action connects and passes, there is a chance the magical
 * action can be bounced back to the caster. That chance is the Magic Reflect
 * Rate. If the randomizer check for the Magic Reflect Rate passes, then the
 * magical action is bounced back to the caster, ignoring the caster's Magic
 * Evasion Rate. If the randomizer check for the Magic Reflect Rate fails, then
 * the magical action will connect with its target.
 *
 * CNT - Counter Attack Rate%
 * - If a physical action connects and passes, there is a chance the physical
 * action can be avoided and a counter attack made by the user will land on the
 * attacking unit. This is the Counter Attack Rate. If the randomizer check for
 * the Counter Attack Rate passes, the physical action is evaded and the target
 * will counter attack the user. If the randomizer check fails, the physical
 * action will connect to the target.
 *
 * HRG - HP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxHP as gained HP with a 100% success rate.
 *
 * MRG - MP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxMP as gained MP with a 100% success rate.
 *
 * TRG - TP% Regeneration
 * - During a battler's regeneration phase, the battler will regenerate this
 * percentage of its MaxTP as gained TP with a 100% success rate.
 *
 * ---
 *
 * X Parameters
 *
 *   JS: Formula:
 *   - Formula used to determine the total value all 10 X parameters:
 *   - HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 *
 * Vocabulary
 *
 *   HIT:
 *   EVA:
 *   CRI:
 *   CEV:
 *   MEV:
 *   MRF:
 *   CNT:
 *   HRG:
 *   MRG:
 *   TRG:
 *   - In-game vocabulary used for the selected X Parameter.
 *
 * ---
 *
 * === S Parameters ===
 *
 * TGR - Target Rate
 * - Against the standard enemy, the Target Rate value determines the odds of
 * an enemy specifically targeting the user for a single target attack. At 0%,
 * the enemy will almost never target the user. At 100%, it will have normal
 * targeting opportunity. At 100%+, the user will have an increased chance of
 * being targeted.
 * *NOTE: For those using the Battle A.I. Core, any actions that have specific
 * target conditions will bypass the TGR rate.
 *
 * GRD - Guard Effect
 * - This is the effectiveness of guarding. This affects the guard divisor
 * value of 2. At 100% GRD, damage will become 'damage / (2 * 1.00)'. At 50%
 * GRD, damage will become 'damage / (2 * 0.50)'. At 200% GRD, damage will
 * become 'damage / (2 * 2.00)' and so forth.
 *
 * REC - Recovery Effect
 * - This is how effective heals are towards the user. The higher the REC rate,
 * the more the user is healed. If a spell were to heal for 100 and the user
 * has 300% REC, then the user is healed for 300 instead.
 *
 * PHA - Pharmacology
 * - This is how effective items are when used by the user. The higher the PHA
 * rate, the more effective the item effect. If the user is using a Potion that
 * recovers 100% on a target ally and the user has 300% PHA, then the target
 * ally will receive healing for 300 instead.
 *
 * MCR - MP Cost Rate
 * - This rate affects how much MP skills with an MP Cost will require to use.
 * If the user has 100% MCR, then the MP Cost will be standard. If the user has
 * 50% MCR, then all skills that cost MP will cost only half the required MP.
 * If the user has 200% MCR, then all skills will cost 200% their MP cost.
 *
 * TCR - TP Charge Rate
 * - This rate affects how much TP skills with an TP will charge when gaining
 * TP through various actions. At 100%, TP will charge normally. At 50%, TP
 * will charge at half speed. At 200%, TP will charge twice as fast.
 *
 * PDR - Physical Damage Rate
 * - This rate affects how much damage the user will take from physical damage.
 * If the user has 100% PDR, then the user takes the normal amount. If the user
 * has 50% PDR, then all physical damage dealt to the user is halved. If the
 * user has 200% PDR, then all physical damage dealt to the user is doubled.
 *
 * MDR - Magical Damage Rate
 * - This rate affects how much damage the user will take from magical damage.
 * If the user has 100% MDR, then the user takes the normal amount. If the user
 * has 50% MDR, then all magical damage dealt to the user is halved. If the
 * user has 200% MDR, then all magical damage dealt to the user is doubled.
 *
 * FDR - Floor Damage Rate
 * - On the field map, this alters how much damage the user will take when the
 * player walks over a tile that damages the party. The FDR value only affects
 * the damage dealt to the particular actor and not the whole party. If FDR is
 * at 100%, then the user takes the full damage. If FDR is at 50%, then only
 * half of the damage goes through. If FDR is at 200%, then floor damage is
 * doubled for that actor.
 *
 * EXR - Experience Rate
 * - This determines the amount of experience gain the user whenever the user
 * gains any kind of EXP. At 100% EXR, the rate of experience gain is normal.
 * At 50%, the experience gain is halved. At 200%, the experience gain for the
 * user is doubled.
 *
 * ---
 *
 * S Parameters
 *
 *   JS: Formula
 *   - Formula used to determine the total value all 10 S parameters:
 *   - TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 *
 * Vocabulary
 *
 *   TGR:
 *   GRD:
 *   REC:
 *   PHA:
 *   MCR:
 *   TCR:
 *   PDR:
 *   MDR:
 *   FDR:
 *   EXR:
 *   - In-game vocabulary used for the selected S Parameter.
 *
 * ---
 *
 * Icons
 * 
 *   Draw Icons?
 *   - Draw icons next to parameter names?
 *
 *   MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK:
 *   HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG:
 *   TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR:
 *   - Icon used for the selected parameter.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Parameters Settings
 * ============================================================================
 *
 * As of version 1.07, you can add Custom Parameters to your game if RPG Maker
 * MZ's default set of parameters isn't enough for you. These parameters can
 * have variable functionality depending on how you code it. More importantly,
 * these are compatible with the VisuStella MZ menus and the VisuStella Core
 * Engine's Parameters settings.
 * 
 * For clarification, these settings do NOT create brand-new parameters for you
 * to use and add to your game nor are the bonuses supported by other plugins
 * in the VisuStella MZ library. These settings exist to function as a bridge
 * for non-VisuStella MZ plugins that have created their own parameter values
 * and to show them inside VisuStella menus.
 *
 * ---
 *
 * Custom Parameter
 * 
 *   Parameter Name:
 *   - What's the parameter's name?
 *   - Used for VisuStella MZ menus.
 * 
 *   Abbreviation:
 *   - What abbreviation do you want to use for the parameter?
 *   - Do not use special characters. Avoid numbers if possible.
 * 
 *   Icon:
 *   - What icon do you want to use to represent this parameter?
 *   - Used for VisuStella MZ menus.
 * 
 *   Type:
 *   - What kind of number value will be returned with this parameter?
 *     - Integer (Whole Numbers Only)
 *     - Float (Decimals are Allowed)
 * 
 *   JS: Value:
 *   - Run this code when this parameter is to be returned.
 *
 * ---
 * 
 * Instructions on Adding Custom Parameters to VisuStella Menus
 * 
 * In the Core Engine and Elements and Status Menu Core plugins, there are
 * plugin parameter fields for you to insert the parameters you want displayed
 * and visible to the player.
 * 
 * Insert in those the abbreviation of the custom parameter. For example, if
 * you want to add the "Strength" custom parameter and the abbreviation is
 * "str", then add "str" to the Core Engine/Elements and Status Menu Core's
 * plugin parameter field for "Strength" to appear in-game. Case does not
 * matter here so you can insert "str" or "STR" and it will register all the
 * same to make them appear in-game.
 * 
 * ---
 * 
 * Instructions on Using Custom Parameters as Mechanics
 * 
 * If you want to use a custom parameter in, say, a damage formula, refer to
 * the abbreviation you have set for the custom parameter. For example, if you
 * want to call upon the "Strength" custom parameter's value and its set
 * abbreviation is "str", then refer to it as such. This is case sensitive.
 * 
 * An example damage formula would be something like the following if using
 * "str" for "Strength" and "con" for "Constitution":
 * 
 *   a.str - b.con
 * 
 * These values are attached to the Game_Battlerbase prototype class.
 * 
 * ---
 * 
 * Instructions on Setting Custom Parameter Values
 * 
 * This requires JavaScript knowledge. There is no way around it. Whatever code
 * you insert into the "JS: Value" field will return the value desired. The
 * 'user' variable will refer to the Game_Battlerbase prototype object in which
 * the information is to be drawn from.
 * 
 * Depending on the "type" you've set for the Custom Parameter, the returned
 * value will be rounded using Math.round for integers and left alone if set as
 * a float number.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Resolution Settings
 * ============================================================================
 *
 * Alter various properties to make the game look better for varying screen
 * resolutions. This is mostly for RPG Maker MZ version 1.3.0 and up where the
 * Troops tab has been updated to match the screen resolution settings found in
 * the System 2 Database tab.
 *
 * ---
 * 
 * Maps
 * 
 *   Scroll Lock Small X?:
 *   Scroll Lock Small Y?:
 *   - Automatically scroll lock X/Y scrolling if the map is too small?
 *   - Useful for 1280x720 resolutions when the map is 27 tiles wide.
 *     - This will get rid of the subtle scrolling when moving from one half of
 *       the screen to the other.
 *   - This setting will be disabled if the map is zoomed in.
 * 
 *   Locked Display X?:
 *   Locked Display Y?:
 *   - What display X/Y value do you want for auto-scroll locked maps?
 *   - Use a number between 0 and 1 for best results.
 * 
 * ---
 *
 * Troops
 * 
 *   Reposition Actors:
 *   - Update the position of actors in battle if the screen resolution
 *     has changed to become larger than 816x624.
 *   - Ignore if using the VisuStella MZ Battle Core.
 *   - When using the VisuStella MZ Battle Core, adjust the position through
 *     Battle Core > Parameters > Actor Battler Settings > JS: Home Position
 *
 *   Reposition Enemies:
 *   - Update the position of enemies in battle if the screen resolution
 *     has changed to become larger than 816x624.
 * 
 *     For MZ 1.3.0+?:
 *     - Both this parameter and its parent parameter need to be on when using
 *       RPG Maker MZ 1.3.0+.
 *     - If the Core Script is below 1.3.0, this setting is ignored. This does
 *       not take into account what version the editor is on. Pay attention to
 *       that as the plugin will not auto adjust for it.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Screen Shake Settings
 * ============================================================================
 *
 * Get more screen shake effects into your game!
 * 
 * These effects have been added by Aries of Sheratan!
 *
 * ---
 *
 * Settings
 * 
 *   Default Style:
 *   - The default style used for screen shakes.
 *   - Original
 *   - Random
 *   - Horizontal
 *   - Vertical
 * 
 *   JS: Original Style:
 *   JS: Random Style
 *   JS: Horizontal Style
 *   JS: Vertical Style
 *   - This code gives you control over screen shake for this screen
 *     shake style.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Command List Settings
 * ============================================================================
 *
 * This plugin parameter allows you to adjust the commands that appear on the
 * title screen. Some JavaScript knowledge is needed.
 *
 * ---
 *
 * Title Command
 * 
 *   Symbol:
 *   - The symbol used for this command.
 * 
 *   STR: Text:
 *   - Displayed text used for this title command.
 *   - If this has a value, ignore the JS: Text version.
 * 
 *   JS: Text:
 *   - JavaScript code used to determine string used for the displayed name.
 * 
 *   JS: Show:
 *   - JavaScript code used to determine if the item is shown or not.
 * 
 *   JS: Enable:
 *   - JavaScript code used to determine if the item is enabled or not.
 * 
 *   JS: Ext:
 *   - JavaScript code used to determine any ext data that should be added.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this command is selected.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Title Picture Buttons Settings
 * ============================================================================
 *
 * These allow you to insert picture buttons on your title screen that can
 * send users to various links on the internet when clicked.
 *
 * ---
 *
 * Settings
 * 
 *   Picture's Filename:
 *   - Filename used for the picture.
 * 
 *   Button URL:
 *   - URL for the button to go to upon being clicked.
 * 
 *   JS: Position:
 *   - JavaScript code that helps determine the button's Position.
 * 
 *   JS: On Load:
 *   - JavaScript code that runs once this button bitmap is loaded.
 * 
 *   JS: Run Code:
 *   - JavaScript code that runs once this button is pressed.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: UI Settings
 * ============================================================================
 *
 * In previous iterations of RPG Maker, the Core Engine would allow you to
 * change the screen resolution. In MZ, that functionality is provided by
 * default but a number of UI settings still remain. These settings allow you
 * adjust how certain in-game objects and menus are displayed.
 *
 * ---
 *
 * UI Area
 *
 *   Fade Speed:
 *   - Default fade speed for transitions.
 *
 *   Box Margin:
 *   - Set the margin in pixels for the screen borders.
 *
 *   Command Window Width:
 *   - Sets the width for standard Command Windows.
 *
 *   Bottom Help Window:
 *   - Put the Help Window at the bottom of the screen?
 *
 *   Right Aligned Menus:
 *   - Put most command windows to the right side of the screen.
 *
 *   Show Buttons:
 *   - Show clickable buttons in your game?
 * 
 *     Show Cancel Button:
 *     Show Menu Button:
 *     Show Page Up/Down:
 *     Show Number Buttons:
 *     - Show/hide these respective buttons if the above is enabled.
 *     - If 'Show Buttons' is false, these will be hidden no matter what.
 *
 *   Button Area Height:
 *   - Sets the height for the button area.
 *
 *   Bottom Buttons:
 *   - Put the buttons at the bottom of the screen?
 *
 *   Side Buttons:
 *   - Push buttons to the side of the UI if there is room.
 * 
 *   State Icons Non-Frame:
 *   - Replace sprite frame system for non-frame.
 *   - Better for any instances where icons are zoomed.
 *
 * ---
 *
 * Larger Resolutions
 *
 * ---
 *
 * Menu Objects
 *
 *   Level -> EXP Gauge:
 *   - Draw an EXP Gauge under the drawn level.
 *
 *   Parameter Arrow:
 *   - The arrow used to show changes in the parameter values.
 *
 * ---
 *
 * Text Code Support
 *
 *   Class Names:
 *   - Make class names support text codes?
 *
 *   Nicknames:
 *   - Make nicknames support text codes?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Adjust the default settings of the windows in-game. This ranges from things
 * such as the line height (to better fit your font size) to the opacity level
 * (to fit your window skins).
 * 
 * These settings also allow you to add scroll bars to scrollable windows,
 * letting the player know how much of the window's contents there are left for
 * scrolling. The scroll bar can be enabled, disabled, have its thickness
 * changed, colors changed, etc.
 *
 * ---
 *
 * Window Defaults
 * 
 *   Enable Masking:
 *   - Enable window masking (windows hide other windows behind them)?
 *   - WARNING: Turning it on can obscure data.
 * 
 *   Correct Skin Bleed:
 *   - Allows you to enable/disable the window skin bleeding correction for
 *     those who wish to use the 95 calculator instead of 96 to augment higher
 *     and larger screen resolutions.
 *   - Read the "Bug Fixes" section if you don't understand what the window
 *     skin bleeding problem is.
 * 
 *   Line Height:
 *   - Default line height used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Item Padding:
 *   - Default line padding used for standard windows.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   Back Opacity:
 *   - Default back opacity used for standard windows.
 *   - As of version 1.3.0, this is no longer needed.
 *   - This will still work for lower versions.
 * 
 *   Translucent Opacity:
 *   - Default translucent opacity used for standard windows.
 * 
 *   Window Opening Speed:
 *   - Default open speed used for standard windows.
 *   - Default: 32 (Use a number between 0-255)
 * 
 *   Column Spacing:
 *   - Default column spacing for selectable windows.
 *   - Default: 8
 * 
 *   Row Spacing:
 *   - Default row spacing for selectable windows.
 *   - Default: 4
 *
 * ---
 * 
 * Scroll Bar
 * 
 *   Show Scroll Bar?:
 *   - Show the scroll bar for scrollable windows?
 * 
 *   Thickness:
 *   - How thick do you want the scroll bar to be?
 * 
 *   Offset:
 *   - How much do you want to offset the scroll bar by?
 * 
 *   Bar Body Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Off Bar Opacity:
 *   - What opacity value do you want the off bar opacity to be?
 *   - Use a number between 0 and 255.
 * 
 * ---
 * 
 * Selectable Items:
 * 
 *   Show Background?:
 *   - Selectable menu items have dark boxes behind them. Show them?
 * 
 *   Item Height Padding:
 *   - Default padding for selectable items.
 *   - Avoid using odd numbers.
 *   - Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 *   JS: Draw Background:
 *   - Code used to draw the background rectangle behind clickable menu objects
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: JS: Quick Functions
 * ============================================================================
 * 
 * WARNING: This feature is highly experimental! Use it at your own risk!
 * 
 * JavaScript Quick Functions allow you to quickly declare functions in the
 * global namespace for ease of access. It's so that these functions can be
 * used in Script Calls, Control Variable Script Inputs, Conditional Branch
 * Script Inputs, Damage Formulas, and more.
 * 
 * ---
 * 
 * JS: Quick Function
 * 
 *   Function Name:
 *   - The function's name in the global namespace.
 *   - Will not overwrite functions/variables of the same name.
 * 
 *   JS: Code:
 *   - Run this code when using the function.
 * 
 * ---
 * 
 * If you have a Function Name of "Example", then typing "Example()" in a
 * Script Call, Conditional Branch Script Input, or similar field will yield
 * whatever the code is instructed to return.
 * 
 * If a function or variable of a similar name already exists in the global
 * namespace, then the quick function will be ignored and not created.
 * 
 * If a quick function contains bad code that would otherwise crash the game,
 * a fail safe has been implemented to prevent it from doing so, display an
 * error log, and then return a 0 value.
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
 * Version 1.84: August 29, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New notetags added by Arisu:
 * *** Tileset Notetag: <Taller By x: id>
 * **** Changes any page B, C, D, E tile marked by terrain tag 'id' to be
 *      taller by 'x' tiles.
 * **** When placing these tiles on the map, all you have to do is just place
 *      the bottom tile.
 * ***** ie.: For a tree that's one tile taller, just place the tile at the
 *       bottom where you see the trunk). Then, in-game, the tree will appear
 *       taller by one tile as marked.
 * **** O/X layer tiles have a special property where tall sprites standing in
 *      front of it will no longer clip the top of the sprite, while sprites
 *      standing behind it will be covered by it.
 * **** This does not work with events using tiles as graphics. Instead, if
 *      you want to do similar, use the Event & Movement Core's <Tile Expand>
 *      notetags for better control.
 * 
 * Version 1.83: June 13, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated documentation for <param Max: x> notetag.
 * *** This does not set the max cap to be lower than the default cap.
 * * New Feature!
 * ** New Plugin Parameters added by Olivia:
 * *** Plugin Parameters > UI Settings > State Icons Non-Frame
 * **** Replace sprite frame system for non-frame.
 * **** Better for any instances where icons are zoomed.
 * 
 * Version 1.82: April 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Added failsafe for $textPopup when some windows have not been initialized
 *    and requesting the text popup.
 * * New Feature!
 * ** New Plugin Parameter and playtest shortcut added by Arisu:
 * *** Plugin Parameters > QoL Settings > Playtest > CTRL + n: Quick Load
 * **** CTRL + a number from 1 to 9 will yield a quick load of that save file.
 * **** Does not count auto saves.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.81: February 15, 2024
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added for future plugin: VisuMZ_2_BattleGridSystem
 * *** <Grid>
 * *** <No Grid>
 * **** Requires the future plugin VisuMZ_2_BattleGridSystem!
 * **** Read the help section for more information on these.
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > Window > Correct Skin Bleed
 * **** Allows you to enable/disable the window skin bleeding correction for
 *      those who wish to use the 95 calculator instead of 96 to augment higher
 *      and larger screen resolutions.
 * **** Read the "Bug Fixes" section if you don't understand what the window
 *      skin bleeding problem is.
 * 
 * Version 1.80: January 18, 2024
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Auto Save After New Game
 * **** Normally, when starting a new game through the "New Game" option, there
 *      is no auto save trigger. However, if you start a new game or load a
 *      saved game, then go to the Game End screen, return back to the title
 *      screen, then start a New Game, the auto save trigger occurs when it
 *      shouldn't. The Core Engine will now patch this and prevent the trigger
 *      from taking place.
 * 
 * Version 1.79: November 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Plugin Command added by Arisu:
 * ** Text Popup: Show Text
 * *** Adds text to a text popup window to briefly appear.
 * *** Multiple text popups will be queued.
 * *** Does not halt the game and works parallel to game activity.
 * 
 * Version 1.78: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Olivia and sponsored by AndyL:
 * *** QoL Settings > Battle Test > Shift+R: Recover All
 * **** For Play Test only! During battle, pressing SHIFT + R will refill the
 *      whole party's HP and MP and status.
 * *** QoL Settings > Battle Test > Shift+T: Full TP
 * **** For Play Test only! During battle, pressing SHIFT + T will refill the
 *      whole party's TP.
 * 
 * Version 1.77: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the BGS related Plugin Commands to crash.
 *    Fix made by Arisu.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Scroll-Linked Pictures now work if the image file are in a folder within
 *    the img/pictures/ folder without the folder needing a ! at the start.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Picture: Rotate by Angle
 * **** Rotates target picture by a amount angle over a set duration instead of
 *      continuously.
 * **** View help file for more information on the Plugin Command.
 * *** Picture: Rotate to Angle
 * **** Rotates target picture to a certain angle over a set duration instead
 *      of continuously.
 * **** View help file for more information on the Plugin Command.
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Menu Button Assist > General > Split "Escape":
 * **** Used ONLY for those making their own custom keyboard key input maps.
 * **** "Split" option makes separate instances of "Cancel" and "Menu" keys.
 * **** "Don't" option will consolidate both into "Escape" keys.
 * 
 * Version 1.76: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a bug that displayed the incorrect button press key for name input
 *    processing's cancel action. Fix made by Olivia.
 * 
 * Version 1.75: March 16, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** In Scene_Name, when using the Keyboard Input, the button assist windows
 *    will no longer display the keyboard shortcuts for Ok and Cancel, but
 *    instead, show them for ENTER and BKSP. Update made by Arisu.
 * ** In Scene_Name, when manual inputting, the Page Up/Dn keys are now
 *    displayed to show changing character pages.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by AndyL:
 * *** Params > Keyboard Input > Button Assist > Finish Entry
 * **** Text used to describe finish entry.
 * *** Params > Keyboard Input > Button Assist > Page Change
 * **** Text used to describe changing character pages.
 * *** Params > Window Settings > Scroll Bar
 * **** These settings also allow you to add scroll bars to scrollable windows,
 *      letting the player know how much of the window's contents there are
 *      left for scrolling. The scroll bar can be enabled, disabled, have its
 *      thickness changed, colors changed, etc.
 * 
 * Version 1.74: February 16, 2023
 * * Compatibility Update!
 * ** Plugin Commands for: Audio: Change Current BGM/BGS Volume/Pitch/Pan
 *    should now work properly with the updated RPG Maker MZ version and
 *    WebAudio changes. Update made by Arisu.
 * 
 * Version 1.73: January 20, 2023
 * * Compatibility Update!
 * ** Added better Effekseer version compatibility.
 * 
 * Version 1.72: December 15, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Skill List Active After Party Member Change
 * **** If the skill list is active (ie. the player can move the cursor around)
 *      and the party member currently being viewed is changed via the button
 *      commands, then previously, RPG Maker MZ would still have that window be
 *      active despite having the cursor hidden temporarily. Upon pressing
 *      direction buttons, the cursor reveals itself and both the skill type
 *      window and skill list window are both active, making way for lots of
 *      potential problems to happen.
 * ** Water Tile Bug
 * *** It seems like there's a new bug that occurs if you create a tileset from
 *     scratch in RPG Maker MZ version 1.5.0+ and version 1.6.0+! What this bug
 *     does is it causes many tiles to become water tiles without intending to.
 *     You can find this out by turning off all the plugins in your project,
 *     putting a Ship or Boat on what are normally ground tiles, and then
 *     seeing the Ship or Boat traverse through it.
 * *** There are two ways to fix this. We cannot fix it through code in this
 *     plugin as it's a problem that involves the tileset json data there are
 *     ways to work around it so that you can get the proper water-flags to go
 *     where they need to be at.
 * **** 1. Copy a working un-bugged tileset onto the currently bugged one and
 *      reapply the tile features like passability, terrain tags, etc. This
 *      will make sure the water-passability tiles get copied over correctly.
 * **** 2. If you're on RPG Maker MZ version 1.5.0 or above, select a working
 *      un-bugged tileset (usually a pre-existing tileset when a new project is
 *      made), click the "Copy Page" button, go to the bugged tileset and press
 *      "Paste Page". You'll have to reapply any different properties like
 *      passabilities and terrain tags, but the water tile flags should now be
 *      working properly.
 * *** The plugin will not fix the problem itself since flag data is delicate
 *     and should not be tampered with midgame as the changes made by the
 *     plugin might not match the desired settings.
 * *** This plugin, however, will also send out an alert message when coming
 *     across such a tile. Pay attention to it and do one of the following two
 *     steps above to fix the problem.
 * * Documentation Update!
 * ** Added "Skill List Active After Party Member Change" section to the
 *    "Important Changes: Bug Fixes" section of the help file.
 * ** Added "Water Tile Bug" section to the "Important Changes: Bug Fixes"
 *    section of the help file.
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Menu Backgrounds > Blur Strength
 * **** Strength used for menu background snapshots.
 * 
 * Version 1.71: November 10, 2022
 * * Bug Fixes!
 * ** Title Command Window should now allow for more than 4 custom commands
 *    without hidden commands. Fix made by Irina.
 * ** Fixed a problem with repeating animations from Visual State Effects
 *    causing softlocks. Fix made by Olivia.
 * 
 * Version 1.70: October 6, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** A texture check will now occur for sprites that are being removed and
 *     destroyed in order to prevent crashes. In the off chance that someone
 *     creates a sprite through a script call and removes it through such, the
 *     likelihood of this occurance becomes higher. This makes the destroy
 *     property take into account a texture check in order to see if the sprite
 *     removal is taking extra steps and will reduce those extra steps.
 * * Documentation Update!
 * ** Added "Sprite Removal and Destroy Crash" section to the "Important
 *    Changes: Bug Fixes" section.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.69: September 8, 2022
 * * Bug Fixes!
 * ** Fixed the combination of Button Assist Location: Top with Help Location:
 *    Bottom combination not working properly. Fix made by Irina.
 * 
 * Version 1.68: August 4, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Olivia and sponsored by Archeia:
 * *** Audio: Change Current BGM Volume
 * *** Audio: Change Current BGM Pitch
 * *** Audio: Change Current BGM Pan
 * *** Audio: Change Current BGS Volume
 * *** Audio: Change Current BGS Pitch
 * *** Audio: Change Current BGS Pan
 * **** Changes the current BGM/BGS volume/pitch/pan without changing any of
 *      the current BGM/BGS's other properties and without restarting BGM/BGS.
 * 
 * Version 1.67: July 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added notes for Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * *** This setting will be disabled if the map is zoomed in.
 * * New Features!
 * ** New map notetags added by Irina and sponsored by AndyL:
 * *** <Scroll Lock X>
 * *** <Scroll Lock X: x>
 * *** <Scroll Lock Y>
 * *** <Scroll Lock Y: y>
 * **** Causes the map to not scroll left/right(x) or up/down(y). Useful for
 *      when maps are just slightly smaller than normal and the tiny scrolling
 *      is distracting.
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small X?
 * *** Plugin Parameters > Screen Resolution > Maps > Scroll Lock Small Y?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display X?
 * *** Plugin Parameters > Screen Resolution > Maps > Locked Display Y?
 * **** Automatically scroll locks small maps to prevent them from scrolling
 *      horizontally/vertically. Useful for 1280x720 resolutions when the map
 *      is 27 tiles wide. This will get rid of the subtle scrolling when moving
 *      from one half of the screen to the other.
 * **** This setting will be disabled if the map is zoomed in.
 * * Feature Update!
 * ** Warnings added to Line Height and Item Padding parameters:
 * *** Avoid using odd numbers.
 * *** Visuals in RPG Maker and general game dev don't work well with odd
 *     numbers so avoid them unless you want your game's visuals to behave
 *     inconsistently.
 * 
 * Version 1.66: July 14, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Debug Console Refresh Bug
 * **** When pressing F5 to refresh while the debug console (DevTools) is open,
 *      some graphics will fail to load properly. This started occurring since
 *      the RPG Maker MZ 1.5.0 update and the code for loading the images has
 *      now been reverted to the 1.4.4 version where it was last stable.
 * * Documentation Update!
 * ** Help file updated for new major bug fix.
 * 
 * Version 1.65: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Parameter Settings > Show Actor Level?
 * **** Show the actor level when displaying actors?
 * **** Used for most windows in-game.
 * 
 * Version 1.64: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Debug: Current Controller ID
 * **** PLAY TEST ONLY. Shows current controller ID in debug console.
 * **** Also copies to computer clipboard if possible.
 * ** New Plugin Parameters made by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** Subsettings for Button Assist Window: Controller Button Assist
 * **** These are sub-settings for the Button Assist Window Plugin Parameters.
 *      Where the Button Assist Window Plugin Parameters are focused on
 *      keyboard entries, these sections are focused on gamepad controllers.
 * **** Add multiple gamepads to the list to give them different button assist
 *      text. If a gamepad is being used but not listed here, the button assist
 *      text will default to the keyboard version.
 * 
 * Version 1.63: May 2, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > QoL Settings > Misc > Map Name Text Code
 * **** If on, map names will use text codes.
 * **** If off, only the raw map name will be used.
 * * Feature Update!
 * ** The map name text code change will no longer be on forcefully. It is now
 *    something that can be toggled by Plugin Parameters. Update by Irina.
 * 
 * Version 1.62: April 28, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu and sponsored by Archeia:
 * *** Variable: JS Eval
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows one line of code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * *** Variable: JS Block
 * **** Pick a variable ID and value to alter through JS.
 * **** Allows JS block code for variable ID and operand.
 * **** Functions like RM2k3's Variable Pointers.
 * ** Map names can now use text codes. Made by Arisu and sponsored by Archeia.
 * 
 * Version 1.61: April 21, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Battle Forced End Action Crash
 * **** Depending on various circumstances, currently active battlers can be
 *      cleared from the battle system at will due to a number of reasons.
 *      However, if it just so happens that the targets are cleared, too, with
 *      actions remaining, then a crash will follow up. This plugin will
 *      prevent that change. Fix made by Olivia.
 * 
 * Version 1.60: April 14, 2022
 * * Bug Fixes!
 * ** Number Input window will now respond to Home/End keys properly.
 *    Fix made by Olivia.
 * 
 * Version 1.59: April 7, 2022
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.4 compatibility update!
 * *** "Shutdown" command should now be more compatible with other aspects of
 *     the client when running from Node JS client on other OS's.
 * 
 * Version 1.58: March 24, 2022
 * * Feature Update!
 * ** Plugin Commands now have separators for easier selection.
 * 
 * Version 1.57: March 3, 2022
 * * Compatibility Update!
 * ** The "Shutdown" command from the title screen should now be compatible
 *    with RPG Maker MZ 1.4.4 and up. Update made by Olivia.
 * 
 * Version 1.56: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New features added by Arisu and sponsored by Anon:
 * *** Plugin Parameters > QoL > Misc > Shortcut Scripts
 * **** Enables shortcut-based script variables and functions that can be used
 *      for script calls.
 * **** Shortcut list enabled for this is as follows:
 * ***** $commonEvent(id), $onceParallel(id), $scene, $spriteset, $subject, 
 *       $targets, $target, $event
 * ***** For more information on how to use them, review the help file.
 * 
 * Version 1.55: January 27, 2022
 * * Feature Update!
 * ** Once Parallels for the map are now able to update even while other events
 *    are running. Update made by Arisu.
 * 
 * Version 1.54: January 13, 2022
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** Overly-Protective Substitute
 * *** When an ally with critical health is being targeted by a friendly non-
 *     Certain Hit skill (such as a heal or buff) and another ally has the
 *     substitute state, the other ally would "protect" the originally targeted
 *     ally and take the heal or buff.
 * *** The new changed behavior is that now, substitute will not trigger for
 *     any actions whose scope targets allies.
 * *** Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new MZ Bug: Overly-Protective Substitute.
 * * Feature Update!
 * ** Added a failsafe for those who did not update the plugin parameter
 *    settings and are using MV Animations.
 * 
 * Version 1.53: December 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetag added by Olivia:
 * *** <Rate: x>
 * **** Allows you to adjust the update for this MV Animation.
 * ***** Does NOT work with Effekseer animations.
 * **** The lower the number, the faster.
 * **** Replace 'x' with a number representing the animation update rate.
 * ***** Default rate: 4.
 * ***** Minimum rate: 1.
 * ***** Maximum rate: 10.
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Qualify of Life Settings > MV Animation Rate
 * **** Adjusts the rate at which MV animations play.
 * **** Default: 4. Lower for faster. Higher for slower.
 * * Optimization Update!
 * ** MV Animations should run more optimized.
 * 
 * Version 1.52: December 16, 2021
 * * Compatibility Update!
 * ** RPG Maker MZ 1.4.0 compatibility update!
 * *** MV Animations played on screen level will now show up properly in the
 *     center of the screen.
 * 
 * Version 1.51: December 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** In the battle status windows, whenever actor names are displayed, the
 *     bitmap used to display their name text do not extend vertically all the
 *     way, causing letters like lowercase "Q" and "G" to be cut off, making
 *     them hard to distinguish from one another. The Core Engine will remedy
 *     this by extending the bitmap to allow enough room. Fix made by Irina.
 * 
 * Version 1.50: November 4, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug Fix!
 * *** By default, if the attack skill is sealed via a trait and an actor has
 *     auto-battle, the action can still be used via auto-battle. This is now
 *     fixed and actors should not be able to attack via auto-battle if their
 *     attack ability is sealed. Fix made by Yanfly.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.49: October 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Command added by Arisu and sponsored by Anon:
 * *** Map: Once Parallel
 * **** Plays a Common Event parallel to the event once without repeating
 *      itself when done. Map only!
 * **** When exiting map scene or changing maps, all Once Parallels are cleared
 * **** Once Parallels are not retained upon reentering the scene or map.
 * **** Once Parallels are not stored in memory and cannot be saved.
 * 
 * Version 1.48: October 21, 2021
 * * Feature Update!
 * ** Bitmap.blt function will now have source coordinates and destination X
 *    and Y coordinates rounded to prevent blurring. Update made by Olivia.
 * 
 * Version 1.47: October 14, 2021
 * * Bug Fixes!
 * ** Prevents Number Input window from having a NaN value due to holding down
 *    the fast forward key. Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Misc > Font Width Fix
 * **** Fixes the font width issue with non-monospaced fonts in the Message
 *      Window. This is now an optional fix.
 * 
 * Version 1.46: September 23, 2021
 * * Documentation Update!
 * ** Added line to Plugin Command: "System: Battle System Change":
 * *** Some battle systems REQUIRE their specific plugins!
 * ** Added lines to "Plugin Parameters: Battle System":
 * *** Some battle systems REQUIRE their specific plugins! This means if you do
 *     not have the required battle system plugin installed, it will not change
 *     over. The Core Engine plugin does not contain data for all of the battle
 *     systems inside its code.
 * 
 * Version 1.45: September 17, 2021
 * * Bug Fixes!
 * ** Fixed a problem with "Picture: Coordinates Mode" to properly utilize the
 *    correct picture ID. Fix made by Arisu.
 * ** RPG Maker MZ Bug Fix:
 * *** Instant Text Discrepancy for Window_Message
 * **** Window_Message displays text differently when it draws letters one by
 *      one versus when the text is displayed instantly. This isn't noticeable
 *      with the default font, but it's very visible when using something like
 *      Arial. The error is due to Bitmap.measureTextWidth yielding a rounded
 *      value per letter versus per word. The Core Engine will provide a bug
 *      fix that will single out the cause and make it so that only
 *      Window_Message will not utilize any round number values when
 *      determining the width of each letter, whether or not it is shown
 *      instantly. This change will only affect Window_Message and not any
 *      other window in order to prevent unintended side effects.
 * **** Fix made by Yanfly.
 * * Compatibility Update!
 * ** RPG Maker MZ 1.3.3 compatibility.
 * *** Updated how gauges are drawn.
 * * Documentation Update!
 * ** Help file updated for new RPG Maker MZ bug fix.
 * 
 * Version 1.44: August 20, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Anon.
 * *** "Animation: Play at Coordinate"
 * **** Plays an animation on the screen at a specific x, y coordinate even if
 *      there is no sprite attached.
 * 
 * Version 1.43: July 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Archeia!
 * *** "Picture: Coordinates Mode"
 * **** Play Test Mode only!
 * **** Gets the coordinates of a specific picture as you move it across the
 *      screen.
 * **** Helpful for those who don't want to do guess work on the screen
 *      coordinates when it comes to placing down pictures.
 * 
 * Version 1.42: July 16, 2021
 * * Documentation Update
 * ** Added text to "Plugin Parameters: Color Settings" for clarification:
 * *** If the game's Window Skin is changed mid-game, the colors used will
 *     still be based off the default Window Skin's colors. This is due to
 *     storing them in a cache and preventing extra processing and reduces lag.
 * 
 * Version 1.41: July 2, 2021
 * * Compatibility Update
 * ** Further compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update
 * ** Added extra notes to "Important Changes: Bug Fixes" section for the
 *    "Window Skin Bleeding" bug:
 * *** This bug is fixed in the core scripts for RPG Maker MZ v1.3.0+.
 * 
 * Version 1.40: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Documentation Update:
 * ** Plugin Parameters > Window Settings > Back Opacity
 * *** As of version 1.3.0, this is no longer needed.
 * *** This will still work for lower versions.
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Window Skin Bleeding fix updated to newest version.
 * * New Plugin Parameters added:
 * ** Plugin Parmaeters > Screen Resolution Settings
 * *** These settings have been moved from the UI settings to be its own thing.
 * **** This is mostly for RPG Maker MZ version 1.3.0 and up where the Troops
 *      tab has been updated to match the screen resolution settings found in
 *      the System 2 Database tab.
 * *** Reposition Enemies > For MZ 1.3.0+?
 * **** Both of these plugin parameters need to be set to true in order for the
 *      repositioning to work for MZ v1.3.0.
 * **** If the Core Script is below 1.3.0, this setting is ignored. This does
 *      not take into account what version the editor is on. Pay attention to
 *      that as the plugin will not auto adjust for it.
 * 
 * Version 1.39: June 18, 2021
 * * Bug Fixes!
 * ** Number Inputs should now work with the controller if keyboard Number
 *    Input is enabled. Fix made by Olivia.
 * ** RPG Maker Bug: Termination Clear Effects
 * *** In RPG Maker MZ, requesting an animation while transitioning between
 *     scenes, such as going from the map scene to the battle scene, can cause
 *     crashes. This is because the animation queue does not take off
 *     immediately and will likely register incorrect targets for the scene.
 *     This plugin will forcefully clear any registered animations and balloon
 *     effects when terminating a scene in order to prevent crashes.
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** <Battle View: x> Troop Name tags can now work with comment tags.
 * ** <Battle System: x> Troop Name tags can now work with comment tags.
 * *** Updates made by Irina.
 * 
 * Version 1.38: June 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Caz!
 * *** Picture: Show Icon
 * **** Shows an icon instead of a picture image.
 * **** The picture icon can be controlled like any other picture.
 * 
 * Version 1.37: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Arisu:
 * *** Switches: Randomize ID(s)
 * *** Switches: Randomize Range
 * *** Switches: Toggle ID(s)
 * *** Switches: Toggle Range
 * **** These Plugin Commands allow you to randomize the ON/OFF positions of
 *      switches or toggle them so that they flip their ON/OFF status.
 * 
 * Version 1.36: May 14, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Export: All Maps Text
 * *** Export: All Troops Text
 * *** Export: Current Map Text
 * *** Export: Current Troop Text
 * **** Play Test Only Plugin Commands. These Plugin Commands are used for
 *      extracting all messages, show choices, comments, and scrolling text to
 *      parse and export them as a TXT file. Useful for getting a game's script
 *      to a voice actor or voice actress.
 * 
 * Version 1.35: May 7, 2021
 * * Documentation Update!
 * ** Added the following text to "Parameter Settings" Plugin Parameters for
 *    extra clarity regarding Parameter Caps:
 * *** These settings DO NOT raise the editor's maximum values. If you want to
 *     raise an enemy's maximum parameter value past their default cap, use the
 *     associated notetag for them instead.
 * 
 * Version 1.34: April 23, 2021
 * * Bug Fixes!
 * ** For the vanilla Equip Status window, custom parameters with integer
 *    values will now show up as integers and not percentiles. Fix by Olivia.
 * * Documentation Update!
 * ** Added clarity to the <param: x> notetag for enemies.
 * *** This notetag does NOT work with X Parameters, S Parameters, or any
 *     custom parameters. This notetag ONLY works with the base parameters.
 * 
 * Version 1.33: April 9, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Window Skin Bleeding
 * *** Since the v1.2.0 update, Window.prototype._refreshBack's frame value has
 *     been set from 96 to 95. This results in the window skin bleeding past
 *     the window's intended borders. The Core Engine now reverts this change
 *     to prevent the bleeding effect from happening.
 * * Feature Update!
 * ** "Encounter Rate Minimum" now has a valid minimum value of 1. Update made
 *    by Olivia.
 * 
 * Version 1.32: April 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Yanfly:
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Item Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Weapon Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Add Armor Type
 * *** Plugin Parameters > QoL Settings > Battle Test > Added Quantity
 * **** By default, RPG Maker MZ only adds 99 of items and not weapons or armor
 *      making it awkward for testing specific battle mechanics. These settings
 *      allow you to add in custom amounts of items, weapons, and/or armors if
 *      you so wish.
 * 
 * Version 1.31: March 26, 2021
 * * Feature Update!
 * ** Title screen buttons will now become fully opaque when hovered over them
 *    instead of only when pressed. Update made by Yanfly.
 * 
 * Version 1.30: March 19, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Invisible Battle Sprites
 * *** If you removed a party member during battle and added that exact party
 *     member back into the same slot, their sprite would appear invisible. The
 *     VisuStella Core Engine will fix this problem and prevent it from
 *     happening. Fix made by Olivia.
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > QoL Settings > Misc > Ani: Mirror Offset
 * **** When animations are mirrored, mirror their Offset X values, too.
 * ** New animation name tags added by Arisu:
 * *** <Mirror Offset X> and <No Mirror Offset X>
 * **** If these text tags are placed in an animation's name, it will cause the
 *      offset X value to be mirrored when the animation is mirrored or have it
 *      ignored despite being mirrored.
 * 
 * Version 1.29: March 12, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Interactable window client area does not conform to the
 *    window's declared scale when the scale is anything but 1.0. This will now
 *    be fixed through this plugin. Fix made by Olivia.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * ** Help file updated for updated features.
 * * Feature Update!
 * ** Name Input should be more controller-friendly. If a controller is
 *    connected upon entering the name change scene, it will use the default
 *    manual-entry mode instead of the keyboard-entry mode. If a controller
 *    button is pressed during the keyboard-entry mode, it will automatically
 *    switch to the manual-entry mode.
 * ** This plugin does not provide support for controllers that are undetected
 *    by RPG Maker MZ's default controller support.
 * ** This feature was already implemented since version 1.27 but wasn't
 *    documented so here we are. Update made by Irina.
 * 
 * Version 1.28: March 5, 2021
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: The arrows drawn by a window skin will no longer by
 *    placed on a half pixel when a window's size is an odd number. This would
 *    cause sprite tearing problems and look awful. Fix made by Irina.
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * 
 * Version 1.27: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Moved "Show Scrolling Text, additional functionality" section from Bug
 *    Fixes to Major Changes as it was placed in the wrong section.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly.
 * *** Plugin Parameters > Keyboard Input > Name Input > Banned Words
 * **** Insert words you don't want your players to use for character names.
 * 
 * Version 1.26: February 19, 2021
 * * Bug Fixes!
 * ** Certain Plugin Parameters no longer have settings that restrict them to
 *    a maximum of 1. Fix made by Arisu.
 * * Feature Update!
 * ** Changed the default value for a New Game > Common Event upon Play Testing
 *    to 0 to prevent confusion. Update made by Arisu.
 * 
 * Version 1.25: February 5, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Show Scrolling Text, additional functionality added by Arisu
 * *** The event command "Show Scrolling Text" now has additional functionality
 *     as long as the VisuStella MZ Core Engine is installed. If the game dev
 *     inserts "// Script Call" (without the quotes) inside the scrolling text,
 *     then the entirity of the Show Scrolling Text event command will be ran
 *     as a giant script call event command.
 * *** The reason why this functionality is added is because the "Script..."
 *     event command contains only 12 lines maximum. This means for any script
 *     call larger than 12 lines of code cannot be done by normal means as each
 *     script call is ran as a separate instance.
 * *** By repurposing the "Show Scrolling Text" event command to be able to
 *     function as an extended "Script..." event command, such a thing is now
 *     possible with less hassle and more lines to code with.
 * *** This effect does not occur if the Show Scrolling Text event command does
 *     not have "// Script Call" in its contents.
 * 
 * Version 1.24: January 29, 2021
 * * Documentation Update!
 * ** Plugin Parameters: Custom Parameters Settings added the following note:
 * *** For clarification, these settings do NOT create brand-new parameters for
 *     you to use and add to your game nor are the bonuses supported by other
 *     plugins in the VisuStella MZ library. These settings exist to function
 *     as a bridge for non-VisuStella MZ plugins that have created their own
 *     parameter values and to show them inside VisuStella menus.
 * * Feature Update!
 * ** Default JS Plugin Parameter for the Title Command: "Shutdown" now has a
 *    note in it that reads: "Do NOT use this command with mobile devices or
 *    browser games. All it does is cause the game to display a blank, black
 *    canvas which the player is unable to do anything with. It does NOT force
 *    close the browser tab nor the app."
 * *** This is also why this command is disabled by default for any non-NodeJS
 *     client deployed game versions.
 * ** Disabled some bug fixes made by the Core Engine for the default RMMZ code
 *    base since the 1.1.1 version now contains those very same fixes.
 * 
 * Version 1.23: January 22, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: January 15, 2021
 * * Documentation Update!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Sprite_Timer is added to the spriteset for the parent
 *    scene, making it affected by any filers, zooms, and/or blurs, hindering
 *    its readability.
 * 
 * Version 1.21: January 8, 2021
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Plugin Parameters > Keyboard Input > Controls > WASD Movement
 * *** Plugin Parameters > Keyboard Input > Controls > R Button: Dash Toggle
 * 
 * Version 1.20: January 1, 2021
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.19: December 25, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s) and feature updates!
 * * Bug Fixes!
 * ** Fixed typo inside of the comments inside the JS: Quick Functions.
 * * Feature Update!
 * ** Plugin Parameters > Color Settings > Outline Color is now renamed to
 *    Font Outline.
 * * New Features!
 * ** New Plugin Parameters added by Shaz!
 * *** Plugin Parameters > Color Settings > Gauge Number Outline
 * 
 * Version 1.18: December 18, 2020
 * * Bug Fixes!
 * ** Compatible string text from the Items and Equips Core will no longer
 *    register MaxHP and MaxMP as percentile values for the info window.
 * ** RPG Maker MZ Bug: Gamepads no longer go rapidfire after a cleared input.
 *    There is now a period of delay for gamepads after an input clear.
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Fix made by Yanfly.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * ** Added documentation for new RPG Maker MZ bug fixes!
 * * New Features!
 * ** New Plugin Parameters added by Yanfly!
 * *** Plugin Parameters > Button Assist > Key: Shift
 * *** Plugin Parameters > Button Assist > Key: Tab
 * **** These let you assign text codes to the Shift and Tab buttons for the
 *      Button Assist windows.
 * *** Plugin Parameters > QoL Settings > Misc > NewGame > CommonEvent
 * **** For an all version (including non-play test) common event to start new
 *      games with.
 * 
 * Version 1.17: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.16: December 4, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Button Assist Window for the change name scene will now default to "Tab"
 *    for switching between both modes. Update made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added by Yanfly:
 * *** Plugin Parameters > Keyboard Input > Default Mode
 * **** Select default mode when entering the scene.
 * 
 * Version 1.15: November 29, 2020
 * * Bug Fixes!
 * ** Pressing "Enter" in the change name scene while the actor's name is
 *    completely empty will no longer result in endless buzzer sounds. Fix made
 *    by Arisu.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** For the name change scene, the "Tab" key now also lets the user switch
 *    between the two modes. Update made by Yanfly.
 * * New Features!
 * ** Two new plugin parameters added to Keyboard Input:
 * *** "Switch To Keyboard" and "Switch To Manual"
 * **** These determine the text used for the button assist window when
 *      switching between the two modes. Update made by Yanfly.
 * **** Button Assist window now takes into consideration for these texts.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: November 22, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Command added by Yanfly!
 * *** System: Load Images
 * **** Allows you to (pre) load up images ahead of time.
 * 
 * Version 1.13: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.12: November 8, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * Feature Update!
 * ** Screen Shake Plugin Parameters and JS: Quick Function Plugin Parameters
 *    have been taken off experimental status.
 * * New Features!
 * ** New plugin parameters added by Arisu.
 * *** Plugin Parameters > Keyboard Input
 * **** Settings for the game that utilize keyboard input. These are primarily
 *      for the name input scene (Scene_Name) and the number input event
 *      command. These settings have only been tested on English keyboards and
 *      may or may not be compatible with other languages, so please disable
 *      these features if they do not fit in with your game.
 * 
 * Version 1.11: November 1, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * * Feature Update!
 * ** Bitmap smoothing now takes into consideration for rounding coordinates.
 *    Update made by Irina.
 * 
 * Version 1.10: October 25, 2020
 * * Feature Update!
 * ** Sprite animation location now adjusts position relative to the sprite's
 *    scale, too. Update made by Arisu.
 *
 * Version 1.09: October 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Auto Battle Lock Up. Fixed by Yanfly.
 * *** If an auto battle Actor fights against an enemy whose DEF/MDF is too
 *     high, they will not use any actions at all. This can cause potential
 *     game freezing and softlocks. This plugin will change that and have them
 *     default to a regular Attack.
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.08: October 11, 2020
 * * Feature Update!
 * ** Altered sprite bitmaps via the various draw functions will now be marked
 *    as modified and will automatically purge themselves from graphical memory
 *    upon a sprite's removal to free up more resources. Change made by Yanfly.
 * ** Picture Sprite Origin anchors are now tied to the Game_Picture show and
 *    move commands instead of the Game_Interpretter commands. Change by Arisu.
 * 
 * Version 1.07: October 4, 2020
 * * Documentation Update!
 * ** New documentation added for the new Plugin Parameter category:
 *    "Custom Parameters".
 * * New Features!
 * ** New Plugin Parameter "Custom Parameters" added by Yanfly.
 * *** Create custom parameters for your game! These will appear in
 *     VisuStella MZ menus.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Battler evasion pose can now occur if there is a miss. These were made
 *    separate in RPG Maker MZ and misses didn't enable the evasion pose. Fix
 *    made by Olivia.
 * * New Features!
 * ** New notetags for Maps and name tags for Troops added by Yanfly!
 * *** <Frontview>, <Sideview> to change the battle view for that specific map,
 *     or troop regardless of what other settings are.
 * *** <DTB>, <TPB Active>, <TPB Wait> to change the battle system for that
 *     specific map or troop regardless of what other settings are.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** <Level: x> notetag for enemies is now fixed! Fix made by Arisu.
 * * Documentation Update!
 * ** Documentation added for the new "System: Battle System Change" Plugin
 *    Command and removed the old "System: Set Time Progress Battle".
 * * Feature Update!
 * ** The Plugin Command "System: Set Time Progress Battle" has been replaced
 *    with "System: Battle System Change" instead. This is to accommodate
 *    future plugins that allow for different battle systems. Added by Yanfly.
 * *** If you have previously used "System: Set Time Progress Battle", please
 *     replace them. We apologize for the inconvenience.
 * * New Features!
 * ** In the Core Engine's plugin parameters, you can now set the Battle System
 *    used. This will default to whatever is the game database's setting. This
 *    feature is used for the future when new battle systems are made. Feature
 *    added by Yanfly.
 * 
 * Version 1.04: September 13, 2020
 * * Documentation Update!
 * ** Added new documentation for the "Title Command List" and Title Picture
 *    Buttons" plugin parameters. They now have a dedicated section each.
 * * Feature Updates!
 * ** Moved the "Title Command List" and "Title Picture Buttons" parameters
 *    from the Menu Layout > Title settings. They were far too hidden away and
 *    users had a hard time finding them. Update made by Yanfly.
 * *** Users who have customized these settings before will need to readjust
 *     them again. We apologize for the inconvenience.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Having QoL > Modern Controls disabled (why would you) used to prevent the
 *    down button from working. It works again. Fix made by Yanfly.
 * * New Feature!
 * ** Plugin default settings now come with a "Game End" option on the title
 *    screen. For those updating from version 1.02 or order, you can add this
 *    in by opening the Core Engine > Plugin Parameters > Menu Layout Settings
 *    > press "delete" on Scene_Title > open it up, then the new settings will
 *    fill in automatically.
 * * New Experimental Feature Added:
 * ** Screen Shake Settings added to the Plugin Parameters.
 * *** Screen Shake: Custom Plugin Command added!
 * *** Credit to Aries of Sheratan, who gave us permission to use her formula.
 * *** We'll be expanding on more screen shaking options in the future.
 * * Optimization Update
 * ** Digit Grouping now works more efficiently.
 * 
 * Version 1.02: August 30, 2020
 * * New Feature!
 * ** New Plugin Command: "Picture: Erase All". Added by Olivia.
 * *** Erases all pictures on the screen because it's extremely tedious to do
 *     it one by one.
 * ** New Plugin Command: "Picture: Erase Range"
 * *** Erases all pictures within a range of numbers because it's extremely
 *     tedious to do it one by one.
 * * Optimization Update
 * ** Added a more accurate means of parsing numbers for Digit Grouping.
 * ** Window_Base.prototype.textSizeEx now stores data to a cache.
 * * Documentation Update
 * ** Added a section to Major Changes: New Hard-Coded Features on
 *    Digit Grouping and explaining its intricacies.
 * ** Added a note to Plugin Parameters > UI > Reposition Actors to ignore the
 *    setting if using the Battle Core.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** Digit grouping fixed to allow text codes to detect values larger than
 *    1000. Fix made by Olivia and Yanfly.
 * ** Param Plus, Rate, Flat notetags fixed. Fix made by Yanfly.
 * * New Experimental Feature Added:
 * ** JS: Quick Functions found in the Plugin Parameters
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Animation
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AnimationPoint
 * @text Animation: Play at Coordinate
 * @desc Plays an animation on the screen at a specific x, y
 * coordinate even if there is no sprite attached.
 *
 * @arg AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Plays this animation.
 * @default 1
 * 
 * @arg Coordinates
 *
 * @arg pointX:eval
 * @text X
 * @parent Coordinates
 * @desc X coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg pointY:eval
 * @text Y
 * @parent Coordinates
 * @desc Y coordinate used for the animation.
 * You may use JavaScript code.
 * @default Graphics.height / 2
 *
 * @arg Mirror:eval
 * @text Mirror Animation?
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the animation?
 * @default false
 *
 * @arg Mute:eval
 * @text Mute Animation?
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the animation?
 * @default false
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Audio
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmVolume
 * @text Audio: Change Current BGM Volume
 * @desc Changes the current BGM volume without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGM's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPitch
 * @text Audio: Change Current BGM Pitch
 * @desc Changes the current BGM pitch without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGM's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgmPan
 * @text Audio: Change Current BGM Pan
 * @desc Changes the current BGM pan without changing any of the
 * current BGM's other properties and without restarting the BGM.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGM's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsVolume
 * @text Audio: Change Current BGS Volume
 * @desc Changes the current BGS volume without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg volume:eval
 * @text Volume
 * @desc Change the current BGS's volume to what amount?
 * You may use JavaScript code. Use numbers from 0 to 100.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPitch
 * @text Audio: Change Current BGS Pitch
 * @desc Changes the current BGS pitch without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pitch:eval
 * @text Pitch
 * @desc Change the current BGS's pitch to what amount?
 * You may use JavaScript code. Use numbers from 50 to 150.
 * @default 100
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command AudioChangeBgsPan
 * @text Audio: Change Current BGS Pan
 * @desc Changes the current BGS pan without changing any of the
 * current BGS's other properties and without restarting the BGS.
 *
 * @arg pan:eval
 * @text Pan
 * @desc Change the current BGS's pan to what amount?
 * You may use JavaScript code. Use numbers from -100 to 100.
 * @default 0
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Debug
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command DebugConsoleLastControllerID
 * @text Debug: Current Controller ID
 * @desc PLAY TEST ONLY. Shows current controller ID in debug console.
 * Also copies to computer clipboard if possible.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Export
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllMapText
 * @text Export: All Maps Text
 * @desc PLAY TEST ONLY. Exports all of the text from all maps,
 * their events, event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportAllTroopText
 * @text Export: All Troops Text
 * @desc PLAY TEST ONLY. Exports all of the text from all troops,
 * their event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurMapText
 * @text Export: Current Map Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current map,
 * its events, the event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command ExportCurTroopText
 * @text Export: Current Troop Text
 * @desc PLAY TEST ONLY. Exports all of the text on the current troop,
 * the troop's event pages, and any associated Common Events.
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Game
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OpenURL
 * @text Game: Open URL
 * @desc Opens a website URL from the game.
 *
 * @arg URL:str
 * @text URL
 * @desc Where do you want to take the player?
 * @default https://www.google.com/
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Gold
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command GoldChange
 * @text Gold: Gain/Lose
 * @desc Allows you to give/take more gold than the event editor limit.
 *
 * @arg value:eval
 * @text Value
 * @desc How much gold should the player gain/lose?
 * Use negative values to remove gold. You may use JS.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Map
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapOnceParallel
 * @text Map: Once Parallel
 * @desc Plays a Common Event parallel to the event once without
 * repeating itself when done. Map only!
 *
 * @arg CommonEventID:num
 * @text Common Event ID
 * @type common_event
 * @desc The ID of the parallel Common Event to play.
 * Does NOT repeat itself when finished.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureCoordinatesMode
 * @text Picture: Coordinates Mode
 * @desc Play Test Mode only! Gets the coordinates of a specific
 * picture as you move it across the screen.
 *
 * @arg PictureID:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ID of the pictures to track the coordinates of.
 * @default 1
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEasingType
 * @text Picture: Easing Type
 * @desc Changes the easing type to a number of options.
 *
 * @arg pictureId:num
 * @text Picture ID
 * @type number
 * @min 1
 * @max 100
 * @desc Which picture do you wish to apply this easing to?
 * @default 1
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg LineBreak
 * @text ------------------------
 * @default --------------------------------
 *
 * @arg Instructions1
 * @text Instructions
 * @default Insert this Plugin Command after
 *
 * @arg Instructions2
 * @text -
 * @default a "Move Picture" event command.
 * 
 * @arg Instructions3
 * @text -
 * @default Turn off "Wait for Completion"
 *
 * @arg Instructions4
 * @text -
 * @default in the "Move Picture" event.
 *
 * @arg Instructions5
 * @text -
 * @default You may have to add in your own
 *
 * @arg Instructions6
 * @text -
 * @default "Wait" event command after.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseAll
 * @text Picture: Erase All
 * @desc Erases all pictures on the screen because it's extremely
 * tedious to do it one by one.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureEraseRange
 * @text Picture: Erase Range
 * @desc Erases all pictures within a range of numbers because it's
 * extremely tedious to do it one by one.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type number
 * @min 1
 * @max 100
 * @desc The starting ID of the pictures to erase.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type number
 * @min 1
 * @max 100
 * @desc The ending ID of the pictures to erase.
 * @default 100
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotateBy
 * @text Picture: Rotate By Angle
 * @desc Rotates target picture by a amount angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg AdjustAngle:eval
 * @text Adjust Angle
 * @desc What is the angle you wish to rotate the picture by?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureRotate
 * @text Picture: Rotate to Angle
 * @desc Rotates target picture to a certain angle over a set duration
 * instead of continuously.
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @desc What is the ID of the picture you wish to rotate? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg TargetAngle:eval
 * @text Target Angle
 * @desc What is the target angle you wish to rotate the picture?
 * Use degrees (360 degrees per full rotation).
 * @default 0
 *
 * @arg easingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * @default Linear
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of rotation effect in frames.
 * 60 frames = 1 second. You may use JavaScript code.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 * 
 * @command PictureShowIcon
 * @text Picture: Show Icon
 * @desc Shows an icon instead of a picture image.
 * The picture icon can be controlled like any other picture.
 * 
 * @arg General
 * 
 * @arg PictureID:eval
 * @text Picture ID Number
 * @parent General
 * @desc What is the ID of the picture you wish to show at? Use a
 * number between 1 and 100. You may use JavaScript code.
 * @default 1
 * 
 * @arg IconIndex:eval
 * @text Icon Index
 * @parent General
 * @desc Select the icon index to use for this picture.
 * You may use JavaScript code.
 * @default 23
 *
 * @arg Smooth:eval
 * @text Smooth Icon?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc This will make the icon smoothed out or pixelated.
 * @default false
 * 
 * @arg PictureSettings
 * @text Picture Settings
 *
 * @arg Settings:struct
 * @text Settings
 * @parent PictureSettings
 * @type struct<ShowPicture>
 * @desc Alter the settings for how the picture will be shown.
 * @default {"Position":"","Origin:num":"0","PositionX:eval":"0","PositionY:eval":"0","Scale":"","ScaleX:eval":"100","ScaleY:eval":"100","Blend":"","Opacity:eval":"255","BlendMode:num":"0"}
 * 
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ScreenShake
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ScreenShake
 * @text Screen Shake: Custom
 * @desc Creates a custom screen shake effect and also sets
 * the following uses of screen shake to this style.
 *
 * @arg Type:str
 * @text Shake Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc Select shake style type.
 * @default random
 *
 * @arg Power:num
 * @text Power
 * @type number
 * @min 1
 * @max 9
 * @desc Power level for screen shake.
 * @default 5
 *
 * @arg Speed:num
 * @text Speed
 * @type number
 * @min 1
 * @max 9
 * @desc Speed level for screen shake.
 * @default 5
 *
 * @arg Duration:eval
 * @text Duration
 * @desc Duration of screenshake.
 * You can use code as well.
 * @default 60
 *
 * @arg Wait:eval
 * @text Wait for Completion
 * @parent Duration:eval
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait until completion before moving onto the next event?
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Switch
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeOne
 * @text Switches: Randomize ID(s)
 * @desc Select specific Switch ID's to randomize ON/OFF.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchRandomizeRange
 * @text Switches: Randomize Range
 * @desc Select specific Switch ID Range to randomize ON/OFF.
 * The ratio determines the ON/OFF distribution.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @arg Chance:num
 * @text Chance for ON
 * @type number
 * @min 1
 * @max 100
 * @desc Chance out of 100 that determines the switches to be ON.
 * @default 50
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleOne
 * @text Switches: Toggle ID(s)
 * @desc Select specific Switch ID's to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg IDs:arraynum
 * @text Switch ID(s)
 * @type switch[]
 * @desc Select which Switch ID(s) to toggle.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SwitchToggleRange
 * @text Switches: Toggle Range
 * @desc Select specific Switch ID Range to toggle ON/OFF.
 * ON becomes OFF. OFF becomes ON.
 *
 * @arg StartID:num
 * @text Starting ID
 * @type switch
 * @desc The starting ID of the Switch to toggle.
 * @default 1
 *
 * @arg EndingID:num
 * @text Ending ID
 * @type switch
 * @desc The ending ID of the Switch to toggle.
 * @default 20
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetBattleSystem
 * @text System: Battle System Change
 * @desc Switch to a different battle system in-game.
 * Some battle systems REQUIRE their specific plugins!
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB Wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to switch to.
 * @default database
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemLoadImages
 * @text System: Load Images
 * @desc Allows you to (pre) load up images ahead of time.
 *
 * @arg animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @arg titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory?
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetFontSize
 * @text System: Main Font Size
 * @desc Set the game's main font size.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the font size to this number.
 * @default 26
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetSideView
 * @text System: Side View Battle
 * @desc Switch between Front View or Side View for battle.
 *
 * @arg option:str
 * @text Change To
 * @type select
 * @option Front View
 * @value Front View
 * @option Side View
 * @value Side View
 * @option Toggle
 * @value Toggle
 * @desc Choose which view type to switch to.
 * @default Toggle
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemSetWindowPadding
 * @text System: Window Padding
 * @desc Change the game's window padding amount.
 *
 * @arg option:num
 * @text Change To
 * @type number
 * @min 1
 * @desc Change the game's standard window padding to this value.
 * Default: 12
 * @default 12
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_TextPopup
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command TextPopupShow
 * @text Text Popup: Show Text
 * @desc Adds text to a text popup window to briefly appear.
 * Multiple text popups will be queued.
 *
 * @arg text:json
 * @text Text
 * @type note
 * @desc Write the text that you want to appear here.
 * You may use text codes.
 * @default "Insert message here."
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Variable
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableEvalReference
 * @text Variable: JS Eval
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:eval
 * @text Variable ID
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 1
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:eval
 * @text Operand Modifier
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command VariableJsBlock
 * @text Variable: JS Block
 * @desc Pick a variable ID and value to alter through JS.
 * Functions like RM2k3's Variable Pointers.
 *
 * @arg id:func
 * @text Variable ID
 * @type note
 * @desc This is the target variable to alter.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet varID = 1;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn varID;"
 *
 * @arg operation:str
 * @text Operation Type
 * @type select
 * @option Set
 * @value =
 * @option Add
 * @value +
 * @option Sub
 * @value -
 * @option Mul
 * @value *
 * @option Div
 * @value /
 * @option Mod
 * @value %
 * @desc What operation do you wish to use for this Plugin Command?
 * @default =
 *
 * @arg operand:func
 * @text Operand Modifier
 * @type note
 * @desc Value to be used in calculating the target variable.
 * You may use JavaScript. ie: $gameVariables.value(1)
 * @default "// Declare Variables\nlet value = 0;\n\n// Perform Calculations\n\n// Return Variable ID\nreturn value;"
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
 * @param CoreEngine
 * @default Plugin Parameters
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param QoL:struct
 * @text Quality of Life Settings
 * @type struct<QoLSettings>
 * @desc Quality of Life settings for both developers and players.
 * @default {"PlayTest":"","NewGameBoot:eval":"true","ForceNoPlayTest:eval":"false","OpenConsole:eval":"true","F6key:eval":"true","F7key:eval":"true","NewGameCommonEvent:num":"0","BattleTest":"","BTestItems:eval":"true","BTestWeapons:eval":"true","BTestArmors:eval":"true","BTestAddedQuantity:num":"90","ShiftR_Toggle:eval":"true","ShiftT_Toggle:eval":"true","DigitGrouping":"","DigitGroupingStandardText:eval":"true","DigitGroupingExText:eval":"true","DigitGroupingDamageSprites:eval":"true","DigitGroupingGaugeSprites:eval":"true","DigitGroupingLocale:str":"en-US","PlayerBenefit":"","EncounterRateMinimum:num":"10","EscapeAlways:eval":"true","ImprovedAccuracySystem:eval":"true","AccuracyBoost:eval":"true","LevelUpFullHp:eval":"true","LevelUpFullMp:eval":"true","Pictures":"","AntiZoomPictures:eval":"true","PictureContainers":"","DetachBattlePictureContainer:eval":"false","DetachMapPictureContainer:eval":"false","Misc":"","AnimationMirrorOffset:eval":"false","AutoStretch:str":"default","FontShadows:eval":"false","FontSmoothing:eval":"true","FontWidthFix:eval":"true","KeyItemProtect:eval":"true","MapNameTextCode:eval":"true","ModernControls:eval":"true","MvAnimationRate:num":"4","NewGameCommonEventAll:num":"0","NoTileShadows:eval":"false","PixelateImageRendering:eval":"false","RequireFocus:eval":"false","ShortcutScripts:eval":"true","SmartEventCollisionPriority:eval":"true","SubfolderParse:eval":"true"}
 * 
 * @param BattleSystem:str
 * @text Battle System
 * @type select
 * @option Database Default (Use game database setting)
 * @value database
 * @option -
 * @value database
 * @option DTB: Default Turn Battle
 * @value dtb
 * @option TPB Active: Time Progress Battle (Active)
 * @value tpb active
 * @option TPB wait: Time Progress Battle (Wait)
 * @value tpb wait
 * @option -
 * @value database
 * @option BTB: Brave Turn Battle (Req VisuMZ_2_BattleSystemBTB)
 * @value btb
 * @option CTB: Charge Turn Battle (Req VisuMZ_2_BattleSystemCTB)
 * @value ctb
 * @option ETB: Energy Turn Battle (Req VisuMZ_2_BattleSystemETB)
 * @value etb
 * @option FTB: Free Turn Battle (Req VisuMZ_2_BattleSystemFTB)
 * @value ftb
 * @option OTB: Order Turn Battle (Req VisuMZ_2_BattleSystemOTB)
 * @value otb
 * @option PTB: Press Turn Battle (Req VisuMZ_2_BattleSystemPTB)
 * @value ptb
 * @option STB: Standard Turn Battle (Req VisuMZ_2_BattleSystemSTB)
 * @value stb
 * @desc Choose which battle system to use for your game.
 * Some battle systems REQUIRE their specific plugins!
 * @default database
 *
 * @param Color:struct
 * @text Color Settings
 * @type struct<Color>
 * @desc Change the colors used for in-game text.
 * @default {"BasicColors":"","ColorNormal:str":"0","ColorSystem:str":"16","ColorCrisis:str":"17","ColorDeath:str":"18","ColorGaugeBack:str":"19","ColorHPGauge1:str":"20","ColorHPGauge2:str":"21","ColorMPGauge1:str":"22","ColorMPGauge2:str":"23","ColorMPCost:str":"23","ColorPowerUp:str":"24","ColorPowerDown:str":"25","ColorCTGauge1:str":"26","ColorCTGauge2:str":"27","ColorTPGauge1:str":"28","ColorTPGauge2:str":"29","ColorTPCost:str":"29","ColorPending:str":"#2a847d","ColorExpGauge1:str":"30","ColorExpGauge2:str":"31","ColorMaxLvGauge1:str":"14","ColorMaxLvGauge2:str":"6","AlphaColors":"","OutlineColor:str":"rgba(0, 0, 0, 0.6)","DimColor1:str":"rgba(0, 0, 0, 0.6)","DimColor2:str":"rgba(0, 0, 0, 0)","ItemBackColor1:str":"rgba(32, 32, 32, 0.5)","ItemBackColor2:str":"rgba(0, 0, 0, 0.5)","ConditionalColors":"","ActorHPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If the actor is dead, return death color.\\n} else if (actor.isDead()) {\\n    return this.deathColor();\\n\\n// If the actor is dying, return crisis color.\\n} else if (actor.isDying()) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorMPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If MP rate is below 25%, return crisis color.\\n} else if (actor.mpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ActorTPColor:func":"\"// Set the variables used in this function.\\nlet actor = arguments[0];\\n\\n// Check if the actor exists. If not, return normal.\\nif (!actor) {\\n    return this.normalColor();\\n\\n// If TP rate is below 25%, return crisis color.\\n} else if (actor.tpRate() < 0.25) {\\n    return this.crisisColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","ParamChange:func":"\"// Set the variables used in this function.\\nlet change = arguments[0];\\n\\n// If a positive change, use power up color.\\nif (change > 0) {\\n    return this.powerUpColor();\\n\\n// If a negative change, use power down color.\\n} else if (change < 0) {\\n    return this.powerDownColor();\\n\\n// Otherwise, return the normal color.\\n} else {\\n    return this.normalColor();\\n}\"","DamageColor:func":"\"// Set the variables used in this function.\\nlet colorType = arguments[0];\\n\\n// Check the value of the color type\\n// and return an appropriate color.\\nswitch (colorType) {\\n\\n    case 0: // HP damage\\n        return \\\"#ffffff\\\";\\n\\n    case 1: // HP recover\\n        return \\\"#b9ffb5\\\";\\n\\n    case 2: // MP damage\\n        return \\\"#bb88bb\\\";\\n\\n    case 3: // MP recover\\n        return \\\"#80b0ff\\\";\\n\\n    default:\\n        return \\\"#808080\\\";\\n}\""}
 *
 * @param Gold:struct
 * @text Gold Settings
 * @type struct<Gold>
 * @desc Change up how gold operates and is displayed in-game.
 * @default {"GoldMax:num":"999999999","GoldFontSize:num":"24","GoldIcon:num":"314","GoldOverlap:str":"A Lot","ItemStyle:eval":"true"}
 *
 * @param ImgLoad:struct
 * @text Image Loading
 * @type struct<ImgLoad>
 * @desc Game images that will be loaded upon booting up the game.
 * Use this responsibly!!!
 * @default {"animations:arraystr":"[]","battlebacks1:arraystr":"[]","battlebacks2:arraystr":"[]","characters:arraystr":"[]","enemies:arraystr":"[]","faces:arraystr":"[]","parallaxes:arraystr":"[]","pictures:arraystr":"[]","sv_actors:arraystr":"[]","sv_enemies:arraystr":"[]","system:arraystr":"[\"Balloon\",\"IconSet\"]","tilesets:arraystr":"[]","titles1:arraystr":"[]","titles2:arraystr":"[]"}
 *
 * @param KeyboardInput:struct
 * @text Keyboard Input
 * @type struct<KeyboardInput>
 * @desc Settings for the game that utilize keyboard input.
 * @default {"Controls":"","WASD:eval":"false","DashToggleR:eval":"false","NameInput":"","EnableNameInput:eval":"true","DefaultMode:str":"keyboard","QwertyLayout:eval":"true","NameInputMessage:eval":"\"Type in this character's name.\\nPress \\\\c[5]ENTER\\\\c[0] when you're done.\\n\\n-or-\\n\\nPress \\\\c[5]arrow keys\\\\c[0]/\\\\c[5]TAB\\\\c[0] to switch\\nto manual character entry.\\n\\nPress \\\\c[5]ESC\\\\c[0]/\\\\c[5]TAB\\\\c[0] to use to keyboard.\"","NumberInput":"","EnableNumberInput:eval":"true","ButtonAssist":"","Keyboard:str":"Keyboard","Manual:str":"Manual"}
 *
 * @param MenuBg:struct
 * @text Menu Background Settings
 * @type struct<MenuBg>
 * @desc Change how menu backgrounds look for each scene.
 * @default {"Scene_Menu:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Item:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Skill:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Equip:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Status:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Options:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Save:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Load:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_GameEnd:struct":"{\"SnapshotOpacity:num\":\"128\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Shop:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Name:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}","Scene_Unlisted:struct":"{\"SnapshotOpacity:num\":\"192\",\"BgFilename1:str\":\"\",\"BgFilename2:str\":\"\"}"}
 *
 * @param ButtonAssist:struct
 * @text Menu Button Assist Window
 * @type struct<ButtonAssist>
 * @desc Settings pertaining to the Button Assist window found in in-game menus.
 * @default {"General":"","Enable:eval":"true","Location:str":"bottom","BgType:num":"0","Text":"","TextFmt:str":"%1:%2","MultiKeyFmt:str":"%1/%2","OkText:str":"Select","CancelText:str":"Back","SwitchActorText:str":"Switch Ally","Keys":"","KeyUnlisted:str":"\\}❪%1❫\\{","KeyUP:str":"^","KeyDOWN:str":"v","KeyLEFT:str":"<<","KeyRIGHT:str":">>","KeySHIFT:str":"\\}❪SHIFT❫\\{","KeyTAB:str":"\\}❪TAB❫\\{","KeyA:str":"A","KeyB:str":"B","KeyC:str":"C","KeyD:str":"D","KeyE:str":"E","KeyF:str":"F","KeyG:str":"G","KeyH:str":"H","KeyI:str":"I","KeyJ:str":"J","KeyK:str":"K","KeyL:str":"L","KeyM:str":"M","KeyN:str":"N","KeyO:str":"O","KeyP:str":"P","KeyQ:str":"Q","KeyR:str":"R","KeyS:str":"S","KeyT:str":"T","KeyU:str":"U","KeyV:str":"V","KeyW:str":"W","KeyX:str":"X","KeyY:str":"Y","KeyZ:str":"Z"}
 *
 * @param ControllerButtons:arraystruct
 * @text Controller Button Assist
 * @parent ButtonAssist:struct
 * @type struct<ControllerButtons>[]
 * @desc Make different icons appear for the Button Assist window when using different controllers.
 * @default []
 *
 * @param MenuLayout:struct
 * @text Menu Layout Settings
 * @type struct<MenuLayout>
 * @desc Change how menu layouts look for each scene.
 * @default {"Title:struct":"{\"TitleScreen\":\"\",\"DocumentTitleFmt:str\":\"%1: %2 - Version %3\",\"Subtitle:str\":\"Subtitle\",\"Version:str\":\"0.00\",\"drawGameTitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = $dataSystem.gameTitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 8;\\\\nbitmap.fontSize = 72;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameSubtitle:func\":\"\\\"const x = 20;\\\\nconst y = Graphics.height / 4 + 72;\\\\nconst maxWidth = Graphics.width - x * 2;\\\\nconst text = Scene_Title.subtitle;\\\\nconst bitmap = this._gameTitleSprite.bitmap;\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 6;\\\\nbitmap.fontSize = 48;\\\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\\\\\"center\\\\\\\");\\\"\",\"drawGameVersion:func\":\"\\\"const bitmap = this._gameTitleSprite.bitmap;\\\\nconst x = 0;\\\\nconst y = Graphics.height - 20;\\\\nconst width = Math.round(Graphics.width / 4);\\\\nconst height = 20;\\\\nconst c1 = ColorManager.dimColor1();\\\\nconst c2 = ColorManager.dimColor2();\\\\nconst text = 'Version ' + Scene_Title.version;\\\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\\\nbitmap.fontFace = $gameSystem.mainFontFace();\\\\nbitmap.outlineColor = \\\\\\\"black\\\\\\\";\\\\nbitmap.outlineWidth = 3;\\\\nbitmap.fontSize = 16;\\\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\\\\\"left\\\\\\\");\\\"\",\"CommandRect:func\":\"\\\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\\\nconst rows = this.commandWindowRows();\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ButtonFadeSpeed:num\":\"4\"}","MainMenu:struct":"{\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const width = this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this.mainAreaHeight();\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ItemMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaBottom() - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SkillMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SkillTypeWindow\":\"\",\"SkillTypeBgType:num\":\"0\",\"SkillTypeRect:func\":\"\\\"const rows = 3;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = Graphics.boxWidth - this.mainCommandWidth();\\\\nconst height = this._skillTypeWindow.height;\\\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"const x = 0;\\\\nconst y = this._statusWindow.y + this._statusWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ActorWindow\":\"\",\"ActorBgType:num\":\"0\",\"ActorRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","EquipMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.helpAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.helpAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = this.statusWidth();\\\\nconst height = this.mainAreaHeight();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = this.statusWidth();\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SlotWindow\":\"\",\"SlotBgType:num\":\"0\",\"SlotRect:func\":\"\\\"const commandWindowRect = this.commandWindowRect();\\\\nconst x = this.statusWidth();\\\\nconst y = commandWindowRect.y + commandWindowRect.height;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ItemWindow\":\"\",\"ItemBgType:num\":\"0\",\"ItemRect:func\":\"\\\"return this.slotWindowRect();\\\"\"}","StatusMenu:struct":"{\"ProfileWindow\":\"\",\"ProfileBgType:num\":\"0\",\"ProfileRect:func\":\"\\\"const width = Graphics.boxWidth;\\\\nconst height = this.profileHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.statusParamsWindowRect().y - y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusParamsWindow\":\"\",\"StatusParamsBgType:num\":\"0\",\"StatusParamsRect:func\":\"\\\"const width = this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = 0;\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusEquipWindow\":\"\",\"StatusEquipBgType:num\":\"0\",\"StatusEquipRect:func\":\"\\\"const width = Graphics.boxWidth - this.statusParamsWidth();\\\\nconst height = this.statusParamsHeight();\\\\nconst x = this.statusParamsWidth();\\\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","OptionsMenu:struct":"{\"OptionsWindow\":\"\",\"OptionsBgType:num\":\"0\",\"OptionsRect:func\":\"\\\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\\\nconst width = 400;\\\\nconst height = this.calcWindowHeight(n, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","SaveMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","LoadMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, false);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"ListWindow\":\"\",\"ListBgType:num\":\"0\",\"ListRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","GameEnd:struct":"{\"CommandList:arraystruct\":\"[\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"toTitle\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.toTitle;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\\\\\\\\\"\\\\\\\"}\\\",\\\"{\\\\\\\"Symbol:str\\\\\\\":\\\\\\\"cancel\\\\\\\",\\\\\\\"TextStr:str\\\\\\\":\\\\\\\"Untitled\\\\\\\",\\\\\\\"TextJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return TextManager.cancel;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ShowJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"EnableJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return true;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"ExtJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"return null;\\\\\\\\\\\\\\\"\\\\\\\",\\\\\\\"CallHandlerJS:func\\\\\\\":\\\\\\\"\\\\\\\\\\\\\\\"SceneManager._scene.popScene();\\\\\\\\\\\\\\\"\\\\\\\"}\\\"]\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const rows = 2;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (Graphics.boxHeight - height) / 2;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","ShopMenu:struct":"{\"HelpWindow\":\"\",\"HelpBgType:num\":\"0\",\"HelpRect:func\":\"\\\"const wx = 0;\\\\nconst wy = this.helpAreaTop();\\\\nconst ww = Graphics.boxWidth;\\\\nconst wh = this.helpAreaHeight();\\\\nreturn new Rectangle(wx, wy, ww, wh);\\\"\",\"GoldWindow\":\"\",\"GoldBgType:num\":\"0\",\"GoldRect:func\":\"\\\"const rows = 1;\\\\nconst width = this.mainCommandWidth();\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CommandWindow\":\"\",\"CommandBgType:num\":\"0\",\"CommandRect:func\":\"\\\"const x = 0;\\\\nconst y = this.mainAreaTop();\\\\nconst rows = 1;\\\\nconst width = this._goldWindow.x;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"DummyWindow\":\"\",\"DummyBgType:num\":\"0\",\"DummyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._commandWindow.y + this._commandWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"NumberWindow\":\"\",\"NumberBgType:num\":\"0\",\"NumberRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"StatusWindow\":\"\",\"StatusBgType:num\":\"0\",\"StatusRect:func\":\"\\\"const width = this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nconst x = Graphics.boxWidth - width;\\\\nconst y = this._dummyWindow.y;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"BuyWindow\":\"\",\"BuyBgType:num\":\"0\",\"BuyRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst width = Graphics.boxWidth - this.statusWidth();\\\\nconst height = this._dummyWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"CategoryWindow\":\"\",\"CategoryBgType:num\":\"0\",\"CategoryRect:func\":\"\\\"const x = 0;\\\\nconst y = this._dummyWindow.y;\\\\nconst rows = 1;\\\\nconst width = Graphics.boxWidth;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"SellWindow\":\"\",\"SellBgType:num\":\"0\",\"SellRect:func\":\"\\\"const x = 0;\\\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\\\nconst width = Graphics.boxWidth;\\\\nconst height =\\\\n    this.mainAreaHeight() -\\\\n    this._commandWindow.height -\\\\n    this._categoryWindow.height;\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}","NameMenu:struct":"{\"EditWindow\":\"\",\"EditBgType:num\":\"0\",\"EditRect:func\":\"\\\"const rows = 9;\\\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\\\nconst padding = $gameSystem.windowPadding();\\\\nconst width = 600;\\\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\\\nconst x = (Graphics.boxWidth - width) / 2;\\\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\\\nreturn new Rectangle(x, y, width, height);\\\"\",\"InputWindow\":\"\",\"InputBgType:num\":\"0\",\"InputRect:func\":\"\\\"const x = this._editWindow.x;\\\\nconst y = this._editWindow.y + this._editWindow.height;\\\\nconst rows = 9;\\\\nconst width = this._editWindow.width;\\\\nconst height = this.calcWindowHeight(rows, true);\\\\nreturn new Rectangle(x, y, width, height);\\\"\"}"}
 *
 * @param Param:struct
 * @text Parameter Settings
 * @type struct<Param>
 * @desc Change up the limits of parameters and how they're calculated.
 * @default {"DisplayedParams:arraystr":"[\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","ExtDisplayedParams:arraystr":"[\"MaxHP\",\"MaxMP\",\"ATK\",\"DEF\",\"MAT\",\"MDF\",\"AGI\",\"LUK\"]","BasicParameters":"","CrisisRate:num":"0.25","BasicParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet paramId = arguments[0];\\nlet base = this.paramBase(paramId);\\nlet plus = this.paramPlus(paramId);\\nlet paramRate = this.paramRate(paramId);\\nlet buffRate = this.paramBuffRate(paramId);\\nlet flatBonus = this.paramFlatBonus(paramId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\\n\\n// Determine the limits\\nconst maxValue = this.paramMax(paramId);\\nconst minValue = this.paramMin(paramId);\\n\\n// Final value\\nreturn Math.round(value.clamp(minValue, maxValue));\"","BasicParamCaps":"","BasicActorParamCaps":"","BasicActorParamMax0:str":"9999","BasicActorParamMax1:str":"9999","BasicActorParamMax2:str":"999","BasicActorParamMax3:str":"999","BasicActorParamMax4:str":"999","BasicActorParamMax5:str":"999","BasicActorParamMax6:str":"999","BasicActorParamMax7:str":"999","BasicEnemyParamCaps":"","BasicEnemyParamMax0:str":"999999","BasicEnemyParamMax1:str":"9999","BasicEnemyParamMax2:str":"999","BasicEnemyParamMax3:str":"999","BasicEnemyParamMax4:str":"999","BasicEnemyParamMax5:str":"999","BasicEnemyParamMax6:str":"999","BasicEnemyParamMax7:str":"999","XParameters":"","XParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet xparamId = arguments[0];\\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\\nlet plus = this.xparamPlus(xparamId);\\nlet paramRate = this.xparamRate(xparamId);\\nlet flatBonus = this.xparamFlatBonus(xparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","XParamVocab":"","XParamVocab0:str":"Hit","XParamVocab1:str":"Evasion","XParamVocab2:str":"Critical Rate","XParamVocab3:str":"Critical Evade","XParamVocab4:str":"Magic Evade","XParamVocab5:str":"Magic Reflect","XParamVocab6:str":"Counter","XParamVocab7:str":"HP Regen","XParamVocab8:str":"MP Regen","XParamVocab9:str":"TP Regen","SParameters":"","SParameterFormula:func":"\"// Determine the variables used in this calculation.\\nlet sparamId = arguments[0];\\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\\nlet plus = this.sparamPlus(sparamId);\\nlet paramRate = this.sparamRate(sparamId);\\nlet flatBonus = this.sparamFlatBonus(sparamId);\\n\\n// Formula to determine total parameter value.\\nlet value = (base + plus) * paramRate + flatBonus;\\n\\n// Final value\\nreturn value;\"","SParamVocab":"","SParamVocab0:str":"Aggro","SParamVocab1:str":"Guard","SParamVocab2:str":"Recovery","SParamVocab3:str":"Item Effect","SParamVocab4:str":"MP Cost","SParamVocab5:str":"TP Charge","SParamVocab6:str":"Physical DMG","SParamVocab7:str":"Magical DMG","SParamVocab8:str":"Floor DMG","SParamVocab9:str":"EXP Gain","Icons":"","DrawIcons:eval":"true","IconParam0:str":"84","IconParam1:str":"165","IconParam2:str":"76","IconParam3:str":"81","IconParam4:str":"101","IconParam5:str":"133","IconParam6:str":"140","IconParam7:str":"87","IconXParam0:str":"102","IconXParam1:str":"82","IconXParam2:str":"78","IconXParam3:str":"82","IconXParam4:str":"171","IconXParam5:str":"222","IconXParam6:str":"77","IconXParam7:str":"72","IconXParam8:str":"72","IconXParam9:str":"72","IconSParam0:str":"5","IconSParam1:str":"128","IconSParam2:str":"72","IconSParam3:str":"176","IconSParam4:str":"165","IconSParam5:str":"164","IconSParam6:str":"76","IconSParam7:str":"79","IconSParam8:str":"141","IconSParam9:str":"73"}
 *
 * @param CustomParam:arraystruct
 * @text Custom Parameters
 * @parent Param:struct
 * @type struct<CustomParam>[]
 * @desc Create custom parameters for your game!
 * These will appear in VisuStella MZ menus.
 * @default ["{\"ParamName:str\":\"Strength\",\"Abbreviation:str\":\"str\",\"Icon:num\":\"77\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.atk * 0.75) + (user.def * 0.25);\\\"\"}","{\"ParamName:str\":\"Dexterity\",\"Abbreviation:str\":\"dex\",\"Icon:num\":\"82\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.agi * 0.75) + (user.atk * 0.25);\\\"\"}","{\"ParamName:str\":\"Constitution\",\"Abbreviation:str\":\"con\",\"Icon:num\":\"81\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.def * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Intelligence\",\"Abbreviation:str\":\"int\",\"Icon:num\":\"79\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mat * 0.75) + (user.mdf * 0.25);\\\"\"}","{\"ParamName:str\":\"Wisdom\",\"Abbreviation:str\":\"wis\",\"Icon:num\":\"72\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.mdf * 0.75) + (user.luk * 0.25);\\\"\"}","{\"ParamName:str\":\"Charisma\",\"Abbreviation:str\":\"cha\",\"Icon:num\":\"84\",\"Type:str\":\"integer\",\"ValueJS:json\":\"\\\"// Declare Constants\\\\nconst user = this;\\\\n\\\\n// Calculations\\\\nreturn (user.luk * 0.75) + (user.agi * 0.25);\\\"\"}"]
 *
 * @param ScreenResolution:struct
 * @text Screen Resolution Settings
 * @type struct<ScreenResolution>
 * @desc Alter various properties to make the game look better for varying screen resolutions.
 * @default {"Maps":"","AutoScrollLockX:eval":"true","AutoScrollLockY:eval":"true","DisplayLockX:num":"0.15625","DisplayLockY:num":"0.00000","Troops":"","RepositionActors:eval":"true","RepositionEnemies:eval":"true","RepositionEnemies130:eval":"false"}
 *
 * @param ScreenShake:struct
 * @text Screen Shake Settings
 * @type struct<ScreenShake>
 * @desc Get more screen shake effects into your game!
 * @default {"DefaultStyle:str":"random","originalJS:func":"\"// Calculation\\nthis.x += Math.round($gameScreen.shake());\"","randomJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","horzJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\"","vertJS:func":"\"// Calculation\\n// Original Formula by Aries of Sheratan\\nconst power = $gameScreen._shakePower * 0.75;\\nconst speed = $gameScreen._shakeSpeed * 0.60;\\nconst duration = $gameScreen._shakeDuration;\\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\""}
 *
 * @param TitleCommandList:arraystruct
 * @text Title Command List
 * @type struct<Command>[]
 * @desc Window commands used by the title screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"newGame\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.newGame;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandNewGame();\\\"\"}","{\"Symbol:str\":\"continue\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.continue_;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return DataManager.isAnySavefileExists();\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandContinue();\\\"\"}","{\"Symbol:str\":\"options\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.options;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandOptions();\\\"\"}","{\"Symbol:str\":\"shutdown\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.gameEnd;\\\"\",\"ShowJS:func\":\"\\\"return Utils.isNwjs();\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager.exit();\\\\n\\\\n// Note!\\\\n// Do NOT use this command with mobile devices or\\\\n// browser games. All it does is cause the game to\\\\n// display a blank, black canvas which the player\\\\n// is unable to do anything with. It does NOT force\\\\n// close the browser tab nor the app.\\\"\"}"]
 *
 * @param TitlePicButtons:arraystruct
 * @text Title Picture Buttons
 * @type struct<TitlePictureButton>[]
 * @desc Buttons that can be inserted into the title screen.
 * Add new title buttons here.
 * @default []
 *
 * @param UI:struct
 * @text UI Settings
 * @type struct<UI>
 * @desc Change up various in-game UI aspects.
 * @default {"UIArea":"","FadeSpeed:num":"24","BoxMargin:num":"4","CommandWidth:num":"240","BottomHelp:eval":"false","RightMenus:eval":"true","ShowButtons:eval":"true","cancelShowButton:eval":"true","menuShowButton:eval":"true","pagedownShowButton:eval":"true","numberShowButton:eval":"true","ButtonHeight:num":"52","BottomButtons:eval":"false","SideButtons:eval":"true","MenuObjects":"","LvExpGauge:eval":"true","ParamArrow:str":"→","TextCodeSupport":"","TextCodeClassNames:eval":"true","TextCodeNicknames:eval":"true"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Adjust various in-game window settings.
 * @default {"WindowDefaults":"","EnableMasking:eval":"false","LineHeight:num":"36","ItemPadding:num":"8","BackOpacity:num":"192","TranslucentOpacity:num":"160","OpenSpeed:num":"32","ColSpacing:num":"8","RowSpacing:num":"4","ScrollBar":"","ShowScrollBar:eval":"true","BarThickness:num":"2","BarOffset:num":"+2","BarBodyColor:str":"0","OffBarColor:str":"7","OffBarOpacity:num":"128","SelectableItems":"","ShowItemBackground:eval":"true","ItemHeight:num":"8","DrawItemBackgroundJS:func":"\"const rect = arguments[0];\\nconst c1 = ColorManager.itemBackColor1();\\nconst c2 = ColorManager.itemBackColor2();\\nconst x = rect.x;\\nconst y = rect.y;\\nconst w = rect.width;\\nconst h = rect.height;\\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\\nthis.contentsBack.strokeRect(x, y, w, h, c1);\"","TextPopup":"","DurationPerChat:num":"1.5","MinDuration:num":"90","MaxDuration:num":"300"}
 *
 * @param jsQuickFunc:arraystruct
 * @text JS: Quick Functions
 * @type struct<jsQuickFunc>[]
 * @desc Create quick JavaScript functions available from the
 * global namespace. Use with caution and moderation!!!
 * @default ["{\"FunctionName:str\":\"Example\",\"CodeJS:json\":\"\\\"// Insert this as a function anywhere you can input code\\\\n// such as Script Calls or Conditional Branch Scripts.\\\\n\\\\n// Process Code\\\\nreturn 'Example';\\\"\"}","{\"FunctionName:str\":\"Bad  Code  Name\",\"CodeJS:json\":\"\\\"// If a function name has spaces in them, the spaces will\\\\n// be removed. \\\\\\\"Bad  Code  Name\\\\\\\" becomes \\\\\\\"BadCodeName\\\\\\\".\\\\n\\\\n// Process Code\\\\nOhNoItsBadCode()\\\\n\\\\n// If a function has bad code, a fail safe will catch the\\\\n// error and display it in the console.\\\"\"}","{\"FunctionName:str\":\"RandomNumber\",\"CodeJS:json\":\"\\\"// This generates a random number from 0 to itself.\\\\n// Example: RandomNumber(10)\\\\n\\\\n// Process Code\\\\nconst number = (arguments[0] || 0) + 1;\\\\nreturn Math.floor(number * Math.random());\\\"\"}","{\"FunctionName:str\":\"RandomBetween\",\"CodeJS:json\":\"\\\"// This generates a random number between two arguments.\\\\n// Example: RandomBetween(5, 10)\\\\n\\\\n// Process Code\\\\nlet min = Math.min(arguments[0] || 0, arguments[1] || 0);\\\\nlet max = Math.max(arguments[0] || 0, arguments[1] || 0);\\\\nreturn Math.floor(Math.random() * (max - min + 1) + min);\\\"\"}","{\"FunctionName:str\":\"RandomFrom\",\"CodeJS:json\":\"\\\"// Selects a number from the list of inserted numbers.\\\\n// Example: RandomFrom(5, 10, 15, 20)\\\\n\\\\n// Process Code\\\\nreturn arguments[Math.randomInt(arguments.length)];\\\"\"}"]
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
 * Quality of Life Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~QoLSettings:
 *
 * @param PlayTest
 * @text Play Test
 *
 * @param NewGameBoot:eval
 * @text New Game on Boot
 * @parent PlayTest
 * @type boolean
 * @on Start New Game
 * @off Keep Title Screen
 * @desc Automatically start a new game on Play Test?
 * Only enabled during Play Test.
 * @default false
 *
 * @param ForceNoPlayTest:eval
 * @text No Play Test Mode
 * @parent PlayTest
 * @type boolean
 * @on Cancel Play Test
 * @off Keep Play Test
 * @desc Force the game to be out of Play Test mode when play testing.
 * @default false
 *
 * @param OpenConsole:eval
 * @text Open Console on Boot
 * @parent PlayTest
 * @type boolean
 * @on Open
 * @off Don't Open
 * @desc Open the Debug Console upon booting up your game?
 * Only enabled during Play Test.
 * @default true
 *
 * @param F6key:eval
 * @text F6: Toggle Sound
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F6 Key Function: Turn on all sound to 100% or to 0%,
 * toggling between the two.
 * @default true
 *
 * @param F7key:eval
 * @text F7: Toggle Fast Mode
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc F7 Key Function: Toggle fast mode.
 * @default true
 *
 * @param CtrlQuickLoad:eval
 * @text CTRL + n: Quick Load
 * @parent PlayTest
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc CTRL + a number from 1 to 9 will yield a quick load of
 * that safe file. Does not count auto saves.
 * @default true
 *
 * @param NewGameCommonEvent:num
 * @text NewGame > CommonEvent
 * @parent PlayTest
 * @type common_event
 * @desc Runs a common event each time a new game during play test
 * session is started.
 * @default 0
 *
 * @param BattleTest
 * @text Battle Test
 *
 * @param BTestItems:eval
 * @text Add Item Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database item?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestWeapons:eval
 * @text Add Weapon Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database weapon?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestArmors:eval
 * @text Add Armor Type
 * @parent BattleTest
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add copies of each database armor?
 * Effective only during battle test.
 * @default true
 *
 * @param BTestAddedQuantity:num
 * @text Added Quantity
 * @parent BattleTest
 * @type number
 * @min 1
 * @desc Determines how many items are added during a battle test instead of the maximum amount.
 * @default 90
 *
 * @param ShiftR_Toggle:eval
 * @text Shift+R: Recover All
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + R will refill the whole party's HP and MP and status.
 * @default true
 *
 * @param ShiftT_Toggle:eval
 * @text Shift+T: Full TP
 * @parent BattleTest
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc For Play Test only! During battle, pressing SHIFT + T will refill the whole party's TP.
 * @default true
 *
 * @param DigitGrouping
 * @text Digit Grouping
 *
 * @param DigitGroupingStandardText:eval
 * @text Standard Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * standard text inside windows?
 * @default true
 *
 * @param DigitGroupingExText:eval
 * @text Ex Text
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * ex text, written through drawTextEx (like messages)?
 * @default true
 *
 * @param DigitGroupingDamageSprites:eval
 * @text Damage Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * in-battle damage sprites?
 * @default true
 *
 * @param DigitGroupingGaugeSprites:eval
 * @text Gauge Sprites
 * @parent DigitGrouping
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Make numbers like 1234567 appear like 1,234,567 for
 * visible gauge sprites such as HP, MP, and TP gauges?
 * @default true
 *
 * @param DigitGroupingLocale:str
 * @text Country/Locale
 * @parent DigitGrouping
 * @type combo
 * @option ar-SA
 * @option bn-BD
 * @option bn-IN
 * @option cs-CZ
 * @option da-DK
 * @option de-AT
 * @option de-CH
 * @option de-DE
 * @option el-GR
 * @option en-AU
 * @option en-CA
 * @option en-GB
 * @option en-IE
 * @option en-IN
 * @option en-NZ
 * @option en-US
 * @option en-ZA
 * @option es-AR
 * @option es-CL
 * @option es-CO
 * @option es-ES
 * @option es-MX
 * @option es-US
 * @option fi-FI
 * @option fr-BE
 * @option fr-CA
 * @option fr-CH
 * @option fr-FR
 * @option he-IL
 * @option hi-IN
 * @option hu-HU
 * @option id-ID
 * @option it-CH
 * @option it-IT
 * @option jp-JP
 * @option ko-KR
 * @option nl-BE
 * @option nl-NL
 * @option no-NO
 * @option pl-PL
 * @option pt-BR
 * @option pt-PT
 * @option ro-RO
 * @option ru-RU
 * @option sk-SK
 * @option sv-SE
 * @option ta-IN
 * @option ta-LK
 * @option th-TH
 * @option tr-TR
 * @option zh-CN
 * @option zh-HK
 * @option zh-TW
 * @desc Base the digit grouping on which country/locale?
 * @default en-US
 *
 * @param PlayerBenefit
 * @text Player Benefit
 *
 * @param EncounterRateMinimum:num
 * @text Encounter Rate Min
 * @parent PlayerBenefit
 * @min 1
 * @desc Minimum number of steps the player can take without any random encounters.
 * @default 10
 *
 * @param EscapeAlways:eval
 * @text Escape Always
 * @parent PlayerBenefit
 * @type boolean
 * @on Always
 * @off Default
 * @desc If the player wants to escape a battle, let them escape the battle with 100% chance.
 * @default true
 *
 * @param ImprovedAccuracySystem:eval
 * @text Accuracy Formula
 * @parent PlayerBenefit
 * @type boolean
 * @on Improve
 * @off Default
 * @desc Accuracy formula calculation change to
 * Skill Hit% * (User HIT - Target EVA) for better results.
 * @default true
 *
 * @param AccuracyBoost:eval
 * @text Accuracy Boost
 * @parent PlayerBenefit
 * @type boolean
 * @on Boost
 * @off Default
 * @desc Boost HIT and EVA rates in favor of the player.
 * @default true
 *
 * @param LevelUpFullHp:eval
 * @text Level Up -> Full HP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full HP when an actor levels up.
 * @default true
 *
 * @param LevelUpFullMp:eval
 * @text Level Up -> Full MP
 * @parent PlayerBenefit
 * @type boolean
 * @on Heal
 * @off Default
 * @desc Recovers full MP when an actor levels up.
 * @default true
 *
 * @param Pictures
 * @text Picture-Related
 *
 * @param AntiZoomPictures:eval
 * @text Anti-Zoom Pictures
 * @parent Pictures
 * @type boolean
 * @on Anti-Zoom
 * @off Normal
 * @desc If on, prevents pictures from being affected by zoom.
 * @default true
 * 
 * @param PictureContainers
 * @text Picture Containers
 * @parent Pictures
 *
 * @param DetachBattlePictureContainer:eval
 * @text Detach in Battle
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the battle scene.
 * @default false
 *
 * @param DetachMapPictureContainer:eval
 * @text Detach in Map
 * @parent PictureContainers
 * @type boolean
 * @on Detach
 * @off Normal
 * @desc If detached, picture container will be separated from
 * the spriteset while on the map scene.
 * @default false
 *
 * @param Misc
 * @text Misc
 *
 * @param AnimationMirrorOffset:eval
 * @text Ani: Mirror Offset
 * @parent Misc
 * @type boolean
 * @on Mirror
 * @off Don't Mirror
 * @desc When animations are mirrored,
 * mirror their Offset X values, too.
 * @default false
 *
 * @param AutoStretch:str
 * @text Auto-Stretch
 * @parent Misc
 * @type select
 * @option Default
 * @value default
 * @option Stretch
 * @value stretch
 * @option Normal
 * @value normal
 * @desc Automatically stretch the game to fit the size of the client?
 * @default default
 *
 * @param FontShadows:eval
 * @text Font Shadows
 * @parent Misc
 * @type boolean
 * @on Shadows
 * @off Outlines
 * @desc If on, text uses shadows instead of outlines.
 * @default false
 *
 * @param FontSmoothing:eval
 * @text Font Smoothing
 * @parent Misc
 * @type boolean
 * @on Smooth
 * @off None
 * @desc If on, smoothes fonts shown in-game.
 * @default true
 *
 * @param FontWidthFix:eval
 * @text Font Width Fix
 * @parent Misc
 * @type boolean
 * @on Fix
 * @off Default
 * @desc Fixes the font width issue with instant display
 * non-monospaced fonts in the Message Window.
 * @default true
 *
 * @param KeyItemProtect:eval
 * @text Key Item Protection
 * @parent Misc
 * @type boolean
 * @on Unsellable
 * @off Sellable
 * @desc If on, prevents Key Items from being able to be sold and from being able to be consumed.
 * @default true
 *
 * @param MapNameTextCode:eval
 * @text Map Name Text Code
 * @parent Misc
 * @type boolean
 * @on Text Codes
 * @off Raw Text
 * @desc If on, map names will use text codes.
 * If off, only the raw map name will be used.
 * @default true
 *
 * @param ModernControls:eval
 * @text Modern Controls
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Default
 * @desc If on, allows usage of the Home/End buttons as well as other modern configs. Affects other VisuStella plugins.
 * @default true
 *
 * @param MvAnimationRate:num
 * @text MV Animation Rate
 * @parent Misc
 * @min 1
 * @max 10
 * @desc Adjusts the rate at which MV animations play.
 * Default: 4. Lower for faster. Higher for slower.
 * @default 4
 *
 * @param NewGameCommonEventAll:num
 * @text NewGame > CommonEvent
 * @parent Misc
 * @type common_event
 * @desc Runs a common event each time a new game during any session is started.
 * @default 0
 *
 * @param NoTileShadows:eval
 * @text No Tile Shadows
 * @parent Misc
 * @type boolean
 * @on Disable Tile Shadows
 * @off Default
 * @desc Removes tile shadows from being displayed in-game.
 * @default false
 *
 * @param PixelateImageRendering:eval
 * @text Pixel Image Rendering
 * @parent Misc
 * @type boolean
 * @on Pixelate
 * @off Smooth
 * @desc If on, pixelates the image rendering (for pixel games).
 * @default false
 *
 * @param RequireFocus:eval
 * @text Require Focus?
 * @parent Misc
 * @type boolean
 * @on Require
 * @off No Requirement
 * @desc Requires the game to be focused? If the game isn't
 * focused, it will pause if it's not the active window.
 * @default true
 *
 * @param ShortcutScripts:eval
 * @text Shortcut Scripts
 * @parent Misc
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables shortcut-based scripts.
 * View the helpfile for more information.
 * @default true
 *
 * @param SmartEventCollisionPriority:eval
 * @text Smart Event Collision
 * @parent Misc
 * @type boolean
 * @on Only Same Level
 * @off Default
 * @desc Makes events only able to collide with one another if they're 'Same as characters' priority.
 * @default true
 *
 * @param SubfolderParse:eval
 * @text Subfolder Name Purge
 * @parent Misc
 * @type boolean
 * @on Purge Subfolders Names
 * @off Don't Purge Name
 * @desc Purge subfolder name from Plugin Parameters when reading
 * data to let Plugin Commands work properly.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Color:
 *
 * @param BasicColors
 * @text Basic Colors
 *
 * @param ColorNormal:str
 * @text Normal
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param ColorSystem:str
 * @text System
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 16
 *
 * @param ColorCrisis:str
 * @text Crisis
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param ColorDeath:str
 * @text Death
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 18
 *
 * @param ColorGaugeBack:str
 * @text Gauge Back
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param ColorHPGauge1:str
 * @text HP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 20
 *
 * @param ColorHPGauge2:str
 * @text HP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 21
 *
 * @param ColorMPGauge1:str
 * @text MP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 22
 *
 * @param ColorMPGauge2:str
 * @text MP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorMPCost:str
 * @text MP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 23
 *
 * @param ColorPowerUp:str
 * @text Power Up
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param ColorPowerDown:str
 * @text Power Down
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 25
 *
 * @param ColorCTGauge1:str
 * @text CT Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 26
 *
 * @param ColorCTGauge2:str
 * @text CT Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param ColorTPGauge1:str
 * @text TP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 28
 *
 * @param ColorTPGauge2:str
 * @text TP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorTPCost:str
 * @text TP Cost
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 29
 *
 * @param ColorPending:str
 * @text Pending Color
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #2a847d
 *
 * @param ColorExpGauge1:str
 * @text EXP Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 30
 *
 * @param ColorExpGauge2:str
 * @text EXP Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 31
 *
 * @param ColorMaxLvGauge1:str
 * @text MaxLv Gauge 1
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 14
 *
 * @param ColorMaxLvGauge2:str
 * @text MaxLv Gauge 2
 * @parent BasicColors
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 6
 *
 * @param AlphaColors
 * @text Alpha Colors
 *
 * @param OutlineColor:str
 * @text Window Font Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param OutlineColorGauge:str
 * @text Gauge Number Outline
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param DimColor1:str
 * @text Dim Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.6)
 *
 * @param DimColor2:str
 * @text Dim Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0)
 *
 * @param ItemBackColor1:str
 * @text Item Back Color 1
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(32, 32, 32, 0.5)
 *
 * @param ItemBackColor2:str
 * @text Item Back Color 2
 * @parent AlphaColors
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 0.5)
 *
 * @param ConditionalColors
 * @text Conditional Colors
 *
 * @param ActorHPColor:func
 * @text JS: Actor HP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what HP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If the actor is dead, return death color.\n} else if (actor.isDead()) {\n    return this.deathColor();\n\n// If the actor is dying, return crisis color.\n} else if (actor.isDying()) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorMPColor:func
 * @text JS: Actor MP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what MP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If MP rate is below 25%, return crisis color.\n} else if (actor.mpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ActorTPColor:func
 * @text JS: Actor TP Color
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what TP color to use for actors.
 * @default "// Set the variables used in this function.\nlet actor = arguments[0];\n\n// Check if the actor exists. If not, return normal.\nif (!actor) {\n    return this.normalColor();\n\n// If TP rate is below 25%, return crisis color.\n} else if (actor.tpRate() < 0.25) {\n    return this.crisisColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param ParamChange:func
 * @text JS: Parameter Change
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining whatcolor to use for parameter changes.
 * @default "// Set the variables used in this function.\nlet change = arguments[0];\n\n// If a positive change, use power up color.\nif (change > 0) {\n    return this.powerUpColor();\n\n// If a negative change, use power down color.\n} else if (change < 0) {\n    return this.powerDownColor();\n\n// Otherwise, return the normal color.\n} else {\n    return this.normalColor();\n}"
 *
 * @param DamageColor:func
 * @text JS: Damage Colors
 * @type note
 * @parent ConditionalColors
 * @desc Code used for determining what color to use for damage types.
 * @default "// Set the variables used in this function.\nlet colorType = arguments[0];\n\n// Check the value of the color type\n// and return an appropriate color.\nswitch (colorType) {\n\n    case 0: // HP damage\n        return \"#ffffff\";\n\n    case 1: // HP recover\n        return \"#b9ffb5\";\n\n    case 2: // MP damage\n        return \"#bb88bb\";\n\n    case 3: // MP recover\n        return \"#80b0ff\";\n\n    default:\n        return \"#808080\";\n}"
 */
/* ----------------------------------------------------------------------------
 * Gold Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Gold:
 *
 * @param GoldMax:num
 * @text Gold Max
 * @type num
 * @min 1
 * @desc Maximum amount of Gold the party can hold.
 * Default 99999999
 * @default 99999999
 *
 * @param GoldFontSize:num
 * @text Gold Font Size
 * @type number
 * @min 1
 * @desc Font size used for displaying Gold inside Gold Windows.
 * Default: 26
 * @default 24
 *
 * @param GoldIcon:num
 * @text Gold Icon
 * @desc Icon used to represent Gold.
 * Use 0 for no icon.
 * @default 314
 *
 * @param GoldOverlap:str
 * @text Gold Overlap
 * @desc Text used too much Gold to fit in the window.
 * @default A Lot
 *
 * @param ItemStyle:eval
 * @text Item Style
 * @type boolean
 * @on Enable
 * @off Normal
 * @desc Draw gold in the item style?
 * ie: Icon, Label, Value
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Image Loading Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ImgLoad:
 *
 * @param animations:arraystr
 * @text img/animations/
 * @type file[]
 * @dir img/animations/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks1:arraystr
 * @text img/battlebacks1/
 * @type file[]
 * @dir img/battlebacks1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param battlebacks2:arraystr
 * @text img/battlebacks2/
 * @type file[]
 * @dir img/battlebacks2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param characters:arraystr
 * @text img/characters/
 * @type file[]
 * @dir img/characters/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param enemies:arraystr
 * @text img/enemies/
 * @type file[]
 * @dir img/enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param faces:arraystr
 * @text img/faces/
 * @type file[]
 * @dir img/faces/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param parallaxes:arraystr
 * @text img/parallaxes/
 * @type file[]
 * @dir img/parallaxes/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param pictures:arraystr
 * @text img/pictures/
 * @type file[]
 * @dir img/pictures/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_actors:arraystr
 * @text img/sv_actors/
 * @type file[]
 * @dir img/sv_actors/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param sv_enemies:arraystr
 * @text img/sv_enemies/
 * @type file[]
 * @dir img/sv_enemies/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param system:arraystr
 * @text img/system/
 * @type file[]
 * @dir img/system/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default ["Balloon","IconSet"]
 *
 * @param tilesets:arraystr
 * @text img/tilesets/
 * @type file[]
 * @dir img/tilesets/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles1:arraystr
 * @text img/titles1/
 * @type file[]
 * @dir img/titles1/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 * @param titles2:arraystr
 * @text img/titles2/
 * @type file[]
 * @dir img/titles2/
 * @desc Which files do you wish to load from this directory upon
 * starting up the game?
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Keyboard Input Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~KeyboardInput:
 *
 * @param Controls
 *
 * @param WASD:eval
 * @text WASD Movement
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables WASD movement for your game project.
 * Moves the W page down button to E.
 * @default false
 *
 * @param DashToggleR:eval
 * @text R Button: Dash Toggle
 * @parent Controls
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables or disables R button as an Always Dash option toggle.
 * @default false
 *
 * @param NameInput
 * @text Name Input
 *
 * @param EnableNameInput:eval
 * @text Enable?
 * @parent NameInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for name entry.
 * Only tested with English keyboards.
 * @default true
 * 
 * @param DefaultMode:str
 * @text Default Mode
 * @parent NameInput
 * @type select
 * @option Default - Uses Arrow Keys to select letters.
 * @value default
 * @option Keyboard - Uses Keyboard to type in letters.
 * @value keyboard
 * @desc Select default mode when entering the scene.
 * @default keyboard
 *
 * @param QwertyLayout:eval
 * @text QWERTY Layout
 * @parent NameInput
 * @type boolean
 * @on QWERTY Layout
 * @off ABCDEF Layout
 * @desc Uses the QWERTY layout for manual entry.
 * @default true
 *
 * @param NameInputMessage:eval
 * @text Keyboard Message
 * @parent NameInput
 * @type note
 * @desc The message displayed when allowing keyboard entry.
 * You may use text codes here.
 * @default "Type in this character's name.\nPress \\c[5]ENTER\\c[0] when you're done.\n\n-or-\n\nPress \\c[5]arrow keys\\c[0]/\\c[5]TAB\\c[0] to switch\nto manual character entry.\n\nPress \\c[5]ESC\\c[0]/\\c[5]TAB\\c[0] to use to keyboard."
 * 
 * @param BannedWords:arraystr
 * @text Banned Words
 * @parent NameInput
 * @type string[]
 * @desc Players cannot use these words for names.
 * These include words inside the names.
 * @default []
 *
 * @param NumberInput
 * @text Number Input
 *
 * @param EnableNumberInput:eval
 * @text Enable?
 * @parent NumberInput
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables keyboard input for number entry.
 * Only tested with English keyboards.
 * @default true
 *
 * @param ButtonAssist
 * @text Button Assist
 * 
 * @param Finish:str
 * @text Finish Entry
 * @parent ButtonAssist
 * @desc Text used to describe finish entry.
 * @default Finish
 * 
 * @param PageChange:str
 * @text Page Change
 * @parent ButtonAssist
 * @desc Text used to describe character page changing.
 * @default Page
 * 
 * @param Keyboard:str
 * @text Switch To Keyboard
 * @parent ButtonAssist
 * @desc Text used to describe the keyboard switch.
 * @default Keyboard
 * 
 * @param Manual:str
 * @text Switch To Manual
 * @parent ButtonAssist
 * @desc Text used to describe the manual entry switch.
 * @default Manual
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuBg:
 * 
 * @param BlurStrength:num
 * @text Blur Strength
 * @desc Strength used for menu background snapshots.
 * Default: 8. Higher is stronger. Lower is weaker.
 * @default 8
 *
 * @param Scene_Menu:struct
 * @text Scene_Menu
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Item:struct
 * @text Scene_Item
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Skill:struct
 * @text Scene_Skill
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Equip:struct
 * @text Scene_Equip
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Status:struct
 * @text Scene_Status
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Options:struct
 * @text Scene_Options
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Save:struct
 * @text Scene_Save
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Load:struct
 * @text Scene_Load
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_GameEnd:struct
 * @text Scene_GameEnd
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"128","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Shop:struct
 * @text Scene_Shop
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Name:struct
 * @text Scene_Name
 * @type struct<BgSettings>
 * @desc The individual background settings for this scene.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Scene_Unlisted:struct
 * @text Scene_Unlisted
 * @type struct<BgSettings>
 * @desc The individual background settings for any scenes that aren't listed here.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Button Assist Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ButtonAssist:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Enable the Menu Button Assist Window.
 * @default true
 *
 * @param Location:str
 * @text Location
 * @parent General
 * @type select
 * @option Top of Screen
 * @value top
 * @option Bottom of Screen
 * @value bottom
 * @desc Determine the location of the Button Assist Window.
 * Requires Plugin Parameters => UI => Side Buttons ON.
 * @default bottom
 *
 * @param BgType:num
 * @text Background Type
 * @parent General
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SplitEscape:eval
 * @text Split "Escape"
 * @parent General
 * @type boolean
 * @on Split
 * @off Don't
 * @desc "Split" makes separate instances of "Cancel" and "Menu".
 * "Don't" will consolidate both into "Escape".
 * @default false
 *
 * @param Text
 *
 * @param TextFmt:str
 * @text Text Format
 * @parent Text
 * @desc Format on how the buttons are displayed.
 * Text codes allowed. %1 - Key, %2 - Text
 * @default %1:%2
 *
 * @param MultiKeyFmt:str
 * @text Multi-Key Format
 * @parent Text
 * @desc Format for actions with multiple keys.
 * Text codes allowed. %1 - Key 1, %2 - Key 2
 * @default %1/%2
 *
 * @param OkText:str
 * @text OK Text
 * @parent Text
 * @desc Default text used to display OK Key Action.
 * Text codes allowed.
 * @default Select
 *
 * @param CancelText:str
 * @text Cancel Text
 * @parent Text
 * @desc Default text used to display Cancel Key Action.
 * Text codes allowed.
 * @default Back
 *
 * @param SwitchActorText:str
 * @text Switch Actor Text
 * @parent Text
 * @desc Default text used to display Switch Actor Action.
 * Text codes allowed.
 * @default Switch Ally
 *
 * @param Keys
 *
 * @param KeyUnlisted:str
 * @text Key: Unlisted Format
 * @parent Keys
 * @desc If a key is not listed below, use this format.
 * Text codes allowed. %1 - Key
 * @default \}❪%1❫\{
 *
 * @param KeyUP:str
 * @text Key: Up
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default ^
 *
 * @param KeyDOWN:str
 * @text Key: Down
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default v
 *
 * @param KeyLEFT:str
 * @text Key: Left
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default <<
 *
 * @param KeyRIGHT:str
 * @text Key: Right
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default >>
 *
 * @param KeySHIFT:str
 * @text Key: Shift
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪SHIFT❫\{
 *
 * @param KeyTAB:str
 * @text Key: Tab
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default \}❪TAB❫\{
 *
 * @param KeyA:str
 * @text Key: A
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default A
 *
 * @param KeyB:str
 * @text Key: B
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default B
 *
 * @param KeyC:str
 * @text Key: C
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default C
 *
 * @param KeyD:str
 * @text Key: D
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default D
 *
 * @param KeyE:str
 * @text Key: E
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default E
 *
 * @param KeyF:str
 * @text Key: F
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default F
 *
 * @param KeyG:str
 * @text Key: G
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default G
 *
 * @param KeyH:str
 * @text Key: H
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default H
 *
 * @param KeyI:str
 * @text Key: I
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default I
 *
 * @param KeyJ:str
 * @text Key: J
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default J
 *
 * @param KeyK:str
 * @text Key: K
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default K
 *
 * @param KeyL:str
 * @text Key: L
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default L
 *
 * @param KeyM:str
 * @text Key: M
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default M
 *
 * @param KeyN:str
 * @text Key: N
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default N
 *
 * @param KeyO:str
 * @text Key: O
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default O
 *
 * @param KeyP:str
 * @text Key: P
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default P
 *
 * @param KeyQ:str
 * @text Key: Q
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Q
 *
 * @param KeyR:str
 * @text Key: R
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default R
 *
 * @param KeyS:str
 * @text Key: S
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default S
 *
 * @param KeyT:str
 * @text Key: T
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default T
 *
 * @param KeyU:str
 * @text Key: U
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default U
 *
 * @param KeyV:str
 * @text Key: V
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default V
 *
 * @param KeyW:str
 * @text Key: W
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default W
 *
 * @param KeyX:str
 * @text Key: X
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default X
 *
 * @param KeyY:str
 * @text Key: Y
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Y
 *
 * @param KeyZ:str
 * @text Key: Z
 * @parent Keys
 * @desc How this key is shown in-game.
 * Text codes allowed.
 * @default Z
 *
 */
/* ----------------------------------------------------------------------------
 * Controller Buttons Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ControllerButtons:
 *
 * @param ID
 * @text ID Information
 *
 * @param Name:str
 * @text Controller ID Name
 * @parent ID
 * @desc Exact string used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 *
 * @param Match:str
 * @text Similarity Match
 * @parent ID
 * @desc Similar text used for this controller ID. Plugin Command
 * "Debug: Current Controller ID" for ID help.
 * @default Untitled
 * 
 * @param Directions
 *
 * @param up:str
 * @text Up
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param left:str
 * @text Left
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param right:str
 * @text Right
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param down:str
 * @text Down
 * @parent Directions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 * 
 * @param Actions
 *
 * @param ok:str
 * @text OK
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param cancel:str
 * @text Cancel
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param menu:str
 * @text Menu
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param shift:str
 * @text Shift
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pageup:str
 * @text Page Up
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 * @param pagedown:str
 * @text Page Down
 * @parent Actions
 * @desc How this button is shown in-game.
 * Text codes allowed.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Menu Layout Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MenuLayout:
 *
 * @param Title:struct
 * @text Scene_Title
 * @parent SceneSettings
 * @type struct<Title>
 * @desc Various options on adjusting the Title Scene.
 * @default {"TitleScreen":"","DocumentTitleFmt:str":"%1: %2 - Version %3","Subtitle:str":"Subtitle","Version:str":"0.00","drawGameTitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = $dataSystem.gameTitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 8;\\nbitmap.fontSize = 72;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameSubtitle:func":"\"const x = 20;\\nconst y = Graphics.height / 4 + 72;\\nconst maxWidth = Graphics.width - x * 2;\\nconst text = Scene_Title.subtitle;\\nconst bitmap = this._gameTitleSprite.bitmap;\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 6;\\nbitmap.fontSize = 48;\\nbitmap.drawText(text, x, y, maxWidth, 48, \\\"center\\\");\"","drawGameVersion:func":"\"const bitmap = this._gameTitleSprite.bitmap;\\nconst x = 0;\\nconst y = Graphics.height - 20;\\nconst width = Math.round(Graphics.width / 4);\\nconst height = 20;\\nconst c1 = ColorManager.dimColor1();\\nconst c2 = ColorManager.dimColor2();\\nconst text = 'Version ' + Scene_Title.version;\\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\\nbitmap.fontFace = $gameSystem.mainFontFace();\\nbitmap.outlineColor = \\\"black\\\";\\nbitmap.outlineWidth = 3;\\nbitmap.fontSize = 16;\\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \\\"left\\\");\"","CommandRect:func":"\"const offsetX = $dataSystem.titleCommandWindow.offsetX;\\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\\nconst rows = this.commandWindowRows();\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\\nconst y = Graphics.boxHeight - height - 96 + offsetY;\\nreturn new Rectangle(x, y, width, height);\"","ButtonFadeSpeed:num":"4"}
 *
 * @param MainMenu:struct
 * @text Scene_Menu
 * @parent SceneSettings
 * @type struct<MainMenu>
 * @desc Various options on adjusting the Main Menu Scene.
 * @default {"CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const width = this.mainCommandWidth();\\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this.mainAreaHeight();\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ItemMenu:struct
 * @text Scene_Item
 * @parent SceneSettings
 * @type struct<ItemMenu>
 * @desc Various options on adjusting the Item Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaBottom() - y;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SkillMenu:struct
 * @text Scene_Skill
 * @parent SceneSettings
 * @type struct<SkillMenu>
 * @desc Various options on adjusting the Skill Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","SkillTypeWindow":"","SkillTypeBgType:num":"0","SkillTypeRect:func":"\"const rows = 3;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = Graphics.boxWidth - this.mainCommandWidth();\\nconst height = this._skillTypeWindow.height;\\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"const x = 0;\\nconst y = this._statusWindow.y + this._statusWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._statusWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","ActorWindow":"","ActorBgType:num":"0","ActorRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param EquipMenu:struct
 * @text Scene_Equip
 * @parent SceneSettings
 * @type struct<EquipMenu>
 * @desc Various options on adjusting the Equip Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.helpAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.helpAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = this.statusWidth();\\nconst height = this.mainAreaHeight();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = this.statusWidth();\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SlotWindow":"","SlotBgType:num":"0","SlotRect:func":"\"const commandWindowRect = this.commandWindowRect();\\nconst x = this.statusWidth();\\nconst y = commandWindowRect.y + commandWindowRect.height;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this.mainAreaHeight() - commandWindowRect.height;\\nreturn new Rectangle(x, y, width, height);\"","ItemWindow":"","ItemBgType:num":"0","ItemRect:func":"\"return this.slotWindowRect();\""}
 *
 * @param StatusMenu:struct
 * @text Scene_Status
 * @parent SceneSettings
 * @type struct<StatusMenu>
 * @desc Various options on adjusting the Status Menu Scene.
 * @default {"ProfileWindow":"","ProfileBgType:num":"0","ProfileRect:func":"\"const width = Graphics.boxWidth;\\nconst height = this.profileHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst width = Graphics.boxWidth;\\nconst height = this.statusParamsWindowRect().y - y;\\nreturn new Rectangle(x, y, width, height);\"","StatusParamsWindow":"","StatusParamsBgType:num":"0","StatusParamsRect:func":"\"const width = this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = 0;\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\"","StatusEquipWindow":"","StatusEquipBgType:num":"0","StatusEquipRect:func":"\"const width = Graphics.boxWidth - this.statusParamsWidth();\\nconst height = this.statusParamsHeight();\\nconst x = this.statusParamsWidth();\\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param OptionsMenu:struct
 * @text Scene_Options
 * @parent SceneSettings
 * @type struct<OptionsMenu>
 * @desc Various options on adjusting the Options Menu Scene.
 * @default {"OptionsWindow":"","OptionsBgType:num":"0","OptionsRect:func":"\"const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\\nconst width = 400;\\nconst height = this.calcWindowHeight(n, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param SaveMenu:struct
 * @text Scene_Save
 * @parent SceneSettings
 * @type struct<SaveMenu>
 * @desc Various options on adjusting the Save Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param LoadMenu:struct
 * @text Scene_Load
 * @parent SceneSettings
 * @type struct<LoadMenu>
 * @desc Various options on adjusting the Load Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, false);\\nreturn new Rectangle(x, y, width, height);\"","ListWindow":"","ListBgType:num":"0","ListRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop() + this._helpWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._helpWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param GameEnd:struct
 * @text Scene_GameEnd
 * @parent SceneSettings
 * @type struct<GameEnd>
 * @desc Various options on adjusting the Game End Scene.
 * @default {"CommandList:arraystruct":"[\"{\\\"Symbol:str\\\":\\\"toTitle\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.toTitle;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.commandToTitle();\\\\\\\"\\\"}\",\"{\\\"Symbol:str\\\":\\\"cancel\\\",\\\"TextStr:str\\\":\\\"Untitled\\\",\\\"TextJS:func\\\":\\\"\\\\\\\"return TextManager.cancel;\\\\\\\"\\\",\\\"ShowJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"EnableJS:func\\\":\\\"\\\\\\\"return true;\\\\\\\"\\\",\\\"ExtJS:func\\\":\\\"\\\\\\\"return null;\\\\\\\"\\\",\\\"CallHandlerJS:func\\\":\\\"\\\\\\\"SceneManager._scene.popScene();\\\\\\\"\\\"}\"]","CommandBgType:num":"0","CommandRect:func":"\"const rows = 2;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (Graphics.boxHeight - height) / 2;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param ShopMenu:struct
 * @text Scene_Shop
 * @parent SceneSettings
 * @type struct<ShopMenu>
 * @desc Various options on adjusting the Shop Menu Scene.
 * @default {"HelpWindow":"","HelpBgType:num":"0","HelpRect:func":"\"const wx = 0;\\nconst wy = this.helpAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.helpAreaHeight();\\nreturn new Rectangle(wx, wy, ww, wh);\"","GoldWindow":"","GoldBgType:num":"0","GoldRect:func":"\"const rows = 1;\\nconst width = this.mainCommandWidth();\\nconst height = this.calcWindowHeight(rows, true);\\nconst x = Graphics.boxWidth - width;\\nconst y = this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","CommandWindow":"","CommandBgType:num":"0","CommandRect:func":"\"const x = 0;\\nconst y = this.mainAreaTop();\\nconst rows = 1;\\nconst width = this._goldWindow.x;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","DummyWindow":"","DummyBgType:num":"0","DummyRect:func":"\"const x = 0;\\nconst y = this._commandWindow.y + this._commandWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height = this.mainAreaHeight() - this._commandWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","NumberWindow":"","NumberBgType:num":"0","NumberRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","StatusWindow":"","StatusBgType:num":"0","StatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._dummyWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._dummyWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","BuyWindow":"","BuyBgType:num":"0","BuyRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst width = Graphics.boxWidth - this.statusWidth();\\nconst height = this._dummyWindow.height;\\nreturn new Rectangle(x, y, width, height);\"","CategoryWindow":"","CategoryBgType:num":"0","CategoryRect:func":"\"const x = 0;\\nconst y = this._dummyWindow.y;\\nconst rows = 1;\\nconst width = Graphics.boxWidth;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\"","SellWindow":"","SellBgType:num":"0","SellRect:func":"\"const x = 0;\\nconst y = this._categoryWindow.y + this._categoryWindow.height;\\nconst width = Graphics.boxWidth;\\nconst height =\\n    this.mainAreaHeight() -\\n    this._commandWindow.height -\\n    this._categoryWindow.height;\\nreturn new Rectangle(x, y, width, height);\""}
 *
 * @param NameMenu:struct
 * @text Scene_Name
 * @parent SceneSettings
 * @type struct<NameMenu>
 * @desc Various options on adjusting the Actor Rename Scene.
 * @default {"EditWindow":"","EditBgType:num":"0","EditRect:func":"\"const rows = 9;\\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\\nconst padding = $gameSystem.windowPadding();\\nconst width = 600;\\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\\nconst x = (Graphics.boxWidth - width) / 2;\\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\\nreturn new Rectangle(x, y, width, height);\"","InputWindow":"","InputBgType:num":"0","InputRect:func":"\"const x = this._editWindow.x;\\nconst y = this._editWindow.y + this._editWindow.height;\\nconst rows = 9;\\nconst width = this._editWindow.width;\\nconst height = this.calcWindowHeight(rows, true);\\nreturn new Rectangle(x, y, width, height);\""}
 *
 */
/* ----------------------------------------------------------------------------
 * Main Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.mainCommandWidth();\nconst height = this.mainAreaHeight() - this.goldWindowRect().height;\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this.mainAreaHeight();\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaBottom() - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Skill Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SkillMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SkillTypeWindow
 * @text Skill Type Window
 *
 * @param SkillTypeBgType:num
 * @text Background Type
 * @parent SkillTypeWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SkillTypeRect:func
 * @text JS: X, Y, W, H
 * @parent SkillTypeWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 3;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = this.isRightInputMode() ? Graphics.boxWidth - width : 0;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.mainCommandWidth();\nconst height = this._skillTypeWindow.height;\nconst x = this.isRightInputMode() ? 0 : Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._statusWindow.y + this._statusWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._statusWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ActorWindow
 * @text Actor Window
 *
 * @param ActorBgType:num
 * @text Background Type
 * @parent ActorWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ActorRect:func
 * @text JS: X, Y, W, H
 * @parent ActorWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.helpAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.helpAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = this.statusWidth();\nconst height = this.mainAreaHeight();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this.statusWidth();\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SlotWindow
 * @text Slot Window
 *
 * @param SlotBgType:num
 * @text Background Type
 * @parent SlotWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SlotRect:func
 * @text JS: X, Y, W, H
 * @parent SlotWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const commandWindowRect = this.commandWindowRect();\nconst x = this.statusWidth();\nconst y = commandWindowRect.y + commandWindowRect.height;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this.mainAreaHeight() - commandWindowRect.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemBgType:num
 * @text Background Type
 * @parent ItemWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemRect:func
 * @text JS: X, Y, W, H
 * @parent ItemWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "return this.slotWindowRect();"
 *
 */
/* ----------------------------------------------------------------------------
 * Status Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusMenu:
 *
 * @param ProfileWindow
 * @text Profile Window
 *
 * @param ProfileBgType:num
 * @text Background Type
 * @parent ProfileWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ProfileRect:func
 * @text JS: X, Y, W, H
 * @parent ProfileWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth;\nconst height = this.profileHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst width = Graphics.boxWidth;\nconst height = this.statusParamsWindowRect().y - y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusParamsWindow
 * @text Parameters Window
 *
 * @param StatusParamsBgType:num
 * @text Background Type
 * @parent StatusParamsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusParamsRect:func
 * @text JS: X, Y, W, H
 * @parent StatusParamsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = 0;\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusEquipWindow
 * @text Equipment Window
 *
 * @param StatusEquipBgType:num
 * @text Background Type
 * @parent StatusEquipWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusEquipRect:func
 * @text JS: X, Y, W, H
 * @parent StatusEquipWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = Graphics.boxWidth - this.statusParamsWidth();\nconst height = this.statusParamsHeight();\nconst x = this.statusParamsWidth();\nconst y = this.mainAreaBottom() - this.profileHeight() - height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~OptionsMenu:
 *
 * @param OptionsWindow
 * @text Options Window
 *
 * @param OptionsBgType:num
 * @text Background Type
 * @parent OptionsWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param OptionsRect:func
 * @text JS: X, Y, W, H
 * @parent OptionsWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const n = Math.min(this.maxCommands(), this.maxVisibleCommands());\nconst width = 400;\nconst height = this.calcWindowHeight(n, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Save Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~SaveMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Load Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LoadMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, false);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListBgType:num
 * @text Background Type
 * @parent ListWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ListRect:func
 * @text JS: X, Y, W, H
 * @parent ListWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop() + this._helpWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._helpWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Game End Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GameEnd:
 *
 * @param CommandList:arraystruct
 * @text Command Window List
 * @type struct<Command>[]
 * @desc Window commands used by the Game End screen.
 * Add new commands here.
 * @default ["{\"Symbol:str\":\"toTitle\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.toTitle;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.commandToTitle();\\\"\"}","{\"Symbol:str\":\"cancel\",\"TextStr:str\":\"Untitled\",\"TextJS:func\":\"\\\"return TextManager.cancel;\\\"\",\"ShowJS:func\":\"\\\"return true;\\\"\",\"EnableJS:func\":\"\\\"return true;\\\"\",\"ExtJS:func\":\"\\\"return null;\\\"\",\"CallHandlerJS:func\":\"\\\"SceneManager._scene.popScene();\\\"\"}"]
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandList:arraystruct
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandList:arraystruct
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 2;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (Graphics.boxHeight - height) / 2;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopMenu:
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpBgType:num
 * @text Background Type
 * @parent HelpWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param HelpRect:func
 * @text JS: X, Y, W, H
 * @parent HelpWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.helpAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.helpAreaHeight();\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param GoldWindow
 * @text Gold Window
 *
 * @param GoldBgType:num
 * @text Background Type
 * @parent GoldWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param GoldRect:func
 * @text JS: X, Y, W, H
 * @parent GoldWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 1;\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = Graphics.boxWidth - width;\nconst y = this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CommandWindow
 * @text Command Window
 *
 * @param CommandBgType:num
 * @text Background Type
 * @parent CommandWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent CommandWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this.mainAreaTop();\nconst rows = 1;\nconst width = this._goldWindow.x;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param DummyWindow
 * @text Dummy Window
 *
 * @param DummyBgType:num
 * @text Background Type
 * @parent DummyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param DummyRect:func
 * @text JS: X, Y, W, H
 * @parent DummyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._commandWindow.y + this._commandWindow.height;\nconst width = Graphics.boxWidth;\nconst height = this.mainAreaHeight() - this._commandWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param NumberWindow
 * @text Number Window
 *
 * @param NumberBgType:num
 * @text Background Type
 * @parent NumberWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param NumberRect:func
 * @text JS: X, Y, W, H
 * @parent NumberWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param StatusWindow
 * @text Status Window
 *
 * @param StatusBgType:num
 * @text Background Type
 * @parent StatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param StatusRect:func
 * @text JS: X, Y, W, H
 * @parent StatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const width = this.statusWidth();\nconst height = this._dummyWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._dummyWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param BuyWindow
 * @text Buy Window
 *
 * @param BuyBgType:num
 * @text Background Type
 * @parent BuyWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param BuyRect:func
 * @text JS: X, Y, W, H
 * @parent BuyWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst width = Graphics.boxWidth - this.statusWidth();\nconst height = this._dummyWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param CategoryWindow
 * @text Category Window
 *
 * @param CategoryBgType:num
 * @text Background Type
 * @parent CategoryWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param CategoryRect:func
 * @text JS: X, Y, W, H
 * @parent CategoryWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._dummyWindow.y;\nconst rows = 1;\nconst width = Graphics.boxWidth;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 * @param SellWindow
 * @text Sell Window
 *
 * @param SellBgType:num
 * @text Background Type
 * @parent SellWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param SellRect:func
 * @text JS: X, Y, W, H
 * @parent SellWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = 0;\nconst y = this._categoryWindow.y + this._categoryWindow.height;\nconst width = Graphics.boxWidth;\nconst height =\n    this.mainAreaHeight() -\n    this._commandWindow.height -\n    this._categoryWindow.height;\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Name Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NameMenu:
 *
 * @param EditWindow
 * @text Edit Window
 *
 * @param EditBgType:num
 * @text Background Type
 * @parent EditWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param EditRect:func
 * @text JS: X, Y, W, H
 * @parent EditWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const rows = 9;\nconst inputWindowHeight = this.calcWindowHeight(rows, true);\nconst padding = $gameSystem.windowPadding();\nconst width = 600;\nconst height = Math.min(ImageManager.faceHeight + padding * 2, this.mainAreaHeight() - inputWindowHeight);\nconst x = (Graphics.boxWidth - width) / 2;\nconst y = (this.mainAreaHeight() - (height + inputWindowHeight)) / 2 + this.mainAreaTop();\nreturn new Rectangle(x, y, width, height);"
 *
 * @param InputWindow
 * @text Input Window
 *
 * @param InputBgType:num
 * @text Background Type
 * @parent InputWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param InputRect:func
 * @text JS: X, Y, W, H
 * @parent InputWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const x = this._editWindow.x;\nconst y = this._editWindow.y + this._editWindow.height;\nconst rows = 9;\nconst width = this._editWindow.width;\nconst height = this.calcWindowHeight(rows, true);\nreturn new Rectangle(x, y, width, height);"
 *
 */
/* ----------------------------------------------------------------------------
 * Title Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Title:
 *
 * @param TitleScreen
 * @text Title Screen
 *
 * @param DocumentTitleFmt:str
 * @text Document Title Format
 * @parent TitleScreen
 * @desc Format to display text in document title.
 * %1 - Main Title, %2 - Subtitle, %3 - Version
 * @default %1: %2 - Version %3
 *
 * @param Subtitle:str
 * @text Subtitle
 * @parent TitleScreen
 * @desc Subtitle to be displayed under the title name.
 * @default Subtitle
 *
 * @param Version:str
 * @text Version
 * @parent TitleScreen
 * @desc Version to be display in the title screen corner.
 * @default 0.00
 *
 * @param drawGameTitle:func
 * @text JS: Draw Title
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game title.
 * @default "const x = 20;\nconst y = Graphics.height / 4;\nconst maxWidth = Graphics.width - x * 2;\nconst text = $dataSystem.gameTitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 8;\nbitmap.fontSize = 72;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameSubtitle:func
 * @text JS: Draw Subtitle
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game subtitle.
 * @default "const x = 20;\nconst y = Graphics.height / 4 + 72;\nconst maxWidth = Graphics.width - x * 2;\nconst text = Scene_Title.subtitle;\nconst bitmap = this._gameTitleSprite.bitmap;\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 6;\nbitmap.fontSize = 48;\nbitmap.drawText(text, x, y, maxWidth, 48, \"center\");"
 *
 * @param drawGameVersion:func
 * @text JS: Draw Version
 * @type note
 * @parent TitleScreen
 * @desc Code used to draw the game version.
 * @default "const bitmap = this._gameTitleSprite.bitmap;\nconst x = 0;\nconst y = Graphics.height - 20;\nconst width = Math.round(Graphics.width / 4);\nconst height = 20;\nconst c1 = ColorManager.dimColor1();\nconst c2 = ColorManager.dimColor2();\nconst text = 'Version ' + Scene_Title.version;\nbitmap.gradientFillRect(x, y, width, height, c1, c2);\nbitmap.fontFace = $gameSystem.mainFontFace();\nbitmap.outlineColor = \"black\";\nbitmap.outlineWidth = 3;\nbitmap.fontSize = 16;\nbitmap.drawText(text, x + 4, y, Graphics.width, height, \"left\");"
 *
 * @param CommandRect:func
 * @text JS: X, Y, W, H
 * @parent TitleScreen
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const offsetX = $dataSystem.titleCommandWindow.offsetX;\nconst offsetY = $dataSystem.titleCommandWindow.offsetY;\nconst rows = this.commandWindowRows();\nconst width = this.mainCommandWidth();\nconst height = this.calcWindowHeight(rows, true);\nconst x = (Graphics.boxWidth - width) / 2 + offsetX;\nconst y = Graphics.boxHeight - height - 96 + offsetY;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonFadeSpeed:num
 * @text Button Fade Speed
 * @parent TitleScreen
 * @type number
 * @min 1
 * @max 255
 * @desc Speed at which the buttons fade in at (1-255).
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Param:
 *
 * @param DisplayedParams:arraystr
 * @text Displayed Parameters
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc A list of the parameters that will be displayed in-game.
 * @default ["ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param ExtDisplayedParams:arraystr
 * @text Extended Parameters
 * @parent DisplayedParams:arraystr
 * @type combo[]
 * @option MaxHP
 * @option MaxMP
 * @option ATK
 * @option DEF
 * @option MAT
 * @option MDF
 * @option AGI
 * @option LUK
 * @option HIT
 * @option EVA
 * @option CRI
 * @option CEV
 * @option MEV
 * @option MRF
 * @option CNT
 * @option HRG
 * @option MRG
 * @option TRG
 * @option TGR
 * @option GRD
 * @option REC
 * @option PHA
 * @option MCR
 * @option TCR
 * @option PDR
 * @option MDR
 * @option FDR
 * @option EXR
 * @desc The list shown in extended scenes (for other VisuStella plugins).
 * @default ["MaxHP","MaxMP","ATK","DEF","MAT","MDF","AGI","LUK"]
 *
 * @param BasicParameters
 * @text Basic Parameters
 *
 * @param ShowActorLevel:eval
 * @text Show Actor Level?
 * @parent BasicParameters
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the actor level when displaying actors?
 * Affects for most windows in-game.
 * @default true
 *
 * @param CrisisRate:num
 * @text HP Crisis Rate
 * @parent BasicParameters
 * @desc HP Ratio at which a battler can be considered in crisis mode.
 * @default 0.25
 *
 * @param BasicParameterFormula:func
 * @text JS: Formula
 * @parent BasicParameters
 * @type note
 * @desc Formula used to determine the total value all 8 basic parameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.
 * @default "// Determine the variables used in this calculation.\nlet paramId = arguments[0];\nlet base = this.paramBase(paramId);\nlet plus = this.paramPlus(paramId);\nlet paramRate = this.paramRate(paramId);\nlet buffRate = this.paramBuffRate(paramId);\nlet flatBonus = this.paramFlatBonus(paramId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate * buffRate + flatBonus;\n\n// Determine the limits\nconst maxValue = this.paramMax(paramId);\nconst minValue = this.paramMin(paramId);\n\n// Final value\nreturn Math.round(value.clamp(minValue, maxValue));"
 *
 * @param BasicParamCaps
 * @text Parameter Caps
 * @parent BasicParameters
 *
 * @param BasicActorParamCaps
 * @text Actors
 * @parent BasicParamCaps
 *
 * @param BasicActorParamMax0:str
 * @text MaxHP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax1:str
 * @text MaxMP Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicActorParamMax2:str
 * @text ATK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax3:str
 * @text DEF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax4:str
 * @text MAT Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax5:str
 * @text MDF Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax6:str
 * @text AGI Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicActorParamMax7:str
 * @text LUK Cap
 * @parent BasicActorParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamCaps
 * @text Enemies
 * @parent BasicParamCaps
 *
 * @param BasicEnemyParamMax0:str
 * @text MaxHP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxHP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999999
 *
 * @param BasicEnemyParamMax1:str
 * @text MaxMP Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MaxMP cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 9999
 *
 * @param BasicEnemyParamMax2:str
 * @text ATK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine ATK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax3:str
 * @text DEF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine DEF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax4:str
 * @text MAT Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MAT cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax5:str
 * @text MDF Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine MDF cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax6:str
 * @text AGI Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine AGI cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param BasicEnemyParamMax7:str
 * @text LUK Cap
 * @parent BasicEnemyParamCaps
 * @desc Formula used to determine LUK cap.
 * Use 0 if you don't want a cap for this parameter.
 * @default 999
 *
 * @param XParameters
 * @text X Parameters
 *
 * @param XParameterFormula:func
 * @text JS: Formula
 * @parent XParameters
 * @type note
 * @desc Formula used to determine the total value all 10 X parameters: HIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, TRG.
 * @default "// Determine the variables used in this calculation.\nlet xparamId = arguments[0];\nlet base = this.traitsSum(Game_BattlerBase.TRAIT_XPARAM, xparamId);\nlet plus = this.xparamPlus(xparamId);\nlet paramRate = this.xparamRate(xparamId);\nlet flatBonus = this.xparamFlatBonus(xparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param XParamVocab
 * @text Vocabulary
 * @parent XParameters
 *
 * @param XParamVocab0:str
 * @text HIT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Hit
 *
 * @param XParamVocab1:str
 * @text EVA
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Evasion
 *
 * @param XParamVocab2:str
 * @text CRI
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Rate
 *
 * @param XParamVocab3:str
 * @text CEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Crit.Evade
 *
 * @param XParamVocab4:str
 * @text MEV
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Evade
 *
 * @param XParamVocab5:str
 * @text MRF
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Magic Reflect
 *
 * @param XParamVocab6:str
 * @text CNT
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default Counter
 *
 * @param XParamVocab7:str
 * @text HRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default HP Regen
 *
 * @param XParamVocab8:str
 * @text MRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default MP Regen
 *
 * @param XParamVocab9:str
 * @text TRG
 * @parent XParamVocab
 * @desc The in-game vocabulary used for this X Parameter.
 * @default TP Regen
 *
 * @param SParameters
 * @text S Parameters
 *
 * @param SParameterFormula:func
 * @text JS: Formula
 * @parent SParameters
 * @type note
 * @desc Formula used to determine the total value all 10 S parameters: TGR, GRD, REC, PHA, MCR, TCR, PDR, MDR, FDR, EXR.
 * @default "// Determine the variables used in this calculation.\nlet sparamId = arguments[0];\nlet base = this.traitsPi(Game_BattlerBase.TRAIT_SPARAM, sparamId);\nlet plus = this.sparamPlus(sparamId);\nlet paramRate = this.sparamRate(sparamId);\nlet flatBonus = this.sparamFlatBonus(sparamId);\n\n// Formula to determine total parameter value.\nlet value = (base + plus) * paramRate + flatBonus;\n\n// Final value\nreturn value;"
 *
 * @param SParamVocab
 * @text Vocabulary
 * @parent SParameters
 *
 * @param SParamVocab0:str
 * @text TGR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Aggro
 *
 * @param SParamVocab1:str
 * @text GRD
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Guard
 *
 * @param SParamVocab2:str
 * @text REC
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Recovery
 *
 * @param SParamVocab3:str
 * @text PHA
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Item Effect
 *
 * @param SParamVocab4:str
 * @text MCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default MP Cost
 *
 * @param SParamVocab5:str
 * @text TCR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default TP Charge
 *
 * @param SParamVocab6:str
 * @text PDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Physical DMG
 *
 * @param SParamVocab7:str
 * @text MDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Magical DMG
 *
 * @param SParamVocab8:str
 * @text FDR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default Floor DMG
 *
 * @param SParamVocab9:str
 * @text EXR
 * @parent SParamVocab
 * @desc The in-game vocabulary used for this S Parameter.
 * @default EXP Gain
 *
 * @param Icons
 * @text Icons
 *
 * @param DrawIcons:eval
 * @text Draw Icons?
 * @parent Icons
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Draw icons next to parameter names?
 * @default true
 *
 * @param IconParam0:str
 * @text MaxHP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 84
 *
 * @param IconParam1:str
 * @text MaxMP
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconParam2:str
 * @text ATK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconParam3:str
 * @text DEF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 81
 *
 * @param IconParam4:str
 * @text MAT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 101
 *
 * @param IconParam5:str
 * @text MDF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 133
 *
 * @param IconParam6:str
 * @text AGI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 140
 *
 * @param IconParam7:str
 * @text LUK
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 87
 *
 * @param IconXParam0:str
 * @text HIT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 102
 *
 * @param IconXParam1:str
 * @text EVA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam2:str
 * @text CRI
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 78
 *
 * @param IconXParam3:str
 * @text CEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 82
 *
 * @param IconXParam4:str
 * @text MEV
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 171
 *
 * @param IconXParam5:str
 * @text MRF
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 222
 *
 * @param IconXParam6:str
 * @text CNT
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 77
 *
 * @param IconXParam7:str
 * @text HRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam8:str
 * @text MRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconXParam9:str
 * @text TRG
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam0:str
 * @text TGR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 5
 *
 * @param IconSParam1:str
 * @text GRD
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 128
 *
 * @param IconSParam2:str
 * @text REC
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 72
 *
 * @param IconSParam3:str
 * @text PHA
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 176
 *
 * @param IconSParam4:str
 * @text MCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 165
 *
 * @param IconSParam5:str
 * @text TCR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 164
 *
 * @param IconSParam6:str
 * @text PDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 76
 *
 * @param IconSParam7:str
 * @text MDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 79
 *
 * @param IconSParam8:str
 * @text FDR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 141
 *
 * @param IconSParam9:str
 * @text EXR
 * @parent Icons
 * @desc Icon used for this parameter.
 * @default 73
 *
 */
/* ----------------------------------------------------------------------------
 * Commands Struct
 * ----------------------------------------------------------------------------
 */
/*~struct~Command:
 *
 * @param Symbol:str
 * @text Symbol
 * @desc The symbol used for this command.
 * @default Symbol
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc Displayed text used for this title command.
 * If this has a value, ignore the JS: Text version.
 * @default Untitled
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine string used for the displayed name.
 * @default "return 'Text';"
 *
 * @param ShowJS:func
 * @text JS: Show
 * @type note
 * @desc JavaScript code used to determine if the item is shown or not.
 * @default "return true;"
 *
 * @param EnableJS:func
 * @text JS: Enable
 * @type note
 * @desc JavaScript code used to determine if the item is enabled or not.
 * @default "return true;"
 *
 * @param ExtJS:func
 * @text JS: Ext
 * @type note
 * @desc JavaScript code used to determine any ext data that should be added.
 * @default "return null;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this command is selected.
 * @default ""
 *
 */
/* ----------------------------------------------------------------------------
 * Title Picture Buttons
 * ----------------------------------------------------------------------------
 */
/*~struct~TitlePictureButton:
 *
 * @param PictureFilename:str
 * @text Picture's Filename
 * @type file
 * @dir img/pictures/
 * @desc Filename used for the picture.
 * @default 
 *
 * @param ButtonURL:str
 * @text Button URL
 * @desc URL for the button to go to upon being clicked.
 * @default https://www.google.com/
 *
 * @param PositionJS:func
 * @text JS: Position
 * @type note
 * @desc JavaScript code that helps determine the button's Position.
 * @default "this.x = Graphics.width - this.bitmap.width - 20;\nthis.y = Graphics.height - this.bitmap.height - 20;"
 *
 * @param OnLoadJS:func
 * @text JS: On Load
 * @type note
 * @desc JavaScript code that runs once this button bitmap is loaded.
 * @default "this.opacity = 0;\nthis.visible = true;"
 *
 * @param CallHandlerJS:func
 * @text JS: Run Code
 * @type note
 * @desc JavaScript code that runs once this button is pressed.
 * @default "const url = this._data.ButtonURL;\nVisuMZ.openURL(url);"
 *
 */
/* ----------------------------------------------------------------------------
 * UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~UI:
 *
 * @param UIArea
 * @text UI Area
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @parent UIArea
 * @desc Default fade speed for transitions.
 * @default 24
 *
 * @param BoxMargin:num
 * @text Box Margin
 * @parent UIArea
 * @type number
 * @min 0
 * @desc Set the margin in pixels for the screen borders.
 * Default: 4
 * @default 4
 *
 * @param CommandWidth:num
 * @text Command Window Width
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the width for standard Command Windows.
 * Default: 240
 * @default 240
 *
 * @param BottomHelp:eval
 * @text Bottom Help Window
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the Help Window at the bottom of the screen?
 * @default false
 *
 * @param RightMenus:eval
 * @text Right Aligned Menus
 * @parent UIArea
 * @type boolean
 * @on Right
 * @off Left
 * @desc Put most command windows to the right side of the screen.
 * @default true
 *
 * @param ShowButtons:eval
 * @text Show Buttons
 * @parent UIArea
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show clickable buttons in your game?
 * This will affect all buttons.
 * @default true
 *
 * @param cancelShowButton:eval
 * @text Show Cancel Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show cancel button?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param menuShowButton:eval
 * @text Show Menu Button
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show main menu button from the map scene?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param pagedownShowButton:eval
 * @text Show Page Up/Down
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show page up/down buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param numberShowButton:eval
 * @text Show Number Buttons
 * @parent ShowButtons:eval
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show number adjustment buttons?
 * If 'Show Buttons' is false, this will be hidden.
 * @default true
 *
 * @param ButtonHeight:num
 * @text Button Area Height
 * @parent UIArea
 * @type number
 * @min 1
 * @desc Sets the height for the button area.
 * Default: 52
 * @default 52
 *
 * @param BottomButtons:eval
 * @text Bottom Buttons
 * @parent UIArea
 * @type boolean
 * @on Bottom
 * @off Top
 * @desc Put the buttons at the bottom of the screen?
 * @default false
 *
 * @param SideButtons:eval
 * @text Side Buttons
 * @parent UIArea
 * @type boolean
 * @on Side
 * @off Normal
 * @desc Push buttons to the side of the UI if there is room.
 * @default true
 *
 * @param StateIconsNonFrame:eval
 * @text State Icons Non-Frame
 * @parent UIArea
 * @type boolean
 * @on Non-Frame
 * @off Normal
 * @desc Replace sprite frame system for non-frame.
 * Better for any instances where icons are zoomed.
 * @default true
 *
 * @param MenuObjects
 * @text Menu Objects
 *
 * @param LvExpGauge:eval
 * @text Level -> EXP Gauge
 * @parent MenuObjects
 * @type boolean
 * @on Draw Gauge
 * @off Keep As Is
 * @desc Draw an EXP Gauge under the drawn level.
 * @default true
 *
 * @param ParamArrow:str
 * @text Parameter Arrow
 * @parent MenuObjects
 * @desc The arrow used to show changes in the parameter values.
 * @default →
 *
 * @param TextCodeSupport
 * @text Text Code Support
 *
 * @param TextCodeClassNames:eval
 * @text Class Names
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make class names support text codes?
 * @default true
 *
 * @param TextCodeNicknames:eval
 * @text Nicknames
 * @parent TextCodeSupport
 * @type boolean
 * @on Suport Text Codes
 * @off Normal Text
 * @desc Make nicknames support text codes?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param WindowDefaults
 * @text Defaults
 *
 * @param EnableMasking:eval
 * @text Enable Masking
 * @parent WindowDefaults
 * @type boolean
 * @on Masking On
 * @off Masking Off
 * @desc Enable window masking (windows hide other windows behind 
 * them)? WARNING: Turning it on can obscure data.
 * @default false
 *
 * @param CorrectSkinBleeding:eval
 * @text Correct Skin Bleed
 * @parent WindowDefaults
 * @type boolean
 * @on Correct
 * @off Don't Correct
 * @desc Corrects window skin bleeding bug when used with higher
 * screen resolutions?
 * @default true
 *
 * @param LineHeight:num
 * @text Line Height
 * @parent WindowDefaults
 * @desc Default line height used for standard windows.
 * Default: 36. Avoid using odd numbers.
 * @default 36
 *
 * @param ItemPadding:num
 * @text Item Padding
 * @parent WindowDefaults
 * @desc Default line padding used for standard windows.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param BackOpacity:num
 * @text Back Opacity
 * @parent WindowDefaults
 * @desc Default back opacity used for standard windows.
 * Default: 192
 * @default 192
 *
 * @param TranslucentOpacity:num
 * @text Translucent Opacity
 * @parent WindowDefaults
 * @desc Default translucent opacity used for standard windows.
 * Default: 160
 * @default 160
 *
 * @param OpenSpeed:num
 * @text Window Opening Speed
 * @parent WindowDefaults
 * @desc Default open speed used for standard windows.
 * Default: 32 (Use a number between 0-255)
 * @default 32
 * @default 24
 *
 * @param ColSpacing:num
 * @text Column Spacing
 * @parent WindowDefaults
 * @desc Default column spacing for selectable windows.
 * Default: 8
 * @default 8
 *
 * @param RowSpacing:num
 * @text Row Spacing
 * @parent WindowDefaults
 * @desc Default row spacing for selectable windows.
 * Default: 4
 * @default 4
 * 
 * @param ScrollBar
 * @text Scroll Bar
 *
 * @param ShowScrollBar:eval
 * @text Show Scroll Bar?
 * @parent ScrollBar
 * @type boolean
 * @on Show Scroll Bar
 * @off Don't Show
 * @desc Show the scroll bar for scrollable windows?
 * @default true
 *
 * @param BarThickness:num
 * @text Thickness
 * @parent ScrollBar
 * @type number
 * @min 1
 * @desc How thick do you want the scroll bar to be?
 * @default 2
 *
 * @param BarOffset:num
 * @text Offset
 * @parent ScrollBar
 * @desc How much do you want to offset the scroll bar by?
 * @default +2
 *
 * @param BarBodyColor:str
 * @text Bar Body Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param OffBarColor:str
 * @text Off Bar Color
 * @parent ScrollBar
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 7
 *
 * @param OffBarOpacity:num
 * @text Off Bar Opacity
 * @parent ScrollBar
 * @type number
 * @min 1
 * @max 255
 * @desc What opacity value do you want the off bar opacity
 * to be? Use a number between 0 and 255.
 * @default 128
 * 
 * @param SelectableItems
 * @text Selectable Items
 *
 * @param ShowItemBackground:eval
 * @text Show Background?
 * @parent SelectableItems
 * @type boolean
 * @on Show Backgrounds
 * @off No Backgrounds
 * @desc Selectable menu items have dark boxes behind them. Show them?
 * @default true
 *
 * @param ItemHeight:num
 * @text Item Height Padding
 * @parent SelectableItems
 * @desc Default padding for selectable items.
 * Default: 8. Avoid using odd numbers.
 * @default 8
 *
 * @param DrawItemBackgroundJS:func
 * @text JS: Draw Background
 * @parent SelectableItems
 * @type note
 * @desc Code used to draw the background rectangle behind clickable menu objects
 * @default "const rect = arguments[0];\nconst c1 = ColorManager.itemBackColor1();\nconst c2 = ColorManager.itemBackColor2();\nconst x = rect.x;\nconst y = rect.y;\nconst w = rect.width;\nconst h = rect.height;\nthis.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);\nthis.contentsBack.strokeRect(x, y, w, h, c1);"
 *
 * @param TextPopup
 * @text Text Popup Window
 *
 * @param DurationPerChat:num
 * @text Duration Per Text
 * @parent TextPopup
 * @desc What is the increase in duration per text character?
 * @default 1.5
 *
 * @param MinDuration:num
 * @text Minimum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Minimum duration for window to stay on the screen.
 * @default 90
 *
 * @param MaxDuration:num
 * @text Maximum Duration
 * @parent TextPopup
 * @type number
 * @min 1
 * @desc Maximum duration for window to stay on the screen.
 * @default 300
 * 
 */
/* ----------------------------------------------------------------------------
 * Screen Resolution Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenResolution:
 *
 * @param Maps
 * 
 * @param AutoScrollLockX:eval
 * @text Scroll Lock Small X?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock X scrolling if the map is too small?
 * @default true
 * 
 * @param AutoScrollLockY:eval
 * @text Scroll Lock Small Y?
 * @parent Maps
 * @type boolean
 * @on Auto-Lock
 * @off Keep As Is
 * @desc Automatically scroll lock Y scrolling if the map is too small?
 * @default true
 * 
 * @param DisplayLockX:num
 * @text Locked Display X?
 * @parent Maps
 * @desc What display X value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.15625
 * 
 * @param DisplayLockY:num
 * @text Locked Display Y?
 * @parent Maps
 * @desc What display Y value do you want for auto-scroll locked
 * maps? Use a number between 0 and 1 for best results.
 * @default 0.00000
 * 
 * @param Troops
 *
 * @param RepositionActors:eval
 * @text Reposition Actors
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of actors in battle if the screen resolution has changed. Ignore if using Battle Core.
 * @default true
 *
 * @param RepositionEnemies:eval
 * @text Reposition Enemies
 * @parent Troops
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Update the position of enemies in battle if the screen resolution has changed.
 * @default true
 *
 * @param RepositionEnemies130:eval
 * @text For MZ 1.3.0+?
 * @parent RepositionEnemies:eval
 * @type boolean
 * @on Reposition
 * @off Keep As Is
 * @desc Both this parameter and its parent parameter need to be on when using RPG Maker MZ 1.3.0+.
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Screen Shake Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ScreenShake:
 *
 * @param DefaultStyle:str
 * @text Default Style
 * @type select
 * @option Original
 * @value original
 * @option Random
 * @value random
 * @option Horizontal
 * @value horizontal
 * @option Vertical
 * @value vertical
 * @desc The default style used for screen shakes.
 * @default random
 *
 * @param originalJS:func
 * @text JS: Original Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\nthis.x += Math.round($gameScreen.shake());"
 *
 * @param randomJS:func
 * @text JS: Random Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param horzJS:func
 * @text JS: Horizontal Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.x += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 * @param vertJS:func
 * @text JS: Vertical Style
 * @type note
 * @desc This code gives you control over screen shake for this
 * screen shake style.
 * @default "// Calculation\n// Original Formula by Aries of Sheratan\nconst power = $gameScreen._shakePower * 0.75;\nconst speed = $gameScreen._shakeSpeed * 0.60;\nconst duration = $gameScreen._shakeDuration;\nthis.y += Math.round(Math.randomInt(power) - Math.randomInt(speed)) * (Math.min(duration, 30) * 0.5);"
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Parameter Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomParam:
 *
 * @param ParamName:str
 * @text Parameter Name
 * @desc What's the parameter's name?
 * Used for VisuStella MZ menus.
 * @default Untitled
 *
 * @param Abbreviation:str
 * @text Abbreviation
 * @parent ParamName:str
 * @desc What abbreviation do you want to use for the parameter?
 * Do not use special characters. Avoid numbers if possible.
 * @default unt
 *
 * @param Icon:num
 * @text Icon
 * @parent ParamName:str
 * @desc What icon do you want to use to represent this parameter?
 * Used for VisuStella MZ menus.
 * @default 160
 *
 * @param Type:str
 * @text Type
 * @parent ParamName:str
 * @type select
 * @option Integer (Whole Numbers Only)
 * @value integer
 * @option Float (Decimals are Allowed)
 * @value float
 * @desc What kind of number value will be returned with this parameter?
 * @default integer
 *
 * @param ValueJS:json
 * @text JS: Value
 * @type note
 * @desc Run this code when this parameter is to be returned.
 * @default "// Declare Constants\nconst user = this;\n\n// Calculations\nreturn 1;"
 *
 */
/* ----------------------------------------------------------------------------
 * Show Picture Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShowPicture:
 * 
 * @param Position
 *
 * @param Origin:num
 * @text Origin
 * @parent Position
 * @type select
 * @option 0 - Upper Left
 * @value 0
 * @option 1 - Center
 * @value 1
 * @desc What is the origin of this picture icon?
 * @default 0
 *
 * @param PositionX:eval
 * @text Position X
 * @parent Position
 * @desc X coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 *
 * @param PositionY:eval
 * @text Position Y
 * @parent Position
 * @desc Y coordinate of the picture.
 * You may use JavaScript code.
 * @default 0
 * 
 * @param Scale
 *
 * @param ScaleX:eval
 * @text Width %
 * @parent Scale
 * @desc Horizontal scale of the picture.
 * You may use JavaScript code.
 * @default 100
 *
 * @param ScaleY:eval
 * @text Height %
 * @parent Scale
 * @desc Vertical scale of the picture.
 * You may use JavaScript code.
 * @default 100
 * 
 * @param Blend
 *
 * @param Opacity:eval
 * @text Opacity
 * @parent Blend
 * @desc Insert a number to determine opacity level. Use a
 * number between 0 and 255. You may use JavaScript code.
 * @default 255
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Blend
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the picture?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * JS Quick Function Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~jsQuickFunc:
 *
 * @param FunctionName:str
 * @text Function Name
 * @desc The function's name in the global namespace.
 * Will not overwrite functions/variables of the same name.
 * @default Untitled
 *
 * @param CodeJS:json
 * @text JS: Code
 * @type note
 * @desc Run this code when using the function.
 * @default "// Insert this as a function anywhere you can input code\n// such as Script Calls or Conditional Branch Scripts.\n\n// Process Code\n"
 *
 */
//=============================================================================

const _0x52fb7e=_0x1c32;(function(_0x4d45dd,_0x1c781b){const _0x576928=_0x1c32,_0x23d096=_0x4d45dd();while(!![]){try{const _0xb204cc=parseInt(_0x576928(0x55c))/0x1+-parseInt(_0x576928(0x7f8))/0x2+parseInt(_0x576928(0x72d))/0x3+parseInt(_0x576928(0x2f3))/0x4*(parseInt(_0x576928(0x818))/0x5)+-parseInt(_0x576928(0x378))/0x6+parseInt(_0x576928(0x77f))/0x7*(-parseInt(_0x576928(0x73e))/0x8)+parseInt(_0x576928(0x158))/0x9;if(_0xb204cc===_0x1c781b)break;else _0x23d096['push'](_0x23d096['shift']());}catch(_0x577380){_0x23d096['push'](_0x23d096['shift']());}}}(_0x1b74,0x90641));var label=_0x52fb7e(0x81f),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x52fb7e(0x5a2)](function(_0x2da5e0){const _0xb18e85=_0x52fb7e;return _0x2da5e0[_0xb18e85(0x19e)]&&_0x2da5e0[_0xb18e85(0x165)][_0xb18e85(0x597)]('['+label+']');})[0x0];VisuMZ[label][_0x52fb7e(0x2d2)]=VisuMZ[label][_0x52fb7e(0x2d2)]||{},VisuMZ[_0x52fb7e(0x21c)]=function(_0x4d64e7,_0x32d52e){const _0x363cba=_0x52fb7e;for(const _0x330285 in _0x32d52e){if(_0x330285[_0x363cba(0xec)](/(.*):(.*)/i)){const _0x216557=String(RegExp['$1']),_0x2b7aaa=String(RegExp['$2'])[_0x363cba(0x43a)]()[_0x363cba(0x711)]();let _0x297165,_0x2481a5,_0x119b8b;switch(_0x2b7aaa){case _0x363cba(0x86):_0x297165=_0x32d52e[_0x330285]!==''?Number(_0x32d52e[_0x330285]):0x0;break;case _0x363cba(0x27a):_0x2481a5=_0x32d52e[_0x330285]!==''?JSON['parse'](_0x32d52e[_0x330285]):[],_0x297165=_0x2481a5['map'](_0x59f2d1=>Number(_0x59f2d1));break;case _0x363cba(0x4d4):_0x297165=_0x32d52e[_0x330285]!==''?eval(_0x32d52e[_0x330285]):null;break;case _0x363cba(0x30c):_0x2481a5=_0x32d52e[_0x330285]!==''?JSON['parse'](_0x32d52e[_0x330285]):[],_0x297165=_0x2481a5[_0x363cba(0x1e6)](_0x533f89=>eval(_0x533f89));break;case _0x363cba(0x1f6):_0x297165=_0x32d52e[_0x330285]!==''?JSON['parse'](_0x32d52e[_0x330285]):'';break;case _0x363cba(0x178):_0x2481a5=_0x32d52e[_0x330285]!==''?JSON[_0x363cba(0x41c)](_0x32d52e[_0x330285]):[],_0x297165=_0x2481a5['map'](_0x1b0486=>JSON[_0x363cba(0x41c)](_0x1b0486));break;case _0x363cba(0x7f4):_0x297165=_0x32d52e[_0x330285]!==''?new Function(JSON[_0x363cba(0x41c)](_0x32d52e[_0x330285])):new Function(_0x363cba(0x690));break;case'ARRAYFUNC':_0x2481a5=_0x32d52e[_0x330285]!==''?JSON[_0x363cba(0x41c)](_0x32d52e[_0x330285]):[],_0x297165=_0x2481a5['map'](_0x38b2f7=>new Function(JSON[_0x363cba(0x41c)](_0x38b2f7)));break;case _0x363cba(0x74f):_0x297165=_0x32d52e[_0x330285]!==''?String(_0x32d52e[_0x330285]):'';break;case _0x363cba(0x128):_0x2481a5=_0x32d52e[_0x330285]!==''?JSON[_0x363cba(0x41c)](_0x32d52e[_0x330285]):[],_0x297165=_0x2481a5[_0x363cba(0x1e6)](_0x46c4cb=>String(_0x46c4cb));break;case'STRUCT':_0x119b8b=_0x32d52e[_0x330285]!==''?JSON[_0x363cba(0x41c)](_0x32d52e[_0x330285]):{},_0x4d64e7[_0x216557]={},VisuMZ['ConvertParams'](_0x4d64e7[_0x216557],_0x119b8b);continue;case _0x363cba(0x4a4):_0x2481a5=_0x32d52e[_0x330285]!==''?JSON[_0x363cba(0x41c)](_0x32d52e[_0x330285]):[],_0x297165=_0x2481a5['map'](_0x43d011=>VisuMZ[_0x363cba(0x21c)]({},JSON[_0x363cba(0x41c)](_0x43d011)));break;default:continue;}_0x4d64e7[_0x216557]=_0x297165;}}return _0x4d64e7;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x3bb)]=SceneManager[_0x52fb7e(0x7c7)],SceneManager[_0x52fb7e(0x7c7)]=function(){const _0xde835c=_0x52fb7e;VisuMZ['CoreEngine'][_0xde835c(0x3bb)][_0xde835c(0x809)](this);if(Utils[_0xde835c(0xa0)]>=_0xde835c(0x458)){if(typeof nw===_0xde835c(0x3f1))nw['App'][_0xde835c(0x272)]();}},(_0x1b534d=>{const _0x1192c8=_0x52fb7e,_0x163b43=_0x1b534d[_0x1192c8(0x4e3)];for(const _0x1614df of dependencies){if(!Imported[_0x1614df]){alert(_0x1192c8(0x1bb)[_0x1192c8(0x726)](_0x163b43,_0x1614df)),SceneManager[_0x1192c8(0x7c7)]();break;}}const _0x22438a=_0x1b534d['description'];if(_0x22438a[_0x1192c8(0xec)](/\[Version[ ](.*?)\]/i)){const _0x3ede74=Number(RegExp['$1']);_0x3ede74!==VisuMZ[label][_0x1192c8(0x5a0)]&&(alert(_0x1192c8(0x391)[_0x1192c8(0x726)](_0x163b43,_0x3ede74)),SceneManager[_0x1192c8(0x7c7)]());}if(_0x22438a[_0x1192c8(0xec)](/\[Tier[ ](\d+)\]/i)){const _0x213362=Number(RegExp['$1']);_0x213362<tier?(alert(_0x1192c8(0x708)['format'](_0x163b43,_0x213362,tier)),SceneManager[_0x1192c8(0x7c7)]()):tier=Math['max'](_0x213362,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x1192c8(0x2d2)],_0x1b534d[_0x1192c8(0x5b0)]);})(pluginData),((()=>{const _0x1b2418=_0x52fb7e;if(VisuMZ[_0x1b2418(0x81f)][_0x1b2418(0x2d2)][_0x1b2418(0x30e)]['SubfolderParse']??!![])for(const _0x28193a in $plugins){const _0x4c2fc2=$plugins[_0x28193a];_0x4c2fc2[_0x1b2418(0x4e3)]['match'](/(.*)\/(.*)/i)&&(_0x4c2fc2[_0x1b2418(0x4e3)]=String(RegExp['$2'][_0x1b2418(0x711)]()));}})()),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],'AnimationPoint',_0x27470e=>{const _0x1bb2e7=_0x52fb7e;if(!SceneManager[_0x1bb2e7(0x131)])return;if(!SceneManager[_0x1bb2e7(0x131)][_0x1bb2e7(0x667)])return;VisuMZ[_0x1bb2e7(0x21c)](_0x27470e,_0x27470e);const _0x26e1db=Math[_0x1bb2e7(0x679)](_0x27470e[_0x1bb2e7(0x2b7)]),_0x4da5fb=Math[_0x1bb2e7(0x679)](_0x27470e[_0x1bb2e7(0x34d)]);$gameTemp[_0x1bb2e7(0x593)](_0x26e1db,_0x4da5fb,_0x27470e[_0x1bb2e7(0x31e)],_0x27470e[_0x1bb2e7(0x175)],_0x27470e[_0x1bb2e7(0x200)]);}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x52c),_0x364efd=>{const _0x3a3bb3=_0x52fb7e;VisuMZ['ConvertParams'](_0x364efd,_0x364efd);const _0x34a5a5=Math[_0x3a3bb3(0x679)](_0x364efd[_0x3a3bb3(0x674)])['clamp'](0x0,0x64),_0x33481b=AudioManager['_currentBgm'];_0x33481b&&(_0x33481b[_0x3a3bb3(0x674)]=_0x34a5a5,_0x33481b[_0x3a3bb3(0x188)]=AudioManager[_0x3a3bb3(0x6c8)]['seek'](),AudioManager[_0x3a3bb3(0x3a5)](_0x33481b),AudioManager['playBgm'](_0x33481b,_0x33481b[_0x3a3bb3(0x188)]),AudioManager['_bgmBuffer'][_0x3a3bb3(0x14e)](_0x33481b[_0x3a3bb3(0x188)]));}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],'AudioChangeBgmPitch',_0x3182ed=>{const _0x3a52f8=_0x52fb7e;VisuMZ[_0x3a52f8(0x21c)](_0x3182ed,_0x3182ed);const _0x56b2c3=Math[_0x3a52f8(0x679)](_0x3182ed[_0x3a52f8(0x1c5)])[_0x3a52f8(0x7e4)](0x32,0x96),_0x262294=AudioManager['_currentBgm'];_0x262294&&(_0x262294[_0x3a52f8(0x1c5)]=_0x56b2c3,_0x262294['pos']=AudioManager[_0x3a52f8(0x6c8)][_0x3a52f8(0x63b)](),AudioManager['updateBgmParameters'](_0x262294),AudioManager[_0x3a52f8(0x16c)](_0x262294,_0x262294[_0x3a52f8(0x188)]),AudioManager[_0x3a52f8(0x6c8)]['_startPlaying'](_0x262294['pos']));}),PluginManager[_0x52fb7e(0x383)](pluginData['name'],_0x52fb7e(0x194),_0x4b458a=>{const _0x2a2df9=_0x52fb7e;VisuMZ[_0x2a2df9(0x21c)](_0x4b458a,_0x4b458a);const _0x32fcb1=Math['round'](_0x4b458a[_0x2a2df9(0x1d2)])[_0x2a2df9(0x7e4)](-0x64,0x64),_0x3eb4f7=AudioManager[_0x2a2df9(0x535)];_0x3eb4f7&&(_0x3eb4f7[_0x2a2df9(0x1d2)]=_0x32fcb1,_0x3eb4f7['pos']=AudioManager[_0x2a2df9(0x6c8)][_0x2a2df9(0x63b)](),AudioManager[_0x2a2df9(0x3a5)](_0x3eb4f7),AudioManager[_0x2a2df9(0x16c)](_0x3eb4f7,_0x3eb4f7[_0x2a2df9(0x188)]),AudioManager[_0x2a2df9(0x6c8)][_0x2a2df9(0x14e)](_0x3eb4f7[_0x2a2df9(0x188)]));}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x78),_0x2ae570=>{const _0x5f0ec3=_0x52fb7e;VisuMZ[_0x5f0ec3(0x21c)](_0x2ae570,_0x2ae570);const _0x33e2d2=Math['round'](_0x2ae570[_0x5f0ec3(0x674)])[_0x5f0ec3(0x7e4)](0x0,0x64),_0x394b83=AudioManager[_0x5f0ec3(0x35e)];_0x394b83&&(_0x394b83['volume']=_0x33e2d2,_0x394b83[_0x5f0ec3(0x188)]=AudioManager[_0x5f0ec3(0x8c)][_0x5f0ec3(0x63b)](),AudioManager['updateBgsParameters'](_0x394b83),AudioManager[_0x5f0ec3(0x4b8)](_0x394b83,_0x394b83[_0x5f0ec3(0x188)]),AudioManager[_0x5f0ec3(0x8c)]['_startPlaying'](_0x394b83['pos']));}),PluginManager[_0x52fb7e(0x383)](pluginData['name'],_0x52fb7e(0x7c5),_0x44420e=>{const _0x22aa2a=_0x52fb7e;VisuMZ['ConvertParams'](_0x44420e,_0x44420e);const _0x16c194=Math[_0x22aa2a(0x679)](_0x44420e[_0x22aa2a(0x1c5)])[_0x22aa2a(0x7e4)](0x32,0x96),_0x4c9360=AudioManager['_currentBgs'];_0x4c9360&&(_0x4c9360[_0x22aa2a(0x1c5)]=_0x16c194,_0x4c9360[_0x22aa2a(0x188)]=AudioManager[_0x22aa2a(0x8c)]['seek'](),AudioManager[_0x22aa2a(0x3a6)](_0x4c9360),AudioManager[_0x22aa2a(0x4b8)](_0x4c9360,_0x4c9360['pos']),AudioManager[_0x22aa2a(0x8c)]['_startPlaying'](_0x4c9360['pos']));}),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x344),_0x1efbd3=>{const _0x44b312=_0x52fb7e;VisuMZ[_0x44b312(0x21c)](_0x1efbd3,_0x1efbd3);const _0x486160=Math[_0x44b312(0x679)](_0x1efbd3[_0x44b312(0x1d2)])['clamp'](-0x64,0x64),_0x2762e7=AudioManager['_currentBgs'];_0x2762e7&&(_0x2762e7[_0x44b312(0x1d2)]=_0x486160,_0x2762e7[_0x44b312(0x188)]=AudioManager['_bgsBuffer']['seek'](),AudioManager[_0x44b312(0x3a6)](_0x2762e7),AudioManager[_0x44b312(0x4b8)](_0x2762e7,_0x2762e7[_0x44b312(0x188)]),AudioManager[_0x44b312(0x8c)][_0x44b312(0x14e)](_0x2762e7['pos']));}),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x453),_0x4781f6=>{const _0x43a7b7=_0x52fb7e;if(!$gameTemp['isPlaytest']())return;const _0x3ee347=Input[_0x43a7b7(0x58f)]();console['log'](_0x3ee347);}),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x155),_0x58316e=>{const _0xb958a7=_0x52fb7e;if(!$gameTemp[_0xb958a7(0x688)]())return;if(!Utils[_0xb958a7(0x7a2)]())return;SceneManager[_0xb958a7(0x131)]['_active']=![],VisuMZ['CoreEngine'][_0xb958a7(0x3fe)]();}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x3d9),_0x40c6ce=>{const _0x15f599=_0x52fb7e;if(!$gameTemp[_0x15f599(0x688)]())return;if(!Utils['isNwjs']())return;SceneManager[_0x15f599(0x131)][_0x15f599(0x4b1)]=![],VisuMZ[_0x15f599(0x81f)][_0x15f599(0x832)]();}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],'ExportCurMapText',_0x133d17=>{const _0x1c0c75=_0x52fb7e;if(!$gameTemp[_0x1c0c75(0x688)]())return;if(!Utils[_0x1c0c75(0x7a2)]())return;if(!$gameMap)return;if($gameMap[_0x1c0c75(0x21b)]()<=0x0)return;VisuMZ[_0x1c0c75(0x21c)](_0x133d17,_0x133d17);const _0x579da4='Map%1'[_0x1c0c75(0x726)]($gameMap[_0x1c0c75(0x21b)]()[_0x1c0c75(0x139)](0x3)),_0x49efa8=VisuMZ[_0x1c0c75(0x81f)][_0x1c0c75(0x34c)]($gameMap[_0x1c0c75(0x21b)]());VisuMZ['CoreEngine'][_0x1c0c75(0x3de)](_0x49efa8,_0x579da4,!![]);}),PluginManager[_0x52fb7e(0x383)](pluginData['name'],_0x52fb7e(0x1dd),_0x10b819=>{const _0x9b8e51=_0x52fb7e;if(!$gameTemp[_0x9b8e51(0x688)]())return;if(!Utils['isNwjs']())return;if(!$gameParty['inBattle']())return;VisuMZ['ConvertParams'](_0x10b819,_0x10b819);const _0x29e7f0=_0x9b8e51(0x273)[_0x9b8e51(0x726)]($gameTroop[_0x9b8e51(0x170)]['padZero'](0x4)),_0x2692b2=VisuMZ['CoreEngine'][_0x9b8e51(0x67d)]($gameTroop[_0x9b8e51(0x170)]);VisuMZ[_0x9b8e51(0x81f)][_0x9b8e51(0x3de)](_0x2692b2,_0x29e7f0,!![]);}),VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x3de)]=function(_0x2022bc,_0x599bfc,_0x188271){const _0x263bf0=_0x52fb7e,_0x456e7d=require('fs');let _0x5badfc=_0x263bf0(0x80f)[_0x263bf0(0x726)](_0x599bfc||'0');_0x456e7d[_0x263bf0(0x251)](_0x5badfc,_0x2022bc,_0x30d32b=>{const _0xd9197b=_0x263bf0;if(_0x30d32b)throw err;else _0x188271&&alert('Saved\x20file\x20as\x20%1\x20in\x20project\x20folder.'[_0xd9197b(0x726)](_0x5badfc));});},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x3fe)]=function(){const _0x464229=_0x52fb7e,_0x3555df=[];for(const _0x39b9ac of $dataMapInfos){if(!_0x39b9ac)continue;_0x3555df[_0x464229(0x52a)](_0x39b9ac['id']);}const _0x4f8d94=_0x3555df[_0x464229(0x7e7)]*0x64+Math[_0x464229(0x738)](0x64);alert('Export\x20Map\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)'[_0x464229(0x726)](_0x4f8d94)),this['_storedMapText']=[],this[_0x464229(0x22d)]=$dataMap;for(const _0x177956 of _0x3555df){VisuMZ[_0x464229(0x81f)][_0x464229(0x65e)](_0x177956);}setTimeout(VisuMZ['CoreEngine'][_0x464229(0x36f)][_0x464229(0x501)](this),_0x4f8d94);},VisuMZ[_0x52fb7e(0x81f)]['loadMapData']=function(_0x4ae89b){const _0x15a090=_0x52fb7e,_0x1ba330=_0x15a090(0x33e)['format'](_0x4ae89b[_0x15a090(0x139)](0x3)),_0x1b834e=new XMLHttpRequest(),_0x4b76aa=_0x15a090(0x38a)+_0x1ba330;_0x1b834e['open']('GET',_0x4b76aa),_0x1b834e[_0x15a090(0x61f)](_0x15a090(0x2d8)),_0x1b834e[_0x15a090(0x85)]=()=>this[_0x15a090(0x1d8)](_0x1b834e,_0x4ae89b,_0x1ba330,_0x4b76aa),_0x1b834e[_0x15a090(0x26d)]=()=>DataManager[_0x15a090(0xf6)]('$dataMap',_0x1ba330,_0x4b76aa),_0x1b834e[_0x15a090(0x7e1)]();},VisuMZ['CoreEngine']['storeMapData']=function(_0x1fdfc3,_0x2865ab,_0x162dbe,_0x25b099){const _0x518b88=_0x52fb7e;$dataMap=JSON['parse'](_0x1fdfc3['responseText']),DataManager['onLoad']($dataMap),this[_0x518b88(0x2c1)][_0x2865ab]=VisuMZ[_0x518b88(0x81f)][_0x518b88(0x34c)](_0x2865ab),$dataMap=this['_currentMap'];},VisuMZ['CoreEngine'][_0x52fb7e(0x36f)]=function(){const _0x1db7f0=_0x52fb7e,_0x46a8b7=_0x1db7f0(0x21e);this[_0x1db7f0(0x2c1)][_0x1db7f0(0x7d1)](undefined)[_0x1db7f0(0x7d1)]('')[_0x1db7f0(0x7d1)](null);const _0x4b3b05=this[_0x1db7f0(0x2c1)]['join'](_0x1db7f0(0x713))['trim']();VisuMZ[_0x1db7f0(0x81f)]['ExportString'](_0x4b3b05,_0x46a8b7,!![]),SceneManager[_0x1db7f0(0x131)][_0x1db7f0(0x4b1)]=!![];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x34c)]=function(_0x405da7){const _0x3c132f=_0x52fb7e;if(!$dataMap)return'';let _0xc335e5='█'['repeat'](0x46)+'\x0a\x0a',_0x1c5998='═'[_0x3c132f(0x5df)](0x46)+'\x0a\x0a',_0x265c74='';this['_commonEventLayers']=0x0;for(const _0x5d91a6 of $dataMap[_0x3c132f(0x845)]){if(!_0x5d91a6)continue;let _0x1a81c0=_0x5d91a6['id'],_0x3a5c53=_0x5d91a6[_0x3c132f(0x4e3)],_0x26edf4=_0x5d91a6[_0x3c132f(0x665)];for(const _0x42617f of _0x26edf4){const _0x3d08f1=_0x26edf4['indexOf'](_0x42617f)+0x1;let _0x1ab43e=_0x1c5998+_0x3c132f(0x233),_0x1b44a3=VisuMZ[_0x3c132f(0x81f)]['ExtractStrFromList'](_0x42617f[_0x3c132f(0x1f4)]);if(_0x1b44a3['length']>0x0){if(_0x265c74['length']>0x0)_0x265c74+=_0x1c5998+_0x3c132f(0x713);else{const _0x1452bf=$dataMapInfos[_0x405da7][_0x3c132f(0x4e3)];_0x265c74+=_0xc335e5+'〖〖〖\x20Map\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a'[_0x3c132f(0x726)](_0x405da7,_0x1452bf||'Unnamed')+_0xc335e5;}_0x265c74+=_0x1ab43e['format'](_0x1a81c0,_0x3a5c53,_0x3d08f1,_0x1b44a3);}}}return _0x265c74[_0x3c132f(0x7e7)]>0x0&&(_0x265c74+=_0x1c5998),_0x265c74;},VisuMZ[_0x52fb7e(0x81f)]['ExportStrFromAllTroops']=function(){const _0x40f844=_0x52fb7e,_0x3e8d6c=$dataTroops[_0x40f844(0x7e7)]*0xa+Math[_0x40f844(0x738)](0xa);alert(_0x40f844(0x2ff)[_0x40f844(0x726)](_0x3e8d6c));const _0x54cdf4=[];for(const _0x487b5f of $dataTroops){if(!_0x487b5f)continue;const _0x723855=_0x487b5f['id'];_0x54cdf4[_0x723855]=VisuMZ[_0x40f844(0x81f)][_0x40f844(0x67d)](_0x723855);}setTimeout(VisuMZ[_0x40f844(0x81f)][_0x40f844(0x3b3)][_0x40f844(0x501)](this,_0x54cdf4),_0x3e8d6c);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x67d)]=function(_0x23f5f5){const _0x59a85f=_0x52fb7e;if(!$dataTroops[_0x23f5f5])return'';let _0x25f4ce='█'[_0x59a85f(0x5df)](0x46)+'\x0a\x0a',_0x4d8ff4='═'[_0x59a85f(0x5df)](0x46)+'\x0a\x0a',_0xb8435='';this[_0x59a85f(0xfd)]=0x0;const _0x567347=$dataTroops[_0x23f5f5];let _0x4c4136=_0x567347['pages'];for(const _0x2d02d6 of _0x4c4136){const _0xbf6e85=_0x4c4136[_0x59a85f(0x734)](_0x2d02d6)+0x1;let _0x44ef04=_0x4d8ff4+_0x59a85f(0x48d),_0x5d540c=VisuMZ['CoreEngine'][_0x59a85f(0x452)](_0x2d02d6[_0x59a85f(0x1f4)]);_0x5d540c['length']>0x0&&(_0xb8435[_0x59a85f(0x7e7)]>0x0?_0xb8435+=_0x4d8ff4+'\x0a\x0a\x0a\x0a\x0a':_0xb8435+=_0x25f4ce+_0x59a85f(0x70c)[_0x59a85f(0x726)](_0x23f5f5,_0x567347[_0x59a85f(0x4e3)]||_0x59a85f(0x6f5))+_0x25f4ce,_0xb8435+=_0x44ef04[_0x59a85f(0x726)](_0xbf6e85,_0x5d540c));}return _0xb8435['length']>0x0&&(_0xb8435+=_0x4d8ff4),_0xb8435;},VisuMZ['CoreEngine'][_0x52fb7e(0x3b3)]=function(_0x53eec3){const _0xe22c5d=_0x52fb7e,_0x3c4f9f='AllTroops';_0x53eec3[_0xe22c5d(0x7d1)](undefined)['remove']('')[_0xe22c5d(0x7d1)](null);const _0x1fe6f6=_0x53eec3['join'](_0xe22c5d(0x713))[_0xe22c5d(0x711)]();VisuMZ[_0xe22c5d(0x81f)][_0xe22c5d(0x3de)](_0x1fe6f6,_0x3c4f9f,!![]),SceneManager[_0xe22c5d(0x131)]['_active']=!![];},VisuMZ[_0x52fb7e(0x81f)]['ExtractStrFromList']=function(_0x2f3030){const _0x236a0a=_0x52fb7e;let _0x37c719='\x0a'+'─'[_0x236a0a(0x5df)](0x46)+'\x0a',_0x1d1392='\x0a'+'┄'[_0x236a0a(0x5df)](0x46)+'\x0a',_0x40bad7='';for(const _0x27911b of _0x2f3030){if(!_0x27911b)continue;if(_0x27911b['code']===0x65)_0x40bad7+=_0x37c719+'\x0a',_0x40bad7+=_0x236a0a(0x655),_0x27911b[_0x236a0a(0x5b0)][0x4]!==''&&_0x27911b[_0x236a0a(0x5b0)][0x4]!==undefined&&(_0x40bad7+=_0x236a0a(0x2c5)[_0x236a0a(0x726)](_0x27911b[_0x236a0a(0x5b0)][0x4]));else{if(_0x27911b[_0x236a0a(0x7a4)]===0x191)_0x40bad7+='%1\x0a'['format'](_0x27911b[_0x236a0a(0x5b0)][0x0]);else{if(_0x27911b[_0x236a0a(0x7a4)]===0x192)_0x40bad7+=_0x37c719,_0x40bad7+=_0x236a0a(0x692)[_0x236a0a(0x726)](_0x1d1392,_0x27911b['parameters'][0x0]+0x1,_0x27911b['parameters'][0x1]);else{if(_0x27911b[_0x236a0a(0x7a4)]===0x193)_0x40bad7+=_0x37c719,_0x40bad7+=_0x236a0a(0x2a2)[_0x236a0a(0x726)](_0x1d1392);else{if(_0x27911b[_0x236a0a(0x7a4)]===0x194)_0x40bad7+=_0x37c719,_0x40bad7+=_0x236a0a(0x2a8)[_0x236a0a(0x726)](_0x1d1392);else{if(_0x27911b[_0x236a0a(0x7a4)]===0x69)_0x40bad7+=_0x37c719+'\x0a',_0x40bad7+=_0x236a0a(0x37f);else{if(_0x27911b[_0x236a0a(0x7a4)]===0x6c)_0x40bad7+=_0x37c719+'\x0a',_0x40bad7+='》Comment《\x0a%1\x0a'['format'](_0x27911b[_0x236a0a(0x5b0)][0x0]);else{if(_0x27911b[_0x236a0a(0x7a4)]===0x198)_0x40bad7+=_0x236a0a(0x243)[_0x236a0a(0x726)](_0x27911b[_0x236a0a(0x5b0)][0x0]);else{if(_0x27911b['code']===0x75){const _0x2d8316=$dataCommonEvents[_0x27911b['parameters'][0x0]];if(_0x2d8316&&this[_0x236a0a(0xfd)]<=0xa){this['_commonEventLayers']++;let _0x46eeb5=VisuMZ[_0x236a0a(0x81f)][_0x236a0a(0x452)](_0x2d8316[_0x236a0a(0x1f4)]);_0x46eeb5[_0x236a0a(0x7e7)]>0x0&&(_0x40bad7+=_0x37c719,_0x40bad7+=_0x1d1392,_0x40bad7+=_0x236a0a(0x3cd)[_0x236a0a(0x726)](_0x2d8316['id'],_0x2d8316[_0x236a0a(0x4e3)]),_0x40bad7+=_0x1d1392,_0x40bad7+=_0x46eeb5,_0x40bad7+=_0x1d1392,_0x40bad7+=_0x236a0a(0x773)['format'](_0x2d8316['id'],_0x2d8316['name']),_0x40bad7+=_0x1d1392),this[_0x236a0a(0xfd)]--;}}}}}}}}}}}return _0x40bad7['length']>0x0&&(_0x40bad7+=_0x37c719),_0x40bad7;},PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x46e),_0x1bb7a9=>{VisuMZ['ConvertParams'](_0x1bb7a9,_0x1bb7a9);const _0x5592ff=_0x1bb7a9['URL'];VisuMZ['openURL'](_0x5592ff);}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x144),_0x5b1085=>{const _0x305280=_0x52fb7e;VisuMZ[_0x305280(0x21c)](_0x5b1085,_0x5b1085);const _0x24e658=_0x5b1085[_0x305280(0x326)]||0x0;$gameParty[_0x305280(0x5ff)](_0x24e658);}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],'MapOnceParallel',_0x30a826=>{const _0xf9490=_0x52fb7e;if(!SceneManager[_0xf9490(0x339)]())return;VisuMZ['ConvertParams'](_0x30a826,_0x30a826);const _0x44fe31=_0x30a826[_0xf9490(0x5c2)];SceneManager[_0xf9490(0x131)][_0xf9490(0x607)](_0x44fe31);}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x145),_0x283171=>{const _0x5393f0=_0x52fb7e;if(!$gameTemp[_0x5393f0(0x688)]())return;if(!Utils[_0x5393f0(0x7a2)]())return;VisuMZ[_0x5393f0(0x21c)](_0x283171,_0x283171);const _0x2ebe7b=_0x283171['PictureID']||0x1;$gameTemp[_0x5393f0(0x5cc)]=_0x2ebe7b;}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x638),_0x4f9093=>{const _0x5724af=_0x52fb7e;VisuMZ['ConvertParams'](_0x4f9093,_0x4f9093);const _0x58f6f0=_0x4f9093['pictureId']||0x1,_0x170ffc=_0x4f9093[_0x5724af(0x844)]||_0x5724af(0x58e),_0x21bb02=$gameScreen[_0x5724af(0x363)](_0x58f6f0);_0x21bb02&&_0x21bb02[_0x5724af(0x42c)](_0x170ffc);}),PluginManager[_0x52fb7e(0x383)](pluginData['name'],_0x52fb7e(0x9e),_0x180d56=>{const _0xb4ba39=_0x52fb7e;for(let _0x2d6d41=0x1;_0x2d6d41<=0x64;_0x2d6d41++){$gameScreen[_0xb4ba39(0x4d5)](_0x2d6d41);}}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x2a7),_0x338ff7=>{const _0xf0ad68=_0x52fb7e;VisuMZ[_0xf0ad68(0x21c)](_0x338ff7,_0x338ff7);const _0x1b4c07=Math[_0xf0ad68(0x661)](_0x338ff7['StartID'],_0x338ff7[_0xf0ad68(0x25c)]),_0x1b6e44=Math[_0xf0ad68(0x53e)](_0x338ff7[_0xf0ad68(0x394)],_0x338ff7[_0xf0ad68(0x25c)]);for(let _0x1990fb=_0x1b4c07;_0x1990fb<=_0x1b6e44;_0x1990fb++){$gameScreen[_0xf0ad68(0x4d5)](_0x1990fb);}}),PluginManager[_0x52fb7e(0x383)](pluginData['name'],_0x52fb7e(0x682),_0x49e665=>{const _0xa40df=_0x52fb7e;VisuMZ[_0xa40df(0x21c)](_0x49e665,_0x49e665);const _0x292b81=Math[_0xa40df(0x679)](_0x49e665[_0xa40df(0x30d)])[_0xa40df(0x7e4)](0x1,0x64),_0x4c51d7=-Number(_0x49e665[_0xa40df(0x159)]||0x0),_0x3eb121=Math[_0xa40df(0x53e)](_0x49e665[_0xa40df(0x5c3)]||0x0,0x0),_0x567e55=_0x49e665[_0xa40df(0x844)]||_0xa40df(0x58e),_0x5826ac=_0x49e665[_0xa40df(0x418)],_0x1e03e5=$gameScreen[_0xa40df(0x363)](_0x292b81);if(!_0x1e03e5)return;_0x1e03e5[_0xa40df(0x57f)](_0x4c51d7,_0x3eb121,_0x567e55);if(_0x5826ac){const _0x421bc2=$gameTemp[_0xa40df(0x62f)]();if(_0x421bc2)_0x421bc2['wait'](_0x3eb121);}}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],'PictureRotate',_0x47493d=>{const _0x19332b=_0x52fb7e;VisuMZ[_0x19332b(0x21c)](_0x47493d,_0x47493d);const _0x552435=Math[_0x19332b(0x679)](_0x47493d[_0x19332b(0x30d)])['clamp'](0x1,0x64),_0x51e6c0=-Number(_0x47493d['TargetAngle']||0x0),_0x10e8c4=Math[_0x19332b(0x53e)](_0x47493d['Duration']||0x0,0x0),_0x50327c=_0x47493d[_0x19332b(0x844)]||_0x19332b(0x58e),_0xad086e=_0x47493d['Wait'],_0x9fa040=$gameScreen['picture'](_0x552435);if(!_0x9fa040)return;_0x9fa040[_0x19332b(0x762)](_0x51e6c0,_0x10e8c4,_0x50327c);if(_0xad086e){const _0x385b6b=$gameTemp[_0x19332b(0x62f)]();if(_0x385b6b)_0x385b6b[_0x19332b(0x7ed)](_0x10e8c4);}}),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],'PictureShowIcon',_0x3bb4a9=>{const _0x23e4cb=_0x52fb7e;VisuMZ[_0x23e4cb(0x21c)](_0x3bb4a9,_0x3bb4a9);const _0x1e156f=Math[_0x23e4cb(0x679)](_0x3bb4a9[_0x23e4cb(0x30d)])['clamp'](0x1,0x64),_0x237008=_0x3bb4a9['Settings'],_0x5a5e5f=_0x237008[_0x23e4cb(0x6c)]['clamp'](0x0,0x1),_0x1be8eb=Math[_0x23e4cb(0x679)](_0x237008['PositionX']||0x0),_0x4463a4=Math[_0x23e4cb(0x679)](_0x237008[_0x23e4cb(0x32e)]||0x0),_0x6a8968=Math[_0x23e4cb(0x679)](_0x237008['ScaleX']||0x0),_0x5a6a4d=Math[_0x23e4cb(0x679)](_0x237008[_0x23e4cb(0x2e1)]||0x0),_0x4fc2ac=Math['round'](_0x237008['Opacity'])[_0x23e4cb(0x7e4)](0x0,0xff),_0x2e74ae=_0x237008[_0x23e4cb(0x71c)],_0x516c89=_0x23e4cb(0x766),_0x177cea=_0x3bb4a9[_0x23e4cb(0x364)]?_0x23e4cb(0x364):_0x23e4cb(0x5c8),_0x25b553=_0x516c89[_0x23e4cb(0x726)](_0x3bb4a9[_0x23e4cb(0x50d)],_0x177cea);$gameScreen[_0x23e4cb(0x67b)](_0x1e156f,_0x25b553,_0x5a5e5f,_0x1be8eb,_0x4463a4,_0x6a8968,_0x5a6a4d,_0x4fc2ac,_0x2e74ae);}),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x67f),_0xca1f45=>{const _0x3d7a55=_0x52fb7e;VisuMZ[_0x3d7a55(0x21c)](_0xca1f45,_0xca1f45);const _0x686321=_0xca1f45[_0x3d7a55(0x2b5)]||'random',_0x2c8eba=_0xca1f45[_0x3d7a55(0x1e2)][_0x3d7a55(0x7e4)](0x1,0x9),_0x54a998=_0xca1f45[_0x3d7a55(0x73c)]['clamp'](0x1,0x9),_0xd84b2a=_0xca1f45[_0x3d7a55(0x5c3)]||0x1,_0x294ad6=_0xca1f45[_0x3d7a55(0x418)];$gameScreen[_0x3d7a55(0x2d9)](_0x686321),$gameScreen[_0x3d7a55(0x212)](_0x2c8eba,_0x54a998,_0xd84b2a);if(_0x294ad6){const _0x5ddd29=$gameTemp[_0x3d7a55(0x62f)]();if(_0x5ddd29)_0x5ddd29['wait'](_0xd84b2a);}}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x1e4),_0x2376d8=>{const _0x5c900d=_0x52fb7e;if($gameParty[_0x5c900d(0x1fb)]())return;VisuMZ[_0x5c900d(0x21c)](_0x2376d8,_0x2376d8);const _0x2bc093=_0x2376d8[_0x5c900d(0x41b)],_0x37aa9c=(_0x2376d8['Chance']||0x0)/0x64;for(const _0x388345 of _0x2bc093){const _0x563ce5=Math[_0x5c900d(0x1a5)]()<=_0x37aa9c;$gameSwitches[_0x5c900d(0x1cc)](_0x388345,_0x563ce5);}}),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x31c),_0x39f8fb=>{const _0x14620c=_0x52fb7e;if($gameParty['inBattle']())return;VisuMZ[_0x14620c(0x21c)](_0x39f8fb,_0x39f8fb);const _0x2e6192=Math[_0x14620c(0x661)](_0x39f8fb[_0x14620c(0x394)],_0x39f8fb['EndingID']),_0x401777=Math[_0x14620c(0x53e)](_0x39f8fb[_0x14620c(0x394)],_0x39f8fb['EndingID']),_0x51f68d=(_0x39f8fb[_0x14620c(0x68c)]||0x0)/0x64;for(let _0x581c23=_0x2e6192;_0x581c23<=_0x401777;_0x581c23++){const _0x57ff46=Math['random']()<=_0x51f68d;$gameSwitches['setValue'](_0x581c23,_0x57ff46);}}),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x680),_0x31b0b4=>{const _0x255dc4=_0x52fb7e;if($gameParty[_0x255dc4(0x1fb)]())return;VisuMZ[_0x255dc4(0x21c)](_0x31b0b4,_0x31b0b4);const _0x2f7433=_0x31b0b4[_0x255dc4(0x41b)];for(const _0x212435 of _0x2f7433){const _0x401945=$gameSwitches['value'](_0x212435);$gameSwitches[_0x255dc4(0x1cc)](_0x212435,!_0x401945);}}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x75d),_0x22cfe=>{const _0x2003de=_0x52fb7e;if($gameParty[_0x2003de(0x1fb)]())return;VisuMZ[_0x2003de(0x21c)](_0x22cfe,_0x22cfe);const _0x2d226c=Math[_0x2003de(0x661)](_0x22cfe['StartID'],_0x22cfe[_0x2003de(0x25c)]),_0x59051b=Math[_0x2003de(0x53e)](_0x22cfe[_0x2003de(0x394)],_0x22cfe[_0x2003de(0x25c)]);for(let _0x3fb10f=_0x2d226c;_0x3fb10f<=_0x59051b;_0x3fb10f++){const _0x370ec7=$gameSwitches[_0x2003de(0x326)](_0x3fb10f);$gameSwitches[_0x2003de(0x1cc)](_0x3fb10f,!_0x370ec7);}}),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x3c8),_0x46c969=>{const _0x30308e=_0x52fb7e;VisuMZ[_0x30308e(0x21c)](_0x46c969,_0x46c969);const _0x484f64=_0x46c969[_0x30308e(0x4bf)]||0x1;$gameSystem[_0x30308e(0x6f1)](_0x484f64);}),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],'SystemSetSideView',_0x206610=>{const _0x53c2df=_0x52fb7e;if($gameParty[_0x53c2df(0x1fb)]())return;VisuMZ[_0x53c2df(0x21c)](_0x206610,_0x206610);const _0x323d6e=_0x206610['option'];if(_0x323d6e[_0x53c2df(0xec)](/Front/i))$gameSystem['setSideView'](![]);else _0x323d6e[_0x53c2df(0xec)](/Side/i)?$gameSystem['setSideView'](!![]):$gameSystem[_0x53c2df(0x219)](!$gameSystem['isSideView']());}),PluginManager[_0x52fb7e(0x383)](pluginData['name'],_0x52fb7e(0x4f1),_0x4d9380=>{const _0x5d8dad=_0x52fb7e;if($gameParty['inBattle']())return;VisuMZ[_0x5d8dad(0x21c)](_0x4d9380,_0x4d9380);const _0x2937a2=['bgm',_0x5d8dad(0x804),'me','se'];for(const _0x5f1729 of _0x2937a2){const _0x296983=_0x4d9380[_0x5f1729],_0x3bbc51='%1/'[_0x5d8dad(0x726)](_0x5f1729);for(const _0x24a240 of _0x296983){AudioManager['createBuffer'](_0x3bbc51,_0x24a240);}}}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x504),_0x39dff6=>{const _0x1cc3a0=_0x52fb7e;if($gameParty[_0x1cc3a0(0x1fb)]())return;VisuMZ[_0x1cc3a0(0x21c)](_0x39dff6,_0x39dff6);const _0x30897d=[_0x1cc3a0(0x127),_0x1cc3a0(0x7e8),_0x1cc3a0(0x650),_0x1cc3a0(0x3fa),_0x1cc3a0(0x12b),_0x1cc3a0(0x479),_0x1cc3a0(0x1fd),_0x1cc3a0(0x241),_0x1cc3a0(0x5bc),_0x1cc3a0(0x2f9),_0x1cc3a0(0x6e3),_0x1cc3a0(0x55e),'titles1',_0x1cc3a0(0x4fd)];for(const _0x565680 of _0x30897d){const _0x3ff36a=_0x39dff6[_0x565680],_0x2a3e4e=_0x1cc3a0(0x2ea)['format'](_0x565680);for(const _0x2148a5 of _0x3ff36a){ImageManager[_0x1cc3a0(0x325)](_0x2a3e4e,_0x2148a5);}}}),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x237),_0x33e874=>{const _0x250232=_0x52fb7e;if($gameParty[_0x250232(0x1fb)]())return;VisuMZ[_0x250232(0x21c)](_0x33e874,_0x33e874);const _0x4599db=_0x33e874[_0x250232(0x4bf)][_0x250232(0x43a)]()[_0x250232(0x711)](),_0x544c2c=VisuMZ[_0x250232(0x81f)][_0x250232(0x512)](_0x4599db);$gameSystem[_0x250232(0x107)](_0x544c2c);}),VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x512)]=function(_0x59f923){const _0x5a8ea3=_0x52fb7e;_0x59f923=_0x59f923||_0x5a8ea3(0x1da),_0x59f923=String(_0x59f923)[_0x5a8ea3(0x43a)]()[_0x5a8ea3(0x711)]();switch(_0x59f923){case _0x5a8ea3(0x803):return 0x0;case _0x5a8ea3(0xbf):Imported['VisuMZ_1_OptionsCore']&&(ConfigManager[_0x5a8ea3(0x2dd)]=!![]);return 0x1;case _0x5a8ea3(0x258):Imported[_0x5a8ea3(0x5ea)]&&(ConfigManager[_0x5a8ea3(0x2dd)]=![]);return 0x2;case _0x5a8ea3(0x65d):if(Imported[_0x5a8ea3(0x7a7)])return _0x5a8ea3(0x65d);break;case'STB':if(Imported['VisuMZ_2_BattleSystemSTB'])return'STB';break;case _0x5a8ea3(0x829):if(Imported[_0x5a8ea3(0x64c)])return _0x5a8ea3(0x829);break;case _0x5a8ea3(0x88):if(Imported[_0x5a8ea3(0x3f9)])return _0x5a8ea3(0x88);break;case _0x5a8ea3(0x52f):if(Imported['VisuMZ_2_BattleSystemOTB'])return'OTB';break;case'ETB':if(Imported[_0x5a8ea3(0x7d9)])return _0x5a8ea3(0x4fe);break;case _0x5a8ea3(0x616):if(Imported['VisuMZ_2_BattleSystemPTB'])return'PTB';break;}return $dataSystem[_0x5a8ea3(0x642)];},PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],'SystemSetWindowPadding',_0x5785ee=>{const _0x4aeac0=_0x52fb7e;VisuMZ['ConvertParams'](_0x5785ee,_0x5785ee);const _0x50973d=_0x5785ee[_0x4aeac0(0x4bf)]||0x1;$gameSystem[_0x4aeac0(0x4ff)](_0x50973d);}),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],'TextPopupShow',_0x90c3a5=>{const _0x1fb4b6=_0x52fb7e;VisuMZ[_0x1fb4b6(0x21c)](_0x90c3a5,_0x90c3a5);const _0x54ff3b=_0x90c3a5['text']||'';$textPopup(_0x54ff3b);}),PluginManager[_0x52fb7e(0x383)](pluginData[_0x52fb7e(0x4e3)],_0x52fb7e(0x70b),_0x2a0b52=>{const _0x4f52c8=_0x52fb7e;VisuMZ[_0x4f52c8(0x21c)](_0x2a0b52,_0x2a0b52);const _0x9636e7=_0x2a0b52['id']||0x1,_0xf39f9c=_0x2a0b52['operation'],_0x3415e9=_0x2a0b52[_0x4f52c8(0x448)]||0x0;let _0x27b164=$gameVariables[_0x4f52c8(0x326)](_0x9636e7)||0x0;switch(_0xf39f9c){case'=':_0x27b164=_0x3415e9;break;case'+':_0x27b164+=_0x3415e9;break;case'-':_0x27b164-=_0x3415e9;break;case'*':_0x27b164*=_0x3415e9;break;case'/':_0x27b164/=_0x3415e9;break;case'%':_0x27b164%=_0x3415e9;break;}_0x27b164=_0x27b164||0x0,$gameVariables[_0x4f52c8(0x1cc)](_0x9636e7,_0x27b164);}),PluginManager['registerCommand'](pluginData[_0x52fb7e(0x4e3)],'VariableJsBlock',_0x2037d2=>{const _0x481d6d=_0x52fb7e;VisuMZ[_0x481d6d(0x21c)](_0x2037d2,_0x2037d2);const _0x292afb=_0x2037d2['id']()||0x1,_0x603b9d=_0x2037d2[_0x481d6d(0x45d)],_0x24aec8=_0x2037d2[_0x481d6d(0x448)]()||0x0;let _0x4912a9=$gameVariables[_0x481d6d(0x326)](_0x292afb)||0x0;switch(_0x603b9d){case'=':_0x4912a9=_0x24aec8;break;case'+':_0x4912a9+=_0x24aec8;break;case'-':_0x4912a9-=_0x24aec8;break;case'*':_0x4912a9*=_0x24aec8;break;case'/':_0x4912a9/=_0x24aec8;break;case'%':_0x4912a9%=_0x24aec8;break;}_0x4912a9=_0x4912a9||0x0,$gameVariables['setValue'](_0x292afb,_0x4912a9);}),VisuMZ['CoreEngine'][_0x52fb7e(0x226)]=Scene_Boot[_0x52fb7e(0x7d3)]['onDatabaseLoaded'],Scene_Boot[_0x52fb7e(0x7d3)][_0x52fb7e(0x5b6)]=function(){const _0xbab15d=_0x52fb7e;VisuMZ[_0xbab15d(0x81f)][_0xbab15d(0x226)][_0xbab15d(0x809)](this),this[_0xbab15d(0x284)](),this['process_VisuMZ_CoreEngine_Notetags'](),this['process_VisuMZ_CoreEngine_Settings'](),this[_0xbab15d(0x15c)](),this['process_VisuMZ_CoreEngine_CustomParameters'](),this[_0xbab15d(0x36b)](),VisuMZ[_0xbab15d(0x7ef)]();},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x1ac)]={},Scene_Boot[_0x52fb7e(0x7d3)][_0x52fb7e(0x284)]=function(){const _0x28249d=_0x52fb7e,_0x474939=[_0x28249d(0x120),_0x28249d(0x444),_0x28249d(0x746),_0x28249d(0x21a),_0x28249d(0x778),_0x28249d(0x386),_0x28249d(0x4c1),_0x28249d(0x5fd)],_0x362c8d=['HIT','EVA','CRI',_0x28249d(0x579),_0x28249d(0x350),_0x28249d(0x3d1),_0x28249d(0x2d5),_0x28249d(0x472),_0x28249d(0x35b),_0x28249d(0x220)],_0x1259d6=[_0x28249d(0x4f2),_0x28249d(0x443),'REC',_0x28249d(0x71),_0x28249d(0x447),_0x28249d(0x28d),_0x28249d(0x31b),_0x28249d(0x1a6),_0x28249d(0x407),_0x28249d(0x75b)],_0xe8d2b0=[_0x474939,_0x362c8d,_0x1259d6],_0x1435ad=[_0x28249d(0x83d),_0x28249d(0x3bf),'Plus2',_0x28249d(0x507),_0x28249d(0x69),'Rate1',_0x28249d(0x4b6),'Flat',_0x28249d(0x20c),_0x28249d(0x657)];for(const _0x51e622 of _0xe8d2b0){let _0x48ae54='';if(_0x51e622===_0x474939)_0x48ae54=_0x28249d(0x7a3);if(_0x51e622===_0x362c8d)_0x48ae54=_0x28249d(0x252);if(_0x51e622===_0x1259d6)_0x48ae54=_0x28249d(0x235);for(const _0xc63113 of _0x1435ad){let _0x4588c7=_0x28249d(0x5dd)[_0x28249d(0x726)](_0x48ae54,_0xc63113);VisuMZ[_0x28249d(0x81f)][_0x28249d(0x1ac)][_0x4588c7]=[],VisuMZ['CoreEngine']['RegExp'][_0x4588c7+'JS']=[];let _0x3332ea=_0x28249d(0x6df);if([_0x28249d(0x83d),_0x28249d(0x1e9)][_0x28249d(0x597)](_0xc63113))_0x3332ea+=_0x28249d(0x2b0);else{if(['Plus1','Flat1']['includes'](_0xc63113))_0x3332ea+=_0x28249d(0x22a);else{if([_0x28249d(0x59f),'Flat2'][_0x28249d(0x597)](_0xc63113))_0x3332ea+=_0x28249d(0x4e8);else{if(_0xc63113===_0x28249d(0x507))_0x3332ea+=_0x28249d(0x668);else{if(_0xc63113==='Rate1')_0x3332ea+='(\x5cd+)([%％])>';else _0xc63113===_0x28249d(0x4b6)&&(_0x3332ea+='(\x5cd+\x5c.?\x5cd+)>');}}}}for(const _0x2de992 of _0x51e622){let _0x36320=_0xc63113[_0x28249d(0x1cd)](/[\d+]/g,'')[_0x28249d(0x43a)]();const _0x433245=_0x3332ea['format'](_0x2de992,_0x36320);VisuMZ[_0x28249d(0x81f)][_0x28249d(0x1ac)][_0x4588c7][_0x28249d(0x52a)](new RegExp(_0x433245,'i'));const _0x5672dc=_0x28249d(0xa6)['format'](_0x2de992,_0x36320);VisuMZ[_0x28249d(0x81f)][_0x28249d(0x1ac)][_0x4588c7+'JS']['push'](new RegExp(_0x5672dc,'i'));}}}},Scene_Boot['prototype']['process_VisuMZ_CoreEngine_Notetags']=function(){const _0x3eaa5=_0x52fb7e;if(VisuMZ[_0x3eaa5(0x7ef)])return;},Scene_Boot[_0x52fb7e(0x7d3)]['process_VisuMZ_CoreEngine_Settings']=function(){const _0x44896e=_0x52fb7e,_0x4af0c0=VisuMZ['CoreEngine'][_0x44896e(0x2d2)];_0x4af0c0[_0x44896e(0x30e)][_0x44896e(0x51c)]&&VisuMZ[_0x44896e(0x50f)](!![]);_0x4af0c0[_0x44896e(0x30e)][_0x44896e(0x81e)]&&(Input['keyMapper'][0x23]='end',Input[_0x44896e(0x41f)][0x24]=_0x44896e(0x99));if(_0x4af0c0[_0x44896e(0x20a)]){const _0x4f6f2a=_0x4af0c0['ButtonAssist'];_0x4f6f2a['KeySHIFT']=_0x4f6f2a[_0x44896e(0x817)]||_0x44896e(0x7b),_0x4f6f2a[_0x44896e(0x41e)]=_0x4f6f2a[_0x44896e(0x41e)]||'\x5c}❪TAB❫\x5c{';}_0x4af0c0['KeyboardInput'][_0x44896e(0x6ce)]&&(Input[_0x44896e(0x41f)][0x57]='up',Input[_0x44896e(0x41f)][0x41]=_0x44896e(0xd5),Input[_0x44896e(0x41f)][0x53]=_0x44896e(0x293),Input[_0x44896e(0x41f)][0x44]=_0x44896e(0x10f),Input[_0x44896e(0x41f)][0x45]=_0x44896e(0x51a)),_0x4af0c0['KeyboardInput'][_0x44896e(0x82a)]&&(Input['keyMapper'][0x52]=_0x44896e(0xc1)),_0x4af0c0[_0x44896e(0x179)][_0x44896e(0x4a2)]=_0x4af0c0[_0x44896e(0x179)][_0x44896e(0x4a2)][_0x44896e(0x1e6)](_0x2caa68=>_0x2caa68[_0x44896e(0x43a)]()[_0x44896e(0x711)]()),_0x4af0c0[_0x44896e(0x179)][_0x44896e(0x160)]=_0x4af0c0[_0x44896e(0x179)][_0x44896e(0x160)][_0x44896e(0x1e6)](_0x58fe74=>_0x58fe74['toUpperCase']()[_0x44896e(0x711)]()),_0x4af0c0[_0x44896e(0x30e)][_0x44896e(0x115)]=_0x4af0c0[_0x44896e(0x30e)]['ShiftR_Toggle']??!![],_0x4af0c0['QoL']['ShiftT_Toggle']=_0x4af0c0[_0x44896e(0x30e)][_0x44896e(0x34b)]??!![];},Scene_Boot[_0x52fb7e(0x7d3)][_0x52fb7e(0x15c)]=function(){const _0x417313=_0x52fb7e;this[_0x417313(0x1af)]();},Scene_Boot[_0x52fb7e(0x7d3)][_0x52fb7e(0x1af)]=function(){const _0x991bd6=_0x52fb7e,_0xbcca71=VisuMZ[_0x991bd6(0x81f)][_0x991bd6(0x2d2)][_0x991bd6(0x75a)];for(const _0x3aa763 of _0xbcca71){const _0x3936f4=_0x3aa763['FunctionName']['replace'](/[ ]/g,''),_0x2b1ebc=_0x3aa763[_0x991bd6(0x125)];VisuMZ[_0x991bd6(0x81f)]['createJsQuickFunction'](_0x3936f4,_0x2b1ebc);}},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x6d8)]=function(_0x298283,_0x683d9f){const _0x52ca12=_0x52fb7e;if(!!window[_0x298283]){if($gameTemp['isPlaytest']())console[_0x52ca12(0x449)]('WARNING:\x20%1\x20has\x20already\x20been\x20declared\x0aand\x20cannot\x20be\x20used\x20as\x20a\x20Quick\x20JS\x20Function'['format'](_0x298283));}const _0x397c27=_0x52ca12(0x6c2)[_0x52ca12(0x726)](_0x298283,_0x683d9f);window[_0x298283]=new Function(_0x397c27);},Scene_Boot[_0x52fb7e(0x7d3)][_0x52fb7e(0x5af)]=function(){const _0x446b84=_0x52fb7e,_0x5c1466=VisuMZ[_0x446b84(0x81f)][_0x446b84(0x2d2)][_0x446b84(0x3eb)];if(!_0x5c1466)return;for(const _0x5e121d of _0x5c1466){if(!_0x5e121d)continue;VisuMZ[_0x446b84(0x81f)]['createCustomParameter'](_0x5e121d);}},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x7b7)]={},VisuMZ['CoreEngine'][_0x52fb7e(0x110)]={},VisuMZ[_0x52fb7e(0x81f)]['CustomParamType']={},VisuMZ['CoreEngine'][_0x52fb7e(0x1d5)]={},VisuMZ['CoreEngine'][_0x52fb7e(0x29f)]=function(_0x5882be){const _0x5ea171=_0x52fb7e,_0x49b6a2=_0x5882be['Abbreviation'],_0x24f738=_0x5882be['ParamName'],_0x88a5ca=_0x5882be[_0x5ea171(0x353)],_0x2b1242=_0x5882be['Type'],_0x3687f8=new Function(_0x5882be[_0x5ea171(0x3f3)]);VisuMZ[_0x5ea171(0x81f)][_0x5ea171(0x7b7)][_0x49b6a2[_0x5ea171(0x43a)]()[_0x5ea171(0x711)]()]=_0x24f738,VisuMZ[_0x5ea171(0x81f)][_0x5ea171(0x110)][_0x49b6a2[_0x5ea171(0x43a)]()[_0x5ea171(0x711)]()]=_0x88a5ca,VisuMZ['CoreEngine'][_0x5ea171(0x6d2)][_0x49b6a2[_0x5ea171(0x43a)]()[_0x5ea171(0x711)]()]=_0x2b1242,VisuMZ[_0x5ea171(0x81f)][_0x5ea171(0x1d5)][_0x49b6a2[_0x5ea171(0x43a)]()[_0x5ea171(0x711)]()]=_0x49b6a2,Object[_0x5ea171(0x494)](Game_BattlerBase['prototype'],_0x49b6a2,{'get'(){const _0x3a377b=_0x5ea171,_0x4db98a=_0x3687f8['call'](this);return _0x2b1242==='integer'?Math[_0x3a377b(0x679)](_0x4db98a):_0x4db98a;}});},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2a9)]={},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x741)]={},Scene_Boot[_0x52fb7e(0x7d3)][_0x52fb7e(0x36b)]=function(){const _0x2d9475=_0x52fb7e,_0x5c6231=VisuMZ[_0x2d9475(0x81f)][_0x2d9475(0x2d2)]['ControllerButtons'];for(const _0x19bcfd of _0x5c6231){const _0x549abf=(_0x19bcfd[_0x2d9475(0x289)]||'')['toLowerCase']()[_0x2d9475(0x711)](),_0x36e38e=(_0x19bcfd[_0x2d9475(0x1f8)]||'')[_0x2d9475(0x6d1)]()[_0x2d9475(0x711)]();VisuMZ[_0x2d9475(0x81f)][_0x2d9475(0x2a9)][_0x549abf]=_0x19bcfd,VisuMZ['CoreEngine'][_0x2d9475(0x741)][_0x36e38e]=_0x549abf;}},VisuMZ[_0x52fb7e(0x7ef)]=function(){const _0x44e057=_0x52fb7e;for(const _0x3c20ef of $dataActors){if(_0x3c20ef)VisuMZ[_0x44e057(0x204)](_0x3c20ef);}for(const _0x5ae497 of $dataClasses){if(_0x5ae497)VisuMZ['ParseClassNotetags'](_0x5ae497);}for(const _0x18e510 of $dataSkills){if(_0x18e510)VisuMZ[_0x44e057(0x74c)](_0x18e510);}for(const _0x72e363 of $dataItems){if(_0x72e363)VisuMZ['ParseItemNotetags'](_0x72e363);}for(const _0x49fb07 of $dataWeapons){if(_0x49fb07)VisuMZ[_0x44e057(0x2a1)](_0x49fb07);}for(const _0x33d9d7 of $dataArmors){if(_0x33d9d7)VisuMZ[_0x44e057(0x40f)](_0x33d9d7);}for(const _0x40a222 of $dataEnemies){if(_0x40a222)VisuMZ[_0x44e057(0x35f)](_0x40a222);}for(const _0x2abe6b of $dataStates){if(_0x2abe6b)VisuMZ[_0x44e057(0x5a8)](_0x2abe6b);}for(const _0x450dac of $dataTilesets){if(_0x450dac)VisuMZ[_0x44e057(0x465)](_0x450dac);}},VisuMZ['ParseActorNotetags']=function(_0x53e512){},VisuMZ[_0x52fb7e(0x691)]=function(_0x4abab6){},VisuMZ[_0x52fb7e(0x74c)]=function(_0x49f199){},VisuMZ['ParseItemNotetags']=function(_0x485eef){},VisuMZ['ParseWeaponNotetags']=function(_0x472d48){},VisuMZ['ParseArmorNotetags']=function(_0x2aef49){},VisuMZ[_0x52fb7e(0x35f)]=function(_0x5b8c9c){},VisuMZ['ParseStateNotetags']=function(_0x28881e){},VisuMZ[_0x52fb7e(0x465)]=function(_0x50f8c3){},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x204)]=VisuMZ[_0x52fb7e(0x204)],VisuMZ[_0x52fb7e(0x204)]=function(_0x2b1297){const _0x171d9c=_0x52fb7e;VisuMZ[_0x171d9c(0x81f)][_0x171d9c(0x204)][_0x171d9c(0x809)](this,_0x2b1297);const _0x3e885c=_0x2b1297[_0x171d9c(0x571)];if(_0x3e885c[_0x171d9c(0xec)](/<MAX LEVEL:[ ](\d+)>/i)){_0x2b1297[_0x171d9c(0x346)]=Number(RegExp['$1']);if(_0x2b1297[_0x171d9c(0x346)]===0x0)_0x2b1297[_0x171d9c(0x346)]=Number[_0x171d9c(0x126)];}_0x3e885c[_0x171d9c(0xec)](/<INITIAL LEVEL:[ ](\d+)>/i)&&(_0x2b1297[_0x171d9c(0xc0)]=Math[_0x171d9c(0x661)](Number(RegExp['$1']),_0x2b1297[_0x171d9c(0x346)]));},VisuMZ[_0x52fb7e(0x81f)]['ParseClassNotetags']=VisuMZ['ParseClassNotetags'],VisuMZ[_0x52fb7e(0x691)]=function(_0x52699f){const _0x529451=_0x52fb7e;VisuMZ[_0x529451(0x81f)][_0x529451(0x691)][_0x529451(0x809)](this,_0x52699f);if(_0x52699f['learnings'])for(const _0x415d72 of _0x52699f[_0x529451(0x77)]){_0x415d72[_0x529451(0x571)][_0x529451(0xec)](/<LEARN AT LEVEL:[ ](\d+)>/i)&&(_0x415d72[_0x529451(0x6d)]=Math[_0x529451(0x53e)](Number(RegExp['$1']),0x1));}},VisuMZ[_0x52fb7e(0x81f)]['ParseEnemyNotetags']=VisuMZ[_0x52fb7e(0x35f)],VisuMZ[_0x52fb7e(0x35f)]=function(_0x705f93){const _0x1308d5=_0x52fb7e;VisuMZ[_0x1308d5(0x81f)][_0x1308d5(0x35f)]['call'](this,_0x705f93),_0x705f93[_0x1308d5(0x6d)]=0x1;const _0x413ec9=_0x705f93['note'];if(_0x413ec9[_0x1308d5(0xec)](/<LEVEL:[ ](\d+)>/i))_0x705f93['level']=Number(RegExp['$1']);if(_0x413ec9['match'](/<MAXHP:[ ](\d+)>/i))_0x705f93['params'][0x0]=Number(RegExp['$1']);if(_0x413ec9[_0x1308d5(0xec)](/<MAXMP:[ ](\d+)>/i))_0x705f93[_0x1308d5(0x506)][0x1]=Number(RegExp['$1']);if(_0x413ec9['match'](/<ATK:[ ](\d+)>/i))_0x705f93[_0x1308d5(0x506)][0x2]=Number(RegExp['$1']);if(_0x413ec9[_0x1308d5(0xec)](/<DEF:[ ](\d+)>/i))_0x705f93[_0x1308d5(0x506)][0x3]=Number(RegExp['$1']);if(_0x413ec9[_0x1308d5(0xec)](/<MAT:[ ](\d+)>/i))_0x705f93[_0x1308d5(0x506)][0x4]=Number(RegExp['$1']);if(_0x413ec9[_0x1308d5(0xec)](/<MDF:[ ](\d+)>/i))_0x705f93['params'][0x5]=Number(RegExp['$1']);if(_0x413ec9[_0x1308d5(0xec)](/<AGI:[ ](\d+)>/i))_0x705f93[_0x1308d5(0x506)][0x6]=Number(RegExp['$1']);if(_0x413ec9[_0x1308d5(0xec)](/<LUK:[ ](\d+)>/i))_0x705f93[_0x1308d5(0x506)][0x7]=Number(RegExp['$1']);if(_0x413ec9[_0x1308d5(0xec)](/<EXP:[ ](\d+)>/i))_0x705f93[_0x1308d5(0x380)]=Number(RegExp['$1']);if(_0x413ec9['match'](/<GOLD:[ ](\d+)>/i))_0x705f93[_0x1308d5(0x400)]=Number(RegExp['$1']);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x3a8)]=Graphics[_0x52fb7e(0x698)],Graphics[_0x52fb7e(0x698)]=function(){const _0x57f983=_0x52fb7e;switch(VisuMZ[_0x57f983(0x81f)][_0x57f983(0x2d2)][_0x57f983(0x30e)]['AutoStretch']){case _0x57f983(0x4a6):return!![];case _0x57f983(0x1c6):return![];default:return VisuMZ[_0x57f983(0x81f)][_0x57f983(0x3a8)]['call'](this);}},VisuMZ['CoreEngine'][_0x52fb7e(0x7b6)]=Graphics[_0x52fb7e(0x31f)],Graphics[_0x52fb7e(0x31f)]=function(_0x198600,_0x267cf1,_0x208a00=null){const _0x1943ca=_0x52fb7e;VisuMZ[_0x1943ca(0x81f)][_0x1943ca(0x7b6)][_0x1943ca(0x809)](this,_0x198600,_0x267cf1,_0x208a00),VisuMZ[_0x1943ca(0x50f)](![]);},VisuMZ['CoreEngine'][_0x52fb7e(0x7b8)]=Graphics[_0x52fb7e(0x7c2)],Graphics[_0x52fb7e(0x7c2)]=function(_0x332129){const _0x5c62fd=_0x52fb7e;VisuMZ['CoreEngine']['Graphics_centerElement'][_0x5c62fd(0x809)](this,_0x332129),this['_centerElementCoreEngine'](_0x332129);},Graphics['_centerElementCoreEngine']=function(_0x562084){const _0x1ea679=_0x52fb7e;VisuMZ[_0x1ea679(0x81f)][_0x1ea679(0x2d2)]['QoL'][_0x1ea679(0x278)]&&(_0x562084['style']['font-smooth']=_0x1ea679(0x84b));VisuMZ[_0x1ea679(0x81f)][_0x1ea679(0x2d2)][_0x1ea679(0x30e)][_0x1ea679(0x673)]&&(_0x562084['style']['image-rendering']=_0x1ea679(0x51f));const _0x55cf9a=Math[_0x1ea679(0x53e)](0x0,Math[_0x1ea679(0x29a)](_0x562084['width']*this[_0x1ea679(0x621)])),_0x40b3fc=Math[_0x1ea679(0x53e)](0x0,Math['floor'](_0x562084[_0x1ea679(0x480)]*this[_0x1ea679(0x621)]));_0x562084[_0x1ea679(0x6ee)][_0x1ea679(0x48a)]=_0x55cf9a+'px',_0x562084[_0x1ea679(0x6ee)][_0x1ea679(0x480)]=_0x40b3fc+'px';},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2a4)]=Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)],Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)]=function(_0x36699c,_0x1cf303){const _0x154ed0=_0x52fb7e;VisuMZ[_0x154ed0(0x81f)][_0x154ed0(0x2a4)][_0x154ed0(0x809)](this,_0x36699c,_0x1cf303),this[_0x154ed0(0x525)]=!(VisuMZ[_0x154ed0(0x81f)][_0x154ed0(0x2d2)][_0x154ed0(0x30e)]['PixelateImageRendering']??!![]);},Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x320)]=function(){this['_customModified']=!![];},VisuMZ[_0x52fb7e(0x81f)]['Sprite_destroy']=Sprite[_0x52fb7e(0x7d3)][_0x52fb7e(0x6a5)],Sprite['prototype'][_0x52fb7e(0x6a5)]=function(){const _0x3d3ed6=_0x52fb7e;if(this[_0x3d3ed6(0x408)])VisuMZ[_0x3d3ed6(0x81f)]['Sprite_destroy'][_0x3d3ed6(0x809)](this);this[_0x3d3ed6(0x468)]();},Sprite[_0x52fb7e(0x7d3)][_0x52fb7e(0x468)]=function(){const _0x2679d3=_0x52fb7e;if(!this[_0x2679d3(0x2f5)])return;if(!this[_0x2679d3(0x2f5)][_0x2679d3(0x269)])return;this['bitmap'][_0x2679d3(0x6ad)]&&!this[_0x2679d3(0x56b)]['_baseTexture'][_0x2679d3(0xc2)]&&this[_0x2679d3(0x2f5)][_0x2679d3(0x6a5)]();},VisuMZ[_0x52fb7e(0x81f)]['Bitmap_resize']=Bitmap[_0x52fb7e(0x7d3)]['resize'],Bitmap['prototype'][_0x52fb7e(0x4ad)]=function(_0xa11a80,_0x4c7dbf){const _0x169408=_0x52fb7e;VisuMZ['CoreEngine'][_0x169408(0x52b)][_0x169408(0x809)](this,_0xa11a80,_0x4c7dbf),this[_0x169408(0x320)]();},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x23d)]=Bitmap[_0x52fb7e(0x7d3)]['blt'],Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x813)]=function(_0x1b5fcb,_0x3fdd64,_0x4ec1b0,_0x17649d,_0x15adea,_0x4a8a6a,_0x3d8952,_0x5c60ea,_0x18fd86){const _0x1ae8a7=_0x52fb7e;_0x3fdd64=Math[_0x1ae8a7(0x679)](_0x3fdd64),_0x4ec1b0=Math[_0x1ae8a7(0x679)](_0x4ec1b0),_0x17649d=Math[_0x1ae8a7(0x679)](_0x17649d),_0x15adea=Math[_0x1ae8a7(0x679)](_0x15adea),_0x4a8a6a=Math[_0x1ae8a7(0x679)](_0x4a8a6a),_0x3d8952=Math['round'](_0x3d8952),VisuMZ[_0x1ae8a7(0x81f)][_0x1ae8a7(0x23d)][_0x1ae8a7(0x809)](this,_0x1b5fcb,_0x3fdd64,_0x4ec1b0,_0x17649d,_0x15adea,_0x4a8a6a,_0x3d8952,_0x5c60ea,_0x18fd86),this['markCoreEngineModified']();},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x467)]=Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x33c)],Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x33c)]=function(_0x265c09,_0x4d69fc,_0x326c17,_0x1848e7){const _0x5cd13b=_0x52fb7e;VisuMZ[_0x5cd13b(0x81f)][_0x5cd13b(0x467)][_0x5cd13b(0x809)](this,_0x265c09,_0x4d69fc,_0x326c17,_0x1848e7),this[_0x5cd13b(0x320)]();},VisuMZ['CoreEngine']['Bitmap_fillRect']=Bitmap[_0x52fb7e(0x7d3)]['fillRect'],Bitmap[_0x52fb7e(0x7d3)]['fillRect']=function(_0x3d37c3,_0x43aebd,_0x5e1851,_0x414f23,_0x328ff8){const _0x59b407=_0x52fb7e;VisuMZ[_0x59b407(0x81f)]['Bitmap_fillRect'][_0x59b407(0x809)](this,_0x3d37c3,_0x43aebd,_0x5e1851,_0x414f23,_0x328ff8),this[_0x59b407(0x320)]();},VisuMZ[_0x52fb7e(0x81f)]['Bitmap_strokeRect']=Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x498)],Bitmap['prototype'][_0x52fb7e(0x498)]=function(_0x253298,_0x3672f5,_0xf89c92,_0x34f901,_0x437d80){const _0x313d92=_0x52fb7e;VisuMZ[_0x313d92(0x81f)]['Bitmap_strokeRect'][_0x313d92(0x809)](this,_0x253298,_0x3672f5,_0xf89c92,_0x34f901,_0x437d80),this[_0x313d92(0x320)]();},VisuMZ['CoreEngine']['Bitmap_gradientFillRect']=Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x377)],Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x377)]=function(_0x10222e,_0x41f637,_0x5c57f9,_0x7b1873,_0x48683b,_0x57ee4a,_0x18c452){const _0x342a3c=_0x52fb7e;VisuMZ[_0x342a3c(0x81f)][_0x342a3c(0x43b)][_0x342a3c(0x809)](this,_0x10222e,_0x41f637,_0x5c57f9,_0x7b1873,_0x48683b,_0x57ee4a,_0x18c452),this[_0x342a3c(0x320)]();},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x3cc)]=Bitmap['prototype'][_0x52fb7e(0x82b)],Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x82b)]=function(_0x1efcb3,_0x2fa764,_0x4e85a9,_0x9f8c57){const _0x2dc2e0=_0x52fb7e;_0x1efcb3=Math['round'](_0x1efcb3),_0x2fa764=Math[_0x2dc2e0(0x679)](_0x2fa764),_0x4e85a9=Math[_0x2dc2e0(0x679)](_0x4e85a9),VisuMZ[_0x2dc2e0(0x81f)][_0x2dc2e0(0x3cc)]['call'](this,_0x1efcb3,_0x2fa764,_0x4e85a9,_0x9f8c57),this[_0x2dc2e0(0x320)]();},VisuMZ[_0x52fb7e(0x81f)]['Bitmap_measureTextWidth']=Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x751)],Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x751)]=function(_0x25f7dd){const _0x4e37db=_0x52fb7e;return Math[_0x4e37db(0x1ec)](VisuMZ[_0x4e37db(0x81f)]['Bitmap_measureTextWidth'][_0x4e37db(0x809)](this,_0x25f7dd));},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x630)]=Bitmap['prototype']['drawText'],Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x9a)]=function(_0x110887,_0x545d95,_0x1bcdda,_0x2c423a,_0x2020b3,_0x597ae){const _0x983c99=_0x52fb7e;_0x545d95=Math[_0x983c99(0x679)](_0x545d95),_0x1bcdda=Math[_0x983c99(0x679)](_0x1bcdda),_0x2c423a=Math[_0x983c99(0x1ec)](_0x2c423a),_0x2020b3=Math['ceil'](_0x2020b3),VisuMZ['CoreEngine'][_0x983c99(0x630)][_0x983c99(0x809)](this,_0x110887,_0x545d95,_0x1bcdda,_0x2c423a,_0x2020b3,_0x597ae),this['markCoreEngineModified']();},VisuMZ[_0x52fb7e(0x81f)]['Bitmap_drawTextOutline']=Bitmap['prototype'][_0x52fb7e(0x7a1)],Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x7a1)]=function(_0x564b61,_0x9dd6da,_0x1bd665,_0x255c83){const _0xd694ac=_0x52fb7e;VisuMZ['CoreEngine']['Settings']['QoL'][_0xd694ac(0x7e5)]?this[_0xd694ac(0x52d)](_0x564b61,_0x9dd6da,_0x1bd665,_0x255c83):VisuMZ[_0xd694ac(0x81f)]['Bitmap_drawTextOutline'][_0xd694ac(0x809)](this,_0x564b61,_0x9dd6da,_0x1bd665,_0x255c83);},Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x52d)]=function(_0x3b6182,_0x20e774,_0x477b2b,_0xe771c7){const _0x38f322=_0x52fb7e,_0x1e0d4c=this[_0x38f322(0x589)];_0x1e0d4c[_0x38f322(0x250)]=this['outlineColor'],_0x1e0d4c['fillText'](_0x3b6182,_0x20e774+0x2,_0x477b2b+0x2,_0xe771c7);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x5e0)]=Input['clear'],Input[_0x52fb7e(0x17a)]=function(){const _0x1ccf7a=_0x52fb7e;VisuMZ[_0x1ccf7a(0x81f)][_0x1ccf7a(0x5e0)][_0x1ccf7a(0x809)](this),this[_0x1ccf7a(0x79a)]=undefined,this[_0x1ccf7a(0x2d4)]=undefined,this[_0x1ccf7a(0x4f3)]=Input[_0x1ccf7a(0x10c)];},VisuMZ[_0x52fb7e(0x81f)]['Input_update']=Input[_0x52fb7e(0x843)],Input[_0x52fb7e(0x843)]=function(){const _0x48a035=_0x52fb7e;VisuMZ[_0x48a035(0x81f)][_0x48a035(0xf9)]['call'](this);if(this[_0x48a035(0x4f3)])this[_0x48a035(0x4f3)]--;},VisuMZ[_0x52fb7e(0x81f)]['Input_pollGamepads']=Input[_0x52fb7e(0x3fc)],Input[_0x52fb7e(0x3fc)]=function(){const _0x4d7328=_0x52fb7e;if(this[_0x4d7328(0x4f3)])return;VisuMZ[_0x4d7328(0x81f)]['Input_pollGamepads'][_0x4d7328(0x809)](this);},VisuMZ[_0x52fb7e(0x81f)]['Input_setupEventHandlers']=Input[_0x52fb7e(0xa3)],Input[_0x52fb7e(0xa3)]=function(){const _0x58992b=_0x52fb7e;VisuMZ[_0x58992b(0x81f)][_0x58992b(0x3b7)][_0x58992b(0x809)](this),document[_0x58992b(0x38d)](_0x58992b(0x42e),this[_0x58992b(0x7fd)][_0x58992b(0x501)](this));},VisuMZ[_0x52fb7e(0x81f)]['Input_onKeyDown']=Input[_0x52fb7e(0x201)],Input[_0x52fb7e(0x201)]=function(_0x2df368){const _0x4f2bfb=_0x52fb7e;this['_inputSpecialKeyCode']=_0x2df368[_0x4f2bfb(0x822)],VisuMZ[_0x4f2bfb(0x81f)][_0x4f2bfb(0x4be)]['call'](this,_0x2df368),this['setLastGamepadUsed'](null);},Input[_0x52fb7e(0x7fd)]=function(_0x390269){const _0xd0aaa4=_0x52fb7e;this[_0xd0aaa4(0x18e)](_0x390269);},Input['_registerKeyInput']=function(_0x263831){const _0x19ef53=_0x52fb7e;this['_inputSpecialKeyCode']=_0x263831[_0x19ef53(0x822)];let _0x493b2b=String[_0x19ef53(0x68b)](_0x263831[_0x19ef53(0x7e3)]);this[_0x19ef53(0x79a)]===undefined?this[_0x19ef53(0x79a)]=_0x493b2b:this['_inputString']+=_0x493b2b;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x24a)]=Input[_0x52fb7e(0x764)],Input['_shouldPreventDefault']=function(_0x47394a){if(_0x47394a===0x8)return![];return VisuMZ['CoreEngine']['Input_shouldPreventDefault']['call'](this,_0x47394a);},Input['isSpecialCode']=function(_0x2ea9f9){const _0x3ff97e=_0x52fb7e;if(_0x2ea9f9[_0x3ff97e(0xec)](/backspace/i))return this[_0x3ff97e(0x2d4)]===0x8;if(_0x2ea9f9['match'](/enter/i))return this[_0x3ff97e(0x2d4)]===0xd;if(_0x2ea9f9[_0x3ff97e(0xec)](/escape/i))return this['_inputSpecialKeyCode']===0x1b;},Input[_0x52fb7e(0x83f)]=function(){const _0x1fe205=_0x52fb7e;return[0x30,0x31,0x32,0x33,0x34,0x35,0x36,0x37,0x38,0x39][_0x1fe205(0xdd)](this[_0x1fe205(0x2d4)]);},Input[_0x52fb7e(0x150)]=function(){const _0x2d5501=_0x52fb7e;return[0x25,0x26,0x27,0x28][_0x2d5501(0xdd)](this[_0x2d5501(0x2d4)]);},Input[_0x52fb7e(0x192)]=function(){const _0x5288f4=_0x52fb7e;if(navigator[_0x5288f4(0x733)]){const _0xe4be8c=navigator['getGamepads']();if(_0xe4be8c)for(const _0x54f350 of _0xe4be8c){if(_0x54f350&&_0x54f350[_0x5288f4(0x2b8)])return!![];}}return![];},Input[_0x52fb7e(0x639)]=function(){const _0x2d0a83=_0x52fb7e;if(navigator[_0x2d0a83(0x733)]){const _0x6d059e=navigator['getGamepads']();if(_0x6d059e)for(const _0x29af8b of _0x6d059e){if(_0x29af8b&&_0x29af8b[_0x2d0a83(0x2b8)]){if(this[_0x2d0a83(0x10d)](_0x29af8b))return!![];if(this[_0x2d0a83(0x17f)](_0x29af8b))return!![];}}}return![];},Input[_0x52fb7e(0x10d)]=function(_0x4839f4){const _0x522dbc=_0x52fb7e,_0xd9ed4a=_0x4839f4[_0x522dbc(0x248)];for(let _0x540267=0x0;_0x540267<_0xd9ed4a[_0x522dbc(0x7e7)];_0x540267++){if(_0xd9ed4a[_0x540267][_0x522dbc(0x25f)])return!![];}return![];},Input[_0x52fb7e(0x17f)]=function(_0xd88a2c){const _0xee970a=_0x52fb7e,_0x3d26bd=_0xd88a2c[_0xee970a(0x3d7)],_0x585bce=0.5;if(_0x3d26bd[0x0]<-_0x585bce)return!![];if(_0x3d26bd[0x0]>_0x585bce)return!![];if(_0x3d26bd[0x1]<-_0x585bce)return!![];if(_0x3d26bd[0x1]>_0x585bce)return!![];return![];},Input[_0x52fb7e(0x644)]=function(){const _0x237561=_0x52fb7e;return this[_0x237561(0x1ee)]||null;},Input['setLastGamepadUsed']=function(_0x2e0128){const _0x470180=_0x52fb7e;this[_0x470180(0x1ee)]=_0x2e0128;},VisuMZ['CoreEngine'][_0x52fb7e(0x722)]=Input[_0x52fb7e(0x6ac)],Input[_0x52fb7e(0x6ac)]=function(_0x400564){const _0x5f4d7a=_0x52fb7e;VisuMZ['CoreEngine']['Input_updateGamepadState'][_0x5f4d7a(0x809)](this,_0x400564),(this['isGamepadButtonPressed'](_0x400564)||this[_0x5f4d7a(0x17f)](_0x400564))&&this['setLastGamepadUsed'](_0x400564);},Input[_0x52fb7e(0x58f)]=function(){const _0x266f52=_0x52fb7e;return this['_lastGamepad']?this[_0x266f52(0x1ee)]['id']:'Keyboard';},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x42b)]=Tilemap['prototype'][_0x52fb7e(0x211)],Tilemap[_0x52fb7e(0x7d3)][_0x52fb7e(0x211)]=function(_0x232e2d,_0x98ed57,_0x2a5826,_0x18cc57){const _0x387117=_0x52fb7e;if($gameMap&&$gameMap[_0x387117(0x245)]())return;VisuMZ['CoreEngine']['Tilemap_addShadow']['call'](this,_0x232e2d,_0x98ed57,_0x2a5826,_0x18cc57);},Tilemap[_0x52fb7e(0x6a2)][_0x52fb7e(0x7d3)][_0x52fb7e(0x5bb)]=function(){const _0x4748d3=_0x52fb7e;this[_0x4748d3(0x576)]();for(let _0x15f43c=0x0;_0x15f43c<Tilemap[_0x4748d3(0x7f2)][_0x4748d3(0x4b0)];_0x15f43c++){const _0x5ab484=new PIXI[(_0x4748d3(0xbe))]();_0x5ab484[_0x4748d3(0x1a7)](0x800,0x800),VisuMZ[_0x4748d3(0x81f)][_0x4748d3(0x2d2)]['QoL'][_0x4748d3(0x673)]&&(_0x5ab484[_0x4748d3(0x1a3)]=PIXI['SCALE_MODES'][_0x4748d3(0x730)]),this[_0x4748d3(0x16b)][_0x4748d3(0x52a)](_0x5ab484);}},WindowLayer[_0x52fb7e(0x7d3)][_0x52fb7e(0x79)]=function(){const _0x4f8265=_0x52fb7e;return SceneManager&&SceneManager[_0x4f8265(0x131)]?SceneManager[_0x4f8265(0x131)][_0x4f8265(0x91)]():!![];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x84)]=WindowLayer['prototype'][_0x52fb7e(0x15b)],WindowLayer[_0x52fb7e(0x7d3)]['render']=function render(_0xde64b2){const _0x297d14=_0x52fb7e;this['isMaskingEnabled']()?VisuMZ[_0x297d14(0x81f)][_0x297d14(0x84)]['call'](this,_0xde64b2):this['renderNoMask'](_0xde64b2);},WindowLayer[_0x52fb7e(0x7d3)][_0x52fb7e(0x2f4)]=function render(_0x4fcf83){const _0x57672d=_0x52fb7e;if(!this[_0x57672d(0x599)])return;const _0x25a1a6=new PIXI[(_0x57672d(0x57a))](),_0x234141=_0x4fcf83['gl'],_0x567f99=this[_0x57672d(0xf4)][_0x57672d(0x70)]();_0x4fcf83[_0x57672d(0x268)][_0x57672d(0x5b3)](),_0x25a1a6[_0x57672d(0x382)]=this[_0x57672d(0x382)],_0x4fcf83[_0x57672d(0x16e)]['flush'](),_0x234141['enable'](_0x234141[_0x57672d(0x32a)]);while(_0x567f99['length']>0x0){const _0x854686=_0x567f99[_0x57672d(0x531)]();_0x854686[_0x57672d(0x5b2)]&&_0x854686[_0x57672d(0x599)]&&_0x854686[_0x57672d(0x3a2)]>0x0&&(_0x234141['stencilFunc'](_0x234141[_0x57672d(0x588)],0x0,~0x0),_0x234141[_0x57672d(0x1b6)](_0x234141[_0x57672d(0x3d8)],_0x234141[_0x57672d(0x3d8)],_0x234141['KEEP']),_0x854686[_0x57672d(0x15b)](_0x4fcf83),_0x4fcf83[_0x57672d(0x16e)][_0x57672d(0x87)](),_0x25a1a6[_0x57672d(0x17a)](),_0x234141[_0x57672d(0x111)](_0x234141[_0x57672d(0x22e)],0x1,~0x0),_0x234141[_0x57672d(0x1b6)](_0x234141[_0x57672d(0x2ae)],_0x234141[_0x57672d(0x2ae)],_0x234141[_0x57672d(0x2ae)]),_0x234141[_0x57672d(0x2ad)](_0x234141['ZERO'],_0x234141[_0x57672d(0x338)]),_0x25a1a6[_0x57672d(0x15b)](_0x4fcf83),_0x4fcf83[_0x57672d(0x16e)][_0x57672d(0x87)](),_0x234141[_0x57672d(0x2ad)](_0x234141[_0x57672d(0x338)],_0x234141[_0x57672d(0x60b)]));}_0x234141[_0x57672d(0x583)](_0x234141['STENCIL_TEST']),_0x234141[_0x57672d(0x17a)](_0x234141['STENCIL_BUFFER_BIT']),_0x234141[_0x57672d(0x229)](0x0),_0x4fcf83[_0x57672d(0x16e)][_0x57672d(0x87)]();for(const _0x5f5b6a of this[_0x57672d(0xf4)]){!_0x5f5b6a[_0x57672d(0x5b2)]&&_0x5f5b6a[_0x57672d(0x599)]&&_0x5f5b6a[_0x57672d(0x15b)](_0x4fcf83);}_0x4fcf83[_0x57672d(0x16e)][_0x57672d(0x87)]();},DataManager[_0x52fb7e(0x30a)]=function(_0x566994){return this['isItem'](_0x566994)&&_0x566994['itypeId']===0x2;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x213)]=DataManager[_0x52fb7e(0x4fb)],DataManager[_0x52fb7e(0x4fb)]=function(){const _0x46ae2c=_0x52fb7e;VisuMZ[_0x46ae2c(0x81f)]['DataManager_setupNewGame'][_0x46ae2c(0x809)](this),this[_0x46ae2c(0x6f9)](),this[_0x46ae2c(0x206)]();},DataManager[_0x52fb7e(0x6f9)]=function(){const _0x29b294=_0x52fb7e;if($gameTemp[_0x29b294(0x688)]()){const _0x35b5bd=VisuMZ['CoreEngine'][_0x29b294(0x2d2)]['QoL'][_0x29b294(0x9b)];if(_0x35b5bd>0x0)$gameTemp['reserveCommonEvent'](_0x35b5bd);}},DataManager[_0x52fb7e(0x206)]=function(){const _0x289f6c=_0x52fb7e,_0x3e237f=VisuMZ[_0x289f6c(0x81f)][_0x289f6c(0x2d2)][_0x289f6c(0x30e)]['NewGameCommonEventAll']||0x0;if(_0x3e237f>0x0)$gameTemp['reserveCommonEvent'](_0x3e237f);},DataManager['createTroopNote']=function(_0x2715bd){const _0xd3c625=_0x52fb7e,_0x41f9f9=$dataTroops[_0x2715bd];if(!_0x41f9f9)return'';let _0x1d795e='';_0x1d795e+=_0x41f9f9[_0xd3c625(0x4e3)];for(const _0x297d1c of _0x41f9f9['pages']){for(const _0x129818 of _0x297d1c[_0xd3c625(0x1f4)]){[0x6c,0x198][_0xd3c625(0x597)](_0x129818[_0xd3c625(0x7a4)])&&(_0x1d795e+='\x0a',_0x1d795e+=_0x129818[_0xd3c625(0x5b0)][0x0]);}}return _0x1d795e;};(VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)][_0x52fb7e(0x30e)][_0x52fb7e(0xa9)]??!![])&&($scene=null,VisuMZ[_0x52fb7e(0x81f)]['Scene_Base_create']=Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)],Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)]=function(){const _0x523d3b=_0x52fb7e;VisuMZ['CoreEngine'][_0x523d3b(0x714)][_0x523d3b(0x809)](this),$scene=this;},$spriteset=null,VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x130)]=Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x62d)],Scene_Map['prototype'][_0x52fb7e(0x62d)]=function(){const _0x1597e0=_0x52fb7e;VisuMZ[_0x1597e0(0x81f)]['Scene_Map_createSpriteset'][_0x1597e0(0x809)](this),$spriteset=this['_spriteset'];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x470)]=Scene_Battle[_0x52fb7e(0x7d3)][_0x52fb7e(0x62d)],Scene_Battle[_0x52fb7e(0x7d3)][_0x52fb7e(0x62d)]=function(){const _0x387d37=_0x52fb7e;VisuMZ[_0x387d37(0x81f)][_0x387d37(0x470)][_0x387d37(0x809)](this),$spriteset=this[_0x387d37(0x667)];},VisuMZ[_0x52fb7e(0x81f)]['Scene_Base_terminate']=Scene_Base['prototype']['terminate'],Scene_Base['prototype'][_0x52fb7e(0x82d)]=function(){const _0x398ae7=_0x52fb7e;VisuMZ['CoreEngine'][_0x398ae7(0x555)][_0x398ae7(0x809)](this),$spriteset=null,$subject=null,$targets=null,$target=null;},$subject=null,$targets=null,$target=null,VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x560)]=BattleManager[_0x52fb7e(0x843)],BattleManager['update']=function(_0x16fe45){const _0x2e5b0c=_0x52fb7e;VisuMZ[_0x2e5b0c(0x81f)]['BattleManager_update'][_0x2e5b0c(0x809)](this,_0x16fe45),$subject=this[_0x2e5b0c(0x4d1)],$targets=this[_0x2e5b0c(0x267)],$target=this['_target']||this[_0x2e5b0c(0x267)][0x0];},$event=null,VisuMZ['CoreEngine'][_0x52fb7e(0x51d)]=Game_Event[_0x52fb7e(0x7d3)][_0x52fb7e(0x82e)],Game_Event[_0x52fb7e(0x7d3)][_0x52fb7e(0x82e)]=function(){const _0x31d41f=_0x52fb7e;VisuMZ[_0x31d41f(0x81f)][_0x31d41f(0x51d)][_0x31d41f(0x809)](this),$event=this;},VisuMZ[_0x52fb7e(0x81f)]['Scene_Map_update']=Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x843)],Scene_Map[_0x52fb7e(0x7d3)]['update']=function(){const _0x43babb=_0x52fb7e;VisuMZ[_0x43babb(0x81f)][_0x43babb(0x1c9)][_0x43babb(0x809)](this),$gameMap['updateCurrentEvent']();},Game_Map['prototype'][_0x52fb7e(0x4eb)]=function(){const _0x179873=_0x52fb7e;!this[_0x179873(0x5f6)]()&&$event!==null&&($event=null);},$commonEvent=function(_0xa5686b){if($gameTemp)$gameTemp['reserveCommonEvent'](_0xa5686b);},$onceParallel=function(_0x877e29,_0x5c8ed9){const _0xc03d9d=_0x52fb7e;if(SceneManager[_0xc03d9d(0x339)]())$scene['playOnceParallelInterpreter'](_0x877e29,_0x5c8ed9);else{if(SceneManager[_0xc03d9d(0x3d6)]()){if(Imported['VisuMZ_1_BattleCore'])$scene[_0xc03d9d(0x607)](_0x877e29);else $gameTemp&&$gameTemp[_0xc03d9d(0x688)]()&&alert('Once\x20Parallel\x20for\x20Battle\x20requires\x20VisuMZ_1_BattleCore!');}else $gameTemp&&$gameTemp[_0xc03d9d(0x688)]()&&alert(_0xc03d9d(0x59a));}});;StorageManager['jsonToZip']=function(_0x756c6d){return new Promise((_0x1441ec,_0x557c0b)=>{const _0x58f0d4=_0x1c32;try{const _0x28fd24=pako[_0x58f0d4(0x749)](_0x756c6d,{'to':_0x58f0d4(0x482),'level':0x1});if(_0x28fd24['length']>=0xc350){}_0x1441ec(_0x28fd24);}catch(_0x5f2736){_0x557c0b(_0x5f2736);}});},TextManager['stringKeyMap']=['','','',_0x52fb7e(0x1ce),'','',_0x52fb7e(0x460),'','BACKSPACE',_0x52fb7e(0x5c5),'','',_0x52fb7e(0x510),_0x52fb7e(0x51e),_0x52fb7e(0x689),'',_0x52fb7e(0x72c),_0x52fb7e(0x518),_0x52fb7e(0x574),_0x52fb7e(0x611),_0x52fb7e(0x4c3),_0x52fb7e(0x685),_0x52fb7e(0x1cb),_0x52fb7e(0x12f),'FINAL',_0x52fb7e(0x636),'','ESC','CONVERT','NONCONVERT',_0x52fb7e(0x7fe),_0x52fb7e(0x5d1),_0x52fb7e(0x3fb),_0x52fb7e(0x217),'PGDN',_0x52fb7e(0x4d9),'HOME',_0x52fb7e(0x466),'UP',_0x52fb7e(0x10b),_0x52fb7e(0x835),_0x52fb7e(0x1b0),'PRINT',_0x52fb7e(0x1f5),_0x52fb7e(0x55f),_0x52fb7e(0x5a3),'DELETE','','0','1','2','3','4','5','6','7','8','9',_0x52fb7e(0x21f),_0x52fb7e(0x196),_0x52fb7e(0x2c4),_0x52fb7e(0x2a0),'GREATER_THAN',_0x52fb7e(0x3f7),'AT','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',_0x52fb7e(0x174),'',_0x52fb7e(0x456),'',_0x52fb7e(0x2e3),_0x52fb7e(0x437),_0x52fb7e(0x508),_0x52fb7e(0x647),_0x52fb7e(0x810),'NUMPAD4',_0x52fb7e(0x4a1),_0x52fb7e(0x3a4),_0x52fb7e(0x72e),'NUMPAD8',_0x52fb7e(0x19c),_0x52fb7e(0x288),_0x52fb7e(0x798),_0x52fb7e(0x21d),_0x52fb7e(0x532),_0x52fb7e(0x7bc),_0x52fb7e(0x712),'F1','F2','F3','F4','F5','F6','F7','F8','F9',_0x52fb7e(0x5cd),_0x52fb7e(0x112),'F12',_0x52fb7e(0x595),_0x52fb7e(0x5a1),_0x52fb7e(0x149),_0x52fb7e(0x40a),_0x52fb7e(0x846),_0x52fb7e(0x216),_0x52fb7e(0x3ca),_0x52fb7e(0x5c4),_0x52fb7e(0x116),_0x52fb7e(0x360),'F23',_0x52fb7e(0xa7),'','','','','','','','',_0x52fb7e(0x2f7),_0x52fb7e(0xa1),_0x52fb7e(0x2ba),_0x52fb7e(0x2ed),_0x52fb7e(0x6b1),_0x52fb7e(0x4ae),'WIN_OEM_FJ_ROYA','','','','','','','','','',_0x52fb7e(0x7dc),_0x52fb7e(0x39e),_0x52fb7e(0x1b5),_0x52fb7e(0x49d),_0x52fb7e(0x1d9),_0x52fb7e(0x745),_0x52fb7e(0x613),_0x52fb7e(0x5bd),_0x52fb7e(0x53b),_0x52fb7e(0x701),_0x52fb7e(0x2f2),_0x52fb7e(0x222),_0x52fb7e(0x319),'HYPHEN_MINUS',_0x52fb7e(0x4ac),_0x52fb7e(0x615),_0x52fb7e(0x3aa),'','','','','VOLUME_MUTE',_0x52fb7e(0x6ab),_0x52fb7e(0x60f),'','','SEMICOLON','EQUALS',_0x52fb7e(0x6f),_0x52fb7e(0x14d),_0x52fb7e(0xc7),'SLASH',_0x52fb7e(0x476),'','','','','','','','','','','','','','','','','','','','','','','','','','',_0x52fb7e(0x5fb),'BACK_SLASH',_0x52fb7e(0x11b),'QUOTE','',_0x52fb7e(0x2b6),_0x52fb7e(0x185),'',_0x52fb7e(0x7a5),_0x52fb7e(0x11e),'','WIN_ICO_CLEAR','','',_0x52fb7e(0x836),'WIN_OEM_JUMP',_0x52fb7e(0x3a1),_0x52fb7e(0x37d),_0x52fb7e(0x74d),_0x52fb7e(0xf2),_0x52fb7e(0x5ae),'WIN_OEM_ATTN',_0x52fb7e(0x72),_0x52fb7e(0x5db),_0x52fb7e(0x5fe),_0x52fb7e(0x38f),_0x52fb7e(0x6c3),_0x52fb7e(0x6d5),_0x52fb7e(0x7ff),'EXSEL',_0x52fb7e(0x2dc),_0x52fb7e(0x3ea),'ZOOM','',_0x52fb7e(0x849),_0x52fb7e(0x7ce),''],TextManager[_0x52fb7e(0x3b4)]=VisuMZ[_0x52fb7e(0x81f)]['Settings'][_0x52fb7e(0x20a)][_0x52fb7e(0x2b2)],TextManager[_0x52fb7e(0x592)]=VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)]['ButtonAssist']['CancelText'],TextManager[_0x52fb7e(0x44f)]=VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)][_0x52fb7e(0x20a)][_0x52fb7e(0x486)],VisuMZ['CoreEngine'][_0x52fb7e(0x80c)]=TextManager[_0x52fb7e(0x7a3)],TextManager[_0x52fb7e(0x7a3)]=function(_0x1b1780){const _0x33bf46=_0x52fb7e;return typeof _0x1b1780===_0x33bf46(0x83a)?VisuMZ[_0x33bf46(0x81f)][_0x33bf46(0x80c)][_0x33bf46(0x809)](this,_0x1b1780):this[_0x33bf46(0x43f)](_0x1b1780);},TextManager[_0x52fb7e(0x43f)]=function(_0x14e2e9){const _0x55e63d=_0x52fb7e;_0x14e2e9=String(_0x14e2e9||'')[_0x55e63d(0x43a)]();const _0x4d6472=VisuMZ['CoreEngine'][_0x55e63d(0x2d2)][_0x55e63d(0x179)];if(_0x14e2e9===_0x55e63d(0x120))return $dataSystem[_0x55e63d(0x157)][_0x55e63d(0x506)][0x0];if(_0x14e2e9===_0x55e63d(0x444))return $dataSystem['terms'][_0x55e63d(0x506)][0x1];if(_0x14e2e9==='ATK')return $dataSystem[_0x55e63d(0x157)][_0x55e63d(0x506)][0x2];if(_0x14e2e9===_0x55e63d(0x21a))return $dataSystem[_0x55e63d(0x157)][_0x55e63d(0x506)][0x3];if(_0x14e2e9===_0x55e63d(0x778))return $dataSystem[_0x55e63d(0x157)][_0x55e63d(0x506)][0x4];if(_0x14e2e9===_0x55e63d(0x386))return $dataSystem[_0x55e63d(0x157)][_0x55e63d(0x506)][0x5];if(_0x14e2e9===_0x55e63d(0x4c1))return $dataSystem[_0x55e63d(0x157)][_0x55e63d(0x506)][0x6];if(_0x14e2e9===_0x55e63d(0x5fd))return $dataSystem[_0x55e63d(0x157)]['params'][0x7];if(_0x14e2e9==='HIT')return _0x4d6472[_0x55e63d(0x180)];if(_0x14e2e9===_0x55e63d(0x13a))return _0x4d6472['XParamVocab1'];if(_0x14e2e9===_0x55e63d(0x5ab))return _0x4d6472[_0x55e63d(0xcc)];if(_0x14e2e9==='CEV')return _0x4d6472[_0x55e63d(0x399)];if(_0x14e2e9===_0x55e63d(0x350))return _0x4d6472[_0x55e63d(0xfe)];if(_0x14e2e9===_0x55e63d(0x3d1))return _0x4d6472[_0x55e63d(0x78f)];if(_0x14e2e9===_0x55e63d(0x2d5))return _0x4d6472[_0x55e63d(0x6f3)];if(_0x14e2e9===_0x55e63d(0x472))return _0x4d6472['XParamVocab7'];if(_0x14e2e9===_0x55e63d(0x35b))return _0x4d6472[_0x55e63d(0x60e)];if(_0x14e2e9===_0x55e63d(0x220))return _0x4d6472[_0x55e63d(0x357)];if(_0x14e2e9===_0x55e63d(0x4f2))return _0x4d6472[_0x55e63d(0x6fb)];if(_0x14e2e9===_0x55e63d(0x443))return _0x4d6472['SParamVocab1'];if(_0x14e2e9===_0x55e63d(0x3da))return _0x4d6472[_0x55e63d(0x113)];if(_0x14e2e9===_0x55e63d(0x71))return _0x4d6472[_0x55e63d(0x2d1)];if(_0x14e2e9==='MCR')return _0x4d6472[_0x55e63d(0x69d)];if(_0x14e2e9===_0x55e63d(0x28d))return _0x4d6472[_0x55e63d(0x6ae)];if(_0x14e2e9===_0x55e63d(0x31b))return _0x4d6472[_0x55e63d(0x4af)];if(_0x14e2e9==='MDR')return _0x4d6472[_0x55e63d(0x536)];if(_0x14e2e9==='FDR')return _0x4d6472['SParamVocab8'];if(_0x14e2e9===_0x55e63d(0x75b))return _0x4d6472[_0x55e63d(0x7f3)];if(VisuMZ['CoreEngine'][_0x55e63d(0x7b7)][_0x14e2e9])return VisuMZ[_0x55e63d(0x81f)][_0x55e63d(0x7b7)][_0x14e2e9];return'';},TextManager[_0x52fb7e(0x198)]=function(_0x1145d5){const _0x487f4f=_0x52fb7e,_0x44699a=Input[_0x487f4f(0x58f)]();return _0x44699a==='Keyboard'?this['getKeyboardInputButtonString'](_0x1145d5):this[_0x487f4f(0xcb)](_0x44699a,_0x1145d5);},TextManager[_0x52fb7e(0x324)]=function(_0x2be127){const _0x1b4a1e=_0x52fb7e,_0x35e6dc=VisuMZ[_0x1b4a1e(0x81f)]['Settings'][_0x1b4a1e(0x20a)][_0x1b4a1e(0x156)];if(!_0x35e6dc){if(_0x2be127===_0x1b4a1e(0x763))_0x2be127=_0x1b4a1e(0x385);if(_0x2be127===_0x1b4a1e(0x247))_0x2be127=_0x1b4a1e(0x385);}let _0x16acf5=[];for(let _0x1bf53f in Input[_0x1b4a1e(0x41f)]){_0x1bf53f=Number(_0x1bf53f);if(_0x1bf53f>=0x60&&_0x1bf53f<=0x69)continue;if([0x12,0x20][_0x1b4a1e(0x597)](_0x1bf53f))continue;_0x2be127===Input[_0x1b4a1e(0x41f)][_0x1bf53f]&&_0x16acf5[_0x1b4a1e(0x52a)](_0x1bf53f);}for(let _0x2a2040=0x0;_0x2a2040<_0x16acf5[_0x1b4a1e(0x7e7)];_0x2a2040++){_0x16acf5[_0x2a2040]=TextManager[_0x1b4a1e(0x10e)][_0x16acf5[_0x2a2040]];}return this[_0x1b4a1e(0x4ea)](_0x16acf5);},TextManager['makeInputButtonString']=function(_0x4c5592){const _0x9df515=_0x52fb7e,_0x30960d=VisuMZ[_0x9df515(0x81f)]['Settings'][_0x9df515(0x20a)],_0x9d2292=_0x30960d[_0x9df515(0x5f5)],_0x489a9d=_0x4c5592[_0x9df515(0x6d0)](),_0x6476ae=_0x9df515(0x94)[_0x9df515(0x726)](_0x489a9d);return _0x30960d[_0x6476ae]?_0x30960d[_0x6476ae]:_0x9d2292[_0x9df515(0x726)](_0x489a9d);},TextManager[_0x52fb7e(0x3b5)]=function(_0x4b761d,_0xdb4ab1){const _0x511fef=_0x52fb7e,_0x1a2fed=VisuMZ[_0x511fef(0x81f)][_0x511fef(0x2d2)][_0x511fef(0x20a)],_0x499c3a=_0x1a2fed[_0x511fef(0x57b)],_0x2b8ff3=this['getInputButtonString'](_0x4b761d),_0x3837e7=this[_0x511fef(0x198)](_0xdb4ab1);return _0x499c3a['format'](_0x2b8ff3,_0x3837e7);},TextManager[_0x52fb7e(0xcb)]=function(_0x307117,_0x11bcab){const _0x2aee22=_0x52fb7e,_0x4a8c2e=_0x307117['toLowerCase']()[_0x2aee22(0x711)](),_0x22dc8a=VisuMZ[_0x2aee22(0x81f)]['ControllerButtons'][_0x4a8c2e];if(!_0x22dc8a)return this[_0x2aee22(0x6c4)](_0x307117,_0x11bcab);return _0x22dc8a[_0x11bcab]||this[_0x2aee22(0x324)](_0x307117,_0x11bcab);},TextManager[_0x52fb7e(0x6c4)]=function(_0x270328,_0x1e66a4){const _0x41644e=_0x52fb7e,_0x3852af=_0x270328[_0x41644e(0x6d1)]()['trim']();for(const _0x2e3462 in VisuMZ[_0x41644e(0x81f)][_0x41644e(0x741)]){if(_0x3852af[_0x41644e(0x597)](_0x2e3462)){const _0xaf1e74=VisuMZ[_0x41644e(0x81f)][_0x41644e(0x741)][_0x2e3462],_0x2b7d76=VisuMZ[_0x41644e(0x81f)][_0x41644e(0x2a9)][_0xaf1e74];return _0x2b7d76[_0x1e66a4]||this['getKeyboardInputButtonString'](_0x1e66a4);}}return this['getKeyboardInputButtonString'](_0x1e66a4);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x5fc)]=ColorManager[_0x52fb7e(0x9f)],ColorManager['loadWindowskin']=function(){const _0x2cf35d=_0x52fb7e;VisuMZ['CoreEngine'][_0x2cf35d(0x5fc)][_0x2cf35d(0x809)](this),this[_0x2cf35d(0x6e4)]=this[_0x2cf35d(0x6e4)]||{};},ColorManager['getColorDataFromPluginParameters']=function(_0x58b50e,_0x168f06){const _0x2efad7=_0x52fb7e;return _0x168f06=String(_0x168f06),this['_colorCache']=this[_0x2efad7(0x6e4)]||{},_0x168f06[_0x2efad7(0xec)](/#(.*)/i)?this[_0x2efad7(0x6e4)][_0x58b50e]=_0x2efad7(0x80)[_0x2efad7(0x726)](String(RegExp['$1'])):this[_0x2efad7(0x6e4)][_0x58b50e]=this[_0x2efad7(0x3a9)](Number(_0x168f06)),this['_colorCache'][_0x58b50e];},ColorManager[_0x52fb7e(0x75c)]=function(_0x437e61){const _0x2608b1=_0x52fb7e;return _0x437e61=String(_0x437e61),_0x437e61['match'](/#(.*)/i)?_0x2608b1(0x80)[_0x2608b1(0x726)](String(RegExp['$1'])):this[_0x2608b1(0x3a9)](Number(_0x437e61));},ColorManager[_0x52fb7e(0x76e)]=function(){const _0xe417c5=_0x52fb7e;this[_0xe417c5(0x6e4)]={};},ColorManager[_0x52fb7e(0x34f)]=function(){const _0x16346d=_0x52fb7e,_0x3bfb26=_0x16346d(0x759);this['_colorCache']=this[_0x16346d(0x6e4)]||{};if(this[_0x16346d(0x6e4)][_0x3bfb26])return this[_0x16346d(0x6e4)][_0x3bfb26];const _0x395efb=VisuMZ[_0x16346d(0x81f)]['Settings'][_0x16346d(0x2b9)][_0x16346d(0x168)];return this['getColorDataFromPluginParameters'](_0x3bfb26,_0x395efb);},ColorManager[_0x52fb7e(0x484)]=function(){const _0x198a7a=_0x52fb7e,_0x4223a4=_0x198a7a(0x440);this[_0x198a7a(0x6e4)]=this[_0x198a7a(0x6e4)]||{};if(this['_colorCache'][_0x4223a4])return this[_0x198a7a(0x6e4)][_0x4223a4];const _0xfbd64d=VisuMZ['CoreEngine'][_0x198a7a(0x2d2)]['Color'][_0x198a7a(0x719)];return this[_0x198a7a(0x77e)](_0x4223a4,_0xfbd64d);},ColorManager['crisisColor']=function(){const _0x35434f=_0x52fb7e,_0x38e16d=_0x35434f(0x6f4);this[_0x35434f(0x6e4)]=this[_0x35434f(0x6e4)]||{};if(this[_0x35434f(0x6e4)][_0x38e16d])return this[_0x35434f(0x6e4)][_0x38e16d];const _0x30552c=VisuMZ[_0x35434f(0x81f)][_0x35434f(0x2d2)][_0x35434f(0x2b9)]['ColorCrisis'];return this[_0x35434f(0x77e)](_0x38e16d,_0x30552c);},ColorManager[_0x52fb7e(0x261)]=function(){const _0x3ff035=_0x52fb7e,_0x5c7b58='_stored_deathColor';this[_0x3ff035(0x6e4)]=this[_0x3ff035(0x6e4)]||{};if(this[_0x3ff035(0x6e4)][_0x5c7b58])return this[_0x3ff035(0x6e4)][_0x5c7b58];const _0xc766a4=VisuMZ['CoreEngine']['Settings'][_0x3ff035(0x2b9)][_0x3ff035(0x6ca)];return this[_0x3ff035(0x77e)](_0x5c7b58,_0xc766a4);},ColorManager[_0x52fb7e(0x7d0)]=function(){const _0x1f2792=_0x52fb7e,_0x57614d='_stored_gaugeBackColor';this[_0x1f2792(0x6e4)]=this[_0x1f2792(0x6e4)]||{};if(this[_0x1f2792(0x6e4)][_0x57614d])return this[_0x1f2792(0x6e4)][_0x57614d];const _0x365989=VisuMZ[_0x1f2792(0x81f)][_0x1f2792(0x2d2)][_0x1f2792(0x2b9)]['ColorGaugeBack'];return this[_0x1f2792(0x77e)](_0x57614d,_0x365989);},ColorManager[_0x52fb7e(0x18f)]=function(){const _0x266285=_0x52fb7e,_0x4693d7=_0x266285(0x75e);this[_0x266285(0x6e4)]=this[_0x266285(0x6e4)]||{};if(this[_0x266285(0x6e4)][_0x4693d7])return this['_colorCache'][_0x4693d7];const _0x5171c3=VisuMZ['CoreEngine']['Settings'][_0x266285(0x2b9)][_0x266285(0x368)];return this[_0x266285(0x77e)](_0x4693d7,_0x5171c3);},ColorManager[_0x52fb7e(0x47e)]=function(){const _0xa04fce=_0x52fb7e,_0xd1beb0=_0xa04fce(0x71b);this[_0xa04fce(0x6e4)]=this[_0xa04fce(0x6e4)]||{};if(this['_colorCache'][_0xd1beb0])return this[_0xa04fce(0x6e4)][_0xd1beb0];const _0x5ed06e=VisuMZ[_0xa04fce(0x81f)][_0xa04fce(0x2d2)][_0xa04fce(0x2b9)][_0xa04fce(0x781)];return this[_0xa04fce(0x77e)](_0xd1beb0,_0x5ed06e);},ColorManager[_0x52fb7e(0x550)]=function(){const _0x4beec9=_0x52fb7e,_0xc5a67d='_stored_mpGaugeColor1';this[_0x4beec9(0x6e4)]=this[_0x4beec9(0x6e4)]||{};if(this[_0x4beec9(0x6e4)][_0xc5a67d])return this['_colorCache'][_0xc5a67d];const _0x420875=VisuMZ[_0x4beec9(0x81f)][_0x4beec9(0x2d2)]['Color'][_0x4beec9(0x76d)];return this[_0x4beec9(0x77e)](_0xc5a67d,_0x420875);},ColorManager['mpGaugeColor2']=function(){const _0x4c129a=_0x52fb7e,_0x1dd979=_0x4c129a(0x3dc);this[_0x4c129a(0x6e4)]=this[_0x4c129a(0x6e4)]||{};if(this[_0x4c129a(0x6e4)][_0x1dd979])return this[_0x4c129a(0x6e4)][_0x1dd979];const _0x403faa=VisuMZ[_0x4c129a(0x81f)][_0x4c129a(0x2d2)][_0x4c129a(0x2b9)][_0x4c129a(0x3f5)];return this['getColorDataFromPluginParameters'](_0x1dd979,_0x403faa);},ColorManager[_0x52fb7e(0x56f)]=function(){const _0x1f4803=_0x52fb7e,_0x320599=_0x1f4803(0x5e6);this[_0x1f4803(0x6e4)]=this[_0x1f4803(0x6e4)]||{};if(this[_0x1f4803(0x6e4)][_0x320599])return this['_colorCache'][_0x320599];const _0x420d59=VisuMZ[_0x1f4803(0x81f)]['Settings'][_0x1f4803(0x2b9)]['ColorMPCost'];return this[_0x1f4803(0x77e)](_0x320599,_0x420d59);},ColorManager[_0x52fb7e(0x1aa)]=function(){const _0x183f1b=_0x52fb7e,_0x2bcbb3=_0x183f1b(0x7cf);this['_colorCache']=this[_0x183f1b(0x6e4)]||{};if(this['_colorCache'][_0x2bcbb3])return this[_0x183f1b(0x6e4)][_0x2bcbb3];const _0x189c2e=VisuMZ[_0x183f1b(0x81f)]['Settings'][_0x183f1b(0x2b9)][_0x183f1b(0x2d3)];return this['getColorDataFromPluginParameters'](_0x2bcbb3,_0x189c2e);},ColorManager[_0x52fb7e(0x6e7)]=function(){const _0x2ed8a8=_0x52fb7e,_0x47e52e=_0x2ed8a8(0x664);this[_0x2ed8a8(0x6e4)]=this['_colorCache']||{};if(this[_0x2ed8a8(0x6e4)][_0x47e52e])return this[_0x2ed8a8(0x6e4)][_0x47e52e];const _0x1e0f38=VisuMZ[_0x2ed8a8(0x81f)][_0x2ed8a8(0x2d2)]['Color']['ColorPowerDown'];return this[_0x2ed8a8(0x77e)](_0x47e52e,_0x1e0f38);},ColorManager[_0x52fb7e(0x305)]=function(){const _0x5b26a6=_0x52fb7e,_0x273559=_0x5b26a6(0x13c);this['_colorCache']=this[_0x5b26a6(0x6e4)]||{};if(this[_0x5b26a6(0x6e4)][_0x273559])return this[_0x5b26a6(0x6e4)][_0x273559];const _0x4359a4=VisuMZ[_0x5b26a6(0x81f)][_0x5b26a6(0x2d2)]['Color'][_0x5b26a6(0xe7)];return this[_0x5b26a6(0x77e)](_0x273559,_0x4359a4);},ColorManager[_0x52fb7e(0x71e)]=function(){const _0x3c0f2b=_0x52fb7e,_0x59c911=_0x3c0f2b(0x4c0);this[_0x3c0f2b(0x6e4)]=this['_colorCache']||{};if(this['_colorCache'][_0x59c911])return this['_colorCache'][_0x59c911];const _0x1a0a45=VisuMZ[_0x3c0f2b(0x81f)]['Settings'][_0x3c0f2b(0x2b9)][_0x3c0f2b(0x32c)];return this[_0x3c0f2b(0x77e)](_0x59c911,_0x1a0a45);},ColorManager[_0x52fb7e(0x59c)]=function(){const _0x21cf27=_0x52fb7e,_0x164b99=_0x21cf27(0x3f6);this[_0x21cf27(0x6e4)]=this[_0x21cf27(0x6e4)]||{};if(this[_0x21cf27(0x6e4)][_0x164b99])return this[_0x21cf27(0x6e4)][_0x164b99];const _0x4d35d0=VisuMZ[_0x21cf27(0x81f)][_0x21cf27(0x2d2)][_0x21cf27(0x2b9)]['ColorTPGauge1'];return this[_0x21cf27(0x77e)](_0x164b99,_0x4d35d0);},ColorManager[_0x52fb7e(0x294)]=function(){const _0x103a6c=_0x52fb7e,_0x383533=_0x103a6c(0x608);this[_0x103a6c(0x6e4)]=this['_colorCache']||{};if(this[_0x103a6c(0x6e4)][_0x383533])return this['_colorCache'][_0x383533];const _0x18bf4f=VisuMZ['CoreEngine'][_0x103a6c(0x2d2)]['Color'][_0x103a6c(0x43d)];return this[_0x103a6c(0x77e)](_0x383533,_0x18bf4f);},ColorManager[_0x52fb7e(0x706)]=function(){const _0x1f9c9e=_0x52fb7e,_0x3ec5bf=_0x1f9c9e(0x249);this[_0x1f9c9e(0x6e4)]=this[_0x1f9c9e(0x6e4)]||{};if(this['_colorCache'][_0x3ec5bf])return this[_0x1f9c9e(0x6e4)][_0x3ec5bf];const _0x3d0e7e=VisuMZ[_0x1f9c9e(0x81f)][_0x1f9c9e(0x2d2)]['Color'][_0x1f9c9e(0x847)];return this[_0x1f9c9e(0x77e)](_0x3ec5bf,_0x3d0e7e);},ColorManager[_0x52fb7e(0x236)]=function(){const _0x2c403e=_0x52fb7e,_0x3414ba=_0x2c403e(0x263);this['_colorCache']=this[_0x2c403e(0x6e4)]||{};if(this[_0x2c403e(0x6e4)][_0x3414ba])return this[_0x2c403e(0x6e4)][_0x3414ba];const _0x54f722=VisuMZ[_0x2c403e(0x81f)]['Settings'][_0x2c403e(0x2b9)][_0x2c403e(0x847)];return this['getColorDataFromPluginParameters'](_0x3414ba,_0x54f722);},ColorManager[_0x52fb7e(0x3e7)]=function(){const _0x55122d=_0x52fb7e,_0x289ace=_0x55122d(0x66a);this[_0x55122d(0x6e4)]=this['_colorCache']||{};if(this[_0x55122d(0x6e4)][_0x289ace])return this[_0x55122d(0x6e4)][_0x289ace];const _0x2f250a=VisuMZ[_0x55122d(0x81f)]['Settings'][_0x55122d(0x2b9)][_0x55122d(0x397)];return this[_0x55122d(0x77e)](_0x289ace,_0x2f250a);},ColorManager[_0x52fb7e(0x146)]=function(){const _0x3a1d6c=_0x52fb7e,_0x5e4cc7='_stored_expGaugeColor2';this[_0x3a1d6c(0x6e4)]=this[_0x3a1d6c(0x6e4)]||{};if(this[_0x3a1d6c(0x6e4)][_0x5e4cc7])return this[_0x3a1d6c(0x6e4)][_0x5e4cc7];const _0x266b48=VisuMZ[_0x3a1d6c(0x81f)][_0x3a1d6c(0x2d2)][_0x3a1d6c(0x2b9)][_0x3a1d6c(0x6b)];return this[_0x3a1d6c(0x77e)](_0x5e4cc7,_0x266b48);},ColorManager[_0x52fb7e(0x651)]=function(){const _0x21cf04=_0x52fb7e,_0x366cf9=_0x21cf04(0x795);this['_colorCache']=this[_0x21cf04(0x6e4)]||{};if(this[_0x21cf04(0x6e4)][_0x366cf9])return this[_0x21cf04(0x6e4)][_0x366cf9];const _0x946840=VisuMZ[_0x21cf04(0x81f)][_0x21cf04(0x2d2)][_0x21cf04(0x2b9)][_0x21cf04(0x36a)];return this['getColorDataFromPluginParameters'](_0x366cf9,_0x946840);},ColorManager[_0x52fb7e(0x594)]=function(){const _0x3c2c79=_0x52fb7e,_0x3cf4c2=_0x3c2c79(0x2e2);this[_0x3c2c79(0x6e4)]=this['_colorCache']||{};if(this[_0x3c2c79(0x6e4)][_0x3cf4c2])return this[_0x3c2c79(0x6e4)][_0x3cf4c2];const _0x162fe3=VisuMZ['CoreEngine']['Settings'][_0x3c2c79(0x2b9)][_0x3c2c79(0x27f)];return this[_0x3c2c79(0x77e)](_0x3cf4c2,_0x162fe3);},ColorManager[_0x52fb7e(0x1b7)]=function(_0x33fdd5){const _0x208186=_0x52fb7e;return VisuMZ[_0x208186(0x81f)]['Settings']['Color'][_0x208186(0x59e)][_0x208186(0x809)](this,_0x33fdd5);},ColorManager['mpColor']=function(_0x4fcda0){const _0x3e85c3=_0x52fb7e;return VisuMZ[_0x3e85c3(0x81f)][_0x3e85c3(0x2d2)][_0x3e85c3(0x2b9)][_0x3e85c3(0x77b)][_0x3e85c3(0x809)](this,_0x4fcda0);},ColorManager[_0x52fb7e(0x516)]=function(_0x2941e7){const _0x564a4a=_0x52fb7e;return VisuMZ[_0x564a4a(0x81f)][_0x564a4a(0x2d2)][_0x564a4a(0x2b9)]['ActorTPColor'][_0x564a4a(0x809)](this,_0x2941e7);},ColorManager[_0x52fb7e(0x586)]=function(_0x3c88aa){const _0x510ba5=_0x52fb7e;return VisuMZ[_0x510ba5(0x81f)]['Settings']['Color']['ParamChange']['call'](this,_0x3c88aa);},ColorManager['damageColor']=function(_0x4156f2){const _0x3893a7=_0x52fb7e;return VisuMZ['CoreEngine'][_0x3893a7(0x2d2)][_0x3893a7(0x2b9)][_0x3893a7(0x5f0)][_0x3893a7(0x809)](this,_0x4156f2);},ColorManager[_0x52fb7e(0x328)]=function(){const _0x22b632=_0x52fb7e;return VisuMZ['CoreEngine'][_0x22b632(0x2d2)]['Color'][_0x22b632(0x77c)];},ColorManager['outlineColorDmg']=function(){const _0x53b902=_0x52fb7e;return VisuMZ['CoreEngine'][_0x53b902(0x2d2)][_0x53b902(0x2b9)][_0x53b902(0x92)]||_0x53b902(0x748);},ColorManager[_0x52fb7e(0xa5)]=function(){const _0x51712f=_0x52fb7e;return VisuMZ[_0x51712f(0x81f)][_0x51712f(0x2d2)][_0x51712f(0x2b9)]['OutlineColorGauge']||_0x51712f(0x54a);},ColorManager['dimColor1']=function(){const _0x30e9c1=_0x52fb7e;return VisuMZ[_0x30e9c1(0x81f)][_0x30e9c1(0x2d2)][_0x30e9c1(0x2b9)][_0x30e9c1(0x7ad)];},ColorManager[_0x52fb7e(0x58b)]=function(){const _0x2ea47c=_0x52fb7e;return VisuMZ['CoreEngine'][_0x2ea47c(0x2d2)]['Color'][_0x2ea47c(0x718)];},ColorManager['itemBackColor1']=function(){const _0x1d3ffc=_0x52fb7e;return VisuMZ[_0x1d3ffc(0x81f)][_0x1d3ffc(0x2d2)][_0x1d3ffc(0x2b9)][_0x1d3ffc(0x73)];},ColorManager[_0x52fb7e(0x1c1)]=function(){const _0x164e98=_0x52fb7e;return VisuMZ[_0x164e98(0x81f)][_0x164e98(0x2d2)]['Color'][_0x164e98(0x481)];},SceneManager[_0x52fb7e(0x8d)]=[],SceneManager[_0x52fb7e(0x3d6)]=function(){const _0x45e533=_0x52fb7e;return this[_0x45e533(0x131)]&&this['_scene'][_0x45e533(0x14b)]===Scene_Battle;},SceneManager['isSceneMap']=function(){const _0x93e05c=_0x52fb7e;return this['_scene']&&this[_0x93e05c(0x131)]['constructor']===Scene_Map;},SceneManager[_0x52fb7e(0x3e2)]=function(){const _0x3c5530=_0x52fb7e;return this['_scene']&&this[_0x3c5530(0x131)]instanceof Scene_Map;},VisuMZ['CoreEngine'][_0x52fb7e(0x389)]=SceneManager['initialize'],SceneManager[_0x52fb7e(0x2ce)]=function(){const _0x5b1039=_0x52fb7e;VisuMZ['CoreEngine'][_0x5b1039(0x389)]['call'](this),this[_0x5b1039(0x3db)]();},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x26f)]=SceneManager[_0x52fb7e(0x53d)],SceneManager[_0x52fb7e(0x53d)]=function(_0xd6c1fd){const _0x311c78=_0x52fb7e;if($gameTemp)this[_0x311c78(0x3ec)](_0xd6c1fd);VisuMZ[_0x311c78(0x81f)]['SceneManager_onKeyDown'][_0x311c78(0x809)](this,_0xd6c1fd);},SceneManager[_0x52fb7e(0x3ec)]=function(_0x26f249){const _0x54122c=_0x52fb7e;if(!_0x26f249[_0x54122c(0x774)]&&!_0x26f249[_0x54122c(0x16d)])switch(_0x26f249[_0x54122c(0x822)]){case 0x52:this[_0x54122c(0x313)]();break;case 0x54:this['playTestShiftT']();break;case 0x75:this[_0x54122c(0x769)]();break;case 0x76:if(Input[_0x54122c(0x552)](_0x54122c(0x531))||Input[_0x54122c(0x552)]('ctrl'))return;this['playTestF7']();break;}else{if(_0x26f249[_0x54122c(0x774)]){let _0x11212a=_0x26f249[_0x54122c(0x822)];if(_0x11212a>=0x31&&_0x11212a<=0x39){const _0x1e88d7=_0x11212a-0x30;return SceneManager[_0x54122c(0x59d)](_0x1e88d7);}else{if(_0x11212a>=0x61&&_0x11212a<=0x69){const _0x1032d5=_0x11212a-0x60;return SceneManager[_0x54122c(0x59d)](_0x1032d5);}}}}},SceneManager[_0x52fb7e(0x769)]=function(){const _0x4a2f94=_0x52fb7e;if($gameTemp[_0x4a2f94(0x688)]()&&VisuMZ[_0x4a2f94(0x81f)][_0x4a2f94(0x2d2)][_0x4a2f94(0x30e)][_0x4a2f94(0xb9)]){ConfigManager[_0x4a2f94(0x4bd)]!==0x0?(ConfigManager[_0x4a2f94(0x315)]=0x0,ConfigManager[_0x4a2f94(0x49e)]=0x0,ConfigManager[_0x4a2f94(0x731)]=0x0,ConfigManager[_0x4a2f94(0x4bd)]=0x0):(ConfigManager['bgmVolume']=0x64,ConfigManager[_0x4a2f94(0x49e)]=0x64,ConfigManager[_0x4a2f94(0x731)]=0x64,ConfigManager['seVolume']=0x64);ConfigManager[_0x4a2f94(0x33d)]();if(this[_0x4a2f94(0x131)][_0x4a2f94(0x14b)]===Scene_Options){if(this[_0x4a2f94(0x131)][_0x4a2f94(0x71d)])this[_0x4a2f94(0x131)]['_optionsWindow']['refresh']();if(this[_0x4a2f94(0x131)][_0x4a2f94(0x45c)])this[_0x4a2f94(0x131)]['_listWindow'][_0x4a2f94(0x93)]();}}},SceneManager['playTestF7']=function(){const _0x178b73=_0x52fb7e;$gameTemp[_0x178b73(0x688)]()&&VisuMZ[_0x178b73(0x81f)][_0x178b73(0x2d2)][_0x178b73(0x30e)]['F7key']&&($gameTemp[_0x178b73(0x76f)]=!$gameTemp[_0x178b73(0x76f)]);},SceneManager[_0x52fb7e(0x313)]=function(){const _0x1a17d1=_0x52fb7e;if(!VisuMZ[_0x1a17d1(0x81f)][_0x1a17d1(0x2d2)][_0x1a17d1(0x30e)][_0x1a17d1(0x115)])return;if(!$gameTemp[_0x1a17d1(0x688)]())return;if(!SceneManager['isSceneBattle']())return;if(!Input[_0x1a17d1(0x552)](_0x1a17d1(0x531)))return;for(const _0x425dfa of $gameParty['members']()){if(!_0x425dfa)continue;_0x425dfa[_0x1a17d1(0x670)]();}},SceneManager['playTestShiftT']=function(){const _0x36d8ec=_0x52fb7e;if(!VisuMZ[_0x36d8ec(0x81f)][_0x36d8ec(0x2d2)][_0x36d8ec(0x30e)]['ShiftT_Toggle'])return;if(!$gameTemp['isPlaytest']())return;if(!SceneManager[_0x36d8ec(0x3d6)]())return;if(!Input['isPressed']('shift'))return;for(const _0x54b07a of $gameParty[_0x36d8ec(0x11d)]()){if(!_0x54b07a)continue;_0x54b07a[_0x36d8ec(0x3bd)](_0x54b07a[_0x36d8ec(0x11c)]());}},SceneManager[_0x52fb7e(0x59d)]=function(_0x260540){const _0x4726cb=_0x52fb7e;if(!$gameTemp[_0x4726cb(0x688)]())return;if(!DataManager['savefileInfo'](_0x260540))return;if(!(VisuMZ['CoreEngine'][_0x4726cb(0x2d2)][_0x4726cb(0x30e)][_0x4726cb(0x2f6)]??!![]))return;this[_0x4726cb(0x52a)](Scene_QuickLoad),this[_0x4726cb(0x6b5)](_0x260540);},SceneManager[_0x52fb7e(0x3db)]=function(){const _0x2e019f=_0x52fb7e;this[_0x2e019f(0x3df)]=![],this[_0x2e019f(0x367)]=!VisuMZ['CoreEngine'][_0x2e019f(0x2d2)]['UI'][_0x2e019f(0xf5)];},SceneManager[_0x52fb7e(0xb7)]=function(_0xe55359){const _0x3a6773=_0x52fb7e;VisuMZ[_0x3a6773(0x81f)][_0x3a6773(0x2d2)]['UI']['SideButtons']&&(this[_0x3a6773(0x3df)]=_0xe55359);},SceneManager[_0x52fb7e(0x6fd)]=function(){const _0x51d61a=_0x52fb7e;return this[_0x51d61a(0x3df)];},SceneManager[_0x52fb7e(0x566)]=function(){const _0x336308=_0x52fb7e;return this[_0x336308(0x367)];},SceneManager[_0x52fb7e(0x3e0)]=function(){const _0x5118c1=_0x52fb7e;return this[_0x5118c1(0x566)]()||this[_0x5118c1(0x6fd)]();},VisuMZ[_0x52fb7e(0x81f)]['SceneManager_isGameActive']=SceneManager[_0x52fb7e(0x5e1)],SceneManager[_0x52fb7e(0x5e1)]=function(){const _0xcd02d=_0x52fb7e;return VisuMZ[_0xcd02d(0x81f)][_0xcd02d(0x2d2)][_0xcd02d(0x30e)][_0xcd02d(0x78a)]?VisuMZ[_0xcd02d(0x81f)]['SceneManager_isGameActive'][_0xcd02d(0x809)](this):!![];},SceneManager[_0x52fb7e(0x4dd)]=function(_0x418a3b){const _0xa19ca2=_0x52fb7e;if(_0x418a3b instanceof Error)this[_0xa19ca2(0x509)](_0x418a3b);else _0x418a3b instanceof Array&&_0x418a3b[0x0]===_0xa19ca2(0x635)?this[_0xa19ca2(0x301)](_0x418a3b):this[_0xa19ca2(0x63c)](_0x418a3b);this[_0xa19ca2(0x838)]();},VisuMZ['CoreEngine'][_0x52fb7e(0x371)]=BattleManager[_0x52fb7e(0x76a)],BattleManager[_0x52fb7e(0x76a)]=function(){const _0x647a4=_0x52fb7e;return VisuMZ[_0x647a4(0x81f)][_0x647a4(0x2d2)]['QoL']['EscapeAlways']?this[_0x647a4(0x12a)]():VisuMZ[_0x647a4(0x81f)]['BattleManager_processEscape'][_0x647a4(0x809)](this);},BattleManager[_0x52fb7e(0x12a)]=function(){return $gameParty['performEscape'](),SoundManager['playEscape'](),this['onEscapeSuccess'](),!![];},BattleManager[_0x52fb7e(0x423)]=function(){const _0x5c18dc=_0x52fb7e;return $gameSystem[_0x5c18dc(0x78b)]()>=0x1;},BattleManager[_0x52fb7e(0x56e)]=function(){const _0x5ae60c=_0x52fb7e;return $gameSystem[_0x5ae60c(0x78b)]()===0x1;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x7c0)]=Game_Temp[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)],Game_Temp[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)]=function(){const _0x91faf0=_0x52fb7e;VisuMZ[_0x91faf0(0x81f)][_0x91faf0(0x7c0)][_0x91faf0(0x809)](this),this[_0x91faf0(0x572)](),this['createFauxAnimationQueue'](),this['createPointAnimationQueue']();},Game_Temp[_0x52fb7e(0x7d3)][_0x52fb7e(0x572)]=function(){const _0x15fed3=_0x52fb7e;VisuMZ['CoreEngine'][_0x15fed3(0x2d2)][_0x15fed3(0x30e)][_0x15fed3(0x7ab)]&&(this[_0x15fed3(0x785)]=![]);},Game_Temp[_0x52fb7e(0x7d3)][_0x52fb7e(0x5ec)]=function(_0x1dc3c2){const _0x48271b=_0x52fb7e;this[_0x48271b(0x279)]=_0x1dc3c2;},Game_Temp[_0x52fb7e(0x7d3)][_0x52fb7e(0x62f)]=function(){const _0x170754=_0x52fb7e;return this[_0x170754(0x279)];},Game_Temp[_0x52fb7e(0x7d3)]['clearForcedGameTroopSettingsCoreEngine']=function(){const _0xb5c018=_0x52fb7e;this[_0xb5c018(0x255)]=undefined,this['_forcedBattleSys']=undefined,this[_0xb5c018(0x365)]=undefined;},Game_Temp[_0x52fb7e(0x7d3)][_0x52fb7e(0x78d)]=function(_0x3b125f){const _0x3646b5=_0x52fb7e;$gameMap&&$dataMap&&$dataMap['note']&&this['parseForcedGameTroopSettingsCoreEngine']($dataMap[_0x3646b5(0x571)]);const _0x59d83f=$dataTroops[_0x3b125f];if(_0x59d83f){let _0x551ea6=DataManager[_0x3646b5(0x318)](_0x59d83f['id']);this[_0x3646b5(0x4d3)](_0x551ea6);}},Game_Temp[_0x52fb7e(0x7d3)][_0x52fb7e(0x4d3)]=function(_0x42c67e){const _0xd7a45e=_0x52fb7e;if(!_0x42c67e)return;if(_0x42c67e[_0xd7a45e(0xec)](/<(?:FRONTVIEW|FRONT VIEW|FV)>/i))this[_0xd7a45e(0x255)]='FV';else{if(_0x42c67e[_0xd7a45e(0xec)](/<(?:SIDEVIEW|SIDE VIEW|SV)>/i))this[_0xd7a45e(0x255)]='SV';else{if(_0x42c67e[_0xd7a45e(0xec)](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0xb330fc=String(RegExp['$1']);if(_0xb330fc[_0xd7a45e(0xec)](/(?:FRONTVIEW|FRONT VIEW|FV)/i))this[_0xd7a45e(0x255)]='FV';else _0xb330fc[_0xd7a45e(0xec)](/(?:SIDEVIEW|SIDE VIEW|SV)/i)&&(this['_forcedTroopView']='SV');}}}if(_0x42c67e[_0xd7a45e(0xec)](/<(?:DTB)>/i))this[_0xd7a45e(0x645)]=0x0;else{if(_0x42c67e[_0xd7a45e(0xec)](/<(?:TPB|ATB)[ ]ACTIVE>/i))this[_0xd7a45e(0x645)]=0x1;else{if(_0x42c67e['match'](/<(?:TPB|ATB)[ ]WAIT>/i))this[_0xd7a45e(0x645)]=0x2;else{if(_0x42c67e['match'](/<(?:TPB|ATB)>/i))this[_0xd7a45e(0x645)]=0x2;else{if(_0x42c67e[_0xd7a45e(0xec)](/<(?:CTB)>/i))Imported['VisuMZ_2_BattleSystemCTB']&&(this[_0xd7a45e(0x645)]='CTB');else{if(_0x42c67e[_0xd7a45e(0xec)](/<(?:STB)>/i))Imported['VisuMZ_2_BattleSystemSTB']&&(this[_0xd7a45e(0x645)]=_0xd7a45e(0xb8));else{if(_0x42c67e[_0xd7a45e(0xec)](/<(?:BTB)>/i))Imported[_0xd7a45e(0x64c)]&&(this[_0xd7a45e(0x645)]=_0xd7a45e(0x829));else{if(_0x42c67e[_0xd7a45e(0xec)](/<(?:FTB)>/i))Imported[_0xd7a45e(0x3f9)]&&(this[_0xd7a45e(0x645)]=_0xd7a45e(0x88));else{if(_0x42c67e[_0xd7a45e(0xec)](/<(?:OTB)>/i))Imported[_0xd7a45e(0x103)]&&(this[_0xd7a45e(0x645)]='OTB');else{if(_0x42c67e[_0xd7a45e(0xec)](/<(?:ETB)>/i))Imported[_0xd7a45e(0x7d9)]&&(this[_0xd7a45e(0x645)]=_0xd7a45e(0x4fe));else{if(_0x42c67e[_0xd7a45e(0xec)](/<(?:PTB)>/i))Imported[_0xd7a45e(0x6a4)]&&(this[_0xd7a45e(0x645)]='PTB');else{if(_0x42c67e[_0xd7a45e(0xec)](/<(?:BATTLEVIEW|BATTLE VIEW):[ ](.*)>/i)){const _0x8b4c63=String(RegExp['$1']);if(_0x8b4c63[_0xd7a45e(0xec)](/DTB/i))this[_0xd7a45e(0x645)]=0x0;else{if(_0x8b4c63[_0xd7a45e(0xec)](/(?:TPB|ATB)[ ]ACTIVE/i))this['_forcedBattleSys']=0x1;else{if(_0x8b4c63[_0xd7a45e(0xec)](/(?:TPB|ATB)[ ]WAIT/i))this[_0xd7a45e(0x645)]=0x2;else{if(_0x8b4c63[_0xd7a45e(0xec)](/CTB/i))Imported[_0xd7a45e(0x7a7)]&&(this[_0xd7a45e(0x645)]='CTB');else{if(_0x8b4c63[_0xd7a45e(0xec)](/STB/i))Imported[_0xd7a45e(0x499)]&&(this[_0xd7a45e(0x645)]='STB');else{if(_0x8b4c63[_0xd7a45e(0xec)](/BTB/i))Imported[_0xd7a45e(0x64c)]&&(this[_0xd7a45e(0x645)]=_0xd7a45e(0x829));else{if(_0x8b4c63[_0xd7a45e(0xec)](/FTB/i))Imported[_0xd7a45e(0x3f9)]&&(this[_0xd7a45e(0x645)]=_0xd7a45e(0x88));else{if(_0x8b4c63[_0xd7a45e(0xec)](/OTB/i))Imported['VisuMZ_2_BattleSystemOTB']&&(this['_forcedBattleSys']='OTB');else{if(_0x8b4c63[_0xd7a45e(0xec)](/ETB/i))Imported[_0xd7a45e(0x7d9)]&&(this[_0xd7a45e(0x645)]=_0xd7a45e(0x4fe));else _0x8b4c63[_0xd7a45e(0xec)](/PTB/i)&&(Imported[_0xd7a45e(0x6a4)]&&(this[_0xd7a45e(0x645)]=_0xd7a45e(0x616)));}}}}}}}}}}}}}}}}}}}}if(_0x42c67e[_0xd7a45e(0xec)](/<(?:|BATTLE )GRID>/i))this['_forcedBattleGridSystem']=!![];else _0x42c67e[_0xd7a45e(0xec)](/<NO (?:|BATTLE )GRID>/i)&&(this[_0xd7a45e(0x365)]=![]);},Game_Temp[_0x52fb7e(0x7d3)][_0x52fb7e(0x755)]=function(){const _0x3a5477=_0x52fb7e;this[_0x3a5477(0x1a1)]=[];},Game_Temp[_0x52fb7e(0x7d3)]['requestFauxAnimation']=function(_0x230bd9,_0x5f4d7d,_0x232916,_0x4a0d66){const _0x62d7e4=_0x52fb7e;if(!this[_0x62d7e4(0x432)]())return;_0x232916=_0x232916||![],_0x4a0d66=_0x4a0d66||![];if($dataAnimations[_0x5f4d7d]){const _0x4b06a2={'targets':_0x230bd9,'animationId':_0x5f4d7d,'mirror':_0x232916,'mute':_0x4a0d66};this[_0x62d7e4(0x1a1)][_0x62d7e4(0x52a)](_0x4b06a2);for(const _0x53042d of _0x230bd9){_0x53042d[_0x62d7e4(0x1cf)]&&_0x53042d['startAnimation']();}}},Game_Temp[_0x52fb7e(0x7d3)]['showFauxAnimations']=function(){return!![];},Game_Temp[_0x52fb7e(0x7d3)][_0x52fb7e(0x765)]=function(){const _0x267dcb=_0x52fb7e;return this[_0x267dcb(0x1a1)]['shift']();},Game_Temp[_0x52fb7e(0x7d3)][_0x52fb7e(0x7de)]=function(){const _0xd352d0=_0x52fb7e;this[_0xd352d0(0x7fa)]=[];},Game_Temp[_0x52fb7e(0x7d3)][_0x52fb7e(0x593)]=function(_0x19d9f1,_0x1429ae,_0x3bcfed,_0x355856,_0x2ca538){const _0x33494b=_0x52fb7e;if(!this[_0x33494b(0x63e)]())return;_0x355856=_0x355856||![],_0x2ca538=_0x2ca538||![];if($dataAnimations[_0x3bcfed]){const _0x1f844d={'x':_0x19d9f1,'y':_0x1429ae,'animationId':_0x3bcfed,'mirror':_0x355856,'mute':_0x2ca538};this[_0x33494b(0x7fa)][_0x33494b(0x52a)](_0x1f844d);}},Game_Temp[_0x52fb7e(0x7d3)]['showPointAnimations']=function(){return!![];},Game_Temp[_0x52fb7e(0x7d3)]['retrievePointAnimation']=function(){const _0x21de2b=_0x52fb7e;return this[_0x21de2b(0x7fa)][_0x21de2b(0x531)]();},VisuMZ['CoreEngine'][_0x52fb7e(0x35c)]=Game_System[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)],Game_System[_0x52fb7e(0x7d3)]['initialize']=function(){const _0x3cd719=_0x52fb7e;VisuMZ[_0x3cd719(0x81f)]['Game_System_initialize'][_0x3cd719(0x809)](this),this['initCoreEngine']();},Game_System[_0x52fb7e(0x7d3)][_0x52fb7e(0x173)]=function(){const _0x1e188b=_0x52fb7e;this[_0x1e188b(0x3d4)]={'SideView':$dataSystem[_0x1e188b(0x416)],'BattleSystem':this[_0x1e188b(0x2cf)](),'FontSize':$dataSystem[_0x1e188b(0x6cb)][_0x1e188b(0xd1)],'Padding':0xc};},Game_System['prototype'][_0x52fb7e(0x39c)]=function(){const _0x4ed8c5=_0x52fb7e;if($gameTemp['_forcedTroopView']==='SV')return!![];else{if($gameTemp[_0x4ed8c5(0x255)]==='FV')return![];}if(this[_0x4ed8c5(0x3d4)]===undefined)this['initCoreEngine']();if(this[_0x4ed8c5(0x3d4)]['SideView']===undefined)this[_0x4ed8c5(0x173)]();return this[_0x4ed8c5(0x3d4)][_0x4ed8c5(0x431)];},Game_System[_0x52fb7e(0x7d3)]['setSideView']=function(_0x5bdf5f){const _0x56560e=_0x52fb7e;if(this[_0x56560e(0x3d4)]===undefined)this[_0x56560e(0x173)]();if(this['_CoreEngineSettings'][_0x56560e(0x431)]===undefined)this[_0x56560e(0x173)]();this[_0x56560e(0x3d4)][_0x56560e(0x431)]=_0x5bdf5f;},Game_System['prototype']['resetBattleSystem']=function(){const _0x980c6e=_0x52fb7e;if(this['_CoreEngineSettings']===undefined)this['initCoreEngine']();this[_0x980c6e(0x3d4)][_0x980c6e(0x2bb)]=this[_0x980c6e(0x2cf)]();},Game_System[_0x52fb7e(0x7d3)]['initialBattleSystem']=function(){const _0x5c4eb7=_0x52fb7e,_0x5d89f4=(VisuMZ[_0x5c4eb7(0x81f)][_0x5c4eb7(0x2d2)][_0x5c4eb7(0x2bb)]||_0x5c4eb7(0x1da))[_0x5c4eb7(0x43a)]()[_0x5c4eb7(0x711)]();return VisuMZ[_0x5c4eb7(0x81f)][_0x5c4eb7(0x512)](_0x5d89f4);},Game_System[_0x52fb7e(0x7d3)][_0x52fb7e(0x78b)]=function(){const _0x431bb0=_0x52fb7e;if($gameTemp[_0x431bb0(0x645)]!==undefined)return $gameTemp[_0x431bb0(0x645)];if(this[_0x431bb0(0x3d4)]===undefined)this[_0x431bb0(0x173)]();if(this[_0x431bb0(0x3d4)][_0x431bb0(0x2bb)]===undefined)this[_0x431bb0(0x256)]();return this['_CoreEngineSettings'][_0x431bb0(0x2bb)];},Game_System['prototype'][_0x52fb7e(0x107)]=function(_0x547ca5){const _0xd4b6c4=_0x52fb7e;if(this[_0xd4b6c4(0x3d4)]===undefined)this['initCoreEngine']();if(this['_CoreEngineSettings']['BattleSystem']===undefined)this[_0xd4b6c4(0x256)]();this[_0xd4b6c4(0x3d4)][_0xd4b6c4(0x2bb)]=_0x547ca5;},Game_System[_0x52fb7e(0x7d3)][_0x52fb7e(0x3c1)]=function(){const _0x507eee=_0x52fb7e;if(this[_0x507eee(0x3d4)]===undefined)this[_0x507eee(0x173)]();if(this[_0x507eee(0x3d4)][_0x507eee(0x4ee)]===undefined)this['initCoreEngine']();return this['_CoreEngineSettings']['FontSize'];},Game_System['prototype'][_0x52fb7e(0x6f1)]=function(_0x16b195){const _0x31e9fb=_0x52fb7e;if(this['_CoreEngineSettings']===undefined)this[_0x31e9fb(0x173)]();if(this[_0x31e9fb(0x3d4)][_0x31e9fb(0x3d3)]===undefined)this[_0x31e9fb(0x173)]();this[_0x31e9fb(0x3d4)][_0x31e9fb(0x4ee)]=_0x16b195;},Game_System[_0x52fb7e(0x7d3)][_0x52fb7e(0x4b9)]=function(){const _0x4b7c25=_0x52fb7e;if(this[_0x4b7c25(0x3d4)]===undefined)this['initCoreEngine']();if(this[_0x4b7c25(0x3d4)][_0x4b7c25(0x330)]===undefined)this['initCoreEngine']();return this['_CoreEngineSettings']['Padding'];},Game_System[_0x52fb7e(0x7d3)][_0x52fb7e(0x4ff)]=function(_0x5b446c){const _0x114766=_0x52fb7e;if(this[_0x114766(0x3d4)]===undefined)this[_0x114766(0x173)]();if(this[_0x114766(0x3d4)][_0x114766(0x3d3)]===undefined)this[_0x114766(0x173)]();this[_0x114766(0x3d4)][_0x114766(0x330)]=_0x5b446c;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x744)]=Game_Screen[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)],Game_Screen[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)]=function(){const _0x17cc0c=_0x52fb7e;VisuMZ[_0x17cc0c(0x81f)][_0x17cc0c(0x744)]['call'](this),this[_0x17cc0c(0x626)]();},Game_Screen[_0x52fb7e(0x7d3)]['initCoreEngineScreenShake']=function(){const _0x39e35b=_0x52fb7e,_0x2fae3e=VisuMZ[_0x39e35b(0x81f)][_0x39e35b(0x2d2)][_0x39e35b(0x67f)];this['_coreEngineShakeStyle']=_0x2fae3e?.['DefaultStyle']||_0x39e35b(0x1a5);},Game_Screen[_0x52fb7e(0x7d3)][_0x52fb7e(0x29e)]=function(){const _0x5130a5=_0x52fb7e;if(this[_0x5130a5(0x38e)]===undefined)this['initCoreEngineScreenShake']();return this[_0x5130a5(0x38e)];},Game_Screen['prototype'][_0x52fb7e(0x2d9)]=function(_0x308fd0){const _0x240d15=_0x52fb7e;if(this['_coreEngineShakeStyle']===undefined)this[_0x240d15(0x626)]();this['_coreEngineShakeStyle']=_0x308fd0[_0x240d15(0x6d1)]()['trim']();},Game_Picture['prototype'][_0x52fb7e(0x369)]=function(){const _0xb9eb6d=_0x52fb7e;if($gameParty['inBattle']())return![];return this[_0xb9eb6d(0x693)]()&&this[_0xb9eb6d(0x693)]()['charAt'](0x0)==='!';},Game_Picture['prototype']['onlyfilename']=function(){const _0x2dcbc2=_0x52fb7e;return this['_name'][_0x2dcbc2(0x775)]('/')[_0x2dcbc2(0x6d0)]();},VisuMZ['CoreEngine'][_0x52fb7e(0x446)]=Game_Picture[_0x52fb7e(0x7d3)]['x'],Game_Picture['prototype']['x']=function(){const _0x47e5a6=_0x52fb7e;return this[_0x47e5a6(0x369)]()?this[_0x47e5a6(0x6a3)]():VisuMZ['CoreEngine'][_0x47e5a6(0x446)][_0x47e5a6(0x809)](this);},Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x6a3)]=function(){const _0x6c0342=_0x52fb7e,_0x3115a2=$gameMap[_0x6c0342(0x4bc)]()*$gameMap[_0x6c0342(0xd6)]();return(this['_x']-_0x3115a2)*$gameScreen[_0x6c0342(0x6b7)]();},VisuMZ['CoreEngine'][_0x52fb7e(0x207)]=Game_Picture['prototype']['y'],Game_Picture[_0x52fb7e(0x7d3)]['y']=function(){const _0x1b3101=_0x52fb7e;return this[_0x1b3101(0x369)]()?this[_0x1b3101(0x260)]():VisuMZ[_0x1b3101(0x81f)]['Game_Picture_y'][_0x1b3101(0x809)](this);},Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x260)]=function(){const _0x4c8855=_0x52fb7e,_0x46cde7=$gameMap[_0x4c8855(0x567)]()*$gameMap['tileHeight']();return(this['_y']-_0x46cde7)*$gameScreen[_0x4c8855(0x6b7)]();},VisuMZ['CoreEngine'][_0x52fb7e(0x29b)]=Game_Picture['prototype']['scaleX'],Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x6b8)]=function(){const _0x432ca2=_0x52fb7e;let _0x4625d9=VisuMZ['CoreEngine']['Game_Picture_scaleX']['call'](this);return this['isMapScrollLinked']()&&(_0x4625d9*=$gameScreen[_0x432ca2(0x6b7)]()),_0x4625d9;},VisuMZ['CoreEngine']['Game_Picture_scaleY']=Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x695)],Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x695)]=function(){const _0x2fe44c=_0x52fb7e;let _0x3efa3e=VisuMZ[_0x2fe44c(0x81f)][_0x2fe44c(0x1d4)][_0x2fe44c(0x809)](this);return this[_0x2fe44c(0x369)]()&&(_0x3efa3e*=$gameScreen[_0x2fe44c(0x6b7)]()),_0x3efa3e;},Game_Picture['prototype'][_0x52fb7e(0x42c)]=function(_0x4e83a5){const _0x477d40=_0x52fb7e;this[_0x477d40(0x40e)]=_0x4e83a5;},VisuMZ[_0x52fb7e(0x81f)]['Game_Picture_calcEasing']=Game_Picture[_0x52fb7e(0x7d3)]['calcEasing'],Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x209)]=function(_0x5394ba){const _0x44101b=_0x52fb7e;return this[_0x44101b(0x40e)]=this[_0x44101b(0x40e)]||0x0,[0x0,0x1,0x2,0x3][_0x44101b(0x597)](this[_0x44101b(0x40e)])?VisuMZ[_0x44101b(0x81f)]['Game_Picture_calcEasing'][_0x44101b(0x809)](this,_0x5394ba):VisuMZ[_0x44101b(0x4aa)](_0x5394ba,this[_0x44101b(0x40e)]);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2ec)]=Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x4b2)],Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x4b2)]=function(){const _0x20a84b=_0x52fb7e;VisuMZ['CoreEngine'][_0x20a84b(0x2ec)][_0x20a84b(0x809)](this),this[_0x20a84b(0x307)]();},Game_Picture[_0x52fb7e(0x7d3)]['initRotationCoreEngine']=function(){const _0x4fe3db=_0x52fb7e;this[_0x4fe3db(0x5b7)]={'current':0x0,'target':0x0,'duration':0x0,'wholeDuration':0x0,'easingType':_0x4fe3db(0x58e)};},VisuMZ['CoreEngine']['Game_Picture_angle']=Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x64b)],Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x64b)]=function(){const _0x892841=_0x52fb7e;let _0x4d85cb=VisuMZ[_0x892841(0x81f)][_0x892841(0x56a)]['call'](this);return _0x4d85cb+=this[_0x892841(0x2d6)](),_0x4d85cb;},Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x2d6)]=function(){const _0x3ca577=_0x52fb7e;if(this[_0x3ca577(0x5b7)]===undefined)this[_0x3ca577(0x307)]();return this[_0x3ca577(0x5b7)][_0x3ca577(0x834)]||0x0;},Game_Picture[_0x52fb7e(0x7d3)]['setAnglePlusData']=function(_0x452d20,_0x355d2b,_0x451250){const _0x4c4e70=_0x52fb7e;if(this['_anglePlus']===undefined)this['initRotationCoreEngine']();this['_anglePlus'][_0x4c4e70(0x65a)]=_0x452d20||0x0,this[_0x4c4e70(0x5b7)][_0x4c4e70(0x640)]=_0x355d2b||0x0,this[_0x4c4e70(0x5b7)][_0x4c4e70(0x425)]=_0x355d2b||0x0,this[_0x4c4e70(0x5b7)]['easingType']=_0x451250||'Linear',_0x355d2b<=0x0&&(this[_0x4c4e70(0x5b7)][_0x4c4e70(0x834)]=this[_0x4c4e70(0x5b7)][_0x4c4e70(0x65a)]);},Game_Picture['prototype'][_0x52fb7e(0x57f)]=function(_0xc5bf58,_0x4882db,_0x3c85d6){const _0xa49705=_0x52fb7e;if(this[_0xa49705(0x5b7)]===undefined)this['initRotationCoreEngine']();this[_0xa49705(0x5b7)][_0xa49705(0x65a)]+=_0xc5bf58||0x0,this[_0xa49705(0x5b7)][_0xa49705(0x640)]=_0x4882db||0x0,this[_0xa49705(0x5b7)]['wholeDuration']=_0x4882db||0x0,this['_anglePlus'][_0xa49705(0x844)]=_0x3c85d6||'Linear',_0x4882db<=0x0&&(this[_0xa49705(0x5b7)]['current']=this[_0xa49705(0x5b7)]['target']);},VisuMZ[_0x52fb7e(0x81f)]['Game_Picture_updateRotation']=Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x1f2)],Game_Picture['prototype'][_0x52fb7e(0x1f2)]=function(){const _0x31257f=_0x52fb7e;VisuMZ[_0x31257f(0x81f)][_0x31257f(0x43e)]['call'](this),this['updateAnglePlus']();},Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x72a)]=function(){const _0x1d2a48=_0x52fb7e;if(this['_anglePlus']===undefined)this[_0x1d2a48(0x307)]();const _0x320d1c=this[_0x1d2a48(0x5b7)];if(_0x320d1c['duration']<=0x0)return;_0x320d1c[_0x1d2a48(0x834)]=this[_0x1d2a48(0x4e0)](_0x320d1c['current'],_0x320d1c['target']),_0x320d1c[_0x1d2a48(0x640)]--,_0x320d1c[_0x1d2a48(0x640)]<=0x0&&(_0x320d1c['current']=_0x320d1c[_0x1d2a48(0x65a)]);},Game_Picture['prototype']['applyEasingAnglePlus']=function(_0x2bf760,_0x2fa85d){const _0x169fe0=_0x52fb7e,_0x142d09=this[_0x169fe0(0x5b7)],_0x5952b1=_0x142d09['easingType'],_0x18c623=_0x142d09[_0x169fe0(0x640)],_0x2816aa=_0x142d09[_0x169fe0(0x425)],_0x329382=VisuMZ[_0x169fe0(0x4aa)]((_0x2816aa-_0x18c623)/_0x2816aa,_0x5952b1),_0x268468=VisuMZ[_0x169fe0(0x4aa)]((_0x2816aa-_0x18c623+0x1)/_0x2816aa,_0x5952b1),_0x162bf0=(_0x2bf760-_0x2fa85d*_0x329382)/(0x1-_0x329382);return _0x162bf0+(_0x2fa85d-_0x162bf0)*_0x268468;},VisuMZ[_0x52fb7e(0x81f)]['Game_Action_itemHit']=Game_Action[_0x52fb7e(0x7d3)][_0x52fb7e(0x737)],Game_Action[_0x52fb7e(0x7d3)]['itemHit']=function(_0x4988ad){const _0x358df8=_0x52fb7e;return VisuMZ[_0x358df8(0x81f)][_0x358df8(0x2d2)]['QoL'][_0x358df8(0x3c7)]?this['itemHitImprovedAccuracy'](_0x4988ad):VisuMZ[_0x358df8(0x81f)][_0x358df8(0x450)][_0x358df8(0x809)](this,_0x4988ad);},Game_Action[_0x52fb7e(0x7d3)]['itemHitImprovedAccuracy']=function(_0x34ae1b){const _0x9e3264=_0x52fb7e,_0x26b445=this[_0x9e3264(0x4d7)](_0x34ae1b),_0x3889aa=this['subjectHitRate'](_0x34ae1b),_0x4db6b1=this[_0x9e3264(0x5f4)](_0x34ae1b);return _0x26b445*(_0x3889aa-_0x4db6b1);},VisuMZ['CoreEngine'][_0x52fb7e(0x727)]=Game_Action[_0x52fb7e(0x7d3)][_0x52fb7e(0x108)],Game_Action[_0x52fb7e(0x7d3)][_0x52fb7e(0x108)]=function(_0x1f1fbe){const _0x55905f=_0x52fb7e;return VisuMZ[_0x55905f(0x81f)][_0x55905f(0x2d2)][_0x55905f(0x30e)][_0x55905f(0x3c7)]?0x0:VisuMZ[_0x55905f(0x81f)][_0x55905f(0x727)][_0x55905f(0x809)](this,_0x1f1fbe);},Game_Action[_0x52fb7e(0x7d3)][_0x52fb7e(0x4d7)]=function(_0x1c1935){const _0x232247=_0x52fb7e;return this[_0x232247(0xbd)]()[_0x232247(0x4ef)]*0.01;},Game_Action[_0x52fb7e(0x7d3)][_0x52fb7e(0x81c)]=function(_0x202255){const _0x26c8e0=_0x52fb7e;if(VisuMZ[_0x26c8e0(0x81f)][_0x26c8e0(0x2d2)][_0x26c8e0(0x30e)][_0x26c8e0(0x197)]&&this[_0x26c8e0(0x225)]())return 0x1;return this[_0x26c8e0(0x824)]()?VisuMZ[_0x26c8e0(0x81f)][_0x26c8e0(0x2d2)][_0x26c8e0(0x30e)][_0x26c8e0(0x197)]&&this[_0x26c8e0(0x5b8)]()[_0x26c8e0(0x1b4)]()?this[_0x26c8e0(0x5b8)]()[_0x26c8e0(0x343)]+0.05:this[_0x26c8e0(0x5b8)]()[_0x26c8e0(0x343)]:0x1;},Game_Action[_0x52fb7e(0x7d3)]['targetEvaRate']=function(_0x133999){const _0x3d2ae4=_0x52fb7e;if(this[_0x3d2ae4(0x5b8)]()[_0x3d2ae4(0x1b4)]()===_0x133999[_0x3d2ae4(0x1b4)]())return 0x0;if(this[_0x3d2ae4(0x824)]())return VisuMZ['CoreEngine'][_0x3d2ae4(0x2d2)]['QoL'][_0x3d2ae4(0x197)]&&_0x133999['isEnemy']()?_0x133999[_0x3d2ae4(0x68)]-0.05:_0x133999['eva'];else return this[_0x3d2ae4(0x44e)]()?_0x133999[_0x3d2ae4(0x354)]:0x0;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x140)]=Game_Action[_0x52fb7e(0x7d3)][_0x52fb7e(0x530)],Game_Action[_0x52fb7e(0x7d3)][_0x52fb7e(0x530)]=function(_0x1f1e53){const _0x584f28=_0x52fb7e;VisuMZ[_0x584f28(0x81f)][_0x584f28(0x140)][_0x584f28(0x809)](this,_0x1f1e53);if(VisuMZ[_0x584f28(0x81f)]['Settings']['QoL'][_0x584f28(0x3c7)])return;const _0x1a2921=_0x1f1e53['result']();_0x1a2921[_0x584f28(0x117)]&&(0x1-this[_0x584f28(0x108)](_0x1f1e53)>this[_0x584f28(0x737)](_0x1f1e53)&&(_0x1a2921[_0x584f28(0x117)]=![],_0x1a2921[_0x584f28(0x740)]=!![]));},VisuMZ[_0x52fb7e(0x81f)]['Game_BattlerBase_initMembers']=Game_BattlerBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x79f)],Game_BattlerBase['prototype']['initMembers']=function(){const _0x46c81f=_0x52fb7e;this[_0x46c81f(0x341)]={},VisuMZ[_0x46c81f(0x81f)][_0x46c81f(0x703)][_0x46c81f(0x809)](this);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x522)]=Game_BattlerBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x93)],Game_BattlerBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x93)]=function(){const _0x517ced=_0x52fb7e;this[_0x517ced(0x341)]={},VisuMZ['CoreEngine']['Game_BattlerBase_refresh']['call'](this);},Game_BattlerBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x308)]=function(_0x412e50){const _0x1d23c6=_0x52fb7e;return this[_0x1d23c6(0x341)]=this[_0x1d23c6(0x341)]||{},this[_0x1d23c6(0x341)][_0x412e50]!==undefined;},Game_BattlerBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x839)]=function(_0xb33ba){const _0x412f57=_0x52fb7e,_0x26624c=(_0x158d79,_0xb3af88)=>{const _0x270928=_0x1c32;if(!_0xb3af88)return _0x158d79;if(_0xb3af88['note'][_0x270928(0xec)](VisuMZ[_0x270928(0x81f)][_0x270928(0x1ac)][_0x270928(0x839)][_0xb33ba])){var _0x1267ae=Number(RegExp['$1']);_0x158d79+=_0x1267ae;}if(_0xb3af88['note']['match'](VisuMZ[_0x270928(0x81f)][_0x270928(0x1ac)][_0x270928(0x653)][_0xb33ba])){var _0x5cfab2=String(RegExp['$1']);try{_0x158d79+=eval(_0x5cfab2);}catch(_0x559f28){if($gameTemp['isPlaytest']())console[_0x270928(0x449)](_0x559f28);}}return _0x158d79;};return this[_0x412f57(0x7ea)]()['reduce'](_0x26624c,this['_paramPlus'][_0xb33ba]);},Game_BattlerBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x387)]=function(_0x33e5df){const _0x6d814f=_0x52fb7e;var _0x5ef36d=_0x6d814f(0x5a5)+(this[_0x6d814f(0x1b4)]()?_0x6d814f(0x725):_0x6d814f(0x67a))+'ParamMax'+_0x33e5df;if(this[_0x6d814f(0x308)](_0x5ef36d))return this['_cache'][_0x5ef36d];this[_0x6d814f(0x341)][_0x5ef36d]=eval(VisuMZ['CoreEngine']['Settings'][_0x6d814f(0x179)][_0x5ef36d]);const _0x3853a2=(_0x1f7624,_0xb6ee94)=>{const _0x28b295=_0x6d814f;if(!_0xb6ee94)return _0x1f7624;if(_0xb6ee94[_0x28b295(0x571)][_0x28b295(0xec)](VisuMZ[_0x28b295(0x81f)][_0x28b295(0x1ac)][_0x28b295(0x387)][_0x33e5df])){var _0x4d3515=Number(RegExp['$1']);if(_0x4d3515===0x0)_0x4d3515=Number[_0x28b295(0x126)];_0x1f7624=Math['max'](_0x1f7624,_0x4d3515);}if(_0xb6ee94['note'][_0x28b295(0xec)](VisuMZ[_0x28b295(0x81f)][_0x28b295(0x1ac)][_0x28b295(0x549)][_0x33e5df])){var _0x57e117=String(RegExp['$1']);try{_0x1f7624=Math[_0x28b295(0x53e)](_0x1f7624,Number(eval(_0x57e117)));}catch(_0x3d16c1){if($gameTemp['isPlaytest']())console[_0x28b295(0x449)](_0x3d16c1);}}return _0x1f7624;};if(this[_0x6d814f(0x341)][_0x5ef36d]===0x0)this[_0x6d814f(0x341)][_0x5ef36d]=Number['MAX_SAFE_INTEGER'];return this[_0x6d814f(0x341)][_0x5ef36d]=this[_0x6d814f(0x7ea)]()[_0x6d814f(0x7cc)](_0x3853a2,this[_0x6d814f(0x341)][_0x5ef36d]),this[_0x6d814f(0x341)][_0x5ef36d];},Game_BattlerBase['prototype'][_0x52fb7e(0x2e8)]=function(_0x2919b8){const _0x2a70dd=_0x52fb7e,_0x59748c=this[_0x2a70dd(0x73d)](Game_BattlerBase[_0x2a70dd(0x848)],_0x2919b8),_0x343c4b=(_0x218c9d,_0x2c22e8)=>{const _0x307cbd=_0x2a70dd;if(!_0x2c22e8)return _0x218c9d;if(_0x2c22e8[_0x307cbd(0x571)][_0x307cbd(0xec)](VisuMZ[_0x307cbd(0x81f)][_0x307cbd(0x1ac)][_0x307cbd(0x643)][_0x2919b8])){var _0x4ec5ff=Number(RegExp['$1'])/0x64;_0x218c9d*=_0x4ec5ff;}if(_0x2c22e8[_0x307cbd(0x571)][_0x307cbd(0xec)](VisuMZ[_0x307cbd(0x81f)][_0x307cbd(0x1ac)][_0x307cbd(0x677)][_0x2919b8])){var _0x4ec5ff=Number(RegExp['$1']);_0x218c9d*=_0x4ec5ff;}if(_0x2c22e8[_0x307cbd(0x571)][_0x307cbd(0xec)](VisuMZ[_0x307cbd(0x81f)]['RegExp']['paramRateJS'][_0x2919b8])){var _0xfc8595=String(RegExp['$1']);try{_0x218c9d*=eval(_0xfc8595);}catch(_0x48bd20){if($gameTemp[_0x307cbd(0x688)]())console[_0x307cbd(0x449)](_0x48bd20);}}return _0x218c9d;};return this[_0x2a70dd(0x7ea)]()['reduce'](_0x343c4b,_0x59748c);},Game_BattlerBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x166)]=function(_0x26b9c7){const _0x3efb8a=(_0x5b2211,_0x396259)=>{const _0x3b8d26=_0x1c32;if(!_0x396259)return _0x5b2211;if(_0x396259[_0x3b8d26(0x571)][_0x3b8d26(0xec)](VisuMZ[_0x3b8d26(0x81f)]['RegExp']['paramFlat'][_0x26b9c7])){var _0x31d0d6=Number(RegExp['$1']);_0x5b2211+=_0x31d0d6;}if(_0x396259[_0x3b8d26(0x571)]['match'](VisuMZ[_0x3b8d26(0x81f)][_0x3b8d26(0x1ac)][_0x3b8d26(0x533)][_0x26b9c7])){var _0x21cf5a=String(RegExp['$1']);try{_0x5b2211+=eval(_0x21cf5a);}catch(_0x4bcbd6){if($gameTemp['isPlaytest']())console[_0x3b8d26(0x449)](_0x4bcbd6);}}return _0x5b2211;};return this['traitObjects']()['reduce'](_0x3efb8a,0x0);},Game_BattlerBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x7a3)]=function(_0x4b4637){const _0x579793=_0x52fb7e;let _0x5c029f=_0x579793(0x7a3)+_0x4b4637+_0x579793(0x6e);if(this[_0x579793(0x308)](_0x5c029f))return this[_0x579793(0x341)][_0x5c029f];return this['_cache'][_0x5c029f]=Math[_0x579793(0x679)](VisuMZ[_0x579793(0x81f)][_0x579793(0x2d2)]['Param'][_0x579793(0x412)]['call'](this,_0x4b4637)),this[_0x579793(0x341)][_0x5c029f];},Game_BattlerBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x704)]=function(_0x1d5288){const _0x54bf1a=_0x52fb7e,_0x29b587=(_0x111e03,_0x8acc49)=>{const _0x50040d=_0x1c32;if(!_0x8acc49)return _0x111e03;if(_0x8acc49[_0x50040d(0x571)][_0x50040d(0xec)](VisuMZ['CoreEngine'][_0x50040d(0x1ac)][_0x50040d(0x491)][_0x1d5288])){var _0xd4d37c=Number(RegExp['$1'])/0x64;_0x111e03+=_0xd4d37c;}if(_0x8acc49[_0x50040d(0x571)][_0x50040d(0xec)](VisuMZ['CoreEngine'][_0x50040d(0x1ac)][_0x50040d(0x54d)][_0x1d5288])){var _0xd4d37c=Number(RegExp['$1']);_0x111e03+=_0xd4d37c;}if(_0x8acc49[_0x50040d(0x571)][_0x50040d(0xec)](VisuMZ[_0x50040d(0x81f)]['RegExp'][_0x50040d(0x230)][_0x1d5288])){var _0x53104a=String(RegExp['$1']);try{_0x111e03+=eval(_0x53104a);}catch(_0x433f2d){if($gameTemp['isPlaytest']())console[_0x50040d(0x449)](_0x433f2d);}}return _0x111e03;};return this['traitObjects']()[_0x54bf1a(0x7cc)](_0x29b587,0x0);},Game_BattlerBase['prototype'][_0x52fb7e(0x142)]=function(_0x35468d){const _0x39ed4d=_0x52fb7e,_0x414281=(_0x199f35,_0x1ebc39)=>{const _0x4130fe=_0x1c32;if(!_0x1ebc39)return _0x199f35;if(_0x1ebc39[_0x4130fe(0x571)]['match'](VisuMZ[_0x4130fe(0x81f)]['RegExp']['xparamRate1'][_0x35468d])){var _0x3d0f1a=Number(RegExp['$1'])/0x64;_0x199f35*=_0x3d0f1a;}if(_0x1ebc39[_0x4130fe(0x571)][_0x4130fe(0xec)](VisuMZ[_0x4130fe(0x81f)][_0x4130fe(0x1ac)]['xparamRate2'][_0x35468d])){var _0x3d0f1a=Number(RegExp['$1']);_0x199f35*=_0x3d0f1a;}if(_0x1ebc39[_0x4130fe(0x571)][_0x4130fe(0xec)](VisuMZ[_0x4130fe(0x81f)][_0x4130fe(0x1ac)][_0x4130fe(0x3ce)][_0x35468d])){var _0x26a3a2=String(RegExp['$1']);try{_0x199f35*=eval(_0x26a3a2);}catch(_0x2bb44a){if($gameTemp[_0x4130fe(0x688)]())console['log'](_0x2bb44a);}}return _0x199f35;};return this[_0x39ed4d(0x7ea)]()['reduce'](_0x414281,0x1);},Game_BattlerBase['prototype'][_0x52fb7e(0x312)]=function(_0x485b37){const _0x3f0202=_0x52fb7e,_0x457195=(_0x2881e3,_0x58524d)=>{const _0x3a8b77=_0x1c32;if(!_0x58524d)return _0x2881e3;if(_0x58524d[_0x3a8b77(0x571)]['match'](VisuMZ['CoreEngine'][_0x3a8b77(0x1ac)][_0x3a8b77(0x2d0)][_0x485b37])){var _0x3ef140=Number(RegExp['$1'])/0x64;_0x2881e3+=_0x3ef140;}if(_0x58524d[_0x3a8b77(0x571)][_0x3a8b77(0xec)](VisuMZ[_0x3a8b77(0x81f)][_0x3a8b77(0x1ac)][_0x3a8b77(0x6cd)][_0x485b37])){var _0x3ef140=Number(RegExp['$1']);_0x2881e3+=_0x3ef140;}if(_0x58524d[_0x3a8b77(0x571)]['match'](VisuMZ['CoreEngine']['RegExp']['xparamFlatJS'][_0x485b37])){var _0x38a03f=String(RegExp['$1']);try{_0x2881e3+=eval(_0x38a03f);}catch(_0x410f08){if($gameTemp[_0x3a8b77(0x688)]())console[_0x3a8b77(0x449)](_0x410f08);}}return _0x2881e3;};return this[_0x3f0202(0x7ea)]()[_0x3f0202(0x7cc)](_0x457195,0x0);},Game_BattlerBase['prototype']['xparam']=function(_0x19bbf7){const _0x38c3f9=_0x52fb7e;let _0x347e6b=_0x38c3f9(0x252)+_0x19bbf7+'Total';if(this[_0x38c3f9(0x308)](_0x347e6b))return this[_0x38c3f9(0x341)][_0x347e6b];return this[_0x38c3f9(0x341)][_0x347e6b]=VisuMZ['CoreEngine'][_0x38c3f9(0x2d2)][_0x38c3f9(0x179)][_0x38c3f9(0x687)][_0x38c3f9(0x809)](this,_0x19bbf7),this[_0x38c3f9(0x341)][_0x347e6b];},Game_BattlerBase[_0x52fb7e(0x7d3)]['sparamPlus']=function(_0x13ee69){const _0x2885c2=_0x52fb7e,_0x5d241a=(_0x32ed9e,_0x19f86f)=>{const _0x217171=_0x1c32;if(!_0x19f86f)return _0x32ed9e;if(_0x19f86f['note'][_0x217171(0xec)](VisuMZ[_0x217171(0x81f)]['RegExp'][_0x217171(0x4a9)][_0x13ee69])){var _0xa5bd5f=Number(RegExp['$1'])/0x64;_0x32ed9e+=_0xa5bd5f;}if(_0x19f86f[_0x217171(0x571)][_0x217171(0xec)](VisuMZ[_0x217171(0x81f)][_0x217171(0x1ac)][_0x217171(0x573)][_0x13ee69])){var _0xa5bd5f=Number(RegExp['$1']);_0x32ed9e+=_0xa5bd5f;}if(_0x19f86f[_0x217171(0x571)][_0x217171(0xec)](VisuMZ[_0x217171(0x81f)][_0x217171(0x1ac)][_0x217171(0x789)][_0x13ee69])){var _0x3da418=String(RegExp['$1']);try{_0x32ed9e+=eval(_0x3da418);}catch(_0x39ab4c){if($gameTemp[_0x217171(0x688)]())console['log'](_0x39ab4c);}}return _0x32ed9e;};return this[_0x2885c2(0x7ea)]()[_0x2885c2(0x7cc)](_0x5d241a,0x0);},Game_BattlerBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x445)]=function(_0x2db169){const _0x3f9bfb=_0x52fb7e,_0x5c8545=(_0x4a6aaa,_0x549765)=>{const _0x4d5b36=_0x1c32;if(!_0x549765)return _0x4a6aaa;if(_0x549765[_0x4d5b36(0x571)][_0x4d5b36(0xec)](VisuMZ[_0x4d5b36(0x81f)][_0x4d5b36(0x1ac)][_0x4d5b36(0x82c)][_0x2db169])){var _0x43d339=Number(RegExp['$1'])/0x64;_0x4a6aaa*=_0x43d339;}if(_0x549765['note']['match'](VisuMZ[_0x4d5b36(0x81f)][_0x4d5b36(0x1ac)][_0x4d5b36(0x238)][_0x2db169])){var _0x43d339=Number(RegExp['$1']);_0x4a6aaa*=_0x43d339;}if(_0x549765[_0x4d5b36(0x571)][_0x4d5b36(0xec)](VisuMZ[_0x4d5b36(0x81f)][_0x4d5b36(0x1ac)]['sparamRateJS'][_0x2db169])){var _0x23a721=String(RegExp['$1']);try{_0x4a6aaa*=eval(_0x23a721);}catch(_0x1dd9a2){if($gameTemp[_0x4d5b36(0x688)]())console[_0x4d5b36(0x449)](_0x1dd9a2);}}return _0x4a6aaa;};return this[_0x3f9bfb(0x7ea)]()[_0x3f9bfb(0x7cc)](_0x5c8545,0x1);},Game_BattlerBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x2bf)]=function(_0x5b147f){const _0x36b88d=_0x52fb7e,_0x10cad1=(_0x577347,_0x1d5efd)=>{const _0x536e1f=_0x1c32;if(!_0x1d5efd)return _0x577347;if(_0x1d5efd['note'][_0x536e1f(0xec)](VisuMZ['CoreEngine'][_0x536e1f(0x1ac)]['sparamFlat1'][_0x5b147f])){var _0x274203=Number(RegExp['$1'])/0x64;_0x577347+=_0x274203;}if(_0x1d5efd['note'][_0x536e1f(0xec)](VisuMZ[_0x536e1f(0x81f)][_0x536e1f(0x1ac)]['sparamFlat2'][_0x5b147f])){var _0x274203=Number(RegExp['$1']);_0x577347+=_0x274203;}if(_0x1d5efd['note'][_0x536e1f(0xec)](VisuMZ[_0x536e1f(0x81f)][_0x536e1f(0x1ac)][_0x536e1f(0x17b)][_0x5b147f])){var _0x2c2ea3=String(RegExp['$1']);try{_0x577347+=eval(_0x2c2ea3);}catch(_0x56ed62){if($gameTemp[_0x536e1f(0x688)]())console[_0x536e1f(0x449)](_0x56ed62);}}return _0x577347;};return this[_0x36b88d(0x7ea)]()[_0x36b88d(0x7cc)](_0x10cad1,0x0);},Game_BattlerBase['prototype']['sparam']=function(_0x2f2e8a){const _0x1fa0f3=_0x52fb7e;let _0x3cec9f=_0x1fa0f3(0x235)+_0x2f2e8a+_0x1fa0f3(0x6e);if(this[_0x1fa0f3(0x308)](_0x3cec9f))return this[_0x1fa0f3(0x341)][_0x3cec9f];return this[_0x1fa0f3(0x341)][_0x3cec9f]=VisuMZ['CoreEngine']['Settings'][_0x1fa0f3(0x179)][_0x1fa0f3(0x628)][_0x1fa0f3(0x809)](this,_0x2f2e8a),this['_cache'][_0x3cec9f];},Game_BattlerBase['prototype']['paramValueByName']=function(_0x38e9e0,_0x44ca16){const _0x5dad7f=_0x52fb7e;if(typeof paramId==='number')return this[_0x5dad7f(0x7a3)](_0x38e9e0);_0x38e9e0=String(_0x38e9e0||'')['toUpperCase']();if(_0x38e9e0===_0x5dad7f(0x120))return this[_0x5dad7f(0x7a3)](0x0);if(_0x38e9e0===_0x5dad7f(0x444))return this[_0x5dad7f(0x7a3)](0x1);if(_0x38e9e0===_0x5dad7f(0x746))return this[_0x5dad7f(0x7a3)](0x2);if(_0x38e9e0===_0x5dad7f(0x21a))return this[_0x5dad7f(0x7a3)](0x3);if(_0x38e9e0===_0x5dad7f(0x778))return this[_0x5dad7f(0x7a3)](0x4);if(_0x38e9e0==='MDF')return this[_0x5dad7f(0x7a3)](0x5);if(_0x38e9e0===_0x5dad7f(0x4c1))return this[_0x5dad7f(0x7a3)](0x6);if(_0x38e9e0===_0x5dad7f(0x5fd))return this[_0x5dad7f(0x7a3)](0x7);if(_0x38e9e0===_0x5dad7f(0x396))return _0x44ca16?String(Math[_0x5dad7f(0x679)](this[_0x5dad7f(0x252)](0x0)*0x64))+'%':this[_0x5dad7f(0x252)](0x0);if(_0x38e9e0==='EVA')return _0x44ca16?String(Math[_0x5dad7f(0x679)](this[_0x5dad7f(0x252)](0x1)*0x64))+'%':this['xparam'](0x1);if(_0x38e9e0===_0x5dad7f(0x5ab))return _0x44ca16?String(Math[_0x5dad7f(0x679)](this['xparam'](0x2)*0x64))+'%':this[_0x5dad7f(0x252)](0x2);if(_0x38e9e0===_0x5dad7f(0x579))return _0x44ca16?String(Math[_0x5dad7f(0x679)](this[_0x5dad7f(0x252)](0x3)*0x64))+'%':this[_0x5dad7f(0x252)](0x3);if(_0x38e9e0===_0x5dad7f(0x350))return _0x44ca16?String(Math['round'](this[_0x5dad7f(0x252)](0x4)*0x64))+'%':this[_0x5dad7f(0x252)](0x4);if(_0x38e9e0==='MRF')return _0x44ca16?String(Math[_0x5dad7f(0x679)](this['xparam'](0x5)*0x64))+'%':this['xparam'](0x5);if(_0x38e9e0===_0x5dad7f(0x2d5))return _0x44ca16?String(Math[_0x5dad7f(0x679)](this[_0x5dad7f(0x252)](0x6)*0x64))+'%':this[_0x5dad7f(0x252)](0x6);if(_0x38e9e0==='HRG')return _0x44ca16?String(Math['round'](this[_0x5dad7f(0x252)](0x7)*0x64))+'%':this[_0x5dad7f(0x252)](0x7);if(_0x38e9e0===_0x5dad7f(0x35b))return _0x44ca16?String(Math['round'](this[_0x5dad7f(0x252)](0x8)*0x64))+'%':this['xparam'](0x8);if(_0x38e9e0===_0x5dad7f(0x220))return _0x44ca16?String(Math[_0x5dad7f(0x679)](this[_0x5dad7f(0x252)](0x9)*0x64))+'%':this['xparam'](0x9);if(_0x38e9e0===_0x5dad7f(0x4f2))return _0x44ca16?String(Math[_0x5dad7f(0x679)](this[_0x5dad7f(0x235)](0x0)*0x64))+'%':this[_0x5dad7f(0x235)](0x0);if(_0x38e9e0===_0x5dad7f(0x443))return _0x44ca16?String(Math[_0x5dad7f(0x679)](this['sparam'](0x1)*0x64))+'%':this[_0x5dad7f(0x235)](0x1);if(_0x38e9e0==='REC')return _0x44ca16?String(Math[_0x5dad7f(0x679)](this['sparam'](0x2)*0x64))+'%':this['sparam'](0x2);if(_0x38e9e0===_0x5dad7f(0x71))return _0x44ca16?String(Math[_0x5dad7f(0x679)](this[_0x5dad7f(0x235)](0x3)*0x64))+'%':this[_0x5dad7f(0x235)](0x3);if(_0x38e9e0===_0x5dad7f(0x447))return _0x44ca16?String(Math[_0x5dad7f(0x679)](this['sparam'](0x4)*0x64))+'%':this[_0x5dad7f(0x235)](0x4);if(_0x38e9e0===_0x5dad7f(0x28d))return _0x44ca16?String(Math[_0x5dad7f(0x679)](this[_0x5dad7f(0x235)](0x5)*0x64))+'%':this['sparam'](0x5);if(_0x38e9e0==='PDR')return _0x44ca16?String(Math[_0x5dad7f(0x679)](this[_0x5dad7f(0x235)](0x6)*0x64))+'%':this['sparam'](0x6);if(_0x38e9e0===_0x5dad7f(0x1a6))return _0x44ca16?String(Math[_0x5dad7f(0x679)](this[_0x5dad7f(0x235)](0x7)*0x64))+'%':this[_0x5dad7f(0x235)](0x7);if(_0x38e9e0===_0x5dad7f(0x407))return _0x44ca16?String(Math['round'](this[_0x5dad7f(0x235)](0x8)*0x64))+'%':this[_0x5dad7f(0x235)](0x8);if(_0x38e9e0===_0x5dad7f(0x75b))return _0x44ca16?String(Math[_0x5dad7f(0x679)](this[_0x5dad7f(0x235)](0x9)*0x64))+'%':this[_0x5dad7f(0x235)](0x9);if(VisuMZ[_0x5dad7f(0x81f)][_0x5dad7f(0x1d5)][_0x38e9e0]){const _0x34b0d4=VisuMZ['CoreEngine']['CustomParamAbb'][_0x38e9e0],_0x4395b2=this[_0x34b0d4];return VisuMZ[_0x5dad7f(0x81f)][_0x5dad7f(0x6d2)][_0x38e9e0]===_0x5dad7f(0x475)?_0x4395b2:_0x44ca16?String(Math[_0x5dad7f(0x679)](_0x4395b2*0x64))+'%':_0x4395b2;}return'';},Game_BattlerBase[_0x52fb7e(0x7d3)]['isDying']=function(){const _0xddeb3=_0x52fb7e;return this[_0xddeb3(0x153)]()&&this[_0xddeb3(0x2cd)]<this[_0xddeb3(0x3af)]*VisuMZ[_0xddeb3(0x81f)][_0xddeb3(0x2d2)][_0xddeb3(0x179)][_0xddeb3(0x81d)];},Game_Battler[_0x52fb7e(0x7d3)][_0x52fb7e(0xa2)]=function(){const _0x46afc9=_0x52fb7e;SoundManager[_0x46afc9(0xed)](),this['requestMotion'](_0x46afc9(0x37e));},VisuMZ['CoreEngine'][_0x52fb7e(0xe5)]=Game_Actor['prototype'][_0x52fb7e(0x309)],Game_Actor[_0x52fb7e(0x7d3)][_0x52fb7e(0x309)]=function(_0x1f667a){const _0x3a72af=_0x52fb7e;if(this[_0x3a72af(0x6d)]>0x63)return this[_0x3a72af(0x205)](_0x1f667a);return VisuMZ[_0x3a72af(0x81f)][_0x3a72af(0xe5)]['call'](this,_0x1f667a);},Game_Actor['prototype'][_0x52fb7e(0x205)]=function(_0xe62b9b){const _0x2aeb5f=_0x52fb7e,_0x4987f4=this['currentClass']()[_0x2aeb5f(0x506)][_0xe62b9b][0x63],_0x1feae0=this[_0x2aeb5f(0x81b)]()['params'][_0xe62b9b][0x62];return _0x4987f4+(_0x4987f4-_0x1feae0)*(this[_0x2aeb5f(0x6d)]-0x63);},VisuMZ[_0x52fb7e(0x81f)]['Game_Actor_changeClass']=Game_Actor[_0x52fb7e(0x7d3)][_0x52fb7e(0xb2)],Game_Actor[_0x52fb7e(0x7d3)][_0x52fb7e(0xb2)]=function(_0x2878af,_0x548c89){const _0x251f10=_0x52fb7e;$gameTemp['_changingClass']=!![],VisuMZ[_0x251f10(0x81f)][_0x251f10(0x4d8)]['call'](this,_0x2878af,_0x548c89),$gameTemp['_changingClass']=undefined;},VisuMZ[_0x52fb7e(0x81f)]['Game_Actor_levelUp']=Game_Actor[_0x52fb7e(0x7d3)][_0x52fb7e(0x496)],Game_Actor[_0x52fb7e(0x7d3)]['levelUp']=function(){const _0xc13421=_0x52fb7e;VisuMZ[_0xc13421(0x81f)][_0xc13421(0x6ef)][_0xc13421(0x809)](this);if(!$gameTemp[_0xc13421(0x54f)])this[_0xc13421(0x2c9)]();},Game_Actor[_0x52fb7e(0x7d3)]['levelUpRecovery']=function(){const _0x486fda=_0x52fb7e;this[_0x486fda(0x341)]={};if(VisuMZ['CoreEngine'][_0x486fda(0x2d2)][_0x486fda(0x30e)]['LevelUpFullHp'])this[_0x486fda(0x2cd)]=this[_0x486fda(0x3af)];if(VisuMZ[_0x486fda(0x81f)][_0x486fda(0x2d2)][_0x486fda(0x30e)][_0x486fda(0x5d2)])this[_0x486fda(0x5c6)]=this[_0x486fda(0x786)];},Game_Actor[_0x52fb7e(0x7d3)][_0x52fb7e(0x562)]=function(){const _0x354645=_0x52fb7e;if(this[_0x354645(0x547)]())return 0x1;const _0x457e49=this[_0x354645(0x3b6)]()-this[_0x354645(0x2fa)](),_0x2e38e7=this[_0x354645(0x415)]()-this[_0x354645(0x2fa)]();return(_0x2e38e7/_0x457e49)[_0x354645(0x7e4)](0x0,0x1);},Game_Actor['prototype']['traitObjects']=function(){const _0x5def6f=_0x52fb7e,_0x1d7fe3=Game_Battler[_0x5def6f(0x7d3)]['traitObjects'][_0x5def6f(0x809)](this);for(const _0x4bfc32 of this['equips']()){_0x4bfc32&&_0x1d7fe3[_0x5def6f(0x52a)](_0x4bfc32);}return _0x1d7fe3[_0x5def6f(0x52a)](this[_0x5def6f(0x81b)](),this['actor']()),_0x1d7fe3;},Object[_0x52fb7e(0x494)](Game_Enemy['prototype'],_0x52fb7e(0x6d),{'get':function(){const _0x160a3d=_0x52fb7e;return this[_0x160a3d(0x806)]();},'configurable':!![]}),Game_Enemy[_0x52fb7e(0x7d3)][_0x52fb7e(0x806)]=function(){const _0x5cadff=_0x52fb7e;return this['enemy']()[_0x5cadff(0x6d)];},Game_Enemy['prototype'][_0x52fb7e(0x37b)]=function(){const _0x14a151=_0x52fb7e;!this[_0x14a151(0x7f6)]&&(this[_0x14a151(0x7cd)]+=Math['round']((Graphics[_0x14a151(0x480)]-0x270)/0x2),this[_0x14a151(0x7cd)]-=Math[_0x14a151(0x29a)]((Graphics[_0x14a151(0x480)]-Graphics[_0x14a151(0x25a)])/0x2),$gameSystem[_0x14a151(0x39c)]()?this[_0x14a151(0x604)]-=Math[_0x14a151(0x29a)]((Graphics[_0x14a151(0x48a)]-Graphics['boxWidth'])/0x2):this[_0x14a151(0x604)]+=Math[_0x14a151(0x679)]((Graphics[_0x14a151(0x1ed)]-0x330)/0x2)),this['_repositioned']=!![];},Game_Party['prototype']['maxGold']=function(){const _0x584471=_0x52fb7e;return VisuMZ[_0x584471(0x81f)][_0x584471(0x2d2)]['Gold']['GoldMax'];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x68f)]=Game_Party['prototype'][_0x52fb7e(0x62c)],Game_Party[_0x52fb7e(0x7d3)][_0x52fb7e(0x62c)]=function(_0x533e73){const _0x998fae=_0x52fb7e;if(VisuMZ[_0x998fae(0x81f)][_0x998fae(0x2d2)]['QoL'][_0x998fae(0x538)]&&DataManager[_0x998fae(0x30a)](_0x533e73))return;VisuMZ[_0x998fae(0x81f)][_0x998fae(0x68f)][_0x998fae(0x809)](this,_0x533e73);},Game_Party[_0x52fb7e(0x7d3)][_0x52fb7e(0x6bb)]=function(){const _0x4d9fdc=_0x52fb7e,_0x5eb3a4=VisuMZ['CoreEngine']['Settings'][_0x4d9fdc(0x30e)],_0x5816be=_0x5eb3a4[_0x4d9fdc(0x6b9)]??0x63;let _0x1a188e=[];(_0x5eb3a4[_0x4d9fdc(0x7ee)]??!![])&&(_0x1a188e=_0x1a188e['concat']($dataItems));(_0x5eb3a4['BTestWeapons']??!![])&&(_0x1a188e=_0x1a188e['concat']($dataWeapons));(_0x5eb3a4[_0x4d9fdc(0x44c)]??!![])&&(_0x1a188e=_0x1a188e['concat']($dataArmors));for(const _0x458c08 of _0x1a188e){if(!_0x458c08)continue;if(_0x458c08[_0x4d9fdc(0x4e3)][_0x4d9fdc(0x711)]()<=0x0)continue;if(_0x458c08[_0x4d9fdc(0x4e3)][_0x4d9fdc(0xec)](/-----/i))continue;this['gainItem'](_0x458c08,_0x5816be);}},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x4a5)]=Game_Troop['prototype'][_0x52fb7e(0x3d0)],Game_Troop['prototype'][_0x52fb7e(0x3d0)]=function(_0x3a9d9a){const _0x56db80=_0x52fb7e;$gameTemp[_0x56db80(0x28a)](),$gameTemp[_0x56db80(0x78d)](_0x3a9d9a),VisuMZ[_0x56db80(0x81f)][_0x56db80(0x4a5)][_0x56db80(0x809)](this,_0x3a9d9a);},VisuMZ['CoreEngine'][_0x52fb7e(0x545)]=Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x3d0)],Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x3d0)]=function(_0x3fcaf3){const _0x30ba6c=_0x52fb7e;VisuMZ[_0x30ba6c(0x81f)][_0x30ba6c(0x545)][_0x30ba6c(0x809)](this,_0x3fcaf3),this[_0x30ba6c(0x752)](),this['setupCoreEngine'](_0x3fcaf3),this['setupTileExtendTerrainTags']();},Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x436)]=function(){const _0x2f7996=_0x52fb7e;this[_0x2f7996(0x4ab)]=VisuMZ['CoreEngine'][_0x2f7996(0x2d2)][_0x2f7996(0x30e)][_0x2f7996(0x6ba)]||![];const _0xdebbf6=VisuMZ[_0x2f7996(0x81f)][_0x2f7996(0x2d2)]['ScreenResolution'],_0x32b386=$dataMap?$dataMap[_0x2f7996(0x571)]||'':'';if(_0x32b386[_0x2f7996(0xec)](/<SHOW TILE SHADOWS>/i))this[_0x2f7996(0x4ab)]=![];else _0x32b386[_0x2f7996(0xec)](/<HIDE TILE SHADOWS>/i)&&(this[_0x2f7996(0x4ab)]=!![]);if(_0x32b386[_0x2f7996(0xec)](/<SCROLL LOCK X>/i))this['centerCameraCheckData']()[_0x2f7996(0x2a5)]=!![],this[_0x2f7996(0x231)]()['displayX']=_0xdebbf6['DisplayLockX'];else _0x32b386[_0x2f7996(0xec)](/<SCROLL LOCK X: (.*?)>/i)&&(this[_0x2f7996(0x231)]()[_0x2f7996(0x2a5)]=!![],this[_0x2f7996(0x231)]()[_0x2f7996(0x4bc)]=Number(RegExp['$1']));if(_0x32b386[_0x2f7996(0xec)](/<SCROLL LOCK Y>/i))this[_0x2f7996(0x231)]()[_0x2f7996(0x277)]=!![],this['centerCameraCheckData']()['displayY']=_0xdebbf6[_0x2f7996(0x134)];else _0x32b386[_0x2f7996(0xec)](/<SCROLL LOCK Y: (.*?)>/i)&&(this[_0x2f7996(0x231)]()[_0x2f7996(0x277)]=!![],this[_0x2f7996(0x231)]()['displayY']=Number(RegExp['$1']));},Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x245)]=function(){const _0x193e30=_0x52fb7e;if(this[_0x193e30(0x4ab)]===undefined)this[_0x193e30(0x436)]();return this[_0x193e30(0x4ab)];},Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x752)]=function(){const _0x2843ad=_0x52fb7e,_0x8626fe=VisuMZ[_0x2843ad(0x81f)][_0x2843ad(0x2d2)][_0x2843ad(0x4bb)];this[_0x2843ad(0x253)]={'centerX':![],'centerY':![],'displayX':0x0,'displayY':0x0};if(_0x8626fe['AutoScrollLockX']){const _0x448d7b=Graphics[_0x2843ad(0x48a)]/this[_0x2843ad(0xd6)]();_0x448d7b%0x1!==0x0&&Math[_0x2843ad(0x1ec)](_0x448d7b)===this[_0x2843ad(0x48a)]()&&!this[_0x2843ad(0x80b)]()&&(this[_0x2843ad(0x253)][_0x2843ad(0x2a5)]=!![],this['_centerCameraCheck'][_0x2843ad(0x4bc)]=_0x8626fe[_0x2843ad(0x39a)]||0x0);}if(_0x8626fe['AutoScrollLockY']){const _0x45ef1f=Graphics['height']/this[_0x2843ad(0x7fc)]();_0x45ef1f%0x1!==0x0&&Math[_0x2843ad(0x1ec)](_0x45ef1f)===this[_0x2843ad(0x480)]()&&!this[_0x2843ad(0x7d2)]()&&(this[_0x2843ad(0x253)][_0x2843ad(0x277)]=!![],this[_0x2843ad(0x253)][_0x2843ad(0x567)]=_0x8626fe[_0x2843ad(0x134)]||0x0);}$gameScreen[_0x2843ad(0x6b7)]()===0x1&&(this['centerCameraCheckData']()['centerX']&&(this[_0x2843ad(0x3e8)]=this['centerCameraCheckData']()['displayX']),this[_0x2843ad(0x231)]()[_0x2843ad(0x277)]&&(this[_0x2843ad(0x675)]=this[_0x2843ad(0x231)]()[_0x2843ad(0x567)]));},VisuMZ[_0x52fb7e(0x81f)]['Game_Map_setDisplayPos']=Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x22b)],Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x22b)]=function(_0x5641a5,_0x493450){const _0x2cf559=_0x52fb7e;VisuMZ[_0x2cf559(0x81f)][_0x2cf559(0x524)][_0x2cf559(0x809)](this,_0x5641a5,_0x493450),$gameScreen[_0x2cf559(0x6b7)]()===0x1&&(!this[_0x2cf559(0x80b)]()&&this[_0x2cf559(0x231)]()['centerX']&&(this[_0x2cf559(0x3e8)]=this[_0x2cf559(0x231)]()['displayX']),!this[_0x2cf559(0x7d2)]()&&this[_0x2cf559(0x231)]()['centerY']&&(this[_0x2cf559(0x675)]=this['centerCameraCheckData']()[_0x2cf559(0x567)]));},Game_Map['prototype'][_0x52fb7e(0x231)]=function(){const _0x5902fe=_0x52fb7e;if(this['_centerCameraCheck']===undefined)this[_0x5902fe(0x752)]();return this[_0x5902fe(0x253)];},VisuMZ[_0x52fb7e(0x81f)]['Game_Map_scrollDown']=Game_Map['prototype']['scrollDown'],Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x187)]=function(_0x5ed6e9){const _0x3f008a=_0x52fb7e;if(this[_0x3f008a(0x231)]()[_0x3f008a(0x277)]&&$gameScreen['zoomScale']()===0x1){this[_0x3f008a(0x675)]=this['centerCameraCheckData']()[_0x3f008a(0x567)];return;}VisuMZ[_0x3f008a(0x81f)]['Game_Map_scrollDown'][_0x3f008a(0x809)](this,_0x5ed6e9);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x43c)]=Game_Map['prototype'][_0x52fb7e(0xb5)],Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0xb5)]=function(_0x59ed5f){const _0x4aa0c5=_0x52fb7e;if(this['centerCameraCheckData']()['centerX']&&$gameScreen[_0x4aa0c5(0x6b7)]()===0x1){this['_displayX']=this['centerCameraCheckData']()[_0x4aa0c5(0x4bc)];return;}VisuMZ[_0x4aa0c5(0x81f)][_0x4aa0c5(0x43c)][_0x4aa0c5(0x809)](this,_0x59ed5f);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x5d7)]=Game_Map['prototype'][_0x52fb7e(0x90)],Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x90)]=function(_0x5ba3dc){const _0x54ae51=_0x52fb7e;if(this[_0x54ae51(0x231)]()[_0x54ae51(0x2a5)]&&$gameScreen['zoomScale']()===0x1){this[_0x54ae51(0x3e8)]=this[_0x54ae51(0x231)]()['displayX'];return;}VisuMZ['CoreEngine']['Game_Map_scrollRight'][_0x54ae51(0x809)](this,_0x5ba3dc);},VisuMZ['CoreEngine'][_0x52fb7e(0x129)]=Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x715)],Game_Map['prototype'][_0x52fb7e(0x715)]=function(_0x31ef43){const _0x187ca8=_0x52fb7e;if(this['centerCameraCheckData']()[_0x187ca8(0x277)]&&$gameScreen[_0x187ca8(0x6b7)]()===0x1){this[_0x187ca8(0x675)]=this[_0x187ca8(0x231)]()[_0x187ca8(0x567)];return;}VisuMZ[_0x187ca8(0x81f)]['Game_Map_scrollUp'][_0x187ca8(0x809)](this,_0x31ef43);},Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x413)]=function(){const _0x175b35=_0x52fb7e;this[_0x175b35(0x513)]={};const _0xdd4106=this[_0x175b35(0x6a8)]();if(!_0xdd4106)return{};const _0x12a1ae=_0xdd4106[_0x175b35(0x571)]||'',_0x1cc119=/<(?:TALLER|EXT|EXTEND|RAISE)[ ]BY[ ](\d+):[ ](.*)>/gi;let _0x1be181={};const _0x4c38d7=_0x12a1ae[_0x175b35(0xec)](_0x1cc119);if(_0x4c38d7)for(const _0x2398e1 of _0x4c38d7){_0x2398e1[_0x175b35(0xec)](_0x1cc119);const _0x20d1a5=Number(RegExp['$1'])['clamp'](0x1,0x10),_0x9b0f0a=String(RegExp['$2'])[_0x175b35(0x775)](',')[_0x175b35(0x1e6)](_0x490a4c=>Number(_0x490a4c)[_0x175b35(0x7e4)](0x1,0x7));for(const _0x182761 of _0x9b0f0a){_0x1be181[_0x182761]=_0x20d1a5;}}this[_0x175b35(0x513)]=_0x1be181;},Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x53c)]=function(){const _0x1fd8a1=_0x52fb7e;if(this[_0x1fd8a1(0x513)]===undefined)this[_0x1fd8a1(0x413)]();return this[_0x1fd8a1(0x513)];},Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x3ab)]=function(_0x46d1fc){const _0x1e7c85=_0x52fb7e;if(_0x46d1fc>=0x400)return![];const _0x385bca=$gameMap[_0x1e7c85(0x53c)]();if(Object[_0x1e7c85(0x70d)](_0x385bca)['length']<=0x0)return![];const _0x161997=this[_0x1e7c85(0x7e6)](),_0x16aaf5=_0x161997[_0x46d1fc]>>0xc,_0x22d72a=_0x385bca[_0x16aaf5]||0x0;return _0x22d72a>0x0;},Game_Map['prototype'][_0x52fb7e(0xb4)]=function(){const _0xe0589a=_0x52fb7e,_0x54d6ef=this[_0xe0589a(0x53c)]();if(Object[_0xe0589a(0x70d)](_0x54d6ef)[_0xe0589a(0x7e7)]<=0x0)return;$spriteset&&($spriteset[_0xe0589a(0x2bd)]&&$spriteset['removeTileExtendSprites'](),$spriteset['createTileExtendSprites']&&$spriteset[_0xe0589a(0x379)]());},VisuMZ[_0x52fb7e(0x81f)]['Game_Character_processMoveCommand']=Game_Character[_0x52fb7e(0x7d3)][_0x52fb7e(0x58a)],Game_Character[_0x52fb7e(0x7d3)][_0x52fb7e(0x58a)]=function(_0x14daf6){const _0x57d697=_0x52fb7e;try{VisuMZ[_0x57d697(0x81f)][_0x57d697(0x541)][_0x57d697(0x809)](this,_0x14daf6);}catch(_0xd690a7){if($gameTemp['isPlaytest']())console[_0x57d697(0x449)](_0xd690a7);}},Game_Player[_0x52fb7e(0x7d3)][_0x52fb7e(0x7e9)]=function(){const _0x350977=_0x52fb7e,_0x557739=$gameMap['encounterStep']();this['_encounterCount']=Math[_0x350977(0x738)](_0x557739)+Math['randomInt'](_0x557739)+this[_0x350977(0x3e6)]();},Game_Player[_0x52fb7e(0x7d3)][_0x52fb7e(0x3e6)]=function(){const _0x324762=_0x52fb7e;return $dataMap&&$dataMap['note']&&$dataMap['note']['match'](/<MINIMUM ENCOUNTER STEPS:[ ](\d+)>/i)?Number(RegExp['$1']):VisuMZ['CoreEngine'][_0x324762(0x2d2)][_0x324762(0x30e)][_0x324762(0x28f)];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x265)]=Game_Event['prototype'][_0x52fb7e(0x7c6)],Game_Event[_0x52fb7e(0x7d3)][_0x52fb7e(0x7c6)]=function(_0x2a3bbc,_0x31183d){const _0x245ce9=_0x52fb7e;return this[_0x245ce9(0x720)]()?this['checkSmartEventCollision'](_0x2a3bbc,_0x31183d):VisuMZ[_0x245ce9(0x81f)][_0x245ce9(0x265)][_0x245ce9(0x809)](this,_0x2a3bbc,_0x31183d);},Game_Event['prototype'][_0x52fb7e(0x720)]=function(){const _0x110469=_0x52fb7e;return VisuMZ[_0x110469(0x81f)][_0x110469(0x2d2)][_0x110469(0x30e)][_0x110469(0x7b4)];},Game_Event['prototype']['checkSmartEventCollision']=function(_0x3a8db0,_0x4bfc3e){const _0x4b45a3=_0x52fb7e;if(!this[_0x4b45a3(0x4cc)]())return![];else{const _0x172f15=$gameMap[_0x4b45a3(0x634)](_0x3a8db0,_0x4bfc3e)['filter'](_0x18233f=>_0x18233f[_0x4b45a3(0x4cc)]());return _0x172f15['length']>0x0;}},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x296)]=Game_Interpreter['prototype'][_0x52fb7e(0x5d3)],Game_Interpreter[_0x52fb7e(0x7d3)][_0x52fb7e(0x5d3)]=function(_0x9d104d){const _0x3bb4c0=_0x52fb7e,_0xbd1dc8=this[_0x3bb4c0(0x2b1)]();return _0xbd1dc8[_0x3bb4c0(0xec)](/\/\/[ ]SCRIPT[ ]CALL/i)?this['runCombinedScrollingTextAsCode'](_0xbd1dc8):VisuMZ[_0x3bb4c0(0x81f)]['Game_Interpreter_command105'][_0x3bb4c0(0x809)](this,_0x9d104d);},Game_Interpreter[_0x52fb7e(0x7d3)][_0x52fb7e(0x2b1)]=function(){const _0x1ced52=_0x52fb7e;let _0x902bd0='',_0x56e50f=this[_0x1ced52(0x7c8)]+0x1;while(this[_0x1ced52(0x3b8)][_0x56e50f]&&this[_0x1ced52(0x3b8)][_0x56e50f][_0x1ced52(0x7a4)]===0x195){_0x902bd0+=this[_0x1ced52(0x3b8)][_0x56e50f][_0x1ced52(0x5b0)][0x0]+'\x0a',_0x56e50f++;}return _0x902bd0;},Game_Interpreter[_0x52fb7e(0x7d3)][_0x52fb7e(0x79c)]=function(_0xc92e68){const _0x44c943=_0x52fb7e;try{eval(_0xc92e68);}catch(_0x7ef95d){$gameTemp[_0x44c943(0x688)]()&&(console['log']('Show\x20Scrolling\x20Text\x20Script\x20Error'),console[_0x44c943(0x449)](_0x7ef95d));}return!![];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x7e)]=Game_Interpreter[_0x52fb7e(0x7d3)][_0x52fb7e(0x1ff)],Game_Interpreter[_0x52fb7e(0x7d3)][_0x52fb7e(0x1ff)]=function(_0x43abd3){const _0x37e4e7=_0x52fb7e;try{VisuMZ[_0x37e4e7(0x81f)][_0x37e4e7(0x7e)][_0x37e4e7(0x809)](this,_0x43abd3);}catch(_0xf3701c){$gameTemp[_0x37e4e7(0x688)]()&&(console[_0x37e4e7(0x449)](_0x37e4e7(0x41d)),console[_0x37e4e7(0x449)](_0xf3701c)),this[_0x37e4e7(0xff)]();}return!![];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x361)]=Game_Interpreter[_0x52fb7e(0x7d3)][_0x52fb7e(0x20d)],Game_Interpreter[_0x52fb7e(0x7d3)]['command122']=function(_0x3dcaa0){const _0x3843f7=_0x52fb7e;try{VisuMZ[_0x3843f7(0x81f)][_0x3843f7(0x361)][_0x3843f7(0x809)](this,_0x3dcaa0);}catch(_0x3bf186){$gameTemp[_0x3843f7(0x688)]()&&(console['log'](_0x3843f7(0x6b6)),console['log'](_0x3bf186));}return!![];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x22f)]=Game_Interpreter[_0x52fb7e(0x7d3)]['command355'],Game_Interpreter['prototype'][_0x52fb7e(0x1fc)]=function(){const _0x5b80a7=_0x52fb7e;try{VisuMZ['CoreEngine'][_0x5b80a7(0x22f)]['call'](this);}catch(_0x5430c9){$gameTemp['isPlaytest']()&&(console[_0x5b80a7(0x449)](_0x5b80a7(0x4f7)),console['log'](_0x5430c9));}return!![];},VisuMZ['CoreEngine']['Game_Interpreter_PluginCommand']=Game_Interpreter[_0x52fb7e(0x7d3)]['command357'],Game_Interpreter[_0x52fb7e(0x7d3)][_0x52fb7e(0x672)]=function(_0x3c354e){const _0x4b3d43=_0x52fb7e;return $gameTemp[_0x4b3d43(0x5ec)](this),VisuMZ['CoreEngine'][_0x4b3d43(0x3ff)][_0x4b3d43(0x809)](this,_0x3c354e);},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0xc5)]=function(){const _0x49a83e=_0x52fb7e;return VisuMZ[_0x49a83e(0x81f)][_0x49a83e(0x2d2)]['UI'][_0x49a83e(0x283)];},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x143)]=function(){const _0x300739=_0x52fb7e;return VisuMZ['CoreEngine'][_0x300739(0x2d2)]['UI'][_0x300739(0x791)];},Scene_Base[_0x52fb7e(0x7d3)]['isBottomButtonMode']=function(){const _0x422478=_0x52fb7e;return VisuMZ[_0x422478(0x81f)]['Settings']['UI'][_0x422478(0x329)];},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x281)]=function(){const _0x1ee410=_0x52fb7e;return VisuMZ[_0x1ee410(0x81f)][_0x1ee410(0x2d2)]['UI']['RightMenus'];},Scene_Base[_0x52fb7e(0x7d3)]['mainCommandWidth']=function(){return VisuMZ['CoreEngine']['Settings']['UI']['CommandWidth'];},Scene_Base['prototype'][_0x52fb7e(0x133)]=function(){const _0x4eb4bf=_0x52fb7e;return VisuMZ[_0x4eb4bf(0x81f)][_0x4eb4bf(0x2d2)]['UI'][_0x4eb4bf(0x4c4)];},Scene_Base['prototype'][_0x52fb7e(0x91)]=function(){const _0x23d5d9=_0x52fb7e;return VisuMZ['CoreEngine']['Settings']['Window'][_0x23d5d9(0x7bd)];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x840)]=Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x44d)],Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x44d)]=function(){const _0x4900b1=_0x52fb7e;VisuMZ[_0x4900b1(0x81f)]['Scene_Base_createWindowLayer'][_0x4900b1(0x809)](this),this['createButtonAssistWindow'](),this[_0x4900b1(0x671)](),this[_0x4900b1(0x49b)]['x']=Math[_0x4900b1(0x679)](this[_0x4900b1(0x49b)]['x']),this['_windowLayer']['y']=Math['round'](this[_0x4900b1(0x49b)]['y']);},Scene_Base['prototype']['createButtonAssistWindow']=function(){},Scene_Base[_0x52fb7e(0x7d3)]['createTextPopupWindow']=function(){const _0x196243=_0x52fb7e;this[_0x196243(0x442)]=new Window_TextPopup(),this[_0x196243(0x70e)](this['_textPopupWindow']);},$textPopup=function(_0x20b710){const _0x3780c3=_0x52fb7e,_0x31ea33=SceneManager['_scene'][_0x3780c3(0x442)];_0x31ea33&&_0x31ea33[_0x3780c3(0x47d)](_0x20b710);},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x417)]=function(){const _0x2ae995=_0x52fb7e;return TextManager[_0x2ae995(0x3b5)]('pageup',_0x2ae995(0x51a));},Scene_Base['prototype'][_0x52fb7e(0x55a)]=function(){const _0xd86206=_0x52fb7e;return TextManager['getInputButtonString'](_0xd86206(0x658));},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x47b)]=function(){const _0xa0baae=_0x52fb7e;return TextManager[_0xa0baae(0x198)](_0xa0baae(0x531));},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x7cb)]=function(){const _0x3e643d=_0x52fb7e;return TextManager[_0x3e643d(0x198)]('ok');},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x84a)]=function(){const _0x3119ed=_0x52fb7e;return TextManager[_0x3119ed(0x198)]('cancel');},Scene_Base['prototype'][_0x52fb7e(0x591)]=function(){const _0x34f3b0=_0x52fb7e;return this[_0x34f3b0(0x787)]&&this['_pageupButton'][_0x34f3b0(0x599)]?TextManager[_0x34f3b0(0x44f)]:'';},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x4ba)]=function(){return'';},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x5aa)]=function(){return'';},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x355)]=function(){const _0x2273a6=_0x52fb7e;return TextManager[_0x2273a6(0x3b4)];},Scene_Base['prototype'][_0x52fb7e(0x34e)]=function(){const _0x2e1194=_0x52fb7e;return TextManager[_0x2e1194(0x592)];},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x1c8)]=function(){return 0x0;},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x3ae)]=function(){return 0x0;},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x4e5)]=function(){return 0x0;},Scene_Base['prototype'][_0x52fb7e(0x4ec)]=function(){return 0x0;},Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x1be)]=function(){return 0x0;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x5d5)]=Scene_Boot['prototype'][_0x52fb7e(0x1b8)],Scene_Boot[_0x52fb7e(0x7d3)][_0x52fb7e(0x1b8)]=function(){const _0x242147=_0x52fb7e;VisuMZ[_0x242147(0x81f)][_0x242147(0x5d5)][_0x242147(0x809)](this),this[_0x242147(0x1d7)]();},Scene_Boot[_0x52fb7e(0x7d3)][_0x52fb7e(0x1d7)]=function(){const _0x43ae86=_0x52fb7e,_0x3558e5=[_0x43ae86(0x127),'battlebacks1',_0x43ae86(0x650),_0x43ae86(0x3fa),_0x43ae86(0x12b),'faces',_0x43ae86(0x1fd),_0x43ae86(0x241),_0x43ae86(0x5bc),_0x43ae86(0x2f9),'system','tilesets',_0x43ae86(0x66e),_0x43ae86(0x4fd)];for(const _0x3a72f8 of _0x3558e5){const _0x574bd5=VisuMZ[_0x43ae86(0x81f)][_0x43ae86(0x2d2)][_0x43ae86(0x6eb)][_0x3a72f8],_0x3a6db8=_0x43ae86(0x2ea)[_0x43ae86(0x726)](_0x3a72f8);for(const _0xe69a92 of _0x574bd5){ImageManager[_0x43ae86(0x325)](_0x3a6db8,_0xe69a92);}}},VisuMZ['CoreEngine']['Scene_Boot_startNormalGame']=Scene_Boot[_0x52fb7e(0x7d3)][_0x52fb7e(0x214)],Scene_Boot[_0x52fb7e(0x7d3)]['startNormalGame']=function(){const _0x282583=_0x52fb7e;Utils[_0x282583(0x1eb)](_0x282583(0xbb))&&VisuMZ[_0x282583(0x81f)][_0x282583(0x2d2)][_0x282583(0x30e)]['NewGameBoot']?this[_0x282583(0xf0)]():VisuMZ[_0x282583(0x81f)][_0x282583(0x569)]['call'](this);},Scene_Boot[_0x52fb7e(0x7d3)][_0x52fb7e(0xf0)]=function(){const _0x470428=_0x52fb7e;this[_0x470428(0x1d1)](),DataManager[_0x470428(0x4fb)](),SceneManager[_0x470428(0x2fc)](Scene_Map);},Scene_Boot[_0x52fb7e(0x7d3)][_0x52fb7e(0x6f0)]=function(){const _0x1cbbb2=_0x52fb7e,_0xac0a3c=$dataSystem['advanced'][_0x1cbbb2(0x45a)],_0x4964dc=$dataSystem['advanced'][_0x1cbbb2(0x3c0)],_0x1ed994=VisuMZ[_0x1cbbb2(0x81f)]['Settings']['UI'][_0x1cbbb2(0x5fa)];Graphics[_0x1cbbb2(0x1ed)]=_0xac0a3c-_0x1ed994*0x2,Graphics['boxHeight']=_0x4964dc-_0x1ed994*0x2,this[_0x1cbbb2(0x60a)]();},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x62e)]=Scene_Boot['prototype'][_0x52fb7e(0xba)],Scene_Boot['prototype'][_0x52fb7e(0xba)]=function(){const _0x1df3f1=_0x52fb7e;this[_0x1df3f1(0x6c5)]()?this['makeDocumentTitle']():VisuMZ[_0x1df3f1(0x81f)][_0x1df3f1(0x62e)]['call'](this);},Scene_Boot['prototype']['isFullDocumentTitle']=function(){const _0x2d54d1=_0x52fb7e;if(Scene_Title[_0x2d54d1(0x244)]==='')return![];if(Scene_Title[_0x2d54d1(0x244)]===_0x2d54d1(0x565))return![];if(Scene_Title[_0x2d54d1(0x5a0)]==='')return![];if(Scene_Title[_0x2d54d1(0x5a0)]==='0.00')return![];return!![];},Scene_Boot[_0x52fb7e(0x7d3)]['makeDocumentTitle']=function(){const _0x3553d9=_0x52fb7e,_0x37b642=$dataSystem[_0x3553d9(0x6e6)],_0x19378e=Scene_Title[_0x3553d9(0x244)]||'',_0x492bfc=Scene_Title[_0x3553d9(0x5a0)]||'',_0x19487d=VisuMZ['CoreEngine']['Settings']['MenuLayout'][_0x3553d9(0x792)][_0x3553d9(0x208)],_0x1d97c9=_0x19487d['format'](_0x37b642,_0x19378e,_0x492bfc);document[_0x3553d9(0x411)]=_0x1d97c9;},Scene_Boot[_0x52fb7e(0x7d3)][_0x52fb7e(0x60a)]=function(){const _0x436f5d=_0x52fb7e;if(VisuMZ['CoreEngine'][_0x436f5d(0x2d2)]['UI'][_0x436f5d(0x67c)]){const _0x1dbd59=Graphics[_0x436f5d(0x48a)]-Graphics[_0x436f5d(0x1ed)]-VisuMZ['CoreEngine'][_0x436f5d(0x2d2)]['UI'][_0x436f5d(0x5fa)]*0x2,_0xd65202=Sprite_Button[_0x436f5d(0x7d3)][_0x436f5d(0x441)][_0x436f5d(0x809)](this)*0x4;if(_0x1dbd59>=_0xd65202)SceneManager[_0x436f5d(0xb7)](!![]);}},Scene_Title['subtitle']=VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)][_0x52fb7e(0x119)]['Title'][_0x52fb7e(0x565)],Scene_Title[_0x52fb7e(0x5a0)]=VisuMZ[_0x52fb7e(0x81f)]['Settings'][_0x52fb7e(0x119)][_0x52fb7e(0x792)][_0x52fb7e(0x4e2)],Scene_Title['pictureButtons']=VisuMZ[_0x52fb7e(0x81f)]['Settings']['TitlePicButtons'],VisuMZ['CoreEngine'][_0x52fb7e(0x8e)]=Scene_Title['prototype'][_0x52fb7e(0x3dd)],Scene_Title[_0x52fb7e(0x7d3)][_0x52fb7e(0x3dd)]=function(){const _0x178d30=_0x52fb7e;VisuMZ['CoreEngine'][_0x178d30(0x2d2)][_0x178d30(0x119)]['Title']['drawGameTitle'][_0x178d30(0x809)](this);if(Scene_Title['subtitle']!==''&&Scene_Title['subtitle']!==_0x178d30(0x565))this[_0x178d30(0x184)]();if(Scene_Title[_0x178d30(0x5a0)]!==''&&Scene_Title[_0x178d30(0x5a0)]!==_0x178d30(0x732))this[_0x178d30(0x799)]();},Scene_Title[_0x52fb7e(0x7d3)]['drawGameSubtitle']=function(){const _0x2952e4=_0x52fb7e;VisuMZ[_0x2952e4(0x81f)][_0x2952e4(0x2d2)]['MenuLayout'][_0x2952e4(0x792)][_0x2952e4(0x184)][_0x2952e4(0x809)](this);},Scene_Title[_0x52fb7e(0x7d3)][_0x52fb7e(0x799)]=function(){const _0x5b8375=_0x52fb7e;VisuMZ['CoreEngine']['Settings'][_0x5b8375(0x119)][_0x5b8375(0x792)][_0x5b8375(0x799)]['call'](this);},Scene_Title[_0x52fb7e(0x7d3)][_0x52fb7e(0x429)]=function(){const _0x5ae3f2=_0x52fb7e;this[_0x5ae3f2(0x181)]();const _0x1d2f86=$dataSystem[_0x5ae3f2(0x36d)][_0x5ae3f2(0x2f8)],_0x107d69=this['commandWindowRect']();this[_0x5ae3f2(0x392)]=new Window_TitleCommand(_0x107d69),this[_0x5ae3f2(0x392)][_0x5ae3f2(0x669)](_0x1d2f86);const _0x5901ae=this['commandWindowRect']();this['_commandWindow']['move'](_0x5901ae['x'],_0x5901ae['y'],_0x5901ae[_0x5ae3f2(0x48a)],_0x5901ae[_0x5ae3f2(0x480)]),this[_0x5ae3f2(0x392)][_0x5ae3f2(0x297)](),this[_0x5ae3f2(0x392)]['refresh'](),this[_0x5ae3f2(0x392)][_0x5ae3f2(0x602)](),this[_0x5ae3f2(0x1df)](this[_0x5ae3f2(0x392)]);},Scene_Title[_0x52fb7e(0x7d3)][_0x52fb7e(0x4ca)]=function(){const _0x55c461=_0x52fb7e;return this[_0x55c461(0x392)]?this['_commandWindow'][_0x55c461(0xcf)]():VisuMZ[_0x55c461(0x81f)]['Settings']['TitleCommandList'][_0x55c461(0x7e7)];},Scene_Title[_0x52fb7e(0x7d3)][_0x52fb7e(0x434)]=function(){const _0x58be1c=_0x52fb7e;return VisuMZ['CoreEngine']['Settings'][_0x58be1c(0x119)]['Title'][_0x58be1c(0x136)][_0x58be1c(0x809)](this);},Scene_Title[_0x52fb7e(0x7d3)]['createTitleButtons']=function(){for(const _0xd1b321 of Scene_Title['pictureButtons']){const _0x59fed1=new Sprite_TitlePictureButton(_0xd1b321);this['addChild'](_0x59fed1);}},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x753)]=Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)],Scene_Map['prototype']['initialize']=function(){const _0x133d0a=_0x52fb7e;VisuMZ[_0x133d0a(0x81f)]['Scene_Map_initialize'][_0x133d0a(0x809)](this),$gameTemp[_0x133d0a(0x28a)](),this['clearOnceParallelInterpreters']();},VisuMZ[_0x52fb7e(0x81f)]['Scene_Map_updateMainMultiply']=Scene_Map[_0x52fb7e(0x7d3)]['updateMainMultiply'],Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x631)]=function(){const _0x48675f=_0x52fb7e;VisuMZ[_0x48675f(0x81f)][_0x48675f(0x4da)][_0x48675f(0x809)](this),$gameTemp[_0x48675f(0x76f)]&&!$gameMessage[_0x48675f(0x414)]()&&(this[_0x48675f(0x161)](),SceneManager[_0x48675f(0x46b)]());},Scene_Map['prototype'][_0x52fb7e(0x82d)]=function(){const _0x48681a=_0x52fb7e;Scene_Message[_0x48681a(0x7d3)][_0x48681a(0x82d)][_0x48681a(0x809)](this),!SceneManager[_0x48681a(0x7bf)](Scene_Battle)&&(this[_0x48681a(0x667)][_0x48681a(0x843)](),this['_mapNameWindow'][_0x48681a(0x345)](),this['_windowLayer'][_0x48681a(0x599)]=![],SceneManager[_0x48681a(0x3c4)]()),$gameScreen['clearZoom'](),this[_0x48681a(0x489)]();},VisuMZ[_0x52fb7e(0x81f)]['Scene_Map_createMenuButton']=Scene_Map['prototype'][_0x52fb7e(0x511)],Scene_Map['prototype']['createMenuButton']=function(){const _0x3be0c7=_0x52fb7e;VisuMZ[_0x3be0c7(0x81f)][_0x3be0c7(0x82)][_0x3be0c7(0x809)](this),SceneManager['isSideButtonLayout']()&&this['moveMenuButtonSideButtonLayout']();},Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x542)]=function(){const _0x36e6b8=_0x52fb7e;this['_menuButton']['x']=Graphics[_0x36e6b8(0x1ed)]+0x4;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x487)]=Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x63d)],Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x63d)]=function(){const _0x69f75c=_0x52fb7e;VisuMZ[_0x69f75c(0x81f)][_0x69f75c(0x487)][_0x69f75c(0x809)](this),this[_0x69f75c(0x42d)]();},Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x42d)]=function(){const _0x5d1d67=_0x52fb7e;Input[_0x5d1d67(0xc4)](_0x5d1d67(0xc1))&&(ConfigManager[_0x5d1d67(0x1d0)]=!ConfigManager[_0x5d1d67(0x1d0)],ConfigManager[_0x5d1d67(0x33d)]());},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x771)]=Scene_Map[_0x52fb7e(0x7d3)]['updateMain'],Scene_Map['prototype'][_0x52fb7e(0x161)]=function(){const _0x1b609f=_0x52fb7e;VisuMZ[_0x1b609f(0x81f)][_0x1b609f(0x771)]['call'](this),this[_0x1b609f(0x435)]();},Scene_Map['prototype'][_0x52fb7e(0x489)]=function(){const _0x2de8b7=_0x52fb7e;this[_0x2de8b7(0x246)]=[];},Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x435)]=function(){const _0x19dd1c=_0x52fb7e;if(!this['_onceParallelInterpreters'])return;for(const _0x45c952 of this[_0x19dd1c(0x246)]){_0x45c952&&_0x45c952['update']();}},Scene_Map['prototype']['playOnceParallelInterpreter']=function(_0x56c5c9,_0x483401){const _0x571fce=_0x52fb7e,_0x552ecc=$dataCommonEvents[_0x56c5c9];if(!_0x552ecc)return;const _0x2035f9=new Game_OnceParallelInterpreter();this['addOnceParallelInterpreter'](_0x2035f9),_0x2035f9[_0x571fce(0x77a)](_0x56c5c9),_0x2035f9[_0x571fce(0x419)](_0x483401);},Scene_Map['prototype'][_0x52fb7e(0x6a0)]=function(_0x1e6dbb){const _0x48c3ff=_0x52fb7e;this['_onceParallelInterpreters']=this['_onceParallelInterpreters']||[],this[_0x48c3ff(0x246)][_0x48c3ff(0x52a)](_0x1e6dbb);},Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x28e)]=function(_0x4aa215){const _0x428c05=_0x52fb7e;this['_onceParallelInterpreters']=this['_onceParallelInterpreters']||[],this[_0x428c05(0x246)][_0x428c05(0x7d1)](_0x4aa215);};function _0x1b74(){const _0x344fbe=['HelpBgType','xparamFlat2','WASD','Window_Selectable_itemRect','pop','toLowerCase','CustomParamType','cursorDown','updateOpen','ATTN','IconXParam4','GoldBgType','createJsQuickFunction','Manual','displayName','BKSP','DETACH_PICTURE_CONTAINER','PRESERVCONVERSION(%1)','smallParamFontSize','<%1\x20%2:[\x20]','skillTypeWindowRect','Scene_Map_createSpritesetFix','targetSpritePosition','system','_colorCache','layoutSettings','gameTitle','powerDownColor','drawSegment','applyEasing','Window_NumberInput_start','ImgLoad','updatePosition','targetObjects','style','Game_Actor_levelUp','adjustBoxSize','setMainFontSize','backgroundBitmap','XParamVocab6','_stored_crisisColor','Unnamed','_skillTypeWindow','onInputOk','contents','reservePlayTestNewGameCommonEvent','NumberBgType','SParamVocab0','_sellWindow','isSideButtonLayout','_action','innerWidth','thickness','CLOSE_PAREN','isScrollBarVisible','Game_BattlerBase_initMembers','xparamPlus','filters','tpCostColor','createScrollBarSprites','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','moveCancelButtonSideButtonLayout','OnLoadJS','VariableEvalReference','〖〖〖\x20Troop\x20%1:\x20%2\x20Script\x20〗〗〗\x0a\x0a','keys','addChild','requiredWtypeId1','horzJS','trim','DIVIDE','\x0a\x0a\x0a\x0a\x0a','Scene_Base_create','scrollUp','vertJS','_rate','DimColor2','ColorSystem','_battlerName','_stored_hpGaugeColor2','BlendMode','_optionsWindow','ctGaugeColor2','_allTextHeight','isSmartEventCollisionOn','updateOpacity','Input_updateGamepadState','SellRect','offset','Actor','format','Game_Action_itemEva','framesMin','LATIN1','updateAnglePlus','randomJS','SHIFT','616458cIQyHo','NUMPAD7','updateAnchor','NEAREST','meVolume','0.00','getGamepads','indexOf','maxHorz','_image','itemHit','randomInt','actor','updateCoreEasing','maxCols','Speed','traitsPi','56hEdFCz','playOk','evaded','ControllerMatches','_mapY','updatePlayTestF7','Game_Screen_initialize','PERCENT','ATK','guardSkillId','rgba(0,\x200,\x200,\x200.7)','deflate','Scene_Options_create','isMVAnimation','ParseSkillNotetags','WIN_OEM_PA3','ShowJS','STR','drawCurrencyValue','measureTextWidth','checkCoreEngineDisplayCenter','Scene_Map_initialize','originalJS','createFauxAnimationQueue','IconSParam9','Window_Selectable_cursorUp','IconSParam3','_stored_normalColor','jsQuickFunc','EXR','getColor','SwitchToggleRange','_stored_hpGaugeColor1','outbounce','Window_MapName_refresh','isRepeated','setAnglePlusData','cancel','_shouldPreventDefault','retrieveFauxAnimation','VisuMZ\x20CoreEngine\x20PictureIcon\x20%1\x20%2','expParams','IconXParam2','playTestF6','processEscape','drawGauge','_logWindow','ColorMPGauge1','clearCachedKeys','_playTestFastMode','Window_Base_createTextState','Scene_Map_updateMain','endAnimation','〘Common\x20Event\x20%1:\x20%2〙\x20End','ctrlKey','split','StatusParamsRect','GroupDigits','MAT','defaultInputMode','setCommonEvent','ActorMPColor','OutlineColor','ShowScrollBar','getColorDataFromPluginParameters','478233ZocWjA','key%1','ColorHPGauge2','updateData','removeAllPointAnimations','startMove','_isPlaytest','mmp','_pageupButton','isExpGaugeDrawn','sparamPlusJS','RequireFocus','getBattleSystem','Scene_Equip_create','applyForcedGameTroopSettingsCoreEngine','rightArrowWidth','XParamVocab5','FontWidthFix','BottomHelp','Title','removeChild','createPointAnimationTargets','_stored_maxLvGaugeColor1','initCoreEasing','drawGoldItemStyle','ADD','drawGameVersion','_inputString','_buttonType','runCombinedScrollingTextAsCode','helpAreaTop','NON_FRAME','initMembers','_targetScaleY','_drawTextOutline','isNwjs','param','code','WIN_ICO_HELP','atypeId','VisuMZ_2_BattleSystemCTB','onNameOk','Scene_Name_onInputOk','isSpecialCode','ForceNoPlayTest','setClickHandler','DimColor1','drawActorSimpleStatus','itypeId','Scene_Map_shouldAutosave','index','Center','SnapshotOpacity','SmartEventCollisionPriority','_pointAnimationSprites','Graphics_printError','CustomParamNames','Graphics_centerElement','itemHeight','_onLoad','onInputBannedWords','DECIMAL','EnableMasking','SkillTypeRect','isNextScene','Game_Temp_initialize','INSINE','_centerElement','_height','Scene_Battle_createSpriteset_detach','AudioChangeBgsPitch','isCollidedWithEvents','exit','_index','_tempActor','sceneTerminationClearEffects','buttonAssistKey4','reduce','_screenY','WIN_OEM_CLEAR','_stored_powerUpColor','gaugeBackColor','remove','isLoopVertical','prototype','paramValueByName','contentsBack','allowShiftScrolling','horizontal','updatePositionCoreEngineShakeHorz','VisuMZ_2_BattleSystemETB','keyboard','_shiftY','CIRCUMFLEX','buttonAssistWindowButtonRect','createPointAnimationQueue','isUseModernControls','mainAreaTopSideButtonLayout','send','_data','charCode','clamp','FontShadows','tilesetFlags','length','battlebacks1','makeEncounterCount','traitObjects','Window_Base_drawCharacter','StatusParamsBgType','wait','BTestItems','ParseAllNotetags','Spriteset_Base_initialize','redraw','Layer','SParamVocab9','FUNC','IconSParam1','_repositioned','processHandling','1898094mOcnDk','activate','_pointAnimationQueue','isCursorMovable','tileHeight','_onKeyPress','ACCEPT','CRSEL','Untitled','centerSprite','Window_Base_initialize','DTB','bgs','textBaseline','getLevel','drawBackground','enter','call','Scene_Battle_createCancelButton','isLoopHorizontal','TextManager_param','MIN_SAFE_INTEGER','etypeId','Exported_Script_%1.txt','NUMPAD3','fillAll','overallHeight','blt','setTopRow','updateMove','updateKeyText','KeySHIFT','2875oGebMA','inputWindowRect','updateText','currentClass','subjectHitRate','CrisisRate','ModernControls','CoreEngine','bodyColor','_destroyCanvas','keyCode','makeFontSmaller','isPhysical','setCoreEngineUpdateWindowBg','GameEnd','MvAnimationRate','PageChange','BTB','DashToggleR','drawCircle','sparamRate1','terminate','start','AnimationMirrorOffset','_shakeSpeed','Window_Scrollable_update','ExportStrFromAllTroops','Sprite_StateIcon_loadBitmap','current','DOWN','WIN_OEM_RESET','_buttonAssistWindow','stop','paramPlus','number','EditRect','AntiZoomPictures','Plus','MaxDuration','isNumpadPressed','Scene_Base_createWindowLayer','_goldWindow','INQUINT','update','easingType','events','F17','ColorTPCost','TRAIT_PARAM','PA1','buttonAssistKey5','none','center','eva','Rate','prepare','ColorExpGauge2','Origin','level','Total','COMMA','clone','PHA','WIN_OEM_FINISH','ItemBackColor1','paramY','BattleManager_checkSubstitute','select','learnings','AudioChangeBgsVolume','isMaskingEnabled','SlotBgType','\x5c}❪SHIFT❫\x5c{','saveViewport','_offsetY','Game_Interpreter_command111','Spriteset_Battle_createEnemies','#%1','focus','Scene_Map_createMenuButton','DigitGroupingStandardText','WindowLayer_render','onload','NUM','flush','FTB','shake','doesNameContainBannedWords','Window_Selectable_cursorDown','_bgsBuffer','_storedStack','Scene_Title_drawGameTitle','StatusEquipRect','scrollRight','isWindowMaskingEnabled','OutlineColorDmg','refresh','Key%1','ColSpacing','textAlign','loadIconBitmap','_startDecrypting','home','drawText','NewGameCommonEvent','paramX','nickname','PictureEraseAll','loadWindowskin','RPGMAKER_VERSION','SCROLL_LOCK','performMiss','_setupEventHandlers','Sprite_Picture_updateOrigin','outlineColorGauge','<JS\x20%1\x20%2:[\x20](.*)>','F24','slice','ShortcutScripts','Scene_Title','isEnabled','_refreshArrows','Window_EquipItem_isEnabled','iconHeight','createPointAnimationSprite','resetTextColor','statusWindowRect','changeClass','DurationPerChat','refreshSpritesetForExtendedTiles','scrollLeft','makeAutoBattleActions','setSideButtonLayout','STB','F6key','updateDocumentTitle','test','initBasic','item','BaseTexture','TPB\x20ACTIVE','initialLevel','dashToggle','destroyed','processTimingData','isTriggered','fadeSpeed','ItemPadding','PERIOD','refreshScrollBarBitmap','updateScrollBarVisibility','_tileSprite','getControllerInputButtonString','XParamVocab2','baseTextRect','scaleSprite','maxItems','removePointAnimation','fontSize','INOUTELASTIC','NameInputMessage','createBackground','left','tileWidth','TextJS','canEquip','_showDevTools','Window_Selectable_processCursorMove','autoRemovalTiming','createSubSprite','contains','Scene_SingleLoadTransition','itemLineRect','Symbol','BannedWords','OUTELASTIC','makeTargetSprites','textSizeEx','Game_Actor_paramBase','createExtendedTileSprite','ColorCTGauge1','_lastScrollBarValues','Scene_MenuBase_createPageButtons','drawParamText','Window','match','playMiss','drawNewParam','dropItems','startAutoNewGame','_fauxAnimationSprites','WIN_OEM_WSCTRL','scrollX','children','ShowButtons','onXhrError','opacity','Sprite_Animation_processSoundTimings','Input_update','isOpening','switchModes','backspace','_commonEventLayers','XParamVocab4','skipBranch','hideButtonFromView','framesMax','rowSpacing','VisuMZ_2_BattleSystemOTB','_pauseSignSprite','ExtJS','isOpen','setBattleSystem','itemEva','setViewport','Actor-%1-%2','RIGHT','keyRepeatWait','isGamepadButtonPressed','stringKeyMap','right','CustomParamIcons','stencilFunc','F11','SParamVocab2','inbounce','ShiftR_Toggle','F21','missed','smoothSelect','MenuLayout','_mirror','CLOSE_BRACKET','maxTp','members','WIN_ICO_00','Spriteset_Base_isAnimationPlaying','MAXHP','Scene_Name_create','updateScrollBars','setTileFrame','_backgroundFilter','CodeJS','MAX_SAFE_INTEGER','animations','ARRAYSTR','Game_Map_scrollUp','processAlwaysEscape','enemies','Scene_MenuBase_helpAreaTop','createEnemies','buyWindowRect','JUNJA','Scene_Map_createSpriteset','_scene','IconSParam6','buttonAreaHeight','DisplayLockY','setupScrollBarBitmap','CommandRect','_number','itemPadding','padZero','EVA','GoldIcon','_stored_ctGaugeColor1','_clientArea','makeFontBigger','IconXParam6','Game_Action_updateLastTarget','ShowItemBackground','xparamRate','isBottomHelpMode','GoldChange','PictureCoordinatesMode','expGaugeColor2','ActorBgType','VIEWPORT','F15','toString','constructor','INOUTEXPO','MINUS','_startPlaying','findSymbol','isArrowPressed','loadTitle2','offsetY','isAlive','_anchor','ExportAllMapText','SplitEscape','terms','7590519xmcTxn','AdjustAngle','targetPosition','render','process_VisuMZ_CoreEngine_Functions','initMembersCoreEngine','_actor','OpenSpeed','ExtDisplayedParams','updateMain','_scaleY','scrollY','BlurFilter','description','paramFlatBonus','Scene_Battle_createSpritesetFix','ColorNormal','arePageButtonsEnabled','Window_NameInput_cursorPagedown','_internalTextures','playBgm','altKey','batch','sqrt','_troopId','DigitGroupingLocale','_tilemap','initCoreEngine','OS_KEY','Mirror','refreshActor','_effectsContainer','ARRAYJSON','Param','clear','sparamFlatJS','_origin','_dimmerSprite','endBattlerActions','isGamepadAxisMoved','XParamVocab0','createTitleButtons','removeAllFauxAnimations','turn','drawGameSubtitle','ALTGR','backOpacity','scrollDown','pos','SkillMenu','CategoryRect','setHome','restore','_pagedownButton','_registerKeyInput','hpGaugeColor1','useDigitGroupingEx','setColorTone','isGamepadConnected','buttonAssistWindowRect','AudioChangeBgmPan','INELASTIC','SEMICOLON','AccuracyBoost','getInputButtonString','loadBitmapCoreEngine','INOUTQUART','checkSubstitute','NUMPAD9','Sprite_AnimationMV_processTimingData','status','Window_Base_drawFace','SCROLLBAR','_fauxAnimationQueue','GoldRect','scaleMode','drawTextTopAligned','random','MDR','setSize','wtypeId','getPointAnimationLayer','powerUpColor','anchor','RegExp','setActionState','setMute','process_VisuMZ_CoreEngine_jsQuickFunctions','SELECT','_helpWindow','setViewportCoreEngineFix','IconParam1','isActor','DOUBLE_QUOTE','stencilOp','hpColor','loadSystemImages','asin','OUTQUAD','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','DigitGroupingExText','_statusEquipWindow','buttonAssistOffset5','drawActorNickname','createDimmerSprite','itemBackColor2','tilesetNames','DetachBattlePictureContainer','calcCoreEasing','pitch','normal','IconSParam0','buttonAssistOffset1','Scene_Map_update','updatePositionCoreEngine','EISU','setValue','replace','CANCEL','startAnimation','alwaysDash','checkPlayerLocation','pan','buttonAssistKey%1','Game_Picture_scaleY','CustomParamAbb','darwin','loadGameImagesCoreEngine','storeMapData','DOLLAR','DATABASE','removeFauxAnimation','Sprite_AnimationMV_updatePosition','ExportCurTroopText','_moveEasingType','addWindow','Window_NameInput_refresh','top','Power','makeCoreEngineCommandList','SwitchRandomizeOne','ProfileRect','map','useFontWidthFix','isEventTest','Flat','paramWidth','isOptionValid','ceil','boxWidth','_lastGamepad','StatusRect','setAttack','TextCodeClassNames','updateRotation','toFixed','list','EXECUTE','JSON','openURL','Match','_categoryWindow','EnableNameInput','inBattle','command355','parallaxes','updateDuration','command111','Mute','_onKeyDown','ProfileBgType','_lastX','ParseActorNotetags','paramBaseAboveLevel99','reserveNewGameCommonEvent','Game_Picture_y','DocumentTitleFmt','calcEasing','ButtonAssist','Armor-%1-%2','Flat1','command122','playLoad','createFauxAnimationSprite','battlerHue','_addShadow','startShake','DataManager_setupNewGame','startNormalGame','processFauxAnimationRequests','F18','PGUP','loadPicture','setSideView','DEF','mapId','ConvertParams','SEPARATOR','AllMaps','COLON','TRG','maxTurns','PLUS','mainAreaHeightSideButtonLayout','isAutoColorAffected','isItem','Scene_Boot_onDatabaseLoaded','OffBarOpacity','faceHeight','clearStencil','([\x5c+\x5c-]\x5cd+)([%％])>','setDisplayPos','colSpacing','_currentMap','ALWAYS','Game_Interpreter_command355','xparamPlusJS','centerCameraCheckData','UpdatePictureCoordinates','《《《\x20Event\x20%1:\x20%2,\x20Page\x20%3\x20》》》\x0a%4\x0a','setupRate','sparam','pendingColor','SystemSetBattleSystem','sparamRate2','BgFilename1','addChildToBack','resetFontSettings','_timeDuration','Bitmap_blt','updateFauxAnimations','setMoveEasingType','platform','pictures','en-US','%1\x0a','subtitle','areTileShadowsHidden','_onceParallelInterpreters','menu','buttons','_stored_tpCostColor','Input_shouldPreventDefault','adjustSprite','OUTBACK','INBOUNCE','lastAnimationSprite','measureText','fillStyle','writeFile','xparam','_centerCameraCheck','mainAreaHeight','_forcedTroopView','resetBattleSystem','createKeyJS','TPB\x20WAIT','_context','boxHeight','removeAnimationFromContainer','EndingID','OUTCIRC','mirror','pressed','yScrollLinkedOffset','deathColor','StatusMenu','_stored_pendingColor','onButtonImageLoad','Game_Event_isCollidedWithEvents','processDigitChange','_targets','framebuffer','_customModified','Window_NameInput_cursorRight','updateMotion','ItemBgType','onerror','_commandList','SceneManager_onKeyDown','HelpRect','scrollbar','quit','Troop%1','needsUpdate','Y:\x20%1','menuShowButton','centerY','FontSmoothing','_lastPluginCommandInterpreter','ARRAYNUM','canUse','_pictureContainer','_statusParamsWindow','_hovered','ColorMaxLvGauge2','hasEncryptedImages','isRightInputMode','alphabetic','FadeSpeed','process_VisuMZ_CoreEngine_RegExp','DrawIcons','setupCoreEasing','buttonAssistText%1','MULTIPLY','Name','clearForcedGameTroopSettingsCoreEngine','_coreEasing','OUTBOUNCE','TCR','removeOnceParallelInterpreter','EncounterRateMinimum','Window_StatusBase_drawActorLevel','editWindowRect','showIncompleteTilesetError','down','tpGaugeColor2','KeyboardInput','Game_Interpreter_command105','createContents','numberWindowRect','IconXParam5','floor','Game_Picture_scaleX','origin','IconSParam7','getCoreEngineScreenShakeStyle','createCustomParameter','EQUALS','ParseWeaponNotetags','%1〘Choice\x20Cancel〙%1','IconXParam0','Bitmap_initialize','centerX','Window_StatusBase_drawActorSimpleStatus','PictureEraseRange','%1〘End\x20Choice\x20Selection〙%1','ControllerButtons','isInputting','addLoadListener','updateWaitMode','blendFunc','REPLACE','updatePictureCoordinates','([\x5c+\x5c-]\x5cd+)>','getCombinedScrollingText','OkText','_pressed','_downArrowSprite','Type','META','pointX','connected','Color','WIN_OEM_FJ_JISHO','BattleSystem','_text','removeTileExtendSprites','setAction','sparamFlatBonus','repositionEnemiesByResolution','_storedMapText','Window_NameInput_processTouch','_shakePower','LESS_THAN','【%1】\x0a','updatePositionCoreEngineShakeOriginal','ListBgType','Window_NameInput_cursorPageup','levelUpRecovery','playBuzzer','makeDeepCopy','movePageButtonSideButtonLayout','_hp','initialize','initialBattleSystem','xparamFlat1','SParamVocab3','Settings','ColorPowerUp','_inputSpecialKeyCode','CNT','anglePlus','processKeyboardHandling','application/json','setCoreEngineScreenShakeStyle','EquipMenu','showDevTools','EREOF','atbActive','Game_Action_setAttack','nah','imageSmoothingEnabled','ScaleY','_stored_maxLvGaugeColor2','SLEEP','_targetScaleX','StatusBgType','pow','optionsWindowRect','paramRate','loadSystem','img/%1/','onMoveEnd','Game_Picture_initRotation','WIN_OEM_FJ_MASSHOU','drawBackgroundRect','bitmapHeight','close','helpAreaBottom','ASTERISK','2924EFqigg','renderNoMask','bitmap','CtrlQuickLoad','NUM_LOCK','background','sv_enemies','currentLevelExp','setSkill','goto','_colorTone','BgFilename2','Export\x20Troop\x20Text\x20operation\x20will\x20finish\x20in\x20%1\x20ms(s)','listWindowRect','catchLoadError','BarBodyColor','isBottomButtonMode','Enemy-%1-%2','ctGaugeColor1','gaugeRate','initRotationCoreEngine','checkCacheKey','paramBase','isKeyItem','ListRect','ARRAYEVAL','PictureID','QoL','ParamArrow','MapNameTextCode','categoryWindowRect','xparamFlatBonus','playTestShiftR','attackSkillId','bgmVolume','processCursorMoveModernControls','getButtonAssistLocation','createTroopNote','PIPE','animationNextDelay','PDR','SwitchRandomizeRange','valueOutlineColor','AnimationID','printError','markCoreEngineModified','updatePositionCoreEngineShakeRand','animationBaseDelay','allTiles','getKeyboardInputButtonString','loadBitmap','value','SaveMenu','outlineColor','BottomButtons','STENCIL_TEST','DrawItemBackgroundJS','ColorCTGauge2','Spriteset_Base_update','PositionY','iconWidth','Padding','animationId','ButtonFadeSpeed','xdg-open','_patternHeight','Finish','_drawTextBody','goldWindowRect','ONE','isSceneMap','setEnemyAction','isPointAnimationPlaying','clearRect','save','Map%1.json','_digitGrouping','numActions','_cache','INQUART','hit','AudioChangeBgsPan','hide','maxLevel','usableSkills','setupCustomRateCoreEngine','INCUBIC','padding','ShiftT_Toggle','ExtractStrFromMap','pointY','buttonAssistText5','normalColor','MEV','_mode','INOUTBACK','Icon','mev','buttonAssistText4','_animationSprites','XParamVocab9','paintOpacity','retreat','_movementDuration','MRG','Game_System_initialize','Item-%1-%2','_currentBgs','ParseEnemyNotetags','F22','Game_Interpreter_command122','Window_NameInput_cursorDown','picture','Smooth','_forcedBattleGridSystem','_muteSound','_hideButtons','ColorHPGauge1','isMapScrollLinked','ColorMaxLvGauge1','process_VisuMZ_CoreEngine_ControllerButtons','createDigits','titleCommandWindow','framesPerChar','exportAllMapStrings','add','BattleManager_processEscape','isHandled','Sprite_Picture_loadBitmap','endAction','drawTextEx','targetContentsOpacity','gradientFillRect','572550tTLRJS','createTileExtendSprites','INOUTBOUNCE','moveRelativeToResolutionChange','IconXParam8','WIN_OEM_PA2','evade','〘Scrolling\x20Text〙\x0a','exp','_backSprite2','transform','registerCommand','ConvertNumberToString','escape','MDF','paramMax','_eventId','SceneManager_initialize','data/','default','IconXParam3','addEventListener','_coreEngineShakeStyle','WIN_OEM_ENLW','drawValue','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_commandWindow','currencyUnit','StartID','ItemStyle','HIT','ColorExpGauge1','statusParamsWindowRect','XParamVocab3','DisplayLockX','destroyContents','isSideView','pageup','EXCLAMATION','Window_refreshBack','_clickHandler','WIN_OEM_PA1','openness','_statusWindow','NUMPAD6','updateBgmParameters','updateBgsParameters','INOUTCUBIC','Graphics_defaultStretchMode','textColor','TILDE','isTileExtended','down2','updateFrame','buttonAssistOffset2','mhp','Window_Base_drawIcon','Window_Gold_refresh','_startLoading','exportAllTroopStrings','buttonAssistOk','getInputMultiButtonStrings','nextLevelExp','Input_setupEventHandlers','_list','enableDigitGrouping','processKeyboardBackspace','SceneManager_exit','Tilemap_addSpotTile','gainSilentTp','IconSParam8','Plus1','uiAreaHeight','mainFontSize','Scene_Menu_create','popScene','snapForBackground','_lastOrigin','stypeId','ImprovedAccuracySystem','SystemSetFontSize','IconParam4','F19','IconParam6','Bitmap_drawCircle','〘Common\x20Event\x20%1:\x20%2〙\x20Start','xparamRateJS','evaluate','setup','MRF','IconParam0','TimeProgress','_CoreEngineSettings','deselect','isSceneBattle','axes','KEEP','ExportAllTroopText','REC','initVisuMZCoreEngine','_stored_mpGaugeColor2','drawGameTitle','ExportString','_sideButtonLayout','areButtonsOutsideMainUI','_inputWindow','isInstanceOfSceneMap','textWidth','Scene_MenuBase_mainAreaHeight','LineHeight','encounterStepsMinimum','expGaugeColor1','_displayX','sin','PLAY','CustomParam','onKeyDownKeysF6F7','_battleField','_buyWindow','MenuBg','windowRect','object','ActorRect','ValueJS','RepositionEnemies','ColorMPGauge2','_stored_tpGaugeColor1','QUESTION_MARK','IconSet','VisuMZ_2_BattleSystemFTB','characters','SPACE','_pollGamepads','setGuard','ExportStrFromAllMaps','Game_Interpreter_PluginCommand','gold','Window_Base_createContents','Current\x20tileset\x20has\x20incomplete\x20flag\x20data.','mainAreaTop','updateScrollBarPosition','checkPassage','isMenuButtonAssistEnabled','FDR','_texture','_shakeDuration','F16','isClosed','Scene_Shop_create','_url','_coreEasingType','ParseArmorNotetags','createCustomBackgroundImages','title','BasicParameterFormula','setupTileExtendTerrainTags','isBusy','currentExp','optSideView','buttonAssistKey1','Wait','setEvent','scale','IDs','parse','Conditional\x20Branch\x20Script\x20Error','KeyTAB','keyMapper','OptionsRect','DefaultMode','Sprite_Button_initialize','isTpb','overallWidth','wholeDuration','processTouchModernControls','itemRect','RevertPreserveNumbers','createCommandWindow','Skill-%1-%2','Tilemap_addShadow','setEasingType','updateDashToggle','keypress','isAnimationOffsetXMirrored','%2%1%3','SideView','showFauxAnimations','useDigitGrouping','commandWindowRect','updateOnceParallelInterpreters','setupCoreEngine','NUMPAD0','helpWindowRect','IconParam2','toUpperCase','Bitmap_gradientFillRect','Game_Map_scrollLeft','ColorTPGauge2','Game_Picture_updateRotation','paramName','_stored_systemColor','blockWidth','_textPopupWindow','GRD','MAXMP','sparamRate','Game_Picture_x','MCR','operand','log','applyCoreEasing','drawActorLevel','BTestArmors','createWindowLayer','isMagical','buttonAssistSwitch','Game_Action_itemHit','playCursor','ExtractStrFromList','DebugConsoleLastControllerID','_refreshPauseSign','EnableJS','CONTEXT_MENU','Sprite_Animation_setViewport','1.4.4','updatePadding','uiAreaWidth','exec','_listWindow','operation','open','_slotWindow','HELP','_loadingState','processCursorMove','Window_NameInput_initialize','PictureFilename','ParseTilesetNotetags','LEFT','Bitmap_clearRect','destroyCoreEngineMarkedBitmaps','playCancel','maxScrollY','updateEffekseer','Sprite_Actor_setActorHome','maxScrollbar','OpenURL','skillTypes','Scene_Battle_createSpriteset','SlotRect','HRG','_animation','_balloonQueue','integer','BACK_QUOTE','Click\x20\x22Copy\x20Page\x22\x20from\x20another\x20tileset\x27s\x20pages','skillId','faces','updateShadow','buttonAssistKey3','_actorWindow','addQueue','hpGaugeColor2','numberShowButton','height','ItemBackColor2','string','Keyboard','systemColor','Enable','SwitchActorText','Scene_Map_updateScene','targets','clearOnceParallelInterpreters','width','VisuMZ_4_UniqueTileEffects','updatePointAnimations','《《《\x20Page\x20%1\x20》》》\x0a%2\x0a','Sprite_Battler_startMove','drawCurrentParam','_targetAnchor','xparamPlus1','targetScaleX','adjustPictureAntiZoom','defineProperty','_saveFileID','levelUp','itemBackColor1','strokeRect','VisuMZ_2_BattleSystemSTB','cursorPageup','_windowLayer','drawParamName','HASH','bgsVolume','create','sellWindowRect','NUMPAD5','DisplayedParams','targetY','ARRAYSTRUCT','Game_Troop_setup','stretch','IconSParam5','cos','sparamPlus1','ApplyEasing','_hideTileShadows','OPEN_CURLY_BRACKET','resize','WIN_OEM_FJ_LOYA','SParamVocab6','MAX_GL_TEXTURES','_active','initRotation','processKeyboardDelete','playCursorSound','smooth','Rate2','processKeyboardEnd','playBgs','windowPadding','buttonAssistText2','ScreenResolution','displayX','seVolume','Input_onKeyDown','option','_stored_ctGaugeColor2','AGI','outlineColorDmg','CAPSLOCK','ButtonHeight','createPageButtons','onClick','createTextState','_baseSprite','Spriteset_Base_updatePosition','commandWindowRows','GetParamIcon','isNormalPriority','translucentOpacity','contentsOpacity','_scrollBarVert','gaugeHeight','_subject','createChildSprite','parseForcedGameTroopSettingsCoreEngine','EVAL','erasePicture','currentValue','itemSuccessRate','Game_Actor_changeClass','END','Scene_Map_updateMainMultiply','Gold','addCommand','catchException','Window_Base_update','SETTINGS','applyEasingAnglePlus','isAnimationForEach','Version','name','measureTextWidthNoRounding','buttonAssistOffset3','BackOpacity','_cacheScaleY','([\x5c+\x5c-]\x5cd+\x5c.?\x5cd+)>','Game_Picture_updateMove','makeInputButtonString','updateCurrentEvent','buttonAssistOffset4','Game_Picture_move','FontSize','successRate','changeTextColor','SystemLoadAudio','TGR','_gamepadWait','drawActorExpGauge','_scaleX','ItemMenu','Script\x20Call\x20Error','GoldFontSize','Scene_Skill_create','Sprite_Gauge_currentValue','setupNewGame','_originalViewport','titles2','ETB','setWindowPadding','setActorHome','bind','Window_Selectable_drawBackgroundRect','Scene_Item_create','SystemLoadImages','DummyRect','params','Max','NUMPAD1','catchNormalError','checkScrollBarBitmap','makeCommandList','LoadMenu','IconIndex','getBackgroundOpacity','ShowDevTools','CLEAR','createMenuButton','CreateBattleSystemID','_tileExtendTerrainTags','_animationQueue','BgType','tpColor','_pictureCoordinatesWindow','CTRL','CallHandlerJS','pagedown','OUTEXPO','OpenConsole','Game_Event_start','ENTER','pixelated','DigitGroupingGaugeSprites','BuyBgType','Game_BattlerBase_refresh','windowOpacity','Game_Map_setDisplayPos','_smooth','viewport','_itemWindow','updateFrameCoreEngine','_isButtonHidden','push','Bitmap_resize','AudioChangeBgmVolume','_drawTextShadow','textHeight','OTB','updateLastTarget','shift','SUBTRACT','paramFlatJS','Window_Base_destroyContents','_currentBgm','SParamVocab7','isCancelled','KeyItemProtect','_maxDigits','actorWindowRect','OPEN_PAREN','getTileExtendTerrainTags','onKeyDown','max','loadTileBitmap','_srcBitmap','Game_Character_processMoveCommand','moveMenuButtonSideButtonLayout','innerHeight','setBackgroundOpacity','Game_Map_setup','win32','isMaxLevel','_backSprite1','paramMaxJS','rgba(0,\x200,\x200,\x201.0)','_mainSprite','OUTQUINT','xparamPlus2','scrollbarHeight','_changingClass','mpGaugeColor1','processTouch','isPressed','valueOutlineWidth','LINEAR','Scene_Base_terminate','maxScrollX','_tileExtendSprites','button','_closing','buttonAssistKey2','_mapX','644928IGokZr','INOUTCIRC','tilesets','PRINTSCREEN','BattleManager_update','targetBackOpacity','expRate','createCancelButton','CommandBgType','Subtitle','areButtonsHidden','displayY','Scene_MenuBase_createBackground','Scene_Boot_startNormalGame','Game_Picture_angle','_bitmap','_pictureName','DEFAULT_SHIFT_Y','isActiveTpb','mpCostColor','_lastIconIndex','note','forceOutOfPlaytest','sparamPlus2','ALT','processKeyboardDigitChange','_destroyInternalTextures','Scene_MenuBase_createCancelButton','shouldAutosave','CEV','Graphics','MultiKeyFmt','_makeFontNameText','isAnimationPlaying','cancelShowButton','changeAnglePlusData','addAnimationSpriteToContainer','drawFace','gaugeLineHeight','disable','EnableNumberInput','processCursorHomeEndTrigger','paramchangeTextColor','animationShouldMirror','EQUAL','context','processMoveCommand','dimColor2','faceWidth','_digitGroupingEx','Linear','getLastUsedGamepadType','Spriteset_Map_createTilemap','buttonAssistText1','buttonAssistCancel','requestPointAnimation','maxLvGaugeColor2','F13','font','includes','nw.gui','visible','This\x20scene\x20cannot\x20utilize\x20a\x20Once\x20Parallel!','isForFriend','tpGaugeColor1','playtestQuickLoad','ActorHPColor','Plus2','version','F14','filter','INSERT','\x20Origin:\x20%1','Basic','_blank','drawAllParams','ParseStateNotetags','toLocaleString','buttonAssistText3','CRI','Scene_Battle_update','_targetOffsetX','WIN_OEM_CUSEL','process_VisuMZ_CoreEngine_CustomParameters','parameters','%1:\x20Exit\x20','_isWindow','forceStencil','_movementWholeDuration','Scene_Base_terminateAnimationClearBugFix','onDatabaseLoaded','_anglePlus','subject','PreserveNumbers','OffBarColor','_createInternalTextures','sv_actors','UNDERSCORE','_windowskin','_numberWindow','Weapon-%1-%2','targetOpacity','CommonEventID','Duration','F20','TAB','_mp','createButtonAssistWindow','Pixelated','drawCharacter','processKeyboardHome','slotWindowRect','_pictureCoordinatesMode','F10','ItemRect','getCustomBackgroundSettings','isOpenAndActive','MODECHANGE','LevelUpFullMp','command105','maxVisibleItems','Scene_Boot_loadSystemImages','CategoryBgType','Game_Map_scrollRight','_margin','cursorRight','_dummyWindow','WIN_OEM_COPY','Game_Action_numRepeats','%1%2','mute','repeat','Input_clear','isGameActive','Game_Picture_initBasic','setFrame','text','1.3.0','_stored_mpCostColor','createAnimationSprite','targetScaleY','updatePictureAntiZoom','VisuMZ_1_OptionsCore','X:\x20%1','setLastPluginCommandInterpreter','buttonAssistWindowSideRect','_refreshBack','_targetY','DamageColor','createPointAnimation','statusEquipWindowRect','drawIconBySize','targetEvaRate','KeyUnlisted','isEventRunning','getParameter','_editWindow','_cacheScaleX','BoxMargin','OPEN_BRACKET','ColorManager_loadWindowskin','LUK','WIN_OEM_AUTO','gainGold','_profileWindow','helpAreaTopSideButtonLayout','selectLast','_cancelButton','_screenX','coreEngineRepositionEnemies','_lastCommandSymbol','playOnceParallelInterpreter','_stored_tpGaugeColor2','enabled','determineSideButtonLayoutValid','ONE_MINUS_SRC_ALPHA','itemWindowRect','Window_NameInput_cursorUp','XParamVocab8','VOLUME_UP','BarOffset','PAUSE','_addSpotTile','AMPERSAND','_backSprite','CLOSE_CURLY_BRACKET','PTB','globalAlpha','State-%1-%2','ShowActorLevel','numRepeats','drawItem','ShopMenu','_playtestF7Looping','MainMenu','overrideMimeType','onActorChange','_realScale','_width','Scene_Load','_duration','active','initCoreEngineScreenShake','vert','SParameterFormula','Sprite_Gauge_gaugeRate','isTouchedInsideFrame','skills','consumeItem','createSpriteset','Scene_Boot_updateDocumentTitle','getLastPluginCommandInterpreter','Bitmap_drawText','updateMainMultiply','_iconIndex','lineHeight','eventsXyNt','LoadError','HANJA','setupButtonImage','PictureEasingType','isGamepadTriggered','drawActorClass','seek','catchUnknownError','updateScene','showPointAnimations','Sprite_StateIcon_updateFrame','duration','_opacity','battleSystem','paramRate1','getLastGamepadUsed','_forcedBattleSys','RepositionEnemies130','NUMPAD2','IconParam3','IconParam5','isItemStyle','angle','VisuMZ_2_BattleSystemBTB','IconSParam2','EditBgType','Window_Base_drawText','battlebacks2','maxLvGaugeColor1','Page','paramPlusJS','Class-%1-%2','〘Show\x20Text〙\x0a','updatePictureSettings','Flat2','tab','refreshWithTextCodeSupport','target','move','_lastY','CTB','loadMapData','repositionCancelButtonSideButtonLayout','PositionJS','min','isPlaying','text%1','_stored_powerDownColor','pages','maxVert','_spriteset','(\x5cd+)>','setBackgroundType','_stored_expGaugeColor1','_textQueue','drawIcon','GoldOverlap','titles1','setTargetAnchor','recoverAll','createTextPopupWindow','command357','PixelateImageRendering','volume','_displayY','_scrollBarHorz','paramRate2','INEXPO','round','Enemy','showPicture','SideButtons','ExtractStrFromTroop','targetX','ScreenShake','SwitchToggleOne','Window_NumberInput_processDigitChange','PictureRotateBy','Game_Picture_show','vertical','KANA','worldTransform','XParameterFormula','isPlaytest','ENTER_SPECIAL','setHandler','fromCharCode','Chance','_upArrowSprite','setAnchor','Game_Party_consumeItem','return\x200','ParseClassNotetags','%1〘Choice\x20%2〙\x20%3%1','onlyfilename','Window_Selectable_processTouch','scaleY','_timerSprite','updateOrigin','_defaultStretchMode','_targetOpacity','TranslucentOpacity','retrievePointAnimation','loadTitle1','SParamVocab4','cursorPagedown','src','addOnceParallelInterpreter','cursorUp','Renderer','xScrollLinkedOffset','VisuMZ_2_BattleSystemPTB','destroy','buttonAssistOffset%1','loading','tileset','_previousClass','StatusEquipBgType','VOLUME_DOWN','_updateGamepadState','_baseTexture','SParamVocab5','Window_ShopSell_isEnabled','createFauxAnimation','WIN_OEM_FJ_TOUROKU','fillRect','show','_backgroundSprite','prepareNextScene','Control\x20Variables\x20Script\x20Error','zoomScale','scaleX','BTestAddedQuantity','NoTileShadows','setupBattleTestItems','Window_NameInput_cursorLeft','IconXParam1','offColor','TextStr','makeActionList','MinDuration','\x0a\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%2\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(\x27JS\x20Quick\x20Function\x20\x22%1\x22\x20Error!\x27);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','WIN_OEM_BACKTAB','getControllerInputButtonMatch','isFullDocumentTitle','helpAreaHeight','_tile','_bgmBuffer','processSoundTimings','ColorDeath','advanced'];_0x1b74=function(){return _0x344fbe;};return _0x1b74();}function Game_OnceParallelInterpreter(){const _0x17b23b=_0x52fb7e;this[_0x17b23b(0x2ce)](...arguments);}Game_OnceParallelInterpreter[_0x52fb7e(0x7d3)]=Object['create'](Game_Interpreter[_0x52fb7e(0x7d3)]),Game_OnceParallelInterpreter[_0x52fb7e(0x7d3)]['constructor']=Game_OnceParallelInterpreter,Game_OnceParallelInterpreter[_0x52fb7e(0x7d3)][_0x52fb7e(0x77a)]=function(_0x23d59b){const _0xef4fd8=_0x52fb7e,_0x3135ee=$dataCommonEvents[_0x23d59b];_0x3135ee?this['setup'](_0x3135ee[_0xef4fd8(0x1f4)],0x0):this[_0xef4fd8(0x82d)]();},Game_OnceParallelInterpreter['prototype'][_0x52fb7e(0x419)]=function(_0x115e41){const _0x1a4d52=_0x52fb7e;this[_0x1a4d52(0x388)]=_0x115e41||0x0;},Game_OnceParallelInterpreter[_0x52fb7e(0x7d3)]['terminate']=function(){const _0x5194cf=_0x52fb7e;if(!SceneManager[_0x5194cf(0x339)]())return;SceneManager[_0x5194cf(0x131)][_0x5194cf(0x28e)](this),Game_Interpreter['prototype'][_0x5194cf(0x82d)][_0x5194cf(0x809)](this);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x12c)]=Scene_MenuBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x79d)],Scene_MenuBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x79d)]=function(){const _0x37fd77=_0x52fb7e;let _0xda7d2d=0x0;return SceneManager[_0x37fd77(0x3e0)]()?_0xda7d2d=this[_0x37fd77(0x601)]():_0xda7d2d=VisuMZ[_0x37fd77(0x81f)][_0x37fd77(0x12c)][_0x37fd77(0x809)](this),_0xda7d2d;},Scene_MenuBase['prototype'][_0x52fb7e(0x601)]=function(){const _0x5b2213=_0x52fb7e;return this[_0x5b2213(0x143)]()?this['mainAreaBottom']():0x0;},VisuMZ[_0x52fb7e(0x81f)]['Scene_MenuBase_mainAreaTop']=Scene_MenuBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x403)],Scene_MenuBase['prototype'][_0x52fb7e(0x403)]=function(){const _0x503b96=_0x52fb7e;return SceneManager[_0x503b96(0x3e0)]()?this[_0x503b96(0x7e0)]():VisuMZ[_0x503b96(0x81f)]['Scene_MenuBase_mainAreaTop'][_0x503b96(0x809)](this);},Scene_MenuBase['prototype'][_0x52fb7e(0x7e0)]=function(){const _0x5324ad=_0x52fb7e;if(!this[_0x5324ad(0x143)]())return this[_0x5324ad(0x2f1)]();else return this[_0x5324ad(0x406)]()&&this[_0x5324ad(0x317)]()===_0x5324ad(0x1e1)?Window_ButtonAssist[_0x5324ad(0x7d3)][_0x5324ad(0x633)]():0x0;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x3e4)]=Scene_MenuBase[_0x52fb7e(0x7d3)]['mainAreaHeight'],Scene_MenuBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x254)]=function(){const _0x558298=_0x52fb7e;let _0xe90d8f=0x0;return SceneManager[_0x558298(0x3e0)]()?_0xe90d8f=this[_0x558298(0x223)]():_0xe90d8f=VisuMZ[_0x558298(0x81f)][_0x558298(0x3e4)][_0x558298(0x809)](this),this[_0x558298(0x406)]()&&this[_0x558298(0x317)]()!==_0x558298(0x558)&&(_0xe90d8f-=Window_ButtonAssist[_0x558298(0x7d3)][_0x558298(0x633)]()),_0xe90d8f;},Scene_MenuBase['prototype'][_0x52fb7e(0x223)]=function(){const _0x4a817d=_0x52fb7e;return Graphics[_0x4a817d(0x25a)]-this[_0x4a817d(0x6c6)]();},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x568)]=Scene_MenuBase[_0x52fb7e(0x7d3)][_0x52fb7e(0xd4)],Scene_MenuBase['prototype'][_0x52fb7e(0xd4)]=function(){const _0x2907a7=_0x52fb7e,_0x2c8f96=VisuMZ[_0x2907a7(0x81f)][_0x2907a7(0x2d2)][_0x2907a7(0x3ef)]['BlurStrength']??0x8;this['_backgroundFilter']=new PIXI[(_0x2907a7(0x705))][(_0x2907a7(0x164))](_0x2c8f96),this[_0x2907a7(0x6b4)]=new Sprite(),this[_0x2907a7(0x6b4)]['bitmap']=SceneManager['backgroundBitmap'](),this[_0x2907a7(0x6b4)][_0x2907a7(0x705)]=[this['_backgroundFilter']],this['addChild'](this['_backgroundSprite']),this['setBackgroundOpacity'](0xc0),this[_0x2907a7(0x544)](this['getBackgroundOpacity']()),this[_0x2907a7(0x410)]();},Scene_MenuBase['prototype'][_0x52fb7e(0x50e)]=function(){const _0x40d6ca=_0x52fb7e,_0x8cb43a=String(this[_0x40d6ca(0x14b)]['name']),_0x535625=this[_0x40d6ca(0x5cf)](_0x8cb43a);return _0x535625?_0x535625[_0x40d6ca(0x7b3)]:0xc0;},Scene_MenuBase[_0x52fb7e(0x7d3)]['createCustomBackgroundImages']=function(){const _0x206dc6=_0x52fb7e,_0x1033c2=String(this[_0x206dc6(0x14b)][_0x206dc6(0x4e3)]),_0x3c31d3=this['getCustomBackgroundSettings'](_0x1033c2);_0x3c31d3&&(_0x3c31d3[_0x206dc6(0x239)]!==''||_0x3c31d3['BgFilename2']!=='')&&(this[_0x206dc6(0x548)]=new Sprite(ImageManager[_0x206dc6(0x69c)](_0x3c31d3['BgFilename1'])),this[_0x206dc6(0x381)]=new Sprite(ImageManager[_0x206dc6(0x151)](_0x3c31d3[_0x206dc6(0x2fe)])),this['addChild'](this[_0x206dc6(0x548)]),this[_0x206dc6(0x70e)](this[_0x206dc6(0x381)]),this[_0x206dc6(0x548)][_0x206dc6(0x2f5)][_0x206dc6(0x2ab)](this[_0x206dc6(0x24b)][_0x206dc6(0x501)](this,this['_backSprite1'])),this[_0x206dc6(0x381)][_0x206dc6(0x2f5)]['addLoadListener'](this[_0x206dc6(0x24b)][_0x206dc6(0x501)](this,this[_0x206dc6(0x381)])));},Scene_MenuBase['prototype'][_0x52fb7e(0x5cf)]=function(_0x5d93c6){const _0x442079=_0x52fb7e;return VisuMZ[_0x442079(0x81f)][_0x442079(0x2d2)]['MenuBg'][_0x5d93c6]||VisuMZ['CoreEngine'][_0x442079(0x2d2)][_0x442079(0x3ef)]['Scene_Unlisted'];},Scene_MenuBase['prototype']['adjustSprite']=function(_0x4b80ce){const _0x11769a=_0x52fb7e;this[_0x11769a(0xce)](_0x4b80ce),this[_0x11769a(0x801)](_0x4b80ce);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x577)]=Scene_MenuBase[_0x52fb7e(0x7d3)]['createCancelButton'],Scene_MenuBase['prototype'][_0x52fb7e(0x563)]=function(){const _0x57b854=_0x52fb7e;VisuMZ[_0x57b854(0x81f)][_0x57b854(0x577)][_0x57b854(0x809)](this),SceneManager[_0x57b854(0x6fd)]()&&this[_0x57b854(0x709)]();},Scene_MenuBase['prototype']['moveCancelButtonSideButtonLayout']=function(){const _0x38676c=_0x52fb7e;this['_cancelButton']['x']=Graphics[_0x38676c(0x1ed)]+0x4;},VisuMZ[_0x52fb7e(0x81f)]['Scene_MenuBase_createPageButtons']=Scene_MenuBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x4c5)],Scene_MenuBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x4c5)]=function(){const _0xb21880=_0x52fb7e;VisuMZ['CoreEngine'][_0xb21880(0xe9)][_0xb21880(0x809)](this),SceneManager[_0xb21880(0x6fd)]()&&this[_0xb21880(0x2cc)]();},Scene_MenuBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x2cc)]=function(){const _0x1da642=_0x52fb7e;this[_0x1da642(0x787)]['x']=-0x1*(this['_pageupButton']['width']+this[_0x1da642(0x18d)][_0x1da642(0x48a)]+0x8),this[_0x1da642(0x18d)]['x']=-0x1*(this[_0x1da642(0x18d)][_0x1da642(0x48a)]+0x4);},Scene_MenuBase[_0x52fb7e(0x7d3)]['isMenuButtonAssistEnabled']=function(){const _0x5b393a=_0x52fb7e;return VisuMZ[_0x5b393a(0x81f)][_0x5b393a(0x2d2)][_0x5b393a(0x20a)][_0x5b393a(0x485)];},Scene_MenuBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x317)]=function(){const _0x2f392f=_0x52fb7e;return SceneManager['isSideButtonLayout']()||SceneManager[_0x2f392f(0x566)]()?VisuMZ[_0x2f392f(0x81f)][_0x2f392f(0x2d2)]['ButtonAssist']['Location']:'button';},Scene_MenuBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x5c7)]=function(){const _0xe49cfc=_0x52fb7e;if(!this[_0xe49cfc(0x406)]())return;const _0x43bee5=this['buttonAssistWindowRect']();this['_buttonAssistWindow']=new Window_ButtonAssist(_0x43bee5),this[_0xe49cfc(0x1df)](this[_0xe49cfc(0x837)]);},Scene_MenuBase['prototype'][_0x52fb7e(0x193)]=function(){const _0x486f17=_0x52fb7e;return this['getButtonAssistLocation']()===_0x486f17(0x558)?this[_0x486f17(0x7dd)]():this[_0x486f17(0x5ed)]();},Scene_MenuBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x7dd)]=function(){const _0x100f9c=_0x52fb7e,_0x1ae34a=ConfigManager['touchUI']?(Sprite_Button[_0x100f9c(0x7d3)][_0x100f9c(0x441)]()+0x6)*0x2:0x0,_0x531ebe=this['buttonY'](),_0xd45f4a=Graphics[_0x100f9c(0x1ed)]-_0x1ae34a*0x2,_0x1d0e6e=this['buttonAreaHeight']();return new Rectangle(_0x1ae34a,_0x531ebe,_0xd45f4a,_0x1d0e6e);},Scene_MenuBase[_0x52fb7e(0x7d3)]['buttonAssistWindowSideRect']=function(){const _0x1d4437=_0x52fb7e,_0x3d1a91=Graphics[_0x1d4437(0x1ed)],_0x12544a=Window_ButtonAssist[_0x1d4437(0x7d3)]['lineHeight'](),_0x4642d1=0x0;let _0x32ffc0=0x0;return this[_0x1d4437(0x317)]()===_0x1d4437(0x1e1)?_0x32ffc0=0x0:_0x32ffc0=Graphics[_0x1d4437(0x25a)]-_0x12544a,new Rectangle(_0x4642d1,_0x32ffc0,_0x3d1a91,_0x12544a);},Scene_Menu['layoutSettings']=VisuMZ['CoreEngine']['Settings'][_0x52fb7e(0x119)][_0x52fb7e(0x61e)],VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x3c2)]=Scene_Menu['prototype']['create'],Scene_Menu['prototype'][_0x52fb7e(0x49f)]=function(){const _0x4f7f2a=_0x52fb7e;VisuMZ[_0x4f7f2a(0x81f)][_0x4f7f2a(0x3c2)][_0x4f7f2a(0x809)](this),this[_0x4f7f2a(0x825)]();},Scene_Menu[_0x52fb7e(0x7d3)][_0x52fb7e(0x825)]=function(){const _0x333d83=_0x52fb7e;this['_commandWindow']&&this[_0x333d83(0x392)]['setBackgroundType'](Scene_Menu['layoutSettings'][_0x333d83(0x564)]),this[_0x333d83(0x841)]&&this['_goldWindow'][_0x333d83(0x669)](Scene_Menu[_0x333d83(0x6e5)][_0x333d83(0x6d7)]),this[_0x333d83(0x3a3)]&&this['_statusWindow'][_0x333d83(0x669)](Scene_Menu[_0x333d83(0x6e5)][_0x333d83(0x2e5)]);},Scene_Menu[_0x52fb7e(0x7d3)][_0x52fb7e(0x434)]=function(){const _0x560ca3=_0x52fb7e;return Scene_Menu[_0x560ca3(0x6e5)][_0x560ca3(0x136)][_0x560ca3(0x809)](this);},Scene_Menu[_0x52fb7e(0x7d3)]['goldWindowRect']=function(){const _0x2b22f5=_0x52fb7e;return Scene_Menu[_0x2b22f5(0x6e5)][_0x2b22f5(0x1a2)][_0x2b22f5(0x809)](this);},Scene_Menu[_0x52fb7e(0x7d3)][_0x52fb7e(0xb1)]=function(){const _0x5854bb=_0x52fb7e;return Scene_Menu[_0x5854bb(0x6e5)][_0x5854bb(0x1ef)][_0x5854bb(0x809)](this);},Scene_Item[_0x52fb7e(0x6e5)]=VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)][_0x52fb7e(0x119)][_0x52fb7e(0x4f6)],VisuMZ[_0x52fb7e(0x81f)]['Scene_Item_create']=Scene_Item[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)],Scene_Item['prototype'][_0x52fb7e(0x49f)]=function(){const _0x3d12ee=_0x52fb7e;VisuMZ['CoreEngine'][_0x3d12ee(0x503)]['call'](this),this['setCoreEngineUpdateWindowBg']();},Scene_Item[_0x52fb7e(0x7d3)]['setCoreEngineUpdateWindowBg']=function(){const _0xee7305=_0x52fb7e;this[_0xee7305(0x1b1)]&&this[_0xee7305(0x1b1)]['setBackgroundType'](Scene_Item[_0xee7305(0x6e5)]['HelpBgType']),this[_0xee7305(0x1f9)]&&this[_0xee7305(0x1f9)][_0xee7305(0x669)](Scene_Item['layoutSettings'][_0xee7305(0x5d6)]),this['_itemWindow']&&this[_0xee7305(0x527)][_0xee7305(0x669)](Scene_Item[_0xee7305(0x6e5)][_0xee7305(0x26c)]),this[_0xee7305(0x47c)]&&this['_actorWindow'][_0xee7305(0x669)](Scene_Item[_0xee7305(0x6e5)][_0xee7305(0x147)]);},Scene_Item['prototype'][_0x52fb7e(0x438)]=function(){const _0x2c2414=_0x52fb7e;return Scene_Item[_0x2c2414(0x6e5)][_0x2c2414(0x270)][_0x2c2414(0x809)](this);},Scene_Item[_0x52fb7e(0x7d3)][_0x52fb7e(0x311)]=function(){const _0x34ffe6=_0x52fb7e;return Scene_Item['layoutSettings'][_0x34ffe6(0x18a)][_0x34ffe6(0x809)](this);},Scene_Item[_0x52fb7e(0x7d3)]['itemWindowRect']=function(){const _0x535bc8=_0x52fb7e;return Scene_Item[_0x535bc8(0x6e5)][_0x535bc8(0x5ce)][_0x535bc8(0x809)](this);},Scene_Item['prototype'][_0x52fb7e(0x53a)]=function(){const _0x57915d=_0x52fb7e;return Scene_Item[_0x57915d(0x6e5)]['ActorRect']['call'](this);},Scene_Skill[_0x52fb7e(0x6e5)]=VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)]['MenuLayout'][_0x52fb7e(0x189)],VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x4f9)]=Scene_Skill[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)],Scene_Skill[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)]=function(){const _0x53bb7f=_0x52fb7e;VisuMZ[_0x53bb7f(0x81f)]['Scene_Skill_create'][_0x53bb7f(0x809)](this),this[_0x53bb7f(0x825)]();},Scene_Skill[_0x52fb7e(0x7d3)][_0x52fb7e(0x825)]=function(){const _0x436598=_0x52fb7e;this['_helpWindow']&&this[_0x436598(0x1b1)][_0x436598(0x669)](Scene_Skill[_0x436598(0x6e5)][_0x436598(0x6cc)]),this['_skillTypeWindow']&&this[_0x436598(0x6f6)][_0x436598(0x669)](Scene_Skill[_0x436598(0x6e5)]['SkillTypeBgType']),this[_0x436598(0x3a3)]&&this[_0x436598(0x3a3)][_0x436598(0x669)](Scene_Skill[_0x436598(0x6e5)][_0x436598(0x2e5)]),this[_0x436598(0x527)]&&this['_itemWindow'][_0x436598(0x669)](Scene_Skill[_0x436598(0x6e5)][_0x436598(0x26c)]),this[_0x436598(0x47c)]&&this['_actorWindow'][_0x436598(0x669)](Scene_Skill[_0x436598(0x6e5)]['ActorBgType']);},Scene_Skill[_0x52fb7e(0x7d3)][_0x52fb7e(0x438)]=function(){const _0x11d28b=_0x52fb7e;return Scene_Skill['layoutSettings'][_0x11d28b(0x270)][_0x11d28b(0x809)](this);},Scene_Skill['prototype'][_0x52fb7e(0x6e0)]=function(){const _0x3c80eb=_0x52fb7e;return Scene_Skill[_0x3c80eb(0x6e5)][_0x3c80eb(0x7be)][_0x3c80eb(0x809)](this);},Scene_Skill[_0x52fb7e(0x7d3)]['statusWindowRect']=function(){const _0x2ba6b5=_0x52fb7e;return Scene_Skill[_0x2ba6b5(0x6e5)][_0x2ba6b5(0x1ef)]['call'](this);},Scene_Skill[_0x52fb7e(0x7d3)][_0x52fb7e(0x60c)]=function(){const _0x4dc6c2=_0x52fb7e;return Scene_Skill[_0x4dc6c2(0x6e5)][_0x4dc6c2(0x5ce)]['call'](this);},Scene_Skill[_0x52fb7e(0x7d3)]['actorWindowRect']=function(){const _0x3ab6d2=_0x52fb7e;return Scene_Skill[_0x3ab6d2(0x6e5)][_0x3ab6d2(0x3f2)][_0x3ab6d2(0x809)](this);},Scene_Equip[_0x52fb7e(0x6e5)]=VisuMZ[_0x52fb7e(0x81f)]['Settings'][_0x52fb7e(0x119)][_0x52fb7e(0x2da)],VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x78c)]=Scene_Equip[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)],Scene_Equip[_0x52fb7e(0x7d3)]['create']=function(){const _0x43d471=_0x52fb7e;VisuMZ['CoreEngine'][_0x43d471(0x78c)]['call'](this),this[_0x43d471(0x825)]();},Scene_Equip['prototype'][_0x52fb7e(0x825)]=function(){const _0x2fb03d=_0x52fb7e;this[_0x2fb03d(0x1b1)]&&this[_0x2fb03d(0x1b1)]['setBackgroundType'](Scene_Equip[_0x2fb03d(0x6e5)][_0x2fb03d(0x6cc)]),this[_0x2fb03d(0x3a3)]&&this[_0x2fb03d(0x3a3)][_0x2fb03d(0x669)](Scene_Equip[_0x2fb03d(0x6e5)][_0x2fb03d(0x2e5)]),this[_0x2fb03d(0x392)]&&this[_0x2fb03d(0x392)]['setBackgroundType'](Scene_Equip['layoutSettings'][_0x2fb03d(0x564)]),this[_0x2fb03d(0x45f)]&&this[_0x2fb03d(0x45f)]['setBackgroundType'](Scene_Equip[_0x2fb03d(0x6e5)][_0x2fb03d(0x7a)]),this[_0x2fb03d(0x527)]&&this[_0x2fb03d(0x527)][_0x2fb03d(0x669)](Scene_Equip[_0x2fb03d(0x6e5)][_0x2fb03d(0x26c)]);},Scene_Equip[_0x52fb7e(0x7d3)]['helpWindowRect']=function(){const _0xd6e2e9=_0x52fb7e;return Scene_Equip[_0xd6e2e9(0x6e5)][_0xd6e2e9(0x270)][_0xd6e2e9(0x809)](this);},Scene_Equip[_0x52fb7e(0x7d3)][_0x52fb7e(0xb1)]=function(){const _0x254413=_0x52fb7e;return Scene_Equip[_0x254413(0x6e5)][_0x254413(0x1ef)]['call'](this);},Scene_Equip['prototype'][_0x52fb7e(0x434)]=function(){const _0x3472e4=_0x52fb7e;return Scene_Equip[_0x3472e4(0x6e5)][_0x3472e4(0x136)][_0x3472e4(0x809)](this);},Scene_Equip[_0x52fb7e(0x7d3)][_0x52fb7e(0x5cb)]=function(){const _0x3aba38=_0x52fb7e;return Scene_Equip['layoutSettings'][_0x3aba38(0x471)][_0x3aba38(0x809)](this);},Scene_Equip[_0x52fb7e(0x7d3)][_0x52fb7e(0x60c)]=function(){const _0x5b364c=_0x52fb7e;return Scene_Equip[_0x5b364c(0x6e5)][_0x5b364c(0x5ce)][_0x5b364c(0x809)](this);},Scene_Status[_0x52fb7e(0x6e5)]=VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)]['MenuLayout'][_0x52fb7e(0x262)],VisuMZ['CoreEngine']['Scene_Status_create']=Scene_Status[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)],Scene_Status[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)]=function(){const _0x53cc77=_0x52fb7e;VisuMZ[_0x53cc77(0x81f)]['Scene_Status_create']['call'](this),this[_0x53cc77(0x825)]();},Scene_Status[_0x52fb7e(0x7d3)][_0x52fb7e(0x825)]=function(){const _0x1492dd=_0x52fb7e;this['_profileWindow']&&this[_0x1492dd(0x600)][_0x1492dd(0x669)](Scene_Status[_0x1492dd(0x6e5)][_0x1492dd(0x202)]),this[_0x1492dd(0x3a3)]&&this['_statusWindow'][_0x1492dd(0x669)](Scene_Status['layoutSettings'][_0x1492dd(0x2e5)]),this[_0x1492dd(0x27d)]&&this['_statusParamsWindow'][_0x1492dd(0x669)](Scene_Status[_0x1492dd(0x6e5)][_0x1492dd(0x7ec)]),this[_0x1492dd(0x1bd)]&&this[_0x1492dd(0x1bd)]['setBackgroundType'](Scene_Status[_0x1492dd(0x6e5)][_0x1492dd(0x6aa)]);},Scene_Status[_0x52fb7e(0x7d3)]['profileWindowRect']=function(){const _0x4d134f=_0x52fb7e;return Scene_Status[_0x4d134f(0x6e5)][_0x4d134f(0x1e5)][_0x4d134f(0x809)](this);},Scene_Status[_0x52fb7e(0x7d3)][_0x52fb7e(0xb1)]=function(){const _0x11f440=_0x52fb7e;return Scene_Status[_0x11f440(0x6e5)][_0x11f440(0x1ef)][_0x11f440(0x809)](this);},Scene_Status['prototype'][_0x52fb7e(0x398)]=function(){const _0x3b42d4=_0x52fb7e;return Scene_Status[_0x3b42d4(0x6e5)][_0x3b42d4(0x776)][_0x3b42d4(0x809)](this);},Scene_Status[_0x52fb7e(0x7d3)][_0x52fb7e(0x5f2)]=function(){const _0x14c08a=_0x52fb7e;return Scene_Status['layoutSettings'][_0x14c08a(0x8f)][_0x14c08a(0x809)](this);},Scene_Options['layoutSettings']=VisuMZ['CoreEngine']['Settings'][_0x52fb7e(0x119)]['OptionsMenu'],VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x74a)]=Scene_Options[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)],Scene_Options[_0x52fb7e(0x7d3)]['create']=function(){const _0x330583=_0x52fb7e;VisuMZ['CoreEngine'][_0x330583(0x74a)][_0x330583(0x809)](this),this['setCoreEngineUpdateWindowBg']();},Scene_Options['prototype'][_0x52fb7e(0x825)]=function(){const _0x57cc4b=_0x52fb7e;this['_optionsWindow']&&this['_optionsWindow'][_0x57cc4b(0x669)](Scene_Options['layoutSettings']['OptionsBgType']);},Scene_Options['prototype'][_0x52fb7e(0x2e7)]=function(){const _0x1ce48e=_0x52fb7e;return Scene_Options['layoutSettings'][_0x1ce48e(0x420)]['call'](this);},Scene_Save[_0x52fb7e(0x6e5)]=VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)][_0x52fb7e(0x119)][_0x52fb7e(0x327)],Scene_Save[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)]=function(){const _0x14b5b7=_0x52fb7e;Scene_File[_0x14b5b7(0x7d3)][_0x14b5b7(0x49f)][_0x14b5b7(0x809)](this),this[_0x14b5b7(0x825)]();},Scene_Save[_0x52fb7e(0x7d3)][_0x52fb7e(0x825)]=function(){const _0x1aa710=_0x52fb7e;this[_0x1aa710(0x1b1)]&&this['_helpWindow'][_0x1aa710(0x669)](Scene_Save[_0x1aa710(0x6e5)][_0x1aa710(0x6cc)]),this[_0x1aa710(0x45c)]&&this[_0x1aa710(0x45c)]['setBackgroundType'](Scene_Save[_0x1aa710(0x6e5)]['ListBgType']);},Scene_Save[_0x52fb7e(0x7d3)][_0x52fb7e(0x438)]=function(){const _0x364179=_0x52fb7e;return Scene_Save[_0x364179(0x6e5)]['HelpRect'][_0x364179(0x809)](this);},Scene_Save[_0x52fb7e(0x7d3)][_0x52fb7e(0x300)]=function(){const _0x517f97=_0x52fb7e;return Scene_Save[_0x517f97(0x6e5)]['ListRect'][_0x517f97(0x809)](this);},Scene_Load['layoutSettings']=VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)][_0x52fb7e(0x119)][_0x52fb7e(0x50c)],Scene_Load['prototype'][_0x52fb7e(0x49f)]=function(){const _0x144deb=_0x52fb7e;Scene_File[_0x144deb(0x7d3)][_0x144deb(0x49f)]['call'](this),this[_0x144deb(0x825)]();},Scene_Load['prototype']['setCoreEngineUpdateWindowBg']=function(){const _0x4a2f57=_0x52fb7e;this[_0x4a2f57(0x1b1)]&&this[_0x4a2f57(0x1b1)][_0x4a2f57(0x669)](Scene_Load[_0x4a2f57(0x6e5)]['HelpBgType']),this[_0x4a2f57(0x45c)]&&this[_0x4a2f57(0x45c)]['setBackgroundType'](Scene_Load[_0x4a2f57(0x6e5)][_0x4a2f57(0x2c7)]);},Scene_Load[_0x52fb7e(0x7d3)][_0x52fb7e(0x438)]=function(){const _0x528439=_0x52fb7e;return Scene_Load['layoutSettings']['HelpRect'][_0x528439(0x809)](this);},Scene_Load[_0x52fb7e(0x7d3)]['listWindowRect']=function(){const _0x107ed5=_0x52fb7e;return Scene_Load['layoutSettings'][_0x107ed5(0x30b)][_0x107ed5(0x809)](this);};function Scene_QuickLoad(){const _0x391610=_0x52fb7e;this[_0x391610(0x2ce)](...arguments);}Scene_QuickLoad[_0x52fb7e(0x7d3)]=Object[_0x52fb7e(0x49f)](Scene_Load[_0x52fb7e(0x7d3)]),Scene_QuickLoad[_0x52fb7e(0x7d3)]['constructor']=Scene_QuickLoad,Scene_QuickLoad[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)]=function(){const _0x431dec=_0x52fb7e;Scene_Load[_0x431dec(0x7d3)][_0x431dec(0x2ce)][_0x431dec(0x809)](this);},Scene_QuickLoad[_0x52fb7e(0x7d3)]['create']=function(){const _0x18b1d7=_0x52fb7e;this['executeLoad'](this[_0x18b1d7(0x495)]);},Scene_QuickLoad[_0x52fb7e(0x7d3)][_0x52fb7e(0x6a)]=function(_0x423090){const _0x1d25cc=_0x52fb7e;this[_0x1d25cc(0x495)]=_0x423090;},Scene_QuickLoad[_0x52fb7e(0x7d3)][_0x52fb7e(0x82e)]=function(){const _0x13cbc3=_0x52fb7e;Scene_MenuBase[_0x13cbc3(0x7d3)]['start'][_0x13cbc3(0x809)](this);},Scene_GameEnd[_0x52fb7e(0x6e5)]=VisuMZ[_0x52fb7e(0x81f)]['Settings'][_0x52fb7e(0x119)][_0x52fb7e(0x826)],VisuMZ['CoreEngine']['Scene_GameEnd_createBackground']=Scene_GameEnd['prototype'][_0x52fb7e(0xd4)],Scene_GameEnd[_0x52fb7e(0x7d3)][_0x52fb7e(0xd4)]=function(){const _0x204b69=_0x52fb7e;Scene_MenuBase['prototype'][_0x204b69(0xd4)][_0x204b69(0x809)](this);},Scene_GameEnd['prototype'][_0x52fb7e(0x429)]=function(){const _0xc264e3=_0x52fb7e,_0x5b5f33=this[_0xc264e3(0x434)]();this[_0xc264e3(0x392)]=new Window_GameEnd(_0x5b5f33),this[_0xc264e3(0x392)][_0xc264e3(0x68a)](_0xc264e3(0x763),this[_0xc264e3(0x3c3)][_0xc264e3(0x501)](this)),this[_0xc264e3(0x1df)](this[_0xc264e3(0x392)]),this[_0xc264e3(0x392)]['setBackgroundType'](Scene_GameEnd[_0xc264e3(0x6e5)][_0xc264e3(0x564)]);},Scene_GameEnd[_0x52fb7e(0x7d3)][_0x52fb7e(0x434)]=function(){const _0x1a2a51=_0x52fb7e;return Scene_GameEnd[_0x1a2a51(0x6e5)][_0x1a2a51(0x136)][_0x1a2a51(0x809)](this);},Scene_Shop['layoutSettings']=VisuMZ[_0x52fb7e(0x81f)]['Settings'][_0x52fb7e(0x119)][_0x52fb7e(0x61c)],VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x40c)]=Scene_Shop[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)],Scene_Shop[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)]=function(){const _0x2c6027=_0x52fb7e;VisuMZ[_0x2c6027(0x81f)]['Scene_Shop_create'][_0x2c6027(0x809)](this),this[_0x2c6027(0x825)]();},Scene_Shop[_0x52fb7e(0x7d3)]['setCoreEngineUpdateWindowBg']=function(){const _0x4d7b5d=_0x52fb7e;this[_0x4d7b5d(0x1b1)]&&this[_0x4d7b5d(0x1b1)][_0x4d7b5d(0x669)](Scene_Shop['layoutSettings']['HelpBgType']),this['_goldWindow']&&this[_0x4d7b5d(0x841)][_0x4d7b5d(0x669)](Scene_Shop[_0x4d7b5d(0x6e5)]['GoldBgType']),this[_0x4d7b5d(0x392)]&&this[_0x4d7b5d(0x392)][_0x4d7b5d(0x669)](Scene_Shop[_0x4d7b5d(0x6e5)][_0x4d7b5d(0x564)]),this[_0x4d7b5d(0x5da)]&&this[_0x4d7b5d(0x5da)]['setBackgroundType'](Scene_Shop[_0x4d7b5d(0x6e5)]['DummyBgType']),this[_0x4d7b5d(0x5bf)]&&this['_numberWindow'][_0x4d7b5d(0x669)](Scene_Shop['layoutSettings'][_0x4d7b5d(0x6fa)]),this[_0x4d7b5d(0x3a3)]&&this[_0x4d7b5d(0x3a3)]['setBackgroundType'](Scene_Shop['layoutSettings'][_0x4d7b5d(0x2e5)]),this['_buyWindow']&&this[_0x4d7b5d(0x3ee)][_0x4d7b5d(0x669)](Scene_Shop[_0x4d7b5d(0x6e5)][_0x4d7b5d(0x521)]),this[_0x4d7b5d(0x1f9)]&&this[_0x4d7b5d(0x1f9)]['setBackgroundType'](Scene_Shop[_0x4d7b5d(0x6e5)][_0x4d7b5d(0x5d6)]),this[_0x4d7b5d(0x6fc)]&&this[_0x4d7b5d(0x6fc)][_0x4d7b5d(0x669)](Scene_Shop['layoutSettings']['SellBgType']);},Scene_Shop[_0x52fb7e(0x7d3)][_0x52fb7e(0x438)]=function(){const _0x71a75c=_0x52fb7e;return Scene_Shop[_0x71a75c(0x6e5)][_0x71a75c(0x270)][_0x71a75c(0x809)](this);},Scene_Shop[_0x52fb7e(0x7d3)][_0x52fb7e(0x337)]=function(){const _0x46537b=_0x52fb7e;return Scene_Shop[_0x46537b(0x6e5)][_0x46537b(0x1a2)][_0x46537b(0x809)](this);},Scene_Shop[_0x52fb7e(0x7d3)][_0x52fb7e(0x434)]=function(){const _0xab0d54=_0x52fb7e;return Scene_Shop[_0xab0d54(0x6e5)][_0xab0d54(0x136)][_0xab0d54(0x809)](this);},Scene_Shop[_0x52fb7e(0x7d3)]['dummyWindowRect']=function(){const _0x37738b=_0x52fb7e;return Scene_Shop[_0x37738b(0x6e5)][_0x37738b(0x505)][_0x37738b(0x809)](this);},Scene_Shop[_0x52fb7e(0x7d3)][_0x52fb7e(0x298)]=function(){return Scene_Shop['layoutSettings']['NumberRect']['call'](this);},Scene_Shop['prototype'][_0x52fb7e(0xb1)]=function(){const _0x7ad887=_0x52fb7e;return Scene_Shop['layoutSettings'][_0x7ad887(0x1ef)][_0x7ad887(0x809)](this);},Scene_Shop[_0x52fb7e(0x7d3)][_0x52fb7e(0x12e)]=function(){const _0x306358=_0x52fb7e;return Scene_Shop[_0x306358(0x6e5)]['BuyRect'][_0x306358(0x809)](this);},Scene_Shop[_0x52fb7e(0x7d3)]['categoryWindowRect']=function(){const _0x17bf03=_0x52fb7e;return Scene_Shop[_0x17bf03(0x6e5)][_0x17bf03(0x18a)]['call'](this);},Scene_Shop['prototype'][_0x52fb7e(0x4a0)]=function(){const _0x1194b3=_0x52fb7e;return Scene_Shop['layoutSettings'][_0x1194b3(0x723)][_0x1194b3(0x809)](this);},Scene_Name[_0x52fb7e(0x6e5)]=VisuMZ['CoreEngine'][_0x52fb7e(0x2d2)]['MenuLayout']['NameMenu'],VisuMZ['CoreEngine']['Scene_Name_create']=Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)],Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x49f)]=function(){const _0x2634e8=_0x52fb7e;VisuMZ['CoreEngine'][_0x2634e8(0x121)][_0x2634e8(0x809)](this),this[_0x2634e8(0x825)]();},Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x825)]=function(){const _0x341dde=_0x52fb7e;this[_0x341dde(0x5f8)]&&this[_0x341dde(0x5f8)][_0x341dde(0x669)](Scene_Name['layoutSettings'][_0x341dde(0x64e)]),this[_0x341dde(0x3e1)]&&this[_0x341dde(0x3e1)][_0x341dde(0x669)](Scene_Name[_0x341dde(0x6e5)]['InputBgType']);},Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x6c6)]=function(){return 0x0;},Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x291)]=function(){const _0x19293a=_0x52fb7e;return Scene_Name['layoutSettings'][_0x19293a(0x83b)][_0x19293a(0x809)](this);},Scene_Name['prototype'][_0x52fb7e(0x819)]=function(){const _0x4eae0d=_0x52fb7e;return Scene_Name['layoutSettings']['InputRect'][_0x4eae0d(0x809)](this);},Scene_Name[_0x52fb7e(0x7d3)]['EnableNameInput']=function(){const _0x3e35c5=_0x52fb7e;if(!this[_0x3e35c5(0x3e1)])return![];return VisuMZ[_0x3e35c5(0x81f)][_0x3e35c5(0x2d2)][_0x3e35c5(0x295)][_0x3e35c5(0x1fa)];},Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x417)]=function(){const _0x411421=_0x52fb7e;if(this[_0x411421(0x1fa)]()&&this[_0x411421(0x3e1)]['_mode']!==_0x411421(0x7da))return TextManager[_0x411421(0x3b5)](_0x411421(0x39d),_0x411421(0x51a));return Scene_MenuBase[_0x411421(0x7d3)]['buttonAssistKey1']['call'](this);},Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x47b)]=function(){const _0x199363=_0x52fb7e;return this[_0x199363(0x1fa)]()?TextManager[_0x199363(0x198)]('tab'):Scene_MenuBase[_0x199363(0x7d3)][_0x199363(0x47b)]['call'](this);},Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x7cb)]=function(){const _0x73491d=_0x52fb7e;if(this[_0x73491d(0x1fa)]()&&this[_0x73491d(0x3e1)][_0x73491d(0x351)]===_0x73491d(0x7da))return TextManager['makeInputButtonString']([_0x73491d(0x51e)]);return Scene_MenuBase[_0x73491d(0x7d3)][_0x73491d(0x7cb)]['call'](this);},Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x84a)]=function(){const _0xfa41c3=_0x52fb7e;if(this['EnableNameInput']()&&this[_0xfa41c3(0x3e1)]['_mode']===_0xfa41c3(0x7da))return TextManager[_0xfa41c3(0x4ea)]([_0xfa41c3(0x6db)]);return Scene_MenuBase['prototype'][_0xfa41c3(0x84a)]['call'](this);},Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x591)]=function(){const _0x52ab61=_0x52fb7e;if(this['EnableNameInput']()&&this['_inputWindow'][_0x52ab61(0x351)]!==_0x52ab61(0x7da)){const _0x68ea03=VisuMZ['CoreEngine'][_0x52ab61(0x2d2)]['KeyboardInput'];return _0x68ea03[_0x52ab61(0x828)]||_0x52ab61(0x652);}return Scene_MenuBase['prototype']['buttonAssistText1'][_0x52ab61(0x809)](this);},Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x5aa)]=function(){const _0x147c5a=_0x52fb7e;if(this['EnableNameInput']()){const _0x7d9dd7=VisuMZ[_0x147c5a(0x81f)][_0x147c5a(0x2d2)][_0x147c5a(0x295)];return this[_0x147c5a(0x3e1)]['_mode']===_0x147c5a(0x7da)?_0x7d9dd7[_0x147c5a(0x483)]||_0x147c5a(0x483):_0x7d9dd7[_0x147c5a(0x6d9)]||_0x147c5a(0x6d9);}else return Scene_MenuBase[_0x147c5a(0x7d3)]['buttonAssistText3'][_0x147c5a(0x809)](this);},Scene_Name[_0x52fb7e(0x7d3)]['buttonAssistText4']=function(){const _0x291836=_0x52fb7e;if(this[_0x291836(0x1fa)]()){const _0x14df71=VisuMZ['CoreEngine'][_0x291836(0x2d2)][_0x291836(0x295)];if(this['_inputWindow'][_0x291836(0x351)]==='keyboard')return _0x14df71[_0x291836(0x335)]||_0x291836(0x335);}return Scene_MenuBase[_0x291836(0x7d3)][_0x291836(0x355)]['call'](this);},VisuMZ[_0x52fb7e(0x81f)]['Scene_Name_onInputOk']=Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x6f7)],Scene_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x6f7)]=function(){const _0x2c2504=_0x52fb7e;this[_0x2c2504(0x8a)]()?this[_0x2c2504(0x7bb)]():VisuMZ[_0x2c2504(0x81f)][_0x2c2504(0x7a9)][_0x2c2504(0x809)](this);},Scene_Name['prototype'][_0x52fb7e(0x8a)]=function(){const _0x158299=_0x52fb7e,_0x3b1b05=VisuMZ['CoreEngine'][_0x158299(0x2d2)]['KeyboardInput'];if(!_0x3b1b05)return![];const _0x382217=_0x3b1b05[_0x158299(0xe1)];if(!_0x382217)return![];const _0xc218c0=this['_editWindow'][_0x158299(0x4e3)]()[_0x158299(0x6d1)]();for(const _0x1de37b of _0x382217){if(_0xc218c0[_0x158299(0x597)](_0x1de37b[_0x158299(0x6d1)]()))return!![];}return![];},Scene_Name[_0x52fb7e(0x7d3)]['onInputBannedWords']=function(){const _0x2f9e47=_0x52fb7e;SoundManager[_0x2f9e47(0x2ca)]();},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x5ac)]=Scene_Battle[_0x52fb7e(0x7d3)][_0x52fb7e(0x843)],Scene_Battle[_0x52fb7e(0x7d3)][_0x52fb7e(0x843)]=function(){const _0x4584fe=_0x52fb7e;VisuMZ[_0x4584fe(0x81f)][_0x4584fe(0x5ac)]['call'](this);if($gameTemp['_playTestFastMode'])this[_0x4584fe(0x743)]();},Scene_Battle[_0x52fb7e(0x7d3)][_0x52fb7e(0x743)]=function(){const _0x3d49ed=_0x52fb7e;!BattleManager[_0x3d49ed(0x2aa)]()&&!this[_0x3d49ed(0x61d)]&&!$gameMessage[_0x3d49ed(0x414)]()&&(this[_0x3d49ed(0x61d)]=!![],this[_0x3d49ed(0x843)](),SceneManager[_0x3d49ed(0x46b)](),this[_0x3d49ed(0x61d)]=![]);},VisuMZ[_0x52fb7e(0x81f)]['Scene_Battle_createCancelButton']=Scene_Battle['prototype'][_0x52fb7e(0x563)],Scene_Battle['prototype'][_0x52fb7e(0x563)]=function(){const _0x2d2ddc=_0x52fb7e;VisuMZ[_0x2d2ddc(0x81f)][_0x2d2ddc(0x80a)]['call'](this),SceneManager[_0x2d2ddc(0x6fd)]()&&this[_0x2d2ddc(0x65f)]();},Scene_Battle[_0x52fb7e(0x7d3)]['repositionCancelButtonSideButtonLayout']=function(){const _0x219fe6=_0x52fb7e;this[_0x219fe6(0x603)]['x']=Graphics[_0x219fe6(0x1ed)]+0x4,this[_0x219fe6(0x303)]()?this[_0x219fe6(0x603)]['y']=Graphics[_0x219fe6(0x25a)]-this[_0x219fe6(0x133)]():this[_0x219fe6(0x603)]['y']=0x0;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x422)]=Sprite_Button[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)],Sprite_Button[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)]=function(_0x567c46){const _0x269070=_0x52fb7e;VisuMZ[_0x269070(0x81f)][_0x269070(0x422)][_0x269070(0x809)](this,_0x567c46),this['initButtonHidden']();},Sprite_Button[_0x52fb7e(0x7d3)]['initButtonHidden']=function(){const _0x55c5a3=_0x52fb7e,_0x248664=VisuMZ[_0x55c5a3(0x81f)][_0x55c5a3(0x2d2)]['UI'];this[_0x55c5a3(0x529)]=![];switch(this[_0x55c5a3(0x79b)]){case'cancel':this['_isButtonHidden']=!_0x248664[_0x55c5a3(0x57e)];break;case'pageup':case'pagedown':this[_0x55c5a3(0x529)]=!_0x248664['pagedownShowButton'];break;case'down':case'up':case _0x55c5a3(0x3ac):case'up2':case'ok':this[_0x55c5a3(0x529)]=!_0x248664[_0x55c5a3(0x47f)];break;case _0x55c5a3(0x247):this[_0x55c5a3(0x529)]=!_0x248664[_0x55c5a3(0x276)];break;}},VisuMZ[_0x52fb7e(0x81f)]['Sprite_Button_updateOpacity']=Sprite_Button[_0x52fb7e(0x7d3)]['updateOpacity'],Sprite_Button[_0x52fb7e(0x7d3)][_0x52fb7e(0x721)]=function(){const _0x19da82=_0x52fb7e;SceneManager[_0x19da82(0x566)]()||this[_0x19da82(0x529)]?this['hideButtonFromView']():VisuMZ[_0x19da82(0x81f)]['Sprite_Button_updateOpacity'][_0x19da82(0x809)](this);},Sprite_Button[_0x52fb7e(0x7d3)][_0x52fb7e(0x100)]=function(){const _0x5f4b09=_0x52fb7e;this['visible']=![],this['opacity']=0x0,this['x']=Graphics['width']*0xa,this['y']=Graphics[_0x5f4b09(0x480)]*0xa;},VisuMZ[_0x52fb7e(0x81f)]['Sprite_Battler_startMove']=Sprite_Battler['prototype']['startMove'],Sprite_Battler[_0x52fb7e(0x7d3)][_0x52fb7e(0x784)]=function(_0x437990,_0x1a301d,_0x19ecb0){const _0xc0ec71=_0x52fb7e;(this[_0xc0ec71(0x5ad)]!==_0x437990||this['_targetOffsetY']!==_0x1a301d)&&(this[_0xc0ec71(0x23f)]('Linear'),this[_0xc0ec71(0x5b4)]=_0x19ecb0),VisuMZ[_0xc0ec71(0x81f)][_0xc0ec71(0x48e)]['call'](this,_0x437990,_0x1a301d,_0x19ecb0);},Sprite_Battler[_0x52fb7e(0x7d3)][_0x52fb7e(0x23f)]=function(_0x5395c3){const _0x138b08=_0x52fb7e;this[_0x138b08(0x1de)]=_0x5395c3;},Sprite_Battler[_0x52fb7e(0x7d3)][_0x52fb7e(0x815)]=function(){const _0x20d8ca=_0x52fb7e;if(this['_movementDuration']<=0x0)return;const _0x490a14=this[_0x20d8ca(0x35a)],_0x519eb1=this[_0x20d8ca(0x5b4)],_0x4fe3c8=this[_0x20d8ca(0x1de)];this['_offsetX']=this[_0x20d8ca(0x6e9)](this['_offsetX'],this[_0x20d8ca(0x5ad)],_0x490a14,_0x519eb1,_0x4fe3c8),this['_offsetY']=this['applyEasing'](this[_0x20d8ca(0x7d)],this['_targetOffsetY'],_0x490a14,_0x519eb1,_0x4fe3c8),this[_0x20d8ca(0x35a)]--;if(this[_0x20d8ca(0x35a)]<=0x0)this[_0x20d8ca(0x2eb)]();},Sprite_Battler[_0x52fb7e(0x7d3)]['applyEasing']=function(_0x59fa1b,_0x274cbd,_0x3cc950,_0x475a0e,_0x4f35b2){const _0x237245=_0x52fb7e,_0x42de9c=VisuMZ[_0x237245(0x4aa)]((_0x475a0e-_0x3cc950)/_0x475a0e,_0x4f35b2||'Linear'),_0x166b79=VisuMZ[_0x237245(0x4aa)]((_0x475a0e-_0x3cc950+0x1)/_0x475a0e,_0x4f35b2||_0x237245(0x58e)),_0x220304=(_0x59fa1b-_0x274cbd*_0x42de9c)/(0x1-_0x42de9c);return _0x220304+(_0x274cbd-_0x220304)*_0x166b79;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x46c)]=Sprite_Actor[_0x52fb7e(0x7d3)][_0x52fb7e(0x500)],Sprite_Actor['prototype'][_0x52fb7e(0x500)]=function(_0x54cf11){const _0x25757b=_0x52fb7e;VisuMZ[_0x25757b(0x81f)][_0x25757b(0x2d2)]['UI']['RepositionActors']?this['setActorHomeRepositioned'](_0x54cf11):VisuMZ[_0x25757b(0x81f)][_0x25757b(0x46c)][_0x25757b(0x809)](this,_0x54cf11);},Sprite_Actor[_0x52fb7e(0x7d3)]['setActorHomeRepositioned']=function(_0x4736c0){const _0x15d631=_0x52fb7e;let _0x2fffa1=Math['round'](Graphics[_0x15d631(0x48a)]/0x2+0xc0);_0x2fffa1-=Math['floor']((Graphics['width']-Graphics['boxWidth'])/0x2),_0x2fffa1+=_0x4736c0*0x20;let _0x9df1f7=Graphics[_0x15d631(0x480)]-0xc8-$gameParty['maxBattleMembers']()*0x30;_0x9df1f7-=Math[_0x15d631(0x29a)]((Graphics[_0x15d631(0x480)]-Graphics[_0x15d631(0x25a)])/0x2),_0x9df1f7+=_0x4736c0*0x30,this[_0x15d631(0x18b)](_0x2fffa1,_0x9df1f7);},Sprite_Actor[_0x52fb7e(0x7d3)][_0x52fb7e(0x359)]=function(){const _0x87946c=_0x52fb7e;this[_0x87946c(0x784)](0x4b0,0x0,0x78);},Sprite_Animation[_0x52fb7e(0x7d3)][_0x52fb7e(0x1ae)]=function(_0x58f6a4){const _0xb5d975=_0x52fb7e;this[_0xb5d975(0x366)]=_0x58f6a4;},VisuMZ['CoreEngine'][_0x52fb7e(0xf8)]=Sprite_Animation[_0x52fb7e(0x7d3)][_0x52fb7e(0x6c9)],Sprite_Animation['prototype']['processSoundTimings']=function(){const _0xfc245b=_0x52fb7e;if(this[_0xfc245b(0x366)])return;VisuMZ[_0xfc245b(0x81f)]['Sprite_Animation_processSoundTimings'][_0xfc245b(0x809)](this);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x457)]=Sprite_Animation[_0x52fb7e(0x7d3)][_0x52fb7e(0x109)],Sprite_Animation['prototype'][_0x52fb7e(0x109)]=function(_0x14d314){const _0x25470b=_0x52fb7e;this['isAnimationOffsetXMirrored']()?this[_0x25470b(0x1b2)](_0x14d314):VisuMZ[_0x25470b(0x81f)][_0x25470b(0x457)][_0x25470b(0x809)](this,_0x14d314);},Sprite_Animation[_0x52fb7e(0x7d3)][_0x52fb7e(0x42f)]=function(){const _0x4bed6d=_0x52fb7e;if(!this[_0x4bed6d(0x473)])return![];const _0x96b189=this[_0x4bed6d(0x473)][_0x4bed6d(0x4e3)]||'';if(_0x96b189[_0x4bed6d(0xec)](/<MIRROR OFFSET X>/i))return!![];if(_0x96b189[_0x4bed6d(0xec)](/<NO MIRROR OFFSET X>/i))return![];return VisuMZ[_0x4bed6d(0x81f)][_0x4bed6d(0x2d2)][_0x4bed6d(0x30e)][_0x4bed6d(0x82f)];},Sprite_Animation[_0x52fb7e(0x7d3)][_0x52fb7e(0x1b2)]=function(_0x115aff){const _0x3f48ae=_0x52fb7e,_0x36fc6c=this['_viewportSize'],_0x303776=this['_viewportSize'],_0x155353=this['_animation']['offsetX']*(this[_0x3f48ae(0x11a)]?-0x1:0x1)-_0x36fc6c/0x2,_0xecc832=this[_0x3f48ae(0x473)][_0x3f48ae(0x152)]-_0x303776/0x2,_0x3482b8=this[_0x3f48ae(0x15a)](_0x115aff);_0x115aff['gl'][_0x3f48ae(0x526)](_0x155353+_0x3482b8['x'],_0xecc832+_0x3482b8['y'],_0x36fc6c,_0x303776);},Sprite_Animation[_0x52fb7e(0x7d3)][_0x52fb7e(0x6e2)]=function(_0x10c583){const _0x183647=_0x52fb7e;if(_0x10c583[_0x183647(0x54b)]){}const _0x3d0e9a=this[_0x183647(0x473)]['name'];let _0x2c4bb6=_0x10c583[_0x183647(0x480)]*_0x10c583['scale']['y'],_0x4f14c0=0x0,_0x40e4af=-_0x2c4bb6/0x2;if(_0x3d0e9a[_0x183647(0xec)](/<(?:HEAD|HEADER|TOP)>/i))_0x40e4af=-_0x2c4bb6;if(_0x3d0e9a['match'](/<(?:FOOT|FOOTER|BOTTOM)>/i))_0x40e4af=0x0;if(this[_0x183647(0x473)]['alignBottom'])_0x40e4af=0x0;if(_0x3d0e9a['match'](/<(?:LEFT)>/i))_0x4f14c0=-_0x10c583[_0x183647(0x48a)]/0x2;if(_0x3d0e9a[_0x183647(0xec)](/<(?:RIGHT)>/i))_0x4f14c0=_0x10c583[_0x183647(0x48a)]/0x2;_0x3d0e9a[_0x183647(0xec)](/<ANCHOR X:[ ](\d+\.?\d*)>/i)&&(_0x4f14c0=Number(RegExp['$1'])*_0x10c583[_0x183647(0x48a)]);_0x3d0e9a[_0x183647(0xec)](/<ANCHOR Y:[ ](\d+\.?\d*)>/i)&&(_0x40e4af=(0x1-Number(RegExp['$1']))*-_0x2c4bb6);_0x3d0e9a[_0x183647(0xec)](/<ANCHOR:[ ](\d+\.?\d*),[ ](\d+\.?\d*)>/i)&&(_0x4f14c0=Number(RegExp['$1'])*_0x10c583['width'],_0x40e4af=(0x1-Number(RegExp['$2']))*-_0x2c4bb6);if(_0x3d0e9a[_0x183647(0xec)](/<OFFSET X:[ ]([\+\-]\d+)>/i))_0x4f14c0+=Number(RegExp['$1']);if(_0x3d0e9a[_0x183647(0xec)](/<OFFSET Y:[ ]([\+\-]\d+)>/i))_0x40e4af+=Number(RegExp['$1']);_0x3d0e9a[_0x183647(0xec)](/<OFFSET:[ ]([\+\-]\d+),[ ]([\+\-]\d+)>/i)&&(_0x4f14c0+=Number(RegExp['$1']),_0x40e4af+=Number(RegExp['$2']));const _0x417a93=new Point(_0x4f14c0,_0x40e4af);return _0x10c583['updateTransform'](),_0x10c583[_0x183647(0x686)]['apply'](_0x417a93);},Sprite_AnimationMV[_0x52fb7e(0x7d3)][_0x52fb7e(0x234)]=function(){const _0x50b09c=_0x52fb7e;this['_rate']=VisuMZ[_0x50b09c(0x81f)][_0x50b09c(0x2d2)]['QoL'][_0x50b09c(0x827)]??0x4,this[_0x50b09c(0x348)](),this[_0x50b09c(0x717)]=this[_0x50b09c(0x717)][_0x50b09c(0x7e4)](0x1,0xa);},Sprite_AnimationMV['prototype'][_0x52fb7e(0x348)]=function(){const _0xc4d389=_0x52fb7e;if(!this['_animation']);const _0x16c0ef=this['_animation'][_0xc4d389(0x4e3)]||'';_0x16c0ef[_0xc4d389(0xec)](/<RATE:[ ](\d+)>/i)&&(this['_rate']=(Number(RegExp['$1'])||0x1)['clamp'](0x1,0xa));},Sprite_AnimationMV[_0x52fb7e(0x7d3)]['setMute']=function(_0xbc6cec){const _0x6c2025=_0x52fb7e;this[_0x6c2025(0x366)]=_0xbc6cec;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x19d)]=Sprite_AnimationMV[_0x52fb7e(0x7d3)][_0x52fb7e(0xc3)],Sprite_AnimationMV[_0x52fb7e(0x7d3)][_0x52fb7e(0xc3)]=function(_0x1a95ad){const _0x11a15c=_0x52fb7e;this[_0x11a15c(0x366)]&&(_0x1a95ad=JsonEx[_0x11a15c(0x2cb)](_0x1a95ad),_0x1a95ad['se']&&(_0x1a95ad['se'][_0x11a15c(0x674)]=0x0)),VisuMZ[_0x11a15c(0x81f)][_0x11a15c(0x19d)][_0x11a15c(0x809)](this,_0x1a95ad);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x1dc)]=Sprite_AnimationMV[_0x52fb7e(0x7d3)][_0x52fb7e(0x6ec)],Sprite_AnimationMV['prototype'][_0x52fb7e(0x6ec)]=function(){const _0x490705=_0x52fb7e;VisuMZ[_0x490705(0x81f)][_0x490705(0x1dc)][_0x490705(0x809)](this);if(this[_0x490705(0x473)]['position']===0x3){if(this['x']===0x0)this['x']=Math['round'](Graphics[_0x490705(0x48a)]/0x2);if(this['y']===0x0)this['y']=Math[_0x490705(0x679)](Graphics[_0x490705(0x480)]/0x2);}},Sprite_Damage['prototype'][_0x52fb7e(0x36c)]=function(_0x595fe2){const _0x134a2e=_0x52fb7e;let _0x22f15e=Math['abs'](_0x595fe2)[_0x134a2e(0x14a)]();this[_0x134a2e(0x433)]()&&(_0x22f15e=VisuMZ[_0x134a2e(0x777)](_0x22f15e));const _0x20430b=this[_0x134a2e(0xd1)](),_0x2ed9b1=Math[_0x134a2e(0x29a)](_0x20430b*0.75);for(let _0x2dabff=0x0;_0x2dabff<_0x22f15e[_0x134a2e(0x7e7)];_0x2dabff++){const _0x7873b6=this[_0x134a2e(0x4d2)](_0x2ed9b1,_0x20430b);_0x7873b6[_0x134a2e(0x2f5)][_0x134a2e(0x9a)](_0x22f15e[_0x2dabff],0x0,0x0,_0x2ed9b1,_0x20430b,'center'),_0x7873b6['x']=(_0x2dabff-(_0x22f15e[_0x134a2e(0x7e7)]-0x1)/0x2)*_0x2ed9b1,_0x7873b6['dy']=-_0x2dabff;}},Sprite_Damage[_0x52fb7e(0x7d3)][_0x52fb7e(0x433)]=function(){const _0x81707d=_0x52fb7e;return VisuMZ[_0x81707d(0x81f)]['Settings'][_0x81707d(0x30e)]['DigitGroupingDamageSprites'];},Sprite_Damage[_0x52fb7e(0x7d3)][_0x52fb7e(0x31d)]=function(){const _0xa79771=_0x52fb7e;return ColorManager[_0xa79771(0x4c2)]();},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x629)]=Sprite_Gauge['prototype'][_0x52fb7e(0x306)],Sprite_Gauge[_0x52fb7e(0x7d3)][_0x52fb7e(0x306)]=function(){const _0xa546f8=_0x52fb7e;return VisuMZ[_0xa546f8(0x81f)][_0xa546f8(0x629)]['call'](this)[_0xa546f8(0x7e4)](0x0,0x1);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x4fa)]=Sprite_Gauge[_0x52fb7e(0x7d3)][_0x52fb7e(0x4d6)],Sprite_Gauge['prototype'][_0x52fb7e(0x4d6)]=function(){const _0x5d931f=_0x52fb7e;let _0x4ca374=VisuMZ[_0x5d931f(0x81f)][_0x5d931f(0x4fa)][_0x5d931f(0x809)](this);return _0x4ca374;},Sprite_Gauge[_0x52fb7e(0x7d3)][_0x52fb7e(0x390)]=function(){const _0x37cb87=_0x52fb7e;let _0x251585=this['currentValue']();this['useDigitGrouping']()&&(_0x251585=VisuMZ['GroupDigits'](_0x251585));const _0x392702=this['bitmapWidth']()-0x1,_0x5cf17a=this['textHeight']?this[_0x37cb87(0x52e)]():this[_0x37cb87(0x2ef)]();this['setupValueFont'](),this['bitmap'][_0x37cb87(0x9a)](_0x251585,0x0,0x0,_0x392702,_0x5cf17a,_0x37cb87(0x10f));},Sprite_Gauge[_0x52fb7e(0x7d3)][_0x52fb7e(0x553)]=function(){return 0x3;},Sprite_Gauge[_0x52fb7e(0x7d3)][_0x52fb7e(0x433)]=function(){const _0x2fd0f7=_0x52fb7e;return VisuMZ['CoreEngine'][_0x2fd0f7(0x2d2)][_0x2fd0f7(0x30e)][_0x2fd0f7(0x520)];},Sprite_Gauge[_0x52fb7e(0x7d3)][_0x52fb7e(0x31d)]=function(){const _0x5df397=_0x52fb7e;return ColorManager[_0x5df397(0xa5)]();},Sprite_StateIcon[_0x52fb7e(0x79e)]=VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)]['UI']['StateIconsNonFrame']??!![],VisuMZ[_0x52fb7e(0x81f)]['Sprite_StateIcon_loadBitmap']=Sprite_StateIcon['prototype'][_0x52fb7e(0x325)],Sprite_StateIcon[_0x52fb7e(0x7d3)][_0x52fb7e(0x325)]=function(){const _0x1a7aa2=_0x52fb7e;Sprite_StateIcon[_0x1a7aa2(0x79e)]?this[_0x1a7aa2(0x199)]():VisuMZ[_0x1a7aa2(0x81f)][_0x1a7aa2(0x833)][_0x1a7aa2(0x809)](this);},Sprite_StateIcon[_0x52fb7e(0x7d3)][_0x52fb7e(0x199)]=function(){const _0x2eaebb=_0x52fb7e;this['bitmap']=new Bitmap(ImageManager[_0x2eaebb(0x32f)],ImageManager[_0x2eaebb(0xae)]),this[_0x2eaebb(0x540)]=ImageManager['loadSystem'](_0x2eaebb(0x3f8));},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x63f)]=Sprite_StateIcon['prototype'][_0x52fb7e(0x3ad)],Sprite_StateIcon[_0x52fb7e(0x7d3)][_0x52fb7e(0x3ad)]=function(){const _0xcb8a14=_0x52fb7e;Sprite_StateIcon[_0xcb8a14(0x79e)]?this[_0xcb8a14(0x528)]():VisuMZ[_0xcb8a14(0x81f)][_0xcb8a14(0x63f)][_0xcb8a14(0x809)](this);},Sprite_StateIcon['prototype'][_0x52fb7e(0x528)]=function(){const _0x201f03=_0x52fb7e;if(this[_0x201f03(0x570)]===this[_0x201f03(0x632)])return;this[_0x201f03(0x570)]=this[_0x201f03(0x632)];const _0x47f0ca=ImageManager['iconWidth'],_0x50c8e0=ImageManager[_0x201f03(0xae)],_0x2cde5f=this[_0x201f03(0x632)]%0x10*_0x47f0ca,_0x575381=Math[_0x201f03(0x29a)](this[_0x201f03(0x632)]/0x10)*_0x50c8e0,_0x28b0cf=this['_srcBitmap'],_0x395ba2=this[_0x201f03(0x2f5)];_0x395ba2[_0x201f03(0x17a)](),_0x395ba2[_0x201f03(0x813)](_0x28b0cf,_0x2cde5f,_0x575381,_0x47f0ca,_0x50c8e0,0x0,0x0,_0x395ba2[_0x201f03(0x48a)],_0x395ba2[_0x201f03(0x480)]);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x373)]=Sprite_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x325)],Sprite_Picture[_0x52fb7e(0x7d3)]['loadBitmap']=function(){const _0x23afed=_0x52fb7e;this[_0x23afed(0x56c)]&&this[_0x23afed(0x56c)]['match'](/VisuMZ CoreEngine PictureIcon (\d+)/i)?this[_0x23afed(0x97)](Number(RegExp['$1'])):VisuMZ[_0x23afed(0x81f)][_0x23afed(0x373)][_0x23afed(0x809)](this);},Sprite_Picture['prototype'][_0x52fb7e(0x97)]=function(_0x2d1c8c){const _0x41725d=_0x52fb7e,_0x3889e0=ImageManager['iconWidth'],_0x881423=ImageManager[_0x41725d(0xae)],_0x47a80b=this[_0x41725d(0x56c)][_0x41725d(0xec)](/SMOOTH/i);this[_0x41725d(0x2f5)]=new Bitmap(_0x3889e0,_0x881423);const _0x7d2e7f=ImageManager['loadSystem'](_0x41725d(0x3f8)),_0x2dd745=_0x2d1c8c%0x10*_0x3889e0,_0x25ba86=Math[_0x41725d(0x29a)](_0x2d1c8c/0x10)*_0x881423;this['bitmap'][_0x41725d(0x4b5)]=_0x47a80b,this[_0x41725d(0x2f5)]['blt'](_0x7d2e7f,_0x2dd745,_0x25ba86,_0x3889e0,_0x881423,0x0,0x0,_0x3889e0,_0x881423);};function Sprite_TitlePictureButton(){const _0x50cbd8=_0x52fb7e;this[_0x50cbd8(0x2ce)](...arguments);}Sprite_TitlePictureButton[_0x52fb7e(0x7d3)]=Object[_0x52fb7e(0x49f)](Sprite_Clickable[_0x52fb7e(0x7d3)]),Sprite_TitlePictureButton[_0x52fb7e(0x7d3)][_0x52fb7e(0x14b)]=Sprite_TitlePictureButton,Sprite_TitlePictureButton[_0x52fb7e(0x7d3)]['initialize']=function(_0x232d91){const _0x2632c6=_0x52fb7e;Sprite_Clickable['prototype'][_0x2632c6(0x2ce)][_0x2632c6(0x809)](this),this[_0x2632c6(0x7e2)]=_0x232d91,this[_0x2632c6(0x3a0)]=null,this[_0x2632c6(0x3d0)]();},Sprite_TitlePictureButton['prototype'][_0x52fb7e(0x3d0)]=function(){const _0x253875=_0x52fb7e;this['x']=Graphics['width'],this['y']=Graphics['height'],this['visible']=![],this[_0x253875(0x637)]();},Sprite_TitlePictureButton[_0x52fb7e(0x7d3)]['setupButtonImage']=function(){const _0x1669ad=_0x52fb7e;this[_0x1669ad(0x2f5)]=ImageManager[_0x1669ad(0x218)](this[_0x1669ad(0x7e2)][_0x1669ad(0x464)]),this[_0x1669ad(0x2f5)][_0x1669ad(0x2ab)](this[_0x1669ad(0x264)][_0x1669ad(0x501)](this));},Sprite_TitlePictureButton[_0x52fb7e(0x7d3)][_0x52fb7e(0x264)]=function(){const _0x5f45c2=_0x52fb7e;this['_data'][_0x5f45c2(0x70a)][_0x5f45c2(0x809)](this),this[_0x5f45c2(0x7e2)][_0x5f45c2(0x660)][_0x5f45c2(0x809)](this),this['setClickHandler'](this[_0x5f45c2(0x7e2)][_0x5f45c2(0x519)][_0x5f45c2(0x501)](this));},Sprite_TitlePictureButton[_0x52fb7e(0x7d3)][_0x52fb7e(0x843)]=function(){const _0x4b0bfb=_0x52fb7e;Sprite_Clickable[_0x4b0bfb(0x7d3)][_0x4b0bfb(0x843)]['call'](this),this['updateOpacity'](),this[_0x4b0bfb(0x551)]();},Sprite_TitlePictureButton[_0x52fb7e(0x7d3)]['fadeSpeed']=function(){const _0x4726f6=_0x52fb7e;return VisuMZ[_0x4726f6(0x81f)][_0x4726f6(0x2d2)]['MenuLayout']['Title'][_0x4726f6(0x332)];},Sprite_TitlePictureButton[_0x52fb7e(0x7d3)]['updateOpacity']=function(){const _0xc09c41=_0x52fb7e;this[_0xc09c41(0x2b3)]||this[_0xc09c41(0x27e)]?this[_0xc09c41(0xf7)]=0xff:(this[_0xc09c41(0xf7)]+=this[_0xc09c41(0x599)]?this[_0xc09c41(0xc5)]():-0x1*this['fadeSpeed'](),this['opacity']=Math[_0xc09c41(0x661)](0xc0,this[_0xc09c41(0xf7)]));},Sprite_TitlePictureButton[_0x52fb7e(0x7d3)][_0x52fb7e(0x7ac)]=function(_0x48fc74){this['_clickHandler']=_0x48fc74;},Sprite_TitlePictureButton[_0x52fb7e(0x7d3)][_0x52fb7e(0x4c6)]=function(){const _0x20fcfc=_0x52fb7e;this['_clickHandler']&&this[_0x20fcfc(0x3a0)]();};function Sprite_ExtendedTile(){const _0x241c5e=_0x52fb7e;this[_0x241c5e(0x2ce)](...arguments);}Sprite_ExtendedTile[_0x52fb7e(0x7d3)]=Object[_0x52fb7e(0x49f)](Sprite[_0x52fb7e(0x7d3)]),Sprite_ExtendedTile[_0x52fb7e(0x7d3)][_0x52fb7e(0x14b)]=Sprite_ExtendedTile,Sprite_ExtendedTile['prototype'][_0x52fb7e(0x2ce)]=function(_0x22ec26,_0x37367b,_0x3d18cb,_0x114466){const _0x302612=_0x52fb7e;this[_0x302612(0x7db)]=Game_CharacterBase[_0x302612(0x56d)]||-0x6,this[_0x302612(0x55b)]=_0x22ec26,this[_0x302612(0x742)]=_0x37367b,this[_0x302612(0x6c7)]=_0x3d18cb,this[_0x302612(0x334)]=_0x114466,Sprite[_0x302612(0x7d3)]['initialize'][_0x302612(0x809)](this),this[_0x302612(0xdc)](),this[_0x302612(0x53f)](),this[_0x302612(0x123)](),this[_0x302612(0x843)]();},Sprite_ExtendedTile['prototype'][_0x52fb7e(0xdc)]=function(){const _0x2f518e=_0x52fb7e;this['_tileSprite']=new Sprite(),this[_0x2f518e(0xca)][_0x2f518e(0x1ab)]['x']=0.5,this['_tileSprite']['anchor']['y']=0x1,this['_tileSprite']['y']=-this[_0x2f518e(0x7db)]+0x1,this[_0x2f518e(0x70e)](this[_0x2f518e(0xca)]);},Sprite_ExtendedTile[_0x52fb7e(0x7d3)][_0x52fb7e(0x53f)]=function(){const _0x1b902f=_0x52fb7e,_0x3bd972=$gameMap[_0x1b902f(0x6a8)](),_0xb2696a=0x5+Math['floor'](this['_tile']/0x100);this[_0x1b902f(0xca)][_0x1b902f(0x2f5)]=ImageManager['loadTileset'](_0x3bd972[_0x1b902f(0x1c2)][_0xb2696a]);},Sprite_ExtendedTile[_0x52fb7e(0x7d3)][_0x52fb7e(0x123)]=function(){const _0x45e608=_0x52fb7e,_0x28d6f1=this[_0x45e608(0x6c7)],_0xc17a9c=$gameMap['tileWidth'](),_0x315763=$gameMap[_0x45e608(0x7fc)](),_0x52b913=(Math[_0x45e608(0x29a)](_0x28d6f1/0x80)%0x2*0x8+_0x28d6f1%0x8)*_0xc17a9c,_0x20b985=Math['floor'](_0x28d6f1%0x100/0x8)%0x10*_0x315763,_0xe62e76=this[_0x45e608(0x334)]*_0x315763;this[_0x45e608(0xca)][_0x45e608(0x5e3)](_0x52b913,_0x20b985-_0xe62e76,_0xc17a9c,_0x315763+_0xe62e76);},Sprite_ExtendedTile[_0x52fb7e(0x7d3)][_0x52fb7e(0x843)]=function(){const _0x24d4da=_0x52fb7e;Sprite[_0x24d4da(0x7d3)][_0x24d4da(0x843)][_0x24d4da(0x809)](this),this[_0x24d4da(0x6ec)]();},Sprite_ExtendedTile[_0x52fb7e(0x7d3)][_0x52fb7e(0x6ec)]=function(){const _0x16c9b5=_0x52fb7e,_0x25f3f9=$gameMap[_0x16c9b5(0xd6)](),_0x35e351=$gameMap['tileHeight'](),_0x4fd0ec=this[_0x16c9b5(0x55b)],_0x5d2bae=this['_mapY'];this['x']=Math['floor'](($gameMap['adjustX'](_0x4fd0ec)+0.5)*_0x25f3f9),this['y']=Math[_0x16c9b5(0x29a)](($gameMap['adjustY'](_0x5d2bae)+0x1)*_0x35e351)+this['_shiftY']-0x1;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x7f0)]=Spriteset_Base[_0x52fb7e(0x7d3)]['initialize'],Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)]=function(){const _0x4130f4=_0x52fb7e;VisuMZ[_0x4130f4(0x81f)][_0x4130f4(0x7f0)][_0x4130f4(0x809)](this),this[_0x4130f4(0x15d)]();},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x15d)]=function(){const _0x59d9ca=_0x52fb7e;this['_fauxAnimationSprites']=[],this[_0x59d9ca(0x7b5)]=[],this['_cacheScaleX']=this[_0x59d9ca(0x41a)]['x'],this[_0x59d9ca(0x4e7)]=this['scale']['y'];},VisuMZ[_0x52fb7e(0x81f)]['Spriteset_Base_destroy']=Spriteset_Base['prototype'][_0x52fb7e(0x6a5)],Spriteset_Base['prototype']['destroy']=function(_0x100657){const _0x3488e6=_0x52fb7e;this[_0x3488e6(0x182)](),this[_0x3488e6(0x783)](),VisuMZ[_0x3488e6(0x81f)]['Spriteset_Base_destroy'][_0x3488e6(0x809)](this,_0x100657);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x32d)]=Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x843)],Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x843)]=function(){const _0x210a09=_0x52fb7e;VisuMZ[_0x210a09(0x81f)]['Spriteset_Base_update']['call'](this),this[_0x210a09(0x656)](),this[_0x210a09(0x5e9)](),this['updateFauxAnimations'](),this[_0x210a09(0x48c)]();},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x656)]=function(){},Spriteset_Base[_0x52fb7e(0x7d3)]['updatePictureAntiZoom']=function(){const _0x18a426=_0x52fb7e;if(!VisuMZ[_0x18a426(0x81f)][_0x18a426(0x2d2)][_0x18a426(0x30e)][_0x18a426(0x83c)])return;if(this[_0x18a426(0x5f9)]===this[_0x18a426(0x41a)]['x']&&this['_cacheScaleY']===this['scale']['y'])return;this[_0x18a426(0x493)](),this[_0x18a426(0x5f9)]=this[_0x18a426(0x41a)]['x'],this['_cacheScaleY']=this['scale']['y'];},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x493)]=function(){const _0x1306b9=_0x52fb7e;if(SceneManager['isSceneMap']()&&Spriteset_Map[_0x1306b9(0x6dc)])return;else{if(SceneManager[_0x1306b9(0x3d6)]()&&Spriteset_Battle['DETACH_PICTURE_CONTAINER'])return;}this['scale']['x']!==0x0&&(this[_0x1306b9(0x27c)][_0x1306b9(0x41a)]['x']=0x1/this[_0x1306b9(0x41a)]['x'],this[_0x1306b9(0x27c)]['x']=-(this['x']/this[_0x1306b9(0x41a)]['x'])),this[_0x1306b9(0x41a)]['y']!==0x0&&(this[_0x1306b9(0x27c)][_0x1306b9(0x41a)]['y']=0x1/this['scale']['y'],this[_0x1306b9(0x27c)]['y']=-(this['y']/this['scale']['y']));},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x4c9)]=Spriteset_Base['prototype'][_0x52fb7e(0x6ec)],Spriteset_Base['prototype'][_0x52fb7e(0x6ec)]=function(){const _0x53a113=_0x52fb7e;VisuMZ[_0x53a113(0x81f)][_0x53a113(0x4c9)]['call'](this),this[_0x53a113(0x1ca)]();},Spriteset_Base['prototype'][_0x52fb7e(0x1ca)]=function(){const _0x5c0d9d=_0x52fb7e;if(!$gameScreen)return;if($gameScreen['_shakeDuration']<=0x0)return;this['x']-=Math[_0x5c0d9d(0x679)]($gameScreen['shake']());const _0x41d933=$gameScreen[_0x5c0d9d(0x29e)]();switch($gameScreen[_0x5c0d9d(0x29e)]()){case'original':this[_0x5c0d9d(0x2c6)]();break;case _0x5c0d9d(0x7d7):this[_0x5c0d9d(0x7d8)]();break;case _0x5c0d9d(0x684):this['updatePositionCoreEngineShakeVert']();break;default:this[_0x5c0d9d(0x321)]();break;}},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x2c6)]=function(){const _0x42c0e8=_0x52fb7e,_0x4a3364=VisuMZ['CoreEngine'][_0x42c0e8(0x2d2)]['ScreenShake'];if(_0x4a3364&&_0x4a3364['originalJS'])return _0x4a3364[_0x42c0e8(0x754)][_0x42c0e8(0x809)](this);this['x']+=Math[_0x42c0e8(0x679)]($gameScreen[_0x42c0e8(0x89)]());},Spriteset_Base[_0x52fb7e(0x7d3)]['updatePositionCoreEngineShakeRand']=function(){const _0x5514ce=_0x52fb7e,_0x130ee4=VisuMZ['CoreEngine'][_0x5514ce(0x2d2)][_0x5514ce(0x67f)];if(_0x130ee4&&_0x130ee4[_0x5514ce(0x72b)])return _0x130ee4[_0x5514ce(0x72b)]['call'](this);const _0x294738=$gameScreen[_0x5514ce(0x2c3)]*0.75,_0xe0d8a4=$gameScreen[_0x5514ce(0x830)]*0.6,_0x1d63ba=$gameScreen['_shakeDuration'];this['x']+=Math[_0x5514ce(0x679)](Math[_0x5514ce(0x738)](_0x294738)-Math[_0x5514ce(0x738)](_0xe0d8a4))*(Math[_0x5514ce(0x661)](_0x1d63ba,0x1e)*0.5),this['y']+=Math[_0x5514ce(0x679)](Math['randomInt'](_0x294738)-Math['randomInt'](_0xe0d8a4))*(Math[_0x5514ce(0x661)](_0x1d63ba,0x1e)*0.5);},Spriteset_Base[_0x52fb7e(0x7d3)]['updatePositionCoreEngineShakeHorz']=function(){const _0x21e167=_0x52fb7e,_0x46641b=VisuMZ['CoreEngine'][_0x21e167(0x2d2)]['ScreenShake'];if(_0x46641b&&_0x46641b[_0x21e167(0x710)])return _0x46641b['horzJS'][_0x21e167(0x809)](this);const _0x3ac92a=$gameScreen[_0x21e167(0x2c3)]*0.75,_0x288414=$gameScreen['_shakeSpeed']*0.6,_0x2cc0fb=$gameScreen[_0x21e167(0x409)];this['x']+=Math[_0x21e167(0x679)](Math['randomInt'](_0x3ac92a)-Math['randomInt'](_0x288414))*(Math[_0x21e167(0x661)](_0x2cc0fb,0x1e)*0.5);},Spriteset_Base[_0x52fb7e(0x7d3)]['updatePositionCoreEngineShakeVert']=function(){const _0x402979=_0x52fb7e,_0x2c68e7=VisuMZ[_0x402979(0x81f)][_0x402979(0x2d2)]['ScreenShake'];if(_0x2c68e7&&_0x2c68e7[_0x402979(0x716)])return _0x2c68e7[_0x402979(0x716)][_0x402979(0x809)](this);const _0x25d480=$gameScreen[_0x402979(0x2c3)]*0.75,_0x28c683=$gameScreen[_0x402979(0x830)]*0.6,_0x47fb96=$gameScreen['_shakeDuration'];this['y']+=Math[_0x402979(0x679)](Math[_0x402979(0x738)](_0x25d480)-Math[_0x402979(0x738)](_0x28c683))*(Math[_0x402979(0x661)](_0x47fb96,0x1e)*0.5);},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x23e)]=function(){const _0x48c3c1=_0x52fb7e;for(const _0x53899b of this[_0x48c3c1(0xf1)]){!_0x53899b[_0x48c3c1(0x662)]()&&this[_0x48c3c1(0x1db)](_0x53899b);}this['processFauxAnimationRequests']();},Spriteset_Base['prototype'][_0x52fb7e(0x215)]=function(){const _0x44aa74=_0x52fb7e;for(;;){const _0x53caf5=$gameTemp[_0x44aa74(0x765)]();if(_0x53caf5)this['createFauxAnimation'](_0x53caf5);else break;}},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x6b0)]=function(_0x17931a){const _0x715efb=_0x52fb7e,_0x1a81fd=$dataAnimations[_0x17931a[_0x715efb(0x331)]],_0xc0ad3d=_0x17931a[_0x715efb(0x488)],_0x441b1c=_0x17931a[_0x715efb(0x25e)],_0x579c0a=_0x17931a['mute'];let _0x4ecc1f=this[_0x715efb(0x322)]();const _0x3a6f17=this['animationNextDelay']();if(this[_0x715efb(0x4e1)](_0x1a81fd))for(const _0x44ed05 of _0xc0ad3d){this[_0x715efb(0x20f)]([_0x44ed05],_0x1a81fd,_0x441b1c,_0x4ecc1f,_0x579c0a),_0x4ecc1f+=_0x3a6f17;}else this[_0x715efb(0x20f)](_0xc0ad3d,_0x1a81fd,_0x441b1c,_0x4ecc1f,_0x579c0a);},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x5e7)]=function(_0x53aed0,_0x506d0a,_0x34acce,_0x3aec4f){const _0x4f3c13=_0x52fb7e,_0x25d237=this[_0x4f3c13(0x74b)](_0x506d0a),_0x10b560=new(_0x25d237?Sprite_AnimationMV:Sprite_Animation)(),_0x308e3e=this['makeTargetSprites'](_0x53aed0),_0x1406dc=this[_0x4f3c13(0x322)](),_0x389fe9=_0x3aec4f>_0x1406dc?this[_0x4f3c13(0x24e)]():null;this[_0x4f3c13(0x587)](_0x53aed0[0x0])&&(_0x34acce=!_0x34acce),_0x10b560['targetObjects']=_0x53aed0,_0x10b560[_0x4f3c13(0x3d0)](_0x308e3e,_0x506d0a,_0x34acce,_0x3aec4f,_0x389fe9),this['addAnimationSpriteToContainer'](_0x10b560),this['_animationSprites'][_0x4f3c13(0x52a)](_0x10b560);},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x20f)]=function(_0x28e447,_0x1dd847,_0x5ecf49,_0x50eecb,_0xa26b5){const _0x11f091=_0x52fb7e,_0x366756=this[_0x11f091(0x74b)](_0x1dd847),_0x15964a=new(_0x366756?Sprite_AnimationMV:Sprite_Animation)(),_0x589e97=this[_0x11f091(0xe3)](_0x28e447);this[_0x11f091(0x587)](_0x28e447[0x0])&&(_0x5ecf49=!_0x5ecf49);_0x15964a[_0x11f091(0x6ed)]=_0x28e447,_0x15964a['setup'](_0x589e97,_0x1dd847,_0x5ecf49,_0x50eecb),_0x15964a[_0x11f091(0x1ae)](_0xa26b5),this[_0x11f091(0x580)](_0x15964a);if(this['_animationSprites'])this[_0x11f091(0x356)][_0x11f091(0x7d1)](_0x15964a);this[_0x11f091(0xf1)][_0x11f091(0x52a)](_0x15964a);},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x580)]=function(_0x3d08c2){const _0x1a853b=_0x52fb7e;this[_0x1a853b(0x177)]['addChild'](_0x3d08c2);},Spriteset_Base[_0x52fb7e(0x7d3)]['removeAnimation']=function(_0x72a817){const _0x5b51d8=_0x52fb7e;this[_0x5b51d8(0x356)][_0x5b51d8(0x7d1)](_0x72a817),this['removeAnimationFromContainer'](_0x72a817);for(const _0x5318bb of _0x72a817['targetObjects']){_0x5318bb['endAnimation']&&_0x5318bb[_0x5b51d8(0x772)]();}_0x72a817['destroy']();},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x1db)]=function(_0x531fff){const _0xf3ef48=_0x52fb7e;this['_fauxAnimationSprites'][_0xf3ef48(0x7d1)](_0x531fff),this[_0xf3ef48(0x25b)](_0x531fff);for(const _0x1c4db2 of _0x531fff['targetObjects']){_0x1c4db2[_0xf3ef48(0x772)]&&_0x1c4db2[_0xf3ef48(0x772)]();}_0x531fff[_0xf3ef48(0x6a5)]();},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x25b)]=function(_0x20a999){const _0x2054d8=_0x52fb7e;this[_0x2054d8(0x177)][_0x2054d8(0x793)](_0x20a999);},Spriteset_Base['prototype'][_0x52fb7e(0x182)]=function(){const _0xd0f981=_0x52fb7e;for(const _0x16fcf1 of this[_0xd0f981(0xf1)]){this[_0xd0f981(0x1db)](_0x16fcf1);}},Spriteset_Base[_0x52fb7e(0x7d3)]['isFauxAnimationPlaying']=function(){const _0x91f8a6=_0x52fb7e;return this[_0x91f8a6(0xf1)]['length']>0x0;},Spriteset_Base[_0x52fb7e(0x7d3)]['updatePointAnimations']=function(){const _0x508920=_0x52fb7e;for(const _0x1f8e07 of this[_0x508920(0x7b5)]){!_0x1f8e07[_0x508920(0x662)]()&&this['removePointAnimation'](_0x1f8e07);}this['processPointAnimationRequests']();},Spriteset_Base[_0x52fb7e(0x7d3)]['processPointAnimationRequests']=function(){const _0x28ffe2=_0x52fb7e;for(;;){const _0x580431=$gameTemp[_0x28ffe2(0x69b)]();if(_0x580431)this[_0x28ffe2(0x5f1)](_0x580431);else break;}},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x5f1)]=function(_0x289801){const _0x440c04=_0x52fb7e,_0x1bdd0c=$dataAnimations[_0x289801[_0x440c04(0x331)]],_0x228dc7=this[_0x440c04(0x794)](_0x289801),_0x33a94e=_0x289801[_0x440c04(0x25e)],_0x4eef7b=_0x289801[_0x440c04(0x5de)];let _0x5703ff=this[_0x440c04(0x322)]();const _0x76d985=this[_0x440c04(0x31a)]();if(this[_0x440c04(0x4e1)](_0x1bdd0c))for(const _0x3f6174 of _0x228dc7){this['createPointAnimationSprite']([_0x3f6174],_0x1bdd0c,_0x33a94e,_0x5703ff,_0x4eef7b),_0x5703ff+=_0x76d985;}else this[_0x440c04(0xaf)](_0x228dc7,_0x1bdd0c,_0x33a94e,_0x5703ff,_0x4eef7b);},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x794)]=function(_0x484a3a){const _0x3ab46c=_0x52fb7e,_0x11c173=new Sprite_Clickable(),_0x48e916=this[_0x3ab46c(0x1a9)]();_0x11c173['x']=_0x484a3a['x']-_0x48e916['x'],_0x11c173['y']=_0x484a3a['y']-_0x48e916['y'],_0x11c173['z']=0x64;const _0x1c89b7=this['getPointAnimationLayer']();return _0x1c89b7[_0x3ab46c(0x70e)](_0x11c173),[_0x11c173];},Spriteset_Base[_0x52fb7e(0x7d3)]['getPointAnimationLayer']=function(){return this;},Spriteset_Map[_0x52fb7e(0x7d3)]['getPointAnimationLayer']=function(){const _0x54f6a4=_0x52fb7e;return this[_0x54f6a4(0x172)]||this;},Spriteset_Battle['prototype'][_0x52fb7e(0x1a9)]=function(){const _0x3bf7fb=_0x52fb7e;return this[_0x3bf7fb(0x3ed)]||this;},Spriteset_Base['prototype'][_0x52fb7e(0xaf)]=function(_0x114a05,_0x92d7be,_0xcdffeb,_0x585484,_0x33ca5d){const _0x4f6a86=_0x52fb7e,_0x121ada=this[_0x4f6a86(0x74b)](_0x92d7be),_0x51b274=new(_0x121ada?Sprite_AnimationMV:Sprite_Animation)();_0x51b274[_0x4f6a86(0x6ed)]=_0x114a05,_0x51b274['setup'](_0x114a05,_0x92d7be,_0xcdffeb,_0x585484),_0x51b274['setMute'](_0x33ca5d),this[_0x4f6a86(0x580)](_0x51b274),this[_0x4f6a86(0x7b5)][_0x4f6a86(0x52a)](_0x51b274);},Spriteset_Base['prototype'][_0x52fb7e(0xd0)]=function(_0x3d8d14){const _0x1a3347=_0x52fb7e;this[_0x1a3347(0x7b5)]['remove'](_0x3d8d14),this[_0x1a3347(0x177)]['removeChild'](_0x3d8d14);for(const _0x3bf2c0 of _0x3d8d14[_0x1a3347(0x6ed)]){_0x3bf2c0[_0x1a3347(0x772)]&&_0x3bf2c0[_0x1a3347(0x772)]();const _0x5ae7be=this[_0x1a3347(0x1a9)]();if(_0x5ae7be)_0x5ae7be[_0x1a3347(0x793)](_0x3bf2c0);}_0x3d8d14[_0x1a3347(0x6a5)]();},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x783)]=function(){const _0x17466c=_0x52fb7e;for(const _0x4f6532 of this[_0x17466c(0x7b5)]){this[_0x17466c(0xd0)](_0x4f6532);}},Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x33b)]=function(){const _0x5765cc=_0x52fb7e;return this['_pointAnimationSprites'][_0x5765cc(0x7e7)]>0x0;},VisuMZ[_0x52fb7e(0x81f)]['Spriteset_Base_isAnimationPlaying']=Spriteset_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x57d)],Spriteset_Base['prototype']['isAnimationPlaying']=function(){const _0x4dd0b8=_0x52fb7e;return VisuMZ[_0x4dd0b8(0x81f)][_0x4dd0b8(0x11f)]['call'](this)||this['isPointAnimationPlaying']();},Spriteset_Map[_0x52fb7e(0x6dc)]=VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)][_0x52fb7e(0x30e)]['DetachMapPictureContainer']||![],VisuMZ['CoreEngine']['Scene_Map_createSpriteset_detach']=Scene_Map[_0x52fb7e(0x7d3)]['createSpriteset'],Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x62d)]=function(){const _0x3999d9=_0x52fb7e;VisuMZ[_0x3999d9(0x81f)]['Scene_Map_createSpriteset_detach']['call'](this);if(!Spriteset_Map[_0x3999d9(0x6dc)])return;const _0x2c8562=this[_0x3999d9(0x667)];if(!_0x2c8562)return;this[_0x3999d9(0x27c)]=_0x2c8562[_0x3999d9(0x27c)];if(!this[_0x3999d9(0x27c)])return;this[_0x3999d9(0x70e)](this[_0x3999d9(0x27c)]);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x590)]=Spriteset_Map[_0x52fb7e(0x7d3)]['createTilemap'],Spriteset_Map[_0x52fb7e(0x7d3)]['createTilemap']=function(){const _0x44eeae=_0x52fb7e;VisuMZ[_0x44eeae(0x81f)]['Spriteset_Map_createTilemap'][_0x44eeae(0x809)](this),this[_0x44eeae(0x379)]();},Spriteset_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x379)]=function(){const _0x5afc53=_0x52fb7e,_0x5ae31e=$gameMap[_0x5afc53(0x6a8)]();if(!_0x5ae31e)return;const _0x4cf238=$gameMap[_0x5afc53(0x53c)]();if(Object['keys'](_0x4cf238)[_0x5afc53(0x7e7)]<=0x0)return;const _0x56bc7=$gameMap[_0x5afc53(0x7e6)]();this[_0x5afc53(0x557)]=this[_0x5afc53(0x557)]||[];for(let _0x54f29f=0x0;_0x54f29f<$gameMap[_0x5afc53(0x480)]();_0x54f29f++){for(let _0x264732=0x0;_0x264732<$gameMap[_0x5afc53(0x48a)]();_0x264732++){for(const _0x10f2fd of $gameMap['layeredTiles'](_0x264732,_0x54f29f)){const _0xdfc9ae=_0x56bc7[_0x10f2fd]>>0xc,_0x2a8929=_0x4cf238[_0xdfc9ae]||0x0;if(_0x2a8929<=0x0)continue;this[_0x5afc53(0xe6)](_0x264732,_0x54f29f,_0x10f2fd,_0x2a8929);}}}},Spriteset_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x2bd)]=function(){const _0x510f49=_0x52fb7e;this[_0x510f49(0x557)]=this[_0x510f49(0x557)]||[];for(const _0x42d8b3 of this[_0x510f49(0x557)]){this[_0x510f49(0x172)]['removeChild'](_0x42d8b3);}this[_0x510f49(0x557)]=[];},Spriteset_Map['prototype'][_0x52fb7e(0xe6)]=function(_0x13e2c1,_0xcfccdb,_0x313644,_0x3e03e7){const _0x2b7d00=_0x52fb7e,_0x588220=new Sprite_ExtendedTile(_0x13e2c1,_0xcfccdb,_0x313644,_0x3e03e7),_0x3d092b=$gameMap[_0x2b7d00(0x7e6)]();_0x3d092b[_0x313644]&0x10?_0x588220['z']=0x4:_0x588220['z']=0x3,this[_0x2b7d00(0x172)]['addChild'](_0x588220),this[_0x2b7d00(0x557)][_0x2b7d00(0x52a)](_0x588220);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x3bc)]=Tilemap[_0x52fb7e(0x7d3)]['_addSpotTile'],Tilemap[_0x52fb7e(0x7d3)][_0x52fb7e(0x612)]=function(_0xe51dfb,_0x54466e,_0x271bd1){const _0x43009f=_0x52fb7e;if($gameMap[_0x43009f(0x3ab)](_0xe51dfb))return;VisuMZ['CoreEngine'][_0x43009f(0x3bc)][_0x43009f(0x809)](this,_0xe51dfb,_0x54466e,_0x271bd1);},Spriteset_Battle[_0x52fb7e(0x6dc)]=VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)][_0x52fb7e(0x30e)][_0x52fb7e(0x1c3)]||![],VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x7c4)]=Scene_Battle['prototype'][_0x52fb7e(0x62d)],Scene_Battle[_0x52fb7e(0x7d3)]['createSpriteset']=function(){const _0x54f3dd=_0x52fb7e;VisuMZ[_0x54f3dd(0x81f)][_0x54f3dd(0x7c4)][_0x54f3dd(0x809)](this);if(!Spriteset_Battle[_0x54f3dd(0x6dc)])return;const _0x20588f=this[_0x54f3dd(0x667)];if(!_0x20588f)return;this[_0x54f3dd(0x27c)]=_0x20588f['_pictureContainer'];if(!this[_0x54f3dd(0x27c)])return;this[_0x54f3dd(0x70e)](this['_pictureContainer']);},Spriteset_Battle[_0x52fb7e(0x7d3)][_0x52fb7e(0xd4)]=function(){const _0x51e587=_0x52fb7e;this[_0x51e587(0x124)]=new PIXI['filters'][(_0x51e587(0x164))](clamp=!![]),this[_0x51e587(0x6b4)]=new Sprite(),this[_0x51e587(0x6b4)][_0x51e587(0x2f5)]=SceneManager[_0x51e587(0x6f2)](),this[_0x51e587(0x6b4)][_0x51e587(0x705)]=[this['_backgroundFilter']],this[_0x51e587(0x4c8)][_0x51e587(0x70e)](this[_0x51e587(0x6b4)]);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x7f)]=Spriteset_Battle[_0x52fb7e(0x7d3)]['createEnemies'],Spriteset_Battle['prototype'][_0x52fb7e(0x12d)]=function(){const _0x4f7762=_0x52fb7e;this[_0x4f7762(0x605)]()&&this[_0x4f7762(0x2c0)](),VisuMZ[_0x4f7762(0x81f)][_0x4f7762(0x7f)][_0x4f7762(0x809)](this);},Spriteset_Battle[_0x52fb7e(0x7d3)]['coreEngineRepositionEnemies']=function(){const _0x4c7d1a=_0x52fb7e,_0x4713cd=VisuMZ[_0x4c7d1a(0x81f)][_0x4c7d1a(0x2d2)]['ScreenResolution'];if(!_0x4713cd)return![];if(Utils['RPGMAKER_VERSION']>=_0x4c7d1a(0x5e5)&&!_0x4713cd[_0x4c7d1a(0x646)])return![];return _0x4713cd[_0x4c7d1a(0x3f4)];},Spriteset_Battle['prototype']['repositionEnemiesByResolution']=function(){const _0x2824c2=_0x52fb7e;for(member of $gameTroop['members']()){member[_0x2824c2(0x37b)]();}},VisuMZ[_0x52fb7e(0x81f)]['Window_Base_initialize']=Window_Base['prototype'][_0x52fb7e(0x2ce)],Window_Base['prototype'][_0x52fb7e(0x2ce)]=function(_0x2682d6){const _0x9258ec=_0x52fb7e;_0x2682d6['x']=Math['round'](_0x2682d6['x']),_0x2682d6['y']=Math['round'](_0x2682d6['y']),_0x2682d6[_0x9258ec(0x48a)]=Math[_0x9258ec(0x679)](_0x2682d6['width']),_0x2682d6['height']=Math[_0x9258ec(0x679)](_0x2682d6[_0x9258ec(0x480)]),this['initDigitGrouping'](),VisuMZ[_0x9258ec(0x81f)][_0x9258ec(0x802)]['call'](this,_0x2682d6),this['initCoreEasing']();},Window_Base[_0x52fb7e(0x7d3)]['initDigitGrouping']=function(){const _0x17ca25=_0x52fb7e;this[_0x17ca25(0x33f)]=VisuMZ[_0x17ca25(0x81f)][_0x17ca25(0x2d2)][_0x17ca25(0x30e)][_0x17ca25(0x83)],this['_digitGroupingEx']=VisuMZ[_0x17ca25(0x81f)]['Settings'][_0x17ca25(0x30e)][_0x17ca25(0x1bc)];},Window_Base['prototype'][_0x52fb7e(0x633)]=function(){const _0x25865d=_0x52fb7e;return VisuMZ[_0x25865d(0x81f)][_0x25865d(0x2d2)][_0x25865d(0xeb)][_0x25865d(0x3e5)];},Window_Base['prototype'][_0x52fb7e(0x138)]=function(){const _0x14768c=_0x52fb7e;return VisuMZ[_0x14768c(0x81f)]['Settings'][_0x14768c(0xeb)][_0x14768c(0xc6)];},Window_Base[_0x52fb7e(0x7d3)]['updateBackOpacity']=function(){const _0x64f0dc=_0x52fb7e;$gameSystem[_0x64f0dc(0x523)]?this[_0x64f0dc(0x186)]=$gameSystem[_0x64f0dc(0x523)]():this[_0x64f0dc(0x186)]=VisuMZ[_0x64f0dc(0x81f)][_0x64f0dc(0x2d2)][_0x64f0dc(0xeb)][_0x64f0dc(0x4e6)];},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x4cd)]=function(){const _0x3bfc31=_0x52fb7e;return VisuMZ[_0x3bfc31(0x81f)][_0x3bfc31(0x2d2)][_0x3bfc31(0xeb)][_0x3bfc31(0x69a)];},Window_Base['prototype']['openingSpeed']=function(){const _0x2c0395=_0x52fb7e;return VisuMZ[_0x2c0395(0x81f)][_0x2c0395(0x2d2)][_0x2c0395(0xeb)][_0x2c0395(0x15f)];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x4de)]=Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x843)],Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x843)]=function(){const _0x32abfb=_0x52fb7e;VisuMZ[_0x32abfb(0x81f)][_0x32abfb(0x4de)][_0x32abfb(0x809)](this),this[_0x32abfb(0x73a)]();},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x6d4)]=function(){const _0x25617f=_0x52fb7e;this['_opening']&&(this[_0x25617f(0x3a2)]+=this['openingSpeed'](),this['isOpen']()&&(this['_opening']=![]));},Window_Base[_0x52fb7e(0x7d3)]['updateClose']=function(){const _0x2c4fbc=_0x52fb7e;this[_0x2c4fbc(0x559)]&&(this[_0x2c4fbc(0x3a2)]-=this['openingSpeed'](),this[_0x2c4fbc(0x40b)]()&&(this[_0x2c4fbc(0x559)]=![]));},VisuMZ['CoreEngine'][_0x52fb7e(0x64f)]=Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x9a)],Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x9a)]=function(_0x21fe09,_0x3e02d6,_0x34e485,_0x918809,_0x454437){const _0x2f00e2=_0x52fb7e;if(this[_0x2f00e2(0x433)]())_0x21fe09=VisuMZ[_0x2f00e2(0x777)](_0x21fe09);VisuMZ[_0x2f00e2(0x81f)]['Window_Base_drawText']['call'](this,_0x21fe09,_0x3e02d6,_0x34e485,_0x918809,_0x454437);},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x433)]=function(){const _0xb62ae2=_0x52fb7e;return this[_0xb62ae2(0x33f)];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x770)]=Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x4c7)],Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x4c7)]=function(_0x3b7db1,_0x177335,_0x20f452,_0xb6690a){const _0x192ed3=_0x52fb7e;var _0xe04589=VisuMZ[_0x192ed3(0x81f)]['Window_Base_createTextState'][_0x192ed3(0x809)](this,_0x3b7db1,_0x177335,_0x20f452,_0xb6690a);if(this[_0x192ed3(0x190)]())_0xe04589[_0x192ed3(0x5e4)]=String(VisuMZ[_0x192ed3(0x777)](_0xe04589[_0x192ed3(0x5e4)]))||'';return _0xe04589;},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x190)]=function(){const _0x6dfc67=_0x52fb7e;return this[_0x6dfc67(0x58d)];},Window_Base['prototype'][_0x52fb7e(0x3b9)]=function(_0xc96d45){const _0x1890c4=_0x52fb7e;this[_0x1890c4(0x33f)]=_0xc96d45;},Window_Base['prototype']['enableDigitGroupingEx']=function(_0x3a4476){this['_digitGroupingEx']=_0x3a4476;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x3b0)]=Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x66c)],Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x66c)]=function(_0x28d9ae,_0x396e2e,_0x5f4ca7){const _0x2e00e8=_0x52fb7e;_0x396e2e=Math[_0x2e00e8(0x679)](_0x396e2e),_0x5f4ca7=Math[_0x2e00e8(0x679)](_0x5f4ca7),VisuMZ[_0x2e00e8(0x81f)]['Window_Base_drawIcon'][_0x2e00e8(0x809)](this,_0x28d9ae,_0x396e2e,_0x5f4ca7);},VisuMZ['CoreEngine'][_0x52fb7e(0x19f)]=Window_Base[_0x52fb7e(0x7d3)]['drawFace'],Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x581)]=function(_0x16ecf0,_0xb2cf5,_0x611477,_0xa0a519,_0x117cac,_0x32e734){const _0x760dc=_0x52fb7e;_0x117cac=_0x117cac||ImageManager[_0x760dc(0x58c)],_0x32e734=_0x32e734||ImageManager[_0x760dc(0x228)],_0x611477=Math[_0x760dc(0x679)](_0x611477),_0xa0a519=Math[_0x760dc(0x679)](_0xa0a519),_0x117cac=Math[_0x760dc(0x679)](_0x117cac),_0x32e734=Math[_0x760dc(0x679)](_0x32e734),VisuMZ[_0x760dc(0x81f)][_0x760dc(0x19f)]['call'](this,_0x16ecf0,_0xb2cf5,_0x611477,_0xa0a519,_0x117cac,_0x32e734);},VisuMZ[_0x52fb7e(0x81f)]['Window_Base_drawCharacter']=Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x5c9)],Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x5c9)]=function(_0x312fdb,_0x1c6d0c,_0x442cb7,_0xc2c6e0){const _0x53b684=_0x52fb7e;_0x442cb7=Math[_0x53b684(0x679)](_0x442cb7),_0xc2c6e0=Math['round'](_0xc2c6e0),VisuMZ[_0x53b684(0x81f)][_0x53b684(0x7eb)][_0x53b684(0x809)](this,_0x312fdb,_0x1c6d0c,_0x442cb7,_0xc2c6e0);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x6cf)]=Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x427)],Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x427)]=function(_0x4f83c9){const _0x2e321b=_0x52fb7e;let _0x1e34f3=VisuMZ[_0x2e321b(0x81f)][_0x2e321b(0x6cf)]['call'](this,_0x4f83c9);return _0x1e34f3['x']=Math[_0x2e321b(0x679)](_0x1e34f3['x']),_0x1e34f3['y']=Math[_0x2e321b(0x679)](_0x1e34f3['y']),_0x1e34f3[_0x2e321b(0x48a)]=Math[_0x2e321b(0x679)](_0x1e34f3[_0x2e321b(0x48a)]),_0x1e34f3['height']=Math[_0x2e321b(0x679)](_0x1e34f3[_0x2e321b(0x480)]),_0x1e34f3;},VisuMZ['CoreEngine'][_0x52fb7e(0x2a6)]=Window_StatusBase[_0x52fb7e(0x7d3)]['drawActorSimpleStatus'],Window_StatusBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x7ae)]=function(_0x3e7672,_0x4f715c,_0x3e51cc){const _0x7aafa5=_0x52fb7e;_0x4f715c=Math[_0x7aafa5(0x679)](_0x4f715c),_0x3e51cc=Math[_0x7aafa5(0x679)](_0x3e51cc),VisuMZ[_0x7aafa5(0x81f)]['Window_StatusBase_drawActorSimpleStatus'][_0x7aafa5(0x809)](this,_0x3e7672,_0x4f715c,_0x3e51cc);},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x796)]=function(){const _0x6fc451=_0x52fb7e;this['_coreEasing']={'duration':0x0,'wholeDuration':0x0,'type':_0x6fc451(0x554),'targetX':this['x'],'targetY':this['y'],'targetScaleX':this[_0x6fc451(0x41a)]['x'],'targetScaleY':this['scale']['y'],'targetOpacity':this[_0x6fc451(0xf7)],'targetBackOpacity':this[_0x6fc451(0x186)],'targetContentsOpacity':this[_0x6fc451(0x4ce)]};},Window_Base['prototype']['updateCoreEasing']=function(){const _0x4be9c8=_0x52fb7e;if(!this[_0x4be9c8(0x28b)])return;if(this[_0x4be9c8(0x28b)][_0x4be9c8(0x640)]<=0x0)return;this['x']=this[_0x4be9c8(0x44a)](this['x'],this[_0x4be9c8(0x28b)][_0x4be9c8(0x67e)]),this['y']=this[_0x4be9c8(0x44a)](this['y'],this['_coreEasing'][_0x4be9c8(0x4a3)]),this[_0x4be9c8(0x41a)]['x']=this[_0x4be9c8(0x44a)](this[_0x4be9c8(0x41a)]['x'],this[_0x4be9c8(0x28b)][_0x4be9c8(0x492)]),this[_0x4be9c8(0x41a)]['y']=this['applyCoreEasing'](this[_0x4be9c8(0x41a)]['y'],this[_0x4be9c8(0x28b)][_0x4be9c8(0x5e8)]),this[_0x4be9c8(0xf7)]=this[_0x4be9c8(0x44a)](this[_0x4be9c8(0xf7)],this[_0x4be9c8(0x28b)][_0x4be9c8(0x5c1)]),this['backOpacity']=this[_0x4be9c8(0x44a)](this[_0x4be9c8(0x186)],this[_0x4be9c8(0x28b)][_0x4be9c8(0x561)]),this[_0x4be9c8(0x4ce)]=this[_0x4be9c8(0x44a)](this[_0x4be9c8(0x4ce)],this['_coreEasing'][_0x4be9c8(0x376)]),this[_0x4be9c8(0x28b)]['duration']--;},Window_Base['prototype'][_0x52fb7e(0x44a)]=function(_0x5c18dd,_0x177e1b){const _0x21a7da=_0x52fb7e;if(!this[_0x21a7da(0x28b)])return _0x177e1b;const _0x4f4baf=this['_coreEasing'][_0x21a7da(0x640)],_0x1d7cb2=this[_0x21a7da(0x28b)][_0x21a7da(0x425)],_0x3141a0=this[_0x21a7da(0x1c4)]((_0x1d7cb2-_0x4f4baf)/_0x1d7cb2),_0x17c031=this[_0x21a7da(0x1c4)]((_0x1d7cb2-_0x4f4baf+0x1)/_0x1d7cb2),_0x3869ee=(_0x5c18dd-_0x177e1b*_0x3141a0)/(0x1-_0x3141a0);return _0x3869ee+(_0x177e1b-_0x3869ee)*_0x17c031;},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x1c4)]=function(_0x1855fe){const _0x460a20=_0x52fb7e;if(!this[_0x460a20(0x28b)])return _0x1855fe;return VisuMZ['ApplyEasing'](_0x1855fe,this[_0x460a20(0x28b)]['type']||_0x460a20(0x554));},Window_Base[_0x52fb7e(0x7d3)]['anchorCoreEasing']=function(_0x4a9194,_0x4ff2a7){const _0x51367e=_0x52fb7e;if(!this[_0x51367e(0x28b)])return;this['x']=this[_0x51367e(0x28b)][_0x51367e(0x67e)],this['y']=this[_0x51367e(0x28b)][_0x51367e(0x4a3)],this[_0x51367e(0x41a)]['x']=this[_0x51367e(0x28b)]['targetScaleX'],this[_0x51367e(0x41a)]['y']=this['_coreEasing'][_0x51367e(0x5e8)],this[_0x51367e(0xf7)]=this['_coreEasing']['targetOpacity'],this[_0x51367e(0x186)]=this['_coreEasing'][_0x51367e(0x561)],this[_0x51367e(0x4ce)]=this[_0x51367e(0x28b)][_0x51367e(0x376)],this[_0x51367e(0x286)](_0x4a9194,_0x4ff2a7,this['x'],this['y'],this[_0x51367e(0x41a)]['x'],this[_0x51367e(0x41a)]['y'],this[_0x51367e(0xf7)],this[_0x51367e(0x186)],this['contentsOpacity']);},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x286)]=function(_0x39ca0a,_0x21e10d,_0x36dcd2,_0x598860,_0x133da0,_0x4a4a80,_0x7410bc,_0xa86e38,_0x25d0ae){const _0x1fd5a5=_0x52fb7e;this[_0x1fd5a5(0x28b)]={'duration':_0x39ca0a,'wholeDuration':_0x39ca0a,'type':_0x21e10d,'targetX':_0x36dcd2,'targetY':_0x598860,'targetScaleX':_0x133da0,'targetScaleY':_0x4a4a80,'targetOpacity':_0x7410bc,'targetBackOpacity':_0xa86e38,'targetContentsOpacity':_0x25d0ae};},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x750)]=function(_0xfa885f,_0x14fef3,_0x4d09a3,_0x4eee6a,_0x44143d){const _0x26f7f8=_0x52fb7e;this[_0x26f7f8(0x23b)](),this[_0x26f7f8(0x6f8)][_0x26f7f8(0xd1)]=VisuMZ[_0x26f7f8(0x81f)][_0x26f7f8(0x2d2)][_0x26f7f8(0x4db)]['GoldFontSize'];const _0x1f8f38=VisuMZ[_0x26f7f8(0x81f)]['Settings'][_0x26f7f8(0x4db)][_0x26f7f8(0x13b)];if(_0x1f8f38>0x0&&_0x14fef3===TextManager[_0x26f7f8(0x393)]){const _0x13762f=_0x4eee6a+(this[_0x26f7f8(0x633)]()-ImageManager[_0x26f7f8(0xae)])/0x2;this['drawIcon'](_0x1f8f38,_0x4d09a3+(_0x44143d-ImageManager[_0x26f7f8(0x32f)]),_0x13762f),_0x44143d-=ImageManager[_0x26f7f8(0x32f)]+0x4;}else this['changeTextColor'](ColorManager['systemColor']()),this[_0x26f7f8(0x9a)](_0x14fef3,_0x4d09a3,_0x4eee6a,_0x44143d,_0x26f7f8(0x10f)),_0x44143d-=this['textWidth'](_0x14fef3)+0x6;this[_0x26f7f8(0xb0)]();const _0x493191=this[_0x26f7f8(0x3e3)](this['_digitGrouping']?VisuMZ['GroupDigits'](_0xfa885f):_0xfa885f);_0x493191>_0x44143d?this[_0x26f7f8(0x9a)](VisuMZ[_0x26f7f8(0x81f)]['Settings'][_0x26f7f8(0x4db)][_0x26f7f8(0x66d)],_0x4d09a3,_0x4eee6a,_0x44143d,_0x26f7f8(0x10f)):this[_0x26f7f8(0x9a)](_0xfa885f,_0x4d09a3,_0x4eee6a,_0x44143d,_0x26f7f8(0x10f)),this[_0x26f7f8(0x23b)]();},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x5f3)]=function(_0x26fa94,_0x48a141,_0x811828,_0x12db28,_0x2064e4){const _0x2c322a=_0x52fb7e,_0x55502f=ImageManager[_0x2c322a(0x2e9)](_0x2c322a(0x3f8)),_0x5e9ace=ImageManager['iconWidth'],_0x4c6052=ImageManager[_0x2c322a(0xae)],_0x1d0e9e=_0x26fa94%0x10*_0x5e9ace,_0x1260d4=Math[_0x2c322a(0x29a)](_0x26fa94/0x10)*_0x4c6052,_0x4aaf58=_0x12db28,_0x5f52d6=_0x12db28;this['contents'][_0x2c322a(0x259)][_0x2c322a(0x2e0)]=_0x2064e4,this[_0x2c322a(0x6f8)][_0x2c322a(0x813)](_0x55502f,_0x1d0e9e,_0x1260d4,_0x5e9ace,_0x4c6052,_0x48a141,_0x811828,_0x4aaf58,_0x5f52d6),this['contents'][_0x2c322a(0x259)][_0x2c322a(0x2e0)]=!![];},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x76b)]=function(_0x419df4,_0x3e3fc2,_0x379a66,_0x3a7ad4,_0x2bb9da,_0x5405b2){const _0x4983d1=_0x52fb7e,_0x68da36=Math[_0x4983d1(0x29a)]((_0x379a66-0x2)*_0x3a7ad4),_0x111c11=Sprite_Gauge[_0x4983d1(0x7d3)][_0x4983d1(0x4d0)][_0x4983d1(0x809)](this),_0x161198=_0x3e3fc2+this['lineHeight']()-_0x111c11-0x2;this[_0x4983d1(0x6f8)]['fillRect'](_0x419df4,_0x161198,_0x379a66,_0x111c11,ColorManager['gaugeBackColor']()),this[_0x4983d1(0x6f8)]['gradientFillRect'](_0x419df4+0x1,_0x161198+0x1,_0x68da36,_0x111c11-0x2,_0x2bb9da,_0x5405b2);},Window_Scrollable[_0x52fb7e(0x1a0)]={'enabled':VisuMZ[_0x52fb7e(0x81f)]['Settings'][_0x52fb7e(0xeb)][_0x52fb7e(0x77d)]??!![],'thickness':VisuMZ['CoreEngine'][_0x52fb7e(0x2d2)][_0x52fb7e(0xeb)]['BarThickness']??0x2,'offset':VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)][_0x52fb7e(0xeb)][_0x52fb7e(0x610)]??0x2,'bodyColor':VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)][_0x52fb7e(0xeb)][_0x52fb7e(0x302)]??0x0,'offColor':VisuMZ['CoreEngine'][_0x52fb7e(0x2d2)]['Window'][_0x52fb7e(0x5ba)]??0x7,'offOpacity':VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)][_0x52fb7e(0xeb)][_0x52fb7e(0x227)]??0x80},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x702)]=function(){const _0x2c391f=_0x52fb7e;return Window_Scrollable[_0x2c391f(0x1a0)][_0x2c391f(0x609)]&&Window_Scrollable['SCROLLBAR'][_0x2c391f(0x700)]>0x0;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x401)]=Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x297)],Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x297)]=function(){const _0x1faef8=_0x52fb7e;VisuMZ['CoreEngine'][_0x1faef8(0x401)]['call'](this),this[_0x1faef8(0x707)](),this[_0x1faef8(0x135)](!![]),this['setupScrollBarBitmap'](![]);},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x707)]=function(){const _0x3e90f0=_0x52fb7e;if(!this[_0x3e90f0(0x702)]())return;if(this[_0x3e90f0(0x676)]||this[_0x3e90f0(0x4cf)])return;this[_0x3e90f0(0xe8)]={'horz':null,'vert':null,'maxHorz':null,'maxVert':null},this[_0x3e90f0(0x676)]=new Sprite(),this[_0x3e90f0(0x4cf)]=new Sprite(),this[_0x3e90f0(0x70e)](this[_0x3e90f0(0x676)]),this[_0x3e90f0(0x70e)](this['_scrollBarVert']);},Window_Base[_0x52fb7e(0x7d3)]['setupScrollBarBitmap']=function(_0x4457e5){const _0x41b738=_0x52fb7e,_0x307b3f=_0x4457e5?this[_0x41b738(0x676)]:this[_0x41b738(0x4cf)];if(!_0x307b3f)return;const _0xbb01bc=Window_Scrollable[_0x41b738(0x1a0)],_0x3af199=_0xbb01bc[_0x41b738(0x700)],_0x5f0c7e=_0x4457e5?this['innerWidth']-_0x3af199*0x2:_0x3af199,_0x3d7e54=_0x4457e5?_0x3af199:this[_0x41b738(0x543)]-_0x3af199*0x2;_0x307b3f['bitmap']=new Bitmap(_0x5f0c7e,_0x3d7e54),_0x307b3f['setFrame'](0x0,0x0,_0x5f0c7e,_0x3d7e54),this[_0x41b738(0x404)](_0x4457e5);},VisuMZ[_0x52fb7e(0x81f)]['Window_Base_destroyContents']=Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x39b)],Window_Base['prototype']['destroyContents']=function(){const _0x363317=_0x52fb7e;VisuMZ[_0x363317(0x81f)][_0x363317(0x534)][_0x363317(0x809)](this),this['destroyScrollBarBitmaps']();},Window_Base[_0x52fb7e(0x7d3)]['destroyScrollBarBitmaps']=function(){const _0x212af8=_0x52fb7e,_0xb21c48=[this[_0x212af8(0x676)],this['_scrollBarVert']];for(const _0xd919f of _0xb21c48){if(_0xd919f&&_0xd919f[_0x212af8(0x2f5)])_0xd919f['bitmap']['destroy']();}},VisuMZ['CoreEngine'][_0x52fb7e(0x831)]=Window_Scrollable['prototype'][_0x52fb7e(0x843)],Window_Scrollable[_0x52fb7e(0x7d3)]['update']=function(){const _0x38ca32=_0x52fb7e;VisuMZ[_0x38ca32(0x81f)][_0x38ca32(0x831)]['call'](this),this[_0x38ca32(0x122)]();},Window_Scrollable[_0x52fb7e(0x7d3)][_0x52fb7e(0x122)]=function(){const _0x16a9a5=_0x52fb7e;this[_0x16a9a5(0xc9)](),this[_0x16a9a5(0x50a)](!![]),this['checkScrollBarBitmap'](![]),this[_0x16a9a5(0x404)](!![]),this[_0x16a9a5(0x404)](![]);},Window_Scrollable[_0x52fb7e(0x7d3)][_0x52fb7e(0xc9)]=function(){const _0x2b52dd=_0x52fb7e,_0x1e10eb=[this[_0x2b52dd(0x676)],this[_0x2b52dd(0x4cf)]];for(const _0x240581 of _0x1e10eb){_0x240581&&(_0x240581[_0x2b52dd(0x599)]=this[_0x2b52dd(0x702)]()&&this['isOpen']());}},Window_Scrollable[_0x52fb7e(0x7d3)][_0x52fb7e(0x50a)]=function(_0x1c189c){const _0x59e682=_0x52fb7e;if(!this[_0x59e682(0xe8)])return;const _0x367058=this['scrollbar'](_0x1c189c),_0x1db38d=this[_0x59e682(0x46d)](_0x1c189c),_0x69683a=_0x1c189c?'horz':_0x59e682(0x627),_0x37fa6c=_0x1c189c?_0x59e682(0x735):_0x59e682(0x666);(this[_0x59e682(0xe8)][_0x69683a]!==_0x367058||this[_0x59e682(0xe8)][_0x37fa6c]!==_0x1db38d)&&(this[_0x59e682(0xe8)][_0x69683a]=_0x367058,this[_0x59e682(0xe8)][_0x37fa6c]=_0x1db38d,this['refreshScrollBarBitmap'](_0x1c189c,_0x367058,_0x1db38d));},Window_Scrollable['prototype'][_0x52fb7e(0x271)]=function(_0x5348e5){const _0x1bc309=_0x52fb7e;if(this[_0x1bc309(0x71f)]!==undefined)return _0x5348e5?this['scrollX']():this[_0x1bc309(0x29c)]['y'];return _0x5348e5?this[_0x1bc309(0xf3)]():this[_0x1bc309(0x163)]();},Window_Scrollable[_0x52fb7e(0x7d3)]['maxScrollbar']=function(_0x526ba9){const _0x3edf13=_0x52fb7e;if(this[_0x3edf13(0x71f)]!==undefined)return _0x526ba9?this[_0x3edf13(0x556)]():Math[_0x3edf13(0x53e)](0x0,this[_0x3edf13(0x71f)]-this[_0x3edf13(0x543)]);return _0x526ba9?this[_0x3edf13(0x556)]():this[_0x3edf13(0x46a)]();},Window_Scrollable['prototype']['scrollbarHeight']=function(){const _0x5d32b2=_0x52fb7e;if(this[_0x5d32b2(0x71f)]!==undefined)return Math[_0x5d32b2(0x53e)](0x0,this[_0x5d32b2(0x71f)]);return this[_0x5d32b2(0x812)]();},Window_Scrollable[_0x52fb7e(0x7d3)][_0x52fb7e(0xc8)]=function(_0xa036b4,_0x51c021,_0x68a24d){const _0x506b5a=_0x52fb7e,_0x105c5b=_0xa036b4?this[_0x506b5a(0x676)]:this[_0x506b5a(0x4cf)];if(!_0x105c5b)return;if(!_0x105c5b[_0x506b5a(0x2f5)])return;const _0x25bbc3=_0x105c5b[_0x506b5a(0x2f5)];_0x25bbc3[_0x506b5a(0x17a)]();if(_0x68a24d<=0x0)return;const _0x43e43a=_0xa036b4?this[_0x506b5a(0x6ff)]/this[_0x506b5a(0x424)]():this[_0x506b5a(0x543)]/this[_0x506b5a(0x54e)](),_0xe3d7d=_0xa036b4?Math[_0x506b5a(0x679)](_0x51c021*_0x43e43a):0x0,_0x4ed07d=_0xa036b4?0x0:Math[_0x506b5a(0x679)](_0x51c021*_0x43e43a),_0x574d4c=_0xa036b4?Math[_0x506b5a(0x679)](_0x25bbc3[_0x506b5a(0x48a)]*_0x43e43a):_0x25bbc3[_0x506b5a(0x48a)],_0x1d8fdc=_0xa036b4?_0x25bbc3[_0x506b5a(0x480)]:Math[_0x506b5a(0x679)](_0x25bbc3[_0x506b5a(0x480)]*_0x43e43a),_0x2d6f8c=Window_Scrollable['SCROLLBAR'],_0x1de55e=ColorManager[_0x506b5a(0x75c)](_0x2d6f8c[_0x506b5a(0x6be)]),_0x21d0df=ColorManager[_0x506b5a(0x75c)](_0x2d6f8c[_0x506b5a(0x820)]),_0x1a2755=_0x2d6f8c['offOpacity'];_0x25bbc3[_0x506b5a(0x358)]=_0x1a2755,_0x25bbc3[_0x506b5a(0x811)](_0x1de55e),_0x25bbc3[_0x506b5a(0x358)]=0xff,_0x25bbc3['fillRect'](_0xe3d7d,_0x4ed07d,_0x574d4c,_0x1d8fdc,_0x21d0df);},Window_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x404)]=function(_0x273b2e){const _0x5709ef=_0x52fb7e,_0x3addf8=_0x273b2e?this['_scrollBarHorz']:this['_scrollBarVert'];if(!_0x3addf8)return;const _0x396093=Window_Scrollable['SCROLLBAR'],_0x503600=_0x396093[_0x5709ef(0x700)],_0x3ca077=_0x396093[_0x5709ef(0x724)];if(!_0x3addf8['transform'])return;_0x3addf8['x']=this[_0x5709ef(0x34a)]+(_0x273b2e?_0x503600:this[_0x5709ef(0x6ff)]+_0x3ca077),_0x3addf8['y']=this[_0x5709ef(0x34a)]+(_0x273b2e?this[_0x5709ef(0x543)]+_0x3ca077:_0x503600);},Window_Selectable[_0x52fb7e(0x7d3)]['cursorDown']=function(_0x1e7841){const _0x8b540b=_0x52fb7e;let _0x14522c=this[_0x8b540b(0x7b1)]();const _0xc5f01e=this[_0x8b540b(0xcf)](),_0x46510e=this['maxCols']();if(this[_0x8b540b(0x7df)]()&&(_0x14522c<_0xc5f01e||_0x1e7841&&_0x46510e===0x1)){_0x14522c+=_0x46510e;if(_0x14522c>=_0xc5f01e)_0x14522c=_0xc5f01e-0x1;this[_0x8b540b(0x118)](_0x14522c);}else!this[_0x8b540b(0x7df)]()&&((_0x14522c<_0xc5f01e-_0x46510e||_0x1e7841&&_0x46510e===0x1)&&this[_0x8b540b(0x118)]((_0x14522c+_0x46510e)%_0xc5f01e));},VisuMZ['CoreEngine'][_0x52fb7e(0x8b)]=Window_Selectable['prototype']['cursorDown'],Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x6d3)]=function(_0x3ad8f2){const _0x559b39=_0x52fb7e;this[_0x559b39(0x7df)]()&&_0x3ad8f2&&this['maxCols']()===0x1&&this[_0x559b39(0x7b1)]()===this[_0x559b39(0xcf)]()-0x1?this[_0x559b39(0x118)](0x0):VisuMZ[_0x559b39(0x81f)][_0x559b39(0x8b)][_0x559b39(0x809)](this,_0x3ad8f2);},Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x6a1)]=function(_0x4a3670){const _0x545746=_0x52fb7e;let _0x141f7b=Math['max'](0x0,this['index']());const _0x2f4d69=this[_0x545746(0xcf)](),_0x3d4c05=this['maxCols']();if(this[_0x545746(0x7df)]()&&_0x141f7b>0x0||_0x4a3670&&_0x3d4c05===0x1){_0x141f7b-=_0x3d4c05;if(_0x141f7b<=0x0)_0x141f7b=0x0;this['smoothSelect'](_0x141f7b);}else!this[_0x545746(0x7df)]()&&((_0x141f7b>=_0x3d4c05||_0x4a3670&&_0x3d4c05===0x1)&&this['smoothSelect']((_0x141f7b-_0x3d4c05+_0x2f4d69)%_0x2f4d69));},VisuMZ['CoreEngine'][_0x52fb7e(0x757)]=Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x6a1)],Window_Selectable['prototype'][_0x52fb7e(0x6a1)]=function(_0x5bdf45){const _0x18a977=_0x52fb7e;this[_0x18a977(0x7df)]()&&_0x5bdf45&&this[_0x18a977(0x73b)]()===0x1&&this['index']()===0x0?this[_0x18a977(0x118)](this[_0x18a977(0xcf)]()-0x1):VisuMZ[_0x18a977(0x81f)][_0x18a977(0x757)][_0x18a977(0x809)](this,_0x5bdf45);},Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x7df)]=function(){const _0x405435=_0x52fb7e;return VisuMZ['CoreEngine'][_0x405435(0x2d2)][_0x405435(0x30e)][_0x405435(0x81e)];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0xda)]=Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x462)],Window_Selectable[_0x52fb7e(0x7d3)]['processCursorMove']=function(){const _0x5aae52=_0x52fb7e;this[_0x5aae52(0x7df)]()?(this[_0x5aae52(0x316)](),this[_0x5aae52(0x585)]()):VisuMZ[_0x5aae52(0x81f)][_0x5aae52(0xda)][_0x5aae52(0x809)](this);},Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x7d6)]=function(){return!![];},Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x316)]=function(){const _0x180da9=_0x52fb7e;if(this[_0x180da9(0x7fb)]()){const _0x2517bf=this[_0x180da9(0x7b1)]();Input[_0x180da9(0x761)]('down')&&(Input['isPressed']('shift')&&this[_0x180da9(0x7d6)]()?this[_0x180da9(0x69e)]():this['cursorDown'](Input['isTriggered'](_0x180da9(0x293)))),Input[_0x180da9(0x761)]('up')&&(Input['isPressed'](_0x180da9(0x531))&&this[_0x180da9(0x7d6)]()?this['cursorPageup']():this[_0x180da9(0x6a1)](Input['isTriggered']('up'))),Input[_0x180da9(0x761)](_0x180da9(0x10f))&&this['cursorRight'](Input[_0x180da9(0xc4)](_0x180da9(0x10f))),Input['isRepeated'](_0x180da9(0xd5))&&this['cursorLeft'](Input[_0x180da9(0xc4)]('left')),!this[_0x180da9(0x372)](_0x180da9(0x51a))&&Input['isRepeated'](_0x180da9(0x51a))&&this[_0x180da9(0x69e)](),!this['isHandled'](_0x180da9(0x39d))&&Input['isRepeated'](_0x180da9(0x39d))&&this[_0x180da9(0x49a)](),this[_0x180da9(0x7b1)]()!==_0x2517bf&&this[_0x180da9(0x4b4)]();}},Window_Selectable['prototype'][_0x52fb7e(0x585)]=function(){const _0x440206=_0x52fb7e;if(this[_0x440206(0x7fb)]()){const _0x603b02=this['index']();Input[_0x440206(0xc4)](_0x440206(0x99))&&this['smoothSelect'](Math['min'](this[_0x440206(0x7b1)](),0x0)),Input[_0x440206(0xc4)]('end')&&this['smoothSelect'](Math[_0x440206(0x53e)](this['index'](),this[_0x440206(0xcf)]()-0x1)),this[_0x440206(0x7b1)]()!==_0x603b02&&this[_0x440206(0x4b4)]();}},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x694)]=Window_Selectable['prototype'][_0x52fb7e(0x551)],Window_Selectable[_0x52fb7e(0x7d3)]['processTouch']=function(){const _0x195324=_0x52fb7e;this[_0x195324(0x7df)]()?this['processTouchModernControls']():VisuMZ[_0x195324(0x81f)][_0x195324(0x694)][_0x195324(0x809)](this);},Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x426)]=function(){const _0x5081d2=_0x52fb7e;VisuMZ[_0x5081d2(0x81f)]['Window_Selectable_processTouch'][_0x5081d2(0x809)](this);},Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x22c)]=function(){const _0x225034=_0x52fb7e;return VisuMZ[_0x225034(0x81f)]['Settings'][_0x225034(0xeb)][_0x225034(0x95)];},Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x102)]=function(){const _0x4e4823=_0x52fb7e;return VisuMZ[_0x4e4823(0x81f)][_0x4e4823(0x2d2)][_0x4e4823(0xeb)]['RowSpacing'];},Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x7b9)]=function(){const _0x30bd53=_0x52fb7e;return Window_Scrollable[_0x30bd53(0x7d3)]['itemHeight'][_0x30bd53(0x809)](this)+VisuMZ[_0x30bd53(0x81f)][_0x30bd53(0x2d2)][_0x30bd53(0xeb)]['ItemHeight'];;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x502)]=Window_Selectable['prototype']['drawBackgroundRect'],Window_Selectable[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ee)]=function(_0x296620){const _0x311110=_0x52fb7e,_0x2913e6=VisuMZ[_0x311110(0x81f)]['Settings'][_0x311110(0xeb)];if(_0x2913e6[_0x311110(0x141)]===![])return;_0x2913e6[_0x311110(0x32b)]?_0x2913e6[_0x311110(0x32b)][_0x311110(0x809)](this,_0x296620):VisuMZ['CoreEngine'][_0x311110(0x502)][_0x311110(0x809)](this,_0x296620);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x3b1)]=Window_Gold[_0x52fb7e(0x7d3)][_0x52fb7e(0x93)],Window_Gold[_0x52fb7e(0x7d3)]['refresh']=function(){const _0x5913a2=_0x52fb7e;this[_0x5913a2(0x64a)]()?this[_0x5913a2(0x797)]():VisuMZ[_0x5913a2(0x81f)][_0x5913a2(0x3b1)][_0x5913a2(0x809)](this);},Window_Gold[_0x52fb7e(0x7d3)]['isItemStyle']=function(){const _0x1ce146=_0x52fb7e;if(TextManager[_0x1ce146(0x393)]!==this[_0x1ce146(0x393)]())return![];return VisuMZ['CoreEngine'][_0x1ce146(0x2d2)]['Gold'][_0x1ce146(0x395)];},Window_Gold[_0x52fb7e(0x7d3)][_0x52fb7e(0x797)]=function(){const _0x1316b1=_0x52fb7e;this[_0x1316b1(0x23b)](),this[_0x1316b1(0x6f8)][_0x1316b1(0x17a)](),this[_0x1316b1(0x6f8)][_0x1316b1(0xd1)]=VisuMZ['CoreEngine'][_0x1316b1(0x2d2)][_0x1316b1(0x4db)][_0x1316b1(0x4f8)];const _0x2fce27=VisuMZ[_0x1316b1(0x81f)]['Settings']['Gold'][_0x1316b1(0x13b)],_0x5b2633=this[_0x1316b1(0xdf)](0x0);if(_0x2fce27>0x0){const _0x213f1f=_0x5b2633['y']+(this[_0x1316b1(0x633)]()-ImageManager[_0x1316b1(0xae)])/0x2;this['drawIcon'](_0x2fce27,_0x5b2633['x'],_0x213f1f);const _0x16cb06=ImageManager[_0x1316b1(0x32f)]+0x4;_0x5b2633['x']+=_0x16cb06,_0x5b2633[_0x1316b1(0x48a)]-=_0x16cb06;}this[_0x1316b1(0x4f0)](ColorManager[_0x1316b1(0x484)]()),this[_0x1316b1(0x9a)](this[_0x1316b1(0x393)](),_0x5b2633['x'],_0x5b2633['y'],_0x5b2633[_0x1316b1(0x48a)],_0x1316b1(0xd5));const _0x5b3c09=this[_0x1316b1(0x3e3)](this['currencyUnit']())+0x6;;_0x5b2633['x']+=_0x5b3c09,_0x5b2633['width']-=_0x5b3c09,this['resetTextColor']();const _0xdd8959=this[_0x1316b1(0x326)](),_0xdb80a7=this[_0x1316b1(0x3e3)](this[_0x1316b1(0x33f)]?VisuMZ[_0x1316b1(0x777)](this[_0x1316b1(0x326)]()):this[_0x1316b1(0x326)]());_0xdb80a7>_0x5b2633[_0x1316b1(0x48a)]?this[_0x1316b1(0x9a)](VisuMZ['CoreEngine'][_0x1316b1(0x2d2)][_0x1316b1(0x4db)][_0x1316b1(0x66d)],_0x5b2633['x'],_0x5b2633['y'],_0x5b2633[_0x1316b1(0x48a)],_0x1316b1(0x10f)):this[_0x1316b1(0x9a)](this['value'](),_0x5b2633['x'],_0x5b2633['y'],_0x5b2633[_0x1316b1(0x48a)],_0x1316b1(0x10f)),this[_0x1316b1(0x23b)]();},Window_StatusBase['prototype'][_0x52fb7e(0xea)]=function(_0x54ff0c,_0x3d947e,_0x164cea,_0x3cda14,_0x5124cc){const _0x225c21=_0x52fb7e;_0x3cda14=String(_0x3cda14||'')[_0x225c21(0x43a)]();if(VisuMZ[_0x225c21(0x81f)][_0x225c21(0x2d2)][_0x225c21(0x179)][_0x225c21(0x285)]){const _0x2fec0c=VisuMZ[_0x225c21(0x4cb)](_0x3cda14);_0x5124cc?(this[_0x225c21(0x5f3)](_0x2fec0c,_0x54ff0c,_0x3d947e,this[_0x225c21(0x582)]()),_0x164cea-=this[_0x225c21(0x582)]()+0x2,_0x54ff0c+=this[_0x225c21(0x582)]()+0x2):(this[_0x225c21(0x66c)](_0x2fec0c,_0x54ff0c+0x2,_0x3d947e+0x2),_0x164cea-=ImageManager[_0x225c21(0x32f)]+0x4,_0x54ff0c+=ImageManager['iconWidth']+0x4);}const _0x3ad53e=TextManager[_0x225c21(0x7a3)](_0x3cda14);this['resetFontSettings'](),this[_0x225c21(0x4f0)](ColorManager[_0x225c21(0x484)]()),_0x5124cc?(this[_0x225c21(0x6f8)][_0x225c21(0xd1)]=this['smallParamFontSize'](),this['contents']['drawText'](_0x3ad53e,_0x54ff0c,_0x3d947e,_0x164cea,this[_0x225c21(0x582)](),_0x225c21(0xd5))):this[_0x225c21(0x9a)](_0x3ad53e,_0x54ff0c,_0x3d947e,_0x164cea),this['resetFontSettings']();},Window_StatusBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x6de)]=function(){const _0x51241b=_0x52fb7e;return $gameSystem[_0x51241b(0x3c1)]()-0x8;},Window_StatusBase['prototype'][_0x52fb7e(0x63a)]=function(_0x18fcba,_0x25381c,_0xc386f1,_0x39cd17){const _0x3c5ed3=_0x52fb7e;_0x39cd17=_0x39cd17||0xa8,this[_0x3c5ed3(0xb0)]();if(VisuMZ['CoreEngine'][_0x3c5ed3(0x2d2)]['UI'][_0x3c5ed3(0x1f1)])this[_0x3c5ed3(0x375)](_0x18fcba[_0x3c5ed3(0x81b)]()[_0x3c5ed3(0x4e3)],_0x25381c,_0xc386f1,_0x39cd17);else{const _0x2293c3=_0x18fcba['currentClass']()[_0x3c5ed3(0x4e3)][_0x3c5ed3(0x1cd)](/\\I\[(\d+)\]/gi,'');this[_0x3c5ed3(0x9a)](_0x2293c3,_0x25381c,_0xc386f1,_0x39cd17);}},Window_StatusBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x1bf)]=function(_0x4576b,_0x26d87,_0x4a0bbc,_0x51308e){const _0x2cc5ab=_0x52fb7e;_0x51308e=_0x51308e||0x10e,this[_0x2cc5ab(0xb0)]();if(VisuMZ[_0x2cc5ab(0x81f)][_0x2cc5ab(0x2d2)]['UI']['TextCodeNicknames'])this['drawTextEx'](_0x4576b['nickname'](),_0x26d87,_0x4a0bbc,_0x51308e);else{const _0x18cad3=_0x4576b[_0x2cc5ab(0x9d)]()[_0x2cc5ab(0x1cd)](/\\I\[(\d+)\]/gi,'');this[_0x2cc5ab(0x9a)](_0x4576b[_0x2cc5ab(0x9d)](),_0x26d87,_0x4a0bbc,_0x51308e);}},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x290)]=Window_StatusBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x44b)],Window_StatusBase['prototype'][_0x52fb7e(0x44b)]=function(_0x142ff8,_0x11d120,_0x30e734){const _0x134884=_0x52fb7e;if(VisuMZ[_0x134884(0x81f)][_0x134884(0x2d2)][_0x134884(0x179)][_0x134884(0x619)]===![])return;if(this['isExpGaugeDrawn']())this[_0x134884(0x4f4)](_0x142ff8,_0x11d120,_0x30e734);VisuMZ['CoreEngine'][_0x134884(0x290)][_0x134884(0x809)](this,_0x142ff8,_0x11d120,_0x30e734);},Window_StatusBase[_0x52fb7e(0x7d3)][_0x52fb7e(0x788)]=function(){const _0x1de6db=_0x52fb7e;return VisuMZ[_0x1de6db(0x81f)][_0x1de6db(0x2d2)]['UI']['LvExpGauge'];},Window_StatusBase[_0x52fb7e(0x7d3)]['drawActorExpGauge']=function(_0x24af71,_0x18f0f4,_0x354191){const _0x2ba93a=_0x52fb7e;if(!_0x24af71)return;if(!_0x24af71[_0x2ba93a(0x1b4)]())return;const _0x45f361=0x80,_0x1ffe2c=_0x24af71['expRate']();let _0x22c2c0=ColorManager['expGaugeColor1'](),_0x1f721a=ColorManager['expGaugeColor2']();_0x1ffe2c>=0x1&&(_0x22c2c0=ColorManager[_0x2ba93a(0x651)](),_0x1f721a=ColorManager[_0x2ba93a(0x594)]()),this[_0x2ba93a(0x76b)](_0x18f0f4,_0x354191,_0x45f361,_0x1ffe2c,_0x22c2c0,_0x1f721a);},Window_EquipStatus[_0x52fb7e(0x7d3)][_0x52fb7e(0x5a7)]=function(){const _0x3b7681=_0x52fb7e;let _0x36f348=0x0;for(const _0x1a5832 of VisuMZ[_0x3b7681(0x81f)][_0x3b7681(0x2d2)][_0x3b7681(0x179)][_0x3b7681(0x4a2)]){const _0xdb5b53=this[_0x3b7681(0x138)](),_0xb296d3=this[_0x3b7681(0x74)](_0x36f348);this[_0x3b7681(0x61b)](_0xdb5b53,_0xb296d3,_0x1a5832),_0x36f348++;}},Window_EquipStatus[_0x52fb7e(0x7d3)][_0x52fb7e(0x49c)]=function(_0x2ada16,_0x4b32d9,_0x4ec8a6){const _0x121a09=_0x52fb7e,_0x12c30d=this[_0x121a09(0x9c)]()-this['itemPadding']()*0x2;this[_0x121a09(0xea)](_0x2ada16,_0x4b32d9,_0x12c30d,_0x4ec8a6,![]);},Window_EquipStatus['prototype'][_0x52fb7e(0x48f)]=function(_0x1d251a,_0x5823a2,_0x2032c7){const _0x9ec8aa=_0x52fb7e,_0x52886f=this['paramWidth']();this['resetTextColor'](),this[_0x9ec8aa(0x9a)](this[_0x9ec8aa(0x15e)]['paramValueByName'](_0x2032c7,!![]),_0x1d251a,_0x5823a2,_0x52886f,_0x9ec8aa(0x10f));},Window_EquipStatus[_0x52fb7e(0x7d3)]['drawRightArrow']=function(_0x18e1c1,_0x43f6a9){const _0x37e979=_0x52fb7e,_0x30a259=this[_0x37e979(0x78e)]();this[_0x37e979(0x4f0)](ColorManager[_0x37e979(0x484)]());const _0x34f000=VisuMZ[_0x37e979(0x81f)]['Settings']['UI'][_0x37e979(0x30f)];this[_0x37e979(0x9a)](_0x34f000,_0x18e1c1,_0x43f6a9,_0x30a259,_0x37e979(0x84c));},Window_EquipStatus[_0x52fb7e(0x7d3)][_0x52fb7e(0xee)]=function(_0x500697,_0x352985,_0xc9506d){const _0x1531f6=_0x52fb7e,_0x51e545=this[_0x1531f6(0x1ea)](),_0x5adf62=this[_0x1531f6(0x7c9)][_0x1531f6(0x7d4)](_0xc9506d),_0x17aba4=_0x5adf62-this[_0x1531f6(0x15e)][_0x1531f6(0x7d4)](_0xc9506d);this['changeTextColor'](ColorManager[_0x1531f6(0x586)](_0x17aba4)),this['drawText'](this[_0x1531f6(0x7c9)][_0x1531f6(0x7d4)](_0xc9506d,!![]),_0x500697,_0x352985,_0x51e545,_0x1531f6(0x10f));},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0xad)]=Window_EquipItem['prototype'][_0x52fb7e(0xab)],Window_EquipItem['prototype'][_0x52fb7e(0xab)]=function(_0x133025){const _0x388579=_0x52fb7e;return _0x133025&&this['_actor']?this[_0x388579(0x15e)][_0x388579(0xd8)](_0x133025):VisuMZ[_0x388579(0x81f)][_0x388579(0xad)][_0x388579(0x809)](this,_0x133025);},Window_StatusParams[_0x52fb7e(0x7d3)]['maxItems']=function(){const _0x218fb5=_0x52fb7e;return VisuMZ[_0x218fb5(0x81f)]['Settings'][_0x218fb5(0x179)]['DisplayedParams'][_0x218fb5(0x7e7)];},Window_StatusParams[_0x52fb7e(0x7d3)][_0x52fb7e(0x61b)]=function(_0x353c1f){const _0x2c7eae=_0x52fb7e,_0x5b8089=this[_0x2c7eae(0xdf)](_0x353c1f),_0x4488ba=VisuMZ['CoreEngine'][_0x2c7eae(0x2d2)][_0x2c7eae(0x179)][_0x2c7eae(0x4a2)][_0x353c1f],_0x3a3a68=TextManager[_0x2c7eae(0x7a3)](_0x4488ba),_0x4cd913=this[_0x2c7eae(0x15e)]['paramValueByName'](_0x4488ba,!![]);this[_0x2c7eae(0xea)](_0x5b8089['x'],_0x5b8089['y'],0xa0,_0x4488ba,![]),this[_0x2c7eae(0xb0)](),this[_0x2c7eae(0x9a)](_0x4cd913,_0x5b8089['x']+0xa0,_0x5b8089['y'],0x3c,_0x2c7eae(0x10f));};function _0x1c32(_0x218c67,_0x5ee456){const _0x1b74c1=_0x1b74();return _0x1c32=function(_0x1c32bb,_0x6e27f7){_0x1c32bb=_0x1c32bb-0x68;let _0x5d266c=_0x1b74c1[_0x1c32bb];return _0x5d266c;},_0x1c32(_0x218c67,_0x5ee456);}if(VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)]['KeyboardInput'][_0x52fb7e(0x1fa)]){VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)][_0x52fb7e(0x295)]['QwertyLayout']&&(Window_NameInput[_0x52fb7e(0x729)]=['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','\x27','`','Z','X','C','V','B','N','M',',','.','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',':','~','z','x','c','v','b','n','m','\x22',';','1','2','3','4','5','6','7','8','9','0','!','@','#','$','%','^','&','*','(',')','<','>','[',']','-','_','/','\x20',_0x52fb7e(0x652),'OK']);;VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x463)]=Window_NameInput['prototype'][_0x52fb7e(0x2ce)],Window_NameInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)]=function(_0x2d96dc){const _0x4cb5bc=_0x52fb7e;this[_0x4cb5bc(0x351)]=this[_0x4cb5bc(0x779)](),VisuMZ[_0x4cb5bc(0x81f)][_0x4cb5bc(0x463)][_0x4cb5bc(0x809)](this,_0x2d96dc),this[_0x4cb5bc(0x351)]==='default'?this[_0x4cb5bc(0x76)](0x0):(Input[_0x4cb5bc(0x17a)](),this[_0x4cb5bc(0x3d5)]());},Window_NameInput['prototype'][_0x52fb7e(0x779)]=function(){const _0x5ee1d5=_0x52fb7e;if(Input['isGamepadConnected']())return _0x5ee1d5(0x38b);return VisuMZ[_0x5ee1d5(0x81f)][_0x5ee1d5(0x2d2)][_0x5ee1d5(0x295)][_0x5ee1d5(0x421)]||_0x5ee1d5(0x7da);},VisuMZ[_0x52fb7e(0x81f)]['Window_NameInput_processHandling']=Window_NameInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x7f7)],Window_NameInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x7f7)]=function(){const _0x5a860c=_0x52fb7e;if(!this[_0x5a860c(0x106)]())return;if(!this[_0x5a860c(0x625)])return;if(this[_0x5a860c(0x351)]===_0x5a860c(0x7da)&&Input[_0x5a860c(0x639)]())this['switchModes'](_0x5a860c(0x38b));else{if(Input[_0x5a860c(0x7aa)]('backspace'))Input[_0x5a860c(0x17a)](),this['processBack']();else{if(Input[_0x5a860c(0xc4)]('tab'))Input['clear'](),this[_0x5a860c(0x351)]===_0x5a860c(0x7da)?this[_0x5a860c(0xfb)](_0x5a860c(0x38b)):this[_0x5a860c(0xfb)](_0x5a860c(0x7da));else{if(this[_0x5a860c(0x351)]===_0x5a860c(0x7da))this[_0x5a860c(0x2d7)]();else Input['isSpecialCode'](_0x5a860c(0x385))?(Input[_0x5a860c(0x17a)](),this[_0x5a860c(0xfb)](_0x5a860c(0x7da))):VisuMZ['CoreEngine']['Window_NameInput_processHandling'][_0x5a860c(0x809)](this);}}}},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2c2)]=Window_NameInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x551)],Window_NameInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x551)]=function(){const _0x4a98fb=_0x52fb7e;if(!this['isOpenAndActive']())return;if(this[_0x4a98fb(0x351)]===_0x4a98fb(0x7da)){if(TouchInput[_0x4a98fb(0xc4)]()&&this[_0x4a98fb(0x62a)]())this[_0x4a98fb(0xfb)](_0x4a98fb(0x38b));else TouchInput[_0x4a98fb(0x537)]()&&this['switchModes'](_0x4a98fb(0x38b));}else VisuMZ[_0x4a98fb(0x81f)][_0x4a98fb(0x2c2)][_0x4a98fb(0x809)](this);},Window_NameInput['prototype']['processKeyboardHandling']=function(){const _0x17139b=_0x52fb7e;if(Input[_0x17139b(0x7aa)](_0x17139b(0x808)))Input[_0x17139b(0x17a)](),this[_0x17139b(0x7a8)]();else{if(Input['_inputString']!==undefined){let _0x22637d=Input['_inputString'],_0x2860c4=_0x22637d[_0x17139b(0x7e7)];for(let _0x26b76a=0x0;_0x26b76a<_0x2860c4;++_0x26b76a){this[_0x17139b(0x5f8)][_0x17139b(0x370)](_0x22637d[_0x26b76a])?SoundManager['playOk']():SoundManager[_0x17139b(0x2ca)]();}Input[_0x17139b(0x17a)]();}}},Window_NameInput['prototype'][_0x52fb7e(0xfb)]=function(_0x3acaf2){const _0xe56c40=_0x52fb7e;let _0x1f66bd=this[_0xe56c40(0x351)];this[_0xe56c40(0x351)]=_0x3acaf2,_0x1f66bd!==this[_0xe56c40(0x351)]&&(this[_0xe56c40(0x93)](),SoundManager[_0xe56c40(0x73f)](),this[_0xe56c40(0x351)]===_0xe56c40(0x38b)?this[_0xe56c40(0x76)](0x0):this[_0xe56c40(0x76)](-0x1));},VisuMZ['CoreEngine']['Window_NameInput_cursorDown']=Window_NameInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x6d3)],Window_NameInput[_0x52fb7e(0x7d3)]['cursorDown']=function(_0x278904){const _0x2d01e4=_0x52fb7e;if(this[_0x2d01e4(0x351)]==='keyboard'&&!Input[_0x2d01e4(0x150)]())return;if(Input[_0x2d01e4(0x83f)]())return;VisuMZ[_0x2d01e4(0x81f)][_0x2d01e4(0x362)]['call'](this,_0x278904),this[_0x2d01e4(0xfb)](_0x2d01e4(0x38b));},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x60d)]=Window_NameInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x6a1)],Window_NameInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x6a1)]=function(_0x2b8d14){const _0x26e2b9=_0x52fb7e;if(this[_0x26e2b9(0x351)]===_0x26e2b9(0x7da)&&!Input[_0x26e2b9(0x150)]())return;if(Input[_0x26e2b9(0x83f)]())return;VisuMZ[_0x26e2b9(0x81f)]['Window_NameInput_cursorUp']['call'](this,_0x2b8d14),this[_0x26e2b9(0xfb)]('default');},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x26a)]=Window_NameInput['prototype'][_0x52fb7e(0x5d9)],Window_NameInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x5d9)]=function(_0x215275){const _0x27a0b8=_0x52fb7e;if(this[_0x27a0b8(0x351)]===_0x27a0b8(0x7da)&&!Input[_0x27a0b8(0x150)]())return;if(Input[_0x27a0b8(0x83f)]())return;VisuMZ['CoreEngine'][_0x27a0b8(0x26a)][_0x27a0b8(0x809)](this,_0x215275),this[_0x27a0b8(0xfb)](_0x27a0b8(0x38b));},VisuMZ['CoreEngine'][_0x52fb7e(0x6bc)]=Window_NameInput[_0x52fb7e(0x7d3)]['cursorLeft'],Window_NameInput[_0x52fb7e(0x7d3)]['cursorLeft']=function(_0x455f8f){const _0x25e09e=_0x52fb7e;if(this[_0x25e09e(0x351)]==='keyboard'&&!Input[_0x25e09e(0x150)]())return;if(Input[_0x25e09e(0x83f)]())return;VisuMZ['CoreEngine'][_0x25e09e(0x6bc)][_0x25e09e(0x809)](this,_0x455f8f),this['switchModes'](_0x25e09e(0x38b));},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x16a)]=Window_NameInput[_0x52fb7e(0x7d3)]['cursorPagedown'],Window_NameInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x69e)]=function(){const _0x45782d=_0x52fb7e;if(this['_mode']==='keyboard')return;if(Input['isNumpadPressed']())return;VisuMZ[_0x45782d(0x81f)][_0x45782d(0x16a)][_0x45782d(0x809)](this),this['switchModes'](_0x45782d(0x38b));},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2c8)]=Window_NameInput[_0x52fb7e(0x7d3)]['cursorPageup'],Window_NameInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x49a)]=function(){const _0x356ca7=_0x52fb7e;if(this[_0x356ca7(0x351)]==='keyboard')return;if(Input[_0x356ca7(0x83f)]())return;VisuMZ['CoreEngine'][_0x356ca7(0x2c8)][_0x356ca7(0x809)](this),this['switchModes'](_0x356ca7(0x38b));},VisuMZ['CoreEngine']['Window_NameInput_refresh']=Window_NameInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x93)],Window_NameInput['prototype']['refresh']=function(){const _0x5e1244=_0x52fb7e;if(this['_mode']===_0x5e1244(0x7da)){this['contents'][_0x5e1244(0x17a)](),this[_0x5e1244(0x7d5)][_0x5e1244(0x17a)](),this[_0x5e1244(0xb0)]();let _0x276cd5=VisuMZ[_0x5e1244(0x81f)][_0x5e1244(0x2d2)]['KeyboardInput'][_0x5e1244(0xd3)][_0x5e1244(0x775)]('\x0a'),_0x48f4b0=_0x276cd5['length'],_0x23db7e=(this[_0x5e1244(0x543)]-_0x48f4b0*this[_0x5e1244(0x633)]())/0x2;for(let _0x5ba7e2=0x0;_0x5ba7e2<_0x48f4b0;++_0x5ba7e2){let _0x2809f6=_0x276cd5[_0x5ba7e2],_0x49227f=this[_0x5e1244(0xe4)](_0x2809f6)[_0x5e1244(0x48a)],_0x3d0d62=Math['floor']((this[_0x5e1244(0x6f8)][_0x5e1244(0x48a)]-_0x49227f)/0x2);this[_0x5e1244(0x375)](_0x2809f6,_0x3d0d62,_0x23db7e),_0x23db7e+=this['lineHeight']();}}else VisuMZ[_0x5e1244(0x81f)][_0x5e1244(0x1e0)][_0x5e1244(0x809)](this);};};VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x6af)]=Window_ShopSell[_0x52fb7e(0x7d3)][_0x52fb7e(0xab)],Window_ShopSell[_0x52fb7e(0x7d3)][_0x52fb7e(0xab)]=function(_0x8c43eb){const _0x35f071=_0x52fb7e;return VisuMZ[_0x35f071(0x81f)][_0x35f071(0x2d2)][_0x35f071(0x30e)]['KeyItemProtect']&&DataManager[_0x35f071(0x30a)](_0x8c43eb)?![]:VisuMZ['CoreEngine'][_0x35f071(0x6af)]['call'](this,_0x8c43eb);},Window_NumberInput[_0x52fb7e(0x7d3)]['isUseModernControls']=function(){return![];};VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)]['KeyboardInput'][_0x52fb7e(0x584)]&&(VisuMZ[_0x52fb7e(0x81f)]['Window_NumberInput_start']=Window_NumberInput['prototype']['start'],Window_NumberInput[_0x52fb7e(0x7d3)]['start']=function(){const _0x45ca61=_0x52fb7e;VisuMZ[_0x45ca61(0x81f)][_0x45ca61(0x6ea)][_0x45ca61(0x809)](this),this['select'](this[_0x45ca61(0x539)]-0x1),Input['clear']();},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x681)]=Window_NumberInput[_0x52fb7e(0x7d3)]['processDigitChange'],Window_NumberInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x266)]=function(){const _0x570f79=_0x52fb7e;if(!this[_0x570f79(0x5d0)]())return;if(Input[_0x570f79(0x83f)]())this[_0x570f79(0x575)]();else{if(Input[_0x570f79(0x7aa)](_0x570f79(0xfc)))this[_0x570f79(0x3ba)]();else{if(Input['_inputSpecialKeyCode']===0x2e)this[_0x570f79(0x4b3)]();else{if(Input[_0x570f79(0x2d4)]===0x24)this[_0x570f79(0x5ca)]();else Input[_0x570f79(0x2d4)]===0x23?this[_0x570f79(0x4b7)]():VisuMZ[_0x570f79(0x81f)][_0x570f79(0x681)][_0x570f79(0x809)](this);}}}},Window_NumberInput['prototype']['processCursorMove']=function(){const _0xbc7464=_0x52fb7e;if(!this['isCursorMovable']())return;Input[_0xbc7464(0x83f)]()?this[_0xbc7464(0x575)]():Window_Selectable[_0xbc7464(0x7d3)][_0xbc7464(0x462)][_0xbc7464(0x809)](this);},Window_NumberInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x585)]=function(){},Window_NumberInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x575)]=function(){const _0x38f258=_0x52fb7e;if(String(this[_0x38f258(0x137)])[_0x38f258(0x7e7)]>=this['_maxDigits'])return;const _0x5a1bfc=Number(String(this[_0x38f258(0x137)])+Input[_0x38f258(0x79a)]);if(isNaN(_0x5a1bfc))return;this[_0x38f258(0x137)]=_0x5a1bfc;const _0x5811f6='9'[_0x38f258(0x5df)](this[_0x38f258(0x539)]);this[_0x38f258(0x137)]=this[_0x38f258(0x137)][_0x38f258(0x7e4)](0x0,_0x5811f6),Input[_0x38f258(0x17a)](),this[_0x38f258(0x93)](),SoundManager['playCursor'](),this[_0x38f258(0x76)](this['_maxDigits']-0x1);},Window_NumberInput['prototype']['processKeyboardBackspace']=function(){const _0x156ab5=_0x52fb7e;this['_number']=Number(String(this[_0x156ab5(0x137)])[_0x156ab5(0xa8)](0x0,-0x1)),this[_0x156ab5(0x137)]=Math[_0x156ab5(0x53e)](0x0,this[_0x156ab5(0x137)]),Input['clear'](),this[_0x156ab5(0x93)](),SoundManager[_0x156ab5(0x451)](),this[_0x156ab5(0x76)](this[_0x156ab5(0x539)]-0x1);},Window_NumberInput[_0x52fb7e(0x7d3)][_0x52fb7e(0x4b3)]=function(){const _0x21862a=_0x52fb7e;this[_0x21862a(0x137)]=Number(String(this[_0x21862a(0x137)])['substring'](0x1)),this[_0x21862a(0x137)]=Math['max'](0x0,this[_0x21862a(0x137)]),Input[_0x21862a(0x17a)](),this[_0x21862a(0x93)](),SoundManager[_0x21862a(0x451)](),this['select'](this[_0x21862a(0x539)]-0x1);},Window_NumberInput['prototype']['processKeyboardHome']=function(){const _0x4089d0=_0x52fb7e;if(this[_0x4089d0(0x7b1)]()===0x0)return;Input[_0x4089d0(0x17a)](),this[_0x4089d0(0x93)](),SoundManager[_0x4089d0(0x451)](),this[_0x4089d0(0x76)](0x0);},Window_NumberInput['prototype'][_0x52fb7e(0x4b7)]=function(){const _0xd12938=_0x52fb7e;if(this['index']()===this[_0xd12938(0x539)]-0x1)return;Input['clear'](),this['refresh'](),SoundManager[_0xd12938(0x451)](),this[_0xd12938(0x76)](this['_maxDigits']-0x1);});;VisuMZ['CoreEngine'][_0x52fb7e(0x760)]=Window_MapName['prototype'][_0x52fb7e(0x93)],Window_MapName['prototype']['refresh']=function(){const _0x277e85=_0x52fb7e;VisuMZ[_0x277e85(0x81f)]['Settings'][_0x277e85(0x30e)][_0x277e85(0x310)]?this['refreshWithTextCodeSupport']():VisuMZ[_0x277e85(0x81f)][_0x277e85(0x760)][_0x277e85(0x809)](this);},Window_MapName[_0x52fb7e(0x7d3)][_0x52fb7e(0x659)]=function(){const _0x33f5e1=_0x52fb7e;this[_0x33f5e1(0x6f8)]['clear']();if($gameMap['displayName']()){const _0x2b198f=this[_0x33f5e1(0x6ff)];this[_0x33f5e1(0x807)](0x0,0x0,_0x2b198f,this[_0x33f5e1(0x633)]());const _0x3ac989=this[_0x33f5e1(0xe4)]($gameMap['displayName']())['width'];this['drawTextEx']($gameMap[_0x33f5e1(0x6da)](),Math[_0x33f5e1(0x29a)]((_0x2b198f-_0x3ac989)/0x2),0x0);}},Window_TitleCommand['_commandList']=VisuMZ[_0x52fb7e(0x81f)]['Settings']['TitleCommandList'],Window_TitleCommand[_0x52fb7e(0x7d3)]['makeCommandList']=function(){const _0x12b394=_0x52fb7e;this[_0x12b394(0x1e3)]();},Window_TitleCommand[_0x52fb7e(0x7d3)][_0x52fb7e(0x1e3)]=function(){const _0x3cde81=_0x52fb7e;for(const _0x4dc660 of Window_TitleCommand['_commandList']){if(_0x4dc660[_0x3cde81(0x74e)][_0x3cde81(0x809)](this)){const _0x1032f4=_0x4dc660[_0x3cde81(0xe0)];let _0x1d2365=_0x4dc660['TextStr'];if(['',_0x3cde81(0x800)]['includes'](_0x1d2365))_0x1d2365=_0x4dc660[_0x3cde81(0xd7)]['call'](this);const _0x364ce8=_0x4dc660[_0x3cde81(0x455)][_0x3cde81(0x809)](this),_0x403ea4=_0x4dc660[_0x3cde81(0x105)][_0x3cde81(0x809)](this);this[_0x3cde81(0x4dc)](_0x1d2365,_0x1032f4,_0x364ce8,_0x403ea4),this[_0x3cde81(0x68a)](_0x1032f4,_0x4dc660[_0x3cde81(0x519)][_0x3cde81(0x501)](this,_0x403ea4));}}},VisuMZ[_0x52fb7e(0x81f)]['Window_TitleCommand_selectLast']=Window_TitleCommand['prototype'][_0x52fb7e(0x602)],Window_TitleCommand[_0x52fb7e(0x7d3)][_0x52fb7e(0x602)]=function(){const _0x4bbe1e=_0x52fb7e;VisuMZ['CoreEngine']['Window_TitleCommand_selectLast'][_0x4bbe1e(0x809)](this);if(!Window_TitleCommand[_0x4bbe1e(0x606)])return;const _0x2c5cbf=this[_0x4bbe1e(0x14f)](Window_TitleCommand['_lastCommandSymbol']),_0x130c80=Math[_0x4bbe1e(0x29a)](this[_0x4bbe1e(0x5d4)]()/0x2)-0x1;this[_0x4bbe1e(0x118)](_0x2c5cbf),this['_scrollDuration']>0x1&&(this['_scrollDuration']=0x1,this['updateSmoothScroll']()),this[_0x4bbe1e(0x814)](_0x2c5cbf-_0x130c80);},Window_GameEnd[_0x52fb7e(0x26e)]=VisuMZ[_0x52fb7e(0x81f)]['Settings'][_0x52fb7e(0x119)][_0x52fb7e(0x826)]['CommandList'],Window_GameEnd[_0x52fb7e(0x7d3)][_0x52fb7e(0x50b)]=function(){const _0x59c3ad=_0x52fb7e;this[_0x59c3ad(0x1e3)]();},Window_GameEnd[_0x52fb7e(0x7d3)][_0x52fb7e(0x1e3)]=function(){const _0x2976e5=_0x52fb7e;for(const _0x2e48d5 of Window_GameEnd[_0x2976e5(0x26e)]){if(_0x2e48d5['ShowJS'][_0x2976e5(0x809)](this)){const _0x38b2d2=_0x2e48d5[_0x2976e5(0xe0)];let _0x7489bd=_0x2e48d5[_0x2976e5(0x6bf)];if(['',_0x2976e5(0x800)][_0x2976e5(0x597)](_0x7489bd))_0x7489bd=_0x2e48d5[_0x2976e5(0xd7)]['call'](this);const _0x14cb38=_0x2e48d5[_0x2976e5(0x455)]['call'](this),_0x29b21e=_0x2e48d5['ExtJS'][_0x2976e5(0x809)](this);this['addCommand'](_0x7489bd,_0x38b2d2,_0x14cb38,_0x29b21e),this[_0x2976e5(0x68a)](_0x38b2d2,_0x2e48d5['CallHandlerJS'][_0x2976e5(0x501)](this,_0x29b21e));}}};function Window_ButtonAssist(){const _0xc33774=_0x52fb7e;this[_0xc33774(0x2ce)](...arguments);}Window_ButtonAssist[_0x52fb7e(0x7d3)]=Object[_0x52fb7e(0x49f)](Window_Base[_0x52fb7e(0x7d3)]),Window_ButtonAssist[_0x52fb7e(0x7d3)][_0x52fb7e(0x14b)]=Window_ButtonAssist,Window_ButtonAssist[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ce)]=function(_0x3527a8){const _0x29f37f=_0x52fb7e;this[_0x29f37f(0x7e2)]={},Window_Base[_0x29f37f(0x7d3)]['initialize']['call'](this,_0x3527a8),this[_0x29f37f(0x669)](VisuMZ[_0x29f37f(0x81f)][_0x29f37f(0x2d2)][_0x29f37f(0x20a)][_0x29f37f(0x515)]||0x0),this[_0x29f37f(0x93)]();},Window_ButtonAssist[_0x52fb7e(0x7d3)][_0x52fb7e(0x13e)]=function(){const _0x4d2450=_0x52fb7e;this[_0x4d2450(0x6f8)][_0x4d2450(0xd1)]<=0x60&&(this[_0x4d2450(0x6f8)][_0x4d2450(0xd1)]+=0x6);},Window_ButtonAssist[_0x52fb7e(0x7d3)][_0x52fb7e(0x823)]=function(){const _0x31d1fe=_0x52fb7e;this[_0x31d1fe(0x6f8)]['fontSize']>=0x18&&(this[_0x31d1fe(0x6f8)][_0x31d1fe(0xd1)]-=0x6);},Window_ButtonAssist['prototype']['update']=function(){const _0x27e5dc=_0x52fb7e;Window_Base[_0x27e5dc(0x7d3)][_0x27e5dc(0x843)]['call'](this),this[_0x27e5dc(0x816)]();},Window_ButtonAssist['prototype'][_0x52fb7e(0x459)]=function(){const _0x42de11=_0x52fb7e;this[_0x42de11(0x34a)]=SceneManager[_0x42de11(0x131)][_0x42de11(0x317)]()!==_0x42de11(0x558)?0x0:0x8;},Window_ButtonAssist[_0x52fb7e(0x7d3)][_0x52fb7e(0x816)]=function(){const _0x58434f=_0x52fb7e,_0xea4bce=SceneManager[_0x58434f(0x131)];for(let _0x190068=0x1;_0x190068<=0x5;_0x190068++){if(this[_0x58434f(0x7e2)][_0x58434f(0x780)['format'](_0x190068)]!==_0xea4bce['buttonAssistKey%1'[_0x58434f(0x726)](_0x190068)]())return this[_0x58434f(0x93)]();if(this[_0x58434f(0x7e2)]['text%1'[_0x58434f(0x726)](_0x190068)]!==_0xea4bce[_0x58434f(0x287)['format'](_0x190068)]())return this[_0x58434f(0x93)]();}},Window_ButtonAssist[_0x52fb7e(0x7d3)]['refresh']=function(){const _0x89757c=_0x52fb7e;this[_0x89757c(0x6f8)][_0x89757c(0x17a)]();for(let _0x1a0f3f=0x1;_0x1a0f3f<=0x5;_0x1a0f3f++){this[_0x89757c(0x6e8)](_0x1a0f3f);}},Window_ButtonAssist[_0x52fb7e(0x7d3)][_0x52fb7e(0x6e8)]=function(_0x51c5e9){const _0x3d506c=_0x52fb7e,_0x8a4d8b=this['innerWidth']/0x5,_0x21c754=SceneManager[_0x3d506c(0x131)],_0x2e5703=_0x21c754[_0x3d506c(0x1d3)[_0x3d506c(0x726)](_0x51c5e9)](),_0x1cb8b3=_0x21c754[_0x3d506c(0x287)[_0x3d506c(0x726)](_0x51c5e9)]();this[_0x3d506c(0x7e2)][_0x3d506c(0x780)[_0x3d506c(0x726)](_0x51c5e9)]=_0x2e5703,this[_0x3d506c(0x7e2)][_0x3d506c(0x663)[_0x3d506c(0x726)](_0x51c5e9)]=_0x1cb8b3;if(_0x2e5703==='')return;if(_0x1cb8b3==='')return;const _0x401a91=_0x21c754[_0x3d506c(0x6a6)[_0x3d506c(0x726)](_0x51c5e9)](),_0x510093=this[_0x3d506c(0x138)](),_0x11465d=_0x8a4d8b*(_0x51c5e9-0x1)+_0x510093+_0x401a91,_0x300e48=VisuMZ['CoreEngine'][_0x3d506c(0x2d2)][_0x3d506c(0x20a)]['TextFmt'];this[_0x3d506c(0x375)](_0x300e48[_0x3d506c(0x726)](_0x2e5703,_0x1cb8b3),_0x11465d,0x0,_0x8a4d8b-_0x510093*0x2);},VisuMZ[_0x52fb7e(0x81f)]['Game_Interpreter_updateWaitMode']=Game_Interpreter[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ac)],Game_Interpreter['prototype'][_0x52fb7e(0x2ac)]=function(){const _0xaa0fbe=_0x52fb7e;if($gameTemp['_pictureCoordinatesMode']!==undefined)return VisuMZ[_0xaa0fbe(0x81f)][_0xaa0fbe(0x232)]();return VisuMZ[_0xaa0fbe(0x81f)]['Game_Interpreter_updateWaitMode'][_0xaa0fbe(0x809)](this);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x232)]=function(){const _0x4bfc0d=_0x52fb7e,_0x225d17=$gameTemp['_pictureCoordinatesMode']||0x0;(_0x225d17<0x0||_0x225d17>0x64||TouchInput['isCancelled']()||Input[_0x4bfc0d(0xc4)](_0x4bfc0d(0x763)))&&($gameTemp[_0x4bfc0d(0x5cc)]=undefined,Input['clear'](),TouchInput[_0x4bfc0d(0x17a)]());const _0x5019ab=$gameScreen['picture'](_0x225d17);return _0x5019ab&&(_0x5019ab['_x']=TouchInput['_x'],_0x5019ab['_y']=TouchInput['_y']),VisuMZ['CoreEngine']['updatePictureCoordinates'](),$gameTemp[_0x4bfc0d(0x5cc)]!==undefined;},VisuMZ['CoreEngine'][_0x52fb7e(0x2af)]=function(){const _0x137653=_0x52fb7e,_0x30fba3=SceneManager[_0x137653(0x131)];if(!_0x30fba3)return;!_0x30fba3[_0x137653(0x517)]&&(SoundManager[_0x137653(0x20e)](),_0x30fba3[_0x137653(0x517)]=new Window_PictureCoordinates(),_0x30fba3[_0x137653(0x70e)](_0x30fba3[_0x137653(0x517)])),$gameTemp[_0x137653(0x5cc)]===undefined&&(SoundManager[_0x137653(0x469)](),_0x30fba3['removeChild'](_0x30fba3[_0x137653(0x517)]),_0x30fba3['_pictureCoordinatesWindow']=undefined);};function Window_PictureCoordinates(){const _0xc51736=_0x52fb7e;this[_0xc51736(0x2ce)](...arguments);}Window_PictureCoordinates['prototype']=Object['create'](Window_Base[_0x52fb7e(0x7d3)]),Window_PictureCoordinates['prototype']['constructor']=Window_PictureCoordinates,Window_PictureCoordinates[_0x52fb7e(0x7d3)]['initialize']=function(){const _0x5b19a9=_0x52fb7e;this['_lastOrigin']=_0x5b19a9(0x2df),this['_lastX']=_0x5b19a9(0x2df),this[_0x5b19a9(0x65c)]=_0x5b19a9(0x2df);const _0x15a854=this[_0x5b19a9(0x3f0)]();Window_Base[_0x5b19a9(0x7d3)][_0x5b19a9(0x2ce)][_0x5b19a9(0x809)](this,_0x15a854),this[_0x5b19a9(0x669)](0x2);},Window_PictureCoordinates[_0x52fb7e(0x7d3)][_0x52fb7e(0x3f0)]=function(){const _0x5a2523=_0x52fb7e;let _0x502030=0x0,_0x34d769=Graphics['height']-this[_0x5a2523(0x633)](),_0x56e317=Graphics['width'],_0x1cdb2c=this[_0x5a2523(0x633)]();return new Rectangle(_0x502030,_0x34d769,_0x56e317,_0x1cdb2c);},Window_PictureCoordinates[_0x52fb7e(0x7d3)][_0x52fb7e(0x459)]=function(){const _0xb35f7f=_0x52fb7e;this[_0xb35f7f(0x34a)]=0x0;},Window_PictureCoordinates['prototype'][_0x52fb7e(0x843)]=function(){const _0x3d2dcc=_0x52fb7e;Window_Base[_0x3d2dcc(0x7d3)]['update']['call'](this),this[_0x3d2dcc(0x782)]();},Window_PictureCoordinates[_0x52fb7e(0x7d3)][_0x52fb7e(0x782)]=function(){const _0x162cbf=_0x52fb7e;if(!this[_0x162cbf(0x274)]())return;this[_0x162cbf(0x93)]();},Window_PictureCoordinates[_0x52fb7e(0x7d3)]['needsUpdate']=function(){const _0x271abc=_0x52fb7e,_0x55843d=$gameTemp['_pictureCoordinatesMode'],_0x5ed779=$gameScreen[_0x271abc(0x363)](_0x55843d);return _0x5ed779?this[_0x271abc(0x3c5)]!==_0x5ed779['_origin']||this[_0x271abc(0x203)]!==_0x5ed779['_x']||this['_lastY']!==_0x5ed779['_y']:![];},Window_PictureCoordinates[_0x52fb7e(0x7d3)][_0x52fb7e(0x93)]=function(){const _0xefbc3c=_0x52fb7e;this[_0xefbc3c(0x6f8)][_0xefbc3c(0x17a)]();const _0x49b6b7=$gameTemp[_0xefbc3c(0x5cc)],_0xfb9fa0=$gameScreen[_0xefbc3c(0x363)](_0x49b6b7);if(!_0xfb9fa0)return;this[_0xefbc3c(0x3c5)]=_0xfb9fa0[_0xefbc3c(0x17c)],this['_lastX']=_0xfb9fa0['_x'],this[_0xefbc3c(0x65c)]=_0xfb9fa0['_y'];const _0xcaa938=ColorManager[_0xefbc3c(0x497)]();this['contents'][_0xefbc3c(0x6b2)](0x0,0x0,this[_0xefbc3c(0x6ff)],this[_0xefbc3c(0x543)],_0xcaa938);const _0x5621dc=_0xefbc3c(0x5a4)['format'](_0xfb9fa0['_origin']===0x0?'Upper\x20Left':_0xefbc3c(0x7b2)),_0x2f3488=_0xefbc3c(0x5eb)['format'](_0xfb9fa0['_x']),_0x19ee3c=_0xefbc3c(0x275)['format'](_0xfb9fa0['_y']),_0x1fcea7=_0xefbc3c(0x5b1)[_0xefbc3c(0x726)](TextManager[_0xefbc3c(0x198)](_0xefbc3c(0x763)));let _0x40e810=Math['floor'](this[_0xefbc3c(0x6ff)]/0x4);this['drawText'](_0x5621dc,_0x40e810*0x0,0x0,_0x40e810),this[_0xefbc3c(0x9a)](_0x2f3488,_0x40e810*0x1,0x0,_0x40e810,_0xefbc3c(0x84c)),this[_0xefbc3c(0x9a)](_0x19ee3c,_0x40e810*0x2,0x0,_0x40e810,_0xefbc3c(0x84c));const _0x7f7931=this[_0xefbc3c(0xe4)](_0x1fcea7)[_0xefbc3c(0x48a)],_0x254304=this['innerWidth']-_0x7f7931;this[_0xefbc3c(0x375)](_0x1fcea7,_0x254304,0x0,_0x7f7931);};function Window_TextPopup(){const _0x24e564=_0x52fb7e;this[_0x24e564(0x2ce)](...arguments);}Window_TextPopup[_0x52fb7e(0x7d3)]=Object['create'](Window_Base[_0x52fb7e(0x7d3)]),Window_TextPopup['prototype']['constructor']=Window_TextPopup,Window_TextPopup[_0x52fb7e(0x4df)]={'framesPerChar':VisuMZ['CoreEngine'][_0x52fb7e(0x2d2)][_0x52fb7e(0xeb)][_0x52fb7e(0xb3)]??1.5,'framesMin':VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2d2)]['Window'][_0x52fb7e(0x6c1)]??0x5a,'framesMax':VisuMZ[_0x52fb7e(0x81f)]['Settings'][_0x52fb7e(0xeb)][_0x52fb7e(0x83e)]??0x12c},Window_TextPopup[_0x52fb7e(0x7d3)]['initialize']=function(){const _0x3a2fc0=_0x52fb7e,_0xb71ae7=new Rectangle(0x0,0x0,0x1,0x1);Window_Base[_0x3a2fc0(0x7d3)][_0x3a2fc0(0x2ce)]['call'](this,_0xb71ae7),this['openness']=0x0,this[_0x3a2fc0(0x2bc)]='',this[_0x3a2fc0(0x66b)]=[],this['_timeDuration']=0x0;},Window_TextPopup['prototype'][_0x52fb7e(0x224)]=function(){return!![];},Window_TextPopup[_0x52fb7e(0x7d3)]['addQueue']=function(_0x31672a){const _0x207911=_0x52fb7e;if(this['_textQueue'][this[_0x207911(0x66b)][_0x207911(0x7e7)]-0x1]===_0x31672a)return;this[_0x207911(0x66b)][_0x207911(0x52a)](_0x31672a),SceneManager['_scene'][_0x207911(0x70e)](this);},Window_TextPopup['prototype']['update']=function(){const _0x14fc5e=_0x52fb7e;Window_Base['prototype'][_0x14fc5e(0x843)]['call'](this),this[_0x14fc5e(0x81a)](),this[_0x14fc5e(0x1fe)]();},Window_TextPopup[_0x52fb7e(0x7d3)][_0x52fb7e(0x81a)]=function(){const _0x532250=_0x52fb7e;if(this[_0x532250(0x2bc)]!=='')return;if(this[_0x532250(0x66b)][_0x532250(0x7e7)]<=0x0)return;if(!this['isClosed']())return;this[_0x532250(0x2bc)]=this['_textQueue'][_0x532250(0x531)]();const _0x158b92=Window_TextPopup[_0x532250(0x4df)],_0x7ee630=Math[_0x532250(0x1ec)](this[_0x532250(0x2bc)][_0x532250(0x7e7)]*_0x158b92[_0x532250(0x36e)]);this[_0x532250(0x23c)]=_0x7ee630['clamp'](_0x158b92[_0x532250(0x728)],_0x158b92[_0x532250(0x101)]);const _0x18d736=this[_0x532250(0xe4)](this[_0x532250(0x2bc)]);let _0x11d17c=_0x18d736[_0x532250(0x48a)]+this[_0x532250(0x138)]()*0x2;_0x11d17c+=$gameSystem[_0x532250(0x4b9)]()*0x2;let _0x5d1a52=Math[_0x532250(0x53e)](_0x18d736[_0x532250(0x480)],this['lineHeight']());_0x5d1a52+=$gameSystem[_0x532250(0x4b9)]()*0x2;const _0x2318d7=Math[_0x532250(0x679)]((Graphics[_0x532250(0x48a)]-_0x11d17c)/0x2),_0x2c304b=Math[_0x532250(0x679)]((Graphics['height']-_0x5d1a52)/0x2),_0xe966ad=new Rectangle(_0x2318d7,_0x2c304b,_0x11d17c,_0x5d1a52);this[_0x532250(0x65b)](_0xe966ad['x'],_0xe966ad['y'],_0xe966ad[_0x532250(0x48a)],_0xe966ad[_0x532250(0x480)]),this[_0x532250(0x297)](),this[_0x532250(0x93)](),this[_0x532250(0x45e)](),SceneManager[_0x532250(0x131)][_0x532250(0x70e)](this);},Window_TextPopup['prototype']['refresh']=function(){const _0x38da02=_0x52fb7e,_0x4eedf3=this[_0x38da02(0xcd)]();this[_0x38da02(0x6f8)]['clear'](),this['drawTextEx'](this[_0x38da02(0x2bc)],_0x4eedf3['x'],_0x4eedf3['y'],_0x4eedf3['width']);},Window_TextPopup[_0x52fb7e(0x7d3)][_0x52fb7e(0x1fe)]=function(){const _0x36bdaa=_0x52fb7e;if(this[_0x36bdaa(0xfa)]()||this['isClosing']())return;if(this[_0x36bdaa(0x23c)]<=0x0)return;this[_0x36bdaa(0x23c)]--,this[_0x36bdaa(0x23c)]<=0x0&&(this[_0x36bdaa(0x2f0)](),this[_0x36bdaa(0x2bc)]='');},VisuMZ[_0x52fb7e(0x50f)]=function(_0x2a3b46){const _0x54234a=_0x52fb7e;if(Utils[_0x54234a(0x1eb)](_0x54234a(0xbb))){var _0x48dfd6=require(_0x54234a(0x598))[_0x54234a(0xeb)]['get']();SceneManager['showDevTools']();if(_0x2a3b46)setTimeout(_0x48dfd6[_0x54234a(0x81)][_0x54234a(0x501)](_0x48dfd6),0x190);}},VisuMZ[_0x52fb7e(0x4aa)]=function(_0x4cf16e,_0x635473){const _0x4be72b=_0x52fb7e;_0x635473=_0x635473[_0x4be72b(0x43a)]();var _0x349896=1.70158,_0x1ba840=0.7;switch(_0x635473){case'LINEAR':return _0x4cf16e;case _0x4be72b(0x7c1):return-0x1*Math[_0x4be72b(0x4a8)](_0x4cf16e*(Math['PI']/0x2))+0x1;case'OUTSINE':return Math[_0x4be72b(0x3e9)](_0x4cf16e*(Math['PI']/0x2));case'INOUTSINE':return-0.5*(Math[_0x4be72b(0x4a8)](Math['PI']*_0x4cf16e)-0x1);case'INQUAD':return _0x4cf16e*_0x4cf16e;case _0x4be72b(0x1ba):return _0x4cf16e*(0x2-_0x4cf16e);case'INOUTQUAD':return _0x4cf16e<0.5?0x2*_0x4cf16e*_0x4cf16e:-0x1+(0x4-0x2*_0x4cf16e)*_0x4cf16e;case _0x4be72b(0x349):return _0x4cf16e*_0x4cf16e*_0x4cf16e;case'OUTCUBIC':var _0x3c3a5a=_0x4cf16e-0x1;return _0x3c3a5a*_0x3c3a5a*_0x3c3a5a+0x1;case _0x4be72b(0x3a7):return _0x4cf16e<0.5?0x4*_0x4cf16e*_0x4cf16e*_0x4cf16e:(_0x4cf16e-0x1)*(0x2*_0x4cf16e-0x2)*(0x2*_0x4cf16e-0x2)+0x1;case _0x4be72b(0x342):return _0x4cf16e*_0x4cf16e*_0x4cf16e*_0x4cf16e;case'OUTQUART':var _0x3c3a5a=_0x4cf16e-0x1;return 0x1-_0x3c3a5a*_0x3c3a5a*_0x3c3a5a*_0x3c3a5a;case _0x4be72b(0x19a):var _0x3c3a5a=_0x4cf16e-0x1;return _0x4cf16e<0.5?0x8*_0x4cf16e*_0x4cf16e*_0x4cf16e*_0x4cf16e:0x1-0x8*_0x3c3a5a*_0x3c3a5a*_0x3c3a5a*_0x3c3a5a;case _0x4be72b(0x842):return _0x4cf16e*_0x4cf16e*_0x4cf16e*_0x4cf16e*_0x4cf16e;case _0x4be72b(0x54c):var _0x3c3a5a=_0x4cf16e-0x1;return 0x1+_0x3c3a5a*_0x3c3a5a*_0x3c3a5a*_0x3c3a5a*_0x3c3a5a;case'INOUTQUINT':var _0x3c3a5a=_0x4cf16e-0x1;return _0x4cf16e<0.5?0x10*_0x4cf16e*_0x4cf16e*_0x4cf16e*_0x4cf16e*_0x4cf16e:0x1+0x10*_0x3c3a5a*_0x3c3a5a*_0x3c3a5a*_0x3c3a5a*_0x3c3a5a;case _0x4be72b(0x678):if(_0x4cf16e===0x0)return 0x0;return Math['pow'](0x2,0xa*(_0x4cf16e-0x1));case _0x4be72b(0x51b):if(_0x4cf16e===0x1)return 0x1;return-Math['pow'](0x2,-0xa*_0x4cf16e)+0x1;case _0x4be72b(0x14c):if(_0x4cf16e===0x0||_0x4cf16e===0x1)return _0x4cf16e;var _0x133204=_0x4cf16e*0x2,_0x2e774f=_0x133204-0x1;if(_0x133204<0x1)return 0.5*Math[_0x4be72b(0x2e6)](0x2,0xa*_0x2e774f);return 0.5*(-Math[_0x4be72b(0x2e6)](0x2,-0xa*_0x2e774f)+0x2);case'INCIRC':var _0x133204=_0x4cf16e/0x1;return-0x1*(Math['sqrt'](0x1-_0x133204*_0x4cf16e)-0x1);case _0x4be72b(0x25d):var _0x3c3a5a=_0x4cf16e-0x1;return Math[_0x4be72b(0x16f)](0x1-_0x3c3a5a*_0x3c3a5a);case _0x4be72b(0x55d):var _0x133204=_0x4cf16e*0x2,_0x2e774f=_0x133204-0x2;if(_0x133204<0x1)return-0.5*(Math[_0x4be72b(0x16f)](0x1-_0x133204*_0x133204)-0x1);return 0.5*(Math[_0x4be72b(0x16f)](0x1-_0x2e774f*_0x2e774f)+0x1);case'INBACK':return _0x4cf16e*_0x4cf16e*((_0x349896+0x1)*_0x4cf16e-_0x349896);case _0x4be72b(0x24c):var _0x133204=_0x4cf16e/0x1-0x1;return _0x133204*_0x133204*((_0x349896+0x1)*_0x133204+_0x349896)+0x1;break;case _0x4be72b(0x352):var _0x133204=_0x4cf16e*0x2,_0x49b849=_0x133204-0x2,_0x14a0aa=_0x349896*1.525;if(_0x133204<0x1)return 0.5*_0x133204*_0x133204*((_0x14a0aa+0x1)*_0x133204-_0x14a0aa);return 0.5*(_0x49b849*_0x49b849*((_0x14a0aa+0x1)*_0x49b849+_0x14a0aa)+0x2);case _0x4be72b(0x195):if(_0x4cf16e===0x0||_0x4cf16e===0x1)return _0x4cf16e;var _0x133204=_0x4cf16e/0x1,_0x2e774f=_0x133204-0x1,_0x1702a6=0x1-_0x1ba840,_0x14a0aa=_0x1702a6/(0x2*Math['PI'])*Math[_0x4be72b(0x1b9)](0x1);return-(Math['pow'](0x2,0xa*_0x2e774f)*Math[_0x4be72b(0x3e9)]((_0x2e774f-_0x14a0aa)*(0x2*Math['PI'])/_0x1702a6));case _0x4be72b(0xe2):var _0x1702a6=0x1-_0x1ba840,_0x133204=_0x4cf16e*0x2;if(_0x4cf16e===0x0||_0x4cf16e===0x1)return _0x4cf16e;var _0x14a0aa=_0x1702a6/(0x2*Math['PI'])*Math[_0x4be72b(0x1b9)](0x1);return Math[_0x4be72b(0x2e6)](0x2,-0xa*_0x133204)*Math[_0x4be72b(0x3e9)]((_0x133204-_0x14a0aa)*(0x2*Math['PI'])/_0x1702a6)+0x1;case _0x4be72b(0xd2):var _0x1702a6=0x1-_0x1ba840;if(_0x4cf16e===0x0||_0x4cf16e===0x1)return _0x4cf16e;var _0x133204=_0x4cf16e*0x2,_0x2e774f=_0x133204-0x1,_0x14a0aa=_0x1702a6/(0x2*Math['PI'])*Math['asin'](0x1);if(_0x133204<0x1)return-0.5*(Math[_0x4be72b(0x2e6)](0x2,0xa*_0x2e774f)*Math[_0x4be72b(0x3e9)]((_0x2e774f-_0x14a0aa)*(0x2*Math['PI'])/_0x1702a6));return Math[_0x4be72b(0x2e6)](0x2,-0xa*_0x2e774f)*Math['sin']((_0x2e774f-_0x14a0aa)*(0x2*Math['PI'])/_0x1702a6)*0.5+0x1;case _0x4be72b(0x28c):var _0x133204=_0x4cf16e/0x1;if(_0x133204<0x1/2.75)return 7.5625*_0x133204*_0x133204;else{if(_0x133204<0x2/2.75){var _0x49b849=_0x133204-1.5/2.75;return 7.5625*_0x49b849*_0x49b849+0.75;}else{if(_0x133204<2.5/2.75){var _0x49b849=_0x133204-2.25/2.75;return 7.5625*_0x49b849*_0x49b849+0.9375;}else{var _0x49b849=_0x133204-2.625/2.75;return 7.5625*_0x49b849*_0x49b849+0.984375;}}}case _0x4be72b(0x24d):var _0x106bde=0x1-VisuMZ[_0x4be72b(0x4aa)](0x1-_0x4cf16e,_0x4be72b(0x75f));return _0x106bde;case _0x4be72b(0x37a):if(_0x4cf16e<0.5)var _0x106bde=VisuMZ[_0x4be72b(0x4aa)](_0x4cf16e*0x2,_0x4be72b(0x114))*0.5;else var _0x106bde=VisuMZ[_0x4be72b(0x4aa)](_0x4cf16e*0x2-0x1,_0x4be72b(0x75f))*0.5+0.5;return _0x106bde;default:return _0x4cf16e;}},VisuMZ['GetParamIcon']=function(_0x5d03a7){const _0x286827=_0x52fb7e;_0x5d03a7=String(_0x5d03a7)['toUpperCase']();const _0x5eb627=VisuMZ['CoreEngine'][_0x286827(0x2d2)][_0x286827(0x179)];if(_0x5d03a7===_0x286827(0x120))return _0x5eb627[_0x286827(0x3d2)];if(_0x5d03a7===_0x286827(0x444))return _0x5eb627[_0x286827(0x1b3)];if(_0x5d03a7===_0x286827(0x746))return _0x5eb627[_0x286827(0x439)];if(_0x5d03a7==='DEF')return _0x5eb627[_0x286827(0x648)];if(_0x5d03a7===_0x286827(0x778))return _0x5eb627[_0x286827(0x3c9)];if(_0x5d03a7===_0x286827(0x386))return _0x5eb627[_0x286827(0x649)];if(_0x5d03a7==='AGI')return _0x5eb627[_0x286827(0x3cb)];if(_0x5d03a7===_0x286827(0x5fd))return _0x5eb627['IconParam7'];if(_0x5d03a7===_0x286827(0x396))return _0x5eb627[_0x286827(0x2a3)];if(_0x5d03a7==='EVA')return _0x5eb627[_0x286827(0x6bd)];if(_0x5d03a7==='CRI')return _0x5eb627[_0x286827(0x768)];if(_0x5d03a7===_0x286827(0x579))return _0x5eb627[_0x286827(0x38c)];if(_0x5d03a7===_0x286827(0x350))return _0x5eb627[_0x286827(0x6d6)];if(_0x5d03a7==='MRF')return _0x5eb627[_0x286827(0x299)];if(_0x5d03a7===_0x286827(0x2d5))return _0x5eb627[_0x286827(0x13f)];if(_0x5d03a7==='HRG')return _0x5eb627['IconXParam7'];if(_0x5d03a7===_0x286827(0x35b))return _0x5eb627[_0x286827(0x37c)];if(_0x5d03a7===_0x286827(0x220))return _0x5eb627['IconXParam9'];if(_0x5d03a7===_0x286827(0x4f2))return _0x5eb627[_0x286827(0x1c7)];if(_0x5d03a7===_0x286827(0x443))return _0x5eb627[_0x286827(0x7f5)];if(_0x5d03a7===_0x286827(0x3da))return _0x5eb627[_0x286827(0x64d)];if(_0x5d03a7===_0x286827(0x71))return _0x5eb627[_0x286827(0x758)];if(_0x5d03a7==='MCR')return _0x5eb627['IconSParam4'];if(_0x5d03a7===_0x286827(0x28d))return _0x5eb627[_0x286827(0x4a7)];if(_0x5d03a7===_0x286827(0x31b))return _0x5eb627[_0x286827(0x132)];if(_0x5d03a7===_0x286827(0x1a6))return _0x5eb627[_0x286827(0x29d)];if(_0x5d03a7==='FDR')return _0x5eb627[_0x286827(0x3be)];if(_0x5d03a7===_0x286827(0x75b))return _0x5eb627[_0x286827(0x756)];if(VisuMZ['CoreEngine'][_0x286827(0x110)][_0x5d03a7])return VisuMZ[_0x286827(0x81f)][_0x286827(0x110)][_0x5d03a7]||0x0;return 0x0;},VisuMZ[_0x52fb7e(0x384)]=function(_0x513048,_0x1e855a,_0x24db47){const _0x4222a4=_0x52fb7e;if(_0x24db47===undefined&&_0x513048%0x1===0x0)return _0x513048;if(_0x24db47!==undefined&&['MAXHP',_0x4222a4(0x444),_0x4222a4(0x746),_0x4222a4(0x21a),_0x4222a4(0x778),_0x4222a4(0x386),'AGI',_0x4222a4(0x5fd)][_0x4222a4(0x597)](String(_0x24db47)['toUpperCase']()[_0x4222a4(0x711)]()))return _0x513048;_0x1e855a=_0x1e855a||0x0;if(VisuMZ[_0x4222a4(0x81f)][_0x4222a4(0x1d5)][_0x24db47])return VisuMZ[_0x4222a4(0x81f)]['CustomParamType'][_0x24db47]===_0x4222a4(0x475)?_0x513048:String((_0x513048*0x64)[_0x4222a4(0x1f3)](_0x1e855a))+'%';return String((_0x513048*0x64)['toFixed'](_0x1e855a))+'%';},VisuMZ['GroupDigits']=function(_0x55996f){const _0x45d2dd=_0x52fb7e;_0x55996f=String(_0x55996f);if(!_0x55996f)return _0x55996f;if(typeof _0x55996f!==_0x45d2dd(0x482))return _0x55996f;const _0x3a7760=VisuMZ[_0x45d2dd(0x81f)]['Settings']['QoL'][_0x45d2dd(0x171)]||_0x45d2dd(0x242),_0x2f7bc3={'maximumFractionDigits':0x6};_0x55996f=_0x55996f[_0x45d2dd(0x1cd)](/\[(.*?)\]/g,(_0x227061,_0x100ba7)=>{const _0x5026a9=_0x45d2dd;return VisuMZ[_0x5026a9(0x5b9)](_0x100ba7,'[',']');}),_0x55996f=_0x55996f[_0x45d2dd(0x1cd)](/<(.*?)>/g,(_0x3eae68,_0x407d08)=>{const _0x17276b=_0x45d2dd;return VisuMZ[_0x17276b(0x5b9)](_0x407d08,'<','>');}),_0x55996f=_0x55996f[_0x45d2dd(0x1cd)](/\{\{(.*?)\}\}/g,(_0x2da4cf,_0x56e24a)=>{const _0x1bff30=_0x45d2dd;return VisuMZ[_0x1bff30(0x5b9)](_0x56e24a,'','');}),_0x55996f=_0x55996f[_0x45d2dd(0x1cd)](/(\d+\.?\d*)/g,(_0xa28cd9,_0x2206ef)=>{const _0x524f0e=_0x45d2dd;let _0x2b4f59=_0x2206ef;if(_0x2b4f59[0x0]==='0')return _0x2b4f59;if(_0x2b4f59[_0x2b4f59[_0x524f0e(0x7e7)]-0x1]==='.')return Number(_0x2b4f59)['toLocaleString'](_0x3a7760,_0x2f7bc3)+'.';else return _0x2b4f59[_0x2b4f59[_0x524f0e(0x7e7)]-0x1]===','?Number(_0x2b4f59)[_0x524f0e(0x5a9)](_0x3a7760,_0x2f7bc3)+',':Number(_0x2b4f59)['toLocaleString'](_0x3a7760,_0x2f7bc3);});let _0x52cb77=0x3;while(_0x52cb77--){_0x55996f=VisuMZ[_0x45d2dd(0x428)](_0x55996f);}return _0x55996f;},VisuMZ['PreserveNumbers']=function(_0x5a4bd2,_0x498bce,_0x4d7875){const _0x5751ab=_0x52fb7e;return _0x5a4bd2=_0x5a4bd2[_0x5751ab(0x1cd)](/(\d)/gi,(_0x285f93,_0x5ce765)=>_0x5751ab(0x6dd)['format'](Number(_0x5ce765))),_0x5751ab(0x430)[_0x5751ab(0x726)](_0x5a4bd2,_0x498bce,_0x4d7875);},VisuMZ[_0x52fb7e(0x428)]=function(_0x298785){const _0x537e35=_0x52fb7e;return _0x298785=_0x298785[_0x537e35(0x1cd)](/PRESERVCONVERSION\((\d+)\)/gi,(_0x206c90,_0x5a184e)=>Number(parseInt(_0x5a184e))),_0x298785;},VisuMZ[_0x52fb7e(0x1f7)]=function(_0x16fb94){const _0x5d8251=_0x52fb7e;SoundManager[_0x5d8251(0x73f)]();if(!Utils[_0x5d8251(0x7a2)]()){const _0x4f379a=window[_0x5d8251(0x45e)](_0x16fb94,_0x5d8251(0x5a6));}else{const _0x4cce98=process[_0x5d8251(0x240)]==_0x5d8251(0x1d6)?_0x5d8251(0x45e):process[_0x5d8251(0x240)]==_0x5d8251(0x546)?'start':_0x5d8251(0x333);require('child_process')[_0x5d8251(0x45b)](_0x4cce98+'\x20'+_0x16fb94);}},VisuMZ[_0x52fb7e(0x257)]=function(_0x1467f6,_0x9ee693){const _0x2b8d4d=_0x52fb7e;if(!_0x1467f6)return'';const _0x195bef=_0x1467f6['baseId']||_0x1467f6['id'];let _0x237dda='';return _0x1467f6[_0x2b8d4d(0xc0)]!==undefined&&_0x1467f6[_0x2b8d4d(0x9d)]!==undefined&&(_0x237dda=_0x2b8d4d(0x10a)[_0x2b8d4d(0x726)](_0x195bef,_0x9ee693)),_0x1467f6[_0x2b8d4d(0x767)]!==undefined&&_0x1467f6[_0x2b8d4d(0x77)]!==undefined&&(_0x237dda=_0x2b8d4d(0x654)[_0x2b8d4d(0x726)](_0x195bef,_0x9ee693)),_0x1467f6[_0x2b8d4d(0x3c6)]!==undefined&&_0x1467f6[_0x2b8d4d(0x70f)]!==undefined&&(_0x237dda=_0x2b8d4d(0x42a)[_0x2b8d4d(0x726)](_0x195bef,_0x9ee693)),_0x1467f6[_0x2b8d4d(0x7af)]!==undefined&&_0x1467f6['consumable']!==undefined&&(_0x237dda=_0x2b8d4d(0x35d)['format'](_0x195bef,_0x9ee693)),_0x1467f6[_0x2b8d4d(0x1a8)]!==undefined&&_0x1467f6[_0x2b8d4d(0x80e)]===0x1&&(_0x237dda=_0x2b8d4d(0x5c0)[_0x2b8d4d(0x726)](_0x195bef,_0x9ee693)),_0x1467f6[_0x2b8d4d(0x7a6)]!==undefined&&_0x1467f6[_0x2b8d4d(0x80e)]>0x1&&(_0x237dda=_0x2b8d4d(0x20b)[_0x2b8d4d(0x726)](_0x195bef,_0x9ee693)),_0x1467f6[_0x2b8d4d(0xef)]!==undefined&&_0x1467f6[_0x2b8d4d(0x210)]!==undefined&&(_0x237dda=_0x2b8d4d(0x304)['format'](_0x195bef,_0x9ee693)),_0x1467f6[_0x2b8d4d(0xdb)]!==undefined&&_0x1467f6[_0x2b8d4d(0x221)]!==undefined&&(_0x237dda=_0x2b8d4d(0x618)[_0x2b8d4d(0x726)](_0x195bef,_0x9ee693)),_0x237dda;},Game_Picture[_0x52fb7e(0x7d3)]['anchor']=function(){return this['_anchor'];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x5e2)]=Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0xbc)],Game_Picture['prototype'][_0x52fb7e(0xbc)]=function(){const _0x562f41=_0x52fb7e;VisuMZ[_0x562f41(0x81f)][_0x562f41(0x5e2)][_0x562f41(0x809)](this),this[_0x562f41(0x154)]={'x':0x0,'y':0x0},this[_0x562f41(0x490)]={'x':0x0,'y':0x0};},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x4e9)]=Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x815)],Game_Picture['prototype'][_0x52fb7e(0x815)]=function(){const _0x5dc4fb=_0x52fb7e;this[_0x5dc4fb(0x72f)]();const _0x5ad659=this[_0x5dc4fb(0x624)];VisuMZ['CoreEngine'][_0x5dc4fb(0x4e9)][_0x5dc4fb(0x809)](this),_0x5ad659>0x0&&this[_0x5dc4fb(0x624)]<=0x0&&(this['_x']=this['_targetX'],this['_y']=this[_0x5dc4fb(0x5ef)],this[_0x5dc4fb(0x4f5)]=this[_0x5dc4fb(0x2e4)],this[_0x5dc4fb(0x162)]=this[_0x5dc4fb(0x7a0)],this[_0x5dc4fb(0x641)]=this[_0x5dc4fb(0x699)],this['_anchor']&&(this['_anchor']['x']=this['_targetAnchor']['x'],this[_0x5dc4fb(0x154)]['y']=this[_0x5dc4fb(0x490)]['y']));},VisuMZ['CoreEngine'][_0x52fb7e(0x683)]=Game_Picture[_0x52fb7e(0x7d3)]['show'],Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x6b3)]=function(_0x5cc7f2,_0x2c6f4e,_0xd25f5f,_0x494723,_0x2074b8,_0x33f0d1,_0x5da273,_0x59fadd){const _0x288069=_0x52fb7e;VisuMZ[_0x288069(0x81f)][_0x288069(0x683)][_0x288069(0x809)](this,_0x5cc7f2,_0x2c6f4e,_0xd25f5f,_0x494723,_0x2074b8,_0x33f0d1,_0x5da273,_0x59fadd),this[_0x288069(0x68e)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x2c6f4e]||{'x':0x0,'y':0x0});},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x4ed)]=Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x65b)],Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x65b)]=function(_0x452eb1,_0xcdf269,_0x49cf3a,_0x38b9fb,_0x49bb32,_0x548008,_0x3d7916,_0x2609b5,_0x35c10a){const _0x504fe4=_0x52fb7e;VisuMZ[_0x504fe4(0x81f)][_0x504fe4(0x4ed)][_0x504fe4(0x809)](this,_0x452eb1,_0xcdf269,_0x49cf3a,_0x38b9fb,_0x49bb32,_0x548008,_0x3d7916,_0x2609b5,_0x35c10a),this[_0x504fe4(0x66f)]([{'x':0x0,'y':0x0},{'x':0.5,'y':0.5}][_0x452eb1]||{'x':0x0,'y':0x0});},Game_Picture[_0x52fb7e(0x7d3)][_0x52fb7e(0x72f)]=function(){const _0x476411=_0x52fb7e;this[_0x476411(0x624)]>0x0&&(this['_anchor']['x']=this[_0x476411(0x6e9)](this[_0x476411(0x154)]['x'],this[_0x476411(0x490)]['x']),this[_0x476411(0x154)]['y']=this['applyEasing'](this[_0x476411(0x154)]['y'],this[_0x476411(0x490)]['y']));},Game_Picture['prototype']['setAnchor']=function(_0x4e63af){const _0x507118=_0x52fb7e;this[_0x507118(0x154)]=_0x4e63af,this[_0x507118(0x490)]=JsonEx[_0x507118(0x2cb)](this['_anchor']);},Game_Picture['prototype']['setTargetAnchor']=function(_0x319619){const _0x2e1b4f=_0x52fb7e;this[_0x2e1b4f(0x490)]=_0x319619;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0xa4)]=Sprite_Picture['prototype'][_0x52fb7e(0x697)],Sprite_Picture[_0x52fb7e(0x7d3)]['updateOrigin']=function(){const _0x5a077f=_0x52fb7e,_0xf1204d=this[_0x5a077f(0x363)]();!_0xf1204d['anchor']()?VisuMZ[_0x5a077f(0x81f)][_0x5a077f(0xa4)][_0x5a077f(0x809)](this):(this[_0x5a077f(0x1ab)]['x']=_0xf1204d[_0x5a077f(0x1ab)]()['x'],this['anchor']['y']=_0xf1204d[_0x5a077f(0x1ab)]()['y']);},Game_Action[_0x52fb7e(0x7d3)][_0x52fb7e(0x33a)]=function(_0x15e24f){const _0x4540d3=_0x52fb7e;if(_0x15e24f){const _0x1bb579=_0x15e24f[_0x4540d3(0x478)];if(_0x1bb579===0x1&&this['subject']()[_0x4540d3(0x314)]()!==0x1)this['setAttack']();else _0x1bb579===0x2&&this[_0x4540d3(0x5b8)]()[_0x4540d3(0x747)]()!==0x2?this[_0x4540d3(0x3fd)]():this[_0x4540d3(0x2fb)](_0x1bb579);}else this[_0x4540d3(0x17a)]();},Game_Actor['prototype'][_0x52fb7e(0x347)]=function(){const _0xa75ed2=_0x52fb7e;return this[_0xa75ed2(0x62b)]()[_0xa75ed2(0x5a2)](_0x5dc9bc=>this[_0xa75ed2(0x27b)](_0x5dc9bc)&&this[_0xa75ed2(0x46f)]()[_0xa75ed2(0x597)](_0x5dc9bc[_0xa75ed2(0x3c6)]));},Window_Base['prototype'][_0x52fb7e(0x1c0)]=function(){const _0x3440e1=_0x52fb7e;this[_0x3440e1(0x17d)]=new Sprite(),this[_0x3440e1(0x17d)][_0x3440e1(0x2f5)]=new Bitmap(0x0,0x0),this[_0x3440e1(0x17d)]['x']=0x0,this[_0x3440e1(0x23a)](this[_0x3440e1(0x17d)]);},Window_Base['prototype']['refreshDimmerBitmap']=function(){const _0x297b56=_0x52fb7e;if(this[_0x297b56(0x17d)]){const _0x78775e=this[_0x297b56(0x17d)]['bitmap'],_0x2c20b5=this[_0x297b56(0x48a)],_0x3b0ce3=this[_0x297b56(0x480)],_0xfa78ed=this[_0x297b56(0x34a)],_0x3575e7=ColorManager['dimColor1'](),_0x2bb2b2=ColorManager[_0x297b56(0x58b)]();_0x78775e[_0x297b56(0x4ad)](_0x2c20b5,_0x3b0ce3),_0x78775e[_0x297b56(0x377)](0x0,0x0,_0x2c20b5,_0xfa78ed,_0x2bb2b2,_0x3575e7,!![]),_0x78775e[_0x297b56(0x6b2)](0x0,_0xfa78ed,_0x2c20b5,_0x3b0ce3-_0xfa78ed*0x2,_0x3575e7),_0x78775e[_0x297b56(0x377)](0x0,_0x3b0ce3-_0xfa78ed,_0x2c20b5,_0xfa78ed,_0x3575e7,_0x2bb2b2,!![]),this['_dimmerSprite'][_0x297b56(0x5e3)](0x0,0x0,_0x2c20b5,_0x3b0ce3);}},Game_Actor['prototype'][_0x52fb7e(0xb6)]=function(){const _0x142ddf=_0x52fb7e;for(let _0x3cb2e0=0x0;_0x3cb2e0<this[_0x142ddf(0x340)]();_0x3cb2e0++){const _0x2b98a2=this[_0x142ddf(0x6c0)]();let _0x5cc26e=Number[_0x142ddf(0x80d)];this['setAction'](_0x3cb2e0,_0x2b98a2[0x0]);for(const _0x2fb762 of _0x2b98a2){const _0x24b7f5=_0x2fb762[_0x142ddf(0x3cf)]();_0x24b7f5>_0x5cc26e&&(_0x5cc26e=_0x24b7f5,this[_0x142ddf(0x2be)](_0x3cb2e0,_0x2fb762));}}this[_0x142ddf(0x1ad)]('waiting');},Window_BattleItem[_0x52fb7e(0x7d3)][_0x52fb7e(0xab)]=function(_0x5ce737){const _0x231f86=_0x52fb7e;return BattleManager['actor']()?BattleManager[_0x231f86(0x739)]()[_0x231f86(0x27b)](_0x5ce737):Window_ItemList[_0x231f86(0x7d3)][_0x231f86(0xab)][_0x231f86(0x809)](this,_0x5ce737);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x6e1)]=Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x62d)],Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x62d)]=function(){const _0x21d028=_0x52fb7e;VisuMZ[_0x21d028(0x81f)][_0x21d028(0x6e1)]['call'](this);const _0x26c128=this[_0x21d028(0x667)][_0x21d028(0x696)];if(_0x26c128)this['addChild'](_0x26c128);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x167)]=Scene_Battle['prototype'][_0x52fb7e(0x62d)],Scene_Battle['prototype'][_0x52fb7e(0x62d)]=function(){const _0x529666=_0x52fb7e;VisuMZ[_0x529666(0x81f)][_0x529666(0x167)][_0x529666(0x809)](this);const _0x5a8070=this[_0x529666(0x667)][_0x529666(0x696)];if(_0x5a8070)this[_0x529666(0x70e)](_0x5a8070);},Sprite_Actor['prototype']['update']=function(){const _0x55abf3=_0x52fb7e;Sprite_Battler['prototype'][_0x55abf3(0x843)]['call'](this),this[_0x55abf3(0x47a)]();if(this[_0x55abf3(0x15e)])this[_0x55abf3(0x26b)]();else this[_0x55abf3(0x71a)]!==''&&(this['_battlerName']='');},Window[_0x52fb7e(0x7d3)][_0x52fb7e(0xac)]=function(){const _0x1c64d4=_0x52fb7e,_0x247d81=this[_0x1c64d4(0x622)],_0x5ad6e7=this[_0x1c64d4(0x7c3)],_0x1e4b9c=0x18,_0x5838e4=_0x1e4b9c/0x2,_0x40b84f=0x60+_0x1e4b9c,_0x35caaa=0x0+_0x1e4b9c;this[_0x1c64d4(0x2b4)][_0x1c64d4(0x2f5)]=this[_0x1c64d4(0x5be)],this[_0x1c64d4(0x2b4)][_0x1c64d4(0x1ab)]['x']=0.5,this[_0x1c64d4(0x2b4)][_0x1c64d4(0x1ab)]['y']=0.5,this[_0x1c64d4(0x2b4)][_0x1c64d4(0x5e3)](_0x40b84f+_0x5838e4,_0x35caaa+_0x5838e4+_0x1e4b9c,_0x1e4b9c,_0x5838e4),this[_0x1c64d4(0x2b4)][_0x1c64d4(0x65b)](Math['round'](_0x247d81/0x2),Math[_0x1c64d4(0x679)](_0x5ad6e7-_0x5838e4)),this[_0x1c64d4(0x68d)][_0x1c64d4(0x2f5)]=this[_0x1c64d4(0x5be)],this[_0x1c64d4(0x68d)][_0x1c64d4(0x1ab)]['x']=0.5,this[_0x1c64d4(0x68d)][_0x1c64d4(0x1ab)]['y']=0.5,this[_0x1c64d4(0x68d)][_0x1c64d4(0x5e3)](_0x40b84f+_0x5838e4,_0x35caaa,_0x1e4b9c,_0x5838e4),this['_upArrowSprite']['move'](Math[_0x1c64d4(0x679)](_0x247d81/0x2),Math[_0x1c64d4(0x679)](_0x5838e4));},Window['prototype'][_0x52fb7e(0x454)]=function(){const _0x26f2b3=_0x52fb7e,_0x5069f6=0x90,_0x97cce=0x60,_0x30987a=0x18;this[_0x26f2b3(0x104)]['bitmap']=this['_windowskin'],this[_0x26f2b3(0x104)]['anchor']['x']=0.5,this[_0x26f2b3(0x104)][_0x26f2b3(0x1ab)]['y']=0x1,this['_pauseSignSprite'][_0x26f2b3(0x65b)](Math[_0x26f2b3(0x679)](this[_0x26f2b3(0x622)]/0x2),this[_0x26f2b3(0x7c3)]),this[_0x26f2b3(0x104)][_0x26f2b3(0x5e3)](_0x5069f6,_0x97cce,_0x30987a,_0x30987a),this['_pauseSignSprite']['alpha']=0xff;},Window[_0x52fb7e(0x7d3)]['_updateFilterArea']=function(){const _0x223e40=_0x52fb7e,_0x97df53=this[_0x223e40(0x13d)][_0x223e40(0x686)]['apply'](new Point(0x0,0x0)),_0x35ba3c=this[_0x223e40(0x13d)]['filterArea'];_0x35ba3c['x']=_0x97df53['x']+this[_0x223e40(0x29c)]['x'],_0x35ba3c['y']=_0x97df53['y']+this['origin']['y'],_0x35ba3c['width']=Math[_0x223e40(0x1ec)](this[_0x223e40(0x6ff)]*this[_0x223e40(0x41a)]['x']),_0x35ba3c['height']=Math['ceil'](this['innerHeight']*this['scale']['y']);},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x39f)]=Window[_0x52fb7e(0x7d3)]['_refreshBack'],Window[_0x52fb7e(0x7d3)][_0x52fb7e(0x5ee)]=function(){const _0xf7be6b=_0x52fb7e,_0x1dcd1c=VisuMZ[_0xf7be6b(0x81f)]['Settings'][_0xf7be6b(0xeb)]['CorrectSkinBleeding']??!![];if(!_0x1dcd1c)return VisuMZ[_0xf7be6b(0x81f)][_0xf7be6b(0x39f)][_0xf7be6b(0x809)](this);const _0x380077=this[_0xf7be6b(0x5d8)],_0x57f00b=Math[_0xf7be6b(0x53e)](0x0,this['_width']-_0x380077*0x2),_0x5a2b6f=Math['max'](0x0,this[_0xf7be6b(0x7c3)]-_0x380077*0x2),_0x1795c2=this[_0xf7be6b(0x614)],_0x5b5a03=_0x1795c2['children'][0x0];_0x1795c2[_0xf7be6b(0x2f5)]=this[_0xf7be6b(0x5be)],_0x1795c2[_0xf7be6b(0x5e3)](0x0,0x0,0x60,0x60),_0x1795c2[_0xf7be6b(0x65b)](_0x380077,_0x380077),_0x1795c2['scale']['x']=_0x57f00b/0x60,_0x1795c2[_0xf7be6b(0x41a)]['y']=_0x5a2b6f/0x60,_0x5b5a03[_0xf7be6b(0x2f5)]=this[_0xf7be6b(0x5be)],_0x5b5a03[_0xf7be6b(0x5e3)](0x0,0x60,0x60,0x60),_0x5b5a03[_0xf7be6b(0x65b)](0x0,0x0,_0x57f00b,_0x5a2b6f),_0x5b5a03['scale']['x']=0x1/_0x1795c2[_0xf7be6b(0x41a)]['x'],_0x5b5a03[_0xf7be6b(0x41a)]['y']=0x1/_0x1795c2['scale']['y'],_0x1795c2[_0xf7be6b(0x191)](this[_0xf7be6b(0x2fd)]);},Game_Temp[_0x52fb7e(0x7d3)]['sceneTerminationClearEffects']=function(){const _0x2c4666=_0x52fb7e;this[_0x2c4666(0x514)]=[],this[_0x2c4666(0x1a1)]=[],this['_pointAnimationQueue']=[],this[_0x2c4666(0x474)]=[];},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x5b5)]=Scene_Base['prototype'][_0x52fb7e(0x82d)],Scene_Base[_0x52fb7e(0x7d3)][_0x52fb7e(0x82d)]=function(){const _0x39afc6=_0x52fb7e;if($gameTemp)$gameTemp[_0x39afc6(0x7ca)]();VisuMZ[_0x39afc6(0x81f)][_0x39afc6(0x5b5)][_0x39afc6(0x809)](this);},Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x4e4)]=function(_0x594c95){const _0x17d87f=_0x52fb7e,_0x476d61=this['context'];_0x476d61['save'](),_0x476d61[_0x17d87f(0x596)]=this[_0x17d87f(0x57c)]();const _0x5e6c92=_0x476d61[_0x17d87f(0x24f)](_0x594c95)[_0x17d87f(0x48a)];return _0x476d61[_0x17d87f(0x18c)](),_0x5e6c92;},Window_Message['prototype'][_0x52fb7e(0x3e3)]=function(_0x243492){const _0x57251b=_0x52fb7e;return this['useFontWidthFix']()?this[_0x57251b(0x6f8)][_0x57251b(0x4e4)](_0x243492):Window_Base[_0x57251b(0x7d3)][_0x57251b(0x3e3)][_0x57251b(0x809)](this,_0x243492);},Window_Message[_0x52fb7e(0x7d3)][_0x52fb7e(0x1e7)]=function(){const _0x327e3b=_0x52fb7e;return VisuMZ['CoreEngine'][_0x327e3b(0x2d2)][_0x327e3b(0x30e)][_0x327e3b(0x790)]??!![];},VisuMZ[_0x52fb7e(0x81f)]['Game_Action_numRepeats']=Game_Action[_0x52fb7e(0x7d3)][_0x52fb7e(0x61a)],Game_Action['prototype']['numRepeats']=function(){const _0x8ab49f=_0x52fb7e;return this[_0x8ab49f(0xbd)]()?VisuMZ[_0x8ab49f(0x81f)][_0x8ab49f(0x5dc)]['call'](this):0x0;},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x2de)]=Game_Action[_0x52fb7e(0x7d3)][_0x52fb7e(0x1f0)],Game_Action[_0x52fb7e(0x7d3)]['setAttack']=function(){const _0x471422=_0x52fb7e;this[_0x471422(0x5b8)]()&&this[_0x471422(0x5b8)]()['canAttack']()?VisuMZ['CoreEngine'][_0x471422(0x2de)]['call'](this):this[_0x471422(0x17a)]();},Sprite_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x2ef)]=function(){return 0x24;},Sprite_Name[_0x52fb7e(0x7d3)][_0x52fb7e(0x7f1)]=function(){const _0x446a31=_0x52fb7e,_0x2f3888=this[_0x446a31(0x4e3)](),_0x39d287=this['bitmapWidth'](),_0xa4f47b=this['bitmapHeight']();this['setupFont'](),this[_0x446a31(0x2f5)]['clear'](),this[_0x446a31(0x2f5)][_0x446a31(0x1a4)](_0x2f3888,0x4,0x0,_0x39d287-0xa,_0xa4f47b,'left');},Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x1a4)]=function(_0x3bdac6,_0x23d9b7,_0xd0e9f8,_0xd08c4b,_0x2ac194,_0x5d8b0a){const _0x448060=_0x52fb7e,_0x330011=this['context'],_0x16a8c0=_0x330011[_0x448060(0x617)];_0xd08c4b=_0xd08c4b||0xffffffff;let _0xb89a78=_0x23d9b7,_0x3fdbd1=Math[_0x448060(0x679)](_0xd0e9f8+0x18/0x2+this[_0x448060(0xd1)]*0.35);_0x5d8b0a===_0x448060(0x84c)&&(_0xb89a78+=_0xd08c4b/0x2),_0x5d8b0a==='right'&&(_0xb89a78+=_0xd08c4b),_0x330011[_0x448060(0x33d)](),_0x330011[_0x448060(0x596)]=this['_makeFontNameText'](),_0x330011[_0x448060(0x96)]=_0x5d8b0a,_0x330011[_0x448060(0x805)]=_0x448060(0x282),_0x330011[_0x448060(0x617)]=0x1,this[_0x448060(0x7a1)](_0x3bdac6,_0xb89a78,_0x3fdbd1,_0xd08c4b),_0x330011[_0x448060(0x617)]=_0x16a8c0,this[_0x448060(0x336)](_0x3bdac6,_0xb89a78,_0x3fdbd1,_0xd08c4b),_0x330011[_0x448060(0x18c)](),this[_0x448060(0x6ad)][_0x448060(0x843)]();},VisuMZ[_0x52fb7e(0x81f)][_0x52fb7e(0x75)]=BattleManager[_0x52fb7e(0x19b)],BattleManager[_0x52fb7e(0x19b)]=function(_0xe26e0f){const _0x20c374=_0x52fb7e;if(this[_0x20c374(0x6fe)][_0x20c374(0x59b)]())return![];return VisuMZ[_0x20c374(0x81f)][_0x20c374(0x75)]['call'](this,_0xe26e0f);},BattleManager[_0x52fb7e(0x374)]=function(){const _0x1e18fd=_0x52fb7e;if(this[_0x1e18fd(0x4d1)])this[_0x1e18fd(0x76c)][_0x1e18fd(0x374)](this[_0x1e18fd(0x4d1)]);this['_phase']=_0x1e18fd(0x183),this[_0x1e18fd(0x4d1)]&&this[_0x1e18fd(0x4d1)][_0x1e18fd(0x340)]()===0x0&&(this[_0x1e18fd(0x17e)](this['_subject']),this['_subject']=null);},Bitmap[_0x52fb7e(0x7d3)][_0x52fb7e(0x3b2)]=function(){const _0x4b1fa3=_0x52fb7e;this[_0x4b1fa3(0x736)]=new Image(),this[_0x4b1fa3(0x736)][_0x4b1fa3(0x85)]=this[_0x4b1fa3(0x7ba)][_0x4b1fa3(0x501)](this),this[_0x4b1fa3(0x736)][_0x4b1fa3(0x26d)]=this['_onError'][_0x4b1fa3(0x501)](this),this[_0x4b1fa3(0x821)](),this[_0x4b1fa3(0x461)]=_0x4b1fa3(0x6a7),Utils[_0x4b1fa3(0x280)]()?this[_0x4b1fa3(0x98)]():(this[_0x4b1fa3(0x736)][_0x4b1fa3(0x69f)]=this[_0x4b1fa3(0x40d)],![]&&this[_0x4b1fa3(0x736)][_0x4b1fa3(0x48a)]>0x0&&(this[_0x4b1fa3(0x736)][_0x4b1fa3(0x85)]=null,this['_onLoad']()));},Scene_Skill['prototype']['onActorChange']=function(){const _0x31d22b=_0x52fb7e;Scene_MenuBase[_0x31d22b(0x7d3)][_0x31d22b(0x620)][_0x31d22b(0x809)](this),this[_0x31d22b(0x176)](),this[_0x31d22b(0x527)]['deactivate'](),this[_0x31d22b(0x527)][_0x31d22b(0x3d5)](),this['_skillTypeWindow'][_0x31d22b(0x7f9)]();},Scene_Skill[_0x52fb7e(0x7d3)][_0x52fb7e(0x169)]=function(){const _0x409d2b=_0x52fb7e;return this['_skillTypeWindow']&&this['_skillTypeWindow'][_0x409d2b(0x625)];},Game_Map['prototype'][_0x52fb7e(0x405)]=function(_0x15cafb,_0x2aa0ad,_0x4da274){const _0x52b95a=_0x52fb7e,_0x199fe0=this[_0x52b95a(0x7e6)](),_0x2731b2=this[_0x52b95a(0x323)](_0x15cafb,_0x2aa0ad);for(const _0x43b66b of _0x2731b2){const _0x24a6a3=_0x199fe0[_0x43b66b];if(_0x24a6a3===undefined||_0x24a6a3===null){if($gameTemp[_0x52b95a(0x688)]()&&!DataManager[_0x52b95a(0x1e8)]()){let _0x224fee=_0x52b95a(0x402)+'\x0a';_0x224fee+=_0x52b95a(0x477)+'\x0a',_0x224fee+='and\x20add\x20it\x20onto\x20this\x20one.',this[_0x52b95a(0x292)]()?(alert(_0x224fee),SceneManager[_0x52b95a(0x7c7)]()):(console[_0x52b95a(0x449)](_0x224fee),!$gameTemp[_0x52b95a(0xd9)]&&($gameTemp[_0x52b95a(0xd9)]=!![],SceneManager[_0x52b95a(0x2db)]()));}}if((_0x24a6a3&0x10)!==0x0)continue;if((_0x24a6a3&_0x4da274)===0x0)return!![];if((_0x24a6a3&_0x4da274)===_0x4da274)return![];}return![];},Game_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x292)]=function(){const _0x2b9808=_0x52fb7e;if(Imported['VisuMZ_3_EventChainReact'])return!![];if(Imported[_0x2b9808(0x48b)])return!![];return![];},Sprite_Animation['prototype'][_0x52fb7e(0x7c)]=function(_0xd07f97){const _0x2611d5=_0x52fb7e;!this[_0x2611d5(0x4fc)]&&(this[_0x2611d5(0x4fc)]=_0xd07f97['gl'][_0x2611d5(0x5f7)](_0xd07f97['gl'][_0x2611d5(0x148)]));},VisuMZ['CoreEngine']['Scene_Map_shouldAutosave']=Scene_Map['prototype']['shouldAutosave'],Scene_Map[_0x52fb7e(0x7d3)][_0x52fb7e(0x578)]=function(){const _0x54db7e=_0x52fb7e,_0x49c753=SceneManager[_0x54db7e(0x6a9)][_0x54db7e(0x4e3)];if([_0x54db7e(0xaa),_0x54db7e(0x623),'Scene_TitleTransition',_0x54db7e(0xde)]['includes'](_0x49c753))return![];return VisuMZ['CoreEngine'][_0x54db7e(0x7b0)][_0x54db7e(0x809)](this);};