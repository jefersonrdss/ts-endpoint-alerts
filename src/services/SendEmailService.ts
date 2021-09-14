/**
 * Author: Jeferson Rodrigues <jefersonr.santos@outlook.com>
 * Created at: 2021-09-14
 * Updated at: 2021-09-14
 */

import 'dotenv/config';
import nodemailer from "nodemailer"
import { IDataEmail } from "../interfaces"

class SendEmailService {

    private smtp_server: string | undefined;
    private smtp_port: string | undefined;
    private smtp_user: string | undefined;
    private smtp_pass: string | undefined;
    private source: string | undefined;
    private subject: string;
    private message: string;

    public readonly destination: string | undefined;

    // construtor
    constructor({ subject, message }: IDataEmail) {

        // smtp config
        this.smtp_server = process.env.SMTP_SERVER;
        this.smtp_port = process.env.SMTP_PORT;
        this.smtp_user = process.env.SMTP_USER;
        this.smtp_pass = process.env.SMTP_PASS;
;
        // email config
        this.source = process.env.SMTP_FROM;
        this.subject = subject;
        this.message = message;
        this.destination = process.env.SMTP_TO;
    }

    // Metodo para realizar o envio do email
    async executeSendEmail(destination: string): Promise<void> {

        if(this.smtp_server === undefined || this.smtp_port === undefined) {
            throw new Error("Incomplete configuration. SMTP SERVER or PORT is missing on config file")
        }

        // configs do smtp server
        const transport = nodemailer.createTransport({
            host: this.smtp_server,
            port: parseInt(this.smtp_port),
            secure: false,
            auth: { // auth
                user: this.smtp_user,
                pass: this.smtp_pass
            },
            tls: {
                // desabilita erros para certificado invalido
                rejectUnauthorized: false,
                ciphers: 'TLSv1'
            },
        });

        // enviar o email
        await transport.sendMail({
            from: this.source,
            to: destination,
            subject: this.subject,
            html: this.message
        });
    }
}

export { SendEmailService }