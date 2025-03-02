export interface UnsplashImage {
  id: string;
  urls: { thumb: string; small: string; full: string };
  alt_description: string;
  height: number;
  width: number;
  blur_hash: string;
}

