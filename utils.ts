import { Car } from "./Car";

export function r(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function label(c: Car): string {
  return `${c.brand} ${c.model}`;
}

export function lapTimeSec(speedKmh: number, lapKm: number, penaltySec = 0): number {
  const v = Math.max(30, speedKmh);
  return (lapKm / v) * 3600 + penaltySec;
}
