import React from "react";
import InitialPageAnimation from "./InitialPageAnimation";
import Header from "./Header";
import Gallery from "src/scenes/nature/components/Gallery";

interface GalleryCommonProps {
   arr: string[];
}

const GalleryCommonComponent: React.FC<GalleryCommonProps> = ({ arr }) => {
   return (
      <div>
         <InitialPageAnimation>
            <Header />
            <Gallery oldArray={arr} />
         </InitialPageAnimation>
      </div>
   );
};

export default GalleryCommonComponent;
