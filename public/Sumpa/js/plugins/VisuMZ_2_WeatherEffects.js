//=============================================================================
// VisuStella MZ - Weather Effects
// VisuMZ_2_WeatherEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_WeatherEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeatherEffects = VisuMZ.WeatherEffects || {};
VisuMZ.WeatherEffects.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.05] [WeatherEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weather_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ didn't come with too many weather effects. Only three: rain,
 * storm, and snow. This plugin will ramp that number up a considerable amount
 * and revise the way the original three weathers look, too. These new weather
 * patterns will help breathe life into your game for various scenarios and/or
 * cutscenes. The added control and customization options mean you can alter
 * their behaviors to your liking.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Assign multiple weathers up to a max of 20. For maps, there are 10 layers
 *   on top of the map and another 10 layers behind the tilemap (but above the
 *   parallax layer).
 * * Set certain maps to not show any weather through notetags. This allows you
 *   to avoid having to turn on and off your weather settings.
 * * The basic RPG Maker MZ weather patterns (Rain, Storm, and Snow) have been
 *   recreated to look better than before.
 * * Plugin Commands allow for game devs to place the newly added weather types
 *   with intricate levels of customization.
 * * Customization options available for weather patterns include spawn numbers
 *   control, spawn location control, opacity easing, trajectory properties,
 *   coloring options, overlay dimmer control, and more!
 * * There are 10 weather patterns for each of the 8-themed elements, alongside
 *   lots of preset icon-related weather patterns for over 80+ weather pattern
 *   types to choose from.
 * * More basic and easier to use directional flying icon weather patterns of
 *   varying speeds can be used to ease yourself into how weather patterns can
 *   be customized.
 * * Newly added weather patterns come with their own generated sprites.
 *   There's no need to use custom images or such unless you want to. Custom
 *   images can come in the form of icons or pictures. Some generated sprites
 *   include many variances (such as Snowflakes).
 * * Weather layers can now be placed on top of the map or below the map, aka
 *   between the tilemap and parallax layer.
 * * Plugin Commands allow the player to clear multiple weather layers, adjust
 *   the power of multiple weather layers, memorize, and even replay multiple
 *   weather layer patterns in a go.
 * * Up to 20 layers can be used for weather, all of each having different
 *   settings. 10 layers for above the map. 10 layers for below the map. This
 *   can be utilized to create more detailed weather effects than ever before.
 * * Common Events can be linked up with weather patterns, launching parallel
 *   whenever a weather particular respawns, allowing for special effects like
 *   screen flashes and/or playing sounds. This allows devs to match up certain
 *   weather patterns like thunder sounds and flashes with thunder bolts.
 * * A new option "Weather Density" has been added. The amount of weather
 *   sprites on screen can be tuned downward in order to reduce frame drops for
 *   players with weaker computers.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them. Other things listed here are also worthy of
 * mentioning.
 *
 * ---
 *
 * Weather System Overwrite
 * 
 * As one would expect out of a plugin focused around changing weather effects,
 * the whole RPG Maker MZ weather system has been revamped. This means that a
 * lot of the default functions related to weather have been overwritten in
 * order to fulfill the demands of the plugin. Such demands include having more
 * control over the individual weather particles to the way the sprites are
 * handled and how the data persists for their behaviors.
 *
 * ---
 * 
 * Weather Layers
 * 
 * There are now multiple weather layers, allowing you to have multiple weather
 * patterns on simultaneously. Amongst the layers, there are upper and lower
 * layer types, too.
 * 
 * Upper layers are what RPG Maker MZ has, they exist above the tilemap. The
 * lower layers are new and exist below the tilemap but above the parallax
 * layer.
 * 
 * As such, weather effects below the tilemap won't be visible unless you are
 * using transparent tiles. This can be applied to windows or cliff tiles (for
 * some of these, you'll have to modify the tiles yourself). This effect can be
 * used to give a sense of depth, such as transparent windows observing a large
 * blizzard happening outside.
 * 
 * ---
 * 
 * Generated Weather Sprite Graphics
 * 
 * The default generated weather sprite graphics have been overwritten in favor
 * of better looking ones that we've made. Due to a technique that we've
 * created for this plugin, the generated weather sprites will also appear more
 * plentiful while keeping raw sprite counts low.
 * 
 * For those wondering, the "Rain", "Storm", and "Snow" weather types are the
 * default RPG Maker MZ weathers that we have changed. They can be accessed
 * through the usual event commands, or they can be accessed through Plugin
 * Commands.
 * 
 * Accessing these weather patterns through Plugin Commands gives you, the game
 * dev, more control over how they behave compared to the minimal control that
 * the default RPG Maker MZ event commands have.
 * 
 * ---
 * 
 * Custom Icons and Custom Pictures
 * 
 * If you plan on using custom icons or custom pictures, you might find it odd
 * that there is less volume of the weather sprite on the screen compared to
 * the generated graphics. This is due to a custering replication technique we
 * use for the sprite textures that make them appear more plentiful. To remedy
 * this, adjust the weight values for the icon variations and picture
 * variations to be higher than that of the generated sprites.
 * 
 * When designing custom icons and/or custom pictures for weather sprite
 * purposes, design them facing right at "0 degrees". This way, the angle will
 * align better and you can avoid using the "Visual Angle Offset" if you are
 * unfamiliar or troubled by offsets.
 * 
 * ---
 * 
 * RPG Maker MZ Tints
 * 
 * Weather patterns placed on the below tileset layer will be covered by RPG
 * Maker MZ's default tint layer, thus, affected by it. However, there's
 * nothing we can do about that one unlike the darkness overlay provided by the
 * Lighting Effects plugin where there's a workaround. Either you use the
 * Lighting Effects darkness overlay or you play work around tint usage in
 * regards to below tileset layer.
 * 
 * Weather patterns placed above the tileset layer will NOT be affected by RPG
 * Maker MZ's default tint layer nor will it be affected by the darkness
 * overlay from the Lighting Effects plugin. This is because not all effects
 * should be affected by it. If you do want to apply a tint to you, you can do
 * so via the custom settings and apply the tint manually. It's not applied
 * from the getgo because it's more efficient to make the upper weather sprites
 * unaffected first and applied later than the opposite.
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
 * Battle Core
 *
 * Those with the Battle Core can have weather effects show up in battle, too.
 * This does not happen without it. This is because the Battle Core has
 * provided the code infrastructure to support battle weather and this plugin
 * ties in with that code infrastructure better.
 *
 * ---
 *
 * ============================================================================
 * Keeping FPS Stable
 * ============================================================================
 * 
 * As this is a plugin that adds special effects to your game, you do have to
 * be mindful about how you use the various Weather Effects features or else
 * your game will face FPS drops.
 *
 * ---
 * 
 * Here are a few things to keep in mind:
 * 
 * 1. Hues and tones are expensive to process graphically. Using a lot of hue
 *    and/or tone variations on lots of weather sprites at the same time can
 *    eat up a chunk of the player's FPS. If you do plan on using hue and/or
 *    tone variations, keep the sprite count low by either using lower power
 *    settings or less sprites on the screen.
 * 
 * 2. Yes, this plugin provides 20 layers (10 for upper and 10 for lower), but
 *    that doesn't mean you should use all 20 at the same time at max power. Be
 *    moderate in how many weather layers you use at a time. Just because there
 *    is an option for the player to adjust the weather density doesn't mean it
 *    should be okay to go wild with weather layers.
 * 
 * 3. The majority of the default settings should be safe to use on their own,
 *    but that also suggests that they're used by themselves. You can usually
 *    combine three or four default weather patterns together across different
 *    layers, but do exercise restraint when customizing the settings from
 *    their default values and using more layers at a time.
 * 
 * 4. Avoid having too many sprites on the screen at once. Each weather sprite
 *    adds to the number of processes the game has to keep track of and update
 *    each individual frame. Especially weather patterns with sprites that
 *    alter light or affect it. While the plugin is optimized to allow handling
 *    of a decently large number of sprites within the hundreds, do not go
 *    overboard and use them with modesty.
 * 
 * 5. If you choose to not pre-render generated sprites at the start of the
 *    game, some weather patterns may take a bit of processing power to render
 *    generated sprites on the spot especially if there are a lot of sprites to
 *    work with. The pre-render option is the most ideal to use if you plan on
 *    using generated sprites. If you intend to use mostly icons or custom
 *    pictures, pre-rendering at the start of the game can be turned off.
 * 
 * ---
 * 
 * We are NOT responsible for irresponsible usage of this plugin that pushes
 * graphical processing to absolute limitations.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_LightingEffects
 * 
 * Weather patterns placed on the lower layer will be affected by the darkness
 * overlay that the VisuStella MZ Lighting Effects plugin utilizes. This means
 * that even the supposively "brighter" weather patterns will be dimmed out
 * (such as the Flame Wall or Aurora to name a few). To deal with this, use the
 * Lighting Effects plugin's "Auto-Light Regions" and mark the parallax visible
 * tiles with those said regions.
 * 
 * Weather patterns placed on the upper layer will not be affected by the
 * darkness overlay in order to allow the weather have better contrast in
 * addition to following RPG Maker MZ's decision to not have weather affected
 * by tints either. If you want to tint the upper layer weather, you can add
 * the tint manually through the weather pattern's custom Image Settings and
 * apply a hue.
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
 * === Convenience-Related Notetags ===
 * 
 * ---
 *
 * <No Weather>
 *
 * - Used for: Map Notetags
 * - Sets the map to not show any weather effects regardless of what's actually
 *   being set currently. Weather effects will resume once the player leaves
 *   the map and enters one that does not forbid weather effects.
 * - This is useful for indoor maps when you don't want to turn weather effects
 *   on and off constantly.
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
 * === Basic Plugin Commands ===
 * 
 * ---
 * 
 * BASIC: Adjust Weather Power
 * - Adjusts the power of the target weather layer(s).
 * 
 *   Layer(s):
 *   - Which weather layer(s) do you wish to adjust?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Adjust weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 *   Power:
 *   - Adjust power by how much?
 *   - Caps at 1 and 9.
 *   - You may use JavaScript code.
 * 
 *   Duration:
 *   - How many frames to fully adjust the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?
 *   - Wait for weather to completely adjust before moving on with the next
 *     event command?
 * 
 * ---
 *
 * BASIC: Clear Weather
 * - Clears out target weather layer(s).
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to clear?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Clear weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 *
 *   Duration:
 *   - How many frames to fully clear the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?
 *   - Wait for weather to completely adjust before moving on with the next
 *     event command?
 *
 * ---
 * 
 * BASIC: Memorize Weather
 * - Memorizes the settings for target weather pattern(s) so that you can
 *   reuse it later.
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to save?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Save weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 * ---
 * 
 * BASIC: Pre-Render Generated Weather
 * - Selects target weather type to pre-render the generated graphics for it.
 * - This is to help reduce future lag spikes on mobile devices.
 * 
 *   Weather Type:
 *   - Which weather type do you wish to pre-render?
 *   - This is to help reduce lag spikes when calling weathers.
 * 
 * ---
 * 
 * BASIC: Replay Memorized Weather
 * - Replays target memorized weather pattern(s).
 *
 *   Layer(s):
 *   - Which weather layer(s) do you wish to replay?
 *   - Use values between 1 and 10.
 *   - You may use JavaScript code.
 *
 *   Upper/Lower?:
 *   - Replay weather layer(s) from the upper or lower layers?
 *   - Upper refers to the weather layer(s) above the tilemap.
 *   - Lower revers to the weather layer(s) below the tilemap.
 *   - In battle, they are above the battlers and behind the battlebacks.
 * 
 *   Duration:
 *   - How many frames to fully replay the weather?
 *   - You may use JavaScript code.
 * 
 *   Wait For Completion?:
 *   - Wait for weather to completely replay before moving on with the next
 *     event command?
 * 
 * ---
 * 
 * === Weather Pattern-Related Plugin Commands ===
 * 
 * ---
 *
 * Weather Pattern
 * - All weather patterns provided by this plugin use the following format.
 * Yes, all of them. This is to ensure that there is familiarity when modifying
 * one weather pattern and then moving to another and reducing the amount of
 * time needed to fiddle around with each of them. As such, the parameters will
 * affect each weather pattern the same exact way.
 * 
 *   ---
 *
 *   Main Settings:
 *
 *     Power:
 *     - What weather power do you wish to apply?
 *     - Use values between 1 and 9.
 *     - You may use JavaScript code.
 *
 *     Duration:
 *     - How many frames to fully change the weather?
 *     - You may use JavaScript code.
 *
 *     Wait For Completion?:
 *     - Wait for weather to completely change before moving on with the next
 *       event command?
 * 
 *   ---
 * 
 *   Layer Settings
 *
 *     Layer(s):
 *     - Which weather layer(s) do you wish to apply changes?
 *     - Use values between 1 and 10.
 *     - You may use JavaScript code.
 *
 *     Upper/Lower?:
 *     - Play the weather pattern above the tileset or below it?
 *     - You can select "both" to affect both.
 * 
 *   ---
 * 
 *   Customization
 *
 *     Custom Settings:
 *     - Adjust the custom settings involving this weather.
 *     - More information below:
 *
 * ---
 *
 * Custom Settings
 * - Each weather pattern's "Custom Settings" will have each of the following
 * options available to it.
 *
 *   Sprite Settings:
 *   - The general settings involving the weather sprites.
 *
 *   Dimmer Overlay:
 *   - Settings involving the dimmer overlay cast over the screen.
 *
 *   Image Settings:
 *   - Settings for the images used for the weather sprites.
 *   - Weathers with multiple images will be picked at random.
 *
 *   Special Effects:
 *   - Specialized effects that are turned on for specific weather types can
 *     be found here.
 *
 *   Trajectory Settings:
 *   - Settings used to determine the trajectory a weather sprite will take
 *     and how they behave on it.
 *
 * ---
 *
 * Sprite Settings
 * - The general settings involving the weather sprites.
 *
 *   Lifespan:
 *   - Lifespan of each weather sprite in frames.
 *
 *     Variance:
 *     - What variance is there to each lifespan value?
 *
 *     Spawn Location X:
 *     - What x location should the weather sprites appear?
 *
 *       Offset X:
 *       - Offset the spawn location by this many pixels.
 *       - Negative: left. Positive: right.
 *
 *     Spawn Location Y:
 *     - What y location should the weather sprites appear?
 *
 *       Offset Y:
 *       - Offset the spawn location by this many pixels.
 *       - Negative: up. Positive: down.
 *
 *     Map Bound?:
 *     - Do the weather sprites move with the map scrolling?
 *
 *   Starting Opacity:
 *   - Starting opacity of each weather sprite in frames.
 *
 *     Variance:
 *     - What variance is there to each starting opacity value?
 *
 *     Easing Type:
 *     - Select which easing type you wish to apply for opacity.
 *
 *     Fade In Time:
 *     - How many frames does it take for the sprite to fade in?
 *     - Use 0 to start immediately at full opacity.
 *
 *   Scale:
 *   - What is the scale of the sprite?
 *   - 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 *
 *     Variance:
 *     - What variance is there to the main scale value?
 *
 *     Ratio X:
 *     Ratio Y:
 *     - What is the ratio of this sprite's scale X/Y?
 *     - 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 *
 *   Total Sprite Minimum:
 *   - What is the minimum number of sprites on the screen?
 *
 *     Total Per Power:
 *     - Increase the total number of sprites per power by this.
 *     - Lowest power is 1.
 *     - Highest power is 9.
 *
 * ---
 *
 * Dimmer Overlay
 * - Settings involving the dimmer overlay cast over the screen.
 *
 *   Color:
 *   - Dimmer color. This uses #rrggbb format.
 *   - Check your color here: https://htmlcolorcodes.com/
 *
 *   Opacity Minimum:
 *   - What is the minimum opacity value for the dimmer?
 *
 *     Opacity Per Power:
 *     - What is the total opacity value per power for the dimmer?
 *
 * ---
 *
 * Image Settings
 * - Settings for the images used for the weather sprites.
 * - Weathers with multiple images will be picked at random.
 *
 *   Generated Image?:
 *   - Include the plugin-generated image for this weather type?
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Icon(s):
 *   - Which icons do you wish to include for the images to appear as?
 *   - When using icons, icons are best made when aligned to the right at
 *     "0 degrees". This is for settings like angle alignment tracking.
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Picture(s):
 *   - Which pictures do you wish to include for the images to appear as?
 *   - When using pictures, pictures are best made when aligned to the right at
 *     "0 degrees". This is for settings like angle alignment tracking.
 *
 *     Weight:
 *     - What is the random weight?
 *     - The higher the value, the more likely this is to be used
 *       when randomized.
 *
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the weather sprite?
 *
 *   Hue Variations:
 *   - What hue variations will be randomly selected from?
 *   - Use a value between 0 and 360.
 *
 *   Tone Variations:
 *   - What tone variations will be randomly selected from?
 *   - Format for each: [Red, Green, Blue, Gray]
 * 
 *   *NOTE*
 * 
 *   Hues and tones are expensive to process graphically. Using a lot of hue
 *   and/or tone variations on lots of weather sprites at the same time can
 *   eat up a chunk of the player's FPS. If you do plan on using hue and/or
 *   tone variations, keep the sprite count low by either using lower power
 *   settings or less sprites on the screen.
 *
 * ---
 *
 * Special Effects
 * - Specialized effects that are turned on for specific weather types can
 * be found here.
 *
 *   Allow Visible Player?:
 *   - Make the player more visible by reducing the opacity of nearby weather
 *     sprites?
 *
 *   Flat Fluttering?:
 *   - Is the object flat and flutters in the wind?
 *   - Or does the object have volume and doesn't?
 *
 *   Longevity:
 *   - Weather effects with longevity don't expire until the weather pattern
 *     type is changed.
 *
 *   Hue Sway Range:
 *   - How much should the hue sway back and forth?
 *   - JavaScript code can be used.
 *
 *     Hue Sway Speed:
 *     - What speed does the angle sway?
 *     - Lower is slower.
 *     - Higher is faster.
 *     - JavaScript code can be used.
 *
 *   Respawn Common Event:
 *   - Play a specific Common Event when this event respawns?
 *   - The Common Event will run as a Once Parallel.
 *
 *   Respawn Delay Minimum:
 *   - Is there a delay to the respawn?
 *   - This is how many frames the sprite must wait before respawning.
 *
 *     RNG Delay Per Power:
 *     - How many randomized frames of delay per power must be waited?
 *
 *   Scale In:
 *   - What scale ratio should the sprite spawn in at?
 *   - Use 1.0 for regular ratios.
 *   - You may use JavaScript.
 *
 *     Duration:
 *     - How many frames should the scale in effect take?
 *     - Scale in will always head towards 1.0.
 *
 *   Scale Out:
 *   - What scale ratio should the sprite despawn out at?
 *   - Use 1.0 for regular ratios.
 *   - You may use JavaScript.
 *
 *     Duration:
 *     - How many frames should the scale out effect take?
 *     - Scale in will usually head from 1.0.
 *
 *   Custom Finish:
 *
 *     Fireworks Finish?:
 *     - At the end of the weather particle's lifespan, finish up with a
 *       fireworks explosion?
 *
 *     Sparkle Finish?:
 *     - At the end of the weather particle's lifespan, finish up with a
 *       fabulous spinning sparkle effect?
 *
 * ---
 *
 * Trajectory Settings
 * - Settings used to determine the trajectory a weather sprite will take
 *   and how they behave on it.
 *
 *   Trajectory Type:
 *   - What trajectory type is used?
 *     - Both Map and Battle
 *       - Straight
 *       - Frozen
 *     - Map Only
 *       - Player-Locked
 *       - Follower-Locked
 *       - Event-Locked
 *     - Battle Only
 *       - Actor-Locked
 *       - Enemy-Locked
 *       - User-Locked
 *       - Target-Locked
 * 
 *     Locked ID/Index:
 *     - For locked trajectories only. Input the follower index.
 *     - Or ID of event, actor, enemy.
 *
 *     Offset X (Locked):
 *     - For locked trajectories only.
 *     - Negative: left. Positive: right.
 *
 *     Offset Y (Locked):
 *     - For locked trajectories only.
 *     - Negative: up. Positive: down.
 *
 *   Speed:
 *   - What speed is the sprite moving at? Lower is slower.
 *   - Higher is faster.
 *   - JavaScript code can be used.
 *
 *     Speed Variance:
 *     - What variance is there to the speed value?
 *
 *   Angle:
 *   - What angle (0 to 360) is the sprite moving toward?
 *   - JavaScript code can be used.
 *
 *     Align Angle?:
 *     - Should the sprite rotate itself according to the angle it is moving at
 *       across the screen?
 *
 *     Angle Variance:
 *     - What variance is there to the base angle?
 *
 *     Visual Angle Offset:
 *     - Offset the visual by this many degrees. Used for images that aren't
 *       made aligned with 0 degrees facing left.
 *
 *     Angle Arc:
 *     - How should the trajectory arc when the sprite moves?
 *     - JavaScript code can be used.
 *
 *     Angle Sway Range:
 *     - How much should the angle sway as the sprite moves?
 *     - JavaScript code can be used.
 *
 *       Angle Sway Speed:
 *       - What speed does the angle sway? Lower is slower.
 *       - Higher is faster.
 *       - JavaScript code can be used.
 *
 *   Spin Speed:
 *   - What speed do the sprites spin?
 *   - JavaScript code can be used.
 *   - Some generated weather pattern sprites use the clustering replication
 *     technique. This allows the weather pattern to appear more full and have
 *     higher volume while keeping sprite counts low. As such, not all weather
 *     patterns will spin the way you expect. This is not a bug.
 *
 *     Spin Speed Variance:
 *     - What variance is there to the spin speed?
 *
 *     Reverse Spin?:
 *     - Can the spin go in the reverse direction?
 *
 *   X Sway Range:
 *   Y Sway Range:
 *   - How much should the X/Y value sway as the sprite moves?
 *   - JavaScript code can be used.
 *
 *     Sway Speed:
 *     - What speed does the sway move? Lower is slower.
 *     - Higher is faster. JavaScript code can be used.
 *
 * ---
 * 
 * === Weather Pattern-Type Plugin Commands ===
 * 
 * Each of the weather patterns below all use the same plugin command structure
 * as listed in the section above. They are separated in various themes to help
 * better organize them and quickly find them. Each weather pattern has their
 * own generated image type that they use.
 * 
 * ---
 * 
 * Fire-Themed
 * 
 *   FIRE: Embers:
 *   - Oh, Ember, you will remember. So warm and tender.
 *   - Embers rise off from the ground upward.
 *
 *   FIRE: Fireflies:
 *   - Take my love, take my land, take me where I cannot stand.
 *   - Fireflies will spawn and float around.
 *
 *   FIRE: Firestorm:
 *   - This is fine.
 *   - Rain fiery bolts of flames from the heavens!
 *
 *   FIRE: Fireworks:
 *   - You just gotta ignite the light and let it shine!
 *   - A shot of fire flies up and blows up into a flower.
 *
 *   FIRE: Flame Haze:
 *   - Flaming Hair Blazing Eyes!
 *   - A fiery smoke clouds the screen!
 *
 *   FIRE: Flame Wall:
 *   - Is it me, or is it hot in here? Oh, it's me.
 *   - A wall of flames appears on the bottom part of the screen.
 *
 *   FIRE: Heat Clouds:
 *   - Fiery conglomerations of clouds.
 *   - Heat clouds scorch the top of the screen.
 *
 *   FIRE: Meteor Shower:
 *   - Clustering wishes will become a new shining star!
 *   - A nonstop swarm of meteors fall in the night sky.
 *
 *   FIRE: Shooting Stars:
 *   - Make a wish! A wholesome one, please.
 *   - Shooting stars appear over the horizon of the night sky.
 *
 *   FIRE: Sunlight Beams:
 *   - Aka crepuscular rays. Makes any day brighter!
 *   - Sun beams shine down from the heavens.
 * 
 * ---
 *
 * Ice-Themed
 *
 *   ICE: Arctic Gleam:
 *   - Oh, erie bluish glow of the arctic.
 *   - Illuminate the frozen land below!
 *
 *   ICE: Aurora Borealis:
 *   - Also known as the Northern Lights.
 *   - Auroras dance across the top of the screen.
 *
 *   ICE: Blizzard:
 *   - Let it go, let it go! Can't hold it back anymore!
 *   - Concentrated snowfall covers the screen.
 *
 *   ICE: Diamond Dust:
 *   - Diamond dust falls from the skies.
 *   - Slightly illuminated ice particles descend from above.
 *
 *   ICE: Glistening Ice:
 *   - Walkin' on thin ice!
 *   - Ice particles sparkle from all around.
 *
 *   ICE: Ice Fog:
 *   - Yo! VIP! Let's Kick it!
 *   - Frozen fog covers the whole screen.
 *
 *   ICE: Sleet:
 *   - Slightly heavier and more solid than snow!
 *   - Frozen ice crystals snow down from above.
 *
 *   ICE: Snow:
 *   - Brace yourselves! Winter is coming!
 *   - Snow falls from the sky and flutters downward.
 *
 *   ICE: Snow Clouds:
 *   - Icy gatherings of clouds ready to deliver snow.
 *   - Snow clouds blanket the top of the screen.
 *
 *   ICE: Snowflakes:
 *   - Snowflake! Snowflake! Little snowflake!
 *   - Generated snowflakes will have random patterns.
 *
 * ---
 *
 * Thunder-Themed
 *
 *   THUNDER: Discharge:
 *   - Danger! Danger! High voltage!
 *   - Electricity discharges from the sides of the screen.
 *
 *   THUNDER: Plasma Bolt:
 *   - A horizontal bolt of electricity! From left to right!
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Plasma Surge:
 *   - The windows are becoming stained with a nostalgic color.
 *   - Nonstop plasma bolts flood the screen.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Purple Haze:
 *   - Purple haze all around. Don't know if I'm coming up or down.
 *   - A purple fog blankets the whole screen.
 *
 *   THUNDER: Spider Lightning:
 *   - Nothing to do with spiders.
 *   - Bolts expand outwards from a target.
 *
 *   THUNDER: Static Charge:
 *   - Snap! Crackle! Pop!
 *   - Highly charged target emits static.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Thunder Bolt:
 *   - More than just an expensive charging cable. Giant bolt flashes
 *     from above!
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Thunder Clouds:
 *   - These thunderclouds, oh no, no!
 *   - Thunder-ready clouds fly atop the top of the screen.
 *
 *   THUNDER: Thunder Surge:
 *   - When you walk away, you don't hear me say.
 *   - Nonstop thunder bolts scour the skies.
 *   - Best used with a Respawn Common Event for sound and/or screen flashes.
 *
 *   THUNDER: Ultraviolet Beams:
 *   - Get out some of that SPF 100+!
 *   - (This is NOT real UV Light!)
 *   - Ultraviolet lights are coming from the sky!
 *
 * ---
 *
 * Water-Themed
 *
 *   WATER: Bubbles Rising:
 *   - Let's not burst your bubble!
 *   - Bubbles will rise up towards the top of the screen.
 *
 *   WATER: Cloud Burst:
 *   - A sudden massive deluge of rain!
 *   - A near vertical storm of massive volume.
 *
 *   WATER: Dripping Water:
 *   - Leaky ceilings? It's time to call a plumber.
 *   - Water droplets drip from above.
 *
 *   WATER: Mist:
 *   - Not to be confused with the video game. That has a Y.
 *   - A suspended mist covers the screen.
 *
 *   WATER: Rain:
 *   - Rain, rain, go away! Come again some other day!
 *   - Raindrops will fall from the sky all over the screen.
 *
 *   WATER: Rain Clouds:
 *   - It's raining men! Hallelujah! It's raining men, amen!
 *   - Rain-filled clouds hover menacingly at the top of the screen.
 *
 *   WATER: Rainbow Arch:
 *   - Somewhere over the rainbow~
 *   - A large rainbow arch appears in the corner of the screen.
 *
 *   WATER: Rising Steam:
 *   - Take more photos to train your selfie steam!
 *   - Steam vapor clouds rise from below.
 *
 *   WATER: Soap Bubbles:
 *   - I will try to blow a bubble that will last all day.
 *   - Soap bubbles float and hover around.
 *
 *   WATER: Storm:
 *   - A MIGHTY storm!
 *   - Large and long raindrops fall from the sky creating a storm.
 *
 * ---
 *
 * Earth-Themed
 *
 *   EARTH: Acid Rain:
 *   - Real acid rain doesn't glow in the dark.
 *   - But this one sure does.
 *
 *   EARTH: Crumbling Cave:
 *   - Do NOT grab any suspiciously placed rubies.
 *   - Bits and pieces of the cave ceiling crumble.
 *
 *   EARTH: Dust Clouds:
 *   - Darkened dust covers the surroundings!
 *   - Dust clouds will fill up the screen.
 *
 *   EARTH: Dust Storm:
 *   - Happens in places other than Nashville.
 *   - Darkened dust launches across the screen.
 *
 *   EARTH: House Dust:
 *   - Floating white dust particles with nowhere to go.
 *   - So they'll just make themselves at home.
 *
 *   EARTH: Pollution Clouds:
 *   - Absolutely disgusting colored pollution clouds.
 *   - Pollution clouds cover the top of the screen.
 *
 *   EARTH: Radioactive Beams:
 *   - Alert! Alert! Alert! Nuclear green lights!
 *   - Nuclear green lights irradiate from the clouds.
 *
 *   EARTH: Sand Clouds:
 *   - Straight from the Pyramids of Giza!
 *   - Sand clouds will surround everything!
 *
 *   EARTH: Sandstorm:
 *   - Darude! Sandstorm!
 *   - Sand blasts across the screen from one end to the other.
 *
 *   EARTH: Toxic Gas:
 *   - More toxic than the comments section of social media!
 *   - A foggy green gas blankets the screen.
 *
 * ---
 *
 * Wind-Themed
 *
 *   WIND: Autumn Leaves:
 *   - Red, yellow, orange, brown leaves are falling all around.
 *   - See them dance in the cool, fall air. 
 *
 *   WIND: Balloons:
 *   - You and I in a little toy shop, buy a bag balloons with the money
 *     we've got.
 *
 *   WIND: Cherry Blossoms:
 *   - The emblem of love and good luck.
 *   - Cherry blossom petals flutter down from above.
 *
 *   WIND: Dandelion Seeds:
 *   - Floating on the air. Never seem to care.
 *   - Dandelion seeds will flow up into the air.
 *
 *   WIND: Grassy Gust:
 *   - A gust of wind!
 *   - From right to left, grass flies with it.
 *   - Best when paired with a Tempest.
 *
 *   WIND: Green Leaves:
 *   - Leaf me alone!
 *   - Green leaves fall above, spinning round and round.
 *
 *   WIND: Pollen:
 *   - Bless you! Gesundheit! Salute!
 *   - A cloud of pollen grains travel about the screen.
 *
 *   WIND: Tempest:
 *   - Brought to you by a friendly slime.
 *   - Powerful gusts of wind blast across the screen.
 *
 *   WIND: White Clouds:
 *   - Not the main character from Final Fantasy VII.
 *   - Fluffy white clouds slowly drift across the upper screen.
 *
 *   WIND: Xtreme Speed:
 *   - Gotta go fast! Speedlines whip past!
 *   - Works best below the tileset layer.
 *
 * ---
 *
 * Light-Themed
 *
 *   LIGHT: Confetti:
 *   - Party like it's 1999!
 *   - Confetti of differing shapes drop from the sky.
 *
 *   LIGHT: Lens Flare:
 *   - Relive the amateur days from Photoshop!
 *   - A lens flare descends from the upper corner of the sky!
 *
 *   LIGHT: Light Burst:
 *   - Sometimes also known as Sun Bursts.
 *   - CAUTION: Bright lights!
 *   - Bright white light bursts out from a target.
 *
 *   LIGHT: Light Orbs:
 *   - Show me the light!
 *   - Light orbs fly round and round.
 *
 *   LIGHT: Pastel Brume:
 *   - Cute pastel colors forming a foggy brume.
 *   - Various bright colors cover the screen.
 *
 *   LIGHT: Prism Burst:
 *   - More color than a bag of candy!
 *   - CAUTION: Bright lights!
 *   - Lights of all colors expand out from a target.
 *
 *   LIGHT: Prismatic Gleam:
 *   - Our seven lights spring to the task!
 *   - Colors of all sorts shine from the skies high above.
 *
 *   LIGHT: Rainbow Clouds:
 *   - Colorful clouds dot the heavens.
 *   - Multi-colored clouds slowly drift across the upper screen.
 *
 *   LIGHT: Rainbow Orbs:
 *   - Taste the rainbow!
 *   - Multi-colored rainbow orbs spawn in and float about.
 *
 *   LIGHT: Star Fall:
 *   - You're a star. You're one in a million.
 *   - Stars fall out of the night sky spinning round and round.
 *
 * ---
 *
 * Dark-Themed
 *
 *   DARK: Ash Debris:
 *   - Gotta ketchum all.
 *   - Pieces of ash debris flutter through the air.
 *
 *   DARK: Ashfall:
 *   - But unlike thunder, this didn’t stop. It went on and on.
 *   - Volcanic ash pieces descend from the skies above.
 *
 *   DARK: Blood Rain:
 *   - It's actually a real phenomenon.
 *   - However, it's not really blood.
 *
 *   DARK: Dark Orbs:
 *   - Hello darkness, my old friend.
 *   - Dark orbs circle about the screen.
 *
 *   DARK: Fumes:
 *   - Don't inhale any!
 *   - Dark fume clouds plume from below.
 *
 *   DARK: Moonlight Beams:
 *   - Moonlight is the smuggler's enemy.
 *   - Light the path in the night sky by moonshine.
 *
 *   DARK: Shadow Siphon:
 *   - Drain all of the light! CAUTION: Dark lights!
 *   - Light from around is all drained into one area.
 *
 *   DARK: Smog:
 *   - Smoking is bad, mkay?
 *   - Smokey fog (aka Smog) cover the whole screen.
 *
 *   DARK: Smoke Clouds:
 *   - Accompanied by factories owned by evil corporations.
 *   - Smoke clouds blot out the sun.
 *
 *   DARK: Sootfall:
 *   - Try not to build a snowman out of this.
 *   - Smoke-contaminated snow falls from the sky.
 *
 * ---
 *
 * Icons-Related
 *
 *   SLOW: Flying Icons ↑:
 *   MEDIUM: Flying Icons ↑:
 *   FAST: Flying Icons ↑:
 *   - Icons fly to the top at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↗:
 *   MEDIUM: Flying Icons ↗:
 *   FAST: Flying Icons ↗:
 *   - Icons fly upper right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons →:
 *   MEDIUM: Flying Icons →:
 *   FAST: Flying Icons →:
 *   - Icons fly to the right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↘:
 *   MEDIUM: Flying Icons ↘:
 *   FAST: Flying Icons ↘:
 *   - Icons fly lower right at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↓:
 *   MEDIUM: Flying Icons ↓:
 *   FAST: Flying Icons ↓:
 *   - Icons fly to the bottom at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↙:
 *   MEDIUM: Flying Icons ↙:
 *   FAST: Flying Icons ↙:
 *   - Icons fly lower left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ←:
 *   MEDIUM: Flying Icons ←:
 *   FAST: Flying Icons ←:
 *   - Icons fly to the left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ↖:
 *   MEDIUM: Flying Icons ↖:
 *   FAST: Flying Icons ↖:
 *   - Icons fly upper left at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 *   SLOW: Flying Icons ●:
 *   MEDIUM: Flying Icons ●:
 *   FAST: Flying Icons ●:
 *   - Icons hover at slow, medium, or speeds.
 *   - To change icons used, go to Custom Settings > Image Settings > Icon(s).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General Settings for the Weather Effects plugin. There aren't too many
 * settings to adjust here as the majority of the customization options exist
 * within each weather pattern-related Plugin Command instead. However, the
 * options here allow you to control what the weather patterns do not.
 *
 * ---
 * 
 * General Settings
 * 
 *   Pre-Render Generated?:
 *   - Pre-render generated images for weather patterns?
 *   - This reduces lag for on-demand weather patterns.
 *   - This is automatically turned OFF for mobile devices.
 * 
 *     # of Variations:
 *     - How many variations of each rendered weather pattern do you want?
 * 
 *   Smooth Icons?
 *   - Smooth out the icons used for weather sprites?
 *   - Or keep them pixelated?
 * 
 *   Expand Random Spawn?
 *   - Expand random spawn locations by an extra screen size?
 *   - This is for games that have really high walking speeds where the player
 *     can move fast enough where the weather cannot catch up.
 *   - Power settings will be split across multiple settings so readjust your
 *     weather power accordingly.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Settings
 * ============================================================================
 *
 * There is only one option added through this plugin and it's an option that
 * allows the player to adjust what % of weather sprites are visible on the
 * screen at a time. This is helpful for those who may have weaker computers or
 * those who may find the weather patterns to be a bit intrusive at times.
 * 
 * The number of minimum weather sprites will always be shown. The number of
 * added sprites based on power will be what the weather density value affects.
 * 
 * If you are using the Options Core, the settings found in the Options Core
 * need to be managed instead of these as these will be overwritten in favor of
 * what the Options Core will offer.
 *
 * ---
 * 
 * Options
 * 
 *   Add Option?:
 *   - Add the 'Weather Density' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
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
 * * Olivia
 * * Arisu
 * * Irina
 * * Yanfly
 * * Aries
 * 
 * Creazilla Open-Source
 * * Many of the canvas drawings are made by various artists under Creazilla.
 * * These are under the Creazilla Open-Source License.
 * * They are free for personal and commercial use. No attribution required.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.05: August 29, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > General Settings > Expand Random Spawn?
 * **** Expand random spawn locations by an extra screen size?
 * **** This is for games that have really high walking speeds where the player
 *      can move fast enough where the weather cannot catch up.
 * **** Power settings will be split across multiple settings so readjust your
 *      weather power accordingly.
 * 
 * Version 1.04: February 16, 2023
 * * Bug Fixes!
 * ** LIGHT: Confetti should no longer only display black stars when pre-render
 *    is turned off. Confetti should now be pastel colors once again. Fix made
 *    by Irina.
 * 
 * Version 1.03: December 15, 2022
 * * Documentation Update!
 * ** Added new note for "Pre-Render Generated" in Plugin Parameters.
 * ** Help file updated for new features.
 * *** This is automatically turned OFF for mobile devices.
 * * Feature Update!
 * ** Games running with this plugin on mobile devices will automatically
 *    default to turning off "Pre-Render Generated" in order to conserve memory
 *    usage. This is NOT disabled automatically for MacOS because memory leak
 *    problems do not apply to MacOS. If you feel like it should be disabled,
 *    we recommend that you turn off "Pre-Render Generated" in the
 *    Plugin Parameters. Update made by Arisu.
 * ** "Pre-Render Generated" is also now set to "false" by default.
 * * New Features!
 * ** New Plugin Command added by Arisu:
 * *** BASIC: Pre-Render Generated Weather
 * **** Selects target weather type to pre-render the generated graphics.
 * **** This is to help reduce future lag spikes on mobile devices.
 * 
 * Version 1.02: June 2, 2022
 * * Bug Fixes!
 * ** "ICE: Aurora Borealis" default values are now fixed to properly convey
 *    proper verticality and angle. If you have the "ICE: Aurora Borealis"
 *    Plugin Command already in place, delete it and replace it with a new one
 *    for the newer default values. Fix made by Irina.
 * * Documentation Update!
 * ** Updated descriptions for "Upper/Lower?" parameters to the following:
 * *** In battle, they are above the battlers and behind the battlebacks.
 * * Feature Update!
 * ** In battle, the "lower" layer is now moved to behind the battlebacks.
 *    Update made by Irina.
 * 
 * Version 1.01: March 31, 2022
 * * Bug Fixes!
 * ** Fixed a problem that caused any weather effects on layers 9 and 10 to
 *    cancel each other out. Fix made by Irina.
 * 
 * Version 1.00 Official Release Date: April 6, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Basic
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Basic
 * @text Category - Basic
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicAdjustWeatherPower
 * @text BASIC: Adjust Weather Power
 * @desc Adjusts the power of the target weather layer(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to adjust?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Adjust weather layer(s) from the upper or lower layers?
 * @default upper
 * 
 * @arg Power:eval
 * @text Power
 * @desc Adjust power by how much? Caps at 1 and 9.
 * You may use JavaScript code.
 * @default +1
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully adjust the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely adjust before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicClearWeather
 * @text BASIC: Clear Weather
 * @desc Clears out target weather layer(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to clear?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Clear weather layer(s) from the upper or lower layers?
 * @default both
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully clear the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely clear before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicMemorizeWeather
 * @text BASIC: Memorize Weather
 * @desc Memorizes the settings for target weather pattern(s) so
 * that you can reuse it later.
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to save?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc save weather layer(s) from the upper or lower layers?
 * @default both
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicPreRenderGeneratedWeather
 * @text BASIC: Pre-Render Generated Weather
 * @desc Selects target weather type to pre-render the generated
 * graphics for it. This is to help reduce future lag spikes.
 *
 * @arg WeatherType:str
 * @text Weather Type
 * @type select
 * @option -
 * @option Embers
 * @option FireStorm
 * @option Fireflies
 * @option Fireworks
 * @option FlameHaze
 * @option FlameWall
 * @option HeatClouds
 * @option MeteorShower
 * @option ShootingStars
 * @option SunBeams
 * @option -
 * @option ArcticBeam
 * @option Aurora
 * @option Blizzard
 * @option DiamondDust
 * @option Glistening
 * @option IceFog
 * @option Sleet
 * @option Snow
 * @option SnowClouds
 * @option SnowFlakes
 * @option -
 * @option Discharge
 * @option PlasmaBolt
 * @option PlasmaSurge
 * @option SpiderBolt
 * @option StaticCharge
 * @option Thunderbolt
 * @option ThunderClouds
 * @option ThunderSurge
 * @option PurpleHaze
 * @option UltraViolet
 * @option -
 * @option Bubbles
 * @option CloudBurst
 * @option Drip
 * @option Mist
 * @option Rain
 * @option RainbowArch
 * @option RainClouds
 * @option SoapBubbles
 * @option Steam
 * @option Storm
 * @option -
 * @option AcidRain
 * @option CrumblingCave
 * @option DustClouds
 * @option DustStorm
 * @option HouseDust
 * @option PollutionClouds
 * @option RadioactiveBeam
 * @option SandClouds
 * @option SandStorm
 * @option ToxicGas
 * @option -
 * @option AutumnLeaves
 * @option Balloons
 * @option CherryBlossoms
 * @option DandelionSeeds
 * @option GrassyGust
 * @option GreenLeaves
 * @option Pollen
 * @option Tempest
 * @option WhiteClouds
 * @option Xtreme
 * @option -
 * @option Confetti
 * @option LensFlare
 * @option LightBurst
 * @option LightOrbs
 * @option PastelBrume
 * @option PrismBeams
 * @option PrismBurst
 * @option RainbowClouds
 * @option RainbowOrbs
 * @option Stars
 * @option -
 * @option AshDebris
 * @option AshFall
 * @option BloodRain
 * @option DarkOrbs
 * @option Fumes
 * @option MoonBeams
 * @option SmokeFog
 * @option SmokeCloud
 * @option ShadowBurst
 * @option SootFall
 * @option -
 * @desc Which weather type do you wish to pre-render?
 * This is to help reduce lag spikes when calling weathers.
 * @default Embers
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BasicReplayMemory
 * @text BASIC: Replay Memorized Weather
 * @desc Replays target memorized weather pattern(s).
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @type string[]
 * @desc Which weather layer(s) do you wish to replay?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1","2","3","4","5","6","7","8","9","10"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Replay weather layer(s) from the upper or lower layers?
 * @default both
 * 
 * @arg Duration:eval
 * @text Duration
 * @desc How many frames to fully replay the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely replay before moving on
 * with the next event command?
 * @default false
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Fire
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Fire
 * @text Category - Fire-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Embers
 * @text FIRE: Embers
 * @desc Oh, Ember, you will remember. So warm and tender.
 * Embers rise off from the ground upward.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Fireflies
 * @text FIRE: Fireflies
 * @desc Take my love, take my land, take me where I cannot stand.
 * Fireflies will spawn and float around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Firestorm
 * @text FIRE: Firestorm
 * @desc This is fine.
 * Rain fiery bolts of flames from the heavens!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"245\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_Fireworks
 * @text FIRE: Fireworks
 * @desc You just gotta ignite the light and let it shine!
 * A shot of fire flies up and blows up into a flower.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"20\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"lower 70%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"245\",\"opacityVariance:num\":\"10\",\"opacityEasingType:str\":\"InCirc\",\"opacityFadeInTime:num\":\"4\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[\\\"30\\\",\\\"60\\\",\\\"90\\\",\\\"120\\\",\\\"150\\\",\\\"180\\\",\\\"210\\\",\\\"240\\\",\\\"270\\\",\\\"300\\\",\\\"330\\\"]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"true\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_FlameHaze
 * @text FIRE: Flame Haze
 * @desc Flaming Hair Blazing Eyes!
 * A fiery smoke clouds the screen!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#f26c4f\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.2\",\"speedVariance:eval\":\"0.3\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_FlameWall
 * @text FIRE: Flame Wall
 * @desc Is it me, or is it hot in here? Oh, it's me.
 * A wall of flames appears on the bottom part of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"lower 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"50\",\"totalPerPower:num\":\"25\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"32\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"32\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_HeatClouds
 * @text FIRE: Heat Clouds
 * @desc Fiery conglomerations of clouds.
 * Heat clouds scorch the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ff8822\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_MeteorShower
 * @text FIRE: Meteor Shower
 * @desc Clustering wishes will become a new shining star!
 * A nonstop swarm of meteors fall in the night sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"6\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.6\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"15\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"true\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"4\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"3\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_ShootingStar
 * @text FIRE: Shooting Stars
 * @desc Make a wish! A wholesome one, please.
 * Shooting stars appear over the horizon of the night sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"6\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"sparkleFinish:eval\":\"true\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"4\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"3\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fire_SunBeams
 * @text FIRE: Sunlight Beams
 * @desc Aka crepuscular rays. Makes any day brighter!
 * Sun beams shine down from the heavens.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Ice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Ice
 * @text Category - Ice-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_ArcticBeam
 * @text ICE: Arctic Gleam
 * @desc Oh, erie bluish glow of the arctic.
 * Illuminate the frozen land below!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Aurora
 * @text ICE: Aurora Borealis
 * @desc Also known as the Northern Lights.
 * Auroras dance across the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper border\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"32\",\"scale:num\":\"0.90\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"1\",\"ySwaySpeed:eval\":\"0.005\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Blizzard
 * @text ICE: Blizzard
 * @desc Let it go, let it go! Can't hold it back anymore!
 * Concentrated snowfall covers the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"200\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#cccccc\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"12\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"16\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"205\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"12\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_DiamondDust
 * @text ICE: Diamond Dust
 * @desc Diamond dust falls from the skies.
 * Slightly illuminated ice particles descend from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_GlisteningIce
 * @text ICE: Glistening Ice
 * @desc Walkin' on thin ice!
 * Ice particles sparkle from all around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"45\",\"lifespanVariance:num\":\"15\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuad\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-6\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_IceFog
 * @text ICE: Ice Fog
 * @desc Yo! VIP! Let's Kick it!
 * Frozen fog covers the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"8\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Sleet
 * @text ICE: Sleet
 * @desc Slightly heavier and more solid than snow!
 * Frozen ice crystals snow down from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"140\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"8\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Snow
 * @text ICE: Snow
 * @desc Brace yourselves! Winter is coming!
 * Snow falls from the sky and flutters downward.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_SnowClouds
 * @text ICE: Snow Clouds
 * @desc Icy gatherings of clouds ready to deliver snow.
 * Snow clouds blanket the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Ice_Snowflakes
 * @text ICE: Snowflakes
 * @desc Snowflake! Snowflake! Little snowflake!
 * Generated snowflakes will have random patterns.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"220\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"5\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"230\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Thunder
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Thunder
 * @text Category - Thunder-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Discharge
 * @text THUNDER: Discharge
 * @desc Danger! Danger! High voltage!
 * Electricity discharges from the sides of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 10%\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"0.5\",\"scaleVariance:num\":\"0.2\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"45\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PlasmaBolt
 * @text THUNDER: Plasma Bolt
 * @desc A horizontal bolt of electricity! From left to right!
 * Best used with a Respawn Common Event.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"center screen\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"either 40%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"600\",\"respawnDelayRngPerPower:eval\":\"-60\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PlasmaSurge
 * @text THUNDER: Plasma Surge
 * @desc The windows are becoming stained with a nostalgic color.
 * Nonstop plasma bolts flood the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"center screen\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"either 40%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"30\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_PurpleHaze
 * @text THUNDER: Purple Haze
 * @desc Purple haze all around. Don't know if I'm coming up or down.
 * A purple fog blankets the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"96\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#8560a8\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_SpiderLightning
 * @text THUNDER: Spider Lightning
 * @desc Nothing to do with spiders.
 * Bolts expand outwards from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"5\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-8\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_StaticCharge
 * @text THUNDER: Static Charge
 * @desc Snap! Crackle! Pop!
 * Highly charged target emits static.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"0.5\",\"scaleVariance:num\":\"0.25\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.5\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"300\",\"respawnDelayRngPerPower:eval\":\"-30\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-12\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thunderbolt
 * @text THUNDER: Thunder Bolt
 * @desc More than just an expensive charging cable. Giant bolt
 * flashes from above! Best used with a Respawn Common Event.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 30%\",\"spawnLocationY:str\":\"middle screen\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"600\",\"respawnDelayRngPerPower:eval\":\"-60\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thunderclouds
 * @text THUNDER: Thunder Clouds
 * @desc These thunderclouds, oh no, no!
 * Thunder-ready clouds fly atop the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#605ca8\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_Thundersurge
 * @text THUNDER: Thunder Surge
 * @desc When you walk away, you don't hear me say.
 * Nonstop thunder bolts scour the skies.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"sides 30%\",\"spawnLocationY:str\":\"middle screen\",\"mapBound:eval\":\"false\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"0\",\"scale:num\":\"1.20\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"1\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"30\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Thunder_UltravioletBeams
 * @text THUNDER: Ultraviolet Beams
 * @desc Get out some of that SPF 100+! (This is NOT real UV Light!)
 * Ultraviolet lights are coming from the sky!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Water
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Water
 * @text Category - Water-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Bubbles
 * @text WATER: Bubbles Rising
 * @desc Let's not burst your bubble!
 * Bubbles will rise up towards the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00aaaa\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_CloudBurst
 * @text WATER: Cloud Burst
 * @desc A sudden massive deluge of rain!
 * A near vertical storm of massive volume.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"4\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#303030\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"8\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"18\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_DrippingWater
 * @text WATER: Dripping Water
 * @desc Leaky ceilings? It's time to call a plumber.
 * Water droplets drip from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"3\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"60\",\"respawnDelayRngPerPower:eval\":\"-6\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Mist
 * @text WATER: Mist
 * @desc Not to be confused with the video game. That has a Y.
 * A suspended mist covers the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#888888\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Rain
 * @text WATER: Rain
 * @desc Rain, rain, go away! Come again some other day!
 * Raindrops will fall from the sky all over the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RainClouds
 * @text WATER: Rain Clouds
 * @desc It's raining men! Hallelujah! It's raining men, amen!
 * Rain-filled clouds hover menacingly at the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 20%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RainbowArch
 * @text WATER: Rainbow Arch
 * @desc Somewhere over the rainbow~
 * A large rainbow arch appears in the corner of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"right border\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"lower border\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.30\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"1\",\"totalPerPower:num\":\"0\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.0025\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_RisingSteam
 * @text WATER: Rising Steam
 * @desc Take more photos to train your selfie steam!
 * Steam vapor clouds rise from below.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"0.5\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-9\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"45\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_SoapBubbles
 * @text WATER: Soap Bubbles
 * @desc I will try to blow a bubble that will last all day.
 * Soap bubbles float and hover around.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"20\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"30\",\"scaleOut:eval\":\"0.0\",\"scaleOutDuration:eval\":\"30\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.005\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.005\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Water_Storm
 * @text WATER: Storm
 * @desc A MIGHTY storm!
 * Large and long raindrops fall from the sky creating a storm.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#404040\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"16\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"245\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Earth
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Earth
 * @text Category - Earth-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_AcidRain
 * @text EARTH: Acid Rain
 * @desc Real acid rain doesn't glow in the dark.
 * But this one sure does.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"30\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#c4df9b\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_CrumblingCave
 * @text EARTH: Crumbling Cave
 * @desc Do NOT grab any suspiciously placed rubies.
 * Bits and pieces of the cave ceiling crumble.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper border\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"OutQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.00\",\"scaleVariance:num\":\"0.00\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.5\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"8\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"8\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_DustClouds
 * @text EARTH: Dust Clouds
 * @desc Darkened dust covers the surroundings!
 * Dust clouds will fill up the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"72\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#a67c52\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_DustStorm
 * @text EARTH: Dust Storm
 * @desc Happens in places other than Nashville.
 * Darkened dust launches across the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#a67c52\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_HouseDust
 * @text EARTH: House Dust
 * @desc Floating white dust particles with nowhere to go.
 * So they'll just make themselves at home.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.0025\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.0025\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_PollutionClouds
 * @text EARTH: Pollution Clouds
 * @desc Absolutely disgusting colored pollution clouds.
 * Pollution clouds cover the top of the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_RadioactiveBeams
 * @text EARTH: Radioactive Beams
 * @desc Alert! Alert! Alert! Nuclear green lights!
 * Nuclear green lights irradiate from the clouds.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#00ff00\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_SandClouds
 * @text EARTH: Sand Clouds
 * @desc Straight from the Pyramids of Giza!
 * Sand clouds will surround everything!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"12\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_Sandstorm
 * @text EARTH: Sandstorm
 * @desc Darude! Sandstorm!
 * Sand blasts across the screen from one end to the other.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocation:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#c69c6d\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Earth_ToxicGas
 * @text EARTH: Toxic Gas
 * @desc More toxic than the comments section of social media!
 * A foggy green gas blankets the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"type:str":"straight","lockedOffsetX:eval":"+0","lockedOffsetY:eval":"+0","speed:eval":"1.2","speedVariance:eval":"0.3","angle:eval":"180","alignAngle:eval":"false","angleVariance:eval":"2","angleOffset:eval":"+0","angleArc:eval":"+0","angleSwayRange:eval":"0","angleSwaySpeed:eval":"0.01","spinSpeed:eval":"+0","spinSpeedVariance:eval":"0","reverseSpin:eval":"false","xSwayRange:eval":"0","xSwaySpeed:eval":"0.01","ySwayRange:eval":"0","ySwaySpeed:eval":"0.01"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Wind
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Wind
 * @text Category - Wind-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_AutumnLeaves
 * @text WIND: Autumn Leaves
 * @desc Red, yellow, orange, brown leaves are falling all around.
 * See them dance in the cool, fall air. 
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Balloons
 * @text WIND: Balloons
 * @desc You and I in a little toy shop,
 * buy a bag balloons with the money we've got.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.8\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.5\",\"scaleInDuration:eval\":\"30\",\"scaleOut:eval\":\"1.5\",\"scaleOutDuration:eval\":\"30\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"74\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+15\",\"angleArc:eval\":\"0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_CherryBlossoms
 * @text WIND: Cherry Blossoms
 * @desc The emblem of love and good luck.
 * Cherry blossom petals flutter down from above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuint\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.15\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"320\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_DandelionSeeds
 * @text WIND: Dandelion Seeds
 * @desc Floating on the air. Never seem to care.
 * Dandelion seeds will flow up into the air.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.15\",\"scaleVariance:num\":\"0.05\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"30\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"-45\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_GrassyGust
 * @text WIND: Grassy Gust
 * @desc A gust of wind! From right to left, grass flies with it.
 * Best when paired with a Tempest.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuint\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.40\",\"scaleVariance:num\":\"0.15\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"320\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_GreenLeaves
 * @text WIND: Green Leaves
 * @desc Leaf me alone!
 * Green leaves fall above, spinning round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InCubic\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"0.30\",\"scaleVariance:num\":\"0.10\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"310\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2.5\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Pollen
 * @text WIND: Pollen
 * @desc Bless you! Gesundheit! Salute!
 * A cloud of pollen grains travel about the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"48\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"240\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#fff799\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"64\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"64\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"15\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"8\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_Tempest
 * @text WIND: Tempest
 * @desc Brought to you by a friendly slime.
 * Powerful gusts of wind blast across the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"24\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.4\",\"totalMinimum:num\":\"30\",\"totalPerPower:num\":\"30\"}","dimmer:struct":"{\"color:str\":\"#505050\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"10\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"12\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"2\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_WhiteClouds
 * @text WIND: White Clouds
 * @desc Not the main character from Final Fantasy VII.
 * Fluffy white clouds slowly drift across the upper screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Wind_XtremeSpeed
 * @text WIND: Xtreme Speed
 * @desc Gotta go fast! Speedlines whip past!
 * Works best below the tileset layer.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"28\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"middle screen\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"100\",\"opacityVariance:num\":\"28\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"2.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"2.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"15\",\"totalPerPower:num\":\"3\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"24\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Light
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Light
 * @text Category - Light-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_Confetti
 * @text LIGHT: Confetti
 * @desc Party like it's 1999!
 * Confetti of differing shapes drop from the sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"90\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"8\",\"scale:num\":\"0.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"40\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+3\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LensFlare
 * @text LIGHT: Lens Flare
 * @desc Relive the amateur days from Photoshop!
 * A lens flare descends from the upper corner of the sky!
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"left 10%\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"upper 10%\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"16\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.80\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"1\",\"totalPerPower:num\":\"0\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"longevity:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"6\",\"angleSwaySpeed:eval\":\"0.0025\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LightBurst
 * @text LIGHT: Light Burst
 * @desc Sometimes also known as Sun Bursts. CAUTION: Bright lights!
 * Bright white light bursts out from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"12\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"2\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_LightOrbs
 * @text LIGHT: Light Orbs
 * @desc Show me the light!
 * Light orbs fly round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PastelBrume
 * @text LIGHT: Pastel Brume
 * @desc Cute pastel colors forming a foggy brume.
 * Various bright colors cover the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.2\",\"speedVariance:eval\":\"0.3\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PrismBurst
 * @text LIGHT: Prism Burst
 * @desc More color than a bag of candy! CAUTION: Bright lights!
 * Lights of all colors expand out from a target.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"12\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"2\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_PrismBeams
 * @text LIGHT: Prismatic Gleam
 * @desc Our seven lights spring to the task!
 * Colors of all sorts shine from the skies high above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_RainbowClouds
 * @text LIGHT: Rainbow Clouds
 * @desc Colorful clouds dot the heavens.
 * Multi-colored clouds slowly drift across the upper screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 30%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"32\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_RainbowOrbs
 * @text LIGHT: Rainbow Orbs
 * @desc Taste the rainbow!
 * Multi-colored rainbow orbs spawn in and float about.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"1\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Light_Stars
 * @text LIGHT: Star Fall
 * @desc You're a star. You're one in a million.
 * Stars fall out of the night sky spinning round and round.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"5\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"-3\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Dark
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Dark
 * @text Category - Dark-Themed
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_AshDebris
 * @text DARK: Ash Debris
 * @desc Gotta ketchum all.
 * Pieces of ash debris flutter through the air.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocation:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"180\",\"opacityVariance:num\":\"40\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"2\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"45\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"-3\",\"spinSpeedVariance:eval\":\"2\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Ashfall
 * @text DARK: Ashfall
 * @desc But unlike thunder, this didn’t stop. It went on and on.
 * Volcanic ash pieces descend from the skies above.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"150\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"180\",\"opacityVariance:num\":\"40\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"20\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"true\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"+0\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"215\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_BloodRain
 * @text DARK: Blood Rain
 * @desc It's actually a real phenomenon.
 * However, it's not really blood.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"36\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"130\",\"opacityVariance:num\":\"30\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#cc0000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"12\",\"angle:eval\":\"255\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"5\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_DarkOrbs
 * @text DARK: Dark Orbs
 * @desc Hello darkness, my old friend.
 * Dark orbs circle about the screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"180\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"192\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.5\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"2\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"3\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Fumes
 * @text DARK: Fumes
 * @desc Don't inhale any!
 * Dark fume clouds plume from below.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"30\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"120\",\"opacityVariance:num\":\"20\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"15\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"0.8\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"4\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"3\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"90\",\"respawnDelayRngPerPower:eval\":\"-9\",\"sparkleFinish:eval\":\"false\",\"scaleIn:eval\":\"0.0\",\"scaleInDuration:eval\":\"45\",\"scaleOut:eval\":\"1.0\",\"scaleOutDuration:eval\":\"10\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"3\",\"speedVariance:eval\":\"1\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"6\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_MoonBeams
 * @text DARK: Moonlight Beams
 * @desc Moonlight is the smuggler's enemy.
 * Light the path in the night sky by moonshine.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"240\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 10%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"32\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"60\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.5\",\"scaleRatioY:num\":\"0.1\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#d0bbee\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"6\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"3\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"300\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"10\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"3\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_ShadowBurst
 * @text DARK: Shadow Siphon
 * @desc Drain all of the light! CAUTION: Dark lights!
 * Light from around is all drained into one area.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"false\",\"opacity:num\":\"64\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"10\",\"scale:num\":\"1.50\",\"scaleVariance:num\":\"0.50\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.05\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"10\"}","dimmer:struct":"{\"color:str\":\"#ffffff\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"6\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"6\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\",\"flatFlutter:eval\":\"false\",\"hueSwayRange:eval\":\"0\",\"hueSwaySpeed:eval\":\"0.01\",\"respawnCommonEventID:num\":\"0\",\"respawnDelayMin:eval\":\"0\",\"respawnDelayRngPerPower:eval\":\"0\",\"scaleIn:eval\":\"1.0\",\"scaleInDuration:eval\":\"10\",\"scaleOut:eval\":\"0.1\",\"scaleOutDuration:eval\":\"20\",\"CustomFinish\":\"\",\"fireworksFinish:eval\":\"false\",\"sparkleFinish:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"player\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"-16\",\"speed:eval\":\"0\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"720\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_SmokeFog
 * @text DARK: Smog
 * @desc Smoking is bad, mkay?
 * Smokey fog (aka Smog) cover the whole screen.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"15\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#222222\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"12\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_SmokeClouds
 * @text DARK: Smoke Clouds
 * @desc Accompanied by factories owned by evil corporations.
 * Smoke clouds blot out the sun.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"800\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"upper 40%\",\"mapBound:eval\":\"false\",\"opacity:num\":\"128\",\"opacityVariance:num\":\"24\",\"opacityEasingType:str\":\"Linear\",\"opacityFadeInTime:num\":\"80\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0.20\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"0.6\",\"totalMinimum:num\":\"0\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#00e1e1\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"2\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"1.5\",\"speedVariance:eval\":\"0.5\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"false\",\"angleVariance:eval\":\"2\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Dark_Sootfall
 * @text DARK: Sootfall
 * @desc Try not to build a snowman out of this.
 * Smoke-contaminated snow falls from the sky.
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnLocationY:str\":\"random\",\"mapBound:eval\":\"true\",\"opacity:num\":\"160\",\"opacityVariance:num\":\"20\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"4\"}","image:struct":"{\"generated:eval\":\"true\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[]\",\"iconsWeight:num\":\"16\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"16\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"220\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"false\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons1
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons1
 * @text Category - Icons (Slow)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Up
 * @text SLOW: Flying Icons ↑
 * @desc Icons fly to the top at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_UpperRight
 * @text SLOW: Flying Icons ↗
 * @desc Icons fly upper right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Right
 * @text SLOW: Flying Icons →
 * @desc Icons fly to the right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_LowerRight
 * @text SLOW: Flying Icons ↘
 * @desc Icons fly lower right at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Down
 * @text SLOW: Flying Icons ↓
 * @desc Icons fly to the bottom at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_LowerLeft
 * @text SLOW: Flying Icons ↙
 * @desc Icons fly lower left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Left
 * @text SLOW: Flying Icons ←
 * @desc Icons fly to the left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_UpperLeft
 * @text SLOW: Flying Icons ↖
 * @desc Icons fly upper left at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Slow_Icons_Mid
 * @text SLOW: Flying Icons ●
 * @desc Icons hover at slow speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"2\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"1\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"1\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons2
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons2
 * @text Category - Icons (Medium)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Up
 * @text MEDIUM: Flying Icons ↑
 * @desc Icons fly to the top at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_UpperRight
 * @text MEDIUM: Flying Icons ↗
 * @desc Icons fly upper right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Right
 * @text MEDIUM: Flying Icons →
 * @desc Icons fly to the right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_LowerRight
 * @text MEDIUM: Flying Icons ↘
 * @desc Icons fly lower right at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Down
 * @text MEDIUM: Flying Icons ↓
 * @desc Icons fly to the bottom at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_LowerLeft
 * @text MEDIUM: Flying Icons ↙
 * @desc Icons fly lower left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Left
 * @text MEDIUM: Flying Icons ←
 * @desc Icons fly to the left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_UpperLeft
 * @text MEDIUM: Flying Icons ↖
 * @desc Icons fly upper left at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"60\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Medium_Icons_Mid
 * @text MEDIUM: Flying Icons ●
 * @desc Icons hover at medium speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"6\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"2\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"2\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Icons3
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Icons3
 * @text Category - Icons (Fast)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Up
 * @text FAST: Flying Icons ↑
 * @desc Icons fly to the top at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"90\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_UpperRight
 * @text FAST: Flying Icons ↗
 * @desc Icons fly upper right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"45\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Right
 * @text FAST: Flying Icons →
 * @desc Icons fly to the right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_LowerRight
 * @text FAST: Flying Icons ↘
 * @desc Icons fly lower right at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"315\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Down
 * @text FAST: Flying Icons ↓
 * @desc Icons fly to the bottom at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"270\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_LowerLeft
 * @text FAST: Flying Icons ↙
 * @desc Icons fly lower left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"225\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Left
 * @text FAST: Flying Icons ←
 * @desc Icons fly to the left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"180\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_UpperLeft
 * @text FAST: Flying Icons ↖
 * @desc Icons fly upper left at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"30\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"straight\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"135\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"15\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"0\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+2\",\"spinSpeedVariance:eval\":\"1\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"0\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"0\",\"ySwaySpeed:eval\":\"0.01\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Fast_Icons_Mid
 * @text FAST: Flying Icons ●
 * @desc Icons hover at fast speeds. To change icons used,
 * go to Custom Settings > Image Settings > Icon(s).
 * 
 * @arg MainData
 * @text Main Settings
 * 
 * @arg powerTarget:eval
 * @text Power
 * @parent MainData
 * @desc What weather power do you wish to apply?
 * Use values between 1 and 9. You may use JavaScript code.
 * @default 5
 * 
 * @arg duration:eval
 * @text Duration
 * @parent MainData
 * @desc How many frames to fully change the weather?
 * You may use JavaScript code.
 * @default 60
 *
 * @arg WaitForCompletion:eval
 * @text Wait For Completion?
 * @parent MainData
 * @type boolean
 * @on Wait
 * @off Don't Wait
 * @desc Wait for weather to completely change before moving on
 * with the next event command?
 * @default false
 * 
 * @arg LayerData
 * @text Layer Settings
 *
 * @arg Layer:arrayeval
 * @text Layer(s)
 * @parent LayerData
 * @type string[]
 * @desc Which weather layer(s) do you wish to apply changes?
 * Use values between 1 and 10. You may use JavaScript code.
 * @default ["1"]
 *
 * @arg UpperLower:str
 * @text Upper/Lower?
 * @parent LayerData
 * @type select
 * @option upper
 * @option lower
 * @option both
 * @desc Play the weather pattern above the tileset or below it?
 * @default upper
 * 
 * @arg Customization
 *
 * @arg Custom:struct
 * @text Custom Settings
 * @parent Customization
 * @type struct<Custom>
 * @desc Adjust the custom settings involving this weather.
 * @default {"sprite:struct":"{\"lifespan:num\":\"120\",\"lifespanVariance:num\":\"0\",\"spawnLocationX:str\":\"random\",\"spawnOffsetX:eval\":\"+0\",\"spawnLocationY:str\":\"random\",\"spawnOffsetY:eval\":\"+0\",\"mapBound:eval\":\"true\",\"opacity:num\":\"255\",\"opacityVariance:num\":\"0\",\"opacityEasingType:str\":\"InQuart\",\"opacityFadeInTime:num\":\"16\",\"scale:num\":\"1.0\",\"scaleVariance:num\":\"0\",\"scaleRatioX:num\":\"1.0\",\"scaleRatioY:num\":\"1.0\",\"totalMinimum:num\":\"10\",\"totalPerPower:num\":\"20\"}","dimmer:struct":"{\"color:str\":\"#000000\",\"opacityMinimum:num\":\"0\",\"opacityPerPower:num\":\"0\"}","image:struct":"{\"generated:eval\":\"false\",\"generatedWeight:num\":\"1\",\"icons:arraynum\":\"[\\\"256\\\",\\\"260\\\",\\\"263\\\",\\\"264\\\",\\\"265\\\",\\\"270\\\",\\\"271\\\",\\\"278\\\"]\",\"iconsWeight:num\":\"1\",\"pictures:arraystr\":\"[]\",\"picturesWeight:num\":\"1\",\"blendMode:num\":\"0\",\"hueVariations:arraynum\":\"[]\",\"toneVariations:arrayeval\":\"[]\"}","flags:struct":"{\"alwaysVisiblePlayer:eval\":\"false\"}","trajectory:struct":"{\"type:str\":\"frozen\",\"lockedOffsetX:eval\":\"+0\",\"lockedOffsetY:eval\":\"+0\",\"speed:eval\":\"12\",\"speedVariance:eval\":\"0\",\"angle:eval\":\"0\",\"alignAngle:eval\":\"true\",\"angleVariance:eval\":\"0\",\"angleOffset:eval\":\"+0\",\"angleArc:eval\":\"+0\",\"angleSwayRange:eval\":\"10\",\"angleSwaySpeed:eval\":\"0.01\",\"spinSpeed:eval\":\"+0\",\"spinSpeedVariance:eval\":\"0\",\"reverseSpin:eval\":\"true\",\"xSwayRange:eval\":\"4\",\"xSwaySpeed:eval\":\"0.01\",\"ySwayRange:eval\":\"4\",\"ySwaySpeed:eval\":\"0.01\"}"}
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
 * @param WeatherEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General Settings for the Weather Effects plugin.
 * @default {"PreRenderGenImage:eval":"false","RenderVariations:num":"16","SmoothIcons:eval":"true"}
 *
 * @param Options:struct
 * @text Options Settings
 * @type struct<Options>
 * @desc Options Settings for the Weather Effects plugin.
 * @default {"Options":"","AddWeatherDensityOption:eval":"true","AdjustRect:eval":"true","Name:str":"Weather Density"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param PreRenderGenImage:eval
 * @text Pre-Render Generated?
 * @type boolean
 * @on Pre-render
 * @off Render when needed
 * @desc Pre-render generated images for weather patterns?
 * This reduces lag for on-demand weather patterns.
 * @default false
 *
 * @param RenderVariations:num
 * @text # of Variations
 * @parent PreRenderGenImage:eval
 * @min 1
 * @desc How many variations of each rendered weather pattern do you want?
 * @default 16
 *
 * @param SmoothIcons:eval
 * @text Smooth Icons?
 * @type boolean
 * @on Smooth
 * @off Pixelated
 * @desc Smooth out the icons used for weather sprites?
 * Or keep them pixelated?
 * @default true
 *
 * @param ExpandedRandomSpawn:eval
 * @text Expand Random Spawn?
 * @type boolean
 * @on Expand
 * @off Don't Expand
 * @desc Expand random spawn locations by an extra screen size?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param Options
 * @text Options
 *
 * @param AddWeatherDensityOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Weather Density' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Weather Density
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Custom:
 *
 * @param sprite:struct
 * @text Sprite Settings
 * @type struct<Sprite>
 * @desc The general settings involving the weather sprites.
 * @default {"lifespan:num":"60","lifespanVariance:num":"0","spawnLocationX:str":"random","spawnLocationY:str":"random","mapBound:eval":"true","opacity:num":"255","opacityVariance:num":"0","scale:num":"1.0","scaleVariance:num":"0","totalMinimum:num":"20","totalPerPower:num":"5"}
 *
 * @param dimmer:struct
 * @text Dimmer Overlay
 * @type struct<Dimmer>
 * @desc Settings involving the dimmer overlay cast over the screen.
 * @default {"color:str":"#000000","opacityMinimum:num":"0","opacityPerPower:num":"0"}
 *
 * @param image:struct
 * @text Image Settings
 * @type struct<Image>
 * @desc Settings for the images used for the weather sprites.
 * Weathers with multiple images will be picked at random.
 * @default {"generated:eval":"true","generatedWeight:num":"1","icons:arraynum":"[]","iconsWeight:num":"16","pictures:arraystr":"[]","picturesWeight:num":"16","blendMode:num":"0","hueVariations:arraynum":"[]","toneVariations:arrayeval":"[]"}
 *
 * @param flags:struct
 * @text Special Effects
 * @type struct<Flags>
 * @desc Specialized effects that are turned on for specific weather
 * types can be found here.
 * @default {"alwaysVisiblePlayer:eval":"false"}
 *
 * @param trajectory:struct
 * @text Trajectory Settings
 * @type struct<Trajectory>
 * @desc Settings used to determine the trajectory a weather sprite
 * will take and how they behave on it.
 * @default {"type:str":"straight","speed:eval":"1","angle:eval":"0","alignAngle:eval":"true","angleVariance:eval":"0","angleOffset:eval":"+0","angleSwayRange:eval":"0","angleSwaySpeed:eval":"0.01","xSwayRange:eval":"0","xSwaySpeed:eval":"0.01","ySwayRange:eval":"0","ySwaySpeed:eval":"0.01"}
 *
 */
/* ----------------------------------------------------------------------------
 * Sprite Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Sprite:
 *
 * @param lifespan:num
 * @text Lifespan
 * @desc Lifespan of each weather sprite in frames.
 * @default 60
 *
 * @param lifespanVariance:num
 * @text Variance
 * @parent lifespan:num
 * @desc What variance is there to each lifespan value?
 * @default 0
 *
 * @param spawnLocationX:str
 * @text Spawn Location X
 * @type select
 * @option - 
 * @option random
 * @option - 
 * @option left border
 * @option left 10%
 * @option left 20%
 * @option left 30%
 * @option left 40%
 * @option left 50%
 * @option left 60%
 * @option left 70%
 * @option left 80%
 * @option left 90%
 * @option - 
 * @option center screen
 * @option center 10%
 * @option center 20%
 * @option center 30%
 * @option center 40%
 * @option center 50%
 * @option center 60%
 * @option center 70%
 * @option center 80%
 * @option center 90%
 * @option - 
 * @option right border
 * @option right 10%
 * @option right 20%
 * @option right 30%
 * @option right 40%
 * @option right 50%
 * @option right 60%
 * @option right 70%
 * @option right 80%
 * @option right 90%
 * @option - 
 * @option sides border
 * @option sides 10%
 * @option sides 20%
 * @option sides 30%
 * @option sides 40%
 * @option - 
 * @desc What x location should the weather sprites appear?
 * @default random
 * 
 * @param spawnOffsetX:eval
 * @text Offset X
 * @parent spawnLocationX:str
 * @desc Offset the spawn location by this many pixels.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param spawnLocationY:str
 * @text Spawn Location Y
 * @type select
 * @option - 
 * @option random
 * @option - 
 * @option upper border
 * @option upper 10%
 * @option upper 20%
 * @option upper 30%
 * @option upper 40%
 * @option upper 50%
 * @option upper 60%
 * @option upper 70%
 * @option upper 80%
 * @option upper 90%
 * @option - 
 * @option middle screen
 * @option middle 10%
 * @option middle 20%
 * @option middle 30%
 * @option middle 40%
 * @option middle 50%
 * @option middle 60%
 * @option middle 70%
 * @option middle 80%
 * @option middle 90%
 * @option - 
 * @option - 
 * @option lower border
 * @option lower 10%
 * @option lower 20%
 * @option lower 30%
 * @option lower 40%
 * @option lower 50%
 * @option lower 60%
 * @option lower 70%
 * @option lower 80%
 * @option lower 90%
 * @option - 
 * @option either border
 * @option either 10%
 * @option either 20%
 * @option either 30%
 * @option either 40%
 * @option - 
 * @desc What y location should the weather sprites appear?
 * @default random
 * 
 * @param spawnOffsetY:eval
 * @text Offset Y
 * @parent spawnLocationY:str
 * @desc Offset the spawn location by this many pixels.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param mapBound:eval
 * @text Map Bound?
 * @parent spawnLocation:str
 * @type boolean
 * @on Moves with Map
 * @off Screen-Locked
 * @desc Do the weather sprites move with the map scrolling?
 * @default true
 *
 * @param opacity:num
 * @text Starting Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Starting opacity of each weather sprite in frames.
 * @default 255
 *
 * @param opacityVariance:num
 * @text Variance
 * @parent opacity:num
 * @desc What variance is there to each starting opacity value?
 * @default 0
 *
 * @param opacityEasingType:str
 * @text Easing Type
 * @parent opacity:num
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
 * @desc Select which easing type you wish to apply for opacity.
 * @default Linear
 *
 * @param opacityFadeInTime:num
 * @text Fade In Time
 * @parent opacity:num
 * @type number
 * @desc How many frames does it take for the sprite to fade in?
 * Use 0 to start immediately at full opacity.
 * @default 16
 *
 * @param scale:num
 * @text Scale
 * @desc What is the scale of the sprite?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param scaleVariance:num
 * @text Variance
 * @parent scale:num
 * @desc What variance is there to the main scale value?
 * @default 0
 *
 * @param scaleRatioX:num
 * @text Ratio X
 * @parent scale:num
 * @desc What is the ratio of this sprite's scale X?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param scaleRatioY:num
 * @text Ratio Y
 * @parent scale:num
 * @desc What is the ratio of this sprite's scale Y?
 * 0.0 = 0%. 0.5 = 50%. 1.0 = 100%. 1.5 = 150%. 2.0 = 200%.
 * @default 1.0
 *
 * @param totalMinimum:num
 * @text Total Sprite Minimum
 * @desc What is the minimum number of sprites on the screen?
 * @default 20
 *
 * @param totalPerPower:num
 * @text Total Per Power
 * @parent totalMinimum:num
 * @desc Increase the total number of sprites per power by this.
 * Lowest power is 1. Highest power is 9.
 * @default 5
 *
 */
/* ----------------------------------------------------------------------------
 * Dimmer Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Dimmer:
 *
 * @param color:str
 * @text Color
 * @desc Dimmer color. This uses #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param opacityMinimum:num
 * @text Opacity Minimum
 * @parent totalMinimum:num
 * @desc What is the minimum opacity value for the dimmer?
 * @default 0
 *
 * @param opacityPerPower:num
 * @text Opacity Per Power
 * @parent opacityMinimum:num
 * @desc What is the total opacity value per power for the dimmer?
 * @default 0
 *
 */
/* ----------------------------------------------------------------------------
 * Image Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Image:
 *
 * @param generated:eval
 * @text Generated Image?
 * @type boolean
 * @on Include
 * @off Exclude
 * @desc Include the plugin-generated image for this weather type?
 * @default true
 *
 * @param generatedWeight:num
 * @text Weight
 * @parent generated:eval
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param icons:arraynum
 * @text Icon(s)
 * @type string[]
 * @desc Which icons do you wish to include for the images to appear as?
 * @default []
 *
 * @param iconsWeight:num
 * @text Weight
 * @parent icons:arraynum
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param pictures:arraystr
 * @text Picture(s)
 * @type file[]
 * @dir img/pictures/
 * @require 1
 * @desc Which pictures do you wish to include for the images to appear as?
 * @default []
 *
 * @param picturesWeight:num
 * @text Weight
 * @parent pictures:arraystr
 * @type number
 * @min 1
 * @desc What is the random weight? The higher the value, the more
 * likely this is to be used when randomized.
 * @default 1
 *
 * @param blendMode:num
 * @text Blend Mode
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the weather sprite?
 * @default 0
 *
 * @param hueVariations:arraynum
 * @text Hue Variations
 * @type number[]
 * @min 0
 * @max 360
 * @desc What hue variations will be randomly selected from?
 * Use a value between 0 and 360.
 * @default ["0"]
 *
 * @param toneVariations:arrayeval
 * @text Tone Variations
 * @type string[]
 * @desc What tone variations will be randomly selected from?
 * Format for each: [Red, Green, Blue, Gray]
 * @default ["[0,0,0,0]"]
 *
 */
/* ----------------------------------------------------------------------------
 * Special Flags Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Flags:
 *
 * @param alwaysVisiblePlayer:eval
 * @text Allow Visible Player?
 * @type boolean
 * @on Visible
 * @off Ignore
 * @desc Make the player more visible by reducing the
 * opacity of nearby weather sprites?
 * @default false
 *
 * @param flatFlutter:eval
 * @text Flat Fluttering?
 * @type boolean
 * @on Object is Flat
 * @off Object has Volume
 * @desc Is the object flat and flutters in the wind?
 * Or does the object have volume and doesn't?
 * @default false
 *
 * @param longevity:eval
 * @text Longevity
 * @type boolean
 * @on Lasts Until Changed
 * @off Normal
 * @desc Weather effects with longevity don't expire until
 * the weather pattern type is changed.
 * @default false
 *
 * @param hueSwayRange:eval
 * @text Hue Sway Range
 * @desc How much should the hue sway back and forth?
 * JavaScript code can be used.
 * @default 0
 *
 * @param hueSwaySpeed:eval
 * @text Hue Sway Speed
 * @parent hueSwayRange:eval
 * @desc What speed does the angle sway? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param respawnCommonEventID:num
 * @text Respawn Common Event
 * @type common_event
 * @desc Play a specific Common Event when this event respawns?
 * The Common Event will run as a Once Parallel.
 * @default 0
 *
 * @param respawnDelayMin:eval
 * @text Respawn Delay Minimum
 * @desc Is there a delay to the respawn? This is how many
 * frames the sprite must wait before respawning.
 * @default 0
 *
 * @param respawnDelayRngPerPower:eval
 * @text RNG Delay Per Power
 * @parent respawnDelayMin:eval
 * @desc How many randomized frames of delay per power must be waited?
 * @default +0
 *
 * @param scaleIn:eval
 * @text Scale In
 * @desc What scale ratio should the sprite spawn in at?
 * Use 1.0 for regular ratios. You may use JavaScript.
 * @default 1.0
 *
 * @param scaleInDuration:eval
 * @text Duration
 * @parent scaleIn:eval
 * @desc How many frames should the scale in effect take?
 * Scale in will always head towards 1.0.
 * @default 10
 *
 * @param scaleOut:eval
 * @text Scale Out
 * @desc What scale ratio should the sprite despawn out at?
 * Use 1.0 for regular ratios. You may use JavaScript.
 * @default 1.0
 *
 * @param scaleOutDuration:eval
 * @text Duration
 * @parent scaleOut:eval
 * @desc How many frames should the scale out effect take?
 * Scale in will usually head from 1.0.
 * @default 10
 * 
 * @param CustomFinish
 * @text Custom Finish
 *
 * @param fireworksFinish:eval
 * @text Fireworks Finish?
 * @parent CustomFinish
 * @type boolean
 * @on Show me fireworks!
 * @off It's not right!
 * @desc At the end of the weather particle's lifespan,
 * finish up with a fireworks explosion?
 * @default false
 *
 * @param sparkleFinish:eval
 * @text Sparkle Finish?
 * @parent CustomFinish
 * @type boolean
 * @on Sparkle YES!
 * @off NO! No Sparkle!
 * @desc At the end of the weather particle's lifespan,
 * finish up with a fabulous spinning sparkle effect?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Trajectory Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Trajectory:
 *
 * @param type:str
 * @text Trajectory Type
 * @type select
 * @option -
 * @option Straight: Follows the trajectory
 * @value straight
 * @option Frozen: Does not follow a trajectory
 * @value frozen
 * @option -
 * @option Player-Locked: Map only! Center of sprite is locked on player
 * @value player
 * @option Follower-Locked: Map only! Center of sprite is locked on target follower
 * @value follower
 * @option Event-Locked: Map only! Center of sprite is locked on target event
 * @value event
 * @option -
 * @option Actor-Locked: Battle only! Center of sprite is locked on target actor
 * @value actor
 * @option Enemy-Locked: Battle only! Center of sprite is locked on target enemy
 * @value enemy
 * @option User-Locked: Battle only! Center of sprite is locked on current user
 * @value user
 * @option Target-Locked: Battle only! Center of sprite is locked on current target
 * @value target
 * @option -
 * @desc What trajectory type is used?
 * @default straight
 * 
 * @param lockedID:eval
 * @text Locked ID/Index
 * @parent type:str
 * @desc For locked trajectories only. Input the follower index.
 * Or ID of event, actor, enemy.
 * @default 0
 * 
 * @param lockedOffsetX:eval
 * @text Offset X (Locked)
 * @parent type:str
 * @desc For locked trajectories only.
 * Negative: left. Positive: right.
 * @default +0
 * 
 * @param lockedOffsetY:eval
 * @text Offset Y (Locked)
 * @parent type:str
 * @desc For locked trajectories only.
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param speed:eval
 * @text Speed
 * @desc What speed is the sprite moving at? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 1
 *
 * @param speedVariance:eval
 * @text Speed Variance
 * @parent speed:eval
 * @desc What variance is there to the speed value?
 * @default 0
 *
 * @param angle:eval
 * @text Angle
 * @desc What angle (0 to 360) is the sprite moving toward?
 * JavaScript code can be used.
 * @default 0
 *
 * @param alignAngle:eval
 * @text Align Angle?
 * @parent angle:eval
 * @type boolean
 * @on Rotates to Align
 * @off Does Not Rotate
 * @desc Should the sprite rotate itself according to the angle
 * it is moving at across the screen?
 * @default true
 *
 * @param angleVariance:eval
 * @text Angle Variance
 * @parent angle:eval
 * @desc What variance is there to the base angle?
 * @default 0
 *
 * @param angleOffset:eval
 * @text Visual Angle Offset
 * @parent angle:eval
 * @desc Offset the visual by this many degrees. Used for images
 * that aren't made aligned with 0 degrees facing left.
 * @default +0
 *
 * @param angleArc:eval
 * @text Angle Arc
 * @desc How should the trajectory arc when the sprite moves?
 * JavaScript code can be used.
 * @default +0
 *
 * @param angleSwayRange:eval
 * @text Angle Sway Range
 * @desc How much should the angle sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param angleSwaySpeed:eval
 * @text Angle Sway Speed
 * @parent angleSwayRange:eval
 * @desc What speed does the angle sway? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param spinSpeed:eval
 * @text Spin Speed
 * @desc What speed do the sprites spin?
 * JavaScript code can be used.
 * @default +0
 *
 * @param spinSpeedVariance:eval
 * @text Spin Speed Variance
 * @parent spinSpeed:eval
 * @desc What variance is there to the spin speed?
 * @default 0
 *
 * @param reverseSpin:eval
 * @text Reverse Spin?
 * @parent spinSpeed:eval
 * @type boolean
 * @on Can Reverse Spin
 * @off No Reverse Spin
 * @desc Can the spin go in the reverse direction?
 * @default false
 *
 * @param xSwayRange:eval
 * @text X Sway Range
 * @desc How much should the X value sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param xSwaySpeed:eval
 * @text X Sway Speed
 * @parent xSwayRange:eval
 * @desc What speed does the sway move? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 * @param ySwayRange:eval
 * @text Y Sway Range
 * @desc How much should the Y value sway as the sprite moves?
 * JavaScript code can be used.
 * @default 0
 *
 * @param ySwaySpeed:eval
 * @text Y Sway Speed
 * @parent ySwayRange:eval
 * @desc What speed does the sway move? Lower is slower.
 * Higher is faster. JavaScript code can be used.
 * @default 0.01
 *
 */
//=============================================================================

const _0x3c3250=_0x1789;function _0x5928(){const _0x2ef5fe=['RadiansToDegrees','screenWidth','exit','weatherEffectsArcticBeams','randomizeBitmapType','weatherEffectsMoonBeams','fast_icons_6','flatFlutter','_cached_WeatherEffects_Mist','Thunder_Thunderclouds','_maxLevel','getGeneratedWeatherParticle','updatePositionTrajectorySway','_weather','_cached_WeatherEffects_DiamondDust','isPressed','33194zLHWPI','Medium_Icons_Left','_flatFlutterDirX','flamehaze','format','_cached_WeatherEffects_SmokeFog','Wind_Balloons','setLayerData','parameters','WEATHER_NATURE_GREEN_COLORS','9888669PJBlnv','arc','Thunder_Thundersurge','MakeVariance','WEATHER_CONFETTI_COLORS','weatherEffectsSandClouds','weatherEffectsFireworksFlower','setWeatherLayerData','trim','tileWidth','drawFireworksMissile','rgba(%1,%2,%3,%4)','children','11790558XCpHZT','fumes','Light_Confetti','call','_opacityFadeInTime','Dark_MoonBeams','_cached_WeatherEffects_HouseDust','event','_baseAngle','Fire_Embers','opacityPerPower','_alignAngle','ARRAYNUM','drawTreeLeaf','Earth_HouseDust','drawDandelionSeed','_cached_WeatherEffects_Snowflakes','Fast_Icons_Mid','weatherEffectsIcons','Dark_Fumes','weatherEffectsPurpleHaze','isSceneBattle','slow_icons_4','Water_RainClouds','weatherEffectsSparkle','hexToArray','match','translate','weatherEffectsPastelBrume','isSceneMap','ARRAYEVAL','rebornInitialOpacity','#333333','duration','right\x2090%','weatherEffectsRainClouds','max','moonbeams','totalPerPower','pollutionclouds','respawnCommonEventID','rgba(255,255,255,0)','_createBitmaps','_addSprite','drawPolyArc','WEATHER_SAKURA1_COLORS','ySwayRange','rebornSpriteBlendMode','7842810LoAjVj','updateWeatherLayerPower','RegExp','steam','Game_Screen_clearWeather','target','_red','middle\x2090%','rebornActions','pastelbrume','weatherEffectsSpiderbolt','calcEasing','Power','Earth_DustStorm','processSparkleFinish','Thunder_PlasmaSurge','#baa4b2','substring','lower\x20border','transform','user','_lowerLayer','#00dd00','89JJbQLx','#f68e56','fill','#9cdaf2','MakeFloatVariance','isLongevityAffected','#f49ac1','_cached_WeatherEffects_Ashfall','NUM','reverseSpin','globalAlpha','black','processFireworksFinish','Wind_WhiteClouds','push','Medium_Icons_Up','updatePositionFrozenTrajectory','updatePositionBattleLockedTarget','_cached_WeatherEffects_AshDebris','create','duststorm','prepareGeneratedWeatherImages','weatherEffectsFlameWall','createBattleback','_lockedOffsetX','middle\x2050%','smokefog','medium_icons_4','Dark_SmokeFog','#fff200','getWeatherLayerSprite','drawFireball','removeUnusedColorFilter','ConvertParams','setup','Options','drawMapleLeaf','weatherEffectsAshfall','middle\x2040%','setupEventCommandData','slow_icons_7','WEATHER_EARTH_COLORS','#949fc6','_spriteset','#bbffff','rebornSpriteHue','load','Fire_ShootingStar','whiteclouds','#ccaaff','processRespawnDelay','_cached_WeatherEffects_Rain','cloudburst','_cached_WeatherEffects_ShootingStars','Duration','EXPAND_RNG_SPAWN','memorizeWeatherLayerData','cherryblossoms','weatherEffectsMist','_originBound','opacityRate','_xSwayRange','_cached_WeatherEffects_WhiteClouds','_cached_WeatherEffects_Bubbles','setFullBitmapFrame','#ffaaff','medium_icons_8','drawLensFlare','img/system/Iconset.png','_lockedOffsetY','_scaleInOutRatio','rgba(255,255,%1,1)','dimmer','Fast_Icons_LowerRight','moveTo','Light_Stars','_cached_WeatherEffects_LensFlare','_memorizedWeatherData','setColor','pop','#fcf3de','updateWeatherLayerDuration','#ffffaa','lockedID','closePath','rainbowarch','fast_icons_4','angleSwaySpeed','_opacityEasingType','opacityVariance','_cached_WeatherEffects_Spiderbolt','lightorbs','Dark_BloodRain','_scaleRatioX','canvas','sqrt','_cached_WeatherEffects_SandClouds','weatherEffectsDiamondDust','Game_Map_setup','_realOpacity','scaleRatioY','arcticbeam','_cached_WeatherEffects_Xtreme','_baseTexture','Earth_RadioactiveBeams','ceil','_flatFlutterSpeedX','shouldPreRenderWeatherImages','weatherEffectsIceFog','#bbc9f9','weatherEffectsLightOrbs','medium_icons_7','bloodrain','#008800','isPlaytest','_cached_WeatherEffects_Sparkle','rgba(255,64,64,0)','updatePositionTrajectory','Ice_ArcticBeam','Fire_HeatClouds','displayY','rebornSprite','_cached_WeatherEffects_Embers','createLinearGradient','addLoadListener','flags','concat','weatherEffectsShootingStars','updateDimmerColor','#aaaaff','_cached_WeatherEffects_PurpleHaze','updatePositionFinal','Custom','_cached_WeatherEffects_Blizzard','WEATHER_CLOUD_DARK_COLORS','createFrontEnvironmentContainer','type','weatherEffectsSandstorm','#ffaacc','getContext','opacityMinimum','Fast_Icons_LowerLeft','#f26522','fast_icons_7','updatePositionFailsafeTrajectory','scaleOutDuration','drawSakuraPetal','prototype','weatherEffectsDarkOrbs','#000000','weatherEffectsCloudBurst','spiderbolt','totalMinimum','_cached_WeatherEffects_None','#a1d2e5','Light_RainbowClouds','snow','snowclouds','grassyGust','diamonddust','save','getWeatherLayerData','_cached_WeatherEffects_Fireworks','_strokeWidth','balloons','_colorFilter','firestorm','Dark_Ashfall','rgba(%1,255,%1,1)','weatherEffectsNone','_blue','Fast_Icons_Up','_lastType','_angleArc','WEATHER_CLOUD_WHITE_COLORS','isNoWeather','_cached_WeatherEffects_Fireflies','_cached_WeatherEffects_Storm','WEATHER_DANDELION3_COLORS','right\x2040%','#aaffaa','rebornLifespan','_flakeAngle','Earth_ToxicGas','aurora','medium_icons_2','updatePositionTrajectoryAngle','addColorStop','Medium_Icons_UpperRight','Wind_GrassyGust','getTemporaryCanvas','_baseSprite','index','scaleVariance','thunderbolt','Layer','sootfall','#fac159','weatherEffectsSoapBubbles','randomInt','mapBound','weatherEffectsAutumnLeaves','fast_icons_2','isVolumeSymbol','Settings','right\x2050%','Fire_FlameHaze','lineTo','height','fillStyle','drawText','data','center\x2080%','_cached_WeatherEffects_CrumblingCave','acidrain','weatherEffectsFumes','map','updateFlags','WEATHER_PRIMARY_COLORS','WEATHER_FLAME_COLORS','_angleOffset','weatherEffectsHeatClouds','#754c24','sprite','_cached_WeatherEffects_Snow','weatherEffectsThunderbolt','_tempCanvas','WEATHER_EFFECTS_DEBUG_GENERATE_MSG','sandstorm','weatherEffectsSleet','isInstanceOfSceneMap','maxSprites','ExpandedRandomSpawn','iconsWeight','WEATHER_GREEN_LEAVES_COLORS','updateHueSway','_flakeRadius','#8dc63f','both','right\x2060%','_respawnDelay','_cached_WeatherEffects_RainbowOrbs','updateOpacity','#fff568','#fffbc7','center\x2010%','medium_icons_6','lower\x2020%','trajectory','Light_PrismBeams','weatherEffectsBubbles','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','note','updateWeatherLayer','_cached_WeatherEffects_Aurora','fast_icons_5','#b2e0f2','_weatherParent','weatherEffectsBloodRain','_trajectoryType','WEATHER_PASTEL_BRUME_COLORS','#8393ca','updatePosition','dandelionseeds','tempest','WEATHER_RADIOACTIVE_COLORS','weatherEffectsRain','medium_icons_0','weatherEffectsTempest','weatherEffectsRadioactiveBeams','drawRainbowLensFlare','soapbubbles','weatherEffectsThunderclouds','WEATHER_CLOUD_BLUE_COLORS','members','confetti','loadIconsetBitmap','xSwaySpeed','Thunder_SpiderLightning','#7da7d9','right\x2070%','viewport','scaleOut','balloon','#8c6239','Slow_Icons_UpperLeft','replayMemorizedWeatherLayerData','cyan','shift','_wholeLifespan','setupWeatherEffectNotetags','weatherEffectsRainbowArch','Slow_Icons_Down','_angleSwayRange','status','loadGeneratedBitmap','generated','scaleIn','slow_icons_8','rebornNewData','#ff8800','iconWidth','_hueSwayRng','NoWeather','rgba(%1,\x20%2,\x20%3,\x201)','#fde3d9','#222222','lower\x2080%','_cached_WeatherEffects_RainbowClouds','slow_icons_2','_angleArcTotal','WEATHER_ULTRAVIOLET_COLORS','weatherEffectsLensFlare','WEATHER_DANDELION2_COLORS','#f69679','_cached_WeatherEffects_ArcticBeams','Weather_update','glistening','fireflies','setupIconFrame','thunderclouds','Medium_Icons_LowerRight','WEATHER_SAKURA2_COLORS','weatherEffectsSootfall','#f5989d','weatherEffectsBalloons','weatherEffectsDustStorm','Ice_SnowClouds','_flatFlutterRngY','calculateScaleY','weatherEffectsRainbowClouds','applyPluginCmdSettingsSpecificCases','Light_PastelBrume','Thunder_Discharge','Light_LightBurst','_rainBitmap','#6dcff6','_noWeather','WEATHER_AUTUMN_COLORS','weatherEffectsWhiteClouds','5923072nbQlbN','Fire_SunBeams','_cached_WeatherEffects_DarkOrbs','crumblingcave','random','restore','replace','WEATHER_UV_BEAM_COLORS','_target','weatherEffectsStars','#d2c8c5','rgba(%1,%1,%1,0)','_cached_WeatherEffects_SmokeClouds','beginPath','_cached_WeatherEffects_GreenLeaves','_cached_WeatherEffects_PollutionClouds','WaitForCompletion','#92d450','_flatFlutterRngX','#c5302e','updatePositionStraightTrajectory','#a900ff','fireworksflower','#55a743','snowflakes','#b4a8b1','clearWeather','spinSpeedVariance','white','#e6654c','spinSpeed','screenY','bezierCurveTo','cos','rebornSpriteScale','fast_icons_9','weatherEffectsAshDebris','#e0dd4c','Water_Storm','_ySwayRng','#440000','WEATHER_ARCTIC_BEAM_COLORS','Water_RisingSteam','weatherEffectsToxicGas','drawRainbowArch','frozen','#959595','Earth_PollutionClouds','updatePositionMapLockedTarget','6328185dyWOtz','weatherEffectsDandelionSeeds','spawnOffsetX','upper\x2060%','Wind_Pollen','weatherDensity','includes','setColorTone','filters','WEATHER_EFFECTS_SMOOTH_ICONS','initMembers','scale','_cached_WeatherEffects_Sootfall','drawCloud','registerCommand','_updateAllSprites','_angleSwayRng','_trajectoryLockedID','blizzard','#3d8b43','center\x2070%','longevity','right\x2030%','pictures','right\x20border','Thunder_PurpleHaze','#c69c6d','angleOffset','pollen','adaptWeatherLayerData','applyPluginCmdSettings','_cached_WeatherEffects_Thunderclouds','createTilemap','_cached_WeatherEffects_Firestorm','#fbaf5d','meteorshower','WEATHER_DARKNESS_COLORS','#efcba2','_upperLayerSprites','clearCircle','_cached_WeatherEffects_RainbowArch','sleet','#6aba49','straight','#00bb00','WEATHER_RAINBOW_CLOUD_COLORS','left\x2010%','WEATHER_SUNBEAM_COLORS','shadowBlur','_cached_WeatherEffects_ShadowBurst','createNewWeatherSprites','#acff3b','_cached_WeatherEffects_SnowClouds','strokeStyle','_subject','initialize','rebornSpawnLocation','_xSwaySpeed','loadPictureBitmap','Light_LensFlare','_cached_WeatherEffects_DandelionSeeds','center\x2050%','_ySwayRange','weatherEffectsRainbowOrbs','DegreesToRadian','#ddddff','rgba(128,%1,255,1)','Water_CloudBurst','Medium_Icons_Right','split','WEATHER_BALLOON_COLORS','_cached_WeatherEffects_CloudBurst','#888888','opacity','WEATHER_SUNLIGHT_COLORS','sparkleFinish','applyPluginCmdSettingsLayers','Slow_Icons_Right','updateScaleInOutRatio','_spinSpeed','middle\x2010%','hexToRgba','rgba(%1,255,255,1)','createRadialGradient','weatherEffectsSunBeams','Slow_Icons_LowerLeft','blendMode','STRUCT','weatherEffectsGreenLeaves','weatherEffectsSmokeClouds','toLowerCase','_ySwaySpeed','WEATHER_PASTEL_COLORS','plasmabolt','_flatFlutterSpeedY','rgba(255,255,255,1)','createElement','#fddbe2','follower','lower\x2090%','Ice_DiamondDust','displayX','isMobileDevice','WeatherType','center\x2040%','_cached_WeatherEffects_LightOrbs','lower\x2060%','loadPicture','Spriteset_Map_createTilemap','shadowburst','rgba(128,255,128,1)','upper\x2020%','_branches','_cached_WeatherEffects_BloodRain','sandclouds','findTargetSprite','stringify','tileHeight','center','Fast_Icons_UpperRight','WEATHER_NUCLEAR_COLORS','VisuMZ_0_CoreEngine','WEATHER_EFFECTS_PRERENDER_GENERATED_IMAGES','picturesWeight','yellow','lifespan','lower','left\x2080%','_context','weatherEffectsFlameHaze','updateOpacityFinal','_weatherIcons','staticcharge','Fast_Icons_UpperLeft','image','middle\x2030%','loadSystemImages','_cached_WeatherEffects_HeatClouds','#00aa00','WEATHER_SAKURA3_COLORS','Wind_Tempest','#fcfade','angleVariance','center\x2020%','speed','bind','destination-out','#603913','#ffbbff','#fff799','weatherEffectsSnow','Wind_GreenLeaves','description','Scene_Options_maxCommands','_opacityFadeInTimeWhole','left','left\x2050%','rebornInitialTrajectoryData','_cached_WeatherEffects_Thunderbolt','middle\x2080%','WEATHER_FIREFLY_COLORS','rebornCommonEvent','xtreme','Linear','copyPluginCmdCustomSettings','setHue','_weatherLayers','smokeclouds','floor','_cached_WeatherEffects_SunBeam','#aaccff','_customModified','upper\x2050%','updateData','ARRAYFUNC','getLastPluginCommandInterpreter','_baseHue','prismburst','destroy','#c4df9b','weatherEffectsBlizzard','fast_icons_0','_cached_WeatherEffects_GrassyGust','hueSwaySpeed','constructor','filter','_colorTone','none','_notLoadedReady','storm','ApplyEasing','_scene','Ice_Aurora','lower\x2040%','SmoothIcons','_lowerLayerSprites','fillRect','Thunder_UltravioletBeams','_stormBitmap','ySwaySpeed','createLowerWeatherLayer','toUpperCase','parent','#ddffff','slow_icons_5','#00ffff','weatherEffectsEmbers','#fffde0','WEATHER_FROST_COLORS','WEATHER_DANDELION1_COLORS','rainbowclouds','WEATHER_PRISMBEAM_COLORS','frameCount','scaleRatioX','playOnceParallelInterpreter','globalCompositeOperation','Spriteset_Battle_createBattleFieldContainer','WEATHER_POLLEN_COLORS','_cached_WeatherEffects_Sandstorm','isDebugAllOption','right\x2080%','#aaffcc','shootingstars','AddWeatherDensityOption','weatherEffectsSnowflakes','fast_icons_3','drawBalloon','_speed','updateDimmerOpacity','_cached_WeatherEffects_FlameHaze','length','_cached_WeatherEffects_Stars','Name','weatherEffectsPollutionClouds','Light_LightOrbs','_cached_WeatherEffects_Confetti','#d6967c','#ffaaaa','WEATHER_LIGHTNING_COLORS','origin','#00ff00','stars','_scaleRatioY','#faacab','Slow_Icons_Up','paintOpacity','center\x2090%','bitmap','hueSwayRange','strokeColor','alignAngle','PreRenderGenImage','left\x2090%','slow_icons_6','medium_icons_5','_cached_WeatherEffects_CherryBlossoms','dustclouds','BasicMemorizeWeather','_cached_WeatherEffects_RainClouds','rainboworbs','drawStar','Fire_Fireflies','xSwayRange','#a700ff','_cached_WeatherEffects_ToxicGas','upper\x2090%','darkorbs','weatherEffectsSmokeFog','fontSize','updateWeatherLayers','updatePositionTrajectorySpin','_cached_WeatherEffects_Icons','hueVariations','remove','rgba(%1,%1,255,1)','rebornSpriteImage','_cached_WeatherEffects_FireworksFlower','WEATHER_LIGHT_COLORS','updateLifespan','version','#a800ff','ultraviolet','applyInverse','weatherPower','maxCommands','BasicClearWeather','generatedWeight','drawFireworksFlower','speedVariance','applyPluginCmdSettingsWait','weatherEffectsFirestorm','drawCircle','lighter','weatherEffectsStorm','addGeneralOptions','rainclouds','lower\x2050%','advanced','weatherEffectsSnowClouds','_cached_WeatherEffects_DustStorm','color','slow_icons_3','ConfigManager_applyData','autumnleaves','#ff0000','RenderVariations','createUpperWeatherLayer','_lowerWeatherContainer','left\x2030%','Earth_SandClouds','toxicgas','lower\x2070%','weatherEffectsAcidRain','_cached_WeatherEffects_FlameWall','screenHeight','weatherEffectsXtremeSpeed','ashfall','WEATHER_EFFECTS_MAX_VARIATIONS','Dark_AshDebris','_updateDimmer','thundersurge','_spinAngle','_xSwayRng','#faaacf','waterdrop','#ba7959','applyEasing','Ice_Sleet','weatherEffectsCrumblingCave','_targets','embers','medium_icons_9','worldTransform','rebornSpriteTone','lensflare','flamewall','#898989','#d28fad','drawLightning','iconHeight','createBattleFieldContainer','upper\x2040%','rgba(%1,\x20%2,\x20%3,\x200)','_green','getTemporaryContext','weatherType','rgba(128,255,128,0)','power','_upperWeatherContainer','weatherEffectsPollen','6YZCqsh','_baseScale','Wind_XtremeSpeed','rebornFlags','_cached_WeatherEffects_AcidRain','#a8c54a','WEATHER_ASH_COLORS','#ffccaa','width','rotate','weatherEffectsConfetti','rgba(0,0,0,0)','_cached_WeatherEffects_Pollen','drawSnowflake','angleArc','log','clearWeatherLayers','Medium_Icons_UpperLeft','_cached_WeatherEffects_UvBeam','Fire_Firestorm','bubbles','AdjustRect','toString','mist','Dark_ShadowBurst','#ebebeb','updateOpacityEasing','medium_icons_3','wait','sunbeams','WeatherEffects','Medium_Icons_Mid','#fbec65','adjustHexColor','screenX','_cached_WeatherEffects_PastelBrume','_lifespan','left\x2060%','_dimmerSprite','Window_Options_addGeneralOptions','Thunder_StaticCharge','right','updateWeather','stroke','WEATHER_SOAP_BUBBLE_COLORS','Water_Mist','WEATHER_AUTUMN_LEAVES_COLORS','weatherEffectsHouseDust','clearWeatherLayerData','_cached_WeatherEffects_Fumes','Slow_Icons_Left','discharge','WEATHER_MOON_BEAM_COLORS','arrayToHex','_cached_WeatherEffects_PrismBeams','player','#821d1c','clamp','round','upper\x2080%','applyData','weatherEffectsShadowBurst','WEATHER_RAINBOW_ORB_COLORS','angleSwayRange','rgba(','fast_icons_1','#505050','_cached_WeatherEffects_SoapBubbles','#111111','actor','medium_icons_1','sparkle','lower\x2030%','_cached_WeatherEffects_Tempest','Fire_Fireworks','Ice_GlisteningIce','_sprites','_cached_WeatherEffects_Sleet','_cached_WeatherEffects_RadioactiveBeam','createWeather','Earth_Sandstorm','weatherEffectsUltravioletBeams','test','powerTarget','plasmasurge','#ed1c24','#7d7d7d','gradientFillRect','Scene_Boot_loadSystemImages','General','grassygust','upper','parse','upper\x2070%','#e1e1e1','loadBitmapType','Slow_Icons_Mid','_cached_WeatherEffects_DustClouds','newLayer','#69822d','WEATHER_GRASSY_GUST_COLORS','createNewWeatherLayers','abs','_cached_WeatherEffects_MoonBeam','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','applyPluginCmdSettingsCustom','shadowColor','rain','_hue','ashdebris','_layerID','applyPluginCmdSettingsBasic','addChild','Dark_SmokeClouds','#bbbbbb','WEATHER_EFFECTS_ICON_GENERATED','weatherEffectsAurora','context','AddOption','sin','loadWeatherIcons','390892yPLbRp','addCommand','prismbeams','MAX_LAYERS','smokecloud','drawMultiPointPolygon','#0000ff','icons','_cached_WeatherEffects_AutumnLeaves','lineWidth','toneVariations','calculateScaleX','BasicReplayMemory','WEATHER_SHADOW_BURST_COLORS','adjustWeatherLayerPower','slow_icons_1','enemy','alwaysVisiblePlayer','%1Weight','setFrame','name','followers','spawnLocationY','UpperLower','slow_icons_9','drip','WEATHER_STAR_COLORS','join','greenleaves','drawSnowflakeLine','icefog','upper\x20border','left\x2040%','#aaffff','upper\x2030%','equals','_cached_WeatherEffects_Balloons','_flags','angle','weatherEffectsFireworks','fireworks','Spriteset_Battle_createBattleback','changeWeather','update','lower\x2010%','Earth_DustClouds','makeData','ConfigManager_makeData','_cached_WeatherEffects_WaterDrop','housedust','lightburst','rebornBitmap','purplehaze','opacityFadeInTime','spawnLocationX','clone','_cached_WeatherEffects_IceFog','STR','weatherEffectsDustClouds','Thunder_PlasmaBolt','#e6cab9','Ice_Snowflakes','Window_Options_isVolumeSymbol','ARRAYJSON','right\x2020%','radioactivebeam','heatclouds','weatherEffectsCherryBlossoms','#ffffff'];_0x5928=function(){return _0x2ef5fe;};return _0x5928();}(function(_0x213139,_0x1eaa2f){const _0x3dd481=_0x1789,_0x5b6f31=_0x213139();while(!![]){try{const _0x551be9=-parseInt(_0x3dd481(0x582))/0x1*(-parseInt(_0x3dd481(0x524))/0x2)+-parseInt(_0x3dd481(0x456))/0x3*(-parseInt(_0x3dd481(0x4cf))/0x4)+parseInt(_0x3dd481(0x2f8))/0x5+-parseInt(_0x3dd481(0x56b))/0x6+-parseInt(_0x3dd481(0x52e))/0x7+-parseInt(_0x3dd481(0x2c7))/0x8+parseInt(_0x3dd481(0x53b))/0x9;if(_0x551be9===_0x1eaa2f)break;else _0x5b6f31['push'](_0x5b6f31['shift']());}catch(_0x147af3){_0x5b6f31['push'](_0x5b6f31['shift']());}}}(_0x5928,0xc067c));function _0x1789(_0x355d71,_0x34afe9){const _0x592868=_0x5928();return _0x1789=function(_0x178982,_0x1ca66a){_0x178982=_0x178982-0x1ed;let _0x26f221=_0x592868[_0x178982];return _0x26f221;},_0x1789(_0x355d71,_0x34afe9);}var label=_0x3c3250(0x474),tier=tier||0x0,dependencies=[_0x3c3250(0x371)],pluginData=$plugins[_0x3c3250(0x3b1)](function(_0x1b2af9){const _0x48bb68=_0x3c3250;return _0x1b2af9[_0x48bb68(0x299)]&&_0x1b2af9[_0x48bb68(0x390)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x3c3250(0x23f)]=VisuMZ[label][_0x3c3250(0x23f)]||{},VisuMZ[_0x3c3250(0x5a3)]=function(_0x556684,_0x10f729){const _0x9f26e1=_0x3c3250;for(const _0x2f00a7 in _0x10f729){if(_0x2f00a7[_0x9f26e1(0x555)](/(.*):(.*)/i)){const _0x1f7fe0=String(RegExp['$1']),_0x25138b=String(RegExp['$2'])[_0x9f26e1(0x3c1)]()['trim']();let _0x49b690,_0x48ada2,_0x17ae9a;switch(_0x25138b){case _0x9f26e1(0x58a):_0x49b690=_0x10f729[_0x2f00a7]!==''?Number(_0x10f729[_0x2f00a7]):0x0;break;case _0x9f26e1(0x547):_0x48ada2=_0x10f729[_0x2f00a7]!==''?JSON[_0x9f26e1(0x4b2)](_0x10f729[_0x2f00a7]):[],_0x49b690=_0x48ada2[_0x9f26e1(0x24b)](_0x1463f2=>Number(_0x1463f2));break;case'EVAL':_0x49b690=_0x10f729[_0x2f00a7]!==''?eval(_0x10f729[_0x2f00a7]):null;break;case _0x9f26e1(0x559):_0x48ada2=_0x10f729[_0x2f00a7]!==''?JSON[_0x9f26e1(0x4b2)](_0x10f729[_0x2f00a7]):[],_0x49b690=_0x48ada2[_0x9f26e1(0x24b)](_0x337bcb=>eval(_0x337bcb));break;case'JSON':_0x49b690=_0x10f729[_0x2f00a7]!==''?JSON['parse'](_0x10f729[_0x2f00a7]):'';break;case _0x9f26e1(0x50e):_0x48ada2=_0x10f729[_0x2f00a7]!==''?JSON[_0x9f26e1(0x4b2)](_0x10f729[_0x2f00a7]):[],_0x49b690=_0x48ada2[_0x9f26e1(0x24b)](_0x5621bd=>JSON[_0x9f26e1(0x4b2)](_0x5621bd));break;case'FUNC':_0x49b690=_0x10f729[_0x2f00a7]!==''?new Function(JSON[_0x9f26e1(0x4b2)](_0x10f729[_0x2f00a7])):new Function('return\x200');break;case _0x9f26e1(0x3a6):_0x48ada2=_0x10f729[_0x2f00a7]!==''?JSON[_0x9f26e1(0x4b2)](_0x10f729[_0x2f00a7]):[],_0x49b690=_0x48ada2[_0x9f26e1(0x24b)](_0xb39d8f=>new Function(JSON[_0x9f26e1(0x4b2)](_0xb39d8f)));break;case _0x9f26e1(0x508):_0x49b690=_0x10f729[_0x2f00a7]!==''?String(_0x10f729[_0x2f00a7]):'';break;case'ARRAYSTR':_0x48ada2=_0x10f729[_0x2f00a7]!==''?JSON[_0x9f26e1(0x4b2)](_0x10f729[_0x2f00a7]):[],_0x49b690=_0x48ada2[_0x9f26e1(0x24b)](_0x5c68fb=>String(_0x5c68fb));break;case _0x9f26e1(0x34f):_0x17ae9a=_0x10f729[_0x2f00a7]!==''?JSON[_0x9f26e1(0x4b2)](_0x10f729[_0x2f00a7]):{},_0x49b690=VisuMZ['ConvertParams']({},_0x17ae9a);break;case'ARRAYSTRUCT':_0x48ada2=_0x10f729[_0x2f00a7]!==''?JSON[_0x9f26e1(0x4b2)](_0x10f729[_0x2f00a7]):[],_0x49b690=_0x48ada2['map'](_0x43844b=>VisuMZ['ConvertParams']({},JSON[_0x9f26e1(0x4b2)](_0x43844b)));break;default:continue;}_0x556684[_0x1f7fe0]=_0x49b690;}}return _0x556684;},(_0x1dd321=>{const _0xb733e1=_0x3c3250,_0x206750=_0x1dd321['name'];for(const _0x245747 of dependencies){if(!Imported[_0x245747]){alert(_0xb733e1(0x4be)[_0xb733e1(0x528)](_0x206750,_0x245747)),SceneManager['exit']();break;}}const _0x5babe9=_0x1dd321[_0xb733e1(0x390)];if(_0x5babe9[_0xb733e1(0x555)](/\[Version[ ](.*?)\]/i)){const _0x36ab0f=Number(RegExp['$1']);_0x36ab0f!==VisuMZ[label][_0xb733e1(0x40f)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x206750,_0x36ab0f)),SceneManager[_0xb733e1(0x516)]());}if(_0x5babe9[_0xb733e1(0x555)](/\[Tier[ ](\d+)\]/i)){const _0x2ad244=Number(RegExp['$1']);_0x2ad244<tier?(alert(_0xb733e1(0x26e)[_0xb733e1(0x528)](_0x206750,_0x2ad244,tier)),SceneManager[_0xb733e1(0x516)]()):tier=Math[_0xb733e1(0x55f)](_0x2ad244,tier);}VisuMZ[_0xb733e1(0x5a3)](VisuMZ[label]['Settings'],_0x1dd321[_0xb733e1(0x52c)]);})(pluginData),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'BasicAdjustWeatherPower',_0x3f370e=>{const _0x337704=_0x3c3250;VisuMZ['ConvertParams'](_0x3f370e,_0x3f370e);const _0x3cd002=_0x3f370e[_0x337704(0x236)][_0x337704(0x24b)](_0x933234=>(Number(_0x933234)||0x1)[_0x337704(0x48f)](0x1,0xa)),_0x190f09=_0x3f370e[_0x337704(0x4e6)],_0x40522=_0x3f370e[_0x337704(0x577)]||0x0,_0x349675=_0x3f370e[_0x337704(0x5b8)]||0x1;for(const _0x2027a3 of _0x3cd002){['upper',_0x337704(0x261)][_0x337704(0x2fe)](_0x190f09)&&$gameScreen['adjustWeatherLayerPower'](_0x2027a3,![],_0x40522,_0x349675),[_0x337704(0x376),_0x337704(0x261)]['includes'](_0x190f09)&&$gameScreen[_0x337704(0x4dd)](_0x2027a3,!![],_0x40522,_0x349675);}if(_0x3f370e[_0x337704(0x2d7)]){const _0x10b98e=$gameTemp['getLastPluginCommandInterpreter']();_0x10b98e&&_0x10b98e['wait'](_0x349675||0x1);}}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x415),_0x464464=>{const _0x4f2016=_0x3c3250;VisuMZ[_0x4f2016(0x5a3)](_0x464464,_0x464464);const _0x4418f5=_0x464464['Layer'][_0x4f2016(0x24b)](_0x27dbda=>(Number(_0x27dbda)||0x1)['clamp'](0x1,0xa)),_0x2a9e4a=_0x464464[_0x4f2016(0x4e6)],_0x5995fd=_0x464464[_0x4f2016(0x5b8)]||0x1;for(const _0x156460 of _0x4418f5){[_0x4f2016(0x4b1),_0x4f2016(0x261)]['includes'](_0x2a9e4a)&&$gameScreen[_0x4f2016(0x486)](_0x156460,![],_0x5995fd),[_0x4f2016(0x376),_0x4f2016(0x261)][_0x4f2016(0x2fe)](_0x2a9e4a)&&$gameScreen[_0x4f2016(0x486)](_0x156460,!![],_0x5995fd);}if(_0x464464[_0x4f2016(0x2d7)]){const _0x520e0d=$gameTemp[_0x4f2016(0x3a7)]();_0x520e0d&&_0x520e0d[_0x4f2016(0x472)](_0x5995fd||0x1);}}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x3f9),_0x28615b=>{const _0x48ca6f=_0x3c3250;VisuMZ[_0x48ca6f(0x5a3)](_0x28615b,_0x28615b);const _0x44e053=_0x28615b['Layer'][_0x48ca6f(0x24b)](_0x172f00=>(Number(_0x172f00)||0x1)['clamp'](0x1,0xa)),_0x1cbcb2=_0x28615b[_0x48ca6f(0x4e6)],_0x55f824=_0x28615b[_0x48ca6f(0x5b8)]||0x1;for(const _0x15c352 of _0x44e053){['upper',_0x48ca6f(0x261)][_0x48ca6f(0x2fe)](_0x1cbcb2)&&$gameScreen['memorizeWeatherLayerData'](_0x15c352,![]),[_0x48ca6f(0x376),_0x48ca6f(0x261)][_0x48ca6f(0x2fe)](_0x1cbcb2)&&$gameScreen['memorizeWeatherLayerData'](_0x15c352,!![]);}}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'BasicPreRenderGeneratedWeather',_0x210540=>{const _0x54f95d=_0x3c3250;VisuMZ[_0x54f95d(0x5a3)](_0x210540,_0x210540);const _0x3fe6f5=String(_0x210540[_0x54f95d(0x35f)]||'')[_0x54f95d(0x352)]()[_0x54f95d(0x536)]();if(_0x3fe6f5==='')return;let _0x321383=ImageManager[_0x54f95d(0x435)]??0x1;while(_0x321383--){ImageManager[_0x54f95d(0x51f)](_0x3fe6f5);}}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x4db),_0x26f61c=>{const _0x36d623=_0x3c3250;VisuMZ[_0x36d623(0x5a3)](_0x26f61c,_0x26f61c);const _0x2569f9=_0x26f61c[_0x36d623(0x236)][_0x36d623(0x24b)](_0x1cef1a=>(Number(_0x1cef1a)||0x1)[_0x36d623(0x48f)](0x1,0xa)),_0x2b95a9=_0x26f61c[_0x36d623(0x4e6)],_0x43ad11=_0x26f61c['Duration']||0x1;for(const _0x47c40a of _0x2569f9){['upper',_0x36d623(0x261)]['includes'](_0x2b95a9)&&$gameScreen[_0x36d623(0x291)](_0x47c40a,![],_0x43ad11),['lower',_0x36d623(0x261)][_0x36d623(0x2fe)](_0x2b95a9)&&$gameScreen[_0x36d623(0x291)](_0x47c40a,!![],_0x43ad11);}if(_0x26f61c['WaitForCompletion']){const _0x39b7b2=$gameTemp[_0x36d623(0x3a7)]();_0x39b7b2&&_0x39b7b2[_0x36d623(0x472)](_0x43ad11||0x1);}}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x544),_0x33b86c=>{const _0x4f47b1=_0x3c3250;VisuMZ[_0x4f47b1(0x5a3)](_0x33b86c,_0x33b86c),_0x33b86c['type']=_0x4f47b1(0x442),VisuMZ[_0x4f47b1(0x474)][_0x4f47b1(0x316)](_0x33b86c);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x3fd),_0x39bea7=>{const _0x2baa5d=_0x3c3250;VisuMZ[_0x2baa5d(0x5a3)](_0x39bea7,_0x39bea7),_0x39bea7[_0x2baa5d(0x1fb)]=_0x2baa5d(0x2b1),VisuMZ[_0x2baa5d(0x474)][_0x2baa5d(0x316)](_0x39bea7);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x469),_0x4a250f=>{const _0x5ea4a=_0x3c3250;VisuMZ[_0x5ea4a(0x5a3)](_0x4a250f,_0x4a250f),_0x4a250f[_0x5ea4a(0x1fb)]='firestorm',VisuMZ[_0x5ea4a(0x474)]['applyPluginCmdSettings'](_0x4a250f);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x4a0),_0x1281c9=>{const _0x5792be=_0x3c3250;VisuMZ[_0x5792be(0x5a3)](_0x1281c9,_0x1281c9),_0x1281c9[_0x5792be(0x1fb)]='fireworks',VisuMZ[_0x5792be(0x474)]['applyPluginCmdSettings'](_0x1281c9);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x241),_0x314d22=>{const _0x1d0471=_0x3c3250;VisuMZ[_0x1d0471(0x5a3)](_0x314d22,_0x314d22),_0x314d22[_0x1d0471(0x1fb)]=_0x1d0471(0x527),VisuMZ[_0x1d0471(0x474)][_0x1d0471(0x316)](_0x314d22);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Fire_FlameWall',_0x2c09d7=>{const _0x5e3607=_0x3c3250;VisuMZ['ConvertParams'](_0x2c09d7,_0x2c09d7),_0x2c09d7[_0x5e3607(0x1fb)]=_0x5e3607(0x447),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x2c09d7);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x5f9),_0x289c3a=>{const _0x100255=_0x3c3250;VisuMZ['ConvertParams'](_0x289c3a,_0x289c3a),_0x289c3a['type']=_0x100255(0x511),VisuMZ[_0x100255(0x474)][_0x100255(0x316)](_0x289c3a);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],'Fire_MeteorShower',_0x5593a4=>{const _0x26f838=_0x3c3250;VisuMZ['ConvertParams'](_0x5593a4,_0x5593a4),_0x5593a4[_0x26f838(0x1fb)]='meteorshower',VisuMZ[_0x26f838(0x474)]['applyPluginCmdSettings'](_0x5593a4);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x5b1),_0x133e09=>{const _0x2e16fb=_0x3c3250;VisuMZ[_0x2e16fb(0x5a3)](_0x133e09,_0x133e09),_0x133e09[_0x2e16fb(0x1fb)]=_0x2e16fb(0x3d6),VisuMZ[_0x2e16fb(0x474)][_0x2e16fb(0x316)](_0x133e09);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x2c8),_0xa5fb8=>{const _0x33f792=_0x3c3250;VisuMZ['ConvertParams'](_0xa5fb8,_0xa5fb8),_0xa5fb8[_0x33f792(0x1fb)]=_0x33f792(0x473),VisuMZ[_0x33f792(0x474)][_0x33f792(0x316)](_0xa5fb8);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x5f8),_0x405f24=>{const _0x3f98f8=_0x3c3250;VisuMZ[_0x3f98f8(0x5a3)](_0x405f24,_0x405f24),_0x405f24[_0x3f98f8(0x1fb)]=_0x3f98f8(0x5e7),VisuMZ[_0x3f98f8(0x474)]['applyPluginCmdSettings'](_0x405f24);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x3b8),_0x32f290=>{const _0x5beca2=_0x3c3250;VisuMZ[_0x5beca2(0x5a3)](_0x32f290,_0x32f290),_0x32f290[_0x5beca2(0x1fb)]=_0x5beca2(0x22b),VisuMZ[_0x5beca2(0x474)][_0x5beca2(0x316)](_0x32f290);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Ice_Blizzard',_0x2d9247=>{const _0xdc64b7=_0x3c3250;VisuMZ[_0xdc64b7(0x5a3)](_0x2d9247,_0x2d9247),_0x2d9247[_0xdc64b7(0x1fb)]=_0xdc64b7(0x30a),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x2d9247);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x35c),_0x2bfd4b=>{const _0x5ec3e8=_0x3c3250;VisuMZ[_0x5ec3e8(0x5a3)](_0x2bfd4b,_0x2bfd4b),_0x2bfd4b[_0x5ec3e8(0x1fb)]=_0x5ec3e8(0x212),VisuMZ[_0x5ec3e8(0x474)][_0x5ec3e8(0x316)](_0x2bfd4b);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x4a1),_0x492546=>{const _0x2e92d7=_0x3c3250;VisuMZ['ConvertParams'](_0x492546,_0x492546),_0x492546[_0x2e92d7(0x1fb)]='glistening',VisuMZ[_0x2e92d7(0x474)][_0x2e92d7(0x316)](_0x492546);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Ice_IceFog',_0x593dfe=>{const _0x54fdbf=_0x3c3250;VisuMZ[_0x54fdbf(0x5a3)](_0x593dfe,_0x593dfe),_0x593dfe[_0x54fdbf(0x1fb)]=_0x54fdbf(0x4ed),VisuMZ[_0x54fdbf(0x474)][_0x54fdbf(0x316)](_0x593dfe);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x43f),_0x1adddf=>{const _0x20ef39=_0x3c3250;VisuMZ[_0x20ef39(0x5a3)](_0x1adddf,_0x1adddf),_0x1adddf[_0x20ef39(0x1fb)]=_0x20ef39(0x321),VisuMZ[_0x20ef39(0x474)][_0x20ef39(0x316)](_0x1adddf);}),PluginManager['registerCommand'](pluginData['name'],'Ice_Snow',_0x5232a2=>{const _0x52a0e0=_0x3c3250;VisuMZ[_0x52a0e0(0x5a3)](_0x5232a2,_0x5232a2),_0x5232a2[_0x52a0e0(0x1fb)]='snow',VisuMZ[_0x52a0e0(0x474)][_0x52a0e0(0x316)](_0x5232a2);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x2ba),_0x122b30=>{const _0x133fb7=_0x3c3250;VisuMZ[_0x133fb7(0x5a3)](_0x122b30,_0x122b30),_0x122b30[_0x133fb7(0x1fb)]='snowclouds',VisuMZ[_0x133fb7(0x474)][_0x133fb7(0x316)](_0x122b30);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x50c),_0x13097d=>{const _0x3f1b97=_0x3c3250;VisuMZ['ConvertParams'](_0x13097d,_0x13097d),_0x13097d[_0x3f1b97(0x1fb)]=_0x3f1b97(0x2df),VisuMZ[_0x3f1b97(0x474)][_0x3f1b97(0x316)](_0x13097d);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x2c0),_0xbe6ba7=>{const _0x5f02a0=_0x3c3250;VisuMZ[_0x5f02a0(0x5a3)](_0xbe6ba7,_0xbe6ba7),_0xbe6ba7[_0x5f02a0(0x1fb)]=_0x5f02a0(0x489),VisuMZ['WeatherEffects'][_0x5f02a0(0x316)](_0xbe6ba7);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x50a),_0x400f6e=>{const _0x2a3e2a=_0x3c3250;VisuMZ[_0x2a3e2a(0x5a3)](_0x400f6e,_0x400f6e),_0x400f6e[_0x2a3e2a(0x1fb)]=_0x2a3e2a(0x355),VisuMZ[_0x2a3e2a(0x474)][_0x2a3e2a(0x316)](_0x400f6e);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x57a),_0x279b39=>{const _0x1a0a67=_0x3c3250;VisuMZ[_0x1a0a67(0x5a3)](_0x279b39,_0x279b39),_0x279b39[_0x1a0a67(0x1fb)]=_0x1a0a67(0x4aa),VisuMZ[_0x1a0a67(0x474)][_0x1a0a67(0x316)](_0x279b39);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x311),_0x4e3693=>{const _0x5118cf=_0x3c3250;VisuMZ['ConvertParams'](_0x4e3693,_0x4e3693),_0x4e3693['type']=_0x5118cf(0x503),VisuMZ['WeatherEffects'][_0x5118cf(0x316)](_0x4e3693);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x289),_0x515380=>{const _0x4b8b7d=_0x3c3250;VisuMZ[_0x4b8b7d(0x5a3)](_0x515380,_0x515380),_0x515380[_0x4b8b7d(0x1fb)]='spiderbolt',VisuMZ[_0x4b8b7d(0x474)][_0x4b8b7d(0x316)](_0x515380);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Thunder_Thunderbolt',_0x319a98=>{const _0x58ab1e=_0x3c3250;VisuMZ['ConvertParams'](_0x319a98,_0x319a98),_0x319a98['type']='thunderbolt',VisuMZ['WeatherEffects'][_0x58ab1e(0x316)](_0x319a98);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x47e),_0x540c03=>{const _0x367923=_0x3c3250;VisuMZ[_0x367923(0x5a3)](_0x540c03,_0x540c03),_0x540c03[_0x367923(0x1fb)]=_0x367923(0x37c),VisuMZ[_0x367923(0x474)][_0x367923(0x316)](_0x540c03);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x51d),_0x30e310=>{const _0xcf70ec=_0x3c3250;VisuMZ[_0xcf70ec(0x5a3)](_0x30e310,_0x30e310),_0x30e310[_0xcf70ec(0x1fb)]=_0xcf70ec(0x2b3),VisuMZ[_0xcf70ec(0x474)][_0xcf70ec(0x316)](_0x30e310);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x530),_0x4f9cde=>{const _0x4ee6a1=_0x3c3250;VisuMZ['ConvertParams'](_0x4f9cde,_0x4f9cde),_0x4f9cde['type']=_0x4ee6a1(0x438),VisuMZ[_0x4ee6a1(0x474)]['applyPluginCmdSettings'](_0x4f9cde);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x3bd),_0xe595c8=>{const _0x38db3e=_0x3c3250;VisuMZ[_0x38db3e(0x5a3)](_0xe595c8,_0xe595c8),_0xe595c8['type']=_0x38db3e(0x411),VisuMZ[_0x38db3e(0x474)]['applyPluginCmdSettings'](_0xe595c8);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Water_Bubbles',_0x32abd9=>{const _0x4a161e=_0x3c3250;VisuMZ[_0x4a161e(0x5a3)](_0x32abd9,_0x32abd9),_0x32abd9[_0x4a161e(0x1fb)]=_0x4a161e(0x46a),VisuMZ[_0x4a161e(0x474)][_0x4a161e(0x316)](_0x32abd9);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x33b),_0x293ff4=>{const _0x13b258=_0x3c3250;VisuMZ[_0x13b258(0x5a3)](_0x293ff4,_0x293ff4),_0x293ff4['type']=_0x13b258(0x5b6),VisuMZ[_0x13b258(0x474)][_0x13b258(0x316)](_0x293ff4);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],'Water_DrippingWater',_0x5bd6b3=>{const _0x52329a=_0x3c3250;VisuMZ[_0x52329a(0x5a3)](_0x5bd6b3,_0x5bd6b3),_0x5bd6b3['type']=_0x52329a(0x4e8),VisuMZ[_0x52329a(0x474)][_0x52329a(0x316)](_0x5bd6b3);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x483),_0x1913c7=>{const _0x542d76=_0x3c3250;VisuMZ[_0x542d76(0x5a3)](_0x1913c7,_0x1913c7),_0x1913c7[_0x542d76(0x1fb)]=_0x542d76(0x46d),VisuMZ[_0x542d76(0x474)][_0x542d76(0x316)](_0x1913c7);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Water_Rain',_0x287e10=>{const _0xf74201=_0x3c3250;VisuMZ[_0xf74201(0x5a3)](_0x287e10,_0x287e10),_0x287e10[_0xf74201(0x1fb)]='rain',VisuMZ['WeatherEffects'][_0xf74201(0x316)](_0x287e10);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],'Water_RainbowArch',_0x4495da=>{const _0x1a3f62=_0x3c3250;VisuMZ[_0x1a3f62(0x5a3)](_0x4495da,_0x4495da),_0x4495da['type']=_0x1a3f62(0x5d7),VisuMZ[_0x1a3f62(0x474)]['applyPluginCmdSettings'](_0x4495da);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x552),_0x499546=>{const _0x468b0a=_0x3c3250;VisuMZ['ConvertParams'](_0x499546,_0x499546),_0x499546[_0x468b0a(0x1fb)]=_0x468b0a(0x41f),VisuMZ[_0x468b0a(0x474)]['applyPluginCmdSettings'](_0x499546);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x2f1),_0x5b1d0=>{const _0x12474c=_0x3c3250;VisuMZ[_0x12474c(0x5a3)](_0x5b1d0,_0x5b1d0),_0x5b1d0[_0x12474c(0x1fb)]=_0x12474c(0x56e),VisuMZ[_0x12474c(0x474)]['applyPluginCmdSettings'](_0x5b1d0);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Water_SoapBubbles',_0x1298fb=>{const _0x4ca80d=_0x3c3250;VisuMZ[_0x4ca80d(0x5a3)](_0x1298fb,_0x1298fb),_0x1298fb['type']=_0x4ca80d(0x282),VisuMZ[_0x4ca80d(0x474)][_0x4ca80d(0x316)](_0x1298fb);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x2ed),_0xbde8f1=>{const _0xc75c33=_0x3c3250;VisuMZ[_0xc75c33(0x5a3)](_0xbde8f1,_0xbde8f1),_0xbde8f1[_0xc75c33(0x1fb)]=_0xc75c33(0x3b5),VisuMZ[_0xc75c33(0x474)]['applyPluginCmdSettings'](_0xbde8f1);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Earth_AcidRain',_0x559100=>{const _0x42998c=_0x3c3250;VisuMZ[_0x42998c(0x5a3)](_0x559100,_0x559100),_0x559100[_0x42998c(0x1fb)]=_0x42998c(0x249),VisuMZ[_0x42998c(0x474)]['applyPluginCmdSettings'](_0x559100);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],'Earth_CrumblingCave',_0x118855=>{const _0x27871c=_0x3c3250;VisuMZ[_0x27871c(0x5a3)](_0x118855,_0x118855),_0x118855[_0x27871c(0x1fb)]=_0x27871c(0x2ca),VisuMZ[_0x27871c(0x474)][_0x27871c(0x316)](_0x118855);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x4fc),_0x574acd=>{const _0x4aeb44=_0x3c3250;VisuMZ[_0x4aeb44(0x5a3)](_0x574acd,_0x574acd),_0x574acd[_0x4aeb44(0x1fb)]='dustclouds',VisuMZ[_0x4aeb44(0x474)][_0x4aeb44(0x316)](_0x574acd);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x578),_0x43b4ed=>{const _0x2ee8ea=_0x3c3250;VisuMZ['ConvertParams'](_0x43b4ed,_0x43b4ed),_0x43b4ed['type']=_0x2ee8ea(0x596),VisuMZ[_0x2ee8ea(0x474)][_0x2ee8ea(0x316)](_0x43b4ed);}),PluginManager['registerCommand'](pluginData['name'],_0x3c3250(0x549),_0x4d8fdc=>{const _0xeb438a=_0x3c3250;VisuMZ['ConvertParams'](_0x4d8fdc,_0x4d8fdc),_0x4d8fdc[_0xeb438a(0x1fb)]=_0xeb438a(0x500),VisuMZ[_0xeb438a(0x474)]['applyPluginCmdSettings'](_0x4d8fdc);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x2f6),_0x7a600b=>{const _0x4cf057=_0x3c3250;VisuMZ[_0x4cf057(0x5a3)](_0x7a600b,_0x7a600b),_0x7a600b[_0x4cf057(0x1fb)]='pollutionclouds',VisuMZ[_0x4cf057(0x474)][_0x4cf057(0x316)](_0x7a600b);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x5ea),_0x510b03=>{const _0x4637df=_0x3c3250;VisuMZ[_0x4637df(0x5a3)](_0x510b03,_0x510b03),_0x510b03[_0x4637df(0x1fb)]='radioactivebeam',VisuMZ[_0x4637df(0x474)]['applyPluginCmdSettings'](_0x510b03);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x42d),_0x53b897=>{const _0x4053fc=_0x3c3250;VisuMZ[_0x4053fc(0x5a3)](_0x53b897,_0x53b897),_0x53b897['type']=_0x4053fc(0x36a),VisuMZ[_0x4053fc(0x474)][_0x4053fc(0x316)](_0x53b897);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x4a6),_0x2f22f1=>{const _0x53f20a=_0x3c3250;VisuMZ[_0x53f20a(0x5a3)](_0x2f22f1,_0x2f22f1),_0x2f22f1['type']=_0x53f20a(0x257),VisuMZ[_0x53f20a(0x474)][_0x53f20a(0x316)](_0x2f22f1);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x22a),_0x453734=>{const _0x4dd285=_0x3c3250;VisuMZ[_0x4dd285(0x5a3)](_0x453734,_0x453734),_0x453734[_0x4dd285(0x1fb)]=_0x4dd285(0x42e),VisuMZ[_0x4dd285(0x474)]['applyPluginCmdSettings'](_0x453734);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Wind_AutumnLeaves',_0x57e4ab=>{const _0x115641=_0x3c3250;VisuMZ[_0x115641(0x5a3)](_0x57e4ab,_0x57e4ab),_0x57e4ab[_0x115641(0x1fb)]=_0x115641(0x427),VisuMZ[_0x115641(0x474)]['applyPluginCmdSettings'](_0x57e4ab);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x52a),_0x338a51=>{const _0x24ad7d=_0x3c3250;VisuMZ[_0x24ad7d(0x5a3)](_0x338a51,_0x338a51),_0x338a51[_0x24ad7d(0x1fb)]=_0x24ad7d(0x217),VisuMZ[_0x24ad7d(0x474)][_0x24ad7d(0x316)](_0x338a51);}),PluginManager['registerCommand'](pluginData['name'],'Wind_CherryBlossoms',_0x16ea72=>{const _0x38fb0e=_0x3c3250;VisuMZ[_0x38fb0e(0x5a3)](_0x16ea72,_0x16ea72),_0x16ea72[_0x38fb0e(0x1fb)]='cherryblossoms',VisuMZ[_0x38fb0e(0x474)][_0x38fb0e(0x316)](_0x16ea72);}),PluginManager['registerCommand'](pluginData['name'],'Wind_DandelionSeeds',_0xa2d95b=>{const _0x137f23=_0x3c3250;VisuMZ['ConvertParams'](_0xa2d95b,_0xa2d95b),_0xa2d95b[_0x137f23(0x1fb)]=_0x137f23(0x27a),VisuMZ[_0x137f23(0x474)][_0x137f23(0x316)](_0xa2d95b);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x230),_0x967120=>{const _0x3cc368=_0x3c3250;VisuMZ['ConvertParams'](_0x967120,_0x967120),_0x967120[_0x3cc368(0x1fb)]=_0x3cc368(0x4b0),VisuMZ['WeatherEffects'][_0x3cc368(0x316)](_0x967120);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x38f),_0x2f3fbb=>{const _0x507d98=_0x3c3250;VisuMZ[_0x507d98(0x5a3)](_0x2f3fbb,_0x2f3fbb),_0x2f3fbb[_0x507d98(0x1fb)]=_0x507d98(0x4eb),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x2f3fbb);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x2fc),_0x5edc0a=>{const _0x5a4a3a=_0x3c3250;VisuMZ['ConvertParams'](_0x5edc0a,_0x5edc0a),_0x5edc0a['type']=_0x5a4a3a(0x314),VisuMZ[_0x5a4a3a(0x474)][_0x5a4a3a(0x316)](_0x5edc0a);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x384),_0x286c5d=>{const _0xc29c46=_0x3c3250;VisuMZ[_0xc29c46(0x5a3)](_0x286c5d,_0x286c5d),_0x286c5d[_0xc29c46(0x1fb)]=_0xc29c46(0x27b),VisuMZ[_0xc29c46(0x474)][_0xc29c46(0x316)](_0x286c5d);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x58f),_0x2b675c=>{const _0xb0303e=_0x3c3250;VisuMZ[_0xb0303e(0x5a3)](_0x2b675c,_0x2b675c),_0x2b675c['type']=_0xb0303e(0x5b2),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x2b675c);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x458),_0x31d2a1=>{const _0xf96670=_0x3c3250;VisuMZ[_0xf96670(0x5a3)](_0x31d2a1,_0x31d2a1),_0x31d2a1['type']='xtreme',VisuMZ[_0xf96670(0x474)][_0xf96670(0x316)](_0x31d2a1);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x53d),_0x17dc94=>{const _0x35ef84=_0x3c3250;VisuMZ[_0x35ef84(0x5a3)](_0x17dc94,_0x17dc94),_0x17dc94[_0x35ef84(0x1fb)]=_0x35ef84(0x286),VisuMZ[_0x35ef84(0x474)]['applyPluginCmdSettings'](_0x17dc94);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x333),_0x583ddd=>{const _0x3a09eb=_0x3c3250;VisuMZ['ConvertParams'](_0x583ddd,_0x583ddd),_0x583ddd[_0x3a09eb(0x1fb)]=_0x3a09eb(0x446),VisuMZ['WeatherEffects'][_0x3a09eb(0x316)](_0x583ddd);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x2c1),_0x377b57=>{const _0x414674=_0x3c3250;VisuMZ[_0x414674(0x5a3)](_0x377b57,_0x377b57),_0x377b57[_0x414674(0x1fb)]=_0x414674(0x501),VisuMZ[_0x414674(0x474)][_0x414674(0x316)](_0x377b57);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x3e2),_0x2e5622=>{const _0x1b4de3=_0x3c3250;VisuMZ[_0x1b4de3(0x5a3)](_0x2e5622,_0x2e5622),_0x2e5622[_0x1b4de3(0x1fb)]=_0x1b4de3(0x5dd),VisuMZ[_0x1b4de3(0x474)][_0x1b4de3(0x316)](_0x2e5622);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x2bf),_0x3abfc8=>{const _0x48ff2d=_0x3c3250;VisuMZ[_0x48ff2d(0x5a3)](_0x3abfc8,_0x3abfc8),_0x3abfc8[_0x48ff2d(0x1fb)]=_0x48ff2d(0x574),VisuMZ['WeatherEffects'][_0x48ff2d(0x316)](_0x3abfc8);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],'Light_PrismBurst',_0x31af9b=>{const _0x16f29d=_0x3c3250;VisuMZ[_0x16f29d(0x5a3)](_0x31af9b,_0x31af9b),_0x31af9b[_0x16f29d(0x1fb)]=_0x16f29d(0x3a9),VisuMZ[_0x16f29d(0x474)][_0x16f29d(0x316)](_0x31af9b);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x26c),_0xafe4c3=>{const _0x4be5b8=_0x3c3250;VisuMZ[_0x4be5b8(0x5a3)](_0xafe4c3,_0xafe4c3),_0xafe4c3['type']=_0x4be5b8(0x4d1),VisuMZ[_0x4be5b8(0x474)]['applyPluginCmdSettings'](_0xafe4c3);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x20e),_0x318614=>{const _0x204f7e=_0x3c3250;VisuMZ[_0x204f7e(0x5a3)](_0x318614,_0x318614),_0x318614[_0x204f7e(0x1fb)]=_0x204f7e(0x3ca),VisuMZ[_0x204f7e(0x474)][_0x204f7e(0x316)](_0x318614);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],'Light_RainbowOrbs',_0x289be8=>{const _0x488f5a=_0x3c3250;VisuMZ[_0x488f5a(0x5a3)](_0x289be8,_0x289be8),_0x289be8[_0x488f5a(0x1fb)]=_0x488f5a(0x3fb),VisuMZ['WeatherEffects'][_0x488f5a(0x316)](_0x289be8);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x5cd),_0x422783=>{const _0x290ee6=_0x3c3250;VisuMZ[_0x290ee6(0x5a3)](_0x422783,_0x422783),_0x422783['type']=_0x290ee6(0x3e9),VisuMZ['WeatherEffects'][_0x290ee6(0x316)](_0x422783);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x436),_0x59da47=>{const _0x2e4608=_0x3c3250;VisuMZ['ConvertParams'](_0x59da47,_0x59da47),_0x59da47[_0x2e4608(0x1fb)]=_0x2e4608(0x4c3),VisuMZ[_0x2e4608(0x474)][_0x2e4608(0x316)](_0x59da47);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x21a),_0x2e640b=>{const _0x13168b=_0x3c3250;VisuMZ[_0x13168b(0x5a3)](_0x2e640b,_0x2e640b),_0x2e640b[_0x13168b(0x1fb)]='ashfall',VisuMZ[_0x13168b(0x474)][_0x13168b(0x316)](_0x2e640b);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x5de),_0x366002=>{const _0x523b7b=_0x3c3250;VisuMZ[_0x523b7b(0x5a3)](_0x366002,_0x366002),_0x366002['type']=_0x523b7b(0x5f2),VisuMZ[_0x523b7b(0x474)][_0x523b7b(0x316)](_0x366002);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Dark_DarkOrbs',_0x514b6d=>{const _0x631b47=_0x3c3250;VisuMZ[_0x631b47(0x5a3)](_0x514b6d,_0x514b6d),_0x514b6d[_0x631b47(0x1fb)]=_0x631b47(0x402),VisuMZ[_0x631b47(0x474)][_0x631b47(0x316)](_0x514b6d);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x54e),_0x299b48=>{const _0xd26862=_0x3c3250;VisuMZ['ConvertParams'](_0x299b48,_0x299b48),_0x299b48[_0xd26862(0x1fb)]=_0xd26862(0x53c),VisuMZ[_0xd26862(0x474)][_0xd26862(0x316)](_0x299b48);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x540),_0x20f9a4=>{const _0x95f75a=_0x3c3250;VisuMZ[_0x95f75a(0x5a3)](_0x20f9a4,_0x20f9a4),_0x20f9a4[_0x95f75a(0x1fb)]=_0x95f75a(0x560),VisuMZ[_0x95f75a(0x474)][_0x95f75a(0x316)](_0x20f9a4);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x46e),_0xd3c117=>{const _0x2a76e1=_0x3c3250;VisuMZ['ConvertParams'](_0xd3c117,_0xd3c117),_0xd3c117[_0x2a76e1(0x1fb)]=_0x2a76e1(0x365),VisuMZ[_0x2a76e1(0x474)]['applyPluginCmdSettings'](_0xd3c117);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x59e),_0x426dea=>{const _0xf467e2=_0x3c3250;VisuMZ[_0xf467e2(0x5a3)](_0x426dea,_0x426dea),_0x426dea[_0xf467e2(0x1fb)]='smokefog',VisuMZ['WeatherEffects'][_0xf467e2(0x316)](_0x426dea);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x4c7),_0x1ebd53=>{const _0x53a68a=_0x3c3250;VisuMZ['ConvertParams'](_0x1ebd53,_0x1ebd53),_0x1ebd53[_0x53a68a(0x1fb)]=_0x53a68a(0x4d3),VisuMZ['WeatherEffects'][_0x53a68a(0x316)](_0x1ebd53);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Dark_Sootfall',_0x3dc821=>{const _0x2f1210=_0x3c3250;VisuMZ['ConvertParams'](_0x3dc821,_0x3dc821),_0x3dc821['type']=_0x2f1210(0x237),VisuMZ[_0x2f1210(0x474)][_0x2f1210(0x316)](_0x3dc821);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x3ec),_0x20bbec=>{const _0x1ec5d7=_0x3c3250;VisuMZ[_0x1ec5d7(0x5a3)](_0x20bbec,_0x20bbec),_0x20bbec['type']=_0x1ec5d7(0x2a8),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x20bbec);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Slow_Icons_UpperRight',_0x3cfdf4=>{const _0x436685=_0x3c3250;VisuMZ[_0x436685(0x5a3)](_0x3cfdf4,_0x3cfdf4),_0x3cfdf4[_0x436685(0x1fb)]=_0x436685(0x4e7),VisuMZ[_0x436685(0x474)][_0x436685(0x316)](_0x3cfdf4);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x345),_0x1bcddd=>{const _0x157a1e=_0x3c3250;VisuMZ[_0x157a1e(0x5a3)](_0x1bcddd,_0x1bcddd),_0x1bcddd[_0x157a1e(0x1fb)]=_0x157a1e(0x3f5),VisuMZ[_0x157a1e(0x474)][_0x157a1e(0x316)](_0x1bcddd);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],'Slow_Icons_LowerRight',_0x52dbec=>{const _0x460ce7=_0x3c3250;VisuMZ[_0x460ce7(0x5a3)](_0x52dbec,_0x52dbec),_0x52dbec['type']=_0x460ce7(0x425),VisuMZ[_0x460ce7(0x474)][_0x460ce7(0x316)](_0x52dbec);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x297),_0x1254c3=>{const _0xa8cc02=_0x3c3250;VisuMZ[_0xa8cc02(0x5a3)](_0x1254c3,_0x1254c3),_0x1254c3[_0xa8cc02(0x1fb)]='slow_icons_2',VisuMZ[_0xa8cc02(0x474)][_0xa8cc02(0x316)](_0x1254c3);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x34d),_0x1190a6=>{const _0x103b75=_0x3c3250;VisuMZ[_0x103b75(0x5a3)](_0x1190a6,_0x1190a6),_0x1190a6['type']=_0x103b75(0x4de),VisuMZ['WeatherEffects'][_0x103b75(0x316)](_0x1190a6);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x488),_0x5e7a49=>{const _0x20a433=_0x3c3250;VisuMZ[_0x20a433(0x5a3)](_0x5e7a49,_0x5e7a49),_0x5e7a49[_0x20a433(0x1fb)]=_0x20a433(0x551),VisuMZ[_0x20a433(0x474)][_0x20a433(0x316)](_0x5e7a49);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x290),_0x31690d=>{const _0x3387c0=_0x3c3250;VisuMZ[_0x3387c0(0x5a3)](_0x31690d,_0x31690d),_0x31690d[_0x3387c0(0x1fb)]=_0x3387c0(0x5aa),VisuMZ[_0x3387c0(0x474)][_0x3387c0(0x316)](_0x31690d);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x4b6),_0x35f7ff=>{const _0x2868a2=_0x3c3250;VisuMZ[_0x2868a2(0x5a3)](_0x35f7ff,_0x35f7ff),_0x35f7ff[_0x2868a2(0x1fb)]=_0x2868a2(0x3c4),VisuMZ[_0x2868a2(0x474)][_0x2868a2(0x316)](_0x35f7ff);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x591),_0x22a7ad=>{const _0x241003=_0x3c3250;VisuMZ[_0x241003(0x5a3)](_0x22a7ad,_0x22a7ad),_0x22a7ad[_0x241003(0x1fb)]=_0x241003(0x22c),VisuMZ[_0x241003(0x474)][_0x241003(0x316)](_0x22a7ad);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x22f),_0x54a5b8=>{const _0x2dd2b8=_0x3c3250;VisuMZ[_0x2dd2b8(0x5a3)](_0x54a5b8,_0x54a5b8),_0x54a5b8[_0x2dd2b8(0x1fb)]='medium_icons_9',VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x54a5b8);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x33c),_0x486b4c=>{const _0x333538=_0x3c3250;VisuMZ[_0x333538(0x5a3)](_0x486b4c,_0x486b4c),_0x486b4c['type']=_0x333538(0x269),VisuMZ['WeatherEffects']['applyPluginCmdSettings'](_0x486b4c);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x2b4),_0x6d04e2=>{const _0x25de50=_0x3c3250;VisuMZ['ConvertParams'](_0x6d04e2,_0x6d04e2),_0x6d04e2[_0x25de50(0x1fb)]='medium_icons_3',VisuMZ[_0x25de50(0x474)][_0x25de50(0x316)](_0x6d04e2);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Medium_Icons_Down',_0x58ca3e=>{const _0x4e789b=_0x3c3250;VisuMZ[_0x4e789b(0x5a3)](_0x58ca3e,_0x58ca3e),_0x58ca3e[_0x4e789b(0x1fb)]='medium_icons_2',VisuMZ[_0x4e789b(0x474)][_0x4e789b(0x316)](_0x58ca3e);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],'Medium_Icons_LowerLeft',_0x8ab5a3=>{const _0x383238=_0x3c3250;VisuMZ[_0x383238(0x5a3)](_0x8ab5a3,_0x8ab5a3),_0x8ab5a3[_0x383238(0x1fb)]=_0x383238(0x49c),VisuMZ[_0x383238(0x474)][_0x383238(0x316)](_0x8ab5a3);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x525),_0x25f161=>{const _0xe3e252=_0x3c3250;VisuMZ['ConvertParams'](_0x25f161,_0x25f161),_0x25f161[_0xe3e252(0x1fb)]=_0xe3e252(0x59d),VisuMZ[_0xe3e252(0x474)][_0xe3e252(0x316)](_0x25f161);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x467),_0x434d10=>{const _0x47b120=_0x3c3250;VisuMZ[_0x47b120(0x5a3)](_0x434d10,_0x434d10),_0x434d10[_0x47b120(0x1fb)]=_0x47b120(0x5f1),VisuMZ[_0x47b120(0x474)][_0x47b120(0x316)](_0x434d10);}),PluginManager['registerCommand'](pluginData['name'],_0x3c3250(0x475),_0x54c6c5=>{const _0x31a92a=_0x3c3250;VisuMZ['ConvertParams'](_0x54c6c5,_0x54c6c5),_0x54c6c5['type']=_0x31a92a(0x3f6),VisuMZ[_0x31a92a(0x474)]['applyPluginCmdSettings'](_0x54c6c5);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x21e),_0x2ee865=>{const _0x2f0995=_0x3c3250;VisuMZ[_0x2f0995(0x5a3)](_0x2ee865,_0x2ee865),_0x2ee865[_0x2f0995(0x1fb)]=_0x2f0995(0x23d),VisuMZ[_0x2f0995(0x474)][_0x2f0995(0x316)](_0x2ee865);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x36f),_0x2a155b=>{const _0x48f71d=_0x3c3250;VisuMZ['ConvertParams'](_0x2a155b,_0x2a155b),_0x2a155b[_0x48f71d(0x1fb)]=_0x48f71d(0x2ea),VisuMZ[_0x48f71d(0x474)]['applyPluginCmdSettings'](_0x2a155b);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],'Fast_Icons_Right',_0x4d5d98=>{const _0x4d4921=_0x3c3250;VisuMZ[_0x4d4921(0x5a3)](_0x4d5d98,_0x4d5d98),_0x4d5d98[_0x4d4921(0x1fb)]=_0x4d4921(0x51a),VisuMZ[_0x4d4921(0x474)][_0x4d4921(0x316)](_0x4d5d98);}),PluginManager['registerCommand'](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x5cb),_0x1be5c1=>{const _0x308dac=_0x3c3250;VisuMZ[_0x308dac(0x5a3)](_0x1be5c1,_0x1be5c1),_0x1be5c1[_0x308dac(0x1fb)]=_0x308dac(0x3d9),VisuMZ[_0x308dac(0x474)][_0x308dac(0x316)](_0x1be5c1);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],'Fast_Icons_Down',_0x34c7a9=>{const _0x424a42=_0x3c3250;VisuMZ[_0x424a42(0x5a3)](_0x34c7a9,_0x34c7a9),_0x34c7a9['type']=_0x424a42(0x23d),VisuMZ[_0x424a42(0x474)]['applyPluginCmdSettings'](_0x34c7a9);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x200),_0x38df78=>{const _0x1dae58=_0x3c3250;VisuMZ['ConvertParams'](_0x38df78,_0x38df78),_0x38df78[_0x1dae58(0x1fb)]=_0x1dae58(0x497),VisuMZ[_0x1dae58(0x474)][_0x1dae58(0x316)](_0x38df78);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],'Fast_Icons_Left',_0x1a2c3c=>{const _0x27aa8e=_0x3c3250;VisuMZ[_0x27aa8e(0x5a3)](_0x1a2c3c,_0x1a2c3c),_0x1a2c3c[_0x27aa8e(0x1fb)]=_0x27aa8e(0x5d8),VisuMZ[_0x27aa8e(0x474)][_0x27aa8e(0x316)](_0x1a2c3c);}),PluginManager[_0x3c3250(0x306)](pluginData[_0x3c3250(0x4e3)],_0x3c3250(0x37d),_0x1e5ba5=>{const _0x537bdb=_0x3c3250;VisuMZ[_0x537bdb(0x5a3)](_0x1e5ba5,_0x1e5ba5),_0x1e5ba5[_0x537bdb(0x1fb)]=_0x537bdb(0x202),VisuMZ[_0x537bdb(0x474)]['applyPluginCmdSettings'](_0x1e5ba5);}),PluginManager[_0x3c3250(0x306)](pluginData['name'],_0x3c3250(0x54c),_0x5e10fe=>{const _0x597968=_0x3c3250;VisuMZ[_0x597968(0x5a3)](_0x5e10fe,_0x5e10fe),_0x5e10fe[_0x597968(0x1fb)]=_0x597968(0x272),VisuMZ[_0x597968(0x474)][_0x597968(0x316)](_0x5e10fe);}),VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x56d)]={'NoWeather':/<NO WEATHER>/gi},Weather['MAX_LAYERS']=0xa,Weather[_0x3c3250(0x5b9)]=VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x23f)]['General'][_0x3c3250(0x25b)]??![],VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x2af)]=Weather[_0x3c3250(0x206)][_0x3c3250(0x4fa)],Weather[_0x3c3250(0x206)][_0x3c3250(0x4fa)]=function(){const _0x3f54af=_0x3c3250;this[_0x3f54af(0x3a5)](),VisuMZ[_0x3f54af(0x474)]['Weather_update'][_0x3f54af(0x53e)](this);},Weather[_0x3c3250(0x206)][_0x3c3250(0x565)]=function(){const _0x3f17fc=_0x3c3250;this[_0x3f17fc(0x2c2)]=new Bitmap(0x1,0x1),this[_0x3f17fc(0x3be)]=new Bitmap(0x1,0x1),this['_snowBitmap']=new Bitmap(0x1,0x1);},Weather[_0x3c3250(0x206)][_0x3c3250(0x437)]=function(){const _0x332268=_0x3c3250;if(!this['_dimmerSprite'])return;this[_0x332268(0x1f3)](),this[_0x332268(0x3dc)]();},Weather['prototype'][_0x3c3250(0x307)]=function(){const _0x47d572=_0x3c3250,_0x5afaac=this[_0x47d572(0x25a)]();while(this[_0x47d572(0x4a2)][_0x47d572(0x3de)]<_0x5afaac)this[_0x47d572(0x566)]();while(this[_0x47d572(0x4a2)][_0x47d572(0x3de)]>_0x5afaac)this['_removeSprite']();for(const _0x4ac8c3 of this['_sprites']){_0x4ac8c3[_0x47d572(0x4fa)]();}},Weather['prototype'][_0x3c3250(0x566)]=function(){const _0x5d786a=_0x3c3250,_0xd2f0c8=new Sprite_WeatherParticle(this,this['_sprites'][_0x5d786a(0x3de)]);this[_0x5d786a(0x4a2)][_0x5d786a(0x590)](_0xd2f0c8),this[_0x5d786a(0x4c6)](_0xd2f0c8);},Weather[_0x3c3250(0x206)][_0x3c3250(0x3aa)]=function(){},Weather[_0x3c3250(0x206)][_0x3c3250(0x52b)]=function(_0x36b30b,_0x275ca2){const _0x2b91d8=_0x3c3250;this[_0x2b91d8(0x4c4)]=_0x36b30b,this[_0x2b91d8(0x580)]=_0x275ca2||![];},Weather[_0x3c3250(0x206)]['data']=function(){const _0x8276d4=_0x3c3250;return $gameScreen['getWeatherLayerData'](this[_0x8276d4(0x4c4)],this['_lowerLayer']);},Weather[_0x3c3250(0x206)][_0x3c3250(0x3a5)]=function(){const _0xeca03e=_0x3c3250,_0x5e4328=this[_0xeca03e(0x246)]();if(!_0x5e4328)return;this['type']=_0x5e4328[_0xeca03e(0x1fb)],this[_0xeca03e(0x453)]=_0x5e4328['power'],$gameMap&&$gameMap['isNoWeather']()&&(this[_0xeca03e(0x453)]=0x0);},Weather[_0x3c3250(0x206)]['updatePosition']=function(){const _0x389c33=_0x3c3250;if(SceneManager[_0x389c33(0x550)]())return;this[_0x389c33(0x3e7)]['x']=$gameMap[_0x389c33(0x35d)]()*$gameMap[_0x389c33(0x537)](),this[_0x389c33(0x3e7)]['y']=$gameMap[_0x389c33(0x5fa)]()*$gameMap[_0x389c33(0x36d)]();},Weather['prototype'][_0x3c3250(0x1f3)]=function(){const _0x3997c2=_0x3c3250;if(this[_0x3997c2(0x246)]()[_0x3997c2(0x1fb)]===_0x3997c2(0x3b3))return;if(this['_lastDimmerColor']===this[_0x3997c2(0x246)]()[_0x3997c2(0x5ca)]['color'])return;const _0x117a94=this[_0x3997c2(0x246)]()[_0x3997c2(0x55c)];let _0x5944d4=this['data']()[_0x3997c2(0x5ca)][_0x3997c2(0x424)];this['_lastDimmerColor']=_0x5944d4;if(_0x117a94>0x0){const _0x9e7e87=[this[_0x3997c2(0x47c)][_0x3997c2(0x571)],this[_0x3997c2(0x47c)][_0x3997c2(0x44f)],this[_0x3997c2(0x47c)][_0x3997c2(0x21d)]],_0x16d474=ColorManager['hexToArray'](_0x5944d4);for(let _0x481a18=0x0;_0x481a18<0x3;_0x481a18++){_0x9e7e87[_0x481a18]=Math[_0x3997c2(0x490)]((_0x9e7e87[_0x481a18]*(_0x117a94-0x1)+_0x16d474[_0x481a18])/_0x117a94);}this['_lastDimmerColor']=ColorManager['arrayToHex'](_0x9e7e87);}const _0x78c112=ColorManager['hexToArray'](this['_lastDimmerColor']);this[_0x3997c2(0x47c)][_0x3997c2(0x5d0)](_0x78c112[0x0]||0x0,_0x78c112[0x1]||0x0,_0x78c112[0x2]||0x0);},Weather[_0x3c3250(0x206)][_0x3c3250(0x3dc)]=function(){const _0x5c6e1c=_0x3c3250,_0x1c6d70=this[_0x5c6e1c(0x246)]()[_0x5c6e1c(0x55c)],_0x111687=this['data']()[_0x5c6e1c(0x5ca)];let _0x5a574c=_0x111687[_0x5c6e1c(0x1ff)]+_0x111687[_0x5c6e1c(0x545)]*this[_0x5c6e1c(0x246)]()[_0x5c6e1c(0x4a9)];if(this['power']<=0x0)_0x5a574c=0x0;let _0x31965b=_0x5a574c;_0x1c6d70>0x0&&(_0x31965b=(this[_0x5c6e1c(0x47c)][_0x5c6e1c(0x341)]*(_0x1c6d70-0x1)+_0x5a574c)/_0x1c6d70),$gameMap&&$gameMap[_0x5c6e1c(0x222)]()&&(_0x31965b=0x0),this['_dimmerSprite'][_0x5c6e1c(0x341)]=_0x31965b;},Weather['prototype'][_0x3c3250(0x25a)]=function(){const _0x10ca4b=_0x3c3250;if($gameMap&&$gameMap[_0x10ca4b(0x222)]())return 0x0;if(this[_0x10ca4b(0x453)]<0x1)return 0x0;const _0x4ba964=this[_0x10ca4b(0x246)](),_0x37b977=_0x4ba964[_0x10ca4b(0x252)]['totalMinimum']||0x0,_0x181a72=_0x4ba964[_0x10ca4b(0x252)][_0x10ca4b(0x561)]||0x0,_0x4bea7d=(ConfigManager[_0x10ca4b(0x2fd)]??0x64)/0x64,_0x2870e7=Math[_0x10ca4b(0x5eb)](this[_0x10ca4b(0x453)]*_0x181a72*_0x4bea7d)+_0x37b977;return Math[_0x10ca4b(0x5eb)](_0x2870e7);},ConfigManager[_0x3c3250(0x2fd)]=0x64,VisuMZ['WeatherEffects'][_0x3c3250(0x4fe)]=ConfigManager[_0x3c3250(0x4fd)],ConfigManager['makeData']=function(){const _0x45426e=_0x3c3250,_0x662f86=VisuMZ['WeatherEffects'][_0x45426e(0x4fe)][_0x45426e(0x53e)](this);return _0x662f86['weatherDensity']=this['weatherDensity'],_0x662f86;},VisuMZ[_0x3c3250(0x474)]['ConfigManager_applyData']=ConfigManager[_0x3c3250(0x492)],ConfigManager[_0x3c3250(0x492)]=function(_0x41e6d5){const _0x285c75=_0x3c3250;VisuMZ['WeatherEffects'][_0x285c75(0x426)]['call'](this,_0x41e6d5),_0x285c75(0x2fd)in _0x41e6d5?this[_0x285c75(0x2fd)]=_0x41e6d5[_0x285c75(0x2fd)]:this['weatherDensity']=0x64;},ImageManager[_0x3c3250(0x372)]=VisuMZ['WeatherEffects'][_0x3c3250(0x23f)]['General'][_0x3c3250(0x3f3)]??![],ImageManager[_0x3c3250(0x435)]=VisuMZ['WeatherEffects'][_0x3c3250(0x23f)][_0x3c3250(0x4af)][_0x3c3250(0x429)]||0x10,ImageManager[_0x3c3250(0x301)]=VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x23f)]['General'][_0x3c3250(0x3ba)],ImageManager[_0x3c3250(0x256)]=![],ImageManager[_0x3c3250(0x4c9)]=['🐄','🐕','🐖','🐏','🐑','🐐','🐇','🐎','🐒','🐓','🦆','🐈','🐁','🐀','🦢','🐢'],VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x4ae)]=Scene_Boot[_0x3c3250(0x206)][_0x3c3250(0x380)],Scene_Boot[_0x3c3250(0x206)][_0x3c3250(0x380)]=function(){const _0x5b2842=_0x3c3250;VisuMZ[_0x5b2842(0x474)][_0x5b2842(0x4ae)][_0x5b2842(0x53e)](this),ImageManager['prepareGeneratedWeatherImages']();},ImageManager[_0x3c3250(0x5ed)]=function(){const _0x4194e8=_0x3c3250;if(Utils[_0x4194e8(0x35e)]())return![];return ImageManager[_0x4194e8(0x372)];},ImageManager[_0x3c3250(0x597)]=function(){const _0x2ff06a=_0x3c3250;if(!ImageManager[_0x2ff06a(0x5ed)]())return;ImageManager[_0x2ff06a(0x4ce)]();const _0x3a0417=['none'];for(const _0x23c1d4 of _0x3a0417){this[_0x2ff06a(0x51f)](_0x23c1d4);}let _0xf70d9=0x0;const _0x356a33=[_0x2ff06a(0x442),_0x2ff06a(0x2b1),_0x2ff06a(0x219),_0x2ff06a(0x447),'heatclouds',_0x2ff06a(0x473),_0x2ff06a(0x527),_0x2ff06a(0x4f7),'shootingstars',_0x2ff06a(0x30a),_0x2ff06a(0x20f),_0x2ff06a(0x2df),'snowclouds',_0x2ff06a(0x4ed),_0x2ff06a(0x212),_0x2ff06a(0x22b),_0x2ff06a(0x5e7),_0x2ff06a(0x321),_0x2ff06a(0x235),_0x2ff06a(0x503),_0x2ff06a(0x2b3),_0x2ff06a(0x411),_0x2ff06a(0x20a),_0x2ff06a(0x355),_0x2ff06a(0x4aa),_0x2ff06a(0x46a),_0x2ff06a(0x4c1),'storm',_0x2ff06a(0x41f),'mist',_0x2ff06a(0x4e8),_0x2ff06a(0x282),_0x2ff06a(0x5d7),_0x2ff06a(0x257),'pollutionclouds','duststorm',_0x2ff06a(0x3f8),_0x2ff06a(0x36a),_0x2ff06a(0x2ca),_0x2ff06a(0x42e),'acidrain',_0x2ff06a(0x510),_0x2ff06a(0x500),_0x2ff06a(0x427),'cherryblossoms',_0x2ff06a(0x4eb),'dandelionseeds','whiteclouds',_0x2ff06a(0x314),_0x2ff06a(0x4b0),_0x2ff06a(0x39a),_0x2ff06a(0x217),_0x2ff06a(0x3e9),_0x2ff06a(0x574),'rainbowclouds','rainboworbs',_0x2ff06a(0x5dd),_0x2ff06a(0x286),'prismbeams','lensflare','ashdebris',_0x2ff06a(0x434),_0x2ff06a(0x237),_0x2ff06a(0x59c),_0x2ff06a(0x402),_0x2ff06a(0x5f2),_0x2ff06a(0x560),_0x2ff06a(0x4d3),_0x2ff06a(0x365),_0x2ff06a(0x53c),_0x2ff06a(0x49d),_0x2ff06a(0x2dd),_0x2ff06a(0x4d6)];_0xf70d9=ImageManager[_0x2ff06a(0x435)];while(_0xf70d9--){for(const _0x5f087f of _0x356a33){this[_0x2ff06a(0x51f)](_0x5f087f);}}const _0x303b5a=[_0x2ff06a(0x235),_0x2ff06a(0x235),_0x2ff06a(0x22b),_0x2ff06a(0x22b),_0x2ff06a(0x22b),_0x2ff06a(0x22b),_0x2ff06a(0x3d6),_0x2ff06a(0x3d6)];_0xf70d9=ImageManager[_0x2ff06a(0x435)];while(_0xf70d9--){for(const _0x4057cf of _0x303b5a){this[_0x2ff06a(0x51f)](_0x4057cf);}}},ImageManager['loadWeatherIcons']=function(){const _0x3e138a=_0x3c3250;if(this[_0x3e138a(0x37b)])return this[_0x3e138a(0x37b)];return this[_0x3e138a(0x37b)]=Bitmap[_0x3e138a(0x5b0)](_0x3e138a(0x5c6)),this[_0x3e138a(0x37b)]['smooth']=ImageManager[_0x3e138a(0x301)],this['_weatherIcons'];},ImageManager[_0x3c3250(0x51f)]=function(_0x46950a){const _0x780e5a=_0x3c3250;_0x46950a=_0x46950a[_0x780e5a(0x352)]()[_0x780e5a(0x536)]();switch(_0x46950a){case'none':return this[_0x780e5a(0x21c)]();case _0x780e5a(0x4c1):return this[_0x780e5a(0x27d)]();case _0x780e5a(0x3b5):return this['weatherEffectsStorm']();case _0x780e5a(0x20f):return this[_0x780e5a(0x38e)]();case _0x780e5a(0x442):return this[_0x780e5a(0x3c6)]();case _0x780e5a(0x219):return this[_0x780e5a(0x41a)]();case _0x780e5a(0x2b1):return this['weatherEffectsFireflies']();case _0x780e5a(0x447):return this[_0x780e5a(0x598)]();case _0x780e5a(0x511):return this[_0x780e5a(0x250)]();case _0x780e5a(0x473):return this[_0x780e5a(0x34c)]();case _0x780e5a(0x527):return this[_0x780e5a(0x379)]();case _0x780e5a(0x4f7):return this['weatherEffectsFireworks']();case _0x780e5a(0x31b):case'shootingstars':return this[_0x780e5a(0x1f2)]();case _0x780e5a(0x30a):return this[_0x780e5a(0x3ac)]();case _0x780e5a(0x2df):return this[_0x780e5a(0x3d8)]();case _0x780e5a(0x210):return this['weatherEffectsSnowClouds']();case _0x780e5a(0x4ed):return this[_0x780e5a(0x5ee)]();case _0x780e5a(0x212):return this[_0x780e5a(0x5e3)]();case _0x780e5a(0x22b):return this[_0x780e5a(0x4ca)]();case'arcticbeam':return this['weatherEffectsArcticBeams']();case'sleet':return this['weatherEffectsSleet']();case _0x780e5a(0x2b0):return this['weatherEffectsSparkle']();case _0x780e5a(0x235):case _0x780e5a(0x438):case'plasmabolt':case _0x780e5a(0x4aa):case _0x780e5a(0x489):return this[_0x780e5a(0x254)]();case _0x780e5a(0x503):return this['weatherEffectsPurpleHaze']();case _0x780e5a(0x2b3):return this[_0x780e5a(0x283)]();case _0x780e5a(0x411):return this[_0x780e5a(0x4a7)]();case'spiderbolt':case _0x780e5a(0x37c):return this['weatherEffectsSpiderbolt']();case _0x780e5a(0x46a):return this[_0x780e5a(0x26d)]();case _0x780e5a(0x41f):return this[_0x780e5a(0x55e)]();case'mist':case _0x780e5a(0x56e):return this[_0x780e5a(0x5bc)]();case'drip':return this['weatherEffectsWaterDrop']();case _0x780e5a(0x282):return this[_0x780e5a(0x239)]();case _0x780e5a(0x5b6):return this[_0x780e5a(0x209)]();case'rainbowarch':return this[_0x780e5a(0x296)]();case _0x780e5a(0x257):return this[_0x780e5a(0x1fc)]();case _0x780e5a(0x562):return this[_0x780e5a(0x3e1)]();case _0x780e5a(0x596):return this['weatherEffectsDustStorm']();case _0x780e5a(0x3f8):return this[_0x780e5a(0x509)]();case _0x780e5a(0x36a):return this[_0x780e5a(0x533)]();case'crumblingcave':return this[_0x780e5a(0x440)]();case _0x780e5a(0x42e):return this[_0x780e5a(0x2f2)]();case _0x780e5a(0x249):return this['weatherEffectsAcidRain']();case'radioactivebeam':return this[_0x780e5a(0x280)]();case'housedust':return this[_0x780e5a(0x485)]();case _0x780e5a(0x427):return this[_0x780e5a(0x23c)]();case _0x780e5a(0x5bb):return this[_0x780e5a(0x512)]();case'greenleaves':return this[_0x780e5a(0x350)]();case _0x780e5a(0x27a):return this[_0x780e5a(0x2f9)]();case _0x780e5a(0x5b2):return this[_0x780e5a(0x2c6)]();case'pollen':return this['weatherEffectsPollen']();case _0x780e5a(0x27b):return this['weatherEffectsTempest']();case _0x780e5a(0x4b0):return this['weatherEffectsGrassyGust']();case _0x780e5a(0x39a):return this[_0x780e5a(0x433)]();case _0x780e5a(0x217):return this[_0x780e5a(0x2b8)]();case _0x780e5a(0x3e9):return this[_0x780e5a(0x2d0)]();case _0x780e5a(0x574):return this[_0x780e5a(0x557)]();case _0x780e5a(0x3ca):return this[_0x780e5a(0x2bd)]();case _0x780e5a(0x3fb):return this[_0x780e5a(0x337)]();case _0x780e5a(0x5dd):return this['weatherEffectsLightOrbs']();case _0x780e5a(0x286):return this['weatherEffectsConfetti']();case _0x780e5a(0x501):return this[_0x780e5a(0x34c)]();case _0x780e5a(0x4d1):case _0x780e5a(0x3a9):return this['weatherEffectsPrismBeams']();case'lensflare':return this[_0x780e5a(0x2ab)]();case'ashdebris':return this[_0x780e5a(0x2eb)]();case _0x780e5a(0x434):return this[_0x780e5a(0x5a7)]();case _0x780e5a(0x237):return this[_0x780e5a(0x2b6)]();case'smokefog':return this[_0x780e5a(0x403)]();case _0x780e5a(0x402):return this['weatherEffectsDarkOrbs']();case _0x780e5a(0x5f2):return this[_0x780e5a(0x275)]();case _0x780e5a(0x560):return this[_0x780e5a(0x519)]();case'smokecloud':return this[_0x780e5a(0x351)]();case'shadowburst':return this[_0x780e5a(0x493)]();case _0x780e5a(0x53c):return this[_0x780e5a(0x24a)]();case _0x780e5a(0x49d):return this[_0x780e5a(0x553)]();case _0x780e5a(0x2dd):return this[_0x780e5a(0x534)]();case _0x780e5a(0x4d6):case'slow_icons_1':case _0x780e5a(0x2a8):case _0x780e5a(0x425):case _0x780e5a(0x551):case _0x780e5a(0x3c4):case _0x780e5a(0x3f5):case _0x780e5a(0x5aa):case _0x780e5a(0x29d):case _0x780e5a(0x4e7):case'slow_icons_0':case _0x780e5a(0x49c):case _0x780e5a(0x22c):case _0x780e5a(0x471):case'medium_icons_4':case _0x780e5a(0x3f6):case _0x780e5a(0x269):case _0x780e5a(0x5f1):case _0x780e5a(0x5c4):case _0x780e5a(0x443):case _0x780e5a(0x27e):case _0x780e5a(0x497):case _0x780e5a(0x23d):case _0x780e5a(0x3d9):case _0x780e5a(0x5d8):case _0x780e5a(0x272):case _0x780e5a(0x51a):case'fast_icons_7':case'fast_icons_8':case'fast_icons_9':case _0x780e5a(0x3ad):return this['weatherEffectsIcons']();default:return this[_0x780e5a(0x38e)]();}},ImageManager[_0x3c3250(0x231)]=function(){const _0x132756=_0x3c3250;return!this[_0x132756(0x255)]&&(this[_0x132756(0x255)]=document[_0x132756(0x358)](_0x132756(0x5e0))),this[_0x132756(0x255)];},ImageManager[_0x3c3250(0x450)]=function(_0x3336b5,_0x11558a){const _0xdb36f6=_0x3c3250,_0x3f65a2=this[_0xdb36f6(0x231)]();return _0x3f65a2[_0xdb36f6(0x45e)]=_0x3336b5,_0x3f65a2[_0xdb36f6(0x243)]=_0x11558a,_0x3f65a2[_0xdb36f6(0x1fe)]('2d');},ImageManager[_0x3c3250(0x21c)]=function(){const _0x4a6388=_0x3c3250;if(this[_0x4a6388(0x20c)])return this[_0x4a6388(0x20c)];const _0x3b88f0=new Bitmap(0x1,0x1);_0x3b88f0['_customModified']=![];if(ImageManager[_0x4a6388(0x256)])console[_0x4a6388(0x465)](_0x4a6388(0x3b3));return this[_0x4a6388(0x20c)]=_0x3b88f0,this[_0x4a6388(0x20c)];},ImageManager[_0x3c3250(0x27d)]=function(){const _0x5e5199=_0x3c3250;if(this[_0x5e5199(0x5b5)]&&this[_0x5e5199(0x5b5)]['length']>=ImageManager[_0x5e5199(0x435)]){const _0x427653=this[_0x5e5199(0x5b5)];return _0x427653[Math[_0x5e5199(0x3a0)](Math[_0x5e5199(0x2cb)]()*_0x427653[_0x5e5199(0x3de)])];}const _0x40b8e7=new Bitmap(0x1f4,0x1f4),_0x3251d7=_0x5e5199(0x564),_0x1730a4=_0x5e5199(0x357),_0x22fe54=_0x40b8e7[_0x5e5199(0x45e)],_0xb7542a=_0x40b8e7[_0x5e5199(0x243)],_0x1d0ff3=0x3c,_0x4d028e=_0x1d0ff3/0x2,_0x122b1d=0x2;let _0x201327=0x10;while(_0x201327--){const _0x5b161b=Math[_0x5e5199(0x23a)](_0x22fe54-_0x1d0ff3)+_0x1d0ff3,_0x3aafa2=Math[_0x5e5199(0x23a)](_0xb7542a-_0x122b1d)+_0x122b1d;_0x40b8e7[_0x5e5199(0x3ed)]=Math['randomInt'](0x40)+0xc0,_0x40b8e7['gradientFillRect'](_0x5b161b,_0x3aafa2,_0x4d028e,0x2,_0x3251d7,_0x1730a4),_0x40b8e7[_0x5e5199(0x3bc)](_0x5b161b+_0x4d028e,_0x3aafa2,_0x4d028e,0x2,_0x1730a4);}_0x40b8e7[_0x5e5199(0x3a3)]=![];if(ImageManager[_0x5e5199(0x256)])console[_0x5e5199(0x465)](_0x5e5199(0x4c1));return this['_cached_WeatherEffects_Rain']=this['_cached_WeatherEffects_Rain']||[],this['_cached_WeatherEffects_Rain']['push'](_0x40b8e7),_0x40b8e7;},ImageManager[_0x3c3250(0x41d)]=function(){const _0x54409e=_0x3c3250;if(this[_0x54409e(0x224)]&&this[_0x54409e(0x224)][_0x54409e(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x1f05aa=this[_0x54409e(0x224)];return _0x1f05aa[Math[_0x54409e(0x3a0)](Math['random']()*_0x1f05aa[_0x54409e(0x3de)])];}const _0x56b20a=new Bitmap(0x1f4,0x1f4),_0x5e3041=_0x54409e(0x564),_0x42ba61=_0x54409e(0x357),_0x541634=_0x56b20a['width'],_0x4ef09d=_0x56b20a[_0x54409e(0x243)],_0x40d2b5=0x64,_0x5e10f0=_0x40d2b5/0x2,_0x32a223=0x2;let _0x72ed6=0x20;while(_0x72ed6--){const _0x5c52c9=Math[_0x54409e(0x23a)](_0x541634-_0x40d2b5)+_0x40d2b5,_0x45a731=Math['randomInt'](_0x4ef09d-_0x32a223)+_0x32a223;_0x56b20a['paintOpacity']=Math[_0x54409e(0x23a)](0x40)+0xc0,_0x56b20a[_0x54409e(0x4ad)](_0x5c52c9,_0x45a731,Math[_0x54409e(0x5eb)](_0x5e10f0),_0x32a223,_0x5e3041,_0x42ba61),_0x56b20a['fillRect'](_0x5c52c9+Math[_0x54409e(0x5eb)](_0x5e10f0),_0x45a731,Math['floor'](_0x5e10f0),_0x32a223,_0x42ba61);}_0x56b20a[_0x54409e(0x3a3)]=![];if(ImageManager[_0x54409e(0x256)])console[_0x54409e(0x465)](_0x54409e(0x3b5));return this[_0x54409e(0x224)]=this[_0x54409e(0x224)]||[],this[_0x54409e(0x224)]['push'](_0x56b20a),_0x56b20a;},ImageManager[_0x3c3250(0x38e)]=function(){const _0x5c628a=_0x3c3250;if(this['_cached_WeatherEffects_Snow']&&this[_0x5c628a(0x253)][_0x5c628a(0x3de)]>=ImageManager[_0x5c628a(0x435)]){const _0x2f2daa=this[_0x5c628a(0x253)];return _0x2f2daa[Math[_0x5c628a(0x3a0)](Math[_0x5c628a(0x2cb)]()*_0x2f2daa[_0x5c628a(0x3de)])];}const _0x5a0dbd=new Bitmap(0x1f4,0x1f4),_0x187e10=_0x5a0dbd[_0x5c628a(0x45e)],_0x363ec9=_0x5a0dbd[_0x5c628a(0x243)],_0x2ec9ac=0x5;let _0x1c563d=0x10;while(_0x1c563d--){const _0x407c88=Math[_0x5c628a(0x23a)](_0x187e10-_0x2ec9ac*0x2)+_0x2ec9ac,_0x5a6eba=Math[_0x5c628a(0x23a)](_0x363ec9-_0x2ec9ac*0x2)+_0x2ec9ac,_0x4183a3=Math[_0x5c628a(0x23a)](_0x2ec9ac)+0x1;_0x5a0dbd[_0x5c628a(0x3ed)]=Math[_0x5c628a(0x23a)](0x40)+0xc0,_0x5a0dbd['drawCircle'](_0x407c88,_0x5a6eba,_0x4183a3,_0x5c628a(0x2e3));}_0x5a0dbd['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x5c628a(0x20f));return this[_0x5c628a(0x253)]=this[_0x5c628a(0x253)]||[],this[_0x5c628a(0x253)][_0x5c628a(0x590)](_0x5a0dbd),_0x5a0dbd;},ImageManager[_0x3c3250(0x3ac)]=function(){const _0x2cb6de=_0x3c3250;if(this[_0x2cb6de(0x1f8)]&&this[_0x2cb6de(0x1f8)][_0x2cb6de(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x4cb442=this['_cached_WeatherEffects_Blizzard'];return _0x4cb442[Math[_0x2cb6de(0x3a0)](Math['random']()*_0x4cb442['length'])];}const _0x122062=new Bitmap(0x1f4,0x1f4),_0x2cc0fa=_0x122062[_0x2cb6de(0x45e)],_0x3e5496=_0x122062[_0x2cb6de(0x243)],_0x177334=0x8;let _0x5c1342=0x20;while(_0x5c1342--){const _0x2205ec=Math[_0x2cb6de(0x23a)](_0x2cc0fa-_0x177334*0x2)+_0x177334,_0x36e812=Math['randomInt'](_0x3e5496-_0x177334*0x2)+_0x177334,_0x29d42b=Math['randomInt'](_0x177334)+0x1;_0x122062[_0x2cb6de(0x3ed)]=Math[_0x2cb6de(0x23a)](0x40)+0xc0,_0x122062[_0x2cb6de(0x41b)](_0x2205ec,_0x36e812,_0x29d42b,'white');}_0x122062['_customModified']=![];if(ImageManager[_0x2cb6de(0x256)])console[_0x2cb6de(0x465)](_0x2cb6de(0x30a));return this[_0x2cb6de(0x1f8)]=this[_0x2cb6de(0x1f8)]||[],this[_0x2cb6de(0x1f8)]['push'](_0x122062),_0x122062;},ImageManager[_0x3c3250(0x26d)]=function(){const _0x592dbf=_0x3c3250;if(this[_0x592dbf(0x5c1)]&&this[_0x592dbf(0x5c1)][_0x592dbf(0x3de)]>=ImageManager[_0x592dbf(0x435)]){const _0x52584b=this[_0x592dbf(0x5c1)];return _0x52584b[Math['floor'](Math[_0x592dbf(0x2cb)]()*_0x52584b['length'])];}const _0x279ed3=new Bitmap(0x1f4,0x1f4),_0x828b53=_0x279ed3[_0x592dbf(0x45e)],_0x3545b7=_0x279ed3[_0x592dbf(0x243)],_0x2ed56e=0xc;let _0x5868a7=0x10;while(_0x5868a7--){const _0x28fed5=Math[_0x592dbf(0x23a)](_0x828b53-_0x2ed56e*0x2)+_0x2ed56e,_0x5d9882=Math[_0x592dbf(0x23a)](_0x3545b7-_0x2ed56e*0x2)+_0x2ed56e,_0x199374=Math['randomInt'](_0x2ed56e/0x2)+_0x2ed56e/0x2;_0x279ed3[_0x592dbf(0x3ed)]=Math[_0x592dbf(0x23a)](0x40)+0xc0,_0x279ed3[_0x592dbf(0x41b)](_0x28fed5,_0x5d9882,_0x199374,_0x592dbf(0x292)),_0x279ed3[_0x592dbf(0x31f)](_0x28fed5,_0x5d9882,_0x199374-0x2),_0x279ed3[_0x592dbf(0x41b)](_0x28fed5+_0x199374/0x3,_0x5d9882-_0x199374/0x3,_0x199374/0x3,_0x592dbf(0x2e3));}_0x279ed3[_0x592dbf(0x3a3)]=![];if(ImageManager[_0x592dbf(0x256)])console[_0x592dbf(0x465)](_0x592dbf(0x46a));return this[_0x592dbf(0x5c1)]=this['_cached_WeatherEffects_Bubbles']||[],this['_cached_WeatherEffects_Bubbles'][_0x592dbf(0x590)](_0x279ed3),_0x279ed3;},ImageManager[_0x3c3250(0x2d0)]=function(){const _0x42e516=_0x3c3250;if(this[_0x42e516(0x3df)]&&ColorManager[_0x42e516(0x4e9)][_0x42e516(0x3de)]<=0x0){const _0x3c2a35=this[_0x42e516(0x3df)];return _0x3c2a35[Math[_0x42e516(0x3a0)](Math['random']()*_0x3c2a35[_0x42e516(0x3de)])];}const _0x40f195=new Bitmap(0x18,0x18),_0x4e618d=ColorManager[_0x42e516(0x4e9)]['pop']();_0x40f195[_0x42e516(0x3fc)](0xc,0xc,_0x4e618d,_0x4e618d,0x5,0xc,0x6),_0x40f195['_customModified']=![];if(ImageManager[_0x42e516(0x256)])console[_0x42e516(0x465)]('stars');return this['_cached_WeatherEffects_Stars']=this[_0x42e516(0x3df)]||[],this['_cached_WeatherEffects_Stars']['push'](_0x40f195),_0x40f195;},ImageManager[_0x3c3250(0x3d8)]=function(){const _0x5ab227=_0x3c3250;if(this['_cached_WeatherEffects_Snowflakes']&&this[_0x5ab227(0x54b)][_0x5ab227(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x5f48e6=this[_0x5ab227(0x54b)];return _0x5f48e6[Math['floor'](Math[_0x5ab227(0x2cb)]()*_0x5f48e6[_0x5ab227(0x3de)])];}const _0x34e4ba=new Bitmap(0x64,0x64);_0x34e4ba['drawSnowflake'](),_0x34e4ba['_customModified']=![];if(ImageManager[_0x5ab227(0x256)])console['log'](_0x5ab227(0x2df));return this[_0x5ab227(0x54b)]=this[_0x5ab227(0x54b)]||[],this[_0x5ab227(0x54b)][_0x5ab227(0x590)](_0x34e4ba),_0x34e4ba;},ImageManager['weatherEffectsSandstorm']=function(){const _0x21e378=_0x3c3250;if(this[_0x21e378(0x3d2)]&&this[_0x21e378(0x3d2)][_0x21e378(0x3de)]>=ImageManager[_0x21e378(0x435)]){const _0x199676=this[_0x21e378(0x3d2)];return _0x199676[Math[_0x21e378(0x3a0)](Math[_0x21e378(0x2cb)]()*_0x199676[_0x21e378(0x3de)])];}const _0x4f8a4c=ColorManager[_0x21e378(0x5ab)][_0x21e378(0x506)](),_0x335dd5=1.5,_0x5c0fba=ColorManager[_0x21e378(0x477)](_0x4f8a4c[Math['floor'](Math[_0x21e378(0x2cb)]()*_0x4f8a4c[_0x21e378(0x3de)])],_0x335dd5),_0x348bb7=ColorManager[_0x21e378(0x477)](_0x4f8a4c[Math[_0x21e378(0x3a0)](Math['random']()*_0x4f8a4c['length'])],_0x335dd5),_0x406396=ColorManager[_0x21e378(0x477)](_0x4f8a4c[Math['floor'](Math[_0x21e378(0x2cb)]()*_0x4f8a4c['length'])],_0x335dd5),_0x4651ea=new Bitmap(0x1f4,0x1f4);_0x4651ea[_0x21e378(0x305)](0xfa,0x15e,0x4b,_0x5c0fba,0x4,0x14),_0x4651ea[_0x21e378(0x305)](0xfa,0xfa,0x64,_0x406396,0x8,0x19),_0x4651ea[_0x21e378(0x305)](0xfa,0xfa,0x3c,_0x348bb7,0x4,0x14);const _0x1cb1e4=_0x4651ea[_0x21e378(0x45e)],_0xaac07=_0x4651ea['height'],_0x384e6e=0x2;let _0x455bf0=0x40;while(_0x455bf0--){const _0x4e00e1=Math[_0x21e378(0x23a)](_0x1cb1e4-_0x384e6e*0x2)+_0x384e6e,_0x4e32ed=Math['randomInt'](_0xaac07-_0x384e6e*0x2)+_0x384e6e;let _0x232779=_0x4f8a4c[Math[_0x21e378(0x3a0)](Math[_0x21e378(0x2cb)]()*_0x4f8a4c[_0x21e378(0x3de)])];_0x232779=ColorManager[_0x21e378(0x477)](_0x232779,_0x335dd5);const _0xb3e02=Math[_0x21e378(0x23a)](_0x384e6e)+0x1;_0x4651ea[_0x21e378(0x3ed)]=Math[_0x21e378(0x23a)](0x40)+0xa0,_0x4651ea['drawCircle'](_0x4e00e1,_0x4e32ed,_0xb3e02,_0x232779);}_0x4651ea[_0x21e378(0x3a3)]=![];if(ImageManager[_0x21e378(0x256)])console[_0x21e378(0x465)](_0x21e378(0x257));return this[_0x21e378(0x3d2)]=this[_0x21e378(0x3d2)]||[],this[_0x21e378(0x3d2)][_0x21e378(0x590)](_0x4651ea),_0x4651ea;},ImageManager[_0x3c3250(0x3c6)]=function(){const _0x140980=_0x3c3250;if(this[_0x140980(0x1ed)]&&this[_0x140980(0x1ed)][_0x140980(0x3de)]>=ImageManager[_0x140980(0x435)]){const _0x498a34=this[_0x140980(0x1ed)];return _0x498a34[Math[_0x140980(0x3a0)](Math[_0x140980(0x2cb)]()*_0x498a34['length'])];}const _0x600908=new Bitmap(0x1f4,0x1f4),_0x53ea25=_0x600908[_0x140980(0x45e)],_0x4b3e95=_0x600908[_0x140980(0x243)],_0x2072e7=0x10;let _0x141252=0x10;while(_0x141252--){const _0x3b734a=Math['randomInt'](_0x53ea25-_0x2072e7*0x2)+_0x2072e7,_0xb6c4a2=Math[_0x140980(0x23a)](_0x4b3e95-_0x2072e7*0x2)+_0x2072e7,_0x1483cb=Math[_0x140980(0x23a)](_0x2072e7/0x2)+0x2,_0x410e4f=ColorManager['arrayToHex']([0xff,Math[_0x140980(0x23a)](0x46),0x0]);_0x600908[_0x140980(0x3ed)]=Math[_0x140980(0x23a)](0x40),_0x600908[_0x140980(0x41b)](_0x3b734a,_0xb6c4a2,_0x1483cb,_0x410e4f),_0x600908[_0x140980(0x3ed)]=Math[_0x140980(0x23a)](0x40)+0x40,_0x600908[_0x140980(0x41b)](_0x3b734a,_0xb6c4a2,_0x1483cb/0x2,_0x410e4f),_0x600908[_0x140980(0x3ed)]=Math[_0x140980(0x23a)](0x40)+0xc0;const _0x477502=ColorManager['arrayToHex']([0xff,Math[_0x140980(0x23a)](0x46)+0xb9,0x0]);_0x600908[_0x140980(0x41b)](_0x3b734a,_0xb6c4a2,_0x1483cb/0x4,_0x477502),_0x600908[_0x140980(0x41b)](_0x3b734a,_0xb6c4a2,_0x1483cb/0x8,'yellow');}_0x600908['_customModified']=![];if(ImageManager[_0x140980(0x256)])console[_0x140980(0x465)](_0x140980(0x442));return this[_0x140980(0x1ed)]=this[_0x140980(0x1ed)]||[],this['_cached_WeatherEffects_Embers'][_0x140980(0x590)](_0x600908),_0x600908;},ImageManager[_0x3c3250(0x2eb)]=function(){const _0x4b10fe=_0x3c3250;if(this['_cached_WeatherEffects_AshDebris']&&this[_0x4b10fe(0x594)][_0x4b10fe(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x4bb0f3=this[_0x4b10fe(0x594)];return _0x4bb0f3[Math[_0x4b10fe(0x3a0)](Math[_0x4b10fe(0x2cb)]()*_0x4bb0f3[_0x4b10fe(0x3de)])];}const _0x5a95e3=new Bitmap(0x12,0x12),_0x2d5189=_0x5a95e3[_0x4b10fe(0x45e)],_0x2d28d6=_0x5a95e3[_0x4b10fe(0x243)],_0x12a178=_0x2d5189/0x2-0x2,_0x2d340b=_0x2d28d6/0x2-0x2,_0x31f24a=[];_0x31f24a[_0x4b10fe(0x590)](Math[_0x4b10fe(0x23a)](_0x12a178)+0x2,Math['randomInt'](_0x2d340b)+0x2),_0x31f24a['push'](_0x2d5189-Math[_0x4b10fe(0x23a)](_0x12a178)-0x2,Math[_0x4b10fe(0x23a)](_0x2d340b)+0x2),_0x31f24a['push'](_0x2d5189-Math['randomInt'](_0x12a178)-0x2,_0x2d28d6-Math['randomInt'](_0x2d340b)-0x2),_0x31f24a[_0x4b10fe(0x590)](Math[_0x4b10fe(0x23a)](_0x12a178)+0x2,_0x2d28d6-Math[_0x4b10fe(0x23a)](_0x2d340b)-0x2);const _0x39ef0f=ColorManager['WEATHER_ASH_COLORS']['clone'](),_0x463467=_0x39ef0f[Math[_0x4b10fe(0x3a0)](Math[_0x4b10fe(0x2cb)]()*_0x39ef0f['length'])];_0x5a95e3[_0x4b10fe(0x4d4)](_0x31f24a,_0x463467,_0x4b10fe(0x58d),0x2,0xff,![]),_0x5a95e3['_customModified']=![];if(ImageManager[_0x4b10fe(0x256)])console['log'](_0x4b10fe(0x4c3));return this['_cached_WeatherEffects_AshDebris']=this['_cached_WeatherEffects_AshDebris']||[],this[_0x4b10fe(0x594)][_0x4b10fe(0x590)](_0x5a95e3),_0x5a95e3;},ImageManager[_0x3c3250(0x41a)]=function(){const _0x17644a=_0x3c3250;if(this['_cached_WeatherEffects_Firestorm']&&this[_0x17644a(0x319)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x25e5e5=this[_0x17644a(0x319)];return _0x25e5e5[Math[_0x17644a(0x3a0)](Math['random']()*_0x25e5e5[_0x17644a(0x3de)])];}const _0x4c252a=new Bitmap(0x1f4,0x1f4),_0x1a899e=_0x4c252a['width'],_0x177af6=_0x4c252a[_0x17644a(0x243)],_0x3b67db=0xc,_0x4882fb=0x64;let _0x12b5a9=0x4;while(_0x12b5a9--){const _0x5d74ab=Math[_0x17644a(0x23a)](_0x1a899e-_0x4882fb*0x2)+_0x4882fb*0x1,_0x1fe3a5=Math['randomInt'](_0x177af6-_0x3b67db*0x8)+_0x3b67db*0x4,_0x266a48=Math[_0x17644a(0x23a)](_0x3b67db*0x2/0x5)+_0x3b67db*0x2/0x5,_0xfd5f3d=Math[_0x17644a(0x23a)](_0x4882fb*0x1/0x3)+_0x4882fb*0x2/0x3;_0x4c252a[_0x17644a(0x5a1)](_0x5d74ab,_0x1fe3a5,_0x266a48,_0xfd5f3d);}_0x4c252a[_0x17644a(0x3a3)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x17644a(0x219));return this['_cached_WeatherEffects_Firestorm']=this[_0x17644a(0x319)]||[],this['_cached_WeatherEffects_Firestorm'][_0x17644a(0x590)](_0x4c252a),_0x4c252a;},ImageManager['weatherEffectsFireflies']=function(){const _0x5cf328=_0x3c3250;if(this[_0x5cf328(0x223)]&&this[_0x5cf328(0x223)][_0x5cf328(0x3de)]>=ImageManager[_0x5cf328(0x435)]){const _0x3b7abd=this[_0x5cf328(0x223)];return _0x3b7abd[Math[_0x5cf328(0x3a0)](Math[_0x5cf328(0x2cb)]()*_0x3b7abd[_0x5cf328(0x3de)])];}const _0x10f63e=ColorManager[_0x5cf328(0x398)][_0x5cf328(0x506)](),_0x4e3e6f=_0x10f63e[Math['floor'](Math[_0x5cf328(0x2cb)]()*_0x10f63e['length'])];let _0x15bf83=Math['randomInt'](0x10)+0x10;if(_0x15bf83%0x2!==0x0)_0x15bf83+=0x1;const _0x21805b=new Bitmap(_0x15bf83,_0x15bf83),_0x24cde6=Math[_0x5cf328(0x3a0)](_0x15bf83/0x2);_0x21805b[_0x5cf328(0x567)](_0x24cde6,_0x24cde6,_0x24cde6,0x168,_0x4e3e6f,0x0,0x1,0x0),_0x21805b['fillRect'](_0x24cde6-0x1,_0x24cde6-0x1,0x2,0x2,_0x4e3e6f),_0x21805b['_customModified']=![];if(ImageManager[_0x5cf328(0x256)])console[_0x5cf328(0x465)](_0x5cf328(0x2b1));return this[_0x5cf328(0x223)]=this[_0x5cf328(0x223)]||[],this[_0x5cf328(0x223)]['push'](_0x21805b),_0x21805b;},ImageManager['weatherEffectsThunderbolt']=function(){const _0x1aebe1=_0x3c3250;if(this[_0x1aebe1(0x396)]&&this['_cached_WeatherEffects_Thunderbolt']['length']>=ImageManager[_0x1aebe1(0x435)]*0x3){const _0x146455=this[_0x1aebe1(0x396)];return _0x146455[Math[_0x1aebe1(0x3a0)](Math[_0x1aebe1(0x2cb)]()*_0x146455['length'])];}const _0x1c9951=Math['max']($dataSystem[_0x1aebe1(0x421)][_0x1aebe1(0x515)],$dataSystem[_0x1aebe1(0x421)]['screenHeight'])||0x1,_0x27f1ae=new Bitmap(_0x1c9951,_0x1c9951);_0x27f1ae[_0x1aebe1(0x44a)](),_0x27f1ae[_0x1aebe1(0x3a3)]=![];if(ImageManager[_0x1aebe1(0x256)])console['log'](_0x1aebe1(0x235));return this[_0x1aebe1(0x396)]=this['_cached_WeatherEffects_Thunderbolt']||[],this['_cached_WeatherEffects_Thunderbolt'][_0x1aebe1(0x590)](_0x27f1ae),_0x27f1ae;},ImageManager[_0x3c3250(0x2b6)]=function(){const _0x311e37=_0x3c3250;if(this[_0x311e37(0x304)]&&this['_cached_WeatherEffects_Sootfall']['length']>=ImageManager[_0x311e37(0x435)]){const _0x11ae62=this['_cached_WeatherEffects_Sootfall'];return _0x11ae62[Math[_0x311e37(0x3a0)](Math[_0x311e37(0x2cb)]()*_0x11ae62[_0x311e37(0x3de)])];}const _0x393f1b=ColorManager[_0x311e37(0x45c)][_0x311e37(0x506)](),_0x5a2c51=new Bitmap(0x1f4,0x1f4),_0xa298de=_0x5a2c51[_0x311e37(0x45e)],_0xab0c0=_0x5a2c51[_0x311e37(0x243)],_0xf1fec1=0x5;let _0x553216=0x8;while(_0x553216--){const _0x701fd6=Math['randomInt'](_0xa298de-_0xf1fec1*0x2)+_0xf1fec1,_0x3f72d2=Math[_0x311e37(0x23a)](_0xab0c0-_0xf1fec1*0x2)+_0xf1fec1,_0x6ba78c=Math['randomInt'](_0xf1fec1)+0x1,_0xa1a54b=_0x393f1b[Math['floor'](Math['random']()*_0x393f1b[_0x311e37(0x3de)])];_0x5a2c51[_0x311e37(0x3ed)]=Math[_0x311e37(0x23a)](0x40)+0xc0,_0x5a2c51[_0x311e37(0x41b)](_0x701fd6,_0x3f72d2,_0x6ba78c,_0xa1a54b);}_0x5a2c51[_0x311e37(0x3a3)]=![];if(ImageManager[_0x311e37(0x256)])console['log'](_0x311e37(0x237));return this[_0x311e37(0x304)]=this['_cached_WeatherEffects_Sootfall']||[],this[_0x311e37(0x304)][_0x311e37(0x590)](_0x5a2c51),_0x5a2c51;},ImageManager[_0x3c3250(0x5a7)]=function(){const _0x27eb2b=_0x3c3250;if(this['_cached_WeatherEffects_Ashfall']&&this['_cached_WeatherEffects_Ashfall'][_0x27eb2b(0x3de)]>=ImageManager[_0x27eb2b(0x435)]){const _0x38d734=this[_0x27eb2b(0x589)];return _0x38d734[Math[_0x27eb2b(0x3a0)](Math['random']()*_0x38d734['length'])];}const _0xd65a01=new Bitmap(0x18,0x18),_0x53e7e9=_0xd65a01[_0x27eb2b(0x45e)],_0xaba963=_0xd65a01[_0x27eb2b(0x243)],_0x552502=_0x53e7e9/0x2-0x2,_0x59148c=_0xaba963/0x2-0x2,_0x357051=[];_0x357051[_0x27eb2b(0x590)](Math[_0x27eb2b(0x23a)](_0x552502)+0x2,Math['randomInt'](_0x59148c)+0x2),_0x357051[_0x27eb2b(0x590)](_0x53e7e9-Math[_0x27eb2b(0x23a)](_0x552502)-0x2,Math[_0x27eb2b(0x23a)](_0x59148c)+0x2),_0x357051['push'](_0x53e7e9-Math[_0x27eb2b(0x23a)](_0x552502)-0x2,_0xaba963-Math[_0x27eb2b(0x23a)](_0x59148c)-0x2),_0x357051[_0x27eb2b(0x590)](Math[_0x27eb2b(0x23a)](_0x552502)+0x2,_0xaba963-Math[_0x27eb2b(0x23a)](_0x59148c)-0x2);const _0x49ba15=ColorManager[_0x27eb2b(0x45c)][_0x27eb2b(0x506)](),_0x570cbc=_0x49ba15[Math[_0x27eb2b(0x3a0)](Math[_0x27eb2b(0x2cb)]()*_0x49ba15[_0x27eb2b(0x3de)])];_0xd65a01[_0x27eb2b(0x4d4)](_0x357051,_0x570cbc,'black',0x2,0xff,![]),_0xd65a01[_0x27eb2b(0x3a3)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x27eb2b(0x434));return this[_0x27eb2b(0x589)]=this[_0x27eb2b(0x589)]||[],this['_cached_WeatherEffects_Ashfall'][_0x27eb2b(0x590)](_0xd65a01),_0xd65a01;},ImageManager['weatherEffectsFlameWall']=function(){const _0xf7a8af=_0x3c3250;if(this['_cached_WeatherEffects_FlameWall']&&this[_0xf7a8af(0x431)][_0xf7a8af(0x3de)]>=ImageManager[_0xf7a8af(0x435)]){const _0x4e1e16=this[_0xf7a8af(0x431)];return _0x4e1e16[Math[_0xf7a8af(0x3a0)](Math[_0xf7a8af(0x2cb)]()*_0x4e1e16[_0xf7a8af(0x3de)])];}const _0x4be2a1=new Bitmap(0x258,0xc8),_0x282030=_0x4be2a1[_0xf7a8af(0x45e)],_0x39ba19=_0x4be2a1[_0xf7a8af(0x243)],_0x52c76a=0x40;let _0x3fbab4=0x40;while(_0x3fbab4--){const _0x531e1f=Math['randomInt'](_0x282030-_0x52c76a*0x2)+_0x52c76a,_0x397da5=Math['randomInt'](_0x39ba19-_0x52c76a*0x2)+_0x52c76a,_0x45d53a=Math[_0xf7a8af(0x23a)](_0x52c76a/0x2)+0x2,_0x3a67c1=ColorManager[_0xf7a8af(0x48b)]([0xff,Math[_0xf7a8af(0x23a)](0x46),0x0]);_0x4be2a1[_0xf7a8af(0x3ed)]=Math['randomInt'](0x40),_0x4be2a1['drawCircle'](_0x531e1f,_0x397da5,_0x45d53a,_0x3a67c1),_0x4be2a1['paintOpacity']=Math['randomInt'](0x40)+0x40,_0x4be2a1[_0xf7a8af(0x41b)](_0x531e1f,_0x397da5,_0x45d53a/0x2,_0x3a67c1),_0x4be2a1[_0xf7a8af(0x3ed)]=Math[_0xf7a8af(0x23a)](0x40)+0xc0;const _0x552cb9=ColorManager[_0xf7a8af(0x48b)]([0xff,Math[_0xf7a8af(0x23a)](0x46)+0xb9,0x0]);_0x4be2a1['drawCircle'](_0x531e1f,_0x397da5,_0x45d53a/0x4,_0x552cb9),_0x4be2a1[_0xf7a8af(0x41b)](_0x531e1f,_0x397da5,_0x45d53a/0x8,_0xf7a8af(0x374)),_0x4be2a1['drawCircle'](_0x531e1f,_0x397da5,_0x45d53a/0xa,'white');}_0x4be2a1[_0xf7a8af(0x3a3)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0xf7a8af(0x465)](_0xf7a8af(0x447));return this['_cached_WeatherEffects_FlameWall']=this[_0xf7a8af(0x431)]||[],this[_0xf7a8af(0x431)][_0xf7a8af(0x590)](_0x4be2a1),_0x4be2a1;},ImageManager[_0x3c3250(0x23c)]=function(){const _0x2c478b=_0x3c3250;if(this[_0x2c478b(0x4d7)]&&ColorManager[_0x2c478b(0x484)][_0x2c478b(0x3de)]<=0x0){const _0x2bf03a=this['_cached_WeatherEffects_AutumnLeaves'];return _0x2bf03a[Math[_0x2c478b(0x3a0)](Math[_0x2c478b(0x2cb)]()*_0x2bf03a['length'])];}const _0x1d52e4=ColorManager['WEATHER_AUTUMN_LEAVES_COLORS'][_0x2c478b(0x5d1)]();let _0x120d95=ColorManager[_0x2c478b(0x554)](_0x1d52e4);const _0x28f21e=[];while(_0x28f21e[_0x2c478b(0x3de)]<0x6){const _0x4b1197=ColorManager[_0x2c478b(0x48b)](_0x120d95);_0x28f21e[_0x2c478b(0x590)](_0x4b1197),_0x120d95=_0x120d95[_0x2c478b(0x24b)](_0x8482b5=>Math[_0x2c478b(0x5eb)](_0x8482b5*0.85)[_0x2c478b(0x48f)](0x0,0xff));}_0x28f21e['reverse'](),_0x28f21e[_0x2c478b(0x590)](_0x28f21e[_0x2c478b(0x293)]()),_0x28f21e[_0x2c478b(0x590)](_0x28f21e[_0x2c478b(0x293)]());const _0x5efc73=new Bitmap(0x64,0x60);_0x5efc73[_0x2c478b(0x5a6)](_0x28f21e),_0x5efc73['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x2c478b(0x465)](_0x2c478b(0x427));return this['_cached_WeatherEffects_AutumnLeaves']=this[_0x2c478b(0x4d7)]||[],this[_0x2c478b(0x4d7)][_0x2c478b(0x590)](_0x5efc73),_0x5efc73;},ImageManager[_0x3c3250(0x512)]=function(){const _0x176abc=_0x3c3250;if(this[_0x176abc(0x3f7)]&&this['_cached_WeatherEffects_CherryBlossoms'][_0x176abc(0x3de)]>=ImageManager[_0x176abc(0x435)]){const _0x53de79=this['_cached_WeatherEffects_CherryBlossoms'];return _0x53de79[Math[_0x176abc(0x3a0)](Math[_0x176abc(0x2cb)]()*_0x53de79[_0x176abc(0x3de)])];}const _0x4b5247=ColorManager[_0x176abc(0x568)],_0x1cc8a9=ColorManager[_0x176abc(0x2b5)],_0x313e9e=ColorManager[_0x176abc(0x383)],_0x446274=_0x4b5247[Math[_0x176abc(0x3a0)](Math['random']()*_0x4b5247[_0x176abc(0x3de)])],_0x51fd71=_0x1cc8a9[Math['floor'](Math['random']()*_0x1cc8a9['length'])],_0x569b0b=_0x313e9e[Math[_0x176abc(0x3a0)](Math[_0x176abc(0x2cb)]()*_0x313e9e[_0x176abc(0x3de)])],_0x11e069=new Bitmap(0x34,0x23);_0x11e069[_0x176abc(0x205)](_0x446274,_0x51fd71,_0x569b0b),_0x11e069['_customModified']=![];if(ImageManager[_0x176abc(0x256)])console['log'](_0x176abc(0x5bb));return this['_cached_WeatherEffects_CherryBlossoms']=this['_cached_WeatherEffects_CherryBlossoms']||[],this['_cached_WeatherEffects_CherryBlossoms'][_0x176abc(0x590)](_0x11e069),_0x11e069;},ImageManager[_0x3c3250(0x350)]=function(){const _0x1265b0=_0x3c3250;if(this[_0x1265b0(0x2d5)]&&ColorManager[_0x1265b0(0x25d)]['length']<=0x0){const _0x3f3898=this[_0x1265b0(0x2d5)];return _0x3f3898[Math[_0x1265b0(0x3a0)](Math[_0x1265b0(0x2cb)]()*_0x3f3898[_0x1265b0(0x3de)])];}const _0x5c1735=ColorManager[_0x1265b0(0x25d)][_0x1265b0(0x5d1)]();let _0x4f359a=ColorManager[_0x1265b0(0x554)](_0x5c1735);const _0x3e3f04=[];while(_0x3e3f04[_0x1265b0(0x3de)]<0x6){const _0x5ec84e=ColorManager[_0x1265b0(0x48b)](_0x4f359a);_0x3e3f04[_0x1265b0(0x590)](_0x5ec84e),_0x4f359a=_0x4f359a[_0x1265b0(0x24b)](_0x45b2b6=>Math[_0x1265b0(0x5eb)](_0x45b2b6*0.85)[_0x1265b0(0x48f)](0x0,0xff));}_0x3e3f04['reverse'](),_0x3e3f04[_0x1265b0(0x590)](_0x3e3f04['shift']()),_0x3e3f04[_0x1265b0(0x590)](_0x3e3f04[_0x1265b0(0x293)]());const _0x156ca7=new Bitmap(0x64,0x60);_0x156ca7[_0x1265b0(0x548)](_0x3e3f04),_0x156ca7[_0x1265b0(0x3a3)]=![];if(ImageManager[_0x1265b0(0x256)])console[_0x1265b0(0x465)](_0x1265b0(0x4eb));return this['_cached_WeatherEffects_GreenLeaves']=this[_0x1265b0(0x2d5)]||[],this[_0x1265b0(0x2d5)]['push'](_0x156ca7),_0x156ca7;},ImageManager[_0x3c3250(0x2f9)]=function(){const _0x3efdf6=_0x3c3250;if(this['_cached_WeatherEffects_DandelionSeeds']&&this[_0x3efdf6(0x334)][_0x3efdf6(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x4c026c=this['_cached_WeatherEffects_DandelionSeeds'];return _0x4c026c[Math[_0x3efdf6(0x3a0)](Math[_0x3efdf6(0x2cb)]()*_0x4c026c[_0x3efdf6(0x3de)])];}const _0x115b04=ColorManager[_0x3efdf6(0x3c9)],_0x39429c=ColorManager['WEATHER_DANDELION2_COLORS'],_0x353fd2=ColorManager[_0x3efdf6(0x225)],_0x555ba1=_0x115b04[Math[_0x3efdf6(0x3a0)](Math[_0x3efdf6(0x2cb)]()*_0x115b04['length'])],_0x2eba69=_0x39429c[Math[_0x3efdf6(0x3a0)](Math[_0x3efdf6(0x2cb)]()*_0x39429c[_0x3efdf6(0x3de)])],_0x4e0cb7=_0x353fd2[Math[_0x3efdf6(0x3a0)](Math[_0x3efdf6(0x2cb)]()*_0x353fd2['length'])],_0x48ebae=new Bitmap(0x40,0x64);_0x48ebae[_0x3efdf6(0x54a)](_0x555ba1,_0x2eba69,_0x4e0cb7),_0x48ebae[_0x3efdf6(0x3a3)]=![];if(ImageManager[_0x3efdf6(0x256)])console[_0x3efdf6(0x465)]('dandelionseeds');return this[_0x3efdf6(0x334)]=this[_0x3efdf6(0x334)]||[],this[_0x3efdf6(0x334)][_0x3efdf6(0x590)](_0x48ebae),_0x48ebae;},ImageManager[_0x3c3250(0x2c6)]=function(){const _0x444d31=_0x3c3250;if(this[_0x444d31(0x5c0)]&&this[_0x444d31(0x5c0)][_0x444d31(0x3de)]>=ImageManager[_0x444d31(0x435)]){const _0x1cf761=this[_0x444d31(0x5c0)];return _0x1cf761[Math[_0x444d31(0x3a0)](Math[_0x444d31(0x2cb)]()*_0x1cf761[_0x444d31(0x3de)])];}const _0xbcc14a=ColorManager['WEATHER_CLOUD_DARK_COLORS'],_0x5bf24d=ColorManager['WEATHER_CLOUD_BLUE_COLORS'],_0x520835=ColorManager[_0x444d31(0x221)],_0x57a4ff=_0xbcc14a[Math[_0x444d31(0x3a0)](Math[_0x444d31(0x2cb)]()*_0xbcc14a[_0x444d31(0x3de)])],_0x5ab10c=_0x5bf24d[Math['floor'](Math[_0x444d31(0x2cb)]()*_0x5bf24d[_0x444d31(0x3de)])],_0x392de6=_0x520835[Math[_0x444d31(0x3a0)](Math[_0x444d31(0x2cb)]()*_0x520835[_0x444d31(0x3de)])],_0x2fac04=new Bitmap(0x1f4,0x1f4);_0x2fac04['drawCloud'](0xfa,0x15e,0x4b,_0x57a4ff,0x10,0x14),_0x2fac04[_0x444d31(0x305)](0xfa,0xfa,0x64,_0x392de6,0x40,0x19),_0x2fac04[_0x444d31(0x305)](0xfa,0xfa,0x3c,_0x5ab10c,0x10,0x14),_0x2fac04['_customModified']=![];if(ImageManager[_0x444d31(0x256)])console[_0x444d31(0x465)](_0x444d31(0x59c));return this[_0x444d31(0x5c0)]=this[_0x444d31(0x5c0)]||[],this[_0x444d31(0x5c0)][_0x444d31(0x590)](_0x2fac04),_0x2fac04;},ImageManager[_0x3c3250(0x403)]=function(){const _0x1e666f=_0x3c3250;if(this['_cached_WeatherEffects_SmokeFog']&&this[_0x1e666f(0x529)][_0x1e666f(0x3de)]>=ImageManager[_0x1e666f(0x435)]){const _0x1d6348=this[_0x1e666f(0x529)];return _0x1d6348[Math['floor'](Math[_0x1e666f(0x2cb)]()*_0x1d6348['length'])];}const _0x2c3a6b=ColorManager[_0x1e666f(0x45c)],_0x57896c=_0x2c3a6b[0x3],_0x1470d4=_0x2c3a6b[0x2],_0x4ed6c1=_0x2c3a6b[0x1],_0x29a053=new Bitmap(0x3e8,0x3e8);_0x29a053['drawCloud'](0x1f4,0x28a,0xaf,_0x57896c,0x10,0x14),_0x29a053[_0x1e666f(0x305)](0x1f4,0x1f4,0xc8,_0x4ed6c1,0x40,0x19),_0x29a053['drawCloud'](0x1f4,0x15e,0xa0,_0x1470d4,0x10,0x14),_0x29a053['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x1e666f(0x465)]('smokefog');return this[_0x1e666f(0x529)]=this['_cached_WeatherEffects_SmokeFog']||[],this[_0x1e666f(0x529)][_0x1e666f(0x590)](_0x29a053),_0x29a053;},ImageManager[_0x3c3250(0x3e1)]=function(){const _0x3706c1=_0x3c3250;if(this['_cached_WeatherEffects_PollutionClouds']&&this['_cached_WeatherEffects_PollutionClouds'][_0x3706c1(0x3de)]>=ImageManager[_0x3706c1(0x435)]){const _0x39e815=this[_0x3706c1(0x2d6)];return _0x39e815[Math['floor'](Math['random']()*_0x39e815['length'])];}const _0xc3057b=ColorManager[_0x3706c1(0x5ab)],_0x4f8b6b=0.75;let _0x5450f8=ColorManager['adjustHexColor'](_0xc3057b[Math[_0x3706c1(0x3a0)](Math[_0x3706c1(0x2cb)]()*_0xc3057b[_0x3706c1(0x3de)])],_0x4f8b6b),_0x4c82cc=ColorManager[_0x3706c1(0x477)](_0xc3057b[Math['floor'](Math[_0x3706c1(0x2cb)]()*_0xc3057b['length'])],_0x4f8b6b),_0x368956=ColorManager[_0x3706c1(0x477)](_0xc3057b[Math['floor'](Math[_0x3706c1(0x2cb)]()*_0xc3057b[_0x3706c1(0x3de)])],_0x4f8b6b);const _0x187300=new Bitmap(0x1f4,0x1f4);_0x187300[_0x3706c1(0x305)](0xfa,0x15e,0x4b,_0x5450f8,0x10,0x14),_0x187300['drawCloud'](0xfa,0xfa,0x64,_0x368956,0x40,0x19),_0x187300['drawCloud'](0xfa,0xfa,0x3c,_0x4c82cc,0x10,0x14),_0x187300['_customModified']=![];if(ImageManager[_0x3706c1(0x256)])console[_0x3706c1(0x465)](_0x3706c1(0x562));return this[_0x3706c1(0x2d6)]=this[_0x3706c1(0x2d6)]||[],this[_0x3706c1(0x2d6)][_0x3706c1(0x590)](_0x187300),_0x187300;},ImageManager[_0x3c3250(0x250)]=function(){const _0x58d435=_0x3c3250;if(this[_0x58d435(0x381)]&&this[_0x58d435(0x381)][_0x58d435(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x4e3a8b=this[_0x58d435(0x381)];return _0x4e3a8b[Math[_0x58d435(0x3a0)](Math[_0x58d435(0x2cb)]()*_0x4e3a8b[_0x58d435(0x3de)])];}const _0x139341=ColorManager[_0x58d435(0x24e)],_0x1cd276=0.85;let _0x2cef60=ColorManager['adjustHexColor'](_0x139341[Math[_0x58d435(0x3a0)](Math['random']()*_0x139341[_0x58d435(0x3de)])],_0x1cd276),_0x1407b9=ColorManager['adjustHexColor'](_0x139341[Math[_0x58d435(0x3a0)](Math[_0x58d435(0x2cb)]()*_0x139341[_0x58d435(0x3de)])],_0x1cd276),_0x126e6d=ColorManager[_0x58d435(0x477)](_0x139341[Math['floor'](Math[_0x58d435(0x2cb)]()*_0x139341[_0x58d435(0x3de)])],_0x1cd276);const _0x2d3cc3=new Bitmap(0x1f4,0x1f4);_0x2d3cc3[_0x58d435(0x305)](0xfa,0x15e,0x4b,_0x2cef60,0x10,0x14),_0x2d3cc3[_0x58d435(0x305)](0xfa,0xfa,0x64,_0x126e6d,0x40,0x19),_0x2d3cc3[_0x58d435(0x305)](0xfa,0xfa,0x3c,_0x1407b9,0x10,0x14),_0x2d3cc3['_customModified']=![];if(ImageManager[_0x58d435(0x256)])console[_0x58d435(0x465)](_0x58d435(0x511));return this[_0x58d435(0x381)]=this[_0x58d435(0x381)]||[],this[_0x58d435(0x381)]['push'](_0x2d3cc3),_0x2d3cc3;},ImageManager[_0x3c3250(0x422)]=function(){const _0x1456a1=_0x3c3250;if(this[_0x1456a1(0x32c)]&&this[_0x1456a1(0x32c)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x478817=this['_cached_WeatherEffects_SnowClouds'];return _0x478817[Math[_0x1456a1(0x3a0)](Math[_0x1456a1(0x2cb)]()*_0x478817[_0x1456a1(0x3de)])];}const _0x55768d=ColorManager['WEATHER_FROST_COLORS'],_0x178724=1.2;let _0x49d7ec=ColorManager['adjustHexColor'](_0x55768d[Math['floor'](Math['random']()*_0x55768d[_0x1456a1(0x3de)])],_0x178724),_0x97e833=ColorManager[_0x1456a1(0x477)](_0x55768d[Math[_0x1456a1(0x3a0)](Math[_0x1456a1(0x2cb)]()*_0x55768d[_0x1456a1(0x3de)])],_0x178724),_0x3810ea=ColorManager['adjustHexColor'](_0x55768d[Math['floor'](Math[_0x1456a1(0x2cb)]()*_0x55768d['length'])],_0x178724);const _0x4cc4d5=new Bitmap(0x1f4,0x1f4);_0x4cc4d5[_0x1456a1(0x305)](0xfa,0x15e,0x4b,_0x49d7ec,0x10,0x14),_0x4cc4d5[_0x1456a1(0x305)](0xfa,0xfa,0x64,_0x3810ea,0x40,0x19),_0x4cc4d5[_0x1456a1(0x305)](0xfa,0xfa,0x3c,_0x97e833,0x10,0x14),_0x4cc4d5[_0x1456a1(0x3a3)]=![];if(ImageManager[_0x1456a1(0x256)])console[_0x1456a1(0x465)]('snowclouds');return this[_0x1456a1(0x32c)]=this[_0x1456a1(0x32c)]||[],this[_0x1456a1(0x32c)][_0x1456a1(0x590)](_0x4cc4d5),_0x4cc4d5;},ImageManager['weatherEffectsIceFog']=function(){const _0x11e3ff=_0x3c3250;if(this[_0x11e3ff(0x507)]&&this['_cached_WeatherEffects_IceFog'][_0x11e3ff(0x3de)]>=ImageManager[_0x11e3ff(0x435)]){const _0xc67e6b=this[_0x11e3ff(0x507)];return _0xc67e6b[Math[_0x11e3ff(0x3a0)](Math[_0x11e3ff(0x2cb)]()*_0xc67e6b[_0x11e3ff(0x3de)])];}const _0x3cc916=ColorManager[_0x11e3ff(0x3c8)],_0x487865=1.3;let _0x5631ee=ColorManager[_0x11e3ff(0x477)](_0x3cc916[Math['floor'](Math[_0x11e3ff(0x2cb)]()*_0x3cc916[_0x11e3ff(0x3de)])],_0x487865),_0x860746=ColorManager[_0x11e3ff(0x477)](_0x3cc916[Math[_0x11e3ff(0x3a0)](Math[_0x11e3ff(0x2cb)]()*_0x3cc916[_0x11e3ff(0x3de)])],_0x487865),_0xca144c=ColorManager[_0x11e3ff(0x477)](_0x3cc916[Math[_0x11e3ff(0x3a0)](Math[_0x11e3ff(0x2cb)]()*_0x3cc916[_0x11e3ff(0x3de)])],_0x487865);const _0x5b3106=new Bitmap(0x3e8,0x3e8);_0x5b3106[_0x11e3ff(0x305)](0x1f4,0x28a,0xaf,_0x5631ee,0x10,0x14),_0x5b3106[_0x11e3ff(0x305)](0x1f4,0x1f4,0xc8,_0xca144c,0x40,0x19),_0x5b3106[_0x11e3ff(0x305)](0x1f4,0x15e,0xa0,_0x860746,0x10,0x14),_0x5b3106[_0x11e3ff(0x3a3)]=![];if(ImageManager[_0x11e3ff(0x256)])console[_0x11e3ff(0x465)](_0x11e3ff(0x4ed));return this['_cached_WeatherEffects_IceFog']=this[_0x11e3ff(0x507)]||[],this[_0x11e3ff(0x507)][_0x11e3ff(0x590)](_0x5b3106),_0x5b3106;},ImageManager[_0x3c3250(0x54f)]=function(){const _0x43c4d1=_0x3c3250;if(this[_0x43c4d1(0x1f5)]&&this[_0x43c4d1(0x1f5)]['length']>=ImageManager[_0x43c4d1(0x435)]){const _0x22f443=this['_cached_WeatherEffects_PurpleHaze'];return _0x22f443[Math['floor'](Math[_0x43c4d1(0x2cb)]()*_0x22f443[_0x43c4d1(0x3de)])];}let _0x1cd55a=ColorManager[_0x43c4d1(0x48b)]([Math['randomInt'](0x80)+0x80,0x18,Math[_0x43c4d1(0x23a)](0x80)+0x80]),_0x1ade6d=ColorManager[_0x43c4d1(0x48b)]([Math[_0x43c4d1(0x23a)](0x80)+0x80,0x30,Math[_0x43c4d1(0x23a)](0x80)+0x80]),_0x436f38=ColorManager[_0x43c4d1(0x48b)]([Math[_0x43c4d1(0x23a)](0x80)+0x80,0x60,Math['randomInt'](0x80)+0x80]);const _0x27e4d2=new Bitmap(0x3e8,0x3e8);_0x27e4d2[_0x43c4d1(0x305)](0x1f4,0x28a,0xaf,_0x1cd55a,0x10,0x14),_0x27e4d2['drawCloud'](0x1f4,0x1f4,0xc8,_0x436f38,0x40,0x19),_0x27e4d2['drawCloud'](0x1f4,0x15e,0xa0,_0x1ade6d,0x10,0x14),_0x27e4d2['_customModified']=![];if(ImageManager[_0x43c4d1(0x256)])console[_0x43c4d1(0x465)](_0x43c4d1(0x503));return this[_0x43c4d1(0x1f5)]=this[_0x43c4d1(0x1f5)]||[],this[_0x43c4d1(0x1f5)]['push'](_0x27e4d2),_0x27e4d2;},ImageManager['weatherEffectsThunderclouds']=function(){const _0x27be5b=_0x3c3250;if(this[_0x27be5b(0x317)]&&this[_0x27be5b(0x317)][_0x27be5b(0x3de)]>=ImageManager[_0x27be5b(0x435)]){const _0x567326=this['_cached_WeatherEffects_Thunderclouds'];return _0x567326[Math[_0x27be5b(0x3a0)](Math[_0x27be5b(0x2cb)]()*_0x567326[_0x27be5b(0x3de)])];}let _0x3186a2=ColorManager[_0x27be5b(0x48b)]([Math[_0x27be5b(0x23a)](0x20)+0x10,0x18,Math[_0x27be5b(0x23a)](0x20)+0x10]),_0x48e2c1=ColorManager['arrayToHex']([Math[_0x27be5b(0x23a)](0x30)+0x20,0x30,Math[_0x27be5b(0x23a)](0x30)+0x20]),_0x4acc02=ColorManager[_0x27be5b(0x48b)]([Math[_0x27be5b(0x23a)](0x40)+0x30,0x60,Math[_0x27be5b(0x23a)](0x40)+0x30]);const _0x23e580=new Bitmap(0x3e8,0x3e8);_0x23e580[_0x27be5b(0x305)](0x1f4,0x28a,0xaf,_0x3186a2,0x10,0x14),_0x23e580['drawCloud'](0x1f4,0x1f4,0xc8,_0x4acc02,0x40,0x19),_0x23e580[_0x27be5b(0x305)](0x1f4,0x15e,0xa0,_0x48e2c1,0x10,0x14),_0x23e580[_0x27be5b(0x3a3)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x27be5b(0x465)](_0x27be5b(0x2b3));return this[_0x27be5b(0x317)]=this[_0x27be5b(0x317)]||[],this[_0x27be5b(0x317)][_0x27be5b(0x590)](_0x23e580),_0x23e580;},ImageManager['weatherEffectsRainClouds']=function(){const _0x12bec8=_0x3c3250;if(this[_0x12bec8(0x3fa)]&&this[_0x12bec8(0x3fa)][_0x12bec8(0x3de)]>=ImageManager[_0x12bec8(0x435)]){const _0x1b79f2=this[_0x12bec8(0x3fa)];return _0x1b79f2[Math[_0x12bec8(0x3a0)](Math['random']()*_0x1b79f2[_0x12bec8(0x3de)])];}const _0x3d7c2e=Math[_0x12bec8(0x23a)](0x20)+0x40,_0x4b4e37=Math[_0x12bec8(0x23a)](0x20)+0x60,_0x219107=Math[_0x12bec8(0x23a)](0x20)+0x80;let _0x2c68d6=ColorManager[_0x12bec8(0x48b)]([_0x3d7c2e,_0x3d7c2e,_0x3d7c2e]),_0x364038=ColorManager[_0x12bec8(0x48b)]([_0x4b4e37,_0x4b4e37,_0x4b4e37]),_0x183041=ColorManager['arrayToHex']([_0x219107,_0x219107,_0x219107]);const _0x510160=new Bitmap(0x1f4,0x1f4);_0x510160[_0x12bec8(0x305)](0xfa,0x15e,0x4b,_0x2c68d6,0x10,0x14),_0x510160['drawCloud'](0xfa,0xfa,0x64,_0x183041,0x40,0x19),_0x510160[_0x12bec8(0x305)](0xfa,0xfa,0x3c,_0x364038,0x10,0x14),_0x510160[_0x12bec8(0x3a3)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x12bec8(0x465)](_0x12bec8(0x41f));return this[_0x12bec8(0x3fa)]=this['_cached_WeatherEffects_RainClouds']||[],this['_cached_WeatherEffects_RainClouds']['push'](_0x510160),_0x510160;},ImageManager[_0x3c3250(0x5bc)]=function(){const _0x1a0617=_0x3c3250;if(this[_0x1a0617(0x51c)]&&this[_0x1a0617(0x51c)][_0x1a0617(0x3de)]>=ImageManager[_0x1a0617(0x435)]){const _0x292aa5=this[_0x1a0617(0x51c)];return _0x292aa5[Math[_0x1a0617(0x3a0)](Math[_0x1a0617(0x2cb)]()*_0x292aa5[_0x1a0617(0x3de)])];}const _0xc6eb77=ColorManager[_0x1a0617(0x1f9)],_0x20cbf1=ColorManager['WEATHER_CLOUD_BLUE_COLORS'],_0x456bb8=ColorManager[_0x1a0617(0x221)],_0x503fda=_0xc6eb77[Math[_0x1a0617(0x3a0)](Math['random']()*_0xc6eb77[_0x1a0617(0x3de)])],_0x2588d9=_0x20cbf1[Math[_0x1a0617(0x3a0)](Math[_0x1a0617(0x2cb)]()*_0x20cbf1[_0x1a0617(0x3de)])],_0x41f200=_0x456bb8[Math['floor'](Math[_0x1a0617(0x2cb)]()*_0x456bb8[_0x1a0617(0x3de)])],_0x480b36=new Bitmap(0x3e8,0x3e8);_0x480b36[_0x1a0617(0x305)](0x1f4,0x28a,0xaf,_0x503fda,0x10,0x14),_0x480b36['drawCloud'](0x1f4,0x1f4,0xc8,_0x41f200,0x40,0x19),_0x480b36[_0x1a0617(0x305)](0x1f4,0x15e,0xa0,_0x2588d9,0x10,0x14),_0x480b36[_0x1a0617(0x3a3)]=![];if(ImageManager[_0x1a0617(0x256)])console[_0x1a0617(0x465)](_0x1a0617(0x59c));return this[_0x1a0617(0x51c)]=this[_0x1a0617(0x51c)]||[],this[_0x1a0617(0x51c)][_0x1a0617(0x590)](_0x480b36),_0x480b36;},ImageManager[_0x3c3250(0x2b9)]=function(){const _0x329855=_0x3c3250;if(this['_cached_WeatherEffects_DustStorm']&&this[_0x329855(0x423)][_0x329855(0x3de)]>=ImageManager[_0x329855(0x435)]){const _0x364c54=this[_0x329855(0x423)];return _0x364c54[Math['floor'](Math['random']()*_0x364c54['length'])];}const _0x3b3534=ColorManager[_0x329855(0x5ab)]['clone'](),_0x34cc41=_0x3b3534[Math[_0x329855(0x3a0)](Math[_0x329855(0x2cb)]()*_0x3b3534['length'])],_0x58513e=_0x3b3534[Math['floor'](Math[_0x329855(0x2cb)]()*_0x3b3534['length'])],_0x554c28=_0x3b3534[Math['floor'](Math[_0x329855(0x2cb)]()*_0x3b3534[_0x329855(0x3de)])],_0x4e0de8=new Bitmap(0x1f4,0x1f4);_0x4e0de8['drawCloud'](0xfa,0x15e,0x4b,_0x34cc41,0x6,0x14),_0x4e0de8['drawCloud'](0xfa,0xfa,0x64,_0x554c28,0xc,0x19),_0x4e0de8[_0x329855(0x305)](0xfa,0xfa,0x3c,_0x58513e,0x6,0x14);const _0x1673fb=_0x4e0de8[_0x329855(0x45e)],_0x1e500a=_0x4e0de8[_0x329855(0x243)],_0x5d9e8d=0x2;let _0x963dd6=0x80;while(_0x963dd6--){const _0x1c1259=Math['randomInt'](_0x1673fb-_0x5d9e8d*0x2)+_0x5d9e8d,_0xc250ea=Math[_0x329855(0x23a)](_0x1e500a-_0x5d9e8d*0x2)+_0x5d9e8d,_0x54cb2c=_0x3b3534[Math[_0x329855(0x3a0)](Math[_0x329855(0x2cb)]()*_0x3b3534[_0x329855(0x3de)])],_0x252d10=Math[_0x329855(0x23a)](_0x5d9e8d)+0x1;_0x4e0de8[_0x329855(0x3ed)]=Math['randomInt'](0x40)+0xc0,_0x4e0de8[_0x329855(0x41b)](_0x1c1259,_0xc250ea,_0x252d10,_0x54cb2c);}_0x4e0de8['_customModified']=![];if(ImageManager[_0x329855(0x256)])console[_0x329855(0x465)](_0x329855(0x596));return this[_0x329855(0x423)]=this['_cached_WeatherEffects_DustStorm']||[],this[_0x329855(0x423)][_0x329855(0x590)](_0x4e0de8),_0x4e0de8;},ImageManager['weatherEffectsDustClouds']=function(){const _0x3c68e2=_0x3c3250;if(this[_0x3c68e2(0x4b7)]&&this[_0x3c68e2(0x4b7)][_0x3c68e2(0x3de)]>=ImageManager[_0x3c68e2(0x435)]){const _0x259e1f=this['_cached_WeatherEffects_DustClouds'];return _0x259e1f[Math[_0x3c68e2(0x3a0)](Math['random']()*_0x259e1f[_0x3c68e2(0x3de)])];}const _0x6e202e=ColorManager[_0x3c68e2(0x5ab)]['clone'](),_0x5dee4b=1.5,_0x4b829f=ColorManager[_0x3c68e2(0x477)](_0x6e202e[Math[_0x3c68e2(0x3a0)](Math[_0x3c68e2(0x2cb)]()*_0x6e202e[_0x3c68e2(0x3de)])],_0x5dee4b),_0x1a346f=ColorManager[_0x3c68e2(0x477)](_0x6e202e[Math['floor'](Math[_0x3c68e2(0x2cb)]()*_0x6e202e['length'])],_0x5dee4b),_0x1689d2=ColorManager[_0x3c68e2(0x477)](_0x6e202e[Math[_0x3c68e2(0x3a0)](Math['random']()*_0x6e202e[_0x3c68e2(0x3de)])],_0x5dee4b),_0x13804f=new Bitmap(0x3e8,0x3e8);_0x13804f[_0x3c68e2(0x305)](0x1f4,0x28a,0xaf,_0x4b829f,0x10,0x14),_0x13804f[_0x3c68e2(0x305)](0x1f4,0x1f4,0xc8,_0x1689d2,0x40,0x19),_0x13804f[_0x3c68e2(0x305)](0x1f4,0x15e,0xa0,_0x1a346f,0x10,0x14),_0x13804f['_customModified']=![];if(ImageManager[_0x3c68e2(0x256)])console[_0x3c68e2(0x465)](_0x3c68e2(0x3f8));return this[_0x3c68e2(0x4b7)]=this[_0x3c68e2(0x4b7)]||[],this['_cached_WeatherEffects_DustClouds'][_0x3c68e2(0x590)](_0x13804f),_0x13804f;},ImageManager['weatherEffectsSandClouds']=function(){const _0x578278=_0x3c3250;if(this[_0x578278(0x5e2)]&&this[_0x578278(0x5e2)][_0x578278(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x418e55=this[_0x578278(0x5e2)];return _0x418e55[Math[_0x578278(0x3a0)](Math['random']()*_0x418e55['length'])];}const _0x7b1dd1=ColorManager[_0x578278(0x5ab)][_0x578278(0x506)](),_0x21cda9=1.8,_0x4ae592=ColorManager['adjustHexColor'](_0x7b1dd1[Math[_0x578278(0x3a0)](Math[_0x578278(0x2cb)]()*_0x7b1dd1[_0x578278(0x3de)])],_0x21cda9),_0x5d815c=ColorManager['adjustHexColor'](_0x7b1dd1[Math[_0x578278(0x3a0)](Math['random']()*_0x7b1dd1['length'])],_0x21cda9),_0x24dbdf=ColorManager['adjustHexColor'](_0x7b1dd1[Math['floor'](Math[_0x578278(0x2cb)]()*_0x7b1dd1[_0x578278(0x3de)])],_0x21cda9),_0x5b1f5c=new Bitmap(0x3e8,0x3e8);_0x5b1f5c['drawCloud'](0x1f4,0x28a,0xaf,_0x4ae592,0x10,0x14),_0x5b1f5c[_0x578278(0x305)](0x1f4,0x1f4,0xc8,_0x24dbdf,0x40,0x19),_0x5b1f5c[_0x578278(0x305)](0x1f4,0x15e,0xa0,_0x5d815c,0x10,0x14),_0x5b1f5c[_0x578278(0x3a3)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x578278(0x465)]('sandclouds');return this[_0x578278(0x5e2)]=this['_cached_WeatherEffects_SandClouds']||[],this[_0x578278(0x5e2)]['push'](_0x5b1f5c),_0x5b1f5c;},ImageManager[_0x3c3250(0x455)]=function(){const _0x14a5f6=_0x3c3250;if(this[_0x14a5f6(0x462)]&&this['_cached_WeatherEffects_Pollen'][_0x14a5f6(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x24eaa8=this['_cached_WeatherEffects_Pollen'];return _0x24eaa8[Math[_0x14a5f6(0x3a0)](Math['random']()*_0x24eaa8[_0x14a5f6(0x3de)])];}const _0x3ebb42=ColorManager[_0x14a5f6(0x3d1)][_0x14a5f6(0x506)](),_0x8ddb0e=0.8,_0x3310e6=ColorManager[_0x14a5f6(0x477)](_0x3ebb42[Math[_0x14a5f6(0x3a0)](Math['random']()*_0x3ebb42[_0x14a5f6(0x3de)])],_0x8ddb0e),_0xdeb71b=ColorManager[_0x14a5f6(0x477)](_0x3ebb42[Math[_0x14a5f6(0x3a0)](Math['random']()*_0x3ebb42[_0x14a5f6(0x3de)])],_0x8ddb0e),_0x5580c6=ColorManager[_0x14a5f6(0x477)](_0x3ebb42[Math[_0x14a5f6(0x3a0)](Math['random']()*_0x3ebb42['length'])],_0x8ddb0e),_0x26f6ac=new Bitmap(0x1f4,0x1f4);_0x26f6ac[_0x14a5f6(0x305)](0xfa,0x15e,0x4b,_0x3310e6,0x4,0x14),_0x26f6ac['drawCloud'](0xfa,0xfa,0x64,_0x5580c6,0x8,0x19),_0x26f6ac[_0x14a5f6(0x305)](0xfa,0xfa,0x3c,_0xdeb71b,0x4,0x14);const _0x4645ca=_0x26f6ac['width'],_0x3da822=_0x26f6ac['height'],_0x456e22=0x2;let _0xbf8b5f=0x20;while(_0xbf8b5f--){const _0x5be8da=Math[_0x14a5f6(0x23a)](_0x4645ca-_0x456e22*0x2)+_0x456e22,_0x529285=Math[_0x14a5f6(0x23a)](_0x3da822-_0x456e22*0x2)+_0x456e22;let _0x54d61c=_0x3ebb42[Math['floor'](Math[_0x14a5f6(0x2cb)]()*_0x3ebb42[_0x14a5f6(0x3de)])];_0x54d61c=ColorManager[_0x14a5f6(0x477)](_0x54d61c,_0x8ddb0e);const _0x28e0fc=Math[_0x14a5f6(0x23a)](_0x456e22)+0x1;_0x26f6ac[_0x14a5f6(0x3ed)]=Math['randomInt'](0x40)+0xa0,_0x26f6ac[_0x14a5f6(0x41b)](_0x5be8da,_0x529285,_0x28e0fc,_0x54d61c);}_0x26f6ac[_0x14a5f6(0x3a3)]=![];if(ImageManager[_0x14a5f6(0x256)])console[_0x14a5f6(0x465)](_0x14a5f6(0x314));return this[_0x14a5f6(0x462)]=this['_cached_WeatherEffects_Pollen']||[],this[_0x14a5f6(0x462)]['push'](_0x26f6ac),_0x26f6ac;},ImageManager[_0x3c3250(0x2f2)]=function(){const _0x5d9447=_0x3c3250;if(this[_0x5d9447(0x400)]&&this[_0x5d9447(0x400)][_0x5d9447(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x479852=this['_cached_WeatherEffects_ToxicGas'];return _0x479852[Math[_0x5d9447(0x3a0)](Math['random']()*_0x479852[_0x5d9447(0x3de)])];}const _0x49cf2b=_0x5d9447(0x3e8),_0x4cb161=0.75,_0x1cddec=ColorManager['adjustHexColor'](_0x49cf2b,_0x4cb161),_0x3f9708=ColorManager[_0x5d9447(0x477)](_0x1cddec,_0x4cb161),_0x2f4918=ColorManager['adjustHexColor'](_0x3f9708,_0x4cb161),_0x4dd36b=new Bitmap(0x3e8,0x3e8);_0x4dd36b['drawCloud'](0x1f4,0x28a,0xaf,_0x2f4918,0x10,0x14),_0x4dd36b['drawCloud'](0x1f4,0x1f4,0xc8,_0x1cddec,0x40,0x19),_0x4dd36b[_0x5d9447(0x305)](0x1f4,0x15e,0xa0,_0x3f9708,0x10,0x14),_0x4dd36b['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x5d9447(0x465)]('toxicgas');return this[_0x5d9447(0x400)]=this[_0x5d9447(0x400)]||[],this[_0x5d9447(0x400)][_0x5d9447(0x590)](_0x4dd36b),_0x4dd36b;},ImageManager[_0x3c3250(0x557)]=function(){const _0x58fba=_0x3c3250;if(this['_cached_WeatherEffects_PastelBrume']&&ColorManager[_0x58fba(0x277)][_0x58fba(0x3de)]<=0x0){const _0x53babb=this[_0x58fba(0x479)];return _0x53babb[Math[_0x58fba(0x3a0)](Math[_0x58fba(0x2cb)]()*_0x53babb['length'])];}const _0xd4fe4d=ColorManager[_0x58fba(0x277)][_0x58fba(0x5d1)](),_0x47f8b4=0.85,_0x2c12a7=ColorManager[_0x58fba(0x477)](_0xd4fe4d,_0x47f8b4),_0x18987d=ColorManager[_0x58fba(0x477)](_0x2c12a7,_0x47f8b4),_0x5adbd3=ColorManager[_0x58fba(0x477)](_0x18987d,_0x47f8b4),_0x41ba1f=new Bitmap(0x3e8,0x3e8);_0x41ba1f[_0x58fba(0x305)](0x1f4,0x28a,0xaf,_0x5adbd3,0x10,0x14),_0x41ba1f[_0x58fba(0x305)](0x1f4,0x1f4,0xc8,_0x2c12a7,0x40,0x19),_0x41ba1f[_0x58fba(0x305)](0x1f4,0x15e,0xa0,_0x18987d,0x10,0x14),_0x41ba1f[_0x58fba(0x3a3)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x58fba(0x465)](_0x58fba(0x574));return this[_0x58fba(0x479)]=this[_0x58fba(0x479)]||[],this[_0x58fba(0x479)]['push'](_0x41ba1f),_0x41ba1f;},ImageManager[_0x3c3250(0x2bd)]=function(){const _0x2bea04=_0x3c3250;if(this['_cached_WeatherEffects_RainbowClouds']&&ColorManager[_0x2bea04(0x325)][_0x2bea04(0x3de)]<=0x0){const _0x40c496=this[_0x2bea04(0x2a7)];return _0x40c496[Math[_0x2bea04(0x3a0)](Math[_0x2bea04(0x2cb)]()*_0x40c496[_0x2bea04(0x3de)])];}const _0x3a4281=ColorManager[_0x2bea04(0x325)][_0x2bea04(0x5d1)](),_0x426bf0=0.85,_0x4432bc=ColorManager[_0x2bea04(0x477)](_0x3a4281,_0x426bf0),_0xb3d0c6=ColorManager[_0x2bea04(0x477)](_0x4432bc,_0x426bf0),_0x494d91=ColorManager[_0x2bea04(0x477)](_0xb3d0c6,_0x426bf0),_0x33ce65=new Bitmap(0x1f4,0x1f4);_0x33ce65[_0x2bea04(0x305)](0xfa,0x15e,0x4b,_0x494d91,0x10,0x14),_0x33ce65[_0x2bea04(0x305)](0xfa,0xfa,0x64,_0x4432bc,0x40,0x19),_0x33ce65['drawCloud'](0xfa,0xfa,0x3c,_0xb3d0c6,0x10,0x14),_0x33ce65[_0x2bea04(0x3a3)]=![];if(ImageManager[_0x2bea04(0x256)])console[_0x2bea04(0x465)](_0x2bea04(0x3ca));return this[_0x2bea04(0x2a7)]=this[_0x2bea04(0x2a7)]||[],this['_cached_WeatherEffects_RainbowClouds'][_0x2bea04(0x590)](_0x33ce65),_0x33ce65;},ImageManager['weatherEffectsRainbowOrbs']=function(){const _0x1fdb35=_0x3c3250;if(this[_0x1fdb35(0x264)]&&ColorManager[_0x1fdb35(0x494)][_0x1fdb35(0x3de)]<=0x0){const _0x571069=this[_0x1fdb35(0x264)];return _0x571069[Math[_0x1fdb35(0x3a0)](Math['random']()*_0x571069[_0x1fdb35(0x3de)])];}const _0x55c53e=ColorManager['WEATHER_RAINBOW_ORB_COLORS'][_0x1fdb35(0x5d1)](),_0x4e8dc2=0x20,_0x1f7f7d=new Bitmap(_0x4e8dc2,_0x4e8dc2),_0x2fb609=Math['floor'](_0x4e8dc2/0x2);_0x1f7f7d[_0x1fdb35(0x567)](_0x2fb609,_0x2fb609,_0x2fb609,0x168,_0x55c53e,0x0,0x1,0x0),_0x1f7f7d['fillRect'](_0x2fb609-0x1,_0x2fb609-0x1,0x2,0x2,_0x55c53e),_0x1f7f7d[_0x1fdb35(0x3a3)]=![];if(ImageManager[_0x1fdb35(0x256)])console[_0x1fdb35(0x465)](_0x1fdb35(0x3fb));return this['_cached_WeatherEffects_RainbowOrbs']=this[_0x1fdb35(0x264)]||[],this[_0x1fdb35(0x264)][_0x1fdb35(0x590)](_0x1f7f7d),_0x1f7f7d;},ImageManager[_0x3c3250(0x5f0)]=function(){const _0x4066d4=_0x3c3250;if(this['_cached_WeatherEffects_LightOrbs']&&this['_cached_WeatherEffects_LightOrbs']['length']>=ImageManager[_0x4066d4(0x435)]){const _0x522baa=this[_0x4066d4(0x361)];return _0x522baa[Math[_0x4066d4(0x3a0)](Math[_0x4066d4(0x2cb)]()*_0x522baa[_0x4066d4(0x3de)])];}const _0x288673=ColorManager[_0x4066d4(0x40d)],_0x30c1db=_0x288673[Math[_0x4066d4(0x3a0)](Math[_0x4066d4(0x2cb)]()*_0x288673[_0x4066d4(0x3de)])];let _0xfa0137=Math[_0x4066d4(0x23a)](0x10)+0x10;if(_0xfa0137%0x2!==0x0)_0xfa0137+=0x1;const _0xabd509=new Bitmap(_0xfa0137,_0xfa0137),_0xed98e3=Math[_0x4066d4(0x3a0)](_0xfa0137/0x2);_0xabd509[_0x4066d4(0x567)](_0xed98e3,_0xed98e3,_0xed98e3,0x168,_0x30c1db,0x0,0x1,0x0),_0xabd509[_0x4066d4(0x3bc)](_0xed98e3-0x1,_0xed98e3-0x1,0x2,0x2,_0x30c1db),_0xabd509[_0x4066d4(0x3a3)]=![];if(ImageManager[_0x4066d4(0x256)])console[_0x4066d4(0x465)](_0x4066d4(0x5dd));return this[_0x4066d4(0x361)]=this['_cached_WeatherEffects_LightOrbs']||[],this['_cached_WeatherEffects_LightOrbs'][_0x4066d4(0x590)](_0xabd509),_0xabd509;},ImageManager[_0x3c3250(0x207)]=function(){const _0x269c0b=_0x3c3250;if(this[_0x269c0b(0x2c9)]&&this['_cached_WeatherEffects_DarkOrbs'][_0x269c0b(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x35914c=this[_0x269c0b(0x2c9)];return _0x35914c[Math[_0x269c0b(0x3a0)](Math[_0x269c0b(0x2cb)]()*_0x35914c[_0x269c0b(0x3de)])];}const _0x166b88=ColorManager[_0x269c0b(0x31c)],_0xb732ad=_0x166b88[Math[_0x269c0b(0x3a0)](Math['random']()*_0x166b88[_0x269c0b(0x3de)])];let _0x43330e=Math[_0x269c0b(0x23a)](0x10)+0x10;if(_0x43330e%0x2!==0x0)_0x43330e+=0x1;const _0x2cab77=new Bitmap(_0x43330e,_0x43330e),_0x351e4c=Math[_0x269c0b(0x3a0)](_0x43330e/0x2);_0x2cab77[_0x269c0b(0x567)](_0x351e4c,_0x351e4c,_0x351e4c,0x168,_0xb732ad,0x0,0x1,0x0),_0x2cab77[_0x269c0b(0x3bc)](_0x351e4c-0x1,_0x351e4c-0x1,0x2,0x2,_0xb732ad),_0x2cab77[_0x269c0b(0x3a3)]=![];if(ImageManager[_0x269c0b(0x256)])console[_0x269c0b(0x465)](_0x269c0b(0x402));return this[_0x269c0b(0x2c9)]=this[_0x269c0b(0x2c9)]||[],this[_0x269c0b(0x2c9)][_0x269c0b(0x590)](_0x2cab77),_0x2cab77;},ImageManager['weatherEffectsDiamondDust']=function(){const _0x2ba053=_0x3c3250;if(this['_cached_WeatherEffects_DiamondDust']&&this[_0x2ba053(0x522)][_0x2ba053(0x3de)]>=ImageManager[_0x2ba053(0x435)]){const _0x4c0df2=this[_0x2ba053(0x522)];return _0x4c0df2[Math[_0x2ba053(0x3a0)](Math[_0x2ba053(0x2cb)]()*_0x4c0df2[_0x2ba053(0x3de)])];}const _0x15c4d4=ColorManager[_0x2ba053(0x3c8)],_0x38b1ec=1.3;let _0x2ea6a8=ColorManager[_0x2ba053(0x477)](_0x15c4d4[Math[_0x2ba053(0x3a0)](Math[_0x2ba053(0x2cb)]()*_0x15c4d4[_0x2ba053(0x3de)])],_0x38b1ec),_0x4931c4=ColorManager[_0x2ba053(0x477)](_0x15c4d4[Math[_0x2ba053(0x3a0)](Math['random']()*_0x15c4d4[_0x2ba053(0x3de)])],_0x38b1ec),_0x43a7c8=ColorManager['adjustHexColor'](_0x15c4d4[Math['floor'](Math['random']()*_0x15c4d4[_0x2ba053(0x3de)])],_0x38b1ec);const _0x3772c4=new Bitmap(0x1f4,0x1f4);_0x3772c4[_0x2ba053(0x305)](0xfa,0x15e,0x4b,_0x2ea6a8,0x4,0x14),_0x3772c4['drawCloud'](0xfa,0xfa,0x64,_0x43a7c8,0x8,0x19),_0x3772c4[_0x2ba053(0x305)](0xfa,0xfa,0x3c,_0x4931c4,0x4,0x14);const _0x4492c2=_0x3772c4[_0x2ba053(0x45e)],_0x1d47a3=_0x3772c4[_0x2ba053(0x243)],_0x561341=0x2;let _0x42394d=0x20;while(_0x42394d--){const _0x494dbd=Math[_0x2ba053(0x23a)](_0x4492c2-_0x561341*0x2)+_0x561341,_0x3d2120=Math[_0x2ba053(0x23a)](_0x1d47a3-_0x561341*0x2)+_0x561341;let _0x4cc732=_0x15c4d4[Math[_0x2ba053(0x3a0)](Math[_0x2ba053(0x2cb)]()*_0x15c4d4['length'])];_0x4cc732=ColorManager[_0x2ba053(0x477)](_0x4cc732,_0x38b1ec);const _0x5517e6=Math[_0x2ba053(0x23a)](_0x561341)+0x1;_0x3772c4[_0x2ba053(0x3ed)]=Math[_0x2ba053(0x23a)](0x40)+0xa0,_0x3772c4[_0x2ba053(0x41b)](_0x494dbd,_0x3d2120,_0x5517e6,_0x4cc732);}const _0x45fd6f=_0x561341*0x3,_0x50eaa4=_0x45fd6f/0x2;_0x42394d=0x8;while(_0x42394d--){const _0x19499d=Math['randomInt'](_0x4492c2-_0x45fd6f*0x2)+_0x45fd6f,_0x10f83b=Math['randomInt'](_0x1d47a3-_0x45fd6f*0x2)+_0x45fd6f;let _0x15c51a=_0x15c4d4[Math['floor'](Math['random']()*_0x15c4d4[_0x2ba053(0x3de)])];_0x15c51a=ColorManager[_0x2ba053(0x477)](_0x15c51a,_0x38b1ec),_0x3772c4['paintOpacity']=Math[_0x2ba053(0x23a)](0x40)+0xa0,_0x3772c4[_0x2ba053(0x3fc)](_0x19499d,_0x10f83b,_0x15c51a,_0x15c51a,0x4,_0x45fd6f,_0x50eaa4);}_0x3772c4[_0x2ba053(0x3a3)]=![];if(ImageManager[_0x2ba053(0x256)])console['log'](_0x2ba053(0x212));return this[_0x2ba053(0x522)]=this[_0x2ba053(0x522)]||[],this[_0x2ba053(0x522)]['push'](_0x3772c4),_0x3772c4;},ImageManager['weatherEffectsCrumblingCave']=function(){const _0x596d52=_0x3c3250;if(this[_0x596d52(0x248)]&&this[_0x596d52(0x248)][_0x596d52(0x3de)]>=ImageManager[_0x596d52(0x435)]){const _0x28ed0a=this[_0x596d52(0x248)];return _0x28ed0a[Math[_0x596d52(0x3a0)](Math['random']()*_0x28ed0a[_0x596d52(0x3de)])];}const _0x30ead1=ColorManager['WEATHER_EARTH_COLORS'],_0x17bf61=_0x30ead1[Math[_0x596d52(0x3a0)](Math[_0x596d52(0x2cb)]()*_0x30ead1[_0x596d52(0x3de)])],_0x7afd04=_0x30ead1[Math[_0x596d52(0x3a0)](Math[_0x596d52(0x2cb)]()*_0x30ead1[_0x596d52(0x3de)])],_0x3ba133=_0x30ead1[Math['floor'](Math[_0x596d52(0x2cb)]()*_0x30ead1[_0x596d52(0x3de)])],_0x4d0c4f=new Bitmap(0x1f4,0x1f4);_0x4d0c4f[_0x596d52(0x305)](0xfa,0x15e,0x4b,_0x17bf61,0x4,0x14),_0x4d0c4f['drawCloud'](0xfa,0xfa,0x64,_0x3ba133,0x8,0x19),_0x4d0c4f['drawCloud'](0xfa,0xfa,0x3c,_0x7afd04,0x4,0x14);const _0x3095ac=_0x4d0c4f[_0x596d52(0x45e)],_0x40c36d=_0x4d0c4f['height'],_0x4cf7a3=0x4;let _0x26db61=0x80;while(_0x26db61--){const _0x3e89a3=Math['randomInt'](_0x3095ac-_0x4cf7a3*0x2)+_0x4cf7a3,_0x414809=Math[_0x596d52(0x23a)](_0x40c36d-_0x4cf7a3*0x2)+_0x4cf7a3;let _0x2bb0cd=_0x30ead1[Math[_0x596d52(0x3a0)](Math[_0x596d52(0x2cb)]()*_0x30ead1[_0x596d52(0x3de)])];const _0x24e2f4=Math[_0x596d52(0x23a)](_0x4cf7a3)+0x1;_0x4d0c4f[_0x596d52(0x3ed)]=Math[_0x596d52(0x23a)](0x40)+0xa0,_0x4d0c4f[_0x596d52(0x41b)](_0x3e89a3,_0x414809,_0x24e2f4,_0x2bb0cd);}_0x4d0c4f['_customModified']=![];if(ImageManager[_0x596d52(0x256)])console[_0x596d52(0x465)](_0x596d52(0x2ca));return this[_0x596d52(0x248)]=this[_0x596d52(0x248)]||[],this[_0x596d52(0x248)][_0x596d52(0x590)](_0x4d0c4f),_0x4d0c4f;},ImageManager[_0x3c3250(0x4ca)]=function(){const _0x578c07=_0x3c3250;if(this['_cached_WeatherEffects_Aurora']&&this[_0x578c07(0x271)][_0x578c07(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']*0x5){const _0x37f83f=this['_cached_WeatherEffects_Aurora'];return _0x37f83f[Math[_0x578c07(0x3a0)](Math[_0x578c07(0x2cb)]()*_0x37f83f[_0x578c07(0x3de)])];}const _0x530436=Math[_0x578c07(0x23a)](0xc0)+0x40,_0x3992d1=Math['randomInt'](0xc0)+0x40,_0x204e99=Math[_0x578c07(0x23a)](0xc0)+0x40,_0x3a04ae=_0x578c07(0x44e)[_0x578c07(0x528)](_0x530436,_0x3992d1,_0x204e99),_0x3fd4a6='rgba(%1,\x20%2,\x20%3,\x201)'[_0x578c07(0x528)](_0x530436,_0x3992d1,_0x204e99),_0x59f608=new Bitmap(0x1f4,0x1f4),_0x1c9ef7=_0x59f608['width'],_0x2a514b=_0x59f608[_0x578c07(0x243)],_0x22e3a3=Math['randomInt'](0xf4240),_0x327d30=Math['random']()*0.03+0.02;for(let _0x260714=0x0;_0x260714<_0x2a514b;_0x260714++){const _0x6e33a6=(_0x260714+_0x22e3a3)*_0x327d30;let _0x4d9ce3=_0x1c9ef7-Math['floor'](Math['cos'](_0x6e33a6)*0xa)-0x28;const _0x266540=_0x260714;_0x59f608[_0x578c07(0x3ed)]=(0x1-Math[_0x578c07(0x4bc)](_0x260714-_0x2a514b/0x2)/(_0x2a514b/0x2))*0xc0,_0x59f608[_0x578c07(0x4ad)](_0x4d9ce3,_0x266540,Math[_0x578c07(0x23a)](0x14)+0xa,0x1,_0x3fd4a6,_0x3a04ae);let _0x51ec3f=Math[_0x578c07(0x5eb)](Math[_0x578c07(0x4cd)]((_0x260714+_0x22e3a3)*_0x327d30)*0x5)+0xa;_0x4d9ce3-=_0x51ec3f,_0x59f608['gradientFillRect'](_0x4d9ce3,_0x266540,_0x51ec3f,0x1,_0x3fd4a6,_0x3fd4a6),_0x51ec3f=Math[_0x578c07(0x5eb)](Math[_0x578c07(0x2e8)]((_0x260714+_0x22e3a3)*_0x327d30)*0x3c)+0xa0,_0x4d9ce3-=_0x51ec3f;const _0x5ac9c1=Math[_0x578c07(0x23a)](0x3c);_0x4d9ce3+=_0x5ac9c1,_0x59f608[_0x578c07(0x4ad)](_0x4d9ce3,_0x266540,_0x51ec3f-_0x5ac9c1,0x1,_0x3a04ae,_0x3fd4a6);}_0x59f608[_0x578c07(0x3a3)]=![];if(ImageManager[_0x578c07(0x256)])console[_0x578c07(0x465)](_0x578c07(0x22b));return this[_0x578c07(0x271)]=this['_cached_WeatherEffects_Aurora']||[],this[_0x578c07(0x271)][_0x578c07(0x590)](_0x59f608),_0x59f608;},ImageManager[_0x3c3250(0x1f2)]=function(){const _0x3bc9af=_0x3c3250;if(this[_0x3bc9af(0x5b7)]&&this['_cached_WeatherEffects_ShootingStars'][_0x3bc9af(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']*0x3){const _0x3f2586=this[_0x3bc9af(0x5b7)];return _0x3f2586[Math['floor'](Math['random']()*_0x3f2586['length'])];}const _0x25002b=Math[_0x3bc9af(0x23a)](0x80)+0x80,_0x56ec92=Math[_0x3bc9af(0x23a)](0x80)+0x80,_0x4ce27e=Math[_0x3bc9af(0x23a)](0x80)+0x80,_0xd918de=_0x3bc9af(0x44e)[_0x3bc9af(0x528)](_0x25002b,_0x56ec92,_0x4ce27e),_0x322afd=_0x3bc9af(0x2a3)['format'](_0x25002b,_0x56ec92,_0x4ce27e),_0x4fa39c=Math['randomInt'](0x32)+0x32,_0x40f4fe=0x4,_0x704b4a=new Bitmap(_0x4fa39c*0x2,_0x40f4fe);_0x704b4a[_0x3bc9af(0x4ad)](0x0,0x0,_0x4fa39c,_0x40f4fe,_0xd918de,_0x322afd),_0x704b4a[_0x3bc9af(0x3a3)]=![];if(ImageManager[_0x3bc9af(0x256)])console['log'](_0x3bc9af(0x3d6));return this[_0x3bc9af(0x5b7)]=this[_0x3bc9af(0x5b7)]||[],this[_0x3bc9af(0x5b7)][_0x3bc9af(0x590)](_0x704b4a),_0x704b4a;},ImageManager[_0x3c3250(0x553)]=function(){const _0x259519=_0x3c3250;if(this[_0x259519(0x5f5)])return this[_0x259519(0x5f5)];const _0x413808=0x20,_0x7d614d=new Bitmap(_0x413808,_0x413808),_0x48a793=_0x259519(0x513);_0x7d614d[_0x259519(0x3fc)](_0x413808/0x2,_0x413808/0x2,_0x48a793,_0x48a793,0x4,_0x413808/0x2,_0x413808/0x8),_0x7d614d['_customModified']=![];if(ImageManager[_0x259519(0x256)])console['log'](_0x259519(0x49d));return this[_0x259519(0x5f5)]=_0x7d614d,_0x7d614d;},ImageManager[_0x3c3250(0x430)]=function(){const _0x5be5b7=_0x3c3250;if(this[_0x5be5b7(0x45a)]&&this[_0x5be5b7(0x45a)]['length']>=ImageManager[_0x5be5b7(0x435)]){const _0x2f896f=this[_0x5be5b7(0x45a)];return _0x2f896f[Math[_0x5be5b7(0x3a0)](Math['random']()*_0x2f896f[_0x5be5b7(0x3de)])];}const _0x57bf2b=new Bitmap(0x1f4,0x1f4),_0x41b6af=_0x5be5b7(0x452),_0x11abc0=_0x5be5b7(0x366),_0x3d847f=_0x57bf2b[_0x5be5b7(0x45e)],_0x48c860=_0x57bf2b['height'],_0x263253=0x3c,_0x2cb149=_0x263253/0x2,_0x19c3ef=0x2;let _0x20d34c=0x10;while(_0x20d34c--){const _0x50533d=Math['randomInt'](_0x3d847f-_0x263253)+_0x263253,_0x134522=Math[_0x5be5b7(0x23a)](_0x48c860-_0x19c3ef)+_0x19c3ef;_0x57bf2b[_0x5be5b7(0x3ed)]=Math[_0x5be5b7(0x23a)](0x40)+0xc0,_0x57bf2b['gradientFillRect'](_0x50533d,_0x134522,_0x2cb149,0x2,_0x41b6af,_0x11abc0),_0x57bf2b[_0x5be5b7(0x3bc)](_0x50533d+_0x2cb149,_0x134522,_0x2cb149,0x2,_0x11abc0);}_0x57bf2b[_0x5be5b7(0x3a3)]=![];if(ImageManager[_0x5be5b7(0x256)])console[_0x5be5b7(0x465)](_0x5be5b7(0x249));return this[_0x5be5b7(0x45a)]=this[_0x5be5b7(0x45a)]||[],this[_0x5be5b7(0x45a)][_0x5be5b7(0x590)](_0x57bf2b),_0x57bf2b;},ImageManager[_0x3c3250(0x275)]=function(){const _0x47a5ee=_0x3c3250;if(this[_0x47a5ee(0x369)]&&this[_0x47a5ee(0x369)][_0x47a5ee(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x597ea1=this['_cached_WeatherEffects_BloodRain'];return _0x597ea1[Math[_0x47a5ee(0x3a0)](Math['random']()*_0x597ea1[_0x47a5ee(0x3de)])];}const _0x1a5008=new Bitmap(0x1f4,0x1f4),_0x1c2155=_0x47a5ee(0x5f6),_0x4ca829='rgba(255,64,64,1)',_0x5cf13e=_0x1a5008['width'],_0x42c03f=_0x1a5008['height'],_0x16ddeb=0x64,_0x47c529=_0x16ddeb/0x2,_0x48818c=0x3;let _0x5b92ef=0x10;while(_0x5b92ef--){const _0x864b64=Math[_0x47a5ee(0x23a)](_0x5cf13e-_0x16ddeb)+_0x16ddeb,_0x213eb6=Math['randomInt'](_0x42c03f-_0x48818c)+_0x48818c;_0x1a5008['paintOpacity']=Math['randomInt'](0x40)+0xc0,_0x1a5008[_0x47a5ee(0x4ad)](_0x864b64,_0x213eb6,_0x47c529,0x2,_0x1c2155,_0x4ca829),_0x1a5008[_0x47a5ee(0x3bc)](_0x864b64+_0x47c529,_0x213eb6,_0x47c529,0x2,_0x4ca829);}_0x1a5008[_0x47a5ee(0x3a3)]=![];if(ImageManager[_0x47a5ee(0x256)])console['log'](_0x47a5ee(0x5f2));return this[_0x47a5ee(0x369)]=this[_0x47a5ee(0x369)]||[],this[_0x47a5ee(0x369)][_0x47a5ee(0x590)](_0x1a5008),_0x1a5008;},ImageManager[_0x3c3250(0x460)]=function(){const _0x5801fd=_0x3c3250;if(this[_0x5801fd(0x3e3)]&&ColorManager[_0x5801fd(0x532)][_0x5801fd(0x3de)]<=0x0){const _0x541e74=this[_0x5801fd(0x3e3)];return _0x541e74[Math[_0x5801fd(0x3a0)](Math[_0x5801fd(0x2cb)]()*_0x541e74[_0x5801fd(0x3de)])];}this['_cached_WeatherEffects_Confetti']=this[_0x5801fd(0x3e3)]||[];const _0x16c94d=ColorManager[_0x5801fd(0x532)]['pop'](),_0x1b235d='#000000';{const _0x123366=0x8,_0x151e5e=new Bitmap(_0x123366*0x2,_0x123366*0x2);_0x151e5e[_0x5801fd(0x41b)](_0x123366,_0x123366,_0x123366,_0x1b235d),_0x151e5e[_0x5801fd(0x41b)](_0x123366,_0x123366,_0x123366-0x1,_0x16c94d),_0x151e5e[_0x5801fd(0x3a3)]=![],this[_0x5801fd(0x3e3)][_0x5801fd(0x590)](_0x151e5e);}{const _0xc84b32=new Bitmap(0x10,0x8);_0xc84b32['fillRect'](0x0,0x0,0x10,0x8,_0x1b235d),_0xc84b32[_0x5801fd(0x3bc)](0x1,0x1,0xe,0x6,_0x16c94d),_0xc84b32[_0x5801fd(0x3a3)]=![],this[_0x5801fd(0x3e3)][_0x5801fd(0x590)](_0xc84b32);}const _0x50cae9=new Bitmap(0x10,0x10);_0x50cae9['drawStar'](0x8,0x8,_0x1b235d,_0x1b235d,0x5,0x8,0x4),_0x50cae9[_0x5801fd(0x3fc)](0x8,0x8,_0x16c94d,_0x16c94d,0x5,0x7,0x3),_0x50cae9[_0x5801fd(0x3a3)]=![];if(ImageManager[_0x5801fd(0x256)])console[_0x5801fd(0x465)](_0x5801fd(0x286));return this[_0x5801fd(0x3e3)]['push'](_0x50cae9),_0x50cae9;},ImageManager['weatherEffectsSunBeams']=function(){const _0x3b7948=_0x3c3250;if(this[_0x3b7948(0x3a1)]&&ColorManager[_0x3b7948(0x327)]['length']<=0x0){const _0x3aa6e9=this[_0x3b7948(0x3a1)];return _0x3aa6e9[Math[_0x3b7948(0x3a0)](Math['random']()*_0x3aa6e9['length'])];}const _0x3dadc3=ColorManager['WEATHER_SUNBEAM_COLORS']['pop'](),_0x13a8f0=new Bitmap(0x3e8,0x3e8),_0x1186d1=_0x13a8f0[_0x3b7948(0x45e)]/0x2;return _0x13a8f0[_0x3b7948(0x567)](_0x1186d1,_0x1186d1,_0x1186d1,0x168,_0x3dadc3,0x0,0x1,0x0),_0x13a8f0[_0x3b7948(0x3a3)]=![],this[_0x3b7948(0x3a1)]=this[_0x3b7948(0x3a1)]||[],this['_cached_WeatherEffects_SunBeam'][_0x3b7948(0x590)](_0x13a8f0),_0x13a8f0;},ImageManager['weatherEffectsPrismBeams']=function(){const _0x145ece=_0x3c3250;if(this[_0x145ece(0x48c)]&&ColorManager[_0x145ece(0x3cb)][_0x145ece(0x3de)]<=0x0){const _0x411d8f=this[_0x145ece(0x48c)];return _0x411d8f[Math[_0x145ece(0x3a0)](Math[_0x145ece(0x2cb)]()*_0x411d8f[_0x145ece(0x3de)])];}const _0x1dad38=ColorManager['WEATHER_PRISMBEAM_COLORS']['pop'](),_0x5b4fde=new Bitmap(0x3e8,0x3e8),_0xad6375=_0x5b4fde['width']/0x2;return _0x5b4fde[_0x145ece(0x567)](_0xad6375,_0xad6375,_0xad6375,0x168,_0x1dad38,0x0,0x1,0x0),_0x5b4fde['_customModified']=![],this[_0x145ece(0x48c)]=this[_0x145ece(0x48c)]||[],this['_cached_WeatherEffects_PrismBeams'][_0x145ece(0x590)](_0x5b4fde),_0x5b4fde;},ImageManager[_0x3c3250(0x517)]=function(){const _0x49f450=_0x3c3250;if(this[_0x49f450(0x2ae)]&&ColorManager[_0x49f450(0x2f0)][_0x49f450(0x3de)]<=0x0){const _0x1bb821=this['_cached_WeatherEffects_ArcticBeams'];return _0x1bb821[Math[_0x49f450(0x3a0)](Math[_0x49f450(0x2cb)]()*_0x1bb821[_0x49f450(0x3de)])];}let _0x2c187e=ColorManager[_0x49f450(0x2f0)]['pop']();_0x2c187e=ColorManager[_0x49f450(0x477)](_0x2c187e,1.2);const _0x779305=new Bitmap(0x3e8,0x3e8),_0x50b97a=_0x779305[_0x49f450(0x45e)]/0x2;return _0x779305[_0x49f450(0x567)](_0x50b97a,_0x50b97a,_0x50b97a,0x168,_0x2c187e,0x0,0x1,0x0),_0x779305['_customModified']=![],this[_0x49f450(0x2ae)]=this[_0x49f450(0x2ae)]||[],this['_cached_WeatherEffects_ArcticBeams'][_0x49f450(0x590)](_0x779305),_0x779305;},ImageManager[_0x3c3250(0x2ab)]=function(){const _0x876802=_0x3c3250;if(this[_0x876802(0x5ce)]&&this[_0x876802(0x5ce)][_0x876802(0x3de)]>=ImageManager[_0x876802(0x435)]){const _0x232f68=this['_cached_WeatherEffects_LensFlare'];return _0x232f68[Math[_0x876802(0x3a0)](Math['random']()*_0x232f68['length'])];}const _0x52ceda=Math[_0x876802(0x55f)]($dataSystem[_0x876802(0x421)]['screenWidth'],$dataSystem[_0x876802(0x421)][_0x876802(0x432)])||0x1,_0x2d6a7b=Math[_0x876802(0x5e1)](_0x52ceda*_0x52ceda+_0x52ceda*_0x52ceda),_0xa30e7e=Math[_0x876802(0x23a)](_0x2d6a7b*0x1/0x3)+_0x2d6a7b*0x2/0x3,_0x454f9c=Math[_0x876802(0x23a)](0xc8)+0x64,_0x51baed=new Bitmap(_0xa30e7e,_0x454f9c*0x2);_0x51baed[_0x876802(0x3bc)](0x0,0x0,_0xa30e7e,_0xa30e7e,'#000000');const _0x4c08dc=_0x51baed[_0x876802(0x45e)]/0x2,_0x3684c6=_0x51baed['height'],_0x197e0a=_0x4c08dc-_0x454f9c,_0x3d2177=_0x3684c6/0x2;let _0x3a41c4=Math[_0x876802(0x23a)](0xa)+0x6;const _0x4bb3fa=_0x197e0a/_0x3a41c4;for(let _0x587a0e=0x0;_0x587a0e<_0x3a41c4;_0x587a0e++){if(Math[_0x876802(0x2cb)]()<0.4-_0x587a0e*0.04)continue;let _0x3eb145=Math[_0x876802(0x23a)](_0x454f9c*(_0x587a0e*0.75)/_0x3a41c4)+_0x454f9c*0x1/_0x3a41c4;const _0x3ce209=_0x4c08dc+_0x587a0e*_0x4bb3fa;_0x51baed[_0x876802(0x3ed)]=Math[_0x876802(0x23a)](0x40)+0xc0,_0x51baed[_0x876802(0x5c5)](_0x3ce209,_0x3d2177,_0x3eb145);}const _0x8ab477=_0xa30e7e-_0x454f9c;_0x51baed[_0x876802(0x3ed)]=Math[_0x876802(0x23a)](0x10)+0x10,_0x51baed[_0x876802(0x281)](_0x8ab477,_0x3d2177,_0x454f9c),_0x51baed[_0x876802(0x3a3)]=![];if(ImageManager[_0x876802(0x256)])console[_0x876802(0x465)]('lensflare');return this['_cached_WeatherEffects_LensFlare']=this[_0x876802(0x5ce)]||[],this[_0x876802(0x5ce)][_0x876802(0x590)](_0x51baed),_0x51baed;},ImageManager['weatherEffectsMoonBeams']=function(){const _0x580fda=_0x3c3250;if(this[_0x580fda(0x4bd)]&&ColorManager[_0x580fda(0x48a)]['length']<=0x0){const _0x396b92=this[_0x580fda(0x4bd)];return _0x396b92[Math[_0x580fda(0x3a0)](Math[_0x580fda(0x2cb)]()*_0x396b92[_0x580fda(0x3de)])];}let _0x17602b=ColorManager[_0x580fda(0x48a)][_0x580fda(0x5d1)]();_0x17602b=ColorManager[_0x580fda(0x477)](_0x17602b,1.2);const _0x34e90=new Bitmap(0x3e8,0x3e8),_0x20049f=_0x34e90[_0x580fda(0x45e)]/0x2;return _0x34e90[_0x580fda(0x567)](_0x20049f,_0x20049f,_0x20049f,0x168,_0x17602b,0x0,0x1,0x0),_0x34e90[_0x580fda(0x3a3)]=![],this[_0x580fda(0x4bd)]=this[_0x580fda(0x4bd)]||[],this[_0x580fda(0x4bd)][_0x580fda(0x590)](_0x34e90),_0x34e90;},ImageManager['weatherEffectsUltravioletBeams']=function(){const _0x1b5448=_0x3c3250;if(this[_0x1b5448(0x468)]&&ColorManager[_0x1b5448(0x2ce)][_0x1b5448(0x3de)]<=0x0){const _0x1a6c85=this[_0x1b5448(0x468)];return _0x1a6c85[Math[_0x1b5448(0x3a0)](Math[_0x1b5448(0x2cb)]()*_0x1a6c85['length'])];}const _0x50279f=ColorManager[_0x1b5448(0x2ce)][_0x1b5448(0x5d1)](),_0x5c2324=new Bitmap(0x3e8,0x3e8),_0x49095f=_0x5c2324[_0x1b5448(0x45e)]/0x2;return _0x5c2324[_0x1b5448(0x567)](_0x49095f,_0x49095f,_0x49095f,0x168,_0x50279f,0x0,0x1,0x0),_0x5c2324[_0x1b5448(0x3a3)]=![],this['_cached_WeatherEffects_UvBeam']=this[_0x1b5448(0x468)]||[],this['_cached_WeatherEffects_UvBeam'][_0x1b5448(0x590)](_0x5c2324),_0x5c2324;},ImageManager[_0x3c3250(0x280)]=function(){const _0x18c6ff=_0x3c3250;if(this[_0x18c6ff(0x4a4)]&&ColorManager[_0x18c6ff(0x27c)][_0x18c6ff(0x3de)]<=0x0){const _0x463129=this[_0x18c6ff(0x4a4)];return _0x463129[Math['floor'](Math[_0x18c6ff(0x2cb)]()*_0x463129[_0x18c6ff(0x3de)])];}const _0x23923d=ColorManager[_0x18c6ff(0x27c)][_0x18c6ff(0x5d1)](),_0x22cbf6=new Bitmap(0x3e8,0x3e8),_0x14598c=_0x22cbf6[_0x18c6ff(0x45e)]/0x2;return _0x22cbf6[_0x18c6ff(0x567)](_0x14598c,_0x14598c,_0x14598c,0x168,_0x23923d,0x0,0x1,0x0),_0x22cbf6['_customModified']=![],this[_0x18c6ff(0x4a4)]=this[_0x18c6ff(0x4a4)]||[],this[_0x18c6ff(0x4a4)][_0x18c6ff(0x590)](_0x22cbf6),_0x22cbf6;},ImageManager[_0x3c3250(0x485)]=function(){const _0x4dc735=_0x3c3250;if(this[_0x4dc735(0x541)]&&this[_0x4dc735(0x541)][_0x4dc735(0x3de)]>=ImageManager[_0x4dc735(0x435)]){const _0x5a4f5c=this[_0x4dc735(0x541)];return _0x5a4f5c[Math[_0x4dc735(0x3a0)](Math['random']()*_0x5a4f5c[_0x4dc735(0x3de)])];}const _0x35dccc=new Bitmap(0x1f4,0x1f4),_0x2d7033=_0x35dccc[_0x4dc735(0x45e)],_0x5a70ba=_0x35dccc['height'],_0x36f7fd=ColorManager[_0x4dc735(0x221)][_0x4dc735(0x506)](),_0x409e52=1.5,_0x2e24a8=0x1;let _0x2a69e5=0x20;while(_0x2a69e5--){const _0x23b318=Math['randomInt'](_0x2d7033-_0x2e24a8*0x2)+_0x2e24a8,_0x38675e=Math['randomInt'](_0x5a70ba-_0x2e24a8*0x2)+_0x2e24a8;let _0x18ce5c=_0x36f7fd[Math['floor'](Math[_0x4dc735(0x2cb)]()*_0x36f7fd[_0x4dc735(0x3de)])];_0x18ce5c=ColorManager[_0x4dc735(0x477)](_0x18ce5c,_0x409e52);const _0x4cf520=Math[_0x4dc735(0x23a)](_0x2e24a8)+0x1;_0x35dccc['paintOpacity']=Math[_0x4dc735(0x23a)](0x40)+0xa0,_0x35dccc[_0x4dc735(0x41b)](_0x23b318,_0x38675e,_0x4cf520,_0x18ce5c);}_0x35dccc[_0x4dc735(0x3a3)]=![];if(ImageManager[_0x4dc735(0x256)])console[_0x4dc735(0x465)]('housedust');return this[_0x4dc735(0x541)]=this[_0x4dc735(0x541)]||[],this[_0x4dc735(0x541)][_0x4dc735(0x590)](_0x35dccc),_0x35dccc;},ImageManager[_0x3c3250(0x379)]=function(){const _0x11a46b=_0x3c3250;if(this[_0x11a46b(0x3dd)]&&this[_0x11a46b(0x3dd)]['length']>=ImageManager[_0x11a46b(0x435)]){const _0x74ceb0=this[_0x11a46b(0x3dd)];return _0x74ceb0[Math[_0x11a46b(0x3a0)](Math['random']()*_0x74ceb0[_0x11a46b(0x3de)])];}const _0x148c74=ColorManager[_0x11a46b(0x24e)][_0x11a46b(0x506)](),_0x2555cb=_0x148c74[Math[_0x11a46b(0x3a0)](Math[_0x11a46b(0x2cb)]()*_0x148c74['length'])];_0x148c74[_0x11a46b(0x409)](_0x2555cb);const _0x4750cf=_0x148c74[Math['floor'](Math[_0x11a46b(0x2cb)]()*_0x148c74[_0x11a46b(0x3de)])];_0x148c74[_0x11a46b(0x409)](_0x4750cf);const _0x1041aa=_0x148c74[Math['floor'](Math[_0x11a46b(0x2cb)]()*_0x148c74[_0x11a46b(0x3de)])];_0x148c74[_0x11a46b(0x409)](_0x1041aa);const _0x50fa02=new Bitmap(0x3e8,0x3e8);_0x50fa02[_0x11a46b(0x305)](0x1f4,0x28a,0xaf,_0x1041aa,0x10,0x14),_0x50fa02['drawCloud'](0x1f4,0x1f4,0xc8,_0x2555cb,0x40,0x19),_0x50fa02[_0x11a46b(0x305)](0x1f4,0x15e,0xa0,_0x4750cf,0x10,0x14),_0x50fa02[_0x11a46b(0x3a3)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x11a46b(0x465)](_0x11a46b(0x527));return this['_cached_WeatherEffects_FlameHaze']=this['_cached_WeatherEffects_FlameHaze']||[],this[_0x11a46b(0x3dd)][_0x11a46b(0x590)](_0x50fa02),_0x50fa02;},ImageManager[_0x3c3250(0x575)]=function(){const _0xeef07f=_0x3c3250;if(this['_cached_WeatherEffects_Spiderbolt']&&this[_0xeef07f(0x5dc)][_0xeef07f(0x3de)]>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']*0x3){const _0x3eee79=this[_0xeef07f(0x5dc)];return _0x3eee79[Math[_0xeef07f(0x3a0)](Math['random']()*_0x3eee79[_0xeef07f(0x3de)])];}const _0x395e1a=Math['max']($dataSystem[_0xeef07f(0x421)][_0xeef07f(0x515)],$dataSystem[_0xeef07f(0x421)][_0xeef07f(0x432)])||0x1,_0x31f866=new Bitmap(_0x395e1a,_0x395e1a),_0x531273=_0xeef07f(0x513);_0x31f866[_0xeef07f(0x3fc)](_0x395e1a/0x2,_0x395e1a/0x2,_0x531273,_0x531273,0x4,0x10,0x4),_0x31f866[_0xeef07f(0x378)][_0xeef07f(0x303)](0.5,0.5),_0x31f866['_context'][_0xeef07f(0x556)](_0x395e1a,_0x395e1a/0x2),_0x31f866['drawLightning'](),_0x31f866['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0xeef07f(0x465)](_0xeef07f(0x20a));return this[_0xeef07f(0x5dc)]=this['_cached_WeatherEffects_Spiderbolt']||[],this[_0xeef07f(0x5dc)][_0xeef07f(0x590)](_0x31f866),_0x31f866;},ImageManager['weatherEffectsWaterDrop']=function(){const _0x3c6acb=_0x3c3250;if(this['_cached_WeatherEffects_WaterDrop']&&this[_0x3c6acb(0x4ff)][_0x3c6acb(0x3de)]>=ImageManager[_0x3c6acb(0x435)]*0x3){const _0x1e0063=this[_0x3c6acb(0x4ff)];return _0x1e0063[Math[_0x3c6acb(0x3a0)](Math[_0x3c6acb(0x2cb)]()*_0x1e0063[_0x3c6acb(0x3de)])];}const _0x3280ce=_0x3c6acb(0x564),_0x305621=_0x3c6acb(0x357);let _0x55e9b6=Math[_0x3c6acb(0x23a)](0x1e)+0x1e;if(_0x55e9b6%0x2!==0x0)_0x55e9b6+=0x1;const _0x4c59f8=0x2,_0x541e45=new Bitmap(_0x55e9b6,_0x4c59f8);_0x541e45['paintOpacity']=Math[_0x3c6acb(0x23a)](0x40)+0xc0,_0x541e45['gradientFillRect'](0x0,0x0,_0x55e9b6/0x2,_0x4c59f8,_0x3280ce,_0x305621),_0x541e45['fillRect'](_0x55e9b6/0x2,0x0,_0x55e9b6/0x2,_0x4c59f8,_0x305621),_0x541e45[_0x3c6acb(0x3a3)]=![];if(ImageManager[_0x3c6acb(0x256)])console[_0x3c6acb(0x465)](_0x3c6acb(0x43c));return this[_0x3c6acb(0x4ff)]=this[_0x3c6acb(0x4ff)]||[],this[_0x3c6acb(0x4ff)][_0x3c6acb(0x590)](_0x541e45),_0x541e45;},ImageManager[_0x3c3250(0x239)]=function(){const _0x58e63e=_0x3c3250;if(this[_0x58e63e(0x499)]&&ColorManager[_0x58e63e(0x482)][_0x58e63e(0x3de)]<=0x0){const _0x1320b7=this[_0x58e63e(0x499)];return _0x1320b7[Math[_0x58e63e(0x3a0)](Math[_0x58e63e(0x2cb)]()*_0x1320b7[_0x58e63e(0x3de)])];}const _0x48157c=ColorManager[_0x58e63e(0x482)][_0x58e63e(0x5d1)](),_0x21dd53=new Bitmap(0x18,0x18),_0x4b2aae=0xc,_0x586380=_0x4b2aae/0x3;return _0x21dd53[_0x58e63e(0x41b)](_0x4b2aae,_0x4b2aae,_0x4b2aae,_0x48157c),_0x21dd53[_0x58e63e(0x31f)](_0x4b2aae,_0x4b2aae,_0x4b2aae-0x2),_0x21dd53['drawCircle'](_0x4b2aae+_0x586380,_0x4b2aae-_0x586380,_0x586380,_0x58e63e(0x513)),_0x21dd53[_0x58e63e(0x3a3)]=![],this[_0x58e63e(0x499)]=this['_cached_WeatherEffects_SoapBubbles']||[],this['_cached_WeatherEffects_SoapBubbles'][_0x58e63e(0x590)](_0x21dd53),_0x21dd53;},ImageManager[_0x3c3250(0x351)]=function(){const _0x1aaaec=_0x3c3250;if(this[_0x1aaaec(0x2d3)]&&this[_0x1aaaec(0x2d3)][_0x1aaaec(0x3de)]>=ImageManager[_0x1aaaec(0x435)]){const _0x38c2bd=this[_0x1aaaec(0x2d3)];return _0x38c2bd[Math[_0x1aaaec(0x3a0)](Math[_0x1aaaec(0x2cb)]()*_0x38c2bd[_0x1aaaec(0x3de)])];}const _0x380bb5=ColorManager[_0x1aaaec(0x45c)],_0x29ffe9=_0x380bb5[0x3],_0x3126b4=_0x380bb5[0x2],_0x3f081a=_0x380bb5[0x1],_0x5b8259=new Bitmap(0x1f4,0x1f4);_0x5b8259['drawCloud'](0xfa,0x15e,0x4b,_0x29ffe9,0x10,0x14),_0x5b8259[_0x1aaaec(0x305)](0xfa,0xfa,0x64,_0x3f081a,0x40,0x19),_0x5b8259[_0x1aaaec(0x305)](0xfa,0xfa,0x3c,_0x3126b4,0x10,0x14),_0x5b8259['_customModified']=![];if(ImageManager[_0x1aaaec(0x256)])console[_0x1aaaec(0x465)](_0x1aaaec(0x39f));return this[_0x1aaaec(0x2d3)]=this[_0x1aaaec(0x2d3)]||[],this[_0x1aaaec(0x2d3)][_0x1aaaec(0x590)](_0x5b8259),_0x5b8259;},ImageManager[_0x3c3250(0x258)]=function(){const _0x46c839=_0x3c3250;if(this[_0x46c839(0x4a3)]&&this['_cached_WeatherEffects_Sleet']['length']>=ImageManager[_0x46c839(0x435)]){const _0xfad50=this['_cached_WeatherEffects_Sleet'];return _0xfad50[Math['floor'](Math[_0x46c839(0x2cb)]()*_0xfad50[_0x46c839(0x3de)])];}const _0x3cd11a=ColorManager[_0x46c839(0x3c8)],_0x4e0c06=1.3;let _0x1df64a=ColorManager['adjustHexColor'](_0x3cd11a[Math[_0x46c839(0x3a0)](Math[_0x46c839(0x2cb)]()*_0x3cd11a[_0x46c839(0x3de)])],_0x4e0c06),_0x4f664b=ColorManager[_0x46c839(0x477)](_0x3cd11a[Math['floor'](Math[_0x46c839(0x2cb)]()*_0x3cd11a['length'])],_0x4e0c06),_0x5dc953=ColorManager[_0x46c839(0x477)](_0x3cd11a[Math['floor'](Math['random']()*_0x3cd11a[_0x46c839(0x3de)])],_0x4e0c06);const _0x23af8a=new Bitmap(0x1f4,0x1f4);_0x23af8a['drawCloud'](0xfa,0x15e,0x4b,_0x1df64a,0x4,0x14),_0x23af8a[_0x46c839(0x305)](0xfa,0xfa,0x64,_0x5dc953,0x8,0x19),_0x23af8a[_0x46c839(0x305)](0xfa,0xfa,0x3c,_0x4f664b,0x4,0x14);const _0x4994c0=_0x23af8a['width'],_0x3b7708=_0x23af8a[_0x46c839(0x243)],_0x4e43e9=0x4;let _0x5212f9=0x10;while(_0x5212f9--){const _0xf4750d=Math[_0x46c839(0x23a)](_0x4994c0-_0x4e43e9*0x2)+_0x4e43e9,_0x3dc71f=Math[_0x46c839(0x23a)](_0x3b7708-_0x4e43e9*0x2)+_0x4e43e9;let _0x226c05=_0x3cd11a[Math[_0x46c839(0x3a0)](Math[_0x46c839(0x2cb)]()*_0x3cd11a['length'])];_0x226c05=ColorManager[_0x46c839(0x477)](_0x226c05,_0x4e0c06),_0x23af8a[_0x46c839(0x3ed)]=Math[_0x46c839(0x23a)](0x40)+0xc0,_0x23af8a[_0x46c839(0x3fc)](_0xf4750d,_0x3dc71f,_0x226c05,_0x226c05,0x4,_0x4e43e9,_0x4e43e9/0x2);}_0x23af8a['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x46c839(0x465)]('sandstorm');return this[_0x46c839(0x4a3)]=this[_0x46c839(0x4a3)]||[],this[_0x46c839(0x4a3)]['push'](_0x23af8a),_0x23af8a;},ImageManager[_0x3c3250(0x27f)]=function(){const _0x381996=_0x3c3250;if(this[_0x381996(0x49f)]&&this['_cached_WeatherEffects_Tempest']['length']>=ImageManager[_0x381996(0x435)]){const _0x162e73=this[_0x381996(0x49f)];return _0x162e73[Math[_0x381996(0x3a0)](Math['random']()*_0x162e73[_0x381996(0x3de)])];}const _0x57fe58=Math[_0x381996(0x23a)](0x20)+0x40,_0x4d254f=Math[_0x381996(0x23a)](0x20)+0x60,_0x22f62b=Math[_0x381996(0x23a)](0x20)+0x80;let _0x5a2e07=ColorManager[_0x381996(0x48b)]([_0x57fe58,_0x57fe58,_0x57fe58]),_0x2ff809=ColorManager[_0x381996(0x48b)]([_0x4d254f,_0x4d254f,_0x4d254f]),_0xe92f53=ColorManager['arrayToHex']([_0x22f62b,_0x22f62b,_0x22f62b]);const _0x334d62=new Bitmap(0x3e8,0x3e8);_0x334d62[_0x381996(0x305)](0x1f4,0x28a,0xaf,_0x5a2e07,0x10,0x14),_0x334d62['drawCloud'](0x1f4,0x1f4,0xc8,_0xe92f53,0x40,0x19),_0x334d62[_0x381996(0x305)](0x1f4,0x15e,0xa0,_0x2ff809,0x10,0x14),_0x334d62[_0x381996(0x3a3)]=![];if(ImageManager[_0x381996(0x256)])console['log'](_0x381996(0x27b));return this[_0x381996(0x49f)]=this['_cached_WeatherEffects_Tempest']||[],this[_0x381996(0x49f)][_0x381996(0x590)](_0x334d62),_0x334d62;},ImageManager['weatherEffectsGrassyGust']=function(){const _0x4faddf=_0x3c3250;if(this['_cached_WeatherEffects_GrassyGust']&&ColorManager['WEATHER_GRASSY_GUST_COLORS'][_0x4faddf(0x3de)]<=0x0){const _0x7db705=this[_0x4faddf(0x3ae)];return _0x7db705[Math[_0x4faddf(0x3a0)](Math[_0x4faddf(0x2cb)]()*_0x7db705['length'])];}const _0x2b8b66=ColorManager[_0x4faddf(0x4ba)]['pop'](),_0x112bff=ColorManager[_0x4faddf(0x477)](_0x2b8b66,0.5),_0x32ade6=0xc,_0x7bdb76=0x4,_0x3635b7=new Bitmap(_0x32ade6,_0x7bdb76);_0x3635b7[_0x4faddf(0x3bc)](0x0,0x0,_0x32ade6,_0x7bdb76/0x2,_0x2b8b66),_0x3635b7['fillRect'](0x0,_0x7bdb76/0x2,_0x32ade6,_0x7bdb76/0x2,_0x112bff),_0x3635b7[_0x4faddf(0x3a3)]=![];if(ImageManager[_0x4faddf(0x256)])console[_0x4faddf(0x465)](_0x4faddf(0x211));return this[_0x4faddf(0x3ae)]=this['_cached_WeatherEffects_GrassyGust']||[],this['_cached_WeatherEffects_GrassyGust'][_0x4faddf(0x590)](_0x3635b7),_0x3635b7;},ImageManager['weatherEffectsXtremeSpeed']=function(){const _0x4e38da=_0x3c3250;if(this['_cached_WeatherEffects_Xtreme']&&this['_cached_WeatherEffects_Xtreme'][_0x4e38da(0x3de)]>=ImageManager[_0x4e38da(0x435)]){const _0x307619=this[_0x4e38da(0x5e8)];return _0x307619[Math['floor'](Math['random']()*_0x307619[_0x4e38da(0x3de)])];}const _0x5ce3d8=_0x4e38da(0x513),_0x1a9e66=_0x4e38da(0x2c3),_0x4502ec='#0072bc',_0x11ef98=0x1f4,_0x19a7dd=new Bitmap(_0x11ef98,_0x11ef98);let _0x1f520d=0x40;while(_0x1f520d--){const _0x59b1a5=Math[_0x4e38da(0x23a)](0x32)+0xa,_0xfce45a=Math[_0x4e38da(0x23a)](0x32)+0x1b8,_0xaf7e63=Math['randomInt'](0x1e0)+0xa,_0x24f8ec=(_0xfce45a-_0x59b1a5)/0x2,_0xffdc2c=Math[_0x4e38da(0x23a)](0x3)+0x1c,_0x19c663=ColorManager[_0x4e38da(0x349)](_0x4502ec,0x0),_0x1d48a2=ColorManager[_0x4e38da(0x349)](_0x4502ec,Math[_0x4e38da(0x2cb)]());_0x19a7dd[_0x4e38da(0x4ad)](_0x59b1a5,_0xaf7e63,Math['floor'](_0x24f8ec),_0xffdc2c,_0x19c663,_0x1d48a2),_0x19a7dd[_0x4e38da(0x4ad)](_0x59b1a5+Math['floor'](_0x24f8ec),_0xaf7e63,Math[_0x4e38da(0x5eb)](_0x24f8ec),_0xffdc2c,_0x1d48a2,_0x19c663);}_0x1f520d=0x20;while(_0x1f520d--){const _0x5bbda9=Math[_0x4e38da(0x23a)](0x32)+0x64,_0x223e3c=Math[_0x4e38da(0x23a)](0x32)+0x15e,_0x37ea61=Math[_0x4e38da(0x23a)](0x1e0)+0xa,_0x23c509=(_0x223e3c-_0x5bbda9)/0x2,_0x1c18a4=Math['randomInt'](0x6)+0xa,_0x1c0f8e=ColorManager[_0x4e38da(0x349)](_0x1a9e66,0x0),_0x3f5f21=ColorManager[_0x4e38da(0x349)](_0x1a9e66,Math[_0x4e38da(0x2cb)]());_0x19a7dd[_0x4e38da(0x4ad)](_0x5bbda9,_0x37ea61,Math[_0x4e38da(0x3a0)](_0x23c509),_0x1c18a4,_0x1c0f8e,_0x3f5f21),_0x19a7dd[_0x4e38da(0x4ad)](_0x5bbda9+Math[_0x4e38da(0x3a0)](_0x23c509),_0x37ea61,Math['ceil'](_0x23c509),_0x1c18a4,_0x3f5f21,_0x1c0f8e);}_0x1f520d=0x10;while(_0x1f520d--){const _0xa1bc92=Math[_0x4e38da(0x23a)](0x32)+0xa,_0x4d9834=Math[_0x4e38da(0x23a)](0x32)+0x1b8,_0x5c5753=Math[_0x4e38da(0x23a)](0x1e0)+0xa,_0xf90a55=(_0x4d9834-_0xa1bc92)/0x2,_0x4b4be=Math[_0x4e38da(0x23a)](0x6)+0x5,_0x2d7643=ColorManager[_0x4e38da(0x349)](_0x5ce3d8,0x0),_0x29022b=ColorManager['hexToRgba'](_0x5ce3d8,0x1);_0x19a7dd['gradientFillRect'](_0xa1bc92,_0x5c5753,Math[_0x4e38da(0x3a0)](_0xf90a55),_0x4b4be,_0x2d7643,_0x29022b),_0x19a7dd['gradientFillRect'](_0xa1bc92+Math[_0x4e38da(0x3a0)](_0xf90a55),_0x5c5753,Math[_0x4e38da(0x5eb)](_0xf90a55),_0x4b4be,_0x29022b,_0x2d7643);}const _0x386f51=_0x4e38da(0x564),_0x11a5a6='rgba(255,255,255,1)',_0x59f904=0xc8,_0x3a1b09=_0x59f904/0x2,_0x13b28d=0x6;_0x1f520d=0x10;while(_0x1f520d--){const _0x42b532=Math[_0x4e38da(0x23a)](_0x11ef98-_0x59f904)+_0x59f904,_0x10a46c=Math[_0x4e38da(0x23a)](_0x11ef98-_0x13b28d)+_0x13b28d;_0x19a7dd[_0x4e38da(0x3ed)]=Math[_0x4e38da(0x23a)](0x40)+0xc0,_0x19a7dd['gradientFillRect'](_0x42b532,_0x10a46c,_0x3a1b09,0x2,_0x386f51,_0x11a5a6),_0x19a7dd['fillRect'](_0x42b532+_0x3a1b09,_0x10a46c,_0x3a1b09,0x2,_0x11a5a6);}_0x19a7dd[_0x4e38da(0x3a3)]=![];if(ImageManager[_0x4e38da(0x256)])console['log'](_0x4e38da(0x39a));return this['_cached_WeatherEffects_Xtreme']=this[_0x4e38da(0x5e8)]||[],this['_cached_WeatherEffects_Xtreme']['push'](_0x19a7dd),_0x19a7dd;},ImageManager['weatherEffectsBalloons']=function(){const _0xb9e308=_0x3c3250;if(this[_0xb9e308(0x4f3)]&&ColorManager[_0xb9e308(0x33e)][_0xb9e308(0x3de)]<=0x0){const _0x195827=this[_0xb9e308(0x4f3)];return _0x195827[Math['floor'](Math[_0xb9e308(0x2cb)]()*_0x195827['length'])];}const _0x301905=ColorManager['WEATHER_BALLOON_COLORS'][_0xb9e308(0x5d1)](),_0x26bf09=ColorManager[_0xb9e308(0x477)](_0x301905,0.8),_0x529fc1=[_0x301905,_0x26bf09],_0x3725d6=new Bitmap(0x64,0x24);_0x3725d6[_0xb9e308(0x3da)](_0x529fc1),_0x3725d6[_0xb9e308(0x3a3)]=![];if(ImageManager[_0xb9e308(0x256)])console[_0xb9e308(0x465)](_0xb9e308(0x28e));return this[_0xb9e308(0x4f3)]=this[_0xb9e308(0x4f3)]||[],this[_0xb9e308(0x4f3)][_0xb9e308(0x590)](_0x3725d6),_0x3725d6;},ImageManager[_0x3c3250(0x4f6)]=function(){const _0x2992b0=_0x3c3250;if(this[_0x2992b0(0x215)]&&this[_0x2992b0(0x215)]['length']>=ImageManager['WEATHER_EFFECTS_MAX_VARIATIONS']){const _0x212997=this[_0x2992b0(0x215)];return _0x212997[Math['floor'](Math[_0x2992b0(0x2cb)]()*_0x212997[_0x2992b0(0x3de)])];}const _0x2b8cac=_0x2992b0(0x428);let _0x4c907b=Math[_0x2992b0(0x23a)](0x32)+0x64;if(_0x4c907b%0x2!==0x0)_0x4c907b+=0x1;const _0x57f900=new Bitmap(_0x4c907b,0x8);_0x57f900[_0x2992b0(0x538)](_0x2b8cac),_0x57f900[_0x2992b0(0x3a3)]=![];if(ImageManager[_0x2992b0(0x256)])console[_0x2992b0(0x465)](_0x2992b0(0x4f7));return this['_cached_WeatherEffects_Fireworks']=this[_0x2992b0(0x215)]||[],this['_cached_WeatherEffects_Fireworks'][_0x2992b0(0x590)](_0x57f900),_0x57f900;},ImageManager[_0x3c3250(0x534)]=function(){const _0x48dc8f=_0x3c3250;if(this['_cached_WeatherEffects_FireworksFlower']&&this[_0x48dc8f(0x40c)][_0x48dc8f(0x3de)]>=ImageManager[_0x48dc8f(0x435)]){const _0x193ee5=this[_0x48dc8f(0x40c)];return _0x193ee5[Math[_0x48dc8f(0x3a0)](Math[_0x48dc8f(0x2cb)]()*_0x193ee5[_0x48dc8f(0x3de)])];}const _0x1a80b4=_0x48dc8f(0x428),_0x9b54c=new Bitmap(0xc8,0xc8);_0x9b54c['drawFireworksFlower'](_0x1a80b4),_0x9b54c['_customModified']=![];if(ImageManager[_0x48dc8f(0x256)])console[_0x48dc8f(0x465)](_0x48dc8f(0x2dd));return this['_cached_WeatherEffects_FireworksFlower']=this[_0x48dc8f(0x40c)]||[],this[_0x48dc8f(0x40c)][_0x48dc8f(0x590)](_0x9b54c),_0x9b54c;},ImageManager[_0x3c3250(0x493)]=function(){const _0x40e803=_0x3c3250;if(this[_0x40e803(0x329)]&&ColorManager[_0x40e803(0x4dc)]['length']<=0x0){const _0x307a25=this[_0x40e803(0x329)];return _0x307a25[Math[_0x40e803(0x3a0)](Math[_0x40e803(0x2cb)]()*_0x307a25[_0x40e803(0x3de)])];}const _0x33bd90=ColorManager['WEATHER_SHADOW_BURST_COLORS'][_0x40e803(0x5d1)](),_0x68bd24=new Bitmap(0x3e8,0x3e8),_0x479391=_0x68bd24[_0x40e803(0x45e)]/0x2;_0x68bd24[_0x40e803(0x567)](_0x479391,_0x479391,_0x479391,0x168,_0x33bd90,0x0,0x1,0x0),_0x68bd24[_0x40e803(0x3a3)]=![];if(ImageManager[_0x40e803(0x256)])console[_0x40e803(0x465)](_0x40e803(0x365));return this[_0x40e803(0x329)]=this[_0x40e803(0x329)]||[],this[_0x40e803(0x329)][_0x40e803(0x590)](_0x68bd24),_0x68bd24;},ImageManager[_0x3c3250(0x209)]=function(){const _0x53f638=_0x3c3250;if(this[_0x53f638(0x33f)]&&this[_0x53f638(0x33f)]['length']>=ImageManager[_0x53f638(0x435)]){const _0x34d344=this[_0x53f638(0x33f)];return _0x34d344[Math[_0x53f638(0x3a0)](Math[_0x53f638(0x2cb)]()*_0x34d344['length'])];}const _0x345ccc=new Bitmap(0x1f4,0x1f4);let _0x4c5d82=ColorManager['arrayToHex']([Math[_0x53f638(0x23a)](0x20)+0x10,0x18,Math[_0x53f638(0x23a)](0x20)+0x10]),_0x168dce=ColorManager[_0x53f638(0x48b)]([Math[_0x53f638(0x23a)](0x30)+0x20,0x30,Math['randomInt'](0x30)+0x20]),_0x5aa203=ColorManager[_0x53f638(0x48b)]([Math['randomInt'](0x40)+0x30,0x60,Math[_0x53f638(0x23a)](0x40)+0x30]);_0x345ccc[_0x53f638(0x305)](0xfa,0x15e,0x4b,_0x4c5d82,0x10,0x14),_0x345ccc[_0x53f638(0x305)](0xfa,0xfa,0x64,_0x5aa203,0x40,0x19),_0x345ccc[_0x53f638(0x305)](0xfa,0xfa,0x3c,_0x168dce,0x10,0x14);const _0x27aa62=_0x53f638(0x564),_0x23b909=_0x53f638(0x357),_0x2d5864=_0x345ccc['width'],_0x4cb0f2=_0x345ccc['height'],_0x33a4b6=0x64,_0x341c9f=_0x33a4b6/0x2,_0x4fa561=0x2;let _0x38886d=0x20;while(_0x38886d--){const _0x422382=Math[_0x53f638(0x23a)](_0x2d5864-_0x33a4b6)+_0x33a4b6,_0x3ae573=Math[_0x53f638(0x23a)](_0x4cb0f2-_0x4fa561)+_0x4fa561;_0x345ccc[_0x53f638(0x3ed)]=Math[_0x53f638(0x23a)](0x40)+0xc0,_0x345ccc[_0x53f638(0x4ad)](_0x422382,_0x3ae573,Math[_0x53f638(0x5eb)](_0x341c9f),_0x4fa561,_0x27aa62,_0x23b909),_0x345ccc[_0x53f638(0x3bc)](_0x422382+Math['ceil'](_0x341c9f),_0x3ae573,Math[_0x53f638(0x3a0)](_0x341c9f),_0x4fa561,_0x23b909);}_0x345ccc[_0x53f638(0x3a3)]=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console[_0x53f638(0x465)]('cloudburst');return this[_0x53f638(0x33f)]=this[_0x53f638(0x33f)]||[],this[_0x53f638(0x33f)][_0x53f638(0x590)](_0x345ccc),_0x345ccc;},ImageManager['weatherEffectsRainbowArch']=function(){const _0x210163=_0x3c3250;if(this[_0x210163(0x320)])return this[_0x210163(0x320)];const _0x18802a=Math[_0x210163(0x55f)]($dataSystem[_0x210163(0x421)]['screenWidth'],$dataSystem[_0x210163(0x421)][_0x210163(0x432)])||0x1,_0x7c020a=new Bitmap(_0x18802a,_0x18802a);_0x7c020a[_0x210163(0x2f3)](_0x18802a/0x2,_0x18802a/0x2,_0x18802a/0x2),_0x7c020a['_customModified']=![];if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log'](_0x210163(0x5d7));return this[_0x210163(0x320)]=_0x7c020a,_0x7c020a;},ImageManager[_0x3c3250(0x54d)]=function(){const _0x5aff1b=_0x3c3250;if(this[_0x5aff1b(0x407)]){const _0x232906=this[_0x5aff1b(0x407)];return _0x232906[Math['floor'](Math['random']()*_0x232906[_0x5aff1b(0x3de)])];}this[_0x5aff1b(0x407)]=this[_0x5aff1b(0x407)]||[];const _0x1cf32b=ImageManager[_0x5aff1b(0x4c9)];for(const _0xc13e08 of _0x1cf32b){const _0x19f57b=new Bitmap(ImageManager[_0x5aff1b(0x2a0)],ImageManager[_0x5aff1b(0x44b)]);_0x19f57b[_0x5aff1b(0x404)]=0x1c,_0x19f57b[_0x5aff1b(0x245)](_0xc13e08,0x0,0x0,_0x19f57b[_0x5aff1b(0x45e)],_0x19f57b[_0x5aff1b(0x243)],_0x5aff1b(0x36e)),_0x19f57b[_0x5aff1b(0x3a3)]=![],this[_0x5aff1b(0x407)][_0x5aff1b(0x590)](_0x19f57b);}if(ImageManager['WEATHER_EFFECTS_DEBUG_GENERATE_MSG'])console['log']('icons');const _0x1d7ee4=this[_0x5aff1b(0x407)];return _0x1d7ee4[Math['floor'](Math['random']()*_0x1d7ee4['length'])];},ImageManager[_0x3c3250(0x24a)]=function(){const _0x568a76=_0x3c3250;if(this[_0x568a76(0x487)]&&this[_0x568a76(0x487)][_0x568a76(0x3de)]>=ImageManager[_0x568a76(0x435)]){const _0x1ed9ef=this[_0x568a76(0x487)];return _0x1ed9ef[Math['floor'](Math[_0x568a76(0x2cb)]()*_0x1ed9ef[_0x568a76(0x3de)])];}let _0x56d2bb=ColorManager[_0x568a76(0x45c)];const _0x41ad78=_0x56d2bb[Math[_0x568a76(0x3a0)](Math[_0x568a76(0x2cb)]()*_0x56d2bb[_0x568a76(0x3de)])];_0x56d2bb=ColorManager['WEATHER_EARTH_COLORS'];const _0x1769e1=_0x56d2bb[Math['floor'](Math[_0x568a76(0x2cb)]()*_0x56d2bb['length'])];_0x56d2bb=ColorManager['WEATHER_CLOUD_WHITE_COLORS'];const _0x294653=_0x56d2bb[Math[_0x568a76(0x3a0)](Math[_0x568a76(0x2cb)]()*_0x56d2bb[_0x568a76(0x3de)])],_0x148fce=new Bitmap(0x3e8,0x3e8);_0x148fce['drawCloud'](0x1f4,0x258,0xaf,_0x41ad78,0x40,0x14),_0x148fce[_0x568a76(0x305)](0x1f4,0x1f4,0xc8,_0x294653,0x40,0x19),_0x148fce[_0x568a76(0x305)](0x1f4,0x1c2,0xa0,_0x1769e1,0x40,0x1e),_0x148fce[_0x568a76(0x3a3)]=![];if(ImageManager[_0x568a76(0x256)])console[_0x568a76(0x465)]('fumes');return this['_cached_WeatherEffects_Fumes']=this['_cached_WeatherEffects_Fumes']||[],this[_0x568a76(0x487)][_0x568a76(0x590)](_0x148fce),_0x148fce;},Bitmap[_0x3c3250(0x206)]['clearCircle']=function(_0x5af32c,_0x4b1d2e,_0x29fa5c){const _0x493626=_0x3c3250,_0x5a2459=this['context'];_0x5a2459['save'](),_0x5a2459[_0x493626(0x3cf)]=_0x493626(0x38a),_0x5a2459[_0x493626(0x2d4)](),_0x5a2459[_0x493626(0x52f)](_0x5af32c,_0x4b1d2e,_0x29fa5c,0x0,0x2*Math['PI'],![]),_0x5a2459['fill'](),_0x5a2459[_0x493626(0x2cc)](),this[_0x493626(0x5e9)][_0x493626(0x4fa)]();},Bitmap['prototype'][_0x3c3250(0x4d4)]=function(_0x4bc203,_0x323b77,_0x53061d,_0x515aa0,_0x62f9d8,_0x4a9dec){const _0x233041=_0x3c3250,_0x49f127=this['_context'];_0x49f127['save'](),_0x49f127[_0x233041(0x244)]=_0x323b77,_0x49f127[_0x233041(0x2d4)](),_0x49f127[_0x233041(0x5cc)](_0x4bc203[0x0],_0x4bc203[0x1]);for(var _0x460d36=0x2;_0x460d36<_0x4bc203['length'];_0x460d36+=0x2){_0x49f127['lineTo'](_0x4bc203[_0x460d36],_0x4bc203[_0x460d36+0x1]);}_0x49f127[_0x233041(0x242)](_0x4bc203[0x0],_0x4bc203[0x1]),_0x49f127[_0x233041(0x32d)]=_0x53061d,_0x49f127[_0x233041(0x4d8)]=_0x515aa0,_0x4a9dec&&_0x49f127[_0x233041(0x481)](),_0x49f127[_0x233041(0x58c)]=_0x62f9d8,_0x49f127['fill'](),_0x49f127[_0x233041(0x58c)]=0x1,_0x49f127['restore']();},Bitmap[_0x3c3250(0x206)][_0x3c3250(0x567)]=function(_0x304ff9,_0x5a64b8,_0x2e373c,_0x1a6338,_0x34fb54,_0xe29a3f,_0x83596b,_0x5dfc03){const _0x5db146=_0x3c3250;_0xe29a3f=_0xe29a3f[_0x5db146(0x48f)](0.000001,0.999999);const _0x34c594=this[_0x5db146(0x4cb)];_0x34c594['save']();const _0x54a4c0=_0x1a6338*(Math['PI']/0xb4),_0x24ad7b=_0x2e373c*0x2;_0x34c594[_0x5db146(0x556)](_0x304ff9-_0x2e373c,_0x5a64b8-_0x2e373c);const _0x26e81d=_0x34c594[_0x5db146(0x34b)](_0x2e373c,_0x2e373c,_0x5dfc03,_0x2e373c,_0x2e373c,_0x2e373c),_0x4f95bb=ColorManager[_0x5db146(0x349)](_0x34fb54,_0x83596b/0x2),_0x4bf887=ColorManager[_0x5db146(0x349)](_0x34fb54,_0x83596b),_0x52c89f=ColorManager[_0x5db146(0x349)](_0x34fb54,0x0);_0x26e81d[_0x5db146(0x22e)](0x0,_0x4f95bb),_0x26e81d[_0x5db146(0x22e)](_0xe29a3f/0x2,_0x4bf887),_0x26e81d['addColorStop'](_0xe29a3f,_0x4bf887),_0x26e81d[_0x5db146(0x22e)](0x1,_0x52c89f),_0x34c594[_0x5db146(0x244)]=_0x26e81d,_0x34c594['beginPath'](),_0x34c594[_0x5db146(0x5cc)](_0x2e373c,_0x2e373c),_0x34c594['lineTo'](_0x24ad7b,_0x2e373c),_0x34c594['arc'](_0x2e373c,_0x2e373c,_0x2e373c,0x0,_0x54a4c0),_0x34c594[_0x5db146(0x242)](_0x2e373c,_0x2e373c),_0x34c594[_0x5db146(0x584)](),_0x34c594[_0x5db146(0x213)](),_0x34c594[_0x5db146(0x2cc)](),this[_0x5db146(0x5e9)][_0x5db146(0x4fa)]();},Bitmap[_0x3c3250(0x206)]['drawOvalGradiantCircle']=function(_0x397ef4,_0x43b7a7,_0xdaa4d9,_0x36635d,_0x494dcc,_0x3b32c7,_0x266104){const _0x3ab0de=_0x3c3250,_0xed58fd=_0x36635d/_0xdaa4d9,_0x140b76=this[_0x3ab0de(0x378)];_0x140b76[_0x3ab0de(0x213)](),_0x140b76[_0x3ab0de(0x303)](0x1,_0xed58fd),this['drawPolyArc'](_0x397ef4,_0x43b7a7/_0xed58fd,_0xdaa4d9,0x168,_0x494dcc,_0x3b32c7,_0x266104,0x0),_0x140b76['restore'](),this[_0x3ab0de(0x5e9)][_0x3ab0de(0x4fa)]();},Bitmap[_0x3c3250(0x206)][_0x3c3250(0x305)]=function(_0x544c04,_0xa237eb,_0x35e81d,_0x472252,_0x3c8af0,_0x2eb0d0){const _0x41f01d=_0x3c3250,_0x14ddf7=this[_0x41f01d(0x378)];_0x35e81d=_0x35e81d||0x1;const _0x1f8d54=_0x35e81d*0x3/0x5;_0x3c8af0=_0x3c8af0??0xff,_0x2eb0d0=_0x2eb0d0??0xa;const _0x1bcb88=ColorManager[_0x41f01d(0x554)](_0x472252),_0x225020=_0x14ddf7[_0x41f01d(0x34b)](_0x1f8d54,_0x1f8d54,0x0,_0x1f8d54,_0x1f8d54,_0x1f8d54),_0x3e5c87='rgba(%1,%2,%3,%4)'[_0x41f01d(0x528)](_0x1bcb88[0x0],_0x1bcb88[0x1],_0x1bcb88[0x2],_0x3c8af0/0xff),_0x3b95b5=_0x41f01d(0x539)[_0x41f01d(0x528)](_0x1bcb88[0x0],_0x1bcb88[0x1],_0x1bcb88[0x2],0x0);_0x225020[_0x41f01d(0x22e)](0x0,_0x3e5c87),_0x225020[_0x41f01d(0x22e)](0x1,_0x3b95b5);const _0x345f87=_0x1f8d54*0x2,_0xb8fb18=ImageManager[_0x41f01d(0x450)](_0x345f87,_0x345f87);_0xb8fb18[_0x41f01d(0x244)]=_0x225020,_0xb8fb18[_0x41f01d(0x2d4)](),_0xb8fb18['arc'](_0x1f8d54,_0x1f8d54,_0x1f8d54,0x0,Math['PI']*0x2,!![]),_0xb8fb18['fill']();for(let _0x174cf2=0x0;_0x174cf2<_0x2eb0d0;_0x174cf2++){const _0x304a48=Math['random']()*(Math['PI']*0x2),_0x271e30=Math['random']()*Math[_0x41f01d(0x4cd)](_0x304a48)*_0x35e81d+(_0x544c04-_0x1f8d54),_0x5931be=Math['random']()*Math['cos'](_0x304a48)*_0x35e81d+(_0xa237eb-_0x1f8d54);_0x14ddf7['drawImage'](ImageManager[_0x41f01d(0x231)](),_0x271e30,_0x5931be);}},Bitmap[_0x3c3250(0x206)][_0x3c3250(0x3fc)]=function(_0x8a68d7,_0x479990,_0x1c3b4a,_0xc2154c,_0x5cb8ae,_0x1a9ccd,_0x182950,_0x39f39e){const _0x453348=_0x3c3250;_0x39f39e=_0x39f39e||0x3;const _0x38ce80=this['context'];let _0x2a8dbf=Math['PI']/0x2*_0x39f39e,_0x47dfa0=_0x8a68d7,_0x4f00bc=_0x479990,_0x3d3a9d=Math['PI']/_0x5cb8ae;_0x38ce80[_0x453348(0x213)](),_0x38ce80[_0x453348(0x2d4)](),_0x38ce80[_0x453348(0x5cc)](_0x8a68d7,_0x479990-_0x1a9ccd);for(let _0x89a8ba=0x0;_0x89a8ba<_0x5cb8ae;_0x89a8ba++){_0x47dfa0=_0x8a68d7+Math[_0x453348(0x2e8)](_0x2a8dbf)*_0x1a9ccd,_0x4f00bc=_0x479990+Math[_0x453348(0x4cd)](_0x2a8dbf)*_0x1a9ccd,_0x38ce80[_0x453348(0x242)](_0x47dfa0,_0x4f00bc),_0x2a8dbf+=_0x3d3a9d,_0x47dfa0=_0x8a68d7+Math[_0x453348(0x2e8)](_0x2a8dbf)*_0x182950,_0x4f00bc=_0x479990+Math['sin'](_0x2a8dbf)*_0x182950,_0x38ce80[_0x453348(0x242)](_0x47dfa0,_0x4f00bc),_0x2a8dbf+=_0x3d3a9d;}_0x38ce80[_0x453348(0x242)](_0x8a68d7,_0x479990-_0x1a9ccd),_0x38ce80[_0x453348(0x5d6)](),_0x38ce80['lineWidth']=0x0,_0x38ce80[_0x453348(0x4d8)]>0x1&&(_0x38ce80[_0x453348(0x4d8)]=_0x38ce80[_0x453348(0x4d8)]-0x1,_0x38ce80[_0x453348(0x32d)]=_0xc2154c,_0x38ce80[_0x453348(0x481)]()),_0x38ce80[_0x453348(0x244)]=_0x1c3b4a,_0x38ce80[_0x453348(0x584)](),_0x38ce80[_0x453348(0x2cc)](),this[_0x453348(0x5e9)][_0x453348(0x4fa)]();},Bitmap['prototype'][_0x3c3250(0x463)]=function(){const _0x3212ea=_0x3c3250,_0x1ff475=0x6,_0x20c974=this[_0x3212ea(0x4cb)],_0x56e506=this[_0x3212ea(0x45e)]/0x2,_0x390dce=this[_0x3212ea(0x243)]/0x2;this[_0x3212ea(0x51e)]=0x3,this[_0x3212ea(0x368)]=0x2+Math[_0x3212ea(0x23a)](0x2),this[_0x3212ea(0x25f)]=Math['min'](_0x56e506,_0x390dce)*0x2/0x3,this[_0x3212ea(0x229)]=Math['PI']*0x2*(Math[_0x3212ea(0x2cb)]()*0.15+0.7),this[_0x3212ea(0x216)]=Math['max'](Math[_0x3212ea(0x5eb)](this[_0x3212ea(0x45e)]/0xc),0x2),_0x20c974[_0x3212ea(0x556)](_0x56e506,_0x390dce);for(let _0x182571=0x0;_0x182571<_0x1ff475;_0x182571++){this['drawSnowflakeLine'](0x0),_0x20c974['rotate'](Math['PI']*0x2/_0x1ff475);}},Bitmap['prototype'][_0x3c3250(0x4ec)]=function(_0x747ff6){const _0x3a4eaf=_0x3c3250;if(_0x747ff6>this[_0x3a4eaf(0x51e)])return;const _0x1ee5d5=this[_0x3a4eaf(0x4cb)];_0x1ee5d5[_0x3a4eaf(0x32d)]=_0x3a4eaf(0x513),_0x1ee5d5[_0x3a4eaf(0x4d8)]=0x3,_0x1ee5d5[_0x3a4eaf(0x2d4)](),_0x1ee5d5['moveTo'](0x0,0x0),_0x1ee5d5['lineTo'](0x0+this[_0x3a4eaf(0x25f)],0x0),_0x1ee5d5[_0x3a4eaf(0x481)]();for(let _0x1e1f2f=0x1;_0x1e1f2f<this[_0x3a4eaf(0x368)]+0x1;_0x1e1f2f++){_0x1ee5d5['save'](),_0x1ee5d5[_0x3a4eaf(0x556)](this['_flakeRadius']*_0x1e1f2f/(this[_0x3a4eaf(0x368)]+0x1),0x0),_0x1ee5d5[_0x3a4eaf(0x303)](0.5,0.5),_0x1ee5d5[_0x3a4eaf(0x213)](),_0x1ee5d5[_0x3a4eaf(0x45f)](this[_0x3a4eaf(0x229)]),this[_0x3a4eaf(0x4ec)](_0x747ff6+0x1),_0x1ee5d5[_0x3a4eaf(0x2cc)](),_0x1ee5d5[_0x3a4eaf(0x213)](),_0x1ee5d5[_0x3a4eaf(0x45f)](-this[_0x3a4eaf(0x229)]),this[_0x3a4eaf(0x4ec)](_0x747ff6+0x1),_0x1ee5d5[_0x3a4eaf(0x2cc)](),_0x1ee5d5[_0x3a4eaf(0x2cc)]();}},Bitmap['prototype'][_0x3c3250(0x5a1)]=function(_0x45c25b,_0x5d21ab,_0x10fc01,_0x29e1bc){const _0x4d08d1=_0x3c3250;let _0x1a4b60=0x1e,_0x55edd5=Math[_0x4d08d1(0x3a0)](_0x29e1bc/0x6),_0x466d8e=0x10;const _0x15b77c=(0xff-_0x466d8e)/_0x55edd5,_0x2e3971=(0xff-_0x1a4b60)/_0x55edd5,_0x4165e1=Math[_0x4d08d1(0x3a0)](_0x29e1bc/_0x55edd5),_0xbc4dca=_0x10fc01/0x10,_0x31313d=_0x5d21ab;let _0x4b313e=Math[_0x4d08d1(0x23a)](0xf4240),_0x481eda=0x10,_0x373845=_0x10fc01/0x2,_0x4a8612=Math[_0x4d08d1(0x55f)](0x4,_0x10fc01/0x10);_0x45c25b-=_0x29e1bc;while(_0x55edd5--){_0x1a4b60+=_0x2e3971,_0x4a8612+=_0xbc4dca,_0x466d8e+=_0x15b77c,_0x45c25b+=_0x4165e1,_0x5d21ab=_0x31313d+Math['cos'](_0x4b313e)*_0x373845/0x2,_0x4b313e+=Math[_0x4d08d1(0x23a)](_0x481eda)+_0x481eda/0x2,_0x29e1bc-=_0x4165e1;if(_0x29e1bc<=0x0)break;const _0x15a563='rgba(255,\x20%1,\x200,\x201)'['format'](_0x1a4b60);this[_0x4d08d1(0x3ed)]=_0x466d8e,this[_0x4d08d1(0x41b)](_0x45c25b,_0x5d21ab,_0x4a8612,_0x15a563);}this[_0x4d08d1(0x3ed)]=0xf0,this['drawCircle'](_0x45c25b,_0x5d21ab,_0x4a8612*0x3/0x4,_0x4d08d1(0x2e3));},Bitmap[_0x3c3250(0x206)][_0x3c3250(0x44a)]=function(){const _0x22ab03=_0x3c3250,_0x21b3fe=this[_0x22ab03(0x378)],_0x89103c=0xa,_0x3b6a8f=0x50,_0x4dcda1={'x':_0x89103c,'y':this['height']/0x2},_0x5412aa=0x8,_0x3f8c9f=this[_0x22ab03(0x45e)]-_0x89103c,_0x59a2a5=ColorManager[_0x22ab03(0x3e6)][_0x22ab03(0x506)](),_0x488380=_0x59a2a5[Math['floor'](Math['random']()*_0x59a2a5[_0x22ab03(0x3de)])],_0x2deae6=0x2,_0x47ee76=this['width']/0x5;_0x21b3fe[_0x22ab03(0x3cf)]=_0x22ab03(0x41c),_0x21b3fe[_0x22ab03(0x32d)]=_0x488380,_0x21b3fe[_0x22ab03(0x4c0)]=_0x488380,_0x21b3fe[_0x22ab03(0x244)]=_0x488380;let _0x48e36c=[],_0x2a9333=_0x4dcda1['x']+_0x3f8c9f;_0x48e36c[_0x22ab03(0x590)]({'x':_0x4dcda1['x'],'y':_0x4dcda1['y']}),_0x48e36c[_0x22ab03(0x590)]({'x':_0x3f8c9f+(Math[_0x22ab03(0x2cb)]()-0.9)*_0x3b6a8f,'y':Math[_0x22ab03(0x2cb)]()*(this['height']-0x64)+_0x3b6a8f});let _0x220fe6=_0x47ee76;while(_0x2a9333>_0x5412aa){const _0x1c6af1=[];for(var _0xdb0c93=0x0;_0xdb0c93<_0x48e36c[_0x22ab03(0x3de)]-0x1;_0xdb0c93++){var _0x2d5fe2=_0x48e36c[_0xdb0c93],_0x51a39e=_0x48e36c[_0xdb0c93+0x1],_0x596003=(_0x2d5fe2['y']+_0x51a39e['y'])/0x2,_0x355b0d=_0x596003+(Math['random']()*0x2-0x1)*_0x220fe6;_0x1c6af1[_0x22ab03(0x590)](_0x2d5fe2,{'x':(_0x2d5fe2['x']+_0x51a39e['x'])/0x2,'y':_0x355b0d});}_0x1c6af1['push'](_0x48e36c[_0x22ab03(0x5d1)]()),_0x48e36c=_0x1c6af1,_0x220fe6/=_0x2deae6,_0x2a9333/=0x2;}_0x21b3fe[_0x22ab03(0x3cf)]=_0x22ab03(0x41c),_0x21b3fe[_0x22ab03(0x328)]=0xf,_0x21b3fe[_0x22ab03(0x2d4)]();for(var _0xdb0c93=0x0;_0xdb0c93<_0x48e36c[_0x22ab03(0x3de)];_0xdb0c93++){_0x21b3fe[_0x22ab03(0x242)](_0x48e36c[_0xdb0c93]['x'],_0x48e36c[_0xdb0c93]['y']);}let _0x199cd1=0x3;while(_0x199cd1--)_0x21b3fe[_0x22ab03(0x481)]();_0x21b3fe[_0x22ab03(0x2cc)](),this[_0x22ab03(0x5e9)][_0x22ab03(0x4fa)]();},Bitmap['prototype'][_0x3c3250(0x5a6)]=function(_0x38a54b){const _0x4ec75c=_0x3c3250,_0x4f2292=this['_context'];_0x38a54b=_0x38a54b||[_0x4ec75c(0x48e),_0x4ec75c(0x2ec),_0x4ec75c(0x476),_0x4ec75c(0x238)];const _0x3ad970=_0x38a54b[0x4]||'#000000',_0x1a03d1=_0x38a54b[0x5]||_0x4ec75c(0x208);_0x4f2292[_0x4ec75c(0x213)](),_0x4f2292[_0x4ec75c(0x57e)](0x0,0.162467,-0.162467,0x0,101.142,-4.33347),_0x4f2292[_0x4ec75c(0x244)]=_0x38a54b[0x0],(_0x4f2292['beginPath'](),_0x4f2292['moveTo'](555.3,409.4),_0x4f2292['bezierCurveTo'](527.4,409.4,497.2,419.2,497.3,436.6),_0x4f2292[_0x4ec75c(0x2e7)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x4f2292[_0x4ec75c(0x2e7)](463.7,482.7,447.7,487.4,391.9,479.6),_0x4f2292['lineTo'](383.8,481.2),_0x4f2292[_0x4ec75c(0x242)](381.2,481.7),_0x4f2292['bezierCurveTo'](376.9,509.6,372.6,548.2,346.8,563.2),_0x4f2292[_0x4ec75c(0x2e7)](332.8,526.3,293.1,567.7,267.3,582.7),_0x4f2292[_0x4ec75c(0x2e7)](307.4,497.6,232.9,526.3,215.7,563.2),_0x4f2292[_0x4ec75c(0x2e7)](200.7,0x220,157.7,541.9,131.9,559.1),_0x4f2292[_0x4ec75c(0x2e7)](140.4,545.2,146.9,526.3,148.2,507.1),_0x4f2292['bezierCurveTo'](149.1,493.9,147.6,480.6,142.6,468.8),_0x4f2292[_0x4ec75c(0x2e7)](168.4,466.7,236.8,435.6,196.3,408.6),_0x4f2292[_0x4ec75c(0x2e7)](195.1,407.8,193.2,407.2,190.6,406.8),_0x4f2292['bezierCurveTo'](170.3,403.6,111.9,412.7,90.9,427.9),_0x4f2292['bezierCurveTo'](104.7,374.2,66.4,0x168,39.7,345.5),_0x4f2292[_0x4ec75c(0x2e7)](39.7,345.5,104.6,326.9,104.6,279.6),_0x4f2292[_0x4ec75c(0x2e7)](129.9,305.1,168.2,305.4,189.7,290.3),_0x4f2292['bezierCurveTo'](215.5,273.1,172.5,245.2,157.5,238.7),_0x4f2292['bezierCurveTo'](168.2,234.4,185.4,230.2,185.4,215.2),_0x4f2292[_0x4ec75c(0x2e7)](185.4,184.8,165.4,0x9d,146.1,0x8e),_0x4f2292[_0x4ec75c(0x2e7)](200.5,133.4,185.4,27.6,185.4,27.6),_0x4f2292[_0x4ec75c(0x2e7)](185.4,27.6,232.7,96.9,287.1,77.6),_0x4f2292[_0x4ec75c(0x2e7)](278.5,116.3,282.2,163.6,309.4,0xaa),_0x4f2292[_0x4ec75c(0x2e7)](319.9,172.5,346.7,161.4,346.7,161.4),_0x4f2292[_0x4ec75c(0x2e7)](343.2,202.2,345.5,215.3,369.4,215.3),_0x4f2292['bezierCurveTo'](392.3,215.3,413.3,0xaa,416.5,133.5),_0x4f2292[_0x4ec75c(0x2e7)](447.6,142.1,493.3,0x7e,527.7,89.4),_0x4f2292[_0x4ec75c(0x2e7)](527.2,90.9,502.6,170.4,533.7,206.5),_0x4f2292[_0x4ec75c(0x2e7)](504.5,211.4,477.2,236.8,474.1,0x100),_0x4f2292[_0x4ec75c(0x2e7)](0x1d8,269.2,481.3,279.6,509.4,278.3),_0x4f2292[_0x4ec75c(0x2e7)](512.3,278.2,515.3,277.9,518.6,277.5),_0x4f2292[_0x4ec75c(0x2e7)](510.4,326.9,593.3,323.5,593.3,323.5),_0x4f2292['bezierCurveTo'](561.3,347.2,541.7,0x172,555.3,409.4)),_0x4f2292[_0x4ec75c(0x584)](),_0x4f2292['fillStyle']=_0x38a54b[0x1],(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292[_0x4ec75c(0x5cc)](509.7,278.3),_0x4f2292['bezierCurveTo'](501.6,295.2,497.9,314.1,492.3,332.2),_0x4f2292[_0x4ec75c(0x2e7)](482.3,364.8,462.5,0x18e,0x1ae,408.1),_0x4f2292[_0x4ec75c(0x2e7)](422.2,410.5,413.9,411.5,406.4,414.8),_0x4f2292[_0x4ec75c(0x2e7)](377.9,427.1,370.6,0x1d2,344.4,482.5),_0x4f2292[_0x4ec75c(0x2e7)](307.2,0x1fa,259.1,472.5,215.5,477.7),_0x4f2292['bezierCurveTo'](191.1,480.7,170.2,495.6,148.3,507.2),_0x4f2292[_0x4ec75c(0x2e7)](149.2,0x1ee,147.7,480.7,142.7,468.9),_0x4f2292[_0x4ec75c(0x2e7)](168.5,466.8,236.9,435.7,196.4,408.7),_0x4f2292[_0x4ec75c(0x2e7)](195.2,407.9,193.3,407.3,190.7,406.9),_0x4f2292[_0x4ec75c(0x2e7)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x4f2292['bezierCurveTo'](104.8,374.3,66.5,360.1,39.8,345.6),_0x4f2292[_0x4ec75c(0x2e7)](39.8,345.6,104.7,0x147,104.7,279.7),_0x4f2292[_0x4ec75c(0x2e7)](0x82,305.2,168.3,305.5,189.8,290.4),_0x4f2292[_0x4ec75c(0x2e7)](215.6,273.2,172.6,245.3,157.6,238.8),_0x4f2292[_0x4ec75c(0x2e7)](168.3,234.5,185.5,230.3,185.5,215.3),_0x4f2292[_0x4ec75c(0x2e7)](185.5,184.9,165.5,157.1,146.2,142.1),_0x4f2292[_0x4ec75c(0x2e7)](200.6,133.5,185.5,27.7,185.5,27.7),_0x4f2292[_0x4ec75c(0x2e7)](185.5,27.7,232.8,0x61,287.2,77.7),_0x4f2292[_0x4ec75c(0x2e7)](278.6,116.4,282.3,163.7,309.5,170.1),_0x4f2292[_0x4ec75c(0x2e7)](0x140,172.6,346.8,161.5,346.8,161.5),_0x4f2292[_0x4ec75c(0x2e7)](343.3,202.3,345.6,215.4,369.5,215.4),_0x4f2292['bezierCurveTo'](392.4,215.4,413.4,170.1,416.6,133.6),_0x4f2292[_0x4ec75c(0x2e7)](447.7,142.2,493.4,126.1,527.8,89.5),_0x4f2292[_0x4ec75c(0x2e7)](527.3,0x5b,502.7,170.5,533.8,206.6),_0x4f2292[_0x4ec75c(0x2e7)](504.6,211.5,477.3,236.9,474.2,256.1),_0x4f2292[_0x4ec75c(0x2e7)](472.2,269.3,481.5,279.6,509.7,278.3)),_0x4f2292[_0x4ec75c(0x584)](),_0x4f2292[_0x4ec75c(0x244)]=_0x38a54b[0x2],(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292[_0x4ec75c(0x5cc)](533.9,206.6),_0x4f2292[_0x4ec75c(0x2e7)](504.7,211.5,477.4,236.9,474.3,256.1),_0x4f2292[_0x4ec75c(0x2e7)](461.6,260.5,449.1,265.3,435.6,271.5),_0x4f2292[_0x4ec75c(0x2e7)](420.6,278.4,403.5,280.9,390.2,290.6),_0x4f2292[_0x4ec75c(0x2e7)](0x173,304.6,364.5,329.8,357.1,352.4),_0x4f2292[_0x4ec75c(0x2e7)](349.7,0x177,337.4,399.6,314.4,405.8),_0x4f2292[_0x4ec75c(0x2e7)](290.1,412.3,0x10a,395.2,0xf1,393.4),_0x4f2292['bezierCurveTo'](223.2,392.1,206.8,398.4,190.7,406.9),_0x4f2292[_0x4ec75c(0x2e7)](170.4,403.7,0x70,412.8,0x5b,0x1ac),_0x4f2292[_0x4ec75c(0x2e7)](104.8,374.3,66.5,360.1,39.8,345.6),_0x4f2292[_0x4ec75c(0x2e7)](39.8,345.6,104.7,0x147,104.7,279.7),_0x4f2292[_0x4ec75c(0x2e7)](0x82,305.2,168.3,305.5,189.8,290.4),_0x4f2292[_0x4ec75c(0x2e7)](215.6,273.2,172.6,245.3,157.6,238.8),_0x4f2292[_0x4ec75c(0x2e7)](168.3,234.5,185.5,230.3,185.5,215.3),_0x4f2292[_0x4ec75c(0x2e7)](185.5,184.9,165.5,157.1,146.2,142.1),_0x4f2292['bezierCurveTo'](200.6,133.5,185.5,27.7,185.5,27.7),_0x4f2292['bezierCurveTo'](185.5,27.7,232.8,0x61,287.2,77.7),_0x4f2292[_0x4ec75c(0x2e7)](278.6,116.4,282.3,163.7,309.5,170.1),_0x4f2292[_0x4ec75c(0x2e7)](0x140,172.6,346.8,161.5,346.8,161.5),_0x4f2292['bezierCurveTo'](343.3,202.3,345.6,215.4,369.5,215.4),_0x4f2292[_0x4ec75c(0x2e7)](392.4,215.4,413.4,170.1,416.6,133.6),_0x4f2292[_0x4ec75c(0x2e7)](447.7,142.2,493.4,126.1,527.8,89.5),_0x4f2292[_0x4ec75c(0x2e7)](527.4,0x5b,502.8,170.4,533.9,206.6)),_0x4f2292['fill'](),_0x4f2292[_0x4ec75c(0x244)]=_0x38a54b[0x3],(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292[_0x4ec75c(0x5cc)](120.7,325.8),_0x4f2292[_0x4ec75c(0x2e7)](126.5,334.6,138.7,335.8,149.3,336.1),_0x4f2292[_0x4ec75c(0x2e7)](193.7,337.4,238.1,338.7,282.5,0x154),_0x4f2292['bezierCurveTo'](289.7,340.2,297.6,340.2,303.3,335.8),_0x4f2292[_0x4ec75c(0x2e7)](312.9,328.2,310.8,312.8,317.4,302.5),_0x4f2292[_0x4ec75c(0x2e7)](324.7,291.1,0x154,0x121,353.1,285.9),_0x4f2292[_0x4ec75c(0x2e7)](405.5,273.6,444.9,231.7,0x1e1,191.8),_0x4f2292[_0x4ec75c(0x2e7)](486.2,186.1,491.6,0xb4,493.5,172.5),_0x4f2292['bezierCurveTo'](498.1,154.8,479.9,137.4,461.6,136.9),_0x4f2292[_0x4ec75c(0x2e7)](443.3,136.5,426.8,0x94,414.2,161.3),_0x4f2292[_0x4ec75c(0x2e7)](401.7,174.6,398.5,197.8,383.5,208.2),_0x4f2292[_0x4ec75c(0x2e7)](368.5,218.6,339.2,214.6,325.5,202.5),_0x4f2292[_0x4ec75c(0x2e7)](317.3,195.2,313.8,184.1,307.6,0xaf),_0x4f2292['bezierCurveTo'](291.6,151.6,259.3,144.6,241.8,122.3),_0x4f2292['bezierCurveTo'](235.7,114.6,231.7,105.4,225.2,98.1),_0x4f2292[_0x4ec75c(0x2e7)](218.6,0x5b,0xd0,85.9,0xc7,89.8),_0x4f2292['bezierCurveTo'](186.5,95.3,186.2,112.6,188.1,126.1),_0x4f2292['bezierCurveTo'](192.5,0x9d,198.5,187.7,205.8,0xda),_0x4f2292['bezierCurveTo'](211.1,239.7,216.2,265.5,201.2,282.2),_0x4f2292[_0x4ec75c(0x2e7)](189.7,295.1,108.1,306.6,120.7,325.8)),_0x4f2292['fill'](),_0x4f2292['strokeStyle']=_0x1a03d1,_0x4f2292[_0x4ec75c(0x4d8)]=0x5,(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292[_0x4ec75c(0x5cc)](555.3,409.4),_0x4f2292['bezierCurveTo'](527.4,409.4,497.2,419.2,497.3,436.6),_0x4f2292[_0x4ec75c(0x2e7)](497.4,449.1,512.3,0x1d7,512.3,0x1d7),_0x4f2292[_0x4ec75c(0x2e7)](463.7,482.7,447.7,487.4,391.9,479.6),_0x4f2292[_0x4ec75c(0x242)](383.8,481.2),_0x4f2292[_0x4ec75c(0x242)](381.2,481.7),_0x4f2292[_0x4ec75c(0x2e7)](376.9,509.6,372.6,548.2,346.8,563.2),_0x4f2292[_0x4ec75c(0x2e7)](332.8,526.3,293.1,567.7,267.3,582.7),_0x4f2292[_0x4ec75c(0x2e7)](307.4,497.6,232.9,526.3,215.7,563.2),_0x4f2292[_0x4ec75c(0x2e7)](200.7,0x220,157.7,541.9,131.9,559.1),_0x4f2292[_0x4ec75c(0x2e7)](146.3,535.7,154.9,497.6,142.6,468.8),_0x4f2292[_0x4ec75c(0x2e7)](168.4,466.7,236.8,435.6,196.3,408.6),_0x4f2292[_0x4ec75c(0x2e7)](185.6,401.4,114.6,410.7,0x5b,427.9),_0x4f2292[_0x4ec75c(0x2e7)](104.8,374.2,66.5,0x168,39.8,345.5),_0x4f2292['bezierCurveTo'](39.8,345.5,104.7,326.9,104.7,279.6),_0x4f2292[_0x4ec75c(0x2e7)](0x82,305.1,168.3,305.4,189.8,290.3),_0x4f2292[_0x4ec75c(0x2e7)](215.6,273.1,172.6,245.2,157.6,238.7),_0x4f2292[_0x4ec75c(0x2e7)](168.3,234.4,185.5,230.2,185.5,215.2),_0x4f2292['bezierCurveTo'](185.5,184.8,165.5,0x9d,146.2,0x8e),_0x4f2292[_0x4ec75c(0x2e7)](200.6,133.4,185.5,27.6,185.5,27.6),_0x4f2292[_0x4ec75c(0x2e7)](185.5,27.6,232.8,96.9,287.2,77.6),_0x4f2292[_0x4ec75c(0x2e7)](278.6,116.3,282.3,163.6,309.5,0xaa),_0x4f2292['bezierCurveTo'](0x140,172.5,346.8,161.4,346.8,161.4),_0x4f2292[_0x4ec75c(0x2e7)](343.3,202.2,345.6,215.3,369.5,215.3),_0x4f2292[_0x4ec75c(0x2e7)](392.4,215.3,413.4,0xaa,416.6,133.5),_0x4f2292[_0x4ec75c(0x2e7)](447.7,142.1,493.4,0x7e,527.8,89.4),_0x4f2292['bezierCurveTo'](527.3,90.9,502.7,170.4,533.8,206.5),_0x4f2292[_0x4ec75c(0x2e7)](482.3,215.2,437.1,287.1,518.8,277.4),_0x4f2292[_0x4ec75c(0x2e7)](510.6,326.8,593.5,323.4,593.5,323.4),_0x4f2292[_0x4ec75c(0x2e7)](561.3,347.2,541.7,0x172,555.3,409.4)),_0x4f2292['stroke'](),_0x4f2292[_0x4ec75c(0x244)]=_0x3ad970,(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292['moveTo'](236.9,152.9),_0x4f2292[_0x4ec75c(0x2e7)](245.5,185.6,255.3,217.6,268.2,0xf9),_0x4f2292[_0x4ec75c(0x2e7)](281.4,281.1,296.5,312.4,310.8,344.1),_0x4f2292[_0x4ec75c(0x2e7)](338.4,0x195,369.3,464.6,393.1,527.2),_0x4f2292[_0x4ec75c(0x2e7)](0x18f,542.9,404.5,558.8,408.9,0x23f),_0x4f2292[_0x4ec75c(0x2e7)](0x19b,582.4,412.8,589.9,414.4,597.4),_0x4f2292[_0x4ec75c(0x2e7)](415.2,601.3,0x1a0,605.1,416.7,0x261),_0x4f2292[_0x4ec75c(0x2e7)](417.6,0x266,419.5,617.1,423.2,620.4),_0x4f2292[_0x4ec75c(0x2e7)](426.8,623.6,432.5,623.3,435.1,618.9),_0x4f2292[_0x4ec75c(0x2e7)](437.5,614.8,438.8,611.3,0x1b6,606.5),_0x4f2292['bezierCurveTo'](437.4,603.1,436.7,599.6,0x1b4,596.2),_0x4f2292['bezierCurveTo'](434.5,589.4,432.8,582.7,430.8,0x240),_0x4f2292[_0x4ec75c(0x2e7)](426.8,561.9,421.9,0x224,416.7,534.4),_0x4f2292['bezierCurveTo'](0x195,0x1f8,0x187,474.6,376.2,445.6),_0x4f2292[_0x4ec75c(0x2e7)](344.5,383.6,308.7,323.8,279.9,260.4),_0x4f2292[_0x4ec75c(0x2e7)](264.1,225.5,0xf8,189.7,237.6,152.8),_0x4f2292['bezierCurveTo'](237.5,152.3,236.7,152.5,236.9,152.9)),_0x4f2292['fill'](),_0x4f2292['fillStyle']=_0x3ad970,(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292['moveTo'](436.6,221.3),_0x4f2292[_0x4ec75c(0x2e7)](415.7,0xfa,403.1,0x11a,395.3,316.5),_0x4f2292[_0x4ec75c(0x2e7)](388.4,347.3,382.8,379.1,0x17c,410.6),_0x4f2292[_0x4ec75c(0x2e7)](378.2,430.6,377.5,0x1c3,378.3,471.1),_0x4f2292[_0x4ec75c(0x2e7)](378.6,477.6,388.6,477.7,388.5,471.1),_0x4f2292[_0x4ec75c(0x2e7)](388.2,453.4,387.8,435.8,388.7,418.1),_0x4f2292['bezierCurveTo'](389.4,0x194,390.9,389.9,392.1,375.8),_0x4f2292[_0x4ec75c(0x2e7)](395.2,341.9,398.1,308.4,409.7,276.1),_0x4f2292[_0x4ec75c(0x2e7)](416.6,256.9,426.2,238.9,437.7,222.1),_0x4f2292[_0x4ec75c(0x2e7)](438.3,221.2,437.1,220.6,436.6,221.3)),_0x4f2292[_0x4ec75c(0x584)](),_0x4f2292[_0x4ec75c(0x244)]=_0x3ad970,(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292[_0x4ec75c(0x5cc)](0x86,344.4),_0x4f2292['bezierCurveTo'](209.5,355.1,275.3,397.6,335.7,441.6),_0x4f2292[_0x4ec75c(0x2e7)](343.7,447.4,351.6,453.3,359.4,459.2),_0x4f2292[_0x4ec75c(0x2e7)](363.3,462.2,367.2,465.1,371.2,468.1),_0x4f2292[_0x4ec75c(0x2e7)](375.2,471.1,378.3,474.1,383.4,474.6),_0x4f2292[_0x4ec75c(0x2e7)](385.5,474.8,387.6,472.1,386.8,470.1),_0x4f2292[_0x4ec75c(0x2e7)](383.8,462.7,374.4,0x1ca,368.1,453.5),_0x4f2292[_0x4ec75c(0x2e7)](360.9,448.2,353.6,442.9,346.3,437.7),_0x4f2292[_0x4ec75c(0x2e7)](330.9,426.7,315.3,416.1,299.1,406.2),_0x4f2292[_0x4ec75c(0x2e7)](266.5,386.3,232.2,368.6,195.8,356.6),_0x4f2292['bezierCurveTo'](175.6,349.9,155.1,345.9,133.9,343.9),_0x4f2292[_0x4ec75c(0x2e7)](133.7,343.9,133.6,344.4,0x86,344.4)),_0x4f2292['fill'](),_0x4f2292[_0x4ec75c(0x244)]=_0x3ad970,(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292[_0x4ec75c(0x5cc)](458.7,294.7),_0x4f2292['bezierCurveTo'](458.7,294.7,0x1c9,295.4,0x1c6,296.6),_0x4f2292[_0x4ec75c(0x2e7)](0x1c3,297.8,446.6,299.5,441.2,301.6),_0x4f2292[_0x4ec75c(0x2e7)](435.8,303.7,429.4,306.2,422.4,309.1),_0x4f2292['bezierCurveTo'](415.4,0x138,407.8,315.5,400.2,319.5),_0x4f2292[_0x4ec75c(0x2e7)](399.3,0x140,398.5,320.4,397.6,320.9),_0x4f2292[_0x4ec75c(0x242)](396.2,321.7),_0x4f2292[_0x4ec75c(0x242)](395.5,322.1),_0x4f2292[_0x4ec75c(0x2e7)](395.4,322.2,395.4,0x142,395.4,0x142),_0x4f2292[_0x4ec75c(0x242)](395.3,321.8),_0x4f2292[_0x4ec75c(0x242)](395.1,321.5),_0x4f2292['bezierCurveTo'](394.5,320.6,393.9,319.7,393.3,318.8),_0x4f2292[_0x4ec75c(0x242)](392.4,317.5),_0x4f2292['lineTo'](0x188,316.7),_0x4f2292[_0x4ec75c(0x2e7)](390.9,314.6,390.1,312.6,389.3,310.6),_0x4f2292[_0x4ec75c(0x2e7)](387.9,306.6,0x183,302.6,386.2,298.9),_0x4f2292[_0x4ec75c(0x2e7)](384.7,291.5,0x180,284.8,383.6,279.1),_0x4f2292[_0x4ec75c(0x2e7)](382.8,267.8,383.4,260.5,383.5,259.4),_0x4f2292[_0x4ec75c(0x2e7)](383.6,258.2,384.2,265.4,386.3,0x115),_0x4f2292[_0x4ec75c(0x2e7)](387.4,282.8,388.8,289.7,390.7,297.2),_0x4f2292['bezierCurveTo'](391.7,300.9,392.8,304.8,394.3,308.5),_0x4f2292['bezierCurveTo'](395.1,310.4,395.8,312.2,396.8,313.9),_0x4f2292[_0x4ec75c(0x242)](397.1,314.6),_0x4f2292[_0x4ec75c(0x2e7)](397.1,314.7,397.1,314.6,397.1,314.7),_0x4f2292['lineTo'](397.1,314.7),_0x4f2292[_0x4ec75c(0x242)](397.1,314.7),_0x4f2292[_0x4ec75c(0x242)](397.1,314.7),_0x4f2292['lineTo'](397.1,314.7),_0x4f2292[_0x4ec75c(0x242)](397.1,314.7),_0x4f2292[_0x4ec75c(0x242)](397.4,314.5),_0x4f2292[_0x4ec75c(0x2e7)](405.3,310.3,413.3,307.1,420.6,304.6),_0x4f2292[_0x4ec75c(0x2e7)](427.9,302.1,434.6,300.3,440.2,298.9),_0x4f2292[_0x4ec75c(0x2e7)](445.8,297.5,450.4,296.5,453.6,295.8),_0x4f2292[_0x4ec75c(0x2e7)](456.9,295.1,458.7,294.7,458.7,294.7)),_0x4f2292[_0x4ec75c(0x584)](),_0x4f2292[_0x4ec75c(0x244)]=_0x3ad970,(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292[_0x4ec75c(0x5cc)](213.6,309.8),_0x4f2292[_0x4ec75c(0x2e7)](213.6,309.8,214.3,310.1,215.7,310.8),_0x4f2292[_0x4ec75c(0x2e7)](216.4,311.1,217.2,311.5,218.2,311.9),_0x4f2292[_0x4ec75c(0x2e7)](219.2,312.3,220.3,312.8,221.7,313.3),_0x4f2292['bezierCurveTo'](224.3,314.4,227.6,315.5,231.4,316.8),_0x4f2292[_0x4ec75c(0x2e7)](235.2,0x13e,239.6,319.4,244.4,320.8),_0x4f2292['bezierCurveTo'](254.1,323.6,265.8,326.5,278.7,330.5),_0x4f2292[_0x4ec75c(0x2e7)](285.1,332.6,291.8,334.9,298.6,0x152),_0x4f2292[_0x4ec75c(0x2e7)](305.4,0x155,312.2,344.8,318.5,349.8),_0x4f2292[_0x4ec75c(0x2e7)](319.9,350.9,321.2,0x160,322.5,353.2),_0x4f2292[_0x4ec75c(0x2e7)](323.1,353.8,323.8,354.4,324.4,354.9),_0x4f2292['bezierCurveTo'](0x145,355.5,325.6,356.1,326.1,356.7),_0x4f2292[_0x4ec75c(0x2e7)](326.4,0x165,326.7,357.3,0x147,357.6),_0x4f2292[_0x4ec75c(0x242)](327.1,357.7),_0x4f2292[_0x4ec75c(0x242)](327.1,357.7),_0x4f2292[_0x4ec75c(0x242)](327.1,357.7),_0x4f2292[_0x4ec75c(0x242)](327.1,357.7),_0x4f2292[_0x4ec75c(0x242)](327.1,357.8),_0x4f2292[_0x4ec75c(0x2e7)](327.1,357.9,327.2,357.9,327.2,0x166),_0x4f2292[_0x4ec75c(0x2e7)](327.2,0x166,327.2,0x166,327.3,357.9),_0x4f2292['lineTo'](327.3,357.8),_0x4f2292[_0x4ec75c(0x242)](327.3,357.8),_0x4f2292['lineTo'](327.3,357.8),_0x4f2292[_0x4ec75c(0x242)](327.3,357.7),_0x4f2292[_0x4ec75c(0x242)](327.3,357.4),_0x4f2292[_0x4ec75c(0x242)](327.4,356.2),_0x4f2292[_0x4ec75c(0x2e7)](327.5,354.6,327.6,0x161,327.7,351.5),_0x4f2292[_0x4ec75c(0x2e7)](327.8,349.9,0x148,348.4,328.1,346.9),_0x4f2292[_0x4ec75c(0x2e7)](328.7,340.8,329.6,335.1,330.5,329.7),_0x4f2292[_0x4ec75c(0x2e7)](332.3,318.9,334.3,309.4,335.8,301.5),_0x4f2292[_0x4ec75c(0x2e7)](0x153,285.6,340.2,275.5,340.5,273.7),_0x4f2292['bezierCurveTo'](340.6,272.8,340.6,274.8,340.5,279.2),_0x4f2292[_0x4ec75c(0x2e7)](340.3,283.6,339.8,290.3,338.8,298.8),_0x4f2292['bezierCurveTo'](337.9,307.3,336.4,317.5,0x14f,328.9),_0x4f2292[_0x4ec75c(0x2e7)](334.3,334.6,333.6,340.6,333.2,346.8),_0x4f2292['bezierCurveTo'](333.1,348.4,0x14d,349.9,332.9,351.5),_0x4f2292[_0x4ec75c(0x2e7)](332.8,353.1,332.7,354.7,332.7,356.3),_0x4f2292['bezierCurveTo'](332.7,357.3,332.6,358.3,332.6,359.3),_0x4f2292[_0x4ec75c(0x2e7)](332.5,360.9,332.6,362.6,332.5,364.2),_0x4f2292[_0x4ec75c(0x2e7)](332.5,367.5,332.4,370.8,332.4,374.2),_0x4f2292['bezierCurveTo'](330.5,371.7,328.7,369.1,326.6,366.6),_0x4f2292[_0x4ec75c(0x2e7)](325.6,365.3,324.6,364.1,323.6,362.8),_0x4f2292[_0x4ec75c(0x242)](322.8,361.8),_0x4f2292[_0x4ec75c(0x2e7)](322.6,361.6,322.5,361.5,322.4,361.4),_0x4f2292[_0x4ec75c(0x242)](321.6,360.6),_0x4f2292[_0x4ec75c(0x2e7)](321.1,360.1,320.6,359.5,0x140,0x167),_0x4f2292[_0x4ec75c(0x242)](318.3,357.5),_0x4f2292[_0x4ec75c(0x2e7)](317.2,356.5,0x13c,355.5,314.8,354.6),_0x4f2292[_0x4ec75c(0x2e7)](308.9,0x15e,302.5,346.4,296.1,343.3),_0x4f2292[_0x4ec75c(0x2e7)](289.7,340.2,283.2,337.7,276.9,335.4),_0x4f2292[_0x4ec75c(0x2e7)](264.4,330.9,252.9,327.3,243.3,323.8),_0x4f2292[_0x4ec75c(0x2e7)](238.5,322.1,234.2,320.4,230.5,318.8),_0x4f2292[_0x4ec75c(0x2e7)](226.8,317.2,223.6,315.7,221.1,314.4),_0x4f2292['bezierCurveTo'](219.8,313.8,218.7,313.1,217.8,312.6),_0x4f2292[_0x4ec75c(0x2e7)](216.8,312.1,0xd8,311.6,215.4,311.2),_0x4f2292['bezierCurveTo'](214.3,310.2,213.6,309.8,213.6,309.8)),_0x4f2292[_0x4ec75c(0x584)](),_0x4f2292[_0x4ec75c(0x244)]=_0x3ad970,(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292[_0x4ec75c(0x5cc)](235.1,251.7),_0x4f2292[_0x4ec75c(0x2e7)](235.1,251.7,236.5,252.2,238.9,253.2),_0x4f2292[_0x4ec75c(0x2e7)](241.3,254.2,244.9,255.7,249.1,257.8),_0x4f2292[_0x4ec75c(0x2e7)](253.4,259.9,258.3,262.4,263.8,265.3),_0x4f2292['bezierCurveTo'](269.3,268.1,275.3,271.2,281.7,273.9),_0x4f2292['bezierCurveTo'](282.5,274.3,283.3,274.6,284.1,274.9),_0x4f2292[_0x4ec75c(0x2e7)](284.5,275.1,284.9,275.2,285.3,275.4),_0x4f2292[_0x4ec75c(0x242)](285.9,275.6),_0x4f2292['bezierCurveTo'](0x11e,275.6,285.9,275.6,285.9,275.6),_0x4f2292[_0x4ec75c(0x242)](0x11e,275.7),_0x4f2292[_0x4ec75c(0x2e7)](0x11e,275.7,0x11e,275.7,0x11e,275.6),_0x4f2292[_0x4ec75c(0x242)](0x11e,275.4),_0x4f2292['lineTo'](0x11e,0x113),_0x4f2292[_0x4ec75c(0x2e7)](286.1,274.2,286.2,273.5,286.3,272.8),_0x4f2292['bezierCurveTo'](286.5,271.1,286.8,269.5,287.2,0x10c),_0x4f2292['bezierCurveTo'](288.7,261.8,291.1,256.8,293.2,252.7),_0x4f2292['bezierCurveTo'](295.4,248.6,297.3,245.4,298.8,243.1),_0x4f2292[_0x4ec75c(0x2e7)](300.3,240.8,301.2,239.4,301.5,238.9),_0x4f2292[_0x4ec75c(0x2e7)](301.8,238.5,301.4,239.7,300.5,242.1),_0x4f2292[_0x4ec75c(0x2e7)](299.6,244.5,298.2,248.1,296.6,252.6),_0x4f2292['bezierCurveTo'](0x127,257.1,293.2,262.5,292.1,268.5),_0x4f2292[_0x4ec75c(0x2e7)](0x124,269.2,291.9,0x10e,291.8,270.8),_0x4f2292[_0x4ec75c(0x2e7)](291.7,271.6,291.6,272.3,291.6,273.1),_0x4f2292[_0x4ec75c(0x2e7)](291.6,273.5,291.6,273.9,291.5,274.3),_0x4f2292[_0x4ec75c(0x242)](291.5,274.9),_0x4f2292['bezierCurveTo'](291.5,275.1,291.5,275.2,291.5,275.6),_0x4f2292[_0x4ec75c(0x2e7)](291.5,277.1,291.5,278.5,291.5,0x118),_0x4f2292['bezierCurveTo'](291.5,280.8,291.5,281.7,291.5,282.5),_0x4f2292['lineTo'](291.5,283.1),_0x4f2292['lineTo'](291.5,283.4),_0x4f2292['lineTo'](291.5,283.5),_0x4f2292['lineTo'](291.4,283.5),_0x4f2292['lineTo'](291.3,283.4),_0x4f2292[_0x4ec75c(0x242)](290.1,0x11b),_0x4f2292[_0x4ec75c(0x2e7)](288.5,282.4,286.9,281.9,285.2,281.3),_0x4f2292[_0x4ec75c(0x2e7)](284.8,281.2,284.3,0x119,0x11c,280.9),_0x4f2292[_0x4ec75c(0x242)](283.3,280.6),_0x4f2292[_0x4ec75c(0x242)](0x11a,280.1),_0x4f2292[_0x4ec75c(0x2e7)](281.1,279.8,280.3,279.4,279.5,279.1),_0x4f2292[_0x4ec75c(0x2e7)](272.7,276.2,266.7,272.7,261.4,269.4),_0x4f2292[_0x4ec75c(0x2e7)](256.1,266.1,251.5,262.9,247.6,260.2),_0x4f2292['bezierCurveTo'](243.7,257.5,240.6,255.4,238.4,253.9),_0x4f2292[_0x4ec75c(0x2e7)](236.3,252.5,235.1,251.7,235.1,251.7)),_0x4f2292[_0x4ec75c(0x584)](),_0x4f2292[_0x4ec75c(0x244)]=_0x3ad970,(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292[_0x4ec75c(0x5cc)](235.1,0x1d7),_0x4f2292['bezierCurveTo'](235.1,0x1d7,237.1,469.6,240.8,466.9),_0x4f2292[_0x4ec75c(0x2e7)](244.5,464.3,249.8,460.6,256.5,456.2),_0x4f2292[_0x4ec75c(0x2e7)](263.3,451.8,271.4,446.8,281.1,442.1),_0x4f2292['bezierCurveTo'](281.7,441.8,282.3,441.5,282.9,441.2),_0x4f2292[_0x4ec75c(0x2e7)](283.5,440.9,284.1,440.6,284.8,440.4),_0x4f2292[_0x4ec75c(0x2e7)](286.1,439.8,287.3,439.3,288.6,438.7),_0x4f2292[_0x4ec75c(0x2e7)](291.2,437.7,293.9,436.6,296.7,435.7),_0x4f2292[_0x4ec75c(0x2e7)](299.5,434.7,302.4,0x1b2,305.3,433.1),_0x4f2292['bezierCurveTo'](308.3,432.4,311.3,431.7,314.4,431.2),_0x4f2292['bezierCurveTo'](317.5,430.6,320.5,430.3,323.5,0x1ae),_0x4f2292['bezierCurveTo'](324.2,429.9,0x145,429.9,325.7,429.8),_0x4f2292[_0x4ec75c(0x242)](326.3,429.8),_0x4f2292[_0x4ec75c(0x2e7)](326.4,429.8,326.4,429.8,326.4,429.8),_0x4f2292['lineTo'](326.4,429.8),_0x4f2292[_0x4ec75c(0x242)](326.4,429.8),_0x4f2292[_0x4ec75c(0x242)](326.4,429.8),_0x4f2292[_0x4ec75c(0x2e7)](326.5,429.8,326.5,429.8,326.5,429.8),_0x4f2292[_0x4ec75c(0x2e7)](326.5,429.8,326.5,429.8,326.5,429.7),_0x4f2292[_0x4ec75c(0x2e7)](326.2,429.2,0x146,428.6,325.7,428.1),_0x4f2292['bezierCurveTo'](325.1,426.9,324.5,425.7,323.9,424.5),_0x4f2292[_0x4ec75c(0x2e7)](322.7,422.1,321.4,419.8,320.2,417.6),_0x4f2292[_0x4ec75c(0x2e7)](317.7,413.1,315.2,0x199,312.8,405.2),_0x4f2292['bezierCurveTo'](311.5,403.3,310.4,401.5,309.2,399.7),_0x4f2292[_0x4ec75c(0x2e7)](0x134,0x18e,306.8,396.3,305.7,394.7),_0x4f2292['bezierCurveTo'](301.2,388.4,297.1,383.5,294.1,0x17c),_0x4f2292[_0x4ec75c(0x2e7)](0x123,376.5,289.1,374.4,288.5,373.8),_0x4f2292[_0x4ec75c(0x2e7)](287.9,373.2,289.6,374.5,292.9,377.3),_0x4f2292[_0x4ec75c(0x2e7)](293.7,0x17a,294.7,378.8,295.6,379.8),_0x4f2292[_0x4ec75c(0x2e7)](296.6,380.7,297.7,381.8,298.9,382.9),_0x4f2292[_0x4ec75c(0x2e7)](300.1,0x180,301.2,385.3,302.5,386.6),_0x4f2292['bezierCurveTo'](303.8,387.9,305.1,389.4,306.5,390.9),_0x4f2292['bezierCurveTo'](0x138,397.1,318.2,404.9,0x144,414.3),_0x4f2292['bezierCurveTo'](324.7,415.5,325.5,416.6,326.2,417.9),_0x4f2292[_0x4ec75c(0x2e7)](326.9,419.1,327.6,420.3,328.3,421.6),_0x4f2292[_0x4ec75c(0x2e7)](0x149,422.8,329.7,424.1,330.4,425.4),_0x4f2292['bezierCurveTo'](330.7,0x1aa,331.1,426.7,331.4,427.4),_0x4f2292[_0x4ec75c(0x2e7)](0x14c,428.6,332.6,429.9,333.2,431.2),_0x4f2292[_0x4ec75c(0x242)](334.1,433.1),_0x4f2292[_0x4ec75c(0x242)](334.5,434.1),_0x4f2292[_0x4ec75c(0x242)](334.7,434.6),_0x4f2292[_0x4ec75c(0x242)](334.8,434.7),_0x4f2292[_0x4ec75c(0x242)](334.8,434.8),_0x4f2292[_0x4ec75c(0x2e7)](334.8,434.8,334.8,434.8,334.7,434.8),_0x4f2292[_0x4ec75c(0x242)](334.4,434.8),_0x4f2292['bezierCurveTo'](0x14d,434.9,331.6,435.1,330.2,435.3),_0x4f2292[_0x4ec75c(0x2e7)](328.9,435.4,327.6,435.5,326.3,435.6),_0x4f2292['bezierCurveTo'](325.6,435.7,324.8,435.7,324.1,435.8),_0x4f2292['bezierCurveTo'](321.2,436.2,318.2,436.5,315.3,437.1),_0x4f2292[_0x4ec75c(0x2e7)](312.3,437.5,309.5,438.2,306.6,438.8),_0x4f2292[_0x4ec75c(0x2e7)](303.8,439.5,0x12d,440.2,298.3,441.1),_0x4f2292[_0x4ec75c(0x2e7)](295.6,441.9,0x125,442.9,290.4,443.7),_0x4f2292[_0x4ec75c(0x2e7)](289.1,444.2,287.9,444.7,286.6,445.2),_0x4f2292['bezierCurveTo'](0x11e,445.4,285.4,445.7,284.7,445.9),_0x4f2292['bezierCurveTo'](284.1,446.2,283.5,446.4,282.9,446.7),_0x4f2292[_0x4ec75c(0x2e7)](273.3,450.8,264.8,455.1,257.8,458.9),_0x4f2292[_0x4ec75c(0x2e7)](243.8,466.3,235.1,0x1d7,235.1,0x1d7)),_0x4f2292['fill'](),_0x4f2292[_0x4ec75c(0x244)]=_0x3ad970,(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292['moveTo'](0xb1,376.4),_0x4f2292[_0x4ec75c(0x2e7)](0xb1,376.4,178.8,375.9,182.1,375.2),_0x4f2292['bezierCurveTo'](185.4,374.6,190.3,373.8,196.5,373.5),_0x4f2292[_0x4ec75c(0x2e7)](202.6,373.2,209.9,373.4,217.9,0x176),_0x4f2292['bezierCurveTo'](225.9,374.7,234.6,375.8,243.7,376.9),_0x4f2292['bezierCurveTo'](244.3,0x179,244.8,0x179,245.4,377.1),_0x4f2292['lineTo'](245.8,377.1),_0x4f2292[_0x4ec75c(0x242)](245.8,377.1),_0x4f2292[_0x4ec75c(0x242)](245.8,377.1),_0x4f2292['lineTo'](245.8,377.1),_0x4f2292[_0x4ec75c(0x242)](245.9,377.1),_0x4f2292[_0x4ec75c(0x2e7)](245.9,377.1,245.9,377.1,245.9,0x179),_0x4f2292[_0x4ec75c(0x242)](245.8,376.9),_0x4f2292['lineTo'](245.8,376.8),_0x4f2292[_0x4ec75c(0x242)](245.4,376.3),_0x4f2292[_0x4ec75c(0x2e7)](244.7,375.5,244.1,374.7,243.5,0x176),_0x4f2292[_0x4ec75c(0x2e7)](242.2,372.5,240.9,0x173,239.6,369.6),_0x4f2292[_0x4ec75c(0x2e7)](234.4,0x16c,229.3,359.3,224.9,355.4),_0x4f2292[_0x4ec75c(0x2e7)](216.1,347.6,210.3,342.8,209.4,0x156),_0x4f2292[_0x4ec75c(0x2e7)](208.9,341.6,210.3,342.3,213.1,0x158),_0x4f2292[_0x4ec75c(0x2e7)](215.9,345.7,220.1,348.3,225.3,351.9),_0x4f2292[_0x4ec75c(0x2e7)](230.4,355.5,236.4,0x168,242.6,365.6),_0x4f2292['bezierCurveTo'](243.4,366.3,244.1,0x16f,244.9,367.8),_0x4f2292[_0x4ec75c(0x2e7)](245.7,368.6,246.4,369.3,247.2,370.1),_0x4f2292[_0x4ec75c(0x2e7)](0xf8,370.9,248.7,371.7,249.4,372.5),_0x4f2292['lineTo'](0xfa,373.1),_0x4f2292[_0x4ec75c(0x2e7)](250.1,373.2,250.1,373.2,250.2,373.3),_0x4f2292[_0x4ec75c(0x242)](250.4,373.6),_0x4f2292[_0x4ec75c(0x242)](250.9,374.2),_0x4f2292[_0x4ec75c(0x2e7)](251.5,0x177,252.2,375.8,252.8,376.6),_0x4f2292[_0x4ec75c(0x2e7)](254.1,378.2,255.4,379.9,256.7,381.7),_0x4f2292[_0x4ec75c(0x242)](257.7,0x17f),_0x4f2292[_0x4ec75c(0x242)](258.2,383.7),_0x4f2292[_0x4ec75c(0x242)](258.3,383.9),_0x4f2292[_0x4ec75c(0x242)](258.3,383.9),_0x4f2292[_0x4ec75c(0x242)](258.3,383.9),_0x4f2292[_0x4ec75c(0x242)](258.2,383.9),_0x4f2292[_0x4ec75c(0x242)](257.8,383.9),_0x4f2292[_0x4ec75c(0x2e7)](256.7,383.8,255.6,383.7,254.6,383.6),_0x4f2292[_0x4ec75c(0x2e7)](252.4,383.4,250.2,383.2,0xf8,383.1),_0x4f2292[_0x4ec75c(0x2e7)](246.4,382.9,244.9,382.8,243.3,382.6),_0x4f2292[_0x4ec75c(0x2e7)](234.1,381.5,225.4,0x17c,217.6,378.8),_0x4f2292['bezierCurveTo'](209.7,377.6,202.7,376.7,196.7,376.3),_0x4f2292[_0x4ec75c(0x2e7)](190.7,375.9,185.9,375.9,182.5,0x178),_0x4f2292[_0x4ec75c(0x2e7)](178.9,376.3,0xb1,376.4,0xb1,376.4)),_0x4f2292['fill'](),_0x4f2292[_0x4ec75c(0x244)]=_0x3ad970,(_0x4f2292[_0x4ec75c(0x2d4)](),_0x4f2292['moveTo'](458.7,346.3),_0x4f2292[_0x4ec75c(0x2e7)](458.7,346.3,456.7,347.4,0x1c5,349.4),_0x4f2292['bezierCurveTo'](449.4,351.5,444.2,354.6,438.1,0x167),_0x4f2292[_0x4ec75c(0x2e7)](432.1,363.4,425.3,369.1,418.2,375.9),_0x4f2292[_0x4ec75c(0x2e7)](411.1,382.7,403.7,390.6,396.1,399.1),_0x4f2292[_0x4ec75c(0x2e7)](0x18a,401.5,391.9,403.9,389.8,406.2),_0x4f2292['bezierCurveTo'](388.1,408.1,386.5,0x19a,384.8,411.8),_0x4f2292[_0x4ec75c(0x242)](383.6,413.2),_0x4f2292['lineTo'](383.4,413.4),_0x4f2292[_0x4ec75c(0x242)](383.3,413.5),_0x4f2292[_0x4ec75c(0x242)](383.3,413.4),_0x4f2292['lineTo'](383.2,412.9),_0x4f2292[_0x4ec75c(0x242)](0x17f,411.9),_0x4f2292[_0x4ec75c(0x2e7)](382.7,410.6,382.4,409.3,382.2,408.1),_0x4f2292[_0x4ec75c(0x2e7)](381.9,406.8,381.6,405.6,381.4,404.4),_0x4f2292[_0x4ec75c(0x2e7)](381.2,403.4,381.1,402.5,380.9,401.5),_0x4f2292[_0x4ec75c(0x2e7)](380.7,400.2,380.5,398.9,380.3,397.6),_0x4f2292[_0x4ec75c(0x2e7)](379.9,395.1,379.6,392.6,379.4,390.1),_0x4f2292[_0x4ec75c(0x2e7)](378.3,380.4,377.5,371.9,376.5,364.6),_0x4f2292[_0x4ec75c(0x2e7)](375.6,357.4,374.5,351.5,373.3,347.4),_0x4f2292[_0x4ec75c(0x2e7)](373.1,346.3,372.7,345.4,372.5,344.6),_0x4f2292[_0x4ec75c(0x2e7)](372.2,343.8,0x174,0x157,371.7,342.4),_0x4f2292[_0x4ec75c(0x2e7)](371.2,341.2,370.9,340.4,370.7,0x154),_0x4f2292[_0x4ec75c(0x2e7)](370.5,339.6,370.7,339.9,371.2,340.6),_0x4f2292[_0x4ec75c(0x2e7)](371.7,341.4,372.5,342.6,373.4,344.5),_0x4f2292['bezierCurveTo'](375.2,348.2,377.2,354.1,0x17b,361.7),_0x4f2292[_0x4ec75c(0x2e7)](380.8,369.3,382.4,378.4,384.1,388.5),_0x4f2292[_0x4ec75c(0x2e7)](384.5,0x187,0x181,393.6,385.4,396.2),_0x4f2292[_0x4ec75c(0x2e7)](385.6,397.5,385.9,398.8,386.1,400.1),_0x4f2292[_0x4ec75c(0x2e7)](386.5,0x192,386.4,401.3,386.4,401.5),_0x4f2292['lineTo'](386.4,401.5),_0x4f2292[_0x4ec75c(0x242)](386.4,401.5),_0x4f2292[_0x4ec75c(0x242)](386.5,401.4),_0x4f2292[_0x4ec75c(0x242)](386.9,400.9),_0x4f2292[_0x4ec75c(0x242)](0x183,400.8),_0x4f2292[_0x4ec75c(0x242)](387.5,400.2),_0x4f2292[_0x4ec75c(0x242)](388.9,398.6),_0x4f2292[_0x4ec75c(0x2e7)](389.8,397.5,390.8,396.5,391.7,395.4),_0x4f2292[_0x4ec75c(0x2e7)](399.4,386.8,407.1,378.9,414.8,372.4),_0x4f2292[_0x4ec75c(0x2e7)](422.4,365.8,429.9,360.6,436.4,356.7),_0x4f2292['bezierCurveTo'](0x1bb,352.8,448.6,350.3,452.5,348.7),_0x4f2292[_0x4ec75c(0x2e7)](454.5,347.9,0x1c8,347.4,0x1c9,0x15b),_0x4f2292[_0x4ec75c(0x2e7)](458.1,346.5,458.7,346.3,458.7,346.3)),_0x4f2292[_0x4ec75c(0x584)](),_0x4f2292[_0x4ec75c(0x2cc)](),this[_0x4ec75c(0x5e9)][_0x4ec75c(0x4fa)]();},Bitmap[_0x3c3250(0x206)][_0x3c3250(0x205)]=function(_0x4b6c4e,_0x28d6f9,_0x39c2ca){const _0x3bb3e2=_0x3c3250,_0x379b5a=this['_context'];_0x379b5a[_0x3bb3e2(0x213)]();const _0x49774e=_0x379b5a[_0x3bb3e2(0x1ee)](0x0,this[_0x3bb3e2(0x243)]/0x2,this[_0x3bb3e2(0x45e)]/0x2,this[_0x3bb3e2(0x243)]/0x2);_0x49774e['addColorStop'](0x0,_0x4b6c4e||_0x3bb3e2(0x43b)),_0x49774e[_0x3bb3e2(0x22e)](0x1,_0x28d6f9||_0x3bb3e2(0x359)),_0x379b5a['fillStyle']=_0x49774e,(_0x379b5a[_0x3bb3e2(0x2d4)](),_0x379b5a[_0x3bb3e2(0x5cc)](12.57908,31.191794),_0x379b5a['bezierCurveTo'](4.317875,26.790381,0x2,21.507626,0x2,21.507626),_0x379b5a['bezierCurveTo'](0x2,21.507626,5.544827,18.680225,7.844373,17.156388),_0x379b5a[_0x3bb3e2(0x2e7)](5.6081,15.442017,2.28258,12.418619,2.28258,12.418619),_0x379b5a['bezierCurveTo'](2.28258,12.418619,4.929183,7.198899,13.612139,3.449718),_0x379b5a[_0x3bb3e2(0x2e7)](30.630505,-3.805291,49.031689,18.529354,49.031689,18.529354),_0x379b5a[_0x3bb3e2(0x2e7)](49.031689,18.529354,48.933179,18.511974,48.718891,18.575774),_0x379b5a[_0x3bb3e2(0x2e7)](48.915856,18.610504,49.014335,18.627874,49.014335,18.627874),_0x379b5a[_0x3bb3e2(0x2e7)](49.014335,18.627874,26.958007,38.905902,12.579092,31.191834)),_0x379b5a[_0x3bb3e2(0x584)](),_0x379b5a[_0x3bb3e2(0x3f1)]=_0x39c2ca||_0x3bb3e2(0x208),_0x379b5a[_0x3bb3e2(0x481)](),_0x379b5a[_0x3bb3e2(0x213)](),_0x379b5a[_0x3bb3e2(0x2cc)](),this[_0x3bb3e2(0x5e9)]['update']();},Bitmap[_0x3c3250(0x206)][_0x3c3250(0x548)]=function(_0x19cb22){const _0x22131d=_0x3c3250,_0xcbd5cb=this[_0x22131d(0x378)];_0x19cb22=_0x19cb22||[_0x22131d(0x3e8),_0x22131d(0x581),_0x22131d(0x324),_0x22131d(0x382),_0x22131d(0x5f3),'#000000'],_0xcbd5cb[_0x22131d(0x213)](),_0xcbd5cb[_0x22131d(0x57e)](0.044027,0.164312,-0.164312,0.044027,89.0097,-44.1852),_0xcbd5cb[_0x22131d(0x244)]=_0x19cb22[0x0],_0xcbd5cb[_0x22131d(0x32d)]=_0x19cb22[0x5],_0xcbd5cb[_0x22131d(0x4d8)]=0xc,(_0xcbd5cb['beginPath'](),_0xcbd5cb[_0x22131d(0x5cc)](431.62,249.52),_0xcbd5cb[_0x22131d(0x2e7)](431.721833,257.349163,431.387983,265.177929,430.62,272.97),_0xcbd5cb['bezierCurveTo'](430.23,276.86,429.73,280.75,429.1,284.61),_0xcbd5cb['bezierCurveTo'](428.47,288.47,427.91,292.3,427.37,296.18),_0xcbd5cb[_0x22131d(0x2e7)](426.83,300.06,426.06,303.89,425.37,307.73),_0xcbd5cb['bezierCurveTo'](424.68,311.57,423.88,315.4,423.26,319.24),_0xcbd5cb[_0x22131d(0x2e7)](422.64,323.08,422.18,326.95,421.56,330.82),_0xcbd5cb[_0x22131d(0x2e7)](420.94,334.69,420.14,338.52,419.39,342.35),_0xcbd5cb[_0x22131d(0x2e7)](418.64,346.18,417.8,350.01,416.84,353.81),_0xcbd5cb[_0x22131d(0x2e7)](415.88,357.61,414.75,361.36,413.6,365.1),_0xcbd5cb['bezierCurveTo'](411.28,372.57,408.73,379.96,406.25,387.35),_0xcbd5cb[_0x22131d(0x2e7)](405.01,391.06,403.73,394.77,402.15,398.35),_0xcbd5cb['bezierCurveTo'](400.57,401.93,398.73,405.42,396.87,408.87),_0xcbd5cb[_0x22131d(0x2e7)](395.01,412.32,0x189,415.72,0x187,419.05),_0xcbd5cb[_0x22131d(0x2e7)](0x185,422.38,386.74,425.65,384.38,428.79),_0xcbd5cb[_0x22131d(0x2e7)](379.581436,434.992727,374.447096,440.928264,0x171,446.57),_0xcbd5cb['bezierCurveTo'](363.63,452.25,358.11,457.81,352.4,463.16),_0xcbd5cb[_0x22131d(0x2e7)](349.56,465.85,346.63,468.42,343.72,471.04),_0xcbd5cb[_0x22131d(0x242)](0x14f,478.86),_0xcbd5cb['lineTo'](326.28,486.68),_0xcbd5cb[_0x22131d(0x242)](321.9,490.58),_0xcbd5cb['bezierCurveTo'](320.42,491.87,318.9,493.12,317.31,494.31),_0xcbd5cb[_0x22131d(0x2e7)](314.158788,496.68913,310.840189,498.838031,307.38,500.74),_0xcbd5cb['bezierCurveTo'](305.65,501.74,303.88,502.55,302.15,503.43),_0xcbd5cb[_0x22131d(0x242)](296.92,506.07),_0xcbd5cb[_0x22131d(0x2e7)](293.43,507.82,289.92,509.53,286.29,511.07),_0xcbd5cb[_0x22131d(0x2e7)](282.677226,512.628282,278.985531,513.996813,275.23,515.17),_0xcbd5cb[_0x22131d(0x2e7)](271.49,516.37,267.75,517.45,0x108,518.58),_0xcbd5cb[_0x22131d(0x2e7)](260.227016,519.72514,256.38621,520.633574,252.5,521.3),_0xcbd5cb[_0x22131d(0x2e7)](248.595082,521.810403,244.66662,522.120808,240.73,522.23),_0xcbd5cb['lineTo'](234.87,522.46),_0xcbd5cb[_0x22131d(0x242)](231.93,522.57),_0xcbd5cb[_0x22131d(0x2e7)](231.042639,522.560274,230.157021,522.650849,229.29,522.84),_0xcbd5cb[_0x22131d(0x242)](229.29,522.84),_0xcbd5cb['lineTo'](229.12,522.84),_0xcbd5cb[_0x22131d(0x242)](228.9,522.84),_0xcbd5cb[_0x22131d(0x2e7)](226.0396,522.722573,223.221208,522.110173,220.57,521.03),_0xcbd5cb[_0x22131d(0x242)](220.44,520.98),_0xcbd5cb['bezierCurveTo'](219.08661,520.382693,217.816088,519.612985,216.66,518.69),_0xcbd5cb[_0x22131d(0x2e7)](216.085072,518.218253,215.537516,517.714102,215.02,517.18),_0xcbd5cb['lineTo'](213.61,515.56),_0xcbd5cb[_0x22131d(0x242)](213.51,515.44),_0xcbd5cb[_0x22131d(0x242)](213.44,515.27),_0xcbd5cb['lineTo'](213.44,515.22),_0xcbd5cb['bezierCurveTo'](212.708687,513.436313,211.887639,511.69075,210.98,509.99),_0xcbd5cb['bezierCurveTo'](210.09,508.23,209.21,506.46,208.39,504.65),_0xcbd5cb[_0x22131d(0x2e7)](206.643417,501.02829,205.395407,497.186707,204.68,493.23),_0xcbd5cb[_0x22131d(0x2e7)](204.146127,489.249079,204.125962,485.21606,204.62,481.23),_0xcbd5cb['bezierCurveTo'](205.081051,477.294323,205.748639,473.385598,206.62,469.52),_0xcbd5cb['bezierCurveTo'](207.49288,465.764819,207.886016,461.9141,207.79,458.06),_0xcbd5cb[_0x22131d(0x2e7)](207.513295,454.195646,206.860201,450.36751,205.84,446.63),_0xcbd5cb[_0x22131d(0x2e7)](204.99,443.31,204.17,439.98,203.25,436.68),_0xcbd5cb['bezierCurveTo'](203.12,436.2,202.99,435.68,202.85,435.26),_0xcbd5cb[_0x22131d(0x242)](199.49,0x1a8),_0xcbd5cb[_0x22131d(0x242)](196.33,412.63),_0xcbd5cb[_0x22131d(0x2e7)](195.241308,408.813871,194.412739,404.928284,193.85,0x191),_0xcbd5cb[_0x22131d(0x2e7)](192.79,393.13,192.48,385.3,192.02,377.41),_0xcbd5cb[_0x22131d(0x2e7)](191.77,369.41,192.93,361.55,194.4,353.82),_0xcbd5cb[_0x22131d(0x242)](196.71,342.26),_0xcbd5cb[_0x22131d(0x2e7)](197.47,338.41,198.18,334.55,198.81,330.69),_0xcbd5cb['bezierCurveTo'](199.44,326.83,200.07,322.93,200.45,319.07),_0xcbd5cb[_0x22131d(0x2e7)](200.83,315.21,0xc9,311.25,201.45,307.31),_0xcbd5cb[_0x22131d(0x2e7)](202.45,299.51,203.2,291.66,205.03,283.93),_0xcbd5cb['bezierCurveTo'](206.86,276.2,210.25,0x10d,212.78,261.6),_0xcbd5cb[_0x22131d(0x2e7)](215.47,254.2,218.06,246.79,220.78,239.41),_0xcbd5cb[_0x22131d(0x2e7)](222.24,235.74,223.88,232.16,225.46,228.56),_0xcbd5cb[_0x22131d(0x2e7)](227.04,224.96,228.46,221.33,0xe6,217.7),_0xcbd5cb[_0x22131d(0x242)](234.48,206.81),_0xcbd5cb[_0x22131d(0x2e7)](235.91,203.21,236.93,199.36,238.48,195.74),_0xcbd5cb[_0x22131d(0x242)](240.77,190.29),_0xcbd5cb[_0x22131d(0x2e7)](241.53,188.47,242.27,186.64,243.15,184.89),_0xcbd5cb[_0x22131d(0x2e7)](244.83,181.33,246.56,177.79,248.15,174.23),_0xcbd5cb[_0x22131d(0x2e7)](249.74,170.67,251.28,167.02,253.15,163.5),_0xcbd5cb['bezierCurveTo'](255.02,159.98,257.01,156.61,259.15,153.29),_0xcbd5cb['bezierCurveTo'](261.29,149.97,263.53,146.74,265.82,143.53),_0xcbd5cb['bezierCurveTo'](268.11,140.32,270.29,137.11,272.31,133.75),_0xcbd5cb[_0x22131d(0x2e7)](274.33,130.39,276.31,126.98,278.2,123.57),_0xcbd5cb[_0x22131d(0x2e7)](280.09,120.16,281.77,116.57,283.6,113.1),_0xcbd5cb[_0x22131d(0x2e7)](284.52,111.36,285.47,109.62,286.5,107.93),_0xcbd5cb[_0x22131d(0x2e7)](287.522434,106.213457,288.729617,104.61394,290.1,103.16),_0xcbd5cb[_0x22131d(0x2e7)](291.46,101.7,292.9,100.35,294.29,98.98),_0xcbd5cb[_0x22131d(0x2e7)](295.68,97.61,297.01,96.17,298.37,94.75),_0xcbd5cb[_0x22131d(0x242)](306.51,86.23),_0xcbd5cb[_0x22131d(0x2e7)](309.21,83.35,312.03,80.59,314.93,77.93),_0xcbd5cb['bezierCurveTo'](317.83,75.27,320.83,72.71,323.87,70.22),_0xcbd5cb[_0x22131d(0x2e7)](326.950045,67.806921,329.835603,65.155418,332.5,62.29),_0xcbd5cb['bezierCurveTo'](335.15434,59.416711,337.584777,56.344397,339.77,53.1),_0xcbd5cb[_0x22131d(0x2e7)](341.91,49.84,344.23,46.49,347.5,44.1),_0xcbd5cb['bezierCurveTo'](349.125878,42.9073,350.950982,42.013371,352.89,41.46),_0xcbd5cb[_0x22131d(0x2e7)](353.37,41.33,353.89,41.2,354.34,41.1),_0xcbd5cb[_0x22131d(0x2e7)](354.838027,40.968768,355.346669,40.881764,355.86,40.84),_0xcbd5cb['bezierCurveTo'](356.947139,40.805706,358.010866,41.160281,358.86,41.84),_0xcbd5cb[_0x22131d(0x2e7)](359.63952,42.468744,360.362298,43.164753,361.02,43.92),_0xcbd5cb['lineTo'](363.02,46.07),_0xcbd5cb[_0x22131d(0x2e7)](364.36,47.52,365.68,48.98,366.95,50.49),_0xcbd5cb[_0x22131d(0x2e7)](370.89,55.3,374.55,60.33,378.05,65.49),_0xcbd5cb[_0x22131d(0x242)](378.05,65.49),_0xcbd5cb[_0x22131d(0x2e7)](378.99,66.86,379.91,68.23,380.83,69.61),_0xcbd5cb[_0x22131d(0x2e7)](383.02,72.87,385.19,76.15,387.29,79.48),_0xcbd5cb['bezierCurveTo'](389.460572,82.779822,391.414679,86.217047,393.14,89.77),_0xcbd5cb[_0x22131d(0x2e7)](394.766901,93.373214,396.130474,97.089619,397.22,100.89),_0xcbd5cb['bezierCurveTo'](398.34,104.67,399.22,108.5,400.29,112.28),_0xcbd5cb[_0x22131d(0x2e7)](401.36,116.06,402.41,119.83,403.67,123.54),_0xcbd5cb[_0x22131d(0x242)](407.58,134.66),_0xcbd5cb[_0x22131d(0x2e7)](408.86,138.3,410.15,141.94,411.42,145.59),_0xcbd5cb[_0x22131d(0x2e7)](412.69,149.24,414.06,153.14,415.34,156.93),_0xcbd5cb[_0x22131d(0x242)](417.23,162.52),_0xcbd5cb['lineTo'](418.98,168.15),_0xcbd5cb[_0x22131d(0x2e7)](420.12,171.91,421.23,175.7,422.1,179.55),_0xcbd5cb[_0x22131d(0x242)](427.1,202.6),_0xcbd5cb[_0x22131d(0x242)](428.36,208.36),_0xcbd5cb[_0x22131d(0x242)](428.98,211.24),_0xcbd5cb[_0x22131d(0x2e7)](429.173333,212.22,429.333333,213.2,429.46,214.18),_0xcbd5cb[_0x22131d(0x2e7)](0x1ae,218.11,430.15,222.05,430.4,225.96),_0xcbd5cb['bezierCurveTo'](0x1af,233.79,431.51,241.64,431.62,249.52),_0xcbd5cb[_0x22131d(0x584)]()),_0xcbd5cb[_0x22131d(0x481)](),_0xcbd5cb[_0x22131d(0x244)]=_0x19cb22[0x1],(_0xcbd5cb[_0x22131d(0x2d4)](),_0xcbd5cb['moveTo'](285.75,360.45),_0xcbd5cb[_0x22131d(0x242)](317.05,277.5),_0xcbd5cb[_0x22131d(0x242)](329.05,225.84),_0xcbd5cb[_0x22131d(0x242)](340.79,165.58),_0xcbd5cb['lineTo'](0x15b,124.66),_0xcbd5cb['lineTo'](349.15,110.28),_0xcbd5cb[_0x22131d(0x242)](352.38,88.17),_0xcbd5cb[_0x22131d(0x242)](354.04,74.9),_0xcbd5cb[_0x22131d(0x2e7)](354.04,74.9,340.19,93.66,0x142,121.85),_0xcbd5cb[_0x22131d(0x242)](0x142,121.85),_0xcbd5cb[_0x22131d(0x242)](318.94,116.08),_0xcbd5cb[_0x22131d(0x242)](315.07,108.52),_0xcbd5cb[_0x22131d(0x242)](313.88,105.61),_0xcbd5cb[_0x22131d(0x2e7)](313.88,105.61,320.3,123.77,309.71,141.31),_0xcbd5cb[_0x22131d(0x242)](309.71,141.31),_0xcbd5cb[_0x22131d(0x2e7)](306.916667,145.83,304.09,150.496667,301.23,155.31),_0xcbd5cb['lineTo'](301.23,155.31),_0xcbd5cb[_0x22131d(0x242)](297.4,0x95),_0xcbd5cb[_0x22131d(0x242)](293.4,142.73),_0xcbd5cb[_0x22131d(0x242)](288.67,134.87),_0xcbd5cb['bezierCurveTo'](295.901876,148.194393,295.803749,164.294746,288.41,177.53),_0xcbd5cb[_0x22131d(0x242)](288.41,177.53),_0xcbd5cb[_0x22131d(0x2e7)](286.65,180.676667,284.896667,183.86,283.15,187.08),_0xcbd5cb[_0x22131d(0x242)](283.15,187.08),_0xcbd5cb[_0x22131d(0x242)](279.22,182.53),_0xcbd5cb[_0x22131d(0x242)](272.79,175.59),_0xcbd5cb[_0x22131d(0x2e7)](275.19,178.45,281.64,188.49,273.09,206.31),_0xcbd5cb[_0x22131d(0x242)](273.09,206.31),_0xcbd5cb['bezierCurveTo'](270.72,211.02,268.4,215.77,266.15,220.52),_0xcbd5cb[_0x22131d(0x242)](266.15,220.52),_0xcbd5cb['lineTo'](263.84,218.34),_0xcbd5cb[_0x22131d(0x242)](260.92,215.6),_0xcbd5cb[_0x22131d(0x2e7)](260.92,215.6,265.27,221.08,259.07,236.13),_0xcbd5cb['lineTo'](259.07,236.13),_0xcbd5cb[_0x22131d(0x2e7)](256.603333,241.836667,254.27,247.503333,252.07,253.13),_0xcbd5cb[_0x22131d(0x242)](252.07,253.13),_0xcbd5cb['lineTo'](247.51,249.29),_0xcbd5cb[_0x22131d(0x242)](244.92,0xf7),_0xcbd5cb[_0x22131d(0x242)](243.76,246.13),_0xcbd5cb[_0x22131d(0x2e7)](246.52,248.92,250.54,256.13,244.9,272.77),_0xcbd5cb['lineTo'](244.9,272.77),_0xcbd5cb[_0x22131d(0x2e7)](243.806667,275.85,242.716667,278.986667,241.63,282.18),_0xcbd5cb['lineTo'](241.63,282.18),_0xcbd5cb[_0x22131d(0x242)](237.21,0x114),_0xcbd5cb[_0x22131d(0x242)](233.81,271.77),_0xcbd5cb[_0x22131d(0x242)](230.81,267.86),_0xcbd5cb[_0x22131d(0x2e7)](233.81,272.45,239.7,285.52,232.29,310.91),_0xcbd5cb['lineTo'](232.29,310.91),_0xcbd5cb[_0x22131d(0x2e7)](231.623333,313.11,230.956667,315.326667,230.29,317.56),_0xcbd5cb['lineTo'](230.29,317.56),_0xcbd5cb[_0x22131d(0x242)](226.67,310.46),_0xcbd5cb[_0x22131d(0x242)](223.88,304.91),_0xcbd5cb[_0x22131d(0x242)](221.49,299.78),_0xcbd5cb[_0x22131d(0x2e7)](224.38,307.42,228.04,322.78,222.56,344.43),_0xcbd5cb['lineTo'](222.56,344.43),_0xcbd5cb[_0x22131d(0x2e7)](222.08,346.16,221.62,347.89,221.15,349.62),_0xcbd5cb[_0x22131d(0x242)](221.15,349.62),_0xcbd5cb['lineTo'](219.97,346.31),_0xcbd5cb[_0x22131d(0x242)](215.78,0x150),_0xcbd5cb[_0x22131d(0x242)](215.38,334.89),_0xcbd5cb['bezierCurveTo'](217.23,341.26,219.38,353.39,216.06,369.47),_0xcbd5cb[_0x22131d(0x2e7)](215.62,371.28,215.19,373.08,214.76,374.89),_0xcbd5cb[_0x22131d(0x242)](214.7,375.14),_0xcbd5cb[_0x22131d(0x242)](214.7,375.14),_0xcbd5cb[_0x22131d(0x2e7)](213.32,381.06,212.01,386.96,210.77,392.84),_0xcbd5cb['lineTo'](210.77,392.84),_0xcbd5cb[_0x22131d(0x242)](209.36,389.71),_0xcbd5cb[_0x22131d(0x242)](0xd0,386.2),_0xcbd5cb['lineTo'](207.12,383.09),_0xcbd5cb[_0x22131d(0x242)](206.37,378.74),_0xcbd5cb[_0x22131d(0x2e7)](208.034744,391.047293,208.034744,403.522707,206.37,415.83),_0xcbd5cb[_0x22131d(0x2e7)](205.89,418.61,205.43,421.37,205.01,424.12),_0xcbd5cb[_0x22131d(0x2e7)](205.005302,424.16989,205.005302,424.22011,205.01,424.27),_0xcbd5cb[_0x22131d(0x242)](205.01,424.27),_0xcbd5cb[_0x22131d(0x2e7)](204.343333,428.47,203.746667,432.623333,203.22,436.73),_0xcbd5cb[_0x22131d(0x2e7)](204.14,440.03,204.96,443.36,205.81,446.68),_0xcbd5cb[_0x22131d(0x2e7)](206.830201,450.41751,207.483295,454.245646,207.76,458.11),_0xcbd5cb[_0x22131d(0x2e7)](207.856016,461.9641,207.46288,465.814819,206.59,469.57),_0xcbd5cb['bezierCurveTo'](205.718639,473.435598,205.051051,477.344323,204.59,481.28),_0xcbd5cb[_0x22131d(0x2e7)](204.095962,485.26606,204.116127,489.299079,204.65,493.28),_0xcbd5cb[_0x22131d(0x2e7)](205.365407,497.236707,206.613417,501.07829,208.36,504.7),_0xcbd5cb['bezierCurveTo'](209.18,506.51,210.06,508.28,210.95,510.04),_0xcbd5cb['bezierCurveTo'](211.857639,511.74075,212.678687,513.486313,213.41,515.27),_0xcbd5cb['lineTo'](213.41,515.32),_0xcbd5cb[_0x22131d(0x242)](213.48,515.49),_0xcbd5cb[_0x22131d(0x242)](213.58,515.61),_0xcbd5cb[_0x22131d(0x242)](214.99,517.23),_0xcbd5cb[_0x22131d(0x2e7)](215.507516,517.764102,216.055072,518.268253,216.63,518.74),_0xcbd5cb[_0x22131d(0x2e7)](217.786088,519.662985,219.05661,520.432693,220.41,521.03),_0xcbd5cb[_0x22131d(0x242)](220.54,521.08),_0xcbd5cb[_0x22131d(0x2e7)](234.62,498.82,250.27,460.36,250.27,460.36)),_0xcbd5cb[_0x22131d(0x584)](),_0xcbd5cb[_0x22131d(0x244)]=_0x19cb22[0x2],(_0xcbd5cb['beginPath'](),_0xcbd5cb[_0x22131d(0x5cc)](430.49,225.94),_0xcbd5cb[_0x22131d(0x2e7)](430.24,222.03,430.09,218.09,429.55,214.16),_0xcbd5cb[_0x22131d(0x2e7)](429.423333,213.18,429.263333,212.2,429.07,211.22),_0xcbd5cb[_0x22131d(0x242)](428.45,208.34),_0xcbd5cb[_0x22131d(0x242)](427.19,202.58),_0xcbd5cb['lineTo'](422.19,179.53),_0xcbd5cb['bezierCurveTo'](421.32,175.68,420.19,171.89,419.07,168.13),_0xcbd5cb[_0x22131d(0x242)](417.32,162.5),_0xcbd5cb[_0x22131d(0x242)](415.43,156.91),_0xcbd5cb['bezierCurveTo'](412.91,149.45,410.28,142.05,407.67,134.64),_0xcbd5cb[_0x22131d(0x242)](403.76,123.52),_0xcbd5cb[_0x22131d(0x2e7)](402.5,119.81,401.42,116.04,400.38,112.26),_0xcbd5cb[_0x22131d(0x2e7)](399.34,108.48,398.43,104.65,397.31,100.87),_0xcbd5cb[_0x22131d(0x2e7)](396.220474,97.069619,394.856901,93.353214,393.23,89.75),_0xcbd5cb[_0x22131d(0x2e7)](391.504679,86.197047,389.550572,82.759822,387.38,79.46),_0xcbd5cb['bezierCurveTo'](385.28,76.13,383.11,72.85,380.92,69.59),_0xcbd5cb[_0x22131d(0x2e7)](0x17c,68.21,379.08,66.84,378.14,65.47),_0xcbd5cb[_0x22131d(0x2e7)](387.8,80.8,395.04,109.72,396.47,149.27),_0xcbd5cb[_0x22131d(0x242)](376.1,161.86),_0xcbd5cb[_0x22131d(0x2e7)](379.85,159.59,396.59,0x96,396.69,160.27),_0xcbd5cb['bezierCurveTo'](396.75,167.25,396.633333,174.516667,396.34,182.07),_0xcbd5cb[_0x22131d(0x242)](370.5,194.47),_0xcbd5cb[_0x22131d(0x2e7)](379.58,190.47,396.45,184.53,395.5,196.63),_0xcbd5cb[_0x22131d(0x2e7)](395.39,198.23,395.27,199.84,395.15,201.46),_0xcbd5cb[_0x22131d(0x242)](389.25,207.26),_0xcbd5cb[_0x22131d(0x242)](383.25,212.74),_0xcbd5cb[_0x22131d(0x2e7)](383.25,212.74,380.25,215.38,375.87,218.98),_0xcbd5cb[_0x22131d(0x2e7)](390.22,209.39,393.47,215.75,392.87,224.41),_0xcbd5cb['bezierCurveTo'](392.15,230.37,391.323333,236.463333,390.39,242.69),_0xcbd5cb[_0x22131d(0x242)](374.29,253.84),_0xcbd5cb[_0x22131d(0x2e7)](381.29,249.93,389.62,247.84,387.03,262.84),_0xcbd5cb[_0x22131d(0x2e7)](386.036667,268.253333,384.96,273.74,383.8,279.3),_0xcbd5cb[_0x22131d(0x242)](378.4,282.68),_0xcbd5cb[_0x22131d(0x242)](368.4,288.48),_0xcbd5cb[_0x22131d(0x242)](351.28,0x12a),_0xcbd5cb['bezierCurveTo'](351.28,0x12a,382.89,280.72,379.45,298.88),_0xcbd5cb[_0x22131d(0x2e7)](378.51,302.88,377.51,306.896667,376.45,310.93),_0xcbd5cb['lineTo'](364.43,0x13d),_0xcbd5cb[_0x22131d(0x242)](354.48,321.41),_0xcbd5cb[_0x22131d(0x2e7)](363.55,317.83,375.77,314.48,373.1,323.71),_0xcbd5cb[_0x22131d(0x2e7)](373.01,324.03,372.93,324.35,372.84,324.71),_0xcbd5cb[_0x22131d(0x2e7)](371.506667,329.583333,370.066667,334.36,368.52,339.04),_0xcbd5cb[_0x22131d(0x242)](358.52,344.38),_0xcbd5cb[_0x22131d(0x242)](353.36,347.17),_0xcbd5cb[_0x22131d(0x242)](341.49,352.49),_0xcbd5cb['bezierCurveTo'](351.93,348.35,366.49,344.44,361.87,357.42),_0xcbd5cb[_0x22131d(0x2e7)](359.27,364.006667,356.51,370.406667,353.59,376.62),_0xcbd5cb['bezierCurveTo'](349.53,378.78,331.04,388.35,313.91,392.41),_0xcbd5cb[_0x22131d(0x2e7)](326.26,390.74,350.91,379.56,344.78,394.04),_0xcbd5cb[_0x22131d(0x2e7)](339.71,403.42,334.34,412.3,328.78,420.68),_0xcbd5cb[_0x22131d(0x2e7)](318.476689,423.18083,308.011191,424.958495,297.46,0x1aa),_0xcbd5cb[_0x22131d(0x2e7)](315.21,425.12,326.79,424.25,317.73,436.57),_0xcbd5cb[_0x22131d(0x2e7)](311.08,445.57,304.32,453.89,297.65,461.51),_0xcbd5cb[_0x22131d(0x2e7)](297.56,461.51,279.87,463.81,266.65,461.17),_0xcbd5cb[_0x22131d(0x2e7)](280.85,464.3,296.44,463.02,284.31,476.04),_0xcbd5cb[_0x22131d(0x2e7)](280.976667,479.5,277.703333,482.77,274.49,485.85),_0xcbd5cb[_0x22131d(0x2e7)](274.43,485.85,261.73,486.11,251.87,484.55),_0xcbd5cb[_0x22131d(0x2e7)](262.77,486.37,273.54,486.5,263.2,496.32),_0xcbd5cb[_0x22131d(0x2e7)](258.69,500.32,254.47,503.9,250.65,507.01),_0xcbd5cb['bezierCurveTo'](250.55,507.01,238.65,508.01,233.16,506.79),_0xcbd5cb[_0x22131d(0x2e7)](239.07,508.66,243.85,511.37,237.87,516.9),_0xcbd5cb[_0x22131d(0x2e7)](232.71,520.68,229.59,522.68,229.32,522.9),_0xcbd5cb[_0x22131d(0x2e7)](230.187021,522.710849,231.072639,522.620274,231.96,522.63),_0xcbd5cb['lineTo'](234.9,522.52),_0xcbd5cb[_0x22131d(0x242)](240.76,522.29),_0xcbd5cb[_0x22131d(0x2e7)](244.69662,522.180808,248.625082,521.870403,252.53,521.36),_0xcbd5cb[_0x22131d(0x2e7)](256.406968,520.679223,260.23773,519.757436,0x108,518.6),_0xcbd5cb[_0x22131d(0x2e7)](267.75,517.47,271.49,516.39,275.23,515.19),_0xcbd5cb[_0x22131d(0x2e7)](278.985531,514.016813,282.677226,512.648282,286.29,511.09),_0xcbd5cb[_0x22131d(0x2e7)](289.9,509.53,293.43,507.82,296.92,506.09),_0xcbd5cb[_0x22131d(0x242)](302.15,503.45),_0xcbd5cb['bezierCurveTo'](303.88,502.57,305.65,501.72,307.38,500.76),_0xcbd5cb['bezierCurveTo'](310.840189,498.858031,314.158788,496.70913,317.31,494.33),_0xcbd5cb['bezierCurveTo'](318.89,493.14,320.42,491.89,321.9,490.6),_0xcbd5cb['lineTo'](326.28,486.7),_0xcbd5cb[_0x22131d(0x242)](0x14f,478.88),_0xcbd5cb[_0x22131d(0x242)](343.72,471.06),_0xcbd5cb[_0x22131d(0x2e7)](346.63,468.44,349.56,465.87,352.4,463.18),_0xcbd5cb[_0x22131d(0x2e7)](358.11,457.83,363.63,452.27,0x171,446.59),_0xcbd5cb[_0x22131d(0x2e7)](374.436839,440.947476,379.561151,435.011953,384.35,428.81),_0xcbd5cb[_0x22131d(0x2e7)](386.71,425.67,388.93,422.42,390.97,419.07),_0xcbd5cb[_0x22131d(0x2e7)](393.01,415.72,394.97,412.36,396.89,408.92),_0xcbd5cb['bezierCurveTo'](398.81,405.48,400.57,402.02,402.17,398.4),_0xcbd5cb[_0x22131d(0x2e7)](403.77,394.78,405.03,391.08,406.27,387.4),_0xcbd5cb[_0x22131d(0x2e7)](408.75,380.01,411.27,372.62,413.62,365.15),_0xcbd5cb['bezierCurveTo'](414.77,361.41,415.89,357.67,416.86,353.86),_0xcbd5cb[_0x22131d(0x2e7)](417.83,350.05,418.64,346.24,419.41,342.4),_0xcbd5cb[_0x22131d(0x2e7)](420.18,338.56,420.96,334.75,421.58,330.87),_0xcbd5cb[_0x22131d(0x2e7)](422.2,326.99,422.68,323.13,423.28,319.29),_0xcbd5cb[_0x22131d(0x2e7)](423.88,315.45,424.7,311.61,425.39,307.78),_0xcbd5cb[_0x22131d(0x2e7)](426.08,303.95,426.9,300.12,427.39,296.23),_0xcbd5cb[_0x22131d(0x2e7)](427.88,292.34,428.44,288.51,429.12,284.66),_0xcbd5cb[_0x22131d(0x2e7)](429.8,280.81,430.25,276.91,430.64,273.02),_0xcbd5cb[_0x22131d(0x2e7)](431.407983,265.227929,431.741833,257.399163,431.64,249.57),_0xcbd5cb[_0x22131d(0x2e7)](431.51,241.64,0x1af,233.79,430.49,225.94)),_0xcbd5cb['fill'](),_0xcbd5cb[_0x22131d(0x244)]=_0x19cb22[0x3],(_0xcbd5cb[_0x22131d(0x2d4)](),_0xcbd5cb['moveTo'](340.27,176.61),_0xcbd5cb[_0x22131d(0x242)](348.27,122.21),_0xcbd5cb[_0x22131d(0x242)](0x160,0x56),_0xcbd5cb[_0x22131d(0x2e7)](0x160,0x56,349.18,94.32,344.36,108.7),_0xcbd5cb[_0x22131d(0x242)](341.04,104.91),_0xcbd5cb[_0x22131d(0x2e7)](341.04,104.91,344.15,109.29,341.39,117.57),_0xcbd5cb[_0x22131d(0x242)](341.39,117.57),_0xcbd5cb[_0x22131d(0x2e7)](339.01,124.71,336.28,132.9,333.28,141.95),_0xcbd5cb[_0x22131d(0x242)](333.28,141.95),_0xcbd5cb['lineTo'](328.13,133.05),_0xcbd5cb['lineTo'](325.91,129.17),_0xcbd5cb[_0x22131d(0x2e7)](325.91,129.17,332.53,142.95,325.57,165.28),_0xcbd5cb[_0x22131d(0x242)](325.57,165.28),_0xcbd5cb[_0x22131d(0x2e7)](323.503333,171.573333,321.35,178.12,319.11,184.92),_0xcbd5cb[_0x22131d(0x242)](319.11,184.92),_0xcbd5cb[_0x22131d(0x242)](0x13b,177.71),_0xcbd5cb[_0x22131d(0x242)](308.25,166.82),_0xcbd5cb[_0x22131d(0x2e7)](314.733452,179.880969,315.811249,194.970124,311.25,208.82),_0xcbd5cb[_0x22131d(0x242)](311.25,208.82),_0xcbd5cb[_0x22131d(0x2e7)](310.103333,212.326667,308.946667,215.883333,307.78,219.49),_0xcbd5cb['lineTo'](307.78,219.49),_0xcbd5cb['lineTo'](300.16,0xd0),_0xcbd5cb[_0x22131d(0x242)](295.37,201.93),_0xcbd5cb[_0x22131d(0x2e7)](295.37,201.93,308.11,218.47,299.78,244.52),_0xcbd5cb[_0x22131d(0x2e7)](298.653333,248.04,297.516667,251.586667,296.37,255.16),_0xcbd5cb[_0x22131d(0x242)](296.37,255.16),_0xcbd5cb['lineTo'](290.64,0xf7),_0xcbd5cb[_0x22131d(0x242)](280.58,236.2),_0xcbd5cb[_0x22131d(0x2e7)](281.58,237.26,296.58,254.13,287.96,281.57),_0xcbd5cb[_0x22131d(0x242)](287.96,281.57),_0xcbd5cb[_0x22131d(0x2e7)](287.333333,283.53,286.71,285.496667,286.09,287.47),_0xcbd5cb[_0x22131d(0x242)](286.09,287.47),_0xcbd5cb[_0x22131d(0x242)](0x118,279.81),_0xcbd5cb[_0x22131d(0x242)](270.72,270.71),_0xcbd5cb[_0x22131d(0x2e7)](270.72,270.71,286.28,286.4,277.78,313.81),_0xcbd5cb[_0x22131d(0x242)](277.78,313.81),_0xcbd5cb[_0x22131d(0x2e7)](276.106667,319.143333,274.44,324.476667,272.78,329.81),_0xcbd5cb['lineTo'](272.78,329.81),_0xcbd5cb['lineTo'](265.2,315.89),_0xcbd5cb['lineTo'](259.75,307.61),_0xcbd5cb[_0x22131d(0x2e7)](267.679619,321.381348,269.795642,337.744541,265.63,353.08),_0xcbd5cb['lineTo'](264.63,356.41),_0xcbd5cb['lineTo'](264.63,356.41),_0xcbd5cb[_0x22131d(0x242)](264.63,356.41),_0xcbd5cb[_0x22131d(0x2e7)](263.683333,359.516667,262.74,362.62,261.8,365.72),_0xcbd5cb[_0x22131d(0x242)](261.8,365.72),_0xcbd5cb[_0x22131d(0x242)](255.48,357.92),_0xcbd5cb[_0x22131d(0x242)](248.69,349.01),_0xcbd5cb[_0x22131d(0x2e7)](248.69,349.01,261.56,365.87,253.9,392.1),_0xcbd5cb[_0x22131d(0x242)](253.9,392.1),_0xcbd5cb[_0x22131d(0x2e7)](252.566667,396.706667,251.233333,401.26,249.9,405.76),_0xcbd5cb[_0x22131d(0x242)](249.9,405.76),_0xcbd5cb[_0x22131d(0x242)](243.52,395.82),_0xcbd5cb[_0x22131d(0x242)](238.92,387.92),_0xcbd5cb[_0x22131d(0x2e7)](238.92,387.92,249.49,405.92,241.92,433.65),_0xcbd5cb['lineTo'](241.92,433.65),_0xcbd5cb[_0x22131d(0x242)](239.82,441.18),_0xcbd5cb[_0x22131d(0x242)](239.82,441.18),_0xcbd5cb[_0x22131d(0x242)](0xe9,429.68),_0xcbd5cb[_0x22131d(0x2e7)](0xe9,429.68,239.72,442.12,234.11,462.31),_0xcbd5cb[_0x22131d(0x242)](234.11,462.31),_0xcbd5cb[_0x22131d(0x2e7)](233.17,465.85,232.27,469.303333,231.41,472.67),_0xcbd5cb['lineTo'](227.3,467.28),_0xcbd5cb['bezierCurveTo'](227.3,467.28,230.97,473.84,228.38,484.69),_0xcbd5cb[_0x22131d(0x242)](228.38,484.69),_0xcbd5cb[_0x22131d(0x2e7)](225.19,497.69,222.71,508.99,221.15,518.02),_0xcbd5cb[_0x22131d(0x2e7)](0xf0,483.95,262.65,419.16,262.65,419.16),_0xcbd5cb[_0x22131d(0x242)](306.26,315.71),_0xcbd5cb[_0x22131d(0x242)](323.48,243.71)),_0xcbd5cb[_0x22131d(0x584)](),_0xcbd5cb[_0x22131d(0x244)]=_0x19cb22[0x4],(_0xcbd5cb['beginPath'](),_0xcbd5cb['moveTo'](430.49,225.94),_0xcbd5cb[_0x22131d(0x2e7)](430.24,222.03,430.09,218.09,429.55,214.16),_0xcbd5cb['bezierCurveTo'](429.423333,213.18,429.263333,212.2,429.07,211.22),_0xcbd5cb[_0x22131d(0x242)](428.45,208.34),_0xcbd5cb['lineTo'](427.19,202.58),_0xcbd5cb[_0x22131d(0x242)](422.19,179.53),_0xcbd5cb[_0x22131d(0x2e7)](421.32,175.68,420.19,171.89,419.07,168.13),_0xcbd5cb[_0x22131d(0x242)](417.32,162.5),_0xcbd5cb[_0x22131d(0x242)](415.43,156.91),_0xcbd5cb[_0x22131d(0x2e7)](414.15,153.123333,412.843333,149.343333,411.51,145.57),_0xcbd5cb[_0x22131d(0x2e7)](412.03,148.49,448.2,358.03,321.91,490.57),_0xcbd5cb[_0x22131d(0x242)](326.29,486.67),_0xcbd5cb[_0x22131d(0x242)](335.01,478.85),_0xcbd5cb[_0x22131d(0x242)](343.73,471.03),_0xcbd5cb['bezierCurveTo'](346.64,468.41,349.57,465.84,352.41,463.15),_0xcbd5cb[_0x22131d(0x2e7)](358.12,457.8,363.64,452.24,369.01,446.56),_0xcbd5cb['bezierCurveTo'](374.446839,440.917476,379.571151,434.981953,384.36,428.78),_0xcbd5cb[_0x22131d(0x2e7)](386.72,425.64,388.94,422.39,390.98,419.04),_0xcbd5cb['bezierCurveTo'](393.02,415.69,394.98,412.33,396.9,408.89),_0xcbd5cb[_0x22131d(0x2e7)](398.82,405.45,400.58,401.99,402.18,398.37),_0xcbd5cb['bezierCurveTo'](403.78,394.75,405.04,391.05,406.28,387.37),_0xcbd5cb[_0x22131d(0x2e7)](408.76,379.98,411.28,372.59,413.63,365.12),_0xcbd5cb[_0x22131d(0x2e7)](414.78,361.38,415.9,357.64,416.87,353.83),_0xcbd5cb[_0x22131d(0x2e7)](417.84,350.02,418.65,346.21,419.42,342.37),_0xcbd5cb[_0x22131d(0x2e7)](420.19,338.53,420.97,334.72,421.59,330.84),_0xcbd5cb[_0x22131d(0x2e7)](422.21,326.96,422.69,323.1,423.29,319.26),_0xcbd5cb[_0x22131d(0x2e7)](423.89,315.42,424.71,311.58,425.4,307.75),_0xcbd5cb[_0x22131d(0x2e7)](426.09,303.92,426.91,300.09,427.4,296.2),_0xcbd5cb[_0x22131d(0x2e7)](427.89,292.31,428.45,288.48,429.13,284.63),_0xcbd5cb['bezierCurveTo'](429.81,280.78,430.26,276.88,430.65,272.99),_0xcbd5cb[_0x22131d(0x2e7)](431.417983,265.197929,431.751833,257.369163,431.65,249.54),_0xcbd5cb[_0x22131d(0x2e7)](431.51,241.64,0x1af,233.79,430.49,225.94)),_0xcbd5cb[_0x22131d(0x584)](),_0xcbd5cb[_0x22131d(0x244)]=_0x19cb22[0x5],_0xcbd5cb[_0x22131d(0x32d)]=_0x19cb22[0x5],_0xcbd5cb[_0x22131d(0x4d8)]=0.5,(_0xcbd5cb[_0x22131d(0x2d4)](),_0xcbd5cb[_0x22131d(0x5cc)](299.66,335.53),_0xcbd5cb[_0x22131d(0x2e7)](309.681137,334.686744,319.615142,333.014353,329.36,330.53),_0xcbd5cb[_0x22131d(0x2e7)](339.199482,327.973836,348.817214,324.629701,358.12,320.53),_0xcbd5cb['bezierCurveTo'](362.786667,318.47,367.35,316.243333,371.81,313.85),_0xcbd5cb[_0x22131d(0x2e7)](376.27,311.456667,380.643333,308.883333,384.93,306.13),_0xcbd5cb[_0x22131d(0x2e7)](393.507021,300.696702,401.564499,294.483707,0x199,287.57),_0xcbd5cb[_0x22131d(0x2e7)](401.449487,294.326806,393.291566,300.372438,384.63,305.63),_0xcbd5cb[_0x22131d(0x2e7)](380.33,308.296667,375.93,310.79,371.43,313.11),_0xcbd5cb[_0x22131d(0x2e7)](366.93,315.43,362.353333,317.57,357.7,319.53),_0xcbd5cb[_0x22131d(0x2e7)](348.401624,323.448152,338.804247,326.614952,0x149,0x149),_0xcbd5cb[_0x22131d(0x2e7)](319.603472,331.243088,310.043265,332.734467,300.41,333.46),_0xcbd5cb['bezierCurveTo'](301.51,330.46,302.62,327.46,303.7,324.4),_0xcbd5cb[_0x22131d(0x2e7)](305.086667,320.546667,306.46,316.68,307.82,312.8),_0xcbd5cb[_0x22131d(0x242)](314.12,311.35),_0xcbd5cb['lineTo'](317.4,310.58),_0xcbd5cb['lineTo'](320.63,309.58),_0xcbd5cb[_0x22131d(0x2e7)](322.79,308.94,324.95,308.32,327.09,307.66),_0xcbd5cb['lineTo'](333.43,305.41),_0xcbd5cb[_0x22131d(0x2e7)](341.840722,302.350071,350.047426,298.756089,0x166,294.65),_0xcbd5cb['bezierCurveTo'](365.959278,290.559569,373.699792,286.056786,381.19,281.16),_0xcbd5cb[_0x22131d(0x2e7)](388.682119,276.281578,395.887358,270.976145,402.77,265.27),_0xcbd5cb['bezierCurveTo'](395.789265,270.841289,388.493886,276.006485,380.92,280.74),_0xcbd5cb[_0x22131d(0x2e7)](373.356854,285.469142,365.556654,289.808149,357.55,293.74),_0xcbd5cb['bezierCurveTo'](349.567396,297.696491,341.340718,301.140139,332.92,304.05),_0xcbd5cb[_0x22131d(0x242)](326.59,306.16),_0xcbd5cb[_0x22131d(0x2e7)](324.45,306.78,322.3,307.34,320.16,307.94),_0xcbd5cb[_0x22131d(0x242)](316.95,308.82),_0xcbd5cb[_0x22131d(0x242)](313.69,309.52),_0xcbd5cb[_0x22131d(0x242)](308.57,310.6),_0xcbd5cb['lineTo'](309.36,308.35),_0xcbd5cb[_0x22131d(0x242)](0x138,300.27),_0xcbd5cb[_0x22131d(0x242)](313.32,296.22),_0xcbd5cb[_0x22131d(0x2e7)](313.77,294.88,314.21,293.53,314.58,292.16),_0xcbd5cb['bezierCurveTo'](315.35,289.54,316.09,286.91,316.83,284.28),_0xcbd5cb[_0x22131d(0x2e7)](325.865827,281.447791,334.625259,277.799422,0x157,273.38),_0xcbd5cb[_0x22131d(0x242)](349.3,270.03),_0xcbd5cb[_0x22131d(0x242)](355.47,266.47),_0xcbd5cb[_0x22131d(0x2e7)](357.55,265.31,359.54,264.01,361.57,262.77),_0xcbd5cb[_0x22131d(0x2e7)](363.6,261.53,365.57,260.29,367.57,258.97),_0xcbd5cb['bezierCurveTo'](375.57,253.84,383.32,248.36,390.96,242.73),_0xcbd5cb[_0x22131d(0x2e7)](398.6,237.1,406.08,231.26,413.35,225.16),_0xcbd5cb[_0x22131d(0x2e7)](405.98,231.16,398.35,236.81,390.66,242.32),_0xcbd5cb['bezierCurveTo'](382.97,247.83,375.09,253.15,0x16f,258.13),_0xcbd5cb[_0x22131d(0x2e7)](0x16d,259.41,0x16b,260.6,360.93,261.81),_0xcbd5cb[_0x22131d(0x2e7)](358.86,263.02,356.93,264.26,354.79,265.38),_0xcbd5cb[_0x22131d(0x242)](348.58,268.83),_0xcbd5cb[_0x22131d(0x242)](342.29,0x110),_0xcbd5cb[_0x22131d(0x2e7)](334.311743,276.031109,326.005153,279.376494,317.46,0x11a),_0xcbd5cb['lineTo'](319.2,275.76),_0xcbd5cb[_0x22131d(0x2e7)](321.9,266.06,324.34,256.29,326.62,246.49),_0xcbd5cb[_0x22131d(0x2e7)](329.874304,245.741841,333.077493,244.786562,336.21,243.63),_0xcbd5cb[_0x22131d(0x2e7)](339.430957,242.413731,342.588325,241.035303,345.67,239.5),_0xcbd5cb[_0x22131d(0x2e7)](351.791575,236.396752,357.680318,232.854149,363.29,228.9),_0xcbd5cb['bezierCurveTo'](368.9,224.98,374.29,220.75,379.46,216.3),_0xcbd5cb[_0x22131d(0x2e7)](384.63,211.85,389.65,207.18,394.36,202.24),_0xcbd5cb[_0x22131d(0x2e7)](389.53,207.06,384.41,211.59,379.14,215.92),_0xcbd5cb[_0x22131d(0x2e7)](373.87416,220.243153,368.393882,224.298292,362.72,228.07),_0xcbd5cb[_0x22131d(0x2e7)](357.066914,231.866215,351.144545,235.245174,0x159,238.18),_0xcbd5cb['bezierCurveTo'](341.934973,239.618284,338.797427,240.896667,335.6,242.01),_0xcbd5cb[_0x22131d(0x2e7)](332.81442,242.95951,329.976369,243.747486,327.1,244.37),_0xcbd5cb['bezierCurveTo'](329.486667,233.97,331.696667,223.536667,333.73,213.07),_0xcbd5cb[_0x22131d(0x242)](393.36,182.9),_0xcbd5cb['lineTo'](334.11,211.14),_0xcbd5cb['lineTo'](334.44,209.48),_0xcbd5cb[_0x22131d(0x2e7)](336.66,197.92,338.73,186.326667,340.65,174.7),_0xcbd5cb[_0x22131d(0x2e7)](343.104938,174.985029,345.590493,174.84976,0x15c,174.3),_0xcbd5cb[_0x22131d(0x2e7)](350.54725,173.755679,353.050747,173.023682,355.49,172.11),_0xcbd5cb[_0x22131d(0x2e7)](360.323367,170.268226,365.033112,168.117108,369.59,165.67),_0xcbd5cb['bezierCurveTo'](374.16,163.25,378.59,160.67,0x17f,157.94),_0xcbd5cb[_0x22131d(0x2e7)](387.41,155.21,391.69,152.4,395.9,149.44),_0xcbd5cb[_0x22131d(0x2e7)](391.62,152.31,387.25,155.03,382.82,157.65),_0xcbd5cb[_0x22131d(0x2e7)](378.39,160.27,373.87,162.75,369.28,165.05),_0xcbd5cb[_0x22131d(0x2e7)](364.706245,167.379689,359.98636,169.410609,355.15,171.13),_0xcbd5cb[_0x22131d(0x2e7)](352.747367,171.981834,350.28365,172.650414,347.78,173.13),_0xcbd5cb[_0x22131d(0x2e7)](345.506501,173.59759,343.170462,173.678726,340.87,173.37),_0xcbd5cb['bezierCurveTo'](342.583333,163.07,344.193333,152.736667,345.7,142.37),_0xcbd5cb['bezierCurveTo'](345.78,141.83,345.85,141.29,345.93,140.74),_0xcbd5cb[_0x22131d(0x2e7)](347.937647,140.185143,349.849427,139.32872,351.6,138.2),_0xcbd5cb[_0x22131d(0x2e7)](353.402611,137.059465,355.129551,135.803509,356.77,134.44),_0xcbd5cb[_0x22131d(0x2e7)](360.020292,131.719246,363.108885,128.810959,366.02,125.73),_0xcbd5cb[_0x22131d(0x2e7)](368.95,122.67,371.76,119.51,374.48,116.28),_0xcbd5cb[_0x22131d(0x2e7)](377.2,113.05,379.86,109.75,382.4,106.38),_0xcbd5cb[_0x22131d(0x2e7)](379.79,109.7,377.07,112.93,374.29,116.11),_0xcbd5cb[_0x22131d(0x2e7)](371.51,119.29,368.63,122.38,365.65,125.37),_0xcbd5cb[_0x22131d(0x2e7)](362.693277,128.372353,359.564676,131.200448,356.28,133.84),_0xcbd5cb['bezierCurveTo'](354.645971,135.148027,352.925382,136.344087,351.13,137.42),_0xcbd5cb[_0x22131d(0x2e7)](349.573662,138.386994,347.891052,139.134074,346.13,139.64),_0xcbd5cb['bezierCurveTo'](347.616667,129.34,349.023333,119.006667,350.35,108.64),_0xcbd5cb[_0x22131d(0x2e7)](350.57,106.84,350.78,105.04,0x15f,103.24),_0xcbd5cb[_0x22131d(0x2e7)](353.772959,102.887322,356.382857,101.733546,358.51,99.92),_0xcbd5cb[_0x22131d(0x2e7)](360.689247,98.129763,362.646488,96.085235,364.34,93.83),_0xcbd5cb[_0x22131d(0x2e7)](366.045862,91.599723,367.605781,89.261516,369.01,86.83),_0xcbd5cb[_0x22131d(0x2e7)](370.424961,84.40499,371.713354,81.908312,372.87,79.35),_0xcbd5cb[_0x22131d(0x2e7)](371.664016,81.886654,370.328935,84.359892,368.87,86.76),_0xcbd5cb[_0x22131d(0x2e7)](367.43589,89.167971,365.84583,91.47957,364.11,93.68),_0xcbd5cb['bezierCurveTo'](362.402661,95.90958,360.431652,97.92424,358.24,99.68),_0xcbd5cb[_0x22131d(0x2e7)](356.181381,101.379613,353.679738,102.455215,351.03,102.78),_0xcbd5cb[_0x22131d(0x2e7)](351.48,99.13,351.94,95.48,352.36,91.78),_0xcbd5cb[_0x22131d(0x2e7)](352.91,87.02,353.45,82.26,353.84,77.48),_0xcbd5cb['bezierCurveTo'](353.9683,76.612156,354.041779,75.737088,354.06,74.86),_0xcbd5cb[_0x22131d(0x242)](354.06,74.86),_0xcbd5cb[_0x22131d(0x2e7)](353.767911,76.227538,353.547609,77.609429,353.4,0x4f),_0xcbd5cb['lineTo'](352.83,83.08),_0xcbd5cb['lineTo'](351.66,91.23),_0xcbd5cb[_0x22131d(0x2e7)](350.86,96.67,350.036667,102.1,349.19,107.52),_0xcbd5cb[_0x22131d(0x2e7)](348.96,0x6d,348.71,110.52,348.47,111.95),_0xcbd5cb[_0x22131d(0x2e7)](346.380877,110.605461,344.506467,108.953553,342.91,107.05),_0xcbd5cb[_0x22131d(0x2e7)](341.207134,104.948594,339.794484,102.627812,338.71,100.15),_0xcbd5cb[_0x22131d(0x2e7)](337.631198,97.658606,336.803763,95.065754,336.24,92.41),_0xcbd5cb[_0x22131d(0x2e7)](335.652362,89.750891,335.317538,87.042163,335.24,84.32),_0xcbd5cb[_0x22131d(0x2e7)](335.239879,87.048686,335.501071,89.771113,336.02,92.45),_0xcbd5cb[_0x22131d(0x2e7)](336.526469,95.139226,337.296862,97.771962,338.32,100.31),_0xcbd5cb['bezierCurveTo'](339.364301,102.853909,340.746748,105.245442,342.43,107.42),_0xcbd5cb[_0x22131d(0x2e7)](344.096692,109.506877,346.080879,111.318967,348.31,112.79),_0xcbd5cb[_0x22131d(0x2e7)](346.85,121.876667,345.33,130.953333,343.75,140.02),_0xcbd5cb[_0x22131d(0x2e7)](342.99,144.34,342.21,148.64,341.43,152.95),_0xcbd5cb[_0x22131d(0x2e7)](338.9,149.65,336.59,146.14,334.35,142.6),_0xcbd5cb['bezierCurveTo'](331.84,138.6,329.43,134.6,327.08,130.48),_0xcbd5cb[_0x22131d(0x2e7)](322.413333,122.313333,317.893333,114.033333,313.52,105.64),_0xcbd5cb[_0x22131d(0x2e7)](317.68,114.12,321.98,122.51,326.52,130.8),_0xcbd5cb['bezierCurveTo'](328.773333,134.946667,331.106667,139.053333,333.52,143.12),_0xcbd5cb[_0x22131d(0x2e7)](335.853003,147.115524,338.396586,150.984307,341.14,154.71),_0xcbd5cb[_0x22131d(0x2e7)](338.08,171.43,334.79,188.09,331.14,204.71),_0xcbd5cb['lineTo'](330.93,205.64),_0xcbd5cb[_0x22131d(0x2e7)](330.54,204.77,330.14,203.92,329.7,203.09),_0xcbd5cb[_0x22131d(0x242)](328.46,200.64),_0xcbd5cb[_0x22131d(0x242)](327.15,198.24),_0xcbd5cb[_0x22131d(0x2e7)](326.29,196.63,325.4,195.04,324.5,193.46),_0xcbd5cb[_0x22131d(0x2e7)](323.6,191.88,322.71,190.29,321.78,188.72),_0xcbd5cb[_0x22131d(0x2e7)](318.13,182.42,314.34,176.21,310.55,0xaa),_0xcbd5cb['bezierCurveTo'](302.93,157.6,295.18,145.29,287.3,133.07),_0xcbd5cb[_0x22131d(0x2e7)](294.96,145.43,302.5,157.866667,309.92,170.38),_0xcbd5cb[_0x22131d(0x2e7)](313.61,176.65,317.28,182.92,320.82,189.27),_0xcbd5cb[_0x22131d(0x2e7)](321.72,190.85,322.59,192.44,323.46,194.04),_0xcbd5cb[_0x22131d(0x2e7)](324.33,195.64,325.19,197.23,326.02,198.84),_0xcbd5cb[_0x22131d(0x242)](327.28,201.25),_0xcbd5cb[_0x22131d(0x242)](328.46,203.69),_0xcbd5cb[_0x22131d(0x2e7)](329.2,205.12,329.79,206.59,330.4,208.05),_0xcbd5cb[_0x22131d(0x2e7)](328.27,217.66,326.14,227.26,323.83,236.82),_0xcbd5cb[_0x22131d(0x2e7)](323.31,0xef,322.77,241.17,322.23,243.35),_0xcbd5cb[_0x22131d(0x2e7)](319.523513,237.538154,316.457575,231.900567,313.05,226.47),_0xcbd5cb['bezierCurveTo'](309.17,220.21,304.89,214.22,300.51,208.33),_0xcbd5cb[_0x22131d(0x2e7)](296.13,202.44,291.51,196.75,286.74,191.14),_0xcbd5cb[_0x22131d(0x2e7)](281.97,185.53,277.13,180.05,272.07,174.74),_0xcbd5cb[_0x22131d(0x2e7)](277.01,180.16,281.74,185.74,286.36,191.46),_0xcbd5cb['bezierCurveTo'](290.98,197.18,295.45,202.95,299.7,208.92),_0xcbd5cb[_0x22131d(0x2e7)](303.95,214.89,308.06,220.92,311.76,227.24),_0xcbd5cb[_0x22131d(0x2e7)](315.459615,233.407716,318.695213,239.842143,321.44,246.49),_0xcbd5cb[_0x22131d(0x2e7)](319.56,253.903333,317.56,261.293333,315.44,268.66),_0xcbd5cb['lineTo'](311.15,283.19),_0xcbd5cb[_0x22131d(0x2e7)](310.43586,280.708811,309.577739,278.271346,308.58,275.89),_0xcbd5cb[_0x22131d(0x2e7)](307.125264,272.474241,305.455242,269.154237,303.58,265.95),_0xcbd5cb[_0x22131d(0x2e7)](299.85838,259.571158,295.67733,253.471705,291.07,247.7),_0xcbd5cb[_0x22131d(0x2e7)](286.51,241.91,281.65,236.37,276.59,231.03),_0xcbd5cb['bezierCurveTo'](271.53,225.69,266.29,220.53,260.8,215.63),_0xcbd5cb['bezierCurveTo'](266.18,220.63,271.29,225.93,276.22,231.37),_0xcbd5cb['bezierCurveTo'](281.15,236.81,285.87,242.45,290.27,248.31),_0xcbd5cb[_0x22131d(0x2e7)](294.711787,254.133096,298.722451,260.272753,302.27,266.68),_0xcbd5cb[_0x22131d(0x2e7)](304.033085,269.865329,305.586386,273.162337,306.92,276.55),_0xcbd5cb[_0x22131d(0x2e7)](308.270743,279.897749,309.298741,283.366825,309.99,286.91),_0xcbd5cb['lineTo'](308.34,292.3),_0xcbd5cb[_0x22131d(0x242)](305.78,0x12c),_0xcbd5cb[_0x22131d(0x242)](303.08,307.79),_0xcbd5cb['lineTo'](302.38,309.67),_0xcbd5cb[_0x22131d(0x2e7)](298.932766,303.588345,295.056269,297.760233,290.78,292.23),_0xcbd5cb[_0x22131d(0x2e7)](286.07,286.23,281.01,280.49,275.78,274.97),_0xcbd5cb['bezierCurveTo'](270.55,269.45,264.98,264.22,259.31,259.13),_0xcbd5cb[_0x22131d(0x2e7)](253.64,254.04,247.81,249.13,241.77,244.52),_0xcbd5cb[_0x22131d(0x2e7)](247.71,249.27,253.41,254.32,258.97,259.52),_0xcbd5cb[_0x22131d(0x2e7)](264.53,264.72,269.9,270.1,275.05,275.68),_0xcbd5cb['bezierCurveTo'](280.2,281.26,285.05,287.09,289.61,293.16),_0xcbd5cb['bezierCurveTo'](294.060285,299.171244,298.029271,305.524297,301.48,312.16),_0xcbd5cb[_0x22131d(0x242)](300.23,315.52),_0xcbd5cb['lineTo'](294.37,330.91),_0xcbd5cb[_0x22131d(0x2e7)](291.99,337.05,289.593333,343.18,287.18,349.3),_0xcbd5cb[_0x22131d(0x2e7)](283.87,347.64,281.89,344.1,279.84,340.74),_0xcbd5cb['bezierCurveTo'](277.68,337.04,275.63,333.25,273.58,329.46),_0xcbd5cb[_0x22131d(0x242)](270.51,323.78),_0xcbd5cb['bezierCurveTo'](269.42,321.9,268.41,319.98,267.26,318.16),_0xcbd5cb[_0x22131d(0x242)](265.57,315.39),_0xcbd5cb[_0x22131d(0x242)](263.81,312.67),_0xcbd5cb['bezierCurveTo'](262.66,310.84,261.45,309.06,260.24,307.27),_0xcbd5cb[_0x22131d(0x2e7)](255.4,300.13,250.33,293.15,245.14,286.27),_0xcbd5cb[_0x22131d(0x2e7)](239.95,279.39,234.66,272.58,229.25,265.87),_0xcbd5cb[_0x22131d(0x2e7)](234.53,272.683333,239.693333,279.58,244.74,286.56),_0xcbd5cb[_0x22131d(0x2e7)](249.79,293.56,254.74,300.56,259.41,307.82),_0xcbd5cb[_0x22131d(0x2e7)](260.58,309.63,261.75,311.43,262.86,313.27),_0xcbd5cb['lineTo'](264.55,316.01),_0xcbd5cb[_0x22131d(0x242)](266.18,318.79),_0xcbd5cb[_0x22131d(0x2e7)](267.29,320.63,268.25,322.55,269.29,324.42),_0xcbd5cb[_0x22131d(0x242)](272.29,330.16),_0xcbd5cb[_0x22131d(0x2e7)](274.29,333.99,276.29,337.82,278.36,341.61),_0xcbd5cb[_0x22131d(0x2e7)](279.408258,343.540652,280.580722,345.40123,281.87,347.18),_0xcbd5cb['bezierCurveTo'](282.552636,348.10872,283.345052,348.951501,284.23,349.69),_0xcbd5cb[_0x22131d(0x2e7)](284.930562,350.256711,285.687936,350.749339,286.49,351.16),_0xcbd5cb[_0x22131d(0x2e7)](282.943333,360.18,279.36,369.18,275.74,378.16),_0xcbd5cb['bezierCurveTo'](272.678992,375.756461,269.779399,373.154177,267.06,370.37),_0xcbd5cb[_0x22131d(0x2e7)](264.050646,367.3051,261.197054,364.091055,258.51,360.74),_0xcbd5cb[_0x22131d(0x2e7)](253.113167,354.032122,248.104966,347.02064,243.51,339.74),_0xcbd5cb[_0x22131d(0x2e7)](238.87,332.47,234.51,324.99,230.45,317.4),_0xcbd5cb['bezierCurveTo'](226.39,309.81,222.45,302.09,218.9,294.22),_0xcbd5cb[_0x22131d(0x2e7)](222.31,302.16,226.06,309.95,0xe6,317.63),_0xcbd5cb[_0x22131d(0x2e7)](233.94,325.31,238.15,332.88,242.66,340.27),_0xcbd5cb['bezierCurveTo'](247.134146,347.686959,252.028804,354.841974,257.32,361.7),_0xcbd5cb[_0x22131d(0x2e7)](259.967844,365.143315,262.791598,368.447708,265.78,371.6),_0xcbd5cb[_0x22131d(0x2e7)](268.633614,374.64481,271.697841,377.485151,274.95,380.1),_0xcbd5cb[_0x22131d(0x2e7)](270.03,392.36,265.07,404.6,260.07,416.82),_0xcbd5cb[_0x22131d(0x2e7)](257.405305,414.216058,254.944723,411.411128,252.71,408.43),_0xcbd5cb[_0x22131d(0x2e7)](250.19,405.11,247.84,401.65,245.61,398.11),_0xcbd5cb[_0x22131d(0x2e7)](241.18,391.02,237.18,383.63,233.44,376.11),_0xcbd5cb['bezierCurveTo'](229.7,368.59,226.22,360.96,222.93,353.23),_0xcbd5cb[_0x22131d(0x2e7)](219.64,345.5,216.5,337.71,213.62,329.82),_0xcbd5cb[_0x22131d(0x2e7)](216.34,337.77,219.33,345.63,222.47,353.43),_0xcbd5cb[_0x22131d(0x2e7)](225.61,361.23,228.95,368.94,232.54,376.55),_0xcbd5cb[_0x22131d(0x2e7)](236.13,384.16,0xf0,391.64,244.33,398.89),_0xcbd5cb[_0x22131d(0x2e7)](246.51,402.5,248.81,406.05,251.33,409.47),_0xcbd5cb[_0x22131d(0x2e7)](253.727855,412.797666,256.40415,415.915549,259.33,418.79),_0xcbd5cb['bezierCurveTo'](255.15,429.01,250.953333,439.226667,246.74,449.44),_0xcbd5cb[_0x22131d(0x2e7)](244.778777,447.210592,242.996576,444.829866,241.41,442.32),_0xcbd5cb['bezierCurveTo'](239.52,439.43,237.79,436.41,236.07,433.4),_0xcbd5cb[_0x22131d(0x2e7)](232.66,427.34,229.43,421.17,225.97,415.11),_0xcbd5cb[_0x22131d(0x2e7)](224.25,412.11,222.44,409.11,220.52,406.17),_0xcbd5cb[_0x22131d(0x2e7)](219.52,404.73,218.52,403.29,217.41,401.94),_0xcbd5cb[_0x22131d(0x2e7)](216.3,400.59,215.2,399.27,214.22,397.83),_0xcbd5cb['bezierCurveTo'](212.202342,395.007135,210.505222,391.96842,209.16,388.77),_0xcbd5cb['bezierCurveTo'](207.794006,385.579613,206.881803,382.213553,206.45,378.77),_0xcbd5cb[_0x22131d(0x2e7)](206.794245,382.246821,207.629204,385.657359,208.93,388.9),_0xcbd5cb[_0x22131d(0x2e7)](210.205438,392.159366,211.842331,395.265438,213.81,398.16),_0xcbd5cb[_0x22131d(0x2e7)](214.75,399.62,215.9,400.98,216.92,402.37),_0xcbd5cb[_0x22131d(0x2e7)](217.94,403.76,218.92,405.18,219.92,406.62),_0xcbd5cb[_0x22131d(0x2e7)](221.76,409.56,223.496667,412.56,225.13,415.62),_0xcbd5cb[_0x22131d(0x2e7)](228.43,421.74,231.51,427.98,234.79,434.14),_0xcbd5cb['bezierCurveTo'](236.44,437.21,238.1,440.29,239.96,443.27),_0xcbd5cb[_0x22131d(0x2e7)](241.69116,446.199586,243.700435,448.955642,245.96,451.5),_0xcbd5cb[_0x22131d(0x2e7)](245.73,452.05,245.51,452.61,245.28,453.16),_0xcbd5cb[_0x22131d(0x242)](235.65,476.16),_0xcbd5cb[_0x22131d(0x2e7)](233.234419,473.928115,231.116935,471.393856,229.35,468.62),_0xcbd5cb['lineTo'](227.86,466.23),_0xcbd5cb[_0x22131d(0x242)](226.53,463.74),_0xcbd5cb[_0x22131d(0x2e7)](226.07,462.92,225.7,462.05,225.29,461.2),_0xcbd5cb[_0x22131d(0x2e7)](224.88,460.35,224.47,459.5,224.12,458.62),_0xcbd5cb[_0x22131d(0x2e7)](222.637911,455.133693,221.349287,451.568275,220.26,447.94),_0xcbd5cb[_0x22131d(0x2e7)](219.17,444.3,218.19,440.63,217.46,436.94),_0xcbd5cb['bezierCurveTo'](218.03,440.71,218.84,444.43,219.78,448.12),_0xcbd5cb['bezierCurveTo'](220.651169,451.803459,221.726156,455.435715,0xdf,0x1cb),_0xcbd5cb[_0x22131d(0x2e7)](223.31,459.91,223.69,460.79,224.06,461.67),_0xcbd5cb['bezierCurveTo'](224.43,462.55,224.77,463.45,225.21,464.3),_0xcbd5cb['lineTo'](226.46,466.9),_0xcbd5cb[_0x22131d(0x242)](227.87,469.42),_0xcbd5cb['bezierCurveTo'](229.710692,472.611692,231.993268,475.527195,234.65,478.08),_0xcbd5cb['lineTo'](225.34,500.28),_0xcbd5cb[_0x22131d(0x2e7)](223.567784,498.932077,222.096411,497.229099,221.02,495.28),_0xcbd5cb[_0x22131d(0x2e7)](219.682772,492.949719,218.654152,490.455485,217.96,487.86),_0xcbd5cb['bezierCurveTo'](217.240155,485.235686,216.71539,482.561726,216.39,479.86),_0xcbd5cb[_0x22131d(0x2e7)](216.048256,477.146861,215.881245,474.414563,215.89,471.68),_0xcbd5cb[_0x22131d(0x2e7)](215.715019,474.420543,215.715019,477.169457,215.89,479.91),_0xcbd5cb[_0x22131d(0x2e7)](216.051088,482.664265,216.422166,485.402217,0xd9,488.1),_0xcbd5cb[_0x22131d(0x2e7)](217.563246,490.841192,218.473932,493.49932,219.71,496.01),_0xcbd5cb[_0x22131d(0x2e7)](220.864811,498.365539,222.524089,500.437928,224.57,502.08),_0xcbd5cb[_0x22131d(0x242)](194.12,574.71),_0xcbd5cb[_0x22131d(0x2e7)](193.118154,577.053783,193.766894,579.777055,195.717847,581.41742),_0xcbd5cb[_0x22131d(0x2e7)](197.6688,583.057785,200.463015,583.229356,202.6,581.84),_0xcbd5cb[_0x22131d(0x2e7)](203.294888,581.395101,203.885101,580.804888,204.33,580.11),_0xcbd5cb[_0x22131d(0x2e7)](204.537742,579.764552,204.718287,579.403462,204.87,579.03),_0xcbd5cb[_0x22131d(0x242)](205.26,578.03),_0xcbd5cb[_0x22131d(0x242)](211.54,562.23),_0xcbd5cb[_0x22131d(0x242)](224.09,530.63),_0xcbd5cb['lineTo'](233.09,507.93),_0xcbd5cb['bezierCurveTo'](237.58,508.07,242.09,508.14,246.55,507.93),_0xcbd5cb[_0x22131d(0x2e7)](251.01,507.72,255.72,507.44,260.27,506.93),_0xcbd5cb[_0x22131d(0x2e7)](264.82,506.42,269.38,505.81,273.89,505.03),_0xcbd5cb['bezierCurveTo'](278.4,504.25,282.89,503.32,287.31,502.14),_0xcbd5cb['bezierCurveTo'](282.85,503.14,278.31,503.91,273.81,504.53),_0xcbd5cb[_0x22131d(0x2e7)](269.31,505.15,264.74,505.63,260.19,505.93),_0xcbd5cb['bezierCurveTo'](255.64,506.23,251.08,506.42,246.52,506.4),_0xcbd5cb[_0x22131d(0x2e7)](242.29,506.4,238.07,506.21,233.87,505.94),_0xcbd5cb['lineTo'](242.87,483.17),_0xcbd5cb['bezierCurveTo'](247.748633,484.67415,252.779669,485.630046,257.87,486.02),_0xcbd5cb[_0x22131d(0x242)](261.81,486.28),_0xcbd5cb[_0x22131d(0x242)](265.75,486.37),_0xcbd5cb['bezierCurveTo'](267.06,486.37,268.38,486.37,269.69,486.37),_0xcbd5cb[_0x22131d(0x2e7)](0x10f,486.37,272.31,486.37,273.62,486.24),_0xcbd5cb['bezierCurveTo'](278.86,486.02,284.08,485.46,289.26,484.78),_0xcbd5cb['bezierCurveTo'](294.44,484.1,299.61,483.21,304.72,482.07),_0xcbd5cb[_0x22131d(0x2e7)](299.58,483.07,294.4,483.74,289.21,484.28),_0xcbd5cb[_0x22131d(0x2e7)](284.02,484.82,278.8,485.19,273.59,485.28),_0xcbd5cb[_0x22131d(0x2e7)](272.29,485.34,270.98,485.28,269.68,485.28),_0xcbd5cb['bezierCurveTo'](268.38,485.28,267.08,485.28,265.78,485.18),_0xcbd5cb[_0x22131d(0x242)](261.89,484.97),_0xcbd5cb[_0x22131d(0x242)](258.02,484.58),_0xcbd5cb[_0x22131d(0x2e7)](253.124193,484.047191,248.301856,482.977424,243.64,481.39),_0xcbd5cb[_0x22131d(0x242)](249.19,467.39),_0xcbd5cb[_0x22131d(0x2e7)](250.19,464.99,251.09,462.58,252.04,460.18),_0xcbd5cb[_0x22131d(0x242)](257.36,461.07),_0xcbd5cb['lineTo'](260.36,461.57),_0xcbd5cb[_0x22131d(0x2e7)](261.36,461.72,262.36,461.78,263.36,461.89),_0xcbd5cb[_0x22131d(0x242)](269.36,462.48),_0xcbd5cb[_0x22131d(0x2e7)](271.36,462.61,273.36,462.64,275.36,462.73),_0xcbd5cb[_0x22131d(0x242)](278.36,462.84),_0xcbd5cb[_0x22131d(0x2e7)](279.36,462.84,280.36,462.84,281.36,462.79),_0xcbd5cb[_0x22131d(0x242)](287.36,462.65),_0xcbd5cb['bezierCurveTo'](291.36,462.34,295.36,462.15,299.26,461.58),_0xcbd5cb[_0x22131d(0x2e7)](307.162025,460.627802,314.987783,459.124133,322.68,457.08),_0xcbd5cb[_0x22131d(0x2e7)](330.372552,455.087162,337.898555,452.499367,345.19,449.34),_0xcbd5cb[_0x22131d(0x2e7)](337.845928,452.34203,330.279858,454.769325,322.56,456.6),_0xcbd5cb[_0x22131d(0x2e7)](314.859048,458.475463,307.03677,459.812033,299.15,460.6),_0xcbd5cb['bezierCurveTo'](295.22,461.08,291.26,461.18,287.32,461.41),_0xcbd5cb['lineTo'](281.39,461.41),_0xcbd5cb[_0x22131d(0x2e7)](280.39,461.41,279.39,461.41,278.39,461.41),_0xcbd5cb[_0x22131d(0x242)](275.44,461.24),_0xcbd5cb[_0x22131d(0x2e7)](273.44,461.11,271.49,461.04,269.53,460.87),_0xcbd5cb[_0x22131d(0x242)](263.65,460.16),_0xcbd5cb[_0x22131d(0x2e7)](262.65,460.03,261.65,459.95,260.72,459.79),_0xcbd5cb[_0x22131d(0x242)](257.81,459.23),_0xcbd5cb['lineTo'](252.92,458.31),_0xcbd5cb[_0x22131d(0x2e7)](255.886667,450.803333,258.83,443.283333,261.75,435.75),_0xcbd5cb[_0x22131d(0x242)](264.75,427.87),_0xcbd5cb[_0x22131d(0x242)](271.61,0x1ac),_0xcbd5cb[_0x22131d(0x242)](275.28,428.06),_0xcbd5cb[_0x22131d(0x2e7)](276.5,428.06,277.72,427.99,278.95,427.95),_0xcbd5cb[_0x22131d(0x242)](286.28,427.7),_0xcbd5cb[_0x22131d(0x242)](293.59,427.1),_0xcbd5cb[_0x22131d(0x242)](297.24,426.8),_0xcbd5cb['lineTo'](300.88,426.33),_0xcbd5cb['bezierCurveTo'](303.3,426.01,305.73,425.73,308.15,425.38),_0xcbd5cb[_0x22131d(0x2e7)](312.96,424.55,317.79,423.82,322.56,422.75),_0xcbd5cb[_0x22131d(0x2e7)](332.11993,420.773435,341.569582,418.296698,350.87,415.33),_0xcbd5cb[_0x22131d(0x2e7)](360.149488,412.428191,369.248783,408.978807,378.12,0x195),_0xcbd5cb['bezierCurveTo'](369.169758,408.852543,359.996642,412.16515,350.65,414.92),_0xcbd5cb[_0x22131d(0x2e7)](341.325156,417.724595,331.858624,420.034482,322.29,421.84),_0xcbd5cb[_0x22131d(0x2e7)](317.53,422.84,312.7,423.47,307.9,424.21),_0xcbd5cb[_0x22131d(0x2e7)](305.49,424.52,303.07,424.76,300.66,425.03),_0xcbd5cb[_0x22131d(0x242)](297.03,425.43),_0xcbd5cb[_0x22131d(0x242)](293.4,425.68),_0xcbd5cb['lineTo'](286.13,426.14),_0xcbd5cb[_0x22131d(0x242)](278.85,426.27),_0xcbd5cb[_0x22131d(0x2e7)](277.64,426.27,276.42,426.33,275.21,426.27),_0xcbd5cb['lineTo'](271.57,426.14),_0xcbd5cb[_0x22131d(0x242)](265.44,425.92),_0xcbd5cb[_0x22131d(0x242)](273.9,404.05),_0xcbd5cb[_0x22131d(0x242)](276.44,397.42),_0xcbd5cb[_0x22131d(0x2e7)](281.770413,397.776303,287.120775,397.70608,292.44,397.21),_0xcbd5cb[_0x22131d(0x2e7)](297.9039,396.661021,303.32566,395.752383,308.67,394.49),_0xcbd5cb['bezierCurveTo'](319.304232,391.902545,329.68049,388.351187,339.67,383.88),_0xcbd5cb[_0x22131d(0x2e7)](349.660792,379.456497,359.372192,374.427141,368.75,368.82),_0xcbd5cb[_0x22131d(0x2e7)](378.143829,363.260838,387.208908,357.16403,395.9,350.56),_0xcbd5cb['bezierCurveTo'](387.113785,357.02045,377.965537,362.973489,368.5,368.39),_0xcbd5cb[_0x22131d(0x2e7)](359.068327,373.847301,349.313675,378.726297,339.29,0x17f),_0xcbd5cb[_0x22131d(0x2e7)](329.283202,387.286697,318.907086,390.653914,308.29,393.06),_0xcbd5cb[_0x22131d(0x2e7)](302.996377,394.226849,297.631313,395.041964,292.23,395.5),_0xcbd5cb[_0x22131d(0x2e7)](287.210705,395.884995,282.169295,395.884995,277.15,395.5),_0xcbd5cb[_0x22131d(0x2e7)](280.603333,386.466667,284.033333,377.43,287.44,368.39),_0xcbd5cb[_0x22131d(0x2e7)](291.168819,368.27132,294.884664,367.890379,298.56,367.25),_0xcbd5cb[_0x22131d(0x2e7)](302.456875,366.589762,306.315704,365.721859,310.12,364.65),_0xcbd5cb[_0x22131d(0x2e7)](317.703022,362.515407,325.149958,359.924007,332.42,356.89),_0xcbd5cb['bezierCurveTo'](339.7,353.89,346.83,350.58,353.85,347.05),_0xcbd5cb['bezierCurveTo'](360.87,343.52,367.77,339.76,374.5,335.72),_0xcbd5cb['bezierCurveTo'](367.69,339.62,360.7,343.21,353.63,346.6),_0xcbd5cb[_0x22131d(0x2e7)](346.56,349.99,339.36,353.14,332.05,355.96),_0xcbd5cb[_0x22131d(0x2e7)](324.766107,358.820936,317.315836,361.238684,309.74,363.2),_0xcbd5cb['bezierCurveTo'](305.963906,364.178842,302.138527,364.956602,298.28,365.53),_0xcbd5cb[_0x22131d(0x2e7)](294.938345,366.030666,291.568185,366.317915,288.19,366.39),_0xcbd5cb[_0x22131d(0x2e7)](291.443333,357.723333,294.666667,349.056667,297.86,340.39),_0xcbd5cb[_0x22131d(0x2e7)](298.49,338.79,299.06,337.16,299.66,335.53)),_0xcbd5cb[_0x22131d(0x584)](),_0xcbd5cb[_0x22131d(0x481)](),_0xcbd5cb[_0x22131d(0x2cc)](),this[_0x22131d(0x5e9)]['update']();},Bitmap[_0x3c3250(0x206)]['drawDandelionSeed']=function(_0x475ae8,_0x5af9f1,_0x626396){const _0x1f21be=_0x3c3250,_0x3300ac=this[_0x1f21be(0x378)];_0x475ae8=_0x475ae8||_0x1f21be(0x4c8),_0x5af9f1=_0x5af9f1||'#888800',_0x626396=_0x626396||_0x1f21be(0x513),_0x3300ac['save'](),_0x3300ac[_0x1f21be(0x244)]=_0x475ae8,(_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac['lineWidth']=0.695966,_0x3300ac['moveTo'](32.118356,32.638166),_0x3300ac['bezierCurveTo'](36.363751,64.026251,27.872961,82.886942,27.872961,82.886942)),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x244)]=_0x5af9f1,(_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](30.16965,77.249614),_0x3300ac[_0x1f21be(0x2e7)](31.491986,78.154371,30.16965,83.443715,27.107398,89.081043),_0x3300ac[_0x1f21be(0x2e7)](24.045146,94.718371,20.495717,98.546186,19.173381,97.64143),_0x3300ac[_0x1f21be(0x2e7)](17.851045,96.736674,19.173381,91.447329,22.235633,85.810001),_0x3300ac[_0x1f21be(0x2e7)](25.297885,80.172673,28.847314,76.344858,30.16965,77.249614)),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x244)]=_0x626396,_0x3300ac[_0x1f21be(0x32d)]=_0x626396,_0x3300ac[_0x1f21be(0x4d8)]=0x5,(_0x3300ac[_0x1f21be(0x213)](),_0x3300ac[_0x1f21be(0x57e)](0.695966,0x0,0x0,0.695966,181.842,123.051),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-242.3,-157.8),_0x3300ac[_0x1f21be(0x242)](-214.1,-130.5),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['save'](),_0x3300ac[_0x1f21be(0x57e)](0.31266,0x0,0x0,0.32058,88.64,390.11),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-1050.5,-0x6a5),_0x3300ac[_0x1f21be(0x2e7)](-1079.4,-1729.8,-1102.2,-1750.4,-1078.2,-1725.7),_0x3300ac['bezierCurveTo'](-1054.1,-0x6a5,-1052.9,-0x6a5,-1050.5,-0x6a5),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-1048.5,-0x6a7),_0x3300ac[_0x1f21be(0x2e7)](-1077.4,-1731.8,-1100.2,-1752.4,-1076.2,-1727.7),_0x3300ac['bezierCurveTo'](-1052.1,-0x6a7,-1050.9,-0x6a7,-1048.5,-0x6a7),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-1050.5,-0x6a7),_0x3300ac[_0x1f21be(0x2e7)](-1079.4,-1731.8,-1102.2,-1752.4,-1078.2,-1727.7),_0x3300ac['bezierCurveTo'](-1054.1,-0x6a7,-1052.9,-0x6a7,-1050.5,-0x6a7),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['restore'](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-230.9,-162.8),_0x3300ac[_0x1f21be(0x242)](-215.2,-132.2),_0x3300ac['fill'](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x213)](),_0x3300ac[_0x1f21be(0x57e)](0.22445,0.070054,-0.053362,0.28457,132.9,389.45),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-1959.5,-1448.4),_0x3300ac[_0x1f21be(0x2e7)](-1988.4,-1477.2,-2011.2,-1497.8,-1987.2,-1473.1),_0x3300ac[_0x1f21be(0x2e7)](-1963.1,-1448.4,-1961.9,-1448.4,-1959.5,-1448.4),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](-1957.5,-1450.4),_0x3300ac[_0x1f21be(0x2e7)](-1986.4,-1479.2,-2009.2,-1499.8,-1985.2,-1475.1),_0x3300ac[_0x1f21be(0x2e7)](-1961.1,-1450.4,-1959.9,-1450.4,-1957.5,-1450.4),_0x3300ac['fill'](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac['moveTo'](-1959.5,-1450.4),_0x3300ac[_0x1f21be(0x2e7)](-1988.4,-1479.2,-2011.2,-1499.8,-1987.2,-1475.1),_0x3300ac[_0x1f21be(0x2e7)](-1963.1,-1450.4,-1961.9,-1450.4,-1959.5,-1450.4),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2cc)](),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](-217.8,-162.7),_0x3300ac['lineTo'](-216.1,-133.5),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x213)](),_0x3300ac['transform'](0.22089,0.17769,-0.21484,0.15456,209.48,425.48),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-2652.9,-738.7),_0x3300ac[_0x1f21be(0x2e7)](-2681.8,-767.5,-2704.6,-788.1,-2680.6,-763.4),_0x3300ac[_0x1f21be(0x2e7)](-2656.5,-738.7,-2655.3,-738.7,-2652.9,-738.7),_0x3300ac['fill'](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](-2650.9,-740.7),_0x3300ac[_0x1f21be(0x2e7)](-2679.8,-769.5,-2702.6,-790.1,-2678.6,-765.4),_0x3300ac[_0x1f21be(0x2e7)](-2654.5,-740.7,-2653.3,-740.7,-2650.9,-740.7),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac['moveTo'](-2652.9,-740.7),_0x3300ac['bezierCurveTo'](-2681.8,-769.5,-2704.6,-790.1,-2680.6,-765.4),_0x3300ac['bezierCurveTo'](-2656.5,-740.7,-2655.3,-740.7,-2652.9,-740.7),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2cc)](),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](-196.4,-158.1),_0x3300ac['lineTo'](-216.8,-133.7),_0x3300ac['fill'](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x213)](),_0x3300ac[_0x1f21be(0x57e)](-0.002675,0.26549,-0.23659,0.00452,270.1,476.54),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-2416.6,2007.2),_0x3300ac[_0x1f21be(0x2e7)](-2445.5,1978.4,-2468.3,1957.8,-2444.3,1982.5),_0x3300ac[_0x1f21be(0x2e7)](-2420.2,2007.2,-0x973,2007.2,-2416.6,2007.2),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](-2414.6,2005.2),_0x3300ac['bezierCurveTo'](-2443.5,1976.4,-2466.3,1955.8,-2442.3,1980.5),_0x3300ac['bezierCurveTo'](-2418.2,2005.2,-0x971,2005.2,-2414.6,2005.2),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-2416.6,2005.2),_0x3300ac[_0x1f21be(0x2e7)](-2445.5,1976.4,-2468.3,1955.8,-2444.3,1980.5),_0x3300ac[_0x1f21be(0x2e7)](-2420.2,2005.2,-0x973,2005.2,-2416.6,2005.2),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2cc)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-246.9,-141.7),_0x3300ac[_0x1f21be(0x242)](-214.2,-131.4),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x213)](),_0x3300ac['transform'](0.24275,-0.15327,0.12697,0.28299,44.094,441.92),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac['moveTo'](-85.8,-2104.9),_0x3300ac[_0x1f21be(0x2e7)](-114.7,-2133.7,-137.5,-2154.3,-113.5,-2129.6),_0x3300ac[_0x1f21be(0x2e7)](-89.4,-2104.9,-88.2,-2104.9,-85.8,-2104.9),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](-83.8,-2106.9),_0x3300ac['bezierCurveTo'](-112.7,-2135.7,-135.5,-2156.3,-111.5,-2131.6),_0x3300ac[_0x1f21be(0x2e7)](-87.4,-2106.9,-86.2,-2106.9,-83.8,-2106.9),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['beginPath'](),_0x3300ac['moveTo'](-85.8,-2106.9),_0x3300ac['bezierCurveTo'](-114.7,-2135.7,-137.5,-2156.3,-113.5,-2131.6),_0x3300ac['bezierCurveTo'](-89.4,-2106.9,-88.2,-2106.9,-85.8,-2106.9),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x2cc)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-185.8,-142.3),_0x3300ac['lineTo'](-218.5,-0x84),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x213)](),_0x3300ac[_0x1f21be(0x57e)](-0.24275,-0.15327,-0.12697,0.28299,270.99,441.28),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](2314.6,-804.9),_0x3300ac['bezierCurveTo'](2285.7,-833.7,2262.9,-854.3,2286.9,-829.6),_0x3300ac[_0x1f21be(0x2e7)](0x907,-804.9,2312.2,-804.9,2314.6,-804.9),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](2316.6,-806.9),_0x3300ac[_0x1f21be(0x2e7)](2287.7,-835.7,2264.9,-856.3,2288.9,-831.6),_0x3300ac[_0x1f21be(0x2e7)](0x909,-806.9,2314.2,-806.9,2316.6,-806.9),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](2314.6,-806.9),_0x3300ac[_0x1f21be(0x2e7)](2285.7,-835.7,2262.9,-856.3,2286.9,-831.6),_0x3300ac[_0x1f21be(0x2e7)](0x907,-806.9,2312.2,-806.9,2314.6,-806.9),_0x3300ac['fill'](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2cc)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-231.8,-129.4),_0x3300ac[_0x1f21be(0x242)](-213.2,-134.7),_0x3300ac['fill'](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['save'](),_0x3300ac['transform'](0.023653,-0.076388,0.19356,0.018706,63.365,546.69),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](8238.8,-2522.6),_0x3300ac[_0x1f21be(0x2e7)](8209.9,-2551.4,8187.1,-0xa0c,8211.1,-2547.3),_0x3300ac['bezierCurveTo'](8235.2,-2522.6,8236.4,-2522.6,8238.8,-2522.6),_0x3300ac['fill'](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](8240.8,-2524.6),_0x3300ac['bezierCurveTo'](8211.9,-2553.4,8189.1,-0xa0e,8213.1,-2549.3),_0x3300ac[_0x1f21be(0x2e7)](8237.2,-2524.6,8238.4,-2524.6,8240.8,-2524.6),_0x3300ac['fill'](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](8238.8,-2524.6),_0x3300ac[_0x1f21be(0x2e7)](8209.9,-2553.4,8187.1,-0xa0e,8211.1,-2549.3),_0x3300ac[_0x1f21be(0x2e7)](8235.2,-2524.6,8236.4,-2524.6,8238.8,-2524.6),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2cc)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-199.6,-0x80),_0x3300ac[_0x1f21be(0x242)](-218.2,-133.3),_0x3300ac['fill'](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x213)](),_0x3300ac['transform'](-0.023653,-0.076388,-0.19356,0.018706,252.97,548.1),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](9157.3,1228.3),_0x3300ac[_0x1f21be(0x2e7)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0x3300ac[_0x1f21be(0x2e7)](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](9159.3,1226.3),_0x3300ac[_0x1f21be(0x2e7)](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0x3300ac[_0x1f21be(0x2e7)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0x3300ac['fill'](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](9157.3,1226.3),_0x3300ac[_0x1f21be(0x2e7)](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0x3300ac[_0x1f21be(0x2e7)](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0x3300ac[_0x1f21be(0x2cc)](),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](-198.5,-126.8),_0x3300ac['lineTo'](-217.1,-132.1),_0x3300ac['fill'](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x213)](),_0x3300ac[_0x1f21be(0x57e)](-0.023653,-0.076388,-0.19356,0.018706,254.11,549.29),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](9157.3,1228.3),_0x3300ac[_0x1f21be(0x2e7)](9128.4,1199.5,9105.6,1178.9,9129.6,1203.6),_0x3300ac['bezierCurveTo'](9153.7,1228.3,9154.9,1228.3,9157.3,1228.3),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac['stroke'](),_0x3300ac['beginPath'](),_0x3300ac['moveTo'](9159.3,1226.3),_0x3300ac[_0x1f21be(0x2e7)](9130.4,1197.5,9107.6,1176.9,9131.6,1201.6),_0x3300ac[_0x1f21be(0x2e7)](9155.7,1226.3,9156.9,1226.3,9159.3,1226.3),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac['stroke'](),_0x3300ac['beginPath'](),_0x3300ac['moveTo'](9157.3,1226.3),_0x3300ac['bezierCurveTo'](9128.4,1197.5,9105.6,1176.9,9129.6,1201.6),_0x3300ac[_0x1f21be(0x2e7)](9153.7,1226.3,9154.9,1226.3,9157.3,1226.3),_0x3300ac['fill'](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x2cc)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-215.6,-132.9),_0x3300ac[_0x1f21be(0x242)](-215.6,-128.2),_0x3300ac['fill'](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-206.5,-160.9),_0x3300ac[_0x1f21be(0x242)](-215.4,-134.6),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x213)](),_0x3300ac[_0x1f21be(0x57e)](0.14296,0.24045,-0.25629,0.054271,247.7,457.79),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-2632.7,307.2),_0x3300ac[_0x1f21be(0x2e7)](-2661.6,278.4,-2684.4,257.8,-2660.4,282.5),_0x3300ac['bezierCurveTo'](-2636.3,307.2,-2635.1,307.2,-2632.7,307.2),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-2630.7,305.2),_0x3300ac[_0x1f21be(0x2e7)](-2659.6,276.4,-2682.4,255.8,-2658.4,280.5),_0x3300ac[_0x1f21be(0x2e7)](-2634.3,305.2,-2633.1,305.2,-2630.7,305.2),_0x3300ac['fill'](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-2632.7,305.2),_0x3300ac[_0x1f21be(0x2e7)](-2661.6,276.4,-2684.4,255.8,-2660.4,280.5),_0x3300ac[_0x1f21be(0x2e7)](-2636.3,305.2,-2635.1,305.2,-2632.7,305.2),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x2cc)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-188.1,-148.7),_0x3300ac['lineTo'](-215.9,-0x87),_0x3300ac['fill'](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x213)](),_0x3300ac[_0x1f21be(0x57e)](-0.097581,0.23264,-0.2229,-0.086065,286.11,525.8),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac['moveTo'](-1809.9,2931.2),_0x3300ac['bezierCurveTo'](-1838.8,2902.4,-1861.6,2881.8,-1837.6,2906.5),_0x3300ac[_0x1f21be(0x2e7)](-1813.5,2931.2,-1812.3,2931.2,-1809.9,2931.2),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-1807.9,2929.2),_0x3300ac[_0x1f21be(0x2e7)](-1836.8,2900.4,-1859.6,2879.8,-1835.6,2904.5),_0x3300ac[_0x1f21be(0x2e7)](-1811.5,2929.2,-1810.3,2929.2,-1807.9,2929.2),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-1809.9,2929.2),_0x3300ac['bezierCurveTo'](-1838.8,2900.4,-1861.6,2879.8,-1837.6,2904.5),_0x3300ac[_0x1f21be(0x2e7)](-1813.5,2929.2,-1812.3,2929.2,-1809.9,2929.2),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2cc)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-183.8,-130.7),_0x3300ac[_0x1f21be(0x242)](-218.1,-134.1),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x213)](),_0x3300ac[_0x1f21be(0x57e)](-0.17214,-0.22728,-0.2201,0.20074,299.56,495.11),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](2783.6,33.2),_0x3300ac[_0x1f21be(0x2e7)](2754.7,4.4,2731.9,-16.2,2755.9,8.5),_0x3300ac[_0x1f21be(0x2e7)](0xadc,33.2,2781.2,33.2,2783.6,33.2),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](2785.6,31.2),_0x3300ac[_0x1f21be(0x2e7)](2756.7,2.4,2733.9,-18.2,2757.9,6.5),_0x3300ac['bezierCurveTo'](0xade,31.2,2783.2,31.2,2785.6,31.2),_0x3300ac['fill'](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](2783.6,31.2),_0x3300ac[_0x1f21be(0x2e7)](2754.7,2.4,2731.9,-18.2,2755.9,6.5),_0x3300ac[_0x1f21be(0x2e7)](0xadc,31.2,2781.2,31.2,2783.6,31.2),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['restore'](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](-231.5,-136.9),_0x3300ac[_0x1f21be(0x242)](-212.2,-134.5),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x213)](),_0x3300ac[_0x1f21be(0x57e)](0.049479,-0.058228,0.17433,0.090128,67.628,508.86),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](5867.7,-3370.8),_0x3300ac[_0x1f21be(0x2e7)](5838.8,-3399.6,0x16b8,-3420.2,0x16d0,-3395.5),_0x3300ac[_0x1f21be(0x2e7)](0x16e8,-3370.8,5865.3,-3370.8,5867.7,-3370.8),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['beginPath'](),_0x3300ac['moveTo'](5869.7,-3372.8),_0x3300ac[_0x1f21be(0x2e7)](5840.8,-3401.6,0x16ba,-3422.2,0x16d2,-3397.5),_0x3300ac[_0x1f21be(0x2e7)](0x16ea,-3372.8,5867.3,-3372.8,5869.7,-3372.8),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac['stroke'](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](5867.7,-3372.8),_0x3300ac[_0x1f21be(0x2e7)](5838.8,-3401.6,0x16b8,-3422.2,0x16d0,-3397.5),_0x3300ac[_0x1f21be(0x2e7)](0x16e8,-3372.8,5865.3,-3372.8,5867.7,-3372.8),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac['restore'](),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](-201.9,-123.4),_0x3300ac[_0x1f21be(0x242)](-217.4,-135.2),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x213)](),_0x3300ac[_0x1f21be(0x57e)](0.005235,-0.076232,-0.18773,-0.057202,244.46,582.26),_0x3300ac['beginPath'](),_0x3300ac['moveTo'](7327.3,2589.8),_0x3300ac[_0x1f21be(0x2e7)](7298.4,0xa01,7275.6,2540.4,7299.6,2565.1),_0x3300ac[_0x1f21be(0x2e7)](7323.6,2589.8,7324.9,2589.8,7327.3,2589.8),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac[_0x1f21be(0x5cc)](7329.3,2587.8),_0x3300ac[_0x1f21be(0x2e7)](7300.4,0x9ff,7277.6,2538.4,7301.6,2563.1),_0x3300ac[_0x1f21be(0x2e7)](7325.6,2587.8,7326.9,2587.8,7329.3,2587.8),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2d4)](),_0x3300ac['moveTo'](7327.3,2587.8),_0x3300ac[_0x1f21be(0x2e7)](7298.4,0x9ff,7275.6,2538.4,7299.6,2563.1),_0x3300ac[_0x1f21be(0x2e7)](7323.6,2587.8,7324.9,2587.8,7327.3,2587.8),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)](),_0x3300ac[_0x1f21be(0x2cc)](),_0x3300ac['beginPath'](),_0x3300ac[_0x1f21be(0x5cc)](-0xd7,-133.8),_0x3300ac[_0x1f21be(0x242)](-216.7,-129.6),_0x3300ac[_0x1f21be(0x584)](),_0x3300ac[_0x1f21be(0x481)]()),_0x3300ac[_0x1f21be(0x2cc)](),this[_0x1f21be(0x5e9)][_0x1f21be(0x4fa)]();},Bitmap[_0x3c3250(0x206)]['drawLensFlare']=function(_0x17cb74,_0x4a805f,_0x32c6b9){const _0x28dfc5=_0x3c3250,_0x491158=this['context'];_0x491158['save'](),_0x491158[_0x28dfc5(0x556)](_0x17cb74-_0x32c6b9,_0x4a805f-_0x32c6b9);const _0x219b9d=0x168*(Math['PI']/0xb4),_0x1d1e65=ColorManager['WEATHER_PASTEL_COLORS'],_0x10370d=_0x1d1e65[Math[_0x28dfc5(0x3a0)](Math['random']()*_0x1d1e65['length'])];let _0x29b21f=ColorManager['adjustHexColor'](_0x10370d,0.85);_0x29b21f=ColorManager[_0x28dfc5(0x349)](_0x29b21f,Math[_0x28dfc5(0x2cb)]()*0.4+0.2);let _0x314b21=ColorManager['adjustHexColor'](_0x10370d,0.85);_0x314b21=ColorManager[_0x28dfc5(0x349)](_0x314b21,Math[_0x28dfc5(0x2cb)]()*0.2);const _0x15b128=_0x491158['createRadialGradient'](_0x32c6b9,_0x32c6b9,0xa,_0x32c6b9,_0x32c6b9,_0x32c6b9);_0x15b128[_0x28dfc5(0x22e)](0x0,_0x29b21f),_0x15b128[_0x28dfc5(0x22e)](0x1,_0x314b21),_0x491158[_0x28dfc5(0x244)]=_0x15b128,_0x491158[_0x28dfc5(0x2d4)](),_0x491158[_0x28dfc5(0x5cc)](_0x32c6b9,_0x32c6b9),_0x491158['lineTo'](length,_0x32c6b9),_0x491158[_0x28dfc5(0x52f)](_0x32c6b9,_0x32c6b9,_0x32c6b9,0x0,_0x219b9d),_0x491158['lineTo'](_0x32c6b9,_0x32c6b9),_0x491158[_0x28dfc5(0x584)](),_0x491158[_0x28dfc5(0x2cc)](),this[_0x28dfc5(0x5e9)][_0x28dfc5(0x4fa)]();},Bitmap[_0x3c3250(0x206)][_0x3c3250(0x281)]=function(_0x143e37,_0x3d1adc,_0x337979){const _0x44e46a=_0x3c3250,_0x950a2=this[_0x44e46a(0x4cb)];_0x950a2[_0x44e46a(0x213)](),_0x950a2[_0x44e46a(0x556)](_0x143e37-_0x337979,_0x3d1adc-_0x337979);const _0x2373a8=0x168*(Math['PI']/0xb4),_0x486e30=Math[_0x44e46a(0x23a)](0x80),_0x376801='rgba(%1,%1,%1,0)'[_0x44e46a(0x528)](_0x486e30),_0x34961d=_0x44e46a(0x33a)[_0x44e46a(0x528)](_0x486e30),_0x1f4bc5=_0x44e46a(0x40a)[_0x44e46a(0x528)](_0x486e30),_0x32226=_0x44e46a(0x34a)['format'](_0x486e30),_0xba5f9d=_0x44e46a(0x21b)['format'](_0x486e30),_0x46d053=_0x44e46a(0x5c9)[_0x44e46a(0x528)](_0x486e30),_0xbb655c='rgba(255,%1,%1,1)'[_0x44e46a(0x528)](_0x486e30),_0x3cc465='rgba(255,%1,%1,0.5)'[_0x44e46a(0x528)](_0x486e30),_0x442e45=_0x950a2[_0x44e46a(0x34b)](_0x337979,_0x337979,0xa,_0x337979,_0x337979,_0x337979);_0x442e45[_0x44e46a(0x22e)](0x0,_0x376801),_0x442e45[_0x44e46a(0x22e)](0.7,_0x376801),_0x442e45['addColorStop'](0.8,_0x34961d),_0x442e45[_0x44e46a(0x22e)](0.81,_0x1f4bc5),_0x442e45[_0x44e46a(0x22e)](0.82,_0x32226),_0x442e45[_0x44e46a(0x22e)](0.8225,_0xba5f9d),_0x442e45[_0x44e46a(0x22e)](0.8275,_0x46d053),_0x442e45[_0x44e46a(0x22e)](0.85,_0xbb655c),_0x442e45[_0x44e46a(0x22e)](0.9,_0x3cc465),_0x442e45[_0x44e46a(0x22e)](0.95,_0x376801),_0x442e45[_0x44e46a(0x22e)](0x1,_0x376801),_0x950a2[_0x44e46a(0x244)]=_0x442e45,_0x950a2[_0x44e46a(0x2d4)](),_0x950a2[_0x44e46a(0x5cc)](_0x337979,_0x337979),_0x950a2[_0x44e46a(0x242)](length,_0x337979),_0x950a2[_0x44e46a(0x52f)](_0x337979,_0x337979,_0x337979,0x0,_0x2373a8),_0x950a2[_0x44e46a(0x242)](_0x337979,_0x337979),_0x950a2['fill'](),_0x950a2[_0x44e46a(0x2cc)](),this['_baseTexture'][_0x44e46a(0x4fa)]();},Bitmap[_0x3c3250(0x206)][_0x3c3250(0x3da)]=function(_0x374ae4){const _0x244e3f=_0x3c3250,_0x35ec7f=this[_0x244e3f(0x4cb)];_0x374ae4=_0x374ae4||[_0x244e3f(0x428),'#880000'],_0x35ec7f[_0x244e3f(0x213)](),_0x35ec7f[_0x244e3f(0x57e)](0x0,0.11738,-0.11738,0x0,99.6785,-39.5524),_0x35ec7f[_0x244e3f(0x32d)]=_0x244e3f(0x208),_0x35ec7f[_0x244e3f(0x4d8)]=0xa;const _0x5d2a4e=_0x35ec7f[_0x244e3f(0x1ee)](0x0,this[_0x244e3f(0x243)],this[_0x244e3f(0x45e)]*0x2,this['height']*0x14);_0x5d2a4e[_0x244e3f(0x22e)](0x0,_0x374ae4[0x0]),_0x5d2a4e[_0x244e3f(0x22e)](0x1,_0x374ae4[0x1]),_0x35ec7f[_0x244e3f(0x244)]=_0x5d2a4e,(_0x35ec7f['beginPath'](),_0x35ec7f[_0x244e3f(0x5cc)](489.1,324.8),_0x35ec7f['bezierCurveTo'](492.6,324.4,516.9,356.8,515.5,360.1),_0x35ec7f[_0x244e3f(0x2e7)](514.1,363.4,473.9,368.2,471.8,365.3),_0x35ec7f[_0x244e3f(0x2e7)](469.7,362.5,485.6,325.2,489.1,324.8)),_0x35ec7f[_0x244e3f(0x584)](),_0x35ec7f['stroke'](),(_0x35ec7f['beginPath'](),_0x35ec7f[_0x244e3f(0x5cc)](622.6,156.7),_0x35ec7f[_0x244e3f(0x2e7)](622.6,230.8,556.4,341.5,488.3,341.5),_0x35ec7f['bezierCurveTo'](418.2,341.5,0x162,230.8,0x162,156.7),_0x35ec7f['bezierCurveTo'](0x162,82.6,414.2,14.3,488.3,14.3),_0x35ec7f[_0x244e3f(0x2e7)](562.4,14.3,622.6,82.6,622.6,156.7)),_0x35ec7f[_0x244e3f(0x584)](),_0x35ec7f['stroke'](),_0x35ec7f['lineWidth']=0x5,(_0x35ec7f[_0x244e3f(0x2d4)](),_0x35ec7f[_0x244e3f(0x5cc)](0x1de,0x156),_0x35ec7f[_0x244e3f(0x2e7)](486.5,340.3,492.4,338.5,503.5,341.1),_0x35ec7f[_0x244e3f(0x2e7)](482.2,561.7,393.8,609.5,366.7,789.6),_0x35ec7f[_0x244e3f(0x2e7)](366.2,792.9,368.2,806.3,371.3,831.2)),_0x35ec7f[_0x244e3f(0x481)](),_0x35ec7f[_0x244e3f(0x2cc)](),this['paintOpacity']=0x80,this['drawCircle'](this[_0x244e3f(0x45e)]*0x7/0x8,this['height']*0x1/0x4,0x4,_0x244e3f(0x2e3));},Bitmap[_0x3c3250(0x206)][_0x3c3250(0x538)]=function(_0x3ea34f){const _0x37a744=_0x3c3250;_0x3ea34f=_0x3ea34f||_0x37a744(0x428);const _0x12b161=this[_0x37a744(0x45e)]/0x2,_0x2e9940=this['height']/0x2,_0x1fa7af=ColorManager['hexToRgba'](_0x3ea34f,0x0),_0x50866b=ColorManager[_0x37a744(0x349)](_0x3ea34f,0.8),_0x456136=ColorManager[_0x37a744(0x349)](_0x3ea34f,0x1),_0x38a3de=this[_0x37a744(0x45e)]/0x2,_0x32d821=0x4;this[_0x37a744(0x4ad)](0x0,_0x2e9940-_0x32d821,_0x38a3de,_0x32d821*0x2,_0x1fa7af,_0x50866b),this[_0x37a744(0x41b)](_0x12b161,_0x2e9940,_0x32d821,_0x456136),this[_0x37a744(0x41b)](_0x12b161,_0x2e9940,_0x32d821-0x2,_0x37a744(0x2e3));},Bitmap['prototype'][_0x3c3250(0x417)]=function(_0x4bdf8d){const _0xcbb0f1=_0x3c3250,_0x3b20f4=this[_0xcbb0f1(0x378)];_0x4bdf8d=_0x4bdf8d||'#ff0000';const _0x479829=this[_0xcbb0f1(0x45e)]/0x2,_0x2f00d5=this[_0xcbb0f1(0x243)]/0x2,_0xf9ae25=ColorManager[_0xcbb0f1(0x349)](_0x4bdf8d,0x0),_0x19dedd=ColorManager['hexToRgba'](_0x4bdf8d,0.25),_0x1e138f=ColorManager[_0xcbb0f1(0x349)](_0x4bdf8d,0x1),_0x362acd=this[_0xcbb0f1(0x45e)]/0x2,_0x3b5bb4=0x4,_0x3a061c=Math[_0xcbb0f1(0x23a)](0x3)+0xa;_0x3b20f4['translate'](_0x479829,_0x2f00d5);const _0x514e53=Math['randomInt'](0x3)+0x4;for(let _0x142f58=0x0;_0x142f58<_0x514e53;_0x142f58++){const _0x374ccd=_0x362acd*((_0x514e53-_0x142f58)/_0x514e53);let _0x4c49bc=Math['randomInt'](0xa)+0x28;_0x4c49bc/=_0x142f58+0x1;for(let _0xbd7603=0x0;_0xbd7603<_0x4c49bc;_0xbd7603++){let _0x1703d3=Math[_0xcbb0f1(0x23a)](Math[_0xcbb0f1(0x490)](_0x374ccd/_0x3a061c))+_0x374ccd*(_0x3a061c-0x1)/_0x3a061c;const _0x4b94a0=Math[_0xcbb0f1(0x23a)](_0x1703d3/0x2);this['gradientFillRect'](_0x4b94a0,-_0x3b5bb4,_0x1703d3-_0x4b94a0,_0x3b5bb4*0x2,_0xf9ae25,_0x19dedd),this[_0xcbb0f1(0x41b)](_0x1703d3,0x0,_0x3b5bb4,_0x1e138f),this[_0xcbb0f1(0x41b)](_0x1703d3,0x0,_0x3b5bb4-(Math[_0xcbb0f1(0x23a)](0x2)-0x1),'white'),_0x3b20f4['rotate'](Math['PI']*0x2/_0x4c49bc);}}},Bitmap[_0x3c3250(0x206)][_0x3c3250(0x2f3)]=function(_0x16fab0,_0x42b44c,_0x1d1400){const _0x176856=_0x3c3250,_0x38c1ab=this[_0x176856(0x4cb)];_0x38c1ab[_0x176856(0x213)](),_0x38c1ab['translate'](_0x16fab0-_0x1d1400,_0x42b44c-_0x1d1400);const _0x267acc=0x168*(Math['PI']/0xb4),_0x5c9fe3=Math[_0x176856(0x23a)](0x80),_0x56800b=_0x176856(0x2d2)[_0x176856(0x528)](_0x5c9fe3),_0x51a7df=_0x176856(0x33a)[_0x176856(0x528)](_0x5c9fe3),_0x950143='rgba(%1,%1,255,1)'[_0x176856(0x528)](_0x5c9fe3),_0x101b59=_0x176856(0x34a)[_0x176856(0x528)](_0x5c9fe3),_0x5c1f61='rgba(%1,255,%1,1)'[_0x176856(0x528)](_0x5c9fe3),_0x1e81e6=_0x176856(0x5c9)[_0x176856(0x528)](_0x5c9fe3),_0x4949a9='rgba(255,%1,%1,1)'['format'](_0x5c9fe3),_0x1e4ef5='rgba(255,%1,%1,0.5)'[_0x176856(0x528)](_0x5c9fe3),_0x559ade=_0x38c1ab['createRadialGradient'](_0x1d1400,_0x1d1400,0xa,_0x1d1400,_0x1d1400,_0x1d1400);_0x559ade[_0x176856(0x22e)](0x0,_0x56800b),_0x559ade['addColorStop'](0.15,_0x56800b),_0x559ade[_0x176856(0x22e)](0.25,_0x51a7df),_0x559ade[_0x176856(0x22e)](0.3,_0x51a7df),_0x559ade[_0x176856(0x22e)](0.4,_0x950143),_0x559ade[_0x176856(0x22e)](0.45,_0x101b59),_0x559ade[_0x176856(0x22e)](0.5,_0x101b59),_0x559ade['addColorStop'](0.55,_0x5c1f61),_0x559ade[_0x176856(0x22e)](0.6,_0x1e81e6),_0x559ade[_0x176856(0x22e)](0.65,_0x1e81e6),_0x559ade['addColorStop'](0.75,_0x4949a9),_0x559ade['addColorStop'](0.85,_0x1e4ef5),_0x559ade[_0x176856(0x22e)](0.95,_0x56800b),_0x559ade[_0x176856(0x22e)](0x1,_0x56800b),_0x38c1ab[_0x176856(0x244)]=_0x559ade,_0x38c1ab[_0x176856(0x2d4)](),_0x38c1ab[_0x176856(0x5cc)](_0x1d1400,_0x1d1400),_0x38c1ab[_0x176856(0x242)](length,_0x1d1400),_0x38c1ab[_0x176856(0x52f)](_0x1d1400,_0x1d1400,_0x1d1400,0x0,_0x267acc),_0x38c1ab['lineTo'](_0x1d1400,_0x1d1400),_0x38c1ab[_0x176856(0x584)](),_0x38c1ab[_0x176856(0x2cc)](),this['_baseTexture']['update']();},TextManager[_0x3c3250(0x2fd)]=VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x23f)][_0x3c3250(0x5a5)][_0x3c3250(0x3e0)],ColorManager[_0x3c3250(0x45c)]=[_0x3c3250(0x49a),_0x3c3250(0x2a5),_0x3c3250(0x55b),'#444444'],ColorManager[_0x3c3250(0x2c5)]=[_0x3c3250(0x45b),'#a8c54a',_0x3c3250(0x2ec),_0x3c3250(0x476),'#fac159',_0x3c3250(0x2e4),_0x3c3250(0x2da),_0x3c3250(0x2da),_0x3c3250(0x4b9)],ColorManager[_0x3c3250(0x1f9)]=['#a1a1a1',_0x3c3250(0x2f5),_0x3c3250(0x448),_0x3c3250(0x4ac)],ColorManager[_0x3c3250(0x284)]=['#cceaf6',_0x3c3250(0x273),_0x3c3250(0x585),'#a3d2e5'],ColorManager['WEATHER_CLOUD_WHITE_COLORS']=[_0x3c3250(0x513),_0x3c3250(0x46f),'#e1e1e1'],ColorManager['WEATHER_DANDELION1_COLORS']=[_0x3c3250(0x50b),_0x3c3250(0x57b),_0x3c3250(0x2d1),_0x3c3250(0x2e0)],ColorManager[_0x3c3250(0x2ac)]=['#ea916d',_0x3c3250(0x43d),'#d58e6a'],ColorManager[_0x3c3250(0x225)]=[_0x3c3250(0x513),_0x3c3250(0x46f),_0x3c3250(0x4b4),_0x3c3250(0x3c7),'#fff2e4'],ColorManager[_0x3c3250(0x31c)]=['#000000','#000044',_0x3c3250(0x2ef),'#004400'],ColorManager['WEATHER_EARTH_COLORS']=[_0x3c3250(0x312),'#a67c52',_0x3c3250(0x28f),_0x3c3250(0x251),_0x3c3250(0x38b)],ColorManager['WEATHER_FIREFLY_COLORS']=['#fff799',_0x3c3250(0x266),'#fdc689',_0x3c3250(0x31a),_0x3c3250(0x267)],ColorManager[_0x3c3250(0x24e)]=[_0x3c3250(0x4ab),_0x3c3250(0x201),'#f7941d',_0x3c3250(0x31a),_0x3c3250(0x583),'#f26c4f'],ColorManager[_0x3c3250(0x3c8)]=['#b8dfee',_0x3c3250(0x20d),'#79bfdb',_0x3c3250(0x5ef),'#aabaf1',_0x3c3250(0x5ac)],ColorManager['WEATHER_LIGHT_COLORS']=['#ffffff','#ffffbb',_0x3c3250(0x5ae),_0x3c3250(0x38c)],ColorManager[_0x3c3250(0x3e6)]=['#ffddff',_0x3c3250(0x3c3),_0x3c3250(0x339)],ColorManager['WEATHER_MOONLIGHT_COLORS']=['#7accc8','#6dcff6',_0x3c3250(0x28a),_0x3c3250(0x278)],ColorManager[_0x3c3250(0x52d)]=[_0x3c3250(0x2d8),_0x3c3250(0x2d8),_0x3c3250(0x260),_0x3c3250(0x322),_0x3c3250(0x2de),_0x3c3250(0x30b)],ColorManager[_0x3c3250(0x354)]=[_0x3c3250(0x3e5),_0x3c3250(0x45d),_0x3c3250(0x5d4),'#ccffaa',_0x3c3250(0x227),_0x3c3250(0x3d5),_0x3c3250(0x4f0),_0x3c3250(0x3a2),_0x3c3250(0x1f4),_0x3c3250(0x5b3),_0x3c3250(0x5c3),_0x3c3250(0x1fd),'#ffffff'],ColorManager['WEATHER_POLLEN_COLORS']=['#fdc689',_0x3c3250(0x38d),_0x3c3250(0x3ab),'#998675',_0x3c3250(0x31d),_0x3c3250(0x2ad),_0x3c3250(0x266),_0x3c3250(0x266),_0x3c3250(0x266),_0x3c3250(0x59f),_0x3c3250(0x59f),'#fff200'],ColorManager[_0x3c3250(0x24d)]=['#ffffff',_0x3c3250(0x428),'#ffff00',_0x3c3250(0x3e8),_0x3c3250(0x3c5),_0x3c3250(0x4d5),'#ff00ff',_0x3c3250(0x29f),_0x3c3250(0x428),_0x3c3250(0x3e8),_0x3c3250(0x3c5)],ColorManager['WEATHER_NUCLEAR_COLORS']=[_0x3c3250(0x3e8),_0x3c3250(0x32b),'#4dff65','#07ff7f','#13ffee'],ColorManager[_0x3c3250(0x568)]=[_0x3c3250(0x43b),_0x3c3250(0x588),_0x3c3250(0x2b7),_0x3c3250(0x3eb),'#fac4ad'],ColorManager[_0x3c3250(0x2b5)]=['#fddbe2',_0x3c3250(0x2a4),'#fdedd9'],ColorManager[_0x3c3250(0x383)]=[_0x3c3250(0x449),'#b87693',_0x3c3250(0x3e4)],ColorManager[_0x3c3250(0x342)]=['#ffffff',_0x3c3250(0x385),_0x3c3250(0x5d2),'#fcecde'],ColorManager[_0x3c3250(0x2aa)]=[_0x3c3250(0x3ff),_0x3c3250(0x410),_0x3c3250(0x2dc),'#aa00ff'],ColorManager['WEATHER_ARCTIC_BEAM_COLORS']=ColorManager[_0x3c3250(0x3c8)][_0x3c3250(0x506)](),ColorManager[_0x3c3250(0x484)]=ColorManager[_0x3c3250(0x2c5)][_0x3c3250(0x506)](),ColorManager[_0x3c3250(0x33e)]=ColorManager[_0x3c3250(0x354)][_0x3c3250(0x1f1)](ColorManager[_0x3c3250(0x24d)]),ColorManager[_0x3c3250(0x532)]=ColorManager[_0x3c3250(0x354)][_0x3c3250(0x506)](),ColorManager[_0x3c3250(0x4ba)]=ColorManager[_0x3c3250(0x52d)][_0x3c3250(0x506)](),ColorManager['WEATHER_GREEN_LEAVES_COLORS']=ColorManager[_0x3c3250(0x52d)][_0x3c3250(0x506)](),ColorManager[_0x3c3250(0x48a)]=ColorManager['WEATHER_MOONLIGHT_COLORS']['clone'](),ColorManager[_0x3c3250(0x277)]=ColorManager[_0x3c3250(0x354)][_0x3c3250(0x506)](),ColorManager[_0x3c3250(0x3cb)]=ColorManager['WEATHER_PRIMARY_COLORS']['clone'](),ColorManager[_0x3c3250(0x325)]=ColorManager[_0x3c3250(0x354)][_0x3c3250(0x506)](),ColorManager['WEATHER_RAINBOW_ORB_COLORS']=ColorManager[_0x3c3250(0x24d)][_0x3c3250(0x506)](),ColorManager[_0x3c3250(0x4e9)]=ColorManager[_0x3c3250(0x354)][_0x3c3250(0x506)](),ColorManager['WEATHER_RADIOACTIVE_COLORS']=ColorManager[_0x3c3250(0x370)][_0x3c3250(0x506)](),ColorManager['WEATHER_SHADOW_BURST_COLORS']=ColorManager['WEATHER_DARKNESS_COLORS'][_0x3c3250(0x506)](),ColorManager['WEATHER_SOAP_BUBBLE_COLORS']=ColorManager[_0x3c3250(0x354)]['clone'](),ColorManager[_0x3c3250(0x327)]=ColorManager[_0x3c3250(0x342)]['clone'](),ColorManager['WEATHER_UV_BEAM_COLORS']=ColorManager['WEATHER_ULTRAVIOLET_COLORS'][_0x3c3250(0x506)](),ColorManager[_0x3c3250(0x349)]=function(_0x47d74d,_0x398f14){const _0x54cc09=_0x3c3250;let _0x25e424='';if(/^#([A-Fa-f0-9]{3}){1,2}$/['test'](_0x47d74d)){_0x25e424=_0x47d74d[_0x54cc09(0x57c)](0x1)[_0x54cc09(0x33d)]('');_0x25e424[_0x54cc09(0x3de)]===0x3&&(_0x25e424=[_0x25e424[0x0],_0x25e424[0x0],_0x25e424[0x1],_0x25e424[0x1],_0x25e424[0x2],_0x25e424[0x2]]);while(_0x25e424[_0x54cc09(0x3de)]>0x6)_0x25e424[_0x54cc09(0x5d1)]();return _0x25e424='0x'+_0x25e424[_0x54cc09(0x4ea)](''),_0x54cc09(0x496)+[(_0x25e424>>0x10&0xff)[_0x54cc09(0x48f)](0x0,0xff),(_0x25e424>>0x8&0xff)['clamp'](0x0,0xff),(_0x25e424&0xff)[_0x54cc09(0x48f)](0x0,0xff)]['join'](',')+','+_0x398f14[_0x54cc09(0x48f)](0x0,0x1)+')';}else return _0x54cc09(0x461);},ColorManager['hexToArray']=function(_0x127cdc){const _0x5ca58b=_0x3c3250;let _0x1075cc='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x5ca58b(0x4a8)](_0x127cdc)){_0x1075cc=_0x127cdc[_0x5ca58b(0x57c)](0x1)[_0x5ca58b(0x33d)]('');_0x1075cc[_0x5ca58b(0x3de)]===0x3&&(_0x1075cc=[_0x1075cc[0x0],_0x1075cc[0x0],_0x1075cc[0x1],_0x1075cc[0x1],_0x1075cc[0x2],_0x1075cc[0x2]]);while(_0x1075cc[_0x5ca58b(0x3de)]>0x6)_0x1075cc[_0x5ca58b(0x5d1)]();return _0x1075cc='0x'+_0x1075cc[_0x5ca58b(0x4ea)](''),[(_0x1075cc>>0x10&0xff)[_0x5ca58b(0x48f)](0x0,0xff),(_0x1075cc>>0x8&0xff)[_0x5ca58b(0x48f)](0x0,0xff),(_0x1075cc&0xff)[_0x5ca58b(0x48f)](0x0,0xff)];}else return[0x0,0x0,0x0];},ColorManager[_0x3c3250(0x48b)]=function(_0x19c4de){const _0x5e0e27=_0x3c3250;while(_0x19c4de['length']<0x3)_0x19c4de[_0x5e0e27(0x590)](0x0);while(_0x19c4de[_0x5e0e27(0x3de)]>0x3)_0x19c4de['pop']();return'#'+_0x19c4de['map'](_0x52d863=>_0x52d863['clamp'](0x0,0xff)[_0x5e0e27(0x46c)](0x10)['padZero'](0x2))[_0x5e0e27(0x4ea)]('');},ColorManager[_0x3c3250(0x477)]=function(_0x515f51,_0x3c8b88){const _0x5e1f62=_0x3c3250,_0x58bded=this[_0x5e1f62(0x554)](_0x515f51)[_0x5e1f62(0x24b)](_0x322c58=>Math[_0x5e1f62(0x5eb)]((Number(_0x322c58)||0x0)*_0x3c8b88)[_0x5e1f62(0x48f)](0x0,0xff));return this[_0x5e1f62(0x48b)](_0x58bded);},SceneManager['isSceneBattle']=function(){return this['_scene']&&this['_scene']['constructor']===Scene_Battle;},SceneManager[_0x3c3250(0x259)]=function(){const _0x19e4ac=_0x3c3250;return this[_0x19e4ac(0x3b7)]&&this['_scene']instanceof Scene_Map;},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x56f)]=Game_Screen[_0x3c3250(0x206)][_0x3c3250(0x2e1)],Game_Screen[_0x3c3250(0x206)]['clearWeather']=function(){const _0x1bd46e=_0x3c3250;VisuMZ[_0x1bd46e(0x474)][_0x1bd46e(0x56f)][_0x1bd46e(0x53e)](this),this[_0x1bd46e(0x466)]();},Game_Screen[_0x3c3250(0x206)][_0x3c3250(0x451)]=function(){const _0x2f7c11=_0x3c3250;if($gameMap&&$gameMap['isNoWeather']())return _0x2f7c11(0x3b3);return this[_0x2f7c11(0x214)](0x1)['type']||_0x2f7c11(0x3b3);},Game_Screen[_0x3c3250(0x206)][_0x3c3250(0x413)]=function(){const _0x2cfa3c=_0x3c3250;if($gameMap&&$gameMap[_0x2cfa3c(0x222)]())return 0x0;return this['getWeatherLayerData'](0x1)['power']||0x0;},Game_Screen[_0x3c3250(0x206)][_0x3c3250(0x4f9)]=function(_0xe1d4c6,_0x120a8c,_0x54ed95){const _0x340e7a=_0x3c3250,_0x33e459=this[_0x340e7a(0x214)](0x1,![])['power'],_0x10d51d=VisuMZ['WeatherEffects']['newLayer']();if(!_0x10d51d)return;_0x10d51d['type']=_0xe1d4c6,_0x10d51d[_0x340e7a(0x453)]=_0x33e459,_0x10d51d['powerTarget']=_0xe1d4c6===_0x340e7a(0x3b3)?0x0:_0x120a8c[_0x340e7a(0x48f)](0x1,0x9),_0x10d51d[_0x340e7a(0x55c)]=_0x54ed95,_0x54ed95<=0x0&&(_0x10d51d['power']=_0x10d51d[_0x340e7a(0x4a9)]),VisuMZ['WeatherEffects'][_0x340e7a(0x5a9)](_0x10d51d),this[_0x340e7a(0x535)](0x1,![],_0x10d51d);},Game_Screen['prototype'][_0x3c3250(0x480)]=function(){const _0x380692=_0x3c3250;if(this['_weatherLayers']===undefined)this['clearWeatherLayers']();for(let _0xd2ea55=0x1;_0xd2ea55<=Weather[_0x380692(0x4d2)];_0xd2ea55++){this['updateWeatherLayer'](_0xd2ea55,!![]),this[_0x380692(0x270)](_0xd2ea55,![]);}},Game_Screen[_0x3c3250(0x206)][_0x3c3250(0x466)]=function(){const _0x3d0b68=_0x3c3250;this[_0x3d0b68(0x39e)]={'lower':[],'upper':[]};while(this[_0x3d0b68(0x39e)][_0x3d0b68(0x376)][_0x3d0b68(0x3de)]<Weather[_0x3d0b68(0x4d2)]){this['_weatherLayers']['lower']['push'](VisuMZ[_0x3d0b68(0x474)][_0x3d0b68(0x4b8)]());}while(this[_0x3d0b68(0x39e)][_0x3d0b68(0x4b1)][_0x3d0b68(0x3de)]<Weather[_0x3d0b68(0x4d2)]){this['_weatherLayers'][_0x3d0b68(0x4b1)][_0x3d0b68(0x590)](VisuMZ[_0x3d0b68(0x474)]['newLayer']());}},Game_Screen['prototype'][_0x3c3250(0x486)]=function(_0x424d7e,_0x456e8d,_0x232ceb){const _0x22efed=_0x3c3250;if(this[_0x22efed(0x39e)]===undefined)this[_0x22efed(0x466)]();const _0x58003c=this['getWeatherLayerData'](_0x424d7e,_0x456e8d),_0x49bc44=_0x424d7e[_0x22efed(0x48f)](0x1,Weather['MAX_LAYERS'])-0x1,_0x39b408=_0x456e8d?_0x22efed(0x376):'upper';_0x232ceb=_0x232ceb||0x0;const _0x8857ab=_0x58003c[_0x22efed(0x453)],_0x30d7c6=VisuMZ[_0x22efed(0x474)][_0x22efed(0x4b8)]();_0x30d7c6[_0x22efed(0x453)]=_0x8857ab,_0x30d7c6[_0x22efed(0x55c)]=_0x232ceb,this[_0x22efed(0x39e)][_0x39b408][_0x49bc44]=_0x30d7c6;},Game_Screen[_0x3c3250(0x206)]['adjustWeatherLayerPower']=function(_0x123e2f,_0x20aa96,_0x1d7b74,_0x3e01e7){const _0x4b2742=_0x3c3250,_0x3943a2=this[_0x4b2742(0x214)](_0x123e2f,_0x20aa96);_0x3943a2[_0x4b2742(0x55c)]=_0x3e01e7||0x1,_0x3943a2['powerTarget']=(_0x3943a2['powerTarget']+_0x1d7b74)[_0x4b2742(0x48f)](0x1,0x9);},Game_Screen['prototype'][_0x3c3250(0x5ba)]=function(_0x4b103c,_0x5b7490){const _0x43f2b2=_0x3c3250,_0x25d82d=this['getWeatherLayerData'](_0x4b103c,_0x5b7490),_0x5be688=_0x5b7490?'lower':_0x43f2b2(0x4b1);this[_0x43f2b2(0x5cf)]=this[_0x43f2b2(0x5cf)]||{'lower':[],'upper':[]},this[_0x43f2b2(0x5cf)][_0x5be688][_0x4b103c]=JSON['parse'](JSON[_0x43f2b2(0x36c)](_0x25d82d));},Game_Screen[_0x3c3250(0x206)]['replayMemorizedWeatherLayerData']=function(_0x1f3d52,_0x4595ec,_0x44e700){const _0x1625b2=_0x3c3250,_0x551d1d=_0x4595ec?_0x1625b2(0x376):_0x1625b2(0x4b1);this[_0x1625b2(0x5cf)]=this[_0x1625b2(0x5cf)]||{'lower':[],'upper':[]};const _0x2b4fb1=this['_memorizedWeatherData'][_0x551d1d][_0x1f3d52]||VisuMZ[_0x1625b2(0x474)][_0x1625b2(0x4b8)]();_0x2b4fb1[_0x1625b2(0x55c)]=_0x44e700,_0x2b4fb1[_0x1625b2(0x4a9)]=_0x2b4fb1[_0x1625b2(0x453)],_0x2b4fb1['power']=this[_0x1625b2(0x214)](_0x1f3d52,_0x4595ec)[_0x1625b2(0x453)],this['setWeatherLayerData'](_0x1f3d52,_0x4595ec,_0x2b4fb1);},Game_Screen['prototype'][_0x3c3250(0x214)]=function(_0x18fa9a,_0x2a8e01){const _0x552e8c=_0x3c3250;if(this[_0x552e8c(0x39e)]===undefined)this['clearWeatherLayers']();const _0x44aaed=_0x18fa9a[_0x552e8c(0x48f)](0x1,Weather[_0x552e8c(0x4d2)])-0x1,_0x108e7b=_0x2a8e01?_0x552e8c(0x376):_0x552e8c(0x4b1);return!this[_0x552e8c(0x39e)][_0x108e7b][_0x44aaed]&&(this[_0x552e8c(0x39e)][_0x108e7b][_0x44aaed]=VisuMZ['WeatherEffects'][_0x552e8c(0x4b8)]()),this[_0x552e8c(0x39e)][_0x108e7b][_0x44aaed];},Game_Screen[_0x3c3250(0x206)][_0x3c3250(0x535)]=function(_0x3ec082,_0x2a4a0f,_0x2d2232){const _0x41d12d=_0x3c3250;if(this['_weatherLayers']===undefined)this[_0x41d12d(0x466)]();const _0x38d782=_0x3ec082[_0x41d12d(0x48f)](0x1,Weather[_0x41d12d(0x4d2)])-0x1,_0x5799da=_0x2a4a0f?_0x41d12d(0x376):_0x41d12d(0x4b1);this[_0x41d12d(0x39e)][_0x5799da][_0x38d782]=JSON[_0x41d12d(0x4b2)](JSON[_0x41d12d(0x36c)](_0x2d2232));},Game_Screen['prototype'][_0x3c3250(0x315)]=function(_0x21b2cc,_0x5edd1a,_0x18022c){const _0x5a430e=_0x3c3250;if(this[_0x5a430e(0x39e)]===undefined)this[_0x5a430e(0x466)]();const _0x12f12d=this[_0x5a430e(0x214)](_0x21b2cc,_0x5edd1a),_0x251ba0=_0x21b2cc[_0x5a430e(0x48f)](0x1,Weather[_0x5a430e(0x4d2)])-0x1,_0x2c5cac=_0x5edd1a?_0x5a430e(0x376):_0x5a430e(0x4b1);_0x18022c['power']=_0x12f12d[_0x5a430e(0x453)],this[_0x5a430e(0x39e)][_0x2c5cac][_0x251ba0]=_0x18022c;},Game_Screen[_0x3c3250(0x206)][_0x3c3250(0x270)]=function(_0x5c06b5,_0x4696ed){const _0x1cc167=_0x3c3250,_0xdd0448=this[_0x1cc167(0x214)](_0x5c06b5,_0x4696ed);if(!_0xdd0448)return;_0xdd0448[_0x1cc167(0x55c)]>0x0&&(this['updateWeatherLayerPower'](_0xdd0448),this[_0x1cc167(0x5d3)](_0xdd0448));},Game_Screen[_0x3c3250(0x206)][_0x3c3250(0x56c)]=function(_0x1f6f8f){const _0x1d5727=_0x3c3250,_0x258c49=_0x1f6f8f[_0x1d5727(0x55c)],_0x5f09b1=_0x1f6f8f[_0x1d5727(0x4a9)];_0x1f6f8f[_0x1d5727(0x453)]=(_0x1f6f8f[_0x1d5727(0x453)]*(_0x258c49-0x1)+_0x5f09b1)/_0x258c49;},Game_Screen[_0x3c3250(0x206)]['updateWeatherLayerDuration']=function(_0x3aa90f){const _0x124ba1=_0x3c3250;_0x3aa90f['duration']--,_0x3aa90f[_0x124ba1(0x55c)]===0x0&&_0x3aa90f['powerTarget']===0x0&&(_0x3aa90f[_0x124ba1(0x1fb)]=_0x124ba1(0x3b3));},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x5e4)]=Game_Map[_0x3c3250(0x206)][_0x3c3250(0x5a4)],Game_Map['prototype'][_0x3c3250(0x5a4)]=function(_0x46537f){const _0x4eadab=_0x3c3250;VisuMZ[_0x4eadab(0x474)][_0x4eadab(0x5e4)]['call'](this,_0x46537f),this[_0x4eadab(0x295)]();},Game_Map[_0x3c3250(0x206)][_0x3c3250(0x295)]=function(){const _0xd789ac=_0x3c3250;if(!$dataMap)return;if(!SceneManager[_0xd789ac(0x558)]())return;this[_0xd789ac(0x2c4)]=![];const _0x325bfe=VisuMZ[_0xd789ac(0x474)]['RegExp'],_0x5f1932=$dataMap[_0xd789ac(0x26f)]||'';_0x5f1932[_0xd789ac(0x555)](_0x325bfe[_0xd789ac(0x2a2)])&&(this[_0xd789ac(0x2c4)]=!![]);},Game_Map[_0x3c3250(0x206)][_0x3c3250(0x222)]=function(){const _0x173ac8=_0x3c3250;if(this[_0x173ac8(0x2c4)]===undefined)this[_0x173ac8(0x295)]();return this['_noWeather'];},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x391)]=Scene_Options[_0x3c3250(0x206)][_0x3c3250(0x414)],Scene_Options[_0x3c3250(0x206)][_0x3c3250(0x414)]=function(){const _0x42dcf6=_0x3c3250;let _0x24a90d=VisuMZ[_0x42dcf6(0x474)][_0x42dcf6(0x391)]['call'](this);const _0x2115df=VisuMZ[_0x42dcf6(0x474)][_0x42dcf6(0x23f)][_0x42dcf6(0x5a5)];if(_0x2115df[_0x42dcf6(0x4cc)]&&_0x2115df[_0x42dcf6(0x46b)])_0x24a90d++;return _0x24a90d;};function Sprite_WeatherParticle(){const _0x5fd06c=_0x3c3250;this[_0x5fd06c(0x32f)](...arguments);}Sprite_WeatherParticle[_0x3c3250(0x206)]=Object[_0x3c3250(0x595)](Sprite[_0x3c3250(0x206)]),Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x3b0)]=Sprite_WeatherParticle,Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x32f)]=function(_0x2154cb,_0x5ee54f){const _0x2644bf=_0x3c3250;this[_0x2644bf(0x274)]=_0x2154cb,this['_debugID']=_0x5ee54f,Sprite[_0x2644bf(0x206)][_0x2644bf(0x32f)]['call'](this,this[_0x2644bf(0x274)][_0x2644bf(0x28c)]),this[_0x2644bf(0x302)](),this[_0x2644bf(0x5fb)]();},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x302)]=function(){const _0x1f382a=_0x3c3250;this[_0x1f382a(0x341)]=0x0,this['anchor']['x']=0.5,this['anchor']['y']=0.5,this[_0x1f382a(0x263)]=0x0;},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x246)]=function(){const _0x4cda76=_0x3c3250;return this['_weatherParent'][_0x4cda76(0x246)]();},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x233)]=function(){const _0x45c822=_0x3c3250;if(!this[_0x45c822(0x3c2)])return-0x1;return this['parent'][_0x45c822(0x53a)]['indexOf'](this);},Sprite_WeatherParticle['prototype'][_0x3c3250(0x5fb)]=function(){const _0x41a9df=_0x3c3250;this[_0x41a9df(0x29e)](),this[_0x41a9df(0x40b)](),this[_0x41a9df(0x573)]();},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x29e)]=function(){const _0x37b9f4=_0x3c3250;this[_0x37b9f4(0x1fb)]=this['data']()[_0x37b9f4(0x1fb)];if(this[_0x37b9f4(0x1fb)]===_0x37b9f4(0x3b3))return;this[_0x37b9f4(0x228)](),this[_0x37b9f4(0x459)](),this['rebornSpriteScale'](),this[_0x37b9f4(0x330)](),this[_0x37b9f4(0x55a)](),this[_0x37b9f4(0x395)]();},Sprite_WeatherParticle['prototype'][_0x3c3250(0x228)]=function(){const _0x147d79=_0x3c3250;this['_lifespan']=this[_0x147d79(0x246)]()[_0x147d79(0x252)][_0x147d79(0x375)];const _0x236b24=this[_0x147d79(0x246)]()['sprite']['lifespanVariance'],_0x556b00=VisuMZ[_0x147d79(0x474)][_0x147d79(0x531)](_0x236b24);this['_lifespan']=Math[_0x147d79(0x55f)](0x1,Math[_0x147d79(0x5eb)](this[_0x147d79(0x47a)]+_0x556b00)),this['_wholeLifespan']=this[_0x147d79(0x47a)],this[_0x147d79(0x21f)]!==this[_0x147d79(0x1fb)]&&(this[_0x147d79(0x21f)]=this[_0x147d79(0x1fb)],this['_lifespan']=Math['randomInt'](this['_lifespan'])+0x1);},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x459)]=function(){const _0x21682c=_0x3c3250;this['_flags']=JSON[_0x21682c(0x4b2)](JSON[_0x21682c(0x36c)](this[_0x21682c(0x246)]()[_0x21682c(0x1f0)])),this[_0x21682c(0x2a1)]=Math[_0x21682c(0x23a)](0xf4240),this['_flatFlutterRngX']=Math[_0x21682c(0x23a)](0xf4240),this['_flatFlutterRngY']=Math[_0x21682c(0x23a)](0xf4240),this['_flatFlutterSpeedX']=Math[_0x21682c(0x2cb)]()*0.05+0.005,this[_0x21682c(0x356)]=Math[_0x21682c(0x2cb)]()*0.05+0.005,this['_flatFlutterDirX']=Math[_0x21682c(0x2cb)]()<0.5;},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x2e9)]=function(){const _0x2f91c5=_0x3c3250;this['_baseScale']=this[_0x2f91c5(0x246)]()[_0x2f91c5(0x252)]['scale']??0x1;const _0x391b01=this[_0x2f91c5(0x246)]()[_0x2f91c5(0x252)][_0x2f91c5(0x234)]??0x0;this[_0x2f91c5(0x457)]+=VisuMZ['WeatherEffects'][_0x2f91c5(0x586)](_0x391b01),this[_0x2f91c5(0x5df)]=this[_0x2f91c5(0x246)]()[_0x2f91c5(0x252)][_0x2f91c5(0x3cd)]??0x1,this[_0x2f91c5(0x3ea)]=this[_0x2f91c5(0x246)]()[_0x2f91c5(0x252)][_0x2f91c5(0x5e6)]??0x1,this[_0x2f91c5(0x5c8)]=this[_0x2f91c5(0x246)]()[_0x2f91c5(0x1f0)][_0x2f91c5(0x29c)]??0x1,this[_0x2f91c5(0x303)]['x']=this[_0x2f91c5(0x457)]*this[_0x2f91c5(0x5df)]*this['_scaleInOutRatio'],this[_0x2f91c5(0x303)]['y']=this[_0x2f91c5(0x457)]*this[_0x2f91c5(0x3ea)]*this[_0x2f91c5(0x5c8)];},Sprite_WeatherParticle[_0x3c3250(0x206)]['rebornSpawnLocation']=function(){const _0x297778=_0x3c3250,_0x3604c1=0xc8;let _0x54e095=this['data']()[_0x297778(0x252)][_0x297778(0x505)]||'random';_0x54e095=_0x54e095[_0x297778(0x2cd)](/sides/i,Math[_0x297778(0x2cb)]()<0.5?_0x297778(0x393):_0x297778(0x47f));let _0x3ce32f=0x0;switch(_0x54e095[_0x297778(0x352)]()[_0x297778(0x536)]()){case _0x297778(0x2cb):this['ax']=Math[_0x297778(0x23a)](Graphics[_0x297778(0x45e)]+_0x3604c1*0x2)-_0x3604c1;if(Weather[_0x297778(0x5b9)]){const _0x3a7717=Math['randomInt'](0x3)-0x1;this['ax']+=Graphics[_0x297778(0x45e)]*_0x3a7717;}break;case'left\x20border':this['ax']=0x0;break;case _0x297778(0x326):case'left\x2020%':case _0x297778(0x42c):case _0x297778(0x4ef):case _0x297778(0x394):case _0x297778(0x47b):case'left\x2070%':case _0x297778(0x377):case _0x297778(0x3f4):if(_0x54e095[_0x297778(0x555)](/(\d+)([%％])/i)){const _0x13e7b1=Number(RegExp['$1'])*0.01;_0x3ce32f+=Math['floor'](Graphics[_0x297778(0x45e)]*_0x13e7b1);}this['ax']=0x0+Math[_0x297778(0x23a)](_0x3ce32f)-Math[_0x297778(0x23a)](_0x3604c1);break;case _0x297778(0x310):this['ax']=Graphics[_0x297778(0x45e)];break;case'right\x2010%':case _0x297778(0x50f):case _0x297778(0x30e):case _0x297778(0x226):case _0x297778(0x240):case _0x297778(0x262):case _0x297778(0x28b):case _0x297778(0x3d4):case _0x297778(0x55d):if(_0x54e095[_0x297778(0x555)](/(\d+)([%％])/i)){const _0x1783d5=Number(RegExp['$1'])*0.01;_0x3ce32f+=Math[_0x297778(0x3a0)](Graphics['width']*_0x1783d5);}this['ax']=Graphics[_0x297778(0x45e)]-Math[_0x297778(0x23a)](_0x3ce32f)+Math[_0x297778(0x23a)](_0x3604c1);break;case'center\x2010%':case _0x297778(0x268):case _0x297778(0x387):case'center\x2030%':case _0x297778(0x360):case _0x297778(0x335):case'center\x2060%':case _0x297778(0x30c):case _0x297778(0x247):case _0x297778(0x3ee):if(_0x54e095[_0x297778(0x555)](/(\d+)([%％])/i)){const _0x567343=Number(RegExp['$1'])*0.01;_0x3ce32f+=Math[_0x297778(0x3a0)](Graphics[_0x297778(0x45e)]*_0x567343);}this['ax']=Graphics[_0x297778(0x45e)]/0x2+Math[_0x297778(0x23a)](_0x3ce32f)+Math['randomInt'](_0x3ce32f)-_0x3ce32f;break;default:this['ax']=Graphics[_0x297778(0x45e)]/0x2;break;}let _0x23622e=this[_0x297778(0x246)]()[_0x297778(0x252)][_0x297778(0x4e5)]||_0x297778(0x2cb);_0x23622e=_0x23622e[_0x297778(0x2cd)](/either/i,Math[_0x297778(0x2cb)]()<0.5?_0x297778(0x4b1):_0x297778(0x376));let _0x113dfc=0x0;switch(_0x23622e[_0x297778(0x352)]()[_0x297778(0x536)]()){case _0x297778(0x2cb):this['ay']=Math[_0x297778(0x23a)](Graphics['height']+_0x3604c1*0x2)-_0x3604c1;if(Weather['EXPAND_RNG_SPAWN']){const _0x5ec867=Math[_0x297778(0x23a)](0x3)-0x1;this['ay']+=Graphics[_0x297778(0x243)]*_0x5ec867;}break;case _0x297778(0x4ee):this['ay']=0x0;break;case'upper\x2010%':case _0x297778(0x367):case _0x297778(0x4f1):case _0x297778(0x44d):case _0x297778(0x3a4):case _0x297778(0x2fb):case _0x297778(0x4b3):case _0x297778(0x491):case _0x297778(0x401):if(_0x23622e['match'](/(\d+)([%％])/i)){const _0x27d9ac=Number(RegExp['$1'])*0.01;_0x113dfc+=Math[_0x297778(0x3a0)](Graphics[_0x297778(0x243)]*_0x27d9ac);}this['ay']=0x0+Math[_0x297778(0x23a)](_0x113dfc)-Math[_0x297778(0x23a)](_0x3604c1);break;case _0x297778(0x57d):this['ay']=Graphics[_0x297778(0x243)];break;case _0x297778(0x4fb):case _0x297778(0x26a):case _0x297778(0x49e):case _0x297778(0x3b9):case _0x297778(0x420):case _0x297778(0x362):case _0x297778(0x42f):case _0x297778(0x2a6):case _0x297778(0x35b):if(_0x23622e[_0x297778(0x555)](/(\d+)([%％])/i)){const _0x38c0c9=Number(RegExp['$1'])*0.01;_0x113dfc+=Math['floor'](Graphics[_0x297778(0x243)]*_0x38c0c9);}this['ay']=Graphics[_0x297778(0x243)]-Math[_0x297778(0x23a)](_0x113dfc)+Math[_0x297778(0x23a)](_0x3604c1);break;case _0x297778(0x348):case _0x297778(0x348):case'middle\x2020%':case _0x297778(0x37f):case _0x297778(0x5a8):case _0x297778(0x59b):case'middle\x2060%':case'middle\x2070%':case _0x297778(0x397):case _0x297778(0x572):if(_0x23622e[_0x297778(0x555)](/(\d+)([%％])/i)){const _0x167554=Number(RegExp['$1'])*0.01;_0x113dfc+=Math[_0x297778(0x3a0)](Graphics[_0x297778(0x243)]*_0x167554);}this['ay']=Graphics[_0x297778(0x243)]/0x2+Math[_0x297778(0x23a)](_0x113dfc)+Math[_0x297778(0x23a)](_0x113dfc)-_0x113dfc;break;default:this['ay']=Graphics['height']/0x2;break;}this['ax']+=this[_0x297778(0x246)]()['sprite'][_0x297778(0x2fa)]||0x0,this['ay']+=this[_0x297778(0x246)]()[_0x297778(0x252)]['spawnOffsetY']||0x0,this['_originBound']=this[_0x297778(0x246)]()[_0x297778(0x252)][_0x297778(0x23b)],this['_originBound']&&(this['ax']+=this['_weatherParent']['origin']['x'],this['ay']+=this[_0x297778(0x274)][_0x297778(0x3e7)]['y']);},Sprite_WeatherParticle['prototype'][_0x3c3250(0x55a)]=function(){const _0x535afc=_0x3c3250;this[_0x535afc(0x341)]=this[_0x535afc(0x246)]()[_0x535afc(0x252)][_0x535afc(0x341)];const _0x40445d=this[_0x535afc(0x246)]()[_0x535afc(0x252)][_0x535afc(0x5db)],_0xe25452=VisuMZ['WeatherEffects'][_0x535afc(0x531)](_0x40445d);this[_0x535afc(0x341)]=(this[_0x535afc(0x341)]+_0xe25452)[_0x535afc(0x48f)](0x0,0xff),this[_0x535afc(0x5e5)]=this[_0x535afc(0x341)],this[_0x535afc(0x5da)]=this[_0x535afc(0x246)]()[_0x535afc(0x252)]['opacityEasingType']||_0x535afc(0x39b),this[_0x535afc(0x53f)]=this[_0x535afc(0x246)]()[_0x535afc(0x252)][_0x535afc(0x504)]||0x0,this[_0x535afc(0x392)]=this[_0x535afc(0x246)]()['sprite'][_0x535afc(0x504)]||0x0;},Sprite_WeatherParticle[_0x3c3250(0x206)]['rebornInitialTrajectoryData']=function(){const _0x768196=_0x3c3250;this[_0x768196(0x276)]=this[_0x768196(0x246)]()[_0x768196(0x26b)][_0x768196(0x1fb)]||_0x768196(0x323),this[_0x768196(0x309)]=this[_0x768196(0x246)]()['trajectory']['lockedID']||0x0,this[_0x768196(0x59a)]=this['data']()['trajectory']['lockedOffsetX']||0x0,this[_0x768196(0x5c7)]=this['data']()['trajectory']['lockedOffsetY']||0x0,this[_0x768196(0x3db)]=this['data']()[_0x768196(0x26b)][_0x768196(0x388)],this[_0x768196(0x3db)]+=VisuMZ[_0x768196(0x474)][_0x768196(0x586)](this['data']()[_0x768196(0x26b)][_0x768196(0x418)]);if(this[_0x768196(0x246)]()[_0x768196(0x26b)][_0x768196(0x418)]!==0x0){if(this[_0x768196(0x3db)]===0x0)this[_0x768196(0x3db)]=Math[_0x768196(0x2cb)]();}this[_0x768196(0x543)]=this[_0x768196(0x246)]()[_0x768196(0x26b)][_0x768196(0x4f5)];const _0x52dd8d=this[_0x768196(0x246)]()[_0x768196(0x26b)][_0x768196(0x386)],_0x274471=VisuMZ[_0x768196(0x474)][_0x768196(0x531)](_0x52dd8d);this['_baseAngle']=Math['ceil'](this[_0x768196(0x543)]+_0x274471),this[_0x768196(0x24f)]=this[_0x768196(0x246)]()[_0x768196(0x26b)][_0x768196(0x313)],this[_0x768196(0x546)]=this[_0x768196(0x246)]()[_0x768196(0x26b)][_0x768196(0x3f2)]??!![],this['_angleArc']=this[_0x768196(0x246)]()[_0x768196(0x26b)][_0x768196(0x464)]??0x0,this[_0x768196(0x2a9)]=0x0,this[_0x768196(0x308)]=Math[_0x768196(0x23a)](0xf4240),this[_0x768196(0x298)]=this[_0x768196(0x246)]()['trajectory'][_0x768196(0x495)],this['_angleSwaySpeed']=this['data']()['trajectory'][_0x768196(0x5d9)],this[_0x768196(0x439)]=0x0,this[_0x768196(0x347)]=this[_0x768196(0x246)]()['trajectory'][_0x768196(0x2e5)]||0x0;this[_0x768196(0x347)]!==0x0&&(this[_0x768196(0x439)]=Math[_0x768196(0x23a)](0x168));this[_0x768196(0x347)]+=VisuMZ[_0x768196(0x474)]['MakeVariance'](this['data']()[_0x768196(0x26b)][_0x768196(0x2e2)]||0x0);if(this[_0x768196(0x246)]()[_0x768196(0x26b)][_0x768196(0x58b)]){if(Math[_0x768196(0x2cb)]()<0.5)this['_spinSpeed']*=-0x1;}this[_0x768196(0x43a)]=Math['randomInt'](0xf4240),this[_0x768196(0x2ee)]=Math[_0x768196(0x23a)](0xf4240),this[_0x768196(0x5bf)]=this[_0x768196(0x246)]()[_0x768196(0x26b)][_0x768196(0x3fe)],this[_0x768196(0x331)]=this['data']()[_0x768196(0x26b)]['xSwaySpeed'],this[_0x768196(0x336)]=this[_0x768196(0x246)]()['trajectory'][_0x768196(0x569)],this[_0x768196(0x353)]=this[_0x768196(0x246)]()['trajectory'][_0x768196(0x3bf)];},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x40b)]=function(){const _0x294837=_0x3c3250;this['rebornBitmap'](),this[_0x294837(0x56a)](),this[_0x294837(0x5af)](),this['rebornSpriteTone'](),this[_0x294837(0x5a2)]();},Sprite_WeatherParticle['prototype'][_0x3c3250(0x502)]=function(){const _0x17c20b=_0x3c3250,_0x1beab1=this[_0x17c20b(0x518)]();this['loadBitmapType'](_0x1beab1);},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x518)]=function(){const _0x1915d7=_0x3c3250,_0x3019d8=this['data']();let _0x13fe59=[],_0x5cd099=0x0;_0x3019d8['image'][_0x1915d7(0x29b)]&&(_0x13fe59[_0x1915d7(0x590)](_0x1915d7(0x29b)),_0x5cd099+=_0x3019d8[_0x1915d7(0x37e)][_0x1915d7(0x416)]||0x1);_0x3019d8[_0x1915d7(0x37e)][_0x1915d7(0x4d6)]['length']>0x0&&(_0x13fe59[_0x1915d7(0x590)](_0x1915d7(0x4d6)),_0x5cd099+=_0x3019d8['image'][_0x1915d7(0x25c)]||0x1);_0x3019d8[_0x1915d7(0x37e)][_0x1915d7(0x30f)]['length']>0x0&&(_0x13fe59[_0x1915d7(0x590)]('pictures'),_0x5cd099+=_0x3019d8['image'][_0x1915d7(0x373)]||0x1);let _0x19c521=Math[_0x1915d7(0x2cb)]()*_0x5cd099;for(const _0x137241 of _0x13fe59){_0x19c521-=_0x3019d8[_0x1915d7(0x37e)][_0x1915d7(0x4e1)[_0x1915d7(0x528)](_0x137241)]||0x0;if(_0x19c521<=0x0)return _0x137241;}return _0x1915d7(0x29b);},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x4b5)]=function(_0x265390){const _0xcb75b8=_0x3c3250;this['_notLoadedReady']=!![];if(_0x265390==='generated')this['loadGeneratedBitmap']();else{if(_0x265390===_0xcb75b8(0x4d6))this[_0xcb75b8(0x287)]();else _0x265390===_0xcb75b8(0x30f)&&this[_0xcb75b8(0x332)]();}},Sprite_WeatherParticle['prototype'][_0x3c3250(0x29a)]=function(){const _0x3445c2=_0x3c3250,_0x383f96=this['data']()[_0x3445c2(0x1fb)][_0x3445c2(0x352)]()[_0x3445c2(0x536)]();this['bitmap']=ImageManager[_0x3445c2(0x51f)](_0x383f96),this[_0x3445c2(0x3ef)][_0x3445c2(0x1ef)](this[_0x3445c2(0x5c2)][_0x3445c2(0x389)](this));},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x5c2)]=function(){const _0x537627=_0x3c3250;this[_0x537627(0x3b4)]=![];const _0x1d95ba=this[_0x537627(0x3ef)][_0x537627(0x45e)],_0x38ee53=this[_0x537627(0x3ef)][_0x537627(0x243)];this[_0x537627(0x4e2)](0x0,0x0,_0x1d95ba,_0x38ee53);},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x287)]=function(){const _0x4971e8=_0x3c3250;this[_0x4971e8(0x3ef)]=ImageManager[_0x4971e8(0x4ce)](),this['bitmap'][_0x4971e8(0x1ef)](this[_0x4971e8(0x2b2)][_0x4971e8(0x389)](this));},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x2b2)]=function(){const _0x11d7c2=_0x3c3250;this[_0x11d7c2(0x3b4)]=![];const _0x54775e=this['data']()[_0x11d7c2(0x37e)][_0x11d7c2(0x4d6)],_0xa9ff6=_0x54775e[Math[_0x11d7c2(0x3a0)](Math[_0x11d7c2(0x2cb)]()*_0x54775e['length'])],_0x4f476d=ImageManager['iconWidth'],_0x88a4c4=ImageManager['iconHeight'],_0x4aa7b2=_0xa9ff6%0x10*_0x4f476d,_0x6e7a0c=Math['floor'](_0xa9ff6/0x10)*_0x88a4c4;this[_0x11d7c2(0x4e2)](_0x4aa7b2,_0x6e7a0c,_0x4f476d,_0x88a4c4);},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x332)]=function(){const _0x4a8cdd=_0x3c3250,_0x287b77=this[_0x4a8cdd(0x246)]()[_0x4a8cdd(0x37e)][_0x4a8cdd(0x30f)],_0x27db34=_0x287b77[Math[_0x4a8cdd(0x3a0)](Math[_0x4a8cdd(0x2cb)]()*_0x287b77[_0x4a8cdd(0x3de)])];this[_0x4a8cdd(0x3ef)]=ImageManager[_0x4a8cdd(0x363)](_0x27db34),this['bitmap'][_0x4a8cdd(0x1ef)](this[_0x4a8cdd(0x5c2)][_0x4a8cdd(0x389)](this));},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x56a)]=function(){const _0x414d50=_0x3c3250,_0x14f98d=this['data']()[_0x414d50(0x37e)]['blendMode'];this[_0x414d50(0x34e)]=_0x14f98d;},Sprite_WeatherParticle['prototype'][_0x3c3250(0x5af)]=function(){const _0x17a14d=_0x3c3250,_0x4b53e9=this[_0x17a14d(0x246)]()[_0x17a14d(0x37e)][_0x17a14d(0x408)]||[];if(_0x4b53e9[_0x17a14d(0x3de)]<=0x0)_0x4b53e9['push'](0x0);this[_0x17a14d(0x3a8)]=_0x4b53e9[Math[_0x17a14d(0x3a0)](Math['random']()*_0x4b53e9[_0x17a14d(0x3de)])],this[_0x17a14d(0x39d)](this[_0x17a14d(0x3a8)]);},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x445)]=function(){const _0x3bec6c=_0x3c3250,_0x15d4fc=this[_0x3bec6c(0x246)]()[_0x3bec6c(0x37e)][_0x3bec6c(0x4d9)]||[];if(_0x15d4fc[_0x3bec6c(0x3de)]<=0x0)_0x15d4fc[_0x3bec6c(0x590)]([0x0,0x0,0x0,0x0]);this['_baseTone']=_0x15d4fc[Math[_0x3bec6c(0x3a0)](Math['random']()*_0x15d4fc[_0x3bec6c(0x3de)])][_0x3bec6c(0x506)](),this[_0x3bec6c(0x2ff)](this['_baseTone']);},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x5a2)]=function(){const _0xf125fc=_0x3c3250;if(!this[_0xf125fc(0x300)])return;if(!this[_0xf125fc(0x218)])return;if(this[_0xf125fc(0x4c2)]!==0x0)return;if(!this[_0xf125fc(0x3b2)][_0xf125fc(0x4f2)]([0x0,0x0,0x0,0x0]))return;this[_0xf125fc(0x300)]['remove'](this[_0xf125fc(0x218)]),delete this['_colorFilter'];},Sprite_WeatherParticle[_0x3c3250(0x206)]['rebornActions']=function(){const _0x34a957=_0x3c3250;this[_0x34a957(0x399)]();},Sprite_WeatherParticle['prototype'][_0x3c3250(0x399)]=function(){const _0x63590b=_0x3c3250;if(!this[_0x63590b(0x4f4)])return;if(!this[_0x63590b(0x4f4)][_0x63590b(0x563)])return;const _0x5a4b57=this[_0x63590b(0x4f4)][_0x63590b(0x563)]||0x0;SceneManager[_0x63590b(0x3b7)][_0x63590b(0x3ce)](_0x5a4b57);},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x4fa)]=function(){const _0x46bb0f=_0x3c3250;Sprite[_0x46bb0f(0x206)]['update']['call'](this);if(this[_0x46bb0f(0x1fb)]===_0x46bb0f(0x3b3))return;if(this[_0x46bb0f(0x3b4)])return;if(this[_0x46bb0f(0x263)]>0x0)return this[_0x46bb0f(0x53f)]=0x0,this['opacity']=0x0,this[_0x46bb0f(0x263)]--;this['updateLifespan'](),this[_0x46bb0f(0x24c)](),this['updateScale'](),this[_0x46bb0f(0x279)](),this[_0x46bb0f(0x265)]();},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x40e)]=function(){const _0x33f96f=_0x3c3250;if(this[_0x33f96f(0x47a)]<=0x0)return this[_0x33f96f(0x5fb)]();if(this['isLongevityAffected']()){this[_0x33f96f(0x47a)]=this[_0x33f96f(0x294)];return;}this[_0x33f96f(0x47a)]--;if(this[_0x33f96f(0x47a)]<=0x0&&this[_0x33f96f(0x4f4)]){if(this[_0x33f96f(0x4f4)]['fireworksFinish']&&this[_0x33f96f(0x1fb)]!==_0x33f96f(0x2dd))return this[_0x33f96f(0x58e)]();else{if(this[_0x33f96f(0x4f4)][_0x33f96f(0x343)]&&this[_0x33f96f(0x1fb)]!==_0x33f96f(0x49d))return this[_0x33f96f(0x579)]();}this[_0x33f96f(0x4f4)]['respawnDelayMin']&&this[_0x33f96f(0x5b4)]();}},Sprite_WeatherParticle[_0x3c3250(0x206)]['isLongevityAffected']=function(){const _0x407062=_0x3c3250;if(!this[_0x407062(0x4f4)])return![];if(!this[_0x407062(0x4f4)][_0x407062(0x30d)])return![];return this[_0x407062(0x1fb)]===this[_0x407062(0x246)]()[_0x407062(0x1fb)];},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x58e)]=function(){const _0x26796a=_0x3c3250;this[_0x26796a(0x1fb)]='fireworks',this[_0x26796a(0x47a)]=Math[_0x26796a(0x23a)](0x14)+0x50,this[_0x26796a(0x294)]=this[_0x26796a(0x47a)],this[_0x26796a(0x21f)]=_0x26796a(0x4f7),this['_flags']={'scaleIn':0x0,'scaleInDuration':0x64,'scaleOut':0x2,'scaleOutDuration':0x64},this[_0x26796a(0x5df)]=0x1,this[_0x26796a(0x3ea)]=0x1,this[_0x26796a(0x5c8)]=0x0,this[_0x26796a(0x341)]=0xff,this[_0x26796a(0x5e5)]=0xff,this[_0x26796a(0x5da)]='InSine',this[_0x26796a(0x53f)]=0xa,this[_0x26796a(0x392)]=0xa,this[_0x26796a(0x276)]=_0x26796a(0x323),this['_speed']=0.05,this[_0x26796a(0x543)]=0x10e,this[_0x26796a(0x24f)]=Math[_0x26796a(0x23a)](0x168),this['_alignAngle']=![],this['_angleArc']=0x0,this[_0x26796a(0x2a9)]=0x0,this[_0x26796a(0x298)]=0x0,this['_spinAngle']=0x0,this['_spinSpeed']=0x0,this[_0x26796a(0x5bf)]=0x0,this[_0x26796a(0x336)]=0x0,this[_0x26796a(0x3b4)]=!![],this[_0x26796a(0x3ef)]=ImageManager['weatherEffectsFireworksFlower'](),this[_0x26796a(0x3ef)][_0x26796a(0x1ef)](this[_0x26796a(0x5c2)][_0x26796a(0x389)](this)),this[_0x26796a(0x34e)]=0x1,this[_0x26796a(0x3b2)]=[0x0,0x0,0x0,0x0];},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x579)]=function(){const _0x23788b=_0x3c3250;this[_0x23788b(0x1fb)]='sparkle',this['_lifespan']=Math['randomInt'](0x1e)+0x3c,this[_0x23788b(0x294)]=this[_0x23788b(0x47a)],this['_lastType']='sparkle',this['_flags']={},this[_0x23788b(0x5df)]=0x1,this[_0x23788b(0x3ea)]=0x1,this['_scaleInOutRatio']=0x1,this['opacity']=0xff,this[_0x23788b(0x5e5)]=0xff,this[_0x23788b(0x5da)]='InQuad',this[_0x23788b(0x53f)]=0x6,this['_opacityFadeInTimeWhole']=0x6,this['_trajectoryType']=_0x23788b(0x2f4),this[_0x23788b(0x3db)]=0x0,this[_0x23788b(0x543)]=0x0,this['_angleOffset']=0x0,this['_alignAngle']=![],this[_0x23788b(0x220)]=0x0,this[_0x23788b(0x2a9)]=0x0,this['_angleSwayRange']=0x0,this['_spinAngle']=0x0,this['_spinSpeed']=Math['randomInt'](0x3)+0x2,this[_0x23788b(0x5bf)]=0x0,this[_0x23788b(0x336)]=0x0,this[_0x23788b(0x3b4)]=!![],this[_0x23788b(0x3ef)]=ImageManager[_0x23788b(0x553)](),this[_0x23788b(0x3ef)][_0x23788b(0x1ef)](this[_0x23788b(0x5c2)][_0x23788b(0x389)](this)),this[_0x23788b(0x34e)]=0x1,this[_0x23788b(0x4c2)]=0x0,this[_0x23788b(0x3b2)]=[0x0,0x0,0x0,0x0],this[_0x23788b(0x5a2)]();},Sprite_WeatherParticle['prototype']['processRespawnDelay']=function(){const _0x37d911=_0x3c3250;this[_0x37d911(0x263)]=this[_0x37d911(0x4f4)]['respawnDelayMin'];const _0x17e262=this[_0x37d911(0x4f4)]['respawnDelayRngPerPower'],_0x549e02=this[_0x37d911(0x246)]()[_0x37d911(0x453)],_0xdc280b=Math[_0x37d911(0x23a)](_0x17e262*_0x549e02);this['_respawnDelay']+=_0xdc280b;},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x24c)]=function(){const _0x28f153=_0x3c3250;if(this[_0x28f153(0x4f4)][_0x28f153(0x3f0)])this[_0x28f153(0x25e)]();},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x25e)]=function(){const _0x20e8c3=_0x3c3250,_0x5bc6eb=Graphics['frameCount']+this['_hueSwayRng'],_0x311169=this[_0x20e8c3(0x4f4)][_0x20e8c3(0x3af)],_0x5cac11=this[_0x20e8c3(0x4f4)][_0x20e8c3(0x3f0)]/0x2,_0x1015a0=this[_0x20e8c3(0x3a8)]+Math[_0x20e8c3(0x2e8)](_0x5bc6eb*_0x311169)*_0x5cac11;this[_0x20e8c3(0x39d)](_0x1015a0);},Sprite_WeatherParticle['prototype']['updateScale']=function(){const _0x9bd674=_0x3c3250;this['updateScaleInOutRatio'](),this['scale']['x']=this[_0x9bd674(0x4da)](),this[_0x9bd674(0x303)]['y']=this[_0x9bd674(0x2bc)]();},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x346)]=function(){const _0x2936ba=_0x3c3250;if(this[_0x2936ba(0x4f4)][_0x2936ba(0x204)]>this['_lifespan']){const _0x21a846=this[_0x2936ba(0x47a)],_0x363e1f=this[_0x2936ba(0x4f4)][_0x2936ba(0x28d)]??0x1;_0x21a846<=0x1?this['_scaleInOutRatio']=_0x363e1f:this['_scaleInOutRatio']=(this[_0x2936ba(0x5c8)]*(_0x21a846-0x1)+_0x363e1f)/_0x21a846;}else{if(this[_0x2936ba(0x4f4)]['scaleInDuration']>this[_0x2936ba(0x294)]-this[_0x2936ba(0x47a)]){const _0x4bf306=this[_0x2936ba(0x4f4)]['scaleInDuration']-(this[_0x2936ba(0x294)]-this['_lifespan']),_0x57ada9=0x1;_0x4bf306<=0x1?this[_0x2936ba(0x5c8)]=_0x57ada9:this[_0x2936ba(0x5c8)]=(this[_0x2936ba(0x5c8)]*(_0x4bf306-0x1)+_0x57ada9)/_0x4bf306;}else this['_scaleInOutRatio']=0x1;}},Sprite_WeatherParticle[_0x3c3250(0x206)]['calculateScaleX']=function(){const _0x430bd0=_0x3c3250;let _0x541f8d=this[_0x430bd0(0x457)];_0x541f8d*=this[_0x430bd0(0x5df)];if(this['_flags'][_0x430bd0(0x51b)]&&this[_0x430bd0(0x526)]){const _0x50c1cc=Graphics[_0x430bd0(0x3cc)]+this[_0x430bd0(0x2d9)];_0x541f8d*=Math['cos'](_0x50c1cc*this[_0x430bd0(0x5ec)]);}return _0x541f8d*=this[_0x430bd0(0x5c8)],_0x541f8d;},Sprite_WeatherParticle['prototype'][_0x3c3250(0x2bc)]=function(){const _0x193d0a=_0x3c3250;let _0x5cf7d1=this['_baseScale'];_0x5cf7d1*=this[_0x193d0a(0x3ea)];if(this['_flags'][_0x193d0a(0x51b)]&&!this[_0x193d0a(0x526)]){const _0x1e4a97=Graphics[_0x193d0a(0x3cc)]+this[_0x193d0a(0x2bb)];_0x5cf7d1*=Math[_0x193d0a(0x2e8)](_0x1e4a97*this['_flatFlutterSpeedY']);}return _0x5cf7d1*=this['_scaleInOutRatio'],_0x5cf7d1;},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x279)]=function(){const _0x1dedf6=_0x3c3250;this['updatePositionTrajectory'](),this[_0x1dedf6(0x1f6)]();},Sprite_WeatherParticle[_0x3c3250(0x206)]['updatePositionFinal']=function(){const _0x11efac=_0x3c3250;this['x']=this['ax'],this['y']=this['ay'],this[_0x11efac(0x5bd)]&&(this['x']-=this['_weatherParent']['origin']['x'],this['y']-=this['_weatherParent']['origin']['y']),this['x']=Math[_0x11efac(0x5eb)](this['x']),this['y']=Math[_0x11efac(0x5eb)](this['y']);},Sprite_WeatherParticle[_0x3c3250(0x206)]['updateOpacity']=function(){const _0xe3a574=_0x3c3250;this[_0xe3a574(0x470)](),this[_0xe3a574(0x37a)]();},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x470)]=function(){const _0x41dfe3=_0x3c3250;if(this['_lifespan']<=0x0)return;if(this['_opacityFadeInTime']>0x0&&this[_0x41dfe3(0x47a)]>this[_0x41dfe3(0x53f)])return;if(this[_0x41dfe3(0x587)]())return;const _0x1477d2=this['_opacityEasingType']||_0x41dfe3(0x39b);this[_0x41dfe3(0x5e5)]=this[_0x41dfe3(0x43e)](this[_0x41dfe3(0x5e5)],0x0,_0x1477d2);},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x43e)]=function(_0x393873,_0x416b80,_0x5716dd){const _0x12e0c3=_0x3c3250,_0x33d24f=this[_0x12e0c3(0x47a)],_0x1d0bbb=this[_0x12e0c3(0x294)],_0x5d95ec=this[_0x12e0c3(0x576)]((_0x1d0bbb-_0x33d24f)/_0x1d0bbb,_0x5716dd),_0x18185b=this['calcEasing']((_0x1d0bbb-_0x33d24f+0x1)/_0x1d0bbb,_0x5716dd),_0x4fcc7d=(_0x393873-_0x416b80*_0x5d95ec)/(0x1-_0x5d95ec);return _0x4fcc7d+(_0x416b80-_0x4fcc7d)*_0x18185b;},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x576)]=function(_0x17b40d,_0x4574fc){const _0x5a0a28=_0x3c3250;return VisuMZ[_0x5a0a28(0x3b6)](_0x17b40d,_0x4574fc);},Sprite_WeatherParticle['prototype'][_0x3c3250(0x5be)]=function(){const _0x1ff34c=_0x3c3250;let _0x3d4d7f=0x1;if(!SceneManager[_0x1ff34c(0x550)]()){if(this[_0x1ff34c(0x4f4)][_0x1ff34c(0x4e0)]&&!this[_0x1ff34c(0x274)][_0x1ff34c(0x580)]){const _0xeee7d8=$gamePlayer['screenX']()-this['x'],_0x118547=$gamePlayer[_0x1ff34c(0x2e6)]()-this['y'],_0x212179=Math[_0x1ff34c(0x5e1)](_0xeee7d8*_0xeee7d8+_0x118547*_0x118547),_0x1f21b8=0x5*$gameMap[_0x1ff34c(0x537)]();if(_0x212179<=_0x1f21b8)_0x3d4d7f*=0.15;}}if(this[_0x1ff34c(0x53f)]>0x0){const _0x3505dd=this[_0x1ff34c(0x392)]||0x1,_0x52e418=this['_opacityFadeInTime'];_0x3d4d7f*=(_0x3505dd-_0x52e418)/_0x3505dd,this[_0x1ff34c(0x53f)]--;}return _0x3d4d7f;},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x37a)]=function(){const _0xa0f3d7=_0x3c3250,_0x3a2283=this[_0xa0f3d7(0x5be)]();this['opacity']=Math[_0xa0f3d7(0x490)](this['_realOpacity']*_0x3a2283);},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x5f7)]=function(){const _0x15ea5b=_0x3c3250,_0xdae826=this[_0x15ea5b(0x22d)]();switch(this[_0x15ea5b(0x276)]){case _0x15ea5b(0x323):this[_0x15ea5b(0x2db)](_0xdae826);break;case _0x15ea5b(0x2f4):this[_0x15ea5b(0x592)](_0xdae826);break;case _0x15ea5b(0x48d):case _0x15ea5b(0x35a):case _0x15ea5b(0x542):this[_0x15ea5b(0x2f7)](_0xdae826);break;case _0x15ea5b(0x49b):case _0x15ea5b(0x4df):case _0x15ea5b(0x57f):case _0x15ea5b(0x570):this[_0x15ea5b(0x593)](_0xdae826);break;default:this[_0x15ea5b(0x203)]();break;}this[_0x15ea5b(0x406)](),this[_0x15ea5b(0x520)]();},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x22d)]=function(){const _0x9459e6=_0x3c3250;this[_0x9459e6(0x2a9)]+=this['_angleArc'];let _0x1d86f4=this['_baseAngle']+this['_angleArcTotal'];const _0x3ae076=Graphics[_0x9459e6(0x3cc)]+this[_0x9459e6(0x308)];return _0x1d86f4+=Math[_0x9459e6(0x2e8)](_0x3ae076*this['_angleSwaySpeed'])*this['_angleSwayRange'],this[_0x9459e6(0x4f5)]=-((this[_0x9459e6(0x546)]?_0x1d86f4:0x0)+this[_0x9459e6(0x24f)]),_0x1d86f4;},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x2db)]=function(_0x307a57){const _0xa59b72=_0x3c3250,_0x53820f=VisuMZ['WeatherEffects'][_0xa59b72(0x338)](_0x307a57);this['ax']+=this[_0xa59b72(0x3db)]*Math[_0xa59b72(0x2e8)](_0x53820f),this['ay']-=this[_0xa59b72(0x3db)]*Math[_0xa59b72(0x4cd)](_0x53820f);},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x203)]=function(){const _0x4c8508=_0x3c3250;this['ax']=Graphics[_0x4c8508(0x45e)]*0x64,this['ay']=Graphics[_0x4c8508(0x243)]*0x64;},Sprite_WeatherParticle[_0x3c3250(0x206)]['updatePositionFrozenTrajectory']=function(_0x163305){},Sprite_WeatherParticle[_0x3c3250(0x206)]['updatePositionMapLockedTarget']=function(_0x57ee33){const _0xd3155c=_0x3c3250;let _0x3ae794=null;if(!SceneManager[_0xd3155c(0x550)]())switch(this[_0xd3155c(0x276)]){case _0xd3155c(0x48d):_0x3ae794=$gamePlayer;break;case'follower':const _0xacbb5b=this[_0xd3155c(0x309)];_0x3ae794=$gamePlayer[_0xd3155c(0x4e4)]()['follower'](_0xacbb5b);break;case'event':const _0x4dd2b0=this[_0xd3155c(0x309)];_0x3ae794=$gameMap[_0xd3155c(0x542)](_0x4dd2b0);break;}if(_0x3ae794){this['ax']=_0x3ae794[_0xd3155c(0x478)]()+this[_0xd3155c(0x59a)],this['ay']=_0x3ae794[_0xd3155c(0x2e6)]()+this['_lockedOffsetY'];return;}this[_0xd3155c(0x203)]();},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x593)]=function(_0x21b4ed){const _0x593819=_0x3c3250;let _0x18579e=null;if(SceneManager[_0x593819(0x550)]())switch(this[_0x593819(0x276)]){case'actor':const _0x5921ab=this['_trajectoryLockedID'];_0x18579e=$gameActors['actor'](_0x5921ab);break;case _0x593819(0x4df):const _0x2b422d=this['_trajectoryLockedID'];_0x18579e=$gameTroop[_0x593819(0x285)]()[_0x2b422d];break;case'user':_0x18579e=BattleManager[_0x593819(0x32e)];break;case _0x593819(0x570):_0x18579e=BattleManager[_0x593819(0x2cf)];!_0x18579e&&BattleManager[_0x593819(0x441)]&&(_0x18579e=BattleManager[_0x593819(0x441)][0x0]);break;}if(_0x18579e){const _0x10e338=SceneManager[_0x593819(0x3b7)][_0x593819(0x5ad)];if(_0x10e338){const _0x2c94a6=_0x10e338[_0x593819(0x36b)](_0x18579e);if(_0x2c94a6){const _0x3deae7=new Point(_0x2c94a6['x'],_0x2c94a6['y']),_0x427680=_0x2c94a6[_0x593819(0x444)][_0x593819(0x412)](_0x3deae7);this['ax']=_0x2c94a6['x']-_0x427680['x']+this[_0x593819(0x59a)],this['ay']=_0x2c94a6['y']-_0x427680['y']+this[_0x593819(0x5c7)];return;}}}this[_0x593819(0x203)]();},Sprite_WeatherParticle[_0x3c3250(0x206)][_0x3c3250(0x406)]=function(){const _0x24a92f=_0x3c3250;this[_0x24a92f(0x439)]+=this[_0x24a92f(0x347)],this[_0x24a92f(0x4f5)]+=this[_0x24a92f(0x439)];},Sprite_WeatherParticle[_0x3c3250(0x206)]['updatePositionTrajectorySway']=function(){const _0x2c1bfa=_0x3c3250,_0x3142a5=Graphics[_0x2c1bfa(0x3cc)]+this[_0x2c1bfa(0x43a)],_0x5e2b98=Graphics[_0x2c1bfa(0x3cc)]+this[_0x2c1bfa(0x2ee)];this['ax']+=Math[_0x2c1bfa(0x2e8)](_0x3142a5*this[_0x2c1bfa(0x331)])*this[_0x2c1bfa(0x5bf)]/0x2,this['ay']+=Math[_0x2c1bfa(0x4cd)](_0x5e2b98*this['_ySwaySpeed'])*this['_ySwayRange']/0x2;},Spriteset_Base[_0x3c3250(0x206)][_0x3c3250(0x4a5)]=function(){const _0x446f4c=_0x3c3250;this['_upperWeatherContainer']?this[_0x446f4c(0x521)]=this[_0x446f4c(0x454)][_0x446f4c(0x53a)][0x0]:(this['_weather']=new Weather(),this[_0x446f4c(0x4c6)](this[_0x446f4c(0x521)]));},Spriteset_Base[_0x3c3250(0x206)][_0x3c3250(0x4bb)]=function(_0x526d90,_0x280a27){const _0x22e766=_0x3c3250;if(!_0x526d90)return;const _0x4c1c62=Weather[_0x22e766(0x4d2)];for(let _0xb5aa56=0x1;_0xb5aa56<=_0x4c1c62;_0xb5aa56++){const _0x44ff36=VisuMZ[_0x22e766(0x474)]['getWeatherLayerSprite'](_0xb5aa56,_0x280a27);_0x526d90['addChild'](_0x44ff36);}},Spriteset_Base[_0x3c3250(0x206)][_0x3c3250(0x3c0)]=function(){const _0x5b7b7b=_0x3c3250;this['_lowerWeatherContainer']=new Sprite(),this[_0x5b7b7b(0x4bb)](this[_0x5b7b7b(0x42b)],!![]),this[_0x5b7b7b(0x232)][_0x5b7b7b(0x4c6)](this[_0x5b7b7b(0x42b)]);},Spriteset_Base['prototype'][_0x3c3250(0x42a)]=function(){const _0x3604f7=_0x3c3250;this[_0x3604f7(0x454)]=new Sprite(),this[_0x3604f7(0x4bb)](this[_0x3604f7(0x454)],![]),this[_0x3604f7(0x4c6)](this['_upperWeatherContainer']);},Spriteset_Base[_0x3c3250(0x206)][_0x3c3250(0x480)]=function(){const _0x4f99f5=_0x3c3250;this['updateWeatherLayers'](!![]),this[_0x4f99f5(0x405)](![]);},Spriteset_Base[_0x3c3250(0x206)][_0x3c3250(0x405)]=function(_0x3dbfb1){const _0x58f127=_0x3c3250,_0x53b18f=_0x3dbfb1?this[_0x58f127(0x42b)]:this[_0x58f127(0x454)];if(!_0x53b18f)return;for(const _0x2cb007 of _0x53b18f[_0x58f127(0x53a)]){if(!_0x2cb007)continue;_0x2cb007[_0x58f127(0x3a5)](),_0x2cb007[_0x58f127(0x279)]();}},VisuMZ['WeatherEffects'][_0x3c3250(0x364)]=Spriteset_Map[_0x3c3250(0x206)]['createTilemap'],Spriteset_Map['prototype'][_0x3c3250(0x318)]=function(){const _0x5ad147=_0x3c3250;this[_0x5ad147(0x3c0)](),VisuMZ[_0x5ad147(0x474)][_0x5ad147(0x364)]['call'](this),this[_0x5ad147(0x42a)]();},Spriteset_Map['prototype'][_0x3c3250(0x4a5)]=function(){const _0x489d30=_0x3c3250;Spriteset_Base[_0x489d30(0x206)]['createWeather'][_0x489d30(0x53e)](this);},Spriteset_Map[_0x3c3250(0x206)][_0x3c3250(0x480)]=function(){const _0x20dc50=_0x3c3250;Spriteset_Base[_0x20dc50(0x206)][_0x20dc50(0x480)][_0x20dc50(0x53e)](this);},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x4f8)]=Spriteset_Battle[_0x3c3250(0x206)]['createBattleback'],Spriteset_Battle[_0x3c3250(0x206)][_0x3c3250(0x599)]=function(){const _0x3e2141=_0x3c3250;this[_0x3e2141(0x3c0)](),VisuMZ[_0x3e2141(0x474)][_0x3e2141(0x4f8)]['call'](this);},VisuMZ[_0x3c3250(0x474)]['Spriteset_Battle_createBattleFieldContainer']=Spriteset_Battle[_0x3c3250(0x206)]['createBattleFieldContainer'],Spriteset_Battle[_0x3c3250(0x206)][_0x3c3250(0x44c)]=function(){const _0x15ea7b=_0x3c3250;VisuMZ[_0x15ea7b(0x474)][_0x15ea7b(0x3d0)][_0x15ea7b(0x53e)](this),this[_0x15ea7b(0x42a)]();},Spriteset_Battle['prototype']['createLowerWeatherLayer']=function(){const _0x163994=_0x3c3250;Spriteset_Base[_0x163994(0x206)]['createLowerWeatherLayer']['call'](this),this['_baseSprite']['addChild'](this[_0x163994(0x42b)]);},Spriteset_Battle[_0x3c3250(0x206)][_0x3c3250(0x42a)]=function(){const _0x3ce671=_0x3c3250;Spriteset_Base[_0x3ce671(0x206)]['createUpperWeatherLayer'][_0x3ce671(0x53e)](this),this[_0x3ce671(0x232)][_0x3ce671(0x4c6)](this['_upperWeatherContainer']);},Spriteset_Battle['prototype']['createWeather']=function(){const _0x3849d5=_0x3c3250;Imported['VisuMZ_2_VisualBattleEnv']&&this[_0x3849d5(0x1fa)](),Spriteset_Base[_0x3849d5(0x206)][_0x3849d5(0x4a5)][_0x3849d5(0x53e)](this);},Spriteset_Battle[_0x3c3250(0x206)][_0x3c3250(0x480)]=function(){const _0x105910=_0x3c3250;Spriteset_Base[_0x105910(0x206)][_0x105910(0x480)][_0x105910(0x53e)](this);},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x47d)]=Window_Options[_0x3c3250(0x206)][_0x3c3250(0x41e)],Window_Options[_0x3c3250(0x206)][_0x3c3250(0x41e)]=function(){const _0x43b4ff=_0x3c3250;VisuMZ['WeatherEffects'][_0x43b4ff(0x47d)][_0x43b4ff(0x53e)](this),this['addWeatherDensityCommand']();},Window_Options['prototype']['addWeatherDensityCommand']=function(){const _0x340487=_0x3c3250;if(!VisuMZ['WeatherEffects'][_0x340487(0x23f)][_0x340487(0x5a5)][_0x340487(0x3d7)])return;const _0x5b6dc4=TextManager['weatherDensity'],_0x10fd4e=_0x340487(0x2fd);this[_0x340487(0x4d0)](_0x5b6dc4,_0x10fd4e);},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x50d)]=Window_Options[_0x3c3250(0x206)][_0x3c3250(0x23e)],Window_Options['prototype'][_0x3c3250(0x23e)]=function(_0x529430){const _0x2ed9a3=_0x3c3250;if(_0x529430===_0x2ed9a3(0x2fd))return!![];return VisuMZ[_0x2ed9a3(0x474)]['Window_Options_isVolumeSymbol']['call'](this,_0x529430);},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x338)]=function(_0x2ac99b){return _0x2ac99b*(Math['PI']/0xb4);},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x514)]=function(_0x3421fb){return _0x3421fb*(0xb4/Math['PI']);},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x531)]=function(_0x36902a){const _0xaaaad9=_0x3c3250;return Math[_0xaaaad9(0x23a)](_0x36902a+0x1)+Math[_0xaaaad9(0x23a)](_0x36902a+0x1)-_0x36902a;},VisuMZ['WeatherEffects'][_0x3c3250(0x586)]=function(_0x484132){const _0x270a4d=_0x3c3250;return Math[_0x270a4d(0x2cb)]()*_0x484132+Math[_0x270a4d(0x2cb)]()*_0x484132-_0x484132;},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x32a)]=function(){const _0x296fd4=_0x3c3250;this[_0x296fd4(0x3bb)]=[],this[_0x296fd4(0x31e)]=[];const _0x2a9969=Weather[_0x296fd4(0x4d2)];let _0x2a9cf7=!![];for(let _0x59ff36=0x1;_0x59ff36<=_0x2a9969;_0x59ff36++){const _0x3b33f8=new Weather();_0x3b33f8[_0x296fd4(0x52b)](_0x59ff36,_0x2a9cf7),this[_0x296fd4(0x3bb)][_0x296fd4(0x590)](_0x3b33f8);}_0x2a9cf7=![];for(let _0x22031e=0x1;_0x22031e<=_0x2a9969;_0x22031e++){const _0x1344fa=new Weather();_0x1344fa[_0x296fd4(0x52b)](_0x22031e,_0x2a9cf7),this['_upperLayerSprites'][_0x296fd4(0x590)](_0x1344fa);}},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x5a0)]=function(_0x346507,_0x36f244){const _0x4d68c1=_0x3c3250;if(this['_lowerLayerSprites']===undefined)this[_0x4d68c1(0x32a)]();if(this[_0x4d68c1(0x31e)]===undefined)this['createNewWeatherSprites']();_0x346507=(_0x346507||0x1)[_0x4d68c1(0x48f)](0x1,Weather[_0x4d68c1(0x4d2)]);const _0x409cee=_0x346507-0x1;return _0x36f244?this['_lowerLayerSprites'][_0x409cee]:this[_0x4d68c1(0x31e)][_0x409cee];},VisuMZ[_0x3c3250(0x474)]['newLayer']=function(){const _0x4a082c=_0x3c3250;return{'type':_0x4a082c(0x3b3),'power':0x0,'powerTarget':0x0,'duration':0x0,'sprite':{'lifespan':0x3c,'lifespanVariance':0x0,'spawnLocationX':_0x4a082c(0x2cb),'spawnOffsetX':0x0,'spawnLocationY':_0x4a082c(0x2cb),'spawnOffsetY':0x0,'mapBound':!![],'opacity':0xff,'opacityVariance':0x0,'opacityEasingType':_0x4a082c(0x39b),'opacityFadeInTime':0x10,'scale':0x1,'scaleVariance':0x0,'scaleRatioX':0x1,'scaleRatioY':0x1,'totalMinimum':0x14,'totalPerPower':0x5},'dimmer':{'color':_0x4a082c(0x208),'opacityMinimum':0x0,'opacityPerPower':0x0},'image':{'generated':!![],'generatedWeight':0x1,'icons':[],'iconsWeight':0x10,'pictures':[],'picturesWeight':0x10,'blendMode':0x0,'hueVariations':[],'toneVariations':[]},'flags':{'alwaysVisiblePlayer':![],'flatFlutter':![],'hueSwayRange':0x0,'hueSwaySpeed':0.01,'longevity':![],'respawnCommonEventID':0x0,'respawnDelayMin':0x0,'respawnDelayRngPerPower':0x0,'scaleIn':0x1,'scaleInDuration':0xa,'scaleOut':0x1,'scaleOutDuration':0xa,'fireworksFinish':![],'sparkleFinish':![]},'trajectory':{'type':_0x4a082c(0x323),'lockedID':0x0,'lockedOffsetX':0x0,'lockedOffsetY':0x0,'speed':0x1,'speedVariance':0x0,'angle':0x0,'alignAngle':!![],'angleOffset':0x0,'angleVariance':0x0,'angleArc':0x0,'angleSwayRange':0x0,'angleSwaySpeed':0.01,'spinSpeed':0x0,'spinSpeedVariance':0x0,'reverseSpin':![],'xSwayRange':0x0,'xSwaySpeed':0.01,'ySwayRange':0x0,'ySwaySpeed':0.01}};},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x5a9)]=function(_0x4a2522){const _0x47d758=_0x3c3250;if(!_0x4a2522)return;_0x4a2522[_0x47d758(0x252)][_0x47d758(0x341)]=0xbe,_0x4a2522[_0x47d758(0x252)][_0x47d758(0x5db)]=0x1e;if(_0x4a2522[_0x47d758(0x1fb)]===_0x47d758(0x4c1))_0x4a2522[_0x47d758(0x252)]['lifespan']=0x24,_0x4a2522[_0x47d758(0x252)][_0x47d758(0x341)]=0x82,_0x4a2522[_0x47d758(0x252)][_0x47d758(0x5db)]=0x1e,_0x4a2522[_0x47d758(0x252)]['totalMinimum']=0x50,_0x4a2522[_0x47d758(0x252)][_0x47d758(0x561)]=0x14,(_0x4a2522[_0x47d758(0x5ca)][_0x47d758(0x424)]=_0x47d758(0x498),_0x4a2522[_0x47d758(0x5ca)]['opacityPerPower']=0x6,_0x4a2522[_0x47d758(0x26b)][_0x47d758(0x388)]=0xc),_0x4a2522[_0x47d758(0x26b)][_0x47d758(0x4f5)]=0xff,_0x4a2522[_0x47d758(0x26b)][_0x47d758(0x386)]=0x5;else{if(_0x4a2522['type']===_0x47d758(0x3b5))_0x4a2522[_0x47d758(0x252)][_0x47d758(0x375)]=0x1c,_0x4a2522[_0x47d758(0x252)][_0x47d758(0x341)]=0x82,_0x4a2522['sprite'][_0x47d758(0x5db)]=0x1e,_0x4a2522['sprite']['totalMinimum']=0x78,_0x4a2522[_0x47d758(0x252)][_0x47d758(0x561)]=0x28,(_0x4a2522[_0x47d758(0x5ca)]['color']='#404040',_0x4a2522[_0x47d758(0x5ca)][_0x47d758(0x545)]=0x6,_0x4a2522[_0x47d758(0x26b)][_0x47d758(0x388)]=0x10),_0x4a2522[_0x47d758(0x26b)][_0x47d758(0x4f5)]=0xf5,_0x4a2522[_0x47d758(0x26b)][_0x47d758(0x386)]=0xa;else _0x4a2522[_0x47d758(0x1fb)]==='snow'&&(_0x4a2522[_0x47d758(0x252)][_0x47d758(0x375)]=0x78,_0x4a2522[_0x47d758(0x252)]['opacity']=0xa0,_0x4a2522[_0x47d758(0x252)][_0x47d758(0x5db)]=0x14,_0x4a2522[_0x47d758(0x252)][_0x47d758(0x20b)]=0x96,_0x4a2522[_0x47d758(0x252)]['totalPerPower']=0x28,(_0x4a2522[_0x47d758(0x5ca)][_0x47d758(0x424)]=_0x47d758(0x340),_0x4a2522[_0x47d758(0x5ca)][_0x47d758(0x545)]=0x6,_0x4a2522[_0x47d758(0x26b)]['speed']=0x2),_0x4a2522[_0x47d758(0x26b)]['angle']=0xdc,_0x4a2522[_0x47d758(0x26b)][_0x47d758(0x386)]=0xf,_0x4a2522[_0x47d758(0x26b)][_0x47d758(0x3fe)]=0x2,_0x4a2522[_0x47d758(0x26b)][_0x47d758(0x288)]=0.01);}},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x316)]=function(_0x47c4e1){const _0x513b64=_0x3c3250,_0x48ab7b=VisuMZ[_0x513b64(0x474)]['newLayer']();this[_0x513b64(0x4c5)](_0x48ab7b,_0x47c4e1),this[_0x513b64(0x4bf)](_0x48ab7b,_0x47c4e1),this['applyPluginCmdSettingsSpecificCases'](_0x48ab7b,_0x47c4e1),this[_0x513b64(0x344)](_0x48ab7b,_0x47c4e1),this[_0x513b64(0x419)](_0x48ab7b,_0x47c4e1);},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x3d3)]=function(){const _0x5e52a2=_0x3c3250;return![];if(!$gameTemp[_0x5e52a2(0x5f4)]())return![];return Input[_0x5e52a2(0x523)]('control')&&Input[_0x5e52a2(0x523)](_0x5e52a2(0x293));},VisuMZ['WeatherEffects']['applyPluginCmdSettingsBasic']=function(_0x3dd40e,_0x452297){const _0x4f8ac1=_0x3c3250;_0x3dd40e[_0x4f8ac1(0x1fb)]=_0x452297[_0x4f8ac1(0x1fb)]||_0x4f8ac1(0x3b3),_0x3dd40e['powerTarget']=(_0x452297[_0x4f8ac1(0x4a9)]||0x1)[_0x4f8ac1(0x48f)](0x1,0x9),this[_0x4f8ac1(0x3d3)]()&&(_0x3dd40e[_0x4f8ac1(0x4a9)]=0x9);},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x4bf)]=function(_0x1a7395,_0x4254b2){const _0x47a990=_0x3c3250,_0x374354=[_0x47a990(0x252),_0x47a990(0x5ca),_0x47a990(0x37e),_0x47a990(0x1f0),'trajectory'];for(const _0x496c88 of _0x374354){if(!_0x1a7395[_0x496c88])continue;if(!_0x4254b2[_0x47a990(0x1f7)][_0x496c88])continue;this[_0x47a990(0x39c)](_0x1a7395[_0x496c88],_0x4254b2[_0x47a990(0x1f7)][_0x496c88]);}},VisuMZ[_0x3c3250(0x474)]['copyPluginCmdCustomSettings']=function(_0x450883,_0x5c404c){for(const _0x2a15e9 in _0x450883){if(_0x5c404c[_0x2a15e9]===undefined)continue;_0x450883[_0x2a15e9]=_0x5c404c[_0x2a15e9];}},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x2be)]=function(_0x94044d,_0x509df9){const _0x6546ca=_0x3c3250;if(_0x94044d[_0x6546ca(0x26b)][_0x6546ca(0x1fb)]===_0x6546ca(0x542)&&_0x94044d[_0x6546ca(0x26b)][_0x6546ca(0x5d5)]<=0x0){const _0xf4360d=$gameTemp['getLastPluginCommandInterpreter']();_0x94044d[_0x6546ca(0x26b)][_0x6546ca(0x5d5)]=_0xf4360d['eventId']();}},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x344)]=function(_0x56c363,_0x363f28){const _0x12de88=_0x3c3250;let _0x29242b=_0x363f28['Layer'][_0x12de88(0x24b)](_0x381ac1=>(Number(_0x381ac1)||0x1)[_0x12de88(0x48f)](0x1,0xa)),_0x8d8f42=_0x363f28[_0x12de88(0x4e6)];_0x56c363['duration']=_0x363f28[_0x12de88(0x55c)]||0x1;this['isDebugAllOption']()&&(_0x29242b=[0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9,0xa],_0x8d8f42='both');for(const _0x48553e of _0x29242b){[_0x12de88(0x4b1),_0x12de88(0x261)][_0x12de88(0x2fe)](_0x8d8f42)&&$gameScreen[_0x12de88(0x315)](_0x48553e,![],_0x56c363),[_0x12de88(0x376),_0x12de88(0x261)][_0x12de88(0x2fe)](_0x8d8f42)&&$gameScreen[_0x12de88(0x315)](_0x48553e,!![],_0x56c363);}},VisuMZ[_0x3c3250(0x474)][_0x3c3250(0x419)]=function(_0x541f4f,_0x1731d1){const _0x42e37d=_0x3c3250;if(!_0x1731d1[_0x42e37d(0x2d7)])return;const _0x21f3ce=$gameTemp[_0x42e37d(0x3a7)]();_0x21f3ce&&_0x21f3ce['wait'](_0x541f4f[_0x42e37d(0x55c)]||0x1);};