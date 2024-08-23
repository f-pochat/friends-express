import { Request, Response, Router } from 'express'
import HttpStatus from "http-status";
import {db} from "@utils";
import {AddressServiceImpl} from "@modules/address/service";
import {AddressRepositoryImpl} from "@modules/address/repository";
import {BodyValidation} from "@utils/validation";
import {CreateAddressDTO} from "@modules/address/dto";

export const addressRouter = Router()

const service = new AddressServiceImpl(new AddressRepositoryImpl(db))

addressRouter.get('/', async (req: Request, res: Response) => {
    const addresses = await service.getAddresses();

    return res.status(HttpStatus.OK).json(addresses)
})

addressRouter.post('/:friendId', BodyValidation(CreateAddressDTO), async (req: Request, res: Response) => {
    const data = req.body
    const { friendId } = req.params;
    const address = await service.createAddress(data, friendId);

    return res.status(HttpStatus.CREATED).json(address)
})

addressRouter.delete('/:id', async (req: Request, res: Response) => {
    const {id} = req.params
    const address = await service.deleteAddress(id);

    return res.status(HttpStatus.OK).json(address)
})

addressRouter.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const address = await service.updateAddress(id, data);
    return res.status(HttpStatus.OK).json(address);
});