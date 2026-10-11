# Mapa para dominar Python

Actualizado: 11 de octubre de 2026

## Cómo usar este mapa

El camino tiene 4 etapas en secuencia (niveles 0 a 13 y bloques A a D), un nivel 14 orientado al empleo, un track de experto en backend, infraestructura y cloud, y 2 tracks paralelos (matemáticas y sistemas) que se estudian al mismo tiempo desde la Etapa 2. Todas las fuentes son de universidades, de fundaciones y organismos de estándares (PSF, IETF, OWASP, CNCF) o la documentación oficial de cada tecnología, y se verificaron el 11 de octubre de 2026.

- **Versión de referencia:** Python 3.15, la última estable ([What's New in 3.15](https://docs.python.org/3/whatsnew/3.15.html)).
- **Regla de avance:** no pasar de nivel hasta resolver los ejercicios del nivel sin mirar la teoría.
- **Estructura de carpetas:** una carpeta por nivel, cada una con `teoria/`, `ejercicios/` y `proyecto/`.
- **Proporción sugerida:** 30% leer o ver clases, 70% escribir código.

Para marcar tu avance tema por tema: [TRACKER.md](TRACKER.md)

## Etapa 1 – Fundamentos (niveles 0–5)

Al terminar esta etapa podés escribir scripts completos que leen datos, los procesan y manejan errores.

| Nivel | Temas | Fuente principal |
| --- | --- | --- |
| 0. Preparación | Instalación, terminal, intérprete, editor, `venv`, `pip` | [Tutorial oficial en español](https://docs.python.org/es/3/tutorial/) + [Python Packaging User Guide](https://packaging.python.org/) |
| 1. Primeros pasos | Variables, tipos, operadores, `input`/`print`, f-strings | [Harvard CS50P](https://cs50.harvard.edu/python/) (semanas 0–1) |
| 2. Control de flujo | `if`/`elif`, `while`, `for`, `break`/`continue`, `match` | CS50P + [MOOC de Helsinki 2026](https://programming-26.mooc.fi/) (partes 1–2) |
| 3. Funciones | Parámetros, retorno, scope, argumentos por defecto y nombrados | MOOC de Helsinki (partes 2–3) |
| 4. Colecciones | Listas, tuplas, diccionarios, conjuntos, strings a fondo | MOOC de Helsinki (partes 4–5) |
| 5. Errores y archivos | Excepciones, archivos, CSV, JSON, expresiones regulares (`re`), `logging` | CS50P (semanas 3, 6 y 7) + [Regular Expression HOWTO](https://docs.python.org/3/howto/regex.html) + [Logging HOWTO](https://docs.python.org/3/howto/logging.html) |

## Etapa 2 – Programador sólido (niveles 6–10)

Al terminar esta etapa podés construir proyectos medianos, probados, versionados y legibles por otros.

| Nivel | Temas | Fuente principal |
| --- | --- | --- |
| 6. Pensamiento algorítmico | Recursión, búsqueda, ordenamiento, complejidad (Big O) | [MIT 6.100L](https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/) (Fall 2022, OCW) |
| 7. Programación orientada a objetos | Clases, herencia, composición, métodos especiales | MIT 6.100L (segunda mitad) + CS50P (semana 8) |
| 8. Organización del código | Módulos, paquetes, biblioteca estándar, empaquetar y publicar tu propio paquete | [Tutorial oficial: módulos](https://docs.python.org/es/3/tutorial/modules.html) + [Packaging User Guide](https://packaging.python.org/) |
| 9. Calidad | PEP 8, docstrings (PEP 257), testing con `unittest` y pytest, debugging con `pdb`, Git | [PEP 8](https://peps.python.org/pep-0008/) + [MIT Missing Semester](https://missing.csail.mit.edu/) (edición 2026) |
| 10. Diseño de software | Especificaciones, tipos abstractos, invariantes, código mantenible, patrones de diseño | [MIT 6.102 Software Construction](https://web.mit.edu/6.102/www/sp26/) (Spring 2026, en TypeScript; los conceptos aplican a Python) |

## Etapa 3 – Python avanzado (niveles 11–13)

Al terminar esta etapa escribís Python idiomático, tipado, concurrente y medido, como lo escribe un profesional.

| Nivel | Temas | Fuente principal |
| --- | --- | --- |
| 11. Python idiomático | Comprensiones, iteradores, generadores, decoradores, context managers, `itertools`, `functools` | [Functional Programming HOWTO](https://docs.python.org/3/howto/functional.html) + [Tutorial oficial: clases e iteradores](https://docs.python.org/es/3/tutorial/classes.html) |
| 12. Avanzado | Type hints, dataclasses, concurrencia (`threading`, `multiprocessing`, `asyncio`), rendimiento con `timeit`, `tracemalloc` y el nuevo paquete `profiling` (PEP 799, Python 3.15) | Documentación oficial de [`typing`](https://docs.python.org/3/library/typing.html) y [`asyncio`](https://docs.python.org/3/library/asyncio.html) + [What's New in 3.15](https://docs.python.org/3/whatsnew/3.15.html) |
| 13. Especialización | Cursar más de un dominio: automatización, web, datos e IA, una por vez (ver "Especializaciones del nivel 13") | Ver la sección "Especializaciones del nivel 13" |

Novedades de Python 3.15 que conviene conocer en esta etapa: imports perezosos con `lazy import` (PEP 810), UTF-8 como codificación por defecto (PEP 686) y el tipo inmutable `frozendict` (PEP 814).

## Especializaciones del nivel 13

Se cursan las cuatro, una por vez y en este orden: cada una se apoya en la anterior, y la IA va al final porque necesita el track de matemáticas completo.

| Orden | Especialización | Qué dominar | Fuentes oficiales | Dónde se profundiza en este plan |
| --- | --- | --- | --- | --- |
| 1 | Automatización | Scripts de archivos y procesos (`pathlib`, `shutil`, `subprocess`, `argparse`), automatizar navegadores, tareas programadas, automatizar servidores | [Biblioteca estándar de Python](https://docs.python.org/3/library/index.html) + [Playwright para Python](https://playwright.dev/python/) (Microsoft) + [documentación de Ansible](https://docs.ansible.com/) (Red Hat) | Track de experto: Celery para tareas programadas, GitHub Actions y Terraform |
| 2 | Web | Backend completo, APIs, y lo básico de HTML, CSS y JavaScript para entender el frontend | [Harvard CS50W](https://cs50.harvard.edu/web/) + [MDN Web Docs](https://developer.mozilla.org/es/docs/Learn_web_development) | Nivel 14 y todo el track de experto |
| 3 | Datos | Análisis con pandas y SQL, visualización, inferencia, pipelines de datos programados | [Berkeley Data 100](https://ds100.org/) (Principles and Techniques of Data Science, edición Fall 2026) + [documentación de Matplotlib](https://matplotlib.org/stable/) + [documentación de Apache Airflow 3](https://airflow.apache.org/docs/) | Track de sistemas (bases de datos), PostgreSQL del nivel 14, Harvard Stat 110 |
| 4 | IA | Machine learning clásico (regresión, clasificación, evaluación de modelos) antes del deep learning | [Stanford CS229 Machine Learning](https://cs229.stanford.edu/) + [documentación de scikit-learn](https://scikit-learn.org/stable/) | Sección "Camino a IA y proyecto final" |

Con las cuatro, tu perfil queda así: experto en Python y backend, con competencia real en datos, automatización e IA.

## Nivel 14 – Listo para trabajar

Es la capa práctica que piden los avisos de empleo. Se hace en paralelo con la Etapa 3, y al terminarla ya podés postularte a puestos junior.

| Tema | Qué aprender | Fuente oficial |
| --- | --- | --- |
| Curso integrador | Python web, Django, SQL, migraciones, APIs, testing, CI/CD, seguridad y proyecto final | [Harvard CS50W](https://cs50.harvard.edu/web/) (Web Programming with Python and JavaScript) |
| PostgreSQL | Crear tablas, consultas, joins, agregaciones, vistas, claves foráneas, transacciones, funciones de ventana | [Tutorial oficial de PostgreSQL 18](https://www.postgresql.org/docs/current/tutorial.html); después, la Parte II (The SQL Language) |
| PostgreSQL desde Python | Conexiones, consultas parametrizadas (evitan la inyección SQL), transacciones | [Documentación de psycopg 3](https://www.psycopg.org/psycopg3/docs/) |
| Backend con Django | Modelos, ORM, migraciones, vistas, plantillas, panel de administración | [Tutorial oficial de Django 6.1](https://docs.djangoproject.com/en/stable/intro/tutorial01/) (requiere Python 3.12 o superior) |
| APIs con FastAPI | Rutas, validación de datos, dependencias, autenticación OAuth2 y JWT, testing | [Tutorial oficial de FastAPI](https://fastapi.tiangolo.com/tutorial/) |
| HTTP y APIs REST | Métodos, códigos de estado, headers, cookies, diseño REST | [MDN Web Docs: HTTP](https://developer.mozilla.org/es/docs/Web/HTTP) (Mozilla) |
| Datos con pandas | DataFrames, lectura de archivos, filtros, joins, agregaciones, series temporales | [Getting started de pandas 3.0](https://pandas.pydata.org/docs/getting_started/index.html) |
| Docker | Contenedores, imágenes, Dockerfile, Docker Compose, persistencia de datos | [Guía oficial de Docker](https://docs.docker.com/get-started/) |
| Inglés técnico | Lectura de documentación y entrevistas; apuntar a nivel B2 o más | [British Council LearnEnglish](https://learnenglish.britishcouncil.org/) (recursos gratuitos y test de nivel) |

**Django o FastAPI:** empezá por uno solo. Django si querés backend web completo; FastAPI si apuntás a APIs y servicios de datos o IA.

**Portfolio mínimo para postularte:**

1. Una API con FastAPI, PostgreSQL y Docker, con tests.
2. Una aplicación web con Django y PostgreSQL, publicada online.
3. Un análisis de datos reales con pandas, documentado en un README.

## Track de experto: backend, infraestructura y cloud

Este track lleva al nivel experto lo que el nivel 14 deja en introductorio. Empieza después del nivel 14 y corre en paralelo con la Etapa 4; cada área tiene tres escalones, y se considera dominada cuando tenés un proyecto que demuestre el último.

Regla de calidad: en cada área la fuente final es la especificación o el código fuente, no un tutorial. Un experto lee el RFC, el PEP o el código de Django, no un resumen de otro.

### Django

| Escalón | Qué dominar | Fuente oficial |
| --- | --- | --- |
| Sólido | ORM a fondo (consultas complejas, agregaciones, `select_related`, `prefetch_related`), formularios, autenticación y permisos, tests | [Guías temáticas de Django](https://docs.djangoproject.com/en/stable/topics/) |
| Avanzado | Optimización de consultas, caché, vistas asíncronas, señales, middleware propio, tareas en segundo plano | [Database access optimization](https://docs.djangoproject.com/en/stable/topics/db/optimization/) + [Async support](https://docs.djangoproject.com/en/stable/topics/async/) |
| Experto | Seguridad y despliegue en producción, cómo funciona el ORM por dentro, contribuir al proyecto | [Security in Django](https://docs.djangoproject.com/en/stable/topics/security/) + [Deployment checklist](https://docs.djangoproject.com/en/stable/howto/deployment/checklist/) + [Contributing to Django](https://docs.djangoproject.com/en/stable/internals/contributing/) + [Django Enhancement Proposals](https://github.com/django/deps) |

### FastAPI

| Escalón | Qué dominar | Fuente oficial |
| --- | --- | --- |
| Sólido | Inyección de dependencias, modelos de validación, manejo de errores, testing | [Tutorial de FastAPI](https://fastapi.tiangolo.com/tutorial/) completo |
| Avanzado | WebSockets, eventos de ciclo de vida, configuración por entorno, observabilidad con OpenTelemetry | [Advanced User Guide de FastAPI](https://fastapi.tiangolo.com/advanced/) |
| Experto | Las capas debajo de FastAPI: Pydantic (validación), Starlette (framework) y la especificación ASGI (cómo un servidor habla con la aplicación); `asyncio` a fondo | [Documentación de Pydantic](https://docs.pydantic.dev/) + [especificación ASGI](https://asgi.readthedocs.io/) + [documentación de `asyncio`](https://docs.python.org/3/library/asyncio.html) |

### Docker y Kubernetes

| Escalón | Qué dominar | Fuente oficial |
| --- | --- | --- |
| Sólido | Dockerfiles eficientes, builds multi-etapa, caché de capas, Docker Compose, volúmenes y redes | [Documentación de Docker](https://docs.docker.com/) (manuales de Build y Compose) |
| Avanzado | Cómo funciona un contenedor por dentro: namespaces y cgroups de Linux, el estándar de imágenes OCI, seguridad de imágenes | [Linux namespaces](https://man7.org/linux/man-pages/man7/namespaces.7.html) + [Open Container Initiative](https://opencontainers.org/) + track de sistemas operativos (OSTEP) |
| Experto | Orquestación con Kubernetes: pods, deployments, servicios, escalado, configuración y secretos | [Documentación de Kubernetes](https://kubernetes.io/docs/home/) + certificación [CKA](https://www.cncf.io/training/certification/cka/) de la CNCF (paga) |

### Redes, HTTP y HTTPS

| Escalón | Qué dominar | Fuente oficial |
| --- | --- | --- |
| Sólido | Modelo de capas, TCP, UDP, DNS, sockets en Python | [Stanford CS144](https://cs144.github.io/) + [documentación de `socket`](https://docs.python.org/3/library/socket.html) |
| Avanzado | HTTP a nivel de especificación: métodos, semántica, caché, HTTP/2 y HTTP/3 sobre QUIC | RFCs del IETF: [RFC 9110](https://www.rfc-editor.org/rfc/rfc9110) (semántica HTTP), [RFC 9111](https://www.rfc-editor.org/rfc/rfc9111) (caché), [RFC 9113](https://www.rfc-editor.org/rfc/rfc9113) (HTTP/2), [RFC 9114](https://www.rfc-editor.org/rfc/rfc9114) (HTTP/3), [RFC 9000](https://www.rfc-editor.org/rfc/rfc9000) (QUIC) |
| Experto | HTTPS por dentro: TLS 1.3, certificados, cadena de confianza, configuración segura de servidores | [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446) (TLS 1.3) + [documentación de Let's Encrypt](https://letsencrypt.org/docs/) + [documentación de `ssl`](https://docs.python.org/3/library/ssl.html) |

### Seguridad

| Escalón | Qué dominar | Fuente oficial |
| --- | --- | --- |
| Sólido | Las 10 vulnerabilidades web más críticas y cómo prevenirlas en Django y FastAPI | [OWASP Top 10:2025](https://owasp.org/Top10/2025/es/) (en español) + [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/) |
| Avanzado | Seguridad web a fondo: política de mismo origen, CORS, CSP, cookies, sesiones, ataques de navegador | [Stanford CS253 Web Security](https://web.stanford.edu/class/cs253/) + [MIT 6.5660](https://ocw.mit.edu/courses/6-5660-computer-systems-security-spring-2024/) (ya en el track de sistemas) |
| Experto | Criptografía formal (cifrado, MAC, intercambio de claves) y verificación de seguridad de aplicaciones con un estándar | [Cryptography I de Stanford](https://www.coursera.org/learn/crypto) (Dan Boneh, gratis en modo oyente) + [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/) |

### APIs

| Escalón | Qué dominar | Fuente oficial |
| --- | --- | --- |
| Sólido | Diseño REST desde su origen, contratos con OpenAPI, errores estándar | [Tesis de Roy Fielding](https://ics.uci.edu/~fielding/pubs/dissertation/top.htm) (UC Irvine, 2000; donde nació REST) + [OpenAPI 3.2](https://spec.openapis.org/oas/v3.2) + [RFC 9457](https://www.rfc-editor.org/rfc/rfc9457) (errores en APIs) |
| Avanzado | Autenticación y autorización: OAuth 2.0, OpenID Connect, JWT, y las buenas prácticas de seguridad vigentes | [RFC 6749](https://www.rfc-editor.org/rfc/rfc6749) (OAuth 2.0) + [RFC 9700](https://www.rfc-editor.org/rfc/rfc9700) (seguridad en OAuth) + [RFC 7519](https://www.rfc-editor.org/rfc/rfc7519) (JWT) + [OpenID Connect](https://openid.net/developers/how-connect-works/) |
| Experto | Otros estilos y cuándo usar cada uno: gRPC y GraphQL; versionado, paginación y límites de uso | [Documentación de gRPC](https://grpc.io/docs/) + [especificación de GraphQL](https://spec.graphql.org/) |

OAuth 2.1, que unifica OAuth 2.0 con esas buenas prácticas, todavía es un [borrador del IETF](https://datatracker.ietf.org/doc/draft-ietf-oauth-v2-1/); conviene seguirlo hasta que se publique.

### Cloud

| Escalón | Qué dominar | Fuente oficial |
| --- | --- | --- |
| Sólido | Un proveedor a fondo: cómputo, almacenamiento, bases de datos gestionadas, redes virtuales, permisos (IAM), costos | [AWS Skill Builder](https://skillbuilder.aws/) + certificación [AWS Solutions Architect – Associate](https://aws.amazon.com/certification/certified-solutions-architect-associate/) (paga). Alternativas equivalentes: [Google Cloud Skills Boost](https://www.cloudskillsboost.google/) o [Microsoft Learn para Azure](https://learn.microsoft.com/training/azure/) |
| Avanzado | Infraestructura como código y entrega continua: definir la infraestructura en archivos versionados y desplegar automáticamente | [Documentación de Terraform](https://developer.hashicorp.com/terraform/docs) + [documentación de GitHub Actions](https://docs.github.com/actions) |
| Experto | Sistemas distribuidos (consenso, replicación, tolerancia a fallos) y confiabilidad en producción (monitoreo, SLOs, gestión de incidentes) | [MIT 6.5840 Distributed Systems](https://pdos.csail.mit.edu/6.824/) (laboratorios en Go) + [libros de SRE de Google](https://sre.google/books/), gratuitos online |

Elegí un solo proveedor al principio: los conceptos se transfieren y lo que cambia entre AWS, Google Cloud y Azure son los nombres de los servicios.

### Caché y colas de mensajes

| Escalón | Qué dominar | Fuente oficial |
| --- | --- | --- |
| Sólido | Caché en la aplicación y con Redis: estructuras de datos, expiración, invalidación, patrones cache-aside y write-through | [Documentación de Redis](https://redis.io/docs/latest/) + [framework de caché de Django](https://docs.djangoproject.com/en/stable/topics/cache/) + [`functools.lru_cache`](https://docs.python.org/3/library/functools.html) |
| Avanzado | Tareas en segundo plano y colas: workers, reintentos, tareas programadas, idempotencia, colas de mensajes con RabbitMQ | [Documentación de Celery](https://docs.celeryq.dev/) + [documentación de RabbitMQ](https://www.rabbitmq.com/docs) |
| Experto | Streaming de eventos: logs distribuidos, particiones, grupos de consumidores, garantías de entrega (al menos una vez, exactamente una vez) | [Documentación de Apache Kafka](https://kafka.apache.org/documentation/) + [MIT 6.5840](https://pdos.csail.mit.edu/6.824/) (replicación y consenso, la teoría detrás) |

### Diseño de sistemas

| Escalón | Qué dominar | Fuente oficial |
| --- | --- | --- |
| Sólido | Principios de diseño: modularidad, abstracción, nombres, capas, tolerancia a fallos, trade-offs | [MIT 6.033 Computer System Engineering](https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/) (Spring 2018, OCW) |
| Avanzado | Arquitecturas en la nube: escalado horizontal, balanceo de carga, replicación de bases de datos, particionado, confiabilidad, costos | [AWS Well-Architected Framework](https://wa.aws.amazon.com/index.es.html) (en español) + [libros de SRE de Google](https://sre.google/books/) |
| Experto | Sistemas distribuidos a fondo: consistencia, consenso, transacciones distribuidas; diseñar y defender un sistema completo ante otros | [MIT 6.5840 Distributed Systems](https://pdos.csail.mit.edu/6.824/) + papers clásicos que el curso asigna (MapReduce, Raft, Spanner) |

El diseño de sistemas es el tema central de las entrevistas técnicas de nivel senior: practicalo dibujando arquitecturas y justificando cada decisión en voz alta.

### Proyecto de experto que integra todo

Una API en FastAPI o Django con PostgreSQL, caché en Redis, tareas en segundo plano con Celery, autenticación OAuth 2.0, HTTPS, tests y documentación OpenAPI; empaquetada con Docker, desplegada en Kubernetes sobre un proveedor cloud con Terraform, con despliegue automático, monitoreo y una auditoría propia contra OWASP ASVS.

## Etapa 4 – Intelectual de Python (bloques A–D)

Acá se pasa de usar Python a entender por qué funciona como funciona. La meta final es poder participar en el debate de un PEP o contribuir a CPython.

| Bloque | Temas | Fuente principal |
| --- | --- | --- |
| A. Ciencias de la computación | Abstracción, funciones de orden superior, construir un intérprete, algoritmos con análisis formal | [Berkeley CS61A](https://cs61a.org/) + su libro [Composing Programs](https://www.composingprograms.com/) + [MIT 6.006](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/) (Spring 2020, en Python) |
| B. El lenguaje a fondo | Modelo de datos, identidad vs. igualdad, descriptores, `__slots__`, metaclases, sistema de imports | [The Python Language Reference](https://docs.python.org/3/reference/) + [Descriptor HowTo Guide](https://docs.python.org/3/howto/descriptor.html) |
| C. CPython por dentro | Bytecode (`dis`), conteo de referencias y recolector de basura, el GIL y el build sin GIL (PEP 703), el compilador JIT, la C API | [Python Developer's Guide](https://devguide.python.org/) + [InternalDocs de CPython](https://github.com/python/cpython/tree/main/InternalDocs) + código fuente de CPython |
| D. Diseño e historia | PEPs clave: 8, 20, 484, 572, 634, 703 y 810; por qué se aceptaron o rechazaron | [peps.python.org](https://peps.python.org/) + [discuss.python.org](https://discuss.python.org/) |

El bloque C requiere el track de sistemas operativos: sin procesos, hilos y memoria, el GIL no se entiende de verdad.

## Track paralelo de matemáticas

Se estudia en paralelo desde la Etapa 2; sin él, el bloque A y el camino a IA se traban.

| Orden | Materia | Cuándo empezar | Fuente |
| --- | --- | --- | --- |
| 1 | Matemática discreta (lógica, demostraciones, grafos, conteo) | Con el nivel 6 | [MIT 6.1200J Mathematics for Computer Science](https://ocw.mit.edu/courses/6-1200j-mathematics-for-computer-science-spring-2024/) (Spring 2024; antes se llamaba 6.042J) |
| 2 | Cálculo de una variable | Con el nivel 8 | [MIT 18.01SC Single Variable Calculus](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/) |
| 3 | Álgebra lineal | Con el nivel 10 | [MIT 18.06SC Linear Algebra](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/) (Gilbert Strang) |
| 4 | Probabilidad | Con el nivel 11 | [Harvard Stat 110](https://stat110.hsites.harvard.edu/) (Joe Blitzstein) |
| 5 | Cálculo multivariable (gradientes) | Antes del camino a IA | [MIT 18.02SC Multivariable Calculus](https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/) |

## Track paralelo de sistemas

Es lo que convierte a un programador de Python en alguien que entiende la máquina, la red y los datos sobre los que corre su código.

| Orden | Materia | Cuándo empezar | Fuente |
| --- | --- | --- | --- |
| 1 | Bases de datos: teoría (modelado, índices, transacciones, cómo funciona un motor por dentro) | Con el nivel 8; la práctica con PostgreSQL está en el nivel 14 | [CMU 15-445 Database Systems](https://15445.courses.cs.cmu.edu/) (Fall 2026) + [documentación de `sqlite3`](https://docs.python.org/3/library/sqlite3.html) + [documentación de PostgreSQL 18](https://www.postgresql.org/docs/current/) |
| 2 | Sistemas operativos: procesos, hilos, memoria virtual, concurrencia | Con el nivel 12, antes del bloque C | [OSTEP](https://research.cs.wisc.edu/wind/OSTEP/), libro gratuito de la Universidad de Wisconsin; más profundo: [MIT 6.1810](https://pdos.csail.mit.edu/6.1810/) (en C) |
| 3 | Redes: TCP/IP, HTTP, sockets | Con el nivel 13 | [Stanford CS144](https://cs144.github.io/) (Fall 2026) + [documentación de `socket`](https://docs.python.org/3/library/socket.html) |
| 4 | Seguridad: vulnerabilidades, aislamiento, criptografía aplicada | Antes de publicar código propio | [MIT 6.5660 Computer Systems Security](https://ocw.mit.edu/courses/6-5660-computer-systems-security-spring-2024/) (Spring 2024) + [Security Considerations de Python](https://docs.python.org/3/library/security_warnings.html) |

## Lenguajes de sistemas: C y Rust

C es el lenguaje en el que está escrito CPython; Rust es el lenguaje con el que hoy se construyen muchas herramientas del ecosistema Python, como el núcleo de Pydantic. Dominar los dos te permite leer el intérprete y escribir extensiones rápidas para Python.

| Orden | Qué dominar | Cuándo empezar | Fuente oficial |
| --- | --- | --- | --- |
| 1. C fundamentos | Tipos, punteros, arrays, strings, memoria dinámica, compilación | Con el nivel 8 | [Harvard CS50x](https://cs50.harvard.edu/x/) (semanas en C) + el libro [Modern C, 3.ª edición](https://www.manning.com/books/modern-c-third-edition) de Jens Gustedt, investigador del Inria (pago), para C moderno a fondo |
| 2. C y la máquina | Representación de datos, ensamblador x86-64, jerarquía de memoria y caché, enlazado, procesos, memoria virtual, concurrencia | Con el track de sistemas operativos, antes del bloque C | [CMU 15-213 Introduction to Computer Systems](https://www.cs.cmu.edu/~213/) (Spring 2026) + su libro [CS:APP](https://csapp.cs.cmu.edu/) |
| 3. C aplicado a Python | Escribir extensiones de Python en C con la C API | Durante el bloque C | [Extending and Embedding the Python Interpreter](https://docs.python.org/3/extending/index.html) + [Python/C API Reference](https://docs.python.org/3/c-api/index.html) |
| 4. Rust fundamentos | Ownership, préstamos (borrowing), lifetimes, traits, manejo de errores, Cargo | Después de CMU 15-213 | [The Rust Programming Language](https://doc.rust-lang.org/book/) (libro oficial) + [Rust by Example](https://doc.rust-lang.org/rust-by-example/) |
| 5. Rust en sistemas | Por qué Rust evita los errores de memoria de C, concurrencia segura | Después del libro oficial | [Stanford CS110L Safety in Systems Programming](https://web.stanford.edu/class/cs110l/) |
| 6. Rust experto y Python | Código `unsafe`, modelo de memoria; extensiones de Python escritas en Rust | Al final del bloque C | [The Rustonomicon](https://doc.rust-lang.org/nomicon/) + [guía de PyO3](https://pyo3.rs/) + [documentación de maturin](https://www.maturin.rs/) |

Proyecto que lo demuestra: el mismo módulo lento de Python reescrito como extensión en C y en Rust, con mediciones de rendimiento de las tres versiones.

## Camino a IA y proyecto final

El proyecto final es construir un modelo de lenguaje pequeño desde cero; requiere haber terminado la Etapa 3 y el track de matemáticas.

1. **Cálculo numérico:** arrays, vectorización y broadcasting con NumPy. Fuente: [documentación oficial de NumPy](https://numpy.org/doc/stable/).
2. **Fundamentos de deep learning:** redes neuronales, retropropagación, entrenamiento. Fuente: [MIT 6.S191 Introduction to Deep Learning](https://introtodeeplearning.com/).
3. **PyTorch:** tensores, autograd, ciclo de entrenamiento. Fuente: [tutoriales oficiales de PyTorch](https://docs.pytorch.org/tutorials/).
4. **Visión por computadora y redes profundas:** [Stanford CS231n](https://cs231n.stanford.edu/).
5. **Lenguaje natural y transformers:** [Stanford CS224n](https://web.stanford.edu/class/cs224n/).
6. **Proyecto final, un LLM desde cero:** tokenización, arquitectura transformer, entrenamiento, inferencia. Fuente: [Stanford CS336 Language Modeling from Scratch](https://cs336.stanford.edu/) (Spring 2026).

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
| MIT | 6.100L, 6.006, 6.1200J, 18.01SC, 18.02SC, 18.06SC, 6.033, 6.5660, 6.1810, 6.5840, 6.102, 6.S191, Missing Semester | Ver año en cada tabla | OCW: Creative Commons no comercial; el resto, revisar en cada sitio |
| UC Berkeley | CS61A, Composing Programs, Data 100 | Data 100 Fall 2026 | Composing Programs: Creative Commons BY-SA; Data 100: revisar en el sitio |
| Stanford | CS110L, CS144, CS229, CS253, CS231n, CS224n, CS336, Cryptography I | CS144 Fall 2026, CS336 Spring 2026 | Revisar en cada sitio |
| Carnegie Mellon | 15-213 Introduction to Computer Systems, 15-445 Database Systems | 15-213 Spring 2026, 15-445 Fall 2026 | Revisar en cada sitio; el libro CS:APP es pago (igual que Modern C, de Jens Gustedt, Inria) |
| Universidad de Wisconsin | OSTEP | Vigente | Gratuito para leer online |
| UC Irvine | Tesis de Roy Fielding (REST) | 2000, texto canónico | Lectura libre online |
| IETF | RFCs de HTTP, QUIC, TLS, OAuth, JWT y errores en APIs | Vigentes; OAuth 2.1 aún en borrador | Uso libre |
| OWASP Foundation | Top 10:2025, ASVS, Cheat Sheet Series | Top 10 edición 2025 | Creative Commons BY-SA |
| Linux Foundation y CNCF | OpenAPI 3.2, OCI, Kubernetes, gRPC, GraphQL, certificación CKA | OpenAPI 3.2 | Especificaciones abiertas; certificación paga |
| Apache Software Foundation | Kafka, Airflow 3 | Vigentes | Apache License 2.0 (permisiva) |
| Proyecto Rust | The Rust Programming Language, Rust by Example, The Rustonomicon | Vigentes | MIT o Apache 2.0 (permisivas) |
| AWS, Google Cloud, Microsoft | Skill Builder, Well-Architected Framework, Cloud Skills Boost, Microsoft Learn, Playwright | Vigentes | Formación gratuita; certificaciones pagas |
| Google | Libros de SRE | Vigentes | Lectura gratuita online |
| PostgreSQL Global Development Group | Documentación de PostgreSQL | PostgreSQL 18 | PostgreSQL License (permisiva) |
| Django Software Foundation | Documentación de Django y DEPs | Django 6.1 | BSD (permisiva) |
| Proyectos oficiales | Documentación de psycopg 3, FastAPI, Pydantic, ASGI, pandas 3.0, NumPy, Matplotlib, scikit-learn, PyTorch, Redis, Celery, RabbitMQ, Ansible, Docker, Terraform, GitHub Actions, PyO3 y maturin | Verificadas el 11/10/2026 | Revisar en cada sitio |
| Mozilla y British Council | MDN Web Docs, LearnEnglish | Vigentes | MDN: Creative Commons BY-SA; LearnEnglish: recursos gratuitos, cursos pagos aparte |

Nota: los cursos sin licencia abierta explícita se pueden estudiar libremente, pero no conviene copiar su material a un dataset.
