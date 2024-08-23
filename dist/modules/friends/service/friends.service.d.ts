import { CreateFriendDTO, FriendDTO } from "../../../modules/friends/dto";
import { AddressDTO } from "../../../modules/address/dto";
export interface FriendsService {
    getFriends(): Promise<FriendDTO[]>;
    createFriend(friend: CreateFriendDTO): Promise<FriendDTO>;
    deleteFriend(id: string): Promise<void>;
    getAddressesByFriendId(id: string): Promise<AddressDTO[]>;
}
