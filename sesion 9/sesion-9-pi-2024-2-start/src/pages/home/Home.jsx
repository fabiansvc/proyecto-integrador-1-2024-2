import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import { Physics } from "@react-three/rapier";
import Beach from "./world/Beach";

const Home = () => {
  const cameraSettings = {
    position: [-18, 5, 12],
    fov: 60,
  };

  return (
    <Canvas shadows camera={cameraSettings}>
      <Controls />
      <Lights />
      <Physics debug={false}>
        <Beach />
      </Physics>
    </Canvas>
  );
};

export default Home;
