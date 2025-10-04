export interface IGiphyImage {
    url: string;
}

export interface IOriginal {
    original: IGiphyImage;
}

export interface IGiphyItem {
    id: string;
    title: string;
    images: IOriginal;
}

export interface IGiphyResponse {
    data: IGiphyItem[];
}
