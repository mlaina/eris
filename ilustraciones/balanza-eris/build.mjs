// La balanza de Eris: opiniones frente a hechos, capítulo a capítulo.
// node build.mjs --datos datos.json [--light]
// Los valores de cada capítulo salen de una lectura del texto de la v2 (ver README.md).

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import * as k from "./kit/iso-kit.mjs";
import * as G from "./kit/lathe.mjs";
import { B, gancho, piezasMoviles } from "./piezas.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const arg = (name, fallback) => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : fallback; };
const theme = process.argv.includes("--light") ? "light" : "dark";
const DATOS = JSON.parse(readFileSync(join(HERE, arg("--datos", "datos.json")), "utf8"));
const N = DATOS.length;

const WIDTH = 600;
const HEIGHT = 440;

// ---------- Mundo ----------
const PLATE = { x: -134, y: -50, w: 268, d: 100, r: 6 };
const PLATE_H = 10;
const FOOT_H = 5;
const STRIP = { x: -110, y: 32, w: 220, d: 8, r: 1 };
const X0 = -100, X1 = 100;                      // primer y último capítulo sobre la regla
const capX = (i) => X0 + (i / (N - 1)) * (X1 - X0);
const ACTOS = DATOS.map((d, i) => (i === 0 || d.acto !== DATOS[i - 1].acto ? i : -1)).filter((i) => i >= 0);
const PAN_R = 25;
const PAN_Z = B.PIV - B.HALF_Z - B.HANG;        // altura del platillo con el brazo horizontal
const LEVEL = { x: -112, y: -34, w: 34, d: 9, r: 3.5 };
const LABEL = { x: 76, y: -40, w: 44, d: 13, r: 1 };
const MAX_TILT = (12 * Math.PI) / 180;

const P = k.fitProjection(
  [
    ...k.boxCorners(PLATE, -PLATE_H - FOOT_H, 0),
    [0, B.PLANE_Y, B.PIV + B.POINTER + 14],
    [-B.ARM - PAN_R, 0, PAN_Z - 12], [B.ARM + PAN_R, 0, PAN_Z - 12],
    [-B.ARM - 6, 0, B.PIV + 20], [B.ARM + 6, 0, B.PIV + 20],
  ],
  WIDTH, HEIGHT, { pad: 26, azimuth: 86 },
);

const at = (p) => k.iso(p, P);
const S = (paths, style) => k.solidSvg(paths, style);
const L = (d, style) => k.lineSvg(d, style);
const D = (points, style) => k.dotsSvg(points, style);
const byDepth = (points) => [...points].sort((a, b) => k.depthOf([a[0], a[1], 0], P) - k.depthOf([b[0], b[1], 0], P));

