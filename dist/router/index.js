"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const friends_1 = require("../modules/friends");
exports.router = (0, express_1.Router)();
exports.router.use('/friends', friends_1.friendsRouter);
//# sourceMappingURL=index.js.map