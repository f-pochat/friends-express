import express from 'express'
import 'reflect-metadata';
import cors from 'cors'

import {Constants, ErrorHandling, Logger} from '@utils'
import { router } from '@router'

const app = express()

// Set up request parsers
app.use(express.json()) // Parses application/json payloads request bodies
app.use(express.urlencoded({ extended: false })) // Parse application/x-www-form-urlencoded request bodies

// Set up CORS
app.use(
    cors({
        origin: Constants.CORS_WHITELIST
    })
)

app.use('/api', router)

app.use(ErrorHandling)

app.listen(Constants.PORT, () => {
    Logger.info(`Server listening on port ${Constants.PORT}`)
})