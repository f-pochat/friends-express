import {IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested} from 'class-validator'
import {Type} from "class-transformer";
import {AddressDTO} from "@modules/address/dto";

export class CreateFriendDTO {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsEmail()
    @IsNotEmpty()
    email!: string // ! indica que no es null ni undefined

    @IsString()
    @IsOptional()
    phone?:string // El ? indica que es opcional

    @IsArray()
    @ValidateNested({ each: true }) // Esto es para validar que cada objeto del array es un AddressDTO
    @Type(() => AddressDTO) // Especifico el tipo de los objetos de array
    addresses?: AddressDTO[]

}

export class FriendDTO {
    constructor (friend: FriendDTO) {
        this.id = friend.id
        this.name = friend.name
        this.email = friend.email
        this.Address = friend.Address.map(address => new AddressDTO(address))
    }

    id: string
    name: string
    email: string
    Address: AddressDTO[]
}