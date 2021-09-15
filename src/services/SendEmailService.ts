/**
 * Author: Jeferson Rodrigues
 * Email: <jefersonr.santos@outlook.com>
 * Created at: 2021-09-14
 * Updated at: 2021-09-14
 */

import 'dotenv/config';
import { env } from "process";
import nodemailer from "nodemailer";
import { IDataEmail } from "./interfaces";

class SendEmailService {

    private smtp_server: string;
    private smtp_port: string;
    private smtp_user: string;
    private smtp_pass: string;
    private source: string;
    private subject: string;
    private message: string;
    public  destination: string;

    // construtor
    constructor({ subject, message }: IDataEmail) {

        // verify environments
        if (env.SMTP_SERVER && env.SMTP_PORT  && env.SMTP_FROM 
            && env.SMTP_TO && env.SMTP_USER && env.SMTP_PASS) {

            this.smtp_server = env.SMTP_SERVER;
            this.smtp_port = env.SMTP_PORT;
            this.source = env.SMTP_FROM;
            this.destination = env.SMTP_TO;
            this.smtp_user = env.SMTP_USER;
            this.smtp_pass = env.SMTP_PASS;
        } else {

            throw new Error("Configuration file is incomplete");
        }
        
        this.subject = subject;
        this.message = message;
    }

    // execute send email
    async executeSendEmail(destination: string): Promise<void> {

        // configs smtp server
        const transport = nodemailer.createTransport({
            host: this.smtp_server,
            port: parseInt(this.smtp_port),
            secure: false,
            auth: { // auth
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
        await transport.sendMail({
            from: this.source,
            to: destination,
            subject: this.subject,
            html: this.message
        });
    }
}

export { SendEmailService }