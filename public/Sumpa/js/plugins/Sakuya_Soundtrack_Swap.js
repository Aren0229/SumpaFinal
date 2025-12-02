/*:
 * @author Sakuya
 * @plugindesc Let you swap the bgm through a switch
 * 
 * @param Soundtrack Suffix
 * @desc The suffix of the file that will played after
 * the switch is turned one
 * @default _new
 * 
 * @param Switch Id
 * @desc the switch id needed to be turned on
 * to play the new soundtrack
 * @default 350
 * 
 * @help
 * Use the suffix on the newer version of the soundtrack so the system
 * will know what to play.
 * 
 * Be careful that if the file is not exist, it will cause an error
 * 
 */

var Sakuya = Sakuya || {};
Sakuya.SoundtrackSwap = {};

var parameters = PluginManager.parameters("Sakuya_Soundtrack_Swap");

Sakuya.SoundtrackSwap.SuffixName = parameters["Soundtrack Suffix"];
Sakuya.SoundtrackSwap.SwitchId = eval(parameters["Switch Id"]);
console.log(Sakuya.SoundtrackSwap.SwitchId);

Sakuya.SoundtrackSwap.suffix = function() {
	if ($gameSwitches && $gameSwitches.value(Sakuya.SoundtrackSwap.SwitchId)) {
		return Sakuya.SoundtrackSwap.SuffixName;
	} else {
		return "";
	};
};

//ME
AudioManager.playMe = function(me) {
    this.stopMe();
    if (me.name) {
        if (this._bgmBuffer && this._currentBgm) {
            this._currentBgm.pos = this._bgmBuffer.seek();
            this._bgmBuffer.stop();
        }
        this._meBuffer = this.createBuffer('me/', me.name + Sakuya.SoundtrackSwap.suffix());
        this.updateMeParameters(me);
        this._meBuffer.play(false);
        this._meBuffer.addStopListener(this.stopMe.bind(this));
    }
};

//SE
AudioManager.loadStaticSe = function(se) {
    if (se.name && !this.isStaticSe(se)) {
        var buffer = this.createBuffer('se/', se.name + Sakuya.SoundtrackSwap.suffix());
        buffer._reservedSeName = se.name + Sakuya.SoundtrackSwap.suffix();
        this._staticBuffers.push(buffer);
    }
};

AudioManager.isStaticSe = function(se) {
    for (var i = 0; i < this._staticBuffers.length; i++) {
        var buffer = this._staticBuffers[i];
        if (buffer._reservedSeName === se.name + Sakuya.SoundtrackSwap.suffix()) {
            return true;
        }
    }
    return false;
};

AudioManager.playSe = function(se) {
    if (se.name) {
        this._seBuffers = this._seBuffers.filter(function(audio) {
            return audio.isPlaying();
        });
        var buffer = this.createBuffer('se/', se.name + Sakuya.SoundtrackSwap.suffix());
        this.updateSeParameters(buffer, se);
        buffer.play(false);
        this._seBuffers.push(buffer);
    }
};

AudioManager.playStaticSe = function(se) {
    if (se.name) {
        this.loadStaticSe(se);
        for (var i = 0; i < this._staticBuffers.length; i++) {
            var buffer = this._staticBuffers[i];
            if (buffer._reservedSeName === se.name + Sakuya.SoundtrackSwap.suffix()) {
                buffer.stop();
                this.updateSeParameters(buffer, se);
                buffer.play(false);
                break;
            }
        }
    }
};

//BGM
AudioManager.playBgm = function(bgm, pos) {
    if (this.isCurrentBgm(bgm)) {
        this.updateBgmParameters(bgm);
    } else {
        this.stopBgm();
        if (bgm.name) { 
            this._bgmBuffer = this.createBuffer('bgm/', bgm.name + Sakuya.SoundtrackSwap.suffix());
            this.updateBgmParameters(bgm);
            if (!this._meBuffer) {
                this._bgmBuffer.play(true, pos || 0);
            }
        }
    }
    this.updateCurrentBgm(bgm, pos);
};

AudioManager.createDecryptBuffer = function(url, bgm, pos){
    this._blobUrl = url;
    this._bgmBuffer = this.createBuffer('bgm', bgm.name + Sakuya.SoundtrackSwap.suffix());
    this.updateBgmParameters(bgm);
    if (!this._meBuffer) {
        this._bgmBuffer.play(true, pos || 0);
    }
    this.updateCurrentBgm(bgm, pos);
};

AudioManager.updateCurrentBgm = function(bgm, pos) {
    this._currentBgm = {
        name: bgm.name,
        volume: bgm.volume,
        pitch: bgm.pitch,
        pan: bgm.pan,
        pos: pos
    };
};

AudioManager.saveBgm = function() {
    if (this._currentBgm) {
        var bgm = this._currentBgm;
        return {
            name: bgm.name,
            volume: bgm.volume,
            pitch: bgm.pitch,
            pan: bgm.pan,
            pos: this._bgmBuffer ? this._bgmBuffer.seek() : 0
        };
    } else {
        return this.makeEmptyAudioObject();
    }
};