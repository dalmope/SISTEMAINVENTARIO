import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { LoginModule } from './login/login.module';
// import { FormControl, FormsModule } from '@angular/forms';

import { FormsModule} from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
// import { PrincipalComponent } from './administracion/principal/principal.component';
import { AdministracionModule } from './administracion/administracion.module';
import { DataTablesModule } from "angular-datatables";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    // PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    LoginModule,
    HttpClientModule,
    AdministracionModule,
    DataTablesModule,
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
