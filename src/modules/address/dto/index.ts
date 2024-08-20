import {IsNotEmpty, IsString} from "class-validator";

export class CreateAddressDTO {
    @IsString()
    @IsNotEmpty()
    street!: string

    @IsString()
    @IsNotEmpty()
    city!: string

    @IsString()
    @IsNotEmpty()
    state!: string

    @IsString()
    @IsNotEmpty()
    friendId!: string
}

export class AddressDTO {
    constructor (address: AddressDTO) {
        this.id = address.id
        this.street = address.street
        this.city = address.city
        this.state = address.state
    }

    id: string
    street: string
    city: string
    state: string
}