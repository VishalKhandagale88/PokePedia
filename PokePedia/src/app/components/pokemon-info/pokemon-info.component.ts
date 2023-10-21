import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDataService } from 'src/Service/pokemon-data.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit{

  pokemons:any[]=[];
  pokemonName:string | null | undefined;
  pokemon:any;


  constructor(private pokemonDataService: PokemonDataService,
    private route:ActivatedRoute){
    }

  ngOnInit(): void {
    this.getData();
  }

  getData(){

    this.route.params.subscribe(params=>{
      this.pokemonName=params['name'];
      this.pokemon = this.pokemonDataService.getPokemons().find((p) => p.name === this.pokemonName);
      console.log(this.pokemon);
    })
  }



}
