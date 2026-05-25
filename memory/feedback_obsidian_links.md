---
name: Interconectar archivos con links Obsidian
description: En el proyecto Eris, usar links wiki-style [[archivo]] entre canon, capítulos, estilo y estado para que el grafo de Obsidian conecte
type: feedback
originSessionId: bfebed48-5b46-4fad-8676-b04b7226491d
---
Marcos abrió el repo de Eris en Obsidian y vio que los archivos no se interconectan (grafo de puntos sueltos). Quiere que **referencias entre archivos vayan como links Obsidian** (`[[ruta/archivo]]` o `[[archivo|texto visible]]`), no como prosa suelta o paths sin link.

**Why:** Para que el grafo de Obsidian se vea como una red y para no perder referencias cruzadas (personaje ↔ capítulo donde aparece ↔ lugar ↔ sistema). Útil para navegar el canon mientras se escribe.

**How to apply:**
- Canon (personajes/lugares/razas/sistemas/organizaciones): cada archivo enlaza a los otros archivos canon que menciona y a los capítulos donde aparece el sujeto.
- Capítulos escritos (`estructura/capitulos/acto-X/NN-*.md`): al final, bloque "Canon relacionado" con links a personajes, lugares y sistemas presentes en la escena.
- ESTADO.md, README.md, outline: linkar nombres con `[[...]]` en vez de paths planos.
- Memorias y archivos personales fuera del repo (en `~/.claude/...`) NO usan sintaxis Obsidian — esos son markdown estándar.
- No reescribir prosa narrativa para meter links: los links van en bloques de meta al pie o en archivos índice/canon, no en el cuerpo del manuscrito.
