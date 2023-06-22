import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    FooterComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CommonRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[LoginComponent,FooterComponent,NavbarComponent]
})
export class CommonModules { }
