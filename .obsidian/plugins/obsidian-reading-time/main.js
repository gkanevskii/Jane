/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/parse-ms/index.js
var require_parse_ms = __commonJS({
  "node_modules/parse-ms/index.js"(exports, module2) {
    "use strict";
    module2.exports = (milliseconds) => {
      if (typeof milliseconds !== "number") {
        throw new TypeError("Expected a number");
      }
      const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
      return {
        days: roundTowardsZero(milliseconds / 864e5),
        hours: roundTowardsZero(milliseconds / 36e5) % 24,
        minutes: roundTowardsZero(milliseconds / 6e4) % 60,
        seconds: roundTowardsZero(milliseconds / 1e3) % 60,
        milliseconds: roundTowardsZero(milliseconds) % 1e3,
        microseconds: roundTowardsZero(milliseconds * 1e3) % 1e3,
        nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1e3
      };
    };
  }
});

// node_modules/pretty-ms/index.js
var require_pretty_ms = __commonJS({
  "node_modules/pretty-ms/index.js"(exports, module2) {
    "use strict";
    var parseMilliseconds = require_parse_ms();
    var pluralize = (word, count) => count === 1 ? word : `${word}s`;
    var SECOND_ROUNDING_EPSILON = 1e-7;
    module2.exports = (milliseconds, options = {}) => {
      if (!Number.isFinite(milliseconds)) {
        throw new TypeError("Expected a finite number");
      }
      if (options.colonNotation) {
        options.compact = false;
        options.formatSubMilliseconds = false;
        options.separateMilliseconds = false;
        options.verbose = false;
      }
      if (options.compact) {
        options.secondsDecimalDigits = 0;
        options.millisecondsDecimalDigits = 0;
      }
      const result = [];
      const floorDecimals = (value, decimalDigits) => {
        const flooredInterimValue = Math.floor(value * 10 ** decimalDigits + SECOND_ROUNDING_EPSILON);
        const flooredValue = Math.round(flooredInterimValue) / 10 ** decimalDigits;
        return flooredValue.toFixed(decimalDigits);
      };
      const add = (value, long, short, valueString) => {
        if ((result.length === 0 || !options.colonNotation) && value === 0 && !(options.colonNotation && short === "m")) {
          return;
        }
        valueString = (valueString || value || "0").toString();
        let prefix;
        let suffix;
        if (options.colonNotation) {
          prefix = result.length > 0 ? ":" : "";
          suffix = "";
          const wholeDigits = valueString.includes(".") ? valueString.split(".")[0].length : valueString.length;
          const minLength = result.length > 0 ? 2 : 1;
          valueString = "0".repeat(Math.max(0, minLength - wholeDigits)) + valueString;
        } else {
          prefix = "";
          suffix = options.verbose ? " " + pluralize(long, value) : short;
        }
        result.push(prefix + valueString + suffix);
      };
      const parsed = parseMilliseconds(milliseconds);
      add(Math.trunc(parsed.days / 365), "year", "y");
      add(parsed.days % 365, "day", "d");
      add(parsed.hours, "hour", "h");
      add(parsed.minutes, "minute", "m");
      if (options.separateMilliseconds || options.formatSubMilliseconds || !options.colonNotation && milliseconds < 1e3) {
        add(parsed.seconds, "second", "s");
        if (options.formatSubMilliseconds) {
          add(parsed.milliseconds, "millisecond", "ms");
          add(parsed.microseconds, "microsecond", "\xB5s");
          add(parsed.nanoseconds, "nanosecond", "ns");
        } else {
          const millisecondsAndBelow = parsed.milliseconds + parsed.microseconds / 1e3 + parsed.nanoseconds / 1e6;
          const millisecondsDecimalDigits = typeof options.millisecondsDecimalDigits === "number" ? options.millisecondsDecimalDigits : 0;
          const roundedMiliseconds = millisecondsAndBelow >= 1 ? Math.round(millisecondsAndBelow) : Math.ceil(millisecondsAndBelow);
          const millisecondsString = millisecondsDecimalDigits ? millisecondsAndBelow.toFixed(millisecondsDecimalDigits) : roundedMiliseconds;
          add(Number.parseFloat(millisecondsString, 10), "millisecond", "ms", millisecondsString);
        }
      } else {
        const seconds = milliseconds / 1e3 % 60;
        const secondsDecimalDigits = typeof options.secondsDecimalDigits === "number" ? options.secondsDecimalDigits : 1;
        const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
        const secondsString = options.keepDecimalsOnWholeSeconds ? secondsFixed : secondsFixed.replace(/\.0+$/, "");
        add(Number.parseFloat(secondsString, 10), "second", "s", secondsString);
      }
      if (result.length === 0) {
        return "0" + (options.verbose ? " milliseconds" : "ms");
      }
      if (options.compact) {
        return result[0];
      }
      if (typeof options.unitCount === "number") {
        const separator = options.colonNotation ? "" : " ";
        return result.slice(0, Math.max(options.unitCount, 1)).join(separator);
      }
      return options.colonNotation ? result.join("") : result.join(" ");
    };
  }
});

