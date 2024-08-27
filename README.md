# Proyecto Frontend para Gestión de Usuarios

## Descripción General

Este proyecto es un frontend desarrollado en **React** con **TypeScript** utilizando **Vite** como bundler. Está diseñado para gestionar usuarios y sesiones, ofreciendo funciones de registro, autenticación, y administración de usuarios. Las alertas se manejan a través de **Toastify**. La integración con la API de gestión de usuarios se realiza mediante un archivo `api_gateway`, que maneja las peticiones y respuestas a la API.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de desarrollo rápido que permite HMR (Hot Module Replacement).
- **Tailwind CSS**: Framework de CSS para diseño UI.
- **Toastify**: Biblioteca para mostrar notificaciones.
- **ESLint**: Herramienta para mantener un código limpio y estandarizado.

## Estructura del Proyecto

La estructura del código sigue una organización lógica que facilita el desarrollo y mantenimiento:

- **src/**: Contiene todo el código fuente de la aplicación.
  - **components/**: Componentes reutilizables de la interfaz.
  - **pages/**: Componentes que representan cada página de la aplicación.
  - **services/**: Servicios para interactuar con la API.
  - **styles/**: Archivos de estilos globales.
  - **utils/**: Funciones y utilidades compartidas.
  - **api_gateway.js**: Archivo encargado de la comunicación con la API.
  
## Instalación

### Requisitos Previos

Antes de instalar el proyecto, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 14 o superior)
- **pnpm** (para gestionar las dependencias)

### Clonar el Repositorio

Clona el repositorio en tu máquina local utilizando Git:

```bash
git clone <URL del repositorio>
cd <nombre-del-proyecto>
```

### Instalar Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
pnpm i
```

## Ejecución

Para iniciar el servidor de desarrollo, utiliza el siguiente comando:

```bash
pnpm run dev
```

El servidor se ejecutará en el puerto que Vite utiliza por defecto. Podrás acceder a la aplicación a través de `http://localhost:3000`.

## Uso

### Acceso al Frontend

Accede a la aplicación mediante el navegador utilizando la URL proporcionada por el servidor de desarrollo.

### Flujos de Trabajo Principales

#### 1. Registro de Usuario

Permite a los nuevos usuarios registrarse en la aplicación mediante un formulario que envía una petición `POST` al endpoint de registro de la API.

#### 2. Inicio de Sesión

Los usuarios pueden autenticarse mediante el ingreso de sus credenciales, que son enviadas a la API para verificación.

#### 3. Cierre de Sesión

El cierre de sesión elimina el token de autenticación del almacenamiento local y redirige al usuario a la página de inicio de sesión.

#### 4. Cambio de Rol de Usuario

Los administradores pueden modificar el rol de otros usuarios (por ejemplo, de "Usuario" a "Administrador") utilizando la interfaz de gestión de usuarios.

#### 5. Eliminación de Usuario

Permite a los administradores eliminar usuarios después de confirmar la acción. Esto envía una petición `DELETE` a la API.

#### 6. Suspensión de Usuario

Los usuarios pueden ser suspendidos temporalmente, evitando que accedan a la aplicación. Esta acción se realiza mediante una petición `PUT` o `PATCH` a la API.

## Ejemplos de Uso

Algunos ejemplos prácticos de cómo interactuar con la aplicación:

- **Registro de Usuario:** Completa el formulario de registro y verifica que el usuario sea redirigido al inicio de sesión.
- **Inicio de Sesión:** Ingresa tus credenciales para acceder al sistema y verifica que el token de sesión se guarde correctamente.
- **Cambio de Rol:** Un administrador puede cambiar el rol de un usuario y verificar que se actualice correctamente en la base de datos.

## Contribución

Las contribuciones son bienvenidas. Sigue estos pasos para contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz commits (`git commit -m 'Agrega nueva funcionalidad'`).
4. Empuja la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

Sigue las buenas prácticas de desarrollo en React y Tailwind CSS.

## Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Puedes usar, modificar y distribuir este software bajo los términos de esta licencia.

## Créditos

Este proyecto ha sido desarrollado por **Abraham Borja** como parte de mi portafolio personal.

## Expansión de la Configuración de ESLint

Para proyectos de producción, se recomienda expandir la configuración de ESLint para habilitar reglas de lint que sean conscientes de los tipos. Sigue las instrucciones detalladas en la configuración proporcionada en la sección original para actualizar `parserOptions` y habilitar reglas específicas de React.
