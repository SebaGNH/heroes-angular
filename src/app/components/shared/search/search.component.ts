import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService, HeroeInterface } from '../../../services/heroes.services';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes:HeroeInterface [] = [];

  constructor(
    private _heroesService: HeroesService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute
    ) {

    this._activatedRoute.params.subscribe(params => {

      console.log(params);
    });
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.buscarHeroes('Hulk');
  }

}