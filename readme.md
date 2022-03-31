# Challenge Backend

## Configuracion del Entorno

1) Ejecutar el script situado en la carpeta data
2) Prender el XAMPP
3) Instalar dependencias
``` bash
npm install
```

## Inicio del Servidor

``` bash
npm start
```

## Rutas

GET. Recibe como parametro un ID ,identificador de una partida , si viene informado se recupera desde un almacenamiento ,si no esta informado se crea una nueva.
/games Crea una nueva partida
/games/id Busca una partida por el id solicitado

POST Guarda una partida ya iniciada y recibe la partida en curso
/games Recibe por el body 
"id" del juego en cuestion a modificar
"state_id" Modifica el estado de la partida , los valores posibles son 1 , 2 , 3 y representan 1-CREATED , 2- WON , 3-LOST

## Testing

``` bash
npm test
```
