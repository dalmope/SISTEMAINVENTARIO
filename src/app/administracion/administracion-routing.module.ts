import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { NuevoProductoComponent } from './pages/productos/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from './pages/productos/editar-producto/editar-producto.component';
import { NuevaCategoriaComponent } from './pages/categorias/nueva-categoria/nueva-categoria.component';
import { NuevoEmpleadoComponent } from './pages/empleados/nuevo-empleado/nuevo-empleado.component';
import { EditEmpleadoComponent } from './pages/empleados/edit-empleado/edit-empleado.component';
import { EditarCategoriaComponent } from './pages/categorias/editar-categoria/editar-categoria.component';
import { EditarProveedorComponent } from './pages/proveedores/editar-proveedor/editar-proveedor.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { NuevaCompraComponent } from './pages/compras/nueva-compra/nueva-compra.component';
import { EditarCompraComponent } from './pages/compras/editar-compra/editar-compra.component';

const routes: Routes = [
  {path:"", component:PrincipalComponent, children:[
    {path:"dashboard", component:DashboardComponent},
    {path:"empleados", component:EmpleadosComponent},
    {path:"nuevoEmpleado", component:NuevoEmpleadoComponent},
    {path:"empleado/edit/:id", component:EditEmpleadoComponent},
    {path:"categorias", component:CategoriasComponent},
    {path:"nuevaCategoria", component:NuevaCategoriaComponent},
    {path:"categoria/edit/:id", component:EditarCategoriaComponent},
    {path:"productos", component:ProductosComponent},
    {path:"nuevoProducto", component:NuevoProductoComponent},
    {path:"producto/edit/:id", component:EditarProductoComponent},
    {path:"proveedores", component:ProveedoresComponent},
    {path:"proveedores/edit/:id", component:EditarProveedorComponent},
    {path:"compras", component: ComprasComponent},
    {path:"compras/add", component: NuevaCompraComponent},
    {path:"compras/editar/:id", component: EditarCompraComponent},
    {path:"**", redirectTo:"dashboard"},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
