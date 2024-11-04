import { obtenerEsquemaColoresModo } from './llamadaColor.js';
import { mostrarColor } from './tarjetaColor.js';
import { obtenerColorInfo } from './llamadaColor.js';
import { addFavorite } from './favorites.js';

//clase SchemeColor

class SchemeColor {
    constructor(data, madre) {
        this.mode = data.mode;
        this.colors = [];
        data.colors.forEach(color => {
            this.colors.push({
                nombre: color.name.value,
                hex: color.hex.value,
                cleanHex: color.hex.clean,
                colorContrast: color.contrast.value
                
            });
        });
        this.renderHTML();
        this.currentData = data;
        this.madre = madre;
    }

    renderHTML() {
        const container = document.getElementById("esquemaColorScheme");
        container.innerHTML = "";
        container.className = "colors-" + this.colors.length;
        // container.classList.add("colors-" + this.colors.length);

        this.colors.forEach(color => {
            const colorDiv = document.createElement('div');
            colorDiv.className = 'color-item';
            colorDiv.style.backgroundColor = color.hex;

            colorDiv.addEventListener('click', async () => {
                try {
                    const colorInfo = color.cleanHex;
                    await this.madre.updateColor(colorInfo);
                } catch (error) {
                    console.error('Error al obtener información del color:', error);
                }
            });

            const link = document.createElement('a');
            link.innerHTML = `<p>${color.nombre} &rarr;</p>`;
            link.style.textDecoration = "none";
            link.style.cursor = "pointer";

            link.style.color = (color.colorContrast === '#000000') ? 'black' :
                (color.colorContrast === '#ffffff') ? 'white' : 'inherit';

            const buttonFavorite = document.createElement('button'); //1
            buttonFavorite.innerHTML = "Favorite";

            buttonFavorite.addEventListener('click', (event) => {
                event.stopPropagation();
                console.log(color);
                addFavorite(color);
            });

            colorDiv.append(link, buttonFavorite);
            container.appendChild(colorDiv);
        });

        document.body.appendChild(container);

    }
}



export { SchemeColor };