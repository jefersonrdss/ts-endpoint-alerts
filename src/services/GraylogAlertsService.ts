/**
 * Author: Jeferson Rodrigues <jefersonr.santos@outlook.com>
 * Created at: 2021-09-14
 * Updated at: 2021-09-14
 */

import moment from "moment";
import { SendEmailService } from "./SendEmailService";
import { IRequest } from "../interfaces";

class GraylogAlertsService {

    private message: string;

    constructor(){
        this.message = "";
    }

    async execute({ event_title, event_description, backlog }: IRequest): Promise<void> {

        const now = moment().format("YYYY-MM-DD HH:mm:ss") //data hora atual

        backlog.forEach(log => {
            this.message += `${log.timestamp} ${log.message}<br><br>` // inserindo os logs
        });

        const message = `
            <strong><h3>${event_title}</h3></strong>
            <strong><h4>${event_description}</h4></strong><br>
            ${this.message}
        `
        //*** fim corpo email */

        const sendEmailService = new SendEmailService({subject: event_title, message});
        const destinations = sendEmailService.destination.split(','); // lista de destinos separado por virgula

        // faz o envio pra todos os emails da lista
        destinations.forEach(destination => {

            // chama metodo async da classe sendEmailService
            sendEmailService.executeSendEmail(destination).then(() => {
                console.log(`${now} Alert Graylog ${event_title} - E-mail enviado para: ${destination}`)
            }).catch((error) => {

                console.error(`ERROR: ${error.message}`) // mensagem de erro
            })
        })

    }
}

export { GraylogAlertsService }