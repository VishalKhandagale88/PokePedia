

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results:{name:string|null,url:string|null}[] ;
};
