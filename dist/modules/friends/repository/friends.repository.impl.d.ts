import { FriendsRepository } from "../../../modules/friends/repository/friends.repository";
import { PrismaClient } from "@prisma/client";
import { CreateFriendDTO, FriendDTO } from "../../../modules/friends/dto";
export declare class FriendsRepositoryImpl implements FriendsRepository {
    private readonly db;
    constructor(db: PrismaClient);
    create(data: CreateFriendDTO): Promise<FriendDTO>;
    getAll(): Promise<FriendDTO[]>;
    delete(id: string): Promise<void>;
    getAddressesByFriendId(id: string): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        street: string;
        city: string;
        state: string;
        country: string;
        zip: string;
        friendId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown, never> & {})[]>;
}
