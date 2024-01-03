import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxIconModule, IgxCheckboxModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxIconModule,
    IgxCheckboxModule
  ]
})
export class LoginModule {
}
