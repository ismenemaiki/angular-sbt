import { FormsModule } from '@angular/forms';
import { TabelaComponent } from './tabela/tabela.component';
import { FuncionalComponent } from './funcional.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FuncionalComponent,
    TabelaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FuncionalModule { }
