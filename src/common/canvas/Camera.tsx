import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import PropTypes from "prop-types";
import Loader from "../Loader";

interface Camera {
   isMobile: boolean;
}

const Camera = ({ isMobile }: Camera) => {
   const computer = useGLTF("./camera/scene.gltf");
   return (
      <mesh>
         <hemisphereLight intensity={6} groundColor="white" />
         {/* <hemisphereLight intensity={10} groundColor="white" /> */}
         <pointLight intensity={10} color="white" />

         <primitive
            scale={isMobile ? 2 : 2.4}
            position={[0, -0.25, 0]}
            object={computer.scene}
            // rotation={[-0.01, -0.2, -0.1]}
         />
      </mesh>
   );
};
Camera.propTypes = {
   isMobile: PropTypes.bool.isRequired,
   // Other prop validations
};

const CameraCanvas = () => {
   const [isMobile, setIsMobile] = useState(false);
   useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width:769px)");
      setIsMobile(mediaQuery.matches);
      const handleMediaQueryChange = (event: MediaQueryListEvent) => {
         setIsMobile(event.matches);
      };

      mediaQuery.addEventListener("change", handleMediaQueryChange);

      return () => {
         mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
   }, []);

   return (
      <Canvas
         frameloop="demand"
         shadows
         camera={{ position: [20, 3, 10], fov: 5 }}
         gl={{ preserveDrawingBuffer: true }}
      >
         <Suspense fallback={<Loader />}>
            <OrbitControls
               autoRotate
               enableZoom={false}
               maxPolarAngle={Math.PI / 2}
               minPolarAngle={Math.PI / 2}
            />
            <Camera isMobile={isMobile} />
         </Suspense>
         <Preload all />
      </Canvas>
   );
};

export default CameraCanvas;
