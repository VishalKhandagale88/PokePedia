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

  pokemons:any[]=[];
  ngOnInit(): void {
    this.pokemonService.getAllPokemonsData().subscribe((response:any)=>{
      response.results.forEach((result: any)=>{
        this.pokemonService.getDetails(result.name).subscribe((pokemonResponse:any)=>{
          this.pokemons.push(pokemonResponse);
           console.log(this.pokemons);

        })
      })
      this.pokemonDataService.setPokemons(this.pokemons);
    })
  }

}
