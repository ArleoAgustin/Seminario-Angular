import { Component, OnInit, ɵisListLikeIterable } from '@angular/core';
import { Vianda } from '../viandas-list/Viandas';
import { MyVianditaViandasComponent } from '../my-viandita-viandas/my-viandita-viandas.component';
import { ViandasListComponent } from '../viandas-list/viandas-list.component';
import { ViandaCartService } from '../vianda-cart.service';
import { isEmpty, Observable, observable } from 'rxjs';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent  implements OnInit {

  viandasInCart$: Observable<Vianda[]>;
  haveProd:boolean = false;
  viandas: Vianda[] = [];
  total: number;

  constructor(private cart: ViandaCartService) {
    
    this.total = 0;
    this.viandasInCart$ = cart.listCart.asObservable();
    this.viandasInCart$.subscribe(viandas =>  this.viandas = viandas);
    console.log(this.total);
    
    
    }
    
  estaVacio():boolean{
    
    return this.viandas[0] != null;
  }


actualizarTotal():void{

  if(!this.estaVacio){
    for(let i =0; i<this.viandas.length;i++){
      if(this.viandas[i].offer)
        this.total+= this.viandas[i].priceOffer
      else
        this.total+=this.viandas[i].price;
    }
    this.haveProd = true;
  }
  
}

  ngOnInit(): void {
   
   
  }

  removeVianda(vianda:Vianda):void{
    this.cart.removeViandainCart(vianda);
    console.log("mis viandas", this.viandas)
  }

}
