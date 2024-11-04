
import { obtenerColorInfo } from './llamadaColor.js';
import { SchemeColor } from './schemeColors.js';
import { obtenerEsquemaColoresModo } from './llamadaColor.js'
import { addFavorite } from './favorites.js';




//clase madre

class Madre {
    constructor(data) {
        this.color = new Color(data);
        this.tarjetaContainer = document.getElementById("tarjetaColor");
        this.renderHTML();
        this.showModal();
        


    }
    async updateColor(newColor) {
        const data = await obtenerColorInfo(newColor);
        if (data) {
            this.color = new Color(data);
            this.renderHTML();
            this.showTarjetaTemporal();
        }

    }

    showTarjetaTemporal() {
        const tarjetaTemporal = document.getElementById("tarjetaTemporal");
        tarjetaTemporal.innerHTML = "";
        const hide = true;
        tarjetaTemporal.classList.add('tarjeta-update');
        tarjetaTemporal.appendChild(this.color.renderHTML(hide));
        setTimeout(() => {
            tarjetaTemporal.classList.remove('tarjeta-update');
        }, 2000);
    }

    showModal() {
        this.tarjetaContainer.style.display = "block";
    }
    hideModal() {
        this.tarjetaContainer.style.display = "none";
    }

    renderHTML() {


        this.tarjetaContainer.classList.add("modal");
        this.tarjetaContainer.innerHTML = '';
        

        const tarjetaContent = document.createElement("div");
        tarjetaContent.classList.add("modal-body");


        const closeX = document.createElement("span");
        closeX.style.cursor = "pointer";
        closeX.innerHTML = "&times;"

        closeX.addEventListener("click", () => this.hideModal())
        

        const buttonFavorite = document.createElement('button'); //1
        buttonFavorite.innerHTML = "Favorite";

        buttonFavorite.addEventListener('click', () => {
            console.log("añadiendo a favoritos")
            console.log(this.color)
            addFavorite(this.color)
        });

        const formContainerCount = document.createElement('form'); //2
        formContainerCount.id = 'formContainerCount';

        const title = document.createElement("h3"); //2.1
        title.id = "questionCount";
        title.innerText = "How many colors do you want to see by Palette?";

        const selectCount = document.createElement('select'); //2.2
        selectCount.id = 'colorCount';

        for (let i = 1; i <= 10; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.innerText = `${i} color${i > 1 ? 's' : ''}`;
            selectCount.appendChild(option);
        }

        const buttonPaletas = document.createElement('button'); //2.3
        buttonPaletas.id = 'botonPaletas';
        buttonPaletas.innerText = 'See Color Palettes';

        formContainerCount.append(title, selectCount, buttonPaletas);

        buttonPaletas.addEventListener('click', (event) => {
            event.preventDefault();

            const currentColorPicker = document.getElementById("colorSelector");
            currentColorPicker.style.display = "none";

            const currentDropZone = document.getElementById("presentacion");
            currentDropZone.style.display = "none";

            document.getElementById('primeraPagina').style.display = 'none';
            

            const titlePage = document.getElementById('tituloPagina');
            titlePage.style.display= "flex";
            const favoritosSeccion = document.getElementById('favorites');
            favoritosSeccion.style.display= "flex";

            const count = parseInt(selectCount.value);

            this.count = count;
            this.createSchemeColors();

            
            this.hideModal();

            this.showTarjetaTemporal();

        })

        tarjetaContent.append(closeX, this.color.renderHTML(), buttonFavorite, formContainerCount);
        this.tarjetaContainer.append(tarjetaContent);
    }
    createSchemeColors() {
        const esquemasContainer = document.getElementById("esquemasColor");
        esquemasContainer.innerHTML = "";
        const container = document.getElementById("esquemaColorScheme");
        container.innerHTML = "";
        const ul = document.createElement("ul");

        const schemes = [
            { id: "monochrome", text: "Monochrome", description: "Variations of a single color" },
            { id: "monochrome-dark", text: "Monochrome Dark", description: "Dark variations of a single color" },
            { id: "monochrome-light", text: "Monochrome Light", description: "Light variations of a single color" },
            { id: "analogic", text: "Analogic", description: "Adjacent colors on the color wheel" },
            { id: "analogic-complement", text: "Analogic - Complement", description: "Analogous colors with a complementary color" },
            { id: "complement", text: "Complement", description: "Opposite colors on the color wheel" },
            { id: "triad", text: "Triad", description: "Three equidistant colors on the color wheel" },
            { id: "quad", text: "Quad", description: "Four colors forming a rectangle on the wheel" }
        ];

        // Función para activar el scheme seleccionado
    const setActiveScheme = (selectedIndex) => {
        const allLi = ul.querySelectorAll('li');
        allLi.forEach((li, index) => {
            if (index === selectedIndex) {
                li.classList.add('scheme-active');
            } else {
                li.classList.remove('scheme-active');
            }
        });
    };

        schemes.forEach((scheme , index)=> {
            const li = document.createElement("li");
            li.id = scheme.id;

            const link = document.createElement("a");
            link.href = "#";
            link.innerText = scheme.text;


            link.addEventListener('click', async (e) => {
                e.preventDefault();

                //aqui
                setActiveScheme(index);

                const hexColor = this.color.hex;
                const mode = scheme.id;
                const count = this.count;
                const data = await obtenerEsquemaColoresModo(hexColor, mode, count);

                if (data) {
                    new SchemeColor(data, this);
                }
            });
        

            const description = document.createElement("p");
            description.innerText = scheme.description;
            description.style.display = "none";


            //modificar luego en css para que sea menos brusco y que p aparezca debajo de li
            li.addEventListener('mouseover', () => {
                description.style.display = "block";
            });

            li.addEventListener('mouseout', () => {
                description.style.display = "none";
            });

            li.appendChild(link);
            li.appendChild(description);
            ul.appendChild(li);
        });

        esquemasContainer.appendChild(ul);
    }

