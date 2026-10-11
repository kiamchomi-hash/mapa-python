# Mapa para dominar Python

Actualizado: 11 de octubre de 2026

## Cómo usar este mapa

El camino tiene 4 etapas en secuencia (niveles 0 a 13 y bloques A a D), un nivel 14 orientado al empleo, un track de experto en backend, infraestructura y cloud, y 2 tracks paralelos (matemáticas y sistemas) que se estudian al mismo tiempo desde la Etapa 3. Todas las fuentes son de universidades, de fundaciones y organismos de estándares (PSF, IETF, OWASP, CNCF) o la documentación oficial de cada tecnología, y se verificaron el 11 de octubre de 2026.

- **Versión de referencia:** Python 3.15, la última estable ([What's New in 3.15](https://docs.python.org/3/whatsnew/3.15.html)).
- **Regla de avance:** no pasar de nivel hasta resolver los ejercicios del nivel sin mirar la teoría. Cada tabla tiene una columna de ejercicios con la fuente de práctica de cada nivel.
- **Estructura de carpetas:** una carpeta por nivel, cada una con `teoria/`, `ejercicios/` y `proyecto/`.
- **Proporción sugerida:** 30% leer o ver clases, 70% escribir código.

Para marcar tu avance tema por tema: [TRACKER.md](TRACKER.md)

## Orden recomendado

Las secciones de este documento siguen este orden; los tracks paralelos aparecen justo después de la etapa con la que empiezan. Cada paso depende solo de los anteriores.

1. **Etapa 1** (niveles 0–5). Desde el nivel 3 se suma en paralelo el complemento de ciencias de la computación (Berkeley CS61A).
2. **Etapa 2** (niveles 6–10). CS61A termina junto con el nivel 7.
3. **Especialización Web** (Harvard CS50W): la primera especialización del nivel 13, adelantada porque es requisito del nivel 14.
4. **Nivel 14 – Listo para trabajar.** Al terminarlo llegás al **hito de empleo: ya podés postularte a puestos junior** (unas 1110 h acumuladas: 2,1 años a 10 h por semana o 13 meses a 20 h por semana). Este hito no depende de la Etapa 3, de las matemáticas ni de la IA.
5. **Etapa 3** (niveles 11–12), junto con los tracks paralelos de matemáticas y de sistemas y con el track de C y Rust. El track de experto empieza en paralelo.
6. **Especializaciones restantes** del nivel 13: automatización y datos.
7. **Etapa 4** (bloques A–D). El bloque A requiere matemática discreta; el bloque C requiere sistemas operativos y CMU 15-213.
8. **Especialización IA y Camino a IA:** requieren la Etapa 3 y el track de matemáticas completo.

## Tiempo estimado

Las horas de cada tabla son estimaciones e incluyen clases, lectura, ejercicios y proyecto. Se basan en la carga publicada de cada curso cuando existe: un crédito ECTS equivale a 25–30 h de trabajo (cada curso del MOOC de Helsinki declara 5 ECTS), y en el MIT una unidad equivale a 1 h semanal durante un cuatrimestre de unas 14 semanas, así que un curso de 12 unidades ronda las 170 h. Si un tema te resulta nuevo de verdad, contá un 25% más.

El mapa completo equivale aproximadamente a una carrera de grado en computación más una maestría. No hace falta terminarlo para trabajar: el hito de empleo llega al final del paso 4, y lo demás se estudia mientras trabajás.

| Paso | Contenido | Horas | Acumulado | A 10 h por semana | A 20 h por semana |
| --- | --- | --- | --- | --- | --- |
| 1–2 | Etapa 1 (125), CS61A (180) y Etapa 2 (315) | 620 | 620 | 62 semanas (1,2 años) | 31 semanas (7 meses) |
| 3 | Especialización Web | 150 | 770 | 77 semanas (1,5 años) | 39 semanas (9 meses) |
| 4 | Nivel 14 – Listo para trabajar, con portfolio | 340 | **1110** | **111 semanas (2,1 años)** | **56 semanas (13 meses)** |
| | **Hito de empleo: podés postularte a puestos junior** | | **1110** | | |
| 5 | Etapa 3 (niveles 11–12) | 100 | 1210 | 121 semanas (2,3 años) | 61 semanas (1,2 años) |
| 5 | Track de matemáticas | 770 | 1980 | 198 semanas (3,8 años) | 99 semanas (1,9 años) |
| 5 | Track de sistemas | 630 | 2610 | 261 semanas (5 años) | 131 semanas (2,5 años) |
| 5 | C y Rust | 620 | 3230 | 323 semanas (6,2 años) | 162 semanas (3,1 años) |
| 6 | Especializaciones de automatización y datos | 250 | 3480 | 348 semanas (6,7 años) | 174 semanas (3,3 años) |
| 5–7 | Track de experto | 1545 | 5025 | 503 semanas (9,7 años) | 251 semanas (4,8 años) |
| 7 | Etapa 4 | 390 | 5415 | 542 semanas (10,4 años) | 271 semanas (5,2 años) |
| 8 | Especialización IA (220) y Camino a IA (590) | 810 | **6225** | **623 semanas (12 años)** | **311 semanas (6 años)** |

Los tracks paralelos se reparten las mismas horas semanales, así que estudiarlos en paralelo no cambia el total: cambia en qué momento terminás cada uno. El calendario supone 52 semanas de estudio por año; con vacaciones, sumá un 10%.

## Etapa 1 – Fundamentos (niveles 0–5)

Al terminar esta etapa podés escribir scripts completos que leen datos, los procesan y manejan errores.

| Nivel | Temas | Fuente principal | Ejercicios | Horas |
| --- | --- | --- | --- | --- |
| 0. Preparación | Instalación, terminal, intérprete, editor, `venv`, `pip`, Git básico (`init`, `add`, `commit`, `log`, `diff`) | [Tutorial oficial en español](https://docs.python.org/es/3/tutorial/) + [Python Packaging User Guide](https://packaging.python.org/) + [MIT Missing Semester](https://missing.csail.mit.edu/2026/) (edición 2026: clases de shell y de [control de versiones con Git](https://missing.csail.mit.edu/2026/version-control/)) | Ejercicios de las clases [Course Overview + Introduction to the Shell](https://missing.csail.mit.edu/2026/course-shell/) y Version Control and Git de Missing Semester; crear el repositorio del plan y hacer los primeros commits | 15 |
| 1. Primeros pasos | Variables, tipos, operadores, `input`/`print`, f-strings | [Harvard CS50P](https://cs50.harvard.edu/python/) (semanas 0–1) | [problem sets de CS50P](https://cs50.harvard.edu/python/psets/): Problem Set 0 | 15 |
| 2. Control de flujo | `if`/`elif`, `while`, `for`, `break`/`continue`, `match` | CS50P + [MOOC de Helsinki 2026](https://programming-26.mooc.fi/) (partes 1–2) | CS50P: Problem Sets 1 y 2 + ejercicios de las partes 1–2 del MOOC de Helsinki | 20 |
| 3. Funciones | Parámetros, retorno, scope, argumentos por defecto y nombrados | MOOC de Helsinki (partes 2–3) | Ejercicios de las partes 2–3 del MOOC de Helsinki + labs y homework de CS61A sobre funciones | 20 |
| 4. Colecciones | Listas, tuplas, diccionarios, conjuntos, strings a fondo | MOOC de Helsinki (partes 4–5) | Ejercicios de las partes 4–5 del MOOC de Helsinki + ejercicios de listas, diccionarios, conjuntos y strings de [Exercism, track de Python](https://exercism.org/tracks/python) | 25 |
| 5. Errores y archivos | Excepciones, archivos, CSV, JSON, expresiones regulares (`re`), `logging` | CS50P (semanas 3, 6 y 7) + [Regular Expression HOWTO](https://docs.python.org/3/howto/regex.html) + [Logging HOWTO](https://docs.python.org/3/howto/logging.html) | CS50P: Problem Sets 3, 6 y 7 | 30 |

**Horas de la etapa:** 125.

## Complemento de ciencias de la computación (en paralelo con los niveles 3–7)

Berkeley CS61A es el primer curso de la carrera de computación de Berkeley y está pensado para estudiantes que recién aprenden a programar. Se cursa en paralelo con los niveles 3 a 7: refuerza funciones, recursión y objetos con el enfoque de un curso universitario, y agrega abstracción, funciones de orden superior, listas enlazadas, árboles, iteradores, generadores y la construcción de un intérprete.

| Qué dominar | Fuente principal | Ejercicios | Horas |
| --- | --- | --- | --- |
| Abstracción, funciones de orden superior, recursión, listas enlazadas, árboles, objetos, iteradores, generadores, construir un intérprete | [Berkeley CS61A](https://cs61a.org/) + su libro [Composing Programs](https://www.composingprograms.com/) | Todos los labs, homework y proyectos del curso (incluido el intérprete de Scheme) | 180 |

**Horas:** 180, repartidas entre los niveles 3 y 7.

## Etapa 2 – Programador sólido (niveles 6–10)

Al terminar esta etapa podés construir proyectos medianos, probados, versionados y legibles por otros.

| Nivel | Temas | Fuente principal | Ejercicios | Horas |
| --- | --- | --- | --- | --- |
| 6. Estructuras de datos y pensamiento algorítmico | Estructuras de datos: pilas, colas, listas enlazadas, árboles, tablas hash y heaps (cómo funcionan por dentro y cuándo usar `list`, `collections.deque`, `dict`, `set` y `heapq`); recursión, búsqueda, ordenamiento, complejidad (Big O) | [MIT 6.100L](https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/) (Fall 2022, OCW) + [Tutorial oficial: estructuras de datos](https://docs.python.org/es/3/tutorial/datastructures.html) + documentación de [`collections`](https://docs.python.org/3/library/collections.html) y [`heapq`](https://docs.python.org/3/library/heapq.html) + CS61A (listas enlazadas y árboles) | [problem sets de MIT 6.100L](https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/lists/problem-sets/) y finger exercises + homework de CS61A sobre listas enlazadas y árboles + implementar desde cero, con tests, una pila, una cola, una lista enlazada, un árbol binario de búsqueda, una tabla hash y un heap | 60 |
| 7. Programación orientada a objetos | Clases, herencia, composición, métodos especiales | MIT 6.100L (segunda mitad) + CS50P (semana 8) | Problem sets de la segunda mitad de MIT 6.100L + CS50P: Problem Set 8 | 35 |
| 8. Organización del código y herramientas modernas | Módulos, paquetes, biblioteca estándar, configuración del proyecto con `pyproject.toml`, entornos y dependencias con `uv` (además de `venv` y `pip`), empaquetar y publicar tu propio paquete | [Tutorial oficial: módulos](https://docs.python.org/es/3/tutorial/modules.html) + [Packaging User Guide: Writing your pyproject.toml](https://packaging.python.org/en/latest/guides/writing-pyproject-toml/) + [documentación de uv](https://docs.astral.sh/uv/) (Astral) + clase [Packaging and Shipping Code](https://missing.csail.mit.edu/2026/shipping-code/) de Missing Semester | CS50P: Problem Set 4 (bibliotecas) + ejercicios de Packaging and Shipping Code + publicar tu propio paquete en TestPyPI con `pyproject.toml` y `uv`, siguiendo el tutorial [Packaging Python Projects](https://packaging.python.org/en/latest/tutorials/packaging-projects/) | 30 |
| 9. Calidad | PEP 8, docstrings (PEP 257), linting y formato automático con `ruff`, testing con `unittest` y pytest, debugging con `pdb`, Git a fondo (ramas, merge, rebase, flujo con pull requests) | [PEP 8](https://peps.python.org/pep-0008/) + [documentación de Ruff](https://docs.astral.sh/ruff/) (Astral) + [documentación de pytest](https://docs.pytest.org/) + [MIT Missing Semester](https://missing.csail.mit.edu/2026/) (edición 2026) + [Pro Git](https://git-scm.com/book/es/v2) (libro oficial de Git, en español) | CS50P: Problem Set 5 (unit tests) + ejercicios de las clases Version Control and Git, Debugging and Profiling y [Code Quality](https://missing.csail.mit.edu/2026/code-quality/) de Missing Semester + configurar `ruff` y pytest en un proyecto propio | 40 |
| 10. Diseño de software | Especificaciones, tipos abstractos, invariantes, código mantenible, patrones de diseño | [MIT 6.102 Software Construction](https://web.mit.edu/6.102/www/sp26/) (Spring 2026, en TypeScript; los conceptos aplican a Python) | Problem sets de MIT 6.102 (en TypeScript); después, rehacer uno en Python con type hints | 150 |

**Horas de la etapa:** 315.

## Especialización Web (nivel 13, adelantada)

Es la primera de las cuatro especializaciones del nivel 13 y la única que se cursa antes de la Etapa 3, porque el nivel 14 se apoya en ella. Harvard CS50W es el curso integrador del camino al empleo: Python web con Django, SQL, migraciones, APIs, JavaScript, testing, CI/CD, seguridad y proyecto final.

| Qué dominar | Fuentes oficiales | Ejercicios | Horas |
| --- | --- | --- | --- |
| Backend completo, APIs, y lo básico de HTML, CSS y JavaScript para entender el frontend | [Harvard CS50W](https://cs50.harvard.edu/web/) (Web Programming with Python and JavaScript) + [MDN Web Docs](https://developer.mozilla.org/es/docs/Learn_web_development) | Los [proyectos de CS50W](https://cs50.harvard.edu/web/projects/), incluido el proyecto final | 150 |

**Horas:** 150.

## Nivel 14 – Listo para trabajar

Es la capa práctica que piden los avisos de empleo. Requiere solo la Etapa 1, la Etapa 2 (con CS61A) y la especialización Web; no depende de la Etapa 3, de las matemáticas ni de la IA. Al terminarlo ya podés postularte a puestos junior, y el resto del mapa se sigue estudiando mientras trabajás.

| Tema | Qué aprender | Fuente oficial | Ejercicios o práctica | Horas |
| --- | --- | --- | --- | --- |
| PostgreSQL | Crear tablas, consultas, joins, agregaciones, vistas, claves foráneas, transacciones, funciones de ventana | [Tutorial oficial de PostgreSQL 18](https://www.postgresql.org/docs/current/tutorial.html); después, la Parte II (The SQL Language) | Los ejemplos del tutorial sobre una base propia + 20 consultas escritas por vos sobre los datos del portfolio | 40 |
| PostgreSQL desde Python | Conexiones, consultas parametrizadas (evitan la inyección SQL), transacciones | [Documentación de psycopg 3](https://www.psycopg.org/psycopg3/docs/) | La capa de acceso a datos de la API del portfolio, con tests | 10 |
| Backend con Django | Modelos, ORM, migraciones, vistas, plantillas, panel de administración | [Tutorial oficial de Django 6.1](https://docs.djangoproject.com/en/stable/intro/tutorial01/) (requiere Python 3.12 o superior) | Las 8 partes del tutorial + la aplicación web del portfolio | 30 |
| APIs con FastAPI | Rutas, validación de datos, dependencias, autenticación OAuth2 y JWT, testing | [Tutorial oficial de FastAPI](https://fastapi.tiangolo.com/tutorial/) | El tutorial completo + la API del portfolio | 25 |
| HTTP y APIs REST | Métodos, códigos de estado, headers, cookies, diseño REST | [MDN Web Docs: HTTP](https://developer.mozilla.org/es/docs/Web/HTTP) (Mozilla) | Inspeccionar requests reales con las herramientas de desarrollo del navegador y con `curl` | 10 |
| Datos con pandas | DataFrames, lectura de archivos, filtros, joins, agregaciones, series temporales | [Getting started de pandas 3.0](https://pandas.pydata.org/docs/getting_started/index.html) | El análisis de datos del portfolio | 20 |
| Docker | Contenedores, imágenes, Dockerfile, Docker Compose, persistencia de datos | [Guía oficial de Docker](https://docs.docker.com/get-started/) | Contenerizar la API del portfolio con Docker Compose y PostgreSQL | 15 |
| Seguridad mínima para publicar | Las vulnerabilidades web más comunes y cómo evitarlas antes de poner una aplicación online | [OWASP Top 10:2025](https://owasp.org/Top10/2025/es/) (en español); se profundiza en el track de experto | Revisar los dos proyectos web del portfolio contra el Top 10 | 10 |
| Preparación para entrevistas técnicas | Resolver problemas de algoritmos y estructuras de datos en voz alta y con tiempo limitado, entrevistas conductuales, y diseño de sistemas a nivel junior: explicar y defender la arquitectura de tus proyectos del portfolio | [Stanford CS9 Problem-Solving for the CS Technical Interview](https://web.stanford.edu/class/cs9/) (Spring 2022) + [problem sets de MIT 6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/assignments/) (solo los temas ya vistos: ordenamiento, hashing, árboles, BFS y DFS) | Los problemas de las sesiones de práctica de CS9 + los problem sets de 6.006 indicados, cronometrados; simulacros de entrevista con otra persona | 60 |
| Inglés técnico | Lectura de documentación y entrevistas; apuntar a nivel B2 o más | [British Council LearnEnglish](https://learnenglish.britishcouncil.org/) (recursos gratuitos y test de nivel) | Test de nivel de LearnEnglish; leer en inglés la documentación de todo el nivel | Continuo, fuera del total |

**Horas del nivel:** 340 (220 de temas y 120 del portfolio). Con este nivel llegás al hito de empleo: **1110 h acumuladas**.

**Django o FastAPI:** empezá por uno solo. Django si querés backend web completo; FastAPI si apuntás a APIs y servicios de datos o IA.

**Portfolio mínimo para postularte** (unas 120 h en total):

1. Una API con FastAPI, PostgreSQL y Docker, con tests.
2. Una aplicación web con Django y PostgreSQL, publicada online.
3. Un análisis de datos reales con pandas, documentado en un README.

## Etapa 3 – Python avanzado (niveles 11–13)

Al terminar esta etapa escribís Python idiomático, tipado, concurrente y medido, como lo escribe un profesional.

| Nivel | Temas | Fuente principal | Ejercicios | Horas |
| --- | --- | --- | --- | --- |
| 11. Python idiomático | Comprensiones, iteradores, generadores, decoradores, context managers, `itertools`, `functools` | [Functional Programming HOWTO](https://docs.python.org/3/howto/functional.html) + [Tutorial oficial: clases e iteradores](https://docs.python.org/es/3/tutorial/classes.html) | Labs y homework de CS61A sobre iteradores y generadores, rehechos sin mirar + ejercicios de generadores, decoradores y desempaquetado de [Exercism, track de Python](https://exercism.org/tracks/python) | 40 |
| 12. Avanzado | Type hints y chequeo estático con mypy o Pyright, dataclasses, concurrencia (`threading`, `multiprocessing`, `asyncio`), rendimiento con `timeit`, `tracemalloc` y el nuevo paquete `profiling` (PEP 799, Python 3.15) | Documentación oficial de [`typing`](https://docs.python.org/3/library/typing.html) y [`asyncio`](https://docs.python.org/3/library/asyncio.html) + [documentación de mypy](https://mypy.readthedocs.io/en/stable/) o de [Pyright](https://microsoft.github.io/pyright/) + [What's New in 3.15](https://docs.python.org/3/whatsnew/3.15.html) | Pasar mypy en modo `--strict` (o Pyright en modo estricto) sobre los proyectos de los niveles 8–10; reescribir un descargador secuencial con `threading`, `multiprocessing` y `asyncio`, y comparar las tres versiones con `timeit` y `profiling`; ejercicios de clases y dataclasses de Exercism | 60 |
| 13. Especialización | Cursar más de un dominio: web (ya cursada antes del nivel 14), automatización, datos e IA, una por vez (ver "Especializaciones del nivel 13") | Ver la sección "Especializaciones del nivel 13" | Los de cada especialización (ver "Especializaciones del nivel 13") | Ver especializaciones |

**Horas de la etapa:** 100 (niveles 11–12; las especializaciones se cuentan aparte).

Novedades de Python 3.15 que conviene conocer en esta etapa: imports perezosos con `lazy import` (PEP 810), UTF-8 como codificación por defecto (PEP 686) y el tipo inmutable `frozendict` (PEP 814).

## Track paralelo de matemáticas

Se estudia en paralelo desde la Etapa 3, después del hito de empleo; sin él, el bloque A, la especialización de datos y el camino a IA se traban.

| Orden | Materia | Cuándo empezar | Fuente | Ejercicios | Horas |
| --- | --- | --- | --- | --- | --- |
| 1 | Matemática discreta (lógica, demostraciones, grafos, conteo) | Con el nivel 11 | [MIT 6.1200J Mathematics for Computer Science](https://ocw.mit.edu/courses/6-1200j-mathematics-for-computer-science-spring-2024/) (Spring 2024; antes se llamaba 6.042J) | Problem sets del curso (OCW) | 170 |
| 2 | Cálculo de una variable | Con el nivel 12 | [MIT 18.01SC Single Variable Calculus](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/) | Problem sets y exámenes del curso (formato OCW Scholar) | 150 |
| 3 | Álgebra lineal | Después de 18.01SC | [MIT 18.06SC Linear Algebra](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/) (Gilbert Strang) | Problem sets y exámenes del curso (formato OCW Scholar) | 150 |
| 4 | Probabilidad | Antes de la especialización de datos | [Harvard Stat 110](https://stat110.hsites.harvard.edu/) (Joe Blitzstein) | Strategic practice y homework del curso | 150 |
| 5 | Cálculo multivariable (gradientes) | Antes de la especialización de IA | [MIT 18.02SC Multivariable Calculus](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/) | Problem sets y exámenes del curso (formato OCW Scholar) | 150 |

**Horas del track:** 770.

## Track paralelo de sistemas

Se estudia en paralelo desde la Etapa 3. Es lo que convierte a un programador de Python en alguien que entiende la máquina, la red y los datos sobre los que corre su código.

| Orden | Materia | Cuándo empezar | Fuente | Ejercicios | Horas |
| --- | --- | --- | --- | --- | --- |
| 1 | Bases de datos: teoría (modelado, índices, transacciones, cómo funciona un motor por dentro) | Con el nivel 11; la práctica con PostgreSQL ya se hizo en el nivel 14 | [CMU 15-445 Database Systems](https://15445.courses.cs.cmu.edu/) (Fall 2026) + [documentación de `sqlite3`](https://docs.python.org/3/library/sqlite3.html) + [documentación de PostgreSQL 18](https://www.postgresql.org/docs/current/) | Proyectos de programación del curso | 170 |
| 2 | Sistemas operativos: procesos, hilos, memoria virtual, concurrencia | Con el nivel 12, antes del bloque C | [OSTEP](https://research.cs.wisc.edu/wind/OSTEP/), libro gratuito de la Universidad de Wisconsin; más profundo: [MIT 6.1810](https://pdos.csail.mit.edu/6.1810/) (en C) | Homework de cada capítulo de OSTEP (simuladores y código); con 6.1810, sus labs | 120 (más 180 si sumás MIT 6.1810) |
| 3 | Redes: TCP/IP, HTTP, sockets | Con el nivel 13 | [Stanford CS144](https://cs144.github.io/) (Fall 2026) + [documentación de `socket`](https://docs.python.org/3/library/socket.html) | Labs del curso | 170 |
| 4 | Seguridad: vulnerabilidades, aislamiento, criptografía aplicada | Después del nivel 14; el mínimo para publicar ya está en ese nivel | [MIT 6.5660 Computer Systems Security](https://ocw.mit.edu/courses/6-5660-computer-systems-security-spring-2024/) (Spring 2024) + [Security Considerations de Python](https://docs.python.org/3/library/security_warnings.html) | Labs del curso | 170 |

**Horas del track:** 630 (sin MIT 6.1810).

## Lenguajes de sistemas: C y Rust

C es el lenguaje en el que está escrito CPython; Rust es el lenguaje con el que hoy se construyen muchas herramientas del ecosistema Python, como el núcleo de Pydantic. Dominar los dos te permite leer el intérprete y escribir extensiones rápidas para Python.

| Orden | Qué dominar | Cuándo empezar | Fuente oficial | Ejercicios | Horas |
| --- | --- | --- | --- | --- | --- |
| 1. C fundamentos | Tipos, punteros, arrays, strings, memoria dinámica, compilación | Con el nivel 11 | [Harvard CS50x](https://cs50.harvard.edu/x/) (semanas en C) + el libro [Modern C, 3.ª edición](https://www.manning.com/books/modern-c-third-edition) de Jens Gustedt, investigador del Inria (pago), para C moderno a fondo | [Problem sets de CS50x](https://cs50.harvard.edu/x/psets/) en C | 100 |
| 2. C y la máquina | Representación de datos, ensamblador x86-64, jerarquía de memoria y caché, enlazado, procesos, memoria virtual, concurrencia | Con el track de sistemas operativos, antes del bloque C | [CMU 15-213 Introduction to Computer Systems](https://www.cs.cmu.edu/~213/) (Spring 2026) + su libro [CS:APP](https://csapp.cs.cmu.edu/) | Labs del curso | 200 |
| 3. C aplicado a Python | Escribir extensiones de Python en C con la C API | Durante el bloque C | [Extending and Embedding the Python Interpreter](https://docs.python.org/3/extending/index.html) + [Python/C API Reference](https://docs.python.org/3/c-api/index.html) | Escribir en C una extensión con al menos una función y un tipo propio, con tests en Python | 40 |
| 4. Rust fundamentos | Ownership, préstamos (borrowing), lifetimes, traits, manejo de errores, Cargo | Después de CMU 15-213 | [The Rust Programming Language](https://doc.rust-lang.org/book/) (libro oficial) + [Rust by Example](https://doc.rust-lang.org/rust-by-example/) | [Rustlings](https://rustlings.rust-lang.org/) (ejercicios oficiales del proyecto Rust) + los ejemplos de Rust by Example | 80 |
| 5. Rust en sistemas | Por qué Rust evita los errores de memoria de C, concurrencia segura | Después del libro oficial | [Stanford CS110L Safety in Systems Programming](https://web.stanford.edu/class/cs110l/) | Assignments del curso | 100 |
| 6. Rust experto y Python | Código `unsafe`, modelo de memoria; extensiones de Python escritas en Rust | Al final del bloque C | [The Rustonomicon](https://doc.rust-lang.org/nomicon/) + [guía de PyO3](https://pyo3.rs/) + [documentación de maturin](https://www.maturin.rs/) | El proyecto de esta sección | 60 |

**Horas del track:** 620, incluidas 40 del proyecto de abajo.

Proyecto que lo demuestra: el mismo módulo lento de Python reescrito como extensión en C y en Rust, con mediciones de rendimiento de las tres versiones.

## Especializaciones del nivel 13

Se cursan las cuatro, una por vez y en este orden. La web va primero y se adelanta antes del nivel 14; automatización y datos van después de la Etapa 3, y la IA va al final porque necesita el track de matemáticas completo.

| Orden | Especialización | Qué dominar | Fuentes oficiales | Dónde se profundiza en este plan | Ejercicios | Horas |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Web | Ver la sección "Especialización Web (nivel 13, adelantada)" | Harvard CS50W + MDN Web Docs (detalle en esa sección) | Nivel 14 y todo el track de experto | Los proyectos de CS50W | 150 (ya contadas antes del nivel 14) |
| 2 | Automatización | Scripts de archivos y procesos (`pathlib`, `shutil`, `subprocess`, `argparse`), automatizar navegadores, tareas programadas, automatizar servidores | [Biblioteca estándar de Python](https://docs.python.org/3/library/index.html) + [Playwright para Python](https://playwright.dev/python/) (Microsoft) + [documentación de Ansible](https://docs.ansible.com/) (Red Hat) | Track de experto: Celery para tareas programadas, GitHub Actions y Terraform | Automatizar tres tareas reales tuyas: un script de archivos con `argparse`, una prueba de navegador con Playwright y un playbook de Ansible sobre una máquina virtual | 50 |
| 3 | Datos | Análisis con pandas y SQL, visualización, inferencia, pipelines de datos programados | [Berkeley Data 100](https://ds100.org/) (Principles and Techniques of Data Science, edición Fall 2026) + [documentación de Matplotlib](https://matplotlib.org/stable/) + [documentación de Apache Airflow 3](https://airflow.apache.org/docs/) | Track de sistemas (bases de datos), PostgreSQL del nivel 14, Harvard Stat 110 | Homework y labs de Data 100 | 200 |
| 4 | IA | Machine learning clásico (regresión, clasificación, evaluación de modelos) antes del deep learning | [Stanford CS229 Machine Learning](https://cs229.stanford.edu/) + [documentación de scikit-learn](https://scikit-learn.org/stable/) | Sección "Camino a IA y proyecto final" | Problem sets de CS229 | 220 |

**Horas de las especializaciones restantes:** 470 (automatización, datos e IA).

Con las cuatro, tu perfil queda así: experto en Python y backend, con competencia real en datos, automatización e IA.

## Track de experto: backend, infraestructura y cloud

Este track lleva al nivel experto lo que el nivel 14 deja en introductorio. Empieza después del nivel 14 y corre en paralelo con la Etapa 3 y la Etapa 4; cada área tiene tres escalones, y se considera dominada cuando tenés un proyecto que demuestre el último.

Ejercicios: en cada escalón, el proyecto que lo demuestra; las fuentes universitarias (CS144, CS253, 6.033, 6.5840) traen además sus propios labs y problem sets.

**Horas del track:** 1545, incluidas las 150 del proyecto integrador.

Regla de calidad: en cada área la fuente final es la especificación o el código fuente, no un tutorial. Un experto lee el RFC, el PEP o el código de Django, no un resumen de otro.

### Django

| Escalón | Qué dominar | Fuente oficial | Horas |
| --- | --- | --- | --- |
| Sólido | ORM a fondo (consultas complejas, agregaciones, `select_related`, `prefetch_related`), formularios, autenticación y permisos, tests | [Guías temáticas de Django](https://docs.djangoproject.com/en/stable/topics/) | 40 |
| Avanzado | Optimización de consultas, caché, vistas asíncronas, señales, middleware propio, tareas en segundo plano | [Database access optimization](https://docs.djangoproject.com/en/stable/topics/db/optimization/) + [Async support](https://docs.djangoproject.com/en/stable/topics/async/) | 40 |
| Experto | Seguridad y despliegue en producción, cómo funciona el ORM por dentro, contribuir al proyecto | [Security in Django](https://docs.djangoproject.com/en/stable/topics/security/) + [Deployment checklist](https://docs.djangoproject.com/en/stable/howto/deployment/checklist/) + [Contributing to Django](https://docs.djangoproject.com/en/stable/internals/contributing/) + [Django Enhancement Proposals](https://github.com/django/deps) | 50 |

### FastAPI

| Escalón | Qué dominar | Fuente oficial | Horas |
| --- | --- | --- | --- |
| Sólido | Inyección de dependencias, modelos de validación, manejo de errores, testing | [Tutorial de FastAPI](https://fastapi.tiangolo.com/tutorial/) completo | 30 |
| Avanzado | WebSockets, eventos de ciclo de vida, configuración por entorno, observabilidad con OpenTelemetry | [Advanced User Guide de FastAPI](https://fastapi.tiangolo.com/advanced/) | 30 |
| Experto | Las capas debajo de FastAPI: Pydantic (validación), Starlette (framework) y la especificación ASGI (cómo un servidor habla con la aplicación); `asyncio` a fondo | [Documentación de Pydantic](https://docs.pydantic.dev/) + [especificación ASGI](https://asgi.readthedocs.io/) + [documentación de `asyncio`](https://docs.python.org/3/library/asyncio.html) | 40 |

### Docker y Kubernetes

| Escalón | Qué dominar | Fuente oficial | Horas |
| --- | --- | --- | --- |
| Sólido | Dockerfiles eficientes, builds multi-etapa, caché de capas, Docker Compose, volúmenes y redes | [Documentación de Docker](https://docs.docker.com/) (manuales de Build y Compose) | 25 |
| Avanzado | Cómo funciona un contenedor por dentro: namespaces y cgroups de Linux, el estándar de imágenes OCI, seguridad de imágenes | [Linux namespaces](https://man7.org/linux/man-pages/man7/namespaces.7.html) + [Open Container Initiative](https://opencontainers.org/) + track de sistemas operativos (OSTEP) | 35 |
| Experto | Orquestación con Kubernetes: pods, deployments, servicios, escalado, configuración y secretos | [Documentación de Kubernetes](https://kubernetes.io/docs/home/) + certificación [CKA](https://www.cncf.io/training/certification/cka/) de la CNCF (paga) | 70 |

### Redes, HTTP y HTTPS

| Escalón | Qué dominar | Fuente oficial | Horas |
| --- | --- | --- | --- |
| Sólido | Modelo de capas, TCP, UDP, DNS, sockets en Python | [Stanford CS144](https://cs144.github.io/) + [documentación de `socket`](https://docs.python.org/3/library/socket.html) | 20 (CS144 se cuenta en el track de sistemas) |
| Avanzado | HTTP a nivel de especificación: métodos, semántica, caché, HTTP/2 y HTTP/3 sobre QUIC | RFCs del IETF: [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110) (semántica HTTP), [RFC 9111](https://www.rfc-editor.org/rfc/rfc9111) (caché), [RFC 9113](https://www.rfc-editor.org/rfc/rfc9113) (HTTP/2), [RFC 9114](https://www.rfc-editor.org/rfc/rfc9114) (HTTP/3), [RFC 9000](https://www.rfc-editor.org/rfc/rfc9000) (QUIC) | 40 |
| Experto | HTTPS por dentro: TLS 1.3, certificados, cadena de confianza, configuración segura de servidores | [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446) (TLS 1.3) + [documentación de Let's Encrypt](https://letsencrypt.org/docs/) + [documentación de `ssl`](https://docs.python.org/3/library/ssl.html) | 30 |

### Seguridad

| Escalón | Qué dominar | Fuente oficial | Horas |
| --- | --- | --- | --- |
| Sólido | Las 10 vulnerabilidades web más críticas a fondo (la primera lectura es del nivel 14) y cómo prevenirlas en Django y FastAPI | [OWASP Top 10:2025](https://owasp.org/Top10/2025/es/) (en español) + [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) | 25 |
| Avanzado | Seguridad web a fondo: política de mismo origen, CORS, CSP, cookies, sesiones, ataques de navegador | [Stanford CS253 Web Security](https://web.stanford.edu/class/cs253/) + [MIT 6.5660](https://ocw.mit.edu/courses/6-5660-computer-systems-security-spring-2024/) (ya en el track de sistemas) | 60 (MIT 6.5660 se cuenta en el track de sistemas) |
| Experto | Criptografía formal (cifrado, MAC, intercambio de claves) y verificación de seguridad de aplicaciones con un estándar | [Cryptography I de Stanford](https://www.coursera.org/learn/crypto) (Dan Boneh, gratis en modo oyente) + [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) | 80 |

### APIs

| Escalón | Qué dominar | Fuente oficial | Horas |
| --- | --- | --- | --- |
| Sólido | Diseño REST desde su origen, contratos con OpenAPI, errores estándar | [Tesis de Roy Fielding](https://ics.uci.edu/~fielding/pubs/dissertation/top.htm) (UC Irvine, 2000; donde nació REST) + [OpenAPI 3.2](https://spec.openapis.org/oas/v3.2) + [RFC 9457](https://www.rfc-editor.org/rfc/rfc9457) (errores en APIs) | 30 |
| Avanzado | Autenticación y autorización: OAuth 2.0, OpenID Connect, JWT, y las buenas prácticas de seguridad vigentes | [RFC 6749](https://www.rfc-editor.org/rfc/rfc6749) (OAuth 2.0) + [RFC 9700](https://www.rfc-editor.org/rfc/rfc9700) (seguridad en OAuth) + [RFC 7519](https://www.rfc-editor.org/rfc/rfc7519) (JWT) + [OpenID Connect](https://openid.net/developers/how-connect-works/) | 40 |
| Experto | Otros estilos y cuándo usar cada uno: gRPC y GraphQL; versionado, paginación y límites de uso | [Documentación de gRPC](https://grpc.io/docs/) + [especificación de GraphQL](https://spec.graphql.org/) | 30 |

OAuth 2.1, que unifica OAuth 2.0 con esas buenas prácticas, todavía es un [borrador del IETF](https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/); conviene seguirlo hasta que se publique.

### Cloud

| Escalón | Qué dominar | Fuente oficial | Horas |
| --- | --- | --- | --- |
| Sólido | Un proveedor a fondo: cómputo, almacenamiento, bases de datos gestionadas, redes virtuales, permisos (IAM), costos | [AWS Skill Builder](https://skillbuilder.aws/) + certificación [AWS Solutions Architect – Associate](https://aws.amazon.com/certification/certified-solutions-architect-associate/) (paga). Alternativas equivalentes: [Google Cloud Skills Boost](https://www.cloudskillsboost.google/) o [Microsoft Learn para Azure](https://learn.microsoft.com/training/azure/) | 80 |
| Avanzado | Infraestructura como código y entrega continua: definir la infraestructura en archivos versionados y desplegar automáticamente | [Documentación de Terraform](https://developer.hashicorp.com/terraform/docs) + [documentación de GitHub Actions](https://docs.github.com/actions) | 50 |
| Experto | Sistemas distribuidos (consenso, replicación, tolerancia a fallos) y confiabilidad en producción (monitoreo, SLOs, gestión de incidentes) | [MIT 6.5840 Distributed Systems](https://pdos.csail.mit.edu/6.824/) (laboratorios en Go) + [libros de SRE de Google](https://sre.google/books/), gratuitos online | 210 (incluye MIT 6.5840 completo) |

Elegí un solo proveedor al principio: los conceptos se transfieren y lo que cambia entre AWS, Google Cloud y Azure son los nombres de los servicios.

### Caché y colas de mensajes

| Escalón | Qué dominar | Fuente oficial | Horas |
| --- | --- | --- | --- |
| Sólido | Caché en la aplicación y con Redis: estructuras de datos, expiración, invalidación, patrones cache-aside y write-through | [Documentación de Redis](https://redis.io/docs/latest/) + [framework de caché de Django](https://docs.djangoproject.com/en/stable/topics/cache/) + [`functools.lru_cache`](https://docs.python.org/3/library/functools.html) | 30 |
| Avanzado | Tareas en segundo plano y colas: workers, reintentos, tareas programadas, idempotencia, colas de mensajes con RabbitMQ | [Documentación de Celery](https://docs.celeryq.dev/) + [documentación de RabbitMQ](https://www.rabbitmq.com/docs) | 40 |
| Experto | Streaming de eventos: logs distribuidos, particiones, grupos de consumidores, garantías de entrega (al menos una vez, exactamente una vez) | [Documentación de Apache Kafka](https://kafka.apache.org/documentation/) + [MIT 6.5840](https://pdos.csail.mit.edu/6.824/) (replicación y consenso, la teoría detrás) | 40 (MIT 6.5840 ya se contó en Cloud) |

### Diseño de sistemas

| Escalón | Qué dominar | Fuente oficial | Horas |
| --- | --- | --- | --- |
| Sólido | Principios de diseño: modularidad, abstracción, nombres, capas, tolerancia a fallos, trade-offs | [MIT 6.033 Computer System Engineering](https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/) (Spring 2018, OCW) | 150 |
| Avanzado | Arquitecturas en la nube: escalado horizontal, balanceo de carga, replicación de bases de datos, particionado, confiabilidad, costos | [AWS Well-Architected Framework](https://wa.aws.amazon.com/index.es.html) (en español) + [libros de SRE de Google](https://sre.google/books/) | 40 |
| Experto | Sistemas distribuidos a fondo: consistencia, consenso, transacciones distribuidas; diseñar y defender un sistema completo ante otros | [MIT 6.5840 Distributed Systems](https://pdos.csail.mit.edu/6.824/) + papers clásicos que el curso asigna (MapReduce, Raft, Spanner) | 40 (MIT 6.5840 ya se contó en Cloud) |

El diseño de sistemas es el tema central de las entrevistas técnicas de nivel senior: practicalo dibujando arquitecturas y justificando cada decisión en voz alta.

### Proyecto de experto que integra todo

Unas 150 h. Una API en FastAPI o Django con PostgreSQL, caché en Redis, tareas en segundo plano con Celery, autenticación OAuth 2.0, HTTPS, tests y documentación OpenAPI; empaquetada con Docker, desplegada en Kubernetes sobre un proveedor cloud con Terraform, con despliegue automático, monitoreo y una auditoría propia contra OWASP ASVS.

## Etapa 4 – Intelectual de Python (bloques A–D)

Acá se pasa de usar Python a entender por qué funciona como funciona. La meta final es poder participar en el debate de un PEP o contribuir a CPython.

| Bloque | Temas | Fuente principal | Ejercicios | Horas |
| --- | --- | --- | --- | --- |
| A. Algoritmos formales | Algoritmos y estructuras de datos con análisis formal: hashing, árboles balanceados, heaps, grafos, caminos mínimos, programación dinámica, demostraciones de correctitud y de complejidad | [MIT 6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) (Spring 2020, en Python) | Problem sets del curso (los mismos que se empezaron en el nivel 14, ahora completos) | 170 |
| B. El lenguaje a fondo | Modelo de datos, identidad vs. igualdad, descriptores, `__slots__`, metaclases, sistema de imports | [The Python Language Reference](https://docs.python.org/3/reference/) + [Descriptor HowTo Guide](https://docs.python.org/3/howto/descriptor.html) | Reimplementar en Python puro `property`, `classmethod` y `staticmethod` y compararlos con los equivalentes de la Descriptor HowTo Guide; escribir una metaclase de registro de plugins | 60 |
| C. CPython por dentro | Bytecode (`dis`), conteo de referencias y recolector de basura, el GIL y el build sin GIL (PEP 703), el compilador JIT, la C API | [Python Developer's Guide](https://devguide.python.org/) + [InternalDocs de CPython](https://github.com/python/cpython/tree/main/InternalDocs) + código fuente de CPython | Compilar CPython y correr su suite de tests; desensamblar funciones propias con `dis`; resolver un issue marcado para principiantes | 120 |
| D. Diseño e historia | PEPs clave: 8, 20, 484, 572, 634, 703 y 810; por qué se aceptaron o rechazaron | [peps.python.org](https://peps.python.org/) + [discuss.python.org](https://discuss.python.org/) | Escribir un análisis de un PEP aceptado y uno rechazado, con los argumentos de la discusión original | 40 |

**Horas de la etapa:** 390.

El bloque A requiere matemática discreta (MIT 6.1200J). El bloque C requiere el track de sistemas operativos: sin procesos, hilos y memoria, el GIL no se entiende de verdad.

## Camino a IA y proyecto final

El proyecto final es construir un modelo de lenguaje pequeño desde cero; requiere haber terminado la Etapa 3 y el track de matemáticas. Ejercicios: los labs de MIT 6.S191, los tutoriales de NumPy y PyTorch reproducidos sin mirar, y los assignments de CS231n, CS224n y CS336.

1. **Cálculo numérico:** arrays, vectorización y broadcasting con NumPy. Fuente: [documentación oficial de NumPy](https://numpy.org/doc/stable/). 20 h.
2. **Fundamentos de deep learning:** redes neuronales, retropropagación, entrenamiento. Fuente: [MIT 6.S191 Introduction to Deep Learning](https://introtodeeplearning.com/). 40 h.
3. **PyTorch:** tensores, autograd, ciclo de entrenamiento. Fuente: [tutoriales oficiales de PyTorch](https://docs.pytorch.org/tutorials/). 30 h.
4. **Visión por computadora y redes profundas:** [Stanford CS231n](https://cs231n.stanford.edu/). 150 h.
5. **Lenguaje natural y transformers:** [Stanford CS224n](https://web.stanford.edu/class/cs224n/). 150 h.
6. **Proyecto final, un LLM desde cero:** tokenización, arquitectura transformer, entrenamiento, inferencia. Fuente: [Stanford CS336 Language Modeling from Scratch](https://cs336.stanford.edu/) (Spring 2026). 200 h.

**Horas del camino:** 590.

## Práctica continua

Ningún curso reemplaza estas cuatro prácticas, que se sostienen durante todo el camino.

- **Leer código de calidad:** la biblioteca estándar de CPython (carpeta `Lib/`) es el mejor material; empezá por módulos chicos como `bisect`, `heapq` o `functools`.
- **Proyectos propios:** uno por nivel, guardado en la carpeta `proyecto/` de ese nivel.
- **Enseñar:** explicar cada tema por escrito, como si fuera para otra persona, revela lo que no entendiste.
- **Contribuir:** a partir del bloque C, buscar issues marcados para principiantes en CPython siguiendo la [Python Developer's Guide](https://devguide.python.org/).

## Fuentes verificadas y licencias

Todas las fuentes son gratuitas salvo las indicadas como pagas. La licencia importa si algún día usás el material para algo comercial, como entrenar un modelo que vendas.

| Institución | Material | Última edición verificada | Licencia |
| --- | --- | --- | --- |
| Python Software Foundation | Documentación, PEPs, Developer's Guide, CPython, C API | Python 3.15 | PSF License (permisiva) |
| Harvard | CS50x, CS50P, CS50W, Stat 110 | Vigentes en 2026 | CS50: Creative Commons no comercial; Stat 110: revisar en el sitio |
| Universidad de Helsinki | Python Programming MOOC | Edición 2026 | Creative Commons no comercial |
| MIT | 6.100L, 6.006, 6.1200J, 18.01SC, 18.02SC, 18.06SC, 6.033, 6.5660, 6.1810, 6.5840, 6.102, 6.S191, Missing Semester | Ver año en cada tabla; Missing Semester edición 2026 | OCW: Creative Commons no comercial; el resto, revisar en cada sitio |
| UC Berkeley | CS61A, Composing Programs, Data 100 | Data 100 Fall 2026 | Composing Programs: Creative Commons BY-SA; Data 100: revisar en el sitio |
| Stanford | CS9, CS110L, CS144, CS229, CS253, CS231n, CS224n, CS336, Cryptography I | CS9 Spring 2022, CS144 Fall 2026, CS336 Spring 2026 | Revisar en cada sitio |
| Carnegie Mellon | 15-213 Introduction to Computer Systems, 15-445 Database Systems | 15-213 Spring 2026, 15-445 Fall 2026 | Revisar en cada sitio; el libro CS:APP es pago (igual que Modern C, de Jens Gustedt, Inria) |
| Universidad de Wisconsin | OSTEP | Vigente | Gratuito para leer online |
| UC Irvine | Tesis de Roy Fielding (REST) | 2000, texto canónico | Lectura libre online |
| IETF | RFCs de HTTP, QUIC, TLS, OAuth, JWT y errores en APIs | Vigentes; OAuth 2.1 aún en borrador | Uso libre |
| OWASP Foundation | Top 10:2025, ASVS, Cheat Sheet Series | Top 10 edición 2025 | Creative Commons BY-SA |
| Linux Foundation y CNCF | OpenAPI 3.2, OCI, Kubernetes, gRPC, GraphQL, certificación CKA | OpenAPI 3.2 | Especificaciones abiertas; certificación paga |
| Apache Software Foundation | Kafka, Airflow 3 | Vigentes | Apache License 2.0 (permisiva) |
| Proyecto Git | Pro Git (libro oficial, en español) | 2.ª edición | Creative Commons BY-NC-SA 3.0 |
| Proyecto Rust | The Rust Programming Language, Rust by Example, The Rustonomicon, Rustlings | Vigentes | MIT o Apache 2.0 (permisivas) |
| AWS, Google Cloud, Microsoft | Skill Builder, Well-Architected Framework, Cloud Skills Boost, Microsoft Learn, Playwright | Vigentes | Formación gratuita; certificaciones pagas |
| Google | Libros de SRE | Vigentes | Lectura gratuita online |
| PostgreSQL Global Development Group | Documentación de PostgreSQL | PostgreSQL 18 | PostgreSQL License (permisiva) |
| Django Software Foundation | Documentación de Django y DEPs | Django 6.1 | BSD (permisiva) |
| Proyectos oficiales | Documentación de pytest, mypy, Pyright, Ruff, uv, psycopg 3, FastAPI, Pydantic, ASGI, pandas 3.0, NumPy, Matplotlib, scikit-learn, PyTorch, Redis, Celery, RabbitMQ, Ansible, Docker, Terraform, GitHub Actions, PyO3 y maturin | Verificadas el 11/10/2026 | Revisar en cada sitio |
| Exercism (organización sin fines de lucro) | Track de Python | Vigente | Plataforma gratuita; revisar la licencia de los ejercicios en su repositorio |
| Mozilla y British Council | MDN Web Docs, LearnEnglish | Vigentes | MDN: Creative Commons BY-SA; LearnEnglish: recursos gratuitos, cursos pagos aparte |

Nota: los cursos sin licencia abierta explícita se pueden estudiar libremente, pero no conviene copiar su material a un dataset.
