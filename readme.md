# Prácticas (NodeJs y MongoDB)

NodeJs Básico: hasta el commit f3ad78ace09dcc9201e212682d7aaaffb5def4cb [Status: Completada]

NodeJs Avanzado:
Status[Incompleta]

----
## Despliegue de apps en AWS

#####[Despliegue de app node](http://ec2-34-234-86-140.compute-1.amazonaws.com/)
#####[Despliegue de app react](http://34.234.86.140/)

Nota para el profe: Puedes verificar en el archivo `styles.css` la cabecera 😁
----

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

### Copia .env.example a .env

```sh
cp .env.example .env
```

Configura con el nombre de tu bbdd

### Inicia la BBDD:

```sh
# Este comando borra todo lo existente en la bbdd y te crea valores por defecto
$ npm run init-db.js
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
