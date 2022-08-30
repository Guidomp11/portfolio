import io from 'socket.io-client';

const SOCKET_URL = process.env.SOCKET;

export default io.connect(SOCKET_URL, {
    transports: ['websocket'],
    reconnectionAttempts: 15
});