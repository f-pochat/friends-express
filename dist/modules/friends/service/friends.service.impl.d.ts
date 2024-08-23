import { FriendsService } from "../../../modules/friends/service/friends.service";
import { FriendsRepository } from "../../../modules/friends/repository/friends.repository";
import { CreateFriendDTO, FriendDTO } from "../../../modules/friends/dto";
import { AddressDTO } from "../../../modules/address/dto";
export declare class FriendsServiceImpl implements FriendsService {
    private readonly repository;
    constructor(repository: FriendsRepository);
    createFriend(friend: CreateFriendDTO): Promise<FriendDTO>;
    deleteFriend(id: string): Promise<void>;
    getFriends(): Promise<FriendDTO[]>;
    getAddressesByFriendId(id: string): Promise<AddressDTO[]>;
}
