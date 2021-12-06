import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpleadosService } from 'src/app/administracion/services/empleados.service';
import { EmpleadosComponent } from '../empleados.component';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.css']
})
export class EditEmpleadoComponent implements OnInit {

  form! : FormGroup;
  id:any ="";

  constructor(
    private fb: FormBuilder,
    private empleados: EmpleadosService,
    private aRoute: ActivatedRoute,
    private router : Router,
    private toastr : ToastrService) {
    this.form = this.fb.group({
      nombre: ["", Validators.required],
      nombreUsuario : ["", Validators.required],
      id: ["", Validators.required],
      email : ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.id=this.aRoute.snapshot.paramMap.get('id');
    this.esEditar();
  }

  esEditar(){
    this.empleados.obtenerEmpleado(this.id, localStorage.getItem('token')!).subscribe(data=>{
      this.form.setValue({
        nombre       : data.nombre,
        nombreUsuario: data.nombreUsuario,
        id           : data.id,
        email        : data.email,
      })
    })
  }


  actualizarEmpleado(){
    this.empleados.actualizarUsuario(this.id, localStorage.getItem('token')!, this.form.value).subscribe(data=>{
      console.log(data);
      this.toastr.success('Empleado Actualizado Con Exito!', 'Actualizado',{
        positionClass: 'toast-bottom-right'
      });
      this.router.navigateByUrl("/administracion/empleados");
    },error=>{
      this.toastr.error(`${error.error}`, 'Error',{
        positionClass: 'toast-bottom-right'
      });
    })
  }

}
