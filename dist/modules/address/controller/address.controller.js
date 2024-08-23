"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRouter = void 0;
const express_1 = require("express");
const http_status_1 = __importDefault(require("http-status"));
const _utils_1 = require("../../../utils");
const service_1 = require("../../../modules/address/service");
const repository_1 = require("../../../modules/address/repository");
const validation_1 = require("../../../utils/validation");
const dto_1 = require("../../../modules/address/dto");
exports.addressRouter = (0, express_1.Router)();
const service = new service_1.AddressServiceImpl(new repository_1.AddressRepositoryImpl(_utils_1.db));
exports.addressRouter.get('/', async (req, res) => {
    const addresses = await service.getAddresses();
    return res.status(http_status_1.default.OK).json(addresses);
});
exports.addressRouter.post('/:friendId', (0, validation_1.BodyValidation)(dto_1.CreateAddressDTO), async (req, res) => {
    const data = req.body;
    const { friendId } = req.params;
    const address = await service.createAddress(data, friendId);
    return res.status(http_status_1.default.CREATED).json(address);
});
exports.addressRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const address = await service.deleteAddress(id);
    return res.status(http_status_1.default.OK).json(address);
});
exports.addressRouter.put('/:id', async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const address = await service.updateAddress(id, data);
    return res.status(http_status_1.default.OK).json(address);
});
//# sourceMappingURL=address.controller.js.map