import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViandasListComponent } from './viandas-list/viandas-list.component';
import { FormsModule } from '@angular/forms';
import { MyVianditaAboutComponent } from './my-viandita-about/my-viandita-about.component';
import { MyVianditaViandasComponent } from './my-viandita-viandas/my-viandita-viandas.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ViandasListComponent,
    MyVianditaAboutComponent,
    MyVianditaViandasComponent,
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
