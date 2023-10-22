import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  constructor() { }
  private pokemons: any[] = [];

  getPokemons() {
    return this.pokemons;
  }

  setPokemons(data: any[]) {
    this.pokemons = data;
  }

  
}
