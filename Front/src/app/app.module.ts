import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieService } from './services/categorie-service/categorie.service';
import { ArticleService } from './services/article-service/article.service';
import { CategoriesComponent } from './components/categories/categories.component';
import { ImagesService } from 'src/app/services/image-service/images.service';
import { ArticleComponent } from './components/article/article.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/article/form/form.component';
import { ListComponent } from './components/article/list/list.component';
import { PaginationComponent } from './components/article/pagination/pagination.component';
import { ItemComponent } from './components/article/list/item/item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArticleventeComponent } from './components/articlevente/articlevente.component';
import { FormmComponent } from './components/articlevente/formm/formm.component';
import { ListerComponent } from './components/articlevente/lister/lister.component';
import { ItemsComponent } from './components/articlevente/lister/items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ArticleComponent,
    NavbarComponent,
    FormComponent,
    ListComponent,
    PaginationComponent,
    ItemComponent,
    ArticleventeComponent,
    FormmComponent,
    ListerComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [CategorieService, ArticleService, ImagesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
