
export class Factura{

    // estamos utilizando o creando una relación de composición tal que, una factura contine 'n' líneas...
    lineas:lineaFactura[]=[];

    constructor(public numero: number, public concepto: string, public importe: number){
        
    }

    addLinea(linea:lineaFactura){
        this.lineas.push(linea)
    }
}

export class lineaFactura{
    constructor(public numero:number, public concepto: string, public importe: number){

    }
}