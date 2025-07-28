import Fastify from "fastify";
import cors from "@fastify/cors";
import socketPlugin from "./plugins/socket";
import dbPlugin from "./plugins/db";


const app = Fastify({
    logger: true,
});

app.register(socketPlugin);
app.register(dbPlugin);

app.register(cors, {
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
});


export default app;