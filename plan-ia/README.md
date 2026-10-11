# Plan para AI Engineer

Actualizado: 11 de octubre de 2026

Este es un segundo plan, más corto que el [mapa principal](../README.md), para un perfil concreto: **AI Engineer**, la persona que construye productos sobre modelos que ya existen (APIs de modelos de lenguaje, prompts, salidas estructuradas, herramientas, RAG, agentes, MCP, evaluaciones, seguridad y despliegue). No es un plan de investigación en machine learning: no vas a entrenar modelos desde cero.

El plan supone que estudiás con asistentes de IA. Por eso recorta profundidad donde no le sirve a este perfil, pero mantiene los fundamentos: vas a pasar buena parte de tu trabajo leyendo, revisando y corrigiendo código que escribió una IA, y eso no se puede hacer sin saber programar.

- **Hito de empleo:** 825 h, unos 19 meses a 10 h por semana o 10 meses a 20 h por semana. El mapa principal llega a su hito de empleo en 1090 h, con un perfil de backend generalista.
- **Política de fuentes:** la misma del mapa principal. Universidades, fundaciones, organismos de estándares y la documentación oficial de cada tecnología; acá eso incluye la documentación oficial de los proveedores de modelos (Anthropic, OpenAI) y de Hugging Face. Las excepciones se indican donde aparecen: cursos y artículos de empresas (Google, Anthropic, Hugging Face) y el British Council para el inglés. Todas las fuentes se verificaron el 11 de octubre de 2026.
- **Regla de avance:** no pasar de fase hasta resolver los ejercicios de la fase sin mirar la teoría y sin pedirle la solución a una IA.
- **Estructura de carpetas:** una carpeta por fase en [`fases/`](fases/), cada una con un README y las subcarpetas `teoria/`, `ejercicios/` y `proyecto/`.

Para empezar: [fases/fase-1-fundamentos-de-python](fases/fase-1-fundamentos-de-python/)

Para marcar tu avance: [TRACKER.md](TRACKER.md)

**Contenido:**

