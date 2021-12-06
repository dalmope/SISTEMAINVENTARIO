import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private baseURL : string = environment.baseURL;

  constructor(private http: HttpClient) { }


  getProductos(token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.get<any>(`${this.baseURL}/productos`, httpOption);
  }

  // TODO: ACOMODAR ESTE METODO, 
  agregarProducto(producto : any, token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.post<any>(`${this.baseURL}/productos`, producto, httpOption);
  }

  // TODO: ACOMODAR EL METODO
  editarProducto(id:string, token:string, producto:any){
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.put<any>(`${this.baseURL}/productos/${id}`, producto, httpOption);
  }


  obtenerProducto(id:string, token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.get<any>(`${this.baseURL}/productos/${id}`, httpOption);
  }
}
