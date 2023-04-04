/* Redis cloud*/
import RedisStore from 'connect-redis'
import session from 'express-session'
import logger from '../utils/winston.js'
import { config } from '../config/config.js'

import { createClient } from 'redis'

export const client = createClient({
    password: config.DATABASES.REDIS.PASSWORD,
    socket: {
        host: config.DATABASES.REDIS.HOST,
        port: config.DATABASES.REDIS.PORT,
    },
    legacyMode: true,
})

export const RedisStoreSession = RedisStore(session)

export const redisConnect = () => {
    try {
        client.connect()
        logger.log('info', '✅ Success: Redis from cloud => Connected!')
    } catch (error) {
        throw logger.log('error', `❌ Can not connect to Redis! ${e}`)
    }
}