- [Cómo estudiar con IA](#cómo-estudiar-con-ia)
- [Tiempo estimado](#tiempo-estimado)
- [Fase 1 – Fundamentos de Python (acelerado)](#fase-1--fundamentos-de-python-acelerado)
- [Fase 2 – Programador práctico](#fase-2--programador-práctico)
- [Fase 3 – Datos y ML esencial](#fase-3--datos-y-ml-esencial)
- [Fase 4 – Cómo funcionan los LLMs](#fase-4--cómo-funcionan-los-llms)
- [Fase 5 – AI Engineering](#fase-5--ai-engineering)
- [Fase 6 – Portfolio y empleo](#fase-6--portfolio-y-empleo)
- [Después del hito](#después-del-hito)
- [Qué se recortó respecto del mapa principal y por qué](#qué-se-recortó-respecto-del-mapa-principal-y-por-qué)
- [Fuentes verificadas y licencias](#fuentes-verificadas-y-licencias)

## Cómo estudiar con IA

La IA acelera el estudio si la usás como tutor y como revisor. Si la usás como piloto automático, terminás con proyectos que funcionan y una cabeza que no sabe por qué. Estas reglas valen para todas las fases; cada README de fase agrega las suyas.

1. **Primer intento sin IA.** Cada ejercicio se empieza solo, con la documentación oficial abierta. Recién cuando te trabás de verdad, pedís ayuda.
2. **Tutor, no solucionador.** Pedile que te explique un concepto, que te dé una pista o que te haga preguntas sobre tu código. No le pidas la solución del ejercicio.
3. **Revisor de tu código.** Cuando tu solución funciona, pedile una revisión: errores, casos borde, nombres, estilo. Decidí vos qué cambios aceptar y por qué.
4. **Generador de práctica.** Pedile ejercicios extra del mismo tema y de dificultad creciente, y resolvelos con la regla 1.
5. **Nada que no puedas explicar.** No hagas commit de código que no puedas explicar línea por línea. Si no podés, lo reescribís hasta poder.
6. **Primero a mano.** Usá la IA para escribir tests o código repetitivo solo después de haberlos escrito a mano en esa fase al menos una vez.
7. **Verificá contra la fuente.** Toda afirmación de una IA sobre una biblioteca, una API o un precio se contrasta con la documentación oficial antes de usarla. Las IA inventan parámetros y versiones con total seguridad.

Si querés una guía más larga, Anthropic publica el curso gratuito [AI Fluency for students](https://academy.claude.com/courses/ai-fluency-for-students) (curso de empresa, desarrollado con profesores de University College Cork y Ringling College), sobre usar la IA como compañera de pensamiento sin delegarle tu aprendizaje.

## Tiempo estimado

Las horas incluyen clases, lectura, ejercicios y proyecto, y se apoyan en las mismas estimaciones que el mapa principal para los temas que comparten. Si un tema te resulta nuevo de verdad, contá un 25% más.

| Fase | Contenido | Horas | Acumulado | A 10 h por semana | A 20 h por semana |
| --- | --- | --- | --- | --- | --- |
| 1 | Fundamentos de Python (acelerado) | 100 | 100 | 10 semanas (2 meses) | 5 semanas (1 mes) |
| 2 | Programador práctico | 160 | 260 | 26 semanas (6 meses) | 13 semanas (3 meses) |
| 3 | Datos y ML esencial | 90 | 350 | 35 semanas (8 meses) | 18 semanas (4 meses) |
| 4 | Cómo funcionan los LLMs | 75 | 425 | 43 semanas (10 meses) | 22 semanas (5 meses) |
| 5 | AI Engineering | 240 | 665 | 67 semanas (1,3 años) | 34 semanas (8 meses) |
| 6 | Portfolio y empleo | 160 | **825** | **83 semanas (1,6 años)** | **42 semanas (10 meses)** |
| | **Hito de empleo: podés postularte a puestos junior de AI Engineer** | | **825** | | |

El calendario supone 52 semanas de estudio por año; con vacaciones, sumá un 10%. Las llamadas a las APIs de modelos se pagan por uso: fijá un límite de gasto mensual en la consola del proveedor antes de la fase 5.

## Fase 1 – Fundamentos de Python (acelerado)

Al terminar esta fase podés escribir scripts que leen datos, los procesan y manejan errores, todo desde la terminal y con Git. Comprime los niveles 0–5 del mapa principal.

| Tema | Qué aprender | Fuente | Ejercicios | Horas |
| --- | --- | --- | --- | --- |
| Preparación | Terminal, Python 3.15 con `uv`, entorno virtual, Git básico | Guía "Empezá acá" del [nivel 0 del mapa principal](../niveles/nivel-00-preparacion/) + [MIT Missing Semester](https://missing.csail.mit.edu/2026/) (edición 2026) | Ejercicios de las clases [Course Overview + Introduction to the Shell](https://missing.csail.mit.edu/2026/course-shell/) y [Version Control and Git](https://missing.csail.mit.edu/2026/version-control/) | 15 |
| Primeros pasos y control de flujo | Variables, tipos, operadores, f-strings, condicionales, bucles, `match`, funciones | [Harvard CS50P](https://cs50.harvard.edu/python/) (semanas 0–2) + [MOOC de Helsinki 2026](https://programming-26.mooc.fi/) (partes 1–3, solo los temas que te cuesten) | [Problem sets de CS50P](https://cs50.harvard.edu/python/psets/): 0, 1 y 2 | 30 |
| Colecciones | Listas, tuplas, diccionarios, conjuntos, strings a fondo | MOOC de Helsinki (partes 4–5) + [Tutorial oficial: estructuras de datos](https://docs.python.org/es/3/tutorial/datastructures.html) | Ejercicios de las partes 4–5 del MOOC de Helsinki | 20 |
| Errores, archivos y JSON | Excepciones, archivos, CSV, JSON, expresiones regulares | CS50P (semanas 3, 6 y 7) + documentación de [`json`](https://docs.python.org/3/library/json.html) | CS50P: Problem Sets 3, 6 y 7 | 20 |
| Terminal | Archivos, permisos, pipes, variables de entorno y `PATH` (ahí van a vivir tus API keys) | Missing Semester (clases de shell y de entorno de línea de comandos) | Ejercicios de esas clases; hacer todo el trabajo del plan desde la terminal | 15 |

**Horas de la fase:** 100.

## Fase 2 – Programador práctico

Al terminar esta fase podés construir y publicar una API probada, tipada y versionada, con base de datos y en un contenedor: la base sobre la que se monta todo producto de IA.

| Tema | Qué aprender | Fuente | Ejercicios | Horas |
| --- | --- | --- | --- | --- |
| Programación orientada a objetos | Clases, herencia, composición, dataclasses, métodos especiales | CS50P (semana 8) + [Tutorial oficial: clases](https://docs.python.org/es/3/tutorial/classes.html) | CS50P: Problem Set 8 | 15 |
| Testing | pytest, fixtures, mocks (para no llamar a una API real en cada test) | CS50P (semana 5) + [documentación de pytest](https://docs.pytest.org/) + [`unittest.mock`](https://docs.python.org/3/library/unittest.mock.html) | CS50P: Problem Set 5 + tests para tus ejercicios de la fase 1 | 15 |
| Tipos y validación | Type hints, chequeo con mypy, modelos de Pydantic (la base de las salidas estructuradas de la fase 5) | Documentación de [`typing`](https://docs.python.org/3/library/typing.html), [mypy](https://mypy.readthedocs.io/en/stable/) y [Pydantic](https://pydantic.dev/docs/) | Agregar type hints a tus programas de la fase 1 y pasar mypy; modelar con Pydantic un JSON real de una API pública | 10 |
| Proyecto Python moderno | Módulos y paquetes, `pyproject.toml`, `uv`, `ruff`, secretos en variables de entorno (nunca en el repositorio) | [Writing your pyproject.toml](https://packaging.python.org/en/latest/guides/writing-pyproject-toml/) + [documentación de uv](https://docs.astral.sh/uv/) + [documentación de Ruff](https://docs.astral.sh/ruff/) + clases [Packaging and Shipping Code](https://missing.csail.mit.edu/2026/shipping-code/) y [Code Quality](https://missing.csail.mit.edu/2026/code-quality/) de Missing Semester | CS50P: Problem Set 4 + ejercicios de esas dos clases + un paquete propio con `uv` y `ruff` sin avisos | 10 |
| Git en equipo | Ramas, merge, rebase, pull requests, leer diffs (lo que más vas a hacer al revisar código generado por IA) | [Pro Git](https://git-scm.com/book/es/v2) (libro oficial de Git, en español), capítulos 2 y 3 | Cada ejercicio de esta fase en su propia rama, con pull request | 10 |
| HTTP y clientes | Métodos, códigos de estado, headers, JSON, autenticación con API keys, timeouts y reintentos, llamadas concurrentes con `asyncio` | [MDN Web Docs: HTTP](https://developer.mozilla.org/es/docs/Web/HTTP) (Mozilla) + [documentación de HTTPX](https://www.python-httpx.org/) + documentación de [`asyncio`](https://docs.python.org/3/library/asyncio.html) | Consumir una API pública con HTTPX, primero secuencial y después con `asyncio`, con manejo de errores y reintentos | 15 |
| APIs con FastAPI | Rutas, validación con Pydantic, dependencias, testing | [Tutorial oficial de FastAPI](https://fastapi.tiangolo.com/tutorial/) | El tutorial completo + la API del proyecto integrador | 20 |
| PostgreSQL desde Python | Tablas, consultas, joins, agregaciones, transacciones, consultas parametrizadas | [Tutorial oficial de PostgreSQL 18](https://www.postgresql.org/docs/current/tutorial.html) + [documentación de psycopg 3](https://www.psycopg.org/psycopg3/docs/) | Los ejemplos del tutorial + 20 consultas propias + la capa de datos del proyecto integrador, con tests | 30 |
| Docker | Imágenes, Dockerfile, Docker Compose, volúmenes | [Guía oficial de Docker](https://docs.docker.com/get-started/) + [documentación de Compose](https://docs.docker.com/compose/) | Contenerizar la API con PostgreSQL usando Compose | 15 |
| Proyecto integrador | Juntar todo lo anterior | Las fuentes de la fase | Una API con FastAPI, PostgreSQL y Docker, con tests y `ruff` sin avisos | 20 |

**Horas de la fase:** 160.

Lo que el mapa principal agrega acá y este plan saltea: Berkeley CS61A (opcional; si te sobra tiempo es el mejor complemento de ciencias de la computación, ver el [complemento del mapa principal](../README.md#complemento-de-ciencias-de-la-computación-en-paralelo-con-los-niveles-37)), MIT 6.102 y Django.

## Fase 3 – Datos y ML esencial

Al terminar esta fase entendés qué es un modelo, cómo se entrena y, sobre todo, cómo se evalúa. Esa lógica de evaluación es la misma que vas a usar en los evals de la fase 5.

| Tema | Qué aprender | Fuente | Ejercicios | Horas |
| --- | --- | --- | --- | --- |
| Matemática mínima | Vectores, norma, producto punto, ángulo y similitud coseno, matrices, probabilidad básica | [Mathematics for Machine Learning](https://mml-book.github.io/) (Deisenroth, Faisal y Ong; Cambridge University Press, PDF gratuito): capítulos 2 (álgebra lineal), 3 (geometría analítica: normas, productos internos, ángulos) y 6 (probabilidad), solo las primeras secciones de cada uno | Los ejercicios del final de esos capítulos que correspondan a lo leído + implementar la similitud coseno en Python puro | 25 |
| NumPy | Arrays, vectorización, broadcasting | [NumPy: the absolute basics for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html) | Reproducir los ejemplos sin mirar; reescribir la similitud coseno vectorizada y comparar tiempos | 10 |
| pandas | DataFrames, lectura de archivos, filtros, agregaciones | [Getting started de pandas](https://pandas.pydata.org/docs/getting_started/index.html) | Analizar un dataset real y documentar las conclusiones en un README | 15 |
| Conceptos de ML | Regresión, clasificación, datos numéricos y categóricos, generalización, sobreajuste, sistemas de ML en producción, equidad | [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) (curso de empresa: Google), módulos ML Models, Data y Real-world ML | Los ejercicios interactivos de esos módulos | 20 |
| Evaluación con scikit-learn | Separar entrenamiento y prueba, validación cruzada, métricas (precisión, recall, F1, matriz de confusión) | [Getting Started de scikit-learn](https://scikit-learn.org/stable/getting_started.html) + guías de [evaluación de modelos](https://scikit-learn.org/stable/modules/model_evaluation.html) y [validación cruzada](https://scikit-learn.org/stable/modules/cross_validation.html) | Entrenar y evaluar un clasificador sobre un dataset real, con validación cruzada y un informe de métricas | 20 |

**Horas de la fase:** 90.

## Fase 4 – Cómo funcionan los LLMs

Al terminar esta fase podés explicar qué pasa entre que mandás un prompt y recibís una respuesta: tokens, embeddings, atención, cómo se entrenó el modelo y por qué a veces se equivoca. Es conceptual: no se construye un modelo desde cero (eso queda en el [Camino a IA del mapa principal](../README.md#camino-a-ia-y-proyecto-final)).

| Tema | Qué aprender | Fuente | Ejercicios | Horas |
| --- | --- | --- | --- | --- |
| Redes neuronales | Neuronas y capas, función de pérdida, descenso por gradiente, retropropagación como idea, modelos de secuencia | [MIT 6.S191 Introduction to Deep Learning](https://introtodeeplearning.com/) (edición 2026), clases 1 y 2 | Software Lab 1 del curso | 15 |
| Embeddings y LLMs | Qué es un embedding, por qué textos parecidos quedan cerca, qué es un modelo de lenguaje | Machine Learning Crash Course (Google), módulos [Neural networks](https://developers.google.com/machine-learning/crash-course/neural-networks), [Embeddings](https://developers.google.com/machine-learning/crash-course/embeddings) e [Intro to Large Language Models](https://developers.google.com/machine-learning/crash-course/llm) | Los ejercicios de esos módulos | 10 |
| Transformers y tokenización | Atención, arquitectura transformer, modelos encoder y decoder, tokenización por subpalabras | [LLM Course de Hugging Face](https://huggingface.co/learn/llm-course/chapter1/1) (curso de empresa; hay una [versión en español](https://huggingface.co/learn/llm-course/es/chapter1/1) en progreso): capítulos 1 y 2, y del capítulo 6 solo los algoritmos de tokenización | Los notebooks de esos capítulos; tokenizar el mismo texto en español y en inglés y comparar la cantidad de tokens | 20 |
| Preentrenamiento, fine-tuning y RLHF | Cómo se entrena un LLM: preentrenamiento, ajuste supervisado, aprendizaje por refuerzo con preferencias humanas (RLHF) | [Stanford CS224N](https://web.stanford.edu/class/cs224n/) (Winter 2026): diapositivas y apuntes de las clases Word Vectors, Transformers, Pretraining y Post-training. Los videos de 2026 son solo para alumnos; los de la edición Spring 2024 están completos y gratis en YouTube | Explicar por escrito, con tus palabras, cada etapa del entrenamiento | 20 |
| Tokens, contexto y sampling | Ventana de contexto, costo por token, temperatura y otros parámetros de sampling, cómo elegir modelo | Documentación de Anthropic: [glosario](https://platform.claude.com/docs/en/about-claude/glossary), [conteo de tokens](https://platform.claude.com/docs/en/build-with-claude/token-counting) y [panorama de modelos](https://platform.claude.com/docs/en/models/overview) + [How to generate text](https://huggingface.co/blog/how-to-generate) (artículo de Hugging Face sobre estrategias de decodificación) | Contar los tokens de un mismo documento con dos modelos y calcular el costo de procesarlo | 10 |

**Horas de la fase:** 75.

## Fase 5 – AI Engineering

Es el núcleo del plan. Al terminar esta fase podés construir, evaluar y asegurar aplicaciones sobre modelos de lenguaje: desde una llamada a la API hasta agentes con herramientas expuestas por MCP.

**Elegí un proveedor primero.** Las fuentes de esta fase traen la documentación de Anthropic y la de OpenAI para cada tema. Estudiá con una sola hasta terminar la fase: los conceptos se transfieren y lo que cambia entre proveedores son los nombres de los parámetros.

| Tema | Qué aprender | Fuente | Ejercicios | Horas |
| --- | --- | --- | --- | --- |
| Primera API | Instalar el SDK, mensajes y roles, system prompt, historial de conversación, manejo de la API key, errores y reintentos | [Get started de Anthropic](https://platform.claude.com/docs/en/get-started) + [SDK de Python](https://github.com/anthropics/anthropic-sdk-python), o [Text generation de OpenAI](https://developers.openai.com/api/docs/guides/text) + [SDK de Python](https://github.com/openai/openai-python). Como guía paso a paso: [Building with the Claude API](https://academy.claude.com/courses/building-with-the-claude-api) (curso de empresa: Anthropic Academy) | El quickstart del proveedor + un chat de terminal con historial y manejo de errores | 20 |
| Prompt engineering | Instrucciones claras, ejemplos (few-shot), estructura con etiquetas, roles, pedir razonamiento | [Prompt engineering de Anthropic](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview) o [de OpenAI](https://developers.openai.com/api/docs/guides/prompt-engineering) | Mejorar un mismo prompt en cinco versiones y comparar las salidas sobre los mismos 10 casos | 15 |
| Salidas estructuradas | Pedir JSON que cumpla un esquema, validarlo con Pydantic, qué hacer cuando falla | [Structured outputs de Anthropic](https://platform.claude.com/docs/en/build-with-claude/structured-outputs) o [de OpenAI](https://developers.openai.com/api/docs/guides/structured-outputs) | Extraer datos de 20 documentos reales a modelos de Pydantic, contando cuántos validan | 10 |
| Herramientas (tool use) | Definir herramientas, el ciclo de llamada y resultado, varias herramientas, errores de herramientas | [Tool use de Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview) o [Function calling de OpenAI](https://developers.openai.com/api/docs/guides/function-calling) | Un asistente que consulta tu base de PostgreSQL de la fase 2 mediante herramientas, solo con lecturas | 20 |
| Streaming, costo y latencia | Respuestas en streaming, prompt caching, conteo de tokens, límites de uso, procesamiento por lotes | Anthropic: [streaming](https://platform.claude.com/docs/en/build-with-claude/streaming), [prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching), [reducir latencia](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-latency) y [precios](https://platform.claude.com/docs/en/about-claude/pricing). OpenAI: [streaming](https://developers.openai.com/api/docs/guides/streaming-responses), [prompt caching](https://developers.openai.com/api/docs/guides/prompt-caching), [latencia](https://developers.openai.com/api/docs/guides/latency-optimization) y [costos](https://developers.openai.com/api/docs/guides/cost-optimization) | Medir costo y latencia de 50 llamadas con y sin caché, y documentar la diferencia | 15 |
| Embeddings y búsqueda vectorial | Modelos de embeddings, fragmentación de documentos (chunking), distancia coseno, índices HNSW, búsqueda vectorial en PostgreSQL | [Embeddings en la documentación de Anthropic](https://platform.claude.com/docs/en/build-with-claude/embeddings) o [de OpenAI](https://developers.openai.com/api/docs/guides/embeddings) + [pgvector](https://github.com/pgvector/pgvector) + [pgvector-python](https://github.com/pgvector/pgvector-python) | Un buscador semántico sobre tus apuntes de `teoria/`, con pgvector | 20 |
| RAG | Recuperar y luego generar, búsqueda híbrida (vectorial y por palabras clave), reranking, citar las fuentes | [Retrieval de OpenAI](https://developers.openai.com/api/docs/guides/retrieval) + [Contextual Retrieval](https://www.anthropic.com/engineering/contextual-retrieval) (artículo de ingeniería de Anthropic) | Un RAG sobre documentación técnica real que responde citando el fragmento usado | 30 |
| Agentes | Flujos fijos frente a agentes, patrones (encadenar, enrutar, paralelizar, orquestar), diseño de herramientas, manejo del contexto | Artículos de ingeniería de Anthropic: [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), [Writing effective tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents) y [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) + [Agents Course de Hugging Face](https://huggingface.co/learn/agents-course/unit0/introduction) (curso de empresa), unidades 1 y 2 | Los ejercicios de las unidades 1 y 2 + un agente propio sin framework, con un límite de pasos y de gasto | 40 |
| Model Context Protocol (MCP) | Arquitectura cliente y servidor, herramientas, recursos y prompts, transporte | [Introducción a MCP](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) + [especificación 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28) + [tutorial para construir un servidor](https://modelcontextprotocol.io/docs/2026-07-28/develop/build-server) + [SDK de Python](https://github.com/modelcontextprotocol/python-sdk) | El tutorial del servidor + un servidor MCP propio que expone dos herramientas sobre tus datos | 25 |
| Evals | Definir criterios de éxito, armar un set de casos de prueba, calificar por código y con otro modelo, detectar regresiones | [Define success criteria and build evaluations](https://platform.claude.com/docs/en/test-and-evaluate/develop-tests) (Anthropic) + [Evals de OpenAI](https://developers.openai.com/api/docs/guides/evals) | Una suite de evals para el RAG, que corre con pytest y falla si la calidad baja | 25 |
| Seguridad | Prompt injection, fuga de información, manejo inseguro de la salida, agencia excesiva, consumo sin límite | [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/) (OWASP GenAI Security Project) + [Mitigate jailbreaks and prompt injections](https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks) (Anthropic) + [Safety best practices](https://developers.openai.com/api/docs/guides/safety-best-practices) (OpenAI) + [Security best practices de MCP](https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices) | Atacar tu propio RAG y tu agente con prompt injection, y auditarlos contra el Top 10 | 10 |
| Observabilidad | Trazas de cada llamada, tokens, latencia y costo por pedido | [Convenciones semánticas de OpenTelemetry para IA generativa](https://github.com/open-telemetry/semantic-conventions-genai) | Instrumentar el RAG para registrar tokens, latencia y costo de cada pedido | 10 |

**Horas de la fase:** 240.

**Opción universitaria para agentes:** el [MOOC Agentic AI de UC Berkeley](https://agenticai-learning.org/f25) (Fall 2025, Berkeley RDI, con clases grabadas y gratuitas en YouTube) es la edición más reciente de la serie que empezó con el [LLM Agents MOOC](https://llmagents-learning.org/f24) (Fall 2024). Sirve para ver el panorama de investigación; es opcional y queda fuera del total.

## Fase 6 – Portfolio y empleo

Al terminar esta fase tenés tres proyectos que demuestran el perfil completo y podés defender cada decisión en una entrevista.

| Tema | Qué hacer | Fuente | Práctica | Horas |
| --- | --- | --- | --- | --- |
| Proyecto 1: RAG con evals | RAG sobre documentos reales (por ejemplo, la documentación de una biblioteca), con citas, una suite de evals y un informe de calidad | Fases 3 y 5 | Publicarlo en GitHub con un README que muestre los resultados de los evals | 45 |
| Proyecto 2: agente con MCP | Un agente con herramientas propias expuestas por un servidor MCP, con límites de pasos y de gasto, y defensas contra prompt injection | Fase 5 | Publicarlo con un video corto o capturas que muestren una tarea completa | 40 |
| Proyecto 3: servicio en producción | Una API con FastAPI, PostgreSQL y pgvector, en Docker, con tests, evals en CI y monitoreo de costo y latencia | Fases 2 y 5 | Desplegarlo online y documentar costo por pedido y latencia | 40 |
| Preparación para entrevistas | Problemas de algoritmos en voz alta y con tiempo, entrevistas conductuales, diseño de sistemas junior, y explicar decisiones de IA: qué modelo, por qué RAG y no fine-tuning, cómo evaluás, cuánto cuesta | [Stanford CS9 Problem-Solving for the CS Technical Interview](https://web.stanford.edu/class/cs9/) (Spring 2022) + el [nivel 6 del mapa principal](../niveles/nivel-06-estructuras-de-datos/) si te falta base de estructuras de datos | Los problemas de práctica de CS9, cronometrados; simulacros con otra persona en los que defendés cada proyecto | 35 |
| Inglés técnico | Lectura de documentación y entrevistas; apuntar a B2 o más | [British Council LearnEnglish](https://learnenglish.britishcouncil.org/) (recursos gratuitos y test de nivel) | Test de nivel; leer en inglés toda la documentación del plan | Continuo, fuera del total |

**Horas de la fase:** 160. Con esta fase llegás al **hito de empleo: podés postularte a puestos junior de AI Engineer** (825 h acumuladas).

## Después del hito

Un menú, no una secuencia. Elegí según tu trabajo; las horas son aproximadas y no suman al hito.

| Opción | Para qué | Fuente | Horas |
| --- | --- | --- | --- |
| Fine-tuning y modelos abiertos | Ajustar modelos abiertos cuando el prompt y el RAG no alcanzan | LLM Course de Hugging Face, capítulos [3](https://huggingface.co/learn/llm-course/chapter3/1) y [11](https://huggingface.co/learn/llm-course/chapter11/1) + [documentación de PEFT](https://huggingface.co/docs/peft/index) | 60 |
| Python más profundo | Python idiomático, tipado estricto, concurrencia | [Etapa 3 del mapa principal](../README.md#etapa-3--python-avanzado-niveles-1113) | 190 |
| Machine learning a fondo | Entender los modelos con rigor matemático | [Stanford CS229](https://cs229.stanford.edu/), como en la [especialización IA del mapa principal](../README.md#especializaciones-del-nivel-13) (requiere el track de matemáticas) | 220 |
| Matemáticas | Cálculo, álgebra lineal y probabilidad completos | [Track de matemáticas del mapa principal](../README.md#track-paralelo-de-matemáticas) | 770 |
| MLOps y cloud | Desplegar y operar servicios a escala en un proveedor cloud | [Cloud](../README.md#cloud) y [Docker y Kubernetes](../README.md#docker-y-kubernetes) en el track de experto del mapa principal | 260 |
| Modelos desde cero | Deep learning, visión, lenguaje natural y un LLM construido desde cero | [Camino a IA del mapa principal](../README.md#camino-a-ia-y-proyecto-final) (CS231n, CS224n, CS336) | 590 |

Las horas de MLOps y cloud son las de los escalones de Cloud (sólido y avanzado, 130) y de Docker y Kubernetes (130) del mapa principal.

## Qué se recortó respecto del mapa principal y por qué

| Tema del mapa principal | Por qué no está acá | Dónde está si lo necesitás |
| --- | --- | --- |
| Berkeley CS61A, MIT 6.102 y Django | Buenos para un programador generalista, pero el tiempo rinde más en la fase 5. CS61A queda como opcional | [Mapa principal](../README.md#etapa-2--programador-sólido-niveles-610) |
| C y Rust | Un AI Engineer no escribe extensiones nativas ni lee el intérprete | [Lenguajes de sistemas](../README.md#lenguajes-de-sistemas-c-y-rust) |
| CPython por dentro y el lenguaje a fondo | No cambia cómo construís productos con modelos | [Etapa 4](../README.md#etapa-4--intelectual-de-python-bloques-ad) |
| Matemáticas completas (770 h) | Para usar modelos alcanza con vectores, similitud y probabilidad básica (fase 3) | [Track de matemáticas](../README.md#track-paralelo-de-matemáticas) |
| Sistemas operativos, redes y bases de datos por dentro | Útiles, pero no son requisito para el primer empleo en este perfil | [Track de sistemas](../README.md#track-paralelo-de-sistemas) |
| Kubernetes, sistemas distribuidos, colas y caché a fondo | Un junior despliega con Docker; la orquestación llega con el trabajo | [Track de experto](../README.md#track-de-experto-backend-infraestructura-y-cloud) |
| Entrenar modelos desde cero (CS231n, CS224n completo, CS336) | Es investigación en ML, no ingeniería sobre modelos existentes | [Camino a IA](../README.md#camino-a-ia-y-proyecto-final) |

## Fuentes verificadas y licencias

Todas las fuentes se verificaron el 11 de octubre de 2026 y son gratuitas; las APIs de los proveedores se pagan por uso. La licencia importa si algún día usás el material para algo comercial.

| Institución | Material | Edición verificada | Licencia |
| --- | --- | --- | --- |
| Python Software Foundation | Documentación de Python, tutorial en español, Packaging User Guide | Python 3.15 | PSF License (permisiva) |
| Harvard | CS50P | Vigente en 2026 | Creative Commons no comercial |
| Universidad de Helsinki | Python Programming MOOC | Edición 2026 | Creative Commons no comercial |
| MIT | Missing Semester, 6.S191 Introduction to Deep Learning | Ediciones 2026 | 6.S191: licencia MIT; Missing Semester: revisar en el sitio |
| Stanford | CS224N, CS9, CS229 | CS224N Winter 2026, CS9 Spring 2022 | Revisar en cada sitio |
| UC Berkeley (RDI) | MOOC Agentic AI y LLM Agents MOOC (opcionales) | Fall 2025 y Fall 2024 | Revisar en el sitio |
| Cambridge University Press | Mathematics for Machine Learning (Deisenroth, Faisal y Ong) | 2020, PDF gratuito de los autores | Lectura gratuita; revisar los términos en el sitio |
| OWASP Foundation | Top 10 for LLM Applications (OWASP GenAI Security Project) | Edición 2025 | Creative Commons BY-SA |
| LF Projects (Linux Foundation) | Model Context Protocol: especificación, documentación y SDK de Python | Especificación 2026-07-28 | Especificación y código: Apache 2.0; documentación: Creative Commons BY 4.0 |
| OpenTelemetry (CNCF) | Convenciones semánticas para IA generativa | Vigentes | Apache 2.0 |
| Anthropic (empresa) | Documentación de la API, SDK de Python, artículos de ingeniería, cursos de Anthropic Academy | Vigentes | Documentación y cursos gratuitos; la API se paga por uso |
| OpenAI (empresa) | Documentación de la API y SDK de Python | Vigentes | Documentación gratuita; la API se paga por uso |
| Hugging Face (empresa) | LLM Course, Agents Course, artículo How to generate text, documentación de PEFT | Vigentes | Cursos gratuitos; revisar la licencia en cada repositorio |
| Google (empresa) | Machine Learning Crash Course | Vigente | Gratuito; revisar los términos en el sitio |
| PostgreSQL Global Development Group | Documentación de PostgreSQL; pgvector usa la misma licencia | PostgreSQL 18; pgvector 0.8 | PostgreSQL License (permisiva) |
| Proyectos oficiales | Documentación de pytest, mypy, Pydantic, Ruff, uv, HTTPX, FastAPI, psycopg 3, Docker, NumPy, pandas, scikit-learn, pgvector-python, Pro Git | Verificadas el 11/10/2026 | Revisar en cada sitio; Pro Git: Creative Commons BY-NC-SA 3.0 |
| Mozilla y British Council | MDN Web Docs, LearnEnglish | Vigentes | MDN: Creative Commons BY-SA; LearnEnglish: recursos gratuitos, cursos pagos aparte |

Fuentes candidatas que no entraron: Practical Deep Learning for Coders de fast.ai (la última edición publicada es de 2022), Stanford CS324 (la última edición pública es de Winter 2022) y Berkeley Data 100 (demasiado extenso para este perfil; está en el mapa principal).
