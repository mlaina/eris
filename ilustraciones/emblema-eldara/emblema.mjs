// Emblema de los Eldara, en el plano del suelo (x a la derecha, y hacia el espectador).
// Dos bandas en V anidadas; la exterior remata arriba en dos cuernos que apuntan afuera.
// La punta de la V mira al espectador (+y). Unidades: mm del relieve real.

const OUTER = [
  [0, 22],
  [-20, -16],
  [-26, -30],
  [-16, -22],
  [-13, -16],
  [0, 9],
  [13, -16],
  [16, -22],
  [26, -30],
  [20, -16],
];

const INNER = [
  [0, 5],
  [-8, -9],
  [-4, -9],
  [0, -2],
  [4, -9],
  [8, -9],
];

// `giro` gira el emblema en el plano (radianes, positivo de +x hacia +y).
export function emblema(at = [0, 0], scale = 1, giro = 0) {
  const c = Math.cos(giro), s = Math.sin(giro);
  const place = (ring) => ring.map(([x, y]) => [at[0] + (x * c - y * s) * scale, at[1] + (x * s + y * c) * scale]);
  return [place(OUTER), place(INNER)];
}

function areaOf(ring) {
  let twice = 0;
  for (let i = 0; i < ring.length; i++) {
    const [ax, ay] = ring[i];
    const [bx, by] = ring[(i + 1) % ring.length];
    twice += ax * by - bx * ay;
  }
  return Math.abs(twice) / 2;
}

// Superficie del relieve en mm² (la que aprieta el cuero).
export const AREA_RELIEVE = emblema().reduce((sum, ring) => sum + areaOf(ring), 0);

export const EXTENT = { x: [-26, 26], y: [-30, 22] };
