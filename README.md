VERSION INICIAL

Mi proyecto va a consistir en un buscador de fuentes y de paletas de color para el usuario. 

1. Color

Inicio.

El usuario elige un color a partir de 2 formas:
- La pagina entrega un color aleatorio como primera opción. el usuario puede pulsarlo y se le entregará otro de forma aleatoria.
- Elige él mismo uno.

Respuesta.

- Identificación y conversión de color (`/id` Endpoint):
Devuele un objeto con informacion sobre el color (nombre, imagen de color, conversiones a otros formatos, color de contraste recomendado para el texto)

- Generación de Esquemas de Color (`/scheme` Endpoint):
Incluye un objeto con los colores del esquema, cada uno con su información respectiva.
    > Esquema MONOCROMO: monochrome / monochrome-dark / monochrome-light. Variaciones del mismo color.
    > Esquema ANÁLOGO: analogic / analogic-complement. Colores adyacentes en la rueda.
    > Esquema COMPLEMENTARIO: complement. Colores opuestos en la rueda de colore.
    > Esquema TRIAD: triad. 3 colores equidistantes en la rueda.
    > Esquema CUADRADO: triad. Cuatro colores en forma de cuadrado en la rueda.

2. Fuentes