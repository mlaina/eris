---
name: Cerrar cada sesión con un resumen en sesiones/
description: Antes de terminar una sesión de trabajo en Eris, dejar un .md de conclusiones en la carpeta sesiones/ y actualizar ESTADO.md
type: feedback
originSessionId: bfebed48-5b46-4fad-8676-b04b7226491d
---

Antes de dar por cerrada una sesión de trabajo en el proyecto **Eris**, escribir un archivo `sesiones/AAAA-MM-DD-<slug>.md` (usando `sesiones/_plantilla.md`) con: qué se hizo, qué decisiones se cerraron, capítulos tocados, canon modificado, pendiente para la siguiente sesión. Y actualizar `ESTADO.md` (que es la puerta de entrada) reflejando solo lo que queda **vivo**.

**Why:** Marcos quiere que ninguna conversación se pierda. ESTADO.md ya acumulaba bloques históricos de varias sesiones mezclados y se volvió confuso. Tener un log por sesión separado y un ESTADO.md vivo resuelve eso.

**How to apply:**

División de responsabilidades — **NO duplicar contenido**:

- `sesiones/AAAA-MM-DD-*.md` = **log inmutable** del día. Hechos puntuales: qué se hizo, decisiones tomadas, capítulos tocados.
- `ESTADO.md` = **estado vivo**: solo lo que sigue abierto al cierre (validados, pendientes, próximo paso). Se reescribe cada sesión, no acumula histórico.
- `memory/feedback_*.md` = **reglas atemporales** que aplican a toda sesión futura. Si en una sesión surge una regla nueva ("a partir de ahora no hagas X"), va aquí como archivo propio; el log de sesión solo la **referencia** con link.
- `canon/` = **mundo del libro**. Nuevos personajes/lugares/sistemas viven aquí; el log de sesión los referencia.

Reglas concretas:
- Nombre del log: fecha ISO + slug corto (`2026-05-25-limpieza-y-grafo.md`).
- Linkar archivos con sintaxis Obsidian `[[ruta/archivo]]`, sin extensión.
- Una vez cerrada una sesión, ese .md no se vuelve a tocar (es histórico).
- Si una decisión cambia en el futuro, se documenta en una nueva sesión + se actualiza el canon — no se reescribe el log viejo.
