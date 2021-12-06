import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';

//ANGULAR MATERIAL
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 



@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
    // FormControl
  ],
  exports:[
    UsuarioComponent,
  
  ]
})
export class LoginModule { }
