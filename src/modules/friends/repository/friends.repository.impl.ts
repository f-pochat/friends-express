import {FriendsRepository} from "@modules/friends/repository/friends.repository";
import {CreateFriendDTO, FriendDTO} from "@modules/friends/dto";
import {BaseRepositoryImpl} from "@modules/shared/repository";

export class FriendsRepositoryImpl extends BaseRepositoryImpl<CreateFriendDTO, FriendDTO> implements FriendsRepository {}