// ---------- Bancada ----------
function bancada() {
  const out = [`<path class="iso-halo" d="${k.haloOf(PLATE, -PLATE_H - FOOT_H, PLATE_H, P)}"/>`];
  for (const [x, y] of byDepth(k.corners(PLATE, 20))) {
    out.push(S(k.cylinder(x, y, 7, -PLATE_H - FOOT_H, 1.6, P, 28), { tone: "lo" }));
    out.push(S(k.cylinder(x, y, 5.4, -PLATE_H - FOOT_H + 1.6, FOOT_H - 1.6, P, 28), { tone: "mid" }));
  }
  out.push(S(k.slabOf(PLATE, -PLATE_H, PLATE_H, P, 8, 1.4), { tone: "mid", inner: L(k.sideSeam(PLATE, -4, P, 8), { tone: "faint" }) }));
  out.push(L(k.planOutline(k.insetPlan(PLATE, 5), 0, P), { tone: "lo" }));
  const tornillos = k.corners(PLATE, 9);
  out.push(L(tornillos.map(([x, y]) => k.ring(x, y, 2, 0, P, 14)).join(""), { tone: "lo" }));
  out.push(D(tornillos.map(([x, y]) => at([x, y, 0])), { size: 0.5 }));
  // Grabado en el frente de la bancada: la balanza es del laboratorio de Norel.
  out.push(k.faceTextSvg(k.sideMatrix([PLATE.x + PLATE.w - 46, PLATE.y + PLATE.d], -3.2, P, "left"), "NOREL", { size: 3.2, tone: "lo" }));
  // Nivel de burbuja.
  out.push(S(k.slabOf(LEVEL, 0, 4, P, 6, 0.5), { tone: "mid" }));
  const vial = k.insetPlan(LEVEL, 2);
  out.push(L(k.planOutline(vial, 4, P, 6), { tone: "faint" }));
  const cx = LEVEL.x + LEVEL.w / 2, cy = LEVEL.y + LEVEL.d / 2;
  out.push(L(k.lineOnTop([cx - 3.4, LEVEL.y + 2], [cx - 3.4, LEVEL.y + LEVEL.d - 2], 4, P) + k.lineOnTop([cx + 3.4, LEVEL.y + 2], [cx + 3.4, LEVEL.y + LEVEL.d - 2], 4, P), { tone: "lo" }));
  out.push(L(k.ring(cx, cy, 2.2, 4, P, 18), { tone: "hi" }));
  // Tornillos de nivelación, delante.
  for (const x of [PLATE.x + 16, PLATE.x + PLATE.w - 16]) {
    const y = PLATE.y + PLATE.d - 26;
    out.push(S(k.cylinder(x, y, 4.6, 0, 1.2, P, 24), { tone: "lo" }));
    out.push(S(k.cylinder(x, y, 3.6, 1.2, 4.4, P, 24), { tone: "mid" }));
    out.push(L(k.knurl(x, y, 3.6, 1.2, 5.6, 26, P), { tone: "lo" }));
  }
  // Placa de registro, atrás a la derecha.
  out.push(S(k.slabOf(LABEL, 0, 0.8, P, 3), { tone: "mid" }));
  out.push(L(k.planOutline(k.insetPlan(LABEL, 1.5), 0.8, P, 3), { tone: "faint" }));
  [[30, 4.2], [22, 6.8], [34, 9.4]].forEach(([len, dy]) => out.push(L(k.lineOnTop([LABEL.x + 5, LABEL.y + dy], [LABEL.x + 5 + len, LABEL.y + dy], 0.8, P), { tone: "lo", free: true })));
  out.push(D([at([LABEL.x + 2.2, LABEL.y + 2.2, 0.8]), at([LABEL.x + LABEL.w - 2.2, LABEL.y + LABEL.d - 2.2, 0.8])], { size: 0.42 }));
  // Regla de capítulos: una marca por capítulo, mayor al empezar cada acto.
  out.push(S(k.slabOf(STRIP, 0, 0.6, P, 3), { tone: "lo", crease: "none" }));
  let menores = "", mayores = "";
  DATOS.forEach((_, i) => {
    const x = capX(i);
    const largo = ACTOS.includes(i) ? 4.4 : 2.4;
    const d = k.lineOnTop([x, STRIP.y + 0.6], [x, STRIP.y + 0.6 + largo], 0.6, P);
    if (ACTOS.includes(i)) mayores += d; else menores += d;
  });
  out.push(L(menores, { tone: "lo" }), L(mayores, { tone: "mid" }));
  out.push(D([at([STRIP.x + 3, STRIP.y + 4, 0.6]), at([STRIP.x + STRIP.w - 3, STRIP.y + 4, 0.6])], { size: 0.42 }));
  // Sombras suaves bajo los platillos.
  for (const lado of [-1, 1]) {
    const halo = { x: lado * B.ARM - PAN_R * 0.8, y: -PAN_R * 0.8, w: PAN_R * 1.6, d: PAN_R * 1.6, r: PAN_R * 0.8 };
    out.push(`<path class="iso-halo" style="opacity:.12;filter:blur(8px)" d="${k.haloOf(halo, 0, 0.1, P)}"/>`);
  }
  return out.join("");
}

// Cursor que recorre la regla. Se dibuja en x = 0 y se traslada.
function cursor() {
  const c = { x: -3.4, y: STRIP.y - 2, w: 6.8, d: STRIP.d + 4, r: 1.2 };
  return S(k.slabOf(c, 0.6, 2.6, P, 3, 0.4), { tone: "hi", crease: "lo" })
    + L(k.lineOnTop([0, c.y + 1], [0, c.y + c.d - 1], 3.2, P), { tone: "hi" })
    + D([at([-1.8, c.y + c.d - 1.4, 3.2]), at([1.8, c.y + c.d - 1.4, 3.2])], { size: 0.38, tone: "lo" });
}

