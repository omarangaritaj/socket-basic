require("dotenv").config();

const Server = require("./server/server");

app = new Server();
// const io = require("socket.io")(app);
app.listen();