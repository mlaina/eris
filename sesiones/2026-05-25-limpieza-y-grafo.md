# Sesión 2026-05-25 — Limpieza del proyecto y grafo Obsidian

**Estado al cierre**: Repo reorganizado. [[ESTADO]] reescrito limpio. Canon interconectado con links wiki-style. Sistema de sesiones operativo. Memoria del proyecto consolidada.

---

## Qué se hizo

Marcos abrió el repo en Obsidian y vio el grafo como puntos sueltos: los archivos no se interconectaban. Además, [[ESTADO]] tenía bloques históricos de varias sesiones mezclados, había archivos huérfanos en raíz, e incoherencias entre numeración de capítulos y outline. Pasada de limpieza completa:

1. Borrados archivos vacíos de Obsidian (`2026-05-21.md`, `Sin título.base`, `Sin título.canvas`).
2. Movido `v1.md` (snapshot del manuscrito al 2026-05-01) a `draft/versiones/`.
3. Movido `Q&A-marcos-2026-04-20.md` a [[sesiones/2026-04-20-qa-marcos|sesiones/]].
4. Creado sistema [[sesiones/README|sesiones/]] con [[sesiones/_plantilla|plantilla]] y división de responsabilidades clara con memoria.
5. Migrado el contenido histórico de [[ESTADO]] a tres archivos de sesión: [[sesiones/2026-05-02-acto-II-reescritura]], [[sesiones/2026-05-16-cap20-descubrimiento-lirae]], [[sesiones/2026-05-19-anira-lore]].
6. Reescrito [[ESTADO]] desde cero — solo estado vivo, sin acumulación.
7. Creado [[canon/_canon]] como índice maestro + un índice por subcarpeta: [[canon/personajes/_personajes]], [[canon/lugares/_lugares]], [[canon/razas/_razas]], [[canon/sistemas/_sistemas]]. (Nombrados con `_<categoría>` para distinguirlos en el grafo de Obsidian, no como `README`.)
8. Añadido bloque `## Conexiones` (o equivalente) al final de los archivos canon principales con links wiki-style hacia personajes, lugares, sistemas y capítulos relacionados.
9. Añadido bloque `## Canon relacionado` al final de los 9 capítulos validados (caps 1-8 + cap 20 descubrimiento Lirae).
10. Reescrito [[README]] maestro como índice navegable por links.
11. Creado [[estructura/capitulos/README|índice de capítulos]].
12. Consolidada la memoria del proyecto en el sistema del harness, espejada en `memory/` del repo para versionado.

## Decisiones tomadas

- **División canónica de responsabilidades**:
  - `sesiones/AAAA-MM-DD-*.md` = log inmutable del día.
  - [[ESTADO]] = estado vivo (sin histórico).
  - `memory/feedback_*.md` = reglas atemporales.
  - `canon/` = mundo del libro.
  - **No duplicar contenido entre ellos.**
- **Sintaxis de links Obsidian**: `[[archivo]]` o `[[ruta/archivo|texto visible]]` en canon, capítulos, estado, outline. No en prosa narrativa.
- **Cierre obligatorio de sesión**: antes de terminar, escribir log en `sesiones/` + actualizar [[ESTADO]].
- **Outline maestro queda desfasado** ([[estructura/outline-5actos]] tiene numeración vieja). Resincronizar al final del proyecto.
- **Renumeración del Acto V** sigue pendiente (no ejecutada en esta sesión: requiere mover archivos y actualizar referencias, mejor en sesión específica).

## Capítulos tocados

Solo se añadió bloque `## Canon relacionado` al final, **sin tocar la prosa**:

- [[estructura/capitulos/acto-I/01-prologo]]
- [[estructura/capitulos/acto-I/02-elis-lirae]]
- [[estructura/capitulos/acto-I/03-plaza-ocre]]
- [[estructura/capitulos/acto-I/04-libro-pequeno]]
- [[estructura/capitulos/acto-II/05-audiencia-larien]]
- [[estructura/capitulos/acto-II/06-nurn-dia]]
- [[estructura/capitulos/acto-II/07-cena-elerian]]
- [[estructura/capitulos/acto-II/08-atentado]]
- [[estructura/capitulos/acto-IV/20-descubrimiento-lirae]]

