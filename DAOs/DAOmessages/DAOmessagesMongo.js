import { Messages } from '../../schemas/message.js'
import logger from '../../utils/winston.js'

export class DAOmessagesMongo {
    getMessageData = async () => {
        try {
            return await Messages.find({})
        } catch (e) {
            logger.log('error', `❌ Error cant get Message data: ${e}`)
        }
    }

    postMessageData = async (data) => {
        try {
            await Messages.create(data)
        } catch (e) {
            logger.log('error', `❌ Error cant post Message data: ${e}`)
        }
    }
}
