import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  private baseURL :string = environment.baseURL;

  constructor(private http: HttpClient) { }

  getProveedores(token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.get<any>(`${this.baseURL}/proveedores`, httpOption);
  }

  getProveedor(id:number, token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.get<any>(`${this.baseURL}/proveedores/${id}`, httpOption);
  }

  postProveedor(proveedor:any, token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.post<any>(`${this.baseURL}/proveedores`, proveedor, httpOption);
  }

  putProveedor(id: number, proveedor:any, token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.put<any>(`${this.baseURL}/proveedores/${id}`, proveedor, httpOption);
  }

  deleteProveedor(id:number, token:string):Observable<any>{
    const httpOption = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}` // TODO: MUCHO CUIDADO DEJAR EL ESPACIO ENTRE LA PALABRA BEARER Y TOKEN
      })
    }
    return this.http.delete<any>(`${this.baseURL}/proveedores/${id}`, httpOption);
  }
  


}
