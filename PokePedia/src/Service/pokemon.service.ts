import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { PokemonListResponse } from 'src/modal/PokemonListResponse';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClent : HttpClient ) { }
  baseUrl:string = "https://pokeapi.co/api/v2";
  // fetching all the pokemons from the api
  getAllPokemonsData():Observable<PokemonListResponse>{
    return this.httpClent.get<PokemonListResponse>(`${this.baseUrl}/pokemon`);
  }
}
