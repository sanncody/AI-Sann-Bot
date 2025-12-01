const dotenv = require('dotenv');
dotenv.config();

const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = require("./src/app");
const connectDB = require('./src/db/db');

connectDB();

// Express server communicates via http protocol
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
        
});

const PORT = 3000;
httpServer.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});