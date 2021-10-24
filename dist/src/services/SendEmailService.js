"use strict";
/**
 * Author: Jeferson Rodrigues
 * Email: <jefersonr.santos@outlook.com>
 * Created at: 2021-09-14
 * Updated at: 2021-09-14
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendEmailService = void 0;
require("dotenv/config");
var process_1 = require("process");
var nodemailer_1 = __importDefault(require("nodemailer"));
var SendEmailService = /** @class */ (function () {
    // construtor
    function SendEmailService(_a) {
        var subject = _a.subject, message = _a.message;
        // verify environments
        if (process_1.env.SMTP_SERVER && process_1.env.SMTP_PORT && process_1.env.SMTP_FROM
            && process_1.env.SMTP_TO && process_1.env.SMTP_USER && process_1.env.SMTP_PASS) {
            this.smtp_server = process_1.env.SMTP_SERVER;
            this.smtp_port = process_1.env.SMTP_PORT;
            this.source = process_1.env.SMTP_FROM;
            this.destination = process_1.env.SMTP_TO;
            this.smtp_user = process_1.env.SMTP_USER;
            this.smtp_pass = process_1.env.SMTP_PASS;
        }
        else {
            throw new Error("Configuration file is incomplete");
        }
        this.subject = subject;
        this.message = message;
    }
    // execute send email
    SendEmailService.prototype.executeSendEmail = function (destination) {
        return __awaiter(this, void 0, void 0, function () {
            var transport;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        transport = nodemailer_1.default.createTransport({
                            host: this.smtp_server,
                            port: parseInt(this.smtp_port),
                            secure: false,
                            auth: {
                                user: this.smtp_user,
                                pass: this.smtp_pass
                            },
                            tls: {
                                // disable tls verification
                                rejectUnauthorized: false,
                                ciphers: 'TLSv1'
                            },
                        });
                        // send email
                        return [4 /*yield*/, transport.sendMail({
                                from: this.source,
                                to: destination,
                                subject: this.subject,
                                html: this.message
                            })];
                    case 1:
                        // send email
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SendEmailService;
}());
exports.SendEmailService = SendEmailService;
