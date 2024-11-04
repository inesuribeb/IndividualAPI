import { Color, mostrarColor } from './tarjetaColor.js';

// export class TarjetaTemporal extends Color{
//     constructor(data) {
//         super(data); 
//         this.renderTemporalHTML();
//     }

//     renderTemporalHTML() {
//         const tarjetaTemporalContainer = document.getElementById("tarjetaTemporal");
//         tarjetaTemporalContainer.innerHTML = ''; 
//         tarjetaTemporalContainer.style.backgroundColor = "#89D8E8";

//         const muestra = document.createElement ('div');
//         muestra.id = "muestra";
//         muestra.style.backgroundColor = this.hex;
//         muestra.style.height = "60px";
//         muestra.style.width = "60px";
//         muestra.style.borderRadius = "50%";
//         muestra.style.cursor = "pointer"; 

        

//         //añadir addeventlistener a muestra color en el FUTURo

//         const tarjeta = document.createElement('div');
//         tarjeta.classList.add('tarjeta');

//         const infoVista = document.createElement ('div');
//         infoVista.id = "infoVista";
        
//         const titulo = document.createElement('h2');
//         titulo.innerText = this.nombre;
        
//         const buttonMas = document.createElement ('button');
//         buttonMas.innerHTML = "+";

//         infoVista.append(muestra, titulo, buttonMas);

//         const infoFormatos = document.createElement('div');
//         infoFormatos.id = "contenidoDesplegable";
//         infoFormatos.style.display = "none";

//         const hexInfo = document.createElement('p');
//         hexInfo.innerText = `Hex: ${this.hex}`;
        
//         const rgbInfo = document.createElement('p');
//         rgbInfo.innerText = `RGB: ${this.rgb}`;
        
//         const cmykInfo = document.createElement('p');
//         cmykInfo.innerText = `CMYK: ${this.cmyk}`;

//         const hslInfo = document.createElement('p');
//         hslInfo.innerText = `HSL: ${this.hsl}`;

//         const hsvInfo = document.createElement('p');
//         hsvInfo.innerText = `HSV: ${this.hsv}`;

//         const xyzInfo = document.createElement('p');
//         xyzInfo.innerText = `XYZ: ${this.xyz}`;

//         infoFormatos.append(hexInfo, rgbInfo, cmykInfo, hslInfo, hsvInfo, xyzInfo);

//         buttonMas.addEventListener('click', () => {
//             if (infoFormatos.style.display === "none") {
//                 infoFormatos.style.display = "block";
//                 buttonMas.innerHTML = "-"; 
//             } else {
//                 infoFormatos.style.display = "none";
//                 buttonMas.innerHTML = "+"; 
//             }
//         });

//         tarjeta.append(infoVista, infoFormatos);
//         tarjetaTemporalContainer.appendChild(tarjeta);
//     }

//     update(data) {
        
//         this.nombre = data.name;
//         this.hex = data.hexValue;
//         this.rgb = data.rgb; 
//         this.cmyk = data.cmyk;
//         this.hsl = data.hsl;
//         this.hsv = data.hsv;
//         this.xyz = data.xyz;
//         this.renderTemporalHTML();
//     }
// }

// const tarjetaTemporal = new tarjetaTemporal();

