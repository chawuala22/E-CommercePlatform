import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateFruitComponent } from './create-fruit/create-fruit.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FruitDetailComponent } from './fruit-detail/fruit-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    CreateFruitComponent,
    NotFoundComponent,
    PagesComponent,
    HeaderComponent,
    FruitDetailComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
