import { RefObject, useEffect, useRef, useState } from "react";

/**
 * Check if an element is in viewport
 * @param {number} offset - Number of pixels up to the observable element from the top
 */
export default function useIsVisible<T extends Element>(
  offset: number = 0
): [boolean, RefObject<T>] {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = useRef<T>(null);

  const checkVisibility = () => {
    if (!currentElement.current) {
      return;
    }
    const top = currentElement.current.getBoundingClientRect().top;
    if (top + offset >= 0 && top - offset <= window.innerHeight) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    checkVisibility();
    document.addEventListener("scroll", checkVisibility, true);
    return () => document.removeEventListener("scroll", checkVisibility, true);
  });

  return [isVisible, currentElement];
}
