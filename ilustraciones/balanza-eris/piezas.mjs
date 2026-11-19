// Piezas que se mueven con el brazo de la balanza. Las usa build.mjs y, copiadas tal cual,
// el script de la página. Sin imports: recibe el kit (k) y el torno (G) como argumentos.

export const B = {
  PIV: 156,          // altura del eje (cuchilla) sobre la bancada
  ARM: 96,           // distancia del eje a cada gancho
  HALF_Y: 2.2,       // medio grueso del brazo
  HALF_Z: 3.6,       // medio canto del brazo
  BOSS_R: 9,         // disco central del brazo
  POINTER: 44,       // largo del fiel hacia arriba
  PLANE_Y: 8,        // plano del fiel, delante de la escala
  RIDER_FROM: 22,    // posición del jinete con confianza 0
  RIDER_TO: 86,      // posición del jinete con confianza 5
  HANG: 70,          // largo de la suspensión de cada platillo
};

// Ejes del brazo inclinado: theta > 0 baja el extremo derecho (hechos).
export function frameDelBrazo(theta) {
  const c = Math.cos(theta), s = Math.sin(theta);
  const a = [c, 0, -s];
  const u = [0, 1, 0];
  const v = [s, 0, c]; // «arriba» del brazo
  return { o: [0, 0, B.PIV], a, u, v };
}

export function gancho(theta, lado) {
  const F = frameDelBrazo(theta);
  const s = lado * B.ARM;
  return [F.o[0] + F.a[0] * s - F.v[0] * B.HALF_Z, 0, F.o[2] + F.a[2] * s - F.v[2] * B.HALF_Z];
}

export function piezasMoviles(theta, confianza, P, k, G) {
  const F = frameDelBrazo(theta);
  const rect = (hu, hv, dv = 0) => [[-hu, -hv + dv], [hu, -hv + dv], [hu, hv + dv], [-hu, hv + dv]];
  const S = (paths, style) => k.solidSvg(paths, style);
  // Brazo: dos mitades para que el disco central quede entre ellas en profundidad.
  const brazo = S(G.prismOf(F, rect(B.HALF_Y, B.HALF_Z), -B.ARM - 4, B.ARM + 4, P), { tone: "mid" });
  // Topes de los extremos: pequeños cuerpos donde cuelgan los ganchos.
  const topes = [-1, 1].map((lado) => S(G.prismOf(F, rect(B.HALF_Y + 0.9, B.HALF_Z + 1.2), lado * B.ARM - 3, lado * B.ARM + 3, P), { tone: "mid" })).join("");
  // Disco central, de frente al espectador (eje y).
  const Fy = G.frameOf([0, 0, B.PIV], [0, 1, 0], F.a, F.v);
  const disco = S(G.disc(-3.2, 3.2, B.BOSS_R, Fy, P), { tone: "mid" });
  const pasador = k.dotsSvg([k.iso([0, 3.4, B.PIV], P)], { size: 0.6, tone: "hi" });
  // Jinete: la confianza de Eris. Corre sobre el brazo derecho.
  const sJ = B.RIDER_FROM + (Math.max(0, Math.min(5, confianza)) / 5) * (B.RIDER_TO - B.RIDER_FROM);
  const jinete = S(G.prismOf(F, rect(B.HALF_Y + 1.6, 2.4, B.HALF_Z + 2.4), sJ - 3, sJ + 3, P), { tone: "hi", crease: "lo" });
  const jineteGancho = S(G.prismOf(F, rect(B.HALF_Y + 1.6, 1.2, B.HALF_Z + 5.6), sJ - 1, sJ + 1, P), { tone: "hi", crease: "lo" });
  // El fiel: aguja hacia arriba en el plano de delante, con su contrapeso.
  const base = [0, B.PLANE_Y, B.PIV];
  const punta = [F.v[0] * B.POINTER, B.PLANE_Y, B.PIV + F.v[2] * B.POINTER];
  const cola = [-F.v[0] * 6, B.PLANE_Y, B.PIV - F.v[2] * 6];
  const fiel = `<path class="iso-line" data-tone="lit" data-free="end" style="stroke-width:1.1" d="${k.segment(cola, punta, P)}"/>`;
  const Fp = G.frameOf(base, [0, 1, 0], F.a, F.v);
  const contrapeso = S(G.disc(-0.6, 0.6, 2.4, Fp, P), { tone: "hi", lit: true });
  return { brazo: brazo + topes + disco + pasador + jinete + jineteGancho, fiel: fiel + contrapeso, sJ };
}
