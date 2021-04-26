import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pokeServiceRes, PokeInfo } from './pokemon';

const url  = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable({
  providedIn: 'root'
})

export class PokeAPIServicesService {


  constructor(private http: HttpClient) {

  }

  getPokemon() : Observable<pokeServiceRes >{
    return this.http.get<pokeServiceRes >(url);
  }

  //Get infos on pokemons
  getPokemonINfo(id : string) : Observable<PokeInfo>{
    return this.http.get<PokeInfo >(url + id + '/');

  }
}
