// Prensa de husillo para troquelar el emblema Eldara en el peto de cuero.
// Construye una página HTML independiente:  node build.mjs [--light]
// Fig 1 del taller de armería de Lorin.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as k from "./kit/iso-kit.mjs";
import { emblema, AREA_RELIEVE } from "./emblema.mjs";
import * as M from "./prensa.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const theme = process.argv.includes("--light") ? "light" : "dark";
const strip = (file) => readFileSync(join(HERE, file), "utf8").replace(/^export /gm, "").replace(/^import .*$/gm, "");

const WIDTH = 600;
const HEIGHT = 430;

// ---------- Mundo (mm). x a la derecha, y hacia el espectador, z arriba. ----------
const PLATE = { x: -128, y: -64, w: 262, d: 128, r: 8 };
const PLATE_H = 12;
const FOOT_H = 5;

const ANVIL = { x: -62, y: -49, w: 124, d: 96, r: 4 };
const ANVIL_H = 16;
const LEATHER = { x: -47, y: -44, w: 94, d: 86, r: 5 };
const LEATHER_TOP = ANVIL_H + M.CUERO;          // 19
const AX = [0, -1];                               // eje del husillo y centro del emblema

const EMB_SCALE = 0.72;                           // el relieve real mide 37 mm de ancho
const DIE_R = 32;
const DIE_H = 10;
const DIE_Z = LEATHER_TOP + M.HOLGURA;            // 53, cara del troquel a carro alto
const HOLDER_R = 14;
const HOLDER_H = 6;
const RAM = { x: -80, y: -27, w: 160, d: 40, r: 3 };
const RAM_Z = DIE_Z + DIE_H + HOLDER_H;           // 69
const RAM_H = 14;
const RAM_TOP = RAM_Z + RAM_H;                    // 83

const PILLARS = [[-72, -16], [72, -16]];
const PILLAR_R = 5;
const COLLAR_R = 9;
const COLLAR_H = 6;
const BUSH_R = 8.5;
const BUSH_Z = RAM_Z - 3;                         // 66
const BUSH_TOP = RAM_TOP + 9;                     // 92
const STOP_TOP = BUSH_Z - M.CARRERA;              // 30.8: el casquillo se posa aquí a tope
const STOP_H = 7;
const STOP_R = 7.5;
const CROSS = { x: -86, y: -26, w: 172, d: 20, r: 3 };
const CROSS_Z = BUSH_TOP + 4;                     // 96
const CROSS_H = 16;
const CROSS_TOP = CROSS_Z + CROSS_H;              // 112
const NUT_R = 8;
const NUT_H = 8;
const SNUT_R = 11;
const SNUT_H = 10;

const SCREW_R = 5.5;
const SCREW_TOP = RAM_TOP + 85;                   // 168 a carro alto
const HEAD_R = 8;
const HEAD_H = 8;
const BAR_HALF = 52;
const BAR_W = 5;
const BAR_H = 4;
const KNOB_R = 5;
const KNOB_H = 8;
const THREAD_STEP = 4;

const STRIP = { x: -110, y: PLATE.y + PLATE.d - 15, w: 150, d: 7, r: 1 };
const LABEL = { x: -118, y: 26, w: 42, d: 14, r: 1 };
const BLANK = { x: 84, y: -60, w: 44, d: 28, r: 3 };
const CRADLE = { x: 72, y: 0, w: 50, d: 50, r: 4 };
const CRADLE_H = 5;
const SPARE = [97, 25];
const SPARE_R = 31;
const SPARE_H = 10;
const RELIEF_H = 2.2;

