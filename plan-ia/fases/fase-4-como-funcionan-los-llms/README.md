# Fase 4 – Cómo funcionan los LLMs

Al terminar esta fase podés explicar qué pasa entre que mandás un prompt y recibís una respuesta: tokens, embeddings, atención, cómo se entrenó el modelo y por qué a veces se equivoca.

- **Plan:** [Fase 4 en el README](../../README.md#fase-4--cómo-funcionan-los-llms)
- **Requisitos:** fase 3.
- **Horas estimadas:** 75

## Fuentes

- [MIT 6.S191 Introduction to Deep Learning](https://introtodeeplearning.com/) (edición 2026), clases 1 y 2 y Software Lab 1
- [Machine Learning Crash Course](https://developers.google.com/machine-learning/crash-course) (Google), módulos [Neural networks](https://developers.google.com/machine-learning/crash-course/neural-networks), [Embeddings](https://developers.google.com/machine-learning/crash-course/embeddings) e [Intro to Large Language Models](https://developers.google.com/machine-learning/crash-course/llm)
- [LLM Course de Hugging Face](https://huggingface.co/learn/llm-course/chapter1/1) (curso de empresa), capítulos 1 y 2 y los algoritmos de tokenización del capítulo 6; [versión en español](https://huggingface.co/learn/llm-course/es/chapter1/1) en progreso
- [Stanford CS224N](https://web.stanford.edu/class/cs224n/) (Winter 2026): diapositivas y apuntes de Word Vectors, Transformers, Pretraining y Post-training
- Documentación de Anthropic: [glosario](https://platform.claude.com/docs/en/about-claude/glossary), [conteo de tokens](https://platform.claude.com/docs/en/build-with-claude/token-counting) y [panorama de modelos](https://platform.claude.com/docs/en/models/overview)
- [How to generate text](https://huggingface.co/blog/how-to-generate) (artículo de Hugging Face sobre estrategias de decodificación)

## Ejercicios

- [ ] 1. Software Lab 1 de MIT 6.S191.
- [ ] 2. Los ejercicios de los módulos Neural networks, Embeddings e Intro to Large Language Models.
- [ ] 3. Los notebooks de los capítulos 1 y 2 del LLM Course; tokenizar el mismo texto en español y en inglés y comparar la cantidad de tokens.
- [ ] 4. Un resumen escrito, con tus palabras, de preentrenamiento, ajuste supervisado y RLHF, a partir de las diapositivas de CS224N.
- [ ] 5. Contar los tokens de un mismo documento con dos modelos y calcular el costo de procesarlo.

## Mini proyecto

Una explicación ilustrada en `proyecto/README.md`, como para alguien que programa pero no sabe de IA, del recorrido de un prompt: tokenización, embeddings, atención, generación token por token y sampling. Agregá un script que muestre los tokens de una frase y los embeddings de tres frases con su similitud coseno (podés usar un modelo abierto pequeño del LLM Course).

## Cómo usar la IA en esta fase

- Usá la IA como compañera de estudio: explicale vos un concepto y pedile que encuentre los errores de tu explicación.
- Pedile analogías distintas para la atención y elegí la que mejor coincida con las diapositivas de CS224N.
- Preguntale cómo funciona ella misma y contrastá cada respuesta con las fuentes: es el mejor ejercicio para aprender a no creerle a ciegas.

## Listo cuando

- [ ] Resolvés los ejercicios de la fase sin mirar la teoría y sin pedirle la solución a una IA.
- [ ] El mini proyecto está en `proyecto/` y el script funciona.
- [ ] Podés explicar sin notas qué es un token, qué es la ventana de contexto y qué cambia la temperatura.
- [ ] Marcaste la fase en el [tracker](../../TRACKER.md).

## Qué va en cada carpeta

- `teoria/`: tus apuntes, escritos con tus palabras como si le explicaras el tema a otra persona.
- `ejercicios/`: tus notebooks y scripts, uno por ejercicio.
- `proyecto/`: el mini proyecto de la fase.

## Navegación

- En el plan: [Fase 4](../../README.md#fase-4--cómo-funcionan-los-llms)
- Avance: [TRACKER.md](../../TRACKER.md)
- Todas las fases: [índice](../README.md)
- Anterior: [Fase 3](../fase-3-datos-y-ml-esencial/) · Siguiente: [Fase 5 – AI Engineering](../fase-5-ai-engineering/)
