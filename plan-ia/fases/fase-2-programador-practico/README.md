# Fase 2 – Programador práctico

Al terminar esta fase podés construir y publicar una API probada, tipada y versionada, con base de datos y en un contenedor.

- **Plan:** [Fase 2 en el README](../../README.md#fase-2--programador-práctico)
- **Requisitos:** fase 1.
- **Horas estimadas:** 160

## Fuentes

- [Harvard CS50P](https://cs50.harvard.edu/python/), semanas 4, 5 y 8, y el [Tutorial oficial: clases](https://docs.python.org/es/3/tutorial/classes.html)
- [Documentación de pytest](https://docs.pytest.org/) y de [`unittest.mock`](https://docs.python.org/3/library/unittest.mock.html)
- Documentación de [`typing`](https://docs.python.org/3/library/typing.html), [mypy](https://mypy.readthedocs.io/en/stable/) y [Pydantic](https://pydantic.dev/docs/)
- [Writing your pyproject.toml](https://packaging.python.org/en/latest/guides/writing-pyproject-toml/), [documentación de uv](https://docs.astral.sh/uv/) y [de Ruff](https://docs.astral.sh/ruff/)
- [MIT Missing Semester](https://missing.csail.mit.edu/2026/): clases [Packaging and Shipping Code](https://missing.csail.mit.edu/2026/shipping-code/) y [Code Quality](https://missing.csail.mit.edu/2026/code-quality/)
- [Pro Git](https://git-scm.com/book/es/v2) (en español), capítulos 2 y 3
- [MDN Web Docs: HTTP](https://developer.mozilla.org/es/docs/Web/HTTP), [documentación de HTTPX](https://www.python-httpx.org/) y de [`asyncio`](https://docs.python.org/3/library/asyncio.html)
- [Tutorial oficial de FastAPI](https://fastapi.tiangolo.com/tutorial/)
- [Tutorial oficial de PostgreSQL 18](https://www.postgresql.org/docs/current/tutorial.html) y [documentación de psycopg 3](https://www.psycopg.org/psycopg3/docs/)
- [Guía oficial de Docker](https://docs.docker.com/get-started/) y [documentación de Compose](https://docs.docker.com/compose/)

## Ejercicios

- [ ] 1. CS50P: Problem Sets 4, 5 y 8.
- [ ] 2. Tests con pytest para los ejercicios de la fase 1, con al menos un mock.
- [ ] 3. Type hints en tus programas de la fase 1, con mypy sin errores; un modelo de Pydantic para el JSON de una API pública.
- [ ] 4. Ejercicios de Packaging and Shipping Code y Code Quality; un paquete propio con `uv` y `ruff` sin avisos.
- [ ] 5. Cada ejercicio de esta fase en su propia rama, con pull request.
- [ ] 6. Un cliente con HTTPX para una API pública, secuencial y con `asyncio`, con timeouts y reintentos.
- [ ] 7. El tutorial completo de FastAPI.
- [ ] 8. Los ejemplos del tutorial de PostgreSQL y 20 consultas propias.
- [ ] 9. Contenerizar una API con PostgreSQL usando Docker Compose.

## Mini proyecto

El proyecto integrador: una API con FastAPI y PostgreSQL (por ejemplo, para guardar y buscar tus apuntes), con psycopg 3 y consultas parametrizadas, tests con pytest, type hints, `ruff` sin avisos, y todo levantado con Docker Compose. Es la base del proyecto 3 de la fase 6.

## Cómo usar la IA en esta fase

- Escribí a mano los primeros tests, el primer `Dockerfile` y el primer `pyproject.toml`. Después de eso, podés pedirle a la IA que genere los siguientes y revisarlos.
- Usala como revisora de pull requests: abrí el PR, pedile una revisión y respondé cada comentario como lo harías con una persona.
- Contrastá con la documentación oficial cada opción que te sugiera para FastAPI, psycopg o Docker; las versiones cambian rápido.
- Nunca le pegues una API key ni el contenido de tu `.env`.

## Listo cuando

- [ ] Resolvés los ejercicios de la fase sin mirar la teoría y sin pedirle la solución a una IA.
- [ ] El mini proyecto está en `proyecto/` y `docker compose up` lo levanta.
- [ ] `ruff check`, `mypy` y `pytest` pasan sin errores.
- [ ] Podés explicar cada línea del proyecto, incluido el código que te ayudó a escribir una IA.
- [ ] Marcaste la fase en el [tracker](../../TRACKER.md).

## Qué va en cada carpeta

- `teoria/`: tus apuntes, escritos con tus palabras como si le explicaras el tema a otra persona.
- `ejercicios/`: tus soluciones, un archivo o carpeta por ejercicio.
- `proyecto/`: el proyecto integrador.

## Navegación

- En el plan: [Fase 2](../../README.md#fase-2--programador-práctico)
- Avance: [TRACKER.md](../../TRACKER.md)
- Todas las fases: [índice](../README.md)
- Anterior: [Fase 1](../fase-1-fundamentos-de-python/) · Siguiente: [Fase 3 – Datos y ML esencial](../fase-3-datos-y-ml-esencial/)
