// Modelo de la prensa de husillo. Puro: sin DOM, sin SVG. Todo lo que se mueve
// y todo lo que dice el lector sale de aquí. Unidades: mm, kN, radianes.

export const PASO = 12;          // mm que baja el husillo por vuelta (rosca de tres entradas)
export const HOLGURA = 34;       // mm entre la cara del troquel y el cuero, a carro alto
export const HUELLA_MAX = 1.2;   // mm que se hunde el relieve a tope de carrera
export const CARRERA = HOLGURA + HUELLA_MAX;   // 35,2 mm; el tope de las columnas la fija
export const CUERO = 3;          // mm de grueso del peto
export const SIGMA_MAX = 9;      // MPa que admite el cuero vegetal húmedo a 1,2 mm

// `avance` va de 0 (carro alto) a 1 (casquillos sobre el tope).
export function estado(avance, areaRelieve) {
  const a = Math.min(1, Math.max(0, avance));
  const carrera = a * CARRERA;
  const huella = Math.max(0, carrera - HOLGURA);
  const sigma = SIGMA_MAX * (huella / HUELLA_MAX);
  const fuerza = (areaRelieve * sigma) / 1000;   // mm² · MPa = N → kN
  const giro = (carrera / PASO) * Math.PI * 2;   // ángulo del husillo
  const vueltas = carrera / PASO;
  return { carrera, huella, fuerza, giro, vueltas, contacto: huella > 0, tope: a >= 1 - 1e-6 };
}

export function fuerzaMax(areaRelieve) {
  return estado(1, areaRelieve).fuerza;
}
