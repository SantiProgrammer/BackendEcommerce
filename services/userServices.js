import { DAO } from "../DAOs/DAOsFactory.js";

export const getProductService = async () => {
    try {
        return await DAO.getProductData()
    } catch (e) {
        logger.log('error', `❌ Error cant get product service: ${e}`);
    }
};


