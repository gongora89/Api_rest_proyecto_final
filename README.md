# Basic API REST

Node.js, Express.js, MongoDB Basic REST API.

You can clone this repo as starter project for your Express, MongoDB API server

## Features and Functionalities 😃

- Node, Express, MongoDB, Mongoose as ODM Basic REST API
- CRUD Operations (A Controller for this)
- NoSQL for database: Document-oriented MongoDB

## Tech Stack 💻

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MongoDB - Cloud](https://www.mongodb.com/cloud)
- [Mongoose](https://mongoosejs.com)

## Installation and Running App :zap:

**1. Clone this repo by running the following command :-**

```bash
 git clone https://github.com/norbeydanilo/basic_api_rest.git
 cd basic_api_rest
```

**2. Install the required package :-**

```bash
 npm install
```

**3. Now run the npm command to start the project :-**

```bash
 npm start
```

**4.** **🎉 Open postman and test the rest api on this url `https://127.0.0.1:3200`**

Remember that the `.env` file must be created for the API to work.

Additionally this project uses:

- [Nodemon](https://nodemon.io)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Eslint](https://eslint.org)
- [Swagger](https://swagger.io)

**Follow the steps of the [Steps presentation](https://github.com/norbeydanilo/basic_api_rest/blob/main/steps.pptx) in the repository -**

## Steps summary and Swagger Running

### Configuración inicial

Primero, necesitamos inicializar nuestro proyecto. En una carpeta vacía, ejecute el siguiente comando:

```bash
npm init
```

### Instalación de dependencias

Ahora, necesitamos instalar algunas dependencias:

```bash
npm i express mongoose nodemon dotenv
```

### Creación del archivo de entrada

Una vez que las dependencias hayan terminado de instalarse, cree un archivo llamado `index.js`. Este será el punto de entrada de nuestra aplicación.

### Configuración de Express y Mongoose

En el archivo `index.js`, agreguemos Express y Mongoose:

```javascript
const express = require('express');
const mongoose = require('mongoose');
```

### Configuración del script de inicio

En el archivo `package.json`, agregue un script que diga lo siguiente:

```json
"scripts": {
    "start": "nodemon index.js"
}
```

Esto significa que podemos iniciar nuestro servidor usando `npm start` y se ejecutará usando el paquete Nodemon que instalamos previamente.

### Configuración de la base de datos MongoDB

Dirígete a <https://account.mongodb.com/account/login> y crea tu cuenta, o inicia sesión si ya tienes una. Crea un clúster compartido gratuito. Te pedirá el nombre de usuario y la contraseña, así que complétalos.

Nuestro clúster tardará un tiempo en finalizar, así que esperemos. Mientras tanto, cree un archivo llamado `.env` en la carpeta del proyecto.

Si ya tiene instalado MongoDB Compass, genere la cadena de conexión desde la nube de Mongo. En la página de inicio del clúster, haga clic en el botón de conexión para esto.

Ubíquela en el archivo `.env`:

```bash
DATABASE_URL = mongodb+srv://norbeymunoz:***********@cluster0.n8i0ul0.mongodb.net/
```

### Conexión de la base de datos a nuestro servidor

Ahora, conectemos la base de datos a nuestro servidor usando Mongoose.

```javascript
mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;
```

Tenemos que lanzar un mensaje de éxito o de error dependiendo de si nuestra conexión a la base de datos es exitosa o falla.

```javascript
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
```

### Creación de rutas

Cree el folder `routes` y el fichero `routes.js`. Defina las rutas, los middlewares e implementelos. Pueden revisar el proyecto para ver esta definición.

### Uso de Swagger

Para utilizar el archivo `swagger.json` en tu aplicación, necesitarás instalar el paquete `swagger-ui-express`. Este paquete te permitirá servir la documentación de Swagger directamente desde tu aplicación Express.

Primero, instala `swagger-ui-express` con el siguiente comando:

```bash
npm install swagger-ui-express
```

Luego, en tu archivo `index.js`, necesitarás requerir `swagger-ui-express` y tu archivo `swagger.json`. Asegúrate de ajustar la ruta a `swagger.json` según sea necesario. Aquí hay un ejemplo de cómo hacerlo:

```javascript
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

Con esto, podrás acceder a la documentación de Swagger en la ruta `/api-docs` de tu aplicación.

Por favor, ten en cuenta que este es un ejemplo básico y puedes necesitar ajustarlo según tus necesidades. Por ejemplo, puedes querer agregar autenticación a la ruta de la documentación de Swagger, o puedes tener otros middlewares que necesiten ser configurados. Te recomiendo que consultes la [documentación de `swagger-ui-express`](https://www.npmjs.com/package/swagger-ui-express) para obtener más detalles.
