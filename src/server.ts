import "dotenv/config";
import express from "express";
import { router } from "./routes";

const server = express();

server.use(express.json());

server.use(router);

// start server
const port = process.env.PORT;
server.listen(port, () => console.log("Server is running..."));