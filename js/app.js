import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const socket = io();

console.log(123);
document.querySelector("select").addEventListener("click", () => {
    console.log("Wysłano");
    console.log(socket.id);
    socket.emit("click", "test");
})