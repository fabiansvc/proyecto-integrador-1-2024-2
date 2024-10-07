import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Lights from "./lights/Lights";
import Ocean from "./world/Ocean";
import Octopus from "./world/Octopus";

const Water = () => {
  const cameraSettings = {
    position: [0, 5, 10],
  };

  return (
    <Canvas camera={cameraSettings}>
      <Controls />
      <Lights />
      <Octopus />
      <Ocean />
    </Canvas>
  );
};

export default Water;
