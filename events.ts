import { Car } from "./Car";
import { EventName } from "./types";
import { r, label } from "./utils";

export function maybeEvent(): EventName | null {
  const x = Math.random();
  if (x < 0.15) return "flat_tire";
  if (x < 0.25) return "off_track";
  if (x < 0.31) return "engine_stall";
  if (x < 0.37) return "pit_stop";
  return null;
}

export function applyEvent(c: Car, e: EventName): number {
  switch (e) {
    case "flat_tire": {
      const p = r(25, 40);
      const slow = r(40, 90);
      c.accelerate(-slow);
      console.warn(`Crevaison pour [${label(c)}] (+${p}s).`);
      return p;
    }
    case "off_track": {
      const p = r(15, 25);
      const slow = r(60, 120);
      c.accelerate(-slow);
      console.warn(`Sortie de route pour [${label(c)}] (+${p}s). Bac à graviers validé.`);
      c.stop(); c.start();
      return p;
    }
    case "engine_stall": {
      const p = r(10, 18);
      console.warn(`Calage pour [${label(c)}] (+${p}s)..`);
      c.stop(); c.start();
      return p;
    }
    case "pit_stop": {
      const p = r(8, 14);
      console.warn(`Stands pour [${label(c)}] (+${p}s).`);
      return p;
    }
  }
}
