import { Component, OnInit } from '@angular/core';
import {HeroesService, HeroeInterface} from '../../services/heroes.services';
import { Router } from '@angular/router'



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:HeroeInterface[] = [];
  
  //El constructor se ejecuta antes que el ngOnInit
  constructor(private _heroesService: HeroesService, private _router:Router) {


  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
   /*  console.log(this.heroes); */
  
  }

  verHeroe(idx: number){
    console.log(idx);
    this._router.navigate( ['/heroe', idx] )
  }

}
