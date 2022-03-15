import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import {  HeroesService } from "../../services/heroes.services";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
//export class HeroeComponent implements OnInit {
export class HeroeComponent {

  heroe:any = {
    
  }

  constructor(private _router:Router, private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      //Corresponde al ID que enviamos en 'app.routes.ts'
      //console.log(params['id']);

      this.heroe = this._heroesService.getHeroeSingular(params['id']);
      //console.log(this.heroe.casa);
  
    });
        
  }

  ngOnInit(): void {
  }

  //Vuelve a la pestaña con la lista de heroes
  volverAtras(){
    this._router.navigate( ['/heroes'])
  }

  

}
