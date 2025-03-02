export interface UnsplashImage {
  id: string;
  urls: { thumb: string; small: string; regular: string };
  alt_description: string;
  height: number;
  width: number;
  blur_hash: string;
}

