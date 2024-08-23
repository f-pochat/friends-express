import { AddressService } from "../../../modules/address/service/address.service";
import { AddressRepository } from "../../../modules/address/repository/address.repository";
import { CreateAddressDTO, UpdateAddressDTO, AddressDTO } from "../../../modules/address/dto";
export declare class AddressServiceImpl implements AddressService {
    private readonly addressRepository;
    constructor(addressRepository: AddressRepository);
    getAddresses(): Promise<AddressDTO[]>;
    createAddress(address: CreateAddressDTO, friendId: string): Promise<AddressDTO>;
    updateAddress(id: string, address: UpdateAddressDTO): Promise<AddressDTO>;
    deleteAddress(id: string): Promise<void>;
}
