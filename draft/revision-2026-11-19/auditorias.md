# Auditorías — repaso del 2026-11-19

**Procedencia: auditores de IA, cada hallazgo revisado por un escéptico de IA.**

## estado-docs

## Qué queda en pie de la auditoría

**Casi todo se confirma.** Las citas aparecen en los archivos y líneas que da la auditoría. En cinco puntos exagera y conviene matizar.

**Lo firme:**
- **Tono.** ESTADO.md (líneas 44 y 176), CLAUDE.md:13 y CODEX.md siguen dando «Sicario» por vigente. Marcos lo rechazó con sus palabras: «Creo que el tono "Sicario" no me gusta».
- **Organización.** CLAUDE.md y el README raíz mandan a la v1 y al outline deprecado. El README no enlaza la v2.
- **Doc de Google.** En el Doc hay un comentario de Marcos del 10 de septiembre que no aparece en ningún archivo: «Todos los eldara son muy profesionales no tienen tics nerviosos por defecto». Además hay cuatro diferencias con el .md local. Que esas diferencias sean ediciones suyas es probable, pero no está probado.
- **Notas del capítulo 1 y outline-v2.** Todavía piden pagar en el 5 la petición de los deudores, que D58 suprimió.
- **Memorias.** Las del repositorio y las del harness no coinciden. Algunas remiten a secciones de tono.md que ya no existen.
- **ESTADO.md.** Acumula historial en contra de su propia regla. El índice de sesiones está parado en mayo.
- **Página «Las bases del cambio».** Su base de datos está vacía: Marcos no ha marcado ninguna decisión ni contestado ninguna pregunta.

**Lo matizado:**
- **La tabla de ✅ de la v1.** Es un riesgo real para quien lea solo ESTADO. Pero v2/README y outline-v2 sí dicen que nada de la v2 está validado.
- **Archivos sin versionar.** Hay 16 entradas fuera de git, pero no son todas las sesiones del 8 al 12: una está versionada. Tampoco son «las únicas» palabras de Marcos: hay citas suyas en la memoria del harness y en las decisiones D58–D64.
- **Nexalita.** La prohibición total de palabras sueltas la añadió la IA. Marcos pidió «no información compleja».
- **Memoria prioritaria.** Más que contradecir, se ha quedado atrasada.
- **Hilos del Doc.** Que «siguen abiertos» no se puede verificar. La herramienta solo devuelve 2 hilos; los otros 44 quedaron huérfanos.
- **Nagani.** El choque entre restricciones y D60 es parcial.

**Lo que se añade:**
- El total de palabras no coincide entre documentos (76.380, 76.633 y 81.388).
- La página «Las bases del cambio» y el mapa de promesas también funcionan como documentos de estado, y ninguno los trata como tales.

**Conclusión:** el diagnóstico central se sostiene. Un agente nuevo creería que hay capítulos validados, que Sicario sigue vigente y que el libro está en la v1. Además, el último feedback de Marcos solo existe en el Doc. El esqueleto de ESTADO.md que propone la auditoría es razonable. Al rehacerlo conviene marcar el origen de cada regla: palabra de Marcos con fecha, o interpretación de la IA.

**Veredictos**

- [matizado] La tabla de estado de ESTADO es de la v1 y se lee como validación vigente: ESTADO.md conserva la tabla de la v1 con «✅ validado», sin aviso de que no vale para la v2. Puede engañar a quien lea solo ESTADO. CLAUDE.md:50 no «manda fiarse» de los ✅: dice que lo que no esté marcado no se da por cerrado. Además, v2/README.md:16 y cada entrada de outline-v2 dicen «pendiente lectura y validación». Que Marcos «ha empezado» el 1 actual se deduce de un solo comentario del 10 de septiembre; no es un dato.
- [matizado] Archivos vigentes sin versionar, entre ellos las únicas palabras literales de Marcos sobre la prosa: Están sin versionar 16 entradas que se citan como vigentes: los criterios, el plan, el .docx comentado, el JSON con los 47 comentarios (comprobado: 47 entradas), la memoria prioritaria y varias sesiones de septiembre. Hay dos exageraciones. No son todas las sesiones del 8 al 12: 2026-09-08-aplicacion-soluciones-v2.md sí está versionada. Y no son «las únicas» palabras literales de Marcos: en la memoria del harness y en v2/decisiones.md (D58–D64) también hay citas suyas. El JSON sigue siendo la fuente más completa sobre la prosa.
- [confirmado] El último feedback de Marcos (Doc, 2026-09-10) no consta en ningún sitio y el .md dejó de ser espejo del Doc: En el Doc hay un comentario de Marcos del 2026-09-10 que no aparece en ningún archivo del repositorio. Además hay cuatro diferencias entre el Doc y el .md local al principio del capítulo 1. Que esas diferencias sean ediciones de Marcos es una inferencia: la herramienta no da el autor y los agentes escribieron con su cuenta. La prueba está en un archivo temporal del scratchpad generado hoy, que puede borrarse.
- [confirmado] CLAUDE.md, la puerta que carga Claude, manda leer doctrina derogada y la v1: CLAUDE.md se contradice. En la línea 20 dice que Marcos rechazó Sicario, pero en la 13 manda leer tono.md como «tono Sicario». En las líneas 16, 37 y 38 envía al outline deprecado y a los capítulos de la v1. Y habla de 24 capítulos, cuando la v2 tiene 25.
- [confirmado] ESTADO mantiene el «Tono Sicario» como decisión vigente y una regla Eldara contraria a D59: ESTADO.md da el «Tono Sicario» como decisión vigente en la línea 176 y describe tono.md como «voz Sicario» en la línea 44. Las dos cosas contradicen tono.md:3 y lo que dijo el propio Marcos. ESTADO.md:46 conserva además la vieja «compresión Eldara».
- [matizado] La memoria automática de Claude (harness) conserva reglas que Marcos retiró: La memoria del harness está atrasada respecto a la del repositorio: todavía usa «Sicario» como criterio y admite palabras sueltas por Nexalita. Pero lo de las palabras sueltas lo retiró la IA, no Marcos con sus palabras. Él escribió «no información compleja» (comentario 41). En el comentario 15 corrigió solo el nombre, «por la Nexalita», en una frase donde un «Cuidado» llega por el vínculo. La choque entre «Nagani a una o dos palabras» y el «más Nagani» de D60 sí se confirma.
- [confirmado] Las dos memorias (repositorio y harness) están desincronizadas y la del repo dice ser espejo: El harness tiene siete memorias que no están en el repositorio. El repositorio tiene una que no está en el harness. Y la memoria de la Nexalita dice cosas distintas en cada sitio. memory/MEMORY.md se presenta como espejo y a la vez dice que no se ha escrito fuera del repositorio. Las dos cosas son falsas.
- [confirmado] Memorias y ESTADO remiten a secciones de tono.md que ya no existen; una impone cuota: Tres memorias del harness y ESTADO.md:33 citan secciones de tono.md que ya no existen. feedback_decir_lo_que_es añade una cuota de la IA («más de una por página es el tic») encima de la frase literal de Marcos.
- [confirmado] La nota del capítulo 1 se contradice: pide pagar en el 5 la petición de los deudores y, cuatro líneas después, la da por eliminada: En las notas del capítulo 1, la línea 517 dice que la petición sobre los deudores sigue pendiente para el 5, y la línea 521 la da por suprimida (D58). La línea 515 da por «aplicados» los 47 comentarios: es un juicio de la IA, sin que Marcos lo haya confirmado.
- [confirmado] outline-v2 desincronizado: beats de deudores, cifras viejas y doctrina de tics y recompensas de IA: outline-v2 mantiene los beats de los deudores, que D58 suprimió (líneas 21 y 35). También mantiene las cifras anteriores al 2026-09-09: el 1 tiene hoy unas 7.240 palabras y no 6.996. Y conserva los presupuestos de tics y la regla de «sequía». El propio archivo dice, en las líneas 3 y 9, que Sicario y las restricciones de tics «ceden», pero no marca qué partes concretas han dejado de valer.
- [matizado] La memoria «prioritaria» del repositorio arrastra dos reglas superadas: La línea 11 no contradice D59: se queda corta, porque no dice que los Eldara hablen también en operación. La línea 15 habla de una «deuda» sobre los deudores, pero enlaza al plan, y el plan ya la da por eliminada (plan:30). Es una frase atrasada que lleva a la fuente correcta, no una regla falsa.
- [confirmado] AGENTS.md, la puerta más al día, sigue con la regla Eldara anterior a D59: AGENTS.md:22 y :15 conservan la «economía en operación» y los «Eldara compactos», que D59 sustituye. En este punto CLAUDE.md está más al día que AGENTS.md.
- [confirmado] CODEX.md es una copia huérfana del CLAUDE.md de mayo: CODEX.md es una copia de CLAUDE.md que no se toca desde el 2026-05-26. Conserva el título «CLAUDE.md», los 22 capítulos, Sicario, el habla Eldara de 1-2 palabras y el epílogo en el 23.
- [confirmado] El README raíz presenta la v1 como «el manuscrito» y no enlaza la v2; drafts «activos» frente a «históricos»: README.md presenta la v1 como el manuscrito, con 22-23 capítulos, y no enlaza la v2 por ningún lado. Llama «activo» a un draft que ESTADO.md:36 declara histórico, y el propio ESTADO.md:141 se contradice al volver a llamarlo activo.
- [matizado] Se dan por hechas atribuciones y cierres sin lectura del autor: v2/README.md:7 atribuye D1–D51 a Marcos, y ESTADO.md:3 reconoce que no hay transcripción que lo respalde. He comprobado que la base de datos de «Las bases del cambio» está vacía: no tiene ni marcas ni respuestas. Lo de que «los 45 hilos siguen abiertos» no se puede verificar: hoy la herramienta solo devuelve 2 hilos, los dos OPEN, y los 44 restantes quedaron huérfanos al sustituir el capítulo.
- [confirmado] ESTADO acumula historial en contra de su propia regla, y el índice de sesiones está parado en mayo: ESTADO.md abre con 13 párrafos que empiezan por «Última intervención», más otros tres parecidos, en contra de la regla de no acumular historial. El índice de sesiones termina en el 2026-05-26 y le faltan más sesiones de las que dice la auditoría: también 2026-05-25-propuestas-mejora-capitulos y 2026-05-26-critica-sanderson.
- [confirmado] Los estados de la v1 se contradicen entre ESTADO y el índice de capítulos: Para los capítulos 9 y 13 de la v1, ESTADO.md y estructura/capitulos/README.md dan estados distintos, y el índice no avisa de que es histórico.
- [confirmado] El resumen del arco de ESTADO es el de la v1: El resumen del arco en ESTADO.md (líneas 148–168) es el de la v1. Empieza en el Acto III, describe el 18 como «Liga Kovax» y no incluye el 21b.
- [matizado] La regla del Nagani en restricciones choca con D60: No es un choque frontal. *Ilare, Kalaree* es un saludo de ceremonia, y restricciones lo admite. Pero *Nel* en una broma, y el uso irónico entre compañeros en general, quedan fuera de «Solo en saludos, órdenes formales, momentos solemnes». Falta anotar la excepción D60 en restricciones.
- [confirmado] La regla de habla Eldara está duplicada en siete sitios y se desincroniza en cada sesión: La regla actual del habla Eldara está escrita en siete sitios. Al menos tres conservan versiones viejas: AGENTS.md:22, ESTADO.md:46 y CODEX.md:22. Que se desincronice «en cada sesión» es una generalización, pero el patrón se ve.

