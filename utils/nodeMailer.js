import { createTransport } from 'nodemailer'
import logger from './winston.js'
import { config } from '../config/config.js'



const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.UTILS.NODEMAILER.USER,
        pass: config.UTILS.NODEMAILER.PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
})



export const newOrderEmail = async (username, order) => {


    const newOrderEmail = {
        from: 'santi.iztli@gmail.com',
        to: username,
        subject: '🛍️ eCommerce, Your order has been created!',
        html: `
        <h3 style="color:green;">✅ 🛍️ Created order!</h3>
        <h2>Thanks for your purchase at eCommerce BySanti.dev</h2>
        <p>Ordering user: ${username}</p>
        <p>Your order: ${order}</p>
        <p>This is a fake email order to test eCommerce by thisIsSanti.dev</p>
        `,
    }

    try {
        const info = await transporter.sendMail(newOrderEmail)
        logger.log('info', `✅ email has been sent to ${username}`)
    } catch (err) {
        logger.log('error', `❌ cant sent mail to ${username}`)
    }
}


export const sendUserEmail = async (username, password) => {

    const UserMailOptions = {
        from: 'santi.iztli@gmail.com',
        to: username,
        subject: '🛍️ eCommerce successful registration!',
        html: `
        <h3 style="color:green;">✅ Successful registration! eCommerce</h3>
        <h2>Welcome to eCommerce BySanti.dev Crew</h2>
        <p><strong>Username:</strong>${username}</p>
        <p><strong>Password:</strong>${password}</p>
        <p>Your password is encrypted and only you can see it.</p>
        `,
    }

    try {
        const info = await transporter.sendMail(UserMailOptions)
        logger.log('info', `✅ email has been sent to ${username}`)
    } catch (err) {
        logger.log('error', `❌ cant sent mail to ${username}`)
    }
}

export const sendAdminEmail = async (newUserName) => {

    const adminMailOptions = {
        from: 'santi.iztli@gmail.com',
        to: 'santi.iztli@gmail.com',
        subject: '🛍️ New user at eCommerce!',
        html: `<h3 style="color:green;">✅ Successful registration! eCommerce </h3>
        <p><strong>New user:</strong>${newUserName}</p>`,
    }

    try {
        const info = await transporter.sendMail(adminMailOptions)
        logger.log('info', `✅ email has been sent to admin!`)
    } catch (err) {
        logger.log('error', `❌ cant sent mail to admin!`)
    }
}


