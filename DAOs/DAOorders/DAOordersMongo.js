import { Order } from '../../schemas/orders.js';
import logger from '../../utils/winston.js';

export class DAOordersMongo {

    postOrderData = async (data) => {
        try {
            await Order.create(data)
        } catch (e) {
            logger.log('error', `❌ Error cant post order data: ${e}`)
        }
    }

}
