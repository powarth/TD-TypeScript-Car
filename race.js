"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.race = race;
const utils_1 = require("./utils");
const events_1 = require("./events");
function simulateLap(c, lap, lapKm) {
    if (lap === 1)
        console.log(`\n— Tour ${lap} — ${c.describe()}`);
    else
        console.log(`\n— Tour ${lap} — [${(0, utils_1.label)(c)}]`);
    if (!c.started)
        c.start();
    const delta = (0, utils_1.r)(-10, 45);
    c.accelerate(delta);
    const ev = (0, events_1.maybeEvent)();
    const penalty = ev ? (0, events_1.applyEvent)(c, ev) : 0;
    if (!ev && Math.random() < 0.2)
        console.log(`[${(0, utils_1.label)(c)}] propre !`);
    const t = (0, utils_1.lapTimeSec)(c.speed, lapKm, penalty);
    console.log(`${t.toFixed(1)}s (≈ ${c.speed} km/h)`);
    return t;
}
function race(cars, cfg) {
    console.log(`==== 🏁 Course (${cfg.laps} tours de ${cfg.lapKm} km) ====`);
    const totals = {};
    for (const c of cars)
        totals[(0, utils_1.label)(c)] = 0;
    for (let i = 1; i <= cfg.laps; i++) {
        for (const c of cars)
            totals[(0, utils_1.label)(c)] += simulateLap(c, i, cfg.lapKm);
    }
    console.log(`\n==== 📊 Classement (plus petit temps) ====`);
    const ranking = Object.entries(totals).sort((a, b) => a[1] - b[1]);
    ranking.forEach(([name, t], k) => {
        const medal = k === 0 ? "🥇" : k === 1 ? "🥈" : k === 2 ? "🥉" : " ";
        console.log(`${medal} ${name} — ${t.toFixed(1)}s`);
    });
    const winner = ranking[0]?.[0] ?? "Quelqu’un";
    console.log(`\n🎉 Victoire de ${winner} !`);
}
