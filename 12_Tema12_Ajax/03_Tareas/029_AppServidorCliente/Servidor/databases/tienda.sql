DROP DATABASE IF EXISTS tienda;
CREATE DATABASE tienda;
USE tienda;

CREATE TABLE Clientes (
    id_cliente INT PRIMARY KEY,
    nombre VARCHAR(50)
);

CREATE TABLE Categorias (
    id_categoria INT PRIMARY KEY,
    nombre VARCHAR(50)
);

CREATE TABLE Productos (
    id_prod INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    categoria INT,
    precio FLOAT,
    stock INT,
    FOREIGN KEY (categoria) REFERENCES Categorias(id_categoria)
);