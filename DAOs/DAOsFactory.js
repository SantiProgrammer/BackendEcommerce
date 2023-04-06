import { DAOmessagesFile } from "./DAOmessages/DAOmessagesFile.js";
import { DAOmessagesMemory } from "./DAOmessages/DAOmessagesMemory.js";
import { DAOmessagesMongo } from "./DAOmessages/DAOmessagesMongo.js";

import { DAOproductsFile } from "./DAOproducts/DAOproductsFile.js";
import { DAOproductsMemory } from "./DAOproducts/DAOproductsMemory.js";
import { DAOproductsMongo } from "./DAOproducts/DAOproductsMongo.js";

import { MongoConnectSingleton } from "../utils/MongoConnectSingleton.js";

import logger from '../utils/winston.js';

let mode = process.argv[ 2 ];

export let DAO;

MongoConnectSingleton.getInstance();

switch (mode) {
    case 'dev':
        logger.log('info', `✅ Success: Data from DAOfactory Memory => Connected!`);
        DAO = new DAOmessagesMemory && new DAOproductsMemory;
        break;
    case 'file':
        logger.log('info', `✅ Success: Data from DAOfactory FileSystem => Connected!`);
        DAO = new DAOmessagesFile && new DAOproductsFile;
        break;
    case 'prod':
        logger.log('info', `✅ Success: Data from DAOfactory Mongodb => Connected!`);
        DAO = new DAOmessagesMongo && new DAOproductsMongo;
        break;
    default:
        throw logger.log('warn', `⚠️ DAOfactory unsetted`);
}
