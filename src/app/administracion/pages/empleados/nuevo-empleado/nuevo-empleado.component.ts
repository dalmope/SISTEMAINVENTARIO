import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmpleadosService } from '../../../services/empleados.service';
import { AuthService } from '../../../../login/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css']
})
export class NuevoEmpleadoComponent implements OnInit {

  form! : FormGroup;

  constructor(
    private fb : FormBuilder,
    private empleado : AuthService,
    private router : Router,
    private toastr : ToastrService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email : ["", Validators.required],
      nombre : ["", Validators.required],
      nombreUsuario : ["", Validators.required],
      password : ["", Validators.required],
      rol : ["", Validators.required]
    })
  }

  agregarEmpleado(){
    this.empleado.agregarEmpleado(this.form.value).subscribe(data=>{
      console.log(data);
      this.toastr.success('Empleado Agregado Con Exito!', 'Registrado',{
        positionClass: 'toast-bottom-right'
      });
      this.router.navigateByUrl("/administracion/empleados")
    },error=>{
      this.toastr.error(`${error.error}`, 'Error',{
        positionClass: 'toast-bottom-right'
      });
      console.log(error);
    })
  }

}