// ---------- Columna, horquilla y escala ----------
const FORK_Z0 = B.PIV - 12, FORK_Z1 = B.PIV + 7;
function columna() {
  const out = [];
  out.push(S(k.cylinder(0, 0, 13, 0, 3, P, 40, 0.5), { tone: "lo" }));
  out.push(S(k.cylinder(0, 0, 9.5, 3, 5, P, 40, 0.5), { tone: "mid" }));
  out.push(S(k.cylinder(0, 0, 5.2, 8, FORK_Z0 - 8 - 6, P, 28), { tone: "mid", crease: "none", inner: L([40, 86].map((z) => k.sideArc(0, 0, 5.2, z, P, 18)).join(""), { tone: "faint" }) }));
  out.push(S(k.slabOf({ x: -9, y: -9, w: 18, d: 18, r: 2 }, FORK_Z0 - 6, 6, P, 3, 0.5), { tone: "mid" }));
  return out.join("");
}
const forkPlate = (y0) => S(k.slabOf({ x: -8, y: y0, w: 16, d: 2.2, r: 0.6 }, FORK_Z0, FORK_Z1 - FORK_Z0, P, 2, 0.3), { tone: "mid" });
function escala() {
  // Vástago detrás del fiel y placa de escala en el plano y = 6.4, mirando al espectador.
  const out = [];
  const R0 = B.POINTER - 9, R1 = B.POINTER - 2;
  out.push(S(k.cylinder(0, 4.2, 1.3, FORK_Z1, B.PIV + R0 - FORK_Z1 + 1, P, 14), { tone: "mid", crease: "none" }));
  const plano = k.sideMatrix([0, 6.4], B.PIV, P, "left");
  const span = (26 * Math.PI) / 180;
  const arco = (r, a0, a1, n = 40) => Array.from({ length: n + 1 }, (_, i) => { const a = a0 + ((a1 - a0) * i) / n; return [r * Math.sin(a), -r * Math.cos(a)]; });
  const sector = [...arco(R1, -span, span), ...arco(R0, span, -span)];
  const dPlaca = "M" + sector.map(([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`).join("L") + "Z";
  let ticks = "", majors = "", cero = "";
  for (let i = -10; i <= 10; i++) {
    const a = (i / 10) * (MAX_TILT);
    const largo = i % 5 === 0 ? 3.6 : 2.2;
    const p0 = [(R1 - 0.4) * Math.sin(a), -(R1 - 0.4) * Math.cos(a)];
    const p1 = [(R1 - 0.4 - largo) * Math.sin(a), -(R1 - 0.4 - largo) * Math.cos(a)];
    const seg = `M${p0[0].toFixed(2)} ${p0[1].toFixed(2)}L${p1[0].toFixed(2)} ${p1[1].toFixed(2)}`;
    if (i === 0) cero += seg; else if (i % 5 === 0) majors += seg; else ticks += seg;
  }
  out.push(`<g transform="${plano}"><path class="iso-fill" d="${dPlaca}"/><path class="iso-shade" data-shade="2" d="${dPlaca}"/>`
    + `<path class="iso-line" data-tone="lo" vector-effect="non-scaling-stroke" d="${ticks}"/>`
    + `<path class="iso-line" data-tone="mid" vector-effect="non-scaling-stroke" d="${majors}"/>`
    + `<path class="iso-line" data-tone="hi" vector-effect="non-scaling-stroke" d="${cero}"/>`
    + `<path class="iso-line" data-tone="mid" vector-effect="non-scaling-stroke" d="${dPlaca}"/></g>`);
  return out.join("");
}

// ---------- Platillos con su suspensión (se construyen con el brazo horizontal y se trasladan) ----------
const SLOTS = [[0, 0], [12, -7], [-12, -7], [-12, 7], [12, 7]];
function platillo(lado) {
  const out = [];
  const [hx, , hz] = gancho(0, lado);
  const cx = hx, z = PAN_Z;
  const aros = [Math.PI / 2, (7 * Math.PI) / 6, (11 * Math.PI) / 6].map((a) => [cx + (PAN_R - 2) * Math.cos(a), (PAN_R - 2) * Math.sin(a), z + 2.2]);
  // Hilos de atrás, platillo, pesas, hilo de delante.
  const ojo = [hx, 0, hz - 4];
  const hilos = aros.map((p) => ({ d: k.segment(ojo, p, P), depth: k.depthOf(p, P) })).sort((a, b) => a.depth - b.depth);
  out.push(S(k.cylinder(hx, 0, 1.6, hz - 4, 4, P, 12), { tone: "mid", crease: "none" }));
  out.push(L(k.ring(hx, 0, 1.6, hz - 4, P, 12), { tone: "lo" }));
  hilos.slice(0, 1).forEach((h) => out.push(L(h.d, { tone: "lo" })));
  out.push(S(k.cylinder(cx, 0, PAN_R, z, 2.2, P, 64, 0.6), { tone: lado < 0 ? "mid" : "hi", crease: "lo" }));
  out.push(L(k.ring(cx, 0, PAN_R - 3, z + 2.2, P, 56), { tone: "faint" }));
  out.push(D(aros.map((p) => at(p)), { size: 0.5, tone: "mid" }));
  // Cargas: pesas redondas (voces) a la izquierda, bloques (hechos) a la derecha.
  const orden = [...SLOTS.keys()].sort((a, b) => k.depthOf([cx + SLOTS[a][0], SLOTS[a][1], 0], P) - k.depthOf([cx + SLOTS[b][0], SLOTS[b][1], 0], P));
  for (const i of orden) {
    const [dx, dy] = SLOTS[i];
    const x = cx + dx, y = dy, z0 = z + 2.2;
    let pieza;
    if (lado < 0) {
      pieza = S(k.cylinder(x, y, 5, z0, 8, P, 28, 0.5), { tone: "mid" })
        + S(k.cylinder(x, y, 2.2, z0 + 8, 2, P, 16), { tone: "mid", crease: "none" })
        + S(k.cylinder(x, y, 3.4, z0 + 10, 3, P, 20, 0.4), { tone: "mid" });
    } else {
      const b = { x: x - 4.5, y: y - 3.2, w: 9, d: 6.4, r: 0.6 };
      pieza = S(k.slabOf(b, z0, 9, P, 2, 0.5), { tone: "hi", crease: "lo", inner: L(k.planOutline(k.insetPlan(b, 1.4), z0 + 9, P, 2), { tone: "faint" }) });
    }
    out.push(`<g data-carga="${lado < 0 ? "v" : "h"}${i}" style="opacity:0;transition:opacity .45s">${pieza}</g>`);
  }
  hilos.slice(1).forEach((h) => out.push(L(h.d, { tone: "lo" })));
  return out.join("");
}

// ---------- Pose inicial ----------
const dato0 = DATOS[0];
const torque = (d) => d.hechos * (d.confianza / 5) - d.voces * (1 - d.confianza / 5);
const thetaDe = (d) => Math.max(-MAX_TILT, Math.min(MAX_TILT, (torque(d) / 4) * MAX_TILT));
const th0 = thetaDe(dato0);
const pose0 = piezasMoviles(th0, dato0.confianza, P, k, G);
const desplaza = (lado, th) => { const a = gancho(th, lado), b = gancho(0, lado); return k.translateAlong(P, [a[0] - b[0], 0, a[2] - b[2]]); };

const svg = k.figureSvg({
  width: WIDTH,
  height: HEIGHT,
  label: "Una balanza de laboratorio sobre una bancada. En el platillo izquierdo, pesas redondas: las voces que le dicen a Eris cómo son las cosas. En el derecho, bloques: los hechos que ella ha visto. Un jinete corre por el brazo derecho según su confianza en su propio juicio, y el fiel marca hacia dónde se inclina en cada capítulo. Un cursor recorre la regla de capítulos.",
  body: [
    bancada(),
    `<g data-part="cursor" transform="${k.translateAlong(P, [capX(0), 0, 0])}">${cursor()}</g>`,
    `<g data-part="izq" transform="${desplaza(-1, th0)}">${platillo(-1)}</g>`,
    columna(),
    forkPlate(-6.6),
    `<g data-part="brazo">${pose0.brazo}</g>`,
    forkPlate(4.4),
    escala(),
    `<g data-part="fiel">${pose0.fiel}</g>`,
    `<g data-part="der" transform="${desplaza(1, th0)}">${platillo(1)}</g>`,
  ],
});

const latheSource = readFileSync(join(HERE, "kit", "lathe.mjs"), "utf8").replace(/^import .*$/m, "").replace(/^export /gm, "");
const latheScript = `const G = (() => {${latheSource}\nreturn { frameOf, prismOf, disc };})();\n`;
const piezasScript = readFileSync(join(HERE, "piezas.mjs"), "utf8").replace(/^export /gm, "");
const kitScript = readFileSync(join(HERE, "kit", "iso-kit.mjs"), "utf8").replace(/^export /gm, "");

const live = `
const k = { solidSvg, lineSvg, dotsSvg, iso, segment, translateAlong };
const P = ${JSON.stringify(P)};
const DATOS = ${JSON.stringify(DATOS)};
const N = DATOS.length, X0 = ${X0}, X1 = ${X1}, MAX_TILT = ${MAX_TILT};
const capX = (i) => X0 + (i / (N - 1)) * (X1 - X0);
const torque = (d) => d.hechos * (d.confianza / 5) - d.voces * (1 - d.confianza / 5);
const thetaDe = (d) => Math.max(-MAX_TILT, Math.min(MAX_TILT, (torque(d) / 4) * MAX_TILT));
const stage = document.querySelector(".iso-stage");
const svg = stage.querySelector("svg");
const part = (n) => svg.querySelector('[data-part="' + n + '"]');
const brazo = part("brazo"), fiel = part("fiel"), izq = part("izq"), der = part("der"), cur = part("cursor");
const readout = document.querySelector("[data-readout]");
const ficha = document.querySelector("[data-ficha]");
const still = matchMedia("(prefers-reduced-motion: reduce)");
const desplaza = (lado, th) => { const a = gancho(th, lado), b = gancho(0, lado); return translateAlong(P, [a[0] - b[0], 0, a[2] - b[2]]); };
let idx = 0, mostrado = -1, theta = thetaDe(DATOS[0]), rate = 0, jinete = DATOS[0].confianza;
let curX = capX(0), frame = 0, last = 0, clock = 0, touring = !still.matches, visible = false, idleTimer = 0;
function cargas(d) {
  for (let i = 0; i < 5; i++) {
    svg.querySelector('[data-carga="v' + i + '"]').style.opacity = i < d.voces ? 1 : 0;
    svg.querySelector('[data-carga="h' + i + '"]').style.opacity = i < d.hechos ? 1 : 0;
  }
}
function texto(d) {
  const lado = torque(d) > 0.4 ? "se inclina hacia los hechos" : torque(d) < -0.4 ? "pesan más las voces" : "en equilibrio";
  const t = "Cap " + d.cap + " · " + lado;
  if (readout.textContent !== t) readout.textContent = t;
  if (ficha) {
    ficha.querySelector("[data-f=titulo]").textContent = "Capítulo " + d.cap + " · " + d.titulo;
    ficha.querySelector("[data-f=nums]").textContent = "voces " + d.voces + " · hechos " + d.hechos + " · confianza " + d.confianza + " (de 0 a 5)";
    ficha.querySelector("[data-f=eleccion]").textContent = d.eleccion ? "Elección: " + d.eleccion : "Sin elección clave en este capítulo.";
    ficha.querySelector("[data-f=nota]").textContent = d.nota || "";
  }
  stage.setAttribute("aria-valuenow", String(idx + 1));
  stage.setAttribute("aria-valuetext", "Capítulo " + d.cap + ", " + d.titulo + ": " + lado);
}
function draw() {
  const p = piezasMoviles(theta, jinete, P, k, G);
  brazo.innerHTML = p.brazo;
  fiel.innerHTML = p.fiel;
  izq.setAttribute("transform", desplaza(-1, theta));
  der.setAttribute("transform", desplaza(1, theta));
  cur.setAttribute("transform", translateAlong(P, [curX, 0, 0]));
}
function tick(now) {
  const dt = last ? Math.min((now - last) / 1000, 1 / 30) : 1 / 60;
  last = now;
  const calm = still.matches;
  if (touring) { clock += dt; idx = Math.floor(clock / 1.9) % N; }
  const d = DATOS[idx];
  if (mostrado !== idx) { mostrado = idx; cargas(d); texto(d); }
  const objetivo = thetaDe(d);
  if (calm) { theta = objetivo; rate = 0; jinete = d.confianza; curX = capX(idx); }
  else {
    for (let i = 0; i < 4; i++) { const h = dt / 4; rate += ((objetivo - theta) * 38 - rate * 5.2) * h; theta += rate * h; }
    jinete += (d.confianza - jinete) * (1 - Math.exp(-dt / 0.35));
    curX += (capX(idx) - curX) * (1 - Math.exp(-dt / 0.22));
  }
  const quieto = Math.abs(objetivo - theta) < 2e-4 && Math.abs(rate) < 2e-4 && Math.abs(d.confianza - jinete) < 0.01 && Math.abs(capX(idx) - curX) < 0.05;
  if (quieto) { theta = objetivo; rate = 0; jinete = d.confianza; curX = capX(idx); }
  draw();
  frame = visible && !(quieto && !touring) ? requestAnimationFrame(tick) : 0;
}
const run = () => { if (!frame && visible) { last = 0; frame = requestAnimationFrame(tick); } };
const steer = (i) => {
  touring = false; idx = Math.max(0, Math.min(N - 1, i));
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => { if (still.matches) return; touring = true; clock = idx * 1.9; run(); }, 4000);
  run();
};
new IntersectionObserver((e) => { visible = e[e.length - 1].isIntersecting; if (visible) run(); }, { rootMargin: "120px 0px" }).observe(stage);
stage.addEventListener("pointermove", (ev) => { const b = svg.getBoundingClientRect(); const f = (ev.clientX - b.left) / b.width; steer(Math.round(Math.max(0, Math.min(1, (f - 0.14) / 0.72)) * (N - 1))); });
stage.addEventListener("pointerleave", () => steer(idx));
stage.addEventListener("keydown", (ev) => {
  let to = null;
  if (ev.key === "ArrowRight" || ev.key === "ArrowUp") to = idx + 1;
  if (ev.key === "ArrowLeft" || ev.key === "ArrowDown") to = idx - 1;
  if (ev.key === "Home") to = 0;
  if (ev.key === "End") to = N - 1;
  if (to === null) return;
  ev.preventDefault(); steer(to);
});
cargas(DATOS[0]); texto(DATOS[0]); mostrado = 0;
`;

const ficha = `<div class="ficha" data-ficha><p data-f="titulo"></p><p data-f="nums"></p><p data-f="eleccion"></p><p data-f="nota"></p></div>`;
const FICHA_CSS = `<style>.ficha{margin:12px 2px 0;font:12px/1.5 var(--anatomy-mono,ui-monospace,monospace);color:var(--anatomy-muted)}.ficha p{margin:0 0 4px}.ficha [data-f=titulo]{color:var(--anatomy-hi,inherit)}</style>`;
const body = FICHA_CSS + k.plateHtml({
  fig: "Fig 2",
  title: "Opiniones frente a hechos",
  hint: "Mueve el puntero: un capítulo por marca",
  readout: "",
  keys: [
    { mark: "lit", label: "El fiel: hacia dónde se inclina Eris en cada capítulo" },
    { mark: "raised", label: "Pesas redondas: voces que le dicen cómo son las cosas. Bloques: hechos que ella ha visto" },
    { mark: "flat", label: "El jinete sobre el brazo: cuánto se fía Eris de su propia lectura frente a la versión ajena" },
  ],
  caption: "Los hechos solo pesan tanto como Eris se fía de lo que ve, y las voces tanto como desconfía de sí misma: por eso el jinete decide hacia dónde cae el fiel. Los valores de cada capítulo, de 0 a 5, salen de una lectura de la v2 tal como está hoy, corregida por un lector escéptico. No son la intención del libro, sino lo que la página sostiene.",
  body: `<div class="iso-stage" tabindex="0" role="slider" aria-label="Balanza de Eris: las flechas cambian de capítulo" aria-valuemin="1" aria-valuemax="${N}" aria-valuenow="1">${svg}</div>${ficha}`,
});

const file = theme === "light" ? "balanza-light.html" : "balanza.html";
writeFileSync(join(HERE, file), k.pageHtml({ title: "Balanza de Eris", theme, body, script: kitScript + latheScript + piezasScript + live }));
console.log("wrote", file, "·", N, "capítulos");
