import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CategoriasService } from '../../services/categorias.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  dtTrigger = new Subject<any>();

  data:any[]=[];

  categorias : any =[]=[];

  constructor(
    private http: ProductosService,
    private categoria : CategoriasService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
  
    this.getProductos();

    this.categoria.getCategorias(localStorage.getItem('token')!).subscribe(data=>{
      this.categorias=data;
    })    
  }

  buscarCategoria(id:string){
    for (const cat of this.categorias) {
      if(id===cat.id){
        return cat.nombre;
      }
    }
  }

  getProductos(){
    this.http.getProductos(localStorage.getItem('token')!).subscribe(data=>{
      this.data=data;
      console.log({data})
      this.dtTrigger.next();
    })
  }

}
