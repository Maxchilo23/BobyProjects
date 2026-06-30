# TuMarca Software — Landing Page

Página web corporativa para un negocio de desarrollo de software dirigido a micro y medianas empresas (MyPEs). Presenta los servicios, portafolio y un canal directo de contacto por WhatsApp.

## Tabla de contenidos

1. [Descripción general](#descripción-general)
2. [Tecnologías utilizadas](#tecnologías-utilizadas)
3. [Requisitos previos](#requisitos-previos)
4. [Instalación](#instalación)
5. [Scripts disponibles](#scripts-disponibles)
6. [Estructura del proyecto](#estructura-del-proyecto)
7. [Cómo funciona la app](#cómo-funciona-la-app)
8. [Sistema de diseño](#sistema-de-diseño)
9. [Cómo modificar el contenido](#cómo-modificar-el-contenido)
10. [Cómo agregar una nueva página](#cómo-agregar-una-nueva-página)
11. [Animaciones e interactividad](#animaciones-e-interactividad)
12. [Despliegue (deploy)](#despliegue-deploy)
13. [Buenas prácticas y escalabilidad](#buenas-prácticas-y-escalabilidad)
14. [Preguntas frecuentes](#preguntas-frecuentes)

---

## Descripción general

Esta es una landing page de una sola aplicación (Single Page Application) construida con **React** y **Vite**, con navegación entre secciones mediante **React Router**. El objetivo del sitio es:

- Comunicar claramente los servicios de software que se ofrecen.
- Mostrar un portafolio de proyectos reales.
- Generar contacto directo por WhatsApp, que es el canal de conversión principal.

El sitio está dividido en **secciones reutilizables** (Hero, Servicios, Portafolio, Proceso, Preguntas frecuentes, Contacto) que se combinan en distintas páginas (Inicio, Servicios, Portafolio, Contacto).

## Tecnologías utilizadas

| Tecnología | Para qué se usa |
|---|---|
| **React** | Construcción de la interfaz mediante componentes |
| **Vite** | Herramienta de desarrollo y empaquetado (más rápido que Create React App) |
| **React Router** | Navegación entre páginas sin recargar el navegador |
| **CSS Modules** | Estilos encapsulados por componente, evita conflictos de clases |
| **lucide-react** | Librería de iconos SVG profesionales |
| **Canvas API (nativo)** | Animación de nodos interactivos en el Hero |

No se usa ningún framework de CSS (como Bootstrap o Tailwind); todo el diseño está hecho con CSS puro organizado por variables, para mantener control total sobre el estilo.

## Requisitos previos

Antes de instalar el proyecto, necesitas tener instalado:

- **Node.js** versión 18 o superior ([descargar aquí](https://nodejs.org))
- **npm** (se instala automáticamente junto con Node.js)
- Un editor de código, recomendado **Visual Studio Code**

Para verificar que tienes Node.js instalado, abre una terminal y escribe:

```bash
node -v
npm -v
```

Si ambos comandos devuelven un número de versión, estás listo.

## Instalación

1. Clona o descarga el proyecto en tu computadora.
2. Abre una terminal dentro de la carpeta del proyecto.
3. Instala las dependencias:

```bash
npm install
```

Esto descarga todas las librerías que el proyecto necesita (React, React Router, lucide-react, etc.) y las guarda en una carpeta llamada `node_modules` (no se sube a Git, se regenera con este comando).

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre tu navegador en la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

## Scripts disponibles

Estos comandos se ejecutan desde la terminal, dentro de la carpeta del proyecto:

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta el servidor local de desarrollo con recarga automática |
| `npm run build` | Genera la versión final optimizada del sitio, lista para publicar (carpeta `dist/`) |
| `npm run preview` | Permite ver cómo se verá el sitio ya compilado (`build`) antes de subirlo |

## Estructura del proyecto

```
mi-software-landing/
├── public/
│   └── images/              → Imágenes estáticas (logo, capturas de portafolio)
├── src/
│   ├── components/
│   │   ├── layout/          → Elementos que se repiten en todas las páginas (Navbar, Footer)
│   │   ├── ui/               → Piezas reutilizables pequeñas (Button, Card, SectionTitle)
│   │   └── sections/        → Bloques grandes de contenido (Hero, Servicios, Portafolio...)
│   ├── data/                 → Contenido del sitio en archivos .js (servicios, portafolio, preguntas)
│   ├── hooks/                 → Funciones reutilizables de lógica (ej. animación al hacer scroll)
│   ├── pages/                 → Páginas reales del sitio, combinan varias "sections"
│   ├── styles/                → Variables de color/tipografía, reset y estilos globales
│   ├── App.jsx                → Componente raíz, conecta el router
│   ├── main.jsx                → Punto de entrada de la aplicación
│   └── router.jsx              → Define las rutas/URLs del sitio
├── index.html                  → Archivo HTML base donde se inyecta React
└── package.json                 → Lista de dependencias y scripts del proyecto
```

### ¿Por qué está organizado así?

La estructura separa el proyecto en capas según su responsabilidad, para que crecer el sitio (agregar páginas, servicios o secciones) sea simple y no obligue a tocar código ya existente:

- **`ui/`** contiene piezas mínimas y genéricas (un botón, una tarjeta) que se usan en muchos lugares distintos.
- **`sections/`** contiene bloques de contenido específicos del negocio (ej. "Sección de Servicios"), construidos a partir de las piezas de `ui/`.
- **`pages/`** combina varias `sections` para formar una página completa con una URL propia.
- **`data/`** separa el contenido (textos, listas de servicios, preguntas frecuentes) del código visual. Esto permite editar el contenido del sitio sin tocar componentes, y en el futuro conectar esa data a una API o panel de administración sin reescribir nada.

## Cómo funciona la app

### 1. Punto de entrada

Todo arranca en `src/main.jsx`, que monta el componente `App` dentro del HTML (`index.html`) e importa los estilos globales (`reset.css`, `variables.css`, `global.css`).

### 2. Enrutamiento

`src/App.jsx` simplemente renderiza el `RouterProvider`, que usa la configuración definida en `src/router.jsx`. Ahí se define qué componente de página se muestra según la URL:

```
/             → Home.jsx
/servicios    → Services.jsx
/portafolio   → Portfolio.jsx
/contacto     → Contact.jsx
```

Todas las rutas comparten el mismo `Layout.jsx`, que envuelve cada página con el `Navbar` arriba y el `Footer` abajo. El `<Outlet />` dentro de `Layout.jsx` es el espacio donde React Router inserta la página activa.

### 3. Páginas y secciones

Cada archivo dentro de `pages/` no contiene diseño propio: solo importa y ordena componentes de `sections/`. Por ejemplo, `Home.jsx` muestra el Hero, luego Problemas, luego Servicios, y así sucesivamente. Esto permite reordenar o quitar secciones de una página con un cambio de una sola línea.

### 4. Flujo de datos

Componentes como `ServicesSection` o `PortfolioSection` importan listas de información desde `src/data/`. Esos archivos `.js` exportan arreglos de objetos (`services`, `portfolio`, `faq`) que luego se recorren con `.map()` para generar las tarjetas en pantalla. Si quieres agregar un nuevo servicio o proyecto al portafolio, solo editas esos archivos, nunca el componente visual.

### 5. Navegación

El `Navbar` usa el componente `<Link>` de React Router en lugar de etiquetas `<a>` normales, lo que permite cambiar de página sin recargar el navegador (más rápido y sin parpadeos). El botón de WhatsApp sí usa un enlace normal (`<a>`), porque apunta a una dirección externa.

## Sistema de diseño

Todos los valores visuales (colores, tipografía, espaciados) están centralizados en `src/styles/variables.css`, usando **variables CSS** (`--color-primary`, `--font-heading`, etc.). Esto significa que para cambiar el color principal de todo el sitio, solo se edita un valor en un solo archivo, en lugar de buscar y reemplazar en decenas de componentes.

| Variable | Uso |
|---|---|
| `--color-bg-dark` | Fondo oscuro (usado en el Hero) |
| `--color-primary` | Color de marca (índigo), usado en botones y acentos |
| `--color-accent` | Color de llamado a la acción (ámbar), usado en el botón de WhatsApp |
| `--font-heading` | Tipografía de títulos (Sora) |
| `--font-body` | Tipografía de texto (Inter) |

Cada componente tiene su propio archivo `.module.css` (CSS Modules), lo que significa que las clases de un componente nunca chocan con las de otro, aunque tengan el mismo nombre (ej. `.title` en `Hero.module.css` no afecta a `.title` en `Card.module.css`).

## Cómo modificar el contenido

No necesitas tocar componentes para cambiar textos o información. Edita directamente los archivos dentro de `src/data/`:

- **`services.js`** → lista de servicios mostrados en la sección "Lo que hacemos".
- **`portfolio.js`** → proyectos mostrados en el portafolio (título, descripción, imagen, tecnologías).
- **`faq.js`** → preguntas y respuestas frecuentes.

Para cambiar el número de WhatsApp, busca todas las apariciones de `https://wa.me/51900000000` en el proyecto (aparece en `Hero.jsx`, `ContactSection.jsx` y `Footer.jsx`) y reemplázalas por tu número real, en formato `51XXXXXXXXX` (código de país + número, sin signos ni espacios).

Para cambiar imágenes del portafolio, coloca tus capturas en `public/images/portfolio/` y actualiza la ruta correspondiente en `data/portfolio.js`.

## Cómo agregar una nueva página

1. Crea el archivo de la página en `src/pages/`, por ejemplo `Blog.jsx`.
2. Constrúyela combinando secciones existentes o creando una nueva en `src/components/sections/`.
3. Agrega la ruta en `src/router.jsx`:

```jsx
{ path: 'blog', element: <Blog /> }
```

4. Agrega el enlace correspondiente en `src/components/layout/Navbar/Navbar.jsx`.

## Animaciones e interactividad

- **Malla de nodos en el Hero**: implementada con la API nativa de Canvas en `Hero.jsx`. Dibuja puntos que se mueven lentamente y se conectan con líneas cuando están cerca entre sí; además reaccionan suavemente a la posición del cursor.
- **Aparición al hacer scroll**: el hook `src/hooks/useScrollReveal.js` usa `IntersectionObserver`, una API del navegador que detecta cuándo un elemento entra en la pantalla, para activar una animación de aparición (`opacity` + `transform`) en las secciones.
- **Interacciones de botones y tarjetas**: definidas con transiciones CSS (`transition`) en los archivos `.module.css` correspondientes, sin necesidad de JavaScript adicional.

## Despliegue (deploy)

El proyecto está listo para publicarse en servicios como **Vercel** o **Netlify**, ideales para proyectos de Vite/React:

1. Sube el proyecto a un repositorio de GitHub.
2. Conecta el repositorio en Vercel o Netlify.
3. Configura el comando de build como `npm run build` y la carpeta de salida como `dist`.
4. El sitio quedará publicado con una URL pública automáticamente.

## Buenas prácticas y escalabilidad

- El contenido (`data/`) está separado del diseño (`components/`), facilitando que en el futuro se conecte a una API o panel de administración.
- Los componentes de `ui/` son genéricos y reutilizables; antes de crear un componente nuevo, revisa si ya existe uno similar.
- Cada nueva sección debe seguir el mismo patrón: un archivo `.jsx` + su `.module.css` en la misma carpeta.
- Evita escribir estilos directamente en los componentes (`style={{ }}`); todo estilo va en su archivo `.module.css` correspondiente.
- Los colores y tipografías nunca deben escribirse "a mano" (ej. `color: #5B5FEF`), siempre se usan las variables definidas en `variables.css`.

## Preguntas frecuentes

**¿Por qué no veo cambios después de editar un archivo?**
Verifica que el servidor de desarrollo (`npm run dev`) siga corriendo en la terminal. Vite recarga automáticamente, pero si lo cerraste, debes ejecutar el comando de nuevo.

**¿Puedo agregar más iconos?**
Sí. Todos los iconos provienen de la librería `lucide-react`. Puedes buscar el nombre del icono que necesitas en [lucide.dev/icons](https://lucide.dev/icons) e importarlo igual que los demás.

**¿Qué pasa si rompo algo y no sé cómo arreglarlo?**
Si usas Git, puedes revisar el historial de cambios (`git log` y `git diff`) para ver exactamente qué se modificó y revertirlo si es necesario.

**¿Necesito saber backend para que esta página funcione?**
No. Esta landing page es completamente frontend (no tiene base de datos ni servidor propio); el "backend" del contacto es, por ahora, el enlace directo a WhatsApp.
