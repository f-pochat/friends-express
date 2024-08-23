import { CreateAddressDTO } from '../../../modules/address/dto';
export declare class CreateFriendDTO {
    name: string;
    email: string;
    phone?: string;
    addresses?: CreateAddressDTO[];
}
export declare class FriendDTO {
    constructor(friend: FriendDTO);
    id: string;
    name: string;
    email: string;
}
