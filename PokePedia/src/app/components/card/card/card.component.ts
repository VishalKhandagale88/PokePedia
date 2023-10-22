import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from 'src/Service/pokemon-data.service';
import { PokemonService } from 'src/Service/pokemon.service';




@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private pokemonService:PokemonService,
    private pokemonDataService: PokemonDataService){
  }maxValue=500;
  page=1;
  totalPokemons:number=100;

  pokemons:any[]=[];
  ngOnInit(): void {
    this.getPokemons();
  }
  // get all pokemons method
  getPokemons(){
    this.pokemonService.getAllPokemonsData(10,this.page+0).subscribe((response:any)=>{
      response.results.forEach((result: any)=>{
        this.totalPokemons = response.count;

        this.pokemonService.getDetails(result.name).subscribe((pokemonResponse:any)=>{
          this.pokemons.push(pokemonResponse);
        })
      })
      this.pokemonDataService.setPokemons(this.pokemons);
    })
  }
}
