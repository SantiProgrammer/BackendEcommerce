import { createTransport } from 'nodemailer'
import logger from './winston.js'
import { config } from '../config/config.js'

export const sendEmail = async (mail, body) => {
    const DESTINATION_EMAIL = mail

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

    const mailOptions = {
        from: 'santi.iztli@gmail.com',
        to: DESTINATION_EMAIL,
        subject: 'Backend e-commerce registro exitoso',
        html: `<h3 style="color:green;">✅ Registro exitoso!</h3>
        <p><strong>Username:</strong>${DESTINATION_EMAIL}</p>
        <p>Pedido: ${body}</p>`,
        // attachments: [{ path: './Cuanto-pesa-un-gato-2.jpeg' }]
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        logger.log('info', `✅ Email has been sent to ${DESTINATION_EMAIL}`)
    } catch (err) {
        logger.log('error', `❌ Cant sent mail to ${DESTINATION_EMAIL}`)
    }
}
