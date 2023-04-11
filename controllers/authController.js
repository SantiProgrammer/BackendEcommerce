import { sendAdminEmail } from "../utils/nodeMailer.js";
import { sendSMS } from '../utils/twilio.js'
import logger from '../utils/winston.js'

export const getLoginController = async (req, res) => {
    if (req.isAuthenticated()) {
        const { username, password } = req.user
        const user = { username, password }
        res.render('pages/logInSucess', { layout: 'logged', user })
    } else {
        res.render('pages/logIn')
    }
}

export const getSignupController = async (req, res) => {
    if (req.isAuthenticated()) {
        const { username, password } = req.user
        const user = { username, password }
        res.render('pages/logInSucess', { layout: 'logged', user })
    } else {
        res.render('pages/signUp')
    }
}

export const postLoginController = async (req, res) => {
    const { username, password } = req.user
    const user = { username, password }
    req.session.admin = true
    res.render('pages/logInSucess', { layout: 'logged', user })
}

export const postSignupController = async (req, res) => {
    const { username, password } = req.user
    const user = { username, password }
    sendAdminEmail(user.username)
    sendSMS('User Registration succesful ✅', req.user.telefono)
    res.render('pages/logInSucess', { layout: 'logged', user })
}

export const getLogoutController = async (req, res) => {
    try {
        const { username, password } = req.user
        const user = { username, password }
        req.logout(() => {
            res.render('pages/logOut', { layout: 'index', user })
        })
    } catch (e) {
        logger.log('warn', '⚠️ No session to logout:', `${e}`)
        res.render('pages/logIn')
    }
}
export const getFailloginController = async (req, res) => {
    res.render('pages/logInError', {})
}

export const getFailsignup = async (req, res) => {
    res.render('pages/signUpError', {})
}

export const failRouteController = async (req, res) => {
    try {
        const clientRoute = req.params
        logger.log(
            'warn',
            `⚠️ Route entered by the client: ${JSON.stringify(clientRoute)}`
        )
        res.status(404).render('pages/routingError', {})
    } catch (e) {
        logger.log('error', `❌ Fail route controller: ${e}`)
    }
}