**Omisiones**

- La auditoría no separa lo que dijo Marcos de lo que interpretó la IA en la Nexalita. Su comentario 41 dice «son más sentimientos y sensaciones no información compleja». En el 15 corrigió solo el término («por la Nexalita») en una frase donde un «Cuidado» llega por el vínculo. La prohibición total de palabras sueltas la añadió la IA, y la auditoría la presenta como algo que «Marcos retiró». Lo mismo con Sicario: sí hay palabra literal de Marcos («Creo que el tono "Sicario" no me gusta», comentario 32), y la auditoría no la cita aunque refuerza su hallazgo.
- El total de palabras del libro no coincide entre documentos: outline-v2.md:3 dice «76.380», ESTADO.md:5 «76.633» y el pie de la página «Las bases del cambio» «81.388 palabras». Quien llegue en frío no sabrá cuál vale ni si incluye las notas de revisión. El capítulo 1 tiene hoy unas 7.240 palabras por mi conteo, frente a «7.249» en ESTADO.md:7 y «6996» en outline-v2.md:19.
- «Las bases del cambio» y el mapa de promesas también son documentos de estado, y no constan como tales. La base de datos de la primera está vacía (comprobado: colecciones «decisiones» y «respuestas» sin documentos), aunque ESTADO.md:3 la presenta como la vía para que Marcos marque D1–D64. Su texto afirma «de la v2, solo tú has leído un capítulo», que es otra versión del estado de lectura distinta a la de ESTADO. Y el aviso de ESTADO.md:5 de que los lectores del mapa de promesas ven «la versión antigua» hasta que Marcos mueva el pin no se ha cerrado en ningún documento.

**Preguntas**

- El 10 de septiembre hay en el Doc cuatro cambios al principio del capítulo 1 («Illia y Ravys», «en la yema», «misma mente» en lugar de «misma nuca» y una frase del armero quitada). ¿Los hiciste tú? ¿Los paso al archivo local?
- Tu comentario «Todos los eldara son muy profesionales no tienen tics nerviosos por defecto», ¿se refiere solo a la impaciencia de Haris en ese párrafo o a todos los Eldara en todo el libro? ¿Dejaste de leer ahí?
- ¿Dónde vas a reescribir a mano: en el Google Doc, en los .md o en otro sitio? ¿Cuál será la fuente de verdad del texto?
- ¿Me autorizas a versionar en git los 16 archivos que solo están en esta máquina, incluido el .docx con tus 47 comentarios?
- ¿Archivamos la tabla de «✅ validado» de la v1 como historial? ¿Alguno de esos ✅ te vale para el capítulo equivalente de la v2?
- ¿Borramos CODEX.md o lo dejamos solo remitiendo a AGENTS.md? ¿Sigues usando Codex?
- De las decisiones D1–D51, ¿cuáles reconoces como tuyas? ¿Prefieres contestarlo en el chat en lugar de en la página «Las bases del cambio», que sigue vacía?
- ¿Quitamos las notas de revisión del final de cada capítulo antes de que los leas?
- ¿Tratamos el outline-v2 como tu plan o como un borrador de la IA pendiente de que lo revises?
- ¿El «más Nagani» valía solo para la broma de la rodilla o para todo el libro?

## decisiones

**Lo que queda en pie tras comprobarlo**

**Firme:**
- **El comentario y las ediciones del 10-09 son de Marcos.** El comentario («no tienen tics nerviosos por defecto») no está registrado. Las ediciones del Doc del capítulo 1 también son suyas: los metadatos ponen como último editor a «Marcos Laina Pérez» el 10-09 a las 21:03. Eso incluye «misma mente», que sustituye al «misma nuca» de D60. La frase sobre la impaciencia de Haris que motivó el comentario sigue en el capítulo 1 local.
- **D54 se incumple con claridad en el capítulo 3** (frases enteras por la Nexalita: «Ten cuidado», «Estás tensa») **y en el 9** (el parte con cifras).
- **D43 y D42 (2) son doctrina de IA** que el outline vigente ya deja ceder. Se pueden archivar. D42 (1), el minuto de belleza, sí lo aprobó Marcos.
- **Las cifras de palabras (D28, D29, D38, D39) están obsoletas.** El libro tiene unas 76.000 palabras.
- **D13 sigue sin nombre**, y D46 puede esperar.

**Matizado:**
- **La cabecera** atribuye a Marcos D1–D51 sin poder comprobarlo, pero no es «falsa». Algunas llevan marca concreta de él (sección 2, sección 4, D50) y otras se declaran de IA.
- **El capítulo 22** solo tiene dudoso el envío de imágenes (techo, lanza). La posición de los pulsos está permitida.
- **La compresión de 2–24 es real según la medida**, pero la medida es de IA y exagera en los capítulos con mucho diálogo. En el 8, Eris ya habla en voz baja y con frases completas.
- **En el final del 23**, «Ella había sido su Coria» sale de Haris, no de Theim. Que sea el «arco al revés» depende de la vía que elija Marcos.
- **El capítulo 4** no enfrenta a Eris con la experta. Lirae también propone que la mujer oiga el sonido.
- **La desactualización por D58** está solo en el outline. El plan ya dice que la petición de los deudores «ya no existe».
- **D64:** los gemelos sí tienen presencia en el capítulo 1. A Therel y Nerei no se les exige nada en el Acto I.
- **Muoro** puede ser una excepción legítima a D59.
- **D41** no se puede archivar entero, porque el péndulo de Lirae es trama.

**Preguntas que siguen siendo las más urgentes para Marcos:**
1. ¿Son suyas D23–D24 (la encapuchada es Nyree y también oye)?
2. ¿Se queda D10?
3. ¿Hasta dónde llega lo de los «tics nerviosos», y vale «misma mente» frente a D60?
4. ¿Quiere en el Acto I una escena en la que Eris ceda ante la versión de otro, que es lo que pide D61?
5. ¿Muoro es la excepción de pocas palabras?

**Pueden esperar:** el nombre del gemelo (D13), Itsu en página (D15), fundir los capítulos 10–15, D46 y el sentido del final.

**Veredictos**

