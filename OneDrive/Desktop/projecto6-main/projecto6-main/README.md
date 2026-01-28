# 🎸 Proyecto de Guitarras - Arquitectura Monorepo

Este proyecto está organizado en dos carpetas principales:

## 📁 Estructura

```
proyecto7/
├── backend/              # API Express.js
│   ├── src/
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── frontend/             # React + Vite
    ├── src/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── .env
```

## 🚀 Configuración

### Backend (Puerto 3000)

1. Navega a la carpeta backend:
```bash
cd backend
```

2. Instala dependencias:
```bash
npm install
```

3. Crea un archivo `.env`:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/dwfs-crud
SECRET=tu_secret_key
STRIPE_KEY=tu_stripe_key
STRIPE_SUCCESS_URL=http://localhost:5173/pago-exitoso
STRIPE_CANCEL_URL=http://localhost:5173/pago-cancelado
```

4. Inicia el servidor:
```bash
npm run dev
```

### Frontend (Puerto 5173)

1. En otra terminal, navega a la carpeta frontend:
```bash
cd frontend
```

2. Instala dependencias:
```bash
npm install
```

3. Crea un archivo `.env` (ya existe):
```env
VITE_BACKEND_URL=http://localhost:3000
```

4. Inicia el servidor Vite:
```bash
npm run dev
```

## ✅ Verificar que todo funciona

- Backend: http://localhost:3000
- Frontend: http://localhost:5173

## 📦 Tecnologías

**Backend:**
- Express.js
- MongoDB + Mongoose
- JWT para autenticación
- Stripe para pagos
- bcryptjs para contraseñas

**Frontend:**
- React 18
- Vite
- React Router
- Axios
- Tailwind CSS

## 🔐 Variables de Entorno Necesarias

Ambas carpetas tienen sus propios archivos `.env` que necesitan ser configurados adecuadamente antes de ejecutar.
