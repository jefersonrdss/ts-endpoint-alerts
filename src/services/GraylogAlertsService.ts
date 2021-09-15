/**
 * Author: Jeferson Rodrigues
 * Email: jefersonr.santos@outlook.com
 * Created at: 2021-09-14
 * Updated at: 2021-09-15
 */

import moment from "moment";
import { SendEmailService } from "./SendEmailService";
import { IRequestGraylog } from "./interfaces";

class GraylogAlertsService {

    private message: string = "";

    async execute({ event_title, event_description, backlog }: IRequestGraylog): Promise<void> {

        /** Email body */
        backlog.forEach(log => {
            this.message += `${log.timestamp} ${log.message}<br><br>`; // inserting logs message
        });

        const message = `
            <strong><h3>${event_title}</h3></strong>
            <strong><h4>${event_description}</h4></strong><br>
            ${this.message}
        `;
        /** end email body */ 

        // instance send email
        const sendEmailService = new SendEmailService({ subject: event_title, message });

        /** send for all emails on list */
        const destinations = sendEmailService.destination.split(','); // split list
        destinations.forEach(async (destination) => {

            await sendEmailService.executeSendEmail(destination); // send

            //log on console
            const now = moment().format("YYYY-MM-DD HH:mm:ss"); //date and hour current
            console.log(`${now} Alert Graylog ${event_title} - E-mail enviado para: ${destination}`);
        });
        /** end send email */
    }
}

export { GraylogAlertsService }