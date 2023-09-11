import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const item = {
   hidden: { opacity: 0, x: 20 },
   visible: { opacity: 1, x: 0 },
};
interface Props {
   img: string;
   title: string;
   link: string;
}
const NavCard = ({ img, title, link }: Props) => {
   const navigate = useNavigate();
   return (
      <motion.div
         transition={{ duration: 0.5 }}
         variants={item}
         className="nav__box w-full p-2 h-[50vh]"
      >
         <div
            onClick={() => {
               navigate(link);
            }}
            className="nav__img cursor-pointer h-full"
         >
            <img src={img} className=" object-cover h-full" alt="" />
         </div>
         <h4 className="text mt-2">{title}</h4>
      </motion.div>
   );
};

export default NavCard;
