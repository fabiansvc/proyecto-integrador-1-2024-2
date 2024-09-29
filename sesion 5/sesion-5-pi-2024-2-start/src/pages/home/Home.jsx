import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Donut from "./models-3d/Donut";
import Ball from "./models-3d/Ball";
import Floor from "./models-3d/Floor";

const Home = () => {
  return (
    <Canvas camera={{ position: [0, 1, 5] }}>
      <OrbitControls makeDefault />
      <Donut />
      <Ball />
      <Floor />
    </Canvas>
  );
};

export default Home;
