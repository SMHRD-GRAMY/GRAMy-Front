import { useEffect, useRef, useCallback } from "react";

const useScrollFadeIn = ({ fade, setFade }) => {
  const dom = useRef();

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;

      if (entry.isIntersecting) {
        setFade({
          ...fade,
          [current.className]: true,
        });
      }
    },
    [fade]
  );

  useEffect(() => {
    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
  };
};

export default useScrollFadeIn;
