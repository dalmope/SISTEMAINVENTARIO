import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriasService } from '../../../services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  form! : FormGroup; 
  id : any;

  constructor(
    private categoria: CategoriasService,
    private fb: FormBuilder,
    private aRoute : ActivatedRoute,
    private toastr : ToastrService,
    private router : Router) {

  }

  ngOnInit(): void {
    this.id=this.aRoute.snapshot.paramMap.get('id');
    this.form=this.fb.group({
      id: ["", Validators.required],
      nombre : ["", Validators.required]
    })

    this.esEditar();
  }


  esEditar(){
    this.categoria.obtenerCategoria(this.id, localStorage.getItem('token')!).subscribe(data=>{
      console.log(data)
      this.form.setValue({
        id : data.id,
        nombre : data.nombre
      })
    })
  }

  actualizar(){
    this.categoria.editarCategoria(this.id, localStorage.getItem('token')!, this.form.value).subscribe(data=>{
      this.toastr.success('Categoria Actualizada Con Exito!', 'Actualizada',{
        positionClass: 'toast-bottom-right'
      });
      this.router.navigateByUrl('/administracion/categorias');
    },error=>{
      console.log({error})
      this.toastr.error(error, 'Error',{
        positionClass: 'toast-bottom-right'
      });
    })
  }

}
