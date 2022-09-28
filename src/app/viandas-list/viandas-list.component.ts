import { Component, OnInit } from '@angular/core';
import { Vianda } from './viandas';

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
  },
  {
    "food":"Papas",
    "content": "Papas fritas",
    "price": 300,
    "image": "assets/img/milanesa.jpg",
    "offer": false,
  },
  {
    "food":"Pizza especial",
    "content": "Queso, paleta, tomate, morron",
    "price": 1200,
    "image": "assets/img/milanesa.jpg",
    "offer": true,
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
