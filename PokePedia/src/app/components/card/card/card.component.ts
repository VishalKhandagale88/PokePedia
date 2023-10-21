import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/Service/pokemon.service';
import { PokemonListResponse } from 'src/modal/PokemonListResponse';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private pokemonService:PokemonService){
  }

  pokemons:any[]=[];
  ngOnInit(): void {
    this.pokemonService.getAllPokemonsData().subscribe((response:any)=>{
      response.results.forEach((result: any)=>{
        this.pokemonService.getDetails(result.name).subscribe((pokemonResponse:any)=>{
          this.pokemons.push(pokemonResponse);
          console.log(this.pokemons);
        })
      })
    })
  }

}
