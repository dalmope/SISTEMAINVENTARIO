import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private baseURL : string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getCategorias(token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.get(`${this.baseURL}/categorias`, httpOption)
  }

  // TODO: REALIZAR EL METODO POST
  agregarCategoria(categoria:any, token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.post<any>(`${this.baseURL}/categorias`, categoria, httpOption);
  }


  // TODO: REALIZAR EL METODO PUT
  editarCategoria(id:string, token:string, categoria:any):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.put<any>(`${this.baseURL}/categorias/${id}`, categoria, httpOption);
  }

  // TODO: REALIZAR EL METODO DELETE?
  eliminarCategoria(){

  }

  obtenerCategoria(id:string, token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.get<any>(`${this.baseURL}/categorias/${id}`, httpOption);
  }
}
