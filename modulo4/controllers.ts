import * as express from "express";
//import { Application, Request, Response } from "express";
import { Factura, lineaFactura } from "./models";


export class FacturaController {

    listaFacturas: Factura[] = [];
    app: express.Application

    constructor(app: express.Application) {
        this.app = app;
        let factura1 = new Factura(1, "ordenador", 450);
        let factura2 = new Factura(2, "telefono", 250);
        factura1.addLinea(new lineaFactura(1,"cpu",300));
        factura1.addLinea(new lineaFactura(2,"monitor",100));
        factura2.addLinea(new lineaFactura(1,"terminal",200));
        factura2.addLinea(new lineaFactura(2,"auriculares",50));
        this.listaFacturas.push(factura1);
        this.listaFacturas.push(factura2);
    }

    findAll() {

        this.app.get('/facturas', (req: express.Request, res: express.Response) => {
            res.send(this.listaFacturas);
        })
    }
    /*
    app.get('/facturas/:numero', (req:Request, res:Response) => {
      let factura=listaFacturas.filter((f:Factura)=>{
        return f.numero == parseInt(req.params.numero);
      })[0];
      res.send(factura);
    })
    */
    findOne() {
        this.app.get('/facturas/:numero', (req: express.Request, res: express.Response) => {
            let factura = this.listaFacturas.find((f: Factura) => {
                return f.numero == parseInt(req.params.numero);
            });
            res.send(factura);
        })
    }
}