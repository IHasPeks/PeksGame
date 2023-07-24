//=============================================================================
// VisuStella MZ - Lighting Effects
// VisuMZ_2_LightingEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_2_LightingEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.LightingEffects = VisuMZ.LightingEffects || {};
VisuMZ.LightingEffects.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 2] [Version 1.04] [LightingEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Lighting_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_EventsMoveCore
 * @orderAfter VisuMZ_1_EventsMoveCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * RPG Maker MZ lacks the ability to provide lighting by default. During scenes
 * where it is night, the usage of tones is not adequate either since there is
 * no way to illuminate the darkness. This plugin remedies that problem by
 * providing lighting effects that pierce the darkness. From radial lights to
 * conical lights and applying various lighting behaviors, this plugin covers
 * the general lighting needs that RPG Maker MZ does not.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Auto-Tints allow for maps to automatically load up a specific screen tint
 *   upon player entry. Screen tints can be custom or based off presets.
 * * Apply darkness overlays to maps using custom colors or presets. Change
 *   them midway through the game using Plugin Commands.
 * * Radial lights can be added to pierce the darkness overlays. They will
 *   light up nearby surroundings in a circular area.
 * * Conical lights can be used to portray light in a cone-like direction and
 *   simulate the light coming from flashlights.
 * * Adjust the offset settings for conical lights, such at the source of the
 *   light will come from an actor or event's hand positions rather than their
 *   chest or face.
 * * Adjusted conical light offsets can vary for different actors and/or events
 *   in case they have different body structures. Change these settings through
 *   notetags, Plugin Commands, or Plugin Parameters.
 * * Apply radial and conical lights to vehicles. They can have different
 *   settings applied when they're inactive or being driven. These settings can
 *   be adjusted separately via Plugin Parameters or Plugin Commands!
 * * Assign lights via a variety of ways such as easy to use notetags, page-
 *   specific comment tags, and Plugin Commands!
 * * Use either images or have the plugin generate them ingame using various
 *   notetags, Plugin Parameters, or Plugin Commands!
 * * Apply optional light behaviors to lights such as blinking, flickering,
 *   flashing, flares, and more!
 * * Use patterns for light fluctuation behaviors instead of randoms.
 * * Spawn lights unattached to the player character, followers, or events.
 *   These spawned lights can have unique trajectories akin to what would be
 *   seen at a light show.
 * * The darkness overlay also appears in battle. Actors and enemies will have
 *   their own individual radial light settings that they can use specifically
 *   for the battle-scene only. There will be no conical lights for battle.
 * * Options added in the Options menu to allow players to turn on/off any
 *   unwanted light behaviors that may bother them. Examples include blinking
 *   lights, flickering lights, flashing, flares, etc.
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
 * Instructions - Quick Start
 * ============================================================================
 * 
 * Here are some instructions to get yourself started quickly on using the
 * Lighting Effects plugin.
 * 
 * ---
 * 
 * Step 1: Create a map with a darkness overlay.
 * 
 * 1. Create a new map (or use an old one if you know what you're doing).
 * 2. Right click the map's name in the editor and go to the Map's Properties.
 * 3. Add the <Overlay: Night> notetag into the map's notebox.
 * 4. For more information on the types of settings you can pick, look in the
 *    help file.
 * 
 * *NOTE* Keep in mind that whenever you enter this map, the darkness overlay
 * will shift to "Night". If you don't want this to happen and want to shift it
 * dynamically, use the Plugin Command "OVERLAY: Change to Preset Color" or
 * "OVERLAY: Change to Custom Color" to change them instead.
 * 
 * ---
 * 
 * Step 2: Create an event with a radial light.
 * 
 * 1. Create a new event on the map.
 * 2. Add a "Comment" event to the event (you can use the notebox, too, but
 *    it's tiny, and the comment box is more visible).
 * 3. Inside the comment (or notebox), add in the following tags:
 * 
 *    <Radial Light Color: Light Yellow>
 *    <Radial Light Radius: 100>
 *    <Radial Light Intensity: 25%>
 *    <Radial Light Opacity: 50%>
 * 
 * 4. You can leave any of them out, but these four are selected as the main
 *    notetags to use to adjust how radial lights behave.
 * 5. For more information on the types of settings you can apply to radial
 *    lights, look in the help file.
 * 6. Let's see how this looks in-game!
 * 7. Save the game project.
 * 8. Let's test it out!
 * 
 * ---
 * 
 * Step 3: Play Test! Checking out the Radial Light!
 * 
 * 1. You should notice that the screen is darker than normal with the "Night"
 *    color as the darkness overlay.
 * 2. Find the event you've made. It should be emitting a light.
 * 3. The player, by default, assuming that no other Plugin Parameters have
 *    been changed, should also be emitting a faint light and has a conical
 *    light on, too.
 * 4. Everything working? Awesome, let's create an event with a conical light
 *    this time.
 * 
 * ---
 * 
 * Step 4: Create an event with a conical light.
 * 
 * 1. Create another new event on the map.
 * 2. Add a "Comment" event to the event (once again, you can use the notebox,
 *    too if you want but we prefer the larger comment box).
 * 3. Inside the comment (or notebox), add in the following tags:
 * 
 *    <Conical Light Color: Light Yellow>
 *    <Conical Light Radius: 300>
 *    <Conical Light Source Radius: 40>
 *    <Conical Light Intensity: 25%>
 *    <Conical Light Opacity: 80%>
 * 
 * 4. You can leave any of the above out, but these are the usual suspects when
 *    applying a conical light to an event.
 * 5. The "Source Radius" notetag refers to the light source point from which
 *    the conical light extends out of.
 * 6. For more information on the types of settings you can apply to radial
 *    lights, look in the help file.
 * 7. Let's see how this looks in-game!
 * 8. Save the game project.
 * 9. Let's test it out!
 * 
 * ---
 * 
 * Step 5: Play Test! Checking out the Conical Light!
 * 
 * 1. Look for the new event you've made. It should be holding a conical light,
 *    similar to your player.
 * 2. Conical lights will face whatever direction its user is facing.
 * 3. By default, the source point should be coming from the user's hand.
 * 4. This can be changed via notetags, Plugin Parameters, or Plugin Commands.
 * 5. Look in the help file for more information.
 * 6. The lights look kinda boring the way they are though. Let's give them
 *    some typical light behaviors.
 * 
 * ---
 * 
 * Step 6: Applying Behaviors
 * 
 * 1. Open your first event with the radial light and add these tags:
 * 
 *    <Radial Light Blink Rate: 3%>
 *    <Radial Light Pulse Rate: 20%>
 * 
 * 2. This will cause the radial light tied to this event to change slightly
 *    while waiting. This imitates how certain light bulbs work although there
 *    are other patterns you can use.
 * 3. Look in the help file for more behavior notetags you can use.
 * 4. Let's modify the conical light event and add these tags:
 * 
 *    <Conical Light Flicker Rate: 2%>
 *    <Conical Light Glow Rate: 10%>
 * 
 * 5. This will cause the conical light tied to this event to also change ever
 *    so slightly while waiting. Like with the other, this also imitates how
 *    flash bulbs work although there are other pattners you can use.
 * 6. Check the help file out for more behavior types to use with these lights.
 * 7. Let's see how this looks in-game!
 * 8. Save the game project.
 * 9. Let's test it out!
 * 
 * ---
 * 
 * Step 7: Play Test! Checking out Light Behaviors!
 * 
 * 1. Find the two events you've altered.
 * 2. You'll notice that the lights don't stay static the way they are. One
 *    will pulse back and forth while the other will have its opacity oscillate
 *    down and back up.
 * 3. Lighting behaviors make the atmosphere less boring even if nothing is
 *    happening on screen.
 * 4. These behaviors extend to blinking, flickering, flashing, flares, glows,
 *    pulses, and even custom patterns.
 * 5. For more information, check out the help file.
 * 
 * ---
 * 
 * And with that, you should have a better grasp on a few of the things the
 * Lighting Effects plugin is capable of.
 * 
 * ---
 *
 * ============================================================================
 * Keeping FPS Stable
 * ============================================================================
 * 
 * As this is a plugin that adds special effects to your game, you do have to
 * be mindful about how you use the various Lighting Effects features or else
 * your game will face FPS drops.
 *
 * ---
 * 
 * Here are a few things to keep in mind:
 * 
 * 1. Lighting Effects work best on small to medium sized maps. Anything below
 *    72x72 tiles in size is ideal. This also puts less stress on RPG Maker MZ
 *    even if you aren't using Lighting Effects for that map as there are less
 *    tiles to process in regards to the tilemap shader.
 * 
 * 2. Don't go overboard with Lighting Effect events. The more events there are
 *    for lighting effects, the more the player's GPU will act up. Keep the
 *    event count low and there will be less FPS drops. Anything below 80
 *    events is ideal. However, performances may vary on different computers.
 *    This is also a good practice to keep in mind for maps that aren't using
 *    Lighting Effects either.
 * 
 * 3. Keep spawned lights to a minimum. Generally speaking, anything under 128
 *    spawned lights on a map at a time is a good metric to keep in mind.
 *    However, performances may vary on different computers.
 * 
 * ---
 * 
 * We are NOT responsible for irresponsible usage of this plugin that pushes
 * graphical processing to their absolute limitations.
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
 * VisuMZ_1_BattleCore
 * 
 * Without the VisuStella MZ Battle Core installed in the same project, there
 * will be no darkness overlay in battle and as such, no lighting effects. The
 * Battle Core provides the needed architecture for lighting effects to go
 * through properly.
 * 
 * ---
 * 
 * VisuMZ_2_WeatherEffects
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
 * === Auto-Tint-Related Notetags ===
 * 
 * ---
 *
 * <Auto-Tint: Normal>
 * <Auto-Tint: Dark>
 * <Auto-Tint: Sepia>
 * <Auto-Tint: Sunset>
 * <Auto-Tint: Night>
 *
 * - Used for: Map Notetags
 * - Automatically tints the screen upon map entry with a preset tone.
 * - Screen tint preset values are based on RPG Maker MZ's default presets.
 * - Keep in minds that lights do not pierce through tones.
 *
 * ---
 *
 * <Auto-Tint: r, g, b, k>
 *
 * - Used for: Map Notetags
 * - Automatically tints the screen upon map entry with a custom tone.
 * - Replace 'r' with a number representing the red tone value (-255 to 255).
 * - Replace 'g' with a number representing the green tone value (-255 to 255).
 * - Replace 'b' with a number representing the blue tone value (-255 to 255).
 * - Replace 'g' with a number representing the grey tone value (0 to 255).
 * - Values that exceed -255 or 255 will be automatically timmed down.
 * - Grey values that are negative will have their absolute value taken of.
 * - Keep in minds that lights do not pierce through tones.
 *
 * ---
 * 
 * === Darkness Overlay-Related Notetags ===
 * 
 * ---
 * 
 * <Overlay: name>
 * 
 * - Used for: Map Notetags
 * - Applies a darkness overlay to the map that lights can penetrate through.
 * - Replace 'name' with any of the following preset names:
 *   - Normal, Dawn, Day, Dusk, Night
 *   - White, Black, Red, Orange, Yellow, Green, Cyan, Blue, Purple, Magenta,
 *     Pink, Brown
 *   - Light Red, Light Orange, Light Yellow, Light Green, Light Cyan,
 *     Light Blue, Light Purple, Light Magenta, Light Pink, Light Brown
 *   - Dark Red, Dark Orange, Dark Yellow, Dark Green, Dark Cyan,
 *     Dark Blue, Dark Purple, Dark Magenta, Dark Pink, Dark Brown
 * - Some of the above presets automatically adjust opacity levels to certain
 *   values. Otherwise, they will be at 255.
 * 
 * ---
 * 
 * <Overlay Color: #rrggbb>
 * 
 * - Used for: Map Notetags
 * - Applies a darkness overlay using a custom color.
 * - Replace 'rr' with a hexadecimal value for red.
 * - Replace 'gg' with a hexadecimal value for green.
 * - Replace 'bb' with a hexadecimal value for blue.
 * - Leave the '#' in place.
 * - If you are unsure of what hexadecimal value your color is, please use an
 *   online site like: https://htmlcolorcodes.com/
 * - These settings do not adjust opacity levels.
 * 
 * ---
 * 
 * <Overlay Opacity: x>
 * 
 * - Used for: Map Notetags
 * - Adjusts the darkness overlay's opacity level.
 * - Replace 'x' with a number value from 0 to 255, where 0 is transparent
 *   and 255 is opaque.
 * 
 * ---
 * 
 * <Overlay Opacity: x%>
 * 
 * - Used for: Map Notetags
 * - Adjusts the darkness overlay's opacity level by rate.
 * - Replace 'x' with a number value from 0 to 100, where 0% is transparent
 *   and 100% is opaque.
 * 
 * ---
 * 
 * <No Overlay>
 * 
 * - Used for: Map Notetags
 * - For the maps where you don't want there to be any overlay, but you don't
 *   want this to affect the other maps using them.
 * 
 * ---
 * 
 * === Anti-Light-Related Notetags ===
 * 
 * ---
 * 
 * <Hard Anti-Light Region: x>
 * <Hard Anti-Light Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Tiles marked by these regions won't have any light shown on them.
 *   - This will use hard edges.
 *   - This will override the settings found in the Plugin Parameters.
 *   - If this notetag is not used, use the settings in the Plugin Parameters
 *     instead for the map.
 *   - This does NOT work with looping maps.
 * - This does NOT block light from going to the other side. If the light
 *   radius is large enough, it will pierce through to the other side. It just
 *   won't be visible on the region marked tiles.
 * - Replace 'x' with a number representing the region ID to function as an
 *   anti-light tile marker.
 *   - You cannot use region 0. Use a number from 1 to 255 instead.
 * 
 * ---
 * 
 * <Hard Anti-Light Terrain Tag: x>
 * <Hard Anti-Light Terrain Tags: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Tiles marked by these terrain tags won't have any light shown on them.
 *   - This will use hard edges.
 *   - This will override the settings found in the Plugin Parameters.
 *   - If this notetag is not used, use the settings in the Plugin Parameters
 *     instead for the map.
 *   - This does NOT work with looping maps.
 * - This does NOT block light from going to the other side. If the light
 *   radius is large enough, it will pierce through to the other side. It just
 *   won't be visible on the terrain tag marked tiles.
 * - Replace 'x' with a number representing the terrain tag to function as an
 *   anti-light tile marker.
 *   - You cannot use terrain tag 0. Use a number from 1 to 7 instead.
 * 
 * ---
 * 
 * <Soft Anti-Light Region: x>
 * <Soft Anti-Light Regions: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Tiles marked by these regions won't have any light shown on them.
 *   - This will use soft edges.
 *   - This will override the settings found in the Plugin Parameters.
 *   - If this notetag is not used, use the settings in the Plugin Parameters
 *     instead for the map.
 *   - This does NOT work with looping maps.
 * - This does NOT block light from going to the other side. If the light
 *   radius is large enough, it will pierce through to the other side. It just
 *   won't be visible on the region marked tiles.
 * - Replace 'x' with a number representing the region ID to function as an
 *   anti-light tile marker.
 *   - You cannot use region 0. Use a number from 1 to 255 instead.
 * 
 * ---
 * 
 * <Soft Anti-Light Terrain Tag: x>
 * <Soft Anti-Light Terrain Tags: x, x, x>
 * 
 * - Used for: Map Notetags
 * - Tiles marked by these terrain tags won't have any light shown on them.
 *   - This will use soft edges.
 *   - This will override the settings found in the Plugin Parameters.
 *   - If this notetag is not used, use the settings in the Plugin Parameters
 *     instead for the map.
 *   - This does NOT work with looping maps.
 * - This does NOT block light from going to the other side. If the light
 *   radius is large enough, it will pierce through to the other side. It just
 *   won't be visible on the terrain tag marked tiles.
 * - Replace 'x' with a number representing the terrain tag to function as an
 *   anti-light tile marker.
 *   - You cannot use terrain tag 0. Use a number from 1 to 7 instead.
 * 
 * ---
 * 
 * === Radial Light General-Related Notetags ===
 * 
 * Using this notetag will override the default settings found in the Plugin
 * Parameters provided that they are adjusting already present settings.
 * 
 * ---
 * 
 * <Radial Light>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Quick and simple setup to add radial lights to this event.
 * - Using this notetag will enable radial lights for this event.
 * - This will use the default settings found in the Plugin Parameters for
 *   Event Radial Lights.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <No Radial Light>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Disables radial lights for this event.
 * - Primarily used if the default settings for Event Radial Lights would have
 *   the radial light enabled.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Filename: filename>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Uses an image instead of generated radial lights.
 *   - Using this notetag will lock out the usage of generated radial light
 *     notetags found below.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 * - Image will be centered on the target where the center of the image is the
 *   anchor point and will be rotated.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Color: name>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Creates a generated radial light using a preset color.
 *   - This notetag cannot be used with <Radial Light Filename: filename>.
 * - Replace 'name' with any of the following:
 *   - Normal, Dawn, Day, Dusk, Night
 *   - White, Black, Red, Orange, Yellow, Green, Cyan, Blue, Purple, Magenta,
 *     Pink, Brown
 *   - Light Red, Light Orange, Light Yellow, Light Green, Light Cyan,
 *     Light Blue, Light Purple, Light Magenta, Light Pink, Light Brown
 *   - Dark Red, Dark Orange, Dark Yellow, Dark Green, Dark Cyan,
 *     Dark Blue, Dark Purple, Dark Magenta, Dark Pink, Dark Brown
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Color: #rrggbb>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Creates a generated radial light using a custom color.
 *   - This notetag cannot be used with <Radial Light Filename: filename>.
 * - Replace 'rr' with a hexadecimal value for red.
 * - Replace 'gg' with a hexadecimal value for green.
 * - Replace 'bb' with a hexadecimal value for blue.
 * - Leave the '#' in place.
 * - If you are unsure of what hexadecimal value your color is, please use an
 *   online site like: https://htmlcolorcodes.com/
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Radius: r>
 * <Radial Light Diameter: d>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Determines the radius/diameter of the generated radial light.
 *   - This notetag cannot be used with <Radial Light Filename: filename>.
 * - Replace 'r' with a number representing the pixel radius of the generated
 *   radial light.
 * - Replace 'd' with a number representing the pixel diameter of the generated
 *   radial light.
 * - Use one or the other.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 *   - If this notetag is used, this will disable the "Auto-Calc Radius" Plugin
 *     Parameter for this specific actor/enemy.
 * 
 * ---
 * 
 * <Radial Light Intensity: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Determines the light intensity of the generated radial light.
 *   - This notetag cannot be used with <Radial Light Filename: filename>.
 *   - Intensity determines how much of the light's luminosity extends outwards
 *     at full strength between fading away.
 * - Replace 'x' with a number between 0 and 100 representing the intensity
 *   percentage for the generated radial light.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Angle: x>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Determines the initial angle of the generated radial light.
 *   - Can be used with both image and generated radial lights.
 *   - Best used with the <Radial Light Filename: filename> notetag in order to
 *     see any changes.
 * - Replace 'x' with a number between 0 and 360 representing the angle.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Rotate Speed: +x>
 * <Radial Light Rotate Speed: -x>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Determines the speed at which the radial light rotates.
 *   - Can be used with both image and generated radial lights.
 *   - Best used with the <Radial Light Filename: filename> notetag in order to
 *     see any changes.
 * - Replace 'x' with a number representing how slow (smaller numbers) or fast
 *   (larger numbers) the light rotates.
 *   - Use negative numbers for a reverser rotation going counter-clockwise.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Blend Mode: Normal>
 * <Radial Light Blend Mode: Additive>
 * <Radial Light Blend Mode: Multiply>
 * <Radial Light Blend Mode: Screen>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Changes the blend mode of the radial light.
 *   - Can be used with both image and generated radial lights.
 *   - We recommend that you use 'screen'.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Opacity: x>
 * <Radial Light Opacity: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Changes the opacity level of the radial light.
 *   - Can be used with both image and generated radial lights.
 *   - The opacity of a light determines how bright (larger numbers) or dim
 *     (smaller numbers) it is.
 * - Replace 'x' with a number between 0 and 255 to determine how dim (smaller
 *   numbers) or bright (larger numbers) the light is.
 * - Replace 'x%' with a percentage between 0% and 100% to determine how
 *   dim (smaller numbers) or bright (larger numbers) the light is.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Offset: +x, +y>
 * <Radial Light Offset: -x, -y>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Offsets the position of the radial light, which is normally centered on
 *   the sprite it is coming from.
 *   - Can be used with both image and generated radial lights.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the radial light's x and y coordinates by.
 * - Using this notetag will enable radial lights for this event.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * === Radial Light Behavior-Related Notetags ===
 * 
 * Using this notetag will override the default settings found in the Plugin
 * Parameters provided that they are adjusting already present settings.
 * 
 * ---
 * 
 * <Radial Light Blink Rate: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts the frequency at which the radial light will blink.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Blink Modifier: +x%>
 * <Radial Light Blink Modifier: -x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts a static multiplicative opacity modifier at which lights will
 *   become brighter (+) or dimmer (-) when flashing.
 * - Replace 'x' with a percentage representing the static multiplier increase.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Flicker Rate: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts the frequency at which the radial light will flicker.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Flicker Modifier: +x%>
 * <Radial Light Flicker Modifier: -x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts a randomized multiplicative opacity modifier at which lights will
 *   become brighter (+) or dimmer (-) when flashing.
 * - Replace 'x' with a percentage representing the randomized multiplier
 *   increase.
 *   - Randomized multiplier will range anywhere from 0 to the number itself.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Flash Rate: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts the frequency at which the radial light will flash.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Flash Modifier: +x%>
 * <Radial Light Flash Modifier: -x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts a static additive opacity modifier at which lights will become
 *   brighter (+) or dimmer (-) when flashing.
 * - Replace 'x' with a percentage representing the static additional change.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Flare Rate: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts the frequency at which the radial light will flare.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Flare Modifier: +x%>
 * <Radial Light Flare Modifier: -x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts a randomized additive opacity modifier at which lights will become
 *   brighter (+) or dimmer (-) when flaring up.
 * - Replace 'x' with a percentage representing the randomized multiplier
 *   increase.
 *   - Randomized multiplier will range anywhere from 0 to the number itself.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Glow Rate: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts how much the radial light will oscillate its brightness back and
 *   forth in a glow-like fashion.
 * - Replace 'x' with a percentage representing the change in brightness.
 *   - Lower numbers mean less fluctuation.
 *   - Higher numbers mean more fluctuation.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Glow Speed: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts the speed at which the glow oscillates back and forth.
 * - Replace 'x' with a percentage representing the speed.
 *   - Lower numbers mean slower.
 *   - Higher numbers mean faster.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Glow Random>
 * <Radial Light Glow No Random>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adds a random seed (or not) to the glow oscillation. This can be used to
 *   put multiple lights glowing at different starting points.
 * - This is used to offset the default RNG settings found in the default
 *   Plugin Parameters.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Pulse Rate: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts how much the radial light will oscillate its radius back and
 *   forth in a pulse-like fashion.
 * - Replace 'x' with a percentage representing the change in size.
 *   - Lower numbers mean less shrinking.
 *   - Higher numbers mean more shrinking.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Pulse Speed: x%>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adjusts the speed at which the pulse oscillates back and forth.
 * - Replace 'x' with a percentage representing the speed.
 *   - Lower numbers mean slower.
 *   - Higher numbers mean faster.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Pulse Random>
 * <Radial Light Pulse No Random>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Adds a random seed (or not) to the pulse oscillation. This can be used to
 *   put multiple lights pulsing at different starting points.
 * - This is used to offset the default RNG settings found in the default
 *   Plugin Parameters.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Pattern Type: name>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Uses a premade pattern by this plugin. The pattern will change the
 *   brightness of the light in a sequenced pattern.
 * - Replace 'name' with any of the following text:
 *   - none, normal
 *   - fluorescent, halogen, incandescent
 *   - candle, torch, campfire
 *   - fast strobe, slow strobe
 *   - strong pulse, medium pulse, slow pulse
 *   - underwater
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * <Radial Light Custom Pattern: x>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Uses a custom pattern determined by you, the game dev, on how the light's
 *   brightness will change over time.
 * - Replace 'x' with letters of the alphabet from 'a' to 'z'.
 *   - 'a' is completely transparent.
 *   - 'm' is midway in brightness.
 *   - 'z' is the brightest the light can be.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * - Examples:
 *   - <Radial Light Custom Pattern: mmmmmaaaaammmmmaaaaaabcdefgabcdefg>
 *   - <Radial Light Custom Pattern: nmonqnmomnmomomno>
 *   - <Radial Light Custom Pattern: abcdefghijklmnopqrrqponmlkjihgfedcba>
 * 
 * ---
 * 
 * <Radial Light Pattern Delay: x>
 * 
 * - Used for: Actor, Enemy, Event Notetags, and Event Page Comment Tags
 * - Determines how many frames to wait before going to the next part of the
 *   preset pattern and/or custom pattern.
 * - Replace 'x' with a number representing the frames the radial light needs
 *   to wait before moving forward in the pattern.
 *   - Lower numbers mean faster (minimum: 1).
 *   - Higher numbers mean slower.
 * - When used for actors and/or enemies, the effects will occur in battle.
 *   - Actor effects are NOT applied to the map.
 *   - When on the map, the radial light settings used will be dependent on
 *     the player and follower radial light settings instead of the individual
 *     actor radial light settings.
 * 
 * ---
 * 
 * === Conical Light General-Related Notetags ===
 * 
 * Using this notetag will override the default settings found in the Plugin
 * Parameters provided that they are adjusting already present settings.
 * 
 * ---
 * 
 * <Conical Light>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Quick and simple setup to add conical lights to this event.
 * - Using this notetag will enable conical lights for this event.
 * - This will use the default settings found in the Plugin Parameters for
 *   Event Conical Lights.
 * 
 * ---
 * 
 * <No Conical Light>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Disables conical lights for this event.
 * - Primarily used if the default settings for Event Conical Lights would have
 *   the conical light enabled.
 * 
 * ---
 * 
 * <Conical Light Filename: filename>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Uses an image instead of generated conical lights.
 *   - Using this notetag will lock out the usage of generated conical light
 *     notetags found below.
 *   - By default, you should have your conical light image face the right at
 *     "0 degrees".
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light File Angle Offset: +x>
 * <Conical Light File Angle Offset: -x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines how much to offset the angle of the conical light image by.
 * - Replace 'x' with a number from 0 to 360 representing the angle offset.
 *   - Negatives are allowed in order to quickly go the other way.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light File Anchor: x, y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determine the anchor points for the conical light image.
 * - Replace 'x' and 'y' with numbers between 0 and 1.
 *   - For x: 0.0 is left-aligned, 0.5 is center-aligned, 1.0 is right-aligned.
 *   - For y: 0.0 is top-aligned, 0.5 is middle-aligned, 1.0 is bottom-aligned.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Color: name>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Creates a generated conical light using a preset color.
 *   - This notetag cannot be used with <Conical Light Filename: filename>.
 * - Replace 'name' with any of the following:
 *   - Normal, Dawn, Day, Dusk, Night
 *   - White, Black, Red, Orange, Yellow, Green, Cyan, Blue, Purple, Magenta,
 *     Pink, Brown
 *   - Light Red, Light Orange, Light Yellow, Light Green, Light Cyan,
 *     Light Blue, Light Purple, Light Magenta, Light Pink, Light Brown
 *   - Dark Red, Dark Orange, Dark Yellow, Dark Green, Dark Cyan,
 *     Dark Blue, Dark Purple, Dark Magenta, Dark Pink, Dark Brown
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Color: #rrggbb>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Creates a generated conical light using a custom color.
 *   - This notetag cannot be used with <Conical Light Filename: filename>.
 * - Replace 'rr' with a hexadecimal value for red.
 * - Replace 'gg' with a hexadecimal value for green.
 * - Replace 'bb' with a hexadecimal value for blue.
 * - Leave the '#' in place.
 * - If you are unsure of what hexadecimal value your color is, please use an
 *   online site like: https://htmlcolorcodes.com/
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Radius: r>
 * <Conical Light Diameter: d>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the radius/diameter of the generated conical light.
 *   - This notetag cannot be used with <Conical Light Filename: filename>.
 * - Replace 'r' with a number representing the pixel radius of the generated
 *   conical light.
 * - Replace 'd' with a number representing the pixel diameter of the generated
 *   conical light.
 * - Use one or the other.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Source Radius: r>
 * <Conical Light Source Diameter: d>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the radius/diameter of the generated conical light's light
 *   source, creating a little circle from where the cone starts.
 *   - This notetag cannot be used with <Conical Light Filename: filename>.
 * - Replace 'r' with a number representing the pixel radius of the generated
 *   conical light.
 * - Replace 'd' with a number representing the pixel diameter of the generated
 *   conical light.
 * - Use one or the other.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Intensity: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the light intensity of the generated conical light.
 *   - This notetag cannot be used with <Conical Light Filename: filename>.
 *   - Intensity determines how much of the light's luminosity extends outwards
 *     at full strength between fading away.
 * - Replace 'x' with a number between 0 and 100 representing the intensity
 *   percentage for the generated conical light.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Blend Mode: Normal>
 * <Conical Light Blend Mode: Additive>
 * <Conical Light Blend Mode: Multiply>
 * <Conical Light Blend Mode: Screen>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the blend mode of the conical light.
 *   - Can be used with both image and generated conical lights.
 *   - We recommend that you use 'screen'.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Opacity: x>
 * <Conical Light Opacity: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Changes the opacity level of the conical light.
 *   - Can be used with both image and generated conical lights.
 *   - The opacity of a light determines how bright (larger numbers) or dim
 *     (smaller numbers) it is.
 * - Replace 'x' with a number between 0 and 255 to determine how dim (smaller
 *   numbers) or bright (larger numbers) the light is.
 * - Replace 'x%' with a percentage between 0% and 100% to determine how
 *   dim (smaller numbers) or bright (larger numbers) the light is.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Angle: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines the arc angle of the generated conical light.
 *   - The larger the angle, the wider the arc.
 * - Replace 'x' with a number between 0 and 360 representing the angle.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Angle Sway: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines how many degrees the light will sway back and forth.
 *   - The larger the angle, the wider the sway.
 * - Replace 'x' with a number between 0 and 360 representing the degrees the
 *   light will sway.
 *   - Use 0 for no sway.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Sway Speed: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines how fast the light will sway back and forth.
 * - Replace 'x' with a percentage from 1% to 100%.
 *   - Lower numbers mean slower.
 *   - Higher numbers mean faster.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Sway Random>
 * <Conical Light Sway No Random>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adds a random seed (or not) to the sway oscillation. This can be used to
 *   put multiple lights swaying at different starting points.
 * - This is used to offset the default RNG settings found in the default
 *   Plugin Parameters.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Force Direction: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Forces the conical light to face a certain direction.
 *   - This is primarily used for tile events or direction fixed events that
 *     would otherwise lock a conical light to face a certain direction.
 * - Replace 'x' with any of the following:
 *   - none
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Use 'none' to remove any forced directions.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Follow Cursor>
 * <Conical Light Not Follow Cursor>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the conical light to face towards the direction of the mouse
 *   cursor if it's within the game client window.
 * - This is used to offset the default settings found in the default
 *   Plugin Parameters.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Hand Offset>
 * <Conical Light Center Offset>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Causes the conical light to follow either the hand-focused offsets or
 *   base the offset at the center of the character.
 * - This is used to offset the default settings found in the default
 *   Plugin Parameters.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light Offset: +x, +y>
 * <Conical Light Offset: -x, -y>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Offsets the position of the conical light, which is normally centered on
 *   the sprite it is coming from.
 *   - Can be used with both image and generated conical lights.
 *   - This is NOT used with the <Conical Light Hand Offset> notetag.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the conical light's x and y coordinates by.
 * - Using this notetag will enable conical lights for this event.
 * 
 * ---
 * 
 * <Conical Light d Pattern p: +x, +y>
 * <Conical Light d Pattern p: -x, -y>
 * <Conical Light d Pattern p: +x, -y>
 * <Conical Light d Pattern p: -x, +y>
 * 
 * - Used for: Actor Notetags, Event Notetags, and Event Page Comment Tags
 * - When using hand-based offsets for the conical light, this will cause the
 *   light source to come from the target's hand instead of their chest/face.
 * - For actors, the light source origin will vary depending on who is in the
 *   lead, in case certain actors may be left or right handed, or if happen to
 *   be a robot that has the light shining from their eyes.
 * - Replace 'd' with text representing the direction the offset is for. Use
 *   any of the directions below:
 *   - down, left, right, up
 *   - lower left, lower right, upper left, upper right
 * - Replace 'p' with a number representing the pattern index. Patterns are
 *   the individual frames used in the sprite when walking.
 *   - By default, RPG Maker MZ sprites have the following patterns:
 *   - Left frame is pattern 0.
 *   - Center frame is pattern 1.
 *   - Right frame is pattern 2.
 * - Replace 'x' and 'y' with numeric values the exact number of pixels to
 *   offset the conical light's x and y coordinates by.
 * - Examples:
 *   - <Conical Light Down Pattern 0: +12, +14>
 *   - <Conical Light Left Pattern 1: +4, +16>
 *   - <Conical Light Right Pattern 2: -6, +16>
 * 
 * ---
 * 
 * === Conical Light Behavior-Related Notetags ===
 * 
 * Using this notetag will override the default settings found in the Plugin
 * Parameters provided that they are adjusting already present settings.
 * 
 * ---
 * 
 * <Conical Light Blink Rate: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the frequency at which the conical light will blink.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * 
 * ---
 * 
 * <Conical Light Blink Modifier: +x%>
 * <Conical Light Blink Modifier: -x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts a static multiplicative opacity modifier at which lights will
 *   become brighter (+) or dimmer (-) when flashing.
 * - Replace 'x' with a percentage representing the static multiplier increase.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * 
 * ---
 * 
 * <Conical Light Flicker Rate: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the frequency at which the conical light will flicker.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * 
 * ---
 * 
 * <Conical Light Flicker Modifier: +x%>
 * <Conical Light Flicker Modifier: -x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts a randomized multiplicative opacity modifier at which lights will
 *   become brighter (+) or dimmer (-) when flashing.
 * - Replace 'x' with a percentage representing the randomized multiplier
 *   increase.
 *   - Randomized multiplier will range anywhere from 0 to the number itself.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * 
 * ---
 * 
 * <Conical Light Flash Rate: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the frequency at which the conical light will flash.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * 
 * ---
 * 
 * <Conical Light Flash Modifier: +x%>
 * <Conical Light Flash Modifier: -x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts a static additive opacity modifier at which lights will become
 *   brighter (+) or dimmer (-) when flashing.
 * - Replace 'x' with a percentage representing the static additional change.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * 
 * ---
 * 
 * <Conical Light Flare Rate: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the frequency at which the conical light will flare.
 * - Replace 'x' with a percentage representing the frequency.
 *   - Lower numbers mean less frequent.
 *   - Higher numbers mean more frequent.
 * 
 * ---
 * 
 * <Conical Light Flare Modifier: +x%>
 * <Conical Light Flare Modifier: -x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts a randomized additive opacity modifier at which lights will become
 *   brighter (+) or dimmer (-) when flaring up.
 * - Replace 'x' with a percentage representing the randomized multiplier
 *   increase.
 *   - Randomized multiplier will range anywhere from 0 to the number itself.
 *   - Positive numbers mean brighter.
 *   - Negative numbers mean dimmer.
 * 
 * ---
 * 
 * <Conical Light Glow Rate: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts how much the conical light will oscillate its brightness back and
 *   forth in a glow-like fashion.
 * - Replace 'x' with a percentage representing the change in brightness.
 *   - Lower numbers mean less fluctuation.
 *   - Higher numbers mean more fluctuation.
 * 
 * ---
 * 
 * <Conical Light Glow Speed: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the speed at which the glow oscillates back and forth.
 * - Replace 'x' with a percentage representing the speed.
 *   - Lower numbers mean slower.
 *   - Higher numbers mean faster.
 * 
 * ---
 * 
 * <Conical Light Glow Random>
 * <Conical Light Glow No Random>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adds a random seed (or not) to the glow oscillation. This can be used to
 *   put multiple lights glowing at different starting points.
 * - This is used to offset the default RNG settings found in the default
 *   Plugin Parameters.
 * 
 * ---
 * 
 * <Conical Light Pulse Rate: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts how much the conical light will oscillate its radius back and
 *   forth in a pulse-like fashion.
 * - Replace 'x' with a percentage representing the change in size.
 *   - Lower numbers mean less shrinking.
 *   - Higher numbers mean more shrinking.
 * 
 * ---
 * 
 * <Conical Light Pulse Speed: x%>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adjusts the speed at which the pulse oscillates back and forth.
 * - Replace 'x' with a percentage representing the speed.
 *   - Lower numbers mean slower.
 *   - Higher numbers mean faster.
 * 
 * ---
 * 
 * <Conical Light Pulse Random>
 * <Conical Light Pulse No Random>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Adds a random seed (or not) to the pulse oscillation. This can be used to
 *   put multiple lights pulsing at different starting points.
 * - This is used to offset the default RNG settings found in the default
 *   Plugin Parameters.
 * 
 * ---
 * 
 * <Conical Light Pattern Type: name>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Uses a premade pattern by this plugin. The pattern will change the
 *   brightness of the light in a sequenced pattern.
 * - Replace 'name' with any of the following text:
 *   - none, normal
 *   - fluorescent, halogen, incandescent
 *   - candle, torch, campfire
 *   - fast strobe, slow strobe
 *   - strong pulse, medium pulse, slow pulse
 *   - underwater
 * 
 * ---
 * 
 * <Conical Light Custom Pattern: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Uses a custom pattern determined by you, the game dev, on how the light's
 *   brightness will change over time.
 * - Replace 'x' with letters of the alphabet from 'a' to 'z'.
 *   - 'a' is completely transparent.
 *   - 'm' is midway in brightness.
 *   - 'z' is the brightest the light can be.
 * - Examples:
 *   - <Conical Light Custom Pattern: mmmmmaaaaammmmmaaaaaabcdefgabcdefg>
 *   - <Conical Light Custom Pattern: nmonqnmomnmomomno>
 *   - <Conical Light Custom Pattern: abcdefghijklmnopqrrqponmlkjihgfedcba>
 * 
 * ---
 * 
 * <Conical Light Pattern Delay: x>
 * 
 * - Used for: Event Notetags and Event Page Comment Tags
 * - Determines how many frames to wait before going to the next part of the
 *   preset pattern and/or custom pattern.
 * - Replace 'x' with a number representing the frames the conical light needs
 *   to wait before moving forward in the pattern.
 *   - Lower numbers mean faster (minimum: 1).
 *   - Higher numbers mean slower.
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
 * === Overlay Plugin Commands ===
 * 
 * ---
 * 
 * OVERLAY: Change to Preset Color
 * - Change current darkness overlay to a preset color and opacity level.
 * 
 *   Color: 
 *   - Pick a preset color.
 *   - This will also come with predetermined opacity values.
 * 
 *   Duration:
 *   - What is the duration of the color change?
 * 
 * ---
 * 
 * OVERLAY: Change to Custom Color
 * - Change current darkness overlay to a custom color.
 * 
 *   Color:
 *   - Custom color.
 *   - This uses #rrggbb format.
 *   - Check your color here: https://htmlcolorcodes.com/
 * 
 *   Opacity:
 *   - Opacity level of the color.
 *   - Value between 0-255.
 *   - Transparent: 0. Opaque: 255.
 * 
 *   Duration:
 *   - What is the duration of the color change?
 * 
 * ---
 * 
 * === Battle Light Plugin Commands ===
 * 
 * ---
 * 
 * BATTLE LIGHT: Change Actor(s) Settings
 * - Change the battle-radial light settings for target(s).
 * 
 *   Actor ID(s):
 *   - Target actor(s) you want to change light settings for.
 *   - You may use JavaScript code.
 * 
 *   Settings:
 *   - Change the radial light settings for the target(s).
 * 
 *   Behavior:
 *   - Change the behaviors for this radial light.
 * 
 *   Auto-Calc Radius:
 *   - Automatically calculates the radius size based on sprite's width/height.
 * 
 * ---
 * 
 * BATTLE LIGHT: Change Enemy(s) Settings
 * - Change the battle-radial light settings for target(s).
 * 
 *   Enemy Index(es):
 *   - Select enemy troop index(es) to change light settings for.
 *   - You may use JavaScript code.
 * 
 *   Settings:
 *   - Change the radial light settings for the target(s).
 * 
 *   Behavior:
 *   - Change the behaviors for this radial light.
 * 
 *   Auto-Calc Radius:
 *   - Automatically calculates the radius size based on sprite's width/height.
 * 
 * ---
 * 
 * === Radial Light Plugin Commands ===
 * 
 * ---
 *
 * RADIAL LIGHT: Change Player Settings
 * - Change the radial light settings for the player.
 *
 *   Settings:
 *   - Change the radial light settings for the player.
 *   - See "Radial Light Settings" section below.
 * 
 *   Behavior:
 *   - Change the behaviors for this radial light.
 *   - See "Behavior" section below.
 *
 * ---
 *
 * RADIAL LIGHT: Change Follower Settings
 * - Change the radial light settings for followers.
 *
 *   Settings:
 *   - Change the radial light settings for all followers.
 *   - See "Radial Light Settings" section below.
 * 
 *   Behavior:
 *   - Change the behaviors for this radial light.
 *   - See "Behavior" section below.
 *
 * ---
 *
 * RADIAL LIGHT: Change Event(s) Settings
 * - Change the radial light settings for target event(s).
 *
 *   Event ID(s):
 *   - Target event(s) to have their light settings changed.
 *   - Use 0 for "this event".
 *   - You may use JavaScript code.
 *
 *   Settings:
 *   - Change the radial light settings for target event(s).
 *   - See "Radial Light Settings" section below.
 * 
 *   Behavior:
 *   - Change the behaviors for this radial light.
 *   - See "Behavior" section below.
 *
 * ---
 *
 * RADIAL LIGHT: Change Boat Settings
 * - Change the radial light settings for the boat vehicle.
 * 
 *   Boarded:
 * 
 *     Radial Light:
 *     - Changed radial light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 * 
 *   Unboarded:
 * 
 *     Radial Light:
 *     - Changed radial light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 *
 * ---
 *
 * RADIAL LIGHT: Change Ship Settings
 * - Change the radial light settings for the ship vehicle.
 * 
 *   Boarded:
 * 
 *     Radial Light:
 *     - Changed radial light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 * 
 *   Unboarded:
 * 
 *     Radial Light:
 *     - Changed radial light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 *
 * ---
 *
 * RADIAL LIGHT: Change Airship Settings
 * - Change the radial light settings for the airship vehicle.
 * 
 *   Boarded:
 * 
 *     Radial Light:
 *     - Changed radial light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 * 
 *   Unboarded:
 * 
 *     Radial Light:
 *     - Changed radial light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 *
 * ---
 * 
 * === Conical Light Plugin Commands ===
 * 
 * ---
 *
 * CONICAL LIGHT: Change Player Settings
 * - Change the conical light settings for the player.
 *
 *   Settings:
 *   - Change the conical light settings for the player.
 *   - See "Conical Light Settings" section below.
 * 
 *   Behavior:
 *   - Change the behaviors for this conical light.
 *   - See "Behavior" section below.
 *
 * ---
 *
 * CONICAL LIGHT: Change Follower Settings
 * - Change the conical light settings for followers.
 *
 *   Settings:
 *   - Change the conical light settings for all followers.
 *   - See "Conical Light Settings" section below.
 * 
 *   Behavior:
 *   - Change the behaviors for this conical light.
 *   - See "Behavior" section below.
 *
 * ---
 *
 * CONICAL LIGHT: Change Event(s) Settings
 * - Change the conical light settings for target event(s).
 *
 *   Event ID(s):
 *   - Target event(s) to have their light settings changed.
 *   - Use 0 for "this event".
 *   - You may use JavaScript code.
 *
 *   Settings:
 *   - Change the conical light settings for target event(s).
 *   - See "Conical Light Settings" section below.
 * 
 *   Behavior:
 *   - Change the behaviors for this conical light.
 *   - See "Behavior" section below.
 *
 * ---
 *
 * CONICAL LIGHT: Change Boat Settings
 * - Change the conical light settings for the boat vehicle.
 * 
 *   Boarded:
 * 
 *     Conical Light:
 *     - Changed conical light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these conical lights?
 * 
 *   Unboarded:
 * 
 *     Conical Light:
 *     - Changed conical light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these conical lights?
 *
 * ---
 *
 * CONICAL LIGHT: Change Ship Settings
 * - Change the conical light settings for the ship vehicle.
 * 
 *   Boarded:
 * 
 *     Conical Light:
 *     - Changed conical light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these conical lights?
 * 
 *   Unboarded:
 * 
 *     Conical Light:
 *     - Changed conical light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these conical lights?
 *
 * ---
 *
 * CONICAL LIGHT: Change Airship Settings
 * - Change the conical light settings for the airship vehicle.
 * 
 *   Boarded:
 * 
 *     Conical Light:
 *     - Changed conical light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these conical lights?
 * 
 *   Unboarded:
 * 
 *     Conical Light:
 *     - Changed conical light settings for this vehicle.
 * 
 *       Changed Behavior:
 *       - What are the changed behavioral settings for these radial lights?
 *
 * ---
 * 
 * === Conical Offset Plugin Commands ===
 * 
 * ---
 * 
 * CONICAL OFFSET: Change Actor(s) Settings
 * - Change the conical light hand offset for target actor(s).
 * 
 *   Actor ID(s):
 *   - Target actor(s) you want to change offset settings for.
 *   - You may use JavaScript code.
 * 
 *   Enable:
 *   - Change the offset settings for the target(s).
 * 
 *   Hand Position Offsets:
 *   - Change target(s)'s offsets used for hand positions.
 * 
 *   VS8 Dash Offsets:
 *   - Change target(s)'s offsets used for hand positions for VS8 sprites
 *     while dashing.
 * 
 *   VS8 Jump Offsets:
 *   - Change target(s)'s offsets used for hand positions for VS8 sprites
 *     while jumping.
 * 
 * ---
 * 
 * CONICAL OFFSET: Change Event(s) Settings
 * - Change the conical light hand offset for target event(s).
 * 
 *   Event ID(s):
 *   - Target event(s) you want to change offset settings for.
 *   - Use 0 for "this event".
 *   - You may use JavaScript code.
 * 
 *   Enable:
 *   - Change the offset settings for the target(s).
 * 
 *   Hand Position Offsets:
 *   - Change target(s)'s offsets used for hand positions.
 * 
 *   VS8 Dash Offsets:
 *   - Change target(s)'s offsets used for hand positions for VS8 sprites
 *     while dashing.
 * 
 *   VS8 Jump Offsets:
 *   - Change target(s)'s offsets used for hand positions for VS8 sprites
 *     while jumping.
 * 
 * ---
 *
 * CONICAL LIGHT: Change Ship Settings
 * - Change the conical light hand offset for the Ship vehicle.
 * 
 *   Boarded:
 * 
 *     Changed Offsets:
 *     - Changed offsets used for the "hand" positions of this vehicle.
 * 
 *   Unboarded:
 * 
 *     Changed Offsets:
 *     - Changed offsets used for the "hand" positions of this vehicle.
 *
 * ---
 *
 * CONICAL LIGHT: Change Airship Settings
 * - Change the conical light hand offset for the airship vehicle.
 * 
 *   Boarded:
 * 
 *     Changed Offsets:
 *     - Changed offsets used for the "hand" positions of this vehicle.
 * 
 *   Unboarded:
 * 
 *     Changed Offsets:
 *     - Changed offsets used for the "hand" positions of this vehicle.
 *
 * ---
 *
 * CONICAL LIGHT: Change Boat Settings
 * - Change the conical light hand offset for the boat vehicle.
 * 
 *   Boarded:
 * 
 *     Changed Offsets:
 *     - Changed offsets used for the "hand" positions of this vehicle.
 * 
 *   Unboarded:
 * 
 *     Changed Offsets:
 *     - Changed offsets used for the "hand" positions of this vehicle.
 *
 * ---
 * 
 * === Spawn Light Plugin Commands ===
 * 
 * ---
 * 
 * SPAWN LIGHT: Create Light(s) at Map X/Y
 * - Map only!
 * - Create new light spawn(s) locked to the map.
 * - Use tile coordinates for X and Y.
 * 
 *   Light Settings:
 * 
 *     Settings:
 *     - Change the radial light settings for the light spawn(s).
 * 
 *     Bheavior:
 *     - Change the behaviors for the light spawn(s).
 * 
 *   Coordinates X/Y:
 * 
 *     Origin X:
 *     Origin Y:
 *     - What is the origin X/Y position?
 *     - You may use JavaScript code.
 * 
 *   Spawn Settings:
 * 
 *     JS: Trajectory:
 *     - Code used to determine the trajectory of these lights.
 *     - These will revolve around the origin X/Y position.
 * 
 *     Initial Time:
 *     - What is the initial time value for this light spawn(s)?
 *     - You may use JavaScript code.
 * 
 *       Total Spawns:
 *       - How many light spawns should there be?
 *       - Minimum value: 1.
 *       - You may use JavaScript code.
 * 
 *       Time Increment:
 *       - What is the time increment between spawns?
 * 
 *     Expiration Timer:
 *     - After how many frames will light spawn(s) expire?
 *     - Use 0 for no expiration.
 *     - You may use JavaScript code.
 * 
 * ---
 * 
 * SPAWN LIGHT: Create Light(s) at Screen X/Y
 * - Map only!
 * - Create new light spawn(s) locked to the screen.
 * - The light spawn(s) is unaffected by map scrolling.
 * 
 *   Light Settings:
 * 
 *     Settings:
 *     - Change the radial light settings for the light spawn(s).
 * 
 *     Bheavior:
 *     - Change the behaviors for the light spawn(s).
 * 
 *   Coordinates X/Y:
 * 
 *     Origin X:
 *     Origin Y:
 *     - What is the origin X/Y position?
 *     - You may use JavaScript code.
 * 
 *   Spawn Settings:
 * 
 *     JS: Trajectory:
 *     - Code used to determine the trajectory of these lights.
 *     - These will revolve around the origin X/Y position.
 * 
 *     Initial Time:
 *     - What is the initial time value for this light spawn(s)?
 *     - You may use JavaScript code.
 * 
 *       Total Spawns:
 *       - How many light spawns should there be?
 *       - Minimum value: 1.
 *       - You may use JavaScript code.
 * 
 *       Time Increment:
 *       - What is the time increment between spawns?
 * 
 *     Expiration Timer:
 *     - After how many frames will light spawn(s) expire?
 *     - Use 0 for no expiration.
 *     - You may use JavaScript code.
 * 
 * ---
 * 
 * SPAWN LIGHT: Create Light(s) on Player
 * - Map only!
 * - Create new light spawn(s) following the player.
 * - The light spawn(s) is unaffected by map scrolling.
 * 
 *   Light Settings:
 * 
 *     Settings:
 *     - Change the radial light settings for the light spawn(s).
 * 
 *     Bheavior:
 *     - Change the behaviors for the light spawn(s).
 * 
 *   Spawn Settings:
 * 
 *     JS: Trajectory:
 *     - Code used to determine the trajectory of these lights.
 *     - These will revolve around the origin X/Y position.
 * 
 *     Initial Time:
 *     - What is the initial time value for this light spawn(s)?
 *     - You may use JavaScript code.
 * 
 *       Total Spawns:
 *       - How many light spawns should there be?
 *       - Minimum value: 1.
 *       - You may use JavaScript code.
 * 
 *       Time Increment:
 *       - What is the time increment between spawns?
 * 
 *     Expiration Timer:
 *     - After how many frames will light spawn(s) expire?
 *     - Use 0 for no expiration.
 *     - You may use JavaScript code.
 * 
 * ---
 * 
 * SPAWN LIGHT: Create Light(s) on Follower
 * - Map only!
 * - Create new light spawn(s) following the player.
 * - The light spawn(s) is unaffected by map scrolling.
 * 
 *   Light Settings:
 * 
 *     Settings:
 *     - Change the radial light settings for the light spawn(s).
 * 
 *     Bheavior:
 *     - Change the behaviors for the light spawn(s).
 * 
 *   Target:
 * 
 *     Follower Index:
 *     - Which follower index should the light(s) follow?
 *     - Index starts at 0.
 *     - You may use JavaScript code.
 * 
 *   Spawn Settings:
 * 
 *     JS: Trajectory:
 *     - Code used to determine the trajectory of these lights.
 *     - These will revolve around the origin X/Y position.
 * 
 *     Initial Time:
 *     - What is the initial time value for this light spawn(s)?
 *     - You may use JavaScript code.
 * 
 *       Total Spawns:
 *       - How many light spawns should there be?
 *       - Minimum value: 1.
 *       - You may use JavaScript code.
 * 
 *       Time Increment:
 *       - What is the time increment between spawns?
 * 
 *     Expiration Timer:
 *     - After how many frames will light spawn(s) expire?
 *     - Use 0 for no expiration.
 *     - You may use JavaScript code.
 * 
 * ---
 * 
 * SPAWN LIGHT: Create Light(s) on Event
 * - Map only!
 * - Create new light spawn(s) following the player.
 * - The light spawn(s) is unaffected by map scrolling.
 * 
 *   Light Settings:
 * 
 *     Settings:
 *     - Change the radial light settings for the light spawn(s).
 * 
 *     Bheavior:
 *     - Change the behaviors for the light spawn(s).
 * 
 *   Target:
 * 
 *     Event ID:
 *     - Which map event should the light(s) follow?
 *     - Use 0 for "this event".
 *     - You may use JavaScript code.
 * 
 *   Spawn Settings:
 * 
 *     JS: Trajectory:
 *     - Code used to determine the trajectory of these lights.
 *     - These will revolve around the origin X/Y position.
 * 
 *     Initial Time:
 *     - What is the initial time value for this light spawn(s)?
 *     - You may use JavaScript code.
 * 
 *       Total Spawns:
 *       - How many light spawns should there be?
 *       - Minimum value: 1.
 *       - You may use JavaScript code.
 * 
 *       Time Increment:
 *       - What is the time increment between spawns?
 * 
 *     Expiration Timer:
 *     - After how many frames will light spawn(s) expire?
 *     - Use 0 for no expiration.
 *     - You may use JavaScript code.
 * 
 * ---
 * 
 * === Light-Related Sub Settings ===
 * 
 * ---
 * 
 * Radial Light Settings
 * 
 *   General:
 * 
 *     Enabled?:
 *     - Is this radial light enabled?
 * 
 *   Properties:
 * 
 *     Filename:
 *     - Filename used for the light effect image.
 *     - If used, ignore Color, Radius, and Intensity.
 *     - Image will be centered on the target where the center of the image is
 *       the anchor point and will be rotated.
 * 
 *     Color:
 *     - Color of the radial light in #rrggbb format.
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *     Radius:
 *     - What is the radius of this radial light?
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *     Intensity:
 *     - Radial light intensity. Use value between 0 & 1.
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *   Optional:
 * 
 *     Angle:
 *     - What is the angle of this radial light?
 *     - Only noticeable with using images.
 * 
 *       Rotate Speed:
 *       - The rotation speed of this light?
 *       - Lower: slower. Higher: faster. Negative: reverse.
 * 
 *     Blend Mode:
 *     - What kind of blend mode do you wish to apply to the radial light?
 * 
 *     Opacity:
 *     - What is the opacity (0 to 255)?
 *     - Lower: dimmer. Higher: Brighter.
 * 
 *   Offsets:
 * 
 *     Offset X:
 *     - Offset the X position of this light.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - Offset the Y position of this light.
 *     - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Conical Light Settings
 * 
 *   General:
 *   
 *     Enabled?:
 *     - Is this conical light enabled?
 * 
 *   Properties:
 * 
 *     Filename:
 *     - Filename used for the light effect image.
 *     - If used, ignore Radius, Color, and Intensity.
 * 
 *       Angle Offset:
 *       - Offset the image angle by this many degrees.
 *       - Only applies to images.
 * 
 *       File Anchor X:
 *       File Anchor Y:
 *       - Anchor X/Y used for images.
 *       - For X - Left: 0.0; Center: 0.5; Right: 1.0
 *       - For Y - Top: 0.0; Middle: 0.5; Bottom: 1.0
 * 
 *     Color:
 *     - What is the radius of this conical light?
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *     Radius:
 *     - What is the radius of this conical light?
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *       Source Radius:
 *       - What is the radius of this light source?
 *       - For generated lights only.
 *       - Ignore if using image.
 * 
 *     Intensity:
 *     - Conical light intensity. Use value between 0 & 1.
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *   Optional:
 * 
 *     Blend Mode:
 *     - What kind of blend mode do you wish to apply to the conical light?
 * 
 *     Opacity:
 *     - What is the opacity (0 to 255)?
 *     - Lower: dimmer. Higher: Brighter.
 * 
 *   Angle:
 * 
 *     Arc Angle:
 *     - What is the angle of this conical light's arc?
 * 
 *     Angle Sway:
 *     - How many degrees should this light sway?
 *     - Use 0 for no sway.
 * 
 *     Sway Speed:
 *     - How fast should this light sway?
 *     - Lower: Slower; Higher: Faster
 * 
 *     Randomize Sway?:
 *     - Change the sway to offset at different starting points?
 * 
 *   Direction:
 * 
 *     Forced Direction?:
 *     - Force the conical light to face a certain direction?
 * 
 *     Follow Cursor?
 *     - Follow the mouse cursor?
 * 
 *   Offsets:
 * 
 *     Use Hand Offset?:
 *     - Put the light source on the target's "hand" position?
 *     - Disables the two settings below if on.
 * 
 *     Offset X (Non-Hand):
 *     - Offset the X position of this light.
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y (Non-Hand):
 *     - Offset the Y position of this light.
 *     - Negative: up. Positive: down.
 * 
 * ---
 * 
 * Behavior
 * 
 *   Blink:
 * 
 *     Blink Rate:
 *     - What is the rate of occurance for this effect?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Blink Modifier:
 *     - Static multiplicative opacity modifier. Before additive.
 *     - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 *   Flicker:
 * 
 *     Flicker Rate:
 *     - What is the rate of occurance for this effect?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Flicker Modifier:
 *     - Random multiplicative opacity modifier. Before additive.
 *     - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 *   Flash:
 * 
 *     Flash Rate:
 *     - What is the rate of occurance for this effect?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Flash Modifier:
 *     - Static additive opacity modifier. Before multiplicative.
 *     - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 *   Flare:
 * 
 *     Flare Rate:
 *     - What is the rate of occurance for this effect?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Flare Modifier:
 *     - Random additive opacity modifier. Before multiplicative.
 *     - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 *   Glow:
 * 
 *     Glow Rate:
 *     - What is the glow change for this light?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Glow Speed:
 *     - What is the speed at which glow oscillates at?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Randomize Glow?:
 *     - Offset the glow to oscillate at different starting points?
 * 
 *   Pulse:
 * 
 *     Pulse Rate:
 *     - What is the pulse change for this light?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Pulse Speed:
 *     - What is the speed at which pulse oscillates at?
 *     - Use a decimal number between 0 and 1.
 * 
 *     Randomize Pulse?:
 *     - Offset the pulse to oscillate at different starting points?
 * 
 *   Pattern:
 * 
 *     Pattern Name:
 *     - Select the pattern name for this light.
 *     - Ignore if using any Custom Pattern.
 * 
 *     Custom Pattern:
 *     - Create a custom pattern with letters from a to z.
 *     - Where 'a' is transparent and 'z' is opaque.
 * 
 *     Frame Delay:
 *     - What is the frame delay between pattern updates?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Map Lighting Settings
 * ============================================================================
 *
 * Lighting settings for the map scene. These settings allow you to adjust the
 * default settings used for the majority of lighting types and behaviors
 * across the player character, followers, events, and the various vehicles.
 *
 * ---
 *
 * General
 * 
 *   Enable For Map?:
 *   - Enable Lighting Effects for map?
 * 
 *   Shake Buffer:
 *   - Screen shakes reveal more of the screen than normal.
 *   - How many pixels of buffer should you provide?
 *
 * ---
 *
 * Player Defaults
 * 
 *   Radial Light:
 *   - Default radial light settings for this target.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for this light?
 * 
 *   Conical Light:
 *   - Default radial light settings for this target.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for this light?
 * 
 * ---
 * 
 * Follower Defaults
 * 
 *   Radial Light:
 *   - Default radial light settings for this target.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for this light?
 * 
 *   Conical Light:
 *   - Default radial light settings for this target.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for this light?
 * 
 * ---
 * 
 * Event Defaults
 * 
 *   Radial Light:
 *   - Default radial light settings for this target.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for this light?
 * 
 *   Conical Light:
 *   - Default radial light settings for this target.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for this light?
 * 
 * ---
 * 
 * Vehicles
 * 
 *   Boat:
 *   Ship:
 *   Airship:
 * 
 *     Boarded:
 * 
 *       Radial Light:
 *       - Default radial light settings for this target.
 * 
 *         Default Behavior:
 *         - What are the default behavioral settings for this light?
 * 
 *       Conical Light:
 *       - Default radial light settings for this target.
 * 
 *         Default Behavior:
 *         - What are the default behavioral settings for this light?
 * 
 *         "Hand" Offsets:
 *         - Default offsets used for the "hand" positions of this vehicle.
 * 
 *     Unboarded:
 * 
 *       Radial Light:
 *       - Default radial light settings for this target.
 * 
 *         Default Behavior:
 *         - What are the default behavioral settings for this light?
 * 
 *       Conical Light:
 *       - Default radial light settings for this target.
 * 
 *         Default Behavior:
 *         - What are the default behavioral settings for this light?
 * 
 *         "Hand" Offsets:
 *         - Default offsets used for the "hand" positions of this vehicle.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Hand Position, VS8 Dash, VS8 Jump Offsets
 * ============================================================================
 *
 * Default offsets used for hand positions. These are for conical lights and
 * help determine where the light source should come from to avoid making the
 * conical light look weird by having lights come from the user's face or chest
 * as seen with other lighting plugins.
 * 
 * There are also separate settings for those using VS8 sprites for dashing and
 * jumping positions. Be sure to adjust them accordingly.
 *
 * ---
 *
 * Standard Directions
 * 
 *   Down:
 *   Up:
 *   Left:
 *   Right:
 *   - Offsets to determine conical light source position when facing
 *     this direction.
 * 
 * ---
 * 
 * Diagonal Directions
 * 
 *   Lower Left:
 *   Lower Right:
 *   Upper Left:
 *   Upper Right:
 *   - Offsets to determine conical light source position when facing
 *     this direction.
 *
 * ---
 *
 * Pattern Offsets:
 * 
 *   Pattern 0-10:
 * 
 *     Offset X:
 *     - What is the offset X for this pattern?
 *     - Negative: left. Positive: right.
 * 
 *     Offset Y:
 *     - What is the offset Y for this pattern?
 *     - Negative: up. Positive: down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Anti-Light Settings
 * ============================================================================
 *
 * Anti-Light regions and terrain tags can be used to mark certain tiles from
 * being affected by light at all. These tiles can be used as ceiling tiles or
 * areas outside of the map boundaries where light doesn't normally reach.
 * 
 * Keep in mind that this does NOT block light from passing through it. If a
 * light source is big enough to engulf the tiles past the anti-light marked
 * tiles, those tiles will still be lit up by any light sources. Therefore, you
 * need to mark those tiles on the map to be anti-light as well in addition to
 * planning out your maps for potential light piercing through the tiles.
 * 
 * There are two kinds of anti-light types. Hard edges and soft edges. Hard
 * Edges are extremely rough and box like. Soft Edges will smooth out towards
 * regularly lit tiles.
 *
 * ---
 *
 * Hard Edges
 * 
 *   Regions:
 *   - Which regions by default apply anti-light?
 *   - 0 is ignored. Use a number from 1 to 255.
 * 
 *   Terrain Tags:
 *   - Which terrain tags by default apply anti-light?
 *   - 0 is ignored. Use a number from 1 to 7.
 *
 * ---
 *
 * Soft Edges
 * 
 *   Regions:
 *   - Which regions by default apply anti-light?
 *   - 0 is ignored. Use a number from 1 to 255.
 * 
 *   Terrain Tags:
 *   - Which terrain tags by default apply anti-light?
 *   - 0 is ignored. Use a number from 1 to 7.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle Lighting Settings
 * ============================================================================
 *
 * Lighting settings for the battle scene. The VisuStella MZ Battle Core is
 * required in order for lighting effects to work in-battle.
 *
 * ---
 *
 * General
 * 
 *   Enable For Battle?:
 *   - Enable Lighting Effects for battles?
 *   - Requires VisuStella MZ Battle Core!
 * 
 * ---
 * 
 * Actor Defaults
 * 
 *   Battle Light:
 *   - Default battle-radial light settings for actors.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for actor radial lights?
 * 
 *     Auto-Calc Radius:
 *     - Automatically calculates the radius size based on sprite's
 *       width/height.
 *     - Ignore if use <Radial Light Radius: x>.
 *
 * ---
 * 
 * Enemy Defaults
 * 
 *   Battle Light:
 *   - Default battle-radial light settings for enemies.
 * 
 *     Default Behavior:
 *     - What are the default behavioral settings for enemy radial lights?
 * 
 *     Auto-Calc Radius:
 *     - Automatically calculates the radius size based on sprite's
 *       width/height.
 *     - Ignore if use <Radial Light Radius: x>.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Light Regions Settings
 * ============================================================================
 *
 * Tiles marked with these regions will automatically have white light spawned
 * on top of them. However, depending on the group the region belongs to, the
 * light spawned will have varying degrees of opacity. This means some places
 * can be less lit while others can be darker.
 * 
 * This can be used to light up certain parts of the map automatically while
 * requiring others to be lit with standard lighting.
 * 
 * This is also helpful for those who wish to keep their parallax fully lit
 * (since it will be affected by the darkness overlay) without having to put in
 * a lot of light sources.
 *
 * ---
 *
 * Auto-Light Regions
 * 
 *   Opacity - 100%:
 *   to
 *   Opacity - 5%:
 *   - Mark the regions with this opacity level.
 *   - Light color will be white. Use Region ID's (1 to 255).
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Preset Color Settings
 * ============================================================================
 *
 * If you happen to not like the preset colors used by this plugin, you can
 * redefine them using different hexidecimal values for you own touch. If you
 * are unsure of what the hexidecimal values are, please use an online site
 * like: https://htmlcolorcodes.com/
 *
 * ---
 *
 * Daytime Colors
 * Greyscale Colors
 * Red Colors
 * Orange Colors
 * Yellow Colors
 * Green Colors
 * Cyan Colors
 * Blue Colors
 * Purple Colors
 * Magenta Colors
 * Pink Colors
 * Brown Colors
 * Misc Colors
 * 
 *   Preset Color Name:
 *   - Preset's hex color in #rrggbb format.
 *   - Check your color here: https://htmlcolorcodes.com/
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Menu Settings
 * ============================================================================
 *
 * Lighting settings for the options scene. These are for the players who
 * aren't fond of blinking or oscillating lights in case they bother them.
 *
 * ---
 *
 * Options
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 *   - Ignore if using the VisuStella MZ Options Core.
 * 
 * ---
 * 
 * Blinking Lights
 * 
 *   Add Option?:
 *   - Add the 'Blinking Lights' option to the Options menu?
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 * ---
 * 
 * Pulsing Lights
 * 
 *   Add Option?:
 *   - Add the 'Pulsing Lights' option to the Options menu?
 * 
 *   Option Name:
 *   - Command name of the option.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Radial Light Settings
 * ============================================================================
 *
 * These are sub-settings found in the other settings lists. These settings
 * adjust the default/primary properties of radial lights for the specific
 * user type.
 *
 * --- 
 * 
 * General:
 * 
 *   Enabled?:
 *   - Is this radial light enabled?
 * 
 * ---
 * 
 * Properties:
 * 
 *   Filename:
 *   - Filename used for the light effect image.
 *   - If used, ignore Color, Radius, and Intensity.
 *   - Image will be centered on the target where the center of the image is
 *     the anchor point and will be rotated.
 * 
 *   Color:
 *   - Color of the radial light in #rrggbb format.
 *   - For generated lights only.
 *   - Ignore if using image.
 * 
 *   Radius:
 *   - What is the radius of this radial light?
 *   - For generated lights only.
 *   - Ignore if using image.
 * 
 *   Intensity:
 *   - Radial light intensity. Use value between 0 & 1.
 *   - For generated lights only.
 *   - Ignore if using image.
 * 
 * ---
 * 
 * Optional:
 * 
 *   Angle:
 *   - What is the angle of this radial light?
 *   - Only noticeable with using images.
 * 
 *     Rotate Speed:
 *     - The rotation speed of this light?
 *     - Lower: slower. Higher: faster. Negative: reverse.
 * 
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the radial light?
 * 
 *   Opacity:
 *   - What is the opacity (0 to 255)?
 *   - Lower: dimmer. Higher: Brighter.
 * 
 * ---
 * 
 * Offsets:
 * 
 *   Offset X:
 *   - Offset the X position of this light.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the Y position of this light.
 *   - Negative: up. Positive: down.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Conical Light Settings
 * ============================================================================
 *
 * These are sub-settings found in the other settings lists. These settings
 * adjust the default/primary properties of conical lights for the specific
 * user type.
 *
 * --- 
 * 
 * General:
 * 
 *   Enabled?:
 *   - Is this conical light enabled?
 * 
 * ---
 * 
 * Properties:
 * 
 *   Filename:
 *   - Filename used for the light effect image.
 *   - If used, ignore Radius, Color, and Intensity.
 * 
 *     Angle Offset:
 *     - Offset the image angle by this many degrees.
 *     - Only applies to images.
 * 
 *     File Anchor X:
 *     File Anchor Y:
 *     - Anchor X/Y used for images.
 *     - For X - Left: 0.0; Center: 0.5; Right: 1.0
 *     - For Y - Top: 0.0; Middle: 0.5; Bottom: 1.0
 * 
 *   Color:
 *   - What is the radius of this conical light?
 *   - For generated lights only.
 *   - Ignore if using image.
 * 
 *   Radius:
 *   - What is the radius of this conical light?
 *   - For generated lights only.
 *   - Ignore if using image.
 * 
 *     Source Radius:
 *     - What is the radius of this light source?
 *     - For generated lights only.
 *     - Ignore if using image.
 * 
 *   Intensity:
 *   - Conical light intensity. Use value between 0 & 1.
 *   - For generated lights only.
 *   - Ignore if using image.
 * 
 * ---
 * 
 * Optional:
 * 
 *   Blend Mode:
 *   - What kind of blend mode do you wish to apply to the radial light?
 * 
 *   Opacity:
 *   - What is the opacity (0 to 255)?
 *   - Lower: dimmer. Higher: Brighter.
 * 
 * ---
 * 
 * Angle:
 * 
 *   Arc Angle:
 *   - What is the angle of this conical light's arc?
 * 
 *   Angle Sway:
 *   - How many degrees should this light sway?
 *   - Use 0 for no sway.
 * 
 *   Sway Speed:
 *   - How fast should this light sway?
 *   - Lower: Slower; Higher: Faster
 * 
 *   Randomize Sway?:
 *   - Change the sway to offset at different starting points?
 * 
 * ---
 * 
 * Direction:
 * 
 *   Forced Direction?:
 *   - Force the conical light to face a certain direction?
 * 
 *   Follow Cursor?
 *   - Follow the mouse cursor?
 * 
 * ---
 * 
 * Offsets:
 * 
 *   Offset X:
 *   - Offset the X position of this light.
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - Offset the Y position of this light.
 *   - Negative: up. Positive: down.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Light Behavior Settings
 * ============================================================================
 *
 * These are sub-settings found in the other settings lists. These settings
 * adjust the default/primary patterns of how lights behave for the specific
 * user type.
 *
 * --- 
 * 
 * Blink:
 * 
 *   Blink Rate:
 *   - What is the rate of occurance for this effect?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Blink Modifier:
 *   - Static multiplicative opacity modifier. Before additive.
 *   - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 * ---
 * 
 * Flicker:
 * 
 *   Flicker Rate:
 *   - What is the rate of occurance for this effect?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Flicker Modifier:
 *   - Random multiplicative opacity modifier. Before additive.
 *   - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 * ---
 * 
 * Flash:
 * 
 *   Flash Rate:
 *   - What is the rate of occurance for this effect?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Flash Modifier:
 *   - Static additive opacity modifier. Before multiplicative.
 *   - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 * ---
 * 
 * Flare:
 * 
 *   Flare Rate:
 *   - What is the rate of occurance for this effect?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Flare Modifier:
 *   - Random additive opacity modifier. Before multiplicative.
 *   - Use a decimal number between -1 and 1. Negatives allowed.
 * 
 * ---
 * 
 * Glow:
 * 
 *   Glow Rate:
 *   - What is the glow change for this light?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Glow Speed:
 *   - What is the speed at which glow oscillates at?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Randomize Glow?:
 *   - Offset the glow to oscillate at different starting points?
 * 
 * ---
 * 
 * Pulse:
 * 
 *   Pulse Rate:
 *   - What is the pulse change for this light?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Pulse Speed:
 *   - What is the speed at which pulse oscillates at?
 *   - Use a decimal number between 0 and 1.
 * 
 *   Randomize Pulse?:
 *   - Offset the pulse to oscillate at different starting points?
 * 
 * ---
 * 
 * Pattern:
 * 
 *   Pattern Name:
 *   - Select the pattern name for this light.
 *   - Ignore if using any Custom Pattern.
 * 
 *   Custom Pattern:
 *   - Create a custom pattern with letters from a to z.
 *   - Where 'a' is transparent and 'z' is opaque.
 * 
 *   Frame Delay:
 *   - What is the frame delay between pattern updates?
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
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.04: February 16, 2023
 * * Feature Update!
 * ** During events, touch-directed flashlight movement will not occur to
 *    prevent the player character from facing different directions than
 *    intended. Update made by Irina.
 * 
 * Version 1.03: May 5, 2022
 * * Bug Fixes!
 * ** Vehicles no longer auto put out light in the upper left corner of the map
 *    when they have no graphic. Fix made by Irina.
 * 
 * Version 1.02: March 31, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina:
 * *** <Hard Anti-Light Regions: x, x, x>
 * *** <Hard Anti-Light Terrain Tags: x, x, x>
 * *** <Soft Anti-Light Regions: x, x, x>
 * *** <Soft Anti-Light Terrain Tags: x, x, x>
 * **** Tiles marked by these regions/terrain tags won't have any light shown
 *      on them.
 * **** This does NOT block light from going to the other side. If the light
 *      radius is large enough, it will pierce through to the other side. It
 *      just won't be visible on the region marked tiles.
 * ** New Plugin Parameters added by Irina:
 * *** Anti-Light Settings
 * **** Anti-Light regions and terrain tags can be used to mark certain tiles
 *      from being affected by light at all. These tiles can be used as ceiling
 *      tiles or areas outside of the map boundaries where light doesn't
 *      normally reach.
 * **** Keep in mind that this does NOT block light from passing through it. If
 *      a light source is big enough to engulf the tiles past the anti-light
 *      marked tiles, those tiles will still be lit up by any light sources.
 *      Therefore, you need to mark those tiles on the map to be anti-light as
 *      well in addition to planning out your maps for potential light piercing
 *      through the tiles.
 * **** There are two kinds of anti-light types. Hard edges and soft edges.
 *      Hard Edges are extremely rough and box like. Soft Edges will smooth out
 *      towards regularly lit tiles.
 * 
 * Version 1.01: March 24, 2022
 * * Bug Fixes!
 * ** Updated battle radial light positions for games where the UI resolution
 *    is not the same as the Screen resolution. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update
 * ** Changed the position of "Use Hand Offset?" in the Plugin Parameters for
 *    more clarity in regards to Conical Lights.
 * ** Added "(Non-Hand)" to the respective Offset X and Offset Y plugin
 *    parameter names for those who missed the description of the previous
 *    Plugin Parameter.
 * * New Features!
 * ** New Plugin Parameters added by Irina.
 * *** Plugin Parameters > Preset Colors Settings
 * **** You can now define what hex codes are used for each preset color.
 * 
 * Version 1.00 Official Release Date: April 8, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Overlay
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_Overlay
 * @text Category - Overlay
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OverlayChangeToPreset
 * @text OVERLAY: Change to Preset Color
 * @desc Change current darkness overlay to a preset color and opacity level.
 *
 * @arg Color:str
 * @text Color
 * @type select
 * @option Normal
 * @option -
 * @option Dawn
 * @option Day
 * @option Dusk
 * @option Night
 * @option -
 * @option White
 * @option Light Grey
 * @option Grey
 * @option Dark Grey
 * @option Black
 * @option -
 * @option Light Red
 * @option Red
 * @option Dark Red
 * @option -
 * @option Light Orange
 * @option Orange
 * @option Dark Orange
 * @option -
 * @option Light Yellow
 * @option Yellow
 * @option Dark Yellow
 * @option -
 * @option Light Green
 * @option Green
 * @option Dark Green
 * @option -
 * @option Light Cyan
 * @option Cyan
 * @option Dark Cyan
 * @option -
 * @option Light Blue
 * @option Blue
 * @option Dark Blue
 * @option -
 * @option Light Purple
 * @option Purple
 * @option Dark Purple
 * @option -
 * @option Light Magenta
 * @option Magenta
 * @option Dark Magenta
 * @option -
 * @option Light Pink
 * @option Pink
 * @option Dark Pink
 * @option -
 * @option Light Brown
 * @option Brown
 * @option Dark Brown
 * @option -
 * @desc Pick a preset color. This will also come with predetermined opacity values.
 * @default Night
 *
 * @arg Duration:num
 * @text Duration
 * @desc What is the duration of the color change?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command OverlayChangeToCustomColor
 * @text OVERLAY: Change to Custom Color
 * @desc Change current darkness overlay to a custom color.
 *
 * @arg Color:str
 * @text Color
 * @desc Custom color. This uses #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @arg Opacity:num
 * @text Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Opacity level of the color. Value between 0-255.
 * Transparent: 0. Opaque: 255.
 * @default 255
 *
 * @arg Duration:num
 * @text Duration
 * @desc What is the duration of the color change?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_BattleLight
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_BattleLight
 * @text Category - Battle Light
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleLightChangeActorSettings
 * @text BATTLE LIGHT: Change Actor(s) Settings
 * @desc Change the battle-radial light settings for target(s).
 * 
 * @arg ActorID:arrayeval
 * @text Actor ID(s)
 * @type actor[]
 * @desc Target actor(s) you want to change light settings for.
 * You may use JavaScript code.
 * @default ["1"]
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Radial>
 * @desc Change the radial light settings for the target(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"64","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"128","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this radial light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg AutoRadius:eval
 * @text Auto-Calc Radius
 * @type boolean
 * @on Calculate Radius
 * @off Use Default Radius
 * @desc Automatically calculates the radius size based on sprite's
 * width/height.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BattleLightChangeEnemySettings
 * @text BATTLE LIGHT: Change Enemy(s) Settings
 * @desc Change the battle-radial light settings for target(s).
 *
 * @arg EnemyIndex:arrayeval
 * @text Enemy Index(es)
 * @type string[]
 * @desc Select enemy troop index(es) to change light settings for.
 * You may use JavaScript code.
 * @default ["0"]
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Radial>
 * @desc Change the radial light settings for the target(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"64","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"128","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this radial light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg AutoRadius:eval
 * @text Auto-Calc Radius
 * @type boolean
 * @on Calculate Radius
 * @off Use Default Radius
 * @desc Automatically calculates the radius size based on sprite's
 * width/height.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_RadialLight
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_RadialLight
 * @text Category - Radial Light
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RadialLightChangePlayerSettings
 * @text RADIAL LIGHT: Change Player Settings
 * @desc Change the radial light settings for the player.
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Radial>
 * @desc Change the radial light settings for the player.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","radius:num":"216","color:str":"#ffffff","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this radial light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RadialLightChangeFollowerSettings
 * @text RADIAL LIGHT: Change Follower Settings
 * @desc Change the radial light settings for followers.
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Radial>
 * @desc Change the radial light settings for all followers.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","radius:num":"216","color:str":"#ffffff","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this radial light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RadialLightChangeEventSettings
 * @text RADIAL LIGHT: Change Event(s) Settings
 * @desc Change the radial light settings for target event(s).
 * 
 * @arg EventID:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc Target event(s) to have their light settings changed.
 * Use 0 for "this event". You may use JavaScript code.
 * @default ["0"]
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Radial>
 * @desc Change the radial light settings for target event(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","radius:num":"72","color:str":"#ffffff","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this radial light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RadialLightChangeBoatSettings
 * @text RADIAL LIGHT: Change Boat Settings
 * @desc Change the radial light settings for the boat vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedSettings:struct
 * @text Radial Light
 * @parent Boarded
 * @type struct<Radial>
 * @desc Changed radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"240","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"128","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg BoardedBehavior:struct
 * @text Changed Behavior
 * @parent BoardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg Unboarded
 * @parent Boat
 * 
 * @arg UnboardedSettings:struct
 * @text Radial Light
 * @parent Unboarded
 * @type struct<Radial>
 * @desc Changed radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"72","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg UnboardedBehavior:struct
 * @text Changed Behavior
 * @parent UnboardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RadialLightChangeShipSettings
 * @text RADIAL LIGHT: Change Ship Settings
 * @desc Change the radial light settings for the ship vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedSettings:struct
 * @text Radial Light
 * @parent Boarded
 * @type struct<Radial>
 * @desc Changed radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"300","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"160","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg BoardedBehavior:struct
 * @text Changed Behavior
 * @parent BoardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedSettings:struct
 * @text Radial Light
 * @parent Unboarded
 * @type struct<Radial>
 * @desc Changed radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"72","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg UnboardedBehavior:struct
 * @text Changed Behavior
 * @parent UnboardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command RadialLightChangeAirshipSettings
 * @text RADIAL LIGHT: Change Airship Settings
 * @desc Change the radial light settings for the airship vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedSettings:struct
 * @text Radial Light
 * @parent Boarded
 * @type struct<Radial>
 * @desc Changed radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"360","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"192","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg BoardedBehavior:struct
 * @text Changed Behavior
 * @parent BoardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedSettings:struct
 * @text Radial Light
 * @parent Unboarded
 * @type struct<Radial>
 * @desc Changed radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"72","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg UnboardedBehavior:struct
 * @text Changed Behavior
 * @parent UnboardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ConicalLight
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_ConicalLight
 * @text Category - Conical Light
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalLightChangePlayerSettings
 * @text CONICAL LIGHT: Change Player Settings
 * @desc Change the conical light settings for the player.
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Conical>
 * @desc Change the conical light settings for the player.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"240","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"6","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","followMouse:eval":"true","useHandOffset:eval":"true","forceDirection:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this conical light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalLightChangeFollowerSettings
 * @text CONICAL LIGHT: Change Follower Settings
 * @desc Change the conical light settings for followers.
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Conical>
 * @desc Change the conical light settings for all followers.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"240","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"6","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","followMouse:eval":"false","useHandOffset:eval":"true","forceDirection:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this conical light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalLightChangeEventSettings
 * @text CONICAL LIGHT: Change Event(s) Settings
 * @desc Change the conical light settings for target event(s).
 * 
 * @arg EventID:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc Target event(s) to have their light settings changed.
 * Use 0 for "this event". You may use JavaScript code.
 * @default ["0"]
 *
 * @arg Settings:struct
 * @text Settings
 * @type struct<Conical>
 * @desc Change the conical light settings for target event(s).
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"240","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"6","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","followMouse:eval":"false","useHandOffset:eval":"true","forceDirection:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @type struct<Behavior>
 * @desc Change the behaviors for this conical light.
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalLightChangeBoatSettings
 * @text CONICAL LIGHT: Change Boat Settings
 * @desc Change the conical light settings for the boat vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedSettings:struct
 * @text Conical Light
 * @parent Boarded
 * @type struct<Conical>
 * @desc Changed conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"360","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg BoardedBehavior:struct
 * @text Changed Behavior
 * @parent BoardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedSettings:struct
 * @text Conical Light
 * @parent Unboarded
 * @type struct<Conical>
 * @desc Changed conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"360","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg UnboardedBehavior:struct
 * @text Changed Behavior
 * @parent UnboardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalLightChangeShipSettings
 * @text CONICAL LIGHT: Change Ship Settings
 * @desc Change the conical light settings for the ship vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedSettings:struct
 * @text Conical Light
 * @parent Boarded
 * @type struct<Conical>
 * @desc Changed conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"480","miniRadius:num":"16","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"75","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg BoardedBehavior:struct
 * @text Changed Behavior
 * @parent BoardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedSettings:struct
 * @text Conical Light
 * @parent Unboarded
 * @type struct<Conical>
 * @desc Changed conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"360","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg UnboardedBehavior:struct
 * @text Changed Behavior
 * @parent UnboardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalLightChangeAirshipSettings
 * @text CONICAL LIGHT: Change Airship Settings
 * @desc Change the conical light settings for the airship vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedSettings:struct
 * @text Conical Light
 * @parent Boarded
 * @type struct<Conical>
 * @desc Changed conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"600","miniRadius:num":"32","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"90","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg BoardedBehavior:struct
 * @text Changed Behavior
 * @parent BoardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedSettings:struct
 * @text Conical Light
 * @parent Unboarded
 * @type struct<Conical>
 * @desc Changed conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"360","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @arg UnboardedBehavior:struct
 * @text Changed Behavior
 * @parent UnboardedSettings:struct
 * @type struct<Behavior>
 * @desc What are the changed behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_ConicalOffset
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_ConicalOffset
 * @text Category - Conical Offset
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalOffsetChangeActor
 * @text CONICAL OFFSET: Change Actor(s) Settings
 * @desc Change the conical light hand offset for target actor(s).
 * 
 * @arg ActorID:arrayeval
 * @text Actor ID(s)
 * @type actor[]
 * @desc Target actor(s) you want to change offset settings for.
 * You may use JavaScript code.
 * @default ["1"]
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Hand Offset
 * @off Center Offset
 * @desc Change the offset settings for the target(s).
 * @default true
 * 
 * @arg HandOffset:struct
 * @text Hand Position Offsets
 * @type struct<HandOffset>
 * @desc Change target(s)'s offsets used for hand positions.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-12\",\"pattern0Y:num\":\"+14\",\"Pattern1\":\"\",\"pattern1X:num\":\"-12\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"-12\",\"pattern2Y:num\":\"+18\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+2\",\"pattern0Y:num\":\"+16\",\"Pattern1\":\"\",\"pattern1X:num\":\"+4\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"+6\",\"pattern2Y:num\":\"+16\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-2\",\"pattern0Y:num\":\"+16\",\"Pattern1\":\"\",\"pattern1X:num\":\"-4\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"-6\",\"pattern2Y:num\":\"+16\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+12\",\"pattern0Y:num\":\"-18\",\"Pattern1\":\"\",\"pattern1X:num\":\"+12\",\"pattern1Y:num\":\"-16\",\"Pattern2\":\"\",\"pattern2X:num\":\"+12\",\"pattern2Y:num\":\"-14\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @arg VsDashOffset:struct
 * @text VS8 Dash Offsets
 * @type struct<HandOffset>
 * @desc Change target(s)'s offsets used for hand positions for VS8 sprites while dashing.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @arg VsJumpOffset:struct
 * @text VS8 Jump Offsets
 * @type struct<HandOffset>
 * @desc Change target(s)'s offsets used for hand positions for VS8 sprites while jumping.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalOffsetChangeEvent
 * @text CONICAL OFFSET: Change Event(s) Settings
 * @desc Change the conical light hand offset for target event(s).
 * 
 * @arg EventID:arrayeval
 * @text Event ID(s)
 * @type string[]
 * @desc Target event(s) you want to change offset settings for.
 * Use 0 for "this event". You may use JavaScript code.
 * @default ["0"]
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Hand Offset
 * @off Center Offset
 * @desc Change the offset settings for the target(s).
 * @default true
 * 
 * @arg HandOffset:struct
 * @text Hand Position Offsets
 * @type struct<HandOffset>
 * @desc Change target(s)'s offsets used for hand positions.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-12\",\"pattern0Y:num\":\"+14\",\"Pattern1\":\"\",\"pattern1X:num\":\"-12\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"-12\",\"pattern2Y:num\":\"+18\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+2\",\"pattern0Y:num\":\"+16\",\"Pattern1\":\"\",\"pattern1X:num\":\"+4\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"+6\",\"pattern2Y:num\":\"+16\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-2\",\"pattern0Y:num\":\"+16\",\"Pattern1\":\"\",\"pattern1X:num\":\"-4\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"-6\",\"pattern2Y:num\":\"+16\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+12\",\"pattern0Y:num\":\"-18\",\"Pattern1\":\"\",\"pattern1X:num\":\"+12\",\"pattern1Y:num\":\"-16\",\"Pattern2\":\"\",\"pattern2X:num\":\"+12\",\"pattern2Y:num\":\"-14\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @arg VsDashOffset:struct
 * @text VS8 Dash Offsets
 * @type struct<HandOffset>
 * @desc Change target(s)'s offsets used for hand positions for VS8 sprites while dashing.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @arg VsJumpOffset:struct
 * @text VS8 Jump Offsets
 * @type struct<HandOffset>
 * @desc Change target(s)'s offsets used for hand positions for VS8 sprites while jumping.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalOffsetChangeBoat
 * @text CONICAL OFFSET: Change Boat Settings
 * @desc Change the conical light hand offset for the boat vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedOffset:struct
 * @text Changed Offsets
 * @parent Boarded
 * @type struct<HandOffset>
 * @desc Changed offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"-23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"+23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedOffset:struct
 * @text Changed Offsets
 * @parent Unboarded
 * @type struct<HandOffset>
 * @desc Changed offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"-23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"+23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalOffsetChangeShip
 * @text CONICAL OFFSET: Change Ship Settings
 * @desc Change the conical light hand offset for the ship vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedOffset:struct
 * @text Changed Offsets
 * @parent Boarded
 * @type struct<HandOffset>
 * @desc Changed offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"-24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-24\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-23\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-24\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedOffset:struct
 * @text Changed Offsets
 * @parent Unboarded
 * @type struct<HandOffset>
 * @desc Changed offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"-24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-24\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-23\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-24\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ConicalOffsetChangeAirship
 * @text CONICAL OFFSET: Change Airship Settings
 * @desc Change the conical light hand offset for the airship vehicle.
 *
 * @arg Boarded
 * 
 * @arg BoardedOffset:struct
 * @text Changed Offsets
 * @parent Boarded
 * @type struct<HandOffset>
 * @desc Changed offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @arg Unboarded
 * 
 * @arg UnboardedOffset:struct
 * @text Changed Offsets
 * @parent Unboarded
 * @type struct<HandOffset>
 * @desc Changed offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_LightSpawns
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Category_LightSpawns
 * @text Category - Spawn Light(s)
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LightSpawnNewMapLockedLight
 * @text SPAWN LIGHT: Create Light(s) at Map X/Y
 * @desc Map only! Create new light spawn(s) locked to the map.
 * Use tile coordinates for X and Y.
 * 
 * @arg LightSettings
 * @text Light Settings
 * 
 * @arg Settings:struct
 * @text Settings
 * @parent LightSettings
 * @type struct<Radial>
 * @desc Change the radial light settings for the light spawn(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"32","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @parent LightSettings
 * @type struct<Behavior>
 * @desc Change the behaviors for the light spawn(s).
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @arg Coordinates
 * @text Coordinates X/Y
 *
 * @arg CoordinatesX:eval
 * @text Origin X
 * @parent Coordinates
 * @desc What is the origin X position?
 * You may use JavaScript code.
 * @default $gamePlayer.x
 *
 * @arg CoordinatesY:eval
 * @text Origin Y
 * @parent Coordinates
 * @desc What is the origin Y position?
 * You may use JavaScript code.
 * @default $gamePlayer.y
 * 
 * @arg SpawnSettings
 * @text Spawn Settings
 *
 * @arg UpdateFunc:json
 * @text JS: Trajectory
 * @parent SpawnSettings
 * @type note
 * @desc Code used to determine the trajectory of these lights.
 * These will revolve around the origin X/Y position.
 * @default "// Declare Constants\nconst data = arguments[0];\nconst time = arguments[1];\n\n// Calculate Results\nconst angle = time * 1.0;\nconst radians = angle * Math.PI / 180.0;\nconst distance = 0;  // Distance from Center\nconst offsetX = 0;\nconst offsetY = 0;\nconst x = Math.cos(radians) * distance + offsetX;\nconst y = Math.sin(radians) * distance + offsetY;\n\n// Return Results\nreturn {\n    x: x,\n    y: y,\n};"
 *
 * @arg InitialTime:eval
 * @text Initial Time
 * @parent SpawnSettings
 * @desc What is the initial time value for this light spawn(s)?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg TotalSpawns:eval
 * @text Total Spawns
 * @parent InitialTime:eval
 * @desc How many light spawns should there be?
 * Minimum value: 1. You may use JavaScript code.
 * @default 1
 *
 * @arg TimeIncrement:eval
 * @text Time Increment
 * @parent InitialTime:eval
 * @desc What is the time increment between spawns?
 * @default +1
 *
 * @arg ExpirationTimer:eval
 * @text Expiration Timer
 * @parent SpawnSettings
 * @desc After how many frames will light spawn(s) expire?
 * Use 0 for no expiration. You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LightSpawnNewScreenLockedLight
 * @text SPAWN LIGHT: Create Light(s) at Screen X/Y
 * @desc Map only! Create new light spawn(s) locked to the screen.
 * The light spawn(s) is unaffected by map scrolling.
 * 
 * @arg LightSettings
 * @text Light Settings
 * 
 * @arg Settings:struct
 * @text Settings
 * @parent LightSettings
 * @type struct<Radial>
 * @desc Change the radial light settings for the light spawn(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"32","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @parent LightSettings
 * @type struct<Behavior>
 * @desc Change the behaviors for the light spawn(s).
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @arg Coordinates
 * @text Coordinates X/Y
 *
 * @arg CoordinatesX:eval
 * @text Origin X
 * @parent Coordinates
 * @desc What is the origin X position?
 * You may use JavaScript code.
 * @default Graphics.width / 2
 *
 * @arg CoordinatesY:eval
 * @text Origin Y
 * @parent Coordinates
 * @desc What is the origin Y position?
 * You may use JavaScript code.
 * @default Graphics.height / 2
 * 
 * @arg SpawnSettings
 * @text Spawn Settings
 *
 * @arg UpdateFunc:json
 * @text JS: Trajectory
 * @parent SpawnSettings
 * @type note
 * @desc Code used to determine the trajectory of these lights.
 * These will revolve around the origin X/Y position.
 * @default "// Declare Constants\nconst data = arguments[0];\nconst time = arguments[1];\n\n// Calculate Results\nconst angle = time * 1.0;\nconst radians = angle * Math.PI / 180.0;\nconst distance = 0;  // Distance from Center\nconst offsetX = 0;\nconst offsetY = 0;\nconst x = Math.cos(radians) * distance + offsetX;\nconst y = Math.sin(radians) * distance + offsetY;\n\n// Return Results\nreturn {\n    x: x,\n    y: y,\n};"
 *
 * @arg InitialTime:eval
 * @text Initial Time
 * @parent SpawnSettings
 * @desc What is the initial time value for this light spawn(s)?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg TotalSpawns:eval
 * @text Total Spawns
 * @parent InitialTime:eval
 * @desc How many light spawns should there be?
 * Minimum value: 1. You may use JavaScript code.
 * @default 1
 *
 * @arg TimeIncrement:eval
 * @text Time Increment
 * @parent InitialTime:eval
 * @desc What is the time increment between spawns?
 * @default +1
 *
 * @arg ExpirationTimer:eval
 * @text Expiration Timer
 * @parent SpawnSettings
 * @desc After how many frames will light spawn(s) expire?
 * Use 0 for no expiration. You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LightSpawnNewPlayerLockedLight
 * @text SPAWN LIGHT: Create Light(s) on Player
 * @desc Map only! Create new light spawn(s) following the player.
 * Use tile coordinates for X and Y.
 * 
 * @arg LightSettings
 * @text Light Settings
 * 
 * @arg Settings:struct
 * @text Settings
 * @parent LightSettings
 * @type struct<Radial>
 * @desc Change the radial light settings for the light spawn(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"32","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @parent LightSettings
 * @type struct<Behavior>
 * @desc Change the behaviors for the light spawn(s).
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @arg SpawnSettings
 * @text Spawn Settings
 *
 * @arg UpdateFunc:json
 * @text JS: Trajectory
 * @parent SpawnSettings
 * @type note
 * @desc Code used to determine the trajectory of these lights.
 * These will revolve around the origin X/Y position.
 * @default "// Declare Constants\nconst data = arguments[0];\nconst time = arguments[1];\n\n// Calculate Results\nconst angle = time * 1.0;\nconst radians = angle * Math.PI / 180.0;\nconst distance = 0;  // Distance from Center\nconst offsetX = 0;\nconst offsetY = 0;\nconst x = Math.cos(radians) * distance + offsetX;\nconst y = Math.sin(radians) * distance + offsetY;\n\n// Return Results\nreturn {\n    x: x,\n    y: y,\n};"
 *
 * @arg InitialTime:eval
 * @text Initial Time
 * @parent SpawnSettings
 * @desc What is the initial time value for this light spawn(s)?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg TotalSpawns:eval
 * @text Total Spawns
 * @parent InitialTime:eval
 * @desc How many light spawns should there be?
 * Minimum value: 1. You may use JavaScript code.
 * @default 1
 *
 * @arg TimeIncrement:eval
 * @text Time Increment
 * @parent InitialTime:eval
 * @desc What is the time increment between spawns?
 * @default +1
 *
 * @arg ExpirationTimer:eval
 * @text Expiration Timer
 * @parent SpawnSettings
 * @desc After how many frames will light spawn(s) expire?
 * Use 0 for no expiration. You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LightSpawnNewFollowerLockedLight
 * @text SPAWN LIGHT: Create Light(s) on Follower
 * @desc Map only! Create new light spawn(s) following a follower.
 * Use tile coordinates for X and Y.
 * 
 * @arg LightSettings
 * @text Light Settings
 * 
 * @arg Settings:struct
 * @text Settings
 * @parent LightSettings
 * @type struct<Radial>
 * @desc Change the radial light settings for the light spawn(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"32","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @parent LightSettings
 * @type struct<Behavior>
 * @desc Change the behaviors for the light spawn(s).
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @arg Target
 * @text Target
 *
 * @arg FollowerIndex:eval
 * @text Follower Index
 * @parent Target
 * @desc Which follower index should the light(s) follow?
 * Index starts at 0. You may use JavaScript code.
 * @default 0
 * 
 * @arg SpawnSettings
 * @text Spawn Settings
 *
 * @arg UpdateFunc:json
 * @text JS: Trajectory
 * @parent SpawnSettings
 * @type note
 * @desc Code used to determine the trajectory of these lights.
 * These will revolve around the origin X/Y position.
 * @default "// Declare Constants\nconst data = arguments[0];\nconst time = arguments[1];\n\n// Calculate Results\nconst angle = time * 1.0;\nconst radians = angle * Math.PI / 180.0;\nconst distance = 0;  // Distance from Center\nconst offsetX = 0;\nconst offsetY = 0;\nconst x = Math.cos(radians) * distance + offsetX;\nconst y = Math.sin(radians) * distance + offsetY;\n\n// Return Results\nreturn {\n    x: x,\n    y: y,\n};"
 *
 * @arg InitialTime:eval
 * @text Initial Time
 * @parent SpawnSettings
 * @desc What is the initial time value for this light spawn(s)?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg TotalSpawns:eval
 * @text Total Spawns
 * @parent InitialTime:eval
 * @desc How many light spawns should there be?
 * Minimum value: 1. You may use JavaScript code.
 * @default 1
 *
 * @arg TimeIncrement:eval
 * @text Time Increment
 * @parent InitialTime:eval
 * @desc What is the time increment between spawns?
 * @default +1
 *
 * @arg ExpirationTimer:eval
 * @text Expiration Timer
 * @parent SpawnSettings
 * @desc After how many frames will light spawn(s) expire?
 * Use 0 for no expiration. You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LightSpawnNewEventLockedLight
 * @text SPAWN LIGHT: Create Light(s) on Event
 * @desc Map only! Create new light spawn(s) following an event.
 * Use tile coordinates for X and Y.
 * 
 * @arg LightSettings
 * @text Light Settings
 * 
 * @arg Settings:struct
 * @text Settings
 * @parent LightSettings
 * @type struct<Radial>
 * @desc Change the radial light settings for the light spawn(s).
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"32","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 *
 * @arg Behavior:struct
 * @text Behavior
 * @parent LightSettings
 * @type struct<Behavior>
 * @desc Change the behaviors for the light spawn(s).
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @arg Target
 * @text Target
 *
 * @arg EventID:eval
 * @text Event ID
 * @parent Target
 * @desc Which map event should the light(s) follow?
 * Use 0 for "this event". You may use JavaScript code.
 * @default 0
 * 
 * @arg SpawnSettings
 * @text Spawn Settings
 *
 * @arg UpdateFunc:json
 * @text JS: Trajectory
 * @parent SpawnSettings
 * @type note
 * @desc Code used to determine the trajectory of these lights.
 * These will revolve around the origin X/Y position.
 * @default "// Declare Constants\nconst data = arguments[0];\nconst time = arguments[1];\n\n// Calculate Results\nconst angle = time * 1.0;\nconst radians = angle * Math.PI / 180.0;\nconst distance = 0;  // Distance from Center\nconst offsetX = 0;\nconst offsetY = 0;\nconst x = Math.cos(radians) * distance + offsetX;\nconst y = Math.sin(radians) * distance + offsetY;\n\n// Return Results\nreturn {\n    x: x,\n    y: y,\n};"
 *
 * @arg InitialTime:eval
 * @text Initial Time
 * @parent SpawnSettings
 * @desc What is the initial time value for this light spawn(s)?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg TotalSpawns:eval
 * @text Total Spawns
 * @parent InitialTime:eval
 * @desc How many light spawns should there be?
 * Minimum value: 1. You may use JavaScript code.
 * @default 1
 *
 * @arg TimeIncrement:eval
 * @text Time Increment
 * @parent InitialTime:eval
 * @desc What is the time increment between spawns?
 * @default +1
 *
 * @arg ExpirationTimer:eval
 * @text Expiration Timer
 * @parent SpawnSettings
 * @desc After how many frames will light spawn(s) expire?
 * Use 0 for no expiration. You may use JavaScript code.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command LightSpawnExpireSpawnedLights
 * @text SPAWN LIGHT: Expire All Spawned Light(s)
 * @desc Map only! Expires all spawned lights.
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
 * @param LightingEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Map:struct
 * @text Map Lighting Settings
 * @type struct<Map>
 * @desc Lighting settings for the map scene.
 * @default {"General":"","Enable:eval":"true","ShakeBuffer:num":"80","PlayerDefaults":"","PlayerRadial:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"radius:num\":\"216\",\"color:str\":\"#ffffff\",\"intensity:num\":\"0.15\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"64\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","PlayerRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","PlayerConical:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.1\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"240\",\"miniRadius:num\":\"8\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"60\",\"angleSway:num\":\"6\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","PlayerConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","FollowerDefaults":"","FollowerRadial:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"radius:num\":\"216\",\"color:str\":\"#ffffff\",\"intensity:num\":\"0.15\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"64\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","FollowerRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","FollowerConical:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"240\",\"miniRadius:num\":\"8\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"60\",\"angleSway:num\":\"6\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"followMouse:eval\":\"false\",\"useHandOffset:eval\":\"true\",\"forceDirection:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","FollowerConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","EventDefaults":"","EventRadial:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"radius:num\":\"72\",\"color:str\":\"#ffffff\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","EventRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","EventConical:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"240\",\"miniRadius:num\":\"8\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"60\",\"angleSway:num\":\"6\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"followMouse:eval\":\"false\",\"useHandOffset:eval\":\"true\",\"forceDirection:num\":\"0\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","EventConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","Vehicles":"","Boat":"","BoatBoarded":"","BoatBoardedRadialSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"240\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"128\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","BoatBoardedRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","BoatBoardedConicalSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"360\",\"miniRadius:num\":\"8\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"60\",\"angleSway:num\":\"0\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","BoatBoardedConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","BoatBoardedConicalOffset:struct":"{\"StandardDirections\":\"\",\"dir2:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+8\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+7\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+8\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir4:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"-23\\\",\\\"pattern0Y:num\\\":\\\"-8\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"-24\\\",\\\"pattern1Y:num\\\":\\\"-8\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"-23\\\",\\\"pattern2Y:num\\\":\\\"-8\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir6:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+23\\\",\\\"pattern0Y:num\\\":\\\"-8\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+24\\\",\\\"pattern1Y:num\\\":\\\"-8\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+23\\\",\\\"pattern2Y:num\\\":\\\"-8\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir8:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"-23\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"-24\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"-23\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"DiagonalDirections\":\"\",\"dir1:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir3:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir7:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir9:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\"}","BoatUnboarded":"","BoatUnboardedRadialSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"72\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"64\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","BoatUnboardedRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","BoatUnboardedConicalSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"360\",\"miniRadius:num\":\"8\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"60\",\"angleSway:num\":\"0\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","BoatUnboardedConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","BoatUnboardedConicalOffset:struct":"{\"StandardDirections\":\"\",\"dir2:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+8\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+7\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+8\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir4:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"-23\\\",\\\"pattern0Y:num\\\":\\\"-8\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"-24\\\",\\\"pattern1Y:num\\\":\\\"-8\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"-23\\\",\\\"pattern2Y:num\\\":\\\"-8\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir6:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+23\\\",\\\"pattern0Y:num\\\":\\\"-8\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+24\\\",\\\"pattern1Y:num\\\":\\\"-8\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+23\\\",\\\"pattern2Y:num\\\":\\\"-8\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir8:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"-23\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"-24\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"-23\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"DiagonalDirections\":\"\",\"dir1:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir3:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir7:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir9:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\"}","Ship":"","ShipBoarded":"","ShipBoardedRadialSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"300\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"160\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","ShipBoardedRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","ShipBoardedConicalSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"480\",\"miniRadius:num\":\"16\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"75\",\"angleSway:num\":\"0\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","ShipBoardedConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","ShipBoardedConicalOffset:struct":"{\"StandardDirections\":\"\",\"dir2:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+23\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+24\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+23\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir4:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"-24\\\",\\\"pattern0Y:num\\\":\\\"+6\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"-24\\\",\\\"pattern1Y:num\\\":\\\"+7\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"-24\\\",\\\"pattern2Y:num\\\":\\\"+6\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir6:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+24\\\",\\\"pattern0Y:num\\\":\\\"+6\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+24\\\",\\\"pattern1Y:num\\\":\\\"+7\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+24\\\",\\\"pattern2Y:num\\\":\\\"+6\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir8:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"-24\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"-23\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"-24\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"DiagonalDirections\":\"\",\"dir1:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir3:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir7:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir9:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\"}","ShipUnboarded":"","ShipUnboardedRadialSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"72\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"64\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","ShipUnboardedRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","ShipUnboardedConicalSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"480\",\"miniRadius:num\":\"16\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"75\",\"angleSway:num\":\"0\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","ShipUnboardedConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","ShipUnboardedConicalOffset:struct":"{\"StandardDirections\":\"\",\"dir2:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+23\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+24\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+23\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir4:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"-24\\\",\\\"pattern0Y:num\\\":\\\"+6\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"-24\\\",\\\"pattern1Y:num\\\":\\\"+7\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"-24\\\",\\\"pattern2Y:num\\\":\\\"+6\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir6:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+24\\\",\\\"pattern0Y:num\\\":\\\"+6\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+24\\\",\\\"pattern1Y:num\\\":\\\"+7\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+24\\\",\\\"pattern2Y:num\\\":\\\"+6\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir8:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"-24\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"-23\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"-24\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"DiagonalDirections\":\"\",\"dir1:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir3:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir7:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir9:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\"}","Airship":"","AirshipBoarded":"","AirshipBoardedRadialSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"360\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"192\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","AirshipBoardedRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","AirshipBoardedConicalSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"600\",\"miniRadius:num\":\"32\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"90\",\"angleSway:num\":\"0\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","AirshipBoardedConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","AirshipBoardedConicalOffset:struct":"{\"StandardDirections\":\"\",\"dir2:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir4:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir6:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir8:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"DiagonalDirections\":\"\",\"dir1:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir3:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir7:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir9:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\"}","AirshipUnboarded":"","AirshipUnboardedRadialSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"72\",\"intensity:num\":\"0.50\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"64\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","AirshipUnboardedRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","AirshipUnboardedConicalSettings:struct":"{\"General\":\"\",\"enabled:eval\":\"false\",\"Properties\":\"\",\"filename:str\":\"\",\"fileAngleOffset:num\":\"0\",\"fileAnchorX:num\":\"0.5\",\"fileAnchorY:num\":\"0.5\",\"color:str\":\"#ffffff\",\"radius:num\":\"600\",\"miniRadius:num\":\"32\",\"intensity:num\":\"0.25\",\"Optional\":\"\",\"blendMode:num\":\"3\",\"opacity:num\":\"255\",\"AngleSettings\":\"\",\"angle:num\":\"90\",\"angleSway:num\":\"0\",\"swaySpeed:num\":\"0.03\",\"swayRng:eval\":\"true\",\"Direction\":\"\",\"forceDirection:num\":\"0\",\"followMouse:eval\":\"true\",\"useHandOffset:eval\":\"true\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","AirshipUnboardedConicalBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","AirshipUnboardedConicalOffset:struct":"{\"StandardDirections\":\"\",\"dir2:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir4:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir6:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir8:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+1\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+1\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"DiagonalDirections\":\"\",\"dir1:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir3:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir7:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\",\"dir9:struct\":\"{\\\"Pattern0\\\":\\\"\\\",\\\"pattern0X:num\\\":\\\"+0\\\",\\\"pattern0Y:num\\\":\\\"+0\\\",\\\"Pattern1\\\":\\\"\\\",\\\"pattern1X:num\\\":\\\"+0\\\",\\\"pattern1Y:num\\\":\\\"+0\\\",\\\"Pattern2\\\":\\\"\\\",\\\"pattern2X:num\\\":\\\"+0\\\",\\\"pattern2Y:num\\\":\\\"+0\\\",\\\"Pattern3\\\":\\\"(Unused by Default)\\\",\\\"pattern3X:num\\\":\\\"+0\\\",\\\"pattern3Y:num\\\":\\\"+0\\\",\\\"Pattern4\\\":\\\"(Unused by Default)\\\",\\\"pattern4X:num\\\":\\\"+0\\\",\\\"pattern4Y:num\\\":\\\"+0\\\",\\\"Pattern5\\\":\\\"(Unused by Default)\\\",\\\"pattern5X:num\\\":\\\"+0\\\",\\\"pattern5Y:num\\\":\\\"+0\\\",\\\"Pattern6\\\":\\\"(Unused by Default)\\\",\\\"pattern6X:num\\\":\\\"+0\\\",\\\"pattern6Y:num\\\":\\\"+0\\\",\\\"Pattern7\\\":\\\"(Unused by Default)\\\",\\\"pattern7X:num\\\":\\\"+0\\\",\\\"pattern7Y:num\\\":\\\"+0\\\",\\\"Pattern8\\\":\\\"(Unused by Default)\\\",\\\"pattern8X:num\\\":\\\"+0\\\",\\\"pattern8Y:num\\\":\\\"+0\\\",\\\"Pattern9\\\":\\\"(Unused by Default)\\\",\\\"pattern9X:num\\\":\\\"+0\\\",\\\"pattern9Y:num\\\":\\\"+0\\\",\\\"Pattern10\\\":\\\"(Unused by Default)\\\",\\\"pattern10X:num\\\":\\\"+0\\\",\\\"pattern10Y:num\\\":\\\"+0\\\"}\"}"}
 * 
 * @param HandOffset:struct
 * @text Hand Position Offsets
 * @parent Map:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for hand positions.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-12\",\"pattern0Y:num\":\"+14\",\"Pattern1\":\"\",\"pattern1X:num\":\"-12\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"-12\",\"pattern2Y:num\":\"+18\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+2\",\"pattern0Y:num\":\"+16\",\"Pattern1\":\"\",\"pattern1X:num\":\"+4\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"+6\",\"pattern2Y:num\":\"+16\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-2\",\"pattern0Y:num\":\"+16\",\"Pattern1\":\"\",\"pattern1X:num\":\"-4\",\"pattern1Y:num\":\"+16\",\"Pattern2\":\"\",\"pattern2X:num\":\"-6\",\"pattern2Y:num\":\"+16\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+12\",\"pattern0Y:num\":\"-18\",\"Pattern1\":\"\",\"pattern1X:num\":\"+12\",\"pattern1Y:num\":\"-16\",\"Pattern2\":\"\",\"pattern2X:num\":\"+12\",\"pattern2Y:num\":\"-14\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @param VsDashOffset:struct
 * @text VS8 Dash Offsets
 * @parent Map:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for hand positions for VS8 sprites while dashing.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @param VsJumpOffset:struct
 * @text VS8 Jump Offsets
 * @parent Map:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for hand positions for VS8 sprites while jumping.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @param Battle:struct
 * @text Battle Lighting Settings
 * @type struct<Battle>
 * @desc Lighting settings for the battle scene.
 * Requires VisuMZ_1_BattleCore!
 * @default {"General":"","Enable:eval":"true","ActorDefaults":"","ActorRadial:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"64\",\"intensity:num\":\"0.15\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"128\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","ActorRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","ActorAutoRadius:eval":"true","EnemyDefaults":"","EnemyRadial:struct":"{\"General\":\"\",\"enabled:eval\":\"true\",\"Properties\":\"\",\"filename:str\":\"\",\"color:str\":\"#ffffff\",\"radius:num\":\"64\",\"intensity:num\":\"0.15\",\"Optional\":\"\",\"angle:num\":\"0\",\"rotateSpeed:num\":\"+0\",\"blendMode:num\":\"3\",\"opacity:num\":\"128\",\"Offsets\":\"\",\"offsetX:num\":\"+0\",\"offsetY:num\":\"+0\"}","EnemyRadialBehavior:struct":"{\"Blink\":\"\",\"blinkRate:num\":\"0.00\",\"blinkModifier:num\":\"-0.50\",\"Flicker\":\"\",\"flickerRate:num\":\"0.00\",\"flickerModifier:num\":\"-0.50\",\"Flash\":\"\",\"flashRate:num\":\"0.00\",\"flashModifier:num\":\"+0.50\",\"Flare\":\"\",\"flareRate:num\":\"0.00\",\"flareModifier:num\":\"+0.50\",\"Glow\":\"\",\"glowRate:num\":\"0.00\",\"glowSpeed:num\":\"0.10\",\"glowRng:eval\":\"true\",\"Pulse\":\"\",\"pulseRate:num\":\"0.00\",\"pulseSpeed:num\":\"0.10\",\"pulseRng:eval\":\"true\",\"Pattern\":\"\",\"patternName:str\":\"none\",\"pattern:str\":\"\",\"patternDelay:num\":\"6\"}","EnemyAutoRadius:eval":"true"}
 *
 * @param AntiLight:struct
 * @text Anti-Light Settings
 * @type struct<AntiLight>
 * @desc Settings to determine default anti-light tile markers.
 * @default {"Hard":"","HardRegions:arraynum":"[]","HardTerrainTags:arraynum":"[]","Soft":"","SoftRegions:arraynum":"[]","SoftTerrainTags:arraynum":"[]"}
 *
 * @param AutoLight:struct
 * @text Auto-Light Regions
 * @type struct<AutoLight>
 * @desc Light up specific parts of the map with regions.
 * @default {"opacity100:arraynum":"[]","opacity95:arraynum":"[]","opacity90:arraynum":"[]","opacity85:arraynum":"[]","opacity80:arraynum":"[]","opacity75:arraynum":"[]","opacity70:arraynum":"[]","opacity65:arraynum":"[]","opacity60:arraynum":"[]","opacity55:arraynum":"[]","opacity50:arraynum":"[]","opacity45:arraynum":"[]","opacity40:arraynum":"[]","opacity35:arraynum":"[]","opacity30:arraynum":"[]","opacity25:arraynum":"[]","opacity20:arraynum":"[]","opacity15:arraynum":"[]","opacity10:arraynum":"[]","opacity5:arraynum":"[]"}
 *
 * @param PresetColors:struct
 * @text Preset Colors Settings
 * @type struct<PresetColors>
 * @desc Preset Color settings for this plugin.
 * @default {"Daytime":"","dawn:str":"#5674b9","day:str":"#ffffff","dusk:str":"#f7941d","night:str":"#2e3192","Greyscale":"","white:str":"#ffffff","light grey:str":"#aaaaaa","grey:str":"#888888","dark grey:str":"#444444","black:str":"#000000","Reds":"","light red:str":"#f69679","red:str":"#ff0000","dark red:str":"#790000","Oranges":"","light orange:str":"#fdc689","orange:str":"#f7941d","dark orange:str":"#7d4900","Yellows":"","light yellow:str":"#fff799","yellow:str":"#ffff00","dark yellow:str":"#827b00","Greens":"","light green:str":"#a3d39c","green:str":"#00ff00","dark green:str":"#005e20","Cyans":"","light cyan:str":"#7accc8","cyan:str":"#00ffff","dark cyan:str":"#005952","Blues":"","light blue:str":"#ace4fa","blue:str":"#0000ff","dark blue:str":"#003663","Purples":"","light purple:str":"#a186be","purple:str":"#92278f","dark purple:str":"#32004b","Magentas":"","light magenta:str":"#bd8cbf","magenta:str":"#ff00ff","dark magenta:str":"#7b0046","Pinks":"","light pink:str":"#f49ac1","pink:str":"#f06eaa","dark pink:str":"#9e0039","Browns":"","light brown:str":"#c69c6d","brown:str":"#8c6239","dark brown:str":"#603913","Misc":"","normal:str":"#ffffff","none:str":"#ffffff","dark:str":"#000000","null:str":"#000000"}
 *
 * @param Options:struct
 * @text Options Menu Settings
 * @type struct<Options>
 * @desc Lighting settings for the options scene.
 * @default {"Options":"","AdjustRect:eval":"true","BlinkingLights":"","AddBlinkingLights:eval":"true","BlinkingLightsName:str":"Blinking Lights","PulsingLights":"","AddPulsingLights:eval":"true","PulsingLightsName:str":"Pulsing Lights"}
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
 * Map Lighting Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Map:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable For Map?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Lighting Effects for map?
 * @default true
 *
 * @param ShakeBuffer:num
 * @text Shake Buffer
 * @parent General
 * @type number
 * @desc Screen shakes reveal more of the screen than normal.
 * How many pixels of buffer should you provide?
 * @default 80
 *
 * @param PlayerDefaults
 * @text Player Defaults
 * 
 * @param PlayerRadial:struct
 * @text Radial Light
 * @parent PlayerDefaults
 * @type struct<Radial>
 * @desc Default radial light settings for the player.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","radius:num":"216","color:str":"#ffffff","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param PlayerRadialBehavior:struct
 * @text Default Behavior
 * @parent PlayerRadial:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for the player radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param PlayerConical:struct
 * @text Conical Light
 * @parent PlayerDefaults
 * @type struct<Conical>
 * @desc Default conical light settings for the player.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"240","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"6","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","followMouse:eval":"true","useHandOffset:eval":"true","forceDirection:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param PlayerConicalBehavior:struct
 * @text Default Behavior
 * @parent PlayerConical:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for the player conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @param FollowerDefaults
 * @text Follower Defaults
 * 
 * @param FollowerRadial:struct
 * @text Radial Light
 * @parent FollowerDefaults
 * @type struct<Radial>
 * @desc Default radial light settings for followers.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","radius:num":"216","color:str":"#ffffff","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param FollowerRadialBehavior:struct
 * @text Default Behavior
 * @parent FollowerRadial:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for follower radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param FollowerConical:struct
 * @text Conical Light
 * @parent FollowerDefaults
 * @type struct<Conical>
 * @desc Default conical light settings for followers.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"240","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"6","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","followMouse:eval":"false","useHandOffset:eval":"true","forceDirection:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param FollowerConicalBehavior:struct
 * @text Default Behavior
 * @parent FollowerConical:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for follower conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @param EventDefaults
 * @text Event Defaults
 * 
 * @param EventRadial:struct
 * @text Radial Light
 * @parent EventDefaults
 * @type struct<Radial>
 * @desc Default radial light settings for events.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","radius:num":"72","color:str":"#ffffff","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"255","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param EventRadialBehavior:struct
 * @text Default Behavior
 * @parent EventRadial:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for event radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param EventConical:struct
 * @text Conical Light
 * @parent EventDefaults
 * @type struct<Conical>
 * @desc Default conical light settings for events.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"240","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"6","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","followMouse:eval":"false","useHandOffset:eval":"true","forceDirection:num":"0","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param EventConicalBehavior:struct
 * @text Default Behavior
 * @parent EventConical:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for event conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param Vehicles
 * 
 * @param Boat
 * @parent Vehicles
 *
 * @param BoatBoarded
 * @text Boarded
 * @parent Boat
 * 
 * @param BoatBoardedRadialSettings:struct
 * @text Radial Light
 * @parent BoatBoarded
 * @type struct<Radial>
 * @desc Default radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"240","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"128","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param BoatBoardedRadialBehavior:struct
 * @text Default Behavior
 * @parent BoatBoardedRadialSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param BoatBoardedConicalSettings:struct
 * @text Conical Light
 * @parent BoatBoarded
 * @type struct<Conical>
 * @desc Default conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"360","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param BoatBoardedConicalBehavior:struct
 * @text Default Behavior
 * @parent BoatBoardedConicalSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param BoatBoardedConicalOffset:struct
 * @text "Hand" Offsets
 * @parent BoatBoardedConicalSettings:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"-23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"+23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @param BoatUnboarded
 * @text Unboarded
 * @parent Boat
 * 
 * @param BoatUnboardedRadialSettings:struct
 * @text Radial Light
 * @parent BoatUnboarded
 * @type struct<Radial>
 * @desc Default radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"72","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param BoatUnboardedRadialBehavior:struct
 * @text Default Behavior
 * @parent BoatUnboardedRadialSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param BoatUnboardedConicalSettings:struct
 * @text Conical Light
 * @parent BoatUnboarded
 * @type struct<Conical>
 * @desc Default conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"360","miniRadius:num":"8","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"60","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param BoatUnboardedConicalBehavior:struct
 * @text Default Behavior
 * @parent BoatUnboardedConicalSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param BoatUnboardedConicalOffset:struct
 * @text "Hand" Offsets
 * @parent BoatUnboardedConicalSettings:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"-23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+23\",\"pattern0Y:num\":\"-8\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"-8\",\"Pattern2\":\"\",\"pattern2X:num\":\"+23\",\"pattern2Y:num\":\"-8\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @param Ship
 * @parent Vehicles
 *
 * @param ShipBoarded
 * @text Boarded
 * @parent Ship
 * 
 * @param ShipBoardedRadialSettings:struct
 * @text Radial Light
 * @parent ShipBoarded
 * @type struct<Radial>
 * @desc Default radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"300","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"160","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param ShipBoardedRadialBehavior:struct
 * @text Default Behavior
 * @parent ShipBoardedRadialSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param ShipBoardedConicalSettings:struct
 * @text Conical Light
 * @parent ShipBoarded
 * @type struct<Conical>
 * @desc Default conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"480","miniRadius:num":"16","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"75","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param ShipBoardedConicalBehavior:struct
 * @text Default Behavior
 * @parent ShipBoardedConicalSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param ShipBoardedConicalOffset:struct
 * @text "Hand" Offsets
 * @parent ShipBoardedConicalSettings:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"-24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-24\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-23\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-24\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @param ShipUnboarded
 * @text Unboarded
 * @parent Ship
 * 
 * @param ShipUnboardedRadialSettings:struct
 * @text Radial Light
 * @parent ShipUnboarded
 * @type struct<Radial>
 * @desc Default radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"72","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param ShipUnboardedRadialBehavior:struct
 * @text Default Behavior
 * @parent ShipUnboardedRadialSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param ShipUnboardedConicalSettings:struct
 * @text Conical Light
 * @parent ShipUnboarded
 * @type struct<Conical>
 * @desc Default conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"480","miniRadius:num":"16","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"75","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param ShipUnboardedConicalBehavior:struct
 * @text Default Behavior
 * @parent ShipUnboardedConicalSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param ShipUnboardedConicalOffset:struct
 * @text "Hand" Offsets
 * @parent ShipUnboardedConicalSettings:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+23\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+24\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+23\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"-24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"-24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"-24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+24\",\"pattern0Y:num\":\"+6\",\"Pattern1\":\"\",\"pattern1X:num\":\"+24\",\"pattern1Y:num\":\"+7\",\"Pattern2\":\"\",\"pattern2X:num\":\"+24\",\"pattern2Y:num\":\"+6\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"-24\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"-23\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"-24\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 * 
 * @param Airship
 * @parent Vehicles
 *
 * @param AirshipBoarded
 * @text Boarded
 * @parent Airship
 * 
 * @param AirshipBoardedRadialSettings:struct
 * @text Radial Light
 * @parent AirshipBoarded
 * @type struct<Radial>
 * @desc Default radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"360","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"192","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param AirshipBoardedRadialBehavior:struct
 * @text Default Behavior
 * @parent AirshipBoardedRadialSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param AirshipBoardedConicalSettings:struct
 * @text Conical Light
 * @parent AirshipBoarded
 * @type struct<Conical>
 * @desc Default conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"600","miniRadius:num":"32","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"90","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param AirshipBoardedConicalBehavior:struct
 * @text Default Behavior
 * @parent AirshipBoardedConicalSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param AirshipBoardedConicalOffset:struct
 * @text "Hand" Offsets
 * @parent AirshipBoardedConicalSettings:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 * @param AirshipUnboarded
 * @text Unboarded
 * @parent Airship
 * 
 * @param AirshipUnboardedRadialSettings:struct
 * @text Radial Light
 * @parent AirshipUnboarded
 * @type struct<Radial>
 * @desc Default radial light settings for this vehicle.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"72","intensity:num":"0.50","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"64","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param AirshipUnboardedRadialBehavior:struct
 * @text Default Behavior
 * @parent AirshipUnboardedRadialSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param AirshipUnboardedConicalSettings:struct
 * @text Conical Light
 * @parent AirshipUnboarded
 * @type struct<Conical>
 * @desc Default conical light settings for this vehicle.
 * @default {"General":"","enabled:eval":"false","Properties":"","filename:str":"","fileAngleOffset:num":"0","fileAnchorX:num":"0.5","fileAnchorY:num":"0.5","color:str":"#ffffff","radius:num":"600","miniRadius:num":"32","intensity:num":"0.25","Optional":"","blendMode:num":"3","opacity:num":"255","AngleSettings":"","angle:num":"90","angleSway:num":"0","swaySpeed:num":"0.03","swayRng:eval":"true","Direction":"","forceDirection:num":"0","followMouse:eval":"true","useHandOffset:eval":"true","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param AirshipUnboardedConicalBehavior:struct
 * @text Default Behavior
 * @parent AirshipUnboardedConicalSettings:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for these conical lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 * 
 * @param AirshipUnboardedConicalOffset:struct
 * @text "Hand" Offsets
 * @parent AirshipUnboardedConicalSettings:struct
 * @type struct<HandOffset>
 * @desc Default offsets used for the "hand" positions of this vehicle.
 * @default {"StandardDirections":"","dir2:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir4:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir6:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir8:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+1\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+1\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","DiagonalDirections":"","dir1:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir3:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir7:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}","dir9:struct":"{\"Pattern0\":\"\",\"pattern0X:num\":\"+0\",\"pattern0Y:num\":\"+0\",\"Pattern1\":\"\",\"pattern1X:num\":\"+0\",\"pattern1Y:num\":\"+0\",\"Pattern2\":\"\",\"pattern2X:num\":\"+0\",\"pattern2Y:num\":\"+0\",\"Pattern3\":\"(Unused by Default)\",\"pattern3X:num\":\"+0\",\"pattern3Y:num\":\"+0\",\"Pattern4\":\"(Unused by Default)\",\"pattern4X:num\":\"+0\",\"pattern4Y:num\":\"+0\",\"Pattern5\":\"(Unused by Default)\",\"pattern5X:num\":\"+0\",\"pattern5Y:num\":\"+0\",\"Pattern6\":\"(Unused by Default)\",\"pattern6X:num\":\"+0\",\"pattern6Y:num\":\"+0\",\"Pattern7\":\"(Unused by Default)\",\"pattern7X:num\":\"+0\",\"pattern7Y:num\":\"+0\",\"Pattern8\":\"(Unused by Default)\",\"pattern8X:num\":\"+0\",\"pattern8Y:num\":\"+0\",\"Pattern9\":\"(Unused by Default)\",\"pattern9X:num\":\"+0\",\"pattern9Y:num\":\"+0\",\"Pattern10\":\"(Unused by Default)\",\"pattern10X:num\":\"+0\",\"pattern10Y:num\":\"+0\"}"}
 *
 */
/* ----------------------------------------------------------------------------
 * Battle Lighting Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battle:
 *
 * @param General
 *
 * @param Enable:eval
 * @text Enable For Battle?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable Lighting Effects for battles?
 * Requires VisuMZ_1_BattleCore!
 * @default true
 * 
 * @param ActorDefaults
 * @text Actor Defaults
 * 
 * @param ActorRadial:struct
 * @text Battle Light
 * @parent ActorDefaults
 * @type struct<Radial>
 * @desc Default battle-radial light settings for actors.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"64","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"128","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param ActorRadialBehavior:struct
 * @text Default Behavior
 * @parent ActorRadial:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for actor radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @param ActorAutoRadius:eval
 * @text Auto-Calc Radius
 * @parent ActorRadial:struct
 * @type boolean
 * @on Calculate Radius
 * @off Use Default Radius
 * @desc Automatically calculates the radius size based on sprite's
 * width/height. Ignore if use <Radial Light Radius: x>.
 * @default true
 * 
 * @param EnemyDefaults
 * @text Enemy Defaults
 * 
 * @param EnemyRadial:struct
 * @text Battle Light
 * @parent EnemyDefaults
 * @type struct<Radial>
 * @desc Default battle-radial light settings for enemies.
 * @default {"General":"","enabled:eval":"true","Properties":"","filename:str":"","color:str":"#ffffff","radius:num":"64","intensity:num":"0.15","Optional":"","angle:num":"0","rotateSpeed:num":"+0","blendMode:num":"3","opacity:num":"128","Offsets":"","offsetX:num":"+0","offsetY:num":"+0"}
 * 
 * @param EnemyRadialBehavior:struct
 * @text Default Behavior
 * @parent EnemyRadial:struct
 * @type struct<Behavior>
 * @desc What are the default behavioral settings for enemy radial lights?
 * @default {"Blink":"","blinkRate:num":"0.00","blinkModifier:num":"-0.50","Flicker":"","flickerRate:num":"0.00","flickerModifier:num":"-0.50","Flash":"","flashRate:num":"0.00","flashModifier:num":"+0.50","Flare":"","flareRate:num":"0.00","flareModifier:num":"+0.50","Glow":"","glowRate:num":"0.00","glowSpeed:num":"0.10","glowRng:eval":"true","Pulse":"","pulseRate:num":"0.00","pulseSpeed:num":"0.10","pulseRng:eval":"true","Pattern":"","patternName:str":"none","pattern:str":"","patternDelay:num":"6"}
 *
 * @param EnemyAutoRadius:eval
 * @text Auto-Calc Radius
 * @parent EnemyRadial:struct
 * @type boolean
 * @on Calculate Radius
 * @off Use Default Radius
 * @desc Automatically calculates the radius size based on sprite's
 * width/height. Ignore if use <Radial Light Radius: x>.
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Anti-Light Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AntiLight:
 *
 * @param Hard
 * @text Hard Edges
 *
 * @param HardRegions:arraynum
 * @text Regions
 * @parent Hard
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which regions by default apply anti-light?
 * 0 is ignored. Use a number from 1 to 255.
 * @default []
 *
 * @param HardTerrainTags:arraynum
 * @text Terrain Tags
 * @parent Hard
 * @type number[]
 * @min 1
 * @max 7
 * @desc Which terrain tags by default apply anti-light?
 * 0 is ignored. Use a number from 1 to 7.
 * @default []
 *
 * @param Soft
 * @text Soft Edges
 *
 * @param SoftRegions:arraynum
 * @text Regions
 * @parent Soft
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which regions by default apply anti-light?
 * 0 is ignored. Use a number from 1 to 255.
 * @default []
 *
 * @param SoftTerrainTags:arraynum
 * @text Terrain Tags
 * @parent Soft
 * @type number[]
 * @min 1
 * @max 7
 * @desc Which terrain tags by default apply anti-light?
 * 0 is ignored. Use a number from 1 to 7.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Auto-Light Regions Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoLight:
 *
 * @param opacity100:arraynum
 * @text Opacity - 100%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity95:arraynum
 * @text Opacity - 95%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity90:arraynum
 * @text Opacity - 90%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity85:arraynum
 * @text Opacity - 85%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity80:arraynum
 * @text Opacity - 80%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity75:arraynum
 * @text Opacity - 75%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity70:arraynum
 * @text Opacity - 70%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity65:arraynum
 * @text Opacity - 65%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity60:arraynum
 * @text Opacity - 60%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity55:arraynum
 * @text Opacity - 55%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity50:arraynum
 * @text Opacity - 50%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity45:arraynum
 * @text Opacity - 45%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity40:arraynum
 * @text Opacity - 40%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity35:arraynum
 * @text Opacity - 35%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity30:arraynum
 * @text Opacity - 30%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity25:arraynum
 * @text Opacity - 25%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity20:arraynum
 * @text Opacity - 20%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity15:arraynum
 * @text Opacity - 15%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity10:arraynum
 * @text Opacity - 10%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 * @param opacity5:arraynum
 * @text Opacity - 5%
 * @type number[]
 * @min 1
 * @max 255
 * @desc Mark the regions with this opacity level.
 * Light color will be white. Use Region ID's (1 to 255).
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Preset Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PresetColors:
 *
 * @param Daytime
 * @text Daytime Colors
 *
 * @param dawn:str
 * @text Dawn
 * @parent Daytime
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #5674b9
 *
 * @param day:str
 * @text Day
 * @parent Daytime
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ffffff
 *
 * @param dusk:str
 * @text Dusk
 * @parent Daytime
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #f7941d
 *
 * @param night:str
 * @text Night
 * @parent Daytime
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #2e3192
 *
 * @param Greyscale
 * @text Greyscale Colors
 *
 * @param white:str
 * @text White
 * @parent Greyscale
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ffffff
 *
 * @param light grey:str
 * @text Light Grey
 * @parent Greyscale
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #aaaaaa
 *
 * @param grey:str
 * @text Grey
 * @parent Greyscale
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #888888
 *
 * @param dark grey:str
 * @text Dark Grey
 * @parent Greyscale
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #444444
 *
 * @param black:str
 * @text Black
 * @parent Greyscale
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param Reds
 * @text Red Colors
 *
 * @param light red:str
 * @text Light Red
 * @parent Reds
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #f69679
 *
 * @param red:str
 * @text Red
 * @parent Reds
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ff0000
 *
 * @param dark red:str
 * @text Dark Red
 * @parent Reds
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #790000
 *
 * @param Oranges
 * @text Orange Colors
 *
 * @param light orange:str
 * @text Light Orange
 * @parent Oranges
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #fdc689
 *
 * @param orange:str
 * @text Orange
 * @parent Oranges
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #f7941d
 *
 * @param dark orange:str
 * @text Dark Orange
 * @parent Oranges
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #7d4900
 *
 * @param Yellows
 * @text Yellow Colors
 *
 * @param light yellow:str
 * @text Light Yellow
 * @parent Yellows
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #fff799
 *
 * @param yellow:str
 * @text Yellow
 * @parent Yellows
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ffff00
 *
 * @param dark yellow:str
 * @text Dark Yellow
 * @parent Yellows
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #827b00
 *
 * @param Greens
 * @text Green Colors
 *
 * @param light green:str
 * @text Light Green
 * @parent Greens
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #a3d39c
 *
 * @param green:str
 * @text Green
 * @parent Greens
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #00ff00
 *
 * @param dark green:str
 * @text Dark Green
 * @parent Greens
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #005e20
 *
 * @param Cyans
 * @text Cyan Colors
 *
 * @param light cyan:str
 * @text Light Cyan
 * @parent Cyans
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #7accc8
 *
 * @param cyan:str
 * @text Cyan
 * @parent Cyans
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #00ffff
 *
 * @param dark cyan:str
 * @text Dark Cyan
 * @parent Cyans
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #005952
 *
 * @param Blues
 * @text Blue Colors
 *
 * @param light blue:str
 * @text Light Blue
 * @parent Blues
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ace4fa
 *
 * @param blue:str
 * @text Blue
 * @parent Blues
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #0000ff
 *
 * @param dark blue:str
 * @text Dark Blue
 * @parent Blues
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #003663
 *
 * @param Purples
 * @text Purple Colors
 *
 * @param light purple:str
 * @text Light Purple
 * @parent Purples
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #a186be
 *
 * @param purple:str
 * @text Purple
 * @parent Purples
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #92278f
 *
 * @param dark purple:str
 * @text Dark Purple
 * @parent Purples
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #32004b
 *
 * @param Magentas
 * @text Magenta Colors
 *
 * @param light magenta:str
 * @text Light Magenta
 * @parent Magentas
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #bd8cbf
 *
 * @param magenta:str
 * @text Magenta
 * @parent Magentas
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ff00ff
 *
 * @param dark magenta:str
 * @text Dark Magenta
 * @parent Magentas
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #7b0046
 *
 * @param Pinks
 * @text Pink Colors
 *
 * @param light pink:str
 * @text Light Pink
 * @parent Pinks
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #f49ac1
 *
 * @param pink:str
 * @text Pink
 * @parent Pinks
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #f06eaa
 *
 * @param dark pink:str
 * @text Dark Pink
 * @parent Pinks
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #9e0039
 *
 * @param Browns
 * @text Brown Colors
 *
 * @param light brown:str
 * @text Light Brown
 * @parent Browns
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #c69c6d
 *
 * @param brown:str
 * @text Brown
 * @parent Browns
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #8c6239
 *
 * @param dark brown:str
 * @text Dark Brown
 * @parent Browns
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #603913
 *
 * @param Misc
 * @text Misc Colors
 *
 * @param normal:str
 * @text Normal
 * @parent Misc
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ffffff
 *
 * @param none:str
 * @text None
 * @parent Misc
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #ffffff
 *
 * @param dark:str
 * @text Dark
 * @parent Misc
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param null:str
 * @text Null
 * @parent Misc
 * @desc Preset's hex color in #rrggbb format.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
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
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param BlinkingLights
 * @text Blinking Lights
 *
 * @param AddBlinkingLights:eval
 * @text Add Option?
 * @parent BlinkingLights
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Blinking Lights' option to the Options menu?
 * @default true
 *
 * @param BlinkingLightsName:str
 * @text Option Name
 * @parent BlinkingLights
 * @desc Command name of the option.
 * @default Blinking Lights
 *
 * @param PulsingLights
 * @text Pulsing Lights
 *
 * @param AddPulsingLights:eval
 * @text Add Option?
 * @parent PulsingLights
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Pulsing Lights' option to the Options menu?
 * @default true
 *
 * @param PulsingLightsName:str
 * @text Option Name
 * @parent PulsingLights
 * @desc Command name of the option.
 * @default Pulsing Lights
 *
 */
/* ----------------------------------------------------------------------------
 * Radial Light Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Radial:
 *
 * @param General
 *
 * @param enabled:eval
 * @text Enabled?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Is this radial light enabled?
 * @default true
 *
 * @param Properties
 *
 * @param filename:str
 * @text Filename
 * @parent Properties
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the light effect image.
 * If used, ignore Color, Radius, and Intensity.
 * @default 
 *
 * @param color:str
 * @text Color
 * @parent Properties
 * @desc Color of the radial light in #rrggbb format.
 * For generated lights only. Ignore if using image.
 * @default #ffffff
 *
 * @param radius:num
 * @text Radius
 * @parent Properties
 * @type number
 * @min 1
 * @desc What is the radius of this radial light?
 * For generated lights only. Ignore if using image.
 * @default 72
 *
 * @param intensity:num
 * @text Intensity
 * @parent Properties
 * @desc Radial light intensity. Use value between 0 & 1.
 * For generated lights only. Ignore if using image.
 * @default 0.50
 *
 * @param Optional
 * 
 * @param angle:num
 * @text Angle
 * @parent Optional
 * @type number
 * @min 0
 * @max 360
 * @desc What is the angle of this radial light?
 * Only noticeable with using images.
 * @default 0
 * 
 * @param rotateSpeed:num
 * @text Rotate Speed
 * @parent angle:num
 * @type number
 * @desc The rotation speed of this light?
 * Lower: slower. Higher: faster. Negative: reverse.
 * @default +0
 *
 * @param blendMode:num
 * @text Blend Mode
 * @parent Optional
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the radial light?
 * @default 3
 *
 * @param opacity:num
 * @text Opacity
 * @parent Optional
 * @type number
 * @min 0
 * @max 255
 * @desc What is the opacity (0 to 255)?
 * Lower: dimmer. Higher: Brighter.
 * @default 255
 *
 * @param Offsets
 *
 * @param offsetX:num
 * @text Offset X
 * @parent Offsets
 * @desc Offset the X position of this light.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param offsetY:num
 * @text Offset Y
 * @parent Offsets
 * @desc Offset the Y position of this light.
 * Negative: up. Positive: down.
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Conical Light Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Conical:
 *
 * @param General
 *
 * @param enabled:eval
 * @text Enabled?
 * @parent General
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Is this conical light enabled?
 * @default true
 *
 * @param Properties
 *
 * @param filename:str
 * @text Filename
 * @parent Properties
 * @type file
 * @dir img/pictures/
 * @require 1
 * @desc Filename used for the light effect image.
 * If used, ignore Color, Radius, and Intensity.
 * @default 
 * 
 * @param fileAngleOffset:num
 * @text Angle Offset
 * @parent filename:str
 * @type number
 * @min 0
 * @max 360
 * @desc Offset the image angle by this many degrees.
 * Only applies to images.
 * @default 0
 *
 * @param fileAnchorX:num
 * @text File Anchor X
 * @parent filename:str
 * @desc Anchor X used for images.
 * Left: 0.0; Center: 0.5; Right: 1.0
 * @default 0.5
 *
 * @param fileAnchorY:num
 * @text File Anchor Y
 * @parent filename:str
 * @desc Anchor Y used for images.
 * Top: 0.0; Middle: 0.5; Bottom: 1.0
 * @default 0.5
 *
 * @param color:str
 * @text Color
 * @parent Properties
 * @desc Color of the conical light in #rrggbb format.
 * For generated lights only. Ignore if using image.
 * @default #ffffff
 *
 * @param radius:num
 * @text Radius
 * @parent Properties
 * @type number
 * @min 1
 * @desc What is the radius of this conical light?
 * For generated lights only. Ignore if using image.
 * @default 240
 *
 * @param miniRadius:num
 * @text Source Radius
 * @parent radius:num
 * @type number
 * @min 1
 * @desc What is the radius of this light source?
 * For generated lights only. Ignore if using image.
 * @default 8
 *
 * @param intensity:num
 * @text Intensity
 * @parent Properties
 * @desc Conical light intensity. Use value between 0 & 1.
 * For generated lights only. Ignore if using image.
 * @default 0.25
 *
 * @param Optional
 *
 * @param blendMode:num
 * @text Blend Mode
 * @parent Optional
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the conical light?
 * @default 3
 *
 * @param opacity:num
 * @text Opacity
 * @parent Optional
 * @type number
 * @min 0
 * @max 255
 * @desc What is the opacity (0 to 255)?
 * Lower: dimmer. Higher: Brighter.
 * @default 255
 *
 * @param AngleSettings
 * @text Angle
 * 
 * @param angle:num
 * @text Arc Angle
 * @parent AngleSettings
 * @type number
 * @min 0
 * @max 360
 * @desc What is the angle of this conical light's arc?
 * @default 60
 * 
 * @param angleSway:num
 * @text Angle Sway
 * @parent AngleSettings
 * @type number
 * @desc How many degrees should this light sway?
 * Use 0 for no sway.
 * @default 6
 * 
 * @param swaySpeed:num
 * @text Sway Speed
 * @parent AngleSettings
 * @type number
 * @desc How fast should this light sway?
 * Lower: Slower; Higher: Faster
 * @default 0.1
 *
 * @param swayRng:eval
 * @text Randomize Sway?
 * @parent AngleSettings
 * @type boolean
 * @on Randomize
 * @off Structured
 * @desc Change the sway to offset at different starting points?
 * @default true
 *
 * @param Direction
 *
 * @param forceDirection:num
 * @text Forced Direction?
 * @parent Direction
 * @type select
 * @option none
 * @value 0
 * @option lower left
 * @value 1
 * @option down
 * @value 2
 * @option lower right
 * @value 3
 * @option left
 * @value 4
 * @option right
 * @value 6
 * @option upper left
 * @value 7
 * @option up
 * @value 8
 * @option upper right
 * @value 9
 * @desc Force the conical light to face a certain direction?
 * @default 0
 *
 * @param followMouse:eval
 * @text Follow Cursor?
 * @parent Direction
 * @type boolean
 * @on Follow Mouse
 * @off Don't Follow
 * @desc Follow the mouse cursor?
 * @default false
 *
 * @param Offsets
 *
 * @param useHandOffset:eval
 * @text Use Hand Offset?
 * @parent Offsets
 * @type boolean
 * @on Hand Offset
 * @off Center Offset
 * @desc Put the light source on the target's "hand" position? Disables the two settings below if on.
 * @default true
 *
 * @param offsetX:num
 * @text Offset X (Non-Hand)
 * @parent Offsets
 * @desc Offset the X position of this light.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param offsetY:num
 * @text Offset Y (Non-Hand)
 * @parent Offsets
 * @desc Offset the Y position of this light.
 * Negative: up. Positive: down.
 * @default +0
 *
 */
/* ----------------------------------------------------------------------------
 * Light Behavior Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Behavior:
 *
 * @param Blink
 *
 * @param blinkRate:num
 * @text Blink Rate
 * @parent Blink
 * @desc What is the rate of occurance for this effect?
 * Use a decimal number between 0 and 1.
 * @default 0.00
 *
 * @param blinkModifier:num
 * @text Blink Modifier
 * @parent Blink
 * @desc Static multiplicative opacity modifier. Before additive.
 * Use a decimal number between -1 and 1. Negatives allowed.
 * @default -0.50
 *
 * @param Flicker
 *
 * @param flickerRate:num
 * @text Flicker Rate
 * @parent Flicker
 * @desc What is the rate of occurance for this effect?
 * Use a decimal number between 0 and 1.
 * @default 0.00
 *
 * @param flickerModifier:num
 * @text Flicker Modifier
 * @parent Flicker
 * @desc Random multiplicative opacity modifier. Before additive.
 * Use a decimal number between -1 and 1. Negatives allowed.
 * @default -0.50
 *
 * @param Flash
 *
 * @param flashRate:num
 * @text Flash Rate
 * @parent Flash
 * @desc What is the rate of occurance for this effect?
 * Use a decimal number between 0 and 1.
 * @default 0.00
 *
 * @param flashModifier:num
 * @text Flash Modifier
 * @parent Flash
 * @desc Static additive opacity modifier. Before multiplicative.
 * Use a decimal number between -1 and 1. Negatives allowed.
 * @default +0.50
 *
 * @param Flare
 *
 * @param flareRate:num
 * @text Flare Rate
 * @parent Flare
 * @desc What is the rate of occurance for this effect?
 * Use a decimal number between 0 and 1.
 * @default 0.00
 *
 * @param flareModifier:num
 * @text Flare Modifier
 * @parent Flare
 * @desc Random additive opacity modifier. Before multiplicative.
 * Use a decimal number between -1 and 1. Negatives allowed.
 * @default +0.50
 * 
 * @param Glow
 *
 * @param glowRate:num
 * @text Glow Rate
 * @parent Glow
 * @desc What is the glow change for this light?
 * Use a decimal number between 0 and 1.
 * @default 0.00
 *
 * @param glowSpeed:num
 * @text Glow Speed
 * @parent Glow
 * @desc What is the speed at which glow oscillates at?
 * Use a decimal number between 0 and 1.
 * @default 0.10
 *
 * @param glowRng:eval
 * @text Randomize Glow?
 * @parent Glow
 * @type boolean
 * @on Randomize
 * @off Structured
 * @desc Offset the glow to oscillate at different starting points?
 * @default true
 * 
 * @param Pulse
 *
 * @param pulseRate:num
 * @text Pulse Rate
 * @parent Pulse
 * @desc What is the pulse change for this light?
 * Use a decimal number between 0 and 1.
 * @default 0.00
 *
 * @param pulseSpeed:num
 * @text Pulse Speed
 * @parent Pulse
 * @desc What is the speed at which pulse oscillates at?
 * Use a decimal number between 0 and 1.
 * @default 0.10
 *
 * @param pulseRng:eval
 * @text Randomize Pulse?
 * @parent Pulse
 * @type boolean
 * @on Randomize
 * @off Structured
 * @desc Offset the pulse to oscillate at different starting points?
 * @default true
 * 
 * @param Pattern
 *
 * @param patternName:str
 * @text Pattern Name
 * @parent Pattern
 * @type select
 * @option none
 * @option normal
 * @option fluorescent
 * @option halogen
 * @option incandescent
 * @option candle
 * @option torch
 * @option campfire
 * @option fast strobe
 * @option slow strobe
 * @option strong pulse
 * @option medium pulse
 * @option slow pulse
 * @option underwater
 * @desc Select the pattern name for this light.
 * Ignore if using any Custom Pattern.
 * @default none
 *
 * @param pattern:str
 * @text Custom Pattern
 * @parent Pattern
 * @desc Create a custom pattern with letters from a to z.
 * Where 'a' is transparent and 'z' is opaque.
 * @default 
 *
 * @param patternDelay:num
 * @text Frame Delay
 * @parent Pattern
 * @type number
 * @min 1
 * @desc What is the frame delay between pattern updates?
 * @default 6
 *
 */
/* ----------------------------------------------------------------------------
 * Hand Offsets Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~HandOffset:
 * 
 * @param StandardDirections
 * @text Standard Directions
 * 
 * @param dir2:struct
 * @text Down
 * @parent StandardDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"-12","pattern0Y:num":"+14","Pattern1":"","pattern1X:num":"-12","pattern1Y:num":"+16","Pattern2":"","pattern2X:num":"-12","pattern2Y:num":"+18","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param dir4:struct
 * @text Left
 * @parent StandardDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"+2","pattern0Y:num":"+16","Pattern1":"","pattern1X:num":"+4","pattern1Y:num":"+16","Pattern2":"","pattern2X:num":"+6","pattern2Y:num":"+16","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param dir6:struct
 * @text Right
 * @parent StandardDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"-2","pattern0Y:num":"+16","Pattern1":"","pattern1X:num":"-4","pattern1Y:num":"+16","Pattern2":"","pattern2X:num":"-6","pattern2Y:num":"+16","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param dir8:struct
 * @text Up
 * @parent StandardDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"+12","pattern0Y:num":"-18","Pattern1":"","pattern1X:num":"+12","pattern1Y:num":"-16","Pattern2":"","pattern2X:num":"+12","pattern2Y:num":"-14","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param DiagonalDirections
 * @text Diagonal Directions
 * 
 * @param dir1:struct
 * @text Lower Left
 * @parent DiagonalDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"+0","pattern0Y:num":"+0","Pattern1":"","pattern1X:num":"+0","pattern1Y:num":"+0","Pattern2":"","pattern2X:num":"+0","pattern2Y:num":"+0","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param dir3:struct
 * @text Lower Right
 * @parent DiagonalDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"+0","pattern0Y:num":"+0","Pattern1":"","pattern1X:num":"+0","pattern1Y:num":"+0","Pattern2":"","pattern2X:num":"+0","pattern2Y:num":"+0","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param dir7:struct
 * @text Upper Left
 * @parent DiagonalDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"+0","pattern0Y:num":"+0","Pattern1":"","pattern1X:num":"+0","pattern1Y:num":"+0","Pattern2":"","pattern2X:num":"+0","pattern2Y:num":"+0","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 * 
 * @param dir9:struct
 * @text Upper Right
 * @parent DiagonalDirections
 * @type struct<PatternOffset>
 * @desc Offsets to determine conical light source position when facing this direction.
 * @default {"Pattern0":"","pattern0X:num":"+0","pattern0Y:num":"+0","Pattern1":"","pattern1X:num":"+0","pattern1Y:num":"+0","Pattern2":"","pattern2X:num":"+0","pattern2Y:num":"+0","Pattern3":"(Unused by Default)","pattern3X:num":"+0","pattern3Y:num":"+0","Pattern4":"(Unused by Default)","pattern4X:num":"+0","pattern4Y:num":"+0","Pattern5":"(Unused by Default)","pattern5X:num":"+0","pattern5Y:num":"+0","Pattern6":"(Unused by Default)","pattern6X:num":"+0","pattern6Y:num":"+0","Pattern7":"(Unused by Default)","pattern7X:num":"+0","pattern7Y:num":"+0","Pattern8":"(Unused by Default)","pattern8X:num":"+0","pattern8Y:num":"+0","Pattern9":"(Unused by Default)","pattern9X:num":"+0","pattern9Y:num":"+0","Pattern10":"(Unused by Default)","pattern10X:num":"+0","pattern10Y:num":"+0"}
 *
 */
/* ----------------------------------------------------------------------------
 * Pattern Offsets Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~PatternOffset:
 *
 * @param Pattern0
 * @text Pattern 0
 *
 * @param pattern0X:num
 * @text Offset X
 * @parent Pattern0
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern0Y:num
 * @text Offset Y
 * @parent Pattern0
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern1
 * @text Pattern 1
 *
 * @param pattern1X:num
 * @text Offset X
 * @parent Pattern1
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern1Y:num
 * @text Offset Y
 * @parent Pattern1
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern2
 * @text Pattern 2
 *
 * @param pattern2X:num
 * @text Offset X
 * @parent Pattern2
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern2Y:num
 * @text Offset Y
 * @parent Pattern2
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern3
 * @text Pattern 3
 * @default (Unused by Default)
 *
 * @param pattern3X:num
 * @text Offset X
 * @parent Pattern3
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern3Y:num
 * @text Offset Y
 * @parent Pattern3
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern4
 * @text Pattern 4
 * @default (Unused by Default)
 *
 * @param pattern4X:num
 * @text Offset X
 * @parent Pattern4
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern4Y:num
 * @text Offset Y
 * @parent Pattern4
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern5
 * @text Pattern 5
 * @default (Unused by Default)
 *
 * @param pattern5X:num
 * @text Offset X
 * @parent Pattern5
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern5Y:num
 * @text Offset Y
 * @parent Pattern5
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern6
 * @text Pattern 6
 * @default (Unused by Default)
 *
 * @param pattern6X:num
 * @text Offset X
 * @parent Pattern6
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern6Y:num
 * @text Offset Y
 * @parent Pattern6
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern7
 * @text Pattern 7
 * @default (Unused by Default)
 *
 * @param pattern7X:num
 * @text Offset X
 * @parent Pattern7
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern7Y:num
 * @text Offset Y
 * @parent Pattern7
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern8
 * @text Pattern 8
 * @default (Unused by Default)
 *
 * @param pattern8X:num
 * @text Offset X
 * @parent Pattern8
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern8Y:num
 * @text Offset Y
 * @parent Pattern8
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern9
 * @text Pattern 9
 * @default (Unused by Default)
 *
 * @param pattern9X:num
 * @text Offset X
 * @parent Pattern9
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern9Y:num
 * @text Offset Y
 * @parent Pattern9
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param Pattern10
 * @text Pattern 10
 * @default (Unused by Default)
 *
 * @param pattern10X:num
 * @text Offset X
 * @parent Pattern10
 * @desc What is the offset X for this pattern?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param pattern10Y:num
 * @text Offset Y
 * @parent Pattern10
 * @desc What is the offset Y for this pattern?
 * Negative: up. Positive: down.
 * @default +0
 *
 */
//=============================================================================

const _0x4022db=_0x48b2;(function(_0x1094f3,_0x3df423){const _0x4897e3=_0x48b2,_0x5714de=_0x1094f3();while(!![]){try{const _0x2c2ab3=-parseInt(_0x4897e3(0x21a))/0x1+parseInt(_0x4897e3(0x3bd))/0x2*(parseInt(_0x4897e3(0x251))/0x3)+-parseInt(_0x4897e3(0x1ec))/0x4*(parseInt(_0x4897e3(0x27d))/0x5)+-parseInt(_0x4897e3(0x3e7))/0x6+-parseInt(_0x4897e3(0x337))/0x7+-parseInt(_0x4897e3(0x21b))/0x8*(-parseInt(_0x4897e3(0x330))/0x9)+parseInt(_0x4897e3(0x180))/0xa;if(_0x2c2ab3===_0x3df423)break;else _0x5714de['push'](_0x5714de['shift']());}catch(_0x3871b4){_0x5714de['push'](_0x5714de['shift']());}}}(_0x44ab,0x987c4));var label=_0x4022db(0x13f),tier=tier||0x0,dependencies=['VisuMZ_0_CoreEngine',_0x4022db(0x12d)],pluginData=$plugins[_0x4022db(0x17d)](function(_0x512076){const _0x1a792f=_0x4022db;return _0x512076[_0x1a792f(0x36a)]&&_0x512076[_0x1a792f(0xd8)][_0x1a792f(0x30c)]('['+label+']');})[0x0];VisuMZ[label][_0x4022db(0x2eb)]=VisuMZ[label][_0x4022db(0x2eb)]||{},VisuMZ[_0x4022db(0x28f)]=function(_0x372d13,_0x4ba94a){const _0x5e86ab=_0x4022db;for(const _0x268225 in _0x4ba94a){if(_0x268225[_0x5e86ab(0x235)](/(.*):(.*)/i)){if(_0x5e86ab(0x144)!==_0x5e86ab(0x288)){const _0x64c023=String(RegExp['$1']),_0x41f23f=String(RegExp['$2'])['toUpperCase']()[_0x5e86ab(0xdb)]();let _0x5bcb2c,_0x49ffe5,_0x17329e;switch(_0x41f23f){case'NUM':_0x5bcb2c=_0x4ba94a[_0x268225]!==''?Number(_0x4ba94a[_0x268225]):0x0;break;case _0x5e86ab(0x2f4):_0x49ffe5=_0x4ba94a[_0x268225]!==''?JSON[_0x5e86ab(0x2f2)](_0x4ba94a[_0x268225]):[],_0x5bcb2c=_0x49ffe5[_0x5e86ab(0x32f)](_0x1d454a=>Number(_0x1d454a));break;case _0x5e86ab(0x127):_0x5bcb2c=_0x4ba94a[_0x268225]!==''?eval(_0x4ba94a[_0x268225]):null;break;case _0x5e86ab(0x16c):_0x49ffe5=_0x4ba94a[_0x268225]!==''?JSON[_0x5e86ab(0x2f2)](_0x4ba94a[_0x268225]):[],_0x5bcb2c=_0x49ffe5[_0x5e86ab(0x32f)](_0x28442b=>eval(_0x28442b));break;case _0x5e86ab(0x2f0):_0x5bcb2c=_0x4ba94a[_0x268225]!==''?JSON[_0x5e86ab(0x2f2)](_0x4ba94a[_0x268225]):'';break;case _0x5e86ab(0x341):_0x49ffe5=_0x4ba94a[_0x268225]!==''?JSON['parse'](_0x4ba94a[_0x268225]):[],_0x5bcb2c=_0x49ffe5[_0x5e86ab(0x32f)](_0x5a980f=>JSON[_0x5e86ab(0x2f2)](_0x5a980f));break;case _0x5e86ab(0x27b):_0x5bcb2c=_0x4ba94a[_0x268225]!==''?new Function(JSON['parse'](_0x4ba94a[_0x268225])):new Function(_0x5e86ab(0x2d6));break;case'ARRAYFUNC':_0x49ffe5=_0x4ba94a[_0x268225]!==''?JSON['parse'](_0x4ba94a[_0x268225]):[],_0x5bcb2c=_0x49ffe5[_0x5e86ab(0x32f)](_0x55ac59=>new Function(JSON[_0x5e86ab(0x2f2)](_0x55ac59)));break;case _0x5e86ab(0x1e0):_0x5bcb2c=_0x4ba94a[_0x268225]!==''?String(_0x4ba94a[_0x268225]):'';break;case _0x5e86ab(0x138):_0x49ffe5=_0x4ba94a[_0x268225]!==''?JSON[_0x5e86ab(0x2f2)](_0x4ba94a[_0x268225]):[],_0x5bcb2c=_0x49ffe5[_0x5e86ab(0x32f)](_0x4dbc2e=>String(_0x4dbc2e));break;case _0x5e86ab(0x203):_0x17329e=_0x4ba94a[_0x268225]!==''?JSON[_0x5e86ab(0x2f2)](_0x4ba94a[_0x268225]):{},_0x5bcb2c=VisuMZ['ConvertParams']({},_0x17329e);break;case _0x5e86ab(0x2ec):_0x49ffe5=_0x4ba94a[_0x268225]!==''?JSON[_0x5e86ab(0x2f2)](_0x4ba94a[_0x268225]):[],_0x5bcb2c=_0x49ffe5[_0x5e86ab(0x32f)](_0x2c122e=>VisuMZ[_0x5e86ab(0x28f)]({},JSON['parse'](_0x2c122e)));break;default:continue;}_0x372d13[_0x64c023]=_0x5bcb2c;}else return this[_0x5e86ab(0x423)]?this['_source']['settings']:{};}}return _0x372d13;},(_0xa8fd33=>{const _0x5e96db=_0x4022db,_0x151e9a=_0xa8fd33[_0x5e96db(0x163)];for(const _0x30b992 of dependencies){if(_0x5e96db(0x325)===_0x5e96db(0x2fa))this['radialLightBehavior']()[_0x5e96db(0x23b)]=_0x3706c7(_0x59e44a['$1'])*0.01;else{if(!Imported[_0x30b992]){if(_0x5e96db(0x25d)!==_0x5e96db(0x25d)){const _0x49e1fa=this[_0x5e96db(0x361)]*(_0x2049e5[_0x5e96db(0x182)]()*(_0x18f165[_0x5e96db(0x3ae)]||0x0));this[_0x5e96db(0x361)]=_0x5ca0d4[_0x5e96db(0x3ca)](this[_0x5e96db(0x361)]+_0x49e1fa)[_0x5e96db(0x17c)](0x0,0xff);}else{alert(_0x5e96db(0xc0)[_0x5e96db(0x3c9)](_0x151e9a,_0x30b992)),SceneManager[_0x5e96db(0x3a3)]();break;}}}}const _0x25a674=_0xa8fd33[_0x5e96db(0xd8)];if(_0x25a674[_0x5e96db(0x235)](/\[Version[ ](.*?)\]/i)){const _0x3c57d7=Number(RegExp['$1']);_0x3c57d7!==VisuMZ[label][_0x5e96db(0x34c)]&&(alert(_0x5e96db(0x3d2)[_0x5e96db(0x3c9)](_0x151e9a,_0x3c57d7)),SceneManager[_0x5e96db(0x3a3)]());}if(_0x25a674[_0x5e96db(0x235)](/\[Tier[ ](\d+)\]/i)){const _0x38320e=Number(RegExp['$1']);_0x38320e<tier?(alert(_0x5e96db(0x12e)[_0x5e96db(0x3c9)](_0x151e9a,_0x38320e,tier)),SceneManager[_0x5e96db(0x3a3)]()):tier=Math[_0x5e96db(0x171)](_0x38320e,tier);}VisuMZ[_0x5e96db(0x28f)](VisuMZ[label][_0x5e96db(0x2eb)],_0xa8fd33[_0x5e96db(0xd6)]);})(pluginData),PluginManager['registerCommand'](pluginData[_0x4022db(0x163)],_0x4022db(0x1a1),_0x178d63=>{const _0x4dc843=_0x4022db;VisuMZ['ConvertParams'](_0x178d63,_0x178d63);const _0x2f22ca=_0x178d63[_0x4dc843(0xc1)],_0xfe4920=_0x178d63['Opacity'],_0x3d2071=_0x178d63[_0x4dc843(0x184)];$gameScreen['shiftLightingOverlayColor'](_0x2f22ca,_0x3d2071),$gameScreen[_0x4dc843(0x1cf)](_0xfe4920,_0x3d2071);}),PluginManager['registerCommand'](pluginData[_0x4022db(0x163)],_0x4022db(0x3ab),_0x213318=>{const _0x481650=_0x4022db;VisuMZ['ConvertParams'](_0x213318,_0x213318);const _0xf47bb6=_0x213318[_0x481650(0xc1)],_0x532809=_0x213318['Duration'];$gameScreen[_0x481650(0x115)](_0xf47bb6,_0x532809);}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],_0x4022db(0x2b7),_0x3518c7=>{const _0x442182=_0x4022db;VisuMZ[_0x442182(0x28f)](_0x3518c7,_0x3518c7);const _0x3da883=_0x3518c7['ActorID'],_0x47c0c1=_0x3518c7[_0x442182(0x2eb)],_0x5a3183=_0x3518c7['Behavior'],_0x4345af=_0x3518c7[_0x442182(0x26b)];for(const _0x3cfc8e of _0x3da883){if(_0x442182(0x2b5)!==_0x442182(0x2b5))this['updateAngle'](),this[_0x442182(0xc7)](),this[_0x442182(0x2c6)](),this['updatePosition']();else{const _0x2f9582=$gameActors[_0x442182(0x20b)](_0x3cfc8e);if(!_0x2f9582)continue;_0x2f9582[_0x442182(0xda)](_0x47c0c1),_0x2f9582['setRadialLightBehavior'](_0x5a3183),_0x2f9582['radialLight']()[_0x442182(0x3e3)]=_0x4345af;}}}),PluginManager[_0x4022db(0x2ba)](pluginData['name'],_0x4022db(0x23c),_0xd0b5ee=>{const _0x58d863=_0x4022db;VisuMZ[_0x58d863(0x28f)](_0xd0b5ee,_0xd0b5ee);const _0x24e7e0=_0xd0b5ee[_0x58d863(0x150)],_0x4b2e44=_0xd0b5ee[_0x58d863(0x2eb)],_0x48166b=_0xd0b5ee[_0x58d863(0x215)],_0x2a65a4=_0xd0b5ee['AutoRadius'];for(const _0xd8eca8 of _0x24e7e0){if(_0x58d863(0x3d1)!==_0x58d863(0x3d1)){_0x3b54a3[_0x58d863(0x28f)](_0x2f03d8,_0x23c650);const _0x3d4461=_0x18f3b4[_0x58d863(0xc1)],_0x1bb390=_0x173d3e[_0x58d863(0x237)],_0x404a8f=_0x56fa6f['Duration'];_0x369fd0[_0x58d863(0x35c)](_0x3d4461,_0x404a8f),_0x2ac581[_0x58d863(0x1cf)](_0x1bb390,_0x404a8f);}else{const _0x3ab6fb=$gameTroop[_0x58d863(0x101)]()[_0xd8eca8];if(!_0x3ab6fb)continue;_0x3ab6fb[_0x58d863(0xda)](_0x4b2e44),_0x3ab6fb[_0x58d863(0x3c6)](_0x48166b),_0x3ab6fb[_0x58d863(0x2d8)]()[_0x58d863(0x3e3)]=_0x2a65a4;}}}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],_0x4022db(0x1ba),_0x28b466=>{const _0x403736=_0x4022db;VisuMZ[_0x403736(0x28f)](_0x28b466,_0x28b466);const _0x4d144b=_0x28b466[_0x403736(0x2eb)],_0x4c8035=_0x28b466[_0x403736(0x215)];$gamePlayer[_0x403736(0xda)](_0x4d144b),$gamePlayer[_0x403736(0x3c6)](_0x4c8035);}),PluginManager[_0x4022db(0x2ba)](pluginData['name'],'RadialLightChangeFollowerSettings',_0x5beb20=>{const _0x2c0ee8=_0x4022db;VisuMZ['ConvertParams'](_0x5beb20,_0x5beb20);const _0x2af831=_0x5beb20[_0x2c0ee8(0x2eb)],_0x3297ce=_0x5beb20[_0x2c0ee8(0x215)];$gamePlayer['setFollowerRadialLightSettings'](_0x2af831),$gamePlayer['setFollowerRadialLightBehavior'](_0x3297ce);}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],_0x4022db(0x295),_0x4a7fe1=>{const _0x503eaf=_0x4022db;VisuMZ['ConvertParams'](_0x4a7fe1,_0x4a7fe1);const _0xea9da5=_0x4a7fe1[_0x503eaf(0x16d)],_0x584638=_0x4a7fe1[_0x503eaf(0x2eb)],_0x513e65=_0x4a7fe1[_0x503eaf(0x215)],_0x47c68d=$gameTemp[_0x503eaf(0x24c)]();for(let _0x5a651f of _0xea9da5){if(_0x5a651f===0x0)_0x5a651f=_0x47c68d[_0x503eaf(0x3a7)]();const _0x21605f=$gameMap['event'](_0x5a651f);_0x21605f&&(_0x21605f[_0x503eaf(0xda)](_0x584638),_0x21605f[_0x503eaf(0x3c6)](_0x513e65));}}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],_0x4022db(0xf7),_0x2983cb=>{const _0x4c5d08=_0x4022db;VisuMZ['ConvertParams'](_0x2983cb,_0x2983cb);const _0x3d8755=$gameMap[_0x4c5d08(0x396)](),_0x1ae9c2=_0x2983cb[_0x4c5d08(0x35d)],_0x266a99=_0x2983cb[_0x4c5d08(0x258)],_0x138436=_0x2983cb[_0x4c5d08(0x3f1)],_0x2ee38c=_0x2983cb['UnboardedBehavior'];if(_0x3d8755){const _0x179573=!![];_0x3d8755[_0x4c5d08(0x260)](_0x1ae9c2,!![],_0x179573,![]),_0x3d8755['setVehicleLightingData'](_0x266a99,!![],_0x179573,!![]),_0x3d8755[_0x4c5d08(0x260)](_0x138436,![],_0x179573,![]),_0x3d8755[_0x4c5d08(0x260)](_0x2ee38c,![],_0x179573,!![]);}}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],_0x4022db(0x2c3),_0x4f025f=>{const _0x4ad874=_0x4022db;VisuMZ['ConvertParams'](_0x4f025f,_0x4f025f);const _0x4c56a9=$gameMap['ship'](),_0x2c9660=_0x4f025f[_0x4ad874(0x35d)],_0x240cf5=_0x4f025f[_0x4ad874(0x258)],_0xad7d31=_0x4f025f['UnboardedSettings'],_0x954084=_0x4f025f['UnboardedBehavior'];if(_0x4c56a9){const _0x1a6de6=!![];_0x4c56a9[_0x4ad874(0x260)](_0x2c9660,!![],_0x1a6de6,![]),_0x4c56a9[_0x4ad874(0x260)](_0x240cf5,!![],_0x1a6de6,!![]),_0x4c56a9[_0x4ad874(0x260)](_0xad7d31,![],_0x1a6de6,![]),_0x4c56a9[_0x4ad874(0x260)](_0x954084,![],_0x1a6de6,!![]);}}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],_0x4022db(0x2ff),_0x487752=>{const _0x4c99f4=_0x4022db;VisuMZ[_0x4c99f4(0x28f)](_0x487752,_0x487752);const _0x4f8894=$gameMap[_0x4c99f4(0x313)](),_0x396253=_0x487752[_0x4c99f4(0x35d)],_0x4fc78e=_0x487752[_0x4c99f4(0x258)],_0x1969eb=_0x487752[_0x4c99f4(0x3f1)],_0x295f02=_0x487752[_0x4c99f4(0x16f)];if(_0x4f8894){if(_0x4c99f4(0x242)===_0x4c99f4(0x2f3))this[_0x4c99f4(0x1ab)]&&this[_0x4c99f4(0x1ab)][_0x4c99f4(0x329)]&&this[_0x4c99f4(0x1ab)]['_lightContainer'][_0x4c99f4(0x377)](_0x1a858d);else{const _0x434270=!![];_0x4f8894[_0x4c99f4(0x260)](_0x396253,!![],_0x434270,![]),_0x4f8894[_0x4c99f4(0x260)](_0x4fc78e,!![],_0x434270,!![]),_0x4f8894[_0x4c99f4(0x260)](_0x1969eb,![],_0x434270,![]),_0x4f8894[_0x4c99f4(0x260)](_0x295f02,![],_0x434270,!![]);}}}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],_0x4022db(0x1d3),_0x19b241=>{const _0x497001=_0x4022db;VisuMZ[_0x497001(0x28f)](_0x19b241,_0x19b241);const _0x5a848c=_0x19b241[_0x497001(0x2eb)],_0x1acd49=_0x19b241[_0x497001(0x215)];$gamePlayer['setConicalLightSettings'](_0x5a848c),$gamePlayer[_0x497001(0x220)](_0x1acd49);}),PluginManager[_0x4022db(0x2ba)](pluginData['name'],_0x4022db(0x1b9),_0x288226=>{const _0x2836ab=_0x4022db;VisuMZ[_0x2836ab(0x28f)](_0x288226,_0x288226);const _0x424d94=_0x288226[_0x2836ab(0x2eb)],_0x327c55=_0x288226[_0x2836ab(0x215)];$gamePlayer[_0x2836ab(0xd5)](_0x424d94),$gamePlayer[_0x2836ab(0x2ca)](_0x327c55);}),PluginManager[_0x4022db(0x2ba)](pluginData['name'],_0x4022db(0xfc),_0x4139f2=>{const _0x40c866=_0x4022db;VisuMZ[_0x40c866(0x28f)](_0x4139f2,_0x4139f2);const _0x1e89ae=_0x4139f2['EventID'],_0x49b8a7=_0x4139f2[_0x40c866(0x2eb)],_0xd9c3fc=_0x4139f2[_0x40c866(0x215)],_0x194793=$gameTemp[_0x40c866(0x24c)]();for(let _0x14c80c of _0x1e89ae){if(_0x14c80c===0x0)_0x14c80c=_0x194793[_0x40c866(0x3a7)]();const _0xef3c9f=$gameMap[_0x40c866(0x419)](_0x14c80c);if(_0xef3c9f){if(_0x40c866(0x172)==='liGoV')_0xef3c9f[_0x40c866(0x259)](_0x49b8a7),_0xef3c9f['setConicalLightBehavior'](_0xd9c3fc);else{_0x429cf2[_0x40c866(0x28f)](_0x425d4f,_0x38b812);const _0x555b47=_0x470bbf[_0x40c866(0x313)](),_0x4ad903=_0x54423f[_0x40c866(0x293)],_0x37b631=_0x40bafa[_0x40c866(0x14f)];_0x555b47&&(_0x555b47[_0x40c866(0xe8)](_0x4ad903,!![]),_0x555b47[_0x40c866(0xe8)](_0x37b631,![]));}}}}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],_0x4022db(0x1bd),_0x3cbc15=>{const _0x230f2c=_0x4022db;VisuMZ[_0x230f2c(0x28f)](_0x3cbc15,_0x3cbc15);const _0x42dfee=$gameMap[_0x230f2c(0x396)](),_0x5992c3=_0x3cbc15[_0x230f2c(0x35d)],_0x4acf13=_0x3cbc15[_0x230f2c(0x258)],_0x42bf9b=_0x3cbc15[_0x230f2c(0x3f1)],_0x554695=_0x3cbc15['UnboardedBehavior'];if(_0x42dfee){const _0x587d3a=![];_0x42dfee[_0x230f2c(0x260)](_0x5992c3,!![],_0x587d3a,![]),_0x42dfee[_0x230f2c(0x260)](_0x4acf13,!![],_0x587d3a,!![]),_0x42dfee[_0x230f2c(0x260)](_0x42bf9b,![],_0x587d3a,![]),_0x42dfee[_0x230f2c(0x260)](_0x554695,![],_0x587d3a,!![]);}}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],'ConicalLightChangeShipSettings',_0x4032ec=>{const _0x4376ce=_0x4022db;VisuMZ['ConvertParams'](_0x4032ec,_0x4032ec);const _0x297c18=$gameMap[_0x4376ce(0x282)](),_0x58e157=_0x4032ec[_0x4376ce(0x35d)],_0x4cbfda=_0x4032ec[_0x4376ce(0x258)],_0xb78862=_0x4032ec[_0x4376ce(0x3f1)],_0x5c34fb=_0x4032ec[_0x4376ce(0x16f)];if(_0x297c18){const _0x61bc7f=![];_0x297c18[_0x4376ce(0x260)](_0x58e157,!![],_0x61bc7f,![]),_0x297c18['setVehicleLightingData'](_0x4cbfda,!![],_0x61bc7f,!![]),_0x297c18[_0x4376ce(0x260)](_0xb78862,![],_0x61bc7f,![]),_0x297c18['setVehicleLightingData'](_0x5c34fb,![],_0x61bc7f,!![]);}}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],_0x4022db(0x277),_0x42cf8e=>{const _0x13d3ca=_0x4022db;VisuMZ[_0x13d3ca(0x28f)](_0x42cf8e,_0x42cf8e);const _0x466c1a=$gameMap[_0x13d3ca(0x313)](),_0x140dc0=_0x42cf8e[_0x13d3ca(0x35d)],_0x3e6949=_0x42cf8e[_0x13d3ca(0x258)],_0x5c0ad8=_0x42cf8e[_0x13d3ca(0x3f1)],_0x544d86=_0x42cf8e[_0x13d3ca(0x16f)];if(_0x466c1a){const _0x394f86=![];_0x466c1a[_0x13d3ca(0x260)](_0x140dc0,!![],_0x394f86,![]),_0x466c1a[_0x13d3ca(0x260)](_0x3e6949,!![],_0x394f86,!![]),_0x466c1a[_0x13d3ca(0x260)](_0x5c0ad8,![],_0x394f86,![]),_0x466c1a[_0x13d3ca(0x260)](_0x544d86,![],_0x394f86,!![]);}}),PluginManager['registerCommand'](pluginData[_0x4022db(0x163)],_0x4022db(0x19e),_0x83113f=>{const _0x58a63e=_0x4022db;VisuMZ[_0x58a63e(0x28f)](_0x83113f,_0x83113f);const _0x3ff2a8=_0x83113f[_0x58a63e(0x372)],_0x911c3d=_0x83113f[_0x58a63e(0xe2)],_0x1674cd=_0x83113f['HandOffset'],_0xfbda5f=_0x83113f[_0x58a63e(0x3f7)],_0x5dbc6a=_0x83113f[_0x58a63e(0x335)];for(const _0x2d98b7 of _0x3ff2a8){if(_0x58a63e(0x2db)!==_0x58a63e(0x39d)){const _0x3a9f79=$gameActors[_0x58a63e(0x20b)](_0x2d98b7);if(!_0x3a9f79)continue;_0x3a9f79['setConicalLightWalkOffsets'](_0x1674cd),_0x3a9f79[_0x58a63e(0x2c7)](_0xfbda5f),_0x3a9f79['setConicalLightJumpOffsets'](_0x5dbc6a),_0x3a9f79===$gameParty[_0x58a63e(0x401)]()?$gamePlayer[_0x58a63e(0x24f)]()['useHandOffset']=_0x911c3d:$gamePlayer[_0x58a63e(0x410)]()[_0x58a63e(0x390)]=_0x911c3d;}else this[_0x58a63e(0x298)]()['flickerRate']=_0x4680da(_0x28dcb8['$1'])*0.01;}}),PluginManager['registerCommand'](pluginData[_0x4022db(0x163)],_0x4022db(0x27f),_0x319733=>{const _0x498be7=_0x4022db;VisuMZ[_0x498be7(0x28f)](_0x319733,_0x319733);const _0x385f60=_0x319733[_0x498be7(0x16d)],_0x1a170c=_0x319733['Enable'],_0x52e3bf=_0x319733[_0x498be7(0x16b)],_0x96df73=_0x319733[_0x498be7(0x3f7)],_0x2bfe9d=_0x319733['VsJumpOffset'],_0x2223e7=$gameTemp[_0x498be7(0x24c)]();for(let _0x54ba63 of _0x385f60){if(_0x498be7(0x20e)!==_0x498be7(0x20e)){const _0x3e4c5b=!![];_0x1af3ba['setVehicleLightingData'](_0x3479db,!![],_0x3e4c5b,![]),_0x345b09[_0x498be7(0x260)](_0x3a8c05,!![],_0x3e4c5b,!![]),_0x2b65b2['setVehicleLightingData'](_0x104ab8,![],_0x3e4c5b,![]),_0x3a4a6e[_0x498be7(0x260)](_0x37a4ee,![],_0x3e4c5b,!![]);}else{if(_0x54ba63===0x0)_0x54ba63=_0x2223e7[_0x498be7(0x3a7)]();const _0x29242e=$gameMap['event'](_0x54ba63);_0x29242e&&(_0x29242e['setConicalLightWalkOffsets'](_0x52e3bf),_0x29242e[_0x498be7(0x2c7)](_0x96df73),_0x29242e[_0x498be7(0x31d)](_0x2bfe9d),_0x29242e['conicalLight']()[_0x498be7(0x390)]=_0x1a170c);}}}),PluginManager[_0x4022db(0x2ba)](pluginData['name'],_0x4022db(0x2a7),_0x126318=>{const _0x161ab9=_0x4022db;VisuMZ[_0x161ab9(0x28f)](_0x126318,_0x126318);const _0x1ea3eb=$gameMap[_0x161ab9(0x396)](),_0x4136dd=_0x126318[_0x161ab9(0x293)],_0x887b19=_0x126318[_0x161ab9(0x14f)];_0x1ea3eb&&(_0x161ab9(0x227)!=='rGvkK'?(_0x5e8ade[_0x161ab9(0xc6)](_0x5967a6),_0x14147c[_0x161ab9(0x2c7)](_0x3d28b5),_0x56ae9d['setConicalLightJumpOffsets'](_0x528465),_0x41b81d[_0x161ab9(0x24f)]()['useHandOffset']=_0x2dbc8a):(_0x1ea3eb['setVehicleLightingConicalOffset'](_0x4136dd,!![]),_0x1ea3eb['setVehicleLightingConicalOffset'](_0x887b19,![])));}),PluginManager[_0x4022db(0x2ba)](pluginData['name'],'ConicalOffsetChangeShip',_0x133b1c=>{const _0xd7184=_0x4022db;VisuMZ[_0xd7184(0x28f)](_0x133b1c,_0x133b1c);const _0xaf0c65=$gameMap[_0xd7184(0x282)](),_0x1c1609=_0x133b1c[_0xd7184(0x293)],_0x1b95ca=_0x133b1c[_0xd7184(0x14f)];_0xaf0c65&&(_0xaf0c65[_0xd7184(0xe8)](_0x1c1609,!![]),_0xaf0c65['setVehicleLightingConicalOffset'](_0x1b95ca,![]));}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],_0x4022db(0x348),_0x3feab1=>{const _0x49b9c2=_0x4022db;VisuMZ[_0x49b9c2(0x28f)](_0x3feab1,_0x3feab1);const _0xc656b9=$gameMap[_0x49b9c2(0x313)](),_0x27356e=_0x3feab1[_0x49b9c2(0x293)],_0x4675c2=_0x3feab1[_0x49b9c2(0x14f)];_0xc656b9&&(_0x49b9c2(0x1a2)===_0x49b9c2(0x345)?this['conicalLightBehavior']()[_0x49b9c2(0xfb)]=_0x32a4f2(_0x260b24['$1'])*0.01:(_0xc656b9[_0x49b9c2(0xe8)](_0x27356e,!![]),_0xc656b9['setVehicleLightingConicalOffset'](_0x4675c2,![])));}),VisuMZ[_0x4022db(0x13f)][_0x4022db(0x386)]=function(_0x3e6b35,_0x5c89d3){const _0x1ce4b2=_0x4022db;VisuMZ[_0x1ce4b2(0x28f)](_0x3e6b35,_0x3e6b35);const _0x2f88f9=_0x3e6b35[_0x1ce4b2(0x2eb)],_0xf98183=_0x3e6b35[_0x1ce4b2(0x215)],_0x5abf47=_0x3e6b35['UpdateFunc'],_0x166421=_0x3e6b35[_0x1ce4b2(0x344)]||0x0,_0x3e413e=_0x3e6b35[_0x1ce4b2(0x385)],_0x49345d=_0x3e6b35[_0x1ce4b2(0x268)],_0x19b50a=_0x3e6b35[_0x1ce4b2(0x1ce)]||0x0,_0xdbdc6b={'active':!![],'settings':JsonEx['makeDeepCopy'](_0x2f88f9),'behavior':JsonEx[_0x1ce4b2(0x108)](_0xf98183),'type':_0x5c89d3,'originX':_0x3e6b35[_0x1ce4b2(0x41a)]||0x0,'originY':_0x3e6b35[_0x1ce4b2(0x12a)]||0x0,'update':_0x5abf47,'initialTime':_0x166421,'time':_0x166421,'expire':_0x19b50a===0x0?Number['MAX_SAFE_INTEGER']:_0x19b50a,'x':0x0,'y':0x0};_0x5c89d3===_0x1ce4b2(0x17b)&&(_0xdbdc6b['followerIndex']=_0x3e6b35['FollowerIndex']||0x0);if(_0x5c89d3===_0x1ce4b2(0x419)){if(_0x1ce4b2(0xe1)==='deEJF'){const _0x73ae1e=_0x5eb0a0[_0x1ce4b2(0x264)](_0x53f46d);_0x73ae1e&&(_0x4b1eb3=-(_0x73ae1e[_0x1ce4b2(0x3a1)]/0x2));}else{_0xdbdc6b[_0x1ce4b2(0x3a7)]=_0x3e6b35[_0x1ce4b2(0x16d)]||0x0;if(_0xdbdc6b[_0x1ce4b2(0x3a7)]===0x0){const _0x400b89=$gameTemp[_0x1ce4b2(0x24c)]();_0xdbdc6b[_0x1ce4b2(0x3a7)]=_0x400b89[_0x1ce4b2(0x3a7)]();}}}for(let _0x25ba4e=0x0;_0x25ba4e<_0x3e413e;_0x25ba4e++){const _0x1c6c71=JsonEx[_0x1ce4b2(0x108)](_0xdbdc6b),_0x17c909=_0x166421+_0x25ba4e*_0x49345d;_0x1c6c71[_0x1ce4b2(0x281)]=_0x17c909,$gameMap[_0x1ce4b2(0x10f)](_0x1c6c71);}},PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],'LightSpawnNewMapLockedLight',_0x23bca0=>{const _0x390eab=_0x4022db;if(SceneManager[_0x390eab(0x382)]())return;VisuMZ[_0x390eab(0x13f)]['SpawnLights'](_0x23bca0,_0x390eab(0x32f));}),PluginManager[_0x4022db(0x2ba)](pluginData['name'],_0x4022db(0x29f),_0x13803d=>{const _0x60a461=_0x4022db;if(SceneManager[_0x60a461(0x382)]())return;VisuMZ[_0x60a461(0x13f)][_0x60a461(0x386)](_0x13803d,_0x60a461(0x3f8));}),PluginManager[_0x4022db(0x2ba)](pluginData['name'],'LightSpawnNewPlayerLockedLight',_0x4778ea=>{const _0x2873e5=_0x4022db;if(SceneManager[_0x2873e5(0x382)]())return;VisuMZ[_0x2873e5(0x13f)]['SpawnLights'](_0x4778ea,_0x2873e5(0x195));}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],_0x4022db(0x3f3),_0x14f398=>{const _0x334f1e=_0x4022db;if(SceneManager['isSceneBattle']())return;VisuMZ[_0x334f1e(0x13f)][_0x334f1e(0x386)](_0x14f398,_0x334f1e(0x17b));}),PluginManager[_0x4022db(0x2ba)](pluginData[_0x4022db(0x163)],_0x4022db(0x2cd),_0x39fdf8=>{const _0x31327a=_0x4022db;if(SceneManager['isSceneBattle']())return;VisuMZ[_0x31327a(0x13f)][_0x31327a(0x386)](_0x39fdf8,'event');}),PluginManager['registerCommand'](pluginData[_0x4022db(0x163)],_0x4022db(0x193),_0x38db5e=>{const _0x41c3ee=_0x4022db;if(SceneManager['isSceneBattle']())return;for(const _0x4b7390 of $gameMap[_0x41c3ee(0x12f)]()){if(!_0x4b7390)continue;if(!_0x4b7390[_0x41c3ee(0x19d)])continue;if(_0x4b7390[_0x41c3ee(0x353)]<0xa)continue;_0x4b7390[_0x41c3ee(0x353)]=0xa;}}),VisuMZ[_0x4022db(0x13f)][_0x4022db(0x3c5)]={'AutoTint':/<(?:AUTOTINT|AUTO-TINT|AUTOTONE|AUTO-TONE):[ ](.*)>/i,'lightingOverlayColor':/<(?:OVERLAY|OVERLAY COLOR):[ ](.*)>/i,'lightingOverlayOpacityValue':/<(?:OVERLAY) OPACITY:[ ](\d+)>/i,'lightingOverlayOpacityRate':/<(?:OVERLAY) OPACITY:[ ](\d+)([%％])>/i,'noLightingOverlay':/<NO (?:OVERLAY|DARKNESS OVERLAY)>/i,'antiLightMaskHardRegions':/<HARD (?:ANTILIGHT|ANTI-LIGHT) (?:REGION|REGIONS):[ ](.*)>/i,'antiLightMaskHardTerrainTags':/<HARD (?:ANTILIGHT|ANTI-LIGHT) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'antiLightMaskSoftRegions':/<SOFT (?:ANTILIGHT|ANTI-LIGHT) (?:REGION|REGIONS):[ ](.*)>/i,'antiLightMaskSoftTerrainTags':/<SOFT (?:ANTILIGHT|ANTI-LIGHT) TERRAIN (?:TAG|TAGS):[ ](.*)>/i,'RadialLightGeneric':/<(?:LIGHT|RADIAL LIGHT)>/i,'RadialLightCatchAll':/<(?:LIGHT|RADIAL LIGHT)[ ](.*?)>/i,'RadialLightTurnOff':/<NO (?:LIGHT|RADIAL LIGHT)>/i,'RadialLightFilename':/<(?:LIGHT|RADIAL LIGHT) FILENAME:[ ](.*?)>/i,'RadialLightColor':/<(?:LIGHT|RADIAL LIGHT) COLOR:[ ](.*?)>/i,'RadialLightRadius':/<(?:LIGHT|RADIAL LIGHT) RADIUS:[ ](\d+)>/i,'RadialLightDiameter':/<(?:LIGHT|RADIAL LIGHT) DIAMETER:[ ](\d+)>/i,'RadialLightIntensity':/<(?:LIGHT|RADIAL LIGHT) INTENSITY:[ ](\d+)([%％])>/i,'RadialLightAngle':/<(?:LIGHT|RADIAL LIGHT) ANGLE:[ ](\d+)>/i,'RadialLightRotateSpeed':/<(?:LIGHT|RADIAL LIGHT) ROTATE SPEED:[ ]([\+\-]\d+)>/i,'RadialLightBlendMode':/<(?:LIGHT|RADIAL LIGHT) BLEND MODE:[ ](.*?)>/i,'RadialLightOpacityFlat':/<(?:LIGHT|RADIAL LIGHT) OPACITY:[ ](\d+)>/i,'RadialLightOpacityRate':/<(?:LIGHT|RADIAL LIGHT) OPACITY:[ ](\d+)([%％])>/i,'RadialLightOffset':/<(?:LIGHT|RADIAL LIGHT) OFFSET:[ ](.*?)>/i,'RadialBehaviorBlinkRate':/<(?:LIGHT|RADIAL LIGHT) BLINK RATE:[ ](\d+)([%％])>/i,'RadialBehaviorBlinkMod':/<(?:LIGHT|RADIAL LIGHT) BLINK MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'RadialBehaviorFlickerRate':/<(?:LIGHT|RADIAL LIGHT) FLICKER RATE:[ ](\d+)([%％])>/i,'RadialBehaviorFlickerMod':/<(?:LIGHT|RADIAL LIGHT) FLICKER MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'RadialBehaviorFlashRate':/<(?:LIGHT|RADIAL LIGHT) FLASH RATE:[ ](\d+)([%％])>/i,'RadialBehaviorFlashMod':/<(?:LIGHT|RADIAL LIGHT) FLASH MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'RadialBehaviorFlareRate':/<(?:LIGHT|RADIAL LIGHT) FLARE RATE:[ ](\d+)([%％])>/i,'RadialBehaviorFlareMod':/<(?:LIGHT|RADIAL LIGHT) FLARE MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'RadialBehaviorGlowRate':/<(?:LIGHT|RADIAL LIGHT) GLOW RATE:[ ](\d+)([%％])>/i,'RadialBehaviorGlowSpeed':/<(?:LIGHT|RADIAL LIGHT) GLOW SPEED:[ ](\d+)([%％])>/i,'RadialBehaviorGlowRng':/<(?:LIGHT|RADIAL LIGHT) GLOW RANDOM>/i,'RadialBehaviorGlowNoRng':/<(?:LIGHT|RADIAL LIGHT) GLOW NO RANDOM>/i,'RadialBehaviorPulseRate':/<(?:LIGHT|RADIAL LIGHT) PULSE RATE:[ ](\d+)([%％])>/i,'RadialBehaviorPulseSpeed':/<(?:LIGHT|RADIAL LIGHT) PULSE SPEED:[ ](\d+)([%％])>/i,'RadialBehaviorPulseRng':/<(?:LIGHT|RADIAL LIGHT) PULSE RANDOM>/i,'RadialBehaviorPulseNoRng':/<(?:LIGHT|RADIAL LIGHT) PULSE NO RANDOM>/i,'RadialBehaviorPatternPreset':/<(?:LIGHT|RADIAL LIGHT) PATTERN TYPE:[ ](.*?)>/i,'RadialBehaviorPatternSequence':/<(?:LIGHT|RADIAL LIGHT) (?:PATTERN|PATTERN TABLE|CUSTOM PATTERN):[ ](.*?)>/i,'RadialBehaviorPatternUpdateDelay':/<(?:LIGHT|RADIAL LIGHT) PATTERN (?:DELAY|UPDATE DELAY):[ ](\d+)>/i,'ConicalLightGeneric':/<(?:CONICAL LIGHT|TORCH)>/i,'ConicalLightCatchAll':/<(?:CONICAL LIGHT|TORCH)[ ](.*?)>/i,'ConicalLightTurnOff':/<NO (?:CONICAL LIGHT|TORCH)>/i,'ConicalLightFilename':/<(?:CONICAL LIGHT|TORCH) FILENAME:[ ](.*?)>/i,'ConicalLightFileAngleOffset':/<(?:CONICAL LIGHT|TORCH) FILE ANGLE OFFSET:[ ]([\+\-]\d+)>/i,'ConicalLightFileAnchor':/<(?:CONICAL LIGHT|TORCH) FILE ANCHOR:[ ](.*?)>/i,'ConicalLightColor':/<(?:CONICAL LIGHT|TORCH) COLOR:[ ](.*?)>/i,'ConicalLightRadius':/<(?:CONICAL LIGHT|TORCH) RADIUS:[ ](\d+)>/i,'ConicalLightDiameter':/<(?:CONICAL LIGHT|TORCH) DIAMETER:[ ](\d+)>/i,'ConicalLightSrcRadius':/<(?:CONICAL LIGHT|TORCH) (?:SOURCE|MINI) RADIUS:[ ](\d+)>/i,'ConicalLightSrcDiameter':/<(?:CONICAL LIGHT|TORCH) (?:SOURCE|MINI) DIAMETER:[ ](\d+)>/i,'ConicalLightIntensity':/<(?:CONICAL LIGHT|TORCH) INTENSITY:[ ](\d+)([%％])>/i,'ConicalLightBlendMode':/<(?:CONICAL LIGHT|TORCH) BLEND MODE:[ ](.*?)>/i,'ConicalLightOpacityFlat':/<(?:CONICAL LIGHT|TORCH) OPACITY:[ ](\d+)>/i,'ConicalLightOpacityRate':/<(?:CONICAL LIGHT|TORCH) OPACITY:[ ](\d+)([%％])>/i,'ConicalLightAngle':/<(?:CONICAL LIGHT|TORCH) ANGLE:[ ](\d+)>/i,'ConicalLightAngleSway':/<(?:CONICAL LIGHT|TORCH) ANGLE SWAY:[ ](\d+)>/i,'ConicalLightSwaySpeed':/<(?:CONICAL LIGHT|TORCH) SWAY SPEED:[ ](\d+)([%％])>/i,'ConicalLightSwayRng':/<(?:CONICAL LIGHT|TORCH) SWAY RANDOM>/i,'ConicalLightSwayNoRng':/<(?:CONICAL LIGHT|TORCH) SWAY NO RANDOM>/i,'ConicalLightForceDir':/<(?:CONICAL LIGHT|TORCH) FORCE DIRECTION:[ ](.*?)>/i,'ConicalLightFollowMouse':/<(?:CONICAL LIGHT|TORCH) FOLLOW (?:CURSOR|MOUSE)>/i,'ConicalLightNoFollowMouse':/<(?:CONICAL LIGHT|TORCH) (?:NO|NOT) FOLLOW (?:CURSOR|MOUSE)>/i,'ConicalLightUseHandOffset':/<(?:CONICAL LIGHT|TORCH) HAND OFFSET>/i,'ConicalLightCentralOffset':/<(?:CONICAL LIGHT|TORCH) (?:CENTER|CENTRAL) OFFSET>/i,'ConicalLightOffset':/<(?:CONICAL LIGHT|TORCH) OFFSET:[ ](.*?)>/i,'ConicalBehaviorBlinkRate':/<(?:CONICAL LIGHT|TORCH) BLINK RATE:[ ](\d+)([%％])>/i,'ConicalBehaviorBlinkMod':/<(?:CONICAL LIGHT|TORCH) BLINK MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'ConicalBehaviorFlickerRate':/<(?:CONICAL LIGHT|TORCH) FLICKER RATE:[ ](\d+)([%％])>/i,'ConicalBehaviorFlickerMod':/<(?:CONICAL LIGHT|TORCH) FLICKER MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'ConicalBehaviorFlashRate':/<(?:CONICAL LIGHT|TORCH) FLASH RATE:[ ](\d+)([%％])>/i,'ConicalBehaviorFlashMod':/<(?:CONICAL LIGHT|TORCH) FLASH MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'ConicalBehaviorFlareRate':/<(?:CONICAL LIGHT|TORCH) FLARE RATE:[ ](\d+)([%％])>/i,'ConicalBehaviorFlareMod':/<(?:CONICAL LIGHT|TORCH) FLARE MODIFIER:[ ]([\+\-]\d+)([%％])>/i,'ConicalBehaviorGlowRate':/<(?:CONICAL LIGHT|TORCH) GLOW RATE:[ ](\d+)([%％])>/i,'ConicalBehaviorGlowSpeed':/<(?:CONICAL LIGHT|TORCH) GLOW SPEED:[ ](\d+)([%％])>/i,'ConicalBehaviorGlowRng':/<(?:CONICAL LIGHT|TORCH) GLOW RANDOM>/i,'ConicalBehaviorGlowNoRng':/<(?:CONICAL LIGHT|TORCH) GLOW NO RANDOM>/i,'ConicalBehaviorPulseRate':/<(?:CONICAL LIGHT|TORCH) PULSE RATE:[ ](\d+)([%％])>/i,'ConicalBehaviorPulseSpeed':/<(?:CONICAL LIGHT|TORCH) PULSE SPEED:[ ](\d+)([%％])>/i,'ConicalBehaviorPulseRng':/<(?:CONICAL LIGHT|TORCH) PULSE RANDOM>/i,'ConicalBehaviorPulseNoRng':/<(?:CONICAL LIGHT|TORCH) PULSE NO RANDOM>/i,'ConicalBehaviorPatternPreset':/<(?:CONICAL LIGHT|TORCH) PATTERN TYPE:[ ](.*?)>/i,'ConicalBehaviorPatternSequence':/<(?:CONICAL LIGHT|TORCH) (?:PATTERN|PATTERN TABLE):[ ](.*?)>/i,'ConicalBehaviorPatternUpdateDelay':/<(?:CONICAL LIGHT|TORCH) PATTERN (?:DELAY|UPDATE DELAY):[ ](\d+)>/i,'ConicalLightHandOffset':/<(?:CONICAL LIGHT|TORCH) (.*?) PATTERN (\d+) OFFSET:[ ](.*?)>/gi},Bitmap[_0x4022db(0xd7)][_0x4022db(0x3fc)]=function(_0x791c76,_0x3f5d52){this['drawRadialLight'](_0x791c76,_0x3f5d52,0.5);},Bitmap['prototype'][_0x4022db(0x122)]=function(_0xe24e28,_0x44f001,_0x4643f6){const _0x23240e=_0x4022db,_0x5d6a55=0x168,_0x8303db=0x1,_0x3e8c1a=0x0;this[_0x23240e(0x28e)](_0xe24e28,_0x5d6a55,_0x44f001,_0x4643f6,_0x8303db,_0x3e8c1a);},Bitmap[_0x4022db(0xd7)][_0x4022db(0x28e)]=function(_0x177cf9,_0x256270,_0x3488ce,_0x47e929,_0x113423,_0x2db7cf){const _0x5a4c49=_0x4022db;_0x47e929=_0x47e929[_0x5a4c49(0x17c)](0.000001,0.999999);const _0x509f7d=this[_0x5a4c49(0x1b8)],_0x2cacc8=_0x256270*(Math['PI']/0xb4),_0xe30b69=_0x177cf9*0x2,_0x6caafb=_0x509f7d[_0x5a4c49(0x175)](_0x177cf9,_0x177cf9,_0x2db7cf,_0x177cf9,_0x177cf9,_0x177cf9),_0x2ea57e=ColorManager[_0x5a4c49(0x3a8)](_0x3488ce,_0x113423),_0xe8432f=ColorManager['hexToRgba'](_0x3488ce,0x1),_0xc32558=ColorManager['hexToRgba'](_0x3488ce,0x0);_0x6caafb[_0x5a4c49(0x2fd)](0x0,_0x2ea57e),_0x6caafb[_0x5a4c49(0x2fd)](_0x47e929/0x2,_0xe8432f),_0x6caafb[_0x5a4c49(0x2fd)](_0x47e929,_0xe8432f),_0x6caafb['addColorStop'](0x1,_0xc32558),_0x509f7d[_0x5a4c49(0x421)](),_0x509f7d[_0x5a4c49(0xcd)]=_0x6caafb,_0x509f7d[_0x5a4c49(0x2f1)](),_0x509f7d[_0x5a4c49(0xe4)](_0x177cf9,_0x177cf9),_0x509f7d['lineTo'](_0xe30b69,_0x177cf9),_0x509f7d[_0x5a4c49(0x176)](_0x177cf9,_0x177cf9,_0x177cf9,0x0,_0x2cacc8),_0x509f7d['lineTo'](_0x177cf9,_0x177cf9),_0x509f7d['fill'](),_0x509f7d[_0x5a4c49(0x3f6)](),this[_0x5a4c49(0x354)][_0x5a4c49(0x266)]();},ConfigManager['blinkingLights']=!![],ConfigManager[_0x4022db(0x16a)]=!![],VisuMZ[_0x4022db(0x13f)][_0x4022db(0x1d5)]=ConfigManager['makeData'],ConfigManager[_0x4022db(0x364)]=function(){const _0x1c9c5a=_0x4022db,_0x571379=VisuMZ[_0x1c9c5a(0x13f)][_0x1c9c5a(0x1d5)]['call'](this);return _0x571379[_0x1c9c5a(0x26e)]=this[_0x1c9c5a(0x26e)],_0x571379['pulsingLights']=this[_0x1c9c5a(0x16a)],_0x571379;},VisuMZ[_0x4022db(0x13f)][_0x4022db(0x28a)]=ConfigManager['applyData'],ConfigManager[_0x4022db(0xeb)]=function(_0x2f72da){const _0x5bc0c=_0x4022db;VisuMZ['LightingEffects'][_0x5bc0c(0x28a)]['call'](this,_0x2f72da),this[_0x5bc0c(0x13d)](_0x2f72da,_0x5bc0c(0x26e),!![]),this['readFlag'](_0x2f72da,_0x5bc0c(0x16a),!![]);},TextManager[_0x4022db(0x1f1)]={'BlinkingLights':VisuMZ[_0x4022db(0x13f)]['Settings']['Options'][_0x4022db(0x284)],'PulsingLights':VisuMZ[_0x4022db(0x13f)]['Settings']['Options'][_0x4022db(0x18c)]},TextManager['parseDirectionText']=function(_0x58cc75){const _0x4898d5=_0x4022db;_0x58cc75=_0x58cc75[_0x4898d5(0xf4)]()[_0x4898d5(0xdb)]();switch(_0x58cc75){case _0x4898d5(0xf3):return 0x2;case _0x4898d5(0x31f):return 0x4;case _0x4898d5(0x393):return 0x6;case'up':return 0x8;case _0x4898d5(0x3ea):return 0x1;case _0x4898d5(0x137):return 0x3;case _0x4898d5(0x10b):return 0x7;case'upper\x20right':return 0x9;}return Number(_0x58cc75)||0x0;},ColorManager[_0x4022db(0x40e)]=function(_0x5ae76f){const _0x5db057=_0x4022db;if(_0x5ae76f[_0x5db057(0x235)](/\#(.*)/i))return _0x5db057(0x3e6)[_0x5db057(0x3c9)](String(RegExp['$1']));else{_0x5ae76f=_0x5ae76f[_0x5db057(0xf4)]()['trim']();const _0x43cd96=VisuMZ[_0x5db057(0x13f)]['Settings'][_0x5db057(0x24b)];if(_0x43cd96&&_0x43cd96[_0x5ae76f])return _0x43cd96[_0x5ae76f];switch(_0x5ae76f){case'-':case _0x5db057(0x1de):case'normal':case _0x5db057(0x3f2):case _0x5db057(0x3bb):return _0x5db057(0x143);case _0x5db057(0x129):case _0x5db057(0x1dd):return _0x5db057(0x1e7);case _0x5db057(0x2c8):return _0x5db057(0x397);case _0x5db057(0x28b):return _0x5db057(0x3a6);case _0x5db057(0x2c9):return _0x5db057(0x20a);case _0x5db057(0x350):return _0x5db057(0x412);case _0x5db057(0x241):return _0x5db057(0xf1);case _0x5db057(0x39f):return'#00ffff';case _0x5db057(0x221):return _0x5db057(0x2a9);case _0x5db057(0x149):return _0x5db057(0x352);case _0x5db057(0x383):return _0x5db057(0x2ae);case _0x5db057(0x310):return'#8c6239';case _0x5db057(0x40f):case _0x5db057(0x38d):return _0x5db057(0x375);case _0x5db057(0xdd):return _0x5db057(0x107);case _0x5db057(0x290):return _0x5db057(0x116);case _0x5db057(0x269):return _0x5db057(0x1e5);case'light\x20green':return _0x5db057(0x316);case _0x5db057(0x234):return'#7accc8';case'light\x20blue':return _0x5db057(0xd9);case _0x5db057(0x30b):return'#a186be';case'light\x20magenta':return _0x5db057(0x2c0);case _0x5db057(0x21f):return _0x5db057(0x3f5);case _0x5db057(0x130):return _0x5db057(0x323);case _0x5db057(0x110):case _0x5db057(0x3de):return _0x5db057(0x219);case _0x5db057(0x29a):return'#790000';case _0x5db057(0xec):return _0x5db057(0x338);case _0x5db057(0x3d7):return _0x5db057(0x2b8);case _0x5db057(0x326):return _0x5db057(0x2a4);case _0x5db057(0x1cc):return _0x5db057(0xc3);case _0x5db057(0x166):return'#003663';case'dark\x20purple':return'#32004b';case _0x5db057(0x380):return _0x5db057(0x3c8);case _0x5db057(0x217):return _0x5db057(0xf5);case _0x5db057(0x367):return _0x5db057(0x2fe);case'dark\x20grey':case _0x5db057(0xe6):return _0x5db057(0x123);case _0x5db057(0x3c3):return _0x5db057(0x36b);case _0x5db057(0xd2):return _0x5db057(0x2a9);case _0x5db057(0x2f6):return _0x5db057(0x2f9);}}},ColorManager[_0x4022db(0xca)]=function(_0x2006c8){const _0x180e3d=_0x4022db;_0x2006c8=_0x2006c8['toLowerCase']();switch(_0x2006c8){case _0x180e3d(0x283):return PIXI[_0x180e3d(0x280)][_0x180e3d(0x362)];case _0x180e3d(0x34f):case _0x180e3d(0x2ce):return PIXI['BLEND_MODES'][_0x180e3d(0x1b3)];case _0x180e3d(0x1c5):return PIXI[_0x180e3d(0x280)][_0x180e3d(0x381)];case _0x180e3d(0x3f8):return PIXI[_0x180e3d(0x280)]['SCREEN'];}},ColorManager[_0x4022db(0x3a8)]=function(_0x1e6a9a,_0x192784){const _0x44fdc0=_0x4022db;let _0x497355='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x44fdc0(0x1b0)](_0x1e6a9a)){_0x497355=_0x1e6a9a[_0x44fdc0(0x3ef)](0x1)[_0x44fdc0(0x25a)]('');_0x497355['length']===0x3&&(_0x44fdc0(0x1d6)===_0x44fdc0(0x2bd)?this['_antiLightMasks'][_0x44fdc0(0x31b)]=_0xc3e18b(_0x1659e6['$1'])[_0x44fdc0(0x25a)](',')[_0x44fdc0(0x32f)](_0x408634=>(_0x46da1c(_0x408634)||0x1)[_0x44fdc0(0x17c)](0x1,0xff)):_0x497355=[_0x497355[0x0],_0x497355[0x0],_0x497355[0x1],_0x497355[0x1],_0x497355[0x2],_0x497355[0x2]]);while(_0x497355[_0x44fdc0(0x395)]>0x6)_0x497355['pop']();return _0x497355='0x'+_0x497355[_0x44fdc0(0x322)](''),_0x44fdc0(0x17a)+[(_0x497355>>0x10&0xff)[_0x44fdc0(0x17c)](0x0,0xff),(_0x497355>>0x8&0xff)['clamp'](0x0,0xff),(_0x497355&0xff)['clamp'](0x0,0xff)][_0x44fdc0(0x322)](',')+','+_0x192784[_0x44fdc0(0x17c)](0x0,0x1)+')';}else return'rgba(0,0,0,0)';},ColorManager['hexToArray']=function(_0x427e19){const _0x48e817=_0x4022db;let _0xeac8f9='';if(/^#([A-Fa-f0-9]{3}){1,2}$/[_0x48e817(0x1b0)](_0x427e19)){_0xeac8f9=_0x427e19['substring'](0x1)[_0x48e817(0x25a)]('');_0xeac8f9[_0x48e817(0x395)]===0x3&&(_0xeac8f9=[_0xeac8f9[0x0],_0xeac8f9[0x0],_0xeac8f9[0x1],_0xeac8f9[0x1],_0xeac8f9[0x2],_0xeac8f9[0x2]]);while(_0xeac8f9[_0x48e817(0x395)]>0x6)_0xeac8f9[_0x48e817(0x376)]();return _0xeac8f9='0x'+_0xeac8f9[_0x48e817(0x322)](''),[(_0xeac8f9>>0x10&0xff)[_0x48e817(0x17c)](0x0,0xff),(_0xeac8f9>>0x8&0xff)[_0x48e817(0x17c)](0x0,0xff),(_0xeac8f9&0xff)[_0x48e817(0x17c)](0x0,0xff)];}else return[0x0,0x0,0x0];},ColorManager[_0x4022db(0x21d)]=function(_0x103716){const _0x32329b=_0x4022db;while(_0x103716[_0x32329b(0x395)]<0x3)_0x103716[_0x32329b(0x22c)](0x0);while(_0x103716[_0x32329b(0x395)]>0x3)_0x103716['pop']();return'#'+_0x103716[_0x32329b(0x32f)](_0x476795=>_0x476795[_0x32329b(0x17c)](0x0,0xff)[_0x32329b(0x388)](0x10)['padZero'](0x2))[_0x32329b(0x322)]('');},ColorManager[_0x4022db(0x28d)]=function(_0x485c16){const _0x3f8ee9=_0x4022db;_0x485c16[_0x3f8ee9(0x25e)]===''&&(_0x3f8ee9(0x1dc)!=='ZoxJW'?(_0x3b4dbd[_0x3f8ee9(0x13f)][_0x3f8ee9(0x317)][_0x3f8ee9(0x2bc)](this),this[_0x3f8ee9(0xe5)]()):_0x485c16[_0x3f8ee9(0x25e)]=ColorManager['opacityPatternParser'](_0x485c16[_0x3f8ee9(0x3fa)]));},ColorManager[_0x4022db(0x23f)]=function(_0x59a7f0){const _0x50b63e=_0x4022db;_0x59a7f0=_0x59a7f0[_0x50b63e(0xf4)]()[_0x50b63e(0xdb)]();switch(_0x59a7f0){case'normal':case'-':return'z';case _0x50b63e(0xea):case'flicker1':case _0x50b63e(0x3e2):return _0x50b63e(0x2be);case _0x50b63e(0x1ef):case _0x50b63e(0x1ac):case _0x50b63e(0x14e):return _0x50b63e(0xc9);case'candle':case'candle1':return _0x50b63e(0x1f2);case'fast\x20strobe':case'strobe':case _0x50b63e(0x2b4):return'mamamamamama';case _0x50b63e(0x247):case'medium\x20pulse':return _0x50b63e(0x167);case'flicker2':case _0x50b63e(0x3e4):return _0x50b63e(0x1fb);case _0x50b63e(0x10e):case _0x50b63e(0x2f8):return _0x50b63e(0x1bc);case _0x50b63e(0x38a):case _0x50b63e(0x300):return _0x50b63e(0x109);case'slow\x20strobe':case _0x50b63e(0x351):return'aaaaaaaazzzzzzzz';case _0x50b63e(0x32a):case _0x50b63e(0x121):return _0x50b63e(0x26a);case _0x50b63e(0x247):case'slow\x20pulse':return _0x50b63e(0x273);case _0x50b63e(0x233):return _0x50b63e(0x2b2);}return'';},SceneManager[_0x4022db(0x382)]=function(){const _0x536dbe=_0x4022db;return this[_0x536dbe(0x1ab)]&&this[_0x536dbe(0x1ab)][_0x536dbe(0x320)]===Scene_Battle;},SceneManager[_0x4022db(0x19c)]=function(){const _0x58c80b=_0x4022db;return this[_0x58c80b(0x1ab)]&&this[_0x58c80b(0x1ab)]['constructor']===Scene_Map;},SceneManager[_0x4022db(0x279)]=function(_0x55cbe5){const _0x515401=_0x4022db;this[_0x515401(0x1ab)]&&this[_0x515401(0x1ab)][_0x515401(0x329)]&&this[_0x515401(0x1ab)][_0x515401(0x329)][_0x515401(0x3a9)](_0x55cbe5);},SceneManager[_0x4022db(0x257)]=function(_0x4475a5){const _0x4a2518=_0x4022db;if(this[_0x4a2518(0x1ab)]&&this['_scene'][_0x4a2518(0x329)]){if('PTlio'!==_0x4a2518(0x119))return this[_0x4a2518(0x31c)]();else this[_0x4a2518(0x1ab)][_0x4a2518(0x329)]['removeChild'](_0x4475a5);}},Game_Temp[_0x4022db(0xd7)][_0x4022db(0xe7)]=function(_0x4b514c){const _0x41ee5b=_0x4022db,_0x3ddde9=_0x4b514c['update'];this[_0x41ee5b(0x40a)]=this[_0x41ee5b(0x40a)]||[];const _0x2662db=this[_0x41ee5b(0x40a)]['length'];this[_0x41ee5b(0x40a)][_0x2662db]=new Function(_0x3ddde9),this['updateLightSpawn'](_0x2662db,_0x4b514c);},Game_Temp['prototype'][_0x4022db(0x1d0)]=function(_0x59ec89,_0x36c62c){const _0x533acb=_0x4022db;if(!_0x36c62c)return;this[_0x533acb(0x40a)]=this[_0x533acb(0x40a)]||[];const _0x40eb15=this['_lightSpawnsFunc'][_0x59ec89];if(!_0x40eb15)return;const _0x2d2f7e=_0x40eb15['call'](_0x36c62c,_0x36c62c,_0x36c62c[_0x533acb(0x281)]);if(!_0x2d2f7e)return;_0x36c62c['x']=Math[_0x533acb(0x3ca)](_0x2d2f7e['x']||0x0),_0x36c62c['y']=Math['round'](_0x2d2f7e['y']||0x0),_0x36c62c['settings'][_0x533acb(0x2d5)]=_0x2d2f7e[_0x533acb(0x2d5)]??_0x36c62c['settings'][_0x533acb(0x2d5)],_0x36c62c['settings'][_0x533acb(0x3fd)]=_0x2d2f7e[_0x533acb(0x3fd)]??_0x36c62c[_0x533acb(0x1d7)][_0x533acb(0x3fd)],_0x36c62c[_0x533acb(0x1d7)][_0x533acb(0x2e0)]=_0x2d2f7e[_0x533acb(0x2e0)]??_0x36c62c['settings'][_0x533acb(0x2e0)],_0x36c62c[_0x533acb(0x1d7)][_0x533acb(0x2ed)]=_0x2d2f7e['angle']??_0x36c62c[_0x533acb(0x1d7)]['angle'],_0x36c62c[_0x533acb(0x1d7)]['opacity']=_0x2d2f7e['opacity']??_0x36c62c[_0x533acb(0x1d7)]['opacity'];if(_0x36c62c['expire']<0xa){if(_0x533acb(0x178)!=='zejsE'){const _0x38fea5=_0x36c62c[_0x533acb(0x353)]*0.1;_0x36c62c[_0x533acb(0x1d7)][_0x533acb(0x361)]=Math[_0x533acb(0x3ca)](_0x36c62c[_0x533acb(0x1d7)]['opacity']*_0x38fea5)[_0x533acb(0x17c)](0x0,0xff);}else{const _0x2ae923=_0x2c27b6[_0x533acb(0x13f)]['Settings']['Map'];this[_0x533acb(0x1e4)](_0x2ae923['FollowerRadial']),this[_0x533acb(0x161)](_0x2ae923[_0x533acb(0x2e1)]),this[_0x533acb(0xd5)](_0x2ae923[_0x533acb(0x41c)]),this[_0x533acb(0x2ca)](_0x2ae923[_0x533acb(0x1fc)]);}}},VisuMZ[_0x4022db(0x13f)]['Game_Screen_initialize']=Game_Screen['prototype'][_0x4022db(0x131)],Game_Screen[_0x4022db(0xd7)][_0x4022db(0x131)]=function(){const _0x4c1790=_0x4022db;VisuMZ['LightingEffects'][_0x4c1790(0x373)]['call'](this),this[_0x4c1790(0x3e5)]();},VisuMZ[_0x4022db(0x13f)][_0x4022db(0x1f8)]=Game_Screen['prototype'][_0x4022db(0x266)],Game_Screen[_0x4022db(0xd7)][_0x4022db(0x266)]=function(){const _0x4b4ba8=_0x4022db;VisuMZ[_0x4b4ba8(0x13f)][_0x4b4ba8(0x1f8)][_0x4b4ba8(0x2bc)](this),this['updateLightingEffectsColor'](),this[_0x4b4ba8(0x2e3)]();},Game_Screen[_0x4022db(0xd7)][_0x4022db(0xe9)]=function(_0x289b98){const _0x15d579=_0x4022db;_0x289b98=_0x289b98['toLowerCase']()['trim']();if(this['checkLightingEffectsAutoTintPresets'](_0x289b98)){if(_0x15d579(0x1fd)===_0x15d579(0x1fd))return;else{const _0x4173d1=this[_0x15d579(0x3e1)]()[_0x15d579(0xfe)];_0x4dbc63['prototype'][_0x15d579(0xfa)]['call'](this,_0x4173d1);}}else{const _0x41a77a=_0x289b98[_0x15d579(0x25a)](',')['map'](_0x1afd0b=>(Number(_0x1afd0b)||0x0)[_0x15d579(0x17c)](-0xff,0xff));while(_0x41a77a[_0x15d579(0x395)]<0x3)_0x41a77a[_0x15d579(0x22c)](0x0);_0x41a77a[0x3]=Math[_0x15d579(0x3f9)](_0x41a77a[0x3]),this['startTint'](_0x41a77a,0x0);}},Game_Screen[_0x4022db(0xd7)][_0x4022db(0x13b)]=function(_0x1f1673){const _0x34d523=_0x4022db;_0x1f1673=_0x1f1673['toLowerCase']()[_0x34d523(0xdb)]();switch(_0x1f1673){case'normal':this[_0x34d523(0x32e)]([0x0,0x0,0x0,0x0],0x0);return!![];case _0x34d523(0x1dd):this['startTint']([-0x44,-0x44,-0x44,0x0],0x0);return!![];case _0x34d523(0x37e):this[_0x34d523(0x32e)]([0x22,-0x22,-0x44,0xaa],0x0);return!![];case _0x34d523(0x169):this[_0x34d523(0x32e)]([0x44,-0x22,-0x22,0x0],0x0);return!![];case _0x34d523(0x2f6):this['startTint']([-0x44,-0x44,0x0,0x44],0x0);return!![];default:return![];}},Game_Screen[_0x4022db(0xd7)]['initLightingEffects']=function(){const _0x3c1d19=_0x4022db;this[_0x3c1d19(0x13c)]={'color':_0x3c1d19(0x143),'targetColor':'#ffffff','colorDuration':0x0,'opacity':0xff,'targetOpacity':0xff,'opacityDuration':0x0,'cacheOpacity':undefined};},Game_Screen['prototype'][_0x4022db(0x2c2)]=function(){const _0x23a600=_0x4022db;if(this[_0x23a600(0x13c)]===undefined)this[_0x23a600(0x3e5)]();return this[_0x23a600(0x13c)];},Game_Screen[_0x4022db(0xd7)][_0x4022db(0x1e3)]=function(){const _0x59ab22=_0x4022db;return this[_0x59ab22(0x2c2)]()[_0x59ab22(0x2d5)]??_0x59ab22(0x143);},Game_Screen[_0x4022db(0xd7)][_0x4022db(0x115)]=function(_0x390f94,_0x2410d1){const _0x4d2113=_0x4022db;let _0x418522=_0x4d2113(0x143),_0x5d7683=0xff;_0x2410d1=_0x2410d1||0x0;if(_0x390f94[_0x4d2113(0x235)](/\#(.*)/i))_0x418522=_0x4d2113(0x3e6)[_0x4d2113(0x3c9)](String(RegExp['$1']));else{_0x390f94=_0x390f94['toLowerCase'](),_0x418522=ColorManager[_0x4d2113(0x40e)](_0x390f94);switch(_0x390f94){case _0x4d2113(0x283):case'white':case'day':_0x5d7683=0x0;break;case _0x4d2113(0x129):case'dark':case _0x4d2113(0x2f6):_0x5d7683=0xf0;break;case'dawn':case'dusk':_0x5d7683=0x80;break;default:if(_0x390f94[_0x4d2113(0x235)](/light/i))_0x5d7683=0xc0;else _0x390f94[_0x4d2113(0x235)](/dark/i)?'EqXvD'===_0x4d2113(0x10a)?_0x5d7683=0xff:(_0x32c51b[_0x4d2113(0xd7)][_0x4d2113(0xe5)]['call'](this),this['initVehicleLightingEffectsSettings']()):_0x5d7683=0xf0;break;}}this['shiftLightingOverlayColor'](_0x418522,_0x2410d1),this[_0x4d2113(0x1cf)](_0x5d7683,_0x2410d1);},Game_Screen[_0x4022db(0xd7)]['setLightingOverlayColor']=function(_0x11f330){const _0x4e6c71=_0x4022db;this[_0x4e6c71(0x2c2)]()[_0x4e6c71(0x2d5)]=_0x11f330,this['lightingEffects']()[_0x4e6c71(0x1f7)]=undefined;},Game_Screen[_0x4022db(0x3c0)]=![],Game_Screen[_0x4022db(0xd7)][_0x4022db(0x402)]=function(){const _0x5eb7d4=_0x4022db;if($gameMap&&$gameMap[_0x5eb7d4(0x3db)]())return 0x0;if(Game_Screen[_0x5eb7d4(0x3c0)]&&Sprite_LightingEffects[_0x5eb7d4(0x371)]){if(_0x5eb7d4(0x30f)==='CyoQE')return this['lightingEffects']()[_0x5eb7d4(0x1f7)]===undefined&&(this[_0x5eb7d4(0x2c2)]()[_0x5eb7d4(0x1f7)]=VisuMZ[_0x5eb7d4(0x13f)][_0x5eb7d4(0x400)]()),this[_0x5eb7d4(0x2c2)]()[_0x5eb7d4(0x1f7)];else this['initVehicleLightingEffectsSettings']();}return this[_0x5eb7d4(0x2c2)]()[_0x5eb7d4(0x361)]??0xff;},Game_Screen['prototype']['setLightingOverlayOpacity']=function(_0x1b88a1){const _0x564f44=_0x4022db;return this[_0x564f44(0x2c2)]()[_0x564f44(0x1f7)]=undefined,this[_0x564f44(0x2c2)]()[_0x564f44(0x361)]=Math[_0x564f44(0x3ca)](_0x1b88a1)[_0x564f44(0x17c)](0x0,0xff);},VisuMZ[_0x4022db(0x13f)][_0x4022db(0x400)]=function(){const _0x5d379c=_0x4022db,_0x56ce90=$gameScreen[_0x5d379c(0x2c2)]()[_0x5d379c(0x361)],_0x10f75f=$gameScreen[_0x5d379c(0x1e3)](),_0x39f248=ColorManager['hexToArray'](_0x10f75f),_0x3d751e=Math[_0x5d379c(0x3ca)](_0x39f248[_0x5d379c(0xd3)]((_0x34adae,_0x2e5c8a)=>_0x34adae+_0x2e5c8a,0x0)/_0x39f248[_0x5d379c(0x395)]),_0x54147c=0xc0;if(_0x3d751e<_0x54147c)return _0x56ce90;const _0x54d973=(0xff-_0x3d751e)/(0xff-_0x54147c);return Math[_0x5d379c(0x22a)](_0x54d973*_0x56ce90)[_0x5d379c(0x17c)](0x0,0xff);},Game_Screen['prototype'][_0x4022db(0x35c)]=function(_0x52d16a,_0x47fef1){const _0x3c4677=_0x4022db;this[_0x3c4677(0x2c2)]()[_0x3c4677(0x3be)]=_0x52d16a,this[_0x3c4677(0x2c2)]()[_0x3c4677(0x22e)]=_0x47fef1;if(_0x47fef1<=0x0){if(_0x3c4677(0x23e)!=='sHtkd'){_0x276cb4['ConvertParams'](_0x4de1bc,_0x16eb2f);const _0x3f6fa1=_0x3ff4da[_0x3c4677(0x313)](),_0x129dc2=_0xdaba2f[_0x3c4677(0x35d)],_0x349da5=_0x44ad29[_0x3c4677(0x258)],_0x113cd3=_0x521876[_0x3c4677(0x3f1)],_0x1f6a98=_0xe843f3[_0x3c4677(0x16f)];if(_0x3f6fa1){const _0x3281ad=![];_0x3f6fa1[_0x3c4677(0x260)](_0x129dc2,!![],_0x3281ad,![]),_0x3f6fa1[_0x3c4677(0x260)](_0x349da5,!![],_0x3281ad,!![]),_0x3f6fa1['setVehicleLightingData'](_0x113cd3,![],_0x3281ad,![]),_0x3f6fa1[_0x3c4677(0x260)](_0x1f6a98,![],_0x3281ad,!![]);}}else this[_0x3c4677(0x2c2)]()[_0x3c4677(0x2d5)]=_0x52d16a,this[_0x3c4677(0x2c2)]()[_0x3c4677(0x1f7)]=undefined;}},Game_Screen[_0x4022db(0xd7)][_0x4022db(0x3a4)]=function(){const _0x46adfd=_0x4022db;if(this['lightingEffects']()[_0x46adfd(0x22e)]<=0x0)return;const _0x1658c5=this[_0x46adfd(0x2c2)]()[_0x46adfd(0x22e)],_0x2ceefe=ColorManager[_0x46adfd(0x156)](this[_0x46adfd(0x2c2)]()[_0x46adfd(0x2d5)]),_0x909cbe=ColorManager[_0x46adfd(0x156)](this['lightingEffects']()['targetColor']);for(let _0x21d192=0x0;_0x21d192<0x3;_0x21d192++){_0x2ceefe[_0x21d192]=Math['round']((_0x2ceefe[_0x21d192]*(_0x1658c5-0x1)+_0x909cbe[_0x21d192])/_0x1658c5);}this[_0x46adfd(0x2c2)]()[_0x46adfd(0x2d5)]=ColorManager[_0x46adfd(0x21d)](_0x2ceefe),this[_0x46adfd(0x2c2)]()[_0x46adfd(0x1f7)]=undefined,this[_0x46adfd(0x2c2)]()[_0x46adfd(0x22e)]--;if(this[_0x46adfd(0x2c2)]()[_0x46adfd(0x22e)]<=0x0){if(_0x46adfd(0x29e)!=='gDMAH'){if(this[_0x46adfd(0xdf)]===_0x1d6e21)this[_0x46adfd(0xe5)]();return this['_radialLightBehavior'];}else this['lightingEffects']()[_0x46adfd(0x2d5)]=this['lightingEffects']()[_0x46adfd(0x3be)];}},Game_Screen[_0x4022db(0xd7)]['shiftLightingOverlayOpacity']=function(_0x3136a1,_0x1bcbd0){const _0x5cf39d=_0x4022db;this['lightingEffects']()[_0x5cf39d(0x3aa)]=_0x3136a1,this['lightingEffects']()[_0x5cf39d(0xe3)]=_0x1bcbd0,_0x1bcbd0<=0x0&&(this[_0x5cf39d(0x2c2)]()[_0x5cf39d(0x361)]=_0x3136a1,this[_0x5cf39d(0x2c2)]()[_0x5cf39d(0x1f7)]=undefined);},Game_Screen[_0x4022db(0xd7)][_0x4022db(0x2e3)]=function(){const _0x124707=_0x4022db;if(this[_0x124707(0x2c2)]()[_0x124707(0xe3)]<=0x0)return;const _0x86ca2d=this[_0x124707(0x2c2)]()[_0x124707(0xe3)],_0x21f890=this['lightingEffects']()[_0x124707(0x361)],_0x56110e=this[_0x124707(0x2c2)]()[_0x124707(0x3aa)];this['lightingEffects']()[_0x124707(0x361)]=(_0x21f890*(_0x86ca2d-0x1)+_0x56110e)/_0x86ca2d,this[_0x124707(0x2c2)]()[_0x124707(0x1f7)]=undefined,this[_0x124707(0x2c2)]()[_0x124707(0xe3)]--;if(this[_0x124707(0x2c2)]()[_0x124707(0xe3)]<=0x0){if(_0x124707(0x1f6)===_0x124707(0x37b)){if(!_0x46b78b[_0x124707(0x371)])return;if(_0x4a2229[_0x124707(0x382)]())return;if(_0x28fb19['isLoopHorizontal']()||_0x4da3b0[_0x124707(0x3c4)]())return;if(!_0x4df028[_0x124707(0x1d9)]())return;{const _0x1c400d=new _0x1eab35();_0x1c400d[_0x124707(0x392)]=this[_0x124707(0x133)](![],_0x27ee38[_0x124707(0x297)](),_0x4ad4ca['hardAntiLightTerrainTags']()),_0x1c400d['scale']['x']=_0x42bf79[_0x124707(0x2a5)](),_0x1c400d['scale']['y']=_0x404ac3['tileHeight'](),this['_hardAntiLightMask']=_0x1c400d,this[_0x124707(0x329)]['addChild'](this[_0x124707(0x185)]),this[_0x124707(0x40b)]=new _0x1ceb4f[(_0x124707(0x190))](this[_0x124707(0x185)]),this[_0x124707(0x40b)]['blendMode']=_0x487a7e[_0x124707(0x280)][_0x124707(0x1b3)];}{const _0x2c8bc1=new _0x1512a7();_0x2c8bc1[_0x124707(0x392)]=this['createAntiLightMaskBitmap'](!![],_0x933ff2[_0x124707(0x318)](),_0x344804[_0x124707(0x252)]()),_0x2c8bc1[_0x124707(0x3dd)]['x']=_0x27b85e[_0x124707(0x2a5)](),_0x2c8bc1[_0x124707(0x3dd)]['y']=_0xbeac5a[_0x124707(0x33d)](),this['_softAntiLightMask']=_0x2c8bc1,this[_0x124707(0x329)][_0x124707(0x3a9)](this[_0x124707(0x22f)]),this[_0x124707(0x315)]=new _0x49a2f2[(_0x124707(0x190))](this[_0x124707(0x22f)]),this[_0x124707(0x315)]['blendMode']=_0x1c95ef['BLEND_MODES']['ADD'];}this[_0x124707(0x329)][_0x124707(0x246)]=this['_lightContainer'][_0x124707(0x246)]||[],this[_0x124707(0x329)][_0x124707(0x246)][_0x124707(0x22c)](this[_0x124707(0x40b)]),this[_0x124707(0x329)][_0x124707(0x246)][_0x124707(0x22c)](this[_0x124707(0x315)]);}else this[_0x124707(0x2c2)]()[_0x124707(0x361)]=_0x56110e;}},VisuMZ[_0x4022db(0x13f)][_0x4022db(0x317)]=Game_BattlerBase[_0x4022db(0xd7)][_0x4022db(0x416)],Game_BattlerBase[_0x4022db(0xd7)][_0x4022db(0x416)]=function(){const _0x14b0bb=_0x4022db;VisuMZ[_0x14b0bb(0x13f)]['Game_BattlerBase_initMembers'][_0x14b0bb(0x2bc)](this),this[_0x14b0bb(0xe5)]();},Game_BattlerBase[_0x4022db(0xd7)][_0x4022db(0xe5)]=function(){this['_radialLight']={},this['_radialLightBehavior']={};},Game_BattlerBase['prototype'][_0x4022db(0x2d8)]=function(){const _0x3a7e28=_0x4022db;if(this['_radialLight']===undefined)this['initLightingEffectsSettings']();return this[_0x3a7e28(0xd4)];},Game_BattlerBase[_0x4022db(0xd7)]['setRadialLightSettings']=function(_0x26f319){const _0x3d9e2e=_0x4022db;if(this['_radialLight']===undefined)this['initLightingEffectsSettings']();this['_radialLight']=JsonEx[_0x3d9e2e(0x108)](_0x26f319);},Game_BattlerBase[_0x4022db(0xd7)][_0x4022db(0x298)]=function(){const _0x1543b3=_0x4022db;if(this[_0x1543b3(0xdf)]===undefined)this[_0x1543b3(0xe5)]();return this[_0x1543b3(0xdf)];},Game_BattlerBase[_0x4022db(0xd7)][_0x4022db(0x3c6)]=function(_0x242796){const _0x55e815=_0x4022db;if(this[_0x55e815(0xdf)]===undefined)this[_0x55e815(0xe5)]();this['_radialLightBehavior']=JsonEx[_0x55e815(0x108)](_0x242796),ColorManager['RetrieveOpacityPattern'](this[_0x55e815(0xdf)]);},Game_Battler[_0x4022db(0xd7)]['setupBattleLightingEffectsSettings']=function(_0x1fe24f){const _0xf5b32f=_0x4022db;_0x1fe24f=_0x1fe24f||'',Game_Event[_0xf5b32f(0xd7)][_0xf5b32f(0x111)]['call'](this,_0x1fe24f),Game_Event[_0xf5b32f(0xd7)][_0xf5b32f(0xf2)][_0xf5b32f(0x2bc)](this,_0x1fe24f);},VisuMZ[_0x4022db(0x13f)]['Game_Actor_setup']=Game_Actor[_0x4022db(0xd7)][_0x4022db(0x1d8)],Game_Actor[_0x4022db(0xd7)][_0x4022db(0x1d8)]=function(_0x3738fc){const _0x2ced1b=_0x4022db;VisuMZ[_0x2ced1b(0x13f)]['Game_Actor_setup'][_0x2ced1b(0x2bc)](this,_0x3738fc),this[_0x2ced1b(0x3e5)](),this[_0x2ced1b(0xfa)]();},Game_Actor[_0x4022db(0xd7)][_0x4022db(0x3e5)]=function(){const _0x15d143=_0x4022db,_0x16ef8a=VisuMZ[_0x15d143(0x13f)][_0x15d143(0x2eb)];this[_0x15d143(0x204)]=JsonEx['makeDeepCopy'](_0x16ef8a[_0x15d143(0x16b)]),this['_conicalLightDashOffsets']=JsonEx['makeDeepCopy'](_0x16ef8a[_0x15d143(0x3f7)]),this[_0x15d143(0x17f)]=JsonEx[_0x15d143(0x108)](_0x16ef8a[_0x15d143(0x335)]);const _0x368865=this[_0x15d143(0x20b)]()[_0x15d143(0xfe)]||'';Game_Event['prototype'][_0x15d143(0x255)][_0x15d143(0x2bc)](this,_0x368865);},Game_Actor[_0x4022db(0xd7)][_0x4022db(0x2e8)]=function(){const _0xc7b2ff=_0x4022db;if(this[_0xc7b2ff(0x204)]===undefined)this[_0xc7b2ff(0x3e5)]();return this[_0xc7b2ff(0x204)];},Game_Actor[_0x4022db(0xd7)][_0x4022db(0xc6)]=function(_0xfeed3a){const _0x12d150=_0x4022db;if(this['_conicalLightWalkOffsets']===undefined)this['initLightingEffects']();this['_conicalLightWalkOffsets']=JsonEx[_0x12d150(0x108)](_0xfeed3a);},Game_Actor[_0x4022db(0xd7)][_0x4022db(0x359)]=function(){const _0x59851a=_0x4022db;if(this[_0x59851a(0x314)]===undefined)this[_0x59851a(0x3e5)]();return this[_0x59851a(0x314)];},Game_Actor[_0x4022db(0xd7)][_0x4022db(0x2c7)]=function(_0x1704ac){const _0x1f826a=_0x4022db;if(this['_conicalLightDashOffsets']===undefined)this[_0x1f826a(0x3e5)]();this[_0x1f826a(0x314)]=JsonEx['makeDeepCopy'](_0x1704ac);},Game_Actor[_0x4022db(0xd7)][_0x4022db(0x31c)]=function(){const _0x466a15=_0x4022db;if(this[_0x466a15(0x17f)]===undefined)this[_0x466a15(0x3e5)]();return this[_0x466a15(0x17f)];},Game_Actor['prototype'][_0x4022db(0x31d)]=function(_0x5cdb64){const _0x407f32=_0x4022db;if(this[_0x407f32(0x17f)]===undefined)this[_0x407f32(0x3e5)]();this['_conicalLightJumpOffsets']=JsonEx[_0x407f32(0x108)](_0x5cdb64);},Game_Actor['prototype']['initLightingEffectsSettings']=function(){const _0x188440=_0x4022db;Game_Battler['prototype']['initLightingEffectsSettings'][_0x188440(0x2bc)](this);const _0x3e44f9=VisuMZ[_0x188440(0x13f)][_0x188440(0x2eb)][_0x188440(0x3ed)];this[_0x188440(0xda)](_0x3e44f9[_0x188440(0x1ae)]),this[_0x188440(0x3c6)](_0x3e44f9[_0x188440(0x415)]),this[_0x188440(0x2d8)]()['autoRadius']=_0x3e44f9[_0x188440(0x1c6)];},Game_Actor[_0x4022db(0xd7)][_0x4022db(0xfa)]=function(){const _0x501378=_0x4022db,_0x3ac64e=this[_0x501378(0x20b)]()[_0x501378(0xfe)];Game_Battler['prototype'][_0x501378(0xfa)][_0x501378(0x2bc)](this,_0x3ac64e);},Game_Enemy['prototype'][_0x4022db(0xe5)]=function(){const _0xf1768b=_0x4022db;Game_Battler['prototype'][_0xf1768b(0xe5)][_0xf1768b(0x2bc)](this);const _0x3d9c44=VisuMZ[_0xf1768b(0x13f)][_0xf1768b(0x2eb)][_0xf1768b(0x3ed)];this['setRadialLightSettings'](_0x3d9c44[_0xf1768b(0x1a9)]),this[_0xf1768b(0x3c6)](_0x3d9c44[_0xf1768b(0x32b)]),this[_0xf1768b(0x2d8)]()[_0xf1768b(0x3e3)]=_0x3d9c44[_0xf1768b(0x126)];},Game_Enemy[_0x4022db(0xd7)][_0x4022db(0xfa)]=function(){const _0x4e2d2d=_0x4022db,_0x44bbdd=this[_0x4e2d2d(0x3e1)]()[_0x4e2d2d(0xfe)];Game_Battler[_0x4e2d2d(0xd7)]['setupBattleLightingEffectsSettings'][_0x4e2d2d(0x2bc)](this,_0x44bbdd);},VisuMZ['LightingEffects'][_0x4022db(0x18e)]=Game_Map[_0x4022db(0xd7)][_0x4022db(0x1d8)],Game_Map[_0x4022db(0xd7)][_0x4022db(0x1d8)]=function(_0x525d02){const _0x14a83d=_0x4022db;VisuMZ[_0x14a83d(0x13f)][_0x14a83d(0x18e)][_0x14a83d(0x2bc)](this,_0x525d02),this[_0x14a83d(0x2dd)](),this[_0x14a83d(0x31e)]();},Game_Map[_0x4022db(0xd7)][_0x4022db(0x2dd)]=function(){const _0x212d25=_0x4022db;if(!$dataMap)return;const _0x29a689=VisuMZ[_0x212d25(0x13f)]['RegExp'],_0x4ef0dc=$dataMap[_0x212d25(0xfe)]||'',_0x289b8a=(this['tileset']()?this[_0x212d25(0x369)]()[_0x212d25(0xfe)]:'')||'',_0x3bd9e1=VisuMZ[_0x212d25(0x13f)][_0x212d25(0x2eb)][_0x212d25(0x254)];this[_0x212d25(0x140)]={'hardRegionIDs':_0x3bd9e1[_0x212d25(0x24d)][_0x212d25(0x368)](),'hardTerrainTagIDs':_0x3bd9e1['HardTerrainTags'][_0x212d25(0x368)](),'softRegionIDs':_0x3bd9e1['SoftRegions'][_0x212d25(0x368)](),'softTerrainTagIDs':_0x3bd9e1[_0x212d25(0x162)][_0x212d25(0x368)]()};if(_0x4ef0dc[_0x212d25(0x235)](_0x29a689[_0x212d25(0x291)])){if('GZTDG'===_0x212d25(0x262))$gameScreen[_0x212d25(0xe9)](RegExp['$1']);else return this[_0x212d25(0x2b3)]['Unboarded'][_0x212d25(0x33c)][_0x212d25(0x210)];}this[_0x212d25(0x3da)]=![];_0x4ef0dc[_0x212d25(0x235)](_0x29a689[_0x212d25(0x1e3)])&&(_0x212d25(0x16e)!==_0x212d25(0x332)?$gameScreen[_0x212d25(0x115)](RegExp['$1']):this[_0x212d25(0x298)]()[_0x212d25(0xfb)]=_0x3f4eca(_0x3404aa['$1'])*0.01);if(_0x4ef0dc[_0x212d25(0x235)](_0x29a689['lightingOverlayOpacityValue']))$gameScreen[_0x212d25(0x305)](Number(RegExp['$1']));else{if(_0x4ef0dc[_0x212d25(0x235)](_0x29a689[_0x212d25(0x18b)])){const _0x18b1be=Number(RegExp['$1'])*0.01,_0x497df0=Math['round'](_0x18b1be*0xff);$gameScreen[_0x212d25(0x305)](_0x497df0);}}_0x4ef0dc[_0x212d25(0x235)](_0x29a689[_0x212d25(0x12b)])&&(this[_0x212d25(0x3da)]=!![]);_0x4ef0dc[_0x212d25(0x235)](_0x29a689[_0x212d25(0x2a6)])&&(_0x212d25(0x3eb)!=='rSgcM'?this[_0x212d25(0x140)]['hardRegionIDs']=String(RegExp['$1'])[_0x212d25(0x25a)](',')[_0x212d25(0x32f)](_0x4fdf20=>(Number(_0x4fdf20)||0x1)['clamp'](0x1,0xff)):(_0x121cef[_0x212d25(0x13f)][_0x212d25(0x3b5)][_0x212d25(0x2bc)](this,_0x3759f8),this[_0x212d25(0x2b1)](_0x16c60d),this[_0x212d25(0x211)](_0x344f32)));_0x289b8a[_0x212d25(0x235)](_0x29a689[_0x212d25(0x1a8)])&&(this[_0x212d25(0x140)]['hardTerrainTagIDs']=String(RegExp['$1'])[_0x212d25(0x25a)](',')[_0x212d25(0x32f)](_0x38c714=>(Number(_0x38c714)||0x1)['clamp'](0x1,0x7)));if(_0x4ef0dc['match'](_0x29a689['antiLightMaskSoftRegions'])){if('BUran'===_0x212d25(0x366))this[_0x212d25(0x140)]['softRegionIDs']=String(RegExp['$1'])[_0x212d25(0x25a)](',')['map'](_0x1d626d=>(Number(_0x1d626d)||0x1)[_0x212d25(0x17c)](0x1,0xff));else{const _0x2e7ebd=_0x3cd0e8;this[_0x212d25(0x394)](_0x2e7ebd);}}if(_0x289b8a[_0x212d25(0x235)](_0x29a689[_0x212d25(0x3cc)])){if(_0x212d25(0x1ee)===_0x212d25(0x1fa))return{'Boarded':{'Radial':{'Settings':{},'Behavior':{}},'Conical':{'Settings':{},'Behavior':{},'Offset':{}}},'Unboarded':{'Radial':{'Settings':{},'Behavior':{}},'Conical':{'Settings':{},'Behavior':{},'Offset':{}}}};else this[_0x212d25(0x140)][_0x212d25(0x231)]=String(RegExp['$1'])[_0x212d25(0x25a)](',')[_0x212d25(0x32f)](_0x3ca5c7=>(Number(_0x3ca5c7)||0x1)[_0x212d25(0x17c)](0x1,0x7));}},Game_Map['prototype']['hasAntiLightTiles']=function(){const _0xeacb56=_0x4022db;if(this[_0xeacb56(0x297)]()[_0xeacb56(0x395)]>0x0)return!![];if(this[_0xeacb56(0x197)]()[_0xeacb56(0x395)]>0x0)return!![];return![];},Game_Map[_0x4022db(0xd7)]['hardAntiLightRegionIDs']=function(){const _0x2a62c4=_0x4022db;if(this['_antiLightMasks']===undefined)this['setupLightingEffectsNotetags']();return this['_antiLightMasks']?.[_0x2a62c4(0x31b)]??[];},Game_Map[_0x4022db(0xd7)][_0x4022db(0x197)]=function(){const _0x58b2c2=_0x4022db;if(this['_antiLightMasks']===undefined)this[_0x58b2c2(0x2dd)]();return this['_antiLightMasks']?.['hardTerrainTagIDs']??[];},Game_Map['prototype']['softAntiLightRegionIDs']=function(){const _0x170127=_0x4022db;if(this[_0x170127(0x140)]===undefined)this['setupLightingEffectsNotetags']();return this['_antiLightMasks']?.[_0x170127(0x20d)]??[];},Game_Map[_0x4022db(0xd7)]['softAntiLightTerrainTags']=function(){const _0x3a03ea=_0x4022db;if(this[_0x3a03ea(0x140)]===undefined)this[_0x3a03ea(0x2dd)]();return this['_antiLightMasks']?.[_0x3a03ea(0x231)]??[];},Game_Map[_0x4022db(0xd7)][_0x4022db(0x31e)]=function(){const _0x377ae2=_0x4022db;this[_0x377ae2(0x1d2)]=[],$gameTemp['_lightSpawnsFunc']=[];},Game_Map[_0x4022db(0xd7)][_0x4022db(0x12f)]=function(){const _0x213a0b=_0x4022db;if(this['_lightSpawns']===undefined)this['setupLightingEffectsSpawns']();return this[_0x213a0b(0x1d2)];},VisuMZ[_0x4022db(0x13f)][_0x4022db(0x205)]=Game_Map['prototype'][_0x4022db(0x266)],Game_Map[_0x4022db(0xd7)][_0x4022db(0x266)]=function(_0x1d1875){const _0x4a7b98=_0x4022db;VisuMZ[_0x4a7b98(0x13f)]['Game_Map_update'][_0x4a7b98(0x2bc)](this,_0x1d1875),this[_0x4a7b98(0x157)]();},Game_Map[_0x4022db(0xd7)][_0x4022db(0x157)]=function(){const _0x41ec33=_0x4022db,_0x474342=this[_0x41ec33(0x12f)]()[_0x41ec33(0x395)];for(let _0x34224f=0x0;_0x34224f<_0x474342;_0x34224f++){if('IQxJh'!=='JMhGx'){const _0x3cb4e7=this[_0x41ec33(0x12f)]()[_0x34224f];if(!_0x3cb4e7)continue;if(!_0x3cb4e7['active'])continue;$gameTemp[_0x41ec33(0x1d0)](_0x34224f,_0x3cb4e7),_0x3cb4e7['time']++;if(_0x3cb4e7[_0x41ec33(0x353)]<Number[_0x41ec33(0x31a)])_0x3cb4e7['expire']--;if(_0x3cb4e7[_0x41ec33(0x353)]<=0x0)_0x3cb4e7[_0x41ec33(0x19d)]=![];}else for(let _0x37a3a2=0x0;_0x37a3a2<_0x456400;_0x37a3a2++){const _0x4e8093=_0x1fc9a6[_0x41ec33(0x391)](_0x45e74e,_0x37a3a2),_0x35f583=this['regionAutoLightOpacity'](_0x4e8093);if(_0x35f583>0x0){const _0xa5e68c=_0x2d24fe['ceil'](0xff*_0x35f583/0x64);let _0x36c9c0=_0xde1979[_0x41ec33(0x21d)]([_0xa5e68c,_0xa5e68c,_0xa5e68c]);_0xd8569[_0x41ec33(0x3e0)](_0x5138ad,_0x37a3a2,0x1,0x1,_0x36c9c0);}}}},Game_Map[_0x4022db(0xd7)]['createNewLightSpawn']=function(_0x44b9cd){const _0x34a5a8=_0x4022db;$gameTemp[_0x34a5a8(0xe7)](_0x44b9cd),this['lightSpawns']()[_0x34a5a8(0x22c)](_0x44b9cd);const _0x2284d9=new Sprite_LightSpawn(_0x44b9cd);SceneManager[_0x34a5a8(0x279)](_0x2284d9);},Game_Map[_0x4022db(0xd7)][_0x4022db(0x3db)]=function(){return this['_noDarknessOverlay'];},Game_CharacterBase['prototype']['initLightingEffectsSettings']=function(){const _0x4f38c7=_0x4022db;this[_0x4f38c7(0xd4)]={},this[_0x4f38c7(0xdf)]={},this[_0x4f38c7(0xf9)]={},this[_0x4f38c7(0x27e)]={};const _0x57078c=VisuMZ[_0x4f38c7(0x13f)][_0x4f38c7(0x2eb)];this[_0x4f38c7(0x204)]=JsonEx[_0x4f38c7(0x108)](_0x57078c[_0x4f38c7(0x16b)]),this[_0x4f38c7(0x314)]=JsonEx[_0x4f38c7(0x108)](_0x57078c[_0x4f38c7(0x3f7)]),this[_0x4f38c7(0x17f)]=JsonEx[_0x4f38c7(0x108)](_0x57078c[_0x4f38c7(0x335)]);},Game_CharacterBase['prototype'][_0x4022db(0x2d8)]=function(){const _0x232aab=_0x4022db;if(this[_0x232aab(0xd4)]===undefined)this[_0x232aab(0xe5)]();return this[_0x232aab(0xd4)];},Game_CharacterBase[_0x4022db(0xd7)][_0x4022db(0xda)]=function(_0x109d85){const _0x3257f1=_0x4022db;if(this[_0x3257f1(0xd4)]===undefined)this['initLightingEffectsSettings']();this[_0x3257f1(0xd4)]=JsonEx['makeDeepCopy'](_0x109d85);},Game_CharacterBase[_0x4022db(0xd7)][_0x4022db(0x298)]=function(){const _0x5630cc=_0x4022db;if(this['_radialLightBehavior']===undefined)this[_0x5630cc(0xe5)]();return this[_0x5630cc(0xdf)];},Game_CharacterBase[_0x4022db(0xd7)]['setRadialLightBehavior']=function(_0x4e6106){const _0xbb700=_0x4022db;if(this[_0xbb700(0xdf)]===undefined)this[_0xbb700(0xe5)]();this['_radialLightBehavior']=JsonEx[_0xbb700(0x108)](_0x4e6106),ColorManager[_0xbb700(0x28d)](this[_0xbb700(0xdf)]);},Game_CharacterBase[_0x4022db(0xd7)][_0x4022db(0x24f)]=function(){const _0x23dcc0=_0x4022db;if(this[_0x23dcc0(0xf9)]===undefined)this[_0x23dcc0(0xe5)]();return this['_conicalLight'];},Game_CharacterBase['prototype'][_0x4022db(0x259)]=function(_0x2241b4){const _0x445686=_0x4022db;if(this[_0x445686(0xf9)]===undefined)this['initLightingEffectsSettings']();this[_0x445686(0xf9)]=JsonEx[_0x445686(0x108)](_0x2241b4);},Game_CharacterBase['prototype'][_0x4022db(0x21c)]=function(){const _0x1fcd28=_0x4022db;if(this['_conicalLightBehavior']===undefined)this[_0x1fcd28(0xe5)]();return this[_0x1fcd28(0x27e)];},Game_CharacterBase['prototype'][_0x4022db(0x220)]=function(_0x375472){const _0x15b719=_0x4022db;if(this['_conicalLightBehavior']===undefined)this[_0x15b719(0xe5)]();this[_0x15b719(0x27e)]=JsonEx[_0x15b719(0x108)](_0x375472),ColorManager[_0x15b719(0x28d)](this[_0x15b719(0x27e)]);},Game_CharacterBase[_0x4022db(0xd7)][_0x4022db(0x194)]=function(){const _0x2d0ad7=_0x4022db;if(this[_0x2d0ad7(0x1b6)]()){if(this['isDashingAndMoving']())return this[_0x2d0ad7(0x359)]();else{if(this[_0x2d0ad7(0x356)]()){if(_0x2d0ad7(0x2e2)===_0x2d0ad7(0x228))_0x1e3cd4[_0x2d0ad7(0xda)](_0x3c9493),_0x6aedd1[_0x2d0ad7(0x3c6)](_0x421533);else return this[_0x2d0ad7(0x31c)]();}}}return this[_0x2d0ad7(0x2e8)]();},Game_CharacterBase[_0x4022db(0xd7)][_0x4022db(0x2e8)]=function(){const _0x3ce537=_0x4022db;if(this[_0x3ce537(0x204)]===undefined)this[_0x3ce537(0x3e5)]();return this[_0x3ce537(0x204)];},Game_CharacterBase['prototype'][_0x4022db(0xc6)]=function(_0x4e06e1){const _0x492a5d=_0x4022db;if(this['_conicalLightWalkOffsets']===undefined)this[_0x492a5d(0x3e5)]();this[_0x492a5d(0x204)]=JsonEx[_0x492a5d(0x108)](_0x4e06e1);},Game_CharacterBase[_0x4022db(0xd7)]['conicalLightDashOffsets']=function(){const _0x8078eb=_0x4022db;if(this[_0x8078eb(0x314)]===undefined)this[_0x8078eb(0x3e5)]();return this[_0x8078eb(0x314)];},Game_CharacterBase[_0x4022db(0xd7)]['setConicalLightDashOffsets']=function(_0x346414){const _0x16b43a=_0x4022db;if(this[_0x16b43a(0x314)]===undefined)this['initLightingEffects']();this[_0x16b43a(0x314)]=JsonEx['makeDeepCopy'](_0x346414);},Game_CharacterBase[_0x4022db(0xd7)]['conicalLightJumpOffsets']=function(){const _0x256c0d=_0x4022db;if(this[_0x256c0d(0x204)]===undefined)this[_0x256c0d(0x3e5)]();return this[_0x256c0d(0x204)];},Game_CharacterBase['prototype'][_0x4022db(0x31d)]=function(_0x1d1d35){const _0x2ccbe2=_0x4022db;if(this[_0x2ccbe2(0x17f)]===undefined)this[_0x2ccbe2(0x3e5)]();this[_0x2ccbe2(0x17f)]=JsonEx[_0x2ccbe2(0x108)](_0x1d1d35);},VisuMZ[_0x4022db(0x13f)][_0x4022db(0x30d)]=Game_Player[_0x4022db(0xd7)][_0x4022db(0x416)],Game_Player[_0x4022db(0xd7)][_0x4022db(0x416)]=function(){const _0x50b76c=_0x4022db;VisuMZ['LightingEffects']['Game_Player_initMembers'][_0x50b76c(0x2bc)](this),this[_0x50b76c(0x3e5)]();},Game_Player[_0x4022db(0xd7)][_0x4022db(0x3e5)]=function(){const _0x2e73ef=_0x4022db,_0x8ac0db=VisuMZ[_0x2e73ef(0x13f)][_0x2e73ef(0x2eb)][_0x2e73ef(0x299)];this['setFollowerRadialLightSettings'](_0x8ac0db[_0x2e73ef(0x417)]),this[_0x2e73ef(0x161)](_0x8ac0db[_0x2e73ef(0x2e1)]),this[_0x2e73ef(0xd5)](_0x8ac0db['FollowerConical']),this[_0x2e73ef(0x2ca)](_0x8ac0db[_0x2e73ef(0x1fc)]);},Game_Player[_0x4022db(0xd7)][_0x4022db(0xe5)]=function(){const _0x369554=_0x4022db;Game_Character['prototype'][_0x369554(0xe5)]['call'](this);const _0x1cc25f=VisuMZ[_0x369554(0x13f)][_0x369554(0x2eb)][_0x369554(0x299)];this[_0x369554(0xda)](_0x1cc25f[_0x369554(0x1f5)]),this[_0x369554(0x3c6)](_0x1cc25f[_0x369554(0x39c)]),this[_0x369554(0x259)](_0x1cc25f[_0x369554(0x245)]),this[_0x369554(0x220)](_0x1cc25f[_0x369554(0x2b0)]);},Game_Player[_0x4022db(0xd7)]['getFollowerRadialLightSettings']=function(){const _0x152bac=_0x4022db;if(this[_0x152bac(0x2b6)]===undefined)this[_0x152bac(0x3e5)]();return this[_0x152bac(0x2b6)];},Game_Player[_0x4022db(0xd7)][_0x4022db(0x1e4)]=function(_0x28388f){const _0x2ddc32=_0x4022db;this[_0x2ddc32(0x2b6)]=JsonEx[_0x2ddc32(0x108)](_0x28388f);},Game_Player['prototype'][_0x4022db(0x15d)]=function(){const _0x556588=_0x4022db;if(this['_followerRadialLightBehavior']===undefined)this[_0x556588(0xe5)]();return this[_0x556588(0x40d)];},Game_Player[_0x4022db(0xd7)][_0x4022db(0x161)]=function(_0x2c55d2){const _0x9b041e=_0x4022db;if(this['_followerRadialLightBehavior']===undefined)this[_0x9b041e(0xe5)]();this[_0x9b041e(0x40d)]=JsonEx[_0x9b041e(0x108)](_0x2c55d2),ColorManager[_0x9b041e(0x28d)](this[_0x9b041e(0x40d)]);},Game_Player[_0x4022db(0xd7)][_0x4022db(0x410)]=function(){const _0x390f5a=_0x4022db;if(this['_followerConicalLight']===undefined)this['initLightingEffects']();return this[_0x390f5a(0x1b4)];},Game_Player['prototype']['setFollowerConicalLightSettings']=function(_0x27e9d0){const _0x53f869=_0x4022db;this[_0x53f869(0x1b4)]=JsonEx[_0x53f869(0x108)](_0x27e9d0);},Game_Player[_0x4022db(0xd7)][_0x4022db(0x384)]=function(){const _0x4d19d1=_0x4022db;if(this[_0x4d19d1(0x1c2)]===undefined)this[_0x4d19d1(0xe5)]();return this[_0x4d19d1(0x1c2)];},Game_Player[_0x4022db(0xd7)][_0x4022db(0x2ca)]=function(_0x294b95){const _0x35c960=_0x4022db;if(this[_0x35c960(0x1c2)]===undefined)this['initLightingEffectsSettings']();this[_0x35c960(0x1c2)]=JsonEx[_0x35c960(0x108)](_0x294b95),ColorManager['RetrieveOpacityPattern'](this[_0x35c960(0x1c2)]);},Game_Player['prototype'][_0x4022db(0x2e8)]=function(){const _0x2760b4=_0x4022db;return $gameParty[_0x2760b4(0x401)]()?$gameParty[_0x2760b4(0x401)]()[_0x2760b4(0x2e8)]():Game_Character[_0x2760b4(0xd7)][_0x2760b4(0x2e8)][_0x2760b4(0x2bc)](this);},Game_Player['prototype'][_0x4022db(0xc6)]=function(_0x2e0055){const _0xb008e3=_0x4022db;$gameParty[_0xb008e3(0x401)]()?$gameParty[_0xb008e3(0x401)]()['setConicalLightWalkOffsets'](_0x2e0055):Game_Character[_0xb008e3(0xd7)][_0xb008e3(0xc6)][_0xb008e3(0x2bc)](this,_0x2e0055);},Game_Player['prototype'][_0x4022db(0x359)]=function(){const _0x409766=_0x4022db;if($gameParty[_0x409766(0x401)]()){if(_0x409766(0x19a)!==_0x409766(0x183))return $gameParty[_0x409766(0x401)]()[_0x409766(0x359)]();else this[_0x409766(0x21c)]()[_0x409766(0x1a0)]=_0x36946d(_0x494761['$1'])*0.01;}else{if(_0x409766(0x1ed)==='ttLJR'){const _0xb6f24=![];_0x4e9846['setVehicleLightingData'](_0x5e94a5,!![],_0xb6f24,![]),_0xd30a5b[_0x409766(0x260)](_0x1b8524,!![],_0xb6f24,!![]),_0x2f6110[_0x409766(0x260)](_0x231974,![],_0xb6f24,![]),_0x45445c[_0x409766(0x260)](_0x146049,![],_0xb6f24,!![]);}else return Game_Character['prototype'][_0x409766(0x359)][_0x409766(0x2bc)](this);}},Game_Player[_0x4022db(0xd7)]['setConicalLightDashOffsets']=function(_0x529ee3){const _0x274bea=_0x4022db;$gameParty[_0x274bea(0x401)]()?$gameParty[_0x274bea(0x401)]()['setConicalLightDashOffsets'](_0x529ee3):Game_Character['prototype'][_0x274bea(0x2c7)]['call'](this,_0x529ee3);},Game_Player['prototype']['conicalLightJumpOffsets']=function(){const _0x46722a=_0x4022db;if($gameParty[_0x46722a(0x401)]()){if(_0x46722a(0x357)!==_0x46722a(0x405))return $gameParty[_0x46722a(0x401)]()[_0x46722a(0x31c)]();else this[_0x46722a(0x392)]=_0x4c0f98[_0x46722a(0x275)](_0x26cd1c[_0x46722a(0x18a)]);}else{if(_0x46722a(0x22b)!==_0x46722a(0x250))return Game_Character['prototype'][_0x46722a(0x31c)]['call'](this);else{this[_0x46722a(0xd4)]['setSource'](_0x304c68);return;}}},Game_Player[_0x4022db(0xd7)][_0x4022db(0x31d)]=function(_0x3e1f48){const _0x1352f0=_0x4022db;$gameParty[_0x1352f0(0x401)]()?'SEsKL'!=='brFDZ'?$gameParty['leader']()[_0x1352f0(0x31d)](_0x3e1f48):(_0x23f311[_0x1352f0(0x13f)][_0x1352f0(0x2ea)][_0x1352f0(0x2bc)](this,_0x5b83a9),this[_0x1352f0(0x2b1)](_0x1b3deb)):Game_Character[_0x1352f0(0xd7)][_0x1352f0(0x31d)][_0x1352f0(0x2bc)](this,_0x3e1f48);},Game_Follower[_0x4022db(0xd7)][_0x4022db(0x2d8)]=function(){const _0x90f256=_0x4022db;return $gamePlayer[_0x90f256(0x145)]();},Game_Follower[_0x4022db(0xd7)][_0x4022db(0x298)]=function(){const _0x3c9518=_0x4022db;return $gamePlayer[_0x3c9518(0x15d)]();},Game_Follower[_0x4022db(0xd7)][_0x4022db(0x24f)]=function(){const _0x546501=_0x4022db;return $gamePlayer[_0x546501(0x410)]();},Game_Follower['prototype']['conicalLightBehavior']=function(){const _0xafae83=_0x4022db;return $gamePlayer[_0xafae83(0x384)]();},Game_Follower[_0x4022db(0xd7)][_0x4022db(0x2e8)]=function(){const _0x50fd75=_0x4022db;return this[_0x50fd75(0x20b)]()?this[_0x50fd75(0x20b)]()[_0x50fd75(0x2e8)]():Game_Character[_0x50fd75(0xd7)]['conicalLightWalkOffsets'][_0x50fd75(0x2bc)](this);},Game_Follower[_0x4022db(0xd7)]['setConicalLightWalkOffsets']=function(_0x1feec6){const _0x2801e4=_0x4022db;if(this[_0x2801e4(0x20b)]()){if(_0x2801e4(0x411)===_0x2801e4(0x2d3)){if(!this[_0x2801e4(0x3cd)])return;const _0x1a27b4=this[_0x2801e4(0x27c)]();this[_0x2801e4(0x3cd)][_0x2801e4(0x272)]=_0x1a27b4===0x2,this[_0x2801e4(0x3cd)][_0x2801e4(0x2ed)]=this[_0x2801e4(0x2ed)]/0x2;}else this['actor']()[_0x2801e4(0xc6)](_0x1feec6);}else{if(_0x2801e4(0x1ea)===_0x2801e4(0x1ea))Game_Character[_0x2801e4(0xd7)]['setConicalLightWalkOffsets'][_0x2801e4(0x2bc)](this,_0x1feec6);else return this[_0x2801e4(0x423)]?this[_0x2801e4(0x423)][_0x2801e4(0x298)]():{};}},Game_Follower[_0x4022db(0xd7)][_0x4022db(0x359)]=function(){const _0x1b7d40=_0x4022db;return this[_0x1b7d40(0x20b)]()?this['actor']()['conicalLightDashOffsets']():Game_Character[_0x1b7d40(0xd7)][_0x1b7d40(0x359)][_0x1b7d40(0x2bc)](this);},Game_Follower['prototype'][_0x4022db(0x2c7)]=function(_0xb0cfa2){const _0x5147a7=_0x4022db;if(this['actor']()){if('ybrUg'!==_0x5147a7(0xc8))return this[_0x5147a7(0x423)]?this[_0x5147a7(0x423)][_0x5147a7(0xd1)]===_0x5147a7(0x419):![];else this[_0x5147a7(0x20b)]()[_0x5147a7(0x2c7)](_0xb0cfa2);}else _0x5147a7(0x2a0)!==_0x5147a7(0x14b)?Game_Character[_0x5147a7(0xd7)]['setConicalLightDashOffsets'][_0x5147a7(0x2bc)](this,_0xb0cfa2):(this[_0x5147a7(0x1da)]=_0x32eda0,_0x160b98['prototype']['initialize'][_0x5147a7(0x2bc)](this),this[_0x5147a7(0x168)]=_0x142021[_0x5147a7(0x280)]['MULTIPLY'],this['x']=_0x3fc41a[_0x5147a7(0x3ca)](_0xda0f0a[_0x5147a7(0x2e4)]/0x2),this['y']=_0x249383[_0x5147a7(0x3ca)](_0x3f0c5d[_0x5147a7(0x3a1)]/0x2),this[_0x5147a7(0x3d3)]['x']=this[_0x5147a7(0x3d3)]['y']=0.5,this['createOverlayTexture'](),this['createProxySprite'](),this[_0x5147a7(0x327)](),this['createLightContainer'](),this[_0x5147a7(0x28c)](),this[_0x5147a7(0x1f9)](),![]&&this[_0x5147a7(0x22d)]());},Game_Follower[_0x4022db(0xd7)][_0x4022db(0x31c)]=function(){const _0x298d15=_0x4022db;if(this['actor']())return this[_0x298d15(0x20b)]()[_0x298d15(0x31c)]();else{if(_0x298d15(0x312)!==_0x298d15(0x312)){if(this['_lightSpawns']===_0x442b85)this[_0x298d15(0x31e)]();return this[_0x298d15(0x1d2)];}else return Game_Character[_0x298d15(0xd7)][_0x298d15(0x31c)][_0x298d15(0x2bc)](this);}},Game_Follower[_0x4022db(0xd7)][_0x4022db(0x31d)]=function(_0x10aa25){const _0x4b7691=_0x4022db;if(this['actor']())'QlDvM'!==_0x4b7691(0x33b)?this['actor']()[_0x4b7691(0x31d)](_0x10aa25):this[_0x4b7691(0x298)]()[_0x4b7691(0x2d4)]=_0xe06825(_0x4d6d3e['$1'])*0.01;else{if(_0x4b7691(0x3d9)!==_0x4b7691(0x3d9)){const _0x4b639c=this[_0x4b7691(0x240)]();let _0x2e49d4=0x0;_0x4b639c[_0x4b7691(0x18a)]===''?_0x2e49d4-=_0x4b639c['angle']/0x2:_0x2e49d4-=_0x4b639c[_0x4b7691(0x3bf)]||0x0;const _0x525e03=this[_0x4b7691(0x27c)]();_0x2e49d4+=[0x0,0x87,0x5a,0x2d,0xb4,0x0,0x0,0xe1,0x10e,0x13b][_0x525e03];if(_0x4b639c[_0x4b7691(0x125)]){const _0x23b045=_0x4b639c[_0x4b7691(0x181)]?this[_0x4b7691(0x103)]:0x0,_0x4f2aea=_0x3ea2f1[_0x4b7691(0x334)]+_0x23b045,_0x2ddbc0=_0x4b639c[_0x4b7691(0x2c5)];_0x2e49d4+=_0x3b023d['cos'](_0x4f2aea*_0x2ddbc0)*_0x4b639c['angleSway'];}this[_0x4b7691(0x2ed)]=_0x2e49d4;}else Game_Character[_0x4b7691(0xd7)][_0x4b7691(0x31d)][_0x4b7691(0x2bc)](this,_0x10aa25);}},Game_Vehicle[_0x4022db(0xd7)][_0x4022db(0xe5)]=function(){const _0x340ae4=_0x4022db;Game_Character[_0x340ae4(0xd7)]['initLightingEffectsSettings'][_0x340ae4(0x2bc)](this),this['initVehicleLightingEffectsSettings']();},Game_Vehicle[_0x4022db(0xd7)][_0x4022db(0x206)]=function(){const _0x52cee5=_0x4022db;let _0x49281c=this[_0x52cee5(0x39b)]();_0x49281c=this[_0x52cee5(0x370)](_0x49281c),this[_0x52cee5(0x2b3)]=_0x49281c;},Game_Vehicle[_0x4022db(0xd7)][_0x4022db(0x39b)]=function(){return{'Boarded':{'Radial':{'Settings':{},'Behavior':{}},'Conical':{'Settings':{},'Behavior':{},'Offset':{}}},'Unboarded':{'Radial':{'Settings':{},'Behavior':{}},'Conical':{'Settings':{},'Behavior':{},'Offset':{}}}};},Game_Vehicle[_0x4022db(0xd7)][_0x4022db(0x370)]=function(_0x46ded9){const _0xbdfd22=_0x4022db,_0x502f99=VisuMZ[_0xbdfd22(0x13f)][_0xbdfd22(0x2eb)][_0xbdfd22(0x299)];let _0x408df9='';if(this[_0xbdfd22(0x3c2)]())_0x408df9='Boat';if(this[_0xbdfd22(0x23d)]())_0x408df9=_0xbdfd22(0x303);if(this[_0xbdfd22(0x170)]())_0x408df9='Airship';const _0x1f85d7=[_0xbdfd22(0x36f),'Unboarded'],_0x2ac95f=['Radial',_0xbdfd22(0x33c)],_0x3070d6=['Settings',_0xbdfd22(0x215),_0xbdfd22(0x210)];for(let _0x355471=0x0;_0x355471<_0x1f85d7[_0xbdfd22(0x395)];_0x355471++){if(_0xbdfd22(0x187)!==_0xbdfd22(0x3af)){let _0x1ae33a=_0x1f85d7[_0x355471];for(let _0x4c07b2=0x0;_0x4c07b2<_0x2ac95f['length'];_0x4c07b2++){let _0x2f2150=_0x2ac95f[_0x4c07b2];for(let _0x117496=0x0;_0x117496<_0x3070d6['length'];_0x117496++){if(_0xbdfd22(0x25c)===_0xbdfd22(0x25c)){let _0x52ffbe=_0x3070d6[_0x117496];const _0x4a55dc=_0xbdfd22(0x296)[_0xbdfd22(0x3c9)](_0x408df9,_0x1ae33a,_0x2f2150,_0x52ffbe);_0x502f99[_0x4a55dc]&&('nvgDK'==='nvgDK'?_0x46ded9[_0x1ae33a][_0x2f2150][_0x52ffbe]=JsonEx[_0xbdfd22(0x108)](_0x502f99[_0x4a55dc]):_0x12b65b[_0xbdfd22(0x24f)]()['useHandOffset']=_0x105e50);}else this['conicalLight']()['useHandOffset']=![];}}}else{if(this[_0xbdfd22(0x314)]===_0x15f491)this['initLightingEffects']();this[_0xbdfd22(0x314)]=_0x4db908[_0xbdfd22(0x108)](_0x4378af);}}return _0x46ded9;},Game_Vehicle['prototype']['getVehicleLightingData']=function(_0x29403f,_0x3a20bc,_0xa05308){const _0x21aeb8=_0x4022db;this[_0x21aeb8(0x2b3)]===undefined&&this['initVehicleLightingEffectsSettings']();const _0x39915e=_0x29403f?'Boarded':'Unboarded',_0x3c645a=_0x3a20bc?_0x21aeb8(0x35a):_0x21aeb8(0x33c),_0x31488e=_0xa05308?_0x21aeb8(0x215):'Settings';return this[_0x21aeb8(0x2b3)][_0x39915e][_0x3c645a][_0x31488e];},Game_Vehicle[_0x4022db(0xd7)][_0x4022db(0x260)]=function(_0x5e0733,_0x579677,_0x41d6b3,_0xcefde5){const _0x5edcc2=_0x4022db;this[_0x5edcc2(0x2b3)]===undefined&&this['initVehicleLightingEffectsSettings']();const _0x13784b=_0x579677?_0x5edcc2(0x36f):_0x5edcc2(0x292),_0x2f14f3=_0x41d6b3?_0x5edcc2(0x35a):_0x5edcc2(0x33c),_0x3ddd8e=_0xcefde5?_0x5edcc2(0x215):_0x5edcc2(0x2eb);this[_0x5edcc2(0x2b3)][_0x13784b][_0x2f14f3][_0x3ddd8e]=JsonEx[_0x5edcc2(0x108)](_0x5e0733);},Game_Vehicle[_0x4022db(0xd7)][_0x4022db(0xe8)]=function(_0x374051,_0x27f61e){const _0x2c7c2b=_0x4022db;this[_0x2c7c2b(0x2b3)]===undefined&&this['initVehicleLightingEffectsSettings']();const _0x3ae312=_0x27f61e?_0x2c7c2b(0x36f):_0x2c7c2b(0x292),_0x129497=_0x2c7c2b(0x33c),_0x1212bb=_0x2c7c2b(0x210);this['_vehicleLightingSettings'][_0x3ae312][_0x129497][_0x1212bb]=JsonEx[_0x2c7c2b(0x108)](_0x374051);},Game_Vehicle[_0x4022db(0xd7)][_0x4022db(0x2d8)]=function(){const _0x4a6d41=_0x4022db;return this[_0x4a6d41(0x3cf)](this[_0x4a6d41(0x232)],!![],![]);},Game_Vehicle['prototype'][_0x4022db(0x298)]=function(){const _0x37978d=_0x4022db;return this[_0x37978d(0x3cf)](this['_driving'],!![],!![]);},Game_Vehicle[_0x4022db(0xd7)][_0x4022db(0x24f)]=function(){const _0x5a7c17=_0x4022db,_0xc6604c=this[_0x5a7c17(0x232)]?_0x5a7c17(0x36f):'Unboarded',_0x239b35=![]?_0x5a7c17(0x35a):_0x5a7c17(0x33c),_0x423c39=![]?'Behavior':_0x5a7c17(0x2eb);return this[_0x5a7c17(0x3cf)](this[_0x5a7c17(0x232)],![],![]);},Game_Vehicle['prototype'][_0x4022db(0x21c)]=function(){const _0x41a54d=_0x4022db;return this['getVehicleLightingData'](this[_0x41a54d(0x232)],![],!![]);},Game_Vehicle[_0x4022db(0xd7)][_0x4022db(0x194)]=function(){const _0x57fd5c=_0x4022db;this['_vehicleLightingSettings']===undefined&&this[_0x57fd5c(0x206)]();if(this['_driving'])return this[_0x57fd5c(0x2b3)][_0x57fd5c(0x36f)][_0x57fd5c(0x33c)][_0x57fd5c(0x210)];else{if(_0x57fd5c(0x342)!=='TzKwb')return this[_0x57fd5c(0x2b3)][_0x57fd5c(0x292)][_0x57fd5c(0x33c)][_0x57fd5c(0x210)];else this[_0x57fd5c(0x2d8)]()[_0x57fd5c(0x2ed)]=_0x3904d9(_0x1a9d28['$1'])[_0x57fd5c(0x17c)](0x0,0x168);}},VisuMZ[_0x4022db(0x13f)][_0x4022db(0x29d)]=Game_Event[_0x4022db(0xd7)][_0x4022db(0x3b4)],Game_Event['prototype'][_0x4022db(0x3b4)]=function(){const _0x412232=_0x4022db;VisuMZ[_0x412232(0x13f)]['Game_Event_clearPageSettings']['call'](this),this['initLightingEffectsSettings']();},VisuMZ[_0x4022db(0x13f)]['Game_Event_setupPageSettings']=Game_Event[_0x4022db(0xd7)][_0x4022db(0x379)],Game_Event[_0x4022db(0xd7)][_0x4022db(0x379)]=function(){const _0x1cc086=_0x4022db;VisuMZ[_0x1cc086(0x13f)]['Game_Event_setupPageSettings'][_0x1cc086(0x2bc)](this),this[_0x1cc086(0x263)]();},Game_Event[_0x4022db(0xd7)][_0x4022db(0x263)]=function(){const _0x47ba06=_0x4022db;if(!this[_0x47ba06(0x419)]())return;this[_0x47ba06(0xe5)](),this[_0x47ba06(0x2dd)](),this['setupLightingEffectsCommentTags']();},Game_Event[_0x4022db(0xd7)]['setupLightingEffectsNotetags']=function(){const _0x2dc0aa=_0x4022db,_0x11610e=this[_0x2dc0aa(0x419)]()[_0x2dc0aa(0xfe)];if(_0x11610e==='')return;this['checkLightingEffectsStringTags'](_0x11610e);},Game_Event[_0x4022db(0xd7)][_0x4022db(0x3ac)]=function(){const _0x3fcb2b=_0x4022db;if(!this[_0x3fcb2b(0x36c)]())return;const _0x2eec46=this[_0x3fcb2b(0x3ec)]();let _0x487b90='';for(const _0x8778d6 of _0x2eec46){if([0x6c,0x198]['includes'](_0x8778d6[_0x3fcb2b(0x34b)])){if(_0x487b90!=='')_0x487b90+='\x0a';_0x487b90+=_0x8778d6['parameters'][0x0];}}this[_0x3fcb2b(0x100)](_0x487b90);},Game_Event[_0x4022db(0xd7)][_0x4022db(0xe5)]=function(){const _0x45b3d2=_0x4022db;Game_Character[_0x45b3d2(0xd7)][_0x45b3d2(0xe5)][_0x45b3d2(0x2bc)](this);const _0x26b653=VisuMZ['LightingEffects'][_0x45b3d2(0x2eb)][_0x45b3d2(0x299)];this[_0x45b3d2(0xda)](_0x26b653['EventRadial']),this[_0x45b3d2(0x3c6)](_0x26b653[_0x45b3d2(0x153)]),this['setConicalLightSettings'](_0x26b653[_0x45b3d2(0x147)]),this[_0x45b3d2(0x220)](_0x26b653[_0x45b3d2(0x112)]);},Game_Event[_0x4022db(0xd7)][_0x4022db(0x100)]=function(_0x1a330f){const _0x528ea6=_0x4022db;this[_0x528ea6(0x111)](_0x1a330f),this[_0x528ea6(0xf2)](_0x1a330f),this[_0x528ea6(0x132)](_0x1a330f),this[_0x528ea6(0x213)](_0x1a330f),this['checkConicalLightHandOffsetStringTags'](_0x1a330f);},Game_Event[_0x4022db(0xd7)][_0x4022db(0x111)]=function(_0x4b3c31){const _0xa2d2bb=_0x4022db,_0x5ad8e6=VisuMZ[_0xa2d2bb(0x13f)]['RegExp'];if(_0x4b3c31[_0xa2d2bb(0x235)](_0x5ad8e6[_0xa2d2bb(0x2ee)]))this[_0xa2d2bb(0x2d8)]()['enabled']=!![];else{if(_0x4b3c31[_0xa2d2bb(0x235)](_0x5ad8e6[_0xa2d2bb(0x3b9)]))_0xa2d2bb(0x117)===_0xa2d2bb(0x117)?this['radialLight']()[_0xa2d2bb(0x238)]=!![]:this[_0xa2d2bb(0x122)](_0x581ae6,_0x18392e,0.5);else _0x4b3c31[_0xa2d2bb(0x235)](_0x5ad8e6[_0xa2d2bb(0x1c4)])&&(this[_0xa2d2bb(0x2d8)]()['enabled']=![]);}if(_0x4b3c31[_0xa2d2bb(0x235)](_0x5ad8e6['RadialLightFilename'])){if(_0xa2d2bb(0x378)!==_0xa2d2bb(0x35f))this[_0xa2d2bb(0x2d8)]()[_0xa2d2bb(0x18a)]=String(RegExp['$1'])[_0xa2d2bb(0xdb)]();else{const _0x1dbc92=new _0xf13767();_0x1dbc92[_0xa2d2bb(0x392)]=new _0x304cbe(0x1f4,0x1f4),_0x1dbc92[_0xa2d2bb(0x392)][_0xa2d2bb(0x3fc)](0xfa,_0xa2d2bb(0x397)),this[_0xa2d2bb(0x146)]()['addChild'](_0x1dbc92),_0x1dbc92[_0xa2d2bb(0x3d3)]['x']=_0x1dbc92[_0xa2d2bb(0x3d3)]['y']=0.5,_0x1dbc92['x']=_0x5ab66b[_0xa2d2bb(0x2e4)]*0x1/0x2,_0x1dbc92['y']=_0x77ad22[_0xa2d2bb(0x3a1)]*0x1/0x3,_0x1dbc92[_0xa2d2bb(0x168)]=_0xe5794e['BLEND_MODES'][_0xa2d2bb(0x1b3)],this['_testDummyR']=_0x1dbc92;}}_0x4b3c31['match'](_0x5ad8e6['RadialLightColor'])&&(this[_0xa2d2bb(0x2d8)]()[_0xa2d2bb(0x2d5)]=ColorManager[_0xa2d2bb(0x40e)](RegExp['$1']));if(_0x4b3c31[_0xa2d2bb(0x235)](_0x5ad8e6[_0xa2d2bb(0x267)]))this['radialLight']()[_0xa2d2bb(0x3fd)]=Number(RegExp['$1']),this[_0xa2d2bb(0x2d8)]()[_0xa2d2bb(0x3e3)]=![];else _0x4b3c31[_0xa2d2bb(0x235)](_0x5ad8e6[_0xa2d2bb(0x1be)])&&(this[_0xa2d2bb(0x2d8)]()['radius']=Math[_0xa2d2bb(0x3ca)](Number(RegExp['$1'])/0x2),this[_0xa2d2bb(0x2d8)]()[_0xa2d2bb(0x3e3)]=![]);_0x4b3c31[_0xa2d2bb(0x235)](_0x5ad8e6['RadialLightIntensity'])&&(this[_0xa2d2bb(0x2d8)]()[_0xa2d2bb(0x2e0)]=(Number(RegExp['$1'])*0.01)[_0xa2d2bb(0x17c)](0x0,0x1));if(_0x4b3c31[_0xa2d2bb(0x235)](_0x5ad8e6['RadialLightBlendMode'])){if(_0xa2d2bb(0x319)===_0xa2d2bb(0x319))this[_0xa2d2bb(0x2d8)]()[_0xa2d2bb(0x168)]=ColorManager['blendModeParser'](RegExp['$1']);else{if(!_0x433c02)return;this[_0xa2d2bb(0x40a)]=this['_lightSpawnsFunc']||[];const _0x1f54e5=this[_0xa2d2bb(0x40a)][_0x490b76];if(!_0x1f54e5)return;const _0x158d85=_0x1f54e5[_0xa2d2bb(0x2bc)](_0x16b3f3,_0x15699b,_0x13df7f[_0xa2d2bb(0x281)]);if(!_0x158d85)return;_0x1ea829['x']=_0x40b19b[_0xa2d2bb(0x3ca)](_0x158d85['x']||0x0),_0x50dadb['y']=_0x2ad5c9[_0xa2d2bb(0x3ca)](_0x158d85['y']||0x0),_0x4a8e4[_0xa2d2bb(0x1d7)]['color']=_0x158d85[_0xa2d2bb(0x2d5)]??_0x467919['settings'][_0xa2d2bb(0x2d5)],_0x1c6cbf['settings'][_0xa2d2bb(0x3fd)]=_0x158d85['radius']??_0x6bc432[_0xa2d2bb(0x1d7)]['radius'],_0x846c04[_0xa2d2bb(0x1d7)][_0xa2d2bb(0x2e0)]=_0x158d85[_0xa2d2bb(0x2e0)]??_0x3fd9aa[_0xa2d2bb(0x1d7)]['intensity'],_0x5c8b85[_0xa2d2bb(0x1d7)]['angle']=_0x158d85[_0xa2d2bb(0x2ed)]??_0x344bcb[_0xa2d2bb(0x1d7)][_0xa2d2bb(0x2ed)],_0x582a11['settings'][_0xa2d2bb(0x361)]=_0x158d85[_0xa2d2bb(0x361)]??_0x35546c[_0xa2d2bb(0x1d7)][_0xa2d2bb(0x361)];if(_0x4ef04e[_0xa2d2bb(0x353)]<0xa){const _0xa588f8=_0x30983c[_0xa2d2bb(0x353)]*0.1;_0x2b3e29['settings'][_0xa2d2bb(0x361)]=_0x250b8b[_0xa2d2bb(0x3ca)](_0x51c1c9[_0xa2d2bb(0x1d7)]['opacity']*_0xa588f8)[_0xa2d2bb(0x17c)](0x0,0xff);}}}if(_0x4b3c31[_0xa2d2bb(0x235)](_0x5ad8e6[_0xa2d2bb(0x192)]))this[_0xa2d2bb(0x2d8)]()['opacity']=Number(RegExp['$1'])[_0xa2d2bb(0x17c)](0x0,0xff);else{if(_0x4b3c31[_0xa2d2bb(0x235)](_0x5ad8e6[_0xa2d2bb(0x201)])){const _0x463307=Number(RegExp['$1'])*0.01;this[_0xa2d2bb(0x2d8)]()['opacity']=Math[_0xa2d2bb(0x3ca)](_0x463307*0xff)[_0xa2d2bb(0x17c)](0x0,0xff);}}if(_0x4b3c31[_0xa2d2bb(0x235)](_0x5ad8e6['RadialLightAngle'])){if('omvBb'!==_0xa2d2bb(0x2f7)){_0x47d424[_0xa2d2bb(0x28f)](_0x5b0586,_0x1e5a92);const _0x4204db=_0x11d7e6[_0xa2d2bb(0x396)](),_0x114ea3=_0x304ed9['BoardedOffset'],_0x382f64=_0x5bdf53[_0xa2d2bb(0x14f)];_0x4204db&&(_0x4204db['setVehicleLightingConicalOffset'](_0x114ea3,!![]),_0x4204db['setVehicleLightingConicalOffset'](_0x382f64,![]));}else this[_0xa2d2bb(0x2d8)]()[_0xa2d2bb(0x2ed)]=Number(RegExp['$1'])[_0xa2d2bb(0x17c)](0x0,0x168);}_0x4b3c31[_0xa2d2bb(0x235)](_0x5ad8e6['RadialLightRotateSpeed'])&&(this[_0xa2d2bb(0x2d8)]()[_0xa2d2bb(0x3d0)]=Number(RegExp['$1']));if(_0x4b3c31['match'](_0x5ad8e6[_0xa2d2bb(0x399)])){const _0x274ef2=String(RegExp['$1'])[_0xa2d2bb(0x25a)](',')['map'](_0x333d40=>Number(_0x333d40)||0x0);this[_0xa2d2bb(0x2d8)]()[_0xa2d2bb(0x3b6)]=_0x274ef2[0x0]||0x0,this[_0xa2d2bb(0x2d8)]()[_0xa2d2bb(0x32d)]=_0x274ef2[0x1]||0x0;}},Game_Event[_0x4022db(0xd7)][_0x4022db(0xf2)]=function(_0x459d54){const _0x28facd=_0x4022db,_0x1fcce7=VisuMZ[_0x28facd(0x13f)][_0x28facd(0x3c5)];_0x459d54[_0x28facd(0x235)](_0x1fcce7[_0x28facd(0x340)])&&(this[_0x28facd(0x298)]()[_0x28facd(0xde)]=Number(RegExp['$1'])*0.01);_0x459d54[_0x28facd(0x235)](_0x1fcce7[_0x28facd(0x3b8)])&&(this[_0x28facd(0x298)]()['blinkModifier']=Number(RegExp['$1'])*0.01);_0x459d54['match'](_0x1fcce7[_0x28facd(0x2a3)])&&(this['radialLightBehavior']()['flickerRate']=Number(RegExp['$1'])*0.01);_0x459d54[_0x28facd(0x235)](_0x1fcce7[_0x28facd(0x124)])&&(this['radialLightBehavior']()[_0x28facd(0x3ae)]=Number(RegExp['$1'])*0.01);if(_0x459d54[_0x28facd(0x235)](_0x1fcce7[_0x28facd(0x18d)])){if(_0x28facd(0x1bf)!==_0x28facd(0x18f))this[_0x28facd(0x298)]()[_0x28facd(0x2d4)]=Number(RegExp['$1'])*0.01;else{const _0x513048=_0x500f00['_app']['renderer'];_0x513048&&_0x513048[_0x28facd(0x1f4)](this[_0x28facd(0x3b2)],this[_0x28facd(0x38b)],![]);}}_0x459d54['match'](_0x1fcce7[_0x28facd(0x15a)])&&(this[_0x28facd(0x298)]()[_0x28facd(0x139)]=Number(RegExp['$1'])*0.01);if(_0x459d54[_0x28facd(0x235)](_0x1fcce7[_0x28facd(0x33f)])){if('dTQKB'===_0x28facd(0x2ac))this[_0x28facd(0x298)]()['flareRate']=Number(RegExp['$1'])*0.01;else{if(this['_conicalLightDashOffsets']===_0x51d1cd)this[_0x28facd(0x3e5)]();return this['_conicalLightDashOffsets'];}}_0x459d54[_0x28facd(0x235)](_0x1fcce7['RadialBehaviorFlareMod'])&&(_0x28facd(0x198)===_0x28facd(0x333)?_0xb198e4[_0x28facd(0xd7)][_0x28facd(0x2c7)][_0x28facd(0x2bc)](this,_0x5c0ae3):this[_0x28facd(0x298)]()[_0x28facd(0x1e6)]=Number(RegExp['$1'])*0.01);if(_0x459d54[_0x28facd(0x235)](_0x1fcce7[_0x28facd(0x30e)])){if(_0x28facd(0xcf)!=='eBcxr')this['radialLightBehavior']()[_0x28facd(0x324)]=Number(RegExp['$1'])*0.01;else{const _0x104745=_0x36d4df(_0x2415e6['$1'])*0.01;this[_0x28facd(0x2d8)]()[_0x28facd(0x361)]=_0x4ce83a[_0x28facd(0x3ca)](_0x104745*0xff)[_0x28facd(0x17c)](0x0,0xff);}}_0x459d54[_0x28facd(0x235)](_0x1fcce7[_0x28facd(0x398)])&&(this[_0x28facd(0x298)]()['glowSpeed']=Number(RegExp['$1'])*0.01);if(_0x459d54['match'](_0x1fcce7[_0x28facd(0x11a)]))this[_0x28facd(0x298)]()[_0x28facd(0x36e)]=!![];else{if(_0x459d54[_0x28facd(0x235)](_0x1fcce7['RadialBehaviorGlowNoRng'])){if(_0x28facd(0x37a)===_0x28facd(0x24e)){const _0x25279d=new _0x5e47f1();_0x25279d[_0x28facd(0x392)]=this[_0x28facd(0x133)](![],_0x1157c2[_0x28facd(0x297)](),_0x43d179['hardAntiLightTerrainTags']()),_0x25279d[_0x28facd(0x3dd)]['x']=_0x2fdf03[_0x28facd(0x2a5)](),_0x25279d['scale']['y']=_0x2f1e9c['tileHeight'](),this[_0x28facd(0x185)]=_0x25279d,this['_lightContainer'][_0x28facd(0x3a9)](this['_hardAntiLightMask']),this['_hardAlphaMask']=new _0x499534[(_0x28facd(0x190))](this[_0x28facd(0x185)]),this['_hardAlphaMask']['blendMode']=_0x306126[_0x28facd(0x280)][_0x28facd(0x1b3)];}else this[_0x28facd(0x298)]()['glowRng']=![];}}if(_0x459d54[_0x28facd(0x235)](_0x1fcce7['RadialBehaviorPulseRate'])){if(_0x28facd(0x3ff)!==_0x28facd(0x3ff)){if(_0x2b4737[_0x28facd(0x382)]())return;_0x4162a7[_0x28facd(0x13f)][_0x28facd(0x386)](_0x460adf,_0x28facd(0x419));}else this[_0x28facd(0x298)]()[_0x28facd(0x23b)]=Number(RegExp['$1'])*0.01;}_0x459d54['match'](_0x1fcce7[_0x28facd(0x306)])&&(this[_0x28facd(0x298)]()[_0x28facd(0x1a0)]=Number(RegExp['$1'])*0.01);if(_0x459d54[_0x28facd(0x235)](_0x1fcce7['RadialBehaviorPulseRng'])){if('FHwKP'===_0x28facd(0x3a2)){if(this[_0x28facd(0x27e)]===_0x5c22a5)this['initLightingEffectsSettings']();return this[_0x28facd(0x27e)];}else this[_0x28facd(0x298)]()[_0x28facd(0x29b)]=!![];}else _0x459d54[_0x28facd(0x235)](_0x1fcce7[_0x28facd(0x191)])&&(_0x28facd(0x243)===_0x28facd(0x243)?this[_0x28facd(0x298)]()[_0x28facd(0x29b)]=![]:(this[_0x28facd(0x2d8)]()['radius']=_0x51ddcc(_0x2e7e9f['$1']),this[_0x28facd(0x2d8)]()[_0x28facd(0x3e3)]=![]));if(_0x459d54['match'](_0x1fcce7['RadialBehaviorPatternPreset']))'YjRZX'!==_0x28facd(0x2da)?this[_0x28facd(0x2aa)][_0x28facd(0x3a9)](this[_0x28facd(0x13c)]):this[_0x28facd(0x298)]()['pattern']=ColorManager[_0x28facd(0x23f)](RegExp['$1']);else _0x459d54[_0x28facd(0x235)](_0x1fcce7[_0x28facd(0x1fe)])&&(this['radialLightBehavior']()[_0x28facd(0x25e)]=String(RegExp['$1'])[_0x28facd(0xf4)]()[_0x28facd(0xdb)]());_0x459d54[_0x28facd(0x235)](_0x1fcce7[_0x28facd(0x23a)])&&(this[_0x28facd(0x298)]()[_0x28facd(0x3bc)]=Number(RegExp['$1'])||0x1);},Game_Event[_0x4022db(0xd7)][_0x4022db(0x132)]=function(_0x299974){const _0x3f2ac7=_0x4022db,_0x469326=VisuMZ[_0x3f2ac7(0x13f)][_0x3f2ac7(0x3c5)];if(_0x299974[_0x3f2ac7(0x235)](_0x469326['ConicalLightGeneric']))this[_0x3f2ac7(0x24f)]()['enabled']=!![];else{if(_0x299974[_0x3f2ac7(0x235)](_0x469326[_0x3f2ac7(0xce)]))this['conicalLight']()[_0x3f2ac7(0x238)]=!![];else _0x299974[_0x3f2ac7(0x235)](_0x469326[_0x3f2ac7(0x226)])&&(this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x238)]=![]);}_0x299974['match'](_0x469326[_0x3f2ac7(0x1b2)])&&('tGPez'!==_0x3f2ac7(0x222)?this['conicalLight']()[_0x3f2ac7(0x18a)]=String(RegExp['$1'])[_0x3f2ac7(0xdb)]():this[_0x3f2ac7(0x2d8)]()[_0x3f2ac7(0x238)]=!![]);_0x299974[_0x3f2ac7(0x235)](_0x469326['ConicalLightFileAngleOffset'])&&(this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x3bf)]=Number(RegExp['$1'])['clamp'](0x0,0x168));if(_0x299974['match'](_0x469326[_0x3f2ac7(0x2c4)])){const _0x3177a0=String(RegExp['$1'])[_0x3f2ac7(0x25a)](',')['map'](_0x3d0f13=>Number(_0x3d0f13)||0x0);this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x311)]=_0x3177a0[0x0],this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x11d)]=_0x3177a0[0x1];}_0x299974[_0x3f2ac7(0x235)](_0x469326['ConicalLightColor'])&&(this['conicalLight']()[_0x3f2ac7(0x2d5)]=ColorManager[_0x3f2ac7(0x40e)](RegExp['$1']));if(_0x299974[_0x3f2ac7(0x235)](_0x469326[_0x3f2ac7(0x40c)]))this['conicalLight']()[_0x3f2ac7(0x3fd)]=Number(RegExp['$1']);else _0x299974[_0x3f2ac7(0x235)](_0x469326[_0x3f2ac7(0x278)])&&('iDBrV'==='iDBrV'?this['conicalLight']()[_0x3f2ac7(0x3fd)]=Math[_0x3f2ac7(0x3ca)](Number(RegExp['$1'])/0x2):this[_0x3f2ac7(0x298)]()[_0x3f2ac7(0x1e6)]=_0x5e74b8(_0x57e272['$1'])*0.01);if(_0x299974[_0x3f2ac7(0x235)](_0x469326[_0x3f2ac7(0x374)])){if(_0x3f2ac7(0x105)!=='vFUFP')this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x3b3)]=Number(RegExp['$1']);else{const _0x17f015=this[_0x3f2ac7(0x240)]();this['_lastEnabled']=_0x17f015[_0x3f2ac7(0x238)],this['_lastFilename']=_0x17f015[_0x3f2ac7(0x18a)],this['_lastRadius']=this['getRadius'](_0x17f015),this[_0x3f2ac7(0x308)]=_0x17f015[_0x3f2ac7(0x2d5)],this['_lastIntensity']=_0x17f015[_0x3f2ac7(0x2e0)];}}else _0x299974['match'](_0x469326['ConicalLightSrcDiameter'])&&(this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x3b3)]=Math[_0x3f2ac7(0x3ca)](Number(RegExp['$1'])/0x2));_0x299974[_0x3f2ac7(0x235)](_0x469326['ConicalLightIntensity'])&&(this['conicalLight']()['intensity']=(Number(RegExp['$1'])*0.01)['clamp'](0x0,0x1));_0x299974[_0x3f2ac7(0x235)](_0x469326['ConicalLightBlendMode'])&&(this['conicalLight']()['blendMode']=ColorManager[_0x3f2ac7(0xca)](RegExp['$1']));if(_0x299974[_0x3f2ac7(0x235)](_0x469326['ConicalLightOpacityFlat']))this[_0x3f2ac7(0x24f)]()['opacity']=Number(RegExp['$1'])['clamp'](0x0,0xff);else{if(_0x299974['match'](_0x469326[_0x3f2ac7(0x230)])){if(_0x3f2ac7(0x420)!==_0x3f2ac7(0x420))_0x59a020-=_0x168fa6[_0x3f2ac7(0x2ed)]/0x2;else{const _0xa6560e=Number(RegExp['$1'])*0.01;this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x361)]=Math['round'](_0xa6560e*0xff)['clamp'](0x0,0xff);}}}if(_0x299974['match'](_0x469326[_0x3f2ac7(0x2a1)])){if('Ozhea'!=='iizWs')this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x2ed)]=Number(RegExp['$1'])[_0x3f2ac7(0x17c)](0x0,0x168);else{this['_lightContainer']=new _0xa88696(),this[_0x3f2ac7(0x3b2)][_0x3f2ac7(0x3a9)](this[_0x3f2ac7(0x329)]);const _0xe2d1d7=_0x53e3b6[_0x3f2ac7(0x1b7)];this[_0x3f2ac7(0x329)]['x']=_0xe2d1d7,this[_0x3f2ac7(0x329)]['y']=_0xe2d1d7;}}_0x299974['match'](_0x469326[_0x3f2ac7(0x347)])&&(_0x3f2ac7(0x407)===_0x3f2ac7(0x407)?this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x125)]=Number(RegExp['$1'])[_0x3f2ac7(0x17c)](0x0,0x168):this[_0x3f2ac7(0x21c)]()['flashModifier']=_0x594f36(_0x488962['$1'])*0.01);if(_0x299974['match'](_0x469326[_0x3f2ac7(0x3c7)])){if(_0x3f2ac7(0x128)!==_0x3f2ac7(0x1f0))this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x2c5)]=Number(RegExp['$1'])*0.01;else{const _0xd28651=this[_0x3f2ac7(0x423)],_0x238f8c=this['lightData']();this['x']=_0xd28651['x'],this['x']+=_0x238f8c[_0x3f2ac7(0x3b6)],this['y']=_0xd28651['y'],this['y']+=_0x238f8c[_0x3f2ac7(0x32d)],this['adjustPosition'](),this['x']=_0x148bcf[_0x3f2ac7(0x3ca)](this['x']),this['y']=_0x116da1[_0x3f2ac7(0x3ca)](this['y']);}}if(_0x299974[_0x3f2ac7(0x235)](_0x469326[_0x3f2ac7(0x134)]))this['conicalLight']()[_0x3f2ac7(0x181)]=!![];else _0x299974[_0x3f2ac7(0x235)](_0x469326['ConicalLightSwayNoRng'])&&(this['conicalLight']()[_0x3f2ac7(0x181)]=![]);if(_0x299974[_0x3f2ac7(0x235)](_0x469326[_0x3f2ac7(0xc2)])){if(_0x3f2ac7(0x418)===_0x3f2ac7(0x418))this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x1b1)]=TextManager[_0x3f2ac7(0x37d)](RegExp['$1']);else{_0x1d7d9c=_0x358bb9['substring'](0x1)['split']('');_0x3b078b[_0x3f2ac7(0x395)]===0x3&&(_0x512ce9=[_0x2fe854[0x0],_0x3794fa[0x0],_0x58e1de[0x1],_0x937b5b[0x1],_0xf26b9b[0x2],_0x5be7b8[0x2]]);while(_0x504144['length']>0x6)_0x57fc64[_0x3f2ac7(0x376)]();return _0x2ac0b7='0x'+_0x306eaa[_0x3f2ac7(0x322)](''),_0x3f2ac7(0x17a)+[(_0x54d8ba>>0x10&0xff)[_0x3f2ac7(0x17c)](0x0,0xff),(_0x4c44b4>>0x8&0xff)[_0x3f2ac7(0x17c)](0x0,0xff),(_0x3d3c18&0xff)[_0x3f2ac7(0x17c)](0x0,0xff)][_0x3f2ac7(0x322)](',')+','+_0x116912[_0x3f2ac7(0x17c)](0x0,0x1)+')';}}if(_0x299974['match'](_0x469326['ConicalLightFollowMouse']))this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x2d9)]=!![];else{if(_0x299974[_0x3f2ac7(0x235)](_0x469326['ConicalLightNoFollowMouse'])){if(_0x3f2ac7(0x276)!==_0x3f2ac7(0x34e))this[_0x3f2ac7(0x24f)]()['followMouse']=![];else{if(this['constructor']!==_0x312ecb)return;this[_0x3f2ac7(0xf9)]=new _0x1cd6de(_0x20aefc,this),_0x1b887c[_0x3f2ac7(0x279)](this[_0x3f2ac7(0xf9)]);}}}if(_0x299974[_0x3f2ac7(0x235)](_0x469326[_0x3f2ac7(0x2e6)]))this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x390)]=!![];else _0x299974[_0x3f2ac7(0x235)](_0x469326[_0x3f2ac7(0x3d4)])&&(this[_0x3f2ac7(0x24f)]()[_0x3f2ac7(0x390)]=![]);if(_0x299974[_0x3f2ac7(0x235)](_0x469326[_0x3f2ac7(0x1af)])){const _0x1fa2f6=String(RegExp['$1'])[_0x3f2ac7(0x25a)](',')['map'](_0x3f85c8=>Number(_0x3f85c8)||0x0);this[_0x3f2ac7(0x24f)]()['offsetX']=_0x1fa2f6[0x0]||0x0,this[_0x3f2ac7(0x24f)]()['offsetY']=_0x1fa2f6[0x1]||0x0;}},Game_Event[_0x4022db(0xd7)]['checkConicalLightBehaviorStringTags']=function(_0x18a188){const _0x59d8e1=_0x4022db,_0x4aa091=VisuMZ[_0x59d8e1(0x13f)][_0x59d8e1(0x3c5)];_0x18a188[_0x59d8e1(0x235)](_0x4aa091[_0x59d8e1(0x236)])&&(this[_0x59d8e1(0x21c)]()[_0x59d8e1(0xde)]=Number(RegExp['$1'])*0.01);_0x18a188[_0x59d8e1(0x235)](_0x4aa091['ConicalBehaviorBlinkMod'])&&(this['conicalLightBehavior']()[_0x59d8e1(0xfb)]=Number(RegExp['$1'])*0.01);_0x18a188[_0x59d8e1(0x235)](_0x4aa091[_0x59d8e1(0x321)])&&(this['conicalLightBehavior']()[_0x59d8e1(0x2cf)]=Number(RegExp['$1'])*0.01);_0x18a188['match'](_0x4aa091['ConicalBehaviorFlickerMod'])&&(this[_0x59d8e1(0x21c)]()['flickerModifier']=Number(RegExp['$1'])*0.01);_0x18a188[_0x59d8e1(0x235)](_0x4aa091['ConicalBehaviorFlashRate'])&&('jnlBM'!==_0x59d8e1(0x1a5)?this[_0x59d8e1(0xf8)]():this['conicalLightBehavior']()[_0x59d8e1(0x2d4)]=Number(RegExp['$1'])*0.01);if(_0x18a188['match'](_0x4aa091[_0x59d8e1(0x403)])){if(_0x59d8e1(0x2d7)!==_0x59d8e1(0x15e))this[_0x59d8e1(0x21c)]()[_0x59d8e1(0x139)]=Number(RegExp['$1'])*0.01;else{const _0x499ead=this[_0x59d8e1(0x240)]();this[_0x59d8e1(0x2ad)]=_0x499ead[_0x59d8e1(0x238)],this[_0x59d8e1(0x265)]=_0x499ead[_0x59d8e1(0x18a)],this['_lastRadius']=_0x499ead[_0x59d8e1(0x3fd)],this[_0x59d8e1(0x308)]=_0x499ead['color'],this[_0x59d8e1(0x2de)]=_0x499ead[_0x59d8e1(0x2e0)],this['_lastAngle']=_0x499ead['angle'],this['_lastMiniRadius']=_0x499ead['miniRadius'];}}if(_0x18a188['match'](_0x4aa091[_0x59d8e1(0x365)])){if('Plccp'!==_0x59d8e1(0x3b0))this[_0x59d8e1(0x21c)]()[_0x59d8e1(0x1a4)]=Number(RegExp['$1'])*0.01;else{const _0x573408=_0x4fc1eb(_0x1328d6['$1'])*0.01,_0x1e39c2=_0x211c2a['round'](_0x573408*0xff);_0x5139c8[_0x59d8e1(0x305)](_0x1e39c2);}}_0x18a188['match'](_0x4aa091[_0x59d8e1(0x1eb)])&&(this['conicalLightBehavior']()[_0x59d8e1(0x1e6)]=Number(RegExp['$1'])*0.01);_0x18a188[_0x59d8e1(0x235)](_0x4aa091['ConicalBehaviorGlowRate'])&&(this[_0x59d8e1(0x21c)]()[_0x59d8e1(0x324)]=Number(RegExp['$1'])*0.01);_0x18a188['match'](_0x4aa091[_0x59d8e1(0x199)])&&(this[_0x59d8e1(0x21c)]()[_0x59d8e1(0x214)]=Number(RegExp['$1'])*0.01);if(_0x18a188[_0x59d8e1(0x235)](_0x4aa091[_0x59d8e1(0x289)]))this['conicalLightBehavior']()['glowRng']=!![];else{if(_0x18a188['match'](_0x4aa091[_0x59d8e1(0xe0)])){if(_0x59d8e1(0x104)!==_0x59d8e1(0x3d8))this[_0x59d8e1(0x21c)]()[_0x59d8e1(0x36e)]=![];else{_0x37f9f3[_0x59d8e1(0x28f)](_0x1df6d6,_0x51b664);const _0x1b577c=_0x54d57f[_0x59d8e1(0x2eb)],_0x3680e2=_0x21234c[_0x59d8e1(0x215)];_0x3a6279[_0x59d8e1(0x259)](_0x1b577c),_0x125413[_0x59d8e1(0x220)](_0x3680e2);}}}_0x18a188['match'](_0x4aa091[_0x59d8e1(0x1d4)])&&(this['conicalLightBehavior']()[_0x59d8e1(0x23b)]=Number(RegExp['$1'])*0.01);_0x18a188[_0x59d8e1(0x235)](_0x4aa091[_0x59d8e1(0x188)])&&(this['conicalLightBehavior']()[_0x59d8e1(0x1a0)]=Number(RegExp['$1'])*0.01);if(_0x18a188[_0x59d8e1(0x235)](_0x4aa091[_0x59d8e1(0x39a)])){if(_0x59d8e1(0x15b)===_0x59d8e1(0xed)){const _0x181bc7=this['_softAntiLightMask'];_0x181bc7['x']=_0xa321a6['floor'](-_0x234627[_0x59d8e1(0x2cb)]()*_0x41cb90[_0x59d8e1(0x2a5)]()),_0x181bc7['y']=_0x26c9f3[_0x59d8e1(0x22a)](-_0x14158d[_0x59d8e1(0x3f4)]()*_0x4aba28[_0x59d8e1(0x33d)]());}else this[_0x59d8e1(0x21c)]()['pulseRng']=!![];}else _0x18a188[_0x59d8e1(0x235)](_0x4aa091[_0x59d8e1(0x11c)])&&(this[_0x59d8e1(0x21c)]()[_0x59d8e1(0x29b)]=![]);if(_0x18a188[_0x59d8e1(0x235)](_0x4aa091[_0x59d8e1(0x136)]))this[_0x59d8e1(0x21c)]()['pattern']=ColorManager[_0x59d8e1(0x23f)](RegExp['$1']);else _0x18a188[_0x59d8e1(0x235)](_0x4aa091['ConicalBehaviorPatternSequence'])&&(this[_0x59d8e1(0x21c)]()[_0x59d8e1(0x25e)]=String(RegExp['$1'])[_0x59d8e1(0xf4)]()[_0x59d8e1(0xdb)]());_0x18a188[_0x59d8e1(0x235)](_0x4aa091[_0x59d8e1(0x3d6)])&&(_0x59d8e1(0x15f)!==_0x59d8e1(0x15f)?this[_0x59d8e1(0x298)]()['flashModifier']=_0x427d0b(_0x39bd91['$1'])*0.01:this[_0x59d8e1(0x21c)]()[_0x59d8e1(0x3bc)]=Number(RegExp['$1'])||0x1);},Game_Event[_0x4022db(0xd7)]['checkConicalLightHandOffsetStringTags']=function(_0x3f6c4e){const _0x2c566b=_0x4022db,_0x454a5b=VisuMZ[_0x2c566b(0x13f)][_0x2c566b(0x3c5)],_0x56dc89=_0x3f6c4e['match'](_0x454a5b[_0x2c566b(0x37f)]);if(_0x56dc89){if(_0x2c566b(0x3e9)!=='HtgIt'){_0x217984=_0x24cccf[_0x2c566b(0xf4)]()[_0x2c566b(0xdb)]();switch(_0x1b3720){case _0x2c566b(0x283):case'-':return'z';case _0x2c566b(0xea):case _0x2c566b(0x25b):case _0x2c566b(0x3e2):return _0x2c566b(0x2be);case'pulse':case'pulse1':case _0x2c566b(0x14e):return _0x2c566b(0xc9);case _0x2c566b(0x1a6):case _0x2c566b(0x33a):return _0x2c566b(0x1f2);case _0x2c566b(0x179):case'strobe':case'strobe1':return _0x2c566b(0x346);case _0x2c566b(0x247):case'medium\x20pulse':return _0x2c566b(0x167);case _0x2c566b(0x15c):case _0x2c566b(0x3e4):return _0x2c566b(0x1fb);case _0x2c566b(0x10e):case _0x2c566b(0x2f8):return _0x2c566b(0x1bc);case _0x2c566b(0x38a):case _0x2c566b(0x300):return'mmmaaammmaaammmabcdefaaaammmmabcdefmmmaaaa';case _0x2c566b(0x2a8):case _0x2c566b(0x351):return'aaaaaaaazzzzzzzz';case _0x2c566b(0x32a):case'flicker3':return'mmamammmmammamamaaamammma';case _0x2c566b(0x247):case _0x2c566b(0x2d0):return _0x2c566b(0x273);case'underwater':return _0x2c566b(0x2b2);}return'';}else for(const _0x3c537c of _0x56dc89){if('OSzmD'===_0x2c566b(0x3ba)){_0x3c537c[_0x2c566b(0x235)](_0x454a5b[_0x2c566b(0x37f)]);const _0x4b26d2=TextManager['parseDirectionText'](RegExp['$1']);if([0x0,0x5][_0x2c566b(0x30c)](_0x4b26d2))continue;const _0x2e6db7=Number(RegExp['$2'])||0x0,_0x2afe1b=String(RegExp['$3'])[_0x2c566b(0x25a)](',')[_0x2c566b(0x32f)](_0x31fd67=>Number(_0x31fd67)||0x0),_0x3cb32b=Number(_0x2afe1b[0x0])||0x0,_0x5828b1=Number(_0x2afe1b[0x1])||0x0,_0x25ae78=_0x2c566b(0x29c)[_0x2c566b(0x3c9)](_0x4b26d2),_0x465f10=_0x2c566b(0x244)[_0x2c566b(0x3c9)](_0x2e6db7),_0xd2bb4a='pattern%1Y'[_0x2c566b(0x3c9)](_0x2e6db7);this['conicalLightOffsets']()[_0x25ae78][_0x465f10]=_0x3cb32b,this['conicalLightOffsets']()[_0x25ae78][_0xd2bb4a]=_0x5828b1;}else this['lightingEffects']()[_0x2c566b(0x3aa)]=_0xd5b590,this['lightingEffects']()['opacityDuration']=_0x16b378,_0x4583d1<=0x0&&(this[_0x2c566b(0x2c2)]()[_0x2c566b(0x361)]=_0x2d80ae,this[_0x2c566b(0x2c2)]()[_0x2c566b(0x1f7)]=_0x23e6d1);}}},VisuMZ[_0x4022db(0x13f)][_0x4022db(0x2e7)]=Scene_Options['prototype']['maxCommands'],Scene_Options[_0x4022db(0xd7)]['maxCommands']=function(){const _0x208ea4=_0x4022db;let _0x1a41cf=VisuMZ[_0x208ea4(0x13f)][_0x208ea4(0x2e7)]['call'](this);const _0xbb718b=VisuMZ[_0x208ea4(0x13f)][_0x208ea4(0x2eb)][_0x208ea4(0x331)];if(_0xbb718b[_0x208ea4(0x19b)]&&_0xbb718b[_0x208ea4(0x35b)])_0x1a41cf++;if(_0xbb718b[_0x208ea4(0x19b)]&&_0xbb718b['AddPulsingLights'])_0x1a41cf++;return _0x1a41cf;},VisuMZ[_0x4022db(0x13f)][_0x4022db(0x3b5)]=Sprite_Character[_0x4022db(0xd7)][_0x4022db(0x131)],Sprite_Character[_0x4022db(0xd7)]['initialize']=function(_0x3f5e0a){const _0x347d76=_0x4022db;VisuMZ[_0x347d76(0x13f)][_0x347d76(0x3b5)][_0x347d76(0x2bc)](this,_0x3f5e0a),this[_0x347d76(0x2b1)](_0x3f5e0a),this[_0x347d76(0x211)](_0x3f5e0a);},Sprite_Character['prototype'][_0x4022db(0x2b1)]=function(_0x15eaf0){const _0x57c611=_0x4022db;if(this[_0x57c611(0x320)]!==Sprite_Character)return;this[_0x57c611(0xd4)]=new Sprite_RadialLight(_0x15eaf0,this),SceneManager['addChildToLightContainer'](this[_0x57c611(0xd4)]);},Sprite_Character[_0x4022db(0xd7)][_0x4022db(0x211)]=function(_0x994556){const _0x5e2796=_0x4022db;if(this[_0x5e2796(0x320)]!==Sprite_Character)return;this[_0x5e2796(0xf9)]=new Sprite_ConicalLight(_0x994556,this),SceneManager[_0x5e2796(0x279)](this['_conicalLight']);},VisuMZ[_0x4022db(0x13f)][_0x4022db(0x2ea)]=Sprite_Battler[_0x4022db(0xd7)][_0x4022db(0x148)],Sprite_Battler['prototype'][_0x4022db(0x148)]=function(_0x4198bd){const _0x1a3229=_0x4022db;VisuMZ[_0x1a3229(0x13f)][_0x1a3229(0x2ea)][_0x1a3229(0x2bc)](this,_0x4198bd),this[_0x1a3229(0x2b1)](_0x4198bd);},Sprite_Battler[_0x4022db(0xd7)]['setupRadialLight']=function(_0x22b9d4){const _0x325e49=_0x4022db;if(this[_0x325e49(0xd4)]){this[_0x325e49(0xd4)][_0x325e49(0x2ab)](_0x22b9d4);return;}if(this[_0x325e49(0x320)]['name']==='Sprite_SvEnemy')return;this[_0x325e49(0xd4)]=new Sprite_RadialLight(_0x22b9d4,this),SceneManager[_0x325e49(0x279)](this[_0x325e49(0xd4)]);};function Sprite_LightingEffects(){const _0x5eddbc=_0x4022db;this[_0x5eddbc(0x131)](...arguments);}Sprite_LightingEffects['prototype']=Object[_0x4022db(0x13a)](Sprite[_0x4022db(0xd7)]),Sprite_LightingEffects[_0x4022db(0xd7)][_0x4022db(0x320)]=Sprite_LightingEffects,Sprite_LightingEffects[_0x4022db(0x1b7)]=VisuMZ[_0x4022db(0x13f)][_0x4022db(0x2eb)][_0x4022db(0x299)][_0x4022db(0x271)],Sprite_LightingEffects[_0x4022db(0xd7)]['initialize']=function(_0x2f4d3d){const _0x3e5782=_0x4022db;this[_0x3e5782(0x1da)]=_0x2f4d3d,Sprite[_0x3e5782(0xd7)][_0x3e5782(0x131)][_0x3e5782(0x2bc)](this),this[_0x3e5782(0x168)]=PIXI[_0x3e5782(0x280)][_0x3e5782(0x381)],this['x']=Math[_0x3e5782(0x3ca)](Graphics[_0x3e5782(0x2e4)]/0x2),this['y']=Math[_0x3e5782(0x3ca)](Graphics['height']/0x2),this['anchor']['x']=this[_0x3e5782(0x3d3)]['y']=0.5,this[_0x3e5782(0x118)](),this[_0x3e5782(0x360)](),this[_0x3e5782(0x327)](),this[_0x3e5782(0x249)](),this['createAntiLightMask'](),this[_0x3e5782(0x1f9)](),![]&&this['createTestDummies']();},Sprite_LightingEffects[_0x4022db(0xd7)][_0x4022db(0x1c9)]=function(){const _0x1e8e91=_0x4022db;Sprite[_0x1e8e91(0xd7)][_0x1e8e91(0x1c9)]['call'](this),this[_0x1e8e91(0x1f3)]();},Sprite_LightingEffects['prototype'][_0x4022db(0x1f3)]=function(){const _0x142cf3=_0x4022db;if(this[_0x142cf3(0x185)]){if(_0x142cf3(0xee)!==_0x142cf3(0x3fe))this[_0x142cf3(0x185)][_0x142cf3(0x1c9)]();else{_0xca953c[_0x142cf3(0x28f)](_0x176ff5,_0x368552);const _0x11b2c2=_0x454b1b[_0x142cf3(0x282)](),_0x2ce221=_0x328fd8['BoardedSettings'],_0x2f3c12=_0x362336[_0x142cf3(0x258)],_0x310248=_0x3f0844['UnboardedSettings'],_0x381b30=_0x19167c['UnboardedBehavior'];if(_0x11b2c2){const _0x125b1a=!![];_0x11b2c2[_0x142cf3(0x260)](_0x2ce221,!![],_0x125b1a,![]),_0x11b2c2[_0x142cf3(0x260)](_0x2f3c12,!![],_0x125b1a,!![]),_0x11b2c2[_0x142cf3(0x260)](_0x310248,![],_0x125b1a,![]),_0x11b2c2[_0x142cf3(0x260)](_0x381b30,![],_0x125b1a,!![]);}}}if(this[_0x142cf3(0x22f)]){if(_0x142cf3(0x20c)===_0x142cf3(0x20c))this[_0x142cf3(0x22f)][_0x142cf3(0x1c9)]();else{_0x3fae8f['prototype'][_0x142cf3(0xe5)]['call'](this);const _0x1b740f=_0x303b30[_0x142cf3(0x13f)][_0x142cf3(0x2eb)]['Map'];this[_0x142cf3(0xda)](_0x1b740f[_0x142cf3(0x1f5)]),this[_0x142cf3(0x3c6)](_0x1b740f[_0x142cf3(0x39c)]),this['setConicalLightSettings'](_0x1b740f[_0x142cf3(0x245)]),this[_0x142cf3(0x220)](_0x1b740f[_0x142cf3(0x2b0)]);}}this[_0x142cf3(0x329)]&&('Cypxx'===_0x142cf3(0x41e)?this['_lightContainer']['destroy']():_0x49a082['render'](this['_proxySprite'],this['texture'],![]));},Sprite_LightingEffects[_0x4022db(0xd7)][_0x4022db(0x118)]=function(){const _0x5137f1=_0x4022db,_0xa32871=Sprite_LightingEffects[_0x5137f1(0x1b7)]*0x2,_0xd52c6e=Graphics[_0x5137f1(0x2e4)]+_0xa32871,_0x3e8adc=Graphics[_0x5137f1(0x3a1)]+_0xa32871;this[_0x5137f1(0x38b)]=PIXI[_0x5137f1(0x10c)]['create'](_0xd52c6e,_0x3e8adc);},Sprite_LightingEffects['prototype'][_0x4022db(0x360)]=function(){this['_proxySprite']=new Sprite();},Sprite_LightingEffects['prototype'][_0x4022db(0x327)]=function(){const _0xc25cbe=_0x4022db;this[_0xc25cbe(0x37c)]=new Sprite(),this[_0xc25cbe(0x37c)]['bitmap']=new Bitmap(0x1,0x1),this['_proxySprite'][_0xc25cbe(0x3a9)](this[_0xc25cbe(0x37c)]);const _0x1a4c8a=Sprite_LightingEffects[_0xc25cbe(0x1b7)]*0x2;this['_colorSprite'][_0xc25cbe(0x3dd)]['x']=Graphics[_0xc25cbe(0x2e4)]+_0x1a4c8a,this[_0xc25cbe(0x37c)][_0xc25cbe(0x3dd)]['y']=Graphics[_0xc25cbe(0x3a1)]+_0x1a4c8a,this[_0xc25cbe(0x309)]();},Sprite_LightingEffects[_0x4022db(0xd7)][_0x4022db(0x249)]=function(){const _0x5d69ae=_0x4022db;this[_0x5d69ae(0x329)]=new Sprite(),this[_0x5d69ae(0x3b2)]['addChild'](this[_0x5d69ae(0x329)]);const _0x953d87=Sprite_LightingEffects[_0x5d69ae(0x1b7)];this[_0x5d69ae(0x329)]['x']=_0x953d87,this['_lightContainer']['y']=_0x953d87;},Sprite_LightingEffects[_0x4022db(0xd7)][_0x4022db(0x146)]=function(){const _0xdee4c7=_0x4022db;if(this['_lightContainer']===undefined)this[_0xdee4c7(0x249)]();return this[_0xdee4c7(0x329)];},Sprite_LightingEffects[_0x4022db(0x371)]=!![],Sprite_LightingEffects[_0x4022db(0x1df)]=![],Sprite_LightingEffects[_0x4022db(0xd7)]['createAntiLightMask']=function(){const _0x584928=_0x4022db;if(!Sprite_LightingEffects[_0x584928(0x371)])return;if(SceneManager[_0x584928(0x382)]())return;if($gameMap[_0x584928(0x10d)]()||$gameMap[_0x584928(0x3c4)]())return;if(!$gameMap['hasAntiLightTiles']())return;{const _0x464ccb=new Sprite();_0x464ccb[_0x584928(0x392)]=this['createAntiLightMaskBitmap'](![],$gameMap[_0x584928(0x297)](),$gameMap['hardAntiLightTerrainTags']()),_0x464ccb[_0x584928(0x3dd)]['x']=$gameMap['tileWidth'](),_0x464ccb[_0x584928(0x3dd)]['y']=$gameMap[_0x584928(0x33d)](),this[_0x584928(0x185)]=_0x464ccb,this[_0x584928(0x329)][_0x584928(0x3a9)](this['_hardAntiLightMask']),this[_0x584928(0x40b)]=new PIXI['SpriteMaskFilter'](this[_0x584928(0x185)]),this[_0x584928(0x40b)][_0x584928(0x168)]=PIXI[_0x584928(0x280)][_0x584928(0x1b3)];}{if('iuoJx'!==_0x584928(0x21e))this['conicalLightBehavior']()['glowRng']=![];else{const _0x3b9076=new Sprite();_0x3b9076[_0x584928(0x392)]=this[_0x584928(0x133)](!![],$gameMap[_0x584928(0x318)](),$gameMap[_0x584928(0x252)]()),_0x3b9076[_0x584928(0x3dd)]['x']=$gameMap[_0x584928(0x2a5)](),_0x3b9076['scale']['y']=$gameMap[_0x584928(0x33d)](),this['_softAntiLightMask']=_0x3b9076,this['_lightContainer'][_0x584928(0x3a9)](this[_0x584928(0x22f)]),this[_0x584928(0x315)]=new PIXI[(_0x584928(0x190))](this[_0x584928(0x22f)]),this[_0x584928(0x315)][_0x584928(0x168)]=PIXI[_0x584928(0x280)][_0x584928(0x1b3)];}}this[_0x584928(0x329)][_0x584928(0x246)]=this[_0x584928(0x329)][_0x584928(0x246)]||[],this[_0x584928(0x329)][_0x584928(0x246)][_0x584928(0x22c)](this[_0x584928(0x40b)]),this[_0x584928(0x329)]['filters']['push'](this['_softAlphaMask']);},Sprite_LightingEffects[_0x4022db(0xd7)][_0x4022db(0x133)]=function(_0x463590,_0x14d9c6,_0xea1f96){const _0x366abd=_0x4022db,_0x27fafc=$gameMap[_0x366abd(0x2e4)](),_0x370c58=$gameMap[_0x366abd(0x3a1)](),_0x4c415f=new Bitmap(_0x27fafc,_0x370c58);_0x4c415f[_0x366abd(0x286)]=_0x463590;for(let _0x1b25cd=0x0;_0x1b25cd<_0x27fafc;_0x1b25cd++){for(let _0x4e5b76=0x0;_0x4e5b76<_0x370c58;_0x4e5b76++){if(_0x366abd(0x34a)===_0x366abd(0x34a)){const _0x74081e=$gameMap['regionId'](_0x1b25cd,_0x4e5b76);if(_0x14d9c6[_0x366abd(0x30c)](_0x74081e)){if(_0x366abd(0x2d2)===_0x366abd(0x2d2))continue;else{_0x580ee6[_0x366abd(0x28f)](_0x544a0e,_0x2d28e4);const _0x237091=_0x247ebe[_0x366abd(0x396)](),_0x2cc244=_0x25dcde[_0x366abd(0x35d)],_0x37abbd=_0x7fc036['BoardedBehavior'],_0x37d321=_0x1d5508['UnboardedSettings'],_0x33bd5c=_0x15541c[_0x366abd(0x16f)];if(_0x237091){const _0x128167=![];_0x237091[_0x366abd(0x260)](_0x2cc244,!![],_0x128167,![]),_0x237091['setVehicleLightingData'](_0x37abbd,!![],_0x128167,!![]),_0x237091[_0x366abd(0x260)](_0x37d321,![],_0x128167,![]),_0x237091['setVehicleLightingData'](_0x33bd5c,![],_0x128167,!![]);}}}const _0x1941ff=$gameMap[_0x366abd(0x200)](_0x1b25cd,_0x4e5b76);if(_0xea1f96[_0x366abd(0x30c)](_0x1941ff)){if('qnHNp'===_0x366abd(0x24a))this[_0x366abd(0x1cd)](),this[_0x366abd(0x2bf)](),this['updateFlash'](),this[_0x366abd(0x173)](),this['updateGlow'](),this[_0x366abd(0x26d)](),this[_0x366abd(0x38e)]();else continue;}_0x4c415f['fillRect'](_0x1b25cd,_0x4e5b76,0x1,0x1,'#ffffff');}else this['radialLightBehavior']()[_0x366abd(0x29b)]=![];}}return _0x4c415f;},Sprite_LightingEffects[_0x4022db(0xd7)]['createAutoLightRegions']=function(){const _0x478792=_0x4022db;if(!$gameMap)return;if(!$dataMap)return;if($gameMap['isLoopHorizontal']()||$gameMap['isLoopVertical']())return;if(!this['_lightContainer'])return;if(SceneManager[_0x478792(0x382)]())return;const _0xd31c69=new Sprite();_0xd31c69[_0x478792(0x392)]=this[_0x478792(0x2cc)](),_0xd31c69[_0x478792(0x3dd)]['x']=$gameMap['tileWidth'](),_0xd31c69[_0x478792(0x3dd)]['y']=$gameMap[_0x478792(0x33d)](),this['_autoLightSprite']=_0xd31c69,this[_0x478792(0x422)][_0x478792(0x168)]=PIXI[_0x478792(0x280)][_0x478792(0x189)],this[_0x478792(0x146)]()[_0x478792(0x3a9)](_0xd31c69);},Sprite_LightingEffects[_0x4022db(0xd7)]['createAutoLightBitmap']=function(){const _0x2dbaa2=_0x4022db,_0x564135=$gameMap[_0x2dbaa2(0x2e4)](),_0x31f571=$gameMap[_0x2dbaa2(0x3a1)](),_0x25da21=new Bitmap(_0x564135,_0x31f571);_0x25da21['smooth']=!![];for(let _0x341bc5=0x0;_0x341bc5<_0x564135;_0x341bc5++){for(let _0x4df14f=0x0;_0x4df14f<_0x31f571;_0x4df14f++){const _0x2f8f8a=$gameMap['regionId'](_0x341bc5,_0x4df14f),_0x5c05fc=this['regionAutoLightOpacity'](_0x2f8f8a);if(_0x5c05fc>0x0){const _0x16efc2=Math['ceil'](0xff*_0x5c05fc/0x64);let _0x1d42f0=ColorManager['arrayToHex']([_0x16efc2,_0x16efc2,_0x16efc2]);_0x25da21[_0x2dbaa2(0x3e0)](_0x341bc5,_0x4df14f,0x1,0x1,_0x1d42f0);}}}return _0x25da21;},Sprite_LightingEffects[_0x4022db(0xd7)][_0x4022db(0xcb)]=function(_0x33b51b){const _0x4849fa=_0x4022db,_0x3494b5=VisuMZ[_0x4849fa(0x13f)]['Settings'][_0x4849fa(0x3ce)];let _0x2055aa=0x64;while(_0x2055aa>0x0){if(_0x4849fa(0x2b9)!==_0x4849fa(0x2b9))return _0x9eb990[_0x4849fa(0xd7)][_0x4849fa(0x359)][_0x4849fa(0x2bc)](this);else{const _0x328a18=_0x3494b5[_0x4849fa(0x27a)[_0x4849fa(0x3c9)](_0x2055aa)]||[];if(_0x328a18[_0x4849fa(0x30c)](_0x33b51b))return _0x2055aa;_0x2055aa-=0x5;}}return 0x0;},Sprite_LightingEffects['prototype'][_0x4022db(0x22d)]=function(){const _0x2f8d83=_0x4022db;{const _0x368b50=new Sprite();_0x368b50[_0x2f8d83(0x392)]=new Bitmap(0x1f4,0x1f4),_0x368b50[_0x2f8d83(0x392)][_0x2f8d83(0x3fc)](0xfa,_0x2f8d83(0x397)),this[_0x2f8d83(0x146)]()['addChild'](_0x368b50),_0x368b50[_0x2f8d83(0x3d3)]['x']=_0x368b50[_0x2f8d83(0x3d3)]['y']=0.5,_0x368b50['x']=Graphics[_0x2f8d83(0x2e4)]*0x1/0x2,_0x368b50['y']=Graphics[_0x2f8d83(0x3a1)]*0x1/0x3,_0x368b50['blendMode']=PIXI[_0x2f8d83(0x280)][_0x2f8d83(0x1b3)],this[_0x2f8d83(0x41b)]=_0x368b50;}{const _0x484aad=new Sprite();_0x484aad['bitmap']=new Bitmap(0x1f4,0x1f4),_0x484aad[_0x2f8d83(0x392)][_0x2f8d83(0x3fc)](0xfa,'#00ff00'),this[_0x2f8d83(0x146)]()['addChild'](_0x484aad),_0x484aad[_0x2f8d83(0x3d3)]['x']=_0x484aad[_0x2f8d83(0x3d3)]['y']=0.5,_0x484aad['x']=Graphics[_0x2f8d83(0x2e4)]*0x2/0x5,_0x484aad['y']=Graphics['height']*0x2/0x3,_0x484aad[_0x2f8d83(0x168)]=PIXI[_0x2f8d83(0x280)]['ADD'],this['_testDummyG']=_0x484aad;}{const _0x361f87=new Sprite();_0x361f87[_0x2f8d83(0x392)]=new Bitmap(0x1f4,0x1f4),_0x361f87['bitmap'][_0x2f8d83(0x3fc)](0xfa,_0x2f8d83(0x20a)),this[_0x2f8d83(0x146)]()['addChild'](_0x361f87),_0x361f87[_0x2f8d83(0x3d3)]['x']=_0x361f87['anchor']['y']=0.5,_0x361f87['x']=Graphics['width']*0x3/0x5,_0x361f87['y']=Graphics['height']*0x2/0x3,_0x361f87[_0x2f8d83(0x168)]=PIXI['BLEND_MODES'][_0x2f8d83(0x1b3)],this['_testDummyB']=_0x361f87;}this['_testDummies']=!![];},Sprite_LightingEffects[_0x4022db(0xd7)][_0x4022db(0x266)]=function(){const _0x1a03c0=_0x4022db;Sprite[_0x1a03c0(0xd7)]['update'][_0x1a03c0(0x2bc)](this),this[_0x1a03c0(0x2c6)]();this[_0x1a03c0(0x329)]&&this[_0x1a03c0(0x329)][_0x1a03c0(0x266)]();this[_0x1a03c0(0x1e1)]();this[_0x1a03c0(0x422)]&&this[_0x1a03c0(0x20f)]();this['_testDummies']&&this[_0x1a03c0(0xf8)]();if(this[_0x1a03c0(0x3b2)]){if(_0x1a03c0(0x38f)===_0x1a03c0(0x38f))this['updateOverlayColor'](),this['updateOverlayRender']();else{if(!_0x390c70)return;let _0x6fc435=_0x282986['_realX']+0.5,_0xecc6c3=_0x241d5a[_0x1a03c0(0x224)]+0x1,_0x37bdac=0x0,_0x277ad4=0x0;const _0x12ddeb=_0x40d212[_0x1a03c0(0x1ab)][_0x1a03c0(0x1da)];if(_0x12ddeb){const _0x1ba64b=_0x12ddeb[_0x1a03c0(0x264)](_0x9b77d6);_0x1ba64b&&(_0x277ad4=-(_0x1ba64b[_0x1a03c0(0x3a1)]/0x2));}this[_0x1a03c0(0xf0)](_0x6fc435,_0xecc6c3,_0x37bdac,_0x277ad4);}}},Sprite_LightingEffects[_0x4022db(0xd7)][_0x4022db(0x2c6)]=function(){const _0x486e97=_0x4022db;this['opacity']=$gameScreen[_0x486e97(0x402)]();},Sprite_LightingEffects[_0x4022db(0xd7)][_0x4022db(0x1e1)]=function(){const _0x172f06=_0x4022db;if(this[_0x172f06(0x185)]){if(_0x172f06(0x3ad)==='NtLJJ'){const _0x1eaa0a=this[_0x172f06(0x185)];_0x1eaa0a['x']=Math[_0x172f06(0x22a)](-$gameMap[_0x172f06(0x2cb)]()*$gameMap[_0x172f06(0x2a5)]()),_0x1eaa0a['y']=Math[_0x172f06(0x22a)](-$gameMap[_0x172f06(0x3f4)]()*$gameMap[_0x172f06(0x33d)]());}else{if(this[_0x172f06(0x2c2)]()[_0x172f06(0xe3)]<=0x0)return;const _0x2170bb=this['lightingEffects']()[_0x172f06(0xe3)],_0x20cf6d=this[_0x172f06(0x2c2)]()['opacity'],_0x377a53=this[_0x172f06(0x2c2)]()[_0x172f06(0x3aa)];this[_0x172f06(0x2c2)]()['opacity']=(_0x20cf6d*(_0x2170bb-0x1)+_0x377a53)/_0x2170bb,this[_0x172f06(0x2c2)]()[_0x172f06(0x1f7)]=_0x5e98fd,this['lightingEffects']()[_0x172f06(0xe3)]--,this[_0x172f06(0x2c2)]()[_0x172f06(0xe3)]<=0x0&&(this['lightingEffects']()[_0x172f06(0x361)]=_0x377a53);}}if(this[_0x172f06(0x22f)]){if(_0x172f06(0x3a5)!=='VVWqi'){const _0x365b86=this[_0x172f06(0x22f)];_0x365b86['x']=Math[_0x172f06(0x22a)](-$gameMap['displayX']()*$gameMap[_0x172f06(0x2a5)]()),_0x365b86['y']=Math[_0x172f06(0x22a)](-$gameMap['displayY']()*$gameMap['tileHeight']());}else this['_noDarknessOverlay']=!![];}},Sprite_LightingEffects[_0x4022db(0xd7)]['updateAutoLightAreas']=function(){const _0x5c7754=_0x4022db;this['_autoLightSprite']['x']=Math[_0x5c7754(0x22a)](-$gameMap['displayX']()*$gameMap[_0x5c7754(0x2a5)]()),this[_0x5c7754(0x422)]['y']=Math[_0x5c7754(0x22a)](-$gameMap[_0x5c7754(0x3f4)]()*$gameMap[_0x5c7754(0x33d)]());},Sprite_LightingEffects[_0x4022db(0xd7)]['updateTestDummies']=function(){const _0x3edaab=_0x4022db;this[_0x3edaab(0x41b)][_0x3edaab(0x3dd)]['x']=this[_0x3edaab(0x41b)][_0x3edaab(0x3dd)]['y']=0.9+Math[_0x3edaab(0x3df)](Graphics[_0x3edaab(0x334)]*0.11)*0.1,this['_testDummyG']['scale']['x']=this[_0x3edaab(0x1a7)][_0x3edaab(0x3dd)]['y']=0.9+Math[_0x3edaab(0x3df)](Graphics[_0x3edaab(0x334)]*0.12)*0.1,this['_testDummyB'][_0x3edaab(0x3dd)]['x']=this[_0x3edaab(0x209)][_0x3edaab(0x3dd)]['y']=0.9+Math[_0x3edaab(0x3df)](Graphics[_0x3edaab(0x334)]*0.13)*0.1;},Sprite_LightingEffects[_0x4022db(0xd7)][_0x4022db(0x309)]=function(){const _0x16e482=_0x4022db;if(this['_overlayColor']===$gameScreen['lightingOverlayColor']())return;this[_0x16e482(0x30a)]=$gameScreen[_0x16e482(0x1e3)]();const _0x307b85=this['_colorSprite'][_0x16e482(0x392)];_0x307b85[_0x16e482(0x3e0)](0x0,0x0,0x1,0x1,this[_0x16e482(0x30a)]);},Sprite_LightingEffects[_0x4022db(0xd7)][_0x4022db(0x358)]=function(){const _0x5b2d13=_0x4022db,_0x4159b9=Graphics['_app'][_0x5b2d13(0x414)];_0x4159b9&&(_0x5b2d13(0x14a)!==_0x5b2d13(0x14a)?_0x4c32ba['leader']()?_0xef5acf[_0x5b2d13(0x401)]()[_0x5b2d13(0x31d)](_0x484c87):_0x26f06c['prototype'][_0x5b2d13(0x31d)][_0x5b2d13(0x2bc)](this,_0x2bfd31):_0x4159b9[_0x5b2d13(0x1f4)](this[_0x5b2d13(0x3b2)],this['texture'],![]));};function Sprite_LightBase(){this['initialize'](...arguments);}Sprite_LightBase[_0x4022db(0xd7)]=Object['create'](Sprite[_0x4022db(0xd7)]),Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x320)]=Sprite_LightBase,Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x131)]=function(_0x40d58a,_0x28d0b1){const _0x4ca5df=_0x4022db;this['_source']=_0x40d58a,this[_0x4ca5df(0x307)]=_0x28d0b1,Sprite[_0x4ca5df(0xd7)][_0x4ca5df(0x131)][_0x4ca5df(0x2bc)](this),this[_0x4ca5df(0x416)]();},Sprite_LightBase[_0x4022db(0xd7)]['initMembers']=function(){const _0x2b234e=_0x4022db;this[_0x2b234e(0x3d3)]['x']=0.5,this[_0x2b234e(0x3d3)]['y']=0.5,this[_0x2b234e(0x3dd)]['x']=0x1,this[_0x2b234e(0x3dd)]['y']=0x1,this[_0x2b234e(0x1aa)]=Math[_0x2b234e(0x1a3)](0xf4240),this[_0x2b234e(0x25f)]=Math[_0x2b234e(0x1a3)](0xf4240),this[_0x2b234e(0x38c)]=0x0;},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x2ab)]=function(_0x3c53d0){const _0x43ab48=_0x4022db;if(this[_0x43ab48(0x423)]===_0x3c53d0)return;this[_0x43ab48(0x423)]=_0x3c53d0,this['update']();},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x240)]=function(){const _0xa8f529=_0x4022db;return this['_source']?this[_0xa8f529(0x423)][_0xa8f529(0x2d8)]():{};},Sprite_LightBase['prototype'][_0x4022db(0x32c)]=function(){const _0x1f4cfb=_0x4022db;return this['_source']?this[_0x1f4cfb(0x423)][_0x1f4cfb(0x298)]():{};},Sprite_LightBase['prototype'][_0x4022db(0x1cb)]=function(){const _0x1910b4=_0x4022db;if(this[_0x1910b4(0x423)]&&this['_source']['constructor']===Game_Vehicle){if(this[_0x1910b4(0x423)][_0x1910b4(0x41f)]()==='')return![];}return this[_0x1910b4(0x240)]()[_0x1910b4(0x238)];},Sprite_LightBase['prototype'][_0x4022db(0x266)]=function(){const _0x1b783f=_0x4022db;Sprite[_0x1b783f(0xd7)]['update'][_0x1b783f(0x2bc)](this),this['checkProperties'](),this[_0x1b783f(0x1cb)]()&&this['_source']&&(_0x1b783f(0x141)==='opWoO'?this[_0x1b783f(0x298)]()[_0x1b783f(0x29b)]=!![]:(this[_0x1b783f(0x1d1)](),this['updateBehavior']())),this[_0x1b783f(0x186)]();},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x1d1)]=function(){const _0x54af88=_0x4022db;this[_0x54af88(0x2c1)](),this['updateBlendMode'](),this['updateOpacity'](),this[_0x54af88(0x274)]();},Sprite_LightBase['prototype'][_0x4022db(0x287)]=function(){if(!this['needsRecreation']())return;this['cacheNewData'](),this['createBitmap']();},Sprite_LightBase[_0x4022db(0xd7)]['needsRecreation']=function(){return![];},Sprite_LightBase['prototype'][_0x4022db(0x142)]=function(){},Sprite_LightBase['prototype'][_0x4022db(0x349)]=function(){const _0x3e20dd=_0x4022db,_0x293c6a=this[_0x3e20dd(0x240)]();this['scale']['x']=0x1,this['scale']['y']=0x1,this[_0x3e20dd(0x1aa)]=Math['randomInt'](0xf4240),this[_0x3e20dd(0x25f)]=Math[_0x3e20dd(0x1a3)](0xf4240),this[_0x3e20dd(0x38c)]=0x0;if(_0x293c6a[_0x3e20dd(0x18a)]!=='')'mrQXG'!==_0x3e20dd(0xc4)?this['bitmap']=ImageManager[_0x3e20dd(0x275)](_0x293c6a[_0x3e20dd(0x18a)]):this[_0x3e20dd(0x24f)]()[_0x3e20dd(0x238)]=!![];else{if(this[_0x3e20dd(0x1cb)]())this['bitmap']=this[_0x3e20dd(0x3cb)](_0x293c6a);else{if(_0x3e20dd(0x14d)===_0x3e20dd(0x14d))this[_0x3e20dd(0x392)]=new Bitmap(0x1,0x1);else{const _0x5c94d8=this['getRadius'](_0x4fb4f0),_0x3ca0db=_0xb9c14[_0x3e20dd(0x40e)](_0x4fc093[_0x3e20dd(0x2d5)]),_0x2324fb=_0x305e6a[_0x3e20dd(0x2e0)],_0x527991=_0x46ba6c['ceil'](_0x5c94d8)*0x2,_0x5eae42=new _0x477289(_0x527991,_0x527991);return _0x5eae42[_0x3e20dd(0x122)](_0x5c94d8,_0x3ca0db,_0x2324fb),_0x5eae42;}}}},Sprite_LightBase[_0x4022db(0xd7)]['generateLight']=function(_0xc5a072){return new Bitmap(0x1,0x1);},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x2c1)]=function(){this['angle']=0x0;},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0xc7)]=function(){const _0x455e11=_0x4022db;this[_0x455e11(0x168)]=this[_0x455e11(0x240)]()[_0x455e11(0x168)]||0x0;},Sprite_LightBase['prototype'][_0x4022db(0x2c6)]=function(){const _0x23a589=_0x4022db;this[_0x23a589(0x361)]=this[_0x23a589(0x240)]()[_0x23a589(0x361)]||0x0;},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x274)]=function(){const _0x6acdc2=_0x4022db,_0x371236=this['_originSprite'],_0x4c81f3=this['lightData']();this['x']=_0x371236['x'],this['x']+=_0x4c81f3[_0x6acdc2(0x3b6)],this['y']=_0x371236['y']-Math[_0x6acdc2(0x3ca)](_0x371236['height']/0x2),this['y']+=_0x4c81f3['offsetY'],SceneManager['isSceneBattle']()&&(this['x']+=(Graphics[_0x6acdc2(0x2e4)]-Graphics[_0x6acdc2(0x2d1)])/0x2,this['y']+=(Graphics[_0x6acdc2(0x3a1)]-Graphics['boxHeight'])/0x2);},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x223)]=function(){const _0x3e1b5c=_0x4022db;this[_0x3e1b5c(0x1cd)](),this['updateFlicker'](),this['updateFlash'](),this[_0x3e1b5c(0x173)](),this[_0x3e1b5c(0x120)](),this[_0x3e1b5c(0x26d)](),this['updatePulse']();},Sprite_LightBase[_0x4022db(0xd7)]['updateBlink']=function(){const _0x41dc8f=_0x4022db;if(!ConfigManager[_0x41dc8f(0x26e)])return;const _0x244bfc=this[_0x41dc8f(0x32c)]();if(Math[_0x41dc8f(0x182)]()<(_0x244bfc[_0x41dc8f(0xde)]||0x0)){const _0x52ba71=this[_0x41dc8f(0x361)]*(_0x244bfc[_0x41dc8f(0xfb)]||0x0);this[_0x41dc8f(0x361)]=Math[_0x41dc8f(0x3ca)](this[_0x41dc8f(0x361)]+_0x52ba71)[_0x41dc8f(0x17c)](0x0,0xff);}},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x2bf)]=function(){const _0x250ab7=_0x4022db;if(!ConfigManager[_0x250ab7(0x26e)])return;const _0x30f9df=this[_0x250ab7(0x32c)]();if(Math['random']()<(_0x30f9df[_0x250ab7(0x2cf)]||0x0)){if('IeOXB'!==_0x250ab7(0x41d)){const _0x3ea38d=this[_0x250ab7(0x361)]*(Math['random']()*(_0x30f9df[_0x250ab7(0x3ae)]||0x0));this[_0x250ab7(0x361)]=Math['round'](this[_0x250ab7(0x361)]+_0x3ea38d)['clamp'](0x0,0xff);}else this['conicalLight']()[_0x250ab7(0x361)]=_0x4961c2(_0x418f89['$1'])[_0x250ab7(0x17c)](0x0,0xff);}},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x406)]=function(){const _0x111e98=_0x4022db;if(!ConfigManager[_0x111e98(0x26e)])return;const _0x1e9f63=this[_0x111e98(0x32c)]();if(Math[_0x111e98(0x182)]()<(_0x1e9f63[_0x111e98(0x2d4)]||0x0)){if(_0x111e98(0x256)!==_0x111e98(0x256)){if(this[_0x111e98(0x204)]===_0x3e2b18)this[_0x111e98(0x3e5)]();return this['_conicalLightWalkOffsets'];}else{const _0x5eb765=0xff*(_0x1e9f63[_0x111e98(0x139)]||0x0);this[_0x111e98(0x361)]=Math['round'](this['opacity']+_0x5eb765)[_0x111e98(0x17c)](0x0,0xff);}}},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x173)]=function(){const _0x17a189=_0x4022db;if(!ConfigManager[_0x17a189(0x26e)])return;const _0x580831=this[_0x17a189(0x32c)]();if(Math[_0x17a189(0x182)]()<(_0x580831['flareRate']||0x0)){if(_0x17a189(0x165)!=='ublzy')return this[_0x17a189(0x423)]?this[_0x17a189(0x423)][_0x17a189(0x355)]:{};else{const _0x1700d9=0xff*(Math[_0x17a189(0x182)]()*(_0x580831[_0x17a189(0x1e6)]||0x0));this[_0x17a189(0x361)]=Math[_0x17a189(0x3ca)](this[_0x17a189(0x361)]+_0x1700d9)[_0x17a189(0x17c)](0x0,0xff);}}},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x120)]=function(){const _0x38381b=_0x4022db;if(!ConfigManager['pulsingLights'])return;const _0x2e60de=this[_0x38381b(0x32c)]();if(_0x2e60de['glowRate']>0x0){const _0x41f667=_0x2e60de[_0x38381b(0x324)]/0x2,_0xcb84bb=0x1-_0x41f667,_0x557984=_0x2e60de[_0x38381b(0x214)],_0x497532=_0x2e60de[_0x38381b(0x36e)]?this[_0x38381b(0x1aa)]:0x0,_0x577764=Graphics['frameCount']+_0x497532;this[_0x38381b(0x361)]*=_0xcb84bb+Math[_0x38381b(0x3df)](_0x577764*_0x557984)*_0x41f667;}},Sprite_LightBase[_0x4022db(0xd7)]['updatePattern']=function(){const _0x4fc6b6=_0x4022db;if(!ConfigManager['blinkingLights'])return;const _0x3a7f72=this[_0x4fc6b6(0x32c)]();if(_0x3a7f72[_0x4fc6b6(0x25e)]==='')return;if(_0x3a7f72[_0x4fc6b6(0x25e)]===undefined)return;const _0x1832e8=(_0x3a7f72[_0x4fc6b6(0x25e)][_0x4fc6b6(0x2df)](this[_0x4fc6b6(0x38c)])-0x61)[_0x4fc6b6(0x17c)](0x0,0x19),_0x5d5eb6=_0x1832e8/0x19;this[_0x4fc6b6(0x361)]=Math[_0x4fc6b6(0x3ca)](0xff*_0x5d5eb6)[_0x4fc6b6(0x17c)](0x0,0xff);if(Graphics[_0x4fc6b6(0x334)]%(_0x3a7f72[_0x4fc6b6(0x3bc)]||0x1)===0x0){if('jVTqC'!=='jVTqC')this['actor']()?this[_0x4fc6b6(0x20b)]()[_0x4fc6b6(0xc6)](_0x4b7f82):_0x54dd32[_0x4fc6b6(0xd7)][_0x4fc6b6(0xc6)][_0x4fc6b6(0x2bc)](this,_0x3f39a4);else{this[_0x4fc6b6(0x38c)]++;if(this[_0x4fc6b6(0x38c)]>=_0x3a7f72[_0x4fc6b6(0x25e)]['length'])this[_0x4fc6b6(0x38c)]=0x0;}}},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x38e)]=function(){const _0xa65d80=_0x4022db;if(!ConfigManager[_0xa65d80(0x16a)])return;const _0x229140=this[_0xa65d80(0x32c)]();if(_0x229140['pulseRate']>0x0){const _0x47e6da=_0x229140[_0xa65d80(0x23b)]/0x2,_0x216421=0x1-_0x47e6da,_0x3817c4=_0x229140[_0xa65d80(0x1a0)],_0x4d9ca4=_0x229140['pulseRng']?this[_0xa65d80(0x25f)]:0x0,_0x1513a2=Graphics[_0xa65d80(0x334)]+_0x4d9ca4,_0x143104=_0x216421+Math[_0xa65d80(0x3df)](_0x1513a2*_0x3817c4)*_0x47e6da;this['scale']['x']=this[_0xa65d80(0x3dd)]['y']=_0x143104;}else _0xa65d80(0x229)===_0xa65d80(0x196)?this[_0xa65d80(0x24f)]()[_0xa65d80(0x181)]=!![]:this[_0xa65d80(0x3dd)]['x']=this[_0xa65d80(0x3dd)]['y']=0x1;},Sprite_LightBase[_0x4022db(0xd7)]['updateVisibility']=function(){this['visible']=this['isLightVisible']();},Sprite_LightBase[_0x4022db(0xd7)][_0x4022db(0x3c1)]=function(){const _0x401189=_0x4022db;if(!this['_source'])return![];if(this[_0x401189(0x423)]['characterName']&&this['_source'][_0x401189(0x41f)]()!==''){if(_0x401189(0x1e2)!==_0x401189(0x270)){if(this['_originSprite']&&!this['_originSprite']['visible'])return![];}else this[_0x401189(0x206)]();}if(this[_0x401189(0x423)][_0x401189(0x320)]===Game_Follower){if('Vfzgi'!=='qZRuG'){if(!this[_0x401189(0x423)][_0x401189(0x20b)]())return![];if(!this[_0x401189(0x423)]['isVisible']())return![];}else this[_0x401189(0x309)](),this['updateOverlayRender']();}if(this['_source'][_0x401189(0x1e9)])return![];if(this[_0x401189(0x423)]===$gamePlayer){if(_0x401189(0x339)===_0x401189(0x339)){if($gamePlayer[_0x401189(0x26f)]())return![];}else this['_battleField'][_0x401189(0x3a9)](this[_0x401189(0x13c)]),this[_0x401189(0x13c)]['x']=this[_0x401189(0x17e)]['width']/0x2,this[_0x401189(0x13c)]['y']=this[_0x401189(0x17e)]['height']/0x2;}if(this['_source']['isHidden']){if(this[_0x401189(0x423)][_0x401189(0x26c)]())return![];if(this[_0x401189(0x423)][_0x401189(0x2f5)]())return![];}if(!this[_0x401189(0x240)]())return![];return this['isEnabled']();};function Sprite_RadialLight(){this['initialize'](...arguments);}function _0x48b2(_0x12e936,_0x17b6f2){const _0x44ab74=_0x44ab();return _0x48b2=function(_0x48b266,_0x42fbfd){_0x48b266=_0x48b266-0xc0;let _0x30d12b=_0x44ab74[_0x48b266];return _0x30d12b;},_0x48b2(_0x12e936,_0x17b6f2);}Sprite_RadialLight[_0x4022db(0xd7)]=Object[_0x4022db(0x13a)](Sprite_LightBase['prototype']),Sprite_RadialLight['prototype'][_0x4022db(0x320)]=Sprite_RadialLight,Sprite_RadialLight['prototype']['initialize']=function(_0x46f3d9,_0x1e35c4){const _0x5f064a=_0x4022db;Sprite_LightBase['prototype'][_0x5f064a(0x131)][_0x5f064a(0x2bc)](this,_0x46f3d9,_0x1e35c4);},Sprite_RadialLight[_0x4022db(0xd7)][_0x4022db(0x240)]=function(){return this['_source']?this['_source']['radialLight']():{};},Sprite_RadialLight[_0x4022db(0xd7)][_0x4022db(0x32c)]=function(){const _0x578177=_0x4022db;return this['_source']?this[_0x578177(0x423)][_0x578177(0x298)]():{};},Sprite_RadialLight[_0x4022db(0xd7)][_0x4022db(0x3f0)]=function(_0xf891f0){const _0x52c152=_0x4022db;let _0x11704f=_0xf891f0[_0x52c152(0x3fd)];if(_0xf891f0['autoRadius']){let _0x102726=this[_0x52c152(0x307)];if(this[_0x52c152(0x307)][_0x52c152(0x343)])_0x102726=_0x102726;let _0x586242=Math[_0x52c152(0x106)](_0x102726['width'],0x2)+Math[_0x52c152(0x106)](_0x102726['height'],0x2);_0x586242=Math[_0x52c152(0x106)](_0x586242,0.5),_0x586242/=0x2,_0x11704f=Math[_0x52c152(0x171)](_0x586242,_0x11704f);}return _0x11704f;},Sprite_RadialLight[_0x4022db(0xd7)][_0x4022db(0x3d5)]=function(){const _0x5e47c7=_0x4022db,_0x4f4e5d=this['lightData']();if(this[_0x5e47c7(0x2ad)]!==_0x4f4e5d['enabled'])return!![];if(this[_0x5e47c7(0x265)]!==_0x4f4e5d[_0x5e47c7(0x18a)])return!![];if(this[_0x5e47c7(0x135)]!==this['getRadius'](_0x4f4e5d))return!![];if(this[_0x5e47c7(0x308)]!==_0x4f4e5d[_0x5e47c7(0x2d5)])return!![];if(this[_0x5e47c7(0x2de)]!==_0x4f4e5d[_0x5e47c7(0x2e0)])return!![];return Sprite_LightBase[_0x5e47c7(0xd7)][_0x5e47c7(0x3d5)]['call'](this);},Sprite_RadialLight[_0x4022db(0xd7)][_0x4022db(0x142)]=function(){const _0xf817c6=_0x4022db,_0x318f70=this[_0xf817c6(0x240)]();this['_lastEnabled']=_0x318f70['enabled'],this['_lastFilename']=_0x318f70[_0xf817c6(0x18a)],this[_0xf817c6(0x135)]=this[_0xf817c6(0x3f0)](_0x318f70),this[_0xf817c6(0x308)]=_0x318f70[_0xf817c6(0x2d5)],this[_0xf817c6(0x2de)]=_0x318f70[_0xf817c6(0x2e0)];},Sprite_RadialLight[_0x4022db(0xd7)][_0x4022db(0x3cb)]=function(_0x58dab3){const _0x457b7b=_0x4022db,_0x579d90=this[_0x457b7b(0x3f0)](_0x58dab3),_0x51d642=ColorManager['presetColorParser'](_0x58dab3[_0x457b7b(0x2d5)]),_0x2ec501=_0x58dab3['intensity'],_0x48f602=Math[_0x457b7b(0x3e8)](_0x579d90)*0x2,_0x1b9297=new Bitmap(_0x48f602,_0x48f602);return _0x1b9297[_0x457b7b(0x122)](_0x579d90,_0x51d642,_0x2ec501),_0x1b9297;},Sprite_RadialLight[_0x4022db(0xd7)][_0x4022db(0x2c1)]=function(){const _0x235c46=_0x4022db;this[_0x235c46(0x2ed)]=-this[_0x235c46(0x240)]()[_0x235c46(0x2ed)]||0x0,this[_0x235c46(0x240)]()[_0x235c46(0x2ed)]-=this[_0x235c46(0x240)]()[_0x235c46(0x3d0)]||0x0;};function Sprite_ConicalLight(){const _0x811259=_0x4022db;this[_0x811259(0x131)](...arguments);}function _0x44ab(){const _0x12c58b=['_lightContainer','fluorescent','EnemyRadialBehavior','behaviorData','offsetY','startTint','map','3464154tpjkpf','Options','jidvQ','zldYt','frameCount','VsJumpOffset','BlinkingLights','2819495jojynC','#7d4900','CaRBG','candle1','BBiNu','Conical','tileHeight','isPosing','RadialBehaviorFlareRate','RadialBehaviorBlinkRate','ARRAYJSON','pRdoH','_mainSprite','InitialTime','loKFs','mamamamamama','ConicalLightAngleSway','ConicalOffsetChangeAirship','createBitmap','AnlsM','code','version','OhDxj','BJsQl','add','yellow','strobe2','#92278f','expire','_baseTexture','behavior','isJumping','IWrvI','updateOverlayRender','conicalLightDashOffsets','Radial','AddBlinkingLights','shiftLightingOverlayColor','BoardedSettings','isPressed','krQLK','createProxySprite','opacity','NORMAL','Spriteset_Battle_createBattleField','makeData','ConicalBehaviorFlareRate','BUran','dark\x20brown','clone','tileset','status','#5674b9','page','addLightingEffectsBlinkingLightsCommand','glowRng','Boarded','applyDefaultLightingEffectsVehicleData','ALLOW_ANTI_LIGHT_MASK','ActorID','Game_Screen_initialize','ConicalLightSrcRadius','#888888','pop','removeChild','VsFBy','setupPageSettings','RfNas','DfcJz','_colorSprite','parseDirectionText','sepia','ConicalLightHandOffset','dark\x20magenta','MULTIPLY','isSceneBattle','pink','getFollowerConicalLightBehavior','TotalSpawns','SpawnLights','PulsingLights','toString','addLightingEffectsOptionCommands','candle3','texture','_patternIndex','gray','updatePulse','FvbFA','useHandOffset','regionId','bitmap','right','adjustPositionByTarget','length','boat','#ff0000','RadialBehaviorGlowSpeed','RadialLightOffset','ConicalBehaviorPulseRng','createDefaultLightingEffectsVehicleData','PlayerRadialBehavior','uuOOs','isBusy','cyan','createUpperLayer','height','CClpb','exit','updateLightingEffectsColor','HvZbB','#00ff00','eventId','hexToRgba','addChild','targetOpacity','OverlayChangeToPreset','setupLightingEffectsCommentTags','NtLJJ','flickerModifier','cgCxG','kdgze','_realX','_proxySprite','miniRadius','clearPageSettings','Sprite_Character_initialize','offsetX','createDestination','RadialBehaviorBlinkMod','RadialLightCatchAll','OSzmD','none','patternDelay','788YtXguI','targetColor','fileAngleOffset','LIGHTING_EFFECTS_SMART_AUTO_OPACITY','isLightVisible','isBoat','dawn','isLoopVertical','RegExp','setRadialLightBehavior','ConicalLightSwaySpeed','#7b0046','format','round','generateLight','antiLightMaskSoftTerrainTags','_lensFlareSprite','AutoLight','getVehicleLightingData','rotateSpeed','Lhihv','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','anchor','ConicalLightCentralOffset','needsRecreation','ConicalBehaviorPatternUpdateDelay','dark\x20yellow','vDwwU','jFioS','_noDarknessOverlay','isAntiLightingOverlay','_lastInputDir','scale','light\x20gray','cos','fillRect','enemy','halogen','autoRadius','incandescent','initLightingEffects','#%1','5397912dLHDlc','ceil','HtgIt','lower\x20left','usfOr','list','Battle','isUsingMapCoordinates','substring','getRadius','UnboardedSettings','day','LightSpawnNewFollowerLockedLight','displayY','#f49ac1','restore','VsDashOffset','screen','abs','patternName','XEptO','drawTestDummy','radius','mnUHN','TVZWt','CalcSmartOpacity','leader','lightingOverlayOpacity','ConicalBehaviorFlashMod','updateCharacterAngle','XMpJj','updateFlash','IrGtP','Spriteset_Base_createLowerLayer','EcLhR','_lightSpawnsFunc','_hardAlphaMask','ConicalLightRadius','_followerRadialLightBehavior','presetColorParser','grey','getFollowerConicalLightSettings','nlBVA','#ffff00','YMqAF','renderer','ActorRadialBehavior','initMembers','FollowerRadial','crMih','event','CoordinatesX','_testDummyR','FollowerConical','suaES','Cypxx','characterName','rRYUw','save','_autoLightSprite','_source','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','Color','ConicalLightForceDir','#005952','NmUUI','TMbco','setConicalLightWalkOffsets','updateBlendMode','ybrUg','abcdefghijklmnopqrstuvwxyzyxwvutsrqponmlkjihgfedcba','blendModeParser','regionAutoLightOpacity','addLightingEffects','fillStyle','ConicalLightCatchAll','HPDGC','oUYxo','type','dusk','reduce','_radialLight','setFollowerConicalLightSettings','parameters','prototype','description','#ace4fa','setRadialLightSettings','trim','Window_Options_addGeneralOptions','light\x20red','blinkRate','_radialLightBehavior','ConicalBehaviorGlowNoRng','rszbM','Enable','opacityDuration','moveTo','initLightingEffectsSettings','dark\x20gray','createLightSpawnFunction','setVehicleLightingConicalOffset','processLightingEffectsAutoTint','flicker','applyData','dark\x20orange','CZVqt','ENixW','createLightingEffects','adjustPositionByMap','#ff00ff','checkRadialLightBehaviorStringTags','down','toLowerCase','#9e0039','updateHandPosition','RadialLightChangeBoatSettings','updateTestDummies','_conicalLight','setupBattleLightingEffectsSettings','blinkModifier','ConicalLightChangeEventSettings','BmZqB','note','Spriteset_Map_hideCharacters','checkLightingEffectsStringTags','members','addGeneralOptions','_swayRng','kCPlT','pCjRy','pow','#f69679','makeDeepCopy','mmmaaammmaaammmabcdefaaaammmmabcdefmmmaaaa','EqXvD','upper\x20left','RenderTexture','isLoopHorizontal','candle2','createNewLightSpawn','light\x20grey','checkRadialLightBasicStringTags','EventConicalBehavior','_lastMiniRadius','updateLensFlareSprite','processLightingOverlayColor','#fdc689','Fjczu','createOverlayTexture','PTlio','RadialBehaviorGlowRng','canvasToMapY','ConicalBehaviorPulseNoRng','fileAnchorY','isDirectionFixed','updateCursorAngle','updateGlow','flicker3','drawRadialLight','#444444','RadialBehaviorFlickerMod','angleSway','EnemyAutoRadius','EVAL','ZMdGA','black','CoordinatesY','noLightingOverlay','isUsingScreenCoordinates','VisuMZ_1_EventsMoveCore','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','lightSpawns','light\x20brown','initialize','checkConicalLightBasicStringTags','createAntiLightMaskBitmap','ConicalLightSwayRng','_lastRadius','ConicalBehaviorPatternPreset','lower\x20right','ARRAYSTR','flashModifier','create','checkLightingEffectsAutoTintPresets','_lightingEffects','readFlag','addCommand','LightingEffects','_antiLightMasks','LJaip','cacheNewData','#ffffff','GOXon','getFollowerRadialLightSettings','lightContainer','EventConical','setBattler','purple','GtCFb','pcyOn','applyInverse','Xbpgq','strong\x20pulse','UnboardedOffset','EnemyIndex','Spriteset_Map_createDestination','_direction','EventRadialBehavior','VisuMZ_1_BattleCore','canvasToMapX','hexToArray','updateLightingEffectsLightSpawns','allowCharacterAngleUpdate','createLowerLayer','RadialBehaviorFlashMod','sWwwn','flicker2','getFollowerRadialLightBehavior','VBRLX','mrPOW','addLightingEffectsPulsingLightsCommand','setFollowerRadialLightBehavior','SoftTerrainTags','name','isFollowingPlayer','ublzy','dark\x20blue','jklmnopqrstuvwxyzyxwvutsrqponmlkj','blendMode','sunset','pulsingLights','HandOffset','ARRAYEVAL','EventID','oqLUD','UnboardedBehavior','isAirship','max','liGoV','updateFlare','createLensFlareSprite','createRadialGradient','arc','bQTBf','ytBIe','fast\x20strobe','rgba(','follower','clamp','filter','_battleField','_conicalLightJumpOffsets','29833050nxOXbG','swayRng','random','ONzch','Duration','_hardAntiLightMask','updateVisibility','sTBsk','ConicalBehaviorPulseSpeed','SCREEN','filename','lightingOverlayOpacityRate','PulsingLightsName','RadialBehaviorFlashRate','Game_Map_setup','NGBhh','SpriteMaskFilter','RadialBehaviorPulseNoRng','RadialLightOpacityFlat','LightSpawnExpireSpawnedLights','conicalLightOffsets','player','irgmz','hardAntiLightTerrainTags','Rxbns','ConicalBehaviorGlowSpeed','EmGAz','AdjustRect','isSceneMap','active','ConicalOffsetChangeActor','Cllux','pulseSpeed','OverlayChangeToCustomColor','JyzUc','randomInt','flareRate','jnlBM','candle','_testDummyG','antiLightMaskHardTerrainTags','EnemyRadial','_glowRng','_scene','pulse1','hideCharacters','ActorRadial','ConicalLightOffset','test','forceDirection','ConicalLightFilename','ADD','_followerConicalLight','originY','isSpriteVS8dir','SHAKE_BUFFER','context','ConicalLightChangeFollowerSettings','RadialLightChangePlayerSettings','_lastTouchInputY','mmmaaaabcdefgmmmmaaaammmaamm','ConicalLightChangeBoatSettings','RadialLightDiameter','IXSem','isFollowingEvent','turnTowardPoint','_followerConicalLightBehavior','hardTerrainTagIDs','RadialLightTurnOff','multiply','ActorAutoRadius','auSCs','isEventRunning','destroy','_lastInputTouch','isEnabled','dark\x20cyan','updateBlink','ExpirationTimer','shiftLightingOverlayOpacity','updateLightSpawn','updateMain','_lightSpawns','ConicalLightChangePlayerSettings','ConicalBehaviorPulseRate','ConfigManager_makeData','crOHc','settings','setup','hasAntiLightTiles','_spriteset','updateLastInputType','ZoxJW','dark','white','SMOOTH_MASKING','STR','updateAntiLightMask','IqcYx','lightingOverlayColor','setFollowerRadialLightSettings','#fff799','flareModifier','#000000','vGmrw','_erased','dMKrj','ConicalBehaviorFlareMod','70204auSnPc','oywww','RJLiX','pulse','KsEDI','LightingEffectsOptions','mmmmmaaaaammmmmaaaaaabcdefgabcdefg','destroyLightContainer','render','PlayerRadial','XCdds','cacheOpacity','Game_Screen_update','createAutoLightRegions','tzSSl','nmonqnmomnmomomno','FollowerConicalBehavior','wsOsE','RadialBehaviorPatternSequence','AddPulsingLights','terrainTag','RadialLightOpacityRate','PJlyF','STRUCT','_conicalLightWalkOffsets','Game_Map_update','initVehicleLightingEffectsSettings','YLNNR','WGLGC','_testDummyB','#0000ff','actor','fxLig','softRegionIDs','ltQRy','updateAutoLightAreas','Offset','setupConicalLight','createBattleField','checkConicalLightBehaviorStringTags','glowSpeed','Behavior','Spriteset_Base_createUpperLayer','dark\x20pink','HfMzL','#aaaaaa','1015490rlNhVV','8TfZdZi','conicalLightBehavior','arrayToHex','iuoJx','light\x20pink','setConicalLightBehavior','orange','ptKPX','updateBehavior','_realY','Kszne','ConicalLightTurnOff','rGvkK','QxnYx','geUnU','floor','xjMya','push','createTestDummies','colorDuration','_softAntiLightMask','ConicalLightOpacityRate','softTerrainTagIDs','_driving','underwater','light\x20cyan','match','ConicalBehaviorBlinkRate','Opacity','enabled','isDestinationValid','RadialBehaviorPatternUpdateDelay','pulseRate','BattleLightChangeEnemySettings','isShip','sHtkd','opacityPatternParser','lightData','magenta','YrHcZ','aknoH','pattern%1X','PlayerConical','filters','pulse2','vehicle','createLightContainer','NSQvv','PresetColors','getLastPluginCommandInterpreter','HardRegions','lemOP','conicalLight','lIuae','3975lTYwUU','softAntiLightTerrainTags','originX','AntiLight','checkConicalLightHandOffsetStringTags','AYEfv','removeChildFromLightContainer','BoardedBehavior','setConicalLightSettings','split','flicker1','GpyMV','dssMP','pattern','_pulseRng','setVehicleLightingData','isFollowingFollower','GZTDG','setupLightingEffectsSettings','findTargetSprite','_lastFilename','update','RadialLightRadius','TimeIncrement','light\x20yellow','mmamammmmammamamaaamammma','AutoRadius','isHidden','updatePattern','blinkingLights','isInVehicle','HMTis','ShakeBuffer','visible','abcdefghijklmnopqrrqponmlkjihgfedcba','updatePosition','loadPicture','sLFLq','ConicalLightChangeAirshipSettings','ConicalLightDiameter','addChildToLightContainer','opacity%1','FUNC','getSourceDirection','270nHvZko','_conicalLightBehavior','ConicalOffsetChangeEvent','BLEND_MODES','time','ship','normal','BlinkingLightsName','handOffsetData','smooth','checkProperties','aBuSQ','ConicalBehaviorGlowRng','ConfigManager_applyData','green','createAntiLightMask','RetrieveOpacityPattern','drawConicalLight','ConvertParams','light\x20orange','AutoTint','Unboarded','BoardedOffset','VisuMZ_2_WeatherEffects','RadialLightChangeEventSettings','%1%2%3%4','hardAntiLightRegionIDs','radialLightBehavior','Map','dark\x20red','pulseRng','dir%1','Game_Event_clearPageSettings','gDMAH','LightSpawnNewScreenLockedLight','OgToa','ConicalLightAngle','blt','RadialBehaviorFlickerRate','#005e20','tileWidth','antiLightMaskHardRegions','ConicalOffsetChangeBoat','slow\x20strobe','#f7941d','_baseSprite','setSource','dTQKB','_lastEnabled','#f06eaa','worldTransform','PlayerConicalBehavior','setupRadialLight','mmnnmmnnnmmnn','_vehicleLightingSettings','strobe1','oCLOA','_followerRadialLight','BattleLightChangeActorSettings','#827b00','nhatU','registerCommand','weatherEffectsLensFlare','call','mWSCz','mmnmmommommnonmmonqnmmo','updateFlicker','#bd8cbf','updateAngle','lightingEffects','RadialLightChangeShipSettings','ConicalLightFileAnchor','swaySpeed','updateOpacity','setConicalLightDashOffsets','red','blue','setFollowerConicalLightBehavior','displayX','createAutoLightBitmap','LightSpawnNewEventLockedLight','additive','flickerRate','slow\x20pulse','boxWidth','qJopI','iAqaQ','flashRate','color','return\x200','yrCpB','radialLight','followMouse','YjRZX','NCaJn','followers','setupLightingEffectsNotetags','_lastIntensity','charCodeAt','intensity','FollowerRadialBehavior','qmOTb','updateLightingEffectsOpacity','width','_lastTouchInputX','ConicalLightUseHandOffset','Scene_Options_maxCommands','conicalLightWalkOffsets','ztowY','Sprite_Battler_setBattler','Settings','ARRAYSTRUCT','angle','RadialLightGeneric','isLightingEnabled','JSON','beginPath','parse','hxNMm','ARRAYNUM','isDead','night','omvBb','torch','#2e3192','xvIZq','_lastInputTimer','XymIQ','addColorStop','#603913','RadialLightChangeAirshipSettings','campfire','followerIndex','createLightingEffectsLightSpawns','Ship','_lastAngle','setLightingOverlayOpacity','RadialBehaviorPulseSpeed','_originSprite','_lastColor','updateOverlayColor','_overlayColor','light\x20purple','includes','Game_Player_initMembers','RadialBehaviorGlowRate','CyoQE','brown','fileAnchorX','wOYMY','airship','_conicalLightDashOffsets','_softAlphaMask','#a3d39c','Game_BattlerBase_initMembers','softAntiLightRegionIDs','MnOXC','MAX_SAFE_INTEGER','hardRegionIDs','conicalLightJumpOffsets','setConicalLightJumpOffsets','setupLightingEffectsSpawns','left','constructor','ConicalBehaviorFlickerRate','join','#c69c6d','glowRate','YzliP','dark\x20green','createColorSprite','adjustPosition'];_0x44ab=function(){return _0x12c58b;};return _0x44ab();}Sprite_ConicalLight['prototype']=Object[_0x4022db(0x13a)](Sprite_LightBase[_0x4022db(0xd7)]),Sprite_ConicalLight[_0x4022db(0xd7)][_0x4022db(0x320)]=Sprite_ConicalLight,Sprite_ConicalLight['prototype'][_0x4022db(0x131)]=function(_0x3f99ee,_0x4b8ba1){const _0x251cc4=_0x4022db;Sprite_LightBase[_0x251cc4(0xd7)][_0x251cc4(0x131)]['call'](this,_0x3f99ee,_0x4b8ba1),this[_0x251cc4(0x174)](),this['_lastInputTimer']=0x4;},Sprite_ConicalLight['prototype'][_0x4022db(0x174)]=function(){const _0x5e7922=_0x4022db;if(!Imported[_0x5e7922(0x294)])return;return;this[_0x5e7922(0x3cd)]=new Sprite(),this[_0x5e7922(0x3cd)][_0x5e7922(0x392)]=ImageManager[_0x5e7922(0x2bb)](),this[_0x5e7922(0x3cd)]['blendMode']=0x1,this['_lensFlareSprite'][_0x5e7922(0x3dd)]['x']=0.6,this[_0x5e7922(0x3cd)][_0x5e7922(0x3dd)]['y']=0.6,this[_0x5e7922(0x3cd)]['anchor']['x']=0.5,this[_0x5e7922(0x3cd)]['anchor']['y']=0.5,this[_0x5e7922(0x3cd)][_0x5e7922(0x272)]=![],this[_0x5e7922(0x3a9)](this[_0x5e7922(0x3cd)]);},Sprite_ConicalLight[_0x4022db(0xd7)]['lightData']=function(){const _0x42cb1c=_0x4022db;return this['_source']?this[_0x42cb1c(0x423)]['conicalLight']():{};},Sprite_ConicalLight[_0x4022db(0xd7)][_0x4022db(0x32c)]=function(){const _0x5d3833=_0x4022db;return this[_0x5d3833(0x423)]?this['_source']['conicalLightBehavior']():{};},Sprite_ConicalLight[_0x4022db(0xd7)][_0x4022db(0x285)]=function(){const _0x158a9e=_0x4022db;return this['_source']?this['_source'][_0x158a9e(0x194)]():{};},Sprite_ConicalLight[_0x4022db(0xd7)][_0x4022db(0x3d5)]=function(){const _0x41e5bb=_0x4022db,_0x8fe4b=this[_0x41e5bb(0x240)]();if(this[_0x41e5bb(0x2ad)]!==_0x8fe4b[_0x41e5bb(0x238)])return!![];if(this['_lastFilename']!==_0x8fe4b[_0x41e5bb(0x18a)])return!![];if(this[_0x41e5bb(0x135)]!==_0x8fe4b[_0x41e5bb(0x3fd)])return!![];if(this[_0x41e5bb(0x308)]!==_0x8fe4b[_0x41e5bb(0x2d5)])return!![];if(this[_0x41e5bb(0x2de)]!==_0x8fe4b[_0x41e5bb(0x2e0)])return!![];if(this['_lastAngle']!==_0x8fe4b[_0x41e5bb(0x2ed)])return!![];if(this[_0x41e5bb(0x113)]!==_0x8fe4b[_0x41e5bb(0x3b3)])return!![];return Sprite_LightBase['prototype']['needsRecreation'][_0x41e5bb(0x2bc)](this);},Sprite_ConicalLight[_0x4022db(0xd7)][_0x4022db(0x142)]=function(){const _0x584841=_0x4022db,_0x589780=this['lightData']();this[_0x584841(0x2ad)]=_0x589780[_0x584841(0x238)],this['_lastFilename']=_0x589780[_0x584841(0x18a)],this[_0x584841(0x135)]=_0x589780[_0x584841(0x3fd)],this[_0x584841(0x308)]=_0x589780[_0x584841(0x2d5)],this['_lastIntensity']=_0x589780[_0x584841(0x2e0)],this[_0x584841(0x304)]=_0x589780[_0x584841(0x2ed)],this[_0x584841(0x113)]=_0x589780[_0x584841(0x3b3)];},Sprite_ConicalLight['prototype'][_0x4022db(0x349)]=function(){const _0x10790f=_0x4022db;Sprite_LightBase[_0x10790f(0xd7)]['createBitmap'][_0x10790f(0x2bc)](this),this[_0x10790f(0x2e5)]=TouchInput['x'],this[_0x10790f(0x1bb)]=TouchInput['y'],this['_lastInputTouch']=![],this[_0x10790f(0x3dc)]=!![],this[_0x10790f(0x2fb)]=0x4,this[_0x10790f(0x103)]=Math[_0x10790f(0x1a3)](0xf4240);const _0xdd7d65=this[_0x10790f(0x240)]();_0xdd7d65[_0x10790f(0x18a)]!==''?_0x10790f(0x208)===_0x10790f(0x225)?this['radialLightBehavior']()[_0x10790f(0x3ae)]=_0x4bcb10(_0x5cd8cc['$1'])*0.01:(this['anchor']['x']=_0xdd7d65[_0x10790f(0x311)],this[_0x10790f(0x3d3)]['y']=_0xdd7d65[_0x10790f(0x11d)]):(this[_0x10790f(0x3d3)]['x']=0.5,this[_0x10790f(0x3d3)]['y']=0.5);},Sprite_ConicalLight['prototype']['generateLight']=function(_0x28a6e7){const _0x538765=_0x4022db,_0x2ab560=_0x28a6e7['radius'],_0x5b1989=ColorManager[_0x538765(0x40e)](_0x28a6e7[_0x538765(0x2d5)]),_0x376b10=_0x28a6e7[_0x538765(0x2e0)],_0x4c41d0=_0x28a6e7['angle'],_0x3a7866=_0x2ab560*0x2,_0x513bfa=0x1,_0x394758=0x0,_0x2d224c=new Bitmap(_0x3a7866,_0x3a7866);_0x2d224c[_0x538765(0x28e)](_0x2ab560,_0x4c41d0,_0x5b1989,_0x376b10,_0x513bfa,_0x394758);const _0x5f2cfb=_0x28a6e7[_0x538765(0x3b3)],_0x5efd36=_0x5f2cfb*0x2,_0x38d1bb=new Bitmap(_0x5efd36,_0x5efd36);_0x38d1bb['drawRadialLight'](_0x5f2cfb,_0x5b1989,_0x376b10);const _0x389de3=Math[_0x538765(0x22a)](_0x3a7866/0x2)-_0x5f2cfb;return _0x2d224c[_0x538765(0x2a2)](_0x38d1bb,0x0,0x0,_0x5efd36,_0x5efd36,_0x389de3,_0x389de3,_0x5efd36,_0x5efd36),_0x2d224c;},Sprite_ConicalLight[_0x4022db(0xd7)][_0x4022db(0x27c)]=function(){const _0x50eb14=_0x4022db;if(this[_0x50eb14(0x423)]['isPosing']&&this[_0x50eb14(0x423)][_0x50eb14(0x33e)]())return 0x2;const _0x5da901=this[_0x50eb14(0x240)]();return _0x5da901['forceDirection']?_0x5da901[_0x50eb14(0x1b1)]:this['_source'][_0x50eb14(0x152)];},Sprite_ConicalLight['prototype'][_0x4022db(0x2c1)]=function(){const _0x379200=_0x4022db;this[_0x379200(0x1db)]();if(this[_0x379200(0x3dc)])this[_0x379200(0x404)]();else{if(this[_0x379200(0x1ca)]){if('lSQvt'==='lSQvt')this[_0x379200(0x11f)]();else{const _0x54083f=new _0x3632b8();_0x54083f['bitmap']=new _0x402a36(0x1f4,0x1f4),_0x54083f[_0x379200(0x392)][_0x379200(0x3fc)](0xfa,_0x379200(0x20a)),this['lightContainer']()[_0x379200(0x3a9)](_0x54083f),_0x54083f['anchor']['x']=_0x54083f[_0x379200(0x3d3)]['y']=0.5,_0x54083f['x']=_0x3d68da[_0x379200(0x2e4)]*0x3/0x5,_0x54083f['y']=_0x57abb5[_0x379200(0x3a1)]*0x2/0x3,_0x54083f[_0x379200(0x168)]=_0x3ee014['BLEND_MODES'][_0x379200(0x1b3)],this[_0x379200(0x209)]=_0x54083f;}}else{if(_0x379200(0x202)===_0x379200(0x202))this[_0x379200(0x2ed)]=0x0;else{const _0xafa079=_0x9d5bb2['regionId'](_0x1ccd68,_0x599fb9),_0x1fd6ac=this['regionAutoLightOpacity'](_0xafa079);if(_0x1fd6ac>0x0){const _0x50c6d3=_0x562f13['ceil'](0xff*_0x1fd6ac/0x64);let _0x131080=_0x5c576c[_0x379200(0x21d)]([_0x50c6d3,_0x50c6d3,_0x50c6d3]);_0x2f30f9[_0x379200(0x3e0)](_0x1e1e6f,_0x4a6f5c,0x1,0x1,_0x131080);}}}}this[_0x379200(0x114)]();},Sprite_ConicalLight[_0x4022db(0xd7)]['updateLastInputType']=function(){const _0x2053e2=_0x4022db;if(this['allowCharacterAngleUpdate']()){if('Xfeml'==='DkYvq')this['actor']()[_0x2053e2(0x31d)](_0x4b424a);else{if($gameTemp[_0x2053e2(0x239)]()||['up',_0x2053e2(0xf3),_0x2053e2(0x31f),_0x2053e2(0x393)]['some'](_0x5886ef=>Input[_0x2053e2(0x35e)](_0x5886ef)))this[_0x2053e2(0x1ca)]=![],this[_0x2053e2(0x3dc)]=!![],this['_lastInputTimer']=0x4;else{if(this['lightData']()[_0x2053e2(0x2d9)]&&(this['_lastTouchInputX']!==TouchInput['x']||this[_0x2053e2(0x1bb)]!==TouchInput['y'])){if(this[_0x2053e2(0x2fb)]--)return;this[_0x2053e2(0x1ca)]=!![],this[_0x2053e2(0x3dc)]=![];}}}}else this[_0x2053e2(0x423)]!==$gamePlayer&&this[_0x2053e2(0x423)]!==$gamePlayer[_0x2053e2(0x248)]()&&(_0x2053e2(0x207)===_0x2053e2(0x207)?(this[_0x2053e2(0x1ca)]=this['lightData']()[_0x2053e2(0x2d9)],this[_0x2053e2(0x3dc)]=!this[_0x2053e2(0x240)]()[_0x2053e2(0x2d9)]):_0x214236[_0x2053e2(0xd7)][_0x2053e2(0xc6)][_0x2053e2(0x2bc)](this,_0x1318a6));},Sprite_ConicalLight['prototype'][_0x4022db(0x158)]=function(){const _0x4db9b6=_0x4022db;if($gameScreen[_0x4db9b6(0x1e3)]()==='#ffffff')return![];if($gameScreen[_0x4db9b6(0x402)]()<=0x0)return![];return this[_0x4db9b6(0x423)]===$gamePlayer||this[_0x4db9b6(0x423)]===$gamePlayer['vehicle']();},Sprite_ConicalLight[_0x4022db(0xd7)]['updateCursorAngle']=function(){const _0x258e1e=_0x4022db;if(this[_0x258e1e(0x423)]===$gamePlayer||this['_source']===$gamePlayer[_0x258e1e(0x248)]()){if(_0x258e1e(0xd0)===_0x258e1e(0x19f))return![];else{if($gameMap[_0x258e1e(0x1c8)]()||$gameMessage[_0x258e1e(0x39e)]())return;}}this[_0x258e1e(0x2e5)]=TouchInput['x'],this[_0x258e1e(0x1bb)]=TouchInput['y'];const _0x4c3bb8=new Point(TouchInput['x'],TouchInput['y']),_0x192702=this[_0x258e1e(0x307)][_0x258e1e(0x2af)][_0x258e1e(0x14c)](_0x4c3bb8),_0x2393f3=this[_0x258e1e(0x240)]();let _0x5f1a11=Math['atan2'](_0x192702['y'],_0x192702['x'])*0xb4/Math['PI'];if(_0x2393f3[_0x258e1e(0x18a)]==='')_0x5f1a11-=_0x2393f3[_0x258e1e(0x2ed)]/0x2;else{if(_0x258e1e(0x2e9)!==_0x258e1e(0x1e8))_0x5f1a11-=_0x2393f3['fileAngleOffset'];else{if(this[_0x258e1e(0x204)]===_0x5512e0)this[_0x258e1e(0x3e5)]();this[_0x258e1e(0x204)]=_0x5da0b8[_0x258e1e(0x108)](_0x5e11d8);}}this[_0x258e1e(0x2ed)]=_0x5f1a11;if(!this[_0x258e1e(0x423)][_0x258e1e(0x11e)]()){if(this[_0x258e1e(0x423)]===$gamePlayer&&$gamePlayer[_0x258e1e(0x26f)]())return;if($gameScreen[_0x258e1e(0x1e3)]()==='#ffffff')return;if($gameScreen[_0x258e1e(0x402)]()<=0x0)return;let _0x161a5f=this[_0x258e1e(0x423)];if(this['_source']===$gamePlayer[_0x258e1e(0x248)]())_0x161a5f=$gamePlayer;const _0x1ff760=$gameMap[_0x258e1e(0x155)](TouchInput['x']),_0x9b0d3=$gameMap[_0x258e1e(0x11b)](TouchInput['y']);_0x161a5f[_0x258e1e(0x1c1)](_0x1ff760,_0x9b0d3);}},Sprite_ConicalLight['prototype'][_0x4022db(0x404)]=function(){const _0x364999=_0x4022db,_0x2b2b0f=this[_0x364999(0x240)]();let _0x3bc9a5=0x0;if(_0x2b2b0f['filename']===''){if(_0x364999(0xfd)===_0x364999(0x177)){if(_0x4aa9be[_0x364999(0x26f)]())return![];}else _0x3bc9a5-=_0x2b2b0f[_0x364999(0x2ed)]/0x2;}else _0x3bc9a5-=_0x2b2b0f[_0x364999(0x3bf)]||0x0;const _0x1ccfce=this['getSourceDirection']();_0x3bc9a5+=[0x0,0x87,0x5a,0x2d,0xb4,0x0,0x0,0xe1,0x10e,0x13b][_0x1ccfce];if(_0x2b2b0f['angleSway']){const _0x2eb6b6=_0x2b2b0f[_0x364999(0x181)]?this[_0x364999(0x103)]:0x0,_0x2cbbd2=Graphics[_0x364999(0x334)]+_0x2eb6b6,_0x548686=_0x2b2b0f[_0x364999(0x2c5)];_0x3bc9a5+=Math[_0x364999(0x3df)](_0x2cbbd2*_0x548686)*_0x2b2b0f[_0x364999(0x125)];}this['angle']=_0x3bc9a5;},Sprite_ConicalLight[_0x4022db(0xd7)]['updateLensFlareSprite']=function(){const _0x484c66=_0x4022db;if(!this[_0x484c66(0x3cd)])return;const _0x4c7084=this['getSourceDirection']();this[_0x484c66(0x3cd)][_0x484c66(0x272)]=_0x4c7084===0x2,this[_0x484c66(0x3cd)][_0x484c66(0x2ed)]=this[_0x484c66(0x2ed)]/0x2;},Sprite_ConicalLight[_0x4022db(0xd7)][_0x4022db(0x274)]=function(){const _0x3b395b=_0x4022db,_0x192c7f=this[_0x3b395b(0x240)]();_0x192c7f['useHandOffset']?this[_0x3b395b(0xf6)]():Sprite_LightBase[_0x3b395b(0xd7)]['updatePosition'][_0x3b395b(0x2bc)](this);},Sprite_ConicalLight[_0x4022db(0xd7)][_0x4022db(0xf6)]=function(){const _0x1d310f=_0x4022db,_0x488e77=this[_0x1d310f(0x285)](),_0x210f13=this['_originSprite'];let _0x1d1055=(Number(this['getSourceDirection']())||0x2)['clamp'](0x0,0x9);if(_0x1d1055===0x0||_0x1d1055===0x5)_0x1d1055=0x2;const _0x68b23a='dir%1'[_0x1d310f(0x3c9)](_0x1d1055),_0x5cb673=_0x1d310f(0x244)[_0x1d310f(0x3c9)](this[_0x1d310f(0x423)][_0x1d310f(0x25e)]()||0x0),_0x5e31e6='pattern%1Y'['format'](this['_source'][_0x1d310f(0x25e)]()||0x0),_0x231752=(_0x488e77[_0x68b23a]||{})[_0x5cb673]||0x0,_0x5cfcb6=(_0x488e77[_0x68b23a]||{})[_0x5e31e6]||0x0;this['x']=_0x210f13['x'],this['x']+=_0x231752,this['y']=_0x210f13['y']-Math['round'](_0x210f13[_0x1d310f(0x3a1)]/0x2),this['y']+=_0x5cfcb6;},Sprite_ConicalLight[_0x4022db(0xd7)]['isLightVisible']=function(){const _0x58ab18=_0x4022db;if(!Sprite_LightBase[_0x58ab18(0xd7)][_0x58ab18(0x3c1)]['call'](this))return![];if(!this[_0x58ab18(0x240)]())return![];return this[_0x58ab18(0x1cb)]();};function Sprite_LightSpawn(){const _0x3471fb=_0x4022db;this[_0x3471fb(0x131)](...arguments);}Sprite_LightSpawn['prototype']=Object[_0x4022db(0x13a)](Sprite_RadialLight[_0x4022db(0xd7)]),Sprite_LightSpawn[_0x4022db(0xd7)][_0x4022db(0x320)]=Sprite_LightSpawn,Sprite_LightSpawn[_0x4022db(0xd7)][_0x4022db(0x131)]=function(_0x50c530){const _0x1f75aa=_0x4022db;Sprite_RadialLight['prototype'][_0x1f75aa(0x131)][_0x1f75aa(0x2bc)](this,_0x50c530,null);},Sprite_LightSpawn['prototype']['lightData']=function(){const _0x123c89=_0x4022db;return this[_0x123c89(0x423)]?this[_0x123c89(0x423)]['settings']:{};},Sprite_LightSpawn[_0x4022db(0xd7)]['behaviorData']=function(){const _0x21ef89=_0x4022db;return this[_0x21ef89(0x423)]?this[_0x21ef89(0x423)]['behavior']:{};},Sprite_LightSpawn['prototype'][_0x4022db(0x3c1)]=function(){const _0x5f5cc8=_0x4022db;if(this['_source']&&!this[_0x5f5cc8(0x423)][_0x5f5cc8(0x19d)])return![];return Sprite_LightBase[_0x5f5cc8(0xd7)][_0x5f5cc8(0x3c1)][_0x5f5cc8(0x2bc)](this);},Sprite_LightSpawn[_0x4022db(0xd7)]['isUsingScreenCoordinates']=function(){const _0x2e141b=_0x4022db;return this[_0x2e141b(0x423)]?this[_0x2e141b(0x423)][_0x2e141b(0xd1)]===_0x2e141b(0x3f8):![];},Sprite_LightSpawn[_0x4022db(0xd7)][_0x4022db(0x3ee)]=function(){const _0x53dac3=_0x4022db;return this[_0x53dac3(0x423)]?this[_0x53dac3(0x423)][_0x53dac3(0xd1)]===_0x53dac3(0x32f):![];},Sprite_LightSpawn[_0x4022db(0xd7)][_0x4022db(0x164)]=function(){const _0x2ba298=_0x4022db;return this[_0x2ba298(0x423)]?this[_0x2ba298(0x423)][_0x2ba298(0xd1)]===_0x2ba298(0x195):![];},Sprite_LightSpawn[_0x4022db(0xd7)]['isFollowingFollower']=function(){const _0x2155e3=_0x4022db;return this[_0x2155e3(0x423)]?this[_0x2155e3(0x423)][_0x2155e3(0xd1)]===_0x2155e3(0x17b):![];},Sprite_LightSpawn['prototype'][_0x4022db(0x1c0)]=function(){const _0x43196e=_0x4022db;return this['_source']?this[_0x43196e(0x423)][_0x43196e(0xd1)]===_0x43196e(0x419):![];},Sprite_LightSpawn['prototype'][_0x4022db(0x274)]=function(){const _0x4c2665=_0x4022db,_0x18bd90=this['_source'],_0x13003f=this[_0x4c2665(0x240)]();this['x']=_0x18bd90['x'],this['x']+=_0x13003f[_0x4c2665(0x3b6)],this['y']=_0x18bd90['y'],this['y']+=_0x13003f['offsetY'],this[_0x4c2665(0x328)](),this['x']=Math[_0x4c2665(0x3ca)](this['x']),this['y']=Math[_0x4c2665(0x3ca)](this['y']);},Sprite_LightSpawn[_0x4022db(0xd7)][_0x4022db(0x328)]=function(){const _0x56ca7e=_0x4022db,_0x329736=this[_0x56ca7e(0x423)];if(this[_0x56ca7e(0x12c)]())this['x']+=_0x329736[_0x56ca7e(0x253)],this['y']+=_0x329736[_0x56ca7e(0x1b5)];else{if(this[_0x56ca7e(0x3ee)]()){if('pwPkx'!==_0x56ca7e(0x34d)){let _0x14e938=_0x329736[_0x56ca7e(0x253)]+0.5,_0x2578bf=_0x329736[_0x56ca7e(0x1b5)]+0.5;this[_0x56ca7e(0xf0)](_0x14e938,_0x2578bf);}else{const _0x4647bd=_0x1266e3[_0x56ca7e(0x13f)][_0x56ca7e(0x2eb)][_0x56ca7e(0x3ce)];let _0x1ec80d=0x64;while(_0x1ec80d>0x0){const _0x4b042a=_0x4647bd[_0x56ca7e(0x27a)[_0x56ca7e(0x3c9)](_0x1ec80d)]||[];if(_0x4b042a[_0x56ca7e(0x30c)](_0x37b296))return _0x1ec80d;_0x1ec80d-=0x5;}return 0x0;}}else{if(this[_0x56ca7e(0x164)]()){if('YMqAF'===_0x56ca7e(0x413)){const _0x5e7a8c=$gamePlayer;this['adjustPositionByTarget'](_0x5e7a8c);}else{if(this['_lightingEffects']===_0xe1ee76)this[_0x56ca7e(0x3e5)]();return this[_0x56ca7e(0x13c)];}}else{if(this[_0x56ca7e(0x261)]()){const _0x24ac56=$gamePlayer[_0x56ca7e(0x2dc)]()[_0x56ca7e(0x17b)](_0x329736[_0x56ca7e(0x301)]||0x0);this[_0x56ca7e(0x394)](_0x24ac56);}else{if(this[_0x56ca7e(0x1c0)]()){if(_0x56ca7e(0x218)===_0x56ca7e(0x218)){const _0x5aef74=$gameMap[_0x56ca7e(0x419)](_0x329736[_0x56ca7e(0x3a7)]);this[_0x56ca7e(0x394)](_0x5aef74);}else _0x434534=0xff;}}}}}},Sprite_LightSpawn[_0x4022db(0xd7)][_0x4022db(0xf0)]=function(_0xaf5743,_0x5d3ccb,_0x3472a1,_0x59afd0){const _0x18c37c=_0x4022db;this['x']+=Math[_0x18c37c(0x22a)](-$gameMap[_0x18c37c(0x2cb)]()*$gameMap[_0x18c37c(0x2a5)]()),this['y']+=Math[_0x18c37c(0x22a)](-$gameMap['displayY']()*$gameMap[_0x18c37c(0x33d)]()),this['x']+=Math[_0x18c37c(0x22a)](_0xaf5743*$gameMap['tileWidth']()),this['y']+=Math[_0x18c37c(0x22a)](_0x5d3ccb*$gameMap[_0x18c37c(0x33d)]()),this['x']+=_0x3472a1||0x0,this['y']+=_0x59afd0||0x0;},Sprite_LightSpawn['prototype']['adjustPositionByTarget']=function(_0x244a39){const _0x58ff12=_0x4022db;if(!_0x244a39)return;let _0x31760d=_0x244a39[_0x58ff12(0x3b1)]+0.5,_0x10db6d=_0x244a39['_realY']+0x1,_0x3bb48d=0x0,_0x51ff44=0x0;const _0x78ab6a=SceneManager[_0x58ff12(0x1ab)][_0x58ff12(0x1da)];if(_0x78ab6a){const _0x4e189c=_0x78ab6a[_0x58ff12(0x264)](_0x244a39);if(_0x4e189c){if(_0x58ff12(0x3fb)===_0x58ff12(0xc5)){const _0x4d84b2=_0x5a8a78(_0x3d056c['$1'])['split'](',')[_0x58ff12(0x32f)](_0x19d228=>_0x4c9ed0(_0x19d228)||0x0);this[_0x58ff12(0x2d8)]()[_0x58ff12(0x3b6)]=_0x4d84b2[0x0]||0x0,this[_0x58ff12(0x2d8)]()[_0x58ff12(0x32d)]=_0x4d84b2[0x1]||0x0;}else _0x51ff44=-(_0x4e189c[_0x58ff12(0x3a1)]/0x2);}}this['adjustPositionByMap'](_0x31760d,_0x10db6d,_0x3bb48d,_0x51ff44);},VisuMZ[_0x4022db(0x13f)]['Spriteset_Base_createLowerLayer']=Spriteset_Base[_0x4022db(0xd7)]['createLowerLayer'],Spriteset_Base[_0x4022db(0xd7)][_0x4022db(0x159)]=function(){const _0xcb486d=_0x4022db;this[_0xcb486d(0xef)](),VisuMZ[_0xcb486d(0x13f)][_0xcb486d(0x408)][_0xcb486d(0x2bc)](this);},VisuMZ['LightingEffects'][_0x4022db(0x216)]=Spriteset_Base[_0x4022db(0xd7)][_0x4022db(0x3a0)],Spriteset_Base[_0x4022db(0xd7)][_0x4022db(0x3a0)]=function(){const _0x2acb8b=_0x4022db;this[_0x2acb8b(0x146)]()&&(_0x2acb8b(0x1c7)===_0x2acb8b(0x409)?(_0xb4d9f0(_0x2acb8b(0x3d2)['format'](_0x32ccc4,_0x480951)),_0x526c9e[_0x2acb8b(0x3a3)]()):this['createLightingEffectsLightSpawns']()),VisuMZ[_0x2acb8b(0x13f)]['Spriteset_Base_createUpperLayer'][_0x2acb8b(0x2bc)](this);},Spriteset_Base[_0x4022db(0xd7)]['addLightingEffects']=function(){const _0x73e3e7=_0x4022db;if(!this[_0x73e3e7(0x2ef)]())return;this[_0x73e3e7(0x13c)]&&this[_0x73e3e7(0x2aa)][_0x73e3e7(0x3a9)](this[_0x73e3e7(0x13c)]);},Spriteset_Base[_0x4022db(0xd7)][_0x4022db(0xef)]=function(){const _0x17219e=_0x4022db;if(!this['isLightingEnabled']())return;this['_lightingEffects']=new Sprite_LightingEffects(this),this['_lightContainer']=this[_0x17219e(0x13c)][_0x17219e(0x146)](),SceneManager[_0x17219e(0x1ab)]['_lightContainer']=this['_lightingEffects'][_0x17219e(0x146)]();},Spriteset_Base['prototype'][_0x4022db(0x146)]=function(){const _0x54735a=_0x4022db;return this[_0x54735a(0x329)];},Spriteset_Base[_0x4022db(0xd7)][_0x4022db(0x2ef)]=function(){return![];},Spriteset_Base[_0x4022db(0xd7)][_0x4022db(0x302)]=function(){},Spriteset_Map[_0x4022db(0xd7)]['isLightingEnabled']=function(){const _0x438de3=_0x4022db;return VisuMZ[_0x438de3(0x13f)][_0x438de3(0x2eb)]['Map'][_0x438de3(0xe2)];},VisuMZ['LightingEffects'][_0x4022db(0x151)]=Spriteset_Map['prototype'][_0x4022db(0x3b7)],Spriteset_Map[_0x4022db(0xd7)][_0x4022db(0x3b7)]=function(){const _0x1da4d0=_0x4022db;VisuMZ['LightingEffects']['Spriteset_Map_createDestination']['call'](this),this[_0x1da4d0(0xcc)]();},VisuMZ[_0x4022db(0x13f)][_0x4022db(0xff)]=Spriteset_Map[_0x4022db(0xd7)][_0x4022db(0x1ad)],Spriteset_Map[_0x4022db(0xd7)][_0x4022db(0x1ad)]=function(){const _0x470545=_0x4022db;VisuMZ[_0x470545(0x13f)][_0x470545(0xff)][_0x470545(0x2bc)](this),this[_0x470545(0x13c)]&&this[_0x470545(0x13c)][_0x470545(0x266)]();},Spriteset_Map[_0x4022db(0xd7)]['createLightingEffectsLightSpawns']=function(){const _0x1df179=_0x4022db,_0x58f7fe=$gameMap['lightSpawns']();for(const _0x56eed9 of _0x58f7fe){if(_0x1df179(0x2fc)==='XymIQ'){const _0x5e1b8b=new Sprite_LightSpawn(_0x56eed9);SceneManager[_0x1df179(0x279)](_0x5e1b8b);}else this['_antiLightMasks'][_0x1df179(0x1c3)]=_0x5152ca(_0x911364['$1'])[_0x1df179(0x25a)](',')['map'](_0x2d1878=>(_0x571155(_0x2d1878)||0x1)[_0x1df179(0x17c)](0x1,0x7));}},Spriteset_Battle[_0x4022db(0xd7)][_0x4022db(0x2ef)]=function(){const _0x8eab30=_0x4022db;if(!Imported[_0x8eab30(0x154)])return![];return VisuMZ[_0x8eab30(0x13f)][_0x8eab30(0x2eb)][_0x8eab30(0x3ed)]['Enable'];},VisuMZ[_0x4022db(0x13f)][_0x4022db(0x363)]=Spriteset_Battle[_0x4022db(0xd7)][_0x4022db(0x212)],Spriteset_Battle[_0x4022db(0xd7)][_0x4022db(0x212)]=function(){const _0x177daa=_0x4022db;VisuMZ[_0x177daa(0x13f)]['Spriteset_Battle_createBattleField'][_0x177daa(0x2bc)](this),this[_0x177daa(0xcc)]();},Spriteset_Battle['prototype'][_0x4022db(0xcc)]=function(){const _0x53ce88=_0x4022db;if(!this[_0x53ce88(0x2ef)]())return;this[_0x53ce88(0x13c)]&&('TqLFu'==='DZHlc'?_0x2a85a9-=_0x5de313[_0x53ce88(0x3bf)]||0x0:(this['_battleField'][_0x53ce88(0x3a9)](this[_0x53ce88(0x13c)]),this[_0x53ce88(0x13c)]['x']=this[_0x53ce88(0x17e)][_0x53ce88(0x2e4)]/0x2,this[_0x53ce88(0x13c)]['y']=this['_battleField'][_0x53ce88(0x3a1)]/0x2));},VisuMZ[_0x4022db(0x13f)]['Window_Options_addGeneralOptions']=Window_Options[_0x4022db(0xd7)]['addGeneralOptions'],Window_Options[_0x4022db(0xd7)][_0x4022db(0x102)]=function(){const _0x13e2fa=_0x4022db;VisuMZ['LightingEffects'][_0x13e2fa(0xdc)][_0x13e2fa(0x2bc)](this),this[_0x13e2fa(0x389)]();},Window_Options['prototype'][_0x4022db(0x389)]=function(){const _0x447da2=_0x4022db;VisuMZ[_0x447da2(0x13f)][_0x447da2(0x2eb)][_0x447da2(0x331)][_0x447da2(0x35b)]&&this[_0x447da2(0x36d)](),VisuMZ[_0x447da2(0x13f)]['Settings'][_0x447da2(0x331)][_0x447da2(0x1ff)]&&this[_0x447da2(0x160)]();},Window_Options[_0x4022db(0xd7)]['addLightingEffectsBlinkingLightsCommand']=function(){const _0x4e33f2=_0x4022db,_0x2bf93b=TextManager[_0x4e33f2(0x1f1)][_0x4e33f2(0x336)],_0x537b15=_0x4e33f2(0x26e);this[_0x4e33f2(0x13e)](_0x2bf93b,_0x537b15);},Window_Options['prototype']['addLightingEffectsPulsingLightsCommand']=function(){const _0x1d8d8c=_0x4022db,_0x3130b6=TextManager[_0x1d8d8c(0x1f1)][_0x1d8d8c(0x387)],_0x27f571='pulsingLights';this[_0x1d8d8c(0x13e)](_0x3130b6,_0x27f571);};