import {AddressDto, CreateAddressDto} from "@modules/address/dto";

export interface AddressService {
    getAddresses(): Promise<AddressDto[]>;
    createAddress(address: CreateAddressDto): Promise<AddressDto>;
    deleteAddress(id: string): Promise<void>;
    updateAddress(id: string, address: CreateAddressDto): Promise<AddressDto>;
}