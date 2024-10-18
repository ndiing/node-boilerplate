// alert('ok')

const socket = new WebSocket("ws://localhost");
// socket.addEventListener('error',console.log)
socket.addEventListener("open", () => {
    socket.send(JSON.stringify({ message: "ping" }));
});
// socket.addEventListener('close',console.log)
socket.addEventListener("message", (event) => {
    console.log(JSON.parse(event.data));
});
