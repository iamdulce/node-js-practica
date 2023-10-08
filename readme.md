# Práctica 5 (NodeJs y MongoDB)

## Nodepop

API y website simple

### Lo que necesitas:

Node.js
MongoDB

### Instalación:

```sh
$ npm install
```

Revisa la conexión a la base de datos en /lib/connectMongoose.js (ver "Iniciar un servidor MongoDB en MacOS o Linux")

### Inicia la BBDD:

```sh
# Este comando borra todo lo existente en la bbdd y te crea valores por defecto
$ npm run init-db
```

### Start

En producción:

```sh
npm start
```

En debug:

```sh
npm run dev
```

### Uso de la API

Obtener Anuncios

`GET /api/anuncios`

Crear Anuncios

`POST /api/anuncios`

Filtrar

``
