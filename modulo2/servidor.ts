//var express = require("express");
import express, { Application, Request, Response } from "express";
import {Factura} from "./factura";
var app: Application = express();
const port:number = 3000;

var listaFacturas: Factura[]=[];

listaFacturas.push(new Factura(1,"ordenador",450));
listaFacturas.push(new Factura(2,"telefono",250));

app.get('/facturas', (req:Request, res:Response) => {
  res.send(listaFacturas);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})