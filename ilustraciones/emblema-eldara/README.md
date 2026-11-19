# Emblema Eldara · prensa de troquel

Figura isométrica interactiva hecha con la skill *anatomy*. El emblema de los Eldara se presenta como objeto físico: el relieve de bronce de un troquel que lo marca en frío sobre el peto de cuero de la armadura, en el taller de armería de Lorin.

- `prensa-troquel.html` — tema oscuro. Abrir en cualquier navegador; no necesita servidor.
- `prensa-troquel-light.html` — tema claro.
- `preview-oscuro.png`, `preview-claro.png` — capturas.

## Cómo se usa

Mover el puntero sobre la figura de izquierda a derecha baja el husillo. Teclado: flechas bajan y suben, Espacio aprieta a tope, Inicio/Fin a los extremos. Si nadie la toca, hace un ciclo sola: baja, aprieta, sube y deja ver la huella.

## Cómo se regenera

```bash
node build.mjs && node build.mjs --light
```

- `emblema.mjs` — el dibujo del emblema (dos bandas en V anidadas con cuernos), en mm.
- `prensa.mjs` — el modelo: paso del husillo, holgura, huella máxima, fuerza sobre el cuero. El lector solo ve números que salen de aquí.
- `build.mjs` — la geometría y la página.
- `kit/iso-kit.mjs` — copia del kit de la skill (MIT, ver `kit/LICENSE-anatomy`).

Para retocar el emblema basta cambiar los puntos de `emblema.mjs` y volver a construir.
