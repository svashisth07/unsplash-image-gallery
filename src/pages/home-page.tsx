import React, { useRef, useState } from "react";
import { ImageGallery } from "@/components/ui/image-gallery";
import { useSearchUnsplashImages } from "@/hooks/api/useSearchUnsplashImages";
import { Header } from "@/components/ui/header";
import { NoResult } from "@/components/ui/no-result";
import { Loader } from "@/components/ui/loader";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { Z_INDEX } from "@/constants";

const HomePage: React.FC = () => {
  const [query, setQuery] = useState("");
  const observerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, hasNextPage, fetchNextPage } =
    useSearchUnsplashImages(query);
  useInfiniteScroll({ observerRef, hasNextPage, fetchNextPage });
  const allPages = data?.pages.flatMap((page) => page.results) || [];

  return (
    <div>
      <Header onSearch={setQuery} />
      <div className={`max-w-screen-xl mx-auto relative z-[${Z_INDEX.CONTENT}]`}>
        {isLoading && <Loader />}
        {allPages.length > 0 && <ImageGallery images={allPages} />}
        {!isLoading && allPages.length === 0 && (
          <NoResult message="No images found" />
        )}
        {hasNextPage && (
          <div ref={observerRef}>
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
