import {IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested} from 'class-validator'
import {Type} from 'class-transformer'
import {CreateAddressDTO} from '@modules/address/dto'

export class CreateFriendDTO {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsEmail()
    @IsNotEmpty()
    email!: string

    @IsString()
    @IsOptional()
    phone?:string

    @ValidateNested({ each: true })
    @Type(() => CreateAddressDTO)
    @IsOptional()
    addresses?: CreateAddressDTO[];

}

export class FriendDTO {
    constructor (friend: FriendDTO) {
        this.id = friend.id
        this.name = friend.name
        this.email = friend.email

    }

    id: string
    name: string
    email: string
}