import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { IndividualPageComponent } from './individual-page/individual-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { AramaPageComponent } from './arama-page/arama-page.component'; 
import { AboutPageComponent } from './about-page/about-page.component';
const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'searchpage/:query', component: AramaPageComponent },
  { path: 'category/:categoryname', component: IndividualPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Varsayılan rota
  { path: '**', redirectTo: '/home' }, // Bilinmeyen yolları yönlendirmek için joker rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
