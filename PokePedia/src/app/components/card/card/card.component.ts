import { Component } from '@angular/core';
import { PokemonService } from 'src/Service/pokemon.service';
import { PokemonListResponse } from 'src/modal/PokemonListResponse';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private pokemonService:PokemonService){
    this.getPokemonData();
  }

  pokemonData:PokemonListResponse={
    results: [],
    count: 0,
    next: null,
    previous: null
  }
  getPokemonData(){
    this.pokemonService.getAllPokemonsData().subscribe(data=>{
      // this.pokemonData.results=data;
      // console.log(data);
      // console.log(data);
      this.pokemonData=data
      // console.log(this.pokemonData.results);
      console.log(this.pokemonData.results);

    });
    // console.log(this.pokemonData.results);
    console.log("THis is pokemonData");
  }

}
