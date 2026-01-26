# Labor Stats API & Dashboard

Aplicación full-stack para la **consulta y visualización de estadísticas del mercado laboral**
utilizando **datos públicos oficiales de Eurostat (Unión Europea)**.

El proyecto consta de:
- **Backend**: API REST en Node.js que consume datos reales de Eurostat
- **Frontend**: Aplicación React que permite consultar, visualizar y analizar los datos mediante gráficos interactivos

## 🚀 Funcionalidades

### Backend (API REST)
- Consulta de **tasa de desempleo por país y año**
- Consulta de **serie temporal completa** de desempleo
- Consumo de datos oficiales desde Eurostat
- Arquitectura modular (routes, controllers, services)
- Manejo de errores y validaciones
- CORS habilitado para consumo desde frontend

### Frontend (React)
- Formulario de búsqueda por país y año
- Visualización del dato puntual de desempleo
- Gráfica de evolución histórica (serie temporal)
- Diseño responsive (desktop y móvil)
- Estilos modernos y claros
- Comunicación directa con la API REST


## 🗂️ Estructura del proyecto
labor_stats_API/
│
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── server.js
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── services/
│   ├── package.json
│   └── node_modules/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles.css
│   │   └── App.jsx
│   ├── package.json
│   └── node_modules/
├── LICENSE
└── README.md

## Requisitos
Node.js ≥ 18
npm ≥ 9
Navegador web moderno (Chrome, Edge, Firefox)

## Instalación y ejecución
- Clonar el repositorio
git clone https://github.com/LuisDavid-DeveloperSr/labor-stats-api.git
cd labor-stats-api

- Backend
cd backend
npm install
npm start

El backend se ejecuta en: http://localhost:5000

Endpoints disponibles:
GET /api/unemployment?country=ES&year=2023
GET /api/timeseries?country=ES

- Frontend, en otra terminal:
cd frontend
npm install
npm run dev

El frontend se ejecuta en: http://localhost:5173

## Fuente de datos

Los datos utilizados provienen de Eurostat, el organismo oficial de estadísticas de la Unión Europea:
 https://ec.europa.eu/eurostat/

Dataset utilizado:
LFSQ_URGAN – Unemployment rates (quarterly data)

## Comprobación de funcionamiento

El backend responde correctamente a las peticiones REST

El frontend consume la API y muestra:

Resultado puntual

Gráfica de evolución histórica

Diseño responsive comprobado con herramientas del navegador

## Tecnologías utilizadas
- Backend
Node.js
Express
Axios
API REST
JavaScript (ES Modules)

- Frontend
React
Vite
Fetch API
CSS Responsive
Gráficas (Recharts)

## Autor

Luis David Espinal Espinal
