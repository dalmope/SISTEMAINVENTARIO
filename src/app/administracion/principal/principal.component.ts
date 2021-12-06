import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/login/services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  isCollapsed = false;
  nombre : string ="";

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.nombre=this.auth.getUserName();
  }

  log(): void {
    console.log('click dropdown button');
  }

  salir(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }

}
