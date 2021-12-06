import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private baseURL : string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getEmpleados(token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.get<any>(`${this.baseURL}/usuarios`, httpOption);
  }

  obtenerEmpleado(id:string, token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.get<any>(`${this.baseURL}/usuarios/${id}`, httpOption);
  }


  actualizarUsuario(id:string, token:string, usuario:any){
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
    return this.http.put<any>(`${this.baseURL}/usuarios/${id}`, usuario, httpOption);
  }
}
