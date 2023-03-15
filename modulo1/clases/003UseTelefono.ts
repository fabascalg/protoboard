import {Telefono} from "./Telefono";

let t1:Telefono= new Telefono("Samsung","Galaxy Note 8",1200);
let t2:Telefono= new Telefono("Xiaomi","Mi 10 Lite 5G",80)

let listaTelefonos: Telefono[]=[]

listaTelefonos.push(t1)
listaTelefonos.push(t2)

listaTelefonos.map( (tlf) => {
    console.dir(tlf)
})