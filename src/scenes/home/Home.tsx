import { motion } from "framer-motion";
import Header from "../../common/Header";
import Advantages from "./components/Advantages";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

const Home = () => {
   return (
      <motion.div
         initial={{ opacity: 0, x: -100 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 100 }}
      >
         <Header />
         <Hero />
         <Navigation />
         <Advantages />
      </motion.div>
   );
};

export default Home;
