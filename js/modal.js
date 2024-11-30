export class Modal{
    constructor(content,parentId){
        this.content = content; // clase Madre
        this.parentId = parentId;
        this.parent = document.getElementById("tarjetaColor");
        this.createModal();
        this.hide();
    }
  
        
    show(){
        this.modal.style.display ="hidden";
    }
    hide(){
        this.modal.style.display = "block";
    }
    createModal(){
        this.modal = document.createElement("div");
        this.modalBody = document.createElement("div");

        const closeX = document.createElement("span");
        closeX.style.cursor = "pointer";
        closeX.innerHTML = "&times;"

        this.modal.classList.add("modal");
        this.modalBody.classList.add("modal-body");
        closeX.classList.add("top-right");

        this.modalBody.append(closeX); //aqui madre
        if (this.content && typeof this.content.renderHTML === "function") {
            this.modalBody.append(this.content.renderHTML()); 
        }

        this.modal.append(this.modalBody);

        this.parent.appendChild(this.modal);

        closeX.addEventListener("click",()=>this.hide())
        this.modal.addEventListener("click",()=>this.hide());
        this.modalBody.addEventListener("click",(e)=>e.stopPropagation())
    }
}

// const madreInstance = new Madre(data); 
// const modal = new Modal(madreInstance, "tarjetaColor"); 
// modal.show();

