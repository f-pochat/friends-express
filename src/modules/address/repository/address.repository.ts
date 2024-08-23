import {CreateAddressDTO, UpdateAddressDTO, AddressDTO} from "@modules/address/dto";

export interface AddressRepository {
    create(address: CreateAddressDTO, friendId: string): Promise<AddressDTO>;
    getAll(): Promise<AddressDTO[]>;
    delete(id: string): Promise<void>;
    update(id: string, address: UpdateAddressDTO): Promise<AddressDTO>;
}