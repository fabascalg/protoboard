//var express = require("express");
import * as express from "express";
import { FacturaController } from "./facturaController";
//import { Application, Request, Response } from "express";
var app: express.Application = express();
var facturaController:FacturaController=new FacturaController(app);
facturaController.findAll();
facturaController.findOne();
const port:number = 3000;
/*
var listaFacturas: Factura[]=[];

listaFacturas.push(new Factura(1,"ordenador",450));
listaFacturas.push(new Factura(2,"telefono",250));

app.get('/facturas', (req:Request, res:Response) => {
  res.send(listaFacturas);
})


app.get('/facturas/:numero', (req:Request, res:Response) => {
  let factura=listaFacturas.filter((f:Factura)=>{
    return f.numero == parseInt(req.params.numero);
  })[0];
  res.send(factura);
})

app.get('/facturas/:numero', (req:Request, res:Response) => {
  let factura=listaFacturas.find((f:Factura)=>{
    return f.numero == parseInt(req.params.numero);
  });
  res.send(factura);
})
*/
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})