import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { PokemonListResponse } from 'src/modal/PokemonListResponse';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClent : HttpClient ) { }
  baseUrl:string = "https://pokeapi.co/api/v2";

  // fetching all the pokemons from the api
  getAllPokemonsData(limit:number,offset:number){
    return this.httpClent.get(`${this.baseUrl}/pokemon?limit=${limit}&offset=${offset}`);
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
