import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }        from './Components/app/app.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { HeroesComponent }     from './Components/heroes/heroes.component';
import { DashboardComponent }     from './Components/dashboard/dashboard.component';
import { HeroService }         from './Services/hero.service';

import { AppRoutingModule } from './Modules/app-routing.module';

@NgModule({
  imports:      [
                  BrowserModule,
                  FormsModule,
                  AppRoutingModule,
                  HttpModule
                ],
  declarations: [
                  AppComponent,
                  DashboardComponent,
                  HeroDetailComponent,
                  HeroesComponent
                ],
  providers: [
              HeroService
            ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