- [confirmado] D54 incumplida fuera del 22: diálogo y partes detallados por Nexalita en los capítulos 3 y 9: En el 3 hay intercambios de frases completas por la Nexalita, y en el 9 un parte con cifras y lugares. Las dos cosas van contra D54 tal como está escrita. El matiz es que la Nexalita como posición del escuadrón («le trajo el mapa entero», l.71) sí cabe en la «proximidad» que D54 conserva.
- [matizado] El capítulo 22 todavía usa la Nexalita como mapa: Solo la l.203 es claramente dudosa, porque manda imágenes concretas («un techo hundiéndose… una lanza»). La l.39 es voz en alto de Eris hablando con Nyree. La l.127 es posición de pulsos, que D54 permite, y las cornisas y la tubería las pone el conocimiento del edificio, no la Nexalita. Que el 22 siga pendiente de D54 es correcto. «Funciona como mapa» exagera.
- [confirmado] Comentario y ediciones de Marcos del 10-09 sin registrar; D60 contradice el Doc: Igual que lo dio la auditoría, y ahora con prueba de autoría. Los metadatos del Doc ponen como última modificación «Marcos Laina Pérez», 2026-09-10T21:03, dos minutos después de su comentario. La copia del 09-09 decía todavía «bajo la uña». Por tanto, «misma mente» es una edición de Marcos posterior a su propia respuesta de D60 («misma nuca»). Prevalece la más reciente, salvo que él diga otra cosa.
- [matizado] D52/D59 sin aplicar en 2–24: diálogo telegráfico con tiempo de sobra: Las medidas se reproducen: 16,2 % en el 1, 46,6 % en el 4 y 47,5 % en el 19, y la frase media baja de 10,9 a 6,2. Dos matices. Primero, son medidas de IA que cuentan cada línea de diálogo como una frase, así que inflan los capítulos con mucho diálogo. Segundo, «entre 6 y 8 en casi todo el resto» no vale para el 6 (10,0), el 8 (9,3), el 13 (8,9) y el 2 y el 21b (8,5). El ejemplo del 8 está mal elegido: ahí Eris habla en frases completas y en voz baja, con «Sin Nexalita: voz, baja», que es justo D59. Lo telegráfico son las respuestas «Sí, Kalari». El del 3 sí sirve.
- [matizado] D10 frente a D61–D63: dos motores distintos para la misma pasividad: La tensión existe, y el propio decisiones.md ya la deja abierta para Marcos. Pero D10 no es «IA» sin más. Está en la sección «La falla-raíz y el trauma (aporte central de Marcos)», así que es de las atribuciones más explícitas a él, aunque no haya transcripción. Lo mismo pasa con D11. Las dos pueden convivir con D61 (herida y creer que sabe menos). La decisión es de Marcos y el «Eso lo decidía yo» del 18 hay que conservarlo.
- [matizado] D9 y D51b invierten el arco «acaba fiándose de sí misma»: Las citas existen, pero la lectura exagera. «Ella había sido su Coria» no es una versión de Theim. Es la conclusión que Eris saca de las palabras de Haris en el tejado («Tú cargabas la pregunta por los dos»). «Libre. Se lo acababa de decir su verdugo.» es la ironía que pide D9, no una adhesión. Theim no desmiente que Faree manipule: responde que él eligió. Que «el narrador hace suya la versión de Theim» es análisis de IA de las bases, que además ofrecen una segunda vía en la que el final actual vale como tragedia deliberada. Hay tensión con D61, pero llamarlo «arco al revés» depende de qué vía elija Marcos.
- [confirmado] D42 (2) y D43 son doctrina de IA que choca con D52/D59: Igual. D43 se llama a sí misma «regla dura v2», y el outline vigente dice que las restricciones de apertura «ceden». D42 (2) presupone una voz comprimida al principio que D52 retira. El texto va en sentido contrario: la compresión crece en los Actos IV–V. Se puede archivar sin perder trama. D42 (1), el minuto de belleza, está aprobado por Marcos en el comentario 40.
- [matizado] La regla de D64 sobre el escuadrón no se ve en el Acto I: El título exagera. En el 1 los gemelos sí tienen presencia (12 menciones cada uno, y Marcos aprobó «broma y cuidado de Ravys (36)»). Lo que falta es continuidad en el 3 y el 4. El 2 es POV de Lirae, así que la ausencia allí es lógica. La parte de D64 sobre los demás Eldara (Therel, Nerei) exige un momento propio «antes del Acto V», no en el Acto I, de modo que su ausencia en 2–4 no incumple nada. En el 3, Therel puede estar entre los «dos Eldara en los tejados» sin nombre.
- [matizado] La cabecera de decisiones.md atribuye todo a Marcos sin pruebas: «Falsa» es demasiado. Lo correcto es «no comprobable». D1–D51 no son uniformes: varias llevan marcas concretas de procedencia (D2 «idea de Marcos», sección 2 «aporte central de Marcos», sección 4 «corrección de Marcos sobre mi propuesta», D50 con una frase suya entre comillas, D51 «pedido por Marcos»). Otras se declaran propuestas de IA (D50: «diseñado por Claude con autonomía delegada»). La propuesta de marcar la procedencia es buena. No he podido comprobar que la página de marcado esté vacía.
- [confirmado] D28/D29/D38/D39 (presupuestos) obsoletos frente a D57: Igual. Mi recuento sin notas da 7.240 palabras en el 1 y 75.985 en total. D57 ya convierte esas cifras en orientación histórica. Las cifras se pueden archivar conservando el contenido narrativo de D28 y D29 (qué debe tener el 1 y qué el 21b).
- [matizado] D58 está en el texto, pero el outline y el plan siguen con los deudores: Solo el outline está desfasado (l.21 y l.35). El plan de reescritura no: su l.30 dice exactamente que la petición «ya no existe (D58)», y la auditoría cortó la cita. La nota de l.517 del cap 1 queda corregida por la propia nota de l.521. Lo único que hay que marcar como obsoleto son las dos líneas del outline.
- [matizado] La ficha de Muoro choca con D59: El choque es débil. Que un personaje concreto sea de pocas palabras es compatible con una norma general sobre los Eldara. Además, la formulación vigente de D20/D64, escrita el 14-10, después de D59, vuelve a decir «de pocas palabras». Lo que sí choca con los criterios de Marcos es lo de «sentenciosas», que suena a aforismo. La pregunta a Marcos sigue teniendo sentido.
- [matizado] D15 «Itsu nunca se ve» es recomendación de IA y el texto ya la incumple sin daño: El origen en una recomendación de IA es cierto. «La incumple» es discutible: el 1 tiene un recuerdo sensorial breve y el 10 un sueño, no una escena en Itsu. El outline pedía ese recuerdo («recuerdo de Itsu sin adelantar el relato del 18»). Los títulos «Vuelta a Coria» y «Discordia» hablan de Coria y de Faree, no de Itsu, así que no sirven como prueba. Sigue siendo una decisión abierta de Marcos para los capítulos 10–18.
- [confirmado] D13 sin nombre y el texto alude a él: Igual. La cita del 18 está en la l.407, no en la l.415.
- [confirmado] D46 (21b sin sombra) es doctrina de IA que arrastra a D51a: Igual. Puede esperar al Acto V.
- [matizado] Funciona: la semilla natural de D61 ya está en el capítulo 4: La escena funciona y cumple D56 y D44, pero no enfrenta la intuición de Eris a la experta. La propia Lirae plantea la hipótesis correcta («Quizá los oía también y te vio reaccionar») y acepta la de Eris sin discutir. Para que sirva a D61, Lirae tendría que sostener con autoridad solo la versión sónica y Eris ceder. Hoy no hay ni «ceder» ni «insistir»: comparten la duda.
- [matizado] Peso de proceso archivable: Casi todo se puede archivar, pero no D41 entero. Su «péndulo de Lirae como metrónomo global» es un elemento de la historia: las mediciones de Lirae arrancan el capítulo 2 y aceleran a lo largo del libro. Se puede archivar la contabilidad de «relojes» y conservar el péndulo como trama. Lo mismo con D50: se archiva (d), pero (b) y (c) llevan trama (Bren Tholar en el 5, la petición de Itsu). Lo de sacar las notas del manuscrito está confirmado.

**Omisiones**

- El comentario de Marcos del 10-09 («no tienen tics nerviosos por defecto») está anclado en una frase que sigue en el capítulo 1 local (l.11: «A Eris le hizo gracia descubrir en aquel movimiento la impaciencia…»). Apunta a la impaciencia de Haris leída en un gesto. Es una corrección concreta, todavía sin aplicar, del único capítulo que Marcos ha leído, y además contradice el «cuidado y fricción visibles» que D64 pide a los gemelos si esa fricción se hace con tics. La auditoría lo registra, pero no dice que el texto local siga sin corregir.
- La propuesta de archivar D41 se llevaría por delante el péndulo de Lirae, que no es proceso sino trama: arranca el capítulo 2 y es el reloj físico del libro. Hay que separar las capas antes de archivar.
- Las marcas de procedencia dentro de D1–D51 no son iguales. La sección 2 (D10–D15) se declara «aporte central de Marcos», la 4 (D23–D26) «corrección de Marcos sobre mi propuesta», y D50 cita una frase suya literal. Estas son las primeras que Marcos debería marcar, y D10 y D23–D24 encabezan con razón las preguntas. En cambio, D15, D20 original, D41–D49 son propuestas de IA y se pueden tratar como tales sin preguntarle.

**Preguntas**

- ¿Es tuya la idea de que la encapuchada del capítulo 3 es Nyree y también oye el «tum tum» (D23–D24)?
- ¿Quieres que ya en el Acto I Eris acepte la versión de otro por creer que sabe menos, por ejemplo la hipótesis sónica de Lirae en el capítulo 4?
- ¿Se queda D10 («las luchas propias matan») como origen de su inseguridad, o se retira?
- Tu comentario «no tienen tics nerviosos por defecto», ¿vale para todos los Eldara en todo el libro?
- ¿Muoro también habla más, como el resto de los Eldara, o es la excepción de pocas palabras que dice su ficha?
- ¿Retiramos la regla de que cada capítulo abra con una frase que cargue su pregunta (D43)?
- ¿Son tuyos y valen los cuatro cambios del 10 de septiembre en el Doc del capítulo 1 («en la yema», «misma mente», los nombres de los gemelos y la frase del armero quitada)?
- ¿Cómo se llama el gemelo superviviente de Eris (D13)?
- ¿Puede verse Itsu en página (una vuelta o un recuerdo largo), o solo en la voz de Eris en la barcaza (D15)?
- En el muelle, ¿Eris muere creyéndose la versión de Theim («Ella había sido su Coria») o sabiendo que ella acertó?

## cap1-comentarios

## Qué queda en pie de la auditoría del capítulo 1

**Lo que se sostiene, con la evidencia a la vista:**
- **Haris.** El gesto de impaciencia del arranque es justo lo que Marcos rechazó el 10 de septiembre («no tienen tics nerviosos por defecto»), y sigue en el texto. Falta preguntarle si rechaza solo el gesto o también el rasgo. Ese rasgo ya estaba en la versión que leyó y no lo señaló.
- **Frases aprobadas que se perdieron.** En el refuerzo, «Su minuto ya lo había gastado. Se quedó con ese.» y «—Es el oficio.». En el cierre, «Cuando toca, toca.», que la auditoría no vio. Él solo había pedido que los ocho estuvieran ya en Valdara.
- **Repeticiones.** La razón de cortar los dedos se da tres veces. La orden del Orio y lo de los ocho, dos veces cada una. Lo de los ocho en Lorin y la placa también se repiten en el arranque.
- **Arreglos torpes.** «El extremo inferior de la lanza» dos veces, la marca de deuda en los guardias y «Yo os dije que esperarais a los dos».
- **La última frase del párrafo sobre cómo hablan los Eldara** choca con una mañana en la que sí hablaron.

