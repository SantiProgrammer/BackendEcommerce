import { postOrderService } from "../services/userServices.js";
import { newOrderEmail } from "../utils/nodeMailer.js";


export const getUserProfile = async (req, res) => {
    const { username, password, edad, telefono, direccion, url, nombre } = req.user
    const user = { username, password, edad, telefono, direccion, url, nombre }
    const admin = JSON.stringify(req.session.admin)
    res.render('pages/userProfile', { layout: 'logged', user, admin })
};


export const getSessionInfo = async (req, res) => {
    const mySession = JSON.stringify(req.session, null, 4)
    req.session.touch()
    res.render('pages/session', { layout: 'logged', session: mySession })
    //res.json(req.session)
};
export const postOrder = async (req, res) => {
    const { username } = req.user
    const cart = req.body
    const cartString = JSON.stringify(cart)

    console.log('cart', cart);
    postOrderService(cart)

    newOrderEmail(username, cartString)

    res.json("Orden creada!")
};