    async iniciarEsquemaDeColores(hexColor, mode, count) {
        try {
            const data = await obtenerEsquemaColoresModo(hexColor, mode, count);

            if (data && data.colors) {
                new SchemeColor(data);
            } else {
                console.error('Error: No se recibieron colores de la API');
            }
        } catch (error) {
            console.error('Error en la llamada a la API:', error);
        }
    }

}

//clase color

class Color {
    constructor(data) {
        this.nombre = data.name.value;
        this.hex = data.hex.value;
        this.rgb = data.rgb.value;
        this.cmyk = data.cmyk.value;
        this.hsl = data.hsl.value;
        this.hsv = data.hsv.value;
        this.xyz = data.XYZ.value;
        this.colorContraste = data.contrast.value;
        this.currentData = data;
    }

    renderHTML(hide = false) {

        //meter en div muestra titulo y boton?

        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        const infoFija = document.createElement('div');
        infoFija.id = 'infoFija';

        const muestra = document.createElement('div');
        muestra.id = "muestra";
        muestra.style.backgroundColor = this.hex;
        muestra.style.height = "60px";
        muestra.style.width = "60px";
        muestra.style.borderRadius = "50%";

        //meter titulo en un div
        const titulo = document.createElement('h2');
        titulo.innerText = this.nombre;




        const infoDesplegable = document.createElement("div");
        infoDesplegable.id = "infoDesplegable";

        //hex y rgb en otro div
        const column1 = document.createElement('div');
        column1.classList.add('column1');

        const hexInfo = document.createElement('p');
        hexInfo.innerText = `Hex: ${this.hex}`;
        const rgbInfo = document.createElement('p');
        rgbInfo.innerText = `RGB: ${this.rgb}`;

        column1.append(hexInfo, rgbInfo);

        //myk y hsl en otro div
        const column2 = document.createElement('div');
        column2.classList.add('column2');

        const cmykInfo = document.createElement('p');
        cmykInfo.innerText = `CMYK: ${this.cmyk}`;
        const hslInfo = document.createElement('p');
        hslInfo.innerText = `HSL: ${this.hsl}`;

        column2.append(cmykInfo, hslInfo);

        //hsv y xyz en otro div
        const column3 = document.createElement('div');
        column3.classList.add('column3');

        const hsvInfo = document.createElement('p');
        hsvInfo.innerText = `HSV: ${this.hsv}`;
        const xyzInfo = document.createElement('p');
        xyzInfo.innerText = `XYZ: ${this.xyz}`;

        column3.append(hsvInfo, xyzInfo);

        infoFija.append(muestra, titulo);
        infoDesplegable.append(column1, column2, column3);



        if (hide === true) {
            muestra.style.cursor = "pointer";
            muestra.addEventListener('click', () => {
                //AQUI
                const tarjetaContainer = document.getElementById("tarjetaColor");
                tarjetaContainer.style.display = "block";
            })
            infoDesplegable.style.display = "none";

            const buttonMas = document.createElement('button');
            buttonMas.innerHTML = "+";

            buttonMas.addEventListener('click', () => {
                if (infoDesplegable.style.display === "none") {
                    buttonMas.innerHTML = "-";
                    infoDesplegable.style.display = "flex";

                } else {
                    infoDesplegable.style.display = "none";
                    buttonMas.innerHTML = "+";
                }

            });
            tarjeta.append(infoFija);
            tarjeta.append(buttonMas);
            tarjeta.append(infoDesplegable);
            return tarjeta;
        }
        tarjeta.append(infoFija);
        tarjeta.append(infoDesplegable);

        return tarjeta;
    }


}

async function mostrarColor(hexColor) {
    const data = await obtenerColorInfo(hexColor);
    if (data) {
        new Madre(data);
    }
}

export { Madre, Color, mostrarColor };


