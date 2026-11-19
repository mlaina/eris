#!/usr/bin/env python3
"""Rellena plantilla.html con los datos de la revisión y escribe bases-del-cambio.html.
Uso: python3 generar.py [ruta/intuiciones.json]"""
import html, json, re, sys
from pathlib import Path

HERE = Path(__file__).parent
ROOT = HERE.parent.parent
esc = html.escape

# ---------- Decisiones D1-D64 ----------
texto = (ROOT / "v2" / "decisiones.md").read_text()
decs, vistos = [], set()
for m in re.finditer(r"^- \*\*(D\d+)\.?\s*([^*]*)\*\*:?\s*(.*)$", texto, re.M):
    did, tit, resto = m.group(1), m.group(2).strip().rstrip(":").strip(), m.group(3)
    if did in vistos or did == "D37":
        continue
    vistos.add(did)
    resto = re.sub(r"\[\[[^\]]*\]\]", "", resto)
    resto = re.sub(r"\*\*|\*", "", resto).strip(" .:—-")
    if did == "D20":
        tit = "Muoro"
        resto = "Lo que Eris habría sido si hubiera seguido sirviendo. Profesional y de pocas palabras, con su cuidado visible en actos desde el Acto I. Sustituye a la versión de septiembre, «cero sentimiento en página»."
    corto = resto if len(resto) <= 230 else resto[:227].rsplit(" ", 1)[0] + "…"
    decs.append({"id": did, "titulo": tit or did, "texto": corto, "marcos": did in {"D61", "D62", "D63", "D64"}})
decs.sort(key=lambda d: int(d["id"][1:]))

PREGUNTAS = [
    "¿Escribiste Eris.docx tú solo, o alguna parte pasó por ChatGPT u otro asistente? ¿Qué partes reconoces como tuyas?",
    "Cuando pediste «más explicación» en el capítulo 1, ¿te referías al mundo (Arterias, Sandrie, quién es quién) o a lo que siente Eris y por qué hace lo que hace?",
    "¿Puedo sacar las notas de revisión de los 25 capítulos a archivos aparte, para que el manuscrito sea solo texto?",
    "¿Qué tenías pensado para «La duda», «Discordia», «Vuelta a Coria» y «La cena: confesiones»? ¿Eris volvía a Coria sabiendo y fingiendo? ¿Se enfrentaba a Faree?",
    "La falla de septiembre, «las luchas propias matan»: ¿se queda como origen de la inseguridad de Eris, o se quita?",
    "¿Quieres una escena equivalente a la de Bleed for This dentro del libro? Si es así, ¿ante quién se planta Eris?",
    "¿Qué tesis manda en el final: «la verdad no basta» y una Eris sin hogar moral, o la compañía y la liberación del muelle?",
    "¿Cómo se llama el hermano superviviente de Itsu, y quieres que aparezca en el libro?",
    "¿Quieres probar una escena en primera persona y presente, como tu Misión 131, antes de fijar la voz del libro?",
    "¿Qué escenas o personajes concretos de El Señor de los Anillos y de Dune te dieron esa sensación de «raro, medido, especial»? ¿Qué personajes de Eris te la dan hoy?",
    "¿Echas de menos la escala continental (Geoda, Sountor, Neidimia) o para ti este libro es una tragedia de cámara?",
]
preguntas = [{"id": f"q{i + 1}", "texto": t} for i, t in enumerate(PREGUNTAS)]

