import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }        from './Components/app/app.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './Components/hero-search/hero-search.component';
import { HeroesComponent }     from './Components/heroes/heroes.component';
import { DashboardComponent }     from './Components/dashboard/dashboard.component';
import { HeroService }         from './Services/hero.service';

import { AppRoutingModule } from './Modules/app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './Services/in-memory-data.service';

@NgModule({
  imports:      [
                  BrowserModule,
                  FormsModule,
                  AppRoutingModule,
                  HttpModule,
                  InMemoryWebApiModule.forRoot(InMemoryDataService)
                ],
  declarations: [
                  AppComponent,
                  DashboardComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  HeroSearchComponent
                ],
  providers: [
              HeroService
            ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
