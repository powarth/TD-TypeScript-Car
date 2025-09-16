import { Car } from "./Car";
import { race } from "./race";

const a = new Car("Model Y", "Tesla", "jaune fluo", 2021);
const b = new Car("500", "Fiat", "rose", 2023);
const c = new Car("Twingo", "Renault", "noire", 2020);

race([a, b, c], { laps: 5, lapKm: 3 });
