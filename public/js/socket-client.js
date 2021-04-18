const serverClient = io();

serverClient.on('connect', () => {
    console.log('Conectado al servidor');
});

serverClient.on('disconnect', () => {
    console.log('desconectado al servidor');
});