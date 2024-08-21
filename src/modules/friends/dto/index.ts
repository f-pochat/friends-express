import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import {AddressDto, CreateAddressDto} from '@modules/address/dto';

export class CreateFriendDTO {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsNotEmpty()
    @IsOptional()
    addresses?: CreateAddressDto[];
}

export class FriendDTO {
    constructor(friend: FriendDTO) {
        this.id = friend.id;
        this.name = friend.name;
        this.email = friend.email;
        this.phone = friend.phone;
        this.addresses = friend.addresses.map(address => new AddressDto(address));
    }

    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsOptional()
    @IsString()
    phone?: string | null;

    @IsNotEmpty()
    addresses: AddressDto[];
}