import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const socket = io("ws//localhost:3000");

console.log(123);
document.querySelector("select").addEventListener("click", () => {
    console.log("Wysłano");
    socket.emit("click", "test");
})