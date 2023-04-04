import dotenv from 'dotenv'
dotenv.config()

export const config = {
    SERVER: {
        PORT: process.env.PORT || 7777,
    },

    DATABASES: {
        MONGO: {
            URL: process.env.MONGODB_URL,
        },

        REDIS: {
            PASSWORD: process.env.PASSWORD,
            HOST: process.env.HOST,
            PORT: process.env.REDIS_PORT,
        },
    },

    UTILS: {
        NODEMAILER: {
            USER: process.env.NODEMAILER_USER,
            PASSWORD: process.env.NODEMAILER_PASS,
        },

        TWILIO: {
            ACCOUNTSID: process.env.TWILIO_ACCOUNTSID,
            AUTHTOKEN: process.env.TWILIO_AUTHTOKEN,
        },
    },
}
