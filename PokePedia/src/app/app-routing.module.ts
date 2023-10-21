import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonInfoComponent } from './components/pokemon-info/pokemon-info.component';
import { CardComponent } from './components/card/card/card.component';

const routes: Routes = [
  {
    path:"",
    component:CardComponent

  },
  {
    path:"pokemonInfo",
    component:PokemonInfoComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
