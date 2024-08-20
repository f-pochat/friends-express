import { Request, Response, Router } from 'express'
import {AddressServiceImpl} from "@modules/address/service/address.service.impl";
import {AddressRepositoryImpl} from "@modules/address/repository";
import {db} from "@utils";

export const addressRouter = Router()

const service = new AddressServiceImpl(new AddressRepositoryImpl(db))

addressRouter.get('/', async (res: Response) => {
    const address = await service.getAllAddresses();

    return res.status(200).json(address)
})

addressRouter.post('/', async (req: Request, res: Response) => {
    const data = req.body
    const address = await service.createAddress(data);

    return res.status(201).json(address)
})

addressRouter.put('/:id', async (req: Request, res: Response) => {
    const {id} = req.params
    const data = req.body
    const address = await service.updateAddress(id, data);

    return res.status(200).json(address)
})

addressRouter.delete('/:id', async (req: Request, res: Response) => {
    const {id} = req.params
    await service.deleteAddress(id);

    return res.status(204).json()
})