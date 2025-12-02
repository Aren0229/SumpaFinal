/*:
 * @target MZ
 * @plugindesc Hides the mouse cursor in the game window.
 */

(() => {
    document.body.style.cursor = "none";

    // Also disable cursor changing by the engine
    const _Graphics__updateCanvas = Graphics._updateCanvas;
    Graphics._updateCanvas = function() {
        _Graphics__updateCanvas.call(this);
        this._canvas.style.cursor = "none";
    };
})();
