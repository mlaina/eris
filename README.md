# Eris — Proyecto de novela

**Tragedia política y militar ambientada en Anira.** Una guerrera perfecta y leal descubre que el orden que sirve está podrido. Novela draft objetivo: **~300 páginas**.

## Cómo está organizado el proyecto

```
eris/
├── README.md                          ← este archivo: índice maestro
│
├── brief_maestro_eris_anira.md        ← documento maestro original (intocable)
├── Eris.docx.md                       ← borrador narrativo original (referencia)
├── Wiki Estados Anira.md              ← wiki de worldbuilding original (referencia)
│
├── canon/                             ← fuente única de verdad
│   ├── personajes/
│   │   ├── eris.md
│   │   ├── faree.md
│   │   ├── theim.md
│   │   ├── haris.md
│   │   ├── lirae.md
│   │   ├── lyris.md
│   │   ├── muoro.md
│   │   ├── nyree.md
│   │   ├── velerian.md
│   │   └── elerian.md
│   ├── lugares/
│   │   ├── coria-helisil.md
│   │   ├── itsu.md
│   │   ├── nurn.md
│   │   ├── ygoran.md
│   │   ├── valdara.md
│   │   └── anira-geografia.md
│   ├── razas/
│   │   ├── naggar.md
│   │   ├── ssilvaris.md
│   │   ├── valagost.md
│   │   ├── anvur.md
│   │   ├── yll-deorn.md
│   │   └── otras-razas.md
│   ├── sistemas/
│   │   ├── arterias-de-luz.md
│   │   ├── nexalita.md
│   │   ├── triton.md
│   │   ├── silmaritas.md
│   │   └── magia-sandrie.md
│   ├── glosario.md                    ← términos A-Z
│   ├── cronologia.md                  ← línea de tiempo
│   └── nagani.md                      ← reglas del idioma
│
├── estilo/
│   ├── tono.md                        ← voz, registro, prosa por escenario
│   └── restricciones.md               ← prohibiciones del brief
│
├── estructura/
│   ├── outline-5actos.md              ← 24 capítulos organizados
│   └── capitulos/                     ← (vacía por ahora; un .md por capítulo al escribir)
│
└── draft/                             ← (vacía; prosa final por acto)
```

## Decisiones canónicas (ya fijadas)

1. **Eris es Eldara de Coria** (brief es canon). No Kretus.
2. **Estructura**: 5 actos como agrupación; los capítulos tienen tipología (algunos son "Misión N", otros temáticos).
3. **Final canónico**: los **eventos grandes** de la Misión 136 (Theim mata a Haris y a Eris en Ygoran) y el Epílogo (Nyree + Velerian) se mantienen.
4. **POV**: tercera persona limitada muy cercana a Eris. Único shift: epílogo desde Nyree.

## Cómo usar este proyecto para escribir

### Antes de empezar una escena

1. Consultar `estructura/outline-5actos.md` para ubicarse en el acto y capítulo.
2. Consultar `canon/personajes/` para cada personaje que aparezca.
3. Consultar `canon/lugares/` para el escenario.
4. Consultar `estilo/tono.md` para ajustar la voz según el lugar.
5. Consultar `estilo/restricciones.md` como checklist final.

### Si aparece un término o nombre desconocido

1. Buscar en `canon/glosario.md`.
2. Si no está, buscar en los archivos originales (`brief_maestro_eris_anira.md`, `Wiki Estados Anira.md`).
3. Si es nuevo: añadirlo al glosario.

### Si hay una decisión pendiente durante la escritura

- Buscar "⚠️" en los archivos canon y en el outline para ver decisiones marcadas como pendientes.
- Consultar con Marcos antes de fijarlas.
- Al fijarse, actualizar el archivo canon correspondiente.

## Proceso iterativo de escritura

1. **Escribir por acto**. Un acto por sesión, aproximadamente.
2. **Dentro del acto**: capítulos consecutivos. Si algún capítulo requiere decisión pendiente, pausar y preguntar.
3. **Al terminar un acto**: Marcos lee y redirige. Ajustamos en `draft/`.
4. **Al terminar el libro**: revisión final, consistencia de Nagani, nombres, tono.

## Contradicciones conocidas del material original

- **Borrador (Eris.docx)** tiene a Eris con escuadrón "Kretus" (Kyle, Kurt, Mae, Nat'nei, Ellion) — esos nombres son Kretus de Amaroth según la wiki, no Eldara. **Resolución**: reescribir el borrador como Eldara; conservar Haris.
- **Lirae vs Lyris** — personajes distintos, no confundir. Lirae = amiga, Mirisar gravitatoria. Lyris = mayordomo, reflejista lumínica.
- **Anira vs Aniradnam** — son el mismo mundo. Aniradnam = completo; Anira = habitual.

Ver `estructura/outline-5actos.md` para la resolución detallada.

## Estado actual

- [x] Fase 0: organización del material canon.
- [ ] Fase 1: resolución de decisiones pendientes con Marcos (durante escritura).
- [ ] Fase 2: escritura por actos.
- [ ] Fase 3: revisión final.
