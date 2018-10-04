import { Component, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog' ;

@Component({
    selector: 'movie-details-popup',
    templateUrl: './movie-details-popup.component.html',
    providers: [
        { provide: MAT_DIALOG_DATA, useValue: ''}
]
})
export class MovieDetailsPopupComponent {
  onMovieSelect = new EventEmitter();
  movie;
  constructor(public dialogRef: MatDialogRef<MovieDetailsPopupComponent>){}
  
ngOnInit() {
  this.movie = this.dialogRef.componentInstance.movie;
}

onMovieSelected() {
    this.onMovieSelect.emit(this.movie);
    this.dialogRef.close();
  }
 
}
