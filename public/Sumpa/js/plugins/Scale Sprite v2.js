//=============================================================================
// ScaleSpriteMZ.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Scales all map character sprites (player, events, followers). Includes global scale parameter for easy adjustment.
 * @author Paradox
 *
 * @help
 * Plugin Commands:
 *   RenderSprite x
 *     - Changes the character sprite render size by x times.
 *       Example: "RenderSprite 1.5" makes all map sprites 1.5x bigger.
 *
 * @param DefaultScale
 * @type number
 * @decimals 2
 * @min 0.1
 * @desc Default render scale for character sprites.
 * @default 1.00
 *
 * @param GlobalScale
 * @type number
 * @decimals 2
 * @min 0.1
 * @desc Multiplies the overall sprite scale (applies to all map sprites).
 * @default 1.00
 */

(() => {
  const pluginName = "ScaleSpriteMZ";
  const parameters = PluginManager.parameters(pluginName);
  const defaultScale = Number(parameters["DefaultScale"] || 1.0);
  const globalScale = Number(parameters["GlobalScale"] || 1.0);

  // ───────────────────────────────
  // Sprite_Character modifications
  // ───────────────────────────────

  const _Sprite_Character_initMembers = Sprite_Character.prototype.initMembers;
  Sprite_Character.prototype.initMembers = function() {
    _Sprite_Character_initMembers.call(this);
    this._renderScale = defaultScale;
  };

  const _Sprite_Character_update = Sprite_Character.prototype.update;
  Sprite_Character.prototype.update = function() {
    _Sprite_Character_update.call(this);
    this.updateRenderScale();
  };

  Sprite_Character.prototype.updateRenderScale = function() {
    const characterScale = this._character._renderScale || defaultScale;
    const renderScale = characterScale * globalScale;
    if (this._renderScale !== renderScale) {
      this._renderScale = renderScale;
      this.scale.x = renderScale;
      this.scale.y = renderScale;
    }
  };

  // ───────────────────────────────
  // MZ Plugin Command
  // ───────────────────────────────

  PluginManager.registerCommand(pluginName, "RenderSprite", args => {
    const scale = parseFloat(args.scale);
    if (scale > 0) {
      const characters = $gameMap.events().concat([$gamePlayer, ...$gamePlayer.followers()._data]);
      characters.forEach(character => {
        if (character) character._renderScale = scale;
