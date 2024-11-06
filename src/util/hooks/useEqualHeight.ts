'use client'
import { useEffect } from 'react';

const useEqualHeight = (classNames: string[], delay: number = 100) => { // Default delay set to 100ms
  const equalHeight = () => {
    classNames.forEach((className) => {
      const elements = Array.from(
        document.getElementsByClassName(className)
      ) as HTMLElement[];

      if (!elements.length) return;

      // Group elements by row by checking their top position
      const elementsByRow: HTMLElement[][] = [];
      let previousTop = elements[0].getBoundingClientRect().top;
      let currentRow: HTMLElement[] = [];

      elements.forEach((element) => {
        const { top } = element.getBoundingClientRect();
        if (top !== previousTop) {
          if (currentRow.length) {
            elementsByRow.push(currentRow);
            currentRow = []; // Reset for the next row
          }
          previousTop = top; // Update to the new row's top position
        }
        currentRow.push(element);
      });

      // Add any remaining elements in the last row
      if (currentRow.length) {
        elementsByRow.push(currentRow);
      }

      // Apply height per row
      elementsByRow.forEach((rowElements) => {
        // Reset height first to ensure content determines natural height
        rowElements.forEach((element) => (element.style.height = 'auto'));

        const maxHeight = Math.max(
          ...rowElements.map((element) => element.offsetHeight)
        );

        // Apply equal height based on content for this row
        rowElements.forEach((element) => {
          element.style.height = `${maxHeight}px`;
        });
      });
    });
  };

  useEffect(() => {
    const delayedEqualHeight = () => {
      setTimeout(equalHeight, delay); // Call equalHeight after a delay
    };

    // Initial call to equalHeight
    delayedEqualHeight();

    // Adjust heights on window resize
    const handleResize = () => {
      delayedEqualHeight(); // Call equalHeight after a delay on resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [classNames, delay]);

  return equalHeight; // Return the function in case it needs to be called elsewhere
};

export default useEqualHeight;
