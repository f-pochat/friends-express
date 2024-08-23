"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const _utils_1 = require("./utils");
const _router_1 = require("./router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)({
    origin: _utils_1.Constants.CORS_WHITELIST
}));
app.use('/api', _router_1.router);
app.use(_utils_1.ErrorHandling);
app.listen(_utils_1.Constants.PORT, () => {
    _utils_1.Logger.info(`Server listening on port ${_utils_1.Constants.PORT}`);
});
//# sourceMappingURL=server.js.map