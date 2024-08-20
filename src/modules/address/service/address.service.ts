import {AddressDTO, CreateAddressDTO} from "@modules/address/dto";

export interface AddressService {
    createAddress(data: CreateAddressDTO): Promise<AddressDTO>;
    getAllAddresses(): Promise<AddressDTO[]>;
    deleteAddress(id: string): Promise<void>;
    updateAddress(id: string, data: CreateAddressDTO): Promise<AddressDTO>;
}