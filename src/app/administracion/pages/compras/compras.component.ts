import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CategoriasService } from '../../services/categorias.service';
import { CompraService } from '../../services/compras.service';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  dtTrigger = new Subject<any>();

  data:any[]=[];

  compras : any =[]=[];

  constructor(
    private compraService : CompraService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
  
    this.getCompras();
  }

  getCompras(){
    this.compraService.getCompras(localStorage.getItem('token')!).subscribe(data=>{
      this.data=data;
      console.log({data})
      this.dtTrigger.next();
    })
  }

}
