/*export class Telefono{
    marca: string;
    modelo: string;
    precio:number;
    constructor(marca:string,modelo:string,precio:number){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}*/
// TypeScript Class Expression
export class Telefono{
    constructor(public marca:string,public modelo:string,public precio:number){
    }
}

