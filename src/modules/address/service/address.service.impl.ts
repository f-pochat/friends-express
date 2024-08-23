import { AddressRepositoryImpl } from '../repository';
import { CreateAddressDto, AddressDto } from '../dto';

export class AddressServiceImpl {
    constructor(private readonly repository: AddressRepositoryImpl) {}

    async createAddress(data: CreateAddressDto): Promise<AddressDto> {
        return this.repository.create(data);
    }

    async getAddresses(): Promise<AddressDto[]> {
        return this.repository.getAll();
    }

    async deleteAddress(id: string): Promise<void> {
        return this.repository.delete(id);
    }

    async updateAddress(id: string, data: Partial<CreateAddressDto>): Promise<AddressDto> {
        return this.repository.update(id, data);
    }
}