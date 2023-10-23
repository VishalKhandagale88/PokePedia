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


  // ability data
  pokemonMoves:any;

  // accuracy max value
  maxValue:number = 200;

  // max power
  maxPower = 200;

  //pokemon species
  pokemonSpecies:any;

  maxBaseHappiness=100;

  pokemonColor:string|null|undefined;

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
      // console.log(this.pokemonAbility);
      this.getMoves(id);
    })

  }

  getMoves(id:number){
    this.pokemonService.getMovesOfPokemon(id).subscribe((data)=>{
      this.pokemonMoves = data;
      this.getSpecies(id);
    })
  }

  getSpecies(id:number){
    this.pokemonService.getPokemonSpecies(id).subscribe(data=>{
      this.pokemonSpecies = data
      console.log(this.pokemonSpecies);
      this.pokemonColor=this.pokemonSpecies.color.name
    })
  }


}