**Lo que hay que rebajar:**
- **«Más explicación».** Todos los archivos la ligan al hilo del descanso; no hay prueba de que se aplicara a todo el capítulo. El alargamiento general se apoya en «vamos demasiado deprisa». No tiene cita literal, pero tres archivos del mismo día lo recogen como algo que Marcos pidió en el chat. Hay que confirmarlo con él.
- **Emociones nombradas.** Hay demasiados «le gustaba», pero ese gusto por el oficio lo pidió él («a ella le encanta ser buena en eso»). La regla «lo aprobado nunca nombra emociones» es demasiado tajante: en el comentario 6 escribió «Me gusta pero…» sobre un párrafo de interioridad. El problema es cuántas veces, no que aparezcan.
- **Grados de la Sandrie en el combate.** Los pidió él en ese mismo párrafo. Sacarlos de ahí iría contra su comentario; hay que preguntárselo.
- **Sospecha sobre palacio.** El comentario 44 también estaba anclado en esa frase, y la idea sobrevive, aunque más neutra.
- **Lo que «dijo Marcos».** No es cierto que solo dijera una cosa: el 9 de septiembre contestó cinco preguntas («Que Eris descanse», «hablen más, no menos», «Más Nagani», «Solo el aforismo»), y varios supuestos excesos aplican esas respuestas.

**Lo que funciona, sin discusión:** el humo de la herida, la conversación del barco con Haris (lo que quiere: que Eris descanse), las Arterias intactas y la explicación del entrenamiento para dormir.

**Veredictos**

- [confirmado] Haris con tic de impaciencia: Marcos ya lo rechazó en el capítulo nuevo: El 10 de septiembre Marcos rechazó en el Doc el gesto de impaciencia de Haris al empezar el capítulo, y ese párrafo sigue igual en el archivo local y en el Doc. Que se refiera también a la impaciencia como rasgo de carácter (la sensación por la Nexalita, «Se le iba la prisa») es una deducción: la versión que leyó en septiembre ya decía «el de Haris con una impaciencia pequeña», y entonces solo marcó la expresión como incomprensible («no se entiende»), no el rasgo.
- [matizado] Se nombran emociones y motivos que la acción ya mostraba: Las citas existen, y «le gustaba» o «le gustaría» sale seis veces (siete si se cuenta «le habría gustado»). Pero buena parte de ese gusto responde a lo que Marcos pidió con sus palabras en el comentario 6: «a ella le encanta ser buena en eso». Y la intención en la mutilación responde a su queja del comentario 29: «no da tiempo a entender». La regla «lo aprobado nunca nombra una emoción» va demasiado lejos. En el comentario 6 escribió «Me gusta pero…» sobre un párrafo de pura interioridad («Contar por delante era una forma de tener algo. Ella tenía poco, por oficio…»), y aprobó el aforismo. Lo que se sostiene es que hay demasiadas: el problema está en cuántas son, no en que existan.
- [matizado] «Más explicación» se aplicó a todo el capítulo, y era una respuesta puntual: Que «más explicación» era una respuesta dentro del hilo 9 está bien documentado, pero no consta que la IA la usara como mandato general. Todos los archivos la sitúan en el hilo del descanso. El alargamiento general se apoya en «vamos demasiado deprisa». De esa frase no hay cita literal en el repositorio, aunque tres archivos de IA del mismo día la recogen como algo que Marcos pidió en el chat (memoria: «siente que vamos demasiado deprisa»; sesión: «con más profundidad y menos prisa»). La duda de fondo sí es válida: falta confirmarlo con él.
- [confirmado] El refuerzo aprobado se reescribió más de lo pedido: Las dos frases del refuerzo que Marcos aprobó desaparecieron, y él solo pidió que los ocho estuvieran ya en Valdara. Algún cambio era obligado: el diálogo «—Refuerzo. —Ocho» ya no tenía sentido y había que poner «Kalari» en lugar de «comandante» (comentario 39). Pero «Su minuto ya lo había gastado. Se quedó con ese.» y «—Es el oficio.» se podían haber conservado.
- [confirmado] La mutilación se justifica tres veces: La razón del viaje (horas de barco y de Arteria con el preso) se da tres veces en pocas líneas. Marcos pidió aquí más tiempo para entender, así que al recortar hay que conservar la secuencia física y una sola razón clara.
- [matizado] El bloqueo del mirisar frena el combate con una lección: El bloqueo ha crecido de unas 305 a unas 560–610 palabras, según dónde se empiece a contar, y la escala de la Sandrie llega con el pie clavado. Pero fue Marcos quien pidió los grados en ese pasaje: el comentario 26 está anclado en el párrafo del combate «Un mirisar gravitatorio trabaja así…». Y la presentación por etapas del comentario 25 se ha respetado: el hombre, luego el mecanismo, el grado, la marca, y el Haiz en el escritorio. Llevarse los grados del combate contradiría lo que él pidió. Hay que preguntárselo, no darlo por un defecto.
- [confirmado] En el Orio la orden se cuenta dos veces: El contenido de la orden y la presencia de los ocho en Valdara se dicen primero en narración y luego en diálogo. Antes de eso, Eris ya ha anunciado «Nos mandan a Valdara […] Orden de palacio», de modo que el destino sale tres veces.
- [matizado] El párrafo sobre cómo hablan los Eldara contradice la escena: Es cierto que la última frase choca con una mañana en la que sí hablaron. Pero no es doctrina sin respaldo. El párrafo viene de un pasaje que Marcos aprobó como explicación en el comentario 34, y la IA lo reescribió para aplicar lo que él respondió el 9 de septiembre («hablen más, no menos»). Lo que procede es corregir el final, no quitarlo entero.
- [matizado] Frases que responden al comentario y no al lector: «Nadie le había prometido ese descanso» es una negación que corrige la versión anterior, y es un reparo razonable. Que un lector nuevo no pueda entenderla es una opinión, no un dato. La frase que explica la broma de Ravys existe. Pero la cita del canon no la condena del todo: «no se explica» se refiere a glosar la palabra nagani, y ese mismo párrafo del canon describe el motivo de Ravys («para que lo deje en paz»).
- [matizado] Se perdió la sospecha sobre palacio: No es exacto que Marcos marcara solo la frase de los relojes. El comentario 44 está anclado en la misma frase que la que contaba el viaje («había gastado sus cuarenta y ocho horas»), y lo que rechaza ahí es el contador. Quitar «Alguien había contado su viaje mejor que ella» cumple en parte ese comentario. Además, la idea de que palacio conoce el horario se conserva, solo que ahora es neutra: «En palacio lo conocían». La pregunta a Marcos sigue teniendo sentido.
- [confirmado] El arranque repite datos: Que los ocho se quedaron en Lorin se dice dos veces en los primeros párrafos, y la placa se explica en dos párrafos seguidos. La frase del armero, quitada en el Doc, está en ese mismo párrafo repetido.
- [confirmado] Arreglos que quedaron forzados o ambiguos: «El extremo inferior de la lanza» aparece dos veces y suena pesado. La marca de deuda en «algunos hombres de la entrada» deja la duda de si los guardias son deudores, aunque esa ambigüedad ya estaba en la versión que leyó Marcos y él no la señaló. «Yo os dije que esperarais a los dos» se puede leer de dos maneras.

**Omisiones**

- Falta «Cuando toca, toca.» en el cierre aprobado. Marcos escribió «me gusta» (comentario 46) sobre un pasaje que incluía «El reloj de arena bajó, la Arteria cambió de sentido con el sonido seco de siempre y el azul se orientó al sur. Cuando toca, toca.». Hoy la línea 501 termina en «se orientó al sur.» y la frase ya no está en el capítulo. La auditoría solo menciona el cambio de «Eris dejó de contar».
- La auditoría dice que «desde la reescritura, Marcos solo ha dicho una cosa con sus palabras», y no es así. El 9 de septiembre contestó en el chat cinco preguntas sobre el capítulo reescrito: «Que Eris descanse», «Quería decir que hablen más, no menos», «Más Nagani» y «Solo el aforismo» (verificación 2026-09-09, líneas 48–53). La propia auditoría usa dos de esas respuestas. Varias cosas que critica como excesos (el párrafo «El resto lo hablaban», el saludo de ceremonia de Ravys, el aforismo recuperado) aplican directamente esas respuestas, así que no se pueden atribuir solo a la IA.
- El patrón de llamar «sobrecumplido» a algo choca con peticiones expresas de Marcos y no se avisa. Los grados de la Sandrie en pleno combate los pidió él, anclados en ese párrafo (comentario 26). El gusto por el oficio también lo pidió («a ella le encanta ser buena en eso», comentario 6). El fuego controlado lo exigió él: «me parece bien pero no que sea descontrolado» (comentario 31). Lo que se puede reprochar es la dosis o la forma, no que estén.

**Preguntas**

- Los cuatro cambios del Doc del 10 de septiembre («los gemelos Illia y Ravys», «en la yema de un pulgar», «en la misma mente» y la supresión de la frase del armero), ¿son tuyos? ¿Los pasamos al archivo?
- Haris: ¿tiene impaciencia como rasgo propio, o fuera también de la Nexalita y de «Se le iba la prisa»?
- «Más explicación» (19:44): ¿se refería solo al entrenamiento para dormir en las esperas, o pedías en general explicar más? Y si era general, ¿más mundo (Arterias, Sandrie, quién es quién) o más de lo que siente y piensa Eris?
- ¿Dónde y cuándo dijiste «vamos demasiado deprisa»? Con el capítulo ya en 7.240 palabras, ¿sigue pareciéndote rápido o ahora se arrastra en algún sitio?
- En el refuerzo, que te gustaba: ¿recuperamos «Su minuto ya lo había gastado. Se quedó con ese.» y «—Es el oficio.»?
- Cierre: ¿«Eris dejó de contar.» o «Eris dejó de calcular a qué hora volvería.»?
- «Alguien en palacio leía los relojes de Roe»: ¿te disgustaba la frase o la idea de que palacio controla su viaje?
- ¿Te frena la explicación de los grados y la Sandrie con el pie de Eris clavado, o la quieres en ese momento?
- Las cigüeñas desaparecieron, y con ellas la idea de que los Eldara aligeran su peso. ¿Es una capacidad de la raza o solo técnica?
- Rodilla: ¿prefieres el remate antiguo «Menos dolor que Illia, entonces» o el nuevo «A ella tengo que aguantarla siempre»? ¿Te sobra la frase que explica por qué Ravys usa el saludo de ceremonia?

