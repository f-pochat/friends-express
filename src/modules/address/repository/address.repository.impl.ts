import { PrismaClient } from '@prisma/client';
import { CreateAddressDto, AddressDto } from '../dto';

export class AddressRepositoryImpl {
    constructor(private readonly db: PrismaClient) {}

    async create(data: CreateAddressDto): Promise<AddressDto> {
        const address = await this.db.address.create({
            data
        });
        return new AddressDto(address);
    }

    async getAll(): Promise<AddressDto[]> {
        const addresses = await this.db.address.findMany();
        return addresses.map(address => new AddressDto(address));
    }

    async delete(id: string): Promise<void> {
        await this.db.address.delete({
            where: { id }
        });
    }

    async update(id: string, data: Partial<CreateAddressDto>): Promise<AddressDto> {
        const address = await this.db.address.update({
            where: { id },
            data
        });
        return new AddressDto(address);
    }
}