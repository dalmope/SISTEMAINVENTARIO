import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class CompraService {
      
    private baseURL : string = environment.baseURL;

    constructor(private http: HttpClient) { }

    getCompras(token:string):Observable<any>{
        const httpOption = {
          headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`
          })
        }
        return this.http.get<any>(`${this.baseURL}/compras`, httpOption);
      }

    getCompra(id:number, token:string):Observable<any>{
        const httpOption = {
          headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`
          })
        }
        return this.http.get<any>(`${this.baseURL}/compras/${id}`, httpOption);
      }

    postCompra(compra:any, token:string):Observable<any>{
        const httpOption = {
          headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`
          })
        }
        return this.http.post<any>(`${this.baseURL}/compras`, compra, httpOption);
      }

    putCompra(id:number, compra:any, token:string):Observable<any>{
        const httpOption = {
          headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`
          })
        }
        return this.http.put<any>(`${this.baseURL}/compras/${id}`, compra, httpOption);
      }

    deleteCompra(id:number, token:string):Observable<any>{
        const httpOption = {
          headers: new HttpHeaders({
            'Authorization': `Bearer ${token}`
          })
        }
        return this.http.delete<any>(`${this.baseURL}/compras/${id}`, httpOption);
      }

  }
  