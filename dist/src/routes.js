"use strict";
/**
 * Author: Jeferson Rodrigues
 * Email: jefersonr.santos@outlook.com
 * Created at: 2021-09-14
 * Updated at: 2021-09-15
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var GraylogAlertsController_1 = require("./controllers/GraylogAlertsController");
var GrafanaAlertsController_1 = require("./controllers/GrafanaAlertsController");
var router = (0, express_1.Router)();
exports.router = router;
var graylogAlertsController = new GraylogAlertsController_1.GraylogAlertsController();
var grafanaAlertsController = new GrafanaAlertsController_1.GrafanaAlertsController();
/** ROUTES */
router.post("/graylog/alert", graylogAlertsController.handle);
router.post("/grafana/alert", grafanaAlertsController.handle);
