# POC
## Cache en redis con node

##### Crear un notenedor de redis
```
docker run --name redis-dev -p 6379:6379 -d redis
```

##### Instalar dependencias
```
$ npm i
```

##### Levantar el server-mock

```
$ npm run user-json-server
```
##### Levantar la aplicacion

```
$ npm start
```

##### Medir tiempos de respuesta con curl
```
$ curl -w "@curl-format.txt" -o /dev/null -s "http://localhost:3333/users/"
```
