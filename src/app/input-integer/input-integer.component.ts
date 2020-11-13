import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
  @Input()
  quantity: number;
  @Input()
  max: number;
  @Output()
  quantityChange:EventEmitter<number> = new EventEmitter<number>();
  @Output()
  cant_maxReached: EventEmitter<string>= new EventEmitter<string>();
  ngOnInit(): void {
  }

  changeQuantity(event): void {
    if (event.key > 0 && event.key < 5)
      event.preventDefault();
      this.quantityChange.emit(this.quantity);
  }
  upQuantity(): void {
    if (this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.cant_maxReached.emit("Llego al limite de remeras en stock.");
    }
  }

  downQuantity(): void {
    if (this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}
