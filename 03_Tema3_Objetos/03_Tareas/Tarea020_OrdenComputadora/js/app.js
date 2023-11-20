import { Computadora } from "./Clases/claseComputadora.js";
import { Orden } from "./Clases/claseOrden.js";

let producto1 = new Producto('Camisa', 36);


let orden1 = new Orden();
    orden1.agregarProductos(producto1);
    orden1.agregarProductos(producto2);
    orden1.agregarProductos(producto3);
    
console.log(orden1.toString());


