import { useEffect } from "react";

interface UseInfiniteScrollProps {
  observerRef: React.RefObject<HTMLElement | null>;
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

export const useInfiniteScroll = ({
  observerRef,
  hasNextPage,
  fetchNextPage,
}: UseInfiniteScrollProps) => {
  useEffect(() => {
    if (!hasNextPage) {
      return;
    }
    if (observerRef.current) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      });
      observer.observe(observerRef.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [hasNextPage, fetchNextPage]);
};