## Canon modificado o nuevo

**Nuevos índices**: [[canon/_canon]], [[canon/personajes/_personajes]], [[canon/lugares/_lugares]], [[canon/razas/_razas]], [[canon/sistemas/_sistemas]], [[estructura/capitulos/README]].

**Bloques de conexiones añadidos al final de** (sin tocar la prosa):
- Personajes: [[canon/personajes/eris]], [[canon/personajes/haris]], [[canon/personajes/muoro]], [[canon/personajes/lirae]], [[canon/personajes/lyris]], [[canon/personajes/faree]], [[canon/personajes/theim]], [[canon/personajes/velerian]], [[canon/personajes/elerian]], [[canon/personajes/nyree]], [[canon/personajes/manos-de-coria]], [[canon/personajes/escuadron-eris]], [[canon/personajes/maelor]], [[canon/personajes/nino-prodigio]].
- Sistemas: [[canon/sistemas/triton]], [[canon/sistemas/nexalita]], [[canon/sistemas/mirisar]], [[canon/sistemas/arterias-de-luz]], [[canon/sistemas/silmaritas]].
- Lugares: [[canon/lugares/coria-elis]], [[canon/lugares/itsu]], [[canon/lugares/ygoran]], [[canon/lugares/nurn]], [[canon/lugares/valdara]], [[canon/lugares/sandrie]], [[canon/lugares/indra]].
- Razas: [[canon/razas/naggar]], [[canon/razas/valagost]], [[canon/razas/yll-deorn]].

## Reglas nuevas

Dos memorias atemporales nuevas (en el sistema del harness, espejadas en `memory/`):

- [[memory/feedback_sesiones_cierre]] — cerrar cada sesión con log en `sesiones/` y actualizar [[ESTADO]]. División de responsabilidades sin duplicar contenido.
- [[memory/feedback_obsidian_links]] — usar sintaxis `[[]]` entre canon, capítulos, estado y outline; no en prosa narrativa.

## Pendiente para la siguiente sesión

1. **Bloque principal**: validar las 5 inserciones de [[draft/enriquecimiento-lore-2026-05-19]] con Marcos, párrafo a párrafo. (Es el siguiente hito narrativo real del proyecto.)
2. **Renumeración del Acto V**: 20→21, 21→22, 22→23. Renombrar archivos y actualizar las pocas referencias internas.
3. **Cap 12**: reescribir como **Reunión de Las Manos** según [[draft/acto-III-rediseno]]. Renombrar el archivo.
4. **Cap 9 pasada en frío**: verificar despacho con Aluren, línea de los diez mil soldados, patio del armero.
5. **Cap 13**: confirmar versión actual e integrar canon nuevo del cap 20 (hipótesis sobre por qué el tritón no apagó la magia a Eris).
6. **Cap 22 (tras renumeración → cap 23)**: eliminar atribución *"ahora sí"* a Lirae en la conversación Eris-Theim.
7. **Resincronizar [[estructura/outline-5actos]]** al final — tiene numeración vieja (22 caps; los archivos reales son 23 con cap 20 nuevo + renumeración Acto V).
8. **Completar conexiones** en los archivos canon menores (lugares periféricos del lore extendido: aret, asnare, deengar, fireon, geoda, kaurun, liga-kovax, sacrio, saebal, theris, trei, zonas-extasiadas; razas menores: ssilvaris, anvur, otras-razas; capítulos no validados aún del Acto II-V).

## Notas sueltas

- Las memorias antiguas de `eris/memory/` (5 archivos) se han copiado al directorio del harness (`~/.claude/projects/.../memory/`) para que el sistema las cargue automáticamente en sesiones futuras. El directorio del repo queda como espejo versionado en git.
- El grafo de Obsidian ahora debería verse conectado: nodos principales (personajes, capítulos, sistemas) con aristas a múltiples archivos.