const P = k.fitProjection(
  [
    ...k.boxCorners(PLATE, -PLATE_H - FOOT_H, 0),
    [AX[0] + BAR_HALF + KNOB_R, AX[1], SCREW_TOP],
    [AX[0] - BAR_HALF - KNOB_R, AX[1], SCREW_TOP],
    [AX[0], AX[1] + BAR_HALF + KNOB_R, SCREW_TOP],
    [AX[0], AX[1] - BAR_HALF - KNOB_R, SCREW_TOP],
  ],
  WIDTH,
  HEIGHT,
  { pad: 26, azimuth: 42 },
);

const at = (point) => k.iso(point, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (points, style) => k.dotsSvg(points, style);
const byDepth = (points) => [...points].sort((a, b) => k.depthOf([a[0], a[1], 0], P) - k.depthOf([b[0], b[1], 0], P));
const EMBLEMA = emblema(AX, EMB_SCALE);

// ---------- Base ----------
function base() {
  const out = [`<path class="iso-halo" d="${k.haloOf(PLATE, -PLATE_H - FOOT_H, PLATE_H, P)}"/>`];
  for (const [x, y] of byDepth(k.corners(PLATE, 22))) {
    out.push(S(k.cylinder(x, y, 7, -PLATE_H - FOOT_H, 1.6, P, 28), { tone: "lo" }));
    out.push(S(k.cylinder(x, y, 5.4, -PLATE_H - FOOT_H + 1.6, FOOT_H - 1.6, P, 28), { tone: "mid" }));
  }
  out.push(S(k.slabOf(PLATE, -PLATE_H, PLATE_H, P, 8, 1.6), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(PLATE, 5), 0, P), { tone: "lo" }));
  const screws = k.corners(PLATE, 10);
  out.push(L(screws.map(([x, y]) => k.ring(x, y, 2.2, 0, P, 16)).join(""), { tone: "lo" }));
  out.push(D(screws.map(([x, y]) => at([x, y, 0])), { size: 0.5 }));
  // Regla milimetrada en el frente.
  out.push(S(k.slabOf(STRIP, 0, 0.6, P, 3), { tone: "lo", crease: "none" }));
  const ticks = k.topTicks(STRIP.x + 4, STRIP.x + STRIP.w - 4, 4, 5, STRIP.y + 0.8, 0.6, [2, 3.6], P);
  out.push(L(ticks.minor, { tone: "lo" }), L(ticks.major, { tone: "mid" }));
  out.push(D([at([STRIP.x + 2, STRIP.y + 3.5, 0.6]), at([STRIP.x + STRIP.w - 2, STRIP.y + 3.5, 0.6])], { size: 0.45 }));
  // Placa de taller, atrás a la izquierda.
  out.push(S(k.slabOf(LABEL, 0, 0.8, P, 4), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(LABEL, 1.6), 0.8, P), { tone: "faint" }));
  [[28, 4.5], [20, 7.5], [34, 10.5]].forEach(([length, dy]) => {
    out.push(L(k.lineOnTop([LABEL.x + 5, LABEL.y + dy], [LABEL.x + 5 + length, LABEL.y + dy], 0.8, P), { tone: "lo", free: true }));
  });
  out.push(D([at([LABEL.x + 2.4, LABEL.y + 2.4, 0.8]), at([LABEL.x + LABEL.w - 2.4, LABEL.y + LABEL.d - 2.4, 0.8])], { size: 0.45 }));
  return out.join("");
}