## voz-marcos

**Lo que queda en pie de la auditoría «voz-marcos»**

Las citas de abril y de los 47 comentarios existen y son literales. Las he comprobado en `.claude/transcripts/` y en el JSON de comentarios. El brief maestro es una síntesis de IA (tiene 55 marcas «filecite»).

**Sicario.** Lo pidió él el 17-4 («muy medido, muy preciso») para el primer capítulo. El 8-9 lo rechazó sobre un fragmento suelto, «Ayudó.», y propuso «por fortuna ayudó». Lo que está claro es que rechaza el fragmento suelto. No está claro que rechace la precisión. Sus «me gusta» de ese día abarcan bloques enteros, y el «medido» de octubre es una paráfrasis de la IA.

**Ritmo.** La auditoría omite su frase clave: «me parece bien el ritmo pero creo que puede que no se entiendan bien muchas cosas». Seis de sus comentarios son «no entiendo» o «no se entiende». Su problema principal es que se entienda, no la velocidad.

**Eldara.** Hay una frase suya en acta: «Quería decir que hablen más, no menos.». Que hablen así «también en operación» lo añadió la IA. El 10-9 no frenó que hablen, sino los tics nerviosos.

**Nexalita.** Rechazó órdenes, misiones e «información compleja». Pero aceptó «Cuidado» por la Nexalita y escribió «siempre es información que sienten en sus mentes». La prohibición total de D54 y de la memoria va más allá de sus palabras.

**Reglas sin respaldo.** Siguen vivas D9, D38, D42(2) y D43, la memoria externa que mide con el Sicario y permite palabras por Nexalita, el grep de negaciones y «rápidas y quirúrgicas». Esta última no sale del brief: está en restricciones.md desde el primer commit. D49 y D50(d) no contradicen nada que él dijera.

**Medidas.** Se confirma que los capítulos 2–24 tienen más frases cortas que el 1 (15,7 % frente a 22,6–46,3 %). Es falso que el 13 sea de los más fragmentados. Y la fuente de las notas de los «lectores de IA» no aparece.

**Persona gramatical.** Su Misión 131 mezcla primera y tercera persona. La pregunta sigue abierta, pero su texto no pide la primera persona de forma clara.

Las preguntas para Marcos siguen siendo útiles. Conviene añadir una: si el problema de los capítulos es la velocidad o que no se entienda lo que pasa.

**Veredictos**

- [matizado] El tono Sicario lo pidió Marcos; lo que rechazó fue cómo lo aplicó la IA: Marcos pidió el tono Sicario el 17-4 para «este primer capitulo», por «muy medido, muy preciso». El 18-4 dijo que otro capítulo «no tiene por qué ser en narrativa sicario». El 8-9 lo rechazó sobre un fragmento concreto, «Ayudó.», y propuso «por fortuna ayudó». Sus «me gusta» del 8-9 (comentarios 17 y 46) recaen sobre bloques enteros, no sobre «Norte asegurado...» o «Cuando toca, toca» en particular. Y el «medido» de octubre sale de una paráfrasis escrita por la IA. Lo que está a la vista es que rechaza el fragmento suelto; si rechaza también la precisión, no consta.
- [matizado] Siguen como vigentes decisiones de IA que contradicen su criterio: D9, D38, D43, D49 y D50(d) siguen en v2/decisiones.md sin marca de derogación. D42 sí tiene una marca parcial: D53 dice «Ajusta D40, D42». Solo D9 («Sicario»), D42(2) y D43 chocan de verdad con D52 y D59. D49 y D50(d) no contradicen nada que él haya dicho: D50 nace de una pregunta suya. Lo justo es decir que siguen vivas como reglas de IA sin su visto bueno, no que todas vayan contra su criterio.
- [confirmado] Las memorias que se cargan en cada sesión siguen empujando hacia el Sicario y hacia una Nexalita con palabras: La memoria externa, que se carga en cada sesión, todavía usa el Sicario como vara («tono Sicario = presente», «rompen el Sicario», «Rompen la cadencia Sicario»). También permite palabras por Nexalita, cosa que la copia del repositorio retira. Y fija un grep de negaciones por página que nadie le ha oído pedir a Marcos.
- [matizado] Nexalita: su propio texto se contradice con su comentario: La tensión real no está entre su texto antiguo y su comentario 41, sino entre sus palabras y la regla que la IA sacó de ellas. El 18-4 rechazó que por la Nexalita lleguen «las misiones ni las ordenes». El 8-9 rechazó que llegue «información compleja». Pero ese mismo día aceptó un «Cuidado» de Haris por la Nexalita, pidiendo solo cambiar «placa» por «Nexalita». Sobre el hallazgo de los presos transmitido por la placa solo pidió equilibrar los términos. Y escribió que es «información que sienten en sus mentes». D54 y la memoria fueron más lejos: «sin frases... noticias ni contexto complejo». Su nota a mano, además, admite otra lectura: puede ser el narrador contando qué encontró Haris, y no un dato que llega por el vínculo.
- [matizado] Eldara: «hablan más» es una interpretación de la IA, y él ha vuelto a frenar: Que «hablan más» sí tiene una frase suya en acta (9-9): «Quería decir que hablen más, no menos.». Lo que no tiene respaldo literal es la extensión de D59: «frases completas también en operación» y la orden seca reservada al asalto. El comentario del 10-9 no frena el habla. Frena los tics nerviosos: lo dijo sobre la impaciencia de Haris en el banco. Además, ese comentario no está en ningún archivo del repositorio; solo consta en el registro de esta sesión, como lectura del hilo del Doc.
- [matizado] La regla de «deducción visible» produjo un texto que él rechazó: Rechazó un párrafo deductivo, el del altillo. El razonamiento del almacén, que responde justo a lo que pidió el 2-9 («¿Un almacén cerrado por la mañana? Podía ser...»), no recibió ninguna objeción. El comentario 16 apunta solo al símil «como se mira un blanco». Hay que quitar la fórmula fija sin tirar la duda natural, que sí funcionó.
- [matizado] El brief maestro es un resumen de IA, no texto de Marcos: Es cierto que el brief es una síntesis de IA: tiene 55 marcas «filecite». Pero «rápidas y quirúrgicas» no aparece en el brief. Está en restricciones.md desde el commit inicial (0c9eb6a), como desarrollo de la IA. Y el «demasiado rápido no da tiempo a entender» del comentario 29 se refiere al corte de los dedos del mirisar en el capítulo 1, no a las muertes de Haris y Eris. El choque con esas muertes es una extrapolación razonable, no una contradicción literal.
- [matizado] Solo el capítulo 1 sigue el criterio vigente; del 2 al 24 conservan la compresión: La diferencia de frases cortas se reproduce: con mi recuento, el cap 1 tiene un 15,7 % de frases de 4 palabras o menos, y los caps 2–24 entre el 22,6 % y el 46,3 %. La tendencia es clara. No se sostiene, en cambio, que el 13 y el 20 sean «los más fragmentados». Por frases cortas, el 13 es el menos comprimido de los 2–24. Y por párrafos de una sola frase hay capítulos muy por encima del 42,7 % (16, 19, 24). No he encontrado en el repositorio la fuente de las notas de los «lectores de IA». Además, el cap 1 tampoco está validado por Marcos, así que no es una vara confirmada.
- [matizado] El libro está en tercera persona sin que conste una decisión suya: Es cierto que ninguna frase suya fija la persona gramatical, y que el tono.md inicial ya imponía la tercera. Pero su Misión 131 no está en primera persona pura: alterna primera y tercera. Su nota a mano mezcla «Levanta el puño. Cierra los ojos» con «Abro la mano». La pregunta sigue en pie, pero su propio texto no apunta claramente a la primera persona.

**Omisiones**

- El ritmo, en sus propias palabras: la auditoría corta la cita del 2-9. Completa dice: «Todo se precipita en este cap 1, me parece bien el ritmo pero creo que puede que no se entiendan bien muchas cosas» (sesiones/2026-09-02-lectura-cap1-reglas.md:10). Es decir, le gustaba el ritmo y le faltaba que se entendiera. Esa es la clave para la pregunta de tono y ritmo, y no aparece en el informe.
- La señal más repetida de sus 47 comentarios es que no entiende algo: «no entiendo» (comentarios 19, 23, 27, 30 y 31) y «no se entiende» (comentario 2). Pesa más que cualquier rechazo de estilo, y la auditoría no la recoge como patrón.
- El informe pone «Nunca hacer referencia a sentidos» como prueba de que no quiere la Nexalita como canal de información. El comentario completo dice lo contrario: «siempre es información que sienten en sus mentes directamente». Lo que corregía era el verbo «vio» por «sintió». D54 y la memoria del repositorio («queda retirada») van más allá de lo que él dijo.

**Preguntas**

- Del tono Sicario, ¿rechazas las frases sueltas tipo «Ayudó.» o también lo «muy medido, muy preciso» de tu Misión 131 («Norte asegurado. Sur bloqueado. Oeste cubierto.»)?
- ¿Puede pasar por la Nexalita una alerta táctica de un solo concepto («cuidado», «asegurado»), como en tus notas a mano, o solo estados y emociones?
- ¿Los Eldara en operación deben ser profesionales y escuetos (sin tics) y conversar con frases completas solo fuera de ella, o también hablan más durante la misión?
- ¿Quieres el libro en tercera persona cercana o te planteas la primera persona en presente con la que escribiste la Misión 131?
- En los golpes más duros (el bajo palacio, el descubrimiento de Lirae, las muertes), ¿quieres prosa fragmentada o la misma cadencia explicada y lenta del capítulo 1?
- ¿Te reconoces en «raro, medido, especial, auténtico, arriesgado; personajes carismáticos que no acaparan» como la vara de tono del libro?

