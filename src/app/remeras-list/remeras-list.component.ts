import { Component, OnInit } from '@angular/core';
import { remera } from './remera';
import { RemerasCartService } from '../remeras-cart.service';

@Component({
  selector: 'app-remeras-list',
  templateUrl: './remeras-list.component.html',
  styleUrls: ['./remeras-list.component.scss']
})
export class RemerasListComponent implements OnInit {

  remeras: remera[] = [
    {
      name: 'Remera Negra',
      type: 'Estampa sapo',
      price: 700,
      stock: 5,
      image: "assets/img/sapo_negro.jpeg",
      clearance: true,
      quantity:0,
    },
    {
      name: 'Remera Blanca',
      type: 'Estampa serpiente',
      price: 1100,
      stock: 10,
      image: "assets/img/serpiente_blanca.jpeg",
      clearance: false,
      quantity:0,
    },
    {
      name: 'Remera Azul',
      type: 'Estampa serpiente',
      price: 1100,
      stock: 0,
      image: "assets/img/serpiente_azul.jpeg",
      clearance: false,
      quantity:0,
    }

  ];

  

  constructor(private cart:RemerasCartService) { }

  ngOnInit(): void {
  }

  cant_maxReached(mje: string){
    alert(mje);
  }
  addToCart(remera):void{


    this.cart.addToCart(remera);
    remera.stock -= remera.quantity;
    remera.quantity = 0;
  }
}
