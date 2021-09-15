/**
 * Author: Jeferson Rodrigues
 * Email: jefersonr.santos@outlook.com
 * Created at: 2021-09-14
 * Updated at: 2021-09-15
 */

import "dotenv/config";
import express from "express";
import { router } from "./routes";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

const server = express();

server.use(express.json());

// API for documentation
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.use(router);

// start server
const port = process.env.PORT;
server.listen(port, () => console.log(`Server is running on port ${port}`));