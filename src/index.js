import cipher from './cipher.js';

let firstScreen = document.getElementById('first-screen');
let startButton = document.getElementById('start-button');
let form = document.getElementById('form-container');
let letsDecodeButton = document.getElementById('lets-decode-button');
let decodeForm = document.getElementById('decode-form');

let encodedButton = document.getElementById('encoded-button');
let message = document.getElementById('message');
let encoded = document.getElementById('encoded');
let offset = document.getElementById('offset');

let decodedButton = document.getElementById('decoded-button');
let encodedMessage = document.getElementById('decoded-message');
let decodedMessage = document.getElementById('decoded');
let decodedOffset = document.getElementById('decoded-offset');

encodedButton.addEventListener('click', (e) => {
    e.preventDefault();
    encoded.innerHTML = cipher.encode(offset.value , message.value);
});

decodedButton.addEventListener('click', (e) => {
    e.preventDefault();
    decodedMessage.innerHTML = cipher.decode(decodedOffset.value, encodedMessage.value);
});

startButton.addEventListener('click', (e) => {
    e.preventDefault();
    firstScreen.style.display = 'none';
    form.style.display = 'flex';
});

letsDecodeButton.addEventListener('click', (e) => {
    e.preventDefault();
    decodeForm.style.display = 'flex';
    form.style.display = 'none';
});

console.log(cipher);