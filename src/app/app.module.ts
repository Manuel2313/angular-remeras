import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemerasListComponent } from './remeras-list/remeras-list.component';
import { FormsModule } from '@angular/forms';
import { GuantaRemerasComponent } from './guanta-remeras/guanta-remeras.component';
import { GuantaAboutComponent } from './guanta-about/guanta-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    RemerasListComponent,
    GuantaRemerasComponent,
    GuantaAboutComponent,
    InputIntegerComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
