import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDataService } from 'src/Service/pokemon-data.service';
import { PokemonService } from 'src/Service/pokemon.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit{

  pokemons:any[]=[];
  pokemonName:string | null | undefined;
  pokemon:any;

  pokemonAbility:any;
  pokemonId:number=0;

  constructor(private pokemonDataService: PokemonDataService,
    private pokemonService:PokemonService,
    private route:ActivatedRoute){
    }

  ngOnInit(): void {
    this.getData();

  }

  getData(){

    this.route.params.subscribe(params=>{
      this.pokemonName=params['name'];
      this.pokemon = this.pokemonDataService.getPokemons().find((p) => p.name === this.pokemonName);
      this.pokemonId = this.pokemon.id;
      this.getAbility(this.pokemonId);
    })

  }

  getAbility(id:number){
    this.pokemonService.getPokemonAbilities(id).subscribe((data):any=>{
      this.pokemonAbility=data;
      console.log(this.pokemonAbility);
    })

  }


}
