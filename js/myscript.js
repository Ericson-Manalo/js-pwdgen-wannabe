
// created a variable const for user's Name
const userName = prompt ('Insert your name');

// created a variable const for user's Surname
const userSurname = prompt ('Insert you surname');

// created a variable const for user's Favourite colour
const favouriteColor = prompt ('Insert your favourite color');

// created a variable to add all the variable listed above 
const pswGenerated = userName + userSurname + favouriteColor + 21;

document.getElementById('psw-generated').innerHTML = pswGenerated;

console.log(pswGenerated);