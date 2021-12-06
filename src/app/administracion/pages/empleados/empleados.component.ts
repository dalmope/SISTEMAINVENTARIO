import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  dtTrigger = new Subject<any>();

  data : any [] = [];
  
  constructor(private EmpleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'
      }
    };
    this.EmpleadosService.getEmpleados(localStorage.getItem('token')!).subscribe(data=>{
      this.data=data;
      console.log(this.data);
      this.dtTrigger.next();
    })
  }

}
