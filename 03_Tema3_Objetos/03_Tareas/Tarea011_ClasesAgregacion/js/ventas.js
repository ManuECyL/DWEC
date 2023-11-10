import { Producto } from "./clases/claseProducto.js";
import { Orden } from "./clases/claseOrden.js";

let producto1 = new Producto('Camisa', 36);
let producto2 = new Producto('Americana', 214);
let producto3 = new Producto('Pantalón', 160);

let orden1 = new Orden();
    orden1.agregarProductos(producto1);
    orden1.agregarProductos(producto2);
    orden1.agregarProductos(producto3);
    
console.log(orden1.toString());


let producto4 = new Producto('pAntalón', 160);
let producto5 = new Producto('americana', 214);

let orden2 = new Orden();
    orden2.agregarProductos(producto4);
    orden2.agregarProductos(producto5);
    orden2.agregarProductos(producto5);
    orden2.agregarProductos(producto5);
    orden2.agregarProductos(producto5);

console.log(orden2.toString());

orden2.agregarProductos(producto1);
orden2.agregarProductos(producto1);