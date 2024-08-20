import {AddressRepository} from "@modules/address/repository/address.repository";
import {PrismaClient} from "@prisma/client";
import {AddressDTO, CreateAddressDTO} from "@modules/address/dto";

export class AddressRepositoryImpl implements AddressRepository {
    constructor(private readonly db: PrismaClient) {}

    async create(data: CreateAddressDTO): Promise<AddressDTO> {
        const address = await this.db.address.create({
            data
        })
        return new AddressDTO(address)
    }

    async getAll(): Promise<AddressDTO[]> {
        const addresses = await this.db.address.findMany();
        return addresses.map(address => new AddressDTO(address))
    }

    async delete (id: string): Promise<void> {
        await this.db.address.delete({
            where: {
                id
            }
        })
    }

    async update(id: string, data: CreateAddressDTO): Promise<AddressDTO> {
        const address = await this.db.address.update({
            where: {
                id
            },
            data
        })
        return new AddressDTO(address)
    }
}