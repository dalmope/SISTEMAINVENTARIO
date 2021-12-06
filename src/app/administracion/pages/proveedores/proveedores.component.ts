import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  dtTrigger = new Subject<any>();

  proveedores : any =[]=[];

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', Validators.required)
  });

  constructor(
    private http: ProveedoresService,
    private fb : FormBuilder,
    private router : Router,
    private toastr : ToastrService
    ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };

    this.getProveedores();
  }

  getProveedores(){
    this.http.getProveedores(localStorage.getItem('token')!).subscribe(data=>{
    this.dtTrigger.next();
    this.proveedores=data
    console.log(data)
   
    })
  }

  actualizarProveedor(){
    this.http.getProveedores(localStorage.getItem('token')!).subscribe(data=>{
      this.proveedores=data
      console.log(data)
      })
  }

  agregarProveedor(){
    this.http.postProveedor(this.form.value, localStorage.getItem('token')!).subscribe(data=>{
      console.log(data);
      this.toastr.success('Proveedor Agregado Con Exito!', 'Registrada',{
        positionClass: 'toast-bottom-right'
      });
      this.actualizarProveedor();
    }, (error: { error: any; }) => {
      this.toastr.error(`${error.error.mensaje}`, 'Error',{
        positionClass: 'toast-bottom-right'
      });
    })
  }

  editarProveedor(id: number){
    this.router.navigate(['/administracion/proveedores/editar/'+id])
  }

  eliminarProveedor(id: number){
    this.http.deleteProveedor(id, localStorage.getItem('token')!).subscribe(data=>{
      console.log(data);
      this.toastr.success('Proveedor Eliminado Con Exito!', 'Eliminada',{
        positionClass: 'toast-bottom-right'
      });
      this.actualizarProveedor();
    }
    , (error: { error: any; }) => {
      this.toastr.error(`${error.error.mensaje}`, 'Error',{
        positionClass: 'toast-bottom-right'
      });
    })
  }
   
  get f(){
      return this.form.controls;
  }
   
  submit(){
      if(this.form.status === 'VALID'){
        console.log(this.form.value);
      }
  }
  
  setValue(){
      this.form.setValue({name: 'Hardik Savani', email: 'itsolutionstuff@gmail.com', body: 'This is testing from itsolutionstuff.com'});
  }
  
  resetValue(){
      this.form.reset({name: '', email: '', body: ''});
  }

}
