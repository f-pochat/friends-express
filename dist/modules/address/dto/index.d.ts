export declare class CreateAddressDTO {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
}
export declare class UpdateAddressDTO {
    street?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
}
export declare class AddressDTO {
    constructor(address: AddressDTO);
    id: string;
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    friendId: string;
}
