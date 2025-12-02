//=============================================================================
// Custom Keyboard Mapping - Plugin for RPG Maker MZ
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Custom Keyboard Mapping
 * @author David M. Casas (Flechi)
 * @url https://github.com/davidmcasas
 *
 * @help CustomKeyboardMapping.js - Version 1.0
 * Tested with Corescript v1.6.0
 * 
 * This plugin adds a new option to the menu where the player can edit
 * the action assigned to any key on their keyboard (except for ESC key).
 * This plugin cannot edit game controller or mouse.
 * 
 * Use the parameter "Keyboard Actions" to define the actions available
 * to assign ingame. By default, this plugin includes all RPGM MZ
 * available action codes, excluding "debug". Special actions are included
 * for FPS counter (F2), Stretch Mode (F3) and Fullscreen (F4), as
 * these actions are handled differently by the game engine. From here
 * you may remove the actions that you don't want to show ingame.
 * 
 * Use the paremeter "Default Keyboard Mappings" to define the default
 * mapping. You must use JavaScript keycodes. You can find a complete list
 * of all available keycodes online. By default, this plugin includes
 * all RPGM MZ default mappings.
 * 
 * Note that you may include keyboard mappings for actions that are not
 * included in the "Keyboard Actions" parameter, like the "debug" example.
 * These mappings will work but won't be shown ingame.
 * 
 * Use the parameter "Safeguard Keycodes" to prevent the user from
 * editing unwanted keycodes. By default, this plugin safeguards the
 * keycodes for Enter and Arrow keys.
 * 
 * Additionally, with this plugin you can disable the events produced by
 * function keys, so you can liberate these keys for your game. To do so,
 * include in the "Prevent Default" the keyCodes which you want to prevent
 * their default action. By default, these keyCodes are included:
 * - F1 (112): in some browsers opens the help window.
 * - F5 (116): refreshes the game window.
 * - F11 (122): toggles fullscreen in some browsers.
 * - F12 (123): opens developer console.
 * 
 * Use the params under "Text/Lang" to edit the texts shown by this plugin.
 * 
 * Inside "Text/Lang", use the parameter "keycodeNames" to define
 * custom names for specific keyboard keys. If not defined here, english
 * names will be used by default.
 * 
 * @param showCommand
 * @type boolean
 * @default true
 * @text Show Command
 * @desc Show the command in the options menu.
 *
 * @param keyboardActions
 * @type struct<KeyboardAction>[]
 * @text Keyboard Actions
 * @desc Insert here the assignable action commands for your game.
 * @default ["{\"code\":\"ok\",\"name\":\"Action/Confirm\"}","{\"code\":\"escape\",\"name\":\"Cancel/Menu\"}","{\"code\":\"up\",\"name\":\"Move Up\"}","{\"code\":\"down\",\"name\":\"Move Down\"}","{\"code\":\"right\",\"name\":\"Move Right\"}","{\"code\":\"left\",\"name\":\"Move Left\"}","{\"code\":\"shift\",\"name\":\"Dash\"}","{\"code\":\"control\",\"name\":\"Control\"}","{\"code\":\"pageup\",\"name\":\"Page Up\"}","{\"code\":\"pagedown\",\"name\":\"Page Down\"}","{\"code\":\"tab\",\"name\":\"Tab\"}","{\"code\":\"_fullscreen\",\"name\":\"Toggle Fullscreen\"}","{\"code\":\"_stretch\",\"name\":\"Toggle Stretch Mode\"}","{\"code\":\"_fps\",\"name\":\"Toggle FPS Display\"}"]
 * 
 * @param defaultKeyboardMapping
 * @type struct<KeyboardMapping>[]
 * @text Default Keyboard Mapping
 * @desc Insert here the default mapping for your game.
 * @default ["{\"keyCode\":\"9\",\"action\":\"tab\"}","{\"keyCode\":\"13\",\"action\":\"ok\"}","{\"keyCode\":\"16\",\"action\":\"shift\"}","{\"keyCode\":\"17\",\"action\":\"control\"}","{\"keyCode\":\"18\",\"action\":\"control\"}","{\"keyCode\":\"27\",\"action\":\"escape\"}","{\"keyCode\":\"32\",\"action\":\"ok\"}","{\"keyCode\":\"33\",\"action\":\"pageup\"}","{\"keyCode\":\"34\",\"action\":\"pagedown\"}","{\"keyCode\":\"37\",\"action\":\"left\"}","{\"keyCode\":\"38\",\"action\":\"up\"}","{\"keyCode\":\"39\",\"action\":\"right\"}","{\"keyCode\":\"40\",\"action\":\"down\"}","{\"keyCode\":\"45\",\"action\":\"escape\"}","{\"keyCode\":\"81\",\"action\":\"pageup\"}","{\"keyCode\":\"87\",\"action\":\"pagedown\"}","{\"keyCode\":\"88\",\"action\":\"escape\"}","{\"keyCode\":\"90\",\"action\":\"ok\"}","{\"keyCode\":\"96\",\"action\":\"escape\"}","{\"keyCode\":\"98\",\"action\":\"down\"}","{\"keyCode\":\"100\",\"action\":\"left\"}","{\"keyCode\":\"102\",\"action\":\"right\"}","{\"keyCode\":\"104\",\"action\":\"up\"}","{\"keyCode\":\"113\",\"action\":\"_fps\"}","{\"keyCode\":\"114\",\"action\":\"_stretch\"}","{\"keyCode\":\"115\",\"action\":\"_fullscreen\"}","{\"keyCode\":\"120\",\"action\":\"debug\"}"]
 * 
 * @param safeguardKeycodes
 * @type number[]
 * @text Safeguard Keycodes
 * @desc Insert here the keycodes the player can't edit.
 * @default ["13","37","38","39","40"]
 * 
 * @param preventDefault
 * @type number[]
 * @text Prevent Default
 * @desc Insert here the keycodes whose default actions should be prevented.
 * @default ["112","116","122","123"]
 * 
 * @param texts
 * @text Text/Lang
 * 
 * @param commandText
 * @parent texts
 * @type string
 * @default Edit Keybindings
 * 
 * @param bindKeyCommandText
 * @parent texts
 * @type string
 * @default Bind Key
 * 
 * @param showKeybindingsCommandText
 * @parent texts
 * @type string
 * @default Show Keybindings
 * 
 * @param restoreDefaultsCommandText
 * @parent texts
 * @type string
 * @default Restore Defaults
 * 
 * @param bindKeyText
 * @parent texts
 * @type multiline_string
 * @default Press a key to bind...
 * (ESC to cancel)
 * 
 * @param isAssignedText
 * @parent texts
 * @type string
 * @default is assigned to
 * 
 * @param isNotAssignedText
 * @parent texts
 * @type string
 * @default is not assigned
 * 
 * @param unbindCommandText
 * @parent texts
 * @type string
 * @default (Unbind)
 * 
 * @param selectCommandText
 * @parent texts
 * @type multiline_string
 * @default Select a command to assign.
 * (ESC to cancel)
 * 
 * @param restoreDefaultsText
 * @parent texts
 * @type multiline_string
 * @default Are you sure you want to
 * restore default keybindings?
 * 
 * @param yesText
 * @parent texts
 * @type string
 * @default Yes
 * 
 * @param noText
 * @parent texts
 * @type string
 * @default No
 * 
 * @param restoreConfirmationText
 * @parent texts
 * @type multiline_string
 * @default Defaults restored!
 * 
 * @param keycodeNames
 * @parent texts
 * @type struct<KeycodeName>[]
 * @default []
 * 
 */

