import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "@gifs/components/gif-list/gif-list.component";
import { GifsService } from '@gifs/services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  styles: ``
})
export default class TrendingPageComponent {
  gifsService = inject(GifsService);
}
