import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import GalleryItem from "./GalleryItem";

interface Photo {
   src: string;
}

interface GalleryProps {
   oldArray: string[]; // Замените string[] на подходящий тип для вашего oldArray
}

const Gallery: React.FC<GalleryProps> = ({ oldArray }) => {
   const [open, setOpen] = useState(false);
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width:769px)");
      setIsMobile(mediaQuery.matches);
      const handleMediaQueryChange = (event: MediaQueryListEvent) => {
         setIsMobile(event.matches);
      };

      mediaQuery.addEventListener("change", handleMediaQueryChange);

      return () => {
         mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
   }, []);

   const handleOpenLighbox = () => {
      setOpen(true);
   };

   const newArray: Photo[] = oldArray.map((val) => ({ src: val }));

   return (
      <div>
         <Lightbox open={open} close={() => setOpen(false)} slides={newArray} />
         <div className="wrapper gap-1 md:gap-5 mt-[150px] grid-rows-2 grid grid-cols-1 md:grid-cols-3">
            {newArray.map((item, index) => (
               <GalleryItem
                  key={index}
                  isMobile={isMobile}
                  col={(index % 3) + 1}
                  row={Math.floor(index / 3) + 1}
                  img={item.src}
                  func={handleOpenLighbox}
                  delay={0.1 * index}
               />
            ))}
         </div>
      </div>
   );
};

export default Gallery;
