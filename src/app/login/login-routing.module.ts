import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [{ path: '', component: LoginComponent, children: [{ path: '', redirectTo: 'create-account', pathMatch: 'full' },
  { path: 'create-account', component: CreateAccountComponent, data: { text: 'Create Account' } }, { path: 'sign-in', component: SignInComponent, data: { text: 'Sign In' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
