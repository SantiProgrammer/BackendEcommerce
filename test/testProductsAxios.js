import axios from "axios";
import { info } from "winston";
import logger from '../utils/winston.js'

await axios
    .get("http://localhost:8080/api/product/stock")
    .then((res) => {
        logger.log('info', "✅ Axios products get success!");
    })
    .catch((err) => {
        logger.log('error', `⚠️ Axios cant get products ${err}`);
        throw "⚠️ Axios cant get products";
    });

await axios
    .post("http://localhost:8080/api/product/post", {
        id: "axiosId",
        nombre: 'AxiosProduct',
        precio: 1000,
        descripcion: 'Axios product description',
        thumbnail: 'Axios image',
        stock: 100
    })
    .then((res) => {
        logger.log('info', "✅ Axios product posted successfully!");
    })
    .catch((err) => {
        logger.log('error', `⚠️ Axios cant post product ${err}`);
        throw "⚠️ Axios cant post product";
    });
