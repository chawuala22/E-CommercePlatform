import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { AuthGuard } from '../auth/auth.guard';
import { CreateFruitComponent } from './create-fruit/create-fruit.component';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'create-fruit',
        component: CreateFruitComponent,
      },
      {
        path: 'detail/:id',
        component: FruitDetailComponent
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
