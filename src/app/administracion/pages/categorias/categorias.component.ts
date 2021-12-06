import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CategoriasService } from '../../services/categorias.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  
  dtTrigger = new Subject<any>();

  categorias : any | null []=[];

  form! : FormGroup;

  constructor(
    private categoria: CategoriasService, 
    private fb : FormBuilder,
    private router : Router,
    private toastr : ToastrService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      nombre : ["", Validators.required]
    })

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    this.categoria.getCategorias(localStorage.getItem('token')!).subscribe(data=>{
      this.categorias=data;
      this.dtTrigger.next();
    })
  }


  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  agregarCategoria(){
    this.categoria.agregarCategoria(this.form.value, localStorage.getItem('token')!).subscribe(data=>{
      console.log(data);
      this.toastr.success('Categoria Agregada Con Exito!', 'Registrada',{
        positionClass: 'toast-bottom-right'
      });
      window.location.reload()
      // this.router.navigateByUrl("/administracion/categorias")
    },error=>{
      this.toastr.error(`${error.error}`, 'Error',{
        positionClass: 'toast-bottom-right'
      });
    })
  }
}
