import { useEffect, useRef } from "react";
import img1 from "../../../assets/img/arch1.jpg";
import img2 from "../../../assets/img/natue.jpg";
// import img3 from "../../../assets/img/nat10.jpg";
import img3 from "src/assets/img/arch1.jpg";
import "../../../index.css";
import NavCard from "./NavCard";
import { motion, useAnimation, useInView } from "framer-motion";

const Navigation = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });
   const animation = useAnimation();
   useEffect(() => {
      if (isInView) {
         animation.start("visible");
      }
   }, [isInView, animation]);

   const container = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.5,
         },
      },
   };
   return (
      <div className="nav">
         <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={animation}
            className="wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center "
         >
            <NavCard img={img1} title="explore nature " link="/nature" />
            <NavCard img={img2} title="explore" link="/BW" />
            <NavCard img={img3} title="explore" link="/night" />
            <NavCard img={img3} title="explore" link="" />
            <NavCard img={img3} title="explore" link="" />
            <NavCard img={img3} title="explore" link="" />
         </motion.div>
      </div>
   );
};

export default Navigation;
