# Proyecto de Generación y Análisis de Colores

Este proyecto permite a los usuarios explorar y generar esquemas de colores personalizados a partir de dos métodos principales de selección. Además, proporciona herramientas para identificar y convertir colores, así como para generar paletas cromáticas versátiles y funcionales.

## Características

### Selección de Color
Los usuarios pueden elegir un color a partir de dos opciones:
1. **Color Aleatorio**: La página ofrece un color inicial al azar. Los usuarios pueden pulsar este color para generar otro aleatorio.
2. **Selección Manual**: Los usuarios pueden seleccionar un color personalizado a través de un selector.

### Identificación y Conversión de Color
A través del endpoint `/id`, el sistema devuelve un objeto con la siguiente información sobre el color seleccionado:
- **Nombre del color**: Si está disponible, se identifica por un nombre común.
- **Imagen de color**: Una representación visual del color.
- **Conversiones**: Transformaciones del color a otros formatos (HEX, RGB, HSL, etc.).
- **Color de contraste recomendado**: Un color sugerido para texto u otros elementos superpuestos, garantizando accesibilidad y buena legibilidad.

### Generación de Esquemas de Color
Mediante el endpoint `/scheme`, el sistema genera esquemas cromáticos basados en el color seleccionado. Cada esquema incluye un conjunto de colores relacionados, con sus respectivas conversiones y detalles.

#### Tipos de Esquemas Disponibles
1. **Monocromo**:
   - `monochrome`
   - `monochrome-dark`
   - `monochrome-light`  
   Variaciones de luminosidad de un mismo color.

2. **Análogo**:
   - `analogic`
   - `analogic-complement`  
   Colores adyacentes en la rueda cromática, con opción de incluir el complementario.

3. **Complementario**:
   - `complement`  
   Colores opuestos en la rueda cromática, creando un alto contraste.

4. **Triádico**:
   - `triad`  
   Tres colores equidistantes en la rueda cromática.

5. **Cuadrado**:
   - `quad`  
   Cuatro colores dispuestos en forma de cuadrado en la rueda cromática.

## Tecnologías Utilizadas
- **HTML, CSS, JavaScript**: Para el desarrollo del frontend interactivo.
- **API de Colores**: Para obtener datos sobre colores y generar esquemas.
- **[Especificar librerías adicionales si aplica]**.

## Instalación y Uso
1. Clona este repositorio:
   ```bash
   git clone https://github.com/usuario/proyecto-colores.git
Navega al directorio del proyecto:
bash
Copiar código
cd proyecto-colores
Abre el archivo index.html en tu navegador para probar la aplicación.
Contribuciones
Las contribuciones son bienvenidas. Si deseas colaborar:

Haz un fork del proyecto.
Crea una rama para tus cambios:
bash
Copiar código
git checkout -b feature/nueva-funcionalidad
Realiza un pull request describiendo tus modificaciones.
Licencia
Este proyecto está bajo la licencia MIT.

Autor
Creado por Tu Nombre/Usuario.

go
Copiar código

Guarda este contenido en un archivo llamado `README.md`, y verás el formato con las negritas y secciones bien estructuradas al visualizarlo en plataformas como GitHub. 😊