## tramo-medio

## Qué queda en pie de la auditoría del tramo medio (caps. 9–16)

**Se sostiene lo principal.** El hilo del permiso para Itsu se frena unas 7 u 8 veces entre el 11 y el 16. Ese diseño viene del outline de IA («segunda negación», «tercera negación»), no de Marcos. La visita a Norel en la que Lirae decide quedarse se repite en el 14, el 15 y el 17. El 15 acumula turnos y relevos. A esto se suma otra repetición que la auditoría no contó: la bolsa lista para salir que nunca sale (11, 12, 13, 14, 15).

**La revisión de octubre exageró, y la auditoría acierta al decirlo.** Solo un lector (que es un modelo) estuvo a punto de dejar el libro en el tramo, en el 11-12. Otro solo miró cuántas páginas le quedaban en el 15, y el tercero casi lo deja en el 5. El bucle real es más estrecho de lo que se dijo: el 11, partes del 12 y la mitad del 15. El 10, el 13, la escena de Illia y la cena funcionan, y el 9 empata con el 13 como pico.

**Lo del secreto es medio cierto.** Eris se lo cuenta a Lirae y a Haris, y prepara con él una salida sin insignia. Pero no investiga ni se arriesga ante Faree. En la cena es Faree quien la tantea sin nombrar el lago.

**Hay que corregir varias cosas:**
- No hay un hueco de causa entre el 14 y el 15. El final del 14 explica por qué vuelve al servicio y pide el permiso. La duda abierta es otra: por qué en el 14 quiere huir sin Haris.
- En el 12, lo que no cambia nada es más o menos una cuarta parte, no dos tercios. Y el «se lee como acta» se refiere a los costes de Iretha, no a Loroa.
- El «núcleo limpio» del 19 remite al 9, no al 12.
- El comentario de Marcos sobre los tics existe, pero está en el Doc y es sobre un gesto de impaciencia de Haris en el capítulo 1. Solo vale como pregunta.
- D61–D64 son resúmenes de IA con dos frases literales de Marcos.

**Opciones.** Las cuatro siguen siendo propuestas razonables. La C pondría la escena en que Faree tiene razón en la tarifa de Loroa, pero Eris no habla en ella y quien acierta es Telaia. Las bases señalan como sitio natural el 11 («la ciudad sirve»). La D, en la que Eris confiesa, tiene un coste que la auditoría no menciona: se pierde la ambigüedad sobre cuánto sabe Faree, que un lector valoró. Lo que hay que proteger: Iretha, «Núcleo limpio», el pliegue, la cortina, la noche en el ala sur, el 13, Illia y la cena.

**Veredictos**

- [matizado] El permiso de Itsu: 1 petición y 7 frenos en seis capítulos: El hilo del permiso se frena una y otra vez entre el 11 y el 16, unas 7 u 8 veces según cómo se cuente. Al recuento le falta un freno: el 12 se abre con Eris «con la bolsa de Itsu al hombro» y una convocatoria del rey. Y le sobra otro: lo que dice Muoro no frena el permiso, solo pregunta si cambia el servicio. Es cierto que el outline de IA lo planteó como «segunda» y «tercera negación».
- [confirmado] El beat «vente / me quedo» con Lirae aparece tres veces: La misma escena se repite tres veces: Eris llega a Norel con la bolsa, Lirae se queda por su trabajo y Eris le pide que no baje. Pasa en el 14, en el 15 y en el 17, donde la despedida vuelve a calcar el «No bajes» del 14.
- [confirmado] «Los tres lectores pensaron en dejar el libro en 10–15» exagera la fuente: Tal como la cuenta la auditoría, es correcto. Solo un lector, el 1, estuvo a punto de dejar el libro en el tramo (en el 11-12). El lector 0 solo miró cuántas páginas le quedaban, en el 15. El lector 2 casi lo deja en el 5. Los tres lectores son modelos de IA. Hay que corregir un detalle: el 13 no es el único pico, porque el 9 también saca 5/5/5.
- [confirmado] «Desde el 13 no hace nada con el secreto» es medio cierto: Es medio cierto. Eris cuenta el lago a Lirae (en el 14) y a Haris (en el 16), y en el 15 prepara con Haris una salida sin insignia. Pero no investiga, no lo usa ante Faree y en el 15 no lo hace pesar en nada. Un matiz: en la cena es Faree quien la tantea, sin nombrar el lago. La escena ya es un enfrentamiento velado, y un lector valora que no se sepa cuánto sabe el rey.
- [matizado] Dos tercios del capítulo 12 no cambian nada: La parte del 12 que no cambia nada es más o menos una cuarta parte: la tarifa de Loroa, los tres asuntos cortos y la antesala. No llega a dos tercios. Además, el comentario «se lee como acta» de un lector no habla de Loroa: habla del informe de costes de Telaia sobre Iretha. Loroa no vuelve a pagarse después, pero cierra la petición de la Liga del capítulo 5.
- [refutado] Hueco de causa entre el 14 y el 15: El paso de «puedo faltar» a pedir el permiso sí está explicado en el texto. Lirae se niega a irse, y Eris decide seguir de servicio para poder volver a Norel e intentarlo otra vez. Con el permiso podría ir a Itsu sin que la declaren desertora. La cita del lector 1 se refiere a otra cosa: a por qué en el 14 quiere huir sin Haris. Esa duda sí queda abierta en el texto.
- [matizado] Pagos que dependen de los capítulos 11 y 12 si se funden: Tres de estos pagos se confirman: la noche en el ala sur, la cortina y la frase de Faree sobre Coria. El de «núcleo limpio» en el 19 no depende del 12. Remite al parte que Eris escribió en el 9.
- [confirmado] La escena de Illia del 15 sostiene el final: Se confirma. La escena de Illia es lo que salva el 15 para los tres lectores y se paga en el 22.
- [confirmado] El capítulo 10 no forma parte del bucle: El 10 cambia la situación, lo que Eris sabe y su relación con palacio. Lo único que pone en él del bucle es la primera petición del permiso.
- [confirmado] Del borrador original solo quedan títulos, en otro orden: En Eris.docx.md estos seis títulos aparecen seguidos y sin ningún texto. «Ygoran: La rebelde» va antes de «Misión 135», «Vuelta a Coria» y «La cena». Las bases dicen que la autoría del texto posterior a la Misión 131 está sin decidir.
- [matizado] Faree repite el beat del sueño de Eris: La pregunta por el sueño sí se repite, pero en el 16 sube de tono a propósito: termina en «empiezan a equivocarse». Es más un eco buscado que una repetición vacía. La gravedad es mínima.
- [matizado] Gestos nerviosos de Eldara frente al comentario literal de Marcos: El comentario existe en el Google Doc (lo dejó Marcos el 2026-09-10), pero no está en el repositorio. Está puesto en el capítulo 1, sobre un gesto de impaciencia de Haris, no sobre reacciones a un duelo. De los ejemplos del tramo, solo el temblor del 9 se parece a lo que comentó. «Demasiado quieto» es lo contrario de un tic, y la letra apretada no es un gesto nervioso. Tiene sentido como pregunta para Marcos, no como defecto.

**Omisiones**

- Se repite otro beat que la auditoría no cuenta: la bolsa lista para salir que nunca sale. Aparece en 11 («Después Eris fue a preparar la bolsa», «Al alba salía.»), 12:3 («con la bolsa de Itsu al hombro»), 13:3 («La cama de palacio la retenía otra noche lejos de su hermano»), 14:3 («la bolsa que había preparado para Itsu»), 15:3 («La bolsa de Itsu seguía junto a la cama») y 15:261 («—Bolsa pequeña»). Es la imagen física del bucle, y arreglar el ritmo pide decidir en qué capítulos se queda.
- El capítulo 11 tiene más peso del que le da la auditoría con «casi nada». Es la primera vez que Eris le oculta algo al rey a sabiendas: «Había dejado fuera el nombre y el segundo depósito. Esperó a ver si el rey los ponía entre ambos.» (11:109). Las bases de octubre señalan este capítulo, y no Loroa, como el sitio natural de la escena en que Faree tiene razón contra ella: «El hueco natural es la conversación del 11 sobre que «la ciudad sirve»». La opción C elige la tarifa de Loroa, donde Eris no habla y quien acierta es Telaia («—Lo discutirán dos semanas. Aceptarán.»), no Faree.
- D61–D64 no son una transcripción literal de Marcos. Son resúmenes que redactó la IA bajo el rótulo «Son palabras suyas». Palabras literales suyas solo hay dos: «La revelación de las opiniones frente a los hechos.» y «eso hace que haya que construir muuuy bien lo que hay que hacer». Además, la cena del 16 ya es un tanteo velado de Faree («¿Qué hace una comandante cuando empieza a desconfiar de la orden...?»), y un lector valora esa ambigüedad. Por eso la opción D (que Eris confiese) tiene un coste que la auditoría no menciona.

**Preguntas**

- ¿Qué tenías pensado para «La duda», «Discordia», «Vuelta a Coria» y «La cena: confesiones»? ¿Esos títulos son tuyos y quién confiesa en la cena?
- En tu borrador, «Ygoran: La rebelde» iba antes de «Vuelta a Coria» y de la cena. ¿Querías que Eris saliera de Coria y volviera antes de la cena?
- ¿Qué camino prefieres: tu tesis literal (una escena en que Faree tiene razón contra Eris, ella le cree y los hechos la desmienten) o el libro actual dicho de otra manera (vio bien, lo dijo tarde y en voz baja)?
- ¿Eris debe decirle a Faree lo que vio antes de huir, insinuárselo o no decírselo nunca?
- Si eliges tu tesis, ¿en qué asunto político te imaginas a Faree acertando contra ella: Loroa (ya está en la página), Ygoran o Iretha?
- ¿El permiso de Itsu tiene que existir como hilo? ¿Quieres que Eris llegue a ir a Itsu o que el hermano le conteste? ¿Cómo se llama el hermano superviviente (D13)?
- ¿Te parece bien que el libro pase de 25 a 23 capítulos si se funden el 11 con el 12 y el 14 con el 15?
- ¿Dónde quieres en este tramo la escena tipo Bleed for This, en la que todos le dicen que no es tan fácil y ella lo hace, y ante quién?
- Tu comentario «Todos los eldara son muy profesionales no tienen tics nerviosos por defecto», ¿vale también para temblores después de una muerte o de un susto, como los de los capítulos 9 y 13?

