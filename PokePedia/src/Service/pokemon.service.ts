import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PokemonListResponse } from 'src/modal/PokemonListResponse';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClent : HttpClient ) { }
  baseUrl:string = "https://pokeapi.co/api/v2";

  // fetching all the pokemons from the api
  getAllPokemonsData(){
    return this.httpClent.get(`${this.baseUrl}/pokemon?limit=20&offset=0`);
  }

  getDetails(name:string){
    return this.httpClent.get(`${this.baseUrl}/pokemon/${name}`)
  }

  getPokemonAbilities(id:number){
    return this.httpClent.get(`${this.baseUrl}/ability/${id}`)
  }

  getMovesOfPokemon(id:number){
    return this.httpClent.get(`${this.baseUrl}/move/${id}`)
  }
}
