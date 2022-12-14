import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
        path: "login",
        component: LoginComponent
      },
      {
        path: "registrar",
        component: RegisterComponent
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "produto/:id",
        component: ProductComponent
      }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
