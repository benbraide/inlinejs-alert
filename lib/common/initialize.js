"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initialize = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const alert_1 = require("./magic/alert");
const names_1 = require("./names");
const concept_1 = require("./concept");
function Initialize() {
    (0, inlinejs_1.GetGlobal)().SetConcept(names_1.AlertConceptName, new concept_1.AlertConcept);
    (0, alert_1.AlertMagicHandlerCompact)();
}
exports.Initialize = Initialize;
