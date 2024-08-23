"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const signale_1 = require("signale");
const _utils_1 = require("../utils");
const options = {
    disabled: false,
    interactive: false,
    logLevel: _utils_1.Constants.LOG_LEVEL
};
exports.Logger = new signale_1.Signale(options);
//# sourceMappingURL=logger.js.map