import React from "react";
// import { styles } from "../styles/styles";
import "../index.css";

const Header = () => {
   return (
      <div className="header">
         <div className="wrapper w-full fixed z-20 top-0 flex justify-between my-10 ">
            <div className="header__logo">
               <a href="">logo</a>
            </div>
            <nav className="header__nav flex gap-10 justify-between">
               <a href="" className="header__link">
                  Nature
               </a>
               <a href="" className="header__link">
                  Arch
               </a>
               <a href="" className="header__link">
                  Lagoon
               </a>
            </nav>
         </div>
      </div>
   );
};

export default Header;
