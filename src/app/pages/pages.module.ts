import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateFruitComponent } from './create-fruit/create-fruit.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    CreateFruitComponent,
    NotFoundComponent,
    PagesComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule	
  ]
})
export class PagesModule { }