// ---------- Yunque, escuadra y peto de cuero ----------
function anvil() {
  const out = [];
  out.push(S(k.slabOf(ANVIL, 0, ANVIL_H, P, 5, 1), { tone: "mid" }));
  const bolts = k.corners(ANVIL, 7);
  out.push(L(bolts.map(([x, y]) => k.ring(x, y, 2, ANVIL_H, P, 16)).join(""), { tone: "lo" }));
  out.push(D(bolts.map(([x, y]) => at([x, y, ANVIL_H])), { size: 0.5 }));
  // Escuadra de posicionado: dos listones que fijan el peto atrás y a la izquierda.
  const back = { x: -50, y: -47, w: 100, d: 3, r: 0.6 };
  const left = { x: -50, y: -47, w: 3, d: 86, r: 0.6 };
  out.push(S(k.slabOf(back, ANVIL_H, 4, P, 2, 0.3), { tone: "mid" }));
  out.push(S(k.slabOf(left, ANVIL_H, 4, P, 2, 0.3), { tone: "mid" }));
  out.push(D([at([-46, -45.5, ANVIL_H + 4]), at([46, -45.5, ANVIL_H + 4]), at([-48.5, 35, ANVIL_H + 4])], { size: 0.4, tone: "lo" }));
  // Peto de cuero: 3 mm, pespunte alrededor.
  out.push(S(k.slabOf(LEATHER, ANVIL_H, M.CUERO, P, 5, 0.5), { tone: "hi", crease: "lo" }));
  out.push(L(k.planOutline(k.insetPlan(LEATHER, 4), LEATHER_TOP, P, 5), { tone: "lo", dashed: true }));
  return out.join("");
}

// La huella que deja el troquel: un rebaje con la forma del emblema, en la cara del cuero.
function dieShadow() {
  return `<path data-part="sombra" class="iso-halo" style="opacity:0.12;filter:blur(3px)" d="${k.ring(AX[0], AX[1], DIE_R - 2, LEATHER_TOP, P, 48)}"/>`;
}

function impression() {
  const fill = EMBLEMA.map((ring) => k.onTop(ring, LEATHER_TOP, P, true)).join("");
  const edge = EMBLEMA.map((ring) => k.onTop(ring, LEATHER_TOP, P, true)).join("");
  return `<g data-part="huella" style="opacity:0"><path class="iso-fill" d="${fill}"/>${L(edge, { tone: "lit" })}</g>`;
}

// ---------- Columnas ----------
function pillarBase([x, y]) {
  const out = [];
  out.push(S(k.cylinder(x, y, COLLAR_R, 0, COLLAR_H, P, 28, 0.6), { tone: "mid" }));
  out.push(D([at([x, y + COLLAR_R - 2.4, COLLAR_H]), at([x - COLLAR_R + 2.4, y, COLLAR_H])], { size: 0.45, tone: "lo" }));
  return out.join("");
}

// Tope de carrera: collar moleteado con su tornillo prisionero. Los casquillos se posan en él.
function stop([x, y]) {
  const out = [];
  const z = STOP_TOP - STOP_H;
  out.push(S(k.cylinder(x, y, STOP_R, z, STOP_H, P, 28, 0.4), { tone: "mid" }));
  out.push(L(k.knurl(x, y, STOP_R, z, STOP_TOP, 30, P, 0.6), { tone: "lo" }));
  const [vx, vy] = k.towardViewer(P);
  const sx = x + vx * (STOP_R - 0.5), sy = y + vy * (STOP_R - 0.5);
  out.push(S(k.cylinder(sx, sy, 1.4, z + 2, STOP_H - 4, P, 12), { tone: "mid", crease: "none" }));
  return out.join("");
}

