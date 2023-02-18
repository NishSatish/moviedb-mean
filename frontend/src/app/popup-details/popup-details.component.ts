import { Component, Inject, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-popup-details',
  templateUrl: './popup-details.component.html',
  styleUrls: ['./popup-details.component.scss'],
})
export default class PopupDetailsComponent implements OnInit {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<PopupDetailsComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: number,
    private moviesService: MoviesService
  ) {}

  public movieDetails: any;

  ngOnInit(): void {
    this.moviesService.getPopupDetails(this.data).subscribe((res) => {
      this.movieDetails = res;
    });
  }

  closePopup = () => {
    this._bottomSheetRef.dismiss();
    this.moviesService.disableMovieCards = true;
  };
}
