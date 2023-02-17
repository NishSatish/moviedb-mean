import { Component, Input } from '@angular/core';

@Component({
  selector: 'MovieCard',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() name = '';
  @Input() image = '';
}
