import {
   AnimatePresence,
   motion,
   useAnimation,
   useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
   col?: number;
   row?: number;
   delay?: number;
   img: string;
   isMobile: boolean;
   func?: () => void; // Тип для функции func
}

const variants = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0 },
};

const GalleryItem: React.FC<Props> = ({
   col = 3,
   row = 2,
   img,
   func,
   delay = 1,
   isMobile = false,
}: Props) => {
   const column = "span " + col;
   const rows = "span " + row;
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const animation = useAnimation();

   useEffect(() => {
      if (isInView) {
         animation.start("visible");
      }
   }, [isInView, animation]);

   return (
      <AnimatePresence mode="wait">
         <motion.div
            onClick={func}
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={animation}
            transition={{ duration: 1, delay: delay, staggerChildren: 0.5 }}
            className={`item h-[90vh] cursor-pointer hover:brightness-90 duration-300 md:h-[70vh] ${
               isMobile ? "md:col-span-2" : "" // Установка gridColumn в зависимости от isMobile
            }`}
            style={isMobile ? {} : { gridColumn: column, gridRow: rows }}
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
