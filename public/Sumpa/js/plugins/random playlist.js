/*:
 * @target MZ
 * @plugindesc Cycles through a BGM playlist randomly without immediate repeats.
 * @author Gemini
 *
 * @help
 * ============================================================================
 * Usage
 * ============================================================================
 *
 * To start playing from a playlist, use the following Script Call in an event:
 *
 * PlaylistManager.play(['SongName1', 'SongName2', 'SongName3']);
 *
 * You can also specify volume, pitch, and pan:
 *
 * PlaylistManager.play(['Song1', 'Song2'], 90, 100, 0);
 *
 * Note: Do not include the file extension (.ogg) in the song names.
 */

var PlaylistManager = PlaylistManager || {};

// Internal state to track the queue
PlaylistManager._queue = [];
PlaylistManager._currentListId = "";

PlaylistManager.play = function(bgmList, vol, pitch, pan) {
    // defaults
    vol = vol || 90;
    pitch = pitch || 100;
    pan = pan || 0;

    // Create a unique ID for this specific list of songs to detect context changes
    var listId = bgmList.sort().join();

    // If the list changed or the queue is empty, refill and shuffle
    if (this._currentListId !== listId || this._queue.length === 0) {
        this._currentListId = listId;
        this._queue = [...bgmList]; // Copy the list
        this._shuffle(this._queue); // Shuffle the new deck
    }

    // Pull the next song from the deck
    var nextSong = this._queue.pop();

    // Play the BGM
    AudioManager.playBgm({
        name: nextSong,
        volume: vol,
        pitch: pitch,
        pan: pan
    });
};

// Fisher-Yates Shuffle Algorithm
PlaylistManager._shuffle = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};