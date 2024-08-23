"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendDTO = exports.CreateFriendDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const dto_1 = require("../../../modules/address/dto");
class CreateFriendDTO {
    name;
    email;
    phone;
    addresses;
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFriendDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFriendDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFriendDTO.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => dto_1.CreateAddressDTO),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateFriendDTO.prototype, "addresses", void 0);
exports.CreateFriendDTO = CreateFriendDTO;
class FriendDTO {
    constructor(friend) {
        this.id = friend.id;
        this.name = friend.name;
        this.email = friend.email;
    }
    id;
    name;
    email;
}
exports.FriendDTO = FriendDTO;
//# sourceMappingURL=index.js.map