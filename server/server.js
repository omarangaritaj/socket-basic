const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require("http").createServer(this.app);
        this.io = require("socket.io")(this.server);


        // this.defaultPath = "*";

        // Middlewares
        this.middlewares();

        // Routes of the aplication
        this.routes();

        // sockets
        this.sockets();

    }

    routes() {

        // If doesnt exist a path send a 404 error
        // this.app.use(this.defaultPath, require("../routes/default.route"));
    }

    sockets() {
        this.io.on("connection", (socket) => {
            console.log('Cliente Conectado', socket.id);
        });
    }


    middlewares() {
        // CORS
        this.app.use(cors());
        //Expose "public" folder
        this.app.use(express.static("public"));
        // Reading and parser body
        this.app.use(express.json());
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Listen on port ${this.port}`);
        });
    }
}

module.exports = Server;