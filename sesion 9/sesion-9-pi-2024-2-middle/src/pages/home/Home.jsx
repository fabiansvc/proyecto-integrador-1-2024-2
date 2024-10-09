import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import { Physics } from "@react-three/rapier";
import Beach from "./world/Beach";
import Dog from "./world/Dog";
import Staging from "./staging/Staging";

const Home = () => {
  const cameraSettings = {
    position: [-18, 5, 12],
    fov: 60,
  };

  return (
    <Canvas shadows camera={cameraSettings}>
      <Controls />
      <Lights />
      <Staging />
      <Physics debug={false}>
        <Beach />
        <Dog position={[-15, 6.8, -7]}/>
      </Physics>
    </Canvas>
  );
};

export default Home;
