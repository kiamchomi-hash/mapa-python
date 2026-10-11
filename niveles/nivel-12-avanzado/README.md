# Nivel 12 – Avanzado

Al terminar este nivel podés escribir Python tipado, concurrente y medido: type hints con chequeo estricto, `threading`, `multiprocessing`, `asyncio` y profiling.

- **Etapa:** [Etapa 3 – Python avanzado](../../README.md#etapa-3--python-avanzado-niveles-1113)
- **Requisitos:** nivel 11.
- **Horas estimadas:** 60

## Fuentes

- Documentación oficial de [`typing`](https://docs.python.org/3/library/typing.html) y [`asyncio`](https://docs.python.org/3/library/asyncio.html)
- [Documentación de mypy](https://mypy.readthedocs.io/en/stable/) o de [Pyright](https://microsoft.github.io/pyright/)
- [What's New in 3.15](https://docs.python.org/3/whatsnew/3.15.html)

## Ejercicios

- [ ] 1. Pasar mypy en modo `--strict` (o Pyright en modo estricto) sobre los proyectos de los niveles 8–10.
- [ ] 2. Reescribir un descargador secuencial con `threading`, `multiprocessing` y `asyncio`, y comparar las tres versiones con `timeit` y `profiling`.
- [ ] 3. Ejercicios de clases y dataclasses de Exercism.

## Mini proyecto

El descargador del ejercicio 2, empaquetado y tipado, con un informe en su README que compare las tres versiones y explique cuándo conviene cada una.

"Diseño de software a fondo" (MIT 6.102, clases 10–19, 90 h) también es parte de la Etapa 3; su trabajo va en `proyecto/` del [nivel 10](../nivel-10-diseno-de-software/).

## Listo cuando

- [ ] Resolvés los ejercicios del nivel sin mirar la teoría (la regla de avance del mapa).
- [ ] El mini proyecto está en `proyecto/` y funciona.
- [ ] mypy `--strict` (o Pyright estricto) pasa sin errores en el proyecto.
- [ ] Marcaste el nivel en el [tracker](../../TRACKER.md).

## Qué va en cada carpeta

- `teoria/`: tus apuntes, escritos con tus palabras como si le explicaras el tema a otra persona.
- `ejercicios/`: tus soluciones, un archivo por ejercicio.
- `proyecto/`: el mini proyecto del nivel.

## Navegación

- En el mapa: [Etapa 3 – Python avanzado](../../README.md#etapa-3--python-avanzado-niveles-1113)
- Avance: [TRACKER.md](../../TRACKER.md)
- Todos los niveles: [índice](../README.md)
- Después de este nivel, según el orden recomendado: [Nivel 13 – Especialización (automatización, datos e IA)](../nivel-13-especializacion/)
