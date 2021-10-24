/**
 * Author: Jeferson Rodrigues
 * Email: jefersonr.santos@outlook.com
 * Created at: 2021-09-15
 * Updated at: 2021-09-15
 */

import { Request, Response } from "express";
import { GrafanaAlertsService } from "../services/GrafanaAlertsService";

class GrafanaAlertsController {
    async handle(request: Request, response: Response) {

        const { message, ruleName, state, title } = request.body;

        // instance service
        const grafanaAlertsService = new GrafanaAlertsService();

        //execute
        try {

            await grafanaAlertsService.execute({
                title,
                message,
                ruleName,
                state
            });

            return response.status(200).send();

        } catch (error: any) {

            return response.status(400).json({ error: error.message });
        }
    }
}

export { GrafanaAlertsController }