import { Component, inject } from '@angular/core';
import { GifListComponent } from "@gifs/components/gif-list/gif-list.component";
import { GifsService } from '@gifs/services/gifs.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent, FormsModule],
  templateUrl: './search-page.component.html',
  styles: ``
})
export default class SearchPageComponent {
  gifsService = inject(GifsService);
  searchTerm: string = '';

  onSearch() {
    if (this.searchTerm.trim()) {
      this.gifsService.searchGifsByQuery(this.searchTerm);
    }
  }
}
