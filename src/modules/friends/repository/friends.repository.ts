import {CreateFriendDTO, FriendDTO} from "@modules/friends/dto";
import {AddressDTO} from "@modules/address/dto";

export interface FriendsRepository {
    create(friend: CreateFriendDTO): Promise<FriendDTO>;
    getAll(): Promise<FriendDTO[]>;
    delete(id: string): Promise<void>;
    getAddressesByFriendId(id: string): Promise<AddressDTO[]>;
}