import {FriendsRepository} from "@modules/friends/repository/friends.repository";
import {PrismaClient} from "@prisma/client";
import {CreateFriendDTO, FriendDTO} from "@modules/friends/dto";

export class FriendsRepositoryImpl implements FriendsRepository {
    constructor(private readonly db: PrismaClient) {}

    async create(data: CreateFriendDTO): Promise<FriendDTO> {
        const friend = await this.db.friend.create({
            data
        })
        return new FriendDTO(friend)
    }

    async getAll(): Promise<FriendDTO[]> {
        const friends = await this.db.friend.findMany();
        return friends.map(friend => new FriendDTO(friend))
    }

    async delete (id: string): Promise<void> {
        await this.db.friend.delete({
            where: {
                id
            }
        })
    }
}