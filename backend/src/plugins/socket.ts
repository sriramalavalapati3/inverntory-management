import fp from 'fastify-plugin';
import fastifySocketIO from 'fastify-socket.io';
import { Socket } from 'socket.io';

export let io: any;

export default fp(async (fastify, opts) => {
    fastify.register(fastifySocketIO);

    fastify.ready((err) => {
        if(err) {
            throw new Error(`Socket.io plugin failed to register: ${err.message}`);
        }

        io = (fastify as any).io;

        io.on('connection', (socket: Socket) => {
            console.log('A client connected:', socket.id);
            socket.on('message', (msg) => {
                console.log('Message received:', msg);
                io.emit('message', msg); // Broadcast the message to all clients
            });
            socket.on('disconnect', () => {
                console.log('A client disconnected:', socket.id);
            });
        })
    })
} )