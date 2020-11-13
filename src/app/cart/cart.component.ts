import { Component, OnInit } from '@angular/core';
import { RemerasCartService } from '../remeras-cart.service';
import { remera } from '../remeras-list/remera';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable <remera[]>;
  constructor(private cart:RemerasCartService){
    this.cartList$ = cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

}
