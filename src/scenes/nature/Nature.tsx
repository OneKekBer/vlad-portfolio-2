import { motion } from "framer-motion";
import Header from "../../common/Header";
import Gallery from "./components/Gallery";
const Nature = () => {
   return (
      <motion.div
         initial={{ opacity: 0, x: -100 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 100 }}
      >
         <Header />
         <Gallery />
      </motion.div>
   );
};

export default Nature;
