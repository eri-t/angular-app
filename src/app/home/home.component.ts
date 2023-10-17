import { Component } from "@angular/core";
import { RopaService } from "../services/ropa.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent {
    public titulo = 'Pagina Principal';
    public listado_ropa:Array<string>;
    public nueva_prenda:string;

    constructor(
        private _ropaService: RopaService
    ){}

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }

    guardarPrenda(){
        this._ropaService.addRopa(this.nueva_prenda);
        this.nueva_prenda = '';
    }

    eliminarPrenda(index:number){
        this._ropaService.deleteRopa(index);
    }
}