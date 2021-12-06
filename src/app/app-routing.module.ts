import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './login/usuario/usuario.component';

const routes: Routes = [
  {path:"", component:UsuarioComponent},
  {
    path:"administracion",
    loadChildren: ()=> import("../app/administracion/administracion.module").then(m => m.AdministracionModule)
  },
  {
    path:"**", redirectTo:""
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
