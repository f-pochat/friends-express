import { AddressDTO, UpdateAddressDTO, CreateAddressDTO } from "../../../modules/address/dto";
export interface AddressService {
    getAddresses(): Promise<AddressDTO[]>;
    createAddress(address: CreateAddressDTO, friendId: string): Promise<AddressDTO>;
    updateAddress(id: string, address: UpdateAddressDTO): Promise<AddressDTO>;
    deleteAddress(id: string): Promise<void>;
}
