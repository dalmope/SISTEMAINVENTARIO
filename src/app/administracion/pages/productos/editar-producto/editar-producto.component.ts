import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/administracion/services/categorias.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductosService } from 'src/app/administracion/services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  form! : FormGroup;

  categorias : any [] =[];

  id:any;

  constructor(
    private categoria: CategoriasService,
    private fb : FormBuilder,
    private pro : ProductosService,
    private aRoute : ActivatedRoute,
    private router : Router,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.form = this.fb.group({
      nombre     : ["", Validators.required],
      precio     : ["", Validators.required],
      cantidad   : ["", Validators.required],
      iva        : ["", Validators.required],
      retencion  : ["", Validators.required],
      cantidad_minima : ["", Validators.required],
      categoria : ["", Validators.required]
    })

    

    this.categoria.getCategorias(localStorage.getItem('token')!).subscribe(data=>{
      this.categorias=data;
      console.log(this.categorias)
    })

    this.obtenerProducto();
  }

  obtenerProducto(){
    this.pro.obtenerProducto(this.id, localStorage.getItem('token')!).subscribe(data=>{
      this.form.setValue({
        nombre:data.nombre,
        precio: data.precio,
        cantidad:data.cantidad,
        iva:data.iva,
        retencion: data.retencion,
        cantidad_minima : data.cantidad_minima,
        categoria:data.categoria
      })
    });
  }

 

  editarProducto(){
    this.pro.editarProducto(this.id, localStorage.getItem('token')!, this.form.value).subscribe(data=>{
      console.log(data);
      this.toastr.success('Producto Actualizado Con Exito!', 'Actualizado',{
        positionClass: 'toast-bottom-right'
      });
      this.router.navigateByUrl("/administracion/productos");
    },error=>{
      this.toastr.error(`${error.error}`, 'Error',{
        positionClass: 'toast-bottom-right'
      });
    })
  }

}
