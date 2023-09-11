import React from "react";
import { buildGal } from "src/assets/assets";
import GalleryCommonComponent from "src/common/GalleryCommonComponent";

const Nature: React.FC = () => {
   return <GalleryCommonComponent arr={buildGal} />;
};

export default Nature;
