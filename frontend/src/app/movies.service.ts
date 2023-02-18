import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public disableMovieCards: boolean = false;

  getDummyMovies = () => {
    return this.http.get('http://localhost:3001/getMovies');
  };

  getPopupDetails = (movieId: number) => {
    return this.http.get(
      'http://localhost:3001/getMoviePopupDetails/' + movieId
    );
  };

  getCompleteMovie = (movieId: number) => {
    return this.http.get('http://localhost:3001/getCompleteMovie/' + movieId);
  };
}
