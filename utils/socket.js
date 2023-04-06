/* Socket */
import { loggers } from "winston";
import { DAO } from "../DAOs/DAOsFactory.js";
import { Messages } from "../schemas/message.js";

export const socket = {

    init: (io) => {

        io.on('connection', async (socket) => {

            socket.on('chat message', async (msg) => {
                console.log('chat message =>', msg);
                io.emit('chat message', msg);
                await Messages.create({ msg })
            });


        });

    }
};