## afirmaciones-octubre

## Lo que queda en pie

**Se corrige lo más grave del documento de octubre.** En el muelle (23) Eris no «toma por hechos tres opiniones de su verdugo». Theim solo dice una cosa: «Tú le diste la casa». Y el libro la respalda: Nyree avisa en el 19 y Eris se pone la placa en el 22. «Bajó porque yo se lo conté» lo piensa Eris, y el 20 le da en parte la razón. «Ella había sido su Coria» sale de lo que Haris dice en el 21. El narrador no hace suya la versión de Theim. Lo que sí es verdad es que Eris muere cargando con toda la culpa y el texto casi no lo equilibra. Si eso es verdad o error es cosa de Marcos.

**También se sostiene:**
- Eris nunca se enfrenta a Faree. Sí hace cosas con el secreto (se lo cuenta a Lirae, a Nyree y a Theim), pero no lo usa en política.
- Entre el 6 y el 13, Faree nunca tiene razón contra ella. Y no hay hoy ninguna escena en la que Eris crea a otro por pensar que sabe menos.
- Continuidad, confirmado: la placa transmite frases en el 3; el preso tiene heridas distintas en el 1 y en el 2, y también llega de forma distinta; Theim lleva «espada curva» en el 5; faltan dos «¿» en el 9.
- Las palmeras del 13 no son un error.
- Hay dos Berys, el hermano de Itsu sigue sin nombre y las notas de revisión están dentro de los 25 capítulos.
- En el 22 mueren al menos tres Eldara sin nombre, e Illia no dice nada.

**Cifras corregidas:** «no contestó» aparece 23 veces (19 con Eris), «Eris esperó» 15 y «No era X. Era Y.» 6 en forma estricta.

**Por comprobar:** la frase de Marcos sobre los «tics nerviosos» no está en el repositorio. Puede venir del Doc vivo, pero hasta verla no debe darse como palabras suyas.

**Sobre los lectores a ciegas:** el documento copia su síntesis, y esa síntesis ya tenía sus propias inconsistencias. El muelle sacó 4/3/4, el 9 y el 13 empatan a 5/5/5, y uno de los lectores pensó en dejar el libro en el 5, no en el tramo del 10 al 15.

**Veredictos**

- [confirmado] Falso: en el 23 Eris no toma por hechos tres opiniones de su verdugo: Solo una de las tres es de Theim («Tú le diste la casa») y el libro la respalda. «Bajó porque yo se lo conté» lo dice Eris, y el 20 le da en parte la razón. «Ella había sido su Coria» viene de Haris en el 21. El narrador no adopta la versión de Theim. Lo que queda es que Eris muere echándose toda la culpa con poco contrapeso.
- [confirmado] Exagerado: desde el 13 Eris no hace nada con el secreto: Nunca se enfrenta a Faree, pero sí usa el secreto: se lo cuenta a Lirae (14), se presenta con él ante Nyree y se calla la ruta (19) y se lo suelta a Theim (23). No lo usa en política. Los títulos de Marcos citados están vacíos.
- [confirmado] Ejemplos mal elegidos para creer versiones ajenas por sentirse inferior: En el 10 Eris contrasta el parte y acusa a Lyris; lo acepta porque no tiene otra fuente, no porque crea saber menos. El caso del 23 cae con el punto anterior. Hoy no hay una escena clara de ese tipo.
- [confirmado] Continuidad: la placa transmite frases en el 3: Confirmado tal cual. La nota del propio capítulo reconoce que está pendiente.
- [confirmado] Continuidad: las manos del preso no cuadran entre el 1 y el 2: Confirmado. Además el 2 contradice al 1 en cómo y cuándo llega el preso (ver omisiones).
- [confirmado] Continuidad: Theim con hoz y espada curva en el 5: Confirmado.
- [matizado] Continuidad menor: palmeras solo a la vuelta en el 13: No es un error. A la vuelta Eris también pasa por un jardín de rosas que no se nombra a la ida; son recorridos distintos. El 20 pone palmeras y robles juntos. Como mucho, pide una palabra a la ida.
- [confirmado] Faltan aperturas de interrogación (dos casos): Solo hay dos casos, los dos en el 9.
- [matizado] El documento se contradice con las notas de los lectores: Las notas son exactas, pero el documento copia la síntesis de los lectores, que ya ponía el muelle detrás del 9 y el 13. Además el 20 también saca 4/4/4 y el 9 empata con el 13 a 5/5/5. Que el 13 caiga dentro del «bucle 10-15» es una contradicción que viene de la síntesis.
- [matizado] Recuento de «no contestó» algo inflado: Hay 23, no 24. Con sujeto Eris explícito son 19 y no 20 (los otros cuatro son de Faree, Lyris, Illia y Haris). «Eris esperó» da 15 en 10 capítulos. La forma estricta de «No era X. Era Y.» da 6 (2, 6 tres veces, 9 y 18).
- [matizado] Informe: el Eldar del recibidor lo rematan Mari y Krela: El texto es ambiguo: tras «Cayó.» el Eldar al que golpea Mari puede ser otro. Lo seguro es que Eris no se pregunta quién era. En el 22 mueren al menos tres Eldara sin nombre, no dos.
- [matizado] Informe: Faree nunca tiene razón contra ella entre el 6 y el 13; ninguna discusión política: Sí, Faree nunca tiene razón contra ella. Pero en el 11 sí hay un intercambio político breve sobre Ygoran: Eris pregunta y luego se calla el cuaderno. No hay desacuerdo abierto.
- [confirmado] Informe: fichas de entrada, Berys, notas e Illia: Es cierto, con un matiz: Maelor entra con biografía, pero enseguida pelea, y el propio documento elogia su cameo.
- [matizado] Informe: cita de Marcos del 10 de septiembre sobre los tics de los Eldara: No la he encontrado en el repositorio. Puede venir del Doc vivo, pero hasta comprobarla no debe darse como palabras de Marcos.

**Omisiones**

- El 2 contradice al 1 también en cómo llega el preso. En el 1 Eris lo entrega en el Orio: 01:477 «Eris entregó a los Eldara que habían venido del cuartel el preso». En el 2 el preso llega «Por la Arteria de Jomla, dos guardias, una carta» (02:45) y el mensaje dice «La comandante pasa por Orio sin bajar» (02:19). La lectora a ciegas lo señaló (anti-eco.json:529) y el auditor no lo recoge.
- El auditor no examina la otra afirmación del documento de octubre sobre el muelle: que Theim desmiente con «Lo elegí» la única intuición política de Eris. Theim solo dice «Serví a su padre antes que a él. Sabía a quién servía.» (23:211) y «—Lo elegí.» (23:217). Eso responde a «Te ha. Manipulado. A ti.», pero no a «A todos. Es. Su plan.» (23:199). Más que desmentirla, la deja sin contestar.
- El documento de octubre dice que los tres lectores pensaron en dejar el libro en el tramo del 10 al 15. Uno de ellos, el lector joven, sitúa su primer abandono en el capítulo 5: «Cap 5, la audiencia en el Larien», y solo después «el tramo 11-12». Es cierto a medias y nadie lo corrigió.

**Preguntas**

- En el muelle, Eris piensa «Bajó porque yo se lo conté» y «Ella había sido su Coria». ¿Quieres que eso se lea como una verdad que descubre o como una culpa equivocada?
- El preso del capítulo 1: ¿le cortan los dedos de las dos manos, como en el 1, o una mano por la muñeca, como dice el 2?
- ¿Hay palmeras en los jardines de Kiral Ree junto a los robles, o sobran?
- Tu comentario del 10 de septiembre («Todos los eldara son muy profesionales no tienen tics nerviosos por defecto»): ¿vale solo para Haris en el capítulo 1 o para todos los Eldara del libro?

## metodo

## Lo que queda en pie de la auditoría

**El diagnóstico central se sostiene.** Entre el 1 y el 7 de septiembre la IA escribió los 25 capítulos. Después hubo varias rondas de críticas y cambios, y la lectura de Marcos que consta es solo la del capítulo 1. Él mismo pedía avanzar y autorizaba aplicar cambios sin leer, así que la cola de lectura no paró de crecer. ESTADO.md no indica un paso claro: acumula entradas, todavía manda a la «voz Sicario» y da por buenos capítulos de la v1. La sesión de octubre se hizo en otra máquina, sin la guía que salió de sus 47 comentarios. Desde el 14 de octubre no consta ninguna respuesta suya.

**Hay que corregir algunas cosas:**
- Las lecturas del capítulo 1 sí se hicieron. El 8 de septiembre comentó el capítulo entero. El 10 empezó a leer la versión nueva: dejó un comentario e hizo cuatro cambios suyos antes de detenerse hacia el párrafo 9. Lo que no se hizo fueron las lecturas grandes: el acto I, los actos IV–V y la lectura de corrido.
- Su comentario del día 10 rechaza justo el arreglo que la IA había hecho a un comentario suyo anterior: el gesto de impaciencia de Haris.
- D13 no demuestra que conteste el chat y no los documentos: se le preguntó directamente y sigue abierta.
- El ejemplo del error «7 exactos / quince» une dos cosas distintas.
- Lo que Marcos dijo fue «el tono “Sicario” no me gusta» y «vamos demasiado deprisa». Su frase media no cambió al reescribir el 1; lo que bajó fue la proporción de frases muy cortas. Varios de los capítulos que mejor funcionan tienen muchas. Conviene avisarle, no dar por hecho que los rechazará.
- Las notas de revisión van al final de cada archivo, separadas, y no están en el Doc.
- El método de octubre sí ordena qué cambiar, pero a escala de todo el libro. Falta una primera tarea que quepa en una tarde.

