const userName = prompt ('Insert your name');

const userSurname = prompt ('Insert you surname');

const favouriteColor = prompt ('Insert your favourite color');

const pswGenerated = userName + userSurname + favouriteColor;

document.getElementById('psw-generated').innerHTML = pswGenerated;