// ---------- Carro móvil: troquel, portatroquel, carro y casquillos ----------
function ram() {
  const out = [];
  out.push(S(k.cylinder(AX[0], AX[1], DIE_R, DIE_Z, DIE_H, P, 56, 0.6), { tone: "hi", crease: "lo" }));
  out.push(L(k.sideArc(AX[0], AX[1], DIE_R, DIE_Z + 2, P, 40), { tone: "faint" }));
  out.push(S(k.cylinder(AX[0], AX[1], HOLDER_R, DIE_Z + DIE_H, HOLDER_H, P, 32), { tone: "mid" }));
  out.push(L(k.knurl(AX[0], AX[1], HOLDER_R, DIE_Z + DIE_H, DIE_Z + DIE_H + HOLDER_H, 40, P), { tone: "lo" }));
  out.push(S(k.slabOf(RAM, RAM_Z, RAM_H, P, 4, 1), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(RAM, 4), RAM_TOP, P, 4), { tone: "faint" }));
  const bolts = k.corners(RAM, 6);
  out.push(L(bolts.map(([x, y]) => k.ring(x, y, 1.8, RAM_TOP, P, 14)).join(""), { tone: "lo" }));
  out.push(D(bolts.map(([x, y]) => at([x, y, RAM_TOP])), { size: 0.45 }));
  for (const [x, y] of PILLARS) {
    out.push(S(k.cylinder(x, y, BUSH_R, BUSH_Z, BUSH_TOP - BUSH_Z, P, 28, 0.5), { tone: "mid" }));
    out.push(L(k.sideArc(x, y, BUSH_R, RAM_Z - 0.6, P, 20) + k.sideArc(x, y, BUSH_R, RAM_TOP + 0.6, P, 20), { tone: "faint" }));
    // Engrasador en lo alto del casquillo.
    const [vx, vy] = k.towardViewer(P);
    out.push(S(k.cylinder(x + vx * 4.5, y + vy * 4.5, 1.2, BUSH_TOP, 2.2, P, 10), { tone: "mid", crease: "none" }));
  }
  return out.join("");
}

// ---------- Cabezal fijo ----------
function crossbar() {
  const out = [];
  out.push(S(k.slabOf(CROSS, CROSS_Z, CROSS_H, P, 4, 1), { tone: "mid", inner: L(k.sideSeam(CROSS, CROSS_Z + 4, P, 4), { tone: "faint" }) }));
  for (const [x, y] of PILLARS) {
    out.push(S(k.cylinder(x, y, NUT_R, CROSS_TOP, NUT_H, P, 6, 0.5), { tone: "mid" }));
    out.push(L(k.ring(x, y, PILLAR_R - 0.6, CROSS_TOP + NUT_H, P, 20), { tone: "lo" }));
  }
  out.push(S(k.cylinder(AX[0], AX[1], SNUT_R, CROSS_TOP, SNUT_H, P, 6, 0.5), { tone: "mid" }));
  out.push(L(k.ring(AX[0], AX[1], SCREW_R + 0.5, CROSS_TOP + SNUT_H, P, 24), { tone: "lo" }));
  out.push(k.faceTextSvg(k.sideMatrix([AX[0] - 9, CROSS.y + CROSS.d], CROSS_Z + 6, P, "left"), "LORIN", { size: 3.2, tone: "lo" }));
  return out.join("");
}

// ---------- Troquel de repuesto, boca arriba, con el relieve del emblema ----------
function spare() {
  const out = [];
  out.push(S(k.slabOf(CRADLE, 0, CRADLE_H, P, 4, 0.6), { tone: "mid" }));
  out.push(L(k.ring(SPARE[0], SPARE[1], SPARE_R + 1.2, CRADLE_H, P, 56), { tone: "faint" }));
  out.push(D(k.corners(CRADLE, 4).map(([x, y]) => at([x, y, CRADLE_H])), { size: 0.45, tone: "lo" }));
  out.push(S(k.cylinder(SPARE[0], SPARE[1], SPARE_R, CRADLE_H, SPARE_H, P, 56, 0.6), { tone: "hi", crease: "lo" }));
  out.push(L(k.sideArc(SPARE[0], SPARE[1], SPARE_R, CRADLE_H + SPARE_H - 2, P, 40), { tone: "faint" }));
  out.push(L(k.ring(SPARE[0], SPARE[1], SPARE_R - 3, CRADLE_H + SPARE_H, P, 56), { tone: "faint" }));
  // El troquel suelto está girado en su cuna para que el emblema se lea derecho desde la cámara.
  const upright = ((P.azimuth ?? 45) - 90) * (Math.PI / 180);
  for (const ring of emblema(SPARE, EMB_SCALE, upright)) {
    out.push(S(k.extrude(ring, CRADLE_H + SPARE_H, RELIEF_H, P, { convex: false }), { tone: "hi", crease: "lo" }));
  }
  return out.join("");
}

