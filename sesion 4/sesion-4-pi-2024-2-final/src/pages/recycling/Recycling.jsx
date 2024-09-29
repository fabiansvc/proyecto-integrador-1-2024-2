/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import Header from "../../components/Header/Header";
import "./Recycling.css";
import TrashCan from "./models-3d/TrashCan";
import { OrbitControls } from "@react-three/drei";

const Recycling = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Canvas>
          <OrbitControls />
          <ambientLight />
          <directionalLight position={[10, 10, 10]} intensity={5} />
          <TrashCan />
        </Canvas>
      </div>
    </>
  );
};

export default Recycling;
