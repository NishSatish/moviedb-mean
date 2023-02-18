import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import PopupDetailsComponent from '../popup-details/popup-details.component';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private _bottomSheet: MatBottomSheet
  ) {}
  public movies: any = [];
  public disableCard: boolean = this.moviesService.disableMovieCards;
  ngOnInit(): void {
    this.moviesService.getDummyMovies().subscribe((res) => {
      this.movies = res;
    });
  }

  clickMe = (movieId: number): void => {
    this.moviesService.disableMovieCards = true;
    this._bottomSheet.open(PopupDetailsComponent, {
      data: movieId,
    });
  };
}