// Petos en blanco esperando, atrás a la derecha.
function blanks() {
  const out = [];
  [[0, 0], [1.6, -1.2], [0.6, 1.4]].forEach(([dx, dy], index) => {
    const plan = { ...BLANK, x: BLANK.x + dx, y: BLANK.y + dy };
    out.push(S(k.slabOf(plan, index * M.CUERO, M.CUERO, P, 3, 0.4), { tone: "hi", crease: "lo" }));
  });
  return out.join("");
}

// ---------- Piezas que se reconstruyen por fotograma (también en la página) ----------
const POSE = `
function poseOf(carrera) {
  const ramTop = RAM_TOP - carrera, bushZ = BUSH_Z - carrera, bushTop = BUSH_TOP - carrera, top = SCREW_TOP - carrera;
  const giro = (carrera / PASO) * Math.PI * 2;
  const S = (paths, style) => solidSvg(paths, style);
  const L = (d, style) => lineSvg(d, style);
  const threads = (z0, z1) => {
    let d = "";
    for (let z = ramTop + THREAD_STEP; z < z1 - 1; z += THREAD_STEP) if (z > z0 + 1) d += sideArc(AX[0], AX[1], SCREW_R, z, P, 18);
    return d ? L(d, { tone: "faint" }) : "";
  };
  const pillarLo = ([x, y]) => S(cylinder(x, y, PILLAR_R, COLLAR_H, bushZ - COLLAR_H, P, 24), { tone: "mid", crease: "none" }) + L(sideArc(x, y, PILLAR_R, 14, P, 16), { tone: "faint" });
  const pillarHi = ([x, y]) => S(cylinder(x, y, PILLAR_R, bushTop, CROSS_Z - bushTop, P, 24), { tone: "mid", crease: "none" });
  const screwLo = S(cylinder(AX[0], AX[1], SCREW_R, ramTop, CROSS_Z - ramTop, P, 24), { tone: "mid", crease: "none" }) + threads(ramTop, CROSS_Z);
  const screwHi = S(cylinder(AX[0], AX[1], SCREW_R, CROSS_TOP + SNUT_H, top - HEAD_H - CROSS_TOP - SNUT_H, P, 24), { tone: "mid", crease: "none" }) + threads(CROSS_TOP + SNUT_H, top - HEAD_H);
  const head = S(cylinder(AX[0], AX[1], HEAD_R, top - HEAD_H, HEAD_H, P, 28, 0.6), { tone: "mid" }) + L(ring(AX[0], AX[1], 2, top, P, 14), { tone: "lo" }) + dotsSvg([iso([AX[0], AX[1], top], P)], { size: 0.5, tone: "hi" });
  const dir = [Math.cos(giro), Math.sin(giro)], nrm = [-dir[1] * BAR_W / 2, dir[0] * BAR_W / 2];
  const arm = (sign) => {
    const a = [AX[0] + dir[0] * sign * 2, AX[1] + dir[1] * sign * 2];
    const b = [AX[0] + dir[0] * sign * BAR_HALF, AX[1] + dir[1] * sign * BAR_HALF];
    const ring4 = [[a[0] + nrm[0], a[1] + nrm[1]], [b[0] + nrm[0], b[1] + nrm[1]], [b[0] - nrm[0], b[1] - nrm[1]], [a[0] - nrm[0], a[1] - nrm[1]]];
    const z = top - HEAD_H / 2 - BAR_H / 2;
    const body = S(extrude(ring4, z, BAR_H, P), { tone: "mid" });
    const knob = S(cylinder(b[0], b[1], KNOB_R, top - HEAD_H / 2 - KNOB_H / 2, KNOB_H, P, 20, 0.4), { tone: "mid" }) + L(knurl(b[0], b[1], KNOB_R, top - HEAD_H / 2 - KNOB_H / 2, top - HEAD_H / 2 + KNOB_H / 2, 22, P), { tone: "lo" });
    return { depth: depthOf([b[0], b[1], z], P), body, knob };
  };
  const arms = [arm(1), arm(-1)].sort((p, q) => p.depth - q.depth);
  const capstan = arms[0].knob + arms[0].body + head + arms[1].body + arms[1].knob;
  return { pillarLoL: pillarLo(PILLARS[0]), pillarLoR: pillarLo(PILLARS[1]), pillarHi: pillarHi(PILLARS[0]) + pillarHi(PILLARS[1]), screwLo, screwHi: screwHi + capstan };
}
`;

