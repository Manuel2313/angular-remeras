import { Injectable } from '@angular/core';
import { remera } from './remeras-list/remera';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemerasCartService {

  private _cartList: remera[] = [];
  cartList: BehaviorSubject<remera[]> = new BehaviorSubject([]);

  constructor() { }

  addToCart(remera:remera){
    let item: remera = this._cartList.find(v1 => v1.name == remera.name);
    if(!item){
      this._cartList.push({...remera});
    }else{
      item.quantity += remera.quantity;
    }

    console.log(this._cartList);
    this.cartList.next(this._cartList); // equivalente al emiit de eventos
  }
}
