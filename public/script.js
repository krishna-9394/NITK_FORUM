const socket = io();
const form = document.getElementById('chat-container');
const message = document.getElementById('message-input');
const submit = document.getElementById('send-button')
const messageArea = document.getElementById("chat-log");

const user = prompt("what is your name?");

// submit.addEventListener("keydown", (e) => {
    

//     if (message.value) {
//         socket.emit('send name', myname.value);
//         socket.emit('send message', message.value);
//         message.value = "";
//     }
// });

// socket.on("send name", (username) => {
//     let name = document.createElement("p");
//     name.style.backgroundColor = "grey";
//     name.style.width = "100%";
//     name.style.textAlign = "center";
//     name.style.color = "white";
//     name.textContent = username + ":";
//     messageArea.appendChild(name);
// });

// socket.on("send message", (chat) => {
//     let chatContent = document.createElement("p");
//     chatContent.textContent = chat;
//     messageArea.appendChild(chatContent);
// });