const CONSTS = `
const P = ${JSON.stringify(P)};
const AX = ${JSON.stringify(AX)}, PILLARS = ${JSON.stringify(PILLARS)};
const RAM_TOP = ${RAM_TOP}, BUSH_Z = ${BUSH_Z}, BUSH_TOP = ${BUSH_TOP}, SCREW_TOP = ${SCREW_TOP}, COLLAR_H = ${COLLAR_H};
const PILLAR_R = ${PILLAR_R}, SCREW_R = ${SCREW_R}, CROSS_Z = ${CROSS_Z}, CROSS_TOP = ${CROSS_TOP}, SNUT_H = ${SNUT_H};
const HEAD_R = ${HEAD_R}, HEAD_H = ${HEAD_H}, BAR_HALF = ${BAR_HALF}, BAR_W = ${BAR_W}, BAR_H = ${BAR_H}, KNOB_R = ${KNOB_R}, KNOB_H = ${KNOB_H}, THREAD_STEP = ${THREAD_STEP};
const AREA = ${AREA_RELIEVE * EMB_SCALE * EMB_SCALE};
`;

// Pose de reposo para la página estática: se evalúa aquí con el mismo código que usa el navegador.
const poseFn = new Function(
  "P", "AX", "PILLARS", "RAM_TOP", "BUSH_Z", "BUSH_TOP", "SCREW_TOP", "COLLAR_H", "PILLAR_R", "SCREW_R", "CROSS_Z", "CROSS_TOP", "SNUT_H",
  "HEAD_R", "HEAD_H", "BAR_HALF", "BAR_W", "BAR_H", "KNOB_R", "KNOB_H", "THREAD_STEP", "PASO",
  "solidSvg", "lineSvg", "dotsSvg", "cylinder", "extrude", "sideArc", "ring", "knurl", "iso", "depthOf",
  `${POSE}; return poseOf;`,
)(P, AX, PILLARS, RAM_TOP, BUSH_Z, BUSH_TOP, SCREW_TOP, COLLAR_H, PILLAR_R, SCREW_R, CROSS_Z, CROSS_TOP, SNUT_H,
  HEAD_R, HEAD_H, BAR_HALF, BAR_W, BAR_H, KNOB_R, KNOB_H, THREAD_STEP, M.PASO,
  k.solidSvg, k.lineSvg, k.dotsSvg, k.cylinder, k.extrude, k.sideArc, k.ring, k.knurl, k.iso, k.depthOf);
const rest = poseFn(0);

const svg = k.figureSvg({
  width: WIDTH,
  height: HEIGHT,
  label:
    "Prensa de husillo sobre una bancada. Dos columnas sostienen un cabezal; por él pasa un husillo con barra de capstán que baja un carro con el troquel del emblema Eldara. Debajo, sobre el yunque, un peto de cuero sujeto por una escuadra. Al bajar, el troquel marca el emblema en el cuero. A la derecha, un troquel de repuesto boca arriba muestra el relieve.",
  body: [
    base(),
    `<g data-part="pillarLoL">${rest.pillarLoL}</g>`,
    stop(PILLARS[0]),
    pillarBase(PILLARS[0]),
    anvil(),
    dieShadow(),
    impression(),
    blanks(),
    `<g data-part="pillarLoR">${rest.pillarLoR}</g>`,
    stop(PILLARS[1]),
    pillarBase(PILLARS[1]),
    spare(),
    `<g data-part="carro">${ram()}<g data-part="screwLo">${rest.screwLo}</g></g>`,
    `<g data-part="pillarHi">${rest.pillarHi}</g>`,
    crossbar(),
    `<g data-part="screwHi">${rest.screwHi}</g>`,
  ],
});

