import { Component, OnInit } from '@angular/core';
import { Vianda } from './Viandas';

@Component({
  selector: 'app-viandas-list',
  templateUrl: './viandas-list.component.html',
  styleUrls: ['./viandas-list.component.scss']
})
export class ViandasListComponent implements OnInit {

  viandas: Vianda [] = [
  {
    "food":"Milanesa",
    "content": "Milanesa, lechuga, tomate",
    "price": 700,
    "image": "assets/img/milanesa.jpg",
    "offer": false,
    "quantity": 0,
  },
  {
    "food":"Papas",
    "content": "Papas fritas",
    "price": 300,
    "image": "assets/img/milanesa.jpg",
    "offer": false,
    "quantity": 0,
  },
  {
    "food":"Pizza especial",
    "content": "Queso, paleta, tomate, morron",
    "price": 1200,
    "image": "assets/img/milanesa.jpg",
    "offer": true,
    "quantity": 0,
  }
];

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(vianda: Vianda): void{
    vianda.quantity++;
  }

  
  downQuantity(vianda: Vianda): void{
    if(vianda.quantity > 0)
    vianda.quantity--;
  }
}
