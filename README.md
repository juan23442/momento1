# TurnosPlus MVP Starter

Proyecto base en Node.js + Express para el desarrollo del MVP de TurnosPlus.

## 📋 Descripción

Este es un proyecto starter que incluye:
- Servidor Express configurado
- Middleware CORS habilitado
- Variables de entorno
- Ruta de verificación de salud (`/health`)
- Configuración para desarrollo con nodemon

## 🔧 Requisitos

- **Node.js** v16 o superior
- **npm** v8 o superior
- **Git** v2.0 o superior

Verificar versiones:
```bash
node -v
npm -v
git --version
```

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tuusuario/turnosplus-mvp-starter.git
cd turnosplus-mvp-starter
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
```bash
cp .env.example .env
```

## ▶️ Ejecución

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm start
```

El servidor se ejecutará en `http://localhost:3000`

## 🔍 Rutas de prueba

### Ruta principal
- **URL:** `http://localhost:3000/`
- **Método:** GET
- **Respuesta:** `{ "message": "Bienvenido a la API base" }`

### Ruta de verificación de salud
- **URL:** `http://localhost:3000/health`
- **Método:** GET
- **Respuesta:** `{ "status": "ok", "timestamp": "2024-XX-XXTXX:XX:XX.XXXZ" }`

## 📜 Scripts disponibles

- `npm run dev` - Ejecutar en modo desarrollo (con nodemon)
- `npm start` - Ejecutar en modo producción
- `npm test` - Ejecutar pruebas (no implementado aún)

## 📁 Estructura del proyecto

```
turnosplus-mvp-starter/
├── src/
│   ├── routes/
│   │   └── health.js
│   └── index.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🧑‍💻 Desarrollo

Este proyecto está configurado con:
- **ESLint** para análisis de código
- **Prettier** para formateo de código
- **Nodemon** para reinicio automático en desarrollo

## 📝 Licencia

ISC