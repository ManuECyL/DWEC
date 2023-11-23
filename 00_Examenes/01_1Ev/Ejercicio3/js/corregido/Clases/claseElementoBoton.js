import { ElementoDOM } from "./claseElementoDOM.js";

export class ButtonElement extends ElementoDOM {

    constructor() {
        super('button');
        this.element.style.width = '100%';
        this.addEventListeners();
    }

    addEventListeners() {
        this.element.addEventListener('mouseover', () => {
            const h1Elements = document.querySelectorAll('h1');
            h1Elements.forEach(element => {
                element.style.color = 'blue';
            });
        });

        this.element.addEventListener('mouseout', () => {
            const h1Elements = document.querySelectorAll('h1');
            h1Elements.forEach(element => {
                element.style.color = '';
            });
        });

        let h2ColorChanged = false;
        this.element.addEventListener('click', () => {

            const h2Elements = document.querySelectorAll('h2');

            h2Elements.forEach(element => {

                if (!h2ColorChanged) {
                    element.style.color = 'green';

                } else {
                    element.style.color = '';
                }
            });

            h2ColorChanged = !h2ColorChanged;
        });
    }
}
