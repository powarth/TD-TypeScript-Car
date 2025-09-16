"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = require("./Car");
const race_1 = require("./race");
const a = new Car_1.Car("Model Y", "Tesla", "jaune fluo", 2021);
const b = new Car_1.Car("500", "Fiat", "rose", 2023);
const c = new Car_1.Car("Twingo", "Renault", "noire", 2020);
(0, race_1.race)([a, b, c], { laps: 5, lapKm: 3 });
