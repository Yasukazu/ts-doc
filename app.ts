function writeGreeting() {
    document.getElementById("inject")?.innerHTML = "Hey, guys."
}

function greeting() {
    document.getElementById("inject")?.innerHTML += ":added. ";
}

document.getElementById("btn-script")?.onclick = greeting;
/*
let message: string = "Helo, guys..";
document.body.innerHTML = message;
*/
// console.log(`The user's name is ${userName}`);