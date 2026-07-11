# lucianoarossa.com — Portfolio

Portfolio técnico personal de Luciano Arossa. Sitio 100% estático construido con **Astro 7**, sin JavaScript de cliente, sin trackers ni cookies.

## Idiomas

- Inglés (principal): `/`
- Español: `/es/`

Routing i18n nativo de Astro (`i18n` en `astro.config.mjs`). Todos los textos viven en [src/i18n/ui.ts](src/i18n/ui.ts): para editar contenido (experiencia, proyectos, bio) solo hay que tocar ese archivo.

## Comandos

| Comando           | Acción                                    |
| ----------------- | ----------------------------------------- |
| `npm install`     | Instala dependencias                      |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Build de producción en `./dist/`          |
| `npm run preview` | Previsualiza la build                     |

## Estructura

```
src/
├── i18n/ui.ts              # Diccionario EN/ES + datos (experiencia, proyectos, enlaces)
├── layouts/Base.astro      # <head>, SEO, hreflang, fuentes, tokens de diseño
├── components/Portfolio.astro  # Página completa (recibe lang como prop)
└── pages/
    ├── index.astro         # EN
    └── es/index.astro      # ES
```

## Despliegue

Es un sitio estático: sube `dist/` a cualquier hosting (Cloudflare Pages, Netlify, Vercel, GitHub Pages). Build command: `npm run build`, output: `dist`.
