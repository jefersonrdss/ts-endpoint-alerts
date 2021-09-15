/**
 * Author: Jeferson Rodrigues
 * Email: jefersonr.santos@outlook.com
 * Created at: 2021-09-14
 * Updated at: 2021-09-15
 */

import { Router } from "express";
import { GraylogAlertsController } from "./controllers/GraylogAlertsController";

const router = Router();

const graylogAlertsController = new GraylogAlertsController();

/** ROUTES */
router.post("/graylog/alert", graylogAlertsController.handle);

export { router }