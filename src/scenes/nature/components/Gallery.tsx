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
         <div className="wrapper gap-1 md:gap-5 mt-[150px] grid-rows-2 grid grid-cols-1 md:grid-cols-3">
            <GalleryItem col={2} row={1} img={arch1} delay={0.2} />
            <GalleryItem col={1} row={1} img={arch3} delay={0.4} />
            <GalleryItem col={3} row={1} img={arch2} delay={0.6} />
            <GalleryItem col={1} row={1} img={arch2} delay={0.8} />
            <GalleryItem col={1} row={1} img={arch1} delay={1.0} />
            <GalleryItem col={1} row={1} img={arch4} delay={1.2} />
            <GalleryItem col={3} row={1} img={arch2} delay={1.4} />
            <GalleryItem col={2} row={1} img={arch5} delay={1.2} />
            <GalleryItem col={1} row={1} img={arch6} delay={1.3} />
            <GalleryItem col={3} row={1} img={arch2} delay={1.2} />
         </div>
      </div>
   );
};

export default Gallery;
