# 🟢🟡🔵🔴 KHROMA: Generación y Análisis de Colores

## Español

Este proyecto permite a los usuarios explorar y generar esquemas de colores personalizados a partir de dos métodos principales de selección. Además, proporciona herramientas para identificar y convertir colores, así como para generar paletas cromáticas versátiles y funcionales.

## ⚙️ Características

### 🎨 Selección de Color
Los usuarios pueden elegir un color a partir de dos opciones:
1. **Color Aleatorio**: La página ofrece un color inicial al azar. Los usuarios pueden pulsar este color para generar otro aleatorio.
2. **Selección Manual**: Los usuarios pueden seleccionar un color personalizado a través de un selector.
3. **A partir de una imagen**: Los usuarios pueden subir una imagen y utilizar el selector de color para extraer colores de su propia imagen.

### 🔍 Identificación y Conversión de Color
A través del endpoint `/id`, el sistema devuelve un objeto con la siguiente información sobre el color seleccionado:
- **Nombre del color**: Si está disponible, se identifica por un nombre común.
- **Imagen de color**: Una representación visual del color.
- **Conversiones**: Transformaciones del color a otros formatos (HEX, RGB, HSL, etc.).
- **Color de contraste recomendado**: Un color sugerido para texto u otros elementos superpuestos, garantizando accesibilidad y buena legibilidad.

### 🌈 Generación de Esquemas de Color
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

## 🛠️ Tecnologías Utilizadas
- **HTML, CSS, JavaScript**: Para el desarrollo del frontend interactivo.
- **API de Colores**: Este proyecto utiliza la API de colores proporcionada por [The Color API](https://github.com/joshbeckman/thecolorapi).

## ⚙️ Instalación y Uso
1. Clona este repositorio:
   ```bash
   git clone git@github.com:inesuribeb/Khroma.git
   
2. Navega al directorio del proyecto:
   ```bash
   cd Khroma
   
3. Abre el archivo index.html en tu navegador para probar la aplicación.

## 🤝 Contribuciones
Las contribuciones son bienvenidas. Si deseas colaborar:

Haz un fork del proyecto.
1. Crea una rama para tus cambios:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   
2. Realiza un pull request describiendo tus modificaciones.


## :woman_juggling: Autor
Creado por Ines Uribe



# 🟢🟡🔵🔴 KHROMA: Color Generation and Analysis

## English

This project allows users to explore and generate custom color schemes based on two main selection methods. It also provides tools to identify and convert colors, as well as generate versatile and functional color palettes.

## ⚙️ Features

### 🎨 Color Selection
Users can choose a color in two ways:
1. **Random Color**: The page offers an initial random color. Users can click on this color to generate another random one.
2. **Manual Selection**: Users can select a custom color using a color picker.
3. **From an Image**: Users can upload an image and use the color picker to extract colors from their own image.

### 🔍 Color Identification and Conversion
Through the `/id` endpoint, the system returns an object with the following information about the selected color:
- **Color Name**: If available, it identifies the color by its common name.
- **Color Image**: A visual representation of the color.
- **Conversions**: Transformations of the color to other formats (HEX, RGB, HSL, etc.).
- **Recommended Contrast Color**: A suggested color for text or other overlay elements, ensuring accessibility and good legibility.

### 🌈 Color Scheme Generation
Through the `/scheme` endpoint, the system generates color schemes based on the selected color. Each scheme includes a set of related colors, with their respective conversions and details.

#### Available Color Schemes
1. **Monochrome**:
   - `monochrome`
   - `monochrome-dark`
   - `monochrome-light`  
   Variations in brightness of the same color.

2. **Analogous**:
   - `analogic`
   - `analogic-complement`  
   Adjacent colors on the color wheel, with the option to include the complementary color.

3. **Complementary**:
   - `complement`  
   Opposite colors on the color wheel, creating high contrast.

4. **Triadic**:
   - `triad`  
   Three equally spaced colors on the color wheel.

5. **Square**:
   - `quad`  
   Four colors arranged in a square pattern on the color wheel.

## 🛠️ Technologies Used
- **HTML, CSS, JavaScript**: For the development of the interactive frontend.
- **Color API**: This project uses the color API provided by [The Color API](https://github.com/joshbeckman/thecolorapi).

## ⚙️ Installation and Usage
1. Clone this repository:
   ```bash
   git clone git@github.com:inesuribeb/Khroma.git

2. Navigate to the project directory:
   ```bash
   cd Khroma
   
3. Open the index.html file in your browser to try the application.

## 🤝 Contributions
Contributions are welcome. If you want to collaborate:

Fork the project.

1. Create a branch for your changes:

   ```bash
   git checkout -b feature/new-feature

2. Submit a pull request describing your modifications.

## :woman_juggling: Author
Created by Ines Uribe






