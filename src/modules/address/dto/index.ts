import {IsString, IsOptional, IsNotEmpty} from "class-validator";

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
    country!: string

    @IsString()
    @IsNotEmpty()
    zip!: string

}

export class UpdateAddressDTO {
    @IsString()
    @IsOptional()
    street?: string;

    @IsString()
    @IsOptional()
    city?: string;

    @IsString()
    @IsOptional()
    state?: string;

    @IsString()
    @IsOptional()
    country?: string;

    @IsString()
    @IsOptional()
    zip?: string;
}

export class AddressDTO {
    constructor (address: AddressDTO) {
        this.id = address.id
        this.street = address.street
        this.city = address.city
        this.state = address.state
        this.country = address.country
        this.zip = address.zip
        this.friendId = address.friendId
    }

    id: string
    street: string
    city: string
    state: string
    country: string
    zip: string
    friendId: string
}


