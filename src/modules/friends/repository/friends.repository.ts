import {CreateFriendDTO, FriendDTO} from "@modules/friends/dto";
import {BaseRepository} from "@modules/shared/repository";

export interface FriendsRepository extends BaseRepository<CreateFriendDTO, FriendDTO> {}