# ---------- Qué cambiar ----------
CAMBIOS = [
    ("Que Eris elija donde duda",
     "Hoy elige mucho en lo militar y en lo personal: sigue al rey, prepara la bolsa, se enfrenta a Illia, gira hacia Norel. Pero en lo que tú dices que duda, la política y Faree, apenas elige en página. Nunca le planta cara al rey y el final lo resuelve Theim. Es justo el arco de opiniones frente a hechos, y hoy le falta su pago.",
     [("Evidencia", "«Podía irse por los tejados. Bajó.» es la gran elección de ese tipo, y llega en el capítulo 22."),
      ("Herramienta", "La testigo que no aplaude, y la llave que fabrican los excluidos."),
      ("Lo confirman", "los 3 lectores a ciegas, la verificación del diagnóstico interno y tu estructura original, con «Discordia», «Vuelta a Coria» y «La cena: confesiones».")]),
    ("Que los capítulos 10 a 15 avancen",
     "Permisos pedidos y aplazados, visitas casi iguales a Norel, turnos y partes. Lo que se diseñó como tensión se lee como espera. Los lectores proponen fundir ese tramo en dos o tres capítulos.",
     [("Lo confirman", "los 3 lectores a ciegas pensaron en dejar el libro ahí.")]),
    ("Darle cara al escuadrón antes de restarlo",
     "De los catorce, solo Haris y Muoro tienen presencia sostenida. Ravys llega a su muerte sin una escena propia en el acto II, y Therel y Nerei no dicen una línea suya. En el asalto mueren dos antiguos compañeros sin que Eris sepa ni diga quiénes eran. La firma de cada uno en la placa ya existe en los capítulos 1, 8, 18 y 22: es la base para construirlos.",
     [("Evidencia", "«Doce voces del escuadrón», en el 9, y «Los dos en el suelo. Los dos muertos», en el 22."),
      ("Herramienta", "La economía de la Compañía, y lo ligero que vuelve como duelo."),
      ("Lo confirman", "la verificación del diagnóstico interno y tu D64.")]),
    ("Que el narrador no cobre el pago antes que el lector",
     "Cuando una rima o una ironía ya se ha entendido en la imagen, el texto a veces añade una frase que la nombra. No es un vicio de todo el libro: se concentra en los capítulos 9, 14, 17 y 23.",
     [("Evidencia", "«La frase había hecho el trabajo», en el 9."),
      ("Herramienta", "«Bajó», en el 22, ya hace lo contrario: la elección se ve y nadie la comenta."),
      ("Lo confirman", "lectores a ciegas, jueces y la verificación, que lo reduce a esos capítulos.")]),
    ("Que los que importan entren haciendo algo",
     "Faree en el 5, Maelor en el 6, Nyree en el 19 y el Yll en el 24 entran con un bloque de raza, edad, piel, ropa y armas antes de hacer nada. Nyree, el personaje más esperado del libro, entra como un inventario.",
     [("Herramienta", "Silueta antes que nombre, como Trancos en el Poney Pisador."),
      ("Lo confirman", "la verificación del diagnóstico interno y los lectores a ciegas.")]),
    ("Que alguien se equivoque sobre Eris",
     "Los secundarios dicen en voz alta cómo está Eris y aciertan siempre. Con tu idea de opiniones frente a hechos, alguno debería equivocarse sobre ella, y el lector notarlo antes que ella.",
     [("Evidencia", "«Pues respira», en el 3, y «Ha adelgazado por dentro», en el 11."),
      ("Lo confirman", "la verificación del diagnóstico interno, que lo relaciona con tu D61.")]),
    ("Quitar el taller de la página",
     "Las notas de revisión están dentro de los 25 capítulos. Además, «no contestó» aparece 24 veces, «Eris esperó» 15 y el molde «No era X. Era Y.» sigue ahí. Cada caso es defendible, pero juntos dibujan una protagonista que archiva lo que siente en vez de sentirlo.",
     [("Lo confirman", "los lectores a ciegas, el detector de huellas y la verificación.")]),
    ("Menos nombres, más presencias",
     "Hay demasiados nombres e instituciones para lo poco que se dramatizan. Dos personajes se llaman Berys, y el hermano superviviente de Itsu no tiene nombre.",
     [("Lo confirman", "los 3 lectores a ciegas y tus propios comentarios.")]),
]
cambios_html = []
for titulo, cuerpo, det in CAMBIOS:
    filas = "".join(f"<span><b>{esc(k)}:</b> {esc(v)}</span>" for k, v in det)
    cambios_html.append(f"<li><h3>{esc(titulo)}</h3><p>{esc(cuerpo)}</p><div class=\"detalle\">{filas}</div></li>")

# ---------- Mapa de intuiciones (si existe) ----------
lectura = "<p class=\"note\">El mapa de intuiciones todavía no está disponible.</p>"
eldara = "<p class=\"note\">El análisis del escuadrón todavía no está disponible.</p>"
ruta = Path(sys.argv[1]) if len(sys.argv) > 1 else HERE / "intuiciones-pagina.json"
if ruta.exists():
    d = json.loads(ruta.read_text())
    lectura = "".join(f"<p>{esc(p)}</p>" for p in d["lectura"])
    filas = []
    for e in d["eldara"]:
        filas.append("<tr>" + f"<td><b>{esc(e['nombre'])}</b></td>" + "".join(f"<td>{esc(e[c])}</td>" for c in ["momento_propio", "vinculo_con_eris", "fe_en_coria_con_razones", "eleccion_propia"]) + f"<td><span class=\"estado {esc(e['estado'])}\">{esc(e['estado'].replace('_', ' '))}</span></td><td>{esc(e['que_falta'])}</td></tr>")
    eldara = ("<div class=\"tabla\"><table><thead><tr><th>Eldara</th><th>Momento propio</th><th>Vínculo con Eris</th><th>Fe en Coria</th><th>Elección propia</th><th>Estado</th><th>Qué falta</th></tr></thead><tbody>"
              + "".join(filas) + "</tbody></table></div>")

page = (HERE / "plantilla.html").read_text()
page = (page.replace("__DECISIONES__", json.dumps(decs, ensure_ascii=False).replace("</", "<\\/"))
            .replace("__PREGUNTAS__", json.dumps(preguntas, ensure_ascii=False).replace("</", "<\\/"))
            .replace("__CAMBIOS__", "\n".join(cambios_html))
            .replace("__LECTURA_BALANZA__", lectura)
            .replace("__ELDARA__", eldara))
(HERE / "bases-del-cambio.html").write_text(page)
print("escrito bases-del-cambio.html ·", len(decs), "decisiones ·", len(preguntas), "preguntas")
