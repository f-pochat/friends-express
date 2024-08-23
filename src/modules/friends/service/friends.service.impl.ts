import {FriendsService} from "@modules/friends/service/friends.service";
import {FriendsRepository} from "@modules/friends/repository/friends.repository";
import {CreateFriendDTO, FriendDTO} from "@modules/friends/dto";
import {AddressDTO} from "@modules/address/dto";

export class FriendsServiceImpl implements FriendsService {
    constructor(private readonly repository: FriendsRepository) {
    }
    createFriend(friend: CreateFriendDTO): Promise<FriendDTO> {
        return this.repository.create(friend)
    }

    deleteFriend(id: string): Promise<void> {
        return this.repository.delete(id)
    }

    getFriends(): Promise<FriendDTO[]> {
        return this.repository.getAll();
    }

    getAddressesByFriendId(id: string): Promise<AddressDTO[]> {
        return this.repository.getAddressesByFriendId(id)
    }

}