const live = `
${strip("prensa.mjs")}
${CONSTS}
${POSE}
const stage = document.querySelector(".iso-stage");
const svg = stage.querySelector("svg");
const part = (name) => svg.querySelector('[data-part="' + name + '"]');
const carro = part("carro"), huella = part("huella"), sombra = part("sombra");
const groups = { pillarLoL: part("pillarLoL"), pillarLoR: part("pillarLoR"), pillarHi: part("pillarHi"), screwLo: part("screwLo"), screwHi: part("screwHi") };
const readout = document.querySelector("[data-readout]");
const still = matchMedia("(prefers-reduced-motion: reduce)");
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const fmt = (v, d) => v.toFixed(d).replace(".", ",");
const ease = (t) => t * t * (3 - 2 * t);
// Giro del capstán: ciclo de 9 s. Baja en 3,2 s, aprieta 1 s, sube en 2,4 s y deja ver la huella 2,4 s.
const tourAt = (t) => {
  const c = t % 9;
  if (c < 3.2) return ease(c / 3.2);
  if (c < 4.2) return 1;
  if (c < 6.6) return 1 - ease((c - 4.2) / 2.4);
  return 0;
};
let avance = 0, target = 0, marca = 0, marcaTarget = 0, lastCarrera = -1;
let frame = 0, last = 0, clock = 0, touring = !still.matches, visible = false, idleTimer = 0, cycle = -1;
function draw() {
  const e = estado(avance, AREA);
  if (e.carrera !== lastCarrera) {
    lastCarrera = e.carrera;
    carro.setAttribute("transform", translateAlong(P, [0, 0, -e.carrera]));
    const pose = poseOf(e.carrera);
    for (const name in groups) groups[name].innerHTML = pose[name];
  }
  huella.style.opacity = (marca / HUELLA_MAX).toFixed(3);
  sombra.style.opacity = (0.12 + 0.5 * Math.min(1, e.carrera / HOLGURA)).toFixed(3);
  const text = e.tope ? "a tope · huella " + fmt(e.huella, 2) + " mm · " + fmt(e.fuerza, 1) + " kN"
    : e.contacto ? "apretando · huella " + fmt(e.huella, 2) + " mm · " + fmt(e.fuerza, 1) + " kN"
    : "en vacío · carrera " + fmt(e.carrera, 1) + " mm · " + fmt(e.vueltas, 1) + " vueltas";
  if (readout.textContent !== text) readout.textContent = text;
  stage.setAttribute("aria-valuenow", String(Math.round(e.carrera * 10) / 10));
}
function tick(now) {
  const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
  last = now;
  const calm = still.matches;
  if (touring) {
    clock += dt;
    const c = Math.floor(clock / 9);
    if (c !== cycle) { cycle = c; marcaTarget = 0; }   // peto nuevo: la huella anterior se retira
    target = tourAt(clock);
  }
  // El husillo no corre más que la mano: una vuelta por segundo, con arranque suave.
  const step = Math.min(Math.abs(target - avance), (PASO / CARRERA) * 1.25 * dt);
  avance = calm ? target : avance + Math.sign(target - avance) * step * (0.35 + 0.65 * Math.min(1, Math.abs(target - avance) / 0.08));
  if (Math.abs(target - avance) < 0.0005) avance = target;
  const e = estado(avance, AREA);
  if (e.contacto) { marca = Math.max(marca, e.huella); marcaTarget = marca; }
  else marca = calm ? marcaTarget : marca + (marcaTarget - marca) * (1 - Math.exp(-dt / 0.35));
  if (Math.abs(marcaTarget - marca) < 0.002) marca = marcaTarget;
  draw();
  const settled = !touring && avance === target && marca === marcaTarget;
  frame = visible && !settled ? requestAnimationFrame(tick) : 0;
}
const run = () => { if (!frame && visible) { last = 0; frame = requestAnimationFrame(tick); } };
const steer = (next) => {
  if (touring) { touring = false; }
  if (avance < 0.02 && next > avance + 0.05) marcaTarget = 0;   // se coloca un peto nuevo antes de bajar
  target = clamp(next, 0, 1);
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => { if (still.matches) return; touring = true; clock = 0; cycle = -1; run(); }, 4000);
  run();
};
new IntersectionObserver((entries) => { visible = entries[entries.length - 1].isIntersecting; if (visible) run(); }, { rootMargin: "120px 0px" }).observe(stage);
stage.addEventListener("pointermove", (event) => {
  const box = svg.getBoundingClientRect();
  steer(clamp(((event.clientX - box.left) / box.width - 0.22) / 0.56, 0, 1));
});
stage.addEventListener("pointerleave", () => steer(target));
stage.addEventListener("keydown", (event) => {
  const big = event.shiftKey ? 0.25 : 0.05;
  let to = null;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") to = target + big;
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") to = target - big;
  if (event.key === "Home") to = 0;
  if (event.key === "End") to = 1;
  if (event.key === " " || event.key === "Enter") to = target > 0.5 ? 0 : 1;
  if (to === null) return;
  event.preventDefault();
  steer(to);
});
draw();
`;

