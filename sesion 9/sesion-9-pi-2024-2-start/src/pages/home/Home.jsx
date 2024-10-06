import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import { Physics } from "@react-three/rapier";
import Beach from "./world/Beach";

const Home = () => {
  const cameraSettings = {
    position: [0, 2, 50],
  };

  return (
    <Canvas shadows camera={cameraSettings}>
      <Controls />
      <Lights />
      <Physics debug>
        <Beach name="beach" receiveShadow />
      </Physics>
    </Canvas>
  );
};

export default Home;
