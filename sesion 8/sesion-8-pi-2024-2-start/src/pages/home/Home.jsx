import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import Floor from "./world/Floor";
import Donut from "./world/Donut";
import Ball from "./world/Ball";
import Lights from "./lights/Lights";

const Home = () => {
  const cameraSettings = {
    position: [0, 2, 5],
  };

  return (
    <Canvas shadows camera={cameraSettings}>
      <Controls />
      <Lights />
      <Floor name="floor" rotation-x={-Math.PI * 0.5} receiveShadow />
      <Donut
        name="donut"
        position={[-2, 2, 0]}
        rotation-x={-Math.PI * 0.25}
        castShadow
      />
      <Ball name="ball" position={[2, 2, 0]} castShadow />
    </Canvas>
  );
};

export default Home;
