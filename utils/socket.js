/* Socket */
import axios from 'axios';

export const socket = {

    init: (io) => {

        io.on('connection', async (socket) => {

            socket.on('chat message', async (msg) => {
                io.emit('chat message', msg);
                axios.post('http://localhost:8080/api/chat', msg)
                    .then((respuesta) => {
                        console.log('Mensaje enviado:', respuesta.data);
                    })
                    .catch((error) => {
                        console.log('Error al enviar el mensaje:', error);
                    });
            });


        });

    }
};