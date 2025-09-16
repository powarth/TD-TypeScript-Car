"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.r = r;
exports.label = label;
exports.lapTimeSec = lapTimeSec;
function r(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function label(c) {
    return `${c.brand} ${c.model}`;
}
function lapTimeSec(speedKmh, lapKm, penaltySec = 0) {
    const v = Math.max(30, speedKmh);
    return (lapKm / v) * 3600 + penaltySec;
}
