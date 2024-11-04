import { mostrarColor } from "./tarjetaColor.js";

class Favorites {
    constructor() {
        this.favorites = getFavorites();
        this.renderHTML();
    }

    renderHTML() {
        const containerFavorites = document.getElementById("favorites");
        containerFavorites.innerHTML = "";

        this.favorites = getFavorites();

        // si no hay favoritos, no renderizamos nada
        if (this.favorites.length === 0) {
            return; 
        }

        // creo la tarjeta contenedora
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        const buttonDesplegable = document.createElement('div');
        buttonDesplegable.classList.add('desplegarToggle');
        const title = document.createElement("h2");
        title.innerText = "Favorites";
        buttonDesplegable.append(title);

        const almacenFavorites = document.createElement('div');
        almacenFavorites.classList.add('almacen');
        almacenFavorites.style.display ="flex";
        this.favorites = getFavorites();
        
        this.favorites.forEach(favorite => {
            const elementoFavorito = document.createElement('div');
            elementoFavorito.classList.add('elemento-favorito');

            const circuloContainer = document.createElement('div');
            circuloContainer.classList.add('contenedor-circulo');
            const circuloColor = document.createElement('div');
            circuloColor.style.backgroundColor = favorite.hex;
            circuloContainer.append(circuloColor);

            circuloColor.style.cursor = "pointer";
            //AQUI 
            circuloColor.addEventListener('click', async (event) => {
                let hexColor = favorite.hex.replace('#', '');
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

            const infoContenedor = document.createElement('div');
            infoContenedor.classList.add('contenedor-info');
            const infoColor = document.createElement('p'); //lo pongo?
            infoColor.innerText = favorite.nombre;
            infoContenedor.append(infoColor);

            const botonContenedor = document.createElement('div');
            botonContenedor.classList.add('contenedor-boton');
            const botonBorrar = document.createElement('button');
            botonBorrar.innerHTML = "×"; // Cambiado a × porque queda mas bonito
            botonBorrar.addEventListener('click', () => {
                removeFavorite(favorite);
                this.renderHTML();
            });
            botonContenedor.append(botonBorrar);

            elementoFavorito.append(circuloContainer, infoContenedor, botonContenedor);
            almacenFavorites.append(elementoFavorito);
        });

        tarjeta.append(buttonDesplegable, almacenFavorites);
        containerFavorites.append(tarjeta);
    }
}


const favorites = new Favorites();


function getFavorites() {
    const favorites = localStorage.getItem("favorites") || "[]";
    return JSON.parse(favorites);
}

function saveFavorites(favorites) {
    const favoritesString = JSON.stringify(favorites);
    localStorage.setItem("favorites", favoritesString);
}

//para la clase
function addFavorite(element) {
    const favoritesColors = getFavorites();
    if (isFavorite(element)) {
        console.log('El color ' + element.name + ' ya esta en favoritos');
        return;
    }
    favoritesColors.push(element);
    saveFavorites(favoritesColors);
    favorites.renderHTML();
}

//para la clase
function removeFavorite(element) {
    const favorites = getFavorites();
    const elementIndex = favorites.findIndex(e => e.hex === element.hex);
    if (elementIndex === -1) {
        return;
    }
    favorites.splice(elementIndex, 1);
    saveFavorites(favorites);
}
function isFavorite(element) {
    const favorites = getFavorites();
    const elementIndex = favorites.findIndex(e => e.hex === element.hex);
    console.log(elementIndex);
    if (elementIndex === -1) {
        return false;
    }
    return true;
}
function toggleFavorite(element) {
    if (isFavorite(element)) {
        removeFavorite(element);
    } else {
        addFavorite(element);
    }
}

export {
    addFavorite,
    getFavorites,
    saveFavorites,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    Favorites
}