**Falta en la auditoría:** los cuatro cambios que Marcos hizo a mano en el Doc el 10 de septiembre no han llegado al repositorio. Son la única muestra de «reescribir con su mano» que existe. Tampoco cuenta que el 12 de septiembre pidió rehacer la página de promesas para enseñarla, ni que abrió el Doc el 24.

**Lo que funciona:** cuando Marcos lee, es preciso. Comprobar en el texto y no en la respuesta de la IA destapó las decisiones que Codex había tomado por él.

**Veredictos**

- [confirmado] La escritura siempre fue por delante de la lectura: Entre el 1 y el 7 de septiembre la IA escribió los 25 capítulos de la v2 (los 1–4 el día 1 y los otros 21 el día 7). La lectura de Marcos que consta se limita al capítulo 1. Él mismo pedía avanzar, y la IA dejaba anotado que eso no valía como validación, pero seguía escribiendo.
- [matizado] El paso siguiente siempre era «Marcos lee», y lo que tenía que leer crecía: Las lecturas grandes que se le pidieron (el acto I entero, los actos IV–V, la lectura corrida) no constan. Las del capítulo 1 sí se hicieron, al menos en parte. El «relee el cap 1» del 2 de septiembre se cumplió el 8, con 47 comentarios sobre una versión posterior. El «lee el capítulo 1 nuevo en el Doc» del 9 lo empezó el 10, con un comentario y cuatro ediciones suyas, y se detuvo hacia el párrafo 9. Así que la frase «no consta que se hiciera ninguno» no es exacta.
- [matizado] El método de octubre arranca por un trámite y no ofrece una primera tarea pequeña: Los pendientes del 14 de octubre empiezan por cosas que dependen de Marcos: marcar la página, elegir entre los dos caminos y aprobar que se quiten las notas. Nada de eso tiene respuesta. El documento sí da una lista ordenada de qué cambiar (§5, encabezada por «Que Eris elija donde duda»), pero son cambios de todo el libro, no una tarea para una sentada. Además, marcar las 64 decisiones se planteó como algo opcional («puede marcarlas»), no como requisito previo.
- [matizado] Marcos contesta preguntas cortas en el chat, no documentos ni formularios: La tendencia se ve: lo que se le preguntó en el chat el 9 de septiembre y el 14 de octubre lo contestó en el momento, y la página de octubre y las podas del documento de crítica siguen sin respuesta. Pero D13 no sirve de ejemplo: también se le preguntó directamente y sigue abierta. Además, a la vez que D13 se le preguntó el nombre de la cuarta alumna, y contestó («invéntatelo tú»); la IA decidió no aplicar esa respuesta a D13. Y «cerrar en bloque los 40 hilos» no era una pregunta, era una tarea para él en el Doc.
- [confirmado] ESTADO.md y CLAUDE.md no dicen cuál es el paso y se contradicen con lo derogado: ESTADO.md arranca con 15 entradas fechadas («Última intervención/lectura/ajuste») y otras cuatro líneas de cabecera más antiguas. Su parte fija sigue mandando a la «voz Sicario». Los «Pendientes vivos» son de mayo y del 1 de septiembre. La tabla da por validados (✅) los capítulos de la v1. «Diecisiete» es una cifra aproximada, pero el fondo es correcto.
- [confirmado] Dos máquinas: octubre trabajó sin la guía sacada de la lectura de Marcos: La sesión del 14 de octubre se hizo sin los 16 archivos que solo existen sin versionar en esta máquina. Entre ellos están la guía de criterios sacada de los 47 comentarios y el plan de reescritura. Esa guía es lo único escrito que procede de una lectura real de Marcos de la v2.
- [confirmado] La IA cambió texto que Marcos había validado y respondió por él preguntas abiertas: En la v2 se sustituyó «No la creí», del capítulo 20 que Marcos validó en mayo y que el diagnóstico del 1 de septiembre declaraba intocable. El motivo anotado fue de continuidad con el 14 revisado, y no consta que se le preguntara. Codex también decidió por su cuenta qué quiere Haris, aunque CLAUDE.md reserva para Marcos la intención de los personajes.
- [matizado] Los capítulos 2–24 conservan la cadencia que Marcos rechazó: Lo que Marcos dijo con sus palabras fue «Creo que el tono “Sicario” no me gusta» y «vamos demasiado deprisa en general». La medida que mejor recoge el cambio no es la frase media, sino la proporción de frases muy cortas. La versión que él comentó tenía una frase media de 10,8 palabras, casi igual que la reescrita (10,9), y un 29,2 % de frases de cuatro palabras o menos, frente al 16,1 % actual. Muchos capítulos de 2–24 están en ese 29 % o por encima, así que es razonable avisarle. Pero no está demostrado que vaya a rechazarlos: los que mejor puntuaron los lectores a ciegas (9, 13 y 16) tienen muchas frases cortas. Las notas de revisión no están mezcladas con la prosa: van al final de cada archivo, en una sección rotulada, y no están en el Doc.
- [confirmado] El primer comentario de Marcos a la versión nueva rechaza el arreglo de la IA a su comentario anterior: El comentario 2 («no se entiende», sobre «de pie que quiere andar») se resolvió dando a Haris un gesto de impaciencia. El 10 de septiembre Marcos comentó justo ese párrafo diciendo que los Eldara no tienen tics nerviosos.
- [matizado] Sustituir el capítulo entero en el Doc dejó sin anclaje sus comentarios, y las respuestas salieron con su cuenta: Los anclajes se perdieron y las respuestas se publicaron con la cuenta de Marcos, pero llevaban el prefijo «Codex —», así que sí estaban marcadas. Hoy la herramienta devuelve 2 hilos: 1 de los 45 antiguos (el del índice) y 1 nuevo. Que no devuelva los demás por haber perdido el anclaje es la explicación probable, pero no está confirmada.
- [matizado] La IA comprobando su propio texto se presentó como verificación: Las sesiones llaman «verificación» o «continuidad comprobada» a revisiones mecánicas que la IA hacía de su propio texto, y la revisión de octubre lo cuenta como eco. Pero el ejemplo del error está mal emparejado. El «7 exactos» del 2 de septiembre se refiere al capítulo 1; el «quince» del 7 es un error de la revisión del 7 sobre el despliegue de la plaza (capítulo 3), y lo detectó esa misma revisión. No es la corrección de lo anotado el 2.
- [confirmado] Las decisiones D1–D51 constan como de Marcos sin prueba: La cabecera de v2/decisiones.md atribuye todo a Marcos, y la revisión de octubre señala que esa atribución la escribió la IA sin transcripción.
- [confirmado] Lo que funciona: cuando Marcos lee, acierta y es preciso: Sus lecturas producen observaciones concretas que los lectores externos confirmaron después. Y el criterio del 9 de septiembre (comprobar en el texto nuevo, no en la respuesta) sirvió para destapar lo que Codex había decidido por su cuenta. Ojo: esos lectores externos también son modelos de IA.

**Omisiones**

- Marcos ya reescribió con su mano, y el repositorio no lo recoge. El 10 de septiembre hizo cuatro cambios en el arranque del capítulo 1 en el Doc: los nombres «Illia y Ravys», «en la yema» en lugar de «bajo la uña», «misma mente» en lugar de «misma nuca», y quitó la frase del patio de Lorin. Ninguno está en v2/capitulos/01-mision-133.md, que sigue diciendo «bajo la uña de un pulgar», «en la misma nuca» y «Pensó en el patio de Lorin», y no cambia desde el 12 de octubre. El 9 de septiembre se había fijado que «el Doc es la fuente de comentarios y v2/capitulos/ su espejo». Para el método «Marcos reescribe con su mano», esta es la única muestra real, y está perdida en el Doc.
- La cronología se salta el 12 de septiembre. Ese día, a petición de Marcos, la IA rehízo la página «Las promesas de Eris» para enseñarla en el móvil. Fue otra ronda de IA, basada en la contabilidad de promesas que hoy está en duda, y le dejó otra tarea («Marcos tiene que hacerlo él»: mover el pin de compartido). También falta que abrió el Doc el 24 de septiembre sin dejar rastro. Ninguno de los dos datos encaja con decir que su última intervención fue el 10.
- El informe se apoya en la frase media («de 6,2 a 10,1 frente a 10,9») para decir que los capítulos 2–24 tienen la voz rechazada. Pero la versión del 1 que Marcos comentó ya tenía 10,8 palabras de frase media; lo que cambió al reescribirla fue la proporción de frases muy cortas, del 29 % al 16 %. Y los capítulos que mejor valoraron los lectores a ciegas (9, 13 y 16) están entre los que más frases cortas tienen. Las medidas sirven para avisar, no para dar por hecho que va a rechazar un capítulo.

**Preguntas**

- ¿Leíste entero el capítulo 1 nuevo (7.249 palabras) después del 10 de septiembre, o te quedaste en el arranque? Si lo leíste, ¿te suena a ti?
- ¿Abriste la página «Las bases del cambio»? Si la abriste y no marcaste nada, ¿qué te frenó: la cantidad, el formato, o que no sentías tuyas esas decisiones?
- Para el arco de Eris hay dos caminos: tu tesis con la escena que falta (Faree con razón en política y los hechos desmintiéndolo después) o el libro actual contado de otra manera. ¿Tienes ya una intuición, aunque sea provisional?
- ¿Cuánto tiempo a la semana puedes dar de verdad a Eris, y qué prefieres hacer con él: leer, escribir o hablar?
- Cuando dices «reescribir con mi mano», ¿piensas en escribir tú cada frase, o en decidir tú cada escena y corregir un borrador?
