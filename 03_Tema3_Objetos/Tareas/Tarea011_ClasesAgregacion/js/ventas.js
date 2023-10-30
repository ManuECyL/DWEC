import { Producto } from "./clases/claseProducto.js";
import { Orden } from "./clases/claseOrden.js";

let producto1 = new Producto('Camisa', 36);
let producto2 = new Producto('Americana', 214);
let producto3 = new Producto('Pantalón', 160);
let orden1 = new Orden(producto1, producto2, producto3);

console.log(orden1.toString());

