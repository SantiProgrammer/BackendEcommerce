import mongoose from 'mongoose'
import { config } from '../config/config.js'
import logger from '../utils/winston.js'

export class MongoConnectSingleton {
    static instance = null

    constructor() {
        mongoose.set('strictQuery', false)
        mongoose
            .connect(config.DATABASES.MONGO.URL)
            .then(() =>
                logger.log(
                    'info',
                    '✅ Success: Users data from Mongo Atlas => Connected!'
                )
            )
            .catch((e) => logger.log('error', `❌ Error: Cant connect ${e}`))
    }
    static getInstance() {
        if (!MongoConnectSingleton.instance) {
            MongoConnectSingleton.instance = new MongoConnectSingleton()
        }
        return MongoConnectSingleton.instance
    }
}
