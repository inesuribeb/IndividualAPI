
// Funcion para obtener informacion del color TAL VEZ INNECESARIA
export async function obtenerColorInfo(hexColor) {
    const URLcolor = `https://www.thecolorapi.com/id?format=json&hex=${hexColor}`;
    try {
        const response = await fetch(URLcolor);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
       
        return data;
        
    } catch (error) {
        console.error('Hubo un problema con la llamada a la API de color:', error);
    }
}


// funcion para obtener los diferentes esquemas de color a partir de un color. Por defecto mostraremos 5.
export async function obtenerEsquemaColoresModo(hexColor, schemeMode, count = 5) {
    try {
        const BASE_URL = "https://www.thecolorapi.com/scheme"; 
        const apiURL = new URL(BASE_URL); 
        
        if (!hexColor || !schemeMode) {
            throw new Error('Hex color or scheme mode is missing.');
        }
        // Agregar parametros a URL
        apiURL.searchParams.append("hex", hexColor.replace('#', ''));
        apiURL.searchParams.append("mode", schemeMode);
        apiURL.searchParams.append("count", count);

        const response = await fetch(apiURL); 
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); 
        return data;
    } catch (error) {
        console.error('Hubo un problema con la llamada a la API de esquema con modo:', error);
        return null; 
    }
}




