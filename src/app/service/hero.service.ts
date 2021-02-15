import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroList: Hero[] = [
    {
      id: 1,
      name: 'Zsolt',
      superPower: 'Stealing',
      adress: 'Tahitotfalu'
    },
    {
      id: 2,
      name: 'Pista',
      superPower: 'Drinking',
      adress: 'Salakszentmotoros'
    },
    {
      id: 3,
      name: 'Gyula',
      superPower: 'Running from cops',
      adress: 'Darnózseli'
    },
    {
      id: 4,
      name: 'Zsiga',
      superPower: 'Opening locks',
      adress: 'Lovászpatona'
    },
    {
      id: 5,
      name: 'Elemér',
      superPower: 'Extraordinary smell',
      adress: 'Almásfüzitő'
    },
  ]


  constructor() { }

  getAll(): Hero[] {
    return this.heroList;
  };

}
