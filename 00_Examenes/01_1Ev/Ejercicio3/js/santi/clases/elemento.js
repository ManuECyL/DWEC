export class Elemento {

    constructor(tag) {
        this._tag = tag;
        this.idElemento = this.asignarId();
        this._innerHTML = '';
        this._innerText = '';
        // this.elementoHTML = document.createElement(this.tag);
    }

    get tag() {
        return this._tag.toUpperCase();
    }


    get innerHTML() {
        return this._innerHTML;
    }

    set innerHTML(in_innerHTML) {
        this._innerHTML = in_innerHTML;
    }

                
    get innerText() {
        return this._innerText;
    }

    set innerText(in_innerText) {
        this._innerText = in_innerText;
    }

    asignarId() {
        let numElementos = document.getElementsByTagName(this.tag).length;
        console.log(numElementos);
        return `${this.tag}_${(numElementos + 1)}`;
    }

    agregarPrimero(elemento) {
        // elemento.children[0].before(this);
        const elementoHTML = document.createElement(this.tag);
            elementoHTML.innerHTML = this.innerHTML;
            elementoHTML.innerText = this.innerText;

        elemento.insertBefore(elementoHTML, elemento.firstChild);
    }

    // nuevoEstilo(propiedad, valor) {
    //     this.elementoHTML.style[propiedad] = valor;
    // }
}