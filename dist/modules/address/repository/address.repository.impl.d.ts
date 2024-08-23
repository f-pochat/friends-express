import { AddressRepository } from '../../../modules/address/repository/address.repository';
import { PrismaClient } from '@prisma/client';
import { CreateAddressDTO, AddressDTO, UpdateAddressDTO } from '../../../modules/address/dto';
export declare class AddressRepositoryImpl implements AddressRepository {
    private readonly db;
    constructor(db: PrismaClient);
    create(data: CreateAddressDTO, friendId: string): Promise<AddressDTO>;
    getAll(): Promise<AddressDTO[]>;
    delete(id: string): Promise<void>;
    update(id: string, data: UpdateAddressDTO): Promise<AddressDTO>;
}
