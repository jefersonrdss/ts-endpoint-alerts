/**
 * Author: Jeferson Rodrigues
 * Email: jefersonr.santos@outlook.com
 * Created at: 2021-09-15
 * Updated at: 2021-09-15
 */

import moment from "moment";
import { IRequestGrafana } from "./interfaces";
import { SendEmailService } from "./SendEmailService";

class GrafanaAlertsService {

    private message: string;

    constructor() {
        this.message = "";
    }

    async execute({ title, message, ruleName, state }: IRequestGrafana): Promise<void> {

        /** email body */
        this.message = `
            <strong><h3>${title}</h3></strong>
            <strong><h4>${ruleName}</h4></strong>
            <strong>${state}</strong> ${message}
        `;
        /** end email body */

        const sendEmailService = new SendEmailService({ subject: title, message: this.message });
        const destinations = sendEmailService.destination.split(','); // get destinations list

        // execute send email for all destinations on list
        destinations.forEach(async (destination) => {

            // execute
            await sendEmailService.executeSendEmail(destination);

            // inseting logs on console
            const now = moment().format("YYYY-MM-DD HH:mm:ss"); // date and hour current
            console.log(`${now} Alert Grafana ${title} - E-mail enviado para: ${destination}`);
        });
    }
}

export { GrafanaAlertsService }