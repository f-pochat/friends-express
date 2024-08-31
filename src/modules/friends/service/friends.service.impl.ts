import {FriendsService} from "@modules/friends/service/friends.service";
import {FriendsRepository} from "@modules/friends/repository/friends.repository";
import {CreateFriendDTO, FriendDTO} from "@modules/friends/dto";

export class FriendsServiceImpl implements FriendsService {
    constructor(private readonly repository: FriendsRepository) {
    }
    createFriend(data: CreateFriendDTO): Promise<FriendDTO> {
        return this.repository.create(data)
    }

    deleteFriend(id: string): Promise<void> {
        return this.repository.delete(id)
    }

    getFriends(): Promise<FriendDTO[]> {
        return this.repository.getAll();
    }

}