const AREA = AREA_RELIEVE * EMB_SCALE * EMB_SCALE;
const fuerzaMax = M.fuerzaMax(AREA);
const body = k.plateHtml({
  fig: "Fig 1",
  title: "Prensa de troquel · emblema Eldara",
  hint: "Mueve el puntero: el husillo baja el troquel",
  readout: "en vacío · carrera 0,0 mm · 0,0 vueltas",
  keys: [
    { mark: "lit", label: "Huella del emblema en el peto de cuero: lo que deja la prensa" },
    { mark: "raised", label: "Troquel de repuesto boca arriba, con el relieve del emblema" },
  ],
  caption: `El emblema de los Eldara se marca en frío sobre el peto de cuero, en el taller de armería de Lorin. Cada vuelta del capstán baja el husillo ${M.PASO} mm; el troquel recorre ${M.HOLGURA} mm en vacío hasta tocar el cuero y lo hunde ${String(M.HUELLA_MAX).replace(".", ",")} mm más, donde los casquillos se posan en el tope de las columnas. La fuerza sube con la huella hasta ${fuerzaMax.toFixed(1).replace(".", ",")} kN sobre los ${Math.round(AREA)} mm² del relieve.`,
  body: `<div class="iso-stage" tabindex="0" role="slider" aria-label="Prensa de troquel: flechas bajan y suben el husillo, Espacio aprieta a tope" aria-valuemin="0" aria-valuemax="${M.CARRERA}" aria-valuenow="0">${svg}</div>`,
});

const kitScript = () => readFileSync(join(HERE, "kit", "iso-kit.mjs"), "utf8").replace(/^export /gm, "");
const file = theme === "light" ? "prensa-troquel-light.html" : "prensa-troquel.html";
writeFileSync(join(HERE, file), k.pageHtml({ title: "Prensa de troquel · emblema Eldara", theme, body, script: kitScript() + live }));
console.log("wrote", file, "· relieve", Math.round(AREA), "mm² · fuerza máx", fuerzaMax.toFixed(1), "kN");
