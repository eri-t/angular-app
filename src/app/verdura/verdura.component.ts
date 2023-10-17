import { Component } from "@angular/core";
import {Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'verdura',
    template: `
    <h2>{{nombre_componente}}</h2>
    <p>{{listado_verduras}}</p>

    <p *ngIf="parametro">Parametro de la url: {{parametro}}</p>

    
    <button *ngIf="!parametro" (click)="redirect()">Ir a pagina con parametro</button>
    <button *ngIf="!parametro" (click)="redirectToHome()">Ir a home</button>

    <!--<empleado-tag />-->
    `
})

export class VerduraComponent{
    public nombre_componente = 'Componente de verdura';
    public listado_verduras = 'Acelga, espinaca y brocoli';
    public parametro: any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        this._route.params.forEach((params:Params)=>{
            this.parametro = params['verdura'];
        });
    }

    redirect(){
        this._router.navigate(['/verdura', 'espinaca'])
    }

    redirectToHome(){
        this._router.navigate([''])
    }
}