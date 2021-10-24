"use strict";
/**
 * Author: Jeferson Rodrigues
 * Email: jefersonr.santos@outlook.com
 * Created at: 2021-09-14
 * Updated at: 2021-09-15
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_json_1 = __importDefault(require("./swagger.json"));
var server = (0, express_1.default)();
server.use(express_1.default.json());
// API for documentation
server.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
server.use(routes_1.router);
// start server
var port = process.env.PORT;
server.listen(port, function () { return console.log("Server is running on port " + port); });
