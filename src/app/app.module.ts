import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FuncionalComponent } from './funcional/funcional.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { TabelaComponent } from './funcional/tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionalComponent,
    InicioComponent,
    MenuComponent,
    TabelaComponent
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
