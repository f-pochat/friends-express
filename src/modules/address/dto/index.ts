import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateAddressDto {
    @IsNotEmpty()
    @IsString()
    street!: string;

    @IsNotEmpty()
    @IsString()
    city!: string;

    @IsNotEmpty()
    @IsString()
    state!: string;

    @IsNotEmpty()
    @IsUUID()
    friendId!: string;
}

export class AddressDto {
    constructor(address: AddressDto) {
        this.id = address.id;
        this.street = address.street;
        this.city = address.city;
        this.state = address.state;
    }

    id: string;
    street: string;
    city: string;
    state: string;
}