import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private renderer: Renderer2
  ) {}
  public details: any = {};
  private movieId: any;
  public trailer = '';
  @ViewChild('video') vid!: ElementRef;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.movieId = +params.get('id')!;

      this.moviesService.getCompleteMovie(this.movieId).subscribe((res) => {
        this.details = res;
        this.trailer = this.details.trailer;
        const sourceTag: HTMLSourceElement =
          this.renderer.createElement('source');
        this.renderer.setAttribute(sourceTag, 'src', this.trailer);
        this.renderer.appendChild(this.vid.nativeElement, sourceTag);
        console.log(res);
      });
    });
  }
}
