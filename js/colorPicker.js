import { obtenerColorInfo } from './llamadaColor.js';
import { mostrarColor } from './tarjetaColor.js';

class ColorPicker {  //#89D8E8
    constructor(initialColor = '#853025') {
        this.initialColor = initialColor;
        this.createColorPicker();
        const titlePage = document.getElementById('tituloPagina');
        titlePage.style.display= "none";
        const favoritosSeccion = document.getElementById('favorites');
        favoritosSeccion.style.display= "none";
    }

    createColorPicker() {
        const container = document.getElementById("colorSelector");
        this.createFormColor(container);
    }

    createFormColor(container) {
        const header = document.createElement('h1');
        header.textContent = '';
        container.appendChild(header);

        
        const pickerContainer = document.createElement('div');
        pickerContainer.classList.add('color-picker-container');

        
        const colorPicker = document.createElement('input');
        colorPicker.type = 'color';
        colorPicker.id = 'colorPicker';
        colorPicker.value = this.initialColor;

        //para la imagen por encima
        const overlay = document.createElement('div');
        overlay.classList.add('picker-overlay');

        
        pickerContainer.appendChild(colorPicker);
        pickerContainer.appendChild(overlay);
        container.appendChild(pickerContainer);

        colorPicker.addEventListener('input', (event) => {
            
        });

        const button = document.createElement('button');
        button.id = 'botonForm';
        button.innerText = 'Select a color';
        container.appendChild(button);

        button.addEventListener('click', async (event) => {
            let hexColor = colorPicker.value.replace('#', '');
            if (hexColor) {
                try {
                    await mostrarColor(hexColor);
                } catch (error) {
                    console.error('Error al obtener la información del color:', error);
                }
            } else {
                console.error('No se ha seleccionado un color válido.');
            }
        });
    }
}


const colorPicker = new ColorPicker();

