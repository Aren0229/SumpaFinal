/*:
 * @target MZ
 * @plugindesc [Add-on] Keyboard navigation with individual hover images for PictureAction plugin
 * @author Aren + ChatGPT
 *
 * @help
 * Controls:
 *   Arrow keys / WASD = Move hover between pictures
 *   Enter / Space     = Trigger pictureAction(id, 'click')
 *
 * Configuration:
 *   1. Edit the "buttons" list below.
 *   2. Each entry is [pictureId, hoverImageName].
 *   3. Place all hover images inside img/pictures/.
 *   4. Place this plugin BELOW the PictureAction plugin.
 */

(() => {
  // ────────────────────────────────────────────────
  // CONFIGURATION
  // Format: [ pictureId, "hoverImageFilename" ]
  // Example: [3, "hover_play"], [4, "hover_continue"], [5, "hover_options"]
  // Make sure each hover image exists in img/pictures/
  const buttons = [
    [3, "new game bluir"],
    [4, "continue blur"],
    [5, "Options Button 1"],
    [6, "quit blur"],
  ];

  // Overlay offset — ensures hover picture IDs don’t conflict with originals
  const hoverOffset = 200;
  // ────────────────────────────────────────────────

  console.log("%c[PictureKeyboardControl] Loaded with per-picture hovers", "color: teal");

  let currentIndex = 0;

  function currentButton() {
    return buttons[currentIndex];
  }

  function eraseHover(id) {
    $gameScreen.erasePicture(id + hoverOffset);
  }

  function showHover(id, hoverName) {
    const pic = $gameScreen.picture(id);
    if (!pic) return;
    $gameScreen.showPicture(
      id + hoverOffset,
      hoverName,
      0,
      pic.x(),
      pic.y(),
      pic.scaleX(),
      pic.scaleY(),
      255,
      0
    );
  }

  function moveSelection(dir) {
    const [oldId] = currentButton();
    eraseHover(oldId);

    currentIndex = (currentIndex + dir + buttons.length) % buttons.length;

    const [newId, hoverName] = currentButton();
    showHover(newId, hoverName);
    console.log(`[PictureKeyboardControl] Hover → Picture ${newId}`);
  }

  function triggerClick() {
    const [id] = currentButton();
    if (typeof pictureAction === "function") {
      try {
        pictureAction(id, "click");
        console.log(`[PictureKeyboardControl] Clicked Picture ${id}`);
      } catch (e) {
        console.error("[PictureKeyboardControl] Error calling pictureAction:", e);
      }
    } else {
      console.warn("[PictureKeyboardControl] pictureAction() not found.");
    }
  }

  // Hook into Scene_Base update (works everywhere)
  const _Scene_Base_update = Scene_Base.prototype.update;
  Scene_Base.prototype.update = function () {
    _Scene_Base_update.call(this);

    if (!buttons.length) return;

    // Navigation
    if (Input.isTriggered("right") || Input.isTriggered("d") || Input.isTriggered("down") || Input.isTriggered("s")) {
      moveSelection(1);
    } else if (Input.isTriggered("left") || Input.isTriggered("a") || Input.isTriggered("up") || Input.isTriggered("w")) {
      moveSelection(-1);
    }

    // Confirm
    if (Input.isTriggered("ok") || Input.isTriggered("space")) {
      triggerClick();
    }
  };

  // Show initial hover after boot
  const _Scene_Boot_start = Scene_Boot.prototype.start;
  Scene_Boot.prototype.start = function () {
    _Scene_Boot_start.call(this);
    setTimeout(() => {
      const [id, hoverName] = currentButton();
      showHover(id, hoverName);
    }, 200);
  };

  // Optional API for in-game control
  window.PictureKeyboardControl = {
    next: () => moveSelection(1),
    prev: () => moveSelection(-1),
    click: () => triggerClick(),
    setButtons: (arr) => {
      if (Array.isArray(arr)) {
        buttons.length = 0;
        Array.prototype.push.apply(buttons, arr);
        currentIndex = 0;
      }
    },
  };
})();
