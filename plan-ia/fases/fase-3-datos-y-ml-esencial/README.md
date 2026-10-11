# Fase 3 – Datos y ML esencial

Al terminar esta fase entendés qué es un modelo, cómo se entrena y cómo se evalúa, y manejás los vectores que vas a usar en la búsqueda semántica.

- **Plan:** [Fase 3 en el README](../../README.md#fase-3--datos-y-ml-esencial)
- **Requisitos:** fase 2.
- **Horas estimadas:** 90

## Fuentes

- [Mathematics for Machine Learning](https://mml-book.github.io/) (Cambridge University Press, PDF gratuito): primeras secciones de los capítulos 2, 3 y 6
- [NumPy: the absolute basics for beginners](https://numpy.org/doc/stable/user/absolute_beginners.html)
- [Getting started de pandas](https://pandas.pydata.org/docs/getting_started/index.html)
- [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) (curso de empresa: Google), módulos ML Models, Data y Real-world ML
- [Getting Started de scikit-learn](https://scikit-learn.org/stable/getting_started.html) y las guías de [evaluación de modelos](https://scikit-learn.org/stable/modules/model_evaluation.html) y [validación cruzada](https://scikit-learn.org/stable/modules/cross_validation.html)

## Ejercicios

- [ ] 1. Ejercicios de Mathematics for Machine Learning sobre lo leído de los capítulos 2, 3 y 6.
- [ ] 2. Similitud coseno en Python puro y después vectorizada con NumPy, comparando tiempos.
- [ ] 3. Un análisis de un dataset real con pandas.
- [ ] 4. Los ejercicios interactivos de los módulos indicados de Machine Learning Crash Course.
- [ ] 5. Un clasificador de scikit-learn evaluado con validación cruzada, con precisión, recall, F1 y matriz de confusión.

## Mini proyecto

Un clasificador de textos cortos (por ejemplo, mensajes de soporte por categoría) con scikit-learn, y un informe en `proyecto/README.md` que explique las métricas, qué errores comete y por qué elegiste cada métrica. Guardá el set de prueba: en la fase 5 vas a comparar este modelo con un LLM sobre los mismos casos.

## Cómo usar la IA en esta fase

- Pedile que te explique la intuición geométrica de cada concepto (producto punto, ángulo, similitud) y después comprobala con tus propios números en NumPy.
- Pedile ejercicios extra de probabilidad y de métricas con solución separada, y resolvelos antes de mirar la solución.
- Pedile que critique tu informe de métricas como si fuera un revisor exigente.
- No le pidas el análisis de pandas hecho: el valor está en hacer vos las preguntas a los datos.

## Listo cuando

- [ ] Resolvés los ejercicios de la fase sin mirar la teoría y sin pedirle la solución a una IA.
- [ ] El mini proyecto está en `proyecto/` y funciona.
- [ ] Podés explicar sin notas qué es la similitud coseno y qué miden precisión y recall.
- [ ] Marcaste la fase en el [tracker](../../TRACKER.md).

## Qué va en cada carpeta

- `teoria/`: tus apuntes, escritos con tus palabras como si le explicaras el tema a otra persona.
- `ejercicios/`: tus soluciones y notebooks, un archivo por ejercicio.
- `proyecto/`: el mini proyecto de la fase.

## Navegación

- En el plan: [Fase 3](../../README.md#fase-3--datos-y-ml-esencial)
- Avance: [TRACKER.md](../../TRACKER.md)
- Todas las fases: [índice](../README.md)
- Anterior: [Fase 2](../fase-2-programador-practico/) · Siguiente: [Fase 4 – Cómo funcionan los LLMs](../fase-4-como-funcionan-los-llms/)
