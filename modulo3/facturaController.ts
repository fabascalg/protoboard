import * as express from "express";
//import { Application, Request, Response } from "express";
import { Factura } from "./factura";


export class FacturaController {

    listaFacturas: Factura[] = [];
    app: express.Application

    constructor(app: express.Application) {
        this.app = app;
        this.listaFacturas.push(new Factura(1, "ordenador", 450));
        this.listaFacturas.push(new Factura(2, "telefono", 250));
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