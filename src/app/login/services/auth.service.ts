import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { autenticado } from '../interfaces/autenticado';
import { Router } from '@angular/router';
import { catchError, map, tap } from "rxjs/operators";
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL   : string =environment.baseURL;
  private _usuario! : autenticado;

  get usuario(){
    return {...this._usuario};
  }

  constructor(private http: HttpClient, private router: Router) { }

  login(nombreUsuario:string, password:string):Observable<any>{

    const url = `${this.baseURL}/auth/login`;
    const body = {nombreUsuario, password};

    console.log("esto es ", JSON.stringify(body))

    return this.http.post<any>(url, body).pipe(
      tap(respuesta =>{
        console.log(respuesta);
        if(respuesta.token!=""){
          localStorage.setItem('token', respuesta.token)
          this.getUserName();
        }
      })
    );
  }

  public getUserName(): string {
    const token = this.getToken();
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const username = values.sub;
    console.log({username});
    return username;
    
  }

  public getToken():any{
    return localStorage.getItem('token');
  }

  agregarEmpleado(empleado : any):Observable<any>{
    return this.http.post<any>(`${this.baseURL}/auth/nuevo`, empleado);
  }

  
}
