# Práctica 5 (NodeJs y MongoDB)

## Nodepop

API y website simple

### Lo que necesitas:

Node.js
MongoDB

### Instalación de dependencias:

```sh
$ npm install
```

Revisa la conexión a la base de datos en /lib/connectMongoose.js (ver "Iniciar un servidor MongoDB en MacOS o Linux")

### Incia un servidor MongoDB

```sh
./bin/mongod --dbpath ./data/
```

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

Filtrar/Ordenar Anuncios:

-   Filtros por tag, nombre, venta, precio:

`GET /api/anuncios?tags=mobile`

`GET /api/anuncios?nombre=Bicicleta`

`GET /api/anuncios?venta=true`

`GET /api/anuncios?precio=150`

-   Orden de Anuncios (Ej: por precio, mayor a menor):

`GET /api/anuncios?sort=-precio`
