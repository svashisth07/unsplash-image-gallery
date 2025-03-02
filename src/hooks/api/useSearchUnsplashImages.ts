import { env } from "@/config/env";
import { Api } from "@/lib/api";
import { UnsplashImage } from "@/types/image-gallery";
import { useInfiniteQuery } from "@tanstack/react-query";

const SERVICE_URL = `${env.UNSPLASH_URL}/search/photos?client_id=${env.UNSPLASH_ACCESS_KEY}`;

const getUrl = (query: string, page: number) => {
  return `${SERVICE_URL}&query=${query || "random"}&page=${page}&per_page=20`;
};

interface UseImagesResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}

export const useSearchUnsplashImages = (query: string) => {
  return useInfiniteQuery<UseImagesResponse, Error>({
    queryKey: ["images", query],
    queryFn: ({ pageParam }) => Api.get(getUrl(query, pageParam as number)),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= lastPage.total_pages ? nextPage : undefined;
    },
    initialPageParam: 1,
  });
};