/*~struct~KeyboardAction:
 * @param code
 * @type string
 * @text Code
 * @desc Internal code of the action.
 *
 * @param name
 * @type string
 * @text Name
 * @desc Name displayed for this action.
 * 
 */

/*~struct~KeyboardMapping:
 * @param keyCode
 * @type number
 * @text Keycode
 * @desc JavaScript keyCode number.
 * 
 * @param action
 * @type string
 * @text Action
 * @desc Action code to bind to this keyCode.
 *
 */

/*~struct~KeycodeName:
 * @param keyCode
 * @type number
 * @text Keycode
 * @desc JavaScript keyCode number.
 * 
 * @param name
 * @type string
 * @text Name
 * @desc Custom name for this keyCode.
 *
 */

(() => {

    // ####--------------------------------####
    //          Plugin Init
    // ####--------------------------------####

    const _VERSION = "1.0";
    const script = document.currentScript;
    const pluginName =  script ?
        decodeURIComponent(script.src.match(/^.*\/(.+)\.js$/)[1]) :
        "CustomKeyboardMapping";

    /** Default english names for known keyCodes */
    const KEY_CODE_NAMES = {
        8: "Backspace",
        9: "Tab",

        13: "Enter",

        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "Caps Lock",

        27: "Escape",

        32: "Space",
        33: "Page Up",
        34: "Page Down",
        35: "End",
        36: "Home",
        37: "Arrow Left",
        38: "Arrow Up",
        39: "Arrow Right",
        40: "Arrow Down",

        44: "Print Screen",
        45: "Insert",
        46: "Delete",

        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",

        65: "A",
        66: "B",
        67: "C",
        68: "D",
        69: "E",
        70: "F",
        71: "G",
        72: "H",
        73: "I",
        74: "J",
        75: "K",
        76: "L",
        77: "M",
        78: "N",
        79: "O",
        80: "P",
        81: "Q",
        82: "R",
        83: "S",
        84: "T",
        85: "U",
        86: "V",
        87: "W",
        88: "X",
        89: "Y",
        90: "Z",
        91: "Left Window Key",
        92: "Right Window Key",
        93: "Select Key",
        96: "Numpad 0",
        97: "Numpad 1",
        98: "Numpad 2",
        99: "Numpad 3",
        100: "Numpad 4",
        101: "Numpad 5",
        102: "Numpad 6",
        103: "Numpad 7",
        104: "Numpad 8",
        105: "Numpad 9",
        106: "Multiply",
        107: "Add",

        109: "Subtract",
        110: "Decimal",
        111: "Divide",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",

        144: "Num Lock",
        145: "Scroll Lock",

        186: "Semi-colon",
        187: "Equal",
        188: "Comma",
        189: "Dash",
        190: "Period",
        191: "Forward Slash",
        
        219: "Open Bracket",
        220: "Back Slash",
        221: "Close Bracket",
        222: "Single Quote",
    }

    // ####


    // ####--------------------------------####
    //      Read & Apply Plugin Parameters
    // ####--------------------------------####

    const parameters = PluginManager.parameters(pluginName);

    const showCommand = (parameters["showCommand"] === "true");
    const keyboardActions = (() => { // parse JSON
        const actions = {};
        const parsedArray = JSON.parse(parameters["keyboardActions"]);
        for (const element of parsedArray) {
            const parsedElement = JSON.parse(element);
            actions[parsedElement.code] = parsedElement.name;
        }
        return actions;
    })();
    const defaultKeyboardMapping = (() => { // parse JSON
        const mapping = {};
        const parsedArray = JSON.parse(parameters["defaultKeyboardMapping"]);
        for (const element of parsedArray) {
            const parsedElement = JSON.parse(element);
            mapping[parsedElement.keyCode] = parsedElement.action;
        }
        if (!mapping[27]) {
            mapping[27] = "escape"; // ensure ESC is assigned
        }
        return mapping;
    })();
    Input.keyMapper = {...defaultKeyboardMapping}; // shallow copy

    /* Note: here I use .map(Number) to ensure the keyCodes are
        read as number types and not strings */
    const safeguardKeycodes = parameters["safeguardKeycodes"] ?
        JSON.parse(parameters["safeguardKeycodes"]).map(Number) : [];
    const preventDefault = parameters["preventDefault"] ?
        JSON.parse(parameters["preventDefault"]).map(Number) : [];

    // Texts
    const commandText = parameters["commandText"];
    const bindKeyCommandText = parameters["bindKeyCommandText"];
    const showKeybindingsCommandText = parameters["showKeybindingsCommandText"];
    const restoreDefaultsCommandText = parameters["restoreDefaultsCommandText"];
    const bindKeyText = parameters["bindKeyText"];
    const isAssignedText = parameters["isAssignedText"];
    const isNotAssignedText = parameters["isNotAssignedText"];
    const unbindCommandText = parameters["unbindCommandText"];
    const selectCommandText = parameters["selectCommandText"];
    const restoreDefaultsText = parameters["restoreDefaultsText"];
    const restoreConfirmationText = parameters["restoreConfirmationText"];
    const yesText = parameters["yesText"];
    const noText = parameters["noText"];
    const keycodeNames = parameters["keycodeNames"] ?
        (() => { // parse JSON
        const names = {};
        const parsedArray = JSON.parse(parameters["keycodeNames"]);
        for (const element of parsedArray) {
            const parsedElement = JSON.parse(element);
            names[parsedElement.keyCode] = parsedElement.name;
        }
        return names;
    })() : {};
    for (const keyCode in keycodeNames) { // Apply custom keyCode names
        KEY_CODE_NAMES[keyCode] = keycodeNames[keyCode];
    }

    // ####


    // ####--------------------------------####
    //      Handle Special Actions
    // ####--------------------------------####
    /**
     *  This is required to be able to reassign F2, F3 and F4 keys,
     *  since they are handled differently by the game engine.
     */

    /** This function handles special actions on the game engine */
    function handleSpecialActions(event) {
        const action = Input.keyMapper[event.keyCode];
        switch (action) {
            case "_fps" : Graphics._switchFPSCounter(); break;
            case "_stretch" : Graphics._switchStretchMode(); break;
            case "_fullscreen" : Graphics._switchFullScreen(); break;
        }
    }

    // Override and disable these pesky functions
    Graphics._onKeyDown = function() {};
    SceneManager.onKeyDown = function() {};
    
    /* Override Input._onKeyDown to check for preventDefault and
       call handleSpecialActions */
    ((alias) => {
        Input._onKeyDown = function(event) {
            if (Window_BindKey._isWaitingForKeyPress) { return; }

            if (preventDefault.includes(event.keyCode)) {
                event.preventDefault();
            }
            handleSpecialActions(event);

            alias.apply(this, arguments);
        }
    })(Input._onKeyDown);

    // ####


    // ####--------------------------------####
    //         ConfigManager Handling
    // ####--------------------------------####

    // Config names
    const configName = pluginName;
    const mappingConfigName = "mapping";

    // Set default config value
    const defaultConfig = {}
    defaultConfig[mappingConfigName] = defaultKeyboardMapping;
    ConfigManager[configName] = defaultConfig;
    
    // Store config data
    ((alias) => {
        ConfigManager.makeData = function() {
            const config = alias.apply(this, arguments);

            this[configName][mappingConfigName] = Input.keyMapper;
            config[configName] = this[configName];
            return config;
        }
    })(ConfigManager.makeData);

    // Read config data
    ((alias) => {
        ConfigManager.applyData = function(config) {
            alias.apply(this, arguments);

            if (configName in config) {
                Input.keyMapper = config[configName][mappingConfigName];
            }
        }
    })(ConfigManager.applyData);

    // ####
    

    // ####--------------------------------####
    //         Show in Options Menu
    // ####--------------------------------####

    if (showCommand) {

        // Register options menu command
        ((alias) => {
            Window_Options.prototype.makeCommandList = function() {
                this.addCommand(commandText, "keyboardMapping");
                
                alias.apply(this, arguments);
            };
        })(Window_Options.prototype.makeCommandList);

        // Register command handling
        ((alias) => {
            Window_Options.prototype.processOk = function() {
                const index = this.index();
                const symbol = this.commandSymbol(index);
                if (symbol === "keyboardMapping") {
                    Window_Command.prototype.processOk.call(this);
                    Window_KeyboardMapping._lastCommandSymbol = null;
                    SceneManager.push(Scene_KeyboardMapping);
                } else {
                    alias.apply(this, arguments);
                }
            }
        })(Window_Options.prototype.processOk);

        // Draw this command text centered
        ((alias) => {
            Window_Options.prototype.drawItem = function(index) {
                const symbol = this.commandSymbol(index);
                if (symbol === "keyboardMapping") {
                    const title = this.commandName(index);
                    const rect = this.itemLineRect(index);
                    this.resetTextColor();
                    this.changePaintOpacity(this.isCommandEnabled(index));
                    this.drawText(title, rect.x, rect.y, rect.width, "center");
                } else {
                    alias.apply(this, arguments);
                }
            }
        })(Window_Options.prototype.drawItem);

        // Update options window max visible commands
        ((alias) => {
            Scene_Options.prototype.maxCommands = function() {
                return alias.apply(this, arguments) + 1;
            }
        })(Scene_Options.prototype.maxCommands);

        // Store options menu last command
        ((alias) => {
            Window_Options.prototype.processOk = function() {
                alias.apply(this, arguments);
                Window_Options._lastCommandSymbol = this.currentSymbol();
            };
        })(Window_Options.prototype.processOk);
        
        // Select options menu last command
        ((alias) => {
            Window_Options.prototype.initialize = function() {
                alias.apply(this, arguments);
                if (Window_Options._lastCommandSymbol) {
                    this.selectSymbol(Window_Options._lastCommandSymbol);
                }
            };
        })(Window_Options.prototype.initialize);

    }

    // ####


    // ####--------------------------------####
    //          Scene_KeyboardMapping
    // ####--------------------------------####

    function Scene_KeyboardMapping() {
        this.initialize(...arguments);
    }
    
    Scene_KeyboardMapping.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_KeyboardMapping.prototype.constructor = Scene_KeyboardMapping;
    
    Scene_KeyboardMapping.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    Scene_KeyboardMapping.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this.createCommandWindow();
    };

    Scene_KeyboardMapping.prototype.commandWindowRect = function() {
        const ww = this.mainCommandWidth() * 2;
        const wh = this.calcWindowHeight(3, true);
        const wx = Math.floor(Graphics.boxWidth/2 - ww/2); // center
        const wy = Math.floor(Graphics.boxHeight/2 - wh/2); // center
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_KeyboardMapping.prototype.createCommandWindow = function() {
        const rect = this.commandWindowRect();
        const commandWindow = new Window_KeyboardMapping(rect);
        commandWindow.setHandler("bindKey", this.commandBindKey.bind(this));
        commandWindow.setHandler("showKeybindings", this.commandShowKeybindings.bind(this));
        commandWindow.setHandler("restoreDefaults", this.commandRestoreDefaults.bind(this));
        commandWindow.setHandler("cancel", this.popScene.bind(this));
        this.addWindow(commandWindow);
        this._commandWindow = commandWindow;
    };

    Scene_KeyboardMapping.prototype.commandBindKey = function() {
        SceneManager.push(Scene_BindKey);
    }

    Scene_KeyboardMapping.prototype.commandShowKeybindings = function() {
        SceneManager.push(Scene_ShowKeybindings);
    }

    Scene_KeyboardMapping.prototype.commandRestoreDefaults = function() {
        SceneManager.push(Scene_RestoreDefaults);
    }

    Scene_KeyboardMapping.prototype.terminate = function() {
        Scene_MenuBase.prototype.terminate.call(this);
        ConfigManager.save();
    };

    // ####


    // ####--------------------------------####
    //          Window_KeyboardMapping
    // ####--------------------------------####

    function Window_KeyboardMapping() {
        this.initialize(...arguments);
    }

    Window_KeyboardMapping.prototype = Object.create(Window_Command.prototype);
    Window_KeyboardMapping.prototype.constructor = Window_KeyboardMapping;

    Window_KeyboardMapping.prototype.initialize = function(rect) {

        if (!this._index) {
            Window_Command.prototype.initialize.call(this, rect);
        }
        this.activate();
        this.selectLast();
    };

    Window_KeyboardMapping.prototype.activate = function() {
        Window_Command.prototype.activate.call(this);
    };

    Window_KeyboardMapping.prototype.makeCommandList = function() {
        this.addCommand(bindKeyCommandText, "bindKey");
        this.addCommand(showKeybindingsCommandText, "showKeybindings");
        this.addCommand(restoreDefaultsCommandText, "restoreDefaults");
    };

    Window_KeyboardMapping.prototype.processOk = function() {
        Window_KeyboardMapping._lastCommandSymbol = this.currentSymbol();
        Window_Command.prototype.processOk.call(this);
    };
    
    Window_KeyboardMapping.prototype.selectLast = function() {
        this.selectSymbol(Window_KeyboardMapping._lastCommandSymbol);
    };

    // ####


    // ####--------------------------------####
    //          Scene_BindKey
    // ####--------------------------------####

    function Scene_BindKey() {
        this.initialize(...arguments);
    }
    
    Scene_BindKey.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_BindKey.prototype.constructor = Scene_BindKey;
    
    Scene_BindKey.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    Scene_BindKey.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this.createBindKeyWindow();
    };

    Scene_BindKey.prototype.bindKeyWindowRect = function() {
        const ww = this.mainCommandWidth() * 2;
        const wh = this.calcWindowHeight(4, false);
        const wx = Math.floor(Graphics.boxWidth/2 - ww/2); // center
        const wy = 0; // top
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_BindKey.prototype.createBindKeyWindow = function() {
        const rect = this.bindKeyWindowRect();
        const bindKeyWindow = new Window_BindKey(rect);
        bindKeyWindow._scene = this;

        bindKeyWindow.setHandler("cancel", this.popScene.bind(this));
        this.addWindow(bindKeyWindow);
    };

    // ####


    // ####--------------------------------####
    //          Window_BindKey
    // ####--------------------------------####

    function Window_BindKey() {
        this.initialize(...arguments);
    }

    Window_BindKey.prototype = Object.create(Window_Base.prototype);
    Window_BindKey.prototype.constructor = Window_BindKey;
    Window_BindKey._isWaitingForKeyPress = false;

    Window_BindKey.prototype.initialize = function(rect) {
        Window_Base.prototype.initialize.call(this, rect);
        this._handlers = {};
        this._text = bindKeyText;
        this._textConfirm = null;
        this._boundHandler = null;
        this._keyCode = null;
        this.startMessage(this._text);
        this.createListener();
    };

    // Create window keydown listener, bound to this instance
    Window_BindKey.prototype.createListener = function() {
        if (!this._boundHandler) {
            this._boundHandler = this.handleKeyDown.bind(this);
            window.addEventListener("keydown", this._boundHandler);
            Window_BindKey._isWaitingForKeyPress = true;
        }
    }
    // Remove the listener
    Window_BindKey.prototype.removeListener = function() {
        if (this._boundHandler) {
            window.removeEventListener("keydown", this._boundHandler);
            this._boundHandler = null;
            Window_BindKey._isWaitingForKeyPress = false;
        }
    }
    // Handle keydown listener 
    Window_BindKey.prototype.handleKeyDown = function (event) {
        
        if (event.keyCode === 27) { // Close on ESC
            this.processEsc(); 
            return;
        
        } else if (safeguardKeycodes.includes(event.keyCode)) {
            return; // Prevent bind safeguarded keycodes
        }

        this.removeListener();
        this._keyCode = event.keyCode;

        const keyName = !!KEY_CODE_NAMES[this._keyCode] ?
            ("[" + KEY_CODE_NAMES[this._keyCode] + "]") :
            "[Key_" + this._keyCode + "]";

        if (!!Input.keyMapper[this._keyCode]) {
            const actionCode = Input.keyMapper[this._keyCode];
            this._textConfirm = keyName + " " + isAssignedText + ":\n"
                + keyboardActions[actionCode];
        } else {
            this._textConfirm = keyName + " " + isNotAssignedText + ".\n"; 
        }
        this._textConfirm += "\n" + selectCommandText;

        this.startMessage(this._textConfirm);
        
        this.createCommandWindow();
        this.playOkSound();
        this.deactivate();
        Input.clear();
    }

    Window_BindKey.prototype.startMessage = function(text) {
        const textState = this.createTextState(text, 0, 0, 0);

        textState.x = this.newLineX(textState);
        textState.startX = textState.x;
        this._textState = textState;
        this.newPage(this._textState);
        this.open();

        this.processAllText(textState);
    };
    
    Window_BindKey.prototype.newLineX = function(textState) {
        const margin = 4;
        return textState.rtl ? this.innerWidth - margin : margin;
    };

    Window_BindKey.prototype.newPage = function(textState) {
        this.contents.clear();
        this.resetFontSettings();
        textState.x = textState.startX;
        textState.y = 0;
        textState.height = this.calcTextHeight(textState);
    };

    Window_BindKey.prototype.processCancel = function() {
        SoundManager.playCancel();
        this.removeListener();
        this.deactivate();
        this.callCancelHandler();
    };
    
    Window_BindKey.prototype.processEsc = function() {
        if (this.isOpenAndActive()) {
            return this.processCancel();
        }
    }

    Window_BindKey.prototype.setHandler = function(symbol, method) {
        this._handlers[symbol] = method;
    };

    Window_BindKey.prototype.isHandled = function(symbol) {
        return !!this._handlers[symbol];
    };
    
    Window_BindKey.prototype.callHandler = function(symbol) {
        if (this.isHandled(symbol)) { this._handlers[symbol](); }
    };

    Window_BindKey.prototype.isCancelEnabled = function() {
        return this.isHandled("cancel");
    };
    
    Window_BindKey.prototype.callCancelHandler = function() {
        this.callHandler("cancel");
    };

    Window_BindKey.prototype.isOpenAndActive = function() {
        return this.isOpen() && this.visible && this.active;
    };

    Window_BindKey.prototype.isCancelTriggered = function() {
        return Input.isRepeated("cancel");
    };

    Window_BindKey.prototype.commandWindowRect = function() {
        const ww = this.width;
        const wh = Graphics.boxHeight - this.height;
        const wx = Math.floor(Graphics.boxWidth/2 - ww/2); // center
        const wy = Math.floor(Graphics.boxHeight - wh); // bottom
        return new Rectangle(wx, wy, ww, wh);
    };

    Window_BindKey.prototype.createCommandWindow = function() {
        const rect = this.commandWindowRect();
        const commandWindow = new Window_ChooseAction(rect, this._keyCode);
        commandWindow._scene = this._scene;
        commandWindow.setHandler("cancel", this._scene.popScene.bind(this));
        commandWindow.setHandler("bindAction", commandWindow.bindAction.bind(commandWindow));
        commandWindow.setHandler("unbind", commandWindow.unbind.bind(commandWindow));
        commandWindow._keyCode = this._keyCode;
        this._scene.addWindow(commandWindow);
        this._scene._commandWindow = commandWindow;
    };

    // ####


    // ####--------------------------------####
    //          Window_ChooseAction
    // ####--------------------------------####

    function Window_ChooseAction() {
        this.initialize(...arguments);
    }

    Window_ChooseAction.prototype = Object.create(Window_Command.prototype);
    Window_ChooseAction.prototype.constructor = Window_ChooseAction;

    Window_ChooseAction.prototype.initialize = function(rect, keyCode) {
        this._keyCode = keyCode;
        Window_Command.prototype.initialize.call(this, rect);
    };

    Window_ChooseAction.prototype.makeCommandList = function() {

        if (!!Input.keyMapper[this._keyCode]) {
            this.addCommand(unbindCommandText, "unbind");
        }

        for (const actionCode in keyboardActions) {
            this.addCommand(keyboardActions[actionCode],
                "bindAction", true, actionCode);
        }
    };

    Window_ChooseAction.prototype.bindAction = function() {
        Input.keyMapper[this._keyCode] = this.currentExt();
        Input.clear();
        this._scene.popScene();
    }

    Window_ChooseAction.prototype.unbind = function() {
        delete Input.keyMapper[this._keyCode];
        Input.clear();
        this._scene.popScene();
    }
    
    // ####


    // ####--------------------------------####
    //          Scene_ShowKeybindings
    // ####--------------------------------####

    function Scene_ShowKeybindings() {
        this.initialize(...arguments);
    }
    
    Scene_ShowKeybindings.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_ShowKeybindings.prototype.constructor = Scene_ShowKeybindings;
    
    Scene_ShowKeybindings.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    Scene_ShowKeybindings.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this.createCommandWindow();
    };

    Scene_ShowKeybindings.prototype.commandWindowRect = function() {
        const ww = this.mainCommandWidth() * 2;
        const wh = Graphics.boxHeight;
        const wx = Math.floor(Graphics.boxWidth/2 - ww/2); // center
        const wy = 0; // top
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_ShowKeybindings.prototype.createCommandWindow = function() {
        const rect = this.commandWindowRect();
        const commandWindow = new Window_ShowKeybindings(rect, this.prepareText());
        commandWindow.setHandler("cancel", this.popScene.bind(this));
        this.addWindow(commandWindow);
        this._commandWindow = commandWindow;
    };

    Scene_ShowKeybindings.prototype.prepareText = function() {
        
        let text = "";
        for (const keyCode in Input.keyMapper) {
            const actionCode = Input.keyMapper[keyCode];
            const keyCodeName = KEY_CODE_NAMES[keyCode];
            const actionName = keyboardActions[actionCode];
                
            if (actionName !== undefined) {
                text += "[" + keyCodeName + "] " + actionName + "\n"; 
            }
        }
        return text.trim();
    };
    
    // ####


    // ####--------------------------------####
    //          Window_ShowKeybindings
    // ####--------------------------------####

    function Window_ShowKeybindings() {
        this.initialize(...arguments);
    }

    Window_ShowKeybindings.prototype = Object.create(Window_Base.prototype);
    Window_ShowKeybindings.prototype.constructor = Window_ShowKeybindings;

    Window_ShowKeybindings.prototype.initialize = function(rect, text) {
        Window_Base.prototype.initialize.call(this, new Rectangle());
        this._handlers = {}

        this._reservedRect = rect;
        this._text = text;
        this._allTextHeight = 0;
        this._minScroll = 0;
        this._maxScroll = 0;
        this._scrollSpeed = $gameMessage.scrollSpeed() * 3;
        
        this.updatePlacement();
        this.refresh();
        //this.show(); this.activate();
    };

    Window_ShowKeybindings.prototype.updatePlacement = function() {
        const rect = this._reservedRect;
        this.move(rect.x, rect.y, rect.width, rect.height);
    };

    Window_ShowKeybindings.prototype.contentsHeight = function() {
        return Math.max(this._allTextHeight, 1);
    };

    Window_ShowKeybindings.prototype.refresh = function() {
        this._allTextHeight = this.textSizeEx(this._text).height;
        this._maxScroll = this._allTextHeight - this.height + this.lineHeight();
        this.createContents();
        const rect = this.baseTextRect();
        this.drawTextEx(this._text, rect.x, rect.y, rect.width);
    };

    Window_ShowKeybindings.prototype.update = function() {
        if (this.isCancelTriggered()) {
            this.processCancel();
            return;
        }

        Window_Base.prototype.update.call(this);
        this.updateMessage();
        this.updateArrows();
    };

    Window_ShowKeybindings.prototype.updateArrows = function() {
        this.upArrowVisible = this.origin.y > 0;
        this.downArrowVisible = this.origin.y < this._maxScroll;
    };

    Window_ShowKeybindings.prototype.updateMessage = function() {
        if (Input.isPressed("up")) {
            this.origin.y -= this._scrollSpeed;
        } else if (Input.isPressed("down")) {
            this.origin.y += this._scrollSpeed;
        }

        // lazy clamp
        if (this.origin.y < 0) {
            this.origin.y = 0;
        }
        if (this.origin.y > this._maxScroll) {
            this.origin.y = this._maxScroll;
        }
    };

    Window_ShowKeybindings.prototype.setHandler = function(symbol, method) {
        this._handlers[symbol] = method;
    };

    Window_ShowKeybindings.prototype.isHandled = function(symbol) {
        return !!this._handlers[symbol];
    };
    
    Window_ShowKeybindings.prototype.callHandler = function(symbol) {
        if (this.isHandled(symbol)) { this._handlers[symbol](); }
    };

    Window_ShowKeybindings.prototype.isCancelEnabled = function() {
        return this.isHandled("cancel");
    };
    
    Window_ShowKeybindings.prototype.callCancelHandler = function() {
        this.callHandler("cancel");
    };

    Window_ShowKeybindings.prototype.isOpenAndActive = function() {
        return this.isOpen() && this.visible && this.active;
    };

    Window_ShowKeybindings.prototype.isCancelTriggered = function() {
        return Input.isRepeated("cancel");
    };

    Window_ShowKeybindings.prototype.processCancel = function() {
        SoundManager.playCancel();
        this.deactivate();
        this.callCancelHandler();
    };

    // ####


    // ####--------------------------------####
    //          Scene_RestoreDefaults
    // ####--------------------------------####

    function Scene_RestoreDefaults() {
        this.initialize(...arguments);
    }
    
    Scene_RestoreDefaults.prototype = Object.create(Scene_MenuBase.prototype);
    Scene_RestoreDefaults.prototype.constructor = Scene_RestoreDefaults;
    
    Scene_RestoreDefaults.prototype.initialize = function() {
        Scene_MenuBase.prototype.initialize.call(this);
    };

    Scene_RestoreDefaults.prototype.create = function() {
        Scene_MenuBase.prototype.create.call(this);
        this.createWindows();
    };

    Scene_RestoreDefaults.prototype.defaultsWindowRect = function() {
        const ww = this.mainCommandWidth() * 2;
        const wh = this.calcWindowHeight(4, false);
        const wx = Math.floor(Graphics.boxWidth/2 - ww/2); // center
        const wy = Math.floor(Graphics.boxHeight/2 - wh/2); // center
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_RestoreDefaults.prototype.restoreWindowRect = function() {
        const ww = this.mainCommandWidth() * 2;
        const wh = this.calcWindowHeight(4, false);
        const wx = Math.floor(Graphics.boxWidth/2 - ww/2); // center
        const wy = Math.floor(Graphics.boxHeight - wh); // bottom
        return new Rectangle(wx, wy, ww, wh);
    };

    Scene_RestoreDefaults.prototype.createWindows = function() {
        const rect = this.defaultsWindowRect();
        const defaultsWindow = new Window_DefaultsMessage(rect);
        defaultsWindow._scene = this;
        defaultsWindow.setHandler("cancel", this.popScene.bind(this));
        this.addWindow(defaultsWindow);

        const rect2 = this.restoreWindowRect();
        const restoreChoice = new Window_RestoreChoice(rect2);
        restoreChoice._scene = this;
        this.addWindow(restoreChoice);
        this._commandWindow = restoreChoice;
        restoreChoice.setMessageWindow(defaultsWindow);
        restoreChoice.start();
        //restoreChoice.selectExt("no");
    };

    // ####

    
    // ####--------------------------------####
    //      Window_DefaultsMessage
    // ####--------------------------------####

    function Window_DefaultsMessage() {
        this.initialize(...arguments);
    }
    
    Window_DefaultsMessage.prototype = Object.create(Window_Base.prototype);
    Window_DefaultsMessage.prototype.constructor = Window_DefaultsMessage;
    
    Window_DefaultsMessage.prototype.initialize = function(rect) {
        Window_Base.prototype.initialize.call(this, rect);
        this._handlers = {};
        this._canHandleOk = false;
        this._text = restoreDefaultsText;
        this.startMessage(this._text);
    };

    Window_DefaultsMessage.prototype.startMessage = function(text) {
        const textState = this.createTextState(text, 0, 0, 0);

        textState.x = this.newLineX(textState);
        textState.startX = textState.x;
        this._textState = textState;
        this.newPage(this._textState);
        this.open();

        this.processAllText(textState);
    };
    
    Window_DefaultsMessage.prototype.newLineX = function(textState) {
        const margin = 4;
        return textState.rtl ? this.innerWidth - margin : margin;
    };

    Window_DefaultsMessage.prototype.newPage = function(textState) {
        this.contents.clear();
        this.resetFontSettings();
        textState.x = textState.startX;
        textState.y = 0;
        textState.height = this.calcTextHeight(textState);
    };

    Window_DefaultsMessage.prototype.updatePlacement = function() {
        this.y = Math.floor(Graphics.boxHeight/2 - this.height/2); // center
    };

    Window_DefaultsMessage.prototype.update = function() {
        Window_Base.prototype.update.call(this);

        if (this._canHandleOk) {
            this.downArrowVisible = true;
            if (this.isOkTriggered()) {
                this.processOk();
            }
        }

        if (this.isCancelTriggered()) {
            this.processCancel();
            return;
        }
    };

    Window_DefaultsMessage.prototype.processCancel = function() {
        SoundManager.playCancel();
        this.deactivate();
        this.callCancelHandler();
    };

    Window_DefaultsMessage.prototype.processOk = function() {
        SoundManager.playOk();
        this.deactivate();
        this.callCancelHandler();
    };

    Window_DefaultsMessage.prototype.terminateMessage = function() {
        this.close();
    };
    
    Window_DefaultsMessage.prototype.setHandler = function(symbol, method) {
        this._handlers[symbol] = method;
    };

    Window_DefaultsMessage.prototype.isHandled = function(symbol) {
        return !!this._handlers[symbol];
    };
    
    Window_DefaultsMessage.prototype.callHandler = function(symbol) {
        if (this.isHandled(symbol)) { this._handlers[symbol](); }
    };

    Window_DefaultsMessage.prototype.isCancelEnabled = function() {
        return this.isHandled("cancel");
    };
    
    Window_DefaultsMessage.prototype.callCancelHandler = function() {
        this.callHandler("cancel");
    };

    Window_DefaultsMessage.prototype.isOpenAndActive = function() {
        return this.isOpen() && this.visible && this.active;
    };

    Window_DefaultsMessage.prototype.isCancelTriggered = function() {
        return Input.isRepeated("cancel");
    };

    Window_DefaultsMessage.prototype.isOkTriggered = function() {
        return Input.isRepeated("ok");
    };

    // ####

    
    // ####--------------------------------####
    //      Window_RestoreChoice
    // ####--------------------------------####

    function Window_RestoreChoice() {
        this.initialize(...arguments);
    }

    Window_RestoreChoice.prototype = Object.create(Window_ChoiceList.prototype);
    Window_RestoreChoice.prototype.constructor = Window_RestoreChoice;

    Window_RestoreChoice.prototype.initialize = function() {
        this._choices = [
            {value: "yes", name: yesText},
            {value: "no", name: noText}
        ];
        Window_ChoiceList.prototype.initialize.call(this, new Rectangle());
    }
    Window_RestoreChoice.prototype.numVisibleRows = function() {
        return Math.min(this._choices.length, this.maxLines());
    };

    Window_RestoreChoice.prototype.maxChoiceWidth = function() {
        let maxWidth = 96;
        const choices = this._choices;
        for (const choice of choices) {
            const textWidth = this.textSizeEx(choice.name).width;
            const choiceWidth = Math.ceil(textWidth) + this.itemPadding() * 2;
            if (maxWidth < choiceWidth) {
                maxWidth = choiceWidth;
            }
        }
        return maxWidth;
    };

    Window_RestoreChoice.prototype.makeCommandList = function() {
        const choices = this._choices;
        for (const choice of choices) {
            this.addCommand(choice.name, "choice", true, choice.value);
        }
    };

    Window_RestoreChoice.prototype.updatePlacement = function() {
        this.width = this.windowWidth();
        this.height = this.windowHeight();
        this.x = this._messageWindow.x + this._messageWindow.width - this.width;
        this.y = this.windowY();
    };

    Window_RestoreChoice.prototype.callOkHandler = function() {
        const action = this.currentExt();
        
        if (action === "yes") {
            Input.keyMapper = {...defaultKeyboardMapping};
            Input.clear();
            ConfigManager.save();
            this.close();
            this._messageWindow.startMessage(restoreConfirmationText);
            this._messageWindow._canHandleOk = true;
        } else {
            this.close();
            this._scene.popScene();
        }
        
    };

    // ####


    /* ~ Made with love and lack of sleep by David M. Casas (Flechi) ~ */

})();
