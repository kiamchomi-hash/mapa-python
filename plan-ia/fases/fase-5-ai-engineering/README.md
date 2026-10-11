# Fase 5 – AI Engineering

Al terminar esta fase podés construir, evaluar y asegurar aplicaciones sobre modelos de lenguaje: desde una llamada a la API hasta agentes con herramientas expuestas por MCP.

- **Plan:** [Fase 5 en el README](../../README.md#fase-5--ai-engineering)
- **Requisitos:** fases 2 y 4. Un límite de gasto mensual configurado en la consola del proveedor.
- **Horas estimadas:** 240

## Empezá acá

1. **Elegí un proveedor** (Anthropic u OpenAI) y quedate con él toda la fase. Los conceptos se transfieren; cambian los nombres de los parámetros.
2. **Creá una API key** en la consola del proveedor, guardala en una variable de entorno o en un `.env` que esté en `.gitignore`, y fijá un límite de gasto.
3. **Hacé el quickstart** del proveedor: [Get started de Anthropic](https://platform.claude.com/docs/en/get-started) o [Text generation de OpenAI](https://developers.openai.com/api/docs/guides/text).

## Fuentes

Cada tema tiene su fuente en la tabla de la [fase 5 del README](../../README.md#fase-5--ai-engineering). Las principales:

- Documentación de [Anthropic](https://platform.claude.com/docs/en/get-started) o de [OpenAI](https://developers.openai.com/api/docs/guides/text): prompt engineering, salidas estructuradas, herramientas, streaming, prompt caching, embeddings y evals
- [Building with the Claude API](https://academy.claude.com/courses/building-with-the-claude-api) (curso de empresa: Anthropic Academy), como recorrido guiado
- [pgvector](https://github.com/pgvector/pgvector) y [pgvector-python](https://github.com/pgvector/pgvector-python)
- Artículos de ingeniería de Anthropic: [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents), [Writing effective tools for agents](https://www.anthropic.com/engineering/writing-tools-for-agents), [Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) y [Contextual Retrieval](https://www.anthropic.com/engineering/contextual-retrieval)
- [Agents Course de Hugging Face](https://huggingface.co/learn/agents-course/unit0/introduction) (curso de empresa), unidades 1 y 2
- [Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro): [especificación 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28), [tutorial de servidor](https://modelcontextprotocol.io/docs/2026-07-28/develop/build-server) y [SDK de Python](https://github.com/modelcontextprotocol/python-sdk)
- [OWASP Top 10 for LLM Applications 2025](https://genai.owasp.org/llm-top-10/)
- [Convenciones semánticas de OpenTelemetry para IA generativa](https://github.com/open-telemetry/semantic-conventions-genai)
- Opcional: [MOOC Agentic AI de UC Berkeley](https://agenticai-learning.org/f25) (Fall 2025)

## Ejercicios

- [ ] 1. Un chat de terminal con historial y manejo de errores.
- [ ] 2. Cinco versiones de un mismo prompt comparadas sobre los mismos 10 casos.
- [ ] 3. Extracción de datos de 20 documentos reales a modelos de Pydantic, contando cuántos validan.
- [ ] 4. Un asistente que consulta tu base de PostgreSQL de la fase 2 mediante herramientas de solo lectura.
- [ ] 5. Costo y latencia de 50 llamadas con y sin prompt caching, documentados.
- [ ] 6. Un buscador semántico sobre tus apuntes de `teoria/`, con pgvector.
- [ ] 7. Un RAG sobre documentación técnica real que responde citando el fragmento usado.
- [ ] 8. Los ejercicios de las unidades 1 y 2 del Agents Course + un agente propio sin framework, con límite de pasos y de gasto.
- [ ] 9. El tutorial de servidor MCP + un servidor propio con dos herramientas sobre tus datos.
- [ ] 10. Una suite de evals para el RAG que corre con pytest y falla si la calidad baja.
- [ ] 11. Ataques de prompt injection contra tu RAG y tu agente, y una auditoría contra el OWASP Top 10 for LLM Applications.
- [ ] 12. Instrumentación del RAG para registrar tokens, latencia y costo por pedido.

## Mini proyecto

Retomá el clasificador de la fase 3 y resolvé la misma tarea con un LLM y salidas estructuradas. Compará los dos sobre el mismo set de prueba con una suite de evals: calidad, costo por pedido y latencia. Documentá en `proyecto/README.md` cuál elegirías en producción y por qué.

## Cómo usar la IA en esta fase

- Acá la IA te va a escribir mucho código, y está bien, siempre que la primera versión de cada patrón (el ciclo de herramientas, el pipeline de RAG, el servidor MCP) la escribas vos a partir de la documentación oficial.
- Antes de aceptar código que llame a una API de modelos, verificá en la documentación oficial cada parámetro y cada nombre de modelo: es donde las IA más inventan.
- Usá la IA para generar casos de prueba para tus evals, y revisalos uno por uno antes de usarlos.
- Probá tus propios sistemas como un atacante: pedile a la IA ideas de prompt injection y comprobá si tus defensas aguantan.

## Listo cuando

- [ ] Resolvés los ejercicios de la fase sin mirar la teoría y sin pedirle la solución a una IA.
- [ ] El mini proyecto está en `proyecto/` y sus evals corren con un solo comando.
- [ ] Podés explicar cuándo usar un flujo fijo y cuándo un agente, y cuánto cuesta cada pedido de tus sistemas.
- [ ] Ninguna API key quedó en el historial de Git.
- [ ] Marcaste la fase en el [tracker](../../TRACKER.md).

## Qué va en cada carpeta

- `teoria/`: tus apuntes, escritos con tus palabras como si le explicaras el tema a otra persona.
- `ejercicios/`: un proyecto o carpeta por ejercicio.
- `proyecto/`: el mini proyecto de la fase.

## Navegación

- En el plan: [Fase 5](../../README.md#fase-5--ai-engineering)
- Avance: [TRACKER.md](../../TRACKER.md)
- Todas las fases: [índice](../README.md)
- Anterior: [Fase 4](../fase-4-como-funcionan-los-llms/) · Siguiente: [Fase 6 – Portfolio y empleo](../fase-6-portfolio-y-empleo/)
