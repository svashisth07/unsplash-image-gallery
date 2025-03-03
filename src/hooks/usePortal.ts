import { useEffect, useRef } from "react";

export const usePortal = (id: string) => {
  const rootElemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Look for existing target dom element to append to
    const existingParent = document.querySelector(`#${id}`);
    // Parent is either a new root or the existing dom element
    const parentElem = existingParent || createRootElement(id);

    // If there is no existing DOM element, add a new one.
    if (!existingParent) {
      addRootElement(parentElem as HTMLDivElement);
    }

    if (rootElemRef.current) {
      parentElem.appendChild(rootElemRef.current);
    }

    const removeElement = () => {
      if (rootElemRef.current) {
        rootElemRef.current.remove();

        if (!parentElem.childElementCount) {
          parentElem.remove();
        }
      }
    };

    return removeElement;
  }, [id]);

  const createRootElement = (id: string) => {
    const rootContainer = document.createElement("div");
    rootContainer.setAttribute("id", id);
    return rootContainer;
  };

  const addRootElement = (rootElem: HTMLDivElement) => {
    // Check if the body has a last element and if that last element has a next sibling
    const lastElement = document.body.lastElementChild;
    const afterLastElement = lastElement
      ? lastElement.nextElementSibling
      : null;

    // If there is a next sibling, insert before it; otherwise, append to the body
    if (afterLastElement) {
      document.body.insertBefore(rootElem, afterLastElement);
    } else {
      document.body.appendChild(rootElem);
    }
  };

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement("div");
    }
    return rootElemRef.current;
  };

  return getRootElem();
};
