import { Component, input } from '@angular/core';
import { IGif } from '@gifs/interfaces/gif.interface';

@Component({
  selector: 'gift-list-item',
  imports: [],
  templateUrl: './gift-list-item.component.html',
  styles: ``
})
export class GiftListItemComponent {
  gif = input.required<IGif>();
}
