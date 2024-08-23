"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRepositoryImpl = void 0;
const dto_1 = require("../../../modules/address/dto");
class AddressRepositoryImpl {
    db;
    constructor(db) {
        this.db = db;
    }
    async create(data, friendId) {
        const address = await this.db.address.create({
            data: {
                ...data,
                friend: {
                    connect: { id: friendId },
                },
            },
        });
        return new dto_1.AddressDTO(address);
    }
    async getAll() {
        const addresses = await this.db.address.findMany();
        return addresses.map(address => new dto_1.AddressDTO(address));
    }
    async delete(id) {
        await this.db.address.delete({
            where: {
                id
            }
        });
    }
    async update(id, data) {
        const address = await this.db.address.update({
            where: { id },
            data
        });
        return new dto_1.AddressDTO(address);
    }
}
exports.AddressRepositoryImpl = AddressRepositoryImpl;
//# sourceMappingURL=address.repository.impl.js.map