import { Elemento } from "./elemento.js";

export class Texto extends Elemento {

    constructor(tag) {
        super(tag);
        this._innerText = '';
    }

    get innerText() {
        return this._innerText;
    }

    set innerText(in_innerText) {
        this._innerText = in_innerText;
    }
}