import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { AboutDescriptionComponent } from './components/about-description/about-description.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuImgComponent } from './components/menu-img/menu-img.component';
import { CateringComponent } from './components/catering/catering.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    AboutDescriptionComponent,
    MenuComponent,
    MenuImgComponent,
    CateringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
