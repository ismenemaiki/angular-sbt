import { InicioComponent } from './inicio/inicio.component';
import { FuncionalComponent } from './funcional/funcional.component';
import { AppComponent } from './app.component';
// import { Routes, RouterModule } from '@angular/router';
// import { ModuleWithProviders } from '@angular/core';

// const APP_ROUTES: Routes = [
//   { path: '', component: AppComponent },
//   { path: 'jquery', component: FuncionalComponent }
// ];

// export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({

  imports: [
    RouterModule.forRoot([
      { path: '', component: InicioComponent },
      { path: 'home', component: InicioComponent },
      { path: 'jquery', component: FuncionalComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}
