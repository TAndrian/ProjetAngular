import { PokeInfo } from './../pokemon';
import { Component, Input, OnInit } from '@angular/core';
import { PokeShareInfoService } from '../poke-share-info.service';

@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
})
export class PokedetailComponent implements OnInit {

  @Input('detail')
   detail!: PokeInfo;


  constructor(private pokeShareInfoService: PokeShareInfoService) { }

  ngOnInit(): void {
    console.log(this.pokeShareInfoService.getObservable());
  }

}
