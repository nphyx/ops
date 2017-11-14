/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["playNote"] = playNote;
/* harmony export (immutable) */ __webpack_exports__["playNoise"] = playNoise;

// Fix up prefixing

window.AudioContext = window.AudioContext || window.webkitAudioContext;
const SILENT = 0.000001;
var ctx = new AudioContext();
var volume = 0.3;
var notes = {
  "C0": 16.35,
  "C#0": 17.32,
  "Db0": 17.32,
  "D0": 18.35,
  "D#0": 19.45,
  "Eb0": 19.45,
  "E0": 20.60,
  "F0": 21.83,
  "F#0": 23.12,
  "Gb0": 23.12,
  "G0": 24.50,
  "G#0": 25.96,
  "Ab0": 25.96,
  "A0": 27.50,
  "A#0": 29.14,
  "Bb0": 29.14,
  "B0": 30.87,
  "C1": 32.70,
  "C#1": 34.65,
  "Db1": 34.65,
  "D1": 36.71,
  "D#1": 38.89,
  "Eb1": 38.89,
  "E1": 41.20,
  "F1": 43.65,
  "F#1": 46.25,
  "Gb1": 46.25,
  "G1": 49.00,
  "G#1": 51.91,
  "Ab1": 51.91,
  "A1": 55.00,
  "A#1": 58.27,
  "Bb1": 58.27,
  "B1": 61.74,
  "C2": 65.41,
  "C#2": 69.30,
  "Db2": 69.30,
  "D2": 73.42,
  "D#2": 77.78,
  "Eb2": 77.78,
  "E2": 82.41,
  "F2": 87.31,
  "F#2": 92.50,
  "Gb2": 92.50,
  "G2": 98.00,
  "G#2": 103.83,
  "Ab2": 103.83,
  "A2": 110.00,
  "A#2": 116.54,
  "Bb2": 116.54,
  "B2": 123.47,
  "C3": 130.81,
  "C#3": 138.59,
  "Db3": 138.59,
  "D3": 146.83,
  "D#3": 155.56,
  "Eb3": 155.56,
  "E3": 164.81,
  "F3": 174.61,
  "F#3": 185.00,
  "Gb3": 185.00,
  "G3": 196.00,
  "G#3": 207.65,
  "Ab3": 207.65,
  "A3": 220.00,
  "A#3": 233.08,
  "Bb3": 233.08,
  "B3": 246.94,
  "C4": 261.63,
  "C#4": 277.18,
  "Db4": 277.18,
  "D4": 293.66,
  "D#4": 311.13,
  "Eb4": 311.13,
  "E4": 329.63,
  "F4": 349.23,
  "F#4": 369.99,
  "Gb4": 369.99,
  "G4": 392.00,
  "G#4": 415.30,
  "Ab4": 415.30,
  "A4": 440.00,
  "A#4": 466.16,
  "Bb4": 466.16,
  "B4": 493.88,
  "C5": 523.25,
  "C#5": 554.37,
  "Db5": 554.37,
  "D5": 587.33,
  "D#5": 622.25,
  "Eb5": 622.25,
  "E5": 659.26,
  "F5": 698.46,
  "F#5": 739.99,
  "Gb5": 739.99,
  "G5": 783.99,
  "G#5": 830.61,
  "Ab5": 830.61,
  "A5": 880.00,
  "A#5": 932.33,
  "Bb5": 932.33,
  "B5": 987.77,
  "C6": 1046.50,
  "C#6": 1108.73,
  "Db6": 1108.73,
  "D6": 1174.66,
  "D#6": 1244.51,
  "Eb6": 1244.51,
  "E6": 1318.51,
  "F6": 1396.91,
  "F#6": 1479.98,
  "Gb6": 1479.98,
  "G6": 1567.98,
  "G#6": 1661.22,
  "Ab6": 1661.22,
  "A6": 1760.00,
  "A#6": 1864.66,
  "Bb6": 1864.66,
  "B6": 1975.53,
  "C7": 2093.00,
  "C#7": 2217.46,
  "Db7": 2217.46,
  "D7": 2349.32,
  "D#7": 2489.02,
  "Eb7": 2489.02,
  "E7": 2637.02,
  "F7": 2793.83,
  "F#7": 2959.96,
  "Gb7": 2959.96,
  "G7": 3135.96,
  "G#7": 3322.44,
  "Ab7": 3322.44,
  "A7": 3520.00,
  "A#7": 3729.31,
  "Bb7": 3729.31,
  "B7": 3951.07,
  "C8": 4186.01
};

function createNoise() {
  var last = 0.0;
  var bufferSize = 4096;
  var noise = ctx.createScriptProcessor(bufferSize, 1, 1);
  noise.onaudioprocess = function (e) {
    var output = e.outputBuffer.getChannelData(0);
    var i, n;
    var white;
    var scale = 32;
    for (i = 0; i < bufferSize; i += scale) {
      white = Math.random() * 2 - 1;
      for (n = 0; n < scale; n++) output[i + n] = (last + 1.6 * white) / 2.6 * (1.0 + volume);
      last = output[i];
    }
    scale *= 8;
    for (i = 0; i < bufferSize; i += scale) {
      white = Math.random() * 2 - 1;
      for (n = 0; n < scale; n++) output[i + n] += white * 0.3;
    }
  };
  return noise;
}

function startSound(o, g, time) {
  o.start(0);
  g.gain.value = volume;
}

function stopSound(o, g, time) {
  g.gain.value = SILENT;
  o.stop(0);
}

function playNote(note, type, start = 0, stop = 1) {
  var o = ctx.createOscillator();
  var g = ctx.createGain();
  g.gain.value = SILENT;
  g.gain.exponentialRampToValueAtTime(volume, ctx.currentTime + start);
  o.connect(g);
  g.connect(ctx.destination);

  var frq = notes[note];
  if (frq) {
    o.type = type;
    o.frequency.value = frq;
    setTimeout(startSound.bind(null, o, g), start * 1000);
    setTimeout(stopSound.bind(null, o, g), stop * 1000);
  }
}

function playNoise(start, stop, fadeIn, fadeOut) {
  if (start === undefined) start = 0;
  if (stop === undefined) stop = 1;
  var o = createNoise();
  var g = ctx.createGain();
  var currentTime = ctx.currentTime;
  o.connect(g);
  g.connect(ctx.destination);
  g.gain.setValueAtTime(0, currentTime);
  g.gain.linearRampToValueAtTime(volume, currentTime + fadeIn);
  setTimeout(() => {
    g.gain.linearRampToValueAtTime(0.0, currentTime + fadeOut);
    setTimeout(() => o.disconnect(), fadeOut * 1000 + 100);
  }, (fadeIn + (stop - fadeOut)) * 1000);
}

const sounds = {
  plus: function () {
    playNote("A4", "triangle", 0, 0.05);
    playNote("E5", "triangle", 0.05, 0.1);
  },
  minus: function () {
    playNote("E5", "triangle", 0, 0.05);
    playNote("A4", "triangle", 0.05, 0.1);
  },
  lshift: function () {
    playNote("E5", "triangle", 0, 0.05);
    playNote("E5", "triangle", 0.07, 0.12);
  },
  rshift: function () {
    playNote("A4", "triangle", 0, 0.05);
    playNote("A4", "triangle", 0.07, 0.12);
  },
  bump: function () {
    playNote("C3", "square", 0, 0.1);
  },
  unbump: function () {
    playNote("G2", "sawtooth", 0, 0.1);
    playNote("G2", "square", 0, 0.1);
  },
  fill: function () {
    playNoise(0.0, 0.6, 0.5, 0.6);
    playNote("G2", "sawtooth", 0.2, 0.32);
    playNote("A5", "sine", 0.2, 0.25);
    playNote("E6", "sine", 0.27, 0.32);
  },
  flush: function () {
    playNoise(0.0, 0.6, 0.5, 0.6);
    playNote("G2", "sawtooth", 0.2, 0.32);
    playNote("E6", "sine", 0.2, 0.25);
    playNote("A5", "sine", 0.27, 0.32);
  },

  crash: function () {
    playNoise(0.0, 1.8, 0.2, 1.6);
  },
  complete: function () {
    var i = 0.1; // interval
    var g = 0.01; // gap between notes
    var t = 0; // time
    playNote("C4", "square", t, t + i);
    playNote("C4", "square", t + i + g, t + i * 2 + g * 2);
    playNote("C3", "sawtooth", t, t + i * 2 + g * 2);
    t += i * 2 + g * 2;

    playNote("E5", "square", t, t + i);
    playNote("F5", "square", t + i + g, t + i * 3 + g * 2);
    playNote("E4", "sawtooth", t, t + i * 3 + g * 2);
  },
  glitch: function () {
    playNoise(0.0, 1.36, 0.1, 1.35);
    var i = 0.1; // interval
    var g = 0.01; // gap between notes
    var t = 0; // time
    playNote("F3", "square", t, t + i);
    playNote("C4", "square", t + i + g, t + i * 2 + g * 2);
    playNote("E4", "sawtooth", t, t + i * 2 + g * 2);
    t += i * 2 + g * 2;

    playNote("D#4", "square", t, t + i);
    playNote("C5", "square", t + i + g, t + i * 3 + g * 2);
    playNote("F5", "sawtooth", t, t + i * 3 + g * 2);
  },
  endGame: function () {
    var i = 0.1; // interval
    var g = 0.01; // gap between notes
    var t = 0; // time
    playNote("C4", "square", t, t + i);
    playNote("C4", "square", t + i + g, t + i * 2 + g * 2);
    playNote("C3", "sawtooth", t, t + i * 2 + g * 2);
    t += i * 2 + g * 2;

    playNote("E5", "square", t, t + i);
    playNote("F5", "square", t + i + g, t + i * 3 + g * 2);
    playNote("E4", "sawtooth", t, t + i * 3 + g * 2);
    t += i * 2 + g * 2;

    playNote("C4", "square", t, t + i);
    playNote("C4", "square", t + i + g, t + i * 2 + g * 2);
    playNote("C3", "sawtooth", t, t + i * 2 + g * 2);
    t += i * 2 + g * 2;

    playNote("E5", "square", t, t + i);
    playNote("F5", "square", t + i + g, t + i * 3 + g * 2);
    playNote("E4", "sawtooth", t, t + i * 3 + g * 2);
  }
};
/* harmony export (immutable) */ __webpack_exports__["sounds"] = sounds;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ops_display__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ops_controls__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ops_levels__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ops_audio__ = __webpack_require__(0);






