/**
 * Author: Jeferson Rodrigues
 * Email: jefersonr.santos@outlook.com
 * Created at: 2021-09-14
 * Updated at: 2021-09-15
 */

import { Request, Response } from "express";
import { GraylogAlertsService } from "../services/GraylogAlertsService";

class GraylogAlertsController {

    async handle(request: Request, response: Response): Promise<Response> {

        // data from request
        const {
            event_definition_title: event_title,
            event_definition_description: event_description,
            backlog
        } = request.body;

        // instance service
        const graylogAlertsService = new GraylogAlertsService();

        // execute
        try {
            await graylogAlertsService.execute({
                event_title,
                event_description,
                backlog
            });

            return response.status(200).send();
        } catch (error) {

            return response.status(400).json({ error: error.message });
        }
    }
}

export { GraylogAlertsController }