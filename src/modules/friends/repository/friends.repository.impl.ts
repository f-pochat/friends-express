import {FriendsRepository} from "@modules/friends/repository/friends.repository";
import {PrismaClient} from "@prisma/client";
import {CreateFriendDTO, FriendDTO} from "@modules/friends/dto";

export class FriendsRepositoryImpl implements FriendsRepository {
    constructor(private readonly db: PrismaClient) {}

    async create(data: CreateFriendDTO): Promise<FriendDTO> {
        const { addresses, ...friendData } = data;

        const friend = await this.db.friend.create({
            data: {
                ...friendData,
                addresses: {
                    create: addresses || [],
                },
            },
            include: {
                addresses: true,
            },
        });

        return new FriendDTO(friend);
    }


    async getAll(): Promise<FriendDTO[]> {
        const friends = await this.db.friend.findMany();
        return friends.map(friend => new FriendDTO(friend))
    }

    async delete (id: string): Promise<void> {
        await this.db.address.deleteMany({
            where: {
                friendId: id,
            },
        });

        await this.db.friend.delete({
            where: {
                id
            }
        });
    }

    async getAddressesByFriendId(id: string) {
        const friend = await this.db.friend.findUnique({
            where: { id },
            include: { addresses: true }
        })
        return friend?.addresses || []
    }
}