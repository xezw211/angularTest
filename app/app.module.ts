import './rxjs-extensions';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroSearchComponent} from './hero-search.component';
import {HeroService} from './hero.service'

@NgModule({
	imports : [
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule,
	],
	declarations : [
		AppComponent,
		HeroDetailComponent,
		DashboardComponent,
		HeroesComponent,
		HeroSearchComponent
	],
	providers : [HeroService],
	bootstrap : [AppComponent]
})



export class AppModule{}