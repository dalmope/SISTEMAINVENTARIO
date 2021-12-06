import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from '../../../services/productos.service';
import { CategoriasService } from '../../../services/categorias.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  form! : FormGroup;
  categorias : any [] = [];

  constructor(
    private fb : FormBuilder,
    private producto : ProductosService,
    private categoria: CategoriasService,
    private Router: Router,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre : ["", Validators.required],
      precio : ["", Validators.required],
      cantidad : ["", Validators.required],
      iva : ["", Validators.required],
      retencion : ["", Validators.required],
      cantidad_minima : ["", Validators.required],
      categoria : ["", Validators.required]
    })

    this.categoria.getCategorias(localStorage.getItem('token')!).subscribe(data=>{
      this.categorias=data;
      console.log(this.categorias)
    })
  }

  agregarProducto(){
    this.producto.agregarProducto(this.form.value, localStorage.getItem('token')!).subscribe(data=>{
      // TODO: COLOCAR EL TOAS
      this.toastr.success('Producto Agregado Con Exito!', 'Actualizado',{
        positionClass: 'toast-bottom-right'
      });
      this.Router.navigateByUrl("/administracion/productos");
    },error=>{
      this.toastr.error(`${error.error}`, 'Error',{
        positionClass: 'toast-bottom-right'
      });
    })
  }

}
