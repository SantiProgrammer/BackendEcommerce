/* Socket */
import axios from 'axios';

export const socket = {

    init: (io) => {

        io.on('connection', async (socket) => {

            socket.on('chat message', async (msg) => {
                io.emit('chat message', msg);
            });


        });

    }
};