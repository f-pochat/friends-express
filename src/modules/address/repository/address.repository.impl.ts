import {AddressRepository} from '@modules/address/repository/address.repository';
import {PrismaClient} from '@prisma/client';
import {CreateAddressDTO, AddressDTO, UpdateAddressDTO} from '@modules/address/dto';

export class AddressRepositoryImpl implements AddressRepository {
    constructor(private readonly db: PrismaClient) {}

    async create(data: CreateAddressDTO, friendId: string): Promise<AddressDTO> {
        const address = await this.db.address.create({
            data: {
                ...data,
                friend: {
                    connect: { id: friendId },
                },
            },
        });

        return new AddressDTO(address);
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

    async update(id: string, data: UpdateAddressDTO): Promise<AddressDTO> {
        const address = await this.db.address.update({
            where: {id},
            data
        })
        return new AddressDTO(address)
    }

}