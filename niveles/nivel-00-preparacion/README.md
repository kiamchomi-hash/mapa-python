# Nivel 0 – Preparación

Al terminar este nivel podés trabajar desde la terminal con Python 3.15, un entorno virtual y Git, y guardar tu avance con commits.

- **Etapa:** [Etapa 1 – Fundamentos](../../README.md#etapa-1--fundamentos-niveles-05)
- **Requisitos:** ninguno. Empezá por la guía de abajo.
- **Horas estimadas:** 15

## Empezá acá

Estos pasos dejan listo tu equipo y tu repositorio. Los comandos son para Linux; en macOS funcionan igual en la Terminal.

1. **Abrí una terminal.** En Windows, instalá primero Linux dentro de Windows con [WSL](https://learn.microsoft.com/windows/wsl/install): abrí PowerShell como administrador, ejecutá `wsl --install`, reiniciá y hacé todo lo que sigue dentro de la terminal de Ubuntu.
2. **Instalá uv**, el gestor de Python y de entornos que usa el mapa ([instrucciones oficiales](https://docs.astral.sh/uv/getting-started/installation/)). Después cerrá y volvé a abrir la terminal.
   ```bash
   curl -LsSf https://astral.sh/uv/install.sh | sh
   uv --version
   ```
3. **Instalá Python 3.15** con uv ([guía oficial](https://docs.astral.sh/uv/guides/install-python/)):
   ```bash
   uv python install 3.15
   ```
4. **Creá tu copia del mapa.** Hacé un fork de [este repositorio](https://github.com/kiamchomi-hash/mapa-python) en GitHub y clonalo. Si preferís un repositorio propio desde cero, creá una carpeta y ejecutá `git init` adentro.
   ```bash
   git clone https://github.com/TU-USUARIO/mapa-python.git
   cd mapa-python
   ```
5. **Creá y activá un entorno virtual**, y comprobá la versión. Agregá `.venv/` a `.gitignore` para no subirlo al repositorio.
   ```bash
   uv venv --python 3.15
   source .venv/bin/activate
   python --version
   echo ".venv/" >> .gitignore
   ```
6. **Configurá tu identidad en Git** (una sola vez por equipo):
   ```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu@email.com"
   ```
7. **Hacé tu primer commit.** Creá `hola.py` en `ejercicios/` de este nivel, ejecutalo y guardalo:
   ```bash
   echo 'print("Hola, Python 3.15")' > niveles/nivel-00-preparacion/ejercicios/hola.py
   python niveles/nivel-00-preparacion/ejercicios/hola.py
   git add .gitignore niveles/nivel-00-preparacion/ejercicios/hola.py
   git commit -m "Agrega mi primer programa"
   git log --oneline
   ```

Con esto listo, seguí con las fuentes y los ejercicios de abajo.

## Fuentes

- [Tutorial oficial en español](https://docs.python.org/es/3/tutorial/)
- [Python Packaging User Guide](https://packaging.python.org/)
- [MIT Missing Semester](https://missing.csail.mit.edu/2026/) (edición 2026): clases de shell y de [control de versiones con Git](https://missing.csail.mit.edu/2026/version-control/)

## Ejercicios

- [ ] 1. Ejercicios de la clase [Course Overview + Introduction to the Shell](https://missing.csail.mit.edu/2026/course-shell/) de Missing Semester.
- [ ] 2. Ejercicios de la clase Version Control and Git de Missing Semester.
- [ ] 3. Crear el repositorio del plan y hacer los primeros commits (pasos 4 a 7 de la guía).

## Mini proyecto

Un `README.md` en `proyecto/` de este nivel que cuente tu plan de estudio (horas por semana, fecha de inicio y meta), guardado con al menos tres commits con mensajes claros.

## Listo cuando

- [ ] Resolvés los ejercicios del nivel sin mirar la teoría (la regla de avance del mapa).
- [ ] El mini proyecto está en `proyecto/` y funciona.
- [ ] `python --version` muestra Python 3.15 dentro del entorno virtual.
- [ ] `git log` muestra tus primeros commits.
- [ ] Marcaste el nivel en el [tracker](../../TRACKER.md).

## Qué va en cada carpeta

- `teoria/`: tus apuntes, escritos con tus palabras como si le explicaras el tema a otra persona.
- `ejercicios/`: tus soluciones, un archivo por ejercicio.
- `proyecto/`: el mini proyecto del nivel.

## Navegación

- En el mapa: [Etapa 1 – Fundamentos](../../README.md#etapa-1--fundamentos-niveles-05)
- Avance: [TRACKER.md](../../TRACKER.md)
- Todos los niveles: [índice](../README.md)
- Después de este nivel, según el orden recomendado: [Nivel 1 – Primeros pasos](../nivel-01-primeros-pasos/)
