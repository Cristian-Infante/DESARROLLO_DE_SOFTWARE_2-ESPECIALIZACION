import { IGif } from "@gifs/interfaces/gif.interface";
import { IGiphyItem } from "@gifs/interfaces/giphy.interface";

export class GifsMapper {
    static mapGiphyItemToGif(giphyItem: IGiphyItem): IGif {
        return {
            id: giphyItem.id,
            title: giphyItem.title,
            url: giphyItem.images.original.url
        };
    }

    static mapGiphyItemsToGifsArray(giphyItems: IGiphyItem[]): IGif[] {
        return giphyItems.map(GifsMapper.mapGiphyItemToGif);
    }
}
