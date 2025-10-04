import { Component, input } from '@angular/core';
import { GiftListItemComponent } from './gift-list-item/gift-list-item.component';
import { IGif } from '@gifs/interfaces/gif.interface';

@Component({
  selector: 'gifs-gif-list',
  imports: [GiftListItemComponent],
  templateUrl: './gif-list.component.html',
  styles: ``
})
export class GifListComponent {
  gifList= input.required<IGif[]>();
}
