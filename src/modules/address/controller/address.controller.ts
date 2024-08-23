import { Request, Response, Router } from 'express';
import HttpStatus from 'http-status';
import { db } from '@utils';
import { AddressServiceImpl } from '../service';
import { AddressRepositoryImpl } from '../repository';
import { BodyValidation } from '@utils/validation';
import { CreateAddressDto } from '../dto';

export const addressRouter = Router();

const service = new AddressServiceImpl(new AddressRepositoryImpl(db));

addressRouter.get('/', async (req: Request, res: Response) => {
    const addresses = await service.getAddresses();
    return res.status(HttpStatus.OK).json(addresses);
});

addressRouter.post('/', BodyValidation(CreateAddressDto), async (req: Request, res: Response) => {
    const data = req.body;
    const address = await service.createAddress(data);
    return res.status(HttpStatus.CREATED).json(address);
});

addressRouter.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await service.deleteAddress(id);
    return res.status(HttpStatus.OK).send();
});

addressRouter.put('/:id', BodyValidation(CreateAddressDto), async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const address = await service.updateAddress(id, data);
    return res.status(HttpStatus.OK).json(address);
});