import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EmpleadosService } from '../../administracion/services/empleados.service';
import { data } from 'jquery';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  form:FormGroup;
  loading=false;

  constructor(
    private fb:FormBuilder, 
    private _snackBar: MatSnackBar, 
    private router: Router, 
    private auth: AuthService,
    private usuario: EmpleadosService) { 
    this.form=this.fb.group({
      nombreUsuario:["", Validators.required],
      password:["", Validators.required]
    })
  }

  // VALIDAR LA ENTRADA DEL ADMINISTRADOR
  public ingresar(){

    const {nombreUsuario, password} = this.form.value;

    this.auth.login(nombreUsuario, password).subscribe(ok=>{
      if(ok=!""){
        this.usuario.getEmpleados(localStorage.getItem('token')!).subscribe(data=>{
          console.log("estos son los empleados: ", data)
        })
        this.fakeLoading();
        this.router.navigateByUrl("/administracion/dashboard");
      }
    }, error=>{
      console.log("mi error:", error)
      this.error();
    })
  }

  // SEGUNDO Y MEDIO DE CARGA
  public fakeLoading(){
    this.loading=true;

    setTimeout(() => {
      this.loading=false;
    }, 1500);
  }

  public error(){
    this._snackBar.open("Usuario o Contraseña incorrectos", "Aceptar",{
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }

  ngOnInit(): void {
  }

}
