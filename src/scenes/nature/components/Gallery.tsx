// import { motion } from "framer-motion";
import GalleryItem from "./GalleryItem";

import arch1 from "src/assets/img/arch1.jpg";
import arch2 from "src/assets/img/arch2.jpg";
import arch3 from "src/assets/img/arch3.jpg";
import arch4 from "src/assets/img/arch4.jpg";
import arch5 from "src/assets/img/arch5.jpg";
import arch6 from "src/assets/img/arch6.jpg";
import nat2 from "src/assets/img/nat2.jpg";
import nat3 from "src/assets/img/nat3.jpg";
import nat4 from "src/assets/img/nat4.jpg";
import nat5 from "src/assets/img/nat5.jpg";
import nat6 from "src/assets/img/nat6.jpg";

const NaturePhotos = [
   { img: nat6 },
   { img: nat2 },
   { img: nat3 },
   { img: nat4 },
   { img: nat5 },
];

// const ArchPhotos = [
//    { img: arch6 },
//    { img: arch2 },
//    { img: arch3 },
//    { img: arch4 },
//    { img: arch5 },
//    { img: arch1 },
// ];

const Gallery = () => {
   console.log(NaturePhotos);

   return (
      <div>
         <div className="wrapper gap-1 md:gap-5 grid-rows-1 mt-[150px] grid grid-cols-1 md:grid-cols-3">
            <GalleryItem delay={1} row={1} col={2} img={arch1} />
            <GalleryItem delay={1.2} row={2} col={1} img={arch3} />
            <GalleryItem delay={1.5} row={1} col={3} img={arch2} />
            <GalleryItem delay={1.7} row={3} col={1} img={arch2} />
            <GalleryItem delay={1} row={1} col={1} img={arch1} />
            <GalleryItem delay={1.2} row={1} col={1} img={arch4} />
            <GalleryItem delay={1.4} row={1} col={3} img={arch2} />
            <GalleryItem delay={1.3} row={1} col={2} img={arch5} />
            <GalleryItem delay={1.1} row={2} col={1} img={arch6} />
            <GalleryItem delay={1.4} row={1} col={3} img={arch2} />
         </div>
      </div>
   );
};

export default Gallery;
