import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriasService } from '../../../services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProveedoresService } from 'src/app/administracion/services/proveedores.service';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {

  form! : FormGroup; 
  id : any;

  constructor(
    private proveedorService: ProveedoresService,
    private fb: FormBuilder,
    private aRoute : ActivatedRoute,
    private toastr : ToastrService,
    private router : Router) {

  }

  ngOnInit(): void {
    this.id=this.aRoute.snapshot.paramMap.get('id');
    this.form=this.fb.group({
      id: ["", Validators.required],
      nombre : ["", Validators.required]
    })

    this.esEditar();
  }


  esEditar(){
    this.proveedorService.getProveedor(this.id, localStorage.getItem('token')!).subscribe(data=>{
      console.log(data)
      this.form.setValue({
        id : data.id,
        nombre : data.nombre
      })
    })
  }

  actualizar(){
    const id = this.aRoute.snapshot.params.id;
    this.proveedorService.putProveedor(id, this.form.value, localStorage.getItem('token')!).subscribe(data=>{
      this.toastr.success(data.mensaje, 'Actualizada',{
        positionClass: 'toast-bottom-right'
      });
      this.router.navigateByUrl('/administracion/proveedores');
    }, (error: { error: any; }) => {
      this.toastr.error(`${error.error.mensaje}`, 'Error',{
        positionClass: 'toast-bottom-right'
      });
    })

  }
}
