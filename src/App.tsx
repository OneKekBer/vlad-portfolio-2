import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Nature from "./scenes/nature/Nature";
import Home from "./scenes/home/Home";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function ScrollToTop() {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return null;
}

function App() {
   return (
      <BrowserRouter>
         <AnimatePresence mode="wait">
            <ScrollToTop />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/nature" element={<Nature />} />
            </Routes>
         </AnimatePresence>
      </BrowserRouter>
   );
}

export default App;
