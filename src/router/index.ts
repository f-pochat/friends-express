import { Router } from 'express'

import { friendsRouter } from '@modules/friends'
import { addressRouter } from '@modules/address'

export const router = Router()

router.use('/friends', friendsRouter)
router.use('/address', addressRouter)