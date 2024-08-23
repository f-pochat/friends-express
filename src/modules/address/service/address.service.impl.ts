import {AddressService}  from "@modules/address/service/address.service";
import {AddressRepository} from "@modules/address/repository/address.repository";
import {CreateAddressDTO, UpdateAddressDTO, AddressDTO} from "@modules/address/dto";

export class AddressServiceImpl implements AddressService {
    constructor(private readonly addressRepository: AddressRepository) {}

    async getAddresses(): Promise<AddressDTO[]> {
        return this.addressRepository.getAll();
    }

    async createAddress(address: CreateAddressDTO, friendId: string): Promise<AddressDTO> {
        return this.addressRepository.create(address, friendId);
    }

    async updateAddress(id: string, address: UpdateAddressDTO): Promise<AddressDTO> {
        return this.addressRepository.update(id, address);
    }

    async deleteAddress(id: string): Promise<void> {
        return this.addressRepository.delete(id);
    }
}