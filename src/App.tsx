import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nature from "./scenes/nature/Nature";
import Home from "./scenes/home/Home";
import { AnimatePresence } from "framer-motion";

function App() {
   return (
      <div>
         <BrowserRouter>
            <AnimatePresence mode="wait">
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/nature" element={<Nature />} />
               </Routes>
            </AnimatePresence>
         </BrowserRouter>
      </div>
   );
}

export default App;
