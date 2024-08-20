import {AddressService} from "@modules/address/service/address.service";
import {AddressRepository} from "@modules/address/repository";
import {AddressDTO, CreateAddressDTO} from "@modules/address/dto";

export class AddressServiceImpl implements AddressService {
    constructor(private readonly repository: AddressRepository) {}

    createAddress(address: CreateAddressDTO): Promise<AddressDTO> {
        return this.repository.create(address)
    }

    deleteAddress(id: string): Promise<void> {
        return this.repository.delete(id)
    }

    getAllAddresses(): Promise<AddressDTO[]> {
        return this.repository.getAll();
    }

    updateAddress(id: string, address: CreateAddressDTO): Promise<AddressDTO> {
        return this.repository.update(id, address)
    }
}