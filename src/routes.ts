/**
 * Author: Jeferson Rodrigues
 * Email: jefersonr.santos@outlook.com
 * Created at: 2021-09-14
 * Updated at: 2021-09-15
 */

import { Router } from "express";
import { GraylogAlertsController } from "./controllers/GraylogAlertsController";
import { GrafanaAlertsController } from "./controllers/GrafanaAlertsController";

const router = Router();

const graylogAlertsController = new GraylogAlertsController();
const grafanaAlertsController = new GrafanaAlertsController();

/** ROUTES */
router.post("/graylog/alert", graylogAlertsController.handle);
router.post("/grafana/alert", grafanaAlertsController.handle);

export { router }