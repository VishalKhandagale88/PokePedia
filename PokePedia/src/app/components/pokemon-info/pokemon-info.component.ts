import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from 'src/Service/pokemon-data.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit{
  pokemons:any[]=[];
  constructor(private pokemonDataService: PokemonDataService){}
  ngOnInit(): void {
    this.pokemons = this.pokemonDataService.getPokemons();
  }

}
