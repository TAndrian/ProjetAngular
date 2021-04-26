import { PokeInfo } from './../pokemon';
import { PokeAPIServicesService } from './../poke-apiservices.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeShareInfoService } from '../poke-share-info.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServicesService]

})
export class MyComponentComponent implements OnInit {
  [x: string]: any;


  id!: string;
  selectedPokeId! : string ;
  searchPokeName = '';
  pokeInfo!: PokeInfo;
  myDate!:Date;
  siteKey! : string


  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  go(){
    if (this.selectedPokeId != ''){
      this.pokeService.getPokemonINfo(this.selectedPokeId).subscribe(data =>{
        this.pokeInfo = data;
        this.pokeShareInfoService.setValue(this.selectedPokeId);
      });
    }
  }

  pokes : Pokemon[] = [];
  constructor(private pokeService: PokeAPIServicesService, private pokeShareInfoService: PokeShareInfoService) {
    this.siteKey = '6Lc_CLkaAAAAADmsz1YJyRwTw1gppf5LVPs_x0Df';
  }

  ngOnInit(): void {
    this.pokeService.getPokemon().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokes.push(new Pokemon('' + index, e.name, e.url));
      } );
    });

  }
}
