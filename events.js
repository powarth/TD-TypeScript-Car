"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybeEvent = maybeEvent;
exports.applyEvent = applyEvent;
const utils_1 = require("./utils");
function maybeEvent() {
    const x = Math.random();
    if (x < 0.15)
        return "flat_tire";
    if (x < 0.25)
        return "off_track";
    if (x < 0.31)
        return "engine_stall";
    if (x < 0.37)
        return "pit_stop";
    return null;
}
function applyEvent(c, e) {
    switch (e) {
        case "flat_tire": {
            const p = (0, utils_1.r)(25, 40);
            const slow = (0, utils_1.r)(40, 90);
            c.accelerate(-slow);
            console.warn(`Crevaison pour [${(0, utils_1.label)(c)}] (+${p}s).`);
            return p;
        }
        case "off_track": {
            const p = (0, utils_1.r)(15, 25);
            const slow = (0, utils_1.r)(60, 120);
            c.accelerate(-slow);
            console.warn(`Sortie de route pour [${(0, utils_1.label)(c)}] (+${p}s). Bac à graviers validé.`);
            c.stop();
            c.start();
            return p;
        }
        case "engine_stall": {
            const p = (0, utils_1.r)(10, 18);
            console.warn(`Calage pour [${(0, utils_1.label)(c)}] (+${p}s)..`);
            c.stop();
            c.start();
            return p;
        }
        case "pit_stop": {
            const p = (0, utils_1.r)(8, 14);
            console.warn(`Stands pour [${(0, utils_1.label)(c)}] (+${p}s).`);
            return p;
        }
    }
}
