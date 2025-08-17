# Oriol's Blog - Next.js Migration

Este es el nuevo proyecto de migración del blog de Oriol desde Frontity a Next.js con Tailwind CSS.

## Tecnologías utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Para tipado estático
- **Tailwind CSS** - Para estilos y diseño responsive
- **WordPress API** - Como headless CMS
- **Server-Side Rendering** - Para mejor SEO y performance

## Estructura del proyecto

```
next-blog/
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Página de inicio
│   │   ├── posts/[slug]/    # Páginas de posts dinámicas
│   │   ├── about/           # Página "Sobre mí"
│   │   └── contact/         # Página de contacto
│   ├── components/          # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PostCard.tsx
│   ├── lib/                 # Utilidades y configuración
│   │   └── wordpress.ts     # Cliente de WordPress API
│   └── types/               # Tipos de TypeScript
│       └── wordpress.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Comandos disponibles

```bash
# Desarrollo
npm run dev

# Compilar para producción
npm run build

# Servir versión de producción
npm start

# Linting
npm run lint

# Verificación de tipos
npm run type-check
```

## Instalación

1. Instalar dependencias:
```bash
cd next-blog
npm install
```

2. Configurar variables de entorno:
```bash
cp .env.example .env.local
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

## Migración desde Frontity

Este proyecto mantiene la misma funcionalidad que el proyecto Frontity original:

- **API de WordPress**: Conecta al mismo endpoint `https://wp.oriol.im/wp-json`
- **Rutas**: Mantiene la estructura de URLs `/about/`, `/contact/`, `/posts/[slug]`
- **SEO**: Server-side rendering para mejor indexación
- **Responsive**: Diseño adaptable con Tailwind CSS

## Próximos pasos

- [ ] Migrar estilos específicos del tema Mars
- [ ] Implementar funcionalidad de búsqueda
- [ ] Añadir paginación
- [ ] Configurar sitemap automático
- [ ] Optimizar imágenes con next/image
- [ ] Añadir modo oscuro
- [ ] Implementar RSS feed