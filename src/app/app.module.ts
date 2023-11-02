import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderFirstSectionComponent } from './header-first-section/header-first-section.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { RightsideNavbarComponent } from './rightside-navbar/rightside-navbar.component';
import { CarouselComponentComponent } from './carousel-component/carousel-component.component';
import { CarouselModule } from '@coreui/angular';
import { HttpClientModule } from '@angular/common/http';
import { CarouselContentComponent } from './carousel-content/carousel-content.component';
import { AllnewsPageComponent } from './allnews-page/allnews-page.component';
import { IndividualPageComponent } from './individual-page/individual-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { AramaPageComponent } from './arama-page/arama-page.component';
import { FormsModule } from '@angular/forms';
import { AboutPageComponent } from './about-page/about-page.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    NavbarComponent,
    HeaderFirstSectionComponent,
    RightsideNavbarComponent,
    CarouselComponentComponent,
    CarouselContentComponent,
    AllnewsPageComponent,
    IndividualPageComponent,
    CategoriesPageComponent,
    AramaPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    CarouselModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
