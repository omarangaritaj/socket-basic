// Referncias al html
const lbOnline = document.querySelector('#lbOnline');
const lbOffline = document.querySelector('#lbOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnMensaje = document.querySelector('#btnMensaje');


// Eventos del socket

const socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
    lbOnline.style.display = '';
    lbOffline.style.display = 'none';

});

socket.on('disconnect', () => {
    console.log('desconectado al servidor');
    lbOnline.style.display = 'none';
    lbOffline.style.display = '';
});


// Listener 

btnMensaje.addEventListener('click', () => {
    const mensaje = txtMensaje.value;
    console.log(mensaje);
    socket.emit('enviarmensaje', mensaje);
    txtMensaje.value = "";
})