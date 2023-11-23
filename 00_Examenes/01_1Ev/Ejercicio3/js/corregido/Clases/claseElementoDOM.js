export class ElementoDOM {
    
    constructor(tag) {
        this.tag = tag;
        this.id = this.generateId();
        this.element = document.createElement(tag);
        this.innerHtml = '';
        this.innerText = '';
        this.styles = {};
        this.applyId();
    }

    generateId() {
        const count = document.querySelectorAll(this.tag).length + 1;
        return `${this.tag.toUpperCase()}_${count.toString().padStart(3, '0')}`;
    }

    applyId() {
        this.element.id = this.id;
    }

    setStyleProperty(property, value) {
        this.styles[property] = value;
        this.element.style[property] = value;
    }

    addToParentAsFirstChild(parentElement) {
        parentElement.insertBefore(this.element, parentElement.firstChild);
    }

    addToParentAsLastChild(parentElement) {
        parentElement.appendChild(this.element);
    }

    addToBodyAsLastChild() {
        document.body.appendChild(this.element);
    }
}
