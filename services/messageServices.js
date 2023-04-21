import { DAO } from '../DAOs/DAOsFactory.js'
import logger from '../utils/winston.js'
import moment from 'moment/moment.js'



export const getMessagesService = async () => {
    try {
        return await DAO.getMessagesData()
    } catch (e) {
        logger.log('error', `❌ Error cant get stock service : ${e}`)
    }
}

export const postMessageService = async (data, user) => {

    const timestamp = moment().format('LLL');

    const newMessage = {
        author: {
            nombre: user.nombre,
            edad: user.edad,
            alias: user.username,
            avatar: user.url,
        },
        timestamp: timestamp,
        text: data
    }
    try {
        console.log('message:', newMessage);
        /* return await DAO.postMessageData(data, user) */
    } catch (e) {
        logger.log('error', `❌ Error cant post message service : ${e}`)
    }
}