const ops = {
	display: __WEBPACK_IMPORTED_MODULE_0__ops_display__,
	controls: __WEBPACK_IMPORTED_MODULE_1__ops_controls__,
	levels: __WEBPACK_IMPORTED_MODULE_2__ops_levels__["a" /* levelData */],
	audio: __WEBPACK_IMPORTED_MODULE_3__ops_audio__
};
/* harmony export (immutable) */ __webpack_exports__["ops"] = ops;

window.ops = ops;
window.addEventListener("load", function () {
	const MAX_OVER_PAR = 5;
	const DEBUG = true;
	const LEVEL_END_DELAY = 2000;

	var state;
	var levelsCleared = 0;
	var glitchesCleared = 0;
	var glitchesFound = 0;
	var glitchIntervals = [3, 5, 8, 13, 21, 24, 55, 89, 144, 233];
	var glitched = false;
	var glitchExponentBase = 1.5;
	var score = 0;
	var paused = false;
	var levelStarting = true;
	var complete = false;
	var gameOver = false;
	var currentLevel = __WEBPACK_IMPORTED_MODULE_2__ops_levels__["a" /* levelData */][0];currentLevel.name = 1;
	var crashed = false;
	var modKey = 0;
	var lastOp = { code: false, id: "" };
	var designMode = false;

	// finds the difference between the par score and the current score
	function parScoreDelta() {
		return score - levelsCleared * 10;
	}

	function whichGlitch() {
		return glitchIntervals[glitchesFound % glitchIntervals.length];
	}

	/**
  * Creates a new level state from level data.
  * @param {object} level data
  * @param {string} name level name
  * @return {object}
  */
	function newState(level) {
		var data = new Uint32Array(8);
		var state = {
			data: data,
			currentLevel: currentLevel
		};
		Object.defineProperties(state, {
			register: { get: () => data[0], set: val => {
					val = val | 0;data[0] = val;
				} },
			flip: { get: () => data[1], set: val => {
					val = val | 0;data[1] = val;
				} },
			ops: { get: () => data[2], set: val => {
					val = val | 0;data[2] = val;
				} },
			par: { get: () => data[3], set: val => {
					val = val | 0;data[3] = val;
				} },
			level: { get: () => data[4], set: val => {
					val = val | 0;data[4] = val;
				} },
			width: { get: () => data[5], set: val => {
					val = val | 0;data[5] = val;
				} },
			height: { get: () => data[6], set: val => {
					val = val | 0;data[6] = val;
				} },
			target: { get: () => data[7], set: val => {
					val = val | 0;data[7] = val;
				} }
		});
		complete = false;
		state.register = level.register;
		state.target = level.target;
		state.flip = 0;
		// apply special blocks to target to save level design headaches
		if (level.holes) state.target ^= state.target & level.holes;
		if (level.burns) state.target |= level.burns;
		if (level.shorts) {
			if (state.target & 1) state.target |= currentLevel.shorts;else state.target ^= state.target & currentLevel.shorts;
		}
		state.par = level.par;
		state.name = level.name;
		state.width = level.width;
		state.height = level.height;
		return state;
	}

	function pause() {
		paused = true;
	}

	function unPause() {
		paused = false;
	}

	// trims a value such that its bits all fit within the grid 
	function trim(val, width, height) {
		return val & Math.pow(2, width * height) - 1;
	}

	function trimStateFields() {
		state.register = trim(state.register, currentLevel.width, currentLevel.height);
		state.target = trim(state.target, currentLevel.width, currentLevel.height);
		state.flip = trim(state.flip, currentLevel.width, currentLevel.height);
	}

	function applyFeatures() {
		if (currentLevel.holes !== undefined) state.register ^= state.register & currentLevel.holes;
		if (currentLevel.burns !== undefined) state.register |= currentLevel.burns;
		if (currentLevel.shorts !== undefined) {
			if (state.register & 1) state.register |= currentLevel.shorts;else state.register ^= state.register & currentLevel.shorts;
		}
	}

	function createGlitchLevel() {
		var seed = parScoreDelta() + levelsCleared + glitchesCleared + whichGlitch();
		var tmp = 0;
		var width = Math.max(3, (seed & 5) + 1);
		var height = Math.max(2, (seed & 5 ^ seed % 2) + 1);

		var register = trim(state.register ^ seed | seed << 4 | (seed << 9) + seed, width, height);
		var target = trim(state.target | seed ^ seed << 6 | (seed << 16) + seed, width, height);
		if (target == register) register &= 19029;
		if (target == register) register = 0; // just in case that's somehow the same!
		var level = {
			width: width,
			height: height,
			name: seed + 160,
			target: target,
			register: register,
			par: 0
		};
		level.par = level.target.toString(2).split("").reduce((prev, cur) => {
			return parseInt(prev + parseInt(cur));
		}, 0) * 2;
		return level;
	}

	function setupLevel() {
		crashed = false;
		modKey = 0;
		unPause();
		state = newState(currentLevel);
		levelStarting = true;
		applyFeatures();
		__WEBPACK_IMPORTED_MODULE_1__ops_controls__["revealKeys"](currentLevel.revealed);
		levelStarting = false;
	}

	function endGame() {
		state.ops = 0;
		currentLevel.par = 0;
		currentLevel.name = "END";
		gameOver = true;
		__WEBPACK_IMPORTED_MODULE_3__ops_audio__["sounds"].endGame();
	}

	function crash() {
		__WEBPACK_IMPORTED_MODULE_3__ops_audio__["sounds"].crash();
		crashed = true;
		pause();
		score -= 3;
		setTimeout(function () {
			currentLevel = __WEBPACK_IMPORTED_MODULE_2__ops_levels__["a" /* levelData */][levelsCleared];
			currentLevel.name = levelsCleared + 1;
			glitched = false;
			setupLevel();
		}, LEVEL_END_DELAY);
	}

	function completeLevel() {
		complete = true;
		if (glitched) {
			glitched = false;
			glitchesCleared++;
		} else {
			levelsCleared++;
			score += Math.max(0, 10 - (state.ops - state.par));
		}
		if (parScoreDelta() > whichGlitch()) {
			glitched = true;
			glitchesFound++;
			__WEBPACK_IMPORTED_MODULE_3__ops_audio__["sounds"].glitch();
		} else {
			if (__WEBPACK_IMPORTED_MODULE_2__ops_levels__["a" /* levelData */][levelsCleared] !== undefined) {
				__WEBPACK_IMPORTED_MODULE_3__ops_audio__["sounds"].complete();
			} else {
				return endGame();
			}
		}
		setTimeout(function () {
			if (glitched) {
				currentLevel = createGlitchLevel();
			} else {
				currentLevel = __WEBPACK_IMPORTED_MODULE_2__ops_levels__["a" /* levelData */][levelsCleared];
				currentLevel.name = levelsCleared + 1;
			}
			setupLevel();
		}, LEVEL_END_DELAY);
	}

	function checkComplete() {
		if (designMode) return;
		if (state.register === state.target) {
			pause();
			setTimeout(completeLevel, LEVEL_END_DELAY / 4);
			return 1;
		} else if (state.ops >= state.par + MAX_OVER_PAR) {
			crash();
			return 1;
		}
		return 0;
	}

	function opCall(control) {
		if (paused) return;
		var { code, id, op, mod, sound, modSound } = control;
		var oldRegister = state.register;
		lastOp = control;
		// design mode needs updating
		state.designMode = designMode;
		if (modKey) {
			mod(state);
			modSound();
			lastOp.modded = true;
		} else {
			op(state);
			sound();
			lastOp.modded = false;
		}
		state.flip = state.register ^ oldRegister;
		applyFeatures();
		trimStateFields();
		state.ops++;
		checkComplete(); // check before incrementing
		// clear the flips now so they don't flicker
		state.flip = state.register;
		return false; // prevent bubbling for click events
	}

	function setMod(val) {
		modKey = val;
	}

	function toggleDesignMode() {
		if (designMode === true) {
			designMode = false;
			return;
		}
		designMode = true;
		setupLevel();
	}

	function bindKeys() {
		var btn;
		window.addEventListener("keydown", function (event) {
			if (event.keyCode === 16) setMod(1);
			if (__WEBPACK_IMPORTED_MODULE_1__ops_controls__["validKeys"].indexOf(event.keyCode) !== -1) {
				event.preventDefault();
				btn = __WEBPACK_IMPORTED_MODULE_1__ops_controls__["getControlByKeyCode"](event.keyCode);
				btn.active = true;
				return false;
			}
		});
		window.addEventListener("keyup", function (event) {
			if (event.keyCode === 16) setMod(0);
			if (event.keyCode === 68) toggleDesignMode();
			if (__WEBPACK_IMPORTED_MODULE_1__ops_controls__["validKeys"].indexOf(event.keyCode) !== -1) {
				event.preventDefault();
				btn = __WEBPACK_IMPORTED_MODULE_1__ops_controls__["getControlByKeyCode"](event.keyCode);
				opCall(btn);
				btn.active = false;
				return false;
			}
		});
	}

	ops.logoInfo = function () {
		return {
			glitched: false,
			levelsCleared: 0,
			glitchesCleared: 0,
			glitchesFound: 0,
			currentLevel: {
				par: 5, width: 4, height: 4,
				target: 0b0100100000010010,
				holes: 0b0001000000001000,
				shorts: 0b0000000110000000,
				burns: 0b0010000000000100,
				register: 0,
				revealed: 0
			},
			gameOver: 0,
			crashed: 0,
			levelStarting: 0,
			score: 0,
			ops: 0,
			register: 0b1100100100010011,
			complete: 0,
			flip: 0,
			paused: false,
			modKey: false,
			lastOp: undefined,
			designMode: false
		};
	};

	ops.stateInfo = function () {
		return {
			glitched,
			levelsCleared,
			glitchesCleared,
			glitchesFound,
			currentLevel,
			gameOver,
			crashed,
			levelStarting,
			score,
			ops: state.ops,
			register: state.register,
			complete: complete,
			flip: state.flip,
			paused: paused,
			modKey: modKey,
			lastOp: lastOp,
			designMode: designMode
		};
	};

	if (DEBUG) {
		ops.debug = function () {
			return {
				state: state,
				levelsCleared: levelsCleared,
				glitchesCleared: glitchesCleared,
				glitched: glitched,
				glitchIntervals: glitchIntervals,
				score: score,
				parDelta: parScoreDelta(),
				modKey: modKey,
				currentLevel
			};
		};

		ops.skip = function (level) {
			levelsCleared = level - 1;
			currentLevel = __WEBPACK_IMPORTED_MODULE_2__ops_levels__["a" /* levelData */][levelsCleared];
			currentLevel.name = level;
			score = levelsCleared * 10;
			setupLevel();
		};

		ops.glitch = function (delta, lCleared, gCleared) {
			glitched = true;
			levelsCleared = lCleared;
			glitchesCleared = gCleared;
			score = levelsCleared * 10 + delta;
			currentLevel = __WEBPACK_IMPORTED_MODULE_2__ops_levels__["a" /* levelData */][levelsCleared];
			currentLevel.name = levelsCleared + 1;
			setupLevel();
			currentLevel = createGlitchLevel();
			setupLevel();
		};
	}

	ops.calcFinalScore = function () {
		return score + Math.ceil(score * (Math.pow(glitchExponentBase, glitchesCleared) - 1));
	};

	ops.startGame = function () {
		setupLevel();
		bindKeys();
	};
	__WEBPACK_IMPORTED_MODULE_0__ops_display__["init"](ops);
	__WEBPACK_IMPORTED_MODULE_0__ops_display__["setup"]();
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ops_display_2d__ = __webpack_require__(3);



const init = __WEBPACK_IMPORTED_MODULE_0__ops_display_2d__["a" /* init */];
/* harmony export (immutable) */ __webpack_exports__["init"] = init;

const setup = __WEBPACK_IMPORTED_MODULE_0__ops_display_2d__["c" /* setup */];
/* harmony export (immutable) */ __webpack_exports__["setup"] = setup;

const render = __WEBPACK_IMPORTED_MODULE_0__ops_display_2d__["render"];
/* harmony export (immutable) */ __webpack_exports__["render"] = render;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = setup;
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ops_display_2d_color__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ops_display_2d_text__ = __webpack_require__(5);


// useful global constants

const { floor, random, max } = Math;


const AUTO_FULLSCREEN = false;
const SCALE = 1;
const FPS = 60;

// global variables
var pal; // color palette
var ops; // game data object
var info; // game info object
var controls; // game controls object
var body; // html document body
var fullscreen = false; // whether game is in fullscreen mode
var frameCount = 0; // running total of drawn frames
var animating = false; // whether game is currently running animation loop
var prerollStage = 0;
var prerollStep = -1;
var prerollLine = "";
var prerollLinePos = 1;

// display state variables
var PX = 1; // pixel size
var LW = 4; // relative width of lines
var OR = 0; // orientation (0 = landscape, 1 = portrait)
var W = 0; // screen width
var H = 0; // screen height
var BW = 0; // draw buffer width
var BH = 0; // draw buffer height
var RAY = PX; // diameter of ray blip
var PAUSE = false; // whether game is paused
var GAME_STARTED = false; // whether game has started (otherwise display splash)
var TEXT_MODE = true; // preroll mode
var TEXT_FINAL_ROLL = 0; // final rolloff of preroll text

// canvases
var compositeCanvas; // temporary draw buffer for compositing
var gameScreen; // game screen canvas
var interlaceBufferCanvases = Array(2); // canvases for alternating draw interlaceBufferContexts

// patterns and gradients
var interlaceBufferMasks = Array(2); // draw buffer masks
var gradients; // GradientTexture object
var effectsTexture;

// rendering contexts
var screenCtx; // current rendering context
var compositeCtx; // temporary context for compositing
var interlaceBufferContexts = Array(2); // draw buffer contexts

var startTime;
var gridData = {};

/* bit types
const TYPE_R = 0; // register
const TYPE_T = 1; // target
const TYPE_H = 2; // hole
const TYPE_B = 3; // burn
const TYPE_S = 4; // short
const TYPE_G = 5; // gap
*/

//const FPS_INTERVAL = 1000/FPS;

function evenNumber(n) {
	return n >> 1 << 1;
}

// nearest power of two
function npot(n) {
	var x = 1;
	if (n === 1) return n;
	n--;
	while (x < 16) {
		n |= n >> x;
		x <<= 1;
	}
	n++;
	return n;
}

const GRAD_HOLE = 0;
const GRAD_HOLE_FILL = 1;
const GRAD_BURN = 2;
const GRAD_BURN_FILL = 3;
const GRAD_SHORT = 4;
const GRAD_TARGET = 5;
const GRAD_REGISTER = 6;
const GRAD_COMPLETE = 7;

function makeGradients() {
	gradients = new __WEBPACK_IMPORTED_MODULE_0__ops_display_2d_color__["b" /* GradientTexture */]({ frames: FPS, gradients: [{ type: "flicker", speed: 1, colors: [pal.colorDim, pal.colorEmpty, pal.colorDark] }, { type: "flicker", speed: 1, colors: [pal.colorDark, pal.colorDim, pal.colorEmpty] }, { type: "flicker", speed: 1, colors: [pal.colorBright, pal.colorBlinding, pal.colorMid] }, { type: "flicker", speed: 1, colors: [pal.colorMid, pal.colorBright, pal.colorBlinding] }, { type: "flicker", speed: 1, colors: [pal.colorMid, pal.colorBright, pal.colorBlinding] }, { type: "pulse", speed: 1, colors: [pal.colorDim, pal.colorMid] }, { type: "pulse", speed: 1, colors: [pal.colorBright, pal.colorBlinding] }, { type: "pulse", speed: 3, colors: [pal.colorMid, pal.colorBlinding] }] });
}

function makeTextures() {
	var maskCanvas,
	    maskCtx,
	    scanCanvas,
	    scanlinePattern,
	    scanTexCtx,
	    scanCtx,
	    i = 0;
	var vingette, vingColors, color;
	var maskStyles = [new __WEBPACK_IMPORTED_MODULE_0__ops_display_2d_color__["a" /* Color */](255, 255, 255, 0.01).asRGBA, new __WEBPACK_IMPORTED_MODULE_0__ops_display_2d_color__["a" /* Color */](255, 255, 255, 0.99).asRGBA];
	for (i = 0; i < 2; ++i) {
		maskCanvas = document.createElement("canvas");
		maskCanvas.width = 1;
		maskCanvas.height = 2;
		maskCtx = maskCanvas.getContext("2d");
		maskCtx.fillStyle = maskStyles[i];
		maskCtx.fillRect(0, 0, 1, 1);
		maskCtx.fillStyle = maskStyles[i == 1 ? 0 : 1];
		maskCtx.fillRect(0, 1, 1, 1);
		interlaceBufferMasks[i] = maskCtx.createPattern(maskCanvas, "repeat");
	}
	scanCanvas = document.createElement("canvas");
	scanCanvas.width = 1;
	scanCanvas.height = LW;
	effectsTexture = document.createElement("canvas");
	effectsTexture.width = W;
	effectsTexture.height = H;
	scanCtx = scanCanvas.getContext("2d");
	scanTexCtx = effectsTexture.getContext("2d");
	// vingette pattern
	vingette = scanTexCtx.createRadialGradient(W * 0.5, H * 0.5, (OR ? H : W) * 0.25, W * 0.5, H * 0.5, OR ? H : W);
	vingColors = [pal.colorBright.copy(), pal.colorDark.copy()];
	vingColors[0].a = 0.7;
	vingColors[1].a = 0.7;
	vingette.addColorStop(0, vingColors[0].asRGBA);
	vingette.addColorStop(1, vingColors[1].asRGBA);
	scanTexCtx.fillStyle = vingette;
	scanTexCtx.fillRect(0, 0, W, H);

	// scanline patterns
	color = pal.colorEmpty.copy();
	color.a = 0.5;
	scanCtx.fillStyle = color.asRGBA;
	scanCtx.fillRect(0, LW - 1, 1, 1);
	color.a = 0.125;
	scanCtx.fillStyle = color.asRGBA;
	scanCtx.fillRect(0, LW - 2, 1, 1);
	scanCtx.fillRect(0, 0, 1, 1);
	scanlinePattern = scanCtx.createPattern(scanCanvas, "repeat");
	scanTexCtx.fillStyle = scanlinePattern;
	scanTexCtx.fillRect(0, 0, W, H);
}

function setAliasing(ctx, state) {
	if (ctx.imageSmoothingEnabled !== undefined) {
		ctx.imageSmoothingEnabled = state;
		return;
	} else if (ctx.mozImageSmoothingEnabled !== undefined) {
		ctx.mozImageSmoothingEnabled = state;
	} else if (ctx.webkitImageSmoothingEnabled !== undefined) {
		ctx.webkitImageSmoothingEnabled = state;
	} else if (ctx.msImageSmoothingEnabled !== undefined) {
		ctx.msImageSmoothingEnabled = state;
	}
}

function createBuffers() {
	for (let i = 0; i < 2; ++i) {
		interlaceBufferCanvases[i] = document.createElement("canvas");
		interlaceBufferCanvases[i].width = BW;
		interlaceBufferCanvases[i].height = BH;
		interlaceBufferContexts[i] = interlaceBufferCanvases[i].getContext("2d");
	}
	compositeCanvas = document.createElement("canvas");
	compositeCanvas.width = BW;
	compositeCanvas.height = BH;
	compositeCtx = compositeCanvas.getContext("2d");
}

// from MDN
function toggleFullScreen() {
	if (fullscreen) return;
	fullscreen = true;
	if (!document.fullscreenElement && // alternative standard method
	!document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
		// current working methods
		if (document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if (document.documentElement.msRequestFullscreen) {
			document.documentElement.msRequestFullscreen();
		} else if (document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if (document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
	}
}

function startGame() {
	GAME_STARTED = true;
	ops.startGame();
	body.removeEventListener("click", startGame);
	body.classList.remove("start");
	if (AUTO_FULLSCREEN) toggleFullScreen();
}

function pressEnter(event) {
	if (event.keyCode === 13) {
		document.removeEventListener("keyup", pressEnter);
		startGame();
	}
}

function fullscreenOff(ev) {
	ev.preventDefault();
	if (document.webkitIsFullScreen || document.mozIsFullScreen || document.msIsFullScreen) fullscreen = true;else fullscreen = false;
	return false;
}

function updateRatio() {
	W = evenNumber(document.body.clientWidth);
	H = evenNumber(document.body.clientHeight);
	OR = W > H ? 0 : 1;
	PX = npot((OR ? W : H) / 240);
	W = W - W % PX;
	H = H - H % PX;
	gameScreen.width = W;
	gameScreen.height = H;
	BW = ~~(W / PX);
	BH = ~~(H / PX);
	RAY = PX * 2;
	makeTextures();
	createBuffers();
}

function getBit(field, pos) {
	return field >> pos & 1;
}

function calcOps() {
	return (info.currentLevel.par - info.ops).toString();
}

/**
 * Draws the border around the game screen.
 */
function drawBorder(ctx, w, h, yStart) {
	var WMOD, HMOD;
	WMOD = w % 2;
	HMOD = h % 2;
	ctx.strokeStyle = pal.stringMid;
	ctx.lineWidth = LW;
	ctx.strokeRect(LW, yStart + LW, w - LW * 2 - WMOD, yStart + h - LW * 2 - HMOD);
}

/**
 * Draw a triangle with corners at a, b, c, stroke color, and fill color.
 * @param {vertex} a 2d vertex for first corner
 * @param {vertex} b 2d vertex for second corner
 * @param {vertex} c 2d vertex for third corner
 * @param {color|false} stroke 
 * @param {color|false} fill 
 */
function drawTriangle(ctx, a, b, c, fill) {
	ctx.lineWidth = LW;
	ctx.beginPath();
	ctx.moveTo(a[0], a[1]);
	ctx.lineTo(b[0], b[1]);
	ctx.lineTo(c[0], c[1]);
	ctx.fillStyle = fill;
	ctx.fill();
}

const drawButton = {
	"opAdd": function (ctx, cols, rows, size, fill) {
		var half = size / 2,
		    x = cols[1],
		    y = rows[0],
		    a = [x + LW * half, y],
		    b = [x, y + LW * size],
		    c = [x + LW * size, y + LW * size];
		drawTriangle(ctx, a, b, c, fill);
	},
	"opSub": function (ctx, cols, rows, size, fill) {
		var half = size / 2,
		    x = cols[1],
		    y = rows[1],
		    a = [x, y],
		    b = [x + LW * half, y + LW * size],
		    c = [x + LW * size, y];
		drawTriangle(ctx, a, b, c, fill);
	},
	"opLShift": function (ctx, cols, rows, size, fill) {
		var half = size / 2,
		    x = cols[0],
		    y = rows[1],
		    a = [x, y + LW * half],
		    b = [x + LW * size, y + LW * size],
		    c = [x + LW * size, y];
		drawTriangle(ctx, a, b, c, fill);
	},
	"opRShift": function (ctx, cols, rows, size, fill) {
		var half = size / 2,
		    x = cols[2],
		    y = rows[1],
		    a = [x, y],
		    b = [x + LW * size, y + LW * half],
		    c = [x, y + LW * size];
		drawTriangle(ctx, a, b, c, fill);
	},
	"opBump": function (ctx, cols, rows, size, fill) {
		var x = cols[0],
		    y = rows[2],
		    w = LW * size * 3 + LW * 2,
		    h = LW * size / 2;
		ctx.fillStyle = fill;
		ctx.fillRect(x, y, w, h);
	}
};

function drawGlitches(ctx, w, h) {
	var x,
	    y,
	    i = 0,
	    cleared = info.glitchesCleared;
	var colorAt = gradients.getColorAtTime.bind(gradients);
	var colors = [colorAt(GRAD_BURN, frameCount), colorAt(GRAD_HOLE, frameCount), colorAt(GRAD_REGISTER, frameCount), colorAt(GRAD_SHORT, frameCount)];
	var colorLength = colors.length;

	for (; i < cleared; ++i) {
		x = evenNumber(random() * w);
		y = evenNumber(random() * h);
		ctx.fillStyle = colors[i % colorLength];
		ctx.fillRect(x, y, LW, LW);
	}
}

function drawControls(ctx) {
	var size = OR ? 6 : 5,
	    fill,
	    off = OR ? (BW + LW * size * 5) / 2 : BW,
	    cols = [off - LW * size * 4 - LW * 2, off - LW * size * 3 - LW, off - LW * size * 2],
	    rows = [BH - LW * size * 3 - LW * 3, BH - LW * size * 2 - LW * 2, BH - LW * size - LW];
	controls.buttons.forEach(btn => {
		if (btn.revealed && typeof drawButton[btn.id] !== "undefined") {
			fill = btn.active ? pal.stringBright : pal.stringMid;
			drawButton[btn.id](ctx, cols, rows, size, fill);
		}
	});
}

function calcFPS() {
	var now = Date.now();
	return ((now - startTime) / frameCount).toPrecision(2);
}

function makeScoreboardText() {
	var name = info.currentLevel.name;
	return "score:" + info.score + " level:" + (info.glitched ? String.fromCharCode(name) : name) + " ops:" + calcOps() + " FPS:" + calcFPS();
}

function drawScoreboard(ctx) {
	var text = makeScoreboardText(),
	    fontSize = 8;
	ctx.font = fontSize + "px 'Press Start 2P'";
	ctx.fillStyle = pal.stringMid;
	ctx.textAlign = "center";
	ctx.fillText(text, evenNumber(BW / 2), LW * 3 + fontSize);
}

function drawBitOutline(ctx, bit, xOff, yOff, bitSize, color) {
	ctx.strokeStyle = color;
	ctx.strokeRect(xOff - LW, yOff - LW, -bitSize + LW * 2, -bitSize + LW * 2);
}

function drawBitFill(ctx, bit, xOff, yOff, bitSize, color) {
	ctx.strokeStyle = color;
	ctx.strokeRect(xOff - LW * 2, yOff - LW * 2, -bitSize + LW * 4, -bitSize + LW * 4);
}

/**
 * Draws a single bit (cell).
 * @param {CanvasRenderingContext2D} ctx framebuffer being drawn to
 * @param {int} bit bit number
 * @param {int} xOff bit x offset (calculated in drawGrid)
 * @param {int} yOff bit y offset (calculated in drawGrid)
 * @param {string} borderStyle bit outer border color in RGBA format
 * @param {int} bit dimensions in pixels
 */
function drawBit(ctx, bit, xOff, yOff, borderStyle, bitSize) {
	var target = getBit(info.currentLevel.target, bit);
	var burn = getBit(info.currentLevel.burns, bit);
	var hole = getBit(info.currentLevel.holes, bit);
	var shorted = getBit(info.currentLevel.shorts, bit);
	var register = getBit(info.register, bit);
	var outline = pal.stringEmpty;
	var fill = pal.stringEmpty;
	var colorAt = gradients.getColorAtTime.bind(gradients);
	var glitchMod = 0;

	ctx.lineWidth = LW;
	ctx.strokeStyle = borderStyle;
	// handle glitch mode
	if (info.glitched && info.complete) {
		glitchMod = bit % 2 * 2 * (frameCount % (FPS / 4 + bit % 2 * 2) % 2 ? -1 : 1);
		ctx.strokeStyle = colorAt(GRAD_BURN, frameCount);
		ctx.fillStyle = colorAt(GRAD_BURN, frameCount);
		ctx.fillRect(xOff + glitchMod, yOff + glitchMod, -bitSize + glitchMod, -bitSize + glitchMod);
		ctx.strokeRect(xOff + glitchMod, yOff + glitchMod, -bitSize + glitchMod, -bitSize + glitchMod);
	} else {
		ctx.strokeRect(xOff, yOff, -bitSize, -bitSize);
		if (register) fill = colorAt(GRAD_REGISTER, frameCount);
		if (hole) {
			outline = colorAt(GRAD_HOLE, frameCount);
			fill = colorAt(GRAD_HOLE_FILL, frameCount);
		} else if (burn) {
			outline = colorAt(GRAD_BURN, frameCount);
			fill = colorAt(GRAD_BURN_FILL, frameCount);
		} else if (shorted) {
			outline = colorAt(GRAD_SHORT, frameCount);
			if (register) fill = colorAt(GRAD_TARGET, frameCount);
		} else if (target) {
			if (info.complete) {
				let color = colorAt(GRAD_COMPLETE, frameCount);
				outline = fill = color;
			} else outline = colorAt(GRAD_TARGET, frameCount);
		}
		if (outline !== pal.stringEmpty) drawBitOutline(ctx, bit, xOff, yOff, bitSize, outline);
		if (fill !== pal.stringEmpty) drawBitFill(ctx, bit, xOff, yOff, bitSize, fill);
	}
}

/**
 * Calculates grid dimensions for use in various draw operations
 */
function calcGridData(w, h) {
	var bitSize = LW * 5,
	    bitsX = info.currentLevel.width,
	    bitsY = info.currentLevel.height;
	gridData.bitSize = bitSize;
	gridData.bitsX = bitsX;
	gridData.bitsY = bitsY;
	gridData.numBits = bitsX * bitsY;
	gridData.gridOffsetX = evenNumber((w - bitsX * bitSize) / 2);
	gridData.gridOffsetY = evenNumber((h - bitsY * bitSize) / 2);
	gridData.gridMaxX = bitSize * bitsX;
	gridData.gridMaxY = bitSize * bitsY;
}

/**
 * Draws the "PLAY/OPS" logo screen text.
 * @param {CanvasRenderingContext2D} ctx framebuffer being drawn to
 */
function drawTitleText(ctx, yStart) {
	var { bitSize, gridOffsetX, gridOffsetY } = gridData;
	// need to calculate location of grid
	var fontSize = 16;
	var text = ["P", "L", "A", "Y"];
	var time = frameCount % (FPS * 4);
	if (time < 31) text[3] = "Y";
	if (time > 30) text[0] = "O";
	if (time > 60) text[1] = "P";
	if (time > 90) text[2] = "S";
	if (time > 120) text[3] = " ";
	if (time > 150) text[0] = "P";
	if (time > 180) text[1] = "L";
	if (time > 210) text[2] = "A";
	ctx.fillStyle = pal.stringBright;
	ctx.font = fontSize + "px 'Press Start 2P'";
	ctx.textAlign = "left";
	ctx.fillText(text[0], gridOffsetX + bitSize + LW - 1, yStart + gridOffsetY + bitSize * 2 - 1);
	ctx.fillText(text[1], gridOffsetX + bitSize * 2 + LW - 1, yStart + gridOffsetY + bitSize * 2 - 1);
	ctx.fillText(text[2], gridOffsetX + bitSize + LW - 1, yStart + gridOffsetY + bitSize * 3 - 1);
	ctx.fillText(text[3], gridOffsetX + bitSize * 2 + LW - 1, yStart + gridOffsetY + bitSize * 3 - 1);
}

function drawGrid(ctx, yStart) {
	var { bitSize, bitsX, numBits, gridOffsetX, gridOffsetY, gridMaxX, gridMaxY } = gridData;
	var xOff = 0,
	    yOff = 0,
	    x = 0,
	    y = 0;
	var border = pal.stringMid;
	var colorAt = gradients.getColorAtTime.bind(gradients);
	if (info.crashed) {
		border = colorAt(GRAD_COMPLETE, frameCount);
		ctx.strokeStyle = border;
		ctx.fillStyle = border;
		ctx.lineWidth = LW;
		ctx.strokeRect(gridOffsetX, yStart + gridOffsetY, gridMaxX, yStart + gridMaxY);
		ctx.fillRect(gridOffsetX, yStart + gridOffsetY, gridMaxX, yStart + gridMaxY);
	} else {
		if (info.complete) border = colorAt(GRAD_COMPLETE, frameCount);
		for (var i = 0; i < numBits; ++i) {
			x = i % bitsX;
			y = floor(i / bitsX);
			xOff = gridOffsetX + gridMaxX - bitSize * x;
			yOff = yStart + gridOffsetY + gridMaxY - bitSize * y;
			drawBit(ctx, i, xOff, yOff, border, bitSize, 0);
		}
	}
}

/**
 * Draws the title screen grid.
 * @param {CanvasRenderingContext2D} ctx framebuffer being drawn to
 * @param {int} w framebuffer width
 * @param {int} w framebuffer height
 */
function drawTitleGrid(ctx, yStart) {
	var { bitsX, numBits, bitSize, gridOffsetX, gridOffsetY, gridMaxX, gridMaxY } = gridData;
	var xOff = 0,
	    yOff = 0,
	    x = 0,
	    y = 0;
	var border = pal.stringMid;
	for (var i = 0; i < numBits; ++i) {
		x = i % bitsX;
		y = floor(i / bitsX);
		xOff = gridOffsetX + gridMaxX - bitSize * x;
		yOff = yStart + gridOffsetY + gridMaxY - bitSize * y;
		drawBit(ctx, i, xOff, yOff, border, bitSize, 0);
	}
}

/**
 * Draws an image over a destination context using a given composition operation, 
 * scaled to the size of the destination. 
 * @param {CanvasRenderingContext2D} ctx framebuffer being drawn to
 * @param {Canvas} src source image
 * @param {String} operation operation type
 * @param {int} w width of framebuffer
 * @param {int} h height of framebuffer
 * @param {string} operation composite operation type (default source-over)
 */
function composite(dest, src, w, h, operation = "source-over") {
	dest.globalCompositeOperation = operation;
	dest.drawImage(src, 0, 0, w, h);
}

/**
 * Fills a buffer with the given style.
 * @param CanvasRenderingContext2D ctx framebuffer being drawn to
 * @param {int} w width of framebuffer
 * @param {int} h height of framebuffer
 * @param {string} operation composite operation type (default source-over)
 */
function drawFill(ctx, w, h, style, operation = "source-over") {
	ctx.globalCompositeOperation = operation;
	ctx.fillStyle = style;
	ctx.fillRect(0, 0, w, h);
}

/**
 * Draws post-processing effects
 */
function drawPostEffects(ctx, w, h) {
	composite(ctx, effectsTexture, w, h, "overlay");
}

function drawGameScreen(ctx, w, h, yStart) {
	calcGridData(w, h);
	drawFill(ctx, w, h, pal.stringWipe);
	drawBorder(ctx, w, h, yStart);
	drawScoreboard(ctx, w, h, yStart);
	drawGrid(ctx, yStart);
	drawControls(ctx, yStart);
	drawGlitches(ctx, w, h, yStart);
}

/**
 * Draws the splash screen.
 * @param CanvasRenderingContext2D ctx framebuffer being drawn to
 * @param int w width of framebuffer
 * @param int h height of framebuffer
 */
function drawTitleScreen(ctx, w, h, yStart) {
	calcGridData(w, h);
	drawFill(ctx, w, h, pal.stringWipe);
	drawBorder(ctx, w, h, yStart);
	drawTitleGrid(ctx, yStart);
	drawTitleText(ctx, yStart);
}

/**
 * Draws the interlace mask.
 * @param CanvasRenderingContext2D ctx framebuffer being drawn to
 * @param int w width of framebuffer
 * @param int h height of framebuffer
 */
function drawInterlaceMask(ctx, mask, w, h) {
	drawFill(ctx, w, h, "black", "source-over");
	drawFill(ctx, w, h, mask, "source-in");
}

function drawPrerollStage(ctx, text, pauseTime, startLine, scrollOff) {
	var sub,
	    lineCount,
	    i = 0,
	    stop = prerollStep + startLine,
	    yStart = 0;
	lineCount = text.length - 1;
	if (scrollOff && stop > lineCount) yStart = -8 * (stop - lineCount);
	for (; i < stop; ++i) {
		if (i >= lineCount) {
			prerollLine = text[lineCount];
			sub = prerollLine + ".".repeat(stop - lineCount);
			ctx.fillText(sub, LW, i * 8 + LW + LW * 2 + yStart);
			break;
		} else {
			prerollLine = text[i];
			if (i + 1 == stop) sub = prerollLine.substr(0, ~~(prerollLine.length / prerollLinePos));else sub = prerollLine;
			ctx.fillText(sub, LW, i * 8 + LW + LW * 2 + yStart);
		}
	}
	return lineCount + pauseTime;
}

function drawPrerollText(ctx, w, h) {
	var fontSize = 8,
	    speed = 1,
	    lines = 0;

	drawFill(ctx, w, h, pal.stringWipe);
	ctx.font = fontSize + "px 'Press Start 2P'";
	ctx.fillStyle = pal.stringMid;

	switch (prerollStage) {
		case 0:
			lines = drawPrerollStage(ctx, __WEBPACK_IMPORTED_MODULE_1__ops_display_2d_text__["a" /* prerollText */].post, FPS / 2, 0, false);
			break;
		case 1:
			lines = drawPrerollStage(ctx, __WEBPACK_IMPORTED_MODULE_1__ops_display_2d_text__["a" /* prerollText */].memcheck, FPS / 3, __WEBPACK_IMPORTED_MODULE_1__ops_display_2d_text__["a" /* prerollText */].post.length, true);
			break;
		case 2:
			lines = drawPrerollStage(ctx, __WEBPACK_IMPORTED_MODULE_1__ops_display_2d_text__["a" /* prerollText */].startup, FPS / 3, 0, false);
			break;
		case 3:
			lines = drawPrerollStage(ctx, __WEBPACK_IMPORTED_MODULE_1__ops_display_2d_text__["a" /* prerollText */].errors, 0, __WEBPACK_IMPORTED_MODULE_1__ops_display_2d_text__["a" /* prerollText */].startup.length, false);
			break;
		case 4:
			lines = drawPrerollStage(ctx, __WEBPACK_IMPORTED_MODULE_1__ops_display_2d_text__["a" /* prerollText */].overwrite, 0, __WEBPACK_IMPORTED_MODULE_1__ops_display_2d_text__["a" /* prerollText */].startup.length, false);
			break;
		case 5:
			lines = drawPrerollStage(ctx, __WEBPACK_IMPORTED_MODULE_1__ops_display_2d_text__["a" /* prerollText */].display, FPS / 2, 2, false);
			break;
		case 6:
			lines = drawPrerollStage(ctx, __WEBPACK_IMPORTED_MODULE_1__ops_display_2d_text__["a" /* prerollText */].dmi, FPS / 2, 2, true);
			TEXT_FINAL_ROLL = max(0, prerollStep - __WEBPACK_IMPORTED_MODULE_1__ops_display_2d_text__["a" /* prerollText */].dmi.length) * 8;

			break;
		default:
			TEXT_MODE = 0;
	}

	if (prerollStep >= lines) {
		prerollStep = 0;
		prerollLinePos = 1;
		prerollStage++;
		prerollLinePos = 1;
	} else if (frameCount % speed === 0) {
		prerollStep++;
		prerollLinePos = speed - frameCount % speed;
	}
}

function animate() {
	var curCtx, curCanvas;
	if (PAUSE) return;
	if (TEXT_MODE) {
		drawPrerollText(compositeCtx, BW, BH, 0);
	}
	if (GAME_STARTED) {
		info = ops.stateInfo();
		drawGameScreen(compositeCtx, BW, BH, 0);
	} else if (TEXT_FINAL_ROLL) {
		info = ops.logoInfo();
		drawTitleScreen(compositeCtx, BW, BH, BH - TEXT_FINAL_ROLL);
	}
	//drawVingette(compositeCtx, BW, BH);

	var which = ~~(frameCount % 2);

	curCtx = interlaceBufferContexts[which];
	curCanvas = interlaceBufferCanvases[which];

	// draw interlace mask (gets its own function for debugging/profiling)
	drawInterlaceMask(curCtx, interlaceBufferMasks[which], BW, BH);
	composite(curCtx, compositeCanvas, BW, BH, "source-in");

	if (SCALE) {
		setAliasing(screenCtx, false);
		composite(screenCtx, curCanvas, W, H);
		drawPostEffects(screenCtx, W, H);
		setAliasing(screenCtx, true);
		composite(screenCtx, curCanvas, W, H, "overlay");
	} else composite(screenCtx, curCanvas, (W - BW) / 2, (H - BH) / 2);

	// reset canvas styles
	screenCtx.globalCompositeOperation = "source-over";

	frameCount++;
	requestAnimationFrame(animate);
}

function setup() {
	body.innerHTML = "";
	body.appendChild(gameScreen);
	startTime = Date.now();
	if (!animating) requestAnimationFrame(animate);
	animating = true;
}

function init(env) {
	ops = env;
	controls = ops.controls;
	pal = new __WEBPACK_IMPORTED_MODULE_0__ops_display_2d_color__["c" /* Palette */](new __WEBPACK_IMPORTED_MODULE_0__ops_display_2d_color__["a" /* Color */](16, 128, 16));
	makeGradients();
	body = document.getElementsByTagName("body")[0];
	body.classList.add("2d");
	gameScreen = document.createElement("canvas");
	gameScreen.id = "game-screen";
	screenCtx = gameScreen.getContext("2d");
	body.addEventListener("click", startGame);
	document.addEventListener("keyup", pressEnter);
	window.addEventListener("resize", updateRatio);
	updateRatio();
	drawFill(screenCtx, W, H, pal.stringEmpty);
	setup();
	if (AUTO_FULLSCREEN) {
		body.addEventListener("click", toggleFullScreen);
		document.addEventListener("fullscreenchange", fullscreenOff);
		document.addEventListener("mozfullscreenchange", fullscreenOff);
		document.addEventListener("msfullscreenchange", fullscreenOff);
		document.addEventListener("webkitfullscreenchange", fullscreenOff);
	}
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;
/* harmony export (immutable) */ __webpack_exports__["c"] = Palette;
/* unused harmony export repeatGrad */
/* harmony export (immutable) */ __webpack_exports__["b"] = GradientTexture;


function Color(r = 0, g = 0, b = 0, a = 1) {
	var string = "";
	var buf = new Uint8ClampedArray(4);
	function updateString() {
		string = "rgba(" + buf[0] + "," + buf[1] + "," + buf[2] + "," + buf[3] / 255 + ")";
	}
	function set(pos, val) {
		buf[pos] = val;
		updateString();
	}

	buf.copy = function () {
		return new Color(buf[0], buf[1], buf[2], buf[3]);
	};

	Object.defineProperties(buf, {
		"r": { set: set.bind(null, 0), get: () => buf[0] },
		"g": { set: set.bind(null, 1), get: () => buf[1] },
		"b": { set: set.bind(null, 2), get: () => buf[2] },
		"a": { set: val => set(3, ~~(val * 255)), get: () => buf[3] },
		"asRGBA": { get: () => string }
	});
	buf.r = r;
	buf.g = g;
	buf.b = b;
	buf.a = a;
	return buf;
}

function Palette(source) {
	var colors = new Array(6);
	colors[0] = new Color(source.r * 0.05, source.g * 0.05, source.b * 0.05, 1.0);
	colors[1] = new Color(source.r * 0.15, source.g * 0.15, source.b * 0.15, 0.7);
	colors[2] = new Color(source.r * 0.33, source.g * 0.33, source.b * 0.33, 1.0);
	colors[3] = new Color(source.r, source.g, source.b, 1.0);
	colors[4] = new Color(source.r * 1.15, source.g * 1.15, source.b * 1.15, 1.0);
	colors[5] = new Color(source.r * 2.0, source.g * 2.0, source.b * 2.0, 1.0);
	colors[6] = new Color(source.r * 0.125, source.g * 0.125, source.b * 0.125, 0.25);
	Object.defineProperties(colors, {
		"stringDark": { get: () => colors[0].asRGBA },
		"stringEmpty": { get: () => colors[1].asRGBA },
		"stringDim": { get: () => colors[2].asRGBA },
		"stringMid": { get: () => colors[3].asRGBA },
		"stringBright": { get: () => colors[4].asRGBA },
		"stringBlinding": { get: () => colors[5].asRGBA },
		"stringWipe": { get: () => colors[6].asRGBA },
		"colorDark": { get: () => colors[0] },
		"colorEmpty": { get: () => colors[1] },
		"colorDim": { get: () => colors[2] },
		"colorMid": { get: () => colors[3] },
		"colorBright": { get: () => colors[4] },
		"colorBlinding": { get: () => colors[5] },
		"colorWipe": { get: () => colors[6] }
	});
	return colors;
}

function repeatGrad(speed, timing, colorSet) {
	var i = 1;
	var rTiming = timing;
	var rColorSet = colorSet;
	if (speed > 1) {
		timing = timing.map(val => val / speed);
		rTiming = timing.slice(0);
		rColorSet = colorSet.slice(0);
		var calcTime = val => val + timing[timing.length - 1] * i;
		for (; i < speed; ++i) {
			rTiming = rTiming.concat(timing.map(calcTime));
			rColorSet = rColorSet.concat(colorSet);
		}
	}
	return { timing: rTiming, colorSet: rColorSet };
}

// pulse and flicker effects
const gradientGenerators = {
	pulse: function (speed, a, b) {
		var timing = [0, 1 / 2, 1];
		var colorSet = [a, b, a];
		return repeatGrad(speed, timing, colorSet);
	},
	flicker: function (speed, a, b, c) {
		var timing = [0, 1 / 8, 1 / 7, 1 / 5, 1 / 3, 1];
		var colorSet = [a, b, c, a, c, a];
		return repeatGrad(speed, timing, colorSet);
	}
};

function GradientTexture(opts = { gradients: [], frames: 60 }) {
	var canvas, ctx, gradStyles, data, strings;
	var frames = opts.frames,
	    gradients = opts.gradients;

	this.generate = function () {
		var i,
		    n,
		    gradientsLength = gradients.length,
		    gradientStops,
		    style,
		    dataLength;
		gradStyles = [];
		canvas = document.createElement("canvas");
		canvas.width = frames;
		canvas.height = gradientsLength;
		ctx = canvas.getContext("2d");
		for (i = 0; i < gradientsLength; ++i) {
			let { type, colors, speed } = gradients[i];
			let { timing, colorSet } = gradientGenerators[type].apply(null, [speed].concat(colors));
			style = ctx.createLinearGradient(0, 0, frames, 1);
			gradientStops = timing.length;
			for (n = 0; n < gradientStops; n++) {
				style.addColorStop(timing[n], colorSet[n].asRGBA);
			}
			gradStyles.push(style);
			ctx.fillStyle = style;
			ctx.fillRect(0, i, frames, 1);
		}
		data = ctx.getImageData(0, 0, frames, gradientsLength).data;
		dataLength = data.length;
		strings = new Array(dataLength / 4);
		// now pregenerate color strings because stupid canvas is stupid
		for (i = 0; i < dataLength; i += 4) {
			strings[i / 4] = "rgba(" + data[i] + "," + data[i + 1] + "," + data[i + 2] + "," + data[i + 3] / 255 + ")";
		}
	};

	Object.defineProperties(this, {
		texture: { get: () => canvas },
		context: { get: () => ctx }
	});

	this.addGradient = function (gradient) {
		gradients.push(gradient);
		this.generate();
	};

	function colorAt(y, x) {
		var offset = y * frames + x;
		return strings[offset];
	}

	this.getGradient = function (grad) {
		return gradients[grad];
	};

	this.getColorAtTime = function (grad, frameCount) {
		return colorAt(grad, ~~(frameCount % frames));
	};

	this.getColorAtPosition = function (grad, pos) {
		return colorAt(grad, ~~(pos % frames));
	};

	this.generate();

	return this;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var postText = ["Computer Mainframe Operating System", "Version 1.3.3.7", "Copyright (C) 198X", "Seattle Computing", "Allied Microsystems Software, Inc.", "All wrongs reserved.", "--------------------------------------------", "CPU Architecture: 16-BIT", "Clock Speed: 23647HZ", "Memory: 64Kb OK", "MEMCHK16 BEGIN"];
var startupText = ["INITIALIZING M.OS MAINTENANCE MODE", "--------------------------------------------", "Running startup scripts", "Begin software authenticity check", "Computing CRC sums..........................", "............................................", "............................................", "............................................", "............................................", "............................................", "......................."];
const prerollText = {
	post: postText,
	memcheck: postText.concat(["MEMORY ERROR AT SECTOR 0X00000000", "MEMORY ERROR AT SECTOR 0X00000001", "MEMORY ERROR AT SECTOR 0X00000003", "MEMORY ERROR AT SECTOR 0X00000007", "MEMORY ERROR AT SECTOR 0X0000000F", "MEMORY ERROR AT SECTOR 0X0000002C", "MEMORY ERROR AT SECTOR 0X0000004D", "MEMORY ERROR AT SECTOR 0X00000077", "MEMORY ERROR AT SECTOR 0X000001A1", "MEMORY ERROR AT SECTOR 0X0000026F", "MEMORY ERROR AT SECTOR 0X00000300", "MEMORY ERROR AT SECTOR 0X000007C3", "MEMORY ERROR AT SECTOR 0X00000F24", "MEMORY ERROR AT SECTOR 0X000010A1", "MEMORY ERROR AT SECTOR 0XDEADBEEF", "ERROR: MEMORY ERROR THRESHOLD EXCEEDED", "ENTERING M.OS MAINTENANCE MODE"]),
	startup: startupText,
	errors: startupText.slice(0, -1).concat(["WARNING: UNAUTHORIZED BINARY AD4M.AI......."]),
	overwrite: startupText.slice(0, -1).concat(["n0Th1Ng 2 C HeR3..........................."]),
	display: ["INITIALIZING M.OS MAINTENANCE MODE", "--------------------------------------------", "Calibrating Display.........................", "............................................", "............................................", "............................................", "Display OK"],
	dmi: ["INITIALIZING M.OS MAINTENANCE MODE", "--------------------------------------------", "Starting DMI (Direct Memory Interface)......", "Simulation Mode enabled.....................", "............................................", "............................................", "............................................", "............................................", "............................................", "............................................", "............................................", "............................................", "............................................", "............................................", "............................................", "............................................", "............................................", "...................."]
};
/* harmony export (immutable) */ __webpack_exports__["a"] = prerollText;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getControl"] = getControl;
/* harmony export (immutable) */ __webpack_exports__["getControlByKeyCode"] = getControlByKeyCode;
/* harmony export (immutable) */ __webpack_exports__["revealKeys"] = revealKeys;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ops_audio__ = __webpack_require__(0);


const MAX_INT = Math.pow(2, 32) - 1;
const ops = window.ops;
const mod = false;

const buttons = [{ code: 38, id: "opAdd",
	op: state => state.register++,
	mod: state => state.register |= Math.pow(2, state.width) - 1,
	sound: __WEBPACK_IMPORTED_MODULE_0__ops_audio__["sounds"].plus, modSound: __WEBPACK_IMPORTED_MODULE_0__ops_audio__["sounds"].fill,
	active: false, revealed: false
}, { code: 40, id: "opSub",
	op: state => {
		if (state.register > 0) state.register--;
	},
	mod: state => state.register &= MAX_INT - (Math.pow(2, state.width) - 1),
	sound: __WEBPACK_IMPORTED_MODULE_0__ops_audio__["sounds"].minus, modSound: __WEBPACK_IMPORTED_MODULE_0__ops_audio__["sounds"].flush,
	active: false, revealed: false
}, { code: 37, id: "opLShift",
	op: state => state.register <<= 1, mod: state => false,
	sound: __WEBPACK_IMPORTED_MODULE_0__ops_audio__["sounds"].lshift, modSound: () => false,
	active: false, revealed: false
}, { code: 39, id: "opRShift",
	op: state => state.register >>= 1, mod: state => false,
	sound: __WEBPACK_IMPORTED_MODULE_0__ops_audio__["sounds"].rshift, modSound: () => false,
	active: false, revealed: false
}, { code: 32, id: "opBump",
	op: state => state.register <<= state.width, mod: state => state.register >>= state.width,
	sound: __WEBPACK_IMPORTED_MODULE_0__ops_audio__["sounds"].bump, modSound: __WEBPACK_IMPORTED_MODULE_0__ops_audio__["sounds"].unbump,
	active: false, revealed: false
}, { code: 88, id: "opFlip",
	op: state => state.register ^= MAX_INT, mod: state => state.register = 0,
	sound: () => false, modSound: () => false,
	active: false, revealed: false
}, { code: 104, id: "opDesignTaller",
	op: state => {
		if (state.designMode) state.currentLevel.height++;
	}, mod: state => false,
	sound: () => false, modSound: () => false,
	active: false, revealed: false
}, { code: 98, id: "opDesignShorter",
	op: state => {
		if (state.designMode && state.currentLevel.height > 1) state.currentLevel.height--;
	}, mod: state => false,
	sound: () => false, modSound: () => false,
	active: false, revealed: false
}, { code: 100, id: "opDesignWider",
	op: state => {
		if (state.designMode) state.currentLevel.width++;
	}, mod: state => false,
	sound: () => false, modSound: () => false,
	active: false, revealed: false
}, { code: 102, id: "opDesignNarrower",
	op: state => {
		if (state.designMode && state.currentLevel.width > 1) state.currentLevel.width--;
	}, mod: state => false,
	sound: () => false, modSound: () => false,
	active: false, revealed: false
}];
/* harmony export (immutable) */ __webpack_exports__["buttons"] = buttons;


function getControl(name) {
	return buttons.filter(btn => btn.id == name)[0];
}

function getControlByKeyCode(code) {
	return buttons.filter(btn => btn.code == code)[0];
}

function revealKeys(keys) {
	var def = keys === undefined ? true : false;
	buttons.forEach(btn => btn.revealed = def);
	if (keys !== undefined) buttons.filter(btn => keys.indexOf(btn.id) !== -1).forEach(btn => btn.revealed = true);
}

const validKeys = buttons.map(button => button.code);
/* harmony export (immutable) */ __webpack_exports__["validKeys"] = validKeys;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const ops = window.ops;
const U = ["opAdd"];
const D = ["opSub"];
const L = ["opLShift"];
const R = ["opRShift"];
const UL = ["opAdd", "opLShift"];
const DR = ["opSub", "opRShift"];
const LR = ["opLShift", "opRShift"];
const LRU = ["opLShift", "opRShift", "opAdd"];
const DLR = ["opSub", "opLShift", "opRShift"];
const UDL = ["opAdd", "opSub", "opLShift"];
const UDLR = ["opAdd", "opSub", "opLShift", "opRShift"];
const UDLRS = ["opAdd", "opSub", "opLShift", "opRShift", "opBump"];
const conditions = {
	F_N: 1, // nightmare
	F_P: 2, // picture
	F_B: 4, // buffer
	F_W: 8, // wrap
	F_T: 16, // toggling targets
	G_P: 32, // parasitic glitch
	G_S: 64, // scrambled glitch
	G_I: 128, // invisible glitch mod boxes
	G_V: 256 // viral glitch
};
/* unused harmony export conditions */

const levelData = [{ par: 8, width: 4, height: 1, target: 8, register: 0, revealed: U }, // add tuts
{ par: 8, width: 2, height: 2, target: 8, register: 0, revealed: U }, { par: 11, width: 3, height: 3, target: 17, register: 6, revealed: U }, { par: 4, width: 4, height: 4, target: 128, register: 124, revealed: U }, { par: 3, width: 4, height: 1, target: 8, register: 1, revealed: L }, // lshift tuts
{ par: 6, width: 3, height: 3, target: 128, register: 2, revealed: L }, { par: 1, width: 4, height: 1, target: 10, register: 5, revealed: L }, { par: 2, width: 3, height: 2, target: 36, register: 9, revealed: L }, { par: 3, width: 4, height: 1, target: 1, register: 8, revealed: R }, // rshift tuts
{ par: 2, width: 2, height: 2, target: 3, register: 12, revealed: R }, { par: 7, width: 3, height: 3, target: 1, register: 128, revealed: R }, { par: 1, width: 4, height: 1, target: 5, register: 10, revealed: R }, { par: 3, width: 4, height: 1, target: 0, register: 3, revealed: D }, // sub tuts
{ par: 6, width: 4, height: 1, target: 2, register: 8, revealed: D }, { par: 8, width: 3, height: 2, target: 8, register: 16, revealed: D }, { par: 6, width: 4, height: 2, target: 124, register: 130, revealed: D }, { par: 3, width: 4, height: 2, target: 34, register: 8, revealed: UL }, { par: 2, width: 4, height: 2, target: 96, register: 194, revealed: DR }, { par: 4, width: 4, height: 4, target: 32769, register: 32766, revealed: LRU }, // introvert 
{ par: 3, width: 4, height: 4, target: 27030, register: 59799, revealed: UDLR }, // all keys revealed
{ par: 4, width: 5, height: 5, target: 33554431, register: 8388608, revealed: UDLR }, // fill me up!
{ par: 8, width: 7, height: 4, target: 114139326, register: 1783427, revealed: UDLR }, // mr. hoppy
{ par: 5, width: 4, height: 4, target: 1632, register: 61543, revealed: UDLR }, { par: 2, width: 4, height: 4, target: 3840, register: 61455, revealed: UDLRS }, // spacebar introduced
{ par: 2, width: 4, height: 2, target: 153, register: 76, revealed: LR }, // lies!
{ par: 38, width: 5, height: 6, target: 488293841, register: 1058588223, revealed: UDLRS }, // Cyclops!
{ par: 9, width: 10, height: 3, target: 1006665696, register: 61440, revealed: UDLR }, // damn lies! 
{ par: 2, width: 3, height: 2, target: 4, register: 1, holes: 2, revealed: UDLRS }, // hole introduced
{ par: 8, width: 4, height: 5, target: 266304, register: 64, holes: 50048, revealed: UDLRS }, // DESIGNER
{ par: 6, width: 5, height: 5, target: 4194335, register: 28672, holes: 655360, revealed: UDLRS }, { par: 11, width: 3, height: 8, target: 1048580, register: 16416, holes: 9052947, revealed: UDLRS }];
/* harmony export (immutable) */ __webpack_exports__["a"] = levelData;


const disabled = [{ par: 50, width: 4, height: 4, target: 16, register: 1, holes: 2, burns: 4, shorts: 8, revealed: UDLRS }, // DESIGNER
{ par: 50, width: 4, height: 2, target: 0, register: 0, revealed: UDLRS }];
/* unused harmony export disabled */


/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map