// import { styles } from "../styles/styles";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const Header = () => {
   const navigate = useNavigate();

   return (
      <div className="header bg-white z-20">
         <div className="wrapper w-full fixed z-20 top-0 flex justify-between my-10 ">
            <div className="header__logo">
               <a href="" onClick={() => navigate("/")}>
                  logo
               </a>
            </div>
            <nav className="header__nav flex gap-10 justify-between">
               <Link
                  to="/nature"
                  // onClick={() => {
                  //    navigate("/nature");
                  // }}
                  className={`header__link`}
               >
                  Nature
               </Link>
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
