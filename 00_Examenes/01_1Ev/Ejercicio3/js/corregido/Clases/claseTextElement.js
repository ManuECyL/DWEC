import { ElementoDOM } from "./claseElementoDOM.js";

export class TextElement extends ElementoDOM {

    constructor(tag) {
        super(tag);
    }

    changeTextColor(color) {
        this.setStyleProperty('color', color);
    }
}
