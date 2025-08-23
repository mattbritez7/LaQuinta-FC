# La Quinta FC - Sitio Web Oficial

## 📋 Descripción

La Quinta FC es el sitio web oficial del club de fútbol La Quinta FC, desarrollado con React y Vite. El proyecto incluye una plataforma completa para mostrar información del club, estadísticas de torneos, y gestión de datos deportivos.

## 🚀 Características Principales

- **Página Principal**: Información del club, secciones de ligas, valores y misión
- **Sistema de Estadísticas**: Visualización de tablas de posiciones y estadísticas de torneos
- **Panel de Administración**: Gestión de estadísticas con autenticación
- **Diseño Responsivo**: Interfaz adaptada para dispositivos móviles y desktop
- **Integración con Firebase**: Base de datos en tiempo real para estadísticas

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18.2.0
- **Build Tool**: Vite 4.4.5
- **UI Framework**: Chakra UI 2.8.1
- **Routing**: React Router DOM 6.18.0
- **Base de Datos**: Firebase 10.5.2
- **Autenticación**: Firebase Auth
- **Deployment**: GitHub Pages
- **Iconos**: React Icons 4.11.0
- **Carousel**: React Slick 0.29.0
- **Mapas**: Simple React Google Maps 1.1.2
- **Excel**: XLSX 0.18.5

## 📁 Estructura del Proyecto

```
LaQuinta-FC/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Nav.jsx         # Navegación principal
│   │   ├── Footer.jsx      # Pie de página
│   │   ├── ContactUs.jsx   # Formulario de contacto
│   │   ├── SectionInfo.jsx # Información del club
│   │   ├── SectionLigas.jsx # Sección de ligas
│   │   ├── Stats.jsx       # Componentes de estadísticas
│   │   └── ...
│   ├── pages/              # Páginas principales
│   │   ├── index.jsx       # Página principal
│   │   ├── Stats.jsx       # Página de estadísticas
│   │   ├── login.jsx       # Página de login
│   │   └── updateStats.jsx # Panel de administración
│   ├── firebase/           # Configuración y funciones de Firebase
│   │   ├── firebase.js     # Configuración de Firebase
│   │   ├── clubsCrud.js    # Operaciones CRUD
│   │   └── firebaseFunctions.js
│   ├── auth/               # Autenticación
│   │   ├── PrivateRoute.jsx # Rutas protegidas
│   │   └── useAuth.jsx     # Hook de autenticación
│   └── assets/             # Imágenes y recursos
├── public/                 # Archivos públicos
└── package.json           # Dependencias del proyecto
```

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd LaQuinta-FC
   ```

2. **Instalar dependencias**
   ```bash
   npm install --legacy-peer-deps
   ```
   
   > **Nota**: Se utiliza `--legacy-peer-deps` debido a conflictos de dependencias con `simple-react-google-maps` que requiere una versión anterior de React.

3. **Configurar variables de entorno (Opcional)**
   
   Para funcionalidades completas de Firebase, crear un archivo `.env` en la raíz del proyecto:
   ```env
   VITE_API_KEY_FIREBASE=tu_api_key
   VITE_AUTH_DOMAIN=tu_auth_domain
   VITE_PROJECT_ID=tu_project_id
   VITE_STORAGE_BUCKET=tu_storage_bucket
   VITE_MESSAGING_SENDER_ID=tu_messaging_sender_id
   VITE_APP_ID=tu_app_id
   VITE_MEASUREMENTID=tu_measurement_id
   ```
   
   > **Nota**: Si no configuras las variables de Firebase, la aplicación funcionará en modo demo sin funcionalidades de base de datos.

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter
- `npm run deploy` - Despliega a GitHub Pages

## 🌐 Páginas y Funcionalidades

### Página Principal (`/`)
- Información general del club
- Sección de ligas y torneos
- Valores y misión del club
- Formulario de contacto
- Navegación a estadísticas

### Estadísticas (`/stats`)
- Tabla de posiciones de diferentes ligas
- Estadísticas detalladas de equipos
- Selector de ligas
- Tablero informativo

### Panel de Administración (`/update-stats`)
- Gestión de estadísticas (requiere autenticación)
- Carga de datos desde archivos Excel
- Actualización de tablas de posiciones

### Login (`/login`)
- Autenticación para administradores
- Acceso al panel de administración

## 🔐 Autenticación

El proyecto utiliza Firebase Authentication para proteger las rutas de administración. Solo usuarios autorizados pueden acceder al panel de actualización de estadísticas.

## 📊 Base de Datos

Firebase Firestore se utiliza para almacenar:
- Datos de equipos y clubes
- Estadísticas de torneos
- Tablas de posiciones
- Información de ligas

## 🎨 Diseño y UI

- **Framework**: Chakra UI para componentes consistentes
- **Responsive**: Diseño adaptativo para móviles y desktop
- **Iconos**: React Icons para iconografía
- **Animaciones**: Framer Motion para transiciones suaves

## 🚀 Deployment

El sitio está desplegado en GitHub Pages y es accesible en:
**https://www.laquintafc.com.ar**

### Configuración para GitHub Pages

El proyecto está configurado para funcionar correctamente en GitHub Pages con:
- **Base URL**: `/LaQuinta-FC/` (configurado en `vite.config.js`)
- **Hash Router**: Para evitar problemas de rutas en GitHub Pages
- **Manejo de errores**: Firebase configurado para funcionar sin variables de entorno

### Proceso de Deployment

1. Construir la aplicación:
   ```bash
   npm run build
   ```

2. Desplegar a GitHub Pages:
   ```bash
   npm run deploy
   ```

### Variables de Entorno en Producción

Para configurar Firebase en producción, agrega las variables de entorno en GitHub:
1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. Agrega las variables de entorno con el prefijo `VITE_`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es privado y pertenece a La Quinta FC.

## 🔧 Solución de Problemas

### Error de Dependencias
Si encuentras errores como "ERESOLVE could not resolve" durante la instalación, es debido a conflictos de dependencias. Usa:
```bash
npm install --legacy-peer-deps
```

### Vulnerabilidades de Seguridad
El proyecto puede mostrar advertencias de vulnerabilidades. Para revisarlas:
```bash
npm audit
```

Para intentar solucionarlas automáticamente:
```bash
npm audit fix
```

## 📞 Contacto

Para más información sobre el proyecto, contacta al equipo de desarrollo de La Quinta FC.

---

**Desarrollado con ❤️ para La Quinta FC**
