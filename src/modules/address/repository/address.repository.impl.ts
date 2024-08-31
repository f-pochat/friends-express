import {AddressRepository} from "@modules/address/repository/address.repository";
import {PrismaClient} from "@prisma/client";
import {AddressDTO, CreateAddressDTO} from "@modules/address/dto";

export class AddressRepositoryImpl implements AddressRepository {
    constructor(private readonly db: PrismaClient) {}

    async create(data: CreateAddressDTO): Promise<AddressDTO> {
        // Fetch the friend by friendId
        const friend = await this.db.friend.findUnique({
            where: { id: data.friendId },
            include: { Address: true }
        });

        if (!friend) {
            throw new Error(`Friend with id ${data.friendId} not found`);
        }

        // Create the new address
        const address = await this.db.address.create({
            data: {
                street: data.street,
                city: data.city,
                state: data.state,
                friendId: data.friendId
            }
        });

        // Add the new address to the friend's address list
        friend.Address.push(address);

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