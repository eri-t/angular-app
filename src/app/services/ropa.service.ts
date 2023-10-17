import { Injectable } from "@angular/core";

@Injectable()
export class RopaService{
    public nombre_prenda = 'Jeans';
    public colleccion_ropa = ['Pantalon blanco', 'Remera roja']

    addRopa(nombre_prenda: string):Array<string>{
        this.colleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    getRopa() {
        return this.colleccion_ropa;
    }

    deleteRopa(index:number):Array<string>{
        this.colleccion_ropa.splice(index,1);
        return this.getRopa();
    }
}