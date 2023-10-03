export class Transaction {
    nombre : string;
    monto : string;
    fecha : string; 
    estado : string;

    constructor(nombre: string, monto:string, fecha:string, estado:string){
        this.nombre = nombre;
        this.monto = monto;
        this.fecha = fecha;
        this.estado = estado;
    }

}
