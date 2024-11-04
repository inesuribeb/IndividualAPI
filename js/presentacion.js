class DropZone {
    constructor() {
        const titlePage = document.getElementById('tituloPagina');
        titlePage.style.display= "none";
        const favoritosSeccion = document.getElementById('favorites');
        favoritosSeccion.style.display= "none";
        this.renderHTML();
    }

    renderHTML() {
        const fondoPresentacion = document.getElementById('presentacion');

        const containTitle = document.createElement('div');
        containTitle.classList.add('tituloPresentacion');
        containTitle.innerText = "Create the design you love";

        //canvas
        const canvas = document.createElement('canvas');
        canvas.width = 600; 
        canvas.height = 600;
        canvas.className = 'drop-canvas';

        
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#666';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Drop your image', canvas.width/2, canvas.height/2);

        
        this.initializeCanvas(canvas);

        fondoPresentacion.append(containTitle, canvas);
    }

    initializeCanvas(canvas) {
        canvas.addEventListener('dragover', (e) => {
            e.preventDefault();
            canvas.classList.add('dragging');
        });

        canvas.addEventListener('dragleave', () => {
            canvas.classList.remove('dragging');
        });

        canvas.addEventListener('drop', (e) => {
            e.preventDefault();
            canvas.classList.remove('dragging');

            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                this.loadImage(canvas, file);
            }
        });

        //click para seleccionar archivo
        canvas.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    this.loadImage(canvas, file);
                }
            };
            input.click();
        });
    }

    loadImage(canvas, file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                this.drawImageScaled(img, canvas);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    drawImageScaled(img, canvas) {
        const ctx = canvas.getContext('2d');
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width - img.width * scale) / 2;
        const y = (canvas.height - img.height * scale) / 2;
        
        // Limpiar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dibujar la imagen escalada
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    }
}

const dropZone = new DropZone();

export {dropZone}