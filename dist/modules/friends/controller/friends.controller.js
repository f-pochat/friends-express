"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendsRouter = void 0;
const express_1 = require("express");
const http_status_1 = __importDefault(require("http-status"));
const _utils_1 = require("../../../utils");
const service_1 = require("../../../modules/friends/service");
const repository_1 = require("../../../modules/friends/repository");
const validation_1 = require("../../../utils/validation");
const dto_1 = require("../../../modules/friends/dto");
exports.friendsRouter = (0, express_1.Router)();
const service = new service_1.FriendsServiceImpl(new repository_1.FriendsRepositoryImpl(_utils_1.db));
exports.friendsRouter.get('/', async (req, res) => {
    const friends = await service.getFriends();
    return res.status(http_status_1.default.OK).json(friends);
});
exports.friendsRouter.post('/', (0, validation_1.BodyValidation)(dto_1.CreateFriendDTO), async (req, res) => {
    const data = req.body;
    const friends = await service.createFriend(data);
    return res.status(http_status_1.default.CREATED).json(friends);
});
exports.friendsRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const friends = await service.deleteFriend(id);
    return res.status(http_status_1.default.OK).json(friends);
});
exports.friendsRouter.get('/:id/addresses', async (req, res) => {
    const { id } = req.params;
    const addresses = await service.getAddressesByFriendId(id);
    return res.status(http_status_1.default.OK).json(addresses);
});
//# sourceMappingURL=friends.controller.js.map