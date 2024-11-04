class Intro {
    constructor() {
        this.renderHTML();
    }


    renderHTML(){
        const contenedorIntro = document.getElementById('intro');
        contenedorIntro.innerHTML="";

        const title= document.createElement('h1');
        title.classList.add('titleKhroma');
        title.innerText = "KHROMA";

        const subtitle=document.createElement('h2');
        subtitle.classList.add('subtitle');
        subtitle.innerHTML = "DESIGN WITH <i>THE COLORS YOU LOVE</i>,";

        const explanation = document.createElement('p');
        explanation.classList.add('explanation');
        explanation.innerText = "Khroma gives you a visually appealing set of colors to explore and use in your designs. It provides information about a chosen color and also generates complementary color palettes. ";

        const buttonContinue = document.createElement('button');
        buttonContinue.innerText = "Go!"
        buttonContinue.addEventListener('click', ()=> {
        document.getElementById('intro').style.display="none"})

        contenedorIntro.append(title,subtitle,explanation,buttonContinue);
    }

}

const intro = new Intro();