// node_modules/reading-time/lib/reading-time.js
var require_reading_time = __commonJS({
  "node_modules/reading-time/lib/reading-time.js"(exports, module2) {
    "use strict";
    function codeIsInRanges(number, arrayOfRanges) {
      return arrayOfRanges.some(([lowerBound, upperBound]) => lowerBound <= number && number <= upperBound);
    }
    function isCJK(c) {
      if (typeof c !== "string") {
        return false;
      }
      const charCode = c.charCodeAt(0);
      return codeIsInRanges(charCode, [
        [12352, 12447],
        [19968, 40959],
        [44032, 55203],
        [131072, 191456]
      ]);
    }
    function isAnsiWordBound(c) {
      return " \n\r	".includes(c);
    }
    function isPunctuation(c) {
      if (typeof c !== "string") {
        return false;
      }
      const charCode = c.charCodeAt(0);
      return codeIsInRanges(charCode, [
        [33, 47],
        [58, 64],
        [91, 96],
        [123, 126],
        [12288, 12351],
        [65280, 65519]
      ]);
    }
    function readingTime2(text, options = {}) {
      let words = 0, start = 0, end = text.length - 1;
      const wordsPerMinute = options.wordsPerMinute || 200;
      const isWordBound = options.wordBound || isAnsiWordBound;
      while (isWordBound(text[start]))
        start++;
      while (isWordBound(text[end]))
        end--;
      const normalizedText = `${text}
`;
      for (let i = start; i <= end; i++) {
        if (isCJK(normalizedText[i]) || !isWordBound(normalizedText[i]) && (isWordBound(normalizedText[i + 1]) || isCJK(normalizedText[i + 1]))) {
          words++;
        }
        if (isCJK(normalizedText[i])) {
          while (i <= end && (isPunctuation(normalizedText[i + 1]) || isWordBound(normalizedText[i + 1]))) {
            i++;
          }
        }
      }
      const minutes = words / wordsPerMinute;
      const time = Math.round(minutes * 60 * 1e3);
      const displayed = Math.ceil(minutes.toFixed(2));
      return {
        text: displayed + " min read",
        minutes,
        time,
        words
      };
    }
    module2.exports = readingTime2;
  }
});

// src/main.ts
__export(exports, {
  default: () => ReadingTime
});
var import_obsidian2 = __toModule(require("obsidian"));

// src/settings.ts
var import_obsidian = __toModule(require("obsidian"));
var RT_DEFAULT_SETTINGS = {
  readingSpeed: 200,
  format: "default",
  appendText: "read"
};
var ReadingTimeSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Reading speed").setDesc("Words per minute used for reading speed (default: 200).").addText((text) => {
      text.setPlaceholder("Example: 200").setValue(this.plugin.settings.readingSpeed.toString()).onChange((value) => __async(this, null, function* () {
        this.plugin.settings.readingSpeed = parseInt(value.trim());
        yield this.plugin.saveSettings().then(this.plugin.calculateReadingTime);
      }));
    });
    new import_obsidian.Setting(this.containerEl).setName("Format").setDesc("Choose the output format").addDropdown((dropdown) => dropdown.addOption("default", "Default (10 min)").addOption("compact", "Compact (10m)").addOption("simple", "Simple (10m 4s)").addOption("verbose", "Verbose (10 minutes 4 seconds)").addOption("digital", "Colon Notation (10:04)").setValue(this.plugin.settings.format).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.format = value;
      yield this.plugin.saveSettings().then(this.plugin.calculateReadingTime);
    })));
    new import_obsidian.Setting(this.containerEl).setName("Append Text").setDesc("Append 'read' to formatted string.").addText((text) => text.setValue(this.plugin.settings.appendText).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.appendText = value.trim();
      yield this.plugin.saveSettings().then(this.plugin.calculateReadingTime);
    })));
  }
};

// src/helpers.ts
var import_pretty_ms = __toModule(require_pretty_ms());
var ReadTime = require_reading_time();
function readingTimeText(text, plugin) {
  const result = ReadTime(text, {
    wordsPerMinute: plugin.settings.readingSpeed
  });
  let options = {
    secondsDecimalDigits: 0
  };
  switch (plugin.settings.format) {
    case "simple":
      break;
    case "compact":
      if (result.time > 36e5) {
        options.unitCount = 2;
      } else {
        options.compact = true;
      }
      break;
    case "verbose":
      options.verbose = true;
      break;
    case "digital":
      options.colonNotation = true;
      break;
    case "default":
      return plugin.settings.appendText ? result.text : result.text.replace(" read", "");
  }
  let output = (0, import_pretty_ms.default)(result.time, options);
  return plugin.settings.appendText ? `${output} ${plugin.settings.appendText}` : output;
}

// src/main.ts
var ReadingTime = class extends import_obsidian2.Plugin {
  constructor() {
    super(...arguments);
    this.calculateReadingTime = () => {
      const mdView = this.app.workspace.getActiveViewOfType(import_obsidian2.MarkdownView);
      if (mdView && mdView.getViewData()) {
        const result = readingTimeText(mdView.getViewData(), this);
        this.statusBar.setText(`${result}`);
      } else {
        this.statusBar.setText("0 min read");
      }
    };
  }
  onload() {
    return __async(this, null, function* () {
      yield this.loadSettings();
      this.statusBar = this.addStatusBarItem();
      this.statusBar.setText("");
      this.addSettingTab(new ReadingTimeSettingsTab(this.app, this));
      this.addCommand({
        id: "reading-time-editor-command",
        name: "Selected Text",
        editorCallback: (editor, view) => {
          new ReadingTimeModal(this.app, editor, this).open();
        }
      });
      this.registerEvent(this.app.workspace.on("file-open", this.calculateReadingTime));
      this.registerEvent(this.app.workspace.on("editor-change", (0, import_obsidian2.debounce)(this.calculateReadingTime, 1e3)));
    });
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, RT_DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
var ReadingTimeModal = class extends import_obsidian2.Modal {
  constructor(app, editor, plugin) {
    super(app);
    this.editor = editor;
    this.plugin = plugin;
  }
  onOpen() {
    const { contentEl, titleEl } = this;
    titleEl.setText("Reading Time of Selected Text");
    const stats = readingTime(this.editor.getSelection(), this.plugin);
    contentEl.setText(`${stats} (at ${this.plugin.settings.readingSpeed} wpm)`);
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
/*!
 * reading-time
 * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */