import { RouterModule } from '@angular/router';
import { DetalhesComponent } from './tabela/detalhes/detalhes.component';

import { FormsModule } from '@angular/forms';
import { TabelaComponent } from './tabela/tabela.component';
import { FuncionalComponent } from './funcional.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FuncionalComponent,
    TabelaComponent,
    DetalhesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class FuncionalModule { }
