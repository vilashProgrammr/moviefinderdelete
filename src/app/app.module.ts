import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { GenresComponent } from './genres/genres.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { SerieComponent } from './serie/serie.component';
import { ActorComponent } from './actor/actor.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MovieDetailsPopupComponent } from './movie-details-popup/movie-details-popup.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieCardComponent,
    GenresComponent,
    UpcomingComponent,
    PopularSeriesComponent,
    SerieComponent,
    ActorComponent,
    MovieDetailsPopupComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes),
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [ MovieDetailsPopupComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
