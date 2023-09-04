import Header from "../../common/Header";
import Advantages from "./components/Advantages";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import InitialPageAnimation from "src/common/InitialPageAnimation";

const Home = () => {
   return (
      <InitialPageAnimation>
         <Header />
         <Hero />
         <Navigation />
         <Advantages />
      </InitialPageAnimation>
   );
};

export default Home;
