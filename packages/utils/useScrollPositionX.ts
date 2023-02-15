import { useEffect, useState } from "react";

const useScrollPositionX = (element: Element | null) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);

  useEffect(() => {
    if (!element) return;

    const updatePosition = () => {
      setScrollPosition(element.scrollLeft);
      setMaxScrollLeft(element.scrollWidth - element.clientWidth);
    };

    element.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => element.removeEventListener("scroll", updatePosition);
  }, [element]);

  return { scrollPosition, maxScrollLeft };
};

export default useScrollPositionX;
