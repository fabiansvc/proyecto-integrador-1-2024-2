import { OrbitControls, BakeShadows, ContactShadows, SoftShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Donut from "./models-3d/Donut";
import Ball from "./models-3d/Ball";
import Floor from "./models-3d/Floor";
import Lights from "./lights/Lights";

const Home = () => {
  return (
    <Canvas shadows={true} camera={{ position: [0, 1, 5] }}>
      <OrbitControls makeDefault />
      {/* <BakeShadows /> */}
      {/* <ContactShadows /> */}
      <SoftShadows size={2} samples={10} focus={2}/>
      <Lights />
      <Donut />
      <Ball />
      <Floor />
    </Canvas>
  );
};

export default Home;
