import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { CommonRoutingModule } from './common-routing.module';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    CommonRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  
    
  ],
  exports:[LoginComponent,FooterComponent,NavbarComponent,MyProfileComponent]
})
export class CommonModules { }
