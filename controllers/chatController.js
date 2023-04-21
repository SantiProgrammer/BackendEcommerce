import { postMessageService } from '../services/messageServices.js'
import logger from '../utils/winston.js'

export const getMessageData = async (req, res) => {
    try {
        res.render('pages/chatTab', { layout: 'logged' })
    } catch (e) {
        logger.log('error', `❌ Error cant render chat ${e}`)
    }
}

export const postMessageController = async (req, res) => {
    console.log('la data paso por postMessageController')

    try {
        const user = req.user
        const data = req.body
        await postMessageService(data, user).then(res.status(201))
    } catch (e) {
        logger.log('error', `❌ Error cant post message controller: ${e}`)
    }
}
