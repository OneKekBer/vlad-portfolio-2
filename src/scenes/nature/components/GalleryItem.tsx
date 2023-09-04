import {
   AnimatePresence,
   motion,
   useAnimation,
   useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
   col: number | undefined;
   row: number | undefined;
   delay: number | undefined;
   img: string;
}
const variants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0 },
};

const GalleryItem = ({ col = 2, row = 2, img, delay = 1 }: Props) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const animation = useAnimation();
   useEffect(() => {
      if (isInView) {
         animation.start("visible");
         console.log("вижу его!");
      }
   }, [isInView, animation]);
   return (
      <AnimatePresence mode="wait">
         <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={animation}
            transition={{ duration: 1, delay: delay, staggerChildren: 0.5 }}
            className={`item h-[100vh] md:h-[70vh] row-span-${row} col-span-${col}`}
         >
            <img
               className="w-full h-full object-cover object-center"
               src={img}
               alt="photo"
            />
         </motion.div>
      </AnimatePresence>
   );
};

export default GalleryItem;
