import { Car } from "./Car";
import { RaceConfig } from "./types";
import { r, label, lapTimeSec } from "./utils";
import { maybeEvent, applyEvent } from "./events";

function simulateLap(c: Car, lap: number, lapKm: number): number {
  if (lap === 1) console.log(`\n— Tour ${lap} — ${c.describe()}`); else console.log(`\n— Tour ${lap} — [${label(c)}]`);
  if (!c.started) c.start();
  const delta = r(-10, 45);
  c.accelerate(delta);
  const ev = maybeEvent();
  const penalty = ev ? applyEvent(c, ev) : 0;
  if (!ev && Math.random() < 0.2) console.log(`[${label(c)}] propre !`);
  const t = lapTimeSec(c.speed, lapKm, penalty);
  console.log(`${t.toFixed(1)}s (≈ ${c.speed} km/h)`);
  return t;
}

export function race(cars: Car[], cfg: RaceConfig): void {
  console.log(`==== 🏁 Course (${cfg.laps} tours de ${cfg.lapKm} km) ====`);
  const totals: Record<string, number> = {};
  for (const c of cars) totals[label(c)] = 0;
  for (let i = 1; i <= cfg.laps; i++) {
    for (const c of cars) totals[label(c)] += simulateLap(c, i, cfg.lapKm);
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
