import io from 'socket.io-client';

const SOCKET_URL = process.env.NEXT_PUBLIC_APP_SOCKET;

export default io.connect(SOCKET_URL, {
    transports: ['websocket'],
    reconnectionAttempts: 6
});