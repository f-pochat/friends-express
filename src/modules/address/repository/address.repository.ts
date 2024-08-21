import {AddressDto, CreateAddressDto} from "@modules/address/dto";

export interface AddressRepository {
    create(address: CreateAddressDto): Promise<AddressDto>;
    getAll(): Promise<AddressDto[]>;
    delete(id: string): Promise<void>;
    update(id: string, address: CreateAddressDto): Promise<AddressDto>;
}