"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressServiceImpl = void 0;
class AddressServiceImpl {
    addressRepository;
    constructor(addressRepository) {
        this.addressRepository = addressRepository;
    }
    async getAddresses() {
        return this.addressRepository.getAll();
    }
    async createAddress(address, friendId) {
        return this.addressRepository.create(address, friendId);
    }
    async updateAddress(id, address) {
        return this.addressRepository.update(id, address);
    }
    async deleteAddress(id) {
        return this.addressRepository.delete(id);
    }
}
exports.AddressServiceImpl = AddressServiceImpl;
//# sourceMappingURL=address.service.impl.js.map